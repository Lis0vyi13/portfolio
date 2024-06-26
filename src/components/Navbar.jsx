import { useState, useEffect, useMemo, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeIn } from "../animations/motion";

import Burger from "./Burger";

import { Context } from "../context/context";
import { navLinks } from "../constants";

import logo from "/icons/logo-violet.webp";

const Navbar = () => {
  const { isActive, setIsActive } = useContext(Context);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () =>
      window.removeEventListener("scroll", handleScroll, { passive: true });
  }, []);

  const navList = useMemo(() => {
    const onLinkHandler = (id) => {
      setTimeout(() => {
        navigate(id);
      }, 0);
    };
    return navLinks.map((link) => (
      <li
        key={link.key}
        className="navbar__link transition-all hover:text-white"
        onClick={() => setIsActive(link.title)}
      >
        <a
          className={
            isActive?.toLowerCase() === link.title.toLowerCase()
              ? "text-white block"
              : "text-secondary block"
          }
          onClick={() => onLinkHandler(`/${link.title.toLowerCase()}`)}
          href={link.url}
        >
          {link.title}
        </a>
      </li>
    ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, setIsActive]);

  return (
    <motion.header
      variants={fadeIn("down", "", 0.05, 0.25)}
      initial="hidden"
      whileInView="show"
      className={`navbar sticky top-0 z-50 ${
        scrolled ? "bg-main" : "bg-transparent"
      } `}
    >
      <div className="container">
        <nav className="navbar__content py-3 flex justify-between gap-[40px] items-center">
          <div className="navbar__logo">
            <Link
              className="logo inline-flex items-center gap-2 sm:w-[333px]"
              to="/portfolio/"
              onClick={() => {
                window.scrollTo(0, 0);
                setIsActive("");
              }}
            >
              <img width={60} height={50} src={logo} alt="logo" />
              <div className="logo-text transition-all flex capitalize font-bold">
                <h1>Lisovyi &nbsp;</h1>
                <span className="sm:block hidden">| Frontend Developer</span>
              </div>
            </Link>
          </div>

          <ul className="mdLg:flex hidden navbar__links flex-wrap justify-end items-center gap-8">
            {navList}
          </ul>
          <Burger list={navList} />
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
