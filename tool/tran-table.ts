// import * as fs from "fs";
const fs = require("fs");
var text = fs.readFileSync("./md.text").toString() as String;
// 删除空行
text = text.replace(/^\s*\n/g, "");
text = text.replace(/\</gi, "< ");
text = text.replace(/\>/gi, " >");
text = text.replace(/\|/gi, " ");
text = text.replace(/	/gi, " | ");
var lines = text.split("\r\n");
console.log(lines.length);
var newText = "";
const count = lines[0].split("|")?.length + 1;
lines.forEach((line: string, idx: number) => {
  line = "|" + line + "|\n";
  newText += line;
  if (idx === 0) {
    let fenLine: string[] = [];
    fenLine.length = count;
    fenLine.fill("|");
    let tmpline = fenLine.join("-");
    newText += tmpline + "\n";
  }
});
fs.writeFileSync("./md.text", newText);
