import React from "react";
import Trending from "../components/Trending.jsx";
import YourWorks from "../components/YourWorks.jsx";


export function HomePage(props) {
    const {images} = props;

    return (
        <div>
            <Trending trendingData={images}/>
            <YourWorks yourWorksData={images}/>
        </div>
    )
}