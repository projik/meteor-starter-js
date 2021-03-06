Package.describe({
  name: 'user-thumbs',
  summary: 'Display user thumbnails.',
  version: '0.0.8',
  git: 'http://github.com/yogiben/meteor-user-helpers.git'
});

both = ['client','server'];

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.3');

  api.use(
    [
      'less@2.5.1',
      'templating',
      'yogiben:helpers@0.0.1'
    ],
		both);

  api.addFiles(
    [
      'lib/client/templates.html',
      'lib/client/templates.js',
      'lib/client/helpers.js',
      'lib/client/templates.less',
      'lib/client/utils.js'
    ],
    'client');
});
