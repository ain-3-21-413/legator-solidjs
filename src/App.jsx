import { HopeProvider, NotificationsProvider } from '@hope-ui/solid';
import { Router } from '@solidjs/router';
import ELibApp from './ELibApp';
import CurrentPageProvider from './providers/CurrentPageProvider';
import PatronEditingProvider from './providers/PatronEditingProvider';
import CurrentPatronProvider from './providers/CurrentPatron';
import ItemEditingProvider from './providers/ItemEditingProvider';
import ModalProvider from './providers/ModalProvider';
import InputValidationProvider from './providers/InputValidationProvider';
import CurrentBookProvider from './providers/CurrentBook';

function App() {
  return (
    <HopeProvider>
      <Router>
      <NotificationsProvider placement={"bottom-end"}>
        <InputValidationProvider>
          <CurrentPageProvider>
            <ModalProvider>
              <PatronEditingProvider>
              <ItemEditingProvider>
                <CurrentPatronProvider>
                <CurrentBookProvider>
                  <ELibApp />
                </CurrentBookProvider>
                </CurrentPatronProvider>
              </ItemEditingProvider>
              </PatronEditingProvider>
            </ModalProvider>
          </CurrentPageProvider>
        </InputValidationProvider>
      </NotificationsProvider>
      </Router>
    </HopeProvider>
  );
}

export default App;
