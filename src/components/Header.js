import React, { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Paragraph } from './ui/Paragraph';

export const Header = ({ handleShade }) => {
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
    <nav className="bg-third relative z-10">
      <div className="container">
        <div
          ref={closeMenu}
          className={`flex pt-3 md:pb-4 ${
            open
              ? 'md:flex-row pt-9 md:pt-3 justify-center md:justify-between'
              : 'flex-row justify-between pb-4'
          }`}>
          <img src="/assets/pokemonLogo.png" alt="pokemonLogo" />
          {open ? null : (
            <button
              type="button"
              onClick={() => {
                handleMenu();
                handleShade();
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-black md:hidden ml-auto">
              <FaBars size={30} />
            </button>
          )}
          <div
            className={`bg-third shadow-lg text-center rounded-bottomRadius ${
              open
                ? 'absolute md:relative top-[100%] left-0 pb-11 pt-9 md:pt-0 md:pb-4 !flex md:flex-row md:gap-8 lg:gap-16 gap-4 flex-col w-full md:w-auto bg-gradient-to-b from-third to-primary md:bg-none'
                : 'sm:flex pb-4 md:gap-8 lg:gap-16 hidden'
            }`}>
            <Link href="/">
              <Paragraph variant="xl" font={`${open ? 'font-roboto md:font-karla' : 'font-karla'}`}>
                Home
              </Paragraph>
            </Link>
            <Link href="/">
              <Paragraph variant="xl" font={`${open ? 'font-roboto md:font-karla' : 'font-karla'}`}>
                Pokedex
              </Paragraph>
            </Link>
            <Link href="/">
              <Paragraph variant="xl" font={`${open ? 'font-roboto md:font-karla' : 'font-karla'}`}>
                Legendaries
              </Paragraph>
            </Link>
            <Link href="/">
              <Paragraph variant="xl" font={`${open ? 'font-roboto md:font-karla' : 'font-karla'}`}>
                Documentation
              </Paragraph>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
