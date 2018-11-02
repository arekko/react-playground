import React from 'react'



export function Todo({ toggleComplete, note, handleToDelete }) {
  return (
    <li onClick={toggleComplete}>
      {note.text}
      <button onClick={handleToDelete}>
        del
      </button>
    </li>
  );
}
