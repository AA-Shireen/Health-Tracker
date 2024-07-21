import React from "react";
import bmiResultCover from "../../Assets/bmiResultCover.jpg";

const BmiResult = ({ bmiResult, bmiPlan }) => {
    return (
        <div className="text-white h-screen bg-scroll bg-cover grid justify-center items-center"
            style={{
                backgroundImage: `url(${bmiResultCover})`
            }}>
            <p className="text-4xl text-center text-cyan-400">Your BMI is: <span className="underline text-red-400">{bmiResult}</span></p>
            {bmiPlan && (
                <div className="mt-4">
                    {bmiPlan.message ? (
                        <>
                            <div className="text-xl bg-sky-950 bg-opacity-70 px-16 py-8 rounded-xl leading-10">
                                <h3 className="my-8 text-center text-3xl font-semibold">{bmiPlan.status}</h3>
                                <p className="font-bold">{bmiPlan.message}</p>
                            </div>
                        </>
                    ) : (
                        <div className="text-xl bg-black bg-opacity-60 px-16 py-8 rounded-xl leading-10">
                            <h3 className="my-8 text-center text-3xl font-semibold text-red-500">{bmiPlan.status}</h3>
                            <p><span className="font-semibold text-cyan-400">Calories: </span><span className="">{bmiPlan.calories}</span></p>
                            <p><span className="font-semibold text-cyan-400">Nutrients:</span><span className=""> {bmiPlan.nutrients}</span></p>
                            <p><span className="font-semibold text-cyan-400">Exercise: </span><span className="">{bmiPlan.exercise}</span></p>
                            <p><span className="font-semibold text-cyan-400">Water: </span><span className="">{bmiPlan.water}</span></p>
                            <p><span className="font-semibold text-cyan-400">Sleep: </span><span className="">{bmiPlan.sleep}</span></p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BmiResult;
