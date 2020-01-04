import React from 'react';
import styles from './List.module.scss'


export default function List() {
  const [count, setCount] = React.useState<number>(0);
  function refresh() {
    setCount(count + 1);
  }
  return (
    <div className={styles.homeList}>
      {count}
      < i className={`icon-refresh ${styles.refresh}`} onClick={() => { refresh() }}></i>
    </div >
  );
}
