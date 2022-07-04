// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).trim=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,a=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var c,l,p,s;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(e,r)||a.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),p="get"in t,s="set"in t,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(e,r,t.get),s&&i&&i.call(e,r,t.set),e};var c=r;function l(e,r,t){c(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(e){return"string"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return s&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var g=y()?function(e){var r,t,n,o,u;if(null==e)return b.call(e);t=e[d],u=d,r=null!=(o=e)&&v.call(o,u);try{e[d]=void 0}catch(r){return b.call(e)}return n=b.call(e),r?e[d]=t:delete e[d],n}:function(e){return b.call(e)},m=String.prototype.valueOf;var w=y();function j(e){return"object"==typeof e&&(e instanceof String||(w?function(e){try{return m.call(e),!0}catch(e){return!1}}(e):"[object String]"===g(e)))}function h(e){return p(e)||j(e)}l(h,"isPrimitive",p),l(h,"isObject",j);var _=/[-\/\\^$*+?.()|[\]{}]/g;var E=/./;function S(e){return"boolean"==typeof e}var T=Boolean.prototype.toString;var x=y();function O(e){return"object"==typeof e&&(e instanceof Boolean||(x?function(e){try{return T.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===g(e)))}function A(e){return S(e)||O(e)}function P(){return new Function("return this;")()}l(A,"isPrimitive",S),l(A,"isObject",O);var V="object"==typeof self?self:null,B="object"==typeof window?window:null,R="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},$="object"==typeof R?R:null;var k=function(e){if(arguments.length){if(!S(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return P()}if(V)return V;if(B)return B;if($)return $;throw new Error("unexpected error. Unable to resolve global object.")}(),C=k.document&&k.document.childNodes,F=Int8Array;function G(){return/^\s*function\s*([^(]*)/i}var L=/^\s*function\s*([^(]*)/i;l(G,"REGEXP",L);var M=Array.isArray?Array.isArray:function(e){return"[object Array]"===g(e)};function I(e){return null!==e&&"object"==typeof e}function N(e){var r,t,n,o;if(("Object"===(t=g(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=L.exec(n.toString()))return r[1]}return I(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(I,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!M(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(I));var U="function"==typeof E||"object"==typeof F||"function"==typeof C?function(e){return N(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?N(e).toLowerCase():r};var X=RegExp.prototype.exec;var q=y();function z(e){return"object"==typeof e&&(e instanceof RegExp||(q?function(e){try{return X.call(e),!0}catch(e){return!1}}(e):"[object RegExp]"===g(e)))}function D(e,r,t){if(!p(e))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+e+"`.");if(p(r))r=function(e){var r,t;if(!p(e))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+e+"`.");if("/"===e[0])for(t=e.length-1;t>=0&&"/"!==e[t];t--);return void 0===t||t<=0?e.replace(_,"\\$&"):(r=(r=e.substring(1,t)).replace(_,"\\$&"),e=e[0]+r+e.substring(t))}(r),r=new RegExp(r,"g");else if(!z(r))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+r+"`.");if(!p(t)&&"function"!==U(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return e.replace(r,t)}var H=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;return function(e){if(!p(e))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("0hk3N",e));return D(e,H,"$1")}}));
//# sourceMappingURL=browser.js.map
