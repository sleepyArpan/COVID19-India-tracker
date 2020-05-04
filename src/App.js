import React from 'react';
import styles from './App.module.css';

import { Cards, Chart, StatePicker } from './components/index';
import { fetchData } from './api';

class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <StatePicker />
        <Chart />
      </div>
    );
  }
}

export default App;
