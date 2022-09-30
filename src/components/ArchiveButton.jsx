import React from "react";

const ArchiveButton = ({ id, onArchive, archived }) => {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {archived === true ? `Undo` : "Archive"}
    </button>
  );
};

export default ArchiveButton;
