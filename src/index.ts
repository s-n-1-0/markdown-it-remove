export function removeMdPlugin(md, 
    {
    removeTags = true,
    /** <h1> </h1>\n <-- this , [null = don't replace]*/
    replaceNewlineValue = null,
    escapeHtml = false,
    }={}) {
    md.renderer.__oldRender = md.renderer.render;
    md.renderer.render = (...params)=>{
      let html:string =  md.renderer.__oldRender(...params);
      var tmpHtml = (removeTags) ?  html.replace(/(<([^>]+)>)/gi, '') : html;
      tmpHtml = (replaceNewlineValue === null) ? tmpHtml : tmpHtml.replace(/\n|\r/gi,replaceNewlineValue);
        if(escapeHtml) return md.utils.escapeHtml(tmpHtml);
        else return tmpHtml;
    };
}