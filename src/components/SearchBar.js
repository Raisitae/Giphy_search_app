import { useState } from "react";

function SearchBar({ onSubmit }) {

  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="term"
          placeholder="What are you looking for today?"
          onChange={handleChange}
          value={term}
        />
        <button onClick={handleSubmit} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
