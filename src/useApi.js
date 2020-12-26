import React from 'react';

export const apiStates = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const useApi = url => {
  let [data, setData] = React.useState({
    state: apiStates.LOADING,
    error: '',
    data: [],
  });

  React.useEffect(() => {
    console.log("fetching");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData({
          state: apiStates.SUCCESS,
          error: '',
          data: data,
        });
      })
      .catch(() => {
        setData({
          state: apiStates.ERROR,
          error: '',
          data: data,
        });
      });
  }, []);
  return data;
};