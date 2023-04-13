import Grafico from "../../components/grafico/grafico"
import Navbar from "../../components/navbar/navbar"

const Dashboard = () => {

    const dados_clientes = [
        ["Cliente", "Vendas"],
        ["Microsoft", 5200],
        ["IBM", 4900],
        ["Apple", 4200],
        ["Facebook", 3210],
        ["Google", 2140]
    ];

    const dados_vendas = [
        ["Mês", "Vendas"],
        ["1", 5200],
        ["2", 4900],
        ["3", 7200],
        ["4", 3210],
        ["5", 5362],
        ["6", 6200],
        ["7", 6852],
        ["8", 4210],
        ["9", 5630],
        ["10", 8452],
        ["11", 4250],
        ["12", 6325]
    ];

    const dados_produtos = [
        ["Produto", "Vendas"],
        ["Teclado", 5200],
        ["Monitor", 4900],
        ["HD", 4200],
        ["Fone", 3210],
        ["Webcam", 2140]
    ];

    const dados_cidades = [
        ["Cidade", "Vendas"],
        ["São Paulo", 5200],
        ["Rio de Janeiro", 4900],
        ["Campinas", 4200],
        ["Curitiba", 3210],
        ["Bauru", 2140]
    ];

    return(
        <>
            <Navbar />

            <div className="container-fluid mt-page">
                
                <div className="ms-4 d-flex justify-content-between">
                    <h2>Dashboard</h2>
                    <button className="btn btn-primary me-4"><i className="fas fa-plus"></i>Atualizar</button>
                </div>

                <div className="row">

                    <div className="col-md-6 p-5">
                        <Grafico 
                            title="Venda por clientes (top 5)"
                            chartType="Bar"
                            dados={dados_clientes} 
                        />
                    </div>

                    <div className="col-md-6 p-5">
                        <Grafico 
                            title="Vendas anual"
                            chartType="Line"
                            dados={dados_vendas} 
                        />
                    </div>

                    <div className="col-md-6 p-5">
                        <Grafico 
                            title="Vendas por Produtos (top 5)"
                            chartType="PieChart"
                            dados={dados_produtos} 
                        />
                    </div>

                    <div className="col-md-6 p-5">
                        <Grafico 
                            title="Venda por cidade"
                            chartType="BarChart"
                            dados={dados_cidades} 
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard