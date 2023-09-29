/*
 * ISSUE:
 * same as ResultsBox issue, when children elements are clicked, an empty string is logged.
 *
 * Temporary solution below!
 *
 * ISSUE (for Header, Main & Footer):
 * onClick console.logs the old state when another element is clicked, prop requiers async function
 *
 */

import { useContext, useEffect, useRef } from 'react';
import { ClickedItemContext } from '../../utils/contexts';
import { ClickedItemType } from '../../utils/contexts';
import { handleClickedItem } from '../../utils/handleClickedItem';

interface HeaderProps {
  headerId: string;
}

const Header = ({ headerId }: HeaderProps) => {
  const { currentClickedItem, setCurrentClickedItem } = useContext(
    ClickedItemContext
  ) as ClickedItemType;

  const ref = useRef();

  const handleClick = () => {
    if (ref.current) {
      const currentId = ref.current.id;
      console.log({ currentId });
    }
  };

  //   const handleClick = async (targetId: any) => {
  //     const id = targetId;
  //     await setCurrentClickedItem(id);
  //   };

  //   useEffect(() => {
  //     console.log(currentClickedItem);
  //   }, [currentClickedItem]);

  return (
    <header
      ref={ref}
      id={headerId}
      className='flex p-4 justify-between borderBase bg-paleBlue font-semibold'
      onClick={handleClick}
    >
      <div id={headerId}>LOGO</div>
      <h1 id={headerId} className='text-lg'>
        MouseTracker
      </h1>
    </header>
  );
};

export default Header;
