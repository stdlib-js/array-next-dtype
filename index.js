// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nextDataType=r()}(this,(function(){"use strict";function e(e){return Object.keys(Object(e))}var r=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(e,r){return null!=e&&o.call(e,r)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var l,f=n()?function(e){var r,t,n;if(null==e)return i.call(e);t=e[c],r=a(e,c);try{e[c]=void 0}catch(r){return i.call(e)}return n=i.call(e),r?e[c]=t:delete e[c],n}:function(e){return i.call(e)};function s(e){return"[object Arguments]"===f(e)}l=function(){return s(arguments)}();var p=l,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var d=Object.defineProperty;function h(e){return"number"==typeof e}function y(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function b(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+y(i):y(i)+e,n&&(e="-"+e)),e}var v=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function m(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!h(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=b(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=b(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===w.call(e.specifier)?w.call(t):v.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function j(e){return"string"==typeof e}var S=Math.abs,E=String.prototype.toLowerCase,_=String.prototype.toUpperCase,O=String.prototype.replace,x=/e\+(\d)$/,T=/e-(\d)$/,k=/^(\d+)$/,I=/^(\d+)e/,A=/\.0$/,V=/\.0*e/,P=/(\..*[^0])0*e/;function F(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!h(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":S(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=O.call(t,P,"$1e"),t=O.call(t,V,"e"),t=O.call(t,A,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=O.call(t,x,"e+0$1"),t=O.call(t,T,"e-0$1"),e.alternate&&(t=O.call(t,k,"$1."),t=O.call(t,I,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===_.call(e.specifier)?_.call(t):E.call(t)}function N(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function $(e,r,t){var n=r-e.length;return n<0?e:e=t?e+N(n):N(n)+e}var C=String.fromCharCode,B=isNaN,L=Array.isArray;function R(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function G(e){var r,t,n,i,o,a,u,c,l;if(!L(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if(j(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=R(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,B(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,B(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!B(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=B(o)?String(n.arg):C(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=F(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=b(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=$(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function X(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Z(e){var r,t,n,i;for(t=[],i=0,n=W.exec(e);n;)(r=e.slice(i,W.lastIndex-n[0].length)).length&&t.push(r),t.push(X(n)),i=W.lastIndex,n=W.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function M(e){return"string"==typeof e}function Y(e){var r,t,n;if(!M(e))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Z(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return G.apply(null,t)}var U,D=Object.prototype,H=D.toString,z=D.__defineGetter__,q=D.__defineSetter__,J=D.__lookupGetter__,K=D.__lookupSetter__;U=function(){try{return g({},"x",{}),!0}catch(e){return!1}}()?d:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===H.call(e))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===H.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(e,r)||K.call(e,r)?(n=e.__proto__,e.__proto__=D,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&z&&z.call(e,r,t.get),a&&q&&q.call(e,r,t.set),e};var Q=U;function ee(e,r,t){Q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function re(e){return"string"==typeof e}var te=String.prototype.valueOf;var ne=n();function ie(e){return"object"==typeof e&&(e instanceof String||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object String]"===f(e)))}function oe(e){return re(e)||ie(e)}function ae(e){return"number"==typeof e}ee(oe,"isPrimitive",re),ee(oe,"isObject",ie);var ue=Number,ce=ue.prototype.toString;var le=n();function fe(e){return"object"==typeof e&&(e instanceof ue||(le?function(e){try{return ce.call(e),!0}catch(e){return!1}}(e):"[object Number]"===f(e)))}function se(e){return ae(e)||fe(e)}function pe(e){return e!=e}function ge(e){return ae(e)&&pe(e)}function de(e){return fe(e)&&pe(e.valueOf())}function he(e){return ge(e)||de(e)}ee(se,"isPrimitive",ae),ee(se,"isObject",fe),ee(he,"isPrimitive",ge),ee(he,"isObject",de);var ye=Number.POSITIVE_INFINITY,be=ue.NEGATIVE_INFINITY,ve=Math.floor;function we(e){return ve(e)===e}function me(e){return e<ye&&e>be&&we(e)}function je(e){return ae(e)&&me(e)}function Se(e){return fe(e)&&me(e.valueOf())}function Ee(e){return je(e)||Se(e)}ee(Ee,"isPrimitive",je),ee(Ee,"isObject",Se);var _e=Object.prototype.propertyIsEnumerable;var Oe=!_e.call("beep","0");function xe(e,r){var t;return null!=e&&(!(t=_e.call(e,r))&&Oe&&oe(e)?!ge(r=+r)&&je(r)&&r>=0&&r<e.length:t)}var Te=Array.isArray?Array.isArray:function(e){return"[object Array]"===f(e)};var ke=p?s:function(e){return null!==e&&"object"==typeof e&&!Te(e)&&"number"==typeof e.length&&we(e.length)&&e.length>=0&&e.length<=4294967295&&a(e,"callee")&&!xe(e,"callee")},Ie=Array.prototype.slice;function Ae(e){return null!==e&&"object"==typeof e}ee(Ae,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Te(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ae));var Ve=xe((function(){}),"prototype"),Pe=!xe({toString:null},"toString");function Fe(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&we(e.length)&&e.length>=0&&e.length<=9007199254740991}function Ne(e,r,t){var n,i;if(!Fe(e)&&!re(e))throw new TypeError(Y("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!je(t))throw new TypeError(Y("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(he(r)){for(;i<n;i++)if(he(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var $e=/./;function Ce(e){return"boolean"==typeof e}var Be=Boolean,Le=Boolean.prototype.toString;var Re=n();function Ge(e){return"object"==typeof e&&(e instanceof Be||(Re?function(e){try{return Le.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===f(e)))}function We(e){return Ce(e)||Ge(e)}function Xe(){return new Function("return this;")()}ee(We,"isPrimitive",Ce),ee(We,"isObject",Ge);var Ze="object"==typeof self?self:null,Me="object"==typeof window?window:null,Ye="object"==typeof global?global:null,Ue="object"==typeof globalThis?globalThis:null;var De=function(e){if(arguments.length){if(!Ce(e))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Xe()}if(Ue)return Ue;if(Ze)return Ze;if(Me)return Me;if(Ye)return Ye;throw new Error("unexpected error. Unable to resolve global object.")}(),He=De.document&&De.document.childNodes,ze=Int8Array;function qe(){return/^\s*function\s*([^(]*)/i}var Je=/^\s*function\s*([^(]*)/i;function Ke(e){var r,t,n,i;if(("Object"===(t=f(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Je.exec(n.toString()))return r[1]}return Ae(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ee(qe,"REGEXP",Je);var Qe="function"==typeof $e||"object"==typeof ze||"function"==typeof He?function(e){return Ke(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Ke(e).toLowerCase():r};function er(e){return e.constructor&&e.constructor.prototype===e}var rr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],tr="undefined"==typeof window?void 0:window;var nr=function(){var e;if("undefined"===Qe(tr))return!1;for(e in tr)try{-1===Ne(rr,e)&&a(tr,e)&&null!==tr[e]&&"object"===Qe(tr[e])&&er(tr[e])}catch(e){return!0}return!1}(),ir="undefined"!=typeof window;var or,ar=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];or=r?function(){return 2!==(e(arguments)||"").length}(1,2)?function(r){return ke(r)?e(Ie.call(r)):e(r)}:e:function(e){var r,t,n,i,o,u,c;if(i=[],ke(e)){for(c=0;c<e.length;c++)i.push(c.toString());return i}if("string"==typeof e){if(e.length>0&&!a(e,"0"))for(c=0;c<e.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof e)&&!Ae(e))return i;t=Ve&&n}for(o in e)t&&"prototype"===o||!a(e,o)||i.push(String(o));if(Pe)for(r=function(e){if(!1===ir&&!nr)return er(e);try{return er(e)}catch(e){return!1}}(e),c=0;c<ar.length;c++)u=ar[c],r&&"constructor"===u||!a(e,u)||i.push(String(u));return i};var ur=or,cr={float64:-1,float32:"float64",int32:-1,int16:"int32",int8:"int16",uint32:-1,uint16:"uint32",uint8:"uint16",uint8c:"uint16",generic:-1,complex64:"complex128",complex128:-1};function lr(){var e,r,t,n;for(t={},r=(e=ur(cr)).length,n=0;n<r;n++)t[e[n]]=cr[e[n]];return t}return function(e){return 0===arguments.length?lr():a(cr,e)?cr[e]:null}}));
//# sourceMappingURL=index.js.map
