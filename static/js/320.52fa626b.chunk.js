"use strict";(self.webpackChunkkg=self.webpackChunkkg||[]).push([[320],{7801:function(s,r,e){e(2791);var d=e(184);r.Z=function(s){return(0,d.jsxs)("div",{children:["- ",s.kg,"\xa0\xa0",(0,d.jsxs)("i",{children:["- ",s.ru]})]})}},4320:function(s,r,e){e.r(r),e.d(r,{default:function(){return E}});var d=e(9439),x=e(2791),n=e(2444),l=e(184),i="\u0413\u043b\u0430\u0441\u043d\u0430\u044f",t=["\u0430","\u044d","\u043e","\u0435","\u04e9","\u0443","\u04af","\u044b","\u0438"],j="\u0417\u0432\u043e\u043d\u043a\u0430\u044f \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u0430\u044f",c=["\u0431","\u0432","\u0433","\u0434","\u0436","\u0437","\u043b","\u043c","\u043d","\u04a3","\u0440","\u0439"],h="\u0413\u043b\u0443\u0445\u0430\u044f \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u0430\u044f",o=["\u043f","\u0444","\u043a","\u0442","\u0448","\u0441","\u0445","\u0447","\u0449"],a=function(s){var r=s.value,e=s.bold,d=void 0!==e&&e,x=s.underline,a=void 0!==x&&x;return(0,l.jsx)(n.Z,{title:t.includes(r)?i:c.includes(r)?j:o.includes(r)?h:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u0442\u0438\u043f \u0431\u0443\u043a\u0432\u044b",children:(0,l.jsx)("span",{style:{cursor:"pointer",color:t.includes(r)?"red":c.includes(r)?"green":o.includes(r)?"blue":"black",fontWeight:d?"bold":void 0,textDecoration:a?"underline":void 0},children:r})})},u=function(s){var r=s.root,e=s.affix;if(x.isValidElement(e)){var d=e;return(0,l.jsxs)(l.Fragment,{children:[r,(0,l.jsx)(a,{value:d.props.value,bold:!0,underline:!0})]})}return(0,l.jsxs)(l.Fragment,{children:[r,(0,l.jsx)("b",{children:(0,l.jsx)("u",{children:e})})]})},f=function(s){var r=s.value;return(0,l.jsx)("span",{style:{color:"orangered"},children:(0,l.jsxs)("b",{children:["-",r]})})},v=e(3099),p=function(){return(0,l.jsxs)(v.Z,{size:1,direction:"vertical",children:[(0,l.jsxs)(v.Z,{children:[(0,l.jsx)("span",{children:"\u041a\u0440\u0430\u0442\u043a\u0438\u0435 \u0433\u043b\u0430\u0441\u043d\u044b\u0435:"})," ",t.map((function(s){return(0,l.jsx)(a,{value:s,bold:!0},s)}))]}),(0,l.jsxs)(v.Z,{children:[(0,l.jsx)("span",{children:"\u0417\u0432\u043e\u043d\u043a\u0438\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u044b\u0435:"}),c.map((function(s){return(0,l.jsx)(a,{value:s,bold:!0},s)}))]}),(0,l.jsxs)(v.Z,{children:[(0,l.jsx)("span",{children:"\u0413\u043b\u0443\u0445\u0438\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u044b\u0435:"})," ",o.map((function(s){return(0,l.jsx)(a,{value:s,bold:!0},s)}))]})]})},b=e(7801),w=e(592),Z=e(6414),g=e(1544),S=e(5527),k=e(2520),m=function(s){var r=s.word,e=(0,x.useState)(""),i=r.split(""),j=(0,x.useState)(null),h=(0,d.Z)(j,2),u=h[0],f=h[1],p=(0,x.useState)(!1),b=(0,d.Z)(p,2),m=b[0],y=b[1],C=function(s){return t.includes(s)},E=function(s){return c.includes(s)},F=function(s){return o.includes(s)},L=function(){for(var s="-",r=i.length-1;r>=0;r--)if(C(i[r])){s=i[r];break}return s}(),T=i[i.length-1],M="-";"\u0430"===L||"\u044f"===L||"\u044b"===L?C(T)||"\u0439"===T||"\u0440"===T?M="\u043b\u0430\u0440":E(T)?M="\u0434\u0430\u0440":F(T)&&(M="\u0442\u0430\u0440"):"\u044d"===L||"\u0435"===L||"\u0438"===L?C(T)||"\u0439"===T||"\u0440"===T?M="\u043b\u0435\u0440":E(T)?M="\u0434\u0435\u0440":F(T)&&(M="\u0442\u0435\u0440"):"\u04e9"===L||"\u04af"===L?C(T)||"\u0439"===T||"\u0440"===T?M="\u043b\u04e9\u0440":E(T)?M="\u0434\u04e9\u0440":F(T)&&(M="\u0442\u04e9\u0440"):"\u043e"!==L&&"\u0451"!==L&&"\u0443"!==L&&"\u044e"!==L||("\u043e"===L||"\u0451"===L?C(T)||"\u0439"===T||"\u0440"===T?M="\u043b\u043e\u0440":E(T)?M="\u0434\u043e\u0440":F(T)&&(M="\u0442\u043e\u0440"):"\u0443"!==L&&"\u044e"!==L||(C(T)||"\u0439"===T||"\u0440"===T?M="\u043b\u0430\u0440":E(T)?M="\u0434\u0430\u0440":F(T)&&(M="\u0442\u0430\u0440"))),(0,x.useEffect)((function(){""!==e[0]?f(e[0].toLowerCase()===M.toLowerCase()):f(null)}),[e[0]]);var W=function(){return null===u?(0,l.jsx)(n.Z,{title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0444\u0444\u0438\u043a\u0441",children:(0,l.jsx)(g.Z,{twoToneColor:"orange"})}):u?(0,l.jsx)(n.Z,{title:"\u041e\u0442\u0432\u0435\u0442 \u0432\u0435\u0440\u043d\u044b\u0439",children:(0,l.jsx)(S.Z,{twoToneColor:"#52c41a"})}):(0,l.jsx)(n.Z,{title:"\u041e\u0442\u0432\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439",children:(0,l.jsx)(k.Z,{twoToneColor:"red"})})};return(0,l.jsxs)(v.Z,{children:[(0,l.jsx)("div",{style:{minWidth:"50px"},children:r}),(0,l.jsx)(Z.Z,{valueState:e,placeholder:"\u0412\u043f\u0438\u0448\u0438\u0442\u0435 \u0430\u0444\u0444\u0438\u043a\u0441 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430",width:"80px"}),(0,l.jsx)(W,{}),(0,l.jsx)(n.Z,{title:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0443",children:(0,l.jsx)(w.Z,{checked:m,onChange:function(){y(!m)}})}),m&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:M}),"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0433\u043b\u0430\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043a\u043e\u0440\u043d\u044f: ",(0,l.jsx)(a,{value:L}),"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0431\u0443\u043a\u0432\u0430 \u0441\u043b\u043e\u0432\u0430: ",(0,l.jsx)(a,{value:T})]})]})},y=e(2234),C=e(2236),E=function(){var s=(0,x.useState)(!1),r=(0,d.Z)(s,2),e=r[0],n=r[1];(0,x.useEffect)((function(){var s=function(){var s=0===window.scrollY;n(s)};return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[]);var t=function(s){for(var r=s.length-1;r>0;r--){var e=Math.floor(Math.random()*(r+1)),d=[s[e],s[r]];s[r]=d[0],s[e]=d[1]}return s}(["\u043a\u043e\u0448\u0443\u043d\u0430","\u0442\u0435\u0430\u0442\u0440","\u0430\u0434\u0430\u043c","\u0431\u0430\u043a","\u0442\u0435\u043a\u0447\u0435","\u0431\u0430\u0442\u0438\u0440","\u0442\u0438\u043b","\u0430\u0434\u0438\u0441","\u043a\u04af\u0437\u0433\u04af","\u043a\u04af\u043d","\u0441\u04e9\u0437","\u0447\u04e9\u043d\u0442\u04e9\u043a","\u043f\u0430\u043b\u044c\u0442\u043e","\u043a\u043e\u043b","\u0441\u0442\u0430\u0434\u0438\u043e\u043d","\u0434\u043e\u0441","\u043a\u0443\u0440\u0431\u0443","\u043a\u043e\u043c\u0443\u0437","\u0436\u043e\u043e\u043b\u0443\u043a"]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{}),(0,l.jsx)("br",{}),"1. \u0424\u043e\u0440\u043c\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u0443\u0442\u0435\u043c \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043a \u043a\u043e\u0440\u043d\u044e \u0441\u043b\u043e\u0432\u0430 \u0430\u0444\u0444\u0438\u043a\u0441\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 ",(0,l.jsx)("b",{children:"-\u043b\u0430\u0440"}),(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{colSpan:2,children:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0433\u043b\u0430\u0441\u043d\u0430\u044f \u0431\u0443\u043a\u0432\u0430 \u043a\u043e\u0440\u043d\u044f"}),(0,l.jsx)("td",{children:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0431\u0443\u043a\u0432\u0430 \u043a\u043e\u0440\u043d\u044f"}),(0,l.jsx)("td",{children:"\u0410\u0444\u0444\u0438\u043a\u0441"}),(0,l.jsx)("td",{children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),(0,l.jsx)("td",{children:"\u041f\u0435\u0440\u0435\u0432\u043e\u0434"})]})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{rowSpan:5,colSpan:2,children:"\u0430, \u044f, \u044b"}),(0,l.jsx)("td",{children:i}),(0,l.jsx)("td",{rowSpan:3,children:(0,l.jsx)(f,{value:"\u043b\u0430\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u043a\u0438\u0442\u0435\u043f\u043a\u0430\u043d",affix:(0,l.jsx)(a,{value:"\u0430"})})," - ",(0,l.jsx)(u,{root:"\u043a\u0438\u0442\u0435\u043f\u043a\u0430\u043d\u0430",affix:"\u043b\u0430\u0440"})]}),(0,l.jsx)("td",{children:"\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 - \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(a,{value:"\u0439"})}),(0,l.jsx)("td",{children:"-"}),(0,l.jsx)("td",{children:"-"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(a,{value:"\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u0448\u0430\u0430",affix:(0,l.jsx)(a,{value:"\u0440"})})," - ",(0,l.jsx)(u,{root:"\u0448\u0430\u0430\u0440",affix:"\u043b\u0430\u0440"})]}),(0,l.jsx)("td",{children:"\u0433\u043e\u0440\u043e\u0434 - \u0433\u043e\u0440\u043e\u0434\u0430"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:j}),(0,l.jsx)("td",{children:(0,l.jsx)(f,{value:"\u0434\u0430\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u0430\u0434\u0430",affix:(0,l.jsx)(a,{value:"\u043c"})})," - ",(0,l.jsx)(u,{root:"\u0430\u0434\u0430\u043c",affix:"\u0434\u0430\u0440"})]}),(0,l.jsx)("td",{children:"\u0447\u0435\u043b\u043e\u0432\u0435\u043a - \u043b\u044e\u0434\u0438"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:h}),(0,l.jsx)("td",{children:(0,l.jsx)(f,{value:"\u0442\u0430\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u043c\u044b\u0448\u044b",affix:(0,l.jsx)(a,{value:"\u043a"})})," - ",(0,l.jsx)(u,{root:"\u043c\u044b\u0448\u044b\u043a",affix:"\u0442\u0430\u0440"})]}),(0,l.jsx)("td",{children:"\u043a\u043e\u0442 - \u043a\u043e\u0442\u044b"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{rowSpan:5,colSpan:2,children:"\u044d, \u0435, \u0438"}),(0,l.jsx)("td",{children:i}),(0,l.jsx)("td",{rowSpan:3,children:(0,l.jsx)(f,{value:"\u043b\u0435\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u043a\u0435\u043c",affix:(0,l.jsx)(a,{value:"\u0435"})})," - ",(0,l.jsx)(u,{root:"\u043a\u0435\u043c\u0435",affix:"\u043b\u0435\u0440"}),(0,l.jsx)("br",{})]}),(0,l.jsx)("td",{children:"\u043a\u043e\u0440\u0430\u0431\u043b\u044c - \u043a\u043e\u0440\u0430\u0431\u043b\u0438"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(a,{value:"\u0439"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u043c\u0443\u0437\u0435",affix:(0,l.jsx)(a,{value:"\u0439"})})," - ",(0,l.jsx)(u,{root:"\u043c\u0443\u0437\u0435\u0439",affix:"\u043b\u0435\u0440"})]}),(0,l.jsx)("td",{children:"\u043c\u0443\u0437\u0435\u0439 - \u043c\u0443\u0437\u0435\u0438"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(a,{value:"\u0440"})}),(0,l.jsx)("td",{children:"-"}),(0,l.jsx)("td",{children:"-"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:j}),(0,l.jsx)("td",{children:(0,l.jsx)(f,{value:"\u0434\u0435\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u043c\u0443\u0433\u0430\u043b\u0438",affix:(0,l.jsx)(a,{value:"\u043c"})})," - ",(0,l.jsx)(u,{root:"\u043c\u0443\u0433\u0430\u043b\u0438\u043c",affix:"\u0434\u0435\u0440"})]}),(0,l.jsx)("td",{children:"\u0443\u0447\u0438\u0442\u0435\u043b\u044c - \u0443\u0447\u0438\u0442\u0435\u043b\u044f"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:h}),(0,l.jsx)("td",{children:(0,l.jsx)(f,{value:"\u0442\u0435\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u043a\u0438\u0442\u0435",affix:(0,l.jsx)(a,{value:"\u043f"})})," - ",(0,l.jsx)(u,{root:"\u043a\u0438\u0442\u0435\u043f",affix:"\u0442\u0435\u0440"})]}),(0,l.jsx)("td",{children:"\u043a\u043d\u0438\u0433\u0430 - \u043a\u043d\u0438\u0433\u0438"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{rowSpan:5,colSpan:2,children:"\u04e9 \u04af"}),(0,l.jsx)("td",{children:i}),(0,l.jsx)("td",{rowSpan:3,children:(0,l.jsx)(f,{value:"\u043b\u04e9\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u0441\u04af\u0440\u04e9\u0442\u0447",affix:(0,l.jsx)(a,{value:"\u04af"})})," - ",(0,l.jsx)(u,{root:"\u0441\u04af\u0440\u04e9\u0442\u0447\u04af",affix:"\u043b\u04e9\u0440"})]}),(0,l.jsx)("td",{children:"\u0445\u0443\u0434\u043e\u0436\u043d\u0438\u043a - \u0445\u0443\u0434\u043e\u0436\u043d\u0438\u043a\u0438"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(a,{value:"\u0439"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u04af",affix:(0,l.jsx)(a,{value:"\u0439"})})," - ",(0,l.jsx)(u,{root:"\u04af\u0439",affix:"\u043b\u04e9\u0440"})]}),(0,l.jsx)("td",{children:"\u0434\u043e\u043c - \u0434\u043e\u043c\u0430"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(a,{value:"\u0440"})}),(0,l.jsx)("td",{children:"-"}),(0,l.jsx)("td",{children:"-"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:j}),(0,l.jsx)("td",{children:(0,l.jsx)(f,{value:"\u0434\u04e9\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u043a\u04e9",affix:(0,l.jsx)(a,{value:"\u043b"})})," - ",(0,l.jsx)(u,{root:"\u043a\u04e9\u043b",affix:"\u0434\u04e9\u0440"})]}),(0,l.jsx)("td",{children:"\u043e\u0437\u0435\u0440\u043e - \u043e\u0437\u0435\u0440\u0430"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:h}),(0,l.jsx)("td",{children:(0,l.jsx)(f,{value:"\u0442\u04e9\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u043a\u04e9\u0439\u043d\u04e9",affix:(0,l.jsx)(a,{value:"\u043a"})})," - ",(0,l.jsx)(u,{root:"\u043a\u04e9\u0439\u043d\u04e9\u043a",affix:"\u0442\u04e9\u0440"})]}),(0,l.jsx)("td",{children:"\u043f\u043b\u0430\u0442\u044c\u0435 - \u043f\u043b\u0430\u0442\u044c\u044f"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{rowSpan:10,children:"\u043e \u0451 \u0443 \u044e"}),(0,l.jsx)("td",{rowSpan:5,children:"\u043e \u0451"}),(0,l.jsx)("td",{children:i}),(0,l.jsx)("td",{rowSpan:3,children:(0,l.jsx)(f,{value:"\u043b\u043e\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u043a\u043e\u0440\u043e",affix:(0,l.jsx)(a,{value:"\u043e"})})," - ",(0,l.jsx)(u,{root:"\u043a\u043e\u0440\u043e\u043e",affix:"\u043b\u043e\u0440"})]}),(0,l.jsx)("td",{children:"\u0434\u0432\u043e\u0440 - \u0434\u0432\u043e\u0440\u044b"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(a,{value:"\u0439"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u0442\u043e",affix:(0,l.jsx)(a,{value:"\u0439"})})," - ",(0,l.jsx)(u,{root:"\u0442\u043e\u0439",affix:"\u043b\u043e\u0440"})]}),(0,l.jsx)("td",{children:"\u043f\u0438\u0440\u0448\u0435\u0441\u0442\u0432\u043e - \u043f\u0438\u0440\u0448\u0435\u0441\u0442\u0432\u0430"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(a,{value:"\u0440"})}),(0,l.jsx)("td",{children:"-"}),(0,l.jsx)("td",{children:"-"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:j}),(0,l.jsx)("td",{children:(0,l.jsx)(f,{value:"\u0434\u043e\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u043a\u043e",affix:(0,l.jsx)(a,{value:"\u043b"})})," - ",(0,l.jsx)(u,{root:"\u043a\u043e\u043b",affix:"\u0434\u043e\u0440"})]}),(0,l.jsx)("td",{children:"\u0440\u0443\u043a\u0430 - \u0440\u0443\u043a\u0438"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:h}),(0,l.jsx)("td",{children:(0,l.jsx)(f,{value:"\u0442\u043e\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u043a\u043e\u043d\u043e",affix:(0,l.jsx)(a,{value:"\u043a"})})," - ",(0,l.jsx)(u,{root:"\u043a\u043e\u043d\u043e\u043a",affix:"\u0442\u043e\u0440"})]}),(0,l.jsx)("td",{children:"\u0433\u043e\u0441\u0442\u044c - \u0433\u043e\u0441\u0442\u0438"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{rowSpan:5,children:"\u0443 \u044e"}),(0,l.jsx)("td",{children:i}),(0,l.jsx)("td",{rowSpan:3,children:(0,l.jsx)(f,{value:"\u043b\u0430\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u043e\u043a\u0443\u0443\u0447",affix:(0,l.jsx)(a,{value:"\u0443"})})," - ",(0,l.jsx)(u,{root:"\u043e\u043a\u0443\u0443\u0447\u0443",affix:"\u043b\u0430\u0440"})]}),(0,l.jsx)("td",{children:"\u0443\u0447\u0435\u043d\u0438\u043a - \u0443\u0447\u0435\u043d\u0438\u043a\u0438"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(a,{value:"\u0439"})}),(0,l.jsx)("td",{children:"-"}),(0,l.jsx)("td",{children:"-"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(a,{value:"\u0440"})}),(0,l.jsx)("td",{children:"-"}),(0,l.jsx)("td",{children:"-"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:j}),(0,l.jsx)("td",{children:(0,l.jsx)(f,{value:"\u0434\u0430\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u0431\u0443\u0439",affix:(0,l.jsx)(a,{value:"\u043c"})})," - ",(0,l.jsx)(u,{root:"\u0431\u0443\u0439\u043c",affix:"\u0434\u0430\u0440"})]}),(0,l.jsx)("td",{children:"-"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:h}),(0,l.jsx)("td",{children:(0,l.jsx)(f,{value:"\u0442\u0430\u0440"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)(u,{root:"\u0436\u043e\u043e\u043b\u0443",affix:(0,l.jsx)(a,{value:"\u043a"})})," - ",(0,l.jsx)(u,{root:"\u0436\u043e\u043e\u043b\u0443\u043a",affix:"\u0442\u0430\u0440"})]}),(0,l.jsx)("td",{children:"\u043f\u043b\u0430\u0442\u043e\u043a - \u043f\u043b\u0430\u0442\u043a\u0438"})]})]})]}),"\u041c\u0435\u0441\u0442\u043e \u0430\u0444\u0444\u0438\u043a\u0441\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 - \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u043e\u0441\u043b\u0435 \u043a\u043e\u0440\u043d\u044f.",(0,l.jsx)("br",{}),"\u0410\u0444\u0444\u0438\u043a\u0441\u044b \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b, \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u044e\u0442 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u043c\u0435\u043d\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435:",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(u,{root:"\u0447\u043e\u04a3",affix:"\u0434\u043e\u0440"})}),(0,l.jsx)("td",{children:"\u0431\u043e\u043b\u044c\u0448\u0438\u0435; \u0432\u0437\u0440\u043e\u0441\u043b\u044b\u0435"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(u,{root:"\u0436\u0430\u0440",affix:"\u0442\u0430\u0448"})}),(0,l.jsx)("td",{children:"\u043c\u043e\u043b\u043e\u0434\u044b\u0435"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(u,{root:"\u043a\u0438\u0447\u0438\u043d\u0435\u043a\u0435\u0439",affix:"\u043b\u0435\u0440"})}),(0,l.jsx)("td",{children:"\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0435, \u043c\u0430\u043b\u044b\u0448\u0438"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(u,{root:"\u0442\u0438\u0433\u0438",affix:"\u043b\u0435\u0440"})}),(0,l.jsx)("td",{children:"\u0442\u0435"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(u,{root:"\u0431\u0443",affix:"\u043b\u0430\u0440"})}),(0,l.jsx)("td",{children:"\u044d\u0442\u0438"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(u,{root:"\u0431\u0443\u043b\u0430\u0440 \u043a\u0438\u043c",affix:"\u0434\u0435\u0440"})}),(0,l.jsx)("td",{children:"\u043a\u0442\u043e \u044d\u0442\u043e? (\u043f\u043e \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044e \u043a \u0433\u0440\u0443\u043f\u043f\u0435 \u043b\u0438\u0446)"})]})]})}),(0,l.jsx)("br",{}),"2. \u0412 \u0440\u043e\u043b\u0438 \u043f\u043e\u0434\u043b\u0435\u0436\u0430\u0449\u0435\u0433\u043e, \u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e\u0433\u043e \u0438\u043b\u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0432 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445 \u0438\u043d\u043e\u0433\u0434\u0430 \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u044e\u0442 ",(0,l.jsx)("b",{children:"\u0441\u043e\u0431\u0438\u0440\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435"})," \u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442 \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441 ",(0,l.jsx)("b",{children:"\u043a\u0430\u043d\u0447\u043e\u043e?"})," (\u0441\u043a\u043e\u043b\u044c\u043a\u043e?). ",(0,l.jsx)("br",{}),"\u0418\u0437 \u0432\u0441\u0435\u0433\u043e \u0441\u0435\u043c\u044c: ",(0,l.jsx)("br",{}),"\u0431\u0438\u0440\u04e9\u04e9, \u044d\u043a\u04e9\u04e9 (\u0434\u0432\u043e\u0435), \u04af\u0447\u04e9\u04e9 (\u0442\u0440\u043e\u0435), \u0442\u04e9\u0440\u0442\u04e9\u04e9 (\u0447\u0435\u0442\u0432\u0435\u0440\u043e), \u0431\u0435\u0448\u04e9\u04e9 (\u043f\u044f\u0442\u0435\u0440\u043e), \u0430\u043b\u0442\u043e\u043e (\u0448\u0435\u0441\u0442\u0435\u0440\u043e), \u0436\u0435\u0442\u04e9\u04e9 (\u0441\u0435\u043c\u0435\u0440\u043e). ",(0,l.jsx)("br",{}),(0,l.jsx)(b.Z,{kg:"\u041a\u0438\u0442\u0435\u043f\u043a\u0430\u043d\u0430\u0434\u0430 \u043e\u043d \u0430\u0434\u0430\u043c:",ru:"\u0412 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435 \u0434\u0435\u0441\u044f\u0442\u044c \u0447\u0435\u043b\u043e\u0432\u0435\u043a:"}),(0,l.jsx)(b.Z,{kg:"\u0431\u0438\u0440\u04e9\u04e9 - \u043e\u043a\u0443\u0442\u0443\u0443\u0447\u0443,",ru:"\u043e\u0434\u0438\u043d - \u043f\u0440\u0435\u043f\u043e\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c,"}),(0,l.jsx)(b.Z,{kg:"\u04af\u0447\u04e9\u04e9 - \u0430\u0441\u043f\u0438\u0440\u0430\u043d\u0442,",ru:"\u0442\u0440\u043e\u0435 - \u0430\u0441\u043f\u0438\u0440\u0430\u043d\u0442\u044b,"}),(0,l.jsx)(b.Z,{kg:"\u0430\u043b\u0442\u043e\u043e - \u0441\u0442\u0443\u0434\u0435\u043d\u0442,",ru:"\u0448\u0435\u0441\u0442\u0435\u0440\u043e - \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u044b."}),(0,l.jsx)("div",{className:"center-block",children:"\u0423\u041f\u0420\u0410\u0416\u041d\u0415\u041d\u0418\u042f"}),t.map((function(s){return(0,l.jsx)("div",{children:(0,l.jsx)(m,{word:s})},s)})),(0,l.jsx)(C.Z,{icon:(0,l.jsx)(y.Z,{}),type:"primary",style:{right:20,display:e?"none":void 0},onClick:function(){scroll(0,0)}})]})}}}]);
//# sourceMappingURL=320.52fa626b.chunk.js.map