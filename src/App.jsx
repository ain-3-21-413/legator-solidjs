import { HopeProvider } from '@hope-ui/solid';
import { Router } from '@solidjs/router';
import ELibApp from './ELibApp';
import CurrentPageProvider from './providers/CurrentPageProvider';
import PatronEditingProvider from './providers/PatronEditingProvider';
import CurrentPatronProvider from './providers/CurrentPatron';
import ItemEditingProvider from './providers/ItemEditingProvider';
import ModalProvider from './providers/ModalProvider';

function App() {
  return (
    <HopeProvider>
      <Router>
        <CurrentPageProvider>
          <ModalProvider>
            <PatronEditingProvider>
            <ItemEditingProvider>
              <CurrentPatronProvider>
                <ELibApp />
              </CurrentPatronProvider>
            </ItemEditingProvider>
            </PatronEditingProvider>
          </ModalProvider>
        </CurrentPageProvider>
      </Router>
    </HopeProvider>
  );
}

export default App;
