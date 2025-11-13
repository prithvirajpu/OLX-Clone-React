import React, { useState, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Components/Details/Details';
import Navbar from './Components/Navbar/Navbar';
import Sell from './Components/Modal/Sell';
import Login from './Components/Modal/Login';
import { ItemsContextProvider } from './Components/Context/Item';

const MyAds = lazy(() => import('./Pages/Myads'));

const App = () => {
  const [openModalSell, setModalSell] = useState(false);
  const [openModalLogin, setModalLogin] = useState(false);

  const toggleModalSell = () => setModalSell((prev) => !prev);
  const toggleModalLogin = () => setModalLogin((prev) => !prev);

  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <ItemsContextProvider>
        <Navbar toggleModalSell={toggleModalSell} toggleModal={toggleModalLogin} />

        <Login toggleModal={toggleModalLogin} status={openModalLogin} />
        <Sell toggleModalSell={toggleModalSell} status={openModalSell} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/myads" element={<MyAds />} />
        </Routes>
      </ItemsContextProvider>
    </Suspense>
  );
};

export default App;
