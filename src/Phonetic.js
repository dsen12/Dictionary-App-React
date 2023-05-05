import React from "react";
import "./Phonetic.css";
import AudioButton from "./AudioButton";


export default function Phonetic(props) {
    if (props.phonetics.audio && props.phonetics.text) {
        return (
            <div className="Phonetic">
                <div className="audio">
                <AudioButton audioUrl={props.phonetics.audio} />
                </div>
                <div className="text">
                {props.phonetics.text};
                </div>
            </div>
        );
    } else {
        return null;
    }
}