"use strict";var tI=Object.create;var hs=Object.defineProperty;var rI=Object.getOwnPropertyDescriptor;var nI=Object.getOwnPropertyNames;var oI=Object.getPrototypeOf,iI=Object.prototype.hasOwnProperty;var r=(e,t)=>hs(e,"name",{value:t,configurable:!0});var K=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),aI=(e,t)=>{for(var n in t)hs(e,n,{get:t[n],enumerable:!0})},XS=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of nI(t))!iI.call(e,i)&&i!==n&&hs(e,i,{get:()=>t[i],enumerable:!(o=rI(t,i))||o.enumerable});return e};var sI=(e,t,n)=>(n=e!=null?tI(oI(e)):{},XS(t||!e||!e.__esModule?hs(n,"default",{value:e,enumerable:!0}):n,e)),cI=e=>XS(hs({},"__esModule",{value:!0}),e);var Ic=K(Rt=>{"use strict";Object.defineProperty(Rt,"__esModule",{value:!0});Rt.thenable=Rt.typedArray=Rt.stringArray=Rt.array=Rt.func=Rt.error=Rt.number=Rt.string=Rt.boolean=void 0;function lI(e){return e===!0||e===!1}r(lI,"boolean");Rt.boolean=lI;function ZS(e){return typeof e=="string"||e instanceof String}r(ZS,"string");Rt.string=ZS;function uI(e){return typeof e=="number"||e instanceof Number}r(uI,"number");Rt.number=uI;function dI(e){return e instanceof Error}r(dI,"error");Rt.error=dI;function $S(e){return typeof e=="function"}r($S,"func");Rt.func=$S;function ey(e){return Array.isArray(e)}r(ey,"array");Rt.array=ey;function fI(e){return ey(e)&&e.every(t=>ZS(t))}r(fI,"stringArray");Rt.stringArray=fI;function pI(e,t){return Array.isArray(e)&&e.every(t)}r(pI,"typedArray");Rt.typedArray=pI;function mI(e){return e&&$S(e.then)}r(mI,"thenable");Rt.thenable=mI});var ui=K(Jt=>{"use strict";Object.defineProperty(Jt,"__esModule",{value:!0});Jt.stringArray=Jt.array=Jt.func=Jt.error=Jt.number=Jt.string=Jt.boolean=void 0;function hI(e){return e===!0||e===!1}r(hI,"boolean");Jt.boolean=hI;function ty(e){return typeof e=="string"||e instanceof String}r(ty,"string");Jt.string=ty;function gI(e){return typeof e=="number"||e instanceof Number}r(gI,"number");Jt.number=gI;function TI(e){return e instanceof Error}r(TI,"error");Jt.error=TI;function EI(e){return typeof e=="function"}r(EI,"func");Jt.func=EI;function ry(e){return Array.isArray(e)}r(ry,"array");Jt.array=ry;function SI(e){return ry(e)&&e.every(t=>ty(t))}r(SI,"stringArray");Jt.stringArray=SI});var ET=K(te=>{"use strict";Object.defineProperty(te,"__esModule",{value:!0});te.Message=te.NotificationType9=te.NotificationType8=te.NotificationType7=te.NotificationType6=te.NotificationType5=te.NotificationType4=te.NotificationType3=te.NotificationType2=te.NotificationType1=te.NotificationType0=te.NotificationType=te.RequestType9=te.RequestType8=te.RequestType7=te.RequestType6=te.RequestType5=te.RequestType4=te.RequestType3=te.RequestType2=te.RequestType1=te.RequestType=te.RequestType0=te.AbstractMessageSignature=te.ParameterStructures=te.ResponseError=te.ErrorCodes=void 0;var jo=ui(),Kg;(function(e){e.ParseError=-32700,e.InvalidRequest=-32600,e.MethodNotFound=-32601,e.InvalidParams=-32602,e.InternalError=-32603,e.jsonrpcReservedErrorRangeStart=-32099,e.serverErrorStart=-32099,e.MessageWriteError=-32099,e.MessageReadError=-32098,e.PendingResponseRejected=-32097,e.ConnectionInactive=-32096,e.ServerNotInitialized=-32002,e.UnknownErrorCode=-32001,e.jsonrpcReservedErrorRangeEnd=-32e3,e.serverErrorEnd=-32e3})(Kg||(te.ErrorCodes=Kg={}));var Jg=class e extends Error{static{r(this,"ResponseError")}constructor(t,n,o){super(n),this.code=jo.number(t)?t:Kg.UnknownErrorCode,this.data=o,Object.setPrototypeOf(this,e.prototype)}toJson(){let t={code:this.code,message:this.message};return this.data!==void 0&&(t.data=this.data),t}};te.ResponseError=Jg;var mr=class e{static{r(this,"ParameterStructures")}constructor(t){this.kind=t}static is(t){return t===e.auto||t===e.byName||t===e.byPosition}toString(){return this.kind}};te.ParameterStructures=mr;mr.auto=new mr("auto");mr.byPosition=new mr("byPosition");mr.byName=new mr("byName");var je=class{static{r(this,"AbstractMessageSignature")}constructor(t,n){this.method=t,this.numberOfParams=n}get parameterStructures(){return mr.auto}};te.AbstractMessageSignature=je;var Qg=class extends je{static{r(this,"RequestType0")}constructor(t){super(t,0)}};te.RequestType0=Qg;var Xg=class extends je{static{r(this,"RequestType")}constructor(t,n=mr.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};te.RequestType=Xg;var Zg=class extends je{static{r(this,"RequestType1")}constructor(t,n=mr.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};te.RequestType1=Zg;var $g=class extends je{static{r(this,"RequestType2")}constructor(t){super(t,2)}};te.RequestType2=$g;var eT=class extends je{static{r(this,"RequestType3")}constructor(t){super(t,3)}};te.RequestType3=eT;var tT=class extends je{static{r(this,"RequestType4")}constructor(t){super(t,4)}};te.RequestType4=tT;var rT=class extends je{static{r(this,"RequestType5")}constructor(t){super(t,5)}};te.RequestType5=rT;var nT=class extends je{static{r(this,"RequestType6")}constructor(t){super(t,6)}};te.RequestType6=nT;var oT=class extends je{static{r(this,"RequestType7")}constructor(t){super(t,7)}};te.RequestType7=oT;var iT=class extends je{static{r(this,"RequestType8")}constructor(t){super(t,8)}};te.RequestType8=iT;var aT=class extends je{static{r(this,"RequestType9")}constructor(t){super(t,9)}};te.RequestType9=aT;var sT=class extends je{static{r(this,"NotificationType")}constructor(t,n=mr.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};te.NotificationType=sT;var cT=class extends je{static{r(this,"NotificationType0")}constructor(t){super(t,0)}};te.NotificationType0=cT;var lT=class extends je{static{r(this,"NotificationType1")}constructor(t,n=mr.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};te.NotificationType1=lT;var uT=class extends je{static{r(this,"NotificationType2")}constructor(t){super(t,2)}};te.NotificationType2=uT;var dT=class extends je{static{r(this,"NotificationType3")}constructor(t){super(t,3)}};te.NotificationType3=dT;var fT=class extends je{static{r(this,"NotificationType4")}constructor(t){super(t,4)}};te.NotificationType4=fT;var pT=class extends je{static{r(this,"NotificationType5")}constructor(t){super(t,5)}};te.NotificationType5=pT;var mT=class extends je{static{r(this,"NotificationType6")}constructor(t){super(t,6)}};te.NotificationType6=mT;var hT=class extends je{static{r(this,"NotificationType7")}constructor(t){super(t,7)}};te.NotificationType7=hT;var gT=class extends je{static{r(this,"NotificationType8")}constructor(t){super(t,8)}};te.NotificationType8=gT;var TT=class extends je{static{r(this,"NotificationType9")}constructor(t){super(t,9)}};te.NotificationType9=TT;var ny;(function(e){function t(i){let a=i;return a&&jo.string(a.method)&&(jo.string(a.id)||jo.number(a.id))}r(t,"isRequest"),e.isRequest=t;function n(i){let a=i;return a&&jo.string(a.method)&&i.id===void 0}r(n,"isNotification"),e.isNotification=n;function o(i){let a=i;return a&&(a.result!==void 0||!!a.error)&&(jo.string(a.id)||jo.number(a.id)||a.id===null)}r(o,"isResponse"),e.isResponse=o})(ny||(te.Message=ny={}))});var yT=K(Kn=>{"use strict";var oy;Object.defineProperty(Kn,"__esModule",{value:!0});Kn.LRUCache=Kn.LinkedMap=Kn.Touch=void 0;var Qt;(function(e){e.None=0,e.First=1,e.AsOld=e.First,e.Last=2,e.AsNew=e.Last})(Qt||(Kn.Touch=Qt={}));var Pc=class{static{r(this,"LinkedMap")}constructor(){this[oy]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(t){return this._map.has(t)}get(t,n=Qt.None){let o=this._map.get(t);if(o)return n!==Qt.None&&this.touch(o,n),o.value}set(t,n,o=Qt.None){let i=this._map.get(t);if(i)i.value=n,o!==Qt.None&&this.touch(i,o);else{switch(i={key:t,value:n,next:void 0,previous:void 0},o){case Qt.None:this.addItemLast(i);break;case Qt.First:this.addItemFirst(i);break;case Qt.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(t,i),this._size++}return this}delete(t){return!!this.remove(t)}remove(t){let n=this._map.get(t);if(n)return this._map.delete(t),this.removeItem(n),this._size--,n.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let t=this._head;return this._map.delete(t.key),this.removeItem(t),this._size--,t.value}forEach(t,n){let o=this._state,i=this._head;for(;i;){if(n?t.bind(n)(i.value,i.key,this):t(i.value,i.key,this),this._state!==o)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let t=this._state,n=this._head,o={[Symbol.iterator]:()=>o,next:r(()=>{if(this._state!==t)throw new Error("LinkedMap got modified during iteration.");if(n){let i={value:n.key,done:!1};return n=n.next,i}else return{value:void 0,done:!0}},"next")};return o}values(){let t=this._state,n=this._head,o={[Symbol.iterator]:()=>o,next:r(()=>{if(this._state!==t)throw new Error("LinkedMap got modified during iteration.");if(n){let i={value:n.value,done:!1};return n=n.next,i}else return{value:void 0,done:!0}},"next")};return o}entries(){let t=this._state,n=this._head,o={[Symbol.iterator]:()=>o,next:r(()=>{if(this._state!==t)throw new Error("LinkedMap got modified during iteration.");if(n){let i={value:[n.key,n.value],done:!1};return n=n.next,i}else return{value:void 0,done:!0}},"next")};return o}[(oy=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(t){if(t>=this.size)return;if(t===0){this.clear();return}let n=this._head,o=this.size;for(;n&&o>t;)this._map.delete(n.key),n=n.next,o--;this._head=n,this._size=o,n&&(n.previous=void 0),this._state++}addItemFirst(t){if(!this._head&&!this._tail)this._tail=t;else if(this._head)t.next=this._head,this._head.previous=t;else throw new Error("Invalid list");this._head=t,this._state++}addItemLast(t){if(!this._head&&!this._tail)this._head=t;else if(this._tail)t.previous=this._tail,this._tail.next=t;else throw new Error("Invalid list");this._tail=t,this._state++}removeItem(t){if(t===this._head&&t===this._tail)this._head=void 0,this._tail=void 0;else if(t===this._head){if(!t.next)throw new Error("Invalid list");t.next.previous=void 0,this._head=t.next}else if(t===this._tail){if(!t.previous)throw new Error("Invalid list");t.previous.next=void 0,this._tail=t.previous}else{let n=t.next,o=t.previous;if(!n||!o)throw new Error("Invalid list");n.previous=o,o.next=n}t.next=void 0,t.previous=void 0,this._state++}touch(t,n){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(n!==Qt.First&&n!==Qt.Last)){if(n===Qt.First){if(t===this._head)return;let o=t.next,i=t.previous;t===this._tail?(i.next=void 0,this._tail=i):(o.previous=i,i.next=o),t.previous=void 0,t.next=this._head,this._head.previous=t,this._head=t,this._state++}else if(n===Qt.Last){if(t===this._tail)return;let o=t.next,i=t.previous;t===this._head?(o.previous=void 0,this._head=o):(o.previous=i,i.next=o),t.next=void 0,t.previous=this._tail,this._tail.next=t,this._tail=t,this._state++}}}toJSON(){let t=[];return this.forEach((n,o)=>{t.push([o,n])}),t}fromJSON(t){this.clear();for(let[n,o]of t)this.set(n,o)}};Kn.LinkedMap=Pc;var ST=class extends Pc{static{r(this,"LRUCache")}constructor(t,n=1){super(),this._limit=t,this._ratio=Math.min(Math.max(0,n),1)}get limit(){return this._limit}set limit(t){this._limit=t,this.checkTrim()}get ratio(){return this._ratio}set ratio(t){this._ratio=Math.min(Math.max(0,t),1),this.checkTrim()}get(t,n=Qt.AsNew){return super.get(t,n)}peek(t){return super.get(t,Qt.None)}set(t,n){return super.set(t,n,Qt.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};Kn.LRUCache=ST});var ay=K(Dc=>{"use strict";Object.defineProperty(Dc,"__esModule",{value:!0});Dc.Disposable=void 0;var iy;(function(e){function t(n){return{dispose:n}}r(t,"create"),e.create=t})(iy||(Dc.Disposable=iy={}))});var Jn=K(RT=>{"use strict";Object.defineProperty(RT,"__esModule",{value:!0});var _T;function bT(){if(_T===void 0)throw new Error("No runtime abstraction layer installed");return _T}r(bT,"RAL");(function(e){function t(n){if(n===void 0)throw new Error("No runtime abstraction layer provided");_T=n}r(t,"install"),e.install=t})(bT||(bT={}));RT.default=bT});var fi=K(di=>{"use strict";Object.defineProperty(di,"__esModule",{value:!0});di.Emitter=di.Event=void 0;var yI=Jn(),sy;(function(e){let t={dispose(){}};e.None=function(){return t}})(sy||(di.Event=sy={}));var xT=class{static{r(this,"CallbackList")}add(t,n=null,o){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(t),this._contexts.push(n),Array.isArray(o)&&o.push({dispose:r(()=>this.remove(t,n),"dispose")})}remove(t,n=null){if(!this._callbacks)return;let o=!1;for(let i=0,a=this._callbacks.length;i<a;i++)if(this._callbacks[i]===t)if(this._contexts[i]===n){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else o=!0;if(o)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...t){if(!this._callbacks)return[];let n=[],o=this._callbacks.slice(0),i=this._contexts.slice(0);for(let a=0,s=o.length;a<s;a++)try{n.push(o[a].apply(i[a],t))}catch(c){(0,yI.default)().console.error(c)}return n}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},qc=class e{static{r(this,"Emitter")}constructor(t){this._options=t}get event(){return this._event||(this._event=(t,n,o)=>{this._callbacks||(this._callbacks=new xT),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(t,n);let i={dispose:r(()=>{this._callbacks&&(this._callbacks.remove(t,n),i.dispose=e._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))},"dispose")};return Array.isArray(o)&&o.push(i),i}),this._event}fire(t){this._callbacks&&this._callbacks.invoke.call(this._callbacks,t)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};di.Emitter=qc;qc._noop=function(){}});var jc=K(pi=>{"use strict";Object.defineProperty(pi,"__esModule",{value:!0});pi.CancellationTokenSource=pi.CancellationToken=void 0;var _I=Jn(),bI=ui(),AT=fi(),Bc;(function(e){e.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:AT.Event.None}),e.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:AT.Event.None});function t(n){let o=n;return o&&(o===e.None||o===e.Cancelled||bI.boolean(o.isCancellationRequested)&&!!o.onCancellationRequested)}r(t,"is"),e.is=t})(Bc||(pi.CancellationToken=Bc={}));var RI=Object.freeze(function(e,t){let n=(0,_I.default)().timer.setTimeout(e.bind(t),0);return{dispose(){n.dispose()}}}),Gc=class{static{r(this,"MutableToken")}constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?RI:(this._emitter||(this._emitter=new AT.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},kT=class{static{r(this,"CancellationTokenSource")}get token(){return this._token||(this._token=new Gc),this._token}cancel(){this._token?this._token.cancel():this._token=Bc.Cancelled}dispose(){this._token?this._token instanceof Gc&&this._token.dispose():this._token=Bc.None}};pi.CancellationTokenSource=kT});var cy=K(mi=>{"use strict";Object.defineProperty(mi,"__esModule",{value:!0});mi.SharedArrayReceiverStrategy=mi.SharedArraySenderStrategy=void 0;var xI=jc(),gs;(function(e){e.Continue=0,e.Cancelled=1})(gs||(gs={}));var vT=class{static{r(this,"SharedArraySenderStrategy")}constructor(){this.buffers=new Map}enableCancellation(t){if(t.id===null)return;let n=new SharedArrayBuffer(4),o=new Int32Array(n,0,1);o[0]=gs.Continue,this.buffers.set(t.id,n),t.$cancellationData=n}async sendCancellation(t,n){let o=this.buffers.get(n);if(o===void 0)return;let i=new Int32Array(o,0,1);Atomics.store(i,0,gs.Cancelled)}cleanup(t){this.buffers.delete(t)}dispose(){this.buffers.clear()}};mi.SharedArraySenderStrategy=vT;var UT=class{static{r(this,"SharedArrayBufferCancellationToken")}constructor(t){this.data=new Int32Array(t,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===gs.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},CT=class{static{r(this,"SharedArrayBufferCancellationTokenSource")}constructor(t){this.token=new UT(t)}cancel(){}dispose(){}},OT=class{static{r(this,"SharedArrayReceiverStrategy")}constructor(){this.kind="request"}createCancellationTokenSource(t){let n=t.$cancellationData;return n===void 0?new xI.CancellationTokenSource:new CT(n)}};mi.SharedArrayReceiverStrategy=OT});var NT=K(Vc=>{"use strict";Object.defineProperty(Vc,"__esModule",{value:!0});Vc.Semaphore=void 0;var AI=Jn(),LT=class{static{r(this,"Semaphore")}constructor(t=1){if(t<=0)throw new Error("Capacity must be greater than 0");this._capacity=t,this._active=0,this._waiting=[]}lock(t){return new Promise((n,o)=>{this._waiting.push({thunk:t,resolve:n,reject:o}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,AI.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let t=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let n=t.thunk();n instanceof Promise?n.then(o=>{this._active--,t.resolve(o),this.runNext()},o=>{this._active--,t.reject(o),this.runNext()}):(this._active--,t.resolve(n),this.runNext())}catch(n){this._active--,t.reject(n),this.runNext()}}};Vc.Semaphore=LT});var uy=K(Qn=>{"use strict";Object.defineProperty(Qn,"__esModule",{value:!0});Qn.ReadableStreamMessageReader=Qn.AbstractMessageReader=Qn.MessageReader=void 0;var wT=Jn(),hi=ui(),MT=fi(),kI=NT(),ly;(function(e){function t(n){let o=n;return o&&hi.func(o.listen)&&hi.func(o.dispose)&&hi.func(o.onError)&&hi.func(o.onClose)&&hi.func(o.onPartialMessage)}r(t,"is"),e.is=t})(ly||(Qn.MessageReader=ly={}));var Wc=class{static{r(this,"AbstractMessageReader")}constructor(){this.errorEmitter=new MT.Emitter,this.closeEmitter=new MT.Emitter,this.partialMessageEmitter=new MT.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(t){this.errorEmitter.fire(this.asError(t))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(t){this.partialMessageEmitter.fire(t)}asError(t){return t instanceof Error?t:new Error(`Reader received error. Reason: ${hi.string(t.message)?t.message:"unknown"}`)}};Qn.AbstractMessageReader=Wc;var FT;(function(e){function t(n){let o,i,a,s=new Map,c,u=new Map;if(n===void 0||typeof n=="string")o=n??"utf-8";else{if(o=n.charset??"utf-8",n.contentDecoder!==void 0&&(a=n.contentDecoder,s.set(a.name,a)),n.contentDecoders!==void 0)for(let p of n.contentDecoders)s.set(p.name,p);if(n.contentTypeDecoder!==void 0&&(c=n.contentTypeDecoder,u.set(c.name,c)),n.contentTypeDecoders!==void 0)for(let p of n.contentTypeDecoders)u.set(p.name,p)}return c===void 0&&(c=(0,wT.default)().applicationJson.decoder,u.set(c.name,c)),{charset:o,contentDecoder:a,contentDecoders:s,contentTypeDecoder:c,contentTypeDecoders:u}}r(t,"fromOptions"),e.fromOptions=t})(FT||(FT={}));var IT=class extends Wc{static{r(this,"ReadableStreamMessageReader")}constructor(t,n){super(),this.readable=t,this.options=FT.fromOptions(n),this.buffer=(0,wT.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new kI.Semaphore(1)}set partialMessageTimeout(t){this._partialMessageTimeout=t}get partialMessageTimeout(){return this._partialMessageTimeout}listen(t){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=t;let n=this.readable.onData(o=>{this.onData(o)});return this.readable.onError(o=>this.fireError(o)),this.readable.onClose(()=>this.fireClose()),n}onData(t){try{for(this.buffer.append(t);;){if(this.nextMessageLength===-1){let o=this.buffer.tryReadHeaders(!0);if(!o)return;let i=o.get("content-length");if(!i){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(o))}`));return}let a=parseInt(i);if(isNaN(a)){this.fireError(new Error(`Content-Length value must be a number. Got ${i}`));return}this.nextMessageLength=a}let n=this.buffer.tryReadBody(this.nextMessageLength);if(n===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let o=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(n):n,i=await this.options.contentTypeDecoder.decode(o,this.options);this.callback(i)}).catch(o=>{this.fireError(o)})}}catch(n){this.fireError(n)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,wT.default)().timer.setTimeout((t,n)=>{this.partialMessageTimer=void 0,t===this.messageToken&&(this.firePartialMessage({messageToken:t,waitingTime:n}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};Qn.ReadableStreamMessageReader=IT});var hy=K(Xn=>{"use strict";Object.defineProperty(Xn,"__esModule",{value:!0});Xn.WriteableStreamMessageWriter=Xn.AbstractMessageWriter=Xn.MessageWriter=void 0;var dy=Jn(),Ts=ui(),vI=NT(),fy=fi(),UI="Content-Length: ",py=`\r
`,my;(function(e){function t(n){let o=n;return o&&Ts.func(o.dispose)&&Ts.func(o.onClose)&&Ts.func(o.onError)&&Ts.func(o.write)}r(t,"is"),e.is=t})(my||(Xn.MessageWriter=my={}));var zc=class{static{r(this,"AbstractMessageWriter")}constructor(){this.errorEmitter=new fy.Emitter,this.closeEmitter=new fy.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(t,n,o){this.errorEmitter.fire([this.asError(t),n,o])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(t){return t instanceof Error?t:new Error(`Writer received error. Reason: ${Ts.string(t.message)?t.message:"unknown"}`)}};Xn.AbstractMessageWriter=zc;var PT;(function(e){function t(n){return n===void 0||typeof n=="string"?{charset:n??"utf-8",contentTypeEncoder:(0,dy.default)().applicationJson.encoder}:{charset:n.charset??"utf-8",contentEncoder:n.contentEncoder,contentTypeEncoder:n.contentTypeEncoder??(0,dy.default)().applicationJson.encoder}}r(t,"fromOptions"),e.fromOptions=t})(PT||(PT={}));var DT=class extends zc{static{r(this,"WriteableStreamMessageWriter")}constructor(t,n){super(),this.writable=t,this.options=PT.fromOptions(n),this.errorCount=0,this.writeSemaphore=new vI.Semaphore(1),this.writable.onError(o=>this.fireError(o)),this.writable.onClose(()=>this.fireClose())}async write(t){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(t,this.options).then(o=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(o):o).then(o=>{let i=[];return i.push(UI,o.byteLength.toString(),py),i.push(py),this.doWrite(t,i,o)},o=>{throw this.fireError(o),o}))}async doWrite(t,n,o){try{return await this.writable.write(n.join(""),"ascii"),this.writable.write(o)}catch(i){return this.handleError(i,t),Promise.reject(i)}}handleError(t,n){this.errorCount++,this.fireError(t,n,this.errorCount)}end(){this.writable.end()}};Xn.WriteableStreamMessageWriter=DT});var gy=K(Hc=>{"use strict";Object.defineProperty(Hc,"__esModule",{value:!0});Hc.AbstractMessageBuffer=void 0;var CI=13,OI=10,LI=`\r
`,qT=class{static{r(this,"AbstractMessageBuffer")}constructor(t="utf-8"){this._encoding=t,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(t){let n=typeof t=="string"?this.fromString(t,this._encoding):t;this._chunks.push(n),this._totalLength+=n.byteLength}tryReadHeaders(t=!1){if(this._chunks.length===0)return;let n=0,o=0,i=0,a=0;e:for(;o<this._chunks.length;){let p=this._chunks[o];for(i=0;i<p.length;){switch(p[i]){case CI:switch(n){case 0:n=1;break;case 2:n=3;break;default:n=0}break;case OI:switch(n){case 1:n=2;break;case 3:n=4,i++;break e;default:n=0}break;default:n=0}i++}a+=p.byteLength,o++}if(n!==4)return;let s=this._read(a+i),c=new Map,u=this.toString(s,"ascii").split(LI);if(u.length<2)return c;for(let p=0;p<u.length-2;p++){let g=u[p],S=g.indexOf(":");if(S===-1)throw new Error(`Message header must separate key and value using ':'
${g}`);let A=g.substr(0,S),O=g.substr(S+1).trim();c.set(t?A.toLowerCase():A,O)}return c}tryReadBody(t){if(!(this._totalLength<t))return this._read(t)}get numberOfBytes(){return this._totalLength}_read(t){if(t===0)return this.emptyBuffer();if(t>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===t){let a=this._chunks[0];return this._chunks.shift(),this._totalLength-=t,this.asNative(a)}if(this._chunks[0].byteLength>t){let a=this._chunks[0],s=this.asNative(a,t);return this._chunks[0]=a.slice(t),this._totalLength-=t,s}let n=this.allocNative(t),o=0,i=0;for(;t>0;){let a=this._chunks[i];if(a.byteLength>t){let s=a.slice(0,t);n.set(s,o),o+=t,this._chunks[i]=a.slice(t),this._totalLength-=t,t-=t}else n.set(a,o),o+=a.byteLength,this._chunks.shift(),this._totalLength-=a.byteLength,t-=a.byteLength}return n}};Hc.AbstractMessageBuffer=qT});var _y=K(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.createMessageConnection=ae.ConnectionOptions=ae.MessageStrategy=ae.CancellationStrategy=ae.CancellationSenderStrategy=ae.CancellationReceiverStrategy=ae.RequestCancellationReceiverStrategy=ae.IdCancellationReceiverStrategy=ae.ConnectionStrategy=ae.ConnectionError=ae.ConnectionErrors=ae.LogTraceNotification=ae.SetTraceNotification=ae.TraceFormat=ae.TraceValues=ae.Trace=ae.NullLogger=ae.ProgressType=ae.ProgressToken=void 0;var Ty=Jn(),$e=ui(),ne=ET(),Ey=yT(),Es=fi(),BT=jc(),_s;(function(e){e.type=new ne.NotificationType("$/cancelRequest")})(_s||(_s={}));var GT;(function(e){function t(n){return typeof n=="string"||typeof n=="number"}r(t,"is"),e.is=t})(GT||(ae.ProgressToken=GT={}));var Ss;(function(e){e.type=new ne.NotificationType("$/progress")})(Ss||(Ss={}));var jT=class{static{r(this,"ProgressType")}constructor(){}};ae.ProgressType=jT;var VT;(function(e){function t(n){return $e.func(n)}r(t,"is"),e.is=t})(VT||(VT={}));ae.NullLogger=Object.freeze({error:r(()=>{},"error"),warn:r(()=>{},"warn"),info:r(()=>{},"info"),log:r(()=>{},"log")});var Ae;(function(e){e[e.Off=0]="Off",e[e.Messages=1]="Messages",e[e.Compact=2]="Compact",e[e.Verbose=3]="Verbose"})(Ae||(ae.Trace=Ae={}));var Sy;(function(e){e.Off="off",e.Messages="messages",e.Compact="compact",e.Verbose="verbose"})(Sy||(ae.TraceValues=Sy={}));(function(e){function t(o){if(!$e.string(o))return e.Off;switch(o=o.toLowerCase(),o){case"off":return e.Off;case"messages":return e.Messages;case"compact":return e.Compact;case"verbose":return e.Verbose;default:return e.Off}}r(t,"fromString"),e.fromString=t;function n(o){switch(o){case e.Off:return"off";case e.Messages:return"messages";case e.Compact:return"compact";case e.Verbose:return"verbose";default:return"off"}}r(n,"toString"),e.toString=n})(Ae||(ae.Trace=Ae={}));var kr;(function(e){e.Text="text",e.JSON="json"})(kr||(ae.TraceFormat=kr={}));(function(e){function t(n){return $e.string(n)?(n=n.toLowerCase(),n==="json"?e.JSON:e.Text):e.Text}r(t,"fromString"),e.fromString=t})(kr||(ae.TraceFormat=kr={}));var WT;(function(e){e.type=new ne.NotificationType("$/setTrace")})(WT||(ae.SetTraceNotification=WT={}));var Yc;(function(e){e.type=new ne.NotificationType("$/logTrace")})(Yc||(ae.LogTraceNotification=Yc={}));var ys;(function(e){e[e.Closed=1]="Closed",e[e.Disposed=2]="Disposed",e[e.AlreadyListening=3]="AlreadyListening"})(ys||(ae.ConnectionErrors=ys={}));var gi=class e extends Error{static{r(this,"ConnectionError")}constructor(t,n){super(n),this.code=t,Object.setPrototypeOf(this,e.prototype)}};ae.ConnectionError=gi;var zT;(function(e){function t(n){let o=n;return o&&$e.func(o.cancelUndispatched)}r(t,"is"),e.is=t})(zT||(ae.ConnectionStrategy=zT={}));var Kc;(function(e){function t(n){let o=n;return o&&(o.kind===void 0||o.kind==="id")&&$e.func(o.createCancellationTokenSource)&&(o.dispose===void 0||$e.func(o.dispose))}r(t,"is"),e.is=t})(Kc||(ae.IdCancellationReceiverStrategy=Kc={}));var HT;(function(e){function t(n){let o=n;return o&&o.kind==="request"&&$e.func(o.createCancellationTokenSource)&&(o.dispose===void 0||$e.func(o.dispose))}r(t,"is"),e.is=t})(HT||(ae.RequestCancellationReceiverStrategy=HT={}));var Jc;(function(e){e.Message=Object.freeze({createCancellationTokenSource(n){return new BT.CancellationTokenSource}});function t(n){return Kc.is(n)||HT.is(n)}r(t,"is"),e.is=t})(Jc||(ae.CancellationReceiverStrategy=Jc={}));var Qc;(function(e){e.Message=Object.freeze({sendCancellation(n,o){return n.sendNotification(_s.type,{id:o})},cleanup(n){}});function t(n){let o=n;return o&&$e.func(o.sendCancellation)&&$e.func(o.cleanup)}r(t,"is"),e.is=t})(Qc||(ae.CancellationSenderStrategy=Qc={}));var Xc;(function(e){e.Message=Object.freeze({receiver:Jc.Message,sender:Qc.Message});function t(n){let o=n;return o&&Jc.is(o.receiver)&&Qc.is(o.sender)}r(t,"is"),e.is=t})(Xc||(ae.CancellationStrategy=Xc={}));var Zc;(function(e){function t(n){let o=n;return o&&$e.func(o.handleMessage)}r(t,"is"),e.is=t})(Zc||(ae.MessageStrategy=Zc={}));var yy;(function(e){function t(n){let o=n;return o&&(Xc.is(o.cancellationStrategy)||zT.is(o.connectionStrategy)||Zc.is(o.messageStrategy))}r(t,"is"),e.is=t})(yy||(ae.ConnectionOptions=yy={}));var Qr;(function(e){e[e.New=1]="New",e[e.Listening=2]="Listening",e[e.Closed=3]="Closed",e[e.Disposed=4]="Disposed"})(Qr||(Qr={}));function NI(e,t,n,o){let i=n!==void 0?n:ae.NullLogger,a=0,s=0,c=0,u="2.0",p,g=new Map,S,A=new Map,O=new Map,B,P=new Ey.LinkedMap,z=new Map,q=new Set,_=new Map,E=Ae.Off,w=kr.Text,V,le=Qr.New,we=new Es.Emitter,st=new Es.Emitter,zr=new Es.Emitter,fr=new Es.Emitter,Gt=new Es.Emitter,_t=o&&o.cancellationStrategy?o.cancellationStrategy:Xc.Message;function zn(y){if(y===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+y.toString()}r(zn,"createRequestQueueKey");function an(y){return y===null?"res-unknown-"+(++c).toString():"res-"+y.toString()}r(an,"createResponseQueueKey");function Un(){return"not-"+(++s).toString()}r(Un,"createNotificationQueueKey");function Lr(y,I){ne.Message.isRequest(I)?y.set(zn(I.id),I):ne.Message.isResponse(I)?y.set(an(I.id),I):y.set(Un(),I)}r(Lr,"addMessageToQueue");function sn(y){}r(sn,"cancelUndispatched");function cn(){return le===Qr.Listening}r(cn,"isListening");function ln(){return le===Qr.Closed}r(ln,"isClosed");function ar(){return le===Qr.Disposed}r(ar,"isDisposed");function Cn(){(le===Qr.New||le===Qr.Listening)&&(le=Qr.Closed,st.fire(void 0))}r(Cn,"closeHandler");function un(y){we.fire([y,void 0,void 0])}r(un,"readErrorHandler");function ai(y){we.fire(y)}r(ai,"writeErrorHandler"),e.onClose(Cn),e.onError(un),t.onClose(Cn),t.onError(ai);function Hn(){B||P.size===0||(B=(0,Ty.default)().timer.setImmediate(()=>{B=void 0,Bo()}))}r(Hn,"triggerMessageQueue");function jt(y){ne.Message.isRequest(y)?Vt(y):ne.Message.isNotification(y)?Ft(y):ne.Message.isResponse(y)?Hr(y):Kt(y)}r(jt,"handleMessage");function Bo(){if(P.size===0)return;let y=P.shift();try{let I=o?.messageStrategy;Zc.is(I)?I.handleMessage(y,jt):jt(y)}finally{Hn()}}r(Bo,"processMessageQueue");let ht=r(y=>{try{if(ne.Message.isNotification(y)&&y.method===_s.type.method){let I=y.params.id,W=zn(I),Z=P.get(W);if(ne.Message.isRequest(Z)){let ve=o?.connectionStrategy,Ge=ve&&ve.cancelUndispatched?ve.cancelUndispatched(Z,sn):void 0;if(Ge&&(Ge.error!==void 0||Ge.result!==void 0)){P.delete(W),_.delete(I),Ge.id=Z.id,Yr(Ge,y.method,Date.now()),t.write(Ge).catch(()=>i.error("Sending response for canceled message failed."));return}}let Oe=_.get(I);if(Oe!==void 0){Oe.cancel(),si(y);return}else q.add(I)}Lr(P,y)}finally{Hn()}},"callback");function Vt(y){if(ar())return;function I(fe,Ne,_e){let ct={jsonrpc:u,id:y.id};fe instanceof ne.ResponseError?ct.error=fe.toJson():ct.result=fe===void 0?null:fe,Yr(ct,Ne,_e),t.write(ct).catch(()=>i.error("Sending response failed."))}r(I,"reply");function W(fe,Ne,_e){let ct={jsonrpc:u,id:y.id,error:fe.toJson()};Yr(ct,Ne,_e),t.write(ct).catch(()=>i.error("Sending response failed."))}r(W,"replyError");function Z(fe,Ne,_e){fe===void 0&&(fe=null);let ct={jsonrpc:u,id:y.id,result:fe};Yr(ct,Ne,_e),t.write(ct).catch(()=>i.error("Sending response failed."))}r(Z,"replySuccess"),Go(y);let Oe=g.get(y.method),ve,Ge;Oe&&(ve=Oe.type,Ge=Oe.handler);let He=Date.now();if(Ge||p){let fe=y.id??String(Date.now()),Ne=Kc.is(_t.receiver)?_t.receiver.createCancellationTokenSource(fe):_t.receiver.createCancellationTokenSource(y);y.id!==null&&q.has(y.id)&&Ne.cancel(),y.id!==null&&_.set(fe,Ne);try{let _e;if(Ge)if(y.params===void 0){if(ve!==void 0&&ve.numberOfParams!==0){W(new ne.ResponseError(ne.ErrorCodes.InvalidParams,`Request ${y.method} defines ${ve.numberOfParams} params but received none.`),y.method,He);return}_e=Ge(Ne.token)}else if(Array.isArray(y.params)){if(ve!==void 0&&ve.parameterStructures===ne.ParameterStructures.byName){W(new ne.ResponseError(ne.ErrorCodes.InvalidParams,`Request ${y.method} defines parameters by name but received parameters by position`),y.method,He);return}_e=Ge(...y.params,Ne.token)}else{if(ve!==void 0&&ve.parameterStructures===ne.ParameterStructures.byPosition){W(new ne.ResponseError(ne.ErrorCodes.InvalidParams,`Request ${y.method} defines parameters by position but received parameters by name`),y.method,He);return}_e=Ge(y.params,Ne.token)}else p&&(_e=p(y.method,y.params,Ne.token));let ct=_e;_e?ct.then?ct.then(It=>{_.delete(fe),I(It,y.method,He)},It=>{_.delete(fe),It instanceof ne.ResponseError?W(It,y.method,He):It&&$e.string(It.message)?W(new ne.ResponseError(ne.ErrorCodes.InternalError,`Request ${y.method} failed with message: ${It.message}`),y.method,He):W(new ne.ResponseError(ne.ErrorCodes.InternalError,`Request ${y.method} failed unexpectedly without providing any details.`),y.method,He)}):(_.delete(fe),I(_e,y.method,He)):(_.delete(fe),Z(_e,y.method,He))}catch(_e){_.delete(fe),_e instanceof ne.ResponseError?I(_e,y.method,He):_e&&$e.string(_e.message)?W(new ne.ResponseError(ne.ErrorCodes.InternalError,`Request ${y.method} failed with message: ${_e.message}`),y.method,He):W(new ne.ResponseError(ne.ErrorCodes.InternalError,`Request ${y.method} failed unexpectedly without providing any details.`),y.method,He)}}else W(new ne.ResponseError(ne.ErrorCodes.MethodNotFound,`Unhandled method ${y.method}`),y.method,He)}r(Vt,"handleRequest");function Hr(y){if(!ar())if(y.id===null)y.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(y.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let I=y.id,W=z.get(I);if(Lc(y,W),W!==void 0){z.delete(I);try{if(y.error){let Z=y.error;W.reject(new ne.ResponseError(Z.code,Z.message,Z.data))}else if(y.result!==void 0)W.resolve(y.result);else throw new Error("Should never happen.")}catch(Z){Z.message?i.error(`Response handler '${W.method}' failed with message: ${Z.message}`):i.error(`Response handler '${W.method}' failed unexpectedly.`)}}}}r(Hr,"handleResponse");function Ft(y){if(ar())return;let I,W;if(y.method===_s.type.method){let Z=y.params.id;q.delete(Z),si(y);return}else{let Z=A.get(y.method);Z&&(W=Z.handler,I=Z.type)}if(W||S)try{if(si(y),W)if(y.params===void 0)I!==void 0&&I.numberOfParams!==0&&I.parameterStructures!==ne.ParameterStructures.byName&&i.error(`Notification ${y.method} defines ${I.numberOfParams} params but received none.`),W();else if(Array.isArray(y.params)){let Z=y.params;y.method===Ss.type.method&&Z.length===2&&GT.is(Z[0])?W({token:Z[0],value:Z[1]}):(I!==void 0&&(I.parameterStructures===ne.ParameterStructures.byName&&i.error(`Notification ${y.method} defines parameters by name but received parameters by position`),I.numberOfParams!==y.params.length&&i.error(`Notification ${y.method} defines ${I.numberOfParams} params but received ${Z.length} arguments`)),W(...Z))}else I!==void 0&&I.parameterStructures===ne.ParameterStructures.byPosition&&i.error(`Notification ${y.method} defines parameters by position but received parameters by name`),W(y.params);else S&&S(y.method,y.params)}catch(Z){Z.message?i.error(`Notification handler '${y.method}' failed with message: ${Z.message}`):i.error(`Notification handler '${y.method}' failed unexpectedly.`)}else zr.fire(y)}r(Ft,"handleNotification");function Kt(y){if(!y){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(y,null,4)}`);let I=y;if($e.string(I.id)||$e.number(I.id)){let W=I.id,Z=z.get(W);Z&&Z.reject(new Error("The received response has neither a result nor an error property."))}}r(Kt,"handleInvalidMessage");function bt(y){if(y!=null)switch(E){case Ae.Verbose:return JSON.stringify(y,null,4);case Ae.Compact:return JSON.stringify(y);default:return}}r(bt,"stringifyTrace");function pr(y){if(!(E===Ae.Off||!V))if(w===kr.Text){let I;(E===Ae.Verbose||E===Ae.Compact)&&y.params&&(I=`Params: ${bt(y.params)}

`),V.log(`Sending request '${y.method} - (${y.id})'.`,I)}else On("send-request",y)}r(pr,"traceSendingRequest");function Nr(y){if(!(E===Ae.Off||!V))if(w===kr.Text){let I;(E===Ae.Verbose||E===Ae.Compact)&&(y.params?I=`Params: ${bt(y.params)}

`:I=`No parameters provided.

`),V.log(`Sending notification '${y.method}'.`,I)}else On("send-notification",y)}r(Nr,"traceSendingNotification");function Yr(y,I,W){if(!(E===Ae.Off||!V))if(w===kr.Text){let Z;(E===Ae.Verbose||E===Ae.Compact)&&(y.error&&y.error.data?Z=`Error data: ${bt(y.error.data)}

`:y.result?Z=`Result: ${bt(y.result)}

`:y.error===void 0&&(Z=`No result returned.

`)),V.log(`Sending response '${I} - (${y.id})'. Processing request took ${Date.now()-W}ms`,Z)}else On("send-response",y)}r(Yr,"traceSendingResponse");function Go(y){if(!(E===Ae.Off||!V))if(w===kr.Text){let I;(E===Ae.Verbose||E===Ae.Compact)&&y.params&&(I=`Params: ${bt(y.params)}

`),V.log(`Received request '${y.method} - (${y.id})'.`,I)}else On("receive-request",y)}r(Go,"traceReceivedRequest");function si(y){if(!(E===Ae.Off||!V||y.method===Yc.type.method))if(w===kr.Text){let I;(E===Ae.Verbose||E===Ae.Compact)&&(y.params?I=`Params: ${bt(y.params)}

`:I=`No parameters provided.

`),V.log(`Received notification '${y.method}'.`,I)}else On("receive-notification",y)}r(si,"traceReceivedNotification");function Lc(y,I){if(!(E===Ae.Off||!V))if(w===kr.Text){let W;if((E===Ae.Verbose||E===Ae.Compact)&&(y.error&&y.error.data?W=`Error data: ${bt(y.error.data)}

`:y.result?W=`Result: ${bt(y.result)}

`:y.error===void 0&&(W=`No result returned.

`)),I){let Z=y.error?` Request failed: ${y.error.message} (${y.error.code}).`:"";V.log(`Received response '${I.method} - (${y.id})' in ${Date.now()-I.timerStart}ms.${Z}`,W)}else V.log(`Received response ${y.id} without active response promise.`,W)}else On("receive-response",y)}r(Lc,"traceReceivedResponse");function On(y,I){if(!V||E===Ae.Off)return;let W={isLSPMessage:!0,type:y,message:I,timestamp:Date.now()};V.log(W)}r(On,"logLSPMessage");function Yn(){if(ln())throw new gi(ys.Closed,"Connection is closed.");if(ar())throw new gi(ys.Disposed,"Connection is disposed.")}r(Yn,"throwIfClosedOrDisposed");function Nc(){if(cn())throw new gi(ys.AlreadyListening,"Connection is already listening")}r(Nc,"throwIfListening");function Mc(){if(!cn())throw new Error("Call listen() first.")}r(Mc,"throwIfNotListening");function dn(y){return y===void 0?null:y}r(dn,"undefinedToNull");function fs(y){if(y!==null)return y}r(fs,"nullToUndefined");function ps(y){return y!=null&&!Array.isArray(y)&&typeof y=="object"}r(ps,"isNamedParam");function ci(y,I){switch(y){case ne.ParameterStructures.auto:return ps(I)?fs(I):[dn(I)];case ne.ParameterStructures.byName:if(!ps(I))throw new Error("Received parameters by name but param is not an object literal.");return fs(I);case ne.ParameterStructures.byPosition:return[dn(I)];default:throw new Error(`Unknown parameter structure ${y.toString()}`)}}r(ci,"computeSingleParam");function ms(y,I){let W,Z=y.numberOfParams;switch(Z){case 0:W=void 0;break;case 1:W=ci(y.parameterStructures,I[0]);break;default:W=[];for(let Oe=0;Oe<I.length&&Oe<Z;Oe++)W.push(dn(I[Oe]));if(I.length<Z)for(let Oe=I.length;Oe<Z;Oe++)W.push(null);break}return W}r(ms,"computeMessageParams");let Ln={sendNotification:r((y,...I)=>{Yn();let W,Z;if($e.string(y)){W=y;let ve=I[0],Ge=0,He=ne.ParameterStructures.auto;ne.ParameterStructures.is(ve)&&(Ge=1,He=ve);let fe=I.length,Ne=fe-Ge;switch(Ne){case 0:Z=void 0;break;case 1:Z=ci(He,I[Ge]);break;default:if(He===ne.ParameterStructures.byName)throw new Error(`Received ${Ne} parameters for 'by Name' notification parameter structure.`);Z=I.slice(Ge,fe).map(_e=>dn(_e));break}}else{let ve=I;W=y.method,Z=ms(y,ve)}let Oe={jsonrpc:u,method:W,params:Z};return Nr(Oe),t.write(Oe).catch(ve=>{throw i.error("Sending notification failed."),ve})},"sendNotification"),onNotification:r((y,I)=>{Yn();let W;return $e.func(y)?S=y:I&&($e.string(y)?(W=y,A.set(y,{type:void 0,handler:I})):(W=y.method,A.set(y.method,{type:y,handler:I}))),{dispose:r(()=>{W!==void 0?A.delete(W):S=void 0},"dispose")}},"onNotification"),onProgress:r((y,I,W)=>{if(O.has(I))throw new Error(`Progress handler for token ${I} already registered`);return O.set(I,W),{dispose:r(()=>{O.delete(I)},"dispose")}},"onProgress"),sendProgress:r((y,I,W)=>Ln.sendNotification(Ss.type,{token:I,value:W}),"sendProgress"),onUnhandledProgress:fr.event,sendRequest:r((y,...I)=>{Yn(),Mc();let W,Z,Oe;if($e.string(y)){W=y;let fe=I[0],Ne=I[I.length-1],_e=0,ct=ne.ParameterStructures.auto;ne.ParameterStructures.is(fe)&&(_e=1,ct=fe);let It=I.length;BT.CancellationToken.is(Ne)&&(It=It-1,Oe=Ne);let Ar=It-_e;switch(Ar){case 0:Z=void 0;break;case 1:Z=ci(ct,I[_e]);break;default:if(ct===ne.ParameterStructures.byName)throw new Error(`Received ${Ar} parameters for 'by Name' request parameter structure.`);Z=I.slice(_e,It).map(wc=>dn(wc));break}}else{let fe=I;W=y.method,Z=ms(y,fe);let Ne=y.numberOfParams;Oe=BT.CancellationToken.is(fe[Ne])?fe[Ne]:void 0}let ve=a++,Ge;Oe&&(Ge=Oe.onCancellationRequested(()=>{let fe=_t.sender.sendCancellation(Ln,ve);return fe===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${ve}`),Promise.resolve()):fe.catch(()=>{i.log(`Sending cancellation messages for id ${ve} failed`)})}));let He={jsonrpc:u,id:ve,method:W,params:Z};return pr(He),typeof _t.sender.enableCancellation=="function"&&_t.sender.enableCancellation(He),new Promise(async(fe,Ne)=>{let _e=r(Ar=>{fe(Ar),_t.sender.cleanup(ve),Ge?.dispose()},"resolveWithCleanup"),ct=r(Ar=>{Ne(Ar),_t.sender.cleanup(ve),Ge?.dispose()},"rejectWithCleanup"),It={method:W,timerStart:Date.now(),resolve:_e,reject:ct};try{await t.write(He),z.set(ve,It)}catch(Ar){throw i.error("Sending request failed."),It.reject(new ne.ResponseError(ne.ErrorCodes.MessageWriteError,Ar.message?Ar.message:"Unknown reason")),Ar}})},"sendRequest"),onRequest:r((y,I)=>{Yn();let W=null;return VT.is(y)?(W=void 0,p=y):$e.string(y)?(W=null,I!==void 0&&(W=y,g.set(y,{handler:I,type:void 0}))):I!==void 0&&(W=y.method,g.set(y.method,{type:y,handler:I})),{dispose:r(()=>{W!==null&&(W!==void 0?g.delete(W):p=void 0)},"dispose")}},"onRequest"),hasPendingResponse:r(()=>z.size>0,"hasPendingResponse"),trace:r(async(y,I,W)=>{let Z=!1,Oe=kr.Text;W!==void 0&&($e.boolean(W)?Z=W:(Z=W.sendNotification||!1,Oe=W.traceFormat||kr.Text)),E=y,w=Oe,E===Ae.Off?V=void 0:V=I,Z&&!ln()&&!ar()&&await Ln.sendNotification(WT.type,{value:Ae.toString(y)})},"trace"),onError:we.event,onClose:st.event,onUnhandledNotification:zr.event,onDispose:Gt.event,end:r(()=>{t.end()},"end"),dispose:r(()=>{if(ar())return;le=Qr.Disposed,Gt.fire(void 0);let y=new ne.ResponseError(ne.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let I of z.values())I.reject(y);z=new Map,_=new Map,q=new Set,P=new Ey.LinkedMap,$e.func(t.dispose)&&t.dispose(),$e.func(e.dispose)&&e.dispose()},"dispose"),listen:r(()=>{Yn(),Nc(),le=Qr.Listening,e.listen(ht)},"listen"),inspect:r(()=>{(0,Ty.default)().console.log("inspect")},"inspect")};return Ln.onNotification(Yc.type,y=>{if(E===Ae.Off||!V)return;let I=E===Ae.Verbose||E===Ae.Compact;V.log(y.message,I?y.verbose:void 0)}),Ln.onNotification(Ss.type,y=>{let I=O.get(y.token);I?I(y.value):fr.fire(y)}),Ln}r(NI,"createMessageConnection");ae.createMessageConnection=NI});var $c=K(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.ProgressType=F.ProgressToken=F.createMessageConnection=F.NullLogger=F.ConnectionOptions=F.ConnectionStrategy=F.AbstractMessageBuffer=F.WriteableStreamMessageWriter=F.AbstractMessageWriter=F.MessageWriter=F.ReadableStreamMessageReader=F.AbstractMessageReader=F.MessageReader=F.SharedArrayReceiverStrategy=F.SharedArraySenderStrategy=F.CancellationToken=F.CancellationTokenSource=F.Emitter=F.Event=F.Disposable=F.LRUCache=F.Touch=F.LinkedMap=F.ParameterStructures=F.NotificationType9=F.NotificationType8=F.NotificationType7=F.NotificationType6=F.NotificationType5=F.NotificationType4=F.NotificationType3=F.NotificationType2=F.NotificationType1=F.NotificationType0=F.NotificationType=F.ErrorCodes=F.ResponseError=F.RequestType9=F.RequestType8=F.RequestType7=F.RequestType6=F.RequestType5=F.RequestType4=F.RequestType3=F.RequestType2=F.RequestType1=F.RequestType0=F.RequestType=F.Message=F.RAL=void 0;F.MessageStrategy=F.CancellationStrategy=F.CancellationSenderStrategy=F.CancellationReceiverStrategy=F.ConnectionError=F.ConnectionErrors=F.LogTraceNotification=F.SetTraceNotification=F.TraceFormat=F.TraceValues=F.Trace=void 0;var Ie=ET();Object.defineProperty(F,"Message",{enumerable:!0,get:r(function(){return Ie.Message},"get")});Object.defineProperty(F,"RequestType",{enumerable:!0,get:r(function(){return Ie.RequestType},"get")});Object.defineProperty(F,"RequestType0",{enumerable:!0,get:r(function(){return Ie.RequestType0},"get")});Object.defineProperty(F,"RequestType1",{enumerable:!0,get:r(function(){return Ie.RequestType1},"get")});Object.defineProperty(F,"RequestType2",{enumerable:!0,get:r(function(){return Ie.RequestType2},"get")});Object.defineProperty(F,"RequestType3",{enumerable:!0,get:r(function(){return Ie.RequestType3},"get")});Object.defineProperty(F,"RequestType4",{enumerable:!0,get:r(function(){return Ie.RequestType4},"get")});Object.defineProperty(F,"RequestType5",{enumerable:!0,get:r(function(){return Ie.RequestType5},"get")});Object.defineProperty(F,"RequestType6",{enumerable:!0,get:r(function(){return Ie.RequestType6},"get")});Object.defineProperty(F,"RequestType7",{enumerable:!0,get:r(function(){return Ie.RequestType7},"get")});Object.defineProperty(F,"RequestType8",{enumerable:!0,get:r(function(){return Ie.RequestType8},"get")});Object.defineProperty(F,"RequestType9",{enumerable:!0,get:r(function(){return Ie.RequestType9},"get")});Object.defineProperty(F,"ResponseError",{enumerable:!0,get:r(function(){return Ie.ResponseError},"get")});Object.defineProperty(F,"ErrorCodes",{enumerable:!0,get:r(function(){return Ie.ErrorCodes},"get")});Object.defineProperty(F,"NotificationType",{enumerable:!0,get:r(function(){return Ie.NotificationType},"get")});Object.defineProperty(F,"NotificationType0",{enumerable:!0,get:r(function(){return Ie.NotificationType0},"get")});Object.defineProperty(F,"NotificationType1",{enumerable:!0,get:r(function(){return Ie.NotificationType1},"get")});Object.defineProperty(F,"NotificationType2",{enumerable:!0,get:r(function(){return Ie.NotificationType2},"get")});Object.defineProperty(F,"NotificationType3",{enumerable:!0,get:r(function(){return Ie.NotificationType3},"get")});Object.defineProperty(F,"NotificationType4",{enumerable:!0,get:r(function(){return Ie.NotificationType4},"get")});Object.defineProperty(F,"NotificationType5",{enumerable:!0,get:r(function(){return Ie.NotificationType5},"get")});Object.defineProperty(F,"NotificationType6",{enumerable:!0,get:r(function(){return Ie.NotificationType6},"get")});Object.defineProperty(F,"NotificationType7",{enumerable:!0,get:r(function(){return Ie.NotificationType7},"get")});Object.defineProperty(F,"NotificationType8",{enumerable:!0,get:r(function(){return Ie.NotificationType8},"get")});Object.defineProperty(F,"NotificationType9",{enumerable:!0,get:r(function(){return Ie.NotificationType9},"get")});Object.defineProperty(F,"ParameterStructures",{enumerable:!0,get:r(function(){return Ie.ParameterStructures},"get")});var YT=yT();Object.defineProperty(F,"LinkedMap",{enumerable:!0,get:r(function(){return YT.LinkedMap},"get")});Object.defineProperty(F,"LRUCache",{enumerable:!0,get:r(function(){return YT.LRUCache},"get")});Object.defineProperty(F,"Touch",{enumerable:!0,get:r(function(){return YT.Touch},"get")});var MI=ay();Object.defineProperty(F,"Disposable",{enumerable:!0,get:r(function(){return MI.Disposable},"get")});var by=fi();Object.defineProperty(F,"Event",{enumerable:!0,get:r(function(){return by.Event},"get")});Object.defineProperty(F,"Emitter",{enumerable:!0,get:r(function(){return by.Emitter},"get")});var Ry=jc();Object.defineProperty(F,"CancellationTokenSource",{enumerable:!0,get:r(function(){return Ry.CancellationTokenSource},"get")});Object.defineProperty(F,"CancellationToken",{enumerable:!0,get:r(function(){return Ry.CancellationToken},"get")});var xy=cy();Object.defineProperty(F,"SharedArraySenderStrategy",{enumerable:!0,get:r(function(){return xy.SharedArraySenderStrategy},"get")});Object.defineProperty(F,"SharedArrayReceiverStrategy",{enumerable:!0,get:r(function(){return xy.SharedArrayReceiverStrategy},"get")});var KT=uy();Object.defineProperty(F,"MessageReader",{enumerable:!0,get:r(function(){return KT.MessageReader},"get")});Object.defineProperty(F,"AbstractMessageReader",{enumerable:!0,get:r(function(){return KT.AbstractMessageReader},"get")});Object.defineProperty(F,"ReadableStreamMessageReader",{enumerable:!0,get:r(function(){return KT.ReadableStreamMessageReader},"get")});var JT=hy();Object.defineProperty(F,"MessageWriter",{enumerable:!0,get:r(function(){return JT.MessageWriter},"get")});Object.defineProperty(F,"AbstractMessageWriter",{enumerable:!0,get:r(function(){return JT.AbstractMessageWriter},"get")});Object.defineProperty(F,"WriteableStreamMessageWriter",{enumerable:!0,get:r(function(){return JT.WriteableStreamMessageWriter},"get")});var wI=gy();Object.defineProperty(F,"AbstractMessageBuffer",{enumerable:!0,get:r(function(){return wI.AbstractMessageBuffer},"get")});var Wt=_y();Object.defineProperty(F,"ConnectionStrategy",{enumerable:!0,get:r(function(){return Wt.ConnectionStrategy},"get")});Object.defineProperty(F,"ConnectionOptions",{enumerable:!0,get:r(function(){return Wt.ConnectionOptions},"get")});Object.defineProperty(F,"NullLogger",{enumerable:!0,get:r(function(){return Wt.NullLogger},"get")});Object.defineProperty(F,"createMessageConnection",{enumerable:!0,get:r(function(){return Wt.createMessageConnection},"get")});Object.defineProperty(F,"ProgressToken",{enumerable:!0,get:r(function(){return Wt.ProgressToken},"get")});Object.defineProperty(F,"ProgressType",{enumerable:!0,get:r(function(){return Wt.ProgressType},"get")});Object.defineProperty(F,"Trace",{enumerable:!0,get:r(function(){return Wt.Trace},"get")});Object.defineProperty(F,"TraceValues",{enumerable:!0,get:r(function(){return Wt.TraceValues},"get")});Object.defineProperty(F,"TraceFormat",{enumerable:!0,get:r(function(){return Wt.TraceFormat},"get")});Object.defineProperty(F,"SetTraceNotification",{enumerable:!0,get:r(function(){return Wt.SetTraceNotification},"get")});Object.defineProperty(F,"LogTraceNotification",{enumerable:!0,get:r(function(){return Wt.LogTraceNotification},"get")});Object.defineProperty(F,"ConnectionErrors",{enumerable:!0,get:r(function(){return Wt.ConnectionErrors},"get")});Object.defineProperty(F,"ConnectionError",{enumerable:!0,get:r(function(){return Wt.ConnectionError},"get")});Object.defineProperty(F,"CancellationReceiverStrategy",{enumerable:!0,get:r(function(){return Wt.CancellationReceiverStrategy},"get")});Object.defineProperty(F,"CancellationSenderStrategy",{enumerable:!0,get:r(function(){return Wt.CancellationSenderStrategy},"get")});Object.defineProperty(F,"CancellationStrategy",{enumerable:!0,get:r(function(){return Wt.CancellationStrategy},"get")});Object.defineProperty(F,"MessageStrategy",{enumerable:!0,get:r(function(){return Wt.MessageStrategy},"get")});var FI=Jn();F.RAL=FI.default});var vy=K($T=>{"use strict";Object.defineProperty($T,"__esModule",{value:!0});var Ay=require("util"),Mn=$c(),el=class e extends Mn.AbstractMessageBuffer{static{r(this,"MessageBuffer")}constructor(t="utf-8"){super(t)}emptyBuffer(){return e.emptyBuffer}fromString(t,n){return Buffer.from(t,n)}toString(t,n){return t instanceof Buffer?t.toString(n):new Ay.TextDecoder(n).decode(t)}asNative(t,n){return n===void 0?t instanceof Buffer?t:Buffer.from(t):t instanceof Buffer?t.slice(0,n):Buffer.from(t,0,n)}allocNative(t){return Buffer.allocUnsafe(t)}};el.emptyBuffer=Buffer.allocUnsafe(0);var QT=class{static{r(this,"ReadableStreamWrapper")}constructor(t){this.stream=t}onClose(t){return this.stream.on("close",t),Mn.Disposable.create(()=>this.stream.off("close",t))}onError(t){return this.stream.on("error",t),Mn.Disposable.create(()=>this.stream.off("error",t))}onEnd(t){return this.stream.on("end",t),Mn.Disposable.create(()=>this.stream.off("end",t))}onData(t){return this.stream.on("data",t),Mn.Disposable.create(()=>this.stream.off("data",t))}},XT=class{static{r(this,"WritableStreamWrapper")}constructor(t){this.stream=t}onClose(t){return this.stream.on("close",t),Mn.Disposable.create(()=>this.stream.off("close",t))}onError(t){return this.stream.on("error",t),Mn.Disposable.create(()=>this.stream.off("error",t))}onEnd(t){return this.stream.on("end",t),Mn.Disposable.create(()=>this.stream.off("end",t))}write(t,n){return new Promise((o,i)=>{let a=r(s=>{s==null?o():i(s)},"callback");typeof t=="string"?this.stream.write(t,n,a):this.stream.write(t,a)})}end(){this.stream.end()}},ky=Object.freeze({messageBuffer:Object.freeze({create:r(e=>new el(e),"create")}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:r((e,t)=>{try{return Promise.resolve(Buffer.from(JSON.stringify(e,void 0,0),t.charset))}catch(n){return Promise.reject(n)}},"encode")}),decoder:Object.freeze({name:"application/json",decode:r((e,t)=>{try{return e instanceof Buffer?Promise.resolve(JSON.parse(e.toString(t.charset))):Promise.resolve(JSON.parse(new Ay.TextDecoder(t.charset).decode(e)))}catch(n){return Promise.reject(n)}},"decode")})}),stream:Object.freeze({asReadableStream:r(e=>new QT(e),"asReadableStream"),asWritableStream:r(e=>new XT(e),"asWritableStream")}),console,timer:Object.freeze({setTimeout(e,t,...n){let o=setTimeout(e,t,...n);return{dispose:r(()=>clearTimeout(o),"dispose")}},setImmediate(e,...t){let n=setImmediate(e,...t);return{dispose:r(()=>clearImmediate(n),"dispose")}},setInterval(e,t,...n){let o=setInterval(e,t,...n);return{dispose:r(()=>clearInterval(o),"dispose")}}})});function ZT(){return ky}r(ZT,"RIL");(function(e){function t(){Mn.RAL.install(ky)}r(t,"install"),e.install=t})(ZT||(ZT={}));$T.default=ZT});var zo=K(Ee=>{"use strict";var II=Ee&&Ee.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),PI=Ee&&Ee.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&II(t,e,n)};Object.defineProperty(Ee,"__esModule",{value:!0});Ee.createMessageConnection=Ee.createServerSocketTransport=Ee.createClientSocketTransport=Ee.createServerPipeTransport=Ee.createClientPipeTransport=Ee.generateRandomPipeName=Ee.StreamMessageWriter=Ee.StreamMessageReader=Ee.SocketMessageWriter=Ee.SocketMessageReader=Ee.PortMessageWriter=Ee.PortMessageReader=Ee.IPCMessageWriter=Ee.IPCMessageReader=void 0;var Ti=vy();Ti.default.install();var Uy=require("path"),DI=require("os"),qI=require("crypto"),nl=require("net"),vr=$c();PI($c(),Ee);var eE=class extends vr.AbstractMessageReader{static{r(this,"IPCMessageReader")}constructor(t){super(),this.process=t;let n=this.process;n.on("error",o=>this.fireError(o)),n.on("close",()=>this.fireClose())}listen(t){return this.process.on("message",t),vr.Disposable.create(()=>this.process.off("message",t))}};Ee.IPCMessageReader=eE;var tE=class extends vr.AbstractMessageWriter{static{r(this,"IPCMessageWriter")}constructor(t){super(),this.process=t,this.errorCount=0;let n=this.process;n.on("error",o=>this.fireError(o)),n.on("close",()=>this.fireClose)}write(t){try{return typeof this.process.send=="function"&&this.process.send(t,void 0,void 0,n=>{n?(this.errorCount++,this.handleError(n,t)):this.errorCount=0}),Promise.resolve()}catch(n){return this.handleError(n,t),Promise.reject(n)}}handleError(t,n){this.errorCount++,this.fireError(t,n,this.errorCount)}end(){}};Ee.IPCMessageWriter=tE;var rE=class extends vr.AbstractMessageReader{static{r(this,"PortMessageReader")}constructor(t){super(),this.onData=new vr.Emitter,t.on("close",()=>this.fireClose),t.on("error",n=>this.fireError(n)),t.on("message",n=>{this.onData.fire(n)})}listen(t){return this.onData.event(t)}};Ee.PortMessageReader=rE;var nE=class extends vr.AbstractMessageWriter{static{r(this,"PortMessageWriter")}constructor(t){super(),this.port=t,this.errorCount=0,t.on("close",()=>this.fireClose()),t.on("error",n=>this.fireError(n))}write(t){try{return this.port.postMessage(t),Promise.resolve()}catch(n){return this.handleError(n,t),Promise.reject(n)}}handleError(t,n){this.errorCount++,this.fireError(t,n,this.errorCount)}end(){}};Ee.PortMessageWriter=nE;var Vo=class extends vr.ReadableStreamMessageReader{static{r(this,"SocketMessageReader")}constructor(t,n="utf-8"){super((0,Ti.default)().stream.asReadableStream(t),n)}};Ee.SocketMessageReader=Vo;var Wo=class extends vr.WriteableStreamMessageWriter{static{r(this,"SocketMessageWriter")}constructor(t,n){super((0,Ti.default)().stream.asWritableStream(t),n),this.socket=t}dispose(){super.dispose(),this.socket.destroy()}};Ee.SocketMessageWriter=Wo;var tl=class extends vr.ReadableStreamMessageReader{static{r(this,"StreamMessageReader")}constructor(t,n){super((0,Ti.default)().stream.asReadableStream(t),n)}};Ee.StreamMessageReader=tl;var rl=class extends vr.WriteableStreamMessageWriter{static{r(this,"StreamMessageWriter")}constructor(t,n){super((0,Ti.default)().stream.asWritableStream(t),n)}};Ee.StreamMessageWriter=rl;var Cy=process.env.XDG_RUNTIME_DIR,BI=new Map([["linux",107],["darwin",103]]);function GI(){let e=(0,qI.randomBytes)(21).toString("hex");if(process.platform==="win32")return`\\\\.\\pipe\\vscode-jsonrpc-${e}-sock`;let t;Cy?t=Uy.join(Cy,`vscode-ipc-${e}.sock`):t=Uy.join(DI.tmpdir(),`vscode-${e}.sock`);let n=BI.get(process.platform);return n!==void 0&&t.length>n&&(0,Ti.default)().console.warn(`WARNING: IPC handle "${t}" is longer than ${n} characters.`),t}r(GI,"generateRandomPipeName");Ee.generateRandomPipeName=GI;function jI(e,t="utf-8"){let n,o=new Promise((i,a)=>{n=i});return new Promise((i,a)=>{let s=(0,nl.createServer)(c=>{s.close(),n([new Vo(c,t),new Wo(c,t)])});s.on("error",a),s.listen(e,()=>{s.removeListener("error",a),i({onConnected:r(()=>o,"onConnected")})})})}r(jI,"createClientPipeTransport");Ee.createClientPipeTransport=jI;function VI(e,t="utf-8"){let n=(0,nl.createConnection)(e);return[new Vo(n,t),new Wo(n,t)]}r(VI,"createServerPipeTransport");Ee.createServerPipeTransport=VI;function WI(e,t="utf-8"){let n,o=new Promise((i,a)=>{n=i});return new Promise((i,a)=>{let s=(0,nl.createServer)(c=>{s.close(),n([new Vo(c,t),new Wo(c,t)])});s.on("error",a),s.listen(e,"127.0.0.1",()=>{s.removeListener("error",a),i({onConnected:r(()=>o,"onConnected")})})})}r(WI,"createClientSocketTransport");Ee.createClientSocketTransport=WI;function zI(e,t="utf-8"){let n=(0,nl.createConnection)(e,"127.0.0.1");return[new Vo(n,t),new Wo(n,t)]}r(zI,"createServerSocketTransport");Ee.createServerSocketTransport=zI;function HI(e){let t=e;return t.read!==void 0&&t.addListener!==void 0}r(HI,"isReadableStream");function YI(e){let t=e;return t.write!==void 0&&t.addListener!==void 0}r(YI,"isWritableStream");function KI(e,t,n,o){n||(n=vr.NullLogger);let i=HI(e)?new tl(e):e,a=YI(t)?new rl(t):t;return vr.ConnectionStrategy.is(o)&&(o={connectionStrategy:o}),(0,vr.createMessageConnection)(i,a,n,o)}r(KI,"createMessageConnection");Ee.createMessageConnection=KI});var oE=K((w3,Oy)=>{"use strict";Oy.exports=zo()});var il=K((Ly,ol)=>{(function(e){if(typeof ol=="object"&&typeof ol.exports=="object"){var t=e(require,Ly);t!==void 0&&(ol.exports=t)}else typeof define=="function"&&define.amd&&define(["require","exports"],e)})(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextDocument=t.EOL=t.WorkspaceFolder=t.InlineCompletionContext=t.SelectedCompletionInfo=t.InlineCompletionTriggerKind=t.InlineCompletionList=t.InlineCompletionItem=t.StringValue=t.InlayHint=t.InlayHintLabelPart=t.InlayHintKind=t.InlineValueContext=t.InlineValueEvaluatableExpression=t.InlineValueVariableLookup=t.InlineValueText=t.SemanticTokens=t.SemanticTokenModifiers=t.SemanticTokenTypes=t.SelectionRange=t.DocumentLink=t.FormattingOptions=t.CodeLens=t.CodeAction=t.CodeActionContext=t.CodeActionTriggerKind=t.CodeActionKind=t.DocumentSymbol=t.WorkspaceSymbol=t.SymbolInformation=t.SymbolTag=t.SymbolKind=t.DocumentHighlight=t.DocumentHighlightKind=t.SignatureInformation=t.ParameterInformation=t.Hover=t.MarkedString=t.CompletionList=t.CompletionItem=t.CompletionItemLabelDetails=t.InsertTextMode=t.InsertReplaceEdit=t.CompletionItemTag=t.InsertTextFormat=t.CompletionItemKind=t.MarkupContent=t.MarkupKind=t.TextDocumentItem=t.OptionalVersionedTextDocumentIdentifier=t.VersionedTextDocumentIdentifier=t.TextDocumentIdentifier=t.WorkspaceChange=t.WorkspaceEdit=t.DeleteFile=t.RenameFile=t.CreateFile=t.TextDocumentEdit=t.AnnotatedTextEdit=t.ChangeAnnotationIdentifier=t.ChangeAnnotation=t.TextEdit=t.Command=t.Diagnostic=t.CodeDescription=t.DiagnosticTag=t.DiagnosticSeverity=t.DiagnosticRelatedInformation=t.FoldingRange=t.FoldingRangeKind=t.ColorPresentation=t.ColorInformation=t.Color=t.LocationLink=t.Location=t.Range=t.Position=t.uinteger=t.integer=t.URI=t.DocumentUri=void 0;var n;(function(f){function R(x){return typeof x=="string"}r(R,"is"),f.is=R})(n||(t.DocumentUri=n={}));var o;(function(f){function R(x){return typeof x=="string"}r(R,"is"),f.is=R})(o||(t.URI=o={}));var i;(function(f){f.MIN_VALUE=-2147483648,f.MAX_VALUE=2147483647;function R(x){return typeof x=="number"&&f.MIN_VALUE<=x&&x<=f.MAX_VALUE}r(R,"is"),f.is=R})(i||(t.integer=i={}));var a;(function(f){f.MIN_VALUE=0,f.MAX_VALUE=2147483647;function R(x){return typeof x=="number"&&f.MIN_VALUE<=x&&x<=f.MAX_VALUE}r(R,"is"),f.is=R})(a||(t.uinteger=a={}));var s;(function(f){function R(m,l){return m===Number.MAX_VALUE&&(m=a.MAX_VALUE),l===Number.MAX_VALUE&&(l=a.MAX_VALUE),{line:m,character:l}}r(R,"create"),f.create=R;function x(m){var l=m;return C.objectLiteral(l)&&C.uinteger(l.line)&&C.uinteger(l.character)}r(x,"is"),f.is=x})(s||(t.Position=s={}));var c;(function(f){function R(m,l,U,D){if(C.uinteger(m)&&C.uinteger(l)&&C.uinteger(U)&&C.uinteger(D))return{start:s.create(m,l),end:s.create(U,D)};if(s.is(m)&&s.is(l))return{start:m,end:l};throw new Error("Range#create called with invalid arguments[".concat(m,", ").concat(l,", ").concat(U,", ").concat(D,"]"))}r(R,"create"),f.create=R;function x(m){var l=m;return C.objectLiteral(l)&&s.is(l.start)&&s.is(l.end)}r(x,"is"),f.is=x})(c||(t.Range=c={}));var u;(function(f){function R(m,l){return{uri:m,range:l}}r(R,"create"),f.create=R;function x(m){var l=m;return C.objectLiteral(l)&&c.is(l.range)&&(C.string(l.uri)||C.undefined(l.uri))}r(x,"is"),f.is=x})(u||(t.Location=u={}));var p;(function(f){function R(m,l,U,D){return{targetUri:m,targetRange:l,targetSelectionRange:U,originSelectionRange:D}}r(R,"create"),f.create=R;function x(m){var l=m;return C.objectLiteral(l)&&c.is(l.targetRange)&&C.string(l.targetUri)&&c.is(l.targetSelectionRange)&&(c.is(l.originSelectionRange)||C.undefined(l.originSelectionRange))}r(x,"is"),f.is=x})(p||(t.LocationLink=p={}));var g;(function(f){function R(m,l,U,D){return{red:m,green:l,blue:U,alpha:D}}r(R,"create"),f.create=R;function x(m){var l=m;return C.objectLiteral(l)&&C.numberRange(l.red,0,1)&&C.numberRange(l.green,0,1)&&C.numberRange(l.blue,0,1)&&C.numberRange(l.alpha,0,1)}r(x,"is"),f.is=x})(g||(t.Color=g={}));var S;(function(f){function R(m,l){return{range:m,color:l}}r(R,"create"),f.create=R;function x(m){var l=m;return C.objectLiteral(l)&&c.is(l.range)&&g.is(l.color)}r(x,"is"),f.is=x})(S||(t.ColorInformation=S={}));var A;(function(f){function R(m,l,U){return{label:m,textEdit:l,additionalTextEdits:U}}r(R,"create"),f.create=R;function x(m){var l=m;return C.objectLiteral(l)&&C.string(l.label)&&(C.undefined(l.textEdit)||V.is(l))&&(C.undefined(l.additionalTextEdits)||C.typedArray(l.additionalTextEdits,V.is))}r(x,"is"),f.is=x})(A||(t.ColorPresentation=A={}));var O;(function(f){f.Comment="comment",f.Imports="imports",f.Region="region"})(O||(t.FoldingRangeKind=O={}));var B;(function(f){function R(m,l,U,D,ie,lt){var Fe={startLine:m,endLine:l};return C.defined(U)&&(Fe.startCharacter=U),C.defined(D)&&(Fe.endCharacter=D),C.defined(ie)&&(Fe.kind=ie),C.defined(lt)&&(Fe.collapsedText=lt),Fe}r(R,"create"),f.create=R;function x(m){var l=m;return C.objectLiteral(l)&&C.uinteger(l.startLine)&&C.uinteger(l.startLine)&&(C.undefined(l.startCharacter)||C.uinteger(l.startCharacter))&&(C.undefined(l.endCharacter)||C.uinteger(l.endCharacter))&&(C.undefined(l.kind)||C.string(l.kind))}r(x,"is"),f.is=x})(B||(t.FoldingRange=B={}));var P;(function(f){function R(m,l){return{location:m,message:l}}r(R,"create"),f.create=R;function x(m){var l=m;return C.defined(l)&&u.is(l.location)&&C.string(l.message)}r(x,"is"),f.is=x})(P||(t.DiagnosticRelatedInformation=P={}));var z;(function(f){f.Error=1,f.Warning=2,f.Information=3,f.Hint=4})(z||(t.DiagnosticSeverity=z={}));var q;(function(f){f.Unnecessary=1,f.Deprecated=2})(q||(t.DiagnosticTag=q={}));var _;(function(f){function R(x){var m=x;return C.objectLiteral(m)&&C.string(m.href)}r(R,"is"),f.is=R})(_||(t.CodeDescription=_={}));var E;(function(f){function R(m,l,U,D,ie,lt){var Fe={range:m,message:l};return C.defined(U)&&(Fe.severity=U),C.defined(D)&&(Fe.code=D),C.defined(ie)&&(Fe.source=ie),C.defined(lt)&&(Fe.relatedInformation=lt),Fe}r(R,"create"),f.create=R;function x(m){var l,U=m;return C.defined(U)&&c.is(U.range)&&C.string(U.message)&&(C.number(U.severity)||C.undefined(U.severity))&&(C.integer(U.code)||C.string(U.code)||C.undefined(U.code))&&(C.undefined(U.codeDescription)||C.string((l=U.codeDescription)===null||l===void 0?void 0:l.href))&&(C.string(U.source)||C.undefined(U.source))&&(C.undefined(U.relatedInformation)||C.typedArray(U.relatedInformation,P.is))}r(x,"is"),f.is=x})(E||(t.Diagnostic=E={}));var w;(function(f){function R(m,l){for(var U=[],D=2;D<arguments.length;D++)U[D-2]=arguments[D];var ie={title:m,command:l};return C.defined(U)&&U.length>0&&(ie.arguments=U),ie}r(R,"create"),f.create=R;function x(m){var l=m;return C.defined(l)&&C.string(l.title)&&C.string(l.command)}r(x,"is"),f.is=x})(w||(t.Command=w={}));var V;(function(f){function R(U,D){return{range:U,newText:D}}r(R,"replace"),f.replace=R;function x(U,D){return{range:{start:U,end:U},newText:D}}r(x,"insert"),f.insert=x;function m(U){return{range:U,newText:""}}r(m,"del"),f.del=m;function l(U){var D=U;return C.objectLiteral(D)&&C.string(D.newText)&&c.is(D.range)}r(l,"is"),f.is=l})(V||(t.TextEdit=V={}));var le;(function(f){function R(m,l,U){var D={label:m};return l!==void 0&&(D.needsConfirmation=l),U!==void 0&&(D.description=U),D}r(R,"create"),f.create=R;function x(m){var l=m;return C.objectLiteral(l)&&C.string(l.label)&&(C.boolean(l.needsConfirmation)||l.needsConfirmation===void 0)&&(C.string(l.description)||l.description===void 0)}r(x,"is"),f.is=x})(le||(t.ChangeAnnotation=le={}));var we;(function(f){function R(x){var m=x;return C.string(m)}r(R,"is"),f.is=R})(we||(t.ChangeAnnotationIdentifier=we={}));var st;(function(f){function R(U,D,ie){return{range:U,newText:D,annotationId:ie}}r(R,"replace"),f.replace=R;function x(U,D,ie){return{range:{start:U,end:U},newText:D,annotationId:ie}}r(x,"insert"),f.insert=x;function m(U,D){return{range:U,newText:"",annotationId:D}}r(m,"del"),f.del=m;function l(U){var D=U;return V.is(D)&&(le.is(D.annotationId)||we.is(D.annotationId))}r(l,"is"),f.is=l})(st||(t.AnnotatedTextEdit=st={}));var zr;(function(f){function R(m,l){return{textDocument:m,edits:l}}r(R,"create"),f.create=R;function x(m){var l=m;return C.defined(l)&&ln.is(l.textDocument)&&Array.isArray(l.edits)}r(x,"is"),f.is=x})(zr||(t.TextDocumentEdit=zr={}));var fr;(function(f){function R(m,l,U){var D={kind:"create",uri:m};return l!==void 0&&(l.overwrite!==void 0||l.ignoreIfExists!==void 0)&&(D.options=l),U!==void 0&&(D.annotationId=U),D}r(R,"create"),f.create=R;function x(m){var l=m;return l&&l.kind==="create"&&C.string(l.uri)&&(l.options===void 0||(l.options.overwrite===void 0||C.boolean(l.options.overwrite))&&(l.options.ignoreIfExists===void 0||C.boolean(l.options.ignoreIfExists)))&&(l.annotationId===void 0||we.is(l.annotationId))}r(x,"is"),f.is=x})(fr||(t.CreateFile=fr={}));var Gt;(function(f){function R(m,l,U,D){var ie={kind:"rename",oldUri:m,newUri:l};return U!==void 0&&(U.overwrite!==void 0||U.ignoreIfExists!==void 0)&&(ie.options=U),D!==void 0&&(ie.annotationId=D),ie}r(R,"create"),f.create=R;function x(m){var l=m;return l&&l.kind==="rename"&&C.string(l.oldUri)&&C.string(l.newUri)&&(l.options===void 0||(l.options.overwrite===void 0||C.boolean(l.options.overwrite))&&(l.options.ignoreIfExists===void 0||C.boolean(l.options.ignoreIfExists)))&&(l.annotationId===void 0||we.is(l.annotationId))}r(x,"is"),f.is=x})(Gt||(t.RenameFile=Gt={}));var _t;(function(f){function R(m,l,U){var D={kind:"delete",uri:m};return l!==void 0&&(l.recursive!==void 0||l.ignoreIfNotExists!==void 0)&&(D.options=l),U!==void 0&&(D.annotationId=U),D}r(R,"create"),f.create=R;function x(m){var l=m;return l&&l.kind==="delete"&&C.string(l.uri)&&(l.options===void 0||(l.options.recursive===void 0||C.boolean(l.options.recursive))&&(l.options.ignoreIfNotExists===void 0||C.boolean(l.options.ignoreIfNotExists)))&&(l.annotationId===void 0||we.is(l.annotationId))}r(x,"is"),f.is=x})(_t||(t.DeleteFile=_t={}));var zn;(function(f){function R(x){var m=x;return m&&(m.changes!==void 0||m.documentChanges!==void 0)&&(m.documentChanges===void 0||m.documentChanges.every(function(l){return C.string(l.kind)?fr.is(l)||Gt.is(l)||_t.is(l):zr.is(l)}))}r(R,"is"),f.is=R})(zn||(t.WorkspaceEdit=zn={}));var an=(function(){function f(R,x){this.edits=R,this.changeAnnotations=x}return r(f,"TextEditChangeImpl"),f.prototype.insert=function(R,x,m){var l,U;if(m===void 0?l=V.insert(R,x):we.is(m)?(U=m,l=st.insert(R,x,m)):(this.assertChangeAnnotations(this.changeAnnotations),U=this.changeAnnotations.manage(m),l=st.insert(R,x,U)),this.edits.push(l),U!==void 0)return U},f.prototype.replace=function(R,x,m){var l,U;if(m===void 0?l=V.replace(R,x):we.is(m)?(U=m,l=st.replace(R,x,m)):(this.assertChangeAnnotations(this.changeAnnotations),U=this.changeAnnotations.manage(m),l=st.replace(R,x,U)),this.edits.push(l),U!==void 0)return U},f.prototype.delete=function(R,x){var m,l;if(x===void 0?m=V.del(R):we.is(x)?(l=x,m=st.del(R,x)):(this.assertChangeAnnotations(this.changeAnnotations),l=this.changeAnnotations.manage(x),m=st.del(R,l)),this.edits.push(m),l!==void 0)return l},f.prototype.add=function(R){this.edits.push(R)},f.prototype.all=function(){return this.edits},f.prototype.clear=function(){this.edits.splice(0,this.edits.length)},f.prototype.assertChangeAnnotations=function(R){if(R===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},f})(),Un=(function(){function f(R){this._annotations=R===void 0?Object.create(null):R,this._counter=0,this._size=0}return r(f,"ChangeAnnotations"),f.prototype.all=function(){return this._annotations},Object.defineProperty(f.prototype,"size",{get:r(function(){return this._size},"get"),enumerable:!1,configurable:!0}),f.prototype.manage=function(R,x){var m;if(we.is(R)?m=R:(m=this.nextId(),x=R),this._annotations[m]!==void 0)throw new Error("Id ".concat(m," is already in use."));if(x===void 0)throw new Error("No annotation provided for id ".concat(m));return this._annotations[m]=x,this._size++,m},f.prototype.nextId=function(){return this._counter++,this._counter.toString()},f})(),Lr=(function(){function f(R){var x=this;this._textEditChanges=Object.create(null),R!==void 0?(this._workspaceEdit=R,R.documentChanges?(this._changeAnnotations=new Un(R.changeAnnotations),R.changeAnnotations=this._changeAnnotations.all(),R.documentChanges.forEach(function(m){if(zr.is(m)){var l=new an(m.edits,x._changeAnnotations);x._textEditChanges[m.textDocument.uri]=l}})):R.changes&&Object.keys(R.changes).forEach(function(m){var l=new an(R.changes[m]);x._textEditChanges[m]=l})):this._workspaceEdit={}}return r(f,"WorkspaceChange"),Object.defineProperty(f.prototype,"edit",{get:r(function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},"get"),enumerable:!1,configurable:!0}),f.prototype.getTextEditChange=function(R){if(ln.is(R)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var x={uri:R.uri,version:R.version},m=this._textEditChanges[x.uri];if(!m){var l=[],U={textDocument:x,edits:l};this._workspaceEdit.documentChanges.push(U),m=new an(l,this._changeAnnotations),this._textEditChanges[x.uri]=m}return m}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var m=this._textEditChanges[R];if(!m){var l=[];this._workspaceEdit.changes[R]=l,m=new an(l),this._textEditChanges[R]=m}return m}},f.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new Un,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},f.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},f.prototype.createFile=function(R,x,m){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var l;le.is(x)||we.is(x)?l=x:m=x;var U,D;if(l===void 0?U=fr.create(R,m):(D=we.is(l)?l:this._changeAnnotations.manage(l),U=fr.create(R,m,D)),this._workspaceEdit.documentChanges.push(U),D!==void 0)return D},f.prototype.renameFile=function(R,x,m,l){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var U;le.is(m)||we.is(m)?U=m:l=m;var D,ie;if(U===void 0?D=Gt.create(R,x,l):(ie=we.is(U)?U:this._changeAnnotations.manage(U),D=Gt.create(R,x,l,ie)),this._workspaceEdit.documentChanges.push(D),ie!==void 0)return ie},f.prototype.deleteFile=function(R,x,m){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var l;le.is(x)||we.is(x)?l=x:m=x;var U,D;if(l===void 0?U=_t.create(R,m):(D=we.is(l)?l:this._changeAnnotations.manage(l),U=_t.create(R,m,D)),this._workspaceEdit.documentChanges.push(U),D!==void 0)return D},f})();t.WorkspaceChange=Lr;var sn;(function(f){function R(m){return{uri:m}}r(R,"create"),f.create=R;function x(m){var l=m;return C.defined(l)&&C.string(l.uri)}r(x,"is"),f.is=x})(sn||(t.TextDocumentIdentifier=sn={}));var cn;(function(f){function R(m,l){return{uri:m,version:l}}r(R,"create"),f.create=R;function x(m){var l=m;return C.defined(l)&&C.string(l.uri)&&C.integer(l.version)}r(x,"is"),f.is=x})(cn||(t.VersionedTextDocumentIdentifier=cn={}));var ln;(function(f){function R(m,l){return{uri:m,version:l}}r(R,"create"),f.create=R;function x(m){var l=m;return C.defined(l)&&C.string(l.uri)&&(l.version===null||C.integer(l.version))}r(x,"is"),f.is=x})(ln||(t.OptionalVersionedTextDocumentIdentifier=ln={}));var ar;(function(f){function R(m,l,U,D){return{uri:m,languageId:l,version:U,text:D}}r(R,"create"),f.create=R;function x(m){var l=m;return C.defined(l)&&C.string(l.uri)&&C.string(l.languageId)&&C.integer(l.version)&&C.string(l.text)}r(x,"is"),f.is=x})(ar||(t.TextDocumentItem=ar={}));var Cn;(function(f){f.PlainText="plaintext",f.Markdown="markdown";function R(x){var m=x;return m===f.PlainText||m===f.Markdown}r(R,"is"),f.is=R})(Cn||(t.MarkupKind=Cn={}));var un;(function(f){function R(x){var m=x;return C.objectLiteral(x)&&Cn.is(m.kind)&&C.string(m.value)}r(R,"is"),f.is=R})(un||(t.MarkupContent=un={}));var ai;(function(f){f.Text=1,f.Method=2,f.Function=3,f.Constructor=4,f.Field=5,f.Variable=6,f.Class=7,f.Interface=8,f.Module=9,f.Property=10,f.Unit=11,f.Value=12,f.Enum=13,f.Keyword=14,f.Snippet=15,f.Color=16,f.File=17,f.Reference=18,f.Folder=19,f.EnumMember=20,f.Constant=21,f.Struct=22,f.Event=23,f.Operator=24,f.TypeParameter=25})(ai||(t.CompletionItemKind=ai={}));var Hn;(function(f){f.PlainText=1,f.Snippet=2})(Hn||(t.InsertTextFormat=Hn={}));var jt;(function(f){f.Deprecated=1})(jt||(t.CompletionItemTag=jt={}));var Bo;(function(f){function R(m,l,U){return{newText:m,insert:l,replace:U}}r(R,"create"),f.create=R;function x(m){var l=m;return l&&C.string(l.newText)&&c.is(l.insert)&&c.is(l.replace)}r(x,"is"),f.is=x})(Bo||(t.InsertReplaceEdit=Bo={}));var ht;(function(f){f.asIs=1,f.adjustIndentation=2})(ht||(t.InsertTextMode=ht={}));var Vt;(function(f){function R(x){var m=x;return m&&(C.string(m.detail)||m.detail===void 0)&&(C.string(m.description)||m.description===void 0)}r(R,"is"),f.is=R})(Vt||(t.CompletionItemLabelDetails=Vt={}));var Hr;(function(f){function R(x){return{label:x}}r(R,"create"),f.create=R})(Hr||(t.CompletionItem=Hr={}));var Ft;(function(f){function R(x,m){return{items:x||[],isIncomplete:!!m}}r(R,"create"),f.create=R})(Ft||(t.CompletionList=Ft={}));var Kt;(function(f){function R(m){return m.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}r(R,"fromPlainText"),f.fromPlainText=R;function x(m){var l=m;return C.string(l)||C.objectLiteral(l)&&C.string(l.language)&&C.string(l.value)}r(x,"is"),f.is=x})(Kt||(t.MarkedString=Kt={}));var bt;(function(f){function R(x){var m=x;return!!m&&C.objectLiteral(m)&&(un.is(m.contents)||Kt.is(m.contents)||C.typedArray(m.contents,Kt.is))&&(x.range===void 0||c.is(x.range))}r(R,"is"),f.is=R})(bt||(t.Hover=bt={}));var pr;(function(f){function R(x,m){return m?{label:x,documentation:m}:{label:x}}r(R,"create"),f.create=R})(pr||(t.ParameterInformation=pr={}));var Nr;(function(f){function R(x,m){for(var l=[],U=2;U<arguments.length;U++)l[U-2]=arguments[U];var D={label:x};return C.defined(m)&&(D.documentation=m),C.defined(l)?D.parameters=l:D.parameters=[],D}r(R,"create"),f.create=R})(Nr||(t.SignatureInformation=Nr={}));var Yr;(function(f){f.Text=1,f.Read=2,f.Write=3})(Yr||(t.DocumentHighlightKind=Yr={}));var Go;(function(f){function R(x,m){var l={range:x};return C.number(m)&&(l.kind=m),l}r(R,"create"),f.create=R})(Go||(t.DocumentHighlight=Go={}));var si;(function(f){f.File=1,f.Module=2,f.Namespace=3,f.Package=4,f.Class=5,f.Method=6,f.Property=7,f.Field=8,f.Constructor=9,f.Enum=10,f.Interface=11,f.Function=12,f.Variable=13,f.Constant=14,f.String=15,f.Number=16,f.Boolean=17,f.Array=18,f.Object=19,f.Key=20,f.Null=21,f.EnumMember=22,f.Struct=23,f.Event=24,f.Operator=25,f.TypeParameter=26})(si||(t.SymbolKind=si={}));var Lc;(function(f){f.Deprecated=1})(Lc||(t.SymbolTag=Lc={}));var On;(function(f){function R(x,m,l,U,D){var ie={name:x,kind:m,location:{uri:U,range:l}};return D&&(ie.containerName=D),ie}r(R,"create"),f.create=R})(On||(t.SymbolInformation=On={}));var Yn;(function(f){function R(x,m,l,U){return U!==void 0?{name:x,kind:m,location:{uri:l,range:U}}:{name:x,kind:m,location:{uri:l}}}r(R,"create"),f.create=R})(Yn||(t.WorkspaceSymbol=Yn={}));var Nc;(function(f){function R(m,l,U,D,ie,lt){var Fe={name:m,detail:l,kind:U,range:D,selectionRange:ie};return lt!==void 0&&(Fe.children=lt),Fe}r(R,"create"),f.create=R;function x(m){var l=m;return l&&C.string(l.name)&&C.number(l.kind)&&c.is(l.range)&&c.is(l.selectionRange)&&(l.detail===void 0||C.string(l.detail))&&(l.deprecated===void 0||C.boolean(l.deprecated))&&(l.children===void 0||Array.isArray(l.children))&&(l.tags===void 0||Array.isArray(l.tags))}r(x,"is"),f.is=x})(Nc||(t.DocumentSymbol=Nc={}));var Mc;(function(f){f.Empty="",f.QuickFix="quickfix",f.Refactor="refactor",f.RefactorExtract="refactor.extract",f.RefactorInline="refactor.inline",f.RefactorRewrite="refactor.rewrite",f.Source="source",f.SourceOrganizeImports="source.organizeImports",f.SourceFixAll="source.fixAll"})(Mc||(t.CodeActionKind=Mc={}));var dn;(function(f){f.Invoked=1,f.Automatic=2})(dn||(t.CodeActionTriggerKind=dn={}));var fs;(function(f){function R(m,l,U){var D={diagnostics:m};return l!=null&&(D.only=l),U!=null&&(D.triggerKind=U),D}r(R,"create"),f.create=R;function x(m){var l=m;return C.defined(l)&&C.typedArray(l.diagnostics,E.is)&&(l.only===void 0||C.typedArray(l.only,C.string))&&(l.triggerKind===void 0||l.triggerKind===dn.Invoked||l.triggerKind===dn.Automatic)}r(x,"is"),f.is=x})(fs||(t.CodeActionContext=fs={}));var ps;(function(f){function R(m,l,U){var D={title:m},ie=!0;return typeof l=="string"?(ie=!1,D.kind=l):w.is(l)?D.command=l:D.edit=l,ie&&U!==void 0&&(D.kind=U),D}r(R,"create"),f.create=R;function x(m){var l=m;return l&&C.string(l.title)&&(l.diagnostics===void 0||C.typedArray(l.diagnostics,E.is))&&(l.kind===void 0||C.string(l.kind))&&(l.edit!==void 0||l.command!==void 0)&&(l.command===void 0||w.is(l.command))&&(l.isPreferred===void 0||C.boolean(l.isPreferred))&&(l.edit===void 0||zn.is(l.edit))}r(x,"is"),f.is=x})(ps||(t.CodeAction=ps={}));var ci;(function(f){function R(m,l){var U={range:m};return C.defined(l)&&(U.data=l),U}r(R,"create"),f.create=R;function x(m){var l=m;return C.defined(l)&&c.is(l.range)&&(C.undefined(l.command)||w.is(l.command))}r(x,"is"),f.is=x})(ci||(t.CodeLens=ci={}));var ms;(function(f){function R(m,l){return{tabSize:m,insertSpaces:l}}r(R,"create"),f.create=R;function x(m){var l=m;return C.defined(l)&&C.uinteger(l.tabSize)&&C.boolean(l.insertSpaces)}r(x,"is"),f.is=x})(ms||(t.FormattingOptions=ms={}));var Ln;(function(f){function R(m,l,U){return{range:m,target:l,data:U}}r(R,"create"),f.create=R;function x(m){var l=m;return C.defined(l)&&c.is(l.range)&&(C.undefined(l.target)||C.string(l.target))}r(x,"is"),f.is=x})(Ln||(t.DocumentLink=Ln={}));var y;(function(f){function R(m,l){return{range:m,parent:l}}r(R,"create"),f.create=R;function x(m){var l=m;return C.objectLiteral(l)&&c.is(l.range)&&(l.parent===void 0||f.is(l.parent))}r(x,"is"),f.is=x})(y||(t.SelectionRange=y={}));var I;(function(f){f.namespace="namespace",f.type="type",f.class="class",f.enum="enum",f.interface="interface",f.struct="struct",f.typeParameter="typeParameter",f.parameter="parameter",f.variable="variable",f.property="property",f.enumMember="enumMember",f.event="event",f.function="function",f.method="method",f.macro="macro",f.keyword="keyword",f.modifier="modifier",f.comment="comment",f.string="string",f.number="number",f.regexp="regexp",f.operator="operator",f.decorator="decorator"})(I||(t.SemanticTokenTypes=I={}));var W;(function(f){f.declaration="declaration",f.definition="definition",f.readonly="readonly",f.static="static",f.deprecated="deprecated",f.abstract="abstract",f.async="async",f.modification="modification",f.documentation="documentation",f.defaultLibrary="defaultLibrary"})(W||(t.SemanticTokenModifiers=W={}));var Z;(function(f){function R(x){var m=x;return C.objectLiteral(m)&&(m.resultId===void 0||typeof m.resultId=="string")&&Array.isArray(m.data)&&(m.data.length===0||typeof m.data[0]=="number")}r(R,"is"),f.is=R})(Z||(t.SemanticTokens=Z={}));var Oe;(function(f){function R(m,l){return{range:m,text:l}}r(R,"create"),f.create=R;function x(m){var l=m;return l!=null&&c.is(l.range)&&C.string(l.text)}r(x,"is"),f.is=x})(Oe||(t.InlineValueText=Oe={}));var ve;(function(f){function R(m,l,U){return{range:m,variableName:l,caseSensitiveLookup:U}}r(R,"create"),f.create=R;function x(m){var l=m;return l!=null&&c.is(l.range)&&C.boolean(l.caseSensitiveLookup)&&(C.string(l.variableName)||l.variableName===void 0)}r(x,"is"),f.is=x})(ve||(t.InlineValueVariableLookup=ve={}));var Ge;(function(f){function R(m,l){return{range:m,expression:l}}r(R,"create"),f.create=R;function x(m){var l=m;return l!=null&&c.is(l.range)&&(C.string(l.expression)||l.expression===void 0)}r(x,"is"),f.is=x})(Ge||(t.InlineValueEvaluatableExpression=Ge={}));var He;(function(f){function R(m,l){return{frameId:m,stoppedLocation:l}}r(R,"create"),f.create=R;function x(m){var l=m;return C.defined(l)&&c.is(m.stoppedLocation)}r(x,"is"),f.is=x})(He||(t.InlineValueContext=He={}));var fe;(function(f){f.Type=1,f.Parameter=2;function R(x){return x===1||x===2}r(R,"is"),f.is=R})(fe||(t.InlayHintKind=fe={}));var Ne;(function(f){function R(m){return{value:m}}r(R,"create"),f.create=R;function x(m){var l=m;return C.objectLiteral(l)&&(l.tooltip===void 0||C.string(l.tooltip)||un.is(l.tooltip))&&(l.location===void 0||u.is(l.location))&&(l.command===void 0||w.is(l.command))}r(x,"is"),f.is=x})(Ne||(t.InlayHintLabelPart=Ne={}));var _e;(function(f){function R(m,l,U){var D={position:m,label:l};return U!==void 0&&(D.kind=U),D}r(R,"create"),f.create=R;function x(m){var l=m;return C.objectLiteral(l)&&s.is(l.position)&&(C.string(l.label)||C.typedArray(l.label,Ne.is))&&(l.kind===void 0||fe.is(l.kind))&&l.textEdits===void 0||C.typedArray(l.textEdits,V.is)&&(l.tooltip===void 0||C.string(l.tooltip)||un.is(l.tooltip))&&(l.paddingLeft===void 0||C.boolean(l.paddingLeft))&&(l.paddingRight===void 0||C.boolean(l.paddingRight))}r(x,"is"),f.is=x})(_e||(t.InlayHint=_e={}));var ct;(function(f){function R(x){return{kind:"snippet",value:x}}r(R,"createSnippet"),f.createSnippet=R})(ct||(t.StringValue=ct={}));var It;(function(f){function R(x,m,l,U){return{insertText:x,filterText:m,range:l,command:U}}r(R,"create"),f.create=R})(It||(t.InlineCompletionItem=It={}));var Ar;(function(f){function R(x){return{items:x}}r(R,"create"),f.create=R})(Ar||(t.InlineCompletionList=Ar={}));var wc;(function(f){f.Invoked=0,f.Automatic=1})(wc||(t.InlineCompletionTriggerKind=wc={}));var HS;(function(f){function R(x,m){return{range:x,text:m}}r(R,"create"),f.create=R})(HS||(t.SelectedCompletionInfo=HS={}));var YS;(function(f){function R(x,m){return{triggerKind:x,selectedCompletionInfo:m}}r(R,"create"),f.create=R})(YS||(t.InlineCompletionContext=YS={}));var KS;(function(f){function R(x){var m=x;return C.objectLiteral(m)&&o.is(m.uri)&&C.string(m.name)}r(R,"is"),f.is=R})(KS||(t.WorkspaceFolder=KS={})),t.EOL=[`
`,`\r
`,"\r"];var JS;(function(f){function R(U,D,ie,lt){return new eI(U,D,ie,lt)}r(R,"create"),f.create=R;function x(U){var D=U;return!!(C.defined(D)&&C.string(D.uri)&&(C.undefined(D.languageId)||C.string(D.languageId))&&C.uinteger(D.lineCount)&&C.func(D.getText)&&C.func(D.positionAt)&&C.func(D.offsetAt))}r(x,"is"),f.is=x;function m(U,D){for(var ie=U.getText(),lt=l(D,function(li,Fc){var QS=li.range.start.line-Fc.range.start.line;return QS===0?li.range.start.character-Fc.range.start.character:QS}),Fe=ie.length,Kr=lt.length-1;Kr>=0;Kr--){var Jr=lt[Kr],Nn=U.offsetAt(Jr.range.start),Te=U.offsetAt(Jr.range.end);if(Te<=Fe)ie=ie.substring(0,Nn)+Jr.newText+ie.substring(Te,ie.length);else throw new Error("Overlapping edit");Fe=Nn}return ie}r(m,"applyEdits"),f.applyEdits=m;function l(U,D){if(U.length<=1)return U;var ie=U.length/2|0,lt=U.slice(0,ie),Fe=U.slice(ie);l(lt,D),l(Fe,D);for(var Kr=0,Jr=0,Nn=0;Kr<lt.length&&Jr<Fe.length;){var Te=D(lt[Kr],Fe[Jr]);Te<=0?U[Nn++]=lt[Kr++]:U[Nn++]=Fe[Jr++]}for(;Kr<lt.length;)U[Nn++]=lt[Kr++];for(;Jr<Fe.length;)U[Nn++]=Fe[Jr++];return U}r(l,"mergeSort")})(JS||(t.TextDocument=JS={}));var eI=(function(){function f(R,x,m,l){this._uri=R,this._languageId=x,this._version=m,this._content=l,this._lineOffsets=void 0}return r(f,"FullTextDocument"),Object.defineProperty(f.prototype,"uri",{get:r(function(){return this._uri},"get"),enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"languageId",{get:r(function(){return this._languageId},"get"),enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"version",{get:r(function(){return this._version},"get"),enumerable:!1,configurable:!0}),f.prototype.getText=function(R){if(R){var x=this.offsetAt(R.start),m=this.offsetAt(R.end);return this._content.substring(x,m)}return this._content},f.prototype.update=function(R,x){this._content=R.text,this._version=x,this._lineOffsets=void 0},f.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var R=[],x=this._content,m=!0,l=0;l<x.length;l++){m&&(R.push(l),m=!1);var U=x.charAt(l);m=U==="\r"||U===`
`,U==="\r"&&l+1<x.length&&x.charAt(l+1)===`
`&&l++}m&&x.length>0&&R.push(x.length),this._lineOffsets=R}return this._lineOffsets},f.prototype.positionAt=function(R){R=Math.max(Math.min(R,this._content.length),0);var x=this.getLineOffsets(),m=0,l=x.length;if(l===0)return s.create(0,R);for(;m<l;){var U=Math.floor((m+l)/2);x[U]>R?l=U:m=U+1}var D=m-1;return s.create(D,R-x[D])},f.prototype.offsetAt=function(R){var x=this.getLineOffsets();if(R.line>=x.length)return this._content.length;if(R.line<0)return 0;var m=x[R.line],l=R.line+1<x.length?x[R.line+1]:this._content.length;return Math.max(Math.min(m+R.character,l),m)},Object.defineProperty(f.prototype,"lineCount",{get:r(function(){return this.getLineOffsets().length},"get"),enumerable:!1,configurable:!0}),f})(),C;(function(f){var R=Object.prototype.toString;function x(Te){return typeof Te<"u"}r(x,"defined"),f.defined=x;function m(Te){return typeof Te>"u"}r(m,"undefined"),f.undefined=m;function l(Te){return Te===!0||Te===!1}r(l,"boolean"),f.boolean=l;function U(Te){return R.call(Te)==="[object String]"}r(U,"string"),f.string=U;function D(Te){return R.call(Te)==="[object Number]"}r(D,"number"),f.number=D;function ie(Te,li,Fc){return R.call(Te)==="[object Number]"&&li<=Te&&Te<=Fc}r(ie,"numberRange"),f.numberRange=ie;function lt(Te){return R.call(Te)==="[object Number]"&&-2147483648<=Te&&Te<=2147483647}r(lt,"integer"),f.integer=lt;function Fe(Te){return R.call(Te)==="[object Number]"&&0<=Te&&Te<=2147483647}r(Fe,"uinteger"),f.uinteger=Fe;function Kr(Te){return R.call(Te)==="[object Function]"}r(Kr,"func"),f.func=Kr;function Jr(Te){return Te!==null&&typeof Te=="object"}r(Jr,"objectLiteral"),f.objectLiteral=Jr;function Nn(Te,li){return Array.isArray(Te)&&Te.every(li)}r(Nn,"typedArray"),f.typedArray=Nn})(C||(C={}))})});var Ye=K(hr=>{"use strict";Object.defineProperty(hr,"__esModule",{value:!0});hr.ProtocolNotificationType=hr.ProtocolNotificationType0=hr.ProtocolRequestType=hr.ProtocolRequestType0=hr.RegistrationType=hr.MessageDirection=void 0;var Ei=zo(),Ny;(function(e){e.clientToServer="clientToServer",e.serverToClient="serverToClient",e.both="both"})(Ny||(hr.MessageDirection=Ny={}));var iE=class{static{r(this,"RegistrationType")}constructor(t){this.method=t}};hr.RegistrationType=iE;var aE=class extends Ei.RequestType0{static{r(this,"ProtocolRequestType0")}constructor(t){super(t)}};hr.ProtocolRequestType0=aE;var sE=class extends Ei.RequestType{static{r(this,"ProtocolRequestType")}constructor(t){super(t,Ei.ParameterStructures.byName)}};hr.ProtocolRequestType=sE;var cE=class extends Ei.NotificationType0{static{r(this,"ProtocolNotificationType0")}constructor(t){super(t)}};hr.ProtocolNotificationType0=cE;var lE=class extends Ei.NotificationType{static{r(this,"ProtocolNotificationType")}constructor(t){super(t,Ei.ParameterStructures.byName)}};hr.ProtocolNotificationType=lE});var al=K(xt=>{"use strict";Object.defineProperty(xt,"__esModule",{value:!0});xt.objectLiteral=xt.typedArray=xt.stringArray=xt.array=xt.func=xt.error=xt.number=xt.string=xt.boolean=void 0;function JI(e){return e===!0||e===!1}r(JI,"boolean");xt.boolean=JI;function My(e){return typeof e=="string"||e instanceof String}r(My,"string");xt.string=My;function QI(e){return typeof e=="number"||e instanceof Number}r(QI,"number");xt.number=QI;function XI(e){return e instanceof Error}r(XI,"error");xt.error=XI;function ZI(e){return typeof e=="function"}r(ZI,"func");xt.func=ZI;function wy(e){return Array.isArray(e)}r(wy,"array");xt.array=wy;function $I(e){return wy(e)&&e.every(t=>My(t))}r($I,"stringArray");xt.stringArray=$I;function eP(e,t){return Array.isArray(e)&&e.every(t)}r(eP,"typedArray");xt.typedArray=eP;function tP(e){return e!==null&&typeof e=="object"}r(tP,"objectLiteral");xt.objectLiteral=tP});var Py=K(sl=>{"use strict";Object.defineProperty(sl,"__esModule",{value:!0});sl.ImplementationRequest=void 0;var Fy=Ye(),Iy;(function(e){e.method="textDocument/implementation",e.messageDirection=Fy.MessageDirection.clientToServer,e.type=new Fy.ProtocolRequestType(e.method)})(Iy||(sl.ImplementationRequest=Iy={}))});var By=K(cl=>{"use strict";Object.defineProperty(cl,"__esModule",{value:!0});cl.TypeDefinitionRequest=void 0;var Dy=Ye(),qy;(function(e){e.method="textDocument/typeDefinition",e.messageDirection=Dy.MessageDirection.clientToServer,e.type=new Dy.ProtocolRequestType(e.method)})(qy||(cl.TypeDefinitionRequest=qy={}))});var Vy=K(Si=>{"use strict";Object.defineProperty(Si,"__esModule",{value:!0});Si.DidChangeWorkspaceFoldersNotification=Si.WorkspaceFoldersRequest=void 0;var ll=Ye(),Gy;(function(e){e.method="workspace/workspaceFolders",e.messageDirection=ll.MessageDirection.serverToClient,e.type=new ll.ProtocolRequestType0(e.method)})(Gy||(Si.WorkspaceFoldersRequest=Gy={}));var jy;(function(e){e.method="workspace/didChangeWorkspaceFolders",e.messageDirection=ll.MessageDirection.clientToServer,e.type=new ll.ProtocolNotificationType(e.method)})(jy||(Si.DidChangeWorkspaceFoldersNotification=jy={}))});var Hy=K(ul=>{"use strict";Object.defineProperty(ul,"__esModule",{value:!0});ul.ConfigurationRequest=void 0;var Wy=Ye(),zy;(function(e){e.method="workspace/configuration",e.messageDirection=Wy.MessageDirection.serverToClient,e.type=new Wy.ProtocolRequestType(e.method)})(zy||(ul.ConfigurationRequest=zy={}))});var Jy=K(yi=>{"use strict";Object.defineProperty(yi,"__esModule",{value:!0});yi.ColorPresentationRequest=yi.DocumentColorRequest=void 0;var dl=Ye(),Yy;(function(e){e.method="textDocument/documentColor",e.messageDirection=dl.MessageDirection.clientToServer,e.type=new dl.ProtocolRequestType(e.method)})(Yy||(yi.DocumentColorRequest=Yy={}));var Ky;(function(e){e.method="textDocument/colorPresentation",e.messageDirection=dl.MessageDirection.clientToServer,e.type=new dl.ProtocolRequestType(e.method)})(Ky||(yi.ColorPresentationRequest=Ky={}))});var Zy=K(_i=>{"use strict";Object.defineProperty(_i,"__esModule",{value:!0});_i.FoldingRangeRefreshRequest=_i.FoldingRangeRequest=void 0;var fl=Ye(),Qy;(function(e){e.method="textDocument/foldingRange",e.messageDirection=fl.MessageDirection.clientToServer,e.type=new fl.ProtocolRequestType(e.method)})(Qy||(_i.FoldingRangeRequest=Qy={}));var Xy;(function(e){e.method="workspace/foldingRange/refresh",e.messageDirection=fl.MessageDirection.serverToClient,e.type=new fl.ProtocolRequestType0(e.method)})(Xy||(_i.FoldingRangeRefreshRequest=Xy={}))});var t_=K(pl=>{"use strict";Object.defineProperty(pl,"__esModule",{value:!0});pl.DeclarationRequest=void 0;var $y=Ye(),e_;(function(e){e.method="textDocument/declaration",e.messageDirection=$y.MessageDirection.clientToServer,e.type=new $y.ProtocolRequestType(e.method)})(e_||(pl.DeclarationRequest=e_={}))});var o_=K(ml=>{"use strict";Object.defineProperty(ml,"__esModule",{value:!0});ml.SelectionRangeRequest=void 0;var r_=Ye(),n_;(function(e){e.method="textDocument/selectionRange",e.messageDirection=r_.MessageDirection.clientToServer,e.type=new r_.ProtocolRequestType(e.method)})(n_||(ml.SelectionRangeRequest=n_={}))});var c_=K(Zn=>{"use strict";Object.defineProperty(Zn,"__esModule",{value:!0});Zn.WorkDoneProgressCancelNotification=Zn.WorkDoneProgressCreateRequest=Zn.WorkDoneProgress=void 0;var rP=zo(),hl=Ye(),i_;(function(e){e.type=new rP.ProgressType;function t(n){return n===e.type}r(t,"is"),e.is=t})(i_||(Zn.WorkDoneProgress=i_={}));var a_;(function(e){e.method="window/workDoneProgress/create",e.messageDirection=hl.MessageDirection.serverToClient,e.type=new hl.ProtocolRequestType(e.method)})(a_||(Zn.WorkDoneProgressCreateRequest=a_={}));var s_;(function(e){e.method="window/workDoneProgress/cancel",e.messageDirection=hl.MessageDirection.clientToServer,e.type=new hl.ProtocolNotificationType(e.method)})(s_||(Zn.WorkDoneProgressCancelNotification=s_={}))});var f_=K($n=>{"use strict";Object.defineProperty($n,"__esModule",{value:!0});$n.CallHierarchyOutgoingCallsRequest=$n.CallHierarchyIncomingCallsRequest=$n.CallHierarchyPrepareRequest=void 0;var bi=Ye(),l_;(function(e){e.method="textDocument/prepareCallHierarchy",e.messageDirection=bi.MessageDirection.clientToServer,e.type=new bi.ProtocolRequestType(e.method)})(l_||($n.CallHierarchyPrepareRequest=l_={}));var u_;(function(e){e.method="callHierarchy/incomingCalls",e.messageDirection=bi.MessageDirection.clientToServer,e.type=new bi.ProtocolRequestType(e.method)})(u_||($n.CallHierarchyIncomingCallsRequest=u_={}));var d_;(function(e){e.method="callHierarchy/outgoingCalls",e.messageDirection=bi.MessageDirection.clientToServer,e.type=new bi.ProtocolRequestType(e.method)})(d_||($n.CallHierarchyOutgoingCallsRequest=d_={}))});var E_=K(gr=>{"use strict";Object.defineProperty(gr,"__esModule",{value:!0});gr.SemanticTokensRefreshRequest=gr.SemanticTokensRangeRequest=gr.SemanticTokensDeltaRequest=gr.SemanticTokensRequest=gr.SemanticTokensRegistrationType=gr.TokenFormat=void 0;var wn=Ye(),p_;(function(e){e.Relative="relative"})(p_||(gr.TokenFormat=p_={}));var bs;(function(e){e.method="textDocument/semanticTokens",e.type=new wn.RegistrationType(e.method)})(bs||(gr.SemanticTokensRegistrationType=bs={}));var m_;(function(e){e.method="textDocument/semanticTokens/full",e.messageDirection=wn.MessageDirection.clientToServer,e.type=new wn.ProtocolRequestType(e.method),e.registrationMethod=bs.method})(m_||(gr.SemanticTokensRequest=m_={}));var h_;(function(e){e.method="textDocument/semanticTokens/full/delta",e.messageDirection=wn.MessageDirection.clientToServer,e.type=new wn.ProtocolRequestType(e.method),e.registrationMethod=bs.method})(h_||(gr.SemanticTokensDeltaRequest=h_={}));var g_;(function(e){e.method="textDocument/semanticTokens/range",e.messageDirection=wn.MessageDirection.clientToServer,e.type=new wn.ProtocolRequestType(e.method),e.registrationMethod=bs.method})(g_||(gr.SemanticTokensRangeRequest=g_={}));var T_;(function(e){e.method="workspace/semanticTokens/refresh",e.messageDirection=wn.MessageDirection.serverToClient,e.type=new wn.ProtocolRequestType0(e.method)})(T_||(gr.SemanticTokensRefreshRequest=T_={}))});var __=K(gl=>{"use strict";Object.defineProperty(gl,"__esModule",{value:!0});gl.ShowDocumentRequest=void 0;var S_=Ye(),y_;(function(e){e.method="window/showDocument",e.messageDirection=S_.MessageDirection.serverToClient,e.type=new S_.ProtocolRequestType(e.method)})(y_||(gl.ShowDocumentRequest=y_={}))});var x_=K(Tl=>{"use strict";Object.defineProperty(Tl,"__esModule",{value:!0});Tl.LinkedEditingRangeRequest=void 0;var b_=Ye(),R_;(function(e){e.method="textDocument/linkedEditingRange",e.messageDirection=b_.MessageDirection.clientToServer,e.type=new b_.ProtocolRequestType(e.method)})(R_||(Tl.LinkedEditingRangeRequest=R_={}))});var N_=K(Xt=>{"use strict";Object.defineProperty(Xt,"__esModule",{value:!0});Xt.WillDeleteFilesRequest=Xt.DidDeleteFilesNotification=Xt.DidRenameFilesNotification=Xt.WillRenameFilesRequest=Xt.DidCreateFilesNotification=Xt.WillCreateFilesRequest=Xt.FileOperationPatternKind=void 0;var Mr=Ye(),A_;(function(e){e.file="file",e.folder="folder"})(A_||(Xt.FileOperationPatternKind=A_={}));var k_;(function(e){e.method="workspace/willCreateFiles",e.messageDirection=Mr.MessageDirection.clientToServer,e.type=new Mr.ProtocolRequestType(e.method)})(k_||(Xt.WillCreateFilesRequest=k_={}));var v_;(function(e){e.method="workspace/didCreateFiles",e.messageDirection=Mr.MessageDirection.clientToServer,e.type=new Mr.ProtocolNotificationType(e.method)})(v_||(Xt.DidCreateFilesNotification=v_={}));var U_;(function(e){e.method="workspace/willRenameFiles",e.messageDirection=Mr.MessageDirection.clientToServer,e.type=new Mr.ProtocolRequestType(e.method)})(U_||(Xt.WillRenameFilesRequest=U_={}));var C_;(function(e){e.method="workspace/didRenameFiles",e.messageDirection=Mr.MessageDirection.clientToServer,e.type=new Mr.ProtocolNotificationType(e.method)})(C_||(Xt.DidRenameFilesNotification=C_={}));var O_;(function(e){e.method="workspace/didDeleteFiles",e.messageDirection=Mr.MessageDirection.clientToServer,e.type=new Mr.ProtocolNotificationType(e.method)})(O_||(Xt.DidDeleteFilesNotification=O_={}));var L_;(function(e){e.method="workspace/willDeleteFiles",e.messageDirection=Mr.MessageDirection.clientToServer,e.type=new Mr.ProtocolRequestType(e.method)})(L_||(Xt.WillDeleteFilesRequest=L_={}))});var P_=K(eo=>{"use strict";Object.defineProperty(eo,"__esModule",{value:!0});eo.MonikerRequest=eo.MonikerKind=eo.UniquenessLevel=void 0;var M_=Ye(),w_;(function(e){e.document="document",e.project="project",e.group="group",e.scheme="scheme",e.global="global"})(w_||(eo.UniquenessLevel=w_={}));var F_;(function(e){e.$import="import",e.$export="export",e.local="local"})(F_||(eo.MonikerKind=F_={}));var I_;(function(e){e.method="textDocument/moniker",e.messageDirection=M_.MessageDirection.clientToServer,e.type=new M_.ProtocolRequestType(e.method)})(I_||(eo.MonikerRequest=I_={}))});var G_=K(to=>{"use strict";Object.defineProperty(to,"__esModule",{value:!0});to.TypeHierarchySubtypesRequest=to.TypeHierarchySupertypesRequest=to.TypeHierarchyPrepareRequest=void 0;var Ri=Ye(),D_;(function(e){e.method="textDocument/prepareTypeHierarchy",e.messageDirection=Ri.MessageDirection.clientToServer,e.type=new Ri.ProtocolRequestType(e.method)})(D_||(to.TypeHierarchyPrepareRequest=D_={}));var q_;(function(e){e.method="typeHierarchy/supertypes",e.messageDirection=Ri.MessageDirection.clientToServer,e.type=new Ri.ProtocolRequestType(e.method)})(q_||(to.TypeHierarchySupertypesRequest=q_={}));var B_;(function(e){e.method="typeHierarchy/subtypes",e.messageDirection=Ri.MessageDirection.clientToServer,e.type=new Ri.ProtocolRequestType(e.method)})(B_||(to.TypeHierarchySubtypesRequest=B_={}))});var W_=K(xi=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});xi.InlineValueRefreshRequest=xi.InlineValueRequest=void 0;var El=Ye(),j_;(function(e){e.method="textDocument/inlineValue",e.messageDirection=El.MessageDirection.clientToServer,e.type=new El.ProtocolRequestType(e.method)})(j_||(xi.InlineValueRequest=j_={}));var V_;(function(e){e.method="workspace/inlineValue/refresh",e.messageDirection=El.MessageDirection.serverToClient,e.type=new El.ProtocolRequestType0(e.method)})(V_||(xi.InlineValueRefreshRequest=V_={}))});var K_=K(ro=>{"use strict";Object.defineProperty(ro,"__esModule",{value:!0});ro.InlayHintRefreshRequest=ro.InlayHintResolveRequest=ro.InlayHintRequest=void 0;var Ai=Ye(),z_;(function(e){e.method="textDocument/inlayHint",e.messageDirection=Ai.MessageDirection.clientToServer,e.type=new Ai.ProtocolRequestType(e.method)})(z_||(ro.InlayHintRequest=z_={}));var H_;(function(e){e.method="inlayHint/resolve",e.messageDirection=Ai.MessageDirection.clientToServer,e.type=new Ai.ProtocolRequestType(e.method)})(H_||(ro.InlayHintResolveRequest=H_={}));var Y_;(function(e){e.method="workspace/inlayHint/refresh",e.messageDirection=Ai.MessageDirection.serverToClient,e.type=new Ai.ProtocolRequestType0(e.method)})(Y_||(ro.InlayHintRefreshRequest=Y_={}))});var tb=K(wr=>{"use strict";Object.defineProperty(wr,"__esModule",{value:!0});wr.DiagnosticRefreshRequest=wr.WorkspaceDiagnosticRequest=wr.DocumentDiagnosticRequest=wr.DocumentDiagnosticReportKind=wr.DiagnosticServerCancellationData=void 0;var eb=zo(),nP=al(),ki=Ye(),J_;(function(e){function t(n){let o=n;return o&&nP.boolean(o.retriggerRequest)}r(t,"is"),e.is=t})(J_||(wr.DiagnosticServerCancellationData=J_={}));var Q_;(function(e){e.Full="full",e.Unchanged="unchanged"})(Q_||(wr.DocumentDiagnosticReportKind=Q_={}));var X_;(function(e){e.method="textDocument/diagnostic",e.messageDirection=ki.MessageDirection.clientToServer,e.type=new ki.ProtocolRequestType(e.method),e.partialResult=new eb.ProgressType})(X_||(wr.DocumentDiagnosticRequest=X_={}));var Z_;(function(e){e.method="workspace/diagnostic",e.messageDirection=ki.MessageDirection.clientToServer,e.type=new ki.ProtocolRequestType(e.method),e.partialResult=new eb.ProgressType})(Z_||(wr.WorkspaceDiagnosticRequest=Z_={}));var $_;(function(e){e.method="workspace/diagnostic/refresh",e.messageDirection=ki.MessageDirection.serverToClient,e.type=new ki.ProtocolRequestType0(e.method)})($_||(wr.DiagnosticRefreshRequest=$_={}))});var cb=K(ut=>{"use strict";Object.defineProperty(ut,"__esModule",{value:!0});ut.DidCloseNotebookDocumentNotification=ut.DidSaveNotebookDocumentNotification=ut.DidChangeNotebookDocumentNotification=ut.NotebookCellArrayChange=ut.DidOpenNotebookDocumentNotification=ut.NotebookDocumentSyncRegistrationType=ut.NotebookDocument=ut.NotebookCell=ut.ExecutionSummary=ut.NotebookCellKind=void 0;var Rs=il(),Xr=al(),fn=Ye(),uE;(function(e){e.Markup=1,e.Code=2;function t(n){return n===1||n===2}r(t,"is"),e.is=t})(uE||(ut.NotebookCellKind=uE={}));var dE;(function(e){function t(i,a){let s={executionOrder:i};return(a===!0||a===!1)&&(s.success=a),s}r(t,"create"),e.create=t;function n(i){let a=i;return Xr.objectLiteral(a)&&Rs.uinteger.is(a.executionOrder)&&(a.success===void 0||Xr.boolean(a.success))}r(n,"is"),e.is=n;function o(i,a){return i===a?!0:i==null||a===null||a===void 0?!1:i.executionOrder===a.executionOrder&&i.success===a.success}r(o,"equals"),e.equals=o})(dE||(ut.ExecutionSummary=dE={}));var Sl;(function(e){function t(a,s){return{kind:a,document:s}}r(t,"create"),e.create=t;function n(a){let s=a;return Xr.objectLiteral(s)&&uE.is(s.kind)&&Rs.DocumentUri.is(s.document)&&(s.metadata===void 0||Xr.objectLiteral(s.metadata))}r(n,"is"),e.is=n;function o(a,s){let c=new Set;return a.document!==s.document&&c.add("document"),a.kind!==s.kind&&c.add("kind"),a.executionSummary!==s.executionSummary&&c.add("executionSummary"),(a.metadata!==void 0||s.metadata!==void 0)&&!i(a.metadata,s.metadata)&&c.add("metadata"),(a.executionSummary!==void 0||s.executionSummary!==void 0)&&!dE.equals(a.executionSummary,s.executionSummary)&&c.add("executionSummary"),c}r(o,"diff"),e.diff=o;function i(a,s){if(a===s)return!0;if(a==null||s===null||s===void 0||typeof a!=typeof s||typeof a!="object")return!1;let c=Array.isArray(a),u=Array.isArray(s);if(c!==u)return!1;if(c&&u){if(a.length!==s.length)return!1;for(let p=0;p<a.length;p++)if(!i(a[p],s[p]))return!1}if(Xr.objectLiteral(a)&&Xr.objectLiteral(s)){let p=Object.keys(a),g=Object.keys(s);if(p.length!==g.length||(p.sort(),g.sort(),!i(p,g)))return!1;for(let S=0;S<p.length;S++){let A=p[S];if(!i(a[A],s[A]))return!1}}return!0}r(i,"equalsMetadata")})(Sl||(ut.NotebookCell=Sl={}));var rb;(function(e){function t(o,i,a,s){return{uri:o,notebookType:i,version:a,cells:s}}r(t,"create"),e.create=t;function n(o){let i=o;return Xr.objectLiteral(i)&&Xr.string(i.uri)&&Rs.integer.is(i.version)&&Xr.typedArray(i.cells,Sl.is)}r(n,"is"),e.is=n})(rb||(ut.NotebookDocument=rb={}));var vi;(function(e){e.method="notebookDocument/sync",e.messageDirection=fn.MessageDirection.clientToServer,e.type=new fn.RegistrationType(e.method)})(vi||(ut.NotebookDocumentSyncRegistrationType=vi={}));var nb;(function(e){e.method="notebookDocument/didOpen",e.messageDirection=fn.MessageDirection.clientToServer,e.type=new fn.ProtocolNotificationType(e.method),e.registrationMethod=vi.method})(nb||(ut.DidOpenNotebookDocumentNotification=nb={}));var ob;(function(e){function t(o){let i=o;return Xr.objectLiteral(i)&&Rs.uinteger.is(i.start)&&Rs.uinteger.is(i.deleteCount)&&(i.cells===void 0||Xr.typedArray(i.cells,Sl.is))}r(t,"is"),e.is=t;function n(o,i,a){let s={start:o,deleteCount:i};return a!==void 0&&(s.cells=a),s}r(n,"create"),e.create=n})(ob||(ut.NotebookCellArrayChange=ob={}));var ib;(function(e){e.method="notebookDocument/didChange",e.messageDirection=fn.MessageDirection.clientToServer,e.type=new fn.ProtocolNotificationType(e.method),e.registrationMethod=vi.method})(ib||(ut.DidChangeNotebookDocumentNotification=ib={}));var ab;(function(e){e.method="notebookDocument/didSave",e.messageDirection=fn.MessageDirection.clientToServer,e.type=new fn.ProtocolNotificationType(e.method),e.registrationMethod=vi.method})(ab||(ut.DidSaveNotebookDocumentNotification=ab={}));var sb;(function(e){e.method="notebookDocument/didClose",e.messageDirection=fn.MessageDirection.clientToServer,e.type=new fn.ProtocolNotificationType(e.method),e.registrationMethod=vi.method})(sb||(ut.DidCloseNotebookDocumentNotification=sb={}))});var db=K(yl=>{"use strict";Object.defineProperty(yl,"__esModule",{value:!0});yl.InlineCompletionRequest=void 0;var lb=Ye(),ub;(function(e){e.method="textDocument/inlineCompletion",e.messageDirection=lb.MessageDirection.clientToServer,e.type=new lb.ProtocolRequestType(e.method)})(ub||(yl.InlineCompletionRequest=ub={}))});var xR=K(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.WorkspaceSymbolRequest=T.CodeActionResolveRequest=T.CodeActionRequest=T.DocumentSymbolRequest=T.DocumentHighlightRequest=T.ReferencesRequest=T.DefinitionRequest=T.SignatureHelpRequest=T.SignatureHelpTriggerKind=T.HoverRequest=T.CompletionResolveRequest=T.CompletionRequest=T.CompletionTriggerKind=T.PublishDiagnosticsNotification=T.WatchKind=T.RelativePattern=T.FileChangeType=T.DidChangeWatchedFilesNotification=T.WillSaveTextDocumentWaitUntilRequest=T.WillSaveTextDocumentNotification=T.TextDocumentSaveReason=T.DidSaveTextDocumentNotification=T.DidCloseTextDocumentNotification=T.DidChangeTextDocumentNotification=T.TextDocumentContentChangeEvent=T.DidOpenTextDocumentNotification=T.TextDocumentSyncKind=T.TelemetryEventNotification=T.LogMessageNotification=T.ShowMessageRequest=T.ShowMessageNotification=T.MessageType=T.DidChangeConfigurationNotification=T.ExitNotification=T.ShutdownRequest=T.InitializedNotification=T.InitializeErrorCodes=T.InitializeRequest=T.WorkDoneProgressOptions=T.TextDocumentRegistrationOptions=T.StaticRegistrationOptions=T.PositionEncodingKind=T.FailureHandlingKind=T.ResourceOperationKind=T.UnregistrationRequest=T.RegistrationRequest=T.DocumentSelector=T.NotebookCellTextDocumentFilter=T.NotebookDocumentFilter=T.TextDocumentFilter=void 0;T.MonikerRequest=T.MonikerKind=T.UniquenessLevel=T.WillDeleteFilesRequest=T.DidDeleteFilesNotification=T.WillRenameFilesRequest=T.DidRenameFilesNotification=T.WillCreateFilesRequest=T.DidCreateFilesNotification=T.FileOperationPatternKind=T.LinkedEditingRangeRequest=T.ShowDocumentRequest=T.SemanticTokensRegistrationType=T.SemanticTokensRefreshRequest=T.SemanticTokensRangeRequest=T.SemanticTokensDeltaRequest=T.SemanticTokensRequest=T.TokenFormat=T.CallHierarchyPrepareRequest=T.CallHierarchyOutgoingCallsRequest=T.CallHierarchyIncomingCallsRequest=T.WorkDoneProgressCancelNotification=T.WorkDoneProgressCreateRequest=T.WorkDoneProgress=T.SelectionRangeRequest=T.DeclarationRequest=T.FoldingRangeRefreshRequest=T.FoldingRangeRequest=T.ColorPresentationRequest=T.DocumentColorRequest=T.ConfigurationRequest=T.DidChangeWorkspaceFoldersNotification=T.WorkspaceFoldersRequest=T.TypeDefinitionRequest=T.ImplementationRequest=T.ApplyWorkspaceEditRequest=T.ExecuteCommandRequest=T.PrepareRenameRequest=T.RenameRequest=T.PrepareSupportDefaultBehavior=T.DocumentOnTypeFormattingRequest=T.DocumentRangesFormattingRequest=T.DocumentRangeFormattingRequest=T.DocumentFormattingRequest=T.DocumentLinkResolveRequest=T.DocumentLinkRequest=T.CodeLensRefreshRequest=T.CodeLensResolveRequest=T.CodeLensRequest=T.WorkspaceSymbolResolveRequest=void 0;T.InlineCompletionRequest=T.DidCloseNotebookDocumentNotification=T.DidSaveNotebookDocumentNotification=T.DidChangeNotebookDocumentNotification=T.NotebookCellArrayChange=T.DidOpenNotebookDocumentNotification=T.NotebookDocumentSyncRegistrationType=T.NotebookDocument=T.NotebookCell=T.ExecutionSummary=T.NotebookCellKind=T.DiagnosticRefreshRequest=T.WorkspaceDiagnosticRequest=T.DocumentDiagnosticRequest=T.DocumentDiagnosticReportKind=T.DiagnosticServerCancellationData=T.InlayHintRefreshRequest=T.InlayHintResolveRequest=T.InlayHintRequest=T.InlineValueRefreshRequest=T.InlineValueRequest=T.TypeHierarchySupertypesRequest=T.TypeHierarchySubtypesRequest=T.TypeHierarchyPrepareRequest=void 0;var j=Ye(),fb=il(),Pt=al(),oP=Py();Object.defineProperty(T,"ImplementationRequest",{enumerable:!0,get:r(function(){return oP.ImplementationRequest},"get")});var iP=By();Object.defineProperty(T,"TypeDefinitionRequest",{enumerable:!0,get:r(function(){return iP.TypeDefinitionRequest},"get")});var yR=Vy();Object.defineProperty(T,"WorkspaceFoldersRequest",{enumerable:!0,get:r(function(){return yR.WorkspaceFoldersRequest},"get")});Object.defineProperty(T,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:r(function(){return yR.DidChangeWorkspaceFoldersNotification},"get")});var aP=Hy();Object.defineProperty(T,"ConfigurationRequest",{enumerable:!0,get:r(function(){return aP.ConfigurationRequest},"get")});var _R=Jy();Object.defineProperty(T,"DocumentColorRequest",{enumerable:!0,get:r(function(){return _R.DocumentColorRequest},"get")});Object.defineProperty(T,"ColorPresentationRequest",{enumerable:!0,get:r(function(){return _R.ColorPresentationRequest},"get")});var bR=Zy();Object.defineProperty(T,"FoldingRangeRequest",{enumerable:!0,get:r(function(){return bR.FoldingRangeRequest},"get")});Object.defineProperty(T,"FoldingRangeRefreshRequest",{enumerable:!0,get:r(function(){return bR.FoldingRangeRefreshRequest},"get")});var sP=t_();Object.defineProperty(T,"DeclarationRequest",{enumerable:!0,get:r(function(){return sP.DeclarationRequest},"get")});var cP=o_();Object.defineProperty(T,"SelectionRangeRequest",{enumerable:!0,get:r(function(){return cP.SelectionRangeRequest},"get")});var gE=c_();Object.defineProperty(T,"WorkDoneProgress",{enumerable:!0,get:r(function(){return gE.WorkDoneProgress},"get")});Object.defineProperty(T,"WorkDoneProgressCreateRequest",{enumerable:!0,get:r(function(){return gE.WorkDoneProgressCreateRequest},"get")});Object.defineProperty(T,"WorkDoneProgressCancelNotification",{enumerable:!0,get:r(function(){return gE.WorkDoneProgressCancelNotification},"get")});var TE=f_();Object.defineProperty(T,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:r(function(){return TE.CallHierarchyIncomingCallsRequest},"get")});Object.defineProperty(T,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:r(function(){return TE.CallHierarchyOutgoingCallsRequest},"get")});Object.defineProperty(T,"CallHierarchyPrepareRequest",{enumerable:!0,get:r(function(){return TE.CallHierarchyPrepareRequest},"get")});var Ui=E_();Object.defineProperty(T,"TokenFormat",{enumerable:!0,get:r(function(){return Ui.TokenFormat},"get")});Object.defineProperty(T,"SemanticTokensRequest",{enumerable:!0,get:r(function(){return Ui.SemanticTokensRequest},"get")});Object.defineProperty(T,"SemanticTokensDeltaRequest",{enumerable:!0,get:r(function(){return Ui.SemanticTokensDeltaRequest},"get")});Object.defineProperty(T,"SemanticTokensRangeRequest",{enumerable:!0,get:r(function(){return Ui.SemanticTokensRangeRequest},"get")});Object.defineProperty(T,"SemanticTokensRefreshRequest",{enumerable:!0,get:r(function(){return Ui.SemanticTokensRefreshRequest},"get")});Object.defineProperty(T,"SemanticTokensRegistrationType",{enumerable:!0,get:r(function(){return Ui.SemanticTokensRegistrationType},"get")});var lP=__();Object.defineProperty(T,"ShowDocumentRequest",{enumerable:!0,get:r(function(){return lP.ShowDocumentRequest},"get")});var uP=x_();Object.defineProperty(T,"LinkedEditingRangeRequest",{enumerable:!0,get:r(function(){return uP.LinkedEditingRangeRequest},"get")});var Ho=N_();Object.defineProperty(T,"FileOperationPatternKind",{enumerable:!0,get:r(function(){return Ho.FileOperationPatternKind},"get")});Object.defineProperty(T,"DidCreateFilesNotification",{enumerable:!0,get:r(function(){return Ho.DidCreateFilesNotification},"get")});Object.defineProperty(T,"WillCreateFilesRequest",{enumerable:!0,get:r(function(){return Ho.WillCreateFilesRequest},"get")});Object.defineProperty(T,"DidRenameFilesNotification",{enumerable:!0,get:r(function(){return Ho.DidRenameFilesNotification},"get")});Object.defineProperty(T,"WillRenameFilesRequest",{enumerable:!0,get:r(function(){return Ho.WillRenameFilesRequest},"get")});Object.defineProperty(T,"DidDeleteFilesNotification",{enumerable:!0,get:r(function(){return Ho.DidDeleteFilesNotification},"get")});Object.defineProperty(T,"WillDeleteFilesRequest",{enumerable:!0,get:r(function(){return Ho.WillDeleteFilesRequest},"get")});var EE=P_();Object.defineProperty(T,"UniquenessLevel",{enumerable:!0,get:r(function(){return EE.UniquenessLevel},"get")});Object.defineProperty(T,"MonikerKind",{enumerable:!0,get:r(function(){return EE.MonikerKind},"get")});Object.defineProperty(T,"MonikerRequest",{enumerable:!0,get:r(function(){return EE.MonikerRequest},"get")});var SE=G_();Object.defineProperty(T,"TypeHierarchyPrepareRequest",{enumerable:!0,get:r(function(){return SE.TypeHierarchyPrepareRequest},"get")});Object.defineProperty(T,"TypeHierarchySubtypesRequest",{enumerable:!0,get:r(function(){return SE.TypeHierarchySubtypesRequest},"get")});Object.defineProperty(T,"TypeHierarchySupertypesRequest",{enumerable:!0,get:r(function(){return SE.TypeHierarchySupertypesRequest},"get")});var RR=W_();Object.defineProperty(T,"InlineValueRequest",{enumerable:!0,get:r(function(){return RR.InlineValueRequest},"get")});Object.defineProperty(T,"InlineValueRefreshRequest",{enumerable:!0,get:r(function(){return RR.InlineValueRefreshRequest},"get")});var yE=K_();Object.defineProperty(T,"InlayHintRequest",{enumerable:!0,get:r(function(){return yE.InlayHintRequest},"get")});Object.defineProperty(T,"InlayHintResolveRequest",{enumerable:!0,get:r(function(){return yE.InlayHintResolveRequest},"get")});Object.defineProperty(T,"InlayHintRefreshRequest",{enumerable:!0,get:r(function(){return yE.InlayHintRefreshRequest},"get")});var xs=tb();Object.defineProperty(T,"DiagnosticServerCancellationData",{enumerable:!0,get:r(function(){return xs.DiagnosticServerCancellationData},"get")});Object.defineProperty(T,"DocumentDiagnosticReportKind",{enumerable:!0,get:r(function(){return xs.DocumentDiagnosticReportKind},"get")});Object.defineProperty(T,"DocumentDiagnosticRequest",{enumerable:!0,get:r(function(){return xs.DocumentDiagnosticRequest},"get")});Object.defineProperty(T,"WorkspaceDiagnosticRequest",{enumerable:!0,get:r(function(){return xs.WorkspaceDiagnosticRequest},"get")});Object.defineProperty(T,"DiagnosticRefreshRequest",{enumerable:!0,get:r(function(){return xs.DiagnosticRefreshRequest},"get")});var pn=cb();Object.defineProperty(T,"NotebookCellKind",{enumerable:!0,get:r(function(){return pn.NotebookCellKind},"get")});Object.defineProperty(T,"ExecutionSummary",{enumerable:!0,get:r(function(){return pn.ExecutionSummary},"get")});Object.defineProperty(T,"NotebookCell",{enumerable:!0,get:r(function(){return pn.NotebookCell},"get")});Object.defineProperty(T,"NotebookDocument",{enumerable:!0,get:r(function(){return pn.NotebookDocument},"get")});Object.defineProperty(T,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:r(function(){return pn.NotebookDocumentSyncRegistrationType},"get")});Object.defineProperty(T,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:r(function(){return pn.DidOpenNotebookDocumentNotification},"get")});Object.defineProperty(T,"NotebookCellArrayChange",{enumerable:!0,get:r(function(){return pn.NotebookCellArrayChange},"get")});Object.defineProperty(T,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:r(function(){return pn.DidChangeNotebookDocumentNotification},"get")});Object.defineProperty(T,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:r(function(){return pn.DidSaveNotebookDocumentNotification},"get")});Object.defineProperty(T,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:r(function(){return pn.DidCloseNotebookDocumentNotification},"get")});var dP=db();Object.defineProperty(T,"InlineCompletionRequest",{enumerable:!0,get:r(function(){return dP.InlineCompletionRequest},"get")});var fE;(function(e){function t(n){let o=n;return Pt.string(o)||Pt.string(o.language)||Pt.string(o.scheme)||Pt.string(o.pattern)}r(t,"is"),e.is=t})(fE||(T.TextDocumentFilter=fE={}));var pE;(function(e){function t(n){let o=n;return Pt.objectLiteral(o)&&(Pt.string(o.notebookType)||Pt.string(o.scheme)||Pt.string(o.pattern))}r(t,"is"),e.is=t})(pE||(T.NotebookDocumentFilter=pE={}));var mE;(function(e){function t(n){let o=n;return Pt.objectLiteral(o)&&(Pt.string(o.notebook)||pE.is(o.notebook))&&(o.language===void 0||Pt.string(o.language))}r(t,"is"),e.is=t})(mE||(T.NotebookCellTextDocumentFilter=mE={}));var hE;(function(e){function t(n){if(!Array.isArray(n))return!1;for(let o of n)if(!Pt.string(o)&&!fE.is(o)&&!mE.is(o))return!1;return!0}r(t,"is"),e.is=t})(hE||(T.DocumentSelector=hE={}));var pb;(function(e){e.method="client/registerCapability",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolRequestType(e.method)})(pb||(T.RegistrationRequest=pb={}));var mb;(function(e){e.method="client/unregisterCapability",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolRequestType(e.method)})(mb||(T.UnregistrationRequest=mb={}));var hb;(function(e){e.Create="create",e.Rename="rename",e.Delete="delete"})(hb||(T.ResourceOperationKind=hb={}));var gb;(function(e){e.Abort="abort",e.Transactional="transactional",e.TextOnlyTransactional="textOnlyTransactional",e.Undo="undo"})(gb||(T.FailureHandlingKind=gb={}));var Tb;(function(e){e.UTF8="utf-8",e.UTF16="utf-16",e.UTF32="utf-32"})(Tb||(T.PositionEncodingKind=Tb={}));var Eb;(function(e){function t(n){let o=n;return o&&Pt.string(o.id)&&o.id.length>0}r(t,"hasId"),e.hasId=t})(Eb||(T.StaticRegistrationOptions=Eb={}));var Sb;(function(e){function t(n){let o=n;return o&&(o.documentSelector===null||hE.is(o.documentSelector))}r(t,"is"),e.is=t})(Sb||(T.TextDocumentRegistrationOptions=Sb={}));var yb;(function(e){function t(o){let i=o;return Pt.objectLiteral(i)&&(i.workDoneProgress===void 0||Pt.boolean(i.workDoneProgress))}r(t,"is"),e.is=t;function n(o){let i=o;return i&&Pt.boolean(i.workDoneProgress)}r(n,"hasWorkDoneProgress"),e.hasWorkDoneProgress=n})(yb||(T.WorkDoneProgressOptions=yb={}));var _b;(function(e){e.method="initialize",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(_b||(T.InitializeRequest=_b={}));var bb;(function(e){e.unknownProtocolVersion=1})(bb||(T.InitializeErrorCodes=bb={}));var Rb;(function(e){e.method="initialized",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(Rb||(T.InitializedNotification=Rb={}));var xb;(function(e){e.method="shutdown",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType0(e.method)})(xb||(T.ShutdownRequest=xb={}));var Ab;(function(e){e.method="exit",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType0(e.method)})(Ab||(T.ExitNotification=Ab={}));var kb;(function(e){e.method="workspace/didChangeConfiguration",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(kb||(T.DidChangeConfigurationNotification=kb={}));var vb;(function(e){e.Error=1,e.Warning=2,e.Info=3,e.Log=4,e.Debug=5})(vb||(T.MessageType=vb={}));var Ub;(function(e){e.method="window/showMessage",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolNotificationType(e.method)})(Ub||(T.ShowMessageNotification=Ub={}));var Cb;(function(e){e.method="window/showMessageRequest",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolRequestType(e.method)})(Cb||(T.ShowMessageRequest=Cb={}));var Ob;(function(e){e.method="window/logMessage",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolNotificationType(e.method)})(Ob||(T.LogMessageNotification=Ob={}));var Lb;(function(e){e.method="telemetry/event",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolNotificationType(e.method)})(Lb||(T.TelemetryEventNotification=Lb={}));var Nb;(function(e){e.None=0,e.Full=1,e.Incremental=2})(Nb||(T.TextDocumentSyncKind=Nb={}));var Mb;(function(e){e.method="textDocument/didOpen",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(Mb||(T.DidOpenTextDocumentNotification=Mb={}));var wb;(function(e){function t(o){let i=o;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}r(t,"isIncremental"),e.isIncremental=t;function n(o){let i=o;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}r(n,"isFull"),e.isFull=n})(wb||(T.TextDocumentContentChangeEvent=wb={}));var Fb;(function(e){e.method="textDocument/didChange",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(Fb||(T.DidChangeTextDocumentNotification=Fb={}));var Ib;(function(e){e.method="textDocument/didClose",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(Ib||(T.DidCloseTextDocumentNotification=Ib={}));var Pb;(function(e){e.method="textDocument/didSave",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(Pb||(T.DidSaveTextDocumentNotification=Pb={}));var Db;(function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3})(Db||(T.TextDocumentSaveReason=Db={}));var qb;(function(e){e.method="textDocument/willSave",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(qb||(T.WillSaveTextDocumentNotification=qb={}));var Bb;(function(e){e.method="textDocument/willSaveWaitUntil",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(Bb||(T.WillSaveTextDocumentWaitUntilRequest=Bb={}));var Gb;(function(e){e.method="workspace/didChangeWatchedFiles",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(Gb||(T.DidChangeWatchedFilesNotification=Gb={}));var jb;(function(e){e.Created=1,e.Changed=2,e.Deleted=3})(jb||(T.FileChangeType=jb={}));var Vb;(function(e){function t(n){let o=n;return Pt.objectLiteral(o)&&(fb.URI.is(o.baseUri)||fb.WorkspaceFolder.is(o.baseUri))&&Pt.string(o.pattern)}r(t,"is"),e.is=t})(Vb||(T.RelativePattern=Vb={}));var Wb;(function(e){e.Create=1,e.Change=2,e.Delete=4})(Wb||(T.WatchKind=Wb={}));var zb;(function(e){e.method="textDocument/publishDiagnostics",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolNotificationType(e.method)})(zb||(T.PublishDiagnosticsNotification=zb={}));var Hb;(function(e){e.Invoked=1,e.TriggerCharacter=2,e.TriggerForIncompleteCompletions=3})(Hb||(T.CompletionTriggerKind=Hb={}));var Yb;(function(e){e.method="textDocument/completion",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(Yb||(T.CompletionRequest=Yb={}));var Kb;(function(e){e.method="completionItem/resolve",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(Kb||(T.CompletionResolveRequest=Kb={}));var Jb;(function(e){e.method="textDocument/hover",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(Jb||(T.HoverRequest=Jb={}));var Qb;(function(e){e.Invoked=1,e.TriggerCharacter=2,e.ContentChange=3})(Qb||(T.SignatureHelpTriggerKind=Qb={}));var Xb;(function(e){e.method="textDocument/signatureHelp",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(Xb||(T.SignatureHelpRequest=Xb={}));var Zb;(function(e){e.method="textDocument/definition",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(Zb||(T.DefinitionRequest=Zb={}));var $b;(function(e){e.method="textDocument/references",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})($b||(T.ReferencesRequest=$b={}));var eR;(function(e){e.method="textDocument/documentHighlight",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(eR||(T.DocumentHighlightRequest=eR={}));var tR;(function(e){e.method="textDocument/documentSymbol",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(tR||(T.DocumentSymbolRequest=tR={}));var rR;(function(e){e.method="textDocument/codeAction",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(rR||(T.CodeActionRequest=rR={}));var nR;(function(e){e.method="codeAction/resolve",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(nR||(T.CodeActionResolveRequest=nR={}));var oR;(function(e){e.method="workspace/symbol",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(oR||(T.WorkspaceSymbolRequest=oR={}));var iR;(function(e){e.method="workspaceSymbol/resolve",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(iR||(T.WorkspaceSymbolResolveRequest=iR={}));var aR;(function(e){e.method="textDocument/codeLens",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(aR||(T.CodeLensRequest=aR={}));var sR;(function(e){e.method="codeLens/resolve",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(sR||(T.CodeLensResolveRequest=sR={}));var cR;(function(e){e.method="workspace/codeLens/refresh",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolRequestType0(e.method)})(cR||(T.CodeLensRefreshRequest=cR={}));var lR;(function(e){e.method="textDocument/documentLink",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(lR||(T.DocumentLinkRequest=lR={}));var uR;(function(e){e.method="documentLink/resolve",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(uR||(T.DocumentLinkResolveRequest=uR={}));var dR;(function(e){e.method="textDocument/formatting",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(dR||(T.DocumentFormattingRequest=dR={}));var fR;(function(e){e.method="textDocument/rangeFormatting",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(fR||(T.DocumentRangeFormattingRequest=fR={}));var pR;(function(e){e.method="textDocument/rangesFormatting",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(pR||(T.DocumentRangesFormattingRequest=pR={}));var mR;(function(e){e.method="textDocument/onTypeFormatting",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(mR||(T.DocumentOnTypeFormattingRequest=mR={}));var hR;(function(e){e.Identifier=1})(hR||(T.PrepareSupportDefaultBehavior=hR={}));var gR;(function(e){e.method="textDocument/rename",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(gR||(T.RenameRequest=gR={}));var TR;(function(e){e.method="textDocument/prepareRename",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(TR||(T.PrepareRenameRequest=TR={}));var ER;(function(e){e.method="workspace/executeCommand",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(ER||(T.ExecuteCommandRequest=ER={}));var SR;(function(e){e.method="workspace/applyEdit",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolRequestType("workspace/applyEdit")})(SR||(T.ApplyWorkspaceEditRequest=SR={}))});var kR=K(_l=>{"use strict";Object.defineProperty(_l,"__esModule",{value:!0});_l.createProtocolConnection=void 0;var AR=zo();function fP(e,t,n,o){return AR.ConnectionStrategy.is(o)&&(o={connectionStrategy:o}),(0,AR.createMessageConnection)(e,t,n,o)}r(fP,"createProtocolConnection");_l.createProtocolConnection=fP});var UR=K(Tr=>{"use strict";var pP=Tr&&Tr.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),bl=Tr&&Tr.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&pP(t,e,n)};Object.defineProperty(Tr,"__esModule",{value:!0});Tr.LSPErrorCodes=Tr.createProtocolConnection=void 0;bl(zo(),Tr);bl(il(),Tr);bl(Ye(),Tr);bl(xR(),Tr);var mP=kR();Object.defineProperty(Tr,"createProtocolConnection",{enumerable:!0,get:r(function(){return mP.createProtocolConnection},"get")});var vR;(function(e){e.lspReservedErrorRangeStart=-32899,e.RequestFailed=-32803,e.ServerCancelled=-32802,e.ContentModified=-32801,e.RequestCancelled=-32800,e.lspReservedErrorRangeEnd=-32800})(vR||(Tr.LSPErrorCodes=vR={}))});var gt=K(mn=>{"use strict";var hP=mn&&mn.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),CR=mn&&mn.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&hP(t,e,n)};Object.defineProperty(mn,"__esModule",{value:!0});mn.createProtocolConnection=void 0;var gP=oE();CR(oE(),mn);CR(UR(),mn);function TP(e,t,n,o){return(0,gP.createMessageConnection)(e,t,n,o)}r(TP,"createProtocolConnection");mn.createProtocolConnection=TP});var _E=K(Fr=>{"use strict";Object.defineProperty(Fr,"__esModule",{value:!0});Fr.generateUuid=Fr.parse=Fr.isUUID=Fr.v4=Fr.empty=void 0;var As=class{static{r(this,"ValueUUID")}constructor(t){this._value=t}asHex(){return this._value}equals(t){return this.asHex()===t.asHex()}},ks=class e extends As{static{r(this,"V4UUID")}static _oneOf(t){return t[Math.floor(t.length*Math.random())]}static _randomHex(){return e._oneOf(e._chars)}constructor(){super([e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),"-",e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),"-","4",e._randomHex(),e._randomHex(),e._randomHex(),"-",e._oneOf(e._timeHighBits),e._randomHex(),e._randomHex(),e._randomHex(),"-",e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex()].join(""))}};ks._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];ks._timeHighBits=["8","9","a","b"];Fr.empty=new As("00000000-0000-0000-0000-000000000000");function OR(){return new ks}r(OR,"v4");Fr.v4=OR;var EP=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function LR(e){return EP.test(e)}r(LR,"isUUID");Fr.isUUID=LR;function SP(e){if(!LR(e))throw new Error("invalid uuid");return new As(e)}r(SP,"parse");Fr.parse=SP;function yP(){return OR().asHex()}r(yP,"generateUuid");Fr.generateUuid=yP});var NR=K(oo=>{"use strict";Object.defineProperty(oo,"__esModule",{value:!0});oo.attachPartialResult=oo.ProgressFeature=oo.attachWorkDone=void 0;var no=gt(),_P=_E(),Yo=class e{static{r(this,"WorkDoneProgressReporterImpl")}constructor(t,n){this._connection=t,this._token=n,e.Instances.set(this._token,this)}begin(t,n,o,i){let a={kind:"begin",title:t,percentage:n,message:o,cancellable:i};this._connection.sendProgress(no.WorkDoneProgress.type,this._token,a)}report(t,n){let o={kind:"report"};typeof t=="number"?(o.percentage=t,n!==void 0&&(o.message=n)):o.message=t,this._connection.sendProgress(no.WorkDoneProgress.type,this._token,o)}done(){e.Instances.delete(this._token),this._connection.sendProgress(no.WorkDoneProgress.type,this._token,{kind:"end"})}};Yo.Instances=new Map;var Rl=class extends Yo{static{r(this,"WorkDoneProgressServerReporterImpl")}constructor(t,n){super(t,n),this._source=new no.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},vs=class{static{r(this,"NullProgressReporter")}constructor(){}begin(){}report(){}done(){}},xl=class extends vs{static{r(this,"NullProgressServerReporter")}constructor(){super(),this._source=new no.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function bP(e,t){if(t===void 0||t.workDoneToken===void 0)return new vs;let n=t.workDoneToken;return delete t.workDoneToken,new Yo(e,n)}r(bP,"attachWorkDone");oo.attachWorkDone=bP;var RP=r(e=>class extends e{constructor(){super(),this._progressSupported=!1}initialize(t){super.initialize(t),t?.window?.workDoneProgress===!0&&(this._progressSupported=!0,this.connection.onNotification(no.WorkDoneProgressCancelNotification.type,n=>{let o=Yo.Instances.get(n.token);(o instanceof Rl||o instanceof xl)&&o.cancel()}))}attachWorkDoneProgress(t){return t===void 0?new vs:new Yo(this.connection,t)}createWorkDoneProgress(){if(this._progressSupported){let t=(0,_P.generateUuid)();return this.connection.sendRequest(no.WorkDoneProgressCreateRequest.type,{token:t}).then(()=>new Rl(this.connection,t))}else return Promise.resolve(new xl)}},"ProgressFeature");oo.ProgressFeature=RP;var bE;(function(e){e.type=new no.ProgressType})(bE||(bE={}));var RE=class{static{r(this,"ResultProgressReporterImpl")}constructor(t,n){this._connection=t,this._token=n}report(t){this._connection.sendProgress(bE.type,this._token,t)}};function xP(e,t){if(t===void 0||t.partialResultToken===void 0)return;let n=t.partialResultToken;return delete t.partialResultToken,new RE(e,n)}r(xP,"attachPartialResult");oo.attachPartialResult=xP});var MR=K(Al=>{"use strict";Object.defineProperty(Al,"__esModule",{value:!0});Al.ConfigurationFeature=void 0;var AP=gt(),kP=Ic(),vP=r(e=>class extends e{getConfiguration(t){return t?kP.string(t)?this._getConfiguration({section:t}):this._getConfiguration(t):this._getConfiguration({})}_getConfiguration(t){let n={items:Array.isArray(t)?t:[t]};return this.connection.sendRequest(AP.ConfigurationRequest.type,n).then(o=>Array.isArray(o)?Array.isArray(t)?o:o[0]:Array.isArray(t)?[]:null)}},"ConfigurationFeature");Al.ConfigurationFeature=vP});var wR=K(vl=>{"use strict";Object.defineProperty(vl,"__esModule",{value:!0});vl.WorkspaceFoldersFeature=void 0;var kl=gt(),UP=r(e=>class extends e{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(t){super.initialize(t);let n=t.workspace;n&&n.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new kl.Emitter,this.connection.onNotification(kl.DidChangeWorkspaceFoldersNotification.type,o=>{this._onDidChangeWorkspaceFolders.fire(o.event)}))}fillServerCapabilities(t){super.fillServerCapabilities(t);let n=t.workspace?.workspaceFolders?.changeNotifications;this._notificationIsAutoRegistered=n===!0||typeof n=="string"}getWorkspaceFolders(){return this.connection.sendRequest(kl.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(kl.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}},"WorkspaceFoldersFeature");vl.WorkspaceFoldersFeature=UP});var FR=K(Ul=>{"use strict";Object.defineProperty(Ul,"__esModule",{value:!0});Ul.CallHierarchyFeature=void 0;var xE=gt(),CP=r(e=>class extends e{get callHierarchy(){return{onPrepare:r(t=>this.connection.onRequest(xE.CallHierarchyPrepareRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),void 0)),"onPrepare"),onIncomingCalls:r(t=>{let n=xE.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onIncomingCalls"),onOutgoingCalls:r(t=>{let n=xE.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onOutgoingCalls")}}},"CallHierarchyFeature");Ul.CallHierarchyFeature=CP});var kE=K(io=>{"use strict";Object.defineProperty(io,"__esModule",{value:!0});io.SemanticTokensBuilder=io.SemanticTokensDiff=io.SemanticTokensFeature=void 0;var Cl=gt(),OP=r(e=>class extends e{get semanticTokens(){return{refresh:r(()=>this.connection.sendRequest(Cl.SemanticTokensRefreshRequest.type),"refresh"),on:r(t=>{let n=Cl.SemanticTokensRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"on"),onDelta:r(t=>{let n=Cl.SemanticTokensDeltaRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onDelta"),onRange:r(t=>{let n=Cl.SemanticTokensRangeRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onRange")}}},"SemanticTokensFeature");io.SemanticTokensFeature=OP;var Ol=class{static{r(this,"SemanticTokensDiff")}constructor(t,n){this.originalSequence=t,this.modifiedSequence=n}computeDiff(){let t=this.originalSequence.length,n=this.modifiedSequence.length,o=0;for(;o<n&&o<t&&this.originalSequence[o]===this.modifiedSequence[o];)o++;if(o<n&&o<t){let i=t-1,a=n-1;for(;i>=o&&a>=o&&this.originalSequence[i]===this.modifiedSequence[a];)i--,a--;(i<o||a<o)&&(i++,a++);let s=i-o+1,c=this.modifiedSequence.slice(o,a+1);return c.length===1&&c[0]===this.originalSequence[i]?[{start:o,deleteCount:s-1}]:[{start:o,deleteCount:s,data:c}]}else return o<n?[{start:o,deleteCount:0,data:this.modifiedSequence.slice(o)}]:o<t?[{start:o,deleteCount:t-o}]:[]}};io.SemanticTokensDiff=Ol;var AE=class{static{r(this,"SemanticTokensBuilder")}constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(t,n,o,i,a){let s=t,c=n;this._dataLen>0&&(s-=this._prevLine,s===0&&(c-=this._prevChar)),this._data[this._dataLen++]=s,this._data[this._dataLen++]=c,this._data[this._dataLen++]=o,this._data[this._dataLen++]=i,this._data[this._dataLen++]=a,this._prevLine=t,this._prevChar=n}get id(){return this._id.toString()}previousResult(t){this.id===t&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new Ol(this._prevData,this._data).computeDiff()}:this.build()}};io.SemanticTokensBuilder=AE});var IR=K(Ll=>{"use strict";Object.defineProperty(Ll,"__esModule",{value:!0});Ll.ShowDocumentFeature=void 0;var LP=gt(),NP=r(e=>class extends e{showDocument(t){return this.connection.sendRequest(LP.ShowDocumentRequest.type,t)}},"ShowDocumentFeature");Ll.ShowDocumentFeature=NP});var PR=K(Nl=>{"use strict";Object.defineProperty(Nl,"__esModule",{value:!0});Nl.FileOperationsFeature=void 0;var Ci=gt(),MP=r(e=>class extends e{onDidCreateFiles(t){return this.connection.onNotification(Ci.DidCreateFilesNotification.type,n=>{t(n)})}onDidRenameFiles(t){return this.connection.onNotification(Ci.DidRenameFilesNotification.type,n=>{t(n)})}onDidDeleteFiles(t){return this.connection.onNotification(Ci.DidDeleteFilesNotification.type,n=>{t(n)})}onWillCreateFiles(t){return this.connection.onRequest(Ci.WillCreateFilesRequest.type,(n,o)=>t(n,o))}onWillRenameFiles(t){return this.connection.onRequest(Ci.WillRenameFilesRequest.type,(n,o)=>t(n,o))}onWillDeleteFiles(t){return this.connection.onRequest(Ci.WillDeleteFilesRequest.type,(n,o)=>t(n,o))}},"FileOperationsFeature");Nl.FileOperationsFeature=MP});var DR=K(Ml=>{"use strict";Object.defineProperty(Ml,"__esModule",{value:!0});Ml.LinkedEditingRangeFeature=void 0;var wP=gt(),FP=r(e=>class extends e{onLinkedEditingRange(t){return this.connection.onRequest(wP.LinkedEditingRangeRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),void 0))}},"LinkedEditingRangeFeature");Ml.LinkedEditingRangeFeature=FP});var qR=K(wl=>{"use strict";Object.defineProperty(wl,"__esModule",{value:!0});wl.TypeHierarchyFeature=void 0;var vE=gt(),IP=r(e=>class extends e{get typeHierarchy(){return{onPrepare:r(t=>this.connection.onRequest(vE.TypeHierarchyPrepareRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),void 0)),"onPrepare"),onSupertypes:r(t=>{let n=vE.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onSupertypes"),onSubtypes:r(t=>{let n=vE.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onSubtypes")}}},"TypeHierarchyFeature");wl.TypeHierarchyFeature=IP});var GR=K(Fl=>{"use strict";Object.defineProperty(Fl,"__esModule",{value:!0});Fl.InlineValueFeature=void 0;var BR=gt(),PP=r(e=>class extends e{get inlineValue(){return{refresh:r(()=>this.connection.sendRequest(BR.InlineValueRefreshRequest.type),"refresh"),on:r(t=>this.connection.onRequest(BR.InlineValueRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n))),"on")}}},"InlineValueFeature");Fl.InlineValueFeature=PP});var VR=K(Il=>{"use strict";Object.defineProperty(Il,"__esModule",{value:!0});Il.FoldingRangeFeature=void 0;var jR=gt(),DP=r(e=>class extends e{get foldingRange(){return{refresh:r(()=>this.connection.sendRequest(jR.FoldingRangeRefreshRequest.type),"refresh"),on:r(t=>{let n=jR.FoldingRangeRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"on")}}},"FoldingRangeFeature");Il.FoldingRangeFeature=DP});var WR=K(Pl=>{"use strict";Object.defineProperty(Pl,"__esModule",{value:!0});Pl.InlayHintFeature=void 0;var UE=gt(),qP=r(e=>class extends e{get inlayHint(){return{refresh:r(()=>this.connection.sendRequest(UE.InlayHintRefreshRequest.type),"refresh"),on:r(t=>this.connection.onRequest(UE.InlayHintRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n))),"on"),resolve:r(t=>this.connection.onRequest(UE.InlayHintResolveRequest.type,(n,o)=>t(n,o)),"resolve")}}},"InlayHintFeature");Pl.InlayHintFeature=qP});var zR=K(Dl=>{"use strict";Object.defineProperty(Dl,"__esModule",{value:!0});Dl.DiagnosticFeature=void 0;var Us=gt(),BP=r(e=>class extends e{get diagnostics(){return{refresh:r(()=>this.connection.sendRequest(Us.DiagnosticRefreshRequest.type),"refresh"),on:r(t=>this.connection.onRequest(Us.DocumentDiagnosticRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(Us.DocumentDiagnosticRequest.partialResult,n))),"on"),onWorkspace:r(t=>this.connection.onRequest(Us.WorkspaceDiagnosticRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(Us.WorkspaceDiagnosticRequest.partialResult,n))),"onWorkspace")}}},"DiagnosticFeature");Dl.DiagnosticFeature=BP});var OE=K(ql=>{"use strict";Object.defineProperty(ql,"__esModule",{value:!0});ql.TextDocuments=void 0;var Ko=gt(),CE=class{static{r(this,"TextDocuments")}constructor(t){this._configuration=t,this._syncedDocuments=new Map,this._onDidChangeContent=new Ko.Emitter,this._onDidOpen=new Ko.Emitter,this._onDidClose=new Ko.Emitter,this._onDidSave=new Ko.Emitter,this._onWillSave=new Ko.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(t){this._willSaveWaitUntil=t}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(t){return this._syncedDocuments.get(t)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(t){t.__textDocumentSync=Ko.TextDocumentSyncKind.Incremental;let n=[];return n.push(t.onDidOpenTextDocument(o=>{let i=o.textDocument,a=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,a);let s=Object.freeze({document:a});this._onDidOpen.fire(s),this._onDidChangeContent.fire(s)})),n.push(t.onDidChangeTextDocument(o=>{let i=o.textDocument,a=o.contentChanges;if(a.length===0)return;let{version:s}=i;if(s==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let c=this._syncedDocuments.get(i.uri);c!==void 0&&(c=this._configuration.update(c,a,s),this._syncedDocuments.set(i.uri,c),this._onDidChangeContent.fire(Object.freeze({document:c})))})),n.push(t.onDidCloseTextDocument(o=>{let i=this._syncedDocuments.get(o.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(o.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),n.push(t.onWillSaveTextDocument(o=>{let i=this._syncedDocuments.get(o.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:o.reason}))})),n.push(t.onWillSaveTextDocumentWaitUntil((o,i)=>{let a=this._syncedDocuments.get(o.textDocument.uri);return a!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:a,reason:o.reason}),i):[]})),n.push(t.onDidSaveTextDocument(o=>{let i=this._syncedDocuments.get(o.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),Ko.Disposable.create(()=>{n.forEach(o=>o.dispose())})}};ql.TextDocuments=CE});var NE=K(Oi=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});Oi.NotebookDocuments=Oi.NotebookSyncFeature=void 0;var Ir=gt(),HR=OE(),GP=r(e=>class extends e{get synchronization(){return{onDidOpenNotebookDocument:r(t=>this.connection.onNotification(Ir.DidOpenNotebookDocumentNotification.type,n=>{t(n)}),"onDidOpenNotebookDocument"),onDidChangeNotebookDocument:r(t=>this.connection.onNotification(Ir.DidChangeNotebookDocumentNotification.type,n=>{t(n)}),"onDidChangeNotebookDocument"),onDidSaveNotebookDocument:r(t=>this.connection.onNotification(Ir.DidSaveNotebookDocumentNotification.type,n=>{t(n)}),"onDidSaveNotebookDocument"),onDidCloseNotebookDocument:r(t=>this.connection.onNotification(Ir.DidCloseNotebookDocumentNotification.type,n=>{t(n)}),"onDidCloseNotebookDocument")}}},"NotebookSyncFeature");Oi.NotebookSyncFeature=GP;var Bl=class e{static{r(this,"CellTextDocumentConnection")}onDidOpenTextDocument(t){return this.openHandler=t,Ir.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(t){this.openHandler&&this.openHandler(t)}onDidChangeTextDocument(t){return this.changeHandler=t,Ir.Disposable.create(()=>{this.changeHandler=t})}changeTextDocument(t){this.changeHandler&&this.changeHandler(t)}onDidCloseTextDocument(t){return this.closeHandler=t,Ir.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(t){this.closeHandler&&this.closeHandler(t)}onWillSaveTextDocument(){return e.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return e.NULL_DISPOSE}onDidSaveTextDocument(){return e.NULL_DISPOSE}};Bl.NULL_DISPOSE=Object.freeze({dispose:r(()=>{},"dispose")});var LE=class{static{r(this,"NotebookDocuments")}constructor(t){t instanceof HR.TextDocuments?this._cellTextDocuments=t:this._cellTextDocuments=new HR.TextDocuments(t),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new Ir.Emitter,this._onDidChange=new Ir.Emitter,this._onDidSave=new Ir.Emitter,this._onDidClose=new Ir.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(t){return this._cellTextDocuments.get(t.document)}getNotebookDocument(t){return this.notebookDocuments.get(t)}getNotebookCell(t){let n=this.notebookCellMap.get(t);return n&&n[0]}findNotebookDocumentForCell(t){let n=typeof t=="string"?t:t.document,o=this.notebookCellMap.get(n);return o&&o[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(t){let n=new Bl,o=[];return o.push(this.cellTextDocuments.listen(n)),o.push(t.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(let a of i.cellTextDocuments)n.openTextDocument({textDocument:a});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),o.push(t.notebooks.synchronization.onDidChangeNotebookDocument(i=>{let a=this.notebookDocuments.get(i.notebookDocument.uri);if(a===void 0)return;a.version=i.notebookDocument.version;let s=a.metadata,c=!1,u=i.change;u.metadata!==void 0&&(c=!0,a.metadata=u.metadata);let p=[],g=[],S=[],A=[];if(u.cells!==void 0){let q=u.cells;if(q.structure!==void 0){let _=q.structure.array;if(a.cells.splice(_.start,_.deleteCount,..._.cells!==void 0?_.cells:[]),q.structure.didOpen!==void 0)for(let E of q.structure.didOpen)n.openTextDocument({textDocument:E}),p.push(E.uri);if(q.structure.didClose)for(let E of q.structure.didClose)n.closeTextDocument({textDocument:E}),g.push(E.uri)}if(q.data!==void 0){let _=new Map(q.data.map(E=>[E.document,E]));for(let E=0;E<=a.cells.length;E++){let w=_.get(a.cells[E].document);if(w!==void 0){let V=a.cells.splice(E,1,w);if(S.push({old:V[0],new:w}),_.delete(w.document),_.size===0)break}}}if(q.textContent!==void 0)for(let _ of q.textContent)n.changeTextDocument({textDocument:_.document,contentChanges:_.changes}),A.push(_.document.uri)}this.updateCellMap(a);let O={notebookDocument:a};c&&(O.metadata={old:s,new:a.metadata});let B=[];for(let q of p)B.push(this.getNotebookCell(q));let P=[];for(let q of g)P.push(this.getNotebookCell(q));let z=[];for(let q of A)z.push(this.getNotebookCell(q));(B.length>0||P.length>0||S.length>0||z.length>0)&&(O.cells={added:B,removed:P,changed:{data:S,textContent:z}}),(O.metadata!==void 0||O.cells!==void 0)&&this._onDidChange.fire(O)})),o.push(t.notebooks.synchronization.onDidSaveNotebookDocument(i=>{let a=this.notebookDocuments.get(i.notebookDocument.uri);a!==void 0&&this._onDidSave.fire(a)})),o.push(t.notebooks.synchronization.onDidCloseNotebookDocument(i=>{let a=this.notebookDocuments.get(i.notebookDocument.uri);if(a!==void 0){this._onDidClose.fire(a);for(let s of i.cellTextDocuments)n.closeTextDocument({textDocument:s});this.notebookDocuments.delete(i.notebookDocument.uri);for(let s of a.cells)this.notebookCellMap.delete(s.document)}})),Ir.Disposable.create(()=>{o.forEach(i=>i.dispose())})}updateCellMap(t){for(let n of t.cells)this.notebookCellMap.set(n.document,[n,t])}};Oi.NotebookDocuments=LE});var YR=K(Gl=>{"use strict";Object.defineProperty(Gl,"__esModule",{value:!0});Gl.MonikerFeature=void 0;var jP=gt(),VP=r(e=>class extends e{get moniker(){return{on:r(t=>{let n=jP.MonikerRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"on")}}},"MonikerFeature");Gl.MonikerFeature=VP});var DE=K(be=>{"use strict";Object.defineProperty(be,"__esModule",{value:!0});be.createConnection=be.combineFeatures=be.combineNotebooksFeatures=be.combineLanguagesFeatures=be.combineWorkspaceFeatures=be.combineWindowFeatures=be.combineClientFeatures=be.combineTracerFeatures=be.combineTelemetryFeatures=be.combineConsoleFeatures=be._NotebooksImpl=be._LanguagesImpl=be.BulkUnregistration=be.BulkRegistration=be.ErrorMessageTracker=void 0;var H=gt(),Pr=Ic(),wE=_E(),oe=NR(),WP=MR(),zP=wR(),HP=FR(),YP=kE(),KP=IR(),JP=PR(),QP=DR(),XP=qR(),ZP=GR(),$P=VR(),eD=WR(),tD=zR(),rD=NE(),nD=YR();function ME(e){if(e!==null)return e}r(ME,"null2Undefined");var FE=class{static{r(this,"ErrorMessageTracker")}constructor(){this._messages=Object.create(null)}add(t){let n=this._messages[t];n||(n=0),n++,this._messages[t]=n}sendErrors(t){Object.keys(this._messages).forEach(n=>{t.window.showErrorMessage(n)})}};be.ErrorMessageTracker=FE;var jl=class{static{r(this,"RemoteConsoleImpl")}constructor(){}rawAttach(t){this._rawConnection=t}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(t){}initialize(t){}error(t){this.send(H.MessageType.Error,t)}warn(t){this.send(H.MessageType.Warning,t)}info(t){this.send(H.MessageType.Info,t)}log(t){this.send(H.MessageType.Log,t)}debug(t){this.send(H.MessageType.Debug,t)}send(t,n){this._rawConnection&&this._rawConnection.sendNotification(H.LogMessageNotification.type,{type:t,message:n}).catch(()=>{(0,H.RAL)().console.error("Sending log message failed")})}},IE=class{static{r(this,"_RemoteWindowImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}showErrorMessage(t,...n){let o={type:H.MessageType.Error,message:t,actions:n};return this.connection.sendRequest(H.ShowMessageRequest.type,o).then(ME)}showWarningMessage(t,...n){let o={type:H.MessageType.Warning,message:t,actions:n};return this.connection.sendRequest(H.ShowMessageRequest.type,o).then(ME)}showInformationMessage(t,...n){let o={type:H.MessageType.Info,message:t,actions:n};return this.connection.sendRequest(H.ShowMessageRequest.type,o).then(ME)}},KR=(0,KP.ShowDocumentFeature)((0,oe.ProgressFeature)(IE)),JR;(function(e){function t(){return new Vl}r(t,"create"),e.create=t})(JR||(be.BulkRegistration=JR={}));var Vl=class{static{r(this,"BulkRegistrationImpl")}constructor(){this._registrations=[],this._registered=new Set}add(t,n){let o=Pr.string(t)?t:t.method;if(this._registered.has(o))throw new Error(`${o} is already added to this registration`);let i=wE.generateUuid();this._registrations.push({id:i,method:o,registerOptions:n||{}}),this._registered.add(o)}asRegistrationParams(){return{registrations:this._registrations}}},QR;(function(e){function t(){return new Cs(void 0,[])}r(t,"create"),e.create=t})(QR||(be.BulkUnregistration=QR={}));var Cs=class{static{r(this,"BulkUnregistrationImpl")}constructor(t,n){this._connection=t,this._unregistrations=new Map,n.forEach(o=>{this._unregistrations.set(o.method,o)})}get isAttached(){return!!this._connection}attach(t){this._connection=t}add(t){this._unregistrations.set(t.method,t)}dispose(){let t=[];for(let o of this._unregistrations.values())t.push(o);let n={unregisterations:t};this._connection.sendRequest(H.UnregistrationRequest.type,n).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(t){let n=Pr.string(t)?t:t.method,o=this._unregistrations.get(n);if(!o)return!1;let i={unregisterations:[o]};return this._connection.sendRequest(H.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(n)},a=>{this._connection.console.info(`Un-registering request handler for ${o.id} failed.`)}),!0}},Wl=class{static{r(this,"RemoteClientImpl")}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}register(t,n,o){return t instanceof Vl?this.registerMany(t):t instanceof Cs?this.registerSingle1(t,n,o):this.registerSingle2(t,n)}registerSingle1(t,n,o){let i=Pr.string(n)?n:n.method,a=wE.generateUuid(),s={registrations:[{id:a,method:i,registerOptions:o||{}}]};return t.isAttached||t.attach(this.connection),this.connection.sendRequest(H.RegistrationRequest.type,s).then(c=>(t.add({id:a,method:i}),t),c=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(c)))}registerSingle2(t,n){let o=Pr.string(t)?t:t.method,i=wE.generateUuid(),a={registrations:[{id:i,method:o,registerOptions:n||{}}]};return this.connection.sendRequest(H.RegistrationRequest.type,a).then(s=>H.Disposable.create(()=>{this.unregisterSingle(i,o).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),s=>(this.connection.console.info(`Registering request handler for ${o} failed.`),Promise.reject(s)))}unregisterSingle(t,n){let o={unregisterations:[{id:t,method:n}]};return this.connection.sendRequest(H.UnregistrationRequest.type,o).catch(()=>{this.connection.console.info(`Un-registering request handler for ${t} failed.`)})}registerMany(t){let n=t.asRegistrationParams();return this.connection.sendRequest(H.RegistrationRequest.type,n).then(()=>new Cs(this._connection,n.registrations.map(o=>({id:o.id,method:o.method}))),o=>(this.connection.console.info("Bulk registration failed."),Promise.reject(o)))}},PE=class{static{r(this,"_RemoteWorkspaceImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}applyEdit(t){function n(i){return i&&!!i.edit}r(n,"isApplyWorkspaceEditParams");let o=n(t)?t:{edit:t};return this.connection.sendRequest(H.ApplyWorkspaceEditRequest.type,o)}},XR=(0,JP.FileOperationsFeature)((0,zP.WorkspaceFoldersFeature)((0,WP.ConfigurationFeature)(PE))),zl=class{static{r(this,"TracerImpl")}constructor(){this._trace=H.Trace.Off}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}set trace(t){this._trace=t}log(t,n){this._trace!==H.Trace.Off&&this.connection.sendNotification(H.LogTraceNotification.type,{message:t,verbose:this._trace===H.Trace.Verbose?n:void 0}).catch(()=>{})}},Hl=class{static{r(this,"TelemetryImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}logEvent(t){this.connection.sendNotification(H.TelemetryEventNotification.type,t).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},Yl=class{static{r(this,"_LanguagesImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}attachWorkDoneProgress(t){return(0,oe.attachWorkDone)(this.connection,t)}attachPartialResultProgress(t,n){return(0,oe.attachPartialResult)(this.connection,n)}};be._LanguagesImpl=Yl;var ZR=(0,$P.FoldingRangeFeature)((0,nD.MonikerFeature)((0,tD.DiagnosticFeature)((0,eD.InlayHintFeature)((0,ZP.InlineValueFeature)((0,XP.TypeHierarchyFeature)((0,QP.LinkedEditingRangeFeature)((0,YP.SemanticTokensFeature)((0,HP.CallHierarchyFeature)(Yl))))))))),Kl=class{static{r(this,"_NotebooksImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}attachWorkDoneProgress(t){return(0,oe.attachWorkDone)(this.connection,t)}attachPartialResultProgress(t,n){return(0,oe.attachPartialResult)(this.connection,n)}};be._NotebooksImpl=Kl;var $R=(0,rD.NotebookSyncFeature)(Kl);function ex(e,t){return function(n){return t(e(n))}}r(ex,"combineConsoleFeatures");be.combineConsoleFeatures=ex;function tx(e,t){return function(n){return t(e(n))}}r(tx,"combineTelemetryFeatures");be.combineTelemetryFeatures=tx;function rx(e,t){return function(n){return t(e(n))}}r(rx,"combineTracerFeatures");be.combineTracerFeatures=rx;function nx(e,t){return function(n){return t(e(n))}}r(nx,"combineClientFeatures");be.combineClientFeatures=nx;function ox(e,t){return function(n){return t(e(n))}}r(ox,"combineWindowFeatures");be.combineWindowFeatures=ox;function ix(e,t){return function(n){return t(e(n))}}r(ix,"combineWorkspaceFeatures");be.combineWorkspaceFeatures=ix;function ax(e,t){return function(n){return t(e(n))}}r(ax,"combineLanguagesFeatures");be.combineLanguagesFeatures=ax;function sx(e,t){return function(n){return t(e(n))}}r(sx,"combineNotebooksFeatures");be.combineNotebooksFeatures=sx;function oD(e,t){function n(i,a,s){return i&&a?s(i,a):i||a}return r(n,"combine"),{__brand:"features",console:n(e.console,t.console,ex),tracer:n(e.tracer,t.tracer,rx),telemetry:n(e.telemetry,t.telemetry,tx),client:n(e.client,t.client,nx),window:n(e.window,t.window,ox),workspace:n(e.workspace,t.workspace,ix),languages:n(e.languages,t.languages,ax),notebooks:n(e.notebooks,t.notebooks,sx)}}r(oD,"combineFeatures");be.combineFeatures=oD;function iD(e,t,n){let o=n&&n.console?new(n.console(jl)):new jl,i=e(o);o.rawAttach(i);let a=n&&n.tracer?new(n.tracer(zl)):new zl,s=n&&n.telemetry?new(n.telemetry(Hl)):new Hl,c=n&&n.client?new(n.client(Wl)):new Wl,u=n&&n.window?new(n.window(KR)):new KR,p=n&&n.workspace?new(n.workspace(XR)):new XR,g=n&&n.languages?new(n.languages(ZR)):new ZR,S=n&&n.notebooks?new(n.notebooks($R)):new $R,A=[o,a,s,c,u,p,g,S];function O(_){return _ instanceof Promise?_:Pr.thenable(_)?new Promise((E,w)=>{_.then(V=>E(V),V=>w(V))}):Promise.resolve(_)}r(O,"asPromise");let B,P,z,q={listen:r(()=>i.listen(),"listen"),sendRequest:r((_,...E)=>i.sendRequest(Pr.string(_)?_:_.method,...E),"sendRequest"),onRequest:r((_,E)=>i.onRequest(_,E),"onRequest"),sendNotification:r((_,E)=>{let w=Pr.string(_)?_:_.method;return i.sendNotification(w,E)},"sendNotification"),onNotification:r((_,E)=>i.onNotification(_,E),"onNotification"),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:r(_=>(P=_,{dispose:r(()=>{P=void 0},"dispose")}),"onInitialize"),onInitialized:r(_=>i.onNotification(H.InitializedNotification.type,_),"onInitialized"),onShutdown:r(_=>(B=_,{dispose:r(()=>{B=void 0},"dispose")}),"onShutdown"),onExit:r(_=>(z=_,{dispose:r(()=>{z=void 0},"dispose")}),"onExit"),get console(){return o},get telemetry(){return s},get tracer(){return a},get client(){return c},get window(){return u},get workspace(){return p},get languages(){return g},get notebooks(){return S},onDidChangeConfiguration:r(_=>i.onNotification(H.DidChangeConfigurationNotification.type,_),"onDidChangeConfiguration"),onDidChangeWatchedFiles:r(_=>i.onNotification(H.DidChangeWatchedFilesNotification.type,_),"onDidChangeWatchedFiles"),__textDocumentSync:void 0,onDidOpenTextDocument:r(_=>i.onNotification(H.DidOpenTextDocumentNotification.type,_),"onDidOpenTextDocument"),onDidChangeTextDocument:r(_=>i.onNotification(H.DidChangeTextDocumentNotification.type,_),"onDidChangeTextDocument"),onDidCloseTextDocument:r(_=>i.onNotification(H.DidCloseTextDocumentNotification.type,_),"onDidCloseTextDocument"),onWillSaveTextDocument:r(_=>i.onNotification(H.WillSaveTextDocumentNotification.type,_),"onWillSaveTextDocument"),onWillSaveTextDocumentWaitUntil:r(_=>i.onRequest(H.WillSaveTextDocumentWaitUntilRequest.type,_),"onWillSaveTextDocumentWaitUntil"),onDidSaveTextDocument:r(_=>i.onNotification(H.DidSaveTextDocumentNotification.type,_),"onDidSaveTextDocument"),sendDiagnostics:r(_=>i.sendNotification(H.PublishDiagnosticsNotification.type,_),"sendDiagnostics"),onHover:r(_=>i.onRequest(H.HoverRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),void 0)),"onHover"),onCompletion:r(_=>i.onRequest(H.CompletionRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onCompletion"),onCompletionResolve:r(_=>i.onRequest(H.CompletionResolveRequest.type,_),"onCompletionResolve"),onSignatureHelp:r(_=>i.onRequest(H.SignatureHelpRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),void 0)),"onSignatureHelp"),onDeclaration:r(_=>i.onRequest(H.DeclarationRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onDeclaration"),onDefinition:r(_=>i.onRequest(H.DefinitionRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onDefinition"),onTypeDefinition:r(_=>i.onRequest(H.TypeDefinitionRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onTypeDefinition"),onImplementation:r(_=>i.onRequest(H.ImplementationRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onImplementation"),onReferences:r(_=>i.onRequest(H.ReferencesRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onReferences"),onDocumentHighlight:r(_=>i.onRequest(H.DocumentHighlightRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onDocumentHighlight"),onDocumentSymbol:r(_=>i.onRequest(H.DocumentSymbolRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onDocumentSymbol"),onWorkspaceSymbol:r(_=>i.onRequest(H.WorkspaceSymbolRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onWorkspaceSymbol"),onWorkspaceSymbolResolve:r(_=>i.onRequest(H.WorkspaceSymbolResolveRequest.type,_),"onWorkspaceSymbolResolve"),onCodeAction:r(_=>i.onRequest(H.CodeActionRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onCodeAction"),onCodeActionResolve:r(_=>i.onRequest(H.CodeActionResolveRequest.type,(E,w)=>_(E,w)),"onCodeActionResolve"),onCodeLens:r(_=>i.onRequest(H.CodeLensRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onCodeLens"),onCodeLensResolve:r(_=>i.onRequest(H.CodeLensResolveRequest.type,(E,w)=>_(E,w)),"onCodeLensResolve"),onDocumentFormatting:r(_=>i.onRequest(H.DocumentFormattingRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),void 0)),"onDocumentFormatting"),onDocumentRangeFormatting:r(_=>i.onRequest(H.DocumentRangeFormattingRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),void 0)),"onDocumentRangeFormatting"),onDocumentOnTypeFormatting:r(_=>i.onRequest(H.DocumentOnTypeFormattingRequest.type,(E,w)=>_(E,w)),"onDocumentOnTypeFormatting"),onRenameRequest:r(_=>i.onRequest(H.RenameRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),void 0)),"onRenameRequest"),onPrepareRename:r(_=>i.onRequest(H.PrepareRenameRequest.type,(E,w)=>_(E,w)),"onPrepareRename"),onDocumentLinks:r(_=>i.onRequest(H.DocumentLinkRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onDocumentLinks"),onDocumentLinkResolve:r(_=>i.onRequest(H.DocumentLinkResolveRequest.type,(E,w)=>_(E,w)),"onDocumentLinkResolve"),onDocumentColor:r(_=>i.onRequest(H.DocumentColorRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onDocumentColor"),onColorPresentation:r(_=>i.onRequest(H.ColorPresentationRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onColorPresentation"),onFoldingRanges:r(_=>i.onRequest(H.FoldingRangeRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onFoldingRanges"),onSelectionRanges:r(_=>i.onRequest(H.SelectionRangeRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onSelectionRanges"),onExecuteCommand:r(_=>i.onRequest(H.ExecuteCommandRequest.type,(E,w)=>_(E,w,(0,oe.attachWorkDone)(i,E),void 0)),"onExecuteCommand"),dispose:r(()=>i.dispose(),"dispose")};for(let _ of A)_.attach(q);return i.onRequest(H.InitializeRequest.type,_=>{t.initialize(_),Pr.string(_.trace)&&(a.trace=H.Trace.fromString(_.trace));for(let E of A)E.initialize(_.capabilities);if(P){let E=P(_,new H.CancellationTokenSource().token,(0,oe.attachWorkDone)(i,_),void 0);return O(E).then(w=>{if(w instanceof H.ResponseError)return w;let V=w;V||(V={capabilities:{}});let le=V.capabilities;le||(le={},V.capabilities=le),le.textDocumentSync===void 0||le.textDocumentSync===null?le.textDocumentSync=Pr.number(q.__textDocumentSync)?q.__textDocumentSync:H.TextDocumentSyncKind.None:!Pr.number(le.textDocumentSync)&&!Pr.number(le.textDocumentSync.change)&&(le.textDocumentSync.change=Pr.number(q.__textDocumentSync)?q.__textDocumentSync:H.TextDocumentSyncKind.None);for(let we of A)we.fillServerCapabilities(le);return V})}else{let E={capabilities:{textDocumentSync:H.TextDocumentSyncKind.None}};for(let w of A)w.fillServerCapabilities(E.capabilities);return E}}),i.onRequest(H.ShutdownRequest.type,()=>{if(t.shutdownReceived=!0,B)return B(new H.CancellationTokenSource().token)}),i.onNotification(H.ExitNotification.type,()=>{try{z&&z()}finally{t.shutdownReceived?t.exit(0):t.exit(1)}}),i.onNotification(H.SetTraceNotification.type,_=>{a.trace=H.Trace.fromString(_.value)}),q}r(iD,"createConnection");be.createConnection=iD});var cx=K(Er=>{"use strict";Object.defineProperty(Er,"__esModule",{value:!0});Er.resolveModulePath=Er.FileSystem=Er.resolveGlobalYarnPath=Er.resolveGlobalNodePath=Er.resolve=Er.uriToFilePath=void 0;var aD=require("url"),Zr=require("path"),qE=require("fs"),VE=require("child_process");function sD(e){let t=aD.parse(e);if(t.protocol!=="file:"||!t.path)return;let n=t.path.split("/");for(var o=0,i=n.length;o<i;o++)n[o]=decodeURIComponent(n[o]);if(process.platform==="win32"&&n.length>1){let a=n[0],s=n[1];a.length===0&&s.length>1&&s[1]===":"&&n.shift()}return Zr.normalize(n.join("/"))}r(sD,"uriToFilePath");Er.uriToFilePath=sD;function BE(){return process.platform==="win32"}r(BE,"isWindows");function Jl(e,t,n,o){let i="NODE_PATH",a=["var p = process;","p.on('message',function(m){","if(m.c==='e'){","p.exit(0);","}","else if(m.c==='rs'){","try{","var r=require.resolve(m.a);","p.send({c:'r',s:true,r:r});","}","catch(err){","p.send({c:'r',s:false});","}","}","});"].join("");return new Promise((s,c)=>{let u=process.env,p=Object.create(null);Object.keys(u).forEach(g=>p[g]=u[g]),t&&qE.existsSync(t)&&(p[i]?p[i]=t+Zr.delimiter+p[i]:p[i]=t,o&&o(`NODE_PATH value is: ${p[i]}`)),p.ELECTRON_RUN_AS_NODE="1";try{let g=(0,VE.fork)("",[],{cwd:n,env:p,execArgv:["-e",a]});if(g.pid===void 0){c(new Error(`Starting process to resolve node module  ${e} failed`));return}g.on("error",A=>{c(A)}),g.on("message",A=>{A.c==="r"&&(g.send({c:"e"}),A.s?s(A.r):c(new Error(`Failed to resolve module: ${e}`)))});let S={c:"rs",a:e};g.send(S)}catch(g){c(g)}})}r(Jl,"resolve");Er.resolve=Jl;function GE(e){let t="npm",n=Object.create(null);Object.keys(process.env).forEach(a=>n[a]=process.env[a]),n.NO_UPDATE_NOTIFIER="true";let o={encoding:"utf8",env:n};BE()&&(t="npm.cmd",o.shell=!0);let i=r(()=>{},"handler");try{process.on("SIGPIPE",i);let a=(0,VE.spawnSync)(t,["config","get","prefix"],o).stdout;if(!a){e&&e("'npm config get prefix' didn't return a value.");return}let s=a.trim();return e&&e(`'npm config get prefix' value is: ${s}`),s.length>0?BE()?Zr.join(s,"node_modules"):Zr.join(s,"lib","node_modules"):void 0}catch{return}finally{process.removeListener("SIGPIPE",i)}}r(GE,"resolveGlobalNodePath");Er.resolveGlobalNodePath=GE;function cD(e){let t="yarn",n={encoding:"utf8"};BE()&&(t="yarn.cmd",n.shell=!0);let o=r(()=>{},"handler");try{process.on("SIGPIPE",o);let i=(0,VE.spawnSync)(t,["global","dir","--json"],n),a=i.stdout;if(!a){e&&(e("'yarn global dir' didn't return a value."),i.stderr&&e(i.stderr));return}let s=a.trim().split(/\r?\n/);for(let c of s)try{let u=JSON.parse(c);if(u.type==="log")return Zr.join(u.data,"node_modules")}catch{}return}catch{return}finally{process.removeListener("SIGPIPE",o)}}r(cD,"resolveGlobalYarnPath");Er.resolveGlobalYarnPath=cD;var jE;(function(e){let t;function n(){return t!==void 0||(process.platform==="win32"?t=!1:t=!qE.existsSync(__filename.toUpperCase())||!qE.existsSync(__filename.toLowerCase())),t}r(n,"isCaseSensitive"),e.isCaseSensitive=n;function o(i,a){return n()?Zr.normalize(a).indexOf(Zr.normalize(i))===0:Zr.normalize(a).toLowerCase().indexOf(Zr.normalize(i).toLowerCase())===0}r(o,"isParent"),e.isParent=o})(jE||(Er.FileSystem=jE={}));function lD(e,t,n,o){return n?(Zr.isAbsolute(n)||(n=Zr.join(e,n)),Jl(t,n,n,o).then(i=>jE.isParent(n,i)?i:Promise.reject(new Error(`Failed to load ${t} from node path location.`))).then(void 0,i=>Jl(t,GE(o),e,o))):Jl(t,GE(o),e,o)}r(lD,"resolveModulePath");Er.resolveModulePath=lD});var WE=K((TH,lx)=>{"use strict";lx.exports=gt()});var ux=K(Ql=>{"use strict";Object.defineProperty(Ql,"__esModule",{value:!0});Ql.InlineCompletionFeature=void 0;var uD=gt(),dD=r(e=>class extends e{get inlineCompletion(){return{on:r(t=>this.connection.onRequest(uD.InlineCompletionRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n))),"on")}}},"InlineCompletionFeature");Ql.InlineCompletionFeature=dD});var px=K(Zt=>{"use strict";var fD=Zt&&Zt.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),fx=Zt&&Zt.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&fD(t,e,n)};Object.defineProperty(Zt,"__esModule",{value:!0});Zt.ProposedFeatures=Zt.NotebookDocuments=Zt.TextDocuments=Zt.SemanticTokensBuilder=void 0;var pD=kE();Object.defineProperty(Zt,"SemanticTokensBuilder",{enumerable:!0,get:r(function(){return pD.SemanticTokensBuilder},"get")});var mD=ux();fx(gt(),Zt);var hD=OE();Object.defineProperty(Zt,"TextDocuments",{enumerable:!0,get:r(function(){return hD.TextDocuments},"get")});var gD=NE();Object.defineProperty(Zt,"NotebookDocuments",{enumerable:!0,get:r(function(){return gD.NotebookDocuments},"get")});fx(DE(),Zt);var dx;(function(e){e.all={__brand:"features",languages:mD.InlineCompletionFeature}})(dx||(Zt.ProposedFeatures=dx={}))});var Sx=K(Dr=>{"use strict";var TD=Dr&&Dr.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),Tx=Dr&&Dr.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&TD(t,e,n)};Object.defineProperty(Dr,"__esModule",{value:!0});Dr.createConnection=Dr.Files=void 0;var mx=require("node:util"),zE=Ic(),ED=DE(),Os=cx(),Jo=WE();Tx(WE(),Dr);Tx(px(),Dr);var hx;(function(e){e.uriToFilePath=Os.uriToFilePath,e.resolveGlobalNodePath=Os.resolveGlobalNodePath,e.resolveGlobalYarnPath=Os.resolveGlobalYarnPath,e.resolve=Os.resolve,e.resolveModulePath=Os.resolveModulePath})(hx||(Dr.Files=hx={}));var gx;function Xl(){if(gx!==void 0)try{gx.end()}catch{}}r(Xl,"endProtocolConnection");var Li=!1,Ex;function SD(){let e="--clientProcessId";function t(n){try{let o=parseInt(n);isNaN(o)||(Ex=setInterval(()=>{try{process.kill(o,0)}catch{Xl(),process.exit(Li?0:1)}},3e3))}catch{}}r(t,"runTimer");for(let n=2;n<process.argv.length;n++){let o=process.argv[n];if(o===e&&n+1<process.argv.length){t(process.argv[n+1]);return}else{let i=o.split("=");i[0]===e&&t(i[1])}}}r(SD,"setupExitTimer");SD();var yD={initialize:r(e=>{let t=e.processId;zE.number(t)&&Ex===void 0&&setInterval(()=>{try{process.kill(t,0)}catch{process.exit(Li?0:1)}},3e3)},"initialize"),get shutdownReceived(){return Li},set shutdownReceived(e){Li=e},exit:r(e=>{Xl(),process.exit(e)},"exit")};function _D(e,t,n,o){let i,a,s,c;return e!==void 0&&e.__brand==="features"&&(i=e,e=t,t=n,n=o),Jo.ConnectionStrategy.is(e)||Jo.ConnectionOptions.is(e)?c=e:(a=e,s=t,c=n),bD(a,s,c,i)}r(_D,"createConnection");Dr.createConnection=_D;function bD(e,t,n,o){let i=!1;if(!e&&!t&&process.argv.length>2){let u,p,g=process.argv.slice(2);for(let S=0;S<g.length;S++){let A=g[S];if(A==="--node-ipc"){e=new Jo.IPCMessageReader(process),t=new Jo.IPCMessageWriter(process);break}else if(A==="--stdio"){i=!0,e=process.stdin,t=process.stdout;break}else if(A==="--socket"){u=parseInt(g[S+1]);break}else if(A==="--pipe"){p=g[S+1];break}else{var a=A.split("=");if(a[0]==="--socket"){u=parseInt(a[1]);break}else if(a[0]==="--pipe"){p=a[1];break}}}if(u){let S=(0,Jo.createServerSocketTransport)(u);e=S[0],t=S[1]}else if(p){let S=(0,Jo.createServerPipeTransport)(p);e=S[0],t=S[1]}}var s="Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";if(!e)throw new Error("Connection input stream is not set. "+s);if(!t)throw new Error("Connection output stream is not set. "+s);if(zE.func(e.read)&&zE.func(e.on)){let u=e;u.on("end",()=>{Xl(),process.exit(Li?0:1)}),u.on("close",()=>{Xl(),process.exit(Li?0:1)})}let c=r(u=>{let p=(0,Jo.createProtocolConnection)(e,t,u,n);return i&&RD(u),p},"connectionFactory");return(0,ED.createConnection)(c,yD,o)}r(bD,"_createConnection");function RD(e){function t(o){return o.map(i=>typeof i=="string"?i:(0,mx.inspect)(i)).join(" ")}r(t,"serialize");let n=new Map;console.assert=r(function(i,...a){if(!i)if(a.length===0)e.error("Assertion failed");else{let[s,...c]=a;e.error(`Assertion failed: ${s} ${t(c)}`)}},"assert"),console.count=r(function(i="default"){let a=String(i),s=n.get(a)??0;s+=1,n.set(a,s),e.log(`${a}: ${a}`)},"count"),console.countReset=r(function(i){i===void 0?n.clear():n.delete(String(i))},"countReset"),console.debug=r(function(...i){e.log(t(i))},"debug"),console.dir=r(function(i,a){e.log((0,mx.inspect)(i,a))},"dir"),console.log=r(function(...i){e.log(t(i))},"log"),console.error=r(function(...i){e.error(t(i))},"error"),console.trace=r(function(...i){let a=new Error().stack.replace(/(.+\n){2}/,""),s="Trace";i.length!==0&&(s+=`: ${t(i)}`),e.log(`${s}
${a}`)},"trace"),console.warn=r(function(...i){e.warn(t(i))},"warn")}r(RD,"patchConsole")});var _x=K((AH,yx)=>{"use strict";yx.exports=Sx()});var ZW={};aI(ZW,{documents:()=>ds});module.exports=cI(ZW);var qo=sI(_x(),1);var Zl=class e{static{r(this,"FullTextDocument")}constructor(t,n,o,i){this._uri=t,this._languageId=n,this._version=o,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(t){if(t){let n=this.offsetAt(t.start),o=this.offsetAt(t.end);return this._content.substring(n,o)}return this._content}update(t,n){for(let o of t)if(e.isIncremental(o)){let i=xx(o.range),a=this.offsetAt(i.start),s=this.offsetAt(i.end);this._content=this._content.substring(0,a)+o.text+this._content.substring(s,this._content.length);let c=Math.max(i.start.line,0),u=Math.max(i.end.line,0),p=this._lineOffsets,g=bx(o.text,!1,a);if(u-c===g.length)for(let A=0,O=g.length;A<O;A++)p[A+c+1]=g[A];else g.length<1e4?p.splice(c+1,u-c,...g):this._lineOffsets=p=p.slice(0,c+1).concat(g,p.slice(u+1));let S=o.text.length-(s-a);if(S!==0)for(let A=c+1+g.length,O=p.length;A<O;A++)p[A]=p[A]+S}else if(e.isFull(o))this._content=o.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=n}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=bx(this._content,!0)),this._lineOffsets}positionAt(t){t=Math.max(Math.min(t,this._content.length),0);let n=this.getLineOffsets(),o=0,i=n.length;if(i===0)return{line:0,character:t};for(;o<i;){let s=Math.floor((o+i)/2);n[s]>t?i=s:o=s+1}let a=o-1;return t=this.ensureBeforeEOL(t,n[a]),{line:a,character:t-n[a]}}offsetAt(t){let n=this.getLineOffsets();if(t.line>=n.length)return this._content.length;if(t.line<0)return 0;let o=n[t.line];if(t.character<=0)return o;let i=t.line+1<n.length?n[t.line+1]:this._content.length,a=Math.min(o+t.character,i);return this.ensureBeforeEOL(a,o)}ensureBeforeEOL(t,n){for(;t>n&&Rx(this._content.charCodeAt(t-1));)t--;return t}get lineCount(){return this.getLineOffsets().length}static isIncremental(t){let n=t;return n!=null&&typeof n.text=="string"&&n.range!==void 0&&(n.rangeLength===void 0||typeof n.rangeLength=="number")}static isFull(t){let n=t;return n!=null&&typeof n.text=="string"&&n.range===void 0&&n.rangeLength===void 0}},$l;(function(e){function t(i,a,s,c){return new Zl(i,a,s,c)}r(t,"create"),e.create=t;function n(i,a,s){if(i instanceof Zl)return i.update(a,s),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}r(n,"update"),e.update=n;function o(i,a){let s=i.getText(),c=HE(a.map(xD),(g,S)=>{let A=g.range.start.line-S.range.start.line;return A===0?g.range.start.character-S.range.start.character:A}),u=0,p=[];for(let g of c){let S=i.offsetAt(g.range.start);if(S<u)throw new Error("Overlapping edit");S>u&&p.push(s.substring(u,S)),g.newText.length&&p.push(g.newText),u=i.offsetAt(g.range.end)}return p.push(s.substr(u)),p.join("")}r(o,"applyEdits"),e.applyEdits=o})($l||($l={}));function HE(e,t){if(e.length<=1)return e;let n=e.length/2|0,o=e.slice(0,n),i=e.slice(n);HE(o,t),HE(i,t);let a=0,s=0,c=0;for(;a<o.length&&s<i.length;)t(o[a],i[s])<=0?e[c++]=o[a++]:e[c++]=i[s++];for(;a<o.length;)e[c++]=o[a++];for(;s<i.length;)e[c++]=i[s++];return e}r(HE,"mergeSort");function bx(e,t,n=0){let o=t?[n]:[];for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);Rx(a)&&(a===13&&i+1<e.length&&e.charCodeAt(i+1)===10&&i++,o.push(n+i+1))}return o}r(bx,"computeLineOffsets");function Rx(e){return e===13||e===10}r(Rx,"isEOL");function xx(e){let t=e.start,n=e.end;return t.line>n.line||t.line===n.line&&t.character>n.character?{start:n,end:t}:e}r(xx,"getWellformedRange");function xD(e){let t=xx(e.range);return t!==e.range?{newText:e.newText,range:t}:e}r(xD,"getWellformedEdit");function AD(e){let t=[],n=/code\s*=\s*"""\s*\n([\s\S]*?)\n\s*"""/g,o;for(;(o=n.exec(e))!==null;){let i=o[1],a=o.index+o[0].indexOf(o[1]),s=a+i.length;t.push({content:i,offset:a,end:s})}return t}r(AD,"extractEmbeddedJS");function eu(e,t){let n=AD(t);for(let o of n)if(e>=o.offset&&e<=o.end){let i=e-o.offset;return{region:o,jsOffset:i}}return null}r(eu,"mapToVirtualJS");var kD={addon:"addon",agent:"agent",agent_trigger:"agent_trigger",api_group:"api_group",branch:"branch",function:"cfn",mcp_server:"mcp_server",mcp_server_trigger:"mcp_server_trigger",middleware:"middleware",query:"api",realtime_trigger:"realtime_trigger",table:"db",table_trigger:"table_trigger",task:"task",tool:"tool",workflow_test:"workflow_test",workspace:"workspace",workspace_trigger:"workspace_trigger"},vD=/^\s*(\w+)/;function hn(e){let t=e.match(vD)?.[1];return kD[t]||"cfn"}r(hn,"getSchemeFromContent");var UD=typeof global=="object"&&global&&global.Object===Object&&global,tu=UD;var CD=typeof self=="object"&&self&&self.Object===Object&&self,OD=tu||CD||Function("return this")(),At=OD;var LD=At.Symbol,Dt=LD;var Ax=Object.prototype,ND=Ax.hasOwnProperty,MD=Ax.toString,Ls=Dt?Dt.toStringTag:void 0;function wD(e){var t=ND.call(e,Ls),n=e[Ls];try{e[Ls]=void 0;var o=!0}catch{}var i=MD.call(e);return o&&(t?e[Ls]=n:delete e[Ls]),i}r(wD,"getRawTag");var kx=wD;var FD=Object.prototype,ID=FD.toString;function PD(e){return ID.call(e)}r(PD,"objectToString");var vx=PD;var DD="[object Null]",qD="[object Undefined]",Ux=Dt?Dt.toStringTag:void 0;function BD(e){return e==null?e===void 0?qD:DD:Ux&&Ux in Object(e)?kx(e):vx(e)}r(BD,"baseGetTag");var zt=BD;function GD(e){return e!=null&&typeof e=="object"}r(GD,"isObjectLike");var et=GD;var jD="[object Symbol]";function VD(e){return typeof e=="symbol"||et(e)&&zt(e)==jD}r(VD,"isSymbol");var ao=VD;function WD(e,t){for(var n=-1,o=e==null?0:e.length,i=Array(o);++n<o;)i[n]=t(e[n],n,e);return i}r(WD,"arrayMap");var gn=WD;var zD=Array.isArray,Y=zD;var HD=1/0,Cx=Dt?Dt.prototype:void 0,Ox=Cx?Cx.toString:void 0;function Lx(e){if(typeof e=="string")return e;if(Y(e))return gn(e,Lx)+"";if(ao(e))return Ox?Ox.call(e):"";var t=e+"";return t=="0"&&1/e==-HD?"-0":t}r(Lx,"baseToString");var Nx=Lx;var YD=/\s/;function KD(e){for(var t=e.length;t--&&YD.test(e.charAt(t)););return t}r(KD,"trimmedEndIndex");var Mx=KD;var JD=/^\s+/;function QD(e){return e&&e.slice(0,Mx(e)+1).replace(JD,"")}r(QD,"baseTrim");var wx=QD;function XD(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}r(XD,"isObject");var tt=XD;var Fx=NaN,ZD=/^[-+]0x[0-9a-f]+$/i,$D=/^0b[01]+$/i,e1=/^0o[0-7]+$/i,t1=parseInt;function r1(e){if(typeof e=="number")return e;if(ao(e))return Fx;if(tt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=tt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=wx(e);var n=$D.test(e);return n||e1.test(e)?t1(e.slice(2),n?2:8):ZD.test(e)?Fx:+e}r(r1,"toNumber");var Ix=r1;var Px=1/0,n1=17976931348623157e292;function o1(e){if(!e)return e===0?e:0;if(e=Ix(e),e===Px||e===-Px){var t=e<0?-1:1;return t*n1}return e===e?e:0}r(o1,"toFinite");var Dx=o1;function i1(e){var t=Dx(e),n=t%1;return t===t?n?t-n:t:0}r(i1,"toInteger");var Tn=i1;function a1(e){return e}r(a1,"identity");var qr=a1;var s1="[object AsyncFunction]",c1="[object Function]",l1="[object GeneratorFunction]",u1="[object Proxy]";function d1(e){if(!tt(e))return!1;var t=zt(e);return t==c1||t==l1||t==s1||t==u1}r(d1,"isFunction");var sr=d1;var f1=At["__core-js_shared__"],ru=f1;var qx=(function(){var e=/[^.]+$/.exec(ru&&ru.keys&&ru.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})();function p1(e){return!!qx&&qx in e}r(p1,"isMasked");var Bx=p1;var m1=Function.prototype,h1=m1.toString;function g1(e){if(e!=null){try{return h1.call(e)}catch{}try{return e+""}catch{}}return""}r(g1,"toSource");var Fn=g1;var T1=/[\\^$.*+?()[\]{}|]/g,E1=/^\[object .+?Constructor\]$/,S1=Function.prototype,y1=Object.prototype,_1=S1.toString,b1=y1.hasOwnProperty,R1=RegExp("^"+_1.call(b1).replace(T1,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function x1(e){if(!tt(e)||Bx(e))return!1;var t=sr(e)?R1:E1;return t.test(Fn(e))}r(x1,"baseIsNative");var Gx=x1;function A1(e,t){return e?.[t]}r(A1,"getValue");var jx=A1;function k1(e,t){var n=jx(e,t);return Gx(n)?n:void 0}r(k1,"getNative");var Sr=k1;var v1=Sr(At,"WeakMap"),nu=v1;var Vx=Object.create,U1=(function(){function e(){}return r(e,"object"),function(t){if(!tt(t))return{};if(Vx)return Vx(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}})(),Wx=U1;function C1(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}r(C1,"apply");var zx=C1;function O1(){}r(O1,"noop");var rt=O1;function L1(e,t){var n=-1,o=e.length;for(t||(t=Array(o));++n<o;)t[n]=e[n];return t}r(L1,"copyArray");var Hx=L1;var N1=800,M1=16,w1=Date.now;function F1(e){var t=0,n=0;return function(){var o=w1(),i=M1-(o-n);if(n=o,i>0){if(++t>=N1)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}r(F1,"shortOut");var Yx=F1;function I1(e){return function(){return e}}r(I1,"constant");var Kx=I1;var P1=(function(){try{var e=Sr(Object,"defineProperty");return e({},"",{}),e}catch{}})(),Ni=P1;var D1=Ni?function(e,t){return Ni(e,"toString",{configurable:!0,enumerable:!1,value:Kx(t),writable:!0})}:qr,Jx=D1;var q1=Yx(Jx),Qx=q1;function B1(e,t){for(var n=-1,o=e==null?0:e.length;++n<o&&t(e[n],n,e)!==!1;);return e}r(B1,"arrayEach");var ou=B1;function G1(e,t,n,o){for(var i=e.length,a=n+(o?1:-1);o?a--:++a<i;)if(t(e[a],a,e))return a;return-1}r(G1,"baseFindIndex");var iu=G1;function j1(e){return e!==e}r(j1,"baseIsNaN");var Xx=j1;function V1(e,t,n){for(var o=n-1,i=e.length;++o<i;)if(e[o]===t)return o;return-1}r(V1,"strictIndexOf");var Zx=V1;function W1(e,t,n){return t===t?Zx(e,t,n):iu(e,Xx,n)}r(W1,"baseIndexOf");var Mi=W1;function z1(e,t){var n=e==null?0:e.length;return!!n&&Mi(e,t,0)>-1}r(z1,"arrayIncludes");var au=z1;var H1=9007199254740991,Y1=/^(?:0|[1-9]\d*)$/;function K1(e,t){var n=typeof e;return t=t??H1,!!t&&(n=="number"||n!="symbol"&&Y1.test(e))&&e>-1&&e%1==0&&e<t}r(K1,"isIndex");var so=K1;function J1(e,t,n){t=="__proto__"&&Ni?Ni(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}r(J1,"baseAssignValue");var wi=J1;function Q1(e,t){return e===t||e!==e&&t!==t}r(Q1,"eq");var En=Q1;var X1=Object.prototype,Z1=X1.hasOwnProperty;function $1(e,t,n){var o=e[t];(!(Z1.call(e,t)&&En(o,n))||n===void 0&&!(t in e))&&wi(e,t,n)}r($1,"assignValue");var co=$1;function e0(e,t,n,o){var i=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var c=t[a],u=o?o(n[c],e[c],c,n,e):void 0;u===void 0&&(u=e[c]),i?wi(n,c,u):co(n,c,u)}return n}r(e0,"copyObject");var Sn=e0;var $x=Math.max;function t0(e,t,n){return t=$x(t===void 0?e.length-1:t,0),function(){for(var o=arguments,i=-1,a=$x(o.length-t,0),s=Array(a);++i<a;)s[i]=o[t+i];i=-1;for(var c=Array(t+1);++i<t;)c[i]=o[i];return c[t]=n(s),zx(e,this,c)}}r(t0,"overRest");var eA=t0;function r0(e,t){return Qx(eA(e,t,qr),e+"")}r(r0,"baseRest");var lo=r0;var n0=9007199254740991;function o0(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=n0}r(o0,"isLength");var Fi=o0;function i0(e){return e!=null&&Fi(e.length)&&!sr(e)}r(i0,"isArrayLike");var kt=i0;function a0(e,t,n){if(!tt(n))return!1;var o=typeof t;return(o=="number"?kt(n)&&so(t,n.length):o=="string"&&t in n)?En(n[t],e):!1}r(a0,"isIterateeCall");var uo=a0;function s0(e){return lo(function(t,n){var o=-1,i=n.length,a=i>1?n[i-1]:void 0,s=i>2?n[2]:void 0;for(a=e.length>3&&typeof a=="function"?(i--,a):void 0,s&&uo(n[0],n[1],s)&&(a=i<3?void 0:a,i=1),t=Object(t);++o<i;){var c=n[o];c&&e(t,c,o,a)}return t})}r(s0,"createAssigner");var tA=s0;var c0=Object.prototype;function l0(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||c0;return e===n}r(l0,"isPrototype");var yn=l0;function u0(e,t){for(var n=-1,o=Array(e);++n<e;)o[n]=t(n);return o}r(u0,"baseTimes");var rA=u0;var d0="[object Arguments]";function f0(e){return et(e)&&zt(e)==d0}r(f0,"baseIsArguments");var YE=f0;var nA=Object.prototype,p0=nA.hasOwnProperty,m0=nA.propertyIsEnumerable,h0=YE((function(){return arguments})())?YE:function(e){return et(e)&&p0.call(e,"callee")&&!m0.call(e,"callee")},fo=h0;function g0(){return!1}r(g0,"stubFalse");var oA=g0;var sA=typeof exports=="object"&&exports&&!exports.nodeType&&exports,iA=sA&&typeof module=="object"&&module&&!module.nodeType&&module,T0=iA&&iA.exports===sA,aA=T0?At.Buffer:void 0,E0=aA?aA.isBuffer:void 0,S0=E0||oA,In=S0;var y0="[object Arguments]",_0="[object Array]",b0="[object Boolean]",R0="[object Date]",x0="[object Error]",A0="[object Function]",k0="[object Map]",v0="[object Number]",U0="[object Object]",C0="[object RegExp]",O0="[object Set]",L0="[object String]",N0="[object WeakMap]",M0="[object ArrayBuffer]",w0="[object DataView]",F0="[object Float32Array]",I0="[object Float64Array]",P0="[object Int8Array]",D0="[object Int16Array]",q0="[object Int32Array]",B0="[object Uint8Array]",G0="[object Uint8ClampedArray]",j0="[object Uint16Array]",V0="[object Uint32Array]",Ve={};Ve[F0]=Ve[I0]=Ve[P0]=Ve[D0]=Ve[q0]=Ve[B0]=Ve[G0]=Ve[j0]=Ve[V0]=!0;Ve[y0]=Ve[_0]=Ve[M0]=Ve[b0]=Ve[w0]=Ve[R0]=Ve[x0]=Ve[A0]=Ve[k0]=Ve[v0]=Ve[U0]=Ve[C0]=Ve[O0]=Ve[L0]=Ve[N0]=!1;function W0(e){return et(e)&&Fi(e.length)&&!!Ve[zt(e)]}r(W0,"baseIsTypedArray");var cA=W0;function z0(e){return function(t){return e(t)}}r(z0,"baseUnary");var _n=z0;var lA=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ns=lA&&typeof module=="object"&&module&&!module.nodeType&&module,H0=Ns&&Ns.exports===lA,KE=H0&&tu.process,Y0=(function(){try{var e=Ns&&Ns.require&&Ns.require("util").types;return e||KE&&KE.binding&&KE.binding("util")}catch{}})(),Br=Y0;var uA=Br&&Br.isTypedArray,K0=uA?_n(uA):cA,Ii=K0;var J0=Object.prototype,Q0=J0.hasOwnProperty;function X0(e,t){var n=Y(e),o=!n&&fo(e),i=!n&&!o&&In(e),a=!n&&!o&&!i&&Ii(e),s=n||o||i||a,c=s?rA(e.length,String):[],u=c.length;for(var p in e)(t||Q0.call(e,p))&&!(s&&(p=="length"||i&&(p=="offset"||p=="parent")||a&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||so(p,u)))&&c.push(p);return c}r(X0,"arrayLikeKeys");var su=X0;function Z0(e,t){return function(n){return e(t(n))}}r(Z0,"overArg");var cu=Z0;var $0=cu(Object.keys,Object),dA=$0;var eq=Object.prototype,tq=eq.hasOwnProperty;function rq(e){if(!yn(e))return dA(e);var t=[];for(var n in Object(e))tq.call(e,n)&&n!="constructor"&&t.push(n);return t}r(rq,"baseKeys");var lu=rq;function nq(e){return kt(e)?su(e):lu(e)}r(nq,"keys");var ke=nq;var oq=Object.prototype,iq=oq.hasOwnProperty,aq=tA(function(e,t){if(yn(t)||kt(t)){Sn(t,ke(t),e);return}for(var n in t)iq.call(t,n)&&co(e,n,t[n])}),Ht=aq;function sq(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}r(sq,"nativeKeysIn");var fA=sq;var cq=Object.prototype,lq=cq.hasOwnProperty;function uq(e){if(!tt(e))return fA(e);var t=yn(e),n=[];for(var o in e)o=="constructor"&&(t||!lq.call(e,o))||n.push(o);return n}r(uq,"baseKeysIn");var pA=uq;function dq(e){return kt(e)?su(e,!0):pA(e)}r(dq,"keysIn");var po=dq;var fq=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pq=/^\w*$/;function mq(e,t){if(Y(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||ao(e)?!0:pq.test(e)||!fq.test(e)||t!=null&&e in Object(t)}r(mq,"isKey");var Pi=mq;var hq=Sr(Object,"create"),Pn=hq;function gq(){this.__data__=Pn?Pn(null):{},this.size=0}r(gq,"hashClear");var mA=gq;function Tq(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}r(Tq,"hashDelete");var hA=Tq;var Eq="__lodash_hash_undefined__",Sq=Object.prototype,yq=Sq.hasOwnProperty;function _q(e){var t=this.__data__;if(Pn){var n=t[e];return n===Eq?void 0:n}return yq.call(t,e)?t[e]:void 0}r(_q,"hashGet");var gA=_q;var bq=Object.prototype,Rq=bq.hasOwnProperty;function xq(e){var t=this.__data__;return Pn?t[e]!==void 0:Rq.call(t,e)}r(xq,"hashHas");var TA=xq;var Aq="__lodash_hash_undefined__";function kq(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Pn&&t===void 0?Aq:t,this}r(kq,"hashSet");var EA=kq;function Di(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}r(Di,"Hash");Di.prototype.clear=mA;Di.prototype.delete=hA;Di.prototype.get=gA;Di.prototype.has=TA;Di.prototype.set=EA;var JE=Di;function vq(){this.__data__=[],this.size=0}r(vq,"listCacheClear");var SA=vq;function Uq(e,t){for(var n=e.length;n--;)if(En(e[n][0],t))return n;return-1}r(Uq,"assocIndexOf");var mo=Uq;var Cq=Array.prototype,Oq=Cq.splice;function Lq(e){var t=this.__data__,n=mo(t,e);if(n<0)return!1;var o=t.length-1;return n==o?t.pop():Oq.call(t,n,1),--this.size,!0}r(Lq,"listCacheDelete");var yA=Lq;function Nq(e){var t=this.__data__,n=mo(t,e);return n<0?void 0:t[n][1]}r(Nq,"listCacheGet");var _A=Nq;function Mq(e){return mo(this.__data__,e)>-1}r(Mq,"listCacheHas");var bA=Mq;function wq(e,t){var n=this.__data__,o=mo(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}r(wq,"listCacheSet");var RA=wq;function qi(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}r(qi,"ListCache");qi.prototype.clear=SA;qi.prototype.delete=yA;qi.prototype.get=_A;qi.prototype.has=bA;qi.prototype.set=RA;var ho=qi;var Fq=Sr(At,"Map"),go=Fq;function Iq(){this.size=0,this.__data__={hash:new JE,map:new(go||ho),string:new JE}}r(Iq,"mapCacheClear");var xA=Iq;function Pq(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}r(Pq,"isKeyable");var AA=Pq;function Dq(e,t){var n=e.__data__;return AA(t)?n[typeof t=="string"?"string":"hash"]:n.map}r(Dq,"getMapData");var To=Dq;function qq(e){var t=To(this,e).delete(e);return this.size-=t?1:0,t}r(qq,"mapCacheDelete");var kA=qq;function Bq(e){return To(this,e).get(e)}r(Bq,"mapCacheGet");var vA=Bq;function Gq(e){return To(this,e).has(e)}r(Gq,"mapCacheHas");var UA=Gq;function jq(e,t){var n=To(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}r(jq,"mapCacheSet");var CA=jq;function Bi(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}r(Bi,"MapCache");Bi.prototype.clear=xA;Bi.prototype.delete=kA;Bi.prototype.get=vA;Bi.prototype.has=UA;Bi.prototype.set=CA;var Qo=Bi;var Vq="Expected a function";function QE(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Vq);var n=r(function(){var o=arguments,i=t?t.apply(this,o):o[0],a=n.cache;if(a.has(i))return a.get(i);var s=e.apply(this,o);return n.cache=a.set(i,s)||a,s},"memoized");return n.cache=new(QE.Cache||Qo),n}r(QE,"memoize");QE.Cache=Qo;var OA=QE;var Wq=500;function zq(e){var t=OA(e,function(o){return n.size===Wq&&n.clear(),o}),n=t.cache;return t}r(zq,"memoizeCapped");var LA=zq;var Hq=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yq=/\\(\\)?/g,Kq=LA(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Hq,function(n,o,i,a){t.push(i?a.replace(Yq,"$1"):o||n)}),t}),NA=Kq;function Jq(e){return e==null?"":Nx(e)}r(Jq,"toString");var MA=Jq;function Qq(e,t){return Y(e)?e:Pi(e,t)?[e]:NA(MA(e))}r(Qq,"castPath");var Eo=Qq;var Xq=1/0;function Zq(e){if(typeof e=="string"||ao(e))return e;var t=e+"";return t=="0"&&1/e==-Xq?"-0":t}r(Zq,"toKey");var bn=Zq;function $q(e,t){t=Eo(t,e);for(var n=0,o=t.length;e!=null&&n<o;)e=e[bn(t[n++])];return n&&n==o?e:void 0}r($q,"baseGet");var Gi=$q;function eB(e,t,n){var o=e==null?void 0:Gi(e,t);return o===void 0?n:o}r(eB,"get");var Xo=eB;function tB(e,t){for(var n=-1,o=t.length,i=e.length;++n<o;)e[i+n]=t[n];return e}r(tB,"arrayPush");var ji=tB;var wA=Dt?Dt.isConcatSpreadable:void 0;function rB(e){return Y(e)||fo(e)||!!(wA&&e&&e[wA])}r(rB,"isFlattenable");var FA=rB;function IA(e,t,n,o,i){var a=-1,s=e.length;for(n||(n=FA),i||(i=[]);++a<s;){var c=e[a];t>0&&n(c)?t>1?IA(c,t-1,n,o,i):ji(i,c):o||(i[i.length]=c)}return i}r(IA,"baseFlatten");var Vi=IA;function nB(e){var t=e==null?0:e.length;return t?Vi(e,1):[]}r(nB,"flatten");var Lt=nB;var oB=cu(Object.getPrototypeOf,Object),Wi=oB;var iB="[object Object]",aB=Function.prototype,sB=Object.prototype,PA=aB.toString,cB=sB.hasOwnProperty,lB=PA.call(Object);function uB(e){if(!et(e)||zt(e)!=iB)return!1;var t=Wi(e);if(t===null)return!0;var n=cB.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&PA.call(n)==lB}r(uB,"isPlainObject");var uu=uB;function dB(e,t,n){var o=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++o<i;)a[o]=e[o+t];return a}r(dB,"baseSlice");var du=dB;function fB(e,t,n,o){var i=-1,a=e==null?0:e.length;for(o&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}r(fB,"arrayReduce");var DA=fB;function pB(){this.__data__=new ho,this.size=0}r(pB,"stackClear");var qA=pB;function mB(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}r(mB,"stackDelete");var BA=mB;function hB(e){return this.__data__.get(e)}r(hB,"stackGet");var GA=hB;function gB(e){return this.__data__.has(e)}r(gB,"stackHas");var jA=gB;var TB=200;function EB(e,t){var n=this.__data__;if(n instanceof ho){var o=n.__data__;if(!go||o.length<TB-1)return o.push([e,t]),this.size=++n.size,this;n=this.__data__=new Qo(o)}return n.set(e,t),this.size=n.size,this}r(EB,"stackSet");var VA=EB;function zi(e){var t=this.__data__=new ho(e);this.size=t.size}r(zi,"Stack");zi.prototype.clear=qA;zi.prototype.delete=BA;zi.prototype.get=GA;zi.prototype.has=jA;zi.prototype.set=VA;var So=zi;function SB(e,t){return e&&Sn(t,ke(t),e)}r(SB,"baseAssign");var WA=SB;function yB(e,t){return e&&Sn(t,po(t),e)}r(yB,"baseAssignIn");var zA=yB;var JA=typeof exports=="object"&&exports&&!exports.nodeType&&exports,HA=JA&&typeof module=="object"&&module&&!module.nodeType&&module,_B=HA&&HA.exports===JA,YA=_B?At.Buffer:void 0,KA=YA?YA.allocUnsafe:void 0;function bB(e,t){if(t)return e.slice();var n=e.length,o=KA?KA(n):new e.constructor(n);return e.copy(o),o}r(bB,"cloneBuffer");var QA=bB;function RB(e,t){for(var n=-1,o=e==null?0:e.length,i=0,a=[];++n<o;){var s=e[n];t(s,n,e)&&(a[i++]=s)}return a}r(RB,"arrayFilter");var Hi=RB;function xB(){return[]}r(xB,"stubArray");var fu=xB;var AB=Object.prototype,kB=AB.propertyIsEnumerable,XA=Object.getOwnPropertySymbols,vB=XA?function(e){return e==null?[]:(e=Object(e),Hi(XA(e),function(t){return kB.call(e,t)}))}:fu,Yi=vB;function UB(e,t){return Sn(e,Yi(e),t)}r(UB,"copySymbols");var ZA=UB;var CB=Object.getOwnPropertySymbols,OB=CB?function(e){for(var t=[];e;)ji(t,Yi(e)),e=Wi(e);return t}:fu,pu=OB;function LB(e,t){return Sn(e,pu(e),t)}r(LB,"copySymbolsIn");var $A=LB;function NB(e,t,n){var o=t(e);return Y(e)?o:ji(o,n(e))}r(NB,"baseGetAllKeys");var mu=NB;function MB(e){return mu(e,ke,Yi)}r(MB,"getAllKeys");var Ms=MB;function wB(e){return mu(e,po,pu)}r(wB,"getAllKeysIn");var hu=wB;var FB=Sr(At,"DataView"),gu=FB;var IB=Sr(At,"Promise"),Tu=IB;var PB=Sr(At,"Set"),yo=PB;var ek="[object Map]",DB="[object Object]",tk="[object Promise]",rk="[object Set]",nk="[object WeakMap]",ok="[object DataView]",qB=Fn(gu),BB=Fn(go),GB=Fn(Tu),jB=Fn(yo),VB=Fn(nu),Zo=zt;(gu&&Zo(new gu(new ArrayBuffer(1)))!=ok||go&&Zo(new go)!=ek||Tu&&Zo(Tu.resolve())!=tk||yo&&Zo(new yo)!=rk||nu&&Zo(new nu)!=nk)&&(Zo=r(function(e){var t=zt(e),n=t==DB?e.constructor:void 0,o=n?Fn(n):"";if(o)switch(o){case qB:return ok;case BB:return ek;case GB:return tk;case jB:return rk;case VB:return nk}return t},"getTag"));var $r=Zo;var WB=Object.prototype,zB=WB.hasOwnProperty;function HB(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&zB.call(e,"index")&&(n.index=e.index,n.input=e.input),n}r(HB,"initCloneArray");var ik=HB;var YB=At.Uint8Array,Ki=YB;function KB(e){var t=new e.constructor(e.byteLength);return new Ki(t).set(new Ki(e)),t}r(KB,"cloneArrayBuffer");var Ji=KB;function JB(e,t){var n=t?Ji(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}r(JB,"cloneDataView");var ak=JB;var QB=/\w*$/;function XB(e){var t=new e.constructor(e.source,QB.exec(e));return t.lastIndex=e.lastIndex,t}r(XB,"cloneRegExp");var sk=XB;var ck=Dt?Dt.prototype:void 0,lk=ck?ck.valueOf:void 0;function ZB(e){return lk?Object(lk.call(e)):{}}r(ZB,"cloneSymbol");var uk=ZB;function $B(e,t){var n=t?Ji(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}r($B,"cloneTypedArray");var dk=$B;var eG="[object Boolean]",tG="[object Date]",rG="[object Map]",nG="[object Number]",oG="[object RegExp]",iG="[object Set]",aG="[object String]",sG="[object Symbol]",cG="[object ArrayBuffer]",lG="[object DataView]",uG="[object Float32Array]",dG="[object Float64Array]",fG="[object Int8Array]",pG="[object Int16Array]",mG="[object Int32Array]",hG="[object Uint8Array]",gG="[object Uint8ClampedArray]",TG="[object Uint16Array]",EG="[object Uint32Array]";function SG(e,t,n){var o=e.constructor;switch(t){case cG:return Ji(e);case eG:case tG:return new o(+e);case lG:return ak(e,n);case uG:case dG:case fG:case pG:case mG:case hG:case gG:case TG:case EG:return dk(e,n);case rG:return new o;case nG:case aG:return new o(e);case oG:return sk(e);case iG:return new o;case sG:return uk(e)}}r(SG,"initCloneByTag");var fk=SG;function yG(e){return typeof e.constructor=="function"&&!yn(e)?Wx(Wi(e)):{}}r(yG,"initCloneObject");var pk=yG;var _G="[object Map]";function bG(e){return et(e)&&$r(e)==_G}r(bG,"baseIsMap");var mk=bG;var hk=Br&&Br.isMap,RG=hk?_n(hk):mk,gk=RG;var xG="[object Set]";function AG(e){return et(e)&&$r(e)==xG}r(AG,"baseIsSet");var Tk=AG;var Ek=Br&&Br.isSet,kG=Ek?_n(Ek):Tk,Sk=kG;var vG=1,UG=2,CG=4,yk="[object Arguments]",OG="[object Array]",LG="[object Boolean]",NG="[object Date]",MG="[object Error]",_k="[object Function]",wG="[object GeneratorFunction]",FG="[object Map]",IG="[object Number]",bk="[object Object]",PG="[object RegExp]",DG="[object Set]",qG="[object String]",BG="[object Symbol]",GG="[object WeakMap]",jG="[object ArrayBuffer]",VG="[object DataView]",WG="[object Float32Array]",zG="[object Float64Array]",HG="[object Int8Array]",YG="[object Int16Array]",KG="[object Int32Array]",JG="[object Uint8Array]",QG="[object Uint8ClampedArray]",XG="[object Uint16Array]",ZG="[object Uint32Array]",Pe={};Pe[yk]=Pe[OG]=Pe[jG]=Pe[VG]=Pe[LG]=Pe[NG]=Pe[WG]=Pe[zG]=Pe[HG]=Pe[YG]=Pe[KG]=Pe[FG]=Pe[IG]=Pe[bk]=Pe[PG]=Pe[DG]=Pe[qG]=Pe[BG]=Pe[JG]=Pe[QG]=Pe[XG]=Pe[ZG]=!0;Pe[MG]=Pe[_k]=Pe[GG]=!1;function Eu(e,t,n,o,i,a){var s,c=t&vG,u=t&UG,p=t&CG;if(n&&(s=i?n(e,o,i,a):n(e)),s!==void 0)return s;if(!tt(e))return e;var g=Y(e);if(g){if(s=ik(e),!c)return Hx(e,s)}else{var S=$r(e),A=S==_k||S==wG;if(In(e))return QA(e,c);if(S==bk||S==yk||A&&!i){if(s=u||A?{}:pk(e),!c)return u?$A(e,zA(s,e)):ZA(e,WA(s,e))}else{if(!Pe[S])return i?e:{};s=fk(e,S,c)}}a||(a=new So);var O=a.get(e);if(O)return O;a.set(e,s),Sk(e)?e.forEach(function(z){s.add(Eu(z,t,n,z,e,a))}):gk(e)&&e.forEach(function(z,q){s.set(q,Eu(z,t,n,q,e,a))});var B=p?u?hu:Ms:u?po:ke,P=g?void 0:B(e);return ou(P||e,function(z,q){P&&(q=z,z=e[q]),co(s,q,Eu(z,t,n,q,e,a))}),s}r(Eu,"baseClone");var Rk=Eu;var $G=4;function e2(e){return Rk(e,$G)}r(e2,"clone");var De=e2;function t2(e){for(var t=-1,n=e==null?0:e.length,o=0,i=[];++t<n;){var a=e[t];a&&(i[o++]=a)}return i}r(t2,"compact");var Rn=t2;var r2="__lodash_hash_undefined__";function n2(e){return this.__data__.set(e,r2),this}r(n2,"setCacheAdd");var xk=n2;function o2(e){return this.__data__.has(e)}r(o2,"setCacheHas");var Ak=o2;function Su(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Qo;++t<n;)this.add(e[t])}r(Su,"SetCache");Su.prototype.add=Su.prototype.push=xk;Su.prototype.has=Ak;var Qi=Su;function i2(e,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(t(e[n],n,e))return!0;return!1}r(i2,"arraySome");var yu=i2;function a2(e,t){return e.has(t)}r(a2,"cacheHas");var Xi=a2;var s2=1,c2=2;function l2(e,t,n,o,i,a){var s=n&s2,c=e.length,u=t.length;if(c!=u&&!(s&&u>c))return!1;var p=a.get(e),g=a.get(t);if(p&&g)return p==t&&g==e;var S=-1,A=!0,O=n&c2?new Qi:void 0;for(a.set(e,t),a.set(t,e);++S<c;){var B=e[S],P=t[S];if(o)var z=s?o(P,B,S,t,e,a):o(B,P,S,e,t,a);if(z!==void 0){if(z)continue;A=!1;break}if(O){if(!yu(t,function(q,_){if(!Xi(O,_)&&(B===q||i(B,q,n,o,a)))return O.push(_)})){A=!1;break}}else if(!(B===P||i(B,P,n,o,a))){A=!1;break}}return a.delete(e),a.delete(t),A}r(l2,"equalArrays");var _u=l2;function u2(e){var t=-1,n=Array(e.size);return e.forEach(function(o,i){n[++t]=[i,o]}),n}r(u2,"mapToArray");var kk=u2;function d2(e){var t=-1,n=Array(e.size);return e.forEach(function(o){n[++t]=o}),n}r(d2,"setToArray");var Zi=d2;var f2=1,p2=2,m2="[object Boolean]",h2="[object Date]",g2="[object Error]",T2="[object Map]",E2="[object Number]",S2="[object RegExp]",y2="[object Set]",_2="[object String]",b2="[object Symbol]",R2="[object ArrayBuffer]",x2="[object DataView]",vk=Dt?Dt.prototype:void 0,XE=vk?vk.valueOf:void 0;function A2(e,t,n,o,i,a,s){switch(n){case x2:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case R2:return!(e.byteLength!=t.byteLength||!a(new Ki(e),new Ki(t)));case m2:case h2:case E2:return En(+e,+t);case g2:return e.name==t.name&&e.message==t.message;case S2:case _2:return e==t+"";case T2:var c=kk;case y2:var u=o&f2;if(c||(c=Zi),e.size!=t.size&&!u)return!1;var p=s.get(e);if(p)return p==t;o|=p2,s.set(e,t);var g=_u(c(e),c(t),o,i,a,s);return s.delete(e),g;case b2:if(XE)return XE.call(e)==XE.call(t)}return!1}r(A2,"equalByTag");var Uk=A2;var k2=1,v2=Object.prototype,U2=v2.hasOwnProperty;function C2(e,t,n,o,i,a){var s=n&k2,c=Ms(e),u=c.length,p=Ms(t),g=p.length;if(u!=g&&!s)return!1;for(var S=u;S--;){var A=c[S];if(!(s?A in t:U2.call(t,A)))return!1}var O=a.get(e),B=a.get(t);if(O&&B)return O==t&&B==e;var P=!0;a.set(e,t),a.set(t,e);for(var z=s;++S<u;){A=c[S];var q=e[A],_=t[A];if(o)var E=s?o(_,q,A,t,e,a):o(q,_,A,e,t,a);if(!(E===void 0?q===_||i(q,_,n,o,a):E)){P=!1;break}z||(z=A=="constructor")}if(P&&!z){var w=e.constructor,V=t.constructor;w!=V&&"constructor"in e&&"constructor"in t&&!(typeof w=="function"&&w instanceof w&&typeof V=="function"&&V instanceof V)&&(P=!1)}return a.delete(e),a.delete(t),P}r(C2,"equalObjects");var Ck=C2;var O2=1,Ok="[object Arguments]",Lk="[object Array]",bu="[object Object]",L2=Object.prototype,Nk=L2.hasOwnProperty;function N2(e,t,n,o,i,a){var s=Y(e),c=Y(t),u=s?Lk:$r(e),p=c?Lk:$r(t);u=u==Ok?bu:u,p=p==Ok?bu:p;var g=u==bu,S=p==bu,A=u==p;if(A&&In(e)){if(!In(t))return!1;s=!0,g=!1}if(A&&!g)return a||(a=new So),s||Ii(e)?_u(e,t,n,o,i,a):Uk(e,t,u,n,o,i,a);if(!(n&O2)){var O=g&&Nk.call(e,"__wrapped__"),B=S&&Nk.call(t,"__wrapped__");if(O||B){var P=O?e.value():e,z=B?t.value():t;return a||(a=new So),i(P,z,n,o,a)}}return A?(a||(a=new So),Ck(e,t,n,o,i,a)):!1}r(N2,"baseIsEqualDeep");var Mk=N2;function wk(e,t,n,o,i){return e===t?!0:e==null||t==null||!et(e)&&!et(t)?e!==e&&t!==t:Mk(e,t,n,o,wk,i)}r(wk,"baseIsEqual");var Ru=wk;var M2=1,w2=2;function F2(e,t,n,o){var i=n.length,a=i,s=!o;if(e==null)return!a;for(e=Object(e);i--;){var c=n[i];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++i<a;){c=n[i];var u=c[0],p=e[u],g=c[1];if(s&&c[2]){if(p===void 0&&!(u in e))return!1}else{var S=new So;if(o)var A=o(p,g,u,e,t,S);if(!(A===void 0?Ru(g,p,M2|w2,o,S):A))return!1}}return!0}r(F2,"baseIsMatch");var Fk=F2;function I2(e){return e===e&&!tt(e)}r(I2,"isStrictComparable");var xu=I2;function P2(e){for(var t=ke(e),n=t.length;n--;){var o=t[n],i=e[o];t[n]=[o,i,xu(i)]}return t}r(P2,"getMatchData");var Ik=P2;function D2(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}r(D2,"matchesStrictComparable");var Au=D2;function q2(e){var t=Ik(e);return t.length==1&&t[0][2]?Au(t[0][0],t[0][1]):function(n){return n===e||Fk(n,e,t)}}r(q2,"baseMatches");var Pk=q2;function B2(e,t){return e!=null&&t in Object(e)}r(B2,"baseHasIn");var Dk=B2;function G2(e,t,n){t=Eo(t,e);for(var o=-1,i=t.length,a=!1;++o<i;){var s=bn(t[o]);if(!(a=e!=null&&n(e,s)))break;e=e[s]}return a||++o!=i?a:(i=e==null?0:e.length,!!i&&Fi(i)&&so(s,i)&&(Y(e)||fo(e)))}r(G2,"hasPath");var ku=G2;function j2(e,t){return e!=null&&ku(e,t,Dk)}r(j2,"hasIn");var qk=j2;var V2=1,W2=2;function z2(e,t){return Pi(e)&&xu(t)?Au(bn(e),t):function(n){var o=Xo(n,e);return o===void 0&&o===t?qk(n,e):Ru(t,o,V2|W2)}}r(z2,"baseMatchesProperty");var Bk=z2;function H2(e){return function(t){return t?.[e]}}r(H2,"baseProperty");var Gk=H2;function Y2(e){return function(t){return Gi(t,e)}}r(Y2,"basePropertyDeep");var jk=Y2;function K2(e){return Pi(e)?Gk(bn(e)):jk(e)}r(K2,"property");var Vk=K2;function J2(e){return typeof e=="function"?e:e==null?qr:typeof e=="object"?Y(e)?Bk(e[0],e[1]):Pk(e):Vk(e)}r(J2,"baseIteratee");var vt=J2;function Q2(e,t,n,o){for(var i=-1,a=e==null?0:e.length;++i<a;){var s=e[i];t(o,s,n(s),e)}return o}r(Q2,"arrayAggregator");var Wk=Q2;function X2(e){return function(t,n,o){for(var i=-1,a=Object(t),s=o(t),c=s.length;c--;){var u=s[e?c:++i];if(n(a[u],u,a)===!1)break}return t}}r(X2,"createBaseFor");var zk=X2;var Z2=zk(),Hk=Z2;function $2(e,t){return e&&Hk(e,t,ke)}r($2,"baseForOwn");var Yk=$2;function ej(e,t){return function(n,o){if(n==null)return n;if(!kt(n))return e(n,o);for(var i=n.length,a=t?i:-1,s=Object(n);(t?a--:++a<i)&&o(s[a],a,s)!==!1;);return n}}r(ej,"createBaseEach");var Kk=ej;var tj=Kk(Yk),yr=tj;function rj(e,t,n,o){return yr(e,function(i,a,s){t(o,i,n(i),s)}),o}r(rj,"baseAggregator");var Jk=rj;function nj(e,t){return function(n,o){var i=Y(n)?Wk:Jk,a=t?t():{};return i(n,e,vt(o,2),a)}}r(nj,"createAggregator");var vu=nj;var Qk=Object.prototype,oj=Qk.hasOwnProperty,ij=lo(function(e,t){e=Object(e);var n=-1,o=t.length,i=o>2?t[2]:void 0;for(i&&uo(t[0],t[1],i)&&(o=1);++n<o;)for(var a=t[n],s=po(a),c=-1,u=s.length;++c<u;){var p=s[c],g=e[p];(g===void 0||En(g,Qk[p])&&!oj.call(e,p))&&(e[p]=a[p])}return e}),$i=ij;function aj(e){return et(e)&&kt(e)}r(aj,"isArrayLikeObject");var ws=aj;function sj(e,t,n){for(var o=-1,i=e==null?0:e.length;++o<i;)if(n(t,e[o]))return!0;return!1}r(sj,"arrayIncludesWith");var Uu=sj;var cj=200;function lj(e,t,n,o){var i=-1,a=au,s=!0,c=e.length,u=[],p=t.length;if(!c)return u;n&&(t=gn(t,_n(n))),o?(a=Uu,s=!1):t.length>=cj&&(a=Xi,s=!1,t=new Qi(t));e:for(;++i<c;){var g=e[i],S=n==null?g:n(g);if(g=o||g!==0?g:0,s&&S===S){for(var A=p;A--;)if(t[A]===S)continue e;u.push(g)}else a(t,S,o)||u.push(g)}return u}r(lj,"baseDifference");var Cu=lj;var uj=lo(function(e,t){return ws(e)?Cu(e,Vi(t,1,ws,!0)):[]}),_o=uj;function dj(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}r(dj,"last");var xn=dj;function fj(e,t,n){var o=e==null?0:e.length;return o?(t=n||t===void 0?1:Tn(t),du(e,t<0?0:t,o)):[]}r(fj,"drop");var Tt=fj;function pj(e,t,n){var o=e==null?0:e.length;return o?(t=n||t===void 0?1:Tn(t),t=o-t,du(e,0,t<0?0:t)):[]}r(pj,"dropRight");var Dn=pj;function mj(e){return typeof e=="function"?e:qr}r(mj,"castFunction");var Xk=mj;function hj(e,t){var n=Y(e)?ou:yr;return n(e,Xk(t))}r(hj,"forEach");var Q=hj;function gj(e,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(!t(e[n],n,e))return!1;return!0}r(gj,"arrayEvery");var Zk=gj;function Tj(e,t){var n=!0;return yr(e,function(o,i,a){return n=!!t(o,i,a),n}),n}r(Tj,"baseEvery");var $k=Tj;function Ej(e,t,n){var o=Y(e)?Zk:$k;return n&&uo(e,t,n)&&(t=void 0),o(e,vt(t,3))}r(Ej,"every");var qt=Ej;function Sj(e,t){var n=[];return yr(e,function(o,i,a){t(o,i,a)&&n.push(o)}),n}r(Sj,"baseFilter");var Ou=Sj;function yj(e,t){var n=Y(e)?Hi:Ou;return n(e,vt(t,3))}r(yj,"filter");var $t=yj;function _j(e){return function(t,n,o){var i=Object(t);if(!kt(t)){var a=vt(n,3);t=ke(t),n=r(function(c){return a(i[c],c,i)},"predicate")}var s=e(t,n,o);return s>-1?i[a?t[s]:s]:void 0}}r(_j,"createFind");var ev=_j;var bj=Math.max;function Rj(e,t,n){var o=e==null?0:e.length;if(!o)return-1;var i=n==null?0:Tn(n);return i<0&&(i=bj(o+i,0)),iu(e,vt(t,3),i)}r(Rj,"findIndex");var tv=Rj;var xj=ev(tv),An=xj;function Aj(e){return e&&e.length?e[0]:void 0}r(Aj,"head");var Ut=Aj;function kj(e,t){var n=-1,o=kt(e)?Array(e.length):[];return yr(e,function(i,a,s){o[++n]=t(i,a,s)}),o}r(kj,"baseMap");var rv=kj;function vj(e,t){var n=Y(e)?gn:rv;return n(e,vt(t,3))}r(vj,"map");var J=vj;function Uj(e,t){return Vi(J(e,t),1)}r(Uj,"flatMap");var cr=Uj;var Cj=Object.prototype,Oj=Cj.hasOwnProperty,Lj=vu(function(e,t,n){Oj.call(e,n)?e[n].push(t):wi(e,n,[t])}),ZE=Lj;var Nj=Object.prototype,Mj=Nj.hasOwnProperty;function wj(e,t){return e!=null&&Mj.call(e,t)}r(wj,"baseHas");var nv=wj;function Fj(e,t){return e!=null&&ku(e,t,nv)}r(Fj,"has");var X=Fj;var Ij="[object String]";function Pj(e){return typeof e=="string"||!Y(e)&&et(e)&&zt(e)==Ij}r(Pj,"isString");var Nt=Pj;function Dj(e,t){return gn(t,function(n){return e[n]})}r(Dj,"baseValues");var ov=Dj;function qj(e){return e==null?[]:ov(e,ke(e))}r(qj,"values");var Le=qj;var Bj=Math.max;function Gj(e,t,n,o){e=kt(e)?e:Le(e),n=n&&!o?Tn(n):0;var i=e.length;return n<0&&(n=Bj(i+n,0)),Nt(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Mi(e,t,n)>-1}r(Gj,"includes");var Ke=Gj;var jj=Math.max;function Vj(e,t,n){var o=e==null?0:e.length;if(!o)return-1;var i=n==null?0:Tn(n);return i<0&&(i=jj(o+i,0)),Mi(e,t,i)}r(Vj,"indexOf");var Lu=Vj;var Wj="[object Map]",zj="[object Set]",Hj=Object.prototype,Yj=Hj.hasOwnProperty;function Kj(e){if(e==null)return!0;if(kt(e)&&(Y(e)||typeof e=="string"||typeof e.splice=="function"||In(e)||Ii(e)||fo(e)))return!e.length;var t=$r(e);if(t==Wj||t==zj)return!e.size;if(yn(e))return!lu(e).length;for(var n in e)if(Yj.call(e,n))return!1;return!0}r(Kj,"isEmpty");var de=Kj;var Jj="[object RegExp]";function Qj(e){return et(e)&&zt(e)==Jj}r(Qj,"baseIsRegExp");var iv=Qj;var av=Br&&Br.isRegExp,Xj=av?_n(av):iv,Gr=Xj;function Zj(e){return e===void 0}r(Zj,"isUndefined");var er=Zj;var $j="Expected a function";function eV(e){if(typeof e!="function")throw new TypeError($j);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}r(eV,"negate");var sv=eV;function tV(e,t,n,o){if(!tt(e))return e;t=Eo(t,e);for(var i=-1,a=t.length,s=a-1,c=e;c!=null&&++i<a;){var u=bn(t[i]),p=n;if(u==="__proto__"||u==="constructor"||u==="prototype")return e;if(i!=s){var g=c[u];p=o?o(g,u,c):void 0,p===void 0&&(p=tt(g)?g:so(t[i+1])?[]:{})}co(c,u,p),c=c[u]}return e}r(tV,"baseSet");var cv=tV;function rV(e,t,n){for(var o=-1,i=t.length,a={};++o<i;){var s=t[o],c=Gi(e,s);n(c,s)&&cv(a,Eo(s,e),c)}return a}r(rV,"basePickBy");var lv=rV;function nV(e,t){if(e==null)return{};var n=gn(hu(e),function(o){return[o]});return t=vt(t),lv(e,n,function(o,i){return t(o,i[0])})}r(nV,"pickBy");var _r=nV;var oV=vu(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]}),$E=oV;function iV(e,t,n,o,i){return i(e,function(a,s,c){n=o?(o=!1,a):t(n,a,s,c)}),n}r(iV,"baseReduce");var uv=iV;function aV(e,t,n){var o=Y(e)?DA:uv,i=arguments.length<3;return o(e,vt(t,4),n,i,yr)}r(aV,"reduce");var Ct=aV;function sV(e,t){var n=Y(e)?Hi:Ou;return n(e,sv(vt(t,3)))}r(sV,"reject");var bo=sV;function cV(e,t){var n;return yr(e,function(o,i,a){return n=t(o,i,a),!n}),!!n}r(cV,"baseSome");var dv=cV;function lV(e,t,n){var o=Y(e)?yu:dv;return n&&uo(e,t,n)&&(t=void 0),o(e,vt(t,3))}r(lV,"some");var en=lV;var uV=1/0,dV=yo&&1/Zi(new yo([,-0]))[1]==uV?function(e){return new yo(e)}:rt,fv=dV;var fV=200;function pV(e,t,n){var o=-1,i=au,a=e.length,s=!0,c=[],u=c;if(n)s=!1,i=Uu;else if(a>=fV){var p=t?null:fv(e);if(p)return Zi(p);s=!1,i=Xi,u=new Qi}else u=t?[]:c;e:for(;++o<a;){var g=e[o],S=t?t(g):g;if(g=n||g!==0?g:0,s&&S===S){for(var A=u.length;A--;)if(u[A]===S)continue e;t&&u.push(S),c.push(g)}else i(u,S,n)||(u!==c&&u.push(S),c.push(g))}return c}r(pV,"baseUniq");var pv=pV;function mV(e){return e&&e.length?pv(e):[]}r(mV,"uniq");var Ro=mV;var hV=lo(function(e,t){return ws(e)?Cu(e,t):[]}),eS=hV;function ea(e){console&&console.error&&console.error(`Error: ${e}`)}r(ea,"PRINT_ERROR");function Fs(e){console&&console.warn&&console.warn(`Warning: ${e}`)}r(Fs,"PRINT_WARNING");function Is(e){let t=new Date().getTime(),n=e();return{time:new Date().getTime()-t,value:n}}r(Is,"timer");function Ps(e){function t(){}r(t,"FakeConstructor"),t.prototype=e;let n=new t;function o(){return typeof n.bar}return r(o,"fakeAccess"),o(),o(),e;(0,eval)(e)}r(Ps,"toFastProperties");function gV(e){return TV(e)?e.LABEL:e.name}r(gV,"tokenLabel");function TV(e){return Nt(e.LABEL)&&e.LABEL!==""}r(TV,"hasTokenLabel");var Ur=class{static{r(this,"AbstractProduction")}get definition(){return this._definition}set definition(t){this._definition=t}constructor(t){this._definition=t}accept(t){t.visit(this),Q(this.definition,n=>{n.accept(t)})}},qe=class extends Ur{static{r(this,"NonTerminal")}constructor(t){super([]),this.idx=1,Ht(this,_r(t,n=>n!==void 0))}set definition(t){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(t){t.visit(this)}},lr=class extends Ur{static{r(this,"Rule")}constructor(t){super(t.definition),this.orgText="",Ht(this,_r(t,n=>n!==void 0))}},Be=class extends Ur{static{r(this,"Alternative")}constructor(t){super(t.definition),this.ignoreAmbiguities=!1,Ht(this,_r(t,n=>n!==void 0))}},We=class extends Ur{static{r(this,"Option")}constructor(t){super(t.definition),this.idx=1,Ht(this,_r(t,n=>n!==void 0))}},Et=class extends Ur{static{r(this,"RepetitionMandatory")}constructor(t){super(t.definition),this.idx=1,Ht(this,_r(t,n=>n!==void 0))}},St=class extends Ur{static{r(this,"RepetitionMandatoryWithSeparator")}constructor(t){super(t.definition),this.idx=1,Ht(this,_r(t,n=>n!==void 0))}},Ue=class extends Ur{static{r(this,"Repetition")}constructor(t){super(t.definition),this.idx=1,Ht(this,_r(t,n=>n!==void 0))}},dt=class extends Ur{static{r(this,"RepetitionWithSeparator")}constructor(t){super(t.definition),this.idx=1,Ht(this,_r(t,n=>n!==void 0))}},ft=class extends Ur{static{r(this,"Alternation")}get definition(){return this._definition}set definition(t){this._definition=t}constructor(t){super(t.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,Ht(this,_r(t,n=>n!==void 0))}},Se=class{static{r(this,"Terminal")}constructor(t){this.idx=1,Ht(this,_r(t,n=>n!==void 0))}accept(t){t.visit(this)}};function Nu(e){return J(e,ta)}r(Nu,"serializeGrammar");function ta(e){function t(n){return J(n,ta)}if(r(t,"convertDefinition"),e instanceof qe){let n={type:"NonTerminal",name:e.nonTerminalName,idx:e.idx};return Nt(e.label)&&(n.label=e.label),n}else{if(e instanceof Be)return{type:"Alternative",definition:t(e.definition)};if(e instanceof We)return{type:"Option",idx:e.idx,definition:t(e.definition)};if(e instanceof Et)return{type:"RepetitionMandatory",idx:e.idx,definition:t(e.definition)};if(e instanceof St)return{type:"RepetitionMandatoryWithSeparator",idx:e.idx,separator:ta(new Se({terminalType:e.separator})),definition:t(e.definition)};if(e instanceof dt)return{type:"RepetitionWithSeparator",idx:e.idx,separator:ta(new Se({terminalType:e.separator})),definition:t(e.definition)};if(e instanceof Ue)return{type:"Repetition",idx:e.idx,definition:t(e.definition)};if(e instanceof ft)return{type:"Alternation",idx:e.idx,definition:t(e.definition)};if(e instanceof Se){let n={type:"Terminal",name:e.terminalType.name,label:gV(e.terminalType),idx:e.idx};Nt(e.label)&&(n.terminalLabel=e.label);let o=e.terminalType.PATTERN;return e.terminalType.PATTERN&&(n.pattern=Gr(o)?o.source:o),n}else{if(e instanceof lr)return{type:"Rule",name:e.name,orgText:e.orgText,definition:t(e.definition)};throw Error("non exhaustive match")}}}r(ta,"serializeProduction");var ur=class{static{r(this,"GAstVisitor")}visit(t){let n=t;switch(n.constructor){case qe:return this.visitNonTerminal(n);case Be:return this.visitAlternative(n);case We:return this.visitOption(n);case Et:return this.visitRepetitionMandatory(n);case St:return this.visitRepetitionMandatoryWithSeparator(n);case dt:return this.visitRepetitionWithSeparator(n);case Ue:return this.visitRepetition(n);case ft:return this.visitAlternation(n);case Se:return this.visitTerminal(n);case lr:return this.visitRule(n);default:throw Error("non exhaustive match")}}visitNonTerminal(t){}visitAlternative(t){}visitOption(t){}visitRepetition(t){}visitRepetitionMandatory(t){}visitRepetitionMandatoryWithSeparator(t){}visitRepetitionWithSeparator(t){}visitAlternation(t){}visitTerminal(t){}visitRule(t){}};function tS(e){return e instanceof Be||e instanceof We||e instanceof Ue||e instanceof Et||e instanceof St||e instanceof dt||e instanceof Se||e instanceof lr}r(tS,"isSequenceProd");function $o(e,t=[]){return e instanceof We||e instanceof Ue||e instanceof dt?!0:e instanceof ft?en(e.definition,o=>$o(o,t)):e instanceof qe&&Ke(t,e)?!1:e instanceof Ur?(e instanceof qe&&t.push(e),qt(e.definition,o=>$o(o,t))):!1}r($o,"isOptionalProd");function rS(e){return e instanceof ft}r(rS,"isBranchingProd");function br(e){if(e instanceof qe)return"SUBRULE";if(e instanceof We)return"OPTION";if(e instanceof ft)return"OR";if(e instanceof Et)return"AT_LEAST_ONE";if(e instanceof St)return"AT_LEAST_ONE_SEP";if(e instanceof dt)return"MANY_SEP";if(e instanceof Ue)return"MANY";if(e instanceof Se)return"CONSUME";throw Error("non exhaustive match")}r(br,"getProductionDslName");var qn=class{static{r(this,"RestWalker")}walk(t,n=[]){Q(t.definition,(o,i)=>{let a=Tt(t.definition,i+1);if(o instanceof qe)this.walkProdRef(o,a,n);else if(o instanceof Se)this.walkTerminal(o,a,n);else if(o instanceof Be)this.walkFlat(o,a,n);else if(o instanceof We)this.walkOption(o,a,n);else if(o instanceof Et)this.walkAtLeastOne(o,a,n);else if(o instanceof St)this.walkAtLeastOneSep(o,a,n);else if(o instanceof dt)this.walkManySep(o,a,n);else if(o instanceof Ue)this.walkMany(o,a,n);else if(o instanceof ft)this.walkOr(o,a,n);else throw Error("non exhaustive match")})}walkTerminal(t,n,o){}walkProdRef(t,n,o){}walkFlat(t,n,o){let i=n.concat(o);this.walk(t,i)}walkOption(t,n,o){let i=n.concat(o);this.walk(t,i)}walkAtLeastOne(t,n,o){let i=[new We({definition:t.definition})].concat(n,o);this.walk(t,i)}walkAtLeastOneSep(t,n,o){let i=mv(t,n,o);this.walk(t,i)}walkMany(t,n,o){let i=[new We({definition:t.definition})].concat(n,o);this.walk(t,i)}walkManySep(t,n,o){let i=mv(t,n,o);this.walk(t,i)}walkOr(t,n,o){let i=n.concat(o);Q(t.definition,a=>{let s=new Be({definition:[a]});this.walk(s,i)})}};function mv(e,t,n){return[new We({definition:[new Se({terminalType:e.separator})].concat(e.definition)})].concat(t,n)}r(mv,"restForRepetitionWithSeparator");function ei(e){if(e instanceof qe)return ei(e.referencedRule);if(e instanceof Se)return yV(e);if(tS(e))return EV(e);if(rS(e))return SV(e);throw Error("non exhaustive match")}r(ei,"first");function EV(e){let t=[],n=e.definition,o=0,i=n.length>o,a,s=!0;for(;i&&s;)a=n[o],s=$o(a),t=t.concat(ei(a)),o=o+1,i=n.length>o;return Ro(t)}r(EV,"firstForSequence");function SV(e){let t=J(e.definition,n=>ei(n));return Ro(Lt(t))}r(SV,"firstForBranching");function yV(e){return[e.terminalType]}r(yV,"firstForTerminal");var Mu="_~IN~_";var nS=class extends qn{static{r(this,"ResyncFollowsWalker")}constructor(t){super(),this.topProd=t,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(t,n,o){}walkProdRef(t,n,o){let i=_V(t.referencedRule,t.idx)+this.topProd.name,a=n.concat(o),s=new Be({definition:a}),c=ei(s);this.follows[i]=c}};function hv(e){let t={};return Q(e,n=>{let o=new nS(n).startWalking();Ht(t,o)}),t}r(hv,"computeAllProdsFollows");function _V(e,t){return e.name+t+Mu}r(_V,"buildBetweenProdsFollowPrefix");function re(e){return e.charCodeAt(0)}r(re,"cc");function wu(e,t){Array.isArray(e)?e.forEach(function(n){t.push(n)}):t.push(e)}r(wu,"insertToSet");function ra(e,t){if(e[t]===!0)throw"duplicate flag "+t;let n=e[t];e[t]=!0}r(ra,"addFlag");function ti(e){if(e===void 0)throw Error("Internal Error - Should never get here!");return!0}r(ti,"ASSERT_EXISTS");function Ds(){throw Error("Internal Error - Should never get here!")}r(Ds,"ASSERT_NEVER_REACH_HERE");function oS(e){return e.type==="Character"}r(oS,"isCharacter");var qs=[];for(let e=re("0");e<=re("9");e++)qs.push(e);var Bs=[re("_")].concat(qs);for(let e=re("a");e<=re("z");e++)Bs.push(e);for(let e=re("A");e<=re("Z");e++)Bs.push(e);var iS=[re(" "),re("\f"),re(`
`),re("\r"),re("	"),re("\v"),re("	"),re("\xA0"),re("\u1680"),re("\u2000"),re("\u2001"),re("\u2002"),re("\u2003"),re("\u2004"),re("\u2005"),re("\u2006"),re("\u2007"),re("\u2008"),re("\u2009"),re("\u200A"),re("\u2028"),re("\u2029"),re("\u202F"),re("\u205F"),re("\u3000"),re("\uFEFF")];var bV=/[0-9a-fA-F]/,Fu=/[0-9]/,RV=/[1-9]/,Gs=class{static{r(this,"RegExpParser")}constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(t){this.idx=t.idx,this.input=t.input,this.groupIdx=t.groupIdx}pattern(t){this.idx=0,this.input=t,this.groupIdx=0,this.consumeChar("/");let n=this.disjunction();this.consumeChar("/");let o={type:"Flags",loc:{begin:this.idx,end:t.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":ra(o,"global");break;case"i":ra(o,"ignoreCase");break;case"m":ra(o,"multiLine");break;case"u":ra(o,"unicode");break;case"y":ra(o,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:o,value:n,loc:this.loc(0)}}disjunction(){let t=[],n=this.idx;for(t.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),t.push(this.alternative());return{type:"Disjunction",value:t,loc:this.loc(n)}}alternative(){let t=[],n=this.idx;for(;this.isTerm();)t.push(this.term());return{type:"Alternative",value:t,loc:this.loc(n)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){let t=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(t)};case"$":return{type:"EndAnchor",loc:this.loc(t)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(t)};case"B":return{type:"NonWordBoundary",loc:this.loc(t)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let n;switch(this.popChar()){case"=":n="Lookahead";break;case"!":n="NegativeLookahead";break}ti(n);let o=this.disjunction();return this.consumeChar(")"),{type:n,value:o,loc:this.loc(t)}}return Ds()}quantifier(t=!1){let n,o=this.idx;switch(this.popChar()){case"*":n={atLeast:0,atMost:1/0};break;case"+":n={atLeast:1,atMost:1/0};break;case"?":n={atLeast:0,atMost:1};break;case"{":let i=this.integerIncludingZero();switch(this.popChar()){case"}":n={atLeast:i,atMost:i};break;case",":let a;this.isDigit()?(a=this.integerIncludingZero(),n={atLeast:i,atMost:a}):n={atLeast:i,atMost:1/0},this.consumeChar("}");break}if(t===!0&&n===void 0)return;ti(n);break}if(!(t===!0&&n===void 0)&&ti(n))return this.peekChar(0)==="?"?(this.consumeChar("?"),n.greedy=!1):n.greedy=!0,n.type="Quantifier",n.loc=this.loc(o),n}atom(){let t,n=this.idx;switch(this.peekChar()){case".":t=this.dotAll();break;case"\\":t=this.atomEscape();break;case"[":t=this.characterClass();break;case"(":t=this.group();break}return t===void 0&&this.isPatternCharacter()&&(t=this.patternCharacter()),ti(t)?(t.loc=this.loc(n),this.isQuantifier()&&(t.quantifier=this.quantifier()),t):Ds()}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[re(`
`),re("\r"),re("\u2028"),re("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let t,n=!1;switch(this.popChar()){case"d":t=qs;break;case"D":t=qs,n=!0;break;case"s":t=iS;break;case"S":t=iS,n=!0;break;case"w":t=Bs;break;case"W":t=Bs,n=!0;break}return ti(t)?{type:"Set",value:t,complement:n}:Ds()}controlEscapeAtom(){let t;switch(this.popChar()){case"f":t=re("\f");break;case"n":t=re(`
`);break;case"r":t=re("\r");break;case"t":t=re("	");break;case"v":t=re("\v");break}return ti(t)?{type:"Character",value:t}:Ds()}controlLetterEscapeAtom(){this.consumeChar("c");let t=this.popChar();if(/[a-zA-Z]/.test(t)===!1)throw Error("Invalid ");return{type:"Character",value:t.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:re("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){let t=this.popChar();return{type:"Character",value:re(t)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:let t=this.popChar();return{type:"Character",value:re(t)}}}characterClass(){let t=[],n=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),n=!0);this.isClassAtom();){let o=this.classAtom(),i=o.type==="Character";if(oS(o)&&this.isRangeDash()){this.consumeChar("-");let a=this.classAtom(),s=a.type==="Character";if(oS(a)){if(a.value<o.value)throw Error("Range out of order in character class");t.push({from:o.value,to:a.value})}else wu(o.value,t),t.push(re("-")),wu(a.value,t)}else wu(o.value,t)}return this.consumeChar("]"),{type:"Set",complement:n,value:t}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:re("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let t=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),t=!1;break;default:this.groupIdx++;break}let n=this.disjunction();this.consumeChar(")");let o={type:"Group",capturing:t,value:n};return t&&(o.idx=this.groupIdx),o}positiveInteger(){let t=this.popChar();if(RV.test(t)===!1)throw Error("Expecting a positive integer");for(;Fu.test(this.peekChar(0));)t+=this.popChar();return parseInt(t,10)}integerIncludingZero(){let t=this.popChar();if(Fu.test(t)===!1)throw Error("Expecting an integer");for(;Fu.test(this.peekChar(0));)t+=this.popChar();return parseInt(t,10)}patternCharacter(){let t=this.popChar();switch(t){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:re(t)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return Fu.test(this.peekChar(0))}isClassAtom(t=0){switch(this.peekChar(t)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){let t=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(t)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(t){let n="";for(let i=0;i<t;i++){let a=this.popChar();if(bV.test(a)===!1)throw Error("Expecting a HexDecimal digits");n+=a}return{type:"Character",value:parseInt(n,16)}}peekChar(t=0){return this.input[this.idx+t]}popChar(){let t=this.peekChar(0);return this.consumeChar(void 0),t}consumeChar(t){if(t!==void 0&&this.input[this.idx]!==t)throw Error("Expected: '"+t+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(t){return{begin:t,end:this.idx}}};var xo=class{static{r(this,"BaseRegExpVisitor")}visitChildren(t){for(let n in t){let o=t[n];t.hasOwnProperty(n)&&(o.type!==void 0?this.visit(o):Array.isArray(o)&&o.forEach(i=>{this.visit(i)},this))}}visit(t){switch(t.type){case"Pattern":this.visitPattern(t);break;case"Flags":this.visitFlags(t);break;case"Disjunction":this.visitDisjunction(t);break;case"Alternative":this.visitAlternative(t);break;case"StartAnchor":this.visitStartAnchor(t);break;case"EndAnchor":this.visitEndAnchor(t);break;case"WordBoundary":this.visitWordBoundary(t);break;case"NonWordBoundary":this.visitNonWordBoundary(t);break;case"Lookahead":this.visitLookahead(t);break;case"NegativeLookahead":this.visitNegativeLookahead(t);break;case"Character":this.visitCharacter(t);break;case"Set":this.visitSet(t);break;case"Group":this.visitGroup(t);break;case"GroupBackReference":this.visitGroupBackReference(t);break;case"Quantifier":this.visitQuantifier(t);break}this.visitChildren(t)}visitPattern(t){}visitFlags(t){}visitDisjunction(t){}visitAlternative(t){}visitStartAnchor(t){}visitEndAnchor(t){}visitWordBoundary(t){}visitNonWordBoundary(t){}visitLookahead(t){}visitNegativeLookahead(t){}visitCharacter(t){}visitSet(t){}visitGroup(t){}visitGroupBackReference(t){}visitQuantifier(t){}};var Iu={},xV=new Gs;function na(e){let t=e.toString();if(Iu.hasOwnProperty(t))return Iu[t];{let n=xV.pattern(t);return Iu[t]=n,n}}r(na,"getRegExpAst");function gv(){Iu={}}r(gv,"clearRegExpParserCache");var Ev="Complement Sets are not supported for first char optimization",js=`Unable to use "first char" lexer optimizations:
`;function Sv(e,t=!1){try{let n=na(e);return aS(n.value,{},n.flags.ignoreCase)}catch(n){if(n.message===Ev)t&&Fs(`${js}	Unable to optimize: < ${e.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let o="";t&&(o=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),ea(`${js}
	Failed parsing: < ${e.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+o)}}return[]}r(Sv,"getOptimizedStartCodesIndices");function aS(e,t,n){switch(e.type){case"Disjunction":for(let i=0;i<e.value.length;i++)aS(e.value[i],t,n);break;case"Alternative":let o=e.value;for(let i=0;i<o.length;i++){let a=o[i];switch(a.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}let s=a;switch(s.type){case"Character":Pu(s.value,t,n);break;case"Set":if(s.complement===!0)throw Error(Ev);Q(s.value,u=>{if(typeof u=="number")Pu(u,t,n);else{let p=u;if(n===!0)for(let g=p.from;g<=p.to;g++)Pu(g,t,n);else{for(let g=p.from;g<=p.to&&g<oa;g++)Pu(g,t,n);if(p.to>=oa){let g=p.from>=oa?p.from:oa,S=p.to,A=kn(g),O=kn(S);for(let B=A;B<=O;B++)t[B]=B}}}});break;case"Group":aS(s.value,t,n);break;default:throw Error("Non Exhaustive Match")}let c=s.quantifier!==void 0&&s.quantifier.atLeast===0;if(s.type==="Group"&&sS(s)===!1||s.type!=="Group"&&c===!1)break}break;default:throw Error("non exhaustive match!")}return Le(t)}r(aS,"firstCharOptimizedIndices");function Pu(e,t,n){let o=kn(e);t[o]=o,n===!0&&AV(e,t)}r(Pu,"addOptimizedIdxToResult");function AV(e,t){let n=String.fromCharCode(e),o=n.toUpperCase();if(o!==n){let i=kn(o.charCodeAt(0));t[i]=i}else{let i=n.toLowerCase();if(i!==n){let a=kn(i.charCodeAt(0));t[a]=a}}}r(AV,"handleIgnoreCase");function Tv(e,t){return An(e.value,n=>{if(typeof n=="number")return Ke(t,n);{let o=n;return An(t,i=>o.from<=i&&i<=o.to)!==void 0}})}r(Tv,"findCode");function sS(e){let t=e.quantifier;return t&&t.atLeast===0?!0:e.value?Y(e.value)?qt(e.value,sS):sS(e.value):!1}r(sS,"isWholeOptional");var cS=class extends xo{static{r(this,"CharCodeFinder")}constructor(t){super(),this.targetCharCodes=t,this.found=!1}visitChildren(t){if(this.found!==!0){switch(t.type){case"Lookahead":this.visitLookahead(t);return;case"NegativeLookahead":this.visitNegativeLookahead(t);return}super.visitChildren(t)}}visitCharacter(t){Ke(this.targetCharCodes,t.value)&&(this.found=!0)}visitSet(t){t.complement?Tv(t,this.targetCharCodes)===void 0&&(this.found=!0):Tv(t,this.targetCharCodes)!==void 0&&(this.found=!0)}};function Du(e,t){if(t instanceof RegExp){let n=na(t),o=new cS(e);return o.visit(n),o.found}else return An(t,n=>Ke(e,n.charCodeAt(0)))!==void 0}r(Du,"canMatchCharCode");var ri="PATTERN",ia="defaultMode",qu="modes",uS=typeof new RegExp("(?:)").sticky=="boolean";function bv(e,t){t=$i(t,{useSticky:uS,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:r((_,E)=>E(),"tracer")});let n=t.tracer;n("initCharCodeToOptimizedIndexMap",()=>{VV()});let o;n("Reject Lexer.NA",()=>{o=bo(e,_=>_[ri]===nt.NA)});let i=!1,a;n("Transform Patterns",()=>{i=!1,a=J(o,_=>{let E=_[ri];if(Gr(E)){let w=E.source;return w.length===1&&w!=="^"&&w!=="$"&&w!=="."&&!E.ignoreCase?w:w.length===2&&w[0]==="\\"&&!Ke(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],w[1])?w[1]:t.useSticky?_v(E):yv(E)}else{if(sr(E))return i=!0,{exec:E};if(typeof E=="object")return i=!0,E;if(typeof E=="string"){if(E.length===1)return E;{let w=E.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),V=new RegExp(w);return t.useSticky?_v(V):yv(V)}}else throw Error("non exhaustive match")}})});let s,c,u,p,g;n("misc mapping",()=>{s=J(o,_=>_.tokenTypeIdx),c=J(o,_=>{let E=_.GROUP;if(E!==nt.SKIPPED){if(Nt(E))return E;if(er(E))return!1;throw Error("non exhaustive match")}}),u=J(o,_=>{let E=_.LONGER_ALT;if(E)return Y(E)?J(E,V=>Lu(o,V)):[Lu(o,E)]}),p=J(o,_=>_.PUSH_MODE),g=J(o,_=>X(_,"POP_MODE"))});let S;n("Line Terminator Handling",()=>{let _=Ov(t.lineTerminatorCharacters);S=J(o,E=>!1),t.positionTracking!=="onlyOffset"&&(S=J(o,E=>X(E,"LINE_BREAKS")?!!E.LINE_BREAKS:Cv(E,_)===!1&&Du(_,E.PATTERN)))});let A,O,B,P;n("Misc Mapping #2",()=>{A=J(o,vv),O=J(a,GV),B=Ct(o,(_,E)=>{let w=E.GROUP;return Nt(w)&&w!==nt.SKIPPED&&(_[w]=[]),_},{}),P=J(a,(_,E)=>({pattern:a[E],longerAlt:u[E],canLineTerminator:S[E],isCustom:A[E],short:O[E],group:c[E],push:p[E],pop:g[E],tokenTypeIdx:s[E],tokenType:o[E]}))});let z=!0,q=[];return t.safeMode||n("First Char Optimization",()=>{q=Ct(o,(_,E,w)=>{if(typeof E.PATTERN=="string"){let V=E.PATTERN.charCodeAt(0),le=kn(V);lS(_,le,P[w])}else if(Y(E.START_CHARS_HINT)){let V;Q(E.START_CHARS_HINT,le=>{let we=typeof le=="string"?le.charCodeAt(0):le,st=kn(we);V!==st&&(V=st,lS(_,st,P[w]))})}else if(Gr(E.PATTERN))if(E.PATTERN.unicode)z=!1,t.ensureOptimizations&&ea(`${js}	Unable to analyze < ${E.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{let V=Sv(E.PATTERN,t.ensureOptimizations);de(V)&&(z=!1),Q(V,le=>{lS(_,le,P[w])})}else t.ensureOptimizations&&ea(`${js}	TokenType: <${E.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),z=!1;return _},[])}),{emptyGroups:B,patternIdxToConfig:P,charCodeToPatternIdxToConfig:q,hasCustom:i,canBeOptimized:z}}r(bv,"analyzeTokenTypes");function Rv(e,t){let n=[],o=vV(e);n=n.concat(o.errors);let i=UV(o.valid),a=i.valid;return n=n.concat(i.errors),n=n.concat(kV(a)),n=n.concat(IV(a)),n=n.concat(PV(a,t)),n=n.concat(DV(a)),n}r(Rv,"validatePatterns");function kV(e){let t=[],n=$t(e,o=>Gr(o[ri]));return t=t.concat(OV(n)),t=t.concat(MV(n)),t=t.concat(wV(n)),t=t.concat(FV(n)),t=t.concat(LV(n)),t}r(kV,"validateRegExpPattern");function vV(e){let t=$t(e,i=>!X(i,ri)),n=J(t,i=>({message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:Je.MISSING_PATTERN,tokenTypes:[i]})),o=_o(e,t);return{errors:n,valid:o}}r(vV,"findMissingPatterns");function UV(e){let t=$t(e,i=>{let a=i[ri];return!Gr(a)&&!sr(a)&&!X(a,"exec")&&!Nt(a)}),n=J(t,i=>({message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:Je.INVALID_PATTERN,tokenTypes:[i]})),o=_o(e,t);return{errors:n,valid:o}}r(UV,"findInvalidPatterns");var CV=/[^\\][$]/;function OV(e){class t extends xo{static{r(this,"EndAnchorFinder")}constructor(){super(...arguments),this.found=!1}visitEndAnchor(a){this.found=!0}}let n=$t(e,i=>{let a=i.PATTERN;try{let s=na(a),c=new t;return c.visit(s),c.found}catch{return CV.test(a.source)}});return J(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Je.EOI_ANCHOR_FOUND,tokenTypes:[i]}))}r(OV,"findEndOfInputAnchor");function LV(e){let t=$t(e,o=>o.PATTERN.test(""));return J(t,o=>({message:"Token Type: ->"+o.name+"<- static 'PATTERN' must not match an empty string",type:Je.EMPTY_MATCH_PATTERN,tokenTypes:[o]}))}r(LV,"findEmptyMatchRegExps");var NV=/[^\\[][\^]|^\^/;function MV(e){class t extends xo{static{r(this,"StartAnchorFinder")}constructor(){super(...arguments),this.found=!1}visitStartAnchor(a){this.found=!0}}let n=$t(e,i=>{let a=i.PATTERN;try{let s=na(a),c=new t;return c.visit(s),c.found}catch{return NV.test(a.source)}});return J(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Je.SOI_ANCHOR_FOUND,tokenTypes:[i]}))}r(MV,"findStartOfInputAnchor");function wV(e){let t=$t(e,o=>{let i=o[ri];return i instanceof RegExp&&(i.multiline||i.global)});return J(t,o=>({message:"Token Type: ->"+o.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:Je.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[o]}))}r(wV,"findUnsupportedFlags");function FV(e){let t=[],n=J(e,a=>Ct(e,(s,c)=>(a.PATTERN.source===c.PATTERN.source&&!Ke(t,c)&&c.PATTERN!==nt.NA&&(t.push(c),s.push(c)),s),[]));n=Rn(n);let o=$t(n,a=>a.length>1);return J(o,a=>{let s=J(a,u=>u.name);return{message:`The same RegExp pattern ->${Ut(a).PATTERN}<-has been used in all of the following Token Types: ${s.join(", ")} <-`,type:Je.DUPLICATE_PATTERNS_FOUND,tokenTypes:a}})}r(FV,"findDuplicatePatterns");function IV(e){let t=$t(e,o=>{if(!X(o,"GROUP"))return!1;let i=o.GROUP;return i!==nt.SKIPPED&&i!==nt.NA&&!Nt(i)});return J(t,o=>({message:"Token Type: ->"+o.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:Je.INVALID_GROUP_TYPE_FOUND,tokenTypes:[o]}))}r(IV,"findInvalidGroupType");function PV(e,t){let n=$t(e,i=>i.PUSH_MODE!==void 0&&!Ke(t,i.PUSH_MODE));return J(n,i=>({message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,type:Je.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}))}r(PV,"findModesThatDoNotExist");function DV(e){let t=[],n=Ct(e,(o,i,a)=>{let s=i.PATTERN;return s===nt.NA||(Nt(s)?o.push({str:s,idx:a,tokenType:i}):Gr(s)&&BV(s)&&o.push({str:s.source,idx:a,tokenType:i})),o},[]);return Q(e,(o,i)=>{Q(n,({str:a,idx:s,tokenType:c})=>{if(i<s&&qV(a,o.PATTERN)){let u=`Token: ->${c.name}<- can never be matched.
Because it appears AFTER the Token Type ->${o.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;t.push({message:u,type:Je.UNREACHABLE_PATTERN,tokenTypes:[o,c]})}})}),t}r(DV,"findUnreachablePatterns");function qV(e,t){if(Gr(t)){let n=t.exec(e);return n!==null&&n.index===0}else{if(sr(t))return t(e,0,[],{});if(X(t,"exec"))return t.exec(e,0,[],{});if(typeof t=="string")return t===e;throw Error("non exhaustive match")}}r(qV,"testTokenType");function BV(e){return An([".","\\","[","]","|","^","$","(",")","?","*","+","{"],n=>e.source.indexOf(n)!==-1)===void 0}r(BV,"noMetaChar");function yv(e){let t=e.ignoreCase?"i":"";return new RegExp(`^(?:${e.source})`,t)}r(yv,"addStartOfInput");function _v(e){let t=e.ignoreCase?"iy":"y";return new RegExp(`${e.source}`,t)}r(_v,"addStickyFlag");function xv(e,t,n){let o=[];return X(e,ia)||o.push({message:"A MultiMode Lexer cannot be initialized without a <"+ia+`> property in its definition
`,type:Je.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),X(e,qu)||o.push({message:"A MultiMode Lexer cannot be initialized without a <"+qu+`> property in its definition
`,type:Je.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),X(e,qu)&&X(e,ia)&&!X(e.modes,e.defaultMode)&&o.push({message:`A MultiMode Lexer cannot be initialized with a ${ia}: <${e.defaultMode}>which does not exist
`,type:Je.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),X(e,qu)&&Q(e.modes,(i,a)=>{Q(i,(s,c)=>{if(er(s))o.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${a}> at index: <${c}>
`,type:Je.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(X(s,"LONGER_ALT")){let u=Y(s.LONGER_ALT)?s.LONGER_ALT:[s.LONGER_ALT];Q(u,p=>{!er(p)&&!Ke(i,p)&&o.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${p.name}> on token <${s.name}> outside of mode <${a}>
`,type:Je.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),o}r(xv,"performRuntimeChecks");function Av(e,t,n){let o=[],i=!1,a=Rn(Lt(Le(e.modes))),s=bo(a,u=>u[ri]===nt.NA),c=Ov(n);return t&&Q(s,u=>{let p=Cv(u,c);if(p!==!1){let S={message:jV(u,p),type:p.issue,tokenType:u};o.push(S)}else X(u,"LINE_BREAKS")?u.LINE_BREAKS===!0&&(i=!0):Du(c,u.PATTERN)&&(i=!0)}),t&&!i&&o.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:Je.NO_LINE_BREAKS_FLAGS}),o}r(Av,"performWarningRuntimeChecks");function kv(e){let t={},n=ke(e);return Q(n,o=>{let i=e[o];if(Y(i))t[o]=[];else throw Error("non exhaustive match")}),t}r(kv,"cloneEmptyGroups");function vv(e){let t=e.PATTERN;if(Gr(t))return!1;if(sr(t))return!0;if(X(t,"exec"))return!0;if(Nt(t))return!1;throw Error("non exhaustive match")}r(vv,"isCustomPattern");function GV(e){return Nt(e)&&e.length===1?e.charCodeAt(0):!1}r(GV,"isShortPattern");var Uv={test:r(function(e){let t=e.length;for(let n=this.lastIndex;n<t;n++){let o=e.charCodeAt(n);if(o===10)return this.lastIndex=n+1,!0;if(o===13)return e.charCodeAt(n+1)===10?this.lastIndex=n+2:this.lastIndex=n+1,!0}return!1},"test"),lastIndex:0};function Cv(e,t){if(X(e,"LINE_BREAKS"))return!1;if(Gr(e.PATTERN)){try{Du(t,e.PATTERN)}catch(n){return{issue:Je.IDENTIFY_TERMINATOR,errMsg:n.message}}return!1}else{if(Nt(e.PATTERN))return!1;if(vv(e))return{issue:Je.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}r(Cv,"checkLineBreaksIssues");function jV(e,t){if(t.issue===Je.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${e.name}> Token Type
	 Root cause: ${t.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(t.issue===Je.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${e.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}r(jV,"buildLineBreakIssueMessage");function Ov(e){return J(e,n=>Nt(n)?n.charCodeAt(0):n)}r(Ov,"getCharCodes");function lS(e,t,n){e[t]===void 0?e[t]=[n]:e[t].push(n)}r(lS,"addToMapOfArrays");var oa=256,Bu=[];function kn(e){return e<oa?e:Bu[e]}r(kn,"charCodeToOptimizedIndex");function VV(){if(de(Bu)){Bu=new Array(65536);for(let e=0;e<65536;e++)Bu[e]=e>255?255+~~(e/255):e}}r(VV,"initCharCodeToOptimizedIndexMap");function Bn(e,t){let n=e.tokenTypeIdx;return n===t.tokenTypeIdx?!0:t.isParent===!0&&t.categoryMatchesMap[n]===!0}r(Bn,"tokenStructuredMatcher");function aa(e,t){return e.tokenTypeIdx===t.tokenTypeIdx}r(aa,"tokenStructuredMatcherNoCategories");var Lv=1,Mv={};function Gn(e){let t=WV(e);zV(t),YV(t),HV(t),Q(t,n=>{n.isParent=n.categoryMatches.length>0})}r(Gn,"augmentTokenTypes");function WV(e){let t=De(e),n=e,o=!0;for(;o;){n=Rn(Lt(J(n,a=>a.CATEGORIES)));let i=_o(n,t);t=t.concat(i),de(i)?o=!1:n=i}return t}r(WV,"expandCategories");function zV(e){Q(e,t=>{dS(t)||(Mv[Lv]=t,t.tokenTypeIdx=Lv++),Nv(t)&&!Y(t.CATEGORIES)&&(t.CATEGORIES=[t.CATEGORIES]),Nv(t)||(t.CATEGORIES=[]),KV(t)||(t.categoryMatches=[]),JV(t)||(t.categoryMatchesMap={})})}r(zV,"assignTokenDefaultProps");function HV(e){Q(e,t=>{t.categoryMatches=[],Q(t.categoryMatchesMap,(n,o)=>{t.categoryMatches.push(Mv[o].tokenTypeIdx)})})}r(HV,"assignCategoriesTokensProp");function YV(e){Q(e,t=>{wv([],t)})}r(YV,"assignCategoriesMapProp");function wv(e,t){Q(e,n=>{t.categoryMatchesMap[n.tokenTypeIdx]=!0}),Q(t.CATEGORIES,n=>{let o=e.concat(t);Ke(o,n)||wv(o,n)})}r(wv,"singleAssignCategoriesToksMap");function dS(e){return X(e,"tokenTypeIdx")}r(dS,"hasShortKeyProperty");function Nv(e){return X(e,"CATEGORIES")}r(Nv,"hasCategoriesProperty");function KV(e){return X(e,"categoryMatches")}r(KV,"hasExtendingTokensTypesProperty");function JV(e){return X(e,"categoryMatchesMap")}r(JV,"hasExtendingTokensTypesMapProperty");function Fv(e){return X(e,"tokenTypeIdx")}r(Fv,"isTokenType");var fS={buildUnableToPopLexerModeMessage(e){return`Unable to pop Lexer Mode after encountering Token ->${e.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(e,t,n,o,i){return`unexpected character: ->${e.charAt(t)}<- at offset: ${t}, skipped ${n} characters.`}};var Je;(function(e){e[e.MISSING_PATTERN=0]="MISSING_PATTERN",e[e.INVALID_PATTERN=1]="INVALID_PATTERN",e[e.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",e[e.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",e[e.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",e[e.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",e[e.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",e[e.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",e[e.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",e[e.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",e[e.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",e[e.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",e[e.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",e[e.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",e[e.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",e[e.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",e[e.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",e[e.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(Je||(Je={}));var Vs={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:fS,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(Vs);var nt=class{static{r(this,"Lexer")}constructor(t,n=Vs){if(this.lexerDefinition=t,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(i,a)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;let s=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${s}--> <${i}>`);let{time:c,value:u}=Is(a),p=c>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&p(`${s}<-- <${i}> time: ${c}ms`),this.traceInitIndent--,u}else return a()},typeof n=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=Ht({},Vs,n);let o=this.config.traceInitPerf;o===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof o=="number"&&(this.traceInitMaxIdent=o,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let i,a=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===Vs.lineTerminatorsPattern)this.config.lineTerminatorsPattern=Uv;else if(this.config.lineTerminatorCharacters===Vs.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(n.safeMode&&n.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),Y(t)?i={modes:{defaultMode:De(t)},defaultMode:ia}:(a=!1,i=De(t))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(xv(i,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(Av(i,this.trackStartLines,this.config.lineTerminatorCharacters))})),i.modes=i.modes?i.modes:{},Q(i.modes,(c,u)=>{i.modes[u]=bo(c,p=>er(p))});let s=ke(i.modes);if(Q(i.modes,(c,u)=>{this.TRACE_INIT(`Mode: <${u}> processing`,()=>{if(this.modes.push(u),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(Rv(c,s))}),de(this.lexerDefinitionErrors)){Gn(c);let p;this.TRACE_INIT("analyzeTokenTypes",()=>{p=bv(c,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:n.positionTracking,ensureOptimizations:n.ensureOptimizations,safeMode:n.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[u]=p.patternIdxToConfig,this.charCodeToPatternIdxToConfig[u]=p.charCodeToPatternIdxToConfig,this.emptyGroups=Ht({},this.emptyGroups,p.emptyGroups),this.hasCustom=p.hasCustom||this.hasCustom,this.canModeBeOptimized[u]=p.canBeOptimized}})}),this.defaultMode=i.defaultMode,!de(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){let u=J(this.lexerDefinitionErrors,p=>p.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+u)}Q(this.lexerDefinitionWarning,c=>{Fs(c.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(uS?(this.chopInput=qr,this.match=this.matchWithTest):(this.updateLastIndex=rt,this.match=this.matchWithExec),a&&(this.handleModes=rt),this.trackStartLines===!1&&(this.computeNewColumn=qr),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=rt),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{let c=Ct(this.canModeBeOptimized,(u,p,g)=>(p===!1&&u.push(g),u),[]);if(n.ensureOptimizations&&!de(c))throw Error(`Lexer Modes: < ${c.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{gv()}),this.TRACE_INIT("toFastProperties",()=>{Ps(this)})})}tokenize(t,n=this.defaultMode){if(!de(this.lexerDefinitionErrors)){let i=J(this.lexerDefinitionErrors,a=>a.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(t,n)}tokenizeInternal(t,n){let o,i,a,s,c,u,p,g,S,A,O,B,P,z,q,_,E=t,w=E.length,V=0,le=0,we=this.hasCustom?0:Math.floor(t.length/10),st=new Array(we),zr=[],fr=this.trackStartLines?1:void 0,Gt=this.trackStartLines?1:void 0,_t=kv(this.emptyGroups),zn=this.trackStartLines,an=this.config.lineTerminatorsPattern,Un=0,Lr=[],sn=[],cn=[],ln=[];Object.freeze(ln);let ar;function Cn(){return Lr}r(Cn,"getPossiblePatternsSlow");function un(ht){let Vt=kn(ht),Hr=sn[Vt];return Hr===void 0?ln:Hr}r(un,"getPossiblePatternsOptimized");let ai=r(ht=>{if(cn.length===1&&ht.tokenType.PUSH_MODE===void 0){let Vt=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(ht);zr.push({offset:ht.startOffset,line:ht.startLine,column:ht.startColumn,length:ht.image.length,message:Vt})}else{cn.pop();let Vt=xn(cn);Lr=this.patternIdxToConfig[Vt],sn=this.charCodeToPatternIdxToConfig[Vt],Un=Lr.length;let Hr=this.canModeBeOptimized[Vt]&&this.config.safeMode===!1;sn&&Hr?ar=un:ar=Cn}},"pop_mode");function Hn(ht){cn.push(ht),sn=this.charCodeToPatternIdxToConfig[ht],Lr=this.patternIdxToConfig[ht],Un=Lr.length,Un=Lr.length;let Vt=this.canModeBeOptimized[ht]&&this.config.safeMode===!1;sn&&Vt?ar=un:ar=Cn}r(Hn,"push_mode"),Hn.call(this,n);let jt,Bo=this.config.recoveryEnabled;for(;V<w;){u=null;let ht=E.charCodeAt(V),Vt=ar(ht),Hr=Vt.length;for(o=0;o<Hr;o++){jt=Vt[o];let Ft=jt.pattern;p=null;let Kt=jt.short;if(Kt!==!1?ht===Kt&&(u=Ft):jt.isCustom===!0?(_=Ft.exec(E,V,st,_t),_!==null?(u=_[0],_.payload!==void 0&&(p=_.payload)):u=null):(this.updateLastIndex(Ft,V),u=this.match(Ft,t,V)),u!==null){if(c=jt.longerAlt,c!==void 0){let bt=c.length;for(a=0;a<bt;a++){let pr=Lr[c[a]],Nr=pr.pattern;if(g=null,pr.isCustom===!0?(_=Nr.exec(E,V,st,_t),_!==null?(s=_[0],_.payload!==void 0&&(g=_.payload)):s=null):(this.updateLastIndex(Nr,V),s=this.match(Nr,t,V)),s&&s.length>u.length){u=s,p=g,jt=pr;break}}}break}}if(u!==null){if(S=u.length,A=jt.group,A!==void 0&&(O=jt.tokenTypeIdx,B=this.createTokenInstance(u,V,O,jt.tokenType,fr,Gt,S),this.handlePayload(B,p),A===!1?le=this.addToken(st,le,B):_t[A].push(B)),t=this.chopInput(t,S),V=V+S,Gt=this.computeNewColumn(Gt,S),zn===!0&&jt.canLineTerminator===!0){let Ft=0,Kt,bt;an.lastIndex=0;do Kt=an.test(u),Kt===!0&&(bt=an.lastIndex-1,Ft++);while(Kt===!0);Ft!==0&&(fr=fr+Ft,Gt=S-bt,this.updateTokenEndLineColumnLocation(B,A,bt,Ft,fr,Gt,S))}this.handleModes(jt,ai,Hn,B)}else{let Ft=V,Kt=fr,bt=Gt,pr=Bo===!1;for(;pr===!1&&V<w;)for(t=this.chopInput(t,1),V++,i=0;i<Un;i++){let Nr=Lr[i],Yr=Nr.pattern,Go=Nr.short;if(Go!==!1?E.charCodeAt(V)===Go&&(pr=!0):Nr.isCustom===!0?pr=Yr.exec(E,V,st,_t)!==null:(this.updateLastIndex(Yr,V),pr=Yr.exec(t)!==null),pr===!0)break}if(P=V-Ft,Gt=this.computeNewColumn(Gt,P),q=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(E,Ft,P,Kt,bt),zr.push({offset:Ft,line:Kt,column:bt,length:P,message:q}),Bo===!1)break}}return this.hasCustom||(st.length=le),{tokens:st,groups:_t,errors:zr}}handleModes(t,n,o,i){if(t.pop===!0){let a=t.push;n(i),a!==void 0&&o.call(this,a)}else t.push!==void 0&&o.call(this,t.push)}chopInput(t,n){return t.substring(n)}updateLastIndex(t,n){t.lastIndex=n}updateTokenEndLineColumnLocation(t,n,o,i,a,s,c){let u,p;n!==void 0&&(u=o===c-1,p=u?-1:0,i===1&&u===!0||(t.endLine=a+p,t.endColumn=s-1+-p))}computeNewColumn(t,n){return t+n}createOffsetOnlyToken(t,n,o,i){return{image:t,startOffset:n,tokenTypeIdx:o,tokenType:i}}createStartOnlyToken(t,n,o,i,a,s){return{image:t,startOffset:n,startLine:a,startColumn:s,tokenTypeIdx:o,tokenType:i}}createFullToken(t,n,o,i,a,s,c){return{image:t,startOffset:n,endOffset:n+c-1,startLine:a,endLine:a,startColumn:s,endColumn:s+c-1,tokenTypeIdx:o,tokenType:i}}addTokenUsingPush(t,n,o){return t.push(o),n}addTokenUsingMemberAccess(t,n,o){return t[n]=o,n++,n}handlePayloadNoCustom(t,n){}handlePayloadWithCustom(t,n){n!==null&&(t.payload=n)}matchWithTest(t,n,o){return t.test(n)===!0?n.substring(o,t.lastIndex):null}matchWithExec(t,n){let o=t.exec(n);return o!==null?o[0]:null}};nt.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";nt.NA=/NOT_APPLICABLE/;function ni(e){return pS(e)?e.LABEL:e.name}r(ni,"tokenLabel");function pS(e){return Nt(e.LABEL)&&e.LABEL!==""}r(pS,"hasTokenLabel");var QV="parent",Iv="categories",Pv="label",Dv="group",qv="push_mode",Bv="pop_mode",Gv="longer_alt",jv="line_breaks",Vv="start_chars_hint";function jn(e){return XV(e)}r(jn,"createToken");function XV(e){let t=e.pattern,n={};if(n.name=e.name,er(t)||(n.PATTERN=t),X(e,QV))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return X(e,Iv)&&(n.CATEGORIES=e[Iv]),Gn([n]),X(e,Pv)&&(n.LABEL=e[Pv]),X(e,Dv)&&(n.GROUP=e[Dv]),X(e,Bv)&&(n.POP_MODE=e[Bv]),X(e,qv)&&(n.PUSH_MODE=e[qv]),X(e,Gv)&&(n.LONGER_ALT=e[Gv]),X(e,jv)&&(n.LINE_BREAKS=e[jv]),X(e,Vv)&&(n.START_CHARS_HINT=e[Vv]),n}r(XV,"createTokenInternal");var tn=jn({name:"EOF",pattern:nt.NA});Gn([tn]);function oi(e,t,n,o,i,a,s,c){return{image:t,startOffset:n,endOffset:o,startLine:i,endLine:a,startColumn:s,endColumn:c,tokenTypeIdx:e.tokenTypeIdx,tokenType:e}}r(oi,"createTokenInstance");function mS(e,t){return Bn(e,t)}r(mS,"tokenMatcher");var Vn={buildMismatchTokenMessage({expected:e,actual:t,previous:n,ruleName:o}){return`Expecting ${pS(e)?`--> ${ni(e)} <--`:`token of type --> ${e.name} <--`} but found --> '${t.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:e,ruleName:t}){return"Redundant input, expecting EOF but found: "+e.image},buildNoViableAltMessage({expectedPathsPerAlt:e,actual:t,previous:n,customUserDescription:o,ruleName:i}){let a="Expecting: ",c=`
but found: '`+Ut(t).image+"'";if(o)return a+o+c;{let u=Ct(e,(A,O)=>A.concat(O),[]),p=J(u,A=>`[${J(A,O=>ni(O)).join(", ")}]`),S=`one of these possible Token sequences:
${J(p,(A,O)=>`  ${O+1}. ${A}`).join(`
`)}`;return a+S+c}},buildEarlyExitMessage({expectedIterationPaths:e,actual:t,customUserDescription:n,ruleName:o}){let i="Expecting: ",s=`
but found: '`+Ut(t).image+"'";if(n)return i+n+s;{let u=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${J(e,p=>`[${J(p,g=>ni(g)).join(",")}]`).join(" ,")}>`;return i+u+s}}};Object.freeze(Vn);var Wv={buildRuleNotFoundError(e,t){return"Invalid grammar, reference to a rule which is not defined: ->"+t.nonTerminalName+`<-
inside top level rule: ->`+e.name+"<-"}},rn={buildDuplicateFoundError(e,t){function n(g){return g instanceof Se?g.terminalType.name:g instanceof qe?g.nonTerminalName:""}r(n,"getExtraProductionArgument");let o=e.name,i=Ut(t),a=i.idx,s=br(i),c=n(i),u=a>0,p=`->${s}${u?a:""}<- ${c?`with argument: ->${c}<-`:""}
                  appears more than once (${t.length} times) in the top level rule: ->${o}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return p=p.replace(/[ \t]+/g," "),p=p.replace(/\s\s+/g,`
`),p},buildNamespaceConflictError(e){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${e.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(e){let t=J(e.prefixPath,i=>ni(i)).join(", "),n=e.alternation.idx===0?"":e.alternation.idx;return`Ambiguous alternatives: <${e.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${n}> inside <${e.topLevelRule.name}> Rule,
<${t}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(e){let t=J(e.prefixPath,i=>ni(i)).join(", "),n=e.alternation.idx===0?"":e.alternation.idx,o=`Ambiguous Alternatives Detected: <${e.ambiguityIndices.join(" ,")}> in <OR${n}> inside <${e.topLevelRule.name}> Rule,
<${t}> may appears as a prefix path in all these alternatives.
`;return o=o+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,o},buildEmptyRepetitionError(e){let t=br(e.repetition);return e.repetition.idx!==0&&(t+=e.repetition.idx),`The repetition <${t}> within Rule <${e.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(e){return"deprecated"},buildEmptyAlternationError(e){return`Ambiguous empty alternative: <${e.emptyChoiceIdx+1}> in <OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(e){return`An Alternation cannot have more than 256 alternatives:
<OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.
 has ${e.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(e){let t=e.topLevelRule.name,n=J(e.leftRecursionPath,a=>a.name),o=`${t} --> ${n.concat([t]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${t}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${o}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(e){return"deprecated"},buildDuplicateRuleNameError(e){let t;return e.topLevelRule instanceof lr?t=e.topLevelRule.name:t=e.topLevelRule,`Duplicate definition, rule: ->${t}<- is already defined in the grammar: ->${e.grammarName}<-`}};function zv(e,t){let n=new hS(e,t);return n.resolveRefs(),n.errors}r(zv,"resolveGrammar");var hS=class extends ur{static{r(this,"GastRefResolverVisitor")}constructor(t,n){super(),this.nameToTopRule=t,this.errMsgProvider=n,this.errors=[]}resolveRefs(){Q(Le(this.nameToTopRule),t=>{this.currTopLevel=t,t.accept(this)})}visitNonTerminal(t){let n=this.nameToTopRule[t.nonTerminalName];if(n)t.referencedRule=n;else{let o=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,t);this.errors.push({message:o,type:Mt.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:t.nonTerminalName})}}};var gS=class extends qn{static{r(this,"AbstractNextPossibleTokensWalker")}constructor(t,n){super(),this.topProd=t,this.path=n,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=De(this.path.ruleStack).reverse(),this.occurrenceStack=De(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(t,n=[]){this.found||super.walk(t,n)}walkProdRef(t,n,o){if(t.referencedRule.name===this.nextProductionName&&t.idx===this.nextProductionOccurrence){let i=n.concat(o);this.updateExpectedNext(),this.walk(t.referencedRule,i)}}updateExpectedNext(){de(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}},Gu=class extends gS{static{r(this,"NextAfterTokenWalker")}constructor(t,n){super(t,n),this.path=n,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(t,n,o){if(this.isAtEndOfPath&&t.terminalType.name===this.nextTerminalName&&t.idx===this.nextTerminalOccurrence&&!this.found){let i=n.concat(o),a=new Be({definition:i});this.possibleTokTypes=ei(a),this.found=!0}}},sa=class extends qn{static{r(this,"AbstractNextTerminalAfterProductionWalker")}constructor(t,n){super(),this.topRule=t,this.occurrence=n,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}},ju=class extends sa{static{r(this,"NextTerminalAfterManyWalker")}walkMany(t,n,o){if(t.idx===this.occurrence){let i=Ut(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof Se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkMany(t,n,o)}},Ws=class extends sa{static{r(this,"NextTerminalAfterManySepWalker")}walkManySep(t,n,o){if(t.idx===this.occurrence){let i=Ut(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof Se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkManySep(t,n,o)}},Vu=class extends sa{static{r(this,"NextTerminalAfterAtLeastOneWalker")}walkAtLeastOne(t,n,o){if(t.idx===this.occurrence){let i=Ut(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof Se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOne(t,n,o)}},zs=class extends sa{static{r(this,"NextTerminalAfterAtLeastOneSepWalker")}walkAtLeastOneSep(t,n,o){if(t.idx===this.occurrence){let i=Ut(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof Se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOneSep(t,n,o)}};function Wu(e,t,n=[]){n=De(n);let o=[],i=0;function a(c){return c.concat(Tt(e,i+1))}r(a,"remainingPathWith");function s(c){let u=Wu(a(c),t,n);return o.concat(u)}for(r(s,"getAlternativesForProd");n.length<t&&i<e.length;){let c=e[i];if(c instanceof Be)return s(c.definition);if(c instanceof qe)return s(c.definition);if(c instanceof We)o=s(c.definition);else if(c instanceof Et){let u=c.definition.concat([new Ue({definition:c.definition})]);return s(u)}else if(c instanceof St){let u=[new Be({definition:c.definition}),new Ue({definition:[new Se({terminalType:c.separator})].concat(c.definition)})];return s(u)}else if(c instanceof dt){let u=c.definition.concat([new Ue({definition:[new Se({terminalType:c.separator})].concat(c.definition)})]);o=s(u)}else if(c instanceof Ue){let u=c.definition.concat([new Ue({definition:c.definition})]);o=s(u)}else{if(c instanceof ft)return Q(c.definition,u=>{de(u.definition)===!1&&(o=s(u.definition))}),o;if(c instanceof Se)n.push(c.terminalType);else throw Error("non exhaustive match")}i++}return o.push({partialPath:n,suffixDef:Tt(e,i)}),o}r(Wu,"possiblePathsFrom");function zu(e,t,n,o){let i="EXIT_NONE_TERMINAL",a=[i],s="EXIT_ALTERNATIVE",c=!1,u=t.length,p=u-o-1,g=[],S=[];for(S.push({idx:-1,def:e,ruleStack:[],occurrenceStack:[]});!de(S);){let A=S.pop();if(A===s){c&&xn(S).idx<=p&&S.pop();continue}let O=A.def,B=A.idx,P=A.ruleStack,z=A.occurrenceStack;if(de(O))continue;let q=O[0];if(q===i){let _={idx:B,def:Tt(O),ruleStack:Dn(P),occurrenceStack:Dn(z)};S.push(_)}else if(q instanceof Se)if(B<u-1){let _=B+1,E=t[_];if(n(E,q.terminalType)){let w={idx:_,def:Tt(O),ruleStack:P,occurrenceStack:z};S.push(w)}}else if(B===u-1)g.push({nextTokenType:q.terminalType,nextTokenOccurrence:q.idx,ruleStack:P,occurrenceStack:z}),c=!0;else throw Error("non exhaustive match");else if(q instanceof qe){let _=De(P);_.push(q.nonTerminalName);let E=De(z);E.push(q.idx);let w={idx:B,def:q.definition.concat(a,Tt(O)),ruleStack:_,occurrenceStack:E};S.push(w)}else if(q instanceof We){let _={idx:B,def:Tt(O),ruleStack:P,occurrenceStack:z};S.push(_),S.push(s);let E={idx:B,def:q.definition.concat(Tt(O)),ruleStack:P,occurrenceStack:z};S.push(E)}else if(q instanceof Et){let _=new Ue({definition:q.definition,idx:q.idx}),E=q.definition.concat([_],Tt(O)),w={idx:B,def:E,ruleStack:P,occurrenceStack:z};S.push(w)}else if(q instanceof St){let _=new Se({terminalType:q.separator}),E=new Ue({definition:[_].concat(q.definition),idx:q.idx}),w=q.definition.concat([E],Tt(O)),V={idx:B,def:w,ruleStack:P,occurrenceStack:z};S.push(V)}else if(q instanceof dt){let _={idx:B,def:Tt(O),ruleStack:P,occurrenceStack:z};S.push(_),S.push(s);let E=new Se({terminalType:q.separator}),w=new Ue({definition:[E].concat(q.definition),idx:q.idx}),V=q.definition.concat([w],Tt(O)),le={idx:B,def:V,ruleStack:P,occurrenceStack:z};S.push(le)}else if(q instanceof Ue){let _={idx:B,def:Tt(O),ruleStack:P,occurrenceStack:z};S.push(_),S.push(s);let E=new Ue({definition:q.definition,idx:q.idx}),w=q.definition.concat([E],Tt(O)),V={idx:B,def:w,ruleStack:P,occurrenceStack:z};S.push(V)}else if(q instanceof ft)for(let _=q.definition.length-1;_>=0;_--){let E=q.definition[_],w={idx:B,def:E.definition.concat(Tt(O)),ruleStack:P,occurrenceStack:z};S.push(w),S.push(s)}else if(q instanceof Be)S.push({idx:B,def:q.definition.concat(Tt(O)),ruleStack:P,occurrenceStack:z});else if(q instanceof lr)S.push(ZV(q,B,P,z));else throw Error("non exhaustive match")}return g}r(zu,"nextPossibleTokensAfter");function ZV(e,t,n,o){let i=De(n);i.push(e.name);let a=De(o);return a.push(1),{idx:t,def:e.definition,ruleStack:i,occurrenceStack:a}}r(ZV,"expandTopLevelRule");var ot;(function(e){e[e.OPTION=0]="OPTION",e[e.REPETITION=1]="REPETITION",e[e.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",e[e.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",e[e.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",e[e.ALTERNATION=5]="ALTERNATION"})(ot||(ot={}));function Yu(e){if(e instanceof We||e==="Option")return ot.OPTION;if(e instanceof Ue||e==="Repetition")return ot.REPETITION;if(e instanceof Et||e==="RepetitionMandatory")return ot.REPETITION_MANDATORY;if(e instanceof St||e==="RepetitionMandatoryWithSeparator")return ot.REPETITION_MANDATORY_WITH_SEPARATOR;if(e instanceof dt||e==="RepetitionWithSeparator")return ot.REPETITION_WITH_SEPARATOR;if(e instanceof ft||e==="Alternation")return ot.ALTERNATION;throw Error("non exhaustive match")}r(Yu,"getProdType");function Yv(e,t,n,o,i,a){let s=Hs(e,t,n),c=$v(s)?aa:Bn;return a(s,o,c,i)}r(Yv,"buildLookaheadFuncForOr");function Kv(e,t,n,o,i,a){let s=Ys(e,t,i,n),c=$v(s)?aa:Bn;return a(s[0],c,o)}r(Kv,"buildLookaheadFuncForOptionalProd");function Jv(e,t,n,o){let i=e.length,a=qt(e,s=>qt(s,c=>c.length===1));if(t)return function(s){let c=J(s,u=>u.GATE);for(let u=0;u<i;u++){let p=e[u],g=p.length,S=c[u];if(!(S!==void 0&&S.call(this)===!1))e:for(let A=0;A<g;A++){let O=p[A],B=O.length;for(let P=0;P<B;P++){let z=this.LA(P+1);if(n(z,O[P])===!1)continue e}return u}}};if(a&&!o){let s=J(e,u=>Lt(u)),c=Ct(s,(u,p,g)=>(Q(p,S=>{X(u,S.tokenTypeIdx)||(u[S.tokenTypeIdx]=g),Q(S.categoryMatches,A=>{X(u,A)||(u[A]=g)})}),u),{});return function(){let u=this.LA(1);return c[u.tokenTypeIdx]}}else return function(){for(let s=0;s<i;s++){let c=e[s],u=c.length;e:for(let p=0;p<u;p++){let g=c[p],S=g.length;for(let A=0;A<S;A++){let O=this.LA(A+1);if(n(O,g[A])===!1)continue e}return s}}}}r(Jv,"buildAlternativesLookAheadFunc");function Qv(e,t,n){let o=qt(e,a=>a.length===1),i=e.length;if(o&&!n){let a=Lt(e);if(a.length===1&&de(a[0].categoryMatches)){let c=a[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===c}}else{let s=Ct(a,(c,u,p)=>(c[u.tokenTypeIdx]=!0,Q(u.categoryMatches,g=>{c[g]=!0}),c),[]);return function(){let c=this.LA(1);return s[c.tokenTypeIdx]===!0}}}else return function(){e:for(let a=0;a<i;a++){let s=e[a],c=s.length;for(let u=0;u<c;u++){let p=this.LA(u+1);if(t(p,s[u])===!1)continue e}return!0}return!1}}r(Qv,"buildSingleAlternativeLookaheadFunction");var ES=class extends qn{static{r(this,"RestDefinitionFinderWalker")}constructor(t,n,o){super(),this.topProd=t,this.targetOccurrence=n,this.targetProdType=o}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(t,n,o,i){return t.idx===this.targetOccurrence&&this.targetProdType===n?(this.restDef=o.concat(i),!0):!1}walkOption(t,n,o){this.checkIsTarget(t,ot.OPTION,n,o)||super.walkOption(t,n,o)}walkAtLeastOne(t,n,o){this.checkIsTarget(t,ot.REPETITION_MANDATORY,n,o)||super.walkOption(t,n,o)}walkAtLeastOneSep(t,n,o){this.checkIsTarget(t,ot.REPETITION_MANDATORY_WITH_SEPARATOR,n,o)||super.walkOption(t,n,o)}walkMany(t,n,o){this.checkIsTarget(t,ot.REPETITION,n,o)||super.walkOption(t,n,o)}walkManySep(t,n,o){this.checkIsTarget(t,ot.REPETITION_WITH_SEPARATOR,n,o)||super.walkOption(t,n,o)}},Hu=class extends ur{static{r(this,"InsideDefinitionFinderVisitor")}constructor(t,n,o){super(),this.targetOccurrence=t,this.targetProdType=n,this.targetRef=o,this.result=[]}checkIsTarget(t,n){t.idx===this.targetOccurrence&&this.targetProdType===n&&(this.targetRef===void 0||t===this.targetRef)&&(this.result=t.definition)}visitOption(t){this.checkIsTarget(t,ot.OPTION)}visitRepetition(t){this.checkIsTarget(t,ot.REPETITION)}visitRepetitionMandatory(t){this.checkIsTarget(t,ot.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(t){this.checkIsTarget(t,ot.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(t){this.checkIsTarget(t,ot.REPETITION_WITH_SEPARATOR)}visitAlternation(t){this.checkIsTarget(t,ot.ALTERNATION)}};function Hv(e){let t=new Array(e);for(let n=0;n<e;n++)t[n]=[];return t}r(Hv,"initializeArrayOfArrays");function TS(e){let t=[""];for(let n=0;n<e.length;n++){let o=e[n],i=[];for(let a=0;a<t.length;a++){let s=t[a];i.push(s+"_"+o.tokenTypeIdx);for(let c=0;c<o.categoryMatches.length;c++){let u="_"+o.categoryMatches[c];i.push(s+u)}}t=i}return t}r(TS,"pathToHashKeys");function $V(e,t,n){for(let o=0;o<e.length;o++){if(o===n)continue;let i=e[o];for(let a=0;a<t.length;a++){let s=t[a];if(i[s]===!0)return!1}}return!0}r($V,"isUniquePrefixHash");function Xv(e,t){let n=J(e,s=>Wu([s],1)),o=Hv(n.length),i=J(n,s=>{let c={};return Q(s,u=>{let p=TS(u.partialPath);Q(p,g=>{c[g]=!0})}),c}),a=n;for(let s=1;s<=t;s++){let c=a;a=Hv(c.length);for(let u=0;u<c.length;u++){let p=c[u];for(let g=0;g<p.length;g++){let S=p[g].partialPath,A=p[g].suffixDef,O=TS(S);if($V(i,O,u)||de(A)||S.length===t){let P=o[u];if(Ku(P,S)===!1){P.push(S);for(let z=0;z<O.length;z++){let q=O[z];i[u][q]=!0}}}else{let P=Wu(A,s+1,S);a[u]=a[u].concat(P),Q(P,z=>{let q=TS(z.partialPath);Q(q,_=>{i[u][_]=!0})})}}}}return o}r(Xv,"lookAheadSequenceFromAlternatives");function Hs(e,t,n,o){let i=new Hu(e,ot.ALTERNATION,o);return t.accept(i),Xv(i.result,n)}r(Hs,"getLookaheadPathsForOr");function Ys(e,t,n,o){let i=new Hu(e,n);t.accept(i);let a=i.result,c=new ES(t,e,n).startWalking(),u=new Be({definition:a}),p=new Be({definition:c});return Xv([u,p],o)}r(Ys,"getLookaheadPathsForOptionalProd");function Ku(e,t){e:for(let n=0;n<e.length;n++){let o=e[n];if(o.length===t.length){for(let i=0;i<o.length;i++){let a=t[i],s=o[i];if((a===s||s.categoryMatchesMap[a.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}r(Ku,"containsPath");function Zv(e,t){return e.length<t.length&&qt(e,(n,o)=>{let i=t[o];return n===i||i.categoryMatchesMap[n.tokenTypeIdx]})}r(Zv,"isStrictPrefixOfPath");function $v(e){return qt(e,t=>qt(t,n=>qt(n,o=>de(o.categoryMatches))))}r($v,"areTokenCategoriesNotUsed");function eU(e){let t=e.lookaheadStrategy.validate({rules:e.rules,tokenTypes:e.tokenTypes,grammarName:e.grammarName});return J(t,n=>Object.assign({type:Mt.CUSTOM_LOOKAHEAD_VALIDATION},n))}r(eU,"validateLookahead");function tU(e,t,n,o){let i=cr(e,u=>eW(u,n)),a=aW(e,t,n),s=cr(e,u=>nW(u,n)),c=cr(e,u=>rW(u,e,o,n));return i.concat(a,s,c)}r(tU,"validateGrammar");function eW(e,t){let n=new SS;e.accept(n);let o=n.allProductions,i=ZE(o,tW),a=_r(i,c=>c.length>1);return J(Le(a),c=>{let u=Ut(c),p=t.buildDuplicateFoundError(e,c),g=br(u),S={message:p,type:Mt.DUPLICATE_PRODUCTIONS,ruleName:e.name,dslName:g,occurrence:u.idx},A=rU(u);return A&&(S.parameter=A),S})}r(eW,"validateDuplicateProductions");function tW(e){return`${br(e)}_#_${e.idx}_#_${rU(e)}`}r(tW,"identifyProductionForDuplicates");function rU(e){return e instanceof Se?e.terminalType.name:e instanceof qe?e.nonTerminalName:""}r(rU,"getExtraProductionArgument");var SS=class extends ur{static{r(this,"OccurrenceValidationCollector")}constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(t){this.allProductions.push(t)}visitOption(t){this.allProductions.push(t)}visitRepetitionWithSeparator(t){this.allProductions.push(t)}visitRepetitionMandatory(t){this.allProductions.push(t)}visitRepetitionMandatoryWithSeparator(t){this.allProductions.push(t)}visitRepetition(t){this.allProductions.push(t)}visitAlternation(t){this.allProductions.push(t)}visitTerminal(t){this.allProductions.push(t)}};function rW(e,t,n,o){let i=[];if(Ct(t,(s,c)=>c.name===e.name?s+1:s,0)>1){let s=o.buildDuplicateRuleNameError({topLevelRule:e,grammarName:n});i.push({message:s,type:Mt.DUPLICATE_RULE_NAME,ruleName:e.name})}return i}r(rW,"validateRuleDoesNotAlreadyExist");function nU(e,t,n){let o=[],i;return Ke(t,e)||(i=`Invalid rule override, rule: ->${e}<- cannot be overridden in the grammar: ->${n}<-as it is not defined in any of the super grammars `,o.push({message:i,type:Mt.INVALID_RULE_OVERRIDE,ruleName:e})),o}r(nU,"validateRuleIsOverridden");function _S(e,t,n,o=[]){let i=[],a=Ju(t.definition);if(de(a))return[];{let s=e.name;Ke(a,e)&&i.push({message:n.buildLeftRecursionError({topLevelRule:e,leftRecursionPath:o}),type:Mt.LEFT_RECURSION,ruleName:s});let u=_o(a,o.concat([e])),p=cr(u,g=>{let S=De(o);return S.push(g),_S(e,g,n,S)});return i.concat(p)}}r(_S,"validateNoLeftRecursion");function Ju(e){let t=[];if(de(e))return t;let n=Ut(e);if(n instanceof qe)t.push(n.referencedRule);else if(n instanceof Be||n instanceof We||n instanceof Et||n instanceof St||n instanceof dt||n instanceof Ue)t=t.concat(Ju(n.definition));else if(n instanceof ft)t=Lt(J(n.definition,a=>Ju(a.definition)));else if(!(n instanceof Se))throw Error("non exhaustive match");let o=$o(n),i=e.length>1;if(o&&i){let a=Tt(e);return t.concat(Ju(a))}else return t}r(Ju,"getFirstNoneTerminal");var Ks=class extends ur{static{r(this,"OrCollector")}constructor(){super(...arguments),this.alternations=[]}visitAlternation(t){this.alternations.push(t)}};function oU(e,t){let n=new Ks;e.accept(n);let o=n.alternations;return cr(o,a=>{let s=Dn(a.definition);return cr(s,(c,u)=>{let p=zu([c],[],Bn,1);return de(p)?[{message:t.buildEmptyAlternationError({topLevelRule:e,alternation:a,emptyChoiceIdx:u}),type:Mt.NONE_LAST_EMPTY_ALT,ruleName:e.name,occurrence:a.idx,alternative:u+1}]:[]})})}r(oU,"validateEmptyOrAlternative");function iU(e,t,n){let o=new Ks;e.accept(o);let i=o.alternations;return i=bo(i,s=>s.ignoreAmbiguities===!0),cr(i,s=>{let c=s.idx,u=s.maxLookahead||t,p=Hs(c,e,u,s),g=oW(p,s,e,n),S=iW(p,s,e,n);return g.concat(S)})}r(iU,"validateAmbiguousAlternationAlternatives");var yS=class extends ur{static{r(this,"RepetitionCollector")}constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(t){this.allProductions.push(t)}visitRepetitionMandatory(t){this.allProductions.push(t)}visitRepetitionMandatoryWithSeparator(t){this.allProductions.push(t)}visitRepetition(t){this.allProductions.push(t)}};function nW(e,t){let n=new Ks;e.accept(n);let o=n.alternations;return cr(o,a=>a.definition.length>255?[{message:t.buildTooManyAlternativesError({topLevelRule:e,alternation:a}),type:Mt.TOO_MANY_ALTS,ruleName:e.name,occurrence:a.idx}]:[])}r(nW,"validateTooManyAlts");function aU(e,t,n){let o=[];return Q(e,i=>{let a=new yS;i.accept(a);let s=a.allProductions;Q(s,c=>{let u=Yu(c),p=c.maxLookahead||t,g=c.idx,A=Ys(g,i,u,p)[0];if(de(Lt(A))){let O=n.buildEmptyRepetitionError({topLevelRule:i,repetition:c});o.push({message:O,type:Mt.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),o}r(aU,"validateSomeNonEmptyLookaheadPath");function oW(e,t,n,o){let i=[],a=Ct(e,(c,u,p)=>(t.definition[p].ignoreAmbiguities===!0||Q(u,g=>{let S=[p];Q(e,(A,O)=>{p!==O&&Ku(A,g)&&t.definition[O].ignoreAmbiguities!==!0&&S.push(O)}),S.length>1&&!Ku(i,g)&&(i.push(g),c.push({alts:S,path:g}))}),c),[]);return J(a,c=>{let u=J(c.alts,g=>g+1);return{message:o.buildAlternationAmbiguityError({topLevelRule:n,alternation:t,ambiguityIndices:u,prefixPath:c.path}),type:Mt.AMBIGUOUS_ALTS,ruleName:n.name,occurrence:t.idx,alternatives:c.alts}})}r(oW,"checkAlternativesAmbiguities");function iW(e,t,n,o){let i=Ct(e,(s,c,u)=>{let p=J(c,g=>({idx:u,path:g}));return s.concat(p)},[]);return Rn(cr(i,s=>{if(t.definition[s.idx].ignoreAmbiguities===!0)return[];let u=s.idx,p=s.path,g=$t(i,A=>t.definition[A.idx].ignoreAmbiguities!==!0&&A.idx<u&&Zv(A.path,p));return J(g,A=>{let O=[A.idx+1,u+1],B=t.idx===0?"":t.idx;return{message:o.buildAlternationPrefixAmbiguityError({topLevelRule:n,alternation:t,ambiguityIndices:O,prefixPath:A.path}),type:Mt.AMBIGUOUS_PREFIX_ALTS,ruleName:n.name,occurrence:B,alternatives:O}})}))}r(iW,"checkPrefixAlternativesAmbiguities");function aW(e,t,n){let o=[],i=J(t,a=>a.name);return Q(e,a=>{let s=a.name;if(Ke(i,s)){let c=n.buildNamespaceConflictError(a);o.push({message:c,type:Mt.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:s})}}),o}r(aW,"checkTerminalAndNoneTerminalsNameSpace");function sU(e){let t=$i(e,{errMsgProvider:Wv}),n={};return Q(e.rules,o=>{n[o.name]=o}),zv(n,t.errMsgProvider)}r(sU,"resolveGrammar");function cU(e){return e=$i(e,{errMsgProvider:rn}),tU(e.rules,e.tokenTypes,e.errMsgProvider,e.grammarName)}r(cU,"validateGrammar");var lU="MismatchedTokenException",uU="NoViableAltException",dU="EarlyExitException",fU="NotAllInputParsedException",pU=[lU,uU,dU,fU];Object.freeze(pU);function Ao(e){return Ke(pU,e.name)}r(Ao,"isRecognitionException");var ca=class extends Error{static{r(this,"RecognitionException")}constructor(t,n){super(t),this.token=n,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},yt=class extends ca{static{r(this,"MismatchedTokenException")}constructor(t,n,o){super(t,n),this.previousToken=o,this.name=lU}},Js=class extends ca{static{r(this,"NoViableAltException")}constructor(t,n,o){super(t,n),this.previousToken=o,this.name=uU}},Qs=class extends ca{static{r(this,"NotAllInputParsedException")}constructor(t,n){super(t,n),this.name=fU}},Xs=class extends ca{static{r(this,"EarlyExitException")}constructor(t,n,o){super(t,n),this.previousToken=o,this.name=dU}};var bS={},xS="InRuleRecoveryException",RS=class extends Error{static{r(this,"InRuleRecoveryException")}constructor(t){super(t),this.name=xS}},Qu=class{static{r(this,"Recoverable")}initRecoverable(t){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=X(t,"recoveryEnabled")?t.recoveryEnabled:dr.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=sW)}getTokenToInsert(t){let n=oi(t,"",NaN,NaN,NaN,NaN,NaN,NaN);return n.isInsertedInRecovery=!0,n}canTokenTypeBeInsertedInRecovery(t){return!0}canTokenTypeBeDeletedInRecovery(t){return!0}tryInRepetitionRecovery(t,n,o,i){let a=this.findReSyncTokenType(),s=this.exportLexerState(),c=[],u=!1,p=this.LA(1),g=this.LA(1),S=r(()=>{let A=this.LA(0),O=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:p,previous:A,ruleName:this.getCurrRuleFullName()}),B=new yt(O,p,this.LA(0));B.resyncedTokens=Dn(c),this.SAVE_ERROR(B)},"generateErrorMessage");for(;!u;)if(this.tokenMatcher(g,i)){S();return}else if(o.call(this)){S(),t.apply(this,n);return}else this.tokenMatcher(g,a)?u=!0:(g=this.SKIP_TOKEN(),this.addToResyncTokens(g,c));this.importLexerState(s)}shouldInRepetitionRecoveryBeTried(t,n,o){return!(o===!1||this.tokenMatcher(this.LA(1),t)||this.isBackTracking()||this.canPerformInRuleRecovery(t,this.getFollowsForInRuleRecovery(t,n)))}getFollowsForInRuleRecovery(t,n){let o=this.getCurrentGrammarPath(t,n);return this.getNextPossibleTokenTypes(o)}tryInRuleRecovery(t,n){if(this.canRecoverWithSingleTokenInsertion(t,n))return this.getTokenToInsert(t);if(this.canRecoverWithSingleTokenDeletion(t)){let o=this.SKIP_TOKEN();return this.consumeToken(),o}throw new RS("sad sad panda")}canPerformInRuleRecovery(t,n){return this.canRecoverWithSingleTokenInsertion(t,n)||this.canRecoverWithSingleTokenDeletion(t)}canRecoverWithSingleTokenInsertion(t,n){if(!this.canTokenTypeBeInsertedInRecovery(t)||de(n))return!1;let o=this.LA(1);return An(n,a=>this.tokenMatcher(o,a))!==void 0}canRecoverWithSingleTokenDeletion(t){return this.canTokenTypeBeDeletedInRecovery(t)?this.tokenMatcher(this.LA(2),t):!1}isInCurrentRuleReSyncSet(t){let n=this.getCurrFollowKey(),o=this.getFollowSetFromFollowKey(n);return Ke(o,t)}findReSyncTokenType(){let t=this.flattenFollowSet(),n=this.LA(1),o=2;for(;;){let i=An(t,a=>mS(n,a));if(i!==void 0)return i;n=this.LA(o),o++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return bS;let t=this.getLastExplicitRuleShortName(),n=this.getLastExplicitRuleOccurrenceIndex(),o=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(t),idxInCallingRule:n,inRule:this.shortRuleNameToFullName(o)}}buildFullFollowKeyStack(){let t=this.RULE_STACK,n=this.RULE_OCCURRENCE_STACK;return J(t,(o,i)=>i===0?bS:{ruleName:this.shortRuleNameToFullName(o),idxInCallingRule:n[i],inRule:this.shortRuleNameToFullName(t[i-1])})}flattenFollowSet(){let t=J(this.buildFullFollowKeyStack(),n=>this.getFollowSetFromFollowKey(n));return Lt(t)}getFollowSetFromFollowKey(t){if(t===bS)return[tn];let n=t.ruleName+t.idxInCallingRule+Mu+t.inRule;return this.resyncFollows[n]}addToResyncTokens(t,n){return this.tokenMatcher(t,tn)||n.push(t),n}reSyncTo(t){let n=[],o=this.LA(1);for(;this.tokenMatcher(o,t)===!1;)o=this.SKIP_TOKEN(),this.addToResyncTokens(o,n);return Dn(n)}attemptInRepetitionRecovery(t,n,o,i,a,s,c){}getCurrentGrammarPath(t,n){let o=this.getHumanReadableRuleStack(),i=De(this.RULE_OCCURRENCE_STACK);return{ruleStack:o,occurrenceStack:i,lastTok:t,lastTokOccurrence:n}}getHumanReadableRuleStack(){return J(this.RULE_STACK,t=>this.shortRuleNameToFullName(t))}};function sW(e,t,n,o,i,a,s){let c=this.getKeyForAutomaticLookahead(o,i),u=this.firstAfterRepMap[c];if(u===void 0){let A=this.getCurrRuleFullName(),O=this.getGAstProductions()[A];u=new a(O,i).startWalking(),this.firstAfterRepMap[c]=u}let p=u.token,g=u.occurrence,S=u.isEndOfRule;this.RULE_STACK.length===1&&S&&p===void 0&&(p=tn,g=1),!(p===void 0||g===void 0)&&this.shouldInRepetitionRecoveryBeTried(p,g,s)&&this.tryInRepetitionRecovery(e,t,n,p)}r(sW,"attemptInRepetitionRecovery");function Xu(e,t,n){return n|t|e}r(Xu,"getKeyForAutomaticLookahead");var Zs=class{static{r(this,"LLkLookaheadStrategy")}constructor(t){var n;this.maxLookahead=(n=t?.maxLookahead)!==null&&n!==void 0?n:dr.maxLookahead}validate(t){let n=this.validateNoLeftRecursion(t.rules);if(de(n)){let o=this.validateEmptyOrAlternatives(t.rules),i=this.validateAmbiguousAlternationAlternatives(t.rules,this.maxLookahead),a=this.validateSomeNonEmptyLookaheadPath(t.rules,this.maxLookahead);return[...n,...o,...i,...a]}return n}validateNoLeftRecursion(t){return cr(t,n=>_S(n,n,rn))}validateEmptyOrAlternatives(t){return cr(t,n=>oU(n,rn))}validateAmbiguousAlternationAlternatives(t,n){return cr(t,o=>iU(o,n,rn))}validateSomeNonEmptyLookaheadPath(t,n){return aU(t,n,rn)}buildLookaheadForAlternation(t){return Yv(t.prodOccurrence,t.rule,t.maxLookahead,t.hasPredicates,t.dynamicTokensEnabled,Jv)}buildLookaheadForOptional(t){return Kv(t.prodOccurrence,t.rule,t.maxLookahead,t.dynamicTokensEnabled,Yu(t.prodType),Qv)}};var $u=class{static{r(this,"LooksAhead")}initLooksAhead(t){this.dynamicTokensEnabled=X(t,"dynamicTokensEnabled")?t.dynamicTokensEnabled:dr.dynamicTokensEnabled,this.maxLookahead=X(t,"maxLookahead")?t.maxLookahead:dr.maxLookahead,this.lookaheadStrategy=X(t,"lookaheadStrategy")?t.lookaheadStrategy:new Zs({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(t){Q(t,n=>{this.TRACE_INIT(`${n.name} Rule Lookahead`,()=>{let{alternation:o,repetition:i,option:a,repetitionMandatory:s,repetitionMandatoryWithSeparator:c,repetitionWithSeparator:u}=cW(n);Q(o,p=>{let g=p.idx===0?"":p.idx;this.TRACE_INIT(`${br(p)}${g}`,()=>{let S=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:p.idx,rule:n,maxLookahead:p.maxLookahead||this.maxLookahead,hasPredicates:p.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),A=Xu(this.fullRuleNameToShort[n.name],256,p.idx);this.setLaFuncCache(A,S)})}),Q(i,p=>{this.computeLookaheadFunc(n,p.idx,768,"Repetition",p.maxLookahead,br(p))}),Q(a,p=>{this.computeLookaheadFunc(n,p.idx,512,"Option",p.maxLookahead,br(p))}),Q(s,p=>{this.computeLookaheadFunc(n,p.idx,1024,"RepetitionMandatory",p.maxLookahead,br(p))}),Q(c,p=>{this.computeLookaheadFunc(n,p.idx,1536,"RepetitionMandatoryWithSeparator",p.maxLookahead,br(p))}),Q(u,p=>{this.computeLookaheadFunc(n,p.idx,1280,"RepetitionWithSeparator",p.maxLookahead,br(p))})})})}computeLookaheadFunc(t,n,o,i,a,s){this.TRACE_INIT(`${s}${n===0?"":n}`,()=>{let c=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:n,rule:t,maxLookahead:a||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i}),u=Xu(this.fullRuleNameToShort[t.name],o,n);this.setLaFuncCache(u,c)})}getKeyForAutomaticLookahead(t,n){let o=this.getLastExplicitRuleShortName();return Xu(o,t,n)}getLaFuncFromCache(t){return this.lookAheadFuncsCache.get(t)}setLaFuncCache(t,n){this.lookAheadFuncsCache.set(t,n)}},AS=class extends ur{static{r(this,"DslMethodsCollectorVisitor")}constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(t){this.dslMethods.option.push(t)}visitRepetitionWithSeparator(t){this.dslMethods.repetitionWithSeparator.push(t)}visitRepetitionMandatory(t){this.dslMethods.repetitionMandatory.push(t)}visitRepetitionMandatoryWithSeparator(t){this.dslMethods.repetitionMandatoryWithSeparator.push(t)}visitRepetition(t){this.dslMethods.repetition.push(t)}visitAlternation(t){this.dslMethods.alternation.push(t)}},Zu=new AS;function cW(e){Zu.reset(),e.accept(Zu);let t=Zu.dslMethods;return Zu.reset(),t}r(cW,"collectMethods");function US(e,t){isNaN(e.startOffset)===!0?(e.startOffset=t.startOffset,e.endOffset=t.endOffset):e.endOffset<t.endOffset&&(e.endOffset=t.endOffset)}r(US,"setNodeLocationOnlyOffset");function CS(e,t){isNaN(e.startOffset)===!0?(e.startOffset=t.startOffset,e.startColumn=t.startColumn,e.startLine=t.startLine,e.endOffset=t.endOffset,e.endColumn=t.endColumn,e.endLine=t.endLine):e.endOffset<t.endOffset&&(e.endOffset=t.endOffset,e.endColumn=t.endColumn,e.endLine=t.endLine)}r(CS,"setNodeLocationFull");function mU(e,t,n){e.children[n]===void 0?e.children[n]=[t]:e.children[n].push(t)}r(mU,"addTerminalToCst");function hU(e,t,n){e.children[t]===void 0?e.children[t]=[n]:e.children[t].push(n)}r(hU,"addNoneTerminalToCst");var lW="name";function OS(e,t){Object.defineProperty(e,lW,{enumerable:!1,configurable:!0,writable:!1,value:t})}r(OS,"defineNameProp");function uW(e,t){let n=ke(e),o=n.length;for(let i=0;i<o;i++){let a=n[i],s=e[a],c=s.length;for(let u=0;u<c;u++){let p=s[u];p.tokenTypeIdx===void 0&&this[p.name](p.children,t)}}}r(uW,"defaultVisit");function gU(e,t){let n=r(function(){},"derivedConstructor");OS(n,e+"BaseSemantics");let o={visit:r(function(i,a){if(Y(i)&&(i=i[0]),!er(i))return this[i.name](i.children,a)},"visit"),validateVisitor:r(function(){let i=dW(this,t);if(!de(i)){let a=J(i,s=>s.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${a.join(`

`).replace(/\n/g,`
	`)}`)}},"validateVisitor")};return n.prototype=o,n.prototype.constructor=n,n._RULE_NAMES=t,n}r(gU,"createBaseSemanticVisitorConstructor");function TU(e,t,n){let o=r(function(){},"derivedConstructor");OS(o,e+"BaseSemanticsWithDefaults");let i=Object.create(n.prototype);return Q(t,a=>{i[a]=uW}),o.prototype=i,o.prototype.constructor=o,o}r(TU,"createBaseVisitorConstructorWithDefaults");var LS;(function(e){e[e.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",e[e.MISSING_METHOD=1]="MISSING_METHOD"})(LS||(LS={}));function dW(e,t){return fW(e,t)}r(dW,"validateVisitor");function fW(e,t){let n=$t(t,i=>sr(e[i])===!1),o=J(n,i=>({msg:`Missing visitor method: <${i}> on ${e.constructor.name} CST Visitor.`,type:LS.MISSING_METHOD,methodName:i}));return Rn(o)}r(fW,"validateMissingCstMethods");var nd=class{static{r(this,"TreeBuilder")}initTreeBuilder(t){if(this.CST_STACK=[],this.outputCst=t.outputCst,this.nodeLocationTracking=X(t,"nodeLocationTracking")?t.nodeLocationTracking:dr.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=rt,this.cstFinallyStateUpdate=rt,this.cstPostTerminal=rt,this.cstPostNonTerminal=rt,this.cstPostRule=rt;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=CS,this.setNodeLocationFromNode=CS,this.cstPostRule=rt,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=rt,this.setNodeLocationFromNode=rt,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=US,this.setNodeLocationFromNode=US,this.cstPostRule=rt,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=rt,this.setNodeLocationFromNode=rt,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=rt,this.setNodeLocationFromNode=rt,this.cstPostRule=rt,this.setInitialNodeLocation=rt;else throw Error(`Invalid <nodeLocationTracking> config option: "${t.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(t){t.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(t){t.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(t){t.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(t){let n=this.LA(1);t.location={startOffset:n.startOffset,startLine:n.startLine,startColumn:n.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(t){let n={name:t,children:Object.create(null)};this.setInitialNodeLocation(n),this.CST_STACK.push(n)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(t){let n=this.LA(0),o=t.location;o.startOffset<=n.startOffset?(o.endOffset=n.endOffset,o.endLine=n.endLine,o.endColumn=n.endColumn):(o.startOffset=NaN,o.startLine=NaN,o.startColumn=NaN)}cstPostRuleOnlyOffset(t){let n=this.LA(0),o=t.location;o.startOffset<=n.startOffset?o.endOffset=n.endOffset:o.startOffset=NaN}cstPostTerminal(t,n){let o=this.CST_STACK[this.CST_STACK.length-1];mU(o,n,t),this.setNodeLocationFromToken(o.location,n)}cstPostNonTerminal(t,n){let o=this.CST_STACK[this.CST_STACK.length-1];hU(o,n,t),this.setNodeLocationFromNode(o.location,t.location)}getBaseCstVisitorConstructor(){if(er(this.baseCstVisitorConstructor)){let t=gU(this.className,ke(this.gastProductionsCache));return this.baseCstVisitorConstructor=t,t}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(er(this.baseCstVisitorWithDefaultsConstructor)){let t=TU(this.className,ke(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=t,t}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){let t=this.RULE_STACK;return t[t.length-1]}getPreviousExplicitRuleShortName(){let t=this.RULE_STACK;return t[t.length-2]}getLastExplicitRuleOccurrenceIndex(){let t=this.RULE_OCCURRENCE_STACK;return t[t.length-1]}};var od=class{static{r(this,"LexerAdapter")}initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(t){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=t,this.tokVectorLength=t.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):la}LA(t){let n=this.currIdx+t;return n<0||this.tokVectorLength<=n?la:this.tokVector[n]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(t){this.currIdx=t}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}};var id=class{static{r(this,"RecognizerApi")}ACTION(t){return t.call(this)}consume(t,n,o){return this.consumeInternal(n,t,o)}subrule(t,n,o){return this.subruleInternal(n,t,o)}option(t,n){return this.optionInternal(n,t)}or(t,n){return this.orInternal(n,t)}many(t,n){return this.manyInternal(t,n)}atLeastOne(t,n){return this.atLeastOneInternal(t,n)}CONSUME(t,n){return this.consumeInternal(t,0,n)}CONSUME1(t,n){return this.consumeInternal(t,1,n)}CONSUME2(t,n){return this.consumeInternal(t,2,n)}CONSUME3(t,n){return this.consumeInternal(t,3,n)}CONSUME4(t,n){return this.consumeInternal(t,4,n)}CONSUME5(t,n){return this.consumeInternal(t,5,n)}CONSUME6(t,n){return this.consumeInternal(t,6,n)}CONSUME7(t,n){return this.consumeInternal(t,7,n)}CONSUME8(t,n){return this.consumeInternal(t,8,n)}CONSUME9(t,n){return this.consumeInternal(t,9,n)}SUBRULE(t,n){return this.subruleInternal(t,0,n)}SUBRULE1(t,n){return this.subruleInternal(t,1,n)}SUBRULE2(t,n){return this.subruleInternal(t,2,n)}SUBRULE3(t,n){return this.subruleInternal(t,3,n)}SUBRULE4(t,n){return this.subruleInternal(t,4,n)}SUBRULE5(t,n){return this.subruleInternal(t,5,n)}SUBRULE6(t,n){return this.subruleInternal(t,6,n)}SUBRULE7(t,n){return this.subruleInternal(t,7,n)}SUBRULE8(t,n){return this.subruleInternal(t,8,n)}SUBRULE9(t,n){return this.subruleInternal(t,9,n)}OPTION(t){return this.optionInternal(t,0)}OPTION1(t){return this.optionInternal(t,1)}OPTION2(t){return this.optionInternal(t,2)}OPTION3(t){return this.optionInternal(t,3)}OPTION4(t){return this.optionInternal(t,4)}OPTION5(t){return this.optionInternal(t,5)}OPTION6(t){return this.optionInternal(t,6)}OPTION7(t){return this.optionInternal(t,7)}OPTION8(t){return this.optionInternal(t,8)}OPTION9(t){return this.optionInternal(t,9)}OR(t){return this.orInternal(t,0)}OR1(t){return this.orInternal(t,1)}OR2(t){return this.orInternal(t,2)}OR3(t){return this.orInternal(t,3)}OR4(t){return this.orInternal(t,4)}OR5(t){return this.orInternal(t,5)}OR6(t){return this.orInternal(t,6)}OR7(t){return this.orInternal(t,7)}OR8(t){return this.orInternal(t,8)}OR9(t){return this.orInternal(t,9)}MANY(t){this.manyInternal(0,t)}MANY1(t){this.manyInternal(1,t)}MANY2(t){this.manyInternal(2,t)}MANY3(t){this.manyInternal(3,t)}MANY4(t){this.manyInternal(4,t)}MANY5(t){this.manyInternal(5,t)}MANY6(t){this.manyInternal(6,t)}MANY7(t){this.manyInternal(7,t)}MANY8(t){this.manyInternal(8,t)}MANY9(t){this.manyInternal(9,t)}MANY_SEP(t){this.manySepFirstInternal(0,t)}MANY_SEP1(t){this.manySepFirstInternal(1,t)}MANY_SEP2(t){this.manySepFirstInternal(2,t)}MANY_SEP3(t){this.manySepFirstInternal(3,t)}MANY_SEP4(t){this.manySepFirstInternal(4,t)}MANY_SEP5(t){this.manySepFirstInternal(5,t)}MANY_SEP6(t){this.manySepFirstInternal(6,t)}MANY_SEP7(t){this.manySepFirstInternal(7,t)}MANY_SEP8(t){this.manySepFirstInternal(8,t)}MANY_SEP9(t){this.manySepFirstInternal(9,t)}AT_LEAST_ONE(t){this.atLeastOneInternal(0,t)}AT_LEAST_ONE1(t){return this.atLeastOneInternal(1,t)}AT_LEAST_ONE2(t){this.atLeastOneInternal(2,t)}AT_LEAST_ONE3(t){this.atLeastOneInternal(3,t)}AT_LEAST_ONE4(t){this.atLeastOneInternal(4,t)}AT_LEAST_ONE5(t){this.atLeastOneInternal(5,t)}AT_LEAST_ONE6(t){this.atLeastOneInternal(6,t)}AT_LEAST_ONE7(t){this.atLeastOneInternal(7,t)}AT_LEAST_ONE8(t){this.atLeastOneInternal(8,t)}AT_LEAST_ONE9(t){this.atLeastOneInternal(9,t)}AT_LEAST_ONE_SEP(t){this.atLeastOneSepFirstInternal(0,t)}AT_LEAST_ONE_SEP1(t){this.atLeastOneSepFirstInternal(1,t)}AT_LEAST_ONE_SEP2(t){this.atLeastOneSepFirstInternal(2,t)}AT_LEAST_ONE_SEP3(t){this.atLeastOneSepFirstInternal(3,t)}AT_LEAST_ONE_SEP4(t){this.atLeastOneSepFirstInternal(4,t)}AT_LEAST_ONE_SEP5(t){this.atLeastOneSepFirstInternal(5,t)}AT_LEAST_ONE_SEP6(t){this.atLeastOneSepFirstInternal(6,t)}AT_LEAST_ONE_SEP7(t){this.atLeastOneSepFirstInternal(7,t)}AT_LEAST_ONE_SEP8(t){this.atLeastOneSepFirstInternal(8,t)}AT_LEAST_ONE_SEP9(t){this.atLeastOneSepFirstInternal(9,t)}RULE(t,n,o=ua){if(Ke(this.definedRulesNames,t)){let s={message:rn.buildDuplicateRuleNameError({topLevelRule:t,grammarName:this.className}),type:Mt.DUPLICATE_RULE_NAME,ruleName:t};this.definitionErrors.push(s)}this.definedRulesNames.push(t);let i=this.defineRule(t,n,o);return this[t]=i,i}OVERRIDE_RULE(t,n,o=ua){let i=nU(t,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);let a=this.defineRule(t,n,o);return this[t]=a,a}BACKTRACK(t,n){return function(){this.isBackTrackingStack.push(1);let o=this.saveRecogState();try{return t.apply(this,n),!0}catch(i){if(Ao(i))return!1;throw i}finally{this.reloadRecogState(o),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return Nu(Le(this.gastProductionsCache))}};var ad=class{static{r(this,"RecognizerEngine")}initRecognizerEngine(t,n){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=aa,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},X(n,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(Y(t)){if(de(t))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof t[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(Y(t))this.tokensMap=Ct(t,(a,s)=>(a[s.name]=s,a),{});else if(X(t,"modes")&&qt(Lt(Le(t.modes)),Fv)){let a=Lt(Le(t.modes)),s=Ro(a);this.tokensMap=Ct(s,(c,u)=>(c[u.name]=u,c),{})}else if(tt(t))this.tokensMap=De(t);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=tn;let o=X(t,"modes")?Lt(Le(t.modes)):Le(t),i=qt(o,a=>de(a.categoryMatches));this.tokenMatcher=i?aa:Bn,Gn(Le(this.tokensMap))}defineRule(t,n,o){if(this.selfAnalysisDone)throw Error(`Grammar rule <${t}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);let i=X(o,"resyncEnabled")?o.resyncEnabled:ua.resyncEnabled,a=X(o,"recoveryValueFunc")?o.recoveryValueFunc:ua.recoveryValueFunc,s=this.ruleShortNameIdx<<12;this.ruleShortNameIdx++,this.shortRuleNameToFull[s]=t,this.fullRuleNameToShort[t]=s;let c;return this.outputCst===!0?c=r(function(...g){try{this.ruleInvocationStateUpdate(s,t,this.subruleIdx),n.apply(this,g);let S=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(S),S}catch(S){return this.invokeRuleCatch(S,i,a)}finally{this.ruleFinallyStateUpdate()}},"invokeRuleWithTry"):c=r(function(...g){try{return this.ruleInvocationStateUpdate(s,t,this.subruleIdx),n.apply(this,g)}catch(S){return this.invokeRuleCatch(S,i,a)}finally{this.ruleFinallyStateUpdate()}},"invokeRuleWithTryCst"),Object.assign(c,{ruleName:t,originalGrammarAction:n})}invokeRuleCatch(t,n,o){let i=this.RULE_STACK.length===1,a=n&&!this.isBackTracking()&&this.recoveryEnabled;if(Ao(t)){let s=t;if(a){let c=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(c))if(s.resyncedTokens=this.reSyncTo(c),this.outputCst){let u=this.CST_STACK[this.CST_STACK.length-1];return u.recoveredNode=!0,u}else return o(t);else{if(this.outputCst){let u=this.CST_STACK[this.CST_STACK.length-1];u.recoveredNode=!0,s.partialCstResult=u}throw s}}else{if(i)return this.moveToTerminatedState(),o(t);throw s}}else throw t}optionInternal(t,n){let o=this.getKeyForAutomaticLookahead(512,n);return this.optionInternalLogic(t,n,o)}optionInternalLogic(t,n,o){let i=this.getLaFuncFromCache(o),a;if(typeof t!="function"){a=t.DEF;let s=t.GATE;if(s!==void 0){let c=i;i=r(()=>s.call(this)&&c.call(this),"lookAheadFunc")}}else a=t;if(i.call(this)===!0)return a.call(this)}atLeastOneInternal(t,n){let o=this.getKeyForAutomaticLookahead(1024,t);return this.atLeastOneInternalLogic(t,n,o)}atLeastOneInternalLogic(t,n,o){let i=this.getLaFuncFromCache(o),a;if(typeof n!="function"){a=n.DEF;let s=n.GATE;if(s!==void 0){let c=i;i=r(()=>s.call(this)&&c.call(this),"lookAheadFunc")}}else a=n;if(i.call(this)===!0){let s=this.doSingleRepetition(a);for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(a)}else throw this.raiseEarlyExitException(t,ot.REPETITION_MANDATORY,n.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[t,n],i,1024,t,Vu)}atLeastOneSepFirstInternal(t,n){let o=this.getKeyForAutomaticLookahead(1536,t);this.atLeastOneSepFirstInternalLogic(t,n,o)}atLeastOneSepFirstInternalLogic(t,n,o){let i=n.DEF,a=n.SEP;if(this.getLaFuncFromCache(o).call(this)===!0){i.call(this);let c=r(()=>this.tokenMatcher(this.LA(1),a),"separatorLookAheadFunc");for(;this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[t,a,c,i,zs],c,1536,t,zs)}else throw this.raiseEarlyExitException(t,ot.REPETITION_MANDATORY_WITH_SEPARATOR,n.ERR_MSG)}manyInternal(t,n){let o=this.getKeyForAutomaticLookahead(768,t);return this.manyInternalLogic(t,n,o)}manyInternalLogic(t,n,o){let i=this.getLaFuncFromCache(o),a;if(typeof n!="function"){a=n.DEF;let c=n.GATE;if(c!==void 0){let u=i;i=r(()=>c.call(this)&&u.call(this),"lookaheadFunction")}}else a=n;let s=!0;for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(a);this.attemptInRepetitionRecovery(this.manyInternal,[t,n],i,768,t,ju,s)}manySepFirstInternal(t,n){let o=this.getKeyForAutomaticLookahead(1280,t);this.manySepFirstInternalLogic(t,n,o)}manySepFirstInternalLogic(t,n,o){let i=n.DEF,a=n.SEP;if(this.getLaFuncFromCache(o).call(this)===!0){i.call(this);let c=r(()=>this.tokenMatcher(this.LA(1),a),"separatorLookAheadFunc");for(;this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[t,a,c,i,Ws],c,1280,t,Ws)}}repetitionSepSecondInternal(t,n,o,i,a){for(;o();)this.CONSUME(n),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[t,n,o,i,a],o,1536,t,a)}doSingleRepetition(t){let n=this.getLexerPosition();return t.call(this),this.getLexerPosition()>n}orInternal(t,n){let o=this.getKeyForAutomaticLookahead(256,n),i=Y(t)?t:t.DEF,s=this.getLaFuncFromCache(o).call(this,i);if(s!==void 0)return i[s].ALT.call(this);this.raiseNoAltException(n,t.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){let t=this.LA(1),n=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:t,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new Qs(n,t))}}subruleInternal(t,n,o){let i;try{let a=o!==void 0?o.ARGS:void 0;return this.subruleIdx=n,i=t.apply(this,a),this.cstPostNonTerminal(i,o!==void 0&&o.LABEL!==void 0?o.LABEL:t.ruleName),i}catch(a){throw this.subruleInternalError(a,o,t.ruleName)}}subruleInternalError(t,n,o){throw Ao(t)&&t.partialCstResult!==void 0&&(this.cstPostNonTerminal(t.partialCstResult,n!==void 0&&n.LABEL!==void 0?n.LABEL:o),delete t.partialCstResult),t}consumeInternal(t,n,o){let i;try{let a=this.LA(1);this.tokenMatcher(a,t)===!0?(this.consumeToken(),i=a):this.consumeInternalError(t,a,o)}catch(a){i=this.consumeInternalRecovery(t,n,a)}return this.cstPostTerminal(o!==void 0&&o.LABEL!==void 0?o.LABEL:t.name,i),i}consumeInternalError(t,n,o){let i,a=this.LA(0);throw o!==void 0&&o.ERR_MSG?i=o.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:t,actual:n,previous:a,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new yt(i,n,a))}consumeInternalRecovery(t,n,o){if(this.recoveryEnabled&&o.name==="MismatchedTokenException"&&!this.isBackTracking()){let i=this.getFollowsForInRuleRecovery(t,n);try{return this.tryInRuleRecovery(t,i)}catch(a){throw a.name===xS?o:a}}else throw o}saveRecogState(){let t=this.errors,n=De(this.RULE_STACK);return{errors:t,lexerState:this.exportLexerState(),RULE_STACK:n,CST_STACK:this.CST_STACK}}reloadRecogState(t){this.errors=t.errors,this.importLexerState(t.lexerState),this.RULE_STACK=t.RULE_STACK}ruleInvocationStateUpdate(t,n,o){this.RULE_OCCURRENCE_STACK.push(o),this.RULE_STACK.push(t),this.cstInvocationStateUpdate(n)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){let t=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[t]}shortRuleNameToFullName(t){return this.shortRuleNameToFull[t]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),tn)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}};var sd=class{static{r(this,"ErrorHandler")}initErrorHandler(t){this._errors=[],this.errorMessageProvider=X(t,"errorMessageProvider")?t.errorMessageProvider:dr.errorMessageProvider}SAVE_ERROR(t){if(Ao(t))return t.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:De(this.RULE_OCCURRENCE_STACK)},this._errors.push(t),t;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return De(this._errors)}set errors(t){this._errors=t}raiseEarlyExitException(t,n,o){let i=this.getCurrRuleFullName(),a=this.getGAstProductions()[i],c=Ys(t,a,n,this.maxLookahead)[0],u=[];for(let g=1;g<=this.maxLookahead;g++)u.push(this.LA(g));let p=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:c,actual:u,previous:this.LA(0),customUserDescription:o,ruleName:i});throw this.SAVE_ERROR(new Xs(p,this.LA(1),this.LA(0)))}raiseNoAltException(t,n){let o=this.getCurrRuleFullName(),i=this.getGAstProductions()[o],a=Hs(t,i,this.maxLookahead),s=[];for(let p=1;p<=this.maxLookahead;p++)s.push(this.LA(p));let c=this.LA(0),u=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:a,actual:s,previous:c,customUserDescription:n,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new Js(u,this.LA(1),c))}};var cd=class{static{r(this,"ContentAssist")}initContentAssist(){}computeContentAssist(t,n){let o=this.gastProductionsCache[t];if(er(o))throw Error(`Rule ->${t}<- does not exist in this grammar.`);return zu([o],n,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(t){let n=Ut(t.ruleStack),i=this.getGAstProductions()[n];return new Gu(i,t).startWalking()}};var dd={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(dd);var EU=!0,SU=Math.pow(2,8)-1,_U=jn({name:"RECORDING_PHASE_TOKEN",pattern:nt.NA});Gn([_U]);var bU=oi(_U,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(bU);var mW={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},ld=class{static{r(this,"GastRecorder")}initGastRecorder(t){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let t=0;t<10;t++){let n=t>0?t:"";this[`CONSUME${n}`]=function(o,i){return this.consumeInternalRecord(o,t,i)},this[`SUBRULE${n}`]=function(o,i){return this.subruleInternalRecord(o,t,i)},this[`OPTION${n}`]=function(o){return this.optionInternalRecord(o,t)},this[`OR${n}`]=function(o){return this.orInternalRecord(o,t)},this[`MANY${n}`]=function(o){this.manyInternalRecord(t,o)},this[`MANY_SEP${n}`]=function(o){this.manySepFirstInternalRecord(t,o)},this[`AT_LEAST_ONE${n}`]=function(o){this.atLeastOneInternalRecord(t,o)},this[`AT_LEAST_ONE_SEP${n}`]=function(o){this.atLeastOneSepFirstInternalRecord(t,o)}}this.consume=function(t,n,o){return this.consumeInternalRecord(n,t,o)},this.subrule=function(t,n,o){return this.subruleInternalRecord(n,t,o)},this.option=function(t,n){return this.optionInternalRecord(n,t)},this.or=function(t,n){return this.orInternalRecord(n,t)},this.many=function(t,n){this.manyInternalRecord(t,n)},this.atLeastOne=function(t,n){this.atLeastOneInternalRecord(t,n)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{let t=this;for(let n=0;n<10;n++){let o=n>0?n:"";delete t[`CONSUME${o}`],delete t[`SUBRULE${o}`],delete t[`OPTION${o}`],delete t[`OR${o}`],delete t[`MANY${o}`],delete t[`MANY_SEP${o}`],delete t[`AT_LEAST_ONE${o}`],delete t[`AT_LEAST_ONE_SEP${o}`]}delete t.consume,delete t.subrule,delete t.option,delete t.or,delete t.many,delete t.atLeastOne,delete t.ACTION,delete t.BACKTRACK,delete t.LA})}ACTION_RECORD(t){}BACKTRACK_RECORD(t,n){return()=>!0}LA_RECORD(t){return la}topLevelRuleRecord(t,n){try{let o=new lr({definition:[],name:t});return o.name=t,this.recordingProdStack.push(o),n.call(this),this.recordingProdStack.pop(),o}catch(o){if(o.KNOWN_RECORDER_ERROR!==!0)try{o.message=o.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw o}throw o}}optionInternalRecord(t,n){return ec.call(this,We,t,n)}atLeastOneInternalRecord(t,n){ec.call(this,Et,n,t)}atLeastOneSepFirstInternalRecord(t,n){ec.call(this,St,n,t,EU)}manyInternalRecord(t,n){ec.call(this,Ue,n,t)}manySepFirstInternalRecord(t,n){ec.call(this,dt,n,t,EU)}orInternalRecord(t,n){return hW.call(this,t,n)}subruleInternalRecord(t,n,o){if(ud(n),!t||X(t,"ruleName")===!1){let c=new Error(`<SUBRULE${yU(n)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(t)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw c.KNOWN_RECORDER_ERROR=!0,c}let i=xn(this.recordingProdStack),a=t.ruleName,s=new qe({idx:n,nonTerminalName:a,label:o?.LABEL,referencedRule:void 0});return i.definition.push(s),this.outputCst?mW:dd}consumeInternalRecord(t,n,o){if(ud(n),!dS(t)){let s=new Error(`<CONSUME${yU(n)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(t)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw s.KNOWN_RECORDER_ERROR=!0,s}let i=xn(this.recordingProdStack),a=new Se({idx:n,terminalType:t,label:o?.LABEL});return i.definition.push(a),bU}};function ec(e,t,n,o=!1){ud(n);let i=xn(this.recordingProdStack),a=sr(t)?t:t.DEF,s=new e({definition:[],idx:n});return o&&(s.separator=t.SEP),X(t,"MAX_LOOKAHEAD")&&(s.maxLookahead=t.MAX_LOOKAHEAD),this.recordingProdStack.push(s),a.call(this),i.definition.push(s),this.recordingProdStack.pop(),dd}r(ec,"recordProd");function hW(e,t){ud(t);let n=xn(this.recordingProdStack),o=Y(e)===!1,i=o===!1?e:e.DEF,a=new ft({definition:[],idx:t,ignoreAmbiguities:o&&e.IGNORE_AMBIGUITIES===!0});X(e,"MAX_LOOKAHEAD")&&(a.maxLookahead=e.MAX_LOOKAHEAD);let s=en(i,c=>sr(c.GATE));return a.hasPredicates=s,n.definition.push(a),Q(i,c=>{let u=new Be({definition:[]});a.definition.push(u),X(c,"IGNORE_AMBIGUITIES")?u.ignoreAmbiguities=c.IGNORE_AMBIGUITIES:X(c,"GATE")&&(u.ignoreAmbiguities=!0),this.recordingProdStack.push(u),c.ALT.call(this),this.recordingProdStack.pop()}),dd}r(hW,"recordOrProd");function yU(e){return e===0?"":`${e}`}r(yU,"getIdxSuffix");function ud(e){if(e<0||e>SU){let t=new Error(`Invalid DSL Method idx value: <${e}>
	Idx value must be a none negative value smaller than ${SU+1}`);throw t.KNOWN_RECORDER_ERROR=!0,t}}r(ud,"assertMethodIdxIsValid");var fd=class{static{r(this,"PerformanceTracer")}initPerformanceTracer(t){if(X(t,"traceInitPerf")){let n=t.traceInitPerf,o=typeof n=="number";this.traceInitMaxIdent=o?n:1/0,this.traceInitPerf=o?n>0:n}else this.traceInitMaxIdent=0,this.traceInitPerf=dr.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(t,n){if(this.traceInitPerf===!0){this.traceInitIndent++;let o=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${o}--> <${t}>`);let{time:i,value:a}=Is(n),s=i>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s(`${o}<-- <${t}> time: ${i}ms`),this.traceInitIndent--,a}else return n()}};function RU(e,t){t.forEach(n=>{let o=n.prototype;Object.getOwnPropertyNames(o).forEach(i=>{if(i==="constructor")return;let a=Object.getOwnPropertyDescriptor(o,i);a&&(a.get||a.set)?Object.defineProperty(e.prototype,i,a):e.prototype[i]=n.prototype[i]})})}r(RU,"applyMixins");var la=oi(tn,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(la);var dr=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:Vn,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),ua=Object.freeze({recoveryValueFunc:r(()=>{},"recoveryValueFunc"),resyncEnabled:!0}),Mt;(function(e){e[e.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",e[e.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",e[e.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",e[e.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",e[e.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",e[e.LEFT_RECURSION=5]="LEFT_RECURSION",e[e.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",e[e.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",e[e.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",e[e.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",e[e.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",e[e.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",e[e.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",e[e.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(Mt||(Mt={}));var tc=class e{static{r(this,"Parser")}static performSelfAnalysis(t){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let t;this.selfAnalysisDone=!0;let n=this.className;this.TRACE_INIT("toFastProps",()=>{Ps(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),Q(this.definedRulesNames,i=>{let s=this[i].originalGrammarAction,c;this.TRACE_INIT(`${i} Rule`,()=>{c=this.topLevelRuleRecord(i,s)}),this.gastProductionsCache[i]=c})}finally{this.disableRecording()}});let o=[];if(this.TRACE_INIT("Grammar Resolving",()=>{o=sU({rules:Le(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(o)}),this.TRACE_INIT("Grammar Validations",()=>{if(de(o)&&this.skipValidations===!1){let i=cU({rules:Le(this.gastProductionsCache),tokenTypes:Le(this.tokensMap),errMsgProvider:rn,grammarName:n}),a=eU({lookaheadStrategy:this.lookaheadStrategy,rules:Le(this.gastProductionsCache),tokenTypes:Le(this.tokensMap),grammarName:n});this.definitionErrors=this.definitionErrors.concat(i,a)}}),de(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{let i=hv(Le(this.gastProductionsCache));this.resyncFollows=i}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var i,a;(a=(i=this.lookaheadStrategy).initialize)===null||a===void 0||a.call(i,{rules:Le(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(Le(this.gastProductionsCache))})),!e.DEFER_DEFINITION_ERRORS_HANDLING&&!de(this.definitionErrors))throw t=J(this.definitionErrors,i=>i.message),new Error(`Parser Definition Errors detected:
 ${t.join(`
-------------------------------
`)}`)})}constructor(t,n){this.definitionErrors=[],this.selfAnalysisDone=!1;let o=this;if(o.initErrorHandler(n),o.initLexerAdapter(),o.initLooksAhead(n),o.initRecognizerEngine(t,n),o.initRecoverable(n),o.initTreeBuilder(n),o.initContentAssist(),o.initGastRecorder(n),o.initPerformanceTracer(n),X(n,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=X(n,"skipValidations")?n.skipValidations:dr.skipValidations}};tc.DEFER_DEFINITION_ERRORS_HANDLING=!1;RU(tc,[Qu,$u,nd,od,ad,id,sd,cd,ld,fd]);var rc=class extends tc{static{r(this,"CstParser")}constructor(t,n=dr){let o=De(n);o.outputCst=!0,super(t,o)}};var MS=new Map;function k(e){let{pattern:t}=e,n=t.toString();if(MS.has(n))return MS.get(n);let o=jn(e);return MS.set(n,o),o}r(k,"createUniqToken");function d(e,t){return k({name:`${e} token`,pattern:new RegExp(e),label:e,...t})}r(d,"createTokenByName");var $=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),pd=d("conditional",{longer_alt:$,categories:[$]}),da=d("if",{longer_alt:$,categories:[$]}),md=d("else",{longer_alt:$,categories:[$]}),hd=d("elseif",{longer_alt:$,categories:[$]}),gd=d("for",{longer_alt:$,categories:[$]}),Td=d("foreach",{longer_alt:$,categories:[$]}),Ed=d("remove",{longer_alt:$,categories:[$]}),Sd=d("await",{longer_alt:$,categories:[$]}),nn=d("each",{longer_alt:$,categories:[$]}),yd=d("try_catch",{longer_alt:$,categories:[$]}),nc=d("try",{longer_alt:$,categories:[$]}),oc=d("catch",{longer_alt:$,categories:[$]}),_d=d("finally",{longer_alt:$,categories:[$]}),tr=d("as",{longer_alt:$,categories:[$]}),fa=d("return",{longer_alt:$,categories:[$]}),bd=d("switch",{longer_alt:$,categories:[$]}),Rd=d("case",{longer_alt:$,categories:[$]}),xd=d("default",{longer_alt:$,categories:[$]}),Ad=d("while",{longer_alt:$,categories:[$]}),pa=d("group",{longer_alt:$,categories:[$]}),kd=d("throw",{longer_alt:$,categories:[$]}),ma=d("break",{longer_alt:$,categories:[$]}),vd=d("continue",{longer_alt:$,categories:[$]}),ic=k({name:"GreaterThan",pattern:/>/,label:">"}),ac=k({name:"GreaterThanOrEqual",pattern:/>=/,label:">="}),sc=k({name:"SmallerThan",pattern:/</,label:"<"}),cc=k({name:"SmallerThanOrEq",pattern:/<=/,label:"<="}),Ud=k({name:"Minus",pattern:/-/,label:"-"}),Cd=k({name:"Plus",pattern:/\+/,label:"+"}),Od=k({name:"Multiply",pattern:/\*/,label:"*"}),Ld=k({name:"Divide",pattern:/\//,label:"/"}),lc=k({name:"IsEqual",label:"==",pattern:/==/}),Nd=k({name:"IsStrictEqual",label:"===",pattern:/===/}),uc=k({name:"IsNotEqual",label:"!=",pattern:/!=/}),Md=k({name:"IsStrictNotEqual",label:"!==",pattern:/!==/}),v=k({name:"EqualToken",label:"=",pattern:/=/}),L=k({name:"LCurly",pattern:/{/,label:"{"}),N=k({name:"RCurly",pattern:/}/,label:"}"}),it=k({name:"LSquare",pattern:/\[/,label:"["}),at=k({name:"RSquare",pattern:/]/,label:"]"}),ye=k({name:"LParent",pattern:/\(/,label:"("}),pe=k({name:"RParent",pattern:/\)/,label:")"}),Cr=k({name:"Question",pattern:/\?/,label:"?"}),Re=k({name:"ColonToken",pattern:/:/,label:":"}),wt=k({name:"PipeToken",pattern:/\|/,label:"|"}),Me=k({name:"CommaToken",pattern:/,/,label:","}),wd=k({name:"AndTestToken",pattern:/&&/,label:"&&"}),Fd=k({name:"NullishCoalescingToken",pattern:/\?\?/,label:"??"}),wS=k({name:"OrTestToken",pattern:/\|\|/,label:"||"}),dc=k({name:"JsonBetweenToken",pattern:/between/,label:"between",longer_alt:$,categories:[$]}),fc=k({name:"JsonContainsToken",pattern:/@>/,label:"@>"}),pc=k({name:"JsonContainsStringToken",pattern:/contains/,label:"contains",longer_alt:$,categories:[$]}),FS=k({name:"JsonEqualToken",pattern:/=/,label:"="}),mc=k({name:"JsonILikeToken",pattern:/ilike/,label:"ilike",longer_alt:$,categories:[$]}),hc=k({name:"JsonIncludesToken",pattern:/includes/,label:"includes",longer_alt:$,categories:[$]}),gc=k({name:"JsonLikeToken",pattern:/like/,label:"like",longer_alt:$,categories:[$]}),Tc=k({name:"JsonNotBetweenToken",pattern:/not between/,label:"not between"}),Ec=k({name:"JsonNotContainsToken",pattern:/not contains/,label:"not contains"}),Sc=k({name:"JsonNotILikeToken",pattern:/not ilike/,label:"not ilike"}),yc=k({name:"JsonNotInToken",pattern:/not in/,label:"not in"}),_c=k({name:"JsonNotIncludesToken",pattern:/not includes/,label:"not includes"}),bc=k({name:"JsonNotLikeToken",pattern:/not like/,label:"not like"}),Rc=k({name:"JsonNotOverlapsToken",pattern:/not overlaps/,label:"not overlaps"}),xc=k({name:"JsonNotRegexToken",pattern:/!~/,label:"!~"}),Ac=k({name:"JsonOverlapsToken",pattern:/overlaps/,label:"overlaps",longer_alt:$,categories:[$]}),Id=k({name:"JsonRegexToken",pattern:/~/,label:"~"}),xU=k({name:"JsonSearchToken",pattern:/search/,label:"search",longer_alt:$,categories:[$]}),AU=[Tc,Ec,Sc,_c,yc,dc,fc,pc,mc,hc,gc,bc,Rc,xc,Ac,Id,xU,Fd,wd,wS,pd,da,hd,md,Td,gd,nn,Ed,Sd,tr,fa,bd,Rd,xd,Ad,pa,kd,ma,vd,ac,ic,cc,sc,Ud,Cd,Od,Ld,Nd,lc,Md,uc,v,L,N,it,at,ye,pe,Cr,Re,wt,Me,yd,nc,oc,_d,FS];function kU(e){switch(e){case da.name:case md.name:case hd.name:case nn.name:case tr.name:case nc.name:case oc.name:case _d.name:return"keyword";case pd.name:case Sd.name:case fa.name:case pa.name:case kd.name:case ma.name:case vd.name:case gd.name:case bd.name:case Ed.name:case Td.name:case Ad.name:case Rd.name:case xd.name:case yd.name:return"function";case L.name:return"operator.openingCurly";case N.name:return"operator.closingCurly";case it.name:return"operator.openingSquare";case at.name:return"operator.closingSquare";case ye.name:return"operator.openingParenthesis";case pe.name:return"operator.closingParenthesis";case ic.name:case ac.name:case sc.name:case cc.name:case Ud.name:case Cd.name:case wd.name:case Od.name:case Ld.name:case v.name:case lc.name:case uc.name:case Fd.name:case Tc.name:case Ec.name:case Sc.name:case _c.name:case yc.name:case dc.name:case fc.name:case pc.name:case mc.name:case hc.name:case gc.name:case bc.name:case Rc.name:case xc.name:case Ac.name:case Id.name:return"operator";case xU.name:return"variable";case Cr.name:case Re.name:case wt.name:case Me.name:return"punctuation";default:return null}}r(kU,"mapTokenToType");var IS=k({name:"DisabledStatementToken",pattern:/![a-zA-Z][\w.]*/}),vU=k({name:"IntCast",pattern:/!int/,label:"!int"}),UU=k({name:"BoolCast",pattern:/!bool/,label:"!bool"}),CU=k({name:"ArrayCast",pattern:/!array/,label:"!array"}),OU=k({name:"TextCast",pattern:/!text/,label:"!text"}),LU=k({name:"ExpressionCast",pattern:/!expr/,label:"!expr"}),NU=k({name:"DecimalCast",pattern:/!decimal/,label:"!decimal"}),MU=k({name:"ObjectCast",pattern:/!object/,label:"!object"}),wU=k({name:"TimestampCast",pattern:/!timestamp/,label:"!timestamp"}),jr=k({name:"ExclamationToken",pattern:/!/}),Pd=[vU,CU,OU,LU,NU,MU,wU,UU,jr];function FU(e){switch(e){case vU.name:case CU.name:case OU.name:case LU.name:case NU.name:case MU.name:case wU.name:case UU.name:return"type";case IS.name:return"comment";case jr.name:return"operator";default:return null}}r(FU,"mapTokenToType");var IU=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Dd=d("addon",{longer_alt:IU,categories:[IU]}),PU=[Dd];function DU(e){switch(e){case Dd.name:return"keyword";default:return null}}r(DU,"mapTokenToType");var ha=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),qd=d("agent",{longer_alt:ha,categories:[ha]}),Bd=d("llm",{longer_alt:ha,categories:[ha]}),Gd=d("tools",{longer_alt:ha,categories:[ha]}),qU=[qd,Bd,Gd];function BU(e){switch(e){case qd.name:case Bd.name:case Gd.name:return"keyword";default:return null}}r(BU,"mapTokenToType");var ga=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),jd=d("actions",{longer_alt:ga,categories:[ga]}),Vd=d("active",{longer_alt:ga,categories:[ga]}),Wd=d("agent_trigger",{longer_alt:ga,categories:[ga]}),GU=[jd,Vd,Wd];function jU(e){switch(e){case jd.name:case Wd.name:return"keyword";case Vd.name:return"variable";default:return null}}r(jU,"mapTokenToType");var rr=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),zd=d("ai",{longer_alt:rr,categories:[rr]}),Hd=d("agent",{longer_alt:rr,categories:[rr]}),Ta=d("run",{longer_alt:rr,categories:[rr]}),Yd=d("external",{longer_alt:rr,categories:[rr]}),Kd=d("mcp",{longer_alt:rr,categories:[rr]}),Jd=d("tool",{longer_alt:rr,categories:[rr]}),Qd=d("list",{longer_alt:rr,categories:[rr]}),Xd=d("server_details",{longer_alt:rr,categories:[rr]}),VU=[zd,Hd,Ta,Yd,Kd,Jd,Qd,Xd];function WU(e){switch(e){case zd.name:case Hd.name:case Ta.name:case Yd.name:case Kd.name:case Jd.name:case Qd.name:case Xd.name:return"keyword";default:return null}}r(WU,"mapTokenToType");var Rr=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Zd=d("api",{longer_alt:Rr,categories:[Rr]}),$d=d("request",{longer_alt:Rr,categories:[Rr]}),ef=d("call",{longer_alt:Rr,categories:[Rr]}),tf=d("realtime_event",{longer_alt:Rr,categories:[Rr]}),rf=d("stream",{longer_alt:Rr,categories:[Rr]}),nf=d("lambda",{longer_alt:Rr,categories:[Rr]}),zU=d("microservice",{longer_alt:Rr,categories:[Rr]}),HU=[Zd,$d,ef,tf,rf,nf,zU];function YU(e){switch(e){case Zd.name:case $d.name:case nf.name:case tf.name:case rf.name:case zU.name:case ef.name:return"function";default:return null}}r(YU,"mapTokenToType");var vn=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Ea=d("active",{longer_alt:vn,categories:[vn]}),of=d("api_group",{longer_alt:vn,categories:[vn]}),af=d("canonical",{longer_alt:vn,categories:[vn]}),sf=d("cors",{longer_alt:vn,categories:[vn]}),cf=d("swagger",{longer_alt:vn,categories:[vn]}),KU=[Ea,of,af,sf,cf];function JU(e){switch(e){case of.name:return"keyword";case Ea.name:case af.name:case sf.name:case cf.name:return"variable";default:return null}}r(JU,"mapTokenToType");var Qe=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),lf=d("array",{longer_alt:Qe,categories:[Qe]}),uf=d("every",{longer_alt:Qe,categories:[Qe]}),df=d("filter_count",{longer_alt:Qe,categories:[Qe]}),ff=d("filter",{longer_alt:Qe,categories:[Qe]}),pf=d("find",{longer_alt:Qe,categories:[Qe]}),mf=d("find_index",{longer_alt:Qe,categories:[Qe]}),hf=d("has",{longer_alt:Qe,categories:[Qe]}),gf=d("merge",{longer_alt:Qe,categories:[Qe]}),Tf=d("pop",{longer_alt:Qe,categories:[Qe]}),Ef=d("push",{longer_alt:Qe,categories:[Qe]}),Sf=d("shift",{longer_alt:Qe,categories:[Qe]}),yf=d("unshift",{longer_alt:Qe,categories:[Qe]}),QU=[lf,uf,df,ff,mf,pf,hf,gf,Tf,Ef,Sf,yf];function XU(e){switch(e){case lf.name:case uf.name:case df.name:case ff.name:case pf.name:case mf.name:case hf.name:case gf.name:case Tf.name:case Ef.name:case Sf.name:case yf.name:return"function";default:return null}}r(XU,"mapTokenToType");var _f=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),bf=d("branch",{longer_alt:_f,categories:[_f]}),Rf=d("color",{longer_alt:_f,categories:[_f]}),ZU=[bf,Rf];function $U(e){switch(e){case bf.name:return"keyword";case Rf.name:return"variable";default:return null}}r($U,"mapTokenToType");var me=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),xf=d("cloud",{longer_alt:me,categories:[me]}),Af=d("algolia",{longer_alt:me,categories:[me]}),kf=d("google",{longer_alt:me,categories:[me]}),vf=d("aws",{longer_alt:me,categories:[me]}),Uf=d("elasticsearch",{longer_alt:me,categories:[me]}),Cf=d("azure",{longer_alt:me,categories:[me]}),Of=d("storage",{longer_alt:me,categories:[me]}),Lf=d("read_file",{longer_alt:me,categories:[me]}),Nf=d("delete_file",{longer_alt:me,categories:[me]}),Mf=d("get_file_info",{longer_alt:me,categories:[me]}),wf=d("list_directory",{longer_alt:me,categories:[me]}),Ff=d("s3",{longer_alt:me,categories:[me]}),If=d("sign_url",{longer_alt:me,categories:[me]}),Pf=d("upload_file",{longer_alt:me,categories:[me]}),Df=d("opensearch",{longer_alt:me,categories:[me]}),qf=d("document",{longer_alt:me,categories:[me]}),Bf=d("query",{longer_alt:me,categories:[me]}),Sa=d("request",{longer_alt:me,categories:[me]}),eC=[xf,Af,kf,vf,Uf,Cf,Of,Lf,Nf,Mf,wf,Ff,If,Pf,Df,qf,Bf,Sa];function tC(e){switch(e){case xf.name:case Af.name:case kf.name:case vf.name:case Uf.name:case Cf.name:case Of.name:case Ff.name:case Df.name:case Lf.name:case Nf.name:case Mf.name:case wf.name:case If.name:case Pf.name:case qf.name:case Bf.name:case Sa.name:return"function";default:return null}}r(tC,"mapTokenToType");var ee=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Gf=d("int",{longer_alt:ee,categories:[ee]}),jf=d("timestamp",{longer_alt:ee,categories:[ee]}),ya=d("text",{longer_alt:ee,categories:[ee]}),Vf=d("uuid",{longer_alt:ee,categories:[ee]}),Wf=d("vector",{longer_alt:ee,categories:[ee]}),zf=d("enum",{longer_alt:ee,categories:[ee]}),Hf=d("date",{longer_alt:ee,categories:[ee]}),Yf=d("bool",{longer_alt:ee,categories:[ee]}),Kf=d("decimal",{longer_alt:ee,categories:[ee]}),Jf=d("email",{longer_alt:ee,categories:[ee]}),Qf=d("password",{longer_alt:ee,categories:[ee]}),Xf=d("json",{longer_alt:ee,categories:[ee]}),Zf=d("file",{longer_alt:ee,categories:[ee]}),$f=d("object",{longer_alt:ee,categories:[ee]}),ep=d("image",{longer_alt:ee,categories:[ee]}),tp=d("video",{longer_alt:ee,categories:[ee]}),rp=d("audio",{longer_alt:ee,categories:[ee]}),np=d("attachment",{longer_alt:ee,categories:[ee]}),op=d("geo_point",{longer_alt:ee,categories:[ee]}),ip=d("geo_multipoint",{longer_alt:ee,categories:[ee]}),ap=d("geo_linestring",{longer_alt:ee,categories:[ee]}),sp=d("geo_multilinestring",{longer_alt:ee,categories:[ee]}),cp=d("geo_polygon",{longer_alt:ee,categories:[ee]}),lp=d("geo_multipolygon",{longer_alt:ee,categories:[ee]}),up=d("dblink",{longer_alt:ee,categories:[ee]}),dp=d("agent",{longer_alt:ee,categories:[ee]}),fp=d("mcp_server",{longer_alt:ee,categories:[ee]}),pp=d("channel",{longer_alt:ee,categories:[ee]}),mp=d("canonical",{longer_alt:ee,categories:[ee]}),rC=[dp,mp,fp,pp,up,Gf,jf,ya,Vf,Wf,zf,Hf,Yf,Kf,Jf,Qf,Xf,Zf,$f,ep,tp,rp,np,op,ip,ap,sp,cp,lp];function nC(e){switch(e){case dp.name:case mp.name:case fp.name:case pp.name:case up.name:case Gf.name:case jf.name:case ya.name:case Vf.name:case Wf.name:case zf.name:case Hf.name:case Yf.name:case Kf.name:case Jf.name:case Qf.name:case Xf.name:case Zf.name:case $f.name:case ep.name:case tp.name:case rp.name:case np.name:case op.name:case ip.name:case ap.name:case sp.name:case cp.name:case lp.name:return"type";default:return null}}r(nC,"mapTokenToType");var hp=k({name:"CommentToken",label:"// comment",pattern:/\/\/[^\r\n]*/}),oC=[hp];function iC(e){switch(e){case hp.name:return"comment";default:return}}r(iC,"mapTokenToType");var ce=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),gp=d("db",{longer_alt:ce,categories:[ce]}),Tp=d("query",{longer_alt:ce,categories:[ce]}),Ep=d("get",{longer_alt:ce,categories:[ce]}),Sp=d("add",{longer_alt:ce,categories:[ce]}),yp=d("add_or_edit",{longer_alt:ce,categories:[ce]}),_p=d("del",{longer_alt:ce,categories:[ce]}),bp=d("edit",{longer_alt:ce,categories:[ce]}),aC=d("update",{longer_alt:ce,categories:[ce]}),Rp=d("has",{longer_alt:ce,categories:[ce]}),xp=d("patch",{longer_alt:ce,categories:[ce]}),Ap=d("schema",{longer_alt:ce,categories:[ce]}),kp=d("transaction",{longer_alt:ce,categories:[ce]}),vp=d("truncate",{longer_alt:ce,categories:[ce]}),_a=d("direct_query",{longer_alt:ce,categories:[ce]}),Up=d("set_datasource",{longer_alt:ce,categories:[ce]}),sC=d("bulk",{longer_alt:ce,categories:[ce]}),Cp=d("external",{longer_alt:ce,categories:[ce]}),Op=d("mssql",{longer_alt:ce,categories:[ce]}),Lp=d("mysql",{longer_alt:ce,categories:[ce]}),Np=d("postgres",{longer_alt:ce,categories:[ce]}),Mp=d("oracle",{longer_alt:ce,categories:[ce]}),cC=[gp,Tp,Ep,yp,Sp,_p,bp,aC,Rp,xp,Ap,kp,vp,_a,Up,sC,Cp,Op,Lp,Np,Mp];function lC(e){switch(e){case Ap.name:return"keyword";case gp.name:case sC.name:case Cp.name:case Op.name:case Lp.name:case Np.name:case Mp.name:case Tp.name:case Ep.name:case Sp.name:case yp.name:case _p.name:case bp.name:case aC.name:case Rp.name:case xp.name:case kp.name:case vp.name:case _a.name:case Up.name:return"function";default:return null}}r(lC,"mapTokenToType");var ba=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),wp=d("debug",{longer_alt:ba,categories:[ba]}),Fp=d("stop",{longer_alt:ba,categories:[ba]}),Ip=d("log",{longer_alt:ba,categories:[ba]}),uC=[wp,Fp,Ip];function dC(e){switch(e){case wp.name:case Fp.name:case Ip.name:return"function";default:return null}}r(dC,"mapTokenToType");var ue=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Ra=d("expect",{longer_alt:ue,categories:[ue]}),xa=d("to_be_true",{longer_alt:ue,categories:[ue]}),Aa=d("to_be_false",{longer_alt:ue,categories:[ue]}),ka=d("to_be_in_the_past",{longer_alt:ue,categories:[ue]}),va=d("to_be_in_the_future",{longer_alt:ue,categories:[ue]}),Ua=d("to_be_defined",{longer_alt:ue,categories:[ue]}),Ca=d("to_not_be_defined",{longer_alt:ue,categories:[ue]}),Oa=d("to_be_null",{longer_alt:ue,categories:[ue]}),La=d("to_not_be_null",{longer_alt:ue,categories:[ue]}),Na=d("to_be_empty",{longer_alt:ue,categories:[ue]}),Ma=d("to_start_with",{longer_alt:ue,categories:[ue]}),wa=d("to_end_with",{longer_alt:ue,categories:[ue]}),Fa=d("to_be_greater_than",{longer_alt:ue,categories:[ue]}),Ia=d("to_be_less_than",{longer_alt:ue,categories:[ue]}),Pa=d("to_match",{longer_alt:ue,categories:[ue]}),Da=d("to_equal",{longer_alt:ue,categories:[ue]}),qa=d("to_not_equal",{longer_alt:ue,categories:[ue]}),Ba=d("to_contain",{longer_alt:ue,categories:[ue]}),Ga=d("to_be_within",{longer_alt:ue,categories:[ue]}),ja=d("to_throw",{longer_alt:ue,categories:[ue]}),fC=[Ra,xa,Aa,ka,va,Ua,Ca,Oa,La,Na,Ma,wa,Fa,Ia,Pa,Da,qa,Ba,Ga,ja];function pC(e){switch(e){case Ra.name:case xa.name:case Aa.name:case ka.name:case va.name:case Ua.name:case Ca.name:case Oa.name:case La.name:case Na.name:case Ma.name:case wa.name:case Fa.name:case Ia.name:case Pa.name:case Da.name:case qa.name:case Ba.name:case Ga.name:case ja.name:return"function";default:return null}}r(pC,"mapTokenToType");var mC=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Pp=d("filters",{longer_alt:mC,categories:[mC]}),Dp=k({name:"DbLinkFilter",label:"@",pattern:/@/}),hC=[Pp,Dp];function gC(e){switch(e){case Pp.name:return"keyword";case Dp.name:return"function";default:return null}}r(gC,"mapTokenToType");var Va=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),ko=d("function",{longer_alt:Va,categories:[Va]}),qp=d("run",{longer_alt:Va,categories:[Va]}),Bp=d("call",{longer_alt:Va,categories:[Va]}),TC=[ko,qp,Bp];function EC(e){switch(e){case ko.name:return"keyword";case qp.name:case Bp.name:return"function";default:return null}}r(EC,"mapTokenToType");var Gp=k({name:"ExpressionLiteral",label:"`...`",pattern:/`([^`\\]|\\.)*`/}),M=k({name:"StringLiteral",label:'"..."',pattern:/"([^"\\]|\\.)*"/}),vo=k({name:"SingleQuotedStringLiteral",pattern:/'([^'\\]|\\.)*'/,label:"''"}),Yt=k({name:"FloatLiteral",label:"floating point number",pattern:/-?\d+\.\d+/}),ze=k({name:"IntegerLiteral",label:"integer",pattern:/-?\d+/,longer_alt:Yt}),yle=k({name:"DoubleDollar",label:"$$",pattern:/\$\$/}),Wa=k({name:"TimestampLiteral",pattern:/\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\s([01]\d|2[0-3]):([0-5]\d):([0-5]\d)[+-]\d{4}/}),SC=[Wa,Gp,M,vo,ze,Yt];function yC(e){switch(e){case Gp.name:return"macro";case M.name:case Wa.name:return"doubleString";case vo.name:return"singleString";case ze.name:case Yt.name:return"number";default:return null}}r(yC,"mapTokenToType");var Ot=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),jp=d("math",{longer_alt:Ot,categories:[Ot]}),Vp=d("add",{longer_alt:Ot,categories:[Ot]}),Wp=d("div",{longer_alt:Ot,categories:[Ot]}),zp=d("mod",{longer_alt:Ot,categories:[Ot]}),Hp=d("mul",{longer_alt:Ot,categories:[Ot]}),Yp=d("sub",{longer_alt:Ot,categories:[Ot]}),Kp=d("bitwise",{longer_alt:Ot,categories:[Ot]}),Jp=d("and",{longer_alt:Ot,categories:[Ot]}),Qp=d("or",{longer_alt:Ot,categories:[Ot]}),Xp=d("xor",{longer_alt:Ot,categories:[Ot]}),_C=[jp,Vp,Wp,zp,Hp,Yp,Kp,Jp,Qp,Xp];function bC(e){switch(e){case jp.name:case Vp.name:case Wp.name:case zp.name:case Hp.name:case Yp.name:case Kp.name:case Jp.name:case Qp.name:case Xp.name:return"function";default:return null}}r(bC,"mapTokenToType");var Zp=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),$p=d("instructions",{longer_alt:Zp,categories:[Zp]}),za=d("tool",{longer_alt:Zp,categories:[Zp]}),RC=[$p,za];function xC(e){switch(e){case za.name:return"keyword";case $p.name:return"variable";default:return null}}r(xC,"mapTokenToType");var ii=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),em=d("active",{longer_alt:ii,categories:[ii]}),tm=d("instructions",{longer_alt:ii,categories:[ii]}),rm=d("mcp_server",{longer_alt:ii,categories:[ii]}),nm=d("tools",{longer_alt:za,categories:[ii]}),AC=[em,tm,rm,nm];function kC(e){switch(e){case em.name:case rm.name:case nm.name:return"keyword";case tm.name:return"variable";default:return null}}r(kC,"mapTokenToType");var Ha=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),om=d("actions",{longer_alt:Ha,categories:[Ha]}),im=d("active",{longer_alt:Ha,categories:[Ha]}),am=d("mcp_server_trigger",{longer_alt:Ha,categories:[Ha]}),vC=[om,im,am];function UC(e){switch(e){case om.name:case am.name:return"keyword";case im.name:return"variable";default:return null}}r(UC,"mapTokenToType");var Ya=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),sm=d("exception_policy",{longer_alt:Ya,categories:[Ya]}),cm=d("middleware",{longer_alt:Ya,categories:[Ya]}),lm=d("response_strategy",{longer_alt:Ya,categories:[Ya]}),CC=[sm,cm,lm];function OC(e){switch(e){case cm.name:return"keyword";case sm.name:case lm.name:return"variable";default:return null}}r(OC,"mapTokenToType");var nr=jn({name:'"""..."""',pattern:/("""\r?\n(?:[\s\S]*?\r?\n)?[ ]*""")|('''\r?\n(?:[\s\S]*?\r?\n)?[ ]*''')/}),um=jn({name:"MultiLineExpression",pattern:/```\r?\n(?:[\s\S]*?\r?\n)?[ ]*```/}),LC=[nr,um];function NC(e){switch(e){case nr.name:return"tripleString";case um.name:return"tripleMacro";default:return null}}r(NC,"mapTokenToType");var Uo=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),dm=d("object",{longer_alt:Uo,categories:[Uo]}),fm=d("entries",{longer_alt:Uo,categories:[Uo]}),pm=d("keys",{longer_alt:Uo,categories:[Uo]}),mm=d("values",{longer_alt:Uo,categories:[Uo]}),MC=[dm,fm,pm,mm];function wC(e){switch(e){case dm.name:case fm.name:case pm.name:case mm.name:return"function";default:return null}}r(wC,"mapTokenToType");var he=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),hm=d("query",{longer_alt:he,categories:[he]}),Ka=d("verb",{longer_alt:he,categories:[he]}),Ja=d("GET",{longer_alt:he,categories:[he]}),Qa=d("PATCH",{longer_alt:he,categories:[he]}),Xa=d("POST",{longer_alt:he,categories:[he]}),Za=d("PUT",{longer_alt:he,categories:[he]}),$a=d("DELETE",{categories:[he],longer_alt:he}),gm=d("where",{longer_alt:he,categories:[he]}),Tm=d("additional_where",{longer_alt:he,categories:[he]}),Em=d("sort",{longer_alt:he,categories:[he]}),Sm=d("override_sort",{longer_alt:he,categories:[he]}),ym=d("join",{longer_alt:he,categories:[he]}),FC=d("dblink",{longer_alt:he,categories:[he]}),_m=d("paging",{longer_alt:he,categories:[he]}),bm=d("distinct",{longer_alt:he,categories:[he]}),es=d("output",{longer_alt:he,categories:[he]}),Rm=d("addon",{longer_alt:he,categories:[he]}),kc=d("eval",{longer_alt:he,categories:[he]}),IC=[Tm,gm,Em,Sm,ym,hm,Ka,Ja,Qa,Xa,Za,$a,FC,bm,_m,es,Rm,kc];function PC(e){switch(e){case hm.name:case Ka.name:return"keyword";case Ja.name:case Qa.name:case Xa.name:case Za.name:case $a.name:return"enumMember";case gm.name:case ym.name:case FC.name:case bm.name:case _m.name:case es.name:case Rm.name:case kc.name:case Em.name:case Sm.name:case Tm.name:return"property";default:return null}}r(PC,"mapTokenToType");var ts=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),xm=d("actions",{longer_alt:ts,categories:[ts]}),Am=d("active",{longer_alt:ts,categories:[ts]}),km=d("realtime_trigger",{longer_alt:ts,categories:[ts]}),DC=[xm,Am,km];function qC(e){switch(e){case xm.name:case km.name:return"keyword";case Am.name:return"variable";default:return null}}r(qC,"mapTokenToType");var xe=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),vm=d("redis",{longer_alt:xe,categories:[xe]}),Um=d("count",{longer_alt:xe,categories:[xe]}),Cm=d("decr",{longer_alt:xe,categories:[xe]}),Om=d("del",{longer_alt:xe,categories:[xe]}),Lm=d("get",{longer_alt:xe,categories:[xe]}),Nm=d("has",{longer_alt:xe,categories:[xe]}),Mm=d("incr",{longer_alt:xe,categories:[xe]}),wm=d("keys",{longer_alt:xe,categories:[xe]}),Fm=d("pop",{longer_alt:xe,categories:[xe]}),Im=d("push",{longer_alt:xe,categories:[xe]}),Pm=d("range",{longer_alt:xe,categories:[xe]}),Dm=d("ratelimit",{longer_alt:xe,categories:[xe]}),qm=d("remove",{longer_alt:xe,categories:[xe]}),Bm=d("set",{longer_alt:xe,categories:[xe]}),Gm=d("shift",{longer_alt:xe,categories:[xe]}),jm=d("unshift",{longer_alt:xe,categories:[xe]}),BC=[vm,Um,Cm,Om,Lm,Nm,Mm,wm,Fm,Im,Pm,Dm,qm,Bm,Gm,jm];function GC(e){switch(e){case vm.name:case Um.name:case Cm.name:case Om.name:case Lm.name:case Nm.name:case Mm.name:case wm.name:case Fm.name:case Im.name:case Pm.name:case Dm.name:case qm.name:case Bm.name:case Gm.name:case jm.name:return"function";default:return null}}r(GC,"mapTokenToType");var ge=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Vm=d("security",{longer_alt:ge,categories:[ge]}),Wm=d("check_password",{longer_alt:ge,categories:[ge]}),zm=d("create_password",{longer_alt:ge,categories:[ge]}),Hm=d("create_uuid",{longer_alt:ge,categories:[ge]}),Ym=d("create_auth_token",{longer_alt:ge,categories:[ge]}),Km=d("create_curve_key",{longer_alt:ge,categories:[ge]}),Jm=d("create_rsa_key",{longer_alt:ge,categories:[ge]}),Qm=d("create_secret_key",{longer_alt:ge,categories:[ge]}),Xm=d("decrypt",{llt:ge,categories:[ge]}),Zm=d("encrypt",{llt:ge,categories:[ge]}),jC=d("generate_pass",{longer_alt:ge,categories:[ge]}),VC=d("generate_uuid",{longer_alt:ge,categories:[ge]}),$m=d("jwe_decode",{longer_alt:ge,categories:[ge]}),eh=d("jwe_encode",{longer_alt:ge,categories:[ge]}),th=d("jws_decode",{longer_alt:ge,categories:[ge]}),rh=d("jws_encode",{longer_alt:ge,categories:[ge]}),nh=d("random_bytes",{longer_alt:ge,categories:[ge]}),oh=d("random_number",{longer_alt:ge,categories:[ge]}),WC=[Wm,zm,Hm,Ym,Km,Jm,Qm,Xm,Zm,jC,VC,$m,eh,th,rh,nh,oh,Vm];function zC(e){switch(e){case Vm.name:case Wm.name:case zm.name:case Hm.name:case Ym.name:case Km.name:case Jm.name:case Qm.name:case Xm.name:case Zm.name:case jC.name:case VC.name:case $m.name:case eh.name:case th.name:case rh.name:case nh.name:case oh.name:return"function";default:return null}}r(zC,"mapTokenToType");var or=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),ih=d("storage",{longer_alt:or,categories:[or]}),ah=d("create_image",{longer_alt:or,categories:[or]}),sh=d("create_attachment",{longer_alt:or,categories:[or]}),ch=d("read_file_resource",{longer_alt:or,categories:[or]}),lh=d("create_file_resource",{longer_alt:or,categories:[or]}),HC=d("read_file",{longer_alt:or,categories:[or]}),uh=d("delete_file",{longer_alt:or,categories:[or]}),dh=d("sign_private_url",{longer_alt:or,categories:[or]}),YC=[ih,ah,sh,ch,lh,HC,uh,dh];function KC(e){switch(e){case ih.name:case ah.name:case sh.name:case ch.name:case lh.name:case HC.name:case uh.name:case dh.name:return"function";default:return null}}r(KC,"mapTokenToType");var Co=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),fh=d("stream",{longer_alt:Co,categories:[Co]}),ph=d("from_csv",{longer_alt:Co,categories:[Co]}),mh=d("from_jsonl",{longer_alt:Co,categories:[Co]}),hh=d("from_request",{longer_alt:Co,categories:[Co]}),JC=[fh,ph,mh,hh];function QC(e){switch(e){case fh.name:case ph.name:case mh.name:case hh.name:return"function";default:return null}}r(QC,"mapTokenToType");var XC=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Oo=d("table",{longer_alt:XC,categories:[XC]}),ZC=[Oo];function $C(e){switch(e){case Oo.name:return"keyword";default:return null}}r($C,"mapTokenToType");var Lo=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),gh=d("actions",{longer_alt:Lo,categories:[Lo]}),Th=d("active",{longer_alt:Lo,categories:[Lo]}),Eh=d("datasources",{longer_alt:Lo,categories:[Lo]}),Sh=d("table_trigger",{longer_alt:Lo,categories:[Lo]}),eO=[gh,Th,Eh,Sh];function tO(e){switch(e){case gh.name:case Sh.name:return"keyword";case Th.name:case Eh.name:return"variable";default:return null}}r(tO,"mapTokenToType");var ir=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),yh=d("call",{longer_alt:ir,categories:[ir]}),_h=d("datasource",{longer_alt:ir,categories:[ir]}),bh=d("ends_on",{longer_alt:ir,categories:[ir]}),Rh=d("events",{longer_alt:ir,categories:[ir]}),xh=d("freq",{longer_alt:ir,categories:[ir]}),Ah=d("schedule",{longer_alt:ir,categories:[ir]}),vc=d("starts_on",{longer_alt:ir,categories:[ir]}),rs=d("task",{longer_alt:ir,categories:[ir]}),rO=[yh,_h,bh,Rh,xh,Ah,vc,rs];function nO(e){switch(e){case _h.name:case Ah.name:case rs.name:return"keyword";case bh.name:case Rh.name:case xh.name:case vc.name:return"variable";case yh.name:return"function";default:return null}}r(nO,"mapTokenToType");var Xe=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),oO=d("text",{longer_alt:Xe,categories:[Xe]}),kh=d("append",{longer_alt:Xe,categories:[Xe]}),vh=d("contains",{longer_alt:Xe,categories:[Xe]}),Uh=d("ends_with",{longer_alt:Xe,categories:[Xe]}),Ch=d("icontains",{longer_alt:Xe,categories:[Xe]}),Oh=d("iends_with",{longer_alt:Xe,categories:[Xe]}),Lh=d("istarts_with",{longer_alt:Xe,categories:[Xe]}),Nh=d("ltrim",{longer_alt:Xe,categories:[Xe]}),Mh=d("prepend",{longer_alt:Xe,categories:[Xe]}),wh=d("rtrim",{longer_alt:Xe,categories:[Xe]}),Fh=d("starts_with",{longer_alt:Xe,categories:[Xe]}),Ih=d("trim",{longer_alt:Xe,categories:[Xe]}),iO=[oO,kh,vh,Uh,Ch,Oh,Lh,Nh,Mh,wh,Fh,Ih];function aO(e){switch(e){case oO.name:return"namespace";case kh.name:case vh.name:case Uh.name:case Ch.name:case Oh.name:case Lh.name:case Nh.name:case Mh.name:case wh.name:case Fh.name:case Ih.name:return"method";default:return null}}r(aO,"mapTokenToType");var Ze=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Ph=d("util",{longer_alt:Ze,categories:[Ze]}),Dh=d("geo_distance",{longer_alt:Ze,categories:[Ze]}),qh=d("get_all_input",{longer_alt:Ze,categories:[Ze]}),Bh=d("template_engine",{longer_alt:Ze,categories:[Ze]}),Gh=d("get_env",{longer_alt:Ze,categories:[Ze]}),jh=d("get_input",{longer_alt:Ze,categories:[Ze]}),Vh=d("get_vars",{longer_alt:Ze,categories:[Ze]}),Wh=d("ip_lookup",{longer_alt:Ze,categories:[Ze]}),zh=d("post_process",{longer_alt:Ze,categories:[Ze]}),Hh=d("precondition",{longer_alt:Ze,categories:[Ze]}),Yh=d("set_header",{longer_alt:Ze,categories:[Ze]}),Kh=d("sleep",{longer_alt:Ze,categories:[Ze]}),sO=[Ph,Bh,Dh,qh,Gh,jh,Vh,Wh,zh,Hh,Yh,Kh];function cO(e){switch(e){case Ph.name:case Dh.name:case qh.name:case Gh.name:case jh.name:case Vh.name:case Wh.name:case zh.name:case Hh.name:case Yh.name:case Kh.name:case Bh.name:return"function";default:return null}}r(cO,"mapTokenToType");var Jh=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Qh=d("var",{longer_alt:Jh,categories:[Jh]}),Xh=d("update",{longer_alt:Jh,categories:[Jh]}),lO=[Qh,Xh];function uO(e){switch(e){case Qh.name:case Xh.name:return"function";default:return null}}r(uO,"mapTokenToType");var Bt=k({name:"ShortFormVariable",pattern:/(\$[a-zA-Z]\w*)|(\$\$)/,label:"$"}),No=k({name:"ResponseVariable",pattern:/\$response/,label:"$response",categories:[Bt],longer_alt:Bt}),Mo=k({name:"LongFormVariable",pattern:/\$var/,label:"$var",longer_alt:Bt}),dO=k({name:"$this",pattern:/\$this/,longer_alt:Bt,categories:[Bt]}),Zh=k({name:"InputVariable",pattern:/\$input/,longer_alt:Bt}),$h=k({name:"EnvVariable",pattern:/\$env/,label:"$env",longer_alt:Bt}),eg=k({name:"AuthVariable",pattern:/\$auth/,label:"$auth",longer_alt:Bt}),tg=k({name:"$remote_ip",pattern:/\$remote_ip/}),rg=k({name:"$remote_port",pattern:/\$remote_port/}),ng=k({name:"$remote_user",pattern:/\$remote_user/}),og=k({name:"$remote_passwd",pattern:/\$remote_passwd/}),ig=k({name:"$remote_host",pattern:/\$remote_host/}),ag=k({name:"$request_method",pattern:/\$request_method/}),fO=[No,dO,Mo,Zh,$h,eg,tg,rg,ng,og,ig,ag,Bt];function pO(e){switch(e){case Zh.name:case $h.name:case eg.name:case tg.name:case rg.name:case ng.name:case og.name:case ig.name:case ag.name:case No.name:case Mo.name:return"enumMember";case dO.name:case Bt.name:return"variable";default:return null}}r(pO,"mapTokenToType");var sg=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),ns=d("datasource",{longer_alt:sg,categories:[sg]}),cg=d("workflow_test",{longer_alt:sg,categories:[sg]}),mO=[ns,cg];function hO(e){switch(e){case cg.name:return"keyword";case ns.name:return"variable";default:return null}}r(hO,"mapTokenToType");var wo=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),lg=d("acceptance",{longer_alt:wo,categories:[wo]}),ug=d("preferences",{longer_alt:wo,categories:[wo]}),dg=d("realtime",{longer_alt:wo,categories:[wo]}),fg=d("workspace",{longer_alt:wo,categories:[wo]}),gO=[lg,ug,dg,fg];function TO(e){switch(e){case lg.name:case ug.name:case dg.name:case fg.name:return"keyword";default:return null}}r(TO,"mapTokenToType");var os=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),pg=d("actions",{longer_alt:os,categories:[os]}),mg=d("active",{longer_alt:os,categories:[os]}),hg=d("workspace_trigger",{longer_alt:os,categories:[os]}),EO=[pg,mg,hg];function SO(e){switch(e){case pg.name:case hg.name:return"keyword";case mg.name:return"variable";default:return null}}r(SO,"mapTokenToType");var Vr=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),gg=d("zip",{longer_alt:Vr,categories:[Vr]}),Tg=d("add_to_archive",{longer_alt:Vr,categories:[Vr]}),Eg=d("create_archive",{longer_alt:Vr,categories:[Vr]}),Sg=d("delete_from_archive",{longer_alt:Vr,categories:[Vr]}),yg=d("extract",{longer_alt:Vr,categories:[Vr]}),_g=d("view_contents",{longer_alt:Vr,categories:[Vr]}),yO=[gg,Tg,Eg,Sg,yg,_g];function _O(e){switch(e){case gg.name:case Tg.name:case Eg.name:case Sg.name:case yg.name:case _g.name:return"function"}}r(_O,"mapTokenToType");var b=k({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),G=k({name:"Dot",pattern:/\./,label:"."}),bg=d("tags",{longer_alt:b,categories:[b]}),Fo=d("now",{longer_alt:b}),Io=d("null",{longer_alt:b}),Rg=k({name:"RegExpToken",label:"regexp",pattern:/\/(?:[^/\n\\]|\\.)+\//}),xr=k({name:"StaticPathToken",label:"static_path",pattern:/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)+/}),is=k({name:"DynamicPath",label:"dynamic_path",pattern:/(([a-zA-Z]\w*)|(\{[a-zA-Z]\w*\}))((\/[a-zA-Z]\w*)|(\/\{[a-zA-Z]\w*\}))+/}),bO=k({name:"WhiteSpace",pattern:/[ \t]+/,group:nt.SKIPPED,label:"whitespace"}),h=k({name:"NewlineToken",pattern:/(\r?\n)/}),xg=d("type",{longer_alt:b,categories:[b]}),RO=d("field",{longer_alt:b,categories:[b]}),pt=d("true",{longer_alt:b}),mt=d("false",{longer_alt:b}),as=d("input",{longer_alt:b,categories:[b]}),Ag=d("stack",{longer_alt:b,categories:[b]}),kg=d("test",{longer_alt:b,categories:[b]}),vg=d("response",{longer_alt:b,categories:[b]}),Ug=d("view",{longer_alt:b,categories:[b]}),Cg=d("middleware",{longer_alt:b,categories:[b]}),xO=d("return_aggregate",{pattern:/return_aggregate/}),ss=d("auth",{longer_alt:b,categories:[b]}),AO=d("security",{longer_alt:b,categories:[b]}),Og=d("history",{longer_alt:b,categories:[b]}),Lg=d("cache",{longer_alt:b,categories:[b]}),kO=d("guid",{longer_alt:b,categories:[b]}),Ng=d("schema",{longer_alt:b,categories:[b]}),Mg=d("index",{longer_alt:b,categories:[b]}),wg=d("values",{longer_alt:b,categories:[b]}),Fg=d("value",{longer_alt:b,categories:[b]}),Ig=d("sensitive",{longer_alt:b,categories:[b]}),cs=d("description",{longer_alt:b,categories:[b]}),ls=d("disabled",{longer_alt:b,categories:[b]}),Pg=d("mock",{longer_alt:b,categories:[b]}),Dg=d("docs",{longer_alt:b,categories:[b]}),qg=k({name:"DbIdentifier",label:"db.identifier",pattern:/dbo=\d+/}),Uc=k({name:"JsonInToken",pattern:/in/,label:"in",longer_alt:b,categories:[b]}),Cc=Ro([bO,h,...oC,...LC,xr,is,Rg,Mg,as,xO,...GU,...vC,...AC,...DC,...rC,...IC,...SC,...AU,...Pd,qg,wg,Fg,pt,mt,xg,RO,ss,kO,Ig,bg,cs,Dg,ls,Pg,Ng,Ag,kg,Cg,...CC,vg,Io,Fo,Og,Lg,AO,...YC,...yO,...TC,...WC,...sO,...eO,...EO,...rO,...mO,...hC,...KU,...HU,...fO,...QU,...ZC,...eC,...cC,...BC,...iO,...MC,...JC,...uC,...fC,...lO,..._C,...VU,...qU,...RC,...PU,...ZU,...gO,Ug,Uc,G,b]),TW=[DU,WU,BU,jU,JU,YU,XU,$U,FU,tC,nC,iC,kU,lC,dC,pC,gC,EC,yC,bC,kC,UC,OC,NC,wC,PC,qC,GC,zC,KC,QC,$C,tO,nO,aO,xC,cO,uO,pO,hO,TO,SO,_O];function Bg(e){for(let t of TW){let n=t(e);if(n)return n}switch(e){case Lg.name:case Og.name:case Mg.name:case as.name:case Cg.name:case Pg.name:case vg.name:case Ug.name:case Ng.name:case AO.name:case Ag.name:case kg.name:return"keyword";case ss.name:case qg.name:case xO.name:case cs.name:case ls.name:case Dg.name:case is.name:case RO.name:case kO.name:case Ig.name:case xr.name:case bg.name:case xg.name:case Fg.name:case wg.name:return"variable";case b.name:return"property";case mt.name:case Fo.name:case Io.name:case pt.name:return"enumMember";case G.name:return"punctuation";case Rg.name:return"regexp";case Uc.name:return"operator";case h.name:case bO.name:return null;default:return}}r(Bg,"mapTokenToType");var EW=new nt(Cc),SW=new nt([...eS(Cc,jr),IS]);function Po(e,t=!1){return t?SW.tokenize(e):EW.tokenize(e)}r(Po,"lexDocument");var Wr=class{static{r(this,"HoverMessageProvider")}constructor(){this.message="",this.range=null}isMatch(t,n,o){return!1}render(t,n,o){return this.message}};var us=class extends Wr{static{r(this,"FilterMessageProvider")}constructor(t){super(),this.parseFilters(t)}parseFilters(t){this.__filterDoc={};let n=[],o="";for(let i of t.split(`
`))if(i.startsWith("#")){if(o&&(this.__filterDoc[o]=n.join(`
`)),o=i.slice(1).trim(),o.startsWith("!")){let[a,s]=o.slice(1).split(":").map(c=>c.trim()).filter(c=>c);s&&(this.__filterDoc[a]=`\`${a}\` is deprecated, use \`${s}\` instead.`),o=""}n=[]}else n.push(i)}findFilter(t,n){let o=n[t];if(!(o.tokenType.name==="Identifier"||o.tokenType.LONGER_ALT&&o.tokenType.LONGER_ALT.name==="Identifier"||o.tokenType.CATEGORIES&&o.tokenType.CATEGORIES.some(s=>s.name==="Identifier")))return null;let a=o.image;return this.__filterDoc[a]?a:null}isMatch(t,n,o){return t===0||n[t-1].image!=="|"?!1:!!this.findFilter(t,n)}render(t,n){let o=this.findFilter(t,n);if(o)return this.__filterDoc[o]}};var PS=["keyword","namespace","variable","singleString","doubleString","tripleString","method","macro","tripleMacro","property","operator","operator.openingCurly","operator.closingCurly","operator.openingSquare","operator.closingSquare","operator.openingParenthesis","operator.closingParenthesis","function","comment","type","punctuation","regexp","enumMember","number","boolean","bracket"],yW=PS.reduce((e,t,n)=>(e[t]=n,e),{});function Oc(e){return yW[e]}r(Oc,"encodeTokenType");var Gg=["deg2rad","rad2deg","number_format","sin","asin","asinh","cos","acos","acosh","tan","atan","atanh","floor","ceil","round","first","last","count","range","reverse","unique","safe_array","flatten","filter_empty","sort","shuffle","diff","diff_assoc","intersect","intersect_assoc","merge","merge_recursive","index_by","push","pop","unshift","shift","remove","append","prepend","abs","sqrt","exp","log","log10","ln","pow","array_min","min","array_max","max","sum","avg","product","equals","not_equals","greater_than","greater_than_or_equal","less_than","less_than_or_equal","odd","even","in","add","subtract","multiply","modulus","divide","bitwise_and","bitwise_or","bitwise_xor","not","bitwise_not","is_null","is_empty","is_object","is_array","is_int","is_decimal","is_bool","is_text","addslashes","escape","list_encodings","detect_encoding","to_utf8","from_utf8","convert_encoding","to_lower","to_upper","trim","ltrim","rtrim","capitalize","substr","split","join","slice","strlen","strip_html","unaccent","index","iindex","starts_with","istarts_with","ends_with","iends_with","contains","icontains","set","set_conditional","set_ifnotempty","set_ifnotnull","first_notnull","first_notempty","unset","transform","get","has","fill","fill_keys","keys","values","entries","to_expr","to_text","to_int","to_decimal","to_bool","to_timestamp","to_ms","to_seconds","to_minutes","to_hours","to_days","create_object","create_object_from_entries","json_decode","json_encode","xml_decode","csv_parse","csv_decode","csv_encode","csv_create","url_decode","url_decode_rfc3986","url_encode","url_encode_rfc3986","url_addarg","url_delarg","url_hasarg","url_getarg","url_parse","querystring_parse","yaml_decode","yaml_encode","hex2bin","bin2hex","dechex","hexdec","decbin","bindec","decoct","octdec","base_convert","base64_decode","base64_encode","base64_decode_urlsafe","base64_encode_urlsafe","encrypt","decrypt","jws_encode","jws_decode","jwe_encode","jwe_decode","concat","sprintf","replace","secureid_encode","secureid_decode","md5","sha1","sha256","sha384","sha512","hmac_md5","hmac_sha1","hmac_sha256","hmac_sha384","hmac_sha512","create_uid","uuid","parse_timestamp","format_timestamp","transform_timestamp","add_secs_to_timestamp","add_ms_to_timestamp","regex_matches","regex_get_first_match","regex_get_all_matches","regex_quote","regex_replace","map","filter","filter_null","filter_empty_text","filter_empty_object","filter_empty_array","some","every","find","findIndex","reduce","pick","unpick"],DS={text:["trim","min","max","startsWith","prevent","lower","upper","alphaOk","digitOk","ok","pattern"],decimal:["min","max"],int:["min","max"],email:["trim","lower"],password:["min","max","minAlpha","minLowerAlpha","minUpperAlpha","minDigit","minSymbol"],blob:[],blob_img:[],blob_video:[],blob_audio:[],enum:[],file:[],json:[],obj:[],epochms:[]},vO=["covers","l1_distance_manhattan","l2_distance_euclidean","inner_product","negative_inner_product","cosine_distance","cosine_similarity","distance","within","between","length","floor","ceil","round","to_lower","to_upper","concat","substr","coalesce","unaccent","add","sub","mul","div","search_rank","timestamp_month","timestamp_year","timestamp_week","timestamp_hour","timestamp_minute","timestamp_day_of_month","timestamp_day_of_week","timestamp_day_of_year","timestamp_epoch_day","timestamp_epoch_hour","timestamp_epoch_minute","timestamp_epoch_sec","timestamp_add_seconds","timestamp_subtract_seconds","timestamp_add_minutes","timestamp_subtract_minutes","timestamp_add_hours","timestamp_subtract_hours","timestamp_add_days","timestamp_subtract_days","timestamp_add_months","timestamp_subtract_months","timestamp_add_years","timestamp_subtract_years"];function UO(e){return()=>{let t=!1,n=!1,o=!1,i=!1;e.sectionStack.push("addonDeclaration");let a=e.CONSUME(Dd);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),n||e.addMissingError(a,"{} is missing an input clause"),o||e.addMissingError(a,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(UO,"addonDeclaration");var Ce=r(e=>e?e.tokenType===M?e.image.slice(1,-1):e.image:"","getVarName");function CO(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1;e.sectionStack.push("agentDeclaration");let p=e.CONSUME(qd);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.canonicalClause)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0;let g=e.CONSUME(Bd);e.CONSUME(v);let S={anthropic:["type","max_steps","model","temperature","headers"],"google-genai":["type","max_steps","model","temperature","headers","search_grounding","include_thoughts"],openai:["type","max_steps","model","temperature","reasoning_effort"],xano_free:["type","max_steps","temperature","search_grounding"]},A={anthropic:[...S.anthropic,"system_prompt","prompt","messages","api_key","reasoning","thinking_tokens","baseURL"],"google-genai":[...S["google-genai"],"system_prompt","prompt","messages","api_key","thinking_tokens","baseURL","safety_settings","dynamic_retrival","reasoning"],openai:[...S.openai,"system_prompt","prompt","messages","api_key","baseURL","headers","organization","project","compatibility"],"xano-free":[...S.xano_free,"system_prompt","prompt","messages","baseURL","headers","safety_settings","dynamic_retrival","thinking_tokens","include_thoughts"]},O={};e.SUBRULE(e.schemaParseObjectFn,{ARGS:[g,{type:["anthropic","google-genai","openai","xano-free"],max_steps:"[number]","prompt?":"[string]","messages?":"[string]","api_key?":"[string]","baseURL?":"[string]","compatibility?":["strict","compatible",""],"dynamic_retrival?":["enabled","disabled",""],"headers?":"[string]","include_thoughts?":"[boolean]","model?":"[string]","organization?":"[string]","project?":"[string]","reasoning_effort?":"[string]","reasoning?":"[boolean]","safety_settings?":"[string]","search_grounding?":"[boolean]","system_prompt?":"[string]","temperature?":"[number]","thinking_tokens?":"[number]"},O]}),e.ACTION(()=>{let B=Ce(O.type?.value),P=S[B]||[];for(let w of P)Object.prototype.hasOwnProperty.call(O,w)||e.addMissingError(g,`llm of type "${B}" requires a "${w}" field`);let z=A[B]||[],q=[];for(let w in O){let V=Ce(O[w].key);q.push(V),z.includes(V)||e.addIllegalAttributeError(O[w].key)}let _=q.includes("prompt"),E=q.includes("messages");_&&E?e.addIllegalAttributeError(O.messages.key,`llm of type "${B}" cannot have both "prompt" and "messages" fields`):!_&&!E&&e.addMissingError(g,`llm of type "${B}" requires either a "prompt" or "messages" field`)})},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.outputClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0;let g=e.CONSUME(Gd);e.CONSUME2(v),e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[g,["name"],["active","auth"],{types:{active:"boolean",auth:"string",name:"string"}}]})},"ALT")}])}),t||e.addMissingError(p,"{} is missing canonical clause"),a||e.addMissingError(p,"{} is missing llm clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(CO,"agentDeclaration");function OO(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1,g=!1;e.sectionStack.push("agentTriggerDeclaration");let S=e.CONSUME(Wd);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let A=e.CONSUME(jd);e.CONSUME(v),e.SUBRULE(e.objectAttrReq,{ARGS:[A,["connection"],[],{types:{connection:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(Vd),e.CONSUME2(v),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.agentClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!g,"GATE"),ALT:r(()=>{g=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),o||e.addMissingError(S,"{} is missing agent clause"),c||e.addMissingError(S,"{} is missing an input clause"),p||e.addMissingError(S,"{} is missing a stack clause"),u||e.addMissingError(S,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(OO,"agentTriggerDeclaration");function LO(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1;e.sectionStack.push("apiGroupDeclaration");let p=e.CONSUME(of);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(Ea),e.CONSUME1(v),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(af),e.CONSUME2(v),e.CONSUME2(M)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0;let g=e.CONSUME(sf);e.CONSUME3(v),e.SUBRULE(e.objectAttrReq,{ARGS:[g,[],["mode","origins","methods","headers","credentials","max_age"],{types:{mode:"string",origins:r(S=>S.SUBRULE(S.arrayOfStringLiterals),"origins"),methods:r(S=>S.SUBRULE1(S.arrayOfStringLiterals),"methods"),headers:r(S=>S.SUBRULE2(S.arrayOfStringLiterals),"headers"),credentials:"boolean",max_age:"number"}}]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0;let g=e.CONSUME(cf);e.CONSUME4(v),e.SUBRULE2(e.objectAttrReq,{ARGS:[g,[],["active","token"],{active:"boolean",token:"string"}]})},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),n||e.addMissingError(p,"{} is missing a canonical field"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(LO,"apiGroupDeclaration");function NO(e){return()=>{e.sectionStack.push("columnDefaultValueAttribute"),e.CONSUME(v),e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(Yt),"ALT")},{ALT:r(()=>e.CONSUME(ze),"ALT")},{ALT:r(()=>e.CONSUME(pt),"ALT")},{ALT:r(()=>e.CONSUME(mt),"ALT")},{ALT:r(()=>e.CONSUME(Fo),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]),e.sectionStack.pop()}}r(NO,"columnDefaultValueAttribute");function MO(e){return()=>{e.sectionStack.push("descriptionFieldAttribute"),e.CONSUME(cs),e.CONSUME(v),e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(nr),"ALT")}]),e.sectionStack.pop()}}r(MO,"descriptionFieldAttribute");function wO(e){return()=>{e.sectionStack.push("disabledFieldAttribute"),e.CONSUME(ls),e.CONSUME(v),e.OR([{ALT:r(()=>e.CONSUME(pt),"ALT")},{ALT:r(()=>e.CONSUME(mt),"ALT")}]),e.sectionStack.pop()}}r(wO,"disabledFieldAttribute");function FO(e){return()=>{e.sectionStack.push("docsFieldAttribute"),e.CONSUME(Dg),e.CONSUME(v),e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(nr),"ALT")}]),e.sectionStack.pop()}}r(FO,"docsFieldAttribute");function IO(e){return t=>{e.sectionStack.push("inputFilterFn"),e.OR([{ALT:r(()=>{e.OPTION(()=>e.CONSUME(jr));let n=e.CONSUME(b);e.MANY1(()=>{e.CONSUME1(Re),e.OR2([{ALT:r(()=>e.CONSUME2(b),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")},{ALT:r(()=>e.CONSUME1(Rg),"ALT")},{ALT:r(()=>e.CONSUME1(ze),"ALT")},{ALT:r(()=>e.CONSUME1(Yt),"ALT")},{ALT:r(()=>e.CONSUME1(mt),"ALT")},{ALT:r(()=>e.CONSUME1(pt),"ALT")}])}),t&&DS[t.image]&&!DS[t.image].includes(n.image)&&e.addInvalidValueError(n,`Filter '${n.image}' cannot be applied to input of type '${t}'`)},"ALT")},{ALT:r(()=>{e.CONSUME(Dp),e.CONSUME2(Re),e.CONSUME(qg)},"ALT")}]),e.sectionStack.pop()}}r(IO,"inputFilterFn");var PO=r(e=>()=>{e.sectionStack.push("sensitiveFieldAttribute"),e.CONSUME(Ig),e.CONSUME(v),e.OR([{ALT:r(()=>e.CONSUME(pt),"ALT")},{ALT:r(()=>e.CONSUME(mt),"ALT")}]),e.sectionStack.pop()},"sensitiveFieldAttribute");function DO(e){return()=>{e.sectionStack.push("valueFieldAttribute"),e.CONSUME(Fg),e.CONSUME(v),e.SUBRULE(e.valueExpression,{ARGS:[{allowIdentifier:!1}]}),e.sectionStack.pop()}}r(DO,"valueFieldAttribute");function qO(e){return()=>{e.sectionStack.push("valuesFieldAttribute"),e.CONSUME(wg),e.CONSUME(v),e.SUBRULE(e.stringArray),e.sectionStack.pop()}}r(qO,"valuesFieldAttribute");var BO=r(e=>{e.columnDefaultValueAttribute=e.RULE("columnDefaultValueAttribute",NO(e)),e.descriptionFieldAttribute=e.RULE("descriptionFieldAttribute",MO(e)),e.disabledFieldAttribute=e.RULE("disabledFieldAttribute",wO(e)),e.docsFieldAttribute=e.RULE("docsFieldAttribute",FO(e)),e.inputFilterFn=e.RULE("inputFilterFn",IO(e)),e.sensitiveFieldAttribute=e.RULE("sensitiveFieldAttribute",PO(e)),e.valueFieldAttribute=e.RULE("valueFieldAttribute",DO(e)),e.valuesFieldAttribute=e.RULE("valuesFieldAttribute",qO(e))},"register");function GO(e){return()=>{let t=!1,n=!1,o=!1;e.sectionStack.push("branchDeclaration"),e.CONSUME(bf),e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(Rf),e.CONSUME(v),e.CONSUME2(M)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.middlewareClause)},"ALT")}])}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(GO,"branchDeclaration");var jO=r(e=>()=>{e.sectionStack.push("agentClause");let t=e.CONSUME(dp);e.CONSUME(v),e.CONSUME(M).image==='""'&&e.addMissingError(t,"agent cannot be empty"),e.sectionStack.pop()},"agentClause");var VO=r(e=>()=>{e.sectionStack.push("authClause"),e.CONSUME(ss),e.CONSUME(v),e.OR([{ALT:r(()=>e.CONSUME(pt),"ALT")},{ALT:r(()=>e.CONSUME(mt),"ALT")}]),e.sectionStack.pop()},"authClause");function WO(e){return()=>{e.sectionStack.push("cacheClause");let t=e.CONSUME(Lg);e.CONSUME(v),e.SUBRULE(e.objectAttrReq,{ARGS:[t,["ttl","input","auth","datasource","ip"],["headers","env"],{types:{ttl:"number",input:"boolean",auth:"boolean",datasource:"boolean",ip:"boolean"}}]}),e.sectionStack.pop()}}r(WO,"cacheClause");var zO=r(e=>()=>{e.sectionStack.push("canonicalClause");let t=e.CONSUME(mp);e.CONSUME(v),e.CONSUME(M).image==='""'&&e.addMissingError(t,"canonical cannot be empty"),e.sectionStack.pop()},"canonicalClause");var HO=r(e=>()=>{e.sectionStack.push("channelClause");let t=e.CONSUME(pp);e.CONSUME(v),e.CONSUME(M).image==='""'&&e.addMissingError(t,"channel cannot be empty"),e.sectionStack.pop()},"channelClause");var YO=r(e=>()=>{e.sectionStack.push("dbTableClause");let t=e.CONSUME(Oo);e.CONSUME(v),e.CONSUME(M).image==='""'&&e.addMissingError(t,"table cannot be empty"),e.sectionStack.pop()},"dbTableClause");function KO(e){return t=>{let n=t?.[0]||b,o=t?.[1]??!0;e.sectionStack.push(n.name+"Clause"),e.CONSUME(n),e.CONSUME(v);let i=e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(nr),"ALT")}]);o||i.image==='""'&&e.addMissingError(i,"value cannot be empty"),e.sectionStack.pop()}}r(KO,"flexibleStringClause");function JO(e){return()=>{e.sectionStack.push("historyClause");let t=e.CONSUME(Og);e.CONSUME(v),e.SUBRULE(e.schemaParseEnumFn,{ARGS:[t,[!1,"inherit",0,100,1e3,1e4,"all"]]}),e.sectionStack.pop()}}r(JO,"historyClause");function QO(e){return()=>{e.sectionStack.push("indexClause");let t=e.CONSUME(Mg);e.CONSUME(v),e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[t,["type","field"],["name"],{types:{type:"string"}}]}),e.sectionStack.pop()}}r(QO,"indexClause");function XO(e){return()=>{e.sectionStack.push("inputClause"),e.CONSUME(as),e.OPTION(()=>{e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.objectColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.enumColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.columnDefinition,{ARGS:[{include_file:!0}]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbLinkColumnDefinition),"ALT")}])}),e.AT_LEAST_ONE2(()=>e.CONSUME2(h)),e.CONSUME(N)}),e.sectionStack.pop()}}r(XO,"inputClause");var ZO=r(e=>()=>{e.sectionStack.push("mcpServerClause");let t=e.CONSUME(fp);e.CONSUME(v),e.CONSUME(M).image==='""'&&e.addMissingError(t,"mcp_server cannot be empty"),e.sectionStack.pop()},"mcpServerClause");function $O(e){return()=>{e.sectionStack.push("middlewareClause");let t=e.CONSUME(Cg);e.CONSUME(v),e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,{"pre?":[{name:"[string]","active?":"[boolean]","required?":"[boolean]"}],"post?":[{name:"[string]","active?":"[boolean]","required?":"[boolean]"}]}]}),e.sectionStack.pop()}}r($O,"middlewareClause");var qS={allowExpectStatements:!1,allowCallStatements:!1};function eL(e){return(t={})=>{t={...qS,...t},e.sectionStack.push("nakedStackFn"),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.OPTION(()=>e.CONSUME(jr)),e.OR([{ALT:r(()=>e.CONSUME(hp),"ALT")},{ALT:r(()=>e.SUBRULE(e.aiFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.varFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.mathFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.textFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.preconditionFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.objectFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiFn,{ARGS:[t]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.controlFn,{ARGS:[t]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.debugFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.streamFn),"ALT")},{GATE:r(()=>t.allowExpectStatements,"GATE"),ALT:r(()=>e.SUBRULE(e.workflowExpectFn),"ALT")}])}),e.AT_LEAST_ONE2(()=>e.CONSUME2(h)),e.CONSUME(N),e.sectionStack.pop()}}r(eL,"nakedStackFn");function tL(e){return()=>{e.sectionStack.push("outputClause"),e.CONSUME(es),e.OPTION(()=>{e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.objectColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.enumColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.columnDefinition,{ARGS:[{include_file:!1}]}),"ALT")}])}),e.AT_LEAST_ONE2(()=>e.CONSUME2(h)),e.CONSUME(N)}),e.sectionStack.pop()}}r(tL,"outputClause");function rL(e){return()=>{e.sectionStack.push("responseClause"),e.CONSUME(vg),e.CONSUME(v),e.SUBRULE(e.valueExpression),e.sectionStack.pop()}}r(rL,"responseClause");function nL(e){return e.scheduleEventsValues=e.RULE("scheduleEventsValues",()=>{let t=!1,n=!0;e.CONSUME(L),e.AT_LEAST_ONE(()=>{e.MANY(()=>{n=!0,e.CONSUME(h)}),n||e.addMissingError(null,"Expected ',' or new line between attributes"),e.OR([{ALT:r(()=>{t=!0,e.CONSUME(vc),e.CONSUME(Re),e.CONSUME(Wa)},"ALT")},{ALT:r(()=>{e.CONSUME(bh),e.CONSUME2(Re),e.CONSUME2(Wa)},"ALT")},{ALT:r(()=>{e.CONSUME(xh),e.CONSUME3(Re),e.CONSUME(ze)},"ALT")}]),n=!1,e.OPTION1(()=>{e.CONSUME1(Me),n=!0})}),t||(e.CONSUME1(vc),e.CONSUME4(Re),e.CONSUME3(Wa)),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N)}),()=>{e.sectionStack.push("scheduleClause"),e.CONSUME(Ah),e.OPTION(()=>{e.CONSUME(L),e.MANY(()=>e.CONSUME(h)),e.CONSUME(Rh),e.CONSUME(v),e.CONSUME(it),e.MANY1(()=>{e.MANY2(()=>e.CONSUME1(h)),e.SUBRULE(e.scheduleEventsValues)}),e.MANY3(()=>e.CONSUME2(h)),e.CONSUME(at),e.MANY4(()=>e.CONSUME3(h)),e.CONSUME(N)}),e.sectionStack.pop()}}r(nL,"scheduleClause");var _W={include_file:!0,isTableSchema:!1};function oL(e){return(t={},n={})=>{t={..._W,...t},e.sectionStack.push("schemaClause");let o=e.CONSUME(Ng);if(e.OPTION(()=>{e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.objectColumnDefinition,{ARGS:[n]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.enumColumnDefinition,{ARGS:[n]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.columnDefinition,{ARGS:[{include_file:t.include_file,isTableSchema:t.isTableSchema},n]}),"ALT")}])}),e.MANY1(()=>e.CONSUME2(h)),e.CONSUME(N)}),t.isTableSchema){let i=n.id;i?["int","uuid"].includes(i.typeToken.image)||e.addInvalidValueError(i.typeToken,'The "id" column can only be of type "int" or "uuid"'):e.addMissingError(o,"{} must have an 'id' of type uuid or int column defined")}e.sectionStack.pop()}}r(oL,"schemaClause");function iL(e){return(t={})=>{t={...qS,...t},e.sectionStack.push("stackClause"),e.CONSUME(Ag),e.OPTION(()=>e.SUBRULE(e.nakedStackFn,{ARGS:[t]})),e.sectionStack.pop()}}r(iL,"stackClause");function aL(e){return t=>{let n=!1,o=!1;t=t||[],e.sectionStack.push("testClause"),e.CONSUME(kg);let i=e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]);if(i&&i.image){let a=i.image.replaceAll('"',"");t.includes(a)&&e.addDuplicateNameError(i,"test"),t.push(i.image.replaceAll('"',""))}e.CONSUME(L),e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.MANY(()=>{e.OR1([{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(as),e.CONSUME(v),e.SUBRULE(e.objectWithAttributes)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.CONSUME(ns),e.CONSUME1(v),e.CONSUME1(M)},"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectFn),"ALT")}]),e.AT_LEAST_ONE1(()=>e.CONSUME1(h))}),e.CONSUME(N),e.sectionStack.pop()}}r(aL,"testClause");function sL(e){return()=>{e.sectionStack.push("viewClause");let t=e.CONSUME(Ug);e.CONSUME(v),e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,{"[string]":{search:"[query]",sort:{"[string]":["asc","desc","rand"]},id:"[string]","alias?":"[string]"}}]}),e.sectionStack.pop()}}r(sL,"viewClause");var cL=r(e=>{e.agentClause=e.RULE("agentClause",jO(e)),e.authClause=e.RULE("authClause",VO(e)),e.cacheClause=e.RULE("cacheClause",WO(e)),e.canonicalClause=e.RULE("canonicalClause",zO(e)),e.channelClause=e.RULE("channelClause",HO(e)),e.dbTableClause=e.RULE("dbTableClause",YO(e)),e.flexibleStringClause=e.RULE("flexibleStringClause",KO(e)),e.historyClause=e.RULE("historyClause",JO(e)),e.indexClause=e.RULE("indexClause",QO(e)),e.inputClause=e.RULE("inputClause",XO(e)),e.outputClause=e.RULE("outputClause",tL(e)),e.mcpServerClause=e.RULE("mcpServerClause",ZO(e)),e.middlewareClause=e.RULE("middlewareClause",$O(e)),e.nakedStackFn=e.RULE("nakedStackFn",eL(e)),e.responseClause=e.RULE("responseClause",rL(e)),e.scheduleClause=e.RULE("scheduleClause",nL(e)),e.schemaClause=e.RULE("schemaClause",oL(e)),e.stackClause=e.RULE("stackClause",iL(e)),e.testClause=e.RULE("testClause",aL(e)),e.viewClause=e.RULE("viewClause",sL(e))},"register");function lL(e){return()=>{e.sectionStack.push("arraySlice");let t=null,n=null;if(e.OR([{ALT:r(()=>{e.CONSUME(it),e.CONSUME(at)},"ALT")},{ALT:r(()=>{e.CONSUME1(it),t=e.CONSUME1(ze),e.CONSUME1(Re),e.OPTION(()=>n=e.CONSUME3(ze)),e.CONSUME1(at)},"ALT")},{ALT:r(()=>{e.CONSUME2(it),e.CONSUME2(Re),n=e.CONSUME2(ze),e.CONSUME2(at)},"ALT")}]),t&&t.image.startsWith("-")&&e.addInvalidValueError(t,"Array slice start index cannot be negative"),n&&n.image.startsWith("-")&&e.addInvalidValueError(n,"Array slice end index cannot be negative"),t&&n){let o=parseInt(t.image,10);parseInt(n.image,10)<o&&e.addInvalidValueError(n,"Array slice end index cannot be less than start index")}e.sectionStack.pop()}}r(lL,"arraySlice");var bW={include_file:!1,isTableSchema:!1};function uL(e){return(t={},n={})=>{t={...bW,...t};let o=!1,i=!1,a=!1;e.sectionStack.push("columnDefinition");let s=e.OR([{ALT:r(()=>e.CONSUME(Gf),"ALT")},{ALT:r(()=>e.CONSUME(jf),"ALT")},{ALT:r(()=>e.CONSUME(ya),"ALT")},{ALT:r(()=>e.CONSUME(Vf),"ALT")},{ALT:r(()=>e.CONSUME(Wf),"ALT")},{ALT:r(()=>e.CONSUME(Hf),"ALT")},{ALT:r(()=>e.CONSUME(Yf),"ALT")},{ALT:r(()=>e.CONSUME(Kf),"ALT")},{ALT:r(()=>e.CONSUME(Jf),"ALT")},{ALT:r(()=>e.CONSUME(Qf),"ALT")},{ALT:r(()=>e.CONSUME(Xf),"ALT")},{ALT:r(()=>e.CONSUME(ep),"ALT")},{ALT:r(()=>e.CONSUME(tp),"ALT")},{ALT:r(()=>e.CONSUME(rp),"ALT")},{ALT:r(()=>e.CONSUME(np),"ALT")},{ALT:r(()=>e.CONSUME(op),"ALT")},{ALT:r(()=>e.CONSUME(ip),"ALT")},{ALT:r(()=>e.CONSUME(ap),"ALT")},{ALT:r(()=>e.CONSUME(sp),"ALT")},{ALT:r(()=>e.CONSUME(cp),"ALT")},{ALT:r(()=>e.CONSUME(lp),"ALT")},{GATE:r(()=>!!t.include_file,"GATE"),ALT:r(()=>e.CONSUME(Zf),"ALT")}]);e.OPTION1(()=>{i=!0,e.SUBRULE(e.arraySlice)}),e.OPTION2(()=>{o=!0,e.CONSUME(Cr)});let c=e.CONSUME(b);e.OPTION6(()=>{a=!0,e.CONSUME1(Cr)}),e.OPTION3(()=>e.SUBRULE(e.columnDefaultValueAttribute)),e.OPTION4(()=>e.SUBRULE(e.filterDefinition,{ARGS:[s]})),e.OPTION5(()=>e.SUBRULE(e.columnMetadataDefinition)),n[Ce(c)]={typeToken:s,nameToken:c},e.addInput(c.image,s.image,i,o,a),e.sectionStack.pop()}}r(uL,"columnDefinition");function dL(e){return()=>{e.sectionStack.push("dbLinkColumnDefinition");let t=e.CONSUME(up);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{table:"[string]","override?":{"[string]":{hidden:"[boolean]"}}}]}),e.sectionStack.pop()}}r(dL,"dbLinkColumnDefinition");function fL(e){return(t={})=>{e.sectionStack.push("enumColumnDefinition");let n=e.CONSUME(zf),o=!1,i=!1,a=!1;e.OPTION1(()=>{o=!0,e.SUBRULE(e.arraySlice)}),e.OPTION2(()=>{i=!0,e.CONSUME(Cr)});let s=e.CONSUME(b);t[Ce(s)]={typeToken:n,nameToken:s},e.OPTION(()=>{a=!0,e.CONSUME1(Cr)}),e.OPTION3(()=>e.SUBRULE(e.columnDefaultValueAttribute)),e.SUBRULE(e.enumColumnMetadataDefinition,{ARGS:[n]}),e.addInput(s.image,"enum",o,i,a),e.sectionStack.pop()}}r(fL,"enumColumnDefinition");function pL(e){return(t=null)=>{e.sectionStack.push("filterDefinition"),e.CONSUME(Pp),e.CONSUME(v),e.AT_LEAST_ONE_SEP({SEP:wt,DEF:r(()=>e.SUBRULE(e.inputFilterFn,{ARGS:[t]}),"DEF")}),e.sectionStack.pop()}}r(pL,"filterDefinition");function mL(e){return(t={})=>{e.sectionStack.push("objectColumnDefinition");let n=e.CONSUME($f),o=!1,i=!1,a=!1;e.OPTION2(()=>{o=!0,e.SUBRULE(e.arraySlice)});let s=e.CONSUME(b);t[Ce(s)]={typeToken:n,nameToken:s},e.OPTION(()=>{a=!0,e.CONSUME(Cr)}),e.SUBRULE(e.objectColumnMetadataDefinition),e.addInput(s.image,"enum",o,i,a),e.sectionStack.pop()}}r(mL,"objectColumnDefinition");var hL=r(e=>{e.arraySlice=e.RULE("arraySlice",lL(e)),e.columnDefinition=e.RULE("columnDefinition",uL(e)),e.dbLinkColumnDefinition=e.RULE("dbLinkColumnDefinition",dL(e)),e.enumColumnDefinition=e.RULE("enumColumnDefinition",fL(e)),e.filterDefinition=e.RULE("filterDefinition",pL(e)),e.objectColumnDefinition=e.RULE("objectColumnDefinition",mL(e))},"register");function gL(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1,g=[];e.sectionStack.push("functionDeclaration");let S=e.CONSUME(ko);e.OR([{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME(xr),"ALT")},{ALT:r(()=>e.CONSUME(M),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.cacheClause)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[g]})},"ALT")}])}),a||e.addMissingError(S,"{} is missing an input clause"),u||e.addMissingError(S,"{} is missing a stack clause"),c||e.addMissingError(S,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(gL,"functionDeclaration");function TL(e){return()=>{e.sectionStack.push("aiAgentRunFn");let t=e.CONSUME(Ta);e.OR({DEF:[{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME(M),"ALT")}],ERR_MSG:"Expected an agent name"}),e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{"args?":"[expression]","allow_tool_execution?":"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(TL,"aiAgentRunFn");function EL(e){return()=>{e.sectionStack.push("aiExternalMcpServerDetailsFn");let t=e.CONSUME(Xd);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{url:"[expression]",bearer_token:"[expression]",connection_type:"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(EL,"aiExternalMcpServerDetailsFn");function SL(e){return()=>{e.sectionStack.push("aiExternalMcpToolListFn");let t=e.CONSUME(Qd);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{url:"[expression]",bearer_token:"[expression]",connection_type:"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(SL,"aiExternalMcpToolListFn");function yL(e){return()=>{e.sectionStack.push("aiExternalMcpToolRunFn");let t=e.CONSUME(Ta);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{url:"[expression]",bearer_token:"[expression]",connection_type:"[expression]",tool:"[expression]",args:"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(yL,"aiExternalMcpToolRunFn");var _L=r(e=>{e.aiAgentRunFn=e.RULE("aiAgentRunFn",TL(e)),e.aiExternalMcpToolListFn=e.RULE("aiExternalMcpToolListFn",SL(e)),e.aiExternalMcpToolRunFn=e.RULE("aiExternalMcpToolRunFn",yL(e)),e.aiExternalMcpServerDetailsFn=e.RULE("aiExternalMcpServerDetailsFn",EL(e))},"register");function bL(e){return()=>{e.sectionStack.push("ai"),e.CONSUME(zd),e.CONSUME(G),e.OR([{ALT:r(()=>{e.CONSUME(Hd),e.CONSUME1(G),e.SUBRULE(e.aiAgentRunFn)},"ALT")},{ALT:r(()=>{e.CONSUME(Yd),e.CONSUME2(G),e.CONSUME(Kd),e.CONSUME3(G),e.OR1([{ALT:r(()=>e.SUBRULE(e.aiExternalMcpServerDetailsFn),"ALT")},{ALT:r(()=>{e.CONSUME(Jd),e.CONSUME4(G),e.OR2([{ALT:r(()=>e.SUBRULE(e.aiExternalMcpToolListFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.aiExternalMcpToolRunFn),"ALT")}])},"ALT")}])},"ALT")}]),e.sectionStack.pop()}}r(bL,"aiFn");function RL(e){return()=>{e.sectionStack.push("apiCallFn");let t=e.CONSUME(ef);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME(is),"ALT")},{ALT:r(()=>e.CONSUME(xr),"ALT")}]),e.CONSUME(Ka),e.CONSUME(v),e.OR1([{ALT:r(()=>e.CONSUME($a),"ALT")},{ALT:r(()=>e.CONSUME(Ja),"ALT")},{ALT:r(()=>e.CONSUME(Qa),"ALT")},{ALT:r(()=>e.CONSUME(Xa),"ALT")},{ALT:r(()=>e.CONSUME(Za),"ALT")}]),e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{api_group:"[string]","description?":"[string]","disabled?":"[boolean]","headers?":"[expression]","input?":{"[string]":"[expression]"}}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(RL,"apiCallFn");function xL(e){let t=["code","timeout"],n=["description","disabled"];return()=>{e.sectionStack.push("apiLambdaFn");let o=e.CONSUME(nf);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(xL,"apiLambdaFn");function AL(e){let t=["channel","data","auth_table","auth_id"],n=["description","disabled"];return()=>{e.sectionStack.push("apiRealtimeEventFn");let o=e.CONSUME(tf);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(AL,"apiRealtimeEventFn");function kL(e){let t=["url","method"],n=["description","disabled","params","headers","timeout","ca_certificate","certificate","certificate_pass","private_key"];return()=>{e.sectionStack.push("apiRequestFn");let o=e.CONSUME($d);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(kL,"apiRequestFn");function vL(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("apiStreamFn");let o=e.CONSUME(rf);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(vL,"apiStreamFn");var UL=r(e=>{e.apiLambdaFn=e.RULE("apiLambdaFn",xL(e)),e.apiRealtimeEventFn=e.RULE("apiRealtimeEventFn",AL(e)),e.apiRequestFn=e.RULE("apiRequestFn",kL(e)),e.apiStreamFn=e.RULE("apiStreamFn",vL(e)),e.apiCallFn=e.RULE("apiCallFn",RL(e))},"register");function CL(e){return(t={})=>{e.sectionStack.push("api"),e.CONSUME(Zd),e.CONSUME(G),e.OR([{GATE:r(()=>t.allowCallStatements,"GATE"),ALT:r(()=>e.SUBRULE(e.apiCallFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiLambdaFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiRequestFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiRealtimeEventFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiStreamFn),"ALT")}]),e.sectionStack.pop()}}r(CL,"apiFn");function OL(e){return()=>{e.sectionStack.push("arrayEveryFn"),e.CONSUME(uf),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(OL,"arrayEveryFn");function LL(e){return()=>{e.sectionStack.push("arrayFilterCountFn"),e.CONSUME(df),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(LL,"arrayFilterCountFn");function NL(e){return()=>{e.sectionStack.push("arrayFilterFn"),e.CONSUME(ff),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(NL,"arrayFilterFn");function ML(e){return()=>{e.sectionStack.push("arrayFindFn"),e.CONSUME(pf),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(ML,"arrayFindFn");function wL(e){return()=>{e.sectionStack.push("arrayFindIndexFn"),e.CONSUME(mf),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(wL,"arrayFindIndexFn");function FL(e){return()=>{e.sectionStack.push("arrayHasFn"),e.CONSUME(hf),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(FL,"arrayHasFn");function IL(e){return()=>{e.sectionStack.push("arrayMergeFn"),e.CONSUME(gf),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayValueOnly),e.sectionStack.pop()}}r(IL,"arrayMergeFn");function PL(e){return()=>{e.sectionStack.push("arrayNoValueAs"),e.OPTION(()=>{e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),e.OPTION1(()=>e.CONSUME1(h)),e.CONSUME(N)}),e.CONSUME(tr),e.SUBRULE(e.variableOnly),e.sectionStack.pop()}}r(PL,"arrayNoValueAs");function DL(e){return()=>{e.sectionStack.push("arrayPopFn"),e.CONSUME(Tf),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayNoValueAs),e.sectionStack.pop()}}r(DL,"arrayPopFn");function qL(e){return()=>{e.sectionStack.push("arrayPushFn"),e.CONSUME(Ef),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayValueOnly),e.sectionStack.pop()}}r(qL,"arrayPushFn");function BL(e){return()=>{e.sectionStack.push("arrayShiftFn"),e.CONSUME(Sf),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayNoValueAs),e.sectionStack.pop()}}r(BL,"arrayShiftFn");function GL(e){return()=>{e.sectionStack.push("arrayUnshiftFn"),e.CONSUME(yf),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayValueOnly),e.sectionStack.pop()}}r(GL,"arrayUnshiftFn");function jL(e){return()=>{e.sectionStack.push("arrayValueAs");let t=!1;e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.OPTION1(()=>e.CONSUME1(h)),e.CONSUME(N),e.CONSUME(tr),e.SUBRULE(e.assignableVariableAs),e.sectionStack.pop()}}r(jL,"arrayValueAs");function VL(e){return()=>{e.sectionStack.push("arrayValueIfAs"),e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.CONSUME(da),e.CONSUME1(ye),e.SUBRULE1(e.valueExpression),e.CONSUME1(pe),e.OPTION(()=>{e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),e.OPTION1(()=>e.CONSUME1(h)),e.CONSUME(N)}),e.CONSUME(tr),e.SUBRULE(e.assignableVariableAs),e.sectionStack.pop()}}r(VL,"arrayValueIfAs");function WL(e){return()=>{e.sectionStack.push("arrayValueOnly");let t=!1;e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.OPTION1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(WL,"arrayValueOnly");function zL(e){return t=>{e.sectionStack.push("valueAttrOnly");let n=!1,o=!1,i=!1;e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>{n=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),n||e.addMissingError(t,"{} is missing a stack clause"),e.OPTION1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(zL,"valueAttrOnly");var HL=r(e=>{e.arrayEveryFn=e.RULE("arrayEveryFn",OL(e)),e.arrayFilterCountFn=e.RULE("arrayFilterCountFn",LL(e)),e.arrayFilterFn=e.RULE("arrayFilterFn",NL(e)),e.arrayFindFn=e.RULE("arrayFindFn",ML(e)),e.arrayFindIndexFn=e.RULE("arrayFindIndexFn",wL(e)),e.arrayHasFn=e.RULE("arrayHasFn",FL(e)),e.arrayMergeFn=e.RULE("arrayMergeFn",IL(e)),e.arrayNoValueAs=e.RULE("arrayNoValueAs",PL(e)),e.arrayPopFn=e.RULE("arrayPopFn",DL(e)),e.arrayPushFn=e.RULE("arrayPushFn",qL(e)),e.arrayShiftFn=e.RULE("arrayShiftFn",BL(e)),e.arrayUnshiftFn=e.RULE("arrayUnshiftFn",GL(e)),e.arrayValueAs=e.RULE("arrayValueAs",jL(e)),e.arrayValueIfAs=e.RULE("arrayValueIfAs",VL(e)),e.arrayValueOnly=e.RULE("arrayValueOnly",WL(e)),e.valueAttrOnly=e.RULE("valueAttrOnly",zL(e))},"register");function YL(e){return()=>{e.sectionStack.push("array"),e.CONSUME(lf),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.arrayEveryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFilterCountFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFilterFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFindFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFindIndexFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayHasFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayShiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayPopFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayUnshiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayPushFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayMergeFn),"ALT")}]),e.sectionStack.pop()}}r(YL,"arrayFn");function KL(e){return()=>{e.sectionStack.push("cloudAlgoliaFn"),e.CONSUME(Af),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudAlgoliaRequestFn),"ALT")}]),e.sectionStack.pop()}}r(KL,"cloudAlgoliaFn");function JL(e){return()=>{e.sectionStack.push("cloudAlgoliaRequestFn");let t=e.CONSUME(Sa);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{"description?":"[string]","application_id?":"[expression]","api_key?":"[expression]",url:"[expression]","method?":["POST","GET"],payload:"[expression]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(JL,"cloudAlgoliaRequestFn");function QL(e){return()=>{e.sectionStack.push("cloudAwsFn"),e.CONSUME(vf),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudAwsS3Fn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAwsOpenSearchFn),"ALT")}]),e.sectionStack.pop()}}r(QL,"cloudAwsFn");function XL(e){return()=>{e.sectionStack.push("cloudAwsOpenSearchFn"),e.CONSUME(Df),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudSearchDocumentFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchRequestFn),"ALT")}]),e.sectionStack.pop()}}r(XL,"cloudAwsOpenSearchFn");function ZL(e){return()=>{e.sectionStack.push("cloudAwsS3Fn"),e.CONSUME(Ff),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudListDirectoryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSignUrlFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudUploadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudDeleteFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudReadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudGetFileInfoFn),"ALT")}]),e.sectionStack.pop()}}r(ZL,"cloudAwsS3Fn");function $L(e){return()=>{e.sectionStack.push("cloudAzureFn"),e.CONSUME(Cf),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudStorageFn),"ALT")}]),e.sectionStack.pop()}}r($L,"cloudAzureFn");function eN(e){return()=>{e.sectionStack.push("cloudDeleteFileFn"),e.CONSUME(Nf),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(eN,"cloudDeleteFileFn");function tN(e){return()=>{e.sectionStack.push("cloudElasticSearchFn"),e.CONSUME(Uf),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudSearchDocumentFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchRequestFn),"ALT")}]),e.sectionStack.pop()}}r(tN,"cloudElasticSearchFn");function rN(e){return()=>{e.sectionStack.push("cloudGetFileInfoFn");let t=e.CONSUME(Mf);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(rN,"cloudGetFileInfoFn");function nN(e){return()=>{e.sectionStack.push("cloudGoogleFn"),e.CONSUME(kf),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudStorageFn),"ALT")}]),e.sectionStack.pop()}}r(nN,"cloudGoogleFn");function oN(e){return()=>{e.sectionStack.push("cloudListDirectoryFn");let t=e.CONSUME(wf);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(oN,"cloudListDirectoryFn");function iN(e){return()=>{e.sectionStack.push("cloudReadFileFn");let t=e.CONSUME(Lf);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(iN,"cloudReadFileFn");function aN(e){return()=>{e.sectionStack.push("cloudSearchDocumentFn");let t=e.CONSUME(qf);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(aN,"cloudSearchDocumentFn");function sN(e){return()=>{e.sectionStack.push("cloudSearchQueryFn");let t=e.CONSUME(Bf);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(sN,"cloudSearchQueryFn");function cN(e){return()=>{e.sectionStack.push("cloudSearchRequestFn");let t=e.CONSUME(Sa);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(cN,"cloudSearchRequestFn");function lN(e){return()=>{e.sectionStack.push("cloudSignUrlFn");let t=e.CONSUME(If);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(lN,"cloudSignUrlFn");function uN(e){return()=>{e.sectionStack.push("cloudStorageFn"),e.CONSUME(Of),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudListDirectoryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSignUrlFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudUploadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudDeleteFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudReadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudGetFileInfoFn),"ALT")}]),e.sectionStack.pop()}}r(uN,"cloudStorageFn");function dN(e){return()=>{e.sectionStack.push("cloudUploadFileFn"),e.CONSUME(Pf),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(dN,"cloudUploadFileFn");var fN=r(e=>{e.cloudAlgoliaFn=e.RULE("cloudAlgoliaFn",KL(e)),e.cloudAlgoliaRequestFn=e.RULE("cloudAlgoliaRequestFn",JL(e)),e.cloudAwsFn=e.RULE("cloudAwsFn",QL(e)),e.cloudAwsOpenSearchFn=e.RULE("cloudAwsOpenSearchFn",XL(e)),e.cloudAwsS3Fn=e.RULE("cloudAwsS3Fn",ZL(e)),e.cloudAzureFn=e.RULE("cloudAzureFn",$L(e)),e.cloudDeleteFileFn=e.RULE("cloudDeleteFileFn",eN(e)),e.cloudElasticSearchFn=e.RULE("cloudElasticSearchFn",tN(e)),e.cloudGetFileInfoFn=e.RULE("cloudGetFileInfoFn",rN(e)),e.cloudGoogleFn=e.RULE("cloudGoogleFn",nN(e)),e.cloudListDirectoryFn=e.RULE("cloudListDirectoryFn",oN(e)),e.cloudReadFileFn=e.RULE("cloudReadFileFn",iN(e)),e.cloudSearchDocumentFn=e.RULE("cloudSearchDocumentFn",aN(e)),e.cloudSearchQueryFn=e.RULE("cloudSearchQueryFn",sN(e)),e.cloudSearchRequestFn=e.RULE("cloudSearchRequestFn",cN(e)),e.cloudSignUrlFn=e.RULE("cloudSignUrlFn",lN(e)),e.cloudStorageFn=e.RULE("cloudStorageFn",uN(e)),e.cloudUploadFileFn=e.RULE("cloudUploadFileFn",dN(e))},"register");function pN(e){return()=>{e.sectionStack.push("cloud"),e.CONSUME(xf),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudGoogleFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAwsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudElasticSearchFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAzureFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAlgoliaFn),"ALT")}]),e.sectionStack.pop()}}r(pN,"cloudFn");function mN(e){return(t={})=>{e.OR([{ALT:r(()=>e.CONSUME(ma),"ALT")},{ALT:r(()=>e.CONSUME(vd),"ALT")},{ALT:r(()=>e.SUBRULE(e.awaitFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.conditionalFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.forEachFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.forFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.functionRunFn),"ALT")},{GATE:r(()=>t.allowFunctionCalls,"GATE"),ALT:r(()=>e.SUBRULE(e.functionCallFn),"ALT")},{GATE:r(()=>t.allowFunctionCalls,"GATE"),ALT:r(()=>e.SUBRULE(e.taskCallFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.groupFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.returnFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.switchFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.whileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.throwFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.tryCatchFn),"ALT")}]),e.sectionStack.pop()}}r(mN,"controlFn");function hN(e){let t=["ids","timeout"],n=["description","disabled"];return()=>{e.sectionStack.push("awaitFn");let o=e.CONSUME(Sd);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(hN,"awaitFn");function gN(e){return()=>{e.sectionStack.push("conditionalElifFn"),e.CONSUME(hd),e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.OPTION(()=>e.SUBRULE(e.nakedStackFn)),e.sectionStack.pop()}}r(gN,"conditionalElifFn");function TN(e){return()=>{e.sectionStack.push("conditionalElseFn"),e.CONSUME(md),e.SUBRULE(e.nakedStackFn),e.sectionStack.pop()}}r(TN,"conditionalElseFn");function EN(e){return()=>{let t=!1,n=!1,o=!1;e.sectionStack.push("conditionalFn");let i=e.CONSUME(pd);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.disabledFieldAttribute)},"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.conditionalIfFn),e.MANY1(()=>{e.MANY3(()=>e.CONSUME3(h)),e.SUBRULE(e.conditionalElifFn)}),e.OPTION(()=>{e.MANY4(()=>e.CONSUME4(h)),e.SUBRULE(e.conditionalElseFn)})},"ALT")}])}),t||e.addMissingError(i,"{} is missing the if statement"),e.MANY2(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(EN,"conditionalFn");function SN(e){return()=>{e.sectionStack.push("conditionalIfFn"),e.CONSUME(da),e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.OPTION(()=>e.SUBRULE(e.nakedStackFn)),e.sectionStack.pop()}}r(SN,"conditionalIfFn");function yN(e){return()=>{let t=!1;e.sectionStack.push("forEachFn"),e.CONSUME(Td),e.OR([{ALT:r(()=>{e.CONSUME(G),e.CONSUME(Ed)},"ALT")},{ALT:r(()=>{e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.OPTION(()=>{e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR1([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(nn),e.CONSUME(tr),e.SUBRULE(e.assignableVariableAs),e.OPTION1(()=>e.SUBRULE1(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME1(nn),e.CONSUME1(tr),e.SUBRULE(e.assignableVariableAs),e.OPTION2(()=>e.SUBRULE2(e.nakedStackFn))),e.MANY2(()=>e.CONSUME1(h)),e.CONSUME(N)})},"ALT")}]),e.sectionStack.pop()}}r(yN,"forEachFn");function _N(e){return()=>{let t=!1;e.sectionStack.push("forFn"),e.CONSUME(gd),e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.OPTION(()=>{e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(nn),e.CONSUME(tr),e.SUBRULE(e.assignableVariableAs),e.OPTION1(()=>e.SUBRULE1(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME1(nn),e.CONSUME1(tr),e.SUBRULE(e.assignableVariableAs),e.OPTION2(()=>e.SUBRULE2(e.nakedStackFn))),e.MANY2(()=>e.CONSUME1(h)),e.CONSUME(N)}),e.sectionStack.pop()}}r(_N,"forFn");function bN(e){let t=[],n=["input","description","disabled"];return()=>{e.sectionStack.push("functionCallFn"),e.CONSUME(ko),e.CONSUME(G);let o=e.CONSUME(Bp);e.OR([{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME(xr),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}]),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["input"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(bN,"functionCallFn");function RN(e){return()=>{e.sectionStack.push("functionRunFn"),e.CONSUME(ko),e.CONSUME(G);let t=e.CONSUME(qp);e.OR([{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME(xr),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}]),e.OPTION(()=>{e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{"input?":{"[string]":"[expression]"},"description?":"[string]","disabled?":"[boolean]"}]})}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(RN,"functionRunFn");function xN(e){return()=>{let t=!1;e.sectionStack.push("groupFn"),e.CONSUME(pa),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.SUBRULE(e.stackClause)},"ALT")}])}),t||e.SUBRULE(e.stackClause),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(xN,"groupFn");function AN(e){return()=>{let t=[],n=["description","disabled","error_type","error","payload"];e.sectionStack.push("preconditionFn");let o=e.CONSUME(Hh);e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(AN,"preconditionFn");function kN(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("return");let o=e.CONSUME(fa);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(kN,"returnFn");function vN(e){return()=>{e.sectionStack.push("switchCaseFn"),e.CONSUME(Rd),e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.OPTION(()=>e.SUBRULE(e.nakedStackFn)),e.OPTION1(()=>e.CONSUME(ma)),e.sectionStack.pop()}}r(vN,"switchCaseFn");function UN(e){return()=>{e.sectionStack.push("switchDefaultFn"),e.CONSUME(xd),e.SUBRULE(e.nakedStackFn),e.sectionStack.pop()}}r(UN,"switchDefaultFn");function CN(e){return()=>{e.sectionStack.push("switchFn"),e.CONSUME(bd),e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.OPTION(()=>{e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{e.MANY1(()=>{e.MANY3(()=>e.CONSUME3(h)),e.SUBRULE(e.switchCaseFn)})},"ALT")}])}),e.OPTION1(()=>{e.MANY4(()=>e.CONSUME4(h)),e.SUBRULE(e.switchDefaultFn)}),e.MANY2(()=>e.CONSUME1(h)),e.CONSUME(N)}),e.sectionStack.pop()}}r(CN,"switchFn");function ON(e){let t=[],n=["description","disabled"];return()=>{e.sectionStack.push("taskCallFn"),e.CONSUME(rs),e.CONSUME(G);let o=e.CONSUME(yh);e.OR([{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME(xr),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}]),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(ON,"taskCallFn");function LN(e){let t=["value","name"],n=["description","disabled"];return()=>{e.sectionStack.push("throw");let o=e.CONSUME(kd);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(LN,"throwFn");function NN(e){return()=>{let t=!1,n=!1;e.sectionStack.push("tryCatchFn"),e.CONSUME(yd),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(nc),e.OPTION(()=>e.SUBRULE(e.nakedStackFn))},"ALT")},{ALT:r(()=>{n=!0,e.CONSUME(oc),e.OPTION1(()=>e.SUBRULE1(e.nakedStackFn))},"ALT")},{ALT:r(()=>{e.CONSUME(_d),e.OPTION2(()=>e.SUBRULE2(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME(nc),e.SUBRULE(e.nakedStackFn)),n||(e.CONSUME(oc),e.SUBRULE(e.nakedStackFn)),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(NN,"tryCatchFn");function MN(e){return()=>{let t=!1;e.sectionStack.push("whileFn"),e.CONSUME(Ad),e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.OPTION(()=>{e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(nn),e.OPTION1(()=>e.SUBRULE(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME(nn),e.SUBRULE(e.nakedStackFn)),e.MANY2(()=>e.CONSUME1(h)),e.CONSUME(N)}),e.sectionStack.pop()}}r(MN,"whileFn");var wN=r(e=>{e.awaitFn=e.RULE("awaitFn",hN(e)),e.conditionalElifFn=e.RULE("conditionalElifFn",gN(e)),e.conditionalElseFn=e.RULE("conditionalElseFn",TN(e)),e.conditionalFn=e.RULE("conditionalFn",EN(e)),e.conditionalIfFn=e.RULE("conditionalIfFn",SN(e)),e.forEachFn=e.RULE("forEachFn",yN(e)),e.forFn=e.RULE("forFn",_N(e)),e.functionRunFn=e.RULE("functionRunFn",RN(e)),e.functionCallFn=e.RULE("functionCallFn",bN(e)),e.taskCallFn=e.RULE("taskCallFn",ON(e)),e.groupFn=e.RULE("groupFn",xN(e)),e.preconditionFn=e.RULE("preconditionFn",AN(e)),e.returnFn=e.RULE("returnFn",kN(e)),e.switchCaseFn=e.RULE("switchCaseFn",vN(e)),e.switchDefaultFn=e.RULE("switchDefaultFn",UN(e)),e.switchFn=e.RULE("switchFn",CN(e)),e.throwFn=e.RULE("throwFn",LN(e)),e.tryCatchFn=e.RULE("tryCatchFn",NN(e)),e.whileFn=e.RULE("whileFn",MN(e))},"register");function FN(e){return()=>{let t=["data"],n=["description","disabled","addon"];e.sectionStack.push("dbAddFn");let o=e.CONSUME(Sp);e.OR({DEF:[{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["data"],allowArray:["data","addon"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(FN,"dbAddFn");function IN(e){return()=>{let t=["field_value","field_name","data"],n=["description","disabled","addon"];e.sectionStack.push("dbAddOrEditFn");let o=e.CONSUME(yp);e.OR({DEF:[{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["data"],allowArray:["data","addon"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(IN,"dbAddOrEditFn");function PN(e){return()=>{let t=["field_value","field_name"],n=["description","disabled"];e.sectionStack.push("dbDelFn");let o=e.CONSUME(_p);e.OR({DEF:[{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(PN,"dbDelFn");function DN(e){return()=>{let t=["sql","response_type"],n=["description","disabled","arg"];e.sectionStack.push("dbDirectQueryFn");let o=e.CONSUME(_a);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowDuplicates:["arg"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(DN,"dbDirectQueryFn");function qN(e){return()=>{let t=["field_value","field_name","data"],n=["description","disabled","addon"];e.sectionStack.push("dbEditFn");let o=e.CONSUME(bp);e.OR({DEF:[{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowArray:["addon"],types:{data:"object",description:"string",disabled:"boolean",field_name:"string"}}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(qN,"dbEditFn");function BN(e){return()=>{let t=["code","response_type","connection_string"],n=["description","disabled","arg"];e.sectionStack.push("dbExternalDirectQueryFn");let o=e.CONSUME(_a);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowDuplicates:["arg"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(BN,"dbExternalDirectQueryFn");function GN(e){return()=>{e.sectionStack.push("dbExternalFn"),e.CONSUME(Cp),e.CONSUME(G),e.OR([{ALT:r(()=>e.CONSUME(Op),"ALT")},{ALT:r(()=>e.CONSUME(Lp),"ALT")},{ALT:r(()=>e.CONSUME(Mp),"ALT")},{ALT:r(()=>e.CONSUME(Np),"ALT")}]),e.CONSUME1(G),e.SUBRULE(e.dbExternalDirectQueryFn),e.sectionStack.pop()}}r(GN,"dbExternalFn");function jN(e){return()=>{let t=["field_value","field_name"],n=["description","disabled","addon","output"];e.sectionStack.push("dbGetFn");let o=e.CONSUME(Ep);e.OR({DEF:[{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowArray:["addon","output"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(jN,"dbGetFn");function VN(e){return()=>{let t=["field_value","field_name"],n=["description","disabled"];e.sectionStack.push("dbHasFn");let o=e.CONSUME(Rp);e.OR({DEF:[{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(VN,"dbHasFn");function WN(e){return()=>{let t=["field_value","field_name","data"],n=["description","disabled","addon"];e.sectionStack.push("dbPatchFn");let o=e.CONSUME(xp);e.OR({DEF:[{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["data"],allowArray:["data","addon"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(WN,"dbPatchFn");function zN(e){return e.requireRules(xW,kW,UW,CW,RW,MW,AW,vW,LW,OW,NW),()=>{e.sectionStack.push("dbQueryFn");let t=e.CONSUME(Tp);e.OR([{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}]);let n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1,g=!1,S=!1,A=!1,O=!1;e.OPTION(()=>{e.CONSUME(L),e.MANY(()=>e.CONSUME(h)),e.MANY1(()=>{e.OR1([{GATE:r(()=>!g,"GATE"),ALT:r(()=>{g=!0,e.SUBRULE(e.dbQueryFnEval)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.dbQueryFnReturn)},"ALT")},{GATE:r(()=>!O,"GATE"),ALT:r(()=>{O=!0,e.SUBRULE(e.mockAttribute)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.dbQueryFnAddOn)},"ALT")},{GATE:r(()=>!S,"GATE"),ALT:r(()=>{S=!0,e.SUBRULE(e.dbQueryFnSort)},"ALT")},{GATE:r(()=>!A,"GATE"),ALT:r(()=>{A=!0,e.SUBRULE(e.dbQueryFnOverrideSort)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.dbQueryFnOutput)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.dbQueryFnWhere)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.dbQueryFnAdditionalWhere)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.dbJoinFn)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.dbQueryFnDisabled)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.dbQueryFnDescription)},"ALT")}])}),e.MANY2(()=>e.CONSUME2(h)),e.CONSUME(N)}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(zN,"dbQueryFn");function RW(e){return()=>{e.CONSUME(gm),e.CONSUME(v),e.SUBRULE(e.valueExpression,{ARGS:[{allowQueryExpression:!0,allowOptionalIfNull:!0}]}),e.MANY(()=>e.CONSUME(h))}}r(RW,"dbQueryFnWhere");function xW(e){return()=>{let t=e.CONSUME(ym);e.CONSUME(v),e.SUBRULE(e.schemaFn,{ARGS:[t,{"[string]":{table:"[string]","type?":["inner","left","right"],"where?":"[query]"}}]}),e.MANY(()=>e.CONSUME(h))}}r(xW,"dbJoinFn");function AW(e){let t={"[string]":{name:"[string]",input:{"[string]":"[expression]"},"output?":["[string]"]}};return t["[string]"]["addon?"]=t,()=>{let n=e.CONSUME(Rm);e.CONSUME(v),e.SUBRULE(e.schemaFn,{ARGS:[n,t]}),e.MANY2(()=>e.CONSUME2(h))}}r(AW,"dbQueryFnAddOn");function kW(e){return()=>{e.CONSUME(ls),e.CONSUME(v),e.OR([{ALT:r(()=>e.CONSUME(mt),"ALT")},{ALT:r(()=>e.CONSUME(pt),"ALT")}]),e.MANY(()=>e.CONSUME(h))}}r(kW,"dbQueryFnDisabled");function vW(e){return()=>{let t=e.CONSUME(kc);e.CONSUME(v),e.SUBRULE(e.schemaFn,{ARGS:[t,{"[string]":"[query]"}]}),e.MANY(()=>e.CONSUME(h))}}r(vW,"dbQueryFnEval");function UW(e){return()=>{e.CONSUME(cs),e.CONSUME(v),e.CONSUME(M),e.MANY(()=>e.CONSUME(h))}}r(UW,"dbQueryFnDescription");function CW(e){return()=>{let t=e.CONSUME(es);e.CONSUME(v),e.SUBRULE(e.schemaFn,{ARGS:[t,["[string]"]]}),e.MANY(()=>e.CONSUME(h))}}r(CW,"dbQueryFnOutput");function OW(e){return()=>{let t=e.CONSUME(Em);e.CONSUME(v),e.SUBRULE(e.schemaFn,{ARGS:[t,{"[string]":["asc","desc","rand"]}]}),e.MANY(()=>e.CONSUME(h))}}r(OW,"dbQueryFnSort");function LW(e){return()=>{e.CONSUME(Sm),e.CONSUME(v),e.SUBRULE(e.valueExpression),e.MANY(()=>e.CONSUME(h))}}r(LW,"dbQueryFnOverrideSort");function NW(e){return()=>{e.CONSUME(Tm),e.CONSUME(v),e.SUBRULE(e.valueExpression,{ARGS:[{allowQueryExpression:!0,allowOptionalIfNull:!0}]}),e.MANY(()=>e.CONSUME(h))}}r(NW,"dbQueryFnAdditionalWhere");function MW(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1;e.CONSUME(fa),e.CONSUME(v),e.CONSUME(L),e.MANY(()=>e.CONSUME(h));let s=!1,c=null;e.MANY1(()=>{s&&e.addMissingError(null,"Expected a separator between attributes"),e.OR({IGNORE_AMBIGUITIES:!0,DEF:[{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let u=e.CONSUME(xg);e.CONSUME(Re),e.SUBRULE(e.schemaFn,{ARGS:[u,["list","stream","exists","count","single","aggregate"]]}),c=Ce(e.LA(0))},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0;let u=e.CONSUME1(_m);e.CONSUME1(Re),e.SUBRULE1(e.schemaFn,{ARGS:[u,{"page?":"[expression]","per_page?":"[expression]","offset?":"[expression]","totals?":"[boolean]","metadata?":"[boolean]"}]})},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0;let u=e.CONSUME(bm);e.CONSUME2(Re),e.SUBRULE2(e.schemaFn,{ARGS:[u,["yes","no"]]})},"ALT")},{GATE:r(()=>!i&&c&&c==="aggregate","GATE"),ALT:r(()=>{i=!0;let u=e.CONSUME(pa);e.CONSUME3(Re),e.SUBRULE3(e.schemaFn,{ARGS:[u,{"[string]":"[query]"}]})},"ALT")},{GATE:r(()=>!a&&c&&c==="aggregate","GATE"),ALT:r(()=>{a=!0;let u=e.CONSUME(kc);e.CONSUME4(Re),e.SUBRULE4(e.schemaFn,{ARGS:[u,{"[string]":"[expression]"}]})},"ALT")}]}),s=!0,e.OPTION(()=>{s=!1,e.CONSUME1(Me)}),e.MANY9(()=>{s=!1,e.CONSUME1(h)})}),e.CONSUME(N),e.MANY2(()=>e.CONSUME3(h))}}r(MW,"dbQueryFnReturn");function HN(e){return()=>{let t=[],n=["description","disabled","path"];e.sectionStack.push("dbSchemaFn");let o=e.CONSUME(Ap);e.OR([{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}]),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(HN,"dbSchemaFn");function YN(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("dbSetDatasourceFn");let o=e.CONSUME(Up);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(YN,"dbSetDatasourceFn");function KN(e){return()=>{let t=!1;e.sectionStack.push("dbTransactionFn"),e.CONSUME(kp),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.SUBRULE(e.stackClause)},"ALT")}])}),t||e.SUBRULE(e.stackClause),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(KN,"dbTransactionFn");function JN(e){return()=>{let t=[],n=["description","disabled","reset"];e.sectionStack.push("dbTruncateFn");let o=e.CONSUME(vp);e.OR({DEF:[{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(JN,"dbTruncateFn");var QN=r(e=>{e.dbAddFn=e.RULE("dbAddFn",FN(e)),e.dbDelFn=e.RULE("dbDelFn",PN(e)),e.dbDirectQueryFn=e.RULE("dbDirectQueryFn",DN(e)),e.dbEditFn=e.RULE("dbEditFn",qN(e)),e.dbExternalDirectQueryFn=e.RULE("dbExternalDirectQueryFn",BN(e)),e.dbExternalFn=e.RULE("dbExternalFn",GN(e)),e.dbGetFn=e.RULE("dbGetFn",jN(e)),e.dbHasFn=e.RULE("dbHasFn",VN(e)),e.dbPatchFn=e.RULE("dbPatchFn",WN(e)),e.dbQueryFn=e.RULE("dbQueryFn",zN(e)),e.dbSchemaFn=e.RULE("dbSchemaFn",HN(e)),e.dbSetDatasourceFn=e.RULE("dbSetDatasourceFn",YN(e)),e.dbTransactionFn=e.RULE("dbTransactionFn",KN(e)),e.dbTruncateFn=e.RULE("dbTruncateFn",JN(e)),e.dbAddOrEditFn=e.RULE("dbAddOrEditFn",IN(e))},"register");function XN(e){return()=>{e.sectionStack.push("db"),e.CONSUME(gp),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.dbExternalFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbGetFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbHasFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbEditFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbDelFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbAddFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbDirectQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbSetDatasourceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbSchemaFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbTruncateFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbTransactionFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbPatchFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbAddOrEditFn),"ALT")}]),e.sectionStack.pop()}}r(XN,"dbFn");function ZN(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("debugLog");let o=e.CONSUME(Ip);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(ZN,"debugLogFn");function $N(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("debugStop");let o=e.CONSUME(Fp);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r($N,"debugStopFn");var eM=r(e=>{e.debugLogFn=e.RULE("debugLogFn",ZN(e)),e.debugStopFn=e.RULE("debugStopFn",$N(e))},"register");function tM(e){return()=>{e.sectionStack.push("debug"),e.CONSUME(wp),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.debugLogFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.debugStopFn),"ALT")}]),e.sectionStack.pop()}}r(tM,"debugFn");function rM(e){let t=["min","max"],n=[];return()=>{e.sectionStack.push("unitExpectToBeWithinFn");let o=e.CONSUME(Ga);e.CONSUME(ye),e.CONSUME(No),e.MANY(()=>{e.CONSUME(G),e.CONSUME(b)}),e.CONSUME(pe),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(rM,"unitExpectToBeWithinFn");function nM(e){let t=[],n=["exception"];return()=>{e.sectionStack.push("unitExpectToThrowFn");let o=e.CONSUME(ja);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(nM,"unitExpectToThrowFn");function oM(e){let t=["value"],n=[];return()=>{e.sectionStack.push("unitExpectWithArgumentsFn");let o=e.OR([{ALT:r(()=>e.CONSUME(Da),"ALT")},{ALT:r(()=>e.CONSUME(Ma),"ALT")},{ALT:r(()=>e.CONSUME(wa),"ALT")},{ALT:r(()=>e.CONSUME(Fa),"ALT")},{ALT:r(()=>e.CONSUME(Ia),"ALT")},{ALT:r(()=>e.CONSUME(Pa),"ALT")},{ALT:r(()=>e.CONSUME(qa),"ALT")},{ALT:r(()=>e.CONSUME(Ba),"ALT")}]);e.CONSUME(ye),e.CONSUME(No),e.MANY(()=>{e.CONSUME(G),e.CONSUME(b)}),e.CONSUME(pe),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(oM,"unitExpectWithArgumentsFn");function iM(e){return()=>{e.sectionStack.push("unitExpectWithoutArgumentsFn"),e.OR([{ALT:r(()=>e.CONSUME(xa),"ALT")},{ALT:r(()=>e.CONSUME(Aa),"ALT")},{ALT:r(()=>e.CONSUME(ka),"ALT")},{ALT:r(()=>e.CONSUME(va),"ALT")},{ALT:r(()=>e.CONSUME(Ua),"ALT")},{ALT:r(()=>e.CONSUME(Ca),"ALT")},{ALT:r(()=>e.CONSUME(Oa),"ALT")},{ALT:r(()=>e.CONSUME(La),"ALT")},{ALT:r(()=>e.CONSUME(Na),"ALT")}]),e.CONSUME(ye),e.CONSUME(No),e.MANY(()=>{e.CONSUME(G),e.CONSUME(b)}),e.CONSUME(pe),e.sectionStack.pop()}}r(iM,"unitExpectWithoutArgumentsFn");function aM(e){let t=["min","max"],n=["description","disabled"];return()=>{e.sectionStack.push("workflowExpectToBeWithinFn");let o=e.CONSUME(Ga);e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(aM,"workflowExpectToBeWithinFn");function sM(e){let t=[],n=["value"];return()=>{e.sectionStack.push("workflowExpectToThrowFn");let o=e.CONSUME(ja);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(sM,"workflowExpectToThrowFn");function cM(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("workflowExpectWithArgumentsFn");let o=e.OR([{ALT:r(()=>e.CONSUME(Da),"ALT")},{ALT:r(()=>e.CONSUME(Ma),"ALT")},{ALT:r(()=>e.CONSUME(wa),"ALT")},{ALT:r(()=>e.CONSUME(Fa),"ALT")},{ALT:r(()=>e.CONSUME(Ia),"ALT")},{ALT:r(()=>e.CONSUME(Pa),"ALT")},{ALT:r(()=>e.CONSUME(qa),"ALT")},{ALT:r(()=>e.CONSUME(Ba),"ALT")}]);e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(cM,"workflowExpectWithArgumentsFn");function lM(e){return()=>{e.sectionStack.push("workflowExpectWithoutArgumentsFn");let t=e.OR([{ALT:r(()=>e.CONSUME(xa),"ALT")},{ALT:r(()=>e.CONSUME(Aa),"ALT")},{ALT:r(()=>e.CONSUME(ka),"ALT")},{ALT:r(()=>e.CONSUME(va),"ALT")},{ALT:r(()=>e.CONSUME(Ua),"ALT")},{ALT:r(()=>e.CONSUME(Ca),"ALT")},{ALT:r(()=>e.CONSUME(Oa),"ALT")},{ALT:r(()=>e.CONSUME(La),"ALT")},{ALT:r(()=>e.CONSUME(Na),"ALT")}]);e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.SUBRULE(e.functionAttrReq,{ARGS:[t,[],["description","disabled"]]}),e.sectionStack.pop()}}r(lM,"workflowExpectWithoutArgumentsFn");var uM=r(e=>{e.unitExpectWithArgumentsFn=e.RULE("unitExpectWithArgumentsFn",oM(e)),e.unitExpectWithoutArgumentsFn=e.RULE("unitExpectWithoutArgumentsFn",iM(e)),e.unitExpectToThrowFn=e.RULE("unitExpectToThrowFn",nM(e)),e.unitExpectToBeWithinFn=e.RULE("unitExpectToBeWithinFn",rM(e)),e.workflowExpectWithArgumentsFn=e.RULE("workflowExpectWithArgumentsFn",cM(e)),e.workflowExpectWithoutArgumentsFn=e.RULE("workflowExpectWithoutArgumentsFn",lM(e)),e.workflowExpectToThrowFn=e.RULE("workflowExpectToThrowFn",sM(e)),e.workflowExpectToBeWithinFn=e.RULE("workflowExpectToBeWithinFn",aM(e))},"register");function dM(e){return()=>{let t=!1;e.sectionStack.push("allMathFn"),e.OR([{ALT:r(()=>e.CONSUME(Vp),"ALT")},{ALT:r(()=>e.CONSUME(Wp),"ALT")},{ALT:r(()=>e.CONSUME(zp),"ALT")},{ALT:r(()=>e.CONSUME(Hp),"ALT")},{ALT:r(()=>e.CONSUME(Yp),"ALT")},{ALT:r(()=>{e.CONSUME(Kp),e.CONSUME(G),e.OR1([{ALT:r(()=>e.CONSUME(Jp),"ALT")},{ALT:r(()=>e.CONSUME(Qp),"ALT")},{ALT:r(()=>e.CONSUME(Xp),"ALT")}])},"ALT")}]),e.SUBRULE(e.assignableVariableProperty),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(dM,"allMathFn");var fM=r(e=>{e.allMathFn=e.RULE("allMathFn",dM(e))},"register");function pM(e){return()=>{e.sectionStack.push("math"),e.CONSUME(jp),e.CONSUME(G),e.SUBRULE(e.allMathFn),e.sectionStack.pop()}}r(pM,"mathFn");function mM(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("objectEntriesFn");let o=e.CONSUME(fm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(mM,"objectEntriesFn");function hM(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("objectKeysFn");let o=e.CONSUME(pm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(hM,"objectKeysFn");function gM(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("objectValuesFn");let o=e.CONSUME(mm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(gM,"objectValuesFn");var TM=r(e=>{e.objectEntriesFn=e.RULE("objectEntriesFn",mM(e)),e.objectKeysFn=e.RULE("objectKeysFn",hM(e)),e.objectValuesFn=e.RULE("objectValuesFn",gM(e))},"register");function EM(e){return()=>{e.sectionStack.push("object"),e.CONSUME(dm),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.objectEntriesFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.objectKeysFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.objectValuesFn),"ALT")}]),e.sectionStack.pop()}}r(EM,"objectFn");function SM(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisCountFn");let o=e.CONSUME(Um);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(SM,"redisCountFn");function yM(e){return()=>{let t=["key","by"],n=["description","disabled"];e.sectionStack.push("redisDecrFn");let o=e.CONSUME(Cm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(yM,"redisDecrFn");function _M(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisDelFn");let o=e.CONSUME(Om);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(_M,"redisDelFn");function bM(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisGetFn");let o=e.CONSUME(Lm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(bM,"redisGetFn");function RM(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisHasFn");let o=e.CONSUME(Nm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(RM,"redisHasFn");function xM(e){return()=>{let t=["package_key","key","by"],n=["description","disabled"];e.sectionStack.push("redisIncrFn");let o=e.CONSUME(Mm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(xM,"redisIncrFn");function AM(e){return()=>{let t=["search"],n=["description","disabled"];e.sectionStack.push("redisKeysFn");let o=e.CONSUME(wm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(AM,"redisKeysFn");function kM(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisPopFn");let o=e.CONSUME(Fm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(kM,"redisPopFn");function vM(e){return()=>{let t=["key","value","package_key"],n=["description","disabled"];e.sectionStack.push("redisPushFn");let o=e.CONSUME(Im);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(vM,"redisPushFn");function UM(e){return()=>{let t=["key","start","stop"],n=["description","disabled"];e.sectionStack.push("redisRangeFn");let o=e.CONSUME(Pm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(UM,"redisRangeFn");function CM(e){return()=>{let t=["key","max","ttl","error"],n=["description","disabled"];e.sectionStack.push("redisRateLimitFn");let o=e.CONSUME(Dm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(CM,"redisRateLimitFn");function OM(e){return()=>{let t=["key","value","count"],n=["description","disabled"];e.sectionStack.push("redisRemoveFn");let o=e.CONSUME(qm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(OM,"redisRemoveFn");function LM(e){return()=>{let t=["key","data","ttl"],n=["description","disabled"];e.sectionStack.push("redisSetFn");let o=e.CONSUME(Bm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(LM,"redisSetFn");function NM(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisShiftFn");let o=e.CONSUME(Gm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(NM,"redisShiftFn");function MM(e){return()=>{let t=["key","value"],n=["description","disabled"];e.sectionStack.push("redisUnshiftFn");let o=e.CONSUME(jm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(MM,"redisUnshiftFn");var wM=r(e=>{e.redisCountFn=e.RULE("redisCountFn",SM(e)),e.redisDecrFn=e.RULE("redisDecrFn",yM(e)),e.redisDelFn=e.RULE("redisDelFn",_M(e)),e.redisGetFn=e.RULE("redisGetFn",bM(e)),e.redisHasFn=e.RULE("redisHasFn",RM(e)),e.redisIncrFn=e.RULE("redisIncrFn",xM(e)),e.redisKeysFn=e.RULE("redisKeysFn",AM(e)),e.redisPopFn=e.RULE("redisPopFn",kM(e)),e.redisPushFn=e.RULE("redisPushFn",vM(e)),e.redisRangeFn=e.RULE("redisRangeFn",UM(e)),e.redisRateLimitFn=e.RULE("redisRateLimitFn",CM(e)),e.redisRemoveFn=e.RULE("redisRemoveFn",OM(e)),e.redisSetFn=e.RULE("redisSetFn",LM(e)),e.redisShiftFn=e.RULE("redisShiftFn",NM(e)),e.redisUnshiftFn=e.RULE("redisUnshiftFn",MM(e))},"register");function FM(e){return()=>{e.sectionStack.push("redis"),e.CONSUME(vm),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.redisDelFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisSetFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisGetFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisHasFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisIncrFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisDecrFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisKeysFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisPushFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisUnshiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisPopFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisShiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisRemoveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisCountFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisRangeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisRateLimitFn),"ALT")}]),e.sectionStack.pop()}}r(FM,"redisFn");function IM(e){return(t,n)=>{let o=!1;e.CONSUME(it),e.MANY(()=>{e.MANY1(()=>{o=!1,e.CONSUME(h)}),o&&e.addInvalidValueError("Expected a comma, a new line or closing bracket"),e.SUBRULE(e.schemaFn,{ARGS:[t,Ut(n)]}),o=!0,e.MANY2(()=>{o=!1,e.CONSUME1(h)}),e.OPTION(()=>(o=!1,e.CONSUME1(Me)))}),e.CONSUME(at)}}r(IM,"schemaParseArrayFn");function BS(e){return typeof e!="object"||!Array.isArray(e)?!1:e.length==1}r(BS,"schemaExpectArray");function on(e){return!e||typeof e!="string"?!1:e.endsWith("?")}r(on,"isOptionalAttribute");function Or(e){return!e||typeof e!="string"?!1:(on(e)&&(e=e.slice(0,-1)),e.startsWith("[")&&e.endsWith("]"))}r(Or,"isSchemaGenericType");function PM(e){return Or(e)?on(e)?e.slice(1,-2):e.slice(1,-1):null}r(PM,"getSchemaGenericTypeName");function Do(e,t){if(Or(e)){let n=on(e)?e.slice(1,-2):e.slice(1,-1);return t.includes(n)}return!1}r(Do,"schemaExpectOneOf");function DM(e){return(t,n,o={})=>{let i=null,a=e.OR([{ALT:r(()=>(i="string",e.CONSUME(M)),"ALT")},{ALT:r(()=>(i="string",e.CONSUME(nr)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(ze)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(Yt)),"ALT")},{ALT:r(()=>(i="boolean",e.CONSUME(pt)),"ALT")},{ALT:r(()=>(i="boolean",e.CONSUME(mt)),"ALT")},{ALT:r(()=>(i="null",e.CONSUME(Io)),"ALT")},{IGNORE_AMBIGUITIES:!0,ALT:r(()=>(i="string",e.CONSUME(b)),"ALT")}]);o.value=a,e.ACTION(()=>{qM(i,a.image,n)||e.addExpectedValueError(t,n)})}}r(DM,"schemaParseConstantFn");function qM(e,t,n){let o=n!==null?n.toString():n;if(Y(n))return en(n,i=>qM(e,t,i));switch(e){case"string":return(t.startsWith('"')||t.startsWith("'"))&&(t=t.slice(1,-1)),t===o;case"number":case"boolean":return t===o;case"null":return o===null;default:throw new Error(`schemaParseConstantFn called with non-constant attribute: ${n}`)}}r(qM,"matchValueToSchema");function GS(e){return Or(e)?!1:typeof e=="string"||typeof e=="number"||typeof e=="boolean"||e===null}r(GS,"schemaExpectConstant");function BM(e){return(t,n,o={})=>{let[i,a]=$E(n,Or);e.ACTION(()=>{if(a.length>0&&i.length>0)throw new Error("schemaParseEnumFn does not support mixing constant and immutable types in the same enum, received: "+JSON.stringify(n))}),e.OR({IGNORE_AMBIGUITIES:!0,DEF:[{GATE:r(()=>a.length>0,"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseConstantFn,{ARGS:[t,a,o]}),"ALT")},{GATE:r(()=>i.length>0,"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseImmutableFn,{ARGS:[t,i,o]}),"ALT")}]})}}r(BM,"schemaParseEnumFn");function jS(e){return!!(Y(e)&&e.length>1)}r(jS,"schemaExpectEnum");function GM(e){return(t,n,o={})=>{let i=!1,a=null,s=ke(n),c=[...s],u=[];if(e.ACTION(()=>{if(s.length>1&&en(s,p=>Or(p)))throw new Error("schemaParseObjectFn supports only one generic type when multiple keys are defined")}),e.CONSUME(L),e.MANY(()=>{e.MANY1(()=>{i=!1,e.CONSUME(h)}),i&&e.addInvalidValueError(a,"Expected a comma, a new line or closing bracket");let p,g=e.OR([{ALT:r(()=>{p=e.CONSUME(b);let O=[p];return e.MANY3(()=>{O.push(e.CONSUME(G)),e.CONSUME1(b)}),O.map(P=>P.image).join(".")},"ALT")},{ALT:r(()=>e.CONSUME(M).image.slice(1,-1),"ALT")}]);u.includes(g)?e.addInvalidValueError(p,`Duplicate key '${g}' found`):(u.push(g),o[g]={key:p,value:null});let S=VS(g,s);S||e.addInvalidValueError(p,`The key '${g}' is not valid in this context`),c.splice(c.indexOf(S),1),e.CONSUME(Re);let A=Xo(n,S,null);e.SUBRULE(e.schemaFn,{ARGS:[p,A,o[g]]}),i=!0,e.MANY2(()=>{i=!1,e.CONSUME1(h)}),e.OPTION(()=>{i=!1,e.CONSUME1(Me)})}),e.CONSUME(N),c.length){let p=c.filter(g=>!on(g));p.length&&e.addInvalidValueError(a||t,`The following required key(s) are missing: ${p.join(", ")}`)}return{foo:"foo-bar"}}}r(GM,"schemaParseObjectFn");var VS=r((e,t)=>{for(let n of t)if(Or(n))switch(PM(n)){case"string":if(typeof e=="string")return n;break;case"number":if(!isNaN(Number(e)))return n;break;case"boolean":if(e==="true"||e==="false")return n;break}else{if(on(n)&&e===n.slice(0,-1))return n;if(e===n)return n}return!1},"keyMatchRequirements");function WS(e){return uu(e)}r(WS,"schemaExpectObject");var wW=r(e=>Do(e,["string","number","boolean"])?Y(e)?`Expected one of the following types:  ${e.join(", ")}`:`Expected a ${e}`:GS(e)?Y(e)?`Expected one of the following constants: ${e.join(", ")}`:`Expected a ${e}`:BS(e)?`Expected an array of ${e[0]}`:WS(e)?"Expected an object {}":jS(e)?`Expected one of the following enum values: ${e.join(", ")}`:Do(e,["mock"])?"Expected a mock":Do(e,["expression"])?"Expected an expression":Do(e,["query"])?"Expected a database query expression":`Invalid schema: received ${JSON.stringify(e)}`,"getErrorMessageForSchema");function jM(e){return(t,n,o={})=>{e.sectionStack.push("schema"),e.OR({IGNORE_AMBIGUITIES:!0,ERR_MSG:wW(n),DEF:[{GATE:r(()=>Do(n,["string","number","boolean"],o),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseImmutableFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>GS(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseConstantFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>BS(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseArrayFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>WS(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>jS(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseEnumFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>Do(n,["expression","query"]),"GATE"),ALT:r(()=>{let i=Do(n,["query"]);e.SUBRULE(e.valueExpression,{ARGS:[{allowQueryExpression:i}]})},"ALT")}]}),e.sectionStack.pop()}}r(jM,"schemaFn");function VM(e){return e.requireRules(FW),(t,n,o={})=>{let i=ke(n).every(a=>on(a));e.OR([{GATE:r(()=>i,"GATE"),ALT:r(()=>{e.OPTION(()=>e.SUBRULE(e._schemaParseAttributeFn,{ARGS:[t,n,o]}))},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE1(e._schemaParseAttributeFn,{ARGS:[t,n,o]}),"ALT")}])}}r(VM,"schemaParseAttributeFn");function FW(e){return(t,n,o={})=>{let i=!1,a=null,s=ke(n),c=[...s],u=[];if(e.ACTION(()=>{if(s.length>1&&en(s,p=>Or(p)))throw new Error("schemaParseAttributeFn supports only one generic type when multiple keys are defined")}),e.CONSUME(L),e.MANY(()=>{e.MANY1(()=>{i=!1,e.CONSUME(h)}),i&&e.addInvalidValueError(a,"Expected a comma, a new line or closing bracket");let p,g=e.OR([{ALT:r(()=>(p=e.CONSUME1(b),p.image),"ALT")},{ALT:r(()=>e.CONSUME1(M).image.slice(1,-1),"ALT")}]);g!=="mock"&&u.includes(g)?e.addInvalidValueError(p,`Duplicate key '${g}' found`):(u.push(g),o[g]={key:p,value:null});let S=VS(g,s);S||e.addInvalidValueError(p,`The key '${g}' is not valid in this context`),c.splice(c.indexOf(S),1),e.CONSUME(v);let A=Xo(n,S,null);e.SUBRULE(e.schemaFn,{ARGS:[p,A,o[g]]}),i=!0,e.MANY2(()=>{i=!1,e.CONSUME1(h)}),e.OPTION(()=>{i=!1,e.CONSUME1(Me)})}),e.CONSUME(N),c.length){let p=c.filter(g=>!on(g));p.length&&e.addInvalidValueError(a||t,`The following required attribute(s) are missing: ${p.join(", ")}`)}}}r(FW,"_schemaParseAttributeFn");function zM(e){return(t,n,o={})=>{let i,a=e.OR({DEF:[{ALT:r(()=>(i="string",e.CONSUME(M)),"ALT")},{ALT:r(()=>(i="string",e.CONSUME(vo)),"ALT")},{ALT:r(()=>(i="string",e.CONSUME(nr)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(Yt)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(ze)),"ALT")},{ALT:r(()=>{i="boolean",e.SUBRULE(e.booleanValue)},"ALT")}]});o.value=a,e.ACTION(()=>{let s=Y(n),c=s?n.map(WM):WM(n);if(s){if(!qt(c))throw new Error(`schemaParseImmutableFn called with invalid enum attribute: ${n}`);c.includes(i)||e.addExpectedValueTypeError(t,c.join(" or "))}else{if(!c)throw new Error(`schemaParseImmutableFn called with invalid attribute: ${n}`);i!==c&&e.addExpectedValueTypeError(t,c)}})}}r(zM,"schemaParseImmutableFn");function WM(e){let t=["string","number","boolean"];if(Or(e)){let n=on(e)?e.slice(1,-2):e.slice(1,-1);if(t.includes(n))return n}return null}r(WM,"getImmutableAttributeType");var HM=r(e=>{e.schemaFn=e.RULE("schemaFn",jM(e)),e.schemaParseImmutableFn=e.RULE("schemaParseImmutableFn",zM(e)),e.schemaParseEnumFn=e.RULE("schemaParseEnumFn",BM(e)),e.schemaParseConstantFn=e.RULE("schemaParseConstantFn",DM(e)),e.schemaParseArrayFn=e.RULE("schemaParseArrayFn",IM(e)),e.schemaParseObjectFn=e.RULE("schemaParseObjectFn",GM(e)),e.schemaParseAttributeFn=e.RULE("schemaParseAttributeFn",VM(e))},"register");function YM(e){return()=>{e.sectionStack.push("securityCheckPasswordFn");let t=e.CONSUME(Wm);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(YM,"securityCheckPasswordFn");function KM(e){return()=>{e.sectionStack.push("securityCreateAuthTokenFn");let t=e.CONSUME(Ym);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(KM,"securityCreateAuthTokenFn");function JM(e){let t=["curve","format"],n=["description","disabled"];return()=>{e.sectionStack.push("securityCreateCurveKeyFn");let o=e.CONSUME(Km);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(JM,"securityCreateCurveKeyFn");function QM(e){let t=["character_count","require_lowercase","require_uppercase","require_digit","require_symbol","symbol_whitelist"],n=["description","disabled"];return()=>{e.sectionStack.push("securityCreatePasswordFn");let o=e.CONSUME(zm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(QM,"securityCreatePasswordFn");function XM(e){let t=["bits","format"],n=["description","disabled"];return()=>{e.sectionStack.push("securityCreateRsaKeyFn");let o=e.CONSUME(Jm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(XM,"securityCreateRsaKeyFn");function ZM(e){return()=>{e.sectionStack.push("securityCreateSecretKeyFn");let t=e.CONSUME(Qm);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(ZM,"securityCreateSecretKeyFn");function $M(e){return()=>{e.sectionStack.push("securityCreateUuidFn");let t=e.CONSUME(Hm);e.OPTION(()=>{e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N)}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r($M,"securityCreateUuidFn");function ew(e){return()=>{e.sectionStack.push("securityDecryptFn");let t=e.CONSUME(Xm);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(ew,"securityDecryptFn");function tw(e){return()=>{e.sectionStack.push("securityEncryptFn");let t=e.CONSUME(Zm);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(tw,"securityEncryptFn");function rw(e){return()=>{e.sectionStack.push("securityJweDecodeFn");let t=e.CONSUME($m);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(rw,"securityJweDecodeFn");function nw(e){return()=>{e.sectionStack.push("securityJweEncodeFn");let t=e.CONSUME(eh);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(nw,"securityJweEncodeFn");function ow(e){return()=>{e.sectionStack.push("securityJwsDecodeFn");let t=e.CONSUME(th);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(ow,"securityJwsDecodeFn");function iw(e){return()=>{e.sectionStack.push("securityJwsEncodeFn");let t=e.CONSUME(rh);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(iw,"securityJwsEncodeFn");function aw(e){return()=>{e.sectionStack.push("securityRandomBytesFn");let t=e.CONSUME(nh);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(aw,"securityRandomBytesFn");function sw(e){return()=>{e.sectionStack.push("securityRandomNumberFn");let t=e.CONSUME(oh);e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(b),e.CONSUME(v),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(sw,"securityRandomNumberFn");var cw=r(e=>{e.securityCheckPasswordFn=e.RULE("securityCheckPasswordFn",YM(e)),e.securityCreateAuthTokenFn=e.RULE("securityCreateAuthTokenFn",KM(e)),e.securityCreateCurveKeyFn=e.RULE("securityCreateCurveKeyFn",JM(e)),e.securityCreatePasswordFn=e.RULE("securityCreatePasswordFn",QM(e)),e.securityCreateRsaKeyFn=e.RULE("securityCreateRsaKeyFn",XM(e)),e.securityCreateSecretKeyFn=e.RULE("securityCreateSecretKeyFn",ZM(e)),e.securityCreateUuidFn=e.RULE("securityCreateUuidFn",$M(e)),e.securityDecryptFn=e.RULE("securityDecryptFn",ew(e)),e.securityEncryptFn=e.RULE("securityEncryptFn",tw(e)),e.securityJweDecodeFn=e.RULE("securityJweDecodeFn",rw(e)),e.securityJweEncodeFn=e.RULE("securityJweEncodeFn",nw(e)),e.securityJwsDecodeFn=e.RULE("securityJwsDecodeFn",ow(e)),e.securityJwsEncodeFn=e.RULE("securityJwsEncodeFn",iw(e)),e.securityRandomBytesFn=e.RULE("securityRandomBytesFn",aw(e)),e.securityRandomNumberFn=e.RULE("securityRandomNumberFn",sw(e))},"register");function lw(e){return()=>{e.sectionStack.push("security"),e.CONSUME(Vm),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.securityCheckPasswordFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateAuthTokenFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateCurveKeyFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreatePasswordFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateRsaKeyFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateSecretKeyFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateUuidFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityDecryptFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityEncryptFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJweDecodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJweEncodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJwsDecodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJwsEncodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityRandomBytesFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityRandomNumberFn),"ALT")}]),e.sectionStack.pop()}}r(lw,"securityFn");function uw(e){return()=>{let t=["value","filename","access"],n=["description","disabled"];e.sectionStack.push("storageCreateAttachmentFn");let o=e.CONSUME(sh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(uw,"storageCreateAttachmentFn");function dw(e){return()=>{let t=["filename","filedata"],n=["description","disabled"];e.sectionStack.push("storageCreateFileResourceFn");let o=e.CONSUME(lh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(dw,"storageCreateFileResourceFn");function fw(e){return()=>{let t=["value","filename","access"],n=["description","disabled"];e.sectionStack.push("storageCreateImageFn");let o=e.CONSUME(ah);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(fw,"storageCreateImageFn");function pw(e){return()=>{let t=["pathname"],n=["description","disabled"];e.sectionStack.push("storageDeleteFileFn");let o=e.CONSUME(uh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(pw,"storageDeleteFileFn");function mw(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("storageReadFileResourceFn");let o=e.CONSUME(ch);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(mw,"storageReadFileResourceFn");function hw(e){return()=>{let t=["pathname","ttl"],n=["description","disabled"];e.sectionStack.push("storageSignPrivateUrlFn");let o=e.CONSUME(dh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(hw,"storageSignPrivateUrlFn");var gw=r(e=>{e.storageCreateAttachmentFn=e.RULE("storageCreateAttachmentFn",uw(e)),e.storageCreateFileResourceFn=e.RULE("storageCreateFileResourceFn",dw(e)),e.storageCreateImageFn=e.RULE("storageCreateImageFn",fw(e)),e.storageDeleteFileFn=e.RULE("storageDeleteFileFn",pw(e)),e.storageReadFileResourceFn=e.RULE("storageReadFileResourceFn",mw(e)),e.storageSignPrivateUrlFn=e.RULE("storageSignPrivateUrlFn",hw(e))},"register");function Tw(e){return()=>{e.sectionStack.push("storage"),e.CONSUME(ih),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.storageCreateAttachmentFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageCreateFileResourceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageCreateImageFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageDeleteFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageReadFileResourceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageSignPrivateUrlFn),"ALT")}]),e.sectionStack.pop()}}r(Tw,"storageFn");function Ew(e){let t=["value","separator","enclosure","escape_char"],n=["description","disabled"];return()=>{e.sectionStack.push("streamFromCsv");let o=e.CONSUME(ph);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Ew,"streamFromCsvFn");function Sw(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("streamFromJsonl");let o=e.CONSUME(mh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Sw,"streamFromJsonlFn");function yw(e){let t=["url","method","params","headers","timeout","follow_location"],n=["description","disabled","verify_host","verify_peer","ca_certificate","certificate","certificate_pass","private_key","private_key_pass"];return()=>{e.sectionStack.push("streamFromRequest");let o=e.CONSUME(hh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(yw,"streamFromRequestFn");var _w=r(e=>{e.streamFromCsvFn=e.RULE("streamFromCsvFn",Ew(e)),e.streamFromJsonlFn=e.RULE("streamFromJsonlFn",Sw(e)),e.streamFromRequestFn=e.RULE("streamFromRequestFn",yw(e))},"register");function bw(e){return()=>{e.sectionStack.push("stream"),e.CONSUME(fh),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.streamFromCsvFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.streamFromJsonlFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.streamFromRequestFn),"ALT")}]),e.sectionStack.pop()}}r(bw,"streamFn");function Rw(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("allTextWithoutReturnValueFn");let o=e.OR([{ALT:r(()=>e.CONSUME(kh),"ALT")},{ALT:r(()=>e.CONSUME(Nh),"ALT")},{ALT:r(()=>e.CONSUME(Mh),"ALT")},{ALT:r(()=>e.CONSUME(wh),"ALT")},{ALT:r(()=>e.CONSUME(Ih),"ALT")}]);e.SUBRULE(e.assignableVariableProperty),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(Rw,"allTextWithoutReturnValueFn");function xw(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("allTextWithReturnValueFn");let o=e.OR([{ALT:r(()=>e.CONSUME(vh),"ALT")},{ALT:r(()=>e.CONSUME(Uh),"ALT")},{ALT:r(()=>e.CONSUME(Ch),"ALT")},{ALT:r(()=>e.CONSUME(Oh),"ALT")},{ALT:r(()=>e.CONSUME(Lh),"ALT")},{ALT:r(()=>e.CONSUME(Fh),"ALT")}]);e.SUBRULE(e.assignableVariableProperty),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(xw,"allTextWithReturnValueFn");var Aw=r(e=>{e.allTextWithoutReturnValueFn=e.RULE("allTextWithoutReturnValueFn",Rw(e)),e.allTextWithReturnValueFn=e.RULE("allTextWithReturnValueFn",xw(e))},"register");function kw(e){return()=>{e.sectionStack.push("text"),e.CONSUME(ya),e.CONSUME(G);let t=e.LA(1).image,n=["contains","ends_with","icontains","iends_with","istarts_with","starts_with"],o=["append","ltrim","prepend","rtrim","trim"];n.includes(t)?e.SUBRULE(e.allTextWithReturnValueFn):o.includes(t)&&e.SUBRULE(e.allTextWithoutReturnValueFn),e.sectionStack.pop()}}r(kw,"textFn");function vw(e){return()=>{e.sectionStack.push("unitExpect"),e.CONSUME(Ra),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.unitExpectWithArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectWithoutArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectToThrowFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectToBeWithinFn),"ALT")}]),e.sectionStack.pop()}}r(vw,"unitExpectFn");function Uw(e){return()=>{let t=["latitude_1","longitude_1","latitude_2","longitude_2"],n=["description","disabled"];e.sectionStack.push("utilGeoDistanceFn");let o=e.CONSUME(Dh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Uw,"utilGeoDistanceFn");function Cw(e){let t=[],n=["description","disabled"];return()=>{e.sectionStack.push("utilGetAllInputFn");let o=e.CONSUME(qh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Cw,"utilGetAllInputFn");function Ow(e){return()=>{let t=[],n=["description","disabled"];e.sectionStack.push("utilGetEnvFn");let o=e.CONSUME(Gh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Ow,"utilGetEnvFn");function Lw(e){return()=>{let t=["encoding"],n=["description","disabled"];e.sectionStack.push("utilGetInputFn");let o=e.CONSUME(jh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Lw,"utilGetInputFn");function Nw(e){return()=>{let t=[],n=["description","disabled"];e.sectionStack.push("utilGetVarsFn");let o=e.CONSUME(Vh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Nw,"utilGetVarsFn");function Mw(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("utilIpLookupFn");let o=e.CONSUME(Wh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Mw,"utilIpLookupFn");function ww(e){return()=>{let t=!1;e.sectionStack.push("utilPostProcessFn"),e.CONSUME(zh),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.SUBRULE(e.stackClause)},"ALT")}])}),t||e.SUBRULE(e.stackClause),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(ww,"utilPostProcessFn");function Fw(e){return()=>{let t=["value","duplicates"],n=["description","disabled"];e.sectionStack.push("utilSetHeaderFn");let o=e.CONSUME(Yh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(Fw,"utilSetHeaderFn");function Iw(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("utilSleepFn");let o=e.CONSUME(Kh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(Iw,"utilSleepFn");function Pw(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("utilTemplateFn");let o=e.CONSUME(Bh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Pw,"utilTemplateFn");var Dw=r(e=>{e.utilGeoDistanceFn=e.RULE("utilGeoDistanceFn",Uw(e)),e.utilGetAllInputFn=e.RULE("utilGetAllInputFn",Cw(e)),e.utilGetEnvFn=e.RULE("utilGetEnvFn",Ow(e)),e.utilGetInputFn=e.RULE("utilGetInputFn",Lw(e)),e.utilGetVarsFn=e.RULE("utilGetVarsFn",Nw(e)),e.utilIpLookupFn=e.RULE("utilIpLookupFn",Mw(e)),e.utilPostProcessFn=e.RULE("utilPostProcessFn",ww(e)),e.utilSetHeaderFn=e.RULE("utilSetHeaderFn",Fw(e)),e.utilSleepFn=e.RULE("utilSleepFn",Iw(e)),e.utilTemplateFn=e.RULE("utilTemplateFn",Pw(e))},"register");function qw(e){return()=>{e.sectionStack.push("util"),e.CONSUME(Ph),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.utilIpLookupFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetEnvFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilSleepFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetAllInputFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetInputFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetVarsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGeoDistanceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilPostProcessFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilSetHeaderFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilTemplateFn),"ALT")}]),e.sectionStack.pop()}}r(qw,"utilFn");function Bw(e){return()=>{e.sectionStack.push("var");let t=e.CONSUME(Qh);e.OR([{ALT:r(()=>{let n=e.CONSUME(Bt);n.image&&e.addVariable(n.image,"unknown")},"ALT")},{ALT:r(()=>{e.CONSUME(G),e.CONSUME(Xh),e.SUBRULE(e.assignableVariableProperty)},"ALT")}]),e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{value:"[expression]","description?":"[string]","disabled?":"[boolean]","mock?":{"[string]":"[expression]"}}]}),e.sectionStack.pop()}}r(Bw,"varFn");function Gw(e){return()=>{e.sectionStack.push("workflowExpect"),e.CONSUME(Ra),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.workflowExpectWithArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.workflowExpectWithoutArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.workflowExpectToThrowFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.workflowExpectToBeWithinFn),"ALT")}]),e.sectionStack.pop()}}r(Gw,"workflowExpectFn");function jw(e){return()=>{let t=["file","zip"],n=["description","disabled","password","password_encryption","filename"];e.sectionStack.push("zipAddToArchiveFn");let o=e.CONSUME(Tg);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(jw,"zipAddToArchiveFn");function Vw(e){return()=>{let t=["filename"],n=["description","disabled","password","password_encryption"];e.sectionStack.push("zipCreateArchiveFn");let o=e.CONSUME(Eg);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Vw,"zipCreateArchiveFn");function Ww(e){return()=>{let t=["filename","zip"],n=["description","disabled","password"];e.sectionStack.push("zipDeleteFromArchiveFn");let o=e.CONSUME(Sg);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(Ww,"zipDeleteFromArchiveFn");function zw(e){return()=>{let t=["zip"],n=["description","disabled","password"];e.sectionStack.push("zipExtractFn");let o=e.CONSUME(yg);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(zw,"zipExtractFn");function Hw(e){return()=>{let t=["zip"],n=["description","disabled","password"];e.sectionStack.push("zipViewContentsFn");let o=e.CONSUME(_g);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Hw,"zipViewContentsFn");var Yw=r(e=>{e.zipAddToArchiveFn=e.RULE("zipAddToArchiveFn",jw(e)),e.zipCreateArchiveFn=e.RULE("zipCreateArchiveFn",Vw(e)),e.zipDeleteFromArchiveFn=e.RULE("zipDeleteFromArchiveFn",Ww(e)),e.zipExtractFn=e.RULE("zipExtractFn",zw(e)),e.zipViewContentsFn=e.RULE("zipViewContentsFn",Hw(e))},"register");function Kw(e){return()=>{e.sectionStack.push("zip"),e.CONSUME(gg),e.CONSUME(G),e.OR([{ALT:r(()=>e.SUBRULE(e.zipCreateArchiveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipAddToArchiveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipDeleteFromArchiveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipExtractFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipViewContentsFn),"ALT")}]),e.sectionStack.pop()}}r(Kw,"zipFn");var Jw=r(e=>{e.aiFn=e.RULE("aiFn",bL(e)),e.apiFn=e.RULE("apiFn",CL(e)),e.arrayFn=e.RULE("arrayFn",YL(e)),e.cloudFn=e.RULE("cloudFn",pN(e)),e.controlFn=e.RULE("controlFn",mN(e)),e.dbFn=e.RULE("dbFn",XN(e)),e.debugFn=e.RULE("debugFn",tM(e)),e.mathFn=e.RULE("mathFn",pM(e)),e.objectFn=e.RULE("objectFn",EM(e)),e.redisFn=e.RULE("redisFn",FM(e)),e.securityFn=e.RULE("securityFn",lw(e)),e.storageFn=e.RULE("storageFn",Tw(e)),e.streamFn=e.RULE("streamFn",bw(e)),e.textFn=e.RULE("textFn",kw(e)),e.utilFn=e.RULE("utilFn",qw(e)),e.varFn=e.RULE("varFn",Bw(e)),e.zipFn=e.RULE("zipFn",Kw(e)),e.unitExpectFn=e.RULE("unitExpectFn",vw(e)),e.workflowExpectFn=e.RULE("workflowExpectFn",Gw(e)),_L(e),HM(e),UL(e),HL(e),fN(e),wN(e),QN(e),eM(e),fM(e),TM(e),wM(e),cw(e),gw(e),_w(e),Aw(e),Dw(e),Yw(e),uM(e)},"register");function Qw(e){return(t,n,o,i={})=>{e.CONSUME(it),e.OPTION(()=>{e.OR([{ALT:r(()=>{e.CONSUME(h),e.AT_LEAST_ONE(()=>{e.SUBRULE(e.objectAttrReq,{ARGS:[t,n,o,i]}),e.OPTION1(()=>e.CONSUME(Me)),e.AT_LEAST_ONE1(()=>e.CONSUME3(h))})},"ALT")},{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:Me,DEF:r(()=>{e.SUBRULE1(e.objectAttrReq,{ARGS:[t,n,o,i]})},"DEF")}),e.MANY(()=>e.CONSUME2(h))},"ALT")}])}),e.CONSUME(at)}}r(Qw,"arrayOfObjectAttrReq");function Xw(e){return()=>{e.CONSUME(it),e.OPTION(()=>{e.OR([{ALT:r(()=>{e.CONSUME(h),e.AT_LEAST_ONE(()=>{e.CONSUME(M),e.OPTION1(()=>e.CONSUME(Me)),e.AT_LEAST_ONE1(()=>e.CONSUME3(h))})},"ALT")},{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:Me,DEF:r(()=>{e.CONSUME1(M)},"DEF")}),e.MANY(()=>e.CONSUME2(h))},"ALT")}])}),e.CONSUME(at)}}r(Xw,"arrayOfStringLiterals");function Zw(e){return(t={})=>{e.CONSUME(it),e.OPTION(()=>e.OR([{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:Me,DEF:r(()=>{e.SUBRULE(e.valueExpression,{ARGS:[{...t,allowObject:!0,allowArray:!0}]})},"DEF")})},"ALT")},{ALT:r(()=>{e.CONSUME(h),e.AT_LEAST_ONE(()=>{e.SUBRULE1(e.valueExpression,{ARGS:[{...t,allowObject:!0,allowArray:!0}]}),e.AT_LEAST_ONE1(()=>e.CONSUME1(h))})},"ALT")}])),e.CONSUME(at)}}r(Zw,"arrayWithValues");function $w(e){return()=>{e.OR([{ALT:r(()=>{e.CONSUME(Bt)},"ALT")},{ALT:r(()=>{e.CONSUME(Mo),e.CONSUME(G),e.CONSUME(b)},"ALT")}])}}r($w,"assignableVariableAs");function eF(e){return()=>{let t="";e.OR({DEF:[{ALT:r(()=>{t=e.CONSUME(Bt).image},"ALT")},{ALT:r(()=>{e.CONSUME(Mo),e.CONSUME(G),t=`$${e.CONSUME(b).image}`},"ALT")}],ERR_MSG:"expecting variable (e.g. $variable or $var.variable)"}),e.SUBRULE(e.chainedIdentifier),e.MANY({GATE:r(()=>e.LA(1).tokenType===wt||e.LA(1).tokenType===h&&e.LA(2).tokenType===wt,"GATE"),DEF:r(()=>{e.SUBRULE(e.filterFn)},"DEF")}),t&&e.addVariable(t,"unknown")}}r(eF,"assignableVariableProperty");function tF(e){return()=>{e.OPTION(()=>{e.CONSUME(tr),e.SUBRULE(e.assignableVariableProperty)})}}r(tF,"asVariable");function rF(e){return()=>{e.OR([{ALT:r(()=>{e.CONSUME(pt)},"ALT")},{ALT:r(()=>{e.CONSUME(mt)},"ALT")}])}}r(rF,"booleanValue");function nF(e){return()=>{e.OR(Pd.map(t=>({ALT:r(()=>e.CONSUME(t),"ALT")}))),e.CONSUME(M)}}r(nF,"castedValue");function oF(e){return()=>{e.OPTION(()=>{e.CONSUME(it),e.OR({DEF:[{ALT:r(()=>e.SUBRULE(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")},{ALT:r(()=>e.CONSUME(ze),"ALT")}],ERR_MSG:"Invalid array index"}),e.CONSUME(at)}),e.MANY(()=>{e.CONSUME(G),e.CONSUME(b),e.OPTION1(()=>{e.CONSUME1(it),e.OR1({DEF:[{ALT:r(()=>e.SUBRULE1(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE1(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE1(e.shortFormVariable),"ALT")},{ALT:r(()=>e.CONSUME1(ze),"ALT")}],ERR_MSG:"Invalid array index"}),e.CONSUME1(at)})})}}r(oF,"chainedIdentifier");function iF(e){return()=>{e.CONSUME(eg),e.SUBRULE(e.chainedIdentifier)}}r(iF,"completeAuthVariable");function aF(e){return()=>{e.CONSUME($h),e.CONSUME(G),e.OR([{ALT:r(()=>e.CONSUME(tg),"ALT")},{ALT:r(()=>e.CONSUME(rg),"ALT")},{ALT:r(()=>e.CONSUME(ng),"ALT")},{ALT:r(()=>e.CONSUME(og),"ALT")},{ALT:r(()=>e.CONSUME(ig),"ALT")},{ALT:r(()=>e.CONSUME(ag),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}])}}r(aF,"completeEnvVariable");function sF(e){return()=>{e.CONSUME(Zh),e.SUBRULE(e.chainedIdentifier)}}r(sF,"completeInputVariable");function cF(e){return(...t)=>{let n=t||[],o=e.CONSUME3(M),i=Ce(o);n.includes(i)||e.addMissingError(o,`Invalid value "${i}". Must be one of: ${n.map(a=>`"${a}"`).join(", ")}`)}}r(cF,"enumValue");function lF(e){return(t={},n=null)=>{e.OR([{ALT:r(()=>{e.CONSUME(h),e.CONSUME(wt)},"ALT")},{ALT:r(()=>e.CONSUME1(wt),"ALT")}]);let o=t.allowQueryExpression===!0?vO:Gg;e.OPTION(()=>e.CONSUME(jr));let i=e.CONSUME(b);o.includes(i.image)||e.addInvalidValueError(i,`Unknown filter function '${i.image}'`),e.MANY1(()=>{e.CONSUME(Re),e.SUBRULE(e.valueExpression,{ARGS:[t,n]})})}}r(lF,"filterFn");var IW={allowDuplicates:[],allowQueryExpression:!1,allowDisabledKeys:!1,types:{}};function uF(e){return(t,n,o,i={})=>{n=n||[],o=o||[];let a=!1,s=!1;i={...IW,...i};let c=[],u=[...n,...o];e.OR({IGNORE_AMBIGUITIES:!0,DEF:[{GATE:r(()=>n.length===0,"GATE"),ALT:r(()=>{e.OPTION(()=>{e.CONSUME(L),e.MANY(()=>{e.OR1([{GATE:r(()=>!a,"GATE"),ALT:r(()=>e.MANY1(()=>e.CONSUME1(h)),"ALT")},{GATE:r(()=>a,"GATE"),ALT:r(()=>e.AT_LEAST_ONE(()=>e.CONSUME2(h)),"ALT")}]),e.OR2([{ALT:r(()=>{let O=e.CONSUME(b);c.push(O),e.CONSUME(v);let B=Ce(O),P=i.types[B];if(typeof P=="function")P.call(null,e,O);else if(Array.isArray(P)){let z=e.CONSUME3(M),q=Ce(z);P.includes(q)||e.addMissingError(z,`Invalid value "${q}". Must be one of: ${P.map(_=>`"${_}"`).join(", ")}`)}else e.OR4({DEF:[{GATE:r(()=>P==="boolean","GATE"),ALT:r(()=>e.SUBRULE(e.booleanValue),"ALT")},{GATE:r(()=>P==="number","GATE"),ALT:r(()=>e.SUBRULE(e.numberValue),"ALT")},{GATE:r(()=>P==="string","GATE"),ALT:r(()=>e.CONSUME1(M),"ALT")},{GATE:r(()=>P==="object","GATE"),ALT:r(()=>e.SUBRULE1(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!P,"GATE"),ALT:r(()=>e.SUBRULE(e.valueExpression,{ARGS:[i]}),"ALT")}],ERR_MSG:P?`${P} for attribute ${O.image}`:void 0});a=!0},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.mockAttribute),a=!0},"ALT")}])}),e.MANY2(()=>e.CONSUME3(h)),e.CONSUME(N)})},"ALT")},{GATE:r(()=>n.length>0,"GATE"),ALT:r(()=>{e.CONSUME1(L),e.MANY4(()=>{e.OR3([{GATE:r(()=>!a,"GATE"),ALT:r(()=>e.MANY5(()=>e.CONSUME4(h)),"ALT")},{GATE:r(()=>a,"GATE"),ALT:r(()=>e.AT_LEAST_ONE1(()=>e.CONSUME5(h)),"ALT")}]),e.OR5([{ALT:r(()=>{let O=e.CONSUME1(b);c.push(O),e.CONSUME1(v);let B=Ce(O),P=i.types[B];if(typeof P=="function")P.call(null,e,O);else if(Array.isArray(P)){let z=e.CONSUME3(M),q=Ce(z);P.includes(q)||e.addMissingError(z,`Invalid value "${q}". Must be one of: ${P.map(_=>`"${_}"`).join(", ")}`)}else e.OR6({DEF:[{GATE:r(()=>P==="boolean","GATE"),ALT:r(()=>e.SUBRULE2(e.booleanValue),"ALT")},{GATE:r(()=>P==="number","GATE"),ALT:r(()=>e.SUBRULE2(e.numberValue),"ALT")},{GATE:r(()=>P==="string","GATE"),ALT:r(()=>e.CONSUME2(M),"ALT")},{GATE:r(()=>P==="object","GATE"),ALT:r(()=>e.SUBRULE2(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!P,"GATE"),ALT:r(()=>e.SUBRULE2(e.valueExpression,{ARGS:[i]}),"ALT")}],ERR_MSG:P?`${P} for attribute ${O.image}`:void 0});a=!0},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{e.SUBRULE2(e.mockAttribute),s=!0,a=!0},"ALT")}])}),e.MANY6(()=>e.CONSUME6(h)),e.CONSUME1(N)},"ALT")}]});let p=c.filter((O,B)=>!i.allowDuplicates.includes(O.image)&&c.findIndex(P=>P.image===O.image)!==B);for(let O of p)e.addDuplicateAttributeError(O);let g=c.filter(O=>!u.includes(O.image));for(let O of g)e.addIllegalAttributeError(O);let S=c.map(O=>O.image),A=n.filter(O=>!S.includes(O));A.length>0&&e.addMissingAttributeError(t,A),e.sectionStack.pop()}}r(uF,"functionAttrReq");function dF(e){return()=>{e.CONSUME(Mo),e.SUBRULE(e.chainedIdentifier)}}r(dF,"longFormVariable");function fF(e){return()=>{e.sectionStack.push("minimalFnBody"),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(fF,"minimalFnBody");function pF(e){return()=>{let t=e.CONSUME(Pg);e.CONSUME(v),e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,{"[string]":"[expression]"}]}),e.sectionStack.pop()}}r(pF,"mockAttribute");function mF(e){return()=>{e.OR([{ALT:r(()=>{e.CONSUME(ze,{ERR_MSG:"Integer literal expected"})},"ALT")},{ALT:r(()=>{e.CONSUME(Yt,{ERR_MSG:"Float literal expected"})},"ALT")}],{ERR_MSG:"Number literal expected"})}}r(mF,"numberValue");var PW={allowDuplicates:[],allowQueryExpression:!1,recursive:[],recursiveArray:[],allowVariables:!0,types:{}};function hF(e){return(t,n,o,i={})=>{n=n||[],o=o||[],i={...PW,...i};let a=[],s=[...n,...o],c;e.CONSUME(L),e.OPTION(()=>{e.OR([{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:Me,DEF:r(()=>{e.OR1([{ALT:r(()=>c=e.CONSUME(b),"ALT")},{ALT:r(()=>c=e.CONSUME(M),"ALT")}]),a.push(c);let A=Ce(c);if(e.CONSUME(Re),i.recursive.includes(A))e.SUBRULE(e.objectAttrReq,{ARGS:[c,n,o,i]});else if(i.recursiveArray.includes(A))e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[c,n,o,i]});else{let O=i.types[A];if(typeof O=="function")O.call(null,e,c);else if(Array.isArray(O)){let B=e.CONSUME3(M),P=Ce(B);O.includes(P)||e.addMissingError(B,`Invalid value "${P}". Must be one of: ${O.map(z=>`"${z}"`).join(", ")}`)}else e.OR4([{GATE:r(()=>O==="boolean","GATE"),ALT:r(()=>e.SUBRULE(e.booleanValue),"ALT")},{GATE:r(()=>O==="number","GATE"),ALT:r(()=>e.SUBRULE(e.numberValue),"ALT")},{GATE:r(()=>O==="string","GATE"),ALT:r(()=>e.CONSUME3(M),"ALT")},{GATE:r(()=>O==="object","GATE"),ALT:r(()=>e.SUBRULE1(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!O,"GATE"),ALT:r(()=>e.SUBRULE(e.valueExpression,{ARGS:[i]}),"ALT")}])}},"DEF")})},"ALT")},{ALT:r(()=>{e.CONSUME(h),e.AT_LEAST_ONE(()=>{e.OR2([{ALT:r(()=>c=e.CONSUME2(b),"ALT")},{ALT:r(()=>c=e.CONSUME2(M),"ALT")}]),a.push(c),e.CONSUME1(Re);let A=Ce(c);if(i.recursive.includes(A))e.SUBRULE(e.objectAttrReq,{ARGS:[c,n,o,i]});else if(i.recursiveArray.includes(A))e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[c,n,o,i]});else{let O=i.types[A];if(typeof O=="function")O.call(null,e,c);else if(Array.isArray(O)){let B=e.CONSUME3(M),P=Ce(B);O.includes(P)||e.SAVE_ERROR(new yt(`Invalid value "${P}". Must be one of: ${O.map(z=>`"${z}"`).join(", ")}`,B,B))}else e.OR3([{GATE:r(()=>O==="boolean","GATE"),ALT:r(()=>e.SUBRULE1(e.booleanValue),"ALT")},{GATE:r(()=>O==="number","GATE"),ALT:r(()=>e.SUBRULE1(e.numberValue),"ALT")},{GATE:r(()=>O==="string","GATE"),ALT:r(()=>e.OR5([{ALT:r(()=>e.CONSUME1(M),"ALT")},{ALT:r(()=>e.CONSUME(nr),"ALT")}]),"ALT")},{GATE:r(()=>O==="object","GATE"),ALT:r(()=>e.SUBRULE(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!O,"GATE"),ALT:r(()=>e.SUBRULE1(e.valueExpression,{ARGS:[i]}),"ALT")}])}e.OPTION1(()=>e.CONSUME(Me)),e.AT_LEAST_ONE1(()=>e.CONSUME1(h))})},"ALT")}])}),e.CONSUME(N);let u=a.filter((A,O)=>!i.allowDuplicates.includes(Ce(A))&&a.findIndex(B=>Ce(B)===Ce(A))!==O);for(let A of u)e.addDuplicateAttributeError(A);let p=a.filter(A=>!s.includes(Ce(A)));for(let A of p)e.addIllegalAttributeError(A);let g=a.map(Ce),S=n.filter(A=>!g.includes(A));S.length>0&&e.addMissingAttributeError(t,S)}}r(hF,"objectAttrReq");function gF(e){return(t={})=>{let n=[],o=e.CONSUME(L);e.MANY(()=>e.CONSUME(h)),e.MANY_SEP({SEP:h,DEF:r(()=>{let i=!1,a=!1;e.MANY1(()=>{i&&!a&&e.addMissingError(o,"Expected a separator between attributes"),e.OPTION1({GATE:r(()=>t.allowDisabledKeys===!0,"GATE"),DEF:r(()=>e.CONSUME(jr),"DEF")});let s=e.OR1([{ALT:r(()=>e.CONSUME2(b),"ALT")},{ALT:r(()=>e.CONSUME2(M),"ALT")}]),c=Ce(s);n.includes(c)?e.addDuplicateAttributeError(s):n.push(c),e.CONSUME(Re),e.SUBRULE(e.valueExpression,{ARGS:[t]}),e.OPTION(()=>{e.CONSUME(Me),a=!0}),i=!0})},"DEF")}),e.MANY3(()=>e.CONSUME3(h)),e.CONSUME(N)}}r(gF,"objectWithAttributes");function TF(e){return()=>{e.AT_LEAST_ONE(()=>{e.CONSUME(wt),e.CONSUME(b),e.MANY1(()=>{e.CONSUME(Re),e.SUBRULE(e.valueExpression)})})}}r(TF,"pipedFilter");function EF(e){return()=>{e.sectionStack.push("requiredValueFnBody");let t=!1;e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(EF,"requiredValueFnBody");function SF(e){return()=>{e.CONSUME(Bt),e.SUBRULE(e.chainedIdentifier)}}r(SF,"shortFormVariable");var yF=r(e=>()=>{let t=!0,n=e.CONSUME(it);e.MANY(()=>e.CONSUME(h)),e.MANY1(()=>{t||e.addMissingError(n,"Missing comma or newline between string values in the array"),n=e.CONSUME(M),t=!1,e.OPTION(()=>{e.CONSUME(Me),t=!0}),e.MANY2(()=>{e.CONSUME1(h),t=!0})}),e.CONSUME(at)},"stringArray");function _F(e){return()=>{e.CONSUME(bg),e.CONSUME(v),e.SUBRULE(e.stringArray)}}r(_F,"tagsAttribute");var DW={allowQueryExpression:!1,allowIdentifier:!0,allowOptionalIfNull:!1,allowVariables:!0,allowDisabledKeys:!1},qW=[ic,ac,sc,cc,Nd,lc,Md,uc,Uc,Tc,Ec,Sc,_c,yc,dc,fc,pc,mc,hc,gc,bc,Rc,xc,Ac];function bF(e){return(t={},n=null)=>{t={...DW,...t};let o=!1,i=!1,a=!1,s=n===null;n=n||{openParentheses:0},e.MANY(()=>{n.openParentheses+=1,a=!0,e.CONSUME(ye)});let c=t.allowVariables,u=t.allowIdentifier,p=e.OR({DEF:[{ALT:r(()=>(e.CONSUME(M),!0),"ALT")},{ALT:r(()=>(e.CONSUME(vo),!0),"ALT")},{ALT:r(()=>(e.CONSUME(ze),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Yt),!0),"ALT")},{ALT:r(()=>(e.CONSUME(pt),!0),"ALT")},{ALT:r(()=>(e.CONSUME(mt),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Io),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Fo),!0),"ALT")},{ALT:r(()=>(e.CONSUME(nr),!0),"ALT")},{ALT:r(()=>(e.CONSUME(um),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Gp),!0),"ALT")},{GATE:r(()=>c,"GATE"),ALT:r(()=>(e.OR8([{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeAuthVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeEnvVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")}]),!0),"ALT")},{ALT:r(()=>(e.SUBRULE(e.castedValue),!0),"ALT")},{ALT:r(()=>(e.SUBRULE(e.objectWithAttributes,{ARGS:[t]}),!0),"ALT")},{ALT:r(()=>(e.SUBRULE(e.arrayWithValues,{ARGS:[t]}),!0),"ALT")},{ALT:r(()=>!1,"ALT")}]});e.OPTION4({GATE:r(()=>!p,"GATE"),DEF:r(()=>{u||e.addInvalidValueError(null,c?"cannot use identifiers in this context":"cannot use variables in this context"),e.CONSUME(b)},"DEF")}),e.OPTION1({GATE:r(()=>e.LA(1).tokenType===wt||e.LA(1).tokenType===h&&e.LA(2).tokenType===wt,"GATE"),DEF:r(()=>{o=!0,e.SUBRULE(e.filterFn,{ARGS:[t,n]})},"DEF")}),e.OPTION3({GATE:r(()=>n.openParentheses>0,"GATE"),DEF:r(()=>{i=a,n.openParentheses-=1,e.OPTION8(()=>e.CONSUME1(h)),e.CONSUME(pe),e.MANY1(()=>{e.CONSUME(G),e.CONSUME2(b)})},"DEF")});let g=!o||i;e.OPTION({GATE:r(()=>g,"GATE"),DEF:r(()=>{let S=e.OR7([{ALT:r(()=>e.CONSUME(ic),"ALT")},{ALT:r(()=>e.CONSUME(ac),"ALT")},{ALT:r(()=>e.CONSUME(sc),"ALT")},{ALT:r(()=>e.CONSUME(cc),"ALT")},{ALT:r(()=>e.CONSUME(Nd),"ALT")},{ALT:r(()=>e.CONSUME(lc),"ALT")},{ALT:r(()=>e.CONSUME(Md),"ALT")},{ALT:r(()=>e.CONSUME(uc),"ALT")},{ALT:r(()=>e.CONSUME(Cd),"ALT")},{ALT:r(()=>e.CONSUME(Ud),"ALT")},{ALT:r(()=>e.CONSUME(Od),"ALT")},{ALT:r(()=>e.CONSUME(Ld),"ALT")},{ALT:r(()=>e.CONSUME(Fd),"ALT")},{ALT:r(()=>e.CONSUME(wd),"ALT")},{ALT:r(()=>e.CONSUME(wS),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(FS),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Uc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Tc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Ec),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Sc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(_c),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(yc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(dc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(fc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(pc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(mc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(hc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(gc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(bc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Rc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(xc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Ac),"ALT")},{ALT:r(()=>e.CONSUME(Id),"ALT")}]);e.OPTION7({GATE:r(()=>t.allowOptionalIfNull&&qW.includes(S.tokenType),"GATE"),DEF:r(()=>e.CONSUME1(Cr),"DEF")}),e.SUBRULE1(e.valueExpression,{ARGS:[t,n]})},"DEF")}),e.OPTION2({GATE:r(()=>g&&!t.allowQueryExpression,"GATE"),DEF:r(()=>{e.CONSUME(Cr),e.SUBRULE2(e.valueExpression,{ARGS:[t,n]}),e.CONSUME2(Re),e.SUBRULE3(e.valueExpression,{ARGS:[t,n]})},"DEF")}),e.MANY3({GATE:r(()=>n.openParentheses>0,"GATE"),DEF:r(()=>{n.openParentheses-=1,e.OPTION5(()=>e.CONSUME2(h)),e.CONSUME2(pe)},"DEF")}),e.MANY2({GATE:r(()=>e.LA(1).tokenType===wt||e.LA(1).tokenType===h&&e.LA(2).tokenType===wt,"GATE"),DEF:r(()=>{e.SUBRULE1(e.filterFn,{ARGS:[t,n]})},"DEF")}),s&&n.openParentheses>0&&e.addMissingError(null,"Unmatched opening parenthesis, missing closing parenthesis")}}r(bF,"valueExpression");function RF(e){return Object.hasOwn(e,"emptyArray")||(e.emptyArray=e.RULE("emptyArray",()=>{e.CONSUME(it),e.CONSUME(at)})),()=>{e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(vo),"ALT")},{ALT:r(()=>e.CONSUME(Yt),"ALT")},{ALT:r(()=>e.CONSUME(ze),"ALT")},{ALT:r(()=>e.CONSUME(pt),"ALT")},{ALT:r(()=>e.CONSUME(mt),"ALT")},{ALT:r(()=>e.CONSUME(Fo),"ALT")},{ALT:r(()=>e.CONSUME(Io),"ALT")},{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeAuthVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeEnvVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.castedValue),"ALT")},{ALT:r(()=>e.SUBRULE(e.emptyArray),"ALT")}]),e.OPTION(()=>{e.SUBRULE(e.pipedFilter)})}}r(RF,"valueExpressionForResponse");function xF(e){return()=>{e.OR([{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")}]),e.OPTION(()=>e.SUBRULE(e.pipedFilter))}}r(xF,"variableOnly");var AF=r(e=>{e.mockAttribute=e.RULE("mockAttribute",pF(e)),e.arrayOfObjectAttrReq=e.RULE("arrayOfObjectAttrReq",Qw(e)),e.arrayOfStringLiterals=e.RULE("arrayOfStringLiterals",Xw(e)),e.arrayWithValues=e.RULE("arrayWithValues",Zw(e)),e.assignableVariableAs=e.RULE("assignableVariableAs",$w(e)),e.assignableVariableProperty=e.RULE("assignableVariableProperty",eF(e)),e.booleanValue=e.RULE("booleanValue",rF(e)),e.castedValue=e.RULE("castedValue",nF(e)),e.chainedIdentifier=e.RULE("chainedIdentifier",oF(e)),e.enumValue=e.RULE("enumValue",cF(e)),e.functionAttrReq=e.RULE("functionAttrReq",uF(e)),e.filterFn=e.RULE("filterFn",lF(e)),e.longFormVariable=e.RULE("longFormVariable",dF(e)),e.minimalFnBody=e.RULE("minimalFnBody",fF(e)),e.numberValue=e.RULE("numberValue",mF(e)),e.objectAttrReq=e.RULE("objectAttrReq",hF(e)),e.objectWithAttributes=e.RULE("objectWithAttributes",gF(e)),e.pipedFilter=e.RULE("pipedFilter",TF(e)),e.requiredValueFnBody=e.RULE("requiredValueFnBody",EF(e)),e.shortFormVariable=e.RULE("shortFormVariable",SF(e)),e.stringArray=e.RULE("stringArray",yF(e)),e.tagsAttribute=e.RULE("tagsAttribute",_F(e)),e.valueExpression=e.RULE("valueExpression",bF(e)),e.valueExpressionForResponse=e.RULE("valueExpressionForResponse",RF(e)),e.variableOnly=e.RULE("variableOnly",xF(e)),e.completeAuthVariable=e.RULE("completeAuthVariable",iF(e)),e.completeInputVariable=e.RULE("completeInputVariable",sF(e)),e.completeEnvVariable=e.RULE("completeEnvVariable",aF(e)),e.asVariable=e.RULE("asVariable",tF(e))},"register");function kF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1;e.sectionStack.push("mcpServerDeclaration");let p=e.CONSUME(rm);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(em),e.CONSUME(v),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.canonicalClause)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE1(e.flexibleStringClause,{ARGS:[tm]})},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0;let g=e.CONSUME(nm);e.CONSUME2(v),e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[g,["name"],["active","auth"],{types:{active:"boolean",auth:"string",name:"string"}}]})},"ALT")}])}),n||e.addMissingError(p,"{} is missing canonical clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(kF,"mcpServerDeclaration");function vF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1;e.sectionStack.push("mcpServerTriggerDeclaration");let g=e.CONSUME(am);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let S=e.CONSUME(om);e.CONSUME(v),e.SUBRULE(e.objectAttrReq,{ARGS:[S,["connection"],[],{types:{connection:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(im),e.CONSUME2(v),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.mcpServerClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),s||e.addMissingError(g,"{} is missing mcp_server clause"),a||e.addMissingError(g,"{} is missing an input clause"),u||e.addMissingError(g,"{} is missing a stack clause"),c||e.addMissingError(g,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(vF,"mcpServerTriggerDeclaration");function UF(e){return()=>{e.sectionStack.push("columnMetadataDefinition"),e.CONSUME(L),e.AT_LEAST_ONE(()=>{e.CONSUME(h),e.OR([{ALT:r(()=>e.SUBRULE(e.sensitiveFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>{e.CONSUME(Oo),e.CONSUME(v),e.CONSUME(M)},"ALT")}])}),e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(UF,"columnMetadataDefinition");function CF(e){return t=>{e.sectionStack.push("enumColumnMetadataDefinition"),e.CONSUME(L);let n=!1,o=!1,i=!1;e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.OR([{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.valuesFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>e.SUBRULE(e.sensitiveFieldAttribute),"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")}])}),n||e.addMissingError(t,"{} is missing the values attribute"),e.AT_LEAST_ONE2(()=>e.CONSUME2(h)),e.CONSUME(N),e.sectionStack.pop()}}r(CF,"enumColumnMetadataDefinition");function OF(e){return()=>{e.sectionStack.push("objectColumnMetadataDefinition"),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.sensitiveFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.schemaClause,{ARGS:[{include_file:!1}]}),"ALT")}])}),e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(OF,"objectColumnMetadataDefinition");function LF(e){e.columnMetadataDefinition=e.RULE("columnMetadataDefinition",UF(e)),e.enumColumnMetadataDefinition=e.RULE("enumColumnMetadataDefinition",CF(e)),e.objectColumnMetadataDefinition=e.RULE("objectColumnMetadataDefinition",OF(e))}r(LF,"register");function NF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1,g=[];e.sectionStack.push("middlewareDeclaration");let S=e.CONSUME(cm);e.OR([{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME(M),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.CONSUME(sm),e.CONSUME(v),e.SUBRULE(e.enumValue,{ARGS:["silent","rethrow","critical"]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.CONSUME(lm),e.CONSUME2(v),e.SUBRULE2(e.enumValue,{ARGS:["merge","replace"]})},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[g]})},"ALT")}])}),a||e.addMissingError(S,"{} is missing an input clause"),u||e.addMissingError(S,"{} is missing a stack clause"),s||e.addMissingError(S,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(NF,"middlewareDeclaration");function MF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1,g=!1,S=[];e.sectionStack.push("queryDeclaration");let A=e.CONSUME(hm);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")},{ALT:r(()=>e.CONSUME(is),"ALT")},{ALT:r(()=>e.CONSUME(xr),"ALT")}]),e.CONSUME(Ka),e.CONSUME(v),e.OR1([{ALT:r(()=>e.CONSUME($a),"ALT")},{ALT:r(()=>e.CONSUME(Ja),"ALT")},{ALT:r(()=>e.CONSUME(Qa),"ALT")},{ALT:r(()=>e.CONSUME(Xa),"ALT")},{ALT:r(()=>e.CONSUME(Za),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(ss),e.CONSUME1(v),e.CONSUME1(M)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.cacheClause)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!g,"GATE"),ALT:r(()=>{g=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[S]})},"ALT")}])}),s||e.addMissingError(A,"{} is missing an input clause"),p||e.addMissingError(A,"{} is missing a stack clause"),u||e.addMissingError(A,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(MF,"queryDeclaration");function wF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1;e.sectionStack.push("realtimeTriggerDeclaration");let g=e.CONSUME(km);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let S=e.CONSUME(xm);e.CONSUME(v),e.SUBRULE(e.objectAttrReq,{ARGS:[S,[],["join","message"],{types:{join:"boolean",message:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(Am),e.CONSUME2(v),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.channelClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),o||e.addMissingError(g,"{} is missing channel clause"),s||e.addMissingError(g,"{} is missing an input clause"),u||e.addMissingError(g,"{} is missing a stack clause"),c||e.addMissingError(g,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(wF,"realtimeTriggerDeclaration");function FF(e){return()=>{e.sectionStack.push("tableDeclaration"),e.CONSUME(Oo),e.OR1([{ALT:r(()=>e.CONSUME(M,{ERR_MSG:"expected table name after table statement"}),"ALT")},{ALT:r(()=>e.CONSUME(b,{ERR_MSG:"expected table name after table statement"}),"ALT")}]);let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c={};e.CONSUME(L),e.sectionStack.push("tableBody"),e.MANY1(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>e.SUBRULE(e.tagsAttribute),"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>e.SUBRULE(e.authClause),"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>e.SUBRULE(e.viewClause),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>e.SUBRULE(e.schemaClause,{ARGS:[{isTableSchema:!0},c]}),"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>e.SUBRULE(e.indexClause),"ALT")}])}),e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.sectionStack.pop(),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(FF,"tableDeclaration");function IF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1;e.sectionStack.push("tableTriggerDeclaration");let g=e.CONSUME(Sh);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let S=e.CONSUME(gh);e.CONSUME(v),e.SUBRULE(e.objectAttrReq,{ARGS:[S,[],["delete","insert","truncate","update"],{types:{delete:"boolean",insert:"boolean",truncate:"boolean",update:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(Th),e.CONSUME2(v),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.CONSUME(Eh),e.CONSUME3(v),e.SUBRULE(e.arrayOfStringLiterals)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.dbTableClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),i||e.addMissingError(g,"{} is missing table clause"),c||e.addMissingError(g,"{} is missing an input clause"),u||e.addMissingError(g,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(IF,"tableTriggerDeclaration");function PF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1,g=[];e.sectionStack.push("taskDeclaration"),e.CONSUME(rs),e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(Ea),e.CONSUME(v),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(_h),e.CONSUME2(v),e.CONSUME2(M)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.scheduleClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[g]})},"ALT")}])}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(PF,"taskDeclaration");function DF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1;e.sectionStack.push("toolDeclaration");let g=e.CONSUME(za);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.flexibleStringClause,{ARGS:[$p]})},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.stackClause,{ARGS:[{allowCallStatements:!0}]})},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),i||e.addMissingError(g,"{} is missing an input clause"),u||e.addMissingError(g,"{} is missing a stack clause"),c||e.addMissingError(g,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(DF,"toolDeclaration");function qF(e){return()=>{let t=!1,n=!1,o=!1,i=!1;e.sectionStack.push("workflowTestDeclaration");let a=e.CONSUME(cg);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(ns),e.CONSUME(v),e.CONSUME2(M)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.stackClause,{ARGS:[{allowExpectStatements:!0,allowCallStatements:!0}]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),o||e.addMissingError(a,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(qF,"workflowTestDeclaration");function BF(e){return()=>{let t=!1,n=!1,o=!1,i=!1;e.sectionStack.push("workspaceDeclaration"),e.CONSUME(fg),e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let a=e.CONSUME(lg);e.CONSUME(v),e.SUBRULE(e.objectAttrReq,{ARGS:[a,[],["ai_terms"],{types:{ai_terms:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0;let a=e.CONSUME(ug);e.CONSUME2(v),e.SUBRULE2(e.objectAttrReq,{ARGS:[a,[],["internal_docs","sql_columns","sql_names","track_performance"],{types:{internal_docs:"boolean",sql_columns:"boolean",sql_names:"boolean",track_performance:"boolean"}}]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0;let a=e.CONSUME(dg);e.CONSUME3(v),e.SUBRULE3(e.objectAttrReq,{ARGS:[a,[],["canonical"],{types:{canonical:"string"}}]})},"ALT")}])}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(BF,"workspaceDeclaration");function GF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1;e.sectionStack.push("workspaceTriggerDeclaration");let u=e.CONSUME(hg);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(b),"ALT")}]),e.CONSUME(L),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let p=e.CONSUME(pg);e.CONSUME(v),e.SUBRULE(e.objectAttrReq,{ARGS:[p,[],["branch_live","branch_merge","branch_new"],{types:{branch_live:"boolean",branch_merge:"boolean",branch_new:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(mg),e.CONSUME2(v),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),a||e.addMissingError(u,"{} is missing an input clause"),s||e.addMissingError(u,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(GF,"workspaceTriggerDeclaration");var jF=r(e=>{AF(e),hL(e),BO(e),Jw(e),LF(e),cL(e),e.addonDeclaration=e.RULE("addonDeclaration",UO(e)),e.agentDeclaration=e.RULE("agentDeclaration",CO(e)),e.agentTriggerDeclaration=e.RULE("agentTriggerDeclaration",OO(e)),e.queryDeclaration=e.RULE("queryDeclaration",MF(e)),e.apiGroupDeclaration=e.RULE("apiGroupDeclaration",LO(e)),e.branchDeclaration=e.RULE("branchDeclaration",GO(e)),e.tableDeclaration=e.RULE("tableDeclaration",FF(e)),e.mcpServerDeclaration=e.RULE("mcpServerDeclaration",kF(e)),e.mcpServerTriggerDeclaration=e.RULE("mcpServerTriggerDeclaration",vF(e)),e.middlewareDeclaration=e.RULE("middlewareDeclaration",NF(e)),e.realtimeTriggerDeclaration=e.RULE("realtimeTriggerDeclaration",wF(e)),e.tableTriggerDeclaration=e.RULE("tableTriggerDeclaration",IF(e)),e.taskDeclaration=e.RULE("taskDeclaration",PF(e)),e.toolDeclaration=e.RULE("toolDeclaration",DF(e)),e.workflowTestDeclaration=e.RULE("workflowTestDeclaration",qF(e)),e.workspaceDeclaration=e.RULE("workspaceDeclaration",BF(e)),e.workspaceTriggerDeclaration=e.RULE("workspaceTriggerDeclaration",GF(e)),e.functionDeclaration=e.RULE("functionDeclaration",gL(e))},"register");var BW={buildMismatchTokenMessage:Vn.buildMismatchTokenMessage,buildEarlyExitMessage:Vn.buildEarlyExitMessage,buildNotAllInputParsedMessage:Vn.buildNotAllInputParsedMessage,buildNoViableAltMessage:Vn.buildNoViableAltMessage},jg=class extends rc{static{r(this,"XanoBaseParser")}constructor(t){super(t,{errorMessageProvider:BW,recoveryEnabled:!1}),jF(this),this.sectionStack=[],this.reset()}functionAttrReq(){}ADD_ERROR(t,n){this.errors.push({message:t,token:n,line:n?n.startLine:-1,column:n?n.startColumn:-1,ruleName:"error"})}CONSUME_ANY(){if(this.inputIdx<this.input.length){let t=this.input[this.inputIdx];if(t&&typeof t.tokenTypeIdx<"u")return this.inputIdx++,t;this.errors.push({message:"Encountered an invalid token during recovery",token:t,line:t?t.startLine:-1,column:t?t.startColumn:-1,ruleName:"error"})}return null}addVariable(t,n,o=null){this.__symbolTable.var[t]={type:n,value:o}}addInput(t,n,o=!1,i=!1,a=!1){this.__symbolTable.input[t]={type:n,iterable:o,nullable:i,optional:a}}addMissingError(t,n){if(!t){this.SAVE_ERROR(new yt(n.replaceAll("{}",""),t));return}this.SAVE_ERROR(new yt(n.replaceAll("{}",t.image),t))}addMissingAttributeError(t,n){n=[].concat(n);let o=n.join(", "),i=n.length===1?`${t.image} is missing the ${o} attribute`:`${t.image} is missing the following attributes: ${o}`;this.SAVE_ERROR(new yt(i,t))}addIllegalAttributeError(t,n){n||(n=`Attribute \`${t.image}\` is not allowed`),this.SAVE_ERROR(new yt(n,t))}addExpectedValueTypeError(t,n){this.SAVE_ERROR(new yt(`Expected value of \`${t.image}\` to be of type \`${n}\``,t))}addExpectedValueError(t,n){Y(n)&&n.length>1?this.SAVE_ERROR(new yt(`Expected value of \`${t.image}\` to be one of ${n.map(o=>`\`${o}\``).join(", ")}`,t)):this.SAVE_ERROR(new yt(`Expected value of \`${t.image}\` to be \`${n}\``,t))}addDuplicateAttributeError(t){this.SAVE_ERROR(new yt(`Duplicate attribute \`${t.image}\``,t))}addDuplicateNameError(t,n){n?this.SAVE_ERROR(new yt(`Duplicate ${n} name '${t.image}'`,t)):this.SAVE_ERROR(new yt(`Duplicate name '${t.image}'`,t))}addInvalidValueError(t,n){this.SAVE_ERROR(new yt(n,t))}requireRules(...t){for(let n of t){if(typeof n!="function")throw new Error(`requireRules only accepts functions, ${typeof n} given`);Object.hasOwn(this,n.name)||(this[n.name]=this.RULE(n.name,n(this)))}}reset(){super.reset(),this.sectionStack=[],this.__symbolTable={input:{},var:{},auth:{},env:{}}}};function Vg(e,t){t||(t=hn(e));let n=Po(e);switch(se.input=n.tokens,t.toLowerCase()){case"addon":return se.addonDeclaration(),se;case"agent":return se.agentDeclaration(),se;case"agent_trigger":return se.agentTriggerDeclaration(),se;case"api":return se.queryDeclaration(),se;case"api_group":return se.apiGroupDeclaration(),se;case"branch":return se.branchDeclaration(),se;case"db":return se.tableDeclaration(),se;case"mcp_server":return se.mcpServerDeclaration(),se;case"mcp_server_trigger":return se.mcpServerTriggerDeclaration(),se;case"middleware":return se.middlewareDeclaration(),se;case"realtime_trigger":return se.realtimeTriggerDeclaration(),se;case"table_trigger":return se.tableTriggerDeclaration(),se;case"task":return se.taskDeclaration(),se;case"tool":return se.toolDeclaration(),se;case"workflow_test":return se.workflowTestDeclaration(),se;case"workspace":return se.workspaceDeclaration(),se;case"workspace_trigger":return se.workspaceTriggerDeclaration(),se;case"cfn":default:return se.functionDeclaration(),se}}r(Vg,"xanoscriptParser");var zS=class extends jg{static{r(this,"XanoScriptParser")}constructor(){super(Cc),this.performSelfAnalysis()}},se=new zS;var GW=`
# upper
Convert text to uppercase

# lower
Convert text to lowercase

# trim
Remove whitespace from the beginning and end of a string

# count
Get the number of elements in an array or characters in a string

# first
Get the first element of an array

# last
Get the last element of an array

# reverse
Reverse the order of elements in an array

# sin
Calculate the sine of a number (in radians)

# cos
Calculate the cosine of a number (in radians)

# floor
Round a number down to the nearest integer

# ceil
Round a number up to the nearest integer

# round
Round a number to the nearest integer

# concat
Concatenate strings together

# length
Get the length of a string or array

# split
Split a string into an array based on a delimiter

# join
Join array elements into a string with a separator

# push
Add an element to the end of an array

# pop
Remove and return the last element from an array

# unique
Remove duplicate values from an array

# sort
Sort an array in ascending order

# filter_empty
Remove empty values from an array

# flatten
Flatten a nested array structure

# merge
Merge two arrays together

# abs
Get the absolute value of a number

# max
Get the maximum value from an array of numbers

# min
Get the minimum value from an array of numbers

# sum
Calculate the sum of numbers in an array

# avg
Calculate the average of numbers in an array
`,jW=new us(GW);function VW(e){return!!e.nextTokenType.LABEL}r(VW,"suggestable");function WW(e){return e.length===0?!1:e[e.length-1].tokenType===wt}r(WW,"isAfterPipeToken");function zW(){return Gg.map(e=>{let t=jW.__filterDoc[e];return{label:e,kind:Oc("function"),documentation:t?{kind:"markdown",value:t}:void 0}})}r(zW,"createFilterSuggestions");function VF(e,t){try{let o=Po(e).tokens;if(WW(o))return zW();let i;if(se.reset(),t==="db")i=se.computeContentAssist("tableDeclaration",o);else if(t==="api")i=se.computeContentAssist("queryDeclaration",o);else if(t==="function")i=se.computeContentAssist("functionDeclaration",o);else if(t==="task")i=se.computeContentAssist("taskDeclaration",o);else return[];return i.filter(VW).map(s=>{let c=Bg(s.nextTokenType.name);return{label:s.nextTokenType.LABEL,kind:Oc(c)}})}catch(n){return console.error(n),[]}}r(VF,"getContentAssistSuggestions");function WF(e,t){let n=t.get(e.textDocument.uri);if(!n)return console.error("onCompletion(): Document not found for URI:",e.textDocument.uri),null;let o=e.position,i=n.getText(),a=n.offsetAt(o);if(eu(a,i))return null;let c=hn(i);return VF(i.slice(0,a),c)}r(WF,"onCompletion");function zF(e,t){let n=e.document;if(!n)return console.error("onDidChangeContent(): Document not found for URI:",e.textDocument.uri),null;let o=n.getText(),i=hn(o);try{let a=Vg(o,i);a.errors.length>0&&t.sendDiagnostics({uri:n.uri,diagnostics:[]});for(let c of a.errors)console.error(`onDidChangeContent(): Error parsing document: ${c.name}`);let s=a.errors.map(c=>({severity:1,range:c.token?{start:n.positionAt(c.token.startOffset),end:n.positionAt(c.token.endOffset+1)}:{start:{line:0,character:0},end:{line:0,character:1}},message:c.message}));console.log(`onDidChangeContent(): sending diagnostic (${a.errors.length} errors) for scheme:`,i),t.sendDiagnostics({uri:n.uri,diagnostics:s})}catch(a){let s=[{severity:1,range:{start:{line:0,character:0},end:{line:0,character:1}},message:a.message||"Syntax error in XanoScript code"}];t.sendDiagnostics({uri:n.uri,diagnostics:s})}}r(zF,"onDidChangeContent");var HF=`# deg2rad

Convert degrees to radians

\`\`\`xs
180|deg2rad
\`\`\`

Result: \`3.141592...\`

# rad2deg

Convert radians to degrees

\`\`\`xs
3.141592|rad2deg
\`\`\`

Result: \`180\`

# number_format

Format a number with flexible support over decimal places, thousands separator, and decimal separator.

\`\`\`xs
31253212.141592|number_format:2:.:,
\`\`\`

Result: \`"31,253,212.14"\`

# sin

Calculates the sine of the supplied value in radians

\`\`\`xs
3.14159|sin
\`\`\`

Result: \`0\`

# asin

Calculates the arc sine of the supplied value in radians

\`\`\`xs
1|asin
\`\`\`

Result: \`1.57079...\`

# asinh

Calculates the inverse hyperbolic sine of the supplied value in radians

\`\`\`xs
1|asinh
\`\`\`

Result: \`0.88137...\`

# cos

Calculates the cosine of the supplied value in radians

\`\`\`xs
1|cos
\`\`\`

Result: \`0.54030...\`

# acos

Calculates the arc cosine of the supplied value in radians

\`\`\`xs
1|acos
\`\`\`

Result: \`0\`

# acosh

Calculates the inverse hyperbolic cosine of the supplied value in radians

\`\`\`xs
11.592|acosh
\`\`\`

Result: \`3.14159...\`

# tan

Calculates the tangent of the supplied value in radians

\`\`\`xs
0.785398|tan
\`\`\`

Result: \`1\`

# atan

Calculates the arc tangent of the supplied value in radians

\`\`\`xs
1|atan
\`\`\`

Result: \`0.78539...\`

# atanh

Calculates the inverse hyperbolic tangent of the supplied value in radians

\`\`\`xs
0.6666|atanh
\`\`\`

Result: \`0.80470...\`

# floor

Round a decimal down to its integer equivalent

\`\`\`xs
2.5|floor
\`\`\`

Result: \`2\`

# ceil

Round a decimal up to its integer equivalent

\`\`\`xs
2.5|ceil
\`\`\`

Result: \`3\`

# round

Round a decimal with optional precision

\`\`\`xs
2.5432|round:1
\`\`\`

Result: \`3\`

# first

Get the first entry of an array

\`\`\`xs
["five","six","seven"]|first
\`\`\`

Result: \`"five"\`

# last

Get the last entry of an array

\`\`\`xs
["five","six","seven"]|last
\`\`\`

Result: \`"seven"\`

# count

Return the number of items in an object/array

\`\`\`xs
["five","six","seven"]|count
\`\`\`

Result: \`3\`

# range

Returns array of values between the specified start/stop.

\`\`\`xs
|range:10:15
\`\`\`

Result: \`[10,11,12,13,14,15]\`

# reverse

Returns values of an array in reverse order

\`\`\`xs
[12,13,14,15]|reverse
\`\`\`

Result: \`[15,14,13,12]\`

# unique

Returns unique values of an array

\`\`\`xs
[12,13,13,12,11]|unique
\`\`\`

Result: \`[12,13,11]\`

# safe_array

Always returns an array. Uses the existing value if it is an array or creates an array of one element.

\`\`\`xs
12|safe_array
\`\`\`

Result: \`[12]\`

# flatten

Flattens a multidimensional array into a single level array of values.

\`\`\`xs
[1,[2,3],[[4,5]]]|flatten
\`\`\`

Result: \`[1,2,3,4,5]\`

# filter_empty

Returns a new array with only entries that are not empty ("", null, 0, "0", false, [], {})

\`\`\`xs
[{a:1, b:null}, {a:0, b:4}]|filter_empty:a
\`\`\`

Result: \`[{a:1, b:null}]\`

# filter_empty_text

Returns a new array with only entries that are not empty ("", null, 0, "0", false, [], {})

\`\`\`xs
[{a:"x", b:null}, {a:"", b:4}]|filter_empty_text:a
\`\`\`

Result:

\`\`\`json
[
  {
    "a": "x",
    "b": null
  }
]
\`\`\`

# filter_empty_array

Returns a new array with only entries that are not an empty array \`[]\`

\`\`\`xs
[{a:[1,2], b:null}, {a:[], b:4}]|filter_empty_array:a
\`\`\`

Result:

\`\`\`json
[
  {
    "a": [1, 2],
    "b": null
  }
]
\`\`\`

# filter_null

Returns a new array with only entries that are not null

\`\`\`xs
[{a:1, b:null}, {a:null, b:4}]|filter_null:a
\`\`\`

Result:

\`\`\`json
[
  {
    "a": 1,
    "b": null
  }
]
\`\`\`

# filter_empty_object

Returns a new array with only entries that are not an empty object \`{}\`

\`\`\`xs
[{a:{x:1}, b:null}, {a:{}, b:4}]|filter_empty_object:a
\`\`\`

Result:

\`\`\`json
[
  {
    "a": { "x": 1 },
    "b": null
  }
]
\`\`\`

# sort

Sort an array of elements with an optional path inside the element

\`\`\`xs
[{v:"a", e:20}, {v:"z", e:10}]|sort:v:text:true
\`\`\`

Result: \`[{v:"z", e:10}, {v:"a", e:20}]\`

# !fsort:sort

Sort an array of elements with an optional path inside the element

\`\`\`xs
[{v:"a", e:20}, {v:"z", e:10}]|fsort:v:text:true
\`\`\`

Result: \`[{v:"z", e:10}, {v:"a", e:20}]\`

# shuffle

Shuffles the order of the entries in the array.

\`\`\`xs
[1,2,3,4]|shuffle
\`\`\`

Result: \`[3,2,4,1]\`

# !array_shuffle:shuffle

Shuffles the order of the entries in the array.

\`\`\`xs
[1,2,3,4]|array_shuffle
\`\`\`

Result: \`[3,2,4,1]\`

# diff

Return the entries from the first array that are not in the second array. Only values are used for matching.

\`\`\`xs
[1,2,3,4]|diff:[3,2]
\`\`\`

Result: \`[1,4]\`

# !array_diff:diff

Return the entries from the first array that are not in the second array. Only values are used for matching.

\`\`\`xs
[1,2,3,4]|array_diff:[3,2]
\`\`\`

Result: \`[1,4]\`

# diff_assoc

Return the entries from the first array that are not in the second array. Values and keys are used for matching.

\`\`\`xs
[{"a": "green"},{"b": "brown"},{"c":"blue"},"red"]|diff_assoc:[{"a":"green"}, "yellow", "red"]
\`\`\`

Result: \`[{a: "green",b: "brown", "red"]\`

# !array_diff_assoc:diff_assoc

Return the entries from the first array that are not in the second array. Values and keys are used for matching.

\`\`\`xs
[{"a": "green"},{"b": "brown"},{"c":"blue"},"red"]|array_diff_assoc:[{"a":"green"}, "yellow", "red"]
\`\`\`

Result: \`[{a: "green",b: "brown", "red"]\`

# intersect

Return the entries from the first array that are also present in the second array. Only values are used for matching.

\`\`\`xs
[1,2,3,4]|intersect:[3,2]
\`\`\`

Result: \`[2,3]\`

# !array_intersect:intersect

Return the entries from the first array that are also present in the second array. Only values are used for matching.

\`\`\`xs
[1,2,3,4]|array_intersect:[3,2]
\`\`\`

Result: \`[2,3]\`

# intersect_assoc

Return the entries from the first array that are also present in the second array. Values and keys are used for matching.

\`\`\`xs
[{"a": "green"},{"b": "brown"},{"c":"blue"},"red"]|intersect_assoc:[{"a":"green"},{"b":"yellow"},"blue","red"]
\`\`\`

Result: \`[{a: "green",b: "brown", "red"]\`

# !array_intersect_assoc:intersect_assoc

Return the entries from the first array that are also present in the second array. Values and keys are used for matching.

\`\`\`xs
[{"a": "green"},{"b": "brown"},{"c":"blue"},"red"]|array_intersect_assoc:[{"a":"green"},{"b":"yellow"},"blue","red"]
\`\`\`

Result: \`[{a: "green",b: "brown", "red"]\`

# merge

Merge the first level of elements of both arrays together and return the new array

\`\`\`xs
[1,2,3]|merge:["a","b","c"]
\`\`\`

Result: \`[1,2,3,"a","b","c"]\`

# !array_merge:merge

Merge the first level of elements of both arrays together and return the new array

\`\`\`xs
[1,2,3]|array_merge:["a","b","c"]
\`\`\`

Result: \`[1,2,3,"a","b","c"]\`

# merge_recursive

Merge the elements from all levels of both arrays together and return the new array

\`\`\`xs
{color:{favorite: ["red"]}}|merge_recursive:{color: {favorite: ["green","blue"]}}
\`\`\`

Result: \`{"color":{"favorite": ["red","green","blue"]}}\`

# !array_merge_recursive:merge_recursive

Merge the elements from all levels of both arrays together and return the new array

\`\`\`xs
{color:{favorite: ["red"]}}|array_merge_recursive:{color: {favorite: ["green","blue"]}}
\`\`\`

Result: \`{"color":{"favorite": ["red","green","blue"]}}\`

# index_by

Create a new array indexed off of the value of each item's path

\`\`\`xs
[{id:1,g:"x"},{id:2,g:"y"},{id:3,g:"x"}]|index_by:g
\`\`\`

Result: \`{"x": [{"id":1,"g":"x"},{"id":3,"g":"x"}], "y": [{"id":2,"g":"y"}]}\`

# push

Push an element on to the end of an array and return the new array

\`\`\`xs
[1,2,3]|push:"a"
\`\`\`

Result: \`[1,2,3,"a"]\`

# !array_push:push

Push an element on to the end of an array and return the new array

\`\`\`xs
[1,2,3]|array_push:"a"
\`\`\`

Result: \`[1,2,3,"a"]\`

# pop

Pops the last element of the array off and returns it

\`\`\`xs
[1,2,3]|pop
\`\`\`

Result: \`3\`

# !array_pop:pop

Pops the last element of the array off and returns it

\`\`\`xs
[1,2,3]|array_pop
\`\`\`

Result: \`3\`

# unshift

Push an element to the beginning of an array and return the new array

\`\`\`xs
[1,2,3]|unshift:0
\`\`\`

Result: \`[0,1,2,3]\`

# !array_unshift:unshift

Push an element to the beginning of an array and return the new array

\`\`\`xs
[1,2,3]|array_unshift:0
\`\`\`

Result: \`[0,1,2,3]\`

# shift

Shifts the first element of the array off and returns it

\`\`\`xs
[1,2,3]|shift
\`\`\`

Result: \`1\`

# !array_shift:shift

Shifts the first element of the array off and returns it

\`\`\`xs
[1,2,3]|array_shift
\`\`\`

Result: \`1\`

# remove

Remove any elements from the array that match the supplied value and then return the new array

\`\`\`xs
[{v:1},{v:2},{v:3}]|remove:{v:2}
\`\`\`

Result: \`[{v:1},{v:3}]\`

# !array_remove:remove

Remove any elements from the array that match the supplied value and then return the new array

\`\`\`xs
[{v:1},{v:2},{v:3}]|array_remove:{v:2}
\`\`\`

Result: \`[{v:1},{v:3}]\`

# append

Push an element on to the end of an array within an object and return the updated object

\`\`\`xs
[1,2,3]|append:4
\`\`\`

Result: \`[1,2,3,4]\`

# prepend

Push an element on to the beginning of an array within an object and return the updated object

\`\`\`xs
[1,2,3]|prepend:0
\`\`\`

Result: \`[0,1,2,3]\`

# abs

Returns the absolute value

\`\`\`xs
-10|abs
\`\`\`

Result: \`10\`

# sqrt

Returns the square root of the value

\`\`\`xs
9|sqrt
\`\`\`

Result: \`3\`

# exp

Returns the exponent of mathematical expression "e"

\`\`\`xs
0|exp
\`\`\`

Result: \`1\`

# log

Returns the logarithm with a custom base

\`\`\`xs
2|log:2
\`\`\`

Result: \`1\`

# log10

Returns the Base-10 logarithm

\`\`\`xs
100|log10
\`\`\`

Result: \`2\`

# ln

Returns the natural logarithm

\`\`\`xs
10|ln
\`\`\`

Result: \`2.30258...\`

# pow

Returns the value raised to the power of exp.

\`\`\`xs
10|pow:2
\`\`\`

Result: \`100\`

# array_min

Returns the min of the values of the array

\`\`\`xs
[1,2,3]|array_min
\`\`\`

Result: \`1\`

# array_max

Returns the max of the values of the array

\`\`\`xs
[1,2,3]|array_max
\`\`\`

Result: \`3\`

# !num_min:min

Returns the min both values

\`\`\`xs
1|num_min:0
\`\`\`

Result: \`0\`

# !num_max:max

Returns the max both values

\`\`\`xs
5|num_max:20
\`\`\`

Result: \`20\`

# sum

Returns the sum of the values of the array

\`\`\`xs
[1,2,3,4]|sum
\`\`\`

Result: \`10\`

# avg

Returns the average of the values of the array

\`\`\`xs
[1,2,3,4]|avg
\`\`\`

Result: \`2.5\`

# product

Returns the product of the values of the array

\`\`\`xs
[1,2,3,4]|product
\`\`\`

Result: \`24\`

# !eq:equals

Returns a boolean if both values are equal

\`\`\`xs
4|equals:4
\`\`\`

Result: \`true\`

# eq

Returns a boolean if both values are equal

\`\`\`xs
4|eq:4
\`\`\`

Result: \`true\`

# not_equals

Returns a boolean if both values are not equal

\`\`\`xs
4|not_equals:4
\`\`\`

Result: \`false\`

# !ne:not_equals

Returns a boolean if both values are not equal

\`\`\`xs
4|ne:4
\`\`\`

Result: \`false\`

# greater_than

Returns a boolean if the left value is greater than the right value

\`\`\`xs
4|greater_than:2
\`\`\`

Result: \`true\`

# !gt:greater_than

Returns a boolean if the left value is greater than the right value

\`\`\`xs
4|gt:2
\`\`\`

Result: \`true\`

# greater_than_or_equal

Returns a boolean if the left value is greater than or equal to the right value

\`\`\`xs
4|greater_than_or_equal:2
\`\`\`

Result: \`true\`

# !gte:greater_than_or_equal

Returns a boolean if the left value is greater than or equal to the right value

\`\`\`xs
4|gte:2
\`\`\`

Result: \`true\`

# less_than

Returns a boolean if the left value is less than the right value

\`\`\`xs
4|less_than:2
\`\`\`

Result: \`false\`

# !lt:less_than

Returns a boolean if the left value is less than the right value

\`\`\`xs
4|lt:2
\`\`\`

Result: \`false\`

# less_than_or_equal

Returns a boolean if the left value is less than or equal to the right value

\`\`\`xs
4|less_than_or_equal:2
\`\`\`

Result: \`false\`

# !lte:less_than_or_equal

Returns a boolean if the left value is less than or equal to the right value

\`\`\`xs
4|lte:2
\`\`\`

Result: \`false\`

# odd

Returns whether or not the value is odd

\`\`\`xs
4|odd
\`\`\`

Result: \`false\`

# even

Returns whether or not the value is even

\`\`\`xs
4|even
\`\`\`

Result: \`true\`

# in

Returns whether or not the value is in the array

\`\`\`xs
[1,2,3]|in:3
\`\`\`

Result: \`true\`

# add

Add 2 values together and return the answer

\`\`\`xs
2|add:3
\`\`\`

Result: \`5\`

# subtract

Subtract 2 values together and return the answer

\`\`\`xs
2|subtract:3
\`\`\`

Result: \`-1\`

# !sub:subtract

Subtract 2 values together and return the answer

\`\`\`xs
2|sub:3
\`\`\`

Result: \`-1\`

# multiply

Multiply 2 values together and return the answer

\`\`\`xs
2|multiply:3
\`\`\`

Result: \`6\`

# !mul:multiply

Multiply 2 values together and return the answer

\`\`\`xs
2|mul:3
\`\`\`

Result: \`6\`

# modulus

Modulus 2 values together and return the answer

\`\`\`xs
20|modulus:3
\`\`\`

Result: \`2\`

# !mod:modulus

Modulus 2 values together and return the answer

\`\`\`xs
20|mod:3
\`\`\`

Result: \`2\`

# divide

Divide 2 values together and return the answer

\`\`\`xs
20|divide:4
\`\`\`

Result: \`5\`

# !div:divide

Divide 2 values together and return the answer

\`\`\`xs
20|div:4
\`\`\`

Result: \`5\`

# bitwise_and

Bitwise AND 2 values together and return the answer

\`\`\`xs
7|bitwise_and:3
\`\`\`

Result: \`3\`

# bitwise_or

Bitwise OR 2 values together and return the answer

\`\`\`xs
7|bitwise_or:9
\`\`\`

Result: \`15\`

# bitwise_xor

Bitwise XOR 2 values together and return the answer

\`\`\`xs
7|bitwise_xor:9
\`\`\`

Result: \`14\`

# not

Returns the opposite of the existing value evaluated as a boolean

\`\`\`xs
true|not
\`\`\`

Result: \`false\`

# bitwise_not

Returns the existing value with its bits flipped

\`\`\`xs
8|bitwise_not
\`\`\`

Result: \`-9\`

# is_null

Returns whether or not the value is null

\`\`\`xs
8|is_null
\`\`\`

Result: \`false\`

# !null:is_null

Returns whether or not the value is null

\`\`\`xs
8|null
\`\`\`

Result: \`false\`

# is_empty

Returns whether or not the value is empty ("", null, 0, "0", false, [], {})

\`\`\`xs
[]|is_empty
\`\`\`

Result: \`true\`

# !empty:is_empty

Returns whether or not the value is empty ("", null, 0, "0", false, [], {})

\`\`\`xs
[]|empty
\`\`\`

Result: \`true\`

# is_object

Returns whether or not the value is an object.

\`\`\`xs
{id:2, value:3, size:4}|is_object
\`\`\`

Result: \`true\`

# is_array

Returns whether or not the value is a numerical indexed array.

\`\`\`xs
[1,2,3]|is_array
\`\`\`

Result: \`true\`

# is_int

Returns whether or not the value is an integer.

\`\`\`xs
123|is_int
\`\`\`

Result: \`true\`

# is_decimal

Returns whether or not the value is a decimal value.

\`\`\`xs
123.45|is_decimal
\`\`\`

Result: \`true\`

# is_bool

Returns whether or not the value is a boolean.

\`\`\`xs
false|is_bool
\`\`\`

Result: \`true\`

# is_text

Returns whether or not the value is text.

\`\`\`xs
"213"|is_text
\`\`\`

Result: \`true\`

# addslashes

Adds a backslash to the following characters: single quote, double quote, backslash, and null character.

\`\`\`xs
'he said "Hi!"'|addslashes
\`\`\`

Result: \`"he said \\\\"Hi!\\\\""\`

# escape

Converts special characters into their escaped variants. Ex: for tabs and
for newlines.

\`\`\`\`xs
'he sai
\`\`d

- "Hi!"'|escape\`

Result: \`"he said \\\\n-\\\\\\"Hi!\\\\\\""\`

# list_encodings

List support character encodings

\`\`\`xs
|list_encodings
\`\`\`\`

Result: \`["UTF-8", "ISO-8859-1", ...]\`

# detect_encoding

Detect the character encoding of the supplied text

\`\`\`xs
"\xE9tude"|detect_encoding
\`\`\`

Result: \`UTF-8\`

# to_utf8

Convert the supplied text from its binary form (ISO-8859-1) to UTF-8.

\`\`\`xs
"\uFFFDtudes"|to_utf8
\`\`\`

Result: \`"\xE9tudes"\`

# from_utf8

Convert the supplied text from UTF-8 to its binary form (ISO-8859-1).

\`\`\`xs
"\xE9tudes"|from_utf8
\`\`\`

Result: \`"\uFFFDtudes"\`

# convert_encoding

Convert the character encoding of the supplied text

\`\`\`xs
"\xE9tudes"|convert_encoding:"ISO-8859-1":"UTF-8"
\`\`\`

Result: \`"\uFFFDtudes"\`

# to_lower

Converts all characters to lower case and returns the result

\`\`\`xs
"Epic Battle"|to_lower
\`\`\`

Result: \`"epic battle"\`

# !lower:to_lower

Converts all characters to lower case and returns the result

\`\`\`xs
"Epic Battle"|lower
\`\`\`

Result: \`"epic battle"\`

# to_upper

Converts all characters to upper case and returns the result

\`\`\`xs
"Epic Battle"|to_upper
\`\`\`

Result: \`"EPIC BATTLE"\`

# !upper:to_upper

Converts all characters to upper case and returns the result

\`\`\`xs
"Epic Battle"|upper
\`\`\`

Result: \`"EPIC BATTLE"\`

# trim

Trim whitespace or other characters from both sides and return the result

\`\`\`xs
"  Epic Battle  "|trim
\`\`\`

Result: \`"Epic Battle"\`

# ltrim

Trim whitespace or other characters from the left side and return the result

\`\`\`xs
"  Epic Battle  "|ltrim
\`\`\`

Result: \`"Epic Battle  "\`

# rtrim

Trim whitespace or other characters from the right return the result

\`\`\`xs
"  Epic Battle  "|rtrim
\`\`\`

Result: \`"  Epic Battle"\`

# capitalize

Converts the first letter of each word to a capital letter

\`\`\`xs
"epic battle"|capitalize
\`\`\`

Result: \`"Epic Battle"\`

# substr

Extracts a section of text

\`\`\`xs
"Epic Battle"|substr:5:6
\`\`\`

Result: \`"Battle"\`

# split

Splits text into an array of text and returns the result

\`\`\`xs
"Epic Battle"|split:" "
\`\`\`

Result: \`["Epic","Battle"]\`

# join

Joins an array into a text string via the separator and returns the result

\`\`\`xs
["Epic","Battle"]|join:" "
\`\`\`

Result: \`"Epic Battle"\`

# slice

Extract a section from an array.

\`\`\`xs
[1,2,3,4,5]|slice:2:2
\`\`\`

Result: \`[3,4]\`

# !array_slice:slice

Extract a section from an array.

\`\`\`xs
[1,2,3,4,5]|array_slice:2:2
\`\`\`

Result: \`[3,4]\`

# strlen

Returns the number of characters

\`\`\`xs
"Epic Battle"|strlen
\`\`\`

Result: \`11\`

# strip_html

Removes HTML tags from a string

\`\`\`xs
"<p>Epic Battle</p>"|strip_html
\`\`\`

Result: \`"Epic Battle"\`

# !strip_tags:strip_html

Removes HTML tags from a string

\`\`\`xs
"<p>Epic Battle</p>"|strip_tags
\`\`\`

Result: \`"Epic Battle"\`

# unaccent

Removes accents from characters

\`\`\`xs
"\xE9tudes"|unaccent
\`\`\`

Result: \`"etudes"\`

# !strip_accents:unaccent

Removes accents from characters

\`\`\`xs
"\xE9tudes"|strip_accents
\`\`\`

Result: \`"etudes"\`

# index

Returns the index of the case-sensitive expression or false if it can't be found

\`\`\`xs
"Epic Battle"|index:"Battle"
\`\`\`

Result: \`5\`

# !strpos:index

Returns the index of the case-sensitive expression or false if it can't be found

\`\`\`xs
"Epic Battle"|strpos:"Battle"
\`\`\`

Result: \`5\`

# iindex

Returns the index of the case-insensitive expression or false if it can't be found

\`\`\`xs
"Epic Battle"|iindex:"battle"
\`\`\`

Result: \`5\`

# !stripos:iindex

Returns the index of the case-insensitive expression or false if it can't be found

\`\`\`xs
"Epic Battle"|stripos:"battle"
\`\`\`

Result: \`5\`

# starts_with

Returns whether or not the expression is present at the beginning

\`\`\`xs
"Epic Battle"|starts_with:"Epic"
\`\`\`

Result: \`true\`

# istarts_with

Returns whether or not the case-insensitive expression is present at the beginning

\`\`\`xs
"Epic Battle"|istarts_with:"epic"
\`\`\`

Result: \`true\`

# ends_with

Returns whether or not the expression is present at the end

\`\`\`xs
"Epic Battle"|ends_with:"Battle"
\`\`\`

Result: \`true\`

# iends_with

Returns whether or not the case-insensitive expression is present at the end

\`\`\`xs
"Epic Battle"|iends_with:"battle"
\`\`\`

Result: \`true\`

# contains

Returns whether or not the expression is found

\`\`\`xs
"Epic Battle"|contains:"Battle"
\`\`\`

Result: \`true\`

# icontains

Returns whether or not the case-insensitive expression is found

\`\`\`xs
"Epic Battle"|icontains:"battle"
\`\`\`

Result: \`true\`

# set

Sets a value at the path within the object and returns the updated object

\`\`\`xs
{"fizz":"buzz"}|set:"foo":"bar"
\`\`\`

Result: \`{"fizz": "buzz","foo":"bar"}\`

# set_conditional

Sets a value at the path within the object and returns the updated object, if the conditional expression is true

\`\`\`xs
{'fizz':'buzz'}|set_conditional:'foo':'bar':2==1+1
\`\`\`

Result: \`{'fizz':'buzz','foo':'bar'}\`

# set_ifnotempty

Sets a value (if it is not empty: "", null, 0, "0", false, [], {}) at the path within the object and returns the updated object

\`\`\`xs
{'fizz':'buzz'}|set_ifnotempty:'foo':'bar'
\`\`\`

Result: \`{'fizz':'buzz','foo':'bar'}\`

# set_ifnotnull

Sets a value (if it is not null) at the path within the object and returns the updated object

\`\`\`xs
{'fizz':'buzz'}|set_ifnotnull:'foo':'bar'
\`\`\`

Result: \`{'fizz':'buzz','foo':'bar'}\`

# first_notnull

Returns the first value that is not null

\`\`\`xs
null|first_notnull:0
\`\`\`

Result: \`0\`

# first_notempty

Returns the first value that is not empty - i.e. not ("", null, 0, "0", false, [], {})

\`\`\`xs
""|first_notempty:1
\`\`\`

Result: \`1\`

# unset

Removes a value at the path within the object and returns the updated object

\`\`\`xs
{'fizz':'buzz','foo':'bar'}|unset:'foo'
\`\`\`

Result: \`{'fizz':'buzz'}\`

# transform

Processes an expression with local data bound to the $this variable

\`\`\`xs
2|transform:$$+3"
\`\`\`

Result: \`5\`

# get

Returns the value of an object at the specified path

\`\`\`xs
{'fizz':'buzz'}|get:'fizz'
\`\`\`

Result: \`"buzz"\`

# has

Returns the existence of whether or not something is present in the object at the specified path

\`\`\`xs
{'fizz':'buzz'}|has:'fizz'
\`\`\`

Result: \`true\`

# fill

Create an array of a certain size with a default value.

\`\`\`xs
"v"|fill:0:6
\`\`\`

Result: \`["v","v","v","v","v","v"]\`

# !array_fill:fill

Create an array of a certain size with a default value.

\`\`\`xs
"v"|array_fill:0:6
\`\`\`

Result: \`["v","v","v","v","v","v"]\`

# fill_keys

Create an array of keys with a default value.

\`\`\`xs
key|fill_keys:["a","b","c"]
\`\`\`

Result: \`{"a":"key","b":"key","c":"key"}\`

# !array_fill_keys:fill_keys

Create an array of keys with a default value.

\`\`\`xs
key|array_fill_keys:["a","b","c"]
\`\`\`

Result: \`{"a":"key","b":"key","c":"key"}\`

# keys

Get the property keys of an object/array as a numerically indexed array.

\`\`\`xs
{"a":1,"b":2,"c":3}|keys
\`\`\`

Result: \`["a","b","c"]\`

# !array_keys:keys

Get the property keys of an object/array as a numerically indexed array.

\`\`\`xs
{"a":1,"b":2,"c":3}|array_keys
\`\`\`

Result: \`["a","b","c"]\`

# values

Get the property values of an object/array as a numerically indexed array

\`\`\`xs
{"a":1,"b":2,"c":3}|values
\`\`\`

Result: \`[1,2,3]\`

# !array_values:values

Get the property values of an object/array as a numerically indexed array

\`\`\`xs
{"a":1,"b":2,"c":3}|array_values
\`\`\`

Result: \`[1,2,3]\`

# entries

Get the property entries of an object/array as a numerically indexed array of key/value pairs.

\`\`\`xs
{"a":1,"b":2,"c":3}|entries
\`\`\`

Result: \`[{key:"a",value:1},{key:"b",value:2},{key:"c",value:3}]\`

# !array_entries:entries

Get the property entries of an object/array as a numerically indexed array of key/value pairs.

\`\`\`xs
{"a":1,"b":2,"c":3}|array_entries
\`\`\`

Result: \`[{key:"a",value:1},{key:"b",value:2},{key:"c",value:3}]\`

# to_expr

Converts text into an expression, processes it, and returns the result

\`\`\`xs
"(2 + 1) % 2"|to_expr
\`\`\`

Result: \`1\`

# to_text

Converts integer, decimal, or bool types to text and returns the result

\`\`\`xs
1.344|to_text
\`\`\`

Result: \`"1.344"\`

# to_int

Converts text, decimal, or bool types to an integer and returns the result

\`\`\`xs
"133.45 kg"|to_int
\`\`\`

Result: \`133\`

# to_decimal

Converts text, integer, or bool types to a decimal and returns the result

\`\`\`xs
"133.45 kg"|to_decimal
\`\`\`

Result: \`133.45\`

# to_bool

Converts text, integer, or decimal types to a bool and returns the result

\`\`\`xs
"true"|to_bool
\`\`\`

Result: \`true\`

# to_timestamp

Converts a text expression (now, next friday, Jan 1 2000) to timestamp compatible format.

\`\`\`xs
"next friday"|to_timestamp:"America/Los_Angeles"
\`\`\`

Result: \`1758265200000\`

# !to_epochms:to_timestamp

Converts a text expression (now, next friday, Jan 1 2000) to timestamp compatible format.

\`\`\`xs
"next friday"|to_epochms:"America/Los_Angeles"
\`\`\`

Result: \`1758265200000\`

# to_ms

Converts a text expression (now, next friday, Jan 1 2000) to the number of milliseconds since the unix epoch.

\`\`\`xs
"next friday"|to_ms:"America/Los_Angeles"
\`\`\`

Result: \`1758265200000\`

# !to_epoch_ms:to_ms

Converts a text expression (now, next friday, Jan 1 2000) to the number of milliseconds since the unix epoch.

\`\`\`xs
"next friday"|to_epoch_ms:"America/Los_Angeles"
\`\`\`

Result: \`1758265200000\`

# to_seconds

Converts a text expression (now, next friday, Jan 1 2000) to the number of seconds since the unix epoch.

\`\`\`xs
"next friday"|to_seconds:"America/Los_Angeles"
\`\`\`

Result: \`1758265200\`

# !to_epoch_sec:to_seconds

Converts a text expression (now, next friday, Jan 1 2000) to the number of seconds since the unix epoch.

\`\`\`xs
"next friday"|to_epoch_sec:"America/Los_Angeles"
\`\`\`

Result: \`1758265200\`

# to_minutes

Converts a text expression (now, next friday, Jan 1 2000) to the number of minutes since the unix epoch.

\`\`\`xs
"next friday"|to_minutes:"America/Los_Angeles"
\`\`\`

Result: \`29304420\`

# !to_epoch_minute:to_minutes

Converts a text expression (now, next friday, Jan 1 2000) to the number of minutes since the unix epoch.

\`\`\`xs
"next friday"|to_epoch_minute:"America/Los_Angeles"
\`\`\`

Result: \`29304420\`

# to_hours

Converts a text expression (now, next friday, Jan 1 2000) to the number of hours since the unix epoch.

\`\`\`xs
"next friday"|to_hours:"America/Los_Angeles"
\`\`\`

Result: \`488407\`

# !to_epoch_hour:to_hours

Converts a text expression (now, next friday, Jan 1 2000) to the number of hours since the unix epoch.

\`\`\`xs
"next friday"|to_epoch_hour:"America/Los_Angeles"
\`\`\`

Result: \`488407\`

# to_days

Converts a text expression (now, next friday, Jan 1 2000) to the number of days since the unix epoch.

\`\`\`xs
"next friday"|to_days:"America/Los_Angeles"
\`\`\`

Result: \`20350\`

# !to_epoch_day:to_days

Converts a text expression (now, next friday, Jan 1 2000) to the number of days since the unix epoch.

\`\`\`xs
"next friday"|to_epoch_day:"America/Los_Angeles"
\`\`\`

Result: \`20350\`

# create_object

Creates an object based on a list of keys and a list of values

\`\`\`xs
["a","b","c"]|create_object:[1,2,3]
\`\`\`

Result: \`{"a":1,"b":2,"c":3}\`

# create_object_from_entries

Creates an object based on an array of key/value pairs. (i.e. same result as the entries filter)

\`\`\`xs
[{key:"a",value:1},{key:"b",value:2},{key:"c",value:3}]|create_object_from_entries
\`\`\`

Result: \`{"a":1,"b":2,"c":3}\`

# json_decode

Decodes the value represented as json and returns the result

\`\`\`xs
"{\\"a\\":1,\\"b\\":2,\\"c\\":3}"|json_decode
\`\`\`

Result: \`{"a":1,"b":2,"c":3}\`

# json_encode

Encodes the value and returns the result as json text

\`\`\`xs
{"a":1,"b":2,"c":3}|json_encode
\`\`\`

Result: \`"{\\"a\\":1,\\"b\\":2,\\"c\\":3}"\`

# xml_decode

Decodes XML and returns the result

\`\`\`xs
"<root><a>1</a><b>2</b><c>3</c></root>"|xml_decode
\`\`\`

Result:

\`\`\`json
{
  "root": {
    "@attributes": [],
    "value": [
      {
        "a": {
          "@attributes": [],
          "value": "1"
        }
      },
      {
        "b": {
          "@attributes": [],
          "value": "2"
        }
      }
    ]
  }
}
\`\`\`

# csv_parse

Parse the contents of a CSV file and convert it into an array of objects.

# csv_decode

Decodes the value represented in the CSV format and returns the result

# csv_encode

Encodes the value and returns the result in CSV format

# csv_create

Creates a CSV format data stream from a list of column names and their corresponding data rows.

# url_decode

Decodes the value represented as a url encoded value

\`\`\`xs
"Hello%2C%20World%21"|url_decode
\`\`\`

Result: \`"Hello, World!"\`

# url_decode_rfc3986

Decodes the value represented as a url encoded value using the RFC 3986 specification

\`\`\`xs
"Hello%2C%20World%21"|url_decode_rfc3986
\`\`\`

Result: \`"Hello, World!"\`

# url_encode

Encodes the value and returns the result as a url encoded value

\`\`\`xs
"Hello, World!"|url_encode
\`\`\`

Result: \`"Hello%2C%20World%21"\`

# url_encode_rfc3986

Encodes the value and returns the result as a url encoded value using the RFC 3986 specification

\`\`\`xs
"Hello, World!"|url_encode_rfc3986
\`\`\`

Result: \`"Hello%2C%20World%21"\`

# url_addarg

Parses a URL and returns an updated version with an encoded version of the supplied argument

\`\`\`xs
"https://example.com?foo=bar"|url_addarg:"fiz":"buz"
\`\`\`

Result: \`"https://example.com?foo=bar&fiz=buz"\`

# url_delarg

Parses a URL and returns an updated version with the supplied argument removed

\`\`\`xs
"https://example.com?foo=bar&fiz=buz"|url_delarg:"fiz"
\`\`\`

Result: \`"https://example.com?foo=bar"\`

# url_hasarg

Returns the existence of a argument in the URL

\`\`\`xs
"https://example.com?foo=bar&fiz=buz"|url_hasarg:"fiz"
\`\`\`

Result: \`true\`

# url_getarg

Gets the argument's value from a URL

\`\`\`xs
"https://example.com?foo=bar&fiz=buz"|url_getarg:"fiz"
\`\`\`

Result: \`"buz"\`

# url_parse

Parses a URL into its individual components.

\`\`\`xs
"https://username:password@example.com:8080/path?foo=bar&fiz=buz#fragment"|url_parse
\`\`\`

Result:

\`\`\`\`json
{
  "scheme": "https",
  "host": "example.com",
  "port": 8080,
  "user": "username",
  "pass": "password",
  "path": "/path",
  "query": "foo=bar&fiz=buz",
  "fragment": "fragment"
}\`\`\`

# querystring_parse

Parses a query string from a URL into its individual key-value pairs.

\`\`\`xs
"foo=bar&fiz=buz"|querystring_parse
\`\`\`\`

Result: \`{"foo": "bar", "fiz": "buz"}\`

# yaml_decode

Decodes the value represented as yaml and returns the result

\`\`\`xs
"a: 1\\nb: 2\\nc: 3"|yaml_decode
\`\`\`

Result: \`{"a":1,"b":2,"c":3}\`

# yaml_encode

Encodes the value and returns the result as yaml text

\`\`\`xs
{"a":1,"b":2,"c":3}|yaml_encode
\`\`\`

Result: \`"a: 1\\nb: 2\\nc: 3\\n"\`

# hex2bin

Converts a hex value into its binary equivalent

\`\`\`xs
"68656c6c6f"|hex2bin
\`\`\`

Result: \`"hello"\`

# bin2hex

Converts a binary value into its hex equivalent

\`\`\`xs
"hello"|bin2hex
\`\`\`

Result: \`"68656c6c6f"\`

# dechex

Converts a decimal value into its hex equivalent

\`\`\`xs
"255"|dechex
\`\`\`

Result: \`"ff"\`

# hexdec

Converts a hex value into its decimal equivalent

\`\`\`xs
"ff"|hexdec
\`\`\`

Result: \`"255"\`

# decbin

Converts a decimal value into its binary string (i.e. 01010) equivalent

\`\`\`xs
"10"|decbin
\`\`\`

Result: \`"1010"\`

# bindec

Converts a binary string (i.e. 01010) into its decimal equivalent

\`\`\`xs
"1010"|bindec
\`\`\`

Result: \`"10"\`

# decoct

Converts a decimal value into its octal equivalent

\`\`\`xs
"10"|decoct
\`\`\`

Result: \`"12"\`

# octdec

Converts an octal value into its decimal equivalent

\`\`\`xs
"12"|octdec
\`\`\`

Result: \`"10"\`

# base_convert

Converts a value between two bases

\`\`\`xs
"ff"|base_convert:16:10
\`\`\`

Result: \`"255"\`

# base64_decode

Decodes the value represented as base64 text and returns the result

\`\`\`xs
"aGVsbG8="|base64_decode
\`\`\`

Result: \`"hello"\`

# base64_encode

Encodes the value and returns the result as base64 text

\`\`\`xs
"hello"|base64_encode
\`\`\`

Result: \`"aGVsbG8="\`

# base64_decode_urlsafe

Decodes the value represented as base64 urlsafe text and returns the result

\`\`\`xs
"aGVsbG8_"|base64_decode_urlsafe
\`\`\`

Result: \`"hello?"\`

# base64_encode_urlsafe

Encodes the value and returns the result as base64 urlsafe text

\`\`\`xs
"hello?"|base64_encode_urlsafe
\`\`\`

Result: \`"aGVsbG8_"\`

# encrypt

Encrypts the value and returns the result in raw binary form.

\`\`\`xs
"hello"|encrypt:"aes-192-cbc":"1494AX6XJUsDe51kF9S9sA==":"27222b6032574bad"
\`\`\`

Result: \`"\uFFFD\uFFFD\uFFFDZ \uFFFDr|5\uFFFD\uFFFD\uFFFD~\uFFFDl"\`

# decrypt

Decrypts the value and returns the result.

\`\`\`xs
"...encrypted..."|decrypt:"aes-192-cbc":"1494AX6XJUsDe51kF9S9sA==":"27222b6032574bad"
\`\`\`

Result: \`"hello"\`

# jws_encode

Encodes the value and return the result as a JWS token

\`\`\`xs
"hello"|jws_encode:{sub: "1234567890",name: "John Doe",admin: true,iat: 1516239022}:"a-string-secret-at-least-256-bits-long":HS256
\`\`\`

Result: \`"...encrypted..."\`

# !crypto_jws_encode:jws_encode

Encodes the value and return the result as a JWS token

\`\`\`xs
"hello"|crypto_jws_encode:{sub: "1234567890",name: "John Doe",admin: true,iat: 1516239022}:"a-string-secret-at-least-256-bits-long":HS256
\`\`\`

Result: \`"...encrypted..."\`

# jws_decode

Decodes the JWS token and return the result

\`\`\`xs
"eyJzd...ZYw"|jws_decode:{}:"a-string-secret-at-least-256-bits-long":HS256
\`\`\`

Result: \`"hello"\`

# !crypto_jws_decode:jws_decode

Decodes the JWS token and return the result

\`\`\`xs
"eyJzd...ZYw"|crypto_jws_decode:{}:"a-string-secret-at-least-256-bits-long":HS256
\`\`\`

Result: \`"hello"\`

# jwe_encode

Encodes the value and return the result as a JWE token

\`\`\`xs
"hello"|jwe_encode:{sub: "1234567890",name: "John Doe",admin: true,iat: 1516239022}:"a-string-secret-at-least-256-bits-long":"A256KW":"A256CBC-HS512"
\`\`\`

Result: \`"...encrypted..."\`

# !crypto_jwe_encode:jwe_encode

Encodes the value and return the result as a JWE token

\`\`\`xs
"hello"|crypto_jwe_encode:{sub: "1234567890",name: "John Doe",admin: true,iat: 1516239022}:"a-string-secret-at-least-256-bits-long":"A256KW":"A256CBC-HS512"
\`\`\`

Result: \`"...encrypted..."\`

# jwe_decode

Decodes the JWE token and return the result

\`\`\`xs
"eyJ...Xw"|jwe_decode:{}:"a-string-secret-at-least-256-bits-long":"A256KW":"A256CBC-HS512"
\`\`\`

Result: \`"hello"\`

# !crypto_jwe_decode:jwe_decode

Decodes the JWE token and return the result

\`\`\`xs
"eyJ...Xw"|crypto_jwe_decode:{}:"a-string-secret-at-least-256-bits-long":"A256KW":"A256CBC-HS512"
\`\`\`

Result: \`"hello"\`

# concat

Concatenates two values together

\`\`\`xs
"Hello" | concat:"World!":" - "
\`\`\`

Result: \`"Hello - World!"\`

# sprintf

formats text with variable substitution

\`\`\`xs
"Hello %s, you have %d new messages"|sprintf:"Bob":5
\`\`\`

Result: \`"Hello Bob, you have 5 new messages"\`

# replace

Replace all occurrences of a text phrase with another

\`\`\`xs
"Hella World"|replace:"o":"a"
\`\`\`

Result: \`"Hella Warld"\`

# !string_replace:replace

Replace all occurrences of a text phrase with another

\`\`\`xs
"Hello World"|string_replace:"o":"a"
\`\`\`

Result: \`"Hella Warld"\`

# secureid_encode

Returns an encrypted version of the id

\`\`\`xs
12345|secureid_encode:"my_salt"
\`\`\`

Result: \`"ZlV3Lg.-0-UZyQ9xQk"\`

# secureid_decode

Returns the id of the original encode

\`\`\`xs
"ZlV3Lg.-0-UZyQ9xQk"|secureid_decode:"my_salt"
\`\`\`

Result: \`12345\`

# md5

Returns a MD5 signature representation of the value

\`\`\`xs
"some_message"|md5
\`\`\`

Result: \`"af8a2aae147de3350f6c0f1a075ede5d"\`

# sha1

Returns a SHA1 signature representation of the value

\`\`\`xs
"some_message"|sha1
\`\`\`

Result: \`"33a374032... (truncated) ..."\`

# sha256

Returns a SHA256 signature representation of the value

\`\`\`xs
"some_message"|sha256
\`\`\`

Result: \`"6cc869f10009fa1... (truncated) ..."\`

# sha384

Returns a SHA384 signature representation of the value

\`\`\`xs
"some_message"|sha384
\`\`\`

Result: \`"17a7717060650457... (truncated) ..."\`

# sha512

Returns a SHA512 signature representation of the value

\`\`\`xs
"some_message"|sha512
\`\`\`

Result: \`"40aaa4e84e7d98e472d240f1c84298de... (truncated) ..."\`

# hmac_md5

Returns a MD5 signature representation of the value using a shared secret via the HMAC method

\`\`\`xs
"some_message"|hmac_md5:MY_SECRET_KEY
\`\`\`

Result: \`"c4c1007ea935001cc7734b360395fb1d"\`

# hmac_sha1

Returns a SHA1 signature representation of the value using a shared secret via the HMAC method

\`\`\`xs
"some_message"|hmac_sha1:MY_SECRET_KEY
\`\`\`

Result: \`"83b48df25eda2... (truncated) ..."\`

# hmac_sha256

Returns a SHA256 signature representation of the value using a shared secret via the HMAC method

\`\`\`xs
"some_message"|hmac_sha256:MY_SECRET_KEY
\`\`\`

Result: \`"3e18fc78d5326e5... (truncated) ..."\`

# hmac_sha384

Returns a SHA384 signature representation of the value using a shared secret via the HMAC method

\`\`\`xs
"some_message"|hmac_sha384:MY_SECRET_KEY
\`\`\`

Result: \`"60818f7b6e6... (truncated) ..."\`

# hmac_sha512

Returns a SHA512 signature representation of the value using a shared secret via the HMAC method

\`\`\`xs
"some_message"|hmac_sha512:MY_SECRET_KEY
\`\`\`

Result: \`"880c17f6d5fa9e1ea3b7... (truncated) ..."\`

# create_uid

Returns a unique 64bit unsigned int value seeded off the value

\`\`\`xs
|create_uid
\`\`\`

Result: \`14567891234567890\`

# !uid:create_uid

Returns a unique 64bit unsigned int value seeded off the value

\`\`\`xs
|uid
\`\`\`

Result: \`14567891234567890\`

# uuid

Returns a universally unique identifier

\`\`\`xs
|uuid
\`\`\`

Result: \`"550e8400-e29b-41d4-a716-446655440000"\`

# !uuid4:uuid

Returns a universally unique identifier

\`\`\`xs
|uuid44
\`\`\`

Result: \`"550e8400-e29b-41d4-a716-446655440000"\`

# parse_timestamp

Parse a timestamp from a flexible format.

\`\`\`xs
"2023-08-15 13:45:30"|parse_timestamp:"Y-m-d H:i:s":"America/Los_Angeles"
\`\`\`

Result: \`"1692132330000"\`

# !epochms_from_format:parse_timestamp

Parse a timestamp from a flexible format.

\`\`\`xs
"2023-08-15 13:45:30"|epochms_from_format:"Y-m-d H:i:s":"America/Los_Angeles"
\`\`\`

Result: \`"1692132330000"\`

# format_timestamp

Converts a timestamp into a human readable formatted date based on the supplied format

\`\`\`xs
"1692132330000"|format_timestamp:"Y-m-d H:i:s":"America/New_York"
\`\`\`

Result: \`"2023-08-15 16:45:30"\`

# !epochms_date:format_timestamp

Converts a timestamp into a human readable formatted date based on the supplied format

\`\`\`xs
"1692132330000"|epochms_date:"Y-m-d H:i:s":"America/New_York"
\`\`\`

Result: \`"2023-08-15 16:45:30"\`

# transform_timestamp

Takes a timestamp and applies a relative transformation to it. Ex. -7 days, last Monday, first day of this month

\`\`\`xs
"2023-08-15T20:45:30.000Z"|transform_timestamp:"-7 days":"America/Los_Angeles"
\`\`\`

Result: \`"1691527530000"\`

# !epochms_transform:transform_timestamp

Takes a timestamp and applies a relative transformation to it. Ex. -7 days, last Monday, first day of this month

\`\`\`xs
"2023-08-15T20:45:30.000Z"|epochms_transform:"-7 days":"America/Los_Angeles"
\`\`\`

Result: \`"1691527530000"\`

# add_secs_to_timestamp

Add seconds to a timestamp. (negative values are ok)

\`\`\`xs
1691527530000|add_secs_to_timestamp:60
\`\`\`

Result: \`1691527590000\`

# !epochms_add_secs:add_secs_to_timestamp

Add seconds to a timestamp. (negative values are ok)

\`\`\`xs
1691527530000|epochms_add_secs:60
\`\`\`

Result: \`1691527590000\`

# add_ms_to_timestamp

Add milliseconds to a timestamp. (negative values are ok)

\`\`\`xs
monday|add_ms_to_timestamp:500
\`\`\`

Result: \`1758499200500\`

# !epochms_add_ms:add_ms_to_timestamp

Add milliseconds to a timestamp. (negative values are ok)

\`\`\`xs
monday|epochms_add_ms:500
\`\`\`

Result: \`1758499200500\`

# regex_matches

Tests if a regular expression matches the supplied subject text.

\`\`\`xs
"/^a.*c$/"|regex_matches:"abbbbc"
\`\`\`

Result: \`true\`

# !regex_test:regex_matches

Tests if a regular expression matches the supplied subject text.

\`\`\`xs
"/^a.*c$/"|regex_test:"abbbbc"
\`\`\`

Result: \`true\`

# regex_get_first_match

Return the first set of matches performed by a regular expression on the supplied subject text.

\`\`\`xs
"/(\\w+)@(\\w+).(\\w+)/"|regex_get_first_match:"test@example.com"
\`\`\`

Result: \`["test@example.com","test","example","com"]\`

# !regex_match:regex_get_first_match

Return the first set of matches performed by a regular expression on the supplied subject text.

\`\`\`xs
"/(\\w+)@(\\w+).(\\w+)/"|regex_match:"test@example.com"
\`\`\`

Result: \`["test@example.com","test","example","com"]\`

# regex_get_all_matches

Return all matches performed by a regular expression on the supplied subject text.

\`\`\`xs
"/\\b\\w+@\\w+.\\w+\\b/"|regex_get_all_matches:"test@example.com"
\`\`\`

Result: \`[["test@example.com"]]\`

# !regex_match_all:regex_get_all_matches

Return all matches performed by a regular expression on the supplied subject text.

\`\`\`xs
"/\\b\\w+@\\w+.\\w+\\b/"|regex_match_all:"test@example.com"
\`\`\`

Result: \`[["test@example.com"]]\`

# regex_quote

Update the supplied text value to be properly escaped for regular expressions.

\`\`\`xs
"Hello. How are you?"|regex_quote:"/"
\`\`\`

Result: \`"Hello\\\\. How are you\\\\?"\`

# regex_replace

Perform a regular expression search and replace on the supplied subject text.

\`\`\`xs
"/\\s+/"|regex_replace:"-":"Hello   World"
\`\`\`

Result: \`"Hello-World"\`

# map

Creates a new array with the results of calling a provided function on every element in the calling array.

\`\`\`xs
[{value: 2}, {value: 5}]|map:$$.value*2
\`\`\`

Result: \`double each value => [4,10]\`

# filter

Filters the elements of an array based on the code block returning true to keep the element or false to skip it.

\`\`\`xs
[{value: 2}, {value: 5}]|filter:$$.value%2==0
\`\`\`

# some

Checks if at least one element in the array passes the test implemented by the provided function.

\`\`\`xs
[{value: 2}, {value: 5}]|some:$$.value%2==0
\`\`\`

Result: \`at least one value is even => true\`

# every

Checks if all elements in the array pass the test implemented by the provided function.

\`\`\`xs
[{value: 2}, {value: 6}]|every:$$.value%2==0
\`\`\`

Result: \`all values are even => true\`

# find

Finds if all elements in the array pass the test implemented by the provided function.

\`\`\`xs
[{id: 1}, {id: 2}, {id: 3}]|find:$$.id==2
\`\`\`

Result: \`{id:2}\`

# findIndex

Finds the index of the first element in the array that passes the test implemented by the provided function.

\`\`\`xs
[{id: 1}, {id: 2}, {id: 3}]|findIndex:$$.id==2
\`\`\`

Result: \`1\`

# reduce

Reduces the array to a single value using the code block to combine each element of the array.

\`\`\`xs
[1,2,3,4,5]|reduce:$$+$result:10
\`\`\`

Result: \`25\`

# pick

Pick keys from the object to create a new object of just those keys.

\`\`\`xs
{a:1,b:2,c:3}|pick:[a,c]
\`\`\`

Result: \`{a:1,c:3}\`

# unpick

Remove keys from the object to create a new object of the remaining keys.

\`\`\`xs
{a:1,b:2,c:3}|unpick:[a,c]
\`\`\`

Result: \`{b:2}\`
`;var Wg=class extends Wr{static{r(this,"FunctionMessageProvider")}constructor(t){super(),this.parseFunctions(t),this.buildSearchTree()}buildSearchTree(){this.__searchTree={};for(let t in this.__functionDoc){let n=t.split("."),o=this.__searchTree;for(let i=n.length-1;i>=0;i--){let a=n[i];o[a]||(o[a]={}),o=o[a]}o.__value=t}}parseFunctions(t){this.__functionDoc={};let n=[],o="";for(let i of t.split(`
`))i.startsWith("#")?(o&&(this.__functionDoc[o]=n.join(`
`)),o=i.slice(2).trim(),n=[]):n.push(i);o&&n.length&&(this.__functionDoc[o]=n.join(`
`).trim())}findFunction(t,n,o=null){o||(o=this.__searchTree);let i=n[t],a=o[i.image];if(a){let s=n[t-1];if(s&&s.image===".")return this.findFunction(t-2,n,a);if(a.__value)return a.__value}return null}isMatch(t,n,o){let i=n[t+1];return i&&i.image==="."?!1:!!this.findFunction(t,n)}render(t,n){let o=this.findFunction(t,n);if(o)return this.__functionDoc[o]}};var YF=`# stack

\`\`\`xs
stack {
  var $counter {
    value = 0
  }
  for (3) {
    each as $index {
      math.add $counter {
        value = 1
      }
    }
  }
  debug.log {
    value = $counter
  }
}
\`\`\`

A \`stack\` block defines a sequence of actions to be executed in a specific context, such as within a \`query\`, \`function\`, \`task\`, or other block (e.g., \`group\`, \`transaction\`). It acts as a container for operations like:

- Variable declarations (e.g., \`var\`),
- Control flow (e.g., \`for\`, \`conditional\`),
- Function calls (e.g., \`math.add\`, \`debug.log\`),
- Database operations (e.g., \`db.query\`).

Stacks are used to organize and execute a series of steps in a structured manner, often as part of a larger workflow.

# input

\`\`\`xs
input {
  text username filters=trim {
    description = "User's login name"
    sensitive = false
  }
  int age? {
    description = "User's age (optional)"
  }
}
\`\`\`

An \`input\` block defines the parameters expected by a \`query\` or \`function\`. It includes:

- Fields with their data types (e.g., \`text\`, \`int\`),
- Optional status (marked with \`?\`),
- Filters (e.g., \`trim\`) to process the input,
- Metadata like \`description\` for clarity or \`sensitive\` to mark private data.

Inputs specify the data that a query or function can receive and work with, such as user-provided values in an API request.

# schema

\`\`\`xs
schema {
  int customer_id
  text full_name filters=trim {
    description = "Customer's full name"
  }
  email contact_email filters=trim|lower {
    description = "Customer's email address"
    sensitive = true
  }
  timestamp registered_at?=now
}
\`\`\`

A \`schema\` block, used within a \`table\` file, defines the structure of a database table. It includes:

- Fields with their data types (e.g., \`int\`, \`text\`, \`email\`),
- Optional status (marked with \`?\`),
- Default values (e.g., \`?=now\`),
- Filters (e.g., \`trim|lower\`) to process field values,
- Metadata like \`description\` for clarity or \`sensitive\` to mark private fields.

Schemas outline the columns and their properties for storing data in a table.

# response

\`\`\`xs
response = $user_data
\`\`\`

A \`response\` block, used within a \`query\` or \`function\`, specifies the data to return as the result of the operation. The value defines the output, which can be a variable (e.g., \`$user_data\`), a literal, or an expression. Responses determine what data is sent back to the caller, such as API response data or a function\u2019s return value.

# schedule

\`\`\`xs
schedule {
  events = [
    {starts_on: 2025-01-01 09:00:00+0000, freq: 86400},
    {starts_on: 2025-01-02 09:00:00+0000, freq: 604800, ends_on: 2025-12-31 09:00:00+0000}
  ]
}
\`\`\`

A \`schedule\` block, used within a \`task\` file, defines when the task should run. It includes an \`events\` array with:

- \`starts_on\`: The start date and time (e.g., \`2025-01-01 09:00:00+0000\`),
- \`freq\`: The frequency in seconds for recurring tasks (e.g., \`86400\` for daily, \`604800\` for weekly),
- \`ends_on\`: An optional end date for recurring tasks (e.g., \`2025-12-31 09:00:00+0000\`).

Schedules automate task execution at specified intervals or times.

# table

\`\`\`xs
table customer {
  auth = true
  security {
    guid = "a1b2c3d4e5f6"
  }
  schema {
    int id
    text name filters=trim {
      description = "Customer's full name"
    }
    email email filters=trim|lower {
      description = "Customer's email address"
      sensitive = true
    }
    timestamp signup_date?=now
    bool is_active?=true
  }
  index = [
    {type: "primary", field: [{name: "id"}]}
    {type: "gin", field: [{name: "xdo", op: "jsonb_path_op"}]}
    {type: "btree", field: [{name: "email", op: "desc"}]}
  ]
}
\`\`\`

A \`table\` file defines the schema for a database table (e.g., \`customer\`). It includes:

- An \`auth\` flag to enable/disable authentication for the table,
- A \`security\` block with a \`guid\` for access control,
- A \`schema\` block listing fields with their data types (e.g., \`int\`, \`text\`, \`email\`), optional status (marked with \`?\`), default values (e.g., \`?=now\`), filters (e.g., \`trim|lower\`), and metadata like \`description\` or \`sensitive\`,
- An \`index\` block defining indexes for efficient querying (e.g., \`primary\` for the \`id\` field, \`unique\` for the \`email\` field).

Tables are used to structure and store data in a database, such as customer information.

# query

\`\`\`xs
query products verb=GET {
  input {
    text category filters=trim {
      description = "Product category to filter by"
      sensitive = false
    }
  }
  stack {
    var $category_filter {
      value = $input.category
    }
    conditional {
      if ($category_filter|strlen > 0) {
        db.query product {
          where = ($db.product.category|to_lower) == ($category_filter|to_lower)
        } as $filtered_products
      }
      else {
        db.query product {
        } as $filtered_products
      }
    }
  }
  response = $filtered_products
}
\`\`\`

A \`query\` file defines an API endpoint to handle HTTP requests (e.g., GET, POST). It includes:

- A path (e.g., \`/products\`) and HTTP method (\`verb\`),
- An \`input\` block to define request parameters (e.g., \`category\`), which can have filters (e.g., \`trim\`) and metadata like \`description\` or \`sensitive\`,
- A \`stack\` block containing the logic to process the request (e.g., querying a database, applying conditions),
- A \`response\` block specifying the data to return (e.g., \`$filtered_products\`).

Queries are essential for creating API endpoints to retrieve or manipulate data, such as fetching products by category.

# workflow_test

\`\`\`xs
workflow_test test_sum_api {
  description = "Test the sum API"

  stack {
    api.call sum verb=GET {
      api_group = "new api"
      headers = ""
      input = {a: 22, b: 33}
    } as $sum
  }
}
\`\`\`

A workflow_test is a way to check if different parts of your Xano project (like APIs, functions, or tasks) work together correctly. It lets you run these parts with specific inputs and compare the results to what you expect, ensuring everything functions as intended.

# api_group

\`\`\`xs
api_group "another api" {
  description = "Some description"
  active = false
  canonical = "HZ4jLtdc"
  swagger = true
  tags = ["foo", "bar"]
}
\`\`\`

An \`api_group\` file defines the rules applied to the API endpoint (\`query\`) it contains.

- \`description\`: A brief explanation of the API group.
- \`active\`: A flag indicating whether the API endpoints inside this API group are active or not.
- \`canonical\`: A unique identifier for the API group, will be used in as part of the URL of each endpoint.
- \`swagger\`: A flag indicating whether the API group is documented in Swagger.
- \`tags\`: An array of tags associated with the API group.

# function

\`\`\`xs
function maths/calculate_total {
  input {
    int quantity?
    int price_per_item?
  }
  stack {
    var $total {
      value = 0
    }
    conditional {
      if ($input.quantity == null || $input.price_per_item == null) {
        throw {
          name = "InvalidInputError"
          value = "Quantity and price must be provided"
        }
      }
      else {
        math.mul $total {
          value = $input.quantity
        }
        math.mul $total {
          value = $input.price_per_item
        }
      }
    }
  }
  response = $total
}
\`\`\`

A \`function\` file defines a reusable custom function that can be called elsewhere in your script. It includes:

- A name (e.g., \`"calculate_total"\`) to identify the function,
- An \`input\` block to define parameters (e.g., \`quantity\` and \`price_per_item\`), which can be optional (marked with \`?\`),
- A \`stack\` block containing the logic to execute (e.g., calculations, conditionals),
- A \`response\` block specifying the return value (e.g., \`$total\`).

Functions are ideal for encapsulating logic, such as calculating a total cost, that can be reused across scripts.

# task

\`\`\`xs
task "daily_report" {
  stack {
    db.query sales {
      description = "Fetch daily sales data"
    } as $daily_sales
  }
  schedule {
    events = [
      {starts_on: 2025-01-01 08:00:00+0000, freq: 86400}
    ]
  }
}
\`\`\`

A \`task\` file defines a scheduled job that runs automatically at specified times. It includes:

- A name (e.g., \`"daily_report"\`) to identify the task,
- A \`stack\` block containing the actions to execute (e.g., querying a database),
- A \`schedule\` block with \`events\` to define when the task runs, including:
  - \`starts_on\`: The start date and time (e.g., \`2025-01-01 08:00:00+0000\`),
  - \`freq\`: The frequency in seconds for recurring tasks (e.g., \`86400\` for daily),
  - \`ends_on\`: An optional end date for recurring tasks (not used here).

Tasks are ideal for automating recurring operations like generating reports or syncing data.

# task.call

\`\`\`xs
task.call "daily_report" {
  description = "Call the daily report task"
}
\`\`\`

Calls an internal Xano task, it allows you to invoke internal tasks within your end-to-end workflows tests.

- \`task.call\` takes the name of the task as an argument.
- \`description\`: A brief explanation of the task being called (optional)

# function.call

\`\`\`xs
function.call "maths/calculate_total" {
  input = {
    quantity: 2,
    price_per_item: 5
  }
} as $calculate_total_response
\`\`\`

Calls an internal function, it allows you to invoke internal functions within your end-to-end workflows tests.

- \`function.call\` takes the name of the function as an argument.
- \`input\`: The input parameters for the function.

# api.call

\`\`\`xs
api.call "account/{account_id}" verb=POST {
  api_group = "account"
  headers = []|push:"Authorization: Bearer token123"
  input = {
    name: "New Name"
  }
} as $account_update_response
\`\`\`

Calls an internal Xano API endpoint, it allows you to invoke internal APIs within your end-to-end workflows tests.

- \`api.call\` signature is similar to the \`query\` definition it's invoking (e.g., \`query <URL> verb=<METHOD> {...}\`).
- \`api_group\`: The API group to which the endpoint belongs.
- \`headers\`: Custom headers to include in the request.
- \`input\`: The request payload.

# api.lambda

\`\`\`xs
api.lambda {
  code = """
    // Javascript or Typescript code here
    return $input.value > 10 ? true : false;
    """
  timeout = 10
} as $result
\`\`\`

allows you to run provided \`code\` in Javascript or Typescript in a sandboxed environment. Maximum execution time is \`timeout\` seconds.

The lambda function has access to your function stack context like \`$input\`, \`$var\`, \`$auth\` and \`$env\`.

The result of the execution is stored in \`as $result\` variable and is the returned value of the code.

# api.request

\`\`\`xs
api.request {
  url = "https://api.example.com/users"
  method = "GET"
  params = {}|set:"user_id":"123"
  headers = []|push:"Authorization: Bearer token123"
  timeout = 30
} as $user_response
\`\`\`

Sends an HTTP request to a specified URL and retrieves the response. It supports various HTTP methods, query parameters, custom headers, and a timeout to limit execution time. The response is stored in the variable specified by \`as\`.

# api.stream

\`\`\`xs
api.stream {
  value = $processed_results
}
\`\`\`

Streams data back to the client when the API response type is set to \`'Stream'\`. This is useful for real-time data delivery, such as in live updates or large data transfers.

# api.realtime_event

\`\`\`xs
api.realtime_event {
  channel = "notifications_channel"
  data = $alert_message
  auth_table = "users"
  auth_id = "user_789"
}
\`\`\`

Sends a real-time event over a specified channel, enabling live updates in applications. It includes a data payload and optional authentication details to control access.

# ai.agent.run

\`\`\`xs
ai.agent.run my_first_agent {
  args = {
    customer_message: $input.question,
    messages: []
      |push:{
        role: "user",
        content: []
          |push:{
            type: "text",
            text: $input.question
          }
      }
  }
  allow_tool_execution = true
} as $agent_response
\`\`\`

Executes an AI agent with the specified configuration. It takes the agent name (e.g., \`my_first_agent\`) and optional parameters:

- \`args\`: Input arguments for the agent (can be an object, string, or expression)
- \`allow_tool_execution\`: Boolean flag to enable or disable tool execution by the agent (optional)
- \`description\`: A brief explanation of the agent run (optional)
- \`disabled\`: Flag to skip execution (optional)

The agent's response is stored in the variable specified by \`as\`, here \`$agent_response\`.

# ai.external.mcp.tool.list

\`\`\`xs
ai.external.mcp.tool.list {
  url = "https://mcp-server.example.com/sse"
  bearer_token = $env.mcp_secret_key
  connection_type = "sse"
} as $available_tools
\`\`\`

Retrieves a list of available tools from an external Model Context Protocol (MCP) server. Required parameters:

- \`url\`: The endpoint URL of the MCP server
- \`bearer_token\`: Authentication token for the MCP server (can be a variable like \`$env.token\`)
- \`connection_type\`: The connection type (e.g., \`"sse"\` for Server-Sent Events)
- \`description\`: A brief explanation of the operation (optional)
- \`disabled\`: Flag to skip execution (optional)

The list of available tools is stored in the variable specified by \`as\`, here \`$available_tools\`.

# ai.external.mcp.tool.run

\`\`\`xs
ai.external.mcp.tool.run {
  url = "https://mcp-server.example.com/sse"
  bearer_token = $env.mcp_secret_key
  connection_type = "sse"
  tool = "search_documents"
  args = {user_id: $auth.user_id, query: $input.search_term}
} as $tool_result
\`\`\`

Executes a specific tool on an external Model Context Protocol (MCP) server. Required parameters:

- \`url\`: The endpoint URL of the MCP server
- \`bearer_token\`: Authentication token for the MCP server
- \`connection_type\`: The connection type (e.g., \`"sse"\` for Server-Sent Events)
- \`tool\`: The name of the tool to execute
- \`args\`: Arguments to pass to the tool (can be an object, string, or expression)
- \`description\`: A brief explanation of the tool execution (optional)
- \`disabled\`: Flag to skip execution (optional)

The tool's execution result is stored in the variable specified by \`as\`, here \`$tool_result\`.

# ai.external.mcp.server_details

\`\`\`xs
ai.external.mcp.server_details {
  url = "https://mcp-server.example.com/sse"
  bearer_token = $env.mcp_secret_key
  connection_type = "sse"
} as $server_info
\`\`\`

Retrieves detailed information about an external Model Context Protocol (MCP) server, such as capabilities, version, and configuration. Required parameters:

- \`url\`: The endpoint URL of the MCP server
- \`bearer_token\`: Authentication token for the MCP server
- \`connection_type\`: The connection type (e.g., \`"sse"\` for Server-Sent Events)
- \`description\`: A brief explanation of the operation (optional)
- \`disabled\`: Flag to skip execution (optional)

The server details are stored in the variable specified by \`as\`, here \`$server_info\`.

# var

\`\`\`xs
var $name {
  value = "value"
}
\`\`\`

defines a variable with the name \`$name\` and the value \`"value"\`. The value can be a string, number, boolean, or an object followed by filters.

# var.update

\`\`\`xs
var.update $name {
  value = "value"
}
\`\`\`

updates the value of the variable with the name \`$name\` to \`"value"\`. The value can be a string, number, boolean, or an object followed by filters.

# array.find

\`\`\`xs
array.find $customer_ages if ($this > 18) as $first_adult_age
\`\`\`

Searches an array and returns the first element that meets the specified condition. If no element satisfies it, \`null\` is returned. The result is stored in the variable defined by \`as\`.

# array.push

\`\`\`xs
array.push $shopping_cart {
  value = "oranges"
  disabled = false
  description = "Add oranges to cart"
}
\`\`\`

Appends a new element to the end of an array. It accepts a \`value\` to add, with optional \`disabled\` (to skip execution) and \`description\` (for context or logging).

# array.unshift

\`\`\`xs
array.unshift $priority_tasks {
  value = "urgent meeting"
}
\`\`\`

Inserts a new element at the beginning of an array, shifting existing elements to higher indexes.

# array.shift

\`\`\`xs
array.shift $waiting_list as $next_customer
\`\`\`

Removes and returns the first element of an array, shortening the array by one. The removed element is stored in the variable specified by \`as\`.

# array.pop

\`\`\`xs
array.pop $completed_tasks as $last_finished_task
\`\`\`

Removes and returns the last element of an array, reducing its length by one. The removed element is stored in the variable defined by \`as\`.

# array.merge

\`\`\`xs
array.merge $active_users {
  value = $new_users
}
\`\`\`

Combines another array or a single value into the target array, appending all elements from the provided \`value\`.

# array.find_index

\`\`\`xs
array.find_index $sale_prices if ($this < 20) as $first_discount_index
\`\`\`

Returns the index of the first element that satisfies the condition. If no match is found, it returns \`-1\`. The result is stored in the variable specified by \`as\`.

# array.has

\`\`\`xs
array.has $team_roles if ($this == "manager") {
  disabled = false
  description = "Verify manager role"
} as $has_manager
\`\`\`

Checks if at least one element in the array meets the condition, returning \`true\` if so, \`false\` otherwise. The result is stored in the \`as\` variable. Optional \`disabled\` and \`description\` parameters control execution and add context.

# array.every

\`\`\`xs
array.every $exam_scores if ($this >= 70) as $all_passed
\`\`\`

Tests whether every element in the array satisfies the condition, returning \`true\` if they all do, \`false\` if any fail. The result is stored in the \`as\` variable.

# array.filter

\`\`\`xs
array.filter $temperatures if ($this > 32) as $above_freezing
\`\`\`

Creates a new array containing only the elements that meet the condition. The filtered result is stored in the variable specified by \`as\`.

# array.filter_count

\`\`\`xs
array.filter_count $survey_responses if ($this == "yes") as $yes_count
\`\`\`

Counts how many elements in the array satisfy the condition. The total is stored in the variable defined by \`as\`.

Below is the documentation for the XanoScript functions related to database operations and control flow, as requested in your query. Each entry follows the style of the existing documentation, providing a code snippet example and a brief explanation of what the function does. The examples use meaningful variable names to illustrate practical use cases.

# conditional

\`\`\`xs
conditional {
  if ($user_age > 18) {
    debug.log {
      value = "Adult user"
    }
  }
  elseif ($user_age < 18) {
    debug.log {
      value = "Minor user"
    }
  }
  else {
    debug.log {
      value = "User age not specified"
    }
  }
}
\`\`\`

Controls the flow of the script based on specified conditions, allowing different code blocks to execute depending on whether the conditions are true or false. It functions like an if-else statement, checking each condition in sequence and running the corresponding block.

# continue

\`\`\`xs
foreach $users as $user {
  if ($user.age < 18) {
    continue
  }
  debug.log {
    value = $user.name ~ " is an adult"
  }
}
\`\`\`

Skips the current iteration of a loop and moves to the next one. This is useful for bypassing specific items in a loop based on a condition, such as skipping users under 18 in this example.

# db.add

\`\`\`xs
db.add user {
  data = {
    name: $input.name,
    email: $input.email
  }
} as $new_user
\`\`\`

Inserts a new record into a specified database table (e.g., \`user\`) with the provided data fields. The new record is stored in the variable specified by \`as\`, here \`$new_user\`, for further use.

# db.add_or_edit

\`\`\`xs
db.add_or_edit user {
  field_name = "email"
  field_value = $input.email
  data = {
    name: $input.name,
    category: $input.category
  }
} as $user_record
\`\`\`

Inserts a new record into a database table (e.g., \`user\`) or updates an existing one based on a specified field (e.g., \`email\`) and its value (e.g., \`$input.email\`). The data block specifies the fields to add or update, and the resulting record is stored in \`$user_record\`.

# db.del

\`\`\`xs
db.del comment {
  field_name = "id"
  field_value = $input.commentId
}
\`\`\`

Removes a record from a database table (e.g., \`comment\`) based on a specified field (e.g., \`id\`) and its value (e.g., \`$input.commentId\`). This deletes the matching record.

# db.direct_query

\`\`\`xs
db.direct_query {
  code = "SELECT * FROM users WHERE users.email = ?"
  response_type = "list"
  arg = $input.email
} as $query_results
\`\`\`

Executes a raw SQL query directly on the database, using placeholders (\`?\`) for parameters provided via \`arg\`. The \`response_type\` specifies whether to return a \`list\` or \`single\` result. The output is stored in the variable defined by \`as\`, here \`$query_results\`.

# db.edit

\`\`\`xs
db.edit user {
  field_name = "email"
  field_value = $input.email
  data = {
    category: $input.category
  }
} as $updated_user
\`\`\`

Updates an existing record in a database table (e.g., \`user\`) identified by a field (e.g., \`email\`) and its value (e.g., \`$input.email\`). The \`data\` block specifies the fields to update, and the revised record is stored in \`$updated_user\`.

# db.patch

\`\`\`xs
db.patch user {
  field_name = "email"
  field_value = $input.email
  data = {
    category: $input.category
  }
} as $updated_user
\`\`\`

Updates specific fields of an existing record in a database table (e.g., \`user\`) identified by a field (e.g., \`email\`) and its value (e.g., \`$input.email\`). The \`data\` block specifies the fields to update, and the modified record is stored in \`$updated_user\`.

# db.get

\`\`\`xs
db.get user {
  field_name = "email"
  field_value = $input.email
} as $user
\`\`\`

Retrieves a single record from a database table (e.g., \`user\`) based on a specified field (e.g., \`email\`) and its value (e.g., \`$input.email\`). The fetched record is stored in the variable specified by \`as\`, here \`$user\`.

# db.has

\`\`\`xs
db.has user {
  field_name = "email"
  field_value = $input.email
} as $user_exists
\`\`\`

Checks if a record exists in a database table (e.g., \`user\`) based on a specified field (e.g., \`email\`) and its value (e.g., \`$input.email\`). Returns \`true\` if found, \`false\` otherwise, stored in \`$user_exists\`.

# db.query

\`\`\`xs
db.query client {
  description = "Fetch client details by name"
  where = $db.client.name ilike $input.search
  return = {
    type: "list"
    paging : {
      page    : $input.page
      per_page: 25
      totals  : true
      offset  : 0
      metadata: true
    }
  }
  sort: {"client.name": "asc"}

} as $matched_client
\`\`\`

Retrieves multiple records from a database table (e.g., \`user\`) based on a search condition. Here, it matches records where the lowercase email equals the lowercase input email. The results are stored in \`$users\`.

# db.schema

\`\`\`xs
db.schema user {
  path = "email"
} as $email_schema
\`\`\`

Returns the schema of a database table (e.g., \`user\`) or a specific field within it (e.g., \`email\` via \`path\`). The schema information is stored in the variable specified by \`as\`, here \`$email_schema\`.

# db.set_datasource

\`\`\`xs
db.set_datasource {
  value = "test"
}
\`\`\`

Changes the datasource for all subsequent database queries in the current script execution to the specified value (e.g., \`"test"\`). This affects all database operations that follow.

# db.transaction

\`\`\`xs
db.transaction {
  description = "Update user and log action"
  stack {
    db.update user { /* ... */ }
    db.add log { /* ... */ }
  }
}
\`\`\`

Executes a series of database operations (e.g., updating a user and adding a log entry) within a single transaction. Ensures atomicity\u2014either all operations succeed, or none are applied. The \`description\` provides context.

# db.truncate

\`\`\`xs
db.truncate user {
  reset = true
}
\`\`\`

Deletes all records from a specified database table (e.g., \`user\`). If \`reset = true\`, it also resets any auto-incrementing IDs, effectively clearing the table and starting fresh.

# db.external.mssql.direct_query

\`\`\`xs
db.external.mssql.direct_query {
  code = "SELECT * FROM orders WHERE orders.total > ?"
  response_type = "list"
  connection_string = "mssql://db_user:db_password@server.com:1433/sales_db?sslmode=disabled"
  arg = $input.min_total
} as $large_orders
\`\`\`

Executes a SQL query directly on an external Microsoft SQL Server database. The \`code\` parameter contains the SQL statement, and \`response_type\` specifies whether it returns a \`list\` of records or a \`single\` record. The \`connection_string\` provides access to the database, and \`arg\` supplies values for placeholders (e.g., \`?\`) in the query. Results are stored in the variable defined by \`as\`, here \`$large_orders\`.

# db.external.mysql.direct_query

\`\`\`xs
db.external.mysql.direct_query {
  code = "SELECT * FROM products WHERE products.category = ?"
  response_type = "list"
  connection_string = "mysql://db_user:db_password@host.com:3306/inventory_db?sslmode=disabled"
  arg = $input.category
} as $category_products
\`\`\`

Runs a SQL query directly on an external MySQL database. The \`response_type\` determines if the result is a \`list\` or a \`single\` record. The \`connection_string\` specifies the database connection, and \`arg\` provides values for query placeholders. The output is stored in the \`as\` variable, here \`$category_products\`.

# db.external.oracle.direct_query

\`\`\`xs
db.external.oracle.direct_query {
  code = "SELECT * FROM employees WHERE employees.department = ?"
  response_type = "list"
  connection_string = "oracle://db_user:db_password@server.com:1521/hr_db"
  arg = $input.department
} as $department_employees
\`\`\`

Directly executes a SQL query on an external Oracle database. The \`response_type\` sets whether the query returns a \`list\` or a \`single\` record. The \`connection_string\` defines the database connection, and \`arg\` supplies placeholder values. Results are stored in the variable specified by \`as\`, here \`$department_employees\`.

# db.external.postgres.direct_query

\`\`\`xs
db.external.postgres.direct_query {
  code = "SELECT * FROM customers WHERE customers.last_purchase > ?"
  response_type = "list"
  connection_string = "postgres://db_user:db_password@host.com:5432/shop_db?sslmode=prefer"
  arg = $input.date_threshold
} as $recent_customers
\`\`\`

Performs a SQL query directly on an external PostgreSQL database. The \`response_type\` indicates if the result is a \`list\` or a \`single\` record. The \`connection_string\` establishes the database connection, and \`arg\` provides values for placeholders. The results are stored in the \`as\` variable, here \`$recent_customers\`.

# debug.stop

\`\`\`xs
debug.stop {
  value = $some_var
}
\`\`\`

This function stops the script\u2019s execution at the point where it\u2019s called and sends the specified \`value\` to the debugger. It\u2019s a handy tool for troubleshooting, allowing you to inspect the contents of a variable (like \`$some_var\`) during development to ensure your script is working as expected.

# foreach

\`\`\`xs
foreach ($numbers_list) {
  each as $item {
    var.update $sum {
      value = $sum + $item
    }
  }
}
\`\`\`

**Example with a predefined list**:

\`\`\`xs
foreach ([1, 2, 3, 4]) {
  each as $item {
    var.update $sum {
      value = $sum + $item
    }
  }
}
\`\`\`

The \`foreach\` function loops through every item in a list (e.g., an array like \`$numbers_list\` or \`[1, 2, 3, 4]\`). The \`each as\` clause assigns the current item to a variable (e.g., \`$item\`), which you can use inside the loop to perform actions on each element.

# for

\`\`\`xs
for (10) {
  description = "Repeat this 10 times, with $index counting from 0 to 9"
  each as $index {
    debug.log {
      value = $index + 1
    }
  }
}
\`\`\`

This function creates a loop that runs a set number of times (e.g., 10). The \`each as\` clause provides a counter variable (e.g., \`$index\`), which starts at 0 and increases by 1 each iteration, up to one less than the specified number (e.g., 0 through 9 for a count of 10).

# function.run

\`\`\`xs
function.run add_fn {
  input = { a: $input.a, b: $input.b }
} as $func_result
\`\`\`

The \`function.run\` function calls a custom function (e.g., \`add_fn\`) and passes it the data specified in the \`input\` parameter (e.g., an object with \`a\` and \`b\` values). The result of the function is stored in the variable named after \`as\` (e.g., \`$func_result\`), making it available for further use in your script.

# group

\`\`\`xs
group {
  description = "your group description"
  stack {
    debug.log {
      value = "Action 1"
    }
  }
}
\`\`\`

The \`group\` function organizes a set of actions into a logical block that can be collapsed in the user interface for better readability. The \`description\` field labels the group (e.g., "group description"), and the \`stack\` contains the actions you want to group together.

# math.sub

\`\`\`xs
math.sub $total_cost {
  value = $discount_amount
}
\`\`\`

Subtracts the specified \`value\` (e.g., \`$discount_amount\`) from the variable (e.g., \`$total_cost\`) and updates the variable with the result. This is ideal for scenarios like reducing a total by a discount.

**NOTE**: math.sub does not return a value; it mutates the variable directly.

# math.mul

\`\`\`xs
math.mul $base_price {
  value = $tax_rate
}
\`\`\`

Multiplies the variable (e.g., \`$base_price\`) by the specified \`value\` (e.g., \`$tax_rate\`) and stores the product back into the variable. Use this to calculate values like a price with tax applied.

**NOTE**: math.mul does not return a value; it mutates the variable directly.

# math.div

\`\`\`xs
math.div $total_time {
  value = $num_tasks
}
\`\`\`

Divides the variable (e.g., \`$total_time\`) by the specified \`value\` (e.g., \`$num_tasks\`), updating the variable with the quotient. This is useful for finding averages, such as time per task.

**NOTE**: math.div mutates the value, it doesn't have a return value.

# math.bitwise.xor

\`\`\`xs
math.bitwise.xor $flags {
  value = $toggle_bit
}
\`\`\`

Performs a bitwise XOR operation between the variable (e.g., \`$flags\`) and the specified \`value\` (e.g., \`$toggle_bit\`), storing the result in the variable. This is handy for toggling specific bits in a binary flag.

**NOTE**: math.bitwise.xor mutates the value, it doesn't have a return value.

# math.bitwise.or

\`\`\`xs
math.bitwise.or $permissions {
  value = $new_permission
}
\`\`\`

Applies a bitwise OR operation between the variable (e.g., \`$permissions\`) and the specified \`value\` (e.g., \`$new_permission\`), updating the variable with the result. Commonly used to add permissions to an existing set.

**NOTE**: math.bitwise.or mutates the value, it doesn't have a return value.

# math.bitwise.and

\`\`\`xs
math.bitwise.and $status_flags {
  value = $check_bit
}
\`\`\`

Executes a bitwise AND operation between the variable (e.g., \`$status_flags\`) and the specified \`value\` (e.g., \`$check_bit\`), saving the result in the variable. This is useful for checking if a particular bit is set.

**NOTE**: math.bitwise.and mutates the value, it doesn't have a return value.

# math.add

\`\`\`xs
math.add $cart_total {
  value = $item_price
}
\`\`\`

Adds the specified \`value\` (e.g., \`$item_price\`) to the variable (e.g., \`$cart_total\`) and updates the variable with the sum. Perfect for accumulating values, like adding an item\u2019s cost to a cart total.

**NOTE**: math.add mutates the value, it doesn't have a return value.

# redis.unshift

\`\`\`xs
redis.unshift {
  key = "task_list"
  value = "urgent_task"
} as $new_list_length
\`\`\`

Adds an element to the beginning of a Redis list specified by \`key\`. The \`value\` is the element to add, and the new length of the list is stored in the variable defined by \`as\`, here \`$new_list_length\`.

# redis.incr

\`\`\`xs
redis.incr {
  package_key = "1"
  key = "visit_counter"
  by = 1
} as $new_count
\`\`\`

Increments a numeric value in Redis at the specified \`key\` within a \`package_key\` namespace by the amount given in \`by\`. The updated value is stored in the variable specified by \`as\`, here \`$new_count\`.

# redis.remove

\`\`\`xs
redis.remove {
  key = "user_list"
  value = "inactive_user"
  count = 1
}
\`\`\`

Removes a specified number (\`count\`) of occurrences of \`value\` from a Redis list identified by \`key\`. This is useful for cleaning up lists by removing specific elements.

# redis.del

\`\`\`xs
redis.del {
  key = "session_data"
}
\`\`\`

Deletes a key and its associated value from Redis, specified by \`key\`. This clears the cache entry, freeing up space.

# redis.push

\`\`\`xs
redis.push {
  package_key = "1"
  key = "message_queue"
  value = "new_message"
} as $queue_length
\`\`\`

Adds an element to the end of a Redis list identified by \`key\` within a \`package_key\` namespace. The \`value\` is the element to add, and the new list length is stored in the variable defined by \`as\`, here \`$queue_length\`.

# redis.ratelimit

\`\`\`xs
redis.ratelimit {
  key = "api_requests"
  max = 100
  ttl = 60
  error = "Rate limit exceeded"
} as $rate_limit_status
\`\`\`

Enforces rate limiting on requests using Redis, tracking usage with \`key\`. It allows up to \`max\` requests within a \`ttl\` time window (in seconds). If exceeded, the \`error\` message is used, and the result (e.g., success or failure) is stored in \`$rate_limit_status\`.

# redis.range

\`\`\`xs
redis.range {
  key = "event_log"
  start = 0
  stop = 5
} as $recent_events
\`\`\`

Retrieves a range of elements from a Redis list specified by \`key\`, from the \`start\` index to the \`stop\` index (inclusive). The result is stored in the variable defined by \`as\`, here \`$recent_events\`.

# redis.decr

\`\`\`xs
redis.decr {
  key = "stock_count"
  by = 1
} as $new_stock
\`\`\`

Decrements a numeric value in Redis at the specified \`key\` by the amount given in \`by\`. The updated value is stored in the variable specified by \`as\`, here \`$new_stock\`.

# redis.pop

\`\`\`xs
redis.pop {
  key = "task_queue"
} as $last_task
\`\`\`

Removes and returns the last element from a Redis list specified by \`key\`. The removed element is stored in the variable defined by \`as\`, here \`$last_task\`.

# redis.get

\`\`\`xs
redis.get {
  key = "user_session"
} as $session_data
\`\`\`

Retrieves the value associated with a \`key\` from Redis. The result is stored in the variable specified by \`as\`, here \`$session_data\`.

# redis.set

\`\`\`xs
redis.set {
  key = "user_token"
  data = "token123"
  ttl = 3600
}
\`\`\`

Sets a \`key\` in Redis to the specified \`data\` value, with an optional \`ttl\` (time-to-live in seconds) to control how long the key persists before expiring.

# redis.has

\`\`\`xs
redis.has {
  key = "user_token"
} as $token_exists
\`\`\`

Checks if a \`key\` exists in Redis, returning \`true\` if it does, \`false\` otherwise. The result is stored in the variable specified by \`as\`, here \`$token_exists\`.

# redis.shift

\`\`\`xs
redis.shift {
  key = "message_queue"
} as $first_message
\`\`\`

Removes and returns the first element from a Redis list specified by \`key\`. The removed element is stored in the variable defined by \`as\`, here \`$first_message\`.

# redis.count

\`\`\`xs
redis.count {
  key = "message_queue"
} as $queue_size
\`\`\`

Returns the number of elements in a Redis list specified by \`key\`. The count is stored in the variable defined by \`as\`, here \`$queue_size\`.

# redis.keys

\`\`\`xs
redis.keys {
  search = "user_*"
} as $user_keys
\`\`\`

Retrieves a list of Redis keys that match the specified \`search\` pattern (e.g., \`user_*\` for all keys starting with "user\\_"). The matching keys are stored in the variable specified by \`as\`, here \`$user_keys\`.

# object.keys

\`\`\`xs
object.keys {
  value = $user_data
} as $user_data_keys
\`\`\`

Retrieves the property keys of an object (e.g., \`$user_data\`) as an array. The resulting array of keys is stored in the variable specified by \`as\`, here \`$user_data_keys\`.

# object.values

\`\`\`xs
object.values {
  value = $product_info
} as $product_values
\`\`\`

Extracts the values of an object\u2019s properties (e.g., \`$product_info\`) into an array. The array of values is stored in the variable defined by \`as\`, here \`$product_values\`.

# object.entries

\`\`\`xs
object.entries {
  value = $settings
} as $settings_pairs
\`\`\`

Returns an array of key-value pairs from an object (e.g., \`$settings\`), where each pair is an array containing the key and its corresponding value. The result is stored in the variable specified by \`as\`, here \`$settings_pairs\`.

# precondition

\`\`\`xs
precondition ($user_age >= 18) {
  error_type = "standard"
  error = "User must be 18 or older"
}
\`\`\`

Throws an exception if the specified condition (e.g., \`$user_age >= 18\`) evaluates to \`false\`. The \`error_type\` defines the type of error, and \`error\` provides a custom message to describe the failure.

# return

\`\`\`xs
return {
  value = $calculation_result
}
\`\`\`

Halts the execution of the current function and returns the specified \`value\` (e.g., \`$calculation_result\`) as the function\u2019s output. This allows early termination with a result.

# security.create_auth_token

\`\`\`xs
security.create_auth_token {
    table = "users"
    extras = { "role": "admin" }
    expiration = 86400
    id = $user_id
} as $auth_token
\`\`\`

Generates an encrypted authentication token linked to a database table (e.g., \`users\`). The \`extras\` parameter adds optional data, \`expiration\` sets validity in seconds (e.g., 86400 for 24 hours), and \`id\` identifies the user. The token is stored in the variable defined by \`as\`, here \`$auth_token\`.

# security.create_uuid

\`\`\`xs
security.create_uuid as $unique_id
\`\`\`

Generates a Universally Unique Identifier (UUID), a random 128-bit value, stored in the variable defined by \`as\`, here \`$unique_id\`.

# security.encrypt

\`\`\`xs
security.encrypt {
    data = $sensitive_data
    algorithm = "aes-256-cbc"
    key = "encryption_key"
    iv = "init_vector"
} as $encrypted_data
\`\`\`

Encrypts a payload into binary data using a specified \`algorithm\` (e.g., \`aes-256-cbc\`), \`key\`, and initialization vector (\`iv\`). The encrypted result is stored in the variable defined by \`as\`, here \`$encrypted_data\`.

# security.create_curve_key

\`\`\`xs
security.create_curve_key {
    curve = "P-256"
    format = "object"
} as $crypto_key
\`\`\`

Generates a cryptographic key using an elliptic curve type (\`P-256\`, \`P-384\`, or \`P-521\`). The \`format\` parameter sets the output type (e.g., \`object\`), and the key is stored in the variable defined by \`as\`, here \`$crypto_key\`.

# security.random_bytes

\`\`\`xs
security.random_bytes {
    length = 16
} as $random_bytes
\`\`\`

Generates a string of random bytes with the specified \`length\` (e.g., 16), stored in the variable defined by \`as\`, here \`$random_bytes\`.

# security.create_password

\`\`\`xs
security.create_password {
    character_count = 12
    require_lowercase = true
    require_uppercase = true
    require_digit = true
    require_symbol = false
    symbol_whitelist = ""
} as $generated_password
\`\`\`

Generates a random password based on rules like \`character_count\` (e.g., 12) and requirements for lowercase, uppercase, digits, and symbols. The \`symbol_whitelist\` limits allowed symbols. The password is stored in the variable defined by \`as\`, here \`$generated_password\`.

# security.decrypt

\`\`\`xs
security.decrypt {
    data = $encrypted_data
    algorithm = "aes-256-cbc"
    key = "encryption_key"
    iv = "init_vector"
} as $decrypted_data
\`\`\`

Decrypts a payload back to its original form using the specified \`algorithm\` (e.g., \`aes-256-cbc\`), \`key\`, and initialization vector (\`iv\`). The decrypted result is stored in the variable defined by \`as\`, here \`$decrypted_data\`.

# security.jwe_decode

\`\`\`xs
security.jwe_decode {
    token = $jwe_token
    key = "decryption_key"
    check_claims = { "iss": "my_app" }
    key_algorithm = "A256KW"
    content_algorithm = "A256GCM"
    timeDrift = 0
} as $decoded_payload
\`\`\`

Decodes a JSON Web Encryption (JWE) token using the \`key\`, specified \`key_algorithm\` (e.g., \`A256KW\`), and \`content_algorithm\` (e.g., \`A256GCM\`). Optional \`check_claims\` validates token claims, and \`timeDrift\` adjusts time validation. The result is stored in the variable defined by \`as\`, here \`$decoded_payload\`.

# security.jws_encode

\`\`\`xs
security.jws_encode {
    headers = { "alg": "HS256" }
    claims = { "user_id": "123" }
    key = "signing_key"
    signature_algorithm = "HS256"
    ttl = 3600
} as $signed_token
\`\`\`

Encodes a payload as a JSON Web Signature (JWS) token with \`headers\`, \`claims\`, and a \`key\`. The \`signature_algorithm\` (e.g., \`HS256\`) signs the token, and \`ttl\` sets its validity in seconds (e.g., 3600). The token is stored in the variable defined by \`as\`, here \`$signed_token\`.

# security.jws_decode

\`\`\`xs
security.jws_decode {
    token = $jws_token
    key = "signing_key"
    check_claims = { "user_id": "123" }
    signature_algorithm = "HS256"
    timeDrift = 0
} as $verified_payload
\`\`\`

Decodes a JSON Web Signature (JWS) token using the \`key\` and \`signature_algorithm\` (e.g., \`HS256\`). Optional \`check_claims\` verifies token claims, and \`timeDrift\` adjusts time validation. The payload is stored in the variable defined by \`as\`, here \`$verified_payload\`.

# security.jwe_encode

\`\`\`xs
security.jwe_encode {
    headers = { "alg": "A256KW" }
    claims = { "data": "secret" }
    key = "encryption_key"
    key_algorithm = "A256KW"
    content_algorithm = "A256GCM"
    ttl = 0
} as $encrypted_token
\`\`\`

Encodes a payload as a JSON Web Encryption (JWE) token with \`headers\`, \`claims\`, and a \`key\`. The \`key_algorithm\` (e.g., \`A256KW\`) and \`content_algorithm\` (e.g., \`A256GCM\`) secure the token, and \`ttl\` sets its validity (0 for no expiration). The token is stored in the variable defined by \`as\`, here \`$encrypted_token\`.

# security.create_secret_key

\`\`\`xs
security.create_secret_key {
    bits = 2048
    format = "object"
} as $secret_key
\`\`\`

Generates a secret key for digital signatures or symmetric encryption with the specified \`bits\` (e.g., 2048) and \`format\` (e.g., \`object\`). The key is stored in the variable defined by \`as\`, here \`$secret_key\`.

# security.random_number

\`\`\`xs
security.random_number {
    min = 1
    max = 100
} as $random_value
\`\`\`

Generates a random number between \`min\` and \`max\` (e.g., 1 to 100), stored in the variable defined by \`as\`, here \`$random_value\`.

# security.check_password

\`\`\`xs
security.check_password {
    text_password = $user_input_password
    hash_password = $stored_password_hash
} as $is_valid
\`\`\`

Verifies if a plain-text password (e.g., \`$user_input_password\`) matches a hashed password (e.g., \`$stored_password_hash\`). Returns \`true\` if they match, \`false\` otherwise, stored in the variable defined by \`as\`, here \`$is_valid\`.

# stream.from_jsonl

\`\`\`xs
stream.from_jsonl {
  value = $jsonl_file
} as $jsonl_stream
\`\`\`

Parses a JSONL (JSON Lines) file resource and streams its row data. The \`value\` parameter specifies the JSONL file to process, and the resulting stream is stored in the variable defined by \`as\`, here \`$jsonl_stream\`.

# storage.create_file_resource

\`\`\`xs
storage.create_file_resource {
  filename = "report.txt"
  filedata = $report_content
} as $new_file
\`\`\`

Creates a new file with the specified \`filename\` and \`filedata\` content. The created file resource is stored in the variable specified by \`as\`, here \`$new_file\`, for further use.

# storage.sign_private_url

\`\`\`xs
storage.sign_private_url {
  pathname = "documents/secret.pdf"
  ttl = 60
} as $signed_url
\`\`\`

Generates a signed URL for a private file at the specified \`pathname\`, allowing temporary access for a duration defined by \`ttl\` (in seconds). The signed URL is stored in the variable defined by \`as\`, here \`$signed_url\`.

# storage.create_attachment

\`\`\`xs
storage.create_attachment access=public {
  value = $input.attachment
  filename = "attachment.pdf"
} as $attachment_metadata
\`\`\`

Creates attachment metadata from a file resource specified by \`value\`, with the given \`filename\`. The \`access\` parameter determines if the attachment is \`public\` or \`private\`. The metadata is stored in the variable specified by \`as\`, here \`$attachment_metadata\`.

# storage.delete_file

\`\`\`xs
storage.delete_file {
  pathname = "temp/data.csv"
}
\`\`\`

Deletes a file from storage at the specified \`pathname\`. This removes the file permanently from the storage system.

# storage.read_file_resource

\`\`\`xs
storage.read_file_resource {
  value = $input.file
} as $file_content
\`\`\`

Retrieves the raw data from a file resource specified by \`value\`. The content of the file is stored in the variable defined by \`as\`, here \`$file_content\`.

# storage.create_image

\`\`\`xs
storage.create_image access=public {
  value = $input.image
  filename = "profile.jpg"
} as $image_metadata
\`\`\`

Creates image metadata from a file resource specified by \`value\`, with the given \`filename\`. The \`access\` parameter sets the image as \`public\` or \`private\`. The metadata is stored in the variable specified by \`as\`, here \`$image_metadata\`.

# stream.from_csv

\`\`\`xs
stream.from_csv {
  value = $csv_file
  separator = ","
  enclosure = "'"
  escape_char = "'"
} as $csv_stream
\`\`\`

Parses a CSV file resource and streams its row data. The \`value\` parameter specifies the CSV file, while \`separator\`, \`enclosure\`, and \`escape_char\` define the CSV format. The resulting stream is stored in the variable defined by \`as\`, here \`$csv_stream\`.

# stream.from_request

\`\`\`xs
stream.from_request {
  url = "http://example.com/api/v1"
  method = "GET"
  params = {}|set:"filter":"active"
  headers = []|push:"Authorization: Bearer token123"
  timeout = 15
  follow_location = true
} as $api_stream
\`\`\`

Converts an external HTTP request into a streaming API response, returning the data as an array. It supports various HTTP methods, query parameters, headers, a \`timeout\` (in seconds), and an option to \`follow_location\` for redirects. The stream is stored in the variable specified by \`as\`, here \`$api_stream\`.

# switch

\`\`\`xs
switch ($user_status) {
  case ("active") {
    return {
      value = "User is active"
    }
  } break
  case ("inactive") {
    return {
      value = "User is inactive"
    }
  } break
  default {
    return {
      value = "User status unknown"
    }
  }
}
\`\`\`

Implements switch-case logic to control script flow based on the value of a variable (e.g., \`$user_status\`). It evaluates the variable against each \`case\`, executing the corresponding block if a match is found, or the \`default\` block if no matches occur.

# text.starts_with

\`\`\`xs
text.starts_with $message {
  value = "Hello"
} as $starts_with_hello
\`\`\`

Checks if a text string (e.g., \`$message\`) begins with the specified \`value\` (e.g., \`"Hello"\`). Returns \`true\` if it does, \`false\` otherwise, and stores the result in the variable defined by \`as\`, here \`$starts_with_hello\`.

# text.icontains

\`\`\`xs
text.icontains $description {
  value = "error"
} as $has_error
\`\`\`

Performs a case-insensitive check to see if a text string (e.g., \`$description\`) contains the specified \`value\` (e.g., \`"error"\`). Returns \`true\` if found, \`false\` otherwise, and stores the result in \`$has_error\`.

# text.ltrim

\`\`\`xs
text.ltrim $user_input {
  value = " "
}
\`\`\`

Removes leading characters (default is whitespace, or as specified by \`value\`) from a text string (e.g., \`$user_input\`). Updates the variable with the trimmed result, useful for cleaning up user input.

# text.rtrim

\`\`\`xs
text.rtrim $user_input {
  value = " "
}
\`\`\`

Removes trailing characters (default is whitespace, or as specified by \`value\`) from a text string (e.g., \`$user_input\`). Updates the variable with the trimmed result, ensuring no unwanted trailing characters remain.

# text.append

\`\`\`xs
text.append $greeting {
  value = ", welcome!"
}
\`\`\`

Adds the specified \`value\` (e.g., \`", welcome!"\`) to the end of a text string (e.g., \`$greeting\`). Updates the variable with the new concatenated string, useful for building messages.

# text.istarts_with

\`\`\`xs
text.istarts_with $title {
  value = "intro"
} as $starts_with_intro
\`\`\`

Performs a case-insensitive check to see if a text string (e.g., \`$title\`) starts with the specified \`value\` (e.g., \`"intro"\`). Returns \`true\` if it does, \`false\` otherwise, and stores the result in \`$starts_with_intro\`.

# text.iends_with

\`\`\`xs
text.iends_with $filename {
  value = "pdf"
} as $ends_with_pdf
\`\`\`

Performs a case-insensitive check to see if a text string (e.g., \`$filename\`) ends with the specified \`value\` (e.g., \`"pdf"\`). Returns \`true\` if it does, \`false\` otherwise, and stores the result in \`$ends_with_pdf\`.

# text.ends_with

\`\`\`xs
text.ends_with $url {
  value = ".com"
} as $is_com_domain
\`\`\`

Checks if a text string (e.g., \`$url\`) ends with the specified \`value\` (e.g., \`".com"\`). Returns \`true\` if it does, \`false\` otherwise, and stores the result in \`$is_com_domain\`.

# text.prepend

\`\`\`xs
text.prepend $message {
  value = "Alert: "
}
\`\`\`

Adds the specified \`value\` (e.g., \`"Alert: "\`) to the beginning of a text string (e.g., \`$message\`). Updates the variable with the new concatenated string, useful for adding prefixes.

# text.contains

\`\`\`xs
text.contains $log_entry {
  value = "error"
} as $has_error
\`\`\`

Checks if a text string (e.g., \`$log_entry\`) contains the specified \`value\` (e.g., \`"error"\`). Returns \`true\` if found, \`false\` otherwise, and stores the result in \`$has_error\`.

# text.trim

\`\`\`xs
text.trim $user_input {
  value = " "
}
\`\`\`

Removes characters (default is whitespace, or as specified by \`value\`) from both the beginning and end of a text string (e.g., \`$user_input\`). Updates the variable with the trimmed result, ensuring clean text.

# throw

\`\`\`xs
throw {
  name = "ValidationError"
  value = "Invalid user input provided"
}
\`\`\`

Throws an error and halts the script\u2019s execution immediately. The \`name\` parameter specifies the error type (e.g., \`"ValidationError"\`), and \`value\` provides a custom error message to describe the issue.

# try_catch

\`\`\`xs
try_catch {
  try {
    function.run divide_fn {
      input = { a: 10, b: 0 }
    }
  }
  catch {
    debug.log {
      value = "Error occurred: division by zero"
    }
  }
  finally {
    debug.log {
      value = "Operation completed"
    }
  }
}
\`\`\`

Executes a block of code in the \`try\` section, catching any errors in the \`catch\` block for error handling (e.g., logging the error). The optional \`finally\` block runs regardless of success or failure, useful for cleanup tasks.

# util.template_engine

\`\`\`xs
util.template_engine {
  value = """
    Hello {{$name}},
    {{ $message }}

    ---
    Best,
    {{ $sender }}
  """|trim
} as $greeting_message
\`\`\`

Parses a template string (e.g., \`"Hello, {{name}}!"\`) and replaces placeholders (e.g., \`{{name}}\`) with actual values. The result is stored in the variable defined by \`as\`, here \`$greeting_message\`.

# util.set_header

\`\`\`xs
util.set_header {
  value = "Set-Cookie: sessionId=e8bb43229de9; HttpOnly; Secure; Domain=foo.example.com"
  duplicates = "replace"
}
\`\`\`

Adds a header to the response, specified by \`value\` (e.g., a cookie header). The \`duplicates\` parameter determines how to handle duplicate headers, such as \`"replace"\` to overwrite existing ones.

# util.get_env

\`\`\`xs
util.get_env as $environment_vars
\`\`\`

Retrieves all environment variables available in the script\u2019s context and stores them in the variable specified by \`as\`, here \`$environment_vars\`. Useful for accessing system-wide settings.

# util.get_all_input

\`\`\`xs
util.get_all_input as $input_data
\`\`\`

Captures all parsed input data sent to the script\u2019s context and stores it in the variable specified by \`as\`, here \`$input_data\`. This provides a structured view of input parameters.

# util.get_input

\`\`\`xs
util.get_input as $raw_input
\`\`\`

Retrieves the raw, unparsed input data for the request and stores it in the variable specified by \`as\`, here \`$raw_input\`. This is useful for accessing the original request data before processing.

# util.sleep

\`\`\`xs
util.sleep {
  value = 5
}
\`\`\`

Pauses script execution for the specified number of seconds in \`value\` (e.g., 5 seconds). This can be used to introduce delays between operations.

# util.ip_lookup

\`\`\`xs
util.ip_lookup {
  value = "123.234.99.22"
} as $location
\`\`\`

Retrieves the geographic location of an IP address specified in \`value\`. The location data (e.g., city, country) is stored in the variable defined by \`as\`, here \`$location\`.

# util.geo_distance

\`\`\`xs
util.geo_distance {
  latitude_1 = 40.71
  longitude_1 = 74
  latitude_2 = 48.86
  longitude_2 = 2.35
} as $distance
\`\`\`

Calculates the distance between two geographic points, specified by their \`latitude_1\`, \`longitude_1\` (first point) and \`latitude_2\`, \`longitude_2\` (second point). The computed distance is stored in the variable defined by \`as\`, here \`$distance\`.

# while

\`\`\`xs
while ($retry_count < 5) {
  each {
    var.update $retry_count {
      value = $retry_count + 1
    }
  }
}
\`\`\`

Continuously loops through a block of code as long as the specified condition (e.g., \`$retry_count < 5\`) evaluates to \`true\`. The \`each\` block contains the actions to repeat until the condition becomes \`false\`.

# zip.create_archive

\`\`\`xs
zip.create_archive {
  filename = "backup.zip"
} as $zip_archive
\`\`\`

Creates a new compressed zip archive with the specified \`filename\`. The created zip file resource is stored in the variable defined by \`as\`, here \`$zip_archive\`, for further use.

# zip.add_to_archive

\`\`\`xs
zip.add_to_archive {
  file = $input.file
  zip = $zip_archive
}
\`\`\`

Adds a file (specified by \`file\`) to an existing zip archive (specified by \`zip\`). This updates the zip archive with the new file content.

# zip.delete_from_archive

\`\`\`xs
zip.delete_from_archive {
  filename = $input.file
  zip = $input.file
}
\`\`\`

Removes a file (specified by \`filename\`) from an existing zip archive (specified by \`zip\`). This deletes the file from the archive without affecting other contents.

# zip.extract

\`\`\`xs
zip.extract {
  zip = $zip_archive
} as $extracted_files
\`\`\`

Extracts the contents of a zip archive (specified by \`zip\`) into individual files. The extracted files are stored in the variable defined by \`as\`, here \`$extracted_files\`.

# zip.view_contents

\`\`\`xs
zip.view_contents {
  zip = $input.file
} as $archive_contents
\`\`\`

Lists the contents of a zip archive (specified by \`zip\`), providing details such as file names within the archive. The list is stored in the variable defined by \`as\`, here \`$archive_contents\`.

# cloud.azure.storage.sign_url

\`\`\`xs
cloud.azure.storage.sign_url {
    account_name = "my_storage_account"
    account_key = "my_secret_key"
    container_name = "documents"
    path = "reports/annual.pdf"
    ttl = 300
} as $document_access_url
\`\`\`

Generates a signed URL for securely accessing a blob in Azure Blob Storage. The URL remains valid for the duration specified by \`ttl\` (in seconds), allowing temporary access to the file, and is stored in a variable for later use.

# cloud.aws.s3.sign_url

\`\`\`xs
cloud.aws.s3.sign_url {
    bucket = "company_assets"
    region = "us-east-1"
    key = "my_aws_key"
    secret = "my_aws_secret"
    file_key = "images/logo.png"
    ttl = 300
} as $logo_access_url
\`\`\`

Creates a signed URL for accessing an object in an AWS S3 bucket, providing temporary access for the time set by \`ttl\` (in seconds). The URL is stored in the specified variable.

# cloud.aws.s3.list_directory

\`\`\`xs
cloud.aws.s3.list_directory {
    bucket = "media_library"
    region = "us-west-2"
    key = "my_aws_key"
    secret = "my_aws_secret"
    prefix = "videos/"
    next_page_token = $previous_page_token
} as $video_list
\`\`\`

Lists the contents of an AWS S3 bucket, optionally filtered by a \`prefix\`, with support for pagination via \`next_page_token\`. The resulting list is stored in the specified variable.

# cloud.google.storage.upload_file

\`\`\`xs
cloud.google.storage.upload_file {
    service_account = "my_service_account_json"
    bucket = "user_uploads"
    filePath = "photos/vacation.jpg"
    file = $uploaded_image
    metadata = { "description": "Beach vacation photo" }
}
\`\`\`

Uploads a file to Google Cloud Storage at the specified \`filePath\` in a bucket, with optional \`metadata\` for additional details.

# cloud.elasticsearch.request

\`\`\`xs
cloud.elasticsearch.request {
    auth_type = "API Key"
    key_id = "my_key_id"
    access_key = "my_access_key"
    method = "GET"
    url = "https://my-elastic-cluster.com/posts/_search"
    payload = { "query": { "match": { "category": "tech" } } }
} as $search_results
\`\`\`

Sends an HTTP request to an Elastic Search cluster, executing the specified \`method\` with an optional \`payload\`. The response is stored in the given variable.

# cloud.azure.storage.list_directory

\`\`\`xs
cloud.azure.storage.list_directory {
    account_name = "my_storage_account"
    account_key = "my_secret_key"
    container_name = "archives"
    path = "2023/"
} as $yearly_archives
\`\`\`

Lists the contents of an Azure Blob Storage container, optionally filtered by a \`path\`. The list is stored in the specified variable.

# cloud.aws.opensearch.document

\`\`\`xs
cloud.aws.opensearch.document {
    auth_type = "IAM"
    key_id = "my_aws_key"
    access_key = "my_aws_secret"
    region = "us-east-1"
    base_url = "https://my-opensearch-domain.com"
    index = "articles"
    method = "POST"
    doc_id = "article_123"
} as $article_response
\`\`\`

Manages records (e.g., create, read, update, delete) in an AWS OpenSearch index using the specified \`method\`. The response is stored in the given variable.

# cloud.elasticsearch.document

\`\`\`xs
cloud.elasticsearch.document {
    auth_type = "API Key"
    key_id = "my_key_id"
    access_key = "my_access_key"
    base_url = "https://my-elastic-cluster.com"
    index = "users"
    method = "GET"
    doc_id = "user_456"
} as $user_profile
\`\`\`

Manages records in an Elastic Search index (e.g., create, read, update, delete) with the specified \`method\`. The response is stored in the given variable.

# cloud.aws.s3.read_file

\`\`\`xs
cloud.aws.s3.read_file {
    bucket = "app_resources"
    region = "us-west-2"
    key = "my_aws_key"
    secret = "my_aws_secret"
    file_key = "configs/settings.json"
} as $app_settings_file
\`\`\`

Reads a file from an AWS S3 bucket and stores its contents in a variable as a file resource.

# cloud.azure.storage.delete_file

\`\`\`xs
cloud.azure.storage.delete_file {
    account_name = "my_storage_account"
    account_key = "my_secret_key"
    container_name = "temp_files"
    filePath = "drafts/old_draft.docx"
}
\`\`\`

Deletes a blob from an Azure Blob Storage container at the specified \`filePath\`.

# cloud.aws.s3.delete_file

\`\`\`xs
cloud.aws.s3.delete_file {
    bucket = "user_backups"
    region = "us-east-1"
    key = "my_aws_key"
    secret = "my_aws_secret"
    file_key = "backups/2023-01.zip"
}
\`\`\`

Deletes an object from an AWS S3 bucket at the specified \`file_key\`.

# cloud.google.storage.read_file

\`\`\`xs
cloud.google.storage.read_file {
    service_account = "my_service_account_json"
    bucket = "app_data"
    filePath = "logs/error_log.txt"
} as $error_log_file
\`\`\`

Reads a file from Google Cloud Storage and stores its contents in a variable as a file resource.

# cloud.aws.s3.get_file_info

\`\`\`xs
cloud.aws.s3.get_file_info {
    bucket = "product_images"
    region = "us-east-1"
    key = "my_aws_key"
    secret = "my_aws_secret"
    file_key = "items/shirt.jpg"
} as $image_metadata
\`\`\`

Retrieves metadata (e.g., size, last modified) about an object in an AWS S3 bucket, storing it in a variable.

# cloud.aws.opensearch.request

\`\`\`xs
cloud.aws.opensearch.request {
    auth_type = "IAM"
    key_id = "my_aws_key"
    access_key = "my_aws_secret"
    region = "us-west-2"
    method = "POST"
    url = "https://my-opensearch-domain.com/_search"
    query = { "query": { "term": { "status": "active" } } }
} as $active_items
\`\`\`

Sends a request to AWS OpenSearch with the specified \`method\` and \`query\`, storing the response in a variable.

# cloud.google.storage.list_directory

\`\`\`xs
cloud.google.storage.list_directory {
    service_account = "my_service_account_json"
    bucket = "project_files"
    path = "designs/"
} as $design_files
\`\`\`

Lists the contents of a Google Cloud Storage bucket, optionally filtered by \`path\`, storing the result in a variable.

# cloud.google.storage.sign_url

\`\`\`xs
cloud.google.storage.sign_url {
    service_account = "my_service_account_json"
    bucket = "public_assets"
    filePath = "downloads/guide.pdf"
    method = "GET"
    ttl = 300
} as $guide_download_url
\`\`\`

Generates a signed URL for accessing a file in Google Cloud Storage, valid for \`ttl\` seconds, with the specified \`method\`.

# cloud.google.storage.get_file_info

\`\`\`xs
cloud.google.storage.get_file_info {
    service_account = "my_service_account_json"
    bucket = "app_assets"
    filePath = "icons/app_icon.png"
} as $icon_details
\`\`\`

Retrieves metadata about a file in Google Cloud Storage, storing it in a variable.

# cloud.azure.storage.get_file_info

\`\`\`xs
cloud.azure.storage.get_file_info {
    account_name = "my_storage_account"
    account_key = "my_secret_key"
    container_name = "media"
    filePath = "videos/intro.mp4"
} as $video_metadata
\`\`\`

Retrieves metadata about a blob in Azure Blob Storage, storing it in a variable.

# cloud.aws.opensearch.query

\`\`\`xs
cloud.aws.opensearch.query {
    auth_type = "IAM"
    key_id = "my_aws_key"
    access_key = "my_aws_secret"
    region = "us-east-1"
    base_url = "https://my-opensearch-domain.com"
    index = "products"
    return_type = "search"
    expression = [{ "field": "price", "value": "100", "op": "lt" }]
    size = 10
    from = 0
    included_fields = ["name", "price"]
    sort = [{ "field": "price", "order": "asc" }]
    payload = {}
} as $cheap_products
\`\`\`

Performs a search query on AWS OpenSearch with customizable filters, pagination, and sorting, storing results in a variable.

# cloud.aws.s3.upload_file

\`\`\`xs
cloud.aws.s3.upload_file {
    bucket = "user_content"
    region = "us-west-2"
    key = "my_aws_key"
    secret = "my_aws_secret"
    file_key = "uploads/profile.jpg"
    file = $user_photo
    metadata = { "user_id": "123" }
    object_lock_mode = "governance"
    object_lock_retain_until = "2025-12-31"
} as $upload_result
\`\`\`

Uploads a file to an AWS S3 bucket with optional metadata and object lock settings, storing the response in a variable.

# cloud.algolia.request

\`\`\`xs
cloud.algolia.request {
    application_id = "my_algolia_app_id"
    api_key = "my_algolia_api_key"
    url = "https://my-algolia-app.algolia.net/1/indexes/posts/query"
    method = "POST"
    payload = { "query": "tech" }
} as $tech_posts
\`\`\`

Sends a request to Algolia with the specified \`method\` and \`payload\`, storing the response in a variable.

# cloud.azure.storage.upload_file

\`\`\`xs
cloud.azure.storage.upload_file {
    account_name = "my_storage_account"
    account_key = "my_secret_key"
    container_name = "user_files"
    filePath = "docs/resume.pdf"
    file = $user_resume
    metadata = { "owner": "Jane" }
} as $upload_confirmation
\`\`\`

Uploads a file to Azure Blob Storage with optional metadata, storing the response in a variable.

# cloud.google.storage.delete_file

\`\`\`xs
cloud.google.storage.delete_file {
    service_account = "my_service_account_json"
    bucket = "temp_storage"
    filePath = "old/temp_data.csv"
}
\`\`\`

Deletes a file from Google Cloud Storage at the specified \`filePath\`.

# cloud.elasticsearch.query

\`\`\`xs
cloud.elasticsearch.query {
    auth_type = "API Key"
    key_id = "my_key_id"
    access_key = "my_access_key"
    base_url = "https://my-elastic-cluster.com"
    index = "orders"
    return_type = "search"
    expression = [{ "field": "total", "value": "50", "op": "gt" }]
    size = 5
    from = 0
    included_fields = ["id", "total"]
    sort = [{ "field": "total", "order": "desc" }]
    payload = {}
} as $large_orders
\`\`\`

Executes a search query on Elastic Search with filters, pagination, and sorting, storing results in a variable.

# cloud.azure.storage.read_file

\`\`\`xs
cloud.azure.storage.read_file {
    account_name = "my_storage_account"
    account_key = "my_secret_key"
    container_name = "logs"
    filePath = "daily/2023-10-01.log"
} as $daily_log_file
\`\`\`

Reads a blob from Azure Blob Storage and stores its contents in a variable as a file resource.

# test

\`\`\`xs
test "value should always be greater than 0" {
  input = { name: "value" }
  expect.to_be_greater_than ($response.value) {
    value = 0
  }
}
\`\`\`

Defines a unit-test with a descriptive name (e.g., \`"value should always be greater than 0"\`). Each test can contain many \`expect\` blocks asserting conditions on the \`$response\` variable. The test will pass if all expectations are met. An optional \`input\` parameter can be passed to the stack being tested as its calling \`input\`.

# expect.to_equal

\`\`\`xs
expect.to_equal ($response.some_property) {
  value = "expected_value"
}
\`\`\`

Checks if the value of \`$response.some_property\` equals the specified \`value\`. Useful for basic equality checks in test assertions.

# expect.to_start_with

\`\`\`xs
expect.to_start_with ($response.some_property) {
  value = "expected_value"
}
\`\`\`

Checks if the value of \`$response.some_property\` starts with the specified \`value\`. Useful for verifying string prefixes in test assertions.

# expect.to_end_with

\`\`\`xs
expect.to_end_with ($response.some_property) {
  value = "expected_value"
}
\`\`\`

Checks if the value of \`$response.some_property\` ends with the specified \`value\`. Useful for verifying string suffixes in test assertions.

# expect.to_be_greater_than

\`\`\`xs
expect.to_be_greater_than ($response.some_number) {
  value = "expected_value"
}
\`\`\`

Checks if the value of \`$response.some_number\` is greater than the specified \`value\`. Useful for numeric comparisons in tests.

# expect.to_be_less_than

\`\`\`xs
expect.to_be_less_than ($response.some_number) {
  value = "expected_value"
}
\`\`\`

Checks if the value of \`$response.some_number\` is less than the specified \`value\`. Useful for numeric comparisons in tests.

# expect.to_match

\`\`\`xs
expect.to_match ($response) {
  value = "expected_value"
}
\`\`\`

Checks if the value of \`$response\` matches the specified pattern or regular expression in \`value\`. Useful for pattern matching in test assertions.

# expect.to_not_equal

\`\`\`xs
expect.to_not_equal ($response) {
  value = "expected_value"
}
\`\`\`

Checks if the value of \`$response\` does not equal the specified \`value\`. Useful for negative equality assertions in tests.

# expect.to_contain

\`\`\`xs
expect.to_contain ($response) {
  value = "expected_value"
}
\`\`\`

Checks if the value of \`$response\` contains the specified \`value\`. Useful for substring or array membership assertions in tests.

# expect.to_throw

\`\`\`xs
expect.to_throw {
  exception = "expected_value"
}
\`\`\`

Checks if the specified code block throws an error with the given \`exception\` as the error message. Useful for testing error conditions. Note that \`exception\` is optional and can be omitted if you just want to capture any error.

# expect.to_be_within

\`\`\`xs
expect.to_be_within ($response.some_number) {
  min = 10
  max = 100
}
\`\`\`

Checks if the value of \`$response.some_number\` is within the specified \`min\` and \`max\` range (inclusive). Useful for range checks in tests.

# expect.to_be_true

\`\`\`xs
expect.to_be_true ($response)
\`\`\`

Checks if the value of \`$response\` is \`true\`. Useful for boolean assertions in tests.

# expect.to_be_false

\`\`\`xs
expect.to_be_false ($response.some_boolean)
\`\`\`

Checks if the value of \`$response.some_boolean\` is \`false\`. Useful for boolean assertions in tests.

# expect.to_be_in_the_past

\`\`\`xs
expect.to_be_in_the_past ($response.some_date)
\`\`\`

Checks if the value of \`$response.some_date\` is a date/time in the past. Useful for validating timestamps.

# expect.to_be_in_the_future

\`\`\`xs
expect.to_be_in_the_future ($response.some_date)
\`\`\`

Checks if the value of \`$response.some_date\` is a date/time in the future. Useful for validating timestamps.

# expect.to_be_defined

\`\`\`xs
expect.to_be_defined ($response.some_property)
\`\`\`

Checks if the value of \`$response.some_property\` is defined (not \`null\` or \`undefined\`). Useful for ensuring variables are set.

# expect.to_not_be_defined

\`\`\`xs
expect.to_not_be_defined ($response.some_property)
\`\`\`

Checks if the value of \`$response.some_property\` is not defined (is \`null\` or \`undefined\`). Useful for ensuring variables are unset.

# expect.to_be_null

\`\`\`xs
expect.to_be_null ($response)
\`\`\`

Checks if the value of \`$response\` is \`null\`. Useful for asserting null values.

# expect.to_not_be_null

\`\`\`xs
expect.to_not_be_null ($response)
\`\`\`

Checks if the value of \`$response\` is not \`null\`. Useful for asserting non-null values.

# expect.to_be_empty

\`\`\`xs
expect.to_be_empty ($response.my_array)
\`\`\`

Checks if the value of \`$response.my_array\` is empty (e.g., an empty string, array, or object). Useful for asserting emptiness.

# mock

\`\`\`xs
var  $email {
  value = $input.email|trim|lower
  mock = {
    "get user test": "email@example.com"
  }
}

db.get user {
  field_name = "email"
  field_value = $input.email
  mock = {
    "get user test": { id: 1, name: "Test User", email: "email@example.com" }
  }
} as $user
\`\`\`

Creates a mock for a database query, API endpoint or any other statement returning a \`value\`. The mock's name must match the test's name. When the test runs, it applies this mock to the statement with the same name, simulating data (e.g., API responses) without real external calls.

# swagger

\`\`\`xs
api_group "products" {
  description = "Operations related to products"
  swagger = false
}
\`\`\`

Activate or deactivate Swagger documentation for this API group.

# canonical

\`\`\`xs
api_group "products" {
  description = "Operations related to products"
  canonical = "HZ4jLtdc"
}
\`\`\`

Defines a unique identifier for the API group or other resources. In the case of an API group, this identifier will be used as part of the URL of each endpoint it contains.
`;var zg=class extends Wr{static{r(this,"InputFilterMessageProvider")}constructor(t){super(),this.parseFilters(t)}parseFilters(t){this.__filterDoc={};let n=[],o="";for(let i of t.split(`
`))i.startsWith("#")?(o&&(this.__filterDoc[o]=n.join(`
`).trim()),o=i.slice(2).trim(),n=[]):n.push(i);o&&n.length&&(this.__filterDoc[o]=n.join(`
`).trim())}findFilter(t,n){let o=n[t];if(!(o.tokenType.name==="Identifier"||o.tokenType.LONGER_ALT&&o.tokenType.LONGER_ALT.name==="Identifier"||o.tokenType.CATEGORIES&&o.tokenType.CATEGORIES.some(s=>s.name==="Identifier")))return null;let a=o.image;return this.__filterDoc[a]?a:null}isMatch(t,n,o){if(t===0)return!1;let i=n[t-1],a=i.image==="=",s=i.image==="|";if(!a&&!s)return!1;if(a){for(let c=t-2;c>=0;c--){let u=n[c];if(u.image==="filters")return!!this.findFilter(t,n);if(u.image==="{"||u.image==="}"||u.image===`
`)break}return!1}if(s){for(let c=t-2;c>=0;c--){let u=n[c];if(u.image==="="&&c>0&&n[c-1].image==="filters")return!!this.findFilter(t,n);if(u.image==="{"||u.image==="}"||u.image===`
`)break}return!1}return!1}render(t,n){let o=this.findFilter(t,n);if(o)return this.__filterDoc[o]}};var KF=`# min

Enforces a minimum value or length for the entry.

- **For \`decimal\` and \`int\` types:** Requires the value to be greater than or equal to the specified minimum.
  - Example:
    \`\`\`xs
    input {
      decimal amount filters=min:10
    }
    \`\`\`
    (value must be \u2265 10)
  - Example:
    \`\`\`xs
    input {
      int age filters=min:18
    }
    \`\`\`
    (value must be \u2265 18)
- **For \`text\` and \`password\` types:** Requires the entry to have at least the specified number of characters.
  - Example:
    \`\`\`xs
    input {
      text username filters=min:3
    }
    \`\`\`
    (length \u2265 3)
  - Example:
    \`\`\`xs
    input {
      password pwd filters=min:8
    }
    \`\`\`
    (length \u2265 8)

# max

Enforces a maximum value or length for the entry.

- **For \`decimal\` and \`int\` types:** Requires the value to be less than or equal to the specified maximum.
  - Example:
    \`\`\`xs
    input {
      decimal amount filters=max:100
    }
    \`\`\`
    (value must be \u2264 100)
  - Example:
    \`\`\`xs
    input {
      int age filters=max:65
    }
    \`\`\`
    (value must be \u2264 65)
- **For \`text\` and \`password\` types:** Requires the entry to have at most the specified number of characters.
  - Example:
    \`\`\`xs
    input {
      text username filters=max:20
    }
    \`\`\`
    (length \u2264 20)
  - Example:
    \`\`\`xs
    input {
      password pwd filters=max:32
    }
    \`\`\`
    (length \u2264 32)

# trim

Removes excess whitespace from the beginning and end of the entry.

- **For \`text\` and \`email\` types.**
  - Example:
    \`\`\`xs
    input {
      text name filters=trim
    }
    \`\`\`
  - Example:
    \`\`\`xs
    input {
      email address filters=trim
    }
    \`\`\`

# lower

Converts all characters to lowercase.

- **For \`text\` and \`email\` types.**
  - Example:
    \`\`\`xs
    input {
      text email filters=lower
    }
    \`\`\`
  - Example:
    \`\`\`xs
    input {
      email address filters=lower
    }
    \`\`\`

# upper

Converts all characters to uppercase.

- **For \`text\` type.**
  - Example:
    \`\`\`xs
    input {
      text shout filters=upper
    }
    \`\`\`

# startsWith

Enforces that the entry starts with a specific prefix.

- **For \`text\` type.**
  - Example:
    \`\`\`xs
    input {
      text code filters=startsWith:ABC
    }
    \`\`\`

# prevent

Prevents the entry from containing a specific phrase (blacklist).

- **For \`text\` type.**
  - Example:
    \`\`\`xs
    input {
      text comment filters=prevent:spam
    }
    \`\`\`

# alphaOk

Allows only alphabetic characters (A-Z, a-z).

- **For \`text\` type.**
  - Example:
    \`\`\`xs
    input {
      text initials filters=alphaOk
    }
    \`\`\`

# digitOk

Allows only numeric characters (0-9).

- **For \`text\` type.**
  - Example:
    \`\`\`xs
    input {
      text pin filters=digitOk
    }
    \`\`\`

# ok

Allows only the specified characters (whitelist).

- **For \`text\` type.**
  - Example:
    \`\`\`xs
    input {
      text code filters=ok:ABC123
    }
    \`\`\`

# pattern

Validates the entry using a regular expression pattern. Optionally, a custom error message can be provided.

- **For \`text\` type.**
  - Example:
    \`\`\`xs
    input {
      text phone filters=pattern:^\\\\d{3}-\\\\d{3}-\\\\d{4}$
    }
    \`\`\`
  - Example:
    \`\`\`xs
    input {
      text phone filters=pattern:^\\\\d{3}-\\\\d{3}-\\\\d{4}$:Invalid phone number
    }
    \`\`\`

# minAlpha

Enforces a minimum number of alphabetic characters (A-Z, a-z).

- **For \`password\` type.**
  - Example:
    \`\`\`xs
    input {
      password pwd filters=minAlpha:2
    }
    \`\`\`

# minLowerAlpha

Enforces a minimum number of lowercase alphabetic characters (a-z).

- **For \`password\` type.**
  - Example:
    \`\`\`xs
    input {
      password pwd filters=minLowerAlpha:1
    }
    \`\`\`

# minUpperAlpha

Enforces a minimum number of uppercase alphabetic characters (A-Z).

- **For \`password\` type.**
  - Example:
    \`\`\`xs
    input {
      password pwd filters=minUpperAlpha:1
    }
    \`\`\`

# minDigit

Enforces a minimum number of numeric characters (0-9).

- **For \`password\` type.**
  - Example:
    \`\`\`xs
    input {
      password pwd filters=minDigit:1
    }
    \`\`\`

# minSymbol

Enforces a minimum number of symbol (punctuation) characters.

- **For \`password\` type.**
  - Example:
    \`\`\`xs
    input {
      password pwd filters=minSymbol:1
    }
    \`\`\`

# Other Types

The following input types do not have specific filters:

- \`blob\`
- \`blob_img\`
- \`blob_video\`
- \`blob_audio\`
- \`enum\`
- \`file\`
- \`json\`
- \`obj\`
- \`epochms\`

These types currently do not support input filters.
`;var Hg=class extends Wr{static{r(this,"InputVariableMessageProvider")}constructor(){super()}isMatch(t,n,o){let i=n[t];return t>2&&n[t-2].image==="$input"&&n[t-1].image==="."&&i.tokenType.name==="Identifier"}renderUndefined(t){return["**Error**: This input is not defined.","Add a definition for it in your `input` clause.","```xs","input {","  text? "+t,"}","```"].join(`
`)}render(t,n,o){let i=n[t].image,a=o.__symbolTable.input[i];if(a){let s=a.iterable?`[${a.type},...]`:`${a.type}`,c=[`input **${i}** of type \`${s}\` `];return a.nullable&&c.push(`- ${i} is _nullable_ (\`${a.type}?\`)`),a.optional&&c.push(`- ${i} is _optional_ (\`${i}?\`)`),c.join(`

`)}else return this.renderUndefined(i)}};function JF(e,t,n=[]){let o=t.get(e.textDocument.uri);if(!o)return console.error("onHover(): Document not found for URI:",e.textDocument.uri),null;let i=o.getText(),a=o.offsetAt(e.position),s=Po(i);if(s.errors.length>0)return null;let c=hn(i),u=Vg(i,c),p=s.tokens,g=p.findIndex(A=>A.startOffset<=a&&A.endOffset>=a);if(g===-1)return null;let S=n.find(A=>A.isMatch(g,p,u));return S?{contents:{kind:"markdown",value:S.render(g,p,u)},range:{start:o.positionAt(p[g].startOffset),end:o.positionAt(p[g].endOffset+1)}}:null}r(JF,"onHoverDocument");var Yg=class extends Wr{static{r(this,"QueryFilterMessageProvider")}constructor(t){super(),this.parseFilters(t)}parseFilters(t){this.__filterDoc={};let n=[],o="";for(let i of t.split(`
`))i.startsWith("#")?(o&&(this.__filterDoc[o]=n.join(`
`).trim()),o=i.slice(2).trim(),n=[]):n.push(i);o&&n.length&&(this.__filterDoc[o]=n.join(`
`).trim())}findFilter(t,n){let o=n[t];if(!(o.tokenType.name==="Identifier"||o.tokenType.LONGER_ALT&&o.tokenType.LONGER_ALT.name==="Identifier"||o.tokenType.CATEGORIES&&o.tokenType.CATEGORIES.some(s=>s.name==="Identifier")))return null;let a=o.image;return this.__filterDoc[a]?a:null}isMatch(t,n,o){if(t===0||!(n[t-1].image==="|"))return!1;for(let s=t-2;s>=0;s--){let c=n[s];if(c.image==="where"&&s+1<n.length&&n[s+1].image==="=")return!!this.findFilter(t,n);if(c.image==="{"||c.image==="}"||c.image===`
`||c.image==="query")break}return!1}render(t,n){let o=this.findFilter(t,n);if(o)return this.__filterDoc[o]}};var QF=`# covers

Determines if one geometry covers another.

\`\`\`xs
$db.location.geometry|covers:$input.target_geometry
\`\`\`

Returns \`true\` if the geometry covers the target geometry, \`false\` otherwise.

# l1_distance_manhattan

Provides the L1 (Manhattan) distance between two vectors.

\`\`\`xs
$db.embedding.vector|l1_distance_manhattan:$input.query_vector
\`\`\`

Calculates the Manhattan distance between two numeric arrays.

# l2_distance_euclidean

Provides the L2 (Euclidean) distance between two vectors.

\`\`\`xs
$db.embedding.vector|l2_distance_euclidean:$input.query_vector
\`\`\`

Calculates the Euclidean distance between two numeric arrays.

# inner_product

Provides the inner product between two vectors.

\`\`\`xs
$db.embedding.vector|inner_product:$input.query_vector
\`\`\`

Calculates the dot product between two numeric arrays.

# negative_inner_product

Provides the negative inner product between two vectors.

\`\`\`xs
$db.embedding.vector|negative_inner_product:$input.query_vector
\`\`\`

Calculates the negative dot product between two numeric arrays.

# cosine_distance

Provides the cosine distance between two vectors.

\`\`\`xs
$db.embedding.vector|cosine_distance:$input.query_vector
\`\`\`

Calculates the cosine distance (1 - cosine similarity) between two numeric arrays.

# cosine_similarity

Provides the cosine similarity between two vectors.

\`\`\`xs
$db.embedding.vector|cosine_similarity:$input.query_vector
\`\`\`

Calculates the cosine similarity between two numeric arrays.

# distance

Provides the distance in meters between two geometries.

\`\`\`xs
$db.location.geometry|distance:$input.target_geometry
\`\`\`

Returns the distance between two geometric objects in meters.

# within

Determines if one geometry is within the supplied radius of another geometry.

\`\`\`xs
$db.location.geometry|within:$input.target_geometry:1000
\`\`\`

Returns \`true\` if the geometry is within 1000 meters of the target geometry.

# between

Determines if a value is between 2 other values.

\`\`\`xs
$db.product.price|between:10:100
\`\`\`

Returns \`true\` if the price is between 10 and 100, inclusive.

# length

Returns the number of items in an array.

\`\`\`xs
$db.user.tags|length
\`\`\`

If tags contains \`["admin", "user", "guest"]\`, the result will be: \`3\`

# floor

Rounds fractions down to their integer equivalent.

\`\`\`xs
$db.bank_account.balance|floor
\`\`\`

If the balance is \`123.45\`, the result will be: \`123\`

# ceil

Rounds fractions up to their integer equivalent.

\`\`\`xs
$db.bank_account.balance|ceil
\`\`\`

If the balance is \`123.45\`, the result will be: \`124\`

# round

Rounds the value to the specified precision. If no precision is specified, it defaults to \`2\`.

\`\`\`xs
$db.bank_account.balance|round:1
\`\`\`

If the balance is \`123.45\`, the result will be: \`123.5\`

# to_lower

Converts all characters to lower case and returns the result.

\`\`\`xs
$db.user.name|to_lower
\`\`\`

If name is \`"John DOE"\`, the result will be: \`"john doe"\`

# to_upper

Converts all characters to upper case and returns the result.

\`\`\`xs
$db.user.name|to_upper
\`\`\`

If name is \`"John Doe"\`, the result will be: \`"JOHN DOE"\`

# concat

Concatenates two values together.

\`\`\`xs
$db.user.first_name|concat:" "|concat:db.user.last_name
\`\`\`

If first_name is \`"John"\` and last_name is \`"Doe"\`, the result will be: \`"John Doe"\`

# substr

Extracts a section of text.

\`\`\`xs
$db.user.email|substr:0:5
\`\`\`

If email is \`"john@example.com"\`, the result will be: \`"john@"\`

# coalesce

Provides an alternative value for null values.

\`\`\`xs
$db.user.nickname|coalesce:db.user.first_name
\`\`\`

If nickname is \`null\` and first_name is \`"John"\`, the result will be: \`"John"\`

# unaccent

Removes accents (eg \xE9 \u2192 e, \xF1 \u2192 n, \xF6 \u2192 o) from characters.

\`\`\`xs
$db.user.name|unaccent
\`\`\`

If name is \`"Jos\xE9 Mar\xEDa"\`, the result will be: \`"Jose Maria"\`

# add

Adds 2 values together and returns the answer.

\`\`\`xs
$db.product.price|add:5.99
\`\`\`

If price is \`10.00\`, the result will be: \`15.99\`

# sub

Subtracts 2 values together and returns the answer.

\`\`\`xs
$db.product.price|sub:2.50
\`\`\`

If price is \`10.00\`, the result will be: \`7.50\`

# mul

Multiplies 2 values together and returns the answer.

\`\`\`xs
$db.product.price|mul:1.2
\`\`\`

If price is \`10.00\`, the result will be: \`12.00\`

# div

Divides 2 values together and returns the answer.

\`\`\`xs
$db.product.price|div:2
\`\`\`

If price is \`10.00\`, the result will be: \`5.00\`

# search_rank

Calculate a ranking value for the search match.

\`\`\`xs
$db.article.content|search_rank:$input.search_term
\`\`\`

Returns a decimal value representing the relevance ranking of the search match.

# timestamp_month

Get month from timestamp.

\`\`\`xs
$db.event.created_at|timestamp_month
\`\`\`

Returns the month (1-12) from the timestamp. Optional timezone parameter defaults to UTC.

# timestamp_year

Get year from timestamp.

\`\`\`xs
$db.event.created_at|timestamp_year:"EST"
\`\`\`

Returns the year from the timestamp. Optional timezone parameter defaults to UTC.

# timestamp_week

Get week from timestamp.

\`\`\`xs
$db.event.created_at|timestamp_week
\`\`\`

Returns the week number (1-53) from the timestamp. Optional timezone parameter defaults to UTC.

# timestamp_hour

Get hour from timestamp.

\`\`\`xs
$db.event.created_at|timestamp_hour
\`\`\`

Returns the hour (0-23) from the timestamp. Optional timezone parameter defaults to UTC.

# timestamp_minute

Get minute from timestamp.

\`\`\`xs
$db.event.created_at|timestamp_minute
\`\`\`

Returns the minute (0-59) from the timestamp. Optional timezone parameter defaults to UTC.

# timestamp_day_of_month

Get day of month from timestamp.

\`\`\`xs
$db.event.created_at|timestamp_day_of_month
\`\`\`

Returns the day of the month (1-31) from the timestamp. Optional timezone parameter defaults to UTC.

# timestamp_day_of_week

Get day of week from timestamp.

\`\`\`xs
$db.event.created_at|timestamp_day_of_week
\`\`\`

Returns the day of the week (0-6, where 0 is Sunday) from the timestamp. Optional timezone parameter defaults to UTC.

# timestamp_day_of_year

Get day of year from timestamp.

\`\`\`xs
$db.event.created_at|timestamp_day_of_year
\`\`\`

Returns the day of the year (1-366) from the timestamp. Optional timezone parameter defaults to UTC.

# timestamp_epoch_day

Get the number of days since the unix epoch.

\`\`\`xs
$db.event.created_at|timestamp_epoch_day
\`\`\`

Returns the number of days since January 1, 1970.

# timestamp_epoch_hour

Get the number of hours since the unix epoch.

\`\`\`xs
$db.event.created_at|timestamp_epoch_hour
\`\`\`

Returns the number of hours since January 1, 1970.

# timestamp_epoch_minute

Get the number of minutes since the unix epoch.

\`\`\`xs
$db.event.created_at|timestamp_epoch_minute
\`\`\`

Returns the number of minutes since January 1, 1970.

# timestamp_epoch_sec

Get the number of seconds since the unix epoch.

\`\`\`xs
$db.event.created_at|timestamp_epoch_sec
\`\`\`

Returns the number of seconds since January 1, 1970.

# timestamp_add_seconds

Add a number of seconds to the timestamp.

\`\`\`xs
$db.event.created_at|timestamp_add_seconds:30
\`\`\`

Adds 30 seconds to the timestamp. Defaults to adding 1 second if no amount is specified.

# timestamp_subtract_seconds

Subtract a number of seconds from the timestamp.

\`\`\`xs
$db.event.created_at|timestamp_subtract_seconds:30
\`\`\`

Subtracts 30 seconds from the timestamp. Defaults to subtracting 1 second if no amount is specified.

# timestamp_add_minutes

Add a number of minutes to the timestamp.

\`\`\`xs
$db.event.created_at|timestamp_add_minutes:15
\`\`\`

Adds 15 minutes to the timestamp. Defaults to adding 1 minute if no amount is specified.

# timestamp_subtract_minutes

Subtract a number of minutes from the timestamp.

\`\`\`xs
$db.event.created_at|timestamp_subtract_minutes:15
\`\`\`

Subtracts 15 minutes from the timestamp. Defaults to subtracting 1 minute if no amount is specified.

# timestamp_add_hours

Add a number of hours to the timestamp.

\`\`\`xs
$db.event.created_at|timestamp_add_hours:2
\`\`\`

Adds 2 hours to the timestamp. Defaults to adding 1 hour if no amount is specified.

# timestamp_subtract_hours

Subtract a number of hours from the timestamp.

\`\`\`xs
$db.event.created_at|timestamp_subtract_hours:2
\`\`\`

Subtracts 2 hours from the timestamp. Defaults to subtracting 1 hour if no amount is specified.

# timestamp_add_days

Add a number of days to the timestamp.

\`\`\`xs
$db.event.created_at|timestamp_add_days:7
\`\`\`

Adds 7 days to the timestamp. Defaults to adding 1 day if no amount is specified.

# timestamp_subtract_days

Subtract a number of days from the timestamp.

\`\`\`xs
$db.event.created_at|timestamp_subtract_days:7
\`\`\`

Subtracts 7 days from the timestamp. Defaults to subtracting 1 day if no amount is specified.

# timestamp_add_months

Add a number of months to the timestamp.

\`\`\`xs
$db.event.created_at|timestamp_add_months:3
\`\`\`

Adds 3 months to the timestamp. Defaults to adding 1 month if no amount is specified.

# timestamp_subtract_months

Subtract a number of months from the timestamp.

\`\`\`xs
$db.event.created_at|timestamp_subtract_months:3
\`\`\`

Subtracts 3 months from the timestamp. Defaults to subtracting 1 month if no amount is specified.

# timestamp_add_years

Add a number of years to the timestamp.

\`\`\`xs
$db.event.created_at|timestamp_add_years:1
\`\`\`

Adds 1 year to the timestamp. Defaults to adding 1 year if no amount is specified.

# timestamp_subtract_years

Subtract a number of years from the timestamp.

\`\`\`xs
$db.event.created_at|timestamp_subtract_years:1
\`\`\`

Subtracts 1 year from the timestamp. Defaults to subtracting 1 year if no amount is specified.
`;var QW=[new Hg,new Wg(YF),new zg(KF),new us(HF),new Yg(QF)];function XF(e,t){let n=t.get(e.textDocument.uri);if(!n)return null;let o=n.getText(),i=n.offsetAt(e.position);return eu(i,o)?null:JF(e,t,QW)}r(XF,"onHover");function ZF(e,t,n){return XW(t,n)}r(ZF,"higlightText");function XW(e,t){let n=new t;return Po(e,!0).tokens.forEach(i=>{let a=Bg(i.tokenType.name);if(a){let s=i.startLine-1,c=i.startColumn-1;n.push(s,c,i.image.length,Oc(a),0)}else a===void 0&&console.log(`token type not mapped to a type: ${JSON.stringify(i.tokenType.name)}`)}),n.build()}r(XW,"higlightDefault");function $F(e,t,n){let o=t.get(e.textDocument.uri);if(!o)return console.error("onSemanticCheck(): Document not found for URI:",e.textDocument.uri),null;let i=o.getText(),a=hn(i);return ZF(a,i,n)}r($F,"onSemanticCheck");var Wn=(0,qo.createConnection)(qo.ProposedFeatures.all),ds=new qo.TextDocuments($l);Wn.onInitialize(()=>(Wn.console.log("XanoScript Language Server initialized"),{capabilities:{completionProvider:{resolveProvider:!1,triggerCharacters:[".",":","$","|"]},textDocumentSync:1,semanticTokensProvider:{documentSelector:[{language:"xanoscript"}],legend:{tokenTypes:PS,tokenModifiers:[]},full:!0},hoverProvider:!0}}));Wn.onHover(e=>XF(e,ds));Wn.onCompletion(e=>WF(e,ds));Wn.onRequest("textDocument/semanticTokens/full",e=>$F(e,ds,qo.SemanticTokensBuilder));ds.onDidChangeContent(e=>zF(e,Wn));Wn.onDidOpenTextDocument(e=>{console.log("Document opened:",e.textDocument.uri)});ds.listen(Wn);Wn.listen();0&&(module.exports={documents});
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
