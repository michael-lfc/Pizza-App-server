const API_BASE = import.meta.env.VITE_API_BASE;

export async function getPizzas() {
  const res = await fetch(`${API_BASE}/pizzas`);
  if (!res.ok) throw new Error("Failed to fetch pizzas");
  return await res.json();
}

export async function createPizza(pizzaData) {
  const res = await fetch(`${API_BASE}/pizzas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pizzaData),
  });
  if (!res.ok) throw new Error("Failed to create pizza");
  return await res.json();
}

export async function deletePizza(id) {
  const res = await fetch(`${API_BASE}/pizzas/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete pizza");
  return await res.json();
}
