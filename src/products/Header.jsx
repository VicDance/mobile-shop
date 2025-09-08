import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link
      to='/'
      className='text-2xl font-bold text-blue-600 hover:text-blue-700'
    >
      <h1 className='p-2 text-center'>Mobile Shop</h1>
    </Link>
  );
};

export default Header;
