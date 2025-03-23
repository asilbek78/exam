import { UseFetch } from "../../Hook/UseFetch";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../Hook/UseTheme";

function Sharhlar() {
  const { i18n } = useTranslation();
  const { data: datas, isLoading } = UseFetch("/public/db.json");
  const [theme, setTheme] = useTheme("");

  console.log(datas?.sharhlar);

  return (
    <div className=" dark:bg-gray-900">
      {isLoading && <h1>Loading...</h1>}
      {datas?.ideah.map((item, id) => (
        <div data-aos="flip-up" key={id}>
          <p onClick={() => setTheme(theme === "light" ? "dark" : "light")}></p>
          <article className="flex flex-col text-center gap-3">
            <h1 className=" text-4xl font-semibold text-[#202020e5] dark:text-white">
              {item?.h1?.[i18n.language] || item?.h1?.en}
            </h1>
            <p className=" text-orange-500">{item?.p?.[i18n.language]}</p>
          </article>
        </div>
      ))}
      <div className=" mt-7 pb-7 container grid grid-cols-2 md:grid-cols-3 gap-6 m-auto">
        {datas?.sharhlar.map((item, id) => (
          <div
          data-aos="flip-right"
            key={id}
            className="h-[300px] border rounded-lg transition duration-300 shadow-sm dark:shadow-sm hover:scale-[1.03] dark:hover:shadow-white shadow-gray-400  hover:shadow-lg flex flex-col gap-3 p-4"
          >
            <article className=" flex items-center gap-4">
              <img className="w-16 border rounded-[50%]" src={item.image} alt="" />
              <span className=" ">
                <h1 className=" text-lg font-medium dark:text-white">
                  {item.name[i18n.language]}
                </h1>
                <p className=" text-sm text-gray-600 dark:text-gray-400">
                  {item?.desc?.[i18n.language]}
                </p>
              </span>
            </article>
            <p className=" text-[14px] font-sans dark:text-gray-200">
              {item?.idea?.[i18n.language]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sharhlar;
