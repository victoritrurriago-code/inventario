import { Router } from "express";
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";

const router = Router();

/*metodo get */
router.get("/", categoriaController.getCategorias)

/*hacemos disponible a router */
export default router;