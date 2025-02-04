import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'v-gray-500': '#737994',
        'v-blue-500': '#8CAAEE',
        'v-blue-900': '#303446',
      },
      width: {
        120: '30rem',
        125: '31.25rem',
      },
      height: {
        125: '31,25rem'
      },
    },
  },
  plugins: [],
};
