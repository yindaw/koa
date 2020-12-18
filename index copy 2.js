const Koa = require("koa");
const app = new Koa();

app.use(require("./format-json"));

app.use(function (ctx, next) {
    ctx.body = {
        loginId: "dengge",
        name: "邓哥"
    };
    next();
});



app.listen(9527, () => {
    console.log("server listening");
});