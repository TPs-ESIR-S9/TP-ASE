"use strict";(()=>{var Ww=Object.create;var Ud=Object.defineProperty;var Bw=Object.getOwnPropertyDescriptor;var zw=Object.getOwnPropertyNames;var Vw=Object.getPrototypeOf,Xw=Object.prototype.hasOwnProperty;var xy=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var H=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Yw=(t,e)=>{for(var r in e)Ud(t,r,{get:e[r],enumerable:!0})},Jw=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of zw(e))!Xw.call(t,i)&&i!==r&&Ud(t,i,{get:()=>e[i],enumerable:!(n=Bw(e,i))||n.enumerable});return t};var de=(t,e,r)=>(r=t!=null?Ww(Vw(t)):{},Jw(e||!t||!t.__esModule?Ud(r,"default",{value:t,enumerable:!0}):r,t));var Kn=H(jd=>{"use strict";Object.defineProperty(jd,"__esModule",{value:!0});var qd;function Gd(){if(qd===void 0)throw new Error("No runtime abstraction layer installed");return qd}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");qd=r}t.install=e})(Gd||(Gd={}));jd.default=Gd});var Hd=H(Ta=>{"use strict";Object.defineProperty(Ta,"__esModule",{value:!0});Ta.Disposable=void 0;var Qw;(function(t){function e(r){return{dispose:r}}t.create=e})(Qw=Ta.Disposable||(Ta.Disposable={}))});var to=H(eo=>{"use strict";Object.defineProperty(eo,"__esModule",{value:!0});eo.Emitter=eo.Event=void 0;var Zw=Kn(),ek;(function(t){let e={dispose(){}};t.None=function(){return e}})(ek=eo.Event||(eo.Event={}));var Kd=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let i=0,o=this._callbacks.length;i<o;i++)if(this._callbacks[i]===e)if(this._contexts[i]===r){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),i=this._contexts.slice(0);for(let o=0,s=n.length;o<s;o++)try{r.push(n[o].apply(i[o],e))}catch(a){(0,Zw.default)().console.error(a)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},Bl=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new Kd),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),i.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};eo.Emitter=Bl;Bl._noop=function(){}});var by=H(zl=>{"use strict";Object.defineProperty(zl,"__esModule",{value:!0});zl.AbstractMessageBuffer=void 0;var tk=13,rk=10,nk=`\r
`,Wd=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(){if(this._chunks.length===0)return;let e=0,r=0,n=0,i=0;e:for(;r<this._chunks.length;){let l=this._chunks[r];for(n=0;n<l.length;){switch(l[n]){case tk:switch(e){case 0:e=1;break;case 2:e=3;break;default:e=0}break;case rk:switch(e){case 1:e=2;break;case 3:e=4,n++;break e;default:e=0}break;default:e=0}n++}i+=l.byteLength,r++}if(e!==4)return;let o=this._read(i+n),s=new Map,a=this.toString(o,"ascii").split(nk);if(a.length<2)return s;for(let l=0;l<a.length-2;l++){let c=a[l],u=c.indexOf(":");if(u===-1)throw new Error("Message header must separate key and value using :");let f=c.substr(0,u),m=c.substr(u+1).trim();s.set(f,m)}return s}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let o=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(o)}if(this._chunks[0].byteLength>e){let o=this._chunks[0],s=this.asNative(o,e);return this._chunks[0]=o.slice(e),this._totalLength-=e,s}let r=this.allocNative(e),n=0,i=0;for(;e>0;){let o=this._chunks[i];if(o.byteLength>e){let s=o.slice(0,e);r.set(s,n),n+=e,this._chunks[i]=o.slice(e),this._totalLength-=e,e-=e}else r.set(o,n),n+=o.byteLength,this._chunks.shift(),this._totalLength-=o.byteLength,e-=o.byteLength}return r}};zl.AbstractMessageBuffer=Wd});var wy=H(Xd=>{"use strict";Object.defineProperty(Xd,"__esModule",{value:!0});var Sy=Kn(),Lo=Hd(),ik=to(),ok=by(),Vl=class t extends ok.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return t.emptyBuffer}fromString(e,r){return new TextEncoder().encode(e)}toString(e,r){return r==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e:e.slice(0,r)}allocNative(e){return new Uint8Array(e)}};Vl.emptyBuffer=new Uint8Array(0);var Bd=class{constructor(e){this.socket=e,this._onData=new ik.Emitter,this._messageListener=r=>{r.data.arrayBuffer().then(i=>{this._onData.fire(new Uint8Array(i))},()=>{(0,Sy.default)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),Lo.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Lo.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Lo.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}},zd=class{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),Lo.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Lo.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Lo.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,r){if(typeof e=="string"){if(r!==void 0&&r!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${r}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}},sk=new TextEncoder,Ay=Object.freeze({messageBuffer:Object.freeze({create:t=>new Vl(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(sk.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new Bd(t),asWritableStream:t=>new zd(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function Vd(){return Ay}(function(t){function e(){Sy.default.install(Ay)}t.install=e})(Vd||(Vd={}));Xd.default=Vd});var Mo=H(tr=>{"use strict";Object.defineProperty(tr,"__esModule",{value:!0});tr.stringArray=tr.array=tr.func=tr.error=tr.number=tr.string=tr.boolean=void 0;function ak(t){return t===!0||t===!1}tr.boolean=ak;function ky(t){return typeof t=="string"||t instanceof String}tr.string=ky;function lk(t){return typeof t=="number"||t instanceof Number}tr.number=lk;function ck(t){return t instanceof Error}tr.error=ck;function uk(t){return typeof t=="function"}tr.func=uk;function Cy(t){return Array.isArray(t)}tr.array=Cy;function fk(t){return Cy(t)&&t.every(e=>ky(e))}tr.stringArray=fk});var vp=H(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});V.Message=V.NotificationType9=V.NotificationType8=V.NotificationType7=V.NotificationType6=V.NotificationType5=V.NotificationType4=V.NotificationType3=V.NotificationType2=V.NotificationType1=V.NotificationType0=V.NotificationType=V.RequestType9=V.RequestType8=V.RequestType7=V.RequestType6=V.RequestType5=V.RequestType4=V.RequestType3=V.RequestType2=V.RequestType1=V.RequestType=V.RequestType0=V.AbstractMessageSignature=V.ParameterStructures=V.ResponseError=V.ErrorCodes=void 0;var ro=Mo(),Ey;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(Ey=V.ErrorCodes||(V.ErrorCodes={}));var Yd=class t extends Error{constructor(e,r,n){super(r),this.code=ro.number(e)?e:Ey.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,t.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};V.ResponseError=Yd;var Rr=class t{constructor(e){this.kind=e}static is(e){return e===t.auto||e===t.byName||e===t.byPosition}toString(){return this.kind}};V.ParameterStructures=Rr;Rr.auto=new Rr("auto");Rr.byPosition=new Rr("byPosition");Rr.byName=new Rr("byName");var Xe=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return Rr.auto}};V.AbstractMessageSignature=Xe;var Jd=class extends Xe{constructor(e){super(e,0)}};V.RequestType0=Jd;var Qd=class extends Xe{constructor(e,r=Rr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};V.RequestType=Qd;var Zd=class extends Xe{constructor(e,r=Rr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};V.RequestType1=Zd;var ep=class extends Xe{constructor(e){super(e,2)}};V.RequestType2=ep;var tp=class extends Xe{constructor(e){super(e,3)}};V.RequestType3=tp;var rp=class extends Xe{constructor(e){super(e,4)}};V.RequestType4=rp;var np=class extends Xe{constructor(e){super(e,5)}};V.RequestType5=np;var ip=class extends Xe{constructor(e){super(e,6)}};V.RequestType6=ip;var op=class extends Xe{constructor(e){super(e,7)}};V.RequestType7=op;var sp=class extends Xe{constructor(e){super(e,8)}};V.RequestType8=sp;var ap=class extends Xe{constructor(e){super(e,9)}};V.RequestType9=ap;var lp=class extends Xe{constructor(e,r=Rr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};V.NotificationType=lp;var cp=class extends Xe{constructor(e){super(e,0)}};V.NotificationType0=cp;var up=class extends Xe{constructor(e,r=Rr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};V.NotificationType1=up;var fp=class extends Xe{constructor(e){super(e,2)}};V.NotificationType2=fp;var dp=class extends Xe{constructor(e){super(e,3)}};V.NotificationType3=dp;var pp=class extends Xe{constructor(e){super(e,4)}};V.NotificationType4=pp;var mp=class extends Xe{constructor(e){super(e,5)}};V.NotificationType5=mp;var hp=class extends Xe{constructor(e){super(e,6)}};V.NotificationType6=hp;var yp=class extends Xe{constructor(e){super(e,7)}};V.NotificationType7=yp;var gp=class extends Xe{constructor(e){super(e,8)}};V.NotificationType8=gp;var Tp=class extends Xe{constructor(e){super(e,9)}};V.NotificationType9=Tp;var dk;(function(t){function e(i){let o=i;return o&&ro.string(o.method)&&(ro.string(o.id)||ro.number(o.id))}t.isRequest=e;function r(i){let o=i;return o&&ro.string(o.method)&&i.id===void 0}t.isNotification=r;function n(i){let o=i;return o&&(o.result!==void 0||!!o.error)&&(ro.string(o.id)||ro.number(o.id)||o.id===null)}t.isResponse=n})(dk=V.Message||(V.Message={}))});var xp=H(Wn=>{"use strict";var _y;Object.defineProperty(Wn,"__esModule",{value:!0});Wn.LRUCache=Wn.LinkedMap=Wn.Touch=void 0;var ur;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(ur=Wn.Touch||(Wn.Touch={}));var Xl=class{constructor(){this[_y]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(e){return this._map.has(e)}get(e,r=ur.None){let n=this._map.get(e);if(n)return r!==ur.None&&this.touch(n,r),n.value}set(e,r,n=ur.None){let i=this._map.get(e);if(i)i.value=r,n!==ur.None&&this.touch(i,n);else{switch(i={key:e,value:r,next:void 0,previous:void 0},n){case ur.None:this.addItemLast(i);break;case ur.First:this.addItemFirst(i);break;case ur.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(e,i),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,i=this._head;for(;i;){if(r?e.bind(r)(i.value,i.key,this):e(i.value,i.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.key,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:r.value,done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let i={value:[r.key,r.value],done:!1};return r=r.next,i}else return{value:void 0,done:!0}}};return n}[(_y=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==ur.First&&r!==ur.Last)){if(r===ur.First){if(e===this._head)return;let n=e.next,i=e.previous;e===this._tail?(i.next=void 0,this._tail=i):(n.previous=i,i.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===ur.Last){if(e===this._tail)return;let n=e.next,i=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=i,i.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};Wn.LinkedMap=Xl;var Rp=class extends Xl{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=ur.AsNew){return super.get(e,r)}peek(e){return super.get(e,ur.None)}set(e,r){return super.set(e,r,ur.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};Wn.LRUCache=Rp});var wp=H(no=>{"use strict";Object.defineProperty(no,"__esModule",{value:!0});no.CancellationTokenSource=no.CancellationToken=void 0;var pk=Kn(),mk=Mo(),bp=to(),Sp;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:bp.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:bp.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||mk.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(Sp=no.CancellationToken||(no.CancellationToken={}));var hk=Object.freeze(function(t,e){let r=(0,pk.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),Yl=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?hk:(this._emitter||(this._emitter=new bp.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},Ap=class{get token(){return this._token||(this._token=new Yl),this._token}cancel(){this._token?this._token.cancel():this._token=Sp.Cancelled}dispose(){this._token?this._token instanceof Yl&&this._token.dispose():this._token=Sp.None}};no.CancellationTokenSource=Ap});var Ny=H(Bn=>{"use strict";Object.defineProperty(Bn,"__esModule",{value:!0});Bn.ReadableStreamMessageReader=Bn.AbstractMessageReader=Bn.MessageReader=void 0;var Cp=Kn(),Fo=Mo(),kp=to(),yk;(function(t){function e(r){let n=r;return n&&Fo.func(n.listen)&&Fo.func(n.dispose)&&Fo.func(n.onError)&&Fo.func(n.onClose)&&Fo.func(n.onPartialMessage)}t.is=e})(yk=Bn.MessageReader||(Bn.MessageReader={}));var Jl=class{constructor(){this.errorEmitter=new kp.Emitter,this.closeEmitter=new kp.Emitter,this.partialMessageEmitter=new kp.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${Fo.string(e.message)?e.message:"unknown"}`)}};Bn.AbstractMessageReader=Jl;var Ep;(function(t){function e(r){let n,i,o,s=new Map,a,l=new Map;if(r===void 0||typeof r=="string")n=r??"utf-8";else{if(n=r.charset??"utf-8",r.contentDecoder!==void 0&&(o=r.contentDecoder,s.set(o.name,o)),r.contentDecoders!==void 0)for(let c of r.contentDecoders)s.set(c.name,c);if(r.contentTypeDecoder!==void 0&&(a=r.contentTypeDecoder,l.set(a.name,a)),r.contentTypeDecoders!==void 0)for(let c of r.contentTypeDecoders)l.set(c.name,c)}return a===void 0&&(a=(0,Cp.default)().applicationJson.decoder,l.set(a.name,a)),{charset:n,contentDecoder:o,contentDecoders:s,contentTypeDecoder:a,contentTypeDecoders:l}}t.fromOptions=e})(Ep||(Ep={}));var _p=class extends Jl{constructor(e,r){super(),this.readable=e,this.options=Ep.fromOptions(r),this.buffer=(0,Cp.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let i=this.buffer.tryReadHeaders();if(!i)return;let o=i.get("Content-Length");if(!o)throw new Error("Header must provide a Content-Length property.");let s=parseInt(o);if(isNaN(s))throw new Error("Content-Length value must be a number.");this.nextMessageLength=s}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1;let n;this.options.contentDecoder!==void 0?n=this.options.contentDecoder.decode(r):n=Promise.resolve(r),n.then(i=>{this.options.contentTypeDecoder.decode(i,this.options).then(o=>{this.callback(o)},o=>{this.fireError(o)})},i=>{this.fireError(i)})}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,Cp.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};Bn.ReadableStreamMessageReader=_p});var $y=H(Ql=>{"use strict";Object.defineProperty(Ql,"__esModule",{value:!0});Ql.Semaphore=void 0;var gk=Kn(),Np=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,gk.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};Ql.Semaphore=Np});var Oy=H(zn=>{"use strict";Object.defineProperty(zn,"__esModule",{value:!0});zn.WriteableStreamMessageWriter=zn.AbstractMessageWriter=zn.MessageWriter=void 0;var Py=Kn(),va=Mo(),Tk=$y(),Iy=to(),vk="Content-Length: ",Dy=`\r
`,Rk;(function(t){function e(r){let n=r;return n&&va.func(n.dispose)&&va.func(n.onClose)&&va.func(n.onError)&&va.func(n.write)}t.is=e})(Rk=zn.MessageWriter||(zn.MessageWriter={}));var Zl=class{constructor(){this.errorEmitter=new Iy.Emitter,this.closeEmitter=new Iy.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${va.string(e.message)?e.message:"unknown"}`)}};zn.AbstractMessageWriter=Zl;var $p;(function(t){function e(r){return r===void 0||typeof r=="string"?{charset:r??"utf-8",contentTypeEncoder:(0,Py.default)().applicationJson.encoder}:{charset:r.charset??"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:r.contentTypeEncoder??(0,Py.default)().applicationJson.encoder}}t.fromOptions=e})($p||($p={}));var Pp=class extends Zl{constructor(e,r){super(),this.writable=e,this.options=$p.fromOptions(r),this.errorCount=0,this.writeSemaphore=new Tk.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let i=[];return i.push(vk,n.byteLength.toString(),Dy),i.push(Dy),this.doWrite(e,i,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(i){return this.handleError(i,e),Promise.reject(i)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};zn.WriteableStreamMessageWriter=Pp});var Gy=H(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.createMessageConnection=Y.ConnectionOptions=Y.CancellationStrategy=Y.CancellationSenderStrategy=Y.CancellationReceiverStrategy=Y.ConnectionStrategy=Y.ConnectionError=Y.ConnectionErrors=Y.LogTraceNotification=Y.SetTraceNotification=Y.TraceFormat=Y.TraceValues=Y.Trace=Y.NullLogger=Y.ProgressType=Y.ProgressToken=void 0;var Ly=Kn(),$t=Mo(),Z=vp(),My=xp(),Ra=to(),Ip=wp(),ba;(function(t){t.type=new Z.NotificationType("$/cancelRequest")})(ba||(ba={}));var Fy;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})(Fy=Y.ProgressToken||(Y.ProgressToken={}));var xa;(function(t){t.type=new Z.NotificationType("$/progress")})(xa||(xa={}));var Dp=class{constructor(){}};Y.ProgressType=Dp;var Op;(function(t){function e(r){return $t.func(r)}t.is=e})(Op||(Op={}));Y.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var _e;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})(_e=Y.Trace||(Y.Trace={}));var xk;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(xk=Y.TraceValues||(Y.TraceValues={}));(function(t){function e(n){if(!$t.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})(_e=Y.Trace||(Y.Trace={}));var tn;(function(t){t.Text="text",t.JSON="json"})(tn=Y.TraceFormat||(Y.TraceFormat={}));(function(t){function e(r){return $t.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})(tn=Y.TraceFormat||(Y.TraceFormat={}));var Uy;(function(t){t.type=new Z.NotificationType("$/setTrace")})(Uy=Y.SetTraceNotification||(Y.SetTraceNotification={}));var Lp;(function(t){t.type=new Z.NotificationType("$/logTrace")})(Lp=Y.LogTraceNotification||(Y.LogTraceNotification={}));var ec;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(ec=Y.ConnectionErrors||(Y.ConnectionErrors={}));var Uo=class t extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,t.prototype)}};Y.ConnectionError=Uo;var qy;(function(t){function e(r){let n=r;return n&&$t.func(n.cancelUndispatched)}t.is=e})(qy=Y.ConnectionStrategy||(Y.ConnectionStrategy={}));var Mp;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new Ip.CancellationTokenSource}});function e(r){let n=r;return n&&$t.func(n.createCancellationTokenSource)}t.is=e})(Mp=Y.CancellationReceiverStrategy||(Y.CancellationReceiverStrategy={}));var Fp;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(ba.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&$t.func(n.sendCancellation)&&$t.func(n.cleanup)}t.is=e})(Fp=Y.CancellationSenderStrategy||(Y.CancellationSenderStrategy={}));var Up;(function(t){t.Message=Object.freeze({receiver:Mp.Message,sender:Fp.Message});function e(r){let n=r;return n&&Mp.is(n.receiver)&&Fp.is(n.sender)}t.is=e})(Up=Y.CancellationStrategy||(Y.CancellationStrategy={}));var bk;(function(t){function e(r){let n=r;return n&&(Up.is(n.cancellationStrategy)||qy.is(n.connectionStrategy))}t.is=e})(bk=Y.ConnectionOptions||(Y.ConnectionOptions={}));var rn;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(rn||(rn={}));function Sk(t,e,r,n){let i=r!==void 0?r:Y.NullLogger,o=0,s=0,a=0,l="2.0",c,u=new Map,f,m=new Map,T=new Map,S,A=new My.LinkedMap,N=new Map,k=new Set,v=new Map,g=_e.Off,_=tn.Text,D,X=rn.New,ge=new Ra.Emitter,Ee=new Ra.Emitter,Ht=new Ra.Emitter,vt=new Ra.Emitter,M=new Ra.Emitter,w=n&&n.cancellationStrategy?n.cancellationStrategy:Up.Message;function q(R){if(R===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+R.toString()}function j(R){return R===null?"res-unknown-"+(++a).toString():"res-"+R.toString()}function le(){return"not-"+(++s).toString()}function ee(R,I){Z.Message.isRequest(I)?R.set(q(I.id),I):Z.Message.isResponse(I)?R.set(j(I.id),I):R.set(le(),I)}function Q(R){}function Rt(){return X===rn.Listening}function ct(){return X===rn.Closed}function me(){return X===rn.Disposed}function Er(){(X===rn.New||X===rn.Listening)&&(X=rn.Closed,Ee.fire(void 0))}function Gn(R){ge.fire([R,void 0,void 0])}function ya(R){ge.fire(R)}t.onClose(Er),t.onError(Gn),e.onClose(Er),e.onError(ya);function Yi(){S||A.size===0||(S=(0,Ly.default)().timer.setImmediate(()=>{S=void 0,cr()}))}function cr(){if(A.size===0)return;let R=A.shift();try{Z.Message.isRequest(R)?xt(R):Z.Message.isNotification(R)?vn(R):Z.Message.isResponse(R)?Zt(R):Kt(R)}finally{Yi()}}let Io=R=>{try{if(Z.Message.isNotification(R)&&R.method===ba.type.method){let I=R.params.id,F=q(I),B=A.get(F);if(Z.Message.isRequest(B)){let Oe=n?.connectionStrategy,Je=Oe&&Oe.cancelUndispatched?Oe.cancelUndispatched(B,Q):void 0;if(Je&&(Je.error!==void 0||Je.result!==void 0)){A.delete(F),v.delete(I),Je.id=B.id,vr(Je,R.method,Date.now()),e.write(Je).catch(()=>i.error("Sending response for canceled message failed."));return}}let De=v.get(I);if(De!==void 0){De.cancel(),Ti(R);return}else k.add(I)}ee(A,R)}finally{Yi()}};function xt(R){if(me())return;function I(ue,Ue,Te){let ht={jsonrpc:l,id:R.id};ue instanceof Z.ResponseError?ht.error=ue.toJson():ht.result=ue===void 0?null:ue,vr(ht,Ue,Te),e.write(ht).catch(()=>i.error("Sending response failed."))}function F(ue,Ue,Te){let ht={jsonrpc:l,id:R.id,error:ue.toJson()};vr(ht,Ue,Te),e.write(ht).catch(()=>i.error("Sending response failed."))}function B(ue,Ue,Te){ue===void 0&&(ue=null);let ht={jsonrpc:l,id:R.id,result:ue};vr(ht,Ue,Te),e.write(ht).catch(()=>i.error("Sending response failed."))}Ji(R);let De=u.get(R.method),Oe,Je;De&&(Oe=De.type,Je=De.handler);let bt=Date.now();if(Je||c){let ue=R.id??String(Date.now()),Ue=w.receiver.createCancellationTokenSource(ue);R.id!==null&&k.has(R.id)&&Ue.cancel(),R.id!==null&&v.set(ue,Ue);try{let Te;if(Je)if(R.params===void 0){if(Oe!==void 0&&Oe.numberOfParams!==0){F(new Z.ResponseError(Z.ErrorCodes.InvalidParams,`Request ${R.method} defines ${Oe.numberOfParams} params but received none.`),R.method,bt);return}Te=Je(Ue.token)}else if(Array.isArray(R.params)){if(Oe!==void 0&&Oe.parameterStructures===Z.ParameterStructures.byName){F(new Z.ResponseError(Z.ErrorCodes.InvalidParams,`Request ${R.method} defines parameters by name but received parameters by position`),R.method,bt);return}Te=Je(...R.params,Ue.token)}else{if(Oe!==void 0&&Oe.parameterStructures===Z.ParameterStructures.byPosition){F(new Z.ResponseError(Z.ErrorCodes.InvalidParams,`Request ${R.method} defines parameters by position but received parameters by name`),R.method,bt);return}Te=Je(R.params,Ue.token)}else c&&(Te=c(R.method,R.params,Ue.token));let ht=Te;Te?ht.then?ht.then(er=>{v.delete(ue),I(er,R.method,bt)},er=>{v.delete(ue),er instanceof Z.ResponseError?F(er,R.method,bt):er&&$t.string(er.message)?F(new Z.ResponseError(Z.ErrorCodes.InternalError,`Request ${R.method} failed with message: ${er.message}`),R.method,bt):F(new Z.ResponseError(Z.ErrorCodes.InternalError,`Request ${R.method} failed unexpectedly without providing any details.`),R.method,bt)}):(v.delete(ue),I(Te,R.method,bt)):(v.delete(ue),B(Te,R.method,bt))}catch(Te){v.delete(ue),Te instanceof Z.ResponseError?I(Te,R.method,bt):Te&&$t.string(Te.message)?F(new Z.ResponseError(Z.ErrorCodes.InternalError,`Request ${R.method} failed with message: ${Te.message}`),R.method,bt):F(new Z.ResponseError(Z.ErrorCodes.InternalError,`Request ${R.method} failed unexpectedly without providing any details.`),R.method,bt)}}else F(new Z.ResponseError(Z.ErrorCodes.MethodNotFound,`Unhandled method ${R.method}`),R.method,bt)}function Zt(R){if(!me())if(R.id===null)R.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(R.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let I=R.id,F=N.get(I);if(Ld(R,F),F!==void 0){N.delete(I);try{if(R.error){let B=R.error;F.reject(new Z.ResponseError(B.code,B.message,B.data))}else if(R.result!==void 0)F.resolve(R.result);else throw new Error("Should never happen.")}catch(B){B.message?i.error(`Response handler '${F.method}' failed with message: ${B.message}`):i.error(`Response handler '${F.method}' failed unexpectedly.`)}}}}function vn(R){if(me())return;let I,F;if(R.method===ba.type.method){let B=R.params.id;k.delete(B),Ti(R);return}else{let B=m.get(R.method);B&&(F=B.handler,I=B.type)}if(F||f)try{if(Ti(R),F)if(R.params===void 0)I!==void 0&&I.numberOfParams!==0&&I.parameterStructures!==Z.ParameterStructures.byName&&i.error(`Notification ${R.method} defines ${I.numberOfParams} params but received none.`),F();else if(Array.isArray(R.params)){let B=R.params;R.method===xa.type.method&&B.length===2&&Fy.is(B[0])?F({token:B[0],value:B[1]}):(I!==void 0&&(I.parameterStructures===Z.ParameterStructures.byName&&i.error(`Notification ${R.method} defines parameters by name but received parameters by position`),I.numberOfParams!==R.params.length&&i.error(`Notification ${R.method} defines ${I.numberOfParams} params but received ${B.length} arguments`)),F(...B))}else I!==void 0&&I.parameterStructures===Z.ParameterStructures.byPosition&&i.error(`Notification ${R.method} defines parameters by position but received parameters by name`),F(R.params);else f&&f(R.method,R.params)}catch(B){B.message?i.error(`Notification handler '${R.method}' failed with message: ${B.message}`):i.error(`Notification handler '${R.method}' failed unexpectedly.`)}else Ht.fire(R)}function Kt(R){if(!R){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(R,null,4)}`);let I=R;if($t.string(I.id)||$t.number(I.id)){let F=I.id,B=N.get(F);B&&B.reject(new Error("The received response has neither a result nor an error property."))}}function ut(R){if(R!=null)switch(g){case _e.Verbose:return JSON.stringify(R,null,4);case _e.Compact:return JSON.stringify(R);default:return}}function qr(R){if(!(g===_e.Off||!D))if(_===tn.Text){let I;(g===_e.Verbose||g===_e.Compact)&&R.params&&(I=`Params: ${ut(R.params)}

`),D.log(`Sending request '${R.method} - (${R.id})'.`,I)}else vi("send-request",R)}function _r(R){if(!(g===_e.Off||!D))if(_===tn.Text){let I;(g===_e.Verbose||g===_e.Compact)&&(R.params?I=`Params: ${ut(R.params)}

`:I=`No parameters provided.

`),D.log(`Sending notification '${R.method}'.`,I)}else vi("send-notification",R)}function vr(R,I,F){if(!(g===_e.Off||!D))if(_===tn.Text){let B;(g===_e.Verbose||g===_e.Compact)&&(R.error&&R.error.data?B=`Error data: ${ut(R.error.data)}

`:R.result?B=`Result: ${ut(R.result)}

`:R.error===void 0&&(B=`No result returned.

`)),D.log(`Sending response '${I} - (${R.id})'. Processing request took ${Date.now()-F}ms`,B)}else vi("send-response",R)}function Ji(R){if(!(g===_e.Off||!D))if(_===tn.Text){let I;(g===_e.Verbose||g===_e.Compact)&&R.params&&(I=`Params: ${ut(R.params)}

`),D.log(`Received request '${R.method} - (${R.id})'.`,I)}else vi("receive-request",R)}function Ti(R){if(!(g===_e.Off||!D||R.method===Lp.type.method))if(_===tn.Text){let I;(g===_e.Verbose||g===_e.Compact)&&(R.params?I=`Params: ${ut(R.params)}

`:I=`No parameters provided.

`),D.log(`Received notification '${R.method}'.`,I)}else vi("receive-notification",R)}function Ld(R,I){if(!(g===_e.Off||!D))if(_===tn.Text){let F;if((g===_e.Verbose||g===_e.Compact)&&(R.error&&R.error.data?F=`Error data: ${ut(R.error.data)}

`:R.result?F=`Result: ${ut(R.result)}

`:R.error===void 0&&(F=`No result returned.

`)),I){let B=R.error?` Request failed: ${R.error.message} (${R.error.code}).`:"";D.log(`Received response '${I.method} - (${R.id})' in ${Date.now()-I.timerStart}ms.${B}`,F)}else D.log(`Received response ${R.id} without active response promise.`,F)}else vi("receive-response",R)}function vi(R,I){if(!D||g===_e.Off)return;let F={isLSPMessage:!0,type:R,message:I,timestamp:Date.now()};D.log(F)}function Qi(){if(ct())throw new Uo(ec.Closed,"Connection is closed.");if(me())throw new Uo(ec.Disposed,"Connection is disposed.")}function Md(){if(Rt())throw new Uo(ec.AlreadyListening,"Connection is already listening")}function Fd(){if(!Rt())throw new Error("Call listen() first.")}function Zi(R){return R===void 0?null:R}function Do(R){if(R!==null)return R}function Hl(R){return R!=null&&!Array.isArray(R)&&typeof R=="object"}function ga(R,I){switch(R){case Z.ParameterStructures.auto:return Hl(I)?Do(I):[Zi(I)];case Z.ParameterStructures.byName:if(!Hl(I))throw new Error("Received parameters by name but param is not an object literal.");return Do(I);case Z.ParameterStructures.byPosition:return[Zi(I)];default:throw new Error(`Unknown parameter structure ${R.toString()}`)}}function Kl(R,I){let F,B=R.numberOfParams;switch(B){case 0:F=void 0;break;case 1:F=ga(R.parameterStructures,I[0]);break;default:F=[];for(let De=0;De<I.length&&De<B;De++)F.push(Zi(I[De]));if(I.length<B)for(let De=I.length;De<B;De++)F.push(null);break}return F}let Ri={sendNotification:(R,...I)=>{Qi();let F,B;if($t.string(R)){F=R;let Oe=I[0],Je=0,bt=Z.ParameterStructures.auto;Z.ParameterStructures.is(Oe)&&(Je=1,bt=Oe);let ue=I.length,Ue=ue-Je;switch(Ue){case 0:B=void 0;break;case 1:B=ga(bt,I[Je]);break;default:if(bt===Z.ParameterStructures.byName)throw new Error(`Received ${Ue} parameters for 'by Name' notification parameter structure.`);B=I.slice(Je,ue).map(Te=>Zi(Te));break}}else{let Oe=I;F=R.method,B=Kl(R,Oe)}let De={jsonrpc:l,method:F,params:B};return _r(De),e.write(De).catch(()=>i.error("Sending notification failed."))},onNotification:(R,I)=>{Qi();let F;return $t.func(R)?f=R:I&&($t.string(R)?(F=R,m.set(R,{type:void 0,handler:I})):(F=R.method,m.set(R.method,{type:R,handler:I}))),{dispose:()=>{F!==void 0?m.delete(F):f=void 0}}},onProgress:(R,I,F)=>{if(T.has(I))throw new Error(`Progress handler for token ${I} already registered`);return T.set(I,F),{dispose:()=>{T.delete(I)}}},sendProgress:(R,I,F)=>Ri.sendNotification(xa.type,{token:I,value:F}),onUnhandledProgress:vt.event,sendRequest:(R,...I)=>{Qi(),Fd();let F,B,De;if($t.string(R)){F=R;let ue=I[0],Ue=I[I.length-1],Te=0,ht=Z.ParameterStructures.auto;Z.ParameterStructures.is(ue)&&(Te=1,ht=ue);let er=I.length;Ip.CancellationToken.is(Ue)&&(er=er-1,De=Ue);let jn=er-Te;switch(jn){case 0:B=void 0;break;case 1:B=ga(ht,I[Te]);break;default:if(ht===Z.ParameterStructures.byName)throw new Error(`Received ${jn} parameters for 'by Name' request parameter structure.`);B=I.slice(Te,er).map(Rn=>Zi(Rn));break}}else{let ue=I;F=R.method,B=Kl(R,ue);let Ue=R.numberOfParams;De=Ip.CancellationToken.is(ue[Ue])?ue[Ue]:void 0}let Oe=o++,Je;return De&&(Je=De.onCancellationRequested(()=>{let ue=w.sender.sendCancellation(Ri,Oe);return ue===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${Oe}`),Promise.resolve()):ue.catch(()=>{i.log(`Sending cancellation messages for id ${Oe} failed`)})})),new Promise((ue,Ue)=>{let Te={jsonrpc:l,id:Oe,method:F,params:B},ht=Rn=>{ue(Rn),w.sender.cleanup(Oe),Je?.dispose()},er=Rn=>{Ue(Rn),w.sender.cleanup(Oe),Je?.dispose()},jn={method:F,timerStart:Date.now(),resolve:ht,reject:er};qr(Te);try{e.write(Te).catch(()=>i.error("Sending request failed."))}catch(Rn){jn.reject(new Z.ResponseError(Z.ErrorCodes.MessageWriteError,Rn.message?Rn.message:"Unknown reason")),jn=null}jn&&N.set(Oe,jn)})},onRequest:(R,I)=>{Qi();let F=null;return Op.is(R)?(F=void 0,c=R):$t.string(R)?(F=null,I!==void 0&&(F=R,u.set(R,{handler:I,type:void 0}))):I!==void 0&&(F=R.method,u.set(R.method,{type:R,handler:I})),{dispose:()=>{F!==null&&(F!==void 0?u.delete(F):c=void 0)}}},hasPendingResponse:()=>N.size>0,trace:async(R,I,F)=>{let B=!1,De=tn.Text;F!==void 0&&($t.boolean(F)?B=F:(B=F.sendNotification||!1,De=F.traceFormat||tn.Text)),g=R,_=De,g===_e.Off?D=void 0:D=I,B&&!ct()&&!me()&&await Ri.sendNotification(Uy.type,{value:_e.toString(R)})},onError:ge.event,onClose:Ee.event,onUnhandledNotification:Ht.event,onDispose:M.event,end:()=>{e.end()},dispose:()=>{if(me())return;X=rn.Disposed,M.fire(void 0);let R=new Z.ResponseError(Z.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let I of N.values())I.reject(R);N=new Map,v=new Map,k=new Set,A=new My.LinkedMap,$t.func(e.dispose)&&e.dispose(),$t.func(t.dispose)&&t.dispose()},listen:()=>{Qi(),Md(),X=rn.Listening,t.listen(Io)},inspect:()=>{(0,Ly.default)().console.log("inspect")}};return Ri.onNotification(Lp.type,R=>{if(g===_e.Off||!D)return;let I=g===_e.Verbose||g===_e.Compact;D.log(R.message,I?R.verbose:void 0)}),Ri.onNotification(xa.type,R=>{let I=T.get(R.token);I?I(R.value):vt.fire(R)}),Ri}Y.createMessageConnection=Sk});var Hp=H($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.TraceFormat=$.TraceValues=$.Trace=$.ProgressType=$.ProgressToken=$.createMessageConnection=$.NullLogger=$.ConnectionOptions=$.ConnectionStrategy=$.WriteableStreamMessageWriter=$.AbstractMessageWriter=$.MessageWriter=$.ReadableStreamMessageReader=$.AbstractMessageReader=$.MessageReader=$.CancellationToken=$.CancellationTokenSource=$.Emitter=$.Event=$.Disposable=$.LRUCache=$.Touch=$.LinkedMap=$.ParameterStructures=$.NotificationType9=$.NotificationType8=$.NotificationType7=$.NotificationType6=$.NotificationType5=$.NotificationType4=$.NotificationType3=$.NotificationType2=$.NotificationType1=$.NotificationType0=$.NotificationType=$.ErrorCodes=$.ResponseError=$.RequestType9=$.RequestType8=$.RequestType7=$.RequestType6=$.RequestType5=$.RequestType4=$.RequestType3=$.RequestType2=$.RequestType1=$.RequestType0=$.RequestType=$.Message=$.RAL=void 0;$.CancellationStrategy=$.CancellationSenderStrategy=$.CancellationReceiverStrategy=$.ConnectionError=$.ConnectionErrors=$.LogTraceNotification=$.SetTraceNotification=void 0;var Ge=vp();Object.defineProperty($,"Message",{enumerable:!0,get:function(){return Ge.Message}});Object.defineProperty($,"RequestType",{enumerable:!0,get:function(){return Ge.RequestType}});Object.defineProperty($,"RequestType0",{enumerable:!0,get:function(){return Ge.RequestType0}});Object.defineProperty($,"RequestType1",{enumerable:!0,get:function(){return Ge.RequestType1}});Object.defineProperty($,"RequestType2",{enumerable:!0,get:function(){return Ge.RequestType2}});Object.defineProperty($,"RequestType3",{enumerable:!0,get:function(){return Ge.RequestType3}});Object.defineProperty($,"RequestType4",{enumerable:!0,get:function(){return Ge.RequestType4}});Object.defineProperty($,"RequestType5",{enumerable:!0,get:function(){return Ge.RequestType5}});Object.defineProperty($,"RequestType6",{enumerable:!0,get:function(){return Ge.RequestType6}});Object.defineProperty($,"RequestType7",{enumerable:!0,get:function(){return Ge.RequestType7}});Object.defineProperty($,"RequestType8",{enumerable:!0,get:function(){return Ge.RequestType8}});Object.defineProperty($,"RequestType9",{enumerable:!0,get:function(){return Ge.RequestType9}});Object.defineProperty($,"ResponseError",{enumerable:!0,get:function(){return Ge.ResponseError}});Object.defineProperty($,"ErrorCodes",{enumerable:!0,get:function(){return Ge.ErrorCodes}});Object.defineProperty($,"NotificationType",{enumerable:!0,get:function(){return Ge.NotificationType}});Object.defineProperty($,"NotificationType0",{enumerable:!0,get:function(){return Ge.NotificationType0}});Object.defineProperty($,"NotificationType1",{enumerable:!0,get:function(){return Ge.NotificationType1}});Object.defineProperty($,"NotificationType2",{enumerable:!0,get:function(){return Ge.NotificationType2}});Object.defineProperty($,"NotificationType3",{enumerable:!0,get:function(){return Ge.NotificationType3}});Object.defineProperty($,"NotificationType4",{enumerable:!0,get:function(){return Ge.NotificationType4}});Object.defineProperty($,"NotificationType5",{enumerable:!0,get:function(){return Ge.NotificationType5}});Object.defineProperty($,"NotificationType6",{enumerable:!0,get:function(){return Ge.NotificationType6}});Object.defineProperty($,"NotificationType7",{enumerable:!0,get:function(){return Ge.NotificationType7}});Object.defineProperty($,"NotificationType8",{enumerable:!0,get:function(){return Ge.NotificationType8}});Object.defineProperty($,"NotificationType9",{enumerable:!0,get:function(){return Ge.NotificationType9}});Object.defineProperty($,"ParameterStructures",{enumerable:!0,get:function(){return Ge.ParameterStructures}});var qp=xp();Object.defineProperty($,"LinkedMap",{enumerable:!0,get:function(){return qp.LinkedMap}});Object.defineProperty($,"LRUCache",{enumerable:!0,get:function(){return qp.LRUCache}});Object.defineProperty($,"Touch",{enumerable:!0,get:function(){return qp.Touch}});var Ak=Hd();Object.defineProperty($,"Disposable",{enumerable:!0,get:function(){return Ak.Disposable}});var jy=to();Object.defineProperty($,"Event",{enumerable:!0,get:function(){return jy.Event}});Object.defineProperty($,"Emitter",{enumerable:!0,get:function(){return jy.Emitter}});var Hy=wp();Object.defineProperty($,"CancellationTokenSource",{enumerable:!0,get:function(){return Hy.CancellationTokenSource}});Object.defineProperty($,"CancellationToken",{enumerable:!0,get:function(){return Hy.CancellationToken}});var Gp=Ny();Object.defineProperty($,"MessageReader",{enumerable:!0,get:function(){return Gp.MessageReader}});Object.defineProperty($,"AbstractMessageReader",{enumerable:!0,get:function(){return Gp.AbstractMessageReader}});Object.defineProperty($,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return Gp.ReadableStreamMessageReader}});var jp=Oy();Object.defineProperty($,"MessageWriter",{enumerable:!0,get:function(){return jp.MessageWriter}});Object.defineProperty($,"AbstractMessageWriter",{enumerable:!0,get:function(){return jp.AbstractMessageWriter}});Object.defineProperty($,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return jp.WriteableStreamMessageWriter}});var rr=Gy();Object.defineProperty($,"ConnectionStrategy",{enumerable:!0,get:function(){return rr.ConnectionStrategy}});Object.defineProperty($,"ConnectionOptions",{enumerable:!0,get:function(){return rr.ConnectionOptions}});Object.defineProperty($,"NullLogger",{enumerable:!0,get:function(){return rr.NullLogger}});Object.defineProperty($,"createMessageConnection",{enumerable:!0,get:function(){return rr.createMessageConnection}});Object.defineProperty($,"ProgressToken",{enumerable:!0,get:function(){return rr.ProgressToken}});Object.defineProperty($,"ProgressType",{enumerable:!0,get:function(){return rr.ProgressType}});Object.defineProperty($,"Trace",{enumerable:!0,get:function(){return rr.Trace}});Object.defineProperty($,"TraceValues",{enumerable:!0,get:function(){return rr.TraceValues}});Object.defineProperty($,"TraceFormat",{enumerable:!0,get:function(){return rr.TraceFormat}});Object.defineProperty($,"SetTraceNotification",{enumerable:!0,get:function(){return rr.SetTraceNotification}});Object.defineProperty($,"LogTraceNotification",{enumerable:!0,get:function(){return rr.LogTraceNotification}});Object.defineProperty($,"ConnectionErrors",{enumerable:!0,get:function(){return rr.ConnectionErrors}});Object.defineProperty($,"ConnectionError",{enumerable:!0,get:function(){return rr.ConnectionError}});Object.defineProperty($,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return rr.CancellationReceiverStrategy}});Object.defineProperty($,"CancellationSenderStrategy",{enumerable:!0,get:function(){return rr.CancellationSenderStrategy}});Object.defineProperty($,"CancellationStrategy",{enumerable:!0,get:function(){return rr.CancellationStrategy}});var wk=Kn();$.RAL=wk.default});var Vn=H(Nr=>{"use strict";var kk=Nr&&Nr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Ck=Nr&&Nr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&kk(e,t,r)};Object.defineProperty(Nr,"__esModule",{value:!0});Nr.createMessageConnection=Nr.BrowserMessageWriter=Nr.BrowserMessageReader=void 0;var Ek=wy();Ek.default.install();var qo=Hp();Ck(Hp(),Nr);var Kp=class extends qo.AbstractMessageReader{constructor(e){super(),this._onData=new qo.Emitter,this._messageListener=r=>{this._onData.fire(r.data)},e.addEventListener("error",r=>this.fireError(r)),e.onmessage=this._messageListener}listen(e){return this._onData.event(e)}};Nr.BrowserMessageReader=Kp;var Wp=class extends qo.AbstractMessageWriter{constructor(e){super(),this.context=e,this.errorCount=0,e.addEventListener("error",r=>this.fireError(r))}write(e){try{return this.context.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};Nr.BrowserMessageWriter=Wp;function _k(t,e,r,n){return r===void 0&&(r=qo.NullLogger),qo.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,qo.createMessageConnection)(t,e,r,n)}Nr.createMessageConnection=_k});var Bp=H((Vq,Ky)=>{"use strict";Ky.exports=Vn()});var io=H((Wy,tc)=>{(function(t){if(typeof tc=="object"&&typeof tc.exports=="object"){var e=t(xy,Wy);e!==void 0&&(tc.exports=e)}else typeof define=="function"&&define.amd&&define(["require","exports"],t)})(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TextDocument=e.EOL=e.WorkspaceFolder=e.InlayHint=e.InlayHintLabelPart=e.InlayHintKind=e.InlineValueContext=e.InlineValueEvaluatableExpression=e.InlineValueVariableLookup=e.InlineValueText=e.SemanticTokens=e.SemanticTokenModifiers=e.SemanticTokenTypes=e.SelectionRange=e.DocumentLink=e.FormattingOptions=e.CodeLens=e.CodeAction=e.CodeActionContext=e.CodeActionTriggerKind=e.CodeActionKind=e.DocumentSymbol=e.WorkspaceSymbol=e.SymbolInformation=e.SymbolTag=e.SymbolKind=e.DocumentHighlight=e.DocumentHighlightKind=e.SignatureInformation=e.ParameterInformation=e.Hover=e.MarkedString=e.CompletionList=e.CompletionItem=e.CompletionItemLabelDetails=e.InsertTextMode=e.InsertReplaceEdit=e.CompletionItemTag=e.InsertTextFormat=e.CompletionItemKind=e.MarkupContent=e.MarkupKind=e.TextDocumentItem=e.OptionalVersionedTextDocumentIdentifier=e.VersionedTextDocumentIdentifier=e.TextDocumentIdentifier=e.WorkspaceChange=e.WorkspaceEdit=e.DeleteFile=e.RenameFile=e.CreateFile=e.TextDocumentEdit=e.AnnotatedTextEdit=e.ChangeAnnotationIdentifier=e.ChangeAnnotation=e.TextEdit=e.Command=e.Diagnostic=e.CodeDescription=e.DiagnosticTag=e.DiagnosticSeverity=e.DiagnosticRelatedInformation=e.FoldingRange=e.FoldingRangeKind=e.ColorPresentation=e.ColorInformation=e.Color=e.LocationLink=e.Location=e.Range=e.Position=e.uinteger=e.integer=e.URI=e.DocumentUri=void 0;var r;(function(p){function x(b){return typeof b=="string"}p.is=x})(r=e.DocumentUri||(e.DocumentUri={}));var n;(function(p){function x(b){return typeof b=="string"}p.is=x})(n=e.URI||(e.URI={}));var i;(function(p){p.MIN_VALUE=-2147483648,p.MAX_VALUE=2147483647;function x(b){return typeof b=="number"&&p.MIN_VALUE<=b&&b<=p.MAX_VALUE}p.is=x})(i=e.integer||(e.integer={}));var o;(function(p){p.MIN_VALUE=0,p.MAX_VALUE=2147483647;function x(b){return typeof b=="number"&&p.MIN_VALUE<=b&&b<=p.MAX_VALUE}p.is=x})(o=e.uinteger||(e.uinteger={}));var s;(function(p){function x(y,d){return y===Number.MAX_VALUE&&(y=o.MAX_VALUE),d===Number.MAX_VALUE&&(d=o.MAX_VALUE),{line:y,character:d}}p.create=x;function b(y){var d=y;return C.objectLiteral(d)&&C.uinteger(d.line)&&C.uinteger(d.character)}p.is=b})(s=e.Position||(e.Position={}));var a;(function(p){function x(y,d,E,P){if(C.uinteger(y)&&C.uinteger(d)&&C.uinteger(E)&&C.uinteger(P))return{start:s.create(y,d),end:s.create(E,P)};if(s.is(y)&&s.is(d))return{start:y,end:d};throw new Error("Range#create called with invalid arguments[".concat(y,", ").concat(d,", ").concat(E,", ").concat(P,"]"))}p.create=x;function b(y){var d=y;return C.objectLiteral(d)&&s.is(d.start)&&s.is(d.end)}p.is=b})(a=e.Range||(e.Range={}));var l;(function(p){function x(y,d){return{uri:y,range:d}}p.create=x;function b(y){var d=y;return C.objectLiteral(d)&&a.is(d.range)&&(C.string(d.uri)||C.undefined(d.uri))}p.is=b})(l=e.Location||(e.Location={}));var c;(function(p){function x(y,d,E,P){return{targetUri:y,targetRange:d,targetSelectionRange:E,originSelectionRange:P}}p.create=x;function b(y){var d=y;return C.objectLiteral(d)&&a.is(d.targetRange)&&C.string(d.targetUri)&&a.is(d.targetSelectionRange)&&(a.is(d.originSelectionRange)||C.undefined(d.originSelectionRange))}p.is=b})(c=e.LocationLink||(e.LocationLink={}));var u;(function(p){function x(y,d,E,P){return{red:y,green:d,blue:E,alpha:P}}p.create=x;function b(y){var d=y;return C.objectLiteral(d)&&C.numberRange(d.red,0,1)&&C.numberRange(d.green,0,1)&&C.numberRange(d.blue,0,1)&&C.numberRange(d.alpha,0,1)}p.is=b})(u=e.Color||(e.Color={}));var f;(function(p){function x(y,d){return{range:y,color:d}}p.create=x;function b(y){var d=y;return C.objectLiteral(d)&&a.is(d.range)&&u.is(d.color)}p.is=b})(f=e.ColorInformation||(e.ColorInformation={}));var m;(function(p){function x(y,d,E){return{label:y,textEdit:d,additionalTextEdits:E}}p.create=x;function b(y){var d=y;return C.objectLiteral(d)&&C.string(d.label)&&(C.undefined(d.textEdit)||D.is(d))&&(C.undefined(d.additionalTextEdits)||C.typedArray(d.additionalTextEdits,D.is))}p.is=b})(m=e.ColorPresentation||(e.ColorPresentation={}));var T;(function(p){p.Comment="comment",p.Imports="imports",p.Region="region"})(T=e.FoldingRangeKind||(e.FoldingRangeKind={}));var S;(function(p){function x(y,d,E,P,re,ft){var qe={startLine:y,endLine:d};return C.defined(E)&&(qe.startCharacter=E),C.defined(P)&&(qe.endCharacter=P),C.defined(re)&&(qe.kind=re),C.defined(ft)&&(qe.collapsedText=ft),qe}p.create=x;function b(y){var d=y;return C.objectLiteral(d)&&C.uinteger(d.startLine)&&C.uinteger(d.startLine)&&(C.undefined(d.startCharacter)||C.uinteger(d.startCharacter))&&(C.undefined(d.endCharacter)||C.uinteger(d.endCharacter))&&(C.undefined(d.kind)||C.string(d.kind))}p.is=b})(S=e.FoldingRange||(e.FoldingRange={}));var A;(function(p){function x(y,d){return{location:y,message:d}}p.create=x;function b(y){var d=y;return C.defined(d)&&l.is(d.location)&&C.string(d.message)}p.is=b})(A=e.DiagnosticRelatedInformation||(e.DiagnosticRelatedInformation={}));var N;(function(p){p.Error=1,p.Warning=2,p.Information=3,p.Hint=4})(N=e.DiagnosticSeverity||(e.DiagnosticSeverity={}));var k;(function(p){p.Unnecessary=1,p.Deprecated=2})(k=e.DiagnosticTag||(e.DiagnosticTag={}));var v;(function(p){function x(b){var y=b;return C.objectLiteral(y)&&C.string(y.href)}p.is=x})(v=e.CodeDescription||(e.CodeDescription={}));var g;(function(p){function x(y,d,E,P,re,ft){var qe={range:y,message:d};return C.defined(E)&&(qe.severity=E),C.defined(P)&&(qe.code=P),C.defined(re)&&(qe.source=re),C.defined(ft)&&(qe.relatedInformation=ft),qe}p.create=x;function b(y){var d,E=y;return C.defined(E)&&a.is(E.range)&&C.string(E.message)&&(C.number(E.severity)||C.undefined(E.severity))&&(C.integer(E.code)||C.string(E.code)||C.undefined(E.code))&&(C.undefined(E.codeDescription)||C.string((d=E.codeDescription)===null||d===void 0?void 0:d.href))&&(C.string(E.source)||C.undefined(E.source))&&(C.undefined(E.relatedInformation)||C.typedArray(E.relatedInformation,A.is))}p.is=b})(g=e.Diagnostic||(e.Diagnostic={}));var _;(function(p){function x(y,d){for(var E=[],P=2;P<arguments.length;P++)E[P-2]=arguments[P];var re={title:y,command:d};return C.defined(E)&&E.length>0&&(re.arguments=E),re}p.create=x;function b(y){var d=y;return C.defined(d)&&C.string(d.title)&&C.string(d.command)}p.is=b})(_=e.Command||(e.Command={}));var D;(function(p){function x(E,P){return{range:E,newText:P}}p.replace=x;function b(E,P){return{range:{start:E,end:E},newText:P}}p.insert=b;function y(E){return{range:E,newText:""}}p.del=y;function d(E){var P=E;return C.objectLiteral(P)&&C.string(P.newText)&&a.is(P.range)}p.is=d})(D=e.TextEdit||(e.TextEdit={}));var X;(function(p){function x(y,d,E){var P={label:y};return d!==void 0&&(P.needsConfirmation=d),E!==void 0&&(P.description=E),P}p.create=x;function b(y){var d=y;return C.objectLiteral(d)&&C.string(d.label)&&(C.boolean(d.needsConfirmation)||d.needsConfirmation===void 0)&&(C.string(d.description)||d.description===void 0)}p.is=b})(X=e.ChangeAnnotation||(e.ChangeAnnotation={}));var ge;(function(p){function x(b){var y=b;return C.string(y)}p.is=x})(ge=e.ChangeAnnotationIdentifier||(e.ChangeAnnotationIdentifier={}));var Ee;(function(p){function x(E,P,re){return{range:E,newText:P,annotationId:re}}p.replace=x;function b(E,P,re){return{range:{start:E,end:E},newText:P,annotationId:re}}p.insert=b;function y(E,P){return{range:E,newText:"",annotationId:P}}p.del=y;function d(E){var P=E;return D.is(P)&&(X.is(P.annotationId)||ge.is(P.annotationId))}p.is=d})(Ee=e.AnnotatedTextEdit||(e.AnnotatedTextEdit={}));var Ht;(function(p){function x(y,d){return{textDocument:y,edits:d}}p.create=x;function b(y){var d=y;return C.defined(d)&&ct.is(d.textDocument)&&Array.isArray(d.edits)}p.is=b})(Ht=e.TextDocumentEdit||(e.TextDocumentEdit={}));var vt;(function(p){function x(y,d,E){var P={kind:"create",uri:y};return d!==void 0&&(d.overwrite!==void 0||d.ignoreIfExists!==void 0)&&(P.options=d),E!==void 0&&(P.annotationId=E),P}p.create=x;function b(y){var d=y;return d&&d.kind==="create"&&C.string(d.uri)&&(d.options===void 0||(d.options.overwrite===void 0||C.boolean(d.options.overwrite))&&(d.options.ignoreIfExists===void 0||C.boolean(d.options.ignoreIfExists)))&&(d.annotationId===void 0||ge.is(d.annotationId))}p.is=b})(vt=e.CreateFile||(e.CreateFile={}));var M;(function(p){function x(y,d,E,P){var re={kind:"rename",oldUri:y,newUri:d};return E!==void 0&&(E.overwrite!==void 0||E.ignoreIfExists!==void 0)&&(re.options=E),P!==void 0&&(re.annotationId=P),re}p.create=x;function b(y){var d=y;return d&&d.kind==="rename"&&C.string(d.oldUri)&&C.string(d.newUri)&&(d.options===void 0||(d.options.overwrite===void 0||C.boolean(d.options.overwrite))&&(d.options.ignoreIfExists===void 0||C.boolean(d.options.ignoreIfExists)))&&(d.annotationId===void 0||ge.is(d.annotationId))}p.is=b})(M=e.RenameFile||(e.RenameFile={}));var w;(function(p){function x(y,d,E){var P={kind:"delete",uri:y};return d!==void 0&&(d.recursive!==void 0||d.ignoreIfNotExists!==void 0)&&(P.options=d),E!==void 0&&(P.annotationId=E),P}p.create=x;function b(y){var d=y;return d&&d.kind==="delete"&&C.string(d.uri)&&(d.options===void 0||(d.options.recursive===void 0||C.boolean(d.options.recursive))&&(d.options.ignoreIfNotExists===void 0||C.boolean(d.options.ignoreIfNotExists)))&&(d.annotationId===void 0||ge.is(d.annotationId))}p.is=b})(w=e.DeleteFile||(e.DeleteFile={}));var q;(function(p){function x(b){var y=b;return y&&(y.changes!==void 0||y.documentChanges!==void 0)&&(y.documentChanges===void 0||y.documentChanges.every(function(d){return C.string(d.kind)?vt.is(d)||M.is(d)||w.is(d):Ht.is(d)}))}p.is=x})(q=e.WorkspaceEdit||(e.WorkspaceEdit={}));var j=function(){function p(x,b){this.edits=x,this.changeAnnotations=b}return p.prototype.insert=function(x,b,y){var d,E;if(y===void 0?d=D.insert(x,b):ge.is(y)?(E=y,d=Ee.insert(x,b,y)):(this.assertChangeAnnotations(this.changeAnnotations),E=this.changeAnnotations.manage(y),d=Ee.insert(x,b,E)),this.edits.push(d),E!==void 0)return E},p.prototype.replace=function(x,b,y){var d,E;if(y===void 0?d=D.replace(x,b):ge.is(y)?(E=y,d=Ee.replace(x,b,y)):(this.assertChangeAnnotations(this.changeAnnotations),E=this.changeAnnotations.manage(y),d=Ee.replace(x,b,E)),this.edits.push(d),E!==void 0)return E},p.prototype.delete=function(x,b){var y,d;if(b===void 0?y=D.del(x):ge.is(b)?(d=b,y=Ee.del(x,b)):(this.assertChangeAnnotations(this.changeAnnotations),d=this.changeAnnotations.manage(b),y=Ee.del(x,d)),this.edits.push(y),d!==void 0)return d},p.prototype.add=function(x){this.edits.push(x)},p.prototype.all=function(){return this.edits},p.prototype.clear=function(){this.edits.splice(0,this.edits.length)},p.prototype.assertChangeAnnotations=function(x){if(x===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},p}(),le=function(){function p(x){this._annotations=x===void 0?Object.create(null):x,this._counter=0,this._size=0}return p.prototype.all=function(){return this._annotations},Object.defineProperty(p.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),p.prototype.manage=function(x,b){var y;if(ge.is(x)?y=x:(y=this.nextId(),b=x),this._annotations[y]!==void 0)throw new Error("Id ".concat(y," is already in use."));if(b===void 0)throw new Error("No annotation provided for id ".concat(y));return this._annotations[y]=b,this._size++,y},p.prototype.nextId=function(){return this._counter++,this._counter.toString()},p}(),ee=function(){function p(x){var b=this;this._textEditChanges=Object.create(null),x!==void 0?(this._workspaceEdit=x,x.documentChanges?(this._changeAnnotations=new le(x.changeAnnotations),x.changeAnnotations=this._changeAnnotations.all(),x.documentChanges.forEach(function(y){if(Ht.is(y)){var d=new j(y.edits,b._changeAnnotations);b._textEditChanges[y.textDocument.uri]=d}})):x.changes&&Object.keys(x.changes).forEach(function(y){var d=new j(x.changes[y]);b._textEditChanges[y]=d})):this._workspaceEdit={}}return Object.defineProperty(p.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),p.prototype.getTextEditChange=function(x){if(ct.is(x)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var b={uri:x.uri,version:x.version},y=this._textEditChanges[b.uri];if(!y){var d=[],E={textDocument:b,edits:d};this._workspaceEdit.documentChanges.push(E),y=new j(d,this._changeAnnotations),this._textEditChanges[b.uri]=y}return y}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var y=this._textEditChanges[x];if(!y){var d=[];this._workspaceEdit.changes[x]=d,y=new j(d),this._textEditChanges[x]=y}return y}},p.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new le,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},p.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},p.prototype.createFile=function(x,b,y){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var d;X.is(b)||ge.is(b)?d=b:y=b;var E,P;if(d===void 0?E=vt.create(x,y):(P=ge.is(d)?d:this._changeAnnotations.manage(d),E=vt.create(x,y,P)),this._workspaceEdit.documentChanges.push(E),P!==void 0)return P},p.prototype.renameFile=function(x,b,y,d){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var E;X.is(y)||ge.is(y)?E=y:d=y;var P,re;if(E===void 0?P=M.create(x,b,d):(re=ge.is(E)?E:this._changeAnnotations.manage(E),P=M.create(x,b,d,re)),this._workspaceEdit.documentChanges.push(P),re!==void 0)return re},p.prototype.deleteFile=function(x,b,y){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var d;X.is(b)||ge.is(b)?d=b:y=b;var E,P;if(d===void 0?E=w.create(x,y):(P=ge.is(d)?d:this._changeAnnotations.manage(d),E=w.create(x,y,P)),this._workspaceEdit.documentChanges.push(E),P!==void 0)return P},p}();e.WorkspaceChange=ee;var Q;(function(p){function x(y){return{uri:y}}p.create=x;function b(y){var d=y;return C.defined(d)&&C.string(d.uri)}p.is=b})(Q=e.TextDocumentIdentifier||(e.TextDocumentIdentifier={}));var Rt;(function(p){function x(y,d){return{uri:y,version:d}}p.create=x;function b(y){var d=y;return C.defined(d)&&C.string(d.uri)&&C.integer(d.version)}p.is=b})(Rt=e.VersionedTextDocumentIdentifier||(e.VersionedTextDocumentIdentifier={}));var ct;(function(p){function x(y,d){return{uri:y,version:d}}p.create=x;function b(y){var d=y;return C.defined(d)&&C.string(d.uri)&&(d.version===null||C.integer(d.version))}p.is=b})(ct=e.OptionalVersionedTextDocumentIdentifier||(e.OptionalVersionedTextDocumentIdentifier={}));var me;(function(p){function x(y,d,E,P){return{uri:y,languageId:d,version:E,text:P}}p.create=x;function b(y){var d=y;return C.defined(d)&&C.string(d.uri)&&C.string(d.languageId)&&C.integer(d.version)&&C.string(d.text)}p.is=b})(me=e.TextDocumentItem||(e.TextDocumentItem={}));var Er;(function(p){p.PlainText="plaintext",p.Markdown="markdown";function x(b){var y=b;return y===p.PlainText||y===p.Markdown}p.is=x})(Er=e.MarkupKind||(e.MarkupKind={}));var Gn;(function(p){function x(b){var y=b;return C.objectLiteral(b)&&Er.is(y.kind)&&C.string(y.value)}p.is=x})(Gn=e.MarkupContent||(e.MarkupContent={}));var ya;(function(p){p.Text=1,p.Method=2,p.Function=3,p.Constructor=4,p.Field=5,p.Variable=6,p.Class=7,p.Interface=8,p.Module=9,p.Property=10,p.Unit=11,p.Value=12,p.Enum=13,p.Keyword=14,p.Snippet=15,p.Color=16,p.File=17,p.Reference=18,p.Folder=19,p.EnumMember=20,p.Constant=21,p.Struct=22,p.Event=23,p.Operator=24,p.TypeParameter=25})(ya=e.CompletionItemKind||(e.CompletionItemKind={}));var Yi;(function(p){p.PlainText=1,p.Snippet=2})(Yi=e.InsertTextFormat||(e.InsertTextFormat={}));var cr;(function(p){p.Deprecated=1})(cr=e.CompletionItemTag||(e.CompletionItemTag={}));var Io;(function(p){function x(y,d,E){return{newText:y,insert:d,replace:E}}p.create=x;function b(y){var d=y;return d&&C.string(d.newText)&&a.is(d.insert)&&a.is(d.replace)}p.is=b})(Io=e.InsertReplaceEdit||(e.InsertReplaceEdit={}));var xt;(function(p){p.asIs=1,p.adjustIndentation=2})(xt=e.InsertTextMode||(e.InsertTextMode={}));var Zt;(function(p){function x(b){var y=b;return y&&(C.string(y.detail)||y.detail===void 0)&&(C.string(y.description)||y.description===void 0)}p.is=x})(Zt=e.CompletionItemLabelDetails||(e.CompletionItemLabelDetails={}));var vn;(function(p){function x(b){return{label:b}}p.create=x})(vn=e.CompletionItem||(e.CompletionItem={}));var Kt;(function(p){function x(b,y){return{items:b||[],isIncomplete:!!y}}p.create=x})(Kt=e.CompletionList||(e.CompletionList={}));var ut;(function(p){function x(y){return y.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}p.fromPlainText=x;function b(y){var d=y;return C.string(d)||C.objectLiteral(d)&&C.string(d.language)&&C.string(d.value)}p.is=b})(ut=e.MarkedString||(e.MarkedString={}));var qr;(function(p){function x(b){var y=b;return!!y&&C.objectLiteral(y)&&(Gn.is(y.contents)||ut.is(y.contents)||C.typedArray(y.contents,ut.is))&&(b.range===void 0||a.is(b.range))}p.is=x})(qr=e.Hover||(e.Hover={}));var _r;(function(p){function x(b,y){return y?{label:b,documentation:y}:{label:b}}p.create=x})(_r=e.ParameterInformation||(e.ParameterInformation={}));var vr;(function(p){function x(b,y){for(var d=[],E=2;E<arguments.length;E++)d[E-2]=arguments[E];var P={label:b};return C.defined(y)&&(P.documentation=y),C.defined(d)?P.parameters=d:P.parameters=[],P}p.create=x})(vr=e.SignatureInformation||(e.SignatureInformation={}));var Ji;(function(p){p.Text=1,p.Read=2,p.Write=3})(Ji=e.DocumentHighlightKind||(e.DocumentHighlightKind={}));var Ti;(function(p){function x(b,y){var d={range:b};return C.number(y)&&(d.kind=y),d}p.create=x})(Ti=e.DocumentHighlight||(e.DocumentHighlight={}));var Ld;(function(p){p.File=1,p.Module=2,p.Namespace=3,p.Package=4,p.Class=5,p.Method=6,p.Property=7,p.Field=8,p.Constructor=9,p.Enum=10,p.Interface=11,p.Function=12,p.Variable=13,p.Constant=14,p.String=15,p.Number=16,p.Boolean=17,p.Array=18,p.Object=19,p.Key=20,p.Null=21,p.EnumMember=22,p.Struct=23,p.Event=24,p.Operator=25,p.TypeParameter=26})(Ld=e.SymbolKind||(e.SymbolKind={}));var vi;(function(p){p.Deprecated=1})(vi=e.SymbolTag||(e.SymbolTag={}));var Qi;(function(p){function x(b,y,d,E,P){var re={name:b,kind:y,location:{uri:E,range:d}};return P&&(re.containerName=P),re}p.create=x})(Qi=e.SymbolInformation||(e.SymbolInformation={}));var Md;(function(p){function x(b,y,d,E){return E!==void 0?{name:b,kind:y,location:{uri:d,range:E}}:{name:b,kind:y,location:{uri:d}}}p.create=x})(Md=e.WorkspaceSymbol||(e.WorkspaceSymbol={}));var Fd;(function(p){function x(y,d,E,P,re,ft){var qe={name:y,detail:d,kind:E,range:P,selectionRange:re};return ft!==void 0&&(qe.children=ft),qe}p.create=x;function b(y){var d=y;return d&&C.string(d.name)&&C.number(d.kind)&&a.is(d.range)&&a.is(d.selectionRange)&&(d.detail===void 0||C.string(d.detail))&&(d.deprecated===void 0||C.boolean(d.deprecated))&&(d.children===void 0||Array.isArray(d.children))&&(d.tags===void 0||Array.isArray(d.tags))}p.is=b})(Fd=e.DocumentSymbol||(e.DocumentSymbol={}));var Zi;(function(p){p.Empty="",p.QuickFix="quickfix",p.Refactor="refactor",p.RefactorExtract="refactor.extract",p.RefactorInline="refactor.inline",p.RefactorRewrite="refactor.rewrite",p.Source="source",p.SourceOrganizeImports="source.organizeImports",p.SourceFixAll="source.fixAll"})(Zi=e.CodeActionKind||(e.CodeActionKind={}));var Do;(function(p){p.Invoked=1,p.Automatic=2})(Do=e.CodeActionTriggerKind||(e.CodeActionTriggerKind={}));var Hl;(function(p){function x(y,d,E){var P={diagnostics:y};return d!=null&&(P.only=d),E!=null&&(P.triggerKind=E),P}p.create=x;function b(y){var d=y;return C.defined(d)&&C.typedArray(d.diagnostics,g.is)&&(d.only===void 0||C.typedArray(d.only,C.string))&&(d.triggerKind===void 0||d.triggerKind===Do.Invoked||d.triggerKind===Do.Automatic)}p.is=b})(Hl=e.CodeActionContext||(e.CodeActionContext={}));var ga;(function(p){function x(y,d,E){var P={title:y},re=!0;return typeof d=="string"?(re=!1,P.kind=d):_.is(d)?P.command=d:P.edit=d,re&&E!==void 0&&(P.kind=E),P}p.create=x;function b(y){var d=y;return d&&C.string(d.title)&&(d.diagnostics===void 0||C.typedArray(d.diagnostics,g.is))&&(d.kind===void 0||C.string(d.kind))&&(d.edit!==void 0||d.command!==void 0)&&(d.command===void 0||_.is(d.command))&&(d.isPreferred===void 0||C.boolean(d.isPreferred))&&(d.edit===void 0||q.is(d.edit))}p.is=b})(ga=e.CodeAction||(e.CodeAction={}));var Kl;(function(p){function x(y,d){var E={range:y};return C.defined(d)&&(E.data=d),E}p.create=x;function b(y){var d=y;return C.defined(d)&&a.is(d.range)&&(C.undefined(d.command)||_.is(d.command))}p.is=b})(Kl=e.CodeLens||(e.CodeLens={}));var Ri;(function(p){function x(y,d){return{tabSize:y,insertSpaces:d}}p.create=x;function b(y){var d=y;return C.defined(d)&&C.uinteger(d.tabSize)&&C.boolean(d.insertSpaces)}p.is=b})(Ri=e.FormattingOptions||(e.FormattingOptions={}));var R;(function(p){function x(y,d,E){return{range:y,target:d,data:E}}p.create=x;function b(y){var d=y;return C.defined(d)&&a.is(d.range)&&(C.undefined(d.target)||C.string(d.target))}p.is=b})(R=e.DocumentLink||(e.DocumentLink={}));var I;(function(p){function x(y,d){return{range:y,parent:d}}p.create=x;function b(y){var d=y;return C.objectLiteral(d)&&a.is(d.range)&&(d.parent===void 0||p.is(d.parent))}p.is=b})(I=e.SelectionRange||(e.SelectionRange={}));var F;(function(p){p.namespace="namespace",p.type="type",p.class="class",p.enum="enum",p.interface="interface",p.struct="struct",p.typeParameter="typeParameter",p.parameter="parameter",p.variable="variable",p.property="property",p.enumMember="enumMember",p.event="event",p.function="function",p.method="method",p.macro="macro",p.keyword="keyword",p.modifier="modifier",p.comment="comment",p.string="string",p.number="number",p.regexp="regexp",p.operator="operator",p.decorator="decorator"})(F=e.SemanticTokenTypes||(e.SemanticTokenTypes={}));var B;(function(p){p.declaration="declaration",p.definition="definition",p.readonly="readonly",p.static="static",p.deprecated="deprecated",p.abstract="abstract",p.async="async",p.modification="modification",p.documentation="documentation",p.defaultLibrary="defaultLibrary"})(B=e.SemanticTokenModifiers||(e.SemanticTokenModifiers={}));var De;(function(p){function x(b){var y=b;return C.objectLiteral(y)&&(y.resultId===void 0||typeof y.resultId=="string")&&Array.isArray(y.data)&&(y.data.length===0||typeof y.data[0]=="number")}p.is=x})(De=e.SemanticTokens||(e.SemanticTokens={}));var Oe;(function(p){function x(y,d){return{range:y,text:d}}p.create=x;function b(y){var d=y;return d!=null&&a.is(d.range)&&C.string(d.text)}p.is=b})(Oe=e.InlineValueText||(e.InlineValueText={}));var Je;(function(p){function x(y,d,E){return{range:y,variableName:d,caseSensitiveLookup:E}}p.create=x;function b(y){var d=y;return d!=null&&a.is(d.range)&&C.boolean(d.caseSensitiveLookup)&&(C.string(d.variableName)||d.variableName===void 0)}p.is=b})(Je=e.InlineValueVariableLookup||(e.InlineValueVariableLookup={}));var bt;(function(p){function x(y,d){return{range:y,expression:d}}p.create=x;function b(y){var d=y;return d!=null&&a.is(d.range)&&(C.string(d.expression)||d.expression===void 0)}p.is=b})(bt=e.InlineValueEvaluatableExpression||(e.InlineValueEvaluatableExpression={}));var ue;(function(p){function x(y,d){return{frameId:y,stoppedLocation:d}}p.create=x;function b(y){var d=y;return C.defined(d)&&a.is(y.stoppedLocation)}p.is=b})(ue=e.InlineValueContext||(e.InlineValueContext={}));var Ue;(function(p){p.Type=1,p.Parameter=2;function x(b){return b===1||b===2}p.is=x})(Ue=e.InlayHintKind||(e.InlayHintKind={}));var Te;(function(p){function x(y){return{value:y}}p.create=x;function b(y){var d=y;return C.objectLiteral(d)&&(d.tooltip===void 0||C.string(d.tooltip)||Gn.is(d.tooltip))&&(d.location===void 0||l.is(d.location))&&(d.command===void 0||_.is(d.command))}p.is=b})(Te=e.InlayHintLabelPart||(e.InlayHintLabelPart={}));var ht;(function(p){function x(y,d,E){var P={position:y,label:d};return E!==void 0&&(P.kind=E),P}p.create=x;function b(y){var d=y;return C.objectLiteral(d)&&s.is(d.position)&&(C.string(d.label)||C.typedArray(d.label,Te.is))&&(d.kind===void 0||Ue.is(d.kind))&&d.textEdits===void 0||C.typedArray(d.textEdits,D.is)&&(d.tooltip===void 0||C.string(d.tooltip)||Gn.is(d.tooltip))&&(d.paddingLeft===void 0||C.boolean(d.paddingLeft))&&(d.paddingRight===void 0||C.boolean(d.paddingRight))}p.is=b})(ht=e.InlayHint||(e.InlayHint={}));var er;(function(p){function x(b){var y=b;return C.objectLiteral(y)&&n.is(y.uri)&&C.string(y.name)}p.is=x})(er=e.WorkspaceFolder||(e.WorkspaceFolder={})),e.EOL=[`
`,`\r
`,"\r"];var jn;(function(p){function x(E,P,re,ft){return new Rn(E,P,re,ft)}p.create=x;function b(E){var P=E;return!!(C.defined(P)&&C.string(P.uri)&&(C.undefined(P.languageId)||C.string(P.languageId))&&C.uinteger(P.lineCount)&&C.func(P.getText)&&C.func(P.positionAt)&&C.func(P.offsetAt))}p.is=b;function y(E,P){for(var re=E.getText(),ft=d(P,function(Oo,Wl){var Ry=Oo.range.start.line-Wl.range.start.line;return Ry===0?Oo.range.start.character-Wl.range.start.character:Ry}),qe=re.length,Zr=ft.length-1;Zr>=0;Zr--){var en=ft[Zr],Hn=E.offsetAt(en.range.start),fe=E.offsetAt(en.range.end);if(fe<=qe)re=re.substring(0,Hn)+en.newText+re.substring(fe,re.length);else throw new Error("Overlapping edit");qe=Hn}return re}p.applyEdits=y;function d(E,P){if(E.length<=1)return E;var re=E.length/2|0,ft=E.slice(0,re),qe=E.slice(re);d(ft,P),d(qe,P);for(var Zr=0,en=0,Hn=0;Zr<ft.length&&en<qe.length;){var fe=P(ft[Zr],qe[en]);fe<=0?E[Hn++]=ft[Zr++]:E[Hn++]=qe[en++]}for(;Zr<ft.length;)E[Hn++]=ft[Zr++];for(;en<qe.length;)E[Hn++]=qe[en++];return E}})(jn=e.TextDocument||(e.TextDocument={}));var Rn=function(){function p(x,b,y,d){this._uri=x,this._languageId=b,this._version=y,this._content=d,this._lineOffsets=void 0}return Object.defineProperty(p.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),p.prototype.getText=function(x){if(x){var b=this.offsetAt(x.start),y=this.offsetAt(x.end);return this._content.substring(b,y)}return this._content},p.prototype.update=function(x,b){this._content=x.text,this._version=b,this._lineOffsets=void 0},p.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var x=[],b=this._content,y=!0,d=0;d<b.length;d++){y&&(x.push(d),y=!1);var E=b.charAt(d);y=E==="\r"||E===`
`,E==="\r"&&d+1<b.length&&b.charAt(d+1)===`
`&&d++}y&&b.length>0&&x.push(b.length),this._lineOffsets=x}return this._lineOffsets},p.prototype.positionAt=function(x){x=Math.max(Math.min(x,this._content.length),0);var b=this.getLineOffsets(),y=0,d=b.length;if(d===0)return s.create(0,x);for(;y<d;){var E=Math.floor((y+d)/2);b[E]>x?d=E:y=E+1}var P=y-1;return s.create(P,x-b[P])},p.prototype.offsetAt=function(x){var b=this.getLineOffsets();if(x.line>=b.length)return this._content.length;if(x.line<0)return 0;var y=b[x.line],d=x.line+1<b.length?b[x.line+1]:this._content.length;return Math.max(Math.min(y+x.character,d),y)},Object.defineProperty(p.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),p}(),C;(function(p){var x=Object.prototype.toString;function b(fe){return typeof fe<"u"}p.defined=b;function y(fe){return typeof fe>"u"}p.undefined=y;function d(fe){return fe===!0||fe===!1}p.boolean=d;function E(fe){return x.call(fe)==="[object String]"}p.string=E;function P(fe){return x.call(fe)==="[object Number]"}p.number=P;function re(fe,Oo,Wl){return x.call(fe)==="[object Number]"&&Oo<=fe&&fe<=Wl}p.numberRange=re;function ft(fe){return x.call(fe)==="[object Number]"&&-2147483648<=fe&&fe<=2147483647}p.integer=ft;function qe(fe){return x.call(fe)==="[object Number]"&&0<=fe&&fe<=2147483647}p.uinteger=qe;function Zr(fe){return x.call(fe)==="[object Function]"}p.func=Zr;function en(fe){return fe!==null&&typeof fe=="object"}p.objectLiteral=en;function Hn(fe,Oo){return Array.isArray(fe)&&fe.every(Oo)}p.typedArray=Hn})(C||(C={}))})});var nt=H(fr=>{"use strict";Object.defineProperty(fr,"__esModule",{value:!0});fr.ProtocolNotificationType=fr.ProtocolNotificationType0=fr.ProtocolRequestType=fr.ProtocolRequestType0=fr.RegistrationType=fr.MessageDirection=void 0;var Go=Vn(),Nk;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(Nk=fr.MessageDirection||(fr.MessageDirection={}));var zp=class{constructor(e){this.method=e}};fr.RegistrationType=zp;var Vp=class extends Go.RequestType0{constructor(e){super(e)}};fr.ProtocolRequestType0=Vp;var Xp=class extends Go.RequestType{constructor(e){super(e,Go.ParameterStructures.byName)}};fr.ProtocolRequestType=Xp;var Yp=class extends Go.NotificationType0{constructor(e){super(e)}};fr.ProtocolNotificationType0=Yp;var Jp=class extends Go.NotificationType{constructor(e){super(e,Go.ParameterStructures.byName)}};fr.ProtocolNotificationType=Jp});var rc=H(St=>{"use strict";Object.defineProperty(St,"__esModule",{value:!0});St.objectLiteral=St.typedArray=St.stringArray=St.array=St.func=St.error=St.number=St.string=St.boolean=void 0;function $k(t){return t===!0||t===!1}St.boolean=$k;function By(t){return typeof t=="string"||t instanceof String}St.string=By;function Pk(t){return typeof t=="number"||t instanceof Number}St.number=Pk;function Ik(t){return t instanceof Error}St.error=Ik;function Dk(t){return typeof t=="function"}St.func=Dk;function zy(t){return Array.isArray(t)}St.array=zy;function Ok(t){return zy(t)&&t.every(e=>By(e))}St.stringArray=Ok;function Lk(t,e){return Array.isArray(t)&&t.every(e)}St.typedArray=Lk;function Mk(t){return t!==null&&typeof t=="object"}St.objectLiteral=Mk});var Xy=H(Sa=>{"use strict";Object.defineProperty(Sa,"__esModule",{value:!0});Sa.ImplementationRequest=void 0;var Vy=nt(),Fk;(function(t){t.method="textDocument/implementation",t.messageDirection=Vy.MessageDirection.clientToServer,t.type=new Vy.ProtocolRequestType(t.method)})(Fk=Sa.ImplementationRequest||(Sa.ImplementationRequest={}))});var Jy=H(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.TypeDefinitionRequest=void 0;var Yy=nt(),Uk;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=Yy.MessageDirection.clientToServer,t.type=new Yy.ProtocolRequestType(t.method)})(Uk=Aa.TypeDefinitionRequest||(Aa.TypeDefinitionRequest={}))});var Qy=H(xi=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});xi.DidChangeWorkspaceFoldersNotification=xi.WorkspaceFoldersRequest=void 0;var nc=nt(),qk;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=nc.MessageDirection.serverToClient,t.type=new nc.ProtocolRequestType0(t.method)})(qk=xi.WorkspaceFoldersRequest||(xi.WorkspaceFoldersRequest={}));var Gk;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=nc.MessageDirection.clientToServer,t.type=new nc.ProtocolNotificationType(t.method)})(Gk=xi.DidChangeWorkspaceFoldersNotification||(xi.DidChangeWorkspaceFoldersNotification={}))});var eg=H(wa=>{"use strict";Object.defineProperty(wa,"__esModule",{value:!0});wa.ConfigurationRequest=void 0;var Zy=nt(),jk;(function(t){t.method="workspace/configuration",t.messageDirection=Zy.MessageDirection.serverToClient,t.type=new Zy.ProtocolRequestType(t.method)})(jk=wa.ConfigurationRequest||(wa.ConfigurationRequest={}))});var tg=H(bi=>{"use strict";Object.defineProperty(bi,"__esModule",{value:!0});bi.ColorPresentationRequest=bi.DocumentColorRequest=void 0;var ic=nt(),Hk;(function(t){t.method="textDocument/documentColor",t.messageDirection=ic.MessageDirection.clientToServer,t.type=new ic.ProtocolRequestType(t.method)})(Hk=bi.DocumentColorRequest||(bi.DocumentColorRequest={}));var Kk;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=ic.MessageDirection.clientToServer,t.type=new ic.ProtocolRequestType(t.method)})(Kk=bi.ColorPresentationRequest||(bi.ColorPresentationRequest={}))});var ng=H(ka=>{"use strict";Object.defineProperty(ka,"__esModule",{value:!0});ka.FoldingRangeRequest=void 0;var rg=nt(),Wk;(function(t){t.method="textDocument/foldingRange",t.messageDirection=rg.MessageDirection.clientToServer,t.type=new rg.ProtocolRequestType(t.method)})(Wk=ka.FoldingRangeRequest||(ka.FoldingRangeRequest={}))});var og=H(Ca=>{"use strict";Object.defineProperty(Ca,"__esModule",{value:!0});Ca.DeclarationRequest=void 0;var ig=nt(),Bk;(function(t){t.method="textDocument/declaration",t.messageDirection=ig.MessageDirection.clientToServer,t.type=new ig.ProtocolRequestType(t.method)})(Bk=Ca.DeclarationRequest||(Ca.DeclarationRequest={}))});var ag=H(Ea=>{"use strict";Object.defineProperty(Ea,"__esModule",{value:!0});Ea.SelectionRangeRequest=void 0;var sg=nt(),zk;(function(t){t.method="textDocument/selectionRange",t.messageDirection=sg.MessageDirection.clientToServer,t.type=new sg.ProtocolRequestType(t.method)})(zk=Ea.SelectionRangeRequest||(Ea.SelectionRangeRequest={}))});var lg=H(nn=>{"use strict";Object.defineProperty(nn,"__esModule",{value:!0});nn.WorkDoneProgressCancelNotification=nn.WorkDoneProgressCreateRequest=nn.WorkDoneProgress=void 0;var Vk=Vn(),oc=nt(),Xk;(function(t){t.type=new Vk.ProgressType;function e(r){return r===t.type}t.is=e})(Xk=nn.WorkDoneProgress||(nn.WorkDoneProgress={}));var Yk;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=oc.MessageDirection.serverToClient,t.type=new oc.ProtocolRequestType(t.method)})(Yk=nn.WorkDoneProgressCreateRequest||(nn.WorkDoneProgressCreateRequest={}));var Jk;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=oc.MessageDirection.clientToServer,t.type=new oc.ProtocolNotificationType(t.method)})(Jk=nn.WorkDoneProgressCancelNotification||(nn.WorkDoneProgressCancelNotification={}))});var cg=H(on=>{"use strict";Object.defineProperty(on,"__esModule",{value:!0});on.CallHierarchyOutgoingCallsRequest=on.CallHierarchyIncomingCallsRequest=on.CallHierarchyPrepareRequest=void 0;var jo=nt(),Qk;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=jo.MessageDirection.clientToServer,t.type=new jo.ProtocolRequestType(t.method)})(Qk=on.CallHierarchyPrepareRequest||(on.CallHierarchyPrepareRequest={}));var Zk;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=jo.MessageDirection.clientToServer,t.type=new jo.ProtocolRequestType(t.method)})(Zk=on.CallHierarchyIncomingCallsRequest||(on.CallHierarchyIncomingCallsRequest={}));var eC;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=jo.MessageDirection.clientToServer,t.type=new jo.ProtocolRequestType(t.method)})(eC=on.CallHierarchyOutgoingCallsRequest||(on.CallHierarchyOutgoingCallsRequest={}))});var ug=H(At=>{"use strict";Object.defineProperty(At,"__esModule",{value:!0});At.SemanticTokensRefreshRequest=At.SemanticTokensRangeRequest=At.SemanticTokensDeltaRequest=At.SemanticTokensRequest=At.SemanticTokensRegistrationType=At.TokenFormat=void 0;var Xn=nt(),tC;(function(t){t.Relative="relative"})(tC=At.TokenFormat||(At.TokenFormat={}));var sc;(function(t){t.method="textDocument/semanticTokens",t.type=new Xn.RegistrationType(t.method)})(sc=At.SemanticTokensRegistrationType||(At.SemanticTokensRegistrationType={}));var rC;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=Xn.MessageDirection.clientToServer,t.type=new Xn.ProtocolRequestType(t.method),t.registrationMethod=sc.method})(rC=At.SemanticTokensRequest||(At.SemanticTokensRequest={}));var nC;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=Xn.MessageDirection.clientToServer,t.type=new Xn.ProtocolRequestType(t.method),t.registrationMethod=sc.method})(nC=At.SemanticTokensDeltaRequest||(At.SemanticTokensDeltaRequest={}));var iC;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=Xn.MessageDirection.clientToServer,t.type=new Xn.ProtocolRequestType(t.method),t.registrationMethod=sc.method})(iC=At.SemanticTokensRangeRequest||(At.SemanticTokensRangeRequest={}));var oC;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=Xn.MessageDirection.clientToServer,t.type=new Xn.ProtocolRequestType0(t.method)})(oC=At.SemanticTokensRefreshRequest||(At.SemanticTokensRefreshRequest={}))});var dg=H(_a=>{"use strict";Object.defineProperty(_a,"__esModule",{value:!0});_a.ShowDocumentRequest=void 0;var fg=nt(),sC;(function(t){t.method="window/showDocument",t.messageDirection=fg.MessageDirection.serverToClient,t.type=new fg.ProtocolRequestType(t.method)})(sC=_a.ShowDocumentRequest||(_a.ShowDocumentRequest={}))});var mg=H(Na=>{"use strict";Object.defineProperty(Na,"__esModule",{value:!0});Na.LinkedEditingRangeRequest=void 0;var pg=nt(),aC;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=pg.MessageDirection.clientToServer,t.type=new pg.ProtocolRequestType(t.method)})(aC=Na.LinkedEditingRangeRequest||(Na.LinkedEditingRangeRequest={}))});var hg=H(it=>{"use strict";Object.defineProperty(it,"__esModule",{value:!0});it.WillDeleteFilesRequest=it.DidDeleteFilesNotification=it.DidRenameFilesNotification=it.WillRenameFilesRequest=it.DidCreateFilesNotification=it.WillCreateFilesRequest=it.FileOperationPatternKind=void 0;var Gr=nt(),lC;(function(t){t.file="file",t.folder="folder"})(lC=it.FileOperationPatternKind||(it.FileOperationPatternKind={}));var cC;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=Gr.MessageDirection.clientToServer,t.type=new Gr.ProtocolRequestType(t.method)})(cC=it.WillCreateFilesRequest||(it.WillCreateFilesRequest={}));var uC;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=Gr.MessageDirection.clientToServer,t.type=new Gr.ProtocolNotificationType(t.method)})(uC=it.DidCreateFilesNotification||(it.DidCreateFilesNotification={}));var fC;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=Gr.MessageDirection.clientToServer,t.type=new Gr.ProtocolRequestType(t.method)})(fC=it.WillRenameFilesRequest||(it.WillRenameFilesRequest={}));var dC;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=Gr.MessageDirection.clientToServer,t.type=new Gr.ProtocolNotificationType(t.method)})(dC=it.DidRenameFilesNotification||(it.DidRenameFilesNotification={}));var pC;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=Gr.MessageDirection.clientToServer,t.type=new Gr.ProtocolNotificationType(t.method)})(pC=it.DidDeleteFilesNotification||(it.DidDeleteFilesNotification={}));var mC;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=Gr.MessageDirection.clientToServer,t.type=new Gr.ProtocolRequestType(t.method)})(mC=it.WillDeleteFilesRequest||(it.WillDeleteFilesRequest={}))});var gg=H(sn=>{"use strict";Object.defineProperty(sn,"__esModule",{value:!0});sn.MonikerRequest=sn.MonikerKind=sn.UniquenessLevel=void 0;var yg=nt(),hC;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(hC=sn.UniquenessLevel||(sn.UniquenessLevel={}));var yC;(function(t){t.$import="import",t.$export="export",t.local="local"})(yC=sn.MonikerKind||(sn.MonikerKind={}));var gC;(function(t){t.method="textDocument/moniker",t.messageDirection=yg.MessageDirection.clientToServer,t.type=new yg.ProtocolRequestType(t.method)})(gC=sn.MonikerRequest||(sn.MonikerRequest={}))});var Tg=H(an=>{"use strict";Object.defineProperty(an,"__esModule",{value:!0});an.TypeHierarchySubtypesRequest=an.TypeHierarchySupertypesRequest=an.TypeHierarchyPrepareRequest=void 0;var Ho=nt(),TC;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=Ho.MessageDirection.clientToServer,t.type=new Ho.ProtocolRequestType(t.method)})(TC=an.TypeHierarchyPrepareRequest||(an.TypeHierarchyPrepareRequest={}));var vC;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=Ho.MessageDirection.clientToServer,t.type=new Ho.ProtocolRequestType(t.method)})(vC=an.TypeHierarchySupertypesRequest||(an.TypeHierarchySupertypesRequest={}));var RC;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=Ho.MessageDirection.clientToServer,t.type=new Ho.ProtocolRequestType(t.method)})(RC=an.TypeHierarchySubtypesRequest||(an.TypeHierarchySubtypesRequest={}))});var vg=H(Si=>{"use strict";Object.defineProperty(Si,"__esModule",{value:!0});Si.InlineValueRefreshRequest=Si.InlineValueRequest=void 0;var ac=nt(),xC;(function(t){t.method="textDocument/inlineValue",t.messageDirection=ac.MessageDirection.clientToServer,t.type=new ac.ProtocolRequestType(t.method)})(xC=Si.InlineValueRequest||(Si.InlineValueRequest={}));var bC;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=ac.MessageDirection.clientToServer,t.type=new ac.ProtocolRequestType0(t.method)})(bC=Si.InlineValueRefreshRequest||(Si.InlineValueRefreshRequest={}))});var Rg=H(ln=>{"use strict";Object.defineProperty(ln,"__esModule",{value:!0});ln.InlayHintRefreshRequest=ln.InlayHintResolveRequest=ln.InlayHintRequest=void 0;var Ko=nt(),SC;(function(t){t.method="textDocument/inlayHint",t.messageDirection=Ko.MessageDirection.clientToServer,t.type=new Ko.ProtocolRequestType(t.method)})(SC=ln.InlayHintRequest||(ln.InlayHintRequest={}));var AC;(function(t){t.method="inlayHint/resolve",t.messageDirection=Ko.MessageDirection.clientToServer,t.type=new Ko.ProtocolRequestType(t.method)})(AC=ln.InlayHintResolveRequest||(ln.InlayHintResolveRequest={}));var wC;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=Ko.MessageDirection.clientToServer,t.type=new Ko.ProtocolRequestType0(t.method)})(wC=ln.InlayHintRefreshRequest||(ln.InlayHintRefreshRequest={}))});var bg=H(Wt=>{"use strict";Object.defineProperty(Wt,"__esModule",{value:!0});Wt.DiagnosticRefreshRequest=Wt.WorkspaceDiagnosticRequest=Wt.DocumentDiagnosticRequest=Wt.DocumentDiagnosticReportKind=Wt.DiagnosticServerCancellationData=void 0;var xg=Vn(),kC=rc(),Wo=nt(),CC;(function(t){function e(r){let n=r;return n&&kC.boolean(n.retriggerRequest)}t.is=e})(CC=Wt.DiagnosticServerCancellationData||(Wt.DiagnosticServerCancellationData={}));var EC;(function(t){t.Full="full",t.Unchanged="unchanged"})(EC=Wt.DocumentDiagnosticReportKind||(Wt.DocumentDiagnosticReportKind={}));var _C;(function(t){t.method="textDocument/diagnostic",t.messageDirection=Wo.MessageDirection.clientToServer,t.type=new Wo.ProtocolRequestType(t.method),t.partialResult=new xg.ProgressType})(_C=Wt.DocumentDiagnosticRequest||(Wt.DocumentDiagnosticRequest={}));var NC;(function(t){t.method="workspace/diagnostic",t.messageDirection=Wo.MessageDirection.clientToServer,t.type=new Wo.ProtocolRequestType(t.method),t.partialResult=new xg.ProgressType})(NC=Wt.WorkspaceDiagnosticRequest||(Wt.WorkspaceDiagnosticRequest={}));var $C;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=Wo.MessageDirection.clientToServer,t.type=new Wo.ProtocolRequestType0(t.method)})($C=Wt.DiagnosticRefreshRequest||(Wt.DiagnosticRefreshRequest={}))});var wg=H(Re=>{"use strict";Object.defineProperty(Re,"__esModule",{value:!0});Re.DidCloseNotebookDocumentNotification=Re.DidSaveNotebookDocumentNotification=Re.DidChangeNotebookDocumentNotification=Re.NotebookCellArrayChange=Re.DidOpenNotebookDocumentNotification=Re.NotebookDocumentSyncRegistrationType=Re.NotebookDocument=Re.NotebookCell=Re.ExecutionSummary=Re.NotebookCellKind=void 0;var $a=io(),cn=rc(),xn=nt(),Sg;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(Sg=Re.NotebookCellKind||(Re.NotebookCellKind={}));var Ag;(function(t){function e(i,o){let s={executionOrder:i};return(o===!0||o===!1)&&(s.success=o),s}t.create=e;function r(i){let o=i;return cn.objectLiteral(o)&&$a.uinteger.is(o.executionOrder)&&(o.success===void 0||cn.boolean(o.success))}t.is=r;function n(i,o){return i===o?!0:i==null||o===null||o===void 0?!1:i.executionOrder===o.executionOrder&&i.success===o.success}t.equals=n})(Ag=Re.ExecutionSummary||(Re.ExecutionSummary={}));var Qp;(function(t){function e(o,s){return{kind:o,document:s}}t.create=e;function r(o){let s=o;return cn.objectLiteral(s)&&Sg.is(s.kind)&&$a.DocumentUri.is(s.document)&&(s.metadata===void 0||cn.objectLiteral(s.metadata))}t.is=r;function n(o,s){let a=new Set;return o.document!==s.document&&a.add("document"),o.kind!==s.kind&&a.add("kind"),o.executionSummary!==s.executionSummary&&a.add("executionSummary"),(o.metadata!==void 0||s.metadata!==void 0)&&!i(o.metadata,s.metadata)&&a.add("metadata"),(o.executionSummary!==void 0||s.executionSummary!==void 0)&&!Ag.equals(o.executionSummary,s.executionSummary)&&a.add("executionSummary"),a}t.diff=n;function i(o,s){if(o===s)return!0;if(o==null||s===null||s===void 0||typeof o!=typeof s||typeof o!="object")return!1;let a=Array.isArray(o),l=Array.isArray(s);if(a!==l)return!1;if(a&&l){if(o.length!==s.length)return!1;for(let c=0;c<o.length;c++)if(!i(o[c],s[c]))return!1}if(cn.objectLiteral(o)&&cn.objectLiteral(s)){let c=Object.keys(o),u=Object.keys(s);if(c.length!==u.length||(c.sort(),u.sort(),!i(c,u)))return!1;for(let f=0;f<c.length;f++){let m=c[f];if(!i(o[m],s[m]))return!1}}return!0}})(Qp=Re.NotebookCell||(Re.NotebookCell={}));var PC;(function(t){function e(n,i,o,s){return{uri:n,notebookType:i,version:o,cells:s}}t.create=e;function r(n){let i=n;return cn.objectLiteral(i)&&cn.string(i.uri)&&$a.integer.is(i.version)&&cn.typedArray(i.cells,Qp.is)}t.is=r})(PC=Re.NotebookDocument||(Re.NotebookDocument={}));var Pa;(function(t){t.method="notebookDocument/sync",t.messageDirection=xn.MessageDirection.clientToServer,t.type=new xn.RegistrationType(t.method)})(Pa=Re.NotebookDocumentSyncRegistrationType||(Re.NotebookDocumentSyncRegistrationType={}));var IC;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=xn.MessageDirection.clientToServer,t.type=new xn.ProtocolNotificationType(t.method),t.registrationMethod=Pa.method})(IC=Re.DidOpenNotebookDocumentNotification||(Re.DidOpenNotebookDocumentNotification={}));var DC;(function(t){function e(n){let i=n;return cn.objectLiteral(i)&&$a.uinteger.is(i.start)&&$a.uinteger.is(i.deleteCount)&&(i.cells===void 0||cn.typedArray(i.cells,Qp.is))}t.is=e;function r(n,i,o){let s={start:n,deleteCount:i};return o!==void 0&&(s.cells=o),s}t.create=r})(DC=Re.NotebookCellArrayChange||(Re.NotebookCellArrayChange={}));var OC;(function(t){t.method="notebookDocument/didChange",t.messageDirection=xn.MessageDirection.clientToServer,t.type=new xn.ProtocolNotificationType(t.method),t.registrationMethod=Pa.method})(OC=Re.DidChangeNotebookDocumentNotification||(Re.DidChangeNotebookDocumentNotification={}));var LC;(function(t){t.method="notebookDocument/didSave",t.messageDirection=xn.MessageDirection.clientToServer,t.type=new xn.ProtocolNotificationType(t.method),t.registrationMethod=Pa.method})(LC=Re.DidSaveNotebookDocumentNotification||(Re.DidSaveNotebookDocumentNotification={}));var MC;(function(t){t.method="notebookDocument/didClose",t.messageDirection=xn.MessageDirection.clientToServer,t.type=new xn.ProtocolNotificationType(t.method),t.registrationMethod=Pa.method})(MC=Re.DidCloseNotebookDocumentNotification||(Re.DidCloseNotebookDocumentNotification={}))});var Dg=H(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});h.WorkspaceSymbolRequest=h.CodeActionResolveRequest=h.CodeActionRequest=h.DocumentSymbolRequest=h.DocumentHighlightRequest=h.ReferencesRequest=h.DefinitionRequest=h.SignatureHelpRequest=h.SignatureHelpTriggerKind=h.HoverRequest=h.CompletionResolveRequest=h.CompletionRequest=h.CompletionTriggerKind=h.PublishDiagnosticsNotification=h.WatchKind=h.RelativePattern=h.FileChangeType=h.DidChangeWatchedFilesNotification=h.WillSaveTextDocumentWaitUntilRequest=h.WillSaveTextDocumentNotification=h.TextDocumentSaveReason=h.DidSaveTextDocumentNotification=h.DidCloseTextDocumentNotification=h.DidChangeTextDocumentNotification=h.TextDocumentContentChangeEvent=h.DidOpenTextDocumentNotification=h.TextDocumentSyncKind=h.TelemetryEventNotification=h.LogMessageNotification=h.ShowMessageRequest=h.ShowMessageNotification=h.MessageType=h.DidChangeConfigurationNotification=h.ExitNotification=h.ShutdownRequest=h.InitializedNotification=h.InitializeErrorCodes=h.InitializeRequest=h.WorkDoneProgressOptions=h.TextDocumentRegistrationOptions=h.StaticRegistrationOptions=h.PositionEncodingKind=h.FailureHandlingKind=h.ResourceOperationKind=h.UnregistrationRequest=h.RegistrationRequest=h.DocumentSelector=h.NotebookCellTextDocumentFilter=h.NotebookDocumentFilter=h.TextDocumentFilter=void 0;h.TypeHierarchySubtypesRequest=h.TypeHierarchyPrepareRequest=h.MonikerRequest=h.MonikerKind=h.UniquenessLevel=h.WillDeleteFilesRequest=h.DidDeleteFilesNotification=h.WillRenameFilesRequest=h.DidRenameFilesNotification=h.WillCreateFilesRequest=h.DidCreateFilesNotification=h.FileOperationPatternKind=h.LinkedEditingRangeRequest=h.ShowDocumentRequest=h.SemanticTokensRegistrationType=h.SemanticTokensRefreshRequest=h.SemanticTokensRangeRequest=h.SemanticTokensDeltaRequest=h.SemanticTokensRequest=h.TokenFormat=h.CallHierarchyPrepareRequest=h.CallHierarchyOutgoingCallsRequest=h.CallHierarchyIncomingCallsRequest=h.WorkDoneProgressCancelNotification=h.WorkDoneProgressCreateRequest=h.WorkDoneProgress=h.SelectionRangeRequest=h.DeclarationRequest=h.FoldingRangeRequest=h.ColorPresentationRequest=h.DocumentColorRequest=h.ConfigurationRequest=h.DidChangeWorkspaceFoldersNotification=h.WorkspaceFoldersRequest=h.TypeDefinitionRequest=h.ImplementationRequest=h.ApplyWorkspaceEditRequest=h.ExecuteCommandRequest=h.PrepareRenameRequest=h.RenameRequest=h.PrepareSupportDefaultBehavior=h.DocumentOnTypeFormattingRequest=h.DocumentRangeFormattingRequest=h.DocumentFormattingRequest=h.DocumentLinkResolveRequest=h.DocumentLinkRequest=h.CodeLensRefreshRequest=h.CodeLensResolveRequest=h.CodeLensRequest=h.WorkspaceSymbolResolveRequest=void 0;h.DidCloseNotebookDocumentNotification=h.DidSaveNotebookDocumentNotification=h.DidChangeNotebookDocumentNotification=h.NotebookCellArrayChange=h.DidOpenNotebookDocumentNotification=h.NotebookDocumentSyncRegistrationType=h.NotebookDocument=h.NotebookCell=h.ExecutionSummary=h.NotebookCellKind=h.DiagnosticRefreshRequest=h.WorkspaceDiagnosticRequest=h.DocumentDiagnosticRequest=h.DocumentDiagnosticReportKind=h.DiagnosticServerCancellationData=h.InlayHintRefreshRequest=h.InlayHintResolveRequest=h.InlayHintRequest=h.InlineValueRefreshRequest=h.InlineValueRequest=h.TypeHierarchySupertypesRequest=void 0;var O=nt(),kg=io(),Bt=rc(),FC=Xy();Object.defineProperty(h,"ImplementationRequest",{enumerable:!0,get:function(){return FC.ImplementationRequest}});var UC=Jy();Object.defineProperty(h,"TypeDefinitionRequest",{enumerable:!0,get:function(){return UC.TypeDefinitionRequest}});var Cg=Qy();Object.defineProperty(h,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return Cg.WorkspaceFoldersRequest}});Object.defineProperty(h,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return Cg.DidChangeWorkspaceFoldersNotification}});var qC=eg();Object.defineProperty(h,"ConfigurationRequest",{enumerable:!0,get:function(){return qC.ConfigurationRequest}});var Eg=tg();Object.defineProperty(h,"DocumentColorRequest",{enumerable:!0,get:function(){return Eg.DocumentColorRequest}});Object.defineProperty(h,"ColorPresentationRequest",{enumerable:!0,get:function(){return Eg.ColorPresentationRequest}});var GC=ng();Object.defineProperty(h,"FoldingRangeRequest",{enumerable:!0,get:function(){return GC.FoldingRangeRequest}});var jC=og();Object.defineProperty(h,"DeclarationRequest",{enumerable:!0,get:function(){return jC.DeclarationRequest}});var HC=ag();Object.defineProperty(h,"SelectionRangeRequest",{enumerable:!0,get:function(){return HC.SelectionRangeRequest}});var Zp=lg();Object.defineProperty(h,"WorkDoneProgress",{enumerable:!0,get:function(){return Zp.WorkDoneProgress}});Object.defineProperty(h,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return Zp.WorkDoneProgressCreateRequest}});Object.defineProperty(h,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return Zp.WorkDoneProgressCancelNotification}});var em=cg();Object.defineProperty(h,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return em.CallHierarchyIncomingCallsRequest}});Object.defineProperty(h,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return em.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(h,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return em.CallHierarchyPrepareRequest}});var Bo=ug();Object.defineProperty(h,"TokenFormat",{enumerable:!0,get:function(){return Bo.TokenFormat}});Object.defineProperty(h,"SemanticTokensRequest",{enumerable:!0,get:function(){return Bo.SemanticTokensRequest}});Object.defineProperty(h,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return Bo.SemanticTokensDeltaRequest}});Object.defineProperty(h,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return Bo.SemanticTokensRangeRequest}});Object.defineProperty(h,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return Bo.SemanticTokensRefreshRequest}});Object.defineProperty(h,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return Bo.SemanticTokensRegistrationType}});var KC=dg();Object.defineProperty(h,"ShowDocumentRequest",{enumerable:!0,get:function(){return KC.ShowDocumentRequest}});var WC=mg();Object.defineProperty(h,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return WC.LinkedEditingRangeRequest}});var oo=hg();Object.defineProperty(h,"FileOperationPatternKind",{enumerable:!0,get:function(){return oo.FileOperationPatternKind}});Object.defineProperty(h,"DidCreateFilesNotification",{enumerable:!0,get:function(){return oo.DidCreateFilesNotification}});Object.defineProperty(h,"WillCreateFilesRequest",{enumerable:!0,get:function(){return oo.WillCreateFilesRequest}});Object.defineProperty(h,"DidRenameFilesNotification",{enumerable:!0,get:function(){return oo.DidRenameFilesNotification}});Object.defineProperty(h,"WillRenameFilesRequest",{enumerable:!0,get:function(){return oo.WillRenameFilesRequest}});Object.defineProperty(h,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return oo.DidDeleteFilesNotification}});Object.defineProperty(h,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return oo.WillDeleteFilesRequest}});var tm=gg();Object.defineProperty(h,"UniquenessLevel",{enumerable:!0,get:function(){return tm.UniquenessLevel}});Object.defineProperty(h,"MonikerKind",{enumerable:!0,get:function(){return tm.MonikerKind}});Object.defineProperty(h,"MonikerRequest",{enumerable:!0,get:function(){return tm.MonikerRequest}});var rm=Tg();Object.defineProperty(h,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return rm.TypeHierarchyPrepareRequest}});Object.defineProperty(h,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return rm.TypeHierarchySubtypesRequest}});Object.defineProperty(h,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return rm.TypeHierarchySupertypesRequest}});var _g=vg();Object.defineProperty(h,"InlineValueRequest",{enumerable:!0,get:function(){return _g.InlineValueRequest}});Object.defineProperty(h,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return _g.InlineValueRefreshRequest}});var nm=Rg();Object.defineProperty(h,"InlayHintRequest",{enumerable:!0,get:function(){return nm.InlayHintRequest}});Object.defineProperty(h,"InlayHintResolveRequest",{enumerable:!0,get:function(){return nm.InlayHintResolveRequest}});Object.defineProperty(h,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return nm.InlayHintRefreshRequest}});var Ia=bg();Object.defineProperty(h,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return Ia.DiagnosticServerCancellationData}});Object.defineProperty(h,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return Ia.DocumentDiagnosticReportKind}});Object.defineProperty(h,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return Ia.DocumentDiagnosticRequest}});Object.defineProperty(h,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return Ia.WorkspaceDiagnosticRequest}});Object.defineProperty(h,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return Ia.DiagnosticRefreshRequest}});var bn=wg();Object.defineProperty(h,"NotebookCellKind",{enumerable:!0,get:function(){return bn.NotebookCellKind}});Object.defineProperty(h,"ExecutionSummary",{enumerable:!0,get:function(){return bn.ExecutionSummary}});Object.defineProperty(h,"NotebookCell",{enumerable:!0,get:function(){return bn.NotebookCell}});Object.defineProperty(h,"NotebookDocument",{enumerable:!0,get:function(){return bn.NotebookDocument}});Object.defineProperty(h,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return bn.NotebookDocumentSyncRegistrationType}});Object.defineProperty(h,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return bn.DidOpenNotebookDocumentNotification}});Object.defineProperty(h,"NotebookCellArrayChange",{enumerable:!0,get:function(){return bn.NotebookCellArrayChange}});Object.defineProperty(h,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return bn.DidChangeNotebookDocumentNotification}});Object.defineProperty(h,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return bn.DidSaveNotebookDocumentNotification}});Object.defineProperty(h,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return bn.DidCloseNotebookDocumentNotification}});var Ng;(function(t){function e(r){let n=r;return Bt.string(n.language)||Bt.string(n.scheme)||Bt.string(n.pattern)}t.is=e})(Ng=h.TextDocumentFilter||(h.TextDocumentFilter={}));var $g;(function(t){function e(r){let n=r;return Bt.objectLiteral(n)&&(Bt.string(n.notebookType)||Bt.string(n.scheme)||Bt.string(n.pattern))}t.is=e})($g=h.NotebookDocumentFilter||(h.NotebookDocumentFilter={}));var Pg;(function(t){function e(r){let n=r;return Bt.objectLiteral(n)&&(Bt.string(n.notebook)||$g.is(n.notebook))&&(n.language===void 0||Bt.string(n.language))}t.is=e})(Pg=h.NotebookCellTextDocumentFilter||(h.NotebookCellTextDocumentFilter={}));var Ig;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!Bt.string(n)&&!Ng.is(n)&&!Pg.is(n))return!1;return!0}t.is=e})(Ig=h.DocumentSelector||(h.DocumentSelector={}));var BC;(function(t){t.method="client/registerCapability",t.messageDirection=O.MessageDirection.serverToClient,t.type=new O.ProtocolRequestType(t.method)})(BC=h.RegistrationRequest||(h.RegistrationRequest={}));var zC;(function(t){t.method="client/unregisterCapability",t.messageDirection=O.MessageDirection.serverToClient,t.type=new O.ProtocolRequestType(t.method)})(zC=h.UnregistrationRequest||(h.UnregistrationRequest={}));var VC;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(VC=h.ResourceOperationKind||(h.ResourceOperationKind={}));var XC;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(XC=h.FailureHandlingKind||(h.FailureHandlingKind={}));var YC;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(YC=h.PositionEncodingKind||(h.PositionEncodingKind={}));var JC;(function(t){function e(r){let n=r;return n&&Bt.string(n.id)&&n.id.length>0}t.hasId=e})(JC=h.StaticRegistrationOptions||(h.StaticRegistrationOptions={}));var QC;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||Ig.is(n.documentSelector))}t.is=e})(QC=h.TextDocumentRegistrationOptions||(h.TextDocumentRegistrationOptions={}));var ZC;(function(t){function e(n){let i=n;return Bt.objectLiteral(i)&&(i.workDoneProgress===void 0||Bt.boolean(i.workDoneProgress))}t.is=e;function r(n){let i=n;return i&&Bt.boolean(i.workDoneProgress)}t.hasWorkDoneProgress=r})(ZC=h.WorkDoneProgressOptions||(h.WorkDoneProgressOptions={}));var eE;(function(t){t.method="initialize",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(eE=h.InitializeRequest||(h.InitializeRequest={}));var tE;(function(t){t.unknownProtocolVersion=1})(tE=h.InitializeErrorCodes||(h.InitializeErrorCodes={}));var rE;(function(t){t.method="initialized",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolNotificationType(t.method)})(rE=h.InitializedNotification||(h.InitializedNotification={}));var nE;(function(t){t.method="shutdown",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType0(t.method)})(nE=h.ShutdownRequest||(h.ShutdownRequest={}));var iE;(function(t){t.method="exit",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolNotificationType0(t.method)})(iE=h.ExitNotification||(h.ExitNotification={}));var oE;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolNotificationType(t.method)})(oE=h.DidChangeConfigurationNotification||(h.DidChangeConfigurationNotification={}));var sE;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4})(sE=h.MessageType||(h.MessageType={}));var aE;(function(t){t.method="window/showMessage",t.messageDirection=O.MessageDirection.serverToClient,t.type=new O.ProtocolNotificationType(t.method)})(aE=h.ShowMessageNotification||(h.ShowMessageNotification={}));var lE;(function(t){t.method="window/showMessageRequest",t.messageDirection=O.MessageDirection.serverToClient,t.type=new O.ProtocolRequestType(t.method)})(lE=h.ShowMessageRequest||(h.ShowMessageRequest={}));var cE;(function(t){t.method="window/logMessage",t.messageDirection=O.MessageDirection.serverToClient,t.type=new O.ProtocolNotificationType(t.method)})(cE=h.LogMessageNotification||(h.LogMessageNotification={}));var uE;(function(t){t.method="telemetry/event",t.messageDirection=O.MessageDirection.serverToClient,t.type=new O.ProtocolNotificationType(t.method)})(uE=h.TelemetryEventNotification||(h.TelemetryEventNotification={}));var fE;(function(t){t.None=0,t.Full=1,t.Incremental=2})(fE=h.TextDocumentSyncKind||(h.TextDocumentSyncKind={}));var dE;(function(t){t.method="textDocument/didOpen",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolNotificationType(t.method)})(dE=h.DidOpenTextDocumentNotification||(h.DidOpenTextDocumentNotification={}));var pE;(function(t){function e(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}t.isIncremental=e;function r(n){let i=n;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}t.isFull=r})(pE=h.TextDocumentContentChangeEvent||(h.TextDocumentContentChangeEvent={}));var mE;(function(t){t.method="textDocument/didChange",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolNotificationType(t.method)})(mE=h.DidChangeTextDocumentNotification||(h.DidChangeTextDocumentNotification={}));var hE;(function(t){t.method="textDocument/didClose",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolNotificationType(t.method)})(hE=h.DidCloseTextDocumentNotification||(h.DidCloseTextDocumentNotification={}));var yE;(function(t){t.method="textDocument/didSave",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolNotificationType(t.method)})(yE=h.DidSaveTextDocumentNotification||(h.DidSaveTextDocumentNotification={}));var gE;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(gE=h.TextDocumentSaveReason||(h.TextDocumentSaveReason={}));var TE;(function(t){t.method="textDocument/willSave",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolNotificationType(t.method)})(TE=h.WillSaveTextDocumentNotification||(h.WillSaveTextDocumentNotification={}));var vE;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(vE=h.WillSaveTextDocumentWaitUntilRequest||(h.WillSaveTextDocumentWaitUntilRequest={}));var RE;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolNotificationType(t.method)})(RE=h.DidChangeWatchedFilesNotification||(h.DidChangeWatchedFilesNotification={}));var xE;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(xE=h.FileChangeType||(h.FileChangeType={}));var bE;(function(t){function e(r){let n=r;return Bt.objectLiteral(n)&&(kg.URI.is(n.baseUri)||kg.WorkspaceFolder.is(n.baseUri))&&Bt.string(n.pattern)}t.is=e})(bE=h.RelativePattern||(h.RelativePattern={}));var SE;(function(t){t.Create=1,t.Change=2,t.Delete=4})(SE=h.WatchKind||(h.WatchKind={}));var AE;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=O.MessageDirection.serverToClient,t.type=new O.ProtocolNotificationType(t.method)})(AE=h.PublishDiagnosticsNotification||(h.PublishDiagnosticsNotification={}));var wE;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(wE=h.CompletionTriggerKind||(h.CompletionTriggerKind={}));var kE;(function(t){t.method="textDocument/completion",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(kE=h.CompletionRequest||(h.CompletionRequest={}));var CE;(function(t){t.method="completionItem/resolve",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(CE=h.CompletionResolveRequest||(h.CompletionResolveRequest={}));var EE;(function(t){t.method="textDocument/hover",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(EE=h.HoverRequest||(h.HoverRequest={}));var _E;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(_E=h.SignatureHelpTriggerKind||(h.SignatureHelpTriggerKind={}));var NE;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(NE=h.SignatureHelpRequest||(h.SignatureHelpRequest={}));var $E;(function(t){t.method="textDocument/definition",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})($E=h.DefinitionRequest||(h.DefinitionRequest={}));var PE;(function(t){t.method="textDocument/references",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(PE=h.ReferencesRequest||(h.ReferencesRequest={}));var IE;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(IE=h.DocumentHighlightRequest||(h.DocumentHighlightRequest={}));var DE;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(DE=h.DocumentSymbolRequest||(h.DocumentSymbolRequest={}));var OE;(function(t){t.method="textDocument/codeAction",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(OE=h.CodeActionRequest||(h.CodeActionRequest={}));var LE;(function(t){t.method="codeAction/resolve",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(LE=h.CodeActionResolveRequest||(h.CodeActionResolveRequest={}));var ME;(function(t){t.method="workspace/symbol",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(ME=h.WorkspaceSymbolRequest||(h.WorkspaceSymbolRequest={}));var FE;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(FE=h.WorkspaceSymbolResolveRequest||(h.WorkspaceSymbolResolveRequest={}));var UE;(function(t){t.method="textDocument/codeLens",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(UE=h.CodeLensRequest||(h.CodeLensRequest={}));var qE;(function(t){t.method="codeLens/resolve",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(qE=h.CodeLensResolveRequest||(h.CodeLensResolveRequest={}));var GE;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=O.MessageDirection.serverToClient,t.type=new O.ProtocolRequestType0(t.method)})(GE=h.CodeLensRefreshRequest||(h.CodeLensRefreshRequest={}));var jE;(function(t){t.method="textDocument/documentLink",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(jE=h.DocumentLinkRequest||(h.DocumentLinkRequest={}));var HE;(function(t){t.method="documentLink/resolve",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(HE=h.DocumentLinkResolveRequest||(h.DocumentLinkResolveRequest={}));var KE;(function(t){t.method="textDocument/formatting",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(KE=h.DocumentFormattingRequest||(h.DocumentFormattingRequest={}));var WE;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(WE=h.DocumentRangeFormattingRequest||(h.DocumentRangeFormattingRequest={}));var BE;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(BE=h.DocumentOnTypeFormattingRequest||(h.DocumentOnTypeFormattingRequest={}));var zE;(function(t){t.Identifier=1})(zE=h.PrepareSupportDefaultBehavior||(h.PrepareSupportDefaultBehavior={}));var VE;(function(t){t.method="textDocument/rename",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(VE=h.RenameRequest||(h.RenameRequest={}));var XE;(function(t){t.method="textDocument/prepareRename",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(XE=h.PrepareRenameRequest||(h.PrepareRenameRequest={}));var YE;(function(t){t.method="workspace/executeCommand",t.messageDirection=O.MessageDirection.clientToServer,t.type=new O.ProtocolRequestType(t.method)})(YE=h.ExecuteCommandRequest||(h.ExecuteCommandRequest={}));var JE;(function(t){t.method="workspace/applyEdit",t.messageDirection=O.MessageDirection.serverToClient,t.type=new O.ProtocolRequestType("workspace/applyEdit")})(JE=h.ApplyWorkspaceEditRequest||(h.ApplyWorkspaceEditRequest={}))});var Lg=H(lc=>{"use strict";Object.defineProperty(lc,"__esModule",{value:!0});lc.createProtocolConnection=void 0;var Og=Vn();function QE(t,e,r,n){return Og.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,Og.createMessageConnection)(t,e,r,n)}lc.createProtocolConnection=QE});var Mg=H(dr=>{"use strict";var ZE=dr&&dr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),cc=dr&&dr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&ZE(e,t,r)};Object.defineProperty(dr,"__esModule",{value:!0});dr.LSPErrorCodes=dr.createProtocolConnection=void 0;cc(Vn(),dr);cc(io(),dr);cc(nt(),dr);cc(Dg(),dr);var e_=Lg();Object.defineProperty(dr,"createProtocolConnection",{enumerable:!0,get:function(){return e_.createProtocolConnection}});var t_;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})(t_=dr.LSPErrorCodes||(dr.LSPErrorCodes={}))});var wt=H(Sn=>{"use strict";var r_=Sn&&Sn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Fg=Sn&&Sn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&r_(e,t,r)};Object.defineProperty(Sn,"__esModule",{value:!0});Sn.createProtocolConnection=void 0;var n_=Bp();Fg(Bp(),Sn);Fg(Mg(),Sn);function i_(t,e,r,n){return(0,n_.createMessageConnection)(t,e,r,n)}Sn.createProtocolConnection=i_});var om=H(Ai=>{"use strict";Object.defineProperty(Ai,"__esModule",{value:!0});Ai.SemanticTokensBuilder=Ai.SemanticTokensDiff=Ai.SemanticTokensFeature=void 0;var uc=wt(),o_=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(uc.SemanticTokensRefreshRequest.type),on:e=>{let r=uc.SemanticTokensRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onDelta:e=>{let r=uc.SemanticTokensDeltaRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onRange:e=>{let r=uc.SemanticTokensRangeRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Ai.SemanticTokensFeature=o_;var fc=class{constructor(e,r){this.originalSequence=e,this.modifiedSequence=r}computeDiff(){let e=this.originalSequence.length,r=this.modifiedSequence.length,n=0;for(;n<r&&n<e&&this.originalSequence[n]===this.modifiedSequence[n];)n++;if(n<r&&n<e){let i=e-1,o=r-1;for(;i>=n&&o>=n&&this.originalSequence[i]===this.modifiedSequence[o];)i--,o--;(i<n||o<n)&&(i++,o++);let s=i-n+1,a=this.modifiedSequence.slice(n,o+1);return a.length===1&&a[0]===this.originalSequence[i]?[{start:n,deleteCount:s-1}]:[{start:n,deleteCount:s,data:a}]}else return n<r?[{start:n,deleteCount:0,data:this.modifiedSequence.slice(n)}]:n<e?[{start:n,deleteCount:e-n}]:[]}};Ai.SemanticTokensDiff=fc;var im=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,r,n,i,o){let s=e,a=r;this._dataLen>0&&(s-=this._prevLine,s===0&&(a-=this._prevChar)),this._data[this._dataLen++]=s,this._data[this._dataLen++]=a,this._data[this._dataLen++]=n,this._data[this._dataLen++]=i,this._data[this._dataLen++]=o,this._prevLine=e,this._prevChar=r}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new fc(this._prevData,this._data).computeDiff()}:this.build()}};Ai.SemanticTokensBuilder=im});var am=H(dc=>{"use strict";Object.defineProperty(dc,"__esModule",{value:!0});dc.TextDocuments=void 0;var so=wt(),sm=class{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new so.Emitter,this._onDidOpen=new so.Emitter,this._onDidClose=new so.Emitter,this._onDidSave=new so.Emitter,this._onWillSave=new so.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=so.TextDocumentSyncKind.Incremental;let r=[];return r.push(e.onDidOpenTextDocument(n=>{let i=n.textDocument,o=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,o);let s=Object.freeze({document:o});this._onDidOpen.fire(s),this._onDidChangeContent.fire(s)})),r.push(e.onDidChangeTextDocument(n=>{let i=n.textDocument,o=n.contentChanges;if(o.length===0)return;let{version:s}=i;if(s==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let a=this._syncedDocuments.get(i.uri);a!==void 0&&(a=this._configuration.update(a,o,s),this._syncedDocuments.set(i.uri,a),this._onDidChangeContent.fire(Object.freeze({document:a})))})),r.push(e.onDidCloseTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(n.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),r.push(e.onWillSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:n.reason}))})),r.push(e.onWillSaveTextDocumentWaitUntil((n,i)=>{let o=this._syncedDocuments.get(n.textDocument.uri);return o!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:o,reason:n.reason}),i):[]})),r.push(e.onDidSaveTextDocument(n=>{let i=this._syncedDocuments.get(n.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),so.Disposable.create(()=>{r.forEach(n=>n.dispose())})}};dc.TextDocuments=sm});var cm=H(zo=>{"use strict";Object.defineProperty(zo,"__esModule",{value:!0});zo.NotebookDocuments=zo.NotebookSyncFeature=void 0;var jr=wt(),Ug=am(),s_=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(jr.DidOpenNotebookDocumentNotification.type,r=>{e(r)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(jr.DidChangeNotebookDocumentNotification.type,r=>{e(r)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(jr.DidSaveNotebookDocumentNotification.type,r=>{e(r)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(jr.DidCloseNotebookDocumentNotification.type,r=>{e(r)})}}};zo.NotebookSyncFeature=s_;var pc=class t{onDidOpenTextDocument(e){return this.openHandler=e,jr.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,jr.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,jr.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return t.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return t.NULL_DISPOSE}onDidSaveTextDocument(){return t.NULL_DISPOSE}};pc.NULL_DISPOSE=Object.freeze({dispose:()=>{}});var lm=class{constructor(e){e instanceof Ug.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new Ug.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new jr.Emitter,this._onDidChange=new jr.Emitter,this._onDidSave=new jr.Emitter,this._onDidClose=new jr.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){let r=this.notebookCellMap.get(e);return r&&r[0]}findNotebookDocumentForCell(e){let r=typeof e=="string"?e:e.document,n=this.notebookCellMap.get(r);return n&&n[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){let r=new pc,n=[];return n.push(this.cellTextDocuments.listen(r)),n.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(let o of i.cellTextDocuments)r.openTextDocument({textDocument:o});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),n.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o===void 0)return;o.version=i.notebookDocument.version;let s=o.metadata,a=!1,l=i.change;l.metadata!==void 0&&(a=!0,o.metadata=l.metadata);let c=[],u=[],f=[],m=[];if(l.cells!==void 0){let k=l.cells;if(k.structure!==void 0){let v=k.structure.array;if(o.cells.splice(v.start,v.deleteCount,...v.cells!==void 0?v.cells:[]),k.structure.didOpen!==void 0)for(let g of k.structure.didOpen)r.openTextDocument({textDocument:g}),c.push(g.uri);if(k.structure.didClose)for(let g of k.structure.didClose)r.closeTextDocument({textDocument:g}),u.push(g.uri)}if(k.data!==void 0){let v=new Map(k.data.map(g=>[g.document,g]));for(let g=0;g<=o.cells.length;g++){let _=v.get(o.cells[g].document);if(_!==void 0){let D=o.cells.splice(g,1,_);if(f.push({old:D[0],new:_}),v.delete(_.document),v.size===0)break}}}if(k.textContent!==void 0)for(let v of k.textContent)r.changeTextDocument({textDocument:v.document,contentChanges:v.changes}),m.push(v.document.uri)}this.updateCellMap(o);let T={notebookDocument:o};a&&(T.metadata={old:s,new:o.metadata});let S=[];for(let k of c)S.push(this.getNotebookCell(k));let A=[];for(let k of u)A.push(this.getNotebookCell(k));let N=[];for(let k of m)N.push(this.getNotebookCell(k));(S.length>0||A.length>0||f.length>0||N.length>0)&&(T.cells={added:S,removed:A,changed:{data:f,textContent:N}}),(T.metadata!==void 0||T.cells!==void 0)&&this._onDidChange.fire(T)})),n.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);o!==void 0&&this._onDidSave.fire(o)})),n.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{let o=this.notebookDocuments.get(i.notebookDocument.uri);if(o!==void 0){this._onDidClose.fire(o);for(let s of i.cellTextDocuments)r.closeTextDocument({textDocument:s});this.notebookDocuments.delete(i.notebookDocument.uri);for(let s of o.cells)this.notebookCellMap.delete(s.document)}})),jr.Disposable.create(()=>{n.forEach(i=>i.dispose())})}updateCellMap(e){for(let r of e.cells)this.notebookCellMap.set(r.document,[r,e])}};zo.NotebookDocuments=lm});var um=H(kt=>{"use strict";Object.defineProperty(kt,"__esModule",{value:!0});kt.thenable=kt.typedArray=kt.stringArray=kt.array=kt.func=kt.error=kt.number=kt.string=kt.boolean=void 0;function a_(t){return t===!0||t===!1}kt.boolean=a_;function qg(t){return typeof t=="string"||t instanceof String}kt.string=qg;function l_(t){return typeof t=="number"||t instanceof Number}kt.number=l_;function c_(t){return t instanceof Error}kt.error=c_;function Gg(t){return typeof t=="function"}kt.func=Gg;function jg(t){return Array.isArray(t)}kt.array=jg;function u_(t){return jg(t)&&t.every(e=>qg(e))}kt.stringArray=u_;function f_(t,e){return Array.isArray(t)&&t.every(e)}kt.typedArray=f_;function d_(t){return t&&Gg(t.then)}kt.thenable=d_});var fm=H(Hr=>{"use strict";Object.defineProperty(Hr,"__esModule",{value:!0});Hr.generateUuid=Hr.parse=Hr.isUUID=Hr.v4=Hr.empty=void 0;var Da=class{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}},Oa=class t extends Da{constructor(){super([t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-","4",t._randomHex(),t._randomHex(),t._randomHex(),"-",t._oneOf(t._timeHighBits),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex()].join(""))}static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return t._oneOf(t._chars)}};Oa._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];Oa._timeHighBits=["8","9","a","b"];Hr.empty=new Da("00000000-0000-0000-0000-000000000000");function Hg(){return new Oa}Hr.v4=Hg;var p_=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function Kg(t){return p_.test(t)}Hr.isUUID=Kg;function m_(t){if(!Kg(t))throw new Error("invalid uuid");return new Da(t)}Hr.parse=m_;function h_(){return Hg().asHex()}Hr.generateUuid=h_});var Wg=H(ki=>{"use strict";Object.defineProperty(ki,"__esModule",{value:!0});ki.attachPartialResult=ki.ProgressFeature=ki.attachWorkDone=void 0;var wi=wt(),y_=fm(),ao=class t{constructor(e,r){this._connection=e,this._token=r,t.Instances.set(this._token,this)}begin(e,r,n,i){let o={kind:"begin",title:e,percentage:r,message:n,cancellable:i};this._connection.sendProgress(wi.WorkDoneProgress.type,this._token,o)}report(e,r){let n={kind:"report"};typeof e=="number"?(n.percentage=e,r!==void 0&&(n.message=r)):n.message=e,this._connection.sendProgress(wi.WorkDoneProgress.type,this._token,n)}done(){t.Instances.delete(this._token),this._connection.sendProgress(wi.WorkDoneProgress.type,this._token,{kind:"end"})}};ao.Instances=new Map;var mc=class extends ao{constructor(e,r){super(e,r),this._source=new wi.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},La=class{constructor(){}begin(){}report(){}done(){}},hc=class extends La{constructor(){super(),this._source=new wi.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function g_(t,e){if(e===void 0||e.workDoneToken===void 0)return new La;let r=e.workDoneToken;return delete e.workDoneToken,new ao(t,r)}ki.attachWorkDone=g_;var T_=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){super.initialize(e),e?.window?.workDoneProgress===!0&&(this._progressSupported=!0,this.connection.onNotification(wi.WorkDoneProgressCancelNotification.type,r=>{let n=ao.Instances.get(r.token);(n instanceof mc||n instanceof hc)&&n.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new La:new ao(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){let e=(0,y_.generateUuid)();return this.connection.sendRequest(wi.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new mc(this.connection,e))}else return Promise.resolve(new hc)}};ki.ProgressFeature=T_;var dm;(function(t){t.type=new wi.ProgressType})(dm||(dm={}));var pm=class{constructor(e,r){this._connection=e,this._token=r}report(e){this._connection.sendProgress(dm.type,this._token,e)}};function v_(t,e){if(e===void 0||e.partialResultToken===void 0)return;let r=e.partialResultToken;return delete e.partialResultToken,new pm(t,r)}ki.attachPartialResult=v_});var Bg=H(yc=>{"use strict";Object.defineProperty(yc,"__esModule",{value:!0});yc.ConfigurationFeature=void 0;var R_=wt(),x_=um(),b_=t=>class extends t{getConfiguration(e){return e?x_.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let r={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(R_.ConfigurationRequest.type,r).then(n=>Array.isArray(n)?Array.isArray(e)?n:n[0]:Array.isArray(e)?[]:null)}};yc.ConfigurationFeature=b_});var zg=H(Tc=>{"use strict";Object.defineProperty(Tc,"__esModule",{value:!0});Tc.WorkspaceFoldersFeature=void 0;var gc=wt(),S_=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let r=e.workspace;r&&r.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new gc.Emitter,this.connection.onNotification(gc.DidChangeWorkspaceFoldersNotification.type,n=>{this._onDidChangeWorkspaceFolders.fire(n.event)}))}fillServerCapabilities(e){super.fillServerCapabilities(e);let r=e.workspace?.workspaceFolders?.changeNotifications;this._notificationIsAutoRegistered=r===!0||typeof r=="string"}getWorkspaceFolders(){return this.connection.sendRequest(gc.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(gc.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Tc.WorkspaceFoldersFeature=S_});var Vg=H(vc=>{"use strict";Object.defineProperty(vc,"__esModule",{value:!0});vc.CallHierarchyFeature=void 0;var mm=wt(),A_=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(mm.CallHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onIncomingCalls:e=>{let r=mm.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onOutgoingCalls:e=>{let r=mm.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};vc.CallHierarchyFeature=A_});var Xg=H(Rc=>{"use strict";Object.defineProperty(Rc,"__esModule",{value:!0});Rc.ShowDocumentFeature=void 0;var w_=wt(),k_=t=>class extends t{showDocument(e){return this.connection.sendRequest(w_.ShowDocumentRequest.type,e)}};Rc.ShowDocumentFeature=k_});var Yg=H(xc=>{"use strict";Object.defineProperty(xc,"__esModule",{value:!0});xc.FileOperationsFeature=void 0;var Vo=wt(),C_=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(Vo.DidCreateFilesNotification.type,r=>{e(r)})}onDidRenameFiles(e){return this.connection.onNotification(Vo.DidRenameFilesNotification.type,r=>{e(r)})}onDidDeleteFiles(e){return this.connection.onNotification(Vo.DidDeleteFilesNotification.type,r=>{e(r)})}onWillCreateFiles(e){return this.connection.onRequest(Vo.WillCreateFilesRequest.type,(r,n)=>e(r,n))}onWillRenameFiles(e){return this.connection.onRequest(Vo.WillRenameFilesRequest.type,(r,n)=>e(r,n))}onWillDeleteFiles(e){return this.connection.onRequest(Vo.WillDeleteFilesRequest.type,(r,n)=>e(r,n))}};xc.FileOperationsFeature=C_});var Jg=H(bc=>{"use strict";Object.defineProperty(bc,"__esModule",{value:!0});bc.LinkedEditingRangeFeature=void 0;var E_=wt(),__=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(E_.LinkedEditingRangeRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0))}};bc.LinkedEditingRangeFeature=__});var Qg=H(Sc=>{"use strict";Object.defineProperty(Sc,"__esModule",{value:!0});Sc.TypeHierarchyFeature=void 0;var hm=wt(),N_=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(hm.TypeHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onSupertypes:e=>{let r=hm.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onSubtypes:e=>{let r=hm.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Sc.TypeHierarchyFeature=N_});var eT=H(Ac=>{"use strict";Object.defineProperty(Ac,"__esModule",{value:!0});Ac.InlineValueFeature=void 0;var Zg=wt(),$_=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(Zg.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(Zg.InlineValueRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};Ac.InlineValueFeature=$_});var tT=H(wc=>{"use strict";Object.defineProperty(wc,"__esModule",{value:!0});wc.InlayHintFeature=void 0;var ym=wt(),P_=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(ym.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(ym.InlayHintRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r))),resolve:e=>this.connection.onRequest(ym.InlayHintResolveRequest.type,(r,n)=>e(r,n))}}};wc.InlayHintFeature=P_});var rT=H(kc=>{"use strict";Object.defineProperty(kc,"__esModule",{value:!0});kc.DiagnosticFeature=void 0;var Ma=wt(),I_=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(Ma.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(Ma.DocumentDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(Ma.DocumentDiagnosticRequest.partialResult,r))),onWorkspace:e=>this.connection.onRequest(Ma.WorkspaceDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(Ma.WorkspaceDiagnosticRequest.partialResult,r)))}}};kc.DiagnosticFeature=I_});var nT=H(Cc=>{"use strict";Object.defineProperty(Cc,"__esModule",{value:!0});Cc.MonikerFeature=void 0;var D_=wt(),O_=t=>class extends t{get moniker(){return{on:e=>{let r=D_.MonikerRequest.type;return this.connection.onRequest(r,(n,i)=>e(n,i,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Cc.MonikerFeature=O_});var yT=H(he=>{"use strict";Object.defineProperty(he,"__esModule",{value:!0});he.createConnection=he.combineFeatures=he.combineNotebooksFeatures=he.combineLanguagesFeatures=he.combineWorkspaceFeatures=he.combineWindowFeatures=he.combineClientFeatures=he.combineTracerFeatures=he.combineTelemetryFeatures=he.combineConsoleFeatures=he._NotebooksImpl=he._LanguagesImpl=he.BulkUnregistration=he.BulkRegistration=he.ErrorMessageTracker=void 0;var U=wt(),Kr=um(),Tm=fm(),te=Wg(),L_=Bg(),M_=zg(),F_=Vg(),U_=om(),q_=Xg(),G_=Yg(),j_=Jg(),H_=Qg(),K_=eT(),W_=tT(),B_=rT(),z_=cm(),V_=nT();function gm(t){if(t!==null)return t}var vm=class{constructor(){this._messages=Object.create(null)}add(e){let r=this._messages[e];r||(r=0),r++,this._messages[e]=r}sendErrors(e){Object.keys(this._messages).forEach(r=>{e.window.showErrorMessage(r)})}};he.ErrorMessageTracker=vm;var Ec=class{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(U.MessageType.Error,e)}warn(e){this.send(U.MessageType.Warning,e)}info(e){this.send(U.MessageType.Info,e)}log(e){this.send(U.MessageType.Log,e)}send(e,r){this._rawConnection&&this._rawConnection.sendNotification(U.LogMessageNotification.type,{type:e,message:r}).catch(()=>{(0,U.RAL)().console.error("Sending log message failed")})}},Rm=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...r){let n={type:U.MessageType.Error,message:e,actions:r};return this.connection.sendRequest(U.ShowMessageRequest.type,n).then(gm)}showWarningMessage(e,...r){let n={type:U.MessageType.Warning,message:e,actions:r};return this.connection.sendRequest(U.ShowMessageRequest.type,n).then(gm)}showInformationMessage(e,...r){let n={type:U.MessageType.Info,message:e,actions:r};return this.connection.sendRequest(U.ShowMessageRequest.type,n).then(gm)}},iT=(0,q_.ShowDocumentFeature)((0,te.ProgressFeature)(Rm)),X_;(function(t){function e(){return new _c}t.create=e})(X_=he.BulkRegistration||(he.BulkRegistration={}));var _c=class{constructor(){this._registrations=[],this._registered=new Set}add(e,r){let n=Kr.string(e)?e:e.method;if(this._registered.has(n))throw new Error(`${n} is already added to this registration`);let i=Tm.generateUuid();this._registrations.push({id:i,method:n,registerOptions:r||{}}),this._registered.add(n)}asRegistrationParams(){return{registrations:this._registrations}}},Y_;(function(t){function e(){return new Fa(void 0,[])}t.create=e})(Y_=he.BulkUnregistration||(he.BulkUnregistration={}));var Fa=class{constructor(e,r){this._connection=e,this._unregistrations=new Map,r.forEach(n=>{this._unregistrations.set(n.method,n)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let n of this._unregistrations.values())e.push(n);let r={unregisterations:e};this._connection.sendRequest(U.UnregistrationRequest.type,r).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){let r=Kr.string(e)?e:e.method,n=this._unregistrations.get(r);if(!n)return!1;let i={unregisterations:[n]};return this._connection.sendRequest(U.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(r)},o=>{this._connection.console.info(`Un-registering request handler for ${n.id} failed.`)}),!0}},Nc=class{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,r,n){return e instanceof _c?this.registerMany(e):e instanceof Fa?this.registerSingle1(e,r,n):this.registerSingle2(e,r)}registerSingle1(e,r,n){let i=Kr.string(r)?r:r.method,o=Tm.generateUuid(),s={registrations:[{id:o,method:i,registerOptions:n||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(U.RegistrationRequest.type,s).then(a=>(e.add({id:o,method:i}),e),a=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(a)))}registerSingle2(e,r){let n=Kr.string(e)?e:e.method,i=Tm.generateUuid(),o={registrations:[{id:i,method:n,registerOptions:r||{}}]};return this.connection.sendRequest(U.RegistrationRequest.type,o).then(s=>U.Disposable.create(()=>{this.unregisterSingle(i,n).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),s=>(this.connection.console.info(`Registering request handler for ${n} failed.`),Promise.reject(s)))}unregisterSingle(e,r){let n={unregisterations:[{id:e,method:r}]};return this.connection.sendRequest(U.UnregistrationRequest.type,n).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let r=e.asRegistrationParams();return this.connection.sendRequest(U.RegistrationRequest.type,r).then(()=>new Fa(this._connection,r.registrations.map(n=>({id:n.id,method:n.method}))),n=>(this.connection.console.info("Bulk registration failed."),Promise.reject(n)))}},xm=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function r(i){return i&&!!i.edit}let n=r(e)?e:{edit:e};return this.connection.sendRequest(U.ApplyWorkspaceEditRequest.type,n)}},oT=(0,G_.FileOperationsFeature)((0,M_.WorkspaceFoldersFeature)((0,L_.ConfigurationFeature)(xm))),$c=class{constructor(){this._trace=U.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,r){this._trace!==U.Trace.Off&&this.connection.sendNotification(U.LogTraceNotification.type,{message:e,verbose:this._trace===U.Trace.Verbose?r:void 0}).catch(()=>{})}},Pc=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(U.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},Ic=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,te.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,te.attachPartialResult)(this.connection,r)}};he._LanguagesImpl=Ic;var sT=(0,V_.MonikerFeature)((0,B_.DiagnosticFeature)((0,W_.InlayHintFeature)((0,K_.InlineValueFeature)((0,H_.TypeHierarchyFeature)((0,j_.LinkedEditingRangeFeature)((0,U_.SemanticTokensFeature)((0,F_.CallHierarchyFeature)(Ic)))))))),Dc=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,te.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,te.attachPartialResult)(this.connection,r)}};he._NotebooksImpl=Dc;var aT=(0,z_.NotebookSyncFeature)(Dc);function lT(t,e){return function(r){return e(t(r))}}he.combineConsoleFeatures=lT;function cT(t,e){return function(r){return e(t(r))}}he.combineTelemetryFeatures=cT;function uT(t,e){return function(r){return e(t(r))}}he.combineTracerFeatures=uT;function fT(t,e){return function(r){return e(t(r))}}he.combineClientFeatures=fT;function dT(t,e){return function(r){return e(t(r))}}he.combineWindowFeatures=dT;function pT(t,e){return function(r){return e(t(r))}}he.combineWorkspaceFeatures=pT;function mT(t,e){return function(r){return e(t(r))}}he.combineLanguagesFeatures=mT;function hT(t,e){return function(r){return e(t(r))}}he.combineNotebooksFeatures=hT;function J_(t,e){function r(i,o,s){return i&&o?s(i,o):i||o}return{__brand:"features",console:r(t.console,e.console,lT),tracer:r(t.tracer,e.tracer,uT),telemetry:r(t.telemetry,e.telemetry,cT),client:r(t.client,e.client,fT),window:r(t.window,e.window,dT),workspace:r(t.workspace,e.workspace,pT),languages:r(t.languages,e.languages,mT),notebooks:r(t.notebooks,e.notebooks,hT)}}he.combineFeatures=J_;function Q_(t,e,r){let n=r&&r.console?new(r.console(Ec)):new Ec,i=t(n);n.rawAttach(i);let o=r&&r.tracer?new(r.tracer($c)):new $c,s=r&&r.telemetry?new(r.telemetry(Pc)):new Pc,a=r&&r.client?new(r.client(Nc)):new Nc,l=r&&r.window?new(r.window(iT)):new iT,c=r&&r.workspace?new(r.workspace(oT)):new oT,u=r&&r.languages?new(r.languages(sT)):new sT,f=r&&r.notebooks?new(r.notebooks(aT)):new aT,m=[n,o,s,a,l,c,u,f];function T(v){return v instanceof Promise?v:Kr.thenable(v)?new Promise((g,_)=>{v.then(D=>g(D),D=>_(D))}):Promise.resolve(v)}let S,A,N,k={listen:()=>i.listen(),sendRequest:(v,...g)=>i.sendRequest(Kr.string(v)?v:v.method,...g),onRequest:(v,g)=>i.onRequest(v,g),sendNotification:(v,g)=>{let _=Kr.string(v)?v:v.method;return arguments.length===1?i.sendNotification(_):i.sendNotification(_,g)},onNotification:(v,g)=>i.onNotification(v,g),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:v=>(A=v,{dispose:()=>{A=void 0}}),onInitialized:v=>i.onNotification(U.InitializedNotification.type,v),onShutdown:v=>(S=v,{dispose:()=>{S=void 0}}),onExit:v=>(N=v,{dispose:()=>{N=void 0}}),get console(){return n},get telemetry(){return s},get tracer(){return o},get client(){return a},get window(){return l},get workspace(){return c},get languages(){return u},get notebooks(){return f},onDidChangeConfiguration:v=>i.onNotification(U.DidChangeConfigurationNotification.type,v),onDidChangeWatchedFiles:v=>i.onNotification(U.DidChangeWatchedFilesNotification.type,v),__textDocumentSync:void 0,onDidOpenTextDocument:v=>i.onNotification(U.DidOpenTextDocumentNotification.type,v),onDidChangeTextDocument:v=>i.onNotification(U.DidChangeTextDocumentNotification.type,v),onDidCloseTextDocument:v=>i.onNotification(U.DidCloseTextDocumentNotification.type,v),onWillSaveTextDocument:v=>i.onNotification(U.WillSaveTextDocumentNotification.type,v),onWillSaveTextDocumentWaitUntil:v=>i.onRequest(U.WillSaveTextDocumentWaitUntilRequest.type,v),onDidSaveTextDocument:v=>i.onNotification(U.DidSaveTextDocumentNotification.type,v),sendDiagnostics:v=>i.sendNotification(U.PublishDiagnosticsNotification.type,v),onHover:v=>i.onRequest(U.HoverRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),void 0)),onCompletion:v=>i.onRequest(U.CompletionRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onCompletionResolve:v=>i.onRequest(U.CompletionResolveRequest.type,v),onSignatureHelp:v=>i.onRequest(U.SignatureHelpRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),void 0)),onDeclaration:v=>i.onRequest(U.DeclarationRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onDefinition:v=>i.onRequest(U.DefinitionRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onTypeDefinition:v=>i.onRequest(U.TypeDefinitionRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onImplementation:v=>i.onRequest(U.ImplementationRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onReferences:v=>i.onRequest(U.ReferencesRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onDocumentHighlight:v=>i.onRequest(U.DocumentHighlightRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onDocumentSymbol:v=>i.onRequest(U.DocumentSymbolRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onWorkspaceSymbol:v=>i.onRequest(U.WorkspaceSymbolRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onWorkspaceSymbolResolve:v=>i.onRequest(U.WorkspaceSymbolResolveRequest.type,v),onCodeAction:v=>i.onRequest(U.CodeActionRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onCodeActionResolve:v=>i.onRequest(U.CodeActionResolveRequest.type,(g,_)=>v(g,_)),onCodeLens:v=>i.onRequest(U.CodeLensRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onCodeLensResolve:v=>i.onRequest(U.CodeLensResolveRequest.type,(g,_)=>v(g,_)),onDocumentFormatting:v=>i.onRequest(U.DocumentFormattingRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),void 0)),onDocumentRangeFormatting:v=>i.onRequest(U.DocumentRangeFormattingRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),void 0)),onDocumentOnTypeFormatting:v=>i.onRequest(U.DocumentOnTypeFormattingRequest.type,(g,_)=>v(g,_)),onRenameRequest:v=>i.onRequest(U.RenameRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),void 0)),onPrepareRename:v=>i.onRequest(U.PrepareRenameRequest.type,(g,_)=>v(g,_)),onDocumentLinks:v=>i.onRequest(U.DocumentLinkRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onDocumentLinkResolve:v=>i.onRequest(U.DocumentLinkResolveRequest.type,(g,_)=>v(g,_)),onDocumentColor:v=>i.onRequest(U.DocumentColorRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onColorPresentation:v=>i.onRequest(U.ColorPresentationRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onFoldingRanges:v=>i.onRequest(U.FoldingRangeRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onSelectionRanges:v=>i.onRequest(U.SelectionRangeRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),(0,te.attachPartialResult)(i,g))),onExecuteCommand:v=>i.onRequest(U.ExecuteCommandRequest.type,(g,_)=>v(g,_,(0,te.attachWorkDone)(i,g),void 0)),dispose:()=>i.dispose()};for(let v of m)v.attach(k);return i.onRequest(U.InitializeRequest.type,v=>{e.initialize(v),Kr.string(v.trace)&&(o.trace=U.Trace.fromString(v.trace));for(let g of m)g.initialize(v.capabilities);if(A){let g=A(v,new U.CancellationTokenSource().token,(0,te.attachWorkDone)(i,v),void 0);return T(g).then(_=>{if(_ instanceof U.ResponseError)return _;let D=_;D||(D={capabilities:{}});let X=D.capabilities;X||(X={},D.capabilities=X),X.textDocumentSync===void 0||X.textDocumentSync===null?X.textDocumentSync=Kr.number(k.__textDocumentSync)?k.__textDocumentSync:U.TextDocumentSyncKind.None:!Kr.number(X.textDocumentSync)&&!Kr.number(X.textDocumentSync.change)&&(X.textDocumentSync.change=Kr.number(k.__textDocumentSync)?k.__textDocumentSync:U.TextDocumentSyncKind.None);for(let ge of m)ge.fillServerCapabilities(X);return D})}else{let g={capabilities:{textDocumentSync:U.TextDocumentSyncKind.None}};for(let _ of m)_.fillServerCapabilities(g.capabilities);return g}}),i.onRequest(U.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,S)return S(new U.CancellationTokenSource().token)}),i.onNotification(U.ExitNotification.type,()=>{try{N&&N()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),i.onNotification(U.SetTraceNotification.type,v=>{o.trace=U.Trace.fromString(v.value)}),k}he.createConnection=Q_});var bm=H(zt=>{"use strict";var Z_=zt&&zt.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),gT=zt&&zt.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Z_(e,t,r)};Object.defineProperty(zt,"__esModule",{value:!0});zt.ProposedFeatures=zt.NotebookDocuments=zt.TextDocuments=zt.SemanticTokensBuilder=void 0;var eN=om();Object.defineProperty(zt,"SemanticTokensBuilder",{enumerable:!0,get:function(){return eN.SemanticTokensBuilder}});gT(wt(),zt);var tN=am();Object.defineProperty(zt,"TextDocuments",{enumerable:!0,get:function(){return tN.TextDocuments}});var rN=cm();Object.defineProperty(zt,"NotebookDocuments",{enumerable:!0,get:function(){return rN.NotebookDocuments}});gT(yT(),zt);var nN;(function(t){t.all={__brand:"features"}})(nN=zt.ProposedFeatures||(zt.ProposedFeatures={}))});var vT=H((tj,TT)=>{"use strict";TT.exports=wt()});var Se=H(An=>{"use strict";var iN=An&&An.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),xT=An&&An.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&iN(e,t,r)};Object.defineProperty(An,"__esModule",{value:!0});An.createConnection=void 0;var Oc=bm();xT(vT(),An);xT(bm(),An);var RT=!1,oN={initialize:t=>{},get shutdownReceived(){return RT},set shutdownReceived(t){RT=t},exit:t=>{}};function sN(t,e,r,n){let i,o,s,a;t!==void 0&&t.__brand==="features"&&(i=t,t=e,e=r,r=n),Oc.ConnectionStrategy.is(t)||Oc.ConnectionOptions.is(t)?a=t:(o=t,s=e,a=r);let l=c=>(0,Oc.createProtocolConnection)(o,s,c,a);return(0,Oc.createConnection)(l,oN,i)}An.createConnection=sN});var Ow=H((Aae,Dw)=>{"use strict";Dw.exports=Se()});var Iw=de(Se(),1);var Lc=class t{constructor(e,r,n,i){this._uri=e,this._languageId=r,this._version=n,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){for(let n of e)if(t.isIncremental(n)){let i=ST(n.range),o=this.offsetAt(i.start),s=this.offsetAt(i.end);this._content=this._content.substring(0,o)+n.text+this._content.substring(s,this._content.length);let a=Math.max(i.start.line,0),l=Math.max(i.end.line,0),c=this._lineOffsets,u=bT(n.text,!1,o);if(l-a===u.length)for(let m=0,T=u.length;m<T;m++)c[m+a+1]=u[m];else u.length<1e4?c.splice(a+1,l-a,...u):this._lineOffsets=c=c.slice(0,a+1).concat(u,c.slice(l+1));let f=n.text.length-(s-o);if(f!==0)for(let m=a+1+u.length,T=c.length;m<T;m++)c[m]=c[m]+f}else if(t.isFull(n))this._content=n.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=r}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=bT(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,i=r.length;if(i===0)return{line:0,character:e};for(;n<i;){let s=Math.floor((n+i)/2);r[s]>e?i=s:n=s+1}let o=n-1;return{line:o,character:e-r[o]}}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],i=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,i),n)}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range!==void 0&&(r.rangeLength===void 0||typeof r.rangeLength=="number")}static isFull(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range===void 0&&r.rangeLength===void 0}},Xo;(function(t){function e(i,o,s,a){return new Lc(i,o,s,a)}t.create=e;function r(i,o,s){if(i instanceof Lc)return i.update(o,s),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=r;function n(i,o){let s=i.getText(),a=Sm(o.map(aN),(u,f)=>{let m=u.range.start.line-f.range.start.line;return m===0?u.range.start.character-f.range.start.character:m}),l=0,c=[];for(let u of a){let f=i.offsetAt(u.range.start);if(f<l)throw new Error("Overlapping edit");f>l&&c.push(s.substring(l,f)),u.newText.length&&c.push(u.newText),l=i.offsetAt(u.range.end)}return c.push(s.substr(l)),c.join("")}t.applyEdits=n})(Xo||(Xo={}));function Sm(t,e){if(t.length<=1)return t;let r=t.length/2|0,n=t.slice(0,r),i=t.slice(r);Sm(n,e),Sm(i,e);let o=0,s=0,a=0;for(;o<n.length&&s<i.length;)e(n[o],i[s])<=0?t[a++]=n[o++]:t[a++]=i[s++];for(;o<n.length;)t[a++]=n[o++];for(;s<i.length;)t[a++]=i[s++];return t}function bT(t,e,r=0){let n=e?[r]:[];for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);(o===13||o===10)&&(o===13&&i+1<t.length&&t.charCodeAt(i+1)===10&&i++,n.push(r+i+1))}return n}function ST(t){let e=t.start,r=t.end;return e.line>r.line||e.line===r.line&&e.character>r.character?{start:r,end:e}:t}function aN(t){let e=ST(t.range);return e!==t.range?{newText:t.newText,range:e}:t}function Ct(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}function Yn(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}function AT(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}function Yo(t){return typeof t=="object"&&t!==null&&Ct(t.container)&&Yn(t.reference)&&typeof t.message=="string"}var lo=class{constructor(){this.subtypes={},this.allSubtypes={}}isInstance(e,r){return Ct(e)&&this.isSubtype(e.$type,r)}isSubtype(e,r){if(e===r)return!0;let n=this.subtypes[e];n||(n=this.subtypes[e]={});let i=n[r];if(i!==void 0)return i;{let o=this.computeIsSubtype(e,r);return n[r]=o,o}}getAllSubTypes(e){let r=this.allSubtypes[e];if(r)return r;{let n=this.getAllTypes(),i=[];for(let o of n)this.isSubtype(o,e)&&i.push(o);return this.allSubtypes[e]=i,i}}};function wn(t){return typeof t=="object"&&t!==null&&Array.isArray(t.content)}function co(t){return typeof t=="object"&&t!==null&&typeof t.tokenType=="object"}function wT(t){return wn(t)&&typeof t.fullText=="string"}var $r=class t{constructor(e,r){this.startFn=e,this.nextFn=r}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){let e=this.iterator(),r=0,n=e.next();for(;!n.done;)r++,n=e.next();return r}toArray(){let e=[],r=this.iterator(),n;do n=r.next(),n.value!==void 0&&e.push(n.value);while(!n.done);return e}toSet(){return new Set(this)}toMap(e,r){let n=this.map(i=>[e?e(i):i,r?r(i):i]);return new Map(n)}toString(){return this.join()}concat(e){let r=e[Symbol.iterator]();return new t(()=>({first:this.startFn(),firstDone:!1}),n=>{let i;if(!n.firstDone){do if(i=this.nextFn(n.first),!i.done)return i;while(!i.done);n.firstDone=!0}do if(i=r.next(),!i.done)return i;while(!i.done);return pr})}join(e=","){let r=this.iterator(),n="",i,o=!1;do i=r.next(),i.done||(o&&(n+=e),n+=lN(i.value)),o=!0;while(!i.done);return n}indexOf(e,r=0){let n=this.iterator(),i=0,o=n.next();for(;!o.done;){if(i>=r&&o.value===e)return i;o=n.next(),i++}return-1}every(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(!e(n.value))return!1;n=r.next()}return!0}some(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return!0;n=r.next()}return!1}forEach(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;)e(i.value,n),i=r.next(),n++}map(e){return new t(this.startFn,r=>{let{done:n,value:i}=this.nextFn(r);return n?pr:{done:!1,value:e(i)}})}filter(e){return new t(this.startFn,r=>{let n;do if(n=this.nextFn(r),!n.done&&e(n.value))return n;while(!n.done);return pr})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,r){let n=this.iterator(),i=r,o=n.next();for(;!o.done;)i===void 0?i=o.value:i=e(i,o.value),o=n.next();return i}reduceRight(e,r){return this.recursiveReduce(this.iterator(),e,r)}recursiveReduce(e,r,n){let i=e.next();if(i.done)return n;let o=this.recursiveReduce(e,r,n);return o===void 0?i.value:r(o,i.value)}find(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return n.value;n=r.next()}}findIndex(e){let r=this.iterator(),n=0,i=r.next();for(;!i.done;){if(e(i.value))return n;i=r.next(),n++}return-1}includes(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(n.value===e)return!0;n=r.next()}return!1}flatMap(e){return new t(()=>({this:this.startFn()}),r=>{do{if(r.iterator){let o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}let{done:n,value:i}=this.nextFn(r.this);if(!n){let o=e(i);if(Mc(o))r.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}}while(r.iterator);return pr})}flat(e){if(e===void 0&&(e=1),e<=0)return this;let r=e>1?this.flat(e-1):this;return new t(()=>({this:r.startFn()}),n=>{do{if(n.iterator){let s=n.iterator.next();if(s.done)n.iterator=void 0;else return s}let{done:i,value:o}=r.nextFn(n.this);if(!i)if(Mc(o))n.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}while(n.iterator);return pr})}head(){let r=this.iterator().next();if(!r.done)return r.value}tail(e=1){return new t(()=>{let r=this.startFn();for(let n=0;n<e;n++)if(this.nextFn(r).done)return r;return r},this.nextFn)}limit(e){return new t(()=>({size:0,state:this.startFn()}),r=>(r.size++,r.size>e?pr:this.nextFn(r.state)))}distinct(e){let r=new Set;return this.filter(n=>{let i=e?e(n):n;return r.has(i)?!1:(r.add(i),!0)})}exclude(e,r){let n=new Set;for(let i of e){let o=r?r(i):i;n.add(o)}return this.filter(i=>{let o=r?r(i):i;return!n.has(o)})}};function lN(t){return typeof t=="string"?t:typeof t>"u"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function Mc(t){return!!t&&typeof t[Symbol.iterator]=="function"}var Jo=new $r(()=>{},()=>pr),pr=Object.freeze({done:!0,value:void 0});function ie(...t){if(t.length===1){let e=t[0];if(e instanceof $r)return e;if(Mc(e))return new $r(()=>e[Symbol.iterator](),r=>r.next());if(typeof e.length=="number")return new $r(()=>({index:0}),r=>r.index<e.length?{done:!1,value:e[r.index++]}:pr)}return t.length>1?new $r(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){let r=e.iterator.next();if(!r.done)return r;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){let r=t[e.collIndex++];Mc(r)?e.iterator=r[Symbol.iterator]():r&&typeof r.length=="number"&&(e.array=r)}}while(e.iterator||e.array||e.collIndex<t.length);return pr}):Jo}var Wr=class extends $r{constructor(e,r,n){super(()=>({iterators:n?.includeRoot?[[e][Symbol.iterator]()]:[r(e)[Symbol.iterator]()],pruned:!1}),i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=!1);i.iterators.length>0;){let s=i.iterators[i.iterators.length-1].next();if(s.done)i.iterators.pop();else return i.iterators.push(r(s.value)[Symbol.iterator]()),s}return pr})}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}},Ua;(function(t){function e(o){return o.reduce((s,a)=>s+a,0)}t.sum=e;function r(o){return o.reduce((s,a)=>s*a,0)}t.product=r;function n(o){return o.reduce((s,a)=>Math.min(s,a))}t.min=n;function i(o){return o.reduce((s,a)=>Math.max(s,a))}t.max=i})(Ua=Ua||(Ua={}));function Am(t){return new Wr(t,e=>wn(e)?e.content:[],{includeRoot:!0})}function ET(t){return Am(t).filter(co)}function _T(t,e){for(;t.container;)if(t=t.container,t===e)return!0;return!1}function qa(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}function nr(t){if(!t)return;let{offset:e,end:r,range:n}=t;return{range:n,offset:e,end:r,length:r-e}}var Jn;(function(t){t[t.Before=0]="Before",t[t.After=1]="After",t[t.OverlapFront=2]="OverlapFront",t[t.OverlapBack=3]="OverlapBack",t[t.Inside=4]="Inside"})(Jn=Jn||(Jn={}));function cN(t,e){if(t.end.line<e.start.line||t.end.line===e.start.line&&t.end.character<t.start.character)return Jn.Before;if(t.start.line>e.end.line||t.start.line===e.end.line&&t.start.character>e.end.character)return Jn.After;let r=t.start.line>e.start.line||t.start.line===e.start.line&&t.start.character>=e.start.character,n=t.end.line<e.end.line||t.end.line===e.end.line&&t.end.character<=e.end.character;return r&&n?Jn.Inside:r?Jn.OverlapBack:Jn.OverlapFront}function Fc(t,e){return cN(t,e)>Jn.After}var wm=/^[\w\p{L}]$/u;function Pt(t,e,r=wm){if(t){if(e>0){let n=e-t.offset,i=t.text.charAt(n);r.test(i)||e--}return xr(t,e)}}function NT(t,e){if(t){let r=uN(t,!0);if(r&&kT(r,e))return r;if(wT(t)){let n=t.content.findIndex(i=>!i.hidden);for(let i=n-1;i>=0;i--){let o=t.content[i];if(kT(o,e))return o}}}}function kT(t,e){return co(t)&&e.includes(t.tokenType.name)}function xr(t,e){if(co(t))return t;if(wn(t)){let r=0,n=t.content.length-1;for(;r<n;){let i=Math.floor((r+n)/2),o=t.content[i];if(o.offset>e)n=i-1;else if(o.end<=e)r=i+1;else return xr(o,e)}if(r===n)return xr(t.content[r],e)}}function uN(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t);for(;n>0;){n--;let i=r.content[n];if(e||!i.hidden)return i}t=r}}function $T(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t),i=r.content.length-1;for(;n<i;){n++;let o=r.content[n];if(e||!o.hidden)return o}t=r}}function PT(t,e){let r=fN(t,e);return r?r.parent.content.slice(r.a+1,r.b):[]}function fN(t,e){let r=CT(t),n=CT(e),i;for(let o=0;o<r.length&&o<n.length;o++){let s=r[o],a=n[o];if(s.parent===a.parent)i={parent:s.parent,a:s.index,b:a.index};else break}return i}function CT(t){let e=[];for(;t.container;){let r=t.container,n=r.content.indexOf(t);e.push({parent:r,index:n}),t=r}return e.reverse()}function uo(t,e,r,n){let i=[t,e,r,n].reduce(LT,{});return OT(i)}var km=Symbol("isProxy");function Uc(t){if(t&&t[km])for(let e of Object.values(t))Uc(e);return t}function OT(t,e){let r=new Proxy({},{deleteProperty:()=>!1,get:(n,i)=>DT(n,i,t,e||r),getOwnPropertyDescriptor:(n,i)=>(DT(n,i,t,e||r),Object.getOwnPropertyDescriptor(n,i)),has:(n,i)=>i in t,ownKeys:()=>[...Reflect.ownKeys(t),km]});return r[km]=!0,r}var IT=Symbol();function DT(t,e,r,n){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===IT)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. See https://langium.org/docs/configuration-services/#resolving-cyclic-dependencies');return t[e]}else if(e in r){let i=r[e];t[e]=IT;try{t[e]=typeof i=="function"?i(n):OT(i,n)}catch(o){throw t[e]=o instanceof Error?o:void 0,o}return t[e]}else return}function LT(t,e){if(e){for(let[r,n]of Object.entries(e))if(n!==void 0){let i=t[r];i!==null&&n!==null&&typeof i=="object"&&typeof n=="object"?t[r]=LT(i,n):t[r]=n}}return t}var Le=class{constructor(e){if(this.map=new Map,e)for(let[r,n]of e)this.add(r,n)}get size(){return Ua.sum(ie(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,r){if(r===void 0)return this.map.delete(e);{let n=this.map.get(e);if(n){let i=n.indexOf(r);if(i>=0)return n.length===1?this.map.delete(e):n.splice(i,1),!0}return!1}}get(e){var r;return(r=this.map.get(e))!==null&&r!==void 0?r:[]}has(e,r){if(r===void 0)return this.map.has(e);{let n=this.map.get(e);return n?n.indexOf(r)>=0:!1}}add(e,r){return this.map.has(e)?this.map.get(e).push(r):this.map.set(e,[r]),this}addAll(e,r){return this.map.has(e)?this.map.get(e).push(...r):this.map.set(e,Array.from(r)),this}forEach(e){this.map.forEach((r,n)=>r.forEach(i=>e(i,n,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return ie(this.map.entries()).flatMap(([e,r])=>r.map(n=>[e,n]))}keys(){return ie(this.map.keys())}values(){return ie(this.map.values()).flat()}entriesGroupedByKey(){return ie(this.map.entries())}};var Cm="AbstractRule";var fo="AbstractType";var dN="Condition";var pN="TypeDefinition";var Em="AbstractElement";function Qo(t){return ce.isInstance(t,Em)}var MT="ArrayType";function po(t){return ce.isInstance(t,MT)}var FT="Conjunction";function UT(t){return ce.isInstance(t,FT)}var qT="Disjunction";function GT(t){return ce.isInstance(t,qT)}var jT="Grammar";function Zo(t){return ce.isInstance(t,jT)}var mN="GrammarImport";function qc(t){return ce.isInstance(t,mN)}var hN="InferredType";function es(t){return ce.isInstance(t,hN)}var ja="Interface";function br(t){return ce.isInstance(t,ja)}var HT="LiteralCondition";function KT(t){return ce.isInstance(t,HT)}var WT="Negation";function BT(t){return ce.isInstance(t,WT)}var zT="Parameter";function VT(t){return ce.isInstance(t,zT)}var XT="ParameterReference";function ts(t){return ce.isInstance(t,XT)}var YT="ParserRule";function K(t){return ce.isInstance(t,YT)}var JT="ReferenceType";function mo(t){return ce.isInstance(t,JT)}var yN="ReturnType";function rs(t){return ce.isInstance(t,yN)}var QT="SimpleType";function ir(t){return ce.isInstance(t,QT)}var _m="TerminalRule";function Ae(t){return ce.isInstance(t,_m)}var Ha="Type";function Mt(t){return ce.isInstance(t,Ha)}var gN="TypeAttribute";function Gc(t){return ce.isInstance(t,gN)}var ZT="UnionType";function Br(t){return ce.isInstance(t,ZT)}var ev="Action";function Ne(t){return ce.isInstance(t,ev)}var tv="Alternatives";function Pr(t){return ce.isInstance(t,tv)}var rv="Assignment";function xe(t){return ce.isInstance(t,rv)}var nv="CharacterRange";function jc(t){return ce.isInstance(t,nv)}var iv="CrossReference";function Vt(t){return ce.isInstance(t,iv)}var ov="Group";function Ft(t){return ce.isInstance(t,ov)}var sv="Keyword";function dt(t){return ce.isInstance(t,sv)}var av="NegatedToken";function lv(t){return ce.isInstance(t,av)}var cv="RegexToken";function uv(t){return ce.isInstance(t,cv)}var fv="RuleCall";function $e(t){return ce.isInstance(t,fv)}var dv="TerminalAlternatives";function pv(t){return ce.isInstance(t,dv)}var mv="TerminalGroup";function hv(t){return ce.isInstance(t,mv)}var yv="TerminalRuleCall";function Hc(t){return ce.isInstance(t,yv)}var gv="UnorderedGroup";function Ir(t){return ce.isInstance(t,gv)}var Tv="UntilToken";function vv(t){return ce.isInstance(t,Tv)}var Rv="Wildcard";function xv(t){return ce.isInstance(t,Rv)}var Ga=class extends lo{getAllTypes(){return["AbstractElement","AbstractRule","AbstractType","Action","Alternatives","ArrayType","Assignment","CharacterRange","Condition","Conjunction","CrossReference","Disjunction","Grammar","GrammarImport","Group","InferredType","Interface","Keyword","LiteralCondition","NamedArgument","NegatedToken","Negation","Parameter","ParameterReference","ParserRule","ReferenceType","RegexToken","ReturnType","RuleCall","SimpleType","TerminalAlternatives","TerminalGroup","TerminalRule","TerminalRuleCall","Type","TypeAttribute","TypeDefinition","UnionType","UnorderedGroup","UntilToken","Wildcard"]}computeIsSubtype(e,r){switch(e){case ev:return this.isSubtype(Em,r)||this.isSubtype(fo,r);case tv:case rv:case nv:case iv:case ov:case sv:case av:case cv:case fv:case dv:case mv:case yv:case gv:case Tv:case Rv:return this.isSubtype(Em,r);case MT:case JT:case QT:case ZT:return this.isSubtype(pN,r);case FT:case qT:case HT:case WT:case XT:return this.isSubtype(dN,r);case ja:case Ha:return this.isSubtype(fo,r);case YT:return this.isSubtype(Cm,r)||this.isSubtype(fo,r);case _m:return this.isSubtype(Cm,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case"SimpleType:typeRef":return fo;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return Cm;case"Grammar:usedGrammars":return jT;case"NamedArgument:parameter":case"ParameterReference:parameter":return zT;case"TerminalRuleCall:rule":return _m;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"Grammar":return{name:"Grammar",mandatory:[{name:"definesHiddenTokens",type:"boolean"},{name:"hiddenTokens",type:"array"},{name:"imports",type:"array"},{name:"interfaces",type:"array"},{name:"isDeclared",type:"boolean"},{name:"rules",type:"array"},{name:"types",type:"array"},{name:"usedGrammars",type:"array"}]};case"Interface":return{name:"Interface",mandatory:[{name:"attributes",type:"array"},{name:"superTypes",type:"array"}]};case"LiteralCondition":return{name:"LiteralCondition",mandatory:[{name:"true",type:"boolean"}]};case"NamedArgument":return{name:"NamedArgument",mandatory:[{name:"calledByName",type:"boolean"}]};case"ParserRule":return{name:"ParserRule",mandatory:[{name:"definesHiddenTokens",type:"boolean"},{name:"entry",type:"boolean"},{name:"fragment",type:"boolean"},{name:"hiddenTokens",type:"array"},{name:"parameters",type:"array"},{name:"wildcard",type:"boolean"}]};case"TerminalRule":return{name:"TerminalRule",mandatory:[{name:"fragment",type:"boolean"},{name:"hidden",type:"boolean"}]};case"TypeAttribute":return{name:"TypeAttribute",mandatory:[{name:"isOptional",type:"boolean"}]};case"UnionType":return{name:"UnionType",mandatory:[{name:"types",type:"array"}]};case"Alternatives":return{name:"Alternatives",mandatory:[{name:"elements",type:"array"}]};case"CrossReference":return{name:"CrossReference",mandatory:[{name:"deprecatedSyntax",type:"boolean"}]};case"Group":return{name:"Group",mandatory:[{name:"elements",type:"array"}]};case"RuleCall":return{name:"RuleCall",mandatory:[{name:"arguments",type:"array"}]};case"TerminalAlternatives":return{name:"TerminalAlternatives",mandatory:[{name:"elements",type:"array"}]};case"TerminalGroup":return{name:"TerminalGroup",mandatory:[{name:"elements",type:"array"}]};case"UnorderedGroup":return{name:"UnorderedGroup",mandatory:[{name:"elements",type:"array"}]};default:return{name:e,mandatory:[]}}}},ce=new Ga;function bv(t){for(let[e,r]of Object.entries(t))e.startsWith("$")||(Array.isArray(r)?r.forEach((n,i)=>{Ct(n)&&(n.$container=t,n.$containerProperty=e,n.$containerIndex=i)}):Ct(r)&&(r.$container=t,r.$containerProperty=e))}function Pe(t,e){let r=t;for(;r;){if(e(r))return r;r=r.$container}}function ne(t){let r=Kc(t).$document;if(!r)throw new Error("AST node has no document.");return r}function Kc(t){for(;t.$container;)t=t.$container;return t}function Ci(t,e){if(!t)throw new Error("Node must be an AstNode.");let r=e?.range;return new $r(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),n=>{for(;n.keyIndex<n.keys.length;){let i=n.keys[n.keyIndex];if(!i.startsWith("$")){let o=t[i];if(Ct(o)){if(n.keyIndex++,Nm(o,r))return{done:!1,value:o}}else if(Array.isArray(o)){for(;n.arrayIndex<o.length;){let s=n.arrayIndex++,a=o[s];if(Ct(a)&&Nm(a,r))return{done:!1,value:a}}n.arrayIndex=0}}n.keyIndex++}return pr})}function Qe(t,e){if(!t)throw new Error("Root node must be an AstNode.");return new Wr(t,r=>Ci(r,e))}function Zn(t,e){if(t){if(e?.range&&!Nm(t,e.range))return new Wr(t,()=>[])}else throw new Error("Root node must be an AstNode.");return new Wr(t,r=>Ci(r,e),{includeRoot:!0})}function Nm(t,e){var r;if(!e)return!0;let n=(r=t.$cstNode)===null||r===void 0?void 0:r.range;return n?Fc(n,e):!1}function Wc(t){return new $r(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if(Yn(n))return e.keyIndex++,{done:!1,value:{reference:n,container:t,property:r}};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let i=e.arrayIndex++,o=n[i];if(Yn(o))return{done:!1,value:{reference:o,container:t,property:r,index:i}}}e.arrayIndex=0}}e.keyIndex++}return pr})}function Sv(t){var e,r;if(t){if("astNode"in t)return RN(t);if(Array.isArray(t))return t.reduce(Av,void 0);{let n=t,i=TN(n)?vN((r=(e=n?.root)===null||e===void 0?void 0:e.astNode)!==null&&r!==void 0?r:n?.astNode):void 0;return ns(n,i)}}else return}function TN(t){return typeof t<"u"&&"element"in t&&"text"in t}function vN(t){try{return ne(t).uri.toString()}catch{return}}function RN(t){var e,r;let{astNode:n,property:i,index:o}=t??{},s=(e=n?.$cstNode)!==null&&e!==void 0?e:n?.$textRegion;if(!(n===void 0||s===void 0)){if(i===void 0)return ns(s,$m(n));{let a=l=>o!==void 0&&o>-1&&Array.isArray(n[i])?o<l.length?l[o]:void 0:l.reduce(Av,void 0);if(!((r=s.assignments)===null||r===void 0)&&r[i]){let l=a(s.assignments[i]);return l&&ns(l,$m(n))}else if(n.$cstNode){let l=a(Ei(n.$cstNode,i));return l&&ns(l,$m(n))}else return}}}function $m(t){var e,r,n,i;return t.$cstNode?(r=(e=ne(t))===null||e===void 0?void 0:e.uri)===null||r===void 0?void 0:r.toString():t.$textRegion?t.$textRegion.documentURI||((i=(n=new Wr(t,o=>o.$container?[o.$container]:[]).find(o=>{var s;return(s=o.$textRegion)===null||s===void 0?void 0:s.documentURI}))===null||n===void 0?void 0:n.$textRegion)===null||i===void 0?void 0:i.documentURI):void 0}function ns(t,e){var r,n;let i={offset:t.offset,end:(r=t.end)!==null&&r!==void 0?r:t.offset+t.length,length:(n=t.length)!==null&&n!==void 0?n:t.end-t.offset};return t.range&&(i.range=t.range),e??(e=t.fileURI),e&&(i.fileURI=e),i}function Av(t,e){var r,n;if(t){if(!e)return t&&ns(t)}else return e&&ns(e);let i=(r=t.end)!==null&&r!==void 0?r:t.offset+t.length,o=(n=e.end)!==null&&n!==void 0?n:e.offset+e.length,s=Math.min(t.offset,e.offset),a=Math.max(i,o),l=a-s,c={offset:s,end:a,length:l};if(t.range&&e.range&&(c.range={start:e.range.start.line<t.range.start.line||e.range.start.line===t.range.start.line&&e.range.start.character<t.range.start.character?e.range.start:t.range.start,end:e.range.end.line>t.range.end.line||e.range.end.line===t.range.end.line&&e.range.end.character>t.range.end.character?e.range.end:t.range.end}),t.fileURI||e.fileURI){let u=t.fileURI,f=e.fileURI,m=u&&f&&u!==f?`<unmergable text regions of ${u}, ${f}>`:u??f;c.fileURI=m}return c}var Pm=class{constructor(e){this.defaultIndentation="    ",this.pendingIndent=!0,this.currentIndents=[],this.recentNonImmediateIndents=[],this.traceData=[],this.lines=[[]],typeof e=="string"?this.defaultIndentation=e:typeof e=="number"&&(this.defaultIndentation="".padStart(e))}get content(){return this.lines.map(e=>e.join("")).join("")}get currentLineNumber(){return this.lines.length-1}get currentLineContent(){return this.lines[this.currentLineNumber].join("")}get currentPosition(){return{offset:this.content.length,line:this.currentLineNumber,character:this.currentLineContent.length}}append(e,r){if(e.length>0){let n=r&&this.currentPosition;this.lines[this.currentLineNumber].push(e),n&&this.indentPendingTraceRegions(n)}}indentPendingTraceRegions(e){for(let r=this.traceData.length-1;r>=0;r--){let n=this.traceData[r];n.targetStart&&n.targetStart.offset===e.offset&&(n.targetStart=this.currentPosition)}}increaseIndent(e){this.currentIndents.push(e),e.indentImmediately||this.recentNonImmediateIndents.push(e)}decreaseIndent(){this.currentIndents.pop()}get relevantIndents(){return this.currentIndents.filter(e=>!this.recentNonImmediateIndents.includes(e))}resetCurrentLine(){this.lines[this.currentLineNumber]=[],this.pendingIndent=!0}addNewLine(){this.pendingIndent=!0,this.lines.push([]),this.recentNonImmediateIndents.length=0}pushTraceRegion(e){let r=xN(e,this.currentPosition,n=>{var i,o;return(o=(i=this.traceData[this.traceData.length-1])===null||i===void 0?void 0:i.children)===null||o===void 0?void 0:o.push(n)});return this.traceData.push(r),r}popTraceRegion(e){let r=this.traceData.pop();return this.assertTrue(r===e,"Trace region mismatch!"),r}getParentTraceSourceFileURI(){var e;for(let r=this.traceData.length-1;r>-1;r--){let n=(e=this.traceData[r].sourceRegion)===null||e===void 0?void 0:e.fileURI;if(n)return n}}assertTrue(e,r){if(!e)throw new Error(r)}};function xN(t,e,r){let n={sourceRegion:t,targetRegion:void 0,children:[],targetStart:e,complete:i=>{var o,s;return n.targetRegion={offset:n.targetStart.offset,end:i.offset,length:i.offset-n.targetStart.offset,range:{start:{line:n.targetStart.line,character:n.targetStart.character},end:{line:i.line,character:i.character}}},delete n.targetStart,((o=n.children)===null||o===void 0?void 0:o.length)===0&&delete n.children,!((s=n.targetRegion)===null||s===void 0)&&s.length&&r(n),delete n.complete,n}};return n}function wv(t,e){let r=new Pm(e),n=r.pushTraceRegion(void 0);kv(t,r),r.popTraceRegion(n),n.complete&&n.complete(r.currentPosition);let i=n.children&&n.children.length===1?n.children[0]:void 0,o=i?.targetRegion,s=n.targetRegion;return o&&i.sourceRegion&&o.offset===s.offset&&o.length===s.length?{text:r.content,trace:i}:{text:r.content,trace:n}}function kv(t,e){typeof t=="string"?bN(t,e):t instanceof is?SN(t,e):t instanceof Xt?_v(t,e):t instanceof _i&&AN(t,e)}function Cv(t,e){return typeof t=="string"?t.length!==0:t instanceof Xt?t.contents.some(r=>Cv(r,e)):t instanceof _i?!(t.ifNotEmpty&&e.currentLineContent.length===0):!1}function bN(t,e){t&&(e.pendingIndent&&Ev(e,!1),e.append(t))}function Ev(t,e){var r;let n="";for(let i of t.relevantIndents.filter(o=>o.indentEmptyLines||!e))n+=(r=i.indentation)!==null&&r!==void 0?r:t.defaultIndentation;t.append(n,!0),t.pendingIndent=!1}function _v(t,e){let r,n=Sv(t.tracedSource);n&&(r=e.pushTraceRegion(n));for(let i of t.contents)kv(i,e);if(r){e.popTraceRegion(r);let i=e.getParentTraceSourceFileURI();i&&n?.fileURI===i&&delete n.fileURI,r.complete&&r.complete(e.currentPosition)}}function SN(t,e){var r;if(Cv(t,e)){t.indentImmediately&&!e.pendingIndent&&e.append((r=t.indentation)!==null&&r!==void 0?r:e.defaultIndentation,!0);try{e.increaseIndent(t),_v(t,e)}finally{e.decreaseIndent()}}}function AN(t,e){t.ifNotEmpty&&!wN(e.currentLineContent)?e.resetCurrentLine():(e.pendingIndent&&Ev(e,!0),e.append(t.lineDelimiter),e.addNewLine())}function wN(t){return t.trimStart()!==""}var wj=Object.freeze("__\xABSKIP^NEW^LINE^IF^EMPTY\xBB__"),Ka=/\r?\n/g,kN=/\S|$/;function Nv(t){let e=t.filter(n=>n.length>0).map(n=>n.search(kN)),r=e.length===0?0:Math.min(...e);return Math.max(0,r)}function Dm(t,...e){let r=CN(t),n=EN(t,e,r);return NN(n)}function Iv(t,e,r){return(n,...i)=>Om(t,e,r)(Dm(n,...i))}function CN(t){let e=t.join("_").split(Ka),r=e.length>1&&e[0].trim().length===0,n=r&&e.length>1&&e[e.length-1].trim().length===0;if(e.length===1||e.length!==0&&e[0].trim().length!==0||e.length===2&&e[1].trim().length===0)return{indentation:0,omitFirstLine:r,omitLastLine:n,trimLastLine:e.length!==1&&e[e.length-1].trim().length===0};{let i=r?e.slice(1):e;i=n?i.slice(0,i.length-1):i,i=i.filter(s=>s.length!==0);let o=Nv(i);return{indentation:o,omitFirstLine:r,omitLastLine:n&&(e[e.length-1].length<o||!e[e.length-1].startsWith(i[0].substring(0,o)))}}}function EN(t,e,{indentation:r,omitFirstLine:n,omitLastLine:i,trimLastLine:o}){let s=[];t.forEach((c,u)=>{s.push(...c.split(Ka).map((f,m)=>m===0||f.length<r?f:f.substring(r)).reduce(u===0?(f,m,T)=>T===0?n?[]:[m]:T===1&&f.length===0?[m]:f.concat(Bc,m):(f,m,T)=>T===0?[m]:f.concat(Bc,m),[]).filter(f=>!(typeof f=="string"&&f.length===0)).concat(Wa(e[u])?e[u]:e[u]!==void 0?{content:String(e[u])}:u<e.length?Dv:[]))});let a=s.length,l=a!==0?s[a-1]:void 0;return(i||o)&&typeof l=="string"&&l.trim().length===0?n&&a!==1&&s[a-2]===Bc?s.slice(0,a-2):s.slice(0,a-1):s}var Bc={isNewLine:!0},Dv={isUndefinedSegment:!0},Pv=t=>t===Bc,Im=t=>t===Dv,_N=t=>t.content!==void 0;function NN(t){return t.reduce((r,n,i)=>Im(n)?r:Pv(n)?{node:i!==0&&(Im(t[i-1])||Wa(t[i-1]))||i>1&&typeof t[i-1]=="string"&&(Im(t[i-2])||Wa(t[i-2]))?r.node.appendNewLineIfNotEmpty():r.node.appendNewLine()}:(()=>{var o;let s=(i===0||Pv(t[i-1]))&&typeof n=="string"&&n.length!==0?"".padStart(n.length-n.trimStart().length):"",a=_N(n)?n.content:n,l;return{node:r.indented?r.node:s.length!==0?r.node.indent({indentation:s,indentImmediately:!1,indentedChildren:c=>l=c.append(a)}):r.node.append(a),indented:l??((o=r.indented)===null||o===void 0?void 0:o.append(a))}})(),{node:new Xt}).node}var $v=typeof process>"u"?`
`:process.platform==="win32"?`\r
`:`
`;function Wa(t){return t instanceof Xt||t instanceof is||t instanceof _i}function os(t,e){return Wa(t)?wv(t,e).text:String(t)}var Xt=class t{constructor(...e){this.contents=[],this.append(...e)}isEmpty(){return this.contents.length===0}trace(e,r,n){if(Ct(e)){if(this.tracedSource={astNode:e,property:r,index:n},this.tracedSource.property===void 0&&this.tracedSource.index!==void 0&&this.tracedSource.index>-1)throw new Error("Generation support: 'property' argument must not be 'undefined' if a non-negative value is assigned to 'index' in 'CompositeGeneratorNode.trace(...)'.")}else this.tracedSource=e;return this}append(...e){for(let r of e)typeof r=="function"?r(this):r&&this.contents.push(r);return this}appendIf(e,...r){return e?this.append(...r):this}appendNewLine(){return this.append(ot)}appendNewLineIf(e){return e?this.append(ot):this}appendNewLineIfNotEmpty(){return this.append($N)}appendNewLineIfNotEmptyIf(e){return e?this.appendNewLineIfNotEmpty():this}appendTemplate(e,...r){return this.append(Dm(e,...r))}appendTemplateIf(e){return e?(r,...n)=>this.appendTemplate(r,...n):()=>this}indent(e){let{indentedChildren:r,indentation:n,indentEmptyLines:i,indentImmediately:o}=Array.isArray(e)||typeof e=="function"?{indentedChildren:e}:typeof e=="object"?e:{},s=new is(n,o,i);return this.contents.push(s),Array.isArray(r)?s.append(...r):r&&s.append(r),this}appendTraced(e,r,n){return i=>this.append(new t().trace(e,r,n).append(i))}appendTracedIf(e,r,n,i){return e?this.appendTraced(typeof r=="function"?r():r,n,i):()=>this}appendTracedTemplate(e,r,n){return(i,...o)=>this.append(Iv(e,r,n)(i,...o))}appendTracedTemplateIf(e,r,n,i){return e?this.appendTracedTemplate(typeof r=="function"?r():r,n,i):()=>this}};function Om(t,e,r){return n=>n instanceof Xt&&n.tracedSource===void 0?n.trace(t,e,r):new Xt().trace(t,e,r).append(n)}var is=class extends Xt{constructor(e,r=!0,n=!1){super(),this.indentImmediately=!0,this.indentEmptyLines=!1,typeof e=="string"?this.indentation=e:typeof e=="number"&&(this.indentation="".padStart(e)),this.indentImmediately=r,this.indentEmptyLines=n}},_i=class{constructor(e,r=!1){this.ifNotEmpty=!1,this.lineDelimiter=e??$v,this.ifNotEmpty=r}},ot=new _i,$N=new _i(void 0,!0);function ei(t){return"referenceType"in t}function ti(t){return"elementType"in t}function It(t){return"types"in t}function Fm(t){if(It(t)){let e=[];for(let r of t.types)e.push(...Fm(r));return e}else return[t]}function Dr(t){return"value"in t}function Or(t){return"primitive"in t}function kn(t){return"string"in t}function un(t){return t&&"type"in t}function dn(t){return t&&"properties"in t}var Vc=class{constructor(e,r){var n;this.superTypes=new Set,this.subTypes=new Set,this.typeNames=new Set,this.name=e,this.declared=(n=r?.declared)!==null&&n!==void 0?n:!1,this.dataType=r?.dataType}toAstTypesString(e){let r=new Xt;return r.append(`export type ${this.name} = ${fn(this.type,"AstType")};`,ot),e&&(r.append(ot),Mv(r,this.name)),this.dataType&&PN(r,this),os(r)}toDeclaredTypesString(e){let r=new Xt;return r.append(`type ${Um(this.name,e)} = ${fn(this.type,"DeclaredType")};`,ot),os(r)}},ss=class t{get superProperties(){return this.getSuperProperties(new Set)}getSuperProperties(e){if(e.has(this.name))return[];e.add(this.name);let r=new Map;for(let n of this.properties)r.set(n.name,n);for(let n of this.interfaceSuperTypes){let i=n.getSuperProperties(e);for(let o of i)r.has(o.name)||r.set(o.name,o)}return Array.from(r.values())}get allProperties(){let e=new Map(this.superProperties.map(n=>[n.name,n]));for(let n of this.subTypes)this.getSubTypeProperties(n,e,new Set);return Array.from(e.values())}getSubTypeProperties(e,r,n){if(n.has(this.name))return;n.add(this.name);let i=dn(e)?e.properties:[];for(let o of i)r.has(o.name)||r.set(o.name,o);for(let o of e.subTypes)this.getSubTypeProperties(o,r,n)}get interfaceSuperTypes(){return Array.from(this.superTypes).filter(e=>e instanceof t)}constructor(e,r,n){this.superTypes=new Set,this.subTypes=new Set,this.containerTypes=new Set,this.typeNames=new Set,this.declared=!1,this.abstract=!1,this.properties=[],this.name=e,this.declared=r,this.abstract=n}toAstTypesString(e){let r=new Xt,n=this.interfaceSuperTypes.map(o=>o.name),i=n.length>0?ho([...n]):["AstNode"];return r.append(`export interface ${this.name} extends ${i.join(", ")} {`,ot),r.indent(o=>{this.containerTypes.size>0&&o.append(`readonly $container: ${ho([...this.containerTypes].map(s=>s.name)).join(" | ")};`,ot),this.typeNames.size>0&&o.append(`readonly $type: ${ho([...this.typeNames]).map(s=>`'${s}'`).join(" | ")};`,ot),Ov(o,this.properties,"AstType")}),r.append("}",ot),e&&(r.append(ot),Mv(r,this.name)),os(r)}toDeclaredTypesString(e){let r=new Xt,n=Um(this.name,e),i=ho(this.interfaceSuperTypes.map(o=>o.name)).join(", ");return r.append(`interface ${n}${i.length>0?` extends ${i}`:""} {`,ot),r.indent(o=>Ov(o,this.properties,"DeclaredType",e)),r.append("}",ot),os(r)}},Xc=class extends Error{constructor(e,r){super(e),this.name="TypeResolutionError",this.target=r}};function za(t,e){return Ni(t,e,new Map)}function Ni(t,e,r){let n=`${Ba(t)}\xBB${Ba(e)}`,i=r.get(n);return i!==void 0||(r.set(n,!1),i=!1,It(t)?i=t.types.every(o=>Ni(o,e,r)):It(e)?i=e.types.some(o=>Ni(t,o,r)):Dr(e)&&un(e.value)?Dr(t)&&un(t.value)&&e.value.name===t.value.name?i=!0:i=Ni(t,e.value.type,r):ei(t)?i=ei(e)&&Ni(t.referenceType,e.referenceType,r):ti(t)?i=ti(e)&&Ni(t.elementType,e.elementType,r):Dr(t)?un(t.value)?i=Ni(t.value.type,e,r):Dr(e)?un(e.value)?i=Ni(t,e.value.type,r):i=Lv(t.value,e.value,new Set):i=!1:Or(t)?i=Or(e)&&t.primitive===e.primitive:kn(t)&&(i=Or(e)&&e.primitive==="string"||kn(e)&&e.string===t.string),i&&r.set(n,i)),i}function Lv(t,e,r){let n=t.name;if(r.has(n))return!1;if(r.add(n),t.name===e.name)return!0;for(let i of t.superTypes)if(dn(i)&&Lv(i,e,r))return!0;return!1}function Ba(t){if(ei(t))return`@(${Ba(t.referenceType)})}`;if(ti(t))return`(${Ba(t.elementType)})[]`;if(It(t)){let e=t.types.map(r=>Ba(r)).join(" | ");return t.types.length<=1?`Union<${e}>`:e}else{if(Dr(t))return`Value<${t.value.name}>`;if(Or(t))return t.primitive;if(kn(t))return`'${t.string}'`}throw new Error("Invalid type")}function fn(t,e="AstType"){if(ei(t)){let r=fn(t.referenceType,e);return e==="AstType"?`Reference<${r}>`:`@${Lm(t.referenceType,r)}`}else if(ti(t)){let r=fn(t.elementType,e);return e==="AstType"?`Array<${r}>`:`${Lm(t.elementType,r)}[]`}else if(It(t)){let r=t.types.map(n=>Lm(n,fn(n,e)));return ho(r).join(" | ")}else{if(Dr(t))return t.value.name;if(Or(t))return t.primitive;if(kn(t)){let r=e==="AstType"?"'":'"';return`${r}${t.string}${r}`}}throw new Error("Invalid type")}function Lm(t,e){return It(t)&&(e=`(${e})`),e}function Ov(t,e,r,n=new Set){function i(o){let s=r==="AstType"?o.name:Um(o.name,n),a=o.optional&&!Yc(o.type),l=fn(o.type,r);return`${s}${a?"?":""}: ${l}`}ho(e,(o,s)=>o.name.localeCompare(s.name)).forEach(o=>t.append(i(o),ot))}function Yc(t){return ti(t)?!0:ei(t)?!1:It(t)?t.types.every(e=>Yc(e)):Or(t)?t.primitive==="boolean":!1}function Mv(t,e){t.append(`export const ${e} = '${e}';`,ot),t.append(ot),t.append(`export function is${e}(item: unknown): item is ${e} {`,ot),t.indent(r=>r.append(`return reflection.isInstance(item, ${e});`,ot)),t.append("}",ot)}function PN(t,e){switch(e.dataType){case"string":if(Mm(e.type)){let r=Array.from(e.subTypes).map(o=>o.name),n=Fv(e.type),i=Uv(e.type);if(r.length===0&&n.length===0&&i.length===0)zc(t,e.name,`typeof item === '${e.dataType}'`);else{let o=IN(r,n,i);zc(t,e.name,o)}}break;case"number":case"boolean":case"bigint":zc(t,e.name,`typeof item === '${e.dataType}'`);break;case"Date":zc(t,e.name,"item instanceof Date");break;default:return}}function Mm(t){let e=!0;if(Or(t))return t.primitive==="string";if(kn(t))return!0;if(It(t)){for(let r of t.types)if(Dr(r))if(un(r.value)){if(!Mm(r.value.type))return!1}else return!1;else if(Or(r)){if(r.primitive!=="string"||!r.regex)return!1}else if(It(r))e=Mm(r);else if(!kn(r))return!1}else return!1;return e}function IN(t,e,r){let n=[...t.map(i=>`is${i}(item)`),...e.map(i=>`item === '${i}'`)];if(r.length>0){let i=r.map(o=>`${o}.test(item)`).join(" || ");n.push(`(typeof item === 'string' && (${i}))`)}return n.join(" || ")}function Um(t,e){return e.has(t)?`^${t}`:t}function Fv(t){let e=[];if(kn(t))return[t.string];if(It(t))for(let r of t.types)kn(r)?e.push(r.string):It(r)&&e.push(...Fv(r));return e}function Uv(t){let e=[];if(Or(t)&&t.primitive==="string"&&t.regex&&e.push(t.regex),It(t))for(let r of t.types)Or(r)&&r.primitive==="string"&&r.regex?e.push(r.regex):It(r)&&e.push(...Uv(r));return e}function zc(t,e,r){t.append(ot,`export function is${e}(item: unknown): item is ${e} {`,ot),t.indent(n=>n.append(`return ${r};`,ot)),t.append("}",ot)}function ho(t,e){return Array.from(new Set(t)).sort(e)}function qm(t,e,r,n){let i=new Set;return i.add(t),e.findReferences(t,{}).forEach(s=>{let a=r.getOrCreateDocument(s.sourceUri),l=n.getAstNode(a.parseResult.value,s.sourcePath);br(l)?(i.add(l),qm(l,e,r,n).forEach(u=>i.add(u))):l&&Mt(l.$container)&&i.add(l.$container)}),i}function Va(t){let e=new Set;if(br(t))e.add(t),t.superTypes.forEach(r=>{if(br(r.ref)){e.add(r.ref);let n=Va(r.ref);for(let i of n)e.add(i)}});else if(Mt(t)){let r=qv(t.type);for(let n of r){let i=Va(n);for(let o of i)e.add(o)}}return e}function qv(t){var e;if(Br(t))return t.types.flatMap(r=>qv(r));if(ir(t)){let r=(e=t.typeRef)===null||e===void 0?void 0:e.ref;if(Mt(r)||br(r))return[r]}return[]}function Gm(t,e){return t.interfaces.concat(e.interfaces)}function Qc(t){return t.interfaces.concat(t.unions)}function Gv(t){let e=t.sort((i,o)=>i.name.localeCompare(o.name)).map(i=>({value:i,nodes:[]}));for(let i of e)i.nodes=e.filter(o=>i.value.superTypes.has(o.value.name));let r=[],n=e.filter(i=>i.nodes.length===0);for(;n.length>0;){let i=n.shift();r.includes(i)||(r.push(i),e.filter(o=>o.nodes.includes(i)).forEach(o=>n.push(o)))}return r.map(i=>i.value)}function jv(t){return Jc(t,new Set)}function Jc(t,e){if(e.has(t))return[];if(e.add(t),It(t))return t.types.flatMap(r=>Jc(r,e));if(Dr(t)){let r=t.value;return"type"in r?Jc(r.type,e):[r.name]}else if(ti(t))return Jc(t.elementType,e);return[]}function Xa(t){return typeof t.name=="string"}var as=class{getName(e){if(Xa(e))return e.name}getNameNode(e){return Yt(e.$cstNode,"name")}};function J(t){return t.charCodeAt(0)}function Zc(t,e){Array.isArray(t)?t.forEach(function(r){e.push(r)}):e.push(t)}function ls(t,e){if(t[e]===!0)throw"duplicate flag "+e;let r=t[e];t[e]=!0}function yo(t){if(t===void 0)throw Error("Internal Error - Should never get here!");return!0}function Ya(){throw Error("Internal Error - Should never get here!")}function jm(t){return t.type==="Character"}var Ja=[];for(let t=J("0");t<=J("9");t++)Ja.push(t);var Qa=[J("_")].concat(Ja);for(let t=J("a");t<=J("z");t++)Qa.push(t);for(let t=J("A");t<=J("Z");t++)Qa.push(t);var Hm=[J(" "),J("\f"),J(`
`),J("\r"),J("	"),J("\v"),J("	"),J("\xA0"),J("\u1680"),J("\u2000"),J("\u2001"),J("\u2002"),J("\u2003"),J("\u2004"),J("\u2005"),J("\u2006"),J("\u2007"),J("\u2008"),J("\u2009"),J("\u200A"),J("\u2028"),J("\u2029"),J("\u202F"),J("\u205F"),J("\u3000"),J("\uFEFF")];var DN=/[0-9a-fA-F]/,eu=/[0-9]/,ON=/[1-9]/,go=class{constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){this.idx=e.idx,this.input=e.input,this.groupIdx=e.groupIdx}pattern(e){this.idx=0,this.input=e,this.groupIdx=0,this.consumeChar("/");let r=this.disjunction();this.consumeChar("/");let n={type:"Flags",loc:{begin:this.idx,end:e.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":ls(n,"global");break;case"i":ls(n,"ignoreCase");break;case"m":ls(n,"multiLine");break;case"u":ls(n,"unicode");break;case"y":ls(n,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:n,value:r,loc:this.loc(0)}}disjunction(){let e=[],r=this.idx;for(e.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),e.push(this.alternative());return{type:"Disjunction",value:e,loc:this.loc(r)}}alternative(){let e=[],r=this.idx;for(;this.isTerm();)e.push(this.term());return{type:"Alternative",value:e,loc:this.loc(r)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){let e=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(e)};case"$":return{type:"EndAnchor",loc:this.loc(e)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(e)};case"B":return{type:"NonWordBoundary",loc:this.loc(e)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let r;switch(this.popChar()){case"=":r="Lookahead";break;case"!":r="NegativeLookahead";break}yo(r);let n=this.disjunction();return this.consumeChar(")"),{type:r,value:n,loc:this.loc(e)}}return Ya()}quantifier(e=!1){let r,n=this.idx;switch(this.popChar()){case"*":r={atLeast:0,atMost:1/0};break;case"+":r={atLeast:1,atMost:1/0};break;case"?":r={atLeast:0,atMost:1};break;case"{":let i=this.integerIncludingZero();switch(this.popChar()){case"}":r={atLeast:i,atMost:i};break;case",":let o;this.isDigit()?(o=this.integerIncludingZero(),r={atLeast:i,atMost:o}):r={atLeast:i,atMost:1/0},this.consumeChar("}");break}if(e===!0&&r===void 0)return;yo(r);break}if(!(e===!0&&r===void 0)&&yo(r))return this.peekChar(0)==="?"?(this.consumeChar("?"),r.greedy=!1):r.greedy=!0,r.type="Quantifier",r.loc=this.loc(n),r}atom(){let e,r=this.idx;switch(this.peekChar()){case".":e=this.dotAll();break;case"\\":e=this.atomEscape();break;case"[":e=this.characterClass();break;case"(":e=this.group();break}return e===void 0&&this.isPatternCharacter()&&(e=this.patternCharacter()),yo(e)?(e.loc=this.loc(r),this.isQuantifier()&&(e.quantifier=this.quantifier()),e):Ya()}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[J(`
`),J("\r"),J("\u2028"),J("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let e,r=!1;switch(this.popChar()){case"d":e=Ja;break;case"D":e=Ja,r=!0;break;case"s":e=Hm;break;case"S":e=Hm,r=!0;break;case"w":e=Qa;break;case"W":e=Qa,r=!0;break}return yo(e)?{type:"Set",value:e,complement:r}:Ya()}controlEscapeAtom(){let e;switch(this.popChar()){case"f":e=J("\f");break;case"n":e=J(`
`);break;case"r":e=J("\r");break;case"t":e=J("	");break;case"v":e=J("\v");break}return yo(e)?{type:"Character",value:e}:Ya()}controlLetterEscapeAtom(){this.consumeChar("c");let e=this.popChar();if(/[a-zA-Z]/.test(e)===!1)throw Error("Invalid ");return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:J("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){let e=this.popChar();return{type:"Character",value:J(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:let e=this.popChar();return{type:"Character",value:J(e)}}}characterClass(){let e=[],r=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),r=!0);this.isClassAtom();){let n=this.classAtom(),i=n.type==="Character";if(jm(n)&&this.isRangeDash()){this.consumeChar("-");let o=this.classAtom(),s=o.type==="Character";if(jm(o)){if(o.value<n.value)throw Error("Range out of order in character class");e.push({from:n.value,to:o.value})}else Zc(n.value,e),e.push(J("-")),Zc(o.value,e)}else Zc(n.value,e)}return this.consumeChar("]"),{type:"Set",complement:r,value:e}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:J("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let e=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),e=!1;break;default:this.groupIdx++;break}let r=this.disjunction();this.consumeChar(")");let n={type:"Group",capturing:e,value:r};return e&&(n.idx=this.groupIdx),n}positiveInteger(){let e=this.popChar();if(ON.test(e)===!1)throw Error("Expecting a positive integer");for(;eu.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}integerIncludingZero(){let e=this.popChar();if(eu.test(e)===!1)throw Error("Expecting an integer");for(;eu.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}patternCharacter(){let e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:J(e)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return eu.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){let e=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(e){let r="";for(let i=0;i<e;i++){let o=this.popChar();if(DN.test(o)===!1)throw Error("Expecting a HexDecimal digits");r+=o}return{type:"Character",value:parseInt(r,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){let e=this.peekChar(0);return this.consumeChar(void 0),e}consumeChar(e){if(e!==void 0&&this.input[this.idx]!==e)throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(e){return{begin:e,end:this.idx}}};var Cn=class{visitChildren(e){for(let r in e){let n=e[r];e.hasOwnProperty(r)&&(n.type!==void 0?this.visit(n):Array.isArray(n)&&n.forEach(i=>{this.visit(i)},this))}}visit(e){switch(e.type){case"Pattern":this.visitPattern(e);break;case"Flags":this.visitFlags(e);break;case"Disjunction":this.visitDisjunction(e);break;case"Alternative":this.visitAlternative(e);break;case"StartAnchor":this.visitStartAnchor(e);break;case"EndAnchor":this.visitEndAnchor(e);break;case"WordBoundary":this.visitWordBoundary(e);break;case"NonWordBoundary":this.visitNonWordBoundary(e);break;case"Lookahead":this.visitLookahead(e);break;case"NegativeLookahead":this.visitNegativeLookahead(e);break;case"Character":this.visitCharacter(e);break;case"Set":this.visitSet(e);break;case"Group":this.visitGroup(e);break;case"GroupBackReference":this.visitGroupBackReference(e);break;case"Quantifier":this.visitQuantifier(e);break}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}};var LN=new go,Wm=class extends Cn{constructor(){super(...arguments),this.isStarting=!0,this.endRegexStack=[],this.multiline=!1}get endRegex(){return this.endRegexStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegex="",this.isStarting=!0,this.endRegexStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexStack=[])}visitCharacter(e){let r=String.fromCharCode(e.value);if(!this.multiline&&r===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexStack=[];else{let n=ri(r);this.endRegexStack.push(n),this.isStarting&&(this.startRegex+=n)}}visitSet(e){if(!this.multiline){let r=this.regex.substring(e.loc.begin,e.loc.end),n=new RegExp(r);this.multiline=!!`
`.match(n)}if(e.quantifier)this.isStarting=!1,this.endRegexStack=[];else{let r=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexStack.push(r),this.isStarting&&(this.startRegex+=r)}}visitChildren(e){e.type==="Group"&&e.quantifier||super.visitChildren(e)}},Km=new Wm;function Hv(t){try{return typeof t=="string"&&(t=new RegExp(t)),t=t.toString(),Km.reset(t),Km.visit(LN.pattern(t)),Km.multiline}catch{return!1}}function Bm(t){return(typeof t=="string"?new RegExp(t):t).test(" ")}function ri(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Kv(t){return Array.prototype.map.call(t,e=>/\w/.test(e)?`[${e.toLowerCase()}${e.toUpperCase()}]`:ri(e)).join("")}function Wv(t,e){let r=MN(t),n=e.match(r);return!!n&&n[0].length>0}function MN(t){typeof t=="string"&&(t=new RegExp(t));let e=t,r=t.source,n=0;function i(){let o="",s;function a(c){o+=r.substr(n,c),n+=c}function l(c){o+="(?:"+r.substr(n,c)+"|$)",n+=c}for(;n<r.length;)switch(r[n]){case"\\":switch(r[n+1]){case"c":l(3);break;case"x":l(4);break;case"u":e.unicode?r[n+2]==="{"?l(r.indexOf("}",n)-n+1):l(6):l(2);break;case"p":case"P":e.unicode?l(r.indexOf("}",n)-n+1):l(2);break;case"k":l(r.indexOf(">",n)-n+1);break;default:l(2);break}break;case"[":s=/\[(?:\\.|.)*?\]/g,s.lastIndex=n,s=s.exec(r)||[],l(s[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":a(1);break;case"{":s=/\{\d+,?\d*\}/g,s.lastIndex=n,s=s.exec(r),s?a(s[0].length):l(1);break;case"(":if(r[n+1]==="?")switch(r[n+2]){case":":o+="(?:",n+=3,o+=i()+"|$)";break;case"=":o+="(?=",n+=3,o+=i()+")";break;case"!":s=n,n+=3,i(),o+=r.substr(s,n-s);break;case"<":switch(r[n+3]){case"=":case"!":s=n,n+=4,i(),o+=r.substr(s,n-s);break;default:a(r.indexOf(">",n)-n+1),o+=i()+"|$)";break}break}else a(1),o+=i()+"|$)";break;case")":return++n,o;default:l(1);break}return o}return new RegExp(i(),t.flags)}var zm={};Yw(zm,{URI:()=>FN,Utils:()=>UN});var Bv;(()=>{"use strict";var t={470:i=>{function o(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}function s(l,c){for(var u,f="",m=0,T=-1,S=0,A=0;A<=l.length;++A){if(A<l.length)u=l.charCodeAt(A);else{if(u===47)break;u=47}if(u===47){if(!(T===A-1||S===1))if(T!==A-1&&S===2){if(f.length<2||m!==2||f.charCodeAt(f.length-1)!==46||f.charCodeAt(f.length-2)!==46){if(f.length>2){var N=f.lastIndexOf("/");if(N!==f.length-1){N===-1?(f="",m=0):m=(f=f.slice(0,N)).length-1-f.lastIndexOf("/"),T=A,S=0;continue}}else if(f.length===2||f.length===1){f="",m=0,T=A,S=0;continue}}c&&(f.length>0?f+="/..":f="..",m=2)}else f.length>0?f+="/"+l.slice(T+1,A):f=l.slice(T+1,A),m=A-T-1;T=A,S=0}else u===46&&S!==-1?++S:S=-1}return f}var a={resolve:function(){for(var l,c="",u=!1,f=arguments.length-1;f>=-1&&!u;f--){var m;f>=0?m=arguments[f]:(l===void 0&&(l=process.cwd()),m=l),o(m),m.length!==0&&(c=m+"/"+c,u=m.charCodeAt(0)===47)}return c=s(c,!u),u?c.length>0?"/"+c:"/":c.length>0?c:"."},normalize:function(l){if(o(l),l.length===0)return".";var c=l.charCodeAt(0)===47,u=l.charCodeAt(l.length-1)===47;return(l=s(l,!c)).length!==0||c||(l="."),l.length>0&&u&&(l+="/"),c?"/"+l:l},isAbsolute:function(l){return o(l),l.length>0&&l.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var l,c=0;c<arguments.length;++c){var u=arguments[c];o(u),u.length>0&&(l===void 0?l=u:l+="/"+u)}return l===void 0?".":a.normalize(l)},relative:function(l,c){if(o(l),o(c),l===c||(l=a.resolve(l))===(c=a.resolve(c)))return"";for(var u=1;u<l.length&&l.charCodeAt(u)===47;++u);for(var f=l.length,m=f-u,T=1;T<c.length&&c.charCodeAt(T)===47;++T);for(var S=c.length-T,A=m<S?m:S,N=-1,k=0;k<=A;++k){if(k===A){if(S>A){if(c.charCodeAt(T+k)===47)return c.slice(T+k+1);if(k===0)return c.slice(T+k)}else m>A&&(l.charCodeAt(u+k)===47?N=k:k===0&&(N=0));break}var v=l.charCodeAt(u+k);if(v!==c.charCodeAt(T+k))break;v===47&&(N=k)}var g="";for(k=u+N+1;k<=f;++k)k!==f&&l.charCodeAt(k)!==47||(g.length===0?g+="..":g+="/..");return g.length>0?g+c.slice(T+N):(T+=N,c.charCodeAt(T)===47&&++T,c.slice(T))},_makeLong:function(l){return l},dirname:function(l){if(o(l),l.length===0)return".";for(var c=l.charCodeAt(0),u=c===47,f=-1,m=!0,T=l.length-1;T>=1;--T)if((c=l.charCodeAt(T))===47){if(!m){f=T;break}}else m=!1;return f===-1?u?"/":".":u&&f===1?"//":l.slice(0,f)},basename:function(l,c){if(c!==void 0&&typeof c!="string")throw new TypeError('"ext" argument must be a string');o(l);var u,f=0,m=-1,T=!0;if(c!==void 0&&c.length>0&&c.length<=l.length){if(c.length===l.length&&c===l)return"";var S=c.length-1,A=-1;for(u=l.length-1;u>=0;--u){var N=l.charCodeAt(u);if(N===47){if(!T){f=u+1;break}}else A===-1&&(T=!1,A=u+1),S>=0&&(N===c.charCodeAt(S)?--S==-1&&(m=u):(S=-1,m=A))}return f===m?m=A:m===-1&&(m=l.length),l.slice(f,m)}for(u=l.length-1;u>=0;--u)if(l.charCodeAt(u)===47){if(!T){f=u+1;break}}else m===-1&&(T=!1,m=u+1);return m===-1?"":l.slice(f,m)},extname:function(l){o(l);for(var c=-1,u=0,f=-1,m=!0,T=0,S=l.length-1;S>=0;--S){var A=l.charCodeAt(S);if(A!==47)f===-1&&(m=!1,f=S+1),A===46?c===-1?c=S:T!==1&&(T=1):c!==-1&&(T=-1);else if(!m){u=S+1;break}}return c===-1||f===-1||T===0||T===1&&c===f-1&&c===u+1?"":l.slice(c,f)},format:function(l){if(l===null||typeof l!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof l);return function(c,u){var f=u.dir||u.root,m=u.base||(u.name||"")+(u.ext||"");return f?f===u.root?f+m:f+"/"+m:m}(0,l)},parse:function(l){o(l);var c={root:"",dir:"",base:"",ext:"",name:""};if(l.length===0)return c;var u,f=l.charCodeAt(0),m=f===47;m?(c.root="/",u=1):u=0;for(var T=-1,S=0,A=-1,N=!0,k=l.length-1,v=0;k>=u;--k)if((f=l.charCodeAt(k))!==47)A===-1&&(N=!1,A=k+1),f===46?T===-1?T=k:v!==1&&(v=1):T!==-1&&(v=-1);else if(!N){S=k+1;break}return T===-1||A===-1||v===0||v===1&&T===A-1&&T===S+1?A!==-1&&(c.base=c.name=S===0&&m?l.slice(1,A):l.slice(S,A)):(S===0&&m?(c.name=l.slice(1,T),c.base=l.slice(1,A)):(c.name=l.slice(S,T),c.base=l.slice(S,A)),c.ext=l.slice(T,A)),S>0?c.dir=l.slice(0,S-1):m&&(c.dir="/"),c},sep:"/",delimiter:":",win32:null,posix:null};a.posix=a,i.exports=a}},e={};function r(i){var o=e[i];if(o!==void 0)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,r),s.exports}r.d=(i,o)=>{for(var s in o)r.o(o,s)&&!r.o(i,s)&&Object.defineProperty(i,s,{enumerable:!0,get:o[s]})},r.o=(i,o)=>Object.prototype.hasOwnProperty.call(i,o),r.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var n={};(()=>{let i;r.r(n),r.d(n,{URI:()=>m,Utils:()=>vt}),typeof process=="object"?i=process.platform==="win32":typeof navigator=="object"&&(i=navigator.userAgent.indexOf("Windows")>=0);let o=/^\w[\w\d+.-]*$/,s=/^\//,a=/^\/\//;function l(M,w){if(!M.scheme&&w)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${M.authority}", path: "${M.path}", query: "${M.query}", fragment: "${M.fragment}"}`);if(M.scheme&&!o.test(M.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(M.path){if(M.authority){if(!s.test(M.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(a.test(M.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let c="",u="/",f=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class m{static isUri(w){return w instanceof m||!!w&&typeof w.authority=="string"&&typeof w.fragment=="string"&&typeof w.path=="string"&&typeof w.query=="string"&&typeof w.scheme=="string"&&typeof w.fsPath=="string"&&typeof w.with=="function"&&typeof w.toString=="function"}scheme;authority;path;query;fragment;constructor(w,q,j,le,ee,Q=!1){typeof w=="object"?(this.scheme=w.scheme||c,this.authority=w.authority||c,this.path=w.path||c,this.query=w.query||c,this.fragment=w.fragment||c):(this.scheme=function(Rt,ct){return Rt||ct?Rt:"file"}(w,Q),this.authority=q||c,this.path=function(Rt,ct){switch(Rt){case"https":case"http":case"file":ct?ct[0]!==u&&(ct=u+ct):ct=u}return ct}(this.scheme,j||c),this.query=le||c,this.fragment=ee||c,l(this,Q))}get fsPath(){return v(this,!1)}with(w){if(!w)return this;let{scheme:q,authority:j,path:le,query:ee,fragment:Q}=w;return q===void 0?q=this.scheme:q===null&&(q=c),j===void 0?j=this.authority:j===null&&(j=c),le===void 0?le=this.path:le===null&&(le=c),ee===void 0?ee=this.query:ee===null&&(ee=c),Q===void 0?Q=this.fragment:Q===null&&(Q=c),q===this.scheme&&j===this.authority&&le===this.path&&ee===this.query&&Q===this.fragment?this:new S(q,j,le,ee,Q)}static parse(w,q=!1){let j=f.exec(w);return j?new S(j[2]||c,X(j[4]||c),X(j[5]||c),X(j[7]||c),X(j[9]||c),q):new S(c,c,c,c,c)}static file(w){let q=c;if(i&&(w=w.replace(/\\/g,u)),w[0]===u&&w[1]===u){let j=w.indexOf(u,2);j===-1?(q=w.substring(2),w=u):(q=w.substring(2,j),w=w.substring(j)||u)}return new S("file",q,w,c,c)}static from(w){let q=new S(w.scheme,w.authority,w.path,w.query,w.fragment);return l(q,!0),q}toString(w=!1){return g(this,w)}toJSON(){return this}static revive(w){if(w){if(w instanceof m)return w;{let q=new S(w);return q._formatted=w.external,q._fsPath=w._sep===T?w.fsPath:null,q}}return w}}let T=i?1:void 0;class S extends m{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=v(this,!1)),this._fsPath}toString(w=!1){return w?g(this,!0):(this._formatted||(this._formatted=g(this,!1)),this._formatted)}toJSON(){let w={$mid:1};return this._fsPath&&(w.fsPath=this._fsPath,w._sep=T),this._formatted&&(w.external=this._formatted),this.path&&(w.path=this.path),this.scheme&&(w.scheme=this.scheme),this.authority&&(w.authority=this.authority),this.query&&(w.query=this.query),this.fragment&&(w.fragment=this.fragment),w}}let A={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function N(M,w,q){let j,le=-1;for(let ee=0;ee<M.length;ee++){let Q=M.charCodeAt(ee);if(Q>=97&&Q<=122||Q>=65&&Q<=90||Q>=48&&Q<=57||Q===45||Q===46||Q===95||Q===126||w&&Q===47||q&&Q===91||q&&Q===93||q&&Q===58)le!==-1&&(j+=encodeURIComponent(M.substring(le,ee)),le=-1),j!==void 0&&(j+=M.charAt(ee));else{j===void 0&&(j=M.substr(0,ee));let Rt=A[Q];Rt!==void 0?(le!==-1&&(j+=encodeURIComponent(M.substring(le,ee)),le=-1),j+=Rt):le===-1&&(le=ee)}}return le!==-1&&(j+=encodeURIComponent(M.substring(le))),j!==void 0?j:M}function k(M){let w;for(let q=0;q<M.length;q++){let j=M.charCodeAt(q);j===35||j===63?(w===void 0&&(w=M.substr(0,q)),w+=A[j]):w!==void 0&&(w+=M[q])}return w!==void 0?w:M}function v(M,w){let q;return q=M.authority&&M.path.length>1&&M.scheme==="file"?`//${M.authority}${M.path}`:M.path.charCodeAt(0)===47&&(M.path.charCodeAt(1)>=65&&M.path.charCodeAt(1)<=90||M.path.charCodeAt(1)>=97&&M.path.charCodeAt(1)<=122)&&M.path.charCodeAt(2)===58?w?M.path.substr(1):M.path[1].toLowerCase()+M.path.substr(2):M.path,i&&(q=q.replace(/\//g,"\\")),q}function g(M,w){let q=w?k:N,j="",{scheme:le,authority:ee,path:Q,query:Rt,fragment:ct}=M;if(le&&(j+=le,j+=":"),(ee||le==="file")&&(j+=u,j+=u),ee){let me=ee.indexOf("@");if(me!==-1){let Er=ee.substr(0,me);ee=ee.substr(me+1),me=Er.lastIndexOf(":"),me===-1?j+=q(Er,!1,!1):(j+=q(Er.substr(0,me),!1,!1),j+=":",j+=q(Er.substr(me+1),!1,!0)),j+="@"}ee=ee.toLowerCase(),me=ee.lastIndexOf(":"),me===-1?j+=q(ee,!1,!0):(j+=q(ee.substr(0,me),!1,!0),j+=ee.substr(me))}if(Q){if(Q.length>=3&&Q.charCodeAt(0)===47&&Q.charCodeAt(2)===58){let me=Q.charCodeAt(1);me>=65&&me<=90&&(Q=`/${String.fromCharCode(me+32)}:${Q.substr(3)}`)}else if(Q.length>=2&&Q.charCodeAt(1)===58){let me=Q.charCodeAt(0);me>=65&&me<=90&&(Q=`${String.fromCharCode(me+32)}:${Q.substr(2)}`)}j+=q(Q,!0,!1)}return Rt&&(j+="?",j+=q(Rt,!1,!1)),ct&&(j+="#",j+=w?ct:N(ct,!1,!1)),j}function _(M){try{return decodeURIComponent(M)}catch{return M.length>3?M.substr(0,3)+_(M.substr(3)):M}}let D=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function X(M){return M.match(D)?M.replace(D,w=>_(w)):M}var ge=r(470);let Ee=ge.posix||ge,Ht="/";var vt;(function(M){M.joinPath=function(w,...q){return w.with({path:Ee.join(w.path,...q)})},M.resolvePath=function(w,...q){let j=w.path,le=!1;j[0]!==Ht&&(j=Ht+j,le=!0);let ee=Ee.resolve(j,...q);return le&&ee[0]===Ht&&!w.authority&&(ee=ee.substring(1)),w.with({path:ee})},M.dirname=function(w){if(w.path.length===0||w.path===Ht)return w;let q=Ee.dirname(w.path);return q.length===1&&q.charCodeAt(0)===46&&(q=""),w.with({path:q})},M.basename=function(w){return Ee.basename(w.path)},M.extname=function(w){return Ee.extname(w.path)}})(vt||(vt={}))})(),Bv=n})();var{URI:FN,Utils:UN}=Bv;var ni=zm;"default"in ni&&(ni=ni.default);var Dt=ni.URI;var ve;(function(t){t.basename=ni.Utils.basename,t.dirname=ni.Utils.dirname,t.extname=ni.Utils.extname,t.joinPath=ni.Utils.joinPath,t.resolvePath=ni.Utils.resolvePath;function e(n,i){return n?.toString()===i?.toString()}t.equals=e;function r(n,i){let o=typeof n=="string"?n:n.path,s=typeof i=="string"?i:i.path,a=o.split("/").filter(m=>m.length>0),l=s.split("/").filter(m=>m.length>0),c=0;for(;c<a.length&&a[c]===l[c];c++);let u="../".repeat(a.length-c),f=l.slice(c).join("/");return u+f}t.relative=r})(ve=ve||(ve={}));var tH=ve.equals,rH=ve.relative;var tu,zv=()=>tu??(tu=ru(`{"$type":"Grammar","isDeclared":true,"name":"LangiumGrammar","rules":[{"$type":"ParserRule","name":"Grammar","entry":true,"definition":{"$type":"Group","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"isDeclared","operator":"?=","terminal":{"$type":"Keyword","value":"grammar"}},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"with"},{"$type":"Assignment","feature":"usedGrammars","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@0"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"usedGrammars","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@0"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}}],"cardinality":"*"}],"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Assignment","feature":"definesHiddenTokens","operator":"?=","terminal":{"$type":"Keyword","value":"hidden"}},{"$type":"Keyword","value":"("},{"$type":"Group","elements":[{"$type":"Assignment","feature":"hiddenTokens","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@11"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"hiddenTokens","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@11"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}}],"cardinality":"*"}],"cardinality":"?"},{"$type":"Keyword","value":")"}],"cardinality":"?"}],"cardinality":"?"},{"$type":"Assignment","feature":"imports","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"rules","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"interfaces","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"Assignment","feature":"types","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}],"cardinality":"+"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Interface","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"interface"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"extends"},{"$type":"Assignment","feature":"superTypes","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/types@0"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"superTypes","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/types@0"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}}],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"SchemaType","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"{"},{"$type":"Assignment","feature":"attributes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},"cardinality":"*"},{"$type":"Keyword","value":"}"},{"$type":"Keyword","value":";","cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TypeAttribute","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@58"},"arguments":[]}},{"$type":"Assignment","feature":"isOptional","operator":"?=","terminal":{"$type":"Keyword","value":"?"},"cardinality":"?"},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Keyword","value":";","cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TypeDefinition","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"UnionType","inferredType":{"$type":"InferredType","name":"TypeDefinition"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"UnionType"},"feature":"types","operator":"+="},{"$type":"Group","elements":[{"$type":"Keyword","value":"|"},{"$type":"Assignment","feature":"types","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"+"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ArrayType","inferredType":{"$type":"InferredType","name":"TypeDefinition"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"ArrayType"},"feature":"elementType","operator":"="},{"$type":"Keyword","value":"["},{"$type":"Keyword","value":"]"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ReferenceType","inferredType":{"$type":"InferredType","name":"TypeDefinition"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"ReferenceType"}},{"$type":"Keyword","value":"@"},{"$type":"Assignment","feature":"referenceType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"SimpleType","inferredType":{"$type":"InferredType","name":"TypeDefinition"},"definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":")"}]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"SimpleType"}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"typeRef","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/types@0"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Assignment","feature":"primitiveType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"stringType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]}}]}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PrimitiveType","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"string"},{"$type":"Keyword","value":"number"},{"$type":"Keyword","value":"boolean"},{"$type":"Keyword","value":"Date"},{"$type":"Keyword","value":"bigint"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Type","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"type"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]}},{"$type":"Keyword","value":"="},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Keyword","value":";","cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"AbstractRule","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@46"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"GrammarImport","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"import"},{"$type":"Assignment","feature":"path","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]}},{"$type":"Keyword","value":";","cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ParserRule","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"entry","operator":"?=","terminal":{"$type":"Keyword","value":"entry"}},{"$type":"Assignment","feature":"fragment","operator":"?=","terminal":{"$type":"Keyword","value":"fragment"}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"wildcard","operator":"?=","terminal":{"$type":"Keyword","value":"*"}},{"$type":"Group","elements":[{"$type":"Keyword","value":"returns"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"returnType","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/types@0"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Assignment","feature":"dataType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Assignment","feature":"inferredType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[{"$type":"NamedArgument","value":{"$type":"LiteralCondition","true":false},"calledByName":false}]}}],"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Assignment","feature":"definesHiddenTokens","operator":"?=","terminal":{"$type":"Keyword","value":"hidden"}},{"$type":"Keyword","value":"("},{"$type":"Group","elements":[{"$type":"Assignment","feature":"hiddenTokens","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@11"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"hiddenTokens","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@11"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}}],"cardinality":"*"}],"cardinality":"?"},{"$type":"Keyword","value":")"}],"cardinality":"?"},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"definition","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},{"$type":"Keyword","value":";"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"InferredType","parameters":[{"$type":"Parameter","name":"imperative"}],"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","guardCondition":{"$type":"ParameterReference","parameter":{"$ref":"#/rules@14/parameters@0"}},"elements":[{"$type":"Keyword","value":"infer"}]},{"$type":"Group","guardCondition":{"$type":"Negation","value":{"$type":"ParameterReference","parameter":{"$ref":"#/rules@14/parameters@0"}}},"elements":[{"$type":"Keyword","value":"infers"}]}]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"wildcard":false},{"$type":"ParserRule","name":"RuleNameAndParams","fragment":true,"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"<"},{"$type":"Group","elements":[{"$type":"Assignment","feature":"parameters","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"parameters","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}}],"cardinality":"*"}],"cardinality":"?"},{"$type":"Keyword","value":">"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Parameter","definition":{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Alternatives","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Alternatives"},"feature":"elements","operator":"+="},{"$type":"Group","elements":[{"$type":"Keyword","value":"|"},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}],"cardinality":"+"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ConditionalBranch","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Group"}},{"$type":"Keyword","value":"<"},{"$type":"Assignment","feature":"guardCondition","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":">"},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"cardinality":"+"}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"UnorderedGroup","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"UnorderedGroup"},"feature":"elements","operator":"+="},{"$type":"Group","elements":[{"$type":"Keyword","value":"&"},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"+"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Group"},"feature":"elements","operator":"+="},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"cardinality":"+"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"AbstractToken","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"AbstractTokenWithCardinality","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@37"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]}]},{"$type":"Assignment","feature":"cardinality","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"?"},{"$type":"Keyword","value":"*"},{"$type":"Keyword","value":"+"}]},"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Action","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Action"}},{"$type":"Keyword","value":"{"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/types@0"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Assignment","feature":"inferredType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[{"$type":"NamedArgument","value":{"$type":"LiteralCondition","true":true},"calledByName":false}]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"."},{"$type":"Assignment","feature":"feature","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@58"},"arguments":[]}},{"$type":"Assignment","feature":"operator","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"="},{"$type":"Keyword","value":"+="}]}},{"$type":"Keyword","value":"current"}],"cardinality":"?"},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"AbstractTerminal","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@25"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@26"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@43"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@35"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@36"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@44"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Keyword","definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"RuleCall","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rule","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@11"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Group","elements":[{"$type":"Keyword","value":"<"},{"$type":"Assignment","feature":"arguments","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@27"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"arguments","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@27"},"arguments":[]}}],"cardinality":"*"},{"$type":"Keyword","value":">"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NamedArgument","definition":{"$type":"Group","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"parameter","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@16"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Assignment","feature":"calledByName","operator":"?=","terminal":{"$type":"Keyword","value":"="}}],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"LiteralCondition","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"true","operator":"?=","terminal":{"$type":"Keyword","value":"true"}},{"$type":"Keyword","value":"false"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Disjunction","inferredType":{"$type":"InferredType","name":"Condition"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@30"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Disjunction"},"feature":"left","operator":"="},{"$type":"Keyword","value":"|"},{"$type":"Assignment","feature":"right","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@30"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Conjunction","inferredType":{"$type":"InferredType","name":"Condition"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@31"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Conjunction"},"feature":"left","operator":"="},{"$type":"Keyword","value":"&"},{"$type":"Assignment","feature":"right","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@31"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Negation","inferredType":{"$type":"InferredType","name":"Condition"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@32"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Negation"}},{"$type":"Keyword","value":"!"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@31"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Atom","inferredType":{"$type":"InferredType","name":"Condition"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@34"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@33"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ParenthesizedCondition","inferredType":{"$type":"InferredType","name":"Condition"},"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},{"$type":"Keyword","value":")"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ParameterReference","definition":{"$type":"Assignment","feature":"parameter","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@16"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PredicatedKeyword","inferredType":{"$type":"InferredType","name":"Keyword"},"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"=>"},{"$type":"Keyword","value":"->"}]},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@60"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PredicatedRuleCall","inferredType":{"$type":"InferredType","name":"RuleCall"},"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"=>"},{"$type":"Keyword","value":"->"}]},{"$type":"Assignment","feature":"rule","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@11"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Group","elements":[{"$type":"Keyword","value":"<"},{"$type":"Assignment","feature":"arguments","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@27"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"arguments","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@27"},"arguments":[]}}],"cardinality":"*"},{"$type":"Keyword","value":">"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Assignment","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Assignment"}},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"=>"},{"$type":"Keyword","value":"->"}],"cardinality":"?"},{"$type":"Assignment","feature":"feature","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@58"},"arguments":[]}},{"$type":"Assignment","feature":"operator","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"+="},{"$type":"Keyword","value":"="},{"$type":"Keyword","value":"?="}]}},{"$type":"Assignment","feature":"terminal","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@38"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"AssignableTerminal","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@25"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@26"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ParenthesizedAssignableElement","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"RuleCall","rule":{"$ref":"#/rules@40"},"arguments":[]},{"$type":"Keyword","value":")"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"AssignableAlternatives","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@38"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Alternatives"},"feature":"elements","operator":"+="},{"$type":"Group","elements":[{"$type":"Keyword","value":"|"},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@38"},"arguments":[]}}],"cardinality":"+"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CrossReference","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"CrossReference"}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/types@0"},"deprecatedSyntax":false}},{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"deprecatedSyntax","operator":"?=","terminal":{"$type":"Keyword","value":"|"}},{"$type":"Keyword","value":":"}]},{"$type":"Assignment","feature":"terminal","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@42"},"arguments":[]}}],"cardinality":"?"},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CrossReferenceableTerminal","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@25"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@26"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ParenthesizedElement","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]},{"$type":"Keyword","value":")"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PredicatedGroup","inferredType":{"$type":"InferredType","name":"Group"},"definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"=>"},{"$type":"Keyword","value":"->"}]},{"$type":"Keyword","value":"("},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},{"$type":"Keyword","value":")"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ReturnType","definition":{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TerminalRule","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"hidden","operator":"?=","terminal":{"$type":"Keyword","value":"hidden"},"cardinality":"?"},{"$type":"Keyword","value":"terminal"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"fragment","operator":"?=","terminal":{"$type":"Keyword","value":"fragment"}},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"returns"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@45"},"arguments":[]}}],"cardinality":"?"}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"definition","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@47"},"arguments":[]}},{"$type":"Keyword","value":";"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TerminalAlternatives","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"TerminalAlternatives"},"feature":"elements","operator":"+="},{"$type":"Keyword","value":"|"},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TerminalGroup","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@49"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"TerminalGroup"},"feature":"elements","operator":"+="},{"$type":"Assignment","feature":"elements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@49"},"arguments":[]},"cardinality":"+"}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TerminalToken","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"Assignment","feature":"cardinality","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"?"},{"$type":"Keyword","value":"*"},{"$type":"Keyword","value":"+"}]},"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TerminalTokenElement","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@57"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@53"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@54"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@55"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@56"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ParenthesizedTerminalElement","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"Assignment","feature":"lookahead","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"?="},{"$type":"Keyword","value":"?!"}]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@47"},"arguments":[]},{"$type":"Keyword","value":")"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"TerminalRuleCall","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"TerminalRuleCall"}},{"$type":"Assignment","feature":"rule","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@46"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]},"deprecatedSyntax":false}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NegatedToken","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"NegatedToken"}},{"$type":"Keyword","value":"!"},{"$type":"Assignment","feature":"terminal","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"UntilToken","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"UntilToken"}},{"$type":"Keyword","value":"->"},{"$type":"Assignment","feature":"terminal","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"RegexToken","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"RegexToken"}},{"$type":"Assignment","feature":"regex","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@61"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Wildcard","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"Wildcard"}},{"$type":"Keyword","value":"."}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CharacterRange","inferredType":{"$type":"InferredType","name":"AbstractElement"},"definition":{"$type":"Group","elements":[{"$type":"Action","inferredType":{"$type":"InferredType","name":"CharacterRange"}},{"$type":"Assignment","feature":"left","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@25"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":".."},{"$type":"Assignment","feature":"right","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@25"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"FeatureName","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"current"},{"$type":"Keyword","value":"entry"},{"$type":"Keyword","value":"extends"},{"$type":"Keyword","value":"false"},{"$type":"Keyword","value":"fragment"},{"$type":"Keyword","value":"grammar"},{"$type":"Keyword","value":"hidden"},{"$type":"Keyword","value":"import"},{"$type":"Keyword","value":"interface"},{"$type":"Keyword","value":"returns"},{"$type":"Keyword","value":"terminal"},{"$type":"Keyword","value":"true"},{"$type":"Keyword","value":"type"},{"$type":"Keyword","value":"infer"},{"$type":"Keyword","value":"infers"},{"$type":"Keyword","value":"with"},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@59"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ID","definition":{"$type":"RegexToken","regex":"/\\\\^?[_a-zA-Z][\\\\w_]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","definition":{"$type":"RegexToken","regex":"/\\"(\\\\\\\\.|[^\\"\\\\\\\\])*\\"|'(\\\\\\\\.|[^'\\\\\\\\])*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"RegexLiteral","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\/(?![*+?])(?:[^\\\\r\\\\n\\\\[/\\\\\\\\]|\\\\\\\\.|\\\\[(?:[^\\\\r\\\\n\\\\]\\\\\\\\]|\\\\\\\\.)*\\\\])+\\\\/[a-z]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/\\\\s+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SL_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\/\\\\/[^\\\\n\\\\r]*/"},"fragment":false}],"types":[{"$type":"Type","name":"AbstractType","type":{"$type":"UnionType","types":[{"$type":"SimpleType","typeRef":{"$ref":"#/rules@1"}},{"$type":"SimpleType","typeRef":{"$ref":"#/rules@10"}},{"$type":"SimpleType","typeRef":{"$ref":"#/rules@23/definition/elements@0"}},{"$type":"SimpleType","typeRef":{"$ref":"#/rules@13"}}]}}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"interfaces":[],"usedGrammars":[]}`));var ou=de(io(),1);var Za=de(Vn(),1);function qN(){return new Promise(t=>{typeof setImmediate>"u"?setTimeout(t,0):setImmediate(t)})}var Vv=0,GN=10;var Xv=Symbol("OperationCancelled");function To(t){return t===Xv}async function Ze(t){if(t===Za.CancellationToken.None)return;let e=Date.now();if(e-Vv>=GN&&(Vv=e,await qN()),t.isCancellationRequested)throw Xv}var nu=class{constructor(){this.previousAction=Promise.resolve(),this.previousTokenSource=new Za.CancellationTokenSource}lock(e){this.cancel();let r=new Za.CancellationTokenSource;return this.previousTokenSource=r,this.previousAction=this.previousAction.then(()=>e(r.token).catch(n=>{To(n)||console.error("Error: ",n)}))}cancel(){this.previousTokenSource.cancel()}};function Lr(t){return{code:t}}var cs;(function(t){t.all=["fast","slow","built-in"]})(cs=cs||(cs={}));var iu=class{constructor(e){this.entries=new Le,this.reflection=e.shared.AstReflection}register(e,r=this,n="fast"){if(n==="built-in")throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");for(let[i,o]of Object.entries(e)){let s=o;if(Array.isArray(s))for(let a of s){let l={check:this.wrapValidationException(a,r),category:n};this.addEntry(i,l)}else if(typeof s=="function"){let a={check:this.wrapValidationException(s,r),category:n};this.addEntry(i,a)}}}wrapValidationException(e,r){return async(n,i,o)=>{try{await e.call(r,n,i,o)}catch(s){if(To(s))throw s;console.error("An error occurred during validation:",s);let a=s instanceof Error?s.message:String(s);s instanceof Error&&s.stack&&console.error(s.stack),i("error","An error occurred during validation: "+a,{node:n})}}}addEntry(e,r){if(e==="AstNode"){this.entries.add("AstNode",r);return}for(let n of this.reflection.getAllSubTypes(e))this.entries.add(n,r)}getChecks(e,r){let n=ie(this.entries.get(e)).concat(this.entries.get("AstNode"));return r&&(n=n.filter(i=>r.includes(i.category))),n.map(i=>i.check)}};function Yv(t,e){let r={unions:[],interfaces:[]};for(let n of t){let i=[];for(let a of n.attributes)i.push({name:a.name,optional:a.isOptional,astNodes:new Set([a]),type:vo(a.type)});let o=new Set;for(let a of n.superTypes)a.ref&&o.add(pn(a.ref));let s={name:n.name,declared:!0,abstract:!1,properties:i,superTypes:o,subTypes:new Set};r.interfaces.push(s)}for(let n of e){let i={name:n.name,declared:!0,type:vo(n.type),superTypes:new Set,subTypes:new Set};r.unions.push(i)}return r}function vo(t){if(po(t))return{elementType:vo(t.elementType)};if(mo(t))return{referenceType:vo(t.referenceType)};if(Br(t))return{types:t.types.map(vo)};if(ir(t)){let e;if(t.primitiveType)return e=t.primitiveType,{primitive:e};if(t.stringType)return e=t.stringType,{string:e};if(t.typeRef){let r=t.typeRef.ref,n=En(r);if(n)return us(n)?{primitive:n}:{value:n}}}return{primitive:"unknown"}}function fs(t){return"referenceType"in t}function Vm(t){return"elementType"in t}function Jv(t){return"types"in t}function Xm(t){return"value"in t}function jN(t){return"primitive"in t}function HN(t){return"string"in t}function Qv(t){let e=new Map,r=new Map;for(let n of t.interfaces){let i=new ss(n.name,n.declared,n.abstract);e.set(n.name,i)}for(let n of t.unions){let i=new Vc(n.name,{declared:n.declared,dataType:n.dataType});r.set(n.name,i)}for(let n of t.interfaces){let i=e.get(n.name);for(let o of n.superTypes){let s=e.get(o)||r.get(o);s&&i.superTypes.add(s)}for(let o of n.subTypes){let s=e.get(o)||r.get(o);s&&i.subTypes.add(s)}for(let o of n.properties){let s=KN(o,e,r);i.properties.push(s)}}for(let n of t.unions){let i=r.get(n.name);i.type=el(n.type,i,e,r)}return{interfaces:Array.from(e.values()),unions:Array.from(r.values())}}function KN(t,e,r){return{name:t.name,optional:t.optional,astNodes:t.astNodes,type:el(t.type,void 0,e,r)}}function el(t,e,r,n){if(Vm(t))return{elementType:el(t.elementType,e,r,n)};if(fs(t))return{referenceType:el(t.referenceType,void 0,r,n)};if(Jv(t))return{types:t.types.map(i=>el(i,e,r,n))};if(HN(t))return{string:t.string};if(jN(t))return{primitive:t.primitive,regex:t.regex};if(Xm(t)){let i=r.get(t.value)||n.get(t.value);return i?(e&&e.subTypes.add(i),{value:i}):{primitive:"unknown"}}else throw new Error("Invalid property type")}function Jm(t,e){let r=tl(t),n=tl(e);for(let i of n)WN(r,i)||r.push(i);return r.length===1?r[0]:{types:r}}function WN(t,e){return t.some(r=>Ym(r,e))}function Ym(t,e){return Vm(t)&&Vm(e)?Ym(t.elementType,e.elementType):fs(t)&&fs(e)?Ym(t.referenceType,e.referenceType):Xm(t)&&Xm(e)?t.value===e.value:!1}function tl(t){return Jv(t)?t.types.flatMap(e=>tl(e)):[t]}function Zv(t){let e=t.validation.ValidationRegistry,r=t.validation.LangiumGrammarValidator,n={Action:[r.checkAssignmentReservedName],AbstractRule:r.checkRuleName,Assignment:[r.checkAssignmentWithFeatureName,r.checkAssignmentToFragmentRule,r.checkAssignmentTypes,r.checkAssignmentReservedName],ParserRule:[r.checkParserRuleDataType,r.checkRuleParametersUsed,r.checkParserRuleReservedName],TerminalRule:[r.checkTerminalRuleReturnType,r.checkHiddenTerminalRule,r.checkEmptyTerminalRule],InferredType:r.checkTypeReservedName,Keyword:r.checkKeyword,UnorderedGroup:r.checkUnorderedGroup,Grammar:[r.checkGrammarName,r.checkEntryGrammarRule,r.checkUniqueRuleName,r.checkUniqueTypeName,r.checkUniqueImportedRules,r.checkDuplicateImportedGrammar,r.checkGrammarHiddenTokens,r.checkGrammarForUnusedRules,r.checkGrammarTypeInfer,r.checkClashingTerminalNames],GrammarImport:r.checkPackageImport,CharacterRange:r.checkInvalidCharacterRange,Interface:[r.checkTypeReservedName,r.checkInterfacePropertyTypes],Type:[r.checkTypeReservedName],TypeAttribute:r.checkTypeReservedName,RuleCall:[r.checkUsedHiddenTerminalRule,r.checkUsedFragmentTerminalRule,r.checkRuleCallParameters],TerminalRuleCall:r.checkUsedHiddenTerminalRule,CrossReference:[r.checkCrossReferenceSyntax,r.checkCrossRefNameAssignment,r.checkCrossRefTerminalType,r.checkCrossRefType,r.checkCrossReferenceToTypeUnion],SimpleType:r.checkFragmentsInTypes,ReferenceType:r.checkReferenceTypeUnion,RegexToken:[r.checkInvalidRegexFlags,r.checkDirectlyUsedRegexFlags]};e.register(n,r)}var we;(function(t){t.GrammarNameUppercase="grammar-name-uppercase",t.RuleNameUppercase="rule-name-uppercase",t.HiddenGrammarTokens="hidden-grammar-tokens",t.UseRegexTokens="use-regex-tokens",t.EntryRuleTokenSyntax="entry-rule-token-syntax",t.CrossRefTokenSyntax="cross-ref-token-syntax",t.UnnecessaryFileExtension="unnecessary-file-extension",t.InvalidReturns="invalid-returns",t.InvalidInfers="invalid-infers",t.MissingInfer="missing-infer",t.MissingReturns="missing-returns",t.SuperfluousInfer="superfluous-infer",t.OptionalUnorderedGroup="optional-unordered-group"})(we=we||(we={}));var su=class{constructor(e){this.references=e.references.References,this.documents=e.shared.workspace.LangiumDocuments}checkGrammarName(e,r){if(e.name){let n=e.name.substring(0,1);n.toUpperCase()!==n&&r("warning","Grammar name should start with an upper case letter.",{node:e,property:"name",data:Lr(we.GrammarNameUppercase)})}}checkEntryGrammarRule(e,r){if(e.isDeclared&&!e.name)return;let n=e.rules.filter(i=>K(i)&&i.entry);if(e.isDeclared&&n.length===0){let i=e.rules.find(o=>K(o)&&!Mr(o));i?r("error","The grammar is missing an entry parser rule. This rule can be an entry one.",{node:i,property:"name",data:Lr(we.EntryRuleTokenSyntax)}):r("error","This grammar is missing an entry parser rule.",{node:e,property:"name"})}else!e.isDeclared&&n.length>=1?n.forEach(i=>r("error","Cannot declare entry rules for unnamed grammars.",{node:i,property:"name"})):n.length>1?n.forEach(i=>r("error","The entry rule has to be unique.",{node:i,property:"name"})):n.length===1&&Mr(n[0])&&r("error","The entry rule cannot be a data type rule.",{node:n[0],property:"name"})}checkUniqueRuleName(e,r){let n=i=>ie(i.rules).filter(o=>!rl(o));this.checkUniqueName(e,r,n,"rule")}checkUniqueTypeName(e,r){let n=i=>ie(i.types).concat(i.interfaces);this.checkUniqueName(e,r,n,"type")}checkUniqueName(e,r,n,i){let o=new Le;n(e).forEach(l=>o.add(l.name,l));for(let[,l]of o.entriesGroupedByKey())l.length>1&&l.forEach(c=>{r("error",`A ${i}'s name has to be unique.`,{node:c,property:"name"})});let s=new Set,a=nl(this.documents,e);for(let l of a)n(l).forEach(c=>s.add(c.name));for(let l of o.keys())s.has(l)&&o.get(l).forEach(u=>{r("error",`A ${i} with the name '${u.name}' already exists in an imported grammar.`,{node:u,property:"name"})})}checkDuplicateImportedGrammar(e,r){let n=new Le;for(let i of e.imports){let o=ii(this.documents,i);o&&n.add(o,i)}for(let[,i]of n.entriesGroupedByKey())i.length>1&&i.forEach((o,s)=>{s>0&&r("warning","The grammar is already being directly imported.",{node:o,tags:[ou.DiagnosticTag.Unnecessary]})})}checkUniqueImportedRules(e,r){let n=new Map;for(let o of e.imports){let s=nl(this.documents,o);n.set(o,s)}let i=new Le;for(let o of e.imports){let s=n.get(o);for(let a of e.imports){if(o===a)continue;let l=n.get(a),c=this.getDuplicateExportedRules(s,l);for(let u of c)i.add(o,u)}}for(let o of e.imports){let s=i.get(o);s.length>0&&r("error","Some rules exported by this grammar are also included in other imports: "+ie(s).distinct().join(", "),{node:o,property:"path"})}}getDuplicateExportedRules(e,r){let i=e.filter(a=>!r.includes(a)).flatMap(a=>a.rules),o=r.flatMap(a=>a.rules),s=new Set;for(let a of i){let l=a.name;for(let c of o){let u=c.name;l===u&&s.add(c.name)}}return s}checkGrammarTypeInfer(e,r){var n,i,o;let s=new Set;for(let l of e.types)s.add(l.name);for(let l of e.interfaces)s.add(l.name);for(let l of nl(this.documents,e))l.types.forEach(c=>s.add(c.name)),l.interfaces.forEach(c=>s.add(c.name));for(let l of e.rules.filter(K)){if(rl(l))continue;let c=Mr(l),u=!l.returnType&&!l.dataType,f=En(l);if(!c&&f&&s.has(f)===u){if((u||((n=l.returnType)===null||n===void 0?void 0:n.ref)!==void 0)&&l.inferredType===void 0)r("error",a(f,u),{node:l,property:"name",data:Lr(we.MissingReturns)});else if(u||((i=l.returnType)===null||i===void 0?void 0:i.ref)!==void 0){let m=zr(l.inferredType.$cstNode,"infers");r("error",a(f,u),{node:l.inferredType,property:"name",data:{code:we.InvalidInfers,actionSegment:nr(m)}})}}else if(c&&u){let m=zr(l.$cstNode,"infer");r("error","Data type rules cannot infer a type.",{node:l,property:"inferredType",data:{code:we.InvalidInfers,actionSegment:nr(m)}})}}for(let l of Qe(e).filter(Ne)){let c=this.getActionType(l);if(c){let u=!!l.inferredType,f=En(l);if(l.type&&f&&s.has(f)===u){let m=u?zr(l.$cstNode,"infer"):zr(l.$cstNode,"{");r("error",a(f,u),{node:l,property:"type",data:{code:u?we.SuperfluousInfer:we.MissingInfer,actionSegment:nr(m)}})}else if(c&&f&&s.has(f)&&u&&l.$cstNode){let m=Yt((o=l.inferredType)===null||o===void 0?void 0:o.$cstNode,"name"),T=zr(l.$cstNode,"{");m&&T&&r("error",`${f} is a declared type and cannot be redefined.`,{node:l,property:"type",data:{code:we.SuperfluousInfer,actionRange:{start:T.range.end,end:m.range.start}}})}}}function a(l,c){return c?`The type '${l}' is already explicitly declared and cannot be inferred.`:`The type '${l}' is not explicitly declared and must be inferred.`}}getActionType(e){var r;if(e.type)return(r=e.type)===null||r===void 0?void 0:r.ref;if(e.inferredType)return e.inferredType}checkGrammarHiddenTokens(e,r){e.definesHiddenTokens&&r("error","Hidden terminals are declared at the terminal definition.",{node:e,property:"definesHiddenTokens",data:Lr(we.HiddenGrammarTokens)})}checkHiddenTerminalRule(e,r){e.hidden&&e.fragment&&r("error","Cannot use terminal fragments as hidden tokens.",{node:e,property:"hidden"})}checkEmptyTerminalRule(e,r){try{let n=Xr(e);new RegExp(n).test("")&&r("error","This terminal could match an empty string.",{node:e,property:"name"})}catch{}}checkInvalidRegexFlags(e,r){let n=e.regex;if(n){let i=n.lastIndexOf("/"),o=n.substring(i+1),s="gmy",l=s+"isu",c=new Set,u=new Set;for(let m=0;m<o.length;m++){let T=o.charAt(m);l.includes(T)?s.includes(T)&&u.add(T):c.add(T)}let f=this.getFlagRange(e);f&&(c.size>0?r("error",`'${Array.from(c).join("")}' ${c.size>1?"are":"is"} not valid regular expression flag${c.size>1?"s":""}.`,{node:e,range:f}):u.size>0&&r("warning",`'${Array.from(u).join("")}' regular expression flag${u.size>1?"s":""} will be ignored by Langium.`,{node:e,range:f}))}}checkDirectlyUsedRegexFlags(e,r){if(!Ae(e.$container)){let n=this.getFlagRange(e);n&&r("warning","Regular expression flags are only applied if the terminal is not a composition",{node:e,range:n})}}getFlagRange(e){let r=Yt(e.$cstNode,"regex");if(!r||!e.regex)return;let n=e.regex,i=n.lastIndexOf("/")+1;return{start:{line:r.range.end.line,character:r.range.end.character-n.length+i},end:r.range.end}}checkUsedHiddenTerminalRule(e,r){let n=Pe(e,i=>Ae(i)||K(i));if(n){if("hidden"in n&&n.hidden)return;let i=e.rule.ref;Ae(i)&&i.hidden&&r("error","Cannot use hidden terminal in non-hidden rule",{node:e,property:"rule"})}}checkUsedFragmentTerminalRule(e,r){let n=e.rule.ref;Ae(n)&&n.fragment&&Pe(e,K)&&r("error","Cannot use terminal fragments as part of parser rules.",{node:e,property:"rule"})}checkCrossReferenceSyntax(e,r){e.deprecatedSyntax&&r("error","'|' is deprecated. Please, use ':' instead.",{node:e,property:"deprecatedSyntax",data:Lr(we.CrossRefTokenSyntax)})}checkPackageImport(e,r){ii(this.documents,e)===void 0?r("error","Import cannot be resolved.",{node:e,property:"path"}):e.path.endsWith(".langium")&&r("warning","Imports do not need file extensions.",{node:e,property:"path",data:Lr(we.UnnecessaryFileExtension)})}checkInvalidCharacterRange(e,r){if(e.right){let n="Character ranges cannot use more than one character",i=!1;e.left.value.length>1&&(i=!0,r("error",n,{node:e.left,property:"value"})),e.right.value.length>1&&(i=!0,r("error",n,{node:e.right,property:"value"})),i||r("hint","Consider using regex instead of character ranges",{node:e,data:Lr(we.UseRegexTokens)})}}checkGrammarForUnusedRules(e,r){let n=ds(e,!0);for(let i of e.rules)Ae(i)&&i.hidden||rl(i)||n.has(i)||r("hint","This rule is declared but never referenced.",{node:i,property:"name",tags:[ou.DiagnosticTag.Unnecessary]})}checkClashingTerminalNames(e,r){let n=new Le,i=new Set;for(let c of e.rules)Ae(c)&&c.name&&n.add(c.name,c),K(c)&&Qe(c).filter(dt).forEach(f=>i.add(f.value));let o=new Le,s=new Le;for(let c of e.imports){let u=nl(this.documents,c);for(let f of u)for(let m of f.rules)Ae(m)&&m.name?o.add(m.name,c):K(m)&&m.name&&Qe(m).filter(dt).forEach(S=>s.add(S.value,c))}for(let c of n.values())if(i.has(c.name))r("error","Terminal name clashes with existing keyword.",{node:c,property:"name"});else if(s.has(c.name)){let u=s.get(c.name);r("error",`Terminal name clashes with imported keyword from "${u[0].path}".`,{node:c,property:"name"})}let a=new Le;for(let c of i)for(let u of o.get(c))a.add(u,c);for(let[c,u]of a.entriesGroupedByKey())u.length>0&&r("error",`Imported terminals (${u.join(", ")}) clash with locally defined keywords.`,{node:c,property:"path"});let l=new Le;for(let[c,u]of o.entriesGroupedByKey()){let f=s.get(c);f.length>0&&u.filter(m=>!f.includes(m)).forEach(m=>l.add(m,c))}for(let[c,u]of l.entriesGroupedByKey())u.length>0&&r("error",`Imported terminals (${u.join(", ")}) clash with imported keywords.`,{node:c,property:"path"})}checkRuleName(e,r){if(e.name&&!rl(e)){let n=e.name.substring(0,1);n.toUpperCase()!==n&&r("warning","Rule name should start with an upper case letter.",{node:e,property:"name",data:Lr(we.RuleNameUppercase)})}}checkTypeReservedName(e,r){this.checkReservedName(e,"name",r)}checkAssignmentReservedName(e,r){this.checkReservedName(e,"feature",r)}checkParserRuleReservedName(e,r){e.inferredType||this.checkReservedName(e,"name",r)}checkReservedName(e,r,n){let i=e[r];typeof i=="string"&&BN.has(i)&&n("error",`'${i}' is a reserved name of the JavaScript runtime.`,{node:e,property:r})}checkKeyword(e,r){Pe(e,K)&&(e.value.length===0?r("error","Keywords cannot be empty.",{node:e}):e.value.trim().length===0?r("error","Keywords cannot only consist of whitespace characters.",{node:e}):/\s/g.test(e.value)&&r("warning","Keywords should not contain whitespace characters.",{node:e}))}checkUnorderedGroup(e,r){e.elements.forEach(n=>{Vr(n.cardinality)&&r("error","Optional elements in Unordered groups are currently not supported",{node:n,data:Lr(we.OptionalUnorderedGroup)})})}checkRuleParametersUsed(e,r){let n=e.parameters;if(n.length>0){let i=Qe(e).filter(ts);for(let o of n)i.some(s=>s.parameter.ref===o)||r("hint",`Parameter '${o.name}' is unused.`,{node:o,tags:[ou.DiagnosticTag.Unnecessary]})}}checkParserRuleDataType(e,r){if(rl(e))return;let n=tR(e),i=Mr(e);!n&&i?r("error","This parser rule does not create an object. Add a primitive return type or an action to the start of the rule to force object instantiation.",{node:e,property:"name"}):n&&!i&&r("error","Normal parser rules are not allowed to return a primitive value. Use a datatype rule for that.",{node:e,property:e.dataType?"dataType":"returnType"})}checkAssignmentToFragmentRule(e,r){e.terminal&&$e(e.terminal)&&K(e.terminal.rule.ref)&&e.terminal.rule.ref.fragment&&r("error",`Cannot use fragment rule '${e.terminal.rule.ref.name}' for assignment of property '${e.feature}'.`,{node:e,property:"terminal"})}checkAssignmentTypes(e,r){if(!e.terminal)return;let n;Qe(e.terminal).map(o=>Vt(o)?"ref":"other").find(o=>n?o!==n:(n=o,!1))&&r("error",this.createMixedTypeError(e.feature),{node:e,property:"terminal"})}checkInterfacePropertyTypes(e,r){for(let n of e.attributes)if(n.type){let i=vo(n.type),o=tl(i),s=!1,a=!1;for(let l of o)fs(l)?s=!0:fs(l)||(a=!0);s&&a&&r("error",this.createMixedTypeError(n.name),{node:n,property:"type"})}}createMixedTypeError(e){return`Mixing a cross-reference with other types is not supported. Consider splitting property "${e}" into two or more different properties.`}checkTerminalRuleReturnType(e,r){var n;!((n=e.type)===null||n===void 0)&&n.name&&!us(e.type.name)&&r("error","Terminal rules can only return primitive types like 'string', 'boolean', 'number', 'Date' or 'bigint'.",{node:e.type,property:"name"})}checkRuleCallParameters(e,r){let n=e.rule.ref;if(K(n)){let i=n.parameters.length,o=e.arguments.length;i!==o&&r("error",`Rule '${n.name}' expects ${i} arguments, but got ${o}.`,{node:e})}else Ae(n)&&e.arguments.length>0&&r("error","Terminal rules do not accept any arguments",{node:e})}checkCrossRefNameAssignment(e,r){!e.terminal&&e.type.ref&&!il(e.type.ref)&&r("error","Cannot infer terminal or data type rule for cross-reference.",{node:e,property:"type"})}checkCrossRefTerminalType(e,r){var n;let i=e.terminal;if($e(i)){let o=i.rule.ref;K(o)&&!Mr(o)?r("error","Parser rules cannot be used for cross-references.",{node:i,property:"rule"}):K(o)&&!rR(o)?r("error","Data type rules for cross-references must be of type string.",{node:i,property:"rule"}):Ae(o)&&(!((n=o.type)===null||n===void 0)&&n.name)&&o.type.name!=="string"&&r("error","Terminal rules for cross-references must be of type string.",{node:i,property:"rule"})}}checkCrossRefType(e,r){let n=this.checkReferenceToRuleButNotType(e?.type);n&&r("error",n,{node:e,property:"type"})}checkCrossReferenceToTypeUnion(e,r){if(Mt(e.type.ref)&&Br(e.type.ref.type)){let n=eR(e.type.ref.type);n.length>0&&r("error",`Cross-reference on type union is only valid if all alternatives are AST nodes. ${n.join(", ")} ${n.length>1?"are":"is"} not ${n.length>1?"":"an "}AST node${n.length>1?"s":""}.`,{node:e,property:"type"})}}checkFragmentsInTypes(e,r){var n,i;K((n=e.typeRef)===null||n===void 0?void 0:n.ref)&&(!((i=e.typeRef)===null||i===void 0)&&i.ref.fragment)&&r("error","Cannot use rule fragments in types.",{node:e,property:"typeRef"})}checkReferenceTypeUnion(e,r){ir(e.referenceType)||r("error","Only direct rule references are allowed in reference types.",{node:e,property:"referenceType"})}checkReferenceToRuleButNotType(e){if(e&&K(e.ref)&&!Mr(e.ref)&&(e.ref.returnType||e.ref.inferredType)){let r=En(e.ref);if(r)return`Use the rule type '${r}' instead of the typed rule name '${e.ref.name}' for cross-references.`}}checkAssignmentWithFeatureName(e,r){e.feature==="name"&&Vt(e.terminal)&&r("warning",'The "name" property is not recommended for cross-references.',{node:e,property:"feature"})}};function rl(t){return!t.definition||!t.definition.$cstNode||t.definition.$cstNode.length===0}var BN=new Set(["Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array","BigInt64Array","BigUint64Array","Map","Set","WeakMap","WeakSet","Error","AggregateError","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError","BigInt","RegExp","Number","Object","Function","Symbol","String","Math","NaN","Infinity","isFinite","isNaN","Buffer","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","globalThis","decodeURIComponent","decodeURI","encodeURIComponent","encodeURI","parseInt","parseFloat","Promise","Generator","GeneratorFunction","AsyncFunction","AsyncGenerator","AsyncGeneratorFunction","Reflect","Proxy","Date","Intl","eval","undefined"]);function eR(t){let e=[];return t.types.forEach(r=>{var n;ir(r)&&(!((n=r.typeRef)===null||n===void 0)&&n.ref?Mt(r.typeRef.ref)&&(Br(r.typeRef.ref.type)?e.push(...eR(r.typeRef.ref.type)):e.push(r.typeRef.ref.name)):r.stringType?e.push(`"${r.stringType}"`):r.primitiveType&&e.push(r.primitiveType))}),Array.from(new Set(e))}function Vr(t,e){return t==="?"||t==="*"||Ft(e)&&!!e.guardCondition}function nR(t){return t==="*"||t==="+"}function Mr(t){return iR(t,new Set)}function iR(t,e){if(e.has(t))return!0;e.add(t);for(let r of Qe(t))if($e(r)){if(!r.rule.ref||K(r.rule.ref)&&!iR(r.rule.ref,e))return!1}else{if(xe(r))return!1;if(Ne(r))return!1}return!!t.definition}function tR(t){var e;let r=(e=t.returnType)===null||e===void 0?void 0:e.ref;return t.dataType!==void 0||Mt(r)&&zN(r)}function zN(t){return Zm(t.type,new Set)}function Zm(t,e){if(e.has(t))return!0;if(e.add(t),po(t))return!1;if(mo(t))return!1;if(Br(t))return t.types.every(r=>Zm(r,e));if(ir(t)){if(t.primitiveType!==void 0)return!0;if(t.stringType!==void 0)return!0;if(t.typeRef!==void 0){let r=t.typeRef.ref;return Mt(r)?Zm(r.type,e):!1}else return!1}else return!1}function rR(t){return ol(t,new Set)}function ol(t,e){var r,n;if(e.has(t))return!0;if(e.add(t),K(t)){if(t.dataType)return t.dataType==="string";if(!((r=t.returnType)===null||r===void 0)&&r.ref)return ol(t.returnType.ref,e)}else{if(Mt(t))return ol(t.type,e);if(po(t))return!1;if(mo(t))return!1;if(Br(t))return t.types.every(i=>ol(i,e));if(ir(t)){if(t.primitiveType==="string")return!0;if(t.stringType)return!0;if(!((n=t.typeRef)===null||n===void 0)&&n.ref)return ol(t.typeRef.ref,e)}}return!1}function th(t){let e=t.$container;if(Ft(e)){let r=e.elements,n=r.indexOf(t);for(let i=n-1;i>=0;i--){let o=r[i];if(Ne(o))return o;{let s=Qe(r[i]).find(Ne);if(s)return s}}}if(Qo(e))return th(e)}function pn(t){var e;if(K(t))return Mr(t)?t.name:(e=ms(t))!==null&&e!==void 0?e:t.name;if(br(t)||Mt(t)||rs(t))return t.name;if(Ne(t)){let r=hs(t);if(r)return r}else if(es(t))return t.name;throw new Xc("Cannot get name of Unknown Type",t.$cstNode)}function En(t){if(t)try{return pn(t)}catch{return}}function ms(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){let e=t.returnType.ref;if(e){if(K(e))return e.name;if(br(e)||Mt(e))return e.name}}}function hs(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return pn(t.type.ref)}function Ro(t){var e,r,n;return Ae(t)?(r=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&r!==void 0?r:"string":Mr(t)?t.name:(n=ms(t))!==null&&n!==void 0?n:t.name}function Xr(t){let e={s:!1,i:!1,u:!1},r=ys(t.definition,e),n=Object.entries(e).filter(([,i])=>i).map(([i])=>i).join("");return new RegExp(r,n)}var rh=/[\s\S]/.source;function ys(t,e){if(pv(t))return VN(t);if(hv(t))return XN(t);if(jc(t))return QN(t);if(Hc(t)){let r=t.rule.ref;if(!r)throw new Error("Missing rule reference.");return oi(ys(r.definition),{cardinality:t.cardinality,lookahead:t.lookahead})}else{if(lv(t))return JN(t);if(vv(t))return YN(t);if(uv(t)){let r=t.regex.lastIndexOf("/"),n=t.regex.substring(1,r),i=t.regex.substring(r+1);return e&&(e.i=i.includes("i"),e.s=i.includes("s"),e.u=i.includes("u")),oi(n,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}else{if(xv(t))return oi(rh,{cardinality:t.cardinality,lookahead:t.lookahead});throw new Error(`Invalid terminal element: ${t?.$type}`)}}}function VN(t){return oi(t.elements.map(e=>ys(e)).join("|"),{cardinality:t.cardinality,lookahead:t.lookahead})}function XN(t){return oi(t.elements.map(e=>ys(e)).join(""),{cardinality:t.cardinality,lookahead:t.lookahead})}function YN(t){return oi(`${rh}*?${ys(t.terminal)}`,{cardinality:t.cardinality,lookahead:t.lookahead})}function JN(t){return oi(`(?!${ys(t.terminal)})${rh}*?`,{cardinality:t.cardinality,lookahead:t.lookahead})}function QN(t){return t.right?oi(`[${Qm(t.left)}-${Qm(t.right)}]`,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1}):oi(Qm(t.left),{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}function Qm(t){return ri(t.value)}function oi(t,e){var r;return(e.wrap!==!1||e.lookahead)&&(t=`(${(r=e.lookahead)!==null&&r!==void 0?r:""}${t})`),e.cardinality?`${t}${e.cardinality}`:t}function nh(t){if(t.path===void 0||t.path.length===0)return;let e=ve.dirname(ne(t).uri),r=t.path;return r.endsWith(".langium")||(r+=".langium"),ve.resolvePath(e,r)}function ii(t,e){let r=nh(e);try{if(r){let i=t.getOrCreateDocument(r).parseResult.value;if(Zo(i))return i}}catch{}}function nl(t,e){if(qc(e)){let r=ii(t,e);if(r){let n=eh(t,r);return n.push(r),n}return[]}else return eh(t,e)}function eh(t,e,r=e,n=new Set,i=new Set){let o=ne(e);if(r!==e&&i.add(e),!n.has(o.uri)){n.add(o.uri);for(let s of e.imports){let a=ii(t,s);a&&eh(t,a,r,n,i)}}return Array.from(i)}function ps(t){return xe(t)?[t]:Pr(t)||Ft(t)||Ir(t)?t.elements.flatMap(e=>ps(e)):$e(t)&&t.rule.ref?ps(t.rule.ref.definition):[]}var ZN=["string","number","boolean","Date","bigint"];function us(t){return ZN.includes(t)}var ih=class{constructor(e,r){this.context=e,this.root=r}getTypes(){let e={name:this.root.name,properties:this.root.properties,ruleCalls:this.root.ruleCalls,super:[]};return this.root.children.length===0?[{alt:e,next:[]}]:this.applyNext(this.root,{alt:e,next:this.root.children})}applyNext(e,r){let n=this.splitType(r.alt,r.next.length),i=[];for(let o=0;o<r.next.length;o++){let s=n[o],a=r.next[o];a.actionWithAssignment&&i.push({alt:oR(s),next:[]}),a.name!==void 0&&a.name!==s.name&&(a.actionWithAssignment?(s.properties=[],s.ruleCalls=[],s.super=[e.name],s.name=a.name):(s.super=[s.name,...s.ruleCalls],s.properties=[],s.ruleCalls=[],s.name=a.name)),s.properties.push(...a.properties),s.ruleCalls.push(...a.ruleCalls);let l={alt:s,next:a.children};l.next.length===0?(l.alt.super=l.alt.super.filter(c=>c!==l.alt.name),i.push(l)):i.push(...this.applyNext(e,l))}return uR(i)}splitType(e,r){let n=[];for(let i=0;i<r;i++)n.push(oR(e));return n}getSuperTypes(e){let r=new Set;return this.collectSuperTypes(e,e,r),Array.from(r)}collectSuperTypes(e,r,n){if(r.ruleCalls.length>0){for(let i of r.ruleCalls)n.add(i);return}for(let i of r.parents)e.name===void 0?this.collectSuperTypes(i,i,n):i.name!==void 0&&i.name!==e.name?n.add(i.name):this.collectSuperTypes(e,i,n);r.parents.length===0&&r.name&&n.add(r.name)}connect(e,r){return r.parents.push(e),e.children.push(r),r}merge(...e){if(e.length===1)return e[0];if(e.length===0)throw new Error("No parts to merge");let r=xo();r.parents=e;for(let n of e)n.children.push(r);return r}hasLeafNode(e){return this.partHasLeafNode(e)}partHasLeafNode(e,r){return e.children.some(n=>n!==r)?!0:e.name?!1:e.parents.some(n=>this.partHasLeafNode(n,e))}};function e$(t){return{name:t.name,children:[],parents:[],actionWithAssignment:t.actionWithAssignment,ruleCalls:[...t.ruleCalls],properties:t.properties.map(sR)}}function oR(t){return{name:t.name,super:t.super,ruleCalls:t.ruleCalls,properties:t.properties.map(e=>sR(e))}}function sR(t){return{name:t.name,optional:t.optional,type:t.type,astNodes:t.astNodes}}function aR(t,e,r){let n=[],i={fragments:new Map};for(let l of t)n.push(...lR(i,l));let o=s$(n),s=a$(o),a=l$(o,s,r);for(let l of e){let c=t$(l);a.unions.push({name:l.name,declared:!1,type:c,subTypes:new Set,superTypes:new Set,dataType:l.dataType})}return a}function t$(t){if(t.dataType&&t.dataType!=="string")return{primitive:t.dataType};let e=!1,r=()=>(e=!0,{primitive:"unknown"}),n=oh(t.definition,r);return e?{primitive:"string"}:n}function oh(t,e){var r,n,i;if(t.cardinality)return e();if(Pr(t))return{types:t.elements.map(o=>oh(o,e))};if(Ft(t)||Ir(t))return t.elements.length!==1?e():oh(t.elements[0],e);if($e(t)){let o=(r=t.rule)===null||r===void 0?void 0:r.ref;return o?Ae(o)?{primitive:(i=(n=o.type)===null||n===void 0?void 0:n.name)!==null&&i!==void 0?i:"string",regex:Xr(o).toString()}:{value:o.name}:e()}else if(dt(t))return{string:t.value};return e()}function lR(t,e){let r=xo(e),n=new ih(t,r);return e.definition&&sh(n,n.root,e.definition),n.getTypes()}function xo(t){return{name:K(t)||Ne(t)?En(t):t,properties:[],ruleCalls:[],children:[],parents:[],actionWithAssignment:!1}}function sh(t,e,r){let n=Vr(r.cardinality,r);if(Pr(r)){let i=[];n&&i.push(t.connect(e,xo()));for(let o of r.elements){let s=t.connect(e,xo());i.push(sh(t,s,o))}return t.merge(...i)}else if(Ft(r)||Ir(r)){let i=t.connect(e,xo()),o;n&&(o=t.connect(e,xo()));for(let s of r.elements)i=sh(t,i,s);return o?t.merge(o,i):i}else{if(Ne(r))return r$(t,e,r);xe(r)?n$(e,r):$e(r)&&i$(t,e,r)}return e}function r$(t,e,r){var n;if(!t.hasLeafNode(e)){let o=e$(e);t.connect(e,o)}let i=t.connect(e,xo(r));if(r.type){let o=(n=r.type)===null||n===void 0?void 0:n.ref;o&&Xa(o)&&(i.name=o.name)}return r.feature&&r.operator&&(i.actionWithAssignment=!0,i.properties.push({name:r.feature,optional:!1,type:bo(r.operator==="+=",!1,t.root.ruleCalls.length!==0?t.root.ruleCalls:t.getSuperTypes(i)),astNodes:new Set([r])})),i}function n$(t,e){let r={types:new Set,reference:!1};cR(e.terminal,r);let n=bo(e.operator==="+=",r.reference,e.operator==="?="?["boolean"]:Array.from(r.types));t.properties.push({name:e.feature,optional:Vr(e.cardinality),type:n,astNodes:new Set([e])})}function cR(t,e){if(Pr(t)||Ir(t)||Ft(t))for(let r of t.elements)cR(r,e);else if(dt(t))e.types.add(`'${t.value}'`);else if($e(t)&&t.rule.ref)e.types.add(Ro(t.rule.ref));else if(Vt(t)&&t.type.ref){let r=En(t.type.ref);r&&e.types.add(r),e.reference=!0}}function i$(t,e,r){let n=r.rule.ref;if(K(n)&&n.fragment){let i=o$(n,t.context);Vr(r.cardinality)?e.properties.push(...i.map(o=>Object.assign(Object.assign({},o),{optional:!0}))):e.properties.push(...i)}else K(n)&&e.ruleCalls.push(Ro(n))}function o$(t,e){let r=e.fragments.get(t);if(r)return r;let n=[];e.fragments.set(t,n);let i=En(t),o=lR(e,t).filter(s=>s.alt.name===i);return n.push(...o.flatMap(s=>s.alt.properties)),n}function s$(t){let e=new Map,r=[],n=uR(t).map(i=>i.alt);for(let i of n){let o={name:i.name,properties:i.properties,superTypes:new Set(i.super),subTypes:new Set,declared:!1,abstract:!1};e.set(o.name,o),i.ruleCalls.length>0&&(r.push(i),i.ruleCalls.forEach(s=>{s!==o.name&&o.subTypes.add(s)}))}for(let i of r)for(let o of i.ruleCalls){let s=e.get(o);s&&s.name!==i.name&&s.superTypes.add(i.name)}return Array.from(e.values())}function uR(t){let e=t.reduce((n,i)=>n.add(i.alt.name,i),new Le),r=[];for(let[n,i]of e.entriesGroupedByKey()){let o=[],s=new Set,a={alt:{name:n,properties:o,ruleCalls:[],super:[]},next:[]};for(let l of i){let c=l.alt;a.alt.super.push(...c.super),a.next.push(...l.next);let u=c.properties;for(let f of u){let m=o.find(T=>T.name===f.name);m?(m.type=Jm(m.type,f.type),f.astNodes.forEach(T=>m.astNodes.add(T))):o.push(Object.assign({},f))}c.ruleCalls.forEach(f=>s.add(f))}for(let l of i){let c=l.alt;if(c.ruleCalls.length===0)for(let u of o)c.properties.find(f=>f.name===u.name)||(u.optional=!0)}a.alt.ruleCalls=Array.from(s),r.push(a)}return r}function a$(t){let e=new Map(t.map(i=>[i.name,i])),r=[],n=new Le;for(let i of t)for(let o of i.superTypes)n.add(o,i.name);for(let[i,o]of n.entriesGroupedByKey())if(!e.has(i)){let s={declared:!1,name:i,subTypes:new Set,superTypes:new Set,type:bo(!1,!1,o)};r.push(s)}return r}function l$(t,e,r){let n=new Le;for(let a of t)for(let l of a.superTypes)n.add(l,a.name);let i=new Set(r.interfaces.map(a=>a.name)),o={interfaces:[],unions:e},s=new Map(e.map(a=>[a.name,a]));for(let a of t){let l=new Set(n.get(a.name));if(a.properties.length===0&&l.size>0)if(i.has(a.name))a.abstract=!0,o.interfaces.push(a);else{let c=bo(!1,!1,Array.from(l)),u=s.get(a.name);if(u)u.type=Jm(u.type,c);else{let f={name:a.name,declared:!1,subTypes:l,superTypes:a.superTypes,type:c};o.unions.push(f),s.set(a.name,f)}}else o.interfaces.push(a)}for(let a of o.interfaces)a.superTypes=new Set([...a.superTypes].filter(l=>!s.has(l)));return o}function bo(t,e,r){if(t)return{elementType:bo(!1,e,r)};if(e)return{referenceType:bo(!1,!1,r)};if(r.length===1){let n=r[0];return n.startsWith("'")?{string:n.substring(1,n.length-1)}:us(n)?{primitive:n}:{value:n}}else return{types:r.map(n=>bo(!1,!1,[n]))}}function fR(t,e){let r=dR(t,e),n=Yv(r.interfaces,r.types),i=aR(r.parserRules,r.datatypeRules,n);return{astResources:r,inferred:i,declared:n}}function dR(t,e,r=new Set,n={parserRules:[],datatypeRules:[],interfaces:[],types:[]}){Array.isArray(t)||(t=[t]);for(let i of t){let o=ne(i);if(!r.has(o.uri)){r.add(o.uri);for(let s of i.rules)K(s)&&!s.fragment&&(Mr(s)?n.datatypeRules.push(s):n.parserRules.push(s));if(i.interfaces.forEach(s=>n.interfaces.push(s)),i.types.forEach(s=>n.types.push(s)),e){let s=i.imports.map(a=>ii(e,a)).filter(a=>a!==void 0);dR(s,e,r,n)}}}return n}function hR(t,e){let{inferred:r,declared:n,astResources:i}=fR(t,e);return{astResources:i,inferred:pR(n,r),declared:pR(r,n)}}function pR(t,e){var r,n;let i={interfaces:Gv(mR(...t.interfaces,...(r=e?.interfaces)!==null&&r!==void 0?r:[])),unions:mR(...t.unions,...(n=e?.unions)!==null&&n!==void 0?n:[])},o=Qv(i);return c$(o),o}function mR(...t){return Array.from(t.reduce((e,r)=>(e.set(r.name,r),e),new Map).values()).sort((e,r)=>e.name.localeCompare(r.name))}function c$(t){let e=f$(t),r=Array.from(e.values());d$(r),p$(t.interfaces),u$(r)}function u$(t){let e=new Set,r=n=>{if(!e.has(n)){e.add(n),n.typeNames.add(n.name);for(let i of n.subTypes)r(i),i.typeNames.forEach(o=>n.typeNames.add(o))}};t.forEach(r)}function f$({interfaces:t,unions:e}){let r=t.concat(e).reduce((i,o)=>(i.set(o.name,o),i),new Map),n=new Map;for(let i of e)n.set(i,ah(i.type,new Set));for(let[i,o]of n)o&&r.delete(i.name);return r}function ah(t,e){if(e.has(t))return!0;if(e.add(t),It(t))return t.types.every(r=>ah(r,e));if(Dr(t)){let r=t.value;return un(r)?ah(r.type,e):!1}else return Or(t)||kn(t)}function d$(t){for(let e of t)for(let r of e.superTypes)r.subTypes.add(e)}function p$(t){var e;let r=t.reduce((s,a)=>(s.set(a.name,a),s),new Map);for(let s of t){let a=s.properties.flatMap(l=>jv(l.type));for(let l of a)(e=r.get(l))===null||e===void 0||e.containerTypes.add(s)}let n=new Set,i=t.filter(s=>s.subTypes.size===0),o=new Set(i);for(;i.length>0;){let s=i.shift();if(s)for(let a of s.superTypes)dn(a)&&(s.containerTypes.size===0?(n.add(a.name),a.containerTypes.clear()):n.has(a.name)||s.containerTypes.forEach(l=>a.containerTypes.add(l)),o.has(a)||(o.add(a),i.push(a)))}}var m$={languageId:"langium",fileExtensions:[".langium"],caseInsensitive:!1},h$={maxLookahead:3},yR={AstReflection:()=>new Ga},gR={Grammar:()=>zv(),LanguageMetaData:()=>m$,parser:{ParserConfig:()=>h$}};var sl=class{constructor(e,r,n){var i;this.elements=e,this.outerScope=r,this.caseInsensitive=(i=n?.caseInsensitive)!==null&&i!==void 0?i:!1}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){let r=this.caseInsensitive?this.elements.find(n=>n.name.toLowerCase()===e.toLowerCase()):this.elements.find(n=>n.name===e);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}},gs=class{constructor(e,r,n){var i;this.elements=new Map,this.caseInsensitive=(i=n?.caseInsensitive)!==null&&i!==void 0?i:!1;for(let o of e){let s=this.caseInsensitive?o.name.toLowerCase():o.name;this.elements.set(s,o)}this.outerScope=r}getElement(e){let r=this.caseInsensitive?e.toLowerCase():e,n=this.elements.get(r);if(n)return n;if(this.outerScope)return this.outerScope.getElement(e)}getAllElements(){let e=ie(this.elements.values());return this.outerScope&&(e=e.concat(this.outerScope.getAllElements())),e}},TR={getElement(){},getAllElements(){return Jo}};var au=de(Vn(),1);var Ts=class{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,r=au.CancellationToken.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,r)}async computeExportsForNode(e,r,n=Ci,i=au.CancellationToken.None){let o=[];this.exportNode(e,o,r);for(let s of n(e))await Ze(i),this.exportNode(s,o,r);return o}exportNode(e,r,n){let i=this.nameProvider.getName(e);i&&r.push(this.descriptions.createDescription(e,i,n))}async computeLocalScopes(e,r=au.CancellationToken.None){let n=e.parseResult.value,i=new Le;for(let o of Qe(n))await Ze(r),this.processNode(o,e,i);return i}processNode(e,r,n){let i=e.$container;if(i){let o=this.nameProvider.getName(e);o&&n.add(i,this.descriptions.createDescription(e,o,r))}}};var lu=class{constructor(){this.toDispose=[],this.isDisposed=!1}onDispose(e){this.toDispose.push(e)}dispose(){this.throwIfDisposed(),this.clear(),this.isDisposed=!0,this.toDispose.forEach(e=>e.dispose())}throwIfDisposed(){if(this.isDisposed)throw new Error("This cache has already been disposed")}},lh=class extends lu{constructor(){super(...arguments),this.cache=new Map}has(e){return this.throwIfDisposed(),this.cache.has(e)}set(e,r){this.throwIfDisposed(),this.cache.set(e,r)}get(e,r){if(this.throwIfDisposed(),this.cache.has(e))return this.cache.get(e);if(r){let n=r();return this.cache.set(e,n),n}else return}delete(e){return this.throwIfDisposed(),this.cache.delete(e)}clear(){this.throwIfDisposed(),this.cache.clear()}},cu=class extends lu{constructor(e){super(),this.cache=new Map,this.converter=e??(r=>r)}has(e,r){return this.throwIfDisposed(),this.cacheForContext(e).has(r)}set(e,r,n){this.throwIfDisposed(),this.cacheForContext(e).set(r,n)}get(e,r,n){this.throwIfDisposed();let i=this.cacheForContext(e);if(i.has(r))return i.get(r);if(n){let o=n();return i.set(r,o),o}else return}delete(e,r){return this.throwIfDisposed(),this.cacheForContext(e).delete(r)}clear(e){if(this.throwIfDisposed(),e){let r=this.converter(e);this.cache.delete(r)}else this.cache.clear()}cacheForContext(e){let r=this.converter(e),n=this.cache.get(r);return n||(n=new Map,this.cache.set(r,n)),n}};var uu=class extends lh{constructor(e){super(),this.onDispose(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}))}};var vs=class{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager,this.globalScopeCache=new uu(e.shared)}getScope(e){let r=[],n=this.reflection.getReferenceType(e),i=ne(e.container).precomputedScopes;if(i){let s=e.container;do{let a=i.get(s);a.length>0&&r.push(ie(a).filter(l=>this.reflection.isSubtype(l.type,n))),s=s.$container}while(s)}let o=this.getGlobalScope(n,e);for(let s=r.length-1;s>=0;s--)o=this.createScope(r[s],o);return o}createScope(e,r,n){return new sl(ie(e),r,n)}createScopeForNodes(e,r,n){let i=ie(e).map(o=>{let s=this.nameProvider.getName(o);if(s)return this.descriptions.createDescription(o,s)}).nonNullable();return new sl(i,r,n)}getGlobalScope(e,r){return this.globalScopeCache.get(e,()=>new gs(this.indexManager.allElements(e)))}};var fu=class extends vs{constructor(e){super(e),this.langiumDocuments=e.shared.workspace.LangiumDocuments}getScope(e){let r=this.reflection.getReferenceType(e);return r===fo?this.getTypeScope(r,e):super.getScope(e)}getTypeScope(e,r){let n,i=ne(r.container).precomputedScopes,o=Kc(r.container);if(i&&o){let a=i.get(o);a.length>0&&(n=ie(a).filter(l=>l.type===ja||l.type===Ha))}let s=this.getGlobalScope(e,r);return n?this.createScope(n,s):s}getGlobalScope(e,r){let n=Pe(r.container,Zo);if(!n)return TR;let i=new Set;this.gatherImports(n,i);let o=this.indexManager.allElements(e,i);return e===fo&&(o=o.filter(s=>s.type===ja||s.type===Ha)),new gs(o)}gatherImports(e,r){for(let n of e.imports){let i=nh(n);if(i&&!r.has(i.toString())&&(r.add(i.toString()),this.langiumDocuments.hasDocument(i))){let s=this.langiumDocuments.getOrCreateDocument(i).parseResult.value;Zo(s)&&this.gatherImports(s,r)}}}},du=class extends Ts{constructor(e){super(e),this.astNodeLocator=e.workspace.AstNodeLocator}exportNode(e,r,n){var i;if(super.exportNode(e,r,n),K(e)){if(!e.returnType&&!e.dataType){let o=(i=e.inferredType)!==null&&i!==void 0?i:e;r.push(this.createInterfaceDescription(o,o.name,n))}Qe(e).forEach(o=>{if(Ne(o)&&o.inferredType){let s=hs(o);s&&r.push(this.createInterfaceDescription(o,s,n))}})}}processNode(e,r,n){rs(e)||(this.processTypeNode(e,r,n),this.processActionNode(e,r,n),super.processNode(e,r,n))}processTypeNode(e,r,n){var i;let o=e.$container;if(o&&K(e)&&!e.returnType&&!e.dataType){let s=(i=e.inferredType)!==null&&i!==void 0?i:e;n.add(o,this.createInterfaceDescription(s,s.name,r))}}processActionNode(e,r,n){let i=Kc(e);if(i&&Ne(e)&&e.inferredType){let o=hs(e);o&&n.add(i,this.createInterfaceDescription(e,o,r))}}createInterfaceDescription(e,r,n=ne(e)){let i,o=()=>{var s;return i??(i=nr((s=this.nameProvider.getNameNode(e))!==null&&s!==void 0?s:e.$cstNode))};return{node:e,name:r,get nameSegment(){return o()},selectionSegment:nr(e.$cstNode),type:"Interface",documentUri:n.uri,path:this.astNodeLocator.getAstNodePath(e)}}};var Fr=de(Se(),1);var or=de(Se(),1);var pu=class{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,r={},n=or.CancellationToken.None){let i=e.parseResult,o=[];if(await Ze(n),(!r.categories||r.categories.includes("built-in"))&&(this.processLexingErrors(i,o,r),r.stopAfterLexingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===mn.LexingError})||(this.processParsingErrors(i,o,r),r.stopAfterParsingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===mn.ParsingError}))||(this.processLinkingErrors(e,o,r),r.stopAfterLinkingErrors&&o.some(s=>{var a;return((a=s.data)===null||a===void 0?void 0:a.code)===mn.LinkingError}))))return o;try{o.push(...await this.validateAst(i.value,r,n))}catch(s){if(To(s))throw s;console.error("An error occurred during validation:",s)}return await Ze(n),o}processLexingErrors(e,r,n){for(let i of e.lexerErrors){let o={severity:or.DiagnosticSeverity.Error,range:{start:{line:i.line-1,character:i.column-1},end:{line:i.line-1,character:i.column+i.length-1}},message:i.message,data:Lr(mn.LexingError),source:this.getSource()};r.push(o)}}processParsingErrors(e,r,n){for(let i of e.parserErrors){let o;if(isNaN(i.token.startOffset)){if("previousToken"in i){let s=i.previousToken;if(isNaN(s.startOffset))o=or.Range.create(0,0,0,0);else{let a=or.Position.create(s.endLine-1,s.endColumn);o=or.Range.create(a,a)}}}else o=qa(i.token);if(o){let s={severity:or.DiagnosticSeverity.Error,range:o,message:i.message,data:Lr(mn.ParsingError),source:this.getSource()};r.push(s)}}}processLinkingErrors(e,r,n){for(let i of e.references){let o=i.error;if(o){let s={node:o.container,property:o.property,index:o.index,data:{code:mn.LinkingError,containerType:o.container.$type,property:o.property,refText:o.reference.$refText}};r.push(this.toDiagnostic("error",o.message,s))}}}async validateAst(e,r,n=or.CancellationToken.None){let i=[],o=(s,a,l)=>{i.push(this.toDiagnostic(s,a,l))};return await Promise.all(Zn(e).map(async s=>{await Ze(n);let a=this.validationRegistry.getChecks(s.$type,r.categories);for(let l of a)await l(s,o,n)})),i}toDiagnostic(e,r,n){return{message:r,range:y$(n),severity:g$(e),code:n.code,codeDescription:n.codeDescription,tags:n.tags,relatedInformation:n.relatedInformation,data:n.data,source:this.getSource()}}getSource(){return this.metadata.languageId}};function y$(t){if(or.Range.is(t.range))return t.range;let e;return typeof t.property=="string"?e=Yt(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=zr(t.node.$cstNode,t.keyword,t.index)),e??(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}function g$(t){switch(t){case"error":return or.DiagnosticSeverity.Error;case"warning":return or.DiagnosticSeverity.Warning;case"info":return or.DiagnosticSeverity.Information;case"hint":return or.DiagnosticSeverity.Hint;default:throw new Error("Invalid diagnostic severity: "+t)}}var mn;(function(t){t.LexingError="lexing-error",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(mn=mn||(mn={}));var mu=class{constructor(e){this.reflection=e.shared.AstReflection,this.indexManager=e.shared.workspace.IndexManager}getCodeActions(e,r){let n=[],i=o=>o&&n.push(o);for(let o of r.context.diagnostics)this.createCodeActions(o,e,i);return n}createCodeActions(e,r,n){var i;switch((i=e.data)===null||i===void 0?void 0:i.code){case we.GrammarNameUppercase:case we.RuleNameUppercase:n(this.makeUpperCase(e,r));break;case we.HiddenGrammarTokens:n(this.fixHiddenTerminals(e,r));break;case we.UseRegexTokens:n(this.fixRegexTokens(e,r));break;case we.EntryRuleTokenSyntax:n(this.addEntryKeyword(e,r));break;case we.CrossRefTokenSyntax:n(this.fixCrossRefSyntax(e,r));break;case we.UnnecessaryFileExtension:n(this.fixUnnecessaryFileExtension(e,r));break;case we.MissingReturns:n(this.fixMissingReturns(e,r));break;case we.InvalidInfers:case we.InvalidReturns:n(this.fixInvalidReturnsInfers(e,r));break;case we.MissingInfer:n(this.fixMissingInfer(e,r));break;case we.SuperfluousInfer:n(this.fixSuperfluousInfer(e,r));break;case mn.LinkingError:{let o=e.data;o&&o.containerType==="RuleCall"&&o.property==="rule"&&n(this.addNewRule(e,o,r)),o&&this.lookInGlobalScope(e,o,r).forEach(n);break}}}fixMissingReturns(e,r){let n=r.textDocument.getText(e.range);if(n)return{title:`Add explicit return type for parser rule ${n}`,kind:Fr.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:e.range,newText:`${n} returns ${n}`}]}}}}fixInvalidReturnsInfers(e,r){let n=e.data;if(n&&n.actionSegment){let i=r.textDocument.getText(n.actionSegment.range);return{title:`Correct ${i} usage`,kind:Fr.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:n.actionSegment.range,newText:i==="infers"?"returns":"infers"}]}}}}}fixMissingInfer(e,r){let n=e.data;if(n&&n.actionSegment)return{title:"Correct 'infer' usage",kind:Fr.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:{start:n.actionSegment.range.end,end:n.actionSegment.range.end},newText:"infer "}]}}}}fixSuperfluousInfer(e,r){let n=e.data;if(n&&n.actionRange)return{title:"Remove the 'infer' keyword",kind:Fr.CodeActionKind.QuickFix,diagnostics:[e],edit:{changes:{[r.textDocument.uri]:[{range:n.actionRange,newText:""}]}}}}fixUnnecessaryFileExtension(e,r){let n=Object.assign({},e.range.end);n.character-=1;let i=Object.assign({},n);return i.character-=8,{title:"Remove file extension",kind:Fr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:{start:i,end:n},newText:""}]}}}}makeUpperCase(e,r){let n={start:e.range.start,end:{line:e.range.start.line,character:e.range.start.character+1}};return{title:"First letter to upper case",kind:Fr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:n,newText:r.textDocument.getText(n).toUpperCase()}]}}}}addEntryKeyword(e,r){return{title:"Add entry keyword",kind:Fr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:{start:e.range.start,end:e.range.start},newText:"entry "}]}}}}fixRegexTokens(e,r){let n=r.textDocument.offsetAt(e.range.start),i=r.parseResult.value.$cstNode;if(i){let o=xr(i,n),s=Pe(o?.astNode,jc);if(s&&s.right&&s.$cstNode){let a=s.left.value,l=s.right.value;return{title:"Refactor into regular expression",kind:Fr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:s.$cstNode.range,newText:`/[${ri(a)}-${ri(l)}]/`}]}}}}}}fixCrossRefSyntax(e,r){return{title:"Replace '|' with ':'",kind:Fr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:[{range:e.range,newText:":"}]}}}}fixHiddenTerminals(e,r){let n=r.parseResult.value,i=n.hiddenTokens,o=[],s=Yt(n.$cstNode,"definesHiddenTokens");if(s){let a=s.range.start,l=s.offset,c=n.$cstNode.text.indexOf(")",l)+1;o.push({newText:"",range:{start:a,end:r.textDocument.positionAt(c)}})}for(let a of i){let l=a.ref;if(l&&Ae(l)&&!l.hidden&&l.$cstNode){let c=l.$cstNode.range.start;o.push({newText:"hidden ",range:{start:c,end:c}})}}return{title:"Fix hidden terminals",kind:Fr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!0,edit:{changes:{[r.textDocument.uri]:o}}}}addNewRule(e,r,n){let i=n.textDocument.offsetAt(e.range.start),o=n.parseResult.value.$cstNode;if(o){let s=xr(o,i),a=Pe(s?.astNode,K);if(a&&a.$cstNode)return{title:`Add new rule '${r.refText}'`,kind:Fr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!1,edit:{changes:{[n.textDocument.uri]:[{range:{start:a.$cstNode.range.end,end:a.$cstNode.range.end},newText:`

`+r.refText+`:
    /* TODO implement rule */ {infer `+r.refText+"};"}]}}}}}lookInGlobalScope(e,r,n){var i,o;let s={container:{$type:r.containerType},property:r.property,reference:{$refText:r.refText}},a=this.reflection.getReferenceType(s),l=this.indexManager.allElements(a).filter(m=>m.name===r.refText),c=[],u=-1,f=-1;for(let m of l){if(ve.equals(m.documentUri,n.uri))continue;let T=T$(n.uri,m.documentUri),S,A="",N=n.parseResult.value,k=N.imports.find(v=>v.path&&T<v.path);if(k)S=(i=k.$cstNode)===null||i===void 0?void 0:i.range.start;else if(N.imports.length>0){let v=N.imports[N.imports.length-1].$cstNode.range.end;v&&(S={line:v.line+1,character:0})}else N.rules.length>0&&(S=(o=N.rules[0].$cstNode)===null||o===void 0?void 0:o.range.start,A=`
`);S&&((u<0||T.length<f)&&(u=c.length,f=T.length),c.push({title:`Add import to '${T}'`,kind:Fr.CodeActionKind.QuickFix,diagnostics:[e],isPreferred:!1,edit:{changes:{[n.textDocument.uri]:[{range:{start:S,end:S},newText:`import '${T}'
${A}`}]}}}))}return u>=0&&(c[u].isPreferred=!0),c}};function T$(t,e){let r=ve.dirname(t),n=ve.relative(r,e);return!n.startsWith("./")&&!n.startsWith("../")&&(n="./"+n),n.endsWith(".langium")&&(n=n.substring(0,n.length-8)),n}var bR=de(io(),1);var bs=de(Se(),1);function ch(t,e){let r={stacks:t,tokens:e};return v$(r),r.stacks.flat().forEach(i=>{i.property=void 0}),RR(r.stacks).map(i=>i[i.length-1])}function uh(t){let{next:e,cardinalities:r,visited:n,plus:i}=t,o=[],s=e.feature;if(n.has(s))return[];n.add(s);let a,l=s;for(;l.$container;)if(Ft(l.$container)){a=l.$container;break}else if(Qo(l.$container))l=l.$container;else break;if(nR(l.cardinality)){let c=Rs({next:{feature:l,type:e.type,new:!1},cardinalities:r,visited:n,plus:i});for(let u of c)i.add(u.feature);o.push(...c)}if(a){let c=a.elements.indexOf(l);c!==void 0&&c<a.elements.length-1&&o.push(...vR({feature:a,type:e.type,new:!1},c+1,r,n,i)),o.every(u=>Vr(u.feature.cardinality,u.feature)||Vr(r.get(u.feature))||i.has(u.feature))&&o.push(...uh({next:{feature:a,type:e.type,new:!1},cardinalities:r,visited:n,plus:i}))}return o}function al(t){return Ct(t)&&(t={feature:t}),Rs({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}function Rs(t){var e,r,n;let{next:i,cardinalities:o,visited:s,plus:a}=t;if(i===void 0)return[];let{feature:l,type:c}=i;if(Ft(l)){if(s.has(l))return[];s.add(l)}if(Ft(l))return vR(i,0,o,s,a).map(u=>hu(u,l.cardinality,o));if(Pr(l)||Ir(l))return l.elements.flatMap(u=>Rs({next:{feature:u,new:!1,type:c},cardinalities:o,visited:s,plus:a})).map(u=>hu(u,l.cardinality,o));if(xe(l)){let u={feature:l.terminal,new:!1,type:c,property:(e=i.property)!==null&&e!==void 0?e:l.feature};return Rs({next:u,cardinalities:o,visited:s,plus:a}).map(f=>hu(f,l.cardinality,o))}else{if(Ne(l))return uh({next:{feature:l,new:!0,type:pn(l),property:(r=i.property)!==null&&r!==void 0?r:l.feature},cardinalities:o,visited:s,plus:a});if($e(l)&&K(l.rule.ref)){let u=l.rule.ref,f={feature:u.definition,new:!0,type:u.fragment?void 0:(n=ms(u))!==null&&n!==void 0?n:u.name,property:i.property};return Rs({next:f,cardinalities:o,visited:s,plus:a}).map(m=>hu(m,l.cardinality,o))}else return[i]}}function hu(t,e,r){return r.set(t.feature,e),t}function vR(t,e,r,n,i){var o;let s=[],a;for(;e<t.feature.elements.length&&(a={feature:t.feature.elements[e++],new:!1,type:t.type},s.push(...Rs({next:a,cardinalities:r,visited:n,plus:i})),!!Vr((o=a.feature.cardinality)!==null&&o!==void 0?o:r.get(a.feature),a.feature)););return s}function v$(t){for(let e of t.tokens){let r=RR(t.stacks,e);t.stacks=r}}function RR(t,e){let r=[];for(let n of t)r.push(...R$(n,e));return r}function R$(t,e){let r=new Map,n=new Set(t.map(o=>o.feature).filter(x$)),i=[];for(;t.length>0;){let o=t.pop(),s=uh({next:o,cardinalities:r,plus:n,visited:new Set}).filter(a=>e?fh(a.feature,e):!0);for(let a of s)i.push([...t,a]);if(!s.every(a=>Vr(a.feature.cardinality,a.feature)||Vr(r.get(a.feature))))break}return i}function x$(t){if(t.cardinality==="+")return!0;let e=Pe(t,xe);return!!(e&&e.cardinality==="+")}function fh(t,e){if(dt(t))return t.value===e.image;if($e(t))return b$(t.rule.ref,e);if(Vt(t)){let r=yu(t);if(r)return fh(r,e)}return!1}function b$(t,e){return K(t)?al(t.definition).some(n=>fh(n.feature,e)):Ae(t)?Xr(t).test(e.image):!1}function xR(t){let e=Array.from(new Set(t.flatMap(n=>{var i;return(i=n?.triggerCharacters)!==null&&i!==void 0?i:[]}))),r=Array.from(new Set(t.flatMap(n=>{var i;return(i=n?.allCommitCharacters)!==null&&i!==void 0?i:[]})));return{triggerCharacters:e.length>0?e:void 0,allCommitCharacters:r.length>0?r:void 0}}var xs=class{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.lexer=e.parser.Lexer,this.nodeKindProvider=e.shared.lsp.NodeKindProvider,this.fuzzyMatcher=e.shared.lsp.FuzzyMatcher,this.grammarConfig=e.parser.GrammarConfig}async getCompletion(e,r){let n=[],i=this.buildContexts(e,r.position),o=(l,c)=>{let u=this.fillCompletionItem(l,c);u&&n.push(u)},s=l=>dt(l.feature)?l.feature.value:l.feature,a=[];for(let l of i)if(await Promise.all(ie(l.features).distinct(s).exclude(a).map(c=>this.completionFor(l,c,o))),a.push(...l.features),!this.continueCompletion(n))break;return bs.CompletionList.create(this.deduplicateItems(n),!0)}deduplicateItems(e){return ie(e).distinct(r=>`${r.kind}_${r.label}_${r.detail}`).toArray()}findFeaturesAt(e,r){let n=e.getText({start:bs.Position.create(0,0),end:e.positionAt(r)}),i=this.completionParser.parse(n),o=i.tokens;if(i.tokenIndex===0){let l=gu(this.grammar),c=al({feature:l.definition,new:!0,type:ms(l)});return o.length>0?(o.shift(),ch(c.map(u=>[u]),o)):c}let s=[...o].splice(i.tokenIndex);return ch([i.elementStack.map(l=>({feature:l}))],s)}*buildContexts(e,r){var n,i,o,s,a;let l=e.parseResult.value.$cstNode;if(!l)return;let c=e.textDocument,u=c.getText(),f=c.offsetAt(r),m={document:e,textDocument:c,offset:f,position:r},T=this.findDataTypeRuleStart(l,f);if(T){let[g,_]=T,D=(n=xr(l,g))===null||n===void 0?void 0:n.astNode,X=this.findFeaturesAt(c,g);yield Object.assign(Object.assign({},m),{node:D,tokenOffset:g,tokenEndOffset:_,features:X})}let{nextTokenStart:S,nextTokenEnd:A,previousTokenStart:N,previousTokenEnd:k}=this.backtrackToAnyToken(u,f),v;if(N!==void 0&&k!==void 0&&k===f){v=(i=xr(l,N))===null||i===void 0?void 0:i.astNode;let g=this.findFeaturesAt(c,N);yield Object.assign(Object.assign({},m),{node:v,tokenOffset:N,tokenEndOffset:k,features:g})}if(v=(s=(o=xr(l,S))===null||o===void 0?void 0:o.astNode)!==null&&s!==void 0?s:N===void 0||(a=xr(l,N))===null||a===void 0?void 0:a.astNode,v){let g=this.findFeaturesAt(c,S);yield Object.assign(Object.assign({},m),{node:v,tokenOffset:S,tokenEndOffset:A,features:g})}else{let g=gu(this.grammar),_=al(g.definition);yield Object.assign(Object.assign({},m),{tokenOffset:S,tokenEndOffset:A,features:_})}}findDataTypeRuleStart(e,r){var n,i;let o=Pt(e,r,this.grammarConfig.nameRegexp),s=!!(!((n=Pe(o?.grammarSource,K))===null||n===void 0)&&n.dataType);if(s){for(;s;)o=o?.container,s=!!(!((i=Pe(o?.grammarSource,K))===null||i===void 0)&&i.dataType);if(o)return[o.offset,o.end]}}continueCompletion(e){return e.length===0}backtrackToAnyToken(e,r){let n=this.lexer.tokenize(e).tokens;if(n.length===0)return{nextTokenStart:r,nextTokenEnd:r};let i;for(let o of n){if(o.startOffset>=r)return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};if(o.endOffset>=r)return{nextTokenStart:o.startOffset,nextTokenEnd:o.endOffset+1,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};i=o}return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0}}async completionForRule(e,r,n){if(K(r)){let i=al(r.definition);await Promise.all(i.map(o=>this.completionFor(e,o,n)))}}completionFor(e,r,n){if(dt(r.feature))return this.completionForKeyword(e,r.feature,n);if(Vt(r.feature)&&e.node)return this.completionForCrossReference(e,r,n)}completionForCrossReference(e,r,n){let i=Pe(r.feature,xe),o=e.node;if(i&&o){if(r.type&&(r.new||o.$type!==r.type)&&(o={$type:r.type,$container:o,$containerProperty:r.property}),!e)return;let s={reference:{},container:o,property:i.feature};try{let a=this.scopeProvider.getScope(s),l=new Set;a.getAllElements().forEach(c=>{!l.has(c.name)&&this.filterCrossReference(c)&&(n(e,this.createReferenceCompletionItem(c)),l.add(c.name))})}catch(a){console.error(a)}}}createReferenceCompletionItem(e){return{nodeDescription:e,kind:this.nodeKindProvider.getCompletionItemKind(e),detail:e.type,sortText:"0"}}filterCrossReference(e){return!0}completionForKeyword(e,r,n){r.value.match(/[\w]/)&&n(e,{label:r.value,kind:bs.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})}fillCompletionItem(e,r){var n,i;let o;if(typeof r.label=="string")o=r.label;else if("node"in r){let c=this.nameProvider.getName(r.node);if(!c)return;o=c}else if("nodeDescription"in r)o=r.nodeDescription.name;else return;let s;typeof((n=r.textEdit)===null||n===void 0?void 0:n.newText)=="string"?s=r.textEdit.newText:typeof r.insertText=="string"?s=r.insertText:s=o;let a=(i=r.textEdit)!==null&&i!==void 0?i:this.buildCompletionTextEdit(e,o,s);return a?{additionalTextEdits:r.additionalTextEdits,command:r.command,commitCharacters:r.commitCharacters,data:r.data,detail:r.detail,documentation:r.documentation,filterText:r.filterText,insertText:r.insertText,insertTextFormat:r.insertTextFormat,insertTextMode:r.insertTextMode,kind:r.kind,labelDetails:r.labelDetails,preselect:r.preselect,sortText:r.sortText,tags:r.tags,textEditText:r.textEditText,textEdit:a,label:o}:void 0}buildCompletionTextEdit(e,r,n){let o=e.textDocument.getText().substring(e.tokenOffset,e.offset);if(this.fuzzyMatcher.match(o,r)){let s=e.textDocument.positionAt(e.tokenOffset),a=e.position;return{newText:n,range:{start:s,end:a}}}else return}};var Tu=class extends xs{constructor(e){super(e),this.documents=()=>e.shared.workspace.LangiumDocuments}completionFor(e,r,n){let i=Pe(r.feature,xe);if(i?.feature==="path")this.completeImportPath(e,n);else return super.completionFor(e,r,n)}completeImportPath(e,r){let i=e.textDocument.getText().substring(e.tokenOffset,e.offset),o=this.getAllFiles(e.document),s={start:e.position,end:e.position};if(i.length>0){let a=i.substring(1);o=o.filter(u=>u.startsWith(a));let l=e.textDocument.positionAt(e.tokenOffset+1),c=e.textDocument.positionAt(e.tokenEndOffset-1);s={start:l,end:c}}for(let a of o){let l=i.length>0?"":'"',c=`${l}${a}${l}`;r(e,{label:a,textEdit:{newText:c,range:s},kind:bR.CompletionItemKind.File,sortText:"0"})}}getAllFiles(e){let r=this.documents().all,n=e.uri.toString(),i=ve.dirname(e.uri).toString(),o=[];for(let s of r)if(!ve.equals(s.uri,n)){let a=s.uri.toString(),l=a.substring(0,a.length-ve.extname(s.uri).length),c=ve.relative(i,l);c.startsWith(".")||(c=`./${c}`),o.push(c)}return o}};var ll=de(Se(),1);var Ss=class{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e){let r=[],n=i=>r.push(i);return this.collectFolding(e,n),r}collectFolding(e,r){var n;let i=(n=e.parseResult)===null||n===void 0?void 0:n.value;if(i){if(this.shouldProcessContent(i)){let o=Qe(i).iterator(),s;do if(s=o.next(),!s.done){let a=s.value;this.shouldProcess(a)&&this.collectObjectFolding(e,a,r),this.shouldProcessContent(a)||o.prune()}while(!s.done)}this.collectCommentFolding(e,i,r)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,r,n){let i=r.$cstNode;if(i){let o=this.toFoldingRange(e,i);o&&n(o)}}collectCommentFolding(e,r,n){let i=r.$cstNode;if(i){for(let o of ET(i))if(this.commentNames.includes(o.tokenType.name)){let s=this.toFoldingRange(e,o,ll.FoldingRangeKind.Comment);s&&n(s)}}}toFoldingRange(e,r,n){let i=r.range,o=i.start,s=i.end;if(!(s.line-o.line<2))return this.includeLastFoldingLine(r,n)||(s=e.textDocument.positionAt(e.textDocument.offsetAt({line:s.line,character:0})-1)),ll.FoldingRange.create(o.line,s.line,o.character,s.character,n)}includeLastFoldingLine(e,r){if(r===ll.FoldingRangeKind.Comment)return!1;let n=e.text,i=n.charAt(n.length-1);return!(i==="}"||i===")"||i==="]")}};var vu=class extends Ss{shouldProcessContent(e){return!K(e)}};var Ru=class{constructor(){this.collector=()=>{}}getNodeFormatter(e){return new dh(e,this.collector)}formatDocument(e,r){let n=e.parseResult;return n.lexerErrors.length===0&&n.parserErrors.length===0?this.doDocumentFormat(e,r.options):[]}isFormatRangeErrorFree(e,r){let n=e.parseResult;return n.lexerErrors.length||n.parserErrors.length?Math.min(...n.lexerErrors.map(o=>{var s;return(s=o.line)!==null&&s!==void 0?s:Number.MAX_VALUE}),...n.parserErrors.map(o=>{var s;return(s=o.token.startLine)!==null&&s!==void 0?s:Number.MAX_VALUE}))>r.end.line:!0}formatDocumentRange(e,r){return this.isFormatRangeErrorFree(e,r.range)?this.doDocumentFormat(e,r.options,r.range):[]}formatDocumentOnType(e,r){let n={start:{character:0,line:r.position.line},end:r.position};return this.isFormatRangeErrorFree(e,n)?this.doDocumentFormat(e,r.options,n):[]}get formatOnTypeOptions(){}doDocumentFormat(e,r,n){let i=new Map,o=(a,l,c)=>{var u,f;let m=this.nodeModeToKey(a,l),T=i.get(m),S=(u=c.options.priority)!==null&&u!==void 0?u:0,A=(f=T?.options.priority)!==null&&f!==void 0?f:0;(!T||A<=S)&&i.set(m,c)};this.collector=o,this.iterateAstFormatting(e,n);let s=this.iterateCstFormatting(e,i,r,n);return this.avoidOverlappingEdits(e.textDocument,s)}avoidOverlappingEdits(e,r){let n=[];for(let i of r){let o=n[n.length-1];if(o){let s=e.offsetAt(i.range.start),a=e.offsetAt(o.range.end);s<a&&n.pop()}n.push(i)}return n}iterateAstFormatting(e,r){let n=e.parseResult.value;this.format(n);let i=Qe(n).iterator(),o;do if(o=i.next(),!o.done){let s=o.value;this.insideRange(s.$cstNode.range,r)?this.format(s):i.prune()}while(!o.done)}nodeModeToKey(e,r){return`${e.offset}:${e.end}:${r}`}insideRange(e,r){return!r||e.start.line<=r.start.line&&e.end.line>=r.end.line||e.start.line>=r.start.line&&e.end.line<=r.end.line||e.start.line<=r.end.line&&e.end.line>=r.end.line}isNecessary(e,r){return r.getText(e.range)!==e.newText}iterateCstFormatting(e,r,n,i){let o={indentation:0,options:n,document:e.textDocument},s=[],l=this.iterateCstTree(e,o).iterator(),c,u;do if(u=l.next(),!u.done){let f=u.value,m=co(f),T=this.nodeModeToKey(f,"prepend"),S=r.get(T);if(r.delete(T),S){let k=this.createTextEdit(c,f,S,o);for(let v of k)v&&this.insideRange(v.range,i)&&this.isNecessary(v,e.textDocument)&&s.push(v)}let A=this.nodeModeToKey(f,"append"),N=r.get(A);if(r.delete(A),N){let k=$T(f);if(k){let v=this.createTextEdit(f,k,N,o);for(let g of v)g&&this.insideRange(g.range,i)&&this.isNecessary(g,e.textDocument)&&s.push(g)}}if(!S&&f.hidden){let k=this.createHiddenTextEdits(c,f,void 0,o);for(let v of k)v&&this.insideRange(v.range,i)&&this.isNecessary(v,e.textDocument)&&s.push(v)}m&&(c=f)}while(!u.done);return s}createHiddenTextEdits(e,r,n,i){var o;let s=r.range.start.line;if(e&&e.range.end.line===s)return[];let a=[],l={start:{character:0,line:s},end:r.range.start},c=i.document.getText(l),u=this.findFittingMove(l,(o=n?.moves)!==null&&o!==void 0?o:[],i),f=this.getExistingIndentationCharacterCount(c,i),T=this.getIndentationCharacterCount(i,u)-f;if(T===0)return[];let S="";T>0&&(S=(i.options.insertSpaces?" ":"	").repeat(T));let A=r.text.split(`
`);A[0]=c+A[0];for(let N=0;N<A.length;N++){let k=s+N,v={character:0,line:k};if(T>0)a.push({newText:S,range:{start:v,end:v}});else{let g=A[N],_=0;for(;_<g.length;_++){let D=g.charAt(_);if(D!==" "&&D!=="	")break}a.push({newText:"",range:{start:v,end:{line:k,character:Math.min(_,Math.abs(T))}}})}}return a}getExistingIndentationCharacterCount(e,r){let n=" ".repeat(r.options.tabSize);return(r.options.insertSpaces?e.replaceAll("	",n):e.replaceAll(n,"	")).length}getIndentationCharacterCount(e,r){let n=e.indentation;return r&&r.tabs&&(n+=r.tabs),(e.options.insertSpaces?e.options.tabSize:1)*n}createTextEdit(e,r,n,i){var o;if(r.hidden)return this.createHiddenTextEdits(e,r,n,i);let s={start:(o=e?.range.end)!==null&&o!==void 0?o:{character:0,line:0},end:r.range.start},a=this.findFittingMove(s,n.moves,i);if(!a)return[];let l=a.characters,c=a.lines,u=a.tabs,f=i.indentation;i.indentation+=u??0;let m=[];return l!==void 0?m.push(this.createSpaceTextEdit(s,l,n.options)):c!==void 0?m.push(this.createLineTextEdit(s,c,i,n.options)):u!==void 0&&m.push(this.createTabTextEdit(s,!!e,i)),co(r)&&(i.indentation=f),m}createSpaceTextEdit(e,r,n){if(e.start.line===e.end.line){let o=e.end.character-e.start.character;r=this.fitIntoOptions(r,o,n)}return{newText:" ".repeat(r),range:e}}createLineTextEdit(e,r,n,i){let o=e.end.line-e.start.line;r=this.fitIntoOptions(r,o,i);let a=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation);return{newText:`${`
`.repeat(r)}${a}`,range:e}}createTabTextEdit(e,r,n){let o=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation),s=r?1:0,a=Math.max(e.end.line-e.start.line,s);return{newText:`${`
`.repeat(a)}${o}`,range:e}}fitIntoOptions(e,r,n){return n.allowMore?e=Math.max(r,e):n.allowLess&&(e=Math.min(r,e)),e}findFittingMove(e,r,n){if(r.length===0)return;if(r.length===1)return r[0];let i=e.end.line-e.start.line;for(let o of r){if(o.lines!==void 0&&i<=o.lines)return o;if(o.lines===void 0&&i===0)return o}return r[r.length-1]}iterateCstTree(e,r){let i=e.parseResult.value.$cstNode;return i?new Wr(i,o=>this.iterateCst(o,r)):Jo}iterateCst(e,r){if(!wn(e))return Jo;let n=r.indentation;return new $r(()=>({index:0}),i=>i.index<e.content.length?{done:!1,value:e.content[i.index++]}:(r.indentation=n,pr))}},dh=class{constructor(e,r){this.astNode=e,this.collector=r}node(e){return new hn(e.$cstNode?[e.$cstNode]:[],this.collector)}nodes(...e){let r=[];for(let n of e)n.$cstNode&&r.push(n.$cstNode);return new hn(r,this.collector)}property(e,r){let n=Yt(this.astNode.$cstNode,e,r);return new hn(n?[n]:[],this.collector)}properties(...e){let r=[];for(let n of e){let i=Ei(this.astNode.$cstNode,n);r.push(...i)}return new hn(r,this.collector)}keyword(e,r){let n=zr(this.astNode.$cstNode,e,r);return new hn(n?[n]:[],this.collector)}keywords(...e){let r=[];for(let n of e){let i=xu(this.astNode.$cstNode,n);r.push(...i)}return new hn(r,this.collector)}cst(e){return new hn([...e],this.collector)}interior(e,r){let n=e.nodes,i=r.nodes;if(n.length!==1||i.length!==1)return new hn([],this.collector);let o=n[0],s=i[0];if(o.offset>s.offset){let a=o;o=s,s=a}return new hn(PT(o,s),this.collector)}},hn=class t{constructor(e,r){this.nodes=e,this.collector=r}prepend(e){for(let r of this.nodes)this.collector(r,"prepend",e);return this}append(e){for(let r of this.nodes)this.collector(r,"append",e);return this}surround(e){for(let r of this.nodes)this.collector(r,"prepend",e),this.collector(r,"append",e);return this}slice(e,r){return new t(this.nodes.slice(e,r),this.collector)}},ye;(function(t){function e(...u){return{options:{},moves:u.flatMap(f=>f.moves).sort(c)}}t.fit=e;function r(u){return i(0,u)}t.noSpace=r;function n(u){return i(1,u)}t.oneSpace=n;function i(u,f){return{options:f??{},moves:[{characters:u}]}}t.spaces=i;function o(u){return s(1,u)}t.newLine=o;function s(u,f){return{options:f??{},moves:[{lines:u}]}}t.newLines=s;function a(u){return{options:u??{},moves:[{tabs:1,lines:1}]}}t.indent=a;function l(u){return{options:u??{},moves:[{tabs:0}]}}t.noIndent=l;function c(u,f){var m,T,S,A,N,k;let v=(m=u.lines)!==null&&m!==void 0?m:0,g=(T=f.lines)!==null&&T!==void 0?T:0,_=(S=u.tabs)!==null&&S!==void 0?S:0,D=(A=f.tabs)!==null&&A!==void 0?A:0,X=(N=u.characters)!==null&&N!==void 0?N:0,ge=(k=f.characters)!==null&&k!==void 0?k:0;return v<g?-1:v>g?1:_<D?-1:_>D?1:X<ge?-1:X>ge?1:0}})(ye=ye||(ye={}));var bu=class extends Ru{format(e){if(Vt(e))this.getNodeFormatter(e).properties("type","terminal").surround(ye.noSpace());else if(K(e)){let r=this.getNodeFormatter(e);r.keywords("entry","fragment","returns").append(ye.oneSpace()),(e.inferredType||e.returnType||e.dataType)&&e.parameters.length===0?r.property("name").append(ye.oneSpace()):r.property("name").append(ye.noSpace()),r.properties("parameters").append(ye.noSpace()),r.keywords(",").append(ye.oneSpace()),r.keywords("<").append(ye.noSpace());let n=r.keyword(";"),i=r.keyword(":");i.prepend(ye.noSpace()),r.interior(i,n).prepend(ye.indent()),n.prepend(ye.fit(ye.noSpace(),ye.newLine())),r.node(e).prepend(ye.noIndent())}else if(Ae(e)){let r=this.getNodeFormatter(e);e.type&&(r.property("name").append(ye.oneSpace()),r.keyword("returns").append(ye.oneSpace())),r.keywords("hidden","terminal","fragment").append(ye.oneSpace()),r.keyword(":").prepend(ye.noSpace()),r.keyword(";").prepend(ye.fit(ye.noSpace(),ye.newLine())),r.node(e).prepend(ye.noIndent())}else if(Ne(e)){let r=this.getNodeFormatter(e);r.keyword("{").append(ye.noSpace()),r.keywords(".","+=","=").surround(ye.noSpace()),r.keyword("}").prepend(ye.noSpace())}else if(es(e))this.getNodeFormatter(e).keywords("infer","infers").append(ye.oneSpace());else if(xe(e))this.getNodeFormatter(e).keywords("=","+=","?=").surround(ye.noSpace());else if($e(e)){let r=this.getNodeFormatter(e);r.keyword("<").surround(ye.noSpace()),r.keyword(",").append(ye.oneSpace()),r.properties("arguments").append(ye.noSpace())}Qo(e)&&this.getNodeFormatter(e).property("cardinality").prepend(ye.noSpace())}};var si=de(Se(),1);var oe=de(Se(),1);var hh={[oe.SemanticTokenTypes.class]:0,[oe.SemanticTokenTypes.comment]:1,[oe.SemanticTokenTypes.enum]:2,[oe.SemanticTokenTypes.enumMember]:3,[oe.SemanticTokenTypes.event]:4,[oe.SemanticTokenTypes.function]:5,[oe.SemanticTokenTypes.interface]:6,[oe.SemanticTokenTypes.keyword]:7,[oe.SemanticTokenTypes.macro]:8,[oe.SemanticTokenTypes.method]:9,[oe.SemanticTokenTypes.modifier]:10,[oe.SemanticTokenTypes.namespace]:11,[oe.SemanticTokenTypes.number]:12,[oe.SemanticTokenTypes.operator]:13,[oe.SemanticTokenTypes.parameter]:14,[oe.SemanticTokenTypes.property]:15,[oe.SemanticTokenTypes.regexp]:16,[oe.SemanticTokenTypes.string]:17,[oe.SemanticTokenTypes.struct]:18,[oe.SemanticTokenTypes.type]:19,[oe.SemanticTokenTypes.typeParameter]:20,[oe.SemanticTokenTypes.variable]:21},SR={[oe.SemanticTokenModifiers.abstract]:1,[oe.SemanticTokenModifiers.async]:2,[oe.SemanticTokenModifiers.declaration]:4,[oe.SemanticTokenModifiers.defaultLibrary]:8,[oe.SemanticTokenModifiers.definition]:16,[oe.SemanticTokenModifiers.deprecated]:32,[oe.SemanticTokenModifiers.documentation]:64,[oe.SemanticTokenModifiers.modification]:128,[oe.SemanticTokenModifiers.readonly]:256,[oe.SemanticTokenModifiers.static]:512},AR={legend:{tokenTypes:Object.keys(hh),tokenModifiers:Object.keys(SR)},full:{delta:!0},range:!0},mh=class extends oe.SemanticTokensBuilder{constructor(){super(...arguments),this._tokens=[]}push(e,r,n,i,o){this._tokens.push({line:e,char:r,length:n,tokenType:i,tokenModifiers:o})}build(){return this.applyTokens(),super.build()}buildEdits(){return this.applyTokens(),super.buildEdits()}applyTokens(){for(let e of this._tokens.sort(this.compareTokens))super.push(e.line,e.char,e.length,e.tokenType,e.tokenModifiers);this._tokens=[]}compareTokens(e,r){return e.line===r.line?e.char-r.char:e.line-r.line}},Su=class{constructor(e){this.tokensBuilders=new Map,e.shared.workspace.TextDocuments.onDidClose(r=>{this.tokensBuilders.delete(r.document.uri)}),e.shared.lsp.LanguageServer.onInitialize(r=>{var n;this.initialize((n=r.capabilities.textDocument)===null||n===void 0?void 0:n.semanticTokens)})}initialize(e){this.clientCapabilities=e}async semanticHighlight(e,r,n=oe.CancellationToken.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),await this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.build()}async semanticHighlightRange(e,r,n=oe.CancellationToken.None){return this.currentRange=r.range,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),await this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.build()}async semanticHighlightDelta(e,r,n=oe.CancellationToken.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.previousResult(r.previousResultId),await this.computeHighlighting(e,this.createAcceptor(),n),this.currentTokensBuilder.buildEdits()}createAcceptor(){return r=>{"line"in r?this.highlightToken({range:{start:{line:r.line,character:r.char},end:{line:r.line,character:r.char+r.length}},type:r.type,modifier:r.modifier}):"range"in r?this.highlightToken(r):"keyword"in r?this.highlightKeyword(r):"property"in r?this.highlightProperty(r):this.highlightNode({node:r.cst,type:r.type,modifier:r.modifier})}}getDocumentTokensBuilder(e){let r=this.tokensBuilders.get(e.uri.toString());if(r)return r;let n=new mh;return this.tokensBuilders.set(e.uri.toString(),n),n}async computeHighlighting(e,r,n){let i=e.parseResult.value,o=Zn(i,{range:this.currentRange}).iterator(),s;do if(s=o.next(),!s.done){await Ze(n);let a=s.value;this.highlightElement(a,r)==="prune"&&o.prune()}while(!s.done)}highlightToken(e){var r;let{range:n,type:i}=e,o=e.modifier;if(this.currentRange&&!Fc(n,this.currentRange)||!this.currentDocument||!this.currentTokensBuilder)return;let s=hh[i],a=0;if(o!==void 0){typeof o=="string"&&(o=[o]);for(let u of o){let f=SR[u];a|=f}}let l=n.start.line,c=n.end.line;if(l===c){let u=n.start.character,f=n.end.character-u;this.currentTokensBuilder.push(l,u,f,s,a)}else if(!((r=this.clientCapabilities)===null||r===void 0)&&r.multilineTokenSupport){let u=n.start.character,f=this.currentDocument.textDocument.offsetAt(n.start),m=this.currentDocument.textDocument.offsetAt(n.end);this.currentTokensBuilder.push(l,u,m-f,s,a)}else{let u=n.start,f=this.currentDocument.textDocument.offsetAt({line:l+1,character:0});this.currentTokensBuilder.push(u.line,u.character,f-u.character-1,s,a);for(let m=l+1;m<c;m++){let T=f;f=this.currentDocument.textDocument.offsetAt({line:m+1,character:0}),this.currentTokensBuilder.push(m,0,f-T-1,s,a)}this.currentTokensBuilder.push(c,0,n.end.character,s,a)}}highlightProperty(e){let r=[];if(typeof e.index=="number"){let o=Yt(e.node.$cstNode,e.property,e.index);o&&r.push(o)}else r.push(...Ei(e.node.$cstNode,e.property));let{type:n,modifier:i}=e;for(let o of r)this.highlightNode({node:o,type:n,modifier:i})}highlightKeyword(e){let{node:r,keyword:n,type:i,index:o,modifier:s}=e,a=[];if(typeof o=="number"){let l=zr(r.$cstNode,n,o);l&&a.push(l)}else a.push(...xu(r.$cstNode,n));for(let l of a)this.highlightNode({node:l,type:i,modifier:s})}highlightNode(e){let{node:r,type:n,modifier:i}=e,o=r.range;this.highlightToken({range:o,type:n,modifier:i})}},ph;(function(t){function e(n,i){let o=new Map;Object.entries(hh).forEach(([l,c])=>o.set(c,l));let s=0,a=0;return r(n.data,5).map(l=>{s+=l[0],l[0]!==0&&(a=0),a+=l[1];let c=l[2];return{offset:i.textDocument.offsetAt({line:s,character:a}),tokenType:o.get(l[3]),tokenModifiers:l[4],text:i.textDocument.getText({start:{line:s,character:a},end:{line:s,character:a+c}})}})}t.decode=e;function r(n,i){let o=[];for(let s=0;s<n.length;s+=i){let a=n.slice(s,s+i);o.push(a)}return o}})(ph=ph||(ph={}));var Au=class extends Su{highlightElement(e,r){var n;xe(e)?r({node:e,property:"feature",type:si.SemanticTokenTypes.property}):Ne(e)?e.feature&&r({node:e,property:"feature",type:si.SemanticTokenTypes.property}):rs(e)?r({node:e,property:"name",type:si.SemanticTokenTypes.type}):ir(e)?(e.primitiveType||e.typeRef)&&r({node:e,property:e.primitiveType?"primitiveType":"typeRef",type:si.SemanticTokenTypes.type}):VT(e)?r({node:e,property:"name",type:si.SemanticTokenTypes.parameter}):ts(e)?r({node:e,property:"parameter",type:si.SemanticTokenTypes.parameter}):$e(e)?!((n=e.rule.ref)===null||n===void 0)&&n.fragment&&r({node:e,property:"rule",type:si.SemanticTokenTypes.type}):Gc(e)&&r({node:e,property:"name",type:si.SemanticTokenTypes.property})}};var wu=class extends as{getName(e){return xe(e)?e.feature:super.getName(e)}getNameNode(e){return xe(e)?Yt(e.$cstNode,"feature"):super.getNameNode(e)}};var As=class{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){let r=ws(e),n=e.astNode;if(r&&n){let i=n[r.feature];if(Yn(i))return i.ref;if(Array.isArray(i)){for(let o of i)if(Yn(o)&&o.$refNode&&o.$refNode.offset<=e.offset&&o.$refNode.end>=e.end)return o.ref}}if(n){let i=this.nameProvider.getNameNode(n);if(i&&(i===e||_T(e,i)))return n}}}findDeclarationNode(e){let r=this.findDeclaration(e);if(r?.$cstNode){let n=this.nameProvider.getNameNode(r);return n??r.$cstNode}}findReferences(e,r){let n=[];if(r.includeDeclaration){let o=this.getReferenceToSelf(e);o&&n.push(o)}let i=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));return r.documentUri&&(i=i.filter(o=>ve.equals(o.sourceUri,r.documentUri))),n.push(...i),ie(n)}getReferenceToSelf(e){let r=this.nameProvider.getNameNode(e);if(r){let n=ne(e),i=this.nodeLocator.getAstNodePath(e);return{sourceUri:n.uri,sourcePath:i,targetUri:n.uri,targetPath:i,segment:nr(r),local:!0}}}};var ku=class extends As{constructor(e){super(e),this.documents=e.shared.workspace.LangiumDocuments}findDeclaration(e){let r=e.astNode,n=ws(e);if(n&&n.feature==="feature"){if(xe(r))return this.findAssignmentDeclaration(r);if(Ne(r))return this.findActionDeclaration(r)}return super.findDeclaration(e)}findReferences(e,r){var n;return Gc(e)?this.findReferencesToTypeAttribute(e,(n=r.includeDeclaration)!==null&&n!==void 0?n:!1):super.findReferences(e,r)}findReferencesToTypeAttribute(e,r){let n=[],i=Pe(e,br);if(i){if(r){let a=this.getReferenceToSelf(e);a&&n.push(a)}let o=qm(i,this,this.documents,this.nodeLocator),s=[];o.forEach(a=>{let l=this.findRulesWithReturnType(a);s.push(...l)}),s.forEach(a=>{let l=this.createReferencesToAttribute(a,e);n.push(...l)})}return ie(n)}createReferencesToAttribute(e,r){let n=[];if(K(e)){let i=ps(e.definition).find(o=>o.feature===r.name);if(i?.$cstNode){let o=this.nameProvider.getNameNode(i);o&&n.push({sourceUri:ne(i).uri,sourcePath:this.nodeLocator.getAstNodePath(i),targetUri:ne(r).uri,targetPath:this.nodeLocator.getAstNodePath(r),segment:nr(o),local:ve.equals(ne(i).uri,ne(r).uri)})}}else{if(e.feature===r.name){let o=Yt(e.$cstNode,"feature");o&&n.push({sourceUri:ne(e).uri,sourcePath:this.nodeLocator.getAstNodePath(e),targetUri:ne(r).uri,targetPath:this.nodeLocator.getAstNodePath(r),segment:nr(o),local:ve.equals(ne(e).uri,ne(r).uri)})}let i=Pe(e,K);n.push(...this.createReferencesToAttribute(i,r))}return n}findAssignmentDeclaration(e){var r;let n=Pe(e,K),i=th(e);if(i){let o=this.findActionDeclaration(i,e.feature);if(o)return o}if(!((r=n?.returnType)===null||r===void 0)&&r.ref&&(br(n.returnType.ref)||Mt(n.returnType.ref))){let o=Va(n.returnType.ref);for(let s of o){let a=s.attributes.find(l=>l.name===e.feature);if(a)return a}}return e}findActionDeclaration(e,r){var n;if(!((n=e.type)===null||n===void 0)&&n.ref){let i=r??e.feature,o=Va(e.type.ref);for(let s of o){let a=s.attributes.find(l=>l.name===i);if(a)return a}}}findRulesWithReturnType(e){let r=[];return this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e)).forEach(i=>{let o=this.documents.getOrCreateDocument(i.sourceUri),s=this.nodeLocator.getAstNode(o.parseResult.value,i.sourcePath);(K(s)||Ne(s))&&r.push(s)}),r}};var cl=de(Se(),1);var wR=de(Se(),1);var Cu=class{constructor(e){this.grammarConfig=e.parser.GrammarConfig,this.nameProvider=e.references.NameProvider,this.documents=e.shared.workspace.LangiumDocuments,this.references=e.references.References}prepareCallHierarchy(e,r){let n=e.parseResult.value,i=Pt(n.$cstNode,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclarationNode(i);if(o)return this.getCallHierarchyItems(o.astNode,e)}getCallHierarchyItems(e,r){let n=this.nameProvider.getNameNode(e),i=this.nameProvider.getName(e);if(!(!n||!e.$cstNode||i===void 0))return[Object.assign({kind:wR.SymbolKind.Method,name:i,range:e.$cstNode.range,selectionRange:n.range,uri:r.uri.toString()},this.getCallHierarchyItem(e))]}getCallHierarchyItem(e){}incomingCalls(e){let r=this.documents.getOrCreateDocument(Dt.parse(e.item.uri)),n=r.parseResult.value,i=Pt(n.$cstNode,r.textDocument.offsetAt(e.item.range.start),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findReferences(i.astNode,{includeDeclaration:!1});return this.getIncomingCalls(i.astNode,o)}outgoingCalls(e){let r=this.documents.getOrCreateDocument(Dt.parse(e.item.uri)),n=r.parseResult.value,i=Pt(n.$cstNode,r.textDocument.offsetAt(e.item.range.start),this.grammarConfig.nameRegexp);if(i)return this.getOutgoingCalls(i.astNode)}};var kR=de(Se(),1);var ks=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,r){let n=e.parseResult.value;if(n.$cstNode){let i=n.$cstNode,o=Pt(i,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,r)}}collectLocationLinks(e,r){var n;let i=this.findLink(e);if(i)return[kR.LocationLink.create(i.targetDocument.textDocument.uri,((n=i.target.astNode.$cstNode)!==null&&n!==void 0?n:i.target).range,i.target.range,i.source.range)]}findLink(e){let r=this.references.findDeclarationNode(e);if(r?.astNode){let n=ne(r.astNode);if(r&&n)return{source:e,target:r,targetDocument:n}}}};var CR=de(Se(),1);var Eu=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,r){let n=e.parseResult.value.$cstNode;if(!n)return;let i=Pt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!i)return;let o=this.references.findDeclaration(i);if(o){let s=ve.equals(ne(o).uri,e.uri),a={documentUri:e.uri,includeDeclaration:s};return this.references.findReferences(o,a).map(c=>this.createDocumentHighlight(c)).toArray()}}createDocumentHighlight(e){return CR.DocumentHighlight.create(e.segment.range)}};var _u=class{constructor(e){this.nameProvider=e.references.NameProvider,this.nodeKindProvider=e.shared.lsp.NodeKindProvider}getSymbols(e){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,r){let n=r.$cstNode,i=this.nameProvider.getNameNode(r);if(i&&n){let o=this.nameProvider.getName(r);return[{kind:this.nodeKindProvider.getSymbolKind(r),name:o??i.text,range:n.range,selectionRange:i.range,children:this.getChildSymbols(e,r)}]}else return this.getChildSymbols(e,r)||[]}getChildSymbols(e,r){let n=[];for(let i of Ci(r)){let o=this.getSymbol(e,i);n.push(...o)}if(n.length>0)return n}};var S$=de(Se(),1);var Nu=class{match(e,r){if(e.length===0)return!0;r=r.toLowerCase();let n=!1,i,o=0,s=r.length;for(let a=0;a<s;a++){let l=r.charCodeAt(a),c=e.charCodeAt(o);if((l===c||this.toUpperCharCode(l)===this.toUpperCharCode(c))&&(n||(n=i===void 0||this.isWordTransition(i,l)),n&&o++,o===e.length))return!0;i=l}return!1}isWordTransition(e,r){return ER<=e&&e<=_R&&A$<=r&&r<=w$||e===NR&&r!==NR}toUpperCharCode(e){return ER<=e&&e<=_R?e-32:e}},ER="a".charCodeAt(0),_R="z".charCodeAt(0),A$="A".charCodeAt(0),w$="Z".charCodeAt(0),NR="_".charCodeAt(0);var yh=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,r){var n,i;let o=(i=(n=e.parseResult)===null||n===void 0?void 0:n.value)===null||i===void 0?void 0:i.$cstNode;if(o){let s=e.textDocument.offsetAt(r.position),a=Pt(o,s,this.grammarConfig.nameRegexp);if(a&&a.offset+a.length>s){let l=this.references.findDeclaration(a);if(l)return this.getAstNodeHoverContent(l)}}}},$u=class extends yh{constructor(e){super(e),this.documentationProvider=e.documentation.DocumentationProvider}getAstNodeHoverContent(e){let r=this.documentationProvider.getDocumentation(e);if(r)return{contents:{kind:"markdown",value:r}}}};var k$=de(Se(),1);var C$=de(Se(),1);var Yr=de(Se(),1);var je;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(je=je||(je={}));var Pu=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}fromTextDocument(e,r){return this.create(r??Dt.parse(e.uri),e)}fromString(e,r){return this.create(r,e)}fromModel(e,r){return this.create(r,{$model:e})}create(e,r){if(r??(r=this.textDocuments.get(e.toString())),r??(r=this.getContentFromFileSystem(e)),typeof r=="string"){let n=this.parse(e,r);return this.createLangiumDocument(n,e,void 0,r)}else if("$model"in r){let n={value:r.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(n,e)}else{let n=this.parse(e,r.getText());return this.createLangiumDocument(n,e,r)}}createLangiumDocument(e,r,n,i){let o;if(n)o={parseResult:e,uri:r,state:je.Parsed,references:[],textDocument:n};else{let s=this.createTextDocumentGetter(r,i);o={parseResult:e,uri:r,state:je.Parsed,references:[],get textDocument(){return s()}}}return e.value.$document=o,o}update(e){let r=this.textDocuments.get(e.uri.toString()),n=r?r.getText():this.getContentFromFileSystem(e.uri);if(r)Object.defineProperty(e,"textDocument",{value:r});else{let i=this.createTextDocumentGetter(e.uri,n);Object.defineProperty(e,"textDocument",{get:i})}return e.parseResult=this.parse(e.uri,n),e.parseResult.value.$document=e,e}getContentFromFileSystem(e){return this.fileSystemProvider.readFileSync(e)}parse(e,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(r)}createTextDocumentGetter(e,r){let n=this.serviceRegistry,i;return()=>i??(i=Xo.create(e.toString(),n.getServices(e).LanguageMetaData.languageId,0,r??""))}},Iu=class{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory}get all(){return ie(this.documentMap.values())}addDocument(e){let r=e.uri.toString();if(this.documentMap.has(r))throw new Error(`A document with the URI '${r}' is already present.`);this.documentMap.set(r,e)}getOrCreateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n||(n=this.langiumDocumentFactory.create(e),this.documentMap.set(r,n),n)}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=je.Changed,n.precomputedScopes=void 0,n.references=[],n.diagnostics=void 0),n}deleteDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=je.Changed,this.documentMap.delete(r)),n}};var E$=de(Se(),1);function $R(t){let e=[],r=[];t.forEach(i=>{i?.triggerCharacters&&e.push(...i.triggerCharacters),i?.retriggerCharacters&&r.push(...i.retriggerCharacters)});let n={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:r.length>0?Array.from(new Set(r)).sort():void 0};return n.triggerCharacters?n:void 0}var Du=class{constructor(e){this.onInitializeEmitter=new Yr.Emitter,this.onInitializedEmitter=new Yr.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){Uc(this.services),this.services.ServiceRegistry.all.forEach(e=>Uc(e))}hasService(e){return this.services.ServiceRegistry.all.some(r=>e(r)!==void 0)}buildInitializeResult(e){var r;let n=this.services.ServiceRegistry.all,i=this.hasService(w=>w.lsp.Formatter),o=n.map(w=>{var q;return(q=w.lsp.Formatter)===null||q===void 0?void 0:q.formatOnTypeOptions}).find(w=>!!w),s=this.hasService(w=>w.lsp.CodeActionProvider),a=this.hasService(w=>w.lsp.SemanticTokenProvider),l=(r=this.services.lsp.ExecuteCommandHandler)===null||r===void 0?void 0:r.commands,c=this.hasService(w=>w.lsp.DocumentLinkProvider),u=$R(n.map(w=>{var q;return(q=w.lsp.SignatureHelp)===null||q===void 0?void 0:q.signatureHelpOptions})),f=this.hasService(w=>w.lsp.TypeProvider),m=this.hasService(w=>w.lsp.ImplementationProvider),T=this.hasService(w=>w.lsp.CompletionProvider),S=xR(n.map(w=>{var q;return(q=w.lsp.CompletionProvider)===null||q===void 0?void 0:q.completionOptions})),A=this.hasService(w=>w.lsp.ReferencesProvider),N=this.hasService(w=>w.lsp.DocumentSymbolProvider),k=this.hasService(w=>w.lsp.DefinitionProvider),v=this.hasService(w=>w.lsp.DocumentHighlightProvider),g=this.hasService(w=>w.lsp.FoldingRangeProvider),_=this.hasService(w=>w.lsp.HoverProvider),D=this.hasService(w=>w.lsp.RenameProvider),X=this.hasService(w=>w.lsp.CallHierarchyProvider),ge=this.hasService(w=>w.lsp.CodeLensProvider),Ee=this.hasService(w=>w.lsp.DeclarationProvider),Ht=this.hasService(w=>w.lsp.InlayHintProvider),vt=this.services.lsp.WorkspaceSymbolProvider;return{capabilities:{workspace:{workspaceFolders:{supported:!0}},executeCommandProvider:l&&{commands:l},textDocumentSync:Yr.TextDocumentSyncKind.Incremental,completionProvider:T?S:void 0,referencesProvider:A,documentSymbolProvider:N,definitionProvider:k,typeDefinitionProvider:f,documentHighlightProvider:v,codeActionProvider:s,documentFormattingProvider:i,documentRangeFormattingProvider:i,documentOnTypeFormattingProvider:o,foldingRangeProvider:g,hoverProvider:_,renameProvider:D?{prepareProvider:!0}:void 0,semanticTokensProvider:a?AR:void 0,signatureHelpProvider:u,implementationProvider:m,callHierarchyProvider:X?{}:void 0,documentLinkProvider:c?{resolveProvider:!1}:void 0,codeLensProvider:ge?{resolveProvider:!1}:void 0,declarationProvider:Ee,inlayHintProvider:Ht?{resolveProvider:!1}:void 0,workspaceSymbolProvider:vt?{resolveProvider:!!vt.resolveSymbol}:void 0}}}async initialized(e){this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}};function IR(t){let e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");_$(e,t),N$(e,t),$$(e,t),P$(e,t),D$(e,t),O$(e,t),L$(e,t),M$(e,t),U$(e,t),G$(e,t),j$(e,t),I$(e,t),H$(e,t),q$(e,t),K$(e,t),W$(e,t),z$(e,t),X$(e,t),Q$(e,t),Y$(e,t),V$(e,t),B$(e,t),F$(e,t),J$(e,t),e.onInitialize(n=>t.lsp.LanguageServer.initialize(n)),e.onInitialized(n=>t.lsp.LanguageServer.initialized(n)),t.workspace.TextDocuments.listen(e),e.listen()}function _$(t,e){let r=e.workspace.DocumentBuilder,n=e.workspace.MutexLock;function i(s,a){n.lock(l=>r.update(s,a,l))}e.workspace.TextDocuments.onDidChangeContent(s=>{i([Dt.parse(s.document.uri)],[])}),t.onDidChangeWatchedFiles(s=>{let a=[],l=[];for(let c of s.changes){let u=Dt.parse(c.uri);c.type===Yr.FileChangeType.Deleted?l.push(u):a.push(u)}i(a,l)})}function N$(t,e){e.workspace.DocumentBuilder.onBuildPhase(je.Validated,async(n,i)=>{for(let o of n)if(o.diagnostics&&t.sendDiagnostics({uri:o.uri.toString(),diagnostics:o.diagnostics}),i.isCancellationRequested)return})}function $$(t,e){t.onCompletion(sr((r,n,i,o)=>{var s;return(s=r.lsp.CompletionProvider)===null||s===void 0?void 0:s.getCompletion(n,i,o)},e))}function P$(t,e){t.onReferences(sr((r,n,i,o)=>{var s;return(s=r.lsp.ReferencesProvider)===null||s===void 0?void 0:s.findReferences(n,i,o)},e))}function I$(t,e){t.onCodeAction(sr((r,n,i,o)=>{var s;return(s=r.lsp.CodeActionProvider)===null||s===void 0?void 0:s.getCodeActions(n,i,o)},e))}function D$(t,e){t.onDocumentSymbol(sr((r,n,i,o)=>{var s;return(s=r.lsp.DocumentSymbolProvider)===null||s===void 0?void 0:s.getSymbols(n,i,o)},e))}function O$(t,e){t.onDefinition(sr((r,n,i,o)=>{var s;return(s=r.lsp.DefinitionProvider)===null||s===void 0?void 0:s.getDefinition(n,i,o)},e))}function L$(t,e){t.onTypeDefinition(sr((r,n,i,o)=>{var s;return(s=r.lsp.TypeProvider)===null||s===void 0?void 0:s.getTypeDefinition(n,i,o)},e))}function M$(t,e){t.onImplementation(sr((r,n,i,o)=>{var s;return(s=r.lsp.ImplementationProvider)===null||s===void 0?void 0:s.getImplementation(n,i,o)},e))}function F$(t,e){t.onDeclaration(sr((r,n,i,o)=>{var s;return(s=r.lsp.DeclarationProvider)===null||s===void 0?void 0:s.getDeclaration(n,i,o)},e))}function U$(t,e){t.onDocumentHighlight(sr((r,n,i,o)=>{var s;return(s=r.lsp.DocumentHighlightProvider)===null||s===void 0?void 0:s.getDocumentHighlight(n,i,o)},e))}function q$(t,e){t.onHover(sr((r,n,i,o)=>{var s;return(s=r.lsp.HoverProvider)===null||s===void 0?void 0:s.getHoverContent(n,i,o)},e))}function G$(t,e){t.onFoldingRanges(sr((r,n,i,o)=>{var s;return(s=r.lsp.FoldingRangeProvider)===null||s===void 0?void 0:s.getFoldingRanges(n,i,o)},e))}function j$(t,e){t.onDocumentFormatting(sr((r,n,i,o)=>{var s;return(s=r.lsp.Formatter)===null||s===void 0?void 0:s.formatDocument(n,i,o)},e)),t.onDocumentRangeFormatting(sr((r,n,i,o)=>{var s;return(s=r.lsp.Formatter)===null||s===void 0?void 0:s.formatDocumentRange(n,i,o)},e)),t.onDocumentOnTypeFormatting(sr((r,n,i,o)=>{var s;return(s=r.lsp.Formatter)===null||s===void 0?void 0:s.formatDocumentOnType(n,i,o)},e))}function H$(t,e){t.onRenameRequest(sr((r,n,i,o)=>{var s;return(s=r.lsp.RenameProvider)===null||s===void 0?void 0:s.rename(n,i,o)},e)),t.onPrepareRename(sr((r,n,i,o)=>{var s;return(s=r.lsp.RenameProvider)===null||s===void 0?void 0:s.prepareRename(n,i,o)},e))}function K$(t,e){t.languages.inlayHint.on($i((r,n,i,o)=>{var s;return(s=r.lsp.InlayHintProvider)===null||s===void 0?void 0:s.getInlayHints(n,i,o)},e))}function W$(t,e){let r={data:[]};t.languages.semanticTokens.on($i((n,i,o,s)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlight(i,o,s):r,e)),t.languages.semanticTokens.onDelta($i((n,i,o,s)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightDelta(i,o,s):r,e)),t.languages.semanticTokens.onRange($i((n,i,o,s)=>n.lsp.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightRange(i,o,s):r,e))}function B$(t,e){t.onDidChangeConfiguration(r=>{r.settings&&e.workspace.ConfigurationProvider.updateConfiguration(r)})}function z$(t,e){let r=e.lsp.ExecuteCommandHandler;r&&t.onExecuteCommand(async(n,i)=>{var o;try{return await r.executeCommand(n.command,(o=n.arguments)!==null&&o!==void 0?o:[],i)}catch(s){return Cs(s)}})}function V$(t,e){t.onDocumentLinks($i((r,n,i,o)=>{var s;return(s=r.lsp.DocumentLinkProvider)===null||s===void 0?void 0:s.getDocumentLinks(n,i,o)},e))}function X$(t,e){t.onSignatureHelp($i((r,n,i,o)=>{var s;return(s=r.lsp.SignatureHelp)===null||s===void 0?void 0:s.provideSignatureHelp(n,i,o)},e))}function Y$(t,e){t.onCodeLens($i((r,n,i,o)=>{var s;return(s=r.lsp.CodeLensProvider)===null||s===void 0?void 0:s.provideCodeLens(n,i,o)},e))}function J$(t,e){var r;let n=e.lsp.WorkspaceSymbolProvider;if(n){t.onWorkspaceSymbol(async(o,s)=>{try{return await n.getSymbols(o,s)}catch(a){return Cs(a)}});let i=(r=n.resolveSymbol)===null||r===void 0?void 0:r.bind(n);i&&t.onWorkspaceSymbolResolve(async(o,s)=>{try{return await i(o,s)}catch(a){return Cs(a)}})}}function Q$(t,e){t.languages.callHierarchy.onPrepare($i((r,n,i,o)=>{var s;return r.lsp.CallHierarchyProvider&&(s=r.lsp.CallHierarchyProvider.prepareCallHierarchy(n,i,o))!==null&&s!==void 0?s:null},e)),t.languages.callHierarchy.onIncomingCalls(PR((r,n,i)=>{var o;return r.lsp.CallHierarchyProvider&&(o=r.lsp.CallHierarchyProvider.incomingCalls(n,i))!==null&&o!==void 0?o:null},e)),t.languages.callHierarchy.onOutgoingCalls(PR((r,n,i)=>{var o;return r.lsp.CallHierarchyProvider&&(o=r.lsp.CallHierarchyProvider.outgoingCalls(n,i))!==null&&o!==void 0?o:null},e))}function PR(t,e){let r=e.ServiceRegistry;return async(n,i)=>{let o=Dt.parse(n.item.uri),s=r.getServices(o);if(!s){let a=`Could not find service instance for uri: '${o.toString()}'`;throw console.error(a),new Error(a)}try{return await t(s,n,i)}catch(a){return Cs(a)}}}function $i(t,e){let r=e.workspace.LangiumDocuments,n=e.ServiceRegistry;return async(i,o)=>{let s=Dt.parse(i.textDocument.uri),a=n.getServices(s);if(!a)throw console.error(`Could not find service instance for uri: '${s.toString()}'`),new Error;let l=r.getOrCreateDocument(s);if(!l)throw new Error;try{return await t(a,l,i,o)}catch(c){return Cs(c)}}}function sr(t,e){let r=e.workspace.LangiumDocuments,n=e.ServiceRegistry;return async(i,o)=>{let s=Dt.parse(i.textDocument.uri),a=n.getServices(s);if(!a)return console.error(`Could not find service instance for uri: '${s.toString()}'`),null;let l=r.getOrCreateDocument(s);if(!l)return null;try{return await t(a,l,i,o)}catch(c){return Cs(c)}}}function Cs(t){if(To(t))return new Yr.ResponseError(Yr.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof Yr.ResponseError)return t;throw t}var Lu=de(Se(),1),Ou=class{getSymbolKind(){return Lu.SymbolKind.Field}getCompletionItemKind(){return Lu.CompletionItemKind.Reference}};var DR=de(Se(),1);var Mu=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,r){let n=e.parseResult.value.$cstNode;if(!n)return[];let i=Pt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);return i?this.getReferences(i,r,e):[]}getReferences(e,r,n){let i=[],o=this.references.findDeclaration(e);if(o){let s={includeDeclaration:r.context.includeDeclaration};this.references.findReferences(o,s).forEach(a=>{i.push(DR.Location.create(a.sourceUri.toString(),a.segment.range))})}return i}};var OR=de(Se(),1);var Fu=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,r){let n={},i=e.parseResult.value.$cstNode;if(!i)return;let o=e.textDocument.offsetAt(r.position),s=Pt(i,o,this.grammarConfig.nameRegexp);if(!s)return;let a=this.references.findDeclaration(s);if(!a)return;let l={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(a,l).forEach(u=>{let f=OR.TextEdit.replace(u.segment.range,r.newName),m=u.sourceUri.toString();n[m]?n[m].push(f):n[m]=[f]}),{changes:n}}prepareRename(e,r){return this.renameNodeRange(e,r.position)}renameNodeRange(e,r){let n=e.parseResult.value.$cstNode,i=e.textDocument.offsetAt(r);if(n&&i){let o=Pt(n,i,this.grammarConfig.nameRegexp);if(!o)return;if(this.references.findDeclaration(o)||this.isNameNode(o))return o.range}}isNameNode(e){return e?.astNode&&Xa(e.astNode)&&e===this.nameProvider.getNameNode(e.astNode)}};var Z$=de(Se(),1);var LR=de(Se(),1);var Uu=class{constructor(e){this.indexManager=e.workspace.IndexManager,this.nodeKindProvider=e.lsp.NodeKindProvider,this.fuzzyMatcher=e.lsp.FuzzyMatcher}async getSymbols(e,r=LR.CancellationToken.None){let n=[],i=e.query.toLowerCase();for(let o of this.indexManager.allElements())if(await Ze(r),this.fuzzyMatcher.match(i,o.name)){let s=this.getWorkspaceSymbol(o);s&&n.push(s)}return n}getWorkspaceSymbol(e){let r=e.nameSegment;if(r)return{kind:this.nodeKindProvider.getSymbolKind(e),name:e.name,location:{range:r.range,uri:e.documentUri.toString()}}}};var qu=class extends ks{constructor(e){super(e),this.documents=e.shared.workspace.LangiumDocuments}collectLocationLinks(e,r){var n,i,o,s,a,l;let c="path";if(qc(e.astNode)&&((n=ws(e))===null||n===void 0?void 0:n.feature)===c){let u=ii(this.documents,e.astNode);if(u?.$document){let f=(i=this.findTargetObject(u))!==null&&i!==void 0?i:u,m=(s=(o=this.nameProvider.getNameNode(f))===null||o===void 0?void 0:o.range)!==null&&s!==void 0?s:cl.Range.create(0,0,0,0),T=(l=(a=f.$cstNode)===null||a===void 0?void 0:a.range)!==null&&l!==void 0?l:cl.Range.create(0,0,0,0);return[cl.LocationLink.create(u.$document.uri.toString(),T,m,e.range)]}return}return super.collectLocationLinks(e,r)}findTargetObject(e){return e.isDeclared?e:Ci(e).head()}};var gh=de(Se(),1);var Gu=class extends Cu{getIncomingCalls(e,r){if(!K(e))return;let n=new Map;if(r.forEach(i=>{let s=this.documents.getOrCreateDocument(i.sourceUri).parseResult.value;if(!s.$cstNode)return;let a=xr(s.$cstNode,i.segment.offset);if(!a)return;let l=Pe(a.astNode,K);if(!l||!l.$cstNode)return;let c=this.nameProvider.getNameNode(l);if(!c)return;let u=i.sourceUri.toString(),f=u+"@"+c.text;n.has(f)?n.set(f,{parserRule:l.$cstNode,nameNode:c,targetNodes:[...n.get(f).targetNodes,a],docUri:u}):n.set(f,{parserRule:l.$cstNode,nameNode:c,targetNodes:[a],docUri:u})}),n.size!==0)return Array.from(n.values()).map(i=>({from:{kind:gh.SymbolKind.Method,name:i.nameNode.text,range:i.parserRule.range,selectionRange:i.nameNode.range,uri:i.docUri},fromRanges:i.targetNodes.map(o=>o.range)}))}getOutgoingCalls(e){if(!K(e))return;let r=Qe(e).filter($e).toArray(),n=new Map;if(r.forEach(i=>{var o;let s=i.$cstNode;if(!s)return;let a=(o=i.rule.ref)===null||o===void 0?void 0:o.$cstNode;if(!a)return;let l=this.nameProvider.getNameNode(a.astNode);if(!l)return;let c=ne(a.astNode).uri.toString(),u=c+"@"+l.text;n.has(u)?n.set(u,{refCstNode:a,to:l,from:[...n.get(u).from,s.range],docUri:c}):n.set(u,{refCstNode:a,to:l,from:[s.range],docUri:c})}),n.size!==0)return Array.from(n.values()).map(i=>({to:{kind:gh.SymbolKind.Method,name:i.to.text,range:i.refCstNode.range,selectionRange:i.to.range,uri:i.docUri},fromRanges:i.from}))}};var ju=class{constructor(e){this.documents=e.shared.workspace.LangiumDocuments}collectValidationResources(e){let r=hR(e,this.documents);return{typeToValidationInfo:this.collectValidationInfo(r),typeToSuperProperties:this.collectSuperProperties(r)}}collectValidationInfo({astResources:e,inferred:r,declared:n}){let i=new Map,o=eP(e);for(let a of Qc(r))i.set(a.name,{inferred:a,inferredNodes:o.get(a.name)});let s=ie(e.interfaces).concat(e.types).reduce((a,l)=>a.set(l.name,l),new Map);for(let a of Qc(n)){let l=s.get(a.name);if(l){let c=i.get(a.name);i.set(a.name,Object.assign(Object.assign({},c??{}),{declared:a,declaredNode:l}))}}return i}collectSuperProperties({inferred:e,declared:r}){let n=new Map,i=Gm(e,r),o=new Map(i.map(s=>[s.name,s]));for(let s of Gm(e,r))n.set(s.name,this.addSuperProperties(s,o,new Set));return n}addSuperProperties(e,r,n){if(n.has(e.name))return[];n.add(e.name);let i=[...e.properties];for(let o of e.superTypes){let s=r.get(o.name);s&&i.push(...this.addSuperProperties(s,r,n))}return i}};function eP({parserRules:t,datatypeRules:e}){let r=new Le;ie(t).concat(e).forEach(i=>r.add(Ro(i),i));function n(i){if(Ne(i)){let o=hs(i);o&&r.add(o,i)}(Pr(i)||Ft(i)||Ir(i))&&i.elements.forEach(o=>n(o))}return t.forEach(i=>n(i.definition)),r}function MR(t){return t&&"declared"in t}function FR(t){return t&&"inferred"in t}function UR(t){return t&&"inferred"in t&&"declared"in t}function GR(t){let e=t.validation.ValidationRegistry,r=t.validation.LangiumGrammarTypesValidator,n={Action:[r.checkActionIsNotUnionType],Grammar:[r.checkDeclaredTypesConsistency,r.checkDeclaredAndInferredTypesConsistency],Interface:[r.checkCyclicInterface],Type:[r.checkCyclicType]};e.register(n,r)}var Hu=class{checkCyclicType(e,r){Pi(e,new Set)&&r("error",`Type alias '${e.name}' circularly references itself.`,{node:e,property:"name"})}checkCyclicInterface(e,r){Pi(e,new Set)&&r("error",`Type '${e.name}' recursively references itself as a base type.`,{node:e,property:"name"})}checkDeclaredTypesConsistency(e,r){var n;let i=(n=e.$document)===null||n===void 0?void 0:n.validationResources;if(i){for(let o of i.typeToValidationInfo.values())if(MR(o)&&dn(o.declared)&&br(o.declaredNode)){let s=o;rP(s,r),nP(s,r)}}}checkDeclaredAndInferredTypesConsistency(e,r){var n;let i=(n=e.$document)===null||n===void 0?void 0:n.validationResources;if(i)for(let o of i.typeToValidationInfo.values())FR(o)&&o.inferred instanceof ss&&tP(o.inferred,r),UR(o)&&sP(o,i,r)}checkActionIsNotUnionType(e,r){Mt(e.type)&&r("error","Actions cannot create union types.",{node:e,property:"type"})}};function Pi(t,e){var r;if(e.has(t))return!0;if(e.add(t),Mt(t))return Pi(t.type,e);if(br(t))return t.superTypes.some(n=>n.ref&&Pi(n.ref,new Set(e)));if(ir(t)){if(!((r=t.typeRef)===null||r===void 0)&&r.ref)return Pi(t.typeRef.ref,e)}else{if(mo(t))return Pi(t.referenceType,e);if(po(t))return Pi(t.elementType,e);if(Br(t))return t.types.some(n=>Pi(n,new Set(e)))}return!1}function tP(t,e){t.properties.forEach(r=>{var n;let i=Fm(r.type);if(i.length>1){let o=a=>ei(a)?"ref":"other",s=o(i[0]);if(i.slice(1).some(a=>o(a)!==s)){let a=(n=r.astNodes.values().next())===null||n===void 0?void 0:n.value;a&&e("error",`Mixing a cross-reference with other types is not supported. Consider splitting property "${r.name}" into two or more different properties.`,{node:a})}}})}function rP({declared:t,declaredNode:e},r){Array.from(t.superTypes).forEach((n,i)=>{n&&(un(n)&&r("error","Interfaces cannot extend union types.",{node:e,property:"superTypes",index:i}),n.declared||r("error","Extending an inferred type is discouraged.",{node:e,property:"superTypes",index:i}))})}function nP({declared:t,declaredNode:e},r){let n=t.properties.reduce((s,a)=>s.add(a.name,a),new Le);for(let[s,a]of n.entriesGroupedByKey())if(a.length>1)for(let l of a)r("error",`Cannot have two properties with the same name '${s}'.`,{node:Array.from(l.astNodes)[0],property:"name"});let i=Array.from(t.superTypes);for(let s=0;s<i.length;s++)for(let a=s+1;a<i.length;a++){let l=i[s],c=i[a],u=dn(l)?l.superProperties:[],f=dn(c)?c.superProperties:[],m=iP(u,f);m.length>0&&r("error",`Cannot simultaneously inherit from '${l}' and '${c}'. Their ${m.map(T=>"'"+T+"'").join(", ")} properties are not identical.`,{node:e,property:"name"})}let o=new Set;for(let s of i){let a=dn(s)?s.superProperties:[];for(let l of a)o.add(l.name)}for(let s of t.properties)if(o.has(s.name)){let a=e.attributes.find(l=>l.name===s.name);a&&r("error",`Cannot redeclare property '${s.name}'. It is already inherited from another interface.`,{node:a,property:"name"})}}function iP(t,e){let r=[];for(let n of t){let i=e.find(o=>o.name===n.name);i&&!oP(n,i)&&r.push(n.name)}return r}function oP(t,e){return za(t.type,e.type)&&za(e.type,t.type)}function sP(t,e,r){let{inferred:n,declared:i,declaredNode:o,inferredNodes:s}=t,a=i.name,l=f=>m=>s.forEach(T=>r("error",`${m}${f?` ${f}`:""}.`,T?.inferredType?{node:T?.inferredType,property:"name"}:{node:T,property:Ne(T)?"type":"name"})),c=(f,m)=>f.forEach(T=>r("error",m,{node:T,property:xe(T)||Ne(T)?"feature":"name"})),u=f=>{s.forEach(m=>{K(m)&&ps(m.definition).find(S=>S.feature===f)===void 0&&r("error",`Property '${f}' is missing in a rule '${m.name}', but is required in type '${a}'.`,{node:m,property:"parameters"})})};if(un(n)&&un(i))aP(n.type,i.type,l(`in a rule that returns type '${a}'`));else if(dn(n)&&dn(i))lP(n,i,e,l(`in a rule that returns type '${a}'`),c,u);else{let f=`Inferred and declared versions of type '${a}' both have to be interfaces or unions.`;l()(f),r("error",f,{node:o,property:"name"})}}function aP(t,e,r){za(t,e)||r(`Cannot assign type '${fn(t,"DeclaredType")}' to '${fn(e,"DeclaredType")}'`)}function qR(t){return t.optional||Yc(t.type)}function lP(t,e,r,n,i,o){let s=new Set(t.properties.map(f=>f.name)),a=new Map(t.allProperties.map(f=>[f.name,f])),l=new Map(e.superProperties.map(f=>[f.name,f])),c=f=>{if(It(f))return{types:f.types.map(m=>c(m))};if(ei(f))return{referenceType:c(f.referenceType)};if(ti(f))return{elementType:c(f.elementType)};if(Dr(f)){let m=r.typeToValidationInfo.get(f.value.name);return m?{value:"declared"in m?m.declared:m.inferred}:f}return f};for(let[f,m]of a.entries()){let T=l.get(f);if(T){let S=fn(m.type,"DeclaredType"),A=fn(T.type,"DeclaredType");if(!za(c(m.type),T.type)&&A!=="unknown"){let k=`The assigned type '${S}' is not compatible with the declared property '${f}' of type '${A}'.`;i(m.astNodes,k)}m.optional&&!qR(T)&&o(f)}else s.has(f)&&i(m.astNodes,`A property '${f}' is not expected.`)}let u=new Set;for(let[f,m]of l.entries())!a.get(f)&&!qR(m)&&u.add(f);if(u.size>0){let f=u.size>1?"Properties":"A property",m=u.size>1?"are expected":"is expected",T=Array.from(u).map(S=>`'${S}'`).sort().join(", ");n(`${f} ${T} ${m}.`)}}var cP={validation:{LangiumGrammarValidator:t=>new su(t),ValidationResourcesCollector:t=>new ju(t),LangiumGrammarTypesValidator:()=>new Hu},lsp:{FoldingRangeProvider:t=>new vu(t),CodeActionProvider:t=>new mu(t),SemanticTokenProvider:t=>new Au(t),Formatter:()=>new bu,DefinitionProvider:t=>new qu(t),CallHierarchyProvider:t=>new Gu(t),CompletionProvider:t=>new Tu(t)},references:{ScopeComputation:t=>new du(t),ScopeProvider:t=>new fu(t),References:t=>new ku(t),NameProvider:()=>new wu}};function jR(t,e){let r=uo(fl(t),yR,e),n=uo(ul({shared:r}),gR,cP);return uP(r,n),r.ServiceRegistry.register(n),Zv(n),GR(n),{shared:r,grammar:n}}function uP(t,e){t.workspace.DocumentBuilder.onBuildPhase(je.IndexedReferences,async(n,i)=>{for(let o of n){await Ze(i);let s=e.validation.ValidationResourcesCollector,a=o.parseResult.value;o.validationResources=s.collectValidationResources(a)}})}var Th=class{readFile(){throw new Error("Method not implemented.")}readFileSync(){throw new Error("Method not implemented.")}async readDirectory(){return[]}},Ku={fileSystemProvider:()=>new Th};function gu(t){return t.rules.find(e=>K(e)&&e.entry)}function fP(t){return t.rules.filter(e=>Ae(e)&&e.hidden)}function ds(t,e){let r=new Set,n=gu(t);if(!n)return new Set(t.rules);let i=[n].concat(fP(t));for(let s of i)HR(s,r,e);let o=new Set;for(let s of t.rules)(r.has(s.name)||Ae(s)&&s.hidden)&&o.add(s);return o}function HR(t,e,r){e.add(t.name),Qe(t).forEach(n=>{if($e(n)||r&&Hc(n)){let i=n.rule.ref;i&&!e.has(i.name)&&HR(i,e,r)}})}function yu(t){if(t.terminal)return t.terminal;if(t.type.ref){let e=il(t.type.ref);return e?.terminal}}function KR(t){return t.hidden&&!Xr(t).test(" ")}function Ei(t,e){return!t||!e?[]:vh(t,e,t.astNode,!0)}function Yt(t,e,r){if(!t||!e)return;let n=vh(t,e,t.astNode,!0);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function vh(t,e,r,n){if(!n){let i=Pe(t.grammarSource,xe);if(i&&i.feature===e)return[t]}return wn(t)&&t.astNode===r?t.content.flatMap(i=>vh(i,e,r,!1)):[]}function xu(t,e){return t?WR(t,e,t?.astNode):[]}function zr(t,e,r){if(!t)return;let n=WR(t,e,t?.astNode);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function WR(t,e,r){if(t.astNode!==r)return[];if(dt(t.grammarSource)&&t.grammarSource.value===e)return[t];let n=Am(t).iterator(),i,o=[];do if(i=n.next(),!i.done){let s=i.value;s.astNode===r?dt(s.grammarSource)&&s.grammarSource.value===e&&o.push(s):n.prune()}while(!i.done);return o}function ws(t){var e;let r=t.astNode;for(;r===((e=t.container)===null||e===void 0?void 0:e.astNode);){let n=Pe(t.grammarSource,xe);if(n)return n;t=t.container}}function il(t){return es(t)&&(t=t.$container),BR(t,new Map)}function BR(t,e){var r;function n(i,o){let s;return Pe(i,xe)||(s=BR(o,e)),e.set(t,s),s}if(e.has(t))return e.get(t);e.set(t,void 0);for(let i of Qe(t)){if(xe(i)&&i.feature.toLowerCase()==="name")return e.set(t,i),i;if($e(i)&&K(i.rule.ref))return n(i,i.rule.ref);if(ir(i)&&(!((r=i.typeRef)===null||r===void 0)&&r.ref))return n(i,i.typeRef.ref)}}function ru(t){var e;let r=jR(Ku).grammar,n=r.serializer.JsonSerializer.deserialize(t);return r.shared.workspace.LangiumDocumentFactory.fromModel(n,Dt.parse(`memory://${(e=n.name)!==null&&e!==void 0?e:"grammar"}.langium`)),n}function zR(t){let e=[],r=t.Grammar;for(let n of r.rules)Ae(n)&&KR(n)&&Hv(Xr(n))&&e.push(n.name);return{multilineCommentRules:e,nameRegexp:wm}}var dP=typeof global=="object"&&global&&global.Object===Object&&global,Wu=dP;var pP=typeof self=="object"&&self&&self.Object===Object&&self,mP=Wu||pP||Function("return this")(),Et=mP;var hP=Et.Symbol,Ut=hP;var VR=Object.prototype,yP=VR.hasOwnProperty,gP=VR.toString,dl=Ut?Ut.toStringTag:void 0;function TP(t){var e=yP.call(t,dl),r=t[dl];try{t[dl]=void 0;var n=!0}catch{}var i=gP.call(t);return n&&(e?t[dl]=r:delete t[dl]),i}var XR=TP;var vP=Object.prototype,RP=vP.toString;function xP(t){return RP.call(t)}var YR=xP;var bP="[object Null]",SP="[object Undefined]",JR=Ut?Ut.toStringTag:void 0;function AP(t){return t==null?t===void 0?SP:bP:JR&&JR in Object(t)?XR(t):YR(t)}var mr=AP;function wP(t){return t!=null&&typeof t=="object"}var yt=wP;var kP="[object Symbol]";function CP(t){return typeof t=="symbol"||yt(t)&&mr(t)==kP}var _n=CP;function EP(t,e){for(var r=-1,n=t==null?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i}var Nn=EP;var _P=Array.isArray,z=_P;var NP=1/0,QR=Ut?Ut.prototype:void 0,ZR=QR?QR.toString:void 0;function ex(t){if(typeof t=="string")return t;if(z(t))return Nn(t,ex)+"";if(_n(t))return ZR?ZR.call(t):"";var e=t+"";return e=="0"&&1/t==-NP?"-0":e}var tx=ex;var $P=/\s/;function PP(t){for(var e=t.length;e--&&$P.test(t.charAt(e)););return e}var rx=PP;var IP=/^\s+/;function DP(t){return t&&t.slice(0,rx(t)+1).replace(IP,"")}var nx=DP;function OP(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var st=OP;var ix=0/0,LP=/^[-+]0x[0-9a-f]+$/i,MP=/^0b[01]+$/i,FP=/^0o[0-7]+$/i,UP=parseInt;function qP(t){if(typeof t=="number")return t;if(_n(t))return ix;if(st(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=st(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=nx(t);var r=MP.test(t);return r||FP.test(t)?UP(t.slice(2),r?2:8):LP.test(t)?ix:+t}var ox=qP;var sx=1/0,GP=17976931348623157e292;function jP(t){if(!t)return t===0?t:0;if(t=ox(t),t===sx||t===-sx){var e=t<0?-1:1;return e*GP}return t===t?t:0}var ax=jP;function HP(t){var e=ax(t),r=e%1;return e===e?r?e-r:e:0}var $n=HP;function KP(t){return t}var Sr=KP;var WP="[object AsyncFunction]",BP="[object Function]",zP="[object GeneratorFunction]",VP="[object Proxy]";function XP(t){if(!st(t))return!1;var e=mr(t);return e==BP||e==zP||e==WP||e==VP}var hr=XP;var YP=Et["__core-js_shared__"],Bu=YP;var lx=function(){var t=/[^.]+$/.exec(Bu&&Bu.keys&&Bu.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function JP(t){return!!lx&&lx in t}var cx=JP;var QP=Function.prototype,ZP=QP.toString;function eI(t){if(t!=null){try{return ZP.call(t)}catch{}try{return t+""}catch{}}return""}var ai=eI;var tI=/[\\^$.*+?()[\]{}|]/g,rI=/^\[object .+?Constructor\]$/,nI=Function.prototype,iI=Object.prototype,oI=nI.toString,sI=iI.hasOwnProperty,aI=RegExp("^"+oI.call(sI).replace(tI,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function lI(t){if(!st(t)||cx(t))return!1;var e=hr(t)?aI:rI;return e.test(ai(t))}var ux=lI;function cI(t,e){return t?.[e]}var fx=cI;function uI(t,e){var r=fx(t,e);return ux(r)?r:void 0}var Ar=uI;var fI=Ar(Et,"WeakMap"),zu=fI;var dx=Object.create,dI=function(){function t(){}return function(e){if(!st(e))return{};if(dx)return dx(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),px=dI;function pI(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var mx=pI;function mI(){}var at=mI;function hI(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var hx=hI;var yI=800,gI=16,TI=Date.now;function vI(t){var e=0,r=0;return function(){var n=TI(),i=gI-(n-r);if(r=n,i>0){if(++e>=yI)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var yx=vI;function RI(t){return function(){return t}}var gx=RI;var xI=function(){try{var t=Ar(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Es=xI;var bI=Es?function(t,e){return Es(t,"toString",{configurable:!0,enumerable:!1,value:gx(e),writable:!0})}:Sr,Tx=bI;var SI=yx(Tx),vx=SI;function AI(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var Vu=AI;function wI(t,e,r,n){for(var i=t.length,o=r+(n?1:-1);n?o--:++o<i;)if(e(t[o],o,t))return o;return-1}var Xu=wI;function kI(t){return t!==t}var Rx=kI;function CI(t,e,r){for(var n=r-1,i=t.length;++n<i;)if(t[n]===e)return n;return-1}var xx=CI;function EI(t,e,r){return e===e?xx(t,e,r):Xu(t,Rx,r)}var _s=EI;function _I(t,e){var r=t==null?0:t.length;return!!r&&_s(t,e,0)>-1}var Yu=_I;var NI=9007199254740991,$I=/^(?:0|[1-9]\d*)$/;function PI(t,e){var r=typeof t;return e=e??NI,!!e&&(r=="number"||r!="symbol"&&$I.test(t))&&t>-1&&t%1==0&&t<e}var Ii=PI;function II(t,e,r){e=="__proto__"&&Es?Es(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var Ns=II;function DI(t,e){return t===e||t!==t&&e!==e}var Pn=DI;var OI=Object.prototype,LI=OI.hasOwnProperty;function MI(t,e,r){var n=t[e];(!(LI.call(t,e)&&Pn(n,r))||r===void 0&&!(e in t))&&Ns(t,e,r)}var Di=MI;function FI(t,e,r,n){var i=!r;r||(r={});for(var o=-1,s=e.length;++o<s;){var a=e[o],l=n?n(r[a],t[a],a,r,t):void 0;l===void 0&&(l=t[a]),i?Ns(r,a,l):Di(r,a,l)}return r}var In=FI;var bx=Math.max;function UI(t,e,r){return e=bx(e===void 0?t.length-1:e,0),function(){for(var n=arguments,i=-1,o=bx(n.length-e,0),s=Array(o);++i<o;)s[i]=n[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=n[i];return a[e]=r(s),mx(t,this,a)}}var Sx=UI;function qI(t,e){return vx(Sx(t,e,Sr),t+"")}var $s=qI;var GI=9007199254740991;function jI(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=GI}var Ps=jI;function HI(t){return t!=null&&Ps(t.length)&&!hr(t)}var _t=HI;function KI(t,e,r){if(!st(r))return!1;var n=typeof e;return(n=="number"?_t(r)&&Ii(e,r.length):n=="string"&&e in r)?Pn(r[e],t):!1}var Oi=KI;function WI(t){return $s(function(e,r){var n=-1,i=r.length,o=i>1?r[i-1]:void 0,s=i>2?r[2]:void 0;for(o=t.length>3&&typeof o=="function"?(i--,o):void 0,s&&Oi(r[0],r[1],s)&&(o=i<3?void 0:o,i=1),e=Object(e);++n<i;){var a=r[n];a&&t(e,a,n,o)}return e})}var Ax=WI;var BI=Object.prototype;function zI(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||BI;return t===r}var Dn=zI;function VI(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var wx=VI;var XI="[object Arguments]";function YI(t){return yt(t)&&mr(t)==XI}var Rh=YI;var kx=Object.prototype,JI=kx.hasOwnProperty,QI=kx.propertyIsEnumerable,ZI=Rh(function(){return arguments}())?Rh:function(t){return yt(t)&&JI.call(t,"callee")&&!QI.call(t,"callee")},Li=ZI;function eD(){return!1}var Cx=eD;var Nx=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ex=Nx&&typeof module=="object"&&module&&!module.nodeType&&module,tD=Ex&&Ex.exports===Nx,_x=tD?Et.Buffer:void 0,rD=_x?_x.isBuffer:void 0,nD=rD||Cx,li=nD;var iD="[object Arguments]",oD="[object Array]",sD="[object Boolean]",aD="[object Date]",lD="[object Error]",cD="[object Function]",uD="[object Map]",fD="[object Number]",dD="[object Object]",pD="[object RegExp]",mD="[object Set]",hD="[object String]",yD="[object WeakMap]",gD="[object ArrayBuffer]",TD="[object DataView]",vD="[object Float32Array]",RD="[object Float64Array]",xD="[object Int8Array]",bD="[object Int16Array]",SD="[object Int32Array]",AD="[object Uint8Array]",wD="[object Uint8ClampedArray]",kD="[object Uint16Array]",CD="[object Uint32Array]",Ye={};Ye[vD]=Ye[RD]=Ye[xD]=Ye[bD]=Ye[SD]=Ye[AD]=Ye[wD]=Ye[kD]=Ye[CD]=!0;Ye[iD]=Ye[oD]=Ye[gD]=Ye[sD]=Ye[TD]=Ye[aD]=Ye[lD]=Ye[cD]=Ye[uD]=Ye[fD]=Ye[dD]=Ye[pD]=Ye[mD]=Ye[hD]=Ye[yD]=!1;function ED(t){return yt(t)&&Ps(t.length)&&!!Ye[mr(t)]}var $x=ED;function _D(t){return function(e){return t(e)}}var On=_D;var Px=typeof exports=="object"&&exports&&!exports.nodeType&&exports,pl=Px&&typeof module=="object"&&module&&!module.nodeType&&module,ND=pl&&pl.exports===Px,xh=ND&&Wu.process,$D=function(){try{var t=pl&&pl.require&&pl.require("util").types;return t||xh&&xh.binding&&xh.binding("util")}catch{}}(),Jr=$D;var Ix=Jr&&Jr.isTypedArray,PD=Ix?On(Ix):$x,Is=PD;var ID=Object.prototype,DD=ID.hasOwnProperty;function OD(t,e){var r=z(t),n=!r&&Li(t),i=!r&&!n&&li(t),o=!r&&!n&&!i&&Is(t),s=r||n||i||o,a=s?wx(t.length,String):[],l=a.length;for(var c in t)(e||DD.call(t,c))&&!(s&&(c=="length"||i&&(c=="offset"||c=="parent")||o&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Ii(c,l)))&&a.push(c);return a}var Ju=OD;function LD(t,e){return function(r){return t(e(r))}}var Qu=LD;var MD=Qu(Object.keys,Object),Dx=MD;var FD=Object.prototype,UD=FD.hasOwnProperty;function qD(t){if(!Dn(t))return Dx(t);var e=[];for(var r in Object(t))UD.call(t,r)&&r!="constructor"&&e.push(r);return e}var Zu=qD;function GD(t){return _t(t)?Ju(t):Zu(t)}var He=GD;var jD=Object.prototype,HD=jD.hasOwnProperty,KD=Ax(function(t,e){if(Dn(e)||_t(e)){In(e,He(e),t);return}for(var r in e)HD.call(e,r)&&Di(t,r,e[r])}),Jt=KD;function WD(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var Ox=WD;var BD=Object.prototype,zD=BD.hasOwnProperty;function VD(t){if(!st(t))return Ox(t);var e=Dn(t),r=[];for(var n in t)n=="constructor"&&(e||!zD.call(t,n))||r.push(n);return r}var Lx=VD;function XD(t){return _t(t)?Ju(t,!0):Lx(t)}var Mi=XD;var YD=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,JD=/^\w*$/;function QD(t,e){if(z(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||_n(t)?!0:JD.test(t)||!YD.test(t)||e!=null&&t in Object(e)}var Ds=QD;var ZD=Ar(Object,"create"),ci=ZD;function eO(){this.__data__=ci?ci(null):{},this.size=0}var Mx=eO;function tO(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Fx=tO;var rO="__lodash_hash_undefined__",nO=Object.prototype,iO=nO.hasOwnProperty;function oO(t){var e=this.__data__;if(ci){var r=e[t];return r===rO?void 0:r}return iO.call(e,t)?e[t]:void 0}var Ux=oO;var sO=Object.prototype,aO=sO.hasOwnProperty;function lO(t){var e=this.__data__;return ci?e[t]!==void 0:aO.call(e,t)}var qx=lO;var cO="__lodash_hash_undefined__";function uO(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=ci&&e===void 0?cO:e,this}var Gx=uO;function Os(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Os.prototype.clear=Mx;Os.prototype.delete=Fx;Os.prototype.get=Ux;Os.prototype.has=qx;Os.prototype.set=Gx;var bh=Os;function fO(){this.__data__=[],this.size=0}var jx=fO;function dO(t,e){for(var r=t.length;r--;)if(Pn(t[r][0],e))return r;return-1}var Fi=dO;var pO=Array.prototype,mO=pO.splice;function hO(t){var e=this.__data__,r=Fi(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():mO.call(e,r,1),--this.size,!0}var Hx=hO;function yO(t){var e=this.__data__,r=Fi(e,t);return r<0?void 0:e[r][1]}var Kx=yO;function gO(t){return Fi(this.__data__,t)>-1}var Wx=gO;function TO(t,e){var r=this.__data__,n=Fi(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}var Bx=TO;function Ls(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ls.prototype.clear=jx;Ls.prototype.delete=Hx;Ls.prototype.get=Kx;Ls.prototype.has=Wx;Ls.prototype.set=Bx;var Ui=Ls;var vO=Ar(Et,"Map"),qi=vO;function RO(){this.size=0,this.__data__={hash:new bh,map:new(qi||Ui),string:new bh}}var zx=RO;function xO(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var Vx=xO;function bO(t,e){var r=t.__data__;return Vx(e)?r[typeof e=="string"?"string":"hash"]:r.map}var Gi=bO;function SO(t){var e=Gi(this,t).delete(t);return this.size-=e?1:0,e}var Xx=SO;function AO(t){return Gi(this,t).get(t)}var Yx=AO;function wO(t){return Gi(this,t).has(t)}var Jx=wO;function kO(t,e){var r=Gi(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}var Qx=kO;function Ms(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ms.prototype.clear=zx;Ms.prototype.delete=Xx;Ms.prototype.get=Yx;Ms.prototype.has=Jx;Ms.prototype.set=Qx;var So=Ms;var CO="Expected a function";function Sh(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(CO);var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=t.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(Sh.Cache||So),r}Sh.Cache=So;var Zx=Sh;var EO=500;function _O(t){var e=Zx(t,function(n){return r.size===EO&&r.clear(),n}),r=e.cache;return e}var eb=_O;var NO=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$O=/\\(\\)?/g,PO=eb(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(NO,function(r,n,i,o){e.push(i?o.replace($O,"$1"):n||r)}),e}),tb=PO;function IO(t){return t==null?"":tx(t)}var rb=IO;function DO(t,e){return z(t)?t:Ds(t,e)?[t]:tb(rb(t))}var ji=DO;var OO=1/0;function LO(t){if(typeof t=="string"||_n(t))return t;var e=t+"";return e=="0"&&1/t==-OO?"-0":e}var Ln=LO;function MO(t,e){e=ji(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[Ln(e[r++])];return r&&r==n?t:void 0}var Fs=MO;function FO(t,e,r){var n=t==null?void 0:Fs(t,e);return n===void 0?r:n}var nb=FO;function UO(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}var Us=UO;var ib=Ut?Ut.isConcatSpreadable:void 0;function qO(t){return z(t)||Li(t)||!!(ib&&t&&t[ib])}var ob=qO;function sb(t,e,r,n,i){var o=-1,s=t.length;for(r||(r=ob),i||(i=[]);++o<s;){var a=t[o];e>0&&r(a)?e>1?sb(a,e-1,r,n,i):Us(i,a):n||(i[i.length]=a)}return i}var qs=sb;function GO(t){var e=t==null?0:t.length;return e?qs(t,1):[]}var gt=GO;var jO=Qu(Object.getPrototypeOf,Object),ef=jO;function HO(t,e,r){var n=-1,i=t.length;e<0&&(e=-e>i?0:i+e),r=r>i?i:r,r<0&&(r+=i),i=e>r?0:r-e>>>0,e>>>=0;for(var o=Array(i);++n<i;)o[n]=t[n+e];return o}var tf=HO;function KO(t,e,r,n){var i=-1,o=t==null?0:t.length;for(n&&o&&(r=t[++i]);++i<o;)r=e(r,t[i],i,t);return r}var ab=KO;function WO(){this.__data__=new Ui,this.size=0}var lb=WO;function BO(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}var cb=BO;function zO(t){return this.__data__.get(t)}var ub=zO;function VO(t){return this.__data__.has(t)}var fb=VO;var XO=200;function YO(t,e){var r=this.__data__;if(r instanceof Ui){var n=r.__data__;if(!qi||n.length<XO-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new So(n)}return r.set(t,e),this.size=r.size,this}var db=YO;function Gs(t){var e=this.__data__=new Ui(t);this.size=e.size}Gs.prototype.clear=lb;Gs.prototype.delete=cb;Gs.prototype.get=ub;Gs.prototype.has=fb;Gs.prototype.set=db;var Hi=Gs;function JO(t,e){return t&&In(e,He(e),t)}var pb=JO;function QO(t,e){return t&&In(e,Mi(e),t)}var mb=QO;var Tb=typeof exports=="object"&&exports&&!exports.nodeType&&exports,hb=Tb&&typeof module=="object"&&module&&!module.nodeType&&module,ZO=hb&&hb.exports===Tb,yb=ZO?Et.Buffer:void 0,gb=yb?yb.allocUnsafe:void 0;function e0(t,e){if(e)return t.slice();var r=t.length,n=gb?gb(r):new t.constructor(r);return t.copy(n),n}var vb=e0;function t0(t,e){for(var r=-1,n=t==null?0:t.length,i=0,o=[];++r<n;){var s=t[r];e(s,r,t)&&(o[i++]=s)}return o}var js=t0;function r0(){return[]}var rf=r0;var n0=Object.prototype,i0=n0.propertyIsEnumerable,Rb=Object.getOwnPropertySymbols,o0=Rb?function(t){return t==null?[]:(t=Object(t),js(Rb(t),function(e){return i0.call(t,e)}))}:rf,Hs=o0;function s0(t,e){return In(t,Hs(t),e)}var xb=s0;var a0=Object.getOwnPropertySymbols,l0=a0?function(t){for(var e=[];t;)Us(e,Hs(t)),t=ef(t);return e}:rf,nf=l0;function c0(t,e){return In(t,nf(t),e)}var bb=c0;function u0(t,e,r){var n=e(t);return z(t)?n:Us(n,r(t))}var of=u0;function f0(t){return of(t,He,Hs)}var ml=f0;function d0(t){return of(t,Mi,nf)}var sf=d0;var p0=Ar(Et,"DataView"),af=p0;var m0=Ar(Et,"Promise"),lf=m0;var h0=Ar(Et,"Set"),Ki=h0;var Sb="[object Map]",y0="[object Object]",Ab="[object Promise]",wb="[object Set]",kb="[object WeakMap]",Cb="[object DataView]",g0=ai(af),T0=ai(qi),v0=ai(lf),R0=ai(Ki),x0=ai(zu),Ao=mr;(af&&Ao(new af(new ArrayBuffer(1)))!=Cb||qi&&Ao(new qi)!=Sb||lf&&Ao(lf.resolve())!=Ab||Ki&&Ao(new Ki)!=wb||zu&&Ao(new zu)!=kb)&&(Ao=function(t){var e=mr(t),r=e==y0?t.constructor:void 0,n=r?ai(r):"";if(n)switch(n){case g0:return Cb;case T0:return Sb;case v0:return Ab;case R0:return wb;case x0:return kb}return e});var yn=Ao;var b0=Object.prototype,S0=b0.hasOwnProperty;function A0(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&S0.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var Eb=A0;var w0=Et.Uint8Array,Ks=w0;function k0(t){var e=new t.constructor(t.byteLength);return new Ks(e).set(new Ks(t)),e}var Ws=k0;function C0(t,e){var r=e?Ws(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var _b=C0;var E0=/\w*$/;function _0(t){var e=new t.constructor(t.source,E0.exec(t));return e.lastIndex=t.lastIndex,e}var Nb=_0;var $b=Ut?Ut.prototype:void 0,Pb=$b?$b.valueOf:void 0;function N0(t){return Pb?Object(Pb.call(t)):{}}var Ib=N0;function $0(t,e){var r=e?Ws(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var Db=$0;var P0="[object Boolean]",I0="[object Date]",D0="[object Map]",O0="[object Number]",L0="[object RegExp]",M0="[object Set]",F0="[object String]",U0="[object Symbol]",q0="[object ArrayBuffer]",G0="[object DataView]",j0="[object Float32Array]",H0="[object Float64Array]",K0="[object Int8Array]",W0="[object Int16Array]",B0="[object Int32Array]",z0="[object Uint8Array]",V0="[object Uint8ClampedArray]",X0="[object Uint16Array]",Y0="[object Uint32Array]";function J0(t,e,r){var n=t.constructor;switch(e){case q0:return Ws(t);case P0:case I0:return new n(+t);case G0:return _b(t,r);case j0:case H0:case K0:case W0:case B0:case z0:case V0:case X0:case Y0:return Db(t,r);case D0:return new n;case O0:case F0:return new n(t);case L0:return Nb(t);case M0:return new n;case U0:return Ib(t)}}var Ob=J0;function Q0(t){return typeof t.constructor=="function"&&!Dn(t)?px(ef(t)):{}}var Lb=Q0;var Z0="[object Map]";function eL(t){return yt(t)&&yn(t)==Z0}var Mb=eL;var Fb=Jr&&Jr.isMap,tL=Fb?On(Fb):Mb,Ub=tL;var rL="[object Set]";function nL(t){return yt(t)&&yn(t)==rL}var qb=nL;var Gb=Jr&&Jr.isSet,iL=Gb?On(Gb):qb,jb=iL;var oL=1,sL=2,aL=4,Hb="[object Arguments]",lL="[object Array]",cL="[object Boolean]",uL="[object Date]",fL="[object Error]",Kb="[object Function]",dL="[object GeneratorFunction]",pL="[object Map]",mL="[object Number]",Wb="[object Object]",hL="[object RegExp]",yL="[object Set]",gL="[object String]",TL="[object Symbol]",vL="[object WeakMap]",RL="[object ArrayBuffer]",xL="[object DataView]",bL="[object Float32Array]",SL="[object Float64Array]",AL="[object Int8Array]",wL="[object Int16Array]",kL="[object Int32Array]",CL="[object Uint8Array]",EL="[object Uint8ClampedArray]",_L="[object Uint16Array]",NL="[object Uint32Array]",Ke={};Ke[Hb]=Ke[lL]=Ke[RL]=Ke[xL]=Ke[cL]=Ke[uL]=Ke[bL]=Ke[SL]=Ke[AL]=Ke[wL]=Ke[kL]=Ke[pL]=Ke[mL]=Ke[Wb]=Ke[hL]=Ke[yL]=Ke[gL]=Ke[TL]=Ke[CL]=Ke[EL]=Ke[_L]=Ke[NL]=!0;Ke[fL]=Ke[Kb]=Ke[vL]=!1;function cf(t,e,r,n,i,o){var s,a=e&oL,l=e&sL,c=e&aL;if(r&&(s=i?r(t,n,i,o):r(t)),s!==void 0)return s;if(!st(t))return t;var u=z(t);if(u){if(s=Eb(t),!a)return hx(t,s)}else{var f=yn(t),m=f==Kb||f==dL;if(li(t))return vb(t,a);if(f==Wb||f==Hb||m&&!i){if(s=l||m?{}:Lb(t),!a)return l?bb(t,mb(s,t)):xb(t,pb(s,t))}else{if(!Ke[f])return i?t:{};s=Ob(t,f,a)}}o||(o=new Hi);var T=o.get(t);if(T)return T;o.set(t,s),jb(t)?t.forEach(function(N){s.add(cf(N,e,r,N,t,o))}):Ub(t)&&t.forEach(function(N,k){s.set(k,cf(N,e,r,k,t,o))});var S=c?l?sf:ml:l?Mi:He,A=u?void 0:S(t);return Vu(A||t,function(N,k){A&&(k=N,N=t[k]),Di(s,k,cf(N,e,r,k,t,o))}),s}var Bb=cf;var $L=4;function PL(t){return Bb(t,$L)}var We=PL;function IL(t){for(var e=-1,r=t==null?0:t.length,n=0,i=[];++e<r;){var o=t[e];o&&(i[n++]=o)}return i}var Mn=IL;var DL="__lodash_hash_undefined__";function OL(t){return this.__data__.set(t,DL),this}var zb=OL;function LL(t){return this.__data__.has(t)}var Vb=LL;function uf(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new So;++e<r;)this.add(t[e])}uf.prototype.add=uf.prototype.push=zb;uf.prototype.has=Vb;var Bs=uf;function ML(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}var ff=ML;function FL(t,e){return t.has(e)}var zs=FL;var UL=1,qL=2;function GL(t,e,r,n,i,o){var s=r&UL,a=t.length,l=e.length;if(a!=l&&!(s&&l>a))return!1;var c=o.get(t),u=o.get(e);if(c&&u)return c==e&&u==t;var f=-1,m=!0,T=r&qL?new Bs:void 0;for(o.set(t,e),o.set(e,t);++f<a;){var S=t[f],A=e[f];if(n)var N=s?n(A,S,f,e,t,o):n(S,A,f,t,e,o);if(N!==void 0){if(N)continue;m=!1;break}if(T){if(!ff(e,function(k,v){if(!zs(T,v)&&(S===k||i(S,k,r,n,o)))return T.push(v)})){m=!1;break}}else if(!(S===A||i(S,A,r,n,o))){m=!1;break}}return o.delete(t),o.delete(e),m}var df=GL;function jL(t){var e=-1,r=Array(t.size);return t.forEach(function(n,i){r[++e]=[i,n]}),r}var Xb=jL;function HL(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var Vs=HL;var KL=1,WL=2,BL="[object Boolean]",zL="[object Date]",VL="[object Error]",XL="[object Map]",YL="[object Number]",JL="[object RegExp]",QL="[object Set]",ZL="[object String]",eM="[object Symbol]",tM="[object ArrayBuffer]",rM="[object DataView]",Yb=Ut?Ut.prototype:void 0,Ah=Yb?Yb.valueOf:void 0;function nM(t,e,r,n,i,o,s){switch(r){case rM:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case tM:return!(t.byteLength!=e.byteLength||!o(new Ks(t),new Ks(e)));case BL:case zL:case YL:return Pn(+t,+e);case VL:return t.name==e.name&&t.message==e.message;case JL:case ZL:return t==e+"";case XL:var a=Xb;case QL:var l=n&KL;if(a||(a=Vs),t.size!=e.size&&!l)return!1;var c=s.get(t);if(c)return c==e;n|=WL,s.set(t,e);var u=df(a(t),a(e),n,i,o,s);return s.delete(t),u;case eM:if(Ah)return Ah.call(t)==Ah.call(e)}return!1}var Jb=nM;var iM=1,oM=Object.prototype,sM=oM.hasOwnProperty;function aM(t,e,r,n,i,o){var s=r&iM,a=ml(t),l=a.length,c=ml(e),u=c.length;if(l!=u&&!s)return!1;for(var f=l;f--;){var m=a[f];if(!(s?m in e:sM.call(e,m)))return!1}var T=o.get(t),S=o.get(e);if(T&&S)return T==e&&S==t;var A=!0;o.set(t,e),o.set(e,t);for(var N=s;++f<l;){m=a[f];var k=t[m],v=e[m];if(n)var g=s?n(v,k,m,e,t,o):n(k,v,m,t,e,o);if(!(g===void 0?k===v||i(k,v,r,n,o):g)){A=!1;break}N||(N=m=="constructor")}if(A&&!N){var _=t.constructor,D=e.constructor;_!=D&&"constructor"in t&&"constructor"in e&&!(typeof _=="function"&&_ instanceof _&&typeof D=="function"&&D instanceof D)&&(A=!1)}return o.delete(t),o.delete(e),A}var Qb=aM;var lM=1,Zb="[object Arguments]",eS="[object Array]",pf="[object Object]",cM=Object.prototype,tS=cM.hasOwnProperty;function uM(t,e,r,n,i,o){var s=z(t),a=z(e),l=s?eS:yn(t),c=a?eS:yn(e);l=l==Zb?pf:l,c=c==Zb?pf:c;var u=l==pf,f=c==pf,m=l==c;if(m&&li(t)){if(!li(e))return!1;s=!0,u=!1}if(m&&!u)return o||(o=new Hi),s||Is(t)?df(t,e,r,n,i,o):Jb(t,e,l,r,n,i,o);if(!(r&lM)){var T=u&&tS.call(t,"__wrapped__"),S=f&&tS.call(e,"__wrapped__");if(T||S){var A=T?t.value():t,N=S?e.value():e;return o||(o=new Hi),i(A,N,r,n,o)}}return m?(o||(o=new Hi),Qb(t,e,r,n,i,o)):!1}var rS=uM;function nS(t,e,r,n,i){return t===e?!0:t==null||e==null||!yt(t)&&!yt(e)?t!==t&&e!==e:rS(t,e,r,n,nS,i)}var mf=nS;var fM=1,dM=2;function pM(t,e,r,n){var i=r.length,o=i,s=!n;if(t==null)return!o;for(t=Object(t);i--;){var a=r[i];if(s&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<o;){a=r[i];var l=a[0],c=t[l],u=a[1];if(s&&a[2]){if(c===void 0&&!(l in t))return!1}else{var f=new Hi;if(n)var m=n(c,u,l,t,e,f);if(!(m===void 0?mf(u,c,fM|dM,n,f):m))return!1}}return!0}var iS=pM;function mM(t){return t===t&&!st(t)}var hf=mM;function hM(t){for(var e=He(t),r=e.length;r--;){var n=e[r],i=t[n];e[r]=[n,i,hf(i)]}return e}var oS=hM;function yM(t,e){return function(r){return r==null?!1:r[t]===e&&(e!==void 0||t in Object(r))}}var yf=yM;function gM(t){var e=oS(t);return e.length==1&&e[0][2]?yf(e[0][0],e[0][1]):function(r){return r===t||iS(r,t,e)}}var sS=gM;function TM(t,e){return t!=null&&e in Object(t)}var aS=TM;function vM(t,e,r){e=ji(e,t);for(var n=-1,i=e.length,o=!1;++n<i;){var s=Ln(e[n]);if(!(o=t!=null&&r(t,s)))break;t=t[s]}return o||++n!=i?o:(i=t==null?0:t.length,!!i&&Ps(i)&&Ii(s,i)&&(z(t)||Li(t)))}var gf=vM;function RM(t,e){return t!=null&&gf(t,e,aS)}var lS=RM;var xM=1,bM=2;function SM(t,e){return Ds(t)&&hf(e)?yf(Ln(t),e):function(r){var n=nb(r,t);return n===void 0&&n===e?lS(r,t):mf(e,n,xM|bM)}}var cS=SM;function AM(t){return function(e){return e?.[t]}}var uS=AM;function wM(t){return function(e){return Fs(e,t)}}var fS=wM;function kM(t){return Ds(t)?uS(Ln(t)):fS(t)}var dS=kM;function CM(t){return typeof t=="function"?t:t==null?Sr:typeof t=="object"?z(t)?cS(t[0],t[1]):sS(t):dS(t)}var pt=CM;function EM(t,e,r,n){for(var i=-1,o=t==null?0:t.length;++i<o;){var s=t[i];e(n,s,r(s),t)}return n}var pS=EM;function _M(t){return function(e,r,n){for(var i=-1,o=Object(e),s=n(e),a=s.length;a--;){var l=s[t?a:++i];if(r(o[l],l,o)===!1)break}return e}}var mS=_M;var NM=mS(),hS=NM;function $M(t,e){return t&&hS(t,e,He)}var yS=$M;function PM(t,e){return function(r,n){if(r==null)return r;if(!_t(r))return t(r,n);for(var i=r.length,o=e?i:-1,s=Object(r);(e?o--:++o<i)&&n(s[o],o,s)!==!1;);return r}}var gS=PM;var IM=gS(yS),wr=IM;function DM(t,e,r,n){return wr(t,function(i,o,s){e(n,i,r(i),s)}),n}var TS=DM;function OM(t,e){return function(r,n){var i=z(r)?pS:TS,o=e?e():{};return i(r,t,pt(n,2),o)}}var vS=OM;var RS=Object.prototype,LM=RS.hasOwnProperty,MM=$s(function(t,e){t=Object(t);var r=-1,n=e.length,i=n>2?e[2]:void 0;for(i&&Oi(e[0],e[1],i)&&(n=1);++r<n;)for(var o=e[r],s=Mi(o),a=-1,l=s.length;++a<l;){var c=s[a],u=t[c];(u===void 0||Pn(u,RS[c])&&!LM.call(t,c))&&(t[c]=o[c])}return t}),Xs=MM;function FM(t){return yt(t)&&_t(t)}var wh=FM;function UM(t,e,r){for(var n=-1,i=t==null?0:t.length;++n<i;)if(r(e,t[n]))return!0;return!1}var Tf=UM;var qM=200;function GM(t,e,r,n){var i=-1,o=Yu,s=!0,a=t.length,l=[],c=e.length;if(!a)return l;r&&(e=Nn(e,On(r))),n?(o=Tf,s=!1):e.length>=qM&&(o=zs,s=!1,e=new Bs(e));e:for(;++i<a;){var u=t[i],f=r==null?u:r(u);if(u=n||u!==0?u:0,s&&f===f){for(var m=c;m--;)if(e[m]===f)continue e;l.push(u)}else o(e,f,n)||l.push(u)}return l}var xS=GM;var jM=$s(function(t,e){return wh(t)?xS(t,qs(e,1,wh,!0)):[]}),Wi=jM;function HM(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var Fn=HM;function KM(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:$n(e),tf(t,e<0?0:e,n)):[]}var Tt=KM;function WM(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:$n(e),e=n-e,tf(t,0,e<0?0:e)):[]}var ui=WM;function BM(t){return typeof t=="function"?t:Sr}var bS=BM;function zM(t,e){var r=z(t)?Vu:wr;return r(t,bS(e))}var G=zM;function VM(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(!e(t[r],r,t))return!1;return!0}var SS=VM;function XM(t,e){var r=!0;return wr(t,function(n,i,o){return r=!!e(n,i,o),r}),r}var AS=XM;function YM(t,e,r){var n=z(t)?SS:AS;return r&&Oi(t,e,r)&&(e=void 0),n(t,pt(e,3))}var ar=YM;function JM(t,e){var r=[];return wr(t,function(n,i,o){e(n,i,o)&&r.push(n)}),r}var vf=JM;function QM(t,e){var r=z(t)?js:vf;return r(t,pt(e,3))}var qt=QM;function ZM(t){return function(e,r,n){var i=Object(e);if(!_t(e)){var o=pt(r,3);e=He(e),r=function(a){return o(i[a],a,i)}}var s=t(e,r,n);return s>-1?i[o?e[s]:s]:void 0}}var wS=ZM;var eF=Math.max;function tF(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:$n(r);return i<0&&(i=eF(n+i,0)),Xu(t,pt(e,3),i)}var kS=tF;var rF=wS(kS),Un=rF;function nF(t){return t&&t.length?t[0]:void 0}var Gt=nF;function iF(t,e){var r=-1,n=_t(t)?Array(t.length):[];return wr(t,function(i,o,s){n[++r]=e(i,o,s)}),n}var CS=iF;function oF(t,e){var r=z(t)?Nn:CS;return r(t,pt(e,3))}var L=oF;function sF(t,e){return qs(L(t,e),1)}var Qt=sF;var aF=Object.prototype,lF=aF.hasOwnProperty,cF=vS(function(t,e,r){lF.call(t,r)?t[r].push(e):Ns(t,r,[e])}),kh=cF;var uF=Object.prototype,fF=uF.hasOwnProperty;function dF(t,e){return t!=null&&fF.call(t,e)}var ES=dF;function pF(t,e){return t!=null&&gf(t,e,ES)}var W=pF;var mF="[object String]";function hF(t){return typeof t=="string"||!z(t)&&yt(t)&&mr(t)==mF}var Ot=hF;function yF(t,e){return Nn(e,function(r){return t[r]})}var _S=yF;function gF(t){return t==null?[]:_S(t,He(t))}var Ie=gF;var TF=Math.max;function vF(t,e,r,n){t=_t(t)?t:Ie(t),r=r&&!n?$n(r):0;var i=t.length;return r<0&&(r=TF(i+r,0)),Ot(t)?r<=i&&t.indexOf(e,r)>-1:!!i&&_s(t,e,r)>-1}var et=vF;var RF=Math.max;function xF(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var i=r==null?0:$n(r);return i<0&&(i=RF(n+i,0)),_s(t,e,i)}var Rf=xF;var bF="[object Map]",SF="[object Set]",AF=Object.prototype,wF=AF.hasOwnProperty;function kF(t){if(t==null)return!0;if(_t(t)&&(z(t)||typeof t=="string"||typeof t.splice=="function"||li(t)||Is(t)||Li(t)))return!t.length;var e=yn(t);if(e==bF||e==SF)return!t.size;if(Dn(t))return!Zu(t).length;for(var r in t)if(wF.call(t,r))return!1;return!0}var se=kF;var CF="[object RegExp]";function EF(t){return yt(t)&&mr(t)==CF}var NS=EF;var $S=Jr&&Jr.isRegExp,_F=$S?On($S):NS,Qr=_F;function NF(t){return t===void 0}var lr=NF;function $F(t,e){return t<e}var PS=$F;function PF(t,e,r){for(var n=-1,i=t.length;++n<i;){var o=t[n],s=e(o);if(s!=null&&(a===void 0?s===s&&!_n(s):r(s,a)))var a=s,l=o}return l}var IS=PF;function IF(t){return t&&t.length?IS(t,Sr,PS):void 0}var DS=IF;var DF="Expected a function";function OF(t){if(typeof t!="function")throw new TypeError(DF);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var OS=OF;function LF(t,e,r,n){if(!st(t))return t;e=ji(e,t);for(var i=-1,o=e.length,s=o-1,a=t;a!=null&&++i<o;){var l=Ln(e[i]),c=r;if(l==="__proto__"||l==="constructor"||l==="prototype")return t;if(i!=s){var u=a[l];c=n?n(u,l,a):void 0,c===void 0&&(c=st(u)?u:Ii(e[i+1])?[]:{})}Di(a,l,c),a=a[l]}return t}var LS=LF;function MF(t,e,r){for(var n=-1,i=e.length,o={};++n<i;){var s=e[n],a=Fs(t,s);r(a,s)&&LS(o,ji(s,t),a)}return o}var MS=MF;function FF(t,e){if(t==null)return{};var r=Nn(sf(t),function(n){return[n]});return e=pt(e),MS(t,r,function(n,i){return e(n,i[0])})}var kr=FF;function UF(t,e,r,n,i){return i(t,function(o,s,a){r=n?(n=!1,o):e(r,o,s,a)}),r}var FS=UF;function qF(t,e,r){var n=z(t)?ab:FS,i=arguments.length<3;return n(t,pt(e,4),r,i,wr)}var lt=qF;function GF(t,e){var r=z(t)?js:vf;return r(t,OS(pt(e,3)))}var Bi=GF;function jF(t,e){var r;return wr(t,function(n,i,o){return r=e(n,i,o),!r}),!!r}var US=jF;function HF(t,e,r){var n=z(t)?ff:US;return r&&Oi(t,e,r)&&(e=void 0),n(t,pt(e,3))}var hl=HF;var KF=1/0,WF=Ki&&1/Vs(new Ki([,-0]))[1]==KF?function(t){return new Ki(t)}:at,qS=WF;var BF=200;function zF(t,e,r){var n=-1,i=Yu,o=t.length,s=!0,a=[],l=a;if(r)s=!1,i=Tf;else if(o>=BF){var c=e?null:qS(t);if(c)return Vs(c);s=!1,i=zs,l=new Bs}else l=e?[]:a;e:for(;++n<o;){var u=t[n],f=e?e(u):u;if(u=r||u!==0?u:0,s&&f===f){for(var m=l.length;m--;)if(l[m]===f)continue e;e&&l.push(f),a.push(u)}else i(l,f,r)||(l!==a&&l.push(f),a.push(u))}return a}var xf=zF;function VF(t){return t&&t.length?xf(t):[]}var Ys=VF;function XF(t,e){return t&&t.length?xf(t,pt(e,2)):[]}var GS=XF;function Js(t){console&&console.error&&console.error(`Error: ${t}`)}function yl(t){console&&console.warn&&console.warn(`Warning: ${t}`)}function gl(t){let e=new Date().getTime(),r=t();return{time:new Date().getTime()-e,value:r}}function Tl(t){function e(){}e.prototype=t;let r=new e;function n(){return typeof r.bar}return n(),n(),t;(0,eval)(t)}function YF(t){return JF(t)?t.LABEL:t.name}function JF(t){return Ot(t.LABEL)&&t.LABEL!==""}var Ur=class{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){e.visit(this),G(this.definition,r=>{r.accept(e)})}},ke=class extends Ur{constructor(e){super([]),this.idx=1,Jt(this,kr(e,r=>r!==void 0))}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}},yr=class extends Ur{constructor(e){super(e.definition),this.orgText="",Jt(this,kr(e,r=>r!==void 0))}},Be=class extends Ur{constructor(e){super(e.definition),this.ignoreAmbiguities=!1,Jt(this,kr(e,r=>r!==void 0))}},Ce=class extends Ur{constructor(e){super(e.definition),this.idx=1,Jt(this,kr(e,r=>r!==void 0))}},ze=class extends Ur{constructor(e){super(e.definition),this.idx=1,Jt(this,kr(e,r=>r!==void 0))}},Ve=class extends Ur{constructor(e){super(e.definition),this.idx=1,Jt(this,kr(e,r=>r!==void 0))}},pe=class extends Ur{constructor(e){super(e.definition),this.idx=1,Jt(this,kr(e,r=>r!==void 0))}},Me=class extends Ur{constructor(e){super(e.definition),this.idx=1,Jt(this,kr(e,r=>r!==void 0))}},Fe=class extends Ur{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){super(e.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,Jt(this,kr(e,r=>r!==void 0))}},ae=class{constructor(e){this.idx=1,Jt(this,kr(e,r=>r!==void 0))}accept(e){e.visit(this)}};function bf(t){return L(t,Qs)}function Qs(t){function e(r){return L(r,Qs)}if(t instanceof ke){let r={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return Ot(t.label)&&(r.label=t.label),r}else{if(t instanceof Be)return{type:"Alternative",definition:e(t.definition)};if(t instanceof Ce)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof ze)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof Ve)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:Qs(new ae({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof Me)return{type:"RepetitionWithSeparator",idx:t.idx,separator:Qs(new ae({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof pe)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof Fe)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof ae){let r={type:"Terminal",name:t.terminalType.name,label:YF(t.terminalType),idx:t.idx};Ot(t.label)&&(r.terminalLabel=t.label);let n=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(r.pattern=Qr(n)?n.source:n),r}else{if(t instanceof yr)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}var gr=class{visit(e){let r=e;switch(r.constructor){case ke:return this.visitNonTerminal(r);case Be:return this.visitAlternative(r);case Ce:return this.visitOption(r);case ze:return this.visitRepetitionMandatory(r);case Ve:return this.visitRepetitionMandatoryWithSeparator(r);case Me:return this.visitRepetitionWithSeparator(r);case pe:return this.visitRepetition(r);case Fe:return this.visitAlternation(r);case ae:return this.visitTerminal(r);case yr:return this.visitRule(r);default:throw Error("non exhaustive match")}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}};function Ch(t){return t instanceof Be||t instanceof Ce||t instanceof pe||t instanceof ze||t instanceof Ve||t instanceof Me||t instanceof ae||t instanceof yr}function wo(t,e=[]){return t instanceof Ce||t instanceof pe||t instanceof Me?!0:t instanceof Fe?hl(t.definition,n=>wo(n,e)):t instanceof ke&&et(e,t)?!1:t instanceof Ur?(t instanceof ke&&e.push(t),ar(t.definition,n=>wo(n,e))):!1}function Eh(t){return t instanceof Fe}function Cr(t){if(t instanceof ke)return"SUBRULE";if(t instanceof Ce)return"OPTION";if(t instanceof Fe)return"OR";if(t instanceof ze)return"AT_LEAST_ONE";if(t instanceof Ve)return"AT_LEAST_ONE_SEP";if(t instanceof Me)return"MANY_SEP";if(t instanceof pe)return"MANY";if(t instanceof ae)return"CONSUME";throw Error("non exhaustive match")}var fi=class{walk(e,r=[]){G(e.definition,(n,i)=>{let o=Tt(e.definition,i+1);if(n instanceof ke)this.walkProdRef(n,o,r);else if(n instanceof ae)this.walkTerminal(n,o,r);else if(n instanceof Be)this.walkFlat(n,o,r);else if(n instanceof Ce)this.walkOption(n,o,r);else if(n instanceof ze)this.walkAtLeastOne(n,o,r);else if(n instanceof Ve)this.walkAtLeastOneSep(n,o,r);else if(n instanceof Me)this.walkManySep(n,o,r);else if(n instanceof pe)this.walkMany(n,o,r);else if(n instanceof Fe)this.walkOr(n,o,r);else throw Error("non exhaustive match")})}walkTerminal(e,r,n){}walkProdRef(e,r,n){}walkFlat(e,r,n){let i=r.concat(n);this.walk(e,i)}walkOption(e,r,n){let i=r.concat(n);this.walk(e,i)}walkAtLeastOne(e,r,n){let i=[new Ce({definition:e.definition})].concat(r,n);this.walk(e,i)}walkAtLeastOneSep(e,r,n){let i=jS(e,r,n);this.walk(e,i)}walkMany(e,r,n){let i=[new Ce({definition:e.definition})].concat(r,n);this.walk(e,i)}walkManySep(e,r,n){let i=jS(e,r,n);this.walk(e,i)}walkOr(e,r,n){let i=r.concat(n);G(e.definition,o=>{let s=new Be({definition:[o]});this.walk(s,i)})}};function jS(t,e,r){return[new Ce({definition:[new ae({terminalType:t.separator})].concat(t.definition)})].concat(e,r)}function ko(t){if(t instanceof ke)return ko(t.referencedRule);if(t instanceof ae)return e1(t);if(Ch(t))return QF(t);if(Eh(t))return ZF(t);throw Error("non exhaustive match")}function QF(t){let e=[],r=t.definition,n=0,i=r.length>n,o,s=!0;for(;i&&s;)o=r[n],s=wo(o),e=e.concat(ko(o)),n=n+1,i=r.length>n;return Ys(e)}function ZF(t){let e=L(t.definition,r=>ko(r));return Ys(gt(e))}function e1(t){return[t.terminalType]}var Sf="_~IN~_";var _h=class extends fi{constructor(e){super(),this.topProd=e,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(e,r,n){}walkProdRef(e,r,n){let i=t1(e.referencedRule,e.idx)+this.topProd.name,o=r.concat(n),s=new Be({definition:o}),a=ko(s);this.follows[i]=a}};function HS(t){let e={};return G(t,r=>{let n=new _h(r).startWalking();Jt(e,n)}),e}function t1(t,e){return t.name+e+Sf}var Af={},r1=new go;function Zs(t){let e=t.toString();if(Af.hasOwnProperty(e))return Af[e];{let r=r1.pattern(e);return Af[e]=r,r}}function KS(){Af={}}var BS="Complement Sets are not supported for first char optimization",vl=`Unable to use "first char" lexer optimizations:
`;function zS(t,e=!1){try{let r=Zs(t);return Nh(r.value,{},r.flags.ignoreCase)}catch(r){if(r.message===BS)e&&yl(`${vl}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let n="";e&&(n=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),Js(`${vl}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+n)}}return[]}function Nh(t,e,r){switch(t.type){case"Disjunction":for(let i=0;i<t.value.length;i++)Nh(t.value[i],e,r);break;case"Alternative":let n=t.value;for(let i=0;i<n.length;i++){let o=n[i];switch(o.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}let s=o;switch(s.type){case"Character":wf(s.value,e,r);break;case"Set":if(s.complement===!0)throw Error(BS);G(s.value,l=>{if(typeof l=="number")wf(l,e,r);else{let c=l;if(r===!0)for(let u=c.from;u<=c.to;u++)wf(u,e,r);else{for(let u=c.from;u<=c.to&&u<ea;u++)wf(u,e,r);if(c.to>=ea){let u=c.from>=ea?c.from:ea,f=c.to,m=qn(u),T=qn(f);for(let S=m;S<=T;S++)e[S]=S}}}});break;case"Group":Nh(s.value,e,r);break;default:throw Error("Non Exhaustive Match")}let a=s.quantifier!==void 0&&s.quantifier.atLeast===0;if(s.type==="Group"&&$h(s)===!1||s.type!=="Group"&&a===!1)break}break;default:throw Error("non exhaustive match!")}return Ie(e)}function wf(t,e,r){let n=qn(t);e[n]=n,r===!0&&n1(t,e)}function n1(t,e){let r=String.fromCharCode(t),n=r.toUpperCase();if(n!==r){let i=qn(n.charCodeAt(0));e[i]=i}else{let i=r.toLowerCase();if(i!==r){let o=qn(i.charCodeAt(0));e[o]=o}}}function WS(t,e){return Un(t.value,r=>{if(typeof r=="number")return et(e,r);{let n=r;return Un(e,i=>n.from<=i&&i<=n.to)!==void 0}})}function $h(t){let e=t.quantifier;return e&&e.atLeast===0?!0:t.value?z(t.value)?ar(t.value,$h):$h(t.value):!1}var Ph=class extends Cn{constructor(e){super(),this.targetCharCodes=e,this.found=!1}visitChildren(e){if(this.found!==!0){switch(e.type){case"Lookahead":this.visitLookahead(e);return;case"NegativeLookahead":this.visitNegativeLookahead(e);return}super.visitChildren(e)}}visitCharacter(e){et(this.targetCharCodes,e.value)&&(this.found=!0)}visitSet(e){e.complement?WS(e,this.targetCharCodes)===void 0&&(this.found=!0):WS(e,this.targetCharCodes)!==void 0&&(this.found=!0)}};function kf(t,e){if(e instanceof RegExp){let r=Zs(e),n=new Ph(t);return n.visit(r),n.found}else return Un(e,r=>et(t,r.charCodeAt(0)))!==void 0}var Co="PATTERN",ta="defaultMode",Cf="modes",Dh=typeof new RegExp("(?:)").sticky=="boolean";function YS(t,e){e=Xs(e,{useSticky:Dh,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:(v,g)=>g()});let r=e.tracer;r("initCharCodeToOptimizedIndexMap",()=>{x1()});let n;r("Reject Lexer.NA",()=>{n=Bi(t,v=>v[Co]===mt.NA)});let i=!1,o;r("Transform Patterns",()=>{i=!1,o=L(n,v=>{let g=v[Co];if(Qr(g)){let _=g.source;return _.length===1&&_!=="^"&&_!=="$"&&_!=="."&&!g.ignoreCase?_:_.length===2&&_[0]==="\\"&&!et(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],_[1])?_[1]:e.useSticky?XS(g):VS(g)}else{if(hr(g))return i=!0,{exec:g};if(typeof g=="object")return i=!0,g;if(typeof g=="string"){if(g.length===1)return g;{let _=g.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),D=new RegExp(_);return e.useSticky?XS(D):VS(D)}}else throw Error("non exhaustive match")}})});let s,a,l,c,u;r("misc mapping",()=>{s=L(n,v=>v.tokenTypeIdx),a=L(n,v=>{let g=v.GROUP;if(g!==mt.SKIPPED){if(Ot(g))return g;if(lr(g))return!1;throw Error("non exhaustive match")}}),l=L(n,v=>{let g=v.LONGER_ALT;if(g)return z(g)?L(g,D=>Rf(n,D)):[Rf(n,g)]}),c=L(n,v=>v.PUSH_MODE),u=L(n,v=>W(v,"POP_MODE"))});let f;r("Line Terminator Handling",()=>{let v=iA(e.lineTerminatorCharacters);f=L(n,g=>!1),e.positionTracking!=="onlyOffset"&&(f=L(n,g=>W(g,"LINE_BREAKS")?!!g.LINE_BREAKS:nA(g,v)===!1&&kf(v,g.PATTERN)))});let m,T,S,A;r("Misc Mapping #2",()=>{m=L(n,tA),T=L(o,v1),S=lt(n,(v,g)=>{let _=g.GROUP;return Ot(_)&&_!==mt.SKIPPED&&(v[_]=[]),v},{}),A=L(o,(v,g)=>({pattern:o[g],longerAlt:l[g],canLineTerminator:f[g],isCustom:m[g],short:T[g],group:a[g],push:c[g],pop:u[g],tokenTypeIdx:s[g],tokenType:n[g]}))});let N=!0,k=[];return e.safeMode||r("First Char Optimization",()=>{k=lt(n,(v,g,_)=>{if(typeof g.PATTERN=="string"){let D=g.PATTERN.charCodeAt(0),X=qn(D);Ih(v,X,A[_])}else if(z(g.START_CHARS_HINT)){let D;G(g.START_CHARS_HINT,X=>{let ge=typeof X=="string"?X.charCodeAt(0):X,Ee=qn(ge);D!==Ee&&(D=Ee,Ih(v,Ee,A[_]))})}else if(Qr(g.PATTERN))if(g.PATTERN.unicode)N=!1,e.ensureOptimizations&&Js(`${vl}	Unable to analyze < ${g.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{let D=zS(g.PATTERN,e.ensureOptimizations);se(D)&&(N=!1),G(D,X=>{Ih(v,X,A[_])})}else e.ensureOptimizations&&Js(`${vl}	TokenType: <${g.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),N=!1;return v},[])}),{emptyGroups:S,patternIdxToConfig:A,charCodeToPatternIdxToConfig:k,hasCustom:i,canBeOptimized:N}}function JS(t,e){let r=[],n=o1(t);r=r.concat(n.errors);let i=s1(n.valid),o=i.valid;return r=r.concat(i.errors),r=r.concat(i1(o)),r=r.concat(m1(o)),r=r.concat(h1(o,e)),r=r.concat(y1(o)),r}function i1(t){let e=[],r=qt(t,n=>Qr(n[Co]));return e=e.concat(l1(r)),e=e.concat(f1(r)),e=e.concat(d1(r)),e=e.concat(p1(r)),e=e.concat(c1(r)),e}function o1(t){let e=qt(t,i=>!W(i,Co)),r=L(e,i=>({message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:tt.MISSING_PATTERN,tokenTypes:[i]})),n=Wi(t,e);return{errors:r,valid:n}}function s1(t){let e=qt(t,i=>{let o=i[Co];return!Qr(o)&&!hr(o)&&!W(o,"exec")&&!Ot(o)}),r=L(e,i=>({message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:tt.INVALID_PATTERN,tokenTypes:[i]})),n=Wi(t,e);return{errors:r,valid:n}}var a1=/[^\\][$]/;function l1(t){class e extends Cn{constructor(){super(...arguments),this.found=!1}visitEndAnchor(o){this.found=!0}}let r=qt(t,i=>{let o=i.PATTERN;try{let s=Zs(o),a=new e;return a.visit(s),a.found}catch{return a1.test(o.source)}});return L(r,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:tt.EOI_ANCHOR_FOUND,tokenTypes:[i]}))}function c1(t){let e=qt(t,n=>n.PATTERN.test(""));return L(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' must not match an empty string",type:tt.EMPTY_MATCH_PATTERN,tokenTypes:[n]}))}var u1=/[^\\[][\^]|^\^/;function f1(t){class e extends Cn{constructor(){super(...arguments),this.found=!1}visitStartAnchor(o){this.found=!0}}let r=qt(t,i=>{let o=i.PATTERN;try{let s=Zs(o),a=new e;return a.visit(s),a.found}catch{return u1.test(o.source)}});return L(r,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:tt.SOI_ANCHOR_FOUND,tokenTypes:[i]}))}function d1(t){let e=qt(t,n=>{let i=n[Co];return i instanceof RegExp&&(i.multiline||i.global)});return L(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:tt.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[n]}))}function p1(t){let e=[],r=L(t,o=>lt(t,(s,a)=>(o.PATTERN.source===a.PATTERN.source&&!et(e,a)&&a.PATTERN!==mt.NA&&(e.push(a),s.push(a)),s),[]));r=Mn(r);let n=qt(r,o=>o.length>1);return L(n,o=>{let s=L(o,l=>l.name);return{message:`The same RegExp pattern ->${Gt(o).PATTERN}<-has been used in all of the following Token Types: ${s.join(", ")} <-`,type:tt.DUPLICATE_PATTERNS_FOUND,tokenTypes:o}})}function m1(t){let e=qt(t,n=>{if(!W(n,"GROUP"))return!1;let i=n.GROUP;return i!==mt.SKIPPED&&i!==mt.NA&&!Ot(i)});return L(e,n=>({message:"Token Type: ->"+n.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:tt.INVALID_GROUP_TYPE_FOUND,tokenTypes:[n]}))}function h1(t,e){let r=qt(t,i=>i.PUSH_MODE!==void 0&&!et(e,i.PUSH_MODE));return L(r,i=>({message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,type:tt.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}))}function y1(t){let e=[],r=lt(t,(n,i,o)=>{let s=i.PATTERN;return s===mt.NA||(Ot(s)?n.push({str:s,idx:o,tokenType:i}):Qr(s)&&T1(s)&&n.push({str:s.source,idx:o,tokenType:i})),n},[]);return G(t,(n,i)=>{G(r,({str:o,idx:s,tokenType:a})=>{if(i<s&&g1(o,n.PATTERN)){let l=`Token: ->${a.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:l,type:tt.UNREACHABLE_PATTERN,tokenTypes:[n,a]})}})}),e}function g1(t,e){if(Qr(e)){let r=e.exec(t);return r!==null&&r.index===0}else{if(hr(e))return e(t,0,[],{});if(W(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function T1(t){return Un([".","\\","[","]","|","^","$","(",")","?","*","+","{"],r=>t.source.indexOf(r)!==-1)===void 0}function VS(t){let e=t.ignoreCase?"i":"";return new RegExp(`^(?:${t.source})`,e)}function XS(t){let e=t.ignoreCase?"iy":"y";return new RegExp(`${t.source}`,e)}function QS(t,e,r){let n=[];return W(t,ta)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+ta+`> property in its definition
`,type:tt.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),W(t,Cf)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Cf+`> property in its definition
`,type:tt.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),W(t,Cf)&&W(t,ta)&&!W(t.modes,t.defaultMode)&&n.push({message:`A MultiMode Lexer cannot be initialized with a ${ta}: <${t.defaultMode}>which does not exist
`,type:tt.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),W(t,Cf)&&G(t.modes,(i,o)=>{G(i,(s,a)=>{if(lr(s))n.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${o}> at index: <${a}>
`,type:tt.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(W(s,"LONGER_ALT")){let l=z(s.LONGER_ALT)?s.LONGER_ALT:[s.LONGER_ALT];G(l,c=>{!lr(c)&&!et(i,c)&&n.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${c.name}> on token <${s.name}> outside of mode <${o}>
`,type:tt.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),n}function ZS(t,e,r){let n=[],i=!1,o=Mn(gt(Ie(t.modes))),s=Bi(o,l=>l[Co]===mt.NA),a=iA(r);return e&&G(s,l=>{let c=nA(l,a);if(c!==!1){let f={message:R1(l,c),type:c.issue,tokenType:l};n.push(f)}else W(l,"LINE_BREAKS")?l.LINE_BREAKS===!0&&(i=!0):kf(a,l.PATTERN)&&(i=!0)}),e&&!i&&n.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:tt.NO_LINE_BREAKS_FLAGS}),n}function eA(t){let e={},r=He(t);return G(r,n=>{let i=t[n];if(z(i))e[n]=[];else throw Error("non exhaustive match")}),e}function tA(t){let e=t.PATTERN;if(Qr(e))return!1;if(hr(e))return!0;if(W(e,"exec"))return!0;if(Ot(e))return!1;throw Error("non exhaustive match")}function v1(t){return Ot(t)&&t.length===1?t.charCodeAt(0):!1}var rA={test:function(t){let e=t.length;for(let r=this.lastIndex;r<e;r++){let n=t.charCodeAt(r);if(n===10)return this.lastIndex=r+1,!0;if(n===13)return t.charCodeAt(r+1)===10?this.lastIndex=r+2:this.lastIndex=r+1,!0}return!1},lastIndex:0};function nA(t,e){if(W(t,"LINE_BREAKS"))return!1;if(Qr(t.PATTERN)){try{kf(e,t.PATTERN)}catch(r){return{issue:tt.IDENTIFY_TERMINATOR,errMsg:r.message}}return!1}else{if(Ot(t.PATTERN))return!1;if(tA(t))return{issue:tt.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function R1(t,e){if(e.issue===tt.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(e.issue===tt.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}function iA(t){return L(t,r=>Ot(r)?r.charCodeAt(0):r)}function Ih(t,e,r){t[e]===void 0?t[e]=[r]:t[e].push(r)}var ea=256,Ef=[];function qn(t){return t<ea?t:Ef[t]}function x1(){if(se(Ef)){Ef=new Array(65536);for(let t=0;t<65536;t++)Ef[t]=t>255?255+~~(t/255):t}}function di(t,e){let r=t.tokenTypeIdx;return r===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[r]===!0}function ra(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}var oA=1,aA={};function pi(t){let e=b1(t);S1(e),w1(e),A1(e),G(e,r=>{r.isParent=r.categoryMatches.length>0})}function b1(t){let e=We(t),r=t,n=!0;for(;n;){r=Mn(gt(L(r,o=>o.CATEGORIES)));let i=Wi(r,e);e=e.concat(i),se(i)?n=!1:r=i}return e}function S1(t){G(t,e=>{Oh(e)||(aA[oA]=e,e.tokenTypeIdx=oA++),sA(e)&&!z(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),sA(e)||(e.CATEGORIES=[]),k1(e)||(e.categoryMatches=[]),C1(e)||(e.categoryMatchesMap={})})}function A1(t){G(t,e=>{e.categoryMatches=[],G(e.categoryMatchesMap,(r,n)=>{e.categoryMatches.push(aA[n].tokenTypeIdx)})})}function w1(t){G(t,e=>{lA([],e)})}function lA(t,e){G(t,r=>{e.categoryMatchesMap[r.tokenTypeIdx]=!0}),G(e.CATEGORIES,r=>{let n=t.concat(e);et(n,r)||lA(n,r)})}function Oh(t){return W(t,"tokenTypeIdx")}function sA(t){return W(t,"CATEGORIES")}function k1(t){return W(t,"categoryMatches")}function C1(t){return W(t,"categoryMatchesMap")}function cA(t){return W(t,"tokenTypeIdx")}var Lh={buildUnableToPopLexerModeMessage(t){return`Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(t,e,r,n,i){return`unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${r} characters.`}};var tt;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(tt||(tt={}));var Rl={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:Lh,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(Rl);var mt=class{constructor(e,r=Rl){if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(i,o)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;let s=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${s}--> <${i}>`);let{time:a,value:l}=gl(o),c=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&c(`${s}<-- <${i}> time: ${a}ms`),this.traceInitIndent--,l}else return o()},typeof r=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=Jt({},Rl,r);let n=this.config.traceInitPerf;n===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof n=="number"&&(this.traceInitMaxIdent=n,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let i,o=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===Rl.lineTerminatorsPattern)this.config.lineTerminatorsPattern=rA;else if(this.config.lineTerminatorCharacters===Rl.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(r.safeMode&&r.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),z(e)?i={modes:{defaultMode:We(e)},defaultMode:ta}:(o=!1,i=We(e))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(QS(i,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(ZS(i,this.trackStartLines,this.config.lineTerminatorCharacters))})),i.modes=i.modes?i.modes:{},G(i.modes,(a,l)=>{i.modes[l]=Bi(a,c=>lr(c))});let s=He(i.modes);if(G(i.modes,(a,l)=>{this.TRACE_INIT(`Mode: <${l}> processing`,()=>{if(this.modes.push(l),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(JS(a,s))}),se(this.lexerDefinitionErrors)){pi(a);let c;this.TRACE_INIT("analyzeTokenTypes",()=>{c=YS(a,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:r.positionTracking,ensureOptimizations:r.ensureOptimizations,safeMode:r.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[l]=c.patternIdxToConfig,this.charCodeToPatternIdxToConfig[l]=c.charCodeToPatternIdxToConfig,this.emptyGroups=Jt({},this.emptyGroups,c.emptyGroups),this.hasCustom=c.hasCustom||this.hasCustom,this.canModeBeOptimized[l]=c.canBeOptimized}})}),this.defaultMode=i.defaultMode,!se(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){let l=L(this.lexerDefinitionErrors,c=>c.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+l)}G(this.lexerDefinitionWarning,a=>{yl(a.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(Dh?(this.chopInput=Sr,this.match=this.matchWithTest):(this.updateLastIndex=at,this.match=this.matchWithExec),o&&(this.handleModes=at),this.trackStartLines===!1&&(this.computeNewColumn=Sr),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=at),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{let a=lt(this.canModeBeOptimized,(l,c,u)=>(c===!1&&l.push(u),l),[]);if(r.ensureOptimizations&&!se(a))throw Error(`Lexer Modes: < ${a.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{KS()}),this.TRACE_INIT("toFastProperties",()=>{Tl(this)})})}tokenize(e,r=this.defaultMode){if(!se(this.lexerDefinitionErrors)){let i=L(this.lexerDefinitionErrors,o=>o.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(e,r)}tokenizeInternal(e,r){let n,i,o,s,a,l,c,u,f,m,T,S,A,N,k,v,g=e,_=g.length,D=0,X=0,ge=this.hasCustom?0:Math.floor(e.length/10),Ee=new Array(ge),Ht=[],vt=this.trackStartLines?1:void 0,M=this.trackStartLines?1:void 0,w=eA(this.emptyGroups),q=this.trackStartLines,j=this.config.lineTerminatorsPattern,le=0,ee=[],Q=[],Rt=[],ct=[];Object.freeze(ct);let me;function Er(){return ee}function Gn(xt){let Zt=qn(xt),vn=Q[Zt];return vn===void 0?ct:vn}let ya=xt=>{if(Rt.length===1&&xt.tokenType.PUSH_MODE===void 0){let Zt=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(xt);Ht.push({offset:xt.startOffset,line:xt.startLine,column:xt.startColumn,length:xt.image.length,message:Zt})}else{Rt.pop();let Zt=Fn(Rt);ee=this.patternIdxToConfig[Zt],Q=this.charCodeToPatternIdxToConfig[Zt],le=ee.length;let vn=this.canModeBeOptimized[Zt]&&this.config.safeMode===!1;Q&&vn?me=Gn:me=Er}};function Yi(xt){Rt.push(xt),Q=this.charCodeToPatternIdxToConfig[xt],ee=this.patternIdxToConfig[xt],le=ee.length,le=ee.length;let Zt=this.canModeBeOptimized[xt]&&this.config.safeMode===!1;Q&&Zt?me=Gn:me=Er}Yi.call(this,r);let cr,Io=this.config.recoveryEnabled;for(;D<_;){l=null;let xt=g.charCodeAt(D),Zt=me(xt),vn=Zt.length;for(n=0;n<vn;n++){cr=Zt[n];let Kt=cr.pattern;c=null;let ut=cr.short;if(ut!==!1?xt===ut&&(l=Kt):cr.isCustom===!0?(v=Kt.exec(g,D,Ee,w),v!==null?(l=v[0],v.payload!==void 0&&(c=v.payload)):l=null):(this.updateLastIndex(Kt,D),l=this.match(Kt,e,D)),l!==null){if(a=cr.longerAlt,a!==void 0){let qr=a.length;for(o=0;o<qr;o++){let _r=ee[a[o]],vr=_r.pattern;if(u=null,_r.isCustom===!0?(v=vr.exec(g,D,Ee,w),v!==null?(s=v[0],v.payload!==void 0&&(u=v.payload)):s=null):(this.updateLastIndex(vr,D),s=this.match(vr,e,D)),s&&s.length>l.length){l=s,c=u,cr=_r;break}}}break}}if(l!==null){if(f=l.length,m=cr.group,m!==void 0&&(T=cr.tokenTypeIdx,S=this.createTokenInstance(l,D,T,cr.tokenType,vt,M,f),this.handlePayload(S,c),m===!1?X=this.addToken(Ee,X,S):w[m].push(S)),e=this.chopInput(e,f),D=D+f,M=this.computeNewColumn(M,f),q===!0&&cr.canLineTerminator===!0){let Kt=0,ut,qr;j.lastIndex=0;do ut=j.test(l),ut===!0&&(qr=j.lastIndex-1,Kt++);while(ut===!0);Kt!==0&&(vt=vt+Kt,M=f-qr,this.updateTokenEndLineColumnLocation(S,m,qr,Kt,vt,M,f))}this.handleModes(cr,ya,Yi,S)}else{let Kt=D,ut=vt,qr=M,_r=Io===!1;for(;_r===!1&&D<_;)for(e=this.chopInput(e,1),D++,i=0;i<le;i++){let vr=ee[i],Ji=vr.pattern,Ti=vr.short;if(Ti!==!1?g.charCodeAt(D)===Ti&&(_r=!0):vr.isCustom===!0?_r=Ji.exec(g,D,Ee,w)!==null:(this.updateLastIndex(Ji,D),_r=Ji.exec(e)!==null),_r===!0)break}if(A=D-Kt,M=this.computeNewColumn(M,A),k=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(g,Kt,A,ut,qr),Ht.push({offset:Kt,line:ut,column:qr,length:A,message:k}),Io===!1)break}}return this.hasCustom||(Ee.length=X),{tokens:Ee,groups:w,errors:Ht}}handleModes(e,r,n,i){if(e.pop===!0){let o=e.push;r(i),o!==void 0&&n.call(this,o)}else e.push!==void 0&&n.call(this,e.push)}chopInput(e,r){return e.substring(r)}updateLastIndex(e,r){e.lastIndex=r}updateTokenEndLineColumnLocation(e,r,n,i,o,s,a){let l,c;r!==void 0&&(l=n===a-1,c=l?-1:0,i===1&&l===!0||(e.endLine=o+c,e.endColumn=s-1+-c))}computeNewColumn(e,r){return e+r}createOffsetOnlyToken(e,r,n,i){return{image:e,startOffset:r,tokenTypeIdx:n,tokenType:i}}createStartOnlyToken(e,r,n,i,o,s){return{image:e,startOffset:r,startLine:o,startColumn:s,tokenTypeIdx:n,tokenType:i}}createFullToken(e,r,n,i,o,s,a){return{image:e,startOffset:r,endOffset:r+a-1,startLine:o,endLine:o,startColumn:s,endColumn:s+a-1,tokenTypeIdx:n,tokenType:i}}addTokenUsingPush(e,r,n){return e.push(n),r}addTokenUsingMemberAccess(e,r,n){return e[r]=n,r++,r}handlePayloadNoCustom(e,r){}handlePayloadWithCustom(e,r){r!==null&&(e.payload=r)}matchWithTest(e,r,n){return e.test(r)===!0?r.substring(n,e.lastIndex):null}matchWithExec(e,r){let n=e.exec(r);return n!==null?n[0]:null}};mt.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";mt.NA=/NOT_APPLICABLE/;function mi(t){return Mh(t)?t.LABEL:t.name}function Mh(t){return Ot(t.LABEL)&&t.LABEL!==""}var E1="parent",uA="categories",fA="label",dA="group",pA="push_mode",mA="pop_mode",hA="longer_alt",yA="line_breaks",gA="start_chars_hint";function _f(t){return _1(t)}function _1(t){let e=t.pattern,r={};if(r.name=t.name,lr(e)||(r.PATTERN=e),W(t,E1))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return W(t,uA)&&(r.CATEGORIES=t[uA]),pi([r]),W(t,fA)&&(r.LABEL=t[fA]),W(t,dA)&&(r.GROUP=t[dA]),W(t,mA)&&(r.POP_MODE=t[mA]),W(t,pA)&&(r.PUSH_MODE=t[pA]),W(t,hA)&&(r.LONGER_ALT=t[hA]),W(t,yA)&&(r.LINE_BREAKS=t[yA]),W(t,gA)&&(r.START_CHARS_HINT=t[gA]),r}var gn=_f({name:"EOF",pattern:mt.NA});pi([gn]);function Eo(t,e,r,n,i,o,s,a){return{image:e,startOffset:r,endOffset:n,startLine:i,endLine:o,startColumn:s,endColumn:a,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}function xl(t,e){return di(t,e)}var hi={buildMismatchTokenMessage({expected:t,actual:e,previous:r,ruleName:n}){return`Expecting ${Mh(t)?`--> ${mi(t)} <--`:`token of type --> ${t.name} <--`} but found --> '${e.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:t,ruleName:e}){return"Redundant input, expecting EOF but found: "+t.image},buildNoViableAltMessage({expectedPathsPerAlt:t,actual:e,previous:r,customUserDescription:n,ruleName:i}){let o="Expecting: ",a=`
but found: '`+Gt(e).image+"'";if(n)return o+n+a;{let l=lt(t,(m,T)=>m.concat(T),[]),c=L(l,m=>`[${L(m,T=>mi(T)).join(", ")}]`),f=`one of these possible Token sequences:
${L(c,(m,T)=>`  ${T+1}. ${m}`).join(`
`)}`;return o+f+a}},buildEarlyExitMessage({expectedIterationPaths:t,actual:e,customUserDescription:r,ruleName:n}){let i="Expecting: ",s=`
but found: '`+Gt(e).image+"'";if(r)return i+r+s;{let l=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${L(t,c=>`[${L(c,u=>mi(u)).join(",")}]`).join(" ,")}>`;return i+l+s}}};Object.freeze(hi);var TA={buildRuleNotFoundError(t,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-"}},Tn={buildDuplicateFoundError(t,e){function r(u){return u instanceof ae?u.terminalType.name:u instanceof ke?u.nonTerminalName:""}let n=t.name,i=Gt(e),o=i.idx,s=Cr(i),a=r(i),l=o>0,c=`->${s}${l?o:""}<- ${a?`with argument: ->${a}<-`:""}
                  appears more than once (${e.length} times) in the top level rule: ->${n}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return c=c.replace(/[ \t]+/g," "),c=c.replace(/\s\s+/g,`
`),c},buildNamespaceConflictError(t){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(t){let e=L(t.prefixPath,i=>mi(i)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx;return`Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(t){let e=L(t.prefixPath,i=>mi(i)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n},buildEmptyRepetitionError(t){let e=Cr(t.repetition);return t.repetition.idx!==0&&(e+=t.repetition.idx),`The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(t){return"deprecated"},buildEmptyAlternationError(t){return`Ambiguous empty alternative: <${t.emptyChoiceIdx+1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(t){return`An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(t){let e=t.topLevelRule.name,r=L(t.leftRecursionPath,o=>o.name),n=`${e} --> ${r.concat([e]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(t){return"deprecated"},buildDuplicateRuleNameError(t){let e;return t.topLevelRule instanceof yr?e=t.topLevelRule.name:e=t.topLevelRule,`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`}};function vA(t,e){let r=new Fh(t,e);return r.resolveRefs(),r.errors}var Fh=class extends gr{constructor(e,r){super(),this.nameToTopRule=e,this.errMsgProvider=r,this.errors=[]}resolveRefs(){G(Ie(this.nameToTopRule),e=>{this.currTopLevel=e,e.accept(this)})}visitNonTerminal(e){let r=this.nameToTopRule[e.nonTerminalName];if(r)e.referencedRule=r;else{let n=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:n,type:Lt.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}};var Uh=class extends fi{constructor(e,r){super(),this.topProd=e,this.path=r,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=We(this.path.ruleStack).reverse(),this.occurrenceStack=We(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(e,r=[]){this.found||super.walk(e,r)}walkProdRef(e,r,n){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){let i=r.concat(n);this.updateExpectedNext(),this.walk(e.referencedRule,i)}}updateExpectedNext(){se(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}},Nf=class extends Uh{constructor(e,r){super(e,r),this.path=r,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(e,r,n){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){let i=r.concat(n),o=new Be({definition:i});this.possibleTokTypes=ko(o),this.found=!0}}},na=class extends fi{constructor(e,r){super(),this.topRule=e,this.occurrence=r,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}},$f=class extends na{walkMany(e,r,n){if(e.idx===this.occurrence){let i=Gt(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof ae&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkMany(e,r,n)}},bl=class extends na{walkManySep(e,r,n){if(e.idx===this.occurrence){let i=Gt(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof ae&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkManySep(e,r,n)}},Pf=class extends na{walkAtLeastOne(e,r,n){if(e.idx===this.occurrence){let i=Gt(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof ae&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOne(e,r,n)}},Sl=class extends na{walkAtLeastOneSep(e,r,n){if(e.idx===this.occurrence){let i=Gt(r.concat(n));this.result.isEndOfRule=i===void 0,i instanceof ae&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOneSep(e,r,n)}};function If(t,e,r=[]){r=We(r);let n=[],i=0;function o(a){return a.concat(Tt(t,i+1))}function s(a){let l=If(o(a),e,r);return n.concat(l)}for(;r.length<e&&i<t.length;){let a=t[i];if(a instanceof Be)return s(a.definition);if(a instanceof ke)return s(a.definition);if(a instanceof Ce)n=s(a.definition);else if(a instanceof ze){let l=a.definition.concat([new pe({definition:a.definition})]);return s(l)}else if(a instanceof Ve){let l=[new Be({definition:a.definition}),new pe({definition:[new ae({terminalType:a.separator})].concat(a.definition)})];return s(l)}else if(a instanceof Me){let l=a.definition.concat([new pe({definition:[new ae({terminalType:a.separator})].concat(a.definition)})]);n=s(l)}else if(a instanceof pe){let l=a.definition.concat([new pe({definition:a.definition})]);n=s(l)}else{if(a instanceof Fe)return G(a.definition,l=>{se(l.definition)===!1&&(n=s(l.definition))}),n;if(a instanceof ae)r.push(a.terminalType);else throw Error("non exhaustive match")}i++}return n.push({partialPath:r,suffixDef:Tt(t,i)}),n}function Df(t,e,r,n){let i="EXIT_NONE_TERMINAL",o=[i],s="EXIT_ALTERNATIVE",a=!1,l=e.length,c=l-n-1,u=[],f=[];for(f.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!se(f);){let m=f.pop();if(m===s){a&&Fn(f).idx<=c&&f.pop();continue}let T=m.def,S=m.idx,A=m.ruleStack,N=m.occurrenceStack;if(se(T))continue;let k=T[0];if(k===i){let v={idx:S,def:Tt(T),ruleStack:ui(A),occurrenceStack:ui(N)};f.push(v)}else if(k instanceof ae)if(S<l-1){let v=S+1,g=e[v];if(r(g,k.terminalType)){let _={idx:v,def:Tt(T),ruleStack:A,occurrenceStack:N};f.push(_)}}else if(S===l-1)u.push({nextTokenType:k.terminalType,nextTokenOccurrence:k.idx,ruleStack:A,occurrenceStack:N}),a=!0;else throw Error("non exhaustive match");else if(k instanceof ke){let v=We(A);v.push(k.nonTerminalName);let g=We(N);g.push(k.idx);let _={idx:S,def:k.definition.concat(o,Tt(T)),ruleStack:v,occurrenceStack:g};f.push(_)}else if(k instanceof Ce){let v={idx:S,def:Tt(T),ruleStack:A,occurrenceStack:N};f.push(v),f.push(s);let g={idx:S,def:k.definition.concat(Tt(T)),ruleStack:A,occurrenceStack:N};f.push(g)}else if(k instanceof ze){let v=new pe({definition:k.definition,idx:k.idx}),g=k.definition.concat([v],Tt(T)),_={idx:S,def:g,ruleStack:A,occurrenceStack:N};f.push(_)}else if(k instanceof Ve){let v=new ae({terminalType:k.separator}),g=new pe({definition:[v].concat(k.definition),idx:k.idx}),_=k.definition.concat([g],Tt(T)),D={idx:S,def:_,ruleStack:A,occurrenceStack:N};f.push(D)}else if(k instanceof Me){let v={idx:S,def:Tt(T),ruleStack:A,occurrenceStack:N};f.push(v),f.push(s);let g=new ae({terminalType:k.separator}),_=new pe({definition:[g].concat(k.definition),idx:k.idx}),D=k.definition.concat([_],Tt(T)),X={idx:S,def:D,ruleStack:A,occurrenceStack:N};f.push(X)}else if(k instanceof pe){let v={idx:S,def:Tt(T),ruleStack:A,occurrenceStack:N};f.push(v),f.push(s);let g=new pe({definition:k.definition,idx:k.idx}),_=k.definition.concat([g],Tt(T)),D={idx:S,def:_,ruleStack:A,occurrenceStack:N};f.push(D)}else if(k instanceof Fe)for(let v=k.definition.length-1;v>=0;v--){let g=k.definition[v],_={idx:S,def:g.definition.concat(Tt(T)),ruleStack:A,occurrenceStack:N};f.push(_),f.push(s)}else if(k instanceof Be)f.push({idx:S,def:k.definition.concat(Tt(T)),ruleStack:A,occurrenceStack:N});else if(k instanceof yr)f.push(N1(k,S,A,N));else throw Error("non exhaustive match")}return u}function N1(t,e,r,n){let i=We(r);i.push(t.name);let o=We(n);return o.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:o}}var rt;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(rt||(rt={}));function Al(t){if(t instanceof Ce||t==="Option")return rt.OPTION;if(t instanceof pe||t==="Repetition")return rt.REPETITION;if(t instanceof ze||t==="RepetitionMandatory")return rt.REPETITION_MANDATORY;if(t instanceof Ve||t==="RepetitionMandatoryWithSeparator")return rt.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof Me||t==="RepetitionWithSeparator")return rt.REPETITION_WITH_SEPARATOR;if(t instanceof Fe||t==="Alternation")return rt.ALTERNATION;throw Error("non exhaustive match")}function Lf(t){let{occurrence:e,rule:r,prodType:n,maxLookahead:i}=t,o=Al(n);return o===rt.ALTERNATION?ia(e,r,i):oa(e,r,o,i)}function xA(t,e,r,n,i,o){let s=ia(t,e,r),a=CA(s)?ra:di;return o(s,n,a,i)}function bA(t,e,r,n,i,o){let s=oa(t,e,i,r),a=CA(s)?ra:di;return o(s[0],a,n)}function SA(t,e,r,n){let i=t.length,o=ar(t,s=>ar(s,a=>a.length===1));if(e)return function(s){let a=L(s,l=>l.GATE);for(let l=0;l<i;l++){let c=t[l],u=c.length,f=a[l];if(!(f!==void 0&&f.call(this)===!1))e:for(let m=0;m<u;m++){let T=c[m],S=T.length;for(let A=0;A<S;A++){let N=this.LA(A+1);if(r(N,T[A])===!1)continue e}return l}}};if(o&&!n){let s=L(t,l=>gt(l)),a=lt(s,(l,c,u)=>(G(c,f=>{W(l,f.tokenTypeIdx)||(l[f.tokenTypeIdx]=u),G(f.categoryMatches,m=>{W(l,m)||(l[m]=u)})}),l),{});return function(){let l=this.LA(1);return a[l.tokenTypeIdx]}}else return function(){for(let s=0;s<i;s++){let a=t[s],l=a.length;e:for(let c=0;c<l;c++){let u=a[c],f=u.length;for(let m=0;m<f;m++){let T=this.LA(m+1);if(r(T,u[m])===!1)continue e}return s}}}}function AA(t,e,r){let n=ar(t,o=>o.length===1),i=t.length;if(n&&!r){let o=gt(t);if(o.length===1&&se(o[0].categoryMatches)){let a=o[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===a}}else{let s=lt(o,(a,l,c)=>(a[l.tokenTypeIdx]=!0,G(l.categoryMatches,u=>{a[u]=!0}),a),[]);return function(){let a=this.LA(1);return s[a.tokenTypeIdx]===!0}}}else return function(){e:for(let o=0;o<i;o++){let s=t[o],a=s.length;for(let l=0;l<a;l++){let c=this.LA(l+1);if(e(c,s[l])===!1)continue e}return!0}return!1}}var Gh=class extends fi{constructor(e,r,n){super(),this.topProd=e,this.targetOccurrence=r,this.targetProdType=n}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(e,r,n,i){return e.idx===this.targetOccurrence&&this.targetProdType===r?(this.restDef=n.concat(i),!0):!1}walkOption(e,r,n){this.checkIsTarget(e,rt.OPTION,r,n)||super.walkOption(e,r,n)}walkAtLeastOne(e,r,n){this.checkIsTarget(e,rt.REPETITION_MANDATORY,r,n)||super.walkOption(e,r,n)}walkAtLeastOneSep(e,r,n){this.checkIsTarget(e,rt.REPETITION_MANDATORY_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}walkMany(e,r,n){this.checkIsTarget(e,rt.REPETITION,r,n)||super.walkOption(e,r,n)}walkManySep(e,r,n){this.checkIsTarget(e,rt.REPETITION_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}},Of=class extends gr{constructor(e,r,n){super(),this.targetOccurrence=e,this.targetProdType=r,this.targetRef=n,this.result=[]}checkIsTarget(e,r){e.idx===this.targetOccurrence&&this.targetProdType===r&&(this.targetRef===void 0||e===this.targetRef)&&(this.result=e.definition)}visitOption(e){this.checkIsTarget(e,rt.OPTION)}visitRepetition(e){this.checkIsTarget(e,rt.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,rt.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,rt.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,rt.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,rt.ALTERNATION)}};function RA(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=[];return e}function qh(t){let e=[""];for(let r=0;r<t.length;r++){let n=t[r],i=[];for(let o=0;o<e.length;o++){let s=e[o];i.push(s+"_"+n.tokenTypeIdx);for(let a=0;a<n.categoryMatches.length;a++){let l="_"+n.categoryMatches[a];i.push(s+l)}}e=i}return e}function $1(t,e,r){for(let n=0;n<t.length;n++){if(n===r)continue;let i=t[n];for(let o=0;o<e.length;o++){let s=e[o];if(i[s]===!0)return!1}}return!0}function wA(t,e){let r=L(t,s=>If([s],1)),n=RA(r.length),i=L(r,s=>{let a={};return G(s,l=>{let c=qh(l.partialPath);G(c,u=>{a[u]=!0})}),a}),o=r;for(let s=1;s<=e;s++){let a=o;o=RA(a.length);for(let l=0;l<a.length;l++){let c=a[l];for(let u=0;u<c.length;u++){let f=c[u].partialPath,m=c[u].suffixDef,T=qh(f);if($1(i,T,l)||se(m)||f.length===e){let A=n[l];if(Mf(A,f)===!1){A.push(f);for(let N=0;N<T.length;N++){let k=T[N];i[l][k]=!0}}}else{let A=If(m,s+1,f);o[l]=o[l].concat(A),G(A,N=>{let k=qh(N.partialPath);G(k,v=>{i[l][v]=!0})})}}}}return n}function ia(t,e,r,n){let i=new Of(t,rt.ALTERNATION,n);return e.accept(i),wA(i.result,r)}function oa(t,e,r,n){let i=new Of(t,r);e.accept(i);let o=i.result,a=new Gh(e,t,r).startWalking(),l=new Be({definition:o}),c=new Be({definition:a});return wA([l,c],n)}function Mf(t,e){e:for(let r=0;r<t.length;r++){let n=t[r];if(n.length===e.length){for(let i=0;i<n.length;i++){let o=e[i],s=n[i];if((o===s||s.categoryMatchesMap[o.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}function kA(t,e){return t.length<e.length&&ar(t,(r,n)=>{let i=e[n];return r===i||i.categoryMatchesMap[r.tokenTypeIdx]})}function CA(t){return ar(t,e=>ar(e,r=>ar(r,n=>se(n.categoryMatches))))}function EA(t){let e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return L(e,r=>Object.assign({type:Lt.CUSTOM_LOOKAHEAD_VALIDATION},r))}function _A(t,e,r,n){let i=Qt(t,l=>P1(l,r)),o=F1(t,e,r),s=Qt(t,l=>O1(l,r)),a=Qt(t,l=>D1(l,t,n,r));return i.concat(o,s,a)}function P1(t,e){let r=new jh;t.accept(r);let n=r.allProductions,i=kh(n,I1),o=kr(i,a=>a.length>1);return L(Ie(o),a=>{let l=Gt(a),c=e.buildDuplicateFoundError(t,a),u=Cr(l),f={message:c,type:Lt.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:u,occurrence:l.idx},m=NA(l);return m&&(f.parameter=m),f})}function I1(t){return`${Cr(t)}_#_${t.idx}_#_${NA(t)}`}function NA(t){return t instanceof ae?t.terminalType.name:t instanceof ke?t.nonTerminalName:""}var jh=class extends gr{constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}};function D1(t,e,r,n){let i=[];if(lt(e,(s,a)=>a.name===t.name?s+1:s,0)>1){let s=n.buildDuplicateRuleNameError({topLevelRule:t,grammarName:r});i.push({message:s,type:Lt.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}function $A(t,e,r){let n=[],i;return et(e,t)||(i=`Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${r}<-as it is not defined in any of the super grammars `,n.push({message:i,type:Lt.INVALID_RULE_OVERRIDE,ruleName:t})),n}function Kh(t,e,r,n=[]){let i=[],o=Ff(e.definition);if(se(o))return[];{let s=t.name;et(o,t)&&i.push({message:r.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:n}),type:Lt.LEFT_RECURSION,ruleName:s});let l=Wi(o,n.concat([t])),c=Qt(l,u=>{let f=We(n);return f.push(u),Kh(t,u,r,f)});return i.concat(c)}}function Ff(t){let e=[];if(se(t))return e;let r=Gt(t);if(r instanceof ke)e.push(r.referencedRule);else if(r instanceof Be||r instanceof Ce||r instanceof ze||r instanceof Ve||r instanceof Me||r instanceof pe)e=e.concat(Ff(r.definition));else if(r instanceof Fe)e=gt(L(r.definition,o=>Ff(o.definition)));else if(!(r instanceof ae))throw Error("non exhaustive match");let n=wo(r),i=t.length>1;if(n&&i){let o=Tt(t);return e.concat(Ff(o))}else return e}var wl=class extends gr{constructor(){super(...arguments),this.alternations=[]}visitAlternation(e){this.alternations.push(e)}};function PA(t,e){let r=new wl;t.accept(r);let n=r.alternations;return Qt(n,o=>{let s=ui(o.definition);return Qt(s,(a,l)=>{let c=Df([a],[],di,1);return se(c)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:o,emptyChoiceIdx:l}),type:Lt.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:o.idx,alternative:l+1}]:[]})})}function IA(t,e,r){let n=new wl;t.accept(n);let i=n.alternations;return i=Bi(i,s=>s.ignoreAmbiguities===!0),Qt(i,s=>{let a=s.idx,l=s.maxLookahead||e,c=ia(a,t,l,s),u=L1(c,s,t,r),f=M1(c,s,t,r);return u.concat(f)})}var Hh=class extends gr{constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}};function O1(t,e){let r=new wl;t.accept(r);let n=r.alternations;return Qt(n,o=>o.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:o}),type:Lt.TOO_MANY_ALTS,ruleName:t.name,occurrence:o.idx}]:[])}function DA(t,e,r){let n=[];return G(t,i=>{let o=new Hh;i.accept(o);let s=o.allProductions;G(s,a=>{let l=Al(a),c=a.maxLookahead||e,u=a.idx,m=oa(u,i,l,c)[0];if(se(gt(m))){let T=r.buildEmptyRepetitionError({topLevelRule:i,repetition:a});n.push({message:T,type:Lt.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),n}function L1(t,e,r,n){let i=[],o=lt(t,(a,l,c)=>(e.definition[c].ignoreAmbiguities===!0||G(l,u=>{let f=[c];G(t,(m,T)=>{c!==T&&Mf(m,u)&&e.definition[T].ignoreAmbiguities!==!0&&f.push(T)}),f.length>1&&!Mf(i,u)&&(i.push(u),a.push({alts:f,path:u}))}),a),[]);return L(o,a=>{let l=L(a.alts,u=>u+1);return{message:n.buildAlternationAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:l,prefixPath:a.path}),type:Lt.AMBIGUOUS_ALTS,ruleName:r.name,occurrence:e.idx,alternatives:a.alts}})}function M1(t,e,r,n){let i=lt(t,(s,a,l)=>{let c=L(a,u=>({idx:l,path:u}));return s.concat(c)},[]);return Mn(Qt(i,s=>{if(e.definition[s.idx].ignoreAmbiguities===!0)return[];let l=s.idx,c=s.path,u=qt(i,m=>e.definition[m.idx].ignoreAmbiguities!==!0&&m.idx<l&&kA(m.path,c));return L(u,m=>{let T=[m.idx+1,l+1],S=e.idx===0?"":e.idx;return{message:n.buildAlternationPrefixAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:T,prefixPath:m.path}),type:Lt.AMBIGUOUS_PREFIX_ALTS,ruleName:r.name,occurrence:S,alternatives:T}})}))}function F1(t,e,r){let n=[],i=L(e,o=>o.name);return G(t,o=>{let s=o.name;if(et(i,s)){let a=r.buildNamespaceConflictError(o);n.push({message:a,type:Lt.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:s})}}),n}function OA(t){let e=Xs(t,{errMsgProvider:TA}),r={};return G(t.rules,n=>{r[n.name]=n}),vA(r,e.errMsgProvider)}function LA(t){return t=Xs(t,{errMsgProvider:Tn}),_A(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}var MA="MismatchedTokenException",FA="NoViableAltException",UA="EarlyExitException",qA="NotAllInputParsedException",GA=[MA,FA,UA,qA];Object.freeze(GA);function zi(t){return et(GA,t.name)}var sa=class extends Error{constructor(e,r){super(e),this.token=r,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},_o=class extends sa{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=MA}},kl=class extends sa{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=FA}},Cl=class extends sa{constructor(e,r){super(e,r),this.name=qA}},El=class extends sa{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=UA}};var Wh={},zh="InRuleRecoveryException",Bh=class extends Error{constructor(e){super(e),this.name=zh}},Uf=class{initRecoverable(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=W(e,"recoveryEnabled")?e.recoveryEnabled:Tr.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=U1)}getTokenToInsert(e){let r=Eo(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return r.isInsertedInRecovery=!0,r}canTokenTypeBeInsertedInRecovery(e){return!0}canTokenTypeBeDeletedInRecovery(e){return!0}tryInRepetitionRecovery(e,r,n,i){let o=this.findReSyncTokenType(),s=this.exportLexerState(),a=[],l=!1,c=this.LA(1),u=this.LA(1),f=()=>{let m=this.LA(0),T=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:c,previous:m,ruleName:this.getCurrRuleFullName()}),S=new _o(T,c,this.LA(0));S.resyncedTokens=ui(a),this.SAVE_ERROR(S)};for(;!l;)if(this.tokenMatcher(u,i)){f();return}else if(n.call(this)){f(),e.apply(this,r);return}else this.tokenMatcher(u,o)?l=!0:(u=this.SKIP_TOKEN(),this.addToResyncTokens(u,a));this.importLexerState(s)}shouldInRepetitionRecoveryBeTried(e,r,n){return!(n===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,r)))}getFollowsForInRuleRecovery(e,r){let n=this.getCurrentGrammarPath(e,r);return this.getNextPossibleTokenTypes(n)}tryInRuleRecovery(e,r){if(this.canRecoverWithSingleTokenInsertion(e,r))return this.getTokenToInsert(e);if(this.canRecoverWithSingleTokenDeletion(e)){let n=this.SKIP_TOKEN();return this.consumeToken(),n}throw new Bh("sad sad panda")}canPerformInRuleRecovery(e,r){return this.canRecoverWithSingleTokenInsertion(e,r)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,r){if(!this.canTokenTypeBeInsertedInRecovery(e)||se(r))return!1;let n=this.LA(1);return Un(r,o=>this.tokenMatcher(n,o))!==void 0}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):!1}isInCurrentRuleReSyncSet(e){let r=this.getCurrFollowKey(),n=this.getFollowSetFromFollowKey(r);return et(n,e)}findReSyncTokenType(){let e=this.flattenFollowSet(),r=this.LA(1),n=2;for(;;){let i=Un(e,o=>xl(r,o));if(i!==void 0)return i;r=this.LA(n),n++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return Wh;let e=this.getLastExplicitRuleShortName(),r=this.getLastExplicitRuleOccurrenceIndex(),n=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:r,inRule:this.shortRuleNameToFullName(n)}}buildFullFollowKeyStack(){let e=this.RULE_STACK,r=this.RULE_OCCURRENCE_STACK;return L(e,(n,i)=>i===0?Wh:{ruleName:this.shortRuleNameToFullName(n),idxInCallingRule:r[i],inRule:this.shortRuleNameToFullName(e[i-1])})}flattenFollowSet(){let e=L(this.buildFullFollowKeyStack(),r=>this.getFollowSetFromFollowKey(r));return gt(e)}getFollowSetFromFollowKey(e){if(e===Wh)return[gn];let r=e.ruleName+e.idxInCallingRule+Sf+e.inRule;return this.resyncFollows[r]}addToResyncTokens(e,r){return this.tokenMatcher(e,gn)||r.push(e),r}reSyncTo(e){let r=[],n=this.LA(1);for(;this.tokenMatcher(n,e)===!1;)n=this.SKIP_TOKEN(),this.addToResyncTokens(n,r);return ui(r)}attemptInRepetitionRecovery(e,r,n,i,o,s,a){}getCurrentGrammarPath(e,r){let n=this.getHumanReadableRuleStack(),i=We(this.RULE_OCCURRENCE_STACK);return{ruleStack:n,occurrenceStack:i,lastTok:e,lastTokOccurrence:r}}getHumanReadableRuleStack(){return L(this.RULE_STACK,e=>this.shortRuleNameToFullName(e))}};function U1(t,e,r,n,i,o,s){let a=this.getKeyForAutomaticLookahead(n,i),l=this.firstAfterRepMap[a];if(l===void 0){let m=this.getCurrRuleFullName(),T=this.getGAstProductions()[m];l=new o(T,i).startWalking(),this.firstAfterRepMap[a]=l}let c=l.token,u=l.occurrence,f=l.isEndOfRule;this.RULE_STACK.length===1&&f&&c===void 0&&(c=gn,u=1),!(c===void 0||u===void 0)&&this.shouldInRepetitionRecoveryBeTried(c,u,s)&&this.tryInRepetitionRecovery(t,e,r,c)}function qf(t,e,r){return r|e|t}var Rte=32-8;var yi=class{constructor(e){var r;this.maxLookahead=(r=e?.maxLookahead)!==null&&r!==void 0?r:Tr.maxLookahead}validate(e){let r=this.validateNoLeftRecursion(e.rules);if(se(r)){let n=this.validateEmptyOrAlternatives(e.rules),i=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),o=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);return[...r,...n,...i,...o]}return r}validateNoLeftRecursion(e){return Qt(e,r=>Kh(r,r,Tn))}validateEmptyOrAlternatives(e){return Qt(e,r=>PA(r,Tn))}validateAmbiguousAlternationAlternatives(e,r){return Qt(e,n=>IA(n,r,Tn))}validateSomeNonEmptyLookaheadPath(e,r){return DA(e,r,Tn)}buildLookaheadForAlternation(e){return xA(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,SA)}buildLookaheadForOptional(e){return bA(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,Al(e.prodType),AA)}};var jf=class{initLooksAhead(e){this.dynamicTokensEnabled=W(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:Tr.dynamicTokensEnabled,this.maxLookahead=W(e,"maxLookahead")?e.maxLookahead:Tr.maxLookahead,this.lookaheadStrategy=W(e,"lookaheadStrategy")?e.lookaheadStrategy:new yi({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(e){G(e,r=>{this.TRACE_INIT(`${r.name} Rule Lookahead`,()=>{let{alternation:n,repetition:i,option:o,repetitionMandatory:s,repetitionMandatoryWithSeparator:a,repetitionWithSeparator:l}=q1(r);G(n,c=>{let u=c.idx===0?"":c.idx;this.TRACE_INIT(`${Cr(c)}${u}`,()=>{let f=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:c.idx,rule:r,maxLookahead:c.maxLookahead||this.maxLookahead,hasPredicates:c.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),m=qf(this.fullRuleNameToShort[r.name],256,c.idx);this.setLaFuncCache(m,f)})}),G(i,c=>{this.computeLookaheadFunc(r,c.idx,768,"Repetition",c.maxLookahead,Cr(c))}),G(o,c=>{this.computeLookaheadFunc(r,c.idx,512,"Option",c.maxLookahead,Cr(c))}),G(s,c=>{this.computeLookaheadFunc(r,c.idx,1024,"RepetitionMandatory",c.maxLookahead,Cr(c))}),G(a,c=>{this.computeLookaheadFunc(r,c.idx,1536,"RepetitionMandatoryWithSeparator",c.maxLookahead,Cr(c))}),G(l,c=>{this.computeLookaheadFunc(r,c.idx,1280,"RepetitionWithSeparator",c.maxLookahead,Cr(c))})})})}computeLookaheadFunc(e,r,n,i,o,s){this.TRACE_INIT(`${s}${r===0?"":r}`,()=>{let a=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:r,rule:e,maxLookahead:o||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i}),l=qf(this.fullRuleNameToShort[e.name],n,r);this.setLaFuncCache(l,a)})}getKeyForAutomaticLookahead(e,r){let n=this.getLastExplicitRuleShortName();return qf(n,e,r)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,r){this.lookAheadFuncsCache.set(e,r)}},Vh=class extends gr{constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}},Gf=new Vh;function q1(t){Gf.reset(),t.accept(Gf);let e=Gf.dslMethods;return Gf.reset(),e}function Jh(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}function Qh(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}function jA(t,e,r){t.children[r]===void 0?t.children[r]=[e]:t.children[r].push(e)}function HA(t,e,r){t.children[e]===void 0?t.children[e]=[r]:t.children[e].push(r)}var G1="name";function Zh(t,e){Object.defineProperty(t,G1,{enumerable:!1,configurable:!0,writable:!1,value:e})}function j1(t,e){let r=He(t),n=r.length;for(let i=0;i<n;i++){let o=r[i],s=t[o],a=s.length;for(let l=0;l<a;l++){let c=s[l];c.tokenTypeIdx===void 0&&this[c.name](c.children,e)}}}function KA(t,e){let r=function(){};Zh(r,t+"BaseSemantics");let n={visit:function(i,o){if(z(i)&&(i=i[0]),!lr(i))return this[i.name](i.children,o)},validateVisitor:function(){let i=H1(this,e);if(!se(i)){let o=L(i,s=>s.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${o.join(`

`).replace(/\n/g,`
	`)}`)}}};return r.prototype=n,r.prototype.constructor=r,r._RULE_NAMES=e,r}function WA(t,e,r){let n=function(){};Zh(n,t+"BaseSemanticsWithDefaults");let i=Object.create(r.prototype);return G(e,o=>{i[o]=j1}),n.prototype=i,n.prototype.constructor=n,n}var ey;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(ey||(ey={}));function H1(t,e){return K1(t,e)}function K1(t,e){let r=qt(e,i=>hr(t[i])===!1),n=L(r,i=>({msg:`Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,type:ey.MISSING_METHOD,methodName:i}));return Mn(n)}var Bf=class{initTreeBuilder(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=W(e,"nodeLocationTracking")?e.nodeLocationTracking:Tr.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=at,this.cstFinallyStateUpdate=at,this.cstPostTerminal=at,this.cstPostNonTerminal=at,this.cstPostRule=at;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=Qh,this.setNodeLocationFromNode=Qh,this.cstPostRule=at,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=at,this.setNodeLocationFromNode=at,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=Jh,this.setNodeLocationFromNode=Jh,this.cstPostRule=at,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=at,this.setNodeLocationFromNode=at,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=at,this.setNodeLocationFromNode=at,this.cstPostRule=at,this.setInitialNodeLocation=at;else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){let r=this.LA(1);e.location={startOffset:r.startOffset,startLine:r.startLine,startColumn:r.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){let r={name:e,children:Object.create(null)};this.setInitialNodeLocation(r),this.CST_STACK.push(r)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?(n.endOffset=r.endOffset,n.endLine=r.endLine,n.endColumn=r.endColumn):(n.startOffset=NaN,n.startLine=NaN,n.startColumn=NaN)}cstPostRuleOnlyOffset(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?n.endOffset=r.endOffset:n.startOffset=NaN}cstPostTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];jA(n,r,e),this.setNodeLocationFromToken(n.location,r)}cstPostNonTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];HA(n,r,e),this.setNodeLocationFromNode(n.location,e.location)}getBaseCstVisitorConstructor(){if(lr(this.baseCstVisitorConstructor)){let e=KA(this.className,He(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(lr(this.baseCstVisitorWithDefaultsConstructor)){let e=WA(this.className,He(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){let e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}};var zf=class{initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):aa}LA(e){let r=this.currIdx+e;return r<0||this.tokVectorLength<=r?aa:this.tokVector[r]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}};var Vf=class{ACTION(e){return e.call(this)}consume(e,r,n){return this.consumeInternal(r,e,n)}subrule(e,r,n){return this.subruleInternal(r,e,n)}option(e,r){return this.optionInternal(r,e)}or(e,r){return this.orInternal(r,e)}many(e,r){return this.manyInternal(e,r)}atLeastOne(e,r){return this.atLeastOneInternal(e,r)}CONSUME(e,r){return this.consumeInternal(e,0,r)}CONSUME1(e,r){return this.consumeInternal(e,1,r)}CONSUME2(e,r){return this.consumeInternal(e,2,r)}CONSUME3(e,r){return this.consumeInternal(e,3,r)}CONSUME4(e,r){return this.consumeInternal(e,4,r)}CONSUME5(e,r){return this.consumeInternal(e,5,r)}CONSUME6(e,r){return this.consumeInternal(e,6,r)}CONSUME7(e,r){return this.consumeInternal(e,7,r)}CONSUME8(e,r){return this.consumeInternal(e,8,r)}CONSUME9(e,r){return this.consumeInternal(e,9,r)}SUBRULE(e,r){return this.subruleInternal(e,0,r)}SUBRULE1(e,r){return this.subruleInternal(e,1,r)}SUBRULE2(e,r){return this.subruleInternal(e,2,r)}SUBRULE3(e,r){return this.subruleInternal(e,3,r)}SUBRULE4(e,r){return this.subruleInternal(e,4,r)}SUBRULE5(e,r){return this.subruleInternal(e,5,r)}SUBRULE6(e,r){return this.subruleInternal(e,6,r)}SUBRULE7(e,r){return this.subruleInternal(e,7,r)}SUBRULE8(e,r){return this.subruleInternal(e,8,r)}SUBRULE9(e,r){return this.subruleInternal(e,9,r)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,r,n=la){if(et(this.definedRulesNames,e)){let s={message:Tn.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:Lt.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(s)}this.definedRulesNames.push(e);let i=this.defineRule(e,r,n);return this[e]=i,i}OVERRIDE_RULE(e,r,n=la){let i=$A(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);let o=this.defineRule(e,r,n);return this[e]=o,o}BACKTRACK(e,r){return function(){this.isBackTrackingStack.push(1);let n=this.saveRecogState();try{return e.apply(this,r),!0}catch(i){if(zi(i))return!1;throw i}finally{this.reloadRecogState(n),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return bf(Ie(this.gastProductionsCache))}};var Xf=class{initRecognizerEngine(e,r){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=ra,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},W(r,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(z(e)){if(se(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(z(e))this.tokensMap=lt(e,(o,s)=>(o[s.name]=s,o),{});else if(W(e,"modes")&&ar(gt(Ie(e.modes)),cA)){let o=gt(Ie(e.modes)),s=Ys(o);this.tokensMap=lt(s,(a,l)=>(a[l.name]=l,a),{})}else if(st(e))this.tokensMap=We(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=gn;let n=W(e,"modes")?gt(Ie(e.modes)):Ie(e),i=ar(n,o=>se(o.categoryMatches));this.tokenMatcher=i?ra:di,pi(Ie(this.tokensMap))}defineRule(e,r,n){if(this.selfAnalysisDone)throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);let i=W(n,"resyncEnabled")?n.resyncEnabled:la.resyncEnabled,o=W(n,"recoveryValueFunc")?n.recoveryValueFunc:la.recoveryValueFunc,s=this.ruleShortNameIdx<<4+8;this.ruleShortNameIdx++,this.shortRuleNameToFull[s]=e,this.fullRuleNameToShort[e]=s;let a;return this.outputCst===!0?a=function(...u){try{this.ruleInvocationStateUpdate(s,e,this.subruleIdx),r.apply(this,u);let f=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(f),f}catch(f){return this.invokeRuleCatch(f,i,o)}finally{this.ruleFinallyStateUpdate()}}:a=function(...u){try{return this.ruleInvocationStateUpdate(s,e,this.subruleIdx),r.apply(this,u)}catch(f){return this.invokeRuleCatch(f,i,o)}finally{this.ruleFinallyStateUpdate()}},Object.assign(a,{ruleName:e,originalGrammarAction:r})}invokeRuleCatch(e,r,n){let i=this.RULE_STACK.length===1,o=r&&!this.isBackTracking()&&this.recoveryEnabled;if(zi(e)){let s=e;if(o){let a=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(a))if(s.resyncedTokens=this.reSyncTo(a),this.outputCst){let l=this.CST_STACK[this.CST_STACK.length-1];return l.recoveredNode=!0,l}else return n(e);else{if(this.outputCst){let l=this.CST_STACK[this.CST_STACK.length-1];l.recoveredNode=!0,s.partialCstResult=l}throw s}}else{if(i)return this.moveToTerminatedState(),n(e);throw s}}else throw e}optionInternal(e,r){let n=this.getKeyForAutomaticLookahead(512,r);return this.optionInternalLogic(e,r,n)}optionInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof e!="function"){o=e.DEF;let s=e.GATE;if(s!==void 0){let a=i;i=()=>s.call(this)&&a.call(this)}}else o=e;if(i.call(this)===!0)return o.call(this)}atLeastOneInternal(e,r){let n=this.getKeyForAutomaticLookahead(1024,e);return this.atLeastOneInternalLogic(e,r,n)}atLeastOneInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let s=r.GATE;if(s!==void 0){let a=i;i=()=>s.call(this)&&a.call(this)}}else o=r;if(i.call(this)===!0){let s=this.doSingleRepetition(o);for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(o)}else throw this.raiseEarlyExitException(e,rt.REPETITION_MANDATORY,r.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,r],i,1024,e,Pf)}atLeastOneSepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1536,e);this.atLeastOneSepFirstInternalLogic(e,r,n)}atLeastOneSepFirstInternalLogic(e,r,n){let i=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){i.call(this);let a=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,a,i,Sl],a,1536,e,Sl)}else throw this.raiseEarlyExitException(e,rt.REPETITION_MANDATORY_WITH_SEPARATOR,r.ERR_MSG)}manyInternal(e,r){let n=this.getKeyForAutomaticLookahead(768,e);return this.manyInternalLogic(e,r,n)}manyInternalLogic(e,r,n){let i=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let a=r.GATE;if(a!==void 0){let l=i;i=()=>a.call(this)&&l.call(this)}}else o=r;let s=!0;for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(o);this.attemptInRepetitionRecovery(this.manyInternal,[e,r],i,768,e,$f,s)}manySepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1280,e);this.manySepFirstInternalLogic(e,r,n)}manySepFirstInternalLogic(e,r,n){let i=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){i.call(this);let a=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,a,i,bl],a,1280,e,bl)}}repetitionSepSecondInternal(e,r,n,i,o){for(;n();)this.CONSUME(r),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,r,n,i,o],n,1536,e,o)}doSingleRepetition(e){let r=this.getLexerPosition();return e.call(this),this.getLexerPosition()>r}orInternal(e,r){let n=this.getKeyForAutomaticLookahead(256,r),i=z(e)?e:e.DEF,s=this.getLaFuncFromCache(n).call(this,i);if(s!==void 0)return i[s].ALT.call(this);this.raiseNoAltException(r,e.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){let e=this.LA(1),r=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new Cl(r,e))}}subruleInternal(e,r,n){let i;try{let o=n!==void 0?n.ARGS:void 0;return this.subruleIdx=r,i=e.apply(this,o),this.cstPostNonTerminal(i,n!==void 0&&n.LABEL!==void 0?n.LABEL:e.ruleName),i}catch(o){throw this.subruleInternalError(o,n,e.ruleName)}}subruleInternalError(e,r,n){throw zi(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,r!==void 0&&r.LABEL!==void 0?r.LABEL:n),delete e.partialCstResult),e}consumeInternal(e,r,n){let i;try{let o=this.LA(1);this.tokenMatcher(o,e)===!0?(this.consumeToken(),i=o):this.consumeInternalError(e,o,n)}catch(o){i=this.consumeInternalRecovery(e,r,o)}return this.cstPostTerminal(n!==void 0&&n.LABEL!==void 0?n.LABEL:e.name,i),i}consumeInternalError(e,r,n){let i,o=this.LA(0);throw n!==void 0&&n.ERR_MSG?i=n.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:r,previous:o,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new _o(i,r,o))}consumeInternalRecovery(e,r,n){if(this.recoveryEnabled&&n.name==="MismatchedTokenException"&&!this.isBackTracking()){let i=this.getFollowsForInRuleRecovery(e,r);try{return this.tryInRuleRecovery(e,i)}catch(o){throw o.name===zh?n:o}}else throw n}saveRecogState(){let e=this.errors,r=We(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}}reloadRecogState(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK}ruleInvocationStateUpdate(e,r,n){this.RULE_OCCURRENCE_STACK.push(n),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(r)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){let e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),gn)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}};var Yf=class{initErrorHandler(e){this._errors=[],this.errorMessageProvider=W(e,"errorMessageProvider")?e.errorMessageProvider:Tr.errorMessageProvider}SAVE_ERROR(e){if(zi(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:We(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return We(this._errors)}set errors(e){this._errors=e}raiseEarlyExitException(e,r,n){let i=this.getCurrRuleFullName(),o=this.getGAstProductions()[i],a=oa(e,o,r,this.maxLookahead)[0],l=[];for(let u=1;u<=this.maxLookahead;u++)l.push(this.LA(u));let c=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:a,actual:l,previous:this.LA(0),customUserDescription:n,ruleName:i});throw this.SAVE_ERROR(new El(c,this.LA(1),this.LA(0)))}raiseNoAltException(e,r){let n=this.getCurrRuleFullName(),i=this.getGAstProductions()[n],o=ia(e,i,this.maxLookahead),s=[];for(let c=1;c<=this.maxLookahead;c++)s.push(this.LA(c));let a=this.LA(0),l=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:o,actual:s,previous:a,customUserDescription:r,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new kl(l,this.LA(1),a))}};var Jf=class{initContentAssist(){}computeContentAssist(e,r){let n=this.gastProductionsCache[e];if(lr(n))throw Error(`Rule ->${e}<- does not exist in this grammar.`);return Df([n],r,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){let r=Gt(e.ruleStack),i=this.getGAstProductions()[r];return new Nf(i,e).startWalking()}};var ed={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(ed);var BA=!0,zA=Math.pow(2,8)-1,XA=_f({name:"RECORDING_PHASE_TOKEN",pattern:mt.NA});pi([XA]);var YA=Eo(XA,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(YA);var B1={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},Qf=class{initGastRecorder(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let e=0;e<10;e++){let r=e>0?e:"";this[`CONSUME${r}`]=function(n,i){return this.consumeInternalRecord(n,e,i)},this[`SUBRULE${r}`]=function(n,i){return this.subruleInternalRecord(n,e,i)},this[`OPTION${r}`]=function(n){return this.optionInternalRecord(n,e)},this[`OR${r}`]=function(n){return this.orInternalRecord(n,e)},this[`MANY${r}`]=function(n){this.manyInternalRecord(e,n)},this[`MANY_SEP${r}`]=function(n){this.manySepFirstInternalRecord(e,n)},this[`AT_LEAST_ONE${r}`]=function(n){this.atLeastOneInternalRecord(e,n)},this[`AT_LEAST_ONE_SEP${r}`]=function(n){this.atLeastOneSepFirstInternalRecord(e,n)}}this.consume=function(e,r,n){return this.consumeInternalRecord(r,e,n)},this.subrule=function(e,r,n){return this.subruleInternalRecord(r,e,n)},this.option=function(e,r){return this.optionInternalRecord(r,e)},this.or=function(e,r){return this.orInternalRecord(r,e)},this.many=function(e,r){this.manyInternalRecord(e,r)},this.atLeastOne=function(e,r){this.atLeastOneInternalRecord(e,r)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{let e=this;for(let r=0;r<10;r++){let n=r>0?r:"";delete e[`CONSUME${n}`],delete e[`SUBRULE${n}`],delete e[`OPTION${n}`],delete e[`OR${n}`],delete e[`MANY${n}`],delete e[`MANY_SEP${n}`],delete e[`AT_LEAST_ONE${n}`],delete e[`AT_LEAST_ONE_SEP${n}`]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})}ACTION_RECORD(e){}BACKTRACK_RECORD(e,r){return()=>!0}LA_RECORD(e){return aa}topLevelRuleRecord(e,r){try{let n=new yr({definition:[],name:e});return n.name=e,this.recordingProdStack.push(n),r.call(this),this.recordingProdStack.pop(),n}catch(n){if(n.KNOWN_RECORDER_ERROR!==!0)try{n.message=n.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw n}throw n}}optionInternalRecord(e,r){return Nl.call(this,Ce,e,r)}atLeastOneInternalRecord(e,r){Nl.call(this,ze,r,e)}atLeastOneSepFirstInternalRecord(e,r){Nl.call(this,Ve,r,e,BA)}manyInternalRecord(e,r){Nl.call(this,pe,r,e)}manySepFirstInternalRecord(e,r){Nl.call(this,Me,r,e,BA)}orInternalRecord(e,r){return z1.call(this,e,r)}subruleInternalRecord(e,r,n){if(Zf(r),!e||W(e,"ruleName")===!1){let a=new Error(`<SUBRULE${VA(r)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw a.KNOWN_RECORDER_ERROR=!0,a}let i=Fn(this.recordingProdStack),o=e.ruleName,s=new ke({idx:r,nonTerminalName:o,label:n?.LABEL,referencedRule:void 0});return i.definition.push(s),this.outputCst?B1:ed}consumeInternalRecord(e,r,n){if(Zf(r),!Oh(e)){let s=new Error(`<CONSUME${VA(r)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw s.KNOWN_RECORDER_ERROR=!0,s}let i=Fn(this.recordingProdStack),o=new ae({idx:r,terminalType:e,label:n?.LABEL});return i.definition.push(o),YA}};function Nl(t,e,r,n=!1){Zf(r);let i=Fn(this.recordingProdStack),o=hr(e)?e:e.DEF,s=new t({definition:[],idx:r});return n&&(s.separator=e.SEP),W(e,"MAX_LOOKAHEAD")&&(s.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(s),o.call(this),i.definition.push(s),this.recordingProdStack.pop(),ed}function z1(t,e){Zf(e);let r=Fn(this.recordingProdStack),n=z(t)===!1,i=n===!1?t:t.DEF,o=new Fe({definition:[],idx:e,ignoreAmbiguities:n&&t.IGNORE_AMBIGUITIES===!0});W(t,"MAX_LOOKAHEAD")&&(o.maxLookahead=t.MAX_LOOKAHEAD);let s=hl(i,a=>hr(a.GATE));return o.hasPredicates=s,r.definition.push(o),G(i,a=>{let l=new Be({definition:[]});o.definition.push(l),W(a,"IGNORE_AMBIGUITIES")?l.ignoreAmbiguities=a.IGNORE_AMBIGUITIES:W(a,"GATE")&&(l.ignoreAmbiguities=!0),this.recordingProdStack.push(l),a.ALT.call(this),this.recordingProdStack.pop()}),ed}function VA(t){return t===0?"":`${t}`}function Zf(t){if(t<0||t>zA){let e=new Error(`Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${zA+1}`);throw e.KNOWN_RECORDER_ERROR=!0,e}}var td=class{initPerformanceTracer(e){if(W(e,"traceInitPerf")){let r=e.traceInitPerf,n=typeof r=="number";this.traceInitMaxIdent=n?r:1/0,this.traceInitPerf=n?r>0:r}else this.traceInitMaxIdent=0,this.traceInitPerf=Tr.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;let n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${n}--> <${e}>`);let{time:i,value:o}=gl(r),s=i>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s(`${n}<-- <${e}> time: ${i}ms`),this.traceInitIndent--,o}else return r()}};function JA(t,e){e.forEach(r=>{let n=r.prototype;Object.getOwnPropertyNames(n).forEach(i=>{if(i==="constructor")return;let o=Object.getOwnPropertyDescriptor(n,i);o&&(o.get||o.set)?Object.defineProperty(t.prototype,i,o):t.prototype[i]=r.prototype[i]})})}var aa=Eo(gn,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(aa);var Tr=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:hi,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),la=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:!0}),Lt;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(Lt||(Lt={}));function rd(t=void 0){return function(){return t}}var $l=class t{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let e;this.selfAnalysisDone=!0;let r=this.className;this.TRACE_INIT("toFastProps",()=>{Tl(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),G(this.definedRulesNames,i=>{let s=this[i].originalGrammarAction,a;this.TRACE_INIT(`${i} Rule`,()=>{a=this.topLevelRuleRecord(i,s)}),this.gastProductionsCache[i]=a})}finally{this.disableRecording()}});let n=[];if(this.TRACE_INIT("Grammar Resolving",()=>{n=OA({rules:Ie(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(n)}),this.TRACE_INIT("Grammar Validations",()=>{if(se(n)&&this.skipValidations===!1){let i=LA({rules:Ie(this.gastProductionsCache),tokenTypes:Ie(this.tokensMap),errMsgProvider:Tn,grammarName:r}),o=EA({lookaheadStrategy:this.lookaheadStrategy,rules:Ie(this.gastProductionsCache),tokenTypes:Ie(this.tokensMap),grammarName:r});this.definitionErrors=this.definitionErrors.concat(i,o)}}),se(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{let i=HS(Ie(this.gastProductionsCache));this.resyncFollows=i}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var i,o;(o=(i=this.lookaheadStrategy).initialize)===null||o===void 0||o.call(i,{rules:Ie(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(Ie(this.gastProductionsCache))})),!t.DEFER_DEFINITION_ERRORS_HANDLING&&!se(this.definitionErrors))throw e=L(this.definitionErrors,i=>i.message),new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`)})}constructor(e,r){this.definitionErrors=[],this.selfAnalysisDone=!1;let n=this;if(n.initErrorHandler(r),n.initLexerAdapter(),n.initLooksAhead(r),n.initRecognizerEngine(e,r),n.initRecoverable(r),n.initTreeBuilder(r),n.initContentAssist(),n.initGastRecorder(r),n.initPerformanceTracer(r),W(r,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=W(r,"skipValidations")?r.skipValidations:Tr.skipValidations}};$l.DEFER_DEFINITION_ERRORS_HANDLING=!1;JA($l,[Uf,jf,Bf,zf,Xf,Vf,Yf,Jf,Qf,td]);var Pl=class extends $l{constructor(e,r=Tr){let n=We(r);n.outputCst=!1,super(e,n)}};function No(t,e,r){return`${t.name}_${e}_${r}`}var Vi=1,X1=2,QA=4,ZA=5;var fa=7,Y1=8,J1=9,Q1=10,Z1=11,ew=12,Il=class{constructor(e){this.target=e}isEpsilon(){return!1}},ca=class extends Il{constructor(e,r){super(e),this.tokenType=r}},Dl=class extends Il{constructor(e){super(e)}isEpsilon(){return!0}},ua=class extends Il{constructor(e,r,n){super(e),this.rule=r,this.followState=n}isEpsilon(){return!0}};function tw(t){let e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};eU(e,t);let r=t.length;for(let n=0;n<r;n++){let i=t[n],o=$o(e,i,i);o!==void 0&&fU(e,i,o)}return e}function eU(t,e){let r=e.length;for(let n=0;n<r;n++){let i=e[n],o=jt(t,i,void 0,{type:X1}),s=jt(t,i,void 0,{type:fa});o.stop=s,t.ruleToStartState.set(i,o),t.ruleToStopState.set(i,s)}}function rw(t,e,r){return r instanceof ae?ry(t,e,r.terminalType,r):r instanceof ke?uU(t,e,r):r instanceof Fe?oU(t,e,r):r instanceof Ce?sU(t,e,r):r instanceof pe?tU(t,e,r):r instanceof Me?rU(t,e,r):r instanceof ze?nU(t,e,r):r instanceof Ve?iU(t,e,r):$o(t,e,r)}function tU(t,e,r){let n=jt(t,e,r,{type:ZA});Xi(t,n);let i=da(t,e,n,r,$o(t,e,r));return iw(t,e,r,i)}function rU(t,e,r){let n=jt(t,e,r,{type:ZA});Xi(t,n);let i=da(t,e,n,r,$o(t,e,r)),o=ry(t,e,r.separator,r);return iw(t,e,r,i,o)}function nU(t,e,r){let n=jt(t,e,r,{type:QA});Xi(t,n);let i=da(t,e,n,r,$o(t,e,r));return nw(t,e,r,i)}function iU(t,e,r){let n=jt(t,e,r,{type:QA});Xi(t,n);let i=da(t,e,n,r,$o(t,e,r)),o=ry(t,e,r.separator,r);return nw(t,e,r,i,o)}function oU(t,e,r){let n=jt(t,e,r,{type:Vi});Xi(t,n);let i=L(r.definition,s=>rw(t,e,s));return da(t,e,n,r,...i)}function sU(t,e,r){let n=jt(t,e,r,{type:Vi});Xi(t,n);let i=da(t,e,n,r,$o(t,e,r));return aU(t,e,r,i)}function $o(t,e,r){let n=qt(L(r.definition,i=>rw(t,e,i)),i=>i!==void 0);return n.length===1?n[0]:n.length===0?void 0:cU(t,n)}function nw(t,e,r,n,i){let o=n.left,s=n.right,a=jt(t,e,r,{type:Z1});Xi(t,a);let l=jt(t,e,r,{type:ew});return o.loopback=a,l.loopback=a,t.decisionMap[No(e,i?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",r.idx)]=a,Nt(s,a),i===void 0?(Nt(a,o),Nt(a,l)):(Nt(a,l),Nt(a,i.left),Nt(i.right,o)),{left:o,right:l}}function iw(t,e,r,n,i){let o=n.left,s=n.right,a=jt(t,e,r,{type:Q1});Xi(t,a);let l=jt(t,e,r,{type:ew}),c=jt(t,e,r,{type:J1});return a.loopback=c,l.loopback=c,Nt(a,o),Nt(a,l),Nt(s,c),i!==void 0?(Nt(c,l),Nt(c,i.left),Nt(i.right,o)):Nt(c,a),t.decisionMap[No(e,i?"RepetitionWithSeparator":"Repetition",r.idx)]=a,{left:a,right:l}}function aU(t,e,r,n){let i=n.left,o=n.right;return Nt(i,o),t.decisionMap[No(e,"Option",r.idx)]=i,n}function Xi(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function da(t,e,r,n,...i){let o=jt(t,e,n,{type:Y1,start:r});r.end=o;for(let a of i)a!==void 0?(Nt(r,a.left),Nt(a.right,o)):Nt(r,o);let s={left:r,right:o};return t.decisionMap[No(e,lU(n),n.idx)]=r,s}function lU(t){if(t instanceof Fe)return"Alternation";if(t instanceof Ce)return"Option";if(t instanceof pe)return"Repetition";if(t instanceof Me)return"RepetitionWithSeparator";if(t instanceof ze)return"RepetitionMandatory";if(t instanceof Ve)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function cU(t,e){let r=e.length;for(let o=0;o<r-1;o++){let s=e[o],a;s.left.transitions.length===1&&(a=s.left.transitions[0]);let l=a instanceof ua,c=a,u=e[o+1].left;s.left.type===Vi&&s.right.type===Vi&&a!==void 0&&(l&&c.followState===s.right||a.target===s.right)?(l?c.followState=u:a.target=u,dU(t,s.right)):Nt(s.right,u)}let n=e[0],i=e[r-1];return{left:n.left,right:i.right}}function ry(t,e,r,n){let i=jt(t,e,n,{type:Vi}),o=jt(t,e,n,{type:Vi});return ny(i,new ca(o,r)),{left:i,right:o}}function uU(t,e,r){let n=r.referencedRule,i=t.ruleToStartState.get(n),o=jt(t,e,r,{type:Vi}),s=jt(t,e,r,{type:Vi}),a=new ua(i,n,s);return ny(o,a),{left:o,right:s}}function fU(t,e,r){let n=t.ruleToStartState.get(e);Nt(n,r.left);let i=t.ruleToStopState.get(e);return Nt(r.right,i),{left:n,right:i}}function Nt(t,e){let r=new Dl(e);ny(t,r)}function jt(t,e,r,n){let i=Object.assign({atn:t,production:r,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},n);return t.states.push(i),i}function ny(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function dU(t,e){t.states.splice(t.states.indexOf(e),1)}var Ol={},pa=class{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){let r=iy(e);r in this.map||(this.map[r]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return L(this.configs,e=>e.alt)}get key(){let e="";for(let r in this.map)e+=r+":";return e}};function iy(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(r=>r.stateNumber.toString()).join("_")}`}function pU(t,e){let r={};return n=>{let i=n.toString(),o=r[i];return o!==void 0||(o={atnStartState:t,decision:e,states:{}},r[i]=o),o}}var nd=class{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,r){this.predicates[e]=r}toString(){let e="",r=this.predicates.length;for(let n=0;n<r;n++)e+=this.predicates[n]===!0?"1":"0";return e}},ow=new nd,Ll=class extends yi{constructor(e){var r;super(),this.logging=(r=e?.logging)!==null&&r!==void 0?r:n=>console.log(n)}initialize(e){this.atn=tw(e.rules),this.dfas=mU(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){let{prodOccurrence:r,rule:n,hasPredicates:i,dynamicTokensEnabled:o}=e,s=this.dfas,a=this.logging,l=No(n,"Alternation",r),u=this.atn.decisionMap[l].decision,f=L(Lf({maxLookahead:1,occurrence:r,prodType:"Alternation",rule:n}),m=>L(m,T=>T[0]));if(sw(f,!1)&&!o){let m=lt(f,(T,S,A)=>(G(S,N=>{N&&(T[N.tokenTypeIdx]=A,G(N.categoryMatches,k=>{T[k]=A}))}),T),{});return i?function(T){var S;let A=this.LA(1),N=m[A.tokenTypeIdx];if(T!==void 0&&N!==void 0){let k=(S=T[N])===null||S===void 0?void 0:S.GATE;if(k!==void 0&&k.call(this)===!1)return}return N}:function(){let T=this.LA(1);return m[T.tokenTypeIdx]}}else return i?function(m){let T=new nd,S=m===void 0?0:m.length;for(let N=0;N<S;N++){let k=m?.[N].GATE;T.set(N,k===void 0||k.call(this))}let A=oy.call(this,s,u,T,a);return typeof A=="number"?A:void 0}:function(){let m=oy.call(this,s,u,ow,a);return typeof m=="number"?m:void 0}}buildLookaheadForOptional(e){let{prodOccurrence:r,rule:n,prodType:i,dynamicTokensEnabled:o}=e,s=this.dfas,a=this.logging,l=No(n,i,r),u=this.atn.decisionMap[l].decision,f=L(Lf({maxLookahead:1,occurrence:r,prodType:i,rule:n}),m=>L(m,T=>T[0]));if(sw(f)&&f[0][0]&&!o){let m=f[0],T=gt(m);if(T.length===1&&se(T[0].categoryMatches)){let A=T[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===A}}else{let S=lt(T,(A,N)=>(N!==void 0&&(A[N.tokenTypeIdx]=!0,G(N.categoryMatches,k=>{A[k]=!0})),A),{});return function(){let A=this.LA(1);return S[A.tokenTypeIdx]===!0}}}return function(){let m=oy.call(this,s,u,ow,a);return typeof m=="object"?!1:m===0}}};function sw(t,e=!0){let r=new Set;for(let n of t){let i=new Set;for(let o of n){if(o===void 0){if(e)break;return!1}let s=[o.tokenTypeIdx].concat(o.categoryMatches);for(let a of s)if(r.has(a)){if(!i.has(a))return!1}else r.add(a),i.add(a)}}return!0}function mU(t){let e=t.decisionStates.length,r=Array(e);for(let n=0;n<e;n++)r[n]=pU(t.decisionStates[n],n);return r}function oy(t,e,r,n){let i=t[e](r),o=i.start;if(o===void 0){let a=wU(i.atnStartState);o=cw(i,lw(a)),i.start=o}return hU.apply(this,[i,o,r,n])}function hU(t,e,r,n){let i=e,o=1,s=[],a=this.LA(o++);for(;;){let l=xU(i,a);if(l===void 0&&(l=yU.apply(this,[t,i,a,o,r,n])),l===Ol)return RU(s,i,a);if(l.isAcceptState===!0)return l.prediction;i=l,s.push(a),a=this.LA(o++)}}function yU(t,e,r,n,i,o){let s=bU(e.configs,r,i);if(s.size===0)return aw(t,e,r,Ol),Ol;let a=lw(s),l=AU(s,i);if(l!==void 0)a.isAcceptState=!0,a.prediction=l,a.configs.uniqueAlt=l;else if(_U(s)){let c=DS(s.alts);a.isAcceptState=!0,a.prediction=c,a.configs.uniqueAlt=c,gU.apply(this,[t,n,s.alts,o])}return a=aw(t,e,r,a),a}function gU(t,e,r,n){let i=[];for(let c=1;c<=e;c++)i.push(this.LA(c).tokenType);let o=t.atnStartState,s=o.rule,a=o.production,l=TU({topLevelRule:s,ambiguityIndices:r,production:a,prefixPath:i});n(l)}function TU(t){let e=L(t.prefixPath,i=>mi(i)).join(", "),r=t.production.idx===0?"":t.production.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${vU(t.production)}${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n}function vU(t){if(t instanceof ke)return"SUBRULE";if(t instanceof Ce)return"OPTION";if(t instanceof Fe)return"OR";if(t instanceof ze)return"AT_LEAST_ONE";if(t instanceof Ve)return"AT_LEAST_ONE_SEP";if(t instanceof Me)return"MANY_SEP";if(t instanceof pe)return"MANY";if(t instanceof ae)return"CONSUME";throw Error("non exhaustive match")}function RU(t,e,r){let n=Qt(e.configs.elements,o=>o.state.transitions),i=GS(n.filter(o=>o instanceof ca).map(o=>o.tokenType),o=>o.tokenTypeIdx);return{actualToken:r,possibleTokenTypes:i,tokenPath:t}}function xU(t,e){return t.edges[e.tokenTypeIdx]}function bU(t,e,r){let n=new pa,i=[];for(let s of t.elements){if(r.is(s.alt)===!1)continue;if(s.state.type===fa){i.push(s);continue}let a=s.state.transitions.length;for(let l=0;l<a;l++){let c=s.state.transitions[l],u=SU(c,e);u!==void 0&&n.add({state:u,alt:s.alt,stack:s.stack})}}let o;if(i.length===0&&n.size===1&&(o=n),o===void 0){o=new pa;for(let s of n.elements)id(s,o)}if(i.length>0&&!CU(o))for(let s of i)o.add(s);return o}function SU(t,e){if(t instanceof ca&&xl(e,t.tokenType))return t.target}function AU(t,e){let r;for(let n of t.elements)if(e.is(n.alt)===!0){if(r===void 0)r=n.alt;else if(r!==n.alt)return}return r}function lw(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function aw(t,e,r,n){return n=cw(t,n),e.edges[r.tokenTypeIdx]=n,n}function cw(t,e){if(e===Ol)return e;let r=e.configs.key,n=t.states[r];return n!==void 0?n:(e.configs.finalize(),t.states[r]=e,e)}function wU(t){let e=new pa,r=t.transitions.length;for(let n=0;n<r;n++){let o={state:t.transitions[n].target,alt:n,stack:[]};id(o,e)}return e}function id(t,e){let r=t.state;if(r.type===fa){if(t.stack.length>0){let i=[...t.stack],s={state:i.pop(),alt:t.alt,stack:i};id(s,e)}else e.add(t);return}r.epsilonOnlyTransitions||e.add(t);let n=r.transitions.length;for(let i=0;i<n;i++){let o=r.transitions[i],s=kU(t,o);s!==void 0&&id(s,e)}}function kU(t,e){if(e instanceof Dl)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof ua){let r=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:r}}}function CU(t){for(let e of t.elements)if(e.state.type===fa)return!0;return!1}function EU(t){for(let e of t.elements)if(e.state.type!==fa)return!1;return!0}function _U(t){if(EU(t))return!0;let e=NU(t.elements);return $U(e)&&!PU(e)}function NU(t){let e=new Map;for(let r of t){let n=iy(r,!1),i=e.get(n);i===void 0&&(i={},e.set(n,i)),i[r.alt]=!0}return e}function $U(t){for(let e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function PU(t){for(let e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}var sy=de(io(),1);var od=class{constructor(){this.nodeStack=[]}get current(){return this.nodeStack[this.nodeStack.length-1]}buildRootNode(e){return this.rootNode=new ly(e),this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){let r=new ld;return r.grammarSource=e,r.root=this.rootNode,this.current.content.push(r),this.nodeStack.push(r),r}buildLeafNode(e,r){let n=new ad(e.startOffset,e.image.length,qa(e),e.tokenType,!1);return n.grammarSource=r,n.root=this.rootNode,this.current.content.push(n),n}removeNode(e){let r=e.container;if(r){let n=r.content.indexOf(e);n>=0&&r.content.splice(n,1)}}construct(e){let r=this.current;typeof e.$type=="string"&&(this.current.astNode=e),e.$cstNode=r;let n=this.nodeStack.pop();n?.content.length===0&&this.removeNode(n)}addHiddenTokens(e){for(let r of e){let n=new ad(r.startOffset,r.image.length,qa(r),r.tokenType,!0);n.root=this.rootNode,this.addHiddenToken(this.rootNode,n)}}addHiddenToken(e,r){let{offset:n,end:i}=r;for(let o=0;o<e.content.length;o++){let s=e.content[o],{offset:a,end:l}=s;if(wn(s)&&n>a&&i<l){this.addHiddenToken(s,r);return}else if(i<=a){e.content.splice(o,0,r);return}}e.content.push(r)}},sd=class{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return!1}get astNode(){var e,r;let n=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(r=this.container)===null||r===void 0?void 0:r.astNode;if(!n)throw new Error("This node has no associated AST element");return n}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}},ad=class extends sd{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,r,n,i,o=!1){super(),this._hidden=o,this._offset=e,this._tokenType=i,this._length=r,this._range=n}},ld=class extends sd{constructor(){super(...arguments),this.content=new ay(this)}get children(){return this.content}get offset(){var e,r;return(r=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&r!==void 0?r:0}get length(){return this.end-this.offset}get end(){var e,r;return(r=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&r!==void 0?r:0}get range(){let e=this.firstNonHiddenNode,r=this.lastNonHiddenNode;if(e&&r){if(this._rangeCache===void 0){let{range:n}=e,{range:i}=r;this._rangeCache={start:n.start,end:i.end.line<n.start.line?n.start:i.end}}return this._rangeCache}else return{start:sy.Position.create(0,0),end:sy.Position.create(0,0)}}get firstNonHiddenNode(){for(let e of this.content)if(!e.hidden)return e;return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){let r=this.content[e];if(!r.hidden)return r}return this.content[this.content.length-1]}},ay=class t extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,t.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,r,...n){return this.addParents(n),super.splice(e,r,...n)}addParents(e){for(let r of e)r.container=this.parent}},ly=class extends ld{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e??""}};var uy=Symbol("Datatype");function cy(t){return t.$type===uy}var uw="\u200B",fw=t=>t.endsWith(uw)?t:t+uw,cd=class{constructor(e){this._unorderedGroups=new Map,this.lexer=e.parser.Lexer;let r=this.lexer.definition;this.wrapper=new dy(r,Object.assign(Object.assign({},e.parser.ParserConfig),{errorMessageProvider:e.parser.ParserErrorMessageProvider}))}alternatives(e,r){this.wrapper.wrapOr(e,r)}optional(e,r){this.wrapper.wrapOption(e,r)}many(e,r){this.wrapper.wrapMany(e,r)}atLeastOne(e,r){this.wrapper.wrapAtLeastOne(e,r)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}},ud=class extends cd{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new od,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,r){let n=e.fragment?void 0:Mr(e)?uy:pn(e),i=this.wrapper.DEFINE_RULE(fw(e.name),this.startImplementation(n,r).bind(this));return e.entry&&(this.mainRule=i),i}parse(e){this.nodeBuilder.buildRootNode(e);let r=this.lexer.tokenize(e);this.wrapper.input=r.tokens;let n=this.mainRule.call(this.wrapper,{});return this.nodeBuilder.addHiddenTokens(r.hidden),this.unorderedGroups.clear(),{value:n,lexerErrors:r.errors,parserErrors:this.wrapper.errors}}startImplementation(e,r){return n=>{if(!this.isRecording()){let o={$type:e};this.stack.push(o),e===uy&&(o.value="")}let i;try{i=r(n)}catch{i=void 0}return!this.isRecording()&&i===void 0&&(i=this.construct()),i}}consume(e,r,n){let i=this.wrapper.wrapConsume(e,r);if(!this.isRecording()&&!i.isInsertedInRecovery){let o=this.nodeBuilder.buildLeafNode(i,n),{assignment:s,isCrossRef:a}=this.getAssignment(n),l=this.current;if(s){let c=dt(n)?i.image:this.converter.convert(i.image,o);this.assign(s.operator,s.feature,c,o,a)}else if(cy(l)){let c=i.image;dt(n)||(c=this.converter.convert(c,o).toString()),l.value+=c}}}subrule(e,r,n,i){let o;this.isRecording()||(o=this.nodeBuilder.buildCompositeNode(n));let s=this.wrapper.wrapSubrule(e,r,i);!this.isRecording()&&o&&o.length>0&&this.performSubruleAssignment(s,n,o)}performSubruleAssignment(e,r,n){let{assignment:i,isCrossRef:o}=this.getAssignment(r);if(i)this.assign(i.operator,i.feature,e,n,o);else if(!i){let s=this.current;if(cy(s))s.value+=e.toString();else{let a=e.$type,l=this.assignWithoutOverride(e,s);a&&(l.$type=a);let c=l;this.stack.pop(),this.stack.push(c)}}}action(e,r){if(!this.isRecording()){let n=this.current;if(!n.$cstNode&&r.feature&&r.operator){n=this.construct(!1);let o=n.$cstNode.feature;this.nodeBuilder.buildCompositeNode(o)}let i={$type:e};this.stack.pop(),this.stack.push(i),r.feature&&r.operator&&this.assign(r.operator,r.feature,n,n.$cstNode,!1)}}construct(e=!0){if(this.isRecording())return;let r=this.current;return bv(r),this.nodeBuilder.construct(r),e&&this.stack.pop(),cy(r)?this.converter.convert(r.value,r.$cstNode):(this.assignMandatoryProperties(r),r)}assignMandatoryProperties(e){let r=this.astReflection.getTypeMetaData(e.$type);for(let n of r.mandatory){let i=e[n.name];n.type==="array"&&!Array.isArray(i)?e[n.name]=[]:n.type==="boolean"&&i===void 0&&(e[n.name]=!1)}}getAssignment(e){if(!this.assignmentMap.has(e)){let r=Pe(e,xe);this.assignmentMap.set(e,{assignment:r,isCrossRef:r?Vt(r.terminal):!1})}return this.assignmentMap.get(e)}assign(e,r,n,i,o){let s=this.current,a;switch(o&&typeof n=="string"?a=this.linker.buildReference(s,r,i,n):a=n,e){case"=":{s[r]=a;break}case"?=":{s[r]=!0;break}case"+=":Array.isArray(s[r])||(s[r]=[]),s[r].push(a)}}assignWithoutOverride(e,r){for(let[n,i]of Object.entries(r)){let o=e[n];o===void 0?e[n]=i:Array.isArray(o)&&Array.isArray(i)&&(i.push(...o),e[n]=i)}return e}get definitionErrors(){return this.wrapper.definitionErrors}},fy=class{buildMismatchTokenMessage(e){return hi.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return hi.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return hi.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return hi.buildEarlyExitMessage(e)}},Ml=class extends fy{buildMismatchTokenMessage({expected:e,actual:r}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${r.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}},fd=class extends cd{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();let r=this.lexer.tokenize(e);return this.tokens=r.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,r){let n=this.wrapper.DEFINE_RULE(fw(e.name),this.startImplementation(r).bind(this));return e.entry&&(this.mainRule=n),n}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return r=>{let n=this.keepStackSize();try{e(r)}finally{this.resetStackSize(n)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){let e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,r,n){this.wrapper.wrapConsume(e,r),this.isRecording()||(this.lastElementStack=[...this.elementStack,n],this.nextTokenIndex=this.currIdx+1)}subrule(e,r,n,i){this.before(n),this.wrapper.wrapSubrule(e,r,i),this.after(n)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){let r=this.elementStack.lastIndexOf(e);r>=0&&this.elementStack.splice(r)}}get currIdx(){return this.wrapper.currIdx}},IU={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new Ml},dy=class extends Pl{constructor(e,r){let n=r&&"maxLookahead"in r;super(e,Object.assign(Object.assign(Object.assign({},IU),{lookaheadStrategy:n?new yi({maxLookahead:r.maxLookahead}):new Ll}),r))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,r){return this.RULE(e,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,r){return this.consume(e,r)}wrapSubrule(e,r,n){return this.subrule(e,r,{ARGS:[n]})}wrapOr(e,r){this.or(e,r)}wrapOption(e,r){this.option(e,r)}wrapMany(e,r){this.many(e,r)}wrapAtLeastOne(e,r){this.atLeastOne(e,r)}};var Fl=class extends Error{constructor(e,r){super(e?`${r} at ${e.range.start.line}:${e.range.start.character}`:r)}};function dd(t){throw new Error("Error! The input value was not handled.")}function md(t,e,r){return DU({parser:e,tokens:r,rules:new Map,ruleNames:new Map},t),e}function DU(t,e){let r=ds(e,!1),n=ie(e.rules).filter(K).filter(i=>r.has(i));for(let i of n){let o=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});o.rules.set(i.name,t.parser.rule(i,Po(o,i.definition)))}}function Po(t,e,r=!1){let n;if(dt(e))n=GU(t,e);else if(Ne(e))n=OU(t,e);else if(xe(e))n=Po(t,e.terminal);else if(Vt(e))n=dw(t,e);else if($e(e))n=LU(t,e);else if(Pr(e))n=FU(t,e);else if(Ir(e))n=UU(t,e);else if(Ft(e))n=qU(t,e);else throw new Fl(e.$cstNode,`Unexpected element type: ${e.$type}`);return pw(t,r?void 0:pd(e),n,e.cardinality)}function OU(t,e){let r=pn(e);return()=>t.parser.action(r,e)}function LU(t,e){let r=e.rule.ref;if(K(r)){let n=t.subrule++,i=e.arguments.length>0?MU(r,e.arguments):()=>({});return o=>t.parser.subrule(n,mw(t,r),e,i(o))}else if(Ae(r)){let n=t.consume++,i=py(t,r.name);return()=>t.parser.consume(n,i,e)}else if(r)dd(r);else throw new Fl(e.$cstNode,`Undefined rule type: ${e.$type}`)}function MU(t,e){let r=e.map(n=>gi(n.value));return n=>{let i={};for(let o=0;o<r.length;o++){let s=t.parameters[o],a=r[o];i[s.name]=a(n)}return i}}function gi(t){if(GT(t)){let e=gi(t.left),r=gi(t.right);return n=>e(n)||r(n)}else if(UT(t)){let e=gi(t.left),r=gi(t.right);return n=>e(n)&&r(n)}else if(BT(t)){let e=gi(t.value);return r=>!e(r)}else if(ts(t)){let e=t.parameter.ref.name;return r=>r!==void 0&&r[e]===!0}else if(KT(t)){let e=!!t.true;return()=>e}dd(t)}function FU(t,e){if(e.elements.length===1)return Po(t,e.elements[0]);{let r=[];for(let i of e.elements){let o={ALT:Po(t,i,!0)},s=pd(i);s&&(o.GATE=gi(s)),r.push(o)}let n=t.or++;return i=>t.parser.alternatives(n,r.map(o=>{let s={ALT:()=>o.ALT(i)},a=o.GATE;return a&&(s.GATE=()=>a(i)),s}))}}function UU(t,e){if(e.elements.length===1)return Po(t,e.elements[0]);let r=[];for(let a of e.elements){let l={ALT:Po(t,a,!0)},c=pd(a);c&&(l.GATE=gi(c)),r.push(l)}let n=t.or++,i=(a,l)=>{let c=l.getRuleStack().join("-");return`uGroup_${a}_${c}`},o=a=>t.parser.alternatives(n,r.map((l,c)=>{let u={ALT:()=>!0},f=t.parser;u.ALT=()=>{if(l.ALT(a),!f.isRecording()){let T=i(n,f);f.unorderedGroups.get(T)||f.unorderedGroups.set(T,[]);let S=f.unorderedGroups.get(T);typeof S?.[c]>"u"&&(S[c]=!0)}};let m=l.GATE;return m?u.GATE=()=>m(a):u.GATE=()=>{let T=f.unorderedGroups.get(i(n,f));return!T?.[c]},u})),s=pw(t,pd(e),o,"*");return a=>{s(a),t.parser.isRecording()||t.parser.unorderedGroups.delete(i(n,t.parser))}}function qU(t,e){let r=e.elements.map(n=>Po(t,n));return n=>r.forEach(i=>i(n))}function pd(t){if(Ft(t))return t.guardCondition}function dw(t,e,r=e.terminal){if(r)if($e(r)&&K(r.rule.ref)){let n=t.subrule++;return i=>t.parser.subrule(n,mw(t,r.rule.ref),e,i)}else if($e(r)&&Ae(r.rule.ref)){let n=t.consume++,i=py(t,r.rule.ref.name);return()=>t.parser.consume(n,i,e)}else if(dt(r)){let n=t.consume++,i=py(t,r.value);return()=>t.parser.consume(n,i,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);let n=il(e.type.ref),i=n?.terminal;if(!i)throw new Error("Could not find name assignment for type: "+pn(e.type.ref));return dw(t,e,i)}}function GU(t,e){let r=t.consume++,n=t.tokens[e.value];if(!n)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(r,n,e)}function pw(t,e,r,n){let i=e&&gi(e);if(!n)if(i){let o=t.or++;return s=>t.parser.alternatives(o,[{ALT:()=>r(s),GATE:()=>i(s)},{ALT:rd(),GATE:()=>!i(s)}])}else return r;if(n==="*"){let o=t.many++;return s=>t.parser.many(o,{DEF:()=>r(s),GATE:i?()=>i(s):void 0})}else if(n==="+"){let o=t.many++;if(i){let s=t.or++;return a=>t.parser.alternatives(s,[{ALT:()=>t.parser.atLeastOne(o,{DEF:()=>r(a)}),GATE:()=>i(a)},{ALT:rd(),GATE:()=>!i(a)}])}else return s=>t.parser.atLeastOne(o,{DEF:()=>r(s)})}else if(n==="?"){let o=t.optional++;return s=>t.parser.optional(o,{DEF:()=>r(s),GATE:i?()=>i(s):void 0})}else dd(n)}function mw(t,e){let r=jU(t,e),n=t.rules.get(r);if(!n)throw new Error(`Rule "${r}" not found."`);return n}function jU(t,e){if(K(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let r=e,n=r.$container,i=e.$type;for(;!K(n);)(Ft(n)||Pr(n)||Ir(n))&&(i=n.elements.indexOf(r).toString()+":"+i),r=n,n=n.$container;return i=n.name+":"+i,t.ruleNames.set(e,i),i}}function py(t,e){let r=t.tokens[e];if(!r)throw new Error(`Token "${e}" not found."`);return r}function hw(t){let e=t.Grammar,r=t.parser.Lexer,n=new fd(t);return md(e,n,r.definition),n.finalize(),n}function yw(t){let e=HU(t);return e.finalize(),e}function HU(t){let e=t.Grammar,r=t.parser.Lexer,n=new ud(t);return md(e,n,r.definition)}var hd=class{buildTokens(e,r){let n=ie(ds(e,!1)),i=this.buildTerminalTokens(n),o=this.buildKeywordTokens(n,i,r);return i.forEach(s=>{let a=s.PATTERN;typeof a=="object"&&a&&"test"in a&&Bm(a)?o.unshift(s):o.push(s)}),o}buildTerminalTokens(e){return e.filter(Ae).filter(r=>!r.fragment).map(r=>this.buildTerminalToken(r)).toArray()}buildTerminalToken(e){let r=Xr(e),n=r.flags.includes("u")?this.regexPatternFunction(r):r,i={name:e.name,PATTERN:n,LINE_BREAKS:!0};return e.hidden&&(i.GROUP=Bm(r)?mt.SKIPPED:"hidden"),i}regexPatternFunction(e){let r=new RegExp(e,e.flags+"y");return(n,i)=>(r.lastIndex=i,r.exec(n))}buildKeywordTokens(e,r,n){return e.filter(K).flatMap(i=>Qe(i).filter(dt)).distinct(i=>i.value).toArray().sort((i,o)=>o.value.length-i.value.length).map(i=>this.buildKeywordToken(i,r,!!n?.caseInsensitive))}buildKeywordToken(e,r,n){return{name:e.value,PATTERN:this.buildKeywordPattern(e,n),LONGER_ALT:this.findLongerAlt(e,r)}}buildKeywordPattern(e,r){return r?new RegExp(Kv(e.value)):e.value}findLongerAlt(e,r){return r.reduce((n,i)=>{let o=i?.PATTERN;return o?.source&&Wv("^"+o.source+"$",e.value)&&n.push(i),n},[])}};var yd=class{convert(e,r){let n=r.grammarSource;if(Vt(n)&&(n=yu(n)),$e(n)){let i=n.rule.ref;if(!i)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(i,e,r)}return e}runConverter(e,r,n){var i;switch(e.name.toUpperCase()){case"INT":return zU(r);case"STRING":return KU(r);case"ID":return BU(r)}switch((i=Ro(e))===null||i===void 0?void 0:i.toLowerCase()){case"number":return YU(r);case"boolean":return JU(r);case"bigint":return VU(r);case"date":return XU(r);default:return r}}};function KU(t){let e="";for(let r=1;r<t.length-1;r++){let n=t.charAt(r);if(n==="\\"){let i=t.charAt(++r);e+=WU(i)}else e+=n}return e}function WU(t){switch(t){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"0":return"\0";default:return t}}function BU(t){return t.charAt(0)==="^"?t.substring(1):t}function zU(t){return parseInt(t)}function VU(t){return BigInt(t)}function XU(t){return new Date(t)}function YU(t){return Number(t)}function JU(t){return t.toLowerCase()==="true"}var gw=de(Se(),1);var gd=class{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,r=gw.CancellationToken.None){for(let n of Zn(e.parseResult.value))await Ze(r),Wc(n).forEach(i=>this.doLink(i,e))}doLink(e,r){let n=e.reference;if(n._ref===void 0)try{let i=this.getCandidate(e);if(Yo(i))n._ref=i;else if(n._nodeDescription=i,this.langiumDocuments().hasDocument(i.documentUri)){let o=this.loadAstNode(i);n._ref=o??this.createLinkingError(e,i)}}catch(i){n._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${n.$refText}': ${i}`})}r.references.push(n)}unlink(e){for(let r of e.references)delete r._ref,delete r._nodeDescription;e.references=[]}getCandidate(e){let n=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return n??this.createLinkingError(e)}buildReference(e,r,n,i){let o=this,s={$refNode:n,$refText:i,get ref(){var a;if(Ct(this._ref))return this._ref;if(AT(this._nodeDescription)){let l=o.loadAstNode(this._nodeDescription);this._ref=l??o.createLinkingError({reference:s,container:e,property:r},this._nodeDescription)}else if(this._ref===void 0){let l=o.getLinkedNode({reference:s,container:e,property:r});if(l.error&&ne(e).state<je.ComputedScopes)return;this._ref=(a=l.node)!==null&&a!==void 0?a:l.error,this._nodeDescription=l.descr}return Ct(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return Yo(this._ref)?this._ref:void 0}};return s}getLinkedNode(e){try{let r=this.getCandidate(e);if(Yo(r))return{error:r};let n=this.loadAstNode(r);return n?{node:n,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${r}`})}}}loadAstNode(e){if(e.node)return e.node;let r=this.langiumDocuments().getOrCreateDocument(e.documentUri);return this.astNodeLocator.getAstNode(r.parseResult.value,e.path)}createLinkingError(e,r){let n=ne(e.container);n.state<je.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);let i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:r})}};function vw(t){return typeof t.$comment=="string"}function Tw(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}var Td=class{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider,this.commentProvider=e.documentation.CommentProvider}serialize(e,r){let n=r?.replacer,i=(s,a)=>this.replacer(s,a,r);return JSON.stringify(e,n?(s,a)=>n(s,a,i):i,r?.space)}deserialize(e){let r=JSON.parse(e);return this.linkNode(r,r),r}replacer(e,r,{refText:n,sourceText:i,textRegions:o,comments:s}={}){var a,l,c;if(!this.ignoreProperties.has(e))if(Yn(r)){let u=r.ref,f=n?r.$refText:void 0;return u?{$refText:f,$ref:"#"+(u&&this.astNodeLocator.getAstNodePath(u))}:{$refText:f,$error:(l=(a=r.error)===null||a===void 0?void 0:a.message)!==null&&l!==void 0?l:"Could not resolve reference"}}else{let u;if(o&&Ct(r)&&(u=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},r)),(!e||r.$document)&&u?.$textRegion))try{u.$textRegion.documentURI=ne(r).uri.toString()}catch{}return i&&!e&&Ct(r)&&(u??(u=Object.assign({},r)),u.$sourceText=(c=r.$cstNode)===null||c===void 0?void 0:c.text),s&&Ct(r)&&(u??(u=Object.assign({},r)),u.$comment=this.commentProvider.getComment(r)),u??r}}addAstNodeRegionWithAssignmentsTo(e){let r=n=>({offset:n.offset,end:n.end,length:n.length,range:n.range});if(e.$cstNode){let n=e.$textRegion=r(e.$cstNode),i=n.assignments={};return Object.keys(e).filter(o=>!o.startsWith("$")).forEach(o=>{let s=Ei(e.$cstNode,o).map(r);s.length!==0&&(i[o]=s)}),e}}linkNode(e,r,n,i,o){for(let[a,l]of Object.entries(e))if(Array.isArray(l))for(let c=0;c<l.length;c++){let u=l[c];Tw(u)?l[c]=this.reviveReference(e,a,r,u):Ct(u)&&this.linkNode(u,r,e,a,c)}else Tw(l)?e[a]=this.reviveReference(e,a,r,l):Ct(l)&&this.linkNode(l,r,e,a);let s=e;s.$container=n,s.$containerProperty=i,s.$containerIndex=o}reviveReference(e,r,n,i){let o=i.$refText;if(i.$ref){let s=this.getRefNode(n,i.$ref);return o||(o=this.nameProvider.getName(s)),{$refText:o??"",ref:s}}else if(i.$error){let s={$refText:o??""};return s.error={container:e,property:r,message:i.$error,reference:s},s}else return}getRefNode(e,r){return this.astNodeLocator.getAstNode(e,r.substring(1))}};var vd=class{register(e){if(!this.singleton&&!this.map){this.singleton=e;return}if(!this.map&&(this.map={},this.singleton)){for(let r of this.singleton.LanguageMetaData.fileExtensions)this.map[r]=this.singleton;this.singleton=void 0}for(let r of e.LanguageMetaData.fileExtensions)this.map[r]!==void 0&&this.map[r]!==e&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${e.LanguageMetaData.languageId}'.`),this.map[r]=e}getServices(e){if(this.singleton!==void 0)return this.singleton;if(this.map===void 0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");let r=ve.extname(e),n=this.map[r];if(!n)throw new Error(`The service registry contains no services for the extension '${r}'.`);return n}get all(){return this.singleton!==void 0?[this.singleton]:this.map!==void 0?Object.values(this.map):[]}};var Rw=de(Se(),1);var Rd=class{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}createDescription(e,r,n=ne(e)){r??(r=this.nameProvider.getName(e));let i=this.astNodeLocator.getAstNodePath(e);if(!r)throw new Error(`Node at path ${i} has no name.`);let o,s=()=>{var a;return o??(o=nr((a=this.nameProvider.getNameNode(e))!==null&&a!==void 0?a:e.$cstNode))};return{node:e,name:r,get nameSegment(){return s()},selectionSegment:nr(e.$cstNode),type:e.$type,documentUri:n.uri,path:i}}},xd=class{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,r=Rw.CancellationToken.None){let n=[],i=e.parseResult.value;for(let o of Zn(i))await Ze(r),Wc(o).filter(s=>!Yo(s)).forEach(s=>{let a=this.createDescription(s);a&&n.push(a)});return n}createDescription(e){let r=e.reference.$nodeDescription,n=e.reference.$refNode;if(!r||!n)return;let i=ne(e.container).uri;return{sourceUri:i,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:r.documentUri,targetPath:r.path,segment:nr(n),local:ve.equals(r.documentUri,i)}}};var bd=class{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){let r=this.getAstNodePath(e.$container),n=this.getPathSegment(e);return r+this.segmentSeparator+n}return""}getPathSegment({$containerProperty:e,$containerIndex:r}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return r!==void 0?e+this.indexSeparator+r:e}getAstNode(e,r){return r.split(this.segmentSeparator).reduce((i,o)=>{if(!i||o.length===0)return i;let s=o.indexOf(this.indexSeparator);if(s>0){let a=o.substring(0,s),l=parseInt(o.substring(s+1)),c=i[a];return c?.[l]}return i[o]},e)}};var xw=de(wt(),1),Sd=class{constructor(e){this.settings={},this.workspaceConfig=!1,this.initialized=!1,this.serviceRegistry=e.ServiceRegistry,this.connection=e.lsp.Connection,e.lsp.LanguageServer.onInitialize(r=>{var n,i;this.workspaceConfig=(i=(n=r.capabilities.workspace)===null||n===void 0?void 0:n.configuration)!==null&&i!==void 0?i:!1}),e.lsp.LanguageServer.onInitialized(r=>{var n;let i=this.serviceRegistry.all;(n=e.lsp.Connection)===null||n===void 0||n.client.register(xw.DidChangeConfigurationNotification.type,{section:i.map(o=>this.toSectionName(o.LanguageMetaData.languageId))})})}async initialize(){if(this.workspaceConfig&&this.connection){let r=this.serviceRegistry.all.map(i=>({section:this.toSectionName(i.LanguageMetaData.languageId)})),n=await this.connection.workspace.getConfiguration(r);r.forEach((i,o)=>{this.updateSectionConfiguration(i.section,n[o])})}this.initialized=!0}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(r=>{this.updateSectionConfiguration(r,e.settings[r])})}updateSectionConfiguration(e,r){this.settings[e]=r}async getConfiguration(e,r){this.initialized||await this.initialize();let n=this.toSectionName(e);if(this.settings[n])return this.settings[n][r]}toSectionName(e){return`${e}`}};var ma=de(Se(),1);var Ad=class{constructor(e){this.updateBuildOptions={validation:{categories:["built-in","fast"]}},this.updateListeners=[],this.buildPhaseListeners=new Le,this.buildState=new Map,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,r={},n=ma.CancellationToken.None){var i,o;for(let s of e){let a=s.uri.toString();if(s.state===je.Validated){if(typeof r.validation=="boolean"&&r.validation)s.state=je.IndexedReferences,s.diagnostics=void 0,this.buildState.delete(a);else if(typeof r.validation=="object"){let l=this.buildState.get(a),c=(i=l?.result)===null||i===void 0?void 0:i.validationChecks;if(c){let f=((o=r.validation.categories)!==null&&o!==void 0?o:cs.all).filter(m=>!c.includes(m));f.length>0&&(this.buildState.set(a,{completed:!1,options:{validation:Object.assign(Object.assign({},r.validation),{categories:f})},result:l.result}),s.state=je.IndexedReferences)}}}else this.buildState.delete(a)}await this.buildDocuments(e,r,n)}async update(e,r,n=ma.CancellationToken.None){for(let s of r)this.langiumDocuments.deleteDocument(s),this.buildState.delete(s.toString());this.indexManager.remove(r);for(let s of e)this.langiumDocuments.invalidateDocument(s)||this.langiumDocuments.getOrCreateDocument(s),this.buildState.delete(s.toString());let i=ie(e).concat(r).map(s=>s.toString()).toSet();this.langiumDocuments.all.filter(s=>!i.has(s.uri.toString())&&this.shouldRelink(s,i)).forEach(s=>{this.serviceRegistry.getServices(s.uri).references.Linker.unlink(s),s.state=Math.min(s.state,je.ComputedScopes),s.diagnostics=void 0});for(let s of this.updateListeners)s(e,r);await Ze(n);let o=this.langiumDocuments.all.filter(s=>{var a;return s.state<je.Linked||!(!((a=this.buildState.get(s.uri.toString()))===null||a===void 0)&&a.completed)}).toArray();await this.buildDocuments(o,this.updateBuildOptions,n)}shouldRelink(e,r){return e.references.some(n=>n.error!==void 0)?!0:this.indexManager.isAffected(e,r)}onUpdate(e){return this.updateListeners.push(e),ma.Disposable.create(()=>{let r=this.updateListeners.indexOf(e);r>=0&&this.updateListeners.splice(r,1)})}async buildDocuments(e,r,n){this.prepareBuild(e,r),await this.runCancelable(e,je.Parsed,n,o=>{this.langiumDocumentFactory.update(o)}),await this.runCancelable(e,je.IndexedContent,n,o=>this.indexManager.updateContent(o,n)),await this.runCancelable(e,je.ComputedScopes,n,async o=>{let s=this.serviceRegistry.getServices(o.uri).references.ScopeComputation;o.precomputedScopes=await s.computeLocalScopes(o,n)}),await this.runCancelable(e,je.Linked,n,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,n)),await this.runCancelable(e,je.IndexedReferences,n,o=>this.indexManager.updateReferences(o,n));let i=e.filter(o=>this.shouldValidate(o));await this.runCancelable(i,je.Validated,n,o=>this.validate(o,n));for(let o of e){let s=this.buildState.get(o.uri.toString());s&&(s.completed=!0)}}prepareBuild(e,r){for(let n of e){let i=n.uri.toString(),o=this.buildState.get(i);(!o||o.completed)&&this.buildState.set(i,{completed:!1,options:r,result:o?.result})}}async runCancelable(e,r,n,i){let o=e.filter(s=>s.state<r);for(let s of o)await Ze(n),await i(s),s.state=r;await this.notifyBuildPhase(o,r,n)}onBuildPhase(e,r){return this.buildPhaseListeners.add(e,r),ma.Disposable.create(()=>{this.buildPhaseListeners.delete(e,r)})}async notifyBuildPhase(e,r,n){if(e.length===0)return;let i=this.buildPhaseListeners.get(r);for(let o of i)await Ze(n),await o(e,n)}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,r){var n,i;let o=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,s=this.getBuildOptions(e).validation,a=typeof s=="object"?s:void 0,l=await o.validateDocument(e,a,r);e.diagnostics?e.diagnostics.push(...l):e.diagnostics=l;let c=this.buildState.get(e.uri.toString());if(c){(n=c.result)!==null&&n!==void 0||(c.result={});let u=(i=a?.categories)!==null&&i!==void 0?i:cs.all;c.result.validationChecks?c.result.validationChecks.push(...u):c.result.validationChecks=[...u]}}getBuildOptions(e){var r,n;return(n=(r=this.buildState.get(e.uri.toString()))===null||r===void 0?void 0:r.options)!==null&&n!==void 0?n:{}}};var my=de(Se(),1);var wd=class{constructor(e){this.simpleIndex=new Map,this.simpleTypeIndex=new cu,this.referenceIndex=new Map,this.documents=e.workspace.LangiumDocuments,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection}findAllReferences(e,r){let n=ne(e).uri,i=[];return this.referenceIndex.forEach(o=>{o.forEach(s=>{ve.equals(s.targetUri,n)&&s.targetPath===r&&i.push(s)})}),ie(i)}allElements(e,r){let n=ie(this.simpleIndex.keys());return r&&(n=n.filter(i=>!r||r.has(i))),n.map(i=>this.getFileDescriptions(i,e)).flat()}getFileDescriptions(e,r){var n;return r?this.simpleTypeIndex.get(e,r,()=>{var o;return((o=this.simpleIndex.get(e))!==null&&o!==void 0?o:[]).filter(a=>this.astReflection.isSubtype(a.type,r))}):(n=this.simpleIndex.get(e))!==null&&n!==void 0?n:[]}remove(e){for(let r of e){let n=r.toString();this.simpleIndex.delete(n),this.simpleTypeIndex.clear(n),this.referenceIndex.delete(n)}}async updateContent(e,r=my.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,r);for(let s of i)s.node=void 0;let o=e.uri.toString();this.simpleIndex.set(o,i),this.simpleTypeIndex.clear(o)}async updateReferences(e,r=my.CancellationToken.None){let i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,r);this.referenceIndex.set(e.uri.toString(),i)}isAffected(e,r){let n=this.referenceIndex.get(e.uri.toString());return n?n.some(i=>!i.local&&r.has(i.targetUri.toString())):!1}};var bw=de(Se(),1);var kd=class{constructor(e){this.initialBuildOptions={},this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.MutexLock,e.lsp.LanguageServer.onInitialize(r=>{var n;this.folders=(n=r.workspaceFolders)!==null&&n!==void 0?n:void 0}),e.lsp.LanguageServer.onInitialized(r=>{this.mutex.lock(n=>{var i;return this.initializeWorkspace((i=this.folders)!==null&&i!==void 0?i:[],n)})})}async initializeWorkspace(e,r=bw.CancellationToken.None){let n=this.serviceRegistry.all.flatMap(s=>s.LanguageMetaData.fileExtensions),i=[],o=s=>{i.push(s),this.langiumDocuments.hasDocument(s.uri)||this.langiumDocuments.addDocument(s)};await this.loadAdditionalDocuments(e,o),await Promise.all(e.map(s=>[s,this.getRootFolder(s)]).map(async s=>this.traverseFolder(...s,n,o))),await Ze(r),await this.documentBuilder.build(i,this.initialBuildOptions,r)}loadAdditionalDocuments(e,r){return Promise.resolve()}getRootFolder(e){return Dt.parse(e.uri)}async traverseFolder(e,r,n,i){let o=await this.fileSystemProvider.readDirectory(r);await Promise.all(o.map(async s=>{if(this.includeEntry(e,s,n)){if(s.isDirectory)await this.traverseFolder(e,s.uri,n,i);else if(s.isFile){let a=this.langiumDocuments.getOrCreateDocument(s.uri);i(a)}}}))}includeEntry(e,r,n){let i=ve.basename(r.uri);if(i.startsWith("."))return!1;if(r.isDirectory)return i!=="node_modules"&&i!=="out";if(r.isFile){let o=ve.extname(r.uri);return n.includes(o)}return!1}};var Cd=class{constructor(e){let r=e.parser.TokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(r);let n=Sw(r)?Object.values(r):r;this.chevrotainLexer=new mt(n,{positionTracking:"full"})}get definition(){return this.tokenTypes}tokenize(e){var r;let n=this.chevrotainLexer.tokenize(e);return{tokens:n.tokens,errors:n.errors,hidden:(r=n.groups.hidden)!==null&&r!==void 0?r:[]}}toTokenTypeDictionary(e){if(Sw(e))return e;let r=Aw(e)?Object.values(e.modes).flat():e,n={};return r.forEach(i=>n[i.name]=i),n}};function QU(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}function Aw(t){return t&&"modes"in t&&"defaultMode"in t}function Sw(t){return!QU(t)&&!Aw(t)}var be=de(Se(),1);function Cw(t,e,r){let n,i;typeof t=="string"?(i=e,n=r):(i=t.range.start,n=e),i||(i=be.Position.create(0,0));let o=_w(t),s=gy(n),a=eq({lines:o,position:i,options:s});return oq({index:0,tokens:a,position:i})}function Ew(t,e){let r=gy(e),n=_w(t);if(n.length===0)return!1;let i=n[0],o=n[n.length-1],s=r.start,a=r.end;return!!s?.exec(i)&&!!a?.exec(o)}function _w(t){let e="";return typeof t=="string"?e=t:e=t.text,e.split(Ka)}var ww=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,ZU=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;function eq(t){var e,r,n;let i=[],o=t.position.line,s=t.position.character;for(let a=0;a<t.lines.length;a++){let l=a===0,c=a===t.lines.length-1,u=t.lines[a],f=0;if(l&&t.options.start){let T=(e=t.options.start)===null||e===void 0?void 0:e.exec(u);T&&(f=T.index+T[0].length)}else{let T=(r=t.options.line)===null||r===void 0?void 0:r.exec(u);T&&(f=T.index+T[0].length)}if(c){let T=(n=t.options.end)===null||n===void 0?void 0:n.exec(u);T&&(u=u.substring(0,T.index))}if(u=u.substring(0,iq(u)),yy(u,0)>=u.length){if(i.length>0){let T=be.Position.create(o,s);i.push({type:"break",content:"",range:be.Range.create(T,T)})}}else{ww.lastIndex=f;let T=ww.exec(u);if(T){let S=T[0],A=T[1],N=be.Position.create(o,s+f),k=be.Position.create(o,s+f+S.length);i.push({type:"tag",content:A,range:be.Range.create(N,k)}),f+=S.length,f=yy(u,f)}if(f<u.length){let S=u.substring(f),A=Array.from(S.matchAll(ZU));i.push(...tq(A,S,o,s+f))}}o++,s=0}return i.length>0&&i[i.length-1].type==="break"?i.slice(0,-1):i}function tq(t,e,r,n){let i=[];if(t.length===0){let o=be.Position.create(r,n),s=be.Position.create(r,n+e.length);i.push({type:"text",content:e,range:be.Range.create(o,s)})}else{let o=0;for(let a of t){let l=a.index,c=e.substring(o,l);c.length>0&&i.push({type:"text",content:e.substring(o,l),range:be.Range.create(be.Position.create(r,o+n),be.Position.create(r,l+n))});let u=c.length+1,f=a[1];if(i.push({type:"inline-tag",content:f,range:be.Range.create(be.Position.create(r,o+u+n),be.Position.create(r,o+u+f.length+n))}),u+=f.length,a.length===4){u+=a[2].length;let m=a[3];i.push({type:"text",content:m,range:be.Range.create(be.Position.create(r,o+u+n),be.Position.create(r,o+u+m.length+n))})}else i.push({type:"text",content:"",range:be.Range.create(be.Position.create(r,o+u+n),be.Position.create(r,o+u+n))});o=l+a[0].length}let s=e.substring(o);s.length>0&&i.push({type:"text",content:s,range:be.Range.create(be.Position.create(r,o+n),be.Position.create(r,o+n+s.length))})}return i}var rq=/\S/,nq=/\s*$/;function yy(t,e){let r=t.substring(e).match(rq);return r?e+r.index:t.length}function iq(t){let e=t.match(nq);if(e&&typeof e.index=="number")return e.index}function oq(t){var e,r,n,i;let o=be.Position.create(t.position.line,t.position.character);if(t.tokens.length===0)return new Ed([],be.Range.create(o,o));let s=[];for(;t.index<t.tokens.length;){let c=sq(t,s[s.length-1]);c&&s.push(c)}let a=(r=(e=s[0])===null||e===void 0?void 0:e.range.start)!==null&&r!==void 0?r:o,l=(i=(n=s[s.length-1])===null||n===void 0?void 0:n.range.end)!==null&&i!==void 0?i:o;return new Ed(s,be.Range.create(a,l))}function sq(t,e){let r=t.tokens[t.index];if(r.type==="tag")return $w(t,!1);if(r.type==="text"||r.type==="inline-tag")return Nw(t);aq(r,e),t.index++}function aq(t,e){if(e){let r=new _d("",t.range);"inlines"in e?e.inlines.push(r):e.content.inlines.push(r)}}function Nw(t){let e=t.tokens[t.index],r=e,n=e,i=[];for(;e&&e.type!=="break"&&e.type!=="tag";)i.push(lq(t)),n=e,e=t.tokens[t.index];return new ql(i,be.Range.create(r.range.start,n.range.end))}function lq(t){return t.tokens[t.index].type==="inline-tag"?$w(t,!0):Pw(t)}function $w(t,e){let r=t.tokens[t.index++],n=r.content.substring(1),i=t.tokens[t.index];if(i?.type==="text")if(e){let o=Pw(t);return new Ul(n,new ql([o],o.range),e,be.Range.create(r.range.start,o.range.end))}else{let o=Nw(t);return new Ul(n,o,e,be.Range.create(r.range.start,o.range.end))}else{let o=r.range;return new Ul(n,new ql([],o),e,o)}}function Pw(t){let e=t.tokens[t.index++];return new _d(e.content,e.range)}function gy(t){if(!t)return gy({start:"/**",end:"*/",line:"*"});let{start:e,end:r,line:n}=t;return{start:hy(e,!0),end:hy(r,!1),line:hy(n,!0)}}function hy(t,e){if(typeof t=="string"||typeof t=="object"){let r=typeof t=="string"?ri(t):t.source;return e?new RegExp(`^\\s*${r}`):new RegExp(`\\s*${r}\\s*$`)}else return t}var Ed=class{constructor(e,r){this.elements=e,this.range=r}getTag(e){return this.getAllTags().find(r=>r.name===e)}getTags(e){return this.getAllTags().filter(r=>r.name===e)}getAllTags(){return this.elements.filter(e=>"name"in e)}toString(){let e="";for(let r of this.elements)if(e.length===0)e=r.toString();else{let n=r.toString();e+=kw(e)+n}return e.trim()}toMarkdown(e){let r="";for(let n of this.elements)if(r.length===0)r=n.toMarkdown(e);else{let i=n.toMarkdown(e);r+=kw(r)+i}return r.trim()}},Ul=class{constructor(e,r,n,i){this.name=e,this.content=r,this.inline=n,this.range=i}toString(){let e=`@${this.name}`,r=this.content.toString();return this.content.inlines.length===1?e=`${e} ${r}`:this.content.inlines.length>1&&(e=`${e}
${r}`),this.inline?`{${e}}`:e}toMarkdown(e){let r=this.content.toMarkdown(e);if(this.inline){let o=cq(this.name,r,e??{});if(typeof o=="string")return o}let n="";e?.tag==="italic"||e?.tag===void 0?n="*":e?.tag==="bold"?n="**":e?.tag==="bold-italic"&&(n="***");let i=`${n}@${this.name}${n}`;return this.content.inlines.length===1?i=`${i} \u2014 ${r}`:this.content.inlines.length>1&&(i=`${i}
${r}`),this.inline?`{${i}}`:i}};function cq(t,e,r){var n,i;if(t==="linkplain"||t==="linkcode"||t==="link"){let o=e.indexOf(" "),s=e;if(o>0){let l=yy(e,o);s=e.substring(l),e=e.substring(0,o)}return(t==="linkcode"||t==="link"&&r.link==="code")&&(s=`\`${s}\``),(i=(n=r.renderLink)===null||n===void 0?void 0:n.call(r,e,s))!==null&&i!==void 0?i:uq(e,s)}}function uq(t,e){try{return Dt.parse(t,!0),`[${e}](${t})`}catch{return t}}var ql=class{constructor(e,r){this.inlines=e,this.range=r}toString(){let e="";for(let r=0;r<this.inlines.length;r++){let n=this.inlines[r],i=this.inlines[r+1];e+=n.toString(),i&&i.range.start.line>n.range.start.line&&(e+=`
`)}return e}toMarkdown(e){let r="";for(let n=0;n<this.inlines.length;n++){let i=this.inlines[n],o=this.inlines[n+1];r+=i.toMarkdown(e),o&&o.range.start.line>i.range.start.line&&(r+=`
`)}return r}},_d=class{constructor(e,r){this.text=e,this.range=r}toString(){return this.text}toMarkdown(){return this.text}};function kw(t){return t.endsWith(`
`)?`
`:`

`}var Nd=class{constructor(e){this.indexManager=e.shared.workspace.IndexManager,this.commentProvider=e.documentation.CommentProvider}getDocumentation(e){let r=this.commentProvider.getComment(e);if(r&&Ew(r))return Cw(r).toMarkdown({renderLink:(i,o)=>this.documentationLinkRenderer(e,i,o)})}documentationLinkRenderer(e,r,n){var i;let o=(i=this.findNameInPrecomputedScopes(e,r))!==null&&i!==void 0?i:this.findNameInGlobalScope(e,r);if(o&&o.nameSegment){let s=o.nameSegment.range.start.line+1,a=o.nameSegment.range.start.character+1,l=o.documentUri.with({fragment:`L${s},${a}`});return`[${n}](${l.toString()})`}else return}findNameInPrecomputedScopes(e,r){let i=ne(e).precomputedScopes;if(!i)return;let o=e;do{let a=i.get(o).find(l=>l.name===r);if(a)return a;o=o.$container}while(o)}findNameInGlobalScope(e,r){return this.indexManager.allElements().find(i=>i.name===r)}};var $d=class{constructor(e){this.grammarConfig=()=>e.parser.GrammarConfig}getComment(e){var r;return vw(e)?e.$comment:(r=NT(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||r===void 0?void 0:r.text}};function ul(t){return{documentation:{CommentProvider:e=>new $d(e),DocumentationProvider:e=>new Nd(e)},parser:{GrammarConfig:e=>zR(e),LangiumParser:e=>yw(e),CompletionParser:e=>hw(e),ValueConverter:()=>new yd,TokenBuilder:()=>new hd,Lexer:e=>new Cd(e),ParserErrorMessageProvider:()=>new Ml},lsp:{CompletionProvider:e=>new xs(e),DocumentSymbolProvider:e=>new _u(e),HoverProvider:e=>new $u(e),FoldingRangeProvider:e=>new Ss(e),ReferencesProvider:e=>new Mu(e),DefinitionProvider:e=>new ks(e),DocumentHighlightProvider:e=>new Eu(e),RenameProvider:e=>new Fu(e)},workspace:{AstNodeLocator:()=>new bd,AstNodeDescriptionProvider:e=>new Rd(e),ReferenceDescriptionProvider:e=>new xd(e)},references:{Linker:e=>new gd(e),NameProvider:()=>new as,ScopeProvider:e=>new vs(e),ScopeComputation:e=>new Ts(e),References:e=>new As(e)},serializer:{JsonSerializer:e=>new Td(e)},validation:{DocumentValidator:e=>new pu(e),ValidationRegistry:e=>new iu(e)},shared:()=>t.shared}}function fl(t){return{ServiceRegistry:()=>new vd,lsp:{Connection:()=>t.connection,LanguageServer:e=>new Du(e),WorkspaceSymbolProvider:e=>new Uu(e),NodeKindProvider:()=>new Ou,FuzzyMatcher:()=>new Nu},workspace:{LangiumDocuments:e=>new Iu(e),LangiumDocumentFactory:e=>new Pu(e),DocumentBuilder:e=>new Ad(e),TextDocuments:()=>new Iw.TextDocuments(Xo),IndexManager:e=>new wd(e),WorkspaceManager:e=>new kd(e),FileSystemProvider:e=>t.fileSystemProvider(e),MutexLock:()=>new nu,ConfigurationProvider:e=>new Sd(e)}}}var ha=de(Ow(),1);var fq="Entry";var dq="Statement";var Lw="EntrySimple";var pq="Expression";var mq="Assignement";var hq="Condition";var yq="Deplacement";var gq="Loop";var Tq="Rotation";var vq="SetRotation";var Rq="SetSpeed";var xq="FunctionCall";var bq="GetRotation";var Sq="GetSpeed";var Aq="RMLBoolean";var wq="RMLInt";var kq="VariableRef";var Gl=class extends lo{getAllTypes(){return["Assignement","Condition","Deplacement","Entry","EntrySimple","Expression","FunctionCall","FunctionDec","GetRotation","GetSpeed","Loop","RMLBoolean","RMLInt","RoboMLProgram","Rotation","SetRotation","SetSpeed","Statement","VariableDef","VariableFunDef","VariableRef"]}computeIsSubtype(e,r){switch(e){case mq:case hq:case yq:case gq:case Tq:case vq:case Rq:return this.isSubtype(dq,r);case Lw:case pq:return this.isSubtype(fq,r);case xq:case bq:case Sq:case Aq:case wq:case kq:return this.isSubtype(Lw,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"FunctionDec":return{name:"FunctionDec",mandatory:[{name:"instruction",type:"array"},{name:"variableFunDef",type:"array"}]};case"RoboMLProgram":return{name:"RoboMLProgram",mandatory:[{name:"function",type:"array"}]};case"Condition":return{name:"Condition",mandatory:[{name:"statementElse",type:"array"},{name:"statementIf",type:"array"}]};case"Loop":return{name:"Loop",mandatory:[{name:"instruction",type:"array"}]};case"FunctionCall":return{name:"FunctionCall",mandatory:[{name:"arguments",type:"array"}]};case"RMLBoolean":return{name:"RMLBoolean",mandatory:[{name:"value",type:"boolean"}]};default:return{name:e,mandatory:[]}}}},kae=new Gl;var Pd,Mw=()=>Pd??(Pd=ru(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "RoboMl",
  "imports": [],
  "rules": [
    {
      "$type": "ParserRule",
      "name": "RoboMLProgram",
      "entry": true,
      "returnType": {
        "$ref": "#/interfaces@0"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "type": {
              "$ref": "#/interfaces@0"
            }
          },
          {
            "$type": "Assignment",
            "feature": "function",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@4"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
      "definesHiddenTokens": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Statement",
      "returnType": {
        "$ref": "#/interfaces@2"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@28"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@11"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@14"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@17"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@8"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Entry",
      "returnType": {
        "$ref": "#/interfaces@5"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@29"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@3"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EntrySimple",
      "returnType": {
        "$ref": "#/interfaces@7"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@28"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@30"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@31"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@49"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@50"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@32"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "FunctionDec",
      "returnType": {
        "$ref": "#/interfaces@1"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "let"
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Keyword",
                "value": "void"
              },
              {
                "$type": "Assignment",
                "feature": "returnType",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@5"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "functionName",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@53"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "variableFunDef",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@9"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "variableFunDef",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@9"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ")"
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "instruction",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@1"
              },
              "arguments": []
            },
            "cardinality": "+"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "return"
              },
              {
                "$type": "Assignment",
                "feature": "returnEntry",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@2"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RMLObject",
      "returnType": {
        "$ref": "#/types@0"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@6"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@7"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RMLObject_RMLInt",
      "returnType": {
        "$ref": "#/types@1"
      },
      "definition": {
        "$type": "Keyword",
        "value": "RMLInt"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RMLObject_RMLBoolean",
      "returnType": {
        "$ref": "#/types@2"
      },
      "definition": {
        "$type": "Keyword",
        "value": "RMLBoolean"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "VariableDef",
      "returnType": {
        "$ref": "#/interfaces@3"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "var"
          },
          {
            "$type": "Assignment",
            "feature": "variableType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "variableName",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@53"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "="
          },
          {
            "$type": "Assignment",
            "feature": "variableValue",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "VariableFunDef",
      "returnType": {
        "$ref": "#/interfaces@4"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "variableType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "variableName",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@53"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Deplacement",
      "returnType": {
        "$ref": "#/interfaces@8"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "movementType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@18"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "deplacementDistance",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "unitMeasure",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@23"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rotation",
      "returnType": {
        "$ref": "#/interfaces@9"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "rotationSens",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@12"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "rotationAngle",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RotationSens",
      "returnType": {
        "$ref": "#/types@29"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Clock"
          },
          {
            "$type": "Keyword",
            "value": "AntiClock"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Loop",
      "returnType": {
        "$ref": "#/interfaces@10"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "loop"
          },
          {
            "$type": "Assignment",
            "feature": "booleanExpression",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "instruction",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@1"
              },
              "arguments": []
            },
            "cardinality": "+"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Assignement",
      "returnType": {
        "$ref": "#/interfaces@11"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "assignableVariable",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@53"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "="
          },
          {
            "$type": "Assignment",
            "feature": "entry",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SetSpeed",
      "returnType": {
        "$ref": "#/interfaces@12"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "setSpeed("
          },
          {
            "$type": "Assignment",
            "feature": "variableValue",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "unitMeasure",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@23"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SetRotation",
      "returnType": {
        "$ref": "#/interfaces@13"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "setRotation("
          },
          {
            "$type": "Assignment",
            "feature": "variableValue",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Condition",
      "returnType": {
        "$ref": "#/interfaces@14"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "if"
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Assignment",
            "feature": "booleanExpression",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ")"
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "statementIf",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@1"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "}"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "else"
              },
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "statementElse",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@1"
                  },
                  "arguments": []
                },
                "cardinality": "*"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Direction",
      "returnType": {
        "$ref": "#/types@8"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@19"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@20"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@21"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@22"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Direction_forward",
      "returnType": {
        "$ref": "#/types@9"
      },
      "definition": {
        "$type": "Keyword",
        "value": "Forward"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Direction_backward",
      "returnType": {
        "$ref": "#/types@10"
      },
      "definition": {
        "$type": "Keyword",
        "value": "Backward"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Direction_sideLeft",
      "returnType": {
        "$ref": "#/types@11"
      },
      "definition": {
        "$type": "Keyword",
        "value": "SideLeft"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Direction_sideRight",
      "returnType": {
        "$ref": "#/types@12"
      },
      "definition": {
        "$type": "Keyword",
        "value": "SideRight"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UnitMeasure",
      "returnType": {
        "$ref": "#/types@3"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@24"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@25"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@26"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@27"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UnitMeasure_m",
      "returnType": {
        "$ref": "#/types@4"
      },
      "definition": {
        "$type": "Keyword",
        "value": "m"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UnitMeasure_dm",
      "returnType": {
        "$ref": "#/types@5"
      },
      "definition": {
        "$type": "Keyword",
        "value": "dm"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UnitMeasure_cm",
      "returnType": {
        "$ref": "#/types@6"
      },
      "definition": {
        "$type": "Keyword",
        "value": "cm"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UnitMeasure_mm",
      "returnType": {
        "$ref": "#/types@7"
      },
      "definition": {
        "$type": "Keyword",
        "value": "mm"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "FunctionCall",
      "returnType": {
        "$ref": "#/interfaces@15"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "function",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@53"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "("
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "arguments",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@2"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "arguments",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@2"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ")"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Expression",
      "returnType": {
        "$ref": "#/interfaces@16"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "elementA",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "operator",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "elementB",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GetSpeed",
      "returnType": {
        "$ref": "#/interfaces@17"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "type": {
              "$ref": "#/interfaces@17"
            }
          },
          {
            "$type": "Keyword",
            "value": "getSpeed()"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GetRotation",
      "returnType": {
        "$ref": "#/interfaces@18"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Action",
            "type": {
              "$ref": "#/interfaces@18"
            }
          },
          {
            "$type": "Keyword",
            "value": "getRotation()"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "VariableRef",
      "returnType": {
        "$ref": "#/interfaces@6"
      },
      "definition": {
        "$type": "Assignment",
        "feature": "variableDefinition",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@53"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators",
      "returnType": {
        "$ref": "#/types@13"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@34"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@35"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@36"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@37"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@38"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@39"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@40"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@41"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@42"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@43"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@44"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@45"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@46"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@47"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@48"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators_Plus",
      "returnType": {
        "$ref": "#/types@14"
      },
      "definition": {
        "$type": "Keyword",
        "value": "+"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators_Minus",
      "returnType": {
        "$ref": "#/types@15"
      },
      "definition": {
        "$type": "Keyword",
        "value": "-"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators_Multiplie",
      "returnType": {
        "$ref": "#/types@16"
      },
      "definition": {
        "$type": "Keyword",
        "value": "*"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators_Divide",
      "returnType": {
        "$ref": "#/types@17"
      },
      "definition": {
        "$type": "Keyword",
        "value": "/"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators_Modulo",
      "returnType": {
        "$ref": "#/types@18"
      },
      "definition": {
        "$type": "Keyword",
        "value": "%"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators_Power",
      "returnType": {
        "$ref": "#/types@19"
      },
      "definition": {
        "$type": "Keyword",
        "value": "**"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators_Equal",
      "returnType": {
        "$ref": "#/types@20"
      },
      "definition": {
        "$type": "Keyword",
        "value": "=="
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators_NotEqual",
      "returnType": {
        "$ref": "#/types@21"
      },
      "definition": {
        "$type": "Keyword",
        "value": "!="
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators_Greater",
      "returnType": {
        "$ref": "#/types@22"
      },
      "definition": {
        "$type": "Keyword",
        "value": ">"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators_Less",
      "returnType": {
        "$ref": "#/types@23"
      },
      "definition": {
        "$type": "Keyword",
        "value": "<"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators_GreaterEqual",
      "returnType": {
        "$ref": "#/types@24"
      },
      "definition": {
        "$type": "Keyword",
        "value": ">="
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators_LessEqual",
      "returnType": {
        "$ref": "#/types@25"
      },
      "definition": {
        "$type": "Keyword",
        "value": "<="
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators_And",
      "returnType": {
        "$ref": "#/types@26"
      },
      "definition": {
        "$type": "Keyword",
        "value": "&&"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators_Or",
      "returnType": {
        "$ref": "#/types@27"
      },
      "definition": {
        "$type": "Keyword",
        "value": "||"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Operators_Not",
      "returnType": {
        "$ref": "#/types@28"
      },
      "definition": {
        "$type": "Keyword",
        "value": "!"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RMLInt",
      "returnType": {
        "$ref": "#/interfaces@19"
      },
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@51"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RMLBoolean",
      "returnType": {
        "$ref": "#/interfaces@20"
      },
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@52"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EInt",
      "dataType": "number",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "-",
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@54"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EBoolean",
      "dataType": "boolean",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "true"
          },
          {
            "$type": "Keyword",
            "value": "false"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "^"
            },
            "cardinality": "?"
          },
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": "a"
                    },
                    "right": {
                      "$type": "Keyword",
                      "value": "z"
                    }
                  },
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": "A"
                    },
                    "right": {
                      "$type": "Keyword",
                      "value": "Z"
                    }
                  }
                ]
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "_"
                }
              }
            ]
          },
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "TerminalAlternatives",
                    "elements": [
                      {
                        "$type": "CharacterRange",
                        "left": {
                          "$type": "Keyword",
                          "value": "a"
                        },
                        "right": {
                          "$type": "Keyword",
                          "value": "z"
                        }
                      },
                      {
                        "$type": "CharacterRange",
                        "left": {
                          "$type": "Keyword",
                          "value": "A"
                        },
                        "right": {
                          "$type": "Keyword",
                          "value": "Z"
                        }
                      }
                    ]
                  },
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": "_"
                    }
                  }
                ]
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "0"
                },
                "right": {
                  "$type": "Keyword",
                  "value": "9"
                }
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "INT",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "CharacterRange",
        "left": {
          "$type": "Keyword",
          "value": "0"
        },
        "right": {
          "$type": "Keyword",
          "value": "9"
        },
        "cardinality": "+"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "/*"
            }
          },
          {
            "$type": "UntilToken",
            "terminal": {
              "$type": "CharacterRange",
              "left": {
                "$type": "Keyword",
                "value": "*/"
              }
            }
          }
        ]
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "//"
            }
          },
          {
            "$type": "NegatedToken",
            "terminal": {
              "$type": "TerminalAlternatives",
              "elements": [
                {
                  "$type": "CharacterRange",
                  "left": {
                    "$type": "Keyword",
                    "value": "\\n"
                  }
                },
                {
                  "$type": "CharacterRange",
                  "left": {
                    "$type": "Keyword",
                    "value": "\\r"
                  }
                }
              ]
            }
          },
          {
            "$type": "TerminalGroup",
            "elements": [
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "\\r"
                },
                "cardinality": "?"
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "\\n"
                }
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "TerminalAlternatives",
        "elements": [
          {
            "$type": "TerminalAlternatives",
            "elements": [
              {
                "$type": "TerminalAlternatives",
                "elements": [
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": " "
                    }
                  },
                  {
                    "$type": "CharacterRange",
                    "left": {
                      "$type": "Keyword",
                      "value": "\\t"
                    }
                  }
                ]
              },
              {
                "$type": "CharacterRange",
                "left": {
                  "$type": "Keyword",
                  "value": "\\r"
                }
              }
            ]
          },
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "\\n"
            }
          }
        ],
        "cardinality": "+"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "name": "ANY_OTHER",
      "type": {
        "$type": "ReturnType",
        "name": "string"
      },
      "definition": {
        "$type": "Wildcard"
      },
      "fragment": false,
      "hidden": false
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "interfaces": [
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "function",
          "type": {
            "$type": "ArrayType",
            "elementType": {
              "$type": "SimpleType",
              "typeRef": {
                "$ref": "#/interfaces@1"
              }
            }
          },
          "isOptional": false
        }
      ],
      "name": "RoboMLProgram",
      "superTypes": []
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "instruction",
          "type": {
            "$type": "ArrayType",
            "elementType": {
              "$type": "SimpleType",
              "typeRef": {
                "$ref": "#/interfaces@2"
              }
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "functionName",
          "type": {
            "$type": "SimpleType",
            "primitiveType": "string"
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "returnType",
          "isOptional": true,
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@0"
            }
          }
        },
        {
          "$type": "TypeAttribute",
          "name": "variableFunDef",
          "type": {
            "$type": "ArrayType",
            "elementType": {
              "$type": "SimpleType",
              "typeRef": {
                "$ref": "#/interfaces@4"
              }
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "returnEntry",
          "isOptional": true,
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@5"
            }
          }
        }
      ],
      "name": "FunctionDec",
      "superTypes": []
    },
    {
      "$type": "Interface",
      "name": "Statement",
      "attributes": [],
      "superTypes": []
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "variableName",
          "type": {
            "$type": "SimpleType",
            "primitiveType": "string"
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "variableType",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@0"
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "variableValue",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@5"
            }
          },
          "isOptional": false
        }
      ],
      "name": "VariableDef",
      "superTypes": []
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "variableName",
          "type": {
            "$type": "SimpleType",
            "primitiveType": "string"
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "variableType",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@0"
            }
          },
          "isOptional": false
        }
      ],
      "name": "VariableFunDef",
      "superTypes": []
    },
    {
      "$type": "Interface",
      "name": "Entry",
      "attributes": [],
      "superTypes": []
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "variableDefinition",
          "type": {
            "$type": "SimpleType",
            "primitiveType": "string"
          },
          "isOptional": false
        }
      ],
      "name": "VariableRef",
      "superTypes": [
        {
          "$ref": "#/interfaces@7"
        }
      ]
    },
    {
      "$type": "Interface",
      "name": "EntrySimple",
      "superTypes": [
        {
          "$ref": "#/interfaces@5"
        }
      ],
      "attributes": []
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "unitMeasure",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@3"
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "deplacementDistance",
          "isOptional": true,
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@5"
            }
          }
        },
        {
          "$type": "TypeAttribute",
          "name": "movementType",
          "isOptional": true,
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@8"
            }
          }
        }
      ],
      "name": "Deplacement",
      "superTypes": [
        {
          "$ref": "#/interfaces@2"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "rotationAngle",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@5"
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "rotationSens",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@29"
            }
          },
          "isOptional": false
        }
      ],
      "name": "Rotation",
      "superTypes": [
        {
          "$ref": "#/interfaces@2"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "instruction",
          "type": {
            "$type": "ArrayType",
            "elementType": {
              "$type": "SimpleType",
              "typeRef": {
                "$ref": "#/interfaces@2"
              }
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "booleanExpression",
          "isOptional": true,
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@5"
            }
          }
        }
      ],
      "name": "Loop",
      "superTypes": [
        {
          "$ref": "#/interfaces@2"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "assignableVariable",
          "isOptional": true,
          "type": {
            "$type": "SimpleType",
            "primitiveType": "string"
          }
        },
        {
          "$type": "TypeAttribute",
          "name": "entry",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@5"
            }
          },
          "isOptional": false
        }
      ],
      "name": "Assignement",
      "superTypes": [
        {
          "$ref": "#/interfaces@2"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "variableValue",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@5"
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "unitMeasure",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@3"
            }
          },
          "isOptional": false
        }
      ],
      "name": "SetSpeed",
      "superTypes": [
        {
          "$ref": "#/interfaces@2"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "variableValue",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@5"
            }
          },
          "isOptional": false
        }
      ],
      "name": "SetRotation",
      "superTypes": [
        {
          "$ref": "#/interfaces@2"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "statementIf",
          "type": {
            "$type": "ArrayType",
            "elementType": {
              "$type": "SimpleType",
              "typeRef": {
                "$ref": "#/interfaces@2"
              }
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "statementElse",
          "type": {
            "$type": "ArrayType",
            "elementType": {
              "$type": "SimpleType",
              "typeRef": {
                "$ref": "#/interfaces@2"
              }
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "booleanExpression",
          "isOptional": true,
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@5"
            }
          }
        }
      ],
      "name": "Condition",
      "superTypes": [
        {
          "$ref": "#/interfaces@2"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "arguments",
          "type": {
            "$type": "ArrayType",
            "elementType": {
              "$type": "SimpleType",
              "typeRef": {
                "$ref": "#/interfaces@5"
              }
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "function",
          "type": {
            "$type": "SimpleType",
            "primitiveType": "string"
          },
          "isOptional": false
        }
      ],
      "name": "FunctionCall",
      "superTypes": [
        {
          "$ref": "#/interfaces@7"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "elementA",
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@7"
            }
          },
          "isOptional": false
        },
        {
          "$type": "TypeAttribute",
          "name": "elementB",
          "isOptional": true,
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/interfaces@5"
            }
          }
        },
        {
          "$type": "TypeAttribute",
          "name": "operator",
          "isOptional": true,
          "type": {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@13"
            }
          }
        }
      ],
      "name": "Expression",
      "superTypes": [
        {
          "$ref": "#/interfaces@5"
        }
      ]
    },
    {
      "$type": "Interface",
      "name": "GetSpeed",
      "superTypes": [
        {
          "$ref": "#/interfaces@7"
        }
      ],
      "attributes": []
    },
    {
      "$type": "Interface",
      "name": "GetRotation",
      "superTypes": [
        {
          "$ref": "#/interfaces@7"
        }
      ],
      "attributes": []
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "value",
          "type": {
            "$type": "SimpleType",
            "primitiveType": "number"
          },
          "isOptional": false
        }
      ],
      "name": "RMLInt",
      "superTypes": [
        {
          "$ref": "#/interfaces@7"
        }
      ]
    },
    {
      "$type": "Interface",
      "attributes": [
        {
          "$type": "TypeAttribute",
          "name": "value",
          "type": {
            "$type": "SimpleType",
            "primitiveType": "boolean"
          },
          "isOptional": false
        }
      ],
      "name": "RMLBoolean",
      "superTypes": [
        {
          "$ref": "#/interfaces@7"
        }
      ]
    }
  ],
  "types": [
    {
      "$type": "Type",
      "name": "RMLObject",
      "type": {
        "$type": "UnionType",
        "types": [
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@1"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@2"
            }
          }
        ]
      }
    },
    {
      "$type": "Type",
      "name": "RMLObject_RMLInt",
      "type": {
        "$type": "SimpleType",
        "stringType": "RMLInt"
      }
    },
    {
      "$type": "Type",
      "name": "RMLObject_RMLBoolean",
      "type": {
        "$type": "SimpleType",
        "stringType": "RMLBoolean"
      }
    },
    {
      "$type": "Type",
      "name": "UnitMeasure",
      "type": {
        "$type": "UnionType",
        "types": [
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@4"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@5"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@6"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@7"
            }
          }
        ]
      }
    },
    {
      "$type": "Type",
      "name": "UnitMeasure_m",
      "type": {
        "$type": "SimpleType",
        "stringType": "m"
      }
    },
    {
      "$type": "Type",
      "name": "UnitMeasure_dm",
      "type": {
        "$type": "SimpleType",
        "stringType": "dm"
      }
    },
    {
      "$type": "Type",
      "name": "UnitMeasure_cm",
      "type": {
        "$type": "SimpleType",
        "stringType": "cm"
      }
    },
    {
      "$type": "Type",
      "name": "UnitMeasure_mm",
      "type": {
        "$type": "SimpleType",
        "stringType": "mm"
      }
    },
    {
      "$type": "Type",
      "name": "Direction",
      "type": {
        "$type": "UnionType",
        "types": [
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@9"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@10"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@11"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@12"
            }
          }
        ]
      }
    },
    {
      "$type": "Type",
      "name": "Direction_forward",
      "type": {
        "$type": "SimpleType",
        "stringType": "Forward"
      }
    },
    {
      "$type": "Type",
      "name": "Direction_backward",
      "type": {
        "$type": "SimpleType",
        "stringType": "Backward"
      }
    },
    {
      "$type": "Type",
      "name": "Direction_sideLeft",
      "type": {
        "$type": "SimpleType",
        "stringType": "SideLeft"
      }
    },
    {
      "$type": "Type",
      "name": "Direction_sideRight",
      "type": {
        "$type": "SimpleType",
        "stringType": "SideRight"
      }
    },
    {
      "$type": "Type",
      "name": "Operators",
      "type": {
        "$type": "UnionType",
        "types": [
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@14"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@15"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@16"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@17"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@18"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@19"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@20"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@21"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@22"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@23"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@24"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@25"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@26"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@27"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@28"
            }
          }
        ]
      }
    },
    {
      "$type": "Type",
      "name": "Operators_Plus",
      "type": {
        "$type": "SimpleType",
        "stringType": "+"
      }
    },
    {
      "$type": "Type",
      "name": "Operators_Minus",
      "type": {
        "$type": "SimpleType",
        "stringType": "-"
      }
    },
    {
      "$type": "Type",
      "name": "Operators_Multiplie",
      "type": {
        "$type": "SimpleType",
        "stringType": "*"
      }
    },
    {
      "$type": "Type",
      "name": "Operators_Divide",
      "type": {
        "$type": "SimpleType",
        "stringType": "/"
      }
    },
    {
      "$type": "Type",
      "name": "Operators_Modulo",
      "type": {
        "$type": "SimpleType",
        "stringType": "%"
      }
    },
    {
      "$type": "Type",
      "name": "Operators_Power",
      "type": {
        "$type": "SimpleType",
        "stringType": "**"
      }
    },
    {
      "$type": "Type",
      "name": "Operators_Equal",
      "type": {
        "$type": "SimpleType",
        "stringType": "=="
      }
    },
    {
      "$type": "Type",
      "name": "Operators_NotEqual",
      "type": {
        "$type": "SimpleType",
        "stringType": "!="
      }
    },
    {
      "$type": "Type",
      "name": "Operators_Greater",
      "type": {
        "$type": "SimpleType",
        "stringType": ">"
      }
    },
    {
      "$type": "Type",
      "name": "Operators_Less",
      "type": {
        "$type": "SimpleType",
        "stringType": "<"
      }
    },
    {
      "$type": "Type",
      "name": "Operators_GreaterEqual",
      "type": {
        "$type": "SimpleType",
        "stringType": ">="
      }
    },
    {
      "$type": "Type",
      "name": "Operators_LessEqual",
      "type": {
        "$type": "SimpleType",
        "stringType": "<="
      }
    },
    {
      "$type": "Type",
      "name": "Operators_And",
      "type": {
        "$type": "SimpleType",
        "stringType": "&&"
      }
    },
    {
      "$type": "Type",
      "name": "Operators_Or",
      "type": {
        "$type": "SimpleType",
        "stringType": "||"
      }
    },
    {
      "$type": "Type",
      "name": "Operators_Not",
      "type": {
        "$type": "SimpleType",
        "stringType": "!"
      }
    },
    {
      "$type": "Type",
      "name": "RotationSens",
      "type": {
        "$type": "UnionType",
        "types": [
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@30"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/types@31"
            }
          }
        ]
      }
    },
    {
      "$type": "Type",
      "name": "Rotation_clock",
      "type": {
        "$type": "SimpleType",
        "stringType": "Clock"
      }
    },
    {
      "$type": "Type",
      "name": "Rotation_antiClock",
      "type": {
        "$type": "SimpleType",
        "stringType": "AntiClock"
      }
    }
  ],
  "usedGrammars": []
}`));var Cq={languageId:"robo-ml",fileExtensions:[".rml"],caseInsensitive:!1},Fw={AstReflection:()=>new Gl},Uw={Grammar:()=>Mw(),LanguageMetaData:()=>Cq,parser:{}};function qw(t){let e=t.validation.ValidationRegistry,r=t.validation.RoboMlValidator,n={};e.register(n,r)}var Id=class{checks(e,r){throw new Error("Method not implemented.")}};function Gw(t){let e=t.validation.ValidationRegistry,r=new jl;e.register(r.checks,r)}var jl=class{constructor(){this.checks={Assignement:this.weaveAssignement,Condition:this.weaveCondition,Deplacement:this.weaveDeplacement,Entry:this.weaveEntry,EntrySimple:this.weaveEntrySimple,Expression:this.weaveExpression,FunctionCall:this.weaveFunctionCall,FunctionDec:this.weaveFunctionDec,GetRotation:this.weaveGetRotation,GetSpeed:this.weaveGetSpeed,Loop:this.weaveLoop,RoboMLProgram:this.weaveRoboMLProgram,Rotation:this.weaveRotation,SetRotation:this.weaveSetRotation,SetSpeed:this.weaveSetSpeed,Statement:this.weaveStatement,VariableDef:this.weaveVariableDef,VariableFunDef:this.weaveVariableFunDef,VariableRef:this.weaveVariableRef}}weaveAssignement(e,r){e.accept=n=>n.visitAssignement(e)}weaveCondition(e,r){e.accept=n=>n.visitCondition(e)}weaveDeplacement(e,r){e.accept=n=>n.visitDeplacement(e)}weaveEntry(e,r){e.accept=n=>n.visitEntry(e)}weaveEntrySimple(e,r){e.accept=n=>n.visitEntrySimple(e)}weaveExpression(e,r){e.accept=n=>n.visitExpression(e)}weaveFunctionCall(e,r){e.accept=n=>n.visitFunctionCall(e)}weaveFunctionDec(e,r){e.accept=n=>n.visitFunctionDec(e)}weaveGetRotation(e,r){e.accept=n=>n.visitGetRotation(e)}weaveGetSpeed(e,r){e.accept=n=>n.visitGetSpeed(e)}weaveLoop(e,r){e.accept=n=>n.visitLoop(e)}weaveRoboMLProgram(e,r){e.accept=n=>n.visitRoboMLProgram(e)}weaveRotation(e,r){e.accept=n=>n.visitRotation(e)}weaveSetRotation(e,r){e.accept=n=>n.visitSetRotation(e)}weaveSetSpeed(e,r){e.accept=n=>n.visitSetSpeed(e)}weaveStatement(e,r){e.accept=n=>n.visitStatement(e)}weaveVariableDef(e,r){e.accept=n=>n.visitVariableDef(e)}weaveVariableFunDef(e,r){e.accept=n=>n.visitVariableFunDef(e)}weaveVariableRef(e,r){e.accept=n=>n.visitVariableRef(e)}};var Eq={validation:{RoboMlValidator:()=>new Id,RoboMlAcceptWeaver:()=>new jl}};function jw(t){let e=uo(fl(t),Fw),r=uo(ul({shared:e}),Uw,Eq);return e.ServiceRegistry.register(r),qw(r),Gw(r),{shared:e,RoboMl:r}}var Dd=class{accept(e){return e.visitRoboMLProgram(this)}};var _q=new ha.BrowserMessageReader(self),Nq=new ha.BrowserMessageWriter(self),Od=(0,ha.createConnection)(_q,Nq),{shared:Kw,RoboMl:$q}=jw(Object.assign({connection:Od},Ku)),Ty=[];IR(Kw);var vy=class{constructor(){this.variables=new Map,this.statementsToSend=[],this.global_rotation=1,this.global_speed=1}visitRoboMLProgram(e){console.log("on donne le go"),Ty.length=0;for(let r of e.function){Ty.push({$type:"FunctionDec",functionName:r.functionName,variableFunDef:r.variableFunDef,returnType:r.returnType,instruction:r.instruction,$container:new Dd,accept:function(n){}});try{r.accept(this)}catch(n){console.error("Error during accept:",n)}}}visitAssignement(e){let r=e.assignableVariable;if(r!==void 0)if(this.variables.has(r))this.variables.set(r,e.entry.accept(this));else throw new Error(`Variable ${r} not found`);console.log(this.variables)}visitCondition(e){console.log("condition");let r=e.booleanExpression.accept(this);console.log("condition status : ",r),r==!0?e.statementIf.forEach(n=>{n.accept(this)}):e.statementElse.forEach(n=>{n.accept(this)})}async delay(e){return new Promise(r=>setTimeout(r,e))}async visitDeplacement(e){let r=this.visitEntrySimple(e.deplacementDistance),n=e.movementType;Od.sendNotification("browser/sendStatements",[{type:n,Value:Number(r)}])}visitEntry(e){switch(console.log("  ENTRY  "),e.$type){case"EntrySimple":console.log("entrysimmmple",this.visitEntrySimple(e));case"Expression":console.log("expressionnnn:",this.visitExpression(e));default:throw new Error(`Unhandled entry type: ${e.$type}`)}}visitEntrySimple(e){switch(console.log("  ENTRY SIMPLE  "),e.$type){case"GetRotation":this.visitGetRotation(e);case"GetSpeed":this.visitGetSpeed(e);case"FunctionCall":this.visitFunctionCall(e);case"RMLBoolean":return e.value;case"RMLInt":return e.value;case"VariableRef":return this.visitVariableRef(e);default:throw new Error(`Unhandled entry type: ${e.$type}`)}}visitExpression(e){var r,n,i,o,s,a,l,c,u,f,m,T,S,A;switch(console.log("bonjour je suis une expression"),e.operator){case"+":return Number(e.elementA.accept(this))+Number((r=e.elementB)===null||r===void 0?void 0:r.accept(this));case"-":return Number(e.elementA.accept(this))-Number((n=e.elementB)===null||n===void 0?void 0:n.accept(this));case"*":return Number(e.elementA.accept(this))*Number((i=e.elementB)===null||i===void 0?void 0:i.accept(this));case"/":return Number(e.elementA.accept(this))/Number((o=e.elementB)===null||o===void 0?void 0:o.accept(this));case"%":return Number(e.elementA.accept(this))%Number((s=e.elementB)===null||s===void 0?void 0:s.accept(this));case"<":return Number(e.elementA.accept(this))<Number((a=e.elementB)===null||a===void 0?void 0:a.accept(this));case">":return Number(e.elementA.accept(this))>Number((l=e.elementB)===null||l===void 0?void 0:l.accept(this));case"<=":return Number(e.elementA.accept(this))<=Number((c=e.elementB)===null||c===void 0?void 0:c.accept(this));case">=":return Number(e.elementA.accept(this))>=Number((u=e.elementB)===null||u===void 0?void 0:u.accept(this));case"==":return e.elementA.accept(this)==((f=e.elementB)===null||f===void 0?void 0:f.accept(this));case"!=":return e.elementA.accept(this)!=((m=e.elementB)===null||m===void 0?void 0:m.accept(this));case"&&":return e.elementA.accept(this)&&((T=e.elementB)===null||T===void 0?void 0:T.accept(this));case"||":return e.elementA.accept(this)||((S=e.elementB)===null||S===void 0?void 0:S.accept(this));case"!":return!e.elementA.accept(this);case"**":return e.elementA.accept(this)**((A=e.elementB)===null||A===void 0?void 0:A.accept(this));default:throw new Error(`Unhandled operator type: ${e.operator}`)}}visitFunctionCall(e){let r=Ty.find(n=>n.functionName===e.function);if(r){console.log("functionDec found : ",r);let n=0;e.arguments.forEach(i=>{n=i.accept(this),console.log("arg : ",n)}),r?.instruction.forEach(i=>{i.accept(this),console.log("statement : ",i)})}else throw new Error(`Function ${e.function} not found`)}visitFunctionDec(e){e.functionName=="main"&&e.instruction.forEach(r=>{r.accept(this)})}visitGetRotation(e){}visitGetSpeed(e){console.log("getspeed to implement")}visitLoop(e){let r=e.booleanExpression.accept(this);console.log("loop status  : ",r),r&&(r=e.booleanExpression.accept(this),console.log("loop status  : ",r),e.instruction.forEach(n=>{n.accept(this)}),this.visitLoop(e))}async visitRotation(e){let r=e.rotationAngle.accept(this);Od.sendNotification("browser/sendStatements",[{type:"Rotate",Value:Number(r)}])}visitSetRotation(e){console.log("setrotation to implement")}visitSetSpeed(e){console.log("setspeed to implement")}async visitStatement(e){switch(e.$type){case"Assignement":this.visitAssignement(e);break;case"Condition":this.visitCondition(e);break;case"Deplacement":this.visitDeplacement(e);break;case"Loop":this.visitLoop(e);break;case"Rotation":this.visitRotation(e);break;case"SetSpeed":this.visitSetSpeed(e);break;case"SetRotation":this.visitSetSpeed(e);break;default:throw new Error(`Unhandled statement type: ${e.$type}`)}}visitVariableDef(e){let r=e.variableValue.accept(this);return this.variables.set(e.variableName,r),console.log(this.variables),r}visitVariableFunDef(e){console.log("variableFunDef to implement")}visitVariableRef(e){if(this.variables.has(e.variableDefinition))return this.variables.get(e.variableDefinition);throw new Error(`Variable ${e.variableDefinition} not found`)}};Od.onNotification("browser/execute",async t=>{let e=t.content,r=Kw.workspace.LangiumDocumentFactory.fromString(e,Dt.parse("memory://Rob.document"));await $q.shared.workspace.DocumentBuilder.build([r],{validation:!0});let n=r.parseResult.value,i=new vy;console.log(i.visitRoboMLProgram(n))});var Hw=class{constructor(e,r){this.type=e,this.value=r}};})();
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
