import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [noteList, setNoteList] = useState([]);

    function addNote(note){
        setNoteList((prevNotes) => {
            return [...prevNotes, note];
        });
    }

    function deleteNote(id){
        console.log("delete was triggered");
        setNoteList((prevNotes) => {
           return prevNotes.filter((noteItem, index) => {
               return index !== id;
           });
           });

    }

  return (
    <div>
      <Header />
      <CreateArea
          onAdd={addNote}/>
          {noteList.map((newNote, index) => (
         <Note
               key={index}
               id={index}
               title={newNote.title}
               content={newNote.content}
               onCheck={deleteNote}/>
              ))}
      <Footer />
    </div>
  );
}

export default App;
