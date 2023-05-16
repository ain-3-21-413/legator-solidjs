import { HopeProvider } from '@hope-ui/solid';
import { Router } from '@solidjs/router';
import ELibApp from './ELibApp';
import CurrentPageProvider from './providers/CurrentPageProvider';
import PatronEditingProvider from './providers/PatronEditingProvider';
import CurrentPatronProvider from './providers/CurrentPatron';
import ItemEditingProvider from './providers/ItemEditingProvider';

function App() {
  return (
    <HopeProvider>
      <Router>
        <CurrentPageProvider>
          <PatronEditingProvider>
            <ItemEditingProvider>
              <CurrentPatronProvider>
                <ELibApp />
              </CurrentPatronProvider>
            </ItemEditingProvider>
          </PatronEditingProvider>
        </CurrentPageProvider>
      </Router>
    </HopeProvider>
  );
}

export default App;
