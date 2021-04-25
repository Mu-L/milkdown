var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(e,s,n)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,i=(t,i)=>{for(var o in i||(i={}))e.call(i,o)&&r(t,o,i[o]);if(s)for(var o of s(i))n.call(i,o)&&r(t,o,i[o]);return t};import{M as o,S as a,k as l,E as c,a as d,h,i as u,u as p,r as m,b as g,m as f,I as k,t as w,w as x,c as y,s as b,d as v,l as M,D as $,e as C,f as O,P as E,g as A,T as S,j as I,n as _,o as R,p as L,q as B,v as T,x as P,y as D,z as N,A as z,B as j,C as V,F as W,G as q,H as U,R as G,J as H}from"./vendor.c2ba4079.js";var F,Y,J,K;!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(s){const n=new URL(t,location),r=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((s,i)=>{const o=new URL(t,n);if(self[e].moduleMap[o])return s(self[e].moduleMap[o]);const a=new Blob([`import * as m from '${o}';`,`${e}.moduleMap['${o}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){i(new Error(`Failed to import: ${t}`)),r(l)},onload(){s(self[e].moduleMap[o]),r(l)}});document.head.appendChild(l)})),self[e].moduleMap={}}}("/milkdown/assets/"),(Y=F||(F={}))[Y.Internal=0]="Internal",Y[Y.ProsemirrorSpec=1]="ProsemirrorSpec",Y[Y.ProsemirrorPlugin=2]="ProsemirrorPlugin",Y[Y.MarkdownItOption=3]="MarkdownItOption",Y[Y.MarkdownItPlugin=4]="MarkdownItPlugin",Y[Y.Theme=5]="Theme",Y[Y.Listener=6]="Listener",(K=J||(J={}))[K.Idle=0]="Idle",K[K.BuildSchema=1]="BuildSchema",K[K.SchemaReady=2]="SchemaReady",K[K.PluginReady=3]="PluginReady",K[K.Complete=4]="Complete";class X{constructor(t={}){this.options=t}injectContext(t,e){this.context=t,this.updateContext=e}}class Z extends X{constructor(){super(...arguments),this.loadAfter=J.Idle,this.type=F.ProsemirrorSpec}main(){this.updateContext({marks:this.context.marks.concat(this)})}}class Q extends X{constructor(){super(...arguments),this.loadAfter=J.Idle,this.type=F.ProsemirrorSpec}main(){this.updateContext({nodes:this.context.nodes.concat(this)})}}function tt(t,e,s={}){return t.reduce(((t,s)=>{const[n,r]=e(s);return i(i({},t),{[n]:r})}),s)}function et(t){return t.isText}class st extends X{constructor(){super(...arguments),this.id="schemaLoader",this.type=F.Internal,this.loadAfter=J.BuildSchema}main(){const t=tt(this.context.nodes,(t=>[t.id,t.schema])),e=tt(this.context.marks,(t=>[t.id,t.schema])),s=new a({nodes:i(i({doc:{content:"block+"}},t),{text:{group:"inline"}}),marks:e});this.updateContext({schema:s})}}class nt{constructor(t,e,s,n){this.stack=t,this.schema=e,this.tokenHandlers=s,this.mapping=n}parseTokens(t){t.forEach(((e,s)=>{const n=this.tokenHandlers[e.type]||this.tokenHandlers[this.mapping[e.type]];if(!n)throw new Error("Token type `"+e.type+"` not supported by Markdown parser");n(this,e,t,s)}))}addText(t){t&&this.stack.addText((e=>this.schema.text(t,e)))}transformTokensToDoc(t){this.parseTokens(t);let e=null;do{e=this.stack.closeNode()}while(this.stack.length);return e}}class rt{constructor(t){this.els=[{type:t,content:[]}],this.marks=o.none}top(){const{els:t}=this;return t[t.length-1]}pushInTopEl(t){var e;null==(e=this.top())||e.content.push(t)}get length(){return this.els.length}openMark(t){this.marks=t.addToSet(this.marks)}closeMark(t){this.marks=t.removeFromSet(this.marks)}addText(t){const e=this.top();if(!e)throw new Error;const s=e.content,n=s[s.length-1],r=t(this.marks),i=n&&function(t,e){if(et(t)&&et(e)&&o.sameSet(t.marks,e.marks))return t.withText(t.text+e.text)}(n,r);i?s[s.length-1]=i:s.push(r)}openNode(t,e){this.els.push({type:t,attrs:e,content:[]})}addNode(t,e,s){const n=t.createAndFill(e,s,this.marks);return n?(this.pushInTopEl(n),n):null}closeNode(){this.marks.length&&(this.marks=o.none);const t=this.els.pop();if(!t)throw new Error;return this.addNode(t.type,t.attrs,t.content)}}function it(t,e,s,n){return t.getAttrs?t.getAttrs(e,s,n):t.attrs}function ot(){}function at(t,e){const s={},n={softbreak:t=>t.addText("\n")};return Object.entries(e).forEach((([e,r])=>{if(function(t){return Reflect.has(t,"block")}(r)){s[r.block]=e;const i=t.nodes[r.block]||t.nodes[e];if(!i)throw new Error;return["hr","hardbreak","fence","math_inline","math_display"].includes(e)?void(n[e]=(t,e,s,n)=>{t.stack.openNode(i,it(r,e,s,n)),t.addText(e.content),t.stack.closeNode()}):(n[e+"_open"]=(t,e,s,n)=>t.stack.openNode(i,it(r,e,s,n)),void(n[e+"_close"]=t=>t.stack.closeNode()))}if(!function(t){return Reflect.has(t,"node")}(r)){if(function(t){return Reflect.has(t,"mark")}(r)){s[r.mark]=e;const i=t.marks[r.mark]||t.marks[e];if(!i)throw new Error;return["code_inline"].includes(e)?void(n[e]=(t,e,s,n)=>{t.stack.openMark(i.create(it(r,e,s,n))),t.addText(e.content),t.stack.closeMark(i)}):(n[e+"_open"]=(t,e,s,n)=>t.stack.openMark(i.create(it(r,e,s,n))),void(n[e+"_close"]=t=>t.stack.closeMark(i)))}if(function(t){return Reflect.has(t,"ignore")}(r))return n[e+"_open"]=ot,void(n[e+"_close"]=ot);throw new RangeError("Unrecognized parsing spec "+JSON.stringify(r))}{s[r.node]=e;const i=t.nodes[r.node]||t.nodes[e];if(!i)throw new Error;n[e]=(t,e,s,n)=>t.stack.addNode(i,it(r,e,s,n))}})),n.inline=(t,e)=>{var s;return t.parseTokens(null!=(s=e.children)?s:[])},n.text=(t,e)=>t.addText(e.content),[n,s]}class lt extends X{constructor(){super(...arguments),this.id="parserLoader",this.type=F.Internal,this.loadAfter=J.SchemaReady}main(){const t=tt([...this.context.nodes,...this.context.marks],(t=>[t.id,t.parser])),e=(s=this.context.schema,n=this.context.markdownIt,r=t,t=>new nt(new rt(s.topNodeType),s,...at(s,r)).transformTokensToDoc(n.parse(t,{})));var s,n,r;this.updateContext({parser:e})}}class ct{static escape(t,e){let s=t.replace(/[`*\\~[\]]/g,"\\$&");return e&&(s=s.replace(/^[:#\-*+]/,"\\$&").replace(/^(\d+)\./,"$1\\.")),s}static quote(t){const e=-1===t.indexOf('"')?'""':-1===t.indexOf("'")?"''":"()";return e[0]+t+e[1]}static repeat(t,e){return Array(e).fill(t).reduce(((t,e)=>t+e),"")}static getEnclosingWhitespace(t){return{leading:(t.match(/^(\s+)/)||[])[0],trailing:(t.match(/(\s+)$/)||[])[0]}}static removeWhiteSpaceAfter(t){const e=/\s+$/.exec(t);return e?t.slice(0,e.index):t}}class dt{constructor(t,e){this.nodes=t,this.marks=e,this.out="",this.delimitation="",this.closed=!1,this.utils=ct,this.nodes=t,this.marks=e}get output(){return this.out}get atBlank(){return/(^|\n)$/.test(this.out)}renderContent(t){return t.forEach(((e,s,n)=>this.render(e,t,n))),this}render(t,e,s){const n=this.nodes[t.type.name];if(!n)throw new Error;return n(this,t,e,s),this}ensureNewLine(){return this.atBlank||(this.out+="\n"),this}closeBlock(t){return this.closed=t,this}flushClose(t=1){if(!this.closed)return this;if(this.atBlank||(this.out+="\n"),t>=1){const e=this.utils.removeWhiteSpaceAfter(this.delimitation),s=this.utils.repeat(e+"\n",t);this.out+=s}return this.closed=!1,this}write(t){return this.flushClose(),t?(this.delimitation&&this.atBlank&&(this.out+=this.delimitation),this.out+=t,this):this}text(t,e=!1){const s=t.split("\n");return s.forEach(((t,n)=>{const r=e?this.utils.escape(t,Boolean(this.atBlank||this.closed)):t;this.write(r);n===s.length-1||(this.out+="\n")})),this}wrapBlock(t,e,s,n=t){this.write(n);const r=this.delimitation;return this.delimitation+=t,s(),this.delimitation=r,this.closeBlock(e),this}markString(t,e,s,n){const r=this.marks[t.type.name];if(!r)throw new Error;const i=e?r.open:r.close;return"string"==typeof i?i:i(this,t,s,n)}wrapWithMark(t,e,s,n){const r=this.markString(t,!0,e,s),i=this.markString(t,!1,e,s+1);return this.text(r+n+i),this}serializeMarks(t,e,s,n=!1){return t.map((t=>this.markString(t,n,e,s))).join("")}renderInline(t){let e=[];const s=(t=!1)=>(e,s)=>{var n,r,i,o;const a=null!=(r=null==(n=this.marks[e.type.name])?void 0:n.priority)?r:0,l=null!=(o=null==(i=this.marks[s.type.name])?void 0:i.priority)?o:0;return t?a-l:l-a};return t.forEach(((n,r,i)=>{if(!et(n))return void this.render(n,t,i);const o=n.marks||[],a=e.filter((t=>!o.includes(t))).sort(s()),l=o.filter((t=>!e.includes(t))).sort(s(!0));l.forEach((t=>e.push(t))),e=e.filter((t=>!a.includes(t)));const c=this.serializeMarks(l,t,i,!0),d=this.serializeMarks(a,t,i+1);this.write(d+c+n.text)})),(()=>{const s=this.serializeMarks(e,t,t.childCount+1);this.write(s)})(),this}renderList(t,e,s){this.closed&&this.closed.type===t.type&&this.flushClose(2),t.forEach(((n,r,i)=>{this.wrapBlock(e,t,(()=>this.render(n,t,i)),s(i))}))}}class ht extends X{constructor(){super(...arguments),this.id="serializerLoader",this.type=F.Internal,this.loadAfter=J.SchemaReady}main(){const t=function(t,e){return s=>{const n=new dt(t,e);return n.renderContent(s),n.output}}(tt(this.context.nodes,(t=>[t.id,t.serializer]),{text(t,e){const{text:s}=e;s&&t.text(s)}}),tt(this.context.marks,(t=>[t.id,t.serializer])));this.updateContext({serializer:t})}}class ut extends X{constructor(){super(...arguments),this.id="inputRulesLoader",this.type=F.Internal,this.loadAfter=J.SchemaReady}main(){const{nodes:t,marks:e,schema:s}=this.context,n=[...t.filter((t=>Boolean(t.inputRules))).reduce(((t,e)=>{const n=s.nodes[e.id];return n?[...t,...e.inputRules(n,s)]:t}),[]),...e.filter((t=>Boolean(t.inputRules))).reduce(((t,e)=>{const n=s.marks[e.id];return n?[...t,...e.inputRules(n,s)]:t}),[])];this.updateContext({inputRules:n})}}class pt extends X{constructor(){super(...arguments),this.id="keymapLoader",this.type=F.Internal,this.loadAfter=J.SchemaReady}main(){const{nodes:t,marks:e,schema:s}=this.context,n=[...t.filter((t=>Boolean(t.keymap))).map((t=>{const e=s.nodes[t.id];if(!e)throw new Error;return t.keymap(e)})),...e.filter((t=>Boolean(t.keymap))).map((t=>{const e=s.marks[t.id];if(!e)throw new Error;return t.keymap(e)}))].map((t=>l(t)));this.updateContext({keymap:n})}}class mt extends X{constructor(){super(...arguments),this.id="nodeViewsLoader",this.type=F.Internal,this.loadAfter=J.SchemaReady}main(){const{nodes:t,marks:e,schema:s,editor:n}=this.context,r=t.filter((t=>Boolean(t.view))).reduce(((t,e)=>{const r=s.nodes[e.id];if(!r)throw new Error;return i(i({},t),{[e.id]:(...t)=>e.view(n,r,...t)})}),{}),o=e.filter((t=>Boolean(t.view))).reduce(((t,e)=>{const r=s.marks[e.id];if(!r)throw new Error;return i(i({},t),{[e.id]:(...t)=>e.view(n,r,...t)})}),{}),a=i(i({},r),o);this.updateContext({nodeViews:a})}}class gt extends X{constructor(){super(...arguments),this.id="viewLoader",this.type=F.Internal,this.loadAfter=J.PluginReady}main(){const{nodeViews:t,serializer:e}=this.context,{listener:s}=this.options,n=this.createState(),r=this.createViewContainer(),i=new c(r,{state:n,nodeViews:t,dispatchTransaction:t=>{var n,r;const o=i.state.apply(t);i.updateState(o),null==(n=s.markdown)||n.forEach((t=>{t((()=>e(i.state.doc)))})),null==(r=s.doc)||r.forEach((t=>{t(i.state.doc)}))}});this.prepareViewDom(i.dom),this.updateContext({editorView:i})}createState(){const{parser:t,schema:e,inputRules:s,keymap:n,prosemirrorPlugins:r}=this.context,{defaultValue:i}=this.options,o=t(i);return d.create({schema:e,doc:o,plugins:[h(),l({"Mod-z":p,"Shift-Mod-z":m}),...n,...r,l(g),u({rules:s})]})}createViewContainer(){const{root:t}=this.options,e=document.createElement("div");return e.className="milkdown",t.appendChild(e),e}prepareViewDom(t){t.classList.add("editor"),t.setAttribute("role","textbox")}}const ft=t=>class extends X{constructor(){super(...arguments),this.id=t,this.type=F.ProsemirrorPlugin,this.loadAfter=J.SchemaReady}main(){this.updateContext({prosemirrorPlugins:this.context.prosemirrorPlugins.concat(...this.options.plugins(this.context))})}},kt=(t,e)=>new(ft(t))({plugins:e}),wt=t=>class extends X{constructor(){super(...arguments),this.id=t,this.type=F.ProsemirrorPlugin,this.loadAfter=J.SchemaReady}main(){const t=this.options.plugins(this.context).reduce(((t,e)=>Array.isArray(e)?t.use(...e):t.use(e)),this.context.markdownIt);this.updateContext({markdownIt:t})}};function xt(t,e){return new k(t,((t,s,n,r)=>{const{tr:i}=t,o=s.length;let a=n,l=r;if(s[o-1]){const c=s[0],d=s[o-1],h=s[o-2],u=n+c.indexOf(h),p=u+h.length-1,m=u+h.lastIndexOf(d),g=m+d.length;if(function(t,e,s){let n=[];return s.doc.nodesBetween(t,e,((t,e)=>{n=[...n,...t.marks.map((s=>({start:e,end:e+t.nodeSize,mark:s})))]})),n}(n,r,t).filter((t=>t.mark.type.excludes(e))).filter((t=>t.end>u)).length)return null;g<p&&i.delete(g,p),m>u&&i.delete(u,m),a=u,l=a+d.length}return i.addMark(a,l,e.create()),i.removeStoredMark(e),i}))}const yt=[new class extends Z{constructor(){super(...arguments),this.id="link",this.schema={attrs:{href:{},title:{default:null}},inclusive:!1,parseDOM:[{tag:"a[href]",getAttrs:t=>({href:t.getAttribute("href"),title:t.getAttribute("title")})}],toDOM:t=>["a",i(i({},t.attrs),{class:"link"})]},this.parser={mark:"link",getAttrs:t=>({href:t.attrGet("href"),title:t.attrGet("title")||null})},this.serializer={open:()=>"[",close:(t,e)=>`](${t.utils.escape(e.attrs.href)}${e.attrs.title?` ${t.utils.quote(e.attrs.title)}`:""})`,priority:1},this.inputRules=(t,e)=>[new k(/\[(?<text>.+?)]\((?<href>.*?)(?=“|\))"?(?<title>[^"]+)?"?\)/,((s,n,r,i)=>{const[o,a="",l,c]=n,{tr:d}=s;return o&&d.replaceWith(r,i,e.text(a)).addMark(r,a.length+r,t.create({title:c,href:l})),d}))]}},new class extends Z{constructor(){super(...arguments),this.id="strong",this.schema={parseDOM:[{tag:"b"},{tag:"strong"},{style:"font-style",getAttrs:t=>"bold"===t}],toDOM:()=>["strong",{class:"strong"}]},this.parser={mark:this.id},this.serializer={open:"**",close:"**"},this.inputRules=t=>[xt(/(?:__)([^_]+)(?:__)$/,t),xt(/(?:\*\*)([^*]+)(?:\*\*)$/,t)],this.keymap=t=>({"Mod-b":w(t)})}},new class extends Z{constructor(){super(...arguments),this.id="code_inline",this.schema={excludes:"_",parseDOM:[{tag:"code"}],toDOM:()=>["code",{class:"code-inline"}]},this.parser={mark:"code_inline"},this.serializer={open:"`",close:"`"},this.inputRules=t=>[xt(/(?:^|[^`])(`([^`]+)`)$/,t)]}},new class extends Z{constructor(){super(...arguments),this.id="em",this.schema={parseDOM:[{tag:"i"},{tag:"em"},{style:"font-style",getAttrs:t=>"italic"===t}],toDOM:()=>["em",{class:"em"}]},this.parser={mark:"em"},this.serializer={open:"*",close:"*"},this.inputRules=t=>[xt(/(?:^|[^_])(_([^_]+)_)$/,t),xt(/(?:^|[^*])(\*([^*]+)\*)$/,t)],this.keymap=t=>({"Mod-i":w(t)})}}];const bt=Array(5).fill(0).map(((t,e)=>e+1));const vt=["","javascript","typescript","bash","sql","json","c","cpp","java","ruby","python","go","rust"];const Mt=[new class extends Q{constructor(){super(...arguments),this.id="paragraph",this.schema={content:"inline*",group:"block",parseDOM:[{tag:"p"}],toDOM:()=>["p",{class:"paragraph"},0]},this.parser={block:this.id},this.serializer=(t,e)=>{t.renderInline(e).closeBlock(e)}}},new class extends Q{constructor(){super(...arguments),this.id="hardbreak",this.schema={inline:!0,group:"inline",selectable:!1,parseDOM:[{tag:"br"}],toDOM:()=>["br",{class:"bard-break"}]},this.parser={block:this.id},this.serializer=t=>{t.write("  \n")},this.keymap=t=>({"Shift-Enter":(e,s)=>(null==s||s(e.tr.replaceSelectionWith(t.create()).scrollIntoView()),!0)})}},new class extends Q{constructor(){super(...arguments),this.id="blockquote",this.schema={content:"block+",group:"block",defining:!0,parseDOM:[{tag:"blockquote"}],toDOM:()=>["blockquote",{class:"blockquote"},0]},this.parser={block:this.id},this.serializer=(t,e)=>{t.wrapBlock("> ",e,(()=>t.renderContent(e)))},this.inputRules=t=>[x(/^\s*>\s$/,t)]}},new class extends Q{constructor(){super(...arguments),this.id="fence",this.schema={content:"text*",group:"block",marks:"",defining:!0,code:!0,attrs:{language:{default:""}},parseDOM:[{tag:"pre",preserveWhitespace:"full",getAttrs:t=>({language:t.dataset.language})}],toDOM:t=>{const e=this.createSelectElement(t.attrs.language);return["div",{"data-language":t.attrs.language,class:"code-fence"},["div",{contentEditable:"false"},e],["pre",["code",{spellCheck:"false"},0]]]}},this.parser={block:this.id,getAttrs:t=>({language:t.info})},this.serializer=(t,e)=>{t.write("```"+e.attrs.language+"\n"),t.text(e.textContent),t.ensureNewLine(),t.write("```"),t.closeBlock(e)},this.inputRules=t=>[y(/^```$/,t)],this.keymap=()=>({Tab:(t,e)=>{const{tr:s,selection:n}=t;return!!e&&(e(s.insertText("  ",n.from,n.to)),!0)}})}onChangeLanguage(t,e,s){const{editorView:n}=this.context,r=n.posAtCoords({top:t,left:e});if(!r)return;const i=n.state.tr.setNodeMarkup(r.inside,void 0,{language:s});n.dispatch(i)}createSelectElement(t){const e=document.createElement("select");return e.className="code-fence_select",e.addEventListener("change",(t=>{if(this.context.loadState!==J.Complete)throw new Error("Should not trigger event before milkdown ready.");const e=t.target;if(!e)return;const{top:s,left:n}=e.getBoundingClientRect();this.onChangeLanguage(s,n,e.value)})),vt.forEach((s=>{const n=document.createElement("option");n.className="code-fence_select-option",n.value=s,n.innerText=s||"--",n.selected=t===s,e.appendChild(n)})),e}},new class extends Q{constructor(){super(...arguments),this.id="ordered_list",this.schema={content:"list_item+",group:"block",attrs:{order:{default:1}},parseDOM:[{tag:"ol",getAttrs:t=>({order:t.hasAttribute("start")?Number(t.getAttribute("start")):1})}],toDOM:t=>["ol",i(i({},1===t.attrs.order?{}:t.attrs.order),{class:"ordered-list"}),0]},this.parser={block:this.id},this.serializer=(t,e)=>{const{order:s=1}=e.attrs,n=(""+(s+e.childCount-1)).length,r=t.utils.repeat(" ",n+2);t.renderList(e,r,(e=>{const r=`${s+e}`;return t.utils.repeat(" ",n-r.length)+r+". "}))},this.inputRules=t=>[x(/^(\d+)\.\s$/,t,(t=>({order:Number(t[1])})),((t,e)=>e.childCount+e.attrs.order===Number(t[1])))]}},new class extends Q{constructor(){super(...arguments),this.id="bullet_list",this.schema={content:"list_item+",group:"block",parseDOM:[{tag:"ul"}],toDOM:()=>["ul",{class:"bullet-list"},0]},this.parser={block:this.id},this.serializer=(t,e)=>{t.renderList(e,"  ",(()=>"* "))},this.inputRules=t=>[x(/^\s*([-+*])\s$/,t)]}},new class extends Q{constructor(){super(...arguments),this.id="list_item",this.schema={content:"paragraph block*",defining:!0,parseDOM:[{tag:"li"}],toDOM:()=>["li",{class:"list-item"},0]},this.parser={block:this.id},this.serializer=(t,e)=>{t.renderContent(e)},this.keymap=t=>({Enter:b(t),"Mod-]":v(t),"Mod-[":M(t)})}},new class extends Q{constructor(){super(...arguments),this.id="heading",this.schema={content:"text*",group:"block",attrs:{level:{default:1}},parseDOM:bt.map((t=>({tag:`h${t}`,attrs:{level:t}}))),toDOM:t=>[`h${t.attrs.level}`,{class:`heading h${t.attrs.level}`},0]},this.parser={block:this.id,getAttrs:t=>({level:Number(t.tag.slice(1))})},this.serializer=(t,e)=>{t.write(`${t.utils.repeat("#",e.attrs.level)} `),t.renderInline(e),t.closeBlock(e)},this.inputRules=t=>bt.map((e=>y(new RegExp(`^(#{1,${e}})\\s$`),t,(()=>({level:e})))))}},new class extends Q{constructor(){super(...arguments),this.id="hr",this.schema={group:"block",parseDOM:[{tag:"hr"}],toDOM:()=>["hr",{class:"hr"}]},this.parser={block:this.id},this.serializer=(t,e)=>{t.write("---"),t.closeBlock(e)},this.inputRules=t=>[new k(/^(?:---|___\s|\*\*\*\s)$/,((e,s,n,r)=>{const{tr:i}=e;return s[0]&&i.replaceWith(n,r,t.create({})),i}))]}},new class extends Q{constructor(){super(...arguments),this.id="image",this.schema={inline:!0,attrs:{src:{},alt:{default:null},title:{default:null}},group:"inline",draggable:!0,marks:"",parseDOM:[{tag:"img[src]",getAttrs:t=>({src:t.getAttribute("src"),alt:t.getAttribute("alt"),title:t.getAttribute("title")})}],toDOM:t=>["img",i(i({},t.attrs),{class:"image"})]},this.parser={node:"image",getAttrs:t=>{var e,s;return{src:t.attrGet("src"),alt:(null==(s=null==(e=t.children)?void 0:e[0])?void 0:s.content)||null,title:t.attrGet("title")}}},this.serializer=(t,e)=>{const s=t.utils.escape(e.attrs.alt||""),n=e.attrs.title?" "+t.utils.quote(e.attrs.title):"",r=t.utils.escape(e.attrs.src)+n;t.write(`![${s}](${r}) `)},this.inputRules=t=>[new k(/!\[(?<alt>.*?)]\((?<filename>.*?)(?=“|\))"?(?<title>[^"]+)?"?\)/,((e,s,n,r)=>{const[i,o,a,l]=s,{tr:c}=e;return i&&c.replaceWith(n,r,t.create({src:a,alt:o,title:l})),c}))]}},new class extends Q{constructor(){super(...arguments),this.id="tab_indent",this.schema={group:"inline",inline:!0,selectable:!1,parseDOM:[{tag:"span[class='tab-indent']"}],toDOM:()=>["span",{class:"tab-indent"},"  "]},this.parser={block:this.id},this.serializer=t=>{t.write("  ")},this.keymap=t=>({Tab:(e,s)=>{const{selection:n}=e.tr,r=Boolean(e.tr);if(!n)return r;const{from:i,to:o}=n;if(i!==o||!t)return r;const a=e.tr.replaceSelectionWith(t.create()).scrollIntoView();return null==s||s(a),Boolean(a)}})}}],$t=(Ct=t=>t.isBlock,(t,e)=>((t,e=!0)=>{const s=[];return t.descendants(((t,n)=>{if(s.push({node:t,pos:n}),!e)return!1})),s})(t,e).filter((t=>Ct(t.node))));var Ct;const Ot={};const Et="MILKDOWN_PLUGIN_PRISM";function At(t){let e=!1;return new E({key:new A(Et),state:{init:(t,{doc:e})=>$.create(e,[]),apply:(s,n,r,i)=>{const o=i.selection.$head.parent.type.name===t,a=r.selection.$head.parent.type.name===t,l=s.docChanged&&(o||a);return!e||l?(e=!0,function(t,e){const s=[],n=$t(t).filter((t=>t.node.type.name===e));return n.forEach((t=>{var e;let n=t.pos+1;const r=t.node.attrs.language;if(r){if(!(null==(e=Ot[t.pos])?void 0:e.node.eq(t.node))){const e=C.highlight(t.node.textContent,r),s=(t,e=[])=>t.flatMap((t=>"element"===t.type?s(t.children,[...e,...t.properties.className||[]]):[{text:t.value,className:e}])),i=s(e).map((({text:t,className:e})=>{const s=n,r=s+t.length;return n=r,O.inline(s,r,{class:e.join(" ")})}));Ot[t.pos]={node:t.node,dec:i}}Ot[t.pos].dec.forEach((t=>{s.push(t)}))}})),Object.keys(Ot).filter((t=>!n.find((e=>e.pos===Number(t))))).forEach((t=>{delete Ot[Number(t)]})),$.create(t,s)}(s.doc,t)):n.map(s.mapping,s.doc)}},view:t=>(window.requestAnimationFrame((()=>{t.dispatch(t.state.tr.setMeta(Et,{loaded:!0}))})),{}),props:{decorations(t){return this.getState(t)}}})}const St=kt("prism",(()=>[At("fence")]));function It(t){const e=document.createElement("span");return e.textContent=t,e.className="icon material-icons material-icons-outlined",e}function _t(){const t=document.createElement("div");t.className="group";const e=document.createElement("input");e.className="icon input";const s=It("check_circle");return t.appendChild(e),t.appendChild(s),t}var Rt,Lt;function Bt(t,e){const{from:s,to:n}=t.state.selection;return t.state.doc.rangeHasMark(s,n,e)}function Tt(t,e){let s;const{from:n,to:r}=t.selection;return t.doc.nodesBetween(n,r,(t=>{if(s)return!1;t.marks.find((t=>t.type===e))&&(s=t)})),s}function Pt(t,e){return!(t.state.selection instanceof S)||function(t){return"fence"===t.selection.$head.parent.type.name}(t.state)||Bt(t,e)}(Lt=Rt||(Rt={}))[Lt.ToggleBold=0]="ToggleBold",Lt[Lt.ToggleItalic=1]="ToggleItalic",Lt[Lt.ToggleCode=2]="ToggleCode",Lt[Lt.ToggleLink=3]="ToggleLink",Lt[Lt.ModifyLink=4]="ModifyLink";const Dt=t=>{const{marks:e}=t.schema;return{[Rt.ToggleBold]:{$:It("format_bold"),command:()=>w(e.strong),active:t=>Bt(t,e.strong),disable:t=>Pt(t,e.code_inline)},[Rt.ToggleItalic]:{$:It("format_italic"),command:()=>w(e.em),active:t=>Bt(t,e.em),disable:t=>Pt(t,e.code_inline)},[Rt.ToggleCode]:{$:It("code"),command:()=>w(e.code_inline),active:t=>Bt(t,e.code_inline),disable:t=>Pt(t,e.link)},[Rt.ToggleLink]:{$:It("link"),command:()=>w(e.link,{href:""}),active:t=>Bt(t,e.link),disable:t=>Pt(t,e.code_inline)},[Rt.ModifyLink]:{$:_t(),command:(t,s)=>{const n=t.target;if(n.tagName==="input".toUpperCase())return n.focus(),()=>!1;if(n.tagName==="span".toUpperCase()){const t=Tt(s.state,e.link);if(!t)return()=>!1;const r=t.marks.find((t=>t.type===e.link));if(!r)return()=>!1;const{start:o,end:a}=function(t,e,s,n){let r={start:-1,end:-1};return e.nodesBetween(s,n,((e,s)=>{if(r.start>-1)return!1;-1===r.start&&t.isInSet(e.marks)&&(r={start:s,end:s+Math.max(e.textContent.length,1)})})),r}(r,s.state.doc,s.state.selection.from,s.state.selection.to);return(t,s)=>{var l;if(!s)return!1;const{tr:c}=t;return c.removeMark(o,a),c.addMark(o,a,e.link.create(i(i({},r.attrs),{href:null==(l=n.parentNode)?void 0:l.firstChild.value}))),c.setSelection(new S(c.selection.$anchor)),s(c.scrollIntoView()),!0}}return()=>!0},active:()=>!1,disable:t=>!Bt(t,e.link),update:(t,s)=>{const n=Tt(t.state,e.link);if(!n)return;const r=n.marks.find((t=>t.type===e.link));r&&(s.firstChild.value=r.attrs.href)}}}};class Nt{constructor(t,e,s){var n;this.ctx=t,this.items=e,this.view=s,this.listener=t=>{const{view:e}=this;e&&(t.stopPropagation(),Object.values(this.items).forEach((({$:s,command:n})=>{s.contains(t.target)&&n(t,e)(e.state,e.dispatch)})))},this.$=document.createElement("div"),this.$.className="tooltip",Object.values(e).forEach((({$:t})=>this.$.appendChild(t))),null==(n=s.dom.parentNode)||n.appendChild(this.$),this.update(s),this.$.addEventListener("mousedown",this.listener)}update(t,e){const s=t.state;(null==e?void 0:e.doc.eq(s.doc))&&e.selection.eq(s.selection)||(s.selection.empty?this.hide():(this.calculateItem(t),Object.values(this.items).every((({$:t})=>t.classList.contains("hide")))||(this.$.classList.remove("hide"),this.calculatePosition(t))))}destroy(){this.$.removeEventListener("mousedown",this.listener),this.$.remove()}hide(){this.$.classList.add("hide")}calculateItem(t){Object.values(this.items).forEach((e=>{var s,n;if(null==(s=e.disable)?void 0:s.call(e,t))return void e.$.classList.add("hide");e.$.classList.remove("hide"),null==(n=e.update)||n.call(e,t,e.$);e.active(t)?e.$.classList.add("active"):e.$.classList.remove("active")}))}calculatePosition(t){var e;const s=t.state,{from:n,to:r}=s.selection,i=t.coordsAtPos(n),o=t.coordsAtPos(r),a=Math.max((i.left+o.left)/2,i.left+3),l=null==(e=this.$.offsetParent)?void 0:e.getBoundingClientRect();l&&(this.$.style.left=a-l.left+"px",this.$.style.bottom=l.bottom-i.top+"px")}}const zt=t=>new E({key:new A("MILKDOWN_PLUGIN_TOOLTIP"),view:e=>new Nt(t,Dt(t),e)}),jt=kt("tooltip",(t=>[zt(t)]));const Vt=l({Backspace:I(B,T,P,D),"Mod-Enter":I(N,z,j,V),Delete:I(B,W,q)}),Wt=[new class extends Q{constructor(){super(...arguments),this.id="math_inline",this.schema={group:"inline math",content:"text*",inline:!0,atom:!0,parseDOM:[{tag:"math-inline"}],toDOM:()=>["math-inline",{class:"math-node"},0]},this.parser={block:this.id},this.serializer=(t,e)=>{t.write("$"),t.renderContent(e),t.write("$")},this.inputRules=t=>[R(G,t)]}},new class extends Q{constructor(){super(...arguments),this.id="math_display",this.schema={group:"block math",content:"text*",atom:!0,code:!0,parseDOM:[{tag:"math-display"}],toDOM:()=>["math-display",{class:"math-node"},0]},this.parser={block:"math_block"},this.serializer=(t,e)=>{t.write("$$").ensureNewLine().renderContent(e).ensureNewLine().write("$$").closeBlock(e)},this.inputRules=t=>[L(H,t)]}},kt("mathProsemirrorPlugin",(()=>[_,Vt])),(qt="mathMarkdownItPlugin",Ut=()=>[U],new(wt(qt))({plugins:Ut}))];var qt,Ut;const Gt=document.getElementById("app");if(!Gt)throw new Error;const Ht=new class{constructor(t){this.atoms=[],this.ctx={loadState:J.Idle,markdownIt:new f("commonmark"),nodes:[],marks:[],editor:this,prosemirrorPlugins:[]},this.updateCtx=t=>{Object.assign(this.ctx,t)};const e=i({root:document.body,defaultValue:"",listener:{}},t);this.use([new st,new lt,new ht,new pt,new ut,new mt,new gt(e)])}injectCtx(){this.atoms.forEach((t=>t.injectContext(this.ctx,this.updateCtx)))}runAtomByLoadState(t){this.atoms.filter((e=>e.loadAfter===t)).forEach((t=>{t.main()}))}addAtom(t){const e=this.atoms.findIndex((e=>e.id===t.id));e>=0&&(console.warn(`Atom: ${t.id} is conflicted with previous atom, the previous one will be override.`),this.atoms.splice(e,1)),this.atoms.push(t)}use(t){return Array.isArray(t)?(t.forEach((t=>{this.addAtom(t)})),this):(this.addAtom(t),this)}create(){this.injectCtx(),[J.Idle,J.BuildSchema,J.SchemaReady,J.PluginReady,J.Complete].forEach((t=>{this.ctx.loadState=t,this.runAtomByLoadState(t)}))}}({root:Gt,defaultValue:"\n# Milkdown\n\n![logo](/milkdown/milkdown-mini.svg)\n\n> Milkdown is a WYSIWYG markdown editor.\n>\n> Here is the [repo](https://github.com/Saul-Mirone/milkdown) (*right click to open link*).\n\nYou can check the output markdown text in **developer tool**.\n\n---\n\nYou can add `inline code` and code block:\n\n```javascript\nfunction main() {\n    console.log('Hello milkdown!');\n}\n```\n\n---\n\nMath is supported by [TeX expression](https://en.wikipedia.org/wiki/TeX).\n\nNow we have some inline math: $V \\times W \\stackrel{\\otimes}{\\rightarrow} V \\otimes W$. You can click to edit it.\n\nMath block is also supported. \n\n$$\n\\mathcal{L}(V \\otimes W, Z) \\cong \\big\\{ \\substack{\\text{bilinear maps}\\\\{V \\times W \\rightarrow Z}} \\big\\}\n$$\n\nYou can type `$$` and a `space` to create a math block.\n\n---\n\nHave fun!\n",listener:{markdown:[t=>console.log(t())]}}).use(Mt).use(yt).use(St).use(Wt);/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||Ht.use(jt),Ht.create();
