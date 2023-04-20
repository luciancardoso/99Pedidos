import { Router } from "express";
import controllerProduto from "../Controllers/controller.produto.js";

const routeProduto = Router();

routeProduto.get("/produtos", controllerProduto.Listar);

export default routeProduto;