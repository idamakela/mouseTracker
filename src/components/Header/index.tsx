import findClickedElement from '../../utils/findClickedElement.ts';

interface HeaderProps {
  headerId: string;
  clickedItem: any;
}

const Header = ({ headerId }: HeaderProps) => {
  return (
    <header
      id={headerId}
      className='flex p-4 justify-between borderBase bg-paleBlue font-semibold'
      onClick={findClickedElement}
    >
      <div>LOGO</div>
      <h1 className='text-lg'>MouseTracker</h1>
    </header>
  );
};

export default Header;
