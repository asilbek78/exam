import { FaUtensils, FaStar, FaHistory } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const texts = {
  title: {
    uz: "Nega Bizni Tanlashingiz Kerak?",
    en: "Why Should You Choose Us?",
    ru: "Почему Вы Должны Выбрать Нас?"
  },
  sections: [
    {
      icon: <FaStar className="text-5xl mx-auto text-yellow-400 mb-3" />,
      key: "taste",
      title: {
        uz: "Mukammal Ta’m",
        en: "Exceptional Taste",
        ru: "Исключительный Вкус",
      },
      text: {
        uz: "Bizning oshpazlar har bir taomni sevgi va mahorat bilan tayyorlaydi. Har bir taom tarkibida nafis ta’mlar uyg‘unligi va o‘ziga xos lazzat mujassam..",
        en: "Our chefs prepare each dish with love and mastery. Every bite is a perfect harmony of flavors, creating a unique and unforgettable dining experience. ",
        ru: "Наши повара готовят каждое блюдо с любовью и мастерством. В каждом кусочке — гармония вкусов и уникальное сочетание ингредиентов, создающее.",
      },
    },
    {
      icon: <FaUtensils className="text-5xl mx-auto text-yellow-400 mb-3" />,
      key: "ingredients",
      title: {
        uz: "Tabiiy Mahsulotlar",
        en: "Natural Ingredients",
        ru: "Натуральные Продукты",
      },
      text: {
        uz: "Faqatgina eng yangi va sifatli mahsulotlardan foydalanamiz. Mahsulotlarimizning tabiiyligi va ekologik tozaligi har bir taomning mazali va foydali bo‘lishini kafolatlaydi. ",
        en: "We use only the freshest and highest-quality ingredients. The natural and organic quality of our products ensures that each dish is both delicious and healthy.",
        ru: "Мы используем только свежие и качественные ингредиенты. Натуральность и экологическая чистота наших продуктов гарантирует, что каждое блюдо будет не только вкусным.",
      },
    },
    {
      icon: <FaHistory className="text-5xl mx-auto text-yellow-400 mb-3" />,
      key: "hospitality",
      title: {
        uz: "An’anaviy Mehmondo‘stlik",
        en: "Traditional Hospitality",
        ru: "Традиционное Гостеприимство",
      },
      text: {
        uz: "Har bir mehmon biz uchun oilaning bir qismi. Biz sizni iliq kutib olamiz va o‘zingizni uyda his qilishingiz uchun qulay muhit yaratamiz",
        en: "Every guest is a part of our family. We welcome you with warmth and create a comfortable atmosphere where you feel at home.",
        ru: "Каждый гость — это часть нашей семьи. Мы радушно встречаем вас и создаем уютную атмосферу, в которой вы чувствуете себя как дома. ",
      },
    },
  ],
};

const AboutUs = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="text-white h-auto pt-10 pb-3 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 dark:text-yellow-400 text-gray-500">
          {texts.title[lang]}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {texts.sections.map((item, id) => (
            <div
              key={id}
              className="dark:bg-white dark:bg-opacity-10 p-6 rounded-2xl shadow-lg bg-gray-700"
            >
              {item.icon}
              <h3 className="text-[26px] mb-1 font-semibold  ">
                {item.title[lang]}
              </h3>
              <p className="text-[16px]">{item.text[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
