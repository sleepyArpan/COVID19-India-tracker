import React from 'react';
import styles from './App.module.css';

import { Cards, Chart, StatePicker } from './components/index';
import { fetchData, fetchStates } from './api';

class App extends React.Component {
  state = {
    data: {},
    state: '',
  };

  handleStateChange = async (state) => {
    const fetchedData = await fetchStates(state);
    this.setState({ data: fetchedData, state: state });
  };

  async componentDidMount() {
    const fetcheddata = await fetchData();
    this.setState({ data: fetcheddata });
  }

  render() {
    const { data, state } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <StatePicker handleStateChange={this.handleStateChange} />
        <Chart data={data} state={state} />
      </div>
    );
  }
}

export default App;
