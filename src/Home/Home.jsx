import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import video from "../../public/NavbarImg/bg3.mp4";
import Sharhlar from "./Sharhlar/Sharhlar";
import { useTranslation } from "react-i18next";
import { UseFetch } from "../Hook/UseFetch";
import Homeswiper from "./Homeswiper";
import Bot from "./Bot";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function Home() {
  const { t, i18n } = useTranslation();
  const { data: one, isLoading } = UseFetch("/public/db.json");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <div className=" bgi w-[100%] !h-[88vh]">
        <div
          data-aos="fade-bottom"
          className="container w-full h-[100%] grid grid-cols-2 items-center"
        >
          {one?.otish.map((item, id) => (
            <article 
              key={id}
              data-aos="zoom-in"
              className=" scale-100 bg-[#f1f1f1a1] dark:bg-[#2727279a] imgs ml-4 w-[600px] h-[330px] border rounded-md flex flex-col transition duration-300 gap-8 hover:shadow-gray-500 items-center  p-6 shadow-md hover:shadow-md"
            >
              <span className="flex flex-col items-center gap-1">
                <h1 className="text-[32px] font-bold dark:text-[white]">
                  {item?.h1?.[i18n.language] || item?.h1?.en}
                </h1>
                <h1 className="text-4xl font-bold dark:text-white">
                  {item?.h11?.[i18n.language]}
                </h1>
              </span>
              <p className="font-medium text-center dark:text-gray-100">
                {item.p[i18n.language]}
              </p>
              <Link to={"/menu"}>
                <div className="flex items-center justify-center scale-95 ">
                  <div className="relative group">
                    <button className="relative inline-block p-px font-semibold leading-6 text-white dark:bg-gray-400 bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                      <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-800">
                        <div className="relative z-10 flex items-center space-x-2">
                          <span className="transition-all duration-500 group-hover:translate-x-1">
                            {item.btn[i18n.language]}
                          </span>
                          <svg
                            className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                            data-slot="icon"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
            </article>
          ))}
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{
              delay: 1700,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            data-aos="fade-left"
            className=" scale-100 mt-12 w-[500px] h-[330px] border rounded-md"
          >
            {one?.homeswiper.map((item, id) => (
              <SwiperSlide key={id} className="overflow-hidden cursor-pointer ">
                <img
                  src={item.image}
                  alt=""
                  className="transition-all duration-300 hover:scale-110"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <p className="pb-5 dark:bg-gray-900 "></p>
      <Homeswiper />
      <div className="pb-5 dark:bg-gray-900 pt-14">
        <div className="container flex flex-col items-center gap-4 mb-3">
          <h1  data-aos="fade-right" className="mb-3 text-3xl text-gray-800 font-sans dark:text-white">
            {t("home.h1")}
          </h1>
          <video  data-aos="fade-left" className="w-[950px] border rounded-xl" autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <Bot />
      <Sharhlar />
    </>
  );
}

export default Home;

// rgba(30, 30, 32, .8);
