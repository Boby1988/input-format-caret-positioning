(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{188:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(34),i=n.n(o),c=n(18),l=n(5),u=n(191),m=Object(l.c)({form:u.a}),s=[],f=window.__REDUX_DEVTOOLS_EXTENSION__||function(){return function(e){return e}};"function"===typeof f&&s.push(f());var g=l.d.apply(void 0,[l.a.apply(void 0,[])].concat(s)),p=Object(l.e)(m,{},g),v=n(80),h=n(190),d=n(189),E=function(e){return r.a.createElement("div",Object.assign({style:{marginTop:"0.5em",marginBottom:"1em"}},e))};function w(e,t,n,a){var r=e.target,o=r.selectionStart;if(n){var i=t.replace(/[^0-9]/g,""),c=n.replace(/[^0-9]/g,"").length,l=i.length;console.log("caretPositioning",{value:t,previousValue:n,caret:o,pvLength:c,vLength:l}),c<=l&&"-"===t.substring(o,o+1)&&(console.log("ez"),o=Math.min(o+1,t.length))}window.requestAnimationFrame(function(){r.selectionStart=o,r.selectionEnd=o})}var b=function(e){var t=e.input,n=Object(v.a)(e,["input"]);return r.a.createElement("div",n,r.a.createElement("input",Object.assign({type:"text"},t)))};function O(e,t){if(!e)return"";var n=[4,2,2];if(t&&t.length>e.length)return e;var a="",r=e.replace(/[^0-9]/g,"");return n.forEach(function(e,t){if(r.length>0){var o=r.slice(0,e),i=r.slice(e);a+=o,o.length===e&&t<n.length-1&&(a+="-"),r=i}}),a}var y=Object(d.a)({form:"test_form"})(function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t,autoComplete:"off"},r.a.createElement(E,null,r.a.createElement(h.a,{component:b,name:"date",normalize:O,onChange:w})),r.a.createElement("button",{type:"submit"},"Ment\xe9s"))});var _=function(){return r.a.createElement(c.a,{store:p},r.a.createElement("div",{className:"App"},r.a.createElement("h4",null,"Test form comes here"),r.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,n){e.exports=n(188)}},[[82,1,2]]]);
//# sourceMappingURL=main.2f28355d.chunk.js.map