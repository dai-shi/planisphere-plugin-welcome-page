/* global WelcomePage */

const templateStr = `
<div class="container">
  {{#each paragraph in paragraphs}}
    <div class="jumbotron">
      <h1>{{paragraph.title}}</h1>
      {{#if paragraph.rawHtml}}
        <p>{{{paragraph.content}}}</p>
      {{else}}
        <p>{{paragraph.content}}</p>
      {{/if}}
    </div>
  {{/each}}
</div>
`;

WelcomePage.config = function(config) {
  config.pages.forEach((page) => {
    let t = Template[page.name];
    if (!t) {
      t = Template[page.name] = Template.fromString(templateStr);
      t.state = t.state || new ReactiveDict();
      t.helpers({
        paragraphs() {
          return t.state.get('paragraphs');
        }
      });
    }
    t.state.set('paragraphs', page.paragraphs);
  });
};
