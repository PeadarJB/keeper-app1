// import ReactDOM from "react-dom/client";
import React from "react";
import Header from './Header';
import Note from './Note';
import notes from '../notes';
import Footer from './Footer';



export default function App() {
    return (
    <div>
        <Header />

        {notes.map(newNote => (
            <Note
                key={newNote.id}
                title={newNote.title}
                content={newNote.content}
            />
                ))};
        <Footer />
    </div>
    );
}