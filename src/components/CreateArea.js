import React, {useState} from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content:""
    });

    const [noteContent, setNewContent] = useState("");
    const [noteTitle, setNewTitle] = useState("");

    function handleTitle(event){
        const newValue = event.target.value;
        setNewTitle(newValue);
    }

    function handleContent(event){
        const newValue = event.target.value;
        setNewContent(newValue);
    }

    function addNote(){

    }

  return (
    <div>
      <form>
        <input onChange={handleTitle} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleContent} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;