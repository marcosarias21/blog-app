import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  ApolloClient, ApolloProvider, HttpLink, InMemoryCache,
} from '@apollo/client';
import { theme } from './theme/theme';
import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
