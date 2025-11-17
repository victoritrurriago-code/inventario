import express from "express";


/* asignamos app*/
const app = express();

/*setear a un puerto a mi web server */

app.set("port",5000)

/*hacemos disponible mi server app */
export default app;