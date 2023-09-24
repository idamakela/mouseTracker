import handleClickedElement from '../../utils/handleClickedElement.ts';

interface FooterProps {
  footerId: string;
  myNameId: string;
}

const Footer = ({ footerId, myNameId }: FooterProps) => {
  return (
    <footer
      id={footerId}
      onClick={handleClickedElement}
      className='flex justify-end'
    >
      <h3
        id={myNameId}
        className='text-sm text-right pt-4 font-semibold inline-block'
      >
        &copy; Ida Mäkelä
      </h3>
    </footer>
  );
};

export default Footer;
