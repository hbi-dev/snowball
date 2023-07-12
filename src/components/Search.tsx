import React, { useState } from "react";
import { Data } from "../asset/Data";
import Display from "./display";

const Search = () => {
  const [text, setText] = useState("");
  const [skus, setSkus] = useState([]);
  const handleOnClick = () => {
    setSkus(Data);
    setText("");
  };

  return (
    <>
      <div className='search_title'>
        <h1>Sku finder</h1>
      </div>
      <div className='input__wrapper'>
        <input
          type='text'
          placeholder='sku id'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          disabled={!text}
          onClick={handleOnClick}
        >
          Search
        </button>
      </div>
      <Display data={skus} />
    </>
  );
};

export default Search;
