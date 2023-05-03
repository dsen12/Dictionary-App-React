import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <br />
            <h3>{props.meanings.partOfSpeech}</h3>
            {props.meanings.definitions.map(function (definition, index)
            {
                return (
                    <div key={index}>
                        <p><strong>Definition: </strong>{definition.definition} </p>
                        <p><strong>Example: </strong><em>{definition.example}</em></p>
                        <Synonyms synonyms={props.meanings.synonyms} />
                        <br />
                    </div>
                );
            })}
        </div>
    );
}