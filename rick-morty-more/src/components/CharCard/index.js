import "./style.css";
import { useState } from "react";

const CharCard = ({ char }) => {
  const [status, setStatus] = useState("Alive");

  const statusPerson = (test) => {
    if (test === "Dead") {
      return "card dead";
    }

    if (test === "Alive") {
      return "card alive";
    }

    return "card unknown";
  };

  const formatName = (name) => {
    if (name.length > 15) {
      return name.slice(0, 15) + "...";
    }
    return name;
  };

  return (
    <div className={statusPerson(char.status)}>
      <img src={char.image} alt={char.image}></img>
      <label>Name: {formatName(char.name)}</label>
      <label>Status: {char.status}</label>
      <label>Species: {char.species}</label>
      <label>Gender:{char.gender}</label>
    </div>
  );
};

export default CharCard;
