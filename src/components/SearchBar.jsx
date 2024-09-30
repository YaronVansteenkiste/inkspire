import React, {useEffect, useRef, useState} from "react";
import {Button, Form, ListGroup} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export function SearchBar(props) {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const inputRef = useRef(null);
    const [inputWidth, setInputWidth] = useState(0);
    const navigate = useNavigate();

    const { suggestions } = props;

    useEffect(() => {
        if (inputRef.current) {
            setInputWidth(inputRef.current.offsetWidth);
        }
    }, [inputRef.current]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);

        if (value.length > 4) {
            setSearchResults(
                suggestions.filter(item =>
                    item.toLowerCase().includes(value.toLowerCase())
                )
            );
        } else {
            setSearchResults([]);
        }
    };

    const handleSubmit = (e, searchTerm) => {
        e.preventDefault();
        setSearchResults([]);
        if (!searchTerm && !search) {
            navigate('/');
        } else {
            navigate(`/search/${searchTerm || search}`);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearch(suggestion);
        setSearchResults([]);
        handleSubmit({ preventDefault: () => {} }, suggestion);
    };

    return (
        <>
            <Form className="d-flex mx-auto w-100 px-0 px-lg-5 position-relative" onSubmit={(e) => handleSubmit(e, search)}>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={search}
                    onChange={handleSearch}
                    ref={inputRef}
                />
                <Button variant="outline-success" type="submit">
                    Search
                </Button>

                {searchResults.length > 0 && (
                    <ListGroup
                        className="position-absolute mt-5"
                        style={{ zIndex: 1000, width: inputWidth }}
                    >
                        {searchResults.map((result, index) => (
                            <ListGroup.Item key={index} onClick={() => handleSuggestionClick(result)}>
                                {result}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Form>
        </>
    );
}