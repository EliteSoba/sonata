import { Character, CharacterStatus, CharacterStatuses } from './types';

import allegretto from '../assets/allegretto.png';
import beat from '../assets/beat.png';
import polka from '../assets/polka.png';
import frederic from '../assets/frederic.png';
import viola from '../assets/viola.png';
import salsa from '../assets/salsa.png';
import jazz from '../assets/jazz.png';
import claves from '../assets/claves.png';
import falsetto from '../assets/falsetto.png';

export class character {
  name: string;
  available: boolean;
  image?: any;
  status: CharacterStatus;

  constructor({name, image, status = CharacterStatuses.AVAILABLE}: {name: string, image?: any, status?: CharacterStatus}) {
    this.name = name;
    this.image = image;
    this.available = status === CharacterStatuses.AVAILABLE;
    this.status = status;
  }

  isAvailable = () => {
    if (this.status === CharacterStatuses.DEAD) {
      return false;
    }
    return this.available;
  }

  setAvailable = (available: boolean) => {
    this.available = available;
  }
}

export const Characters: Character[] = [
  new character({ name: 'Allegretto', image: allegretto }),
  new character({ name: 'Beat', image: beat }),
  new character({ name: 'Polka', image: polka }),
  new character({ name: 'Frederic', image: frederic }),
  new character({ name: 'Viola', image: viola }),
  new character({ name: 'Salsa', image: salsa }),
  new character({ name: 'Jazz', image: jazz }),
  new character({ name: 'Claves', image: claves, status: CharacterStatuses.DEAD }),
  new character({ name: 'Falsetto', image: falsetto }),
];
