import React, { useState } from 'react';
import './App.css';
import { AppContext } from './AppContext';
import Game from './Game';
import { apiStates, useApi } from './useApi.js'

function App() {
  const { state, error, data } = useApi('https://restcountries.eu/rest/v2/all');

  switch (state) {
    case apiStates.ERROR:
      return <p>ERROR: {error || 'General error'}</p>;
    case apiStates.SUCCESS:
      return (
        <React.Fragment>
          <AppContext.Provider value={{ data }}>
            <Game />
          </AppContext.Provider>
        </React.Fragment>
      );
    default:
      return <p>loading..</p>;
  }
}

export default App;
