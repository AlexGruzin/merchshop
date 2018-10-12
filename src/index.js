import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import store from './store';
import history from './store/history';
import App from './App';
import theme from './theme/default';
import registerServiceWorker from './services/registerServiceWorker';

import { I18nextProvider } from 'react-i18next';
import i18n from 'config/i18next';
import React from 'react';
import ReactDOM from 'react-dom';

import jss from 'jss'
import { JssProvider } from 'react-jss'
import preset from 'jss-preset-default'

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
