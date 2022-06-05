import { useState, useEffect } from 'react';

export const useDebouncer = (value, callback, deps, time = 300) => {
  const [internalData, setInternalData] = useState(value);

  useEffect(() => {
    setInternalData(value);
  }, [value]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (internalData !== value) {
        callback(internalData);
      }
    }, time);

    return () => clearTimeout(timeoutId);
  }, [internalData, value, time, ...deps]);

  return [internalData, setInternalData];
};
