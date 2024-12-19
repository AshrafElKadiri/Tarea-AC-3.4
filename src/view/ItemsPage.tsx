import React, { useState, useEffect } from 'react';
import { useItemsViewModel } from '../hooks/useItemsViewModel';
import { useParams } from 'react-router-dom';

const ItemsPage: React.FC = () => {
  const { filteredItems, selectedItem, filterItems, selectItem } = useItemsViewModel();
  const [search, setSearch] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  // Efecto para mostrar el modal si no hay resultados y se ha realizado una búsqueda
  useEffect(() => {
    if (search && filteredItems.length === 0) {
      setShowModal(true); // Mostrar modal si no se encuentran resultados
    } else {
      setShowModal(false); // Ocultar modal si hay resultados o búsqueda vacía
    }
  }, [filteredItems, search]); // Cambia solo cuando filteredItems o search cambian

  // Asegurarse de que el modal no se reabra inmediatamente
  const closeModal = () => {
    setShowModal(false);
    setSearch(''); // Reinicia la búsqueda para evitar que vuelva a mostrarse
  };

  // Manejo de búsqueda manual (actualiza el estado de la búsqueda)
  const handleSearch = (): void => {
    filterItems(search); // Filtrar los items con el texto de búsqueda
  };

  // Manejo de selección/deselección de un ítem
  const handleSelectItem = (id: number) => {
    if (selectedItem?.id === id) {
      selectItem(null); // Deseleccionar si ya está seleccionado
    } else {
      selectItem(id); // Seleccionar nuevo ítem
    }
  };

  return (
    <div>
      <h2>Lista de Items</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Actualizar el valor de búsqueda
        placeholder="Buscar items"
      />
      <button onClick={handleSearch}>Buscar</button> {/* Botón de búsqueda */}
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id} onClick={() => handleSelectItem(item.id)}>
            {item.id} - {item.name}
          </li>
        ))}
      </ul>
      {selectedItem && (
        <div>
          <h3>Item seleccionado:</h3>
          <p>ID: {selectedItem.id}</p>
          <p>Nombre: {selectedItem.name}</p>
          <p>Precio: {selectedItem.price}</p>
        </div>
      )}
      {showModal && (
        <div className="modal">
          <p>Item no encontrado</p>
          <button onClick={closeModal}>Cerrar</button> {/* Asegura el cierre del modal */}
        </div>
      )}
    </div>
  );
};

export default ItemsPage;
