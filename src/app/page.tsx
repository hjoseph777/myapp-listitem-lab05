'use client';

import React from 'react';
import ItemList from '@/components/ItemList';

export default function Page() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">MyApp ListItem Lab05</h1>
        <ItemList title="My Todo List" />
      </div>
    </main>
  );
} 