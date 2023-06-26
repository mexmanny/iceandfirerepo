import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 pr-10">
      <div className="flex items-center">
        <div className="flex-1">
          <Link href="/">
            {/* <Image
              src="https://media.istockphoto.com/id/1332346365/photo/fire-and-ice-concept-design-with-spark-3d-illustration.jpg?s=612x612&w=0&k=20&c=Ys9aC307ZNLKfPEHa1V32Fajrg5qxprUM9q1H7BzFT4="
              alt="logo"
              width={150}
              height={150}
            ></Image> */}
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal flex justify-between space-x-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
