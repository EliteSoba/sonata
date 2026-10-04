import React from 'react';
import { Character } from '../constants/types';

interface Props {
  character: Character;
  player: 'P1' | 'P2';
};

const RosterCharacter: React.FC<Props> = ({ character, player }) => {
  return (
    <div className="amber-gradient font-sans tracking-wider rounded-md flex items-center justify-between">
      <div className="max-w-1/3">
        <img src={character.image} />
      </div>
      <div className="pr-10 pl-5 grow flex items-center justify-between">
        <div className="text-4xl font-bold">
          {character.name}
        </div>
        <div className="text-2xl">
          {player}
        </div>
      </div>
    </div>
  );
}

RosterCharacter.displayName = 'RosterCharacter';

export default RosterCharacter;
