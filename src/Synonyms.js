import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <div className="Synonyms mt-3">
            {props.synonyms.map(function (synonym, index) {
                return <div key={index}>{synonym}</div>
            })}
            </div>
        );
    } else {
        return null;
    }
}