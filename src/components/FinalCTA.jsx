/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/purity */
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";

const FinalCTA = () => {
  // Налаштування для паралакс-ефекту фону від миші
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Вираховуємо позицію миші відносно центру екрану (-0.5 до 0.5)
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Трансформуємо позицію миші в невеликий зсув для елементів фону (Slower layer)
  const moveXSlow = useTransform(mouseX, [-0.5, 0.5], [10, -10]);
  const moveYSlow = useTransform(mouseY, [-0.5, 0.5], [10, -10]);

  return (
    <section
      id="contact"
      className="relative z-10 py-32 bg-[#0B0914] border-t border-white/5 overflow-hidden flex flex-col items-center justify-center min-h-[90vh] font-sans text-white transition-colors duration-500"
    >
      {/* ========================================== */}
      {/* ЦІКАВИЙ ІНТЕРАКТИВНИЙ ФОН 🔥               */}
      {/* ========================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Базовий шум */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay"></div>

        {/* 1. КІБЕР-СІТКА (Perspective Grid) */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.03] mix-blend-overlay [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

        {/* 2. НОВИЙ ШАР: ДИСКО-СІТКА ТА ГЛІТТЕР ✨💎 */}
        {/* Неонова диско-сітка */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[url('/mirror-pattern.svg')] bg-[length:120px_120px] opacity-[0.03] mix-blend-screen"
        />

        {/* Миготливі блискітки (Глітер) */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`glitter-${i}`}
            className="absolute"
            style={{
              width: Math.random() * 6 + 3 + "px",
              height: Math.random() * 6 + 3 + "px",
              color: i % 2 === 0 ? "#EC4899" : "#8B5CF6", // Рожеві та фіолетові
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 0.8, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full drop-shadow-[0_0_10px_currentColor]"
            >
              <path d="M12 0C12 0 12 10.5 24 12C12 13.5 12 24 12 24C12 24 12 13.5 0 12C12 10.5 12 0 12 0Z" />
            </svg>
          </motion.div>
        ))}

        {/* 3. ПОТІК КОДУ (Digital Rain - Субтильний) */}
        <div className="absolute inset-0 flex justify-around opacity-[0.02] text-xs font-mono text-euphoria-blue [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`code-${i}`}
              animate={{ y: ["-100%", "100%"] }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * -20,
              }}
              className="whitespace-nowrap"
              style={{ writingMode: "vertical-rl" }}
            >
              {i % 2 === 0
                ? "react framer btw26 lpnu"
                : "01001 11010 00110 10101"}
            </motion.div>
          ))}
        </div>

        {/* 4. ГЛОБАЛЬНЕ СЯЙВО ТА ОРБИ */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Центральний фіолетовий Bloom */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.45, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[70vw] h-[70vw] bg-euphoria-purple/30 blur-[130px] rounded-full mix-blend-screen"
          />

          {/* Рожева смуга */}
          <motion.div
            style={{ x: moveXSlow, y: moveYSlow }} // Плавний паралакс
            className="absolute mt-48 w-[80vw] h-[15vh] bg-euphoria-pink/20 blur-[100px] rounded-full mix-blend-screen rotate-[-15deg]"
          />
        </div>
      </div>

      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        {/* ========================================== */}
        {/* ЗЛІВА: ФОТО-ЗАГЛУШКА (З сяйвом)            */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="relative group w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mx-auto md:mx-0 rounded-full border-4 border-euphoria-pink shadow-[0_0_50px_#EC4899] p-2 bg-white/5"
        >
          {/* Твоє фанове фото (заглушка) */}
          <div className="w-full h-full rounded-full bg-[#0B0914] overflow-hidden relative group">
            <img
              src="/photo_btw.jpg"
              // object-cover змушує фото зберігати пропорції і заповнювати весь контейнер (обрізаючи зайве)
              // object-center центрує обрізку (якщо хочеш обрізати по верхньому краю, можна змінити на object-top)
              className="w-full h-full object-cover object-center"
            />

            {/* Гейм ефект при наведенні */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent scale-[2] -rotate-12 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
          </div>

          {/* Мерехтливе світіння під фото */}
          <div className="absolute -inset-1.5 rounded-full bg-euphoria-pink blur-md opacity-30 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
        </motion.div>

        {/* ========================================== */}
        {/* СПРАВА: ТЕКСТОВА ЧАСТИНА                   */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-auto text-center md:text-left flex flex-col items-center md:items-start"
        >
          {/* РАКЕТУ ВИДАЛЕНО, ТЕКСТ ЗАГОЛОВКА ОНОВЛЕНО */}

          {/* ФІКС БАГУ З ТЕКСТОМ: Прибрано text-transparent bg-clip-text, щоб текст не обрізався в Safari */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-normal md:leading-snug drop-shadow-lg text-left">
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
              READY FOR
            </span>
            <br />
            <span className="text-white drop-shadow-[0_0_15px_rgba(236,72,153,0.7)]">
              BTW 15?
            </span>
          </h2>

          <p className="text-gray-400 font-light text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed mb-16">
            Мотивашка — це лише початок. Тисни на кнопку нижче, щоб перейти у
            мого <span className="text-white font-medium">Telegram-бота</span> і
            побачити, що я ще підготувала!
          </p>

          {/* ========================================== */}
          {/* КНОПКА ТЕЛЕГРАМ (З ЛЕВІТАЦІЄЮ)             */}
          {/* ========================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative group"
          >
            {/* Анімований фон-світіння, який розширюється при наведенні */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(139,92,246,0.3)",
                  "0 0 60px rgba(236,72,153,0.5)",
                  "0 0 20px rgba(139,92,246,0.3)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-1.5 bg-gradient-to-r from-euphoria-purple to-euphoria-pink rounded-[2.2rem] blur-md opacity-40 group-hover:opacity-100 transition duration-500 group-hover:duration-200"
            />

            <motion.a
              animate={{ y: [-6, 6, -6] }} // Левітація
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              href="https://t.me/ТВІЙ_БОТ" // <--- ЗАМІНИ ЦЕ ПОСИЛАННЯ НА СВОГО БОТА!
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-5 px-9 py-5 md:px-12 md:py-6 bg-[#0B0914] rounded-[2rem] border border-white/10 leading-none hover:border-euphoria-pink/50 transition-colors"
            >
              {/* Іконка Telegram з неон ефектом */}
              <div className="relative w-9 h-9 md:w-11 md:h-11 flex-shrink-0">
                <div className="absolute inset-0 bg-[#22A9EA] blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
                <svg
                  className="relative z-10 w-full h-full text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.895-1.056-.68-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-gray-400 font-mono text-[11px] md:text-xs tracking-[0.25em] uppercase mb-1.5">
                  Open in Telegram
                </span>
                {/* ФІКС БАГУ З ТЕКСТОМ: Також прибрано text-transparent bg-clip-text на кнопці для стабільності */}
                <span className="text-white font-black text-2xl md:text-3xl tracking-tight uppercase transition-all duration-300">
                  Launch Bot
                </span>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* ========================================== */}
      {/* ФУТЕР (Підпис)                             */}
      {/* ========================================== */}
      <div className="absolute bottom-6 w-full text-center">
        <p className="text-gray-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
          &copy; 2026 <span className="text-euphoria-purple">Anna Yarema</span>{" "}
          • BTW • BEST
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
