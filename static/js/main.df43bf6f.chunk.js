(this["webpackJsonpnba-search"]=this["webpackJsonpnba-search"]||[]).push([[0],{34:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(26),r=c.n(s),i=(c(34),c(13)),j=c(2),o=c(14),u=c.n(o),l=c(27),d=c(8),b=c(28),O=c.n(b),h=(c(54),c(55),c(1)),p=function(e){var t=e.handleSearch,c=Object(n.useState)(null),a=Object(d.a)(c,2),s=a[0],r=a[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s)},className:"form",children:[Object(h.jsx)("input",{type:"text",className:"input",name:"ciudad",id:"ciudad",placeholder:"Ingresa tu ciudad",onChange:function(e){e.target.value&&r(e.target.value)},autoComplete:"off"}),Object(h.jsx)("button",{type:"submit",className:"button",children:Object(h.jsx)("i",{className:"fas fa-search"})})]})})},m=(c(57),function(e){var t=e.response;if(!t)return null;var c=t.weather[0];return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)("p",{className:"city",children:["Clima de ",t.name,", ",t.sys.country]}),Object(h.jsxs)("div",{className:"imagen",children:[Object(h.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(c.icon,"@4x.png"),alt:""}),Object(h.jsx)("p",{className:"description",children:c.description})]}),Object(h.jsxs)("div",{className:"temp",children:[Object(h.jsxs)("p",{className:"tempC",children:[t.main.temp,"\xb0C"]}),Object(h.jsxs)("p",{className:"tempFeels",children:["Se siente como ",t.main.feels_like,"\xb0C"]})]})]})}),x=(c(58),function(e){var t=e.error;return Object(h.jsx)("div",{className:"error",children:Object(h.jsxs)("p",{children:["Error ",t.data.cod,": ",t.data.message]})})}),f=(c(59),function(){return Object(h.jsx)("div",{className:"loader",children:Object(h.jsxs)("div",{className:"lds-roller",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})})}),v=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),r=Object(d.a)(s,2),i=r[0],o=r[1],b=Object(n.useState)(!1),v=Object(d.a)(b,2),g=v[0],N=v[1],S=Object(n.useState)(""),w=Object(d.a)(S,2),C=w[0],y=w[1],F=Object(n.useState)(!1),k=Object(d.a)(F,2),E=k[0],q=k[1],I=Object(j.f)().search,L=new URLSearchParams(I).get("q"),P=Object(j.e)();return Object(n.useEffect)((function(){L&&a(L)}),[]),Object(n.useEffect)((function(){c&&(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(!0),e.prev=1,e.next=4,O.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&lang=es&units=metric&appid=32af7cce19ca153549abe935840d6753"));case 4:t=e.sent,o(t.data),N(!1),P.push({search:"?q=".concat(c)}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),y(e.t0.response),N(!0),setTimeout((function(){N(!1)}),5e3);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}()(),q(!1))}),[c]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h2",{children:"Clima Hoy"}),Object(h.jsx)("i",{className:"fas logo",children:"\uf6c4"})]}),Object(h.jsx)(p,{handleSearch:function(e){a(L?e:L)}}),E&&Object(h.jsx)(f,{}),g&&Object(h.jsx)(x,{error:C}),i&&Object(h.jsx)(m,{response:i})]})};var g=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(i.a,{children:Object(h.jsx)(j.a,{exact:!0,path:"/",component:v})})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),N()}},[[65,1,2]]]);
//# sourceMappingURL=main.df43bf6f.chunk.js.map