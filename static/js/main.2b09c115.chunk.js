(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(7),s=n.n(o),a=(n(12),n(2)),i=n(3),h=n(5),l=n(4),d=n(0),u=function(e){var t=e.name,n=e.email,r=e.id;return Object(d.jsxs)("div",{className:"bg-green-200 inline-block border-r-3 p-3 m-2 hover:scale-105 border-2 shadow-sm transform transition duration-200 text-center rounded-md",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(r,"?size=200x200"),alt:"robots"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{children:n})]})]})},b=function(e){var t=e.robots;return Object(d.jsx)("div",{children:t.map((function(e,n){return Object(d.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},j=function(e){e.searchfield;var t=e.searchChange;return Object(d.jsx)("div",{className:"p-2",children:Object(d.jsx)("input",{className:"p-3 border-2 border-green-300 bg-blue-200 focus:outline-none my-4",type:"search",placeholder:"Search Robots",onChange:t})})},f=function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.state({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),n}(c.a.Component),m=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("h1",{className:"font-bold text-4xl mt-6",children:"Robofriends"}),Object(d.jsx)(j,{searchChange:this.onSearchChange}),Object(d.jsx)(f,{children:Object(d.jsx)(O,{children:Object(d.jsx)(b,{robots:r})})})]}):Object(d.jsx)("h1",{children:"Loading"})}}]),n}(r.Component)),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.2b09c115.chunk.js.map