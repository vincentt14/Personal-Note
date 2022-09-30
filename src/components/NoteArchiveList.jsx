import React from "react";
import NoteItem from "./NoteItem";

const NoteArchiveList = ({ notes, onDelete, onArchive }) => {
  const archiveNotes = notes.filter((map) => map.archived === true);

  if (archiveNotes.length !== 0) {
    return (
      <div className="notes-list">
        {archiveNotes.map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="notes-list__empty-message">
        <p> Tidak ada arsip</p>
      </div>
    );
  }
};

export default NoteArchiveList;
