import React from "react";

interface ISearchInputProps {
  onSearch: (searchTerm: string) => void;
}

interface ISearchInputState {
  searchTerm: string;
}

class SearchInput extends React.Component<
  ISearchInputProps,
  ISearchInputState
> {
  constructor(props: ISearchInputProps) {
    super(props);
    this.state = { searchTerm: "" };
  }

  handleSearch = () => {
    localStorage.setItem("searchTerm", this.state.searchTerm);
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchInput;
