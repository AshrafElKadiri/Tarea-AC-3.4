import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <nav>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/items">Items</Link></li>
      <li><Link to="/help">Ayuda</Link></li>
    </ul>
  </nav>
);

export default Navigation;