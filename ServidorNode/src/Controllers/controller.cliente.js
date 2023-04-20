import modelCliente from "../Models/model.cliente.js";

const Listar = (req, res) => {

    // http://localhost:3001/clientes?busca=Heber
    modelCliente.Listar(req.query.busca, (err, result) =>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
}

export default { Listar };