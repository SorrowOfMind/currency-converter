import React from 'react';
import './App.css';
import 'typeface-roboto';
import Container from '@material-ui/core/Container';

import Header from './components/Header';
import Inputs from './components/Inputs';

function App() {
  return (
    <Container className="App" maxWidth="sm">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Inputs />
      </main>
    </Container>
  );
}

export default App;
