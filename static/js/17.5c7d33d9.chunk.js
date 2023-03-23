"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[17],{833:function(n,e,t){t.d(e,{O:function(){return b}});var r,i,a,o,c,p=t(689),s=t(168),d=t(934),u=t(87),l=d.Z.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin: 0;\n  padding: 0 0 20px 0;\n"]))),h=d.Z.li(i||(i=(0,s.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.04);\n  }\n"]))),f=(0,d.Z)(u.rU)(a||(a=(0,s.Z)(["\n  text-decoration: none;\n  color: #1f2833;\n"]))),x=d.Z.div(o||(o=(0,s.Z)(["\n  width: 250px;\n  height: 440px;\n  background-color: #fafafa;\n\n  img {\n    width: 250px;\n    height: 375px;\n  }\n"]))),g=d.Z.h2(c||(c=(0,s.Z)(["\n  text-align: center;\n  margin: 0;\n  padding: 10px 5px;\n  font-size: 16px;\n"]))),m=t(184),b=function(n){var e=n.Movies,t=(0,p.TH)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(l,{children:e.map((function(n){var e=n.id,r=n.poster_path,i=n.title;return(0,m.jsx)(h,{children:(0,m.jsx)(f,{to:"/movies/".concat(e),state:{from:t},children:(0,m.jsxs)(x,{children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:i}),(0,m.jsx)(g,{children:i})]})})},e)}))})})}},17:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,i,a,o=t(439),c=t(791),p=t(87),s=t(861),d=t(687),u=t.n(d),l=function(){var n=(0,s.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"d743fb6525879ac74e28dd3cdcf25139",n.abrupt("return",fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("d743fb6525879ac74e28dd3cdcf25139","&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(n){return n.ok?n.json():Promise.reject(new Error("No results "))})));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=t(168),f=t(934),x=f.Z.header(r||(r=(0,h.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 54px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #fa6704;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),g=f.Z.form(i||(i=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n  input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),m=f.Z.button(a||(a=(0,h.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n  /* span {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  } */\n"]))),b=t(184),v=function(n){var e=n.onSetSearchParams,t=(0,c.useState)(""),r=(0,o.Z)(t,2),i=r[0],a=r[1],p=function(){a("")};return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(x,{children:(0,b.jsxs)(g,{onSubmit:function(n){n.preventDefault();var t=""!==n.target.request.value?{name:n.target.request.value}:{};e(t),p()},children:[(0,b.jsx)("input",{name:"request",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:i,onChange:function(n){var e=n.currentTarget.value;a(e)}}),(0,b.jsx)(m,{type:"submit",children:(0,b.jsx)("span",{children:"Search"})})]})})})},w=t(833),j=function(){var n=(0,p.lr)(),e=(0,o.Z)(n,2),t=e[0],r=e[1],i=(0,c.useState)([]),a=(0,o.Z)(i,2),s=a[0],d=a[1],u=t.get("name");return(0,c.useEffect)((function(){u&&l(u).then((function(n){d(n.results)}))}),[u]),(0,b.jsxs)("main",{children:[(0,b.jsx)(v,{onSetSearchParams:r}),(0,b.jsx)("h1",{children:"movies"}),(0,b.jsx)(w.O,{Movies:s})]})}}}]);
//# sourceMappingURL=17.5c7d33d9.chunk.js.map