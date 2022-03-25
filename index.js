const dotenv = require("dotenv");
dotenv.config();
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const app = jsonServer.create();
const router = jsonServer.router("./db/data.json");

// Vincular la base de datos del enrutador a la aplicación
app.db = router.db;
// Debe aplicar el middleware de autenticación antes que el enrutador
app.use("*", cors());
app.use(auth);
app.use(router);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Json Server is running on ${port}`);
});
