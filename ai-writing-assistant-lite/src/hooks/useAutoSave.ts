// src/hooks/useAutoSave.ts
import { useEffect } from "react";

export function useAutoSave(key: string, value: string, delay = 5000) {
  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem(key, value);
      console.log("Autosaved!");
    }, delay);

    return () => clearInterval(interval);
  }, [key, value, delay]);
}
