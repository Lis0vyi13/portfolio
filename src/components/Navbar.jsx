import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { fadeIn } from '../animations/motion';

import Burger from './Burger';

import { navLinks } from '../constants';

import logo from '/logo-violet.png';

const Navbar = () => {
  const [isActive, setIsActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
