import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar">  {/* Add your CSS class name here */}
      {/* Your logo/branding element (optional) */}
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </div>
  );
};

export default Navbar;


