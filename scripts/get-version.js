const { version } = require("./../package.json");

const replaceDotsByHyphen = version.replace(/\./gi, "-");
const splitVersion = replaceDotsByHyphen.split("");
const getMajorAndMinorVersion = splitVersion
  .slice(0, splitVersion.length - 2)
  .join("");

console.log(`v${getMajorAndMinorVersion}`);
