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

    //this below function is used to delete the note whenever we click the delete button.
    /*
    we're probably going to want to somehow remove the note from our notes array. So we can do that using
    setNotes. And inside setNotes we can get hold of the previous notes just as we did up here. */
    function  deleteNote(id) {
        setNotes(prevNotes => {
        return prevNotes.filter((noteItem,index)=>{
                return index!==id;
            });
        });
    }
    /*And remember that the filter function takes a function that accepts up to three arguments. */
    /*The first one is the value that we're currently looping through in the array. */
    /*And the second one is the index of this item */


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
                onDelete = {deleteNote}
                />
            })};
            <Footer />
        </div>
    );
}

export default App;
