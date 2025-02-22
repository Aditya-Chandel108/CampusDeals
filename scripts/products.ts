import { db } from "../constants/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

// Fetch all products
export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Add a new product
export const addProduct = async (product: { name: string; price: number; description: string }) => {
  const docRef = await addDoc(collection(db, "products"), product);
  return { id: docRef.id, ...product };
};
