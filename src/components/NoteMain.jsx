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
      currentNotes: newData,
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    this.seachEngineWannabe = this.seachEngineWannabe.bind(this);
  }

  seachEngineWannabe(character) {
    console.log(character);
    if (character === "") {
      this.setState({ currentNotes: this.state.notes });
    }

    const tokens = character
      .toLowerCase()
      .split(" ")
      .filter((token) => token.trim() !== "");

    if (tokens.length) {
      let searchTermRegex = new RegExp(tokens.join("|"), "gim");
      const filteredNotes = this.state.notes.filter((note) => {
        let noteString = "";
        noteString += note.title.toString().toLowerCase().trim() + " ";
        return noteString.match(searchTermRegex);
      });
      console.log(filteredNotes);
      this.setState({ currentNotes: filteredNotes });
    }
  }

  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: notes, currentNotes: notes });
  }

  onArchiveEventHandler(id) {
    const notes = this.state.notes;
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        notes[i].archived = !notes[i].archived;
      }
    }
    this.setState({ notes: notes, currentNotes: notes });
    console.log(notes);
  }

  onAddNoteEventHandler({ title, body }) {
    const notes = this.state.notes;
    notes.push({
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: showFormattedDate(new Date()),
    });
    this.setState({ notes: notes, currentNotes: notes });
  }

  render() {
    return (
      <div>
        <NoteAppHeader seachEngineWannabe={this.seachEngineWannabe} />
        <NoteAppBody notes={this.state.currentNotes} onDelete={this.onDeleteEventHandler} onArchive={this.onArchiveEventHandler} addNote={this.onAddNoteEventHandler} />
      </div>
    );
  }
}

export default NoteMain;
