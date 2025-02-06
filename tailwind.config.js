/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"], // 適切にパスを指定
  theme: {
    extend: {
      colors: {
        primary: "#YourPrimaryColor", // プライマリカラーを指定
        secondary: "#YourSecondaryColor", // セカンダリカラーを指定
      },
      fontFamily: {
        sans: ["YourFontFamily", "sans-serif"], // カスタムフォントを設定
      },
      spacing: {
        18: "4.5rem", // 必要に応じてスペーシングを追加
      },
    },
  },
  plugins: [],
};
