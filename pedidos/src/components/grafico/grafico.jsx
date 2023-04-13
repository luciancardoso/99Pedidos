import { Chart } from "react-google-charts"

const Grafico = ({ title, chartType, dados, options }) => {

    // const options = {
    //     legend: legenda ? { } : { position: "none" }
    // }

    return(
        <>
            <h3 className="text-secondary">{title}</h3>

            <Chart 
                chartType={chartType}
                data={dados}
                width="100%"
                height="180"
                options={options}
                legendToggle 
            />
        </>
    )
}

export default Grafico