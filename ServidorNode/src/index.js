import express from "express";
import cors from "cors";
import basicAuth from "express-basic-auth";
// import { db } from "./Config/database.js";

import routeCliente from "./Routes/route.cliente.js";
import routeProduto from "./Routes/route.produto.js";
import routeCondPagto from "./Routes/route.condpagto.js";
import routeDashboard from "./Routes/route.dashboard.js";
import routePedido from "./Routes/route.pedido.js";

const app = express();

// Middleware JSON
app.use(express.json());

// Middleware CORS
app.use(cors());

// Middleware Basic Auth
app.use(basicAuth({
    authorizer: function(usuario, senha){
        return basicAuth.safeCompare(usuario, '99coders') && basicAuth.safeCompare(senha, '112233');
    }
}));

// app.get("/pedidos", (req, res) => {
//     // res.status(200).send("OK")

//     let ssql = "select * from tab_pedido";

//     db.query(ssql, function(err, result) {
//         if(err){
//             return res.status(500).send(err);
//         } else {
//             return res.status(200).send(result);
//         }
//     });
// });

// Registrando as rotas na aplicação
app.use(routeCliente);
app.use(routeProduto);
app.use(routeCondPagto);
app.use(routeDashboard);
app.use(routePedido);

app.listen(3001, function(){
    console.log("Servidor rodando na porta : 3001")  
}) 