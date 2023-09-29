import { ClickedItemContext } from '../../utils/contexts';
import { ClickedItemType } from '../../utils/contexts';
import { useContext } from 'react';
import getClickedElementId from '../../utils/getClickedElementId';

interface FooterProps {
  footerId: string;
  myNameId: string;
}

const Footer = ({ footerId, myNameId }: FooterProps) => {
  const { currentClickedItem, setCurrentClickedItem } = useContext(
    ClickedItemContext
  ) as ClickedItemType;

  const handleClick = (
    e: React.MouseEvent,
  ): void => {
    const clickedItemId: string = getClickedElementId({ e });
    console.log({ clickedItemId });
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
