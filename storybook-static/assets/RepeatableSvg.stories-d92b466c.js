import{d as q,e as m,f as b,o as r,g as i,k as a,p as x,F as k,j as s,y as j,z as $,v as M,s as w}from"./vue.esm-bundler-e31f75a1.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const A=o=>(j("data-v-0ae1655b"),o=o(),$(),o),B={class:"settings-container"},C={class:"colors"},O={class:"colors"},H=A(()=>s("div",{class:"settings-container"},[s("div",null,[s("h3",{class:"mb-2"},"Select store")])],-1)),N=q({__name:"RepeatableSvgWidgetSettings",props:["component"],setup(o){const l=o,u=m({textSection:!1,storeSection:!1});return(f,e)=>{const d=b("va-input"),n=b("va-color-input"),v=b("va-collapse");return r(),i(k,null,[a(v,{modelValue:u.value.textSection,"onUpdate:modelValue":e[7]||(e[7]=t=>u.value.textSection=t),header:"SVG  widget settings"},{default:x(()=>[s("div",B,[a(d,{modelValue:l.component.src,"onUpdate:modelValue":e[0]||(e[0]=t=>l.component.src=t),label:"src"},null,8,["modelValue"]),a(d,{modelValue:l.component.repeations,"onUpdate:modelValue":e[1]||(e[1]=t=>l.component.repeations=t),label:"repeations"},null,8,["modelValue"]),a(d,{modelValue:l.component.progress,"onUpdate:modelValue":e[2]||(e[2]=t=>l.component.progress=t),label:"progress"},null,8,["modelValue"]),s("div",C,[a(n,{class:"color-input",modelValue:l.component.activeItemStyles.fill,"onUpdate:modelValue":e[3]||(e[3]=t=>l.component.activeItemStyles.fill=t),label:"Active item fill"},null,8,["modelValue"]),a(n,{class:"color-input",modelValue:l.component.activeItemStyles.stroke,"onUpdate:modelValue":e[4]||(e[4]=t=>l.component.activeItemStyles.stroke=t),label:"Active item stroke"},null,8,["modelValue"])]),s("div",O,[a(n,{class:"color-input",modelValue:l.component.defaultItemStyles.fill,"onUpdate:modelValue":e[5]||(e[5]=t=>l.component.defaultItemStyles.fill=t),label:"Default item fill"},null,8,["modelValue"]),a(n,{class:"color-input",modelValue:l.component.defaultItemStyles.stroke,"onUpdate:modelValue":e[6]||(e[6]=t=>l.component.defaultItemStyles.stroke=t),label:"Default item stroke"},null,8,["modelValue"])])])]),_:1},8,["modelValue"]),a(v,{modelValue:u.value.storeSection,"onUpdate:modelValue":e[8]||(e[8]=t=>u.value.storeSection=t),header:"Store settings"},{default:x(()=>[H]),_:1},8,["modelValue"])],64)}}});const T=W(N,[["__scopeId","data-v-0ae1655b"]]);N.__docgenInfo={exportName:"default",displayName:"RepeatableSvgWidgetSettings",description:"",tags:{},props:[{name:"component",type:{name:"undefined"}}],sourceFiles:["/home/markus/dev/xmla_slava/XMLAClient/src/components/Widgets/RepeatableSvg/RepeatableSvgWidgetSettings.vue"]};const D={class:"repeatable-svg-container"},P=["viewBox"],E={id:"bubbleKenseo"},K=["width"],X=["fill","stroke"],z=["innerHTML","transform"],G=["fill","stroke"],J=["innerHTML","transform"],U=q({__name:"RepeatableSvgWidget",props:{initialState:{type:Object,required:!1},src:{type:String,required:!1,default:"/demo/human.svg"},activeItemStyles:{type:Object,required:!1,default:()=>({fill:"#ff0000",stroke:"#FFFF00"})},defaultItemStyles:{type:Object,required:!1,default:()=>({fill:"#777777",stroke:"#777777"})},repeations:{type:Number,required:!1,default:4},progress:{type:Number,required:!1,default:.5}},setup(o,{expose:l}){const u=T,f=o,{src:e,activeItemStyles:d,defaultItemStyles:n,repeations:v,progress:t}=f,g=m(e||""),S=m({fill:d.fill||"#ff0000",stroke:d.stroke||"#FFFF00"}),y=m({fill:n.fill||"#777777",stroke:n.stroke||"#777777"}),p=m(v||4),V=m(t||.5);return M(async()=>{if(!f.src)return;const I=await(await fetch(f.src)).text();g.value=I}),l({src:g,activeItemStyles:S,defaultItemStyles:y,progress:V,repeations:p,settings:u}),(L,I)=>(r(),i("div",D,[(r(),i("svg",{fill:"#000000",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:`0 0 ${100*Number(p.value)} 100`,"enable-background":"new 0 0 100 100","xml:space":"preserve"},[s("defs",null,[s("mask",E,[s("rect",{x:"0",y:"0",style:{fill:"#adadad"},width:100*Number(p.value)*V.value,height:"100"},null,8,K)])]),s("g",{fill:y.value.fill,stroke:y.value.stroke},[(r(!0),i(k,null,w(Number(p.value),c=>(r(),i("g",{innerHTML:g.value,transform:`translate(${100*(c-1)}, 0)`,key:c},null,8,z))),128))],8,X),s("g",{mask:"url(#bubbleKenseo)",fill:S.value.fill,stroke:S.value.stroke},[(r(!0),i(k,null,w(Number(p.value),c=>(r(),i("g",{innerHTML:g.value,transform:`translate(${100*(c-1)}, 0)`,key:c},null,8,J))),128))],8,G)],8,P))]))}});const Q=W(U,[["__scopeId","data-v-19b4c941"]]);U.__docgenInfo={exportName:"default",displayName:"RepeatableSvgWidget",description:"",tags:{},expose:[{name:"src"},{name:"activeItemStyles"},{name:"defaultItemStyles"},{name:"progress"},{name:"repeations"},{name:"settings"}],props:[{name:"initialState",type:{name:"object"},required:!1},{name:"src",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"/demo/human.svg"'}},{name:"activeItemStyles",type:{name:"object"},required:!1,defaultValue:{func:!1,value:`{
  fill: "#ff0000",
  stroke: "#FFFF00"
}`}},{name:"defaultItemStyles",type:{name:"object"},required:!1,defaultValue:{func:!1,value:`{
  fill: "#777777",
  stroke: "#777777"
}`}},{name:"repeations",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"4"}},{name:"progress",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0.5"}}],sourceFiles:["/home/markus/dev/xmla_slava/XMLAClient/src/components/Widgets/RepeatableSvg/RepeatableSvgWidget.vue"]};const Y=""+new URL("human-d62ce06c.svg",import.meta.url).href,te={title:"Widget/StaticWidgets/RepeatableSvg",component:Q,tags:["autodocs"]},_={args:{src:Y,activeItemStyles:{fill:"red",stroke:"yellow"},defaultItemStyles:{fill:"#777",stroke:"#777"},repeations:3,progress:.3}};var F,h,R;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    src: Svg,
    activeItemStyles: {
      fill: "red",
      stroke: "yellow"
    },
    defaultItemStyles: {
      fill: "#777",
      stroke: "#777"
    },
    repeations: 3,
    progress: 0.3
  }
}`,...(R=(h=_.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};const le=["Primary"];export{_ as Primary,le as __namedExportsOrder,te as default};