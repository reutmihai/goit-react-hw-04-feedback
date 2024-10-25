import React from "react";
import styles from '../Options/Options.module.css';

const Options = ({ options, onAddFeedback }) => {
  return (
    <div className={styles['feedback-options']}>
      {options.map((option) => (
        <button
          className={styles[`${option}-btn`]}
          key={option}
          onClick={() => onAddFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
