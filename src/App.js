import logo from './logo.svg';
import { useEffect } from "react";
import styles from './App.module.css';
import React, { Component }  from 'react';
import { Title } from "./Component.js";

function App() {
  useEffect(() => {
    console.log(styles);
  }, [])

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Title>{process.env.NODE_ENV}</Title>
        <h3>{process.env.REACT_APP_API_URL}</h3>


        {/* Sadece build alındığında yani development ortamında görünür (diğer ortan production) */}
        {process.env.NODE_ENV === 'development' && (
          <>
            <img src={logo} className={styles.AppLogo} alt="logo" />
          </>
        )}
        {/* *********** */}


        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
