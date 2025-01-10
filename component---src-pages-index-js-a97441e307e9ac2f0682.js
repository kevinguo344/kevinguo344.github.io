/*! For license information please see component---src-pages-index-js-a97441e307e9ac2f0682.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4GyX":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n("dI71"),a=n("q1tI"),o=n.n(a);const i={marginTop:"25%"};let c=function(e){function t(t){var n;return(n=e.call(this,t)||this).width=n.stringToNum(n.props.width),null!=n.width?n.width+=" columns":n.width="column",n.offset=n.stringToNum(n.props.offset),null!=n.offset?n.offset=" offset-by-"+n.offset:n.offset="","true"===n.props.title&&(n.style=i),n}Object(r.a)(t,e);var n=t.prototype;return n.stringToNum=function(e){let t;switch(e){case"":t=null;break;case"1/2":t="half";break;case"1/3":t="one-third";break;case"2/3":t="two-thirds";break;case"1":t="one";break;case"2":t="two";break;case"3":t="three";break;case"4":t="four";break;case"5":t="five";break;case"6":t="six";break;case"7":t="seven";break;case"8":t="eight";break;case"9":t="nine";break;case"10":t="ten";break;case"11":t="eleven";break;case"12":t="twelve";break;default:t=null}return t},n.render=function(){return o.a.createElement("div",{className:this.width+this.offset,style:this.style},this.props.children)},t}(o.a.Component),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:this.props.home?"home":"container"},this.props.children)},t}(o.a.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"row"},this.props.children)},t}(o.a.Component)},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("dI71"),a=n("q1tI"),o=n.n(a),i=n("s/Ur"),c=n.n(i),s=n("qhky"),u=n("4GyX"),l=n("Wbzz");let f=function(e){function t(t){var n;return(n=e.call(this,t)||this).project=p[n.props.project],n.side=n.props.side,n.style={background:"linear-gradient(to bottom,"+n.project.color+","+n.project.color+"), linear-gradient(to bottom, rgba(255,255,255,0.45),rgba(255,255,255,0.45)), url("+n.project.img+")",backgroundSize:"cover"},n}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement(l.Link,{to:"/"+this.project.link},o.a.createElement(u.a,{width:"6"},o.a.createElement("div",{className:"titleCard "+this.side},o.a.createElement("div",{className:"titleContainer"},o.a.createElement("h2",null,this.project.title),o.a.createElement("h5",null,this.project.sub),o.a.createElement("p",null,this.project.location)),o.a.createElement("div",{className:"background",style:this.style}))))},t}(o.a.Component),p={roma:{title:"RoMA",sub:"Interactive Fabrication in AR",location:"Design Lab",link:"projects/roma",img:"../icons/roma.svg",color:"rgba(227,181,5,0.325)"},crochetmatic:{title:"CrochetMatic",sub:"Knitting in 3D",location:"Design Lab",link:"projects/crochetmatic",img:"../icons/crochetmatic.svg",color:"rgba(219,80,74,0.325)"},communit:{title:"communIT",sub:"A Responsive Public Environment",location:"Architectural Robotics Lab",link:"projects/communit",img:"../icons/communit.svg",color:"rgba(58,153,215,0.325)"},cera:{title:"CERA",sub:"Detailed extrusion at Architectural Scale",location:"Jenny Sabin Lab",link:"projects/cera",img:"../icons/cera.svg",color:"rgba(138,201,38,0.325)"},ori:{title:"Design Assist",sub:"Robotic Interiors",location:"Ori Inc.",link:"projects/ori",img:"../icons/ori.svg",color:"rgba(58,153,215,0.325)"}};var m=f,d=n("enCQ"),y=n("vrFN");let h=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(u.b,{home:"true"},o.a.createElement(s.a,null,o.a.createElement("title",null,"Kevin Guo: Home")),o.a.createElement(y.a,{title:"Home"}),o.a.createElement(d.a,null,o.a.createElement(u.c,null,o.a.createElement(u.a,{width:"6"},o.a.createElement("h1",{style:{marginTop:"2em"}},o.a.createElement("strong",null,"Hi, I'm Kevin")))),o.a.createElement(u.c,null,o.a.createElement(u.a,{width:"8"},o.a.createElement("p",null,"I'm a Design Engineer at ",o.a.createElement("a",{href:"https://sarahmeyohas.com/"},o.a.createElement("strong",null,"Sarah Meyohas Studio")),", working at the edge of art and technology."),o.a.createElement("p",null,"This website is an archive of my research experience; for my relevant experience in Industry post 2019, please refer to my resume linked ",o.a.createElement("a",{href:"https://drive.google.com/file/d/1A6l2PUh6bY0s7zW-LWEin3AzVglI4o_I/view?usp=sharing"},o.a.createElement("strong",null,"here"))),o.a.createElement("p",null,"I studied at at ",o.a.createElement("strong",null,"Cornell University")," for a Masters of Engineering in Mechanical Engineering focusing on Robotics and Product Design and a BS in Information Science, Systems, & Technology (ISST). My advisor was ",o.a.createElement("a",{href:"https://arl.human.cornell.edu/people_keith.htm"},"Prof. Keith Green")," of Design + Environmental Analysis (DEA) and I also worked with ",o.a.createElement("a",{href:"http://www.jennysabin.com/"},"Prof. Jenny Sabin")," of Architecture.")),o.a.createElement(u.a,{width:"4"},o.a.createElement("h5",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/kevinlguo/"},"LinkedIn")),o.a.createElement("h5",null,o.a.createElement("a",{href:"https://drive.google.com/file/d/1A6l2PUh6bY0s7zW-LWEin3AzVglI4o_I/view?usp=sharing"},"Resume")),o.a.createElement("h5",null,"Email: kevinlguo[at]gmail.com"))))),o.a.createElement(u.b,null,o.a.createElement(d.a,null,o.a.createElement(c.a,{minWidth:550},o.a.createElement(u.c,null,o.a.createElement("h2",{style:{marginTop:"1em"}},o.a.createElement("strong",null,"Projects")),o.a.createElement("p",null,"My research focuses on the applications of robotics in design. Of special interest are the design and construction of interactive robotic environments and novel forms of robotic fabrication.")),o.a.createElement(u.c,null,o.a.createElement(m,{project:"communit",side:"left"}),o.a.createElement(m,{project:"cera",side:"left"})),o.a.createElement(u.c,null,o.a.createElement(m,{project:"crochetmatic",side:"right"}),o.a.createElement(m,{project:"roma",side:"right"}))),o.a.createElement(c.a,{maxWidth:550},o.a.createElement(u.c,null,o.a.createElement("h2",{style:{marginTop:"1em"}},o.a.createElement("strong",null,"Projects")),o.a.createElement("p",null,"My research focuses on the applications of robotics in design, especially in architecture. Of special interest are the design and construction of interactive robotic environments and novel forms of robotic fabrication.")),o.a.createElement(u.c,null,o.a.createElement(m,{project:"communit",side:"right"}),o.a.createElement(m,{project:"cera",side:"left"})),o.a.createElement(u.c,null,o.a.createElement(m,{project:"crochetmatic",side:"right"}),o.a.createElement(m,{project:"roma",side:"left"}))))))},t}(a.Component);t.default=h},enCQ:function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),o=n.n(a);let i=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"pageView"},o.a.createElement("div",{className:"pageContainer"},this.props.children))},t}(o.a.Component);t.a=i},"s/Ur":function(e,t,n){var r;"undefined"!=typeof self&&self,e.exports=(r=n("q1tI"),function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=n(1),o=n.n(a),i=n(7),c=n.n(i),s=n(2),u=n(9),l=n.n(u),f=n(10),p=n(5),m=function(e){if(!e)return null;var t=Object.keys(e);return 0===t.length?null:t.reduce((function(t,n){return t[Object(s.a)(n)]=e[n],t}),{})},d=function(){var e=o.a.useRef(!1);return o.a.useEffect((function(){e.current=!0}),[]),e.current},y=function(e){var t=function(){return function(e){return e.query||Object(f.a)(e)}(e)},n=r(o.a.useState(t),2),a=n[0],i=n[1];return o.a.useEffect((function(){var e=t();a!==e&&i(e)}),[e]),a};t.a=function(e,t,n){var a=function(e){var t=o.a.useContext(p.a),n=function(){return m(e)||m(t)},a=r(o.a.useState(n),2),i=a[0],c=a[1];return o.a.useEffect((function(){var e=n();l()(i,e)||c(e)}),[e,t]),i}(t),i=y(e);if(!i)throw new Error("Invalid or missing MediaQuery!");var s=function(e){var t=r(o.a.useState(e.matches),2),n=t[0],a=t[1];return o.a.useEffect((function(){var t=function(){a(e.matches)};return e.addListener(t),t(),function(){e.removeListener(t)}}),[e]),n}(function(e,t){var n=function(){return c()(e,t||{},!!t)},a=r(o.a.useState(n),2),i=a[0],s=a[1],u=d();return o.a.useEffect((function(){return u&&s(n()),function(){i.dispose()}}),[e,t]),i}(i,a)),u=d();return o.a.useEffect((function(){u&&n&&n(s)}),[s]),s}},function(e,t){e.exports=r},function(e,t,n){"use strict";function r(e){return"-"+e.toLowerCase()}var a=/[A-Z]/g,o=/^ms-/,i={};t.a=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(a,r);return i[e]=o.test(t)?"-"+t:t}},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(1),a=n.n(r).a.createContext();t.a=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(17),o=n(5);n.d(t,"default",(function(){return a.a})),n.d(t,"useMediaQuery",(function(){return r.a})),n.d(t,"Context",(function(){return o.a}))},function(e,t,n){"use strict";function r(e,t,n){function r(e){i.matches=e.matches,i.media=e.media}var i=this;if(o&&!n){var c=o.call(window,e);this.matches=c.matches,this.media=c.media,c.addListener(r)}else this.matches=a(e,t),this.media=e;this.addListener=function(e){c&&c.addListener(e)},this.removeListener=function(e){c&&c.removeListener(e)},this.dispose=function(){c&&c.removeListener(r)}}var a=n(8).match,o="undefined"!=typeof window?window.matchMedia:null;e.exports=function(e,t,n){return new r(e,t,n)}},function(e,t,n){"use strict";function r(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(c),n=t[1],r=t[2],a=t[3]||"",o={};return o.inverse=!!n&&"not"===n.toLowerCase(),o.type=r?r.toLowerCase():"all",a=a.match(/\([^\)]+\)/g)||[],o.expressions=a.map((function(e){var t=e.match(s),n=t[1].toLowerCase().match(u);return{modifier:n[1],feature:n[2],value:t[2]}})),o}))}function a(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function o(e){var t=parseFloat(e);switch(String(e).match(f)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function i(e){var t=parseFloat(e);switch(String(e).match(l)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=function(e,t){return r(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var c=e.expressions.every((function(e){var n=e.feature,r=e.modifier,c=e.value,s=t[n];if(!s)return!1;switch(n){case"orientation":case"scan":return s.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=i(c),s=i(s);break;case"resolution":c=o(c),s=o(s);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=a(c),s=a(s);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,s=parseInt(s,10)||0}switch(r){case"min":return s>=c;case"max":return s<=c;default:return s===c}}));return c&&!n||!c&&n}))},t.parse=r;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,s=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,u=/^(?:(min|max)-)?(.+)/,l=/(em|rem|px|cm|mm|in|pt|pc)?$/,f=/(dpi|dpcm|dppx)?$/},function(e,t,n){"use strict";e.exports=function(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(var o=0;o<a;o++){var i=n[o];if(e[i]!==t[i])return!1}return!0}},function(e,t,n){"use strict";var r=n(2),a=n(11);t.a=function(e){var t=[];return Object.keys(a.a.all).forEach((function(n){var a=e[n];null!=a&&t.push(function(e,t){var n=Object(r.a)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,a))})),t.join(" and ")}},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(12),c=n.n(i),s=c.a.oneOfType([c.a.string,c.a.number]),u={orientation:c.a.oneOf(["portrait","landscape"]),scan:c.a.oneOf(["progressive","interlace"]),aspectRatio:c.a.string,deviceAspectRatio:c.a.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:c.a.bool,colorIndex:c.a.bool,monochrome:c.a.bool,resolution:s},l=a({minAspectRatio:c.a.string,maxAspectRatio:c.a.string,minDeviceAspectRatio:c.a.string,maxDeviceAspectRatio:c.a.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:c.a.number,maxColor:c.a.number,minColorIndex:c.a.number,maxColorIndex:c.a.number,minMonochrome:c.a.number,maxMonochrome:c.a.number,minResolution:s,maxResolution:s},u),f={all:c.a.bool,grid:c.a.bool,aural:c.a.bool,braille:c.a.bool,handheld:c.a.bool,print:c.a.bool,projection:c.a.bool,screen:c.a.bool,tty:c.a.bool,tv:c.a.bool,embossed:c.a.bool},p=a({},f,{},l);u.type=Object.keys(f),t.a={all:p,types:f,matchers:u,features:l}},function(e,t,n){var r=n(3);e.exports=n(14)(r.isElement,!0)},function(e,t,n){"use strict";!function(){function e(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:var n=e.type;switch(n){case f:case p:case i:case s:case c:case d:return n;default:var r=n&&n.$$typeof;switch(r){case l:case m:case u:return r;default:return t}}case b:case h:case o:return t}}}function n(t){return e(t)===p}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,m=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,w=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=0,o="Warning: "+e.replace(/%s/g,(function(){return n[a++]}));"undefined"!=typeof console&&console.warn(o);try{throw new Error(o)}catch(i){}},E=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];w.apply(void 0,[t].concat(r))}},j=f,O=p,x=l,k=u,S=a,I=m,P=i,C=b,A=h,T=o,R=s,M=c,L=d,_=!1;t.typeOf=e,t.AsyncMode=j,t.ConcurrentMode=O,t.ContextConsumer=x,t.ContextProvider=k,t.Element=S,t.ForwardRef=I,t.Fragment=P,t.Lazy=C,t.Memo=A,t.Portal=T,t.Profiler=R,t.StrictMode=M,t.Suspense=L,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===c||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===u||e.$$typeof===l||e.$$typeof===m||e.$$typeof===v||e.$$typeof===g)},t.isAsyncMode=function(t){return _||(_=!0,E(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),n(t)||e(t)===f},t.isConcurrentMode=n,t.isContextConsumer=function(t){return e(t)===l},t.isContextProvider=function(t){return e(t)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(t){return e(t)===m},t.isFragment=function(t){return e(t)===i},t.isLazy=function(t){return e(t)===b},t.isMemo=function(t){return e(t)===h},t.isPortal=function(t){return e(t)===o},t.isProfiler=function(t){return e(t)===s},t.isStrictMode=function(t){return e(t)===c},t.isSuspense=function(t){return e(t)===d}}()},function(e,t,n){"use strict";function r(){return null}var a,o=n(3),i=n(15),c=n(4),s=n(16),u=Function.call.bind(Object.prototype.hasOwnProperty);a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},e.exports=function(e,t){function n(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function l(e){this.message=e,this.stack=""}function f(e){function n(n,i,s,u,f,p,m){if(u=u||g,p=p||s,m!==c){if(t){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("undefined"!=typeof console){var y=u+":"+s;!r[y]&&o<3&&(a("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[y]=!0,o++)}}return null==i[s]?n?new l(null===i[s]?"The "+f+" `"+p+"` is marked as required in `"+u+"`, but its value is `null`.":"The "+f+" `"+p+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(i,s,u,f,p)}var r={},o=0,i=n.bind(null,!1);return i.isRequired=n.bind(null,!0),i}function p(e){return f((function(t,n,r,a,o,i){var c=t[n];return d(c)!==e?new l("Invalid "+a+" `"+o+"` of type `"+y(c)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function m(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(m);if(null===t||e(t))return!0;var n=function(e){var t=e&&(b&&e[b]||e[v]);if("function"==typeof t)return t}(t);if(!n)return!1;var r,a=n.call(t);if(n!==t.entries){for(;!(r=a.next()).done;)if(!m(r.value))return!1}else for(;!(r=a.next()).done;){var o=r.value;if(o&&!m(o[1]))return!1}return!0;default:return!1}}function d(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=d(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function h(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}var b="function"==typeof Symbol&&Symbol.iterator,v="@@iterator",g="<<anonymous>>",w={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:f(r),arrayOf:function(e){return f((function(t,n,r,a,o){if("function"!=typeof e)return new l("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i))return new l("Invalid "+a+" `"+o+"` of type `"+d(i)+"` supplied to `"+r+"`, expected an array.");for(var s=0;s<i.length;s++){var u=e(i,s,r,a,o+"["+s+"]",c);if(u instanceof Error)return u}return null}))},element:f((function(t,n,r,a,o){var i=t[n];return e(i)?null:new l("Invalid "+a+" `"+o+"` of type `"+d(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:f((function(e,t,n,r,a){var i=e[t];return o.isValidElementType(i)?null:new l("Invalid "+r+" `"+a+"` of type `"+d(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return f((function(t,n,r,a,o){if(!(t[n]instanceof e)){var i=e.name||g;return new l("Invalid "+a+" `"+o+"` of type `"+((c=t[n]).constructor&&c.constructor.name?c.constructor.name:g)+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}var c;return null}))},node:f((function(e,t,n,r,a){return m(e[t])?null:new l("Invalid "+r+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,n,r,a,o){if("function"!=typeof e)return new l("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],s=d(i);if("object"!==s)return new l("Invalid "+a+" `"+o+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var f in i)if(u(i,f)){var p=e(i,f,r,a,o+"."+f,c);if(p instanceof Error)return p}return null}))},oneOf:function(e){function t(t,r,a,o,i){for(var c=t[r],s=0;s<e.length;s++)if(n(c,e[s]))return null;var u=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new l("Invalid "+o+" `"+i+"` of value `"+String(c)+"` supplied to `"+a+"`, expected one of "+u+".")}return Array.isArray(e)?f(t):(a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),r)},oneOfType:function(e){if(!Array.isArray(e))return a("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+h(n)+" at index "+t+"."),r}return f((function(t,n,r,a,o){for(var i=0;i<e.length;i++)if(null==(0,e[i])(t,n,r,a,o,c))return null;return new l("Invalid "+a+" `"+o+"` supplied to `"+r+"`.")}))},shape:function(e){return f((function(t,n,r,a,o){var i=t[n],s=d(i);if("object"!==s)return new l("Invalid "+a+" `"+o+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var f=e[u];if(f){var p=f(i,u,r,a,o+"."+u,c);if(p)return p}}return null}))},exact:function(e){return f((function(t,n,r,a,o){var s=t[n],u=d(s);if("object"!==u)return new l("Invalid "+a+" `"+o+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var f=i({},t[n],e);for(var p in f){var m=e[p];if(!m)return new l("Invalid "+a+" `"+o+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=m(s,p,r,a,o+"."+p,c);if(y)return y}return null}))}};return l.prototype=Error.prototype,w.checkPropTypes=s,w.resetWarningCache=s.resetWarningCache,w.PropTypes=w,w}},function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,c,s=r(e),u=1;u<arguments.length;u++){for(var l in n=Object(arguments[u]))o.call(n,l)&&(s[l]=n[l]);if(a){c=a(n);for(var f=0;f<c.length;f++)i.call(n,c[f])&&(s[c[f]]=n[c[f]])}}return s}},function(e,t,n){"use strict";function r(e,t,n,r,s){for(var u in e)if(c(e,u)){var l;try{if("function"!=typeof e[u]){var f=Error((r||"React class")+": "+n+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.");throw f.name="Invariant Violation",f}l=e[u](t,u,r,n,null,o)}catch(m){l=m}if(!l||l instanceof Error||a((r||"React class")+": type specification of "+n+" `"+u+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var p=s?s():"";a("Failed "+n+" type: "+l.message+(null!=p?p:""))}}}var a=function(){},o=n(4),i={},c=Function.call.bind(Object.prototype.hasOwnProperty);a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},r.resetWarningCache=function(){i={}},e.exports=r},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.a=function(e){var t=e.children,n=e.device,o=e.onChange,i=r(e,["children","device","onChange"]),c=Object(a.a)(i,n,o);return"function"==typeof t?t(c):c?t:null};var a=n(0)}]))},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("Wbzz");function c(e){let{description:t,lang:n,meta:r,title:c}=e;const{site:s}=Object(i.useStaticQuery)("63159454"),u=t||s.siteMetadata.description;return a.a.createElement(o.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c}}]);
//# sourceMappingURL=component---src-pages-index-js-a97441e307e9ac2f0682.js.map