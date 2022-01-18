# markdown-it-remove
Remove Markdown syntax.

```
# markdown-it!
## markdown-it!
### markdown-it!
[GitHub](https://github.com/)
`inline`
![img](https://github.com/)
```
↓
```
markdown-it!
markdown-it!
markdown-it!
GitHub
inline
```
## Installation
`npm i markdown-it-remove`

## Import Plugin
```javascript
const MarkdownIt = require('markdown-it'),
      plugin = require('markdown-it-remove').removeMdPlugin;
      //import {removeMdPlugin} from 'markdown-it-remove';
const md = new MarkdownIt().use(plugin,{});
var result = md.render(`# markdown-it!`);
```

## Options
```javascript
const md = new MarkdownIt().use(plugin,{
    replaceNewlineValue:" " //replace newline(\n\r) to "replaceNewlineValue" (default:null)
    removeTags:true,//<h1>markdown-it!</h1> -> markdown-it!
    escapeHtml:false //<h1>markdown-it!</h1> -> &lt;h1&gt;markdown-it!&lt;/h1&gt;
});
```
