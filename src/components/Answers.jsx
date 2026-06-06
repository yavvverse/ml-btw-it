/* eslint-disable react-hooks/purity */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Answers = () => {
  const [openId, setOpenId] = useState(1);

  const faqs = [
    {
      id: 1,
      q: "Розстав по пріоритетам сфери життя (робота, навчання, BEST, сімʼя, кортіма і тд). Чи зміняться вони, якщо ти потрапиш у кортіму?",
      a: "Якщо я потраплю в кортіму, то кортіма однозначно на першому місці енівей!!\n\nРозставлені сфери життя: кортіма, бест, сім'я, навчання і роботи нема))",
      color: "#EC4899", // Pink
    },
    {
      id: 2,
      q: "Оціни свою зайнятість від 0 до 10 (10 – дуже зайнятий)",
      a: "Нуууль! Літо, канікули, чііл)))",
      color: "#8B5CF6", // Purple
    },
    {
      id: 3,
      q: "Твої плани на ближчі 3 місяці і чи будеш ти у Львові?",
      a: "На літо я їду додому у своє село, але воно в львівській області і в будь-який час я зможу приїхати до Львова.",
      color: "#3B82F6", // Blue
    },
    {
      id: 4,
      q: "Чи маєш ти навички, не пов’язані з твоєю обраною посадою: монтаж відео, вмієш робити музику, готування?",
      a: "Звісно! Вмію монтажити, музику хіба на сопілці зіграю, ахахха, і готую дуже смачний львівський сирник та й багато іншого просто сирник розйоб!",
      color: "#10B981", // Green
    },
  ];

  // SVG для 4-кутної зірочки (Sparkle)
  const StarIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M12 0C12 0 12 10.5 24 12C12 13.5 12 24 12 24C12 24 12 13.5 0 12C12 10.5 12 0 12 0Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <section
      id="answers"
      className="relative z-10 py-32 bg-[#05020A] border-t border-white/5 overflow-hidden font-sans text-white"
    >
      {/* ========================================== */}
      {/* АНІМОВАНИЙ ФОН */}
      {/* ========================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Базові туманності, які дихають */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-euphoria-blue blur-[150px] rounded-full will-change-transform"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-euphoria-pink blur-[150px] rounded-full will-change-transform"
        />

        {/* Мерехтливі 4-кутні зірочки */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute will-change-transform"
            style={{
              width: Math.random() * 20 + 10 + "px",
              height: Math.random() * 20 + 10 + "px",
              color:
                i % 3 === 0 ? "#EC4899" : i % 3 === 1 ? "#8B5CF6" : "#ffffff",
              left: Math.random() * 90 + 5 + "%",
              top: Math.random() * 90 + 5 + "%",
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 90, 180],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            <StarIcon />
          </motion.div>
        ))}

        {/* ========================================== */}
        {/* РІДКІСНІ ТА КРАСИВІ КОМЕТИ */}
        {/* ========================================== */}

        {/* Комета 1: Рожевий відтінок */}
        <motion.div
          className="absolute flex items-center will-change-transform"
          style={{ top: "15%", left: "-20%", rotate: "25deg" }}
          animate={{
            x: ["0vw", "130vw"],
            y: ["0vh", "60vh"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 22,
            ease: "easeInOut",
            delay: 5,
          }}
        >
          <div className="w-[200px] h-[2px] bg-gradient-to-r from-transparent to-euphoria-pink/80" />
          <div className="w-[6px] h-[6px] rounded-full bg-white shadow-[0_0_20px_4px_rgba(236,72,153,0.9)]" />
        </motion.div>

        {/* Комета 2: Синюватий відтінок */}
        <motion.div
          className="absolute flex items-center will-change-transform"
          style={{ top: "45%", left: "-20%", rotate: "15deg" }}
          animate={{
            x: ["0vw", "140vw"],
            y: ["0vh", "40vh"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 35,
            ease: "easeInOut",
            delay: 18,
          }}
        >
          <div className="w-[280px] h-[1px] bg-gradient-to-r from-transparent to-euphoria-blue/80" />
          <div className="w-[4px] h-[4px] rounded-full bg-white shadow-[0_0_15px_3px_rgba(59,130,246,0.9)]" />
        </motion.div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-[12vw] md:text-[6vw] leading-none font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-lg mb-4">
            Q&A
          </h2>
          <p className="text-euphoria-pink font-light tracking-[0.3em] uppercase text-sm md:text-base border-b border-euphoria-pink/30 pb-2 inline-block">
            Ще трохи про мене
          </p>
        </motion.div>

        {/* Акордеон (Список питань) */}
        <div className="flex flex-col gap-4 md:gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }} // Картка з'являється швидше (на 10% видимості)
                // Використовуємо spring замість duration для плавності
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1,
                }}
                className={`rounded-[2rem] border backdrop-blur-md overflow-hidden transition-colors duration-500 ${
                  isOpen
                    ? "bg-white/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
                    : "bg-white/[0.01] hover:bg-white/[0.02]"
                }`}
                style={{
                  borderColor: isOpen
                    ? `${faq.color}50`
                    : "rgba(255,255,255,0.05)",
                }}
              >
                {/* Клікабельна шапка питання */}
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none cursor-pointer group"
                >
                  <h3
                    className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 pr-4 ${
                      isOpen
                        ? "text-white"
                        : "text-gray-400 group-hover:text-gray-200"
                    }`}
                  >
                    {faq.q}
                  </h3>

                  {/* Іконка Плюс/Мінус */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300"
                    style={{
                      borderColor: isOpen ? faq.color : "rgba(255,255,255,0.1)",
                      backgroundColor: isOpen
                        ? `${faq.color}20`
                        : "transparent",
                    }}
                  >
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      className="relative w-4 h-4"
                    >
                      <span
                        className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 rounded-full transition-colors duration-300"
                        style={{
                          backgroundColor: isOpen ? faq.color : "#9CA3AF",
                        }}
                      />
                      <span
                        className="absolute top-0 left-1/2 h-full w-[2px] -translate-x-1/2 rounded-full transition-colors duration-300"
                        style={{
                          backgroundColor: isOpen ? faq.color : "#9CA3AF",
                        }}
                      />
                    </motion.div>
                  </div>
                </button>

                {/* Анімація розгортання відповіді */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // Кастомний easing (як в Apple)
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-10 pt-0">
                        <div
                          className="pl-6 border-l-2 transition-colors duration-500"
                          style={{ borderColor: `${faq.color}80` }}
                        >
                          <p className="text-gray-300 font-light leading-relaxed whitespace-pre-line text-base md:text-lg">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Answers;
