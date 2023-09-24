/*
 * ISSUE:
 * same as ResultsBox issue, when children elements are clicked, an empty string is logged.
 *
 * Temporary solution below!
 *
 */

import findClickedElement from '../../utils/findClickedElement.ts';

interface HeaderProps {
  headerId: string;
}

const Header = ({ headerId }: HeaderProps) => {
  return (
    <header
      id={headerId}
      className='flex p-4 justify-between borderBase bg-paleBlue font-semibold'
      onClick={findClickedElement}
    >
      <div id={headerId}>LOGO</div>
      <h1 id={headerId} className='text-lg'>
        MouseTracker
      </h1>
    </header>
  );
};

export default Header;
