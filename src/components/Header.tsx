import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-red-700 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link className="text-3xl font-semibold text-white" href="/">
           Ladies E-commerce Store
        </Link>
        <ul className="flex items-center font-bold text-2xl">
          <li className="mr-4">
            <Link className="text-white hover:text-gray-500" href="/">
                Home
            </Link>
          </li>
          <li className="mr-4">
            <Link className="text-white hover:text-gray-500" href="/about">
               About
            </Link>
          </li>
          <li className="mr-4">
            <Link className="text-white hover:text-gray-500"  href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;



