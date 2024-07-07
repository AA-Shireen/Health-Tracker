import React, { useEffect, useState } from "react";
import axios from "axios";

const HealthFacts = () => {
    const [fact, setFact] = useState("");

    useEffect(() => {
        const fetchHealthFacts = async () => {
            try {
                const response = await axios.get(
                    "https://newsapi.org/v2/everything",
                    {
                        params: {
                            q: "health OR fitness OR nutrition OR wellness",
                            from: "2024-06-07",
                            sortBy: "publishedAt",
                            language: "en",
                            apiKey: "c0f026f204564def8c4f2e85eed3edc0"
                        }
                    }
                );

                const articles = response.data.articles;
                if (articles.length > 0) {
                    const healthArticles = articles.filter(article =>
                        article.description && (
                            article.description.toLowerCase().includes("health") ||
                            article.description.toLowerCase().includes("fitness") ||
                            article.description.toLowerCase().includes("nutrition") ||
                            article.description.toLowerCase().includes("wellness")
                        )
                    );

                    if (healthArticles.length > 0) {
                        const randomArticle = healthArticles[Math.floor(Math.random() * healthArticles.length)];
                        const factContent = randomArticle.description || randomArticle.title;
                        setFact(factContent.replace(/<\/?[^>]+(>|$)/g, ""));
                    } else {
                        setFact("No relevant health facts available at the moment.");
                    }
                } else {
                    setFact("No health facts available at the moment.");
                }
            } catch (error) {
                console.error("Error fetching the health fact:", error);
                setFact("Error fetching the health fact.");
            }
        };

        fetchHealthFacts();
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
