import { HopeProvider } from '@hope-ui/solid';
import { Router } from '@solidjs/router';
import ELibApp from './ELibApp';

function App() {
  return (
    <HopeProvider>
      <Router>
        <ELibApp />
      </Router>
    </HopeProvider>
  );
}

export default App;
