import React from "react";

export default function ResultsHeader({results}) {
  return (
    <div className="resultsHeader">
      <div className="makeID">Make ID</div>
      {results[0]?.hasOwnProperty("VehicleTypeId") && <div className="typeID">Type ID</div>}
      <div className="modelID">Model ID</div>
      <div className="makeName">Make Name</div>
      {results[0]?.hasOwnProperty("VehicleTypeName") && <div className="typeName">Type Name</div>}
      <div className="modelName">Model Name</div>
    </div>
  );
}
