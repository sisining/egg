'use strict';

const Controller = require('egg').Controller;
const path=require('path')
class UploadController extends Controller {
    async upload() {
        const {ctx} = this
        // 拿到请求里的file文件,如果是多文件就对数组进行遍历
        let file = ctx.request.files[0]
        // 设置文件的存储地址
        const target = path.join(path.resolve(), `/upload/${file.filename}`)
        // 读取文件的内容
        let path = fs.readFileSync(file.filepath)
        // 写入文件
        fs.writeFileSync(target, path)
    }
}

module.exports = UploadController
