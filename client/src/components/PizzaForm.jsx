import React, { useState } from 'react';
import { createPizza } from '../api/pizzas';

function PizzaForm({ onPizzaAdded }) {
  const [size, setSize] = useState('medium');
  const [basePrice, setBasePrice] = useState('');
  const [toppings, setToppings] = useState([{ name: '', price: '', vegetarian: false }]);

  const handleToppingChange = (index, field, value) => {
    const newToppings = [...toppings];
    newToppings[index][field] = field === 'vegetarian' ? value === 'true' : value;
    setToppings(newToppings);
  };

  const addTopping = () => {
    setToppings([...toppings, { name: '', price: '', vegetarian: false }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toppingPrices = toppings.reduce((sum, t) => sum + parseFloat(t.price || 0), 0);
    const totalPrice = parseFloat(basePrice) + toppingPrices;

    const pizzaData = {
      size,
      basePrice: parseFloat(basePrice),
      totalPrice,
      toppings: toppings.map(t => ({
        name: t.name,
        price: parseFloat(t.price),
        vegetarian: t.vegetarian,
      })),
    };

    await createPizza(pizzaData);
    onPizzaAdded();
    setSize('medium');
    setBasePrice('');
    setToppings([{ name: '', price: '', vegetarian: false }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Pizza</h2>
      <label>Size:
        <select value={size} onChange={e => setSize(e.target.value)}>
          <option>small</option>
          <option>medium</option>
          <option>large</option>
          <option>extraLarge</option>
        </select>
      </label>

      <label>Base Price:
        <input type="number" value={basePrice} onChange={e => setBasePrice(e.target.value)} />
      </label>

      <h3>Toppings</h3>
      {toppings.map((topping, i) => (
        <div key={i}>
          <input
            placeholder="Topping name"
            value={topping.name}
            onChange={e => handleToppingChange(i, 'name', e.target.value)}
          />
          <input
            placeholder="Price"
            type="number"
            value={topping.price}
            onChange={e => handleToppingChange(i, 'price', e.target.value)}
          />
          <select value={topping.vegetarian} onChange={e => handleToppingChange(i, 'vegetarian', e.target.value)}>
            <option value="false">Non-Veg</option>
            <option value="true">Veg</option>
          </select>
        </div>
      ))}

      <button type="button" onClick={addTopping}>+ Add Topping</button>
      <br /><br />
      <button type="submit">Create Pizza</button>
    </form>
  );
}

export default PizzaForm;
