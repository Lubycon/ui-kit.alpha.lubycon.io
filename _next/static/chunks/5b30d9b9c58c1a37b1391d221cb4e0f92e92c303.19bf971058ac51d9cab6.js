(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,u=void 0!==o&&o;return n||a&&u}},"5WRv":function(e,t,n){var r=n("iNmH"),a=n("Qatm"),o=n("Zhxd"),u=n("kluZ");e.exports=function(e){return r(e)||a(e)||o(e)||u()}},"8Kt/":function(e,t,n){"use strict";n("OvAC");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},u=n("lwAK"),i=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,c=d.length;i<c;i++){var s=d[i];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var f=a.props[s],l=r[s]||new Set;l.has(f)?o=!1:(l.add(f),r[s]=l)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function v(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}v.rewind=function(){};var h=v;t.default=h},OvAC:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},Qatm:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Xuae:function(e,t,n){"use strict";var r=n("5WRv"),a=n("SDJZ"),o=n("NToG"),u=(n("T1e2"),n("eef+")),i=n("K4DB"),c=n("+IV6");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){u(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("nxTg"),a=n("vdEC");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),u=n("elyg"),i=n("nOHt"),c=n("vNVm"),s={};function f(e,t,n,r){if((0,u.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",l=o.default.useMemo((function(){var t=(0,u.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,u.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=l.href,p=l.as,v=e.children,h=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var b=o.Children.only(v),M=b&&"object"===typeof b&&b.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),_=r(w,2),C=_[0],k=_[1],x=o.default.useCallback((function(e){C(e),M&&("function"===typeof M?M(e):"object"===typeof M&&(M.current=e))}),[M,C]);(0,o.useEffect)((function(){var e=k&&t&&(0,u.isLocalURL)(d),r="undefined"!==typeof g?g:n&&n.locale,a=s[d+"%"+p+(r?"%"+r:"")];e&&!a&&f(n,d,p,{locale:r})}),[p,d,k,g,t,n]);var A={ref:x,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:c}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,h,m,y,g)},onMouseEnter:function(e){(0,u.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),f(n,d,p,{priority:!0}))}};return(e.passHref||"a"===b.type&&!("href"in b.props))&&(A.href=(0,u.addBasePath)((0,u.addLocale)(p,"undefined"!==typeof g?g:n&&n.locale,n&&n.defaultLocale))),o.default.cloneElement(b,A)};t.default=l},iNmH:function(e,t,n){var r=n("+Sw5");e.exports=function(e){if(Array.isArray(e))return r(e)}},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},soUV:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YFqc"),u=n.n(o),i=n("8Kt/"),c=n.n(i),s=a.a.createElement;t.a=function(e){var t=e.children,n=e.title,r=void 0===n?"This is the default title":n;return s("div",null,s(c.a,null,s("title",null,r),s("meta",{charSet:"utf-8"}),s("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),s("header",null,s("nav",null,s(u.a,{href:"/"},s("a",null,"Home"))," ","|"," ",s(u.a,{href:"/about"},s("a",null,"About"))," ","|"," ",s(u.a,{href:"/users"},s("a",null,"Users List"))," ","| ",s("a",{href:"/api/users"},"Users API"))),t,s("footer",null,s("hr",null),s("span",null,"Test")))}},vNVm:function(e,t,n){"use strict";var r=n("nxTg"),a=n("63Ad");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,o.useRef)(),s=(0,o.useState)(!1),f=r(s,2),l=f[0],d=f[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||l||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,u=r.elements;return u.set(e,t),o.observe(e),function(){o.unobserve(e),0===u.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){i||l||(0,u.default)((function(){return d(!0)}))}),[l]),[p,l]};var o=n("q1tI"),u=a(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var c=new Map}}]);