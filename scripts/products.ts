// import { db } from "../constants/firebaseConfig";

// // Fetch all products
// export const getProducts = async () => {
//   const snapshot = await db.collection("products").get();
//   return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// };

// // Add a new product
// export const addProduct = async (product: { name: string; price: number; description: string }) => {
//   const docRef = await db.collection("products").add(product);
//   return { id: docRef.id, ...product };
// };
