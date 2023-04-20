import { db } from "../Config/database.js";

const Listar = (busca, callback) => {
    
    let filtro = [];
    let ssql = "select id_cliente, nome from tab_cliente ";

    if(busca){
        ssql += "where nome like ?";
        filtro.push('%' + busca + '%');
    }

    db.query(ssql, filtro, function(err, result){
        if(err){
            callback(err, []);
        } else {
            callback(undefined, result);
        }
    });
}

export default { Listar };