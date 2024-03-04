import React, { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { HeaderItem } from './HeaderItem';
import logo from '../../images/logo.png';
import { routes } from '../../index';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = useRef(null);

  const closeOpenMenu = (e) => {
    if (open && !closeMenu.current?.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  document.addEventListener('mousedown', closeOpenMenu);

  return (
    <>
      {open && <div className="fixed top-0 left-0 w-screen h-screen bg-dark bg-opacity-90"></div>}
      <nav className="bg-third relative z-10">
        <div className="container">
          <div
            ref={closeMenu}
            className={`flex pt-3 md:pb-4 ${
              open
                ? 'pt-9 justify-center md:flex-row md:pt-3 md:justify-between'
                : 'flex-row justify-between pb-4'
            }`}>
            <img src={logo} alt="Logo" />
            {open ? (
              ''
            ) : (
              <button
                type="button"
                onClick={() => {
                  handleMenu();
                }}
                className="inline-flex items-center justify-center p-2 rounded-md text-black md:hidden ml-auto">
                <FaBars size={30} />
              </button>
            )}
            <div
              className={`bg-third shadow-lg text-center rounded-header-item-bottom ${
                open
                  ? 'absolute flex flex-col w-full left-0 pt-9 pb-11 top-[100%] gap-4 bg-gradient-to-b from-third to-primary md:relative md:pt-0 md:pb-4 md:flex-row md:gap-8 md:w-auto md:bg-none lg:gap-16'
                  : 'hidden md:flex pb-4 md:gap-8 lg:gap-16'
              }`}>
              {routes.children.map((route, index) => (
                <HeaderItem key={index} to={route.path}>
                  {route.title}
                </HeaderItem>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
