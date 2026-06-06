import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Стейт для пасхалки "Жук, що тікає"
  const [bugCaught, setBugCaught] = useState(false);
  const [bugPos, setBugPos] = useState({ x: 0, y: 0 });

  // Функція втечі жука
  const handleBugHover = () => {
    if (!bugCaught) {
      // Генеруємо випадкові координати в межах +-150px, щоб він не вилетів за екран
      setBugPos({
        x: Math.random() * 300 - 150,
        y: Math.random() * 300 - 150,
      });
    }
  };

  return (
    <section
      id="welcome"
      className="relative z-10 min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-20"
    >
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ========================================== */}
        {/* КОЛОНКА 1: МАСШТАБНИЙ ТЕКСТ ТА ВІТАННЯ */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 text-center lg:text-left flex flex-col justify-center h-full"
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="text-[10vw] md:text-[7vw] lg:text-[6vw] leading-[0.9] font-black uppercase tracking-tighter text-white mb-2"
          >
            THIS COULD BE
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="text-[10vw] md:text-[7vw] lg:text-[6vw] leading-[0.9] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-euphoria-purple via-euphoria-pink to-white mb-10 drop-shadow-lg"
          >
            MY BTW ERA
          </motion.h1>

          {/* Блок вітання з емодзі */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
            className="relative p-6 md:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-euphoria-glow max-w-xl mx-auto lg:mx-0 group hover:bg-white/[0.05] transition-colors duration-500"
          >
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-euphoria-pink rounded-full blur-[10px] animate-pulse" />

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center lg:justify-start gap-2">
              Хейкааа, Назарее! 👋
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              Мене звати <span className="text-white font-semibold">Аня</span>,
              і це моя мотивашка на посаду IT responsible{" "}
              <span className="text-euphoria-pink font-semibold">BTW</span>,
              через яку я хочу показати не тільки свої технічні скіли, а й те,
              як я відчуваю цей івент і яку атмосферу хочу в нього принести. ✨
            </p>
          </motion.div>
        </motion.div>

        {/* ========================================== */}
        {/* КОЛОНКА 2: МІСЦЕ ПІД ТВОЄ ФОТО             */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "blur(15px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-center h-full min-h-[400px] lg:min-h-[600px]"
        >
          {/* Світіння на фоні (дихає) */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.6, 0.8, 0.6],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-euphoria-purple/40 via-euphoria-pink/30 to-euphoria-blue/30 blur-[80px] rounded-full transform scale-90"
          />

          {/* КОНТЕЙНЕР ДЛЯ ФОТО */}
          <motion.div
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-[450px] aspect-[4/5] rounded-[2.5rem] border border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.3)] group"
          >
            <img
              src="/my-photo.jpg"
              alt="Anna Yarema"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05020A]/90 via-[#05020A]/20 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-euphoria-purple/10 mix-blend-overlay" />
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(255,255,255,0.1)] rounded-[2.5rem] pointer-events-none" />
          </motion.div>

          {/* Плаваючі елементи декору */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
            className="absolute top-10 right-4 lg:right-10 w-14 h-14 rounded-full border border-euphoria-pink/30 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-lg z-20 pointer-events-none"
          >
            <span className="text-xl">✨</span>
          </motion.div>

          {/* ========================================== */}
          {/* АЙТІШНА ПАСХАЛКА: ЖУК, ЩО ТІКАЄ            */}
          {/* ========================================== */}
          <motion.div
            animate={{
              x: bugPos.x,
              y: bugPos.y,
              rotate: bugCaught ? 360 : 0,
              scale: bugCaught ? 1.2 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              // Анімація обертання тільки якщо спіймали
              rotate: { duration: 0.5 },
            }}
            onMouseEnter={handleBugHover}
            onClick={() => setBugCaught(true)}
            className="absolute bottom-16 left-4 lg:left-10 z-50 flex items-center cursor-pointer group"
          >
            <div
              className={`w-16 h-16 rounded-2xl border backdrop-blur-md flex items-center justify-center shadow-lg transition-colors duration-300 ${bugCaught ? "bg-euphoria-blue/20 border-euphoria-blue/50" : "bg-white/5 border-white/20"}`}
            >
              <span className="text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                {bugCaught ? "✅" : "🛸"}
              </span>
            </div>

            {/* Повідомлення при успішному кліку */}
            {bugCaught && (
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                className="absolute left-full ml-4 whitespace-nowrap px-4 py-2 bg-gradient-to-r from-euphoria-blue/20 to-euphoria-purple/20 backdrop-blur-xl border border-euphoria-blue/50 rounded-xl text-sm text-white font-mono shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                Bug fixed! Продакшн врятовано. Дайте мені цю посаду! 👾
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
