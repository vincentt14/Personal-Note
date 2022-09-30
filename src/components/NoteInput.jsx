import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limitChar: 50,
    };

    this.textInput = React.createRef();

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
    console.log(event.target.value);

    this.setState({ limitChar: 50 - event.target.value.length });
    if (event.target.value.length > 50) {
      this.textInput.current.maxLength = "50";
    }
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
    console.log(event.target.value);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    console.log(this.state.title);
    console.log(this.state.body);
    this.props.addNote({ title: this.state.title, body: this.state.body });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitHandler}>
        <p>Buat Catatan</p>

        <p className={`note-input__title__char-limit ${this.state.limitChar <= 0 ? "red" : ""}`}>Sisa karakter: {this.state.limitChar}</p>
        <input ref={this.textInput} className="note-input__title" onChange={this.onTitleChangeHandler} />
        <textarea className="note-input__body" onChange={this.onBodyChangeHandler} />
        <button type="submit">Buat</button>
      </form>
    );
  }
}
export default NoteInput;
