/* node ./test*/

const MarkdownIt = require('markdown-it'),
      plugin = require('../dist').removeMdPlugin;
const md = new MarkdownIt().use(plugin,{
    replaceNewlineValue:" "
});
var result = md.render(`
# markdown-it!
## markdown-it!
### markdown-it!
[GitHub](https://github.com/)
\`inline\`
![img](https://github.com/)
`);
console.log(result);