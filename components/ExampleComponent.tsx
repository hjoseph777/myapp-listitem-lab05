import { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return <div>Client-side content</div>;
};

export default ExampleComponent;
