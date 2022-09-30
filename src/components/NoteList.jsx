import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onArchive }) => {
  const activeNotes = notes.filter((note) => note.archived === false);

  if (activeNotes.length !== 0) {
    return (
      <div className="notes-list">
        {activeNotes.map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="notes-list__empty-message">
        <p> Tidak ada catatan aktif</p>
      </div>
    );
  }
};

export default NoteList;
