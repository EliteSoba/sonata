import React from 'react';

import { getArchiveSvg } from '../util/svgs';
import Options from './Options';
import RosterDisplay from './RosterDisplay';

const Main: React.FC = () => {
  const [optionsToggled, setOptionsToggled] = React.useState(false);
  return (
    <section className='h-dvh flex'>
      <div className='max-h-dvh flex flex-col w-full'>
        <header className="relative flex mt-2">
          <menu className="flex grow items-stretch justify-end gap-x-0.5">
            <button
              title="options"
              onClick={() => setOptionsToggled(!optionsToggled)}
              className={'is-link flex flex-col px-2 items-center justify-center w-full max-w-22 gap-y-1'}
            >
              <div>
                {getArchiveSvg('inline w-6 h-6')}
                <span className="font-sans">Options</span>
              </div>
            </button>
          </menu>
        </header>
        <section className="pt-10 grow flex flex-col">
          <div
            className={`fixed z-1 w-full h-full top-0 left-0 bg-black/30 ${!optionsToggled && 'hidden'}`}
            onClick={() => setOptionsToggled(false)}
          />
          <Options enabled={optionsToggled} />
          <div className={`${optionsToggled && 'blur-sm'} flex grow`}>
            <RosterDisplay />
          </div>
        </section>
      </div>
    </section>
  );
}

Main.displayName = 'Main';

export default Main;
