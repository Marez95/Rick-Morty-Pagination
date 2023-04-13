import React, { Component } from "react";
import Pagination from "../Pagination";
import Card from "../Card";
import "./wrapper.scss";

export default function Wrapper ({nextPage, prevPage, setPage, page, maxPage, characters, setSelectedChar}) {  
    return (
      <div>
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          setPage={setPage}
          page={page}
        />
        <div className="card-wrapper">
          {characters.map((element) => (
            <Card char={element} setSelectedChar={setSelectedChar} />
          ))}
        </div>
      </div>
    );
  }

