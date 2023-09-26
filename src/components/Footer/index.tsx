import findClickedElement from '../../utils/findClickedElement.ts';
import { ClickedItemContext } from '../../utils/contexts';
import { ClickedItemType } from '../../utils/contexts';
import { useContext } from 'react';

interface FooterProps {
  footerId: string;
  myNameId: string;
}

const Footer = ({ footerId, myNameId }: FooterProps) => {
  const { currentClickedItem, setCurrentClickedItem } = useContext(
    ClickedItemContext
  ) as ClickedItemType;

  return (
    <footer
      id={footerId}
      onClick={(e) => {
        setCurrentClickedItem(e.target.id);
        console.log(currentClickedItem);
      }}
      className='flex justify-end'
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
