import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

// 3D Картка з ефектом нахилу та голограми
const TiltCard = ({ title, description, color, isAnchored, onAnchorClick }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Перевіряємо, чи це картка-пасхалка
  const isAnchorCard = title === "The Anchor";

  return (
    <div className="relative w-full h-full">
      {/* АНІМАЦІЯ ПАДІННЯ ЛОГОТИПУ BTW (Тільки для Anchor) */}
      <AnimatePresence>
        {isAnchorCard && isAnchored && (
          <motion.div
            initial={{ y: -800, scale: 2, rotate: -20 }}
            animate={{ y: -40, scale: 1.2, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              mass: 2,
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 z-[60] pointer-events-none"
          >
            <img
              src="/logo_BTW_white.svg"
              alt="BTW Anchor"
              className="w-24 h-24 drop-shadow-[0_20px_30px_rgba(59,130,246,0.8)] filter transition-all"
            />
            {/* Ударна хвиля (світіння) */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#3B82F6] rounded-full blur-[20px] -z-10"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Обгортка для ефекту придавлювання (Тільки для Anchor) */}
      <motion.div
        animate={
          isAnchorCard && isAnchored
            ? { y: 40, rotateZ: 3, scale: 0.95 }
            : { y: 0, rotateZ: 0, scale: 1 }
        }
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-full h-full"
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            borderColor:
              isAnchorCard && isAnchored
                ? `${color}80`
                : "rgba(255,255,255,0.1)",
          }}
          className="relative w-full h-full min-h-[450px] rounded-3xl border bg-white/[0.02] backdrop-blur-xl transition-colors duration-500 hover:bg-white/[0.05] group"
        >
          {/* Голографічний відблиск (Shimmer) */}
          <motion.div
            style={{
              background: `radial-gradient(circle at center, ${color}25 0%, transparent 70%)`,
              opacity: useTransform(mouseXSpring, [-0.5, 0.5], [0, 1]),
            }}
            className="absolute inset-0 pointer-events-none z-0 group-hover:opacity-100 transition-opacity rounded-3xl"
          />

          {/* Вміст картки з ефектом глибини */}
          <div
            style={{ transform: "translateZ(40px)" }}
            className="relative z-10 p-6 md:p-8 h-full flex flex-col items-center text-center justify-center"
          >
            {/* КЛІКАБЕЛЬНА ЧАСТИНА ДЛЯ ТИТЛУ */}
            <div
              className={`relative w-full mb-6 flex justify-center ${isAnchorCard ? "cursor-pointer z-50" : ""}`}
              onClick={isAnchorCard ? onAnchorClick : undefined}
              title={
                isAnchorCard && !isAnchored ? "Клікни, щоб кинути якір!" : ""
              }
            >
              {/* ========================================================= */}
              {/* НОВА АНІМАЦІЯ ПІДКАЗКИ (Погойдування та пульсуюче світіння) */}
              {/* ========================================================= */}
              {isAnchorCard && !isAnchored && (
                <>
                  {/* Пульсуюче коло на фоні заголовка */}
                  <motion.div
                    animate={{
                      scale: [0.9, 1.1, 0.9],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-[#3B82F6]/20 blur-xl rounded-full pointer-events-none group-hover:bg-[#3B82F6]/40 transition-colors"
                  />

                  {/* Сама обгортка тексту, яка плавно гойдається вверх-вниз */}
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex flex-col items-center justify-center relative w-full"
                  >
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-[#3B82F6] group-hover:opacity-0 transition-opacity duration-500">
                      {title}
                    </h3>
                    <h3
                      className="text-xl md:text-2xl font-black uppercase tracking-tighter absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center text-transparent bg-clip-text"
                      style={{
                        backgroundImage: `linear-gradient(to right, #ffffff, ${color})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {title}
                    </h3>
                  </motion.div>
                </>
              )}

              {/* Звичайне відображення для інших карток або коли якір вже активовано */}
              {(!isAnchorCard || isAnchored) && (
                <>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-[#6D28D9] group-hover:opacity-0 transition-opacity duration-500">
                    {title}
                  </h3>
                  <h3
                    className="text-xl md:text-2xl font-black uppercase tracking-tighter absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center text-transparent bg-clip-text"
                    style={{
                      backgroundImage: `linear-gradient(to right, #ffffff, ${color})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {title}
                  </h3>
                </>
              )}
            </div>

            <div className="text-gray-400 font-light leading-relaxed group-hover:text-gray-200 transition-colors text-sm md:text-base">
              {description}
            </div>

            {/* Декоративна лінія знизу */}
            <div
              className="absolute bottom-6 w-12 h-1 rounded-full transition-all duration-500 group-hover:w-24"
              style={{ backgroundColor: color, boxShadow: `0 0 15px ${color}` }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const WhyMe = () => {
  const [isAnchored, setIsAnchored] = useState(false);

  const handleAnchorDrop = () => {
    if (!isAnchored) {
      setIsAnchored(true);
    }
  };

  const cards = [
    {
      title: "The Visionary",
      color: "#EC4899", // Рожевий
      description: (
        <p>
          Для мене важливо, щоб проєкт викликав емоції і запам’ятовувався з
          перших секунд. І пишучи цю мотивашку, зрозуміла, що мені дуже хочеться
          не просто перетворювати дизайн на сайт, а й додавати щось своє:{" "}
          <span className="text-white font-medium">
            якісь креативні деталі, анімації, пасхалки
          </span>{" "}
          <span className="italic opacity-70">
            (спробуй зловити 🛸, і в розповідях знайти виділені слова, вони теж
            пасхалки, спробуй знайти усі)))))
          </span>{" "}
          чи фішки, які роблять проєкт живим і розйобним. Тому готова
          викладатись на всі 100%, щоб сайт і бот були незабутніми!!
        </p>
      ),
    },
    {
      title: "Tech Adaptability",
      color: "#8B5CF6", // Фіолетовий
      description: (
        <p>
          Я дуже швидко вчусь через практику: курси, YouTube, документація - і
          одразу все тестую в коді. Коли потрапила в BEST, мені довелось{" "}
          <span className="text-white font-medium">з нуля освоювати React</span>
          , але я настільки втягнулась, що досить швидко почала самостійно
          збирати власні проєкти і вчитись як робити круто. Я не боюсь помилок,
          бо це дає змогу краще розуміти, як усе працює.
        </p>
      ),
    },
    {
      title: "The Anchor",
      color: "#3B82F6", // Синій
      description: (
        <p>
          Для мене дуже важливо навіть у складних ситуаціях{" "}
          <span className="text-white font-medium">
            не зациклюватись на негативі, а шукати рішення і рухатись далі
          </span>
          . Думаю, це одна з моїх сильних сторін не тільки для роботи в команді,
          а й для підтримки її атмосфери загалом. Навіть коли щось йде не за
          планом, я стараюсь не панікувати, а навпаки - швидко зібратись,
          подивитись на проблему більш раціонально і допомогти іншим не втрачати
          мотивацію.
        </p>
      ),
    },
    {
      title: "100% Reliable",
      color: "#10B981", // Смарагдовий
      description: (
        <p>
          Я відповідально ставлюсь до всього, за що беруся, і не боюсь брати на
          себе відповідальність за рішення чи задачі. Якщо щось йде не так, я{" "}
          <span className="text-white font-medium">
            не шукаю винних і не перекладаю це на інших
          </span>
          , а стараюсь швидко розібратися. Для мене важливо доводити задачі до
          кінця і бути людиною, на яку команда зможе покластись у будь-який
          момент!
        </p>
      ),
    },
    {
      title: "Vibe Maker",
      color: "#F59E0B", // Золотий
      description: (
        <p>
          Свято дотримуюсь правила{" "}
          <span className="text-white font-bold drop-shadow-[0_0_5px_rgba(245,158,11,0.8)]">
            WORK HARD, PARTY HARDER
          </span>
          , тому для мене btw - це про людей, неймовірні спогади, пригоди і
          спільний вайб, який робить весь цей двіж незабутнім. Мені дуже
          хочеться бути частиною кортіми, з якою можна створити розйобний івент
          і проживати весь цей досвід разом: збори і легендарні афтери і
          афтерафтери, про які потім ще довго всі будуть згадувати і робити
          вайбові відосики!
        </p>
      ),
    },
  ];

  return (
    <section
      id="why-me"
      className="relative z-10 py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[#05020A] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-[12vw] lg:text-[7vw] leading-[0.85] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-euphoria-purple via-euphoria-pink to-white drop-shadow-lg mb-2">
            WHY <br className="hidden lg:block" /> ME
          </h2>
          <p className="text-euphoria-pink tracking-[0.3em] uppercase text-sm md:text-base font-semibold border-l-2 border-euphoria-pink pl-4 ml-1 inline-block lg:block">
            Elevating the core team
          </p>
        </motion.div>

        {/* СІТКА З КАРТКАМИ */}
        <motion.div
          animate={
            isAnchored
              ? { x: [-15, 15, -10, 10, -5, 5, 0], y: [10, -10, 5, -5, 0] }
              : {}
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-wrap justify-center gap-6 lg:gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <TiltCard
                {...card}
                isAnchored={isAnchored}
                onAnchorClick={handleAnchorDrop}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe;
