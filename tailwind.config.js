/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tekhelet: "#1c1c1e",
        tekheletSecond: "#2c2c2e",
        gray: "#8e8e93",
        olivine: "#4cd964",
        white: "#f5f5f7",
        green: "#00b300",
        red: "#ff0000",
        yellow: "#ffff00",
        blue: "#0000ff",
        orange: "#ffa500",
        purple: "#3D1E6B",
        pink: "#ffc0cb",
        brown: "#a52a2a",
        lightblue: "#add8e6",
        lightgreen: "#90ee90",
        lightgray: "#d3d3d3",
        lightyellow: "#ffffe0",
        lightpurple: "#800080",
        lightred: "#ff0000",
        lightorange: "#ff8c00",
        lightcyan: "#00ffff",
        lightpink: "#ffc0cb",
        lightbrown: "#a52a2a",
        "gray-800": "#2d2d2d", // exemplo de cor personalizada
        "gray-700": "#3a3a3a", // exemplo de cor personalizada
        "gray-100": "#f7f7f7", // Claro, para fundos mais suaves
        "gray-200": "#e0e0e0", // Claro, para bordas e ícones
        "gray-300": "#c3c3c3", // Médio, para elementos secundários
        "gray-400": "#9e9e9e", // Médio, para textos secundários
        "gray-500": "#757575", // Médio escuro
        "gray-600": "#616161", // Escuro

        "gray-900": "#121212", // Preto para o fundo principal
        "blue-500": "#1e3a8a", // Azul vibrante (pode ser usado em botões ou links)
        "blue-600": "#1d4ed8", // Azul mais claro
      },
      boxShadow: {
        md: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra moderada
        lg: "0 10px 15px rgba(0, 0, 0, 0.15)", // Sombra mais intensa
        xl: "0 20px 30px rgba(0, 0, 0, 0.2)", // Sombra extra
      },
      borderColor: {
        "gray-600": "#616161",
        "gray-500": "#757575",
        "gray-400": "#9e9e9e",
      },
    },
  },
  plugins: [],
};
