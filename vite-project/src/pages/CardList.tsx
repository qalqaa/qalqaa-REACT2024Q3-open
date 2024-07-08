import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";
import ErrorBoundary from "../components/ErrorBoundry";
import axios from "axios";
import "../App.css";
import Loader from "../components/Loader";

interface IResult {
  name: string;
  eye_color?: string;
  gender?: string;
}

const CardList: React.FC = () => {
  const [results, setResults] = useState<IResult[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getData(localStorage.getItem("searchTerm") || "");
  }, []);

  const getData = async (searchTerm: string) => {
    const url = searchTerm
      ? `https://swapi.dev/api/people/?search=${searchTerm}`
      : `https://swapi.dev/api/people/`;
    setIsLoading(true);
    try {
      const res = await axios.get(url);
      setResults(res.data.results);
    } catch (error) {
      console.error("Error", error);
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const throwError = () => {
    throw new Error("Test error");
  };

  return (
    <ErrorBoundary>
      <div className="flex input">
        <SearchInput onSearch={getData} />
        <button onClick={throwError}>Throw Error</button>
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
};

export default CardList;
