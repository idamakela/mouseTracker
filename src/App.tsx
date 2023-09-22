import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MouseTracker from './components/MouseTracker';

function App() {
  const toggleCursor = (): void => {
    const bodyElement: HTMLBodyElement | null = document.querySelector('body');

    if (bodyElement) {
        bodyElement.classList.toggle('biggerCursor');
    }
  };

  return (
    <div
      className='min-h-screen flex flex-col p-2 bg-paleWhite customCursor'
      onClick={() => toggleCursor()}
    >
      <Header />
      <MouseTracker />
      <Footer />
    </div>
  );
}

export default App;
