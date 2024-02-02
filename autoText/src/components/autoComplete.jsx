import React, { useEffect, useState } from "react";
import Resources from "./../resources/countryData.json";
import "./../components/AutoComplete.css";

const AutoComplete = () => {
  const [value, setValue] = useState("");
  const [suggestion, setsuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const takingInputFromTextBox = (item) => {
    setValue(item.target.value.toLowerCase());
  };

  const handleSuggestionClick = (selectedItem) => {
    setValue(selectedItem.name.toLowerCase());
    setsuggestion([]);
    setShowSuggestions(false);
  };

  useEffect(() => {
    const source = Resources.filter((names) =>
      names.name.toLowerCase().includes(value)
    );
    setsuggestion(source);
    setShowSuggestions(value.length > 0);
  }, [value]);

  return (
    <>
      <div className="parent-container">
        <h1>Enter Country Name</h1>
        <div className="innerDiv">
        <input
          type="text"
          placeholder="Enter country name"
          onChange={takingInputFromTextBox}
        />
        <button>Search</button>
        </div>
        <div className="suggestion-container">
        {showSuggestions &&
          suggestion.map((item, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(item)}
            >
              {item.name}
            </div>
          ))}
      </div>
      </div>
    </>
  );
};

export default AutoComplete;
