import React from 'react';
// Routers
import { Routes, Route } from 'react-router-dom';

// Redux store
import { Provider } from 'react-redux';
import store from './redux/configureStore';

// Components
import Greeting from './components/Greeting';

const App = () => (
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </Provider>
);

export default App;
