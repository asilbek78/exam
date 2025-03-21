// import { useTranslation } from "react-i18next";
// import { UseFetch } from "../../Hook/UseFetch";

// function NewChef() {
//   const { t } = useTranslation();
//   const { data: five, isLoading } = UseFetch("/public/db.json");
//   return (
//     <div>
//       {isLoading && <h1>Loading...</h1>}
//       {five?.newchef.map((item, id) => (
//         <div key={id}>
//           <article className="pb-8">
//             <h1 className="mt-4 mb-5 ml-4 text-2xl font-semibold text-gray-600 dark:text-gray-200">
//               {t("news.h6")}
//             </h1>
//             <p className="ml-4 font-medium text-gray-600 text-md max-w-[1000px] dark:text-gray-300">
//               {t("news.p5")}
//             </p>
//           </article>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default NewChef;
