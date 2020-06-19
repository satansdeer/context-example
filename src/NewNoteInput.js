import React, { useState, useContext } from "react";
import { NotesContext } from "./NotesContext";

export function NewNoteInput() {
  const { addNote } = useContext(NotesContext)
  const [text, setText] = useState("");

  const onTextChange = (event) => {
    setText(event.target.value)
  }

  const onSubmit = () => {
    addNote(text)
    setText("")
  }

  return (
    <>
      <input
        onChange={onTextChange}
        type="text"
        value={text}
      />
      <button onClick={onSubmit}>Add note</button>
    </>
  );
}
