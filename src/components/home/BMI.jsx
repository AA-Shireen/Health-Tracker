import React from "react";
import { useState, useRef } from "react";
import "./BMIScroll.css";
import bmiCover from "../../Assets/bmiCover.jpg";
import BmiResult from "./BmiResult";

export default function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [units, setUnits] = useState("metric");
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiPlan, setBmiPlan] = useState(null);
  const resultRef = useRef(null);

  const bmiPlans = {
    underweight: {
      status: "UNDER WEIGHT",
      calories: "Increase calorie intake to 2500-3000 calories per day",
      nutrients: "Focus on high-protein and nutrient-dense foods",
      exercise: "Light exercise, such as yoga or walking, 3 times a week",
      water: "Drink at least 8 glasses of water per day",
      sleep: "Aim for 8-9 hours of sleep per night",
    },
    normal: {
      status: "NORMAL",
      message: "Great job! Maintain your current lifestyle.",
    },
    overweight: {
      status: "OVER WEIGHT",
      calories: "Reduce calorie intake to 1500-1800 calories per day",
      nutrients: "Increase fiber intake, reduce sugar and fats",
      exercise: "Moderate exercise, such as jogging or cycling, 5 times a week",
      water: "Drink at least 8-10 glasses of water per day",
      sleep: "Aim for 7-8 hours of sleep per night",
    },
    obesity: {
      status: "OBESE",
      calories: "Reduce calorie intake to 1200-1500 calories per day",
      nutrients: "Follow a balanced diet with high protein and low carbs",
      exercise: "Intensive exercise, such as running or HIIT, 5 times a week",
      water: "Drink at least 10-12 glasses of water per day",
      sleep: "Aim for 7-8 hours of sleep per night",
    },
  };

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
      let plan;
      if (bmi < 18.5) {
        plan = bmiPlans.underweight;
      } else if (bmi >= 18.5 && bmi < 25) {
        plan = bmiPlans.normal;
      } else if (bmi >= 25 && bmi < 30) {
        plan = bmiPlans.overweight;
      } else {
        plan = bmiPlans.obesity;
      }
      setBmiPlan(plan);
      console.log("BMI Calculated:", bmi);
      // Scroll to the result section
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <>
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
        <div className="">
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

        </div>
      </div>
      <div className="col-span-12" ref={resultRef}>
        {bmiResult && <BmiResult bmiResult={bmiResult} bmiPlan={bmiPlan} />}
      </div>
    </>
  );
}