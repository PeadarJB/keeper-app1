import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function Note(props) {

    function handleDelete(){
        props.onCheck(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleDelete}><DeleteForeverIcon/></button>
        </div>
    );
}

