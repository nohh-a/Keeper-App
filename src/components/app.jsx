import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
    return (
        <div>
        <Header></Header>
        {notes.map(noteMap => (
            <Note
            id = {noteMap.key}
            title = {noteMap.title}
            content = {noteMap.content}
        ></Note>
        ))}
        <Footer></Footer>
        </div>
    )
}

export default App;