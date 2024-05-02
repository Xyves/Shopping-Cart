/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(45deg, hsla(176, 61%, 87%, 1) 0%, hsla(0, 0%, 100%, 1) 87%, hsla(0, 0%, 94%, 1) 95%);",
      },
      colors: {
        main: "#FFEAE3",
        cardBorder: "#454a4c",
        footer: "#05006a",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  plugins: [],
};
