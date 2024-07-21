import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HealthFacts from "./FactsAPI"

const Testimonials = () => {
    // Testimonials data (mock data for now)
    const testimonials = [
        {
            id: 1,
            name: "John Depth",
            message: "I started using Health Tracker a month ago, and it has completely changed my approach to fitness. The personalized plans helped me stay on track and motivated!",
            image: "https://wallpaperaccess.com/full/2918981.jpg",
        },
        {
            id: 2,
            name: "Alfredo Pastino",
            message: "Health Tracker has been a game-changer for me. I've lost 10 pounds in just three months, thanks to the tailored nutrition and exercise recommendations.",
            image: "https://www.digitaltrends.com/wp-content/uploads/2024/03/The-Godfather-Part-II-Movie.jpg?fit=720%2C405&p=1",
        },
        {
            id: 3,
            name: "Jim Currey",
            message: "As a busy professional, Health Tracker makes it easy for me to monitor my health on the go. The intuitive interface and insightful analytics are fantastic!",
            image: "http://wallpapercave.com/wp/wp1914874.jpg",
        },
        {
            id: 4,
            name: "Eddie Morphine",
            message: "I've struggled with maintaining a healthy lifestyle, but Health Tracker's daily tips and reminders have kept me focused and motivated. Highly recommend!",
            image: "https://miro.medium.com/max/1080/1*tTxapRHz5_7XIscNXWxwLQ.jpeg",
        },
        {
            id: 5,
            name: "Kevin Hearth",
            message: "I never thought tracking my health could be this easy! Thanks to this amazing tool, I've lost 10 pounds in just two months.",
            image: "https://bloximages.newyork1.vip.townnews.com/postandcourier.com/content/tncms/assets/v3/editorial/a/9f/a9f382fc-930c-11e7-b27e-fbef95d8a0c6/59b00147d8442.image.jpg",
        },
        {
            id: 6,
            name: "Dave Chaplin",
            message: "This health tracker has transformed my life. It keeps me motivated with personalized goals and insightful data. Highly recommended!",
            image: "https://img.nbc.com/sites/nbcunbc/files/images/2020/11/04/201104_4260738_Dave_Chappelle_Returns_to_SNL_.jpg",
        },

    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (<>
        <div className="testimonials-container h-screen col-span-12 text-center flex flex-col justify-around" style={
            {
                backgroundImage: `url(https://www.theladders.com/wp-content/uploads/ambition-success-190801.jpg)`
            }
        }>
            <div className="container bg-black bg-opacity-50 rounded-xl w-3/5 mx-auto">
                <h3 className="text-4xl font-bold mb-2 my-4 text-cyan-300">Success Stories</h3>
                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="rounded-full mx-auto mb-4 my-4"
                                style={{ width: 150, height: 150, objectFit: "cover" }}
                            />
                            <p className="text-white my-4 text-lg px-8 ">{testimonial.message}</p>
                            <p className="my-4 text-xl font-semibold text-red-400">{testimonial.name}</p>
                        </div>
                    ))}
                </Slider>
            </div>
            <HealthFacts />
        </div>
    </>
    );
};

export default Testimonials;
