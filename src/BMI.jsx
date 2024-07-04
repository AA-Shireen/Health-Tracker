import React from "react";
import { useState } from "react";
import "./BMIScroll.css";
import bmiCover from "./Assets/bmiCover.jpg";

export default function BMI() {
  //   const height = document.getElementById("height");
  //     const weight = document.getElementById("weight");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height);
      const weightInKg = parseFloat(weight);
      const bmi = weightInKg / (heightInMeters * heightInMeters);
      setBmiResult(bmi.toFixed(2));
      console.log("BMI Calculated:", bmi);
    }
  };
  return (
    <div
      className="col-span-12 text-center grid items-center h-screen bg-scroll bg-cover"
      style={{
        backgroundImage: `url(${bmiCover})`,
      }}
    >
      <h2 className="text-4xl">Lets get started!</h2>
      <h3 className="text-xl">By calculating your BMI</h3>
      <div className="bg-sky-950 bg-opacity-50">
        <form className="flex flex-col items-center">
          <label htmlFor="height">Enter your Height</label>
          <input
            className="py-2 px-8 my-4 text-black rounded "
            id="height"
            type="number"
            placeholder="1.8 meters"
            step={0.01}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <label htmlFor="weight">Enter your Weight</label>
          <input
            className="py-2 px-8 my-4 text-black rounded "
            id="weight"
            type="number"
            placeholder="70 kg"
            step={0.01}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            className="py-2 px-8 my-4 rounded bg-sky-900 cursor-pointer transition ease-in-out duration-300 hover:scale-105 hover:bg-sky-800"
            type="button"
            value="Calculate"
            onClick={calculateBMI}
          />
        </form>
        {bmiResult && (
          <div className="mt-4 text-white italic">
            <p>Your BMI is: {bmiResult}</p>
          </div>
        )}
      </div>
    </div>
  );
}
