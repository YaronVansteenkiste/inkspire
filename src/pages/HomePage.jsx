import React from "react";
import Trending from "../components/Trending.jsx";
import YourWorks from "../components/YourWorks.jsx";
import {Exploration} from "../components/Exploration.jsx";


export function HomePage(props) {
    const {images} = props;

    return (
        <div>
            <Trending trendingData={images}/>
            <YourWorks yourWorksData={images}/>
            <Exploration images={images}/>
        </div>
    )
}