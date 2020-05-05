import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchStates } from '../../api';

import styles from './StatePicker.module.css';

const StatePicker = ({ handleStateChange }) => {
  const [fetchedStates, setFetchedStates] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedStates(await fetchStates());
    };

    fetchAPI();
  }, [setFetchedStates]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=''
        onChange={(e) => handleStateChange(e.target.value)}>
        {fetchedStates.map((state, i) => (
          <option key={i} value={state}>
            {state}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default StatePicker;
