import React from 'react';

export const AppContext = React.createContext({ data: [], score: 0, setScore: () => {} });