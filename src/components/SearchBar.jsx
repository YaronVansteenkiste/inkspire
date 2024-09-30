import React, { useState, useRef, useEffect } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";

export function SearchBar() {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const inputRef = useRef(null);
    const [inputWidth, setInputWidth] = useState(0);

    useEffect(() => {
        if (inputRef.current) {
            setInputWidth(inputRef.current.offsetWidth);
        }
    }, [inputRef.current]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);

        if (value.length > 0) {
            setSearchResults(
                ["Result 1", "Result 2", "Result 3"].filter(item =>
                    item.toLowerCase().includes(value.toLowerCase())
                )
            );
        } else {
            setSearchResults([]);
        }
    };

    return (
        <>
            <Form className="d-flex mx-auto w-100 px-0 px-lg-5 position-relative">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={search}
                    onChange={handleSearch}
                    ref={inputRef}
                />
                <Button variant="outline-success">
                    Search
                </Button>

                {searchResults.length > 0 && (
                    <ListGroup
                        className="position-absolute mt-5"
                        style={{ zIndex: 1000, width: inputWidth }}
                    >
                        {searchResults.map((result, index) => (
                            <ListGroup.Item key={index}>{result}</ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Form>
        </>
    );
}