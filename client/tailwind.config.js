module.exports = {
  purge: [],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Futura", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      serif: ["Fs", "Georgia", "Cambria", "serif"],
      mono: ["SFMono-Regular", "Menlo"],
      display: ["Oswald"],
      body: ["Futura", "Open Sans", "sans-serif"],
    },
  },
  variants: {},
  plugins: [
    // ...
    require("tailwindcss"),
    require("autoprefixer"),
    // ...
  ],
};
