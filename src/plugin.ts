export default function plugin(md, 
    {
    removeTags = true,
    escapeHtml = false
    }={}) {
    md.renderer.__oldRender = md.renderer.render;
    md.renderer.render = (...params)=>{
      let html =  md.renderer.__oldRender(...params);
        let cHtml = (removeTags) ?  html.replace(/(<([^>]+)>)/gi, '') : html;
        if(escapeHtml) return md.utils.escapeHtml(cHtml);
        else return cHtml;
    };
}