import { useRef } from 'react';
import ResultsBox from './ResultsBox';

interface MainProps {
  mainId: string;
  resultsBoxId: string;
  handleGlobalClick: (
    e: any,
    refObject: any
  ) => void;
}

const Main = ({ mainId, resultsBoxId, handleGlobalClick }: MainProps) => {
  const ref: any = useRef<HTMLDivElement>(null);
  const resultsBoxRef: any = ref.current;

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
