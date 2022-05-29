import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Tattooists } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Tattooists/>
    </ThemeProvider>
  );
}

export default App;
