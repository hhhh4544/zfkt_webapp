//珠峰课堂webapp服务端
let Koa = require('koa');
let app = new Koa();
let Router = require('koa-router');
let router = new Router();
let cors = require('koa-cors');
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
//获取轮播图
let sliders = require('./slider');
router.get('/api/sliders',(ctx)=>{
    ctx.body = sliders;
});
//获取课程列表接口
let lessonList = require('./lessonList');
router.get('/api/lessons/:type/:offset/:limit',ctx=>{
    ctx.body = lessonList;
});
app.listen(3000);