import ResultsBox from './ResultsBox';
import findClickedElement from '../../utils/findClickedElement.ts';
import { ClickedItemContext } from '../../utils/contexts';
import { ClickedItemType } from '../../utils/contexts';
import { useContext } from 'react';

interface MainProps {
  mainId: string;
  resultsBoxId: string;
}

const Main = ({ mainId, resultsBoxId }: MainProps) => {
  const { currentClickedItem, setCurrentClickedItem } = useContext(
    ClickedItemContext
  ) as ClickedItemType;

  return (
    <main
      id={mainId}
      className='flex-grow text-center flex flex-col items-center justify-center'
      onClick={(e) => {
        setCurrentClickedItem(e.target.id);
        console.log(currentClickedItem);
      }}
    >
      <ResultsBox resultsBoxId={resultsBoxId} />
    </main>
  );
};

export default Main;
