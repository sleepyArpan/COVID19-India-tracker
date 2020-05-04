import React from 'react';
import styles from './App.module.css';

import { Cards, Chart, StatePicker } from './components/index';

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Chart />
        <StatePicker />
      </div>
    );
  }
}

export default App;
