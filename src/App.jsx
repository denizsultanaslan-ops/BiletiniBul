import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import EventsList from './pages/EventsList';
import EventDetail from './pages/EventDetail';
import Directions from './pages/Directions';
import Cart from './pages/Cart';
import Login from './pages/Login';
import MyTickets from './pages/MyTickets';
import Dashboard from './pages/Dashboard';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import CheckoutSuccess from './pages/CheckoutSuccess';

function App() {
  return (
    <BrowserRouter basename="/BiletiniBul">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="konserler" element={<EventsList />} />
          <Route path="operalar" element={<EventsList />} />
          <Route path="tiyatrolar" element={<EventsList />} />
          <Route path="sinemalar" element={<EventsList />} />
          <Route path="muzeler" element={<EventsList />} />
          <Route path="soylesiler" element={<EventsList />} />
          <Route path="etkinlik/:id" element={<EventDetail />} />
          <Route path="yol-tarifi/:id" element={<Directions />} />
          <Route path="biletlerim" element={<MyTickets />} />
          <Route path="sepet" element={<Cart />} />
          <Route path="checkout-success" element={<CheckoutSuccess />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="favorilerim" element={<Favorites />} />
          <Route path="profil" element={<Profile />} />
          {/* Add more routes here as we build them */}
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
