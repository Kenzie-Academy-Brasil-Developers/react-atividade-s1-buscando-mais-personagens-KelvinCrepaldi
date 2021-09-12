import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";
import PageSelect from "./components/PageSelect";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [page]);

  const pageNext = () => {
    page < 15 && setPage(page + 1);
  };

  const pagePrevious = () => {
    page > 1 && setPage(page - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Characters characterList={characterList} />
        <PageSelect pageNext={pageNext} pagePrevious={pagePrevious} />
      </header>
    </div>
  );
}

export default App;
