import { useContext, useEffect, useRef } from 'react';

interface HeaderProps {
  headerId: string;
  handleGlobalClick: (
    e: React.MouseEvent,
    refObject: React.RefObject<T>
  ) => void;
}

const Header = ({ headerId, handleGlobalClick }: HeaderProps) => {
  const ref = useRef();
  const headerRef: React.RefObject<T> = ref.current;

  return (
    <header
      ref={ref}
      id={headerId}
      className='flex p-4 justify-between borderBase bg-paleBlue font-semibold'
      onClick={(e) => handleGlobalClick(e, headerRef)}
    >
      <div id={headerId}>LOGO</div>
      <h1 id={headerId} className='text-lg'>
        mouseTracker.io
      </h1>
    </header>
  );
};

export default Header;
