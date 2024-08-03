/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { navbarData } from "@/allData/navbarData";
import { slide as Menu } from "react-burger-menu";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleMenuClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <header className='sticky bg-white text-black transition-all ease-linear top-0 z-50 w-full shadow-sm'>
      <div className="flex items-center justify-between px-3 py-3 mx-auto">
        <div className="w-2/3 md:w-1/3 lg:w-1/6">
          <Link onClick={closeMenu} href="/">
            <img
              loading="lazy"
              className="mx-auto lg:mx-0"
              src="/img/logo/logo.png"
              alt="header_logo"
            />
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            &#9776;
          </button>
        </div>
        <div className="hidden lg:inline-block text-end">
          <ul className="flex space-x-6">
            {navbarData?.map((data, index) => {
              const { title, url, subMenu, icon } = data;
              return (
                <motion.li
                  key={index}
                  className="navbar-item inline-block group relative transition-all duration-300 ease-linear"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link href={url} className="p-1 font-medium border-b-4 border-transparent">
                    {title}
                  </Link>
                  {icon && <i className={icon}></i>}
                  {subMenu && (
                    <ul
                      className="bg-white min-w-60 shadow-lg absolute top-auto overflow-hidden left-0 transition-all duration-300 ease-linear"

                    >
                      {subMenu?.map((data, index) => {
                        const { title, url, icon } = data;
                        return (
                          <motion.li
                            key={index}
                            className="text-start"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                          >
                            <Link href={url} className="py-3 px-6 hover:bg-stone-100 transition-all duration-300 ease-linear font-medium flex items-center gap-2 border-b-4 border-transparent">
                              <img loading="lazy" src={icon} alt="submenu_icon" />
                              <span> {title}</span>
                            </Link>
                          </motion.li>
                        );
                      })}
                    </ul>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
      <Menu
        className="bg-white w-full"
        right
        isOpen={isOpen}
        onStateChange={(state) => handleStateChange(state)}
        customBurgerIcon={false}
        customCrossIcon={false}
      >
        <ul className="flex flex-col space-y-3">
          {navbarData?.map((data, index) => {
            const { title, url, subMenu } = data;
            return (
              <motion.li
                key={index}
                className="relative transition-all duration-300 ease-linear"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link
                  onClick={() => handleMenuClick(index)}
                  href={url}
                  className='px-3 py-1 font-medium border-b-4 border-transparent block'
                >
                  {title}
                </Link>
                <AnimatePresence>
                  {subMenu && activeIndex === index && (
                    <motion.ul
                      className="pl-4"
                      initial={{ opacity: 0, height: 0 }}
                      whileInView={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {subMenu.map((subItem, subIndex) => {
                        const { title, url } = subItem;
                        return (
                          <motion.li
                            key={subIndex}
                            className="p-3"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * subIndex }}
                          >
                            <Link href={url} className='block'>
                              {title}
                            </Link>
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </Menu>
    </header>
  );
};

export default Header;
