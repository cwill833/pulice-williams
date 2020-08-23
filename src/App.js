import React from 'react';
import styles from './App.module.scss'
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import Content from './components/Content/Content';
import SideBar from './components/SideBar/SideBar';



function App() {
  return (
    <div>
      <HomePage />  
      <div className={styles.menuPlusContent}>
        <SideBar />
        <Content />
      </div>
      <Footer />
      </div>
  );
}

export default App;
