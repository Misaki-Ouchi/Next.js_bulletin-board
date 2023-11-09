/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  // ↓リセットしたくないなら追加
  // plugins: [],
  // corePlugins: {
  //   preflight: false
  // }
}
