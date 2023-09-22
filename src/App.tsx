import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MouseTracker from './components/MouseTracker';

/*
 * when an element is clicked, update the UI from what element is clicked
 * if its clicked twice, make something funny 
 */

// interface HTMLObject {
//     element: string[]: {
//         firstClick: string,
//         secondClick: string,
//         thirdClick: string,
//     }
// }

const HtmlElements: HTMLObject = {
    header:  [
        "header",
        "header, again",
        "don't you know this is the header already?"
    ],
    main: [
        "main",
        "main again",
        "THIS IS THE MAIN ELEMENT!"
    ],
    textContainer: [
        "text container",
        "TEXT container",
        "an area where text is contained..."
    ],
    footer: [
        "footer",
        "the foot of the website",
        "the bottom part of the website, aka footer."
    ],
    ida: [
        "that's my name",
        "my last-name is Finish",
        "i have a github you know, you could just go there to find out about me: @idamakela"
    ]

}

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
