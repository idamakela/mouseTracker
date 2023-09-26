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

import findClickedElement from '../../utils/findClickedElement.ts';
import { useContext, useEffect } from 'react';
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

  const handleClick = async (targetId: any) => {
    const id = targetId;
    await setCurrentClickedItem(id);
  };

  useEffect(() => {
    console.log(currentClickedItem);

    // här ska functionen för resterande display UI beee!! 


  }, [currentClickedItem])

  return (
    <header
      id={headerId}
      className='flex p-4 justify-between borderBase bg-paleBlue font-semibold'
      onClick={(e) => handleClick(e.target.id)}
    >
      <div id={headerId}>LOGO</div>
      <h1 id={headerId} className='text-lg'>
        MouseTracker
      </h1>
    </header>
  );
};

export default Header;
