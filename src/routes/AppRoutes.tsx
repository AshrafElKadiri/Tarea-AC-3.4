import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../view/Navigation';
import ItemsPage from '../view/ItemsPage';
import HelpPage from '../view/HelPage';
import NotFoundPage from '../view/NotFoundPage';

const AppRoutes: React.FC = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<h1>Bienvenido a la aplicación</h1>} />
      <Route path="/items" element={<ItemsPage />} />
      <Route path="/items/:filter" element={<ItemsPage />} />
      <Route path="/help/*" element={<HelpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;