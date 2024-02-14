// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Object.keys(Object(r))}var t=void 0!==Object.keys;function e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var n=e();var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(r,t){return null!=r&&i.call(r,t)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var l=n&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return o.call(r);e=r[c],t=a(r,c);try{r[c]=void 0}catch(t){return o.call(r)}return n=o.call(r),t?r[c]=e:delete r[c],n}:function(r){return o.call(r)};function f(r){return"[object Arguments]"===l(r)}var s=function(){return f(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function y(r){return"number"==typeof r}function b(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function v(r,t,e){var n=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+b(o):b(o)+r,n&&(r="-"+r)),r}var d=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function m(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!y(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=v(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=v(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===h.call(r.specifier)?h.call(e):d.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function w(r){return"string"==typeof r}var S=Math.abs,j=String.prototype.toLowerCase,O=String.prototype.toUpperCase,T=String.prototype.replace,E=/e\+(\d)$/,_=/e-(\d)$/,x=/^(\d+)$/,k=/^(\d+)e/,I=/\.0$/,A=/\.0*e/,V=/(\..*[^0])0*e/;function P(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":S(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=T.call(e,V,"$1e"),e=T.call(e,A,"e"),e=T.call(e,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=T.call(e,E,"e+0$1"),e=T.call(e,_,"e-0$1"),r.alternate&&(e=T.call(e,x,"$1."),e=T.call(e,k,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===O.call(r.specifier)?O.call(e):j.call(e)}function F(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function N(r,t,e){var n=t-r.length;return n<0?r:r=e?r+F(n):F(n)+r}var $=String.fromCharCode,C=isNaN,B=Array.isArray;function L(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function R(r){var t,e,n,o,i,a,u,c,l;if(!B(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(w(n=r[c]))a+=n;else{if(t=void 0!==n.precision,!(n=L(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,l=0;l<e.length;l++)switch(o=e.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,C(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!C(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(i)?String(n.arg):$(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=P(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=v(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=N(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function X(r){var t,e,n,o;for(e=[],o=0,n=G.exec(r);n;)(t=r.slice(o,G.lastIndex-n[0].length)).length&&e.push(t),e.push(W(n)),o=G.lastIndex,n=G.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function Z(r){return"string"==typeof r}function M(r){var t,e;if(!Z(r))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[X(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return R.apply(null,t)}var Y,U=Object.prototype,H=U.toString,z=U.__defineGetter__,D=U.__defineSetter__,q=U.__lookupGetter__,J=U.__lookupSetter__;Y=function(){try{return p({},"x",{}),!0}catch(r){return!1}}()?g:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===H.call(e))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(q.call(r,t)||J.call(r,t)?(n=r.__proto__,r.__proto__=U,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&z&&z.call(r,t,e.get),a&&D&&D.call(r,t,e.set),r};var K=Y;function Q(r,t,e){K(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function rr(r){return"string"==typeof r}var tr=e();function er(){return tr&&"symbol"==typeof Symbol.toStringTag}var nr=Object.prototype.toString;var or="function"==typeof Symbol?Symbol:void 0,ir="function"==typeof or?or.toStringTag:"";var ar=er()?function(r){var t,e,n;if(null==r)return nr.call(r);e=r[ir],t=a(r,ir);try{r[ir]=void 0}catch(t){return nr.call(r)}return n=nr.call(r),t?r[ir]=e:delete r[ir],n}:function(r){return nr.call(r)},ur=String.prototype.valueOf;var cr=er();function lr(r){return"object"==typeof r&&(r instanceof String||(cr?function(r){try{return ur.call(r),!0}catch(r){return!1}}(r):"[object String]"===ar(r)))}function fr(r){return rr(r)||lr(r)}function sr(r,t,e){K(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function pr(r,t,e){K(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function gr(r){return"number"==typeof r}Q(fr,"isPrimitive",rr),Q(fr,"isObject",lr);var yr=e();function br(){return yr&&"symbol"==typeof Symbol.toStringTag}var vr=Object.prototype.toString;var dr="function"==typeof Symbol?Symbol:void 0,hr="function"==typeof dr?dr.toStringTag:"";var mr=br()?function(r){var t,e,n;if(null==r)return vr.call(r);e=r[hr],t=a(r,hr);try{r[hr]=void 0}catch(t){return vr.call(r)}return n=vr.call(r),t?r[hr]=e:delete r[hr],n}:function(r){return vr.call(r)},wr=Number,Sr=wr.prototype.toString;var jr=br();function Or(r){return"object"==typeof r&&(r instanceof wr||(jr?function(r){try{return Sr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===mr(r)))}function Tr(r){return gr(r)||Or(r)}function Er(r){return r!=r}function _r(r){return gr(r)&&Er(r)}function xr(r){return Or(r)&&Er(r.valueOf())}function kr(r){return _r(r)||xr(r)}function Ir(r,t,e){K(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}pr(Tr,"isPrimitive",gr),pr(Tr,"isObject",Or),sr(kr,"isPrimitive",_r),sr(kr,"isObject",xr);var Ar=Number.POSITIVE_INFINITY,Vr=wr.NEGATIVE_INFINITY,Pr=Math.floor;function Fr(r){return Pr(r)===r}function Nr(r){return r<Ar&&r>Vr&&Fr(r)}function $r(r){return gr(r)&&Nr(r)}function Cr(r){return Or(r)&&Nr(r.valueOf())}function Br(r){return $r(r)||Cr(r)}Ir(Br,"isPrimitive",$r),Ir(Br,"isObject",Cr);var Lr=Object.prototype.propertyIsEnumerable;var Rr=!Lr.call("beep","0");function Gr(r,t){var e;return null!=r&&(!(e=Lr.call(r,t))&&Rr&&fr(r)?!_r(t=+t)&&$r(t)&&t>=0&&t<r.length:e)}var Wr=e();var Xr=Object.prototype.toString;var Zr="function"==typeof Symbol?Symbol:void 0,Mr="function"==typeof Zr?Zr.toStringTag:"";var Yr=Wr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Xr.call(r);e=r[Mr],t=a(r,Mr);try{r[Mr]=void 0}catch(t){return Xr.call(r)}return n=Xr.call(r),t?r[Mr]=e:delete r[Mr],n}:function(r){return Xr.call(r)};var Ur=Array.isArray?Array.isArray:function(r){return"[object Array]"===Yr(r)};var Hr=s?f:function(r){return null!==r&&"object"==typeof r&&!Ur(r)&&"number"==typeof r.length&&Fr(r.length)&&r.length>=0&&r.length<=4294967295&&a(r,"callee")&&!Gr(r,"callee")},zr=Array.prototype.slice;function Dr(r){return null!==r&&"object"==typeof r}!function(r,t,e){K(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}(Dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(M("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!Ur(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Dr));var qr=Gr((function(){}),"prototype"),Jr=!Gr({toString:null},"toString");function Kr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Fr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Qr(r,t,e){K(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function rt(r){return"string"==typeof r}var tt=e();function et(){return tt&&"symbol"==typeof Symbol.toStringTag}var nt=Object.prototype.toString;var ot="function"==typeof Symbol?Symbol:void 0,it="function"==typeof ot?ot.toStringTag:"";var at=et()?function(r){var t,e,n;if(null==r)return nt.call(r);e=r[it],t=a(r,it);try{r[it]=void 0}catch(t){return nt.call(r)}return n=nt.call(r),t?r[it]=e:delete r[it],n}:function(r){return nt.call(r)},ut=String.prototype.valueOf;var ct=et();function lt(r){return"object"==typeof r&&(r instanceof String||(ct?function(r){try{return ut.call(r),!0}catch(r){return!1}}(r):"[object String]"===at(r)))}function ft(r){return rt(r)||lt(r)}function st(r,t,e){var n,o;if(!Kr(r)&&!rt(r))throw new TypeError(M("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!$r(e))throw new TypeError(M("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(kr(t)){for(;o<n;o++)if(kr(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1}Qr(ft,"isPrimitive",rt),Qr(ft,"isObject",lt);var pt=/./;function gt(r,t,e){K(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function yt(r){return"boolean"==typeof r}var bt=e();function vt(){return bt&&"symbol"==typeof Symbol.toStringTag}var dt=Object.prototype.toString;var ht="function"==typeof Symbol?Symbol:void 0,mt="function"==typeof ht?ht.toStringTag:"";var wt=vt()?function(r){var t,e,n;if(null==r)return dt.call(r);e=r[mt],t=a(r,mt);try{r[mt]=void 0}catch(t){return dt.call(r)}return n=dt.call(r),t?r[mt]=e:delete r[mt],n}:function(r){return dt.call(r)},St=Boolean,jt=Boolean.prototype.toString;var Ot=vt();function Tt(r){return"object"==typeof r&&(r instanceof St||(Ot?function(r){try{return jt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===wt(r)))}function Et(r){return yt(r)||Tt(r)}function _t(){return new Function("return this;")()}gt(Et,"isPrimitive",yt),gt(Et,"isObject",Tt);var xt="object"==typeof self?self:null,kt="object"==typeof window?window:null,It="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},At="object"==typeof It?It:null,Vt="object"==typeof globalThis?globalThis:null;var Pt=function(r){if(arguments.length){if(!yt(r))throw new TypeError(M("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return _t()}if(Vt)return Vt;if(xt)return xt;if(kt)return kt;if(At)return At;throw new Error("unexpected error. Unable to resolve global object.")}(),Ft=Pt.document&&Pt.document.childNodes,Nt=Int8Array;var $t=e();var Ct=Object.prototype.toString;var Bt="function"==typeof Symbol?Symbol:void 0,Lt="function"==typeof Bt?Bt.toStringTag:"";var Rt=$t&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Ct.call(r);e=r[Lt],t=a(r,Lt);try{r[Lt]=void 0}catch(t){return Ct.call(r)}return n=Ct.call(r),t?r[Lt]=e:delete r[Lt],n}:function(r){return Ct.call(r)};function Gt(){return/^\s*function\s*([^(]*)/i}var Wt=/^\s*function\s*([^(]*)/i;function Xt(r){var t,e,n,o;if(("Object"===(e=Rt(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Wt.exec(n.toString()))return t[1]}return Dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}!function(r,t,e){K(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}(Gt,"REGEXP",Wt);var Zt="function"==typeof pt||"object"==typeof Nt||"function"==typeof Ft?function(r){return Xt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Xt(r).toLowerCase():t};function Mt(r){return r.constructor&&r.constructor.prototype===r}var Yt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ut="undefined"==typeof window?void 0:window;var Ht=function(){var r;if("undefined"===Zt(Ut))return!1;for(r in Ut)try{-1===st(Yt,r)&&a(Ut,r)&&null!==Ut[r]&&"object"===Zt(Ut[r])&&Mt(Ut[r])}catch(r){return!0}return!1}(),zt="undefined"!=typeof window;var Dt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var qt=t?function(){return 2!==(r(arguments)||"").length}(1,2)?function(t){return Hr(t)?r(zr.call(t)):r(t)}:r:function(r){var t,e,n,o,i,u,c;if(o=[],Hr(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!a(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Dr(r))return o;e=qr&&n}for(i in r)e&&"prototype"===i||!a(r,i)||o.push(String(i));if(Jr)for(t=function(r){if(!1===zt&&!Ht)return Mt(r);try{return Mt(r)}catch(r){return!1}}(r),c=0;c<Dt.length;c++)u=Dt[c],t&&"constructor"===u||!a(r,u)||o.push(String(u));return o},Jt={float64:-1,float32:"float64",int32:-1,int16:"int32",int8:"int16",uint32:-1,uint16:"uint32",uint8:"uint16",uint8c:"uint16",generic:-1,complex64:"complex128",complex128:-1};function Kt(){var r,t,e,n;for(e={},t=(r=qt(Jt)).length,n=0;n<t;n++)e[r[n]]=Jt[r[n]];return e}function Qt(r){return 0===arguments.length?Kt():a(Jt,r)?Jt[r]:null}export{Qt as default};
//# sourceMappingURL=mod.js.map