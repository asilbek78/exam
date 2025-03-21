import Vakansiya from "./Vakansiya";
const vacancies = [
  {
    title: "👨‍🍳 Katta Oshpaz",
    type: "Oshxona",
    salary: "10 000 000 - 18 000 000",
  },
  {
    title: "🥘 O‘rtacha Oshpaz",
    type: "Oshxona",
    salary: "7 000 000 - 12 000 000",
  },
  {
    title: "🍳 Kichik Oshpaz",
    type: "Oshxona",
    salary: "5 000 000 - 9 000 000",
  },
  { title: "🍽️ Ofitsiant", type: "Xizmat", salary: "4 000 000 - 8 000 000" },
  { title: "💰 Kassir", type: "Moliya", salary: "5 000 000 - 9 000 000" },
  {
    title: "📢 Marketing Mutaxassisi",
    type: "Marketing",
    salary: "8 000 000 - 14 000 000",
  },
  {
    title: "🎂 Shirinlik Ustasi",
    type: "Oshxona",
    salary: "7 000 000 - 13 000 000",
  },
  {
    title: "☕ Barista",
    type: "Ichimliklar",
    salary: "5 500 000 - 10 000 000",
  },
  {
    title: "🧹 Tozalik Xodimi",
    type: "Xizmat",
    salary: "3 500 000 - 6 000 000",
  },
  {
    title: "🏢 Administrator",
    type: "Boshqaruv",
    salary: "9 000 000 - 15 000 000",
  },
  {
    title: "📦 Sklad Menedjeri",
    type: "Logistika",
    salary: "6 000 000 - 11 000 000",
  },
  {
    title: "🚚 Haydovchi",
    type: "Transport",
    salary: "6 000 000 - 10 000 000",
  },
];

const VacancyGrid = () => {
  return (
    <div className=" dark:bg-gray-900">
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">
          Afsona Restorani Ish O‘rinlari
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vacancies.map((job, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white p-6 rounded-xl duration-300 shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold flex items-center">
                {job.title}
              </h3>
              <p className="text-md text-gray-400 mt-1">
                🔹 {job.type} bo‘limi
              </p>
              <p className="text-xl text-green-400 font-medium mt-3">
                {job.salary} so‘m
              </p>
              <p className="text-sm text-gray-400 mt-2">
                🕒 Ish vaqti: Dushanba - Juma, 09:00 - 18:00
              </p>
            </div>
          ))}
        </div>
        <p className=" pt-10"></p>
        <Vakansiya />
      </div>
    </div>
  );
};

export default VacancyGrid;
