import React from "react";
import Trending from "../components/Trending.jsx";
import YourWorks from "../components/YourWorks.jsx";
import {Exploration} from "../components/Exploration.jsx";
import {Container} from "react-bootstrap";


export function HomePage(props) {
    const {images} = props;
    const yourWorks = images.filter((img) => img.author === "Yaron");
    const imagesRandomOrder = [...images].sort(() => Math.random() - 0.5);
    const imagesOrderByLikes = [...images].sort((a, b) => b.likes - a.likes);
    const trendingImages = imagesOrderByLikes.slice(0, 5);


    return (
        <Container className="mt-5">
            <Trending trendingData={trendingImages}/>
            <YourWorks yourWorksData={yourWorks}/>
            <Exploration images={imagesRandomOrder}/>
        </Container>
    )
}