import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import close from "../assets/icon-close.svg";
import hamburger from "../assets/icon-hamburger.svg";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [hideMenuOnScroll, setHideMenuOnScroll] = useState(false);
  const pathname = window.location.pathname;

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHideMenuOnScroll(true);
      setToggle(false);
    } else {
      setHideMenuOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        !hideMenuOnScroll ? "top-0" : "top-[-128px] md:top-[-176px]"
      } transition-all duration-500 ease-in-out fixed z-10 w-full py-[48px] font-semibold md:py-[64px] md:static bg-midnightGreen`}
    >
      <nav className="w-container mx-auto flex justify-between items-center space-x-12 ">
        <a href="/" className="">
          <img
            src={logo}
            alt="logo"
            className="object-contain object-left w-[128px] h-auto xl:w-[160px]"
          />
        </a>
        {/* desktop and tablet */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="space-x-10 menu">
            <a href="/" className={pathname == "/" ? "text-lightCoral" : ""}>
              home
            </a>
            <a
              href="/jobs"
              className={pathname == "/jobs" ? "text-lightCoral" : ""}
            >
              jobs
            </a>
            <a
              href="/about"
              className={pathname == "/about" ? "text-lightCoral" : ""}
            >
              about
            </a>
          </div>
          <a
            href="/contact"
            className={`${
              pathname == "/contact" ? "text-lightCoral" : ""
            } cta cta-white`}
          >
            contact us
          </a>
        </div>

        {/* mobile */}
        <div className="md:hidden">
          {/* overlay */}
          <div
            className={`${
              !toggle ? "hidden" : "fixed"
            } top-0 bottom-0 left-0 right-0 bg-black/50`}
            onClick={() => setToggle(!toggle)}
          />

          {/* menu button */}
          <img
            src={hamburger}
            alt="menu"
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer w-full h-[17px] object-contain object-right"
          />

          {/* nav  */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-0 bottom-0 right-0 bg-policeBlue h-screen w-[65%] mobile-menu-bg`}
          >
            <div className="flex-col mobile-menu pl-12 pt-[112px] relative w-full">
              <img
                src={close}
                alt="close"
                onClick={() => setToggle(!toggle)}
                className="cursor-pointer w-full h-[16.26px] object-contain object-right absolute top-[56px] right-[8%]"
              />
              <div className="flex flex-col space-y-6 menu mb-[45px]">
                <a
                  href="/"
                  className={pathname == "/" ? "text-lightCoral" : ""}
                >
                  home
                </a>
                <a
                  href="/jobs"
                  className={pathname == "/jobs" ? "text-lightCoral" : ""}
                >
                  jobs
                </a>
                <a
                  href="/about"
                  className={pathname == "/about" ? "text-lightCoral" : ""}
                >
                  about
                </a>
              </div>
              <a
                href="/contact"
                className={`${
                  pathname == "/contact" ? "text-lightCoral" : ""
                } cta cta-white`}
              >
                contact us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
