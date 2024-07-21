// HealthChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
// import { CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js/auto';
import 'chart.js/auto';

const Chart = (props) => {
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6',],
        datasets: [
            {
                label: 'Trackers (Weight Lost kg)',
                data: [0.5, 1.0, 1.5, 2.5, 3.0, 4.0,],
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.4,
            },
            {
                label: 'Non-Trackers (Weight Lost kg)',
                data: [0.2, 0.3, 0.5, 0.6, 0.7, 0.8,],
                fill: true,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                tension: 0.4,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Weight Lost (kg)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Weeks',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return <>
        <div className="h-screen col-span-12 flex items-center justify-between px-32 py-16 bg-gradient-to-b from-sky-950 to-cyan-900">
            <div className='bg-black bg-opacity-40 px-6 py-4 rounded-md w-1/2'>
                <h3 className="text-2xl text-center mb-4">
                    <span className='text-cyan-400'>Health Tracking</span> vs <span className='text-red-400'>Non-Tracking</span></h3>
                <p className='leading-loose text-justify'>Tracking one's health can lead to significant improvements in achieving health goals. By monitoring key metrics such as weight, nutrition, physical activity, and sleep, individuals gain valuable insights into their health patterns and behaviors. As shown in the chart, incorporating regular health tracking into one's routine is a powerful strategy for anyone aiming to enhance their health and well-being.</p>
            </div>
            <div
                className='flex justify-center items-center bg-black bg-opacity-40 px-2 rounded-md'
                style={{
                    minWidth: '400px',
                    width: '600px',
                }}>
                <Line data={data} options={options} />
            </div>
        </div >
    </>
};

export default Chart;
