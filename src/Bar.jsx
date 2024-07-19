import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
    const data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{
            label: "Calories Intake",
            data: [2000, 1920, 2150, 1800, 1400, 2050, 2330],
            backgroundColor: ['rgba(255, 99, 132, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(201, 203, 207, 0.5)'],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1,
        }]
    };

    const options = {

    };
    return (
        <>
            <div className="h-screen col-span-12 flex items-center justify-center px-32 py-16 bg-gradient-to-b from-cyan-900 to-cyan-500">
                <Bar options={options} data={data} />

            </div>
        </>
    )
}
