// src/pages/HomePage.jsx
import React, { useState } from "react";
import Trending from "../components/Trending.jsx";
import { Exploration } from "../components/Exploration.jsx";
import { Container } from "react-bootstrap";
import { useImageContext } from "../context/ImageFromDbContext.jsx";

export function HomePage() {
    const { images } = useImageContext();
    const [filterCriteria, setFilterCriteria] = useState({ category: "All", sortBy: "None" });

    const trendingImages = [...images].sort((a, b) => b.likes - a.likes).slice(0, 5);

    const handleFilterChange = criteria => setFilterCriteria(criteria);

    const sortedImages = [...images]
        .filter(img => filterCriteria.category === "All" || img.category === filterCriteria.category)
        .sort((a, b) => {
            if (filterCriteria.sortBy === "None") return Math.random() - 0.5;
            if (filterCriteria.sortBy === "Most Popular") return b.likes - a.likes;
            if (filterCriteria.sortBy === "Newest") return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
            if (filterCriteria.sortBy === "Oldest") return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
            return 0;
        });

    return (
        <Container className="mt-5">
            <Trending trendingData={trendingImages} />
            <Exploration images={sortedImages} onFilterChange={handleFilterChange} />
        </Container>
    );
}