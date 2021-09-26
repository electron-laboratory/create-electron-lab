// 基本信息采集，version、name、author、description等等的问题维护
module.exports =  [{
    type: 'input',
    message: 'project name',
    name: 'name',
    default: "root_user" // 默认名为root_user
}, {
    type: 'input',
    message: 'version',
    name: 'version',
    default: "1.0.0",
    validate: function (val) {
        if (/^\d+\.\d+\.\d+$/.test(val)) { // 正则校验版本号
            return true;
        }
        return "please entry the correct version （just like ： x.y.z）";
    }
}]