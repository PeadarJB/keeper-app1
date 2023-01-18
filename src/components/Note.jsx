import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

export default function Note(props) {

    function handleDelete(){
        props.onCheck(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    );
}

