import { useState, useEffect } from "react";


function Sharhkirit() {
    const [kament, setKament] = useState("");
    const [kamentlar, setKamentlar] = useState([]);
    const [xabar, setXabar] = useState("");

    useEffect(() => {
      const saqlakament = JSON.parse(localStorage.getItem("kamentlar") || [])
      setKamentlar(saqlakament);
    })

    const kamentqush = () => {
      if (kament.trim()){
        const yangikament = [...kamentlar, kament];
        setKamentlar(yangikament);
        localStorage.setItem("kamentlar", JSON.stringify(yangikament) );
        setXabar("Siz yozgan sharh qabul qilindi.");
        setKament("");
        setTimeout(() => setXabar(""), 3000);
      }
    }
    const kamentolish = (index) => {
      const yangikament = kamentlar.filter((_, i) => i !== index )
      setKamentlar(yangikament)
      localStorage.setItem("kament", JSON.stringify(yangikament))
    }
  return (
    <div>
        <div className="flex flex-col items-center p-5 bg-gray-100 h-auto container">
      <h1 className="text-2xl font-bold mb-4">
        Restoranimiz haqida o`z fikringizni kiriting!
      </h1>
      {xabar && (
        <div className="bg-green-500 text-white px-4 py-2 rounded mb-3">
          {xabar}
        </div>
      )}
      <textarea
        value={kament}
        onChange={(e) => setKament(e.target.value)}
        placeholder="Sharh yozish uchun..."
        className=" w-[35%] h-24 p-2 border border-gray-300 rounded mb-3"
      />
      <button
        onClick={kamentqush}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Yuborish
      </button>

      <h2 className="text-xl font-semibold mt-5">Yozilgan sharhlar.</h2>
      <div className="w-80 mt-3">
        {kamentlar.map((c, index) => (
          <div
            key={index}
            className="bg-white p-3 border border-gray-200 rounded shadow mt-2 relative"
          >
            <button
              onClick={() => kamentolish(index)}
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
  )
}

export default Sharhkirit
