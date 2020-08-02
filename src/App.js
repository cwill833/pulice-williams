import React from 'react';
import styles from './App.module.scss'
function App() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.menuPlusContent}>
        <div>SideBar Menu</div>
        <div>middle content (this will be a switch component)</div>
      </div>
      <div>footer component</div>
    </div>
  );
}

export default App;
