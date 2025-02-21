import React from 'react';
import '../styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>MyApp ListItem Lab05</title>
        <meta name="description" content="A Next.js application for Lab05" />
        <link rel="icon" href="/myapp-listitem-lab05/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
