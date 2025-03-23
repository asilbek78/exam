import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { UseFetch } from "../../Hook/UseFetch";
import Sharh from "../../Home/Sharh"
import Firstabout from "./firstabout"
import Secondabout from "./secondabout";
function Biz_Haqimizda() {
  const { t} = useTranslation();
  const { data: four, isLoading } = UseFetch("/public/db.json");
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <div className="  pt-[35px] dark:bg-gray-900 bg-slate-50 pb-10 h-auto ">
        <div className="container">
            <Secondabout/>
          <div className="w-[80%] h-auto m-auto">
            <article className="flex flex-col gap-4 mt-10 mb-14">
              <h1 className="text-3xl font-semibold text-gray-600 dark:text-yellow-400">
                {t("about.h1")}
              </h1>
              <p className=" text-md text-gray-800 max-w-[990px] font-medium dark:text-gray-300">
                {t("about.p1")}
              </p>
              <p className=" text-md text-gray-800 max-w-[990px] dark:text-gray-300 font-medium">
                {t("about.p2")}
              </p>
            </article>
            <div className=" bg-sl                              ate-100 dark:bg-gray-800 flex flex-col items-center gap-8 transition duration-300 border rounded-xl max-w-[1000px] pt-5 pb-7 shadow-sm shadow-gray-600 hover:shadow-md hover:shadow-gray-500">
              <span className=" max-w-[890px] flex flex-col gap-3">
                <h1 className="text-3xl font-semibold text-gray-600 dark:text-yellow-400">
                  {t("about.h2")}
                </h1>
                <p className="font-sans text-gray-800 text-md dark:text-gray-100">
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
              <h1 className="text-3xl font-semibold text-gray-600 dark:text-yellow-400">
                {t("about.h3")}
              </h1>
              <p className=" text-md text-gray-800 max-w-[990px] font-medium dark:text-gray-400">
                {t("about.p4")}
              </p>
              <p className=" text-md text-gray-800 max-w-[990px] font-medium dark:text-gray-400">
                {t("about.p5")}
              </p>
            </article>
          </div>
          <Firstabout/>
          <Sharh/>
        </div>
      </div>
    </>
  );
}

export default Biz_Haqimizda;
