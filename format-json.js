module.exports = async function (ctx, next) {
    //格式化消息
    await next();
    const body = ctx.response.body;
    ctx.body = {
        code: 0,
        msg: "",
        data: body
    }
}