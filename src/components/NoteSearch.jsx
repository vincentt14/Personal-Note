import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.onSearchFilled = this.onSearchFilled.bind(this);
  }

  onSearchFilled(event) {
    // console.log(event.target.value);
    this.props.seachEngineWannabe(event.target.value);
  }

  render() {
    return (
      <div className="note-search">
        <input placeholder="Cari catatan" onChange={this.onSearchFilled} />
      </div>
    );
  }
}

export default NoteSearch;
