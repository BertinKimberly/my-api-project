import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import ScriptureCard from "../components/ScriptureCard";

const Scriptures = () => {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [scriptures, setScriptures] = useState([]);

  const fetchVerses = async () => {
    const url = `https://bible-search.p.rapidapi.com/books-by-name?bookName=${searchTerm}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1ec3413504msh1dfcafc2c42e638p16453cjsn90e6b472ab25",
        "X-RapidAPI-Host": "bible-search.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      if (Array.isArray(result)) {
        setScriptures(result);
      } else {
        setScriptures([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchVerses();
    }
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
    console.log(searchTerm);
  };

  return (
    <div className="container">
      <div className="form">
        <form onSubmit={handleSubmit} className="d-flex">
          <input type="text" value={input} onChange={handleInputChange} />
          <button type="submit" className="btn btn-outline-dark">
            <FaSearch />
          </button>
        </form>
      </div>
      <div>
        {scriptures.map((item, idx) => (
          <div key={idx} >
            <ScriptureCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scriptures;
