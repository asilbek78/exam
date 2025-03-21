import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { UseFetch } from "../Hook/UseFetch";
function Homedetails() {
  const name = useParams();
  const paramname = name.details;
  const { data, isLoading } = UseFetch("/public/db.json");
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState(false);

  const tru = () => {
    setModal(true);
  };

  const fals = () => {
    setModal(false);
    navigate("/menu", { replace: true });
  };
  const navigate = useNavigate();
  const Back = () => {
    navigate("/menu");
  };

  if (isLoading) return <h2>Loading...</h2>;

  const item = data?.homefood?.find((el) => el.url === paramname);

  if (!item) return <h2>Taom topilmadi</h2>;

  return (
    <div className="dark:bg-gray-900 bg-gray-100">
      <div className="container mx-auto py-14 w-[85%] flex justify-around items-center">
        <img
          src={item.img}
          alt="mn"
          className="hover:scale-105 duration-300 w-full max-w-lg rounded-lg shadow-md"
        />
        <article className="flex flex-col max-w-[47%] gap-5">
          <h1 className="text-3xl font-medium dark:text-gray-50 text-gray-800">
            {item.name[i18n.language]}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {item.desc ? item.desc[i18n.language] : t("menu.no_extra_info")}
          </p>
          <span className="flex items-center gap-[4%]">
            <p className="text-lg line-through font-semibold text-orange-600">
              {item.price1}
            </p>
            <p className="text-2xl font-semibold dark:text-gray-50 text-gray-800">
              {item.price2}
            </p>
          </span>
          <span className="flex items-center gap-[9%]">
            <button
              onClick={tru}
              className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[4px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              {item.btn[i18n.language]}
            </button>
            <button
              onClick={Back}
              className="bg-white scale-75 text-center w-52 rounded-2xl h-14 relative text-black text-xl font-semibold group"
              type="button"
            >
              <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[200px] z-10 duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  height="25px"
                  width="25px"
                >
                  <path
                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    fill="#000000"
                  ></path>
                  <path
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    fill="#000000"
                  ></path>
                </svg>
              </div>
              <p className="translate-x-4">{t("menu.btn")}</p>
            </button>
          </span>
        </article>
      </div>
      {modal && (
        <div className="items-center flex justify-around flex-col shadow-md shadow-slate-300 w-[40%] h-48 bg-white border-gray-700 fixed top-[30%] left-[50%] translate-x-[-50%] py-3 rounded-md">
          <h1 className="text-[25px] text-pink-600 mb-1">{t("news.h7")}</h1>
          <button
            onClick={fals}
            className="text-2xl border-[1.5px] duration-300 border-gray-700 py-3 hover:bg-transparent hover:text-black px-4 bg-gray-700 text-white w-28 rounded-lg cursor-pointer"
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
}

export default Homedetails;
