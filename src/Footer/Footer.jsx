import { useTranslation } from "react-i18next";
import { Phone, Mail, Send, Instagram } from "lucide-react";
import { UseFetch } from "../Hook/UseFetch";
import { Link } from "react-router-dom";
// import uzbek from "../Pages/Menu/uzbek";
function Footer() {
  const { t, i18n } = useTranslation();
  const { data: three, isLoading } = UseFetch("/public/db.json");
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <section className=" bg-[#3b3b3b] w-full dark:bg-gray-800">
        <div  className=" container w-full h-[280px] flex justify-around items-center transition duration-300">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-xl text-yellow-400 font-bold">{t("footers.h1")}</h1>
            <h4 className=" text-[15px] max-w-[300px] text-gray-100 font-sans">
              {t("footers.h4")}
            </h4>
          </div>
          <div className="w-[200px] flex flex-col gap-4">
            <h1 className="text-xl text-yellow-400 e font-bold">{t("footers.h21")}</h1>
            <ul className=" text-[15px] text-gray-100 font-semibold flex flex-col gap-1">
              <Link to={"/uzbek"}>
              <li className="transition duration-200 cursor-pointer hover:text-zinc-400 ">
                {t("footers.li")}
              </li>
              </Link>
              <Link to={"/turk"}>
              <li className="transition duration-200 cursor-pointer hover:text-zinc-400">
                {t("footers.li1")}
              </li>
              </Link>
              <Link to={"/yapon"}>
              <li className="transition duration-200 cursor-pointer hover:text-zinc-400">
                {t("footers.li2")}
              </li>
              </Link>
              <Link to={"/dengiz"}>
              <li className="transition duration-200 cursor-pointer hover:text-zinc-400">
                {t("footers.li3")}
              </li>
              </Link>
            </ul>
          </div>
          {three?.footer.map((item, id) => (
            <div key={id} className=" flex gap-10">
              <div className="flex flex-col gap-[11px]">
                <h1 className="text-yellow-400  mb-[6px] text-xl font-bold">
                  {item.h1[i18n.language]}
                </h1>
                <Link>
                <article className="flex items-center group gap-2 cursor-pointer ">
                  <Phone className="text-white group-hover:text-gray-300" />
                  <h2 className=" transition duration-200 text-lg mt-[-7px] group-hover:text-gray-300  text-gray-100 font-semibold ">
                    {item.num}
                  </h2>
                </article>
                </Link>
                <Link to={"https://asilbekochilov778@gmail.com"}>
                <article className="flex items-center gap-2 cursor-pointer group ">
                  <Mail className="text-white group-hover:text-gray-300" />
                  <h2 className=" transition duration-200 text-lg mt-[-5px] group-hover:text-gray-300  text-gray-100 font-semibold">
                    {item.h2}
                  </h2>
                </article>
                </Link>
                <Link to={"https://t.me/Akmalovich_783"}>
                <article className="flex items-center gap-2 group cursor-pointer ">
                  <Send className="text-white group-hover:text-gray-400 duration-200" size={24} />
                  <h2 className=" duration-200 text-lg mt-[-5px] group-hover:text-gray-300  text-gray-100 font-semibold">
                    {item.h21}
                  </h2>
                </article>
                </Link>
                <Link to={"https://www.instagram.com/Akmalovich_783/"}>
                <article className="flex items-center gap-2 cursor-pointer group">
                  <Instagram className=" text-white group-hover:text-gray-400" />
                  <h2 className="transition duration-200 text-lg mt-[-5px] group-hover:text-gray-300  text-gray-100 font-semibold">
                    {item.h22}
                  </h2>
                </article>
                </Link>
              </div>
              <div className="w-[320px] h-[190px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.214019712152!2d66.89124500659153!3d39.117597459032304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4cbb686357ed39%3A0xfd13d5677a926088!2sIqtidor%20IT%20Academy!5e0!3m2!1sru!2sru!4v1741432013186!5m2!1sru!2sru"
                  allowFullScreen=""
                  loading="lazy"
                  className=" border rounded-md mt-2 w-[100%] h-[100%]"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Footer;
