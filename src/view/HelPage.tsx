import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const HelpPage: React.FC = () => (
  <div>
    <h2>Ayuda</h2>
    <Routes>
      {/* Rutas anidadas dentro de la ruta principal '/help' */}
      <Route path="faq" element={<div>Preguntas Frecuentes</div>} />
      <Route path="reference" element={<div>Referencia</div>} />
    </Routes>
    <ul>
      {/* Asegurándose de que las rutas sean absolutas */}
      <li><Link to="/help/faq">Preguntas Frecuentes</Link></li>
      <li><Link to="/help/reference">Referencia</Link></li>
    </ul>
  </div>
);

export default HelpPage;
