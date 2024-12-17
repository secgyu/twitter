(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function Rv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Hd={exports:{}},Ya={},qd={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy;function q1(){if(Iy)return ke;Iy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,j={};function D(V,G,pe){this.props=V,this.context=G,this.refs=j,this.updater=pe||N}D.prototype.isReactComponent={},D.prototype.setState=function(V,G){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,G,"setState")},D.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function $(){}$.prototype=D.prototype;function q(V,G,pe){this.props=V,this.context=G,this.refs=j,this.updater=pe||N}var Z=q.prototype=new $;Z.constructor=q,O(Z,D.prototype),Z.isPureReactComponent=!0;var re=Array.isArray,ge=Object.prototype.hasOwnProperty,fe={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(V,G,pe){var Re,Ae={},De=null,Ue=null;if(G!=null)for(Re in G.ref!==void 0&&(Ue=G.ref),G.key!==void 0&&(De=""+G.key),G)ge.call(G,Re)&&!x.hasOwnProperty(Re)&&(Ae[Re]=G[Re]);var Fe=arguments.length-2;if(Fe===1)Ae.children=pe;else if(1<Fe){for(var He=Array(Fe),Tt=0;Tt<Fe;Tt++)He[Tt]=arguments[Tt+2];Ae.children=He}if(V&&V.defaultProps)for(Re in Fe=V.defaultProps,Fe)Ae[Re]===void 0&&(Ae[Re]=Fe[Re]);return{$$typeof:n,type:V,key:De,ref:Ue,props:Ae,_owner:fe.current}}function A(V,G){return{$$typeof:n,type:V.type,key:G,ref:V.ref,props:V.props,_owner:V._owner}}function P(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function L(V){var G={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(pe){return G[pe]})}var M=/\/+/g;function k(V,G){return typeof V=="object"&&V!==null&&V.key!=null?L(""+V.key):G.toString(36)}function at(V,G,pe,Re,Ae){var De=typeof V;(De==="undefined"||De==="boolean")&&(V=null);var Ue=!1;if(V===null)Ue=!0;else switch(De){case"string":case"number":Ue=!0;break;case"object":switch(V.$$typeof){case n:case e:Ue=!0}}if(Ue)return Ue=V,Ae=Ae(Ue),V=Re===""?"."+k(Ue,0):Re,re(Ae)?(pe="",V!=null&&(pe=V.replace(M,"$&/")+"/"),at(Ae,G,pe,"",function(Tt){return Tt})):Ae!=null&&(P(Ae)&&(Ae=A(Ae,pe+(!Ae.key||Ue&&Ue.key===Ae.key?"":(""+Ae.key).replace(M,"$&/")+"/")+V)),G.push(Ae)),1;if(Ue=0,Re=Re===""?".":Re+":",re(V))for(var Fe=0;Fe<V.length;Fe++){De=V[Fe];var He=Re+k(De,Fe);Ue+=at(De,G,pe,He,Ae)}else if(He=I(V),typeof He=="function")for(V=He.call(V),Fe=0;!(De=V.next()).done;)De=De.value,He=Re+k(De,Fe++),Ue+=at(De,G,pe,He,Ae);else if(De==="object")throw G=String(V),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Ue}function Vt(V,G,pe){if(V==null)return V;var Re=[],Ae=0;return at(V,Re,"","",function(De){return G.call(pe,De,Ae++)}),Re}function Mt(V){if(V._status===-1){var G=V._result;G=G(),G.then(function(pe){(V._status===0||V._status===-1)&&(V._status=1,V._result=pe)},function(pe){(V._status===0||V._status===-1)&&(V._status=2,V._result=pe)}),V._status===-1&&(V._status=0,V._result=G)}if(V._status===1)return V._result.default;throw V._result}var $e={current:null},ie={transition:null},ye={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:ie,ReactCurrentOwner:fe};function oe(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Vt,forEach:function(V,G,pe){Vt(V,function(){G.apply(this,arguments)},pe)},count:function(V){var G=0;return Vt(V,function(){G++}),G},toArray:function(V){return Vt(V,function(G){return G})||[]},only:function(V){if(!P(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},ke.Component=D,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=q,ke.StrictMode=i,ke.Suspense=p,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,ke.act=oe,ke.cloneElement=function(V,G,pe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Re=O({},V.props),Ae=V.key,De=V.ref,Ue=V._owner;if(G!=null){if(G.ref!==void 0&&(De=G.ref,Ue=fe.current),G.key!==void 0&&(Ae=""+G.key),V.type&&V.type.defaultProps)var Fe=V.type.defaultProps;for(He in G)ge.call(G,He)&&!x.hasOwnProperty(He)&&(Re[He]=G[He]===void 0&&Fe!==void 0?Fe[He]:G[He])}var He=arguments.length-2;if(He===1)Re.children=pe;else if(1<He){Fe=Array(He);for(var Tt=0;Tt<He;Tt++)Fe[Tt]=arguments[Tt+2];Re.children=Fe}return{$$typeof:n,type:V.type,key:Ae,ref:De,props:Re,_owner:Ue}},ke.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},ke.createElement=S,ke.createFactory=function(V){var G=S.bind(null,V);return G.type=V,G},ke.createRef=function(){return{current:null}},ke.forwardRef=function(V){return{$$typeof:d,render:V}},ke.isValidElement=P,ke.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:Mt}},ke.memo=function(V,G){return{$$typeof:y,type:V,compare:G===void 0?null:G}},ke.startTransition=function(V){var G=ie.transition;ie.transition={};try{V()}finally{ie.transition=G}},ke.unstable_act=oe,ke.useCallback=function(V,G){return $e.current.useCallback(V,G)},ke.useContext=function(V){return $e.current.useContext(V)},ke.useDebugValue=function(){},ke.useDeferredValue=function(V){return $e.current.useDeferredValue(V)},ke.useEffect=function(V,G){return $e.current.useEffect(V,G)},ke.useId=function(){return $e.current.useId()},ke.useImperativeHandle=function(V,G,pe){return $e.current.useImperativeHandle(V,G,pe)},ke.useInsertionEffect=function(V,G){return $e.current.useInsertionEffect(V,G)},ke.useLayoutEffect=function(V,G){return $e.current.useLayoutEffect(V,G)},ke.useMemo=function(V,G){return $e.current.useMemo(V,G)},ke.useReducer=function(V,G,pe){return $e.current.useReducer(V,G,pe)},ke.useRef=function(V){return $e.current.useRef(V)},ke.useState=function(V){return $e.current.useState(V)},ke.useSyncExternalStore=function(V,G,pe){return $e.current.useSyncExternalStore(V,G,pe)},ke.useTransition=function(){return $e.current.useTransition()},ke.version="18.3.1",ke}var Sy;function np(){return Sy||(Sy=1,qd.exports=q1()),qd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry;function K1(){if(Ry)return Ya;Ry=1;var n=np(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var v,T={},I=null,N=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(N=p.ref);for(v in p)i.call(p,v)&&!a.hasOwnProperty(v)&&(T[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)T[v]===void 0&&(T[v]=p[v]);return{$$typeof:e,type:d,key:I,ref:N,props:T,_owner:o.current}}return Ya.Fragment=t,Ya.jsx=c,Ya.jsxs=c,Ya}var Ay;function G1(){return Ay||(Ay=1,Hd.exports=K1()),Hd.exports}var te=G1(),H=np();const Av=Rv(H);var ec={},Kd={exports:{}},on={},Gd={exports:{}},Qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky;function Q1(){return ky||(ky=1,function(n){function e(ie,ye){var oe=ie.length;ie.push(ye);e:for(;0<oe;){var V=oe-1>>>1,G=ie[V];if(0<o(G,ye))ie[V]=ye,ie[oe]=G,oe=V;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var ye=ie[0],oe=ie.pop();if(oe!==ye){ie[0]=oe;e:for(var V=0,G=ie.length,pe=G>>>1;V<pe;){var Re=2*(V+1)-1,Ae=ie[Re],De=Re+1,Ue=ie[De];if(0>o(Ae,oe))De<G&&0>o(Ue,Ae)?(ie[V]=Ue,ie[De]=oe,V=De):(ie[V]=Ae,ie[Re]=oe,V=Re);else if(De<G&&0>o(Ue,oe))ie[V]=Ue,ie[De]=oe,V=De;else break e}}return ye}function o(ie,ye){var oe=ie.sortIndex-ye.sortIndex;return oe!==0?oe:ie.id-ye.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],v=1,T=null,I=3,N=!1,O=!1,j=!1,D=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(ie){for(var ye=t(y);ye!==null;){if(ye.callback===null)i(y);else if(ye.startTime<=ie)i(y),ye.sortIndex=ye.expirationTime,e(p,ye);else break;ye=t(y)}}function re(ie){if(j=!1,Z(ie),!O)if(t(p)!==null)O=!0,Mt(ge);else{var ye=t(y);ye!==null&&$e(re,ye.startTime-ie)}}function ge(ie,ye){O=!1,j&&(j=!1,$(S),S=-1),N=!0;var oe=I;try{for(Z(ye),T=t(p);T!==null&&(!(T.expirationTime>ye)||ie&&!L());){var V=T.callback;if(typeof V=="function"){T.callback=null,I=T.priorityLevel;var G=V(T.expirationTime<=ye);ye=n.unstable_now(),typeof G=="function"?T.callback=G:T===t(p)&&i(p),Z(ye)}else i(p);T=t(p)}if(T!==null)var pe=!0;else{var Re=t(y);Re!==null&&$e(re,Re.startTime-ye),pe=!1}return pe}finally{T=null,I=oe,N=!1}}var fe=!1,x=null,S=-1,A=5,P=-1;function L(){return!(n.unstable_now()-P<A)}function M(){if(x!==null){var ie=n.unstable_now();P=ie;var ye=!0;try{ye=x(!0,ie)}finally{ye?k():(fe=!1,x=null)}}else fe=!1}var k;if(typeof q=="function")k=function(){q(M)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,Vt=at.port2;at.port1.onmessage=M,k=function(){Vt.postMessage(null)}}else k=function(){D(M,0)};function Mt(ie){x=ie,fe||(fe=!0,k())}function $e(ie,ye){S=D(function(){ie(n.unstable_now())},ye)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){O||N||(O=!0,Mt(ge))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ie){switch(I){case 1:case 2:case 3:var ye=3;break;default:ye=I}var oe=I;I=ye;try{return ie()}finally{I=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,ye){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var oe=I;I=ie;try{return ye()}finally{I=oe}},n.unstable_scheduleCallback=function(ie,ye,oe){var V=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?V+oe:V):oe=V,ie){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=oe+G,ie={id:v++,callback:ye,priorityLevel:ie,startTime:oe,expirationTime:G,sortIndex:-1},oe>V?(ie.sortIndex=oe,e(y,ie),t(p)===null&&ie===t(y)&&(j?($(S),S=-1):j=!0,$e(re,oe-V))):(ie.sortIndex=G,e(p,ie),O||N||(O=!0,Mt(ge))),ie},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(ie){var ye=I;return function(){var oe=I;I=ye;try{return ie.apply(this,arguments)}finally{I=oe}}}}(Qd)),Qd}var Cy;function Y1(){return Cy||(Cy=1,Gd.exports=Q1()),Gd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py;function X1(){if(Py)return on;Py=1;var n=np(),e=Y1();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},T={};function I(r){return p.call(T,r)?!0:p.call(v,r)?!1:y.test(r)?T[r]=!0:(v[r]=!0,!1)}function N(r,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function O(r,s,l,h){if(s===null||typeof s>"u"||N(r,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function j(r,s,l,h,f,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){D[r]=new j(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];D[s]=new j(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){D[r]=new j(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){D[r]=new j(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){D[r]=new j(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){D[r]=new j(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){D[r]=new j(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){D[r]=new j(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){D[r]=new j(r,5,!1,r.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function q(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace($,q);D[s]=new j(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace($,q);D[s]=new j(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace($,q);D[s]=new j(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){D[r]=new j(r,1,!1,r.toLowerCase(),null,!1,!1)}),D.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){D[r]=new j(r,1,!1,r.toLowerCase(),null,!0,!0)});function Z(r,s,l,h){var f=D.hasOwnProperty(s)?D[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(O(s,l,f,h)&&(l=null),h||f===null?I(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):f.mustUseProperty?r[f.propertyName]=l===null?f.type===3?!1:"":l:(s=f.attributeName,h=f.attributeNamespace,l===null?r.removeAttribute(s):(f=f.type,l=f===3||f===4&&l===!0?"":""+l,h?r.setAttributeNS(h,s,l):r.setAttribute(s,l))))}var re=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ge=Symbol.for("react.element"),fe=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),L=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),Vt=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),$e=Symbol.for("react.offscreen"),ie=Symbol.iterator;function ye(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,V;function G(r){if(V===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var pe=!1;function Re(r,s){if(!r||pe)return"";pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(B){var h=B}Reflect.construct(r,[],s)}else{try{s.call()}catch(B){h=B}r.call(s.prototype)}else{try{throw Error()}catch(B){h=B}r()}}catch(B){if(B&&h&&typeof B.stack=="string"){for(var f=B.stack.split(`
`),g=h.stack.split(`
`),w=f.length-1,R=g.length-1;1<=w&&0<=R&&f[w]!==g[R];)R--;for(;1<=w&&0<=R;w--,R--)if(f[w]!==g[R]){if(w!==1||R!==1)do if(w--,R--,0>R||f[w]!==g[R]){var C=`
`+f[w].replace(" at new "," at ");return r.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",r.displayName)),C}while(1<=w&&0<=R);break}}}finally{pe=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?G(r):""}function Ae(r){switch(r.tag){case 5:return G(r.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case fe:return"Portal";case A:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case at:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case L:return(r.displayName||"Context")+".Consumer";case P:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Vt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Mt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Ue(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function He(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Tt(r){var s=He(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){h=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Er(r){r._valueTracker||(r._valueTracker=Tt(r))}function Ls(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return r&&(h=He(r)?r.checked?"true":"false":r.value),r=h,r!==l?(s.setValue(r),!0):!1}function Zr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Hi(r,s){var l=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function Vs(r,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Fe(s.value!=null?s.value:l),r._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function na(r,s){s=s.checked,s!=null&&Z(r,"checked",s,!1)}function ra(r,s){na(r,s);var l=Fe(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ms(r,s.type,l):s.hasOwnProperty("defaultValue")&&Ms(r,s.type,Fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Fl(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Ms(r,s,l){(s!=="number"||Zr(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var Tr=Array.isArray;function Ir(r,s,l,h){if(r=r.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<r.length;l++)f=s.hasOwnProperty("$"+r[l].value),r[l].selected!==f&&(r[l].selected=f),f&&h&&(r[l].defaultSelected=!0)}else{for(l=""+Fe(l),s=null,f=0;f<r.length;f++){if(r[f].value===l){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ia(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Us(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Tr(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:Fe(l)}}function Fs(r,s){var l=Fe(s.value),h=Fe(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),h!=null&&(r.defaultValue=""+h)}function sa(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function mt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?mt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Sr,oa=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,l,h,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Sr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function ei(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ki=["Webkit","ms","Moz","O"];Object.keys(qi).forEach(function(r){Ki.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),qi[s]=qi[r]})});function aa(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||qi.hasOwnProperty(r)&&qi[r]?(""+s).trim():s+"px"}function la(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,f=aa(l,s[l],h);l==="float"&&(l="cssFloat"),h?r.setProperty(l,f):r[l]=f}}var ua=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ca(r,s){if(s){if(ua[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ha(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gi=null;function zs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var js=null,wn=null,tr=null;function Bs(r){if(r=La(r)){if(typeof js!="function")throw Error(t(280));var s=r.stateNode;s&&(s=mu(s),js(r.stateNode,r.type,s))}}function nr(r){wn?tr?tr.push(r):tr=[r]:wn=r}function da(){if(wn){var r=wn,s=tr;if(tr=wn=null,Bs(r),s)for(r=0;r<s.length;r++)Bs(s[r])}}function Qi(r,s){return r(s)}function fa(){}var Rr=!1;function pa(r,s,l){if(Rr)return r(s,l);Rr=!0;try{return Qi(r,s,l)}finally{Rr=!1,(wn!==null||tr!==null)&&(fa(),da())}}function lt(r,s){var l=r.stateNode;if(l===null)return null;var h=mu(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var $s=!1;if(d)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){$s=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{$s=!1}function Yi(r,s,l,h,f,g,w,R,C){var B=Array.prototype.slice.call(arguments,3);try{s.apply(l,B)}catch(X){this.onError(X)}}var Xi=!1,Ws=null,Dn=!1,ma=null,vh={onError:function(r){Xi=!0,Ws=r}};function Hs(r,s,l,h,f,g,w,R,C){Xi=!1,Ws=null,Yi.apply(vh,arguments)}function zl(r,s,l,h,f,g,w,R,C){if(Hs.apply(this,arguments),Xi){if(Xi){var B=Ws;Xi=!1,Ws=null}else throw Error(t(198));Dn||(Dn=!0,ma=B)}}function On(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function Ji(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Ln(r){if(On(r)!==r)throw Error(t(188))}function jl(r){var s=r.alternate;if(!s){if(s=On(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,h=s;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){l=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return Ln(f),r;if(g===h)return Ln(f),s;g=g.sibling}throw Error(t(188))}if(l.return!==h.return)l=f,h=g;else{for(var w=!1,R=f.child;R;){if(R===l){w=!0,l=f,h=g;break}if(R===h){w=!0,h=f,l=g;break}R=R.sibling}if(!w){for(R=g.child;R;){if(R===l){w=!0,l=g,h=f;break}if(R===h){w=!0,h=g,l=f;break}R=R.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function ga(r){return r=jl(r),r!==null?qs(r):null}function qs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=qs(r);if(s!==null)return s;r=r.sibling}return null}var Ks=e.unstable_scheduleCallback,ya=e.unstable_cancelCallback,Bl=e.unstable_shouldYield,wh=e.unstable_requestPaint,qe=e.unstable_now,$l=e.unstable_getCurrentPriorityLevel,Zi=e.unstable_ImmediatePriority,ti=e.unstable_UserBlockingPriority,En=e.unstable_NormalPriority,_a=e.unstable_LowPriority,Wl=e.unstable_IdlePriority,es=null,cn=null;function Hl(r){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(es,r,void 0,(r.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:Kl,va=Math.log,ql=Math.LN2;function Kl(r){return r>>>=0,r===0?32:31-(va(r)/ql|0)|0}var Gs=64,Qs=4194304;function ni(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function ts(r,s){var l=r.pendingLanes;if(l===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,w=l&268435455;if(w!==0){var R=w&~f;R!==0?h=ni(R):(g&=w,g!==0&&(h=ni(g)))}else w=l&~f,w!==0?h=ni(w):g!==0&&(h=ni(g));if(h===0)return 0;if(s!==0&&s!==h&&!(s&f)&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if(h&4&&(h|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)l=31-qt(s),f=1<<l,h|=r[l],s&=~f;return h}function Eh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ar(r,s){for(var l=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-qt(g),R=1<<w,C=f[w];C===-1?(!(R&l)||R&h)&&(f[w]=Eh(R,s)):C<=s&&(r.expiredLanes|=R),g&=~R}}function hn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ns(){var r=Gs;return Gs<<=1,!(Gs&4194240)&&(Gs=64),r}function ri(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function ii(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-qt(s),r[s]=l}function We(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<l;){var f=31-qt(l),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,l&=~g}}function si(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var h=31-qt(l),f=1<<h;f&s|r[h]&s&&(r[h]|=s),l&=~f}}var xe=0;function oi(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Gl,Ys,Ql,Yl,Xl,wa=!1,rr=[],Ct=null,Vn=null,Mn=null,ai=new Map,Tn=new Map,ir=[],Th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jl(r,s){switch(r){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":ai.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(s.pointerId)}}function Jt(r,s,l,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=La(s),s!==null&&Ys(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function Ih(r,s,l,h,f){switch(s){case"focusin":return Ct=Jt(Ct,r,s,l,h,f),!0;case"dragenter":return Vn=Jt(Vn,r,s,l,h,f),!0;case"mouseover":return Mn=Jt(Mn,r,s,l,h,f),!0;case"pointerover":var g=f.pointerId;return ai.set(g,Jt(ai.get(g)||null,r,s,l,h,f)),!0;case"gotpointercapture":return g=f.pointerId,Tn.set(g,Jt(Tn.get(g)||null,r,s,l,h,f)),!0}return!1}function Zl(r){var s=as(r.target);if(s!==null){var l=On(s);if(l!==null){if(s=l.tag,s===13){if(s=Ji(l),s!==null){r.blockedOn=s,Xl(r.priority,function(){Ql(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function kr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=Xs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var h=new l.constructor(l.type,l);Gi=h,l.target.dispatchEvent(h),Gi=null}else return s=La(l),s!==null&&Ys(s),r.blockedOn=l,!1;s.shift()}return!0}function rs(r,s,l){kr(r)&&l.delete(s)}function eu(){wa=!1,Ct!==null&&kr(Ct)&&(Ct=null),Vn!==null&&kr(Vn)&&(Vn=null),Mn!==null&&kr(Mn)&&(Mn=null),ai.forEach(rs),Tn.forEach(rs)}function Un(r,s){r.blockedOn===s&&(r.blockedOn=null,wa||(wa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,eu)))}function Fn(r){function s(f){return Un(f,r)}if(0<rr.length){Un(rr[0],r);for(var l=1;l<rr.length;l++){var h=rr[l];h.blockedOn===r&&(h.blockedOn=null)}}for(Ct!==null&&Un(Ct,r),Vn!==null&&Un(Vn,r),Mn!==null&&Un(Mn,r),ai.forEach(s),Tn.forEach(s),l=0;l<ir.length;l++)h=ir[l],h.blockedOn===r&&(h.blockedOn=null);for(;0<ir.length&&(l=ir[0],l.blockedOn===null);)Zl(l),l.blockedOn===null&&ir.shift()}var Cr=re.ReactCurrentBatchConfig,li=!0;function Xe(r,s,l,h){var f=xe,g=Cr.transition;Cr.transition=null;try{xe=1,Ea(r,s,l,h)}finally{xe=f,Cr.transition=g}}function Sh(r,s,l,h){var f=xe,g=Cr.transition;Cr.transition=null;try{xe=4,Ea(r,s,l,h)}finally{xe=f,Cr.transition=g}}function Ea(r,s,l,h){if(li){var f=Xs(r,s,l,h);if(f===null)Lh(r,s,h,is,l),Jl(r,h);else if(Ih(f,r,s,l,h))h.stopPropagation();else if(Jl(r,h),s&4&&-1<Th.indexOf(r)){for(;f!==null;){var g=La(f);if(g!==null&&Gl(g),g=Xs(r,s,l,h),g===null&&Lh(r,s,h,is,l),g===f)break;f=g}f!==null&&h.stopPropagation()}else Lh(r,s,h,null,l)}}var is=null;function Xs(r,s,l,h){if(is=null,r=zs(h),r=as(r),r!==null)if(s=On(r),s===null)r=null;else if(l=s.tag,l===13){if(r=Ji(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return is=r,null}function Ta(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($l()){case Zi:return 1;case ti:return 4;case En:case _a:return 16;case Wl:return 536870912;default:return 16}default:return 16}}var dn=null,Js=null,Zt=null;function Ia(){if(Zt)return Zt;var r,s=Js,l=s.length,h,f="value"in dn?dn.value:dn.textContent,g=f.length;for(r=0;r<l&&s[r]===f[r];r++);var w=l-r;for(h=1;h<=w&&s[l-h]===f[g-h];h++);return Zt=f.slice(r,1<h?1-h:void 0)}function Zs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function sr(){return!0}function Sa(){return!1}function Pt(r){function s(l,h,f,g,w){this._reactName=l,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var R in r)r.hasOwnProperty(R)&&(l=r[R],this[R]=l?l(g):g[R]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?sr:Sa,this.isPropagationStopped=Sa,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),s}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=Pt(zn),or=oe({},zn,{view:0,detail:0}),Rh=Pt(or),to,Pr,ui,ss=oe({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ui&&(ui&&r.type==="mousemove"?(to=r.screenX-ui.screenX,Pr=r.screenY-ui.screenY):Pr=to=0,ui=r),to)},movementY:function(r){return"movementY"in r?r.movementY:Pr}}),no=Pt(ss),Ra=oe({},ss,{dataTransfer:0}),tu=Pt(Ra),ro=oe({},or,{relatedTarget:0}),io=Pt(ro),nu=oe({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nr=Pt(nu),ru=oe({},zn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),iu=Pt(ru),su=oe({},zn,{data:0}),Aa=Pt(su),so={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ou={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function au(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ou[r])?!!s[r]:!1}function ar(){return au}var u=oe({},or,{key:function(r){if(r.key){var s=so[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Zs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Kt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(r){return r.type==="keypress"?Zs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Zs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Pt(u),_=oe({},ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Pt(_),U=oe({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar}),W=Pt(U),ne=oe({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=Pt(ne),yt=oe({},ss,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=Pt(yt),It=[9,13,27,32],ht=d&&"CompositionEvent"in window,In=null;d&&"documentMode"in document&&(In=document.documentMode);var fn=d&&"TextEvent"in window&&!In,os=d&&(!ht||In&&8<In&&11>=In),oo=" ",ym=!1;function _m(r,s){switch(r){case"keyup":return It.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ao=!1;function $E(r,s){switch(r){case"compositionend":return vm(s);case"keypress":return s.which!==32?null:(ym=!0,oo);case"textInput":return r=s.data,r===oo&&ym?null:r;default:return null}}function WE(r,s){if(ao)return r==="compositionend"||!ht&&_m(r,s)?(r=Ia(),Zt=Js=dn=null,ao=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return os&&s.locale!=="ko"?null:s.data;default:return null}}var HE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!HE[r.type]:s==="textarea"}function Em(r,s,l,h){nr(h),s=du(s,"onChange"),0<s.length&&(l=new eo("onChange","change",null,l,h),r.push({event:l,listeners:s}))}var ka=null,Ca=null;function qE(r){Fm(r,0)}function lu(r){var s=fo(r);if(Ls(s))return r}function KE(r,s){if(r==="change")return s}var Tm=!1;if(d){var Ah;if(d){var kh="oninput"in document;if(!kh){var Im=document.createElement("div");Im.setAttribute("oninput","return;"),kh=typeof Im.oninput=="function"}Ah=kh}else Ah=!1;Tm=Ah&&(!document.documentMode||9<document.documentMode)}function Sm(){ka&&(ka.detachEvent("onpropertychange",Rm),Ca=ka=null)}function Rm(r){if(r.propertyName==="value"&&lu(Ca)){var s=[];Em(s,Ca,r,zs(r)),pa(qE,s)}}function GE(r,s,l){r==="focusin"?(Sm(),ka=s,Ca=l,ka.attachEvent("onpropertychange",Rm)):r==="focusout"&&Sm()}function QE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return lu(Ca)}function YE(r,s){if(r==="click")return lu(s)}function XE(r,s){if(r==="input"||r==="change")return lu(s)}function JE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var jn=typeof Object.is=="function"?Object.is:JE;function Pa(r,s){if(jn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var f=l[h];if(!p.call(s,f)||!jn(r[f],s[f]))return!1}return!0}function Am(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function km(r,s){var l=Am(r);r=0;for(var h;l;){if(l.nodeType===3){if(h=r+l.textContent.length,r<=s&&h>=s)return{node:l,offset:s-r};r=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Am(l)}}function Cm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Cm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Pm(){for(var r=window,s=Zr();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=Zr(r.document)}return s}function Ch(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function ZE(r){var s=Pm(),l=r.focusedElem,h=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&Cm(l.ownerDocument.documentElement,l)){if(h!==null&&Ch(l)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=l.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=km(l,g);var w=km(l,h);f&&w&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var e1=d&&"documentMode"in document&&11>=document.documentMode,lo=null,Ph=null,Na=null,Nh=!1;function Nm(r,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nh||lo==null||lo!==Zr(h)||(h=lo,"selectionStart"in h&&Ch(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Na&&Pa(Na,h)||(Na=h,h=du(Ph,"onSelect"),0<h.length&&(s=new eo("onSelect","select",null,s,l),r.push({event:s,listeners:h}),s.target=lo)))}function uu(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var uo={animationend:uu("Animation","AnimationEnd"),animationiteration:uu("Animation","AnimationIteration"),animationstart:uu("Animation","AnimationStart"),transitionend:uu("Transition","TransitionEnd")},xh={},xm={};d&&(xm=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function cu(r){if(xh[r])return xh[r];if(!uo[r])return r;var s=uo[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in xm)return xh[r]=s[l];return r}var bm=cu("animationend"),Dm=cu("animationiteration"),Om=cu("animationstart"),Lm=cu("transitionend"),Vm=new Map,Mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ci(r,s){Vm.set(r,s),a(s,[r])}for(var bh=0;bh<Mm.length;bh++){var Dh=Mm[bh],t1=Dh.toLowerCase(),n1=Dh[0].toUpperCase()+Dh.slice(1);ci(t1,"on"+n1)}ci(bm,"onAnimationEnd"),ci(Dm,"onAnimationIteration"),ci(Om,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(Lm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r1=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function Um(r,s,l){var h=r.type||"unknown-event";r.currentTarget=l,zl(h,s,void 0,r),r.currentTarget=null}function Fm(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var h=r[l],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var w=h.length-1;0<=w;w--){var R=h[w],C=R.instance,B=R.currentTarget;if(R=R.listener,C!==g&&f.isPropagationStopped())break e;Um(f,R,B),g=C}else for(w=0;w<h.length;w++){if(R=h[w],C=R.instance,B=R.currentTarget,R=R.listener,C!==g&&f.isPropagationStopped())break e;Um(f,R,B),g=C}}}if(Dn)throw r=ma,Dn=!1,ma=null,r}function Ge(r,s){var l=s[jh];l===void 0&&(l=s[jh]=new Set);var h=r+"__bubble";l.has(h)||(zm(s,r,2,!1),l.add(h))}function Oh(r,s,l){var h=0;s&&(h|=4),zm(l,r,h,s)}var hu="_reactListening"+Math.random().toString(36).slice(2);function ba(r){if(!r[hu]){r[hu]=!0,i.forEach(function(l){l!=="selectionchange"&&(r1.has(l)||Oh(l,!1,r),Oh(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[hu]||(s[hu]=!0,Oh("selectionchange",!1,s))}}function zm(r,s,l,h){switch(Ta(s)){case 1:var f=Xe;break;case 4:f=Sh;break;default:f=Ea}l=f.bind(null,s,l,r),f=void 0,!$s||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,l,{capture:!0,passive:f}):r.addEventListener(s,l,!0):f!==void 0?r.addEventListener(s,l,{passive:f}):r.addEventListener(s,l,!1)}function Lh(r,s,l,h,f){var g=h;if(!(s&1)&&!(s&2)&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var R=h.stateNode.containerInfo;if(R===f||R.nodeType===8&&R.parentNode===f)break;if(w===4)for(w=h.return;w!==null;){var C=w.tag;if((C===3||C===4)&&(C=w.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;w=w.return}for(;R!==null;){if(w=as(R),w===null)return;if(C=w.tag,C===5||C===6){h=g=w;continue e}R=R.parentNode}}h=h.return}pa(function(){var B=g,X=zs(l),J=[];e:{var Y=Vm.get(r);if(Y!==void 0){var se=eo,ce=r;switch(r){case"keypress":if(Zs(l)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ce="focus",se=io;break;case"focusout":ce="blur",se=io;break;case"beforeblur":case"afterblur":se=io;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=no;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=tu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=W;break;case bm:case Dm:case Om:se=Nr;break;case Lm:se=Be;break;case"scroll":se=Rh;break;case"wheel":se=Oe;break;case"copy":case"cut":case"paste":se=iu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=E}var he=(s&4)!==0,ut=!he&&r==="scroll",F=he?Y!==null?Y+"Capture":null:Y;he=[];for(var b=B,z;b!==null;){z=b;var ee=z.stateNode;if(z.tag===5&&ee!==null&&(z=ee,F!==null&&(ee=lt(b,F),ee!=null&&he.push(Da(b,ee,z)))),ut)break;b=b.return}0<he.length&&(Y=new se(Y,ce,null,l,X),J.push({event:Y,listeners:he}))}}if(!(s&7)){e:{if(Y=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",Y&&l!==Gi&&(ce=l.relatedTarget||l.fromElement)&&(as(ce)||ce[xr]))break e;if((se||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,se?(ce=l.relatedTarget||l.toElement,se=B,ce=ce?as(ce):null,ce!==null&&(ut=On(ce),ce!==ut||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(se=null,ce=B),se!==ce)){if(he=no,ee="onMouseLeave",F="onMouseEnter",b="mouse",(r==="pointerout"||r==="pointerover")&&(he=E,ee="onPointerLeave",F="onPointerEnter",b="pointer"),ut=se==null?Y:fo(se),z=ce==null?Y:fo(ce),Y=new he(ee,b+"leave",se,l,X),Y.target=ut,Y.relatedTarget=z,ee=null,as(X)===B&&(he=new he(F,b+"enter",ce,l,X),he.target=z,he.relatedTarget=ut,ee=he),ut=ee,se&&ce)t:{for(he=se,F=ce,b=0,z=he;z;z=co(z))b++;for(z=0,ee=F;ee;ee=co(ee))z++;for(;0<b-z;)he=co(he),b--;for(;0<z-b;)F=co(F),z--;for(;b--;){if(he===F||F!==null&&he===F.alternate)break t;he=co(he),F=co(F)}he=null}else he=null;se!==null&&jm(J,Y,se,he,!1),ce!==null&&ut!==null&&jm(J,ut,ce,he,!0)}}e:{if(Y=B?fo(B):window,se=Y.nodeName&&Y.nodeName.toLowerCase(),se==="select"||se==="input"&&Y.type==="file")var de=KE;else if(wm(Y))if(Tm)de=XE;else{de=QE;var _e=GE}else(se=Y.nodeName)&&se.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(de=YE);if(de&&(de=de(r,B))){Em(J,de,l,X);break e}_e&&_e(r,Y,B),r==="focusout"&&(_e=Y._wrapperState)&&_e.controlled&&Y.type==="number"&&Ms(Y,"number",Y.value)}switch(_e=B?fo(B):window,r){case"focusin":(wm(_e)||_e.contentEditable==="true")&&(lo=_e,Ph=B,Na=null);break;case"focusout":Na=Ph=lo=null;break;case"mousedown":Nh=!0;break;case"contextmenu":case"mouseup":case"dragend":Nh=!1,Nm(J,l,X);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":Nm(J,l,X)}var ve;if(ht)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else ao?_m(r,l)&&(Ee="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(Ee="onCompositionStart");Ee&&(os&&l.locale!=="ko"&&(ao||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&ao&&(ve=Ia()):(dn=X,Js="value"in dn?dn.value:dn.textContent,ao=!0)),_e=du(B,Ee),0<_e.length&&(Ee=new Aa(Ee,r,null,l,X),J.push({event:Ee,listeners:_e}),ve?Ee.data=ve:(ve=vm(l),ve!==null&&(Ee.data=ve)))),(ve=fn?$E(r,l):WE(r,l))&&(B=du(B,"onBeforeInput"),0<B.length&&(X=new Aa("onBeforeInput","beforeinput",null,l,X),J.push({event:X,listeners:B}),X.data=ve))}Fm(J,s)})}function Da(r,s,l){return{instance:r,listener:s,currentTarget:l}}function du(r,s){for(var l=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=lt(r,l),g!=null&&h.unshift(Da(r,g,f)),g=lt(r,s),g!=null&&h.push(Da(r,g,f))),r=r.return}return h}function co(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function jm(r,s,l,h,f){for(var g=s._reactName,w=[];l!==null&&l!==h;){var R=l,C=R.alternate,B=R.stateNode;if(C!==null&&C===h)break;R.tag===5&&B!==null&&(R=B,f?(C=lt(l,g),C!=null&&w.unshift(Da(l,C,R))):f||(C=lt(l,g),C!=null&&w.push(Da(l,C,R)))),l=l.return}w.length!==0&&r.push({event:s,listeners:w})}var i1=/\r\n?/g,s1=/\u0000|\uFFFD/g;function Bm(r){return(typeof r=="string"?r:""+r).replace(i1,`
`).replace(s1,"")}function fu(r,s,l){if(s=Bm(s),Bm(r)!==s&&l)throw Error(t(425))}function pu(){}var Vh=null,Mh=null;function Uh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Fh=typeof setTimeout=="function"?setTimeout:void 0,o1=typeof clearTimeout=="function"?clearTimeout:void 0,$m=typeof Promise=="function"?Promise:void 0,a1=typeof queueMicrotask=="function"?queueMicrotask:typeof $m<"u"?function(r){return $m.resolve(null).then(r).catch(l1)}:Fh;function l1(r){setTimeout(function(){throw r})}function zh(r,s){var l=s,h=0;do{var f=l.nextSibling;if(r.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(h===0){r.removeChild(f),Fn(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=f}while(l);Fn(s)}function hi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Wm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var ho=Math.random().toString(36).slice(2),lr="__reactFiber$"+ho,Oa="__reactProps$"+ho,xr="__reactContainer$"+ho,jh="__reactEvents$"+ho,u1="__reactListeners$"+ho,c1="__reactHandles$"+ho;function as(r){var s=r[lr];if(s)return s;for(var l=r.parentNode;l;){if(s=l[xr]||l[lr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=Wm(r);r!==null;){if(l=r[lr])return l;r=Wm(r)}return s}r=l,l=r.parentNode}return null}function La(r){return r=r[lr]||r[xr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function fo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function mu(r){return r[Oa]||null}var Bh=[],po=-1;function di(r){return{current:r}}function Qe(r){0>po||(r.current=Bh[po],Bh[po]=null,po--)}function Ke(r,s){po++,Bh[po]=r.current,r.current=s}var fi={},Ut=di(fi),en=di(!1),ls=fi;function mo(r,s){var l=r.type.contextTypes;if(!l)return fi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in l)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function tn(r){return r=r.childContextTypes,r!=null}function gu(){Qe(en),Qe(Ut)}function Hm(r,s,l){if(Ut.current!==fi)throw Error(t(168));Ke(Ut,s),Ke(en,l)}function qm(r,s,l){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,Ue(r)||"Unknown",f));return oe({},l,h)}function yu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||fi,ls=Ut.current,Ke(Ut,r),Ke(en,en.current),!0}function Km(r,s,l){var h=r.stateNode;if(!h)throw Error(t(169));l?(r=qm(r,s,ls),h.__reactInternalMemoizedMergedChildContext=r,Qe(en),Qe(Ut),Ke(Ut,r)):Qe(en),Ke(en,l)}var br=null,_u=!1,$h=!1;function Gm(r){br===null?br=[r]:br.push(r)}function h1(r){_u=!0,Gm(r)}function pi(){if(!$h&&br!==null){$h=!0;var r=0,s=xe;try{var l=br;for(xe=1;r<l.length;r++){var h=l[r];do h=h(!0);while(h!==null)}br=null,_u=!1}catch(f){throw br!==null&&(br=br.slice(r+1)),Ks(Zi,pi),f}finally{xe=s,$h=!1}}return null}var go=[],yo=0,vu=null,wu=0,Sn=[],Rn=0,us=null,Dr=1,Or="";function cs(r,s){go[yo++]=wu,go[yo++]=vu,vu=r,wu=s}function Qm(r,s,l){Sn[Rn++]=Dr,Sn[Rn++]=Or,Sn[Rn++]=us,us=r;var h=Dr;r=Or;var f=32-qt(h)-1;h&=~(1<<f),l+=1;var g=32-qt(s)+f;if(30<g){var w=f-f%5;g=(h&(1<<w)-1).toString(32),h>>=w,f-=w,Dr=1<<32-qt(s)+f|l<<f|h,Or=g+r}else Dr=1<<g|l<<f|h,Or=r}function Wh(r){r.return!==null&&(cs(r,1),Qm(r,1,0))}function Hh(r){for(;r===vu;)vu=go[--yo],go[yo]=null,wu=go[--yo],go[yo]=null;for(;r===us;)us=Sn[--Rn],Sn[Rn]=null,Or=Sn[--Rn],Sn[Rn]=null,Dr=Sn[--Rn],Sn[Rn]=null}var pn=null,mn=null,Je=!1,Bn=null;function Ym(r,s){var l=Pn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function Xm(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,pn=r,mn=hi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,pn=r,mn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=us!==null?{id:Dr,overflow:Or}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Pn(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,pn=r,mn=null,!0):!1;default:return!1}}function qh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Kh(r){if(Je){var s=mn;if(s){var l=s;if(!Xm(r,s)){if(qh(r))throw Error(t(418));s=hi(l.nextSibling);var h=pn;s&&Xm(r,s)?Ym(h,l):(r.flags=r.flags&-4097|2,Je=!1,pn=r)}}else{if(qh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Je=!1,pn=r}}}function Jm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;pn=r}function Eu(r){if(r!==pn)return!1;if(!Je)return Jm(r),Je=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Uh(r.type,r.memoizedProps)),s&&(s=mn)){if(qh(r))throw Zm(),Error(t(418));for(;s;)Ym(r,s),s=hi(s.nextSibling)}if(Jm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){mn=hi(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}mn=null}}else mn=pn?hi(r.stateNode.nextSibling):null;return!0}function Zm(){for(var r=mn;r;)r=hi(r.nextSibling)}function _o(){mn=pn=null,Je=!1}function Gh(r){Bn===null?Bn=[r]:Bn.push(r)}var d1=re.ReactCurrentBatchConfig;function Va(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var R=f.refs;w===null?delete R[g]:R[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Tu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function eg(r){var s=r._init;return s(r._payload)}function tg(r){function s(F,b){if(r){var z=F.deletions;z===null?(F.deletions=[b],F.flags|=16):z.push(b)}}function l(F,b){if(!r)return null;for(;b!==null;)s(F,b),b=b.sibling;return null}function h(F,b){for(F=new Map;b!==null;)b.key!==null?F.set(b.key,b):F.set(b.index,b),b=b.sibling;return F}function f(F,b){return F=Ti(F,b),F.index=0,F.sibling=null,F}function g(F,b,z){return F.index=z,r?(z=F.alternate,z!==null?(z=z.index,z<b?(F.flags|=2,b):z):(F.flags|=2,b)):(F.flags|=1048576,b)}function w(F){return r&&F.alternate===null&&(F.flags|=2),F}function R(F,b,z,ee){return b===null||b.tag!==6?(b=Fd(z,F.mode,ee),b.return=F,b):(b=f(b,z),b.return=F,b)}function C(F,b,z,ee){var de=z.type;return de===x?X(F,b,z.props.children,ee,z.key):b!==null&&(b.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Mt&&eg(de)===b.type)?(ee=f(b,z.props),ee.ref=Va(F,b,z),ee.return=F,ee):(ee=qu(z.type,z.key,z.props,null,F.mode,ee),ee.ref=Va(F,b,z),ee.return=F,ee)}function B(F,b,z,ee){return b===null||b.tag!==4||b.stateNode.containerInfo!==z.containerInfo||b.stateNode.implementation!==z.implementation?(b=zd(z,F.mode,ee),b.return=F,b):(b=f(b,z.children||[]),b.return=F,b)}function X(F,b,z,ee,de){return b===null||b.tag!==7?(b=_s(z,F.mode,ee,de),b.return=F,b):(b=f(b,z),b.return=F,b)}function J(F,b,z){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Fd(""+b,F.mode,z),b.return=F,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ge:return z=qu(b.type,b.key,b.props,null,F.mode,z),z.ref=Va(F,null,b),z.return=F,z;case fe:return b=zd(b,F.mode,z),b.return=F,b;case Mt:var ee=b._init;return J(F,ee(b._payload),z)}if(Tr(b)||ye(b))return b=_s(b,F.mode,z,null),b.return=F,b;Tu(F,b)}return null}function Y(F,b,z,ee){var de=b!==null?b.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return de!==null?null:R(F,b,""+z,ee);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case ge:return z.key===de?C(F,b,z,ee):null;case fe:return z.key===de?B(F,b,z,ee):null;case Mt:return de=z._init,Y(F,b,de(z._payload),ee)}if(Tr(z)||ye(z))return de!==null?null:X(F,b,z,ee,null);Tu(F,z)}return null}function se(F,b,z,ee,de){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return F=F.get(z)||null,R(b,F,""+ee,de);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case ge:return F=F.get(ee.key===null?z:ee.key)||null,C(b,F,ee,de);case fe:return F=F.get(ee.key===null?z:ee.key)||null,B(b,F,ee,de);case Mt:var _e=ee._init;return se(F,b,z,_e(ee._payload),de)}if(Tr(ee)||ye(ee))return F=F.get(z)||null,X(b,F,ee,de,null);Tu(b,ee)}return null}function ce(F,b,z,ee){for(var de=null,_e=null,ve=b,Ee=b=0,At=null;ve!==null&&Ee<z.length;Ee++){ve.index>Ee?(At=ve,ve=null):At=ve.sibling;var Me=Y(F,ve,z[Ee],ee);if(Me===null){ve===null&&(ve=At);break}r&&ve&&Me.alternate===null&&s(F,ve),b=g(Me,b,Ee),_e===null?de=Me:_e.sibling=Me,_e=Me,ve=At}if(Ee===z.length)return l(F,ve),Je&&cs(F,Ee),de;if(ve===null){for(;Ee<z.length;Ee++)ve=J(F,z[Ee],ee),ve!==null&&(b=g(ve,b,Ee),_e===null?de=ve:_e.sibling=ve,_e=ve);return Je&&cs(F,Ee),de}for(ve=h(F,ve);Ee<z.length;Ee++)At=se(ve,F,Ee,z[Ee],ee),At!==null&&(r&&At.alternate!==null&&ve.delete(At.key===null?Ee:At.key),b=g(At,b,Ee),_e===null?de=At:_e.sibling=At,_e=At);return r&&ve.forEach(function(Ii){return s(F,Ii)}),Je&&cs(F,Ee),de}function he(F,b,z,ee){var de=ye(z);if(typeof de!="function")throw Error(t(150));if(z=de.call(z),z==null)throw Error(t(151));for(var _e=de=null,ve=b,Ee=b=0,At=null,Me=z.next();ve!==null&&!Me.done;Ee++,Me=z.next()){ve.index>Ee?(At=ve,ve=null):At=ve.sibling;var Ii=Y(F,ve,Me.value,ee);if(Ii===null){ve===null&&(ve=At);break}r&&ve&&Ii.alternate===null&&s(F,ve),b=g(Ii,b,Ee),_e===null?de=Ii:_e.sibling=Ii,_e=Ii,ve=At}if(Me.done)return l(F,ve),Je&&cs(F,Ee),de;if(ve===null){for(;!Me.done;Ee++,Me=z.next())Me=J(F,Me.value,ee),Me!==null&&(b=g(Me,b,Ee),_e===null?de=Me:_e.sibling=Me,_e=Me);return Je&&cs(F,Ee),de}for(ve=h(F,ve);!Me.done;Ee++,Me=z.next())Me=se(ve,F,Ee,Me.value,ee),Me!==null&&(r&&Me.alternate!==null&&ve.delete(Me.key===null?Ee:Me.key),b=g(Me,b,Ee),_e===null?de=Me:_e.sibling=Me,_e=Me);return r&&ve.forEach(function(H1){return s(F,H1)}),Je&&cs(F,Ee),de}function ut(F,b,z,ee){if(typeof z=="object"&&z!==null&&z.type===x&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case ge:e:{for(var de=z.key,_e=b;_e!==null;){if(_e.key===de){if(de=z.type,de===x){if(_e.tag===7){l(F,_e.sibling),b=f(_e,z.props.children),b.return=F,F=b;break e}}else if(_e.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Mt&&eg(de)===_e.type){l(F,_e.sibling),b=f(_e,z.props),b.ref=Va(F,_e,z),b.return=F,F=b;break e}l(F,_e);break}else s(F,_e);_e=_e.sibling}z.type===x?(b=_s(z.props.children,F.mode,ee,z.key),b.return=F,F=b):(ee=qu(z.type,z.key,z.props,null,F.mode,ee),ee.ref=Va(F,b,z),ee.return=F,F=ee)}return w(F);case fe:e:{for(_e=z.key;b!==null;){if(b.key===_e)if(b.tag===4&&b.stateNode.containerInfo===z.containerInfo&&b.stateNode.implementation===z.implementation){l(F,b.sibling),b=f(b,z.children||[]),b.return=F,F=b;break e}else{l(F,b);break}else s(F,b);b=b.sibling}b=zd(z,F.mode,ee),b.return=F,F=b}return w(F);case Mt:return _e=z._init,ut(F,b,_e(z._payload),ee)}if(Tr(z))return ce(F,b,z,ee);if(ye(z))return he(F,b,z,ee);Tu(F,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,b!==null&&b.tag===6?(l(F,b.sibling),b=f(b,z),b.return=F,F=b):(l(F,b),b=Fd(z,F.mode,ee),b.return=F,F=b),w(F)):l(F,b)}return ut}var vo=tg(!0),ng=tg(!1),Iu=di(null),Su=null,wo=null,Qh=null;function Yh(){Qh=wo=Su=null}function Xh(r){var s=Iu.current;Qe(Iu),r._currentValue=s}function Jh(r,s,l){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===l)break;r=r.return}}function Eo(r,s){Su=r,Qh=wo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(nn=!0),r.firstContext=null)}function An(r){var s=r._currentValue;if(Qh!==r)if(r={context:r,memoizedValue:s,next:null},wo===null){if(Su===null)throw Error(t(308));wo=r,Su.dependencies={lanes:0,firstContext:r}}else wo=wo.next=r;return s}var hs=null;function Zh(r){hs===null?hs=[r]:hs.push(r)}function rg(r,s,l,h){var f=s.interleaved;return f===null?(l.next=l,Zh(s)):(l.next=f.next,f.next=l),s.interleaved=l,Lr(r,h)}function Lr(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var mi=!1;function ed(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ig(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Vr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function gi(r,s,l){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,Ve&2){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Lr(r,l)}return f=h.interleaved,f===null?(s.next=s,Zh(h)):(s.next=f.next,f.next=s),h.interleaved=s,Lr(r,l)}function Ru(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,si(r,l)}}function sg(r,s){var l=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?f=g=w:g=g.next=w,l=l.next}while(l!==null);g===null?f=g=s:g=g.next=s}else f=g=s;l={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Au(r,s,l,h){var f=r.updateQueue;mi=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var C=R,B=C.next;C.next=null,w===null?g=B:w.next=B,w=C;var X=r.alternate;X!==null&&(X=X.updateQueue,R=X.lastBaseUpdate,R!==w&&(R===null?X.firstBaseUpdate=B:R.next=B,X.lastBaseUpdate=C))}if(g!==null){var J=f.baseState;w=0,X=B=C=null,R=g;do{var Y=R.lane,se=R.eventTime;if((h&Y)===Y){X!==null&&(X=X.next={eventTime:se,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ce=r,he=R;switch(Y=s,se=l,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){J=ce.call(se,J,Y);break e}J=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,Y=typeof ce=="function"?ce.call(se,J,Y):ce,Y==null)break e;J=oe({},J,Y);break e;case 2:mi=!0}}R.callback!==null&&R.lane!==0&&(r.flags|=64,Y=f.effects,Y===null?f.effects=[R]:Y.push(R))}else se={eventTime:se,lane:Y,tag:R.tag,payload:R.payload,callback:R.callback,next:null},X===null?(B=X=se,C=J):X=X.next=se,w|=Y;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;Y=R,R=Y.next,Y.next=null,f.lastBaseUpdate=Y,f.shared.pending=null}}while(!0);if(X===null&&(C=J),f.baseState=C,f.firstBaseUpdate=B,f.lastBaseUpdate=X,s=f.shared.interleaved,s!==null){f=s;do w|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);ps|=w,r.lanes=w,r.memoizedState=J}}function og(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=l,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Ma={},ur=di(Ma),Ua=di(Ma),Fa=di(Ma);function ds(r){if(r===Ma)throw Error(t(174));return r}function td(r,s){switch(Ke(Fa,s),Ke(Ua,r),Ke(ur,Ma),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:gt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=gt(s,r)}Qe(ur),Ke(ur,s)}function To(){Qe(ur),Qe(Ua),Qe(Fa)}function ag(r){ds(Fa.current);var s=ds(ur.current),l=gt(s,r.type);s!==l&&(Ke(Ua,r),Ke(ur,l))}function nd(r){Ua.current===r&&(Qe(ur),Qe(Ua))}var tt=di(0);function ku(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var rd=[];function id(){for(var r=0;r<rd.length;r++)rd[r]._workInProgressVersionPrimary=null;rd.length=0}var Cu=re.ReactCurrentDispatcher,sd=re.ReactCurrentBatchConfig,fs=0,nt=null,_t=null,St=null,Pu=!1,za=!1,ja=0,f1=0;function Ft(){throw Error(t(321))}function od(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!jn(r[l],s[l]))return!1;return!0}function ad(r,s,l,h,f,g){if(fs=g,nt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Cu.current=r===null||r.memoizedState===null?y1:_1,r=l(h,f),za){g=0;do{if(za=!1,ja=0,25<=g)throw Error(t(301));g+=1,St=_t=null,s.updateQueue=null,Cu.current=v1,r=l(h,f)}while(za)}if(Cu.current=bu,s=_t!==null&&_t.next!==null,fs=0,St=_t=nt=null,Pu=!1,s)throw Error(t(300));return r}function ld(){var r=ja!==0;return ja=0,r}function cr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?nt.memoizedState=St=r:St=St.next=r,St}function kn(){if(_t===null){var r=nt.alternate;r=r!==null?r.memoizedState:null}else r=_t.next;var s=St===null?nt.memoizedState:St.next;if(s!==null)St=s,_t=r;else{if(r===null)throw Error(t(310));_t=r,r={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},St===null?nt.memoizedState=St=r:St=St.next=r}return St}function Ba(r,s){return typeof s=="function"?s(r):s}function ud(r){var s=kn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=_t,f=h.baseQueue,g=l.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}h.baseQueue=f=g,l.pending=null}if(f!==null){g=f.next,h=h.baseState;var R=w=null,C=null,B=g;do{var X=B.lane;if((fs&X)===X)C!==null&&(C=C.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),h=B.hasEagerState?B.eagerState:r(h,B.action);else{var J={lane:X,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};C===null?(R=C=J,w=h):C=C.next=J,nt.lanes|=X,ps|=X}B=B.next}while(B!==null&&B!==g);C===null?w=h:C.next=R,jn(h,s.memoizedState)||(nn=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=C,l.lastRenderedState=h}if(r=l.interleaved,r!==null){f=r;do g=f.lane,nt.lanes|=g,ps|=g,f=f.next;while(f!==r)}else f===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function cd(r){var s=kn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=l.dispatch,f=l.pending,g=s.memoizedState;if(f!==null){l.pending=null;var w=f=f.next;do g=r(g,w.action),w=w.next;while(w!==f);jn(g,s.memoizedState)||(nn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,h]}function lg(){}function ug(r,s){var l=nt,h=kn(),f=s(),g=!jn(h.memoizedState,f);if(g&&(h.memoizedState=f,nn=!0),h=h.queue,hd(dg.bind(null,l,h,r),[r]),h.getSnapshot!==s||g||St!==null&&St.memoizedState.tag&1){if(l.flags|=2048,$a(9,hg.bind(null,l,h,f,s),void 0,null),Rt===null)throw Error(t(349));fs&30||cg(l,s,f)}return f}function cg(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function hg(r,s,l,h){s.value=l,s.getSnapshot=h,fg(s)&&pg(r)}function dg(r,s,l){return l(function(){fg(s)&&pg(r)})}function fg(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!jn(r,l)}catch{return!0}}function pg(r){var s=Lr(r,1);s!==null&&qn(s,r,1,-1)}function mg(r){var s=cr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:r},s.queue=r,r=r.dispatch=g1.bind(null,nt,r),[s.memoizedState,r]}function $a(r,s,l,h){return r={tag:r,create:s,destroy:l,deps:h,next:null},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(h=l.next,l.next=r,r.next=h,s.lastEffect=r)),r}function gg(){return kn().memoizedState}function Nu(r,s,l,h){var f=cr();nt.flags|=r,f.memoizedState=$a(1|s,l,void 0,h===void 0?null:h)}function xu(r,s,l,h){var f=kn();h=h===void 0?null:h;var g=void 0;if(_t!==null){var w=_t.memoizedState;if(g=w.destroy,h!==null&&od(h,w.deps)){f.memoizedState=$a(s,l,g,h);return}}nt.flags|=r,f.memoizedState=$a(1|s,l,g,h)}function yg(r,s){return Nu(8390656,8,r,s)}function hd(r,s){return xu(2048,8,r,s)}function _g(r,s){return xu(4,2,r,s)}function vg(r,s){return xu(4,4,r,s)}function wg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Eg(r,s,l){return l=l!=null?l.concat([r]):null,xu(4,4,wg.bind(null,s,r),l)}function dd(){}function Tg(r,s){var l=kn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&od(s,h[1])?h[0]:(l.memoizedState=[r,s],r)}function Ig(r,s){var l=kn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&od(s,h[1])?h[0]:(r=r(),l.memoizedState=[r,s],r)}function Sg(r,s,l){return fs&21?(jn(l,s)||(l=ns(),nt.lanes|=l,ps|=l,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,nn=!0),r.memoizedState=l)}function p1(r,s){var l=xe;xe=l!==0&&4>l?l:4,r(!0);var h=sd.transition;sd.transition={};try{r(!1),s()}finally{xe=l,sd.transition=h}}function Rg(){return kn().memoizedState}function m1(r,s,l){var h=wi(r);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Ag(r))kg(s,l);else if(l=rg(r,s,l,h),l!==null){var f=Qt();qn(l,r,h,f),Cg(l,s,h)}}function g1(r,s,l){var h=wi(r),f={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ag(r))kg(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,R=g(w,l);if(f.hasEagerState=!0,f.eagerState=R,jn(R,w)){var C=s.interleaved;C===null?(f.next=f,Zh(s)):(f.next=C.next,C.next=f),s.interleaved=f;return}}catch{}finally{}l=rg(r,s,f,h),l!==null&&(f=Qt(),qn(l,r,h,f),Cg(l,s,h))}}function Ag(r){var s=r.alternate;return r===nt||s!==null&&s===nt}function kg(r,s){za=Pu=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function Cg(r,s,l){if(l&4194240){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,si(r,l)}}var bu={readContext:An,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},y1={readContext:An,useCallback:function(r,s){return cr().memoizedState=[r,s===void 0?null:s],r},useContext:An,useEffect:yg,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,Nu(4194308,4,wg.bind(null,s,r),l)},useLayoutEffect:function(r,s){return Nu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Nu(4,2,r,s)},useMemo:function(r,s){var l=cr();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var h=cr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=m1.bind(null,nt,r),[h.memoizedState,r]},useRef:function(r){var s=cr();return r={current:r},s.memoizedState=r},useState:mg,useDebugValue:dd,useDeferredValue:function(r){return cr().memoizedState=r},useTransition:function(){var r=mg(!1),s=r[0];return r=p1.bind(null,r[1]),cr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var h=nt,f=cr();if(Je){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Rt===null)throw Error(t(349));fs&30||cg(h,s,l)}f.memoizedState=l;var g={value:l,getSnapshot:s};return f.queue=g,yg(dg.bind(null,h,g,r),[r]),h.flags|=2048,$a(9,hg.bind(null,h,g,l,s),void 0,null),l},useId:function(){var r=cr(),s=Rt.identifierPrefix;if(Je){var l=Or,h=Dr;l=(h&~(1<<32-qt(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=ja++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=f1++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},_1={readContext:An,useCallback:Tg,useContext:An,useEffect:hd,useImperativeHandle:Eg,useInsertionEffect:_g,useLayoutEffect:vg,useMemo:Ig,useReducer:ud,useRef:gg,useState:function(){return ud(Ba)},useDebugValue:dd,useDeferredValue:function(r){var s=kn();return Sg(s,_t.memoizedState,r)},useTransition:function(){var r=ud(Ba)[0],s=kn().memoizedState;return[r,s]},useMutableSource:lg,useSyncExternalStore:ug,useId:Rg,unstable_isNewReconciler:!1},v1={readContext:An,useCallback:Tg,useContext:An,useEffect:hd,useImperativeHandle:Eg,useInsertionEffect:_g,useLayoutEffect:vg,useMemo:Ig,useReducer:cd,useRef:gg,useState:function(){return cd(Ba)},useDebugValue:dd,useDeferredValue:function(r){var s=kn();return _t===null?s.memoizedState=r:Sg(s,_t.memoizedState,r)},useTransition:function(){var r=cd(Ba)[0],s=kn().memoizedState;return[r,s]},useMutableSource:lg,useSyncExternalStore:ug,useId:Rg,unstable_isNewReconciler:!1};function $n(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function fd(r,s,l,h){s=r.memoizedState,l=l(h,s),l=l==null?s:oe({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Du={isMounted:function(r){return(r=r._reactInternals)?On(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var h=Qt(),f=wi(r),g=Vr(h,f);g.payload=s,l!=null&&(g.callback=l),s=gi(r,g,f),s!==null&&(qn(s,r,f,h),Ru(s,r,f))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var h=Qt(),f=wi(r),g=Vr(h,f);g.tag=1,g.payload=s,l!=null&&(g.callback=l),s=gi(r,g,f),s!==null&&(qn(s,r,f,h),Ru(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Qt(),h=wi(r),f=Vr(l,h);f.tag=2,s!=null&&(f.callback=s),s=gi(r,f,h),s!==null&&(qn(s,r,h,l),Ru(s,r,h))}};function Pg(r,s,l,h,f,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,w):s.prototype&&s.prototype.isPureReactComponent?!Pa(l,h)||!Pa(f,g):!0}function Ng(r,s,l){var h=!1,f=fi,g=s.contextType;return typeof g=="object"&&g!==null?g=An(g):(f=tn(s)?ls:Ut.current,h=s.contextTypes,g=(h=h!=null)?mo(r,f):fi),s=new s(l,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Du,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function xg(r,s,l,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==r&&Du.enqueueReplaceState(s,s.state,null)}function pd(r,s,l,h){var f=r.stateNode;f.props=l,f.state=r.memoizedState,f.refs={},ed(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=An(g):(g=tn(s)?ls:Ut.current,f.context=mo(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(fd(r,s,g,l),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Du.enqueueReplaceState(f,f.state,null),Au(r,l,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function Io(r,s){try{var l="",h=s;do l+=Ae(h),h=h.return;while(h);var f=l}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function md(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function gd(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var w1=typeof WeakMap=="function"?WeakMap:Map;function bg(r,s,l){l=Vr(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){zu||(zu=!0,xd=h),gd(r,s)},l}function Dg(r,s,l){l=Vr(-1,l),l.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;l.payload=function(){return h(f)},l.callback=function(){gd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){gd(r,s),typeof h!="function"&&(_i===null?_i=new Set([this]):_i.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),l}function Og(r,s,l){var h=r.pingCache;if(h===null){h=r.pingCache=new w1;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(l)||(f.add(l),r=O1.bind(null,r,s,l),s.then(r,r))}function Lg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Vg(r,s,l,h,f){return r.mode&1?(r.flags|=65536,r.lanes=f,r):(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Vr(-1,1),s.tag=2,gi(l,s,1))),l.lanes|=1),r)}var E1=re.ReactCurrentOwner,nn=!1;function Gt(r,s,l,h){s.child=r===null?ng(s,null,l,h):vo(s,r.child,l,h)}function Mg(r,s,l,h,f){l=l.render;var g=s.ref;return Eo(s,f),h=ad(r,s,l,h,g,f),l=ld(),r!==null&&!nn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Mr(r,s,f)):(Je&&l&&Wh(s),s.flags|=1,Gt(r,s,h,f),s.child)}function Ug(r,s,l,h,f){if(r===null){var g=l.type;return typeof g=="function"&&!Ud(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=g,Fg(r,s,g,h,f)):(r=qu(l.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&f)){var w=g.memoizedProps;if(l=l.compare,l=l!==null?l:Pa,l(w,h)&&r.ref===s.ref)return Mr(r,s,f)}return s.flags|=1,r=Ti(g,h),r.ref=s.ref,r.return=s,s.child=r}function Fg(r,s,l,h,f){if(r!==null){var g=r.memoizedProps;if(Pa(g,h)&&r.ref===s.ref)if(nn=!1,s.pendingProps=h=g,(r.lanes&f)!==0)r.flags&131072&&(nn=!0);else return s.lanes=r.lanes,Mr(r,s,f)}return yd(r,s,l,h,f)}function zg(r,s,l){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Ro,gn),gn|=l;else{if(!(l&1073741824))return r=g!==null?g.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ke(Ro,gn),gn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:l,Ke(Ro,gn),gn|=h}else g!==null?(h=g.baseLanes|l,s.memoizedState=null):h=l,Ke(Ro,gn),gn|=h;return Gt(r,s,f,l),s.child}function jg(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function yd(r,s,l,h,f){var g=tn(l)?ls:Ut.current;return g=mo(s,g),Eo(s,f),l=ad(r,s,l,h,g,f),h=ld(),r!==null&&!nn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Mr(r,s,f)):(Je&&h&&Wh(s),s.flags|=1,Gt(r,s,l,f),s.child)}function Bg(r,s,l,h,f){if(tn(l)){var g=!0;yu(s)}else g=!1;if(Eo(s,f),s.stateNode===null)Lu(r,s),Ng(s,l,h),pd(s,l,h,f),h=!0;else if(r===null){var w=s.stateNode,R=s.memoizedProps;w.props=R;var C=w.context,B=l.contextType;typeof B=="object"&&B!==null?B=An(B):(B=tn(l)?ls:Ut.current,B=mo(s,B));var X=l.getDerivedStateFromProps,J=typeof X=="function"||typeof w.getSnapshotBeforeUpdate=="function";J||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==h||C!==B)&&xg(s,w,h,B),mi=!1;var Y=s.memoizedState;w.state=Y,Au(s,h,w,f),C=s.memoizedState,R!==h||Y!==C||en.current||mi?(typeof X=="function"&&(fd(s,l,X,h),C=s.memoizedState),(R=mi||Pg(s,l,R,h,Y,C,B))?(J||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=C),w.props=h,w.state=C,w.context=B,h=R):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,ig(r,s),R=s.memoizedProps,B=s.type===s.elementType?R:$n(s.type,R),w.props=B,J=s.pendingProps,Y=w.context,C=l.contextType,typeof C=="object"&&C!==null?C=An(C):(C=tn(l)?ls:Ut.current,C=mo(s,C));var se=l.getDerivedStateFromProps;(X=typeof se=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==J||Y!==C)&&xg(s,w,h,C),mi=!1,Y=s.memoizedState,w.state=Y,Au(s,h,w,f);var ce=s.memoizedState;R!==J||Y!==ce||en.current||mi?(typeof se=="function"&&(fd(s,l,se,h),ce=s.memoizedState),(B=mi||Pg(s,l,B,h,Y,ce,C)||!1)?(X||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,ce,C),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,ce,C)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||R===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ce),w.props=h,w.state=ce,w.context=C,h=B):(typeof w.componentDidUpdate!="function"||R===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),h=!1)}return _d(r,s,l,h,g,f)}function _d(r,s,l,h,f,g){jg(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return f&&Km(s,l,!1),Mr(r,s,g);h=s.stateNode,E1.current=s;var R=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=vo(s,r.child,null,g),s.child=vo(s,null,R,g)):Gt(r,s,R,g),s.memoizedState=h.state,f&&Km(s,l,!0),s.child}function $g(r){var s=r.stateNode;s.pendingContext?Hm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Hm(r,s.context,!1),td(r,s.containerInfo)}function Wg(r,s,l,h,f){return _o(),Gh(f),s.flags|=256,Gt(r,s,l,h),s.child}var vd={dehydrated:null,treeContext:null,retryLane:0};function wd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Hg(r,s,l){var h=s.pendingProps,f=tt.current,g=!1,w=(s.flags&128)!==0,R;if((R=w)||(R=r!==null&&r.memoizedState===null?!1:(f&2)!==0),R?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),Ke(tt,f&1),r===null)return Kh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(w=h.children,r=h.fallback,g?(h=s.mode,g=s.child,w={mode:"hidden",children:w},!(h&1)&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Ku(w,h,0,null),r=_s(r,h,l,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=wd(l),s.memoizedState=vd,r):Ed(s,w));if(f=r.memoizedState,f!==null&&(R=f.dehydrated,R!==null))return T1(r,s,w,h,R,f,l);if(g){g=h.fallback,w=s.mode,f=r.child,R=f.sibling;var C={mode:"hidden",children:h.children};return!(w&1)&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=C,s.deletions=null):(h=Ti(f,C),h.subtreeFlags=f.subtreeFlags&14680064),R!==null?g=Ti(R,g):(g=_s(g,w,l,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,w=r.child.memoizedState,w=w===null?wd(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~l,s.memoizedState=vd,h}return g=r.child,r=g.sibling,h=Ti(g,{mode:"visible",children:h.children}),!(s.mode&1)&&(h.lanes=l),h.return=s,h.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=h,s.memoizedState=null,h}function Ed(r,s){return s=Ku({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Ou(r,s,l,h){return h!==null&&Gh(h),vo(s,r.child,null,l),r=Ed(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function T1(r,s,l,h,f,g,w){if(l)return s.flags&256?(s.flags&=-257,h=md(Error(t(422))),Ou(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=Ku({mode:"visible",children:h.children},f,0,null),g=_s(g,f,w,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,s.mode&1&&vo(s,r.child,null,w),s.child.memoizedState=wd(w),s.memoizedState=vd,g);if(!(s.mode&1))return Ou(r,s,w,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var R=h.dgst;return h=R,g=Error(t(419)),h=md(g,h,void 0),Ou(r,s,w,h)}if(R=(w&r.childLanes)!==0,nn||R){if(h=Rt,h!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(h.suspendedLanes|w)?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Lr(r,f),qn(h,r,f,-1))}return Md(),h=md(Error(t(421))),Ou(r,s,w,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=L1.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,mn=hi(f.nextSibling),pn=s,Je=!0,Bn=null,r!==null&&(Sn[Rn++]=Dr,Sn[Rn++]=Or,Sn[Rn++]=us,Dr=r.id,Or=r.overflow,us=s),s=Ed(s,h.children),s.flags|=4096,s)}function qg(r,s,l){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Jh(r.return,s,l)}function Td(r,s,l,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=l,g.tailMode=f)}function Kg(r,s,l){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(Gt(r,s,h.children,l),h=tt.current,h&2)h=h&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&qg(r,l,s);else if(r.tag===19)qg(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(Ke(tt,h),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(l=s.child,f=null;l!==null;)r=l.alternate,r!==null&&ku(r)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),Td(s,!1,f,l,g);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&ku(r)===null){s.child=f;break}r=f.sibling,f.sibling=l,l=f,f=r}Td(s,!0,l,null,g);break;case"together":Td(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Lu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Mr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),ps|=s.lanes,!(l&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=Ti(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=Ti(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function I1(r,s,l){switch(s.tag){case 3:$g(s),_o();break;case 5:ag(s);break;case 1:tn(s.type)&&yu(s);break;case 4:td(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;Ke(Iu,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Ke(tt,tt.current&1),s.flags|=128,null):l&s.child.childLanes?Hg(r,s,l):(Ke(tt,tt.current&1),r=Mr(r,s,l),r!==null?r.sibling:null);Ke(tt,tt.current&1);break;case 19:if(h=(l&s.childLanes)!==0,r.flags&128){if(h)return Kg(r,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ke(tt,tt.current),h)break;return null;case 22:case 23:return s.lanes=0,zg(r,s,l)}return Mr(r,s,l)}var Gg,Id,Qg,Yg;Gg=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Id=function(){},Qg=function(r,s,l,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,ds(ur.current);var g=null;switch(l){case"input":f=Hi(r,f),h=Hi(r,h),g=[];break;case"select":f=oe({},f,{value:void 0}),h=oe({},h,{value:void 0}),g=[];break;case"textarea":f=ia(r,f),h=ia(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=pu)}ca(l,h);var w;l=null;for(B in f)if(!h.hasOwnProperty(B)&&f.hasOwnProperty(B)&&f[B]!=null)if(B==="style"){var R=f[B];for(w in R)R.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?g||(g=[]):(g=g||[]).push(B,null));for(B in h){var C=h[B];if(R=f!=null?f[B]:void 0,h.hasOwnProperty(B)&&C!==R&&(C!=null||R!=null))if(B==="style")if(R){for(w in R)!R.hasOwnProperty(w)||C&&C.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in C)C.hasOwnProperty(w)&&R[w]!==C[w]&&(l||(l={}),l[w]=C[w])}else l||(g||(g=[]),g.push(B,l)),l=C;else B==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,R=R?R.__html:void 0,C!=null&&R!==C&&(g=g||[]).push(B,C)):B==="children"?typeof C!="string"&&typeof C!="number"||(g=g||[]).push(B,""+C):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(C!=null&&B==="onScroll"&&Ge("scroll",r),g||R===C||(g=[])):(g=g||[]).push(B,C))}l&&(g=g||[]).push("style",l);var B=g;(s.updateQueue=B)&&(s.flags|=4)}},Yg=function(r,s,l,h){l!==h&&(s.flags|=4)};function Wa(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function zt(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,h=0;if(s)for(var f=r.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)l|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=l,s}function S1(r,s,l){var h=s.pendingProps;switch(Hh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(s),null;case 1:return tn(s.type)&&gu(),zt(s),null;case 3:return h=s.stateNode,To(),Qe(en),Qe(Ut),id(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(Eu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Bn!==null&&(Od(Bn),Bn=null))),Id(r,s),zt(s),null;case 5:nd(s);var f=ds(Fa.current);if(l=s.type,r!==null&&s.stateNode!=null)Qg(r,s,l,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return zt(s),null}if(r=ds(ur.current),Eu(s)){h=s.stateNode,l=s.type;var g=s.memoizedProps;switch(h[lr]=s,h[Oa]=g,r=(s.mode&1)!==0,l){case"dialog":Ge("cancel",h),Ge("close",h);break;case"iframe":case"object":case"embed":Ge("load",h);break;case"video":case"audio":for(f=0;f<xa.length;f++)Ge(xa[f],h);break;case"source":Ge("error",h);break;case"img":case"image":case"link":Ge("error",h),Ge("load",h);break;case"details":Ge("toggle",h);break;case"input":Vs(h,g),Ge("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Ge("invalid",h);break;case"textarea":Us(h,g),Ge("invalid",h)}ca(l,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var R=g[w];w==="children"?typeof R=="string"?h.textContent!==R&&(g.suppressHydrationWarning!==!0&&fu(h.textContent,R,r),f=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(g.suppressHydrationWarning!==!0&&fu(h.textContent,R,r),f=["children",""+R]):o.hasOwnProperty(w)&&R!=null&&w==="onScroll"&&Ge("scroll",h)}switch(l){case"input":Er(h),Fl(h,g,!0);break;case"textarea":Er(h),sa(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=pu)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=mt(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(l,{is:h.is}):(r=w.createElement(l),l==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,l),r[lr]=s,r[Oa]=h,Gg(r,s,!1,!1),s.stateNode=r;e:{switch(w=ha(l,h),l){case"dialog":Ge("cancel",r),Ge("close",r),f=h;break;case"iframe":case"object":case"embed":Ge("load",r),f=h;break;case"video":case"audio":for(f=0;f<xa.length;f++)Ge(xa[f],r);f=h;break;case"source":Ge("error",r),f=h;break;case"img":case"image":case"link":Ge("error",r),Ge("load",r),f=h;break;case"details":Ge("toggle",r),f=h;break;case"input":Vs(r,h),f=Hi(r,h),Ge("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=oe({},h,{value:void 0}),Ge("invalid",r);break;case"textarea":Us(r,h),f=ia(r,h),Ge("invalid",r);break;default:f=h}ca(l,f),R=f;for(g in R)if(R.hasOwnProperty(g)){var C=R[g];g==="style"?la(r,C):g==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&oa(r,C)):g==="children"?typeof C=="string"?(l!=="textarea"||C!=="")&&ei(r,C):typeof C=="number"&&ei(r,""+C):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?C!=null&&g==="onScroll"&&Ge("scroll",r):C!=null&&Z(r,g,C,w))}switch(l){case"input":Er(r),Fl(r,h,!1);break;case"textarea":Er(r),sa(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Fe(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?Ir(r,!!h.multiple,g,!1):h.defaultValue!=null&&Ir(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=pu)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return zt(s),null;case 6:if(r&&s.stateNode!=null)Yg(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=ds(Fa.current),ds(ur.current),Eu(s)){if(h=s.stateNode,l=s.memoizedProps,h[lr]=s,(g=h.nodeValue!==l)&&(r=pn,r!==null))switch(r.tag){case 3:fu(h.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&fu(h.nodeValue,l,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[lr]=s,s.stateNode=h}return zt(s),null;case 13:if(Qe(tt),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Je&&mn!==null&&s.mode&1&&!(s.flags&128))Zm(),_o(),s.flags|=98560,g=!1;else if(g=Eu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[lr]=s}else _o(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;zt(s),g=!1}else Bn!==null&&(Od(Bn),Bn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=l,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,s.mode&1&&(r===null||tt.current&1?vt===0&&(vt=3):Md())),s.updateQueue!==null&&(s.flags|=4),zt(s),null);case 4:return To(),Id(r,s),r===null&&ba(s.stateNode.containerInfo),zt(s),null;case 10:return Xh(s.type._context),zt(s),null;case 17:return tn(s.type)&&gu(),zt(s),null;case 19:if(Qe(tt),g=s.memoizedState,g===null)return zt(s),null;if(h=(s.flags&128)!==0,w=g.rendering,w===null)if(h)Wa(g,!1);else{if(vt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(w=ku(r),w!==null){for(s.flags|=128,Wa(g,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)g=l,r=h,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return Ke(tt,tt.current&1|2),s.child}r=r.sibling}g.tail!==null&&qe()>Ao&&(s.flags|=128,h=!0,Wa(g,!1),s.lanes=4194304)}else{if(!h)if(r=ku(w),r!==null){if(s.flags|=128,h=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Wa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Je)return zt(s),null}else 2*qe()-g.renderingStartTime>Ao&&l!==1073741824&&(s.flags|=128,h=!0,Wa(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(l=g.last,l!==null?l.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=qe(),s.sibling=null,l=tt.current,Ke(tt,h?l&1|2:l&1),s):(zt(s),null);case 22:case 23:return Vd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&s.mode&1?gn&1073741824&&(zt(s),s.subtreeFlags&6&&(s.flags|=8192)):zt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function R1(r,s){switch(Hh(s),s.tag){case 1:return tn(s.type)&&gu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return To(),Qe(en),Qe(Ut),id(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return nd(s),null;case 13:if(Qe(tt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));_o()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Qe(tt),null;case 4:return To(),null;case 10:return Xh(s.type._context),null;case 22:case 23:return Vd(),null;case 24:return null;default:return null}}var Vu=!1,jt=!1,A1=typeof WeakSet=="function"?WeakSet:Set,le=null;function So(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){it(r,s,h)}else l.current=null}function Sd(r,s,l){try{l()}catch(h){it(r,s,h)}}var Xg=!1;function k1(r,s){if(Vh=li,r=Pm(),Ch(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var w=0,R=-1,C=-1,B=0,X=0,J=r,Y=null;t:for(;;){for(var se;J!==l||f!==0&&J.nodeType!==3||(R=w+f),J!==g||h!==0&&J.nodeType!==3||(C=w+h),J.nodeType===3&&(w+=J.nodeValue.length),(se=J.firstChild)!==null;)Y=J,J=se;for(;;){if(J===r)break t;if(Y===l&&++B===f&&(R=w),Y===g&&++X===h&&(C=w),(se=J.nextSibling)!==null)break;J=Y,Y=J.parentNode}J=se}l=R===-1||C===-1?null:{start:R,end:C}}else l=null}l=l||{start:0,end:0}}else l=null;for(Mh={focusedElem:r,selectionRange:l},li=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ce=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,ut=ce.memoizedState,F=s.stateNode,b=F.getSnapshotBeforeUpdate(s.elementType===s.type?he:$n(s.type,he),ut);F.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var z=s.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){it(s,s.return,ee)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ce=Xg,Xg=!1,ce}function Ha(r,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&Sd(s,l,g)}f=f.next}while(f!==h)}}function Mu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Rd(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function Jg(r){var s=r.alternate;s!==null&&(r.alternate=null,Jg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[lr],delete s[Oa],delete s[jh],delete s[u1],delete s[c1])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Zg(r){return r.tag===5||r.tag===3||r.tag===4}function ey(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Zg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ad(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=pu));else if(h!==4&&(r=r.child,r!==null))for(Ad(r,s,l),r=r.sibling;r!==null;)Ad(r,s,l),r=r.sibling}function kd(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(kd(r,s,l),r=r.sibling;r!==null;)kd(r,s,l),r=r.sibling}var Nt=null,Wn=!1;function yi(r,s,l){for(l=l.child;l!==null;)ty(r,s,l),l=l.sibling}function ty(r,s,l){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(es,l)}catch{}switch(l.tag){case 5:jt||So(l,s);case 6:var h=Nt,f=Wn;Nt=null,yi(r,s,l),Nt=h,Wn=f,Nt!==null&&(Wn?(r=Nt,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Nt.removeChild(l.stateNode));break;case 18:Nt!==null&&(Wn?(r=Nt,l=l.stateNode,r.nodeType===8?zh(r.parentNode,l):r.nodeType===1&&zh(r,l),Fn(r)):zh(Nt,l.stateNode));break;case 4:h=Nt,f=Wn,Nt=l.stateNode.containerInfo,Wn=!0,yi(r,s,l),Nt=h,Wn=f;break;case 0:case 11:case 14:case 15:if(!jt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&(g&2||g&4)&&Sd(l,s,w),f=f.next}while(f!==h)}yi(r,s,l);break;case 1:if(!jt&&(So(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(R){it(l,s,R)}yi(r,s,l);break;case 21:yi(r,s,l);break;case 22:l.mode&1?(jt=(h=jt)||l.memoizedState!==null,yi(r,s,l),jt=h):yi(r,s,l);break;default:yi(r,s,l)}}function ny(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new A1),s.forEach(function(h){var f=V1.bind(null,r,h);l.has(h)||(l.add(h),h.then(f,f))})}}function Hn(r,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var f=l[h];try{var g=r,w=s,R=w;e:for(;R!==null;){switch(R.tag){case 5:Nt=R.stateNode,Wn=!1;break e;case 3:Nt=R.stateNode.containerInfo,Wn=!0;break e;case 4:Nt=R.stateNode.containerInfo,Wn=!0;break e}R=R.return}if(Nt===null)throw Error(t(160));ty(g,w,f),Nt=null,Wn=!1;var C=f.alternate;C!==null&&(C.return=null),f.return=null}catch(B){it(f,s,B)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)ry(s,r),s=s.sibling}function ry(r,s){var l=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Hn(s,r),hr(r),h&4){try{Ha(3,r,r.return),Mu(3,r)}catch(he){it(r,r.return,he)}try{Ha(5,r,r.return)}catch(he){it(r,r.return,he)}}break;case 1:Hn(s,r),hr(r),h&512&&l!==null&&So(l,l.return);break;case 5:if(Hn(s,r),hr(r),h&512&&l!==null&&So(l,l.return),r.flags&32){var f=r.stateNode;try{ei(f,"")}catch(he){it(r,r.return,he)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,w=l!==null?l.memoizedProps:g,R=r.type,C=r.updateQueue;if(r.updateQueue=null,C!==null)try{R==="input"&&g.type==="radio"&&g.name!=null&&na(f,g),ha(R,w);var B=ha(R,g);for(w=0;w<C.length;w+=2){var X=C[w],J=C[w+1];X==="style"?la(f,J):X==="dangerouslySetInnerHTML"?oa(f,J):X==="children"?ei(f,J):Z(f,X,J,B)}switch(R){case"input":ra(f,g);break;case"textarea":Fs(f,g);break;case"select":var Y=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?Ir(f,!!g.multiple,se,!1):Y!==!!g.multiple&&(g.defaultValue!=null?Ir(f,!!g.multiple,g.defaultValue,!0):Ir(f,!!g.multiple,g.multiple?[]:"",!1))}f[Oa]=g}catch(he){it(r,r.return,he)}}break;case 6:if(Hn(s,r),hr(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(he){it(r,r.return,he)}}break;case 3:if(Hn(s,r),hr(r),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Fn(s.containerInfo)}catch(he){it(r,r.return,he)}break;case 4:Hn(s,r),hr(r);break;case 13:Hn(s,r),hr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Nd=qe())),h&4&&ny(r);break;case 22:if(X=l!==null&&l.memoizedState!==null,r.mode&1?(jt=(B=jt)||X,Hn(s,r),jt=B):Hn(s,r),hr(r),h&8192){if(B=r.memoizedState!==null,(r.stateNode.isHidden=B)&&!X&&r.mode&1)for(le=r,X=r.child;X!==null;){for(J=le=X;le!==null;){switch(Y=le,se=Y.child,Y.tag){case 0:case 11:case 14:case 15:Ha(4,Y,Y.return);break;case 1:So(Y,Y.return);var ce=Y.stateNode;if(typeof ce.componentWillUnmount=="function"){h=Y,l=Y.return;try{s=h,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){it(h,l,he)}}break;case 5:So(Y,Y.return);break;case 22:if(Y.memoizedState!==null){oy(J);continue}}se!==null?(se.return=Y,le=se):oy(J)}X=X.sibling}e:for(X=null,J=r;;){if(J.tag===5){if(X===null){X=J;try{f=J.stateNode,B?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(R=J.stateNode,C=J.memoizedProps.style,w=C!=null&&C.hasOwnProperty("display")?C.display:null,R.style.display=aa("display",w))}catch(he){it(r,r.return,he)}}}else if(J.tag===6){if(X===null)try{J.stateNode.nodeValue=B?"":J.memoizedProps}catch(he){it(r,r.return,he)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;X===J&&(X=null),J=J.return}X===J&&(X=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Hn(s,r),hr(r),h&4&&ny(r);break;case 21:break;default:Hn(s,r),hr(r)}}function hr(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(Zg(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(ei(f,""),h.flags&=-33);var g=ey(r);kd(r,g,f);break;case 3:case 4:var w=h.stateNode.containerInfo,R=ey(r);Ad(r,R,w);break;default:throw Error(t(161))}}catch(C){it(r,r.return,C)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function C1(r,s,l){le=r,iy(r)}function iy(r,s,l){for(var h=(r.mode&1)!==0;le!==null;){var f=le,g=f.child;if(f.tag===22&&h){var w=f.memoizedState!==null||Vu;if(!w){var R=f.alternate,C=R!==null&&R.memoizedState!==null||jt;R=Vu;var B=jt;if(Vu=w,(jt=C)&&!B)for(le=f;le!==null;)w=le,C=w.child,w.tag===22&&w.memoizedState!==null?ay(f):C!==null?(C.return=w,le=C):ay(f);for(;g!==null;)le=g,iy(g),g=g.sibling;le=f,Vu=R,jt=B}sy(r)}else f.subtreeFlags&8772&&g!==null?(g.return=f,le=g):sy(r)}}function sy(r){for(;le!==null;){var s=le;if(s.flags&8772){var l=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:jt||Mu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!jt)if(l===null)h.componentDidMount();else{var f=s.elementType===s.type?l.memoizedProps:$n(s.type,l.memoizedProps);h.componentDidUpdate(f,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&og(s,g,h);break;case 3:var w=s.updateQueue;if(w!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}og(s,w,l)}break;case 5:var R=s.stateNode;if(l===null&&s.flags&4){l=R;var C=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&l.focus();break;case"img":C.src&&(l.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var B=s.alternate;if(B!==null){var X=B.memoizedState;if(X!==null){var J=X.dehydrated;J!==null&&Fn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||s.flags&512&&Rd(s)}catch(Y){it(s,s.return,Y)}}if(s===r){le=null;break}if(l=s.sibling,l!==null){l.return=s.return,le=l;break}le=s.return}}function oy(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var l=s.sibling;if(l!==null){l.return=s.return,le=l;break}le=s.return}}function ay(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Mu(4,s)}catch(C){it(s,l,C)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(C){it(s,f,C)}}var g=s.return;try{Rd(s)}catch(C){it(s,g,C)}break;case 5:var w=s.return;try{Rd(s)}catch(C){it(s,w,C)}}}catch(C){it(s,s.return,C)}if(s===r){le=null;break}var R=s.sibling;if(R!==null){R.return=s.return,le=R;break}le=s.return}}var P1=Math.ceil,Uu=re.ReactCurrentDispatcher,Cd=re.ReactCurrentOwner,Cn=re.ReactCurrentBatchConfig,Ve=0,Rt=null,dt=null,xt=0,gn=0,Ro=di(0),vt=0,qa=null,ps=0,Fu=0,Pd=0,Ka=null,rn=null,Nd=0,Ao=1/0,Ur=null,zu=!1,xd=null,_i=null,ju=!1,vi=null,Bu=0,Ga=0,bd=null,$u=-1,Wu=0;function Qt(){return Ve&6?qe():$u!==-1?$u:$u=qe()}function wi(r){return r.mode&1?Ve&2&&xt!==0?xt&-xt:d1.transition!==null?(Wu===0&&(Wu=ns()),Wu):(r=xe,r!==0||(r=window.event,r=r===void 0?16:Ta(r.type)),r):1}function qn(r,s,l,h){if(50<Ga)throw Ga=0,bd=null,Error(t(185));ii(r,l,h),(!(Ve&2)||r!==Rt)&&(r===Rt&&(!(Ve&2)&&(Fu|=l),vt===4&&Ei(r,xt)),sn(r,h),l===1&&Ve===0&&!(s.mode&1)&&(Ao=qe()+500,_u&&pi()))}function sn(r,s){var l=r.callbackNode;Ar(r,s);var h=ts(r,r===Rt?xt:0);if(h===0)l!==null&&ya(l),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(l!=null&&ya(l),s===1)r.tag===0?h1(uy.bind(null,r)):Gm(uy.bind(null,r)),a1(function(){!(Ve&6)&&pi()}),l=null;else{switch(oi(h)){case 1:l=Zi;break;case 4:l=ti;break;case 16:l=En;break;case 536870912:l=Wl;break;default:l=En}l=yy(l,ly.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function ly(r,s){if($u=-1,Wu=0,Ve&6)throw Error(t(327));var l=r.callbackNode;if(ko()&&r.callbackNode!==l)return null;var h=ts(r,r===Rt?xt:0);if(h===0)return null;if(h&30||h&r.expiredLanes||s)s=Hu(r,h);else{s=h;var f=Ve;Ve|=2;var g=hy();(Rt!==r||xt!==s)&&(Ur=null,Ao=qe()+500,gs(r,s));do try{b1();break}catch(R){cy(r,R)}while(!0);Yh(),Uu.current=g,Ve=f,dt!==null?s=0:(Rt=null,xt=0,s=vt)}if(s!==0){if(s===2&&(f=hn(r),f!==0&&(h=f,s=Dd(r,f))),s===1)throw l=qa,gs(r,0),Ei(r,h),sn(r,qe()),l;if(s===6)Ei(r,h);else{if(f=r.current.alternate,!(h&30)&&!N1(f)&&(s=Hu(r,h),s===2&&(g=hn(r),g!==0&&(h=g,s=Dd(r,g))),s===1))throw l=qa,gs(r,0),Ei(r,h),sn(r,qe()),l;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:ys(r,rn,Ur);break;case 3:if(Ei(r,h),(h&130023424)===h&&(s=Nd+500-qe(),10<s)){if(ts(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){Qt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Fh(ys.bind(null,r,rn,Ur),s);break}ys(r,rn,Ur);break;case 4:if(Ei(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var w=31-qt(h);g=1<<w,w=s[w],w>f&&(f=w),h&=~g}if(h=f,h=qe()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*P1(h/1960))-h,10<h){r.timeoutHandle=Fh(ys.bind(null,r,rn,Ur),h);break}ys(r,rn,Ur);break;case 5:ys(r,rn,Ur);break;default:throw Error(t(329))}}}return sn(r,qe()),r.callbackNode===l?ly.bind(null,r):null}function Dd(r,s){var l=Ka;return r.current.memoizedState.isDehydrated&&(gs(r,s).flags|=256),r=Hu(r,s),r!==2&&(s=rn,rn=l,s!==null&&Od(s)),r}function Od(r){rn===null?rn=r:rn.push.apply(rn,r)}function N1(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var f=l[h],g=f.getSnapshot;f=f.value;try{if(!jn(g(),f))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ei(r,s){for(s&=~Pd,s&=~Fu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-qt(s),h=1<<l;r[l]=-1,s&=~h}}function uy(r){if(Ve&6)throw Error(t(327));ko();var s=ts(r,0);if(!(s&1))return sn(r,qe()),null;var l=Hu(r,s);if(r.tag!==0&&l===2){var h=hn(r);h!==0&&(s=h,l=Dd(r,h))}if(l===1)throw l=qa,gs(r,0),Ei(r,s),sn(r,qe()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ys(r,rn,Ur),sn(r,qe()),null}function Ld(r,s){var l=Ve;Ve|=1;try{return r(s)}finally{Ve=l,Ve===0&&(Ao=qe()+500,_u&&pi())}}function ms(r){vi!==null&&vi.tag===0&&!(Ve&6)&&ko();var s=Ve;Ve|=1;var l=Cn.transition,h=xe;try{if(Cn.transition=null,xe=1,r)return r()}finally{xe=h,Cn.transition=l,Ve=s,!(Ve&6)&&pi()}}function Vd(){gn=Ro.current,Qe(Ro)}function gs(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,o1(l)),dt!==null)for(l=dt.return;l!==null;){var h=l;switch(Hh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&gu();break;case 3:To(),Qe(en),Qe(Ut),id();break;case 5:nd(h);break;case 4:To();break;case 13:Qe(tt);break;case 19:Qe(tt);break;case 10:Xh(h.type._context);break;case 22:case 23:Vd()}l=l.return}if(Rt=r,dt=r=Ti(r.current,null),xt=gn=s,vt=0,qa=null,Pd=Fu=ps=0,rn=Ka=null,hs!==null){for(s=0;s<hs.length;s++)if(l=hs[s],h=l.interleaved,h!==null){l.interleaved=null;var f=h.next,g=l.pending;if(g!==null){var w=g.next;g.next=f,h.next=w}l.pending=h}hs=null}return r}function cy(r,s){do{var l=dt;try{if(Yh(),Cu.current=bu,Pu){for(var h=nt.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}Pu=!1}if(fs=0,St=_t=nt=null,za=!1,ja=0,Cd.current=null,l===null||l.return===null){vt=1,qa=s,dt=null;break}e:{var g=r,w=l.return,R=l,C=s;if(s=xt,R.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var B=C,X=R,J=X.tag;if(!(X.mode&1)&&(J===0||J===11||J===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var se=Lg(w);if(se!==null){se.flags&=-257,Vg(se,w,R,g,s),se.mode&1&&Og(g,B,s),s=se,C=B;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(C),s.updateQueue=he}else ce.add(C);break e}else{if(!(s&1)){Og(g,B,s),Md();break e}C=Error(t(426))}}else if(Je&&R.mode&1){var ut=Lg(w);if(ut!==null){!(ut.flags&65536)&&(ut.flags|=256),Vg(ut,w,R,g,s),Gh(Io(C,R));break e}}g=C=Io(C,R),vt!==4&&(vt=2),Ka===null?Ka=[g]:Ka.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=bg(g,C,s);sg(g,F);break e;case 1:R=C;var b=g.type,z=g.stateNode;if(!(g.flags&128)&&(typeof b.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(_i===null||!_i.has(z)))){g.flags|=65536,s&=-s,g.lanes|=s;var ee=Dg(g,R,s);sg(g,ee);break e}}g=g.return}while(g!==null)}fy(l)}catch(de){s=de,dt===l&&l!==null&&(dt=l=l.return);continue}break}while(!0)}function hy(){var r=Uu.current;return Uu.current=bu,r===null?bu:r}function Md(){(vt===0||vt===3||vt===2)&&(vt=4),Rt===null||!(ps&268435455)&&!(Fu&268435455)||Ei(Rt,xt)}function Hu(r,s){var l=Ve;Ve|=2;var h=hy();(Rt!==r||xt!==s)&&(Ur=null,gs(r,s));do try{x1();break}catch(f){cy(r,f)}while(!0);if(Yh(),Ve=l,Uu.current=h,dt!==null)throw Error(t(261));return Rt=null,xt=0,vt}function x1(){for(;dt!==null;)dy(dt)}function b1(){for(;dt!==null&&!Bl();)dy(dt)}function dy(r){var s=gy(r.alternate,r,gn);r.memoizedProps=r.pendingProps,s===null?fy(r):dt=s,Cd.current=null}function fy(r){var s=r;do{var l=s.alternate;if(r=s.return,s.flags&32768){if(l=R1(l,s),l!==null){l.flags&=32767,dt=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{vt=6,dt=null;return}}else if(l=S1(l,s,gn),l!==null){dt=l;return}if(s=s.sibling,s!==null){dt=s;return}dt=s=r}while(s!==null);vt===0&&(vt=5)}function ys(r,s,l){var h=xe,f=Cn.transition;try{Cn.transition=null,xe=1,D1(r,s,l,h)}finally{Cn.transition=f,xe=h}return null}function D1(r,s,l,h){do ko();while(vi!==null);if(Ve&6)throw Error(t(327));l=r.finishedWork;var f=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=l.lanes|l.childLanes;if(We(r,g),r===Rt&&(dt=Rt=null,xt=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||ju||(ju=!0,yy(En,function(){return ko(),null})),g=(l.flags&15990)!==0,l.subtreeFlags&15990||g){g=Cn.transition,Cn.transition=null;var w=xe;xe=1;var R=Ve;Ve|=4,Cd.current=null,k1(r,l),ry(l,r),ZE(Mh),li=!!Vh,Mh=Vh=null,r.current=l,C1(l),wh(),Ve=R,xe=w,Cn.transition=g}else r.current=l;if(ju&&(ju=!1,vi=r,Bu=f),g=r.pendingLanes,g===0&&(_i=null),Hl(l.stateNode),sn(r,qe()),s!==null)for(h=r.onRecoverableError,l=0;l<s.length;l++)f=s[l],h(f.value,{componentStack:f.stack,digest:f.digest});if(zu)throw zu=!1,r=xd,xd=null,r;return Bu&1&&r.tag!==0&&ko(),g=r.pendingLanes,g&1?r===bd?Ga++:(Ga=0,bd=r):Ga=0,pi(),null}function ko(){if(vi!==null){var r=oi(Bu),s=Cn.transition,l=xe;try{if(Cn.transition=null,xe=16>r?16:r,vi===null)var h=!1;else{if(r=vi,vi=null,Bu=0,Ve&6)throw Error(t(331));var f=Ve;for(Ve|=4,le=r.current;le!==null;){var g=le,w=g.child;if(le.flags&16){var R=g.deletions;if(R!==null){for(var C=0;C<R.length;C++){var B=R[C];for(le=B;le!==null;){var X=le;switch(X.tag){case 0:case 11:case 15:Ha(8,X,g)}var J=X.child;if(J!==null)J.return=X,le=J;else for(;le!==null;){X=le;var Y=X.sibling,se=X.return;if(Jg(X),X===B){le=null;break}if(Y!==null){Y.return=se,le=Y;break}le=se}}}var ce=g.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var ut=he.sibling;he.sibling=null,he=ut}while(he!==null)}}le=g}}if(g.subtreeFlags&2064&&w!==null)w.return=g,le=w;else e:for(;le!==null;){if(g=le,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Ha(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,le=F;break e}le=g.return}}var b=r.current;for(le=b;le!==null;){w=le;var z=w.child;if(w.subtreeFlags&2064&&z!==null)z.return=w,le=z;else e:for(w=b;le!==null;){if(R=le,R.flags&2048)try{switch(R.tag){case 0:case 11:case 15:Mu(9,R)}}catch(de){it(R,R.return,de)}if(R===w){le=null;break e}var ee=R.sibling;if(ee!==null){ee.return=R.return,le=ee;break e}le=R.return}}if(Ve=f,pi(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(es,r)}catch{}h=!0}return h}finally{xe=l,Cn.transition=s}}return!1}function py(r,s,l){s=Io(l,s),s=bg(r,s,1),r=gi(r,s,1),s=Qt(),r!==null&&(ii(r,1,s),sn(r,s))}function it(r,s,l){if(r.tag===3)py(r,r,l);else for(;s!==null;){if(s.tag===3){py(s,r,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(_i===null||!_i.has(h))){r=Io(l,r),r=Dg(s,r,1),s=gi(s,r,1),r=Qt(),s!==null&&(ii(s,1,r),sn(s,r));break}}s=s.return}}function O1(r,s,l){var h=r.pingCache;h!==null&&h.delete(s),s=Qt(),r.pingedLanes|=r.suspendedLanes&l,Rt===r&&(xt&l)===l&&(vt===4||vt===3&&(xt&130023424)===xt&&500>qe()-Nd?gs(r,0):Pd|=l),sn(r,s)}function my(r,s){s===0&&(r.mode&1?(s=Qs,Qs<<=1,!(Qs&130023424)&&(Qs=4194304)):s=1);var l=Qt();r=Lr(r,s),r!==null&&(ii(r,s,l),sn(r,l))}function L1(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),my(r,l)}function V1(r,s){var l=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(l=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),my(r,l)}var gy;gy=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||en.current)nn=!0;else{if(!(r.lanes&l)&&!(s.flags&128))return nn=!1,I1(r,s,l);nn=!!(r.flags&131072)}else nn=!1,Je&&s.flags&1048576&&Qm(s,wu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Lu(r,s),r=s.pendingProps;var f=mo(s,Ut.current);Eo(s,l),f=ad(null,s,h,r,f,l);var g=ld();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,tn(h)?(g=!0,yu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,ed(s),f.updater=Du,s.stateNode=f,f._reactInternals=s,pd(s,h,r,l),s=_d(null,s,h,!0,g,l)):(s.tag=0,Je&&g&&Wh(s),Gt(null,s,f,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Lu(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=U1(h),r=$n(h,r),f){case 0:s=yd(null,s,h,r,l);break e;case 1:s=Bg(null,s,h,r,l);break e;case 11:s=Mg(null,s,h,r,l);break e;case 14:s=Ug(null,s,h,$n(h.type,r),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:$n(h,f),yd(r,s,h,f,l);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:$n(h,f),Bg(r,s,h,f,l);case 3:e:{if($g(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,ig(r,s),Au(s,h,null,l);var w=s.memoizedState;if(h=w.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=Io(Error(t(423)),s),s=Wg(r,s,h,l,f);break e}else if(h!==f){f=Io(Error(t(424)),s),s=Wg(r,s,h,l,f);break e}else for(mn=hi(s.stateNode.containerInfo.firstChild),pn=s,Je=!0,Bn=null,l=ng(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(_o(),h===f){s=Mr(r,s,l);break e}Gt(r,s,h,l)}s=s.child}return s;case 5:return ag(s),r===null&&Kh(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,w=f.children,Uh(h,f)?w=null:g!==null&&Uh(h,g)&&(s.flags|=32),jg(r,s),Gt(r,s,w,l),s.child;case 6:return r===null&&Kh(s),null;case 13:return Hg(r,s,l);case 4:return td(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=vo(s,null,h,l):Gt(r,s,h,l),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:$n(h,f),Mg(r,s,h,f,l);case 7:return Gt(r,s,s.pendingProps,l),s.child;case 8:return Gt(r,s,s.pendingProps.children,l),s.child;case 12:return Gt(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,w=f.value,Ke(Iu,h._currentValue),h._currentValue=w,g!==null)if(jn(g.value,w)){if(g.children===f.children&&!en.current){s=Mr(r,s,l);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var R=g.dependencies;if(R!==null){w=g.child;for(var C=R.firstContext;C!==null;){if(C.context===h){if(g.tag===1){C=Vr(-1,l&-l),C.tag=2;var B=g.updateQueue;if(B!==null){B=B.shared;var X=B.pending;X===null?C.next=C:(C.next=X.next,X.next=C),B.pending=C}}g.lanes|=l,C=g.alternate,C!==null&&(C.lanes|=l),Jh(g.return,l,s),R.lanes|=l;break}C=C.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=l,R=w.alternate,R!==null&&(R.lanes|=l),Jh(w,l,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Gt(r,s,f.children,l),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,Eo(s,l),f=An(f),h=h(f),s.flags|=1,Gt(r,s,h,l),s.child;case 14:return h=s.type,f=$n(h,s.pendingProps),f=$n(h.type,f),Ug(r,s,h,f,l);case 15:return Fg(r,s,s.type,s.pendingProps,l);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:$n(h,f),Lu(r,s),s.tag=1,tn(h)?(r=!0,yu(s)):r=!1,Eo(s,l),Ng(s,h,f),pd(s,h,f,l),_d(null,s,h,!0,r,l);case 19:return Kg(r,s,l);case 22:return zg(r,s,l)}throw Error(t(156,s.tag))};function yy(r,s){return Ks(r,s)}function M1(r,s,l,h){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(r,s,l,h){return new M1(r,s,l,h)}function Ud(r){return r=r.prototype,!(!r||!r.isReactComponent)}function U1(r){if(typeof r=="function")return Ud(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===Vt)return 14}return 2}function Ti(r,s){var l=r.alternate;return l===null?(l=Pn(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function qu(r,s,l,h,f,g){var w=2;if(h=r,typeof r=="function")Ud(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case x:return _s(l.children,f,g,s);case S:w=8,f|=8;break;case A:return r=Pn(12,l,s,f|2),r.elementType=A,r.lanes=g,r;case k:return r=Pn(13,l,s,f),r.elementType=k,r.lanes=g,r;case at:return r=Pn(19,l,s,f),r.elementType=at,r.lanes=g,r;case $e:return Ku(l,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case P:w=10;break e;case L:w=9;break e;case M:w=11;break e;case Vt:w=14;break e;case Mt:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Pn(w,l,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function _s(r,s,l,h){return r=Pn(7,r,h,s),r.lanes=l,r}function Ku(r,s,l,h){return r=Pn(22,r,h,s),r.elementType=$e,r.lanes=l,r.stateNode={isHidden:!1},r}function Fd(r,s,l){return r=Pn(6,r,null,s),r.lanes=l,r}function zd(r,s,l){return s=Pn(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function F1(r,s,l,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ri(0),this.expirationTimes=ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ri(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function jd(r,s,l,h,f,g,w,R,C){return r=new F1(r,s,l,R,C),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Pn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(g),r}function z1(r,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fe,key:h==null?null:""+h,children:r,containerInfo:s,implementation:l}}function _y(r){if(!r)return fi;r=r._reactInternals;e:{if(On(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(tn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(tn(l))return qm(r,l,s)}return s}function vy(r,s,l,h,f,g,w,R,C){return r=jd(l,h,!0,r,f,g,w,R,C),r.context=_y(null),l=r.current,h=Qt(),f=wi(l),g=Vr(h,f),g.callback=s??null,gi(l,g,f),r.current.lanes=f,ii(r,f,h),sn(r,h),r}function Gu(r,s,l,h){var f=s.current,g=Qt(),w=wi(f);return l=_y(l),s.context===null?s.context=l:s.pendingContext=l,s=Vr(g,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=gi(f,s,w),r!==null&&(qn(r,f,w,g),Ru(r,f,w)),w}function Qu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function wy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function Bd(r,s){wy(r,s),(r=r.alternate)&&wy(r,s)}function j1(){return null}var Ey=typeof reportError=="function"?reportError:function(r){console.error(r)};function $d(r){this._internalRoot=r}Yu.prototype.render=$d.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Gu(r,s,null,null)},Yu.prototype.unmount=$d.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ms(function(){Gu(null,r,null,null)}),s[xr]=null}};function Yu(r){this._internalRoot=r}Yu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Yl();r={blockedOn:null,target:r,priority:s};for(var l=0;l<ir.length&&s!==0&&s<ir[l].priority;l++);ir.splice(l,0,r),l===0&&Zl(r)}};function Wd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Xu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Ty(){}function B1(r,s,l,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var B=Qu(w);g.call(B)}}var w=vy(s,h,r,0,null,!1,!1,"",Ty);return r._reactRootContainer=w,r[xr]=w.current,ba(r.nodeType===8?r.parentNode:r),ms(),w}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var R=h;h=function(){var B=Qu(C);R.call(B)}}var C=jd(r,0,!1,null,null,!1,!1,"",Ty);return r._reactRootContainer=C,r[xr]=C.current,ba(r.nodeType===8?r.parentNode:r),ms(function(){Gu(s,C,l,h)}),C}function Ju(r,s,l,h,f){var g=l._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var R=f;f=function(){var C=Qu(w);R.call(C)}}Gu(s,w,r,f)}else w=B1(l,s,r,f,h);return Qu(w)}Gl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=ni(s.pendingLanes);l!==0&&(si(s,l|1),sn(s,qe()),!(Ve&6)&&(Ao=qe()+500,pi()))}break;case 13:ms(function(){var h=Lr(r,1);if(h!==null){var f=Qt();qn(h,r,1,f)}}),Bd(r,1)}},Ys=function(r){if(r.tag===13){var s=Lr(r,134217728);if(s!==null){var l=Qt();qn(s,r,134217728,l)}Bd(r,134217728)}},Ql=function(r){if(r.tag===13){var s=wi(r),l=Lr(r,s);if(l!==null){var h=Qt();qn(l,r,s,h)}Bd(r,s)}},Yl=function(){return xe},Xl=function(r,s){var l=xe;try{return xe=r,s()}finally{xe=l}},js=function(r,s,l){switch(s){case"input":if(ra(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==r&&h.form===r.form){var f=mu(h);if(!f)throw Error(t(90));Ls(h),ra(h,f)}}}break;case"textarea":Fs(r,l);break;case"select":s=l.value,s!=null&&Ir(r,!!l.multiple,s,!1)}},Qi=Ld,fa=ms;var $1={usingClientEntryPoint:!1,Events:[La,fo,mu,nr,da,Ld]},Qa={findFiberByHostInstance:as,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W1={bundleType:Qa.bundleType,version:Qa.version,rendererPackageName:Qa.rendererPackageName,rendererConfig:Qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ga(r),r===null?null:r.stateNode},findFiberByHostInstance:Qa.findFiberByHostInstance||j1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zu.isDisabled&&Zu.supportsFiber)try{es=Zu.inject(W1),cn=Zu}catch{}}return on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$1,on.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wd(s))throw Error(t(200));return z1(r,s,null,l)},on.createRoot=function(r,s){if(!Wd(r))throw Error(t(299));var l=!1,h="",f=Ey;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=jd(r,1,!1,null,null,l,!1,h,f),r[xr]=s.current,ba(r.nodeType===8?r.parentNode:r),new $d(s)},on.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ga(s),r=r===null?null:r.stateNode,r},on.flushSync=function(r){return ms(r)},on.hydrate=function(r,s,l){if(!Xu(s))throw Error(t(200));return Ju(null,r,s,!0,l)},on.hydrateRoot=function(r,s,l){if(!Wd(r))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,f=!1,g="",w=Ey;if(l!=null&&(l.unstable_strictMode===!0&&(f=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),s=vy(s,null,r,1,l??null,f,!1,g,w),r[xr]=s.current,ba(r),h)for(r=0;r<h.length;r++)l=h[r],f=l._getVersion,f=f(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,f]:s.mutableSourceEagerHydrationData.push(l,f);return new Yu(s)},on.render=function(r,s,l){if(!Xu(s))throw Error(t(200));return Ju(null,r,s,!1,l)},on.unmountComponentAtNode=function(r){if(!Xu(r))throw Error(t(40));return r._reactRootContainer?(ms(function(){Ju(null,null,r,!1,function(){r._reactRootContainer=null,r[xr]=null})}),!0):!1},on.unstable_batchedUpdates=Ld,on.unstable_renderSubtreeIntoContainer=function(r,s,l,h){if(!Xu(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Ju(r,s,l,!1,h)},on.version="18.3.1-next-f1338f8080-20240426",on}var Ny;function J1(){if(Ny)return Kd.exports;Ny=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Kd.exports=X1(),Kd.exports}var xy;function Z1(){if(xy)return ec;xy=1;var n=J1();return ec.createRoot=n.createRoot,ec.hydrateRoot=n.hydrateRoot,ec}var eT=Z1(),Xa={},by;function tT(){if(by)return Xa;by=1,Object.defineProperty(Xa,"__esModule",{value:!0}),Xa.parse=c,Xa.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const I=function(){};return I.prototype=Object.create(null),I})();function c(I,N){const O=new a,j=I.length;if(j<2)return O;const D=(N==null?void 0:N.decode)||v;let $=0;do{const q=I.indexOf("=",$);if(q===-1)break;const Z=I.indexOf(";",$),re=Z===-1?j:Z;if(q>re){$=I.lastIndexOf(";",q-1)+1;continue}const ge=d(I,$,q),fe=p(I,q,ge),x=I.slice(ge,fe);if(O[x]===void 0){let S=d(I,q+1,re),A=p(I,re,S);const P=D(I.slice(S,A));O[x]=P}$=re+1}while($<j);return O}function d(I,N,O){do{const j=I.charCodeAt(N);if(j!==32&&j!==9)return N}while(++N<O);return O}function p(I,N,O){for(;N>O;){const j=I.charCodeAt(--N);if(j!==32&&j!==9)return N+1}return O}function y(I,N,O){const j=(O==null?void 0:O.encode)||encodeURIComponent;if(!n.test(I))throw new TypeError(`argument name is invalid: ${I}`);const D=j(N);if(!e.test(D))throw new TypeError(`argument val is invalid: ${N}`);let $=I+"="+D;if(!O)return $;if(O.maxAge!==void 0){if(!Number.isInteger(O.maxAge))throw new TypeError(`option maxAge is invalid: ${O.maxAge}`);$+="; Max-Age="+O.maxAge}if(O.domain){if(!t.test(O.domain))throw new TypeError(`option domain is invalid: ${O.domain}`);$+="; Domain="+O.domain}if(O.path){if(!i.test(O.path))throw new TypeError(`option path is invalid: ${O.path}`);$+="; Path="+O.path}if(O.expires){if(!T(O.expires)||!Number.isFinite(O.expires.valueOf()))throw new TypeError(`option expires is invalid: ${O.expires}`);$+="; Expires="+O.expires.toUTCString()}if(O.httpOnly&&($+="; HttpOnly"),O.secure&&($+="; Secure"),O.partitioned&&($+="; Partitioned"),O.priority)switch(typeof O.priority=="string"?O.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${O.priority}`)}if(O.sameSite)switch(typeof O.sameSite=="string"?O.sameSite.toLowerCase():O.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${O.sameSite}`)}return $}function v(I){if(I.indexOf("%")===-1)return I;try{return decodeURIComponent(I)}catch{return I}}function T(I){return o.call(I)==="[object Date]"}return Xa}tT();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Dy="popstate";function nT(n={}){function e(i,o){let{pathname:a,search:c,hash:d}=i.location;return wf("",{pathname:a,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:ml(o)}return iT(e,t,null,n)}function Ze(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Jn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rT(){return Math.random().toString(36).substring(2,10)}function Oy(n,e){return{usr:n.state,key:n.key,idx:e}}function wf(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Ko(e):e,state:t,key:e&&e.key||i||rT()}}function ml({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Ko(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function iT(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:a=!1}=i,c=o.history,d="POP",p=null,y=v();y==null&&(y=0,c.replaceState({...c.state,idx:y},""));function v(){return(c.state||{idx:null}).idx}function T(){d="POP";let D=v(),$=D==null?null:D-y;y=D,p&&p({action:d,location:j.location,delta:$})}function I(D,$){d="PUSH";let q=wf(j.location,D,$);y=v()+1;let Z=Oy(q,y),re=j.createHref(q);try{c.pushState(Z,"",re)}catch(ge){if(ge instanceof DOMException&&ge.name==="DataCloneError")throw ge;o.location.assign(re)}a&&p&&p({action:d,location:j.location,delta:1})}function N(D,$){d="REPLACE";let q=wf(j.location,D,$);y=v();let Z=Oy(q,y),re=j.createHref(q);c.replaceState(Z,"",re),a&&p&&p({action:d,location:j.location,delta:0})}function O(D){let $=o.location.origin!=="null"?o.location.origin:o.location.href,q=typeof D=="string"?D:ml(D);return q=q.replace(/ $/,"%20"),Ze($,`No window.location.(origin|href) available to create URL for href: ${q}`),new URL(q,$)}let j={get action(){return d},get location(){return n(o,c)},listen(D){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Dy,T),p=D,()=>{o.removeEventListener(Dy,T),p=null}},createHref(D){return e(o,D)},createURL:O,encodeLocation(D){let $=O(D);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:I,replace:N,go(D){return c.go(D)}};return j}function kv(n,e,t="/"){return sT(n,e,t,!1)}function sT(n,e,t,i){let o=typeof e=="string"?Ko(e):e,a=Di(o.pathname||"/",t);if(a==null)return null;let c=Cv(n);oT(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let y=yT(a);d=mT(c[p],y,i)}return d}function Cv(n,e=[],t=[],i=""){let o=(a,c,d)=>{let p={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};p.relativePath.startsWith("/")&&(Ze(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Wr([i,p.relativePath]),v=t.concat(p);a.children&&a.children.length>0&&(Ze(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Cv(a.children,e,v,y)),!(a.path==null&&!a.index)&&e.push({path:y,score:fT(y,a.index),routesMeta:v})};return n.forEach((a,c)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))o(a,c);else for(let p of Pv(a.path))o(a,c,p)}),e}function Pv(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let c=Pv(i.join("/")),d=[];return d.push(...c.map(p=>p===""?a:[a,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function oT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:pT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var aT=/^:[\w-]+$/,lT=3,uT=2,cT=1,hT=10,dT=-2,Ly=n=>n==="*";function fT(n,e){let t=n.split("/"),i=t.length;return t.some(Ly)&&(i+=dT),e&&(i+=uT),t.filter(o=>!Ly(o)).reduce((o,a)=>o+(aT.test(a)?lT:a===""?cT:hT),i)}function pT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function mT(n,e,t=!1){let{routesMeta:i}=n,o={},a="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,v=a==="/"?e:e.slice(a.length)||"/",T=Ic({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},v),I=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=Ic({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:Wr([a,T.pathname]),pathnameBase:ET(Wr([a,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(a=Wr([a,T.pathnameBase]))}return c}function Ic(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=gT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:v,isOptional:T},I)=>{if(v==="*"){let O=d[I]||"";c=a.slice(0,a.length-O.length).replace(/(.)\/+$/,"$1")}const N=d[I];return T&&!N?y[v]=void 0:y[v]=(N||"").replace(/%2F/g,"/"),y},{}),pathname:a,pathnameBase:c,pattern:n}}function gT(n,e=!1,t=!0){Jn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function yT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Jn(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Di(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function _T(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Ko(n):n;return{pathname:t?t.startsWith("/")?t:vT(t,e):e,search:TT(i),hash:IT(o)}}function vT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Yd(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function rp(n){let e=wT(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function ip(n,e,t,i=!1){let o;typeof n=="string"?o=Ko(n):(o={...n},Ze(!o.pathname||!o.pathname.includes("?"),Yd("?","pathname","search",o)),Ze(!o.pathname||!o.pathname.includes("#"),Yd("#","pathname","hash",o)),Ze(!o.search||!o.search.includes("#"),Yd("#","search","hash",o)));let a=n===""||o.pathname==="",c=a?"/":o.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let I=c.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}d=T>=0?e[T]:"/"}let p=_T(o,d),y=c&&c!=="/"&&c.endsWith("/"),v=(a||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||v)&&(p.pathname+="/"),p}var Wr=n=>n.join("/").replace(/\/\/+/g,"/"),ET=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),TT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,IT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function ST(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Nv=["POST","PUT","PATCH","DELETE"];new Set(Nv);var RT=["GET",...Nv];new Set(RT);var Go=H.createContext(null);Go.displayName="DataRouter";var Gc=H.createContext(null);Gc.displayName="DataRouterState";var xv=H.createContext({isTransitioning:!1});xv.displayName="ViewTransition";var AT=H.createContext(new Map);AT.displayName="Fetchers";var kT=H.createContext(null);kT.displayName="Await";var er=H.createContext(null);er.displayName="Navigation";var Al=H.createContext(null);Al.displayName="Location";var vr=H.createContext({outlet:null,matches:[],isDataRoute:!1});vr.displayName="Route";var sp=H.createContext(null);sp.displayName="RouteError";function CT(n,{relative:e}={}){Ze(Qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=H.useContext(er),{hash:o,pathname:a,search:c}=kl(n,{relative:e}),d=a;return t!=="/"&&(d=a==="/"?t:Wr([t,a])),i.createHref({pathname:d,search:c,hash:o})}function Qo(){return H.useContext(Al)!=null}function zi(){return Ze(Qo(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(Al).location}var bv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Dv(n){H.useContext(er).static||H.useLayoutEffect(n)}function Ov(){let{isDataRoute:n}=H.useContext(vr);return n?jT():PT()}function PT(){Ze(Qo(),"useNavigate() may be used only in the context of a <Router> component.");let n=H.useContext(Go),{basename:e,navigator:t}=H.useContext(er),{matches:i}=H.useContext(vr),{pathname:o}=zi(),a=JSON.stringify(rp(i)),c=H.useRef(!1);return Dv(()=>{c.current=!0}),H.useCallback((p,y={})=>{if(Jn(c.current,bv),!c.current)return;if(typeof p=="number"){t.go(p);return}let v=ip(p,JSON.parse(a),o,y.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Wr([e,v.pathname])),(y.replace?t.replace:t.push)(v,y.state,y)},[e,t,a,o,n])}H.createContext(null);function kl(n,{relative:e}={}){let{matches:t}=H.useContext(vr),{pathname:i}=zi(),o=JSON.stringify(rp(t));return H.useMemo(()=>ip(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function NT(n,e){return Lv(n,e)}function Lv(n,e,t,i){var $;Ze(Qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=H.useContext(er),{matches:a}=H.useContext(vr),c=a[a.length-1],d=c?c.params:{},p=c?c.pathname:"/",y=c?c.pathnameBase:"/",v=c&&c.route;{let q=v&&v.path||"";Vv(p,!v||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let T=zi(),I;if(e){let q=typeof e=="string"?Ko(e):e;Ze(y==="/"||(($=q.pathname)==null?void 0:$.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${q.pathname}" was given in the \`location\` prop.`),I=q}else I=T;let N=I.pathname||"/",O=N;if(y!=="/"){let q=y.replace(/^\//,"").split("/");O="/"+N.replace(/^\//,"").split("/").slice(q.length).join("/")}let j=kv(n,{pathname:O});Jn(v||j!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),Jn(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=LT(j&&j.map(q=>Object.assign({},q,{params:Object.assign({},d,q.params),pathname:Wr([y,o.encodeLocation?o.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?y:Wr([y,o.encodeLocation?o.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),a,t,i);return e&&D?H.createElement(Al.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},D):D}function xT(){let n=zT(),e=ST(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:a},"ErrorBoundary")," or"," ",H.createElement("code",{style:a},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:o},t):null,c)}var bT=H.createElement(xT,null),DT=class extends H.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?H.createElement(vr.Provider,{value:this.props.routeContext},H.createElement(sp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function OT({routeContext:n,match:e,children:t}){let i=H.useContext(Go);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),H.createElement(vr.Provider,{value:n},t)}function LT(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=t==null?void 0:t.errors;if(a!=null){let p=o.findIndex(y=>y.route.id&&(a==null?void 0:a[y.route.id])!==void 0);Ze(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=p),y.route.id){let{loaderData:v,errors:T}=t,I=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||I){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,y,v)=>{let T,I=!1,N=null,O=null;t&&(T=a&&y.route.id?a[y.route.id]:void 0,N=y.route.errorElement||bT,c&&(d<0&&v===0?(Vv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,O=null):d===v&&(I=!0,O=y.route.hydrateFallbackElement||null)));let j=e.concat(o.slice(0,v+1)),D=()=>{let $;return T?$=N:I?$=O:y.route.Component?$=H.createElement(y.route.Component,null):y.route.element?$=y.route.element:$=p,H.createElement(OT,{match:y,routeContext:{outlet:p,matches:j,isDataRoute:t!=null},children:$})};return t&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?H.createElement(DT,{location:t.location,revalidation:t.revalidation,component:N,error:T,children:D(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):D()},null)}function op(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function VT(n){let e=H.useContext(Go);return Ze(e,op(n)),e}function MT(n){let e=H.useContext(Gc);return Ze(e,op(n)),e}function UT(n){let e=H.useContext(vr);return Ze(e,op(n)),e}function ap(n){let e=UT(n),t=e.matches[e.matches.length-1];return Ze(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function FT(){return ap("useRouteId")}function zT(){var i;let n=H.useContext(sp),e=MT("useRouteError"),t=ap("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function jT(){let{router:n}=VT("useNavigate"),e=ap("useNavigate"),t=H.useRef(!1);return Dv(()=>{t.current=!0}),H.useCallback(async(o,a={})=>{Jn(t.current,bv),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...a}))},[n,e])}var Vy={};function Vv(n,e,t){!e&&!Vy[n]&&(Vy[n]=!0,Jn(!1,t))}H.memo(BT);function BT({routes:n,future:e,state:t}){return Lv(n,void 0,t,e)}function $T({to:n,replace:e,state:t,relative:i}){Ze(Qo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=H.useContext(er);Jn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=H.useContext(vr),{pathname:c}=zi(),d=Ov(),p=ip(n,rp(a),c,i==="path"),y=JSON.stringify(p);return H.useEffect(()=>{d(JSON.parse(y),{replace:e,state:t,relative:i})},[d,y,i,e,t]),null}function el(n){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function WT({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:a=!1}){Ze(!Qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=H.useMemo(()=>({basename:c,navigator:o,static:a,future:{}}),[c,o,a]);typeof t=="string"&&(t=Ko(t));let{pathname:p="/",search:y="",hash:v="",state:T=null,key:I="default"}=t,N=H.useMemo(()=>{let O=Di(p,c);return O==null?null:{location:{pathname:O,search:y,hash:v,state:T,key:I},navigationType:i}},[c,p,y,v,T,I,i]);return Jn(N!=null,`<Router basename="${c}"> is not able to match the URL "${p}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:H.createElement(er.Provider,{value:d},H.createElement(Al.Provider,{children:e,value:N}))}function HT({children:n,location:e}){return NT(Ef(n),e)}function Ef(n,e=[]){let t=[];return H.Children.forEach(n,(i,o)=>{if(!H.isValidElement(i))return;let a=[...e,o];if(i.type===H.Fragment){t.push.apply(t,Ef(i.props.children,a));return}Ze(i.type===el,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Ef(i.props.children,a)),t.push(c)}),t}var hc="get",dc="application/x-www-form-urlencoded";function Qc(n){return n!=null&&typeof n.tagName=="string"}function qT(n){return Qc(n)&&n.tagName.toLowerCase()==="button"}function KT(n){return Qc(n)&&n.tagName.toLowerCase()==="form"}function GT(n){return Qc(n)&&n.tagName.toLowerCase()==="input"}function QT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function YT(n,e){return n.button===0&&(!e||e==="_self")&&!QT(n)}var tc=null;function XT(){if(tc===null)try{new FormData(document.createElement("form"),0),tc=!1}catch{tc=!0}return tc}var JT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xd(n){return n!=null&&!JT.has(n)?(Jn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${dc}"`),null):n}function ZT(n,e){let t,i,o,a,c;if(KT(n)){let d=n.getAttribute("action");i=d?Di(d,e):null,t=n.getAttribute("method")||hc,o=Xd(n.getAttribute("enctype"))||dc,a=new FormData(n)}else if(qT(n)||GT(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?Di(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||hc,o=Xd(n.getAttribute("formenctype"))||Xd(d.getAttribute("enctype"))||dc,a=new FormData(d,n),!XT()){let{name:y,type:v,value:T}=n;if(v==="image"){let I=y?`${y}.`:"";a.append(`${I}x`,"0"),a.append(`${I}y`,"0")}else y&&a.append(y,T)}}else{if(Qc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=hc,i=null,o=dc,c=n}return a&&o==="text/plain"&&(c=a,a=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:a,body:c}}function lp(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function eI(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function tI(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function nI(n,e,t){let i=await Promise.all(n.map(async o=>{let a=e.routes[o.route.id];if(a){let c=await eI(a,t);return c.links?c.links():[]}return[]}));return oI(i.flat(1).filter(tI).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function My(n,e,t,i,o,a){let c=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>{var v;return t[y].pathname!==p.pathname||((v=t[y].route.path)==null?void 0:v.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return a==="assets"?e.filter((p,y)=>c(p,y)||d(p,y)):a==="data"?e.filter((p,y)=>{var T;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let I=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function rI(n,e){return iI(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function iI(n){return[...new Set(n)]}function sI(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function oI(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let a=JSON.stringify(sI(o));return t.has(a)||(t.add(a),i.push({key:a,link:o})),i},[])}function aI(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function lI(){let n=H.useContext(Go);return lp(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function uI(){let n=H.useContext(Gc);return lp(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var up=H.createContext(void 0);up.displayName="FrameworkContext";function Mv(){let n=H.useContext(up);return lp(n,"You must render this element inside a <HydratedRouter> element"),n}function cI(n,e){let t=H.useContext(up),[i,o]=H.useState(!1),[a,c]=H.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:v,onTouchStart:T}=e,I=H.useRef(null);H.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let j=$=>{$.forEach(q=>{c(q.isIntersecting)})},D=new IntersectionObserver(j,{threshold:.5});return I.current&&D.observe(I.current),()=>{D.disconnect()}}},[n]),H.useEffect(()=>{if(i){let j=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(j)}}},[i]);let N=()=>{o(!0)},O=()=>{o(!1),c(!1)};return t?n!=="intent"?[a,I,{}]:[a,I,{onFocus:Ja(d,N),onBlur:Ja(p,O),onMouseEnter:Ja(y,N),onMouseLeave:Ja(v,O),onTouchStart:Ja(T,N)}]:[!1,I,{}]}function Ja(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function hI({page:n,...e}){let{router:t}=lI(),i=H.useMemo(()=>kv(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?H.createElement(fI,{page:n,matches:i,...e}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function dI(n){let{manifest:e,routeModules:t}=Mv(),[i,o]=H.useState([]);return H.useEffect(()=>{let a=!1;return nI(n,e,t).then(c=>{a||o(c)}),()=>{a=!0}},[n,e,t]),i}function fI({page:n,matches:e,...t}){let i=zi(),{manifest:o,routeModules:a}=Mv(),{loaderData:c,matches:d}=uI(),p=H.useMemo(()=>My(n,e,d,o,i,"data"),[n,e,d,o,i]),y=H.useMemo(()=>My(n,e,d,o,i,"assets"),[n,e,d,o,i]),v=H.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let N=new Set,O=!1;if(e.forEach(D=>{var q;let $=o.routes[D.route.id];!$||!$.hasLoader||(!p.some(Z=>Z.route.id===D.route.id)&&D.route.id in c&&((q=a[D.route.id])!=null&&q.shouldRevalidate)||$.hasClientLoader?O=!0:N.add(D.route.id))}),N.size===0)return[];let j=aI(n);return O&&N.size>0&&j.searchParams.set("_routes",e.filter(D=>N.has(D.route.id)).map(D=>D.route.id).join(",")),[j.pathname+j.search]},[c,i,o,p,e,n,a]),T=H.useMemo(()=>rI(y,o),[y,o]),I=dI(y);return H.createElement(H.Fragment,null,v.map(N=>H.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...t})),T.map(N=>H.createElement("link",{key:N,rel:"modulepreload",href:N,...t})),I.map(({key:N,link:O})=>H.createElement("link",{key:N,...O})))}function pI(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Uv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Uv&&(window.__reactRouterVersion="7.0.2")}catch{}function mI({basename:n,children:e,window:t}){let i=H.useRef();i.current==null&&(i.current=nT({window:t,v5Compat:!0}));let o=i.current,[a,c]=H.useState({action:o.action,location:o.location}),d=H.useCallback(p=>{H.startTransition(()=>c(p))},[c]);return H.useLayoutEffect(()=>o.listen(d),[o,d]),H.createElement(WT,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:o})}var Fv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sc=H.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:a,replace:c,state:d,target:p,to:y,preventScrollReset:v,viewTransition:T,...I},N){let{basename:O}=H.useContext(er),j=typeof y=="string"&&Fv.test(y),D,$=!1;if(typeof y=="string"&&j&&(D=y,Uv))try{let A=new URL(window.location.href),P=y.startsWith("//")?new URL(A.protocol+y):new URL(y),L=Di(P.pathname,O);P.origin===A.origin&&L!=null?y=L+P.search+P.hash:$=!0}catch{Jn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=CT(y,{relative:o}),[Z,re,ge]=cI(i,I),fe=vI(y,{replace:c,state:d,target:p,preventScrollReset:v,relative:o,viewTransition:T});function x(A){e&&e(A),A.defaultPrevented||fe(A)}let S=H.createElement("a",{...I,...ge,href:D||q,onClick:$||a?e:x,ref:pI(N,re),target:p,"data-discover":!j&&t==="render"?"true":void 0});return Z&&!j?H.createElement(H.Fragment,null,S,H.createElement(hI,{page:q})):S});Sc.displayName="Link";var gI=H.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:a,to:c,viewTransition:d,children:p,...y},v){let T=kl(c,{relative:y.relative}),I=zi(),N=H.useContext(Gc),{navigator:O,basename:j}=H.useContext(er),D=N!=null&&SI(T)&&d===!0,$=O.encodeLocation?O.encodeLocation(T).pathname:T.pathname,q=I.pathname,Z=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;t||(q=q.toLowerCase(),Z=Z?Z.toLowerCase():null,$=$.toLowerCase()),Z&&j&&(Z=Di(Z,j)||Z);const re=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let ge=q===$||!o&&q.startsWith($)&&q.charAt(re)==="/",fe=Z!=null&&(Z===$||!o&&Z.startsWith($)&&Z.charAt($.length)==="/"),x={isActive:ge,isPending:fe,isTransitioning:D},S=ge?e:void 0,A;typeof i=="function"?A=i(x):A=[i,ge?"active":null,fe?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let P=typeof a=="function"?a(x):a;return H.createElement(Sc,{...y,"aria-current":S,className:A,ref:v,style:P,to:c,viewTransition:d},typeof p=="function"?p(x):p)});gI.displayName="NavLink";var yI=H.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:a,method:c=hc,action:d,onSubmit:p,relative:y,preventScrollReset:v,viewTransition:T,...I},N)=>{let O=TI(),j=II(d,{relative:y}),D=c.toLowerCase()==="get"?"get":"post",$=typeof d=="string"&&Fv.test(d),q=Z=>{if(p&&p(Z),Z.defaultPrevented)return;Z.preventDefault();let re=Z.nativeEvent.submitter,ge=(re==null?void 0:re.getAttribute("formmethod"))||c;O(re||Z.currentTarget,{fetcherKey:e,method:ge,navigate:t,replace:o,state:a,relative:y,preventScrollReset:v,viewTransition:T})};return H.createElement("form",{ref:N,method:D,action:j,onSubmit:i?p:q,...I,"data-discover":!$&&n==="render"?"true":void 0})});yI.displayName="Form";function _I(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zv(n){let e=H.useContext(Go);return Ze(e,_I(n)),e}function vI(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:a,viewTransition:c}={}){let d=Ov(),p=zi(),y=kl(n,{relative:a});return H.useCallback(v=>{if(YT(v,e)){v.preventDefault();let T=t!==void 0?t:ml(p)===ml(y);d(n,{replace:T,state:i,preventScrollReset:o,relative:a,viewTransition:c})}},[p,d,y,t,i,e,n,o,a,c])}var wI=0,EI=()=>`__${String(++wI)}__`;function TI(){let{router:n}=zv("useSubmit"),{basename:e}=H.useContext(er),t=FT();return H.useCallback(async(i,o={})=>{let{action:a,method:c,encType:d,formData:p,body:y}=ZT(i,e);if(o.navigate===!1){let v=o.fetcherKey||EI();await n.fetch(v,t,o.action||a,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function II(n,{relative:e}={}){let{basename:t}=H.useContext(er),i=H.useContext(vr);Ze(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...kl(n||".",{relative:e})},c=zi();if(n==null){a.search=c.search;let d=new URLSearchParams(a.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let v=d.toString();a.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:Wr([t,a.pathname])),ml(a)}function SI(n,e={}){let t=H.useContext(xv);Ze(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=zv("useViewTransitionState"),o=kl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=Di(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Di(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Ic(o.pathname,c)!=null||Ic(o.pathname,a)!=null}new TextEncoder;var Uy={};/**
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
 */const jv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},RI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(a&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Bv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const a=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,v=a>>2,T=(a&3)<<4|d>>4;let I=(d&15)<<2|y>>6,N=y&63;p||(N=64,c||(I=64)),i.push(t[v],t[T],t[I],t[N])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(jv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):RI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||y==null||T==null)throw new AI;const I=a<<2|d>>4;if(i.push(I),y!==64){const N=d<<4&240|y>>2;if(i.push(N),T!==64){const O=y<<6&192|T;i.push(O)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class AI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kI=function(n){const e=jv(n);return Bv.encodeByteArray(e,!0)},Rc=function(n){return kI(n).replace(/\./g,"")},$v=function(n){try{return Bv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function CI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PI=()=>CI().__FIREBASE_DEFAULTS__,NI=()=>{if(typeof process>"u"||typeof Uy>"u")return;const n=Uy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$v(n[1]);return e&&JSON.parse(e)},Yc=()=>{try{return PI()||NI()||xI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Wv=n=>{var e,t;return(t=(e=Yc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Hv=n=>{const e=Wv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},qv=()=>{var n;return(n=Yc())===null||n===void 0?void 0:n.config},Kv=n=>{var e;return(e=Yc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class bI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Gv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Rc(JSON.stringify(t)),Rc(JSON.stringify(c)),""].join(".")}/**
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
 */function Ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ht())}function OI(){var n;const e=(n=Yc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function LI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function MI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UI(){const n=Ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function FI(){return!OI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zI(){try{return typeof indexedDB=="object"}catch{return!1}}function jI(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const BI="FirebaseError";class wr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=BI,Object.setPrototypeOf(this,wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cl.prototype.create)}}class Cl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?$I(a,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new wr(o,d,i)}}function $I(n,e){return n.replace(WI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const WI=/\{\$([^}]+)}/g;function HI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ac(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const a=n[o],c=e[o];if(Fy(a)&&Fy(c)){if(!Ac(a,c))return!1}else if(a!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Fy(n){return n!==null&&typeof n=="object"}/**
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
 */function Pl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function tl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,a]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function nl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function qI(n,e){const t=new KI(n,e);return t.subscribe.bind(t)}class KI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");GI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Jd),o.error===void 0&&(o.error=Jd),o.complete===void 0&&(o.complete=Jd);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Jd(){}/**
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
 */function et(n){return n&&n._delegate?n._delegate:n}class Oi{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vs="[DEFAULT]";/**
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
 */class QI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new bI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XI(e))try{this.getOrInitializeService({instanceIdentifier:vs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});i.resolve(a)}catch{}}}}clearInstance(e=vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vs){return this.instances.has(e)}getOptions(e=vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(o,a);const c=this.instances.get(o);return c&&e(c,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:YI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=vs){return this.component?this.component.multipleInstances?e:vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YI(n){return n===vs?void 0:n}function XI(n){return n.instantiationMode==="EAGER"}/**
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
 */class JI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new QI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const ZI={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},eS=Pe.INFO,tS={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},nS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=tS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cp{constructor(e){this.name=e,this._logLevel=eS,this._logHandler=nS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const rS=(n,e)=>e.some(t=>n instanceof t);let zy,jy;function iS(){return zy||(zy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sS(){return jy||(jy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qv=new WeakMap,Tf=new WeakMap,Yv=new WeakMap,Zd=new WeakMap,hp=new WeakMap;function oS(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Pi(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Qv.set(t,n)}).catch(()=>{}),hp.set(e,n),e}function aS(n){if(Tf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Tf.set(n,e)}let If={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Tf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function lS(n){If=n(If)}function uS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ef(this),e,...t);return Yv.set(i,e.sort?e.sort():[e]),Pi(i)}:sS().includes(n)?function(...e){return n.apply(ef(this),e),Pi(Qv.get(this))}:function(...e){return Pi(n.apply(ef(this),e))}}function cS(n){return typeof n=="function"?uS(n):(n instanceof IDBTransaction&&aS(n),rS(n,iS())?new Proxy(n,If):n)}function Pi(n){if(n instanceof IDBRequest)return oS(n);if(Zd.has(n))return Zd.get(n);const e=cS(n);return e!==n&&(Zd.set(n,e),hp.set(e,n)),e}const ef=n=>hp.get(n);function hS(n,e,{blocked:t,upgrade:i,blocking:o,terminated:a}={}){const c=indexedDB.open(n,e),d=Pi(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Pi(c.result),p.oldVersion,p.newVersion,Pi(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{a&&p.addEventListener("close",()=>a()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const dS=["get","getKey","getAll","getAllKeys","count"],fS=["put","add","delete","clear"],tf=new Map;function By(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(tf.get(e))return tf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=fS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||dS.includes(t)))return;const a=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return tf.set(e,a),a}lS(n=>({...n,get:(e,t,i)=>By(e,t)||n.get(e,t,i),has:(e,t)=>!!By(e,t)||n.has(e,t)}));/**
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
 */class pS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function mS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sf="@firebase/app",$y="0.10.17";/**
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
 */const qr=new cp("@firebase/app"),gS="@firebase/app-compat",yS="@firebase/analytics-compat",_S="@firebase/analytics",vS="@firebase/app-check-compat",wS="@firebase/app-check",ES="@firebase/auth",TS="@firebase/auth-compat",IS="@firebase/database",SS="@firebase/data-connect",RS="@firebase/database-compat",AS="@firebase/functions",kS="@firebase/functions-compat",CS="@firebase/installations",PS="@firebase/installations-compat",NS="@firebase/messaging",xS="@firebase/messaging-compat",bS="@firebase/performance",DS="@firebase/performance-compat",OS="@firebase/remote-config",LS="@firebase/remote-config-compat",VS="@firebase/storage",MS="@firebase/storage-compat",US="@firebase/firestore",FS="@firebase/vertexai",zS="@firebase/firestore-compat",jS="firebase",BS="11.1.0";/**
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
 */const Rf="[DEFAULT]",$S={[Sf]:"fire-core",[gS]:"fire-core-compat",[_S]:"fire-analytics",[yS]:"fire-analytics-compat",[wS]:"fire-app-check",[vS]:"fire-app-check-compat",[ES]:"fire-auth",[TS]:"fire-auth-compat",[IS]:"fire-rtdb",[SS]:"fire-data-connect",[RS]:"fire-rtdb-compat",[AS]:"fire-fn",[kS]:"fire-fn-compat",[CS]:"fire-iid",[PS]:"fire-iid-compat",[NS]:"fire-fcm",[xS]:"fire-fcm-compat",[bS]:"fire-perf",[DS]:"fire-perf-compat",[OS]:"fire-rc",[LS]:"fire-rc-compat",[VS]:"fire-gcs",[MS]:"fire-gcs-compat",[US]:"fire-fst",[zS]:"fire-fst-compat",[FS]:"fire-vertex","fire-js":"fire-js",[jS]:"fire-js-all"};/**
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
 */const kc=new Map,WS=new Map,Af=new Map;function Wy(n,e){try{n.container.addComponent(e)}catch(t){qr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Rs(n){const e=n.name;if(Af.has(e))return qr.debug(`There were multiple attempts to register component ${e}.`),!1;Af.set(e,n);for(const t of kc.values())Wy(t,n);for(const t of WS.values())Wy(t,n);return!0}function Xc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Kn(n){return n.settings!==void 0}/**
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
 */const HS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ni=new Cl("app","Firebase",HS);/**
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
 */class qS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ni.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=BS;function Xv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Rf,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ni.create("bad-app-name",{appName:String(o)});if(t||(t=qv()),!t)throw Ni.create("no-options");const a=kc.get(o);if(a){if(Ac(t,a.options)&&Ac(i,a.config))return a;throw Ni.create("duplicate-app",{appName:o})}const c=new JI(o);for(const p of Af.values())c.addComponent(p);const d=new qS(t,i,c);return kc.set(o,d),d}function dp(n=Rf){const e=kc.get(n);if(!e&&n===Rf&&qv())return Xv();if(!e)throw Ni.create("no-app",{appName:n});return e}function pr(n,e,t){var i;let o=(i=$S[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qr.warn(d.join(" "));return}Rs(new Oi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const KS="firebase-heartbeat-database",GS=1,gl="firebase-heartbeat-store";let nf=null;function Jv(){return nf||(nf=hS(KS,GS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(gl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ni.create("idb-open",{originalErrorMessage:n.message})})),nf}async function QS(n){try{const t=(await Jv()).transaction(gl),i=await t.objectStore(gl).get(Zv(n));return await t.done,i}catch(e){if(e instanceof wr)qr.warn(e.message);else{const t=Ni.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qr.warn(t.message)}}}async function Hy(n,e){try{const i=(await Jv()).transaction(gl,"readwrite");await i.objectStore(gl).put(e,Zv(n)),await i.done}catch(t){if(t instanceof wr)qr.warn(t.message);else{const i=Ni.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});qr.warn(i.message)}}}function Zv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const YS=1024,XS=30*24*60*60*1e3;class JS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new eR(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=qy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const d=new Date(c.date).valueOf();return Date.now()-d<=XS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){qr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qy(),{heartbeatsToSend:i,unsentEntries:o}=ZS(this._heartbeatsCache.heartbeats),a=Rc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return qr.warn(t),""}}}function qy(){return new Date().toISOString().substring(0,10)}function ZS(n,e=YS){const t=[];let i=n.slice();for(const o of n){const a=t.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),Ky(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Ky(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class eR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zI()?jI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await QS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Hy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Hy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Ky(n){return Rc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function tR(n){Rs(new Oi("platform-logger",e=>new pS(e),"PRIVATE")),Rs(new Oi("heartbeat",e=>new JS(e),"PRIVATE")),pr(Sf,$y,n),pr(Sf,$y,"esm2017"),pr("fire-js","")}tR("");var nR="firebase",rR="11.1.0";/**
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
 */pr(nR,rR,"app");function fp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function e0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iR=e0,t0=new Cl("auth","Firebase",e0());/**
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
 */const Cc=new cp("@firebase/auth");function sR(n,...e){Cc.logLevel<=Pe.WARN&&Cc.warn(`Auth (${xs}): ${n}`,...e)}function fc(n,...e){Cc.logLevel<=Pe.ERROR&&Cc.error(`Auth (${xs}): ${n}`,...e)}/**
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
 */function xn(n,...e){throw mp(n,...e)}function Qn(n,...e){return mp(n,...e)}function pp(n,e,t){const i=Object.assign(Object.assign({},iR()),{[e]:t});return new Cl("auth","Firebase",i).create(e,{appName:n.name})}function Hr(n){return pp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function oR(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&xn(n,"argument-error"),pp(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return t0.create(n,...e)}function we(n,e,...t){if(!n)throw mp(e,...t)}function jr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw fc(e),new Error(e)}function Kr(n,e){n||jr(e)}/**
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
 */function kf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function aR(){return Gy()==="http:"||Gy()==="https:"}function Gy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function lR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aR()||VI()||"connection"in navigator)?navigator.onLine:!0}function uR(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Nl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Kr(t>e,"Short delay should be less than long delay!"),this.isMobile=DI()||MI()}get(){return lR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gp(n,e){Kr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class n0{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hR=new Nl(3e4,6e4);function ji(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Jr(n,e,t,i,o={}){return r0(n,o,async()=>{let a={},c={};i&&(e==="GET"?c=i:a={body:JSON.stringify(i)});const d=Pl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},a);return LI()||(y.referrerPolicy="no-referrer"),n0.fetch()(i0(n,n.config.apiHost,t,d),y)})}async function r0(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},cR),e);try{const o=new fR(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw nc(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const d=a.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw nc(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw nc(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw nc(n,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw pp(n,v,y);xn(n,v)}}catch(o){if(o instanceof wr)throw o;xn(n,"network-request-failed",{message:String(o)})}}async function xl(n,e,t,i,o={}){const a=await Jr(n,e,t,i,o);return"mfaPendingCredential"in a&&xn(n,"multi-factor-auth-required",{_serverResponse:a}),a}function i0(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?gp(n.config,o):`${n.config.apiScheme}://${o}`}function dR(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Qn(this.auth,"network-request-failed")),hR.get())})}}function nc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Qn(n,e,i);return o.customData._tokenResponse=t,o}function Qy(n){return n!==void 0&&n.enterprise!==void 0}class pR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return dR(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mR(n,e){return Jr(n,"GET","/v2/recaptchaConfig",ji(n,e))}/**
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
 */async function gR(n,e){return Jr(n,"POST","/v1/accounts:delete",e)}async function s0(n,e){return Jr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ll(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yR(n,e=!1){const t=et(n),i=await t.getIdToken(e),o=yp(i);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:ll(rf(o.auth_time)),issuedAtTime:ll(rf(o.iat)),expirationTime:ll(rf(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function rf(n){return Number(n)*1e3}function yp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return fc("JWT malformed, contained fewer than 3 sections"),null;try{const o=$v(t);return o?JSON.parse(o):(fc("Failed to decode base64 JWT payload"),null)}catch(o){return fc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Yy(n){const e=yp(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Uo(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof wr&&_R(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function _R({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class vR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ll(this.lastLoginAt),this.creationTime=ll(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Uo(n,s0(t,{idToken:i}));we(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?o0(a.providerUserInfo):[],d=ER(n.providerData,c),p=n.isAnonymous,y=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=p?y:!1,T={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Cf(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,T)}async function wR(n){const e=et(n);await Pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ER(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function o0(n){return n.map(e=>{var{providerId:t}=e,i=fp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function TR(n,e){const t=await r0(n,{},async()=>{const i=Pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,c=i0(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",n0.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function IR(n,e){return Jr(n,"POST","/v2/accounts:revokeToken",ji(n,e))}/**
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
 */class Oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=Yy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:a}=await TR(e,t);this.updateTokensAndExpiration(i,o,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:a}=t,c=new Oo;return i&&(we(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(we(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(we(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oo,this.toJSON())}_performRefresh(){return jr("not implemented")}}/**
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
 */function Si(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Br{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,a=fp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Cf(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yR(this,e)}reload(){return wR(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Pc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kn(this.auth.app))return Promise.reject(Hr(this.auth));const e=await this.getIdToken();return await Uo(this,gR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,a,c,d,p,y,v;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,N=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,O=(c=t.photoURL)!==null&&c!==void 0?c:void 0,j=(d=t.tenantId)!==null&&d!==void 0?d:void 0,D=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,$=(y=t.createdAt)!==null&&y!==void 0?y:void 0,q=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:Z,emailVerified:re,isAnonymous:ge,providerData:fe,stsTokenManager:x}=t;we(Z&&x,e,"internal-error");const S=Oo.fromJSON(this.name,x);we(typeof Z=="string",e,"internal-error"),Si(T,e.name),Si(I,e.name),we(typeof re=="boolean",e,"internal-error"),we(typeof ge=="boolean",e,"internal-error"),Si(N,e.name),Si(O,e.name),Si(j,e.name),Si(D,e.name),Si($,e.name),Si(q,e.name);const A=new Br({uid:Z,auth:e,email:I,emailVerified:re,displayName:T,isAnonymous:ge,photoURL:O,phoneNumber:N,tenantId:j,stsTokenManager:S,createdAt:$,lastLoginAt:q});return fe&&Array.isArray(fe)&&(A.providerData=fe.map(P=>Object.assign({},P))),D&&(A._redirectEventId=D),A}static async _fromIdTokenResponse(e,t,i=!1){const o=new Oo;o.updateFromServerResponse(t);const a=new Br({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Pc(a),a}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];we(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?o0(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),d=new Oo;d.updateFromIdToken(i);const p=new Br({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Cf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,y),p}}/**
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
 */const Xy=new Map;function $r(n){Kr(n instanceof Function,"Expected a class definition");let e=Xy.get(n);return e?(Kr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Xy.set(n,e),e)}/**
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
 */class a0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}a0.type="NONE";const Jy=a0;/**
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
 */function pc(n,e,t){return`firebase:${n}:${e}:${t}`}class Lo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:a}=this.auth;this.fullUserKey=pc(this.userKey,o.apiKey,a),this.fullPersistenceKey=pc("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Br._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Lo($r(Jy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let a=o[0]||$r(Jy);const c=pc(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const v=await y._get(c);if(v){const T=Br._fromJSON(e,v);y!==a&&(d=T),a=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new Lo(a,e,i):(a=p[0],d&&await a._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==a)try{await y._remove(c)}catch{}})),new Lo(a,e,i))}}/**
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
 */function Zy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(h0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(l0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(f0(e))return"Blackberry";if(p0(e))return"Webos";if(u0(e))return"Safari";if((e.includes("chrome/")||c0(e))&&!e.includes("edge/"))return"Chrome";if(d0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function l0(n=Ht()){return/firefox\//i.test(n)}function u0(n=Ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function c0(n=Ht()){return/crios\//i.test(n)}function h0(n=Ht()){return/iemobile/i.test(n)}function d0(n=Ht()){return/android/i.test(n)}function f0(n=Ht()){return/blackberry/i.test(n)}function p0(n=Ht()){return/webos/i.test(n)}function _p(n=Ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function SR(n=Ht()){var e;return _p(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function RR(){return UI()&&document.documentMode===10}function m0(n=Ht()){return _p(n)||d0(n)||p0(n)||f0(n)||/windows phone/i.test(n)||h0(n)}/**
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
 */function g0(n,e=[]){let t;switch(n){case"Browser":t=Zy(Ht());break;case"Worker":t=`${Zy(Ht())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xs}/${i}`}/**
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
 */class AR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((c,d)=>{try{const p=e(a);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function kR(n,e={}){return Jr(n,"GET","/v2/passwordPolicy",ji(n,e))}/**
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
 */const CR=6;class PR{constructor(e){var t,i,o,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:CR,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,a,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class NR{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new e_(this),this.idTokenSubscription=new e_(this),this.beforeStateQueue=new AR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$r(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Lo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await s0(this,{idToken:e}),i=await Br._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Kn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Pc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kn(this.app))return Promise.reject(Hr(this));const t=e?et(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kn(this.app)?Promise.reject(Hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kn(this.app)?Promise.reject(Hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kR(this),t=new PR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Cl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await IR(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$r(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Lo.create(this,[$r(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(d,this,"internal-error"),d.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=g0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&sR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Bi(n){return et(n)}class e_{constructor(e){this.auth=e,this.observer=null,this.addObserver=qI(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Jc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xR(n){Jc=n}function y0(n){return Jc.loadJS(n)}function bR(){return Jc.recaptchaEnterpriseScript}function DR(){return Jc.gapiScript}function OR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class LR{constructor(){this.enterprise=new VR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class VR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const MR="recaptcha-enterprise",_0="NO_RECAPTCHA";class UR{constructor(e){this.type=MR,this.auth=Bi(e)}async verify(e="verify",t=!1){async function i(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,d)=>{mR(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new pR(p);return a.tenantId==null?a._agentRecaptchaConfig=y:a._tenantRecaptchaConfigs[a.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(a,c,d){const p=window.grecaptcha;Qy(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(y=>{c(y)}).catch(()=>{c(_0)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new LR().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{i(this.auth).then(d=>{if(!t&&Qy(window.grecaptcha))o(d,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=bR();p.length!==0&&(p+=d),y0(p).then(()=>{o(d,a,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function t_(n,e,t,i=!1,o=!1){const a=new UR(n);let c;if(o)c=_0;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Pf(n,e,t,i,o){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await t_(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await t_(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
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
 */function FR(n,e){const t=Xc(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Ac(a,e??{}))return o;xn(o,"already-initialized")}return t.initialize({options:e})}function zR(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map($r);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function jR(n,e,t){const i=Bi(n);we(i._canInitEmulator,i,"emulator-config-failed"),we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,a=v0(e),{host:c,port:d}=BR(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${a}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),$R()}function v0(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function BR(n){const e=v0(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const a=o[1];return{host:a,port:n_(i.substr(a.length+1))}}else{const[a,c]=i.split(":");return{host:a,port:n_(c)}}}function n_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $R(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class vp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return jr("not implemented")}_getIdTokenResponse(e){return jr("not implemented")}_linkToIdToken(e,t){return jr("not implemented")}_getReauthenticationResolver(e){return jr("not implemented")}}async function WR(n,e){return Jr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function HR(n,e){return xl(n,"POST","/v1/accounts:signInWithPassword",ji(n,e))}/**
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
 */async function qR(n,e){return xl(n,"POST","/v1/accounts:signInWithEmailLink",ji(n,e))}async function KR(n,e){return xl(n,"POST","/v1/accounts:signInWithEmailLink",ji(n,e))}/**
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
 */class yl extends vp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new yl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new yl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pf(e,t,"signInWithPassword",HR);case"emailLink":return qR(e,{email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pf(e,i,"signUpPassword",WR);case"emailLink":return KR(e,{idToken:t,email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vo(n,e){return xl(n,"POST","/v1/accounts:signInWithIdp",ji(n,e))}/**
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
 */const GR="http://localhost";class As extends vp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):xn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,a=fp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new As(i,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Vo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Vo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vo(e,t)}buildRequest(){const e={requestUri:GR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pl(t)}return e}}/**
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
 */function QR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YR(n){const e=tl(nl(n)).link,t=e?tl(nl(e)).deep_link_id:null,i=tl(nl(n)).deep_link_id;return(i?tl(nl(i)).link:null)||i||t||e||n}class wp{constructor(e){var t,i,o,a,c,d;const p=tl(nl(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,T=QR((o=p.mode)!==null&&o!==void 0?o:null);we(y&&v&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=v,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=YR(e);try{return new wp(t)}catch{return null}}}/**
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
 */class Yo{constructor(){this.providerId=Yo.PROVIDER_ID}static credential(e,t){return yl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=wp.parseLink(t);return we(i,"argument-error"),yl._fromEmailAndCode(e,i.code,i.tenantId)}}Yo.PROVIDER_ID="password";Yo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ep{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bl extends Ep{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ri extends bl{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ri.credential(e.oauthAccessToken)}catch{return null}}}Ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ri.PROVIDER_ID="facebook.com";/**
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
 */class Fr extends bl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return As._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Fr.credential(t,i)}catch{return null}}}Fr.GOOGLE_SIGN_IN_METHOD="google.com";Fr.PROVIDER_ID="google.com";/**
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
 */class zr extends bl{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.GITHUB_SIGN_IN_METHOD="github.com";zr.PROVIDER_ID="github.com";/**
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
 */class Ai extends bl{constructor(){super("twitter.com")}static credential(e,t){return As._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ai.credential(t,i)}catch{return null}}}Ai.TWITTER_SIGN_IN_METHOD="twitter.com";Ai.PROVIDER_ID="twitter.com";/**
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
 */async function XR(n,e){return xl(n,"POST","/v1/accounts:signUp",ji(n,e))}/**
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
 */class ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const a=await Br._fromIdTokenResponse(e,i,o),c=r_(i);return new ks({user:a,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=r_(i);return new ks({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function r_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Nc extends wr{constructor(e,t,i,o){var a;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Nc.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Nc(e,t,i,o)}}function w0(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Nc._fromErrorAndOperation(n,a,e,i):a})}async function JR(n,e,t=!1){const i=await Uo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ks._forOperation(n,"link",i)}/**
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
 */async function ZR(n,e,t=!1){const{auth:i}=n;if(Kn(i.app))return Promise.reject(Hr(i));const o="reauthenticate";try{const a=await Uo(n,w0(i,o,e,n),t);we(a.idToken,i,"internal-error");const c=yp(a.idToken);we(c,i,"internal-error");const{sub:d}=c;return we(n.uid===d,i,"user-mismatch"),ks._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&xn(i,"user-mismatch"),a}}/**
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
 */async function E0(n,e,t=!1){if(Kn(n.app))return Promise.reject(Hr(n));const i="signIn",o=await w0(n,i,e),a=await ks._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(a.user),a}async function eA(n,e){return E0(Bi(n),e)}/**
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
 */async function T0(n){const e=Bi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tA(n,e,t){if(Kn(n.app))return Promise.reject(Hr(n));const i=Bi(n),c=await Pf(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",XR).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&T0(n),p}),d=await ks._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function nA(n,e,t){return Kn(n.app)?Promise.reject(Hr(n)):eA(et(n),Yo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&T0(n),i})}/**
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
 */async function rA(n,e){return Jr(n,"POST","/v1/accounts:update",e)}/**
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
 */async function iA(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=et(n),a={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Uo(i,rA(i.auth,a));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function sA(n,e,t,i){return et(n).onIdTokenChanged(e,t,i)}function oA(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function aA(n,e,t,i){return et(n).onAuthStateChanged(e,t,i)}const xc="__sak";/**
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
 */class I0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xc,"1"),this.storage.removeItem(xc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const lA=1e3,uA=10;class S0 extends I0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=m0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},a=this.storage.getItem(i);RR()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,uA):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},lA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}S0.type="LOCAL";const cA=S0;/**
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
 */class R0 extends I0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}R0.type="SESSION";const A0=R0;/**
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
 */function hA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Zc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:a}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,a)),p=await hA(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zc.receivers=[];/**
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
 */function Tp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class dA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((d,p)=>{const y=Tp("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(I.data.response);break;default:clearTimeout(v),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function mr(){return window}function fA(n){mr().location.href=n}/**
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
 */function k0(){return typeof mr().WorkerGlobalScope<"u"&&typeof mr().importScripts=="function"}async function pA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function gA(){return k0()?self:null}/**
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
 */const C0="firebaseLocalStorageDb",yA=1,bc="firebaseLocalStorage",P0="fbase_key";class Dl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function eh(n,e){return n.transaction([bc],e?"readwrite":"readonly").objectStore(bc)}function _A(){const n=indexedDB.deleteDatabase(C0);return new Dl(n).toPromise()}function Nf(){const n=indexedDB.open(C0,yA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(bc,{keyPath:P0})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(bc)?e(i):(i.close(),await _A(),e(await Nf()))})})}async function i_(n,e,t){const i=eh(n,!0).put({[P0]:e,value:t});return new Dl(i).toPromise()}async function vA(n,e){const t=eh(n,!1).get(e),i=await new Dl(t).toPromise();return i===void 0?null:i.value}function s_(n,e){const t=eh(n,!0).delete(e);return new Dl(t).toPromise()}const wA=800,EA=3;class N0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>EA)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zc._getInstance(gA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await pA(),!this.activeServiceWorker)return;this.sender=new dA(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nf();return await i_(e,xc,"1"),await s_(e,xc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>i_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>vA(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>s_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=eh(o,!1).getAll();return new Dl(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}N0.type="LOCAL";const TA=N0;new Nl(3e4,6e4);/**
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
 */function x0(n,e){return e?$r(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ip extends vp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function IA(n){return E0(n.auth,new Ip(n),n.bypassAuthState)}function SA(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),ZR(t,new Ip(n),n.bypassAuthState)}async function RA(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),JR(t,new Ip(n),n.bypassAuthState)}/**
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
 */class b0{constructor(e,t,i,o,a=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:a,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IA;case"linkViaPopup":case"linkViaRedirect":return RA;case"reauthViaPopup":case"reauthViaRedirect":return SA;default:xn(this.auth,"internal-error")}}resolve(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AA=new Nl(2e3,1e4);async function kA(n,e,t){if(Kn(n.app))return Promise.reject(Qn(n,"operation-not-supported-in-this-environment"));const i=Bi(n);oR(n,e,Ep);const o=x0(i,t);return new ws(i,"signInViaPopup",e,o).executeNotNull()}class ws extends b0{constructor(e,t,i,o,a){super(e,t,o,a),this.provider=i,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Kr(this.filter.length===1,"Popup operations only handle one event");const e=Tp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AA.get())};e()}}ws.currentPopupAction=null;/**
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
 */const CA="pendingRedirect",mc=new Map;class PA extends b0{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=mc.get(this.auth._key());if(!e){try{const i=await NA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}mc.set(this.auth._key(),e)}return this.bypassAuthState||mc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NA(n,e){const t=DA(e),i=bA(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function xA(n,e){mc.set(n._key(),e)}function bA(n){return $r(n._redirectPersistence)}function DA(n){return pc(CA,n.config.apiKey,n.name)}async function OA(n,e,t=!1){if(Kn(n.app))return Promise.reject(Hr(n));const i=Bi(n),o=x0(i,e),c=await new PA(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const LA=10*60*1e3;class VA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!D0(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Qn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LA&&this.cachedEventUids.clear(),this.cachedEventUids.has(o_(e))}saveEventToCache(e){this.cachedEventUids.add(o_(e)),this.lastProcessedEventTime=Date.now()}}function o_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function D0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return D0(n);default:return!1}}/**
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
 */async function UA(n,e={}){return Jr(n,"GET","/v1/projects",e)}/**
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
 */const FA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zA=/^https?/;async function jA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await UA(n);for(const t of e)try{if(BA(t))return}catch{}xn(n,"unauthorized-domain")}function BA(n){const e=kf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!zA.test(t))return!1;if(FA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const $A=new Nl(3e4,6e4);function a_(){const n=mr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function WA(n){return new Promise((e,t)=>{var i,o,a;function c(){a_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{a_(),t(Qn(n,"network-request-failed"))},timeout:$A.get()})}if(!((o=(i=mr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=mr().gapi)===null||a===void 0)&&a.load)c();else{const d=OR("iframefcb");return mr()[d]=()=>{gapi.load?c():t(Qn(n,"network-request-failed"))},y0(`${DR()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw gc=null,e})}let gc=null;function HA(n){return gc=gc||WA(n),gc}/**
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
 */const qA=new Nl(5e3,15e3),KA="__/auth/iframe",GA="emulator/auth/iframe",QA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XA(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?gp(e,GA):`https://${n.config.authDomain}/${KA}`,i={apiKey:e.apiKey,appName:n.name,v:xs},o=YA.get(n.config.apiHost);o&&(i.eid=o);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${Pl(i).slice(1)}`}async function JA(n){const e=await HA(n),t=mr().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:XA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QA,dontclear:!0},i=>new Promise(async(o,a)=>{await i.restyle({setHideOnLeave:!1});const c=Qn(n,"network-request-failed"),d=mr().setTimeout(()=>{a(c)},qA.get());function p(){mr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{a(c)})}))}/**
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
 */const ZA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ek=500,tk=600,nk="_blank",rk="http://localhost";class l_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ik(n,e,t,i=ek,o=tk){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},ZA),{width:i.toString(),height:o.toString(),top:a,left:c}),y=Ht().toLowerCase();t&&(d=c0(y)?nk:t),l0(y)&&(e=e||rk,p.scrollbars="yes");const v=Object.entries(p).reduce((I,[N,O])=>`${I}${N}=${O},`,"");if(SR(y)&&d!=="_self")return sk(e||"",d),new l_(null);const T=window.open(e||"",d,v);we(T,n,"popup-blocked");try{T.focus()}catch{}return new l_(T)}function sk(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const ok="__/auth/handler",ak="emulator/auth/handler",lk=encodeURIComponent("fac");async function u_(n,e,t,i,o,a){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:xs,eventId:o};if(e instanceof Ep){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",HI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof bl){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),y=p?`#${lk}=${encodeURIComponent(p)}`:"";return`${uk(n)}?${Pl(d).slice(1)}${y}`}function uk({config:n}){return n.emulator?gp(n,ak):`https://${n.authDomain}/${ok}`}/**
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
 */const sf="webStorageSupport";class ck{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=A0,this._completeRedirectFn=OA,this._overrideRedirectResult=xA}async _openPopup(e,t,i,o){var a;Kr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await u_(e,t,i,kf(),o);return ik(e,c,Tp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const a=await u_(e,t,i,kf(),o);return fA(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Kr(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await JA(e),i=new VA(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sf,{type:sf},o=>{var a;const c=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[sf];c!==void 0&&t(!!c),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return m0()||u0()||_p()}}const hk=ck;var c_="@firebase/auth",h_="1.8.1";/**
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
 */class dk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pk(n){Rs(new Oi("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;we(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:g0(n)},y=new NR(i,o,a,p);return zR(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Rs(new Oi("auth-internal",e=>{const t=Bi(e.getProvider("auth").getImmediate());return(i=>new dk(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pr(c_,h_,fk(n)),pr(c_,h_,"esm2017")}/**
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
 */const mk=5*60,gk=Kv("authIdTokenMaxAge")||mk;let d_=null;const yk=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>gk)return;const o=t==null?void 0:t.token;d_!==o&&(d_=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function _k(n=dp()){const e=Xc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=FR(n,{popupRedirectResolver:hk,persistence:[TA,cA,A0]}),i=Kv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const c=yk(a.toString());oA(t,c,()=>c(t.currentUser)),sA(t,d=>c(d))}}const o=Wv("auth");return o&&jR(t,`http://${o}`),t}function vk(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}xR({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const a=Qn("internal-error");a.customData=o,t(a)},i.type="text/javascript",i.charset="UTF-8",vk().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pk("Browser");var f_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ts,O0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function A(){}A.prototype=S.prototype,x.D=S.prototype,x.prototype=new A,x.prototype.constructor=x,x.C=function(P,L,M){for(var k=Array(arguments.length-2),at=2;at<arguments.length;at++)k[at-2]=arguments[at];return S.prototype[L].apply(P,k)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,A){A||(A=0);var P=Array(16);if(typeof S=="string")for(var L=0;16>L;++L)P[L]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(L=0;16>L;++L)P[L]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=x.g[0],A=x.g[1],L=x.g[2];var M=x.g[3],k=S+(M^A&(L^M))+P[0]+3614090360&4294967295;S=A+(k<<7&4294967295|k>>>25),k=M+(L^S&(A^L))+P[1]+3905402710&4294967295,M=S+(k<<12&4294967295|k>>>20),k=L+(A^M&(S^A))+P[2]+606105819&4294967295,L=M+(k<<17&4294967295|k>>>15),k=A+(S^L&(M^S))+P[3]+3250441966&4294967295,A=L+(k<<22&4294967295|k>>>10),k=S+(M^A&(L^M))+P[4]+4118548399&4294967295,S=A+(k<<7&4294967295|k>>>25),k=M+(L^S&(A^L))+P[5]+1200080426&4294967295,M=S+(k<<12&4294967295|k>>>20),k=L+(A^M&(S^A))+P[6]+2821735955&4294967295,L=M+(k<<17&4294967295|k>>>15),k=A+(S^L&(M^S))+P[7]+4249261313&4294967295,A=L+(k<<22&4294967295|k>>>10),k=S+(M^A&(L^M))+P[8]+1770035416&4294967295,S=A+(k<<7&4294967295|k>>>25),k=M+(L^S&(A^L))+P[9]+2336552879&4294967295,M=S+(k<<12&4294967295|k>>>20),k=L+(A^M&(S^A))+P[10]+4294925233&4294967295,L=M+(k<<17&4294967295|k>>>15),k=A+(S^L&(M^S))+P[11]+2304563134&4294967295,A=L+(k<<22&4294967295|k>>>10),k=S+(M^A&(L^M))+P[12]+1804603682&4294967295,S=A+(k<<7&4294967295|k>>>25),k=M+(L^S&(A^L))+P[13]+4254626195&4294967295,M=S+(k<<12&4294967295|k>>>20),k=L+(A^M&(S^A))+P[14]+2792965006&4294967295,L=M+(k<<17&4294967295|k>>>15),k=A+(S^L&(M^S))+P[15]+1236535329&4294967295,A=L+(k<<22&4294967295|k>>>10),k=S+(L^M&(A^L))+P[1]+4129170786&4294967295,S=A+(k<<5&4294967295|k>>>27),k=M+(A^L&(S^A))+P[6]+3225465664&4294967295,M=S+(k<<9&4294967295|k>>>23),k=L+(S^A&(M^S))+P[11]+643717713&4294967295,L=M+(k<<14&4294967295|k>>>18),k=A+(M^S&(L^M))+P[0]+3921069994&4294967295,A=L+(k<<20&4294967295|k>>>12),k=S+(L^M&(A^L))+P[5]+3593408605&4294967295,S=A+(k<<5&4294967295|k>>>27),k=M+(A^L&(S^A))+P[10]+38016083&4294967295,M=S+(k<<9&4294967295|k>>>23),k=L+(S^A&(M^S))+P[15]+3634488961&4294967295,L=M+(k<<14&4294967295|k>>>18),k=A+(M^S&(L^M))+P[4]+3889429448&4294967295,A=L+(k<<20&4294967295|k>>>12),k=S+(L^M&(A^L))+P[9]+568446438&4294967295,S=A+(k<<5&4294967295|k>>>27),k=M+(A^L&(S^A))+P[14]+3275163606&4294967295,M=S+(k<<9&4294967295|k>>>23),k=L+(S^A&(M^S))+P[3]+4107603335&4294967295,L=M+(k<<14&4294967295|k>>>18),k=A+(M^S&(L^M))+P[8]+1163531501&4294967295,A=L+(k<<20&4294967295|k>>>12),k=S+(L^M&(A^L))+P[13]+2850285829&4294967295,S=A+(k<<5&4294967295|k>>>27),k=M+(A^L&(S^A))+P[2]+4243563512&4294967295,M=S+(k<<9&4294967295|k>>>23),k=L+(S^A&(M^S))+P[7]+1735328473&4294967295,L=M+(k<<14&4294967295|k>>>18),k=A+(M^S&(L^M))+P[12]+2368359562&4294967295,A=L+(k<<20&4294967295|k>>>12),k=S+(A^L^M)+P[5]+4294588738&4294967295,S=A+(k<<4&4294967295|k>>>28),k=M+(S^A^L)+P[8]+2272392833&4294967295,M=S+(k<<11&4294967295|k>>>21),k=L+(M^S^A)+P[11]+1839030562&4294967295,L=M+(k<<16&4294967295|k>>>16),k=A+(L^M^S)+P[14]+4259657740&4294967295,A=L+(k<<23&4294967295|k>>>9),k=S+(A^L^M)+P[1]+2763975236&4294967295,S=A+(k<<4&4294967295|k>>>28),k=M+(S^A^L)+P[4]+1272893353&4294967295,M=S+(k<<11&4294967295|k>>>21),k=L+(M^S^A)+P[7]+4139469664&4294967295,L=M+(k<<16&4294967295|k>>>16),k=A+(L^M^S)+P[10]+3200236656&4294967295,A=L+(k<<23&4294967295|k>>>9),k=S+(A^L^M)+P[13]+681279174&4294967295,S=A+(k<<4&4294967295|k>>>28),k=M+(S^A^L)+P[0]+3936430074&4294967295,M=S+(k<<11&4294967295|k>>>21),k=L+(M^S^A)+P[3]+3572445317&4294967295,L=M+(k<<16&4294967295|k>>>16),k=A+(L^M^S)+P[6]+76029189&4294967295,A=L+(k<<23&4294967295|k>>>9),k=S+(A^L^M)+P[9]+3654602809&4294967295,S=A+(k<<4&4294967295|k>>>28),k=M+(S^A^L)+P[12]+3873151461&4294967295,M=S+(k<<11&4294967295|k>>>21),k=L+(M^S^A)+P[15]+530742520&4294967295,L=M+(k<<16&4294967295|k>>>16),k=A+(L^M^S)+P[2]+3299628645&4294967295,A=L+(k<<23&4294967295|k>>>9),k=S+(L^(A|~M))+P[0]+4096336452&4294967295,S=A+(k<<6&4294967295|k>>>26),k=M+(A^(S|~L))+P[7]+1126891415&4294967295,M=S+(k<<10&4294967295|k>>>22),k=L+(S^(M|~A))+P[14]+2878612391&4294967295,L=M+(k<<15&4294967295|k>>>17),k=A+(M^(L|~S))+P[5]+4237533241&4294967295,A=L+(k<<21&4294967295|k>>>11),k=S+(L^(A|~M))+P[12]+1700485571&4294967295,S=A+(k<<6&4294967295|k>>>26),k=M+(A^(S|~L))+P[3]+2399980690&4294967295,M=S+(k<<10&4294967295|k>>>22),k=L+(S^(M|~A))+P[10]+4293915773&4294967295,L=M+(k<<15&4294967295|k>>>17),k=A+(M^(L|~S))+P[1]+2240044497&4294967295,A=L+(k<<21&4294967295|k>>>11),k=S+(L^(A|~M))+P[8]+1873313359&4294967295,S=A+(k<<6&4294967295|k>>>26),k=M+(A^(S|~L))+P[15]+4264355552&4294967295,M=S+(k<<10&4294967295|k>>>22),k=L+(S^(M|~A))+P[6]+2734768916&4294967295,L=M+(k<<15&4294967295|k>>>17),k=A+(M^(L|~S))+P[13]+1309151649&4294967295,A=L+(k<<21&4294967295|k>>>11),k=S+(L^(A|~M))+P[4]+4149444226&4294967295,S=A+(k<<6&4294967295|k>>>26),k=M+(A^(S|~L))+P[11]+3174756917&4294967295,M=S+(k<<10&4294967295|k>>>22),k=L+(S^(M|~A))+P[2]+718787259&4294967295,L=M+(k<<15&4294967295|k>>>17),k=A+(M^(L|~S))+P[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(L+(k<<21&4294967295|k>>>11))&4294967295,x.g[2]=x.g[2]+L&4294967295,x.g[3]=x.g[3]+M&4294967295}i.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var A=S-this.blockSize,P=this.B,L=this.h,M=0;M<S;){if(L==0)for(;M<=A;)o(this,x,M),M+=this.blockSize;if(typeof x=="string"){for(;M<S;)if(P[L++]=x.charCodeAt(M++),L==this.blockSize){o(this,P),L=0;break}}else for(;M<S;)if(P[L++]=x[M++],L==this.blockSize){o(this,P),L=0;break}}this.h=L,this.o+=S},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var A=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=A&255,A/=256;for(this.u(x),x=Array(16),S=A=0;4>S;++S)for(var P=0;32>P;P+=8)x[A++]=this.g[S]>>>P&255;return x};function a(x,S){var A=d;return Object.prototype.hasOwnProperty.call(A,x)?A[x]:A[x]=S(x)}function c(x,S){this.h=S;for(var A=[],P=!0,L=x.length-1;0<=L;L--){var M=x[L]|0;P&&M==S||(A[L]=M,P=!1)}this.g=A}var d={};function p(x){return-128<=x&&128>x?a(x,function(S){return new c([S|0],0>S?-1:0)}):new c([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return D(y(-x));for(var S=[],A=1,P=0;x>=A;P++)S[P]=x/A|0,A*=4294967296;return new c(S,0)}function v(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return D(v(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(S,8)),P=T,L=0;L<x.length;L+=8){var M=Math.min(8,x.length-L),k=parseInt(x.substring(L,L+M),S);8>M?(M=y(Math.pow(S,M)),P=P.j(M).add(y(k))):(P=P.j(A),P=P.add(y(k)))}return P}var T=p(0),I=p(1),N=p(16777216);n=c.prototype,n.m=function(){if(j(this))return-D(this).m();for(var x=0,S=1,A=0;A<this.g.length;A++){var P=this.i(A);x+=(0<=P?P:4294967296+P)*S,S*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(O(this))return"0";if(j(this))return"-"+D(this).toString(x);for(var S=y(Math.pow(x,6)),A=this,P="";;){var L=re(A,S).g;A=$(A,L.j(S));var M=((0<A.g.length?A.g[0]:A.h)>>>0).toString(x);if(A=L,O(A))return M+P;for(;6>M.length;)M="0"+M;P=M+P}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function O(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function j(x){return x.h==-1}n.l=function(x){return x=$(this,x),j(x)?-1:O(x)?0:1};function D(x){for(var S=x.g.length,A=[],P=0;P<S;P++)A[P]=~x.g[P];return new c(A,~x.h).add(I)}n.abs=function(){return j(this)?D(this):this},n.add=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],P=0,L=0;L<=S;L++){var M=P+(this.i(L)&65535)+(x.i(L)&65535),k=(M>>>16)+(this.i(L)>>>16)+(x.i(L)>>>16);P=k>>>16,M&=65535,k&=65535,A[L]=k<<16|M}return new c(A,A[A.length-1]&-2147483648?-1:0)};function $(x,S){return x.add(D(S))}n.j=function(x){if(O(this)||O(x))return T;if(j(this))return j(x)?D(this).j(D(x)):D(D(this).j(x));if(j(x))return D(this.j(D(x)));if(0>this.l(N)&&0>x.l(N))return y(this.m()*x.m());for(var S=this.g.length+x.g.length,A=[],P=0;P<2*S;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var L=0;L<x.g.length;L++){var M=this.i(P)>>>16,k=this.i(P)&65535,at=x.i(L)>>>16,Vt=x.i(L)&65535;A[2*P+2*L]+=k*Vt,q(A,2*P+2*L),A[2*P+2*L+1]+=M*Vt,q(A,2*P+2*L+1),A[2*P+2*L+1]+=k*at,q(A,2*P+2*L+1),A[2*P+2*L+2]+=M*at,q(A,2*P+2*L+2)}for(P=0;P<S;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=S;P<2*S;P++)A[P]=0;return new c(A,0)};function q(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function Z(x,S){this.g=x,this.h=S}function re(x,S){if(O(S))throw Error("division by zero");if(O(x))return new Z(T,T);if(j(x))return S=re(D(x),S),new Z(D(S.g),D(S.h));if(j(S))return S=re(x,D(S)),new Z(D(S.g),S.h);if(30<x.g.length){if(j(x)||j(S))throw Error("slowDivide_ only works with positive integers.");for(var A=I,P=S;0>=P.l(x);)A=ge(A),P=ge(P);var L=fe(A,1),M=fe(P,1);for(P=fe(P,2),A=fe(A,2);!O(P);){var k=M.add(P);0>=k.l(x)&&(L=L.add(A),M=k),P=fe(P,1),A=fe(A,1)}return S=$(x,L.j(S)),new Z(L,S)}for(L=T;0<=x.l(S);){for(A=Math.max(1,Math.floor(x.m()/S.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),M=y(A),k=M.j(S);j(k)||0<k.l(x);)A-=P,M=y(A),k=M.j(S);O(M)&&(M=I),L=L.add(M),x=$(x,k)}return new Z(L,x)}n.A=function(x){return re(this,x).h},n.and=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],P=0;P<S;P++)A[P]=this.i(P)&x.i(P);return new c(A,this.h&x.h)},n.or=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],P=0;P<S;P++)A[P]=this.i(P)|x.i(P);return new c(A,this.h|x.h)},n.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],P=0;P<S;P++)A[P]=this.i(P)^x.i(P);return new c(A,this.h^x.h)};function ge(x){for(var S=x.g.length+1,A=[],P=0;P<S;P++)A[P]=x.i(P)<<1|x.i(P-1)>>>31;return new c(A,x.h)}function fe(x,S){var A=S>>5;S%=32;for(var P=x.g.length-A,L=[],M=0;M<P;M++)L[M]=0<S?x.i(M+A)>>>S|x.i(M+A+1)<<32-S:x.i(M+A);return new c(L,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,O0=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=v,Ts=c}).apply(typeof f_<"u"?f_:typeof self<"u"?self:typeof window<"u"?window:{});var rc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var L0,rl,V0,yc,xf,M0,U0,F0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof rc=="object"&&rc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var U=u[E];if(!(U in _))break e;_=_[U]}u=u[u.length-1],E=_[u],m=m(E),m!=E&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function a(u,m){u instanceof String&&(u+="");var _=0,E=!1,U={next:function(){if(!E&&_<u.length){var W=_++;return{value:m(W,u[W]),done:!1}}return E=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return a(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function v(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,E),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,I.apply(null,arguments)}function N(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function O(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,U,W){for(var ne=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)ne[Be-2]=arguments[Be];return m.prototype[U].apply(E,ne)}}function j(u){const m=u.length;if(0<m){const _=Array(m);for(let E=0;E<m;E++)_[E]=u[E];return _}return[]}function D(u,m){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(p(E)){const U=u.length||0,W=E.length||0;u.length=U+W;for(let ne=0;ne<W;ne++)u[U+ne]=E[ne]}else u.push(E)}}class ${constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function q(u){return/^[\s\xa0]*$/.test(u)}function Z(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function re(u){return re[" "](u),u}re[" "]=function(){};var ge=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function fe(u,m,_){for(const E in u)m.call(_,u[E],E,u)}function x(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,m){let _,E;for(let U=1;U<arguments.length;U++){E=arguments[U];for(_ in E)u[_]=E[_];for(let W=0;W<A.length;W++)_=A[W],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function L(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function M(u){d.setTimeout(()=>{throw u},0)}function k(){var u=ye;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class at{constructor(){this.h=this.g=null}add(m,_){const E=Vt.get();E.set(m,_),this.h?this.h.next=E:this.g=E,this.h=E}}var Vt=new $(()=>new Mt,u=>u.reset());class Mt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,ie=!1,ye=new at,oe=()=>{const u=d.Promise.resolve(void 0);$e=()=>{u.then(V)}};var V=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(_){M(_)}var m=Vt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ie=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Ae(u,m){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(ge){e:{try{re(m.nodeName);var U=!0;break e}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}O(Ae,pe);var De={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function He(u,m,_,E,U){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!E,this.ha=U,this.key=++Fe,this.da=this.fa=!1}function Tt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Er(u){this.src=u,this.g={},this.h=0}Er.prototype.add=function(u,m,_,E,U){var W=u.toString();u=this.g[W],u||(u=this.g[W]=[],this.h++);var ne=Zr(u,m,E,U);return-1<ne?(m=u[ne],_||(m.fa=!1)):(m=new He(m,this.src,W,!!E,U),m.fa=_,u.push(m)),m};function Ls(u,m){var _=m.type;if(_ in u.g){var E=u.g[_],U=Array.prototype.indexOf.call(E,m,void 0),W;(W=0<=U)&&Array.prototype.splice.call(E,U,1),W&&(Tt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Zr(u,m,_,E){for(var U=0;U<u.length;++U){var W=u[U];if(!W.da&&W.listener==m&&W.capture==!!_&&W.ha==E)return U}return-1}var Hi="closure_lm_"+(1e6*Math.random()|0),Vs={};function na(u,m,_,E,U){if(Array.isArray(m)){for(var W=0;W<m.length;W++)na(u,m[W],_,E,U);return null}return _=sa(_),u&&u[Ue]?u.K(m,_,y(E)?!!E.capture:!!E,U):ra(u,m,_,!1,E,U)}function ra(u,m,_,E,U,W){if(!m)throw Error("Invalid event type");var ne=y(U)?!!U.capture:!!U,Be=Us(u);if(Be||(u[Hi]=Be=new Er(u)),_=Be.add(m,_,E,ne,W),_.proxy)return _;if(E=Fl(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)Re||(U=ne),U===void 0&&(U=!1),u.addEventListener(m.toString(),E,U);else if(u.attachEvent)u.attachEvent(Ir(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Fl(){function u(_){return m.call(u.src,u.listener,_)}const m=ia;return u}function Ms(u,m,_,E,U){if(Array.isArray(m))for(var W=0;W<m.length;W++)Ms(u,m[W],_,E,U);else E=y(E)?!!E.capture:!!E,_=sa(_),u&&u[Ue]?(u=u.i,m=String(m).toString(),m in u.g&&(W=u.g[m],_=Zr(W,_,E,U),-1<_&&(Tt(W[_]),Array.prototype.splice.call(W,_,1),W.length==0&&(delete u.g[m],u.h--)))):u&&(u=Us(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Zr(m,_,E,U)),(_=-1<u?m[u]:null)&&Tr(_))}function Tr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ue])Ls(m.i,u);else{var _=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(_,E,u.capture):m.detachEvent?m.detachEvent(Ir(_),E):m.addListener&&m.removeListener&&m.removeListener(E),(_=Us(m))?(Ls(_,u),_.h==0&&(_.src=null,m[Hi]=null)):Tt(u)}}}function Ir(u){return u in Vs?Vs[u]:Vs[u]="on"+u}function ia(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var _=u.listener,E=u.ha||u.src;u.fa&&Tr(u),u=_.call(E,m)}return u}function Us(u){return u=u[Hi],u instanceof Er?u:null}var Fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function sa(u){return typeof u=="function"?u:(u[Fs]||(u[Fs]=function(m){return u.handleEvent(m)}),u[Fs])}function mt(){G.call(this),this.i=new Er(this),this.M=this,this.F=null}O(mt,G),mt.prototype[Ue]=!0,mt.prototype.removeEventListener=function(u,m,_,E){Ms(this,u,m,_,E)};function gt(u,m){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new pe(m,u);else if(m instanceof pe)m.target=m.target||u;else{var U=m;m=new pe(E,u),P(m,U)}if(U=!0,_)for(var W=_.length-1;0<=W;W--){var ne=m.g=_[W];U=Sr(ne,E,!0,m)&&U}if(ne=m.g=u,U=Sr(ne,E,!0,m)&&U,U=Sr(ne,E,!1,m)&&U,_)for(W=0;W<_.length;W++)ne=m.g=_[W],U=Sr(ne,E,!1,m)&&U}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],E=0;E<_.length;E++)Tt(_[E]);delete u.g[m],u.h--}}this.F=null},mt.prototype.K=function(u,m,_,E){return this.i.add(String(u),m,!1,_,E)},mt.prototype.L=function(u,m,_,E){return this.i.add(String(u),m,!0,_,E)};function Sr(u,m,_,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,W=0;W<m.length;++W){var ne=m[W];if(ne&&!ne.da&&ne.capture==_){var Be=ne.listener,yt=ne.ha||ne.src;ne.fa&&Ls(u.i,ne),U=Be.call(yt,E)!==!1&&U}}return U&&!E.defaultPrevented}function oa(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function ei(u){u.g=oa(()=>{u.g=null,u.i&&(u.i=!1,ei(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class qi extends G{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ei(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ki(u){G.call(this),this.h=u,this.g={}}O(Ki,G);var aa=[];function la(u){fe(u.g,function(m,_){this.g.hasOwnProperty(_)&&Tr(m)},u),u.g={}}Ki.prototype.N=function(){Ki.aa.N.call(this),la(this)},Ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ua=d.JSON.stringify,ca=d.JSON.parse,ha=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Gi(){}Gi.prototype.h=null;function zs(u){return u.h||(u.h=u.i())}function js(){}var wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tr(){pe.call(this,"d")}O(tr,pe);function Bs(){pe.call(this,"c")}O(Bs,pe);var nr={},da=null;function Qi(){return da=da||new mt}nr.La="serverreachability";function fa(u){pe.call(this,nr.La,u)}O(fa,pe);function Rr(u){const m=Qi();gt(m,new fa(m))}nr.STAT_EVENT="statevent";function pa(u,m){pe.call(this,nr.STAT_EVENT,u),this.stat=m}O(pa,pe);function lt(u){const m=Qi();gt(m,new pa(m,u))}nr.Ma="timingevent";function $s(u,m){pe.call(this,nr.Ma,u),this.size=m}O($s,pe);function bn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Yi(){this.g=!0}Yi.prototype.xa=function(){this.g=!1};function Xi(u,m,_,E,U,W){u.info(function(){if(u.g)if(W)for(var ne="",Be=W.split("&"),yt=0;yt<Be.length;yt++){var Oe=Be[yt].split("=");if(1<Oe.length){var It=Oe[0];Oe=Oe[1];var ht=It.split("_");ne=2<=ht.length&&ht[1]=="type"?ne+(It+"="+Oe+"&"):ne+(It+"=redacted&")}}else ne=null;else ne=W;return"XMLHTTP REQ ("+E+") [attempt "+U+"]: "+m+`
`+_+`
`+ne})}function Ws(u,m,_,E,U,W,ne){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+U+"]: "+m+`
`+_+`
`+W+" "+ne})}function Dn(u,m,_,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+vh(u,_)+(E?" "+E:"")})}function ma(u,m){u.info(function(){return"TIMEOUT: "+m})}Yi.prototype.info=function(){};function vh(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var U=E[1];if(Array.isArray(U)&&!(1>U.length)){var W=U[0];if(W!="noop"&&W!="stop"&&W!="close")for(var ne=1;ne<U.length;ne++)U[ne]=""}}}}return ua(_)}catch{return m}}var Hs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},On;function Ji(){}O(Ji,Gi),Ji.prototype.g=function(){return new XMLHttpRequest},Ji.prototype.i=function(){return{}},On=new Ji;function Ln(u,m,_,E){this.j=u,this.i=m,this.l=_,this.R=E||1,this.U=new Ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jl}function jl(){this.i=null,this.g="",this.h=!1}var ga={},qs={};function Ks(u,m,_){u.L=1,u.v=si(hn(m)),u.m=_,u.P=!0,ya(u,null)}function ya(u,m){u.F=Date.now(),qe(u),u.A=hn(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),ai(_.i,"t",E),u.C=0,_=u.j.J,u.h=new jl,u.g=su(u.j,_?m:null,!u.m),0<u.O&&(u.M=new qi(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,E=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(aa[0]=U.toString()),U=aa);for(var W=0;W<U.length;W++){var ne=na(_,U[W],E||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Rr(),Xi(u.i,u.u,u.A,u.l,u.R,u.m)}Ln.prototype.ca=function(u){u=u.target;const m=this.M;m&&Zt(u)==3?m.j():this.Y(u)},Ln.prototype.Y=function(u){try{if(u==this.g)e:{const ht=Zt(this.g);var m=this.g.Ba();const In=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||Ia(this.g)))){this.J||ht!=4||m==7||(m==8||0>=In?Rr(3):Rr(2)),Zi(this);var _=this.g.Z();this.X=_;t:if(Bl(this)){var E=Ia(this.g);u="";var U=E.length,W=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),ti(this);var ne="";break t}this.h.i=new d.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(E[m],{stream:!(W&&m==U-1)});E.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=_==200,Ws(this.i,this.u,this.A,this.l,this.R,ht,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,yt=this.g;if((Be=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Be)){var Oe=Be;break t}}Oe=null}if(_=Oe)Dn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_a(this,_);else{this.o=!1,this.s=3,lt(12),En(this),ti(this);break e}}if(this.P){_=!0;let fn;for(;!this.J&&this.C<ne.length;)if(fn=wh(this,ne),fn==qs){ht==4&&(this.s=4,lt(14),_=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==ga){this.s=4,lt(15),Dn(this.i,this.l,ne,"[Invalid Chunk]"),_=!1;break}else Dn(this.i,this.l,fn,null),_a(this,fn);if(Bl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||ne.length!=0||this.h.h||(this.s=1,lt(16),_=!1),this.o=this.o&&_,!_)Dn(this.i,this.l,ne,"[Invalid Chunked Response]"),En(this),ti(this);else if(0<ne.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Ra(It),It.M=!0,lt(11))}}else Dn(this.i,this.l,ne,null),_a(this,ne);ht==4&&En(this),this.o&&!this.J&&(ht==4?io(this.j,this):(this.o=!1,qe(this)))}else Zs(this.g),_==400&&0<ne.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),En(this),ti(this)}}}catch{}finally{}};function Bl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function wh(u,m){var _=u.C,E=m.indexOf(`
`,_);return E==-1?qs:(_=Number(m.substring(_,E)),isNaN(_)?ga:(E+=1,E+_>m.length?qs:(m=m.slice(E,E+_),u.C=E+_,m)))}Ln.prototype.cancel=function(){this.J=!0,En(this)};function qe(u){u.S=Date.now()+u.I,$l(u,u.I)}function $l(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=bn(I(u.ba,u),m)}function Zi(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Ln.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ma(this.i,this.A),this.L!=2&&(Rr(),lt(17)),En(this),this.s=2,ti(this)):$l(this,this.S-u)};function ti(u){u.j.G==0||u.J||io(u.j,u)}function En(u){Zi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,la(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function _a(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||qt(_.h,u))){if(!u.K&&qt(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var U=E;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)ro(_),zn(_);else break e;no(_),lt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=bn(I(_.Za,_),6e3));if(1>=Hl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Nr(_,11)}else if((u.K||_.g==u)&&ro(_),!q(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let Oe=U[m];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const It=Oe[3];It!=null&&(_.la=It,_.j.info("VER="+_.la));const ht=Oe[4];ht!=null&&(_.Aa=ht,_.j.info("SVER="+_.Aa));const In=Oe[5];In!=null&&typeof In=="number"&&0<In&&(E=1.5*In,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const fn=u.g;if(fn){const os=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(os){var W=E.h;W.g||os.indexOf("spdy")==-1&&os.indexOf("quic")==-1&&os.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(va(W,W.h),W.h=null))}if(E.D){const oo=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;oo&&(E.ya=oo,We(E.I,E.D,oo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var ne=u;if(E.qa=iu(E,E.J?E.ia:null,E.W),ne.K){ql(E.h,ne);var Be=ne,yt=E.L;yt&&(Be.I=yt),Be.B&&(Zi(Be),qe(Be)),E.g=ne}else ss(E);0<_.i.length&&or(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Nr(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Nr(_,7):Pt(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}Rr(4)}catch{}}var Wl=class{constructor(u,m){this.g=u,this.map=m}};function es(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Hl(u){return u.h?1:u.g?u.g.size:0}function qt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function va(u,m){u.g?u.g.add(m):u.h=m}function ql(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}es.prototype.cancel=function(){if(this.i=Kl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Kl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return j(u.i)}function Gs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,E=0;E<_;E++)m.push(u[E]);return m}m=[],_=0;for(E in u)m[_++]=u[E];return m}function Qs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const E in u)m[_++]=E;return m}}}function ni(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Qs(u),E=Gs(u),U=E.length,W=0;W<U;W++)m.call(void 0,E[W],_&&_[W],u)}var ts=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Eh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),U=null;if(0<=E){var W=u[_].substring(0,E);U=u[_].substring(E+1)}else W=u[_];m(W,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Ar(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ar){this.h=u.h,ns(this,u.j),this.o=u.o,this.g=u.g,ri(this,u.s),this.l=u.l;var m=u.i,_=new rr;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),ii(this,_),this.m=u.m}else u&&(m=String(u).match(ts))?(this.h=!1,ns(this,m[1]||"",!0),this.o=xe(m[2]||""),this.g=xe(m[3]||"",!0),ri(this,m[4]),this.l=xe(m[5]||"",!0),ii(this,m[6]||"",!0),this.m=xe(m[7]||"")):(this.h=!1,this.i=new rr(null,this.h))}Ar.prototype.toString=function(){var u=[],m=this.j;m&&u.push(oi(m,Ys,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(oi(m,Ys,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(oi(_,_.charAt(0)=="/"?Yl:Ql,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",oi(_,wa)),u.join("")};function hn(u){return new Ar(u)}function ns(u,m,_){u.j=_?xe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ri(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ii(u,m,_){m instanceof rr?(u.i=m,ir(u.i,u.h)):(_||(m=oi(m,Xl)),u.i=new rr(m,u.h))}function We(u,m,_){u.i.set(m,_)}function si(u){return We(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function oi(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Gl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Gl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ys=/[#\/\?@]/g,Ql=/[#\?:]/g,Yl=/[#\?]/g,Xl=/[#\?@]/g,wa=/#/g;function rr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Ct(u){u.g||(u.g=new Map,u.h=0,u.i&&Eh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=rr.prototype,n.add=function(u,m){Ct(this),this.i=null,u=Tn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Vn(u,m){Ct(u),m=Tn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Mn(u,m){return Ct(u),m=Tn(u,m),u.g.has(m)}n.forEach=function(u,m){Ct(this),this.g.forEach(function(_,E){_.forEach(function(U){u.call(m,U,E,this)},this)},this)},n.na=function(){Ct(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let E=0;E<m.length;E++){const U=u[E];for(let W=0;W<U.length;W++)_.push(m[E])}return _},n.V=function(u){Ct(this);let m=[];if(typeof u=="string")Mn(this,u)&&(m=m.concat(this.g.get(Tn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Ct(this),this.i=null,u=Tn(this,u),Mn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ai(u,m,_){Vn(u,m),0<_.length&&(u.i=null,u.g.set(Tn(u,m),j(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var E=m[_];const W=encodeURIComponent(String(E)),ne=this.V(E);for(E=0;E<ne.length;E++){var U=W;ne[E]!==""&&(U+="="+encodeURIComponent(String(ne[E]))),u.push(U)}}return this.i=u.join("&")};function Tn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function ir(u,m){m&&!u.j&&(Ct(u),u.i=null,u.g.forEach(function(_,E){var U=E.toLowerCase();E!=U&&(Vn(this,E),ai(this,U,_))},u)),u.j=m}function Th(u,m){const _=new Yi;if(d.Image){const E=new Image;E.onload=N(Jt,_,"TestLoadImage: loaded",!0,m,E),E.onerror=N(Jt,_,"TestLoadImage: error",!1,m,E),E.onabort=N(Jt,_,"TestLoadImage: abort",!1,m,E),E.ontimeout=N(Jt,_,"TestLoadImage: timeout",!1,m,E),d.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function Jl(u,m){const _=new Yi,E=new AbortController,U=setTimeout(()=>{E.abort(),Jt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(W=>{clearTimeout(U),W.ok?Jt(_,"TestPingServer: ok",!0,m):Jt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),Jt(_,"TestPingServer: error",!1,m)})}function Jt(u,m,_,E,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),E(_)}catch{}}function Ih(){this.g=new ha}function Zl(u,m,_){const E=_||"";try{ni(u,function(U,W){let ne=U;y(U)&&(ne=ua(U)),m.push(E+W+"="+encodeURIComponent(ne))})}catch(U){throw m.push(E+"type="+encodeURIComponent("_badmap")),U}}function kr(u){this.l=u.Ub||null,this.j=u.eb||!1}O(kr,Gi),kr.prototype.g=function(){return new rs(this.l,this.j)},kr.prototype.i=function(u){return function(){return u}}({});function rs(u,m){mt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(rs,mt),n=rs.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Fn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Un(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;eu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function eu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Un(this):Fn(this),this.readyState==3&&eu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Un(this))},n.Qa=function(u){this.g&&(this.response=u,Un(this))},n.ga=function(){this.g&&Un(this)};function Un(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Fn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Fn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Cr(u){let m="";return fe(u,function(_,E){m+=E,m+=":",m+=_,m+=`\r
`}),m}function li(u,m,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=Cr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):We(u,m,_))}function Xe(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(Xe,mt);var Sh=/^https?$/i,Ea=["POST","PUT"];n=Xe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():On.g(),this.v=this.o?zs(this.o):zs(On),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(W){is(this,W);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var U in E)_.set(U,E[U]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const W of E.keys())_.set(W,E.get(W));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(W=>W.toLowerCase()=="content-type"),U=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ea,m,void 0))||E||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ne]of _)this.g.setRequestHeader(W,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Js(this),this.u=!0,this.g.send(u),this.u=!1}catch(W){is(this,W)}};function is(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Xs(u),dn(u)}function Xs(u){u.A||(u.A=!0,gt(u,"complete"),gt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,gt(this,"complete"),gt(this,"abort"),dn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dn(this,!0)),Xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ta(this):this.bb())},n.bb=function(){Ta(this)};function Ta(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Zt(u)!=4||u.Z()!=2)){if(u.u&&Zt(u)==4)oa(u.Ea,0,u);else if(gt(u,"readystatechange"),Zt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var E;if(E=ne===0){var U=String(u.D).match(ts)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),E=!Sh.test(U?U.toLowerCase():"")}_=E}if(_)gt(u,"complete"),gt(u,"success");else{u.m=6;try{var W=2<Zt(u)?u.g.statusText:""}catch{W=""}u.l=W+" ["+u.Z()+"]",Xs(u)}}finally{dn(u)}}}}function dn(u,m){if(u.g){Js(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||gt(u,"ready");try{_.onreadystatechange=E}catch{}}}function Js(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Zt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),ca(m)}};function Ia(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Zs(u){const m={};u=(u.g&&2<=Zt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(q(u[E]))continue;var _=L(u[E]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const W=m[U]||[];m[U]=W,W.push(_)}x(m,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Sa(u){this.Aa=0,this.i=[],this.j=new Yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sr("baseRetryDelayMs",5e3,u),this.cb=sr("retryDelaySeedMs",1e4,u),this.Wa=sr("forwardChannelMaxRetries",2,u),this.wa=sr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new es(u&&u.concurrentRequestLimit),this.Da=new Ih,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Sa.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,E){lt(0),this.W=u,this.H=m||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=iu(this,null,this.W),or(this)};function Pt(u){if(eo(u),u.G==3){var m=u.U++,_=hn(u.I);if(We(_,"SID",u.K),We(_,"RID",m),We(_,"TYPE","terminate"),Pr(u,_),m=new Ln(u,u.j,m),m.L=2,m.v=si(hn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=su(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}ru(u)}function zn(u){u.g&&(Ra(u),u.g.cancel(),u.g=null)}function eo(u){zn(u),u.u&&(d.clearTimeout(u.u),u.u=null),ro(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function or(u){if(!cn(u.h)&&!u.s){u.s=!0;var m=u.Ga;$e||oe(),ie||($e(),ie=!0),ye.add(m,u),u.B=0}}function Rh(u,m){return Hl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=bn(I(u.Ga,u,m),nu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new Ln(this,this.j,u);let W=this.o;if(this.S&&(W?(W=S(W),P(W,this.S)):W=this.S),this.m!==null||this.O||(U.H=W,W=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ui(this,U,m),_=hn(this.I),We(_,"RID",u),We(_,"CVER",22),this.D&&We(_,"X-HTTP-Session-Id",this.D),Pr(this,_),W&&(this.O?m="headers="+encodeURIComponent(String(Cr(W)))+"&"+m:this.m&&li(_,this.m,W)),va(this.h,U),this.Ua&&We(_,"TYPE","init"),this.P?(We(_,"$req",m),We(_,"SID","null"),U.T=!0,Ks(U,_,null)):Ks(U,_,m),this.G=2}}else this.G==3&&(u?to(this,u):this.i.length==0||cn(this.h)||to(this))};function to(u,m){var _;m?_=m.l:_=u.U++;const E=hn(u.I);We(E,"SID",u.K),We(E,"RID",_),We(E,"AID",u.T),Pr(u,E),u.m&&u.o&&li(E,u.m,u.o),_=new Ln(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ui(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),va(u.h,_),Ks(_,E,m)}function Pr(u,m){u.H&&fe(u.H,function(_,E){We(m,E,_)}),u.l&&ni({},function(_,E){We(m,E,_)})}function ui(u,m,_){_=Math.min(u.i.length,_);var E=u.l?I(u.l.Na,u.l,u):null;e:{var U=u.i;let W=-1;for(;;){const ne=["count="+_];W==-1?0<_?(W=U[0].g,ne.push("ofs="+W)):W=0:ne.push("ofs="+W);let Be=!0;for(let yt=0;yt<_;yt++){let Oe=U[yt].g;const It=U[yt].map;if(Oe-=W,0>Oe)W=Math.max(0,U[yt].g-100),Be=!1;else try{Zl(It,ne,"req"+Oe+"_")}catch{E&&E(It)}}if(Be){E=ne.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,E}function ss(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;$e||oe(),ie||($e(),ie=!0),ye.add(m,u),u.v=0}}function no(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=bn(I(u.Fa,u),nu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,tu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=bn(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),zn(this),tu(this))};function Ra(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function tu(u){u.g=new Ln(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=hn(u.qa);We(m,"RID","rpc"),We(m,"SID",u.K),We(m,"AID",u.T),We(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&We(m,"TO",u.ja),We(m,"TYPE","xmlhttp"),Pr(u,m),u.m&&u.o&&li(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=si(hn(m)),_.m=null,_.P=!0,ya(_,u)}n.Za=function(){this.C!=null&&(this.C=null,zn(this),no(this),lt(19))};function ro(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function io(u,m){var _=null;if(u.g==m){ro(u),Ra(u),u.g=null;var E=2}else if(qt(u.h,m))_=m.D,ql(u.h,m),E=1;else return;if(u.G!=0){if(m.o)if(E==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;E=Qi(),gt(E,new $s(E,_)),or(u)}else ss(u);else if(U=m.s,U==3||U==0&&0<m.X||!(E==1&&Rh(u,m)||E==2&&no(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),U){case 1:Nr(u,5);break;case 4:Nr(u,10);break;case 3:Nr(u,6);break;default:Nr(u,2)}}}function nu(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Nr(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),E=u.Xa;const U=!E;E=new Ar(E||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ns(E,"https"),si(E),U?Th(E.toString(),_):Jl(E.toString(),_)}else lt(2);u.G=0,u.l&&u.l.sa(m),ru(u),eo(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function ru(u){if(u.G=0,u.ka=[],u.l){const m=Kl(u.h);(m.length!=0||u.i.length!=0)&&(D(u.ka,m),D(u.ka,u.i),u.h.i.length=0,j(u.i),u.i.length=0),u.l.ra()}}function iu(u,m,_){var E=_ instanceof Ar?hn(_):new Ar(_);if(E.g!="")m&&(E.g=m+"."+E.g),ri(E,E.s);else{var U=d.location;E=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var W=new Ar(null);E&&ns(W,E),m&&(W.g=m),U&&ri(W,U),_&&(W.l=_),E=W}return _=u.D,m=u.ya,_&&m&&We(E,_,m),We(E,"VER",u.la),Pr(u,E),E}function su(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Xe(new kr({eb:_})):new Xe(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Aa(){}n=Aa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function so(){}so.prototype.g=function(u,m){return new Kt(u,m)};function Kt(u,m){mt.call(this),this.g=new Sa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!q(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!q(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ar(this)}O(Kt,mt),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Pt(this.g)},Kt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=ua(u),u=_);m.i.push(new Wl(m.Ya++,u)),m.G==3&&or(m)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Pt(this.g),delete this.g,Kt.aa.N.call(this)};function ou(u){tr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}O(ou,tr);function au(){Bs.call(this),this.status=1}O(au,Bs);function ar(u){this.g=u}O(ar,Aa),ar.prototype.ua=function(){gt(this.g,"a")},ar.prototype.ta=function(u){gt(this.g,new ou(u))},ar.prototype.sa=function(u){gt(this.g,new au)},ar.prototype.ra=function(){gt(this.g,"b")},so.prototype.createWebChannel=so.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,F0=function(){return new so},U0=function(){return Qi()},M0=nr,xf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hs.NO_ERROR=0,Hs.TIMEOUT=8,Hs.HTTP_ERROR=6,yc=Hs,zl.COMPLETE="complete",V0=zl,js.EventType=wn,wn.OPEN="a",wn.CLOSE="b",wn.ERROR="c",wn.MESSAGE="d",mt.prototype.listen=mt.prototype.K,rl=js,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,L0=Xe}).apply(typeof rc<"u"?rc:typeof self<"u"?self:typeof window<"u"?window:{});const p_="@firebase/firestore";/**
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
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
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
 */let Xo="11.0.2";/**
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
 */const Cs=new cp("@firebase/firestore");function Co(){return Cs.logLevel}function ae(n,...e){if(Cs.logLevel<=Pe.DEBUG){const t=e.map(Sp);Cs.debug(`Firestore (${Xo}): ${n}`,...t)}}function Gr(n,...e){if(Cs.logLevel<=Pe.ERROR){const t=e.map(Sp);Cs.error(`Firestore (${Xo}): ${n}`,...t)}}function Fo(n,...e){if(Cs.logLevel<=Pe.WARN){const t=e.map(Sp);Cs.warn(`Firestore (${Xo}): ${n}`,...t)}}function Sp(n){if(typeof n=="string")return n;try{/**
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
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${Xo}) INTERNAL ASSERTION FAILED: `+n;throw Gr(e),new Error(e)}function je(n,e){n||Te()}function Se(n,e){return n}/**
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
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends wr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Is{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class z0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t($t.UNAUTHENTICATED))}shutdown(){}}class Ek{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Tk{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let a=new Is;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Is,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=a;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Is)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(je(typeof i.accessToken=="string"),new z0(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string"),new $t(e)}}class Ik{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Sk{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new Ik(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ak{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){je(this.o===void 0);const i=a=>{a.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.R;return this.R=a.token,ae("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>i(a))};const o=a=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>o(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?o(a):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(je(typeof t.token=="string"),this.R=t.token,new Rk(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function kk(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class j0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=kk(40);for(let a=0;a<o.length;++a)i.length<20&&o[a]<t&&(i+=e.charAt(o[a]%e.length))}return i}}function be(n,e){return n<e?-1:n>e?1:0}function zo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
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
 */class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new wt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ue(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new wt(0,0))}static max(){return new Ie(new wt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class _l{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return _l.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _l?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const a=e.get(o),c=t.get(o);if(a<c)return-1;if(a>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ye extends _l{construct(e,t,i){return new Ye(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ue(Q.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const Ck=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ot extends _l{construct(e,t,i){return new Ot(e,t,i)}static isValidIdentifier(e){return Ck.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ot(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const a=()=>{if(i.length===0)throw new ue(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ue(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ue(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(a(),o++)}if(a(),c)throw new ue(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ot(t)}static emptyPath(){return new Ot([])}}/**
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
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Ye.fromString(e))}static fromName(e){return new me(Ye.fromString(e).popFirst(5))}static empty(){return new me(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Ye(e.slice()))}}function Pk(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new wt(t+1,0):new wt(t,i));return new Li(o,me.empty(),e)}function Nk(n){return new Li(n.readTime,n.key,-1)}class Li{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Li(Ie.min(),me.empty(),-1)}static max(){return new Li(Ie.max(),me.empty(),-1)}}function xk(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
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
 */const bk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Jo(n){if(n.code!==Q.FAILED_PRECONDITION||n.message!==bk)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((i,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(i,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,i)=>{t(e)})}static reject(e){return new K((t,i)=>{i(e)})}static waitFor(e){return new K((t,i)=>{let o=0,a=0,c=!1;e.forEach(d=>{++o,d.next(()=>{++a,c&&a===o&&t()},p=>i(p))}),c=!0,a===o&&t()})}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next(o=>o?K.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,a)=>{i.push(t.call(this,o,a))}),this.waitFor(i)}static mapArray(e,t){return new K((i,o)=>{const a=e.length,c=new Array(a);let d=0;for(let p=0;p<a;p++){const y=p;t(e[y]).next(v=>{c[y]=v,++d,d===a&&i(c)},v=>o(v))}})}static doWhile(e,t){return new K((i,o)=>{const a=()=>{e()===!0?t().next(()=>{a()},o):i()};a()})}}function Ok(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Zo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class th{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}th.oe=-1;function nh(n){return n==null}function Dc(n){return n===0&&1/n==-1/0}function Lk(n){return typeof n=="number"&&Number.isInteger(n)&&!Dc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Vk(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=m_(e)),e=Mk(n.get(t),e);return m_(e)}function Mk(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const a=n.charAt(o);switch(a){case"\0":t+="";break;case"":t+="";break;default:t+=a}}return t}function m_(n){return n+""}/**
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
 */function g_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function $i(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function B0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ic(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ic(this.root,e,this.comparator,!1)}getReverseIterator(){return new ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ic(this.root,e,this.comparator,!0)}}class ic{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?i(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,i,o,a){this.key=e,this.value=t,this.color=i??Dt.RED,this.left=o??Dt.EMPTY,this.right=a??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,a){return new Dt(e??this.key,t??this.value,i??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const a=i(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,i),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,i,o,a){return this}insert(e,t,i){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Et{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new y_(this.data.getIterator())}getIteratorFrom(e){return new y_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Et(this.comparator);return t.data=e,t}}class y_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yn{constructor(e){this.fields=e,e.sort(Ot.comparator)}static empty(){return new yn([])}unionWith(e){let t=new Et(Ot.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new yn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return zo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class $0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Lt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new $0("Invalid base64 string: "+a):a}}(e);return new Lt(t)}static fromUint8Array(e){const t=function(o){let a="";for(let c=0;c<o.length;++c)a+=String.fromCharCode(o[c]);return a}(e);return new Lt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Lt.EMPTY_BYTE_STRING=new Lt("");const Uk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vi(n){if(je(!!n),typeof n=="string"){let e=0;const t=Uk.exec(n);if(je(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Mi(n){return typeof n=="string"?Lt.fromBase64String(n):Lt.fromUint8Array(n)}/**
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
 */function Rp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function rh(n){const e=n.mapValue.fields.__previous_value__;return Rp(e)?rh(e):e}function vl(n){const e=Vi(n.mapValue.fields.__local_write_time__.timestampValue);return new wt(e.seconds,e.nanos)}/**
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
 */class Fk{constructor(e,t,i,o,a,c,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class wl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new wl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const sc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ui(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Rp(n)?4:jk(n)?9007199254740991:zk(n)?10:11:Te()}function _r(n,e){if(n===e)return!0;const t=Ui(n);if(t!==Ui(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return vl(n).isEqual(vl(e));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const c=Vi(o.timestampValue),d=Vi(a.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,a){return Mi(o.bytesValue).isEqual(Mi(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,a){return ct(o.geoPointValue.latitude)===ct(a.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(a.geoPointValue.longitude)}(n,e);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return ct(o.integerValue)===ct(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const c=ct(o.doubleValue),d=ct(a.doubleValue);return c===d?Dc(c)===Dc(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return zo(n.arrayValue.values||[],e.arrayValue.values||[],_r);case 10:case 11:return function(o,a){const c=o.mapValue.fields||{},d=a.mapValue.fields||{};if(g_(c)!==g_(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!_r(c[p],d[p])))return!1;return!0}(n,e);default:return Te()}}function El(n,e){return(n.values||[]).find(t=>_r(t,e))!==void 0}function jo(n,e){if(n===e)return 0;const t=Ui(n),i=Ui(e);if(t!==i)return be(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return function(a,c){const d=ct(a.integerValue||a.doubleValue),p=ct(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return __(n.timestampValue,e.timestampValue);case 4:return __(vl(n),vl(e));case 5:return be(n.stringValue,e.stringValue);case 6:return function(a,c){const d=Mi(a),p=Mi(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(a,c){const d=a.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const v=be(d[y],p[y]);if(v!==0)return v}return be(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,c){const d=be(ct(a.latitude),ct(c.latitude));return d!==0?d:be(ct(a.longitude),ct(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return v_(n.arrayValue,e.arrayValue);case 10:return function(a,c){var d,p,y,v;const T=a.fields||{},I=c.fields||{},N=(d=T.value)===null||d===void 0?void 0:d.arrayValue,O=(p=I.value)===null||p===void 0?void 0:p.arrayValue,j=be(((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0,((v=O==null?void 0:O.values)===null||v===void 0?void 0:v.length)||0);return j!==0?j:v_(N,O)}(n.mapValue,e.mapValue);case 11:return function(a,c){if(a===sc.mapValue&&c===sc.mapValue)return 0;if(a===sc.mapValue)return 1;if(c===sc.mapValue)return-1;const d=a.fields||{},p=Object.keys(d),y=c.fields||{},v=Object.keys(y);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const I=be(p[T],v[T]);if(I!==0)return I;const N=jo(d[p[T]],y[v[T]]);if(N!==0)return N}return be(p.length,v.length)}(n.mapValue,e.mapValue);default:throw Te()}}function __(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=Vi(n),i=Vi(e),o=be(t.seconds,i.seconds);return o!==0?o:be(t.nanos,i.nanos)}function v_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const a=jo(t[o],i[o]);if(a)return a}return be(t.length,i.length)}function Bo(n){return bf(n)}function bf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Vi(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Mi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return me.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const a of t.values||[])o?o=!1:i+=",",i+=bf(a);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const c of i)a?a=!1:o+=",",o+=`${c}:${bf(t.fields[c])}`;return o+"}"}(n.mapValue):Te()}function _c(n){switch(Ui(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=rh(n);return e?16+_c(e):16;case 5:return 2*n.stringValue.length;case 6:return Mi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,a)=>o+_c(a),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return $i(i.fields,(a,c)=>{o+=a.length+_c(c)}),o}(n.mapValue);default:throw Te()}}function w_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Df(n){return!!n&&"integerValue"in n}function Ap(n){return!!n&&"arrayValue"in n}function E_(n){return!!n&&"nullValue"in n}function T_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function vc(n){return!!n&&"mapValue"in n}function zk(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ul(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return $i(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ul(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ul(n.arrayValue.values[t]);return e}return Object.assign({},n)}function jk(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!vc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ul(t)}setAll(e){let t=Ot.emptyPath(),i={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=ul(c):o.push(d.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,i,o)}delete(e){const t=this.field(e.popLast());vc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _r(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];vc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){$i(t,(o,a)=>e[o]=a);for(const o of i)delete e[o]}clone(){return new ln(ul(this.value))}}function W0(n){const e=[];return $i(n.fields,(t,i)=>{const o=new Ot([t]);if(vc(i)){const a=W0(i.mapValue).fields;if(a.length===0)e.push(o);else for(const c of a)e.push(o.child(c))}else e.push(o)}),new yn(e)}/**
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
 */class Wt{constructor(e,t,i,o,a,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=a,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Wt(e,0,Ie.min(),Ie.min(),Ie.min(),ln.empty(),0)}static newFoundDocument(e,t,i,o){return new Wt(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new Wt(e,2,t,Ie.min(),Ie.min(),ln.empty(),0)}static newUnknownDocument(e,t){return new Wt(e,3,t,Ie.min(),Ie.min(),ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oc{constructor(e,t){this.position=e,this.inclusive=t}}function I_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const a=e[o],c=n.position[o];if(a.field.isKeyField()?i=me.comparator(me.fromName(c.referenceValue),t.key):i=jo(c,t.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function S_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!_r(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Tl{constructor(e,t="asc"){this.field=e,this.dir=t}}function Bk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class H0{}class pt extends H0{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Wk(e,t,i):t==="array-contains"?new Kk(e,i):t==="in"?new Gk(e,i):t==="not-in"?new Qk(e,i):t==="array-contains-any"?new Yk(e,i):new pt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Hk(e,i):new qk(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(jo(t,this.value)):t!==null&&Ui(this.value)===Ui(t)&&this.matchesComparison(jo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zn extends H0{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Zn(e,t)}matches(e){return q0(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function q0(n){return n.op==="and"}function K0(n){return $k(n)&&q0(n)}function $k(n){for(const e of n.filters)if(e instanceof Zn)return!1;return!0}function Of(n){if(n instanceof pt)return n.field.canonicalString()+n.op.toString()+Bo(n.value);if(K0(n))return n.filters.map(e=>Of(e)).join(",");{const e=n.filters.map(t=>Of(t)).join(",");return`${n.op}(${e})`}}function G0(n,e){return n instanceof pt?function(i,o){return o instanceof pt&&i.op===o.op&&i.field.isEqual(o.field)&&_r(i.value,o.value)}(n,e):n instanceof Zn?function(i,o){return o instanceof Zn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((a,c,d)=>a&&G0(c,o.filters[d]),!0):!1}(n,e):void Te()}function Q0(n){return n instanceof pt?function(t){return`${t.field.canonicalString()} ${t.op} ${Bo(t.value)}`}(n):n instanceof Zn?function(t){return t.op.toString()+" {"+t.getFilters().map(Q0).join(" ,")+"}"}(n):"Filter"}class Wk extends pt{constructor(e,t,i){super(e,t,i),this.key=me.fromName(i.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class Hk extends pt{constructor(e,t){super(e,"in",t),this.keys=Y0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class qk extends pt{constructor(e,t){super(e,"not-in",t),this.keys=Y0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Y0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>me.fromName(i.referenceValue))}class Kk extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ap(t)&&El(t.arrayValue,this.value)}}class Gk extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&El(this.value.arrayValue,t)}}class Qk extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(El(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!El(this.value.arrayValue,t)}}class Yk extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ap(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>El(this.value.arrayValue,i))}}/**
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
 */class Xk{constructor(e,t=null,i=[],o=[],a=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=a,this.startAt=c,this.endAt=d,this.ue=null}}function R_(n,e=null,t=[],i=[],o=null,a=null,c=null){return new Xk(n,e,t,i,o,a,c)}function kp(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Of(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),nh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Bo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Bo(i)).join(",")),e.ue=t}return e.ue}function Cp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Bk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!G0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!S_(n.startAt,e.startAt)&&S_(n.endAt,e.endAt)}function Lf(n){return me.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ea{constructor(e,t=null,i=[],o=[],a=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=a,this.limitType=c,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Jk(n,e,t,i,o,a,c,d){return new ea(n,e,t,i,o,a,c,d)}function Pp(n){return new ea(n)}function A_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function X0(n){return n.collectionGroup!==null}function cl(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),t.add(a.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Et(Ot.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.ce.push(new Tl(a,i))}),t.has(Ot.keyField().canonicalString())||e.ce.push(new Tl(Ot.keyField(),i))}return e.ce}function gr(n){const e=Se(n);return e.le||(e.le=Zk(e,cl(n))),e.le}function Zk(n,e){if(n.limitType==="F")return R_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const a=o.dir==="desc"?"asc":"desc";return new Tl(o.field,a)});const t=n.endAt?new Oc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Oc(n.startAt.position,n.startAt.inclusive):null;return R_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Vf(n,e){const t=n.filters.concat([e]);return new ea(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Mf(n,e,t){return new ea(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ih(n,e){return Cp(gr(n),gr(e))&&n.limitType===e.limitType}function J0(n){return`${kp(gr(n))}|lt:${n.limitType}`}function Po(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>Q0(o)).join(", ")}]`),nh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Bo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Bo(o)).join(",")),`Target(${i})`}(gr(n))}; limitType=${n.limitType})`}function sh(n,e){return e.isFoundDocument()&&function(i,o){const a=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):me.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(n,e)&&function(i,o){for(const a of cl(i))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const a of i.filters)if(!a.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,d,p){const y=I_(c,d,p);return c.inclusive?y<=0:y<0}(i.startAt,cl(i),o)||i.endAt&&!function(c,d,p){const y=I_(c,d,p);return c.inclusive?y>=0:y>0}(i.endAt,cl(i),o))}(n,e)}function eC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Z0(n){return(e,t)=>{let i=!1;for(const o of cl(n)){const a=tC(o,e,t);if(a!==0)return a;i=i||o.field.isKeyField()}return 0}}function tC(n,e,t){const i=n.field.isKeyField()?me.comparator(e.key,t.key):function(a,c,d){const p=c.data.field(a),y=d.data.field(a);return p!==null&&y!==null?jo(p,y):Te()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
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
 */class bs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,a]of i)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){$i(this.inner,(t,i)=>{for(const[o,a]of i)e(o,a)})}isEmpty(){return B0(this.inner)}size(){return this.innerSize}}/**
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
 */const nC=new rt(me.comparator);function Qr(){return nC}const ew=new rt(me.comparator);function il(...n){let e=ew;for(const t of n)e=e.insert(t.key,t);return e}function tw(n){let e=ew;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Es(){return hl()}function nw(){return hl()}function hl(){return new bs(n=>n.toString(),(n,e)=>n.isEqual(e))}const rC=new rt(me.comparator),iC=new Et(me.comparator);function Ne(...n){let e=iC;for(const t of n)e=e.add(t);return e}const sC=new Et(be);function oC(){return sC}/**
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
 */function Np(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dc(e)?"-0":e}}function rw(n){return{integerValue:""+n}}function aC(n,e){return Lk(e)?rw(e):Np(n,e)}/**
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
 */class oh{constructor(){this._=void 0}}function lC(n,e,t){return n instanceof Lc?function(o,a){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&Rp(a)&&(a=rh(a)),a&&(c.fields.__previous_value__=a),{mapValue:c}}(t,e):n instanceof Il?sw(n,e):n instanceof Sl?ow(n,e):function(o,a){const c=iw(o,a),d=k_(c)+k_(o.Pe);return Df(c)&&Df(o.Pe)?rw(d):Np(o.serializer,d)}(n,e)}function uC(n,e,t){return n instanceof Il?sw(n,e):n instanceof Sl?ow(n,e):t}function iw(n,e){return n instanceof Vc?function(i){return Df(i)||function(a){return!!a&&"doubleValue"in a}(i)}(e)?e:{integerValue:0}:null}class Lc extends oh{}class Il extends oh{constructor(e){super(),this.elements=e}}function sw(n,e){const t=aw(e);for(const i of n.elements)t.some(o=>_r(o,i))||t.push(i);return{arrayValue:{values:t}}}class Sl extends oh{constructor(e){super(),this.elements=e}}function ow(n,e){let t=aw(e);for(const i of n.elements)t=t.filter(o=>!_r(o,i));return{arrayValue:{values:t}}}class Vc extends oh{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function k_(n){return ct(n.integerValue||n.doubleValue)}function aw(n){return Ap(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function cC(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof Il&&o instanceof Il||i instanceof Sl&&o instanceof Sl?zo(i.elements,o.elements,_r):i instanceof Vc&&o instanceof Vc?_r(i.Pe,o.Pe):i instanceof Lc&&o instanceof Lc}(n.transform,e.transform)}class hC{constructor(e,t){this.version=e,this.transformResults=t}}class Yn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Yn}static exists(e){return new Yn(void 0,e)}static updateTime(e){return new Yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ah{}function lw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xp(n.key,Yn.none()):new Ol(n.key,n.data,Yn.none());{const t=n.data,i=ln.empty();let o=new Et(Ot.comparator);for(let a of e.fields)if(!o.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?i.delete(a):i.set(a,c),o=o.add(a)}return new Wi(n.key,i,new yn(o.toArray()),Yn.none())}}function dC(n,e,t){n instanceof Ol?function(o,a,c){const d=o.value.clone(),p=P_(o.fieldTransforms,a,c.transformResults);d.setAll(p),a.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Wi?function(o,a,c){if(!wc(o.precondition,a))return void a.convertToUnknownDocument(c.version);const d=P_(o.fieldTransforms,a,c.transformResults),p=a.data;p.setAll(uw(o)),p.setAll(d),a.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(o,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function dl(n,e,t,i){return n instanceof Ol?function(a,c,d,p){if(!wc(a.precondition,c))return d;const y=a.value.clone(),v=N_(a.fieldTransforms,p,c);return y.setAll(v),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Wi?function(a,c,d,p){if(!wc(a.precondition,c))return d;const y=N_(a.fieldTransforms,p,c),v=c.data;return v.setAll(uw(a)),v.setAll(y),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(a,c,d){return wc(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function fC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),a=iw(i.transform,o||null);a!=null&&(t===null&&(t=ln.empty()),t.set(i.field,a))}return t||null}function C_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&zo(i,o,(a,c)=>cC(a,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ol extends ah{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Wi extends ah{constructor(e,t,i,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function uw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function P_(n,e,t){const i=new Map;je(n.length===t.length);for(let o=0;o<t.length;o++){const a=n[o],c=a.transform,d=e.data.field(a.field);i.set(a.field,uC(c,d,t[o]))}return i}function N_(n,e,t){const i=new Map;for(const o of n){const a=o.transform,c=t.data.field(o.field);i.set(o.field,lC(a,c,e))}return i}class xp extends ah{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pC extends ah{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class mC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&dC(a,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=dl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=dl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=nw();return this.mutations.forEach(o=>{const a=e.get(o.key),c=a.overlayedDocument;let d=this.applyToLocalView(c,a.mutatedFields);d=t.has(o.key)?null:d;const p=lw(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&zo(this.mutations,e.mutations,(t,i)=>C_(t,i))&&zo(this.baseMutations,e.baseMutations,(t,i)=>C_(t,i))}}class bp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){je(e.mutations.length===i.length);let o=function(){return rC}();const a=e.mutations;for(let c=0;c<a.length;c++)o=o.insert(a[c].key,i[c].version);return new bp(e,t,i,o)}}/**
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
 */class gC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ft,Le;function _C(n){switch(n){default:return Te();case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0}}function cw(n){if(n===void 0)return Gr("GRPC error has no .code"),Q.UNKNOWN;switch(n){case ft.OK:return Q.OK;case ft.CANCELLED:return Q.CANCELLED;case ft.UNKNOWN:return Q.UNKNOWN;case ft.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case ft.INTERNAL:return Q.INTERNAL;case ft.UNAVAILABLE:return Q.UNAVAILABLE;case ft.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case ft.NOT_FOUND:return Q.NOT_FOUND;case ft.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case ft.ABORTED:return Q.ABORTED;case ft.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case ft.DATA_LOSS:return Q.DATA_LOSS;default:return Te()}}(Le=ft||(ft={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function vC(){return new TextEncoder}/**
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
 */const wC=new Ts([4294967295,4294967295],0);function x_(n){const e=vC().encode(n),t=new O0;return t.update(e),new Uint8Array(t.digest())}function b_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ts([t,i],0),new Ts([o,a],0)]}class Dp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new sl(`Invalid padding: ${t}`);if(i<0)throw new sl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new sl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new sl(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Ts.fromNumber(this.Te)}Ee(e,t,i){let o=e.add(t.multiply(Ts.fromNumber(i)));return o.compare(wC)===1&&(o=new Ts([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=x_(e),[i,o]=b_(t);for(let a=0;a<this.hashCount;a++){const c=this.Ee(i,o,a);if(!this.de(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new Dp(a,o,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Te===0)return;const t=x_(e),[i,o]=b_(t);for(let a=0;a<this.hashCount;a++){const c=this.Ee(i,o,a);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class sl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class lh{constructor(e,t,i,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Ll.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new lh(Ie.min(),o,new rt(be),Qr(),Ne())}}class Ll{constructor(e,t,i,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Ll(i,t,Ne(),Ne(),Ne())}}/**
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
 */class Ec{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class hw{constructor(e,t){this.targetId=e,this.me=t}}class dw{constructor(e,t,i=Lt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class D_{constructor(){this.fe=0,this.ge=O_(),this.pe=Lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ne(),t=Ne(),i=Ne();return this.ge.forEach((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te()}}),new Ll(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=O_()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,je(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class EC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Qr(),this.qe=oc(),this.Qe=oc(),this.Ke=new rt(be)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const a=o.target;if(Lf(a))if(i===0){const c=new me(a.path);this.We(t,c,Wt.newNoDocument(c,Ie.min()))}else je(i===1);else{const c=this.Ze(t);if(c!==i){const d=this.Xe(e),p=d?this.et(d,e,c):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=t;let c,d;try{c=Mi(i).toUint8Array()}catch(p){if(p instanceof $0)return Fo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Dp(c,o,a)}catch(p){return Fo(p instanceof sl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(a=>{const c=this.Le.nt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.We(t,a,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((a,c)=>{const d=this.Ye(c);if(d){if(a.current&&Lf(d.target)){const p=new me(d.target.path);this.st(p).has(c)||this.ot(c,p)||this.We(c,p,Wt.newNoDocument(p,e))}a.be&&(t.set(c,a.ve()),a.Ce())}});let i=Ne();this.Qe.forEach((a,c)=>{let d=!0;c.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(a))}),this.ke.forEach((a,c)=>c.setReadTime(e));const o=new lh(e,t,this.Ke,this.ke,i);return this.ke=Qr(),this.qe=oc(),this.Qe=oc(),this.Ke=new rt(be),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new D_,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Et(be),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Et(be),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new D_),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function oc(){return new rt(me.comparator)}function O_(){return new rt(me.comparator)}const TC={asc:"ASCENDING",desc:"DESCENDING"},IC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SC={and:"AND",or:"OR"};class RC{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Uf(n,e){return n.useProto3Json||nh(e)?e:{value:e}}function Mc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function AC(n,e){return Mc(n,e.toTimestamp())}function yr(n){return je(!!n),Ie.fromTimestamp(function(t){const i=Vi(t);return new wt(i.seconds,i.nanos)}(n))}function Op(n,e){return Ff(n,e).canonicalString()}function Ff(n,e){const t=function(o){return new Ye(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function pw(n){const e=Ye.fromString(n);return je(vw(e)),e}function zf(n,e){return Op(n.databaseId,e.path)}function of(n,e){const t=pw(e);if(t.get(1)!==n.databaseId.projectId)throw new ue(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new me(gw(t))}function mw(n,e){return Op(n.databaseId,e)}function kC(n){const e=pw(n);return e.length===4?Ye.emptyPath():gw(e)}function jf(n){return new Ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function gw(n){return je(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function L_(n,e,t){return{name:zf(n,e),fields:t.value.mapValue.fields}}function CC(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=function(y,v){return y.useProto3Json?(je(v===void 0||typeof v=="string"),Lt.fromBase64String(v||"")):(je(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Lt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(y){const v=y.code===void 0?Q.UNKNOWN:cw(y.code);return new ue(v,y.message||"")}(c);t=new dw(i,o,a,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=of(n,i.document.name),a=yr(i.document.updateTime),c=i.document.createTime?yr(i.document.createTime):Ie.min(),d=new ln({mapValue:{fields:i.document.fields}}),p=Wt.newFoundDocument(o,a,c,d),y=i.targetIds||[],v=i.removedTargetIds||[];t=new Ec(y,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=of(n,i.document),a=i.readTime?yr(i.readTime):Ie.min(),c=Wt.newNoDocument(o,a),d=i.removedTargetIds||[];t=new Ec([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=of(n,i.document),a=i.removedTargetIds||[];t=new Ec([],a,o,null)}else{if(!("filter"in e))return Te();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:a}=i,c=new yC(o,a),d=i.targetId;t=new hw(d,c)}}return t}function PC(n,e){let t;if(e instanceof Ol)t={update:L_(n,e.key,e.value)};else if(e instanceof xp)t={delete:zf(n,e.key)};else if(e instanceof Wi)t={update:L_(n,e.key,e.data),updateMask:UC(e.fieldMask)};else{if(!(e instanceof pC))return Te();t={verify:zf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(a,c){const d=c.transform;if(d instanceof Lc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Il)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Sl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Vc)return{fieldPath:c.field.canonicalString(),increment:d.Pe};throw Te()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,a){return a.updateTime!==void 0?{updateTime:AC(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Te()}(n,e.precondition)),t}function NC(n,e){return n&&n.length>0?(je(e!==void 0),n.map(t=>function(o,a){let c=o.updateTime?yr(o.updateTime):yr(a);return c.isEqual(Ie.min())&&(c=yr(a)),new hC(c,o.transformResults||[])}(t,e))):[]}function xC(n,e){return{documents:[mw(n,e.path)]}}function bC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=mw(n,o);const a=function(y){if(y.length!==0)return _w(Zn.create(y,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const c=function(y){if(y.length!==0)return y.map(v=>function(I){return{field:No(I.field),direction:LC(I.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Uf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function DC(n){let e=kC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){je(i===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=function(T){const I=yw(T);return I instanceof Zn&&K0(I)?I.getFilters():[I]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(I=>function(O){return new Tl(xo(O.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(I))}(t.orderBy));let d=null;t.limit&&(d=function(T){let I;return I=typeof T=="object"?T.value:T,nh(I)?null:I}(t.limit));let p=null;t.startAt&&(p=function(T){const I=!!T.before,N=T.values||[];return new Oc(N,I)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const I=!T.before,N=T.values||[];return new Oc(N,I)}(t.endAt)),Jk(e,o,c,a,d,"F",p,y)}function OC(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=xo(t.unaryFilter.field);return pt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=xo(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=xo(t.unaryFilter.field);return pt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=xo(t.unaryFilter.field);return pt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return pt.create(xo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Zn.create(t.compositeFilter.filters.map(i=>yw(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function LC(n){return TC[n]}function VC(n){return IC[n]}function MC(n){return SC[n]}function No(n){return{fieldPath:n.canonicalString()}}function xo(n){return Ot.fromServerFormat(n.fieldPath)}function _w(n){return n instanceof pt?function(t){if(t.op==="=="){if(T_(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NAN"}};if(E_(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(T_(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NOT_NAN"}};if(E_(t.value))return{unaryFilter:{field:No(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:No(t.field),op:VC(t.op),value:t.value}}}(n):n instanceof Zn?function(t){const i=t.getFilters().map(o=>_w(o));return i.length===1?i[0]:{compositeFilter:{op:MC(t.op),filters:i}}}(n):Te()}function UC(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function vw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ci{constructor(e,t,i,o,a=Ie.min(),c=Ie.min(),d=Lt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ci(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class FC{constructor(e){this.ht=e}}function zC(n){const e=DC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Mf(e,e.limit,"L"):e}/**
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
 */class jC{constructor(){this.ln=new BC}addToCollectionParentIndex(e,t){return this.ln.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Li.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Li.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class BC{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Et(Ye.comparator),a=!o.has(i);return this.index[t]=o.add(i),a}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Et(Ye.comparator)).toArray()}}/**
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
 */const V_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(41943040,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
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
 */class $o{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new $o(0)}static Qn(){return new $o(-1)}}/**
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
 */function M_([n,e],[t,i]){const o=be(n,t);return o===0?be(e,i):o}class $C{constructor(e){this.Gn=e,this.buffer=new Et(M_),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();M_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class WC{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Zo(t)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Jo(t)}await this.Yn(3e5)})}}class HC{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return K.resolve(th.oe);const i=new $C(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(V_)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),V_):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,a,c,d,p,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(a=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),Co()<=Pe.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${o} in `+(d-c)+`ms
	Removed ${a} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-v}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:T})))}}function qC(n,e){return new HC(n,e)}/**
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
 */class KC{constructor(){this.changes=new bs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class GC{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class QC{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&dl(i.mutation,o,yn.empty(),wt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Ne()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Ne()){const o=Es();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(a=>{let c=il();return a.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=Es();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Ne()))}populateOverlays(e,t,i){const o=[];return i.forEach(a=>{t.has(a)||o.push(a)}),this.documentOverlayCache.getOverlays(e,o).next(a=>{a.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,o){let a=Qr();const c=hl(),d=function(){return hl()}();return t.forEach((p,y)=>{const v=i.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof Wi)?a=a.insert(y.key,y):v!==void 0?(c.set(y.key,v.mutation.getFieldMask()),dl(v.mutation,y,v.mutation.getFieldMask(),wt.now())):c.set(y.key,yn.empty())}),this.recalculateAndSaveOverlays(e,a).next(p=>(p.forEach((y,v)=>c.set(y,v)),t.forEach((y,v)=>{var T;return d.set(y,new GC(v,(T=c.get(y))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=hl();let o=new rt((c,d)=>c-d),a=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let v=i.get(p)||yn.empty();v=d.applyToLocalView(y,v),i.set(p,v);const T=(o.get(d.batchId)||Ne()).add(p);o=o.insert(d.batchId,T)})}).next(()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,v=p.value,T=nw();v.forEach(I=>{if(!a.has(I)){const N=lw(t.get(I),i.get(I));N!==null&&T.set(I,N),a=a.add(I)}}),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return K.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return me.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):X0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(a=>{const c=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-a.size):K.resolve(Es());let d=-1,p=a;return c.next(y=>K.forEach(y,(v,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),a.get(v)?K.resolve():this.remoteDocumentCache.getEntry(e,v).next(I=>{p=p.insert(v,I)}))).next(()=>this.populateOverlays(e,y,a)).next(()=>this.computeViews(e,p,y,Ne())).next(v=>({batchId:d,changes:tw(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next(i=>{let o=il();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const a=t.collectionGroup;let c=il();return this.indexManager.getCollectionParents(e,a).next(d=>K.forEach(d,p=>{const y=function(T,I){return new ea(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(a));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(v=>{v.forEach((T,I)=>{c=c.insert(T,I)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,a,o))).next(c=>{a.forEach((p,y)=>{const v=y.getKey();c.get(v)===null&&(c=c.insert(v,Wt.newInvalidDocument(v)))});let d=il();return c.forEach((p,y)=>{const v=a.get(p);v!==void 0&&dl(v.mutation,y,yn.empty(),wt.now()),sh(t,y)&&(d=d.insert(p,y))}),d})}}/**
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
 */class YC{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return K.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:yr(o.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:zC(o.bundledQuery),readTime:yr(o.readTime)}}(t)),K.resolve()}}/**
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
 */class XC{constructor(){this.overlays=new rt(me.comparator),this.Er=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Es();return K.forEach(t,o=>this.getOverlay(e,o).next(a=>{a!==null&&i.set(o,a)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,a)=>{this.Tt(e,t,a)}),K.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Er.get(i);return o!==void 0&&(o.forEach(a=>this.overlays=this.overlays.remove(a)),this.Er.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const o=Es(),a=t.length+1,c=new me(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===a&&p.largestBatchId>i&&o.set(p.getKey(),p)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let a=new rt((y,v)=>y-v);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let v=a.get(y.largestBatchId);v===null&&(v=Es(),a=a.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const d=Es(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,v)=>d.set(y,v)),!(d.size()>=o)););return K.resolve(d)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Er.get(o.largestBatchId).delete(i.key);this.Er.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new gC(t,i));let a=this.Er.get(t);a===void 0&&(a=Ne(),this.Er.set(t,a)),this.Er.set(t,a.add(i.key))}}/**
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
 */class JC{constructor(){this.sessionToken=Lt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class Lp{constructor(){this.dr=new Et(kt.Ar),this.Rr=new Et(kt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const i=new kt(e,t);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new kt(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new me(new Ye([])),i=new kt(t,e),o=new kt(t,e+1),a=[];return this.Rr.forEachInRange([i,o],c=>{this.gr(c),a.push(c.key)}),a}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new me(new Ye([])),i=new kt(t,e),o=new kt(t,e+1);let a=Ne();return this.Rr.forEachInRange([i,o],c=>{a=a.add(c.key)}),a}containsKey(e){const t=new kt(e,0),i=this.dr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class kt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return me.comparator(e.key,t.key)||be(e.br,t.br)}static Vr(e,t){return be(e.br,t.br)||me.comparator(e.key,t.key)}}/**
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
 */class ZC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Et(kt.Ar)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const a=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new mC(a,t,i,o);this.mutationQueue.push(c);for(const d of o)this.vr=this.vr.add(new kt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return K.resolve(c)}lookupMutationBatch(e,t){return K.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),a=o<0?0:o;return K.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new kt(t,0),o=new kt(t,Number.POSITIVE_INFINITY),a=[];return this.vr.forEachInRange([i,o],c=>{const d=this.Cr(c.br);a.push(d)}),K.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Et(be);return t.forEach(o=>{const a=new kt(o,0),c=new kt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([a,c],d=>{i=i.add(d.br)})}),K.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let a=i;me.isDocumentKey(a)||(a=a.child(""));const c=new kt(new me(a),0);let d=new Et(be);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.br)),!0)},c),K.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){je(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return K.forEach(t.mutations,o=>{const a=new kt(o.key,t.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,t){const i=new kt(t,0),o=this.vr.firstAfterOrEqual(i);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class eP{constructor(e){this.Nr=e,this.docs=function(){return new rt(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),a=o?o.size:0,c=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():Wt.newInvalidDocument(t))}getEntries(e,t){let i=Qr();return t.forEach(o=>{const a=this.docs.get(o);i=i.insert(o,a?a.document.mutableCopy():Wt.newInvalidDocument(o))}),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let a=Qr();const c=t.path,d=new me(c.child("")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:v}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||xk(Nk(v),i)<=0||(o.has(v.key)||sh(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return K.resolve(a)}getAllFromCollectionGroup(e,t,i,o){Te()}Lr(e,t){return K.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new tP(this)}getSize(e){return K.resolve(this.size)}}class tP extends KC{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),K.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class nP{constructor(e){this.persistence=e,this.Br=new bs(t=>kp(t),Cp),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.kr=0,this.qr=new Lp,this.targetCount=0,this.Qr=$o.qn()}forEachTarget(e,t){return this.Br.forEach((i,o)=>t(o)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),K.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new $o(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Un(t),K.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let o=0;const a=[];return this.Br.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Br.delete(c),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),K.waitFor(a).next(()=>o)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.Br.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach(c=>{a.push(o.markPotentiallyOrphaned(e,c))}),K.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.qr.containsKey(t))}}/**
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
 */class ww{constructor(e,t){this.Kr={},this.overlays={},this.$r=new th(0),this.Ur=!1,this.Ur=!0,this.Wr=new JC,this.referenceDelegate=e(this),this.Gr=new nP(this),this.indexManager=new jC,this.remoteDocumentCache=function(o){return new eP(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new FC(t),this.jr=new YC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new XC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new ZC(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new rP(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(a=>this.referenceDelegate.Jr(o).next(()=>a)).toPromise().then(a=>(o.raiseOnCommittedEvent(),a))}Yr(e,t){return K.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class rP extends Dk{constructor(e){super(),this.currentSequenceNumber=e}}class Vp{constructor(e){this.persistence=e,this.Zr=new Lp,this.Xr=null}static ei(e){return new Vp(e)}get ti(){if(this.Xr)return this.Xr;throw Te()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),K.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(a=>this.ti.add(a.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ti,i=>{const o=me.fromPath(i);return this.ni(e,o).next(a=>{a||t.removeEntry(o,Ie.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return K.or([()=>K.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Uc{constructor(e,t){this.persistence=e,this.ri=new bs(i=>Vk(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=qC(this,t)}static ei(e,t){return new Uc(e,t)}Hr(){}Jr(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return K.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(a=>a?K.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.Lr(e,c=>this.ir(e,c,t).next(d=>{d||(i++,a.removeEntry(c,Ie.min()))})).next(()=>a.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=_c(e.data.value)),t}ir(e,t,i){return K.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return K.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Mp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=Ne(),o=Ne();for(const a of t.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new Mp(e,t.fromCache,i,o)}}/**
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
 */class iP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class sP{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return FI()?8:Ok(Ht())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const a={result:null};return this.Xi(e,t).next(c=>{a.result=c}).next(()=>{if(!a.result)return this.es(e,t,o,i).next(c=>{a.result=c})}).next(()=>{if(a.result)return;const c=new iP;return this.ts(e,t,c).next(d=>{if(a.result=d,this.Hi)return this.ns(e,t,c,d.size)})}).next(()=>a.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(Co()<=Pe.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Po(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),K.resolve()):(Co()<=Pe.DEBUG&&ae("QueryEngine","Query:",Po(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(Co()<=Pe.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Po(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gr(t))):K.resolve())}Xi(e,t){if(A_(t))return K.resolve(null);let i=gr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Mf(t,null,"F"),i=gr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(a=>{const c=Ne(...a);return this.Zi.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,d);return this.ss(t,y,c,p.readTime)?this.Xi(e,Mf(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return A_(t)||o.isEqual(Ie.min())?K.resolve(null):this.Zi.getDocuments(e,i).next(a=>{const c=this.rs(t,a);return this.ss(t,c,i,o)?K.resolve(null):(Co()<=Pe.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Po(t)),this.os(e,c,t,Pk(o,-1)).next(d=>d))})}rs(e,t){let i=new Et(Z0(e));return t.forEach((o,a)=>{sh(e,a)&&(i=i.add(a))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ts(e,t,i){return Co()<=Pe.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Po(t)),this.Zi.getDocumentsMatchingQuery(e,t,Li.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(a=>(t.forEach(c=>{a=a.insert(c.key,c)}),a))}}/**
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
 */class oP{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new rt(be),this.cs=new bs(a=>kp(a),Cp),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QC(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function aP(n,e,t,i){return new oP(n,e,t,i)}async function Ew(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(a=>(o=a,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(a=>{const c=[],d=[];let p=Ne();for(const y of o){c.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}for(const y of a){d.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:c,addedBatchIds:d}))})})}function lP(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),a=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,p,y,v){const T=y.batch,I=T.keys();let N=K.resolve();return I.forEach(O=>{N=N.next(()=>v.getEntry(p,O)).next(j=>{const D=y.docVersions.get(O);je(D!==null),j.version.compareTo(D)<0&&(T.applyToRemoteDocument(j,y),j.isValidDocument()&&(j.setReadTime(y.commitVersion),v.addEntry(j)))})}),N.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,i,e,a).next(()=>a.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Ne();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function Tw(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function uP(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const c=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const d=[];e.targetChanges.forEach((v,T)=>{const I=o.get(T);if(!I)return;d.push(t.Gr.removeMatchingKeys(a,v.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(a,v.addedDocuments,T)));let N=I.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(T)!==null?N=N.withResumeToken(Lt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):v.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(v.resumeToken,i)),o=o.insert(T,N),function(j,D,$){return j.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(I,N,v)&&d.push(t.Gr.updateTargetData(a,N))});let p=Qr(),y=Ne();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))}),d.push(cP(a,c,e.documentUpdates).next(v=>{p=v.Is,y=v.Es})),!i.isEqual(Ie.min())){const v=t.Gr.getLastRemoteSnapshotVersion(a).next(T=>t.Gr.setTargetsMetadata(a,a.currentSequenceNumber,i));d.push(v)}return K.waitFor(d).next(()=>c.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,p,y)).next(()=>p)}).then(a=>(t.us=o,a))}function cP(n,e,t){let i=Ne(),o=Ne();return t.forEach(a=>i=i.add(a)),e.getEntries(n,i).next(a=>{let c=Qr();return t.forEach((d,p)=>{const y=a.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ae("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Is:c,Es:o}})}function hP(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function dP(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(a=>a?(o=a,K.resolve(o)):t.Gr.allocateTargetId(i).next(c=>(o=new Ci(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function Bf(n,e,t){const i=Se(n),o=i.us.get(e),a=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",a,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!Zo(c))throw c;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function U_(n,e,t){const i=Se(n);let o=Ie.min(),a=Ne();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,y,v){const T=Se(p),I=T.cs.get(v);return I!==void 0?K.resolve(T.us.get(I)):T.Gr.getTargetData(y,v)}(i,c,gr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(c,d.targetId).next(p=>{a=p})}).next(()=>i._s.getDocumentsMatchingQuery(c,e,t?o:Ie.min(),t?a:Ne())).next(d=>(fP(i,eC(e),d),{documents:d,ds:a})))}function fP(n,e,t){let i=n.ls.get(e)||Ie.min();t.forEach((o,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)}),n.ls.set(e,i)}class F_{constructor(){this.activeTargetIds=oC()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pP{constructor(){this._o=new F_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new F_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mP{uo(e){}shutdown(){}}/**
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
 */class z_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ac=null;function af(){return ac===null?ac=function(){return 268435456+Math.round(2147483648*Math.random())}():ac++,"0x"+ac.toString(16)}/**
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
 */const gP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class yP{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Bt="WebChannelConnection";class _P extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${a}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${a}`}Oo(t,i,o,a,c){const d=af(),p=this.No(t,i.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(y,a,c),this.Bo(t,p,y,o).then(v=>(ae("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw Fo("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",p,"request:",o),v})}ko(t,i,o,a,c,d){return this.Oo(t,i,o,a,c)}Lo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((a,c)=>t[c]=a),o&&o.headers.forEach((a,c)=>t[c]=a)}No(t,i){const o=gP[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,i,o){const a=af();return new Promise((c,d)=>{const p=new L0;p.setWithCredentials(!0),p.listenOnce(V0.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case yc.NO_ERROR:const v=p.getResponseJson();ae(Bt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),c(v);break;case yc.TIMEOUT:ae(Bt,`RPC '${e}' ${a} timed out`),d(new ue(Q.DEADLINE_EXCEEDED,"Request time out"));break;case yc.HTTP_ERROR:const T=p.getStatus();if(ae(Bt,`RPC '${e}' ${a} failed with status:`,T,"response text:",p.getResponseText()),T>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const N=I==null?void 0:I.error;if(N&&N.status&&N.message){const O=function(D){const $=D.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf($)>=0?$:Q.UNKNOWN}(N.status);d(new ue(O,N.message))}else d(new ue(Q.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new ue(Q.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{ae(Bt,`RPC '${e}' ${a} completed.`)}});const y=JSON.stringify(o);ae(Bt,`RPC '${e}' ${a} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=af(),a=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=F0(),d=U0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Lo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=a.join("");ae(Bt,`Creating RPC '${e}' stream ${o}: ${v}`,p);const T=c.createWebChannel(v,p);let I=!1,N=!1;const O=new yP({Eo:D=>{N?ae(Bt,`Not sending because RPC '${e}' stream ${o} is closed:`,D):(I||(ae(Bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),ae(Bt,`RPC '${e}' stream ${o} sending:`,D),T.send(D))},Ao:()=>T.close()}),j=(D,$,q)=>{D.listen($,Z=>{try{q(Z)}catch(re){setTimeout(()=>{throw re},0)}})};return j(T,rl.EventType.OPEN,()=>{N||(ae(Bt,`RPC '${e}' stream ${o} transport opened.`),O.So())}),j(T,rl.EventType.CLOSE,()=>{N||(N=!0,ae(Bt,`RPC '${e}' stream ${o} transport closed`),O.Do())}),j(T,rl.EventType.ERROR,D=>{N||(N=!0,Fo(Bt,`RPC '${e}' stream ${o} transport errored:`,D),O.Do(new ue(Q.UNAVAILABLE,"The operation could not be completed")))}),j(T,rl.EventType.MESSAGE,D=>{var $;if(!N){const q=D.data[0];je(!!q);const Z=q,re=(Z==null?void 0:Z.error)||(($=Z[0])===null||$===void 0?void 0:$.error);if(re){ae(Bt,`RPC '${e}' stream ${o} received error:`,re);const ge=re.status;let fe=function(A){const P=ft[A];if(P!==void 0)return cw(P)}(ge),x=re.message;fe===void 0&&(fe=Q.INTERNAL,x="Unknown error status: "+ge+" with message "+re.message),N=!0,O.Do(new ue(fe,x)),T.close()}else ae(Bt,`RPC '${e}' stream ${o} received:`,q),O.vo(q)}}),j(d,M0.STAT_EVENT,D=>{D.stat===xf.PROXY?ae(Bt,`RPC '${e}' stream ${o} detected buffering proxy`):D.stat===xf.NOPROXY&&ae(Bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{O.bo()},0),O}}function lf(){return typeof document<"u"?document:null}/**
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
 */function uh(n){return new RC(n,!0)}/**
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
 */class Iw{constructor(e,t,i=1e3,o=1.5,a=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=a,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Sw{constructor(e,t,i,o,a,c,d,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Iw(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Gr(t.toString()),Gr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new ue(Q.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.E_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vP extends Sw{constructor(e,t,i,o,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=CC(this.serializer,e),i=function(a){if(!("targetChange"in a))return Ie.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?yr(c.readTime):Ie.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=jf(this.serializer),t.addTarget=function(a,c){let d;const p=c.target;if(d=Lf(p)?{documents:xC(a,p)}:{query:bC(a,p).ct},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=fw(a,c.resumeToken);const y=Uf(a,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ie.min())>0){d.readTime=Mc(a,c.snapshotVersion.toTimestamp());const y=Uf(a,c.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=OC(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=jf(this.serializer),t.removeTarget=e,this.c_(t)}}class wP extends Sw{constructor(e,t,i,o,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return je(!!e.streamToken),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=NC(e.writeResults,e.commitTime),i=yr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=jf(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>PC(this.serializer,i))};this.c_(t)}}/**
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
 */class EP extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ue(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Oo(e,Ff(t,i),o,a,c)).catch(a=>{throw a.name==="FirebaseError"?(a.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ue(Q.UNKNOWN,a.toString())})}ko(e,t,i,o,a){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.ko(e,Ff(t,i),o,c,d,a)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ue(Q.UNKNOWN,c.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class TP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Gr(t),this.C_=!1):ae("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class IP{constructor(e,t,i,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=a,this.Q_.uo(c=>{i.enqueueAndForget(async()=>{Ds(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.k_.add(4),await Vl(y),y.K_.set("Unknown"),y.k_.delete(4),await ch(y)}(this))})}),this.K_=new TP(i,o)}}async function ch(n){if(Ds(n))for(const e of n.q_)await e(!0)}async function Vl(n){for(const e of n.q_)await e(!1)}function Rw(n,e){const t=Se(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),jp(t)?zp(t):ta(t).s_()&&Fp(t,e))}function Up(n,e){const t=Se(n),i=ta(t);t.B_.delete(e),i.s_()&&Aw(t,e),t.B_.size===0&&(i.s_()?i.a_():Ds(t)&&t.K_.set("Unknown"))}function Fp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ta(n).V_(e)}function Aw(n,e){n.U_.xe(e),ta(n).m_(e)}function zp(n){n.U_=new EC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),ta(n).start(),n.K_.F_()}function jp(n){return Ds(n)&&!ta(n).i_()&&n.B_.size>0}function Ds(n){return Se(n).k_.size===0}function kw(n){n.U_=void 0}async function SP(n){n.K_.set("Online")}async function RP(n){n.B_.forEach((e,t)=>{Fp(n,e)})}async function AP(n,e){kw(n),jp(n)?(n.K_.O_(e),zp(n)):n.K_.set("Unknown")}async function kP(n,e,t){if(n.K_.set("Online"),e instanceof dw&&e.state===2&&e.cause)try{await async function(o,a){const c=a.cause;for(const d of a.targetIds)o.B_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.B_.delete(d),o.U_.removeTarget(d))}(n,e)}catch(i){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Fc(n,i)}else if(e instanceof Ec?n.U_.$e(e):e instanceof hw?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ie.min()))try{const i=await Tw(n.localStore);t.compareTo(i)>=0&&await function(a,c){const d=a.U_.it(c);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const v=a.B_.get(y);v&&a.B_.set(y,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,y)=>{const v=a.B_.get(p);if(!v)return;a.B_.set(p,v.withResumeToken(Lt.EMPTY_BYTE_STRING,v.snapshotVersion)),Aw(a,p);const T=new Ci(v.target,p,y,v.sequenceNumber);Fp(a,T)}),a.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){ae("RemoteStore","Failed to raise snapshot:",i),await Fc(n,i)}}async function Fc(n,e,t){if(!Zo(e))throw e;n.k_.add(1),await Vl(n),n.K_.set("Offline"),t||(t=()=>Tw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await ch(n)})}function Cw(n,e){return e().catch(t=>Fc(n,t,e))}async function hh(n){const e=Se(n),t=Fi(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;CP(e);)try{const o=await hP(e.localStore,i);if(o===null){e.L_.length===0&&t.a_();break}i=o.batchId,PP(e,o)}catch(o){await Fc(e,o)}Pw(e)&&Nw(e)}function CP(n){return Ds(n)&&n.L_.length<10}function PP(n,e){n.L_.push(e);const t=Fi(n);t.s_()&&t.f_&&t.g_(e.mutations)}function Pw(n){return Ds(n)&&!Fi(n).i_()&&n.L_.length>0}function Nw(n){Fi(n).start()}async function NP(n){Fi(n).w_()}async function xP(n){const e=Fi(n);for(const t of n.L_)e.g_(t.mutations)}async function bP(n,e,t){const i=n.L_.shift(),o=bp.from(i,e,t);await Cw(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await hh(n)}async function DP(n,e){e&&Fi(n).f_&&await async function(i,o){if(function(c){return _C(c)&&c!==Q.ABORTED}(o.code)){const a=i.L_.shift();Fi(i).__(),await Cw(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,o)),await hh(i)}}(n,e),Pw(n)&&Nw(n)}async function j_(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const i=Ds(t);t.k_.add(3),await Vl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await ch(t)}async function OP(n,e){const t=Se(n);e?(t.k_.delete(2),await ch(t)):e||(t.k_.add(2),await Vl(t),t.K_.set("Unknown"))}function ta(n){return n.W_||(n.W_=function(t,i,o){const a=Se(t);return a.b_(),new vP(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{Ro:SP.bind(null,n),mo:RP.bind(null,n),po:AP.bind(null,n),R_:kP.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),jp(n)?zp(n):n.K_.set("Unknown")):(await n.W_.stop(),kw(n))})),n.W_}function Fi(n){return n.G_||(n.G_=function(t,i,o){const a=Se(t);return a.b_(),new wP(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:NP.bind(null,n),po:DP.bind(null,n),p_:xP.bind(null,n),y_:bP.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await hh(n)):(await n.G_.stop(),n.L_.length>0&&(ae("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class Bp{constructor(e,t,i,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=a,this.deferred=new Is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,a){const c=Date.now()+i,d=new Bp(e,t,c,o,a);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $p(n,e){if(Gr("AsyncQueue",`${e}: ${n}`),Zo(n))return new ue(Q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Mo{static emptySet(e){return new Mo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||me.comparator(t.key,i.key):(t,i)=>me.comparator(t.key,i.key),this.keyedMap=il(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Mo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class B_{constructor(){this.z_=new rt(me.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Te():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Wo{constructor(e,t,i,o,a,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,a){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Wo(e,t,Mo.emptySet(t),c,i,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ih(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class LP{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class VP{constructor(){this.queries=$_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Se(t),a=o.queries;o.queries=$_(),a.forEach((c,d)=>{for(const p of d.J_)p.onError(i)})})(this,new ue(Q.ABORTED,"Firestore shutting down"))}}function $_(){return new bs(n=>J0(n),ih)}async function MP(n,e){const t=Se(n);let i=3;const o=e.query;let a=t.queries.get(o);a?!a.Y_()&&e.Z_()&&(i=2):(a=new LP,i=e.Z_()?0:1);try{switch(i){case 0:a.H_=await t.onListen(o,!0);break;case 1:a.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=$p(c,`Initialization of query '${Po(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.J_.push(e),e.ea(t.onlineState),a.H_&&e.ta(a.H_)&&Wp(t)}async function UP(n,e){const t=Se(n),i=e.query;let o=3;const a=t.queries.get(i);if(a){const c=a.J_.indexOf(e);c>=0&&(a.J_.splice(c,1),a.J_.length===0?o=e.Z_()?0:1:!a.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function FP(n,e){const t=Se(n);let i=!1;for(const o of e){const a=o.query,c=t.queries.get(a);if(c){for(const d of c.J_)d.ta(o)&&(i=!0);c.H_=o}}i&&Wp(t)}function zP(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const a of o.J_)a.onError(t);i.queries.delete(e)}function Wp(n){n.X_.forEach(e=>{e.next()})}var $f,W_;(W_=$f||($f={})).na="default",W_.Cache="cache";class jP{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Wo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==$f.Cache}}/**
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
 */class xw{constructor(e){this.key=e}}class bw{constructor(e){this.key=e}}class BP{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ne(),this.mutatedKeys=Ne(),this.Va=Z0(e),this.ma=new Mo(this.Va)}get fa(){return this.da}ga(e,t){const i=t?t.pa:new B_,o=t?t.ma:this.ma;let a=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,T)=>{const I=o.get(v),N=sh(this.query,T)?T:null,O=!!I&&this.mutatedKeys.has(I.key),j=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let D=!1;I&&N?I.data.isEqual(N.data)?O!==j&&(i.track({type:3,doc:N}),D=!0):this.ya(I,N)||(i.track({type:2,doc:N}),D=!0,(p&&this.Va(N,p)>0||y&&this.Va(N,y)<0)&&(d=!0)):!I&&N?(i.track({type:0,doc:N}),D=!0):I&&!N&&(i.track({type:1,doc:I}),D=!0,(p||y)&&(d=!0)),D&&(N?(c=c.add(N),a=j?a.add(v):a.delete(v)):(c=c.delete(v),a=a.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),a=a.delete(v.key),i.track({type:1,doc:v})}return{ma:c,pa:i,ss:d,mutatedKeys:a}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const a=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const c=e.pa.j_();c.sort((v,T)=>function(N,O){const j=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return j(N)-j(O)}(v.type,T.type)||this.Va(v.doc,T.doc)),this.wa(i),o=o!=null&&o;const d=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,c.length!==0||y?{snapshot:new Wo(this.query,e.ma,a,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new B_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ne(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new bw(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new xw(i))}),t}va(e){this.da=e.ds,this.Ra=Ne();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Wo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class $P{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class WP{constructor(e){this.key=e,this.Fa=!1}}class HP{constructor(e,t,i,o,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.Ma={},this.xa=new bs(d=>J0(d),ih),this.Oa=new Map,this.Na=new Set,this.La=new rt(me.comparator),this.Ba=new Map,this.ka=new Lp,this.qa={},this.Qa=new Map,this.Ka=$o.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function qP(n,e,t=!0){const i=Uw(n);let o;const a=i.xa.get(e);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.Ca()):o=await Dw(i,e,t,!0),o}async function KP(n,e){const t=Uw(n);await Dw(t,e,!0,!1)}async function Dw(n,e,t,i){const o=await dP(n.localStore,gr(e)),a=o.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let d;return i&&(d=await GP(n,e,a,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&Rw(n.remoteStore,o),d}async function GP(n,e,t,i,o){n.Ua=(T,I,N)=>async function(j,D,$,q){let Z=D.view.ga($);Z.ss&&(Z=await U_(j.localStore,D.query,!1).then(({documents:x})=>D.view.ga(x,Z)));const re=q&&q.targetChanges.get(D.targetId),ge=q&&q.targetMismatches.get(D.targetId)!=null,fe=D.view.applyChanges(Z,j.isPrimaryClient,re,ge);return q_(j,D.targetId,fe.ba),fe.snapshot}(n,T,I,N);const a=await U_(n.localStore,e,!0),c=new BP(e,a.ds),d=c.ga(a.documents),p=Ll.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);q_(n,t,y.ba);const v=new $P(e,t,c);return n.xa.set(e,v),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function QP(n,e,t){const i=Se(n),o=i.xa.get(e),a=i.Oa.get(o.targetId);if(a.length>1)return i.Oa.set(o.targetId,a.filter(c=>!ih(c,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Bf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Up(i.remoteStore,o.targetId),Wf(i,o.targetId)}).catch(Jo)):(Wf(i,o.targetId),await Bf(i.localStore,o.targetId,!0))}async function YP(n,e){const t=Se(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Up(t.remoteStore,i.targetId))}async function XP(n,e,t){const i=i2(n);try{const o=await function(c,d){const p=Se(c),y=wt.now(),v=d.reduce((N,O)=>N.add(O.key),Ne());let T,I;return p.persistence.runTransaction("Locally write mutations","readwrite",N=>{let O=Qr(),j=Ne();return p.hs.getEntries(N,v).next(D=>{O=D,O.forEach(($,q)=>{q.isValidDocument()||(j=j.add($))})}).next(()=>p.localDocuments.getOverlayedDocuments(N,O)).next(D=>{T=D;const $=[];for(const q of d){const Z=fC(q,T.get(q.key).overlayedDocument);Z!=null&&$.push(new Wi(q.key,Z,W0(Z.value.mapValue),Yn.exists(!0)))}return p.mutationQueue.addMutationBatch(N,y,$,d)}).next(D=>{I=D;const $=D.applyToLocalDocumentSet(T,j);return p.documentOverlayCache.saveOverlays(N,D.batchId,$)})}).then(()=>({batchId:I.batchId,changes:tw(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,d,p){let y=c.qa[c.currentUser.toKey()];y||(y=new rt(be)),y=y.insert(d,p),c.qa[c.currentUser.toKey()]=y}(i,o.batchId,t),await Ml(i,o.changes),await hh(i.remoteStore)}catch(o){const a=$p(o,"Failed to persist write");t.reject(a)}}async function Ow(n,e){const t=Se(n);try{const i=await uP(t.localStore,e);e.targetChanges.forEach((o,a)=>{const c=t.Ba.get(a);c&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.Fa=!0:o.modifiedDocuments.size>0?je(c.Fa):o.removedDocuments.size>0&&(je(c.Fa),c.Fa=!1))}),await Ml(t,i,e)}catch(i){await Jo(i)}}function H_(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((a,c)=>{const d=c.view.ea(e);d.snapshot&&o.push(d.snapshot)}),function(c,d){const p=Se(c);p.onlineState=d;let y=!1;p.queries.forEach((v,T)=>{for(const I of T.J_)I.ea(d)&&(y=!0)}),y&&Wp(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function JP(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ba.get(e),a=o&&o.key;if(a){let c=new rt(me.comparator);c=c.insert(a,Wt.newNoDocument(a,Ie.min()));const d=Ne().add(a),p=new lh(Ie.min(),new Map,new rt(be),c,d);await Ow(i,p),i.La=i.La.remove(a),i.Ba.delete(e),Hp(i)}else await Bf(i.localStore,e,!1).then(()=>Wf(i,e,t)).catch(Jo)}async function ZP(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await lP(t.localStore,e);Vw(t,i,null),Lw(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Ml(t,o)}catch(o){await Jo(o)}}async function e2(n,e,t){const i=Se(n);try{const o=await function(c,d){const p=Se(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let v;return p.mutationQueue.lookupMutationBatch(y,d).next(T=>(je(T!==null),v=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v)).next(()=>p.localDocuments.getDocuments(y,v))})}(i.localStore,e);Vw(i,e,t),Lw(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Ml(i,o)}catch(o){await Jo(o)}}function Lw(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Vw(n,e,t){const i=Se(n);let o=i.qa[i.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function Wf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||Mw(n,i)})}function Mw(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(Up(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),Hp(n))}function q_(n,e,t){for(const i of t)i instanceof xw?(n.ka.addReference(i.key,e),t2(n,i)):i instanceof bw?(ae("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||Mw(n,i.key)):Te()}function t2(n,e){const t=e.key,i=t.path.canonicalString();n.La.get(t)||n.Na.has(i)||(ae("SyncEngine","New document in limbo: "+t),n.Na.add(i),Hp(n))}function Hp(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new me(Ye.fromString(e)),i=n.Ka.next();n.Ba.set(i,new WP(t)),n.La=n.La.insert(t,i),Rw(n.remoteStore,new Ci(gr(Pp(t.path)),i,"TargetPurposeLimboResolution",th.oe))}}async function Ml(n,e,t){const i=Se(n),o=[],a=[],c=[];i.xa.isEmpty()||(i.xa.forEach((d,p)=>{c.push(i.Ua(p,e,t).then(y=>{var v;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Mp.zi(p.targetId,y);a.push(T)}}))}),await Promise.all(c),i.Ma.R_(o),await async function(p,y){const v=Se(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>K.forEach(y,I=>K.forEach(I.Wi,N=>v.persistence.referenceDelegate.addReference(T,I.targetId,N)).next(()=>K.forEach(I.Gi,N=>v.persistence.referenceDelegate.removeReference(T,I.targetId,N)))))}catch(T){if(!Zo(T))throw T;ae("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const N=v.us.get(I),O=N.snapshotVersion,j=N.withLastLimboFreeSnapshotVersion(O);v.us=v.us.insert(I,j)}}}(i.localStore,a))}async function n2(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const i=await Ew(t.localStore,e);t.currentUser=e,function(a,c){a.Qa.forEach(d=>{d.forEach(p=>{p.reject(new ue(Q.CANCELLED,c))})}),a.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ml(t,i.Ts)}}function r2(n,e){const t=Se(n),i=t.Ba.get(e);if(i&&i.Fa)return Ne().add(i.key);{let o=Ne();const a=t.Oa.get(e);if(!a)return o;for(const c of a){const d=t.xa.get(c);o=o.unionWith(d.view.fa)}return o}}function Uw(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ow.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=r2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JP.bind(null,e),e.Ma.R_=FP.bind(null,e.eventManager),e.Ma.Wa=zP.bind(null,e.eventManager),e}function i2(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=e2.bind(null,e),e}class zc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uh(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return aP(this.persistence,new sP,e.initialUser,this.serializer)}ja(e){return new ww(Vp.ei,this.serializer)}za(e){return new pP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zc.provider={build:()=>new zc};class s2 extends zc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){je(this.persistence.referenceDelegate instanceof Uc);const i=this.persistence.referenceDelegate.garbageCollector;return new WC(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new ww(i=>Uc.ei(i,t),this.serializer)}}class Hf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>H_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=n2.bind(null,this.syncEngine),await OP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new VP}()}createDatastore(e){const t=uh(e.databaseInfo.databaseId),i=function(a){return new _P(a)}(e.databaseInfo);return function(a,c,d,p){return new EP(a,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,a,c,d){return new IP(i,o,a,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>H_(this.syncEngine,t,0),function(){return z_.p()?new z_:new mP}())}createSyncEngine(e,t){return function(o,a,c,d,p,y,v){const T=new HP(o,a,c,d,p,y);return v&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const a=Se(o);ae("RemoteStore","RemoteStore shutting down."),a.k_.add(5),await Vl(a),a.Q_.shutdown(),a.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Hf.provider={build:()=>new Hf};/**
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
 */class o2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Gr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class a2{constructor(e,t,i,o,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=$t.UNAUTHENTICATED,this.clientId=j0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,async c=>{ae("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(ae("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=$p(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function uf(n,e){n.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await Ew(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function K_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await l2(n);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>j_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>j_(e.remoteStore,o)),n._onlineComponents=e}async function l2(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await uf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Q.FAILED_PRECONDITION||o.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Fo("Error using user provided cache. Falling back to memory cache: "+t),await uf(n,new zc)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await uf(n,new s2(void 0));return n._offlineComponents}async function Fw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await K_(n,n._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await K_(n,new Hf))),n._onlineComponents}function u2(n){return Fw(n).then(e=>e.syncEngine)}async function G_(n){const e=await Fw(n),t=e.eventManager;return t.onListen=qP.bind(null,e.syncEngine),t.onUnlisten=QP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=KP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=YP.bind(null,e.syncEngine),t}/**
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
 */function zw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Q_=new Map;/**
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
 */function jw(n,e,t){if(!t)throw new ue(Q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function c2(n,e,t,i){if(e===!0&&i===!0)throw new ue(Q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Y_(n){if(!me.isDocumentKey(n))throw new ue(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function X_(n){if(me.isDocumentKey(n))throw new ue(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function dh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function xi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=dh(n);throw new ue(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class J_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ue(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}c2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ue(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ue(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ue(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new J_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new J_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new wk;switch(i.type){case"firstParty":return new Sk(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ue(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Q_.get(t);i&&(ae("ComponentProvider","Removing Datastore"),Q_.delete(t),i.terminate())}(this),Promise.resolve()}}function h2(n,e,t,i={}){var o;const a=(n=xi(n,fh))._getSettings(),c=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==c&&Fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:c,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=$t.MOCK_USER;else{d=Gv(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new ue(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new $t(y)}n._authCredentials=new Ek(new z0(d,p))}}/**
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
 */class Os{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Os(this.firestore,e,this._query)}}class un{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new un(this.firestore,e,this._key)}}class bi extends Os{constructor(e,t,i){super(e,t,Pp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new un(this.firestore,null,new me(e))}withConverter(e){return new bi(this.firestore,e,this._path)}}function Bw(n,e,...t){if(n=et(n),jw("collection","path",e),n instanceof fh){const i=Ye.fromString(e,...t);return X_(i),new bi(n,null,i)}{if(!(n instanceof un||n instanceof bi))throw new ue(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return X_(i),new bi(n.firestore,null,i)}}function qf(n,e,...t){if(n=et(n),arguments.length===1&&(e=j0.newId()),jw("doc","path",e),n instanceof fh){const i=Ye.fromString(e,...t);return Y_(i),new un(n,null,new me(i))}{if(!(n instanceof un||n instanceof bi))throw new ue(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ye.fromString(e,...t));return Y_(i),new un(n.firestore,n instanceof bi?n.converter:null,new me(i))}}/**
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
 */class Z_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Iw(this,"async_queue_retry"),this.fu=()=>{const i=lf();i&&ae("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=lf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=lf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Is;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Zo(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Gr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Bp.createAndSchedule(this,e,t,i,a=>this.Su(a));return this.du.push(o),o}pu(){this.Au&&Te()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function ev(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const a of i)if(a in o&&typeof o[a]=="function")return!0;return!1}(n,["next","error","complete"])}class Ho extends fh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Z_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Z_(e),this._firestoreClient=void 0,await e}}}function d2(n,e){const t=typeof n=="object"?n:dp(),i=typeof n=="string"?n:"(default)",o=Xc(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const a=Hv("firestore");a&&h2(o,...a)}return o}function $w(n){if(n._terminated)throw new ue(Q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||f2(n),n._firestoreClient}function f2(n){var e,t,i;const o=n._freezeSettings(),a=function(d,p,y,v){return new Fk(d,p,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,zw(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new a2(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class qo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qo(Lt.fromBase64String(e))}catch(t){throw new ue(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qo(Lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ph{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qp{constructor(e){this._methodName=e}}/**
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
 */class Kp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */class Gp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==o[a])return!1;return!0}(this._values,e._values)}}/**
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
 */const p2=/^__.*__$/;class m2{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Wi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ol(e,this.data,t,this.fieldTransforms)}}class Ww{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Wi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class Qp{constructor(e,t,i,o,a,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,a===void 0&&this.Fu(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Qp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Lu(e),o}Bu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return jc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Hw(this.Mu)&&p2.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class g2{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||uh(e)}$u(e,t,i,o=!1){return new Qp({Mu:e,methodName:t,Ku:i,path:Ot.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yp(n){const e=n._freezeSettings(),t=uh(n._databaseId);return new g2(n._databaseId,!!e.ignoreUndefinedProperties,t)}function y2(n,e,t,i,o,a={}){const c=n.$u(a.merge||a.mergeFields?2:0,e,t,o);Xp("Data must be an object, but it was:",c,i);const d=qw(i,c);let p,y;if(a.merge)p=new yn(c.fieldMask),y=c.fieldTransforms;else if(a.mergeFields){const v=[];for(const T of a.mergeFields){const I=Kf(e,T,t);if(!c.contains(I))throw new ue(Q.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Gw(v,I)||v.push(I)}p=new yn(v),y=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=c.fieldTransforms;return new m2(new ln(d),p,y)}class mh extends qp{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mh}}function _2(n,e,t,i){const o=n.$u(1,e,t);Xp("Data must be an object, but it was:",o,i);const a=[],c=ln.empty();$i(i,(p,y)=>{const v=Jp(e,p,t);y=et(y);const T=o.Bu(v);if(y instanceof mh)a.push(v);else{const I=Ul(y,T);I!=null&&(a.push(v),c.set(v,I))}});const d=new yn(a);return new Ww(c,d,o.fieldTransforms)}function v2(n,e,t,i,o,a){const c=n.$u(1,e,t),d=[Kf(e,i,t)],p=[o];if(a.length%2!=0)throw new ue(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<a.length;I+=2)d.push(Kf(e,a[I])),p.push(a[I+1]);const y=[],v=ln.empty();for(let I=d.length-1;I>=0;--I)if(!Gw(y,d[I])){const N=d[I];let O=p[I];O=et(O);const j=c.Bu(N);if(O instanceof mh)y.push(N);else{const D=Ul(O,j);D!=null&&(y.push(N),v.set(N,D))}}const T=new yn(y);return new Ww(v,T,c.fieldTransforms)}function w2(n,e,t,i=!1){return Ul(t,n.$u(i?4:3,e))}function Ul(n,e){if(Kw(n=et(n)))return Xp("Unsupported field value:",e,n),qw(n,e);if(n instanceof qp)return function(i,o){if(!Hw(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(o);a&&o.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const a=[];let c=0;for(const d of i){let p=Ul(d,o.ku(c));p==null&&(p={nullValue:"NULL_VALUE"}),a.push(p),c++}return{arrayValue:{values:a}}}(n,e)}return function(i,o){if((i=et(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return aC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=wt.fromDate(i);return{timestampValue:Mc(o.serializer,a)}}if(i instanceof wt){const a=new wt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Mc(o.serializer,a)}}if(i instanceof Kp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof qo)return{bytesValue:fw(o.serializer,i._byteString)};if(i instanceof un){const a=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(a))throw o.qu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Op(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Gp)return function(c,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(p=>{if(typeof p!="number")throw d.qu("VectorValues must only contain numeric values.");return Np(d.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${dh(i)}`)}(n,e)}function qw(n,e){const t={};return B0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$i(n,(i,o)=>{const a=Ul(o,e.Ou(i));a!=null&&(t[i]=a)}),{mapValue:{fields:t}}}function Kw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof wt||n instanceof Kp||n instanceof qo||n instanceof un||n instanceof qp||n instanceof Gp)}function Xp(n,e,t){if(!Kw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=dh(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function Kf(n,e,t){if((e=et(e))instanceof ph)return e._internalPath;if(typeof e=="string")return Jp(n,e);throw jc("Field path arguments must be of type string or ",n,!1,void 0,t)}const E2=new RegExp("[~\\*/\\[\\]]");function Jp(n,e,t){if(e.search(E2)>=0)throw jc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ph(...e.split("."))._internalPath}catch{throw jc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function jc(n,e,t,i,o){const a=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(a||c)&&(p+=" (found",a&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new ue(Q.INVALID_ARGUMENT,d+n+p)}function Gw(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Qw{constructor(e,t,i,o,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new un(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new T2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class T2 extends Qw{data(){return super.data()}}function Zp(n,e){return typeof e=="string"?Jp(n,e):e instanceof ph?e._internalPath:e._delegate._internalPath}/**
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
 */function I2(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class em{}class Yw extends em{}function S2(n,e,...t){let i=[];e instanceof em&&i.push(e),i=i.concat(t),function(a){const c=a.filter(p=>p instanceof nm).length,d=a.filter(p=>p instanceof tm).length;if(c>1||c>0&&d>0)throw new ue(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class tm extends Yw{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new tm(e,t,i)}_apply(e){const t=this._parse(e);return Xw(e._query,t),new Os(e.firestore,e.converter,Vf(e._query,t))}_parse(e){const t=Yp(e.firestore);return function(a,c,d,p,y,v,T){let I;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ue(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){nv(T,v);const N=[];for(const O of T)N.push(tv(p,a,O));I={arrayValue:{values:N}}}else I=tv(p,a,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||nv(T,v),I=w2(d,c,T,v==="in"||v==="not-in");return pt.create(y,v,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class nm extends em{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new nm(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Zn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,a){let c=o;const d=a.getFlattenedFilters();for(const p of d)Xw(c,p),c=Vf(c,p)}(e._query,t),new Os(e.firestore,e.converter,Vf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class rm extends Yw{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new rm(e,t)}_apply(e){const t=function(o,a,c){if(o.startAt!==null)throw new ue(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ue(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Tl(a,c)}(e._query,this._field,this._direction);return new Os(e.firestore,e.converter,function(o,a){const c=o.explicitOrderBy.concat([a]);return new ea(o.path,o.collectionGroup,c,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function R2(n,e="asc"){const t=e,i=Zp("orderBy",n);return rm._create(i,t)}function tv(n,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new ue(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!X0(e)&&t.indexOf("/")!==-1)throw new ue(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ye.fromString(t));if(!me.isDocumentKey(i))throw new ue(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return w_(n,new me(i))}if(t instanceof un)return w_(n,t._key);throw new ue(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dh(t)}.`)}function nv(n,e){if(!Array.isArray(n)||n.length===0)throw new ue(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xw(n,e){const t=function(o,a){for(const c of o)for(const d of c.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ue(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class A2{convertValue(e,t="none"){switch(Ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return $i(e,(o,a)=>{i[o]=this.convertValue(a,t)}),i}convertVectorValue(e){var t,i,o;const a=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>ct(c.doubleValue));return new Gp(a)}convertGeoPoint(e){return new Kp(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=rh(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(vl(e));default:return null}}convertTimestamp(e){const t=Vi(e);return new wt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ye.fromString(e);je(vw(i));const o=new wl(i.get(1),i.get(3)),a=new me(i.popFirst(5));return o.isEqual(t)||Gr(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function k2(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
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
 */class ol{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jw extends Qw{constructor(e,t,i,o,a,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Tc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Zp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Tc extends Jw{data(e={}){return super.data(e)}}class C2{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new ol(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Tc(this._firestore,this._userDataWriter,i.key,i,new ol(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,a){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>{const p=new Tc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new ol(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const p=new Tc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new ol(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:P2(d.type),doc:p,oldIndex:y,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function P2(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class Zw extends A2{constructor(e){super(),this.firestore=e}convertBytes(e){return new qo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new un(this.firestore,null,t)}}function N2(n,e,t,...i){n=xi(n,un);const o=xi(n.firestore,Ho),a=Yp(o);let c;return c=typeof(e=et(e))=="string"||e instanceof ph?v2(a,"updateDoc",n._key,e,t,i):_2(a,"updateDoc",n._key,e),im(o,[c.toMutation(n._key,Yn.exists(!0))])}function x2(n){return im(xi(n.firestore,Ho),[new xp(n._key,Yn.none())])}function b2(n,e){const t=xi(n.firestore,Ho),i=qf(n),o=k2(n.converter,e);return im(t,[y2(Yp(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Yn.exists(!1))]).then(()=>i)}function D2(n,...e){var t,i,o;n=et(n);let a={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||ev(e[c])||(a=e[c],c++);const d={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(ev(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[c+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let p,y,v;if(n instanceof un)y=xi(n.firestore,Ho),v=Pp(n._key.path),p={next:T=>{e[c]&&e[c](O2(y,n,T))},error:e[c+1],complete:e[c+2]};else{const T=xi(n,Os);y=xi(T.firestore,Ho),v=T._query;const I=new Zw(y);p={next:N=>{e[c]&&e[c](new C2(y,I,T,N))},error:e[c+1],complete:e[c+2]},I2(n._query)}return function(I,N,O,j){const D=new o2(j),$=new jP(N,D,O);return I.asyncQueue.enqueueAndForget(async()=>MP(await G_(I),$)),()=>{D.eu(),I.asyncQueue.enqueueAndForget(async()=>UP(await G_(I),$))}}($w(y),v,d,p)}function im(n,e){return function(i,o){const a=new Is;return i.asyncQueue.enqueueAndForget(async()=>XP(await u2(i),o,a)),a.promise}($w(n),e)}function O2(n,e,t){const i=t.docs.get(e._key),o=new Zw(n);return new Jw(n,o,e._key,i,new ol(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Xo=o})(xs),Rs(new Oi("firestore",(i,{instanceIdentifier:o,options:a})=>{const c=i.getProvider("app").getImmediate(),d=new Ho(new Tk(i.getProvider("auth-internal")),new Ak(i.getProvider("app-check-internal")),function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ue(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wl(y.options.projectId,v)}(c,o),c);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),pr(p_,"4.7.5",e),pr(p_,"4.7.5","esm2017")})();/**
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
 */const eE="firebasestorage.googleapis.com",tE="storageBucket",L2=2*60*1e3,V2=10*60*1e3;/**
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
 */class ot extends wr{constructor(e,t,i=0){super(cf(e),`Firebase Storage: ${t} (${cf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ot.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return cf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var st;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(st||(st={}));function cf(n){return"storage/"+n}function sm(){const n="An unknown error occurred, please check the error payload for server response.";return new ot(st.UNKNOWN,n)}function M2(n){return new ot(st.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function U2(n){return new ot(st.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function F2(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ot(st.UNAUTHENTICATED,n)}function z2(){return new ot(st.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function j2(n){return new ot(st.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function B2(){return new ot(st.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $2(){return new ot(st.CANCELED,"User canceled the upload/download.")}function W2(n){return new ot(st.INVALID_URL,"Invalid URL '"+n+"'.")}function H2(n){return new ot(st.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function q2(){return new ot(st.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+tE+"' property when initializing the app?")}function K2(){return new ot(st.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function G2(){return new ot(st.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Q2(n){return new ot(st.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Gf(n){return new ot(st.INVALID_ARGUMENT,n)}function nE(){return new ot(st.APP_DELETED,"The Firebase app was deleted.")}function Y2(n){return new ot(st.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function fl(n,e){return new ot(st.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Za(n){throw new ot(st.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class _n{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=_n.makeFromUrl(e,t)}catch{return new _n(e,"")}if(i.path==="")return i;throw H2(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function a(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+o+c,"i"),p={bucket:1,path:3};function y(re){re.path_=decodeURIComponent(re.path)}const v="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",N=new RegExp(`^https?://${T}/${v}/b/${o}/o${I}`,"i"),O={bucket:1,path:3},j=t===eE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",$=new RegExp(`^https?://${j}/${o}/${D}`,"i"),Z=[{regex:d,indices:p,postModify:a},{regex:N,indices:O,postModify:y},{regex:$,indices:{bucket:1,path:2},postModify:y}];for(let re=0;re<Z.length;re++){const ge=Z[re],fe=ge.regex.exec(e);if(fe){const x=fe[ge.indices.bucket];let S=fe[ge.indices.path];S||(S=""),i=new _n(x,S),ge.postModify(i);break}}if(i==null)throw W2(e);return i}}class X2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function J2(n,e,t){let i=1,o=null,a=null,c=!1,d=0;function p(){return d===2}let y=!1;function v(...D){y||(y=!0,e.apply(null,D))}function T(D){o=setTimeout(()=>{o=null,n(N,p())},D)}function I(){a&&clearTimeout(a)}function N(D,...$){if(y){I();return}if(D){I(),v.call(null,D,...$);return}if(p()||c){I(),v.call(null,D,...$);return}i<64&&(i*=2);let Z;d===1?(d=2,Z=0):Z=(i+Math.random())*1e3,T(Z)}let O=!1;function j(D){O||(O=!0,I(),!y&&(o!==null?(D||(d=2),clearTimeout(o),T(0)):D||(d=1)))}return T(0),a=setTimeout(()=>{c=!0,j(!0)},t),j}function Z2(n){n(!1)}/**
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
 */function eN(n){return n!==void 0}function tN(n){return typeof n=="object"&&!Array.isArray(n)}function om(n){return typeof n=="string"||n instanceof String}function rv(n){return am()&&n instanceof Blob}function am(){return typeof Blob<"u"}function iv(n,e,t,i){if(i<e)throw Gf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Gf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function gh(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function rE(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Ss;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ss||(Ss={}));/**
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
 */function nN(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
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
 */class rN{constructor(e,t,i,o,a,c,d,p,y,v,T,I=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=T,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,O)=>{this.resolve_=N,this.reject_=O,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new lc(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=d=>{const p=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const d=a.getErrorCode()===Ss.NO_ERROR,p=a.getStatus();if(!d||nN(p,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===Ss.ABORT;i(!1,new lc(!1,null,v));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new lc(y,a))})},t=(i,o)=>{const a=this.resolve_,c=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());eN(p)?a(p):a()}catch(p){c(p)}else if(d!==null){const p=sm();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(o.canceled){const p=this.appDelete_?nE():$2();c(p)}else{const p=B2();c(p)}};this.canceled_?t(!1,new lc(!1,null,!0)):this.backoffId_=J2(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Z2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class lc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function iN(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function sN(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oN(n,e){e&&(n["X-Firebase-GMPID"]=e)}function aN(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function lN(n,e,t,i,o,a,c=!0){const d=rE(n.urlParams),p=n.url+d,y=Object.assign({},n.headers);return oN(y,e),iN(y,t),sN(y,a),aN(y,i),new rN(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
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
 */function uN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function cN(...n){const e=uN();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(am())return new Blob(n);throw new ot(st.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hN(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function dN(n){if(typeof atob>"u")throw Q2("base-64");return atob(n)}/**
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
 */const Gn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hf{constructor(e,t){this.data=e,this.contentType=t||null}}function iE(n,e){switch(n){case Gn.RAW:return new hf(sE(e));case Gn.BASE64:case Gn.BASE64URL:return new hf(oE(n,e));case Gn.DATA_URL:return new hf(pN(e),mN(e))}throw sm()}function sE(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=i,c=n.charCodeAt(++t);i=65536|(a&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function fN(n){let e;try{e=decodeURIComponent(n)}catch{throw fl(Gn.DATA_URL,"Malformed data URL.")}return sE(e)}function oE(n,e){switch(n){case Gn.BASE64:{const o=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(o||a)throw fl(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case Gn.BASE64URL:{const o=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(o||a)throw fl(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=dN(e)}catch(o){throw o.message.includes("polyfill")?o:fl(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class aE{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw fl(Gn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=gN(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function pN(n){const e=new aE(n);return e.base64?oE(Gn.BASE64,e.rest):fN(e.rest)}function mN(n){return new aE(n).contentType}function gN(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class ki{constructor(e,t){let i=0,o="";rv(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(rv(this.data_)){const i=this.data_,o=hN(i,e,t);return o===null?null:new ki(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new ki(i,!0)}}static getBlob(...e){if(am()){const t=e.map(i=>i instanceof ki?i.data_:i);return new ki(cN.apply(null,t))}else{const t=e.map(c=>om(c)?iE(Gn.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const o=new Uint8Array(i);let a=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)o[a++]=c[d]}),new ki(o,!0)}}uploadData(){return this.data_}}/**
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
 */function lE(n){let e;try{e=JSON.parse(n)}catch{return null}return tN(e)?e:null}/**
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
 */function yN(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function _N(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function uE(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function vN(n,e){return e}class Yt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||vN}}let uc=null;function wN(n){return!om(n)||n.length<2?n:uE(n)}function cE(){if(uc)return uc;const n=[];n.push(new Yt("bucket")),n.push(new Yt("generation")),n.push(new Yt("metageneration")),n.push(new Yt("name","fullPath",!0));function e(a,c){return wN(c)}const t=new Yt("name");t.xform=e,n.push(t);function i(a,c){return c!==void 0?Number(c):c}const o=new Yt("size");return o.xform=i,n.push(o),n.push(new Yt("timeCreated")),n.push(new Yt("updated")),n.push(new Yt("md5Hash",null,!0)),n.push(new Yt("cacheControl",null,!0)),n.push(new Yt("contentDisposition",null,!0)),n.push(new Yt("contentEncoding",null,!0)),n.push(new Yt("contentLanguage",null,!0)),n.push(new Yt("contentType",null,!0)),n.push(new Yt("metadata","customMetadata",!0)),uc=n,uc}function EN(n,e){function t(){const i=n.bucket,o=n.fullPath,a=new _n(i,o);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function TN(n,e,t){const i={};i.type="file";const o=t.length;for(let a=0;a<o;a++){const c=t[a];i[c.local]=c.xform(i,e[c.server])}return EN(i,n),i}function hE(n,e,t){const i=lE(e);return i===null?null:TN(n,i,t)}function IN(n,e,t,i){const o=lE(e);if(o===null||!om(o.downloadTokens))return null;const a=o.downloadTokens;if(a.length===0)return null;const c=encodeURIComponent;return a.split(",").map(y=>{const v=n.bucket,T=n.fullPath,I="/b/"+c(v)+"/o/"+c(T),N=gh(I,t,i),O=rE({alt:"media",token:y});return N+O})[0]}function SN(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const a=e[o];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class lm{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function dE(n){if(!n)throw sm()}function RN(n,e){function t(i,o){const a=hE(n,o,e);return dE(a!==null),a}return t}function AN(n,e){function t(i,o){const a=hE(n,o,e);return dE(a!==null),IN(a,o,n.host,n._protocol)}return t}function fE(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=z2():o=F2():t.getStatus()===402?o=U2(n.bucket):t.getStatus()===403?o=j2(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function pE(n){const e=fE(n);function t(i,o){let a=e(i,o);return i.getStatus()===404&&(a=M2(n.path)),a.serverResponse=o.serverResponse,a}return t}function kN(n,e,t){const i=e.fullServerUrl(),o=gh(i,n.host,n._protocol),a="GET",c=n.maxOperationRetryTime,d=new lm(o,a,AN(n,t),c);return d.errorHandler=pE(e),d}function CN(n,e){const t=e.fullServerUrl(),i=gh(t,n.host,n._protocol),o="DELETE",a=n.maxOperationRetryTime;function c(p,y){}const d=new lm(i,o,c,a);return d.successCodes=[200,204],d.errorHandler=pE(e),d}function PN(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function NN(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=PN(null,e)),i}function xN(n,e,t,i,o){const a=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let Z="";for(let re=0;re<2;re++)Z=Z+Math.random().toString().slice(2);return Z}const p=d();c["Content-Type"]="multipart/related; boundary="+p;const y=NN(e,i,o),v=SN(y,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,I=`\r
--`+p+"--",N=ki.getBlob(T,i,I);if(N===null)throw K2();const O={name:y.fullPath},j=gh(a,n.host,n._protocol),D="POST",$=n.maxUploadRetryTime,q=new lm(j,D,RN(n,t),$);return q.urlParams=O,q.headers=c,q.body=N.uploadData(),q.errorHandler=fE(e),q}class bN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ss.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ss.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ss.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw Za("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Za("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Za("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Za("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Za("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class DN extends bN{initXhr(){this.xhr_.responseType="text"}}function um(){return new DN}/**
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
 */class Ps{constructor(e,t){this._service=e,t instanceof _n?this._location=t:this._location=_n.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ps(e,t)}get root(){const e=new _n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return uE(this._location.path)}get storage(){return this._service}get parent(){const e=yN(this._location.path);if(e===null)return null;const t=new _n(this._location.bucket,e);return new Ps(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Y2(e)}}function ON(n,e,t){n._throwIfRoot("uploadBytes");const i=xN(n.storage,n._location,cE(),new ki(e,!0),t);return n.storage.makeRequestWithTokens(i,um).then(o=>({metadata:o,ref:n}))}function LN(n,e,t=Gn.RAW,i){n._throwIfRoot("uploadString");const o=iE(t,e),a=Object.assign({},i);return a.contentType==null&&o.contentType!=null&&(a.contentType=o.contentType),ON(n,o.data,a)}function VN(n){n._throwIfRoot("getDownloadURL");const e=kN(n.storage,n._location,cE());return n.storage.makeRequestWithTokens(e,um).then(t=>{if(t===null)throw G2();return t})}function MN(n){n._throwIfRoot("deleteObject");const e=CN(n.storage,n._location);return n.storage.makeRequestWithTokens(e,um)}function UN(n,e){const t=_N(n._location.path,e),i=new _n(n._location.bucket,t);return new Ps(n.storage,i)}/**
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
 */function FN(n){return/^[A-Za-z]+:\/\//.test(n)}function zN(n,e){return new Ps(n,e)}function mE(n,e){if(n instanceof cm){const t=n;if(t._bucket==null)throw q2();const i=new Ps(t,t._bucket);return e!=null?mE(i,e):i}else return e!==void 0?UN(n,e):n}function jN(n,e){if(e&&FN(e)){if(n instanceof cm)return zN(n,e);throw Gf("To use ref(service, url), the first argument must be a Storage instance.")}else return mE(n,e)}function sv(n,e){const t=e==null?void 0:e[tE];return t==null?null:_n.makeFromBucketSpec(t,n)}function BN(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:Gv(o,n.app.options.projectId))}class cm{constructor(e,t,i,o,a){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=a,this._bucket=null,this._host=eE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=L2,this._maxUploadRetryTime=V2,this._requests=new Set,o!=null?this._bucket=_n.makeFromBucketSpec(o,this._host):this._bucket=sv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_n.makeFromBucketSpec(this._url,e):this._bucket=sv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){iv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){iv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ps(this,e)}_makeRequest(e,t,i,o,a=!0){if(this._deleted)return new X2(nE());{const c=lN(e,this._appId,i,o,t,this._firebaseVersion,a);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const ov="@firebase/storage",av="0.13.4";/**
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
 */const gE="storage";function $N(n,e,t,i){return n=et(n),LN(n,e,t,i)}function WN(n){return n=et(n),VN(n)}function HN(n){return n=et(n),MN(n)}function yE(n,e){return n=et(n),jN(n,e)}function qN(n=dp(),e){n=et(n);const i=Xc(n,gE).getImmediate({identifier:e}),o=Hv("storage");return o&&KN(i,...o),i}function KN(n,e,t,i={}){BN(n,e,t,i)}function GN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new cm(t,i,o,e,xs)}function QN(){Rs(new Oi(gE,GN,"PUBLIC").setMultipleInstances(!0)),pr(ov,av,""),pr(ov,av,"esm2017")}QN();const YN={apiKey:"AIzaSyASTjhDS34OS_CeH4IEla4e6h-gZe_Pi-Q",authDomain:"twitter-e3301.firebaseapp.com",projectId:"twitter-e3301",storageBucket:"twitter-e3301.firebasestorage.app",messagingSenderId:"247119875359",appId:"1:247119875359:web:56d620d1f92a91e8a1f42a"},hm=Xv(YN),Ns=_k(hm),Bc=d2(hm),_E=qN(hm);/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var XN={prefix:"fas",iconName:"pencil-alt",icon:[512,512,[],"f303","M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"]},JN={prefix:"fas",iconName:"plus",icon:[448,512,[],"f067","M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]},ZN={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]},ex={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"]};/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function pl(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?pl=function(e){return typeof e}:pl=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pl(n)}function tx(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function nx(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function rx(n,e,t){return e&&nx(n.prototype,e),n}function ix(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ze(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{},i=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),i.forEach(function(o){ix(n,o,t[o])})}return n}function vE(n,e){return sx(n)||ox(n,e)||ax()}function sx(n){if(Array.isArray(n))return n}function ox(n,e){var t=[],i=!0,o=!1,a=void 0;try{for(var c=n[Symbol.iterator](),d;!(i=(d=c.next()).done)&&(t.push(d.value),!(e&&t.length===e));i=!0);}catch(p){o=!0,a=p}finally{try{!i&&c.return!=null&&c.return()}finally{if(o)throw a}}return t}function ax(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var lv=function(){},dm={},wE={},lx=null,EE={mark:lv,measure:lv};try{typeof window<"u"&&(dm=window),typeof document<"u"&&(wE=document),typeof MutationObserver<"u"&&(lx=MutationObserver),typeof performance<"u"&&(EE=performance)}catch{}var ux=dm.navigator||{},uv=ux.userAgent,cv=uv===void 0?"":uv,yh=dm,Xt=wE,cc=EE;yh.document;var fm=!!Xt.documentElement&&!!Xt.head&&typeof Xt.addEventListener=="function"&&typeof Xt.createElement=="function";~cv.indexOf("MSIE")||~cv.indexOf("Trident/");var Yr="___FONT_AWESOME___",TE="fa",IE="svg-inline--fa",cx="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var df={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},SE=yh.FontAwesomeConfig||{};function hx(n){var e=Xt.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function dx(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(Xt&&typeof Xt.querySelector=="function"){var fx=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];fx.forEach(function(n){var e=vE(n,2),t=e[0],i=e[1],o=dx(hx(t));o!=null&&(SE[i]=o)})}var px={familyPrefix:TE,replacementClass:IE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Qf=ze({},px,SE);Qf.autoReplaceSvg||(Qf.observeMutations=!1);var vn=ze({},Qf);yh.FontAwesomeConfig=vn;var Xr=yh||{};Xr[Yr]||(Xr[Yr]={});Xr[Yr].styles||(Xr[Yr].styles={});Xr[Yr].hooks||(Xr[Yr].hooks={});Xr[Yr].shims||(Xr[Yr].shims=[]);var fr=Xr[Yr],mx=[],gx=function n(){Xt.removeEventListener("DOMContentLoaded",n),Yf=1,mx.map(function(e){return e()})},Yf=!1;fm&&(Yf=(Xt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Xt.readyState),Yf||Xt.addEventListener("DOMContentLoaded",gx));var pm="pending",RE="settled",$c="fulfilled",Wc="rejected",yx=function(){},AE=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",_x=typeof setImmediate>"u"?setTimeout:setImmediate,al=[],Xf;function vx(){for(var n=0;n<al.length;n++)al[n][0](al[n][1]);al=[],Xf=!1}function Hc(n,e){al.push([n,e]),Xf||(Xf=!0,_x(vx,0))}function wx(n,e){function t(o){mm(e,o)}function i(o){Rl(e,o)}try{n(t,i)}catch(o){i(o)}}function kE(n){var e=n.owner,t=e._state,i=e._data,o=n[t],a=n.then;if(typeof o=="function"){t=$c;try{i=o(i)}catch(c){Rl(a,c)}}CE(a,i)||(t===$c&&mm(a,i),t===Wc&&Rl(a,i))}function CE(n,e){var t;try{if(n===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&(typeof e=="function"||pl(e)==="object")){var i=e.then;if(typeof i=="function")return i.call(e,function(o){t||(t=!0,e===o?PE(n,o):mm(n,o))},function(o){t||(t=!0,Rl(n,o))}),!0}}catch(o){return t||Rl(n,o),!0}return!1}function mm(n,e){(n===e||!CE(n,e))&&PE(n,e)}function PE(n,e){n._state===pm&&(n._state=RE,n._data=e,Hc(Ex,n))}function Rl(n,e){n._state===pm&&(n._state=RE,n._data=e,Hc(Tx,n))}function NE(n){n._then=n._then.forEach(kE)}function Ex(n){n._state=$c,NE(n)}function Tx(n){n._state=Wc,NE(n),!n._handled&&AE&&global.process.emit("unhandledRejection",n._data,n)}function Ix(n){global.process.emit("rejectionHandled",n)}function Nn(n){if(typeof n!="function")throw new TypeError("Promise resolver "+n+" is not a function");if(!(this instanceof Nn))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],wx(n,this)}Nn.prototype={constructor:Nn,_state:pm,_then:null,_data:void 0,_handled:!1,then:function(e,t){var i={owner:this,then:new this.constructor(yx),fulfilled:e,rejected:t};return(t||e)&&!this._handled&&(this._handled=!0,this._state===Wc&&AE&&Hc(Ix,this)),this._state===$c||this._state===Wc?Hc(kE,i):this._then.push(i),i.then},catch:function(e){return this.then(null,e)}};Nn.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new Nn(function(e,t){var i=[],o=0;function a(p){return o++,function(y){i[p]=y,--o||e(i)}}for(var c=0,d;c<n.length;c++)d=n[c],d&&typeof d.then=="function"?d.then(a(c),t):i[c]=d;o||e(i)})};Nn.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new Nn(function(e,t){for(var i=0,o;i<n.length;i++)o=n[i],o&&typeof o.then=="function"?o.then(e,t):e(o)})};Nn.resolve=function(n){return n&&pl(n)==="object"&&n.constructor===Nn?n:new Nn(function(e){e(n)})};Nn.reject=function(n){return new Nn(function(e,t){t(n)})};var bo={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Sx(n){if(!(!n||!fm)){var e=Xt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var t=Xt.head.childNodes,i=null,o=t.length-1;o>-1;o--){var a=t[o],c=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(i=a)}return Xt.head.insertBefore(e,i),n}}var Rx="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function qc(){for(var n=12,e="";n-- >0;)e+=Rx[Math.random()*62|0];return e}function xE(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ax(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,'="').concat(xE(n[t]),'" ')},"").trim()}function bE(n){return Object.keys(n||{}).reduce(function(e,t){return e+"".concat(t,": ").concat(n[t],";")},"")}function DE(n){return n.size!==bo.size||n.x!==bo.x||n.y!==bo.y||n.rotate!==bo.rotate||n.flipX||n.flipY}function OE(n){var e=n.transform,t=n.containerWidth,i=n.iconWidth,o={transform:"translate(".concat(t/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),d="rotate(".concat(e.rotate," 0 0)"),p={transform:"".concat(a," ").concat(c," ").concat(d)},y={transform:"translate(".concat(i/2*-1," -256)")};return{outer:o,inner:p,path:y}}var ff={x:0,y:0,width:"100%",height:"100%"};function hv(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function kx(n){return n.tag==="g"?n.children:[n]}function Cx(n){var e=n.children,t=n.attributes,i=n.main,o=n.mask,a=n.maskId,c=n.transform,d=i.width,p=i.icon,y=o.width,v=o.icon,T=OE({transform:c,containerWidth:y,iconWidth:d}),I={tag:"rect",attributes:ze({},ff,{fill:"white"})},N=p.children?{children:p.children.map(hv)}:{},O={tag:"g",attributes:ze({},T.inner),children:[hv(ze({tag:p.tag,attributes:ze({},p.attributes,T.path)},N))]},j={tag:"g",attributes:ze({},T.outer),children:[O]},D="mask-".concat(a||qc()),$="clip-".concat(a||qc()),q={tag:"mask",attributes:ze({},ff,{id:D,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,j]},Z={tag:"defs",children:[{tag:"clipPath",attributes:{id:$},children:kx(v)},q]};return e.push(Z,{tag:"rect",attributes:ze({fill:"currentColor","clip-path":"url(#".concat($,")"),mask:"url(#".concat(D,")")},ff)}),{children:e,attributes:t}}function Px(n){var e=n.children,t=n.attributes,i=n.main,o=n.transform,a=n.styles,c=bE(a);if(c.length>0&&(t.style=c),DE(o)){var d=OE({transform:o,containerWidth:i.width,iconWidth:i.width});e.push({tag:"g",attributes:ze({},d.outer),children:[{tag:"g",attributes:ze({},d.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:ze({},i.icon.attributes,d.path)}]}]})}else e.push(i.icon);return{children:e,attributes:t}}function Nx(n){var e=n.children,t=n.main,i=n.mask,o=n.attributes,a=n.styles,c=n.transform;if(DE(c)&&t.found&&!i.found){var d=t.width,p=t.height,y={x:d/p/2,y:.5};o.style=bE(ze({},a,{"transform-origin":"".concat(y.x+c.x/16,"em ").concat(y.y+c.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function xx(n){var e=n.prefix,t=n.iconName,i=n.children,o=n.attributes,a=n.symbol,c=a===!0?"".concat(e,"-").concat(vn.familyPrefix,"-").concat(t):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ze({},o,{id:c}),children:i}]}]}function bx(n){var e=n.icons,t=e.main,i=e.mask,o=n.prefix,a=n.iconName,c=n.transform,d=n.symbol,p=n.title,y=n.maskId,v=n.titleId,T=n.extra,I=n.watchable,N=I===void 0?!1:I,O=i.found?i:t,j=O.width,D=O.height,$=o==="fak",q=$?"":"fa-w-".concat(Math.ceil(j/D*16)),Z=[vn.replacementClass,a?"".concat(vn.familyPrefix,"-").concat(a):"",q].filter(function(P){return T.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(T.classes).join(" "),re={children:[],attributes:ze({},T.attributes,{"data-prefix":o,"data-icon":a,class:Z,role:T.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(D)})},ge=$&&!~T.classes.indexOf("fa-fw")?{width:"".concat(j/D*16*.0625,"em")}:{};N&&(re.attributes[cx]=""),p&&re.children.push({tag:"title",attributes:{id:re.attributes["aria-labelledby"]||"title-".concat(v||qc())},children:[p]});var fe=ze({},re,{prefix:o,iconName:a,main:t,mask:i,maskId:y,transform:c,symbol:d,styles:ze({},ge,T.styles)}),x=i.found&&t.found?Cx(fe):Px(fe),S=x.children,A=x.attributes;return fe.children=S,fe.attributes=A,d?xx(fe):Nx(fe)}var dv=function(){};vn.measurePerformance&&cc&&cc.mark&&cc.measure;var pf=function(e,t,i,o){var a=Object.keys(e),c=a.length,d=t,p,y,v;for(i===void 0?(p=1,v=e[a[0]]):(p=0,v=i);p<c;p++)y=a[p],v=d(v,e[y],y,e);return v};function LE(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,o=i===void 0?!1:i,a=Object.keys(e).reduce(function(c,d){var p=e[d],y=!!p.icon;return y?c[p.iconName]=p.icon:c[d]=p,c},{});typeof fr.hooks.addPack=="function"&&!o?fr.hooks.addPack(n,a):fr.styles[n]=ze({},fr.styles[n]||{},a),n==="fas"&&LE("fa",e)}var fv=fr.styles,Dx=fr.shims,VE=function(){var e=function(o){return pf(fv,function(a,c,d){return a[d]=pf(c,o,{}),a},{})};e(function(i,o,a){return o[3]&&(i[o[3]]=a),i}),e(function(i,o,a){var c=o[2];return i[a]=a,c.forEach(function(d){i[d]=a}),i});var t="far"in fv;pf(Dx,function(i,o){var a=o[0],c=o[1],d=o[2];return c==="far"&&!t&&(c="fas"),i[a]={prefix:c,iconName:d},i},{})};VE();fr.styles;function pv(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}function ME(n){var e=n.tag,t=n.attributes,i=t===void 0?{}:t,o=n.children,a=o===void 0?[]:o;return typeof n=="string"?xE(n):"<".concat(e," ").concat(Ax(i),">").concat(a.map(ME).join(""),"</").concat(e,">")}var Ox=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(i,o){var a=o.toLowerCase().split("-"),c=a[0],d=a.slice(1).join("-");if(c&&d==="h")return i.flipX=!0,i;if(c&&d==="v")return i.flipY=!0,i;if(d=parseFloat(d),isNaN(d))return i;switch(c){case"grow":i.size=i.size+d;break;case"shrink":i.size=i.size-d;break;case"left":i.x=i.x-d;break;case"right":i.x=i.x+d;break;case"up":i.y=i.y-d;break;case"down":i.y=i.y+d;break;case"rotate":i.rotate=i.rotate+d;break}return i},t):t};function Jf(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=new Error().stack}Jf.prototype=Object.create(Error.prototype);Jf.prototype.constructor=Jf;var _h={fill:"currentColor"},UE={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};ze({},_h,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var gm=ze({},UE,{attributeName:"opacity"});ze({},_h,{cx:"256",cy:"364",r:"28"}),ze({},UE,{attributeName:"r",values:"28;14;28;28;14;28;"}),ze({},gm,{values:"1;0;1;1;0;1;"});ze({},_h,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),ze({},gm,{values:"1;0;0;0;0;1;"});ze({},_h,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),ze({},gm,{values:"0;0;1;1;0;0;"});fr.styles;function mv(n){var e=n[0],t=n[1],i=n.slice(4),o=vE(i,1),a=o[0],c=null;return Array.isArray(a)?c={tag:"g",attributes:{class:"".concat(vn.familyPrefix,"-").concat(df.GROUP)},children:[{tag:"path",attributes:{class:"".concat(vn.familyPrefix,"-").concat(df.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(vn.familyPrefix,"-").concat(df.PRIMARY),fill:"currentColor",d:a[1]}}]}:c={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:t,icon:c}}fr.styles;var Lx=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function Vx(){var n=TE,e=IE,t=vn.familyPrefix,i=vn.replacementClass,o=Lx;if(t!==n||i!==e){var a=new RegExp("\\.".concat(n,"\\-"),"g"),c=new RegExp("\\--".concat(n,"\\-"),"g"),d=new RegExp("\\.".concat(e),"g");o=o.replace(a,".".concat(t,"-")).replace(c,"--".concat(t,"-")).replace(d,".".concat(i))}return o}var Mx=function(){function n(){tx(this,n),this.definitions={}}return rx(n,[{key:"add",value:function(){for(var t=this,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];var c=o.reduce(this._pullDefinitions,{});Object.keys(c).forEach(function(d){t.definitions[d]=ze({},t.definitions[d]||{},c[d]),LE(d,c[d]),VE()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var o=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(o).map(function(a){var c=o[a],d=c.prefix,p=c.iconName,y=c.icon;t[d]||(t[d]={}),t[d][p]=y}),t}}]),n}();function Ux(){vn.autoAddCss&&!yv&&(Sx(Vx()),yv=!0)}function Fx(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(i){return ME(i)})}}),Object.defineProperty(n,"node",{get:function(){if(fm){var i=Xt.createElement("div");return i.innerHTML=n.html,i.children}}}),n}function gv(n){var e=n.prefix,t=e===void 0?"fa":e,i=n.iconName;if(i)return pv(jx.definitions,t,i)||pv(fr.styles,t,i)}function zx(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:gv(e||{}),o=t.mask;return o&&(o=(o||{}).icon?o:gv(o||{})),n(i,ze({},t,{mask:o}))}}var jx=new Mx,yv=!1,Zf={transform:function(e){return Ox(e)}},Bx=zx(function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.transform,i=t===void 0?bo:t,o=e.symbol,a=o===void 0?!1:o,c=e.mask,d=c===void 0?null:c,p=e.maskId,y=p===void 0?null:p,v=e.title,T=v===void 0?null:v,I=e.titleId,N=I===void 0?null:I,O=e.classes,j=O===void 0?[]:O,D=e.attributes,$=D===void 0?{}:D,q=e.styles,Z=q===void 0?{}:q;if(n){var re=n.prefix,ge=n.iconName,fe=n.icon;return Fx(ze({type:"icon"},n),function(){return Ux(),vn.autoA11y&&(T?$["aria-labelledby"]="".concat(vn.replacementClass,"-title-").concat(N||qc()):($["aria-hidden"]="true",$.focusable="false")),bx({icons:{main:mv(fe),mask:d?mv(d.icon):{found:!1,width:null,height:null,icon:{}}},prefix:re,iconName:ge,transform:ze({},bo,i),symbol:a,title:T,maskId:y,titleId:N,extra:{attributes:$,styles:Z,classes:j}})})}}),mf={exports:{}},gf,_v;function $x(){if(_v)return gf;_v=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return gf=n,gf}var yf,vv;function Wx(){if(vv)return yf;vv=1;var n=$x();function e(){}function t(){}return t.resetWarningCache=e,yf=function(){function i(c,d,p,y,v,T){if(T!==n){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}}i.isRequired=i;function o(){return i}var a={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return a.PropTypes=a,a},yf}var wv;function Hx(){return wv||(wv=1,mf.exports=Wx()()),mf.exports}var qx=Hx();const Ce=Rv(qx);function Ev(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,i)}return t}function dr(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ev(Object(t),!0).forEach(function(i){Do(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ev(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Kc(n){"@babel/helpers - typeof";return Kc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kc(n)}function Do(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Kx(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,a;for(a=0;a<i.length;a++)o=i[a],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function Gx(n,e){if(n==null)return{};var t=Kx(n,e),i,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)i=a[o],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function ep(n){return Qx(n)||Yx(n)||Xx(n)||Jx()}function Qx(n){if(Array.isArray(n))return tp(n)}function Yx(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Xx(n,e){if(n){if(typeof n=="string")return tp(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return tp(n,e)}}function tp(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Jx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zx(n){var e,t=n.beat,i=n.fade,o=n.beatFade,a=n.bounce,c=n.shake,d=n.flash,p=n.spin,y=n.spinPulse,v=n.spinReverse,T=n.pulse,I=n.fixedWidth,N=n.inverse,O=n.border,j=n.listItem,D=n.flip,$=n.size,q=n.rotation,Z=n.pull,re=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":c,"fa-flash":d,"fa-spin":p,"fa-spin-reverse":v,"fa-spin-pulse":y,"fa-pulse":T,"fa-fw":I,"fa-inverse":N,"fa-border":O,"fa-li":j,"fa-flip":D===!0,"fa-flip-horizontal":D==="horizontal"||D==="both","fa-flip-vertical":D==="vertical"||D==="both"},Do(e,"fa-".concat($),typeof $<"u"&&$!==null),Do(e,"fa-rotate-".concat(q),typeof q<"u"&&q!==null&&q!==0),Do(e,"fa-pull-".concat(Z),typeof Z<"u"&&Z!==null),Do(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(re).map(function(ge){return re[ge]?ge:null}).filter(function(ge){return ge})}function eb(n){return n=n-0,n===n}function FE(n){return eb(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var tb=["style"];function nb(n){return n.charAt(0).toUpperCase()+n.slice(1)}function rb(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),o=FE(t.slice(0,i)),a=t.slice(i+1).trim();return o.startsWith("webkit")?e[nb(o)]=a:e[o]=a,e},{})}function zE(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(p){return zE(n,p)}),o=Object.keys(e.attributes||{}).reduce(function(p,y){var v=e.attributes[y];switch(y){case"class":p.attrs.className=v,delete e.attributes.class;break;case"style":p.attrs.style=rb(v);break;default:y.indexOf("aria-")===0||y.indexOf("data-")===0?p.attrs[y.toLowerCase()]=v:p.attrs[FE(y)]=v}return p},{attrs:{}}),a=t.style,c=a===void 0?{}:a,d=Gx(t,tb);return o.attrs.style=dr(dr({},o.attrs.style),c),n.apply(void 0,[e.tag,dr(dr({},o.attrs),d)].concat(ep(i)))}var jE=!1;try{jE=!0}catch{}function ib(){if(!jE&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function Tv(n){if(n&&Kc(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Zf.icon)return Zf.icon(n);if(n===null)return null;if(n&&Kc(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function _f(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Do({},n,e):{}}var Iv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Xn=Av.forwardRef(function(n,e){var t=dr(dr({},Iv),n),i=t.icon,o=t.mask,a=t.symbol,c=t.className,d=t.title,p=t.titleId,y=t.maskId,v=Tv(i),T=_f("classes",[].concat(ep(Zx(t)),ep((c||"").split(" ")))),I=_f("transform",typeof t.transform=="string"?Zf.transform(t.transform):t.transform),N=_f("mask",Tv(o)),O=Bx(v,dr(dr(dr(dr({},T),I),N),{},{symbol:a,title:d,titleId:p,maskId:y}));if(!O)return ib("Could not find icon",v),null;var j=O.abstract,D={ref:e};return Object.keys(t).forEach(function($){Iv.hasOwnProperty($)||(D[$]=t[$])}),sb(j[0],D)});Xn.displayName="FontAwesomeIcon";Xn.propTypes={beat:Ce.bool,border:Ce.bool,beatFade:Ce.bool,bounce:Ce.bool,className:Ce.string,fade:Ce.bool,flash:Ce.bool,mask:Ce.oneOfType([Ce.object,Ce.array,Ce.string]),maskId:Ce.string,fixedWidth:Ce.bool,inverse:Ce.bool,flip:Ce.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ce.oneOfType([Ce.object,Ce.array,Ce.string]),listItem:Ce.bool,pull:Ce.oneOf(["right","left"]),pulse:Ce.bool,rotation:Ce.oneOf([0,90,180,270]),shake:Ce.bool,size:Ce.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ce.bool,spinPulse:Ce.bool,spinReverse:Ce.bool,symbol:Ce.oneOfType([Ce.bool,Ce.string]),title:Ce.string,titleId:Ce.string,transform:Ce.oneOfType([Ce.string,Ce.object]),swapOpacity:Ce.bool};var sb=zE.bind(null,Av.createElement);const ob=({nweetObj:n,isOwner:e})=>{const[t,i]=H.useState(!1),[o,a]=H.useState(n.text),c=async()=>{if(window.confirm("삭제하시겠습니까?")){const T=qf(Bc,"nweets",n.id);if(await x2(T),n.attachmentUrl){const I=yE(_E,n.attachmentUrl);await HN(I)}}},d=()=>i(v=>!v),p=v=>{const{target:{value:T}}=v;a(T)},y=async v=>{v.preventDefault();const T=qf(Bc,"nweets",n.id);await N2(T,{text:o}),i(!1)};return te.jsx("div",{className:"nweet",children:t?te.jsxs(te.Fragment,{children:[te.jsxs("form",{onSubmit:y,className:"container nweetEdit",children:[te.jsx("input",{onChange:p,value:o,required:!0,placeholder:"Edit your nweet",autoFocus:!0,className:"formInput"}),te.jsx("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),te.jsx("button",{onClick:d,className:"formBtn cancelBtn",children:"Cancel"})]}):te.jsxs(te.Fragment,{children:[te.jsx("h4",{children:n.text}),n.attachmentUrl&&te.jsx("img",{src:n.attachmentUrl,width:"50px",height:"50px",alt:"attachment"}),e&&te.jsxs("div",{className:"nweet__actions",children:[te.jsx("span",{onClick:c,children:te.jsx(Xn,{icon:ex})}),te.jsx("span",{onClick:d,children:te.jsx(Xn,{icon:XN})})]})]})})},bt=[];for(let n=0;n<256;++n)bt.push((n+256).toString(16).slice(1));function ab(n,e=0){return(bt[n[e+0]]+bt[n[e+1]]+bt[n[e+2]]+bt[n[e+3]]+"-"+bt[n[e+4]]+bt[n[e+5]]+"-"+bt[n[e+6]]+bt[n[e+7]]+"-"+bt[n[e+8]]+bt[n[e+9]]+"-"+bt[n[e+10]]+bt[n[e+11]]+bt[n[e+12]]+bt[n[e+13]]+bt[n[e+14]]+bt[n[e+15]]).toLowerCase()}let vf;const lb=new Uint8Array(16);function ub(){if(!vf){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");vf=crypto.getRandomValues.bind(crypto)}return vf(lb)}const cb=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Sv={randomUUID:cb};function hb(n,e,t){if(Sv.randomUUID&&!e&&!n)return Sv.randomUUID();n=n||{};const i=n.random||(n.rng||ub)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,ab(i)}const db=({userObj:n})=>{const[e,t]=H.useState(""),[i,o]=H.useState(""),a=async y=>{if(y.preventDefault(),e==="")return;let v="";if(i!==""){const T=yE(_E,`${n.uid}/${hb()}`),I=await $N(T,i,"data_url");v=await WN(I.ref)}await b2(Bw(Bc,"nweets"),{text:e,createdAt:Date.now(),creatorId:n.uid,attachmentUrl:v}),t(""),o("")},c=y=>{const{target:{value:v}}=y;t(v)},d=y=>{const{target:{files:v}}=y,T=v[0],I=new FileReader;I.onloadend=N=>{const{currentTarget:{result:O}}=N;o(O)},T&&I.readAsDataURL(T)},p=()=>o("");return te.jsxs("form",{onSubmit:a,className:"factoryForm",children:[te.jsxs("div",{className:"factoryInput__container",children:[te.jsx("input",{className:"factoryInput__input",value:e,onChange:c,type:"text",placeholder:"What's on your mind?",maxLength:120}),te.jsx("input",{type:"submit",value:"→",className:"factoryInput__arrow"})]}),te.jsxs("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[te.jsx("span",{children:"Add photos"}),te.jsx(Xn,{icon:JN})]}),te.jsx("input",{id:"attach-file",type:"file",accept:"image/*",onChange:d,style:{opacity:0}}),i&&te.jsxs("div",{className:"factoryForm__attachment",children:[te.jsx("img",{src:i,style:{backgroundImage:i}}),te.jsxs("div",{className:"factoryForm__clear",onClick:p,children:[te.jsx("span",{children:"Remove"}),te.jsx(Xn,{icon:ZN})]})]})]})},fb=({userObj:n})=>{const[e,t]=H.useState([]);return H.useEffect(()=>{const i=S2(Bw(Bc,"nweets"),R2("createdAt","desc")),o=D2(i,a=>{const c=a.docs.map(d=>({id:d.id,...d.data()}));t(c)});return()=>o()},[]),te.jsxs("div",{children:[te.jsx(db,{userObj:n}),te.jsx("div",{style:{marginTop:30},children:e.map(i=>te.jsx(ob,{nweetObj:i,isOwner:i.creatorId===n.uid},i.id))})]})},pb=()=>{const[n,e]=H.useState(""),[t,i]=H.useState(""),[o,a]=H.useState(!0),[c,d]=H.useState(""),p=T=>{const{target:{name:I,value:N}}=T;I==="email"?e(N):I==="password"&&i(N)},y=async T=>{T.preventDefault();try{let I;o?I=await tA(Ns,n,t):I=await nA(Ns,n,t)}catch(I){d(I.message)}},v=()=>a(T=>!T);return te.jsxs(te.Fragment,{children:[te.jsxs("form",{onSubmit:y,className:"container",children:[te.jsx("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:p,className:"authInput"}),te.jsx("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:t,onChange:p,className:"authInput"}),te.jsx("input",{type:"submit",value:o?"Create Account":"Log In",className:"authInput authSubmit"}),c&&te.jsx("span",{className:"authError",children:c})]}),te.jsx("span",{onClick:v,children:o?"Sign In":"Create Account"})]})};/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var mb={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},gb={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},BE={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};const yb=()=>{const n=async e=>{const{target:{name:t}}=e;let i;t==="google"?i=new Fr:t==="github"&&(i=new zr),await kA(Ns,i)};return te.jsxs("div",{className:"authContainer",children:[te.jsx(Xn,{icon:BE,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),te.jsx(pb,{}),te.jsxs("div",{className:"authBtns",children:[te.jsxs("button",{onClick:n,name:"google",className:"authBtn",children:["Continue with Google ",te.jsx(Xn,{icon:gb})]}),te.jsxs("button",{onClick:n,name:"github",className:"authBtn",children:["Continue with Github ",te.jsx(Xn,{icon:mb})]})]})]})};/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var _b={prefix:"far",iconName:"user",icon:[448,512,[],"f007","M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"]};const vb=({userObj:n})=>te.jsx("nav",{children:te.jsxs("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[te.jsx("li",{children:te.jsx(Sc,{to:"/",style:{marginRight:10},children:te.jsx(Xn,{icon:BE,color:"#04AAFF",size:"2x"})})}),te.jsx("li",{children:te.jsxs(Sc,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[te.jsx(Xn,{icon:_b,color:"#04AAFF",size:"2x"}),te.jsx("span",{style:{marginTop:10},children:n.displayName?`${n.displayName}의 Profile`:"Profile"})]})})]})}),wb=({userObj:n,refreshUser:e})=>{const[t,i]=H.useState(n.displayName),o=()=>Ns.signOut(),a=d=>{const{target:{value:p}}=d;i(p)},c=async d=>{d.preventDefault();const p=Ns.currentUser;p&&p.displayName!==t&&(await iA(p,{displayName:t}),console.log("Display name updated to:",t),e())};return te.jsxs("div",{className:"container",children:[te.jsxs("form",{onSubmit:c,className:"profileForm",children:[te.jsx("input",{onChange:a,type:"text",placeholder:"Display name",value:t,autoFocus:!0,className:"formInput"}),te.jsx("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),te.jsx("span",{className:"formBtn cancelBtn logOut",onClick:o,children:"Log Out"})]})},Eb=({isLoggedIn:n,userObj:e,refreshUser:t})=>te.jsxs("div",{children:[n&&te.jsx(vb,{userObj:e}),te.jsx(HT,{children:n?te.jsxs(te.Fragment,{children:[te.jsx(el,{path:"/",element:te.jsx("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:te.jsx(fb,{userObj:e})})}),te.jsx(el,{path:"/profile",element:te.jsx("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:te.jsx(wb,{refreshUser:t,userObj:e})})})]}):te.jsxs(te.Fragment,{children:[te.jsx(el,{path:"/",element:te.jsx(yb,{})}),te.jsx(el,{path:"*",element:te.jsx($T,{to:"/"})})]})})]});function Tb(){const[n,e]=H.useState(!1),[t,i]=H.useState(null),o=()=>{const a=Ns.currentUser;i({uid:a.uid,displayName:a.displayName,updateProfile:c=>a.updateProfile(c)})};return H.useEffect(()=>{aA(Ns,a=>{i(a?{uid:a.uid,displayName:a.displayName,updateProfile:c=>a.updateProfile(c)}:!1),e(!0)})},[]),te.jsx(te.Fragment,{children:n?te.jsx(Eb,{refreshUser:o,isLoggedIn:!!t,userObj:t}):"initalizing..."})}eT.createRoot(document.getElementById("root")).render(te.jsx(H.StrictMode,{children:te.jsx(mI,{children:te.jsx(Tb,{})})}));
