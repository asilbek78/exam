import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UseFetch } from "../../Hook/UseFetch";
import { useTranslation } from "react-i18next";

function Dengizdetails() {
  const { details: paramname } = useParams();
  const { data, isLoading } = UseFetch("/public/db.json");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    soni: "",
    raqam: "",
    karta: "",
    buyurtma: "",
  });

  if (isLoading) return <h2>Loading...</h2>;
  const item = data?.dengiztaomlari?.find((el) => el.url === paramname);
  if (!item) return <h2>{t("menu.h5")}</h2>;

  const botToken = "7575682713:AAHrgGDEQtI0F8watbwQTKU3fgm3LfPlKBI";
  const chat_id = "7298677336";

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.soni ||
      !formData.raqam ||
      !formData.karta ||
      !formData.buyurtma
    ) {
      alert(t("home.h2"));
      return;
    }

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const text = `🛒 Buyurtma!
    \n🍽 Taom: ${item.name[i18n.language]}\n📦 Soni: ${
      formData.soni
    }\n🪑 Stol raqami: ${formData.raqam}\n💳 Karta_R: ${
      formData.karta
    }\n📌 Izoh: ${formData.buyurtma}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id, text }),
      });

      if (response.ok) {
        alert(`${t("menu.h6")}`);
        setFormData({ soni: "", raqam: "", karta: "", buyurtma: "" });
        setModal(false);
      } else {
        alert(`${t("menu.h7")}`);
      }
    } catch (error) {
      console.error("menu.h7", error);
    }
  };
  return (
    <div className="dark:bg-gray-900 bg-gray-100">
      <div className="container">
      <div className=" mx-auto py-28 w-[87%] flex justify-around items-center">
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
            {item.extra[i18n.language]}
          </p>
          <span className="flex items-center gap-[4%]">
            <p className="text-lg font-semibold text-orange-600">
              {item.bonus[i18n.language]}
            </p>
            <p className="text-2xl font-semibold dark:text-gray-50 text-gray-800">
              {item.price}
            </p>
          </span>
          <article className="flex gap-6">
            <button
              onClick={() => setModal(true)}
              className="cursor-pointer transition-all bg-blue-500 text-white font-semibold px-9 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              {item.btn[i18n.language]}
            </button>
            <button
              onClick={() => navigate("/menu")}
              className="bg-white scale-[0.8] text-center w-52 rounded-2xl h-14 relative text-black text-xl font-semibold group"
            >
              <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[200px] z-10 duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px">
                  <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000"></path>
                  <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#000000"></path>
                </svg>
              </div>
              <p className="translate-x-4 text-gray-950 font-semibold">{t("menu.btn")}</p>
            </button>
          </article>
        </article>
      </div>
      </div>

      {modal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              {item.name[i18n.language]}
            </h2>
            <form onSubmit={handleOnSubmit}>
              <input
                type="text"
                name="soni"
                placeholder={t("menu.h8")}
                value={formData.soni}
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                }
                maxLength={2}
                onChange={(e) =>
                  setFormData({ ...formData, soni: e.target.value })
                }
                className="w-full mb-2 p-2 border-2 rounded outline-none focus:border-blue-600"
                required
              />
              <input
                type="tel"
                maxLength={3}
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                }
                name="phone"
                placeholder={t("menu.h9")}
                value={formData.raqam}
                onChange={(e) =>
                  setFormData({ ...formData, raqam: e.target.value })
                }
                className="w-full mb-2 p-2 border-2 rounded outline-none focus:border-blue-600"
                required
              />
              <input
                type="tel"
                maxLength={16}
                minLength={16}
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                }
                name="phone"
                placeholder={t("menu.h10")}
                value={formData.karta}
                onChange={(e) =>
                  setFormData({ ...formData, karta: e.target.value })
                }
                className="w-full mb-2 p-2 border-2 rounded outline-none focus:border-blue-600"
                required
              />
              <textarea
                name="message"
                placeholder={t("menu.h11")}
                value={formData.buyurtma}
                onChange={(e) =>
                  setFormData({ ...formData, buyurtma: e.target.value })
                }
                className="w-full mb-2 p-2 border-2 rounded outline-none focus:border-blue-600"
                required
              />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 duration-200 text-white px-4 py-2 rounded"
                >
                  {t("menu.h12")}
                </button>
                <button
                  onClick={() => setModal(false)}
                  type="button"
                  className="bg-gray-500 hover:bg-gray-600 duration-200 text-white px-4 py-2 rounded"
                >
                  {t("menu.h13")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dengizdetails;
