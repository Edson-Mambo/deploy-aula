import{c as g,h}from"./render.221c6585.js";import{i,e as t,c as l,h as f,l as x,a as y,g as m,_ as v,u as _,v as C,x as $,y as P,H as a,C as Q}from"./index.4586ad48.js";var b=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(o,{slots:r}){const{proxy:{$q:s}}=m(),e=i(x,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(i(y,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const c=l(()=>{const n=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof o.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:s.screen.height;return o.styleFn(n,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-n+"px":s.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":s.screen.height-n+"px"}}),u=l(()=>`q-page${o.padding===!0?" q-layout-padding":""}`);return()=>f("main",{class:u.value,style:c.value},h(r.default))}});const F=_({name:"IndexPage"}),z=a("div",{class:"row text-center"},[a("div",{class:"col-12"},[a("img",{alt:"Quasar logo",src:"images/i1.png"})]),a("div",{class:"col-12"},[a("div",{class:"text-h6 text-primary text-bold",style:{"font-size":"20pt"}},[Q(" Aula deploy, na "),a("a",{href:"https://explicador.co.mz",target:"blank",style:{color:"blue"}}," Explicador Inc ")])])],-1);function B(o,r,s,e,d,c){return C(),$(b,{class:"flex flex-center"},{default:P(()=>[z]),_:1})}var k=v(F,[["render",B]]);export{k as default};
