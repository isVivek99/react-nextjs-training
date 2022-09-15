import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/index';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Auth0Provider
          domain='dev-oirs-bxd.us.auth0.com'
          clientId='U0xIR2j93NyewAaSsxzLYweN556riepx'
          cacheLocation='localstorage'
          scope='offline_access openid profile email'
          audience='http://localhost:4000/'
          redirectUri='http://localhost:3000/'
        >
          <App />
        </Auth0Provider>
      </PersistGate>
    </Provider>
  </Router>
);
