import React from "react";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h2 className="text-snippet">
          {note.id === props.currentNote.id
            ? props.currentNote.title
            : note.title}
        </h2>
        <button
          className="delete-btn"
          onClick={() => props.deleteNote(note.id)}
        >
          <i className="fa-solid fa-trash-can fa-lg"></i>
        </button>
      </div>
    </div>
  ));
  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h1>Notes</h1>
        <button className="new-note-btn" onClick={props.newNote}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      {noteElements}
    </section>
  );
}
