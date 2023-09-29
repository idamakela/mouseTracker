import ResultsBox from './ResultsBox';
import { ClickedItemContext } from '../../utils/contexts';
import { ClickedItemType } from '../../utils/contexts';
import React, { useContext, useRef, useEffect } from 'react';
import getClickedElementId from '../../utils/getClickedElementId';

interface MainProps {
  mainId: string;
  resultsBoxId: string;
}

const Main = ({ mainId, resultsBoxId }: MainProps) => {
  const { currentClickedItem, setCurrentClickedItem } = useContext(
    ClickedItemContext
  ) as ClickedItemType;

  const ref = useRef<HTMLDivElement>(null);
  const resultsBoxRef: React.RefObject<T> = ref.current;

  const handleClick = (
    e: React.MouseEvent,
    refObject: React.RefObject<T>
  ): void => {
    const clickedItemId: string = getClickedElementId({ e, refObject });
    console.log({ clickedItemId });
  };

  return (
    <main
      id={mainId}
      className='flex-grow text-center flex flex-col items-center justify-center'
      onClick={(e) => handleClick(e, resultsBoxRef)}
    >
      <ResultsBox resultsBoxId={resultsBoxId} refPropResultsBox={ref} />
    </main>
  );
};

export default Main;
