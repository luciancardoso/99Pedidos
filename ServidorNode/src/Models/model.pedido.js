import { db, executeQuery } from "../Config/database";

const Listar = (status, calback) => {

    let filtro = []
    let ssql = "select p.id_pedido, c.nome as cliente, p.dt_pedido, p.status, s.descricao as status_descricao, p.vl_total ";
    ssql += "from tab_pedido p ";
    ssql += "join tab_cliente c on (c.id_cliente = p.id_cliente) ";
    ssql += "join tab_pedido_status s on (s.status = p.status) ";
    // ssql += "where p.id_pedido > 0 ";

    if(status){
        ssql += "where status = ? ";
        // ssql += "and status = ? ";
        filtro.push(status);
    }

    ssql += "order by p.id_pedido desc ";

    db.query(ssql, filtro, function(err, result) {
        if(err) {
            calback(err, []);
        } else {
            calback(undefined, result);
        }
    });

}

const ListarId = (id_pedido, calback) => {
    let filtro = []
    let ssql = "select p.id_pedido, p.id_cliente, c.nome as cliente, p.dt_pedido, p.dt_entrega, ";
    ssql += "p.id_cond_pagto, n.cond_pagto, p.status, s.descricao as status_descricao, p.vl_total, p.obs ";
    ssql += "from tab_pedido p ";
    ssql += "join tab_cliente c on (c.id_cliente = p.id_cliente) ";
    ssql += "join tab_pedido_status s on (s.status = p.status) ";
    ssql += "join tab_cond_pagto n on (n.id_cond_pagto = p.id_cond_pagto) ";
    ssql += "where p.id_pedido = ? ";

    if(id_pedido){
        filtro.push(id_pedido)
    } else {
        filtro.push(0)
    }

    db.query(ssql, filtro, function(err, result) {
        if(err){
            calback(err, [])
        } else {

            let jsonPedido = result[0];

            ssql = "select i.id_item, i.id_produto, p.descricao, i.qtd, i.vl_unit, i.vl_total "
            ssql += "from tab_pedido_item i ";
            ssql += "join tab_produto p on (p.id_produto = i.id_produto) "
            ssql += "where i.id_pedido = ? ";
            ssql += "order by i.id_item "

            db.query(ssql, [id_pedido], function(err, result){
                if(err){
                    calback(err, [])
                } else {
                    jsonPedido["itens"] = result

                    calback(undefined, jsonPedido)
                }
            })

        }
    })

}

export default { Listar, ListarId }