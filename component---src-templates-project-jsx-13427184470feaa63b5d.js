(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4GyX":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n("q1tI"),a=n.n(r);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var c={marginTop:"25%"},s=function(e){function t(t){var n;return(n=e.call(this,t)||this).width=n.stringToNum(n.props.width),null!=n.width?n.width+=" columns":n.width="column",n.offset=n.stringToNum(n.props.offset),null!=n.offset?n.offset=" offset-by-"+n.offset:n.offset="","true"===n.props.title&&(n.style=c),n}o(t,e);var n=t.prototype;return n.stringToNum=function(e){var t;switch(e){case"":t=null;break;case"1/2":t="half";break;case"1/3":t="one-third";break;case"2/3":t="two-thirds";break;case"1":t="one";break;case"2":t="two";break;case"3":t="three";break;case"4":t="four";break;case"5":t="five";break;case"6":t="six";break;case"7":t="seven";break;case"8":t="eight";break;case"9":t="nine";break;case"10":t="ten";break;case"11":t="eleven";break;case"12":t="twelve";break;default:t=null}return t},n.render=function(){return a.a.createElement("div",{className:this.width+this.offset,style:this.style},this.props.children)},t}(a.a.Component),i=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return a.a.createElement("div",{className:this.props.home?"home":"container"},this.props.children)},t}(a.a.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){return a.a.createElement("div",{className:"row"},this.props.children)},t}(a.a.Component)},mIYN:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u})),n.d(t,"pageQuery",(function(){return l}));var r=n("q1tI"),a=n.n(r),o=n("4GyX"),c=n("qhky"),s=n("Wbzz");var i=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement(o.c,null,a.a.createElement(o.a,{width:"1"},a.a.createElement(s.Link,{to:"/",style:{textDecoration:"none"}},a.a.createElement("h2",null,"←"))),a.a.createElement(o.a,{width:"11"},a.a.createElement("h2",null,"Kevin Guo")))},r}(a.a.Component);function u(e){var t=e.data.markdownRemark,n=t.frontmatter,r=t.html;return a.a.createElement(o.b,null,a.a.createElement(c.a,null,a.a.createElement("title",null,"Kevin Guo | ",n.title)),a.a.createElement(i,null),a.a.createElement(o.c,null,a.a.createElement(o.a,{className:"projects",width:"10",offset:"1"},a.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}))))}var l="997976791"}}]);
//# sourceMappingURL=component---src-templates-project-jsx-13427184470feaa63b5d.js.map