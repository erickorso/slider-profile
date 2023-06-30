import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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
    LineElement,
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
    0, 75, 45, 115, 200
]

const DATA2 = [
    0, 50, 100, 145, 400
]

const OPTIONS = {
    scales: {
        x: {
            ticks: {
                color: 'blue'
            }
        }
    }
}

const data = {
    labels: MONTHS,
    datasets: [
        {
            label: 'some1',
            data: DATA1,
            tension: 0.5,
            borderColor: '#f60',
            backgroundColor: '#bbcfbb',
            pointRadius: 5,
            pointBorderColor: '#006',
            pointBackgroundColor: '#ff6',
            fill: false
        },
        {
            label: 'some2',
            data: DATA2,
            tension: 0.5,
            borderColor: '#2600ff',
            backgroundColor: '#64e41a',
            pointRadius: 5,
            pointBorderColor: '#0f0fd4',
            pointBackgroundColor: '#ce910d',
            fill: true
        }
    ]
}

function LineChart() {
    return (
        <LineChartStyled>
            <Line data={data} options={OPTIONS} />
        </LineChartStyled>
    )
}

export default LineChart