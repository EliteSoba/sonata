import React, { PropsWithChildren } from 'react';

import { Character } from '../constants/types';
import { Characters } from '../constants/characters';

export interface RosterContextValue {
  chars: Character[];
  updateChar: (name: string, available:boolean) => void;
  updateChars: (newChars: Character[]) => void;
  resetChars: () => void;
}

const RosterContext = React.createContext<RosterContextValue | null>(null);

export const RosterProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [chars, setChars] = React.useState([...Characters]);

  React.useEffect(() => {
    const storedChars = localStorage.getItem('chars');
    if (storedChars) {
      const chars2 = JSON.parse(storedChars) as Character[];

      const chars3 = chars.map(char => {
        const storedChar = chars2.find(c => char.name === c.name);
        if (storedChar) {
          char.setAvailable(storedChar.available);
        }
        return char;

      });
      setChars(chars3);
    }
    else {
      const chars2 = chars.map(c => ({ ...c, available: Math.random() < 0.5 }));
      updateChars(chars2);
    }
  }, []);

  const updateChar = (name: string, available: boolean) => {
    const chars2 = chars.map(char => {
      if (name === char.name) {
        char.setAvailable(available);
      }
      return char;
    });
    updateChars(chars2);
  };

  const updateChars = (newChars: Character[]) => {
    localStorage.setItem('chars', JSON.stringify(newChars));
    setChars(newChars);
  };

  const resetChars = () => {
    updateChars(Characters);
    localStorage.removeItem('chars');
  };

  const value = {
    chars,
    updateChar,
    updateChars,
    resetChars,
  };

  return (
    <RosterContext.Provider value={value}>
      {children}
    </RosterContext.Provider>
  )
}

export const useRoster = () => {
  const context = React.useContext(RosterContext);
  if (context === null) {
    throw new Error('');
  }
  return context;
}
