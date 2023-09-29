import ResultsBox from './ResultsBox';
import { ClickedItemContext } from '../../utils/contexts';
import { ClickedItemType } from '../../utils/contexts';
import { useContext, useRef } from 'react';

interface MainProps {
  mainId: string;
  resultsBoxId: string;
}

const Main = ({ mainId, resultsBoxId }: MainProps) => {
  const { currentClickedItem, setCurrentClickedItem } = useContext(
    ClickedItemContext
  ) as ClickedItemType;

  const ref = useRef();

  const handleClick = (e) => {
    const targetId = e.target.id;

    if (targetId === '' && ref.current) {
      const currentId = ref.current.id;
      return console.log({ currentId });
    }

    console.log({ targetId });
  };

  return (
    <main
      id={mainId}
      className='flex-grow text-center flex flex-col items-center justify-center'
      onClick={handleClick}
      //   onClick={(e) => {
      //     setCurrentClickedItem(e.target.id);
      //     console.log(currentClickedItem);
      //   }}
    >
      <ResultsBox resultsBoxId={resultsBoxId} refProp={ref} />
    </main>
  );
};

export default Main;
