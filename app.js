import express from "express";
import cors from "cors";
import pizzaRoutes from "./routes/pizzas.js";

const app = express();

// const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "*";

// app.use(cors({
//   origin: FRONTEND_ORIGIN,
//   credentials: true,
// }));
app.use(cors())
app.use(express.json());

app.use("/api/pizzas", pizzaRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Pizza API" });
});

export default app;
