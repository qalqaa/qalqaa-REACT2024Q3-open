import { Component } from "react";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";
import axios from "axios";
import "./App.css";

interface IAppState {
  results: IResult[];
}

interface IResult {
  name: string;
  description: string;
}

class App extends Component<IResult, IAppState> {
  constructor(props: IResult) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    this.getData(localStorage.getItem("searchTerm") || "");
  }

  getData = async (searchTerm: string) => {
    const url = searchTerm
      ? `https://swapi.dev/api/people/?search=${searchTerm}`
      : `https://swapi.dev/api/people/`;

    try {
      const res = await axios.get(url);
      this.setState({ results: res.data.results });
    } catch (error) {
      console.error("Error", error);
    }
  };

  render() {
    const { results } = this.state;

    return (
      <>
        <SearchInput onSearch={this.getData} />
        <SearchResults results={results} />
      </>
    );
  }
}

export default App;
