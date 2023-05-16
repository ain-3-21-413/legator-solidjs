import { HopeProvider } from '@hope-ui/solid';
import { Router } from '@solidjs/router';
import ELibApp from './ELibApp';
import CurrentPageProvider from './providers/CurrentPageProvider';
import PatronEditingProvider from './providers/PatronEditingProvider';
import CurrentPatronProvider from './providers/CurrentPatron';

function App() {
  return (
    <HopeProvider>
      <Router>
        <CurrentPageProvider>
          <PatronEditingProvider>
            <CurrentPatronProvider>
              <ELibApp />
            </CurrentPatronProvider>
          </PatronEditingProvider>
        </CurrentPageProvider>
      </Router>
    </HopeProvider>
  );
}

export default App;
