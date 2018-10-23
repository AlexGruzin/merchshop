import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import { I18nextProvider } from 'react-i18next';
import i18n from 'config/i18next';

import { Provider } from 'react-redux';
import store from '../src/store';

import jss from 'jss'
import { JssProvider } from 'react-jss'
import preset from 'jss-preset-default'

import theme from '../src/theme/default';

jss.setup( preset());

addDecorator(story => (
  <I18nextProvider i18n={i18n}>
    <MuiThemeProvider theme={theme}>
      <JssProvider jss={jss}>
          {story()}
      </JssProvider>
    </MuiThemeProvider>
  </I18nextProvider>
));

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
