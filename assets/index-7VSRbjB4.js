(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var wd={exports:{}},ba={},Td={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function sw(){if(Pg)return Ce;Pg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function I(b){return b===null||typeof b!="object"?null:(b=T&&b[T]||b["@@iterator"],typeof b=="function"?b:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,z={};function V(b,K,de){this.props=b,this.context=K,this.refs=z,this.updater=de||D}V.prototype.isReactComponent={},V.prototype.setState=function(b,K){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,K,"setState")},V.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function W(){}W.prototype=V.prototype;function G(b,K,de){this.props=b,this.context=K,this.refs=z,this.updater=de||D}var ee=G.prototype=new W;ee.constructor=G,L(ee,V.prototype),ee.isPureReactComponent=!0;var re=Array.isArray,Ie=Object.prototype.hasOwnProperty,_e={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function S(b,K,de){var Re,Ae={},De=null,Me=null;if(K!=null)for(Re in K.ref!==void 0&&(Me=K.ref),K.key!==void 0&&(De=""+K.key),K)Ie.call(K,Re)&&!N.hasOwnProperty(Re)&&(Ae[Re]=K[Re]);var Ue=arguments.length-2;if(Ue===1)Ae.children=de;else if(1<Ue){for(var $e=Array(Ue),Et=0;Et<Ue;Et++)$e[Et]=arguments[Et+2];Ae.children=$e}if(b&&b.defaultProps)for(Re in Ue=b.defaultProps,Ue)Ae[Re]===void 0&&(Ae[Re]=Ue[Re]);return{$$typeof:n,type:b,key:De,ref:Me,props:Ae,_owner:_e.current}}function A(b,K){return{$$typeof:n,type:b.type,key:K,ref:b.ref,props:b.props,_owner:b._owner}}function k(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function O(b){var K={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(de){return K[de]})}var M=/\/+/g;function C(b,K){return typeof b=="object"&&b!==null&&b.key!=null?O(""+b.key):K.toString(36)}function st(b,K,de,Re,Ae){var De=typeof b;(De==="undefined"||De==="boolean")&&(b=null);var Me=!1;if(b===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(b.$$typeof){case n:case e:Me=!0}}if(Me)return Me=b,Ae=Ae(Me),b=Re===""?"."+C(Me,0):Re,re(Ae)?(de="",b!=null&&(de=b.replace(M,"$&/")+"/"),st(Ae,K,de,"",function(Et){return Et})):Ae!=null&&(k(Ae)&&(Ae=A(Ae,de+(!Ae.key||Me&&Me.key===Ae.key?"":(""+Ae.key).replace(M,"$&/")+"/")+b)),K.push(Ae)),1;if(Me=0,Re=Re===""?".":Re+":",re(b))for(var Ue=0;Ue<b.length;Ue++){De=b[Ue];var $e=Re+C(De,Ue);Me+=st(De,K,de,$e,Ae)}else if($e=I(b),typeof $e=="function")for(b=$e.call(b),Ue=0;!(De=b.next()).done;)De=De.value,$e=Re+C(De,Ue++),Me+=st(De,K,de,$e,Ae);else if(De==="object")throw K=String(b),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Me}function Lt(b,K,de){if(b==null)return b;var Re=[],Ae=0;return st(b,Re,"","",function(De){return K.call(de,De,Ae++)}),Re}function Vt(b){if(b._status===-1){var K=b._result;K=K(),K.then(function(de){(b._status===0||b._status===-1)&&(b._status=1,b._result=de)},function(de){(b._status===0||b._status===-1)&&(b._status=2,b._result=de)}),b._status===-1&&(b._status=0,b._result=K)}if(b._status===1)return b._result.default;throw b._result}var je={current:null},ne={transition:null},pe={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:ne,ReactCurrentOwner:_e};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Lt,forEach:function(b,K,de){Lt(b,function(){K.apply(this,arguments)},de)},count:function(b){var K=0;return Lt(b,function(){K++}),K},toArray:function(b){return Lt(b,function(K){return K})||[]},only:function(b){if(!k(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Ce.Component=V,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=G,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Ce.act=oe,Ce.cloneElement=function(b,K,de){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Re=L({},b.props),Ae=b.key,De=b.ref,Me=b._owner;if(K!=null){if(K.ref!==void 0&&(De=K.ref,Me=_e.current),K.key!==void 0&&(Ae=""+K.key),b.type&&b.type.defaultProps)var Ue=b.type.defaultProps;for($e in K)Ie.call(K,$e)&&!N.hasOwnProperty($e)&&(Re[$e]=K[$e]===void 0&&Ue!==void 0?Ue[$e]:K[$e])}var $e=arguments.length-2;if($e===1)Re.children=de;else if(1<$e){Ue=Array($e);for(var Et=0;Et<$e;Et++)Ue[Et]=arguments[Et+2];Re.children=Ue}return{$$typeof:n,type:b.type,key:Ae,ref:De,props:Re,_owner:Me}},Ce.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:l,_context:b},b.Consumer=b},Ce.createElement=S,Ce.createFactory=function(b){var K=S.bind(null,b);return K.type=b,K},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(b){return{$$typeof:f,render:b}},Ce.isValidElement=k,Ce.lazy=function(b){return{$$typeof:E,_payload:{_status:-1,_result:b},_init:Vt}},Ce.memo=function(b,K){return{$$typeof:y,type:b,compare:K===void 0?null:K}},Ce.startTransition=function(b){var K=ne.transition;ne.transition={};try{b()}finally{ne.transition=K}},Ce.unstable_act=oe,Ce.useCallback=function(b,K){return je.current.useCallback(b,K)},Ce.useContext=function(b){return je.current.useContext(b)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(b){return je.current.useDeferredValue(b)},Ce.useEffect=function(b,K){return je.current.useEffect(b,K)},Ce.useId=function(){return je.current.useId()},Ce.useImperativeHandle=function(b,K,de){return je.current.useImperativeHandle(b,K,de)},Ce.useInsertionEffect=function(b,K){return je.current.useInsertionEffect(b,K)},Ce.useLayoutEffect=function(b,K){return je.current.useLayoutEffect(b,K)},Ce.useMemo=function(b,K){return je.current.useMemo(b,K)},Ce.useReducer=function(b,K,de){return je.current.useReducer(b,K,de)},Ce.useRef=function(b){return je.current.useRef(b)},Ce.useState=function(b){return je.current.useState(b)},Ce.useSyncExternalStore=function(b,K,de){return je.current.useSyncExternalStore(b,K,de)},Ce.useTransition=function(){return je.current.useTransition()},Ce.version="18.3.1",Ce}var kg;function yf(){return kg||(kg=1,Td.exports=sw()),Td.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function ow(){if(Ng)return ba;Ng=1;var n=yf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,p,y){var E,T={},I=null,D=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(D=p.ref);for(E in p)i.call(p,E)&&!l.hasOwnProperty(E)&&(T[E]=p[E]);if(f&&f.defaultProps)for(E in p=f.defaultProps,p)T[E]===void 0&&(T[E]=p[E]);return{$$typeof:e,type:f,key:I,ref:D,props:T,_owner:o.current}}return ba.Fragment=t,ba.jsx=h,ba.jsxs=h,ba}var xg;function aw(){return xg||(xg=1,wd.exports=ow()),wd.exports}var ie=aw(),H=yf(),Vu={},Id={exports:{}},nn={},Sd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function lw(){return Dg||(Dg=1,function(n){function e(ne,pe){var oe=ne.length;ne.push(pe);e:for(;0<oe;){var b=oe-1>>>1,K=ne[b];if(0<o(K,pe))ne[b]=pe,ne[oe]=K,oe=b;else break e}}function t(ne){return ne.length===0?null:ne[0]}function i(ne){if(ne.length===0)return null;var pe=ne[0],oe=ne.pop();if(oe!==pe){ne[0]=oe;e:for(var b=0,K=ne.length,de=K>>>1;b<de;){var Re=2*(b+1)-1,Ae=ne[Re],De=Re+1,Me=ne[De];if(0>o(Ae,oe))De<K&&0>o(Me,Ae)?(ne[b]=Me,ne[De]=oe,b=De):(ne[b]=Ae,ne[Re]=oe,b=Re);else if(De<K&&0>o(Me,oe))ne[b]=Me,ne[De]=oe,b=De;else break e}}return pe}function o(ne,pe){var oe=ne.sortIndex-pe.sortIndex;return oe!==0?oe:ne.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var p=[],y=[],E=1,T=null,I=3,D=!1,L=!1,z=!1,V=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(ne){for(var pe=t(y);pe!==null;){if(pe.callback===null)i(y);else if(pe.startTime<=ne)i(y),pe.sortIndex=pe.expirationTime,e(p,pe);else break;pe=t(y)}}function re(ne){if(z=!1,ee(ne),!L)if(t(p)!==null)L=!0,Vt(Ie);else{var pe=t(y);pe!==null&&je(re,pe.startTime-ne)}}function Ie(ne,pe){L=!1,z&&(z=!1,W(S),S=-1),D=!0;var oe=I;try{for(ee(pe),T=t(p);T!==null&&(!(T.expirationTime>pe)||ne&&!O());){var b=T.callback;if(typeof b=="function"){T.callback=null,I=T.priorityLevel;var K=b(T.expirationTime<=pe);pe=n.unstable_now(),typeof K=="function"?T.callback=K:T===t(p)&&i(p),ee(pe)}else i(p);T=t(p)}if(T!==null)var de=!0;else{var Re=t(y);Re!==null&&je(re,Re.startTime-pe),de=!1}return de}finally{T=null,I=oe,D=!1}}var _e=!1,N=null,S=-1,A=5,k=-1;function O(){return!(n.unstable_now()-k<A)}function M(){if(N!==null){var ne=n.unstable_now();k=ne;var pe=!0;try{pe=N(!0,ne)}finally{pe?C():(_e=!1,N=null)}}else _e=!1}var C;if(typeof G=="function")C=function(){G(M)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,Lt=st.port2;st.port1.onmessage=M,C=function(){Lt.postMessage(null)}}else C=function(){V(M,0)};function Vt(ne){N=ne,_e||(_e=!0,C())}function je(ne,pe){S=V(function(){ne(n.unstable_now())},pe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ne){ne.callback=null},n.unstable_continueExecution=function(){L||D||(L=!0,Vt(Ie))},n.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ne?Math.floor(1e3/ne):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ne){switch(I){case 1:case 2:case 3:var pe=3;break;default:pe=I}var oe=I;I=pe;try{return ne()}finally{I=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ne,pe){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var oe=I;I=ne;try{return pe()}finally{I=oe}},n.unstable_scheduleCallback=function(ne,pe,oe){var b=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?b+oe:b):oe=b,ne){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=oe+K,ne={id:E++,callback:pe,priorityLevel:ne,startTime:oe,expirationTime:K,sortIndex:-1},oe>b?(ne.sortIndex=oe,e(y,ne),t(p)===null&&ne===t(y)&&(z?(W(S),S=-1):z=!0,je(re,oe-b))):(ne.sortIndex=K,e(p,ne),L||D||(L=!0,Vt(Ie))),ne},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ne){var pe=I;return function(){var oe=I;I=pe;try{return ne.apply(this,arguments)}finally{I=oe}}}}(Rd)),Rd}var Og;function uw(){return Og||(Og=1,Sd.exports=lw()),Sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function cw(){if(Lg)return nn;Lg=1;var n=yf(),e=uw();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function I(r){return p.call(T,r)?!0:p.call(E,r)?!1:y.test(r)?T[r]=!0:(E[r]=!0,!1)}function D(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function L(r,s,a,c){if(s===null||typeof s>"u"||D(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function z(r,s,a,c,d,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){V[r]=new z(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];V[s]=new z(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){V[r]=new z(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){V[r]=new z(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){V[r]=new z(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){V[r]=new z(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){V[r]=new z(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){V[r]=new z(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){V[r]=new z(r,5,!1,r.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function G(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(W,G);V[s]=new z(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(W,G);V[s]=new z(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(W,G);V[s]=new z(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){V[r]=new z(r,1,!1,r.toLowerCase(),null,!1,!1)}),V.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){V[r]=new z(r,1,!1,r.toLowerCase(),null,!0,!0)});function ee(r,s,a,c){var d=V.hasOwnProperty(s)?V[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(L(s,a,d,c)&&(a=null),c||d===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var re=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),_e=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),O=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),st=Symbol.for("react.suspense_list"),Lt=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),ne=Symbol.iterator;function pe(r){return r===null||typeof r!="object"?null:(r=ne&&r[ne]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,b;function K(r){if(b===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);b=s&&s[1]||""}return`
`+b+r}var de=!1;function Re(r,s){if(!r||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(j){var c=j}Reflect.construct(r,[],s)}else{try{s.call()}catch(j){c=j}r.call(s.prototype)}else{try{throw Error()}catch(j){c=j}r()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),g=c.stack.split(`
`),v=d.length-1,R=g.length-1;1<=v&&0<=R&&d[v]!==g[R];)R--;for(;1<=v&&0<=R;v--,R--)if(d[v]!==g[R]){if(v!==1||R!==1)do if(v--,R--,0>R||d[v]!==g[R]){var P=`
`+d[v].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=v&&0<=R);break}}}finally{de=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function Ae(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case _e:return"Portal";case A:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case st:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Lt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Vt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Et(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function fr(r){r._valueTracker||(r._valueTracker=Et(r))}function Ss(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function $r(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Vi(r,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Rs(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Ue(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function zo(r,s){s=s.checked,s!=null&&ee(r,"checked",s,!1)}function $o(r,s){zo(r,s);var a=Ue(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?As(r,s.type,a):s.hasOwnProperty("defaultValue")&&As(r,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function El(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function As(r,s,a){(s!=="number"||$r(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var pr=Array.isArray;function mr(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Ue(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Ho(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Cs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(pr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ue(a)}}function Ps(r,s){var a=Ue(s.value),c=Ue(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Wo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function dt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?dt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var gr,qo=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=gr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Hr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mi=["Webkit","ms","Moz","O"];Object.keys(bi).forEach(function(r){Mi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),bi[s]=bi[r]})});function Ko(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||bi.hasOwnProperty(r)&&bi[r]?(""+s).trim():s+"px"}function Go(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Ko(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var Qo=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xo(r,s){if(s){if(Qo[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Yo(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ui=null;function ks(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ns=null,gn=null,Gn=null;function xs(r){if(r=wa(r)){if(typeof Ns!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Xl(s),Ns(r.stateNode,r.type,s))}}function Qn(r){gn?Gn?Gn.push(r):Gn=[r]:gn=r}function Jo(){if(gn){var r=gn,s=Gn;if(Gn=gn=null,xs(r),s)for(r=0;r<s.length;r++)xs(s[r])}}function Fi(r,s){return r(s)}function Zo(){}var yr=!1;function ea(r,s,a){if(yr)return r(s,a);yr=!0;try{return Fi(r,s,a)}finally{yr=!1,(gn!==null||Gn!==null)&&(Zo(),Jo())}}function ot(r,s){var a=r.stateNode;if(a===null)return null;var c=Xl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ds=!1;if(f)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Ds=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Ds=!1}function Bi(r,s,a,c,d,g,v,R,P){var j=Array.prototype.slice.call(arguments,3);try{s.apply(a,j)}catch(X){this.onError(X)}}var ji=!1,Os=null,Pn=!1,ta=null,Qc={onError:function(r){ji=!0,Os=r}};function Ls(r,s,a,c,d,g,v,R,P){ji=!1,Os=null,Bi.apply(Qc,arguments)}function wl(r,s,a,c,d,g,v,R,P){if(Ls.apply(this,arguments),ji){if(ji){var j=Os;ji=!1,Os=null}else throw Error(t(198));Pn||(Pn=!0,ta=j)}}function kn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function zi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Nn(r){if(kn(r)!==r)throw Error(t(188))}function Tl(r){var s=r.alternate;if(!s){if(s=kn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Nn(d),r;if(g===c)return Nn(d),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var v=!1,R=d.child;R;){if(R===a){v=!0,a=d,c=g;break}if(R===c){v=!0,c=d,a=g;break}R=R.sibling}if(!v){for(R=g.child;R;){if(R===a){v=!0,a=g,c=d;break}if(R===c){v=!0,c=g,a=d;break}R=R.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function na(r){return r=Tl(r),r!==null?Vs(r):null}function Vs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Vs(r);if(s!==null)return s;r=r.sibling}return null}var bs=e.unstable_scheduleCallback,ra=e.unstable_cancelCallback,Il=e.unstable_shouldYield,Xc=e.unstable_requestPaint,He=e.unstable_now,Sl=e.unstable_getCurrentPriorityLevel,$i=e.unstable_ImmediatePriority,Wr=e.unstable_UserBlockingPriority,yn=e.unstable_NormalPriority,ia=e.unstable_LowPriority,Rl=e.unstable_IdlePriority,Hi=null,on=null;function Al(r){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Hi,r,void 0,(r.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:Pl,sa=Math.log,Cl=Math.LN2;function Pl(r){return r>>>=0,r===0?32:31-(sa(r)/Cl|0)|0}var Ms=64,Us=4194304;function qr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Wi(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var R=v&~d;R!==0?c=qr(R):(g&=v,g!==0&&(c=qr(g)))}else v=a&~d,v!==0?c=qr(v):g!==0&&(c=qr(g));if(c===0)return 0;if(s!==0&&s!==c&&!(s&d)&&(d=c&-c,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if(c&4&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-Ht(s),d=1<<a,c|=r[a],s&=~d;return c}function Yc(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _r(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-Ht(g),R=1<<v,P=d[v];P===-1?(!(R&a)||R&c)&&(d[v]=Yc(R,s)):P<=s&&(r.expiredLanes|=R),g&=~R}}function an(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function qi(){var r=Ms;return Ms<<=1,!(Ms&4194240)&&(Ms=64),r}function Kr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Gr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Ht(s),r[s]=a}function ze(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Ht(a),g=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~g}}function Qr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Ht(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var Ne=0;function Xr(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var kl,Fs,Nl,xl,Dl,oa=!1,Xn=[],At=null,xn=null,Dn=null,Yr=new Map,_n=new Map,Yn=[],Jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ol(r,s){switch(r){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Yr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(s.pointerId)}}function Qt(r,s,a,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=wa(s),s!==null&&Fs(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function Zc(r,s,a,c,d){switch(s){case"focusin":return At=Qt(At,r,s,a,c,d),!0;case"dragenter":return xn=Qt(xn,r,s,a,c,d),!0;case"mouseover":return Dn=Qt(Dn,r,s,a,c,d),!0;case"pointerover":var g=d.pointerId;return Yr.set(g,Qt(Yr.get(g)||null,r,s,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,_n.set(g,Qt(_n.get(g)||null,r,s,a,c,d)),!0}return!1}function Ll(r){var s=Yi(r.target);if(s!==null){var a=kn(s);if(a!==null){if(s=a.tag,s===13){if(s=zi(a),s!==null){r.blockedOn=s,Dl(r.priority,function(){Nl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function vr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Bs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Ui=c,a.target.dispatchEvent(c),Ui=null}else return s=wa(a),s!==null&&Fs(s),r.blockedOn=a,!1;s.shift()}return!0}function Ki(r,s,a){vr(r)&&a.delete(s)}function Vl(){oa=!1,At!==null&&vr(At)&&(At=null),xn!==null&&vr(xn)&&(xn=null),Dn!==null&&vr(Dn)&&(Dn=null),Yr.forEach(Ki),_n.forEach(Ki)}function On(r,s){r.blockedOn===s&&(r.blockedOn=null,oa||(oa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vl)))}function Ln(r){function s(d){return On(d,r)}if(0<Xn.length){On(Xn[0],r);for(var a=1;a<Xn.length;a++){var c=Xn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(At!==null&&On(At,r),xn!==null&&On(xn,r),Dn!==null&&On(Dn,r),Yr.forEach(s),_n.forEach(s),a=0;a<Yn.length;a++)c=Yn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Yn.length&&(a=Yn[0],a.blockedOn===null);)Ll(a),a.blockedOn===null&&Yn.shift()}var Er=re.ReactCurrentBatchConfig,Jr=!0;function Ge(r,s,a,c){var d=Ne,g=Er.transition;Er.transition=null;try{Ne=1,aa(r,s,a,c)}finally{Ne=d,Er.transition=g}}function eh(r,s,a,c){var d=Ne,g=Er.transition;Er.transition=null;try{Ne=4,aa(r,s,a,c)}finally{Ne=d,Er.transition=g}}function aa(r,s,a,c){if(Jr){var d=Bs(r,s,a,c);if(d===null)hh(r,s,c,Gi,a),Ol(r,c);else if(Zc(d,r,s,a,c))c.stopPropagation();else if(Ol(r,c),s&4&&-1<Jc.indexOf(r)){for(;d!==null;){var g=wa(d);if(g!==null&&kl(g),g=Bs(r,s,a,c),g===null&&hh(r,s,c,Gi,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else hh(r,s,c,null,a)}}var Gi=null;function Bs(r,s,a,c){if(Gi=null,r=ks(c),r=Yi(r),r!==null)if(s=kn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=zi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Gi=r,null}function la(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sl()){case $i:return 1;case Wr:return 4;case yn:case ia:return 16;case Rl:return 536870912;default:return 16}default:return 16}}var ln=null,js=null,Xt=null;function ua(){if(Xt)return Xt;var r,s=js,a=s.length,c,d="value"in ln?ln.value:ln.textContent,g=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===d[g-c];c++);return Xt=d.slice(r,1<c?1-c:void 0)}function zs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Jn(){return!0}function ca(){return!1}function Ct(r){function s(a,c,d,g,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var R in r)r.hasOwnProperty(R)&&(a=r[R],this[R]=a?a(g):g[R]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Jn:ca,this.isPropagationStopped=ca,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),s}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=Ct(Vn),Zn=oe({},Vn,{view:0,detail:0}),th=Ct(Zn),Hs,wr,Zr,Qi=oe({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Zr&&(Zr&&r.type==="mousemove"?(Hs=r.screenX-Zr.screenX,wr=r.screenY-Zr.screenY):wr=Hs=0,Zr=r),Hs)},movementY:function(r){return"movementY"in r?r.movementY:wr}}),Ws=Ct(Qi),ha=oe({},Qi,{dataTransfer:0}),bl=Ct(ha),qs=oe({},Zn,{relatedTarget:0}),Ks=Ct(qs),Ml=oe({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Tr=Ct(Ml),Ul=oe({},Vn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Fl=Ct(Ul),Bl=oe({},Vn,{data:0}),da=Ct(Bl),Gs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=jl[r])?!!s[r]:!1}function er(){return zl}var u=oe({},Zn,{key:function(r){if(r.key){var s=Gs[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=zs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Wt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(r){return r.type==="keypress"?zs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?zs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Ct(u),_=oe({},Qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Ct(_),U=oe({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er}),$=Ct(U),te=oe({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=Ct(te),pt=oe({},Qi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=Ct(pt),wt=[9,13,27,32],ut=f&&"CompositionEvent"in window,vn=null;f&&"documentMode"in document&&(vn=document.documentMode);var un=f&&"TextEvent"in window&&!vn,Xi=f&&(!ut||vn&&8<vn&&11>=vn),Qs=" ",Tp=!1;function Ip(r,s){switch(r){case"keyup":return wt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Xs=!1;function nE(r,s){switch(r){case"compositionend":return Sp(s);case"keypress":return s.which!==32?null:(Tp=!0,Qs);case"textInput":return r=s.data,r===Qs&&Tp?null:r;default:return null}}function rE(r,s){if(Xs)return r==="compositionend"||!ut&&Ip(r,s)?(r=ua(),Xt=js=ln=null,Xs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Xi&&s.locale!=="ko"?null:s.data;default:return null}}var iE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!iE[r.type]:s==="textarea"}function Ap(r,s,a,c){Qn(c),s=Kl(s,"onChange"),0<s.length&&(a=new $s("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var fa=null,pa=null;function sE(r){Hp(r,0)}function $l(r){var s=to(r);if(Ss(s))return r}function oE(r,s){if(r==="change")return s}var Cp=!1;if(f){var nh;if(f){var rh="oninput"in document;if(!rh){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),rh=typeof Pp.oninput=="function"}nh=rh}else nh=!1;Cp=nh&&(!document.documentMode||9<document.documentMode)}function kp(){fa&&(fa.detachEvent("onpropertychange",Np),pa=fa=null)}function Np(r){if(r.propertyName==="value"&&$l(pa)){var s=[];Ap(s,pa,r,ks(r)),ea(sE,s)}}function aE(r,s,a){r==="focusin"?(kp(),fa=s,pa=a,fa.attachEvent("onpropertychange",Np)):r==="focusout"&&kp()}function lE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return $l(pa)}function uE(r,s){if(r==="click")return $l(s)}function cE(r,s){if(r==="input"||r==="change")return $l(s)}function hE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var bn=typeof Object.is=="function"?Object.is:hE;function ma(r,s){if(bn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(s,d)||!bn(r[d],s[d]))return!1}return!0}function xp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Dp(r,s){var a=xp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xp(a)}}function Op(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Op(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Lp(){for(var r=window,s=$r();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=$r(r.document)}return s}function ih(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function dE(r){var s=Lp(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Op(a.ownerDocument.documentElement,a)){if(c!==null&&ih(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=Dp(a,g);var v=Dp(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var fE=f&&"documentMode"in document&&11>=document.documentMode,Ys=null,sh=null,ga=null,oh=!1;function Vp(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;oh||Ys==null||Ys!==$r(c)||(c=Ys,"selectionStart"in c&&ih(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ga&&ma(ga,c)||(ga=c,c=Kl(sh,"onSelect"),0<c.length&&(s=new $s("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Ys)))}function Hl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Js={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionend:Hl("Transition","TransitionEnd")},ah={},bp={};f&&(bp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function Wl(r){if(ah[r])return ah[r];if(!Js[r])return r;var s=Js[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in bp)return ah[r]=s[a];return r}var Mp=Wl("animationend"),Up=Wl("animationiteration"),Fp=Wl("animationstart"),Bp=Wl("transitionend"),jp=new Map,zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(r,s){jp.set(r,s),l(s,[r])}for(var lh=0;lh<zp.length;lh++){var uh=zp[lh],pE=uh.toLowerCase(),mE=uh[0].toUpperCase()+uh.slice(1);ei(pE,"on"+mE)}ei(Mp,"onAnimationEnd"),ei(Up,"onAnimationIteration"),ei(Fp,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei(Bp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function $p(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,wl(c,s,void 0,r),r.currentTarget=null}function Hp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var v=c.length-1;0<=v;v--){var R=c[v],P=R.instance,j=R.currentTarget;if(R=R.listener,P!==g&&d.isPropagationStopped())break e;$p(d,R,j),g=P}else for(v=0;v<c.length;v++){if(R=c[v],P=R.instance,j=R.currentTarget,R=R.listener,P!==g&&d.isPropagationStopped())break e;$p(d,R,j),g=P}}}if(Pn)throw r=ta,Pn=!1,ta=null,r}function qe(r,s){var a=s[yh];a===void 0&&(a=s[yh]=new Set);var c=r+"__bubble";a.has(c)||(Wp(s,r,2,!1),a.add(c))}function ch(r,s,a){var c=0;s&&(c|=4),Wp(a,r,c,s)}var ql="_reactListening"+Math.random().toString(36).slice(2);function _a(r){if(!r[ql]){r[ql]=!0,i.forEach(function(a){a!=="selectionchange"&&(gE.has(a)||ch(a,!1,r),ch(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[ql]||(s[ql]=!0,ch("selectionchange",!1,s))}}function Wp(r,s,a,c){switch(la(s)){case 1:var d=Ge;break;case 4:d=eh;break;default:d=aa}a=d.bind(null,s,a,r),d=void 0,!Ds||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function hh(r,s,a,c,d){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var R=c.stateNode.containerInfo;if(R===d||R.nodeType===8&&R.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;R!==null;){if(v=Yi(R),v===null)return;if(P=v.tag,P===5||P===6){c=g=v;continue e}R=R.parentNode}}c=c.return}ea(function(){var j=g,X=ks(a),J=[];e:{var Q=jp.get(r);if(Q!==void 0){var se=$s,ue=r;switch(r){case"keypress":if(zs(a)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ue="focus",se=Ks;break;case"focusout":ue="blur",se=Ks;break;case"beforeblur":case"afterblur":se=Ks;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=bl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=$;break;case Mp:case Up:case Fp:se=Tr;break;case Bp:se=Be;break;case"scroll":se=th;break;case"wheel":se=Oe;break;case"copy":case"cut":case"paste":se=Fl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=w}var ce=(s&4)!==0,at=!ce&&r==="scroll",F=ce?Q!==null?Q+"Capture":null:Q;ce=[];for(var x=j,B;x!==null;){B=x;var Z=B.stateNode;if(B.tag===5&&Z!==null&&(B=Z,F!==null&&(Z=ot(x,F),Z!=null&&ce.push(va(x,Z,B)))),at)break;x=x.return}0<ce.length&&(Q=new se(Q,ue,null,a,X),J.push({event:Q,listeners:ce}))}}if(!(s&7)){e:{if(Q=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",Q&&a!==Ui&&(ue=a.relatedTarget||a.fromElement)&&(Yi(ue)||ue[Ir]))break e;if((se||Q)&&(Q=X.window===X?X:(Q=X.ownerDocument)?Q.defaultView||Q.parentWindow:window,se?(ue=a.relatedTarget||a.toElement,se=j,ue=ue?Yi(ue):null,ue!==null&&(at=kn(ue),ue!==at||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(se=null,ue=j),se!==ue)){if(ce=Ws,Z="onMouseLeave",F="onMouseEnter",x="mouse",(r==="pointerout"||r==="pointerover")&&(ce=w,Z="onPointerLeave",F="onPointerEnter",x="pointer"),at=se==null?Q:to(se),B=ue==null?Q:to(ue),Q=new ce(Z,x+"leave",se,a,X),Q.target=at,Q.relatedTarget=B,Z=null,Yi(X)===j&&(ce=new ce(F,x+"enter",ue,a,X),ce.target=B,ce.relatedTarget=at,Z=ce),at=Z,se&&ue)t:{for(ce=se,F=ue,x=0,B=ce;B;B=Zs(B))x++;for(B=0,Z=F;Z;Z=Zs(Z))B++;for(;0<x-B;)ce=Zs(ce),x--;for(;0<B-x;)F=Zs(F),B--;for(;x--;){if(ce===F||F!==null&&ce===F.alternate)break t;ce=Zs(ce),F=Zs(F)}ce=null}else ce=null;se!==null&&qp(J,Q,se,ce,!1),ue!==null&&at!==null&&qp(J,at,ue,ce,!0)}}e:{if(Q=j?to(j):window,se=Q.nodeName&&Q.nodeName.toLowerCase(),se==="select"||se==="input"&&Q.type==="file")var he=oE;else if(Rp(Q))if(Cp)he=cE;else{he=lE;var me=aE}else(se=Q.nodeName)&&se.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(he=uE);if(he&&(he=he(r,j))){Ap(J,he,a,X);break e}me&&me(r,Q,j),r==="focusout"&&(me=Q._wrapperState)&&me.controlled&&Q.type==="number"&&As(Q,"number",Q.value)}switch(me=j?to(j):window,r){case"focusin":(Rp(me)||me.contentEditable==="true")&&(Ys=me,sh=j,ga=null);break;case"focusout":ga=sh=Ys=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,Vp(J,a,X);break;case"selectionchange":if(fE)break;case"keydown":case"keyup":Vp(J,a,X)}var ge;if(ut)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Xs?Ip(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Xi&&a.locale!=="ko"&&(Xs||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Xs&&(ge=ua()):(ln=X,js="value"in ln?ln.value:ln.textContent,Xs=!0)),me=Kl(j,Ee),0<me.length&&(Ee=new da(Ee,r,null,a,X),J.push({event:Ee,listeners:me}),ge?Ee.data=ge:(ge=Sp(a),ge!==null&&(Ee.data=ge)))),(ge=un?nE(r,a):rE(r,a))&&(j=Kl(j,"onBeforeInput"),0<j.length&&(X=new da("onBeforeInput","beforeinput",null,a,X),J.push({event:X,listeners:j}),X.data=ge))}Hp(J,s)})}function va(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Kl(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=ot(r,a),g!=null&&c.unshift(va(r,g,d)),g=ot(r,s),g!=null&&c.push(va(r,g,d))),r=r.return}return c}function Zs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function qp(r,s,a,c,d){for(var g=s._reactName,v=[];a!==null&&a!==c;){var R=a,P=R.alternate,j=R.stateNode;if(P!==null&&P===c)break;R.tag===5&&j!==null&&(R=j,d?(P=ot(a,g),P!=null&&v.unshift(va(a,P,R))):d||(P=ot(a,g),P!=null&&v.push(va(a,P,R)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var yE=/\r\n?/g,_E=/\u0000|\uFFFD/g;function Kp(r){return(typeof r=="string"?r:""+r).replace(yE,`
`).replace(_E,"")}function Gl(r,s,a){if(s=Kp(s),Kp(r)!==s&&a)throw Error(t(425))}function Ql(){}var dh=null,fh=null;function ph(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var mh=typeof setTimeout=="function"?setTimeout:void 0,vE=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,EE=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(r){return Gp.resolve(null).then(r).catch(wE)}:mh;function wE(r){setTimeout(function(){throw r})}function gh(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),Ln(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Ln(s)}function ti(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Qp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var eo=Math.random().toString(36).slice(2),tr="__reactFiber$"+eo,Ea="__reactProps$"+eo,Ir="__reactContainer$"+eo,yh="__reactEvents$"+eo,TE="__reactListeners$"+eo,IE="__reactHandles$"+eo;function Yi(r){var s=r[tr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Ir]||a[tr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Qp(r);r!==null;){if(a=r[tr])return a;r=Qp(r)}return s}r=a,a=r.parentNode}return null}function wa(r){return r=r[tr]||r[Ir],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function to(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Xl(r){return r[Ea]||null}var _h=[],no=-1;function ni(r){return{current:r}}function Ke(r){0>no||(r.current=_h[no],_h[no]=null,no--)}function We(r,s){no++,_h[no]=r.current,r.current=s}var ri={},bt=ni(ri),Yt=ni(!1),Ji=ri;function ro(r,s){var a=r.type.contextTypes;if(!a)return ri;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Jt(r){return r=r.childContextTypes,r!=null}function Yl(){Ke(Yt),Ke(bt)}function Xp(r,s,a){if(bt.current!==ri)throw Error(t(168));We(bt,s),We(Yt,a)}function Yp(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Me(r)||"Unknown",d));return oe({},a,c)}function Jl(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ri,Ji=bt.current,We(bt,r),We(Yt,Yt.current),!0}function Jp(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=Yp(r,s,Ji),c.__reactInternalMemoizedMergedChildContext=r,Ke(Yt),Ke(bt),We(bt,r)):Ke(Yt),We(Yt,a)}var Sr=null,Zl=!1,vh=!1;function Zp(r){Sr===null?Sr=[r]:Sr.push(r)}function SE(r){Zl=!0,Zp(r)}function ii(){if(!vh&&Sr!==null){vh=!0;var r=0,s=Ne;try{var a=Sr;for(Ne=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Sr=null,Zl=!1}catch(d){throw Sr!==null&&(Sr=Sr.slice(r+1)),bs($i,ii),d}finally{Ne=s,vh=!1}}return null}var io=[],so=0,eu=null,tu=0,En=[],wn=0,Zi=null,Rr=1,Ar="";function es(r,s){io[so++]=tu,io[so++]=eu,eu=r,tu=s}function em(r,s,a){En[wn++]=Rr,En[wn++]=Ar,En[wn++]=Zi,Zi=r;var c=Rr;r=Ar;var d=32-Ht(c)-1;c&=~(1<<d),a+=1;var g=32-Ht(s)+d;if(30<g){var v=d-d%5;g=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Rr=1<<32-Ht(s)+d|a<<d|c,Ar=g+r}else Rr=1<<g|a<<d|c,Ar=r}function Eh(r){r.return!==null&&(es(r,1),em(r,1,0))}function wh(r){for(;r===eu;)eu=io[--so],io[so]=null,tu=io[--so],io[so]=null;for(;r===Zi;)Zi=En[--wn],En[wn]=null,Ar=En[--wn],En[wn]=null,Rr=En[--wn],En[wn]=null}var cn=null,hn=null,Qe=!1,Mn=null;function tm(r,s){var a=Rn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function nm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,cn=r,hn=ti(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,cn=r,hn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Zi!==null?{id:Rr,overflow:Ar}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Rn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,cn=r,hn=null,!0):!1;default:return!1}}function Th(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Ih(r){if(Qe){var s=hn;if(s){var a=s;if(!nm(r,s)){if(Th(r))throw Error(t(418));s=ti(a.nextSibling);var c=cn;s&&nm(r,s)?tm(c,a):(r.flags=r.flags&-4097|2,Qe=!1,cn=r)}}else{if(Th(r))throw Error(t(418));r.flags=r.flags&-4097|2,Qe=!1,cn=r}}}function rm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;cn=r}function nu(r){if(r!==cn)return!1;if(!Qe)return rm(r),Qe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!ph(r.type,r.memoizedProps)),s&&(s=hn)){if(Th(r))throw im(),Error(t(418));for(;s;)tm(r,s),s=ti(s.nextSibling)}if(rm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){hn=ti(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}hn=null}}else hn=cn?ti(r.stateNode.nextSibling):null;return!0}function im(){for(var r=hn;r;)r=ti(r.nextSibling)}function oo(){hn=cn=null,Qe=!1}function Sh(r){Mn===null?Mn=[r]:Mn.push(r)}var RE=re.ReactCurrentBatchConfig;function Ta(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var R=d.refs;v===null?delete R[g]:R[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function ru(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function sm(r){var s=r._init;return s(r._payload)}function om(r){function s(F,x){if(r){var B=F.deletions;B===null?(F.deletions=[x],F.flags|=16):B.push(x)}}function a(F,x){if(!r)return null;for(;x!==null;)s(F,x),x=x.sibling;return null}function c(F,x){for(F=new Map;x!==null;)x.key!==null?F.set(x.key,x):F.set(x.index,x),x=x.sibling;return F}function d(F,x){return F=di(F,x),F.index=0,F.sibling=null,F}function g(F,x,B){return F.index=B,r?(B=F.alternate,B!==null?(B=B.index,B<x?(F.flags|=2,x):B):(F.flags|=2,x)):(F.flags|=1048576,x)}function v(F){return r&&F.alternate===null&&(F.flags|=2),F}function R(F,x,B,Z){return x===null||x.tag!==6?(x=md(B,F.mode,Z),x.return=F,x):(x=d(x,B),x.return=F,x)}function P(F,x,B,Z){var he=B.type;return he===N?X(F,x,B.props.children,Z,B.key):x!==null&&(x.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Vt&&sm(he)===x.type)?(Z=d(x,B.props),Z.ref=Ta(F,x,B),Z.return=F,Z):(Z=Cu(B.type,B.key,B.props,null,F.mode,Z),Z.ref=Ta(F,x,B),Z.return=F,Z)}function j(F,x,B,Z){return x===null||x.tag!==4||x.stateNode.containerInfo!==B.containerInfo||x.stateNode.implementation!==B.implementation?(x=gd(B,F.mode,Z),x.return=F,x):(x=d(x,B.children||[]),x.return=F,x)}function X(F,x,B,Z,he){return x===null||x.tag!==7?(x=ls(B,F.mode,Z,he),x.return=F,x):(x=d(x,B),x.return=F,x)}function J(F,x,B){if(typeof x=="string"&&x!==""||typeof x=="number")return x=md(""+x,F.mode,B),x.return=F,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ie:return B=Cu(x.type,x.key,x.props,null,F.mode,B),B.ref=Ta(F,null,x),B.return=F,B;case _e:return x=gd(x,F.mode,B),x.return=F,x;case Vt:var Z=x._init;return J(F,Z(x._payload),B)}if(pr(x)||pe(x))return x=ls(x,F.mode,B,null),x.return=F,x;ru(F,x)}return null}function Q(F,x,B,Z){var he=x!==null?x.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return he!==null?null:R(F,x,""+B,Z);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Ie:return B.key===he?P(F,x,B,Z):null;case _e:return B.key===he?j(F,x,B,Z):null;case Vt:return he=B._init,Q(F,x,he(B._payload),Z)}if(pr(B)||pe(B))return he!==null?null:X(F,x,B,Z,null);ru(F,B)}return null}function se(F,x,B,Z,he){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return F=F.get(B)||null,R(x,F,""+Z,he);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case Ie:return F=F.get(Z.key===null?B:Z.key)||null,P(x,F,Z,he);case _e:return F=F.get(Z.key===null?B:Z.key)||null,j(x,F,Z,he);case Vt:var me=Z._init;return se(F,x,B,me(Z._payload),he)}if(pr(Z)||pe(Z))return F=F.get(B)||null,X(x,F,Z,he,null);ru(x,Z)}return null}function ue(F,x,B,Z){for(var he=null,me=null,ge=x,Ee=x=0,St=null;ge!==null&&Ee<B.length;Ee++){ge.index>Ee?(St=ge,ge=null):St=ge.sibling;var be=Q(F,ge,B[Ee],Z);if(be===null){ge===null&&(ge=St);break}r&&ge&&be.alternate===null&&s(F,ge),x=g(be,x,Ee),me===null?he=be:me.sibling=be,me=be,ge=St}if(Ee===B.length)return a(F,ge),Qe&&es(F,Ee),he;if(ge===null){for(;Ee<B.length;Ee++)ge=J(F,B[Ee],Z),ge!==null&&(x=g(ge,x,Ee),me===null?he=ge:me.sibling=ge,me=ge);return Qe&&es(F,Ee),he}for(ge=c(F,ge);Ee<B.length;Ee++)St=se(ge,F,Ee,B[Ee],Z),St!==null&&(r&&St.alternate!==null&&ge.delete(St.key===null?Ee:St.key),x=g(St,x,Ee),me===null?he=St:me.sibling=St,me=St);return r&&ge.forEach(function(fi){return s(F,fi)}),Qe&&es(F,Ee),he}function ce(F,x,B,Z){var he=pe(B);if(typeof he!="function")throw Error(t(150));if(B=he.call(B),B==null)throw Error(t(151));for(var me=he=null,ge=x,Ee=x=0,St=null,be=B.next();ge!==null&&!be.done;Ee++,be=B.next()){ge.index>Ee?(St=ge,ge=null):St=ge.sibling;var fi=Q(F,ge,be.value,Z);if(fi===null){ge===null&&(ge=St);break}r&&ge&&fi.alternate===null&&s(F,ge),x=g(fi,x,Ee),me===null?he=fi:me.sibling=fi,me=fi,ge=St}if(be.done)return a(F,ge),Qe&&es(F,Ee),he;if(ge===null){for(;!be.done;Ee++,be=B.next())be=J(F,be.value,Z),be!==null&&(x=g(be,x,Ee),me===null?he=be:me.sibling=be,me=be);return Qe&&es(F,Ee),he}for(ge=c(F,ge);!be.done;Ee++,be=B.next())be=se(ge,F,Ee,be.value,Z),be!==null&&(r&&be.alternate!==null&&ge.delete(be.key===null?Ee:be.key),x=g(be,x,Ee),me===null?he=be:me.sibling=be,me=be);return r&&ge.forEach(function(iw){return s(F,iw)}),Qe&&es(F,Ee),he}function at(F,x,B,Z){if(typeof B=="object"&&B!==null&&B.type===N&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Ie:e:{for(var he=B.key,me=x;me!==null;){if(me.key===he){if(he=B.type,he===N){if(me.tag===7){a(F,me.sibling),x=d(me,B.props.children),x.return=F,F=x;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Vt&&sm(he)===me.type){a(F,me.sibling),x=d(me,B.props),x.ref=Ta(F,me,B),x.return=F,F=x;break e}a(F,me);break}else s(F,me);me=me.sibling}B.type===N?(x=ls(B.props.children,F.mode,Z,B.key),x.return=F,F=x):(Z=Cu(B.type,B.key,B.props,null,F.mode,Z),Z.ref=Ta(F,x,B),Z.return=F,F=Z)}return v(F);case _e:e:{for(me=B.key;x!==null;){if(x.key===me)if(x.tag===4&&x.stateNode.containerInfo===B.containerInfo&&x.stateNode.implementation===B.implementation){a(F,x.sibling),x=d(x,B.children||[]),x.return=F,F=x;break e}else{a(F,x);break}else s(F,x);x=x.sibling}x=gd(B,F.mode,Z),x.return=F,F=x}return v(F);case Vt:return me=B._init,at(F,x,me(B._payload),Z)}if(pr(B))return ue(F,x,B,Z);if(pe(B))return ce(F,x,B,Z);ru(F,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,x!==null&&x.tag===6?(a(F,x.sibling),x=d(x,B),x.return=F,F=x):(a(F,x),x=md(B,F.mode,Z),x.return=F,F=x),v(F)):a(F,x)}return at}var ao=om(!0),am=om(!1),iu=ni(null),su=null,lo=null,Rh=null;function Ah(){Rh=lo=su=null}function Ch(r){var s=iu.current;Ke(iu),r._currentValue=s}function Ph(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function uo(r,s){su=r,Rh=lo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Zt=!0),r.firstContext=null)}function Tn(r){var s=r._currentValue;if(Rh!==r)if(r={context:r,memoizedValue:s,next:null},lo===null){if(su===null)throw Error(t(308));lo=r,su.dependencies={lanes:0,firstContext:r}}else lo=lo.next=r;return s}var ts=null;function kh(r){ts===null?ts=[r]:ts.push(r)}function lm(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,kh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Cr(r,c)}function Cr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var si=!1;function Nh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function um(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Pr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function oi(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Cr(r,a)}return d=c.interleaved,d===null?(s.next=s,kh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Cr(r,a)}function ou(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Qr(r,a)}}function cm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?d=g=s:g=g.next=s}else d=g=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function au(r,s,a,c){var d=r.updateQueue;si=!1;var g=d.firstBaseUpdate,v=d.lastBaseUpdate,R=d.shared.pending;if(R!==null){d.shared.pending=null;var P=R,j=P.next;P.next=null,v===null?g=j:v.next=j,v=P;var X=r.alternate;X!==null&&(X=X.updateQueue,R=X.lastBaseUpdate,R!==v&&(R===null?X.firstBaseUpdate=j:R.next=j,X.lastBaseUpdate=P))}if(g!==null){var J=d.baseState;v=0,X=j=P=null,R=g;do{var Q=R.lane,se=R.eventTime;if((c&Q)===Q){X!==null&&(X=X.next={eventTime:se,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ue=r,ce=R;switch(Q=s,se=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){J=ue.call(se,J,Q);break e}J=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,Q=typeof ue=="function"?ue.call(se,J,Q):ue,Q==null)break e;J=oe({},J,Q);break e;case 2:si=!0}}R.callback!==null&&R.lane!==0&&(r.flags|=64,Q=d.effects,Q===null?d.effects=[R]:Q.push(R))}else se={eventTime:se,lane:Q,tag:R.tag,payload:R.payload,callback:R.callback,next:null},X===null?(j=X=se,P=J):X=X.next=se,v|=Q;if(R=R.next,R===null){if(R=d.shared.pending,R===null)break;Q=R,R=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);if(X===null&&(P=J),d.baseState=P,d.firstBaseUpdate=j,d.lastBaseUpdate=X,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);is|=v,r.lanes=v,r.memoizedState=J}}function hm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ia={},nr=ni(Ia),Sa=ni(Ia),Ra=ni(Ia);function ns(r){if(r===Ia)throw Error(t(174));return r}function xh(r,s){switch(We(Ra,s),We(Sa,r),We(nr,Ia),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ft(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=ft(s,r)}Ke(nr),We(nr,s)}function co(){Ke(nr),Ke(Sa),Ke(Ra)}function dm(r){ns(Ra.current);var s=ns(nr.current),a=ft(s,r.type);s!==a&&(We(Sa,r),We(nr,a))}function Dh(r){Sa.current===r&&(Ke(nr),Ke(Sa))}var Je=ni(0);function lu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Oh=[];function Lh(){for(var r=0;r<Oh.length;r++)Oh[r]._workInProgressVersionPrimary=null;Oh.length=0}var uu=re.ReactCurrentDispatcher,Vh=re.ReactCurrentBatchConfig,rs=0,Ze=null,mt=null,Tt=null,cu=!1,Aa=!1,Ca=0,AE=0;function Mt(){throw Error(t(321))}function bh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!bn(r[a],s[a]))return!1;return!0}function Mh(r,s,a,c,d,g){if(rs=g,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,uu.current=r===null||r.memoizedState===null?NE:xE,r=a(c,d),Aa){g=0;do{if(Aa=!1,Ca=0,25<=g)throw Error(t(301));g+=1,Tt=mt=null,s.updateQueue=null,uu.current=DE,r=a(c,d)}while(Aa)}if(uu.current=fu,s=mt!==null&&mt.next!==null,rs=0,Tt=mt=Ze=null,cu=!1,s)throw Error(t(300));return r}function Uh(){var r=Ca!==0;return Ca=0,r}function rr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Ze.memoizedState=Tt=r:Tt=Tt.next=r,Tt}function In(){if(mt===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=mt.next;var s=Tt===null?Ze.memoizedState:Tt.next;if(s!==null)Tt=s,mt=r;else{if(r===null)throw Error(t(310));mt=r,r={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Tt===null?Ze.memoizedState=Tt=r:Tt=Tt.next=r}return Tt}function Pa(r,s){return typeof s=="function"?s(r):s}function Fh(r){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=mt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var v=d.next;d.next=g.next,g.next=v}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var R=v=null,P=null,j=g;do{var X=j.lane;if((rs&X)===X)P!==null&&(P=P.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:r(c,j.action);else{var J={lane:X,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};P===null?(R=P=J,v=c):P=P.next=J,Ze.lanes|=X,is|=X}j=j.next}while(j!==null&&j!==g);P===null?v=c:P.next=R,bn(c,s.memoizedState)||(Zt=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do g=d.lane,Ze.lanes|=g,is|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Bh(r){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,g=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do g=r(g,v.action),v=v.next;while(v!==d);bn(g,s.memoizedState)||(Zt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function fm(){}function pm(r,s){var a=Ze,c=In(),d=s(),g=!bn(c.memoizedState,d);if(g&&(c.memoizedState=d,Zt=!0),c=c.queue,jh(ym.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||Tt!==null&&Tt.memoizedState.tag&1){if(a.flags|=2048,ka(9,gm.bind(null,a,c,d,s),void 0,null),It===null)throw Error(t(349));rs&30||mm(a,s,d)}return d}function mm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function gm(r,s,a,c){s.value=a,s.getSnapshot=c,_m(s)&&vm(r)}function ym(r,s,a){return a(function(){_m(s)&&vm(r)})}function _m(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!bn(r,a)}catch{return!0}}function vm(r){var s=Cr(r,1);s!==null&&jn(s,r,1,-1)}function Em(r){var s=rr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:r},s.queue=r,r=r.dispatch=kE.bind(null,Ze,r),[s.memoizedState,r]}function ka(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function wm(){return In().memoizedState}function hu(r,s,a,c){var d=rr();Ze.flags|=r,d.memoizedState=ka(1|s,a,void 0,c===void 0?null:c)}function du(r,s,a,c){var d=In();c=c===void 0?null:c;var g=void 0;if(mt!==null){var v=mt.memoizedState;if(g=v.destroy,c!==null&&bh(c,v.deps)){d.memoizedState=ka(s,a,g,c);return}}Ze.flags|=r,d.memoizedState=ka(1|s,a,g,c)}function Tm(r,s){return hu(8390656,8,r,s)}function jh(r,s){return du(2048,8,r,s)}function Im(r,s){return du(4,2,r,s)}function Sm(r,s){return du(4,4,r,s)}function Rm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Am(r,s,a){return a=a!=null?a.concat([r]):null,du(4,4,Rm.bind(null,s,r),a)}function zh(){}function Cm(r,s){var a=In();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&bh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Pm(r,s){var a=In();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&bh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function km(r,s,a){return rs&21?(bn(a,s)||(a=qi(),Ze.lanes|=a,is|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Zt=!0),r.memoizedState=a)}function CE(r,s){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var c=Vh.transition;Vh.transition={};try{r(!1),s()}finally{Ne=a,Vh.transition=c}}function Nm(){return In().memoizedState}function PE(r,s,a){var c=ci(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},xm(r))Dm(s,a);else if(a=lm(r,s,a,c),a!==null){var d=Kt();jn(a,r,c,d),Om(a,s,c)}}function kE(r,s,a){var c=ci(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(xm(r))Dm(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,R=g(v,a);if(d.hasEagerState=!0,d.eagerState=R,bn(R,v)){var P=s.interleaved;P===null?(d.next=d,kh(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=lm(r,s,d,c),a!==null&&(d=Kt(),jn(a,r,c,d),Om(a,s,c))}}function xm(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function Dm(r,s){Aa=cu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Om(r,s,a){if(a&4194240){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Qr(r,a)}}var fu={readContext:Tn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},NE={readContext:Tn,useCallback:function(r,s){return rr().memoizedState=[r,s===void 0?null:s],r},useContext:Tn,useEffect:Tm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,hu(4194308,4,Rm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return hu(4194308,4,r,s)},useInsertionEffect:function(r,s){return hu(4,2,r,s)},useMemo:function(r,s){var a=rr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=rr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=PE.bind(null,Ze,r),[c.memoizedState,r]},useRef:function(r){var s=rr();return r={current:r},s.memoizedState=r},useState:Em,useDebugValue:zh,useDeferredValue:function(r){return rr().memoizedState=r},useTransition:function(){var r=Em(!1),s=r[0];return r=CE.bind(null,r[1]),rr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=Ze,d=rr();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),It===null)throw Error(t(349));rs&30||mm(c,s,a)}d.memoizedState=a;var g={value:a,getSnapshot:s};return d.queue=g,Tm(ym.bind(null,c,g,r),[r]),c.flags|=2048,ka(9,gm.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=rr(),s=It.identifierPrefix;if(Qe){var a=Ar,c=Rr;a=(c&~(1<<32-Ht(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ca++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=AE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},xE={readContext:Tn,useCallback:Cm,useContext:Tn,useEffect:jh,useImperativeHandle:Am,useInsertionEffect:Im,useLayoutEffect:Sm,useMemo:Pm,useReducer:Fh,useRef:wm,useState:function(){return Fh(Pa)},useDebugValue:zh,useDeferredValue:function(r){var s=In();return km(s,mt.memoizedState,r)},useTransition:function(){var r=Fh(Pa)[0],s=In().memoizedState;return[r,s]},useMutableSource:fm,useSyncExternalStore:pm,useId:Nm,unstable_isNewReconciler:!1},DE={readContext:Tn,useCallback:Cm,useContext:Tn,useEffect:jh,useImperativeHandle:Am,useInsertionEffect:Im,useLayoutEffect:Sm,useMemo:Pm,useReducer:Bh,useRef:wm,useState:function(){return Bh(Pa)},useDebugValue:zh,useDeferredValue:function(r){var s=In();return mt===null?s.memoizedState=r:km(s,mt.memoizedState,r)},useTransition:function(){var r=Bh(Pa)[0],s=In().memoizedState;return[r,s]},useMutableSource:fm,useSyncExternalStore:pm,useId:Nm,unstable_isNewReconciler:!1};function Un(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function $h(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:oe({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var pu={isMounted:function(r){return(r=r._reactInternals)?kn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Kt(),d=ci(r),g=Pr(c,d);g.payload=s,a!=null&&(g.callback=a),s=oi(r,g,d),s!==null&&(jn(s,r,d,c),ou(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Kt(),d=ci(r),g=Pr(c,d);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=oi(r,g,d),s!==null&&(jn(s,r,d,c),ou(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Kt(),c=ci(r),d=Pr(a,c);d.tag=2,s!=null&&(d.callback=s),s=oi(r,d,c),s!==null&&(jn(s,r,c,a),ou(s,r,c))}};function Lm(r,s,a,c,d,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,v):s.prototype&&s.prototype.isPureReactComponent?!ma(a,c)||!ma(d,g):!0}function Vm(r,s,a){var c=!1,d=ri,g=s.contextType;return typeof g=="object"&&g!==null?g=Tn(g):(d=Jt(s)?Ji:bt.current,c=s.contextTypes,g=(c=c!=null)?ro(r,d):ri),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=pu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),s}function bm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&pu.enqueueReplaceState(s,s.state,null)}function Hh(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},Nh(r);var g=s.contextType;typeof g=="object"&&g!==null?d.context=Tn(g):(g=Jt(s)?Ji:bt.current,d.context=ro(r,g)),d.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&($h(r,s,g,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&pu.enqueueReplaceState(d,d.state,null),au(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function ho(r,s){try{var a="",c=s;do a+=Ae(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:d,digest:null}}function Wh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function qh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var OE=typeof WeakMap=="function"?WeakMap:Map;function Mm(r,s,a){a=Pr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){wu||(wu=!0,ad=c),qh(r,s)},a}function Um(r,s,a){a=Pr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){qh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){qh(r,s),typeof c!="function"&&(li===null?li=new Set([this]):li.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Fm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new OE;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=KE.bind(null,r,s,a),s.then(r,r))}function Bm(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function jm(r,s,a,c,d){return r.mode&1?(r.flags|=65536,r.lanes=d,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Pr(-1,1),s.tag=2,oi(a,s,1))),a.lanes|=1),r)}var LE=re.ReactCurrentOwner,Zt=!1;function qt(r,s,a,c){s.child=r===null?am(s,null,a,c):ao(s,r.child,a,c)}function zm(r,s,a,c,d){a=a.render;var g=s.ref;return uo(s,d),c=Mh(r,s,a,c,g,d),a=Uh(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,kr(r,s,d)):(Qe&&a&&Eh(s),s.flags|=1,qt(r,s,c,d),s.child)}function $m(r,s,a,c,d){if(r===null){var g=a.type;return typeof g=="function"&&!pd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Hm(r,s,g,c,d)):(r=Cu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&d)){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:ma,a(v,c)&&r.ref===s.ref)return kr(r,s,d)}return s.flags|=1,r=di(g,c),r.ref=s.ref,r.return=s,s.child=r}function Hm(r,s,a,c,d){if(r!==null){var g=r.memoizedProps;if(ma(g,c)&&r.ref===s.ref)if(Zt=!1,s.pendingProps=c=g,(r.lanes&d)!==0)r.flags&131072&&(Zt=!0);else return s.lanes=r.lanes,kr(r,s,d)}return Kh(r,s,a,c,d)}function Wm(r,s,a){var c=s.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(po,dn),dn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(po,dn),dn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,We(po,dn),dn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,We(po,dn),dn|=c;return qt(r,s,d,a),s.child}function qm(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Kh(r,s,a,c,d){var g=Jt(a)?Ji:bt.current;return g=ro(s,g),uo(s,d),a=Mh(r,s,a,c,g,d),c=Uh(),r!==null&&!Zt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,kr(r,s,d)):(Qe&&c&&Eh(s),s.flags|=1,qt(r,s,a,d),s.child)}function Km(r,s,a,c,d){if(Jt(a)){var g=!0;Jl(s)}else g=!1;if(uo(s,d),s.stateNode===null)gu(r,s),Vm(s,a,c),Hh(s,a,c,d),c=!0;else if(r===null){var v=s.stateNode,R=s.memoizedProps;v.props=R;var P=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=Tn(j):(j=Jt(a)?Ji:bt.current,j=ro(s,j));var X=a.getDerivedStateFromProps,J=typeof X=="function"||typeof v.getSnapshotBeforeUpdate=="function";J||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==c||P!==j)&&bm(s,v,c,j),si=!1;var Q=s.memoizedState;v.state=Q,au(s,c,v,d),P=s.memoizedState,R!==c||Q!==P||Yt.current||si?(typeof X=="function"&&($h(s,a,X,c),P=s.memoizedState),(R=si||Lm(s,a,R,c,Q,P,j))?(J||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=j,c=R):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,um(r,s),R=s.memoizedProps,j=s.type===s.elementType?R:Un(s.type,R),v.props=j,J=s.pendingProps,Q=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=Tn(P):(P=Jt(a)?Ji:bt.current,P=ro(s,P));var se=a.getDerivedStateFromProps;(X=typeof se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(R!==J||Q!==P)&&bm(s,v,c,P),si=!1,Q=s.memoizedState,v.state=Q,au(s,c,v,d);var ue=s.memoizedState;R!==J||Q!==ue||Yt.current||si?(typeof se=="function"&&($h(s,a,se,c),ue=s.memoizedState),(j=si||Lm(s,a,j,c,Q,ue,P)||!1)?(X||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),v.props=c,v.state=ue,v.context=P,c=j):(typeof v.componentDidUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),c=!1)}return Gh(r,s,a,c,g,d)}function Gh(r,s,a,c,d,g){qm(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&Jp(s,a,!1),kr(r,s,g);c=s.stateNode,LE.current=s;var R=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=ao(s,r.child,null,g),s.child=ao(s,null,R,g)):qt(r,s,R,g),s.memoizedState=c.state,d&&Jp(s,a,!0),s.child}function Gm(r){var s=r.stateNode;s.pendingContext?Xp(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Xp(r,s.context,!1),xh(r,s.containerInfo)}function Qm(r,s,a,c,d){return oo(),Sh(d),s.flags|=256,qt(r,s,a,c),s.child}var Qh={dehydrated:null,treeContext:null,retryLane:0};function Xh(r){return{baseLanes:r,cachePool:null,transitions:null}}function Xm(r,s,a){var c=s.pendingProps,d=Je.current,g=!1,v=(s.flags&128)!==0,R;if((R=v)||(R=r!==null&&r.memoizedState===null?!1:(d&2)!==0),R?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),We(Je,d&1),r===null)return Ih(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(v=c.children,r=c.fallback,g?(c=s.mode,g=s.child,v={mode:"hidden",children:v},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=Pu(v,c,0,null),r=ls(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Xh(a),s.memoizedState=Qh,r):Yh(s,v));if(d=r.memoizedState,d!==null&&(R=d.dehydrated,R!==null))return VE(r,s,v,c,R,d,a);if(g){g=c.fallback,v=s.mode,d=r.child,R=d.sibling;var P={mode:"hidden",children:c.children};return!(v&1)&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=di(d,P),c.subtreeFlags=d.subtreeFlags&14680064),R!==null?g=di(R,g):(g=ls(g,v,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,v=r.child.memoizedState,v=v===null?Xh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=Qh,c}return g=r.child,r=g.sibling,c=di(g,{mode:"visible",children:c.children}),!(s.mode&1)&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function Yh(r,s){return s=Pu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function mu(r,s,a,c){return c!==null&&Sh(c),ao(s,r.child,null,a),r=Yh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function VE(r,s,a,c,d,g,v){if(a)return s.flags&256?(s.flags&=-257,c=Wh(Error(t(422))),mu(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,d=s.mode,c=Pu({mode:"visible",children:c.children},d,0,null),g=ls(g,d,v,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,s.mode&1&&ao(s,r.child,null,v),s.child.memoizedState=Xh(v),s.memoizedState=Qh,g);if(!(s.mode&1))return mu(r,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var R=c.dgst;return c=R,g=Error(t(419)),c=Wh(g,c,void 0),mu(r,s,v,c)}if(R=(v&r.childLanes)!==0,Zt||R){if(c=It,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Cr(r,d),jn(c,r,d,-1))}return fd(),c=Wh(Error(t(421))),mu(r,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=GE.bind(null,r),d._reactRetry=s,null):(r=g.treeContext,hn=ti(d.nextSibling),cn=s,Qe=!0,Mn=null,r!==null&&(En[wn++]=Rr,En[wn++]=Ar,En[wn++]=Zi,Rr=r.id,Ar=r.overflow,Zi=s),s=Yh(s,c.children),s.flags|=4096,s)}function Ym(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Ph(r.return,s,a)}function Jh(r,s,a,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Jm(r,s,a){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(qt(r,s,c.children,a),c=Je.current,c&2)c=c&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Ym(r,a,s);else if(r.tag===19)Ym(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(We(Je,c),!(s.mode&1))s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&lu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Jh(s,!1,d,a,g);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&lu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Jh(s,!0,a,null,g);break;case"together":Jh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function gu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function kr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),is|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=di(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=di(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function bE(r,s,a){switch(s.tag){case 3:Gm(s),oo();break;case 5:dm(s);break;case 1:Jt(s.type)&&Jl(s);break;case 4:xh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;We(iu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(We(Je,Je.current&1),s.flags|=128,null):a&s.child.childLanes?Xm(r,s,a):(We(Je,Je.current&1),r=kr(r,s,a),r!==null?r.sibling:null);We(Je,Je.current&1);break;case 19:if(c=(a&s.childLanes)!==0,r.flags&128){if(c)return Jm(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Je,Je.current),c)break;return null;case 22:case 23:return s.lanes=0,Wm(r,s,a)}return kr(r,s,a)}var Zm,Zh,eg,tg;Zm=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Zh=function(){},eg=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,ns(nr.current);var g=null;switch(a){case"input":d=Vi(r,d),c=Vi(r,c),g=[];break;case"select":d=oe({},d,{value:void 0}),c=oe({},c,{value:void 0}),g=[];break;case"textarea":d=Ho(r,d),c=Ho(r,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=Ql)}Xo(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var R=d[j];for(v in R)R.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?g||(g=[]):(g=g||[]).push(j,null));for(j in c){var P=c[j];if(R=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&P!==R&&(P!=null||R!=null))if(j==="style")if(R){for(v in R)!R.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&R[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(g||(g=[]),g.push(j,a)),a=P;else j==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,R=R?R.__html:void 0,P!=null&&R!==P&&(g=g||[]).push(j,P)):j==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(j,""+P):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(P!=null&&j==="onScroll"&&qe("scroll",r),g||R===P||(g=[])):(g=g||[]).push(j,P))}a&&(g=g||[]).push("style",a);var j=g;(s.updateQueue=j)&&(s.flags|=4)}},tg=function(r,s,a,c){a!==c&&(s.flags|=4)};function Na(r,s){if(!Qe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Ut(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function ME(r,s,a){var c=s.pendingProps;switch(wh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(s),null;case 1:return Jt(s.type)&&Yl(),Ut(s),null;case 3:return c=s.stateNode,co(),Ke(Yt),Ke(bt),Lh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(nu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Mn!==null&&(cd(Mn),Mn=null))),Zh(r,s),Ut(s),null;case 5:Dh(s);var d=ns(Ra.current);if(a=s.type,r!==null&&s.stateNode!=null)eg(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Ut(s),null}if(r=ns(nr.current),nu(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[tr]=s,c[Ea]=g,r=(s.mode&1)!==0,a){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(d=0;d<ya.length;d++)qe(ya[d],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":Rs(c,g),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},qe("invalid",c);break;case"textarea":Cs(c,g),qe("invalid",c)}Xo(a,g),d=null;for(var v in g)if(g.hasOwnProperty(v)){var R=g[v];v==="children"?typeof R=="string"?c.textContent!==R&&(g.suppressHydrationWarning!==!0&&Gl(c.textContent,R,r),d=["children",R]):typeof R=="number"&&c.textContent!==""+R&&(g.suppressHydrationWarning!==!0&&Gl(c.textContent,R,r),d=["children",""+R]):o.hasOwnProperty(v)&&R!=null&&v==="onScroll"&&qe("scroll",c)}switch(a){case"input":fr(c),El(c,g,!0);break;case"textarea":fr(c),Wo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Ql)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=dt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[tr]=s,r[Ea]=c,Zm(r,s,!1,!1),s.stateNode=r;e:{switch(v=Yo(a,c),a){case"dialog":qe("cancel",r),qe("close",r),d=c;break;case"iframe":case"object":case"embed":qe("load",r),d=c;break;case"video":case"audio":for(d=0;d<ya.length;d++)qe(ya[d],r);d=c;break;case"source":qe("error",r),d=c;break;case"img":case"image":case"link":qe("error",r),qe("load",r),d=c;break;case"details":qe("toggle",r),d=c;break;case"input":Rs(r,c),d=Vi(r,c),qe("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=oe({},c,{value:void 0}),qe("invalid",r);break;case"textarea":Cs(r,c),d=Ho(r,c),qe("invalid",r);break;default:d=c}Xo(a,d),R=d;for(g in R)if(R.hasOwnProperty(g)){var P=R[g];g==="style"?Go(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&qo(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Hr(r,P):typeof P=="number"&&Hr(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&qe("scroll",r):P!=null&&ee(r,g,P,v))}switch(a){case"input":fr(r),El(r,c,!1);break;case"textarea":fr(r),Wo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Ue(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?mr(r,!!c.multiple,g,!1):c.defaultValue!=null&&mr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=Ql)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ut(s),null;case 6:if(r&&s.stateNode!=null)tg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=ns(Ra.current),ns(nr.current),nu(s)){if(c=s.stateNode,a=s.memoizedProps,c[tr]=s,(g=c.nodeValue!==a)&&(r=cn,r!==null))switch(r.tag){case 3:Gl(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Gl(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[tr]=s,s.stateNode=c}return Ut(s),null;case 13:if(Ke(Je),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Qe&&hn!==null&&s.mode&1&&!(s.flags&128))im(),oo(),s.flags|=98560,g=!1;else if(g=nu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[tr]=s}else oo(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Ut(s),g=!1}else Mn!==null&&(cd(Mn),Mn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,s.mode&1&&(r===null||Je.current&1?gt===0&&(gt=3):fd())),s.updateQueue!==null&&(s.flags|=4),Ut(s),null);case 4:return co(),Zh(r,s),r===null&&_a(s.stateNode.containerInfo),Ut(s),null;case 10:return Ch(s.type._context),Ut(s),null;case 17:return Jt(s.type)&&Yl(),Ut(s),null;case 19:if(Ke(Je),g=s.memoizedState,g===null)return Ut(s),null;if(c=(s.flags&128)!==0,v=g.rendering,v===null)if(c)Na(g,!1);else{if(gt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(v=lu(r),v!==null){for(s.flags|=128,Na(g,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Je,Je.current&1|2),s.child}r=r.sibling}g.tail!==null&&He()>mo&&(s.flags|=128,c=!0,Na(g,!1),s.lanes=4194304)}else{if(!c)if(r=lu(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Na(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Qe)return Ut(s),null}else 2*He()-g.renderingStartTime>mo&&a!==1073741824&&(s.flags|=128,c=!0,Na(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=He(),s.sibling=null,a=Je.current,We(Je,c?a&1|2:a&1),s):(Ut(s),null);case 22:case 23:return dd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&s.mode&1?dn&1073741824&&(Ut(s),s.subtreeFlags&6&&(s.flags|=8192)):Ut(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function UE(r,s){switch(wh(s),s.tag){case 1:return Jt(s.type)&&Yl(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return co(),Ke(Yt),Ke(bt),Lh(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Dh(s),null;case 13:if(Ke(Je),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));oo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ke(Je),null;case 4:return co(),null;case 10:return Ch(s.type._context),null;case 22:case 23:return dd(),null;case 24:return null;default:return null}}var yu=!1,Ft=!1,FE=typeof WeakSet=="function"?WeakSet:Set,le=null;function fo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(r,s,c)}else a.current=null}function ed(r,s,a){try{a()}catch(c){nt(r,s,c)}}var ng=!1;function BE(r,s){if(dh=Jr,r=Lp(),ih(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,R=-1,P=-1,j=0,X=0,J=r,Q=null;t:for(;;){for(var se;J!==a||d!==0&&J.nodeType!==3||(R=v+d),J!==g||c!==0&&J.nodeType!==3||(P=v+c),J.nodeType===3&&(v+=J.nodeValue.length),(se=J.firstChild)!==null;)Q=J,J=se;for(;;){if(J===r)break t;if(Q===a&&++j===d&&(R=v),Q===g&&++X===c&&(P=v),(se=J.nextSibling)!==null)break;J=Q,Q=J.parentNode}J=se}a=R===-1||P===-1?null:{start:R,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(fh={focusedElem:r,selectionRange:a},Jr=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ue=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,at=ue.memoizedState,F=s.stateNode,x=F.getSnapshotBeforeUpdate(s.elementType===s.type?ce:Un(s.type,ce),at);F.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){nt(s,s.return,Z)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ue=ng,ng=!1,ue}function xa(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&ed(s,a,g)}d=d.next}while(d!==c)}}function _u(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function td(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function rg(r){var s=r.alternate;s!==null&&(r.alternate=null,rg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[tr],delete s[Ea],delete s[yh],delete s[TE],delete s[IE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function ig(r){return r.tag===5||r.tag===3||r.tag===4}function sg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||ig(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function nd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Ql));else if(c!==4&&(r=r.child,r!==null))for(nd(r,s,a),r=r.sibling;r!==null;)nd(r,s,a),r=r.sibling}function rd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(rd(r,s,a),r=r.sibling;r!==null;)rd(r,s,a),r=r.sibling}var Pt=null,Fn=!1;function ai(r,s,a){for(a=a.child;a!==null;)og(r,s,a),a=a.sibling}function og(r,s,a){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Hi,a)}catch{}switch(a.tag){case 5:Ft||fo(a,s);case 6:var c=Pt,d=Fn;Pt=null,ai(r,s,a),Pt=c,Fn=d,Pt!==null&&(Fn?(r=Pt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Fn?(r=Pt,a=a.stateNode,r.nodeType===8?gh(r.parentNode,a):r.nodeType===1&&gh(r,a),Ln(r)):gh(Pt,a.stateNode));break;case 4:c=Pt,d=Fn,Pt=a.stateNode.containerInfo,Fn=!0,ai(r,s,a),Pt=c,Fn=d;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&ed(a,s,v),d=d.next}while(d!==c)}ai(r,s,a);break;case 1:if(!Ft&&(fo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(R){nt(a,s,R)}ai(r,s,a);break;case 21:ai(r,s,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,ai(r,s,a),Ft=c):ai(r,s,a);break;default:ai(r,s,a)}}function ag(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new FE),s.forEach(function(c){var d=QE.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Bn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=r,v=s,R=v;e:for(;R!==null;){switch(R.tag){case 5:Pt=R.stateNode,Fn=!1;break e;case 3:Pt=R.stateNode.containerInfo,Fn=!0;break e;case 4:Pt=R.stateNode.containerInfo,Fn=!0;break e}R=R.return}if(Pt===null)throw Error(t(160));og(g,v,d),Pt=null,Fn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(j){nt(d,s,j)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)lg(s,r),s=s.sibling}function lg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Bn(s,r),ir(r),c&4){try{xa(3,r,r.return),_u(3,r)}catch(ce){nt(r,r.return,ce)}try{xa(5,r,r.return)}catch(ce){nt(r,r.return,ce)}}break;case 1:Bn(s,r),ir(r),c&512&&a!==null&&fo(a,a.return);break;case 5:if(Bn(s,r),ir(r),c&512&&a!==null&&fo(a,a.return),r.flags&32){var d=r.stateNode;try{Hr(d,"")}catch(ce){nt(r,r.return,ce)}}if(c&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,R=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{R==="input"&&g.type==="radio"&&g.name!=null&&zo(d,g),Yo(R,v);var j=Yo(R,g);for(v=0;v<P.length;v+=2){var X=P[v],J=P[v+1];X==="style"?Go(d,J):X==="dangerouslySetInnerHTML"?qo(d,J):X==="children"?Hr(d,J):ee(d,X,J,j)}switch(R){case"input":$o(d,g);break;case"textarea":Ps(d,g);break;case"select":var Q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?mr(d,!!g.multiple,se,!1):Q!==!!g.multiple&&(g.defaultValue!=null?mr(d,!!g.multiple,g.defaultValue,!0):mr(d,!!g.multiple,g.multiple?[]:"",!1))}d[Ea]=g}catch(ce){nt(r,r.return,ce)}}break;case 6:if(Bn(s,r),ir(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(ce){nt(r,r.return,ce)}}break;case 3:if(Bn(s,r),ir(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ln(s.containerInfo)}catch(ce){nt(r,r.return,ce)}break;case 4:Bn(s,r),ir(r);break;case 13:Bn(s,r),ir(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(od=He())),c&4&&ag(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(Ft=(j=Ft)||X,Bn(s,r),Ft=j):Bn(s,r),ir(r),c&8192){if(j=r.memoizedState!==null,(r.stateNode.isHidden=j)&&!X&&r.mode&1)for(le=r,X=r.child;X!==null;){for(J=le=X;le!==null;){switch(Q=le,se=Q.child,Q.tag){case 0:case 11:case 14:case 15:xa(4,Q,Q.return);break;case 1:fo(Q,Q.return);var ue=Q.stateNode;if(typeof ue.componentWillUnmount=="function"){c=Q,a=Q.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){nt(c,a,ce)}}break;case 5:fo(Q,Q.return);break;case 22:if(Q.memoizedState!==null){hg(J);continue}}se!==null?(se.return=Q,le=se):hg(J)}X=X.sibling}e:for(X=null,J=r;;){if(J.tag===5){if(X===null){X=J;try{d=J.stateNode,j?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(R=J.stateNode,P=J.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,R.style.display=Ko("display",v))}catch(ce){nt(r,r.return,ce)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=j?"":J.memoizedProps}catch(ce){nt(r,r.return,ce)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Bn(s,r),ir(r),c&4&&ag(r);break;case 21:break;default:Bn(s,r),ir(r)}}function ir(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(ig(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Hr(d,""),c.flags&=-33);var g=sg(r);rd(r,g,d);break;case 3:case 4:var v=c.stateNode.containerInfo,R=sg(r);nd(r,R,v);break;default:throw Error(t(161))}}catch(P){nt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function jE(r,s,a){le=r,ug(r)}function ug(r,s,a){for(var c=(r.mode&1)!==0;le!==null;){var d=le,g=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||yu;if(!v){var R=d.alternate,P=R!==null&&R.memoizedState!==null||Ft;R=yu;var j=Ft;if(yu=v,(Ft=P)&&!j)for(le=d;le!==null;)v=le,P=v.child,v.tag===22&&v.memoizedState!==null?dg(d):P!==null?(P.return=v,le=P):dg(d);for(;g!==null;)le=g,ug(g),g=g.sibling;le=d,yu=R,Ft=j}cg(r)}else d.subtreeFlags&8772&&g!==null?(g.return=d,le=g):cg(r)}}function cg(r){for(;le!==null;){var s=le;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Ft||_u(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Un(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&hm(s,g,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}hm(s,v,a)}break;case 5:var R=s.stateNode;if(a===null&&s.flags&4){a=R;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var j=s.alternate;if(j!==null){var X=j.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&Ln(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||s.flags&512&&td(s)}catch(Q){nt(s,s.return,Q)}}if(s===r){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function hg(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function dg(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{_u(4,s)}catch(P){nt(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){nt(s,d,P)}}var g=s.return;try{td(s)}catch(P){nt(s,g,P)}break;case 5:var v=s.return;try{td(s)}catch(P){nt(s,v,P)}}}catch(P){nt(s,s.return,P)}if(s===r){le=null;break}var R=s.sibling;if(R!==null){R.return=s.return,le=R;break}le=s.return}}var zE=Math.ceil,vu=re.ReactCurrentDispatcher,id=re.ReactCurrentOwner,Sn=re.ReactCurrentBatchConfig,Ve=0,It=null,ct=null,kt=0,dn=0,po=ni(0),gt=0,Da=null,is=0,Eu=0,sd=0,Oa=null,en=null,od=0,mo=1/0,Nr=null,wu=!1,ad=null,li=null,Tu=!1,ui=null,Iu=0,La=0,ld=null,Su=-1,Ru=0;function Kt(){return Ve&6?He():Su!==-1?Su:Su=He()}function ci(r){return r.mode&1?Ve&2&&kt!==0?kt&-kt:RE.transition!==null?(Ru===0&&(Ru=qi()),Ru):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:la(r.type)),r):1}function jn(r,s,a,c){if(50<La)throw La=0,ld=null,Error(t(185));Gr(r,a,c),(!(Ve&2)||r!==It)&&(r===It&&(!(Ve&2)&&(Eu|=a),gt===4&&hi(r,kt)),tn(r,c),a===1&&Ve===0&&!(s.mode&1)&&(mo=He()+500,Zl&&ii()))}function tn(r,s){var a=r.callbackNode;_r(r,s);var c=Wi(r,r===It?kt:0);if(c===0)a!==null&&ra(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&ra(a),s===1)r.tag===0?SE(pg.bind(null,r)):Zp(pg.bind(null,r)),EE(function(){!(Ve&6)&&ii()}),a=null;else{switch(Xr(c)){case 1:a=$i;break;case 4:a=Wr;break;case 16:a=yn;break;case 536870912:a=Rl;break;default:a=yn}a=Tg(a,fg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function fg(r,s){if(Su=-1,Ru=0,Ve&6)throw Error(t(327));var a=r.callbackNode;if(go()&&r.callbackNode!==a)return null;var c=Wi(r,r===It?kt:0);if(c===0)return null;if(c&30||c&r.expiredLanes||s)s=Au(r,c);else{s=c;var d=Ve;Ve|=2;var g=gg();(It!==r||kt!==s)&&(Nr=null,mo=He()+500,os(r,s));do try{WE();break}catch(R){mg(r,R)}while(!0);Ah(),vu.current=g,Ve=d,ct!==null?s=0:(It=null,kt=0,s=gt)}if(s!==0){if(s===2&&(d=an(r),d!==0&&(c=d,s=ud(r,d))),s===1)throw a=Da,os(r,0),hi(r,c),tn(r,He()),a;if(s===6)hi(r,c);else{if(d=r.current.alternate,!(c&30)&&!$E(d)&&(s=Au(r,c),s===2&&(g=an(r),g!==0&&(c=g,s=ud(r,g))),s===1))throw a=Da,os(r,0),hi(r,c),tn(r,He()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:as(r,en,Nr);break;case 3:if(hi(r,c),(c&130023424)===c&&(s=od+500-He(),10<s)){if(Wi(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Kt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=mh(as.bind(null,r,en,Nr),s);break}as(r,en,Nr);break;case 4:if(hi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var v=31-Ht(c);g=1<<v,v=s[v],v>d&&(d=v),c&=~g}if(c=d,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*zE(c/1960))-c,10<c){r.timeoutHandle=mh(as.bind(null,r,en,Nr),c);break}as(r,en,Nr);break;case 5:as(r,en,Nr);break;default:throw Error(t(329))}}}return tn(r,He()),r.callbackNode===a?fg.bind(null,r):null}function ud(r,s){var a=Oa;return r.current.memoizedState.isDehydrated&&(os(r,s).flags|=256),r=Au(r,s),r!==2&&(s=en,en=a,s!==null&&cd(s)),r}function cd(r){en===null?en=r:en.push.apply(en,r)}function $E(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!bn(g(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function hi(r,s){for(s&=~sd,s&=~Eu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Ht(s),c=1<<a;r[a]=-1,s&=~c}}function pg(r){if(Ve&6)throw Error(t(327));go();var s=Wi(r,0);if(!(s&1))return tn(r,He()),null;var a=Au(r,s);if(r.tag!==0&&a===2){var c=an(r);c!==0&&(s=c,a=ud(r,c))}if(a===1)throw a=Da,os(r,0),hi(r,s),tn(r,He()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,as(r,en,Nr),tn(r,He()),null}function hd(r,s){var a=Ve;Ve|=1;try{return r(s)}finally{Ve=a,Ve===0&&(mo=He()+500,Zl&&ii())}}function ss(r){ui!==null&&ui.tag===0&&!(Ve&6)&&go();var s=Ve;Ve|=1;var a=Sn.transition,c=Ne;try{if(Sn.transition=null,Ne=1,r)return r()}finally{Ne=c,Sn.transition=a,Ve=s,!(Ve&6)&&ii()}}function dd(){dn=po.current,Ke(po)}function os(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,vE(a)),ct!==null)for(a=ct.return;a!==null;){var c=a;switch(wh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Yl();break;case 3:co(),Ke(Yt),Ke(bt),Lh();break;case 5:Dh(c);break;case 4:co();break;case 13:Ke(Je);break;case 19:Ke(Je);break;case 10:Ch(c.type._context);break;case 22:case 23:dd()}a=a.return}if(It=r,ct=r=di(r.current,null),kt=dn=s,gt=0,Da=null,sd=Eu=is=0,en=Oa=null,ts!==null){for(s=0;s<ts.length;s++)if(a=ts[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=d,c.next=v}a.pending=c}ts=null}return r}function mg(r,s){do{var a=ct;try{if(Ah(),uu.current=fu,cu){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}cu=!1}if(rs=0,Tt=mt=Ze=null,Aa=!1,Ca=0,id.current=null,a===null||a.return===null){gt=1,Da=s,ct=null;break}e:{var g=r,v=a.return,R=a,P=s;if(s=kt,R.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var j=P,X=R,J=X.tag;if(!(X.mode&1)&&(J===0||J===11||J===15)){var Q=X.alternate;Q?(X.updateQueue=Q.updateQueue,X.memoizedState=Q.memoizedState,X.lanes=Q.lanes):(X.updateQueue=null,X.memoizedState=null)}var se=Bm(v);if(se!==null){se.flags&=-257,jm(se,v,R,g,s),se.mode&1&&Fm(g,j,s),s=se,P=j;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(P),s.updateQueue=ce}else ue.add(P);break e}else{if(!(s&1)){Fm(g,j,s),fd();break e}P=Error(t(426))}}else if(Qe&&R.mode&1){var at=Bm(v);if(at!==null){!(at.flags&65536)&&(at.flags|=256),jm(at,v,R,g,s),Sh(ho(P,R));break e}}g=P=ho(P,R),gt!==4&&(gt=2),Oa===null?Oa=[g]:Oa.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=Mm(g,P,s);cm(g,F);break e;case 1:R=P;var x=g.type,B=g.stateNode;if(!(g.flags&128)&&(typeof x.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(li===null||!li.has(B)))){g.flags|=65536,s&=-s,g.lanes|=s;var Z=Um(g,R,s);cm(g,Z);break e}}g=g.return}while(g!==null)}_g(a)}catch(he){s=he,ct===a&&a!==null&&(ct=a=a.return);continue}break}while(!0)}function gg(){var r=vu.current;return vu.current=fu,r===null?fu:r}function fd(){(gt===0||gt===3||gt===2)&&(gt=4),It===null||!(is&268435455)&&!(Eu&268435455)||hi(It,kt)}function Au(r,s){var a=Ve;Ve|=2;var c=gg();(It!==r||kt!==s)&&(Nr=null,os(r,s));do try{HE();break}catch(d){mg(r,d)}while(!0);if(Ah(),Ve=a,vu.current=c,ct!==null)throw Error(t(261));return It=null,kt=0,gt}function HE(){for(;ct!==null;)yg(ct)}function WE(){for(;ct!==null&&!Il();)yg(ct)}function yg(r){var s=wg(r.alternate,r,dn);r.memoizedProps=r.pendingProps,s===null?_g(r):ct=s,id.current=null}function _g(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=UE(a,s),a!==null){a.flags&=32767,ct=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{gt=6,ct=null;return}}else if(a=ME(a,s,dn),a!==null){ct=a;return}if(s=s.sibling,s!==null){ct=s;return}ct=s=r}while(s!==null);gt===0&&(gt=5)}function as(r,s,a){var c=Ne,d=Sn.transition;try{Sn.transition=null,Ne=1,qE(r,s,a,c)}finally{Sn.transition=d,Ne=c}return null}function qE(r,s,a,c){do go();while(ui!==null);if(Ve&6)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(ze(r,g),r===It&&(ct=It=null,kt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Tu||(Tu=!0,Tg(yn,function(){return go(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=Sn.transition,Sn.transition=null;var v=Ne;Ne=1;var R=Ve;Ve|=4,id.current=null,BE(r,a),lg(a,r),dE(fh),Jr=!!dh,fh=dh=null,r.current=a,jE(a),Xc(),Ve=R,Ne=v,Sn.transition=g}else r.current=a;if(Tu&&(Tu=!1,ui=r,Iu=d),g=r.pendingLanes,g===0&&(li=null),Al(a.stateNode),tn(r,He()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(wu)throw wu=!1,r=ad,ad=null,r;return Iu&1&&r.tag!==0&&go(),g=r.pendingLanes,g&1?r===ld?La++:(La=0,ld=r):La=0,ii(),null}function go(){if(ui!==null){var r=Xr(Iu),s=Sn.transition,a=Ne;try{if(Sn.transition=null,Ne=16>r?16:r,ui===null)var c=!1;else{if(r=ui,ui=null,Iu=0,Ve&6)throw Error(t(331));var d=Ve;for(Ve|=4,le=r.current;le!==null;){var g=le,v=g.child;if(le.flags&16){var R=g.deletions;if(R!==null){for(var P=0;P<R.length;P++){var j=R[P];for(le=j;le!==null;){var X=le;switch(X.tag){case 0:case 11:case 15:xa(8,X,g)}var J=X.child;if(J!==null)J.return=X,le=J;else for(;le!==null;){X=le;var Q=X.sibling,se=X.return;if(rg(X),X===j){le=null;break}if(Q!==null){Q.return=se,le=Q;break}le=se}}}var ue=g.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var at=ce.sibling;ce.sibling=null,ce=at}while(ce!==null)}}le=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,le=v;else e:for(;le!==null;){if(g=le,g.flags&2048)switch(g.tag){case 0:case 11:case 15:xa(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,le=F;break e}le=g.return}}var x=r.current;for(le=x;le!==null;){v=le;var B=v.child;if(v.subtreeFlags&2064&&B!==null)B.return=v,le=B;else e:for(v=x;le!==null;){if(R=le,R.flags&2048)try{switch(R.tag){case 0:case 11:case 15:_u(9,R)}}catch(he){nt(R,R.return,he)}if(R===v){le=null;break e}var Z=R.sibling;if(Z!==null){Z.return=R.return,le=Z;break e}le=R.return}}if(Ve=d,ii(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Hi,r)}catch{}c=!0}return c}finally{Ne=a,Sn.transition=s}}return!1}function vg(r,s,a){s=ho(a,s),s=Mm(r,s,1),r=oi(r,s,1),s=Kt(),r!==null&&(Gr(r,1,s),tn(r,s))}function nt(r,s,a){if(r.tag===3)vg(r,r,a);else for(;s!==null;){if(s.tag===3){vg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(li===null||!li.has(c))){r=ho(a,r),r=Um(s,r,1),s=oi(s,r,1),r=Kt(),s!==null&&(Gr(s,1,r),tn(s,r));break}}s=s.return}}function KE(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Kt(),r.pingedLanes|=r.suspendedLanes&a,It===r&&(kt&a)===a&&(gt===4||gt===3&&(kt&130023424)===kt&&500>He()-od?os(r,0):sd|=a),tn(r,s)}function Eg(r,s){s===0&&(r.mode&1?(s=Us,Us<<=1,!(Us&130023424)&&(Us=4194304)):s=1);var a=Kt();r=Cr(r,s),r!==null&&(Gr(r,s,a),tn(r,a))}function GE(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Eg(r,a)}function QE(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Eg(r,a)}var wg;wg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Yt.current)Zt=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return Zt=!1,bE(r,s,a);Zt=!!(r.flags&131072)}else Zt=!1,Qe&&s.flags&1048576&&em(s,tu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;gu(r,s),r=s.pendingProps;var d=ro(s,bt.current);uo(s,a),d=Mh(null,s,c,r,d,a);var g=Uh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Jt(c)?(g=!0,Jl(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Nh(s),d.updater=pu,s.stateNode=d,d._reactInternals=s,Hh(s,c,r,a),s=Gh(null,s,c,!0,g,a)):(s.tag=0,Qe&&g&&Eh(s),qt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(gu(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=YE(c),r=Un(c,r),d){case 0:s=Kh(null,s,c,r,a);break e;case 1:s=Km(null,s,c,r,a);break e;case 11:s=zm(null,s,c,r,a);break e;case 14:s=$m(null,s,c,Un(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),Kh(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),Km(r,s,c,d,a);case 3:e:{if(Gm(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,d=g.element,um(r,s),au(s,c,null,a);var v=s.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=ho(Error(t(423)),s),s=Qm(r,s,c,a,d);break e}else if(c!==d){d=ho(Error(t(424)),s),s=Qm(r,s,c,a,d);break e}else for(hn=ti(s.stateNode.containerInfo.firstChild),cn=s,Qe=!0,Mn=null,a=am(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(oo(),c===d){s=kr(r,s,a);break e}qt(r,s,c,a)}s=s.child}return s;case 5:return dm(s),r===null&&Ih(s),c=s.type,d=s.pendingProps,g=r!==null?r.memoizedProps:null,v=d.children,ph(c,d)?v=null:g!==null&&ph(c,g)&&(s.flags|=32),qm(r,s),qt(r,s,v,a),s.child;case 6:return r===null&&Ih(s),null;case 13:return Xm(r,s,a);case 4:return xh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=ao(s,null,c,a):qt(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),zm(r,s,c,d,a);case 7:return qt(r,s,s.pendingProps,a),s.child;case 8:return qt(r,s,s.pendingProps.children,a),s.child;case 12:return qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,g=s.memoizedProps,v=d.value,We(iu,c._currentValue),c._currentValue=v,g!==null)if(bn(g.value,v)){if(g.children===d.children&&!Yt.current){s=kr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var R=g.dependencies;if(R!==null){v=g.child;for(var P=R.firstContext;P!==null;){if(P.context===c){if(g.tag===1){P=Pr(-1,a&-a),P.tag=2;var j=g.updateQueue;if(j!==null){j=j.shared;var X=j.pending;X===null?P.next=P:(P.next=X.next,X.next=P),j.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),Ph(g.return,a,s),R.lanes|=a;break}P=P.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,R=v.alternate,R!==null&&(R.lanes|=a),Ph(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}qt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,uo(s,a),d=Tn(d),c=c(d),s.flags|=1,qt(r,s,c,a),s.child;case 14:return c=s.type,d=Un(c,s.pendingProps),d=Un(c.type,d),$m(r,s,c,d,a);case 15:return Hm(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Un(c,d),gu(r,s),s.tag=1,Jt(c)?(r=!0,Jl(s)):r=!1,uo(s,a),Vm(s,c,d),Hh(s,c,d,a),Gh(null,s,c,!0,r,a);case 19:return Jm(r,s,a);case 22:return Wm(r,s,a)}throw Error(t(156,s.tag))};function Tg(r,s){return bs(r,s)}function XE(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(r,s,a,c){return new XE(r,s,a,c)}function pd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function YE(r){if(typeof r=="function")return pd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===Lt)return 14}return 2}function di(r,s){var a=r.alternate;return a===null?(a=Rn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Cu(r,s,a,c,d,g){var v=2;if(c=r,typeof r=="function")pd(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case N:return ls(a.children,d,g,s);case S:v=8,d|=8;break;case A:return r=Rn(12,a,s,d|2),r.elementType=A,r.lanes=g,r;case C:return r=Rn(13,a,s,d),r.elementType=C,r.lanes=g,r;case st:return r=Rn(19,a,s,d),r.elementType=st,r.lanes=g,r;case je:return Pu(a,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:v=10;break e;case O:v=9;break e;case M:v=11;break e;case Lt:v=14;break e;case Vt:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Rn(v,a,s,d),s.elementType=r,s.type=c,s.lanes=g,s}function ls(r,s,a,c){return r=Rn(7,r,c,s),r.lanes=a,r}function Pu(r,s,a,c){return r=Rn(22,r,c,s),r.elementType=je,r.lanes=a,r.stateNode={isHidden:!1},r}function md(r,s,a){return r=Rn(6,r,null,s),r.lanes=a,r}function gd(r,s,a){return s=Rn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function JE(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kr(0),this.expirationTimes=Kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function yd(r,s,a,c,d,g,v,R,P){return r=new JE(r,s,a,R,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Rn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nh(g),r}function ZE(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function Ig(r){if(!r)return ri;r=r._reactInternals;e:{if(kn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Jt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Jt(a))return Yp(r,a,s)}return s}function Sg(r,s,a,c,d,g,v,R,P){return r=yd(a,c,!0,r,d,g,v,R,P),r.context=Ig(null),a=r.current,c=Kt(),d=ci(a),g=Pr(c,d),g.callback=s??null,oi(a,g,d),r.current.lanes=d,Gr(r,d,c),tn(r,c),r}function ku(r,s,a,c){var d=s.current,g=Kt(),v=ci(d);return a=Ig(a),s.context===null?s.context=a:s.pendingContext=a,s=Pr(g,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=oi(d,s,v),r!==null&&(jn(r,d,v,g),ou(r,d,v)),v}function Nu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Rg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function _d(r,s){Rg(r,s),(r=r.alternate)&&Rg(r,s)}function ew(){return null}var Ag=typeof reportError=="function"?reportError:function(r){console.error(r)};function vd(r){this._internalRoot=r}xu.prototype.render=vd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));ku(r,s,null,null)},xu.prototype.unmount=vd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ss(function(){ku(null,r,null,null)}),s[Ir]=null}};function xu(r){this._internalRoot=r}xu.prototype.unstable_scheduleHydration=function(r){if(r){var s=xl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Yn.length&&s!==0&&s<Yn[a].priority;a++);Yn.splice(a,0,r),a===0&&Ll(r)}};function Ed(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Du(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Cg(){}function tw(r,s,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var j=Nu(v);g.call(j)}}var v=Sg(s,c,r,0,null,!1,!1,"",Cg);return r._reactRootContainer=v,r[Ir]=v.current,_a(r.nodeType===8?r.parentNode:r),ss(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var R=c;c=function(){var j=Nu(P);R.call(j)}}var P=yd(r,0,!1,null,null,!1,!1,"",Cg);return r._reactRootContainer=P,r[Ir]=P.current,_a(r.nodeType===8?r.parentNode:r),ss(function(){ku(s,P,a,c)}),P}function Ou(r,s,a,c,d){var g=a._reactRootContainer;if(g){var v=g;if(typeof d=="function"){var R=d;d=function(){var P=Nu(v);R.call(P)}}ku(s,v,r,d)}else v=tw(a,s,r,d,c);return Nu(v)}kl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=qr(s.pendingLanes);a!==0&&(Qr(s,a|1),tn(s,He()),!(Ve&6)&&(mo=He()+500,ii()))}break;case 13:ss(function(){var c=Cr(r,1);if(c!==null){var d=Kt();jn(c,r,1,d)}}),_d(r,1)}},Fs=function(r){if(r.tag===13){var s=Cr(r,134217728);if(s!==null){var a=Kt();jn(s,r,134217728,a)}_d(r,134217728)}},Nl=function(r){if(r.tag===13){var s=ci(r),a=Cr(r,s);if(a!==null){var c=Kt();jn(a,r,s,c)}_d(r,s)}},xl=function(){return Ne},Dl=function(r,s){var a=Ne;try{return Ne=r,s()}finally{Ne=a}},Ns=function(r,s,a){switch(s){case"input":if($o(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=Xl(c);if(!d)throw Error(t(90));Ss(c),$o(c,d)}}}break;case"textarea":Ps(r,a);break;case"select":s=a.value,s!=null&&mr(r,!!a.multiple,s,!1)}},Fi=hd,Zo=ss;var nw={usingClientEntryPoint:!1,Events:[wa,to,Xl,Qn,Jo,hd]},Va={findFiberByHostInstance:Yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rw={bundleType:Va.bundleType,version:Va.version,rendererPackageName:Va.rendererPackageName,rendererConfig:Va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=na(r),r===null?null:r.stateNode},findFiberByHostInstance:Va.findFiberByHostInstance||ew,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lu.isDisabled&&Lu.supportsFiber)try{Hi=Lu.inject(rw),on=Lu}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nw,nn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(s))throw Error(t(200));return ZE(r,s,null,a)},nn.createRoot=function(r,s){if(!Ed(r))throw Error(t(299));var a=!1,c="",d=Ag;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=yd(r,1,!1,null,null,a,!1,c,d),r[Ir]=s.current,_a(r.nodeType===8?r.parentNode:r),new vd(s)},nn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=na(s),r=r===null?null:r.stateNode,r},nn.flushSync=function(r){return ss(r)},nn.hydrate=function(r,s,a){if(!Du(s))throw Error(t(200));return Ou(null,r,s,!0,a)},nn.hydrateRoot=function(r,s,a){if(!Ed(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",v=Ag;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Sg(s,null,r,1,a??null,d,!1,g,v),r[Ir]=s.current,_a(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new xu(s)},nn.render=function(r,s,a){if(!Du(s))throw Error(t(200));return Ou(null,r,s,!1,a)},nn.unmountComponentAtNode=function(r){if(!Du(r))throw Error(t(40));return r._reactRootContainer?(ss(function(){Ou(null,null,r,!1,function(){r._reactRootContainer=null,r[Ir]=null})}),!0):!1},nn.unstable_batchedUpdates=hd,nn.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Du(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Ou(r,s,a,!1,c)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var Vg;function hw(){if(Vg)return Id.exports;Vg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Id.exports=cw(),Id.exports}var bg;function dw(){if(bg)return Vu;bg=1;var n=hw();return Vu.createRoot=n.createRoot,Vu.hydrateRoot=n.hydrateRoot,Vu}var fw=dw(),Ma={},Mg;function pw(){if(Mg)return Ma;Mg=1,Object.defineProperty(Ma,"__esModule",{value:!0}),Ma.parse=h,Ma.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const I=function(){};return I.prototype=Object.create(null),I})();function h(I,D){const L=new l,z=I.length;if(z<2)return L;const V=(D==null?void 0:D.decode)||E;let W=0;do{const G=I.indexOf("=",W);if(G===-1)break;const ee=I.indexOf(";",W),re=ee===-1?z:ee;if(G>re){W=I.lastIndexOf(";",G-1)+1;continue}const Ie=f(I,W,G),_e=p(I,G,Ie),N=I.slice(Ie,_e);if(L[N]===void 0){let S=f(I,G+1,re),A=p(I,re,S);const k=V(I.slice(S,A));L[N]=k}W=re+1}while(W<z);return L}function f(I,D,L){do{const z=I.charCodeAt(D);if(z!==32&&z!==9)return D}while(++D<L);return L}function p(I,D,L){for(;D>L;){const z=I.charCodeAt(--D);if(z!==32&&z!==9)return D+1}return L}function y(I,D,L){const z=(L==null?void 0:L.encode)||encodeURIComponent;if(!n.test(I))throw new TypeError(`argument name is invalid: ${I}`);const V=z(D);if(!e.test(V))throw new TypeError(`argument val is invalid: ${D}`);let W=I+"="+V;if(!L)return W;if(L.maxAge!==void 0){if(!Number.isInteger(L.maxAge))throw new TypeError(`option maxAge is invalid: ${L.maxAge}`);W+="; Max-Age="+L.maxAge}if(L.domain){if(!t.test(L.domain))throw new TypeError(`option domain is invalid: ${L.domain}`);W+="; Domain="+L.domain}if(L.path){if(!i.test(L.path))throw new TypeError(`option path is invalid: ${L.path}`);W+="; Path="+L.path}if(L.expires){if(!T(L.expires)||!Number.isFinite(L.expires.valueOf()))throw new TypeError(`option expires is invalid: ${L.expires}`);W+="; Expires="+L.expires.toUTCString()}if(L.httpOnly&&(W+="; HttpOnly"),L.secure&&(W+="; Secure"),L.partitioned&&(W+="; Partitioned"),L.priority)switch(typeof L.priority=="string"?L.priority.toLowerCase():void 0){case"low":W+="; Priority=Low";break;case"medium":W+="; Priority=Medium";break;case"high":W+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${L.priority}`)}if(L.sameSite)switch(typeof L.sameSite=="string"?L.sameSite.toLowerCase():L.sameSite){case!0:case"strict":W+="; SameSite=Strict";break;case"lax":W+="; SameSite=Lax";break;case"none":W+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${L.sameSite}`)}return W}function E(I){if(I.indexOf("%")===-1)return I;try{return decodeURIComponent(I)}catch{return I}}function T(I){return o.call(I)==="[object Date]"}return Ma}pw();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ug="popstate";function mw(n={}){function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return zd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:Za(o)}return yw(e,t,null,n)}function Ye(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function qn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gw(){return Math.random().toString(36).substring(2,10)}function Fg(n,e){return{usr:n.state,key:n.key,idx:e}}function zd(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Lo(e):e,state:t,key:e&&e.key||i||gw()}}function Za({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Lo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function yw(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f="POP",p=null,y=E();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function E(){return(h.state||{idx:null}).idx}function T(){f="POP";let V=E(),W=V==null?null:V-y;y=V,p&&p({action:f,location:z.location,delta:W})}function I(V,W){f="PUSH";let G=zd(z.location,V,W);y=E()+1;let ee=Fg(G,y),re=z.createHref(G);try{h.pushState(ee,"",re)}catch(Ie){if(Ie instanceof DOMException&&Ie.name==="DataCloneError")throw Ie;o.location.assign(re)}l&&p&&p({action:f,location:z.location,delta:1})}function D(V,W){f="REPLACE";let G=zd(z.location,V,W);y=E();let ee=Fg(G,y),re=z.createHref(G);h.replaceState(ee,"",re),l&&p&&p({action:f,location:z.location,delta:0})}function L(V){let W=o.location.origin!=="null"?o.location.origin:o.location.href,G=typeof V=="string"?V:Za(V);return G=G.replace(/ $/,"%20"),Ye(W,`No window.location.(origin|href) available to create URL for href: ${G}`),new URL(G,W)}let z={get action(){return f},get location(){return n(o,h)},listen(V){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Ug,T),p=V,()=>{o.removeEventListener(Ug,T),p=null}},createHref(V){return e(o,V)},createURL:L,encodeLocation(V){let W=L(V);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:I,replace:D,go(V){return h.go(V)}};return z}function h_(n,e,t="/"){return _w(n,e,t,!1)}function _w(n,e,t,i){let o=typeof e=="string"?Lo(e):e,l=Ii(o.pathname||"/",t);if(l==null)return null;let h=d_(n);vw(h);let f=null;for(let p=0;f==null&&p<h.length;++p){let y=Nw(l);f=Pw(h[p],y,i)}return f}function d_(n,e=[],t=[],i=""){let o=(l,h,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(Ye(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=br([i,p.relativePath]),E=t.concat(p);l.children&&l.children.length>0&&(Ye(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),d_(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:Aw(y,l.index),routesMeta:E})};return n.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let p of f_(l.path))o(l,h,p)}),e}function f_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=f_(i.join("/")),f=[];return f.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...h),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function vw(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Cw(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var Ew=/^:[\w-]+$/,ww=3,Tw=2,Iw=1,Sw=10,Rw=-2,Bg=n=>n==="*";function Aw(n,e){let t=n.split("/"),i=t.length;return t.some(Bg)&&(i+=Rw),e&&(i+=Tw),t.filter(o=>!Bg(o)).reduce((o,l)=>o+(Ew.test(l)?ww:l===""?Iw:Sw),i)}function Cw(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function Pw(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",h=[];for(let f=0;f<i.length;++f){let p=i[f],y=f===i.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=rc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),I=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=rc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:br([l,T.pathname]),pathnameBase:Lw(br([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=br([l,T.pathnameBase]))}return h}function rc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=kw(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,{paramName:E,isOptional:T},I)=>{if(E==="*"){let L=f[I]||"";h=l.slice(0,l.length-L.length).replace(/(.)\/+$/,"$1")}const D=f[I];return T&&!D?y[E]=void 0:y[E]=(D||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function kw(n,e=!1,t=!0){qn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function Nw(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qn(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ii(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function xw(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Lo(n):n;return{pathname:t?t.startsWith("/")?t:Dw(t,e):e,search:Vw(i),hash:bw(o)}}function Dw(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ad(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ow(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function _f(n){let e=Ow(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function vf(n,e,t,i=!1){let o;typeof n=="string"?o=Lo(n):(o={...n},Ye(!o.pathname||!o.pathname.includes("?"),Ad("?","pathname","search",o)),Ye(!o.pathname||!o.pathname.includes("#"),Ad("#","pathname","hash",o)),Ye(!o.search||!o.search.includes("#"),Ad("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!i&&h.startsWith("..")){let I=h.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}f=T>=0?e[T]:"/"}let p=xw(o,f),y=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var br=n=>n.join("/").replace(/\/\/+/g,"/"),Lw=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Vw=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,bw=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Mw(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var p_=["POST","PUT","PATCH","DELETE"];new Set(p_);var Uw=["GET",...p_];new Set(Uw);var Vo=H.createContext(null);Vo.displayName="DataRouter";var Sc=H.createContext(null);Sc.displayName="DataRouterState";var m_=H.createContext({isTransitioning:!1});m_.displayName="ViewTransition";var Fw=H.createContext(new Map);Fw.displayName="Fetchers";var Bw=H.createContext(null);Bw.displayName="Await";var Kn=H.createContext(null);Kn.displayName="Navigation";var ll=H.createContext(null);ll.displayName="Location";var hr=H.createContext({outlet:null,matches:[],isDataRoute:!1});hr.displayName="Route";var Ef=H.createContext(null);Ef.displayName="RouteError";function jw(n,{relative:e}={}){Ye(bo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=H.useContext(Kn),{hash:o,pathname:l,search:h}=ul(n,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:br([t,l])),i.createHref({pathname:f,search:h,hash:o})}function bo(){return H.useContext(ll)!=null}function Ni(){return Ye(bo(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(ll).location}var g_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function y_(n){H.useContext(Kn).static||H.useLayoutEffect(n)}function __(){let{isDataRoute:n}=H.useContext(hr);return n?eT():zw()}function zw(){Ye(bo(),"useNavigate() may be used only in the context of a <Router> component.");let n=H.useContext(Vo),{basename:e,navigator:t}=H.useContext(Kn),{matches:i}=H.useContext(hr),{pathname:o}=Ni(),l=JSON.stringify(_f(i)),h=H.useRef(!1);return y_(()=>{h.current=!0}),H.useCallback((p,y={})=>{if(qn(h.current,g_),!h.current)return;if(typeof p=="number"){t.go(p);return}let E=vf(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:br([e,E.pathname])),(y.replace?t.replace:t.push)(E,y.state,y)},[e,t,l,o,n])}H.createContext(null);function ul(n,{relative:e}={}){let{matches:t}=H.useContext(hr),{pathname:i}=Ni(),o=JSON.stringify(_f(t));return H.useMemo(()=>vf(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function $w(n,e){return v_(n,e)}function v_(n,e,t,i){var W;Ye(bo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=H.useContext(Kn),{matches:l}=H.useContext(hr),h=l[l.length-1],f=h?h.params:{},p=h?h.pathname:"/",y=h?h.pathnameBase:"/",E=h&&h.route;{let G=E&&E.path||"";E_(p,!E||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let T=Ni(),I;if(e){let G=typeof e=="string"?Lo(e):e;Ye(y==="/"||((W=G.pathname)==null?void 0:W.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${G.pathname}" was given in the \`location\` prop.`),I=G}else I=T;let D=I.pathname||"/",L=D;if(y!=="/"){let G=y.replace(/^\//,"").split("/");L="/"+D.replace(/^\//,"").split("/").slice(G.length).join("/")}let z=h_(n,{pathname:L});qn(E||z!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),qn(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=Gw(z&&z.map(G=>Object.assign({},G,{params:Object.assign({},f,G.params),pathname:br([y,o.encodeLocation?o.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?y:br([y,o.encodeLocation?o.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),l,t,i);return e&&V?H.createElement(ll.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},V):V}function Hw(){let n=Zw(),e=Mw(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:l},"ErrorBoundary")," or"," ",H.createElement("code",{style:l},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:o},t):null,h)}var Ww=H.createElement(Hw,null),qw=class extends H.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?H.createElement(hr.Provider,{value:this.props.routeContext},H.createElement(Ef.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Kw({routeContext:n,match:e,children:t}){let i=H.useContext(Vo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),H.createElement(hr.Provider,{value:n},t)}function Gw(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Ye(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,f=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(f=p),y.route.id){let{loaderData:E,errors:T}=t,I=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||I){h=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let T,I=!1,D=null,L=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,D=y.route.errorElement||Ww,h&&(f<0&&E===0?(E_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,L=null):f===E&&(I=!0,L=y.route.hydrateFallbackElement||null)));let z=e.concat(o.slice(0,E+1)),V=()=>{let W;return T?W=D:I?W=L:y.route.Component?W=H.createElement(y.route.Component,null):y.route.element?W=y.route.element:W=p,H.createElement(Kw,{match:y,routeContext:{outlet:p,matches:z,isDataRoute:t!=null},children:W})};return t&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?H.createElement(qw,{location:t.location,revalidation:t.revalidation,component:D,error:T,children:V(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):V()},null)}function wf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qw(n){let e=H.useContext(Vo);return Ye(e,wf(n)),e}function Xw(n){let e=H.useContext(Sc);return Ye(e,wf(n)),e}function Yw(n){let e=H.useContext(hr);return Ye(e,wf(n)),e}function Tf(n){let e=Yw(n),t=e.matches[e.matches.length-1];return Ye(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function Jw(){return Tf("useRouteId")}function Zw(){var i;let n=H.useContext(Ef),e=Xw("useRouteError"),t=Tf("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function eT(){let{router:n}=Qw("useNavigate"),e=Tf("useNavigate"),t=H.useRef(!1);return y_(()=>{t.current=!0}),H.useCallback(async(o,l={})=>{qn(t.current,g_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var jg={};function E_(n,e,t){!e&&!jg[n]&&(jg[n]=!0,qn(!1,t))}H.memo(tT);function tT({routes:n,future:e,state:t}){return v_(n,void 0,t,e)}function nT({to:n,replace:e,state:t,relative:i}){Ye(bo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=H.useContext(Kn);qn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=H.useContext(hr),{pathname:h}=Ni(),f=__(),p=vf(n,_f(l),h,i==="path"),y=JSON.stringify(p);return H.useEffect(()=>{f(JSON.parse(y),{replace:e,state:t,relative:i})},[f,y,i,e,t]),null}function Ba(n){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rT({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){Ye(!bo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),f=H.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=Lo(t));let{pathname:p="/",search:y="",hash:E="",state:T=null,key:I="default"}=t,D=H.useMemo(()=>{let L=Ii(p,h);return L==null?null:{location:{pathname:L,search:y,hash:E,state:T,key:I},navigationType:i}},[h,p,y,E,T,I,i]);return qn(D!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:H.createElement(Kn.Provider,{value:f},H.createElement(ll.Provider,{children:e,value:D}))}function iT({children:n,location:e}){return $w($d(n),e)}function $d(n,e=[]){let t=[];return H.Children.forEach(n,(i,o)=>{if(!H.isValidElement(i))return;let l=[...e,o];if(i.type===H.Fragment){t.push.apply(t,$d(i.props.children,l));return}Ye(i.type===Ba,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!i.props.index||!i.props.children,"An index route cannot have child routes.");let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=$d(i.props.children,l)),t.push(h)}),t}var Wu="get",qu="application/x-www-form-urlencoded";function Rc(n){return n!=null&&typeof n.tagName=="string"}function sT(n){return Rc(n)&&n.tagName.toLowerCase()==="button"}function oT(n){return Rc(n)&&n.tagName.toLowerCase()==="form"}function aT(n){return Rc(n)&&n.tagName.toLowerCase()==="input"}function lT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function uT(n,e){return n.button===0&&(!e||e==="_self")&&!lT(n)}var bu=null;function cT(){if(bu===null)try{new FormData(document.createElement("form"),0),bu=!1}catch{bu=!0}return bu}var hT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cd(n){return n!=null&&!hT.has(n)?(qn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qu}"`),null):n}function dT(n,e){let t,i,o,l,h;if(oT(n)){let f=n.getAttribute("action");i=f?Ii(f,e):null,t=n.getAttribute("method")||Wu,o=Cd(n.getAttribute("enctype"))||qu,l=new FormData(n)}else if(sT(n)||aT(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||f.getAttribute("action");if(i=p?Ii(p,e):null,t=n.getAttribute("formmethod")||f.getAttribute("method")||Wu,o=Cd(n.getAttribute("formenctype"))||Cd(f.getAttribute("enctype"))||qu,l=new FormData(f,n),!cT()){let{name:y,type:E,value:T}=n;if(E==="image"){let I=y?`${y}.`:"";l.append(`${I}x`,"0"),l.append(`${I}y`,"0")}else y&&l.append(y,T)}}else{if(Rc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Wu,i=null,o=qu,h=n}return l&&o==="text/plain"&&(h=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:h}}function If(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function fT(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function mT(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await fT(l,t);return h.links?h.links():[]}return[]}));return vT(i.flat(1).filter(pT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function zg(n,e,t,i,o,l){let h=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,f=(p,y)=>{var E;return t[y].pathname!==p.pathname||((E=t[y].route.path)==null?void 0:E.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>h(p,y)||f(p,y)):l==="data"?e.filter((p,y)=>{var T;let E=i.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(h(p,y)||f(p,y))return!0;if(p.route.shouldRevalidate){let I=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function gT(n,e){return yT(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function yT(n){return[...new Set(n)]}function _T(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function vT(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(_T(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function ET(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function wT(){let n=H.useContext(Vo);return If(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function TT(){let n=H.useContext(Sc);return If(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Sf=H.createContext(void 0);Sf.displayName="FrameworkContext";function w_(){let n=H.useContext(Sf);return If(n,"You must render this element inside a <HydratedRouter> element"),n}function IT(n,e){let t=H.useContext(Sf),[i,o]=H.useState(!1),[l,h]=H.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:T}=e,I=H.useRef(null);H.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let z=W=>{W.forEach(G=>{h(G.isIntersecting)})},V=new IntersectionObserver(z,{threshold:.5});return I.current&&V.observe(I.current),()=>{V.disconnect()}}},[n]),H.useEffect(()=>{if(i){let z=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(z)}}},[i]);let D=()=>{o(!0)},L=()=>{o(!1),h(!1)};return t?n!=="intent"?[l,I,{}]:[l,I,{onFocus:Ua(f,D),onBlur:Ua(p,L),onMouseEnter:Ua(y,D),onMouseLeave:Ua(E,L),onTouchStart:Ua(T,D)}]:[!1,I,{}]}function Ua(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function ST({page:n,...e}){let{router:t}=wT(),i=H.useMemo(()=>h_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?H.createElement(AT,{page:n,matches:i,...e}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function RT(n){let{manifest:e,routeModules:t}=w_(),[i,o]=H.useState([]);return H.useEffect(()=>{let l=!1;return mT(n,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[n,e,t]),i}function AT({page:n,matches:e,...t}){let i=Ni(),{manifest:o,routeModules:l}=w_(),{loaderData:h,matches:f}=TT(),p=H.useMemo(()=>zg(n,e,f,o,i,"data"),[n,e,f,o,i]),y=H.useMemo(()=>zg(n,e,f,o,i,"assets"),[n,e,f,o,i]),E=H.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let D=new Set,L=!1;if(e.forEach(V=>{var G;let W=o.routes[V.route.id];!W||!W.hasLoader||(!p.some(ee=>ee.route.id===V.route.id)&&V.route.id in h&&((G=l[V.route.id])!=null&&G.shouldRevalidate)||W.hasClientLoader?L=!0:D.add(V.route.id))}),D.size===0)return[];let z=ET(n);return L&&D.size>0&&z.searchParams.set("_routes",e.filter(V=>D.has(V.route.id)).map(V=>V.route.id).join(",")),[z.pathname+z.search]},[h,i,o,p,e,n,l]),T=H.useMemo(()=>gT(y,o),[y,o]),I=RT(y);return H.createElement(H.Fragment,null,E.map(D=>H.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...t})),T.map(D=>H.createElement("link",{key:D,rel:"modulepreload",href:D,...t})),I.map(({key:D,link:L})=>H.createElement("link",{key:D,...L})))}function CT(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var T_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{T_&&(window.__reactRouterVersion="7.0.2")}catch{}function PT({basename:n,children:e,window:t}){let i=H.useRef();i.current==null&&(i.current=mw({window:t,v5Compat:!0}));let o=i.current,[l,h]=H.useState({action:o.action,location:o.location}),f=H.useCallback(p=>{H.startTransition(()=>h(p))},[h]);return H.useLayoutEffect(()=>o.listen(f),[o,f]),H.createElement(rT,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var I_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ic=H.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:h,state:f,target:p,to:y,preventScrollReset:E,viewTransition:T,...I},D){let{basename:L}=H.useContext(Kn),z=typeof y=="string"&&I_.test(y),V,W=!1;if(typeof y=="string"&&z&&(V=y,T_))try{let A=new URL(window.location.href),k=y.startsWith("//")?new URL(A.protocol+y):new URL(y),O=Ii(k.pathname,L);k.origin===A.origin&&O!=null?y=O+k.search+k.hash:W=!0}catch{qn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=jw(y,{relative:o}),[ee,re,Ie]=IT(i,I),_e=DT(y,{replace:h,state:f,target:p,preventScrollReset:E,relative:o,viewTransition:T});function N(A){e&&e(A),A.defaultPrevented||_e(A)}let S=H.createElement("a",{...I,...Ie,href:V||G,onClick:W||l?e:N,ref:CT(D,re),target:p,"data-discover":!z&&t==="render"?"true":void 0});return ee&&!z?H.createElement(H.Fragment,null,S,H.createElement(ST,{page:G})):S});ic.displayName="Link";var kT=H.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:h,viewTransition:f,children:p,...y},E){let T=ul(h,{relative:y.relative}),I=Ni(),D=H.useContext(Sc),{navigator:L,basename:z}=H.useContext(Kn),V=D!=null&&MT(T)&&f===!0,W=L.encodeLocation?L.encodeLocation(T).pathname:T.pathname,G=I.pathname,ee=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;t||(G=G.toLowerCase(),ee=ee?ee.toLowerCase():null,W=W.toLowerCase()),ee&&z&&(ee=Ii(ee,z)||ee);const re=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let Ie=G===W||!o&&G.startsWith(W)&&G.charAt(re)==="/",_e=ee!=null&&(ee===W||!o&&ee.startsWith(W)&&ee.charAt(W.length)==="/"),N={isActive:Ie,isPending:_e,isTransitioning:V},S=Ie?e:void 0,A;typeof i=="function"?A=i(N):A=[i,Ie?"active":null,_e?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(N):l;return H.createElement(ic,{...y,"aria-current":S,className:A,ref:E,style:k,to:h,viewTransition:f},typeof p=="function"?p(N):p)});kT.displayName="NavLink";var NT=H.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:h=Wu,action:f,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:T,...I},D)=>{let L=VT(),z=bT(f,{relative:y}),V=h.toLowerCase()==="get"?"get":"post",W=typeof f=="string"&&I_.test(f),G=ee=>{if(p&&p(ee),ee.defaultPrevented)return;ee.preventDefault();let re=ee.nativeEvent.submitter,Ie=(re==null?void 0:re.getAttribute("formmethod"))||h;L(re||ee.currentTarget,{fetcherKey:e,method:Ie,navigate:t,replace:o,state:l,relative:y,preventScrollReset:E,viewTransition:T})};return H.createElement("form",{ref:D,method:V,action:z,onSubmit:i?p:G,...I,"data-discover":!W&&n==="render"?"true":void 0})});NT.displayName="Form";function xT(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function S_(n){let e=H.useContext(Vo);return Ye(e,xT(n)),e}function DT(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:h}={}){let f=__(),p=Ni(),y=ul(n,{relative:l});return H.useCallback(E=>{if(uT(E,e)){E.preventDefault();let T=t!==void 0?t:Za(p)===Za(y);f(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:h})}},[p,f,y,t,i,e,n,o,l,h])}var OT=0,LT=()=>`__${String(++OT)}__`;function VT(){let{router:n}=S_("useSubmit"),{basename:e}=H.useContext(Kn),t=Jw();return H.useCallback(async(i,o={})=>{let{action:l,method:h,encType:f,formData:p,body:y}=dT(i,e);if(o.navigate===!1){let E=o.fetcherKey||LT();await n.fetch(E,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function bT(n,{relative:e}={}){let{basename:t}=H.useContext(Kn),i=H.useContext(hr);Ye(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...ul(n||".",{relative:e})},h=Ni();if(n==null){l.search=h.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(E=>E==="")){f.delete("index"),p.filter(T=>T).forEach(T=>f.append("index",T));let E=f.toString();l.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:br([t,l.pathname])),Za(l)}function MT(n,e={}){let t=H.useContext(m_);Ye(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=S_("useViewTransitionState"),o=ul(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ii(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=Ii(t.nextLocation.pathname,i)||t.nextLocation.pathname;return rc(o.pathname,h)!=null||rc(o.pathname,l)!=null}new TextEncoder;var $g={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},UT=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},A_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,E=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|y>>6,D=y&63;p||(D=64,h||(I=64)),i.push(t[E],t[T],t[I],t[D])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(R_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):UT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new FT;const I=l<<2|f>>4;if(i.push(I),y!==64){const D=f<<4&240|y>>2;if(i.push(D),T!==64){const L=y<<6&192|T;i.push(L)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class FT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BT=function(n){const e=R_(n);return A_.encodeByteArray(e,!0)},sc=function(n){return BT(n).replace(/\./g,"")},C_=function(n){try{return A_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=()=>jT().__FIREBASE_DEFAULTS__,$T=()=>{if(typeof process>"u"||typeof $g>"u")return;const n=$g.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},HT=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&C_(n[1]);return e&&JSON.parse(e)},Ac=()=>{try{return zT()||$T()||HT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},P_=n=>{var e,t;return(t=(e=Ac())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},k_=n=>{const e=P_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},N_=()=>{var n;return(n=Ac())===null||n===void 0?void 0:n.config},x_=n=>{var e;return(e=Ac())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[sc(JSON.stringify(t)),sc(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function KT(){var n;const e=(n=Ac())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QT(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function XT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YT(){const n=$t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function JT(){return!KT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ZT(){try{return typeof indexedDB=="object"}catch{return!1}}function eI(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="FirebaseError";class dr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=tI,Object.setPrototypeOf(this,dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cl.prototype.create)}}class cl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?nI(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new dr(o,f,i)}}function nI(n,e){return n.replace(rI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const rI=/\{\$([^}]+)}/g;function iI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function oc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(Hg(l)&&Hg(h)){if(!oc(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Hg(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ja(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function za(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function sI(n,e){const t=new oI(n,e);return t.subscribe.bind(t)}class oI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");aI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Pd),o.error===void 0&&(o.error=Pd),o.complete===void 0&&(o.complete=Pd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Pd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n){return n&&n._delegate?n._delegate:n}class Si{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new WT;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cI(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:uI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uI(n){return n===us?void 0:n}function cI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const dI={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},fI=Pe.INFO,pI={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},mI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=pI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rf{constructor(e){this.name=e,this._logLevel=fI,this._logHandler=mI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const gI=(n,e)=>e.some(t=>n instanceof t);let Wg,qg;function yI(){return Wg||(Wg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _I(){return qg||(qg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const O_=new WeakMap,Hd=new WeakMap,L_=new WeakMap,kd=new WeakMap,Af=new WeakMap;function vI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(vi(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&O_.set(t,n)}).catch(()=>{}),Af.set(e,n),e}function EI(n){if(Hd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});Hd.set(n,e)}let Wd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||L_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function wI(n){Wd=n(Wd)}function TI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Nd(this),e,...t);return L_.set(i,e.sort?e.sort():[e]),vi(i)}:_I().includes(n)?function(...e){return n.apply(Nd(this),e),vi(O_.get(this))}:function(...e){return vi(n.apply(Nd(this),e))}}function II(n){return typeof n=="function"?TI(n):(n instanceof IDBTransaction&&EI(n),gI(n,yI())?new Proxy(n,Wd):n)}function vi(n){if(n instanceof IDBRequest)return vI(n);if(kd.has(n))return kd.get(n);const e=II(n);return e!==n&&(kd.set(n,e),Af.set(e,n)),e}const Nd=n=>Af.get(n);function SI(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=vi(h);return i&&h.addEventListener("upgradeneeded",p=>{i(vi(h.result),p.oldVersion,p.newVersion,vi(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const RI=["get","getKey","getAll","getAllKeys","count"],AI=["put","add","delete","clear"],xd=new Map;function Kg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(xd.get(e))return xd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=AI.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||RI.includes(t)))return;const l=async function(h,...f){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return xd.set(e,l),l}wI(n=>({...n,get:(e,t,i)=>Kg(e,t)||n.get(e,t,i),has:(e,t)=>!!Kg(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(PI(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function PI(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qd="@firebase/app",Gg="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Rf("@firebase/app"),kI="@firebase/app-compat",NI="@firebase/analytics-compat",xI="@firebase/analytics",DI="@firebase/app-check-compat",OI="@firebase/app-check",LI="@firebase/auth",VI="@firebase/auth-compat",bI="@firebase/database",MI="@firebase/data-connect",UI="@firebase/database-compat",FI="@firebase/functions",BI="@firebase/functions-compat",jI="@firebase/installations",zI="@firebase/installations-compat",$I="@firebase/messaging",HI="@firebase/messaging-compat",WI="@firebase/performance",qI="@firebase/performance-compat",KI="@firebase/remote-config",GI="@firebase/remote-config-compat",QI="@firebase/storage",XI="@firebase/storage-compat",YI="@firebase/firestore",JI="@firebase/vertexai",ZI="@firebase/firestore-compat",eS="firebase",tS="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="[DEFAULT]",nS={[qd]:"fire-core",[kI]:"fire-core-compat",[xI]:"fire-analytics",[NI]:"fire-analytics-compat",[OI]:"fire-app-check",[DI]:"fire-app-check-compat",[LI]:"fire-auth",[VI]:"fire-auth-compat",[bI]:"fire-rtdb",[MI]:"fire-data-connect",[UI]:"fire-rtdb-compat",[FI]:"fire-fn",[BI]:"fire-fn-compat",[jI]:"fire-iid",[zI]:"fire-iid-compat",[$I]:"fire-fcm",[HI]:"fire-fcm-compat",[WI]:"fire-perf",[qI]:"fire-perf-compat",[KI]:"fire-rc",[GI]:"fire-rc-compat",[QI]:"fire-gcs",[XI]:"fire-gcs-compat",[YI]:"fire-fst",[ZI]:"fire-fst-compat",[JI]:"fire-vertex","fire-js":"fire-js",[eS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Map,rS=new Map,Gd=new Map;function Qg(n,e){try{n.container.addComponent(e)}catch(t){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ms(n){const e=n.name;if(Gd.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;Gd.set(e,n);for(const t of ac.values())Qg(t,n);for(const t of rS.values())Qg(t,n);return!0}function Cc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function zn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new cl("app","Firebase",iS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=tS;function V_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Kd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ei.create("bad-app-name",{appName:String(o)});if(t||(t=N_()),!t)throw Ei.create("no-options");const l=ac.get(o);if(l){if(oc(t,l.options)&&oc(i,l.config))return l;throw Ei.create("duplicate-app",{appName:o})}const h=new hI(o);for(const p of Gd.values())h.addComponent(p);const f=new sS(t,i,h);return ac.set(o,f),f}function Cf(n=Kd){const e=ac.get(n);if(!e&&n===Kd&&N_())return V_();if(!e)throw Ei.create("no-app",{appName:n});return e}function sr(n,e,t){var i;let o=(i=nS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(f.join(" "));return}ms(new Si(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="firebase-heartbeat-database",aS=1,el="firebase-heartbeat-store";let Dd=null;function b_(){return Dd||(Dd=SI(oS,aS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(el)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ei.create("idb-open",{originalErrorMessage:n.message})})),Dd}async function lS(n){try{const t=(await b_()).transaction(el),i=await t.objectStore(el).get(M_(n));return await t.done,i}catch(e){if(e instanceof dr)Ur.warn(e.message);else{const t=Ei.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(t.message)}}}async function Xg(n,e){try{const i=(await b_()).transaction(el,"readwrite");await i.objectStore(el).put(e,M_(n)),await i.done}catch(t){if(t instanceof dr)Ur.warn(t.message);else{const i=Ei.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ur.warn(i.message)}}}function M_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=1024,cS=30*24*60*60*1e3;class hS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Yg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=cS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Ur.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yg(),{heartbeatsToSend:i,unsentEntries:o}=dS(this._heartbeatsCache.heartbeats),l=sc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ur.warn(t),""}}}function Yg(){return new Date().toISOString().substring(0,10)}function dS(n,e=uS){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Jg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Jg(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class fS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZT()?eI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Xg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Xg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Jg(n){return sc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(n){ms(new Si("platform-logger",e=>new CI(e),"PRIVATE")),ms(new Si("heartbeat",e=>new hS(e),"PRIVATE")),sr(qd,Gg,n),sr(qd,Gg,"esm2017"),sr("fire-js","")}pS("");var mS="firebase",gS="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr(mS,gS,"app");function Pf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function U_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yS=U_,F_=new cl("auth","Firebase",U_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Rf("@firebase/auth");function _S(n,...e){lc.logLevel<=Pe.WARN&&lc.warn(`Auth (${ws}): ${n}`,...e)}function Ku(n,...e){lc.logLevel<=Pe.ERROR&&lc.error(`Auth (${ws}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(n,...e){throw Nf(n,...e)}function Hn(n,...e){return Nf(n,...e)}function kf(n,e,t){const i=Object.assign(Object.assign({},yS()),{[e]:t});return new cl("auth","Firebase",i).create(e,{appName:n.name})}function Mr(n){return kf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vS(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&An(n,"argument-error"),kf(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return F_.create(n,...e)}function ve(n,e,...t){if(!n)throw Nf(e,...t)}function Or(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ku(e),new Error(e)}function Fr(n,e){n||Or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ES(){return Zg()==="http:"||Zg()==="https:"}function Zg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ES()||QT()||"connection"in navigator)?navigator.onLine:!0}function TS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Fr(t>e,"Short delay should be less than long delay!"),this.isMobile=qT()||XT()}get(){return wS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n,e){Fr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=new dl(3e4,6e4);function xi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function zr(n,e,t,i,o={}){return j_(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=hl(Object.assign({key:n.config.apiKey},h)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return GT()||(y.referrerPolicy="no-referrer"),B_.fetch()(z_(n,n.config.apiHost,t,f),y)})}async function j_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},IS),e);try{const o=new AS(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Mu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mu(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Mu(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw Mu(n,"user-disabled",h);const E=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw kf(n,E,y);An(n,E)}}catch(o){if(o instanceof dr)throw o;An(n,"network-request-failed",{message:String(o)})}}async function fl(n,e,t,i,o={}){const l=await zr(n,e,t,i,o);return"mfaPendingCredential"in l&&An(n,"multi-factor-auth-required",{_serverResponse:l}),l}function z_(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?xf(n.config,o):`${n.config.apiScheme}://${o}`}function RS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Hn(this.auth,"network-request-failed")),SS.get())})}}function Mu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Hn(n,e,i);return o.customData._tokenResponse=t,o}function ey(n){return n!==void 0&&n.enterprise!==void 0}class CS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return RS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function PS(n,e){return zr(n,"GET","/v2/recaptchaConfig",xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(n,e){return zr(n,"POST","/v1/accounts:delete",e)}async function $_(n,e){return zr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NS(n,e=!1){const t=et(n),i=await t.getIdToken(e),o=Df(i);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Ka(Od(o.auth_time)),issuedAtTime:Ka(Od(o.iat)),expirationTime:Ka(Od(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Od(n){return Number(n)*1e3}function Df(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ku("JWT malformed, contained fewer than 3 sections"),null;try{const o=C_(t);return o?JSON.parse(o):(Ku("Failed to decode base64 JWT payload"),null)}catch(o){return Ku("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ty(n){const e=Df(n);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof dr&&xS(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function xS({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ka(this.lastLoginAt),this.creationTime=Ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Ro(n,$_(t,{idToken:i}));ve(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?H_(l.providerUserInfo):[],f=LS(n.providerData,h),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),E=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Xd(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function OS(n){const e=et(n);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LS(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function H_(n){return n.map(e=>{var{providerId:t}=e,i=Pf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(n,e){const t=await j_(n,{},async()=>{const i=hl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=z_(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",B_.fetch()(h,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function bS(n,e){return zr(n,"POST","/v2/accounts:revokeToken",xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ty(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=ty(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await VS(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new wo;return i&&(ve(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(ve(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wo,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n,e){ve(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Xd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return NS(this,e)}reload(){return OS(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await uc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zn(this.auth.app))return Promise.reject(Mr(this.auth));const e=await this.getIdToken();return await Ro(this,kS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,p,y,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,D=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,L=(h=t.photoURL)!==null&&h!==void 0?h:void 0,z=(f=t.tenantId)!==null&&f!==void 0?f:void 0,V=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,W=(y=t.createdAt)!==null&&y!==void 0?y:void 0,G=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ee,emailVerified:re,isAnonymous:Ie,providerData:_e,stsTokenManager:N}=t;ve(ee&&N,e,"internal-error");const S=wo.fromJSON(this.name,N);ve(typeof ee=="string",e,"internal-error"),pi(T,e.name),pi(I,e.name),ve(typeof re=="boolean",e,"internal-error"),ve(typeof Ie=="boolean",e,"internal-error"),pi(D,e.name),pi(L,e.name),pi(z,e.name),pi(V,e.name),pi(W,e.name),pi(G,e.name);const A=new Lr({uid:ee,auth:e,email:I,emailVerified:re,displayName:T,isAnonymous:Ie,photoURL:L,phoneNumber:D,tenantId:z,stsTokenManager:S,createdAt:W,lastLoginAt:G});return _e&&Array.isArray(_e)&&(A.providerData=_e.map(k=>Object.assign({},k))),V&&(A._redirectEventId=V),A}static async _fromIdTokenResponse(e,t,i=!1){const o=new wo;o.updateFromServerResponse(t);const l=new Lr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await uc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?H_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new wo;f.updateFromIdToken(i);const p=new Lr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Xd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=new Map;function Vr(n){Fr(n instanceof Function,"Expected a class definition");let e=ny.get(n);return e?(Fr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ny.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}W_.type="NONE";const ry=W_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n,e,t){return`firebase:${n}:${e}:${t}`}class To{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Gu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Gu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new To(Vr(ry),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Vr(ry);const h=Gu(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const E=await y._get(h);if(E){const T=Lr._fromJSON(e,E);y!==l&&(f=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new To(l,e,i):(l=p[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new To(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(q_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Y_(e))return"Blackberry";if(J_(e))return"Webos";if(K_(e))return"Safari";if((e.includes("chrome/")||G_(e))&&!e.includes("edge/"))return"Chrome";if(X_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function q_(n=$t()){return/firefox\//i.test(n)}function K_(n=$t()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G_(n=$t()){return/crios\//i.test(n)}function Q_(n=$t()){return/iemobile/i.test(n)}function X_(n=$t()){return/android/i.test(n)}function Y_(n=$t()){return/blackberry/i.test(n)}function J_(n=$t()){return/webos/i.test(n)}function Of(n=$t()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function MS(n=$t()){var e;return Of(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function US(){return YT()&&document.documentMode===10}function Z_(n=$t()){return Of(n)||X_(n)||J_(n)||Y_(n)||/windows phone/i.test(n)||Q_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(n,e=[]){let t;switch(n){case"Browser":t=iy($t());break;case"Worker":t=`${iy($t())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ws}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const p=e(l);h(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(n,e={}){return zr(n,"GET","/v2/passwordPolicy",xi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=6;class zS{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:jS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sy(this),this.idTokenSubscription=new sy(this),this.beforeStateQueue=new FS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=F_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await To.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $_(this,{idToken:e}),i=await Lr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(zn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zn(this.app))return Promise.reject(Mr(this));const t=e?et(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zn(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zn(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BS(this),t=new zS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await bS(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[Vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ev(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&_S(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Di(n){return et(n)}class sy{constructor(e){this.auth=e,this.observer=null,this.addObserver=sI(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HS(n){Pc=n}function tv(n){return Pc.loadJS(n)}function WS(){return Pc.recaptchaEnterpriseScript}function qS(){return Pc.gapiScript}function KS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class GS{constructor(){this.enterprise=new QS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class QS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const XS="recaptcha-enterprise",nv="NO_RECAPTCHA";class YS{constructor(e){this.type=XS,this.auth=Di(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{PS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new CS(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(p=>{f(p)})})}function o(l,h,f){const p=window.grecaptcha;ey(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(nv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new GS().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&ey(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=WS();p.length!==0&&(p+=f),tv(p).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function oy(n,e,t,i=!1,o=!1){const l=new YS(n);let h;if(o)h=nv;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Yd(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await oy(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await oy(n,e,t,t==="getOobCode");return i(n,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(n,e){const t=Cc(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(oc(l,e??{}))return o;An(o,"already-initialized")}return t.initialize({options:e})}function ZS(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Vr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function eR(n,e,t){const i=Di(n);ve(i._canInitEmulator,i,"emulator-config-failed"),ve(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=rv(e),{host:h,port:f}=tR(e),p=f===null?"":`:${f}`;i.config.emulator={url:`${l}//${h}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),nR()}function rv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function tR(n){const e=rv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:ay(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:ay(h)}}}function ay(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function nR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Or("not implemented")}_getIdTokenResponse(e){return Or("not implemented")}_linkToIdToken(e,t){return Or("not implemented")}_getReauthenticationResolver(e){return Or("not implemented")}}async function rR(n,e){return zr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(n,e){return fl(n,"POST","/v1/accounts:signInWithPassword",xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(n,e){return fl(n,"POST","/v1/accounts:signInWithEmailLink",xi(n,e))}async function oR(n,e){return fl(n,"POST","/v1/accounts:signInWithEmailLink",xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Lf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new tl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new tl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yd(e,t,"signInWithPassword",iR);case"emailLink":return sR(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yd(e,i,"signUpPassword",rR);case"emailLink":return oR(e,{idToken:t,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(n,e){return fl(n,"POST","/v1/accounts:signInWithIdp",xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="http://localhost";class gs extends Lf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):An("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Pf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new gs(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Io(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Io(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Io(e,t)}buildRequest(){const e={requestUri:aR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uR(n){const e=ja(za(n)).link,t=e?ja(za(e)).deep_link_id:null,i=ja(za(n)).deep_link_id;return(i?ja(za(i)).link:null)||i||t||e||n}class Vf{constructor(e){var t,i,o,l,h,f;const p=ja(za(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(i=p.oobCode)!==null&&i!==void 0?i:null,T=lR((o=p.mode)!==null&&o!==void 0?o:null);ve(y&&E&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=uR(e);try{return new Vf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.providerId=Mo.PROVIDER_ID}static credential(e,t){return tl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Vf.parseLink(t);return ve(i,"argument-error"),tl._fromEmailAndCode(e,i.code,i.tenantId)}}Mo.PROVIDER_ID="password";Mo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends bf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends pl{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.FACEBOOK_SIGN_IN_METHOD="facebook.com";mi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gs._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return xr.credential(t,i)}catch{return null}}}xr.GOOGLE_SIGN_IN_METHOD="google.com";xr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends pl{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dr.credential(e.oauthAccessToken)}catch{return null}}}Dr.GITHUB_SIGN_IN_METHOD="github.com";Dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends pl{constructor(){super("twitter.com")}static credential(e,t){return gs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return gi.credential(t,i)}catch{return null}}}gi.TWITTER_SIGN_IN_METHOD="twitter.com";gi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR(n,e){return fl(n,"POST","/v1/accounts:signUp",xi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Lr._fromIdTokenResponse(e,i,o),h=ly(i);return new ys({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=ly(i);return new ys({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function ly(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends dr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new cc(e,t,i,o)}}function iv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(n,l,e,i):l})}async function hR(n,e,t=!1){const i=await Ro(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ys._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(n,e,t=!1){const{auth:i}=n;if(zn(i.app))return Promise.reject(Mr(i));const o="reauthenticate";try{const l=await Ro(n,iv(i,o,e,n),t);ve(l.idToken,i,"internal-error");const h=Df(l.idToken);ve(h,i,"internal-error");const{sub:f}=h;return ve(n.uid===f,i,"user-mismatch"),ys._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&An(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(n,e,t=!1){if(zn(n.app))return Promise.reject(Mr(n));const i="signIn",o=await iv(n,i,e),l=await ys._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function fR(n,e){return sv(Di(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ov(n){const e=Di(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pR(n,e,t){if(zn(n.app))return Promise.reject(Mr(n));const i=Di(n),h=await Yd(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cR).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&ov(n),p}),f=await ys._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(f.user),f}function mR(n,e,t){return zn(n.app)?Promise.reject(Mr(n)):fR(et(n),Mo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&ov(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gR(n,e){return zr(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=et(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await Ro(i,gR(i.auth,l));i.displayName=h.displayName||null,i.photoURL=h.photoUrl||null;const f=i.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=i.displayName,f.photoURL=i.photoURL),await i._updateTokensIfNecessary(h)}function _R(n,e,t,i){return et(n).onIdTokenChanged(e,t,i)}function vR(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function ER(n,e,t,i){return et(n).onAuthStateChanged(e,t,i)}const hc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=1e3,TR=10;class lv extends av{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Z_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,p)=>{this.notifyListeners(h,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);US()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,TR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},wR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}lv.type="LOCAL";const IR=lv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv extends av{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}uv.type="SESSION";const cv=uv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new kc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),p=await SR(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,p)=>{const y=Mf("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){return window}function AR(n){or().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(){return typeof or().WorkerGlobalScope<"u"&&typeof or().importScripts=="function"}async function CR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function kR(){return hv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="firebaseLocalStorageDb",NR=1,dc="firebaseLocalStorage",fv="fbase_key";class ml{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Nc(n,e){return n.transaction([dc],e?"readwrite":"readonly").objectStore(dc)}function xR(){const n=indexedDB.deleteDatabase(dv);return new ml(n).toPromise()}function Jd(){const n=indexedDB.open(dv,NR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(dc,{keyPath:fv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(dc)?e(i):(i.close(),await xR(),e(await Jd()))})})}async function uy(n,e,t){const i=Nc(n,!0).put({[fv]:e,value:t});return new ml(i).toPromise()}async function DR(n,e){const t=Nc(n,!1).get(e),i=await new ml(t).toPromise();return i===void 0?null:i.value}function cy(n,e){const t=Nc(n,!0).delete(e);return new ml(t).toPromise()}const OR=800,LR=3;class pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>LR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(kR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await CR(),!this.activeServiceWorker)return;this.sender=new RR(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jd();return await uy(e,hc,"1"),await cy(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>uy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>DR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>cy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Nc(o,!1).getAll();return new ml(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pv.type="LOCAL";const VR=pv;new dl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(n,e){return e?Vr(e):(ve(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf extends Lf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Io(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Io(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Io(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bR(n){return sv(n.auth,new Uf(n),n.bypassAuthState)}function MR(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),dR(t,new Uf(n),n.bypassAuthState)}async function UR(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),hR(t,new Uf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bR;case"linkViaPopup":case"linkViaRedirect":return UR;case"reauthViaPopup":case"reauthViaRedirect":return MR;default:An(this.auth,"internal-error")}}resolve(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=new dl(2e3,1e4);async function BR(n,e,t){if(zn(n.app))return Promise.reject(Hn(n,"operation-not-supported-in-this-environment"));const i=Di(n);vS(n,e,bf);const o=mv(i,t);return new cs(i,"signInViaPopup",e,o).executeNotNull()}class cs extends gv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,cs.currentPopupAction&&cs.currentPopupAction.cancel(),cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Fr(this.filter.length===1,"Popup operations only handle one event");const e=Mf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FR.get())};e()}}cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="pendingRedirect",Qu=new Map;class zR extends gv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Qu.get(this.auth._key());if(!e){try{const i=await $R(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Qu.set(this.auth._key(),e)}return this.bypassAuthState||Qu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $R(n,e){const t=qR(e),i=WR(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function HR(n,e){Qu.set(n._key(),e)}function WR(n){return Vr(n._redirectPersistence)}function qR(n){return Gu(jR,n.config.apiKey,n.name)}async function KR(n,e,t=!1){if(zn(n.app))return Promise.reject(Mr(n));const i=Di(n),o=mv(i,e),h=await new zR(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=10*60*1e3;class QR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!yv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Hn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GR&&this.cachedEventUids.clear(),this.cachedEventUids.has(hy(e))}saveEventToCache(e){this.cachedEventUids.add(hy(e)),this.lastProcessedEventTime=Date.now()}}function hy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function yv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yv(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(n,e={}){return zr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZR=/^https?/;async function e1(n){if(n.config.emulator)return;const{authorizedDomains:e}=await YR(n);for(const t of e)try{if(t1(t))return}catch{}An(n,"unauthorized-domain")}function t1(n){const e=Qd(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!ZR.test(t))return!1;if(JR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=new dl(3e4,6e4);function dy(){const n=or().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function r1(n){return new Promise((e,t)=>{var i,o,l;function h(){dy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dy(),t(Hn(n,"network-request-failed"))},timeout:n1.get()})}if(!((o=(i=or().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=or().gapi)===null||l===void 0)&&l.load)h();else{const f=KS("iframefcb");return or()[f]=()=>{gapi.load?h():t(Hn(n,"network-request-failed"))},tv(`${qS()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw Xu=null,e})}let Xu=null;function i1(n){return Xu=Xu||r1(n),Xu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=new dl(5e3,15e3),o1="__/auth/iframe",a1="emulator/auth/iframe",l1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},u1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function c1(n){const e=n.config;ve(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?xf(e,a1):`https://${n.config.authDomain}/${o1}`,i={apiKey:e.apiKey,appName:n.name,v:ws},o=u1.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${hl(i).slice(1)}`}async function h1(n){const e=await i1(n),t=or().gapi;return ve(t,n,"internal-error"),e.open({where:document.body,url:c1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:l1,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=Hn(n,"network-request-failed"),f=or().setTimeout(()=>{l(h)},s1.get());function p(){or().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},f1=500,p1=600,m1="_blank",g1="http://localhost";class fy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function y1(n,e,t,i=f1,o=p1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p=Object.assign(Object.assign({},d1),{width:i.toString(),height:o.toString(),top:l,left:h}),y=$t().toLowerCase();t&&(f=G_(y)?m1:t),q_(y)&&(e=e||g1,p.scrollbars="yes");const E=Object.entries(p).reduce((I,[D,L])=>`${I}${D}=${L},`,"");if(MS(y)&&f!=="_self")return _1(e||"",f),new fy(null);const T=window.open(e||"",f,E);ve(T,n,"popup-blocked");try{T.focus()}catch{}return new fy(T)}function _1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1="__/auth/handler",E1="emulator/auth/handler",w1=encodeURIComponent("fac");async function py(n,e,t,i,o,l){ve(n.config.authDomain,n,"auth-domain-config-required"),ve(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ws,eventId:o};if(e instanceof bf){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",iI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof pl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const p=await n._getAppCheckToken(),y=p?`#${w1}=${encodeURIComponent(p)}`:"";return`${T1(n)}?${hl(f).slice(1)}${y}`}function T1({config:n}){return n.emulator?xf(n,E1):`https://${n.authDomain}/${v1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="webStorageSupport";class I1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cv,this._completeRedirectFn=KR,this._overrideRedirectResult=HR}async _openPopup(e,t,i,o){var l;Fr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await py(e,t,i,Qd(),o);return y1(e,h,Mf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await py(e,t,i,Qd(),o);return AR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Fr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await h1(e),i=new QR(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ld,{type:Ld},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Ld];h!==void 0&&t(!!h),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=e1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Z_()||K_()||Of()}}const S1=I1;var my="@firebase/auth",gy="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function C1(n){ms(new Si("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ev(n)},y=new $S(i,o,l,p);return ZS(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ms(new Si("auth-internal",e=>{const t=Di(e.getProvider("auth").getImmediate());return(i=>new R1(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(my,gy,A1(n)),sr(my,gy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=5*60,k1=x_("authIdTokenMaxAge")||P1;let yy=null;const N1=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>k1)return;const o=t==null?void 0:t.token;yy!==o&&(yy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function x1(n=Cf()){const e=Cc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=JS(n,{popupRedirectResolver:S1,persistence:[VR,IR,cv]}),i=x_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=N1(l.toString());vR(t,h,()=>h(t.currentUser)),_R(t,f=>h(f))}}const o=P_("auth");return o&&eR(t,`http://${o}`),t}function D1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}HS({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=Hn("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",D1().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});C1("Browser");var _y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ds,_v;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,S){function A(){}A.prototype=S.prototype,N.D=S.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(k,O,M){for(var C=Array(arguments.length-2),st=2;st<arguments.length;st++)C[st-2]=arguments[st];return S.prototype[O].apply(k,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,S,A){A||(A=0);var k=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)k[O]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(O=0;16>O;++O)k[O]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=N.g[0],A=N.g[1],O=N.g[2];var M=N.g[3],C=S+(M^A&(O^M))+k[0]+3614090360&4294967295;S=A+(C<<7&4294967295|C>>>25),C=M+(O^S&(A^O))+k[1]+3905402710&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(A^M&(S^A))+k[2]+606105819&4294967295,O=M+(C<<17&4294967295|C>>>15),C=A+(S^O&(M^S))+k[3]+3250441966&4294967295,A=O+(C<<22&4294967295|C>>>10),C=S+(M^A&(O^M))+k[4]+4118548399&4294967295,S=A+(C<<7&4294967295|C>>>25),C=M+(O^S&(A^O))+k[5]+1200080426&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(A^M&(S^A))+k[6]+2821735955&4294967295,O=M+(C<<17&4294967295|C>>>15),C=A+(S^O&(M^S))+k[7]+4249261313&4294967295,A=O+(C<<22&4294967295|C>>>10),C=S+(M^A&(O^M))+k[8]+1770035416&4294967295,S=A+(C<<7&4294967295|C>>>25),C=M+(O^S&(A^O))+k[9]+2336552879&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(A^M&(S^A))+k[10]+4294925233&4294967295,O=M+(C<<17&4294967295|C>>>15),C=A+(S^O&(M^S))+k[11]+2304563134&4294967295,A=O+(C<<22&4294967295|C>>>10),C=S+(M^A&(O^M))+k[12]+1804603682&4294967295,S=A+(C<<7&4294967295|C>>>25),C=M+(O^S&(A^O))+k[13]+4254626195&4294967295,M=S+(C<<12&4294967295|C>>>20),C=O+(A^M&(S^A))+k[14]+2792965006&4294967295,O=M+(C<<17&4294967295|C>>>15),C=A+(S^O&(M^S))+k[15]+1236535329&4294967295,A=O+(C<<22&4294967295|C>>>10),C=S+(O^M&(A^O))+k[1]+4129170786&4294967295,S=A+(C<<5&4294967295|C>>>27),C=M+(A^O&(S^A))+k[6]+3225465664&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^A&(M^S))+k[11]+643717713&4294967295,O=M+(C<<14&4294967295|C>>>18),C=A+(M^S&(O^M))+k[0]+3921069994&4294967295,A=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(A^O))+k[5]+3593408605&4294967295,S=A+(C<<5&4294967295|C>>>27),C=M+(A^O&(S^A))+k[10]+38016083&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^A&(M^S))+k[15]+3634488961&4294967295,O=M+(C<<14&4294967295|C>>>18),C=A+(M^S&(O^M))+k[4]+3889429448&4294967295,A=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(A^O))+k[9]+568446438&4294967295,S=A+(C<<5&4294967295|C>>>27),C=M+(A^O&(S^A))+k[14]+3275163606&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^A&(M^S))+k[3]+4107603335&4294967295,O=M+(C<<14&4294967295|C>>>18),C=A+(M^S&(O^M))+k[8]+1163531501&4294967295,A=O+(C<<20&4294967295|C>>>12),C=S+(O^M&(A^O))+k[13]+2850285829&4294967295,S=A+(C<<5&4294967295|C>>>27),C=M+(A^O&(S^A))+k[2]+4243563512&4294967295,M=S+(C<<9&4294967295|C>>>23),C=O+(S^A&(M^S))+k[7]+1735328473&4294967295,O=M+(C<<14&4294967295|C>>>18),C=A+(M^S&(O^M))+k[12]+2368359562&4294967295,A=O+(C<<20&4294967295|C>>>12),C=S+(A^O^M)+k[5]+4294588738&4294967295,S=A+(C<<4&4294967295|C>>>28),C=M+(S^A^O)+k[8]+2272392833&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^A)+k[11]+1839030562&4294967295,O=M+(C<<16&4294967295|C>>>16),C=A+(O^M^S)+k[14]+4259657740&4294967295,A=O+(C<<23&4294967295|C>>>9),C=S+(A^O^M)+k[1]+2763975236&4294967295,S=A+(C<<4&4294967295|C>>>28),C=M+(S^A^O)+k[4]+1272893353&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^A)+k[7]+4139469664&4294967295,O=M+(C<<16&4294967295|C>>>16),C=A+(O^M^S)+k[10]+3200236656&4294967295,A=O+(C<<23&4294967295|C>>>9),C=S+(A^O^M)+k[13]+681279174&4294967295,S=A+(C<<4&4294967295|C>>>28),C=M+(S^A^O)+k[0]+3936430074&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^A)+k[3]+3572445317&4294967295,O=M+(C<<16&4294967295|C>>>16),C=A+(O^M^S)+k[6]+76029189&4294967295,A=O+(C<<23&4294967295|C>>>9),C=S+(A^O^M)+k[9]+3654602809&4294967295,S=A+(C<<4&4294967295|C>>>28),C=M+(S^A^O)+k[12]+3873151461&4294967295,M=S+(C<<11&4294967295|C>>>21),C=O+(M^S^A)+k[15]+530742520&4294967295,O=M+(C<<16&4294967295|C>>>16),C=A+(O^M^S)+k[2]+3299628645&4294967295,A=O+(C<<23&4294967295|C>>>9),C=S+(O^(A|~M))+k[0]+4096336452&4294967295,S=A+(C<<6&4294967295|C>>>26),C=M+(A^(S|~O))+k[7]+1126891415&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~A))+k[14]+2878612391&4294967295,O=M+(C<<15&4294967295|C>>>17),C=A+(M^(O|~S))+k[5]+4237533241&4294967295,A=O+(C<<21&4294967295|C>>>11),C=S+(O^(A|~M))+k[12]+1700485571&4294967295,S=A+(C<<6&4294967295|C>>>26),C=M+(A^(S|~O))+k[3]+2399980690&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~A))+k[10]+4293915773&4294967295,O=M+(C<<15&4294967295|C>>>17),C=A+(M^(O|~S))+k[1]+2240044497&4294967295,A=O+(C<<21&4294967295|C>>>11),C=S+(O^(A|~M))+k[8]+1873313359&4294967295,S=A+(C<<6&4294967295|C>>>26),C=M+(A^(S|~O))+k[15]+4264355552&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~A))+k[6]+2734768916&4294967295,O=M+(C<<15&4294967295|C>>>17),C=A+(M^(O|~S))+k[13]+1309151649&4294967295,A=O+(C<<21&4294967295|C>>>11),C=S+(O^(A|~M))+k[4]+4149444226&4294967295,S=A+(C<<6&4294967295|C>>>26),C=M+(A^(S|~O))+k[11]+3174756917&4294967295,M=S+(C<<10&4294967295|C>>>22),C=O+(S^(M|~A))+k[2]+718787259&4294967295,O=M+(C<<15&4294967295|C>>>17),C=A+(M^(O|~S))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+S&4294967295,N.g[1]=N.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+O&4294967295,N.g[3]=N.g[3]+M&4294967295}i.prototype.u=function(N,S){S===void 0&&(S=N.length);for(var A=S-this.blockSize,k=this.B,O=this.h,M=0;M<S;){if(O==0)for(;M<=A;)o(this,N,M),M+=this.blockSize;if(typeof N=="string"){for(;M<S;)if(k[O++]=N.charCodeAt(M++),O==this.blockSize){o(this,k),O=0;break}}else for(;M<S;)if(k[O++]=N[M++],O==this.blockSize){o(this,k),O=0;break}}this.h=O,this.o+=S},i.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var S=1;S<N.length-8;++S)N[S]=0;var A=8*this.o;for(S=N.length-8;S<N.length;++S)N[S]=A&255,A/=256;for(this.u(N),N=Array(16),S=A=0;4>S;++S)for(var k=0;32>k;k+=8)N[A++]=this.g[S]>>>k&255;return N};function l(N,S){var A=f;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=S(N)}function h(N,S){this.h=S;for(var A=[],k=!0,O=N.length-1;0<=O;O--){var M=N[O]|0;k&&M==S||(A[O]=M,k=!1)}this.g=A}var f={};function p(N){return-128<=N&&128>N?l(N,function(S){return new h([S|0],0>S?-1:0)}):new h([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return V(y(-N));for(var S=[],A=1,k=0;N>=A;k++)S[k]=N/A|0,A*=4294967296;return new h(S,0)}function E(N,S){if(N.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N.charAt(0)=="-")return V(E(N.substring(1),S));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(S,8)),k=T,O=0;O<N.length;O+=8){var M=Math.min(8,N.length-O),C=parseInt(N.substring(O,O+M),S);8>M?(M=y(Math.pow(S,M)),k=k.j(M).add(y(C))):(k=k.j(A),k=k.add(y(C)))}return k}var T=p(0),I=p(1),D=p(16777216);n=h.prototype,n.m=function(){if(z(this))return-V(this).m();for(var N=0,S=1,A=0;A<this.g.length;A++){var k=this.i(A);N+=(0<=k?k:4294967296+k)*S,S*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(L(this))return"0";if(z(this))return"-"+V(this).toString(N);for(var S=y(Math.pow(N,6)),A=this,k="";;){var O=re(A,S).g;A=W(A,O.j(S));var M=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=O,L(A))return M+k;for(;6>M.length;)M="0"+M;k=M+k}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function L(N){if(N.h!=0)return!1;for(var S=0;S<N.g.length;S++)if(N.g[S]!=0)return!1;return!0}function z(N){return N.h==-1}n.l=function(N){return N=W(this,N),z(N)?-1:L(N)?0:1};function V(N){for(var S=N.g.length,A=[],k=0;k<S;k++)A[k]=~N.g[k];return new h(A,~N.h).add(I)}n.abs=function(){return z(this)?V(this):this},n.add=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],k=0,O=0;O<=S;O++){var M=k+(this.i(O)&65535)+(N.i(O)&65535),C=(M>>>16)+(this.i(O)>>>16)+(N.i(O)>>>16);k=C>>>16,M&=65535,C&=65535,A[O]=C<<16|M}return new h(A,A[A.length-1]&-2147483648?-1:0)};function W(N,S){return N.add(V(S))}n.j=function(N){if(L(this)||L(N))return T;if(z(this))return z(N)?V(this).j(V(N)):V(V(this).j(N));if(z(N))return V(this.j(V(N)));if(0>this.l(D)&&0>N.l(D))return y(this.m()*N.m());for(var S=this.g.length+N.g.length,A=[],k=0;k<2*S;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var O=0;O<N.g.length;O++){var M=this.i(k)>>>16,C=this.i(k)&65535,st=N.i(O)>>>16,Lt=N.i(O)&65535;A[2*k+2*O]+=C*Lt,G(A,2*k+2*O),A[2*k+2*O+1]+=M*Lt,G(A,2*k+2*O+1),A[2*k+2*O+1]+=C*st,G(A,2*k+2*O+1),A[2*k+2*O+2]+=M*st,G(A,2*k+2*O+2)}for(k=0;k<S;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=S;k<2*S;k++)A[k]=0;return new h(A,0)};function G(N,S){for(;(N[S]&65535)!=N[S];)N[S+1]+=N[S]>>>16,N[S]&=65535,S++}function ee(N,S){this.g=N,this.h=S}function re(N,S){if(L(S))throw Error("division by zero");if(L(N))return new ee(T,T);if(z(N))return S=re(V(N),S),new ee(V(S.g),V(S.h));if(z(S))return S=re(N,V(S)),new ee(V(S.g),S.h);if(30<N.g.length){if(z(N)||z(S))throw Error("slowDivide_ only works with positive integers.");for(var A=I,k=S;0>=k.l(N);)A=Ie(A),k=Ie(k);var O=_e(A,1),M=_e(k,1);for(k=_e(k,2),A=_e(A,2);!L(k);){var C=M.add(k);0>=C.l(N)&&(O=O.add(A),M=C),k=_e(k,1),A=_e(A,1)}return S=W(N,O.j(S)),new ee(O,S)}for(O=T;0<=N.l(S);){for(A=Math.max(1,Math.floor(N.m()/S.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),M=y(A),C=M.j(S);z(C)||0<C.l(N);)A-=k,M=y(A),C=M.j(S);L(M)&&(M=I),O=O.add(M),N=W(N,C)}return new ee(O,N)}n.A=function(N){return re(this,N).h},n.and=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],k=0;k<S;k++)A[k]=this.i(k)&N.i(k);return new h(A,this.h&N.h)},n.or=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],k=0;k<S;k++)A[k]=this.i(k)|N.i(k);return new h(A,this.h|N.h)},n.xor=function(N){for(var S=Math.max(this.g.length,N.g.length),A=[],k=0;k<S;k++)A[k]=this.i(k)^N.i(k);return new h(A,this.h^N.h)};function Ie(N){for(var S=N.g.length+1,A=[],k=0;k<S;k++)A[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(A,N.h)}function _e(N,S){var A=S>>5;S%=32;for(var k=N.g.length-A,O=[],M=0;M<k;M++)O[M]=0<S?N.i(M+A)>>>S|N.i(M+A+1)<<32-S:N.i(M+A);return new h(O,N.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,_v=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,ds=h}).apply(typeof _y<"u"?_y:typeof self<"u"?self:typeof window<"u"?window:{});var Uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vv,$a,Ev,Yu,Zd,wv,Tv,Iv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uu=="object"&&Uu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var U=u[w];if(!(U in _))break e;_=_[U]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,w=!1,U={next:function(){if(!w&&_<u.length){var $=_++;return{value:m($,u[$]),done:!1}}return w=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,w),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,I.apply(null,arguments)}function D(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function L(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,U,$){for(var te=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)te[Be-2]=arguments[Be];return m.prototype[U].apply(w,te)}}function z(u){const m=u.length;if(0<m){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function V(u,m){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const U=u.length||0,$=w.length||0;u.length=U+$;for(let te=0;te<$;te++)u[U+te]=w[te]}else u.push(w)}}class W{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function G(u){return/^[\s\xa0]*$/.test(u)}function ee(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function re(u){return re[" "](u),u}re[" "]=function(){};var Ie=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function _e(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,m){let _,w;for(let U=1;U<arguments.length;U++){w=arguments[U];for(_ in w)u[_]=w[_];for(let $=0;$<A.length;$++)_=A[$],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function O(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function M(u){f.setTimeout(()=>{throw u},0)}function C(){var u=pe;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class st{constructor(){this.h=this.g=null}add(m,_){const w=Lt.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var Lt=new W(()=>new Vt,u=>u.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let je,ne=!1,pe=new st,oe=()=>{const u=f.Promise.resolve(void 0);je=()=>{u.then(b)}};var b=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){M(_)}var m=Lt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ne=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,m),f.removeEventListener("test",_,m)}catch{}return u}();function Ae(u,m){if(de.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Ie){e:{try{re(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}L(Ae,de);var De={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,m,_,w,U){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=U,this.key=++Ue,this.da=this.fa=!1}function Et(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function fr(u){this.src=u,this.g={},this.h=0}fr.prototype.add=function(u,m,_,w,U){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var te=$r(u,m,w,U);return-1<te?(m=u[te],_||(m.fa=!1)):(m=new $e(m,this.src,$,!!w,U),m.fa=_,u.push(m)),m};function Ss(u,m){var _=m.type;if(_ in u.g){var w=u.g[_],U=Array.prototype.indexOf.call(w,m,void 0),$;($=0<=U)&&Array.prototype.splice.call(w,U,1),$&&(Et(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function $r(u,m,_,w){for(var U=0;U<u.length;++U){var $=u[U];if(!$.da&&$.listener==m&&$.capture==!!_&&$.ha==w)return U}return-1}var Vi="closure_lm_"+(1e6*Math.random()|0),Rs={};function zo(u,m,_,w,U){if(Array.isArray(m)){for(var $=0;$<m.length;$++)zo(u,m[$],_,w,U);return null}return _=Wo(_),u&&u[Me]?u.K(m,_,y(w)?!!w.capture:!!w,U):$o(u,m,_,!1,w,U)}function $o(u,m,_,w,U,$){if(!m)throw Error("Invalid event type");var te=y(U)?!!U.capture:!!U,Be=Cs(u);if(Be||(u[Vi]=Be=new fr(u)),_=Be.add(m,_,w,te,$),_.proxy)return _;if(w=El(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Re||(U=te),U===void 0&&(U=!1),u.addEventListener(m.toString(),w,U);else if(u.attachEvent)u.attachEvent(mr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function El(){function u(_){return m.call(u.src,u.listener,_)}const m=Ho;return u}function As(u,m,_,w,U){if(Array.isArray(m))for(var $=0;$<m.length;$++)As(u,m[$],_,w,U);else w=y(w)?!!w.capture:!!w,_=Wo(_),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&($=u.g[m],_=$r($,_,w,U),-1<_&&(Et($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete u.g[m],u.h--)))):u&&(u=Cs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=$r(m,_,w,U)),(_=-1<u?m[u]:null)&&pr(_))}function pr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])Ss(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(mr(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=Cs(m))?(Ss(_,u),_.h==0&&(_.src=null,m[Vi]=null)):Et(u)}}}function mr(u){return u in Rs?Rs[u]:Rs[u]="on"+u}function Ho(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var _=u.listener,w=u.ha||u.src;u.fa&&pr(u),u=_.call(w,m)}return u}function Cs(u){return u=u[Vi],u instanceof fr?u:null}var Ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wo(u){return typeof u=="function"?u:(u[Ps]||(u[Ps]=function(m){return u.handleEvent(m)}),u[Ps])}function dt(){K.call(this),this.i=new fr(this),this.M=this,this.F=null}L(dt,K),dt.prototype[Me]=!0,dt.prototype.removeEventListener=function(u,m,_,w){As(this,u,m,_,w)};function ft(u,m){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new de(m,u);else if(m instanceof de)m.target=m.target||u;else{var U=m;m=new de(w,u),k(m,U)}if(U=!0,_)for(var $=_.length-1;0<=$;$--){var te=m.g=_[$];U=gr(te,w,!0,m)&&U}if(te=m.g=u,U=gr(te,w,!0,m)&&U,U=gr(te,w,!1,m)&&U,_)for($=0;$<_.length;$++)te=m.g=_[$],U=gr(te,w,!1,m)&&U}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],w=0;w<_.length;w++)Et(_[w]);delete u.g[m],u.h--}}this.F=null},dt.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},dt.prototype.L=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function gr(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,$=0;$<m.length;++$){var te=m[$];if(te&&!te.da&&te.capture==_){var Be=te.listener,pt=te.ha||te.src;te.fa&&Ss(u.i,te),U=Be.call(pt,w)!==!1&&U}}return U&&!w.defaultPrevented}function qo(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function Hr(u){u.g=qo(()=>{u.g=null,u.i&&(u.i=!1,Hr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class bi extends K{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Hr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mi(u){K.call(this),this.h=u,this.g={}}L(Mi,K);var Ko=[];function Go(u){_e(u.g,function(m,_){this.g.hasOwnProperty(_)&&pr(m)},u),u.g={}}Mi.prototype.N=function(){Mi.aa.N.call(this),Go(this)},Mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qo=f.JSON.stringify,Xo=f.JSON.parse,Yo=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Ui(){}Ui.prototype.h=null;function ks(u){return u.h||(u.h=u.i())}function Ns(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gn(){de.call(this,"d")}L(Gn,de);function xs(){de.call(this,"c")}L(xs,de);var Qn={},Jo=null;function Fi(){return Jo=Jo||new dt}Qn.La="serverreachability";function Zo(u){de.call(this,Qn.La,u)}L(Zo,de);function yr(u){const m=Fi();ft(m,new Zo(m))}Qn.STAT_EVENT="statevent";function ea(u,m){de.call(this,Qn.STAT_EVENT,u),this.stat=m}L(ea,de);function ot(u){const m=Fi();ft(m,new ea(m,u))}Qn.Ma="timingevent";function Ds(u,m){de.call(this,Qn.Ma,u),this.size=m}L(Ds,de);function Cn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function Bi(){this.g=!0}Bi.prototype.xa=function(){this.g=!1};function ji(u,m,_,w,U,$){u.info(function(){if(u.g)if($)for(var te="",Be=$.split("&"),pt=0;pt<Be.length;pt++){var Oe=Be[pt].split("=");if(1<Oe.length){var wt=Oe[0];Oe=Oe[1];var ut=wt.split("_");te=2<=ut.length&&ut[1]=="type"?te+(wt+"="+Oe+"&"):te+(wt+"=redacted&")}}else te=null;else te=$;return"XMLHTTP REQ ("+w+") [attempt "+U+"]: "+m+`
`+_+`
`+te})}function Os(u,m,_,w,U,$,te){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+U+"]: "+m+`
`+_+`
`+$+" "+te})}function Pn(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Qc(u,_)+(w?" "+w:"")})}function ta(u,m){u.info(function(){return"TIMEOUT: "+m})}Bi.prototype.info=function(){};function Qc(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var U=w[1];if(Array.isArray(U)&&!(1>U.length)){var $=U[0];if($!="noop"&&$!="stop"&&$!="close")for(var te=1;te<U.length;te++)U[te]=""}}}}return Qo(_)}catch{return m}}var Ls={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kn;function zi(){}L(zi,Ui),zi.prototype.g=function(){return new XMLHttpRequest},zi.prototype.i=function(){return{}},kn=new zi;function Nn(u,m,_,w){this.j=u,this.i=m,this.l=_,this.R=w||1,this.U=new Mi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tl}function Tl(){this.i=null,this.g="",this.h=!1}var na={},Vs={};function bs(u,m,_){u.L=1,u.v=Qr(an(m)),u.m=_,u.P=!0,ra(u,null)}function ra(u,m){u.F=Date.now(),He(u),u.A=an(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Yr(_.i,"t",w),u.C=0,_=u.j.J,u.h=new Tl,u.g=Bl(u.j,_?m:null,!u.m),0<u.O&&(u.M=new bi(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,w=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(Ko[0]=U.toString()),U=Ko);for(var $=0;$<U.length;$++){var te=zo(_,U[$],w||m.handleEvent,!1,m.h||m);if(!te)break;m.g[te.key]=te}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),yr(),ji(u.i,u.u,u.A,u.l,u.R,u.m)}Nn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Xt(u)==3?m.j():this.Y(u)},Nn.prototype.Y=function(u){try{if(u==this.g)e:{const ut=Xt(this.g);var m=this.g.Ba();const vn=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||ua(this.g)))){this.J||ut!=4||m==7||(m==8||0>=vn?yr(3):yr(2)),$i(this);var _=this.g.Z();this.X=_;t:if(Il(this)){var w=ua(this.g);u="";var U=w.length,$=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),Wr(this);var te="";break t}this.h.i=new f.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!($&&m==U-1)});w.length=0,this.h.g+=u,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=_==200,Os(this.i,this.u,this.A,this.l,this.R,ut,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,pt=this.g;if((Be=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Be)){var Oe=Be;break t}}Oe=null}if(_=Oe)Pn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ia(this,_);else{this.o=!1,this.s=3,ot(12),yn(this),Wr(this);break e}}if(this.P){_=!0;let un;for(;!this.J&&this.C<te.length;)if(un=Xc(this,te),un==Vs){ut==4&&(this.s=4,ot(14),_=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(un==na){this.s=4,ot(15),Pn(this.i,this.l,te,"[Invalid Chunk]"),_=!1;break}else Pn(this.i,this.l,un,null),ia(this,un);if(Il(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||te.length!=0||this.h.h||(this.s=1,ot(16),_=!1),this.o=this.o&&_,!_)Pn(this.i,this.l,te,"[Invalid Chunked Response]"),yn(this),Wr(this);else if(0<te.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),ha(wt),wt.M=!0,ot(11))}}else Pn(this.i,this.l,te,null),ia(this,te);ut==4&&yn(this),this.o&&!this.J&&(ut==4?Ks(this.j,this):(this.o=!1,He(this)))}else zs(this.g),_==400&&0<te.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),yn(this),Wr(this)}}}catch{}finally{}};function Il(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Xc(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?Vs:(_=Number(m.substring(_,w)),isNaN(_)?na:(w+=1,w+_>m.length?Vs:(m=m.slice(w,w+_),u.C=w+_,m)))}Nn.prototype.cancel=function(){this.J=!0,yn(this)};function He(u){u.S=Date.now()+u.I,Sl(u,u.I)}function Sl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Cn(I(u.ba,u),m)}function $i(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Nn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ta(this.i,this.A),this.L!=2&&(yr(),ot(17)),yn(this),this.s=2,Wr(this)):Sl(this,this.S-u)};function Wr(u){u.j.G==0||u.J||Ks(u.j,u)}function yn(u){$i(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Go(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ia(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Ht(_.h,u))){if(!u.K&&Ht(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var U=w;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)qs(_),Vn(_);else break e;Ws(_),ot(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=Cn(I(_.Za,_),6e3));if(1>=Al(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Tr(_,11)}else if((u.K||_.g==u)&&qs(_),!G(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let Oe=U[m];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const wt=Oe[3];wt!=null&&(_.la=wt,_.j.info("VER="+_.la));const ut=Oe[4];ut!=null&&(_.Aa=ut,_.j.info("SVER="+_.Aa));const vn=Oe[5];vn!=null&&typeof vn=="number"&&0<vn&&(w=1.5*vn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const un=u.g;if(un){const Xi=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xi){var $=w.h;$.g||Xi.indexOf("spdy")==-1&&Xi.indexOf("quic")==-1&&Xi.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(sa($,$.h),$.h=null))}if(w.D){const Qs=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;Qs&&(w.ya=Qs,ze(w.I,w.D,Qs))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var te=u;if(w.qa=Fl(w,w.J?w.ia:null,w.W),te.K){Cl(w.h,te);var Be=te,pt=w.L;pt&&(Be.I=pt),Be.B&&($i(Be),He(Be)),w.g=te}else Qi(w);0<_.i.length&&Zn(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Tr(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Tr(_,7):Ct(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}yr(4)}catch{}}var Rl=class{constructor(u,m){this.g=u,this.map=m}};function Hi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function on(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Al(u){return u.h?1:u.g?u.g.size:0}function Ht(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function sa(u,m){u.g?u.g.add(m):u.h=m}function Cl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Hi.prototype.cancel=function(){if(this.i=Pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Pl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return z(u.i)}function Ms(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,w=0;w<_;w++)m.push(u[w]);return m}m=[],_=0;for(w in u)m[_++]=u[w];return m}function Us(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const w in u)m[_++]=w;return m}}}function qr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Us(u),w=Ms(u),U=w.length,$=0;$<U;$++)m.call(void 0,w[$],_&&_[$],u)}var Wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yc(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),U=null;if(0<=w){var $=u[_].substring(0,w);U=u[_].substring(w+1)}else $=u[_];m($,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function _r(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _r){this.h=u.h,qi(this,u.j),this.o=u.o,this.g=u.g,Kr(this,u.s),this.l=u.l;var m=u.i,_=new Xn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Gr(this,_),this.m=u.m}else u&&(m=String(u).match(Wi))?(this.h=!1,qi(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),Kr(this,m[4]),this.l=Ne(m[5]||"",!0),Gr(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}_r.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Xr(m,Fs,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Xr(m,Fs,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Xr(_,_.charAt(0)=="/"?xl:Nl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Xr(_,oa)),u.join("")};function an(u){return new _r(u)}function qi(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Kr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Gr(u,m,_){m instanceof Xn?(u.i=m,Yn(u.i,u.h)):(_||(m=Xr(m,Dl)),u.i=new Xn(m,u.h))}function ze(u,m,_){u.i.set(m,_)}function Qr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Xr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,kl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function kl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Fs=/[#\/\?@]/g,Nl=/[#\?:]/g,xl=/[#\?]/g,Dl=/[#\?@]/g,oa=/#/g;function Xn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function At(u){u.g||(u.g=new Map,u.h=0,u.i&&Yc(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=Xn.prototype,n.add=function(u,m){At(this),this.i=null,u=_n(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function xn(u,m){At(u),m=_n(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Dn(u,m){return At(u),m=_n(u,m),u.g.has(m)}n.forEach=function(u,m){At(this),this.g.forEach(function(_,w){_.forEach(function(U){u.call(m,U,w,this)},this)},this)},n.na=function(){At(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let w=0;w<m.length;w++){const U=u[w];for(let $=0;$<U.length;$++)_.push(m[w])}return _},n.V=function(u){At(this);let m=[];if(typeof u=="string")Dn(this,u)&&(m=m.concat(this.g.get(_n(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return At(this),this.i=null,u=_n(this,u),Dn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Yr(u,m,_){xn(u,m),0<_.length&&(u.i=null,u.g.set(_n(u,m),z(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var w=m[_];const $=encodeURIComponent(String(w)),te=this.V(w);for(w=0;w<te.length;w++){var U=$;te[w]!==""&&(U+="="+encodeURIComponent(String(te[w]))),u.push(U)}}return this.i=u.join("&")};function _n(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Yn(u,m){m&&!u.j&&(At(u),u.i=null,u.g.forEach(function(_,w){var U=w.toLowerCase();w!=U&&(xn(this,w),Yr(this,U,_))},u)),u.j=m}function Jc(u,m){const _=new Bi;if(f.Image){const w=new Image;w.onload=D(Qt,_,"TestLoadImage: loaded",!0,m,w),w.onerror=D(Qt,_,"TestLoadImage: error",!1,m,w),w.onabort=D(Qt,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=D(Qt,_,"TestLoadImage: timeout",!1,m,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function Ol(u,m){const _=new Bi,w=new AbortController,U=setTimeout(()=>{w.abort(),Qt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then($=>{clearTimeout(U),$.ok?Qt(_,"TestPingServer: ok",!0,m):Qt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Qt(_,"TestPingServer: error",!1,m)})}function Qt(u,m,_,w,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),w(_)}catch{}}function Zc(){this.g=new Yo}function Ll(u,m,_){const w=_||"";try{qr(u,function(U,$){let te=U;y(U)&&(te=Qo(U)),m.push(w+$+"="+encodeURIComponent(te))})}catch(U){throw m.push(w+"type="+encodeURIComponent("_badmap")),U}}function vr(u){this.l=u.Ub||null,this.j=u.eb||!1}L(vr,Ui),vr.prototype.g=function(){return new Ki(this.l,this.j)},vr.prototype.i=function(u){return function(){return u}}({});function Ki(u,m){dt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(Ki,dt),n=Ki.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Ln(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?On(this):Ln(this),this.readyState==3&&Vl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,On(this))},n.Qa=function(u){this.g&&(this.response=u,On(this))},n.ga=function(){this.g&&On(this)};function On(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ln(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Ln(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Er(u){let m="";return _e(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function Jr(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=Er(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):ze(u,m,_))}function Ge(u){dt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(Ge,dt);var eh=/^https?$/i,aa=["POST","PUT"];n=Ge.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kn.g(),this.v=this.o?ks(this.o):ks(kn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){Gi(this,$);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var U in w)_.set(U,w[U]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const $ of w.keys())_.set($,w.get($));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),U=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(aa,m,void 0))||w||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,te]of _)this.g.setRequestHeader($,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{js(this),this.u=!0,this.g.send(u),this.u=!1}catch($){Gi(this,$)}};function Gi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Bs(u),ln(u)}function Bs(u){u.A||(u.A=!0,ft(u,"complete"),ft(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ft(this,"complete"),ft(this,"abort"),ln(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ln(this,!0)),Ge.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?la(this):this.bb())},n.bb=function(){la(this)};function la(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Xt(u)!=4||u.Z()!=2)){if(u.u&&Xt(u)==4)qo(u.Ea,0,u);else if(ft(u,"readystatechange"),Xt(u)==4){u.h=!1;try{const te=u.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=te===0){var U=String(u.D).match(Wi)[1]||null;!U&&f.self&&f.self.location&&(U=f.self.location.protocol.slice(0,-1)),w=!eh.test(U?U.toLowerCase():"")}_=w}if(_)ft(u,"complete"),ft(u,"success");else{u.m=6;try{var $=2<Xt(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",Bs(u)}}finally{ln(u)}}}}function ln(u,m){if(u.g){js(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||ft(u,"ready");try{_.onreadystatechange=w}catch{}}}function js(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Xt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Xo(m)}};function ua(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function zs(u){const m={};u=(u.g&&2<=Xt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(G(u[w]))continue;var _=O(u[w]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=m[U]||[];m[U]=$,$.push(_)}N(m,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function ca(u){this.Aa=0,this.i=[],this.j=new Bi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jn("baseRetryDelayMs",5e3,u),this.cb=Jn("retryDelaySeedMs",1e4,u),this.Wa=Jn("forwardChannelMaxRetries",2,u),this.wa=Jn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Hi(u&&u.concurrentRequestLimit),this.Da=new Zc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ca.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,w){ot(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Fl(this,null,this.W),Zn(this)};function Ct(u){if($s(u),u.G==3){var m=u.U++,_=an(u.I);if(ze(_,"SID",u.K),ze(_,"RID",m),ze(_,"TYPE","terminate"),wr(u,_),m=new Nn(u,u.j,m),m.L=2,m.v=Qr(an(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=m.v,_=!0),_||(m.g=Bl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),He(m)}Ul(u)}function Vn(u){u.g&&(ha(u),u.g.cancel(),u.g=null)}function $s(u){Vn(u),u.u&&(f.clearTimeout(u.u),u.u=null),qs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Zn(u){if(!on(u.h)&&!u.s){u.s=!0;var m=u.Ga;je||oe(),ne||(je(),ne=!0),pe.add(m,u),u.B=0}}function th(u,m){return Al(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Cn(I(u.Ga,u,m),Ml(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new Nn(this,this.j,u);let $=this.o;if(this.S&&($?($=S($),k($,this.S)):$=this.S),this.m!==null||this.O||(U.H=$,$=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Zr(this,U,m),_=an(this.I),ze(_,"RID",u),ze(_,"CVER",22),this.D&&ze(_,"X-HTTP-Session-Id",this.D),wr(this,_),$&&(this.O?m="headers="+encodeURIComponent(String(Er($)))+"&"+m:this.m&&Jr(_,this.m,$)),sa(this.h,U),this.Ua&&ze(_,"TYPE","init"),this.P?(ze(_,"$req",m),ze(_,"SID","null"),U.T=!0,bs(U,_,null)):bs(U,_,m),this.G=2}}else this.G==3&&(u?Hs(this,u):this.i.length==0||on(this.h)||Hs(this))};function Hs(u,m){var _;m?_=m.l:_=u.U++;const w=an(u.I);ze(w,"SID",u.K),ze(w,"RID",_),ze(w,"AID",u.T),wr(u,w),u.m&&u.o&&Jr(w,u.m,u.o),_=new Nn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Zr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),sa(u.h,_),bs(_,w,m)}function wr(u,m){u.H&&_e(u.H,function(_,w){ze(m,w,_)}),u.l&&qr({},function(_,w){ze(m,w,_)})}function Zr(u,m,_){_=Math.min(u.i.length,_);var w=u.l?I(u.l.Na,u.l,u):null;e:{var U=u.i;let $=-1;for(;;){const te=["count="+_];$==-1?0<_?($=U[0].g,te.push("ofs="+$)):$=0:te.push("ofs="+$);let Be=!0;for(let pt=0;pt<_;pt++){let Oe=U[pt].g;const wt=U[pt].map;if(Oe-=$,0>Oe)$=Math.max(0,U[pt].g-100),Be=!1;else try{Ll(wt,te,"req"+Oe+"_")}catch{w&&w(wt)}}if(Be){w=te.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,w}function Qi(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;je||oe(),ne||(je(),ne=!0),pe.add(m,u),u.v=0}}function Ws(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Cn(I(u.Fa,u),Ml(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,bl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Cn(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Vn(this),bl(this))};function ha(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function bl(u){u.g=new Nn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=an(u.qa);ze(m,"RID","rpc"),ze(m,"SID",u.K),ze(m,"AID",u.T),ze(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(m,"TO",u.ja),ze(m,"TYPE","xmlhttp"),wr(u,m),u.m&&u.o&&Jr(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Qr(an(m)),_.m=null,_.P=!0,ra(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Vn(this),Ws(this),ot(19))};function qs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Ks(u,m){var _=null;if(u.g==m){qs(u),ha(u),u.g=null;var w=2}else if(Ht(u.h,m))_=m.D,Cl(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;w=Fi(),ft(w,new Ds(w,_)),Zn(u)}else Qi(u);else if(U=m.s,U==3||U==0&&0<m.X||!(w==1&&th(u,m)||w==2&&Ws(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),U){case 1:Tr(u,5);break;case 4:Tr(u,10);break;case 3:Tr(u,6);break;default:Tr(u,2)}}}function Ml(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Tr(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),w=u.Xa;const U=!w;w=new _r(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||qi(w,"https"),Qr(w),U?Jc(w.toString(),_):Ol(w.toString(),_)}else ot(2);u.G=0,u.l&&u.l.sa(m),Ul(u),$s(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Ul(u){if(u.G=0,u.ka=[],u.l){const m=Pl(u.h);(m.length!=0||u.i.length!=0)&&(V(u.ka,m),V(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function Fl(u,m,_){var w=_ instanceof _r?an(_):new _r(_);if(w.g!="")m&&(w.g=m+"."+w.g),Kr(w,w.s);else{var U=f.location;w=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var $=new _r(null);w&&qi($,w),m&&($.g=m),U&&Kr($,U),_&&($.l=_),w=$}return _=u.D,m=u.ya,_&&m&&ze(w,_,m),ze(w,"VER",u.la),wr(u,w),w}function Bl(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ge(new vr({eb:_})):new Ge(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function da(){}n=da.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Gs(){}Gs.prototype.g=function(u,m){return new Wt(u,m)};function Wt(u,m){dt.call(this),this.g=new ca(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!G(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!G(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new er(this)}L(Wt,dt),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){Ct(this.g)},Wt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Qo(u),u=_);m.i.push(new Rl(m.Ya++,u)),m.G==3&&Zn(m)},Wt.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,Wt.aa.N.call(this)};function jl(u){Gn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}L(jl,Gn);function zl(){xs.call(this),this.status=1}L(zl,xs);function er(u){this.g=u}L(er,da),er.prototype.ua=function(){ft(this.g,"a")},er.prototype.ta=function(u){ft(this.g,new jl(u))},er.prototype.sa=function(u){ft(this.g,new zl)},er.prototype.ra=function(){ft(this.g,"b")},Gs.prototype.createWebChannel=Gs.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,Iv=function(){return new Gs},Tv=function(){return Fi()},wv=Qn,Zd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ls.NO_ERROR=0,Ls.TIMEOUT=8,Ls.HTTP_ERROR=6,Yu=Ls,wl.COMPLETE="complete",Ev=wl,Ns.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,$a=Ns,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,vv=Ge}).apply(typeof Uu<"u"?Uu:typeof self<"u"?self:typeof window<"u"?window:{});const vy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new Rf("@firebase/firestore");function yo(){return _s.logLevel}function ae(n,...e){if(_s.logLevel<=Pe.DEBUG){const t=e.map(Ff);_s.debug(`Firestore (${Uo}): ${n}`,...t)}}function Br(n,...e){if(_s.logLevel<=Pe.ERROR){const t=e.map(Ff);_s.error(`Firestore (${Uo}): ${n}`,...t)}}function Ao(n,...e){if(_s.logLevel<=Pe.WARN){const t=e.map(Ff);_s.warn(`Firestore (${Uo}): ${n}`,...t)}}function Ff(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n="Unexpected state"){const e=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: `+n;throw Br(e),new Error(e)}function Fe(n,e){n||we()}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends dr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class O1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(jt.UNAUTHENTICATED))}shutdown(){}}class L1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class V1{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new fs;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new fs,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},f=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>f(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new fs)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string"),new Sv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new jt(e)}}class b1{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class M1{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new b1(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class U1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Fe(this.o===void 0);const i=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string"),this.R=t.token,new U1(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=B1(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function xe(n,e){return n<e?-1:n>e?1:0}function Co(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new _t(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new fe(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new _t(0,0))}static max(){return new Te(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t,i){t===void 0?t=0:t>e.length&&we(),i===void 0?i=e.length-t:i>e.length-t&&we(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return nl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nl?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Xe extends nl{construct(e,t,i){return new Xe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new fe(Y.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Xe(t)}static emptyPath(){return new Xe([])}}const j1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends nl{construct(e,t,i){return new Dt(e,t,i)}static isValidIdentifier(e){return j1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new fe(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new fe(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new fe(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new fe(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(t)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Xe.fromString(e))}static fromName(e){return new ye(Xe.fromString(e).popFirst(5))}static empty(){return new ye(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Xe(e.slice()))}}function z1(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(i===1e9?new _t(t+1,0):new _t(t,i));return new Ri(o,ye.empty(),e)}function $1(n){return new Ri(n.readTime,n.key,-1)}class Ri{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ri(Te.min(),ye.empty(),-1)}static max(){return new Ri(Te.max(),ye.empty(),-1)}}function H1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:xe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(n){if(n.code!==Y.FAILED_PRECONDITION||n.message!==W1)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):q.reject(t)}static resolve(e){return new q((t,i)=>{t(e)})}static reject(e){return new q((t,i)=>{i(e)})}static waitFor(e){return new q((t,i)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},p=>i(p))}),h=!0,l===o&&t()})}static or(e){let t=q.resolve(!1);for(const i of e)t=t.next(o=>o?q.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new q((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(E=>{h[y]=E,++f,f===l&&i(h)},E=>o(E))}})}static doWhile(e,t){return new q((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function K1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Bo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xc.oe=-1;function Dc(n){return n==null}function fc(n){return n===0&&1/n==-1/0}function G1(n){return typeof n=="number"&&Number.isInteger(n)&&!fc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ey(e)),e=X1(n.get(t),e);return Ey(e)}function X1(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Ey(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Oi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Av(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||xt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fu(this.root,e,this.comparator,!0)}}class Fu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??xt.RED,this.left=o??xt.EMPTY,this.right=l??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new xt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return xt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,t,i,o,l){return this}insert(e,t,i){return new xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ty(this.data.getIterator())}getIteratorFrom(e){return new Ty(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Ty{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new fn([])}unionWith(e){let t=new vt(Dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Cv("Invalid base64 string: "+l):l}}(e);return new Ot(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const Y1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(n){if(Fe(!!n),typeof n=="string"){let e=0;const t=Y1.exec(n);if(Fe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:lt(n.seconds),nanos:lt(n.nanos)}}function lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ci(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Oc(n){const e=n.mapValue.fields.__previous_value__;return Bf(e)?Oc(e):e}function rl(n){const e=Ai(n.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,t,i,o,l,h,f,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y}}class il{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new il("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof il&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Bf(n)?4:eA(n)?9007199254740991:Z1(n)?10:11:we()}function ur(n,e){if(n===e)return!0;const t=Pi(n);if(t!==Pi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return rl(n).isEqual(rl(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ai(o.timestampValue),f=Ai(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Ci(o.bytesValue).isEqual(Ci(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return lt(o.geoPointValue.latitude)===lt(l.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return lt(o.integerValue)===lt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=lt(o.doubleValue),f=lt(l.doubleValue);return h===f?fc(h)===fc(f):isNaN(h)&&isNaN(f)}return!1}(n,e);case 9:return Co(n.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(wy(h)!==wy(f))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(f[p]===void 0||!ur(h[p],f[p])))return!1;return!0}(n,e);default:return we()}}function sl(n,e){return(n.values||[]).find(t=>ur(t,e))!==void 0}function Po(n,e){if(n===e)return 0;const t=Pi(n),i=Pi(e);if(t!==i)return xe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(n.booleanValue,e.booleanValue);case 2:return function(l,h){const f=lt(l.integerValue||l.doubleValue),p=lt(h.integerValue||h.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1}(n,e);case 3:return Iy(n.timestampValue,e.timestampValue);case 4:return Iy(rl(n),rl(e));case 5:return xe(n.stringValue,e.stringValue);case 6:return function(l,h){const f=Ci(l),p=Ci(h);return f.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),p=h.split("/");for(let y=0;y<f.length&&y<p.length;y++){const E=xe(f[y],p[y]);if(E!==0)return E}return xe(f.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const f=xe(lt(l.latitude),lt(h.latitude));return f!==0?f:xe(lt(l.longitude),lt(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Sy(n.arrayValue,e.arrayValue);case 10:return function(l,h){var f,p,y,E;const T=l.fields||{},I=h.fields||{},D=(f=T.value)===null||f===void 0?void 0:f.arrayValue,L=(p=I.value)===null||p===void 0?void 0:p.arrayValue,z=xe(((y=D==null?void 0:D.values)===null||y===void 0?void 0:y.length)||0,((E=L==null?void 0:L.values)===null||E===void 0?void 0:E.length)||0);return z!==0?z:Sy(D,L)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===Bu.mapValue&&h===Bu.mapValue)return 0;if(l===Bu.mapValue)return 1;if(h===Bu.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=h.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let T=0;T<p.length&&T<E.length;++T){const I=xe(p[T],E[T]);if(I!==0)return I;const D=Po(f[p[T]],y[E[T]]);if(D!==0)return D}return xe(p.length,E.length)}(n.mapValue,e.mapValue);default:throw we()}}function Iy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return xe(n,e);const t=Ai(n),i=Ai(e),o=xe(t.seconds,i.seconds);return o!==0?o:xe(t.nanos,i.nanos)}function Sy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Po(t[o],i[o]);if(l)return l}return xe(t.length,i.length)}function ko(n){return ef(n)}function ef(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ai(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ci(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=ef(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${ef(t.fields[h])}`;return o+"}"}(n.mapValue):we()}function Ju(n){switch(Pi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oc(n);return e?16+Ju(e):16;case 5:return 2*n.stringValue.length;case 6:return Ci(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+Ju(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return Oi(i.fields,(l,h)=>{o+=l.length+Ju(h)}),o}(n.mapValue);default:throw we()}}function tf(n){return!!n&&"integerValue"in n}function jf(n){return!!n&&"arrayValue"in n}function Ry(n){return!!n&&"nullValue"in n}function Ay(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zu(n){return!!n&&"mapValue"in n}function Z1(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ga(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Oi(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ga(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ga(n.arrayValue.values[t]);return e}return Object.assign({},n)}function eA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.value=e}static empty(){return new sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Zu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ga(t)}setAll(e){let t=Dt.emptyPath(),i={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Ga(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Zu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Zu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Oi(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new sn(Ga(this.value))}}function Pv(n){const e=[];return Oi(n.fields,(t,i)=>{const o=new Dt([t]);if(Zu(i)){const l=Pv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new zt(e,0,Te.min(),Te.min(),Te.min(),sn.empty(),0)}static newFoundDocument(e,t,i,o){return new zt(e,1,t,Te.min(),i,o,0)}static newNoDocument(e,t){return new zt(e,2,t,Te.min(),Te.min(),sn.empty(),0)}static newUnknownDocument(e,t){return new zt(e,3,t,Te.min(),Te.min(),sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t){this.position=e,this.inclusive=t}}function Cy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=ye.comparator(ye.fromName(h.referenceValue),t.key):i=Po(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Py(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ur(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t="asc"){this.field=e,this.dir=t}}function tA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{}class yt extends kv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new rA(e,t,i):t==="array-contains"?new oA(e,i):t==="in"?new aA(e,i):t==="not-in"?new lA(e,i):t==="array-contains-any"?new uA(e,i):new yt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new iA(e,i):new sA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Po(t,this.value)):t!==null&&Pi(this.value)===Pi(t)&&this.matchesComparison(Po(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cr extends kv{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new cr(e,t)}matches(e){return Nv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Nv(n){return n.op==="and"}function xv(n){return nA(n)&&Nv(n)}function nA(n){for(const e of n.filters)if(e instanceof cr)return!1;return!0}function nf(n){if(n instanceof yt)return n.field.canonicalString()+n.op.toString()+ko(n.value);if(xv(n))return n.filters.map(e=>nf(e)).join(",");{const e=n.filters.map(t=>nf(t)).join(",");return`${n.op}(${e})`}}function Dv(n,e){return n instanceof yt?function(i,o){return o instanceof yt&&i.op===o.op&&i.field.isEqual(o.field)&&ur(i.value,o.value)}(n,e):n instanceof cr?function(i,o){return o instanceof cr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,f)=>l&&Dv(h,o.filters[f]),!0):!1}(n,e):void we()}function Ov(n){return n instanceof yt?function(t){return`${t.field.canonicalString()} ${t.op} ${ko(t.value)}`}(n):n instanceof cr?function(t){return t.op.toString()+" {"+t.getFilters().map(Ov).join(" ,")+"}"}(n):"Filter"}class rA extends yt{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class iA extends yt{constructor(e,t){super(e,"in",t),this.keys=Lv("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sA extends yt{constructor(e,t){super(e,"not-in",t),this.keys=Lv("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Lv(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ye.fromName(i.referenceValue))}class oA extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return jf(t)&&sl(t.arrayValue,this.value)}}class aA extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&sl(this.value.arrayValue,t)}}class lA extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(sl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!sl(this.value.arrayValue,t)}}class uA extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!jf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>sl(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.ue=null}}function ky(n,e=null,t=[],i=[],o=null,l=null,h=null){return new cA(n,e,t,i,o,l,h)}function zf(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>nf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Dc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>ko(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>ko(i)).join(",")),e.ue=t}return e.ue}function $f(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!tA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Dv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Py(n.startAt,e.startAt)&&Py(n.endAt,e.endAt)}function rf(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function hA(n,e,t,i,o,l,h,f){return new Lc(n,e,t,i,o,l,h,f)}function Hf(n){return new Lc(n)}function Ny(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dA(n){return n.collectionGroup!==null}function Qa(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new vt(Dt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(f=f.add(y.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new mc(l,i))}),t.has(Dt.keyField().canonicalString())||e.ce.push(new mc(Dt.keyField(),i))}return e.ce}function ar(n){const e=Se(n);return e.le||(e.le=fA(e,Qa(n))),e.le}function fA(n,e){if(n.limitType==="F")return ky(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new mc(o.field,l)});const t=n.endAt?new pc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new pc(n.startAt.position,n.startAt.inclusive):null;return ky(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function sf(n,e,t){return new Lc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vc(n,e){return $f(ar(n),ar(e))&&n.limitType===e.limitType}function Vv(n){return`${zf(ar(n))}|lt:${n.limitType}`}function _o(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>Ov(o)).join(", ")}]`),Dc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>ko(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>ko(o)).join(",")),`Target(${i})`}(ar(n))}; limitType=${n.limitType})`}function bc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ye.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Qa(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(h,f,p){const y=Cy(h,f,p);return h.inclusive?y<=0:y<0}(i.startAt,Qa(i),o)||i.endAt&&!function(h,f,p){const y=Cy(h,f,p);return h.inclusive?y>=0:y>0}(i.endAt,Qa(i),o))}(n,e)}function pA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function bv(n){return(e,t)=>{let i=!1;for(const o of Qa(n)){const l=mA(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function mA(n,e,t){const i=n.field.isKeyField()?ye.comparator(e.key,t.key):function(l,h,f){const p=h.data.field(l),y=f.data.field(l);return p!==null&&y!==null?Po(p,y):we()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return we()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Oi(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return Av(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=new tt(ye.comparator);function jr(){return gA}const Mv=new tt(ye.comparator);function Ha(...n){let e=Mv;for(const t of n)e=e.insert(t.key,t);return e}function Uv(n){let e=Mv;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function hs(){return Xa()}function Fv(){return Xa()}function Xa(){return new Ts(n=>n.toString(),(n,e)=>n.isEqual(e))}const yA=new tt(ye.comparator),_A=new vt(ye.comparator);function ke(...n){let e=_A;for(const t of n)e=e.add(t);return e}const vA=new vt(xe);function EA(){return vA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fc(e)?"-0":e}}function Bv(n){return{integerValue:""+n}}function wA(n,e){return G1(e)?Bv(e):Wf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this._=void 0}}function TA(n,e,t){return n instanceof gc?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Bf(l)&&(l=Oc(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):n instanceof ol?zv(n,e):n instanceof al?$v(n,e):function(o,l){const h=jv(o,l),f=xy(h)+xy(o.Pe);return tf(h)&&tf(o.Pe)?Bv(f):Wf(o.serializer,f)}(n,e)}function IA(n,e,t){return n instanceof ol?zv(n,e):n instanceof al?$v(n,e):t}function jv(n,e){return n instanceof yc?function(i){return tf(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class gc extends Mc{}class ol extends Mc{constructor(e){super(),this.elements=e}}function zv(n,e){const t=Hv(e);for(const i of n.elements)t.some(o=>ur(o,i))||t.push(i);return{arrayValue:{values:t}}}class al extends Mc{constructor(e){super(),this.elements=e}}function $v(n,e){let t=Hv(e);for(const i of n.elements)t=t.filter(o=>!ur(o,i));return{arrayValue:{values:t}}}class yc extends Mc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function xy(n){return lt(n.integerValue||n.doubleValue)}function Hv(n){return jf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function SA(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof ol&&o instanceof ol||i instanceof al&&o instanceof al?Co(i.elements,o.elements,ur):i instanceof yc&&o instanceof yc?ur(i.Pe,o.Pe):i instanceof gc&&o instanceof gc}(n.transform,e.transform)}class RA{constructor(e,t){this.version=e,this.transformResults=t}}class Wn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Wn}static exists(e){return new Wn(void 0,e)}static updateTime(e){return new Wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ec(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Uc{}function Wv(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new qf(n.key,Wn.none()):new gl(n.key,n.data,Wn.none());{const t=n.data,i=sn.empty();let o=new vt(Dt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Li(n.key,i,new fn(o.toArray()),Wn.none())}}function AA(n,e,t){n instanceof gl?function(o,l,h){const f=o.value.clone(),p=Oy(o.fieldTransforms,l,h.transformResults);f.setAll(p),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(n,e,t):n instanceof Li?function(o,l,h){if(!ec(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Oy(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(qv(o)),p.setAll(f),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ya(n,e,t,i){return n instanceof gl?function(l,h,f,p){if(!ec(l.precondition,h))return f;const y=l.value.clone(),E=Ly(l.fieldTransforms,p,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Li?function(l,h,f,p){if(!ec(l.precondition,h))return f;const y=Ly(l.fieldTransforms,p,h),E=h.data;return E.setAll(qv(l)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,h,f){return ec(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(n,e,t)}function CA(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=jv(i.transform,o||null);l!=null&&(t===null&&(t=sn.empty()),t.set(i.field,l))}return t||null}function Dy(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Co(i,o,(l,h)=>SA(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class gl extends Uc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Li extends Uc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function qv(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Oy(n,e,t){const i=new Map;Fe(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,IA(h,f,t[o]))}return i}function Ly(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,TA(l,h,e))}return i}class qf extends Uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PA extends Uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&AA(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ya(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ya(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Fv();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const p=Wv(h,f);p!==null&&i.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Te.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,(t,i)=>Dy(t,i))&&Co(this.baseMutations,e.baseMutations,(t,i)=>Dy(t,i))}}class Kf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length);let o=function(){return yA}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Kf(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,Le;function DA(n){switch(n){default:return we();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0}}function Kv(n){if(n===void 0)return Br("GRPC error has no .code"),Y.UNKNOWN;switch(n){case ht.OK:return Y.OK;case ht.CANCELLED:return Y.CANCELLED;case ht.UNKNOWN:return Y.UNKNOWN;case ht.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case ht.INTERNAL:return Y.INTERNAL;case ht.UNAVAILABLE:return Y.UNAVAILABLE;case ht.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case ht.NOT_FOUND:return Y.NOT_FOUND;case ht.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case ht.ABORTED:return Y.ABORTED;case ht.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case ht.DATA_LOSS:return Y.DATA_LOSS;default:return we()}}(Le=ht||(ht={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=new ds([4294967295,4294967295],0);function Vy(n){const e=OA().encode(n),t=new _v;return t.update(e),new Uint8Array(t.digest())}function by(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ds([t,i],0),new ds([o,l],0)]}class Gf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Wa(`Invalid padding: ${t}`);if(i<0)throw new Wa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Wa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Wa(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=ds.fromNumber(this.Te)}Ee(e,t,i){let o=e.add(t.multiply(ds.fromNumber(i)));return o.compare(LA)===1&&(o=new ds([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Vy(e),[i,o]=by(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);if(!this.de(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Gf(l,o,t);return i.forEach(f=>h.insert(f)),h}insert(e){if(this.Te===0)return;const t=Vy(e),[i,o]=by(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,yl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Fc(Te.min(),o,new tt(xe),jr(),ke())}}class yl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new yl(i,t,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class Gv{constructor(e,t){this.targetId=e,this.me=t}}class Qv{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class My{constructor(){this.fe=0,this.ge=Uy(),this.pe=Ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ke(),t=ke(),i=ke();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:we()}}),new yl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Uy()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class VA{constructor(e){this.Le=e,this.Be=new Map,this.ke=jr(),this.qe=ju(),this.Qe=ju(),this.Ke=new tt(xe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:we()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(rf(l))if(i===0){const h=new ye(l.path);this.We(t,h,zt.newNoDocument(h,Te.min()))}else Fe(i===1);else{const h=this.Ze(t);if(h!==i){const f=this.Xe(e),p=f?this.et(f,e,h):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Ci(i).toUint8Array()}catch(p){if(p instanceof Cv)return Ao("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new Gf(h,o,l)}catch(p){return Ao(p instanceof Wa?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.Te===0?null:f}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.Le.nt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((l,h)=>{const f=this.Ye(h);if(f){if(l.current&&rf(f.target)){const p=new ye(f.target.path);this.st(p).has(h)||this.ot(h,p)||this.We(h,p,zt.newNoDocument(p,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let i=ke();this.Qe.forEach((l,h)=>{let f=!0;h.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(i=i.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new Fc(e,t,this.Ke,this.ke,i);return this.ke=jr(),this.qe=ju(),this.Qe=ju(),this.Ke=new tt(xe),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new My,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new vt(xe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new vt(xe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new My),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ju(){return new tt(ye.comparator)}function Uy(){return new tt(ye.comparator)}const bA={asc:"ASCENDING",desc:"DESCENDING"},MA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},UA={and:"AND",or:"OR"};class FA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function of(n,e){return n.useProto3Json||Dc(e)?e:{value:e}}function _c(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xv(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function BA(n,e){return _c(n,e.toTimestamp())}function lr(n){return Fe(!!n),Te.fromTimestamp(function(t){const i=Ai(t);return new _t(i.seconds,i.nanos)}(n))}function Qf(n,e){return af(n,e).canonicalString()}function af(n,e){const t=function(o){return new Xe(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Yv(n){const e=Xe.fromString(n);return Fe(n0(e)),e}function lf(n,e){return Qf(n.databaseId,e.path)}function Vd(n,e){const t=Yv(e);if(t.get(1)!==n.databaseId.projectId)throw new fe(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new fe(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(Zv(t))}function Jv(n,e){return Qf(n.databaseId,e)}function jA(n){const e=Yv(n);return e.length===4?Xe.emptyPath():Zv(e)}function uf(n){return new Xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Zv(n){return Fe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Fy(n,e,t){return{name:lf(n,e),fields:t.value.mapValue.fields}}function zA(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:we()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,E){return y.useProto3Json?(Fe(E===void 0||typeof E=="string"),Ot.fromBase64String(E||"")):(Fe(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Ot.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(y){const E=y.code===void 0?Y.UNKNOWN:Kv(y.code);return new fe(E,y.message||"")}(h);t=new Qv(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Vd(n,i.document.name),l=lr(i.document.updateTime),h=i.document.createTime?lr(i.document.createTime):Te.min(),f=new sn({mapValue:{fields:i.document.fields}}),p=zt.newFoundDocument(o,l,h,f),y=i.targetIds||[],E=i.removedTargetIds||[];t=new tc(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Vd(n,i.document),l=i.readTime?lr(i.readTime):Te.min(),h=zt.newNoDocument(o,l),f=i.removedTargetIds||[];t=new tc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Vd(n,i.document),l=i.removedTargetIds||[];t=new tc([],l,o,null)}else{if(!("filter"in e))return we();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new xA(o,l),f=i.targetId;t=new Gv(f,h)}}return t}function $A(n,e){let t;if(e instanceof gl)t={update:Fy(n,e.key,e.value)};else if(e instanceof qf)t={delete:lf(n,e.key)};else if(e instanceof Li)t={update:Fy(n,e.key,e.data),updateMask:JA(e.fieldMask)};else{if(!(e instanceof PA))return we();t={verify:lf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,h){const f=h.transform;if(f instanceof gc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ol)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof al)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof yc)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw we()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:BA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we()}(n,e.precondition)),t}function HA(n,e){return n&&n.length>0?(Fe(e!==void 0),n.map(t=>function(o,l){let h=o.updateTime?lr(o.updateTime):lr(l);return h.isEqual(Te.min())&&(h=lr(l)),new RA(h,o.transformResults||[])}(t,e))):[]}function WA(n,e){return{documents:[Jv(n,e.path)]}}function qA(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Jv(n,o);const l=function(y){if(y.length!==0)return t0(cr.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(E=>function(I){return{field:vo(I.field),direction:QA(I.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=of(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function KA(n){let e=jA(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const I=e0(T);return I instanceof cr&&xv(I)?I.getFilters():[I]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(I=>function(L){return new mc(Eo(L.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(I))}(t.orderBy));let f=null;t.limit&&(f=function(T){let I;return I=typeof T=="object"?T.value:T,Dc(I)?null:I}(t.limit));let p=null;t.startAt&&(p=function(T){const I=!!T.before,D=T.values||[];return new pc(D,I)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const I=!T.before,D=T.values||[];return new pc(D,I)}(t.endAt)),hA(e,o,h,l,f,"F",p,y)}function GA(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function e0(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Eo(t.unaryFilter.field);return yt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Eo(t.unaryFilter.field);return yt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Eo(t.unaryFilter.field);return yt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Eo(t.unaryFilter.field);return yt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return we()}}(n):n.fieldFilter!==void 0?function(t){return yt.create(Eo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return cr.create(t.compositeFilter.filters.map(i=>e0(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we()}}(t.compositeFilter.op))}(n):we()}function QA(n){return bA[n]}function XA(n){return MA[n]}function YA(n){return UA[n]}function vo(n){return{fieldPath:n.canonicalString()}}function Eo(n){return Dt.fromServerFormat(n.fieldPath)}function t0(n){return n instanceof yt?function(t){if(t.op==="=="){if(Ay(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NAN"}};if(Ry(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ay(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NAN"}};if(Ry(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vo(t.field),op:XA(t.op),value:t.value}}}(n):n instanceof cr?function(t){const i=t.getFilters().map(o=>t0(o));return i.length===1?i[0]:{compositeFilter:{op:YA(t.op),filters:i}}}(n):we()}function JA(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function n0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t,i,o,l=Te.min(),h=Te.min(),f=Ot.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new _i(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e){this.ht=e}}function eC(n){const e=KA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?sf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this.ln=new nC}addToCollectionParentIndex(e,t){return this.ln.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Ri.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Ri.min())}updateCollectionGroup(e,t,i){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class nC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new vt(Xe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new vt(Xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rn{static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(41943040,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new No(0)}static Qn(){return new No(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy([n,e],[t,i]){const o=xe(n,t);return o===0?xe(e,i):o}class rC{constructor(e){this.Gn=e,this.buffer=new vt(jy),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();jy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Bo(t)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Fo(t)}await this.Yn(3e5)})}}class sC{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return q.resolve(xc.oe);const i=new rC(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(By)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),By):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,h,f,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,f=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),yo()<=Pe.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function oC(n,e){return new sC(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(){this.changes=new Ts(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Ya(i.mutation,o,fn.empty(),_t.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,ke()).next(()=>i))}getLocalViewOfDocuments(e,t,i=ke()){const o=hs();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=Ha();return l.forEach((f,p)=>{h=h.insert(f,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=hs();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,ke()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,i,o){let l=jr();const h=Xa(),f=function(){return Xa()}();return t.forEach((p,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Li)?l=l.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),Ya(E.mutation,y,E.mutation.getFieldMask(),_t.now())):h.set(y.key,fn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,E)=>h.set(y,E)),t.forEach((y,E)=>{var T;return f.set(y,new lC(E,(T=h.get(y))!==null&&T!==void 0?T:null))}),f))}recalculateAndSaveOverlays(e,t){const i=Xa();let o=new tt((h,f)=>h-f),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let E=i.get(p)||fn.empty();E=f.applyToLocalView(y,E),i.set(p,E);const T=(o.get(f.batchId)||ke()).add(p);o=o.insert(f.batchId,T)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,E=p.value,T=Fv();E.forEach(I=>{if(!l.has(I)){const D=Wv(t.get(I),i.get(I));D!==null&&T.set(I,D),l=l.add(I)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return q.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return ye.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):q.resolve(hs());let f=-1,p=l;return h.next(y=>q.forEach(y,(E,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(E)?q.resolve():this.remoteDocumentCache.getEntry(e,E).next(I=>{p=p.insert(E,I)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,ke())).next(E=>({batchId:f,changes:Uv(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(i=>{let o=Ha();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Ha();return this.indexManager.getCollectionParents(e,l).next(f=>q.forEach(f,p=>{const y=function(T,I){return new Lc(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(E=>{E.forEach((T,I)=>{h=h.insert(T,I)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((p,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,zt.newInvalidDocument(E)))});let f=Ha();return h.forEach((p,y)=>{const E=l.get(p);E!==void 0&&Ya(E.mutation,y,fn.empty(),_t.now()),bc(t,y)&&(f=f.insert(p,y))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return q.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:lr(o.createTime)}}(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:eC(o.bundledQuery),readTime:lr(o.readTime)}}(t)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.overlays=new tt(ye.comparator),this.Er=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=hs();return q.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Er.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Er.delete(i)),q.resolve()}getOverlaysForCollection(e,t,i){const o=hs(),l=t.length+1,h=new ye(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new tt((y,E)=>y-E);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=hs(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const f=hs(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>f.set(y,E)),!(f.size()>=o)););return q.resolve(f)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(i.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new NA(t,i));let l=this.Er.get(t);l===void 0&&(l=ke(),this.Er.set(t,l)),this.Er.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.dr=new vt(Rt.Ar),this.Rr=new vt(Rt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const i=new Rt(e,t);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new Rt(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new ye(new Xe([])),i=new Rt(t,e),o=new Rt(t,e+1),l=[];return this.Rr.forEachInRange([i,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ye(new Xe([])),i=new Rt(t,e),o=new Rt(t,e+1);let l=ke();return this.Rr.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new Rt(e,0),i=this.dr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Rt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ye.comparator(e.key,t.key)||xe(e.br,t.br)}static Vr(e,t){return xe(e.br,t.br)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new vt(Rt.Ar)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new kA(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.vr=this.vr.add(new Rt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Rt(t,0),o=new Rt(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],h=>{const f=this.Cr(h.br);l.push(f)}),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new vt(xe);return t.forEach(o=>{const l=new Rt(o,0),h=new Rt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],f=>{i=i.add(f.br)})}),q.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ye.isDocumentKey(l)||(l=l.child(""));const h=new Rt(new ye(l),0);let f=new vt(xe);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.br)),!0)},h),q.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return q.forEach(t.mutations,o=>{const l=new Rt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,t){const i=new Rt(t,0),o=this.vr.firstAfterOrEqual(i);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.Nr=e,this.docs=function(){return new tt(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return q.resolve(i?i.document.mutableCopy():zt.newInvalidDocument(t))}getEntries(e,t){let i=jr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():zt.newInvalidDocument(o))}),q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=jr();const h=t.path,f=new ye(h.child("")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||H1($1(E),i)<=0||(o.has(E.key)||bc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){we()}Lr(e,t){return q.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new mC(this)}getSize(e){return q.resolve(this.size)}}class mC extends aC{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),q.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.persistence=e,this.Br=new Ts(t=>zf(t),$f),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.kr=0,this.qr=new Xf,this.targetCount=0,this.Qr=No.qn()}forEachTarget(e,t){return this.Br.forEach((i,o)=>t(o)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),q.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new No(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.Un(t),q.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Br.forEach((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.Br.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),q.waitFor(l).next(()=>o)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const i=this.Br.get(t)||null;return q.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),q.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return q.resolve(i)}containsKey(e,t){return q.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,t){this.Kr={},this.overlays={},this.$r=new xc(0),this.Ur=!1,this.Ur=!0,this.Wr=new dC,this.referenceDelegate=e(this),this.Gr=new gC(this),this.indexManager=new tC,this.remoteDocumentCache=function(o){return new pC(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new ZA(t),this.jr=new cC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new fC(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new yC(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return q.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class yC extends q1{constructor(e){super(),this.currentSequenceNumber=e}}class Yf{constructor(e){this.persistence=e,this.Zr=new Xf,this.Xr=null}static ei(e){return new Yf(e)}get ti(){if(this.Xr)return this.Xr;throw we()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),q.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),q.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.ti,i=>{const o=ye.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Te.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return q.or([()=>q.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class vc{constructor(e,t){this.persistence=e,this.ri=new Ts(i=>Q1(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=oC(this,t)}static ei(e,t){return new vc(e,t)}Hr(){}Jr(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return q.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?q.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(f=>{f||(i++,l.removeEntry(h,Te.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),q.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),q.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ju(e.data.value)),t}ir(e,t,i){return q.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return q.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Jf(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return JT()?8:K1($t())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new _C;return this.ts(e,t,h).next(f=>{if(l.result=f,this.Hi)return this.ns(e,t,h,f.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(yo()<=Pe.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",_o(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),q.resolve()):(yo()<=Pe.DEBUG&&ae("QueryEngine","Query:",_o(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(yo()<=Pe.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",_o(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(t))):q.resolve())}Xi(e,t){if(Ny(t))return q.resolve(null);let i=ar(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=sf(t,null,"F"),i=ar(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=ke(...l);return this.Zi.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,f);return this.ss(t,y,h,p.readTime)?this.Xi(e,sf(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return Ny(t)||o.isEqual(Te.min())?q.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const h=this.rs(t,l);return this.ss(t,h,i,o)?q.resolve(null):(yo()<=Pe.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),_o(t)),this.os(e,h,t,z1(o,-1)).next(f=>f))})}rs(e,t){let i=new vt(bv(e));return t.forEach((o,l)=>{bc(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return yo()<=Pe.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",_o(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ri.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new tt(xe),this.cs=new Ts(l=>zf(l),$f),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uC(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function wC(n,e,t,i){return new EC(n,e,t,i)}async function i0(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],f=[];let p=ke();for(const y of o){h.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of l){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:h,addedBatchIds:f}))})})}function TC(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(f,p,y,E){const T=y.batch,I=T.keys();let D=q.resolve();return I.forEach(L=>{D=D.next(()=>E.getEntry(p,L)).next(z=>{const V=y.docVersions.get(L);Fe(V!==null),z.version.compareTo(V)<0&&(T.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),E.addEntry(z)))})}),D.next(()=>f.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(f){let p=ke();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function s0(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function IC(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const f=[];e.targetChanges.forEach((E,T)=>{const I=o.get(T);if(!I)return;f.push(t.Gr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,E.addedDocuments,T)));let D=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?D=D.withResumeToken(Ot.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):E.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(E.resumeToken,i)),o=o.insert(T,D),function(z,V,W){return z.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(I,D,E)&&f.push(t.Gr.updateTargetData(l,D))});let p=jr(),y=ke();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),f.push(SC(l,h,e.documentUpdates).next(E=>{p=E.Is,y=E.Es})),!i.isEqual(Te.min())){const E=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));f.push(E)}return q.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function SC(n,e,t){let i=ke(),o=ke();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let h=jr();return t.forEach((f,p)=>{const y=l.get(f);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(f,p.readTime),h=h.insert(f,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(f,p)):ae("LocalStore","Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",p.version)}),{Is:h,Es:o}})}function RC(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function AC(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,q.resolve(o)):t.Gr.allocateTargetId(i).next(h=>(o=new _i(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function cf(n,e,t){const i=Se(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Bo(h))throw h;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function zy(n,e,t){const i=Se(n);let o=Te.min(),l=ke();return i.persistence.runTransaction("Execute query","readwrite",h=>function(p,y,E){const T=Se(p),I=T.cs.get(E);return I!==void 0?q.resolve(T.us.get(I)):T.Gr.getTargetData(y,E)}(i,h,ar(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(h,f.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?l:ke())).next(f=>(CC(i,pA(e),f),{documents:f,ds:l})))}function CC(n,e,t){let i=n.ls.get(e)||Te.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class $y{constructor(){this.activeTargetIds=EA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PC{constructor(){this._o=new $y,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new $y,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu=null;function bd(){return zu===null?zu=function(){return 268435456+Math.round(2147483648*Math.random())}():zu++,"0x"+zu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="WebChannelConnection";class DC extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,h){const f=bd(),p=this.No(t,i.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${f}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(y,l,h),this.Bo(t,p,y,o).then(E=>(ae("RestConnection",`Received RPC '${t}' ${f}: `,E),E),E=>{throw Ao("RestConnection",`RPC '${t}' ${f} failed with error: `,E,"url: ",p,"request:",o),E})}ko(t,i,o,l,h,f){return this.Oo(t,i,o,l,h)}Lo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Uo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,i){const o=NC[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,i,o){const l=bd();return new Promise((h,f)=>{const p=new vv;p.setWithCredentials(!0),p.listenOnce(Ev.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Yu.NO_ERROR:const E=p.getResponseJson();ae(Bt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),h(E);break;case Yu.TIMEOUT:ae(Bt,`RPC '${e}' ${l} timed out`),f(new fe(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Yu.HTTP_ERROR:const T=p.getStatus();if(ae(Bt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const D=I==null?void 0:I.error;if(D&&D.status&&D.message){const L=function(V){const W=V.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(W)>=0?W:Y.UNKNOWN}(D.status);f(new fe(L,D.message))}else f(new fe(Y.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new fe(Y.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{ae(Bt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);ae(Bt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=bd(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Iv(),f=Tv(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Lo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const E=l.join("");ae(Bt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const T=h.createWebChannel(E,p);let I=!1,D=!1;const L=new xC({Eo:V=>{D?ae(Bt,`Not sending because RPC '${e}' stream ${o} is closed:`,V):(I||(ae(Bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),ae(Bt,`RPC '${e}' stream ${o} sending:`,V),T.send(V))},Ao:()=>T.close()}),z=(V,W,G)=>{V.listen(W,ee=>{try{G(ee)}catch(re){setTimeout(()=>{throw re},0)}})};return z(T,$a.EventType.OPEN,()=>{D||(ae(Bt,`RPC '${e}' stream ${o} transport opened.`),L.So())}),z(T,$a.EventType.CLOSE,()=>{D||(D=!0,ae(Bt,`RPC '${e}' stream ${o} transport closed`),L.Do())}),z(T,$a.EventType.ERROR,V=>{D||(D=!0,Ao(Bt,`RPC '${e}' stream ${o} transport errored:`,V),L.Do(new fe(Y.UNAVAILABLE,"The operation could not be completed")))}),z(T,$a.EventType.MESSAGE,V=>{var W;if(!D){const G=V.data[0];Fe(!!G);const ee=G,re=(ee==null?void 0:ee.error)||((W=ee[0])===null||W===void 0?void 0:W.error);if(re){ae(Bt,`RPC '${e}' stream ${o} received error:`,re);const Ie=re.status;let _e=function(A){const k=ht[A];if(k!==void 0)return Kv(k)}(Ie),N=re.message;_e===void 0&&(_e=Y.INTERNAL,N="Unknown error status: "+Ie+" with message "+re.message),D=!0,L.Do(new fe(_e,N)),T.close()}else ae(Bt,`RPC '${e}' stream ${o} received:`,G),L.vo(G)}}),z(f,wv.STAT_EVENT,V=>{V.stat===Zd.PROXY?ae(Bt,`RPC '${e}' stream ${o} detected buffering proxy`):V.stat===Zd.NOPROXY&&ae(Bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{L.bo()},0),L}}function Md(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n){return new FA(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,t,i,o,l,h,f,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new o0(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(Br(t.toString()),Br("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new fe(Y.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.E_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OC extends a0{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=zA(this.serializer,e),i=function(l){if(!("targetChange"in l))return Te.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?lr(h.readTime):Te.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=uf(this.serializer),t.addTarget=function(l,h){let f;const p=h.target;if(f=rf(p)?{documents:WA(l,p)}:{query:qA(l,p).ct},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Xv(l,h.resumeToken);const y=of(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(Te.min())>0){f.readTime=_c(l,h.snapshotVersion.toTimestamp());const y=of(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f}(this.serializer,e);const i=GA(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=uf(this.serializer),t.removeTarget=e,this.c_(t)}}class LC extends a0{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=HA(e.writeResults,e.commitTime),i=lr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=uf(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>$A(this.serializer,i))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new fe(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,af(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new fe(Y.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.ko(e,af(t,i),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new fe(Y.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class bC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Br(t),this.C_=!1):ae("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{i.enqueueAndForget(async()=>{Is(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.k_.add(4),await _l(y),y.K_.set("Unknown"),y.k_.delete(4),await jc(y)}(this))})}),this.K_=new bC(i,o)}}async function jc(n){if(Is(n))for(const e of n.q_)await e(!0)}async function _l(n){for(const e of n.q_)await e(!1)}function l0(n,e){const t=Se(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),np(t)?tp(t):jo(t).s_()&&ep(t,e))}function Zf(n,e){const t=Se(n),i=jo(t);t.B_.delete(e),i.s_()&&u0(t,e),t.B_.size===0&&(i.s_()?i.a_():Is(t)&&t.K_.set("Unknown"))}function ep(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}jo(n).V_(e)}function u0(n,e){n.U_.xe(e),jo(n).m_(e)}function tp(n){n.U_=new VA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),jo(n).start(),n.K_.F_()}function np(n){return Is(n)&&!jo(n).i_()&&n.B_.size>0}function Is(n){return Se(n).k_.size===0}function c0(n){n.U_=void 0}async function UC(n){n.K_.set("Online")}async function FC(n){n.B_.forEach((e,t)=>{ep(n,e)})}async function BC(n,e){c0(n),np(n)?(n.K_.O_(e),tp(n)):n.K_.set("Unknown")}async function jC(n,e,t){if(n.K_.set("Online"),e instanceof Qv&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.B_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.B_.delete(f),o.U_.removeTarget(f))}(n,e)}catch(i){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ec(n,i)}else if(e instanceof tc?n.U_.$e(e):e instanceof Gv?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Te.min()))try{const i=await s0(n.localStore);t.compareTo(i)>=0&&await function(l,h){const f=l.U_.it(h);return f.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.B_.get(y);E&&l.B_.set(y,E.withResumeToken(p.resumeToken,h))}}),f.targetMismatches.forEach((p,y)=>{const E=l.B_.get(p);if(!E)return;l.B_.set(p,E.withResumeToken(Ot.EMPTY_BYTE_STRING,E.snapshotVersion)),u0(l,p);const T=new _i(E.target,p,y,E.sequenceNumber);ep(l,T)}),l.remoteSyncer.applyRemoteEvent(f)}(n,t)}catch(i){ae("RemoteStore","Failed to raise snapshot:",i),await Ec(n,i)}}async function Ec(n,e,t){if(!Bo(e))throw e;n.k_.add(1),await _l(n),n.K_.set("Offline"),t||(t=()=>s0(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await jc(n)})}function h0(n,e){return e().catch(t=>Ec(n,t,e))}async function zc(n){const e=Se(n),t=ki(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;zC(e);)try{const o=await RC(e.localStore,i);if(o===null){e.L_.length===0&&t.a_();break}i=o.batchId,$C(e,o)}catch(o){await Ec(e,o)}d0(e)&&f0(e)}function zC(n){return Is(n)&&n.L_.length<10}function $C(n,e){n.L_.push(e);const t=ki(n);t.s_()&&t.f_&&t.g_(e.mutations)}function d0(n){return Is(n)&&!ki(n).i_()&&n.L_.length>0}function f0(n){ki(n).start()}async function HC(n){ki(n).w_()}async function WC(n){const e=ki(n);for(const t of n.L_)e.g_(t.mutations)}async function qC(n,e,t){const i=n.L_.shift(),o=Kf.from(i,e,t);await h0(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await zc(n)}async function KC(n,e){e&&ki(n).f_&&await async function(i,o){if(function(h){return DA(h)&&h!==Y.ABORTED}(o.code)){const l=i.L_.shift();ki(i).__(),await h0(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await zc(i)}}(n,e),d0(n)&&f0(n)}async function Wy(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const i=Is(t);t.k_.add(3),await _l(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await jc(t)}async function GC(n,e){const t=Se(n);e?(t.k_.delete(2),await jc(t)):e||(t.k_.add(2),await _l(t),t.K_.set("Unknown"))}function jo(n){return n.W_||(n.W_=function(t,i,o){const l=Se(t);return l.b_(),new OC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:UC.bind(null,n),mo:FC.bind(null,n),po:BC.bind(null,n),R_:jC.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),np(n)?tp(n):n.K_.set("Unknown")):(await n.W_.stop(),c0(n))})),n.W_}function ki(n){return n.G_||(n.G_=function(t,i,o){const l=Se(t);return l.b_(),new LC(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:HC.bind(null,n),po:KC.bind(null,n),p_:WC.bind(null,n),y_:qC.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await zc(n)):(await n.G_.stop(),n.L_.length>0&&(ae("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new fs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new rp(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ip(n,e){if(Br("AsyncQueue",`${e}: ${n}`),Bo(n))return new fe(Y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{static emptySet(e){return new So(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=Ha(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof So)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new So;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.z_=new tt(ye.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):we():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class xo{constructor(e,t,i,o,l,h,f,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new xo(e,t,So.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class XC{constructor(){this.queries=Ky(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=Ky(),l.forEach((h,f)=>{for(const p of f.J_)p.onError(i)})})(this,new fe(Y.ABORTED,"Firestore shutting down"))}}function Ky(){return new Ts(n=>Vv(n),Vc)}async function YC(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new QC,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=ip(h,`Initialization of query '${_o(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&sp(t)}async function JC(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function ZC(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.J_)f.ta(o)&&(i=!0);h.H_=o}}i&&sp(t)}function eP(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function sp(n){n.X_.forEach(e=>{e.next()})}var hf,Gy;(Gy=hf||(hf={})).na="default",Gy.Cache="cache";class tP{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new xo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==hf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.key=e}}class m0{constructor(e){this.key=e}}class nP{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ke(),this.mutatedKeys=ke(),this.Va=bv(e),this.ma=new So(this.Va)}get fa(){return this.da}ga(e,t){const i=t?t.pa:new qy,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,T)=>{const I=o.get(E),D=bc(this.query,T)?T:null,L=!!I&&this.mutatedKeys.has(I.key),z=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let V=!1;I&&D?I.data.isEqual(D.data)?L!==z&&(i.track({type:3,doc:D}),V=!0):this.ya(I,D)||(i.track({type:2,doc:D}),V=!0,(p&&this.Va(D,p)>0||y&&this.Va(D,y)<0)&&(f=!0)):!I&&D?(i.track({type:0,doc:D}),V=!0):I&&!D&&(i.track({type:1,doc:I}),V=!0,(p||y)&&(f=!0)),V&&(D?(h=h.add(D),l=z?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{ma:h,pa:i,ss:f,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((E,T)=>function(D,L){const z=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return z(D)-z(L)}(E.type,T.type)||this.Va(E.doc,T.doc)),this.wa(i),o=o!=null&&o;const f=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,h.length!==0||y?{snapshot:new xo(this.query,e.ma,l,h,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:f}:{ba:f}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new qy,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ke(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new m0(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new p0(i))}),t}va(e){this.da=e.ds,this.Ra=ke();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return xo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class rP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class iP{constructor(e){this.key=e,this.Fa=!1}}class sP{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new Ts(f=>Vv(f),Vc),this.Oa=new Map,this.Na=new Set,this.La=new tt(ye.comparator),this.Ba=new Map,this.ka=new Xf,this.qa={},this.Qa=new Map,this.Ka=No.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function oP(n,e,t=!0){const i=w0(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await g0(i,e,t,!0),o}async function aP(n,e){const t=w0(n);await g0(t,e,!0,!1)}async function g0(n,e,t,i){const o=await AC(n.localStore,ar(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await lP(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&l0(n.remoteStore,o),f}async function lP(n,e,t,i,o){n.Ua=(T,I,D)=>async function(z,V,W,G){let ee=V.view.ga(W);ee.ss&&(ee=await zy(z.localStore,V.query,!1).then(({documents:N})=>V.view.ga(N,ee)));const re=G&&G.targetChanges.get(V.targetId),Ie=G&&G.targetMismatches.get(V.targetId)!=null,_e=V.view.applyChanges(ee,z.isPrimaryClient,re,Ie);return Xy(z,V.targetId,_e.ba),_e.snapshot}(n,T,I,D);const l=await zy(n.localStore,e,!0),h=new nP(e,l.ds),f=h.ga(l.documents),p=yl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,p);Xy(n,t,y.ba);const E=new rP(e,t,h);return n.xa.set(e,E),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function uP(n,e,t){const i=Se(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(h=>!Vc(h,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await cf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Zf(i.remoteStore,o.targetId),df(i,o.targetId)}).catch(Fo)):(df(i,o.targetId),await cf(i.localStore,o.targetId,!0))}async function cP(n,e){const t=Se(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Zf(t.remoteStore,i.targetId))}async function hP(n,e,t){const i=_P(n);try{const o=await function(h,f){const p=Se(h),y=_t.now(),E=f.reduce((D,L)=>D.add(L.key),ke());let T,I;return p.persistence.runTransaction("Locally write mutations","readwrite",D=>{let L=jr(),z=ke();return p.hs.getEntries(D,E).next(V=>{L=V,L.forEach((W,G)=>{G.isValidDocument()||(z=z.add(W))})}).next(()=>p.localDocuments.getOverlayedDocuments(D,L)).next(V=>{T=V;const W=[];for(const G of f){const ee=CA(G,T.get(G.key).overlayedDocument);ee!=null&&W.push(new Li(G.key,ee,Pv(ee.value.mapValue),Wn.exists(!0)))}return p.mutationQueue.addMutationBatch(D,y,W,f)}).next(V=>{I=V;const W=V.applyToLocalDocumentSet(T,z);return p.documentOverlayCache.saveOverlays(D,V.batchId,W)})}).then(()=>({batchId:I.batchId,changes:Uv(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(h,f,p){let y=h.qa[h.currentUser.toKey()];y||(y=new tt(xe)),y=y.insert(f,p),h.qa[h.currentUser.toKey()]=y}(i,o.batchId,t),await vl(i,o.changes),await zc(i.remoteStore)}catch(o){const l=ip(o,"Failed to persist write");t.reject(l)}}async function y0(n,e){const t=Se(n);try{const i=await IC(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Ba.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Fe(h.Fa):o.removedDocuments.size>0&&(Fe(h.Fa),h.Fa=!1))}),await vl(t,i,e)}catch(i){await Fo(i)}}function Qy(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,h)=>{const f=h.view.ea(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const p=Se(h);p.onlineState=f;let y=!1;p.queries.forEach((E,T)=>{for(const I of T.J_)I.ea(f)&&(y=!0)}),y&&sp(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function dP(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ba.get(e),l=o&&o.key;if(l){let h=new tt(ye.comparator);h=h.insert(l,zt.newNoDocument(l,Te.min()));const f=ke().add(l),p=new Fc(Te.min(),new Map,new tt(xe),h,f);await y0(i,p),i.La=i.La.remove(l),i.Ba.delete(e),op(i)}else await cf(i.localStore,e,!1).then(()=>df(i,e,t)).catch(Fo)}async function fP(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await TC(t.localStore,e);v0(t,i,null),_0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await vl(t,o)}catch(o){await Fo(o)}}async function pP(n,e,t){const i=Se(n);try{const o=await function(h,f){const p=Se(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,f).next(T=>(Fe(T!==null),E=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,f)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(i.localStore,e);v0(i,e,t),_0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await vl(i,o)}catch(o){await Fo(o)}}function _0(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function v0(n,e,t){const i=Se(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function df(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||E0(n,i)})}function E0(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(Zf(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),op(n))}function Xy(n,e,t){for(const i of t)i instanceof p0?(n.ka.addReference(i.key,e),mP(n,i)):i instanceof m0?(ae("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||E0(n,i.key)):we()}function mP(n,e){const t=e.key,i=t.path.canonicalString();n.La.get(t)||n.Na.has(i)||(ae("SyncEngine","New document in limbo: "+t),n.Na.add(i),op(n))}function op(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new ye(Xe.fromString(e)),i=n.Ka.next();n.Ba.set(i,new iP(t)),n.La=n.La.insert(t,i),l0(n.remoteStore,new _i(ar(Hf(t.path)),i,"TargetPurposeLimboResolution",xc.oe))}}async function vl(n,e,t){const i=Se(n),o=[],l=[],h=[];i.xa.isEmpty()||(i.xa.forEach((f,p)=>{h.push(i.Ua(p,e,t).then(y=>{var E;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Jf.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(h),i.Ma.R_(o),await async function(p,y){const E=Se(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>q.forEach(y,I=>q.forEach(I.Wi,D=>E.persistence.referenceDelegate.addReference(T,I.targetId,D)).next(()=>q.forEach(I.Gi,D=>E.persistence.referenceDelegate.removeReference(T,I.targetId,D)))))}catch(T){if(!Bo(T))throw T;ae("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const D=E.us.get(I),L=D.snapshotVersion,z=D.withLastLimboFreeSnapshotVersion(L);E.us=E.us.insert(I,z)}}}(i.localStore,l))}async function gP(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const i=await i0(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(f=>{f.forEach(p=>{p.reject(new fe(Y.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await vl(t,i.Ts)}}function yP(n,e){const t=Se(n),i=t.Ba.get(e);if(i&&i.Fa)return ke().add(i.key);{let o=ke();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const f=t.xa.get(h);o=o.unionWith(f.view.fa)}return o}}function w0(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=y0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dP.bind(null,e),e.Ma.R_=ZC.bind(null,e.eventManager),e.Ma.Wa=eP.bind(null,e.eventManager),e}function _P(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pP.bind(null,e),e}class wc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return wC(this.persistence,new vC,e.initialUser,this.serializer)}ja(e){return new r0(Yf.ei,this.serializer)}za(e){return new PC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wc.provider={build:()=>new wc};class vP extends wc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Fe(this.persistence.referenceDelegate instanceof vc);const i=this.persistence.referenceDelegate.garbageCollector;return new iC(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new r0(i=>vc.ei(i,t),this.serializer)}}class ff{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Qy(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=gP.bind(null,this.syncEngine),await GC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new XC}()}createDatastore(e){const t=Bc(e.databaseInfo.databaseId),i=function(l){return new DC(l)}(e.databaseInfo);return function(l,h,f,p){return new VC(l,h,f,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,f){return new MC(i,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Qy(this.syncEngine,t,0),function(){return Hy.p()?new Hy:new kC}())}createSyncEngine(e,t){return function(o,l,h,f,p,y,E){const T=new sP(o,l,h,f,p,y);return E&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Se(o);ae("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await _l(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ff.provider={build:()=>new ff};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Br("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=Rv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{ae("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(ae("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=ip(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Ud(n,e){n.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await i0(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Yy(n,e){n.asyncQueue.verifyOperationInProgress();const t=await TP(n);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Wy(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>Wy(e.remoteStore,o)),n._onlineComponents=e}async function TP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ud(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Ao("Error using user provided cache. Falling back to memory cache: "+t),await Ud(n,new wc)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await Ud(n,new vP(void 0));return n._offlineComponents}async function T0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await Yy(n,n._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await Yy(n,new ff))),n._onlineComponents}function IP(n){return T0(n).then(e=>e.syncEngine)}async function Jy(n){const e=await T0(n),t=e.eventManager;return t.onListen=oP.bind(null,e.syncEngine),t.onUnlisten=uP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=aP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cP.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(n,e,t){if(!t)throw new fe(Y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function SP(n,e,t,i){if(e===!0&&i===!0)throw new fe(Y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function e_(n){if(!ye.isDocumentKey(n))throw new fe(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function t_(n){if(ye.isDocumentKey(n))throw new fe(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ap(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we()}function wi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new fe(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ap(n);throw new fe(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new fe(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=I0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new fe(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new fe(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new fe(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $c{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new n_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new n_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new O1;switch(i.type){case"firstParty":return new M1(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new fe(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Zy.get(t);i&&(ae("ComponentProvider","Removing Datastore"),Zy.delete(t),i.terminate())}(this),Promise.resolve()}}function RP(n,e,t,i={}){var o;const l=(n=wi(n,$c))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&Ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),i.mockUserToken){let f,p;if(typeof i.mockUserToken=="string")f=i.mockUserToken,p=jt.MOCK_USER;else{f=D_(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new fe(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new jt(y)}n._authCredentials=new L1(new Sv(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Hc(this.firestore,e,this._query)}}class mn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mn(this.firestore,e,this._key)}}class Ti extends Hc{constructor(e,t,i){super(e,t,Hf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mn(this.firestore,null,new ye(e))}withConverter(e){return new Ti(this.firestore,e,this._path)}}function R0(n,e,...t){if(n=et(n),S0("collection","path",e),n instanceof $c){const i=Xe.fromString(e,...t);return t_(i),new Ti(n,null,i)}{if(!(n instanceof mn||n instanceof Ti))throw new fe(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Xe.fromString(e,...t));return t_(i),new Ti(n.firestore,null,i)}}function pf(n,e,...t){if(n=et(n),arguments.length===1&&(e=Rv.newId()),S0("doc","path",e),n instanceof $c){const i=Xe.fromString(e,...t);return e_(i),new mn(n,null,new ye(i))}{if(!(n instanceof mn||n instanceof Ti))throw new fe(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Xe.fromString(e,...t));return e_(i),new mn(n.firestore,n instanceof Ti?n.converter:null,new ye(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new o0(this,"async_queue_retry"),this.fu=()=>{const i=Md();i&&ae("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Md();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Md();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new fs;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Bo(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(i);throw Br("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=rp.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.du.push(o),o}pu(){this.Au&&we()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function i_(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1}(n,["next","error","complete"])}class Do extends $c{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new r_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new r_(e),this._firestoreClient=void 0,await e}}}function AP(n,e){const t=typeof n=="object"?n:Cf(),i=typeof n=="string"?n:"(default)",o=Cc(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=k_("firestore");l&&RP(o,...l)}return o}function A0(n){if(n._terminated)throw new fe(Y.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||CP(n),n._firestoreClient}function CP(n){var e,t,i;const o=n._freezeSettings(),l=function(f,p,y,E){return new J1(f,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,I0(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new wP(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oo(Ot.fromBase64String(e))}catch(t){throw new fe(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Oo(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=/^__.*__$/;class kP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Li(e,this.data,this.fieldMask,t,this.fieldTransforms):new gl(e,this.data,t,this.fieldTransforms)}}class C0{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Li(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function P0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we()}}class hp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new hp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Lu(e),o}Bu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Tc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(P0(this.Mu)&&PP.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class NP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Bc(e)}$u(e,t,i,o=!1){return new hp({Mu:e,methodName:t,Ku:i,path:Dt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function k0(n){const e=n._freezeSettings(),t=Bc(n._databaseId);return new NP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xP(n,e,t,i,o,l={}){const h=n.$u(l.merge||l.mergeFields?2:0,e,t,o);dp("Data must be an object, but it was:",h,i);const f=N0(i,h);let p,y;if(l.merge)p=new fn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const I=mf(e,T,t);if(!h.contains(I))throw new fe(Y.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);D0(E,I)||E.push(I)}p=new fn(E),y=h.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=h.fieldTransforms;return new kP(new sn(f),p,y)}class qc extends lp{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qc}}function DP(n,e,t,i){const o=n.$u(1,e,t);dp("Data must be an object, but it was:",o,i);const l=[],h=sn.empty();Oi(i,(p,y)=>{const E=fp(e,p,t);y=et(y);const T=o.Bu(E);if(y instanceof qc)l.push(E);else{const I=Kc(y,T);I!=null&&(l.push(E),h.set(E,I))}});const f=new fn(l);return new C0(h,f,o.fieldTransforms)}function OP(n,e,t,i,o,l){const h=n.$u(1,e,t),f=[mf(e,i,t)],p=[o];if(l.length%2!=0)throw new fe(Y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)f.push(mf(e,l[I])),p.push(l[I+1]);const y=[],E=sn.empty();for(let I=f.length-1;I>=0;--I)if(!D0(y,f[I])){const D=f[I];let L=p[I];L=et(L);const z=h.Bu(D);if(L instanceof qc)y.push(D);else{const V=Kc(L,z);V!=null&&(y.push(D),E.set(D,V))}}const T=new fn(y);return new C0(E,T,h.fieldTransforms)}function Kc(n,e){if(x0(n=et(n)))return dp("Unsupported field value:",e,n),N0(n,e);if(n instanceof lp)return function(i,o){if(!P0(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let h=0;for(const f of i){let p=Kc(f,o.ku(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=et(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return wA(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=_t.fromDate(i);return{timestampValue:_c(o.serializer,l)}}if(i instanceof _t){const l=new _t(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:_c(o.serializer,l)}}if(i instanceof up)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Oo)return{bytesValue:Xv(o.serializer,i._byteString)};if(i instanceof mn){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Qf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof cp)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(p=>{if(typeof p!="number")throw f.qu("VectorValues must only contain numeric values.");return Wf(f.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${ap(i)}`)}(n,e)}function N0(n,e){const t={};return Av(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oi(n,(i,o)=>{const l=Kc(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function x0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _t||n instanceof up||n instanceof Oo||n instanceof mn||n instanceof lp||n instanceof cp)}function dp(n,e,t){if(!x0(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=ap(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function mf(n,e,t){if((e=et(e))instanceof Wc)return e._internalPath;if(typeof e=="string")return fp(n,e);throw Tc("Field path arguments must be of type string or ",n,!1,void 0,t)}const LP=new RegExp("[~\\*/\\[\\]]");function fp(n,e,t){if(e.search(LP)>=0)throw Tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wc(...e.split("."))._internalPath}catch{throw Tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Tc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${i}`),h&&(p+=` in document ${o}`),p+=")"),new fe(Y.INVALID_ARGUMENT,f+n+p)}function D0(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(L0("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class VP extends O0{data(){return super.data()}}function L0(n,e){return typeof e=="string"?fp(n,e):e instanceof Wc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new fe(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class MP{convertValue(e,t="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Oi(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>lt(h.doubleValue));return new cp(l)}convertGeoPoint(e){return new up(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Oc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(rl(e));default:return null}}convertTimestamp(e){const t=Ai(e);return new _t(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Xe.fromString(e);Fe(n0(i));const o=new il(i.get(1),i.get(3)),l=new ye(i.popFirst(5));return o.isEqual(t)||Br(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class V0 extends O0{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new nc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(L0("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class nc extends V0{data(e={}){return super.data(e)}}class FP{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new qa(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new nc(this._firestore,this._userDataWriter,i.key,i,new qa(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const p=new nc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new qa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const p=new nc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new qa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:BP(f.type),doc:p,oldIndex:y,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function BP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we()}}class b0 extends MP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Oo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new mn(this.firestore,null,t)}}function jP(n,e,t,...i){n=wi(n,mn);const o=wi(n.firestore,Do),l=k0(o);let h;return h=typeof(e=et(e))=="string"||e instanceof Wc?OP(l,"updateDoc",n._key,e,t,i):DP(l,"updateDoc",n._key,e),pp(o,[h.toMutation(n._key,Wn.exists(!0))])}function zP(n){return pp(wi(n.firestore,Do),[new qf(n._key,Wn.none())])}function $P(n,e){const t=wi(n.firestore,Do),i=pf(n),o=UP(n.converter,e);return pp(t,[xP(k0(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Wn.exists(!1))]).then(()=>i)}function HP(n,...e){var t,i,o;n=et(n);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||i_(e[h])||(l=e[h],h++);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(i_(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let p,y,E;if(n instanceof mn)y=wi(n.firestore,Do),E=Hf(n._key.path),p={next:T=>{e[h]&&e[h](WP(y,n,T))},error:e[h+1],complete:e[h+2]};else{const T=wi(n,Hc);y=wi(T.firestore,Do),E=T._query;const I=new b0(y);p={next:D=>{e[h]&&e[h](new FP(y,I,T,D))},error:e[h+1],complete:e[h+2]},bP(n._query)}return function(I,D,L,z){const V=new EP(z),W=new tP(D,V,L);return I.asyncQueue.enqueueAndForget(async()=>YC(await Jy(I),W)),()=>{V.eu(),I.asyncQueue.enqueueAndForget(async()=>JC(await Jy(I),W))}}(A0(y),E,f,p)}function pp(n,e){return function(i,o){const l=new fs;return i.asyncQueue.enqueueAndForget(async()=>hP(await IP(i),o,l)),l.promise}(A0(n),e)}function WP(n,e,t){const i=t.docs.get(e._key),o=new b0(n);return new V0(n,o,e._key,i,new qa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Uo=o})(ws),ms(new Si("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new Do(new V1(i.getProvider("auth-internal")),new F1(i.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new fe(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new il(y.options.projectId,E)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),sr(vy,"4.7.5",e),sr(vy,"4.7.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="firebasestorage.googleapis.com",U0="storageBucket",qP=2*60*1e3,KP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends dr{constructor(e,t,i=0){super(Fd(e),`Firebase Storage: ${t} (${Fd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,it.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function Fd(n){return"storage/"+n}function mp(){const n="An unknown error occurred, please check the error payload for server response.";return new it(rt.UNKNOWN,n)}function GP(n){return new it(rt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function QP(n){return new it(rt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function XP(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it(rt.UNAUTHENTICATED,n)}function YP(){return new it(rt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function JP(n){return new it(rt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function ZP(){return new it(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ek(){return new it(rt.CANCELED,"User canceled the upload/download.")}function tk(n){return new it(rt.INVALID_URL,"Invalid URL '"+n+"'.")}function nk(n){return new it(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function rk(){return new it(rt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+U0+"' property when initializing the app?")}function ik(){return new it(rt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sk(){return new it(rt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ok(n){return new it(rt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function gf(n){return new it(rt.INVALID_ARGUMENT,n)}function F0(){return new it(rt.APP_DELETED,"The Firebase app was deleted.")}function ak(n){return new it(rt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ja(n,e){return new it(rt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Fa(n){throw new it(rt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=pn.makeFromUrl(e,t)}catch{return new pn(e,"")}if(i.path==="")return i;throw nk(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),p={bucket:1,path:3};function y(re){re.path_=decodeURIComponent(re.path)}const E="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",D=new RegExp(`^https?://${T}/${E}/b/${o}/o${I}`,"i"),L={bucket:1,path:3},z=t===M0?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",W=new RegExp(`^https?://${z}/${o}/${V}`,"i"),ee=[{regex:f,indices:p,postModify:l},{regex:D,indices:L,postModify:y},{regex:W,indices:{bucket:1,path:2},postModify:y}];for(let re=0;re<ee.length;re++){const Ie=ee[re],_e=Ie.regex.exec(e);if(_e){const N=_e[Ie.indices.bucket];let S=_e[Ie.indices.path];S||(S=""),i=new pn(N,S),Ie.postModify(i);break}}if(i==null)throw tk(e);return i}}class lk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(n,e,t){let i=1,o=null,l=null,h=!1,f=0;function p(){return f===2}let y=!1;function E(...V){y||(y=!0,e.apply(null,V))}function T(V){o=setTimeout(()=>{o=null,n(D,p())},V)}function I(){l&&clearTimeout(l)}function D(V,...W){if(y){I();return}if(V){I(),E.call(null,V,...W);return}if(p()||h){I(),E.call(null,V,...W);return}i<64&&(i*=2);let ee;f===1?(f=2,ee=0):ee=(i+Math.random())*1e3,T(ee)}let L=!1;function z(V){L||(L=!0,I(),!y&&(o!==null?(V||(f=2),clearTimeout(o),T(0)):V||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,z(!0)},t),z}function ck(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(n){return n!==void 0}function dk(n){return typeof n=="object"&&!Array.isArray(n)}function gp(n){return typeof n=="string"||n instanceof String}function s_(n){return yp()&&n instanceof Blob}function yp(){return typeof Blob<"u"}function o_(n,e,t,i){if(i<e)throw gf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw gf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function B0(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var ps;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ps||(ps={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,t,i,o,l,h,f,p,y,E,T,I=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=T,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,L)=>{this.resolve_=D,this.reject_=L,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new $u(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const p=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===ps.NO_ERROR,p=l.getStatus();if(!f||fk(p,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===ps.ABORT;i(!1,new $u(!1,null,E));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new $u(y,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(f,f.getResponse());hk(p)?l(p):l()}catch(p){h(p)}else if(f!==null){const p=mp();p.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,p)):h(p)}else if(o.canceled){const p=this.appDelete_?F0():ek();h(p)}else{const p=ZP();h(p)}};this.canceled_?t(!1,new $u(!1,null,!0)):this.backoffId_=uk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ck(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $u{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function mk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function gk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function yk(n,e){e&&(n["X-Firebase-GMPID"]=e)}function _k(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function vk(n,e,t,i,o,l,h=!0){const f=B0(n.urlParams),p=n.url+f,y=Object.assign({},n.headers);return yk(y,e),mk(y,t),gk(y,l),_k(y,i),new pk(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function wk(...n){const e=Ek();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(yp())return new Blob(n);throw new it(rt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Tk(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(n){if(typeof atob>"u")throw ok("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Bd{constructor(e,t){this.data=e,this.contentType=t||null}}function j0(n,e){switch(n){case $n.RAW:return new Bd(z0(e));case $n.BASE64:case $n.BASE64URL:return new Bd($0(n,e));case $n.DATA_URL:return new Bd(Rk(e),Ak(e))}throw mp()}function z0(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,h=n.charCodeAt(++t);i=65536|(l&1023)<<10|h&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function Sk(n){let e;try{e=decodeURIComponent(n)}catch{throw Ja($n.DATA_URL,"Malformed data URL.")}return z0(e)}function $0(n,e){switch(n){case $n.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw Ja(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case $n.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw Ja(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Ik(e)}catch(o){throw o.message.includes("polyfill")?o:Ja(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class H0{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ja($n.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=Ck(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function Rk(n){const e=new H0(n);return e.base64?$0($n.BASE64,e.rest):Sk(e.rest)}function Ak(n){return new H0(n).contentType}function Ck(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){let i=0,o="";s_(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(s_(this.data_)){const i=this.data_,o=Tk(i,e,t);return o===null?null:new yi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new yi(i,!0)}}static getBlob(...e){if(yp()){const t=e.map(i=>i instanceof yi?i.data_:i);return new yi(wk.apply(null,t))}else{const t=e.map(h=>gp(h)?j0($n.RAW,h).data:h.data_);let i=0;t.forEach(h=>{i+=h.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new yi(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(n){let e;try{e=JSON.parse(n)}catch{return null}return dk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function kk(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function q0(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(n,e){return e}class Gt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||Nk}}let Hu=null;function xk(n){return!gp(n)||n.length<2?n:q0(n)}function K0(){if(Hu)return Hu;const n=[];n.push(new Gt("bucket")),n.push(new Gt("generation")),n.push(new Gt("metageneration")),n.push(new Gt("name","fullPath",!0));function e(l,h){return xk(h)}const t=new Gt("name");t.xform=e,n.push(t);function i(l,h){return h!==void 0?Number(h):h}const o=new Gt("size");return o.xform=i,n.push(o),n.push(new Gt("timeCreated")),n.push(new Gt("updated")),n.push(new Gt("md5Hash",null,!0)),n.push(new Gt("cacheControl",null,!0)),n.push(new Gt("contentDisposition",null,!0)),n.push(new Gt("contentEncoding",null,!0)),n.push(new Gt("contentLanguage",null,!0)),n.push(new Gt("contentType",null,!0)),n.push(new Gt("metadata","customMetadata",!0)),Hu=n,Hu}function Dk(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new pn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function Ok(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];i[h.local]=h.xform(i,e[h.server])}return Dk(i,n),i}function G0(n,e,t){const i=W0(e);return i===null?null:Ok(n,i,t)}function Lk(n,e,t,i){const o=W0(e);if(o===null||!gp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(y=>{const E=n.bucket,T=n.fullPath,I="/b/"+h(E)+"/o/"+h(T),D=Gc(I,t,i),L=B0({alt:"media",token:y});return D+L})[0]}function Vk(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class _p{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(n){if(!n)throw mp()}function bk(n,e){function t(i,o){const l=G0(n,o,e);return Q0(l!==null),l}return t}function Mk(n,e){function t(i,o){const l=G0(n,o,e);return Q0(l!==null),Lk(l,o,n.host,n._protocol)}return t}function X0(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=YP():o=XP():t.getStatus()===402?o=QP(n.bucket):t.getStatus()===403?o=JP(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function Y0(n){const e=X0(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=GP(n.path)),l.serverResponse=o.serverResponse,l}return t}function Uk(n,e,t){const i=e.fullServerUrl(),o=Gc(i,n.host,n._protocol),l="GET",h=n.maxOperationRetryTime,f=new _p(o,l,Mk(n,t),h);return f.errorHandler=Y0(e),f}function Fk(n,e){const t=e.fullServerUrl(),i=Gc(t,n.host,n._protocol),o="DELETE",l=n.maxOperationRetryTime;function h(p,y){}const f=new _p(i,o,h,l);return f.successCodes=[200,204],f.errorHandler=Y0(e),f}function Bk(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function jk(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=Bk(null,e)),i}function zk(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let ee="";for(let re=0;re<2;re++)ee=ee+Math.random().toString().slice(2);return ee}const p=f();h["Content-Type"]="multipart/related; boundary="+p;const y=jk(e,i,o),E=Vk(y,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,I=`\r
--`+p+"--",D=yi.getBlob(T,i,I);if(D===null)throw ik();const L={name:y.fullPath},z=Gc(l,n.host,n._protocol),V="POST",W=n.maxUploadRetryTime,G=new _p(z,V,bk(n,t),W);return G.urlParams=L,G.headers=h,G.body=D.uploadData(),G.errorHandler=X0(e),G}class $k{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ps.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ps.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ps.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw Fa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Fa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Fa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Fa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Fa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Hk extends $k{initXhr(){this.xhr_.responseType="text"}}function vp(){return new Hk}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t){this._service=e,t instanceof pn?this._location=t:this._location=pn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new vs(e,t)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return q0(this._location.path)}get storage(){return this._service}get parent(){const e=Pk(this._location.path);if(e===null)return null;const t=new pn(this._location.bucket,e);return new vs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw ak(e)}}function Wk(n,e,t){n._throwIfRoot("uploadBytes");const i=zk(n.storage,n._location,K0(),new yi(e,!0),t);return n.storage.makeRequestWithTokens(i,vp).then(o=>({metadata:o,ref:n}))}function qk(n,e,t=$n.RAW,i){n._throwIfRoot("uploadString");const o=j0(t,e),l=Object.assign({},i);return l.contentType==null&&o.contentType!=null&&(l.contentType=o.contentType),Wk(n,o.data,l)}function Kk(n){n._throwIfRoot("getDownloadURL");const e=Uk(n.storage,n._location,K0());return n.storage.makeRequestWithTokens(e,vp).then(t=>{if(t===null)throw sk();return t})}function Gk(n){n._throwIfRoot("deleteObject");const e=Fk(n.storage,n._location);return n.storage.makeRequestWithTokens(e,vp)}function Qk(n,e){const t=kk(n._location.path,e),i=new pn(n._location.bucket,t);return new vs(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(n){return/^[A-Za-z]+:\/\//.test(n)}function Yk(n,e){return new vs(n,e)}function J0(n,e){if(n instanceof Ep){const t=n;if(t._bucket==null)throw rk();const i=new vs(t,t._bucket);return e!=null?J0(i,e):i}else return e!==void 0?Qk(n,e):n}function Jk(n,e){if(e&&Xk(e)){if(n instanceof Ep)return Yk(n,e);throw gf("To use ref(service, url), the first argument must be a Storage instance.")}else return J0(n,e)}function a_(n,e){const t=e==null?void 0:e[U0];return t==null?null:pn.makeFromBucketSpec(t,n)}function Zk(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:D_(o,n.app.options.projectId))}class Ep{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=M0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qP,this._maxUploadRetryTime=KP,this._requests=new Set,o!=null?this._bucket=pn.makeFromBucketSpec(o,this._host):this._bucket=a_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=a_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){o_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){o_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vs(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new lk(F0());{const h=vk(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const l_="@firebase/storage",u_="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="storage";function eN(n,e,t,i){return n=et(n),qk(n,e,t,i)}function tN(n){return n=et(n),Kk(n)}function nN(n){return n=et(n),Gk(n)}function eE(n,e){return n=et(n),Jk(n,e)}function rN(n=Cf(),e){n=et(n);const i=Cc(n,Z0).getImmediate({identifier:e}),o=k_("storage");return o&&iN(i,...o),i}function iN(n,e,t,i={}){Zk(n,e,t,i)}function sN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Ep(t,i,o,e,ws)}function oN(){ms(new Si(Z0,sN,"PUBLIC").setMultipleInstances(!0)),sr(l_,u_,""),sr(l_,u_,"esm2017")}oN();const aN={apiKey:"AIzaSyASTjhDS34OS_CeH4IEla4e6h-gZe_Pi-Q",authDomain:"twitter-e3301.firebaseapp.com",projectId:"twitter-e3301",storageBucket:"twitter-e3301.firebasestorage.app",messagingSenderId:"247119875359",appId:"1:247119875359:web:56d620d1f92a91e8a1f42a"},wp=V_(aN),Es=x1(wp),Ic=AP(wp),tE=rN(wp),lN=({nweetObj:n,isOwner:e})=>{const[t,i]=H.useState(!1),[o,l]=H.useState(n.text),h=async()=>{if(window.confirm("삭제하시겠습니까?")){const T=pf(Ic,"nweets",n.id);if(await zP(T),n.attachmentUrl){const I=eE(tE,n.attachmentUrl);await nN(I)}}},f=()=>i(E=>!E),p=E=>{const{target:{value:T}}=E;l(T)},y=async E=>{E.preventDefault();const T=pf(Ic,"nweets",n.id);await jP(T,{text:o}),i(!1)};return ie.jsx("div",{children:t?ie.jsxs(ie.Fragment,{children:[ie.jsxs("form",{onSubmit:y,children:[ie.jsx("input",{onChange:p,value:o,required:!0}),ie.jsx("input",{type:"submit",value:"Update Nweet"})]}),ie.jsx("button",{onClick:f,children:"Cancel"})]}):ie.jsxs(ie.Fragment,{children:[ie.jsx("h4",{children:n.text}),n.attachmentUrl&&ie.jsx("img",{src:n.attachmentUrl,width:"50px",height:"50px",alt:"attachment"}),e&&ie.jsxs(ie.Fragment,{children:[ie.jsx("button",{onClick:h,children:"Delete Nweet"}),ie.jsx("button",{onClick:f,children:"Edit Nweet"})]})]})})},Nt=[];for(let n=0;n<256;++n)Nt.push((n+256).toString(16).slice(1));function uN(n,e=0){return(Nt[n[e+0]]+Nt[n[e+1]]+Nt[n[e+2]]+Nt[n[e+3]]+"-"+Nt[n[e+4]]+Nt[n[e+5]]+"-"+Nt[n[e+6]]+Nt[n[e+7]]+"-"+Nt[n[e+8]]+Nt[n[e+9]]+"-"+Nt[n[e+10]]+Nt[n[e+11]]+Nt[n[e+12]]+Nt[n[e+13]]+Nt[n[e+14]]+Nt[n[e+15]]).toLowerCase()}let jd;const cN=new Uint8Array(16);function hN(){if(!jd){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");jd=crypto.getRandomValues.bind(crypto)}return jd(cN)}const dN=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),c_={randomUUID:dN};function fN(n,e,t){if(c_.randomUUID&&!e&&!n)return c_.randomUUID();n=n||{};const i=n.random||(n.rng||hN)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,uN(i)}const pN=({userObj:n})=>{const[e,t]=H.useState(""),[i,o]=H.useState(""),l=async y=>{y.preventDefault();let E="";if(i!==""){const T=eE(tE,`${n.uid}/${fN()}`),I=await eN(T,i,"data_url");E=await tN(I.ref)}await $P(R0(Ic,"nweets"),{text:e,createdAt:Date.now(),creatorId:n.uid,attachmentUrl:E}),t(""),o("")},h=y=>{const{target:{value:E}}=y;t(E)},f=y=>{const{target:{files:E}}=y,T=E[0],I=new FileReader;I.onloadend=D=>{const{currentTarget:{result:L}}=D;o(L)},I.readAsDataURL(T)},p=()=>o("");return ie.jsxs("form",{onSubmit:l,children:[ie.jsx("input",{value:e,onChange:h,type:"text",placeholder:"What's on your mind?",maxLength:120}),ie.jsx("input",{type:"file",accept:"image/*",onChange:f}),ie.jsx("input",{type:"submit",value:"Nweet"}),i&&ie.jsxs("div",{children:[ie.jsx("img",{src:i,width:"50px",height:"50px",alt:"attachment preview"}),ie.jsx("button",{onClick:p,children:"Clear"})]})]})},mN=({userObj:n})=>{const[e,t]=H.useState([]);return H.useEffect(()=>{const i=HP(R0(Ic,"nweets"),o=>{const l=o.docs.map(h=>({id:h.id,...h.data()}));t(l)});return()=>i()},[]),ie.jsxs(ie.Fragment,{children:[ie.jsx(pN,{userObj:n}),ie.jsx("div",{children:e.map(i=>ie.jsx(lN,{nweetObj:i,isOwner:i.creatorId===n.uid},i.id))})]})},gN=()=>{const[n,e]=H.useState(""),[t,i]=H.useState(""),[o,l]=H.useState(!0),[h,f]=H.useState(""),p=T=>{const{target:{name:I,value:D}}=T;I==="email"?e(D):I==="password"&&i(D)},y=async T=>{T.preventDefault();try{let I;o?I=await pR(Es,n,t):I=await mR(Es,n,t)}catch(I){f(I.message)}},E=()=>l(T=>!T);return ie.jsxs(ie.Fragment,{children:[ie.jsxs("form",{onSubmit:y,children:[ie.jsx("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:p}),ie.jsx("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:t,onChange:p}),ie.jsx("input",{type:"submit",value:o?"Create Account":"Log In"}),h]}),ie.jsx("span",{onClick:E,children:o?"Sign In":"Create Account"})]})},yN=()=>{const n=async e=>{const{target:{name:t}}=e;let i;t==="google"?i=new xr:t==="github"&&(i=new Dr),await BR(Es,i)};return ie.jsxs("div",{children:[ie.jsx(gN,{}),ie.jsxs("div",{children:[ie.jsx("button",{onClick:n,name:"google",children:"Continue with Google"}),ie.jsx("button",{onClick:n,name:"github",children:"Continue with Github"})]})]})},_N=({userObj:n})=>ie.jsx("nav",{children:ie.jsxs("ul",{children:[ie.jsx("li",{children:ie.jsx(ic,{to:"/",children:"Home"})}),ie.jsx("li",{children:ie.jsxs(ic,{to:"/profile",children:[n.displayName,"의 Profile"]})})]})}),vN=({userObj:n,refreshUser:e})=>{const[t,i]=H.useState(n.displayName),o=()=>Es.signOut(),l=f=>{const{target:{value:p}}=f;i(p)},h=async f=>{f.preventDefault();const p=Es.currentUser;p&&p.displayName!==t&&(await yR(p,{displayName:t}),console.log("Display name updated to:",t),e())};return ie.jsxs("div",{children:[ie.jsxs("form",{onSubmit:h,children:[ie.jsx("input",{onChange:l,type:"text",placeholder:"Display name",value:t}),ie.jsx("input",{type:"submit",value:"Update Profile"})]}),ie.jsx("button",{onClick:o,children:"Log Out"})]})},EN=({isLoggedIn:n,userObj:e,refreshUser:t})=>ie.jsxs("div",{children:[n&&ie.jsx(_N,{userObj:e}),ie.jsx(iT,{children:n?ie.jsxs(ie.Fragment,{children:[ie.jsx(Ba,{path:"/",element:ie.jsx(mN,{userObj:e})}),ie.jsx(Ba,{path:"/profile",element:ie.jsx(vN,{refreshUser:t,userObj:e})})]}):ie.jsxs(ie.Fragment,{children:[ie.jsx(Ba,{path:"/",element:ie.jsx(yN,{})}),ie.jsx(Ba,{path:"*",element:ie.jsx(nT,{to:"/"})})]})})]});function wN(){const[n,e]=H.useState(!1),[t,i]=H.useState(null),o=()=>{const l=Es.currentUser;i({uid:l.uid,displayName:l.displayName,updateProfile:h=>l.updateProfile(h)})};return H.useEffect(()=>{ER(Es,l=>{i(l?{uid:l.uid,displayName:l.displayName,updateProfile:h=>l.updateProfile(h)}:!1),e(!0)})},[]),ie.jsx(ie.Fragment,{children:n?ie.jsx(EN,{refreshUser:o,isLoggedIn:!!t,userObj:t}):"initalizing..."})}fw.createRoot(document.getElementById("root")).render(ie.jsx(H.StrictMode,{children:ie.jsx(PT,{children:ie.jsx(wN,{})})}));
