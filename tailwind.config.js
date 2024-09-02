/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0060e3",
      },
      keyframes: {
        moveTopRight: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(10%, -10%)" }, // Adjust this value as needed
        },
        moveBottomLeft: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-10%, 10%)" }, // Adjust this value as needed
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "20%": { transform: "translate(20px, -30px) scale(1.1)" },
          "40%": { transform: "translate(40px, 10px) scale(1.2)" },
          "60%": { transform: "translate(20px, -18px) scale(1.1)" },
          "80%": { transform: "translate(-30px, 20px) scale(0.9)" },
        },
        blob2: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "30%": { transform: "translate(20px, -30px) scale(1.1)" },
          "50%": { transform: "translate(15px, 35px) scale(1.2)" },
          "70%": { transform: "translate(40px, -10px) scale(1.2)" },
          "90%": { transform: "translate(20px, 18px) scale(1)" },
          "95%": { transform: "translate(-40px, 10px) scale(0.8)" },
        },
      },
      animation: {
        "move-top-right": "moveTopRight 10s ease-in-out infinite",
        "move-bottom-left": "moveBottomLeft 10s ease-in-out infinite",
        blob: "blob 10s infinite ease-in-out",
        blob2: "blob2 10s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
