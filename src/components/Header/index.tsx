import { useContext, useEffect, useRef } from 'react';
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
import { handleClickedItem } from '../../utils/handleClickedItem';
import getClickedElementId from '../../utils/getClickedElementId';
import iterateByThree from '../../utils/iterateByNum';

interface HeaderProps {
  headerId: string;
}

const Header = ({ headerId }: HeaderProps) => {
  const { currentClickedItem, setCurrentClickedItem } = useContext(
    ClickedItemContext
  ) as ClickedItemType;

  const { clickCount, setClickCount } = useContext(
    TimesClickedContext
  ) as TimesClickedType;

  const ref = useRef();
  const headerRef: React.RefObject<T> = ref.current;

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

  return (
    <header
      ref={ref}
      id={headerId}
      className='flex p-4 justify-between borderBase bg-paleBlue font-semibold'
      onClick={(e) => handleClick(e, headerRef)}
    >
      <div id={headerId}>LOGO</div>
      <h1 id={headerId} className='text-lg'>
        mouseTracker.io
      </h1>
    </header>
  );
};

export default Header;
