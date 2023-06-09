import Navbar from "../../components/navbar/navbar"
import { Link, useNavigate, useParams } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

import "./pedido-editar.css"
import { useEffect, useState } from "react"
import moment from "moment/moment"

const PedidoEditar = () => {

    const { id_pedido } = useParams();
    const navigate = useNavigate();

    const [id_cliente, setIdCliente] = useState(0)
    const [dt_pedido, setDtPedido] = useState("")
    const [id_cond_pagto, setIdCondPagto] = useState(0)
    const [dt_entrega, setDtEntrega] = useState("")
    const [obs, setObs] = useState("")
    const [produtos, setProdutos] = useState([]) 
    const [vl_total, setVlTotal] = useState(0)
    const [msg, setMsg] = useState("")

    const [lista_clientes, setListaClientes] = useState([])
    const [cond_pagtos, setCondPagtos] = useState([]) 
    const [lista_produtos, setListaProdutos] = useState([]) 

    // const total_pedido = 5000;

    const AddProduto = () => {
        const prod = {id_item: uuidv4(), id_produto: 0, descricao: "", qtd: 1, vl_unit: 0, vl_total: 0}

        setProdutos([...produtos, prod])
    }

    const DeleteProduto = (id_item) => {
        const prod = []

        produtos.map((p) => {
            if(p.id_item !== id_item){
                prod.push(p)
            }
        })

        setProdutos(prod)
    }

    const CarregarDadosPedido = (id_ped) => {
        if(id_ped > 0){
            //Editar...
            setIdCliente(1)
            setDtPedido("2023-10-10")
            setIdCondPagto(2)
            setDtEntrega("2023-10-30")
            setObs("Teste")
            setProdutos(
            [
                {id_item: 1, id_produto: 1, descricao: "MONITOR DELL", qtd: 2, vl_unit: 510, vl_total: 1020},
                {id_item: 2, id_produto: 2, descricao: "HD SEAGATE 2TB", qtd: 1, vl_unit: 300, vl_total: 300}
            ])
        } else {
            //Inserir...
            setIdCliente(0)
            setDtPedido(moment().format("YYYY-MM-DD"))
            setIdCondPagto(0)
            setDtEntrega(moment().format("YYYY-MM-DD"))
            setObs("")
            setProdutos([])
        }
    }

    const PesquisarClientes = () => {
        // Fazer um Get no servidor...
        setListaClientes(
        [
            {id_cliente: 1, nome: "99 Coders"},
            {id_cliente: 2, nome: "Mercado Central"}
        ])
    }
    
    const PesquisarProdutos = () => {
        // Fazer um Get no servidor...
        setListaProdutos(
        [
            {id_item: 1, id_produto: 1, descricao: "MONITOR DELL"},
            {id_item: 2, id_produto: 2, descricao: "HD SEAGATE 2TB"},
            {id_item: 3, id_produto: 3, descricao: "TECLADO MECÂNICO REDRAGON"}
        ])
    }

    const PesquisarCondPagtos = () => {
        // Fazer um Get no servidor...
        setCondPagtos(
        [
            {id_cond_pagto: 1, cond_pagto: "30 Dias"},
            {id_cond_pagto: 2, cond_pagto: "45 Dias"}
        ])
    }

    const handleDescricaoChange = (id_produto, descricao, index) => {
        const prod = [...produtos]

        prod[index].id_produto = id_produto
        prod[index].descricao = descricao

        setProdutos(prod)
    }

    const handleQtdChange = (qtd, index) => {
        const prod = [...produtos]

        prod[index].qtd = qtd
        prod[index].vl_total = qtd * prod[index].vl_unit

        setProdutos(prod)
    }

    const handleVlUnitChange = (vl, index) => {
        const prod = [...produtos]

        prod[index].vl_unit = vl
        prod[index].vl_total = prod[index].qtd * vl

        setProdutos(prod)
    }

    const CalculaTotal = () => {
        let total = 0

        produtos.map((prod) => {
            total = total + prod.vl_total;
        })

        setVlTotal(total)
    }

    const SalvarDados = () => {
        const dados_pedido = {
            id_cliente,
            id_cond_pagto,
            id_usuario: 0,
            dt_pedido,
            dt_entrega,
            vl_total,
            itens: produtos
        };

        // console.log(JSON.stringify(dados_pedido));
        // Fazer um POST / PUT para o servidor...
        navigate("/pedidos")
    }

    useEffect(() => {
        PesquisarClientes();
        PesquisarProdutos();
        PesquisarCondPagtos();
        CarregarDadosPedido(id_pedido);
    }, [])

    useEffect(() => {
        CalculaTotal();
    }, [produtos])

    return(
        <>
            <Navbar />
            
            <div className="container-fluid mt-page form-pedido-editar">

                <div className="row col-lg-6 offset-lg-3">

                    <div className="col-12 mb-4 mt-2">
                        <h2 className="d-inline">
                            {
                                id_pedido > 0 ? "Editar Pedido " + id_pedido : "Novo Pedido"
                            }
                        </h2>
                    </div>

                    <div className="col-md-8 mb-4">
                        <label htmlFor="InputNome" className="form-label">Cliente</label>
                        <div className="form-control mb-2">
                            <select name="clientes" id="clientes" onChange={(e) => setIdCliente(e.target.value)} value={id_cliente}>
                                <option value="0">Selecione um Cliente</option>
                                {lista_clientes.map(c => {
                                    return(
                                        <option key={c.id_cliente} value={c.id_cliente}>{c.nome}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <label htmlFor="InputEmail" className="form-label">Data Venda</label>
                        <input type="date" onChange={(e) => setDtPedido(e.target.value)} value={dt_pedido} className="form-control" id="InputEmail" aria-describedby="email" disabled />
                    </div>

                    <div className="col-md-8 mb-4">
                        <label htmlFor="InputNome" className="form-label">Cond. Pagamento</label>
                        <div className="form-control mb-2">
                            <select name="cond_pagto" id="cond_pagto" onChange={(e) => setIdCondPagto(e.target.value)} value={id_cond_pagto}>
                            <option value={0}>Selecione a cond. pagto</option>
                                {cond_pagtos.map(c => {
                                    return(
                                        <option key={c.id_cond_pagto} value={c.id_cond_pagto}>{c.cond_pagto}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5">
                        <label htmlFor="InputEmail" className="form-label">Previsão Entrega</label>
                        <input type="date" onChange={(e) => setDtEntrega(e.target.value)} value={dt_entrega} className="form-control" id="InputEmail" aria-describedby="email" />
                    </div>

                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Produto</th>
                                    <th scope="col">Qtd</th>
                                    <th scope="col">Valor Unit.</th>
                                    <th scope="col">Valor Total</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtos.map((produto, index) => {
                                    return(
                                        <tr key={produto.id_item}>
                                            <td>
                                                <div className="form-control">
                                                    <select name="produtos" id="produtos" value={produto.id_produto} onChange={(e) => handleDescricaoChange(e.target.value, e.target[e.target.selectedIndex].text, index)}>
                                                        <option value="0">Selecione Produto</option>
                                                        {lista_produtos.map(p => {
                                                            return(
                                                                <option key={p.id_produto} value={p.id_produto}>{p.descricao}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </td>
                                            <td><input type="text" onChange={(e) => handleQtdChange(e.target.value, index)} value={produto.qtd} className="form-control" /></td>
                                            <td><input type="text" onChange={(e) => handleVlUnitChange(e.target.value, index)} value={produto.vl_unit} className="form-control" /></td>
                                            <td><input type="text" value={produto.vl_total} className="form-control" disabled /></td>
                                            <td><button type="button" onClick={(e) => DeleteProduto(produto.id_item)} className="btn btn-danger"><i className="bi bi-trash3-fill"></i></button></td>
                                        </tr>
                                    )
                                }
                                )}
                            </tbody>
                        </table>

                        {
                            produtos.length === 0 ? <div className="no-item">Nenhum produto cadastrado</div> : null
                        }

                    </div>

                    <div className="col-md-6">
                        <button type="button" className="btn btn-sm btn-primary" onClick={AddProduto}>Adicionar Produto</button>
                    </div>

                    <div className="col-md-6 text-end mb-5">
                        <span className="me-4">Total Pedido:</span>
                        <b>
                            {new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(vl_total)}
                        </b>
                    </div>

                    <div className="col-12">
                        <label htmlFor="InputNome" className="form-label">Obs</label>
                        <textarea type="text" onChange={(e) => setObs(e.target.text)} value={obs} className="form-control" />
                    </div>

                    <div className="col-12 mt-3">
                        {
                            msg.length > 0 ? <div className="alert alert-danger mt-4 text-center">{msg}</div> : null
                        }
                        <div>
                            <div className="d-flex justify-content-end">
                                <Link to="/pedidos" type="button" className="btn btn-outline-primary me-4">Cancelar</Link>
                                <button type="button" className="btn btn-success" onClick={SalvarDados}>Salvar Dados</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default PedidoEditar