export const CharacterStatuses = {
  AVAILABLE: 'AVAILABLE',
  DEAD: 'DEAD',
} as const;

export type CharacterStatus = typeof CharacterStatuses[keyof typeof CharacterStatuses];

export interface Character {
  name: string;
  image?: any;
  available: boolean;
  status: CharacterStatus;
  isAvailable: () => boolean;
  setAvailable: (available: boolean) => void;
};
