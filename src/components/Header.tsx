import Link from 'next/link';

const Header = () => {
  return (
    <header id="header" className="bg-red-700 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="#home" className="text-xl sm:text-2xl md:text-3xl ml-6 font-semibold text-white">
           Ladies E-commerce Store
        </Link>
        <ul className="flex flex-col sm:flex-row gap-y-4 items-center font-bold text-2xl">
          <li className="mr-4">
            <Link href="#home" className="text-white hover:text-gray-500" >
                Home
            </Link>
          </li>
          <li className="mr-4">
            <Link href="#products" className="text-white hover:text-gray-500">
               Products
            </Link>
          </li>
          <li className="mr-4">
            <Link href="#contacts" className="text-white hover:text-gray-500"  >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;



