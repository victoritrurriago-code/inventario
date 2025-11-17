import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js"


/* asignamos app*/
const app = express();

/*setear a un puerto a mi web server */

app.set("port",5000)

/*routes */
app.use("/api/categorias",categoriaRoutes)

/*hacemos disponible mi server app */
export default app;