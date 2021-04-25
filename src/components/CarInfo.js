import React from "react";

export default function CarInfo({result}) {
  return (
    <div className="results">
      <div className="makeID">{result.Make_ID}</div>
      {result.VehicleTypeId && <div className="typeID">{result.VehicleTypeId}</div>}
      <div className="modelID">{result.Model_ID}</div>
      <div className="makeName">{result.Make_Name}</div>
      {result.VehicleTypeName && <div className="typeName">{result.VehicleTypeName}</div>}
      <div className="modelName">{result.Model_Name}</div>
    </div>
  );
}
