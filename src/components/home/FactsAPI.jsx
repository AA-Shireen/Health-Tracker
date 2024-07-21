import React, { useState, useEffect } from 'react';

const healthFacts = [
    "Regular cardiovascular exercise can reduce the risk of heart disease by up to 30%.",
    "Just 30 minutes of walking each day can improve cardiovascular health and lower blood pressure.",
    "Cardio: Cardiovascular exercise helps increase lung capacity and improves overall respiratory health.",
    "Cardio: Aerobic exercise can help reduce the risk of stroke by improving blood circulation.",
    "  Cardio: Consistent cardio workouts can help lower bad cholesterol(LDL) and increase good cholesterol(HDL).",
    "Drinking water regularly can boost your metabolism and help with weight loss.",
    "Lack of sleep can lead to weight gain and increase the risk of chronic health problems.",
    "A balanced diet rich in fruits and vegetables can reduce the risk of many diseases, including cancer and heart disease.",
    "Regular physical activity can help prevent type 2 diabetes and maintain healthy blood sugar levels.",
    "Strength training can improve bone density and reduce the risk of osteoporosis.",
    "Maintaining a healthy weight can decrease the risk of developing gallstones.",
    " Omega - 3 fatty acids, found in fish, can improve brain function and lower the risk of dementia.",
    "Meditation and mindfulness can reduce stress and improve overall mental health.",
    "Smoking cessation improves circulation and lung function within weeks.",
    "Eating fiber - rich foods can help maintain healthy bowel function and prevent constipation.",
    "Dark chocolate in moderation can improve brain function and heart health.",
    "Proper dental hygiene can reduce the risk of heart disease and other systemic conditions.",
    "Regular eye exams can help detect serious health issues like diabetes and high blood pressure.",
    "Social connections and maintaining friendships can improve mental health and increase longevity.",
    "Standing up and moving around every hour can reduce the risk of deep vein thrombosis(DVT).",
    "Excessive sugar intake is linked to an increased risk of type 2 diabetes and heart disease.",
    "Prolonged sitting is associated with an increased risk of several chronic diseases.",
    "Eating too much processed food can lead to obesity and related health issues.",
    "Regular physical activity can reduce the risk of certain cancers, including colon and breast cancer.",
    "Getting enough sunlight can boost vitamin D levels and improve mood.",
    "Reducing alcohol consumption can lower the risk of liver disease and other health problems.",
    "Quitting smoking can significantly increase life expectancy and improve quality of life.",
    "Regular health check - ups can help detect potential health issues early.",
    "Practicing good posture can prevent back pain and other musculoskeletal problems.",
    "Consuming probiotics can improve gut health and boost the immune system.",
    "Taking breaks during work can improve productivity and reduce stress.",
    "Practicing gratitude can improve overall well - being and mental health.",
    "Listening to music can lower stress levels and improve mood.",
    "Laughter can boost the immune system and reduce stress hormones.",
    "Getting regular massages can reduce stress and improve circulation.",
    "A diet high in antioxidants can protect against cellular damage and reduce inflammation.",
    "Staying hydrated can improve skin health and appearance.",
    "Eating breakfast can boost metabolism and provide energy for the day.",
    "Regular yoga practice can improve flexibility, strength, and mental clarity.",
    "Deep breathing exercises can reduce anxiety and improve lung function.",
    "Reducing screen time before bed can improve sleep quality.",
    "Taking vitamin supplements can help fill nutritional gaps in your diet.",
    "A diet rich in calcium and vitamin D can promote strong bones and teeth.",
    "Stretching regularly can improve flexibility and prevent injuries.",
    "Limiting caffeine intake can improve sleep quality and reduce anxiety.",
    "Practicing good hygiene can prevent the spread of infections and illnesses.",
    "Regularly washing hands can reduce the risk of getting sick.",
    "Maintaining a healthy work - life balance can improve overall well - being and reduce burnout.",
    "Regularly practicing hobbies and activities you enjoy can improve mental health.",
    "Spending time in nature can reduce stress and improve overall health.",
    "Spending time in nature can reduce stress and improve overall health."
];

const HealthFacts = () => {
    const [fact, setFact] = useState("");

    const getRandomFact = () => {
        const randomFact = healthFacts[Math.floor(Math.random() * healthFacts.length)];
        setFact(randomFact);
    };

    useEffect(() => {
        getRandomFact(); // Set an initial fact
        const interval = setInterval(() => {
            getRandomFact();
        }, 30000); // Change fact every 30 seconds (30000 milliseconds)

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className="col-start-4 col-span-6 flex flex-col text-center justify-center w-1/2 mx-auto">
            <div className="container bg-sky-950 rounded-xl px-9 bg-opacity-50">
                <h3 className="text-4xl my-4">Did You Know?</h3>
                <p className="text-xl mb-4">{fact}</p>
            </div>
        </div>
    );
};

export default HealthFacts;
