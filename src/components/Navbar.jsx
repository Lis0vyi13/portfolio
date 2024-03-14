import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

import { motion } from 'framer-motion';

import logo from '/logo-violet.png';
import { fadeIn } from '../animations/motion';

const Burger = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      onClick={handleClick}
      className='burger md:hidden block relative cursor-pointer p-2'
    >
      <div className={`relative w-[20px] h-[20px] scale-x-[-1]`}>
        <span
          className={`absolute top-0 h-[2.5px] bg-white rounded-10 w-1/2 transition-all duration-300 ${
            isOpen && 'rotate-45 w-[140%] origin-left'
          }`}
        ></span>
        <span
          className={`absolute top-1/2 h-[2.5px] bg-white rounded-10 w-full transition-opacity duration-300 ${
            isOpen && 'opacity-0'
          }`}
        ></span>
        <span
          className={`absolute top-full h-[2.5px] bg-white rounded-10 w-3/4 transition-all duration-300 ${
            isOpen && '-rotate-45 origin-left w-[140%]'
          }`}
        ></span>
      </div>

      <div
        className={`transition-all burger-menu absolute right-0 mt-6 min-w-[150px] rounded-xl ${
          isOpen
            ? 'opacity-1 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className='burger-menu__content text-left flex flex-col gap-4 p-4'>
          {list}
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isActive, setIsActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navList = useMemo(() => {
    return navLinks.map((link) => (
      <li
        key={link.key}
        className='navbar__link transition-all hover:text-white'
        onClick={() => setIsActive(link.title)}
      >
        <a
          className={isActive === link.title ? 'text-white' : 'text-secondary'}
          href={link.url}
        >
          {link.title}
        </a>
      </li>
    ));
  }, [isActive]);

  return (
    <motion.header
      variants={fadeIn('down', '', 0.05, 0.25)}
      initial='hidden'
      whileInView='show'
      className={`navbar sticky top-0 z-50 ${
        scrolled ? 'bg-main' : 'bg-transparent'
      } `}
    >
      <div className='container'>
        <nav className='navbar__content py-3 flex justify-between gap-[40px] items-center'>
          <div className='navbar__logo'>
            <Link
              className='logo inline-flex items-center gap-2 sm:w-[333px]'
              to='/'
              onClick={() => window.scrollTo(0, 0)}
            >
              <img width='60' src={logo} alt='logo' />
              <div className='logo-text transition-all flex capitalize font-bold'>
                <h1>Lisovyi &nbsp;</h1>
                <span className='sm:block hidden'>| Frontend Developer</span>
              </div>
            </Link>
          </div>

          <ul className='md:flex hidden navbar__links flex-wrap justify-end items-center gap-8'>
            {navList}
          </ul>
          <Burger list={navList} />
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
