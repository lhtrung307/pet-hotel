module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    function ({ addComponents }) {
      const borderColor = {
        ".border-t-transparent": {
          borderTopColor: "transparent !important"
        }
      };
      addComponents(borderColor);
    }
  ]
};
