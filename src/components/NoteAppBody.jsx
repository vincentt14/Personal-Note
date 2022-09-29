import React from "react";
import NoteArchiveList from "./NoteArchiveList";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

const NoteAppBody = ({ notes, onDelete, addNote, onArchive }) => {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive} />
      <h2>Arsip</h2>
      <NoteArchiveList notes={notes} onDelete={onDelete} />
    </div>
  );
};

export default NoteAppBody;
