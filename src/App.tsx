import React from 'react';
import './App.css';
import FormTable from '../src/components/form/formTable';

const App: React.FC = () => {
    return (
    <div className="App">
      <header className="App-header">
        <h1>Formularz</h1>
      </header>
      <div>
        <FormTable/>
      </div>
    </div>
  );
};

export default App;
