import { useState } from 'react';
import { getItems, Item } from '../api/items';

export function useItemsViewModel() {
  const [filteredItems, setFilteredItems] = useState<Item[]>(getItems());
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const filterItems = (query: string): void => {
    const items = getItems();
    if (query) {
      setFilteredItems(items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())));
    } else {
      setFilteredItems(items);
    }
  };

  const selectItem = (id: number): void => {
    const item = getItems().find((item) => item.id === id);
    setSelectedItem(item || null);
  };

  return { filteredItems, selectedItem, filterItems, selectItem };
}
