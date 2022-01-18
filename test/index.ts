import * as MarkdownIt from 'markdown-it';
import {removeMdPlugin} from '../dist';
const md = new MarkdownIt().use(removeMdPlugin ,{
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