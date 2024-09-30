import React, {useState} from "react";
import Trending from "../components/Trending.jsx";
import YourWorks from "../components/YourWorks.jsx";
import {Exploration} from "../components/Exploration.jsx";
import {Container} from "react-bootstrap";


export function HomePage(props) {
    const {images} = props;
    const [filterCriteria, setFilterCriteria] = useState("");

    const yourWorks = images.filter(img => img.author === "Yaron");
    const trendingImages = [...images].sort((a, b) => b.likes - a.likes).slice(0, 5);

    const handleFilterChange = criteria => setFilterCriteria(criteria);

    const sortedImages = [...images].sort((a, b) => {
        if (filterCriteria.sortBy === "Most Popular") return b.likes - a.likes;
        if (filterCriteria.sortBy === "Newest") return new Date(b.publishDate) - new Date(a.publishDate);
        if (filterCriteria.sortBy === "Oldest") return new Date(a.publishDate) - new Date(b.publishDate);
        return 0;
    });

    return (
        <Container className="mt-5">
            <Trending trendingData={trendingImages}/>
            <YourWorks yourWorksData={yourWorks}/>
            <Exploration images={sortedImages} onFilterChange={handleFilterChange}/>
        </Container>
    )
}