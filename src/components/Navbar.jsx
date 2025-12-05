import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logotext } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <div className="relative w-9 h-9 ml-4 sm:ml-0">
            <img
              src={logotext}
              alt="logo"
              className="w-24 h-24 sm:w-36 sm:h-36 object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[6rem] min-h-[6rem] sm:min-w-[9rem] sm:min-h-[9rem]"
            />
          </div>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'
                } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center z-50">
          <div
            className={`w-[28px] h-[28px] object-contain cursor-pointer flex flex-col justify-center items-center gap-[5px]`}
            onClick={() => setToggle(!toggle)}>
            <span
              className={`w-full h-[3px] bg-eerieBlack rounded-lg transition-all duration-300 ease-in-out ${toggle ? 'rotate-45 translate-y-[8px]' : ''
                }`}></span>
            <span
              className={`w-full h-[3px] bg-eerieBlack rounded-lg transition-all duration-300 ease-in-out ${toggle ? 'opacity-0' : ''
                }`}></span>
            <span
              className={`w-full h-[3px] bg-eerieBlack rounded-lg transition-all duration-300 ease-in-out ${toggle ? '-rotate-45 -translate-y-[8px]' : ''
                }`}></span>
          </div>

          <div
            className={`fixed top-[70px] left-0 h-[calc(100vh-70px)] w-[75%] max-w-[300px] bg-flashWhite z-40 transform transition-transform duration-300 ease-in-out shadow-xl ${toggle ? 'translate-x-0' : '-translate-x-full'
              }`}>
            <ul className="list-none flex flex-col gap-6 items-start justify-start mt-24 pl-8">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[24px] font-bold font-arenq uppercase tracking-[1px] cursor-pointer hover:text-taupe`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Backdrop */}
          {toggle && (
            <div
              className="fixed inset-0 top-[70px] bg-black bg-opacity-50 z-30"
              onClick={() => setToggle(false)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
