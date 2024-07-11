import React from 'react';

interface IResult {
  name: string;
  eye_color: string;
  hair_color: string;
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
          <div key={index} className='card'>
            <h3>{result.name}</h3>
            <span>Eye Color: {result.eye_color}; </span>
            <span>Hair Color: {result.hair_color}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResults;
