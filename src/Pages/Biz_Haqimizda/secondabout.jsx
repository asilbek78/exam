import { motion } from "framer-motion";
import { FaUtensils, FaHistory, FaStar, FaUsers } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const texts = {
  title: {
    uz: "Afsona Restorani",
    en: "Afsona Restaurant",
    ru: "Ресторан Афсона",
  },
  sections: [
    {
      icon: <FaHistory className="text-6xl mx-auto text-orange-400 dark:text-yellow-400 mb-4" />,
      key: "hist",
      title: { uz: "Bizning Tarix", en: "Our History", ru: "Наша История" },
      text: {
        uz: "Afsona Restorani 2015-yilda Asilbek Ochilov tomonidan asos solingan. Biz qadimiy o‘zbek taomlari va zamonaviy lazzatlarni uyg‘unlashtirib, har bir mijozga unutilmas tam va zavq ulashamiz. Oshxonamizda milliy taomlarning asl ta’mini saqlab qolish va ularni zamonaviy uslubda taqdim etish maqsad qilingan.",
        en: "Afsona Restaurant was founded in 2015 by Asilbek Ochilov. We combine ancient Uzbek cuisine with modern flavors to offer each guest an unforgettable taste and experience. Our mission is to preserve the authentic taste of traditional dishes while presenting them in a modern way. Over the years, we have served thousands of guests and earned their trust.",
        ru: "Ресторан Афсона был основан в 2015 году Асилбеком Очиловым. Мы объединяем древнюю узбекскую кухню с современными вкусами, чтобы подарить каждому гостю незабываемые впечатления. Наша миссия — сохранить подлинный вкус традиционных блюд, представляя их в современном стиле. За эти годы мы обслужили тысячи гостей и заслужили их доверие.",
      },
    },
    {
      icon: <FaUtensils className="text-6xl mx-auto text-orange-400 dark:text-yellow-400 mb-4" />,
      key: "goal",
      title: { uz: "Bizning Maqsad", en: "Our Goal", ru: "Наша Цель" },
      text: {
        uz: "Har bir mehmonimiz o‘zini qulay his qilishini ta’minlash va o‘zbek oshxonasini jahon miqyosida tanitish – bizning asosiy maqsadimiz. Biz faqatgina taom tayyorlamaymiz, balki mehmonlarimizga o‘zbek madaniyatini his qilish imkoniyatini taqdim etamiz.",
        en: "Our main goal is to make every guest feel comfortable and promote Uzbek cuisine worldwide. We don’t just cook food; we provide an opportunity for our guests to experience Uzbek culture. Every dish is prepared with love and care, ensuring that our guests feel at home.",
        ru: "Наша главная цель — создать комфорт для каждого гостя и популяризировать узбекскую кухню в мире. Мы не просто готовим еду, а даем возможность нашим гостям прочувствовать узбекскую культуру. Каждое блюдо готовится с любовью и заботой, чтобы гости чувствовали себя как дома.",
      },
    },
    {
      icon: <FaStar className="text-6xl mx-auto text-orange-400 dark:text-yellow-400 mb-4" />,
      key: "val",
      title: { uz: "Bizning Qadriyatlar", en: "Our Values", ru: "Наши Ценности" },
      text: {
        uz: "Sifat, halollik va mehmondo‘stlik – bizning ustuvor qadriyatlarimiz. Biz faqat tabiiy va eng yaxshi mahsulotlardan foydalanamiz. Mehmonlarimizni iliq kutib olish va ularga eng yaxshi xizmatni ko‘rsatish biz uchun juda muhim.",
        en: "Quality, honesty, and hospitality are our top priorities. We use only natural and the best ingredients. Welcoming our guests warmly and providing them with the best service is essential to us. At the same time ",
        ru: "Качество, честность и гостеприимство — наши главные приоритеты. Мы используем только натуральные и лучшие ингредиенты. Для нас важно тепло встречать наших гостей и предоставлять им лучший сервис. В то же время,",
      },
    },
    {
      icon: <FaUsers className="text-6xl mx-auto text-orange-400 dark:text-yellow-400 mb-4" />,
      key: "rev",
      title: { uz: "Mehmonlarimiz Fikri", en: "Guest Reviews", ru: "Отзывы Гостей" },
      text: {
        uz: "Afsona Restorani – bu nafaqat mazali taomlar, balki unutilmas muhit va xizmat! Mehmonlarimiz bizni yuqori sifat, mehmondo‘stlik va yoqimli muhit bilan tavsiflaydilar. Ko‘pchilik mijozlarimiz bizga qaytib kelishadi.",
        en: "Afsona Restaurant is not just about delicious food, but also an unforgettable atmosphere and service! Our guests describe us as a place with high quality, hospitality, and a pleasant ambiance. Many of our customers.",
        ru: "Ресторан Афсона — это не только вкусная еда, но и незабываемая атмосфера и обслуживание! Наши гости описывают нас как место с высоким качеством, гостеприимством и приятной атмосферой. Многие из наших клиентов.",
      },
    },
  ],
  
};

function SecondAbout() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="py-1 px-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-orange-400 dark:text-yellow-400 text-center mb-14 drop-shadow-sm dark:drop-shadow-lg"
      >
        {texts.title[lang]}
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {texts.sections.map((item, id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, x: id % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="dark:bg-gray-800 p-6 rounded-2xl shadow-xl bg-gray-100"
          >
            {item.icon}
            <h2 className="text-3xl font-semibold text-center dark:text-gray-200 mb-2">
              {item.title[lang]}
            </h2>
            <p className="text-lg text-center dark:text-gray-300">{item.text[lang]}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SecondAbout;
