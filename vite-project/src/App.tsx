import { useCallback, useEffect, useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";
import axios from "axios";

interface IResults {
  name: string;
  description: string;
}

function App() {
  const [results, setResults] = useState<IResults[]>([]);

  const getData = useCallback(async (searchTerm: string | null) => {
    const url = searchTerm
      ? `https://swapi.dev/api/people/?search=${searchTerm}`
      : `https://swapi.dev/api/people/`;
    try {
      const res = await axios.get(url);
      setResults(res.data.results);
    } catch (error) {
      console.error("Error", error);
    }
  }, []);

  useEffect(() => {
    const savedTerm = localStorage.getItem("searchTerm") || "";
    getData(savedTerm);
  }, [getData]);

  return (
    <>
      <SearchInput onSearch={getData} />
      <SearchResults results={results} />
    </>
  );
}

export default App;
