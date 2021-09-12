import "./style.css";
import CharCard from "../CharCard/";

const Characters = ({ characterList }) => {
  return (
    <div className="container">
      <h1>Meus Personagens: </h1>
      <div className="char-container">
        {characterList.map((char) => (
          <CharCard key={char.id} char={char} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
