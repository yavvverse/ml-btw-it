/* eslint-disable react-hooks/purity */
import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
// Іконки
import { FaReact, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  const carouselRef = useRef(null);
  const innerListRef = useRef(null);

  const skills = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "JavaScript", icon: <IoLogoJavascript />, color: "#F7DF1E" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
    { name: "C", icon: <SiC />, color: "#A8B9CC" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  ];

  // Потрібно зациклити елементи кілька разів, щоб створити безшовний ефект драгу в обидва боки
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  // Значення позиції х, яким керує Framer Motion
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  // Швидкість автоскролу (від’ємна, щоб їхало вліво)
  const baseSpeed = -1.2;

  // Постійний цикл анімації (кожен кадр)
  useAnimationFrame(() => {
    if (isDragging || !innerListRef.current) return;

    // Розраховуємо ширину однієї повної пачки іконок
    const singleContainerWidth = innerListRef.current.scrollWidth / 4;
    let currentX = x.get();

    // Рухаємо стрічку
    currentX += baseSpeed;

    // Якщо заїхали занадто далеко вліво — магічно скидаємо позицію в центр (безшовно)
    if (currentX <= -singleContainerWidth * 2) {
      currentX += singleContainerWidth;
    }
    // Якщо користувач рушив руками занадто далеко вправо
    if (currentX >= 0) {
      currentX -= singleContainerWidth;
    }

    x.set(currentX);
  });

  // Ефект для початкового вирівнювання каруселі по центру
  useEffect(() => {
    if (innerListRef.current) {
      const singleContainerWidth = innerListRef.current.scrollWidth / 4;
      x.set(-singleContainerWidth); // Ставимо в позицію другої пачки для запасу зліва/справа
    }
  }, [x]);

  // Хендлер закінчення драгу — безшовно підхоплює нескінченність
  const handleDragEnd = () => {
    setIsDragging(false);
    if (!innerListRef.current) return;

    const singleContainerWidth = innerListRef.current.scrollWidth / 4;
    let currentX = x.get();

    if (currentX <= -singleContainerWidth * 2) currentX += singleContainerWidth;
    if (currentX >= 0) currentX -= singleContainerWidth;

    x.set(currentX);
  };

  return (
    <section
      id="skills"
      className="relative z-10 py-32 bg-[#05020A] border-t border-white/5 overflow-hidden font-sans text-white"
    >
      {/* ========================================== */}
      {/* АНІМОВАНИЙ ФОН (ЕЙФОРІЯ)                  */}
      {/* ========================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-20 w-[500px] h-[500px] bg-euphoria-purple/30 blur-[150px] rounded-full mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-euphoria-pink/20 blur-[150px] rounded-full mix-blend-screen"
        />
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              backgroundColor:
                i % 3 === 0 ? "#EC4899" : i % 3 === 1 ? "#8B5CF6" : "#3B82F6",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + 100 + "%",
              boxShadow: `0 0 10px ${i % 2 === 0 ? "#EC4899" : "#8B5CF6"}`,
            }}
            animate={{
              y: [0, -1000],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 15,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 px-6 md:px-12">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-[12vw] md:text-[6vw] leading-none font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-euphoria-blue via-euphoria-purple to-euphoria-pink drop-shadow-lg mb-4">
            SKILLS
          </h2>
          <p className="text-gray-400 font-light tracking-[0.3em] uppercase text-sm md:text-base">
            my tech stack
          </p>
        </motion.div>

        {/* Вікно каруселі */}
        <div
          ref={carouselRef}
          className="overflow-hidden relative pb-10 cursor-grab active:cursor-grabbing select-none"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Стрічка з магією нескінченного драгу */}
          <motion.div
            ref={innerListRef}
            style={{ x }}
            drag="x"
            dragElastic={0.9} // Дозволяє вільно крутити за межі екрану
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            className="flex gap-6 md:gap-10 pt-10 px-2 w-max"
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-36 h-36 md:w-44 md:h-44 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col items-center justify-center gap-4 group cursor-pointer transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-2 relative overflow-hidden"
                style={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 15px 35px ${skill.color}33, inset 0 0 20px ${skill.color}11`;
                  e.currentTarget.style.borderColor = `${skill.color}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
                  }}
                />
                <div
                  className="text-5xl md:text-6xl transition-transform duration-300 group-hover:scale-110 relative z-10"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <span className="text-gray-300 font-mono text-sm md:text-base font-medium tracking-wider relative z-10">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
