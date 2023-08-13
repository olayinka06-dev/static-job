postcss.config.js;
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

tailwind.config.js;
module.exports = {
  // ...
  purge: ["./src/Components/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // ...
};
