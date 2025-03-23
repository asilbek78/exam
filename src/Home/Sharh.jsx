import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function App() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(savedComments);
  }, []);

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      const newComments = [...comments, comment];
      setComments(newComments);
      localStorage.setItem("comments", JSON.stringify(newComments));
      setNotification("Siz yozgan sharh qabul qilindi");
      setComment("");
      setTimeout(() => setNotification(""), 3000);
    }
  };

  const handleDeleteComment = (index) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
    localStorage.setItem("comments", JSON.stringify(newComments));
  };
const {t} = useTranslation()
  return (
    <div className=" dark:bg-gray-900 w-full h-full pt-10 pb-2">
    <div className=" container ">
      <div className="flex flex-col items-center p-5 dark:bg-gray-800 w-[48%] m-auto h-auto border rounded-xl bg-gray-200">
      <h1 className="text-2xl dark:text-yellow-500 text-gray-900 font-semibold mt-2 mb-5">
        {t("home.h12")}
      </h1>
      {notification && (
        <div className="bg-green-500 text-white px-4 py-2 rounded mb-3">
          {notification}
        </div>
      )}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder={t("home.h13")}
        className=" w-[75%] font-sans text-gray-900 focus:border-blue-600 border-[2px] dark:bg-gray-100 p-2 border-gray-300 rounded-lg mb-3 h-[200px] outline-none"
      />
      <button
        onClick={handleCommentSubmit}
        className="bg-blue-500 text-white px-4 mt-[-34px] py-2 rounded hover:bg-blue-600"
      >
      {t("home.h8")}
      </button>
      <h2 className="text-xl mt-5 text-gray-900 font-medium dark:text-gray-200">{t("home.h14")}</h2>
      <div className="w-80 mt-3">
        {comments.map((c, index) => (
          <div
            key={index}
            className="bg-white p-3 border border-gray-200 rounded shadow mt-2 relative"
          >
            <button
              onClick={() => handleDeleteComment(index)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
            >
              ×
            </button>
            {c}
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}
