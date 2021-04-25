import "./App.css";
import axios from "axios";
import React, {useState} from "react";

function App() {
  const [year, setYear] = useState("2015");
  const [make, setMake] = useState("");
  const [type, setType] = useState("");
  const [useYear, setUseYear] = useState(true);
  const [results, setResults] = useState([]);

  function search() {
    if (make !== "") {
      if (useYear && type !== "") {
        axios
          .get(
            `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}/vehicletype/${type}?format=json`
          )
          .then(function (response) {
            console.log(response);
            setResults(response.data.Results);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            console.log(make);
          });
      } else if (useYear) {
        axios
          .get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/modelyear/${year}?format=json`)
          .then(function (response) {
            console.log(response);
            setResults(response.data.Results);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {});
      } else if (!type === "") {
        axios
          .get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${make}/vehicletype/${type}?format=json`)
          .then(function (response) {
            console.log(response);
            setResults(response.data.Results);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            console.log(make);
          });
      } else {
        axios
          .get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`)

          .then(function (response) {
            console.log(response.data.Results);
            setResults(response.data.Results);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {});
      }
    }
  }

  return (
    <div className="App">
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
      <div className="resultsWrapper">
        <div className="resultsHeader">
          <div className="makeID">Make ID</div>
          {results[0]?.hasOwnProperty("VehicleTypeId") && <div className="typeID">Type ID</div>}
          <div className="modelID">Model ID</div>
          <div className="makeName">Make Name</div>
          {results[0]?.hasOwnProperty("VehicleTypeName") && <div className="typeName">Type Name</div>}
          <div className="modelName">Model Name</div>
        </div>
        <div className="resultsInfo">
          {results.length === 0 ? (
            <h1>No Results</h1>
          ) : (
            results.map((result, key) => (
              <div className="results" key={key}>
                <div className="makeID">{result.Make_ID}</div>
                {result.VehicleTypeId && <div className="typeID">{result.VehicleTypeId}</div>}
                <div className="modelID">{result.Model_ID}</div>
                <div className="makeName">{result.Make_Name}</div>
                {result.VehicleTypeName && <div className="typeName">{result.VehicleTypeName}</div>}
                <div className="modelName">{result.Model_Name}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
