/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { navbarData } from "@/allData/navbarData";

const Header = () => {

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  const pathname = usePathname();

  const [menuBtn, setMenuBtn] = useState(false);

  let mobileMenu;
  if (menuBtn) {
    mobileMenu = (
      <div className="sticky top-auto z-50 w-full shadow-sm ">
        <ul className="">
          {navbarData?.map((data, index) => {
            const { title, url } = data;
            return (
              <li key={index} className="border-b">
                <Link onClick={() => setMenuBtn(!menuBtn)} href={url} className="w-full block p-2 my-0.5 text-sm">
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
  return (
    <header className='sticky bg-white text-black transition-all ease-linear top-0 z-50 w-full shadow-sm'>
      <div className="flex items-center justify-between px-3 py-3 mx-auto ">
        <div className="w-2/3 md:w-1/3 lg:w-1/6">
          <Link href="/">
            <img
              loading="lazy"
              className="mx-auto lg:mx-0"
              src="/img/logo/logo.png"
              alt="header_logo"
            />
          </Link>
        </div>
        <div className="hidden lg:inline-block text-end">
          <ul className="flex space-x-6">
            {navbarData?.map((data, index) => {
              const { title, url, subMenu, icon } = data;
              return (
                <li key={index} className="inline-block group relative transition-all duration-300 ease-linear">
                  <Link href={url} className='p-1 font-medium  border-b-4 border-transparent'>
                    {title}
                  </Link>
                  {icon && <i className={icon}></i>}
                  {subMenu && <ul className="bg-white min-w-60 shadow-lg absolute top-auto left-0 h-0 group-hover:h-max transition-all duration-300 ease-linear overflow-hidden">
                    {subMenu?.map((data, index) => {
                      const { title, url, icon } = data;
                      return (
                        <li key={index} className="text-start">
                          <Link href={url} className='py-3 px-6 hover:bg-stone-100 transition-all duration-300 ease-linear font-medium flex items-center gap-2 border-b-4 border-transparent'>
                            <img src={icon} alt="submenu_icon" />
                            <span> {title}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="order-3 inline-block cursor-pointer lg:hidden">
          <button
            aria-label="toggle-navbar"
            onClick={() => setMenuBtn(!menuBtn)}
            className="flex flex-col items-center justify-center p-1 border border-theme"
          >
            <i className="fa-solid fa-bars text-theme text-xl p-1"></i>
          </button>
        </div>
      </div>
      <div >{mobileMenu}</div>
    </header>
  );
};

export default Header;