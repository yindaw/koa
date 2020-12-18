const Koa = require("koa");
const app = new Koa();

app.use(require("./format-json"));

app.use(function (ctx, next) {
    const user = {
        loginId: "dengge",
        name: "邓哥"
    };
    app.emit("abc", 123);
    ctx.state.user = user;
    next();
});


app.use(function (ctx, next) {
    console.log(ctx.status);
    ctx.body = {
        loginId: "dengge",
        name: "邓哥"
    };
    next();
});


app.on("abc", function (data) {
  console.log(data);
})



app.listen(9527, () => {
    console.log("server listening");
});