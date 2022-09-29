import React from "react";
import { getInitialData, showFormattedDate } from "../utils/data";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";

class NoteMain extends React.Component {
  constructor(props) {
    super(props);

    const newData = [];
    for (let i = 0; i < getInitialData().length; i++) {
      const { id, title, body, archived } = getInitialData()[i];
      newData.push({
        id: id,
        title: title,
        body: body,
        createdAt: showFormattedDate(getInitialData()[i].createdAt),
        archived: archived,
      });
    }

    this.state = {
      notes: newData,
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
  }

  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveEventHandler(id) {
    const notes = this.state.notes;
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        notes[i].archived = true;
      }
    }
    this.setState({ notes });
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((previousState) => {
      return {
        notes: [
          ...previousState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <div>
        <NoteAppHeader />
        <NoteAppBody notes={this.state.notes} onDelete={this.onDeleteEventHandler} onArchive={this.onArchiveEventHandler} addNote={this.onAddNoteEventHandler} />
      </div>
    );
  }
}

export default NoteMain;
