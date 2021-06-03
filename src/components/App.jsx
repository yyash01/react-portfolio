import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    //1.3 - The next sub step is to add this new note to an array.

    //that array is going to need state because it's going to be changed.
    //so for this lets create a constant (notes) and (setNotes) - for updating the notes array.
    const [notes , setNotes] = useState([]);


    //create a function called addNote and this addNote is going to receive a note
    function addNote(newNote) {
        setNotes(prevNotes =>{
        return [...prevNotes , newNote];
        });
        
    }


    return (
        <div>
            <Header />
            <CreateArea
            onAdd={addNote}
            />
            {/* 1.4 - to use my notes array and map through it to render a different note 
            component for each item inside the notes array */};
            {notes.map((noteItem) => {
                return <Note
                title = {noteItem.title}
                content = {noteItem.content}
                />
            })};
            <Footer />
        </div>
    );
}

export default App;
