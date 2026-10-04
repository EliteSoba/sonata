import React from 'react';
import { useRoster } from '../util/useRoster';
import RosterCharacter from './RosterCharacter';
import { Character } from '../constants/types';
import { shuffleArray } from '../util/Util';

interface Props {};

type CharacterAssignment = {
  character: Character,
  player: 'P1' | 'P2';
};

const RosterDisplay: React.FC<Props> = ({}) => {
  const { chars } = useRoster();

  const [roster, setRoster] = React.useState<CharacterAssignment[]>();

  const shuffleChars = () => {
    const availableChars = chars.filter(char => char.isAvailable());
    const shuffledChars = shuffleArray(availableChars).slice(0, 3);
    let assignments: ('P1' | 'P2')[] = ['P1'];
    if (shuffledChars.length > 1) {
      assignments.push('P2');
    }
    if (shuffledChars.length > 2) {
      assignments = assignments.concat(['P1', 'P2']);
    }
    assignments = shuffleArray(assignments).slice(0, shuffledChars.length);
    const shuffledRoster = shuffledChars.map((char, i) => ({
      character: char,
      player: assignments[i],
    }));
    setRoster(shuffledRoster);
  };

  React.useEffect(() => {
    shuffleChars();
  }, [chars]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col grow px-5 gap-5">
        {roster && roster.map(({ character, player }) => <RosterCharacter key={character.name} character={character} player={player} />)}
      </div>
      <button type="button" className="large w-full px-4 h-20 bg-radial-[at_15%_15%] from-sky-500 via-sky-600 to-sky-800" onClick={shuffleChars}>
        Randomize
      </button>
    </div>
  );
}

RosterDisplay.displayName = 'RosterDisplay';

export default RosterDisplay;
