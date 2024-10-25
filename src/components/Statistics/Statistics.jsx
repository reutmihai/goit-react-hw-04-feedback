import React from 'react';
import styles from '../Statistics/Statistics.module.css';

const Statistics = ({ feedback, total, positiveFeedback }) => {
  return (
    <div className={styles['container-list']}>
        <ul className={styles['feedback-list']}>
        {Object.keys(feedback).map(key => {
            return (
            <li key={key}>
                {key}: {feedback[key]}
            </li>
            )
        })}
        </ul>
        <span>Total feedback: {total}</span>
        <span>Positive feedback: {positiveFeedback}</span>
    </div>
  );
}

export default Statistics;