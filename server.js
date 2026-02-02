const jsonServer = require("json-server");
const auth = require("json-server-auth"); // 引入 auth
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// 必備！將 db 綁定到 server，這樣 auth 才知道要去哪裡找 user
server.db = router.db;

server.use(middlewares);

// 關鍵點：在 router 之前使用 auth
server.use(auth);

server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server with Auth is running on port ${port}`);
});
