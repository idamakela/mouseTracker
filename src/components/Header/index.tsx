/*
 * ISSUE:
 * same as ResultsBox issue, when LOGO div is clicked, an empty string is logged.
 *
 * Temporary solution below!
 *
 */

import handleClickedElement from '../../utils/handleClickedElement.ts';

interface HeaderProps {
  headerId: string;
  clickedItem: any;
}

const Header = ({ headerId }: HeaderProps) => {
  return (
    <header
      id={headerId}
      className='flex p-4 justify-between borderBase bg-paleBlue font-semibold'
      onClick={handleClickedElement}
    >
      <div id={headerId}>LOGO</div>
      <h1 className='text-lg'>MouseTracker</h1>
    </header>
  );
};

export default Header;
