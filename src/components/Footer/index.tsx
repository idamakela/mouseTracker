interface FooterProps {
  footerId: string;
  myNameId: string;
  handleGlobalClick: (e: React.MouseEvent, refObject: React.RefObject<T>) => void;
}

const Footer = ({ footerId, myNameId, handleGlobalClick }: FooterProps) => {
  return (
    <footer
      id={footerId}
      className='flex justify-end'
      onClick={(e) => handleGlobalClick(e)}
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
