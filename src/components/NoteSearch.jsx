import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };

    this.onSearchFilled = this.onSearchFilled.bind(this)
  }

  onSearchFilled(){
    
  }

  render() {
    return (
      <form className="note-search">
        <input placeholder="Cari catatan" />
      </form>
    );
  }
}

export default NoteSearch;
