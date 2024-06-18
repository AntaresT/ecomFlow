import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      fontSize: {
        "28": "28px"
      },
      borderWidth: {
        "1": "1px"
      },
      borderRadius: {
        "4": "4px"
      },
      colors: {
        "offWhite": "#F3F4F6",
        "orange": "#FF7600",
        "gray": "#6B7280"
      },
      padding: {
        "74": "74.5px",
        "104": "104px"
      },
      screens: {
        "laptop-lg": "1366px",
        "desktop": "1440px",
      },
      height: {
        "40": "40px",
        "588": "588px"
      },
      maxWidth: {
        "419": "419px",
      },
      width: {
        "105": "105px",
        "226": "226px",
        "290": "290px",
        "400": "400px"
      }
    },
  },
  plugins: [],
};
export default config;
