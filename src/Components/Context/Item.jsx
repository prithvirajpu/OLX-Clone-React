import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { firestore } from "../Firebase/Firebase";

const Context = createContext(null);

// ✅ Rename this to follow React hook naming conventions
export const useItemsContext = () => useContext(Context);

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchItemsFromFireStore = async () => {
      try {
        const productsCollection = collection(firestore, "products"); 
        const productSnapshot = await getDocs(productsCollection);
        const productsList = productSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(productsList);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchItemsFromFireStore();
  }, []);

  return (
    <Context.Provider value={{ items, setItems }}>
      {children}
    </Context.Provider>
  );
};
