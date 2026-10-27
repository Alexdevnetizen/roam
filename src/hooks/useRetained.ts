import { useState } from "react";

/**
 * Holds the last non-null value so an overlay can run its exit transition with
 * its content still mounted. Adjusting state during render is React's own
 * pattern for deriving state from props.
 */
export function useRetained<T>(value: T | null): T | null {
  const [held, setHeld] = useState<T | null>(value);

  if (value && value !== held) {
    setHeld(value);
  }

  return held;
}
