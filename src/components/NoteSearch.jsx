import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    };

    this.onSearchFilled = this.onSearchFilled.bind(this);
  }

  onSearchFilled(event) {
    this.setState(() => {
      return {
        searchTerm: event.target.value,
      };
    });
    console.log(this.state.searchTerm);
  }

  render() {
    return (
      <form className="note-search">
        <input placeholder="Cari catatan" value={this.state.searchTerm} onChange={this.onSearchFilled} />
      </form>
    );
  }
}

export default NoteSearch;
