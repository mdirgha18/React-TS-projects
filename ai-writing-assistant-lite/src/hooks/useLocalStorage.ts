import { useEffect, useState } from "react";

export function useLocalStorage(key: string, initial: string) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initial;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}
