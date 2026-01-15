export const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998,
  };
});

// utils/shuffle.ts
export interface User {
  id: number;
  name: string;
}

/**
 * Shuffles an array using the Fisher-Yates algorithm.
 * Returns a new array without mutating the original.
 */
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array]; // copy array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
