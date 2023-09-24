import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  const [changeCursor, setChangeCursor] = useState<boolean>(false);
  const [currentClickedItem, setCurrentClickedItem] = useState<string>('');
  

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
    <div
      className='min-h-screen flex flex-col p-2 bg-paleWhite customCursor'
      onClick={() => setChangeCursor(true)}
    >
      <Header
        headerId='header'
        currentClickedItem={currentClickedItem}
        setCurrentClickedItem={setCurrentClickedItem}
      />
      <Main mainId='main' resultsBoxId='resultsBox' />
      <Footer footerId='footer' myNameId='myName' />
    </div>
  );
}

export default App;
