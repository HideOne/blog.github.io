import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客",
  description: "博客",
  theme,
  markdown: {
    headers: {
      level: [2, 3, 4],
    },
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
