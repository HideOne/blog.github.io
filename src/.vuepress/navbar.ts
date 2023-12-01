import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: ["数据库/数据库", "虚拟机安装/centos7安装"],
  },
]);
