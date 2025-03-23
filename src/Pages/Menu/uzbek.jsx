import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UseFetch } from "../../Hook/UseFetch";
import { Link } from "react-router-dom";

function uzbek() {
  const { i18n } = useTranslation();
  const { data: seven, isLoading } = UseFetch("/public/db.json");
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <div className="dark:bg-gray-900 ">
        <div className="container h-auto">
          {seven?.uzbek?.map((item, id) => (
            <span
              key={id}
              data-aos="fade-down"
              className="flex items-center justify-center gap-4 text-center"
            >
              <h1 className="dark:text-white text-[40px] font-semibold text-gray-700 mt-2">
                {item.h1[i18n.language]}
              </h1>
              <img
                className="animate-spin-slow w-[70px] md:w-[90px]"
                src={item.img}
                alt=""
              />
            </span>
          ))}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-10 mt-7 w-[91%] mx-auto">
            {seven?.uzbektaomlar?.map((item, id) => (
              <div
                key={id}
                data-aos="zoom-in"
                className="gap-2 hover:shadow-md dark:bg-[#0f152a] duration-300 hover:shadow-black h-[460px] max-w-[350px] bg-white group border rounded-lg shadow-sm shadow-black flex flex-col p-4"
              >
                <img
                  className="w-full group-hover:scale-105 duration-300 bg-cover h-48 border rounded-lg"
                  src={item.img}
                  alt=""
                />
                <div className="flex flex-col justify-between h-full">
                  <article className="flex flex-col gap-2">
                    <h1 className="font-semibold dark:text-white text-gray-800 text-[21px]">
                      {item.name[i18n.language]}
                    </h1>
                    <p className="text-[16px] dark:text-gray-200 text-gray-600 font-serif">
                      {item.desc[i18n.language]}
                    </p>
                    <p className="font-medium text-[16px] dark:text-orange-500 text-orange-600">
                      {item.bonus[i18n.language]}
                    </p>
                    <article className=" flex items-center justify-around">
                      <p className="text-gray-700 dark:text-gray-50 text-[19px] font-medium">
                        {item.price}
                      </p>
                    <button className=" font-medium duration-300 h-11 px-4 hover:bg-gray-500 bg-gray-700 dark:bg-[#111431] dark:hover:bg-[#151544]  text-white border rounded-3xl" >Yetkazib berish</button>

                    </article>
                  </article>
                  <article className=" flex justify-between items-center">
                    <Link
                      className=" overflow-hidden mt-2 scale-95"
                      to={`/uzbek/${item.url}`}
                    >
                      <button
                        className="z-0 font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-gray-700 dark:bg-[#111431] 
                  backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 
                  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
                  before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black 
                  before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative 
                  px-4 py-[7px] overflow-hidden border rounded-full group"
                        type="submit"
                      >
                        {item.btn[i18n.language]}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 19"
                          className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 
                    text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 
                    group-hover:border-gray-700 p-2 rotate-45 scale-95"
                        >
                          <path
                            className="fill-gray-800 group-hover:fill-gray-800"
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                          ></path>
                        </svg>
                      </button>
                    </Link>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default uzbek;
