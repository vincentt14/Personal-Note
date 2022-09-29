import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onArchive, onSearch }) => {
  if (notes.length !== 0) {
    return (
      <div className="notes-list">
        {notes.map((note) => {
          if (note.archived === false) {
            return <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />;
          }
        })}
      </div>
    );
  } else {
    return (
      <div className="notes-list__empty-message">
        <p> Tidak ada catatan</p>
      </div>
    );
  }
};

export default NoteList;


// ini yg aku lihat di utub dia pakai filter
// .filter((note) => {
//   if(onSearch == ""){
//     return note
//   }else if(note.title.toLowerCase().includes(onSearch.toLowerCase())){
//     return note
//   }
// })

// nanti dia returnnnya gini 
// <div className="notes-list">
//   {notes.filter((note) => {
//     if(onSearch == ""){
//       return note
//     }else if(note.title.toLowerCase().includes(onSearch.toLowerCase())){
//       return note
//     }
//   }).map((note) => {
//     if (note.archived === false) {
//       return <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />;
//     }
//   })}
// </div>