// HealthChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
// import { CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js/auto';
import 'chart.js/auto';

const Chart = (props) => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Tracking Health',
                data: [65, 59, 80, 81, 56, 55, 40, 49, 60, 84, 23, 73],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
            {
                label: 'Not Tracking Health',
                data: [85, 69, 90, 91, 76, 65, 60],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <>
        <div className="h-screen col-span-12 flex items-center justify-center px-32 py-16 bg-gradient-to-b from-sky-950 to-cyan-900">
            <Line data={data} options={options} />
        </div>
    </>
};

export default Chart;
