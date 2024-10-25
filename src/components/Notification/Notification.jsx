import React from 'react';
import styles from '../Notification/Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <span className={styles.message}>{message}</span>
  )
}
