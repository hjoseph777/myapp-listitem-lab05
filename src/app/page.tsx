'use client';

import React from 'react';
import ItemList from '@/components/ItemList';

export default function Page() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="container mx-auto">
        <a 
          href="https://github.com/hjoseph777/myapp-listitem-lab05/tree/master" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <h1 className="text-3xl font-bold text-center mb-8">
            MyApp ListItem Lab05 - <span className="text-blue-500 underline">Synopsis and README File</span>
          </h1>
        </a>
        <ItemList title="My Todo List" />
      </div>
    </main>
  );
}
