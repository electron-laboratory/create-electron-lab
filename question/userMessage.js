// 基本信息采集，version、name、author、description等等的问题维护
const fs = require("fs");

// 仓库默认名字
const defaultDirName = require("../constant/index.js").REP_DIR_NAME;
// 默认版本号为1.0.0
const defaultVersion = require("../constant/index.js").DEFAULT_VERSION;

module.exports = [
  {
    type: "input",
    message: "project name",
    name: "name",
    default: defaultDirName,
    validate: function (val) {
      // check if directory exists
      if (fs.existsSync(val)) {
        return "this Directory is already exists! please input another name!"
      } else {
        return true
      }
    },
  },
  {
    type: "input",
    message: "version",
    name: "version",
    default: defaultVersion,
    validate: function (val) {
      if (/^\d+\.\d+\.\d+$/.test(val)) {
        // 正则校验版本号
        return true;
      }
      return "please entry the correct version （just like ： x.y.z）";
    },
  },
];
