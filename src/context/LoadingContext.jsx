import { createContext, useState, useEffect } from 'react';

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 2000); // Minimum 2s loading time
    };

    window.addEventListener('load', handleLoad);
    
    // Fallback in case load event already happened
    if (document.readyState === 'complete') handleLoad();

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};