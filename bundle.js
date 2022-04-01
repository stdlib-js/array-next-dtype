// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).nextDataType=r()}(this,(function(){"use strict";function t(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var r=function(t){return Object.keys(Object(t))},e=r;var n=function(){return function(){return 2!==(e(arguments)||"").length}(1,2)},o=void 0!==Object.keys;var i=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return i&&"symbol"==typeof Symbol.toStringTag},f=Object.prototype.toString,c=f;var a=function(t){return c.call(t)},l=Object.prototype.hasOwnProperty;var p=function(t,r){return null!=t&&l.call(t,r)},v="function"==typeof Symbol?Symbol.toStringTag:"",s=p,y=v,b=f;var g=a,d=function(t){var r,e,n;if(null==t)return b.call(t);e=t[y],r=s(t,y);try{t[y]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[y]=e:delete t[y],n},m=u()?d:g,h=m;var j,w=function(t){return"[object Arguments]"===h(t)},_=w;j=function(){return _(arguments)}();var O=j,S="function"==typeof Object.defineProperty?Object.defineProperty:null;var P=function(){try{return S({},"x",{}),!0}catch(t){return!1}},E=Object.defineProperty,T=Object.prototype,I=T.toString,x=T.__defineGetter__,A=T.__defineSetter__,k=T.__lookupGetter__,N=T.__lookupSetter__;var B=function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(k.call(t,r)||N.call(t,r)?(n=t.__proto__,t.__proto__=T,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&x&&x.call(t,r,e.get),u&&A&&A.call(t,r,e.set),t},V=E,F=B,G=P()?V:F;var L=function(t,r,e){G(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},M=L;var X=function(t){return"string"==typeof t},Y=String.prototype.valueOf;var C=m,D=function(t){try{return Y.call(t),!0}catch(t){return!1}},H=u();var R=function(t){return"object"==typeof t&&(t instanceof String||(H?D(t):"[object String]"===C(t)))},W=X,z=R;var U=M,q=function(t){return W(t)||z(t)},J=R;U(q,"isPrimitive",X),U(q,"isObject",J);var K=q;var Q=function(t){return"number"==typeof t},Z=Number,$=Z.prototype.toString;var tt=m,rt=Z,et=function(t){try{return $.call(t),!0}catch(t){return!1}},nt=u();var ot=function(t){return"object"==typeof t&&(t instanceof rt||(nt?et(t):"[object Number]"===tt(t)))},it=Q,ut=ot;var ft=M,ct=function(t){return it(t)||ut(t)},at=ot;ft(ct,"isPrimitive",Q),ft(ct,"isObject",at);var lt=ct;var pt=function(t){return t!=t},vt=lt.isPrimitive,st=pt;var yt=function(t){return vt(t)&&st(t)},bt=lt.isObject,gt=pt;var dt=function(t){return bt(t)&&gt(t.valueOf())},mt=yt,ht=dt;var jt=M,wt=function(t){return mt(t)||ht(t)},_t=dt;jt(wt,"isPrimitive",yt),jt(wt,"isObject",_t);var Ot=wt,St=Number.POSITIVE_INFINITY,Pt=Z.NEGATIVE_INFINITY,Et=Math.floor;var Tt=function(t){return Et(t)===t},It=St,xt=Pt,At=Tt;var kt=function(t){return t<It&&t>xt&&At(t)},Nt=lt.isPrimitive,Bt=kt;var Vt=function(t){return Nt(t)&&Bt(t)},Ft=lt.isObject,Gt=kt;var Lt=function(t){return Ft(t)&&Gt(t.valueOf())},Mt=Vt,Xt=Lt;var Yt=M,Ct=function(t){return Mt(t)||Xt(t)},Dt=Lt;Yt(Ct,"isPrimitive",Vt),Yt(Ct,"isObject",Dt);var Ht,Rt=Ct,Wt=Object.prototype.propertyIsEnumerable;Ht=!Wt.call("beep","0");var zt=K,Ut=Ot.isPrimitive,qt=Rt.isPrimitive,Jt=Wt,Kt=Ht;var Qt=function(t,r){var e;return null!=t&&(!(e=Jt.call(t,r))&&Kt&&zt(t)?!Ut(r=+r)&&qt(r)&&r>=0&&r<t.length:e)},Zt=Qt,$t=m;var tr=Array.isArray?Array.isArray:function(t){return"[object Array]"===$t(t)},rr=p,er=Zt,nr=tr,or=Tt;var ir=O?w:function(t){return null!==t&&"object"==typeof t&&!nr(t)&&"number"==typeof t.length&&or(t.length)&&t.length>=0&&t.length<=4294967295&&rr(t,"callee")&&!er(t,"callee")},ur=ir,fr=r,cr=Array.prototype.slice;var ar=function(t){return ur(t)?fr(cr.call(t)):fr(t)},lr=tr;var pr=function(t){return null!==t&&"object"==typeof t};M(pr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!lr(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(pr));var vr=pr;var sr=Zt((function(){}),"prototype"),yr=!Zt({toString:null},"toString"),br=Tt;var gr=Ot,dr=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&br(t.length)&&t.length>=0&&t.length<=9007199254740991},mr=K.isPrimitive,hr=Rt.isPrimitive;var jr=function(t,r,e){var n,o;if(!dr(t)&&!mr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!hr(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(gr(r)){for(;o<n;o++)if(gr(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1},wr=jr,_r=/./;var Or=function(t){return"boolean"==typeof t},Sr=Boolean.prototype.toString;var Pr=m,Er=function(t){try{return Sr.call(t),!0}catch(t){return!1}},Tr=u();var Ir=function(t){return"object"==typeof t&&(t instanceof Boolean||(Tr?Er(t):"[object Boolean]"===Pr(t)))},xr=Or,Ar=Ir;var kr=M,Nr=function(t){return xr(t)||Ar(t)},Br=Ir;kr(Nr,"isPrimitive",Or),kr(Nr,"isObject",Br);var Vr=Nr;var Fr=function(){return new Function("return this;")()},Gr="object"==typeof self?self:null,Lr="object"==typeof window?window:null,Mr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Xr="object"==typeof Mr?Mr:null;module.exports=Xr;var Yr=Vr.isPrimitive,Cr=Fr,Dr=Gr,Hr=Lr,Rr=t(Object.freeze({__proto__:null}));var Wr=function(t){if(arguments.length){if(!Yr(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Cr()}if(Dr)return Dr;if(Hr)return Hr;if(Rr)return Rr;throw new Error("unexpected error. Unable to resolve global object.")},zr=Wr(),Ur=zr.document&&zr.document.childNodes,qr=Int8Array,Jr=_r,Kr=Ur,Qr=qr;var Zr=function(){return"function"==typeof Jr||"object"==typeof Qr||"function"==typeof Kr};var $r=function(){return/^\s*function\s*([^(]*)/i},te=$r;M(te,"REGEXP",$r());var re=vr;var ee=m,ne=te.REGEXP,oe=function(t){return re(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var ie=function(t){var r,e,n;if(("Object"===(e=ee(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=ne.exec(n.toString()))return r[1]}return oe(t)?"Buffer":e},ue=ie;var fe=ie;var ce=function(t){var r;return null===t?"null":"object"===(r=typeof t)?ue(t).toLowerCase():r},ae=function(t){return fe(t).toLowerCase()},le=Zr()?ae:ce;var pe,ve=function(t){return t.constructor&&t.constructor.prototype===t},se="undefined"==typeof window?void 0:window,ye=p,be=wr,ge=le,de=ve,me=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],he=se;pe=function(){var t;if("undefined"===ge(he))return!1;for(t in he)try{-1===be(me,t)&&ye(he,t)&&null!==he[t]&&"object"===ge(he[t])&&de(he[t])}catch(t){return!0}return!1}();var je="undefined"!=typeof window,we=pe,_e=ve,Oe=je;var Se=vr,Pe=p,Ee=ir,Te=sr,Ie=yr,xe=function(t){if(!1===Oe&&!we)return _e(t);try{return _e(t)}catch(t){return!1}},Ae=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ke=r,Ne=ar,Be=function(t){var r,e,n,o,i,u,f;if(o=[],Ee(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!Pe(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1===(n="function"==typeof t)&&!Se(t))return o;e=Te&&n}for(i in t)e&&"prototype"===i||!Pe(t,i)||o.push(String(i));if(Ie)for(r=xe(t),f=0;f<Ae.length;f++)u=Ae[f],r&&"constructor"===u||!Pe(t,u)||o.push(String(u));return o},Ve=o?n()?Ne:ke:Be,Fe=p,Ge={float64:-1,float32:"float64",int32:-1,int16:"int32",int8:"int16",uint32:-1,uint16:"uint32",uint8:"uint16",uint8c:"uint16",generic:-1,complex64:"complex128",complex128:-1};function Le(){var t,r,e,n;for(e={},r=(t=Ve(Ge)).length,n=0;n<r;n++)e[t[n]]=Ge[t[n]];return e}var Me=function(t){return 0===arguments.length?Le():Fe(Ge,t)?Ge[t]:null};return Me}));
//# sourceMappingURL=bundle.js.map