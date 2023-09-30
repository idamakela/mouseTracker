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
import { useContext } from 'react';
import getClickedElementId from '../../utils/getClickedElementId';
import iterateByThree from '../../utils/iterateByNum';

interface FooterProps {
  footerId: string;
  myNameId: string;
}

const Footer = ({ footerId, myNameId }: FooterProps) => {
  const { currentClickedItem, setCurrentClickedItem } = useContext(
    ClickedItemContext
  ) as ClickedItemType;

  const { clickCount, setClickCount } = useContext(
    TimesClickedContext
  ) as TimesClickedType;

  const handleClick = (e: React.MouseEvent): void => {
    const clickedItemId: string = getClickedElementId({ e });

    if (clickedItemId !== currentClickedItem) {
      setCurrentClickedItem(clickedItemId);
      setClickCount(0);
    } else {
      setClickCount((prev) => iterateByThree(prev));
    }
  };

  return (
    <footer
      id={footerId}
      className='flex justify-end'
      onClick={(e) => handleClick(e)}
    >
      <h3
        id={myNameId}
        className='text-s text-right pt-4 font-semibold inline-block'
      >
        &copy; Ida Mäkelä
      </h3>
    </footer>
  );
};

export default Footer;
