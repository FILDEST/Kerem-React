import { useCallback, useState } from 'react';

/**
 * Custom hook that manages a boolean toggle state.
 * useCallback is used to ensure that the toggle function has a stable reference.
 * This helps prevent unnecessary re-renders when passing the function as a prop to child components.
 */
export function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return [value, toggle];
}
