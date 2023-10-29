import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null)

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function search() {
        // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        const pexelsApiKey = "9IuIdmXeiHd278zGlGchWXjn1gzLM8nEoCWiEYoK7mwJeeXibgvjMIKx";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let header = { Authorization: `${pexelsApiKey}` };
        
        axios.get(pexelsApiUrl, { headers: header }).then(handlePexelsResponse);
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
                        suggested words: nature, integrity, sustainability, zen...
                    </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "loading";
    }

}