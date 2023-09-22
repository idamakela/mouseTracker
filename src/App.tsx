import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MouseTracker from './components/MouseTracker';

function App() {
  const [changeCursor, setChangeCursor] = useState<boolean>(false);

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
      <Header />
      <MouseTracker />
      <Footer />
    </div>
  );
}

export default App;
