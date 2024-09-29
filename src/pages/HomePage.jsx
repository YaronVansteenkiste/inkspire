import React from "react";
import Trending from "../components/Trending.jsx";
import YourWorks from "../components/YourWorks.jsx";
import {Exploration} from "../components/Exploration.jsx";
import {Container} from "react-bootstrap";


export function HomePage(props) {
    const {images} = props;

    return (
        <Container className="mt-5">
            <Trending trendingData={images}/>
            <YourWorks yourWorksData={images}/>
            <Exploration images={images}/>
        </Container>
    )
}