/* eslint-disable react-hooks/purity */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhoAmI = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleElevenClick = () => {
    if (clickCount < 4) {
      setClickCount((prev) => prev + 1);
    } else {
      setShowEasterEgg(true);
      setClickCount(0);
      setTimeout(() => {
        setShowEasterEgg(false);
      }, 4000);
    }
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="whoami"
      // Адаптивні вертикальні відступи: py-16 для мобілок, py-24 для ПК
      className="relative z-10 min-h-screen flex items-center py-16 lg:py-24 border-t border-white/5 overflow-hidden"
    >
      {/* ЕФЕКТ ПАСХАЛКИ (ВИБУХ JS ТА 11) */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] pointer-events-none flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#05020A]/80 backdrop-blur-sm" />

            <motion.div
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="relative z-10 px-6 py-4 md:px-8 md:py-6 rounded-2xl bg-[#F7DF1E]/10 border-2 border-[#F7DF1E] shadow-[0_0_50px_rgba(247,223,30,0.4)] backdrop-blur-md mx-4"
            >
              <p className="text-[#F7DF1E] font-mono text-lg md:text-3xl font-bold tracking-tight text-center">
                &gt; console.log("Achievement unlocked: JavaScript Child. ");
              </p>
            </motion.div>

            {[...Array(30)].map((_, i) => (
              <motion.div
                key={`js-particle-${i}`}
                initial={{ x: 0, y: 0, scale: 0, rotate: 0 }}
                animate={{
                  x: (Math.random() - 0.5) * 1000,
                  y: (Math.random() - 0.5) * 1000,
                  scale: Math.random() * 2 + 0.5,
                  rotate: Math.random() * 360,
                }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="absolute text-3xl md:text-5xl font-bold drop-shadow-[0_0_15px_rgba(247,223,30,0.8)]"
                style={{ color: i % 2 === 0 ? "#F7DF1E" : "#EC4899" }}
              >
                {i % 2 === 0 ? "JS" : "11"}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Адаптивний gap: 8 на мобілках, 16 на ПК */}
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 relative">
        {/* ========================================== */}
        {/* ЛІВА ЧАСТИНА: ЗАГОЛОВОК                    */}
        {/* ========================================== */}
        {/* Вирівнювання: text-left всюди. Залипання: lg:sticky тільки для ПК */}
        <div className="w-full lg:w-5/12 flex flex-col justify-start text-left relative z-20 min-w-0 lg:sticky lg:top-32">
          {/* Світіння підлаштоване під ліве вирівнювання */}
          <div className="absolute top-1/2 left-0 lg:left-1/4 -translate-y-1/2 w-48 lg:w-64 h-48 lg:h-64 bg-euphoria-purple/30 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 lg:left-1/2 w-32 lg:w-48 h-32 lg:h-48 bg-euphoria-pink/20 blur-[70px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10"
          >
            {/* Адаптивний розмір шрифту */}
            <h2 className="text-[18vw] sm:text-[12vw] md:text-[10vw] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] leading-[0.85] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-euphoria-pink drop-shadow-lg mb-4">
              MY <br /> STORY
            </h2>
            <div className="block">
              <p className="text-euphoria-purple tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm lg:text-base font-semibold border-l-2 border-euphoria-purple pl-3 md:pl-4 ml-1">
                Read carefully
              </p>
            </div>
          </motion.div>
        </div>

        {/* ========================================== */}
        {/* ПРАВА ЧАСТИНА: РОЗГОРТАННЯ ТЕКСТУ          */}
        {/* ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-7/12 relative z-10 min-w-0"
        >
          {/* Адаптивні падінги та радіус */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-euphoria-glow relative overflow-hidden group transition-all duration-700">
            <div className="absolute top-0 right-0 w-48 lg:w-64 h-48 lg:h-64 bg-euphoria-pink/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 lg:w-64 h-48 lg:h-64 bg-euphoria-blue/10 blur-[80px] rounded-full pointer-events-none" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
              className="text-gray-300 font-light leading-relaxed text-sm sm:text-base lg:text-lg space-y-5 sm:space-y-6 relative z-10"
            >
              {/* === ЗАВЖДИ ВИДИМА ЧАСТИНА === */}
              <motion.p variants={textVariant}>
                Моя історія з IT почалась ще задовго до того, як я зрозуміла, що
                це таке. Вже в дитинстві мене цікавила техніка, а моєю улюбленою
                іграшкою був пульт від телевізора.
              </motion.p>

              <motion.p
                variants={textVariant}
                className="pl-4 sm:pl-6 border-l-2 border-euphoria-pink/50 italic bg-gradient-to-r from-euphoria-pink/10 to-transparent py-3 rounded-r-xl shadow-[inset_0_0_10px_rgba(236,72,153,0.02)]"
              >
                У 1-му класі поки всі вчились додавати «1+1» і в них виходило
                «2», то в мене вийшло
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 15px rgba(247,223,30,0.8)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleElevenClick}
                  className="text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] text-lg sm:text-xl md:text-2xl px-1 cursor-pointer inline-block transition-colors"
                  style={{ color: clickCount > 2 ? "#F7DF1E" : "white" }}
                  title="Клікни мене!"
                >
                  «11»
                </motion.span>{" "}
                і відтоді багато хто жартує, що мій батько JavaScript{" "}
                <span className="text-gray-400 not-italic text-xs sm:text-sm">
                  (думаю це був знак)
                </span>
                .
              </motion.p>

              <motion.p variants={textVariant}>
                У 4-му класі я вперше спробувала створити алгоритм на Scratch, і
                тоді, мені здається, я остаточно визначилася з професією.
              </motion.p>

              {/* === ПРИХОВАНА ЧАСТИНА (РОЗГОРТАЄТЬСЯ) === */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-5 sm:space-y-6 pt-5 sm:pt-6 border-t border-white/5 mt-5 sm:mt-6">
                      <p>
                        Далі все розвивалось послідовно: у 9 класі я почала
                        вивчати Python, у 10-му пройшла курс з веб-розробки
                        (HTML/CSS). Вступивши на ПЗ, я вивчила C/C++, а
                        потрапивши в BEST, остаточно зрозуміла, що хочу
                        розвиватися тут як айтівиця.
                      </p>

                      <p>
                        Розуміючи, що моїх знань недостатньо для верстки сайтів,
                        я почала вивчати{" "}
                        <span className="text-white font-medium drop-shadow-[0_0_5px_rgba(139,92,246,0.5)]">
                          React, Tailwind, Next.js, Redux, БД та Telegram-боти
                        </span>
                        . Освоївши базу, тепер більше зосереджуюсь на якості
                        реалізації — на тому, як працює взаємодія з сайтом і
                        наскільки продумані його елементи, щоб усе було легко і
                        зрозуміло.
                      </p>

                      <p>
                        Загалом я дуже відкрита і емпатична людина, люблю
                        працювати в команді і багато спілкуватися. Тому з
                        задоволенням буду підтримувати кортіму і допомагати з
                        усім, не тільки під час івенту, але й у будь-який
                        потрібний час! Щодо івенту і інших технічних навичок:
                        вмію працювати з проектором і налаштуваннями іншої
                        техніки{" "}
                        <span className="text-gray-400 italic">
                          (якщо буде потрібно, то маю вдома купу різних шнурів і
                          перехідників)
                        </span>
                        , тому з радістю розбиратимуся з усім.
                      </p>

                      <p>
                        Також хотіла б додати, що проходила КТ у{" "}
                        <span className="text-white font-medium">
                          Олексія Тарчинського
                        </span>
                        , який детально пояснив мені загальну посаду IT
                        Responsible (сайт, брошури, версталка, структура
                        роботи), і{" "}
                        <span className="text-white font-medium">
                          Олега Власюка
                        </span>
                        , який розповів конкретно про досвід у кортімі BTW (як
                        краще робити і не робити, з чого починати і коли, з ким
                        потрібно буде працювати більше). Також у{" "}
                        <span className="text-white font-medium">
                          Романа Сікорського
                        </span>{" "}
                        від якого я дізналася про актуальні технології і стек.
                      </p>

                      <div className="inline-block px-5 py-4 sm:px-6 sm:py-4 rounded-2xl bg-euphoria-pink/10 border border-euphoria-pink/30 shadow-[0_0_20px_rgba(236,72,153,0.15)] relative overflow-hidden mt-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-euphoria-purple/20 to-euphoria-pink/20 mix-blend-overlay pointer-events-none" />
                        <p className="text-white font-bold tracking-wide relative z-10 text-base sm:text-lg md:text-xl">
                          Тому, я думаю, що зможу впоратись із цією посадою і
                          готова викладатись на всі{" "}
                          <span className="text-euphoria-pink drop-shadow-[0_0_8px_#EC4899] text-lg sm:text-xl md:text-2xl">
                            1000%!!!
                          </span>{" "}
                          🔥
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* КНОПКА РОЗГОРТАННЯ */}
            <div className="mt-8 flex justify-center lg:justify-start relative z-20">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-mono tracking-widest text-euphoria-pink transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center"
              >
                {isExpanded ? "SHOW LESS" : "READ FULL STORY"}
                <motion.span
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  ▼
                </motion.span>
              </button>
            </div>

            {/* Градієнт, який ховає текст знизу (зникає, коли відкрито) */}
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#0B0914] to-transparent pointer-events-none rounded-b-[2rem] lg:rounded-b-[2.5rem]" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoAmI;
