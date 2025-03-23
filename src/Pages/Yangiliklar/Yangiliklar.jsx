import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UseFetch } from "../../Hook/UseFetch";
// import Firstnew from "./firstnew"
function Yangiliklar() {
  const { t, i18n } = useTranslation();
  const { data: five, isLoading } = UseFetch("/public/db.json");

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <div className="pt-[30px] bg-gray-200 dark:bg-gray-900 h-auto">
        <div className="container ">
          <div className=" w-[94%] h-auto m-auto">
            <span className="flex flex-col items-center gap-6 m-auto mb-10 text-center">
              <h1 className="text-6xl font-bold text-orange-500 dark:text-yellow-400 mb-2">
                {t("news.h1")}
              </h1>
              {/* <p className="max-w-[800px] text-md font-serif text-orange-400 dark:text-gray-300">
                {t("news.p")}
              </p> */}
            </span>
            <h1 className="ml-4 text-3xl font-semibold text-gray-600 mb-7 dark:text-yellow-400">
              {t("news.h5")}
            </h1>
            <div className="flex items-center gap-5 p-4 mb-10 duration-300 bg-gray-100 border dark:bg-gray-800 rounded-xl hover:shadow-xl">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"1"}
                autoplay={{
                  delay: 1500,
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
                className=" w-[500px] h-[260px]"
              >
                {five?.newswiper.map((item, id) => (
                  <SwiperSlide
                    key={id}
                    className="overflow-hidden border rounded-lg"
                  >
                    <img
                      src={item.image}
                      className="duration-300 bg-cover border rounded-lg hover:scale-110"
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <article className=" flex flex-col w-[65%] gap-7">
                <h1 className="font-serif text-xl text-gray-800 dark:text-gray-300">
                  {t("news.h2")}
                </h1>
                <p className=" text-[23px] text-gray-900  font-medium dark:text-yellow-400">
                  {t("news.p1")}
                </p>
                <Link to={"/menu"}>
                  <button className=" dark:bg-gray-700 dark:hover:bg-gray-900 border rounded-xl px-[18px] py-[10px] bg-[#FFB84D] text-xl text-white font-semibold hover:bg-[#E69C3C] transition duration-300 flex items-center justify-center gap-2 group">
                    {t("news.btn")}
                    <ArrowRight className=" group-hover:rotate-[-50deg] transition duration-200" />
                  </button>
                </Link>
              </article>
            </div>
            {five?.news?.map((item, id) => (
              <div
                key={id}
                className="flex items-center gap-5 p-5 mb-10 duration-300 bg-gray-100 border  dark:bg-gray-800 rounded-xl hover:shadow-xl"
              >
                <img
                  src={item.image}
                  className="max-w-[435px] h-[250px] border rounded-lg duration-300 hover:scale-105 "
                  alt=""
                />
                <article className="flex flex-col gap-5">
                  <h1 className="font-serif text-lg text-gray-800 dark:text-gray-300">
                    {item?.h1[i18n.language]}
                  </h1>
                  <p className="text-2xl font-medium text-gray-900 dark:text-yellow-400 ">
                    {item.h2[i18n.language]}
                  </p>
                  <Link to={`/yangi/${item.url}`}>
                    <button className="dark:bg-gray-700 dark:hover:bg-gray-900 overflow-hidden border rounded-xl px-[18px] py-[10px]  bg-[#FFB84D] text-xl text-white font-semibold hover:bg-[#E69C3C] transition duration-300 flex items-center justify-center gap-2 group">
                      {item.btn[i18n.language]}
                      <ArrowRight className="transition duration-300 group-hover:translate-x-11" />
                    </button>
                  </Link>
                </article>
              </div>
            ))}
            <article className="w-[85%] flex flex-col gap-3 mb-8">
              <h1 className="text-2xl font-semibold text-gray-600 dark:text-yellow-400">
                {t("news.h3")}
              </h1>
              <p className="font-serif text-gray-800 dark:text-gray-300 text-md">
                {t("news.p2")}
              </p>
              <p className="font-serif text-gray-800 dark:text-gray-300 text-md">
                {t("news.p3")}
              </p>
              {/* <p className="font-serif text-gray-800 text-md">
                {t("news.p4")}
              </p> */}
            </article>
            <h1 className="mb-5 text-2xl font-semibold text-gray-600 dark:text-yellow-400">
              {t("news.h4")}
            </h1>
            {five?.newfood.map((item, id) => (
              <div key={id} className="duration-300 hover:shadow-lg">
                <article className=" dark:bg-gray-800 mb-8 w-[90%] flex gap-1 items-center border rounded-lg bg-slate-300 hover:shadow-xl duration-300">
                  <img
                    className="border rounded-lg h-[200px] transition duration-300 m-3 hover:scale-105"
                    src={item.img}
                    alt=""
                  />
                  <span className="flex flex-col gap-1 mr-4">
                    <h1 className="text-xl font-medium dark:text-yellow-400">
                      {item.h1[i18n.language]}
                    </h1>
                    <p className="text-lg text-gray-800 dark:text-gray-300">
                      {item.p[i18n.language]}
                    </p>
                    <Link to={"/turk"}>
                      <button className="dark:bg-gray-700 dark:hover:bg-gray-900 mt-1 border rounded-lg px-[18px] py-[10px] bg-[#FFB84D] text-xl text-white font-semibold hover:bg-[#E69C3C] transition duration-300 flex items-center justify-center gap-2 group">
                        {item.btn[i18n.language]}
                        <ArrowRight className=" group-hover:rotate-[-50deg] transition duration-200" />
                      </button>
                    </Link>
                  </span>
                </article>
              </div>
            ))}
            <article className="pb-8">
              <h1 className="mt-4 mb-5 ml-4 text-2xl font-semibold text-gray-600 dark:text-yellow-400">
                {t("news.h6")}
              </h1>
              <p className="ml-4 font-medium text-gray-600 text-md max-w-[1000px] dark:text-gray-300">
                {t("news.p5")}
              </p>
            </article>
            {/* <Firstnew/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Yangiliklar;
