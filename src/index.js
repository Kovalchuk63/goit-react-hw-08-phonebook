import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

const theme = {
  bgColorSection: '#30D4B9',
  radius: '5px',
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
            <GlobalStyle />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
