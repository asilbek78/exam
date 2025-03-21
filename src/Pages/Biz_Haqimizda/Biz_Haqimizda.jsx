import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { UseFetch } from "../../Hook/UseFetch";
import Sharh from "../../Home/Sharh"
function Biz_Haqimizda() {
  const { t} = useTranslation();
  const { data: four, isLoading } = UseFetch("/public/db.json");
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <div className="  pt-[30px] dark:bg-gray-900 bg-slate-50 pb-10 h-auto ">
        <div className="container">
          <div className="w-[80%] h-auto m-auto">
            <span className="flex flex-col items-center gap-6 m-auto text-center">
              <h1 className="text-6xl font-medium text-orange-500 dark:text-white">
                {t("about.top")}
              </h1>
              {/* <p className=" max-w-[800px] text-md font-serif text-gray-600 dark:text-gray-300">
                {t("about.bottom")}
              </p> */}
            </span>
            <article className="flex flex-col gap-4 mt-10 mb-14">
              <h1 className="text-3xl font-semibold ml-7 text-gray-600 dark:text-gray-200">
                {t("about.h1")}
              </h1>
              <p className=" text-md text-gray-800 max-w-[990px] font-medium dark:text-gray-300">
                {t("about.p1")}
              </p>
              <p className=" text-md text-gray-800 max-w-[990px] dark:text-gray-300 font-medium">
                {t("about.p2")}
              </p>
            </article>
            <div className=" bg-slate-100 dark:bg-gray-800 flex flex-col items-center gap-8 transition duration-300 border rounded-xl max-w-[1000px] pt-5 pb-7 shadow-sm shadow-gray-600 hover:shadow-md hover:shadow-gray-500">
              <span className=" max-w-[890px] flex flex-col gap-3">
                <h1 className="text-3xl font-semibold text-gray-600 dark:text-gray-300">
                  {t("about.h2")}
                </h1>
                <p className="font-serif text-gray-800 text-md dark:text-gray-400">
                  {t("about.p3")}
                </p>
              </span>
              <div className="max-w-[900px] overflow-hidden">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={15}
                  autoplay={{
                    delay: 1600,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="h-[230px] w-full overflow-hidden"
                >
                  {four?.aboutswiper?.map((item, id) => (
                    <SwiperSlide
                      key={id}
                      className="overflow-hidden border bg-slate-200 rounded-xl"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="overflow-hidden transition-transform duration-300 border rounded-xl hover:scale-110"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <article className="flex flex-col gap-4 mt-14">
              <h1 className="text-3xl font-semibold text-gray-600 dark:text-gray-300">
                {t("about.h3")}
              </h1>
              <p className=" text-md text-gray-800 max-w-[990px] font-medium dark:text-gray-400">
                {t("about.p4")}
              </p>
              <p className=" text-md text-gray-800 max-w-[990px] font-medium dark:text-gray-400">
                {t("about.p5")}
              </p>
              <p className=" text-md text-gray-800 max-w-[990px] font-medium dark:text-gray-400">
                {t("about.p6")}
              </p>
            </article>
          </div>
          <Sharh/>
        </div>
      </div>
    </>
  );
}

export default Biz_Haqimizda;
