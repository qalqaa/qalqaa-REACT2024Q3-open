import { Component } from 'react';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import ErrorBoundary from './components/ErrorBoundary';
import axios from 'axios';
import './App.css';
import Loader from './components/Loader';
import BuggyComponent from './components/BuggyComponent';

interface IAppState {
  results: IResult[];
  error: Error | null;
  isLoading: boolean;
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
      isLoading: false,
    };
  }

  componentDidMount() {
    this.getData(localStorage.getItem('searchTerm') || '');
  }

  getData = async (searchTerm: string) => {
    const url = searchTerm
      ? `https://swapi.dev/api/people/?search=${searchTerm}`
      : `https://swapi.dev/api/people/`;
    this.setState({ isLoading: true });
    try {
      const res = await axios.get(url);
      this.setState({ results: res.data.results });
    } catch (error) {
      console.error('Error', error);
      this.setState({ error: error as Error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  throwError = () => {
    throw new Error('Test error');
  };

  render() {
    const { results, error, isLoading } = this.state;

    return (
      <ErrorBoundary>
        <div className='flex'>
          <SearchInput onSearch={this.getData} />
          <BuggyComponent />
        </div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <p>Error occurred while fetching data.</p>
        ) : (
          <SearchResults results={results} />
        )}
      </ErrorBoundary>
    );
  }
}

export default App;
