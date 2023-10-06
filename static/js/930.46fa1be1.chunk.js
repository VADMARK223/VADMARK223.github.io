"use strict";(self.webpackChunkkg=self.webpackChunkkg||[]).push([[930],{2930:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r=t(4165),o=t(5861),c=t(2791),u=t(3099),i=t(7309),s=t(3433),a=t(950),f=t(327),l=t(7248);function d(n,e,t,r){var o=[a.Nb.run({fn:function(n){return e(n)}})];if(r&&o.unshift(r),t){var c=(0,a.dS)({node:o}),u=n.graphite.id,i=t.additionalLinks,s=i[u]||[];return i[u]=s,s.push(c),function(){var n=s.indexOf(c);-1!==n&&s.splice(n,1),(0,a.PO)(c)}}var f=(0,a.dS)({node:o,parent:[n],family:{owners:n}});return function(){(0,a.PO)(f)}}function p(n,e){a.is.store(n)||x("expect useStore argument to be a store");var t=c.useCallback((function(t){return d(n,t,e)}),[n,e]),r=c.useCallback((function(){return Z(n,e)}),[n,e]);return y(t,r,r)}function h(n){var e=c.useContext(k);return n&&!e&&x("No scope found, consider adding <Provider> to app root"),e}function v(n,e){return p(n,h(null==e?void 0:e.forceScope))}var x=function(n){throw Error(n)},y=("undefined"!=typeof window?c.useLayoutEffect:c.useEffect,l.useSyncExternalStore),Z=(f.useSyncExternalStoreWithSelector,function(n,e){return e?e.getState(n):n.getState()}),k=c.createContext(null),j=(k.Provider,t(9993)),g=t(6052),C=t(184),m=(0,a.MT)(0,{name:"Count store."}),b=(0,a.yM)("Increment count."),w=(0,a.yM)("Decrement count."),P=(0,a.yM)("Reset count store.");m.on(b,(function(n){return n+1})).on(w,(function(n){return n-1})).reset(P);var S=(0,a.GW)("Get tags.");S.use((0,o.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://localhost:60899/get_dic").then((function(n){n.json().then((function(n){console.log("Result",n)}))}));case 2:case"end":return n.stop()}}),n)}))));var M=(0,a.GW)("Fetch dic effect.",{handler:function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e).then(function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.json();case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}),E=(0,a.MT)(null,{name:"Dic store."}).on(M.doneData,(function(n,e){return e.words}));(0,a.MT)([],{name:"Tags store"}).watch(console.log);var O=function(){var n=v(m),e=(v(E),v(M.pending)),t=function(n,e){return function(n,e){if(!e)return n;var t=a.is.unit(n)||"object"!=typeof n?{event:n}:n;return c.useMemo((function(){if(a.is.unit(n))return(0,a.WC)(n,{scope:e});var t=Array.isArray(n)?[]:{};for(var r in n)t[r]=(0,a.WC)(n[r],{scope:e});return t}),[e].concat((0,s.Z)(Object.keys(t)),(0,s.Z)(Object.values(t))))}(n,h(null==e?void 0:e.forceScope))}(M);return(0,C.jsxs)(u.Z,{direction:"vertical",children:[(0,C.jsxs)(u.Z,{children:[(0,C.jsx)(i.ZP,{type:"primary",onClick:function(){b()},children:"+"}),(0,C.jsx)(i.ZP,{type:"primary",onClick:function(){w()},children:"-"}),(0,C.jsx)(i.ZP,{type:"primary",onClick:function(){P()},children:"Reset"}),(0,C.jsxs)("span",{children:["Count: ",n]})]}),(0,C.jsxs)(u.Z,{children:[(0,C.jsx)(i.ZP,{onClick:function(){(0,g.j)([b,w],{log:"disabled"})},children:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f Unit"}),(0,C.jsx)(i.ZP,{onClick:function(){(0,g.j)([b,w],{log:"enabled"})},children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 Unit"})]}),(0,C.jsx)(i.ZP,{onClick:function(){(0,j.J)()},children:"\u041f\u0440\u0435\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),(0,C.jsx)(i.ZP,{onClick:function(){S(null)},children:"Get tags"}),(0,C.jsx)(i.ZP,{type:"primary",disabled:e,onClick:function(){t("http://localhost:60899/get_dic").then((function(n){console.log("VAle",n)}))},children:"Fetch dic"})]})}}}]);
//# sourceMappingURL=930.46fa1be1.chunk.js.map