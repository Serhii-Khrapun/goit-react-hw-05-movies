"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(439),a=t(502),u=t(689),c=t(791),i="Reviews_review_content__sMIjS",o=t(184),s=function(){var e=(0,u.UO)().movieId,n=(0,c.useState)(null),t=(0,r.Z)(n,2),s=t[0],p=t[1];return(0,c.useEffect)((function(){(0,a.Cm)(e).then((function(e){p(e)}))}),[e]),(0,o.jsxs)(o.Fragment,{children:[s&&s.length>0&&(0,o.jsx)("ul",{children:s.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h3",{children:["Author: ",e.author]}),(0,o.jsx)("p",{className:i,children:e.content})]},e.id)}))}),s&&0===s.length&&(0,o.jsx)("p",{children:"No reviews found"})]})}},502:function(e,n,t){t.d(n,{Cm:function(){return h},IH:function(){return f},fO:function(){return o},hG:function(){return p},qF:function(){return s}});var r=t(861),a=t(757),u=t.n(a),c=t(263),i="ae1577010b6792d62b3291f220b00a44",o=function(){return c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i))},s=function(e){return c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))},p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("\nhttps://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,{},r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,{},r=t.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,r=[],t.data.results.map((function(e){return r.push(e)})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.41b5e025.chunk.js.map