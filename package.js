Package.describe({
  name: 'timoruetten:react-i18n',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.use('tap:i18n');
  api.use('react-meteor-data');
  api.mainModule('react-i18n.js');
  api.export([
    'I18n'
  ], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('timoruetten:react-i18n');
  api.mainModule('react-i18n-tests.js');
});
