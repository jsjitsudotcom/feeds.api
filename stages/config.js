const { version } = require("./../package.json");

const replaceDotsByHyphen = version.replace(/\./gi, "-");
const splitVersion = replaceDotsByHyphen.split("");
const getMajorAndMinorVersion = splitVersion.slice(0, 1).join("");

module.exports = () => ({
  version: `v${getMajorAndMinorVersion}`
});
