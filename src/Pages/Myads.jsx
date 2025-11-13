import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../Components/Firebase/Firebase"; 


const Myads = () => {
  const [ads, setAds] = useState([]);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const q = query(collection(firestore, "products"), where("userId", "==", user.uid));
          const querySnapshot = await getDocs(q);
          const userAds = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log("Fetched ads:", userAds);
          setAds(userAds);
        } catch (error) {
          console.error("Error fetching ads:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setAds([]);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);


  return (<>
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">My Ads</h1>

      {ads.length === 0 ? (
        <div className="text-center text-gray-600">
          You haven’t posted any ads yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="border p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <img
                src={ad.imageUrl} 
                alt={ad.title}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h2 className="text-lg font-semibold">{ad.title}</h2>
              <p className="text-gray-700">₹{ad.price}</p>
              <p className="text-gray-500 text-sm">{ad.category}</p>
              
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Myads;
