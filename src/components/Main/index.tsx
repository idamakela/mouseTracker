import handleClickedElement from '../../utils/handleClickedElement.ts';
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
      onClick={handleClickedElement}
    >
      <ResultsBox resultsBoxId={resultsBoxId} />
    </main>
  );
};

export default Main;
