import React from 'react'
import { Pie } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
} from "chart.js";
import { LineChartStyled } from './style';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
);

const MONTHS = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
]

const DATA1 = [
    15, 75, 45, 115, 200
]

const DATA2 = [
    0, 50, 100, 145, 400
]

const OPTIONS = {
    maintainAspectRatio: false,
    scales: {
        x: {
            ticks: {
                color: 'red'
            }
        }
    }
}

const BG_COLORS = [
    '#bbcfbb',
    '#f60',
    '#006',
    '#ff6',
    '#daa'
]

const data = {
    labels: MONTHS,
    datasets: [
        {
            label: 'some1',
            data: DATA1,
            tension: 0.5,
            borderColor: '#f60',
            backgroundColor: BG_COLORS,
            pointRadius: 5,
            pointBorderColor: '#006',
            pointBackgroundColor: '#ff6',
            fill: false,
        },
        {
            label: 'some2',
            data: DATA2,
            tension: 0.5,
            borderColor: '#2600ff',
            backgroundColor: BG_COLORS,
            pointRadius: 5,
            pointBorderColor: '#0f0fd4',
            pointBackgroundColor: '#ce910d',
            fill: true
        }
    ]
}

function PieChart() {
    return (
        <LineChartStyled>
            <div style={{ minHeight: 220 }}> {/* it works with a container */}
                <Pie data={data} options={OPTIONS} />
            </div>
        </LineChartStyled>
    )
}

export default PieChart