import React, { useRef } from 'react';
import ResultsBox from './ResultsBox';

interface MainProps {
  mainId: string;
  resultsBoxId: string;
  handleGlobalClick: (
    e: React.MouseEvent,
    refObject: React.RefObject<T>
  ) => void;
}

const Main = ({ mainId, resultsBoxId, handleGlobalClick }: MainProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const resultsBoxRef: React.RefObject<T> = ref.current;

  return (
    <main
      id={mainId}
      className='flex-grow text-center flex flex-col items-center justify-center'
      onClick={(e) => handleGlobalClick(e, resultsBoxRef)}
    >
      <ResultsBox resultsBoxId={resultsBoxId} refPropResultsBox={ref} />
    </main>
  );
};

export default Main;
