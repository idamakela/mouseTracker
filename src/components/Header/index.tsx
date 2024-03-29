import { useRef } from 'react';
import logo from '../../assets/noun-mouse-click-1642755.svg';

interface HeaderProps {
  headerId: string;
  handleGlobalClick: (e: any, refObject: any) => void;
}

const Header = ({ headerId, handleGlobalClick }: HeaderProps) => {
  const ref: any = useRef<HTMLDivElement>();
  const headerRef: any = ref.current;

  return (
    <header
      ref={ref}
      id={headerId}
      className='flex p-4 justify-between content-end borderBase bg-paleBlue font-semibold'
      onClick={(e) => handleGlobalClick(e, headerRef)}
    >
      <div className='flex justify-center content-center min-w-[40px]'>
        <img
          src={logo}
          alt='Created by Khuzema from Noun Project'
          height='25'
          width='25'
        />
      </div>
      <h1 className='text-lg'>mouseTracker.io</h1>
    </header>
  );
};

export default Header;
