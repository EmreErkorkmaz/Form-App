import React from "react";
import styles from "./Input.module.css";

export function Input(props) {
  let formInput = null;

  if (props.input && !props.input.options) {
    formInput = (
      <div className={styles.Input}>
        <label>{props.input.label}:</label>
        <input
          name={props.input.name}
          required={props.input.required}
          type={props.input.type}
          onChange={(event) =>
            props.onChangeHandler(event.target.value, props.input.name)
          }
          value={props.value}
        />
      </div>
    );
  } else if (props.input.options.length > 0) {
    formInput = (
      <div className={styles.Input}>
        <label>{props.input.label}:</label>
        <select
          name={props.input.name}
          required={props.input.required}
          type={props.input.type}
          onChange={(event) =>
            props.onChangeHandler(event.target.value, props.input.name)
          }
          value={props.value}
        >
        <option value='' selected disabled hidden>Seçiniz</option>
          {props.input.options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  return <div>{formInput}</div>;
}
