import{_ as h,r as s,o as c,c as r,b as m,w as k,F as b,a as t,d as n,t as u,n as y,p as S,e as w}from"./index-Cb-1sI5N.js";import{_ as x}from"./MyTimer-BRFh-QPI.js";const C=o=>(S("data-v-2f3868f5"),o=o(),w(),o),B={class:"container"},I=C(()=>t("h1",null," Stopwatch ",-1)),g={class:"center"},D={class:"time-controls"},F={id:"time"},R={__name:"StopWatch",setup(o){const e=s(30);function l(){e.value>5&&(e.value-=5)}function p(){e.value+=5}function _(){e.value=30}const i=s(),a=s(!1);function d(){a.value=!0,y(()=>i.value.start(e.value))}function f(){a.value=!1}return(W,E)=>(c(),r("div",B,[a.value?(c(),m(x,{key:0,onDone:f,ref_key:"timer",ref:i},{default:k(({time:v})=>[I,t("h2",null,u(v),1)]),_:1},512)):(c(),r(b,{key:1},[t("div",g,[t("div",D,[t("button",{type:"button",onClick:n(l,["prevent"])},"-"),t("div",F,u(e.value)+"s",1),t("button",{type:"button",onClick:n(p,["prevent"])},"+")])]),t("button",{type:"button",onClick:n(d,["prevent"])},"Start"),t("button",{type:"button",onClick:n(_,["prevent"])},"Reset")],64))]))}},T=h(R,[["__scopeId","data-v-2f3868f5"]]);export{T as default};
