import "./App.css";
import axios from "axios";
import React, {useState} from "react";
import CarInfo from "./components/CarInfo";
import InputForm from "./components/InputForm";
import ResultsHeader from "./components/ResultsHeader";

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
      } else if (type !== "") {
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
      <InputForm
        type={type}
        setType={setType}
        make={make}
        setMake={setMake}
        year={year}
        setYear={setYear}
        useYear={useYear}
        setUseYear={setUseYear}
        search={search}
      />
      <div className="resultsWrapper">
        <ResultsHeader results={results} />
        <div className="resultsInfo">
          {results.length === 0 ? <h1>No Results</h1> : results.map((result, key) => <CarInfo result={result} key={key} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
