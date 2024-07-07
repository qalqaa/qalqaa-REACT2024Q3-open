import { Component } from "react";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";
import ErrorBoundary from "./components/ErrorBoundry";
import axios from "axios";
import "./App.css";

interface IAppState {
  results: IResult[];
  error: Error | null;
}

interface IResult {
  name: string;
  description: string;
}

interface IProps {}

class App extends Component<IProps, IAppState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      results: [],
      error: null,
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
      this.setState({ error: error as Error });
    }
  };

  throwError = () => {
    throw new Error("Test error");
  };

  render() {
    const { results, error } = this.state;

    return (
      <ErrorBoundary>
        <SearchInput onSearch={this.getData} />
        <button onClick={this.throwError}>Throw Error</button>
        {error ? (
          <p>Error occurred while fetching data.</p>
        ) : (
          <SearchResults results={results} />
        )}
      </ErrorBoundary>
    );
  }
}

export default App;
