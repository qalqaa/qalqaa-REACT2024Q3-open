import React, { useEffect, useState } from "react";

interface ISearchInputProps {
  onSearch: (searchTerm: string) => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const savedTerm = localStorage.getItem("searchTerm");
    if (savedTerm) {
      setSearchTerm(savedTerm);
    }
  }, []);

  const handleSearch = () => {
    localStorage.setItem("searchTerm", searchTerm);
    onSearch(searchTerm);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchInput;
