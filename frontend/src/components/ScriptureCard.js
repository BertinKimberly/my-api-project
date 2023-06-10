import React from "react";

const ScriptureCard = ({ item }) => {
  return (
    <div className="scripture">
      <h4>chapter {item.chapter}</h4>
      <p>Verse {item.verse}</p>
      <div>{item.text}</div>
    </div>
  );
};

export default ScriptureCard;
