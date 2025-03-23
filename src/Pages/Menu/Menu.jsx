import "./Menu.css";
import { Outlet } from "react-router-dom";
import { UseFetch } from "../../Hook/UseFetch";
import { useTranslation } from "react-i18next";
import Uzbek from "./uzbek";
import Turk from "./Turk";
import Yapon from "./Yapon";
import Dengiz from "./Dengiz";
import Img from "../../../public/images/menu.png";
import Homeswiper from "../../Home/Homeswiper";
function Menu() {
  const { t } = useTranslation();
  const { isLoading } = UseFetch("/public/db.json");

  return (
    <>
      <div className="w-full bg-slate-50 h-auto dark:bg-gray-900">
        {isLoading && <h1>Loading...</h1>}
        <div className="container">
          <span data-aos="fade-down" className="flex items-center justify-center gap-3 text-center">
            <h1 className="text-6xl font-bold text-orange-600 dark:text-orange-500">
              {t("menu.h1")}
            </h1>
            <img className="animate-spin-slow max-w-36" src={Img} alt="logo" />
          </span>
          <Homeswiper />
          <p className=" mt-6"></p>
          <Uzbek />
          <Turk />
          <Yapon />
          <Dengiz />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default Menu;
