import React, { useState } from "react";
import styled from "../style.module.css";
import axios from "axios";

const Gallery = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState("");
  console.log(results);

  //LK7_MZChjuC42-Kjx0iZXLqezbQiOprjOdaxA75i5rE
  const fetchImage = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?client_id=LK7_MZChjuC42-Kjx0iZXLqezbQiOprjOdaxA75i5rE&query=${value}`
      )
      .then((response) => {
        setResults(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className={styled["gallery"]}>
        {results &&
          results.map((item) => <img src={item.urls.regular} alt="" />)}
      </div>{ }
      <div className={styled["header"]}>
        <span>جستجو</span>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={fetchImage}>ارسال</button>
      </div>
    </div>
  );
};

export default Gallery;
