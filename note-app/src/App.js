import "./App.css";
import Sidebar from "./Components/Sidebar";
import Editor from "./Components/Editor";
import React from "react";
import Split from "react-split";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = React.useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      title: "Your Title",
      body: "# Type your note here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  function updateNoteBody(text) {
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );
  }

  function updateNoteTitle(text) {
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, title: text }
          : oldNote;
      })
    );
  }

  return (
    <main>
      {notes.length > 0 ? (
        //Having at least 1 note
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            newNote={createNewNote}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
          />
          {currentNoteId && (
            <Editor
              currentNote={findCurrentNote()}
              updateNoteBody={updateNoteBody}
              updateNoteTitle={updateNoteTitle}
            />
          )}
        </Split>
      ) : (
        //No note
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create One Now
          </button>
        </div>
      )}
    </main>
  );
}
