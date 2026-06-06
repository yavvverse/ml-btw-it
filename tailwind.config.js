/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        euphoria: {
          dark: "#0B0914", // Глибокий чорно-фіолетовий фон
          purple: "#8B5CF6", // Яскравий фіолетовий
          pink: "#EC4899", // Неоновий рожевий
          blue: "#3B82F6", // Електрик синій
        },
      },
      boxShadow: {
        "euphoria-glow":
          "0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(236, 72, 153, 0.2)",
        "euphoria-strong":
          "0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(236, 72, 153, 0.4)",
      },
    },
  },
  plugins: [],
};
