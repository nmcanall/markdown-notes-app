import React from "react"

export default function Sidebar(props) {

    function getFirstLine(text) {
      let firstLine = text.split('\n', 1)[0];
      while(firstLine.includes("#")) {
        firstLine = firstLine.replace("#", "");
      }
      while(firstLine.includes("*")) {
        firstLine = firstLine.replace("*", "");
      }
      firstLine = firstLine.trim()
      return firstLine;
    }

    function deleteNote(event, noteId) {
        event.stopPropagation();
        props.setNotes(props.notes.filter(oldNote => oldNote.id !== noteId));
    }

    const noteElements = props.notes.map((note) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{getFirstLine(note.body)}</h4>
                <button 
                    className="delete-btn"
                    onClick={(event) => deleteNote(event, note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
