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
  refProp: any; 
}

const ResultsBox = ({ resultsBoxId, refProp }: ResultsBoxProps) => {

  return (
    <div
      ref={refProp}
      id={resultsBoxId}
      className='borderBase p-4 max-w-md'
    >
      <h3 className='capitalize text-2xl font-semibold'>click me!</h3>
      <p className='px-4'>
        Click anywhere on the screen to find out where the mouse is positioned.
      </p>
      <div className='borderBase m-2 bg-paleBlue p-2'>
        <h4 className='uppercase text-lg font-medium'>results</h4>
        <p>you clicked</p>
      </div>
    </div>
  );
};

export default ResultsBox;
