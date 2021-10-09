const path = require('path');
const ora = require('ora');
const clone = require('git-clone');
const fs = require('fs');

const frameworkType = require('./constant/index.js').frameworkType;

const spinner = ora('Loading~~');

module.exports = (framework = 'react', version = '1.0.0', projectName = 'root_name') => {

  spinner.start();

  console.log(frameworkType[framework]);

  const repository = frameworkType[framework];

  if (repository) {
    spinner.color = 'green';
    spinner.text = 'now downloading, please wait! ';

    // repository模板地址  projectName项目名称
    clone(repository, projectName, function (err) {
      err ? spinner.warn('模板加载错误') : (spinner.text = '模板加载结束');
      if (err !== 'Error') {
        editFile({
          version,
          projectName,
        });
      } else {
        spinner.text = 'download success ! ';
        spinner.succeed();
      }
    });
  } else {
      spinner.color = 'cyan'
      spinner.text = 'Now we dont have other frame template, wait for furthur, sry'
      spinner.succeed()
  }
};

const editFile = function ({ version, projectName }) {
  // 读取文件
  fs.readFile(`${process.cwd()}/${projectName}/package.json`, (err, data) => {
    if (err) throw err;
    // 获取json数据并修改项目名称和版本号
    let _data = JSON.parse(data.toString());
    _data.name = projectName;
    _data.version = version;
    let str = JSON.stringify(_data, null, 4);
    // 写入文件
    fs.writeFile(`${process.cwd()}/${projectName}/package.json`, str, function (err) {
      if (err) throw err;
    });
    spinner.succeed();
  });
};
