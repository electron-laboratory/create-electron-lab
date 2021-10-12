// 筛选开发框架的选择

module.exports = [{
    type: 'list',
    message: 'please choose a development framework:',
    name: 'framework',
    choices: [
        "React",
        "Vue",
        "h5",   
    ],
    filter: function (val) {
        return val.toLowerCase();
    }
}]