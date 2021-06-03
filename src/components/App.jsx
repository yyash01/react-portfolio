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
        })
        
    }


    return (
        <div>
            <Header />
            <CreateArea
            onAdd={addNote}
            />
            <Note key={1} title="Note title" content="Note content" />
            <Footer />
        </div>
    );
}

export default App;
