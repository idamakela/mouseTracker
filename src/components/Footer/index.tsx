import { ClickedItemContext } from '../../utils/contexts';
import { ClickedItemType } from '../../utils/contexts';
import { useContext, useRef } from 'react';

interface FooterProps {
  footerId: string;
  myNameId: string;
}

const Footer = ({ footerId, myNameId }: FooterProps) => {
  const { currentClickedItem, setCurrentClickedItem } = useContext(
    ClickedItemContext
  ) as ClickedItemType;

  const handleClick = (e) => {
    const targetId = e.target.id;
    console.log({ targetId });
  };

  return (
    <footer
      id={footerId}
      onClick={handleClick}
      className='flex justify-end'
      onClick={handleClick}
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
