import React from 'react';

import { RosterProvider } from '../util/useRoster';
import Main from './Main';

const App: React.FC = () => {
  return (
    <RosterProvider>
      <Main />
    </RosterProvider>
  );
}

App.displayName = 'App';

export default App;
