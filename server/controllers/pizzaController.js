// import Pizza from "../models/Pizza.js";

// // Create a new pizza
// export const createPizza = async (req, res) => {
//   try {
//     const newPizza = await Pizza.create(req.body);
//     res.status(201).json({
//       message: "Pizza created successfully",
//       pizza: newPizza,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Get all pizzas
// export const getAllPizzas = async (req, res) => {
//   try {
//     const pizzas = await Pizza.find();
//     res.json(pizzas);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get a single pizza by ID
// export const getPizzaById = async (req, res) => {
//   try {
//     const pizza = await Pizza.findById(req.params.id);
//     if (!pizza) return res.status(404).json({ error: "Pizza not found" });
//     res.json(pizza);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Update a pizza by ID
// export const updatePizza = async (req, res) => {
//   try {
//     const updatedPizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!updatedPizza) return res.status(404).json({ error: "Pizza not found" });

//     res.json({
//       message: "Pizza updated successfully",
//       pizza: updatedPizza,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Delete a pizza by ID
// export const deletePizza = async (req, res) => {
//   try {
//     const deletedPizza = await Pizza.findByIdAndDelete(req.params.id);
//     if (!deletedPizza) return res.status(404).json({ error: "Pizza not found" });

//     res.json({ message: "Pizza deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

import Pizza from "../models/Pizza.js";

export const createPizza = async (req, res) => {
  try {
    const newPizza = await Pizza.create(req.body);
    res.status(201).json({ message: "Pizza created successfully", pizza: newPizza });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPizzaById = async (req, res) => {
  try {
    const pizza = await Pizza.findById(req.params.id);
    if (!pizza) return res.status(404).json({ error: "Pizza not found" });
    res.json(pizza);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePizza = async (req, res) => {
  try {
    const updatedPizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedPizza) return res.status(404).json({ error: "Pizza not found" });
    res.json({ message: "Pizza updated successfully", pizza: updatedPizza });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deletePizza = async (req, res) => {
  try {
    const deletedPizza = await Pizza.findByIdAndDelete(req.params.id);
    if (!deletedPizza) return res.status(404).json({ error: "Pizza not found" });
    res.json({ message: "Pizza deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
