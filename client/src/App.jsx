import React, { useState } from 'react';
import './App.css';
import PizzaForm from './components/PizzaForm';
import PizzaList from './components/PizzaList';

function App() {
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => setRefresh(!refresh);

  return (
    <div className="App">
      <h1>🍕 Pizza Creator</h1>
      <PizzaForm onPizzaAdded={handleRefresh} />
      <PizzaList key={refresh} />
    </div>
  );
}

export default App;
