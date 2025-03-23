import Vakansiya from "./Vakansiya";
import { useTranslation } from "react-i18next";

const vacancies = [
  {
    title: { uz: "👨‍🍳 Katta Oshpaz", en: "👨‍🍳 Head Chef", ru: "👨‍🍳 Шеф-повар" },
    type: { uz: "Oshxona", en: "Kitchen", ru: "Кухня" },
    salary: "10 000 000 - 18 000 000",
  },
  {
    title: { uz: "🥘 O‘rtacha Oshpaz", en: "🥘 Mid-level Chef", ru: "🥘 Средний повар" },
    type: { uz: "Oshxona", en: "Kitchen", ru: "Кухня" },
    salary: "7 000 000 - 12 000 000",
  },
  {
    title: { uz: "🍳 Kichik Oshpaz", en: "🍳 Junior Chef", ru: "🍳 Младший повар" },
    type: { uz: "Oshxona", en: "Kitchen", ru: "Кухня" },
    salary: "5 000 000 - 9 000 000",
  },
  {
    title: { uz: "🍽️ Ofitsiant", en: "🍽️ Waiter", ru: "🍽️ Официант" },
    type: { uz: "Xizmat", en: "Service", ru: "Сервис" },
    salary: "4 000 000 - 8 000 000",
  },
  {
    title: { uz: "💰 Kassir", en: "💰 Cashier", ru: "💰 Кассир" },
    type: { uz: "Moliya", en: "Finance", ru: "Финансы" },
    salary: "5 000 000 - 9 000 000",
  },
  {
    title: { uz: "📢 Marketing Mutaxassisi", en: "📢 Marketing Specialist", ru: "📢 Маркетолог" },
    type: { uz: "Marketing", en: "Marketing", ru: "Маркетинг" },
    salary: "8 000 000 - 14 000 000",
  },
  {
    title: { uz: "🎂 Shirinlik Ustasi", en: "🎂 Pastry Chef", ru: "🎂 Кондитер" },
    type: { uz: "Oshxona", en: "Kitchen", ru: "Кухня" },
    salary: "7 000 000 - 13 000 000",
  },
  {
    title: { uz: "☕ Barista", en: "☕ Barista", ru: "☕ Бариста" },
    type: { uz: "Ichimliklar", en: "Beverages", ru: "Напитки" },
    salary: "5 500 000 - 10 000 000",
  },
  {
    title: { uz: "🧹 Tozalik Xodimi", en: "🧹 Cleaning Staff", ru: "🧹 Уборщик" },
    type: { uz: "Xizmat", en: "Service", ru: "Сервис" },
    salary: "3 500 000 - 6 000 000",
  },
  {
    title: { uz: "🏢 Administrator", en: "🏢 Administrator", ru: "🏢 Администратор" },
    type: { uz: "Boshqaruv", en: "Management", ru: "Управление" },
    salary: "9 000 000 - 15 000 000",
  },
  {
    title: { uz: "📦 Sklad Menedjeri", en: "📦 Warehouse Manager", ru: "📦 Менеджер склада" },
    type: { uz: "Logistika", en: "Logistics", ru: "Логистика" },
    salary: "6 000 000 - 11 000 000",
  },
  {
    title: { uz: "🚚 Haydovchi", en: "🚚 Driver", ru: "🚚 Водитель" },
    type: { uz: "Transport", en: "Transport", ru: "Транспорт" },
    salary: "6 000 000 - 10 000 000",
  },
];

const VacancyGrid = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">
          {t("vac.h1")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vacancies.map((item, id) => (
            <div
              key={id}
              className="bg-gray-800 text-white p-6 rounded-xl duration-300 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold flex items-center">
                {item.title[i18n.language]}
              </h3>
              <p className="text-md text-gray-400 mt-1">
                🔹 {item.type[i18n.language]} {t("vac.h2")}
              </p>
              <p className="text-xl text-green-400 font-medium mt-3">
                {item.salary} {t("vac.h3")}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                🕒 {t("vac.h4")}
              </p>
            </div>
          ))}
        </div>
        <p className="pt-10"></p>
        <Vakansiya />
      </div>
    </div>
  );
};

export default VacancyGrid;
