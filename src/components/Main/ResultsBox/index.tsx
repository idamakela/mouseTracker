import htmlElements from '../../../utils/htmlElements';
import { useContext, useEffect } from 'react';
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
  refPropResultsBox: any;
}

const ResultsBox = ({ resultsBoxId, refPropResultsBox }: ResultsBoxProps) => {
  const { currentClickedItem } = useContext(
    ClickedItemContext
  ) as ClickedItemType;

  const { displayClickedItem, setDisplayClickedItem } = useContext(
    DisplayItemContext
  ) as DisplayitemType;

  const { clickCount } = useContext(
    TimesClickedContext
  ) as TimesClickedType;

  useEffect(() => {
    if (currentClickedItem !== '' && clickCount < 3) {
      const foundObjectValues: string[] = htmlElements[currentClickedItem];
      const foundArrayValue: string = foundObjectValues[clickCount];
      setDisplayClickedItem(foundArrayValue);
    }
  }, [currentClickedItem, clickCount]);

  return (
    <div
      ref={refPropResultsBox}
      id={resultsBoxId}
      className='borderBase p-8 max-w-md'
    >
      <h3 className='capitalize text-2xl font-semibold'>click me!</h3>
      <p className='pt-4 pb-8'>
        Click anywhere on the screen to find out where the mouse is positioned.
      </p>
      <div className='borderBase m-2 bg-paleBlue min-h-[180px]'>
        <h4 className='uppercase underlineBorder text-lq font-black tracking-widest p-2'>
          results
        </h4>
        {/* i want this to be centered */}
        <p className='p-4 text-base font-medium'>{displayClickedItem}</p>
      </div>
    </div>
  );
};

export default ResultsBox;
