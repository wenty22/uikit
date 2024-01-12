import{g as At,e as Ut}from"./index.e06fa583.js";import{g as qr,a as Ar,b as Ur,c as $r,d as Pr,e as Dr,f as jr,h as Hr,i as Wr,j as Br,k as Fr,l as zr,m as Qr,s as Vr,n as Jr,o as Gr,p as Yr,q as Kr,r as Zr,t as Xr,u as eo,v as ne,I as to,w as lt,J as ut,H as no}from"./index.c4ba62b7.js";import{b as ro}from"./browser.141db040.js";const Ce="Session currently connected",j="Session currently disconnected",oo="Session Rejected",io="Missing JSON RPC response",so='JSON-RPC success response must include "result" field',ao='JSON-RPC error response must include "error" field',co='JSON RPC request must have valid "method" value',lo='JSON RPC request must have valid "id" value',uo="Missing one of the required parameters: bridge / uri / session",_t="JSON RPC response format is invalid",_o="URI format is invalid",fo="QRCode Modal not provided",dt="User close QRCode Modal",ho=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],po=["wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],$e=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign",...po],Re="WALLETCONNECT_DEEPLINK_CHOICE",mo={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan"};var $t=Pe;Pe.strict=Pt;Pe.loose=Dt;var go=Object.prototype.toString,vo={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function Pe(t){return Pt(t)||Dt(t)}function Pt(t){return t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array}function Dt(t){return vo[go.call(t)]}var yo=$t.strict,wo=function(e){if(yo(e)){var n=Buffer.from(e.buffer);return e.byteLength!==e.buffer.byteLength&&(n=n.slice(e.byteOffset,e.byteOffset+e.byteLength)),n}else return Buffer.from(e)};const De="hex",je="utf8",bo="binary",ko="buffer",Eo="array",Co="typed-array",So="array-buffer",pe="0";function Q(t){return new Uint8Array(t)}function He(t,e=!1){const n=t.toString(De);return e?re(n):n}function We(t){return t.toString(je)}function jt(t){return t.readUIntBE(0,t.length)}function G(t){return wo(t)}function $(t,e=!1){return He(G(t),e)}function Ht(t){return We(G(t))}function Wt(t){return jt(G(t))}function Be(t){return Buffer.from(V(t),De)}function P(t){return Q(Be(t))}function xo(t){return We(Be(t))}function Io(t){return Wt(P(t))}function Fe(t){return Buffer.from(t,je)}function Bt(t){return Q(Fe(t))}function Ro(t,e=!1){return He(Fe(t),e)}function To(t){const e=parseInt(t,10);return Vo(Qo(e),"Number can only safely store up to 53 bits"),e}function Oo(t){return qo(ze(t))}function No(t){return Qe(ze(t))}function Mo(t,e){return Ao(ze(t),e)}function Lo(t){return`${t}`}function ze(t){const e=(t>>>0).toString(2);return Je(e)}function qo(t){return G(Qe(t))}function Qe(t){return new Uint8Array(Ho(t).map(e=>parseInt(e,2)))}function Ao(t,e){return $(Qe(t),e)}function Uo(t){return!(typeof t!="string"||!new RegExp(/^[01]+$/).test(t)||t.length%8!==0)}function Ft(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||e&&t.length!==2+2*e)}function me(t){return Buffer.isBuffer(t)}function Ve(t){return $t.strict(t)&&!me(t)}function zt(t){return!Ve(t)&&!me(t)&&typeof t.byteLength<"u"}function $o(t){return me(t)?ko:Ve(t)?Co:zt(t)?So:Array.isArray(t)?Eo:typeof t}function Po(t){return Uo(t)?bo:Ft(t)?De:je}function Do(...t){return Buffer.concat(t)}function Qt(...t){let e=[];return t.forEach(n=>e=e.concat(Array.from(n))),new Uint8Array([...e])}function jo(t,e=8){const n=t%e;return n?(t-n)/e*e+e:t}function Ho(t,e=8){const n=Je(t).match(new RegExp(`.{${e}}`,"gi"));return Array.from(n||[])}function Je(t,e=8,n=pe){return Wo(t,jo(t.length,e),n)}function Wo(t,e,n=pe){return Jo(t,e,!0,n)}function V(t){return t.replace(/^0x/,"")}function re(t){return t.startsWith("0x")?t:`0x${t}`}function Bo(t){return t=V(t),t=Je(t,2),t&&(t=re(t)),t}function Fo(t){const e=t.startsWith("0x");return t=V(t),t=t.startsWith(pe)?t.substring(1):t,e?re(t):t}function zo(t){return typeof t>"u"}function Qo(t){return!zo(t)}function Vo(t,e){if(!t)throw new Error(e)}function Jo(t,e,n,r=pe){const o=e-t.length;let i=t;if(o>0){const c=r.repeat(o);i=n?c+t:t+c}return i}function _e(t){return G(new Uint8Array(t))}function Go(t){return Ht(new Uint8Array(t))}function Vt(t,e){return $(new Uint8Array(t),!e)}function Yo(t){return Wt(new Uint8Array(t))}function Ko(...t){return P(t.map(e=>$(new Uint8Array(e))).join("")).buffer}function Jt(t){return Q(t).buffer}function Zo(t){return We(t)}function Xo(t,e){return He(t,!e)}function ei(t){return jt(t)}function ti(...t){return Do(...t)}function ni(t){return Bt(t).buffer}function ri(t){return Fe(t)}function oi(t,e){return Ro(t,!e)}function ii(t){return To(t)}function si(t){return Be(t)}function Gt(t){return P(t).buffer}function ai(t){return xo(t)}function ci(t){return Io(t)}function li(t){return Oo(t)}function ui(t){return No(t).buffer}function _i(t){return Lo(t)}function Yt(t,e){return Mo(Number(t),!e)}const di=$r,fi=Pr,hi=Dr,pi=jr,mi=Hr,Kt=Ur,gi=Wr,Zt=qr,vi=Br,yi=Fr,wi=zr,ge=Ar;function ve(t){return Qr(t)}function ye(){const t=ve();return t&&t.os?t.os:void 0}function Xt(){const t=ye();return t?t.toLowerCase().includes("android"):!1}function en(){const t=ye();return t?t.toLowerCase().includes("ios")||t.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function tn(){return ye()?Xt()||en():!1}function nn(){const t=ve();return t&&t.name?t.name.toLowerCase()==="node":!1}function rn(){return!nn()&&!!Kt()}const on=Vr,sn=Jr;function Ge(t,e){const n=sn(e),r=ge();r&&r.setItem(t,n)}function Ye(t){let e=null,n=null;const r=ge();return r&&(n=r.getItem(t)),e=n&&on(n),e}function Ke(t){const e=ge();e&&e.removeItem(t)}function Te(){return Gr()}function bi(t){return Bo(t)}function ki(t){return re(t)}function Ei(t){return V(t)}function Ci(t){return Fo(re(t))}const an=Yr;function ce(){return((e,n)=>{for(n=e="";e++<36;n+=e*51&52?(e^15?8^Math.random()*(e^20?16:4):4).toString(16):"-");return n})()}function Si(){console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")}function cn(t,e){let n;const r=mo[t];return r&&(n=`https://${r}.infura.io/v3/${e}`),n}function ln(t,e){let n;const r=cn(t,e.infuraId);return e.custom&&e.custom[t]?n=e.custom[t]:r&&(n=r),n}function xi(t,e){const n=encodeURIComponent(t);return e.universalLink?`${e.universalLink}/wc?uri=${n}`:e.deepLink?`${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}`:""}function Ii(t){const e=t.href.split("?")[0];Ge(Re,Object.assign(Object.assign({},t),{href:e}))}function un(t,e){return t.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()))[0]}function Ri(t,e){let n=t;return e&&(n=e.map(r=>un(t,r)).filter(Boolean)),n}function Ti(t,e){return async(...r)=>new Promise((o,i)=>{const c=(u,d)=>{(u===null||typeof u>"u")&&i(u),o(d)};t.apply(e,[...r,c])})}function _n(t){const e=t.message||"Failed or Rejected Request";let n=-32e3;if(t&&!t.code)switch(e){case"Parse error":n=-32700;break;case"Invalid request":n=-32600;break;case"Method not found":n=-32601;break;case"Invalid params":n=-32602;break;case"Internal error":n=-32603;break;default:n=-32e3;break}const r={code:n,message:e};return t.data&&(r.data=t.data),r}const dn="https://registry.walletconnect.com";function Oi(){return dn+"/api/v2/wallets"}function Ni(){return dn+"/api/v2/dapps"}function fn(t,e="mobile"){var n;return{name:t.name||"",shortName:t.metadata.shortName||"",color:t.metadata.colors.primary||"",logo:(n=t.image_url.sm)!==null&&n!==void 0?n:"",universalLink:t[e].universal||"",deepLink:t[e].native||""}}function Mi(t,e="mobile"){return Object.values(t).filter(n=>!!n[e].universal||!!n[e].native).map(n=>fn(n,e))}var Ze={};(function(t){const e=Xr,n=eo,r=Kr,o=Zr,i=a=>a==null;function c(a){switch(a.arrayFormat){case"index":return l=>(f,_)=>{const h=f.length;return _===void 0||a.skipNull&&_===null||a.skipEmptyString&&_===""?f:_===null?[...f,[y(l,a),"[",h,"]"].join("")]:[...f,[y(l,a),"[",y(h,a),"]=",y(_,a)].join("")]};case"bracket":return l=>(f,_)=>_===void 0||a.skipNull&&_===null||a.skipEmptyString&&_===""?f:_===null?[...f,[y(l,a),"[]"].join("")]:[...f,[y(l,a),"[]=",y(_,a)].join("")];case"comma":case"separator":return l=>(f,_)=>_==null||_.length===0?f:f.length===0?[[y(l,a),"=",y(_,a)].join("")]:[[f,y(_,a)].join(a.arrayFormatSeparator)];default:return l=>(f,_)=>_===void 0||a.skipNull&&_===null||a.skipEmptyString&&_===""?f:_===null?[...f,y(l,a)]:[...f,[y(l,a),"=",y(_,a)].join("")]}}function u(a){let l;switch(a.arrayFormat){case"index":return(f,_,h)=>{if(l=/\[(\d*)\]$/.exec(f),f=f.replace(/\[\d*\]$/,""),!l){h[f]=_;return}h[f]===void 0&&(h[f]={}),h[f][l[1]]=_};case"bracket":return(f,_,h)=>{if(l=/(\[\])$/.exec(f),f=f.replace(/\[\]$/,""),!l){h[f]=_;return}if(h[f]===void 0){h[f]=[_];return}h[f]=[].concat(h[f],_)};case"comma":case"separator":return(f,_,h)=>{const C=typeof _=="string"&&_.includes(a.arrayFormatSeparator),w=typeof _=="string"&&!C&&g(_,a).includes(a.arrayFormatSeparator);_=w?g(_,a):_;const x=C||w?_.split(a.arrayFormatSeparator).map(I=>g(I,a)):_===null?_:g(_,a);h[f]=x};default:return(f,_,h)=>{if(h[f]===void 0){h[f]=_;return}h[f]=[].concat(h[f],_)}}}function d(a){if(typeof a!="string"||a.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function y(a,l){return l.encode?l.strict?e(a):encodeURIComponent(a):a}function g(a,l){return l.decode?n(a):a}function s(a){return Array.isArray(a)?a.sort():typeof a=="object"?s(Object.keys(a)).sort((l,f)=>Number(l)-Number(f)).map(l=>a[l]):a}function k(a){const l=a.indexOf("#");return l!==-1&&(a=a.slice(0,l)),a}function b(a){let l="";const f=a.indexOf("#");return f!==-1&&(l=a.slice(f)),l}function m(a){a=k(a);const l=a.indexOf("?");return l===-1?"":a.slice(l+1)}function E(a,l){return l.parseNumbers&&!Number.isNaN(Number(a))&&typeof a=="string"&&a.trim()!==""?a=Number(a):l.parseBooleans&&a!==null&&(a.toLowerCase()==="true"||a.toLowerCase()==="false")&&(a=a.toLowerCase()==="true"),a}function R(a,l){l=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},l),d(l.arrayFormatSeparator);const f=u(l),_=Object.create(null);if(typeof a!="string"||(a=a.trim().replace(/^[?#&]/,""),!a))return _;for(const h of a.split("&")){if(h==="")continue;let[C,w]=r(l.decode?h.replace(/\+/g," "):h,"=");w=w===void 0?null:["comma","separator"].includes(l.arrayFormat)?w:g(w,l),f(g(C,l),w,_)}for(const h of Object.keys(_)){const C=_[h];if(typeof C=="object"&&C!==null)for(const w of Object.keys(C))C[w]=E(C[w],l);else _[h]=E(C,l)}return l.sort===!1?_:(l.sort===!0?Object.keys(_).sort():Object.keys(_).sort(l.sort)).reduce((h,C)=>{const w=_[C];return Boolean(w)&&typeof w=="object"&&!Array.isArray(w)?h[C]=s(w):h[C]=w,h},Object.create(null))}t.extract=m,t.parse=R,t.stringify=(a,l)=>{if(!a)return"";l=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},l),d(l.arrayFormatSeparator);const f=w=>l.skipNull&&i(a[w])||l.skipEmptyString&&a[w]==="",_=c(l),h={};for(const w of Object.keys(a))f(w)||(h[w]=a[w]);const C=Object.keys(h);return l.sort!==!1&&C.sort(l.sort),C.map(w=>{const x=a[w];return x===void 0?"":x===null?y(w,l):Array.isArray(x)?x.reduce(_(w),[]).join("&"):y(w,l)+"="+y(x,l)}).filter(w=>w.length>0).join("&")},t.parseUrl=(a,l)=>{l=Object.assign({decode:!0},l);const[f,_]=r(a,"#");return Object.assign({url:f.split("?")[0]||"",query:R(m(a),l)},l&&l.parseFragmentIdentifier&&_?{fragmentIdentifier:g(_,l)}:{})},t.stringifyUrl=(a,l)=>{l=Object.assign({encode:!0,strict:!0},l);const f=k(a.url).split("?")[0]||"",_=t.extract(a.url),h=t.parse(_,{sort:!1}),C=Object.assign(h,a.query);let w=t.stringify(C,l);w&&(w=`?${w}`);let x=b(a.url);return a.fragmentIdentifier&&(x=`#${y(a.fragmentIdentifier,l)}`),`${f}${w}${x}`},t.pick=(a,l,f)=>{f=Object.assign({parseFragmentIdentifier:!0},f);const{url:_,query:h,fragmentIdentifier:C}=t.parseUrl(a,f);return t.stringifyUrl({url:_,query:o(h,l),fragmentIdentifier:C},f)},t.exclude=(a,l,f)=>{const _=Array.isArray(l)?h=>!l.includes(h):(h,C)=>!l(h,C);return t.pick(a,_,f)}})(Ze);function hn(t){const e=t.indexOf("?")!==-1?t.indexOf("?"):void 0;return typeof e<"u"?t.substr(e):""}function pn(t,e){let n=Xe(t);return n=Object.assign(Object.assign({},n),e),t=mn(n),t}function Xe(t){return Ze.parse(t)}function mn(t){return Ze.stringify(t)}function gn(t){return typeof t.bridge<"u"}function vn(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n);function i(s){const k="@",b=s.split(k);return{handshakeTopic:b[0],version:parseInt(b[1],10)}}const c=i(o),u=typeof n<"u"?t.substr(n):"";function d(s){const k=Xe(s);return{key:k.key||"",bridge:k.bridge||""}}const y=d(u);return Object.assign(Object.assign({protocol:r},c),y)}function Li(t){return t===""||typeof t=="string"&&t.trim()===""}function qi(t){return!(t&&t.length)}function Ai(t){return me(t)}function Ui(t){return Ve(t)}function $i(t){return zt(t)}function Pi(t){return $o(t)}function Di(t){return Po(t)}function ji(t,e){return Ft(t,e)}function Hi(t){return typeof t.params=="object"}function yn(t){return typeof t.method<"u"}function B(t){return typeof t.result<"u"}function X(t){return typeof t.error<"u"}function Oe(t){return typeof t.event<"u"}function wn(t){return ho.includes(t)||t.startsWith("wc_")}function bn(t){return t.method.startsWith("wc_")?!0:!$e.includes(t.method)}const Wi=Object.freeze(Object.defineProperty({__proto__:null,convertArrayBufferToBuffer:_e,convertArrayBufferToUtf8:Go,convertArrayBufferToHex:Vt,convertArrayBufferToNumber:Yo,concatArrayBuffers:Ko,convertBufferToArrayBuffer:Jt,convertBufferToUtf8:Zo,convertBufferToHex:Xo,convertBufferToNumber:ei,concatBuffers:ti,convertUtf8ToArrayBuffer:ni,convertUtf8ToBuffer:ri,convertUtf8ToHex:oi,convertUtf8ToNumber:ii,convertHexToBuffer:si,convertHexToArrayBuffer:Gt,convertHexToUtf8:ai,convertHexToNumber:ci,convertNumberToBuffer:li,convertNumberToArrayBuffer:ui,convertNumberToUtf8:_i,convertNumberToHex:Yt,detectEnv:ve,detectOS:ye,isAndroid:Xt,isIOS:en,isMobile:tn,isNode:nn,isBrowser:rn,safeJsonParse:on,safeJsonStringify:sn,setLocal:Ge,getLocal:Ye,removeLocal:Ke,getClientMeta:Te,sanitizeHex:bi,addHexPrefix:ki,removeHexPrefix:Ei,removeHexLeadingZeros:Ci,payloadId:an,uuid:ce,logDeprecationWarning:Si,getInfuraRpcUrl:cn,getRpcUrl:ln,formatIOSMobile:xi,saveMobileLinkInfo:Ii,getMobileRegistryEntry:un,getMobileLinkRegistry:Ri,promisify:Ti,formatRpcError:_n,getWalletRegistryUrl:Oi,getDappRegistryUrl:Ni,formatMobileRegistryEntry:fn,formatMobileRegistry:Mi,isWalletConnectSession:gn,parseWalletConnectUri:vn,getQueryString:hn,appendToQueryString:pn,parseQueryString:Xe,formatQueryString:mn,isEmptyString:Li,isEmptyArray:qi,isBuffer:Ai,isTypedArray:Ui,isArrayBuffer:$i,getType:Pi,getEncoding:Di,isHexString:ji,isJsonRpcSubscription:Hi,isJsonRpcRequest:yn,isJsonRpcResponseSuccess:B,isJsonRpcResponseError:X,isInternalEvent:Oe,isReservedEvent:wn,isSilentPayload:bn,getFromWindow:di,getFromWindowOrThrow:fi,getDocumentOrThrow:hi,getDocument:pi,getNavigatorOrThrow:mi,getNavigator:Kt,getLocationOrThrow:gi,getLocation:Zt,getCryptoOrThrow:vi,getCrypto:yi,getLocalStorageOrThrow:wi,getLocalStorage:ge},Symbol.toStringTag,{value:"Module"}));class Bi{constructor(){this._eventEmitters=[],typeof window<"u"&&typeof window.addEventListener<"u"&&(window.addEventListener("online",()=>this.trigger("online")),window.addEventListener("offline",()=>this.trigger("offline")))}on(e,n){this._eventEmitters.push({event:e,callback:n})}trigger(e){let n=[];e&&(n=this._eventEmitters.filter(r=>r.event===e)),n.forEach(r=>{r.callback()})}}const Fi=typeof global.WebSocket<"u"?global.WebSocket:require("ws");class zi{constructor(e){if(this.opts=e,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=e.protocol,this._version=e.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=e.subscriptions||[],this._netMonitor=e.netMonitor||new Bi,!e.url||typeof e.url!="string")throw new Error("Missing or invalid WebSocket url");this._url=e.url,this._netMonitor.on("online",()=>this._socketCreate())}set readyState(e){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(e){}get connecting(){return this.readyState===0}set connected(e){}get connected(){return this.readyState===1}set closing(e){}get closing(){return this.readyState===2}set closed(e){}get closed(){return this.readyState===3}open(){this._socketCreate()}close(){this._socketClose()}send(e,n,r){if(!n||typeof n!="string")throw new Error("Missing or invalid topic field");this._socketSend({topic:n,type:"pub",payload:e,silent:!!r})}subscribe(e){this._socketSend({topic:e,type:"sub",payload:"",silent:!0})}on(e,n){this._events.push({event:e,callback:n})}_socketCreate(){if(this._nextSocket)return;const e=Qi(this._url,this._protocol,this._version);if(this._nextSocket=new Fi(e),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=n=>this._socketReceive(n),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=n=>this._socketError(n),this._nextSocket.onclose=()=>{setTimeout(()=>{this._nextSocket=null,this._socketCreate()},1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(e){const n=JSON.stringify(e);this._socket&&this._socket.readyState===1?this._socket.send(n):(this._setToQueue(e),this._socketCreate())}async _socketReceive(e){let n;try{n=JSON.parse(e.data)}catch{return}if(this._socketSend({topic:n.topic,type:"ack",payload:"",silent:!0}),this._socket&&this._socket.readyState===1){const r=this._events.filter(o=>o.event==="message");r&&r.length&&r.forEach(o=>o.callback(n))}}_socketError(e){const n=this._events.filter(r=>r.event==="error");n&&n.length&&n.forEach(r=>r.callback(e))}_queueSubscriptions(){this._subscriptions.forEach(n=>this._queue.push({topic:n,type:"sub",payload:"",silent:!0})),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(e){this._queue.push(e)}_pushQueue(){this._queue.forEach(n=>this._socketSend(n)),this._queue=[]}}function Qi(t,e,n){var r,o;const c=(t.startsWith("https")?t.replace("https","wss"):t.startsWith("http")?t.replace("http","ws"):t).split("?"),u=rn()?{protocol:e,version:n,env:"browser",host:((r=Zt())===null||r===void 0?void 0:r.host)||""}:{protocol:e,version:n,env:((o=ve())===null||o===void 0?void 0:o.name)||""},d=pn(hn(c[1]||""),u);return c[0]+"?"+d}class Vi{constructor(){this._eventEmitters=[]}subscribe(e){this._eventEmitters.push(e)}unsubscribe(e){this._eventEmitters=this._eventEmitters.filter(n=>n.event!==e)}trigger(e){let n=[],r;yn(e)?r=e.method:B(e)||X(e)?r=`response:${e.id}`:Oe(e)?r=e.event:r="",r&&(n=this._eventEmitters.filter(o=>o.event===r)),(!n||!n.length)&&!wn(r)&&!Oe(r)&&(n=this._eventEmitters.filter(o=>o.event==="call_request")),n.forEach(o=>{if(X(e)){const i=new Error(e.error.message);o.callback(i,null)}else o.callback(null,e)})}}class Ji{constructor(e="walletconnect"){this.storageId=e}getSession(){let e=null;const n=Ye(this.storageId);return n&&gn(n)&&(e=n),e}setSession(e){return Ge(this.storageId,e),e}removeSession(){Ke(this.storageId)}}const Gi="walletconnect.org",Yi="abcdefghijklmnopqrstuvwxyz0123456789",kn=Yi.split("").map(t=>`https://${t}.bridge.walletconnect.org`);function Ki(t){let e=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0];return e=e.split(":")[0],e=e.split("?")[0],e}function Zi(t){return Ki(t).split(".").slice(-2).join(".")}function Xi(){return Math.floor(Math.random()*kn.length)}function es(){return kn[Xi()]}function ts(t){return Zi(t)===Gi}function ns(t){return ts(t)?es():t}class rs{constructor(e){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new Vi,this._clientMeta=Te()||e.connectorOpts.clientMeta||null,this._cryptoLib=e.cryptoLib,this._sessionStorage=e.sessionStorage||new Ji(e.connectorOpts.storageId),this._qrcodeModal=e.connectorOpts.qrcodeModal,this._qrcodeModalOptions=e.connectorOpts.qrcodeModalOptions,this._signingMethods=[...$e,...e.connectorOpts.signingMethods||[]],!e.connectorOpts.bridge&&!e.connectorOpts.uri&&!e.connectorOpts.session)throw new Error(uo);e.connectorOpts.bridge&&(this.bridge=ns(e.connectorOpts.bridge)),e.connectorOpts.uri&&(this.uri=e.connectorOpts.uri);const n=e.connectorOpts.session||this._getStorageSession();n&&(this.session=n),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=e.transport||new zi({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),e.connectorOpts.uri&&this._subscribeToSessionRequest(),e.pushServerOpts&&this._registerPushServer(e.pushServerOpts)}set bridge(e){!e||(this._bridge=e)}get bridge(){return this._bridge}set key(e){if(!e)return;const n=Gt(e);this._key=n}get key(){return this._key?Vt(this._key,!0):""}set clientId(e){!e||(this._clientId=e)}get clientId(){let e=this._clientId;return e||(e=this._clientId=ce()),this._clientId}set peerId(e){!e||(this._peerId=e)}get peerId(){return this._peerId}set clientMeta(e){}get clientMeta(){let e=this._clientMeta;return e||(e=this._clientMeta=Te()),e}set peerMeta(e){this._peerMeta=e}get peerMeta(){return this._peerMeta}set handshakeTopic(e){!e||(this._handshakeTopic=e)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(e){!e||(this._handshakeId=e)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(e){if(!e)return;const{handshakeTopic:n,bridge:r,key:o}=this._parseUri(e);this.handshakeTopic=n,this.bridge=r,this.key=o}set chainId(e){this._chainId=e}get chainId(){return this._chainId}set networkId(e){this._networkId=e}get networkId(){return this._networkId}set accounts(e){this._accounts=e}get accounts(){return this._accounts}set rpcUrl(e){this._rpcUrl=e}get rpcUrl(){return this._rpcUrl}set connected(e){}get connected(){return this._connected}set pending(e){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(e){!e||(this._connected=e.connected,this.accounts=e.accounts,this.chainId=e.chainId,this.bridge=e.bridge,this.key=e.key,this.clientId=e.clientId,this.clientMeta=e.clientMeta,this.peerId=e.peerId,this.peerMeta=e.peerMeta,this.handshakeId=e.handshakeId,this.handshakeTopic=e.handshakeTopic)}on(e,n){const r={event:e,callback:n};this._eventManager.subscribe(r)}off(e){this._eventManager.unsubscribe(e)}async createInstantRequest(e){this._key=await this._generateKey();const n=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(e)}]});this.handshakeId=n.id,this.handshakeTopic=ce(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",()=>{throw new Error(dt)});const r=()=>{this.killSession()};try{const o=await this._sendCallRequest(n);return o&&r(),o}catch(o){throw r(),o}}async connect(e){if(!this._qrcodeModal)throw new Error(fo);return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(e),new Promise(async(n,r)=>{this.on("modal_closed",()=>r(new Error(dt))),this.on("connect",(o,i)=>{if(o)return r(o);n(i.params[0])})}))}async createSession(e){if(this._connected)throw new Error(Ce);if(this.pending)return;this._key=await this._generateKey();const n=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:e&&e.chainId?e.chainId:null}]});this.handshakeId=n.id,this.handshakeTopic=ce(),this._sendSessionRequest(n,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(e){if(this._connected)throw new Error(Ce);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},r={id:this.handshakeId,jsonrpc:"2.0",result:n};this._sendResponse(r),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(e){if(this._connected)throw new Error(Ce);const n=e&&e.message?e.message:oo,r=this._formatResponse({id:this.handshakeId,error:{message:n}});this._sendResponse(r),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession()}updateSession(e){if(!this._connected)throw new Error(j);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},r=this._formatRequest({method:"wc_sessionUpdate",params:[n]});this._sendSessionRequest(r,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(e){const n=e?e.message:"Session Disconnected",r={approved:!1,chainId:null,networkId:null,accounts:null},o=this._formatRequest({method:"wc_sessionUpdate",params:[r]});await this._sendRequest(o),this._handleSessionDisconnect(n)}async sendTransaction(e){if(!this._connected)throw new Error(j);const n=e,r=this._formatRequest({method:"eth_sendTransaction",params:[n]});return await this._sendCallRequest(r)}async signTransaction(e){if(!this._connected)throw new Error(j);const n=e,r=this._formatRequest({method:"eth_signTransaction",params:[n]});return await this._sendCallRequest(r)}async signMessage(e){if(!this._connected)throw new Error(j);const n=this._formatRequest({method:"eth_sign",params:e});return await this._sendCallRequest(n)}async signPersonalMessage(e){if(!this._connected)throw new Error(j);const n=this._formatRequest({method:"personal_sign",params:e});return await this._sendCallRequest(n)}async signTypedData(e){if(!this._connected)throw new Error(j);const n=this._formatRequest({method:"eth_signTypedData",params:e});return await this._sendCallRequest(n)}async updateChain(e){if(!this._connected)throw new Error("Session currently disconnected");const n=this._formatRequest({method:"wallet_updateChain",params:[e]});return await this._sendCallRequest(n)}unsafeSend(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),new Promise((r,o)=>{this._subscribeToResponse(e.id,(i,c)=>{if(i){o(i);return}if(!c)throw new Error(io);r(c)})})}async sendCustomRequest(e,n){if(!this._connected)throw new Error(j);switch(e.method){case"eth_accounts":return this.accounts;case"eth_chainId":return Yt(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":e.params;break;case"personal_sign":e.params;break}const r=this._formatRequest(e);return await this._sendCallRequest(r,n)}approveRequest(e){if(B(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(so)}rejectRequest(e){if(X(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(ao)}transportClose(){this._transport.close()}async _sendRequest(e,n){const r=this._formatRequest(e),o=await this._encrypt(r),i=typeof(n==null?void 0:n.topic)<"u"?n.topic:this.peerId,c=JSON.stringify(o),u=typeof(n==null?void 0:n.forcePushNotification)<"u"?!n.forcePushNotification:bn(r);this._transport.send(c,i,u)}async _sendResponse(e){const n=await this._encrypt(e),r=this.peerId,o=JSON.stringify(n),i=!0;this._transport.send(o,r,i)}async _sendSessionRequest(e,n,r){this._sendRequest(e,r),this._subscribeToSessionResponse(e.id,n)}_sendCallRequest(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),this._subscribeToCallResponse(e.id)}_formatRequest(e){if(typeof e.method>"u")throw new Error(co);return{id:typeof e.id>"u"?an():e.id,jsonrpc:"2.0",method:e.method,params:typeof e.params>"u"?[]:e.params}}_formatResponse(e){if(typeof e.id>"u")throw new Error(lo);const n={id:e.id,jsonrpc:"2.0"};if(X(e)){const r=_n(e.error);return Object.assign(Object.assign(Object.assign({},n),e),{error:r})}else if(B(e))return Object.assign(Object.assign({},n),e);throw new Error(_t)}_handleSessionDisconnect(e){const n=e||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),Ke(Re)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(e,n){n?n.approved?(this._connected?(n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),n.peerId&&!this.peerId&&(this.peerId=n.peerId),n.peerMeta&&!this.peerMeta&&(this.peerMeta=n.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(e):this._handleSessionDisconnect(e)}async _handleIncomingMessages(e){if(![this.clientId,this.handshakeTopic].includes(e.topic))return;let r;try{r=JSON.parse(e.payload)}catch{return}const o=await this._decrypt(r);o&&this._eventManager.trigger(o)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(e,n){this.on(`response:${e}`,n)}_subscribeToSessionResponse(e,n){this._subscribeToResponse(e,(r,o)=>{if(r){this._handleSessionResponse(r.message);return}B(o)?this._handleSessionResponse(n,o.result):o.error&&o.error.message?this._handleSessionResponse(o.error.message):this._handleSessionResponse(n)})}_subscribeToCallResponse(e){return new Promise((n,r)=>{this._subscribeToResponse(e,(o,i)=>{if(o){r(o);return}B(i)?n(i.result):i.error&&i.error.message?r(i.error):r(new Error(_t))})})}_subscribeToInternalEvents(){this.on("display_uri",()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,()=>{this._eventManager.trigger({event:"modal_closed",params:[]})},this._qrcodeModalOptions)}),this.on("connect",()=>{this._qrcodeModal&&this._qrcodeModal.close()}),this.on("call_request_sent",(e,n)=>{const{request:r}=n.params[0];if(tn()&&this._signingMethods.includes(r.method)){const o=Ye(Re);o&&(window.location.href=o.href)}}),this.on("wc_sessionRequest",(e,n)=>{e&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:e.toString()}]}),this.handshakeId=n.id,this.peerId=n.params[0].peerId,this.peerMeta=n.params[0].peerMeta;const r=Object.assign(Object.assign({},n),{method:"session_request"});this._eventManager.trigger(r)}),this.on("wc_sessionUpdate",(e,n)=>{e&&this._handleSessionResponse(e.message),this._handleSessionResponse("Session disconnected",n.params[0])})}_initTransport(){this._transport.on("message",e=>this._handleIncomingMessages(e)),this._transport.on("open",()=>this._eventManager.trigger({event:"transport_open",params:[]})),this._transport.on("close",()=>this._eventManager.trigger({event:"transport_close",params:[]})),this._transport.on("error",()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]})),this._transport.open()}_formatUri(){const e=this.protocol,n=this.handshakeTopic,r=this.version,o=encodeURIComponent(this.bridge),i=this.key;return`${e}:${n}@${r}?bridge=${o}&key=${i}`}_parseUri(e){const n=vn(e);if(n.protocol===this.protocol){if(!n.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const r=n.handshakeTopic;if(!n.bridge)throw Error("Invalid or missing bridge url parameter value");const o=decodeURIComponent(n.bridge);if(!n.key)throw Error("Invalid or missing key parameter value");const i=n.key;return{handshakeTopic:r,bridge:o,key:i}}else throw new Error(_o)}async _generateKey(){return this._cryptoLib?await this._cryptoLib.generateKey():null}async _encrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.encrypt(e,n):null}async _decrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.decrypt(e,n):null}_getStorageSession(){let e=null;return this._sessionStorage&&(e=this._sessionStorage.getSession()),e}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(e){if(!e.url||typeof e.url!="string")throw Error("Invalid or missing pushServerOpts.url parameter value");if(!e.type||typeof e.type!="string")throw Error("Invalid or missing pushServerOpts.type parameter value");if(!e.token||typeof e.token!="string")throw Error("Invalid or missing pushServerOpts.token parameter value");const n={bridge:this.bridge,topic:this.clientId,type:e.type,token:e.token,peerName:"",language:e.language||""};this.on("connect",async(r,o)=>{if(r)throw r;if(e.peerMeta){const i=o.params[0].peerMeta.name;n.peerName=i}try{if(!(await(await fetch(`${e.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).json()).success)throw Error("Failed to register in Push Server")}catch{throw Error("Failed to register in Push Server")}})}}function os(t){return ne.getBrowerCrypto().getRandomValues(new Uint8Array(t))}const En=256,Cn=En,is=En,D="AES-CBC",ss=`SHA-${Cn}`,Ne="HMAC",as="encrypt",cs="decrypt",ls="sign",us="verify";function _s(t){return t===D?{length:Cn,name:D}:{hash:{name:ss},name:Ne}}function ds(t){return t===D?[as,cs]:[ls,us]}async function et(t,e=D){return ne.getSubtleCrypto().importKey("raw",t,_s(e),!0,ds(e))}async function fs(t,e,n){const r=ne.getSubtleCrypto(),o=await et(e,D),i=await r.encrypt({iv:t,name:D},o,n);return new Uint8Array(i)}async function hs(t,e,n){const r=ne.getSubtleCrypto(),o=await et(e,D),i=await r.decrypt({iv:t,name:D},o,n);return new Uint8Array(i)}async function ps(t,e){const n=ne.getSubtleCrypto(),r=await et(t,Ne),o=await n.sign({length:is,name:Ne},r,e);return new Uint8Array(o)}function ms(t,e,n){return fs(t,e,n)}function gs(t,e,n){return hs(t,e,n)}async function Sn(t,e){return await ps(t,e)}async function xn(t){const e=(t||256)/8,n=os(e);return Jt(G(n))}async function In(t,e){const n=P(t.data),r=P(t.iv),o=P(t.hmac),i=$(o,!1),c=Qt(n,r),u=await Sn(e,c),d=$(u,!1);return V(i)===V(d)}async function vs(t,e,n){const r=Q(_e(e)),o=n||await xn(128),i=Q(_e(o)),c=$(i,!1),u=JSON.stringify(t),d=Bt(u),y=await ms(i,r,d),g=$(y,!1),s=Qt(y,i),k=await Sn(r,s),b=$(k,!1);return{data:g,hmac:b,iv:c}}async function ys(t,e){const n=Q(_e(e));if(!n)throw new Error("Missing key: required for decryption");if(!await In(t,n))return null;const o=P(t.data),i=P(t.iv),c=await gs(i,n,o),u=Ht(c);let d;try{d=JSON.parse(u)}catch{return null}return d}const ws=Object.freeze(Object.defineProperty({__proto__:null,generateKey:xn,verifyHmac:In,encrypt:vs,decrypt:ys},Symbol.toStringTag,{value:"Module"}));class bs extends rs{constructor(e,n){super({cryptoLib:ws,connectorOpts:e,pushServerOpts:n})}}const ks=At(Wi);var Es=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||n.forEach(function(o){t.addRange(o)}),e&&e.focus()}},Cs=Es,ft={"text/plain":"Text","text/html":"Url",default:"Text"},Ss="Copy to clipboard: #{key}, Enter";function xs(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function Is(t,e){var n,r,o,i,c,u,d=!1;e||(e={}),n=e.debug||!1;try{o=Cs(),i=document.createRange(),c=document.getSelection(),u=document.createElement("span"),u.textContent=t,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(g){if(g.stopPropagation(),e.format)if(g.preventDefault(),typeof g.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var s=ft[e.format]||ft.default;window.clipboardData.setData(s,t)}else g.clipboardData.clearData(),g.clipboardData.setData(e.format,t);e.onCopy&&(g.preventDefault(),e.onCopy(g.clipboardData))}),document.body.appendChild(u),i.selectNodeContents(u),c.addRange(i);var y=document.execCommand("copy");if(!y)throw new Error("copy command was unsuccessful");d=!0}catch(g){n&&console.error("unable to copy using execCommand: ",g),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),d=!0}catch(s){n&&console.error("unable to copy using clipboardData: ",s),n&&console.error("falling back to prompt"),r=xs("message"in e?e.message:Ss),window.prompt(r,t)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(i):c.removeAllRanges()),u&&document.body.removeChild(u),o()}return d}var Rs=Is,oe,v,Rn,H,ht,Tn,Me,On,z={},Nn=[],Ts=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,we=Array.isArray;function q(t,e){for(var n in e)t[n]=e[n];return t}function Mn(t){var e=t.parentNode;e&&e.removeChild(t)}function M(t,e,n){var r,o,i,c={};for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:c[i]=e[i];if(arguments.length>2&&(c.children=arguments.length>3?oe.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)c[i]===void 0&&(c[i]=t.defaultProps[i]);return K(t,c,r,o,null)}function K(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o==null?++Rn:o};return o==null&&v.vnode!=null&&v.vnode(i),i}function Ln(){return{current:null}}function L(t){return t.children}function N(t,e){this.props=t,this.context=e}function ee(t,e){if(e==null)return t.__?ee(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?ee(t):null}function qn(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return qn(t)}}function Le(t){(!t.__d&&(t.__d=!0)&&H.push(t)&&!de.__r++||ht!==v.debounceRendering)&&((ht=v.debounceRendering)||Tn)(de)}function de(){var t,e,n,r,o,i,c,u,d;for(H.sort(Me);t=H.shift();)t.__d&&(e=H.length,r=void 0,o=void 0,i=void 0,u=(c=(n=t).__v).__e,(d=n.__P)&&(r=[],o=[],(i=q({},c)).__v=c.__v+1,tt(d,c,i,n.__n,d.ownerSVGElement!==void 0,c.__h!=null?[u]:null,r,u==null?ee(c):u,c.__h,o),Pn(r,c,o),c.__e!=u&&qn(c)),H.length>e&&H.sort(Me));de.__r=0}function An(t,e,n,r,o,i,c,u,d,y,g){var s,k,b,m,E,R,a,l,f,_=0,h=r&&r.__k||Nn,C=h.length,w=C,x=e.length;for(n.__k=[],s=0;s<x;s++)(m=n.__k[s]=(m=e[s])==null||typeof m=="boolean"||typeof m=="function"?null:typeof m=="string"||typeof m=="number"||typeof m=="bigint"?K(null,m,null,null,m):we(m)?K(L,{children:m},null,null,null):m.__b>0?K(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)!=null?(m.__=n,m.__b=n.__b+1,(l=Os(m,h,a=s+_,w))===-1?b=z:(b=h[l]||z,h[l]=void 0,w--),tt(t,m,b,o,i,c,u,d,y,g),E=m.__e,(k=m.ref)&&b.ref!=k&&(b.ref&&nt(b.ref,null,m),g.push(k,m.__c||E,m)),E!=null&&(R==null&&(R=E),(f=b===z||b.__v===null)?l==-1&&_--:l!==a&&(l===a+1?_++:l>a?w>x-a?_+=l-a:_--:_=l<a&&l==a-1?l-a:0),a=s+_,typeof m.type!="function"||l===a&&b.__k!==m.__k?typeof m.type=="function"||l===a&&!f?m.__d!==void 0?(d=m.__d,m.__d=void 0):d=E.nextSibling:d=$n(t,E,d):d=Un(m,d,t),typeof n.type=="function"&&(n.__d=d))):(b=h[s])&&b.key==null&&b.__e&&(b.__e==d&&(d=ee(b)),qe(b,b,!1),h[s]=null);for(n.__e=R,s=C;s--;)h[s]!=null&&(typeof n.type=="function"&&h[s].__e!=null&&h[s].__e==n.__d&&(n.__d=h[s].__e.nextSibling),qe(h[s],h[s]))}function Un(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e=typeof r.type=="function"?Un(r,e,n):$n(n,r.__e,e));return e}function A(t,e){return e=e||[],t==null||typeof t=="boolean"||(we(t)?t.some(function(n){A(n,e)}):e.push(t)),e}function $n(t,e,n){return n==null||n.parentNode!==t?t.insertBefore(e,null):e==n&&e.parentNode!=null||t.insertBefore(e,n),e.nextSibling}function Os(t,e,n,r){var o=t.key,i=t.type,c=n-1,u=n+1,d=e[n];if(d===null||d&&o==d.key&&i===d.type)return n;if(r>(d!=null?1:0))for(;c>=0||u<e.length;){if(c>=0){if((d=e[c])&&o==d.key&&i===d.type)return c;c--}if(u<e.length){if((d=e[u])&&o==d.key&&i===d.type)return u;u++}}return-1}function Ns(t,e,n,r,o){var i;for(i in n)i==="children"||i==="key"||i in e||fe(t,i,null,n[i],r);for(i in e)o&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===e[i]||fe(t,i,e[i],n[i],r)}function pt(t,e,n){e[0]==="-"?t.setProperty(e,n==null?"":n):t[e]=n==null?"":typeof n!="number"||Ts.test(e)?n:n+"px"}function fe(t,e,n,r,o){var i;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||pt(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||pt(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?gt:mt,i):t.removeEventListener(e,i?gt:mt,i);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n==null?"":n;break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function mt(t){return this.l[t.type+!1](v.event?v.event(t):t)}function gt(t){return this.l[t.type+!0](v.event?v.event(t):t)}function tt(t,e,n,r,o,i,c,u,d,y){var g,s,k,b,m,E,R,a,l,f,_,h,C,w,x,I=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=e.__e=n.__e,e.__h=null,i=[u]),(g=v.__b)&&g(e);e:if(typeof I=="function")try{if(a=e.props,l=(g=I.contextType)&&r[g.__c],f=g?l?l.props.value:g.__:r,n.__c?R=(s=e.__c=n.__c).__=s.__E:("prototype"in I&&I.prototype.render?e.__c=s=new I(a,f):(e.__c=s=new N(a,f),s.constructor=I,s.render=Ls),l&&l.sub(s),s.props=a,s.state||(s.state={}),s.context=f,s.__n=r,k=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),I.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=q({},s.__s)),q(s.__s,I.getDerivedStateFromProps(a,s.__s))),b=s.props,m=s.state,s.__v=e,k)I.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(I.getDerivedStateFromProps==null&&a!==b&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(a,f),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(a,s.__s,f)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(s.props=a,s.state=s.__s,s.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(O){O&&(O.__=e)}),_=0;_<s._sb.length;_++)s.__h.push(s._sb[_]);s._sb=[],s.__h.length&&c.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(a,s.__s,f),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(b,m,E)})}if(s.context=f,s.props=a,s.__P=t,s.__e=!1,h=v.__r,C=0,"prototype"in I&&I.prototype.render){for(s.state=s.__s,s.__d=!1,h&&h(e),g=s.render(s.props,s.state,s.context),w=0;w<s._sb.length;w++)s.__h.push(s._sb[w]);s._sb=[]}else do s.__d=!1,h&&h(e),g=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++C<25);s.state=s.__s,s.getChildContext!=null&&(r=q(q({},r),s.getChildContext())),k||s.getSnapshotBeforeUpdate==null||(E=s.getSnapshotBeforeUpdate(b,m)),An(t,we(x=g!=null&&g.type===L&&g.key==null?g.props.children:g)?x:[x],e,n,r,o,i,c,u,d,y),s.base=e.__e,e.__h=null,s.__h.length&&c.push(s),R&&(s.__E=s.__=null)}catch(O){e.__v=null,(d||i!=null)&&(e.__e=u,e.__h=!!d,i[i.indexOf(u)]=null),v.__e(O,e,n)}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Ms(n.__e,e,n,r,o,i,c,d,y);(g=v.diffed)&&g(e)}function Pn(t,e,n){for(var r=0;r<n.length;r++)nt(n[r],n[++r],n[++r]);v.__c&&v.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){v.__e(i,o.__v)}})}function Ms(t,e,n,r,o,i,c,u,d){var y,g,s,k=n.props,b=e.props,m=e.type,E=0;if(m==="svg"&&(o=!0),i!=null){for(;E<i.length;E++)if((y=i[E])&&"setAttribute"in y==!!m&&(m?y.localName===m:y.nodeType===3)){t=y,i[E]=null;break}}if(t==null){if(m===null)return document.createTextNode(b);t=o?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,b.is&&b),i=null,u=!1}if(m===null)k===b||u&&t.data===b||(t.data=b);else{if(i=i&&oe.call(t.childNodes),g=(k=n.props||z).dangerouslySetInnerHTML,s=b.dangerouslySetInnerHTML,!u){if(i!=null)for(k={},E=0;E<t.attributes.length;E++)k[t.attributes[E].name]=t.attributes[E].value;(s||g)&&(s&&(g&&s.__html==g.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(Ns(t,b,k,o,u),s)e.__k=[];else if(An(t,we(E=e.props.children)?E:[E],e,n,r,o&&m!=="foreignObject",i,c,i?i[0]:n.__k&&ee(n,0),u,d),i!=null)for(E=i.length;E--;)i[E]!=null&&Mn(i[E]);u||("value"in b&&(E=b.value)!==void 0&&(E!==t.value||m==="progress"&&!E||m==="option"&&E!==k.value)&&fe(t,"value",E,k.value,!1),"checked"in b&&(E=b.checked)!==void 0&&E!==t.checked&&fe(t,"checked",E,k.checked,!1))}return t}function nt(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){v.__e(r,n)}}function qe(t,e,n){var r,o;if(v.unmount&&v.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||nt(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){v.__e(i,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&qe(r[o],e,n||typeof t.type!="function");n||t.__e==null||Mn(t.__e),t.__=t.__e=t.__d=void 0}function Ls(t,e,n){return this.constructor(t,n)}function te(t,e,n){var r,o,i,c;v.__&&v.__(t,e),o=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],c=[],tt(e,t=(!r&&n||e).__k=M(L,null,[t]),o||z,z,e.ownerSVGElement!==void 0,!r&&n?[n]:o?null:e.firstChild?oe.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r,c),Pn(i,t,c)}function Dn(t,e){te(t,e,Dn)}function qs(t,e,n){var r,o,i,c,u=q({},t.props);for(i in t.type&&t.type.defaultProps&&(c=t.type.defaultProps),e)i=="key"?r=e[i]:i=="ref"?o=e[i]:u[i]=e[i]===void 0&&c!==void 0?c[i]:e[i];return arguments.length>2&&(u.children=arguments.length>3?oe.call(arguments,2):n),K(t.type,u,r||t.key,o||t.ref,null)}function jn(t,e){var n={__c:e="__cC"+On++,__:t,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&o.some(function(u){u.__e=!0,Le(u)})},this.sub=function(c){o.push(c);var u=c.componentWillUnmount;c.componentWillUnmount=function(){o.splice(o.indexOf(c),1),u&&u.call(c)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}oe=Nn.slice,v={__e:function(t,e,n,r){for(var o,i,c;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),c=o.__d),c)return o.__E=o}catch(u){t=u}throw t}},Rn=0,N.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=q({},this.state),typeof t=="function"&&(t=t(q({},n),this.props)),t&&q(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Le(this))},N.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Le(this))},N.prototype.render=L,H=[],Tn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Me=function(t,e){return t.__v.__b-e.__v.__b},de.__r=0,On=0;var U,S,Se,vt,J=0,Hn=[],le=[],yt=v.__b,wt=v.__r,bt=v.diffed,kt=v.__c,Et=v.unmount;function W(t,e){v.__h&&v.__h(S,t,J||e),J=0;var n=S.__H||(S.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:le}),n.__[t]}function be(t){return J=1,rt(Jn,t)}function rt(t,e,n){var r=W(U++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):Jn(void 0,e),function(u){var d=r.__N?r.__N[0]:r.__[0],y=r.t(d,u);d!==y&&(r.__N=[y,r.__[1]],r.__c.setState({}))}],r.__c=S,!S.u)){var o=function(u,d,y){if(!r.__c.__H)return!0;var g=r.__c.__H.__.filter(function(k){return k.__c});if(g.every(function(k){return!k.__N}))return!i||i.call(this,u,d,y);var s=!1;return g.forEach(function(k){if(k.__N){var b=k.__[0];k.__=k.__N,k.__N=void 0,b!==k.__[0]&&(s=!0)}}),!(!s&&r.__c.props===u)&&(!i||i.call(this,u,d,y))};S.u=!0;var i=S.shouldComponentUpdate,c=S.componentWillUpdate;S.componentWillUpdate=function(u,d,y){if(this.__e){var g=i;i=void 0,o(u,d,y),i=g}c&&c.call(this,u,d,y)},S.shouldComponentUpdate=o}return r.__N||r.__}function ot(t,e){var n=W(U++,3);!v.__s&&it(n.__H,e)&&(n.__=t,n.i=e,S.__H.__h.push(n))}function ie(t,e){var n=W(U++,4);!v.__s&&it(n.__H,e)&&(n.__=t,n.i=e,S.__h.push(n))}function Wn(t){return J=5,ke(function(){return{current:t}},[])}function Bn(t,e,n){J=6,ie(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function ke(t,e){var n=W(U++,7);return it(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Fn(t,e){return J=8,ke(function(){return t},e)}function zn(t){var e=S.context[t.__c],n=W(U++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(S)),e.props.value):t.__}function Qn(t,e){v.useDebugValue&&v.useDebugValue(e?e(t):t)}function As(t){var e=W(U++,10),n=be();return e.__=t,S.componentDidCatch||(S.componentDidCatch=function(r,o){e.__&&e.__(r,o),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Vn(){var t=W(U++,11);if(!t.__){for(var e=S.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function Us(){for(var t;t=Hn.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ue),t.__H.__h.forEach(Ae),t.__H.__h=[]}catch(e){t.__H.__h=[],v.__e(e,t.__v)}}v.__b=function(t){S=null,yt&&yt(t)},v.__r=function(t){wt&&wt(t),U=0;var e=(S=t.__c).__H;e&&(Se===S?(e.__h=[],S.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=le,n.__N=n.i=void 0})):(e.__h.forEach(ue),e.__h.forEach(Ae),e.__h=[],U=0)),Se=S},v.diffed=function(t){bt&&bt(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Hn.push(e)!==1&&vt===v.requestAnimationFrame||((vt=v.requestAnimationFrame)||$s)(Us)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==le&&(n.__=n.__V),n.i=void 0,n.__V=le})),Se=S=null},v.__c=function(t,e){e.some(function(n){try{n.__h.forEach(ue),n.__h=n.__h.filter(function(r){return!r.__||Ae(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],v.__e(r,n.__v)}}),kt&&kt(t,e)},v.unmount=function(t){Et&&Et(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ue(r)}catch(o){e=o}}),n.__H=void 0,e&&v.__e(e,n.__v))};var Ct=typeof requestAnimationFrame=="function";function $s(t){var e,n=function(){clearTimeout(r),Ct&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);Ct&&(e=requestAnimationFrame(n))}function ue(t){var e=S,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),S=e}function Ae(t){var e=S;t.__c=t.__(),S=e}function it(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Jn(t,e){return typeof e=="function"?e(t):e}function Gn(t,e){for(var n in e)t[n]=e[n];return t}function Ue(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function xe(t,e){return t===e&&(t!==0||1/t==1/e)||t!=t&&e!=e}function he(t){this.props=t}function Yn(t,e){function n(o){var i=this.props.ref,c=i==o.ref;return!c&&i&&(i.call?i(null):i.current=null),e?!e(this.props,o)||!c:Ue(this.props,o)}function r(o){return this.shouldComponentUpdate=n,M(t,o)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(he.prototype=new N).isPureReactComponent=!0,he.prototype.shouldComponentUpdate=function(t,e){return Ue(this.props,t)||Ue(this.state,e)};var St=v.__b;v.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),St&&St(t)};var Ps=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Kn(t){function e(n){var r=Gn({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=Ps,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var xt=function(t,e){return t==null?null:A(A(t).map(e))},Zn={map:xt,forEach:xt,count:function(t){return t?A(t).length:0},only:function(t){var e=A(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:A},Ds=v.__e;v.__e=function(t,e,n,r){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e)}Ds(t,e,n,r)};var It=v.unmount;function Xn(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=Gn({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return Xn(r,e,n)})),t}function er(t,e,n){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return er(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function Z(){this.__u=0,this.t=null,this.__b=null}function tr(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function nr(t){var e,n,r;function o(i){if(e||(e=t()).then(function(c){n=c.default||c},function(c){r=c}),r)throw r;if(!n)throw e;return M(n,i)}return o.displayName="Lazy",o.__f=!0,o}function F(){this.u=null,this.o=null}v.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),It&&It(t)},(Z.prototype=new N).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=tr(r.__v),i=!1,c=function(){i||(i=!0,n.__R=null,o?o(u):u())};n.__R=c;var u=function(){if(!--r.__u){if(r.state.__a){var y=r.state.__a;r.__v.__k[0]=er(y,y.__c.__P,y.__c.__O)}var g;for(r.setState({__a:r.__b=null});g=r.t.pop();)g.forceUpdate()}},d=e.__h===!0;r.__u++||d||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(c,c)},Z.prototype.componentWillUnmount=function(){this.t=[]},Z.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Xn(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__a&&M(L,null,t.fallback);return o&&(o.__h=null),[M(L,null,e.__a?null:t.children),o]};var Rt=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function js(t){return this.getChildContext=function(){return t.context},t.children}function Hs(t){var e=this,n=t.i;e.componentWillUnmount=function(){te(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),te(M(js,{context:e.context},t.__v),e.l)}function rr(t,e){var n=M(Hs,{__v:t,i:e});return n.containerInfo=e,n}(F.prototype=new N).__a=function(t){var e=this,n=tr(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),Rt(e,t,r)):o()};n?n(i):i()}},F.prototype.render=function(t){this.u=null,this.o=new Map;var e=A(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Rt(t,n,e)})};var or=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Ws=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Bs=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Fs=/[A-Z0-9]/g,zs=typeof document<"u",Qs=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function ir(t,e,n){return e.__k==null&&(e.textContent=""),te(t,e),typeof n=="function"&&n(),t?t.__c:null}function sr(t,e,n){return Dn(t,e),typeof n=="function"&&n(),t?t.__c:null}N.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(N.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Tt=v.event;function Vs(){}function Js(){return this.cancelBubble}function Gs(){return this.defaultPrevented}v.event=function(t){return Tt&&(t=Tt(t)),t.persist=Vs,t.isPropagationStopped=Js,t.isDefaultPrevented=Gs,t.nativeEvent=t};var st,Ys={enumerable:!1,configurable:!0,get:function(){return this.class}},Ot=v.vnode;v.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,o={};for(var i in n){var c=n[i];if(!(i==="value"&&"defaultValue"in n&&c==null||zs&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var u=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&c===!0?c="":u==="ondoubleclick"?i="ondblclick":u!=="onchange"||r!=="input"&&r!=="textarea"||Qs(n.type)?u==="onfocus"?i="onfocusin":u==="onblur"?i="onfocusout":Bs.test(i)?i=u:r.indexOf("-")===-1&&Ws.test(i)?i=i.replace(Fs,"-$&").toLowerCase():c===null&&(c=void 0):u=i="oninput",u==="oninput"&&o[i=u]&&(i="oninputCapture"),o[i]=c}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=A(n.children).forEach(function(d){d.props.selected=o.value.indexOf(d.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=A(n.children).forEach(function(d){d.props.selected=o.multiple?o.defaultValue.indexOf(d.props.value)!=-1:o.defaultValue==d.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",Ys)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),e.props=o}(t),t.$$typeof=or,Ot&&Ot(t)};var Nt=v.__r;v.__r=function(t){Nt&&Nt(t),st=t.__c};var Mt=v.diffed;v.diffed=function(t){Mt&&Mt(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),st=null};var ar={ReactCurrentDispatcher:{current:{readContext:function(t){return st.__n[t.__c].props.value}}}},Ks="17.0.2";function cr(t){return M.bind(null,t)}function se(t){return!!t&&t.$$typeof===or}function lr(t){return se(t)&&t.type===L}function ur(t){return se(t)?qs.apply(null,arguments):t}function _r(t){return!!t.__k&&(te(null,t),!0)}function dr(t){return t&&(t.base||t.nodeType===1&&t)||null}var fr=function(t,e){return t(e)},hr=function(t,e){return t(e)},pr=L;function at(t){t()}function mr(t){return t}function gr(){return[!1,at]}var vr=ie,yr=se;function wr(t,e){var n=e(),r=be({h:{__:n,v:e}}),o=r[0].h,i=r[1];return ie(function(){o.__=n,o.v=e,xe(o.__,e())||i({h:o})},[t,n,e]),ot(function(){return xe(o.__,o.v())||i({h:o}),t(function(){xe(o.__,o.v())||i({h:o})})},[t]),n}var Zs={useState:be,useId:Vn,useReducer:rt,useEffect:ot,useLayoutEffect:ie,useInsertionEffect:vr,useTransition:gr,useDeferredValue:mr,useSyncExternalStore:wr,startTransition:at,useRef:Wn,useImperativeHandle:Bn,useMemo:ke,useCallback:Fn,useContext:zn,useDebugValue:Qn,version:"17.0.2",Children:Zn,render:ir,hydrate:sr,unmountComponentAtNode:_r,createPortal:rr,createElement:M,createContext:jn,createFactory:cr,cloneElement:ur,createRef:Ln,Fragment:L,isValidElement:se,isElement:yr,isFragment:lr,findDOMNode:dr,Component:N,PureComponent:he,memo:Yn,forwardRef:Kn,flushSync:hr,unstable_batchedUpdates:fr,StrictMode:pr,Suspense:Z,SuspenseList:F,lazy:nr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ar};const Xs=Object.freeze(Object.defineProperty({__proto__:null,Children:Zn,PureComponent:he,StrictMode:pr,Suspense:Z,SuspenseList:F,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ar,cloneElement:ur,createFactory:cr,createPortal:rr,default:Zs,findDOMNode:dr,flushSync:hr,forwardRef:Kn,hydrate:sr,isElement:yr,isFragment:lr,isValidElement:se,lazy:nr,memo:Yn,render:ir,startTransition:at,unmountComponentAtNode:_r,unstable_batchedUpdates:fr,useDeferredValue:mr,useInsertionEffect:vr,useSyncExternalStore:wr,useTransition:gr,version:Ks,Component:N,Fragment:L,createContext:jn,createElement:M,createRef:Ln,useCallback:Fn,useContext:zn,useDebugValue:Qn,useEffect:ot,useErrorBoundary:As,useId:Vn,useImperativeHandle:Bn,useLayoutEffect:ie,useMemo:ke,useReducer:rt,useRef:Wn,useState:be},Symbol.toStringTag,{value:"Module"})),ea=At(Xs);function br(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var T=ks,kr=br(ro),ta=br(Rs),p=ea;function na(t){kr.toString(t,{type:"terminal"}).then(console.log)}var ra=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function oa(t,e){try{var n=t()}catch(r){return e(r)}return n&&n.then?n.then(void 0,e):n}var ia="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",sa="WalletConnect",aa=300,ca="rgb(64, 153, 255)",Er="walletconnect-wrapper",Lt="walletconnect-style-sheet",Cr="walletconnect-qrcode-modal",la="walletconnect-qrcode-close",Sr="walletconnect-qrcode-text",ua="walletconnect-connect-button";function _a(t){return p.createElement("div",{className:"walletconnect-modal__header"},p.createElement("img",{src:ia,className:"walletconnect-modal__headerLogo"}),p.createElement("p",null,sa),p.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:t.onClose},p.createElement("div",{id:la,className:"walletconnect-modal__close__icon"},p.createElement("div",{className:"walletconnect-modal__close__line1"}),p.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function da(t){return p.createElement("a",{className:"walletconnect-connect__button",href:t.href,id:ua+"-"+t.name,onClick:t.onClick,rel:"noopener noreferrer",style:{backgroundColor:t.color},target:"_blank"},t.name)}var fa="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";function ha(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick;return p.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},p.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),p.createElement("div",{className:"walletconnect-modal__base__row__right"},p.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),p.createElement("img",{src:fa,className:"walletconnect-modal__base__row__right__caret"})))}function pa(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick,c=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return p.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},p.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),p.createElement("div",{style:{fontSize:c},className:"walletconnect-connect__button__text"},r))}var ma=5,Ie=12;function ga(t){var e=T.isAndroid(),n=p.useState(""),r=n[0],o=n[1],i=p.useState(""),c=i[0],u=i[1],d=p.useState(1),y=d[0],g=d[1],s=c?t.links.filter(function(_){return _.name.toLowerCase().includes(c.toLowerCase())}):t.links,k=t.errorMessage,b=c||s.length>ma,m=Math.ceil(s.length/Ie),E=[(y-1)*Ie+1,y*Ie],R=s.length?s.filter(function(_,h){return h+1>=E[0]&&h+1<=E[1]}):[],a=!e&&m>1,l=void 0;function f(_){o(_.target.value),clearTimeout(l),_.target.value?l=setTimeout(function(){u(_.target.value),g(1)},1e3):(o(""),u(""),g(1))}return p.createElement("div",null,p.createElement("p",{id:Sr,className:"walletconnect-qrcode__text"},e?t.text.connect_mobile_wallet:t.text.choose_preferred_wallet),!e&&p.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:f}),p.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(e?"__android":b&&s.length?"__wrap":"")},e?p.createElement(da,{name:t.text.connect,color:ca,href:t.uri,onClick:p.useCallback(function(){T.saveMobileLinkInfo({name:"Unknown",href:t.uri})},[])}):R.length?R.map(function(_){var h=_.color,C=_.name,w=_.shortName,x=_.logo,I=T.formatIOSMobile(t.uri,_),O=p.useCallback(function(){T.saveMobileLinkInfo({name:C,href:I})},[R]);return b?p.createElement(pa,{color:h,href:I,name:w||C,logo:x,onClick:O}):p.createElement(ha,{color:h,href:I,name:C,logo:x,onClick:O})}):p.createElement(p.Fragment,null,p.createElement("p",null,k.length?t.errorMessage:!!t.links.length&&!s.length?t.text.no_wallets_found:t.text.loading))),a&&p.createElement("div",{className:"walletconnect-modal__footer"},Array(m).fill(0).map(function(_,h){var C=h+1,w=y===C;return p.createElement("a",{style:{margin:"auto 10px",fontWeight:w?"bold":"normal"},onClick:function(){return g(C)}},C)})))}function va(t){var e=!!t.message.trim();return p.createElement("div",{className:"walletconnect-qrcode__notification"+(e?" notification__show":"")},t.message)}var ya=function(t){try{var e="";return Promise.resolve(kr.toString(t,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(e=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),e})}catch(n){return Promise.reject(n)}};function wa(t){var e=p.useState(""),n=e[0],r=e[1],o=p.useState(""),i=o[0],c=o[1];p.useEffect(function(){try{return Promise.resolve(ya(t.uri)).then(function(d){c(d)})}catch(d){Promise.reject(d)}},[]);var u=function(){var d=ta(t.uri);d?(r(t.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return p.createElement("div",null,p.createElement("p",{id:Sr,className:"walletconnect-qrcode__text"},t.text.scan_qrcode_with_wallet),p.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),p.createElement("div",{className:"walletconnect-modal__footer"},p.createElement("a",{onClick:u},t.text.copy_to_clipboard)),p.createElement(va,{message:n}))}function ba(t){var e=T.isAndroid(),n=T.isMobile(),r=n?t.qrcodeModalOptions&&t.qrcodeModalOptions.mobileLinks?t.qrcodeModalOptions.mobileLinks:void 0:t.qrcodeModalOptions&&t.qrcodeModalOptions.desktopLinks?t.qrcodeModalOptions.desktopLinks:void 0,o=p.useState(!1),i=o[0],c=o[1],u=p.useState(!1),d=u[0],y=u[1],g=p.useState(!n),s=g[0],k=g[1],b={mobile:n,text:t.text,uri:t.uri,qrcodeModalOptions:t.qrcodeModalOptions},m=p.useState(""),E=m[0],R=m[1],a=p.useState(!1),l=a[0],f=a[1],_=p.useState([]),h=_[0],C=_[1],w=p.useState(""),x=w[0],I=w[1],O=function(){d||i||r&&!r.length||h.length>0||p.useEffect(function(){var Tr=function(){try{if(e)return Promise.resolve();c(!0);var Ee=oa(function(){var Y=t.qrcodeModalOptions&&t.qrcodeModalOptions.registryUrl?t.qrcodeModalOptions.registryUrl:T.getWalletRegistryUrl();return Promise.resolve(fetch(Y)).then(function(Or){return Promise.resolve(Or.json()).then(function(Nr){var Mr=Nr.listings,Lr=n?"mobile":"desktop",ae=T.getMobileLinkRegistry(T.formatMobileRegistry(Mr,Lr),r);c(!1),y(!0),I(ae.length?"":t.text.no_supported_wallets),C(ae);var ct=ae.length===1;ct&&(R(T.formatIOSMobile(t.uri,ae[0])),k(!0)),f(ct)})})},function(Y){c(!1),y(!0),I(t.text.something_went_wrong),console.error(Y)});return Promise.resolve(Ee&&Ee.then?Ee.then(function(){}):void 0)}catch(Y){return Promise.reject(Y)}};Tr()})};O();var Rr=n?s:!s;return p.createElement("div",{id:Cr,className:"walletconnect-qrcode__base animated fadeIn"},p.createElement("div",{className:"walletconnect-modal__base"},p.createElement(_a,{onClose:t.onClose}),l&&s?p.createElement("div",{className:"walletconnect-modal__single_wallet"},p.createElement("a",{onClick:function(){return T.saveMobileLinkInfo({name:h[0].name,href:E})},href:E,rel:"noopener noreferrer",target:"_blank"},t.text.connect_with+" "+(l?h[0].name:"")+" \u203A")):e||i||!i&&h.length?p.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(Rr?" right__selected":"")},p.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?p.createElement(p.Fragment,null,p.createElement("a",{onClick:function(){return k(!1),O()}},t.text.mobile),p.createElement("a",{onClick:function(){return k(!0)}},t.text.qrcode)):p.createElement(p.Fragment,null,p.createElement("a",{onClick:function(){return k(!0)}},t.text.qrcode),p.createElement("a",{onClick:function(){return k(!1),O()}},t.text.desktop))):null,p.createElement("div",null,s||!e&&!i&&!h.length?p.createElement(wa,Object.assign({},b)):p.createElement(ga,Object.assign({},b,{links:h,errorMessage:x})))))}var ka={choose_preferred_wallet:"W\xE4hle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterst\xFCtzten Wallet",no_wallets_found:"keine Wallet gefunden"},Ea={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},Ca={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera m\xF3vil",scan_qrcode_with_wallet:"Escanea el c\xF3digo QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"C\xF3digo QR",mobile:"M\xF3vil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo sali\xF3 mal",no_supported_wallets:"Todav\xEDa no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},Sa={choose_preferred_wallet:"Choisissez votre portefeuille pr\xE9f\xE9r\xE9",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copi\xE9!",connect_with:"Connectez-vous \xE0 l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourn\xE9",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouv\xE9"},xa={choose_preferred_wallet:"\uC6D0\uD558\uB294 \uC9C0\uAC11\uC744 \uC120\uD0DD\uD558\uC138\uC694",connect_mobile_wallet:"\uBAA8\uBC14\uC77C \uC9C0\uAC11\uACFC \uC5F0\uACB0",scan_qrcode_with_wallet:"WalletConnect \uC9C0\uC6D0 \uC9C0\uAC11\uC5D0\uC11C QR\uCF54\uB4DC\uB97C \uC2A4\uCE94\uD558\uC138\uC694",connect:"\uC5F0\uACB0",qrcode:"QR \uCF54\uB4DC",mobile:"\uBAA8\uBC14\uC77C",desktop:"\uB370\uC2A4\uD06C\uD0D1",copy_to_clipboard:"\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC",copied_to_clipboard:"\uD074\uB9BD\uBCF4\uB4DC\uC5D0 \uBCF5\uC0AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4!",connect_with:"\uC640 \uC5F0\uACB0\uD558\uB2E4",loading:"\uB85C\uB4DC \uC911...",something_went_wrong:"\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.",no_supported_wallets:"\uC544\uC9C1 \uC9C0\uC6D0\uB418\uB294 \uC9C0\uAC11\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",no_wallets_found:"\uC9C0\uAC11\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"},Ia={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se \xE0 carteira m\xF3vel",scan_qrcode_with_wallet:"Ler o c\xF3digo QR com uma carteira compat\xEDvel com WalletConnect",connect:"Conectar",qrcode:"C\xF3digo QR",mobile:"M\xF3vel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda n\xE3o h\xE1 carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},Ra={choose_preferred_wallet:"\u9009\u62E9\u4F60\u7684\u94B1\u5305",connect_mobile_wallet:"\u8FDE\u63A5\u81F3\u79FB\u52A8\u7AEF\u94B1\u5305",scan_qrcode_with_wallet:"\u4F7F\u7528\u517C\u5BB9 WalletConnect \u7684\u94B1\u5305\u626B\u63CF\u4E8C\u7EF4\u7801",connect:"\u8FDE\u63A5",qrcode:"\u4E8C\u7EF4\u7801",mobile:"\u79FB\u52A8",desktop:"\u684C\u9762",copy_to_clipboard:"\u590D\u5236\u5230\u526A\u8D34\u677F",copied_to_clipboard:"\u590D\u5236\u5230\u526A\u8D34\u677F\u6210\u529F\uFF01",connect_with:"\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8FDE\u63A5",loading:"\u6B63\u5728\u52A0\u8F7D...",something_went_wrong:"\u51FA\u4E86\u95EE\u9898",no_supported_wallets:"\u76EE\u524D\u8FD8\u6CA1\u6709\u652F\u6301\u7684\u94B1\u5305",no_wallets_found:"\u6CA1\u6709\u627E\u5230\u94B1\u5305"},Ta={choose_preferred_wallet:"\u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u062E\u0648\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F",connect_mobile_wallet:"\u0628\u0647 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0645\u0648\u0628\u0627\u06CC\u0644 \u0648\u0635\u0644 \u0634\u0648\u06CC\u062F",scan_qrcode_with_wallet:"\u06A9\u062F QR \u0631\u0627 \u0628\u0627 \u06CC\u06A9 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0633\u0627\u0632\u06AF\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06A9\u0646 \u06A9\u0646\u06CC\u062F",connect:"\u0627\u062A\u0635\u0627\u0644",qrcode:"\u06A9\u062F QR",mobile:"\u0633\u06CC\u0627\u0631",desktop:"\u062F\u0633\u06A9\u062A\u0627\u067E",copy_to_clipboard:"\u06A9\u067E\u06CC \u0628\u0647 \u06A9\u0644\u06CC\u067E \u0628\u0648\u0631\u062F",copied_to_clipboard:"\u062F\u0631 \u06A9\u0644\u06CC\u067E \u0628\u0648\u0631\u062F \u06A9\u067E\u06CC \u0634\u062F!",connect_with:"\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627",loading:"...\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",something_went_wrong:"\u0645\u0634\u06A9\u0644\u06CC \u067E\u06CC\u0634 \u0622\u0645\u062F",no_supported_wallets:"\u0647\u0646\u0648\u0632 \u0647\u06CC\u0686 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0634\u062F\u0647 \u0627\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F",no_wallets_found:"\u0647\u06CC\u0686 \u06A9\u06CC\u0641 \u067E\u0648\u0644\u06CC \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F"},qt={de:ka,en:Ea,es:Ca,fr:Sa,ko:xa,pt:Ia,zh:Ra,fa:Ta};function Oa(){var t=T.getDocumentOrThrow(),e=t.getElementById(Lt);e&&t.head.removeChild(e);var n=t.createElement("style");n.setAttribute("id",Lt),n.innerText=ra,t.head.appendChild(n)}function Na(){var t=T.getDocumentOrThrow(),e=t.createElement("div");return e.setAttribute("id",Er),t.body.appendChild(e),e}function xr(){var t=T.getDocumentOrThrow(),e=t.getElementById(Cr);e&&(e.className=e.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=t.getElementById(Er);n&&t.body.removeChild(n)},aa))}function Ma(t){return function(){xr(),t&&t()}}function La(){var t=T.getNavigatorOrThrow().language.split("-")[0]||"en";return qt[t]||qt.en}function qa(t,e,n){Oa();var r=Na();p.render(p.createElement(ba,{text:La(),uri:t,onClose:Ma(e),qrcodeModalOptions:n}),r)}function Aa(){xr()}var Ir=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function Ua(t,e,n){console.log(t),Ir()?na(t):qa(t,e,n)}function $a(){Ir()||Aa()}var Pa={open:Ua,close:$a},Da=Pa;class ja extends to{constructor(e){super(),this.events=new Ut.exports,this.accounts=[],this.chainId=1,this.pending=!1,this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModalOptions=void 0,this.opts=e,this.chainId=(e==null?void 0:e.chainId)||this.chainId,this.wc=this.register(e)}get connected(){return typeof this.wc<"u"&&this.wc.connected}get connecting(){return this.pending}get connector(){return this.wc=this.register(this.opts),this.wc}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e){if(this.connected){this.onOpen();return}return new Promise((n,r)=>{this.on("error",o=>{r(o)}),this.on("open",()=>{n()}),this.create(e)})}async close(){typeof this.wc>"u"||(this.wc.connected&&this.wc.killSession(),this.onClose())}async send(e){this.wc=this.register(this.opts),this.connected||await this.open(),this.sendPayload(e).then(n=>this.events.emit("payload",n)).catch(n=>this.events.emit("payload",lt(e.id,n.message)))}register(e){if(this.wc)return this.wc;this.opts=e||this.opts,this.bridge=e!=null&&e.connector?e.connector.bridge:(e==null?void 0:e.bridge)||"https://bridge.walletconnect.org",this.qrcode=typeof(e==null?void 0:e.qrcode)>"u"||e.qrcode!==!1,this.chainId=typeof(e==null?void 0:e.chainId)<"u"?e.chainId:this.chainId,this.qrcodeModalOptions=e==null?void 0:e.qrcodeModalOptions;const n={bridge:this.bridge,qrcodeModal:this.qrcode?Da:void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:e==null?void 0:e.storageId,signingMethods:e==null?void 0:e.signingMethods,clientMeta:e==null?void 0:e.clientMeta};if(this.wc=typeof(e==null?void 0:e.connector)<"u"?e.connector:new bs(n),typeof this.wc>"u")throw new Error("Failed to register WalletConnect connector");return this.wc.accounts.length&&(this.accounts=this.wc.accounts),this.wc.chainId&&(this.chainId=this.wc.chainId),this.registerConnectorEvents(),this.wc}onOpen(e){this.pending=!1,e&&(this.wc=e),this.events.emit("open")}onClose(){this.pending=!1,this.wc&&(this.wc=void 0),this.events.emit("close")}onError(e,n="Failed or Rejected Request",r=-32e3){const o={id:e.id,jsonrpc:e.jsonrpc,error:{code:r,message:n}};return this.events.emit("payload",o),o}create(e){this.wc=this.register(this.opts),this.chainId=e||this.chainId,!(this.connected||this.pending)&&(this.pending=!0,this.registerConnectorEvents(),this.wc.createSession({chainId:this.chainId}).then(()=>this.events.emit("created")).catch(n=>this.events.emit("error",n)))}registerConnectorEvents(){this.wc=this.register(this.opts),this.wc.on("connect",e=>{var n,r;if(e){this.events.emit("error",e);return}this.accounts=((n=this.wc)===null||n===void 0?void 0:n.accounts)||[],this.chainId=((r=this.wc)===null||r===void 0?void 0:r.chainId)||this.chainId,this.onOpen()}),this.wc.on("disconnect",e=>{if(e){this.events.emit("error",e);return}this.onClose()}),this.wc.on("modal_closed",()=>{this.events.emit("error",new Error("User closed modal"))}),this.wc.on("session_update",(e,n)=>{const{accounts:r,chainId:o}=n.params[0];(!this.accounts||r&&this.accounts!==r)&&(this.accounts=r,this.events.emit("accountsChanged",r)),(!this.chainId||o&&this.chainId!==o)&&(this.chainId=o,this.events.emit("chainChanged",o))})}async sendPayload(e){this.wc=this.register(this.opts);try{const n=await this.wc.unsafeSend(e);return this.sanitizeResponse(n)}catch(n){return this.onError(e,n.message)}}sanitizeResponse(e){return typeof e.error<"u"&&typeof e.error.code>"u"?lt(e.id,e.error.message,e.error.data):e}}class Fa{constructor(e){this.events=new Ut.exports,this.rpc={infuraId:e==null?void 0:e.infuraId,custom:e==null?void 0:e.rpc},this.signer=new ut(new ja(e));const n=this.signer.connection.chainId||(e==null?void 0:e.chainId)||1;this.http=this.setHttpProvider(n),this.registerEventListeners()}get connected(){return this.signer.connection.connected}get connector(){return this.signer.connection.connector}get accounts(){return this.signer.connection.accounts}get chainId(){return this.signer.connection.chainId}get rpcUrl(){var e;return((e=this.http)===null||e===void 0?void 0:e.connection).url||""}async request(e){switch(e.method){case"eth_requestAccounts":return await this.connect(),this.signer.connection.accounts;case"eth_accounts":return this.signer.connection.accounts;case"eth_chainId":return this.signer.connection.chainId}if($e.includes(e.method))return this.signer.request(e);if(typeof this.http>"u")throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);return this.http.request(e)}sendAsync(e,n){this.request(e).then(r=>n(null,r)).catch(r=>n(r,void 0))}async enable(){return await this.request({method:"eth_requestAccounts"})}async connect(){this.signer.connection.connected||await this.signer.connect()}async disconnect(){this.signer.connection.connected&&await this.signer.disconnect()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}removeListener(e,n){this.events.removeListener(e,n)}off(e,n){this.events.off(e,n)}get isWalletConnect(){return!0}registerEventListeners(){this.signer.connection.on("accountsChanged",e=>{this.events.emit("accountsChanged",e)}),this.signer.connection.on("chainChanged",e=>{this.http=this.setHttpProvider(e),this.events.emit("chainChanged",e)}),this.signer.on("disconnect",()=>{this.events.emit("disconnect")})}setHttpProvider(e){const n=ln(e,this.rpc);return typeof n>"u"?void 0:new ut(new no(n))}}export{Fa as default};
