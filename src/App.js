
import { useState } from \"react\";
import { BrowserRouter as Router, Routes, Route, useNavigate } from \"react-router-dom\";
import { motion } from \"framer-motion\";

function PageOne() {
  const [isCardOpen, setCardOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className=\"min-h-screen flex flex-col items-center justify-center bg-pink-100 text-center p-4\">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className=\"relative w-64 h-40 bg-yellow-300 rounded-lg shadow-xl cursor-pointer\"
        onClick={() => setCardOpen(true)}
      >
        <div className=\"absolute inset-0 flex items-center justify-center\">
          <p className=\"text-lg font-bold\">{isCardOpen ? \"Selamat ulang tahun Jihan! 🎉\" : \"Klik untuk buka kartu\"}</p>
        </div>
      </motion.div>

      {isCardOpen && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className=\"mt-6 px-4 py-2 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600\"
          onClick={() => navigate(\"/page-two\")}
        >
          Lanjut ke kejutan!
        </motion.button>
      )}
    </div>
  );
}

function Balloon({ message }) {
  const [popped, setPopped] = useState(false);

  return (
    <motion.div
      className=\"w-20 h-28 rounded-full bg-red-300 flex items-center justify-center text-white font-bold cursor-pointer\"
      onClick={() => setPopped(true)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {popped ? <p className=\"text-sm p-2\">{message}</p> : <span>🎈</span>}
    </motion.div>
  );
}

function PageTwo() {
  const messages = [
    \"Semoga panjang umur & sehat selalu 💖\",
    \"Jangan lupa bahagia setiap hari ☀️\",
    \"Semoga karier & cintamu lancar ya! 😄\",
    \"Semakin cantik luar dalam 🌸\",
    \"Stay awesome, Jihan! ✨\"
  ];

  return (
    <div className=\"min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4 space-y-6\">
      <h1 className=\"text-2xl font-bold text-blue-800\">Klik balon untuk lihat pesan 🎁</h1>
      <div className=\"grid grid-cols-2 gap-6\">
        {messages.map((msg, i) => (
          <Balloon key={i} message={msg} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path=\"/\" element={<PageOne />} />
        <Route path=\"/page-two\" element={<PageTwo />} />
      </Routes>
    </Router>
  );
}
