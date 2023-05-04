import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <section>
                <h3>{props.meanings.partOfSpeech}</h3><hr />
                {props.meanings.definitions.map(function (definition, index) {
                    return (
                        <div key={index}>
                            <div className="definition">{definition.definition} </div>
                            <div className="example">{definition.example}</div>
                            <div className="synonyms">
                                <Synonyms synonyms={definition.synonyms} />
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}