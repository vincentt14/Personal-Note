import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

const NoteItem = ({title, createdAt, body, id, onDelete, onArchive}) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h2 className="note-item__title">{title}</h2>
        <p className="note-item__date">{createdAt}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete}/>
        <ArchiveButton id={id} onArchive={onArchive}/>
      </div>
    </div>
  );
};

export default NoteItem;
