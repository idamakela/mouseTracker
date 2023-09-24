import htmlElements from './htmlElements';

const findClickedElement = (e: any): any => {
  const targetId = e.target.id;
  const foundHtmlElement = htmlElements[targetId].map((item) => item);

  console.log({ targetId, foundHtmlElement });
};

export default findClickedElement;

/*
 * Find what element is clicked - |DONE, but could be a better solution in ResultsBox|
 * Target that element, and display it in the UI -
 * If it is clicked more than once, display correct string -
 *
 * Handle display correct item in ResultsBox
 * Handle see what is clicked in App, must send props
 */
