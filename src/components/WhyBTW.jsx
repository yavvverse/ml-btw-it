/* eslint-disable react-hooks/purity */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhyBTW = () => {
  const [comfortPos, setComfortPos] = useState({ x: 0, y: 0 });
  const [isOverloaded, setIsOverloaded] = useState(false);

  // Хендлер втечі зони комфорту
  const handleComfortHover = () => {
    setComfortPos({
      x: (Math.random() - 0.5) * 150,
      y: (Math.random() - 0.5) * 60,
    });
  };

  const handleMaxOutClick = () => {
    setIsOverloaded(true);
    // ЗБІЛЬШЕНО ТРИВАЛІСТЬ до 3 секунд, щоб насолодитися сяйвом
    setTimeout(() => {
      setIsOverloaded(false);
    }, 3000);
  };

  return (
    <section
      id="why-btw"
      className="relative z-10 min-h-screen flex items-center py-24 bg-[#05020A] border-t border-white/5 overflow-hidden font-sans text-white transition-colors duration-500"
    >
      {/* ========================================== */}
      {/* ПАСХАЛКА 2: ЕКРАН "1000% PREMIUM SHINE"    */}
      {/* ========================================== */}
      <AnimatePresence>
        {isOverloaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] pointer-events-none flex items-center justify-center overflow-hidden w-screen h-screen"
          >
            {/* ГЛАМУРНЕ ПУЛЬСУЮЧЕ СПАЛАХУВАННЯ (Золото/Рожевий) */}
            <motion.div
              animate={{
                // Плавно пульсує прозорістю, без різких стрибків
                opacity: [0.1, 0.6, 0.2, 0.7, 0.1],
                backgroundColor: ["#EC4899", "#F59E0B", "#8B5CF6", "#EC4899"],
              }}
              transition={{ duration: 0.4, repeat: 7, ease: "easeInOut" }}
              className="absolute inset-0 mix-blend-overlay will-change-opacity z-10"
            />

            {/* Гігантський текст */}
            <motion.h1
              initial={{ scale: 0, rotate: -15, filter: "blur(20px)" }}
              animate={{
                scale: [1.4, 1],
                rotate: [-15, 0],
                filter: "blur(0px)",
              }}
              exit={{ scale: 2, opacity: 0, filter: "blur(30px)" }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 12,
                mass: 1.5,
              }}
              className="text-[18vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-euphoria-pink to-[#F59E0B] drop-shadow-[0_0_120px_#EC4899] z-20 will-change-transform"
            >
              1000%!!!
            </motion.h1>

            {/* === ОБ'ЄДНАНИЙ ПОТІК ВОГНИКІВ ТА БЛИСКАВОК 🔥⚡️ (Диско залп) === */}
            {[...Array(60)].map((_, i) => {
              const isLightning = i % 3 === 0;

              return (
                <motion.div
                  key={`particle-${i}`}
                  initial={{
                    y: "110vh",
                    x: `${(Math.random() - 0.5) * 120}vw`,
                    scale: isLightning
                      ? Math.random() * 0.5 + 1.2 // Більше
                      : Math.random() * 1.8 + 0.8,
                    rotate: isLightning
                      ? Math.random() * 20 - 10
                      : Math.random() * 360,
                  }}
                  animate={{
                    y: "-150vh",
                    x: `${(Math.random() - 0.5) * 140}vw`,
                    rotate: isLightning ? undefined : Math.random() * 720,
                    opacity: [1, 0.8, 1, 0],
                  }}
                  transition={{
                    duration: isLightning
                      ? Math.random() * 0.8 + 1.5 // Швидше
                      : Math.random() * 1.5 + 2.5,
                    ease: isLightning ? "circOut" : "linear",
                    delay: Math.random() * 0.15, // Кучніше
                  }}
                  className={`absolute text-7xl md:text-9xl will-change-transform opacity-90 z-10 ${
                    isLightning
                      ? "text-[#22D3EE] drop-shadow-[0_0_35px_#22D3EE]" // Більше сяйва
                      : "drop-shadow-[0_0_30px_#F59E0B]"
                  }`}
                >
                  {isLightning ? "⚡️" : "🔥"}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================== */}
      {/* ФОН ІЗ ГЛАМУРНИМ КЛУБНИМ ВАЙБОМ 💎⭐️         */}
      {/* ========================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Базова зернистість */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay"></div>

        {/* ШАР 1: ЕФЕКТ ЧЕРЕЗ СІТКУ ДИСКО-КУЛІ */}
        <motion.div
          animate={
            isOverloaded
              ? { scale: [1, 1.2], filter: "brightness(2.5)" }
              : { scale: [1, 1.05, 1], filter: "brightness(1)" }
          }
          transition={
            isOverloaded
              ? { duration: 0.3, repeat: 10 }
              : { duration: 20, repeat: Infinity, ease: "easeInOut" }
          }
          className="absolute inset-0 bg-[url('/mirror-pattern.svg')] bg-[length:120px_120px] opacity-[0.03] mix-blend-screen"
        />

        {/* ШАР 2: СТРОБОСКОПІЧНІ ТА ЛАЗЕРНІ ПРОМЕНІ */}
        {/* Глибокий Фіолетовий Laser */}
        <motion.div
          animate={
            isOverloaded
              ? { rotate: [20, -10], y: [0, -50], opacity: [0.15, 0.5, 0.15] }
              : { rotate: [20, 10, 20], opacity: [0.15, 0.1, 0.15] }
          }
          transition={
            isOverloaded
              ? { duration: 0.3, repeat: 10 }
              : { duration: 25, repeat: Infinity, ease: "easeInOut" }
          }
          className="absolute top-[10%] -left-[20%] w-[100vw] h-[100vw] bg-euphoria-purple/30 blur-[200px] rounded-full mix-blend-screen will-change-transform"
        />

        {/* Рожево-Золотий Laser */}
        <motion.div
          animate={
            isOverloaded
              ? { rotate: [15, -15], y: [0, 50], opacity: [0.12, 0.45, 0.12] }
              : { rotate: [15, 25, 15], opacity: [0.12, 0.18, 0.12] }
          }
          transition={
            isOverloaded
              ? { duration: 0.35, repeat: 9, delay: 0.1 }
              : { duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }
          className="absolute bottom-[5%] -right-[15%] w-[90vw] h-[90vw] bg-euphoria-pink/25 blur-[220px] rounded-full mix-blend-screen will-change-transform"
        />

        {/* Золотий Spot */}
        <motion.div
          animate={
            isOverloaded
              ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.08, 0.3, 0.08],
                  filter: "brightness(3)",
                }
              : { scale: [1, 1.1, 1], opacity: [0.08, 0.1, 0.08] }
          }
          transition={
            isOverloaded
              ? { duration: 0.3, repeat: 10, ease: "linear" }
              : { duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }
          }
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#F59E0B]/15 blur-[180px] rounded-full mix-blend-overlay will-change-transform"
        />

        {/* ШАР 3: МЕРЕХТЛИВІ ЗІРКИ ТА ГЛІТТЕР (Оновлено для більшого сяйва) */}
        {[...Array(60)].map((_, i) => {
          // Визначаємо тип зірки: 5-кутна (кожна 3-тя) або іскриста
          const isStar = i % 3 === 0;
          return (
            <motion.div
              key={`glitter-${i}`}
              className="absolute will-change-transform"
              style={{
                width: isStar
                  ? Math.random() * 12 + 8 + "px"
                  : Math.random() * 8 + 4 + "px",
                height: isStar
                  ? Math.random() * 12 + 8 + "px"
                  : Math.random() * 8 + 4 + "px",
                color:
                  i % 3 === 0 ? "#F59E0B" : i % 3 === 1 ? "#EC4899" : "#8B5CF6",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={
                isOverloaded
                  ? {
                      scale: [0, 2.5, 0],
                      opacity: [0, 1, 0],
                      y: [0, -150, 0],
                      filter: ["blur(0px)", "blur(3px)", "blur(0px)"],
                    }
                  : {
                      scale: [0, 1.2, 0],
                      opacity: [0, 0.8, 0],
                      rotate: isStar ? [0, 360] : [0, 180, 360],
                    }
              }
              transition={{
                duration: isOverloaded
                  ? Math.random() * 1.5 + 1.2
                  : Math.random() * 5 + 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            >
              {isStar ? (
                // 5-КУТНА ЗІРКА ⭐
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full drop-shadow-[0_0_15px_currentColor]"
                >
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192z" />
                </svg>
              ) : (
                // ІСКРИСТА ЗІРКА ✨
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full drop-shadow-[0_0_10px_currentColor]"
                >
                  <path d="M12 0C12 0 12 10.5 24 12C12 13.5 12 24 12 24C12 24 12 13.5 0 12C12 10.5 12 0 12 0Z" />
                </svg>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        {/* ========================================== */}
        {/* ЛІВА ЧАСТИНА: ГОЛОГРАФІЧНИЙ ЗАГОЛОВОК    */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-5/12 flex flex-col justify-center text-center lg:text-left relative min-w-0"
        >
          {/* Світіння під заголовком */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-euphoria-pink/30 blur-[100px] rounded-full pointer-events-none" />

          <motion.h2
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="text-[15vw] md:text-[10vw] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] leading-[0.85] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-euphoria-pink to-euphoria-purple bg-[length:200%_auto] drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]"
          >
            WHY <br /> BTW
          </motion.h2>
        </motion.div>

        {/* ========================================== */}
        {/* ПРАВА ЧАСТИНА: ЦІЛІСНИЙ ТЕКСТ (МАНІФЕСТ)  */}
        {/* ========================================== */}
        {/* ВИПРАВЛЕННЯ БАГУ:
          Цей зовнішній блок відповідає ТІЛЬКИ за плавну появу при скролі.
        */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-7/12 min-w-0"
        >
          {/* А цей внутрішній блок відповідає ТІЛЬКИ за трясіння (OVERLOAD).
            Тепер вони не конфліктують!
          */}
          <motion.div
            animate={
              isOverloaded
                ? {
                    x: [-10, 10, -10, 10, -5, 5, 0],
                    y: [-6, 6, -6, 6, 0],
                    // ДОДАНО СЯЙВО НА КАРТКУ при оверлоаді
                    boxShadow: [
                      "0 0 0px rgba(236,72,153,0)",
                      "0 0 80px rgba(139,92,246,0.6)",
                      "0 0 0px rgba(236,72,153,0)",
                    ],
                  }
                : { x: 0, y: 0, boxShadow: "0 0 0px rgba(236,72,153,0)" }
            }
            transition={{ duration: 0.5, repeat: isOverloaded ? Infinity : 0 }}
            className="p-8 md:p-12 lg:p-14 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden group will-change-transform transition-all"
            style={
              isOverloaded
                ? {
                    borderColor: "rgba(245,158,11,0.6)",
                    background: "rgba(139,92,246,0.05)",
                  }
                : {}
            }
          >
            {/* Окремий шар для пульсації бордера і тіні */}
            <motion.div
              animate={{
                opacity: isOverloaded ? [0.3, 1, 0.3] : [0.3, 0.6, 0.3],
                scale: isOverloaded ? [1, 1.02, 1] : [1, 1, 1],
              }}
              transition={{
                duration: isOverloaded ? 0.2 : 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute inset-0 rounded-[2.5rem] border pointer-events-none will-change-opacity ${
                isOverloaded
                  ? "border-euphoria-pink shadow-[0_0_100px_rgba(236,72,153,0.8)]" // Максимальне сяйво
                  : "border-euphoria-purple/50 shadow-[0_0_40px_rgba(139,92,246,0.1)]"
              }`}
            />

            <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-euphoria-purple/20 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />

            <div className="text-gray-300 font-light leading-relaxed text-base md:text-lg lg:text-xl space-y-6 relative z-10">
              <p>
                Хоча мій шлях у BEST-і ще не дуже довгий, я вже встигла
                перейнятися духом кортіми BTW і зрозуміти, що саме цей івент
                найбільше мені відгукується.{" "}
                <span className="text-white font-medium">
                  Це те місце, де я хочу бути!
                </span>
              </p>

              <div
                className="pl-6 border-l-2 border-euphoria-purple/50 italic bg-gradient-to-r from-euphoria-purple/10 to-transparent py-4 rounded-r-xl my-8 transition-colors"
                style={isOverloaded ? { borderColor: "#F59E0B" } : {}}
              >
                Мені неймовірно близька наша головна місія —{" "}
                <span className="text-white font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                  розвиток студентів
                </span>
                . І для мене BTW є ідеальним її втіленням: це майданчик, де люди
                кидають собі виклик, виходять із{" "}
                {/* ПАСХАЛКА 1: ТІКАЮЧА ЗОНА КОМФОРТУ */}
                <motion.span
                  animate={{ x: comfortPos.x, y: comfortPos.y }}
                  transition={{ type: "spring", stiffness: 350, damping: 12 }}
                  onHoverStart={handleComfortHover}
                  className="inline-block text-white font-bold border-b border-dashed border-gray-400 cursor-pointer relative z-50 transition-colors hover:text-euphoria-blue will-change-transform"
                  title="Спробуй зловити!"
                >
                  зони комфорту
                </motion.span>{" "}
                і стають кращими.
              </div>

              <p>
                Я переконана, що в цій команді знайду саме той простір для
                власного розвитку, який мені потрібен зараз. І я готова{" "}
                {/* ПАСХАЛКА 2: КНОПКА ВИКЛАСТИСЯ НА МАКСИМУМ */}
                <motion.span
                  onClick={handleMaxOutClick}
                  whileHover={{ scale: 1.05, textShadow: "0 0 25px #F59E0B" }} // Сяйво золотом
                  whileTap={{ scale: 0.95 }}
                  className="text-euphoria-pink font-semibold drop-shadow-[0_0_5px_rgba(236,72,153,0.5)] cursor-pointer inline-block border-b border-euphoria-pink/50 pb-0.5 will-change-transform transition-all"
                  title="Клікни, щоб влаштувати PARTY!"
                >
                  {isOverloaded
                    ? "DISCO STARTED 🔥💎"
                    : "викладатися на максимум"}
                </motion.span>
                , щоб допомогти кортімі створити незабутній івент, який стане
                поштовхом для інших!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBTW;
