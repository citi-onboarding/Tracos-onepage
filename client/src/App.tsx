import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { TattooedPeopleAdvantagesTitle } from './pages';
import { ContainerTattooedPeopleAdvantages }  from './section'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TattooedPeopleAdvantagesTitle/>
      <ContainerTattooedPeopleAdvantages/>      
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
