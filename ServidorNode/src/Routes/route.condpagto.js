import { Router } from "express";
import controllerCondPagto from "../Controllers/controller.condpagto.js";

const routeCondPagto = Router();

routeCondPagto.get("/condpagto", controllerCondPagto.Listar);

export default routeCondPagto;