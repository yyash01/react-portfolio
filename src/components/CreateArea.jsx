import React, { useState } from "react";

function CreateArea(props) {
    //I have created a constant which is a object and which store both content and title.
    const[note , setNote] = useState({
        //the initial state is going to be a title key which is set to a empty string .
        //and a content key which is same set to a empty string.
        title: "",
        content: ""

    });

    //Now handleChange is going to receive an event when it gets triggered
    function handleChange(event) {
        //we will distructure the event so that we can get hold of event.target.name and .value
        //now we can treat this name and value as seprate constants.
        const {name,value} = event.target;

        //for saving what we are typing in the title and content TextArea.
        setNote(prevNote => {
            return{
                ...prevNote, //used the spread operator to spread all the previous key value pairs.
                [name] : value
                /* And remember that this syntax simply turns this 
                name key from just the string name for the key to the actual value of this name constant.
                 */
            };
        });
        
    }
    //So when this button gets clicked, we're going to pass it a function that should be triggered.
    //name of function would be : submitNote 
    function submitNote(event) {

    //And calling this onAdd from the props is going to be equivalent to calling the
    // addNote from the App.jsx.And in order for us to be able to add the note we have to pass it back
    // as an input.
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    /*Whenever you click on a button inside a form, 
    the default behavior is to refresh the page. And to prevent the default refresh
    of the page : we use ---  event.preventDefault.*/


    return (
        <div>
            <form>
                <input name="title" onChange={handleChange}value={note.title} placeholder="Title" />
                <textarea name="content"
                    value={note.content}
                    onChange={handleChange}
                    placeholder="Take a note..." rows="3"
                />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
