import React, { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Paragraph } from './ui/Paragraph';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = useRef(null);

  const closeOpenMenu = (e) => {
    if (open && !closeMenu.current?.contains(e.target)) {
      setOpen(false);
    }
  };
  document.addEventListener('mousedown', closeOpenMenu);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  return (
    <nav className="bg-third relative z-10">
      <div className="container">
        <div
          ref={closeMenu}
          className={`flex pt-3 md:pb-4 ${
            open ? 'md:flex-row justify-center md:justify-between' : 'flex-row justify-between pb-4'
          }`}>
          <img src="/assets/pokemonLogo.png" alt="pokemonLogo" />

          {open === true ? null : (
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-5 rounded-md text-black md:hidden ml-auto">
              <FaBars />
            </button>
          )}
          <div
            className={`bg-third text-center ${
              open
                ? 'absolute md:relative top-[100%] left-0 pb-4 !flex md:flex-row flex-col w-full md:w-auto'
                : 'sm:flex items-center gap-4 hidden'
            }`}>

            <Link href="/">
              <Paragraph variant="xl" font="font-karla" className="mt-4">
                Home
              </Paragraph>
            </Link>
            <Link href="/">
              <Paragraph variant="xl" font="font-karla" className="mt-4">
                Pokedex
              </Paragraph>
            </Link>
            <Link href="/">
              <Paragraph variant="xl" font="font-karla" className="mt-4">
                Legendaries
              </Paragraph>
            </Link>
            <Link href="/">
              <Paragraph variant="xl" font="font-karla" className="mt-4">
                Documentation
              </Paragraph>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
