import { HopeProvider, NotificationsProvider } from '@hope-ui/solid';
import { Router } from '@solidjs/router';
import ELibApp from './ELibApp';
import CurrentPageProvider from './providers/CurrentPageProvider';
import PatronEditingProvider from './providers/PatronEditingProvider';
import CurrentPatronProvider from './providers/CurrentPatron';
import ItemEditingProvider from './providers/ItemEditingProvider';
import ModalProvider from './providers/ModalProvider';
import SubFieldModalProvider from './providers/SubFieldModalProvider';
import InputValidationProvider from './providers/InputValidationProvider';

function App() {
  return (
    <HopeProvider>
      <Router>
      <NotificationsProvider placement={"bottom-end"}>
        <InputValidationProvider>
          <CurrentPageProvider>
            <ModalProvider>
            <SubFieldModalProvider>
              <PatronEditingProvider>
              <ItemEditingProvider>
                <CurrentPatronProvider>
                  <ELibApp />
                </CurrentPatronProvider>
              </ItemEditingProvider>
              </PatronEditingProvider>
            </SubFieldModalProvider>
            </ModalProvider>
          </CurrentPageProvider>
        </InputValidationProvider>
      </NotificationsProvider>
      </Router>
    </HopeProvider>
  );
}

export default App;
