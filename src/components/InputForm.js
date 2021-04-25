import React from "react";

export default function InputForm({type, setType, make, setMake, year, setYear, useYear, setUseYear, search}) {
  return (
    <div className="inputFlex">
      <h1>Car Search</h1>
      <div className="input">
        <label>Type</label>
        <input type="name" value={type} onChange={(e) => setType(e.target.value)} placeholder="Car Type"></input>
      </div>
      <div className="input">
        <label>Make</label>
        <input type="name" value={make} onChange={(e) => setMake(e.target.value)} placeholder="Car Make"></input>
      </div>
      <div className="input">
        <label>Year: {year}</label>
        <input
          class="range"
          type="range"
          min="1930"
          max="2022"
          value={year}
          onChange={(e) => setYear(e.target.value)}></input>
      </div>
      <div className="check">
        <input checked={useYear} onClick={() => setUseYear(!useYear)} type="checkbox"></input>
        <label>Use year in search</label>
      </div>
      <button onClick={search}>Search</button>
    </div>
  );
}
