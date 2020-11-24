import React, { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import axios from "../../axios";
import styles from './Form.module.css';
import { Input } from "../../components/Input/Input";

export function Form(props) {
  const [data, setData] = useState("");
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios
      .get("/controls.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(formData);

  let formInputs = <Spinner />;

  const onChangeOfValue = (value, name) => {
    setFormData({...formData, [name]: value });
  }

  if(data){
      formInputs = data.map((input, index) => (
        <Input key={index} input={input} onChangeHandler={onChangeOfValue} value={data[input.name]}/>
      ));
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios.post('/results.json', formData).catch(err => console.log(err));
  }

  return(
      <div className={styles.Form}>
          <form onSubmit={onSubmitHandler}>
              {formInputs}
              <button hidden={data ? false : true}>Onayla</button>
          </form>
      </div>
  )

  
}
