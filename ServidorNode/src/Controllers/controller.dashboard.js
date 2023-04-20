import modelDashboard from "../Models/model.dashboard.js";

const DashboardClientes = (req, res) => {

    modelDashboard.DashboardClientes((err, result) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
}

const DashboardVendas = (req, res) => {

    modelDashboard.DashboardVendas((err, result) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
}

const DashboardProdutos = (req, res) => {
    modelDashboard.DashboardProdutos((err, result) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    })
}

const DashboardCidades = (req, res) => {
    modelDashboard.DashboardCidades((err, result) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    })
}

export default { 
    DashboardClientes, 
    DashboardVendas, 
    DashboardProdutos, 
    DashboardCidades 
};