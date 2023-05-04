import React from "react";
import "./Phonetic.css";


export default function Phonetic(props) {
    if (props.phonetics.text) {
        return (
            <div className="Phonetic">
                <a href={props.phonetics.audio} target="_blank" rel="noreferrer"><i className="icon fas fa-volume-up"></i></a>
                <span className="text">
                {props.phonetics.text};
                </span>
            </div>
        );
    } else {
        return null;
    }
}