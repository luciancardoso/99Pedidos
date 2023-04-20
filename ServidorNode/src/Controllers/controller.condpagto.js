import modelCondPagto from "../Models/model.condpagto.js";

const Listar = (req, res) => {

    modelCondPagto.Listar((err, result) =>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
}

export default { Listar };