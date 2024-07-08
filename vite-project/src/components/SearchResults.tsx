import React from "react";
import Card from "./Card";

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
        <div key={index}>
          <Card result={result} />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
