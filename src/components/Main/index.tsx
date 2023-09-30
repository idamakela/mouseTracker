import React, { useContext, useRef, useEffect, useState } from 'react';
import ResultsBox from './ResultsBox';
import getClickedElementId from '../../utils/getClickedElementId';
import iterateByThree from '../../utils/iterateByNum';
import {
  ClickedItemContext,
  DisplayItemContext,
  TimesClickedContext,
} from '../../utils/contexts';
import {
  ClickedItemType,
  DisplayitemType,
  TimesClickedType,
} from '../../utils/types';

interface MainProps {
  mainId: string;
  resultsBoxId: string;
}

const Main = ({ mainId, resultsBoxId }: MainProps) => {
  const { currentClickedItem, setCurrentClickedItem } = useContext(
    ClickedItemContext
  ) as ClickedItemType;

  const { displayClickedItem, setDisplayClickedItem } = useContext(
    DisplayItemContext
  ) as DisplayitemType;

  const { clickCount, setClickCount } = useContext(
    TimesClickedContext
  ) as TimesClickedType;

  const ref = useRef<HTMLDivElement>(null);
  const resultsBoxRef: React.RefObject<T> = ref.current;

  const handleClick = (
    e: React.MouseEvent,
    refObject: React.RefObject<T>
  ): void => {
    const clickedItemId: string = getClickedElementId({ e, refObject });

    if (clickedItemId !== currentClickedItem) {
      setCurrentClickedItem(clickedItemId);
      setClickCount(0);
    } else {
      setClickCount((prev) => iterateByThree(prev));
    }
  };

  useEffect(() => {
    if (currentClickedItem !== '' && clickCount < 3) {
      console.log({ currentClickedItem, clickCount });
    }
  }, [currentClickedItem, clickCount]);

  /** SET UI
   *  check how many times a item has been clicked, iteratable by 3
   *  check clicked and what has been clicked to object array
   *  display corresponding string in UI
   */

  return (
    <main
      id={mainId}
      className='flex-grow text-center flex flex-col items-center justify-center'
      onClick={(e) => handleClick(e, resultsBoxRef)}
    >
      <ResultsBox
        resultsBoxId={resultsBoxId}
        refPropResultsBox={ref}
        currentClickedItem={currentClickedItem}
      />
    </main>
  );
};

export default Main;
