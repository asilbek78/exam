import { useState } from "react";
import { useTranslation } from "react-i18next";
function Bot() {
  const { t } = useTranslation();
  const [data, setData] = useState({
    names: "",
    email: "",
    message: "",
  });

  const botToken = "7570891236:AAECbI839KpZn3-jd3hwODsENWc73x6NvYA";
  const chat_id = 7151641918;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!data.names || !data.phone || !data.message) {
      alert(`${t("home.h2")}`);
      return;
    }

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chat_id,
          text: `👤 Ism: ${data.names}\n 📧 Nomer: ${data.phone}\n 📝 Savol: ${data.message}`,
        }),
      });
      if (response.ok) {
        alert("Savolingiz yuborildi!");
        setData({ names: "", phone: "", message: "" });
      } else {
        alert("Xatolik yuz berdi!");
        console.error(`${t("home.h3")} ${response.statusText}`);
      }
    } catch (error) {
      console.error(`${t("home.h3")}, ${error}`);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="dark:bg-gray-900">
      <div className="container pb-10  ">
        <form
          onSubmit={handleOnSubmit}
          className="m-auto flex flex-col items-center w-[42%] dark:bg-gray-800 py-5 border-[2px] rounded-xl bg-gray-600"
        >
          <p className="text-3xl text-white font-bold text-center mb-6">
            {t("home.h4")}
          </p>
          <label className="w-[70%] mb-3">
            <p className=" text-lg font-medium text-gray-100 mb-1">
              {t("home.h9")}
            </p>
            <input
              name="names"
              value={data.names}
              onChange={handleChange}
              className="w-full h-full py-3 px-1 dark:text-white font-sans  rounded-lg focus:border-blue-500 text-gray-700  dark:bg-gray-700 dark:text-whiten  outline-none border"
              type="text"
              placeholder={t("home.h5")}
            />
          </label>
          <label className="w-[70%] mb-3">
            <p className=" text-lg font-medium text-gray-100 mb-1">
             {t("home.h10")}
            </p>
            <input
              name="phone"
              value={data.phone}
              onChange={handleChange}
              className="font-sans focus:border-blue-500 text-gray-700 dark:bg-gray-700 rounded-lg dark:text-white w-full h-full py-3 px-1 outline-none border"
              type="tel"
              pattern="[0-9]{9}"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
              maxLength="9"
              inputMode="numeric"
              placeholder={t("home.h6")}
            />
          </label>
          <div className="w-[70%]">
            <p className=" text-lg font-medium text-gray-100 mb-1">
              {t("home.h11")}
            </p>
            <textarea
              name="message"
              value={data.message}
              onChange={handleChange}
              className="font-sans focus:border-blue-500 text-gray-700 w-[100%] dark:bg-gray-700 dark:text-white border outline-none p-2 rounded-lg mb-3 resize-none"
              rows={5}
              placeholder={t("home.h7")}
            ></textarea>
          </div>

          <button
            className=" px-8 py-2 mt-1 border rounded-md bg-blue-700 hover:bg-blue-500 transition-all duration-200 text-white"
            type="submit"
          >
            {t("home.h8")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Bot;
