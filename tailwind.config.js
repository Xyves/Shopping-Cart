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
        main: "rgb(8, 48, 69)",
        cardBorder: "#454a4c",
        footer: "#05060a",
        itemBorder: "#454a4c",
        item: "rgb(189, 160, 104)",
      },
    },
    borderWidth: {
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    borderColor: {
      item: "rgb(189, 160, 104)",
    },
  },
  plugins: [],
};
