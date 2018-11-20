import { MuiThemeProvider } from '@material-ui/core/styles';
import i18n from 'config/i18next';
import { ConnectedRouter } from 'connected-react-router/immutable';

import jss from 'jss'
import preset from 'jss-preset-default'
import React from 'react';
import ReactDOM from 'react-dom';

import { I18nextProvider } from 'react-i18next';
import { JssProvider } from 'react-jss'
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './services/registerServiceWorker';
import store from './store';
import history from './store/history';
import theme from './theme/default';

jss.setup( preset());

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <MuiThemeProvider theme={theme}>
      <JssProvider jss={jss}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App/>
          </ConnectedRouter>
        </Provider>
      </JssProvider>
    </MuiThemeProvider>
  </I18nextProvider>,
  document.getElementById( 'root' ),
);

registerServiceWorker();
