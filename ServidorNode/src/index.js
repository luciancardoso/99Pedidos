import express from "express";
import cors from "cors";
import basicAuth from "express-basic-auth";

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