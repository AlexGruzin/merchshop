import i18n from 'i18next';

// locales
import US from 'locales/us';
import RU from 'locales/ru';

i18n.init({
  debug: false,
  fallbackLng: ['US', 'RU'],
  lng: 'US',
  ns: ['app', 'home', 'auth'],
  defaultNS: 'app',

  resources: {
    US,
    RU,
  },
});

export default i18n;
