(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4GyX":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s}));var r=n("q1tI"),o=n.n(r);function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var i={marginTop:"25%"},c=function(e){function t(t){var n;return(n=e.call(this,t)||this).width=n.stringToNum(n.props.width),null!=n.width?n.width+=" columns":n.width="column",n.offset=n.stringToNum(n.props.offset),null!=n.offset?n.offset=" offset-by-"+n.offset:n.offset="","true"===n.props.title&&(n.style=i),n}a(t,e);var n=t.prototype;return n.stringToNum=function(e){var t;switch(e){case"":t=null;break;case"1/2":t="half";break;case"1/3":t="one-third";break;case"2/3":t="two-thirds";break;case"1":t="one";break;case"2":t="two";break;case"3":t="three";break;case"4":t="four";break;case"5":t="five";break;case"6":t="six";break;case"7":t="seven";break;case"8":t="eight";break;case"9":t="nine";break;case"10":t="ten";break;case"11":t="eleven";break;case"12":t="twelve";break;default:t=null}return t},n.render=function(){return o.a.createElement("div",{className:this.width+this.offset,style:this.style},this.props.children)},t}(o.a.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:this.props.home?"home":"container"},this.props.children)},t}(o.a.Component),s=function(e){function t(){return e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"row"},this.props.children)},t}(o.a.Component)},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Hi, I\'m Kevin","description":"This is my portfolio website with things that I\'ve built","author":"@kevinguo344"}}}}')},OGtf:function(e,t,n){var r=n("XKFU"),o=n("eeVq"),a=n("vhPU"),i=/"/g,c=function(e,t,n,r){var o=String(a(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("s/Ur"),i=n.n(a),c=n("qhky"),u=n("4GyX"),s=(n("Zz4T"),n("tUrg"),n("Wbzz"));var l=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).project=f[n.props.project],n.side=n.props.side,n.style={background:"linear-gradient(to bottom,"+n.project.color+","+n.project.color+"), linear-gradient(to bottom, rgba(255,255,255,0.45),rgba(255,255,255,0.45)), url("+n.project.img+")",backgroundSize:"cover"},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return o.a.createElement(s.Link,{to:"/"+this.project.link},o.a.createElement(u.a,{width:"6"},o.a.createElement("div",{className:"titleCard "+this.side},o.a.createElement("div",{className:"titleContainer"},o.a.createElement("h2",null,this.project.title),o.a.createElement("h5",null,this.project.sub),o.a.createElement("p",null,this.project.location)),o.a.createElement("div",{className:"background",style:this.style}))))},r}(o.a.Component),f={roma:{title:"RoMA",sub:"Interactive Fabrication in AR",location:"Design Lab",link:"projects/roma",img:"../icons/roma.svg",color:"rgba(227,181,5,0.325)"},crochetmatic:{title:"CrochetMatic",sub:"Knitting in 3D",location:"Design Lab",link:"projects/crochetmatic",img:"../icons/crochetmatic.svg",color:"rgba(219,80,74,0.325)"},communit:{title:"communIT",sub:"A Responsive Public Environment",location:"Architectural Robotics Lab",link:"projects/communit",img:"../icons/communit.svg",color:"rgba(58,153,215,0.325)"},cera:{title:"CERA",sub:"Detailed extrusion at Architectural Scale",location:"Jenny Sabin Lab",link:"projects/cera",img:"../icons/cera.svg",color:"rgba(138,201,38,0.325)"},ori:{title:"Design Assist",sub:"Robotic Interiors",location:"Ori Inc.",link:"projects/ori",img:"../icons/ori.svg",color:"rgba(58,153,215,0.325)"}},p=l,m=n("enCQ"),d=n("vrFN");var y=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(u.b,{home:"true"},o.a.createElement(c.a,null,o.a.createElement("title",null,"Kevin Guo: Home")),o.a.createElement(d.a,{title:"Home"}),o.a.createElement(m.a,null,o.a.createElement(u.c,null,o.a.createElement(u.a,{width:"6"},o.a.createElement("h1",{style:{marginTop:"2em"}},o.a.createElement("strong",null,"Hi, I'm Kevin")))),o.a.createElement(u.c,null,o.a.createElement(u.a,{width:"8"},o.a.createElement("p",null,"I'm a product engineer & designer at ",o.a.createElement("a",{href:"https://oriliving.com/"},o.a.createElement("strong",null,"Ori Inc.")),", a robotic furniture company."),o.a.createElement("p",null,"I'm interested in learning how technology can make design more accessible, useful, and exciting, especially in its applications to architecture and the built environment."),o.a.createElement("p",null,"I studied at at ",o.a.createElement("strong",null,"Cornell University")," for a Masters of Engineering in Mechanical Engineering focusing on Robotics and Product Design and a BS in Information Science, Systems, & Technology (ISST). My advisor was ",o.a.createElement("a",{href:"https://arl.human.cornell.edu/people_keith.htm"},"Prof. Keith Green")," of Design + Environmental Analysis (DEA) and I also worked with ",o.a.createElement("a",{href:"http://www.jennysabin.com/"},"Prof. Jenny Sabin")," of Architecture.")),o.a.createElement(u.a,{width:"4"},o.a.createElement("h5",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/kevinlguo/"},"LinkedIn")),o.a.createElement("h5",null,o.a.createElement("a",{href:"https://drive.google.com/file/d/1A6l2PUh6bY0s7zW-LWEin3AzVglI4o_I/view?usp=sharing"},"Resume")),o.a.createElement("h5",null,"Email: kg344[at]cornell.edu"))))),o.a.createElement(u.b,null,o.a.createElement(m.a,null,o.a.createElement(i.a,{minWidth:550},o.a.createElement(u.c,null,o.a.createElement("h2",{style:{marginTop:"1em"}},o.a.createElement("strong",null,"Projects")),o.a.createElement("p",null,"My research focuses on the applications of robotics in design. Of special interest are the design and construction of interactive robotic environments and novel forms of robotic fabrication.")),o.a.createElement(u.c,null,o.a.createElement(p,{project:"communit",side:"left"}),o.a.createElement(p,{project:"cera",side:"left"})),o.a.createElement(u.c,null,o.a.createElement(p,{project:"crochetmatic",side:"right"}),o.a.createElement(p,{project:"roma",side:"right"}))),o.a.createElement(i.a,{maxWidth:550},o.a.createElement(u.c,null,o.a.createElement("h2",{style:{marginTop:"1em"}},o.a.createElement("strong",null,"Projects")),o.a.createElement("p",null,"My research focuses on the applications of robotics in design, especially in architecture. Of special interest are the design and construction of interactive robotic environments and novel forms of robotic fabrication.")),o.a.createElement(u.c,null,o.a.createElement(p,{project:"communit",side:"right"}),o.a.createElement(p,{project:"cera",side:"left"})),o.a.createElement(u.c,null,o.a.createElement(p,{project:"crochetmatic",side:"right"}),o.a.createElement(p,{project:"roma",side:"left"}))))))},r}(r.Component);t.default=y},Tze0:function(e,t,n){"use strict";n("qncB")("trim",(function(e){return function(){return e(this,3)}}))},WLL4:function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},Zz4T:function(e,t,n){"use strict";n("OGtf")("sub",(function(e){return function(){return e(this,"sub","","")}}))},enCQ:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r);var a=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return o.a.createElement("div",{className:"pageView"},o.a.createElement("div",{className:"pageContainer"},this.props.children))},r}(o.a.Component);t.a=a},jm62:function(e,t,n){var r=n("XKFU"),o=n("mQtv"),a=n("aCFj"),i=n("EemH"),c=n("8a7r");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=a(e),u=i.f,s=o(r),l={},f=0;s.length>f;)void 0!==(n=u(r,t=s[f++]))&&c(l,t,n);return l}})},mQtv:function(e,t,n){var r=n("kJMx"),o=n("JiEa"),a=n("y3w9"),i=n("dyZX").Reflect;e.exports=i&&i.ownKeys||function(e){var t=r.f(a(e)),n=o.f;return n?t.concat(n(e)):t}},"s/Ur":function(e,t,n){var r;n("V+eJ"),n("91GP"),n("Oyvg"),n("f3/d"),n("2Spj"),n("WLL4"),n("jm62"),n("0l/t"),n("8+KV"),n("xfY5"),n("Tze0"),n("KKXr"),n("bWfx"),n("dZ+Y"),n("SRfc"),n("pIFo"),n("DNiP"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F"),n("rE2o"),n("ioFf"),n("rGqo"),n("HAE/"),"undefined"!=typeof self&&self,e.exports=(r=n("q1tI"),function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=n(1),a=n.n(o),i=n(7),c=n.n(i),u=n(2),s=n(9),l=n.n(s),f=n(10),p=n(5),m=function(e){if(!e)return null;var t=Object.keys(e);return 0===t.length?null:t.reduce((function(t,n){return t[Object(u.a)(n)]=e[n],t}),{})},d=function(){var e=a.a.useRef(!1);return a.a.useEffect((function(){e.current=!0}),[]),e.current},y=function(e){var t=function(){return function(e){return e.query||Object(f.a)(e)}(e)},n=r(a.a.useState(t),2),o=n[0],i=n[1];return a.a.useEffect((function(){var e=t();o!==e&&i(e)}),[e]),o};t.a=function(e,t,n){var o=function(e){var t=a.a.useContext(p.a),n=function(){return m(e)||m(t)},o=r(a.a.useState(n),2),i=o[0],c=o[1];return a.a.useEffect((function(){var e=n();l()(i,e)||c(e)}),[e,t]),i}(t),i=y(e);if(!i)throw new Error("Invalid or missing MediaQuery!");var u=function(e){var t=r(a.a.useState(e.matches),2),n=t[0],o=t[1];return a.a.useEffect((function(){var t=function(){o(e.matches)};return e.addListener(t),t(),function(){e.removeListener(t)}}),[e]),n}(function(e,t){var n=function(){return c()(e,t||{},!!t)},o=r(a.a.useState(n),2),i=o[0],u=o[1],s=d();return a.a.useEffect((function(){return s&&u(n()),function(){i.dispose()}}),[e,t]),i}(i,o)),s=d();return a.a.useEffect((function(){s&&n&&n(u)}),[u]),u}},function(e,t){e.exports=r},function(e,t,n){"use strict";function r(e){return"-"+e.toLowerCase()}var o=/[A-Z]/g,a=/^ms-/,i={};t.a=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(o,r);return i[e]=a.test(t)?"-"+t:t}},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(1),o=n.n(r).a.createContext();t.a=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(17),a=n(5);n.d(t,"default",(function(){return o.a})),n.d(t,"useMediaQuery",(function(){return r.a})),n.d(t,"Context",(function(){return a.a}))},function(e,t,n){"use strict";function r(e,t,n){function r(e){i.matches=e.matches,i.media=e.media}var i=this;if(a&&!n){var c=a.call(window,e);this.matches=c.matches,this.media=c.media,c.addListener(r)}else this.matches=o(e,t),this.media=e;this.addListener=function(e){c&&c.addListener(e)},this.removeListener=function(e){c&&c.removeListener(e)},this.dispose=function(){c&&c.removeListener(r)}}var o=n(8).match,a="undefined"!=typeof window?window.matchMedia:null;e.exports=function(e,t,n){return new r(e,t,n)}},function(e,t,n){"use strict";function r(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(c),n=t[1],r=t[2],o=t[3]||"",a={};return a.inverse=!!n&&"not"===n.toLowerCase(),a.type=r?r.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map((function(e){var t=e.match(u),n=t[1].toLowerCase().match(s);return{modifier:n[1],feature:n[2],value:t[2]}})),a}))}function o(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function a(e){var t=parseFloat(e);switch(String(e).match(f)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function i(e){var t=parseFloat(e);switch(String(e).match(l)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=function(e,t){return r(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var c=e.expressions.every((function(e){var n=e.feature,r=e.modifier,c=e.value,u=t[n];if(!u)return!1;switch(n){case"orientation":case"scan":return u.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=i(c),u=i(u);break;case"resolution":c=a(c),u=a(u);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=o(c),u=o(u);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,u=parseInt(u,10)||0}switch(r){case"min":return u>=c;case"max":return u<=c;default:return u===c}}));return c&&!n||!c&&n}))},t.parse=r;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,u=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,s=/^(?:(min|max)-)?(.+)/,l=/(em|rem|px|cm|mm|in|pt|pc)?$/,f=/(dpi|dpcm|dppx)?$/},function(e,t,n){"use strict";e.exports=function(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(var a=0;a<o;a++){var i=n[a];if(e[i]!==t[i])return!1}return!0}},function(e,t,n){"use strict";var r=n(2),o=n(11);t.a=function(e){var t=[];return Object.keys(o.a.all).forEach((function(n){var o=e[n];null!=o&&t.push(function(e,t){var n=Object(r.a)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,o))})),t.join(" and ")}},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(12),c=n.n(i),u=c.a.oneOfType([c.a.string,c.a.number]),s={orientation:c.a.oneOf(["portrait","landscape"]),scan:c.a.oneOf(["progressive","interlace"]),aspectRatio:c.a.string,deviceAspectRatio:c.a.string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:c.a.bool,colorIndex:c.a.bool,monochrome:c.a.bool,resolution:u},l=o({minAspectRatio:c.a.string,maxAspectRatio:c.a.string,minDeviceAspectRatio:c.a.string,maxDeviceAspectRatio:c.a.string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:c.a.number,maxColor:c.a.number,minColorIndex:c.a.number,maxColorIndex:c.a.number,minMonochrome:c.a.number,maxMonochrome:c.a.number,minResolution:u,maxResolution:u},s),f={all:c.a.bool,grid:c.a.bool,aural:c.a.bool,braille:c.a.bool,handheld:c.a.bool,print:c.a.bool,projection:c.a.bool,screen:c.a.bool,tty:c.a.bool,tv:c.a.bool,embossed:c.a.bool},p=o({},f,{},l);s.type=Object.keys(f),t.a={all:p,types:f,matchers:s,features:l}},function(e,t,n){var r=n(3);e.exports=n(14)(r.isElement,!0)},function(e,t,n){"use strict";!function(){function e(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:var n=e.type;switch(n){case f:case p:case i:case u:case c:case d:return n;default:var r=n&&n.$$typeof;switch(r){case l:case m:case s:return r;default:return t}}case v:case h:case a:return t}}}function n(t){return e(t)===p}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,m=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,w=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!=typeof console&&console.warn(a);try{throw new Error(a)}catch(i){}},E=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];w.apply(void 0,[t].concat(r))}},O=f,j=p,x=l,k=s,S=o,I=m,P=i,C=v,T=h,A=a,R=u,_=c,L=d,M=!1;t.typeOf=e,t.AsyncMode=O,t.ConcurrentMode=j,t.ContextConsumer=x,t.ContextProvider=k,t.Element=S,t.ForwardRef=I,t.Fragment=P,t.Lazy=C,t.Memo=T,t.Portal=A,t.Profiler=R,t.StrictMode=_,t.Suspense=L,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===u||e===c||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===h||e.$$typeof===s||e.$$typeof===l||e.$$typeof===m||e.$$typeof===b||e.$$typeof===g)},t.isAsyncMode=function(t){return M||(M=!0,E(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),n(t)||e(t)===f},t.isConcurrentMode=n,t.isContextConsumer=function(t){return e(t)===l},t.isContextProvider=function(t){return e(t)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(t){return e(t)===m},t.isFragment=function(t){return e(t)===i},t.isLazy=function(t){return e(t)===v},t.isMemo=function(t){return e(t)===h},t.isPortal=function(t){return e(t)===a},t.isProfiler=function(t){return e(t)===u},t.isStrictMode=function(t){return e(t)===c},t.isSuspense=function(t){return e(t)===d}}()},function(e,t,n){"use strict";function r(){return null}var o,a=n(3),i=n(15),c=n(4),u=n(16),s=Function.call.bind(Object.prototype.hasOwnProperty);o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},e.exports=function(e,t){function n(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function l(e){this.message=e,this.stack=""}function f(e){function n(n,i,u,s,f,p,m){if(s=s||g,p=p||u,m!==c){if(t){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("undefined"!=typeof console){var y=s+":"+u;!r[y]&&a<3&&(o("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[y]=!0,a++)}}return null==i[u]?n?new l(null===i[u]?"The "+f+" `"+p+"` is marked as required in `"+s+"`, but its value is `null`.":"The "+f+" `"+p+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(i,u,s,f,p)}var r={},a=0,i=n.bind(null,!1);return i.isRequired=n.bind(null,!0),i}function p(e){return f((function(t,n,r,o,a,i){var c=t[n];return d(c)!==e?new l("Invalid "+o+" `"+a+"` of type `"+y(c)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function m(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(m);if(null===t||e(t))return!0;var n=function(e){var t=e&&(v&&e[v]||e[b]);if("function"==typeof t)return t}(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!m(r.value))return!1}else for(;!(r=o.next()).done;){var a=r.value;if(a&&!m(a[1]))return!1}return!0;default:return!1}}function d(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=d(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function h(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}var v="function"==typeof Symbol&&Symbol.iterator,b="@@iterator",g="<<anonymous>>",w={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:f(r),arrayOf:function(e){return f((function(t,n,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i))return new l("Invalid "+o+" `"+a+"` of type `"+d(i)+"` supplied to `"+r+"`, expected an array.");for(var u=0;u<i.length;u++){var s=e(i,u,r,o,a+"["+u+"]",c);if(s instanceof Error)return s}return null}))},element:f((function(t,n,r,o,a){var i=t[n];return e(i)?null:new l("Invalid "+o+" `"+a+"` of type `"+d(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:f((function(e,t,n,r,o){var i=e[t];return a.isValidElementType(i)?null:new l("Invalid "+r+" `"+o+"` of type `"+d(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return f((function(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||g;return new l("Invalid "+o+" `"+a+"` of type `"+((c=t[n]).constructor&&c.constructor.name?c.constructor.name:g)+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}var c;return null}))},node:f((function(e,t,n,r,o){return m(e[t])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,n,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],u=d(i);if("object"!==u)return new l("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var f in i)if(s(i,f)){var p=e(i,f,r,o,a+"."+f,c);if(p instanceof Error)return p}return null}))},oneOf:function(e){function t(t,r,o,a,i){for(var c=t[r],u=0;u<e.length;u++)if(n(c,e[u]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new l("Invalid "+a+" `"+i+"` of value `"+String(c)+"` supplied to `"+o+"`, expected one of "+s+".")}return Array.isArray(e)?f(t):(o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),r)},oneOfType:function(e){if(!Array.isArray(e))return o("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+h(n)+" at index "+t+"."),r}return f((function(t,n,r,o,a){for(var i=0;i<e.length;i++)if(null==(0,e[i])(t,n,r,o,a,c))return null;return new l("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}))},shape:function(e){return f((function(t,n,r,o,a){var i=t[n],u=d(i);if("object"!==u)return new l("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var f=e[s];if(f){var p=f(i,s,r,o,a+"."+s,c);if(p)return p}}return null}))},exact:function(e){return f((function(t,n,r,o,a){var u=t[n],s=d(u);if("object"!==s)return new l("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var f=i({},t[n],e);for(var p in f){var m=e[p];if(!m)return new l("Invalid "+o+" `"+a+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=m(u,p,r,o,a+"."+p,c);if(y)return y}return null}))}};return l.prototype=Error.prototype,w.checkPropTypes=u,w.resetWarningCache=u.resetWarningCache,w.PropTypes=w,w}},function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,u=r(e),s=1;s<arguments.length;s++){for(var l in n=Object(arguments[s]))a.call(n,l)&&(u[l]=n[l]);if(o){c=o(n);for(var f=0;f<c.length;f++)i.call(n,c[f])&&(u[c[f]]=n[c[f]])}}return u}},function(e,t,n){"use strict";function r(e,t,n,r,u){for(var s in e)if(c(e,s)){var l;try{if("function"!=typeof e[s]){var f=Error((r||"React class")+": "+n+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.");throw f.name="Invariant Violation",f}l=e[s](t,s,r,n,null,a)}catch(m){l=m}if(!l||l instanceof Error||o((r||"React class")+": type specification of "+n+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var p=u?u():"";o("Failed "+n+" type: "+l.message+(null!=p?p:""))}}}var o=function(){},a=n(4),i={},c=Function.call.bind(Object.prototype.hasOwnProperty);o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},r.resetWarningCache=function(){i={}},e.exports=r},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.a=function(e){var t=e.children,n=e.device,a=e.onChange,i=r(e,["children","device","onChange"]),c=Object(o.a)(i,n,a);return"function"==typeof t?t(c):c?t:null};var o=n(0)}]))},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},vrFN:function(e,t,n){"use strict";var r=n("EH9Q"),o=n("q1tI"),a=n.n(o),i=n("qhky");function c(e){var t=e.description,n=e.lang,o=e.meta,c=e.title,u=r.data.site,s=t||u.siteMetadata.description;return a.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(o)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c}}]);
//# sourceMappingURL=component---src-pages-index-js-a01721e216fc46451384.js.map