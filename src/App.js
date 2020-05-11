import React from 'react';
import './App.css';
import 'typeface-roboto';
import Container from '@material-ui/core/Container';

import Header from './components/Header';
import Inputs from './components/Inputs';
import Outbox from './components/Outbox';

function App() {
  return (
    <Container className="App" maxWidth="sm">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
        <Inputs />
        <Outbox />
      </main>
    </Container>
  );
}

export default App;
