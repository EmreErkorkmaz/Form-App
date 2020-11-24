import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Spinner from '../../components/Spinner/Spinner';

export function Results() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    axios.get("/results.json").then((res) => {
      let fetchedResults = [];
      for (let key in res.data) {
        fetchedResults.push({ ...res.data[key], id: key });
      }
      setResults(fetchedResults);
    });
  }, []);

  console.log(results);

  let formRegisters = <Spinner/>;

  if (results) {
    formRegisters = results.map((result) => (
      <div key={result.id}>
        <p>{"{"}</p>

        <p>"nameSurname" : "{result.nameSurname}",</p>
        <p>"gender" : "{result.gender}",</p>
        <p>"address" : "{result.address}",</p>
        <p>"graduationStatus" : "{result.graduationStatus}",</p>
        <p>{"},"}</p>
      </div>
    ));
  }

  return (
    <div>
      <h2>Mevcut Kayıtlar:</h2>
      {formRegisters}
    </div>
  );
}
