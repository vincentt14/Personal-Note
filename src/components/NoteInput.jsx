import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      sisaChar: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
    console.log(this.state.title);
    if (event.target.value.length > 50) {
      window.alert("stop");
    }
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitHandler}>
        <p>Buat Catatan</p>
        <p className="note-input__title__char-limit">Sisa karakter: {this.state.sisaChar}</p>
        <input className="note-input__title" value={this.state.title} onChange={this.onTitleChangeHandler} />
        <textarea className="note-input__body" value={this.state.body} onChange={this.onBodyChangeHandler} />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NoteInput;
