import { Link, Outlet } from "react-router-dom";
import dark from "../../public/NavbarImg/light.png";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { ChevronUp, Sun, Moon } from "lucide-react";
import { useTheme } from "../Hook/UseTheme";
import light from "../../public/NavbarImg/dark.png";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { CgClose } from "react-icons/cg";

function Navbar_1Page() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useTheme("light");

  const onchangeLanguage = (e, til) => {
    e.preventDefault();
    i18n.changeLanguage(til);
    setIsOpen(false);
  };

  useEffect(() => {}, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <section className="z-10 bg-[#FFFFFFB8] fixed top-0 left-0 w-full border-b border-gray-200 dark:bg-gray-950">
        <nav className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <Link to={"/"}>
              <img
                className="w-[190px] pt-4 pb-4 cursor-pointer"
                src={theme === "light" ? dark : light}
                alt="Logo"
              />
            </Link>
            <div className="flex items-center gap-8 dark:text-white max-xl:hidden">
              <ul className="flex gap-8 text-lg">
                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    `font-semibold transition duration-300 cursor-pointer ${
                      isActive ? "text-orange-400" : "hover:text-zinc-400"
                    }`
                  }
                >
                  <li>{t("navbar.nav")}</li>
                </NavLink>
                <NavLink
                  to="/biz_haqimizda"
                  className={({ isActive }) =>
                    `font-semibold transition duration-300 cursor-pointer ${
                      isActive ? "text-orange-400" : "hover:text-zinc-400"
                    }`
                  }
                >
                  <li>{t("navbar.nav2")}</li>
                </NavLink>
                <NavLink
                  to="/yangiliklar"
                  className={({ isActive }) =>
                    `font-semibold transition duration-300 cursor-pointer ${
                      isActive ? "text-orange-400" : "hover:text-zinc-400"
                    }`
                  }
                >
                  <li>{t("navbar.nav3")}</li>
                </NavLink>
                <NavLink
                  to="/boglanish"
                  className={({ isActive }) =>
                    `font-semibold transition duration-300 cursor-pointer ${
                      isActive ? "text-orange-400" : "hover:text-zinc-400"
                    }`
                  }
                >
                  <li>{t("navbar.nav6")}</li>
                </NavLink>
              </ul>

              {/* <a href="+998 88 434 78 08"> */}
              <span className="flex gap-[6px] items-center cursor-pointer group">
                <h2 className="text-[20px] font-semibold dark:group-hover:text-white dark:text-gray-400 group-hover:text-black">
                  +998 88
                </h2>
                <h2 className="text-xl font-semibold">434 78 08</h2>
              </span>
              {/* </a> */}
              <SignedOut>
                <button className="relative inline-flex items-center justify-center px-5 py-[9px] overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute bottom-0 left-0 h-full -ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-auto h-full opacity-100 object-stretch"
                      viewBox="0 0 487 487"
                    >
                      <path
                        fillOpacity=".1"
                        fillRule="nonzero"
                        fill="#FFF"
                        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="object-cover w-full h-full"
                      viewBox="0 0 487 487"
                    >
                      <path
                        fillOpacity=".1"
                        fillRule="nonzero"
                        fill="#FFF"
                        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
                  <span className="relative text-base font-semibold">
                    <SignInButton mode="modal" />
                  </span>
                </button>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>

              <div className="relative group z-[2] py-[4px] pl-[12px] px-[6px] bg-white dark:bg-black border rounded-lg hover:bg-slate-100 duration-200">
                <p
                  className="flex items-center text-lg font-medium cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {i18n.language === "uz"
                    ? "Uzbek"
                    : i18n.language === "en"
                    ? "English"
                    : "Русский"}{" "}
                  <ChevronUp
                    className={`ml-[5px] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </p>
                {isOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[105px] dark:bg-black bg-white rounded-lg border border-gray-300 shadow-lg">
                    <p
                      onClick={(e) => onchangeLanguage(e, "uz")}
                      className="cursor-pointer text-lg font-semibold text-center py-1 hover:bg-gray-300 dark:hover:bg-[#5f5f5f]"
                    >
                      Uzbek
                    </p>
                    <p
                      onClick={(e) => onchangeLanguage(e, "en")}
                      className="cursor-pointer text-lg font-semibold text-center py-1 hover:bg-gray-300 dark:hover:bg-[#5f5f5f]"
                    >
                      English
                    </p>
                    <p
                      onClick={(e) => onchangeLanguage(e, "ru")}
                      className="cursor-pointer text-lg font-semibold text-center py-1 hover:bg-gray-300 dark:hover:bg-[#5f5f5f]"
                    >
                      Русский
                    </p>
                  </div>
                )}
              </div>

              <div className="relative flex items-center gap-2 duration-200 hover:scale-105">
                <label className="relative inline-flex items-center">
                  <input
                    className="hidden peer"
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                  />
                  <div
                    className="cursor-pointer relative w-[70px] h-[40px] bg-gray-200 peer-checked:bg-zinc-500 rounded-full
      after:absolute after:content-[''] after:w-[30px] after:h-[30px] after:bg-gradient-to-r from-orange-500 to-yellow-400
      peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px]
      after:left-[5px] active:after:w-[32px] peer-checked:after:left-[68px] peer-checked:after:translate-x-[-100%]
      shadow-sm duration-300 after:duration-300 after:shadow-md"
                  ></div>
                  {theme === "light" ? (
                    <Sun className="size-5 absolute left-[8px] top-[10px] text-white cursor-pointer" />
                  ) : (
                    <Moon className="size-5 absolute right-[8px] top-[10px] text-white cursor-pointer" />
                  )}
                </label>
              </div>
            </div>
            <div className="xl:hidden flex items-center gap-4">
              <SignedOut>
                <button className="relative inline-flex items-center justify-center px-5 py-[9px] overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute bottom-0 left-0 h-full -ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-auto h-full opacity-100 object-stretch"
                      viewBox="0 0 487 487"
                    >
                      <path
                        fillOpacity=".1"
                        fillRule="nonzero"
                        fill="#FFF"
                        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="object-cover w-full h-full"
                      viewBox="0 0 487 487"
                    >
                      <path
                        fillOpacity=".1"
                        fillRule="nonzero"
                        fill="#FFF"
                        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
                  <span className="relative text-base font-semibold">
                    <SignInButton mode="modal" />
                  </span>
                </button>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>

              <div className="relative group z-[2] py-[4px] pl-[12px] px-[6px] bg-white dark:bg-black border rounded-lg hover:bg-slate-100 duration-200">
                <p
                  className="flex items-center text-lg font-medium cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {i18n.language === "uz"
                    ? "Uzbek"
                    : i18n.language === "en"
                    ? "English"
                    : "Русский"}{" "}
                  <ChevronUp
                    className={`ml-[5px] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </p>
                {isOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[105px] dark:bg-black bg-white rounded-lg border border-gray-300 shadow-lg">
                    <p
                      onClick={(e) => onchangeLanguage(e, "uz")}
                      className="cursor-pointer text-lg font-semibold text-center py-1 hover:bg-gray-300 dark:hover:bg-[#5f5f5f]"
                    >
                      Uzbek
                    </p>
                    <p
                      onClick={(e) => onchangeLanguage(e, "en")}
                      className="cursor-pointer text-lg font-semibold text-center py-1 hover:bg-gray-300 dark:hover:bg-[#5f5f5f]"
                    >
                      English
                    </p>
                    <p
                      onClick={(e) => onchangeLanguage(e, "ru")}
                      className="cursor-pointer text-lg font-semibold text-center py-1 hover:bg-gray-300 dark:hover:bg-[#5f5f5f]"
                    >
                      Русский
                    </p>
                  </div>
                )}
              </div>

              <div className="relative flex items-center gap-2 duration-200 hover:scale-105">
                <label className="relative inline-flex items-center">
                  <input
                    className="hidden peer"
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                  />
                  <div
                    className="cursor-pointer relative w-[70px] h-[40px] bg-gray-200 peer-checked:bg-zinc-500 rounded-full
    after:absolute after:content-[''] after:w-[30px] after:h-[30px] after:bg-gradient-to-r from-orange-500 to-yellow-400
    peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px]
    after:left-[5px] active:after:w-[32px] peer-checked:after:left-[68px] peer-checked:after:translate-x-[-100%]
    shadow-sm duration-300 after:duration-300 after:shadow-md"
                  ></div>
                  {theme === "light" ? (
                    <Sun className="size-5 absolute left-[8px] top-[10px] text-white cursor-pointer" />
                  ) : (
                    <Moon className="size-5 absolute right-[8px] top-[10px] text-white cursor-pointer" />
                  )}
                </label>
              </div>
              <button onClick={() => setMenuOpen(!isMenuOpen)}>
                <IoMenu color="white" size={34} />
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 text-white flex flex-col items-center justify-center space-y-8">
              <div className="flex flex-col items-center justify-center gap-20 mt-44 h-full dark:text-white relative">
                <button
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  className="absolute -top-[90px] md:right-[300px] lg:right-[350px] sm:right-[300px] right-52"
                >
                  <CgClose color="white" size={34} />
                </button>

                <ul className="flex flex-col text-center gap-8 text-lg">
                  <Link to={"/menu"} onClick={() => setMenuOpen(false)}>
                    <li className="font-semibold transition duration-300 cursor-pointer hover:text-zinc-400">
                      {t("navbar.nav")}
                    </li>
                  </Link>
                  <Link
                    to={"/biz_haqimizda"}
                    onClick={() => setMenuOpen(false)}
                  >
                    <li className="font-semibold transition duration-300 cursor-pointer hover:text-zinc-400">
                      {t("navbar.nav2")}
                    </li>
                  </Link>
                  <Link to={"/yangiliklar"} onClick={() => setMenuOpen(false)}>
                    <li className="font-semibold transition duration-300 cursor-pointer hover:text-zinc-400">
                      {t("navbar.nav3")}
                    </li>
                  </Link>
                  <Link to={"/boglanish"} onClick={() => setMenuOpen(false)}>
                    <li className="font-semibold transition duration-300 cursor-pointer hover:text-zinc-400">
                      {t("navbar.nav6")}
                    </li>
                  </Link>
                </ul>

                <span className="flex gap-[6px] items-center mb-80 cursor-pointer group">
                  <h2 className="text-[20px] font-semibold dark:group-hover:text-white dark:text-gray-400 group-hover:text-black">
                    +998 88
                  </h2>
                  <h2 className="text-xl font-semibold">434 78 08</h2>
                </span>
              </div>
            </div>
          )}
        </nav>
        {/* {isModalOpen && <JoinUsModal onClose={() => setIsModalOpen(false)} />} */}
      </section>

      <main className="pt-[80px] overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Navbar_1Page;
