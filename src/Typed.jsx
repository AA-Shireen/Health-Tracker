import React, { useEffect, useRef } from "react";
import Typed from "typed.js";


const TypedExample = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Track your fitness, nutrition, and sleep with ease. Stay on top of your health goals and achieve a balanced lifestyle."],
            typeSpeed: 30,
            backSpeed: 30,
            // loop: true,
            showCursor: false,
        };

        // Initialize Typed instance with options
        const typed = new Typed(typedRef.current, options);

        // Clean up: Destroy Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

    return <span ref={typedRef} />;
};

export default TypedExample;
