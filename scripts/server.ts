// import express, { Request, Response } from "express";
// import cors from "cors";
// import { getProducts } from "./products";

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/products", async (req: Request, res: Response) => {
//   try {
//     const products = await getProducts();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch products" });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
