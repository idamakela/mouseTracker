interface ResultsBoxProps {
  resultsBoxId: string;
  refPropResultsBox: HTMLElement | null;
}

const ResultsBox = ({ resultsBoxId, refPropResultsBox }: ResultsBoxProps) => {
  return (
    <div
      ref={refPropResultsBox}
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
