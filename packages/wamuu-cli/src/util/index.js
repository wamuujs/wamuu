const path = require("path");

function getRootPath() {
  return path.resolve(__dirname, "../../");
}

function getPkgVersion() {
  return require(path.join(getRootPath(), "package.json")).version;
}

module.exports = {
  getPkgVersion,
  getRootPath,
};
