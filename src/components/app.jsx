import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/

function App() {
    const [note, setNote] = useState([]);

    function addNote(input) {
        setNote((prevNotes)=> {
            return [...prevNotes, input];
        });
    }

    function deleteNote(id){   
        setNote((prevNotes)=> {
            return prevNotes.filter((note, index)=> {
                return index!== id;
            });
        });
    }  
    return (
        <div>
        <Header></Header>
        <CreateArea
            onClick={addNote}    
        ></CreateArea>
        {note.map((noteMap, index) => (
            <Note
            id = {index}
            key = {index}
            title = {noteMap.title}
            content = {noteMap.content}
            onClick = {deleteNote}
        ></Note>
        ))}
        <Footer></Footer>
        </div>
    )
}

export default App;