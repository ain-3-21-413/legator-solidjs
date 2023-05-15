import { HopeProvider } from '@hope-ui/solid';
import { Router } from '@solidjs/router';
import ELibApp from './ELibApp';
import CurrentPageProvider from './providers/CurrentPageProvider';

function App() {
  return (
    <HopeProvider>
      <Router>
        <CurrentPageProvider>
          <ELibApp />
        </CurrentPageProvider>
      </Router>
    </HopeProvider>
  );
}

export default App;
