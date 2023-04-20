import { db } from "../Config/database.js";

const Listar = (callback) => {
    
    let filtro = [];
    let ssql = "select id_cond_pagto, cond_pagto from tab_cond_pagto order by cond_pagto";
    // ssql += "from tab_cond_pagto ";
    // ssql += "order by cond_pagto ";

    db.query(ssql, filtro, function(err, result){
        if(err){
            callback(err, []);
        } else {
            callback(undefined, result);
        }
    });
}

export default { Listar };