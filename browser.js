// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return Object.keys(Object(e))}var r=void 0!==Object.keys,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString,o=Object.prototype.hasOwnProperty;function a(e,r){return null!=e&&o.call(e,r)}var u,c="function"==typeof Symbol?Symbol:void 0,l="function"==typeof c?c.toStringTag:"",f=n()?function(e){var r,t,n;if(null==e)return i.call(e);t=e[l],r=a(e,l);try{e[l]=void 0}catch(r){return i.call(e)}return n=i.call(e),r?e[l]=t:delete e[l],n}:function(e){return i.call(e)};function s(e){return"[object Arguments]"===f(e)}u=function(){return s(arguments)}();var p=u,g="function"==typeof Object.defineProperty?Object.defineProperty:null,d=Object.defineProperty;function h(e){return"number"==typeof e}function y(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function b(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+y(i):y(i)+e,n&&(e="-"+e)),e}var v=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function m(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!h(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=b(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=b(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===w.call(e.specifier)?w.call(t):v.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var j=Math.abs,S=String.prototype.toLowerCase,E=String.prototype.toUpperCase,_=String.prototype.replace,O=/e\+(\d)$/,x=/e-(\d)$/,T=/^(\d+)$/,k=/^(\d+)e/,I=/\.0$/,A=/\.0*e/,V=/(\..*[^0])0*e/;function P(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!h(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":j(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=_.call(t,V,"$1e"),t=_.call(t,A,"e"),t=_.call(t,I,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=_.call(t,O,"e+0$1"),t=_.call(t,x,"e-0$1"),e.alternate&&(t=_.call(t,T,"$1."),t=_.call(t,k,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===E.call(e.specifier)?E.call(t):S.call(t)}function F(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var N=String.fromCharCode,$=isNaN,C=Array.isArray;function B(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function L(e){var r,t,n,i,o,a,u,c,l,f,s,p,g;if(!C(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if("string"==typeof(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=B(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,$(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,$(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!$(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$(o)?String(n.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=P(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=b(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-f.length)<0?f:f=p?f+F(g):F(g)+f)),a+=n.arg||"",u+=1}return a}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function W(e){var r,t,n,i;for(t=[],i=0,n=R.exec(e);n;)(r=e.slice(i,R.lastIndex-n[0].length)).length&&t.push(r),t.push(G(n)),i=R.lastIndex,n=R.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function X(e){var r,t;if("string"!=typeof e)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[W(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return L.apply(null,r)}var Z,M=Object.prototype,Y=M.toString,U=M.__defineGetter__,D=M.__defineSetter__,H=M.__lookupGetter__,z=M.__lookupSetter__;Z=function(){try{return g({},"x",{}),!0}catch(e){return!1}}()?d:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===Y.call(e))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Y.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(H.call(e,r)||z.call(e,r)?(n=e.__proto__,e.__proto__=M,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&U&&U.call(e,r,t.get),a&&D&&D.call(e,r,t.set),e};var q=Z;function J(e,r,t){q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function K(e){return"string"==typeof e}var Q=String.prototype.valueOf,ee=n();function re(e){return"object"==typeof e&&(e instanceof String||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object String]"===f(e)))}function te(e){return K(e)||re(e)}function ne(e){return"number"==typeof e}J(te,"isPrimitive",K),J(te,"isObject",re);var ie=Number,oe=ie.prototype.toString,ae=n();function ue(e){return"object"==typeof e&&(e instanceof ie||(ae?function(e){try{return oe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===f(e)))}function ce(e){return ne(e)||ue(e)}function le(e){return e!=e}function fe(e){return ne(e)&&le(e)}function se(e){return ue(e)&&le(e.valueOf())}function pe(e){return fe(e)||se(e)}J(ce,"isPrimitive",ne),J(ce,"isObject",ue),J(pe,"isPrimitive",fe),J(pe,"isObject",se);var ge=Number.POSITIVE_INFINITY,de=ie.NEGATIVE_INFINITY,he=Math.floor;function ye(e){return he(e)===e}function be(e){return e<ge&&e>de&&ye(e)}function ve(e){return ne(e)&&be(e)}function we(e){return ue(e)&&be(e.valueOf())}function me(e){return ve(e)||we(e)}J(me,"isPrimitive",ve),J(me,"isObject",we);var je=Object.prototype.propertyIsEnumerable,Se=!je.call("beep","0");function Ee(e,r){var t;return null!=e&&(!(t=je.call(e,r))&&Se&&te(e)?!fe(r=+r)&&ve(r)&&r>=0&&r<e.length:t)}var _e=Array.isArray?Array.isArray:function(e){return"[object Array]"===f(e)},Oe=p?s:function(e){return null!==e&&"object"==typeof e&&!_e(e)&&"number"==typeof e.length&&ye(e.length)&&e.length>=0&&e.length<=4294967295&&a(e,"callee")&&!Ee(e,"callee")},xe=Array.prototype.slice;function Te(e){return null!==e&&"object"==typeof e}J(Te,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!_e(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Te));var ke=Ee((function(){}),"prototype"),Ie=!Ee({toString:null},"toString"),Ae=9007199254740991;function Ve(e,r,t){var n,i,o;if(!("object"==typeof(o=e)&&null!==o&&"number"==typeof o.length&&ye(o.length)&&o.length>=0&&o.length<=Ae||K(e)))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!ve(t))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(pe(r)){for(;i<n;i++)if(pe(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var Pe=/./;function Fe(e){return"boolean"==typeof e}var Ne=Boolean,$e=Boolean.prototype.toString,Ce=n();function Be(e){return"object"==typeof e&&(e instanceof Ne||(Ce?function(e){try{return $e.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===f(e)))}function Le(e){return Fe(e)||Be(e)}J(Le,"isPrimitive",Fe),J(Le,"isObject",Be);var Re="object"==typeof self?self:null,Ge="object"==typeof window?window:null,We="object"==typeof globalThis?globalThis:null,Xe=function(e){if(arguments.length){if(!Fe(e))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(We)return We;if(Re)return Re;if(Ge)return Ge;throw new Error("unexpected error. Unable to resolve global object.")}(),Ze=Xe.document&&Xe.document.childNodes,Me=Int8Array;function Ye(){return/^\s*function\s*([^(]*)/i}var Ue=/^\s*function\s*([^(]*)/i;function De(e){var r,t,n,i;if(("Object"===(t=f(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ue.exec(n.toString()))return r[1]}return Te(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}J(Ye,"REGEXP",Ue);var He="function"==typeof Pe||"object"==typeof Me||"function"==typeof Ze?function(e){return De(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?De(e).toLowerCase():r};function ze(e){return e.constructor&&e.constructor.prototype===e}var qe,Je=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ke="undefined"==typeof window?void 0:window,Qe=function(){var e;if("undefined"===He(Ke))return!1;for(e in Ke)try{-1===Ve(Je,e)&&a(Ke,e)&&null!==Ke[e]&&"object"===He(Ke[e])&&ze(Ke[e])}catch(e){return!0}return!1}(),er="undefined"!=typeof window,rr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];qe=r?function(){return 2!==(e(arguments)||"").length}(1,2)?function(r){return Oe(r)?e(xe.call(r)):e(r)}:e:function(e){var r,t,n,i,o,u,c;if(i=[],Oe(e)){for(c=0;c<e.length;c++)i.push(c.toString());return i}if("string"==typeof e){if(e.length>0&&!a(e,"0"))for(c=0;c<e.length;c++)i.push(c.toString())}else{if(0==(n="function"==typeof e)&&!Te(e))return i;t=ke&&n}for(o in e)t&&"prototype"===o||!a(e,o)||i.push(String(o));if(Ie)for(r=function(e){if(!1===er&&!Qe)return ze(e);try{return ze(e)}catch(e){return!1}}(e),c=0;c<rr.length;c++)u=rr[c],r&&"constructor"===u||!a(e,u)||i.push(String(u));return i};var tr=qe,nr={float64:-1,float32:"float64",int32:-1,int16:"int32",int8:"int16",uint32:-1,uint16:"uint32",uint8:"uint16",uint8c:"uint16",generic:-1,complex64:"complex128",complex128:-1};return function(e){return 0===arguments.length?function(){var e,r,t,n;for(t={},r=(e=tr(nr)).length,n=0;n<r;n++)t[e[n]]=nr[e[n]];return t}():a(nr,e)?nr[e]:null}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nextDataType=r();
//# sourceMappingURL=browser.js.map
