import BarChart from "./BarChart"
import LineChart from "./LineChart"
import PieChart from "./PieChart"
import ChartsStyled from "./style"

const Charts = () => {
    return (
        <ChartsStyled>
            <h2>Linechart</h2>
            <div className="x-container mx-auto px-4">
                <LineChart />
                <LineChart />
                <LineChart />
            </div>
            <h2>Barchart</h2>
            <div className="x-container mx-auto px-4">
                <BarChart />
                <BarChart />
                <BarChart />
            </div>
            <h2>Piechart</h2>
            <div className="x-container mx-auto px-4">
                <PieChart />
                <PieChart />
                <PieChart />
            </div>
        </ChartsStyled>
    )
}

export default Charts