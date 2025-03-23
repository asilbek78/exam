import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import {UseFetch} from "../Hook/UseFetch"
// import { useTheme } from "../Hook/UseTheme";
import { Link } from "react-router-dom";
import AOS from "aos"
import { useEffect } from "react";

function Homeswiper() {
  const { t, i18n } = useTranslation();
  const { data: two, isLoading } = UseFetch("/public/db.json");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animatsiya davomiyligi 1s, faqat bir marta
  }, []);
  // const [theme, setTheme] = useTheme("");

  return (
    <>
    <div className="dark:bg-gray-900 ">
      <div className="p-4 container ">
        {isLoading && <h1>Loading...</h1>}
        <article className="flex text-center pb-9">
          <h1 className="container text-[27px] font-medium dark:text-teal-50" data-aos="fade-up">
            {t("homeh1.nom")}
          </h1>
          {/* <p onClick={() => setTheme(theme === "light" ? "dark" : "light")}></p> */}
        </article>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"3"}
          autoplay={{
            delay: 2300,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className=" w-[70%] m-auto"
          data-aos="fade-zoom-in"
        >
          {two?.homefood &&
            two?.homefood.map((item, id) => (
              <SwiperSlide
                key={id}
                className="p-3 duration-300 bg-gray-100 border rounded-lg dark:text-red dark:bg-gray-900 hover:drop-shadow-xl"
              >
                <img
                  className="max-h-[160px] border rounded-lg hover:scale-105 duration-300"
                  src={item.img}
                  alt=""
                />
                <div className="flex flex-col gap-1 mt-3">
                  <h1 className="font-serif text-xl dark:text-white">
                    {item.name[i18n.language]}
                  </h1>
                  <p className="font-sans text-md text-gray-600 dark:text-gray-300">
                    {item.desc[i18n.language]}
                  </p>
                  <article className="flex items-center gap-3">
                    <p className="text-xl font-medium text-gray-500 line-through dark:text-slate-300">
                      {item.price1}
                    </p>
                    <p className="text-[27px] font-medium text-teal-500 dark:text-teal-400">
                      {item.price2}
                    </p>
                  </article>
                  <article className="flex justify-center">
                    <Link to={`/homeswiper/${item.url}`}>
                    <button className="dark:bg-gray-700 dark:text-white dark:hover:bg-gray-900 mt-1 bg-slate-300 p-2 w-[100%] text-lg font-sans border rounded-md hover:bg-[#FFB84D] hover:text-white transition duration-300">
                      {item.btn[i18n.language]}
                    </button>
                    </Link>
                  </article>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
    </>
  );
}

export default Homeswiper;
