import React from "react";
import { useState } from "react";
import "./BMIScroll.css";
import bmiCover from "./Assets/bmiCover.jpg";

export default function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [units, setUnits] = useState("metric");
  const [bmiResult, setBmiResult] = useState(null);
  const calculateBMI = () => {
    if (height && weight) {
      let bmi;
      if (units === "metric") {
        const heightInMeters = parseFloat(height) / 100;
        const weightInKg = parseFloat(weight);
        bmi = weightInKg / (heightInMeters * heightInMeters);
      } else {
        const heightInInches = parseFloat(height);
        const weightInPounds = parseFloat(weight);
        bmi = (weightInPounds / (heightInInches * heightInInches)) * 703;
      }
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
      <div className="">
        <h2 className="text-4xl py-8">Lets get started!</h2>
        <h3 className="text-xl">By calculating your BMI</h3>
      </div>
      <div className="bg-sky-950 bg-opacity-50">
        <form className="flex flex-col items-center py-2">
          <label htmlFor="height">Enter your Height</label>
          <input
            className="py-2 px-8 my-4 bg-sky-950 rounded-md "
            id="height"
            type="number"
            placeholder={units === "metric" ? "180 cm" : "70 inches"}
            step={0.01}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <label htmlFor="weight">Enter your Weight</label>
          <input
            className="py-2 px-8 my-4 bg-sky-950 rounded-md "
            id="weight"
            type="number"
            placeholder={units === "metric" ? "70 kg" : "150 lbs"}
            step={0.01}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <select
            className="bg-sky-950 px-2 rounded"
            name="units"
            id="units"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
          >
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
          <button
            className="py-2 px-8 my-4 rounded bg-sky-900 cursor-pointer transition ease-in-out duration-300 hover:scale-105 hover:bg-sky-800"
            type="button"
            onClick={calculateBMI}
          >
            Calculate
          </button>
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
