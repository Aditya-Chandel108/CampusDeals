import { collection, getDocs } from "firebase/firestore";
import { db } from "../constants/firebaseConfig";

export const getProducts = async () => {
  const productsCol = collection(db, "products");
  const productSnapshot = await getDocs(productsCol);
  return productSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
