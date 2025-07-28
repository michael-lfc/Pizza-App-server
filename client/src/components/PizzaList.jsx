import React, { useEffect, useState } from 'react';
import { getPizzas, deletePizza } from '../api/pizzas';

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPizzas();
      console.log("Fetched pizzas:", data);
      setPizzas(data);
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deletePizza(id);
    setPizzas(pizzas.filter(pizza => pizza._id !== id));
  };

  return (
    <div>
      <h2>Pizza List</h2>
      {pizzas.map((pizza) => (
        <div key={pizza._id} className="pizza-card">
          <p><strong>Size:</strong> {pizza.size}</p>
          <p><strong>Base Price:</strong> ${pizza.basePrice}</p>
          <p><strong>Total Price:</strong> ${pizza.totalPrice}</p>
          <p><strong>Toppings:</strong> {pizza.toppings.map(t => t.name).join(', ')}</p>
          <button onClick={() => handleDelete(pizza._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PizzaList;
