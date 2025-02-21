'use client';

import React, { useState, useCallback, useMemo } from 'react';

interface Item {
  id: string;
  text: string;
}

interface ItemListProps {
  title?: string;
}

export function useFilter(items: Item[], filterEnabled: boolean) {
  return useMemo(() => {
    if (!filterEnabled) return items;
    return items.filter(item => item.text.toLowerCase().startsWith('a'));
  }, [items, filterEnabled]);
}

export default function ItemList({ title = "My List" }: ItemListProps) {
  const [items, setItems] = useState<Item[]>(() => {
    // Load items from localStorage on initial render
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('listItems');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [inputValue, setInputValue] = useState<string>('');
  const [filterEnabled, setFilterEnabled] = useState(false);

  // Save to localStorage whenever items change
  React.useEffect(() => {
    localStorage.setItem('listItems', JSON.stringify(items));
  }, [items]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setItems(prev => [...prev, { id: Date.now().toString(), text: inputValue.trim() }]);
      setInputValue('');
    }
  }, [inputValue]);

  const handleDelete = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const filteredItems = useFilter(items, filterEnabled);

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="flex-1 px-3 py-2 border rounded"
            placeholder="Add new item"
            aria-label="New item input"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            aria-label="Add item"
          >
            Add
          </button>
        </div>
      </form>

      <div className="mb-4 flex items-center gap-2">
        <input
          type="checkbox"
          id="filter-a"
          checked={filterEnabled}
          onChange={(e) => setFilterEnabled(e.target.checked)}
          className="h-4 w-4"
        />
        <label htmlFor="filter-a">Show only items starting with 'A'</label>
      </div>

      <ul className="space-y-2" role="list">
        {filteredItems.map(item => (
          <li 
            key={item.id}
            className="flex items-center justify-between p-2 border rounded"
          >
            <span>{item.text}</span>
            <button
              onClick={() => handleDelete(item.id)}
              className="px-2 py-1 text-red-500 hover:text-red-700"
              aria-label={`Delete ${item.text}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
