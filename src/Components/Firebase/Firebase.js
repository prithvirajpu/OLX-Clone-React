import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { collection, getFirestore, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBJDkoGzKM-Yc6KZ_fKj1ghTvSsM5ufuo",
  authDomain: "olx-clone-b18c9.firebaseapp.com",
  projectId: "olx-clone-b18c9",
  storageBucket: "olx-clone-b18c9.firebasestorage.app",
  messagingSenderId: "125150478391",
  appId: "1:125150478391:web:fddf872735d9f434237fb2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const firestore = getFirestore(app);

const fetchFromFireStore = async () => {
  try {
    const productCollection = collection(firestore, "products");
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("fetched products from Firestore:", productList);
    return productList;
  } catch (error) {
    console.error(" Error fetching products from Firestore:", error);
    return [];
  }
};

export { auth, provider, storage, firestore, fetchFromFireStore };
