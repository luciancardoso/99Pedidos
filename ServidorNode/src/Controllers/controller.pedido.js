import modelPedido from "../Models/model.pedido.js"

const Listar = (req, res) => {

    // Query Params
    // GET -> http://localhost:3001/pedidos?status=A

    modelPedido.Listar(req.query.status, function(err, result) {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).json(result)
        }
    });
}

const ListarId = (req, res) => {

    // URI Params
    // GET -> http://localhost:3001/pedidos/12345

    modelPedido.ListarId(req.params.id_pedido, function(err, result){
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(result)
        }
    });
}

const InserirPedido = (req, res) => {
    modelPedido.InserirPedido(req.body, function(err, result){
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const EditarPedido = (req, res) => {
    modelPedido.EditarPedido(req.params.id_pedido, req.body, function(err, result){
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const ExcluirPedido = (req, res) => {
    modelPedido.ExcluirPedido(req.params.id_pedido, function(err, result){
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const StatusPedido = (req, res) => {
    modelPedido.StatusPedido(req.params.id_pedido, req.body.status, function(err, result){
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).json(result)
        }
    })
}

export default {
    Listar,
    ListarId,
    InserirPedido,
    EditarPedido,
    ExcluirPedido,
    StatusPedido
}