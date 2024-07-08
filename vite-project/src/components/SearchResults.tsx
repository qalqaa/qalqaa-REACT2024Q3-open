import React from "react";

interface IResult {
  name: string;
  eye_color?: string;
  gender?: string;
}

interface ISearchResultsProps {
  results: IResult[];
}

const SearchResults: React.FC<ISearchResultsProps> = ({ results }) => {
  if (!results || results.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <div className="card-list">
      {results.map((result, index) => (
        <div className="flex col card" key={index}>
          <h3>{result.name}</h3>
          <span>Gender: {result.gender}</span>
          <span>Eye сolor: {result.eye_color}</span>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
