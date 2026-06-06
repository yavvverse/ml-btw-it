/* eslint-disable react-hooks/purity */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Стейт для пасхалки на логотипі
  const [logoClicks, setLogoClicks] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  const navLinks = [
    { name: "welcome", href: "welcome" },
    { name: "who am i", href: "whoami" },
    { name: "why me", href: "whyme" },
    { name: "why btw", href: "why-btw" },
    { name: "skills", href: "skills" },
    { name: "answers", href: "answers" },
  ];

  // Відслідковуємо скрол для зміни фону навбару
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Блокуємо скрол сторінки, коли відкрите мобільне меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Хендлер для пасхалки на логотипі
  // eslint-disable-next-line no-unused-vars
  const handleLogoClick = (e) => {
    handleLinkClick(); // закриваємо меню, якщо воно відкрите

    // Якщо пасхалка вже активна, не накручуємо далі
    if (showSecret) return;

    const newClicks = logoClicks + 1;
    if (newClicks >= 5) {
      setShowSecret(true);
      setLogoClicks(0);
      // Ховаємо пасхалку через 3.5 секунди
      setTimeout(() => setShowSecret(false), 3500);
    } else {
      setLogoClicks(newClicks);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-500 z-[100] ${
        isScrolled || isOpen
          ? "bg-[#0B0914]/90 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(139,92,246,0.15)]"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* ========================================== */}
      {/* ХЕДЕР (Логотип + Кнопки)                   */}
      {/* ========================================== */}
      <div className="flex justify-between items-center px-6 md:px-12 py-4 relative z-[110]">
        {/* ЛОГОТИП З ПАСХАЛКОЮ */}
        <div className="relative">
          <motion.a
            href="#welcome"
            className="flex items-center cursor-pointer group"
            onClick={handleLogoClick}
            // Анімація логотипу при активації пасхалки
            animate={
              showSecret
                ? {
                    rotate: [0, 360, 720, 1080],
                    scale: [1, 1.2, 0.9, 1.1, 1],
                    filter: [
                      "hue-rotate(0deg)",
                      "hue-rotate(90deg)",
                      "hue-rotate(180deg)",
                      "hue-rotate(0deg)",
                    ],
                  }
                : { rotate: 0, scale: 1, filter: "hue-rotate(0deg)" }
            }
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src="/logo_BTW_white.svg"
              alt="BEST Training Week Logo"
              className="w-32 md:w-40 h-auto object-contain group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all duration-300 relative z-20"
            />
          </motion.a>

          {/* Вибух іскорок при активації */}
          <AnimatePresence>
            {showSecret &&
              [...Array(15)].map((_, i) => (
                <motion.div
                  key={`spark-${i}`}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                  animate={{
                    x: (Math.random() - 0.5) * 200,
                    y: (Math.random() - 0.5) * 200,
                    opacity: 0,
                    scale: Math.random() * 1.5 + 0.5,
                    rotate: Math.random() * 360,
                  }}
                  transition={{ duration: 1 + Math.random(), ease: "easeOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-euphoria-pink pointer-events-none z-10 drop-shadow-[0_0_8px_#EC4899]"
                >
                  ✦
                </motion.div>
              ))}
          </AnimatePresence>

          {/* Секретне повідомлення */}
          <AnimatePresence>
            {showSecret && (
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: 1, y: 45, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ type: "spring", bounce: 0.6 }}
                className="absolute left-0 top-full mt-2 px-4 py-2 bg-white/10 border border-euphoria-pink rounded-xl backdrop-blur-md text-white font-black text-xs sm:text-sm tracking-widest whitespace-nowrap drop-shadow-[0_0_15px_#EC4899] z-[150]"
              >
                ✨ IT RESPONSIBLE SECURED ✨
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ДЕСКТОПНЕ МЕНЮ (ПК) */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              className="text-gray-300 hover:text-white transition-all relative group uppercase text-xs lg:text-sm tracking-widest"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-euphoria-purple to-euphoria-pink transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* КНОПКА МЕНЮ ДЛЯ МОБІЛОК (БУРГЕР) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 justify-center items-center w-10 h-10 border border-euphoria-purple/30 rounded-lg bg-euphoria-purple/10 backdrop-blur-sm relative z-[120]"
          >
            <motion.span
              animate={
                isOpen
                  ? { rotate: 45, y: 8, backgroundColor: "#EC4899" }
                  : { rotate: 0, y: 0, backgroundColor: "#ffffff" }
              }
              className="w-5 h-[2px] block transition-colors shadow-[0_0_8px_rgba(236,72,153,0.5)]"
            />
            <motion.span
              animate={
                isOpen
                  ? { opacity: 0, x: -10 }
                  : { opacity: 1, x: 0, backgroundColor: "#ffffff" }
              }
              className="w-4 h-[2px] block self-end mr-2.5 transition-colors shadow-[0_0_8px_rgba(236,72,153,0.5)]"
            />
            <motion.span
              animate={
                isOpen
                  ? {
                      rotate: -45,
                      y: -8,
                      width: "20px",
                      backgroundColor: "#EC4899",
                    }
                  : { rotate: 0, y: 0, backgroundColor: "#ffffff" }
              }
              className="w-5 h-[2px] block transition-colors shadow-[0_0_8px_rgba(236,72,153,0.5)]"
            />
          </button>
        </div>
      </div>

      {/* ========================================== */}
      {/* ПОВНОЕКРАННЕ МОБІЛЬНЕ МЕНЮ (OVERLAY)         */}
      {/* ========================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed top-0 left-0 w-full bg-[#0B0914] overflow-hidden z-[105] flex flex-col justify-center items-center"
          >
            <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-euphoria-purple/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-euphoria-pink/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col items-center gap-10 w-full relative z-10 px-6">
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    delay: 0.1 + index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  key={link.name}
                  href={`#${link.href}`}
                  onClick={handleLinkClick}
                  className="text-3xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white hover:from-euphoria-purple hover:to-euphoria-pink transition-all uppercase drop-shadow-md text-center w-full"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 text-gray-500 font-mono text-xs tracking-[0.3em] uppercase"
            >
              Anna Yarema • BTW'26
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
