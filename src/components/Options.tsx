import React from 'react';
import { useRoster } from '../util/useRoster';
import { Character, CharacterStatuses } from '../constants/types';

interface Props {
  enabled: boolean;
};

const Options: React.FC<Props> = ({ enabled }) => {
  const {chars, updateChar} = useRoster();

  const getAvailable = () => (
    <div className="text-amber-400">
      Available
    </div>
  );

  const getUnavailable = () => (
    <div className="text-red-400">
      Unvailable
    </div>
  );

  const getDead = () => (
    <div className="text-gray-500 line-through">
      DEAD
    </div>
  );

  const getCharStatus = (char: Character) => {
    if (char.status === CharacterStatuses.DEAD) {
      return getDead();
    }
    if (char.isAvailable()) {
      return getAvailable();
    }
    return getUnavailable();
  }

  const renderOption = (char: Character) => {
    return (
      <button
        key={char.name}
        disabled={!enabled}
        onClick={() => updateChar(char.name, !char.available)}
        className="rounded-md border p-3 md:px-5 flex items-center text-left justify-between"
      >
        <div className="text-sm sm:text-2xl">{char.name}</div>
        <div className="text-sm sm:text-2xl">{getCharStatus(char)}</div>
      </button>
    );
  }
  return (
    <div className={`${!enabled && 'opacity-0 pointer-events-none'} duration-500 relative h-0 overflow-visible z-100 w-full border-8 border-transparent box-border`}>
      <div className={`${!enabled && '-translate-y-150'} duration-500 absolute bg-white rounded-2xl p-4 w-full`}>
        <div className="max-h-[calc(100dvh-230px)] overflow-auto gap-4 px-2 grid grid-cols-2">
          {chars.map(char => renderOption(char))}
        </div>
      </div>
    </div>
  );
}

Options.displayName = 'Options';

export default Options;
