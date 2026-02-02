const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(cors());
server.use(middlewares);
server.use(router);

// Render 會自動分配 PORT，若無則預設 3000
const port = process.env.PORT || 3000;

// 建議加上 '0.0.0.0'，確保 Render 的對外連線穩定
server.listen(port, "0.0.0.0", () => {
  console.log(`JSON Server is running on port ${port}`);
});
