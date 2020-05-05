import React from 'react';
import styles from './App.module.css';

import { Cards, StatePicker } from './components/index';
import { fetchData, fetchStates } from './api';
import coronaimage from './images/image.png';

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
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <img className='{styles.image}' src={coronaimage} alt='Corona symbol' />
        <StatePicker handleStateChange={this.handleStateChange} />
        <Cards data={data} />
      </div>
    );
  }
}

export default App;
