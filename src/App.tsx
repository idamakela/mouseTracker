import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import {
  ClickedItemContext,
  DisplayItemContext,
  TimesClickedContext,
} from './utils/contexts';

function App() {
  const [changeCursor, setChangeCursor] = useState<boolean>(false);
  const [currentClickedItem, setCurrentClickedItem] = useState<string>('');
  const [displayClickedItem, setDisplayClickedItem] = useState<string>('');
  const [clickCount, setClickCount] = useState<number>(0);

  // Room for improvment, doesnt work sometimes ...?
  useEffect(() => {
    const bodyElement: HTMLBodyElement | null = document.querySelector('body');
    let timeoutId: any;

    if (bodyElement && changeCursor) {
      bodyElement.classList.add('smallerCursor');

      timeoutId = setTimeout(() => {
        bodyElement.classList.remove('smallerCursor');
        setChangeCursor(false);
      }, 300);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [changeCursor]);

  return (
    <ClickedItemContext.Provider
      value={{ currentClickedItem, setCurrentClickedItem }}
    >
      <DisplayItemContext.Provider
        value={{ displayClickedItem, setDisplayClickedItem }}
      >
        <TimesClickedContext.Provider value={{ clickCount, setClickCount }}>
          <div
            className='min-h-screen flex flex-col p-2 bg-paleWhite customCursor'
            onClick={() => setChangeCursor(true)}
          >
            <Header headerId='header' />
            <Main mainId='main' resultsBoxId='resultsBox' />
            <Footer footerId='footer' myNameId='myName' />
          </div>
        </TimesClickedContext.Provider>
      </DisplayItemContext.Provider>
    </ClickedItemContext.Provider>
  );
}

export default App;
