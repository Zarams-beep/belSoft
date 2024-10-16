// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Include HTML and all relevant files
  theme: {
    extend: {
      screens: {
        'max-s': { max: '348px' },
        'max-ss': { max: '450px' },
        'max-sss': { max: '600px' },
        'max-sm': { max: '639px' },
        'max-smm': { max: '704px' },
        'max-md': { max: '767px' },
        'max-mdd': { max: '800px' },
        'max-mddd': { max: '900px' },
        'max-lg': { max: '1023px' },
        'max-lllg': { max: '1039px' },
        'max-llg': { max: '1119px' },
        'max-lgg': { max: '1170px' },
        'max-xl': { max: '1279px' },
        'max-2xl': { max: '1535px'  },
      },
    },
  },
  plugins: [],
};
