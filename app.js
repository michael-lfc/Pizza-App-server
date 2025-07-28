import express from "express";
import cors from "cors";

const app = express();

// const FRONTEND_ORIGIN = "http://localhost:5173"; // Replace with your frontend URL in production

// app.use(cors({
//   origin: FRONTEND_ORIGIN,
//   credentials: true,
// }));
// app.use(cors())

app.use(express.json());
app.use(cors())

// example route
app.get("/api/pizzas", (req, res) => {
  res.json({ message: "Pizzas data!" });
});

export default app;
