import React, { useState, useEffect } from "react";
import SinglePage from "./pages/SinglePage";
import MainPage from "./pages/MainPage";
import "./App.scss";

function App(props) {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedChar, setSelectedChar] = useState(null);
  const [maxPage, setMaxPage] = useState(1);

  function fetchData() {
    console.log('object');
    fetch("https://rickandmortyapi.com/api/character/?page=" + page)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setMaxPage(data.info.pages);
      });
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  function setClickedChar(data) {
    setSelectedChar(data);
  }

  function nextPage() {
    if (page < 42) {
      setPage(page + 1);
    }
  }

  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function setClickedPage(num) {
    setPage(num);
  }

  return (
    <div className="App">
      {!selectedChar ? (
        <MainPage
          characters={characters}
          page={page}
          maxPage={maxPage}
          setSelectedChar={setSelectedChar}
          prevPage={prevPage}
          nextPage={nextPage}
          setPage={setClickedPage}
        />
      ) : (
        <SinglePage
          setSelectedChar={setClickedChar}
          selectedChar={selectedChar}
        />
      )}
    </div>
  );
}

export default App;
