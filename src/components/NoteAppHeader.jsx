import React from "react";
import NoteSearch from "./NoteSearch";

const NoteAppHeader = ({ seachEngineWannabe }) => {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NoteSearch seachEngineWannabe={seachEngineWannabe} />
    </div>
  );
};

export default NoteAppHeader;
