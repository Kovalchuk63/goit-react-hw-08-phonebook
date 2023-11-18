import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { App } from 'App';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

const theme = {
  bgColorSection: '#30D4B9',
  radius: '5px',
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>
);
