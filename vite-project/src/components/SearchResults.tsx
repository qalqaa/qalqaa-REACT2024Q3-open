import React from "react";

interface IResult {
  name: string;
  description: string;
}

interface ISearchResultsProps {
  results: IResult[];
}

class SearchResults extends React.Component<ISearchResultsProps> {
  render() {
    const { results } = this.props;

    if (!results || results.length === 0) {
      return <p>No results found.</p>;
    }

    return (
      <div>
        {results.map((result, index) => (
          <div key={index}>
            <h3>{result.name}</h3>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResults;
