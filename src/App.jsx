import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import EuphoriaStars from "./components/EuphoriaStars";
import Hero from "./components/Hero";
import WhoAmI from "./components/WhoAmI";
import WhyMe from "./components/WhyMe";
import WhyBTW from "./components/WhyBTW";
import Skills from "./components/Skills";
import Answers from "./components/Answers";
import FinalCTA from "./components/FinalCTA";
function App() {
  return (
    // ВИПРАВЛЕННЯ: Додано overflow-x-hidden, w-full та max-w-[100vw]
    // Це жорстко фіксує ширину сайту по ширині екрану і не дає йому "їздити" в боки
    <div className="bg-[#0B0914] min-h-screen w-full max-w-[100vw] text-white font-sans selection:bg-euphoria-pink selection:text-white relative overflow-x-hidden flex flex-col">
      <Navbar />
      <EuphoriaStars />

      {/* ФОН: Ейфорія */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -80, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[10%] w-[50vw] h-[50vw] bg-euphoria-purple/20 blur-[150px] rounded-full mix-blend-screen"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[5%] w-[45vw] h-[45vw] bg-euphoria-pink/15 blur-[180px] rounded-full mix-blend-screen"
        />
      </div>

      {/* Контент сайту обгорнутий у main, щоб тримати структуру по центру */}
      <main className="w-full flex-grow flex flex-col">
        <Hero />
        <WhoAmI />
        <WhyMe />
        <WhyBTW />
        <Skills />
        <Answers />
        <FinalCTA />
      </main>
    </div>
  );
}

export default App;
