(self.webpackChunktuslipid=self.webpackChunktuslipid||[]).push([[925],{6642:function(e,n,t){"use strict";t.d(n,{d:function(){return b},A:function(){return w}});var r=t(6531),i=t(1413),o=t(3433),c=t(9439),s=t(2791),u=t(4749),l=t(4536),a=t(1286),d=t(93),f=t(40),h=t(2738),m=t(3073),g=t(184);function p(e){var n=(0,s.useState)(0),t=(0,c.Z)(n,2),l=t[0],a=t[1],d=(0,s.useState)(!0),f=(0,c.Z)(d,2),h=f[0],m=f[1],p=(0,s.useState)([]),v=(0,c.Z)(p,2),x=v[0],j=v[1];return(0,s.useEffect)((function(){!function(n){var t=[],r=n+4;r>=e.blogInfoList.length&&m(!h);for(var i=n;i<r&&i<e.blogInfoList.length;i++)t.push(e.blogInfoList[i]);j([].concat((0,o.Z)(x),t))}(l)}),[l]),(0,s.useEffect)((function(){function e(){var e=document.documentElement.scrollTop,n=document.documentElement.scrollHeight;e+document.documentElement.clientHeight>=n&&h&&a((function(e){return e+4}))}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[x]),(0,g.jsx)(g.Fragment,{children:x.map((function(e,n){return(0,g.jsx)(u.Z,(0,i.Z)({},r.iQ[e.dictKey]),n)}))})}function v(e){var n=r.iQ[e.id],i=(0,s.useState)(""),o=(0,c.Z)(i,2),u=o[0],p=o[1],v=document.getElementsByClassName("single-blog-wrapper")[0];return(0,s.useEffect)((function(){t(1273)("./".concat(n.file)).then((function(e){fetch(e.default).then((function(e){return e.text()})).then((function(e){return p(e)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}),[]),(0,s.useEffect)((function(){var e=document.getElementsByClassName("single-blog-wrapper")[0];0!==e.childNodes.length&&(e.style.height="auto")}),[v]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(l.D,{children:u,remarkPlugins:[a.Z,h.Z],rehypePlugins:[d.Z,f.Z,m.Z],components:{h1:x,h2:x,h3:x,h4:x,h5:x,h6:x}})})}function x(e){var n=s.Children.toArray(e.children).reduce(j,"").toLowerCase().replace(/\W/g,"-");return s.createElement("h"+e.level,{id:n},e.children)}function j(e,n){return"string"===typeof n?e+n:s.Children.toArray(n.props.children).reduce(j,e)}function b(){return r.PX.sort((function(e,n){var t=new Date(e.date),r=new Date(n.date);return t<r?1:t>r?-1:0})),(0,g.jsx)("div",{className:"blog-wrapper",children:(0,g.jsx)(p,{blogInfoList:r.PX})})}function w(e){return(0,g.jsx)("article",{className:"single-blog-wrapper transition-blog",children:(0,g.jsx)(v,{id:e.id})})}},755:function(e,n,t){"use strict";t.d(n,{H:function(){return c},t:function(){return o}});var r=t(6531),i=t(184);function o(){return(0,i.jsxs)("div",{className:"header-grp",children:[(0,i.jsx)("div",{className:"header-txt",children:(0,i.jsx)("b",{children:"Blogs"})}),(0,i.jsx)("div",{className:"description-txt mt-2",children:"Some notes, some ideas, some opinions"}),(0,i.jsx)("hr",{})]})}function c(e){return(0,i.jsx)("div",{className:"header-grp",children:(0,i.jsx)("div",{className:"header-txt",children:(0,i.jsx)("b",{children:r.iQ[e.id].title})})})}},5925:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(7689),i=t(755),o=t(6642),c=t(184);function s(){var e=(0,r.UO)().blogId;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.H,{id:e}),(0,c.jsx)("hr",{}),(0,c.jsx)(o.A,{id:e})]})}},1273:function(e,n,t){var r={"./great_ytb_channels_1.md":[3258,258],"./great_ytb_channels_2.md":[7699,699],"./markdown_starter.md":[2771,771],"./uncommon_javascript_keynotes.md":[3381,381]};function i(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],i=n[0];return t.e(n[1]).then((function(){return t.t(i,17)}))}i.keys=function(){return Object.keys(r)},i.id=1273,e.exports=i}}]);
//# sourceMappingURL=925.e88f3740.chunk.js.map