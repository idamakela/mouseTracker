import findClickedElement from '../../utils/findClickedElement.ts';
import ResultsBox from './ResultsBox';

interface MainProps {
  mainId: string;
  resultsBoxId: string;
}

const Main = ({ mainId, resultsBoxId }: MainProps) => {
  return (
    <main
      id={mainId}
      className='flex-grow text-center flex flex-col items-center justify-center'
      onClick={findClickedElement}
    >
      <ResultsBox resultsBoxId={resultsBoxId} />
    </main>
  );
};

export default Main;
