import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);


    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function search() {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                    <div className="subheading">
                    what word are you curious about?
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input className="search" type="search" onChange={handleKeywordChange} placeholder={props.defaultKeyword}/>
                        <input
                        type="submit"
                        value="search"
                        className="search-button"
                        onClick={handleSubmit}
                        ></input>                    
                    </form>
                    <div className="suggestions">
                        suggested words: growth, plant, integrity, kindness...
                    </div>
                </section>
                <Results results={results} />
            </div>
        );
    } else {
        load();
        return "loading";
    }

}