/*
 * ISSUE:
 * When any children element inside the parent div is clicked, an empty string is logged
 * because the element clicked clicked does not have an id?
 * BUT when the header elements is clicked, it displays the correct id.
 * How do I make the belov divs children elements reference the parents id when clicked? 
 * 
 * Temporary solution below! 
 * 
 */

interface ResultsBoxProps {
  resultsBoxId: string;
}

const ResultsBox = ({ resultsBoxId }: ResultsBoxProps) => {
  return (
    <div id={resultsBoxId} className='borderBase p-4 max-w-md'>
      <h3 id={resultsBoxId} className='capitalize text-2xl font-semibold'>
        click me!
      </h3>
      <p id={resultsBoxId} className='px-4'>
        Click anywhere on the screen to find out where the mouse is positioned.
      </p>
      <div id={resultsBoxId} className='borderBase m-2 bg-paleBlue p-2'>
        <h4 id={resultsBoxId} className='uppercase text-lg font-medium'>
          results
        </h4>
        <p id={resultsBoxId}>you clicked</p>
      </div>
    </div>
  );
};

export default ResultsBox;
