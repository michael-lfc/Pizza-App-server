import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import { pizzaToppings, pizzaPrices } from "./utils/pizza.js";
import pizzaRoutes from "./routes/pizzas.js";

dotenv.config();

const app = express();
// app.use(cors());

// app.use(cors({
//   origin: "http://localhost:5173", // only allow your frontend dev server
// }));

app.use(cors({
  origin: "http://localhost:5173",  // your frontend dev server
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));


app.use(express.json());

app.use("/api/pizzas", pizzaRoutes);

app.get("/", (req, res) => {
  res.send("Pizza API is live 🍕");
});


export default app;