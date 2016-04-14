Package.describe({
  name: 'timoruetten:react-i18n',
  version: '0.0.3',
  summary: 'Simple wrapper for TAPi18n for reactjs',
  git: 'https://github.com/TimoRuetten/meteor-react-i18n',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.use('tap:i18n@1.8.0');
  api.use('react-meteor-data@0.2.8');
  api.mainModule('react-i18n.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('timoruetten:react-i18n');
  api.mainModule('react-i18n-tests.js');
});
