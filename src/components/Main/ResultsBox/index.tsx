import React, { useContext, useRef, useEffect, useState } from 'react';
import {
  ClickedItemContext,
  DisplayItemContext,
  TimesClickedContext,
} from '../../../utils/contexts';
import {
  ClickedItemType,
  DisplayitemType,
  TimesClickedType,
} from '../../../utils/types';

interface ResultsBoxProps {
  resultsBoxId: string;
  refPropResultsBox: HTMLElement | null;
}

const ResultsBox = ({ resultsBoxId, refPropResultsBox }: ResultsBoxProps) => {
  const { currentClickedItem, setCurrentClickedItem } = useContext(
    ClickedItemContext
  ) as ClickedItemType;

  const { displayClickedItem, setDisplayClickedItem } = useContext(
    DisplayItemContext
  ) as DisplayitemType;

  const { clickCount, setClickCount } = useContext(
    TimesClickedContext
  ) as TimesClickedType;

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
