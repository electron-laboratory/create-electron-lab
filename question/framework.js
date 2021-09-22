// 筛选开发框架的问题
export default [{
    type: 'list',
    message: 'please choose a development framework:',
    name: 'framework',
    choices: [
        "No need (normal H5)",
        "React",
        "Vue",
    ],
    filter: function (val) {
        return val.toLowerCase();
    }
}]