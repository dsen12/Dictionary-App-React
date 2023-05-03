import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null)


    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function search(event) {
        event.preventDefault();

        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} placeholder="Enter a word"/>
            </form>
            <Results results={results} />
        </div>
    );
}