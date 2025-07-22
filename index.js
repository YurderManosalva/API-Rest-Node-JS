const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./src/routes/userRoutes");

const app = express();
const port = 3002;

app.use(bodyParser.json());

//Rutas
app.use("/api/users", userRouter);

//iniciar el servidor
app.listen(port, () => {
  console.log("servidor inicado en http://localhost:" + port);
});
