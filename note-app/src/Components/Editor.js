/* eslint-disable no-restricted-globals */
import React from "react";

export default function Editor(props) {
  return (
    <section className="pane editor">
      <input
        type="text"
        className="note-title"
        value={props.currentNote.title}
        onChange={() => props.updateNoteTitle(event.target.value)}
      />
      <textarea
        placeholder="# Type your note here"
        value={props.currentNote.body}
        onChange={() => props.updateNoteBody(event.target.value)}
      ></textarea>
    </section>
  );
}
