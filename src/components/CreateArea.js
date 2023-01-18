import React, {useState} from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Fab} from "@mui/material";


function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content:""
    });



    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function onClick(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }



  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <Fab  onClick={onClick}><AddCircleOutlineIcon/></Fab>
      </form>
    </div>
  );
}

export default CreateArea;