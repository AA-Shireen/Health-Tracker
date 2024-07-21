import React from "react";
import BMI from "./BMI";
import TypedExample from "./Typed.jsx";
import Testimonials from "./Testimonials.jsx";
import Chart from "../charts/Charts.jsx";

export default function Home() {
  return (
    <>
      <div
        className="col-span-12 h-screen text-center items-center grid bg-scroll bg-cover"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg')",
        }}
      >
        <div className="space-y-10 bg-sky-950 bg-opacity-50 py-8">
          <h1 className="text-5xl text-cyan-300 ">Empower Your Health Journey</h1>
          <h2 className="text-xl text-red-400">
            <TypedExample />
          </h2>
        </div>
      </div>
      <Chart />
      <BMI />
      <Testimonials />

    </>
  );
}
