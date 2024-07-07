import React from "react";
import bmiResultCover from "./Assets/bmiResultCover.jpg";

const BmiResult = ({ bmiResult, bmiPlan }) => {
    return (
        <div className="text-white h-screen bg-scroll bg-cover grid justify-center items-center"
            style={{
                backgroundImage: `url(${bmiResultCover})`
            }}>
            <p className="text-4xl text-center">Your BMI is: <span className="underline">{bmiResult}</span></p>
            {bmiPlan && (
                <div className="mt-4">
                    {bmiPlan.message ? (
                        <p>{bmiPlan.message}</p>
                    ) : (
                        <div className="text-xl bg-sky-950 bg-opacity-70 px-16 py-8 rounded-xl leading-10">
                            <h3 className="my-8 text-center text-3xl font-semibold">{bmiPlan.status}</h3>
                            <p><span className="font-bold">Calories: </span>{bmiPlan.calories}</p>
                            <p><span className="font-bold">Nutrients:</span> {bmiPlan.nutrients}</p>
                            <p><span className="font-bold">Exercise: </span>{bmiPlan.exercise}</p>
                            <p><span className="font-bold">Water: </span>{bmiPlan.water}</p>
                            <p><span className="font-bold">Sleep: </span>{bmiPlan.sleep}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BmiResult;
