/* global WelcomePage:true, SimpleSchema */

WelcomePage = WelcomePage || {};
WelcomePage.config = function() {};

if (Package['daishi:planisphere-core']) {
  const Planisphere = Package['daishi:planisphere-core'].Planisphere;
  Planisphere.registerPlugin({
    name: 'welcome-page',
    description: 'provides welcome page for main layout',
    configMethod: 'WelcomePage.config',
    configSchema: new SimpleSchema({
      pages: {
        type: [new SimpleSchema({
          name: {
            type: String
          },
          paragraphs: {
            type: [new SimpleSchema({
              title: {
                type: String
              },
              content: {
                type: String
              },
              rawHtml: {
                type: Boolean
              }
            })]
          }
        })]
      }
    })
  });
}
