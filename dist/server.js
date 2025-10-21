"use strict";var sI=Object.create;var hs=Object.defineProperty;var cI=Object.getOwnPropertyDescriptor;var lI=Object.getOwnPropertyNames;var uI=Object.getPrototypeOf,dI=Object.prototype.hasOwnProperty;var r=(e,t)=>hs(e,"name",{value:t,configurable:!0});var K=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),fI=(e,t)=>{for(var n in t)hs(e,n,{get:t[n],enumerable:!0})},KS=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of lI(t))!dI.call(e,i)&&i!==n&&hs(e,i,{get:()=>t[i],enumerable:!(o=cI(t,i))||o.enumerable});return e};var pI=(e,t,n)=>(n=e!=null?sI(uI(e)):{},KS(t||!e||!e.__esModule?hs(n,"default",{value:e,enumerable:!0}):n,e)),mI=e=>KS(hs({},"__esModule",{value:!0}),e);var Fc=K(kt=>{"use strict";Object.defineProperty(kt,"__esModule",{value:!0});kt.thenable=kt.typedArray=kt.stringArray=kt.array=kt.func=kt.error=kt.number=kt.string=kt.boolean=void 0;function hI(e){return e===!0||e===!1}r(hI,"boolean");kt.boolean=hI;function JS(e){return typeof e=="string"||e instanceof String}r(JS,"string");kt.string=JS;function gI(e){return typeof e=="number"||e instanceof Number}r(gI,"number");kt.number=gI;function TI(e){return e instanceof Error}r(TI,"error");kt.error=TI;function QS(e){return typeof e=="function"}r(QS,"func");kt.func=QS;function XS(e){return Array.isArray(e)}r(XS,"array");kt.array=XS;function EI(e){return XS(e)&&e.every(t=>JS(t))}r(EI,"stringArray");kt.stringArray=EI;function SI(e,t){return Array.isArray(e)&&e.every(t)}r(SI,"typedArray");kt.typedArray=SI;function yI(e){return e&&QS(e.then)}r(yI,"thenable");kt.thenable=yI});var di=K(Jt=>{"use strict";Object.defineProperty(Jt,"__esModule",{value:!0});Jt.stringArray=Jt.array=Jt.func=Jt.error=Jt.number=Jt.string=Jt.boolean=void 0;function _I(e){return e===!0||e===!1}r(_I,"boolean");Jt.boolean=_I;function ZS(e){return typeof e=="string"||e instanceof String}r(ZS,"string");Jt.string=ZS;function bI(e){return typeof e=="number"||e instanceof Number}r(bI,"number");Jt.number=bI;function RI(e){return e instanceof Error}r(RI,"error");Jt.error=RI;function kI(e){return typeof e=="function"}r(kI,"func");Jt.func=kI;function $S(e){return Array.isArray(e)}r($S,"array");Jt.array=$S;function xI(e){return $S(e)&&e.every(t=>ZS(t))}r(xI,"stringArray");Jt.stringArray=xI});var hT=K(te=>{"use strict";Object.defineProperty(te,"__esModule",{value:!0});te.Message=te.NotificationType9=te.NotificationType8=te.NotificationType7=te.NotificationType6=te.NotificationType5=te.NotificationType4=te.NotificationType3=te.NotificationType2=te.NotificationType1=te.NotificationType0=te.NotificationType=te.RequestType9=te.RequestType8=te.RequestType7=te.RequestType6=te.RequestType5=te.RequestType4=te.RequestType3=te.RequestType2=te.RequestType1=te.RequestType=te.RequestType0=te.AbstractMessageSignature=te.ParameterStructures=te.ResponseError=te.ErrorCodes=void 0;var Vo=di(),zg;(function(e){e.ParseError=-32700,e.InvalidRequest=-32600,e.MethodNotFound=-32601,e.InvalidParams=-32602,e.InternalError=-32603,e.jsonrpcReservedErrorRangeStart=-32099,e.serverErrorStart=-32099,e.MessageWriteError=-32099,e.MessageReadError=-32098,e.PendingResponseRejected=-32097,e.ConnectionInactive=-32096,e.ServerNotInitialized=-32002,e.UnknownErrorCode=-32001,e.jsonrpcReservedErrorRangeEnd=-32e3,e.serverErrorEnd=-32e3})(zg||(te.ErrorCodes=zg={}));var Hg=class e extends Error{static{r(this,"ResponseError")}constructor(t,n,o){super(n),this.code=Vo.number(t)?t:zg.UnknownErrorCode,this.data=o,Object.setPrototypeOf(this,e.prototype)}toJson(){let t={code:this.code,message:this.message};return this.data!==void 0&&(t.data=this.data),t}};te.ResponseError=Hg;var hr=class e{static{r(this,"ParameterStructures")}constructor(t){this.kind=t}static is(t){return t===e.auto||t===e.byName||t===e.byPosition}toString(){return this.kind}};te.ParameterStructures=hr;hr.auto=new hr("auto");hr.byPosition=new hr("byPosition");hr.byName=new hr("byName");var je=class{static{r(this,"AbstractMessageSignature")}constructor(t,n){this.method=t,this.numberOfParams=n}get parameterStructures(){return hr.auto}};te.AbstractMessageSignature=je;var Yg=class extends je{static{r(this,"RequestType0")}constructor(t){super(t,0)}};te.RequestType0=Yg;var Kg=class extends je{static{r(this,"RequestType")}constructor(t,n=hr.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};te.RequestType=Kg;var Jg=class extends je{static{r(this,"RequestType1")}constructor(t,n=hr.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};te.RequestType1=Jg;var Qg=class extends je{static{r(this,"RequestType2")}constructor(t){super(t,2)}};te.RequestType2=Qg;var Xg=class extends je{static{r(this,"RequestType3")}constructor(t){super(t,3)}};te.RequestType3=Xg;var Zg=class extends je{static{r(this,"RequestType4")}constructor(t){super(t,4)}};te.RequestType4=Zg;var $g=class extends je{static{r(this,"RequestType5")}constructor(t){super(t,5)}};te.RequestType5=$g;var eT=class extends je{static{r(this,"RequestType6")}constructor(t){super(t,6)}};te.RequestType6=eT;var tT=class extends je{static{r(this,"RequestType7")}constructor(t){super(t,7)}};te.RequestType7=tT;var rT=class extends je{static{r(this,"RequestType8")}constructor(t){super(t,8)}};te.RequestType8=rT;var nT=class extends je{static{r(this,"RequestType9")}constructor(t){super(t,9)}};te.RequestType9=nT;var oT=class extends je{static{r(this,"NotificationType")}constructor(t,n=hr.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};te.NotificationType=oT;var iT=class extends je{static{r(this,"NotificationType0")}constructor(t){super(t,0)}};te.NotificationType0=iT;var aT=class extends je{static{r(this,"NotificationType1")}constructor(t,n=hr.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};te.NotificationType1=aT;var sT=class extends je{static{r(this,"NotificationType2")}constructor(t){super(t,2)}};te.NotificationType2=sT;var cT=class extends je{static{r(this,"NotificationType3")}constructor(t){super(t,3)}};te.NotificationType3=cT;var lT=class extends je{static{r(this,"NotificationType4")}constructor(t){super(t,4)}};te.NotificationType4=lT;var uT=class extends je{static{r(this,"NotificationType5")}constructor(t){super(t,5)}};te.NotificationType5=uT;var dT=class extends je{static{r(this,"NotificationType6")}constructor(t){super(t,6)}};te.NotificationType6=dT;var fT=class extends je{static{r(this,"NotificationType7")}constructor(t){super(t,7)}};te.NotificationType7=fT;var pT=class extends je{static{r(this,"NotificationType8")}constructor(t){super(t,8)}};te.NotificationType8=pT;var mT=class extends je{static{r(this,"NotificationType9")}constructor(t){super(t,9)}};te.NotificationType9=mT;var ey;(function(e){function t(i){let a=i;return a&&Vo.string(a.method)&&(Vo.string(a.id)||Vo.number(a.id))}r(t,"isRequest"),e.isRequest=t;function n(i){let a=i;return a&&Vo.string(a.method)&&i.id===void 0}r(n,"isNotification"),e.isNotification=n;function o(i){let a=i;return a&&(a.result!==void 0||!!a.error)&&(Vo.string(a.id)||Vo.number(a.id)||a.id===null)}r(o,"isResponse"),e.isResponse=o})(ey||(te.Message=ey={}))});var TT=K(Jn=>{"use strict";var ty;Object.defineProperty(Jn,"__esModule",{value:!0});Jn.LRUCache=Jn.LinkedMap=Jn.Touch=void 0;var Qt;(function(e){e.None=0,e.First=1,e.AsOld=e.First,e.Last=2,e.AsNew=e.Last})(Qt||(Jn.Touch=Qt={}));var Ic=class{static{r(this,"LinkedMap")}constructor(){this[ty]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(t){return this._map.has(t)}get(t,n=Qt.None){let o=this._map.get(t);if(o)return n!==Qt.None&&this.touch(o,n),o.value}set(t,n,o=Qt.None){let i=this._map.get(t);if(i)i.value=n,o!==Qt.None&&this.touch(i,o);else{switch(i={key:t,value:n,next:void 0,previous:void 0},o){case Qt.None:this.addItemLast(i);break;case Qt.First:this.addItemFirst(i);break;case Qt.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(t,i),this._size++}return this}delete(t){return!!this.remove(t)}remove(t){let n=this._map.get(t);if(n)return this._map.delete(t),this.removeItem(n),this._size--,n.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let t=this._head;return this._map.delete(t.key),this.removeItem(t),this._size--,t.value}forEach(t,n){let o=this._state,i=this._head;for(;i;){if(n?t.bind(n)(i.value,i.key,this):t(i.value,i.key,this),this._state!==o)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let t=this._state,n=this._head,o={[Symbol.iterator]:()=>o,next:r(()=>{if(this._state!==t)throw new Error("LinkedMap got modified during iteration.");if(n){let i={value:n.key,done:!1};return n=n.next,i}else return{value:void 0,done:!0}},"next")};return o}values(){let t=this._state,n=this._head,o={[Symbol.iterator]:()=>o,next:r(()=>{if(this._state!==t)throw new Error("LinkedMap got modified during iteration.");if(n){let i={value:n.value,done:!1};return n=n.next,i}else return{value:void 0,done:!0}},"next")};return o}entries(){let t=this._state,n=this._head,o={[Symbol.iterator]:()=>o,next:r(()=>{if(this._state!==t)throw new Error("LinkedMap got modified during iteration.");if(n){let i={value:[n.key,n.value],done:!1};return n=n.next,i}else return{value:void 0,done:!0}},"next")};return o}[(ty=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(t){if(t>=this.size)return;if(t===0){this.clear();return}let n=this._head,o=this.size;for(;n&&o>t;)this._map.delete(n.key),n=n.next,o--;this._head=n,this._size=o,n&&(n.previous=void 0),this._state++}addItemFirst(t){if(!this._head&&!this._tail)this._tail=t;else if(this._head)t.next=this._head,this._head.previous=t;else throw new Error("Invalid list");this._head=t,this._state++}addItemLast(t){if(!this._head&&!this._tail)this._head=t;else if(this._tail)t.previous=this._tail,this._tail.next=t;else throw new Error("Invalid list");this._tail=t,this._state++}removeItem(t){if(t===this._head&&t===this._tail)this._head=void 0,this._tail=void 0;else if(t===this._head){if(!t.next)throw new Error("Invalid list");t.next.previous=void 0,this._head=t.next}else if(t===this._tail){if(!t.previous)throw new Error("Invalid list");t.previous.next=void 0,this._tail=t.previous}else{let n=t.next,o=t.previous;if(!n||!o)throw new Error("Invalid list");n.previous=o,o.next=n}t.next=void 0,t.previous=void 0,this._state++}touch(t,n){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(n!==Qt.First&&n!==Qt.Last)){if(n===Qt.First){if(t===this._head)return;let o=t.next,i=t.previous;t===this._tail?(i.next=void 0,this._tail=i):(o.previous=i,i.next=o),t.previous=void 0,t.next=this._head,this._head.previous=t,this._head=t,this._state++}else if(n===Qt.Last){if(t===this._tail)return;let o=t.next,i=t.previous;t===this._head?(o.previous=void 0,this._head=o):(o.previous=i,i.next=o),t.next=void 0,t.previous=this._tail,this._tail.next=t,this._tail=t,this._state++}}}toJSON(){let t=[];return this.forEach((n,o)=>{t.push([o,n])}),t}fromJSON(t){this.clear();for(let[n,o]of t)this.set(n,o)}};Jn.LinkedMap=Ic;var gT=class extends Ic{static{r(this,"LRUCache")}constructor(t,n=1){super(),this._limit=t,this._ratio=Math.min(Math.max(0,n),1)}get limit(){return this._limit}set limit(t){this._limit=t,this.checkTrim()}get ratio(){return this._ratio}set ratio(t){this._ratio=Math.min(Math.max(0,t),1),this.checkTrim()}get(t,n=Qt.AsNew){return super.get(t,n)}peek(t){return super.get(t,Qt.None)}set(t,n){return super.set(t,n,Qt.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};Jn.LRUCache=gT});var ny=K(Pc=>{"use strict";Object.defineProperty(Pc,"__esModule",{value:!0});Pc.Disposable=void 0;var ry;(function(e){function t(n){return{dispose:n}}r(t,"create"),e.create=t})(ry||(Pc.Disposable=ry={}))});var Qn=K(yT=>{"use strict";Object.defineProperty(yT,"__esModule",{value:!0});var ET;function ST(){if(ET===void 0)throw new Error("No runtime abstraction layer installed");return ET}r(ST,"RAL");(function(e){function t(n){if(n===void 0)throw new Error("No runtime abstraction layer provided");ET=n}r(t,"install"),e.install=t})(ST||(ST={}));yT.default=ST});var pi=K(fi=>{"use strict";Object.defineProperty(fi,"__esModule",{value:!0});fi.Emitter=fi.Event=void 0;var AI=Qn(),oy;(function(e){let t={dispose(){}};e.None=function(){return t}})(oy||(fi.Event=oy={}));var _T=class{static{r(this,"CallbackList")}add(t,n=null,o){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(t),this._contexts.push(n),Array.isArray(o)&&o.push({dispose:r(()=>this.remove(t,n),"dispose")})}remove(t,n=null){if(!this._callbacks)return;let o=!1;for(let i=0,a=this._callbacks.length;i<a;i++)if(this._callbacks[i]===t)if(this._contexts[i]===n){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else o=!0;if(o)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...t){if(!this._callbacks)return[];let n=[],o=this._callbacks.slice(0),i=this._contexts.slice(0);for(let a=0,s=o.length;a<s;a++)try{n.push(o[a].apply(i[a],t))}catch(c){(0,AI.default)().console.error(c)}return n}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},Dc=class e{static{r(this,"Emitter")}constructor(t){this._options=t}get event(){return this._event||(this._event=(t,n,o)=>{this._callbacks||(this._callbacks=new _T),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(t,n);let i={dispose:r(()=>{this._callbacks&&(this._callbacks.remove(t,n),i.dispose=e._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))},"dispose")};return Array.isArray(o)&&o.push(i),i}),this._event}fire(t){this._callbacks&&this._callbacks.invoke.call(this._callbacks,t)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};fi.Emitter=Dc;Dc._noop=function(){}});var Gc=K(mi=>{"use strict";Object.defineProperty(mi,"__esModule",{value:!0});mi.CancellationTokenSource=mi.CancellationToken=void 0;var vI=Qn(),UI=di(),bT=pi(),Bc;(function(e){e.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:bT.Event.None}),e.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:bT.Event.None});function t(n){let o=n;return o&&(o===e.None||o===e.Cancelled||UI.boolean(o.isCancellationRequested)&&!!o.onCancellationRequested)}r(t,"is"),e.is=t})(Bc||(mi.CancellationToken=Bc={}));var CI=Object.freeze(function(e,t){let n=(0,vI.default)().timer.setTimeout(e.bind(t),0);return{dispose(){n.dispose()}}}),qc=class{static{r(this,"MutableToken")}constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?CI:(this._emitter||(this._emitter=new bT.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},RT=class{static{r(this,"CancellationTokenSource")}get token(){return this._token||(this._token=new qc),this._token}cancel(){this._token?this._token.cancel():this._token=Bc.Cancelled}dispose(){this._token?this._token instanceof qc&&this._token.dispose():this._token=Bc.None}};mi.CancellationTokenSource=RT});var iy=K(hi=>{"use strict";Object.defineProperty(hi,"__esModule",{value:!0});hi.SharedArrayReceiverStrategy=hi.SharedArraySenderStrategy=void 0;var LI=Gc(),gs;(function(e){e.Continue=0,e.Cancelled=1})(gs||(gs={}));var kT=class{static{r(this,"SharedArraySenderStrategy")}constructor(){this.buffers=new Map}enableCancellation(t){if(t.id===null)return;let n=new SharedArrayBuffer(4),o=new Int32Array(n,0,1);o[0]=gs.Continue,this.buffers.set(t.id,n),t.$cancellationData=n}async sendCancellation(t,n){let o=this.buffers.get(n);if(o===void 0)return;let i=new Int32Array(o,0,1);Atomics.store(i,0,gs.Cancelled)}cleanup(t){this.buffers.delete(t)}dispose(){this.buffers.clear()}};hi.SharedArraySenderStrategy=kT;var xT=class{static{r(this,"SharedArrayBufferCancellationToken")}constructor(t){this.data=new Int32Array(t,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===gs.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},AT=class{static{r(this,"SharedArrayBufferCancellationTokenSource")}constructor(t){this.token=new xT(t)}cancel(){}dispose(){}},vT=class{static{r(this,"SharedArrayReceiverStrategy")}constructor(){this.kind="request"}createCancellationTokenSource(t){let n=t.$cancellationData;return n===void 0?new LI.CancellationTokenSource:new AT(n)}};hi.SharedArrayReceiverStrategy=vT});var CT=K(jc=>{"use strict";Object.defineProperty(jc,"__esModule",{value:!0});jc.Semaphore=void 0;var OI=Qn(),UT=class{static{r(this,"Semaphore")}constructor(t=1){if(t<=0)throw new Error("Capacity must be greater than 0");this._capacity=t,this._active=0,this._waiting=[]}lock(t){return new Promise((n,o)=>{this._waiting.push({thunk:t,resolve:n,reject:o}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,OI.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let t=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let n=t.thunk();n instanceof Promise?n.then(o=>{this._active--,t.resolve(o),this.runNext()},o=>{this._active--,t.reject(o),this.runNext()}):(this._active--,t.resolve(n),this.runNext())}catch(n){this._active--,t.reject(n),this.runNext()}}};jc.Semaphore=UT});var sy=K(Xn=>{"use strict";Object.defineProperty(Xn,"__esModule",{value:!0});Xn.ReadableStreamMessageReader=Xn.AbstractMessageReader=Xn.MessageReader=void 0;var OT=Qn(),gi=di(),LT=pi(),NI=CT(),ay;(function(e){function t(n){let o=n;return o&&gi.func(o.listen)&&gi.func(o.dispose)&&gi.func(o.onError)&&gi.func(o.onClose)&&gi.func(o.onPartialMessage)}r(t,"is"),e.is=t})(ay||(Xn.MessageReader=ay={}));var Vc=class{static{r(this,"AbstractMessageReader")}constructor(){this.errorEmitter=new LT.Emitter,this.closeEmitter=new LT.Emitter,this.partialMessageEmitter=new LT.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(t){this.errorEmitter.fire(this.asError(t))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(t){this.partialMessageEmitter.fire(t)}asError(t){return t instanceof Error?t:new Error(`Reader received error. Reason: ${gi.string(t.message)?t.message:"unknown"}`)}};Xn.AbstractMessageReader=Vc;var NT;(function(e){function t(n){let o,i,a,s=new Map,c,u=new Map;if(n===void 0||typeof n=="string")o=n??"utf-8";else{if(o=n.charset??"utf-8",n.contentDecoder!==void 0&&(a=n.contentDecoder,s.set(a.name,a)),n.contentDecoders!==void 0)for(let p of n.contentDecoders)s.set(p.name,p);if(n.contentTypeDecoder!==void 0&&(c=n.contentTypeDecoder,u.set(c.name,c)),n.contentTypeDecoders!==void 0)for(let p of n.contentTypeDecoders)u.set(p.name,p)}return c===void 0&&(c=(0,OT.default)().applicationJson.decoder,u.set(c.name,c)),{charset:o,contentDecoder:a,contentDecoders:s,contentTypeDecoder:c,contentTypeDecoders:u}}r(t,"fromOptions"),e.fromOptions=t})(NT||(NT={}));var MT=class extends Vc{static{r(this,"ReadableStreamMessageReader")}constructor(t,n){super(),this.readable=t,this.options=NT.fromOptions(n),this.buffer=(0,OT.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new NI.Semaphore(1)}set partialMessageTimeout(t){this._partialMessageTimeout=t}get partialMessageTimeout(){return this._partialMessageTimeout}listen(t){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=t;let n=this.readable.onData(o=>{this.onData(o)});return this.readable.onError(o=>this.fireError(o)),this.readable.onClose(()=>this.fireClose()),n}onData(t){try{for(this.buffer.append(t);;){if(this.nextMessageLength===-1){let o=this.buffer.tryReadHeaders(!0);if(!o)return;let i=o.get("content-length");if(!i){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(o))}`));return}let a=parseInt(i);if(isNaN(a)){this.fireError(new Error(`Content-Length value must be a number. Got ${i}`));return}this.nextMessageLength=a}let n=this.buffer.tryReadBody(this.nextMessageLength);if(n===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let o=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(n):n,i=await this.options.contentTypeDecoder.decode(o,this.options);this.callback(i)}).catch(o=>{this.fireError(o)})}}catch(n){this.fireError(n)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,OT.default)().timer.setTimeout((t,n)=>{this.partialMessageTimer=void 0,t===this.messageToken&&(this.firePartialMessage({messageToken:t,waitingTime:n}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};Xn.ReadableStreamMessageReader=MT});var fy=K(Zn=>{"use strict";Object.defineProperty(Zn,"__esModule",{value:!0});Zn.WriteableStreamMessageWriter=Zn.AbstractMessageWriter=Zn.MessageWriter=void 0;var cy=Qn(),Ts=di(),MI=CT(),ly=pi(),wI="Content-Length: ",uy=`\r
`,dy;(function(e){function t(n){let o=n;return o&&Ts.func(o.dispose)&&Ts.func(o.onClose)&&Ts.func(o.onError)&&Ts.func(o.write)}r(t,"is"),e.is=t})(dy||(Zn.MessageWriter=dy={}));var Wc=class{static{r(this,"AbstractMessageWriter")}constructor(){this.errorEmitter=new ly.Emitter,this.closeEmitter=new ly.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(t,n,o){this.errorEmitter.fire([this.asError(t),n,o])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(t){return t instanceof Error?t:new Error(`Writer received error. Reason: ${Ts.string(t.message)?t.message:"unknown"}`)}};Zn.AbstractMessageWriter=Wc;var wT;(function(e){function t(n){return n===void 0||typeof n=="string"?{charset:n??"utf-8",contentTypeEncoder:(0,cy.default)().applicationJson.encoder}:{charset:n.charset??"utf-8",contentEncoder:n.contentEncoder,contentTypeEncoder:n.contentTypeEncoder??(0,cy.default)().applicationJson.encoder}}r(t,"fromOptions"),e.fromOptions=t})(wT||(wT={}));var FT=class extends Wc{static{r(this,"WriteableStreamMessageWriter")}constructor(t,n){super(),this.writable=t,this.options=wT.fromOptions(n),this.errorCount=0,this.writeSemaphore=new MI.Semaphore(1),this.writable.onError(o=>this.fireError(o)),this.writable.onClose(()=>this.fireClose())}async write(t){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(t,this.options).then(o=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(o):o).then(o=>{let i=[];return i.push(wI,o.byteLength.toString(),uy),i.push(uy),this.doWrite(t,i,o)},o=>{throw this.fireError(o),o}))}async doWrite(t,n,o){try{return await this.writable.write(n.join(""),"ascii"),this.writable.write(o)}catch(i){return this.handleError(i,t),Promise.reject(i)}}handleError(t,n){this.errorCount++,this.fireError(t,n,this.errorCount)}end(){this.writable.end()}};Zn.WriteableStreamMessageWriter=FT});var py=K(zc=>{"use strict";Object.defineProperty(zc,"__esModule",{value:!0});zc.AbstractMessageBuffer=void 0;var FI=13,II=10,PI=`\r
`,IT=class{static{r(this,"AbstractMessageBuffer")}constructor(t="utf-8"){this._encoding=t,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(t){let n=typeof t=="string"?this.fromString(t,this._encoding):t;this._chunks.push(n),this._totalLength+=n.byteLength}tryReadHeaders(t=!1){if(this._chunks.length===0)return;let n=0,o=0,i=0,a=0;e:for(;o<this._chunks.length;){let p=this._chunks[o];for(i=0;i<p.length;){switch(p[i]){case FI:switch(n){case 0:n=1;break;case 2:n=3;break;default:n=0}break;case II:switch(n){case 1:n=2;break;case 3:n=4,i++;break e;default:n=0}break;default:n=0}i++}a+=p.byteLength,o++}if(n!==4)return;let s=this._read(a+i),c=new Map,u=this.toString(s,"ascii").split(PI);if(u.length<2)return c;for(let p=0;p<u.length-2;p++){let g=u[p],S=g.indexOf(":");if(S===-1)throw new Error(`Message header must separate key and value using ':'
${g}`);let x=g.substr(0,S),L=g.substr(S+1).trim();c.set(t?x.toLowerCase():x,L)}return c}tryReadBody(t){if(!(this._totalLength<t))return this._read(t)}get numberOfBytes(){return this._totalLength}_read(t){if(t===0)return this.emptyBuffer();if(t>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===t){let a=this._chunks[0];return this._chunks.shift(),this._totalLength-=t,this.asNative(a)}if(this._chunks[0].byteLength>t){let a=this._chunks[0],s=this.asNative(a,t);return this._chunks[0]=a.slice(t),this._totalLength-=t,s}let n=this.allocNative(t),o=0,i=0;for(;t>0;){let a=this._chunks[i];if(a.byteLength>t){let s=a.slice(0,t);n.set(s,o),o+=t,this._chunks[i]=a.slice(t),this._totalLength-=t,t-=t}else n.set(a,o),o+=a.byteLength,this._chunks.shift(),this._totalLength-=a.byteLength,t-=a.byteLength}return n}};zc.AbstractMessageBuffer=IT});var Ey=K(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.createMessageConnection=ae.ConnectionOptions=ae.MessageStrategy=ae.CancellationStrategy=ae.CancellationSenderStrategy=ae.CancellationReceiverStrategy=ae.RequestCancellationReceiverStrategy=ae.IdCancellationReceiverStrategy=ae.ConnectionStrategy=ae.ConnectionError=ae.ConnectionErrors=ae.LogTraceNotification=ae.SetTraceNotification=ae.TraceFormat=ae.TraceValues=ae.Trace=ae.NullLogger=ae.ProgressType=ae.ProgressToken=void 0;var my=Qn(),$e=di(),ne=hT(),hy=TT(),Es=pi(),PT=Gc(),_s;(function(e){e.type=new ne.NotificationType("$/cancelRequest")})(_s||(_s={}));var DT;(function(e){function t(n){return typeof n=="string"||typeof n=="number"}r(t,"is"),e.is=t})(DT||(ae.ProgressToken=DT={}));var Ss;(function(e){e.type=new ne.NotificationType("$/progress")})(Ss||(Ss={}));var BT=class{static{r(this,"ProgressType")}constructor(){}};ae.ProgressType=BT;var qT;(function(e){function t(n){return $e.func(n)}r(t,"is"),e.is=t})(qT||(qT={}));ae.NullLogger=Object.freeze({error:r(()=>{},"error"),warn:r(()=>{},"warn"),info:r(()=>{},"info"),log:r(()=>{},"log")});var xe;(function(e){e[e.Off=0]="Off",e[e.Messages=1]="Messages",e[e.Compact=2]="Compact",e[e.Verbose=3]="Verbose"})(xe||(ae.Trace=xe={}));var gy;(function(e){e.Off="off",e.Messages="messages",e.Compact="compact",e.Verbose="verbose"})(gy||(ae.TraceValues=gy={}));(function(e){function t(o){if(!$e.string(o))return e.Off;switch(o=o.toLowerCase(),o){case"off":return e.Off;case"messages":return e.Messages;case"compact":return e.Compact;case"verbose":return e.Verbose;default:return e.Off}}r(t,"fromString"),e.fromString=t;function n(o){switch(o){case e.Off:return"off";case e.Messages:return"messages";case e.Compact:return"compact";case e.Verbose:return"verbose";default:return"off"}}r(n,"toString"),e.toString=n})(xe||(ae.Trace=xe={}));var Ar;(function(e){e.Text="text",e.JSON="json"})(Ar||(ae.TraceFormat=Ar={}));(function(e){function t(n){return $e.string(n)?(n=n.toLowerCase(),n==="json"?e.JSON:e.Text):e.Text}r(t,"fromString"),e.fromString=t})(Ar||(ae.TraceFormat=Ar={}));var GT;(function(e){e.type=new ne.NotificationType("$/setTrace")})(GT||(ae.SetTraceNotification=GT={}));var Hc;(function(e){e.type=new ne.NotificationType("$/logTrace")})(Hc||(ae.LogTraceNotification=Hc={}));var ys;(function(e){e[e.Closed=1]="Closed",e[e.Disposed=2]="Disposed",e[e.AlreadyListening=3]="AlreadyListening"})(ys||(ae.ConnectionErrors=ys={}));var Ti=class e extends Error{static{r(this,"ConnectionError")}constructor(t,n){super(n),this.code=t,Object.setPrototypeOf(this,e.prototype)}};ae.ConnectionError=Ti;var jT;(function(e){function t(n){let o=n;return o&&$e.func(o.cancelUndispatched)}r(t,"is"),e.is=t})(jT||(ae.ConnectionStrategy=jT={}));var Yc;(function(e){function t(n){let o=n;return o&&(o.kind===void 0||o.kind==="id")&&$e.func(o.createCancellationTokenSource)&&(o.dispose===void 0||$e.func(o.dispose))}r(t,"is"),e.is=t})(Yc||(ae.IdCancellationReceiverStrategy=Yc={}));var VT;(function(e){function t(n){let o=n;return o&&o.kind==="request"&&$e.func(o.createCancellationTokenSource)&&(o.dispose===void 0||$e.func(o.dispose))}r(t,"is"),e.is=t})(VT||(ae.RequestCancellationReceiverStrategy=VT={}));var Kc;(function(e){e.Message=Object.freeze({createCancellationTokenSource(n){return new PT.CancellationTokenSource}});function t(n){return Yc.is(n)||VT.is(n)}r(t,"is"),e.is=t})(Kc||(ae.CancellationReceiverStrategy=Kc={}));var Jc;(function(e){e.Message=Object.freeze({sendCancellation(n,o){return n.sendNotification(_s.type,{id:o})},cleanup(n){}});function t(n){let o=n;return o&&$e.func(o.sendCancellation)&&$e.func(o.cleanup)}r(t,"is"),e.is=t})(Jc||(ae.CancellationSenderStrategy=Jc={}));var Qc;(function(e){e.Message=Object.freeze({receiver:Kc.Message,sender:Jc.Message});function t(n){let o=n;return o&&Kc.is(o.receiver)&&Jc.is(o.sender)}r(t,"is"),e.is=t})(Qc||(ae.CancellationStrategy=Qc={}));var Xc;(function(e){function t(n){let o=n;return o&&$e.func(o.handleMessage)}r(t,"is"),e.is=t})(Xc||(ae.MessageStrategy=Xc={}));var Ty;(function(e){function t(n){let o=n;return o&&(Qc.is(o.cancellationStrategy)||jT.is(o.connectionStrategy)||Xc.is(o.messageStrategy))}r(t,"is"),e.is=t})(Ty||(ae.ConnectionOptions=Ty={}));var Qr;(function(e){e[e.New=1]="New",e[e.Listening=2]="Listening",e[e.Closed=3]="Closed",e[e.Disposed=4]="Disposed"})(Qr||(Qr={}));function DI(e,t,n,o){let i=n!==void 0?n:ae.NullLogger,a=0,s=0,c=0,u="2.0",p,g=new Map,S,x=new Map,L=new Map,G,P=new hy.LinkedMap,z=new Map,B=new Set,b=new Map,E=xe.Off,w=Ar.Text,V,le=Qr.New,Me=new Es.Emitter,at=new Es.Emitter,zr=new Es.Emitter,pr=new Es.Emitter,Gt=new Es.Emitter,bt=o&&o.cancellationStrategy?o.cancellationStrategy:Qc.Message;function Hn(_){if(_===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+_.toString()}r(Hn,"createRequestQueueKey");function sn(_){return _===null?"res-unknown-"+(++c).toString():"res-"+_.toString()}r(sn,"createResponseQueueKey");function Cn(){return"not-"+(++s).toString()}r(Cn,"createNotificationQueueKey");function Or(_,I){ne.Message.isRequest(I)?_.set(Hn(I.id),I):ne.Message.isResponse(I)?_.set(sn(I.id),I):_.set(Cn(),I)}r(Or,"addMessageToQueue");function cn(_){}r(cn,"cancelUndispatched");function ln(){return le===Qr.Listening}r(ln,"isListening");function un(){return le===Qr.Closed}r(un,"isClosed");function sr(){return le===Qr.Disposed}r(sr,"isDisposed");function Ln(){(le===Qr.New||le===Qr.Listening)&&(le=Qr.Closed,at.fire(void 0))}r(Ln,"closeHandler");function dn(_){Me.fire([_,void 0,void 0])}r(dn,"readErrorHandler");function si(_){Me.fire(_)}r(si,"writeErrorHandler"),e.onClose(Ln),e.onError(dn),t.onClose(Ln),t.onError(si);function Yn(){G||P.size===0||(G=(0,my.default)().timer.setImmediate(()=>{G=void 0,Go()}))}r(Yn,"triggerMessageQueue");function jt(_){ne.Message.isRequest(_)?Vt(_):ne.Message.isNotification(_)?It(_):ne.Message.isResponse(_)?Hr(_):Kt(_)}r(jt,"handleMessage");function Go(){if(P.size===0)return;let _=P.shift();try{let I=o?.messageStrategy;Xc.is(I)?I.handleMessage(_,jt):jt(_)}finally{Yn()}}r(Go,"processMessageQueue");let mt=r(_=>{try{if(ne.Message.isNotification(_)&&_.method===_s.type.method){let I=_.params.id,W=Hn(I),Z=P.get(W);if(ne.Message.isRequest(Z)){let ve=o?.connectionStrategy,Ge=ve&&ve.cancelUndispatched?ve.cancelUndispatched(Z,cn):void 0;if(Ge&&(Ge.error!==void 0||Ge.result!==void 0)){P.delete(W),b.delete(I),Ge.id=Z.id,Yr(Ge,_.method,Date.now()),t.write(Ge).catch(()=>i.error("Sending response for canceled message failed."));return}}let Ce=b.get(I);if(Ce!==void 0){Ce.cancel(),ci(_);return}else B.add(I)}Or(P,_)}finally{Yn()}},"callback");function Vt(_){if(sr())return;function I(fe,Oe,be){let st={jsonrpc:u,id:_.id};fe instanceof ne.ResponseError?st.error=fe.toJson():st.result=fe===void 0?null:fe,Yr(st,Oe,be),t.write(st).catch(()=>i.error("Sending response failed."))}r(I,"reply");function W(fe,Oe,be){let st={jsonrpc:u,id:_.id,error:fe.toJson()};Yr(st,Oe,be),t.write(st).catch(()=>i.error("Sending response failed."))}r(W,"replyError");function Z(fe,Oe,be){fe===void 0&&(fe=null);let st={jsonrpc:u,id:_.id,result:fe};Yr(st,Oe,be),t.write(st).catch(()=>i.error("Sending response failed."))}r(Z,"replySuccess"),jo(_);let Ce=g.get(_.method),ve,Ge;Ce&&(ve=Ce.type,Ge=Ce.handler);let Ye=Date.now();if(Ge||p){let fe=_.id??String(Date.now()),Oe=Yc.is(bt.receiver)?bt.receiver.createCancellationTokenSource(fe):bt.receiver.createCancellationTokenSource(_);_.id!==null&&B.has(_.id)&&Oe.cancel(),_.id!==null&&b.set(fe,Oe);try{let be;if(Ge)if(_.params===void 0){if(ve!==void 0&&ve.numberOfParams!==0){W(new ne.ResponseError(ne.ErrorCodes.InvalidParams,`Request ${_.method} defines ${ve.numberOfParams} params but received none.`),_.method,Ye);return}be=Ge(Oe.token)}else if(Array.isArray(_.params)){if(ve!==void 0&&ve.parameterStructures===ne.ParameterStructures.byName){W(new ne.ResponseError(ne.ErrorCodes.InvalidParams,`Request ${_.method} defines parameters by name but received parameters by position`),_.method,Ye);return}be=Ge(..._.params,Oe.token)}else{if(ve!==void 0&&ve.parameterStructures===ne.ParameterStructures.byPosition){W(new ne.ResponseError(ne.ErrorCodes.InvalidParams,`Request ${_.method} defines parameters by position but received parameters by name`),_.method,Ye);return}be=Ge(_.params,Oe.token)}else p&&(be=p(_.method,_.params,Oe.token));let st=be;be?st.then?st.then(Pt=>{b.delete(fe),I(Pt,_.method,Ye)},Pt=>{b.delete(fe),Pt instanceof ne.ResponseError?W(Pt,_.method,Ye):Pt&&$e.string(Pt.message)?W(new ne.ResponseError(ne.ErrorCodes.InternalError,`Request ${_.method} failed with message: ${Pt.message}`),_.method,Ye):W(new ne.ResponseError(ne.ErrorCodes.InternalError,`Request ${_.method} failed unexpectedly without providing any details.`),_.method,Ye)}):(b.delete(fe),I(be,_.method,Ye)):(b.delete(fe),Z(be,_.method,Ye))}catch(be){b.delete(fe),be instanceof ne.ResponseError?I(be,_.method,Ye):be&&$e.string(be.message)?W(new ne.ResponseError(ne.ErrorCodes.InternalError,`Request ${_.method} failed with message: ${be.message}`),_.method,Ye):W(new ne.ResponseError(ne.ErrorCodes.InternalError,`Request ${_.method} failed unexpectedly without providing any details.`),_.method,Ye)}}else W(new ne.ResponseError(ne.ErrorCodes.MethodNotFound,`Unhandled method ${_.method}`),_.method,Ye)}r(Vt,"handleRequest");function Hr(_){if(!sr())if(_.id===null)_.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(_.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let I=_.id,W=z.get(I);if(Lc(_,W),W!==void 0){z.delete(I);try{if(_.error){let Z=_.error;W.reject(new ne.ResponseError(Z.code,Z.message,Z.data))}else if(_.result!==void 0)W.resolve(_.result);else throw new Error("Should never happen.")}catch(Z){Z.message?i.error(`Response handler '${W.method}' failed with message: ${Z.message}`):i.error(`Response handler '${W.method}' failed unexpectedly.`)}}}}r(Hr,"handleResponse");function It(_){if(sr())return;let I,W;if(_.method===_s.type.method){let Z=_.params.id;B.delete(Z),ci(_);return}else{let Z=x.get(_.method);Z&&(W=Z.handler,I=Z.type)}if(W||S)try{if(ci(_),W)if(_.params===void 0)I!==void 0&&I.numberOfParams!==0&&I.parameterStructures!==ne.ParameterStructures.byName&&i.error(`Notification ${_.method} defines ${I.numberOfParams} params but received none.`),W();else if(Array.isArray(_.params)){let Z=_.params;_.method===Ss.type.method&&Z.length===2&&DT.is(Z[0])?W({token:Z[0],value:Z[1]}):(I!==void 0&&(I.parameterStructures===ne.ParameterStructures.byName&&i.error(`Notification ${_.method} defines parameters by name but received parameters by position`),I.numberOfParams!==_.params.length&&i.error(`Notification ${_.method} defines ${I.numberOfParams} params but received ${Z.length} arguments`)),W(...Z))}else I!==void 0&&I.parameterStructures===ne.ParameterStructures.byPosition&&i.error(`Notification ${_.method} defines parameters by position but received parameters by name`),W(_.params);else S&&S(_.method,_.params)}catch(Z){Z.message?i.error(`Notification handler '${_.method}' failed with message: ${Z.message}`):i.error(`Notification handler '${_.method}' failed unexpectedly.`)}else zr.fire(_)}r(It,"handleNotification");function Kt(_){if(!_){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(_,null,4)}`);let I=_;if($e.string(I.id)||$e.number(I.id)){let W=I.id,Z=z.get(W);Z&&Z.reject(new Error("The received response has neither a result nor an error property."))}}r(Kt,"handleInvalidMessage");function Rt(_){if(_!=null)switch(E){case xe.Verbose:return JSON.stringify(_,null,4);case xe.Compact:return JSON.stringify(_);default:return}}r(Rt,"stringifyTrace");function mr(_){if(!(E===xe.Off||!V))if(w===Ar.Text){let I;(E===xe.Verbose||E===xe.Compact)&&_.params&&(I=`Params: ${Rt(_.params)}

`),V.log(`Sending request '${_.method} - (${_.id})'.`,I)}else On("send-request",_)}r(mr,"traceSendingRequest");function Nr(_){if(!(E===xe.Off||!V))if(w===Ar.Text){let I;(E===xe.Verbose||E===xe.Compact)&&(_.params?I=`Params: ${Rt(_.params)}

`:I=`No parameters provided.

`),V.log(`Sending notification '${_.method}'.`,I)}else On("send-notification",_)}r(Nr,"traceSendingNotification");function Yr(_,I,W){if(!(E===xe.Off||!V))if(w===Ar.Text){let Z;(E===xe.Verbose||E===xe.Compact)&&(_.error&&_.error.data?Z=`Error data: ${Rt(_.error.data)}

`:_.result?Z=`Result: ${Rt(_.result)}

`:_.error===void 0&&(Z=`No result returned.

`)),V.log(`Sending response '${I} - (${_.id})'. Processing request took ${Date.now()-W}ms`,Z)}else On("send-response",_)}r(Yr,"traceSendingResponse");function jo(_){if(!(E===xe.Off||!V))if(w===Ar.Text){let I;(E===xe.Verbose||E===xe.Compact)&&_.params&&(I=`Params: ${Rt(_.params)}

`),V.log(`Received request '${_.method} - (${_.id})'.`,I)}else On("receive-request",_)}r(jo,"traceReceivedRequest");function ci(_){if(!(E===xe.Off||!V||_.method===Hc.type.method))if(w===Ar.Text){let I;(E===xe.Verbose||E===xe.Compact)&&(_.params?I=`Params: ${Rt(_.params)}

`:I=`No parameters provided.

`),V.log(`Received notification '${_.method}'.`,I)}else On("receive-notification",_)}r(ci,"traceReceivedNotification");function Lc(_,I){if(!(E===xe.Off||!V))if(w===Ar.Text){let W;if((E===xe.Verbose||E===xe.Compact)&&(_.error&&_.error.data?W=`Error data: ${Rt(_.error.data)}

`:_.result?W=`Result: ${Rt(_.result)}

`:_.error===void 0&&(W=`No result returned.

`)),I){let Z=_.error?` Request failed: ${_.error.message} (${_.error.code}).`:"";V.log(`Received response '${I.method} - (${_.id})' in ${Date.now()-I.timerStart}ms.${Z}`,W)}else V.log(`Received response ${_.id} without active response promise.`,W)}else On("receive-response",_)}r(Lc,"traceReceivedResponse");function On(_,I){if(!V||E===xe.Off)return;let W={isLSPMessage:!0,type:_,message:I,timestamp:Date.now()};V.log(W)}r(On,"logLSPMessage");function Kn(){if(un())throw new Ti(ys.Closed,"Connection is closed.");if(sr())throw new Ti(ys.Disposed,"Connection is disposed.")}r(Kn,"throwIfClosedOrDisposed");function Oc(){if(ln())throw new Ti(ys.AlreadyListening,"Connection is already listening")}r(Oc,"throwIfListening");function Nc(){if(!ln())throw new Error("Call listen() first.")}r(Nc,"throwIfNotListening");function fn(_){return _===void 0?null:_}r(fn,"undefinedToNull");function fs(_){if(_!==null)return _}r(fs,"nullToUndefined");function ps(_){return _!=null&&!Array.isArray(_)&&typeof _=="object"}r(ps,"isNamedParam");function li(_,I){switch(_){case ne.ParameterStructures.auto:return ps(I)?fs(I):[fn(I)];case ne.ParameterStructures.byName:if(!ps(I))throw new Error("Received parameters by name but param is not an object literal.");return fs(I);case ne.ParameterStructures.byPosition:return[fn(I)];default:throw new Error(`Unknown parameter structure ${_.toString()}`)}}r(li,"computeSingleParam");function ms(_,I){let W,Z=_.numberOfParams;switch(Z){case 0:W=void 0;break;case 1:W=li(_.parameterStructures,I[0]);break;default:W=[];for(let Ce=0;Ce<I.length&&Ce<Z;Ce++)W.push(fn(I[Ce]));if(I.length<Z)for(let Ce=I.length;Ce<Z;Ce++)W.push(null);break}return W}r(ms,"computeMessageParams");let Nn={sendNotification:r((_,...I)=>{Kn();let W,Z;if($e.string(_)){W=_;let ve=I[0],Ge=0,Ye=ne.ParameterStructures.auto;ne.ParameterStructures.is(ve)&&(Ge=1,Ye=ve);let fe=I.length,Oe=fe-Ge;switch(Oe){case 0:Z=void 0;break;case 1:Z=li(Ye,I[Ge]);break;default:if(Ye===ne.ParameterStructures.byName)throw new Error(`Received ${Oe} parameters for 'by Name' notification parameter structure.`);Z=I.slice(Ge,fe).map(be=>fn(be));break}}else{let ve=I;W=_.method,Z=ms(_,ve)}let Ce={jsonrpc:u,method:W,params:Z};return Nr(Ce),t.write(Ce).catch(ve=>{throw i.error("Sending notification failed."),ve})},"sendNotification"),onNotification:r((_,I)=>{Kn();let W;return $e.func(_)?S=_:I&&($e.string(_)?(W=_,x.set(_,{type:void 0,handler:I})):(W=_.method,x.set(_.method,{type:_,handler:I}))),{dispose:r(()=>{W!==void 0?x.delete(W):S=void 0},"dispose")}},"onNotification"),onProgress:r((_,I,W)=>{if(L.has(I))throw new Error(`Progress handler for token ${I} already registered`);return L.set(I,W),{dispose:r(()=>{L.delete(I)},"dispose")}},"onProgress"),sendProgress:r((_,I,W)=>Nn.sendNotification(Ss.type,{token:I,value:W}),"sendProgress"),onUnhandledProgress:pr.event,sendRequest:r((_,...I)=>{Kn(),Nc();let W,Z,Ce;if($e.string(_)){W=_;let fe=I[0],Oe=I[I.length-1],be=0,st=ne.ParameterStructures.auto;ne.ParameterStructures.is(fe)&&(be=1,st=fe);let Pt=I.length;PT.CancellationToken.is(Oe)&&(Pt=Pt-1,Ce=Oe);let xr=Pt-be;switch(xr){case 0:Z=void 0;break;case 1:Z=li(st,I[be]);break;default:if(st===ne.ParameterStructures.byName)throw new Error(`Received ${xr} parameters for 'by Name' request parameter structure.`);Z=I.slice(be,Pt).map(Mc=>fn(Mc));break}}else{let fe=I;W=_.method,Z=ms(_,fe);let Oe=_.numberOfParams;Ce=PT.CancellationToken.is(fe[Oe])?fe[Oe]:void 0}let ve=a++,Ge;Ce&&(Ge=Ce.onCancellationRequested(()=>{let fe=bt.sender.sendCancellation(Nn,ve);return fe===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${ve}`),Promise.resolve()):fe.catch(()=>{i.log(`Sending cancellation messages for id ${ve} failed`)})}));let Ye={jsonrpc:u,id:ve,method:W,params:Z};return mr(Ye),typeof bt.sender.enableCancellation=="function"&&bt.sender.enableCancellation(Ye),new Promise(async(fe,Oe)=>{let be=r(xr=>{fe(xr),bt.sender.cleanup(ve),Ge?.dispose()},"resolveWithCleanup"),st=r(xr=>{Oe(xr),bt.sender.cleanup(ve),Ge?.dispose()},"rejectWithCleanup"),Pt={method:W,timerStart:Date.now(),resolve:be,reject:st};try{await t.write(Ye),z.set(ve,Pt)}catch(xr){throw i.error("Sending request failed."),Pt.reject(new ne.ResponseError(ne.ErrorCodes.MessageWriteError,xr.message?xr.message:"Unknown reason")),xr}})},"sendRequest"),onRequest:r((_,I)=>{Kn();let W=null;return qT.is(_)?(W=void 0,p=_):$e.string(_)?(W=null,I!==void 0&&(W=_,g.set(_,{handler:I,type:void 0}))):I!==void 0&&(W=_.method,g.set(_.method,{type:_,handler:I})),{dispose:r(()=>{W!==null&&(W!==void 0?g.delete(W):p=void 0)},"dispose")}},"onRequest"),hasPendingResponse:r(()=>z.size>0,"hasPendingResponse"),trace:r(async(_,I,W)=>{let Z=!1,Ce=Ar.Text;W!==void 0&&($e.boolean(W)?Z=W:(Z=W.sendNotification||!1,Ce=W.traceFormat||Ar.Text)),E=_,w=Ce,E===xe.Off?V=void 0:V=I,Z&&!un()&&!sr()&&await Nn.sendNotification(GT.type,{value:xe.toString(_)})},"trace"),onError:Me.event,onClose:at.event,onUnhandledNotification:zr.event,onDispose:Gt.event,end:r(()=>{t.end()},"end"),dispose:r(()=>{if(sr())return;le=Qr.Disposed,Gt.fire(void 0);let _=new ne.ResponseError(ne.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let I of z.values())I.reject(_);z=new Map,b=new Map,B=new Set,P=new hy.LinkedMap,$e.func(t.dispose)&&t.dispose(),$e.func(e.dispose)&&e.dispose()},"dispose"),listen:r(()=>{Kn(),Oc(),le=Qr.Listening,e.listen(mt)},"listen"),inspect:r(()=>{(0,my.default)().console.log("inspect")},"inspect")};return Nn.onNotification(Hc.type,_=>{if(E===xe.Off||!V)return;let I=E===xe.Verbose||E===xe.Compact;V.log(_.message,I?_.verbose:void 0)}),Nn.onNotification(Ss.type,_=>{let I=L.get(_.token);I?I(_.value):pr.fire(_)}),Nn}r(DI,"createMessageConnection");ae.createMessageConnection=DI});var Zc=K(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.ProgressType=F.ProgressToken=F.createMessageConnection=F.NullLogger=F.ConnectionOptions=F.ConnectionStrategy=F.AbstractMessageBuffer=F.WriteableStreamMessageWriter=F.AbstractMessageWriter=F.MessageWriter=F.ReadableStreamMessageReader=F.AbstractMessageReader=F.MessageReader=F.SharedArrayReceiverStrategy=F.SharedArraySenderStrategy=F.CancellationToken=F.CancellationTokenSource=F.Emitter=F.Event=F.Disposable=F.LRUCache=F.Touch=F.LinkedMap=F.ParameterStructures=F.NotificationType9=F.NotificationType8=F.NotificationType7=F.NotificationType6=F.NotificationType5=F.NotificationType4=F.NotificationType3=F.NotificationType2=F.NotificationType1=F.NotificationType0=F.NotificationType=F.ErrorCodes=F.ResponseError=F.RequestType9=F.RequestType8=F.RequestType7=F.RequestType6=F.RequestType5=F.RequestType4=F.RequestType3=F.RequestType2=F.RequestType1=F.RequestType0=F.RequestType=F.Message=F.RAL=void 0;F.MessageStrategy=F.CancellationStrategy=F.CancellationSenderStrategy=F.CancellationReceiverStrategy=F.ConnectionError=F.ConnectionErrors=F.LogTraceNotification=F.SetTraceNotification=F.TraceFormat=F.TraceValues=F.Trace=void 0;var Fe=hT();Object.defineProperty(F,"Message",{enumerable:!0,get:r(function(){return Fe.Message},"get")});Object.defineProperty(F,"RequestType",{enumerable:!0,get:r(function(){return Fe.RequestType},"get")});Object.defineProperty(F,"RequestType0",{enumerable:!0,get:r(function(){return Fe.RequestType0},"get")});Object.defineProperty(F,"RequestType1",{enumerable:!0,get:r(function(){return Fe.RequestType1},"get")});Object.defineProperty(F,"RequestType2",{enumerable:!0,get:r(function(){return Fe.RequestType2},"get")});Object.defineProperty(F,"RequestType3",{enumerable:!0,get:r(function(){return Fe.RequestType3},"get")});Object.defineProperty(F,"RequestType4",{enumerable:!0,get:r(function(){return Fe.RequestType4},"get")});Object.defineProperty(F,"RequestType5",{enumerable:!0,get:r(function(){return Fe.RequestType5},"get")});Object.defineProperty(F,"RequestType6",{enumerable:!0,get:r(function(){return Fe.RequestType6},"get")});Object.defineProperty(F,"RequestType7",{enumerable:!0,get:r(function(){return Fe.RequestType7},"get")});Object.defineProperty(F,"RequestType8",{enumerable:!0,get:r(function(){return Fe.RequestType8},"get")});Object.defineProperty(F,"RequestType9",{enumerable:!0,get:r(function(){return Fe.RequestType9},"get")});Object.defineProperty(F,"ResponseError",{enumerable:!0,get:r(function(){return Fe.ResponseError},"get")});Object.defineProperty(F,"ErrorCodes",{enumerable:!0,get:r(function(){return Fe.ErrorCodes},"get")});Object.defineProperty(F,"NotificationType",{enumerable:!0,get:r(function(){return Fe.NotificationType},"get")});Object.defineProperty(F,"NotificationType0",{enumerable:!0,get:r(function(){return Fe.NotificationType0},"get")});Object.defineProperty(F,"NotificationType1",{enumerable:!0,get:r(function(){return Fe.NotificationType1},"get")});Object.defineProperty(F,"NotificationType2",{enumerable:!0,get:r(function(){return Fe.NotificationType2},"get")});Object.defineProperty(F,"NotificationType3",{enumerable:!0,get:r(function(){return Fe.NotificationType3},"get")});Object.defineProperty(F,"NotificationType4",{enumerable:!0,get:r(function(){return Fe.NotificationType4},"get")});Object.defineProperty(F,"NotificationType5",{enumerable:!0,get:r(function(){return Fe.NotificationType5},"get")});Object.defineProperty(F,"NotificationType6",{enumerable:!0,get:r(function(){return Fe.NotificationType6},"get")});Object.defineProperty(F,"NotificationType7",{enumerable:!0,get:r(function(){return Fe.NotificationType7},"get")});Object.defineProperty(F,"NotificationType8",{enumerable:!0,get:r(function(){return Fe.NotificationType8},"get")});Object.defineProperty(F,"NotificationType9",{enumerable:!0,get:r(function(){return Fe.NotificationType9},"get")});Object.defineProperty(F,"ParameterStructures",{enumerable:!0,get:r(function(){return Fe.ParameterStructures},"get")});var WT=TT();Object.defineProperty(F,"LinkedMap",{enumerable:!0,get:r(function(){return WT.LinkedMap},"get")});Object.defineProperty(F,"LRUCache",{enumerable:!0,get:r(function(){return WT.LRUCache},"get")});Object.defineProperty(F,"Touch",{enumerable:!0,get:r(function(){return WT.Touch},"get")});var BI=ny();Object.defineProperty(F,"Disposable",{enumerable:!0,get:r(function(){return BI.Disposable},"get")});var Sy=pi();Object.defineProperty(F,"Event",{enumerable:!0,get:r(function(){return Sy.Event},"get")});Object.defineProperty(F,"Emitter",{enumerable:!0,get:r(function(){return Sy.Emitter},"get")});var yy=Gc();Object.defineProperty(F,"CancellationTokenSource",{enumerable:!0,get:r(function(){return yy.CancellationTokenSource},"get")});Object.defineProperty(F,"CancellationToken",{enumerable:!0,get:r(function(){return yy.CancellationToken},"get")});var _y=iy();Object.defineProperty(F,"SharedArraySenderStrategy",{enumerable:!0,get:r(function(){return _y.SharedArraySenderStrategy},"get")});Object.defineProperty(F,"SharedArrayReceiverStrategy",{enumerable:!0,get:r(function(){return _y.SharedArrayReceiverStrategy},"get")});var zT=sy();Object.defineProperty(F,"MessageReader",{enumerable:!0,get:r(function(){return zT.MessageReader},"get")});Object.defineProperty(F,"AbstractMessageReader",{enumerable:!0,get:r(function(){return zT.AbstractMessageReader},"get")});Object.defineProperty(F,"ReadableStreamMessageReader",{enumerable:!0,get:r(function(){return zT.ReadableStreamMessageReader},"get")});var HT=fy();Object.defineProperty(F,"MessageWriter",{enumerable:!0,get:r(function(){return HT.MessageWriter},"get")});Object.defineProperty(F,"AbstractMessageWriter",{enumerable:!0,get:r(function(){return HT.AbstractMessageWriter},"get")});Object.defineProperty(F,"WriteableStreamMessageWriter",{enumerable:!0,get:r(function(){return HT.WriteableStreamMessageWriter},"get")});var qI=py();Object.defineProperty(F,"AbstractMessageBuffer",{enumerable:!0,get:r(function(){return qI.AbstractMessageBuffer},"get")});var Wt=Ey();Object.defineProperty(F,"ConnectionStrategy",{enumerable:!0,get:r(function(){return Wt.ConnectionStrategy},"get")});Object.defineProperty(F,"ConnectionOptions",{enumerable:!0,get:r(function(){return Wt.ConnectionOptions},"get")});Object.defineProperty(F,"NullLogger",{enumerable:!0,get:r(function(){return Wt.NullLogger},"get")});Object.defineProperty(F,"createMessageConnection",{enumerable:!0,get:r(function(){return Wt.createMessageConnection},"get")});Object.defineProperty(F,"ProgressToken",{enumerable:!0,get:r(function(){return Wt.ProgressToken},"get")});Object.defineProperty(F,"ProgressType",{enumerable:!0,get:r(function(){return Wt.ProgressType},"get")});Object.defineProperty(F,"Trace",{enumerable:!0,get:r(function(){return Wt.Trace},"get")});Object.defineProperty(F,"TraceValues",{enumerable:!0,get:r(function(){return Wt.TraceValues},"get")});Object.defineProperty(F,"TraceFormat",{enumerable:!0,get:r(function(){return Wt.TraceFormat},"get")});Object.defineProperty(F,"SetTraceNotification",{enumerable:!0,get:r(function(){return Wt.SetTraceNotification},"get")});Object.defineProperty(F,"LogTraceNotification",{enumerable:!0,get:r(function(){return Wt.LogTraceNotification},"get")});Object.defineProperty(F,"ConnectionErrors",{enumerable:!0,get:r(function(){return Wt.ConnectionErrors},"get")});Object.defineProperty(F,"ConnectionError",{enumerable:!0,get:r(function(){return Wt.ConnectionError},"get")});Object.defineProperty(F,"CancellationReceiverStrategy",{enumerable:!0,get:r(function(){return Wt.CancellationReceiverStrategy},"get")});Object.defineProperty(F,"CancellationSenderStrategy",{enumerable:!0,get:r(function(){return Wt.CancellationSenderStrategy},"get")});Object.defineProperty(F,"CancellationStrategy",{enumerable:!0,get:r(function(){return Wt.CancellationStrategy},"get")});Object.defineProperty(F,"MessageStrategy",{enumerable:!0,get:r(function(){return Wt.MessageStrategy},"get")});var GI=Qn();F.RAL=GI.default});var ky=K(QT=>{"use strict";Object.defineProperty(QT,"__esModule",{value:!0});var by=require("util"),wn=Zc(),$c=class e extends wn.AbstractMessageBuffer{static{r(this,"MessageBuffer")}constructor(t="utf-8"){super(t)}emptyBuffer(){return e.emptyBuffer}fromString(t,n){return Buffer.from(t,n)}toString(t,n){return t instanceof Buffer?t.toString(n):new by.TextDecoder(n).decode(t)}asNative(t,n){return n===void 0?t instanceof Buffer?t:Buffer.from(t):t instanceof Buffer?t.slice(0,n):Buffer.from(t,0,n)}allocNative(t){return Buffer.allocUnsafe(t)}};$c.emptyBuffer=Buffer.allocUnsafe(0);var YT=class{static{r(this,"ReadableStreamWrapper")}constructor(t){this.stream=t}onClose(t){return this.stream.on("close",t),wn.Disposable.create(()=>this.stream.off("close",t))}onError(t){return this.stream.on("error",t),wn.Disposable.create(()=>this.stream.off("error",t))}onEnd(t){return this.stream.on("end",t),wn.Disposable.create(()=>this.stream.off("end",t))}onData(t){return this.stream.on("data",t),wn.Disposable.create(()=>this.stream.off("data",t))}},KT=class{static{r(this,"WritableStreamWrapper")}constructor(t){this.stream=t}onClose(t){return this.stream.on("close",t),wn.Disposable.create(()=>this.stream.off("close",t))}onError(t){return this.stream.on("error",t),wn.Disposable.create(()=>this.stream.off("error",t))}onEnd(t){return this.stream.on("end",t),wn.Disposable.create(()=>this.stream.off("end",t))}write(t,n){return new Promise((o,i)=>{let a=r(s=>{s==null?o():i(s)},"callback");typeof t=="string"?this.stream.write(t,n,a):this.stream.write(t,a)})}end(){this.stream.end()}},Ry=Object.freeze({messageBuffer:Object.freeze({create:r(e=>new $c(e),"create")}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:r((e,t)=>{try{return Promise.resolve(Buffer.from(JSON.stringify(e,void 0,0),t.charset))}catch(n){return Promise.reject(n)}},"encode")}),decoder:Object.freeze({name:"application/json",decode:r((e,t)=>{try{return e instanceof Buffer?Promise.resolve(JSON.parse(e.toString(t.charset))):Promise.resolve(JSON.parse(new by.TextDecoder(t.charset).decode(e)))}catch(n){return Promise.reject(n)}},"decode")})}),stream:Object.freeze({asReadableStream:r(e=>new YT(e),"asReadableStream"),asWritableStream:r(e=>new KT(e),"asWritableStream")}),console,timer:Object.freeze({setTimeout(e,t,...n){let o=setTimeout(e,t,...n);return{dispose:r(()=>clearTimeout(o),"dispose")}},setImmediate(e,...t){let n=setImmediate(e,...t);return{dispose:r(()=>clearImmediate(n),"dispose")}},setInterval(e,t,...n){let o=setInterval(e,t,...n);return{dispose:r(()=>clearInterval(o),"dispose")}}})});function JT(){return Ry}r(JT,"RIL");(function(e){function t(){wn.RAL.install(Ry)}r(t,"install"),e.install=t})(JT||(JT={}));QT.default=JT});var Ho=K(Ee=>{"use strict";var jI=Ee&&Ee.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),VI=Ee&&Ee.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&jI(t,e,n)};Object.defineProperty(Ee,"__esModule",{value:!0});Ee.createMessageConnection=Ee.createServerSocketTransport=Ee.createClientSocketTransport=Ee.createServerPipeTransport=Ee.createClientPipeTransport=Ee.generateRandomPipeName=Ee.StreamMessageWriter=Ee.StreamMessageReader=Ee.SocketMessageWriter=Ee.SocketMessageReader=Ee.PortMessageWriter=Ee.PortMessageReader=Ee.IPCMessageWriter=Ee.IPCMessageReader=void 0;var Ei=ky();Ei.default.install();var xy=require("path"),WI=require("os"),zI=require("crypto"),rl=require("net"),vr=Zc();VI(Zc(),Ee);var XT=class extends vr.AbstractMessageReader{static{r(this,"IPCMessageReader")}constructor(t){super(),this.process=t;let n=this.process;n.on("error",o=>this.fireError(o)),n.on("close",()=>this.fireClose())}listen(t){return this.process.on("message",t),vr.Disposable.create(()=>this.process.off("message",t))}};Ee.IPCMessageReader=XT;var ZT=class extends vr.AbstractMessageWriter{static{r(this,"IPCMessageWriter")}constructor(t){super(),this.process=t,this.errorCount=0;let n=this.process;n.on("error",o=>this.fireError(o)),n.on("close",()=>this.fireClose)}write(t){try{return typeof this.process.send=="function"&&this.process.send(t,void 0,void 0,n=>{n?(this.errorCount++,this.handleError(n,t)):this.errorCount=0}),Promise.resolve()}catch(n){return this.handleError(n,t),Promise.reject(n)}}handleError(t,n){this.errorCount++,this.fireError(t,n,this.errorCount)}end(){}};Ee.IPCMessageWriter=ZT;var $T=class extends vr.AbstractMessageReader{static{r(this,"PortMessageReader")}constructor(t){super(),this.onData=new vr.Emitter,t.on("close",()=>this.fireClose),t.on("error",n=>this.fireError(n)),t.on("message",n=>{this.onData.fire(n)})}listen(t){return this.onData.event(t)}};Ee.PortMessageReader=$T;var eE=class extends vr.AbstractMessageWriter{static{r(this,"PortMessageWriter")}constructor(t){super(),this.port=t,this.errorCount=0,t.on("close",()=>this.fireClose()),t.on("error",n=>this.fireError(n))}write(t){try{return this.port.postMessage(t),Promise.resolve()}catch(n){return this.handleError(n,t),Promise.reject(n)}}handleError(t,n){this.errorCount++,this.fireError(t,n,this.errorCount)}end(){}};Ee.PortMessageWriter=eE;var Wo=class extends vr.ReadableStreamMessageReader{static{r(this,"SocketMessageReader")}constructor(t,n="utf-8"){super((0,Ei.default)().stream.asReadableStream(t),n)}};Ee.SocketMessageReader=Wo;var zo=class extends vr.WriteableStreamMessageWriter{static{r(this,"SocketMessageWriter")}constructor(t,n){super((0,Ei.default)().stream.asWritableStream(t),n),this.socket=t}dispose(){super.dispose(),this.socket.destroy()}};Ee.SocketMessageWriter=zo;var el=class extends vr.ReadableStreamMessageReader{static{r(this,"StreamMessageReader")}constructor(t,n){super((0,Ei.default)().stream.asReadableStream(t),n)}};Ee.StreamMessageReader=el;var tl=class extends vr.WriteableStreamMessageWriter{static{r(this,"StreamMessageWriter")}constructor(t,n){super((0,Ei.default)().stream.asWritableStream(t),n)}};Ee.StreamMessageWriter=tl;var Ay=process.env.XDG_RUNTIME_DIR,HI=new Map([["linux",107],["darwin",103]]);function YI(){let e=(0,zI.randomBytes)(21).toString("hex");if(process.platform==="win32")return`\\\\.\\pipe\\vscode-jsonrpc-${e}-sock`;let t;Ay?t=xy.join(Ay,`vscode-ipc-${e}.sock`):t=xy.join(WI.tmpdir(),`vscode-${e}.sock`);let n=HI.get(process.platform);return n!==void 0&&t.length>n&&(0,Ei.default)().console.warn(`WARNING: IPC handle "${t}" is longer than ${n} characters.`),t}r(YI,"generateRandomPipeName");Ee.generateRandomPipeName=YI;function KI(e,t="utf-8"){let n,o=new Promise((i,a)=>{n=i});return new Promise((i,a)=>{let s=(0,rl.createServer)(c=>{s.close(),n([new Wo(c,t),new zo(c,t)])});s.on("error",a),s.listen(e,()=>{s.removeListener("error",a),i({onConnected:r(()=>o,"onConnected")})})})}r(KI,"createClientPipeTransport");Ee.createClientPipeTransport=KI;function JI(e,t="utf-8"){let n=(0,rl.createConnection)(e);return[new Wo(n,t),new zo(n,t)]}r(JI,"createServerPipeTransport");Ee.createServerPipeTransport=JI;function QI(e,t="utf-8"){let n,o=new Promise((i,a)=>{n=i});return new Promise((i,a)=>{let s=(0,rl.createServer)(c=>{s.close(),n([new Wo(c,t),new zo(c,t)])});s.on("error",a),s.listen(e,"127.0.0.1",()=>{s.removeListener("error",a),i({onConnected:r(()=>o,"onConnected")})})})}r(QI,"createClientSocketTransport");Ee.createClientSocketTransport=QI;function XI(e,t="utf-8"){let n=(0,rl.createConnection)(e,"127.0.0.1");return[new Wo(n,t),new zo(n,t)]}r(XI,"createServerSocketTransport");Ee.createServerSocketTransport=XI;function ZI(e){let t=e;return t.read!==void 0&&t.addListener!==void 0}r(ZI,"isReadableStream");function $I(e){let t=e;return t.write!==void 0&&t.addListener!==void 0}r($I,"isWritableStream");function eP(e,t,n,o){n||(n=vr.NullLogger);let i=ZI(e)?new el(e):e,a=$I(t)?new tl(t):t;return vr.ConnectionStrategy.is(o)&&(o={connectionStrategy:o}),(0,vr.createMessageConnection)(i,a,n,o)}r(eP,"createMessageConnection");Ee.createMessageConnection=eP});var tE=K((q3,vy)=>{"use strict";vy.exports=Ho()});var ol=K((Uy,nl)=>{(function(e){if(typeof nl=="object"&&typeof nl.exports=="object"){var t=e(require,Uy);t!==void 0&&(nl.exports=t)}else typeof define=="function"&&define.amd&&define(["require","exports"],e)})(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextDocument=t.EOL=t.WorkspaceFolder=t.InlineCompletionContext=t.SelectedCompletionInfo=t.InlineCompletionTriggerKind=t.InlineCompletionList=t.InlineCompletionItem=t.StringValue=t.InlayHint=t.InlayHintLabelPart=t.InlayHintKind=t.InlineValueContext=t.InlineValueEvaluatableExpression=t.InlineValueVariableLookup=t.InlineValueText=t.SemanticTokens=t.SemanticTokenModifiers=t.SemanticTokenTypes=t.SelectionRange=t.DocumentLink=t.FormattingOptions=t.CodeLens=t.CodeAction=t.CodeActionContext=t.CodeActionTriggerKind=t.CodeActionKind=t.DocumentSymbol=t.WorkspaceSymbol=t.SymbolInformation=t.SymbolTag=t.SymbolKind=t.DocumentHighlight=t.DocumentHighlightKind=t.SignatureInformation=t.ParameterInformation=t.Hover=t.MarkedString=t.CompletionList=t.CompletionItem=t.CompletionItemLabelDetails=t.InsertTextMode=t.InsertReplaceEdit=t.CompletionItemTag=t.InsertTextFormat=t.CompletionItemKind=t.MarkupContent=t.MarkupKind=t.TextDocumentItem=t.OptionalVersionedTextDocumentIdentifier=t.VersionedTextDocumentIdentifier=t.TextDocumentIdentifier=t.WorkspaceChange=t.WorkspaceEdit=t.DeleteFile=t.RenameFile=t.CreateFile=t.TextDocumentEdit=t.AnnotatedTextEdit=t.ChangeAnnotationIdentifier=t.ChangeAnnotation=t.TextEdit=t.Command=t.Diagnostic=t.CodeDescription=t.DiagnosticTag=t.DiagnosticSeverity=t.DiagnosticRelatedInformation=t.FoldingRange=t.FoldingRangeKind=t.ColorPresentation=t.ColorInformation=t.Color=t.LocationLink=t.Location=t.Range=t.Position=t.uinteger=t.integer=t.URI=t.DocumentUri=void 0;var n;(function(f){function R(k){return typeof k=="string"}r(R,"is"),f.is=R})(n||(t.DocumentUri=n={}));var o;(function(f){function R(k){return typeof k=="string"}r(R,"is"),f.is=R})(o||(t.URI=o={}));var i;(function(f){f.MIN_VALUE=-2147483648,f.MAX_VALUE=2147483647;function R(k){return typeof k=="number"&&f.MIN_VALUE<=k&&k<=f.MAX_VALUE}r(R,"is"),f.is=R})(i||(t.integer=i={}));var a;(function(f){f.MIN_VALUE=0,f.MAX_VALUE=2147483647;function R(k){return typeof k=="number"&&f.MIN_VALUE<=k&&k<=f.MAX_VALUE}r(R,"is"),f.is=R})(a||(t.uinteger=a={}));var s;(function(f){function R(m,l){return m===Number.MAX_VALUE&&(m=a.MAX_VALUE),l===Number.MAX_VALUE&&(l=a.MAX_VALUE),{line:m,character:l}}r(R,"create"),f.create=R;function k(m){var l=m;return U.objectLiteral(l)&&U.uinteger(l.line)&&U.uinteger(l.character)}r(k,"is"),f.is=k})(s||(t.Position=s={}));var c;(function(f){function R(m,l,v,D){if(U.uinteger(m)&&U.uinteger(l)&&U.uinteger(v)&&U.uinteger(D))return{start:s.create(m,l),end:s.create(v,D)};if(s.is(m)&&s.is(l))return{start:m,end:l};throw new Error("Range#create called with invalid arguments[".concat(m,", ").concat(l,", ").concat(v,", ").concat(D,"]"))}r(R,"create"),f.create=R;function k(m){var l=m;return U.objectLiteral(l)&&s.is(l.start)&&s.is(l.end)}r(k,"is"),f.is=k})(c||(t.Range=c={}));var u;(function(f){function R(m,l){return{uri:m,range:l}}r(R,"create"),f.create=R;function k(m){var l=m;return U.objectLiteral(l)&&c.is(l.range)&&(U.string(l.uri)||U.undefined(l.uri))}r(k,"is"),f.is=k})(u||(t.Location=u={}));var p;(function(f){function R(m,l,v,D){return{targetUri:m,targetRange:l,targetSelectionRange:v,originSelectionRange:D}}r(R,"create"),f.create=R;function k(m){var l=m;return U.objectLiteral(l)&&c.is(l.targetRange)&&U.string(l.targetUri)&&c.is(l.targetSelectionRange)&&(c.is(l.originSelectionRange)||U.undefined(l.originSelectionRange))}r(k,"is"),f.is=k})(p||(t.LocationLink=p={}));var g;(function(f){function R(m,l,v,D){return{red:m,green:l,blue:v,alpha:D}}r(R,"create"),f.create=R;function k(m){var l=m;return U.objectLiteral(l)&&U.numberRange(l.red,0,1)&&U.numberRange(l.green,0,1)&&U.numberRange(l.blue,0,1)&&U.numberRange(l.alpha,0,1)}r(k,"is"),f.is=k})(g||(t.Color=g={}));var S;(function(f){function R(m,l){return{range:m,color:l}}r(R,"create"),f.create=R;function k(m){var l=m;return U.objectLiteral(l)&&c.is(l.range)&&g.is(l.color)}r(k,"is"),f.is=k})(S||(t.ColorInformation=S={}));var x;(function(f){function R(m,l,v){return{label:m,textEdit:l,additionalTextEdits:v}}r(R,"create"),f.create=R;function k(m){var l=m;return U.objectLiteral(l)&&U.string(l.label)&&(U.undefined(l.textEdit)||V.is(l))&&(U.undefined(l.additionalTextEdits)||U.typedArray(l.additionalTextEdits,V.is))}r(k,"is"),f.is=k})(x||(t.ColorPresentation=x={}));var L;(function(f){f.Comment="comment",f.Imports="imports",f.Region="region"})(L||(t.FoldingRangeKind=L={}));var G;(function(f){function R(m,l,v,D,ie,ct){var we={startLine:m,endLine:l};return U.defined(v)&&(we.startCharacter=v),U.defined(D)&&(we.endCharacter=D),U.defined(ie)&&(we.kind=ie),U.defined(ct)&&(we.collapsedText=ct),we}r(R,"create"),f.create=R;function k(m){var l=m;return U.objectLiteral(l)&&U.uinteger(l.startLine)&&U.uinteger(l.startLine)&&(U.undefined(l.startCharacter)||U.uinteger(l.startCharacter))&&(U.undefined(l.endCharacter)||U.uinteger(l.endCharacter))&&(U.undefined(l.kind)||U.string(l.kind))}r(k,"is"),f.is=k})(G||(t.FoldingRange=G={}));var P;(function(f){function R(m,l){return{location:m,message:l}}r(R,"create"),f.create=R;function k(m){var l=m;return U.defined(l)&&u.is(l.location)&&U.string(l.message)}r(k,"is"),f.is=k})(P||(t.DiagnosticRelatedInformation=P={}));var z;(function(f){f.Error=1,f.Warning=2,f.Information=3,f.Hint=4})(z||(t.DiagnosticSeverity=z={}));var B;(function(f){f.Unnecessary=1,f.Deprecated=2})(B||(t.DiagnosticTag=B={}));var b;(function(f){function R(k){var m=k;return U.objectLiteral(m)&&U.string(m.href)}r(R,"is"),f.is=R})(b||(t.CodeDescription=b={}));var E;(function(f){function R(m,l,v,D,ie,ct){var we={range:m,message:l};return U.defined(v)&&(we.severity=v),U.defined(D)&&(we.code=D),U.defined(ie)&&(we.source=ie),U.defined(ct)&&(we.relatedInformation=ct),we}r(R,"create"),f.create=R;function k(m){var l,v=m;return U.defined(v)&&c.is(v.range)&&U.string(v.message)&&(U.number(v.severity)||U.undefined(v.severity))&&(U.integer(v.code)||U.string(v.code)||U.undefined(v.code))&&(U.undefined(v.codeDescription)||U.string((l=v.codeDescription)===null||l===void 0?void 0:l.href))&&(U.string(v.source)||U.undefined(v.source))&&(U.undefined(v.relatedInformation)||U.typedArray(v.relatedInformation,P.is))}r(k,"is"),f.is=k})(E||(t.Diagnostic=E={}));var w;(function(f){function R(m,l){for(var v=[],D=2;D<arguments.length;D++)v[D-2]=arguments[D];var ie={title:m,command:l};return U.defined(v)&&v.length>0&&(ie.arguments=v),ie}r(R,"create"),f.create=R;function k(m){var l=m;return U.defined(l)&&U.string(l.title)&&U.string(l.command)}r(k,"is"),f.is=k})(w||(t.Command=w={}));var V;(function(f){function R(v,D){return{range:v,newText:D}}r(R,"replace"),f.replace=R;function k(v,D){return{range:{start:v,end:v},newText:D}}r(k,"insert"),f.insert=k;function m(v){return{range:v,newText:""}}r(m,"del"),f.del=m;function l(v){var D=v;return U.objectLiteral(D)&&U.string(D.newText)&&c.is(D.range)}r(l,"is"),f.is=l})(V||(t.TextEdit=V={}));var le;(function(f){function R(m,l,v){var D={label:m};return l!==void 0&&(D.needsConfirmation=l),v!==void 0&&(D.description=v),D}r(R,"create"),f.create=R;function k(m){var l=m;return U.objectLiteral(l)&&U.string(l.label)&&(U.boolean(l.needsConfirmation)||l.needsConfirmation===void 0)&&(U.string(l.description)||l.description===void 0)}r(k,"is"),f.is=k})(le||(t.ChangeAnnotation=le={}));var Me;(function(f){function R(k){var m=k;return U.string(m)}r(R,"is"),f.is=R})(Me||(t.ChangeAnnotationIdentifier=Me={}));var at;(function(f){function R(v,D,ie){return{range:v,newText:D,annotationId:ie}}r(R,"replace"),f.replace=R;function k(v,D,ie){return{range:{start:v,end:v},newText:D,annotationId:ie}}r(k,"insert"),f.insert=k;function m(v,D){return{range:v,newText:"",annotationId:D}}r(m,"del"),f.del=m;function l(v){var D=v;return V.is(D)&&(le.is(D.annotationId)||Me.is(D.annotationId))}r(l,"is"),f.is=l})(at||(t.AnnotatedTextEdit=at={}));var zr;(function(f){function R(m,l){return{textDocument:m,edits:l}}r(R,"create"),f.create=R;function k(m){var l=m;return U.defined(l)&&un.is(l.textDocument)&&Array.isArray(l.edits)}r(k,"is"),f.is=k})(zr||(t.TextDocumentEdit=zr={}));var pr;(function(f){function R(m,l,v){var D={kind:"create",uri:m};return l!==void 0&&(l.overwrite!==void 0||l.ignoreIfExists!==void 0)&&(D.options=l),v!==void 0&&(D.annotationId=v),D}r(R,"create"),f.create=R;function k(m){var l=m;return l&&l.kind==="create"&&U.string(l.uri)&&(l.options===void 0||(l.options.overwrite===void 0||U.boolean(l.options.overwrite))&&(l.options.ignoreIfExists===void 0||U.boolean(l.options.ignoreIfExists)))&&(l.annotationId===void 0||Me.is(l.annotationId))}r(k,"is"),f.is=k})(pr||(t.CreateFile=pr={}));var Gt;(function(f){function R(m,l,v,D){var ie={kind:"rename",oldUri:m,newUri:l};return v!==void 0&&(v.overwrite!==void 0||v.ignoreIfExists!==void 0)&&(ie.options=v),D!==void 0&&(ie.annotationId=D),ie}r(R,"create"),f.create=R;function k(m){var l=m;return l&&l.kind==="rename"&&U.string(l.oldUri)&&U.string(l.newUri)&&(l.options===void 0||(l.options.overwrite===void 0||U.boolean(l.options.overwrite))&&(l.options.ignoreIfExists===void 0||U.boolean(l.options.ignoreIfExists)))&&(l.annotationId===void 0||Me.is(l.annotationId))}r(k,"is"),f.is=k})(Gt||(t.RenameFile=Gt={}));var bt;(function(f){function R(m,l,v){var D={kind:"delete",uri:m};return l!==void 0&&(l.recursive!==void 0||l.ignoreIfNotExists!==void 0)&&(D.options=l),v!==void 0&&(D.annotationId=v),D}r(R,"create"),f.create=R;function k(m){var l=m;return l&&l.kind==="delete"&&U.string(l.uri)&&(l.options===void 0||(l.options.recursive===void 0||U.boolean(l.options.recursive))&&(l.options.ignoreIfNotExists===void 0||U.boolean(l.options.ignoreIfNotExists)))&&(l.annotationId===void 0||Me.is(l.annotationId))}r(k,"is"),f.is=k})(bt||(t.DeleteFile=bt={}));var Hn;(function(f){function R(k){var m=k;return m&&(m.changes!==void 0||m.documentChanges!==void 0)&&(m.documentChanges===void 0||m.documentChanges.every(function(l){return U.string(l.kind)?pr.is(l)||Gt.is(l)||bt.is(l):zr.is(l)}))}r(R,"is"),f.is=R})(Hn||(t.WorkspaceEdit=Hn={}));var sn=(function(){function f(R,k){this.edits=R,this.changeAnnotations=k}return r(f,"TextEditChangeImpl"),f.prototype.insert=function(R,k,m){var l,v;if(m===void 0?l=V.insert(R,k):Me.is(m)?(v=m,l=at.insert(R,k,m)):(this.assertChangeAnnotations(this.changeAnnotations),v=this.changeAnnotations.manage(m),l=at.insert(R,k,v)),this.edits.push(l),v!==void 0)return v},f.prototype.replace=function(R,k,m){var l,v;if(m===void 0?l=V.replace(R,k):Me.is(m)?(v=m,l=at.replace(R,k,m)):(this.assertChangeAnnotations(this.changeAnnotations),v=this.changeAnnotations.manage(m),l=at.replace(R,k,v)),this.edits.push(l),v!==void 0)return v},f.prototype.delete=function(R,k){var m,l;if(k===void 0?m=V.del(R):Me.is(k)?(l=k,m=at.del(R,k)):(this.assertChangeAnnotations(this.changeAnnotations),l=this.changeAnnotations.manage(k),m=at.del(R,l)),this.edits.push(m),l!==void 0)return l},f.prototype.add=function(R){this.edits.push(R)},f.prototype.all=function(){return this.edits},f.prototype.clear=function(){this.edits.splice(0,this.edits.length)},f.prototype.assertChangeAnnotations=function(R){if(R===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},f})(),Cn=(function(){function f(R){this._annotations=R===void 0?Object.create(null):R,this._counter=0,this._size=0}return r(f,"ChangeAnnotations"),f.prototype.all=function(){return this._annotations},Object.defineProperty(f.prototype,"size",{get:r(function(){return this._size},"get"),enumerable:!1,configurable:!0}),f.prototype.manage=function(R,k){var m;if(Me.is(R)?m=R:(m=this.nextId(),k=R),this._annotations[m]!==void 0)throw new Error("Id ".concat(m," is already in use."));if(k===void 0)throw new Error("No annotation provided for id ".concat(m));return this._annotations[m]=k,this._size++,m},f.prototype.nextId=function(){return this._counter++,this._counter.toString()},f})(),Or=(function(){function f(R){var k=this;this._textEditChanges=Object.create(null),R!==void 0?(this._workspaceEdit=R,R.documentChanges?(this._changeAnnotations=new Cn(R.changeAnnotations),R.changeAnnotations=this._changeAnnotations.all(),R.documentChanges.forEach(function(m){if(zr.is(m)){var l=new sn(m.edits,k._changeAnnotations);k._textEditChanges[m.textDocument.uri]=l}})):R.changes&&Object.keys(R.changes).forEach(function(m){var l=new sn(R.changes[m]);k._textEditChanges[m]=l})):this._workspaceEdit={}}return r(f,"WorkspaceChange"),Object.defineProperty(f.prototype,"edit",{get:r(function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},"get"),enumerable:!1,configurable:!0}),f.prototype.getTextEditChange=function(R){if(un.is(R)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var k={uri:R.uri,version:R.version},m=this._textEditChanges[k.uri];if(!m){var l=[],v={textDocument:k,edits:l};this._workspaceEdit.documentChanges.push(v),m=new sn(l,this._changeAnnotations),this._textEditChanges[k.uri]=m}return m}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var m=this._textEditChanges[R];if(!m){var l=[];this._workspaceEdit.changes[R]=l,m=new sn(l),this._textEditChanges[R]=m}return m}},f.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new Cn,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},f.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},f.prototype.createFile=function(R,k,m){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var l;le.is(k)||Me.is(k)?l=k:m=k;var v,D;if(l===void 0?v=pr.create(R,m):(D=Me.is(l)?l:this._changeAnnotations.manage(l),v=pr.create(R,m,D)),this._workspaceEdit.documentChanges.push(v),D!==void 0)return D},f.prototype.renameFile=function(R,k,m,l){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var v;le.is(m)||Me.is(m)?v=m:l=m;var D,ie;if(v===void 0?D=Gt.create(R,k,l):(ie=Me.is(v)?v:this._changeAnnotations.manage(v),D=Gt.create(R,k,l,ie)),this._workspaceEdit.documentChanges.push(D),ie!==void 0)return ie},f.prototype.deleteFile=function(R,k,m){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var l;le.is(k)||Me.is(k)?l=k:m=k;var v,D;if(l===void 0?v=bt.create(R,m):(D=Me.is(l)?l:this._changeAnnotations.manage(l),v=bt.create(R,m,D)),this._workspaceEdit.documentChanges.push(v),D!==void 0)return D},f})();t.WorkspaceChange=Or;var cn;(function(f){function R(m){return{uri:m}}r(R,"create"),f.create=R;function k(m){var l=m;return U.defined(l)&&U.string(l.uri)}r(k,"is"),f.is=k})(cn||(t.TextDocumentIdentifier=cn={}));var ln;(function(f){function R(m,l){return{uri:m,version:l}}r(R,"create"),f.create=R;function k(m){var l=m;return U.defined(l)&&U.string(l.uri)&&U.integer(l.version)}r(k,"is"),f.is=k})(ln||(t.VersionedTextDocumentIdentifier=ln={}));var un;(function(f){function R(m,l){return{uri:m,version:l}}r(R,"create"),f.create=R;function k(m){var l=m;return U.defined(l)&&U.string(l.uri)&&(l.version===null||U.integer(l.version))}r(k,"is"),f.is=k})(un||(t.OptionalVersionedTextDocumentIdentifier=un={}));var sr;(function(f){function R(m,l,v,D){return{uri:m,languageId:l,version:v,text:D}}r(R,"create"),f.create=R;function k(m){var l=m;return U.defined(l)&&U.string(l.uri)&&U.string(l.languageId)&&U.integer(l.version)&&U.string(l.text)}r(k,"is"),f.is=k})(sr||(t.TextDocumentItem=sr={}));var Ln;(function(f){f.PlainText="plaintext",f.Markdown="markdown";function R(k){var m=k;return m===f.PlainText||m===f.Markdown}r(R,"is"),f.is=R})(Ln||(t.MarkupKind=Ln={}));var dn;(function(f){function R(k){var m=k;return U.objectLiteral(k)&&Ln.is(m.kind)&&U.string(m.value)}r(R,"is"),f.is=R})(dn||(t.MarkupContent=dn={}));var si;(function(f){f.Text=1,f.Method=2,f.Function=3,f.Constructor=4,f.Field=5,f.Variable=6,f.Class=7,f.Interface=8,f.Module=9,f.Property=10,f.Unit=11,f.Value=12,f.Enum=13,f.Keyword=14,f.Snippet=15,f.Color=16,f.File=17,f.Reference=18,f.Folder=19,f.EnumMember=20,f.Constant=21,f.Struct=22,f.Event=23,f.Operator=24,f.TypeParameter=25})(si||(t.CompletionItemKind=si={}));var Yn;(function(f){f.PlainText=1,f.Snippet=2})(Yn||(t.InsertTextFormat=Yn={}));var jt;(function(f){f.Deprecated=1})(jt||(t.CompletionItemTag=jt={}));var Go;(function(f){function R(m,l,v){return{newText:m,insert:l,replace:v}}r(R,"create"),f.create=R;function k(m){var l=m;return l&&U.string(l.newText)&&c.is(l.insert)&&c.is(l.replace)}r(k,"is"),f.is=k})(Go||(t.InsertReplaceEdit=Go={}));var mt;(function(f){f.asIs=1,f.adjustIndentation=2})(mt||(t.InsertTextMode=mt={}));var Vt;(function(f){function R(k){var m=k;return m&&(U.string(m.detail)||m.detail===void 0)&&(U.string(m.description)||m.description===void 0)}r(R,"is"),f.is=R})(Vt||(t.CompletionItemLabelDetails=Vt={}));var Hr;(function(f){function R(k){return{label:k}}r(R,"create"),f.create=R})(Hr||(t.CompletionItem=Hr={}));var It;(function(f){function R(k,m){return{items:k||[],isIncomplete:!!m}}r(R,"create"),f.create=R})(It||(t.CompletionList=It={}));var Kt;(function(f){function R(m){return m.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}r(R,"fromPlainText"),f.fromPlainText=R;function k(m){var l=m;return U.string(l)||U.objectLiteral(l)&&U.string(l.language)&&U.string(l.value)}r(k,"is"),f.is=k})(Kt||(t.MarkedString=Kt={}));var Rt;(function(f){function R(k){var m=k;return!!m&&U.objectLiteral(m)&&(dn.is(m.contents)||Kt.is(m.contents)||U.typedArray(m.contents,Kt.is))&&(k.range===void 0||c.is(k.range))}r(R,"is"),f.is=R})(Rt||(t.Hover=Rt={}));var mr;(function(f){function R(k,m){return m?{label:k,documentation:m}:{label:k}}r(R,"create"),f.create=R})(mr||(t.ParameterInformation=mr={}));var Nr;(function(f){function R(k,m){for(var l=[],v=2;v<arguments.length;v++)l[v-2]=arguments[v];var D={label:k};return U.defined(m)&&(D.documentation=m),U.defined(l)?D.parameters=l:D.parameters=[],D}r(R,"create"),f.create=R})(Nr||(t.SignatureInformation=Nr={}));var Yr;(function(f){f.Text=1,f.Read=2,f.Write=3})(Yr||(t.DocumentHighlightKind=Yr={}));var jo;(function(f){function R(k,m){var l={range:k};return U.number(m)&&(l.kind=m),l}r(R,"create"),f.create=R})(jo||(t.DocumentHighlight=jo={}));var ci;(function(f){f.File=1,f.Module=2,f.Namespace=3,f.Package=4,f.Class=5,f.Method=6,f.Property=7,f.Field=8,f.Constructor=9,f.Enum=10,f.Interface=11,f.Function=12,f.Variable=13,f.Constant=14,f.String=15,f.Number=16,f.Boolean=17,f.Array=18,f.Object=19,f.Key=20,f.Null=21,f.EnumMember=22,f.Struct=23,f.Event=24,f.Operator=25,f.TypeParameter=26})(ci||(t.SymbolKind=ci={}));var Lc;(function(f){f.Deprecated=1})(Lc||(t.SymbolTag=Lc={}));var On;(function(f){function R(k,m,l,v,D){var ie={name:k,kind:m,location:{uri:v,range:l}};return D&&(ie.containerName=D),ie}r(R,"create"),f.create=R})(On||(t.SymbolInformation=On={}));var Kn;(function(f){function R(k,m,l,v){return v!==void 0?{name:k,kind:m,location:{uri:l,range:v}}:{name:k,kind:m,location:{uri:l}}}r(R,"create"),f.create=R})(Kn||(t.WorkspaceSymbol=Kn={}));var Oc;(function(f){function R(m,l,v,D,ie,ct){var we={name:m,detail:l,kind:v,range:D,selectionRange:ie};return ct!==void 0&&(we.children=ct),we}r(R,"create"),f.create=R;function k(m){var l=m;return l&&U.string(l.name)&&U.number(l.kind)&&c.is(l.range)&&c.is(l.selectionRange)&&(l.detail===void 0||U.string(l.detail))&&(l.deprecated===void 0||U.boolean(l.deprecated))&&(l.children===void 0||Array.isArray(l.children))&&(l.tags===void 0||Array.isArray(l.tags))}r(k,"is"),f.is=k})(Oc||(t.DocumentSymbol=Oc={}));var Nc;(function(f){f.Empty="",f.QuickFix="quickfix",f.Refactor="refactor",f.RefactorExtract="refactor.extract",f.RefactorInline="refactor.inline",f.RefactorRewrite="refactor.rewrite",f.Source="source",f.SourceOrganizeImports="source.organizeImports",f.SourceFixAll="source.fixAll"})(Nc||(t.CodeActionKind=Nc={}));var fn;(function(f){f.Invoked=1,f.Automatic=2})(fn||(t.CodeActionTriggerKind=fn={}));var fs;(function(f){function R(m,l,v){var D={diagnostics:m};return l!=null&&(D.only=l),v!=null&&(D.triggerKind=v),D}r(R,"create"),f.create=R;function k(m){var l=m;return U.defined(l)&&U.typedArray(l.diagnostics,E.is)&&(l.only===void 0||U.typedArray(l.only,U.string))&&(l.triggerKind===void 0||l.triggerKind===fn.Invoked||l.triggerKind===fn.Automatic)}r(k,"is"),f.is=k})(fs||(t.CodeActionContext=fs={}));var ps;(function(f){function R(m,l,v){var D={title:m},ie=!0;return typeof l=="string"?(ie=!1,D.kind=l):w.is(l)?D.command=l:D.edit=l,ie&&v!==void 0&&(D.kind=v),D}r(R,"create"),f.create=R;function k(m){var l=m;return l&&U.string(l.title)&&(l.diagnostics===void 0||U.typedArray(l.diagnostics,E.is))&&(l.kind===void 0||U.string(l.kind))&&(l.edit!==void 0||l.command!==void 0)&&(l.command===void 0||w.is(l.command))&&(l.isPreferred===void 0||U.boolean(l.isPreferred))&&(l.edit===void 0||Hn.is(l.edit))}r(k,"is"),f.is=k})(ps||(t.CodeAction=ps={}));var li;(function(f){function R(m,l){var v={range:m};return U.defined(l)&&(v.data=l),v}r(R,"create"),f.create=R;function k(m){var l=m;return U.defined(l)&&c.is(l.range)&&(U.undefined(l.command)||w.is(l.command))}r(k,"is"),f.is=k})(li||(t.CodeLens=li={}));var ms;(function(f){function R(m,l){return{tabSize:m,insertSpaces:l}}r(R,"create"),f.create=R;function k(m){var l=m;return U.defined(l)&&U.uinteger(l.tabSize)&&U.boolean(l.insertSpaces)}r(k,"is"),f.is=k})(ms||(t.FormattingOptions=ms={}));var Nn;(function(f){function R(m,l,v){return{range:m,target:l,data:v}}r(R,"create"),f.create=R;function k(m){var l=m;return U.defined(l)&&c.is(l.range)&&(U.undefined(l.target)||U.string(l.target))}r(k,"is"),f.is=k})(Nn||(t.DocumentLink=Nn={}));var _;(function(f){function R(m,l){return{range:m,parent:l}}r(R,"create"),f.create=R;function k(m){var l=m;return U.objectLiteral(l)&&c.is(l.range)&&(l.parent===void 0||f.is(l.parent))}r(k,"is"),f.is=k})(_||(t.SelectionRange=_={}));var I;(function(f){f.namespace="namespace",f.type="type",f.class="class",f.enum="enum",f.interface="interface",f.struct="struct",f.typeParameter="typeParameter",f.parameter="parameter",f.variable="variable",f.property="property",f.enumMember="enumMember",f.event="event",f.function="function",f.method="method",f.macro="macro",f.keyword="keyword",f.modifier="modifier",f.comment="comment",f.string="string",f.number="number",f.regexp="regexp",f.operator="operator",f.decorator="decorator"})(I||(t.SemanticTokenTypes=I={}));var W;(function(f){f.declaration="declaration",f.definition="definition",f.readonly="readonly",f.static="static",f.deprecated="deprecated",f.abstract="abstract",f.async="async",f.modification="modification",f.documentation="documentation",f.defaultLibrary="defaultLibrary"})(W||(t.SemanticTokenModifiers=W={}));var Z;(function(f){function R(k){var m=k;return U.objectLiteral(m)&&(m.resultId===void 0||typeof m.resultId=="string")&&Array.isArray(m.data)&&(m.data.length===0||typeof m.data[0]=="number")}r(R,"is"),f.is=R})(Z||(t.SemanticTokens=Z={}));var Ce;(function(f){function R(m,l){return{range:m,text:l}}r(R,"create"),f.create=R;function k(m){var l=m;return l!=null&&c.is(l.range)&&U.string(l.text)}r(k,"is"),f.is=k})(Ce||(t.InlineValueText=Ce={}));var ve;(function(f){function R(m,l,v){return{range:m,variableName:l,caseSensitiveLookup:v}}r(R,"create"),f.create=R;function k(m){var l=m;return l!=null&&c.is(l.range)&&U.boolean(l.caseSensitiveLookup)&&(U.string(l.variableName)||l.variableName===void 0)}r(k,"is"),f.is=k})(ve||(t.InlineValueVariableLookup=ve={}));var Ge;(function(f){function R(m,l){return{range:m,expression:l}}r(R,"create"),f.create=R;function k(m){var l=m;return l!=null&&c.is(l.range)&&(U.string(l.expression)||l.expression===void 0)}r(k,"is"),f.is=k})(Ge||(t.InlineValueEvaluatableExpression=Ge={}));var Ye;(function(f){function R(m,l){return{frameId:m,stoppedLocation:l}}r(R,"create"),f.create=R;function k(m){var l=m;return U.defined(l)&&c.is(m.stoppedLocation)}r(k,"is"),f.is=k})(Ye||(t.InlineValueContext=Ye={}));var fe;(function(f){f.Type=1,f.Parameter=2;function R(k){return k===1||k===2}r(R,"is"),f.is=R})(fe||(t.InlayHintKind=fe={}));var Oe;(function(f){function R(m){return{value:m}}r(R,"create"),f.create=R;function k(m){var l=m;return U.objectLiteral(l)&&(l.tooltip===void 0||U.string(l.tooltip)||dn.is(l.tooltip))&&(l.location===void 0||u.is(l.location))&&(l.command===void 0||w.is(l.command))}r(k,"is"),f.is=k})(Oe||(t.InlayHintLabelPart=Oe={}));var be;(function(f){function R(m,l,v){var D={position:m,label:l};return v!==void 0&&(D.kind=v),D}r(R,"create"),f.create=R;function k(m){var l=m;return U.objectLiteral(l)&&s.is(l.position)&&(U.string(l.label)||U.typedArray(l.label,Oe.is))&&(l.kind===void 0||fe.is(l.kind))&&l.textEdits===void 0||U.typedArray(l.textEdits,V.is)&&(l.tooltip===void 0||U.string(l.tooltip)||dn.is(l.tooltip))&&(l.paddingLeft===void 0||U.boolean(l.paddingLeft))&&(l.paddingRight===void 0||U.boolean(l.paddingRight))}r(k,"is"),f.is=k})(be||(t.InlayHint=be={}));var st;(function(f){function R(k){return{kind:"snippet",value:k}}r(R,"createSnippet"),f.createSnippet=R})(st||(t.StringValue=st={}));var Pt;(function(f){function R(k,m,l,v){return{insertText:k,filterText:m,range:l,command:v}}r(R,"create"),f.create=R})(Pt||(t.InlineCompletionItem=Pt={}));var xr;(function(f){function R(k){return{items:k}}r(R,"create"),f.create=R})(xr||(t.InlineCompletionList=xr={}));var Mc;(function(f){f.Invoked=0,f.Automatic=1})(Mc||(t.InlineCompletionTriggerKind=Mc={}));var VS;(function(f){function R(k,m){return{range:k,text:m}}r(R,"create"),f.create=R})(VS||(t.SelectedCompletionInfo=VS={}));var WS;(function(f){function R(k,m){return{triggerKind:k,selectedCompletionInfo:m}}r(R,"create"),f.create=R})(WS||(t.InlineCompletionContext=WS={}));var zS;(function(f){function R(k){var m=k;return U.objectLiteral(m)&&o.is(m.uri)&&U.string(m.name)}r(R,"is"),f.is=R})(zS||(t.WorkspaceFolder=zS={})),t.EOL=[`
`,`\r
`,"\r"];var HS;(function(f){function R(v,D,ie,ct){return new aI(v,D,ie,ct)}r(R,"create"),f.create=R;function k(v){var D=v;return!!(U.defined(D)&&U.string(D.uri)&&(U.undefined(D.languageId)||U.string(D.languageId))&&U.uinteger(D.lineCount)&&U.func(D.getText)&&U.func(D.positionAt)&&U.func(D.offsetAt))}r(k,"is"),f.is=k;function m(v,D){for(var ie=v.getText(),ct=l(D,function(ui,wc){var YS=ui.range.start.line-wc.range.start.line;return YS===0?ui.range.start.character-wc.range.start.character:YS}),we=ie.length,Kr=ct.length-1;Kr>=0;Kr--){var Jr=ct[Kr],Mn=v.offsetAt(Jr.range.start),Te=v.offsetAt(Jr.range.end);if(Te<=we)ie=ie.substring(0,Mn)+Jr.newText+ie.substring(Te,ie.length);else throw new Error("Overlapping edit");we=Mn}return ie}r(m,"applyEdits"),f.applyEdits=m;function l(v,D){if(v.length<=1)return v;var ie=v.length/2|0,ct=v.slice(0,ie),we=v.slice(ie);l(ct,D),l(we,D);for(var Kr=0,Jr=0,Mn=0;Kr<ct.length&&Jr<we.length;){var Te=D(ct[Kr],we[Jr]);Te<=0?v[Mn++]=ct[Kr++]:v[Mn++]=we[Jr++]}for(;Kr<ct.length;)v[Mn++]=ct[Kr++];for(;Jr<we.length;)v[Mn++]=we[Jr++];return v}r(l,"mergeSort")})(HS||(t.TextDocument=HS={}));var aI=(function(){function f(R,k,m,l){this._uri=R,this._languageId=k,this._version=m,this._content=l,this._lineOffsets=void 0}return r(f,"FullTextDocument"),Object.defineProperty(f.prototype,"uri",{get:r(function(){return this._uri},"get"),enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"languageId",{get:r(function(){return this._languageId},"get"),enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"version",{get:r(function(){return this._version},"get"),enumerable:!1,configurable:!0}),f.prototype.getText=function(R){if(R){var k=this.offsetAt(R.start),m=this.offsetAt(R.end);return this._content.substring(k,m)}return this._content},f.prototype.update=function(R,k){this._content=R.text,this._version=k,this._lineOffsets=void 0},f.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var R=[],k=this._content,m=!0,l=0;l<k.length;l++){m&&(R.push(l),m=!1);var v=k.charAt(l);m=v==="\r"||v===`
`,v==="\r"&&l+1<k.length&&k.charAt(l+1)===`
`&&l++}m&&k.length>0&&R.push(k.length),this._lineOffsets=R}return this._lineOffsets},f.prototype.positionAt=function(R){R=Math.max(Math.min(R,this._content.length),0);var k=this.getLineOffsets(),m=0,l=k.length;if(l===0)return s.create(0,R);for(;m<l;){var v=Math.floor((m+l)/2);k[v]>R?l=v:m=v+1}var D=m-1;return s.create(D,R-k[D])},f.prototype.offsetAt=function(R){var k=this.getLineOffsets();if(R.line>=k.length)return this._content.length;if(R.line<0)return 0;var m=k[R.line],l=R.line+1<k.length?k[R.line+1]:this._content.length;return Math.max(Math.min(m+R.character,l),m)},Object.defineProperty(f.prototype,"lineCount",{get:r(function(){return this.getLineOffsets().length},"get"),enumerable:!1,configurable:!0}),f})(),U;(function(f){var R=Object.prototype.toString;function k(Te){return typeof Te<"u"}r(k,"defined"),f.defined=k;function m(Te){return typeof Te>"u"}r(m,"undefined"),f.undefined=m;function l(Te){return Te===!0||Te===!1}r(l,"boolean"),f.boolean=l;function v(Te){return R.call(Te)==="[object String]"}r(v,"string"),f.string=v;function D(Te){return R.call(Te)==="[object Number]"}r(D,"number"),f.number=D;function ie(Te,ui,wc){return R.call(Te)==="[object Number]"&&ui<=Te&&Te<=wc}r(ie,"numberRange"),f.numberRange=ie;function ct(Te){return R.call(Te)==="[object Number]"&&-2147483648<=Te&&Te<=2147483647}r(ct,"integer"),f.integer=ct;function we(Te){return R.call(Te)==="[object Number]"&&0<=Te&&Te<=2147483647}r(we,"uinteger"),f.uinteger=we;function Kr(Te){return R.call(Te)==="[object Function]"}r(Kr,"func"),f.func=Kr;function Jr(Te){return Te!==null&&typeof Te=="object"}r(Jr,"objectLiteral"),f.objectLiteral=Jr;function Mn(Te,ui){return Array.isArray(Te)&&Te.every(ui)}r(Mn,"typedArray"),f.typedArray=Mn})(U||(U={}))})});var Ke=K(gr=>{"use strict";Object.defineProperty(gr,"__esModule",{value:!0});gr.ProtocolNotificationType=gr.ProtocolNotificationType0=gr.ProtocolRequestType=gr.ProtocolRequestType0=gr.RegistrationType=gr.MessageDirection=void 0;var Si=Ho(),Cy;(function(e){e.clientToServer="clientToServer",e.serverToClient="serverToClient",e.both="both"})(Cy||(gr.MessageDirection=Cy={}));var rE=class{static{r(this,"RegistrationType")}constructor(t){this.method=t}};gr.RegistrationType=rE;var nE=class extends Si.RequestType0{static{r(this,"ProtocolRequestType0")}constructor(t){super(t)}};gr.ProtocolRequestType0=nE;var oE=class extends Si.RequestType{static{r(this,"ProtocolRequestType")}constructor(t){super(t,Si.ParameterStructures.byName)}};gr.ProtocolRequestType=oE;var iE=class extends Si.NotificationType0{static{r(this,"ProtocolNotificationType0")}constructor(t){super(t)}};gr.ProtocolNotificationType0=iE;var aE=class extends Si.NotificationType{static{r(this,"ProtocolNotificationType")}constructor(t){super(t,Si.ParameterStructures.byName)}};gr.ProtocolNotificationType=aE});var il=K(xt=>{"use strict";Object.defineProperty(xt,"__esModule",{value:!0});xt.objectLiteral=xt.typedArray=xt.stringArray=xt.array=xt.func=xt.error=xt.number=xt.string=xt.boolean=void 0;function tP(e){return e===!0||e===!1}r(tP,"boolean");xt.boolean=tP;function Ly(e){return typeof e=="string"||e instanceof String}r(Ly,"string");xt.string=Ly;function rP(e){return typeof e=="number"||e instanceof Number}r(rP,"number");xt.number=rP;function nP(e){return e instanceof Error}r(nP,"error");xt.error=nP;function oP(e){return typeof e=="function"}r(oP,"func");xt.func=oP;function Oy(e){return Array.isArray(e)}r(Oy,"array");xt.array=Oy;function iP(e){return Oy(e)&&e.every(t=>Ly(t))}r(iP,"stringArray");xt.stringArray=iP;function aP(e,t){return Array.isArray(e)&&e.every(t)}r(aP,"typedArray");xt.typedArray=aP;function sP(e){return e!==null&&typeof e=="object"}r(sP,"objectLiteral");xt.objectLiteral=sP});var wy=K(al=>{"use strict";Object.defineProperty(al,"__esModule",{value:!0});al.ImplementationRequest=void 0;var Ny=Ke(),My;(function(e){e.method="textDocument/implementation",e.messageDirection=Ny.MessageDirection.clientToServer,e.type=new Ny.ProtocolRequestType(e.method)})(My||(al.ImplementationRequest=My={}))});var Py=K(sl=>{"use strict";Object.defineProperty(sl,"__esModule",{value:!0});sl.TypeDefinitionRequest=void 0;var Fy=Ke(),Iy;(function(e){e.method="textDocument/typeDefinition",e.messageDirection=Fy.MessageDirection.clientToServer,e.type=new Fy.ProtocolRequestType(e.method)})(Iy||(sl.TypeDefinitionRequest=Iy={}))});var qy=K(yi=>{"use strict";Object.defineProperty(yi,"__esModule",{value:!0});yi.DidChangeWorkspaceFoldersNotification=yi.WorkspaceFoldersRequest=void 0;var cl=Ke(),Dy;(function(e){e.method="workspace/workspaceFolders",e.messageDirection=cl.MessageDirection.serverToClient,e.type=new cl.ProtocolRequestType0(e.method)})(Dy||(yi.WorkspaceFoldersRequest=Dy={}));var By;(function(e){e.method="workspace/didChangeWorkspaceFolders",e.messageDirection=cl.MessageDirection.clientToServer,e.type=new cl.ProtocolNotificationType(e.method)})(By||(yi.DidChangeWorkspaceFoldersNotification=By={}))});var Vy=K(ll=>{"use strict";Object.defineProperty(ll,"__esModule",{value:!0});ll.ConfigurationRequest=void 0;var Gy=Ke(),jy;(function(e){e.method="workspace/configuration",e.messageDirection=Gy.MessageDirection.serverToClient,e.type=new Gy.ProtocolRequestType(e.method)})(jy||(ll.ConfigurationRequest=jy={}))});var Hy=K(_i=>{"use strict";Object.defineProperty(_i,"__esModule",{value:!0});_i.ColorPresentationRequest=_i.DocumentColorRequest=void 0;var ul=Ke(),Wy;(function(e){e.method="textDocument/documentColor",e.messageDirection=ul.MessageDirection.clientToServer,e.type=new ul.ProtocolRequestType(e.method)})(Wy||(_i.DocumentColorRequest=Wy={}));var zy;(function(e){e.method="textDocument/colorPresentation",e.messageDirection=ul.MessageDirection.clientToServer,e.type=new ul.ProtocolRequestType(e.method)})(zy||(_i.ColorPresentationRequest=zy={}))});var Jy=K(bi=>{"use strict";Object.defineProperty(bi,"__esModule",{value:!0});bi.FoldingRangeRefreshRequest=bi.FoldingRangeRequest=void 0;var dl=Ke(),Yy;(function(e){e.method="textDocument/foldingRange",e.messageDirection=dl.MessageDirection.clientToServer,e.type=new dl.ProtocolRequestType(e.method)})(Yy||(bi.FoldingRangeRequest=Yy={}));var Ky;(function(e){e.method="workspace/foldingRange/refresh",e.messageDirection=dl.MessageDirection.serverToClient,e.type=new dl.ProtocolRequestType0(e.method)})(Ky||(bi.FoldingRangeRefreshRequest=Ky={}))});var Zy=K(fl=>{"use strict";Object.defineProperty(fl,"__esModule",{value:!0});fl.DeclarationRequest=void 0;var Qy=Ke(),Xy;(function(e){e.method="textDocument/declaration",e.messageDirection=Qy.MessageDirection.clientToServer,e.type=new Qy.ProtocolRequestType(e.method)})(Xy||(fl.DeclarationRequest=Xy={}))});var t_=K(pl=>{"use strict";Object.defineProperty(pl,"__esModule",{value:!0});pl.SelectionRangeRequest=void 0;var $y=Ke(),e_;(function(e){e.method="textDocument/selectionRange",e.messageDirection=$y.MessageDirection.clientToServer,e.type=new $y.ProtocolRequestType(e.method)})(e_||(pl.SelectionRangeRequest=e_={}))});var i_=K($n=>{"use strict";Object.defineProperty($n,"__esModule",{value:!0});$n.WorkDoneProgressCancelNotification=$n.WorkDoneProgressCreateRequest=$n.WorkDoneProgress=void 0;var cP=Ho(),ml=Ke(),r_;(function(e){e.type=new cP.ProgressType;function t(n){return n===e.type}r(t,"is"),e.is=t})(r_||($n.WorkDoneProgress=r_={}));var n_;(function(e){e.method="window/workDoneProgress/create",e.messageDirection=ml.MessageDirection.serverToClient,e.type=new ml.ProtocolRequestType(e.method)})(n_||($n.WorkDoneProgressCreateRequest=n_={}));var o_;(function(e){e.method="window/workDoneProgress/cancel",e.messageDirection=ml.MessageDirection.clientToServer,e.type=new ml.ProtocolNotificationType(e.method)})(o_||($n.WorkDoneProgressCancelNotification=o_={}))});var l_=K(eo=>{"use strict";Object.defineProperty(eo,"__esModule",{value:!0});eo.CallHierarchyOutgoingCallsRequest=eo.CallHierarchyIncomingCallsRequest=eo.CallHierarchyPrepareRequest=void 0;var Ri=Ke(),a_;(function(e){e.method="textDocument/prepareCallHierarchy",e.messageDirection=Ri.MessageDirection.clientToServer,e.type=new Ri.ProtocolRequestType(e.method)})(a_||(eo.CallHierarchyPrepareRequest=a_={}));var s_;(function(e){e.method="callHierarchy/incomingCalls",e.messageDirection=Ri.MessageDirection.clientToServer,e.type=new Ri.ProtocolRequestType(e.method)})(s_||(eo.CallHierarchyIncomingCallsRequest=s_={}));var c_;(function(e){e.method="callHierarchy/outgoingCalls",e.messageDirection=Ri.MessageDirection.clientToServer,e.type=new Ri.ProtocolRequestType(e.method)})(c_||(eo.CallHierarchyOutgoingCallsRequest=c_={}))});var h_=K(Tr=>{"use strict";Object.defineProperty(Tr,"__esModule",{value:!0});Tr.SemanticTokensRefreshRequest=Tr.SemanticTokensRangeRequest=Tr.SemanticTokensDeltaRequest=Tr.SemanticTokensRequest=Tr.SemanticTokensRegistrationType=Tr.TokenFormat=void 0;var Fn=Ke(),u_;(function(e){e.Relative="relative"})(u_||(Tr.TokenFormat=u_={}));var bs;(function(e){e.method="textDocument/semanticTokens",e.type=new Fn.RegistrationType(e.method)})(bs||(Tr.SemanticTokensRegistrationType=bs={}));var d_;(function(e){e.method="textDocument/semanticTokens/full",e.messageDirection=Fn.MessageDirection.clientToServer,e.type=new Fn.ProtocolRequestType(e.method),e.registrationMethod=bs.method})(d_||(Tr.SemanticTokensRequest=d_={}));var f_;(function(e){e.method="textDocument/semanticTokens/full/delta",e.messageDirection=Fn.MessageDirection.clientToServer,e.type=new Fn.ProtocolRequestType(e.method),e.registrationMethod=bs.method})(f_||(Tr.SemanticTokensDeltaRequest=f_={}));var p_;(function(e){e.method="textDocument/semanticTokens/range",e.messageDirection=Fn.MessageDirection.clientToServer,e.type=new Fn.ProtocolRequestType(e.method),e.registrationMethod=bs.method})(p_||(Tr.SemanticTokensRangeRequest=p_={}));var m_;(function(e){e.method="workspace/semanticTokens/refresh",e.messageDirection=Fn.MessageDirection.serverToClient,e.type=new Fn.ProtocolRequestType0(e.method)})(m_||(Tr.SemanticTokensRefreshRequest=m_={}))});var E_=K(hl=>{"use strict";Object.defineProperty(hl,"__esModule",{value:!0});hl.ShowDocumentRequest=void 0;var g_=Ke(),T_;(function(e){e.method="window/showDocument",e.messageDirection=g_.MessageDirection.serverToClient,e.type=new g_.ProtocolRequestType(e.method)})(T_||(hl.ShowDocumentRequest=T_={}))});var __=K(gl=>{"use strict";Object.defineProperty(gl,"__esModule",{value:!0});gl.LinkedEditingRangeRequest=void 0;var S_=Ke(),y_;(function(e){e.method="textDocument/linkedEditingRange",e.messageDirection=S_.MessageDirection.clientToServer,e.type=new S_.ProtocolRequestType(e.method)})(y_||(gl.LinkedEditingRangeRequest=y_={}))});var C_=K(Xt=>{"use strict";Object.defineProperty(Xt,"__esModule",{value:!0});Xt.WillDeleteFilesRequest=Xt.DidDeleteFilesNotification=Xt.DidRenameFilesNotification=Xt.WillRenameFilesRequest=Xt.DidCreateFilesNotification=Xt.WillCreateFilesRequest=Xt.FileOperationPatternKind=void 0;var Mr=Ke(),b_;(function(e){e.file="file",e.folder="folder"})(b_||(Xt.FileOperationPatternKind=b_={}));var R_;(function(e){e.method="workspace/willCreateFiles",e.messageDirection=Mr.MessageDirection.clientToServer,e.type=new Mr.ProtocolRequestType(e.method)})(R_||(Xt.WillCreateFilesRequest=R_={}));var k_;(function(e){e.method="workspace/didCreateFiles",e.messageDirection=Mr.MessageDirection.clientToServer,e.type=new Mr.ProtocolNotificationType(e.method)})(k_||(Xt.DidCreateFilesNotification=k_={}));var x_;(function(e){e.method="workspace/willRenameFiles",e.messageDirection=Mr.MessageDirection.clientToServer,e.type=new Mr.ProtocolRequestType(e.method)})(x_||(Xt.WillRenameFilesRequest=x_={}));var A_;(function(e){e.method="workspace/didRenameFiles",e.messageDirection=Mr.MessageDirection.clientToServer,e.type=new Mr.ProtocolNotificationType(e.method)})(A_||(Xt.DidRenameFilesNotification=A_={}));var v_;(function(e){e.method="workspace/didDeleteFiles",e.messageDirection=Mr.MessageDirection.clientToServer,e.type=new Mr.ProtocolNotificationType(e.method)})(v_||(Xt.DidDeleteFilesNotification=v_={}));var U_;(function(e){e.method="workspace/willDeleteFiles",e.messageDirection=Mr.MessageDirection.clientToServer,e.type=new Mr.ProtocolRequestType(e.method)})(U_||(Xt.WillDeleteFilesRequest=U_={}))});var w_=K(to=>{"use strict";Object.defineProperty(to,"__esModule",{value:!0});to.MonikerRequest=to.MonikerKind=to.UniquenessLevel=void 0;var L_=Ke(),O_;(function(e){e.document="document",e.project="project",e.group="group",e.scheme="scheme",e.global="global"})(O_||(to.UniquenessLevel=O_={}));var N_;(function(e){e.$import="import",e.$export="export",e.local="local"})(N_||(to.MonikerKind=N_={}));var M_;(function(e){e.method="textDocument/moniker",e.messageDirection=L_.MessageDirection.clientToServer,e.type=new L_.ProtocolRequestType(e.method)})(M_||(to.MonikerRequest=M_={}))});var D_=K(ro=>{"use strict";Object.defineProperty(ro,"__esModule",{value:!0});ro.TypeHierarchySubtypesRequest=ro.TypeHierarchySupertypesRequest=ro.TypeHierarchyPrepareRequest=void 0;var ki=Ke(),F_;(function(e){e.method="textDocument/prepareTypeHierarchy",e.messageDirection=ki.MessageDirection.clientToServer,e.type=new ki.ProtocolRequestType(e.method)})(F_||(ro.TypeHierarchyPrepareRequest=F_={}));var I_;(function(e){e.method="typeHierarchy/supertypes",e.messageDirection=ki.MessageDirection.clientToServer,e.type=new ki.ProtocolRequestType(e.method)})(I_||(ro.TypeHierarchySupertypesRequest=I_={}));var P_;(function(e){e.method="typeHierarchy/subtypes",e.messageDirection=ki.MessageDirection.clientToServer,e.type=new ki.ProtocolRequestType(e.method)})(P_||(ro.TypeHierarchySubtypesRequest=P_={}))});var G_=K(xi=>{"use strict";Object.defineProperty(xi,"__esModule",{value:!0});xi.InlineValueRefreshRequest=xi.InlineValueRequest=void 0;var Tl=Ke(),B_;(function(e){e.method="textDocument/inlineValue",e.messageDirection=Tl.MessageDirection.clientToServer,e.type=new Tl.ProtocolRequestType(e.method)})(B_||(xi.InlineValueRequest=B_={}));var q_;(function(e){e.method="workspace/inlineValue/refresh",e.messageDirection=Tl.MessageDirection.serverToClient,e.type=new Tl.ProtocolRequestType0(e.method)})(q_||(xi.InlineValueRefreshRequest=q_={}))});var z_=K(no=>{"use strict";Object.defineProperty(no,"__esModule",{value:!0});no.InlayHintRefreshRequest=no.InlayHintResolveRequest=no.InlayHintRequest=void 0;var Ai=Ke(),j_;(function(e){e.method="textDocument/inlayHint",e.messageDirection=Ai.MessageDirection.clientToServer,e.type=new Ai.ProtocolRequestType(e.method)})(j_||(no.InlayHintRequest=j_={}));var V_;(function(e){e.method="inlayHint/resolve",e.messageDirection=Ai.MessageDirection.clientToServer,e.type=new Ai.ProtocolRequestType(e.method)})(V_||(no.InlayHintResolveRequest=V_={}));var W_;(function(e){e.method="workspace/inlayHint/refresh",e.messageDirection=Ai.MessageDirection.serverToClient,e.type=new Ai.ProtocolRequestType0(e.method)})(W_||(no.InlayHintRefreshRequest=W_={}))});var Z_=K(wr=>{"use strict";Object.defineProperty(wr,"__esModule",{value:!0});wr.DiagnosticRefreshRequest=wr.WorkspaceDiagnosticRequest=wr.DocumentDiagnosticRequest=wr.DocumentDiagnosticReportKind=wr.DiagnosticServerCancellationData=void 0;var X_=Ho(),lP=il(),vi=Ke(),H_;(function(e){function t(n){let o=n;return o&&lP.boolean(o.retriggerRequest)}r(t,"is"),e.is=t})(H_||(wr.DiagnosticServerCancellationData=H_={}));var Y_;(function(e){e.Full="full",e.Unchanged="unchanged"})(Y_||(wr.DocumentDiagnosticReportKind=Y_={}));var K_;(function(e){e.method="textDocument/diagnostic",e.messageDirection=vi.MessageDirection.clientToServer,e.type=new vi.ProtocolRequestType(e.method),e.partialResult=new X_.ProgressType})(K_||(wr.DocumentDiagnosticRequest=K_={}));var J_;(function(e){e.method="workspace/diagnostic",e.messageDirection=vi.MessageDirection.clientToServer,e.type=new vi.ProtocolRequestType(e.method),e.partialResult=new X_.ProgressType})(J_||(wr.WorkspaceDiagnosticRequest=J_={}));var Q_;(function(e){e.method="workspace/diagnostic/refresh",e.messageDirection=vi.MessageDirection.serverToClient,e.type=new vi.ProtocolRequestType0(e.method)})(Q_||(wr.DiagnosticRefreshRequest=Q_={}))});var ib=K(lt=>{"use strict";Object.defineProperty(lt,"__esModule",{value:!0});lt.DidCloseNotebookDocumentNotification=lt.DidSaveNotebookDocumentNotification=lt.DidChangeNotebookDocumentNotification=lt.NotebookCellArrayChange=lt.DidOpenNotebookDocumentNotification=lt.NotebookDocumentSyncRegistrationType=lt.NotebookDocument=lt.NotebookCell=lt.ExecutionSummary=lt.NotebookCellKind=void 0;var Rs=ol(),Xr=il(),pn=Ke(),sE;(function(e){e.Markup=1,e.Code=2;function t(n){return n===1||n===2}r(t,"is"),e.is=t})(sE||(lt.NotebookCellKind=sE={}));var cE;(function(e){function t(i,a){let s={executionOrder:i};return(a===!0||a===!1)&&(s.success=a),s}r(t,"create"),e.create=t;function n(i){let a=i;return Xr.objectLiteral(a)&&Rs.uinteger.is(a.executionOrder)&&(a.success===void 0||Xr.boolean(a.success))}r(n,"is"),e.is=n;function o(i,a){return i===a?!0:i==null||a===null||a===void 0?!1:i.executionOrder===a.executionOrder&&i.success===a.success}r(o,"equals"),e.equals=o})(cE||(lt.ExecutionSummary=cE={}));var El;(function(e){function t(a,s){return{kind:a,document:s}}r(t,"create"),e.create=t;function n(a){let s=a;return Xr.objectLiteral(s)&&sE.is(s.kind)&&Rs.DocumentUri.is(s.document)&&(s.metadata===void 0||Xr.objectLiteral(s.metadata))}r(n,"is"),e.is=n;function o(a,s){let c=new Set;return a.document!==s.document&&c.add("document"),a.kind!==s.kind&&c.add("kind"),a.executionSummary!==s.executionSummary&&c.add("executionSummary"),(a.metadata!==void 0||s.metadata!==void 0)&&!i(a.metadata,s.metadata)&&c.add("metadata"),(a.executionSummary!==void 0||s.executionSummary!==void 0)&&!cE.equals(a.executionSummary,s.executionSummary)&&c.add("executionSummary"),c}r(o,"diff"),e.diff=o;function i(a,s){if(a===s)return!0;if(a==null||s===null||s===void 0||typeof a!=typeof s||typeof a!="object")return!1;let c=Array.isArray(a),u=Array.isArray(s);if(c!==u)return!1;if(c&&u){if(a.length!==s.length)return!1;for(let p=0;p<a.length;p++)if(!i(a[p],s[p]))return!1}if(Xr.objectLiteral(a)&&Xr.objectLiteral(s)){let p=Object.keys(a),g=Object.keys(s);if(p.length!==g.length||(p.sort(),g.sort(),!i(p,g)))return!1;for(let S=0;S<p.length;S++){let x=p[S];if(!i(a[x],s[x]))return!1}}return!0}r(i,"equalsMetadata")})(El||(lt.NotebookCell=El={}));var $_;(function(e){function t(o,i,a,s){return{uri:o,notebookType:i,version:a,cells:s}}r(t,"create"),e.create=t;function n(o){let i=o;return Xr.objectLiteral(i)&&Xr.string(i.uri)&&Rs.integer.is(i.version)&&Xr.typedArray(i.cells,El.is)}r(n,"is"),e.is=n})($_||(lt.NotebookDocument=$_={}));var Ui;(function(e){e.method="notebookDocument/sync",e.messageDirection=pn.MessageDirection.clientToServer,e.type=new pn.RegistrationType(e.method)})(Ui||(lt.NotebookDocumentSyncRegistrationType=Ui={}));var eb;(function(e){e.method="notebookDocument/didOpen",e.messageDirection=pn.MessageDirection.clientToServer,e.type=new pn.ProtocolNotificationType(e.method),e.registrationMethod=Ui.method})(eb||(lt.DidOpenNotebookDocumentNotification=eb={}));var tb;(function(e){function t(o){let i=o;return Xr.objectLiteral(i)&&Rs.uinteger.is(i.start)&&Rs.uinteger.is(i.deleteCount)&&(i.cells===void 0||Xr.typedArray(i.cells,El.is))}r(t,"is"),e.is=t;function n(o,i,a){let s={start:o,deleteCount:i};return a!==void 0&&(s.cells=a),s}r(n,"create"),e.create=n})(tb||(lt.NotebookCellArrayChange=tb={}));var rb;(function(e){e.method="notebookDocument/didChange",e.messageDirection=pn.MessageDirection.clientToServer,e.type=new pn.ProtocolNotificationType(e.method),e.registrationMethod=Ui.method})(rb||(lt.DidChangeNotebookDocumentNotification=rb={}));var nb;(function(e){e.method="notebookDocument/didSave",e.messageDirection=pn.MessageDirection.clientToServer,e.type=new pn.ProtocolNotificationType(e.method),e.registrationMethod=Ui.method})(nb||(lt.DidSaveNotebookDocumentNotification=nb={}));var ob;(function(e){e.method="notebookDocument/didClose",e.messageDirection=pn.MessageDirection.clientToServer,e.type=new pn.ProtocolNotificationType(e.method),e.registrationMethod=Ui.method})(ob||(lt.DidCloseNotebookDocumentNotification=ob={}))});var cb=K(Sl=>{"use strict";Object.defineProperty(Sl,"__esModule",{value:!0});Sl.InlineCompletionRequest=void 0;var ab=Ke(),sb;(function(e){e.method="textDocument/inlineCompletion",e.messageDirection=ab.MessageDirection.clientToServer,e.type=new ab.ProtocolRequestType(e.method)})(sb||(Sl.InlineCompletionRequest=sb={}))});var _R=K(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.WorkspaceSymbolRequest=T.CodeActionResolveRequest=T.CodeActionRequest=T.DocumentSymbolRequest=T.DocumentHighlightRequest=T.ReferencesRequest=T.DefinitionRequest=T.SignatureHelpRequest=T.SignatureHelpTriggerKind=T.HoverRequest=T.CompletionResolveRequest=T.CompletionRequest=T.CompletionTriggerKind=T.PublishDiagnosticsNotification=T.WatchKind=T.RelativePattern=T.FileChangeType=T.DidChangeWatchedFilesNotification=T.WillSaveTextDocumentWaitUntilRequest=T.WillSaveTextDocumentNotification=T.TextDocumentSaveReason=T.DidSaveTextDocumentNotification=T.DidCloseTextDocumentNotification=T.DidChangeTextDocumentNotification=T.TextDocumentContentChangeEvent=T.DidOpenTextDocumentNotification=T.TextDocumentSyncKind=T.TelemetryEventNotification=T.LogMessageNotification=T.ShowMessageRequest=T.ShowMessageNotification=T.MessageType=T.DidChangeConfigurationNotification=T.ExitNotification=T.ShutdownRequest=T.InitializedNotification=T.InitializeErrorCodes=T.InitializeRequest=T.WorkDoneProgressOptions=T.TextDocumentRegistrationOptions=T.StaticRegistrationOptions=T.PositionEncodingKind=T.FailureHandlingKind=T.ResourceOperationKind=T.UnregistrationRequest=T.RegistrationRequest=T.DocumentSelector=T.NotebookCellTextDocumentFilter=T.NotebookDocumentFilter=T.TextDocumentFilter=void 0;T.MonikerRequest=T.MonikerKind=T.UniquenessLevel=T.WillDeleteFilesRequest=T.DidDeleteFilesNotification=T.WillRenameFilesRequest=T.DidRenameFilesNotification=T.WillCreateFilesRequest=T.DidCreateFilesNotification=T.FileOperationPatternKind=T.LinkedEditingRangeRequest=T.ShowDocumentRequest=T.SemanticTokensRegistrationType=T.SemanticTokensRefreshRequest=T.SemanticTokensRangeRequest=T.SemanticTokensDeltaRequest=T.SemanticTokensRequest=T.TokenFormat=T.CallHierarchyPrepareRequest=T.CallHierarchyOutgoingCallsRequest=T.CallHierarchyIncomingCallsRequest=T.WorkDoneProgressCancelNotification=T.WorkDoneProgressCreateRequest=T.WorkDoneProgress=T.SelectionRangeRequest=T.DeclarationRequest=T.FoldingRangeRefreshRequest=T.FoldingRangeRequest=T.ColorPresentationRequest=T.DocumentColorRequest=T.ConfigurationRequest=T.DidChangeWorkspaceFoldersNotification=T.WorkspaceFoldersRequest=T.TypeDefinitionRequest=T.ImplementationRequest=T.ApplyWorkspaceEditRequest=T.ExecuteCommandRequest=T.PrepareRenameRequest=T.RenameRequest=T.PrepareSupportDefaultBehavior=T.DocumentOnTypeFormattingRequest=T.DocumentRangesFormattingRequest=T.DocumentRangeFormattingRequest=T.DocumentFormattingRequest=T.DocumentLinkResolveRequest=T.DocumentLinkRequest=T.CodeLensRefreshRequest=T.CodeLensResolveRequest=T.CodeLensRequest=T.WorkspaceSymbolResolveRequest=void 0;T.InlineCompletionRequest=T.DidCloseNotebookDocumentNotification=T.DidSaveNotebookDocumentNotification=T.DidChangeNotebookDocumentNotification=T.NotebookCellArrayChange=T.DidOpenNotebookDocumentNotification=T.NotebookDocumentSyncRegistrationType=T.NotebookDocument=T.NotebookCell=T.ExecutionSummary=T.NotebookCellKind=T.DiagnosticRefreshRequest=T.WorkspaceDiagnosticRequest=T.DocumentDiagnosticRequest=T.DocumentDiagnosticReportKind=T.DiagnosticServerCancellationData=T.InlayHintRefreshRequest=T.InlayHintResolveRequest=T.InlayHintRequest=T.InlineValueRefreshRequest=T.InlineValueRequest=T.TypeHierarchySupertypesRequest=T.TypeHierarchySubtypesRequest=T.TypeHierarchyPrepareRequest=void 0;var j=Ke(),lb=ol(),Dt=il(),uP=wy();Object.defineProperty(T,"ImplementationRequest",{enumerable:!0,get:r(function(){return uP.ImplementationRequest},"get")});var dP=Py();Object.defineProperty(T,"TypeDefinitionRequest",{enumerable:!0,get:r(function(){return dP.TypeDefinitionRequest},"get")});var TR=qy();Object.defineProperty(T,"WorkspaceFoldersRequest",{enumerable:!0,get:r(function(){return TR.WorkspaceFoldersRequest},"get")});Object.defineProperty(T,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:r(function(){return TR.DidChangeWorkspaceFoldersNotification},"get")});var fP=Vy();Object.defineProperty(T,"ConfigurationRequest",{enumerable:!0,get:r(function(){return fP.ConfigurationRequest},"get")});var ER=Hy();Object.defineProperty(T,"DocumentColorRequest",{enumerable:!0,get:r(function(){return ER.DocumentColorRequest},"get")});Object.defineProperty(T,"ColorPresentationRequest",{enumerable:!0,get:r(function(){return ER.ColorPresentationRequest},"get")});var SR=Jy();Object.defineProperty(T,"FoldingRangeRequest",{enumerable:!0,get:r(function(){return SR.FoldingRangeRequest},"get")});Object.defineProperty(T,"FoldingRangeRefreshRequest",{enumerable:!0,get:r(function(){return SR.FoldingRangeRefreshRequest},"get")});var pP=Zy();Object.defineProperty(T,"DeclarationRequest",{enumerable:!0,get:r(function(){return pP.DeclarationRequest},"get")});var mP=t_();Object.defineProperty(T,"SelectionRangeRequest",{enumerable:!0,get:r(function(){return mP.SelectionRangeRequest},"get")});var pE=i_();Object.defineProperty(T,"WorkDoneProgress",{enumerable:!0,get:r(function(){return pE.WorkDoneProgress},"get")});Object.defineProperty(T,"WorkDoneProgressCreateRequest",{enumerable:!0,get:r(function(){return pE.WorkDoneProgressCreateRequest},"get")});Object.defineProperty(T,"WorkDoneProgressCancelNotification",{enumerable:!0,get:r(function(){return pE.WorkDoneProgressCancelNotification},"get")});var mE=l_();Object.defineProperty(T,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:r(function(){return mE.CallHierarchyIncomingCallsRequest},"get")});Object.defineProperty(T,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:r(function(){return mE.CallHierarchyOutgoingCallsRequest},"get")});Object.defineProperty(T,"CallHierarchyPrepareRequest",{enumerable:!0,get:r(function(){return mE.CallHierarchyPrepareRequest},"get")});var Ci=h_();Object.defineProperty(T,"TokenFormat",{enumerable:!0,get:r(function(){return Ci.TokenFormat},"get")});Object.defineProperty(T,"SemanticTokensRequest",{enumerable:!0,get:r(function(){return Ci.SemanticTokensRequest},"get")});Object.defineProperty(T,"SemanticTokensDeltaRequest",{enumerable:!0,get:r(function(){return Ci.SemanticTokensDeltaRequest},"get")});Object.defineProperty(T,"SemanticTokensRangeRequest",{enumerable:!0,get:r(function(){return Ci.SemanticTokensRangeRequest},"get")});Object.defineProperty(T,"SemanticTokensRefreshRequest",{enumerable:!0,get:r(function(){return Ci.SemanticTokensRefreshRequest},"get")});Object.defineProperty(T,"SemanticTokensRegistrationType",{enumerable:!0,get:r(function(){return Ci.SemanticTokensRegistrationType},"get")});var hP=E_();Object.defineProperty(T,"ShowDocumentRequest",{enumerable:!0,get:r(function(){return hP.ShowDocumentRequest},"get")});var gP=__();Object.defineProperty(T,"LinkedEditingRangeRequest",{enumerable:!0,get:r(function(){return gP.LinkedEditingRangeRequest},"get")});var Yo=C_();Object.defineProperty(T,"FileOperationPatternKind",{enumerable:!0,get:r(function(){return Yo.FileOperationPatternKind},"get")});Object.defineProperty(T,"DidCreateFilesNotification",{enumerable:!0,get:r(function(){return Yo.DidCreateFilesNotification},"get")});Object.defineProperty(T,"WillCreateFilesRequest",{enumerable:!0,get:r(function(){return Yo.WillCreateFilesRequest},"get")});Object.defineProperty(T,"DidRenameFilesNotification",{enumerable:!0,get:r(function(){return Yo.DidRenameFilesNotification},"get")});Object.defineProperty(T,"WillRenameFilesRequest",{enumerable:!0,get:r(function(){return Yo.WillRenameFilesRequest},"get")});Object.defineProperty(T,"DidDeleteFilesNotification",{enumerable:!0,get:r(function(){return Yo.DidDeleteFilesNotification},"get")});Object.defineProperty(T,"WillDeleteFilesRequest",{enumerable:!0,get:r(function(){return Yo.WillDeleteFilesRequest},"get")});var hE=w_();Object.defineProperty(T,"UniquenessLevel",{enumerable:!0,get:r(function(){return hE.UniquenessLevel},"get")});Object.defineProperty(T,"MonikerKind",{enumerable:!0,get:r(function(){return hE.MonikerKind},"get")});Object.defineProperty(T,"MonikerRequest",{enumerable:!0,get:r(function(){return hE.MonikerRequest},"get")});var gE=D_();Object.defineProperty(T,"TypeHierarchyPrepareRequest",{enumerable:!0,get:r(function(){return gE.TypeHierarchyPrepareRequest},"get")});Object.defineProperty(T,"TypeHierarchySubtypesRequest",{enumerable:!0,get:r(function(){return gE.TypeHierarchySubtypesRequest},"get")});Object.defineProperty(T,"TypeHierarchySupertypesRequest",{enumerable:!0,get:r(function(){return gE.TypeHierarchySupertypesRequest},"get")});var yR=G_();Object.defineProperty(T,"InlineValueRequest",{enumerable:!0,get:r(function(){return yR.InlineValueRequest},"get")});Object.defineProperty(T,"InlineValueRefreshRequest",{enumerable:!0,get:r(function(){return yR.InlineValueRefreshRequest},"get")});var TE=z_();Object.defineProperty(T,"InlayHintRequest",{enumerable:!0,get:r(function(){return TE.InlayHintRequest},"get")});Object.defineProperty(T,"InlayHintResolveRequest",{enumerable:!0,get:r(function(){return TE.InlayHintResolveRequest},"get")});Object.defineProperty(T,"InlayHintRefreshRequest",{enumerable:!0,get:r(function(){return TE.InlayHintRefreshRequest},"get")});var ks=Z_();Object.defineProperty(T,"DiagnosticServerCancellationData",{enumerable:!0,get:r(function(){return ks.DiagnosticServerCancellationData},"get")});Object.defineProperty(T,"DocumentDiagnosticReportKind",{enumerable:!0,get:r(function(){return ks.DocumentDiagnosticReportKind},"get")});Object.defineProperty(T,"DocumentDiagnosticRequest",{enumerable:!0,get:r(function(){return ks.DocumentDiagnosticRequest},"get")});Object.defineProperty(T,"WorkspaceDiagnosticRequest",{enumerable:!0,get:r(function(){return ks.WorkspaceDiagnosticRequest},"get")});Object.defineProperty(T,"DiagnosticRefreshRequest",{enumerable:!0,get:r(function(){return ks.DiagnosticRefreshRequest},"get")});var mn=ib();Object.defineProperty(T,"NotebookCellKind",{enumerable:!0,get:r(function(){return mn.NotebookCellKind},"get")});Object.defineProperty(T,"ExecutionSummary",{enumerable:!0,get:r(function(){return mn.ExecutionSummary},"get")});Object.defineProperty(T,"NotebookCell",{enumerable:!0,get:r(function(){return mn.NotebookCell},"get")});Object.defineProperty(T,"NotebookDocument",{enumerable:!0,get:r(function(){return mn.NotebookDocument},"get")});Object.defineProperty(T,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:r(function(){return mn.NotebookDocumentSyncRegistrationType},"get")});Object.defineProperty(T,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:r(function(){return mn.DidOpenNotebookDocumentNotification},"get")});Object.defineProperty(T,"NotebookCellArrayChange",{enumerable:!0,get:r(function(){return mn.NotebookCellArrayChange},"get")});Object.defineProperty(T,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:r(function(){return mn.DidChangeNotebookDocumentNotification},"get")});Object.defineProperty(T,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:r(function(){return mn.DidSaveNotebookDocumentNotification},"get")});Object.defineProperty(T,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:r(function(){return mn.DidCloseNotebookDocumentNotification},"get")});var TP=cb();Object.defineProperty(T,"InlineCompletionRequest",{enumerable:!0,get:r(function(){return TP.InlineCompletionRequest},"get")});var lE;(function(e){function t(n){let o=n;return Dt.string(o)||Dt.string(o.language)||Dt.string(o.scheme)||Dt.string(o.pattern)}r(t,"is"),e.is=t})(lE||(T.TextDocumentFilter=lE={}));var uE;(function(e){function t(n){let o=n;return Dt.objectLiteral(o)&&(Dt.string(o.notebookType)||Dt.string(o.scheme)||Dt.string(o.pattern))}r(t,"is"),e.is=t})(uE||(T.NotebookDocumentFilter=uE={}));var dE;(function(e){function t(n){let o=n;return Dt.objectLiteral(o)&&(Dt.string(o.notebook)||uE.is(o.notebook))&&(o.language===void 0||Dt.string(o.language))}r(t,"is"),e.is=t})(dE||(T.NotebookCellTextDocumentFilter=dE={}));var fE;(function(e){function t(n){if(!Array.isArray(n))return!1;for(let o of n)if(!Dt.string(o)&&!lE.is(o)&&!dE.is(o))return!1;return!0}r(t,"is"),e.is=t})(fE||(T.DocumentSelector=fE={}));var ub;(function(e){e.method="client/registerCapability",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolRequestType(e.method)})(ub||(T.RegistrationRequest=ub={}));var db;(function(e){e.method="client/unregisterCapability",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolRequestType(e.method)})(db||(T.UnregistrationRequest=db={}));var fb;(function(e){e.Create="create",e.Rename="rename",e.Delete="delete"})(fb||(T.ResourceOperationKind=fb={}));var pb;(function(e){e.Abort="abort",e.Transactional="transactional",e.TextOnlyTransactional="textOnlyTransactional",e.Undo="undo"})(pb||(T.FailureHandlingKind=pb={}));var mb;(function(e){e.UTF8="utf-8",e.UTF16="utf-16",e.UTF32="utf-32"})(mb||(T.PositionEncodingKind=mb={}));var hb;(function(e){function t(n){let o=n;return o&&Dt.string(o.id)&&o.id.length>0}r(t,"hasId"),e.hasId=t})(hb||(T.StaticRegistrationOptions=hb={}));var gb;(function(e){function t(n){let o=n;return o&&(o.documentSelector===null||fE.is(o.documentSelector))}r(t,"is"),e.is=t})(gb||(T.TextDocumentRegistrationOptions=gb={}));var Tb;(function(e){function t(o){let i=o;return Dt.objectLiteral(i)&&(i.workDoneProgress===void 0||Dt.boolean(i.workDoneProgress))}r(t,"is"),e.is=t;function n(o){let i=o;return i&&Dt.boolean(i.workDoneProgress)}r(n,"hasWorkDoneProgress"),e.hasWorkDoneProgress=n})(Tb||(T.WorkDoneProgressOptions=Tb={}));var Eb;(function(e){e.method="initialize",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(Eb||(T.InitializeRequest=Eb={}));var Sb;(function(e){e.unknownProtocolVersion=1})(Sb||(T.InitializeErrorCodes=Sb={}));var yb;(function(e){e.method="initialized",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(yb||(T.InitializedNotification=yb={}));var _b;(function(e){e.method="shutdown",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType0(e.method)})(_b||(T.ShutdownRequest=_b={}));var bb;(function(e){e.method="exit",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType0(e.method)})(bb||(T.ExitNotification=bb={}));var Rb;(function(e){e.method="workspace/didChangeConfiguration",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(Rb||(T.DidChangeConfigurationNotification=Rb={}));var kb;(function(e){e.Error=1,e.Warning=2,e.Info=3,e.Log=4,e.Debug=5})(kb||(T.MessageType=kb={}));var xb;(function(e){e.method="window/showMessage",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolNotificationType(e.method)})(xb||(T.ShowMessageNotification=xb={}));var Ab;(function(e){e.method="window/showMessageRequest",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolRequestType(e.method)})(Ab||(T.ShowMessageRequest=Ab={}));var vb;(function(e){e.method="window/logMessage",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolNotificationType(e.method)})(vb||(T.LogMessageNotification=vb={}));var Ub;(function(e){e.method="telemetry/event",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolNotificationType(e.method)})(Ub||(T.TelemetryEventNotification=Ub={}));var Cb;(function(e){e.None=0,e.Full=1,e.Incremental=2})(Cb||(T.TextDocumentSyncKind=Cb={}));var Lb;(function(e){e.method="textDocument/didOpen",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(Lb||(T.DidOpenTextDocumentNotification=Lb={}));var Ob;(function(e){function t(o){let i=o;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}r(t,"isIncremental"),e.isIncremental=t;function n(o){let i=o;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}r(n,"isFull"),e.isFull=n})(Ob||(T.TextDocumentContentChangeEvent=Ob={}));var Nb;(function(e){e.method="textDocument/didChange",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(Nb||(T.DidChangeTextDocumentNotification=Nb={}));var Mb;(function(e){e.method="textDocument/didClose",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(Mb||(T.DidCloseTextDocumentNotification=Mb={}));var wb;(function(e){e.method="textDocument/didSave",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(wb||(T.DidSaveTextDocumentNotification=wb={}));var Fb;(function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3})(Fb||(T.TextDocumentSaveReason=Fb={}));var Ib;(function(e){e.method="textDocument/willSave",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(Ib||(T.WillSaveTextDocumentNotification=Ib={}));var Pb;(function(e){e.method="textDocument/willSaveWaitUntil",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(Pb||(T.WillSaveTextDocumentWaitUntilRequest=Pb={}));var Db;(function(e){e.method="workspace/didChangeWatchedFiles",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolNotificationType(e.method)})(Db||(T.DidChangeWatchedFilesNotification=Db={}));var Bb;(function(e){e.Created=1,e.Changed=2,e.Deleted=3})(Bb||(T.FileChangeType=Bb={}));var qb;(function(e){function t(n){let o=n;return Dt.objectLiteral(o)&&(lb.URI.is(o.baseUri)||lb.WorkspaceFolder.is(o.baseUri))&&Dt.string(o.pattern)}r(t,"is"),e.is=t})(qb||(T.RelativePattern=qb={}));var Gb;(function(e){e.Create=1,e.Change=2,e.Delete=4})(Gb||(T.WatchKind=Gb={}));var jb;(function(e){e.method="textDocument/publishDiagnostics",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolNotificationType(e.method)})(jb||(T.PublishDiagnosticsNotification=jb={}));var Vb;(function(e){e.Invoked=1,e.TriggerCharacter=2,e.TriggerForIncompleteCompletions=3})(Vb||(T.CompletionTriggerKind=Vb={}));var Wb;(function(e){e.method="textDocument/completion",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(Wb||(T.CompletionRequest=Wb={}));var zb;(function(e){e.method="completionItem/resolve",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(zb||(T.CompletionResolveRequest=zb={}));var Hb;(function(e){e.method="textDocument/hover",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(Hb||(T.HoverRequest=Hb={}));var Yb;(function(e){e.Invoked=1,e.TriggerCharacter=2,e.ContentChange=3})(Yb||(T.SignatureHelpTriggerKind=Yb={}));var Kb;(function(e){e.method="textDocument/signatureHelp",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(Kb||(T.SignatureHelpRequest=Kb={}));var Jb;(function(e){e.method="textDocument/definition",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(Jb||(T.DefinitionRequest=Jb={}));var Qb;(function(e){e.method="textDocument/references",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(Qb||(T.ReferencesRequest=Qb={}));var Xb;(function(e){e.method="textDocument/documentHighlight",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(Xb||(T.DocumentHighlightRequest=Xb={}));var Zb;(function(e){e.method="textDocument/documentSymbol",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(Zb||(T.DocumentSymbolRequest=Zb={}));var $b;(function(e){e.method="textDocument/codeAction",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})($b||(T.CodeActionRequest=$b={}));var eR;(function(e){e.method="codeAction/resolve",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(eR||(T.CodeActionResolveRequest=eR={}));var tR;(function(e){e.method="workspace/symbol",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(tR||(T.WorkspaceSymbolRequest=tR={}));var rR;(function(e){e.method="workspaceSymbol/resolve",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(rR||(T.WorkspaceSymbolResolveRequest=rR={}));var nR;(function(e){e.method="textDocument/codeLens",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(nR||(T.CodeLensRequest=nR={}));var oR;(function(e){e.method="codeLens/resolve",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(oR||(T.CodeLensResolveRequest=oR={}));var iR;(function(e){e.method="workspace/codeLens/refresh",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolRequestType0(e.method)})(iR||(T.CodeLensRefreshRequest=iR={}));var aR;(function(e){e.method="textDocument/documentLink",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(aR||(T.DocumentLinkRequest=aR={}));var sR;(function(e){e.method="documentLink/resolve",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(sR||(T.DocumentLinkResolveRequest=sR={}));var cR;(function(e){e.method="textDocument/formatting",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(cR||(T.DocumentFormattingRequest=cR={}));var lR;(function(e){e.method="textDocument/rangeFormatting",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(lR||(T.DocumentRangeFormattingRequest=lR={}));var uR;(function(e){e.method="textDocument/rangesFormatting",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(uR||(T.DocumentRangesFormattingRequest=uR={}));var dR;(function(e){e.method="textDocument/onTypeFormatting",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(dR||(T.DocumentOnTypeFormattingRequest=dR={}));var fR;(function(e){e.Identifier=1})(fR||(T.PrepareSupportDefaultBehavior=fR={}));var pR;(function(e){e.method="textDocument/rename",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(pR||(T.RenameRequest=pR={}));var mR;(function(e){e.method="textDocument/prepareRename",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(mR||(T.PrepareRenameRequest=mR={}));var hR;(function(e){e.method="workspace/executeCommand",e.messageDirection=j.MessageDirection.clientToServer,e.type=new j.ProtocolRequestType(e.method)})(hR||(T.ExecuteCommandRequest=hR={}));var gR;(function(e){e.method="workspace/applyEdit",e.messageDirection=j.MessageDirection.serverToClient,e.type=new j.ProtocolRequestType("workspace/applyEdit")})(gR||(T.ApplyWorkspaceEditRequest=gR={}))});var RR=K(yl=>{"use strict";Object.defineProperty(yl,"__esModule",{value:!0});yl.createProtocolConnection=void 0;var bR=Ho();function EP(e,t,n,o){return bR.ConnectionStrategy.is(o)&&(o={connectionStrategy:o}),(0,bR.createMessageConnection)(e,t,n,o)}r(EP,"createProtocolConnection");yl.createProtocolConnection=EP});var xR=K(Er=>{"use strict";var SP=Er&&Er.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),_l=Er&&Er.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&SP(t,e,n)};Object.defineProperty(Er,"__esModule",{value:!0});Er.LSPErrorCodes=Er.createProtocolConnection=void 0;_l(Ho(),Er);_l(ol(),Er);_l(Ke(),Er);_l(_R(),Er);var yP=RR();Object.defineProperty(Er,"createProtocolConnection",{enumerable:!0,get:r(function(){return yP.createProtocolConnection},"get")});var kR;(function(e){e.lspReservedErrorRangeStart=-32899,e.RequestFailed=-32803,e.ServerCancelled=-32802,e.ContentModified=-32801,e.RequestCancelled=-32800,e.lspReservedErrorRangeEnd=-32800})(kR||(Er.LSPErrorCodes=kR={}))});var ht=K(hn=>{"use strict";var _P=hn&&hn.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),AR=hn&&hn.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&_P(t,e,n)};Object.defineProperty(hn,"__esModule",{value:!0});hn.createProtocolConnection=void 0;var bP=tE();AR(tE(),hn);AR(xR(),hn);function RP(e,t,n,o){return(0,bP.createMessageConnection)(e,t,n,o)}r(RP,"createProtocolConnection");hn.createProtocolConnection=RP});var EE=K(Fr=>{"use strict";Object.defineProperty(Fr,"__esModule",{value:!0});Fr.generateUuid=Fr.parse=Fr.isUUID=Fr.v4=Fr.empty=void 0;var xs=class{static{r(this,"ValueUUID")}constructor(t){this._value=t}asHex(){return this._value}equals(t){return this.asHex()===t.asHex()}},As=class e extends xs{static{r(this,"V4UUID")}static _oneOf(t){return t[Math.floor(t.length*Math.random())]}static _randomHex(){return e._oneOf(e._chars)}constructor(){super([e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),"-",e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),"-","4",e._randomHex(),e._randomHex(),e._randomHex(),"-",e._oneOf(e._timeHighBits),e._randomHex(),e._randomHex(),e._randomHex(),"-",e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex()].join(""))}};As._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];As._timeHighBits=["8","9","a","b"];Fr.empty=new xs("00000000-0000-0000-0000-000000000000");function vR(){return new As}r(vR,"v4");Fr.v4=vR;var kP=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function UR(e){return kP.test(e)}r(UR,"isUUID");Fr.isUUID=UR;function xP(e){if(!UR(e))throw new Error("invalid uuid");return new xs(e)}r(xP,"parse");Fr.parse=xP;function AP(){return vR().asHex()}r(AP,"generateUuid");Fr.generateUuid=AP});var CR=K(io=>{"use strict";Object.defineProperty(io,"__esModule",{value:!0});io.attachPartialResult=io.ProgressFeature=io.attachWorkDone=void 0;var oo=ht(),vP=EE(),Ko=class e{static{r(this,"WorkDoneProgressReporterImpl")}constructor(t,n){this._connection=t,this._token=n,e.Instances.set(this._token,this)}begin(t,n,o,i){let a={kind:"begin",title:t,percentage:n,message:o,cancellable:i};this._connection.sendProgress(oo.WorkDoneProgress.type,this._token,a)}report(t,n){let o={kind:"report"};typeof t=="number"?(o.percentage=t,n!==void 0&&(o.message=n)):o.message=t,this._connection.sendProgress(oo.WorkDoneProgress.type,this._token,o)}done(){e.Instances.delete(this._token),this._connection.sendProgress(oo.WorkDoneProgress.type,this._token,{kind:"end"})}};Ko.Instances=new Map;var bl=class extends Ko{static{r(this,"WorkDoneProgressServerReporterImpl")}constructor(t,n){super(t,n),this._source=new oo.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},vs=class{static{r(this,"NullProgressReporter")}constructor(){}begin(){}report(){}done(){}},Rl=class extends vs{static{r(this,"NullProgressServerReporter")}constructor(){super(),this._source=new oo.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function UP(e,t){if(t===void 0||t.workDoneToken===void 0)return new vs;let n=t.workDoneToken;return delete t.workDoneToken,new Ko(e,n)}r(UP,"attachWorkDone");io.attachWorkDone=UP;var CP=r(e=>class extends e{constructor(){super(),this._progressSupported=!1}initialize(t){super.initialize(t),t?.window?.workDoneProgress===!0&&(this._progressSupported=!0,this.connection.onNotification(oo.WorkDoneProgressCancelNotification.type,n=>{let o=Ko.Instances.get(n.token);(o instanceof bl||o instanceof Rl)&&o.cancel()}))}attachWorkDoneProgress(t){return t===void 0?new vs:new Ko(this.connection,t)}createWorkDoneProgress(){if(this._progressSupported){let t=(0,vP.generateUuid)();return this.connection.sendRequest(oo.WorkDoneProgressCreateRequest.type,{token:t}).then(()=>new bl(this.connection,t))}else return Promise.resolve(new Rl)}},"ProgressFeature");io.ProgressFeature=CP;var SE;(function(e){e.type=new oo.ProgressType})(SE||(SE={}));var yE=class{static{r(this,"ResultProgressReporterImpl")}constructor(t,n){this._connection=t,this._token=n}report(t){this._connection.sendProgress(SE.type,this._token,t)}};function LP(e,t){if(t===void 0||t.partialResultToken===void 0)return;let n=t.partialResultToken;return delete t.partialResultToken,new yE(e,n)}r(LP,"attachPartialResult");io.attachPartialResult=LP});var LR=K(kl=>{"use strict";Object.defineProperty(kl,"__esModule",{value:!0});kl.ConfigurationFeature=void 0;var OP=ht(),NP=Fc(),MP=r(e=>class extends e{getConfiguration(t){return t?NP.string(t)?this._getConfiguration({section:t}):this._getConfiguration(t):this._getConfiguration({})}_getConfiguration(t){let n={items:Array.isArray(t)?t:[t]};return this.connection.sendRequest(OP.ConfigurationRequest.type,n).then(o=>Array.isArray(o)?Array.isArray(t)?o:o[0]:Array.isArray(t)?[]:null)}},"ConfigurationFeature");kl.ConfigurationFeature=MP});var OR=K(Al=>{"use strict";Object.defineProperty(Al,"__esModule",{value:!0});Al.WorkspaceFoldersFeature=void 0;var xl=ht(),wP=r(e=>class extends e{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(t){super.initialize(t);let n=t.workspace;n&&n.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new xl.Emitter,this.connection.onNotification(xl.DidChangeWorkspaceFoldersNotification.type,o=>{this._onDidChangeWorkspaceFolders.fire(o.event)}))}fillServerCapabilities(t){super.fillServerCapabilities(t);let n=t.workspace?.workspaceFolders?.changeNotifications;this._notificationIsAutoRegistered=n===!0||typeof n=="string"}getWorkspaceFolders(){return this.connection.sendRequest(xl.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(xl.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}},"WorkspaceFoldersFeature");Al.WorkspaceFoldersFeature=wP});var NR=K(vl=>{"use strict";Object.defineProperty(vl,"__esModule",{value:!0});vl.CallHierarchyFeature=void 0;var _E=ht(),FP=r(e=>class extends e{get callHierarchy(){return{onPrepare:r(t=>this.connection.onRequest(_E.CallHierarchyPrepareRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),void 0)),"onPrepare"),onIncomingCalls:r(t=>{let n=_E.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onIncomingCalls"),onOutgoingCalls:r(t=>{let n=_E.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onOutgoingCalls")}}},"CallHierarchyFeature");vl.CallHierarchyFeature=FP});var RE=K(ao=>{"use strict";Object.defineProperty(ao,"__esModule",{value:!0});ao.SemanticTokensBuilder=ao.SemanticTokensDiff=ao.SemanticTokensFeature=void 0;var Ul=ht(),IP=r(e=>class extends e{get semanticTokens(){return{refresh:r(()=>this.connection.sendRequest(Ul.SemanticTokensRefreshRequest.type),"refresh"),on:r(t=>{let n=Ul.SemanticTokensRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"on"),onDelta:r(t=>{let n=Ul.SemanticTokensDeltaRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onDelta"),onRange:r(t=>{let n=Ul.SemanticTokensRangeRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onRange")}}},"SemanticTokensFeature");ao.SemanticTokensFeature=IP;var Cl=class{static{r(this,"SemanticTokensDiff")}constructor(t,n){this.originalSequence=t,this.modifiedSequence=n}computeDiff(){let t=this.originalSequence.length,n=this.modifiedSequence.length,o=0;for(;o<n&&o<t&&this.originalSequence[o]===this.modifiedSequence[o];)o++;if(o<n&&o<t){let i=t-1,a=n-1;for(;i>=o&&a>=o&&this.originalSequence[i]===this.modifiedSequence[a];)i--,a--;(i<o||a<o)&&(i++,a++);let s=i-o+1,c=this.modifiedSequence.slice(o,a+1);return c.length===1&&c[0]===this.originalSequence[i]?[{start:o,deleteCount:s-1}]:[{start:o,deleteCount:s,data:c}]}else return o<n?[{start:o,deleteCount:0,data:this.modifiedSequence.slice(o)}]:o<t?[{start:o,deleteCount:t-o}]:[]}};ao.SemanticTokensDiff=Cl;var bE=class{static{r(this,"SemanticTokensBuilder")}constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(t,n,o,i,a){let s=t,c=n;this._dataLen>0&&(s-=this._prevLine,s===0&&(c-=this._prevChar)),this._data[this._dataLen++]=s,this._data[this._dataLen++]=c,this._data[this._dataLen++]=o,this._data[this._dataLen++]=i,this._data[this._dataLen++]=a,this._prevLine=t,this._prevChar=n}get id(){return this._id.toString()}previousResult(t){this.id===t&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new Cl(this._prevData,this._data).computeDiff()}:this.build()}};ao.SemanticTokensBuilder=bE});var MR=K(Ll=>{"use strict";Object.defineProperty(Ll,"__esModule",{value:!0});Ll.ShowDocumentFeature=void 0;var PP=ht(),DP=r(e=>class extends e{showDocument(t){return this.connection.sendRequest(PP.ShowDocumentRequest.type,t)}},"ShowDocumentFeature");Ll.ShowDocumentFeature=DP});var wR=K(Ol=>{"use strict";Object.defineProperty(Ol,"__esModule",{value:!0});Ol.FileOperationsFeature=void 0;var Li=ht(),BP=r(e=>class extends e{onDidCreateFiles(t){return this.connection.onNotification(Li.DidCreateFilesNotification.type,n=>{t(n)})}onDidRenameFiles(t){return this.connection.onNotification(Li.DidRenameFilesNotification.type,n=>{t(n)})}onDidDeleteFiles(t){return this.connection.onNotification(Li.DidDeleteFilesNotification.type,n=>{t(n)})}onWillCreateFiles(t){return this.connection.onRequest(Li.WillCreateFilesRequest.type,(n,o)=>t(n,o))}onWillRenameFiles(t){return this.connection.onRequest(Li.WillRenameFilesRequest.type,(n,o)=>t(n,o))}onWillDeleteFiles(t){return this.connection.onRequest(Li.WillDeleteFilesRequest.type,(n,o)=>t(n,o))}},"FileOperationsFeature");Ol.FileOperationsFeature=BP});var FR=K(Nl=>{"use strict";Object.defineProperty(Nl,"__esModule",{value:!0});Nl.LinkedEditingRangeFeature=void 0;var qP=ht(),GP=r(e=>class extends e{onLinkedEditingRange(t){return this.connection.onRequest(qP.LinkedEditingRangeRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),void 0))}},"LinkedEditingRangeFeature");Nl.LinkedEditingRangeFeature=GP});var IR=K(Ml=>{"use strict";Object.defineProperty(Ml,"__esModule",{value:!0});Ml.TypeHierarchyFeature=void 0;var kE=ht(),jP=r(e=>class extends e{get typeHierarchy(){return{onPrepare:r(t=>this.connection.onRequest(kE.TypeHierarchyPrepareRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),void 0)),"onPrepare"),onSupertypes:r(t=>{let n=kE.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onSupertypes"),onSubtypes:r(t=>{let n=kE.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onSubtypes")}}},"TypeHierarchyFeature");Ml.TypeHierarchyFeature=jP});var DR=K(wl=>{"use strict";Object.defineProperty(wl,"__esModule",{value:!0});wl.InlineValueFeature=void 0;var PR=ht(),VP=r(e=>class extends e{get inlineValue(){return{refresh:r(()=>this.connection.sendRequest(PR.InlineValueRefreshRequest.type),"refresh"),on:r(t=>this.connection.onRequest(PR.InlineValueRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n))),"on")}}},"InlineValueFeature");wl.InlineValueFeature=VP});var qR=K(Fl=>{"use strict";Object.defineProperty(Fl,"__esModule",{value:!0});Fl.FoldingRangeFeature=void 0;var BR=ht(),WP=r(e=>class extends e{get foldingRange(){return{refresh:r(()=>this.connection.sendRequest(BR.FoldingRangeRefreshRequest.type),"refresh"),on:r(t=>{let n=BR.FoldingRangeRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"on")}}},"FoldingRangeFeature");Fl.FoldingRangeFeature=WP});var GR=K(Il=>{"use strict";Object.defineProperty(Il,"__esModule",{value:!0});Il.InlayHintFeature=void 0;var xE=ht(),zP=r(e=>class extends e{get inlayHint(){return{refresh:r(()=>this.connection.sendRequest(xE.InlayHintRefreshRequest.type),"refresh"),on:r(t=>this.connection.onRequest(xE.InlayHintRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n))),"on"),resolve:r(t=>this.connection.onRequest(xE.InlayHintResolveRequest.type,(n,o)=>t(n,o)),"resolve")}}},"InlayHintFeature");Il.InlayHintFeature=zP});var jR=K(Pl=>{"use strict";Object.defineProperty(Pl,"__esModule",{value:!0});Pl.DiagnosticFeature=void 0;var Us=ht(),HP=r(e=>class extends e{get diagnostics(){return{refresh:r(()=>this.connection.sendRequest(Us.DiagnosticRefreshRequest.type),"refresh"),on:r(t=>this.connection.onRequest(Us.DocumentDiagnosticRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(Us.DocumentDiagnosticRequest.partialResult,n))),"on"),onWorkspace:r(t=>this.connection.onRequest(Us.WorkspaceDiagnosticRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(Us.WorkspaceDiagnosticRequest.partialResult,n))),"onWorkspace")}}},"DiagnosticFeature");Pl.DiagnosticFeature=HP});var vE=K(Dl=>{"use strict";Object.defineProperty(Dl,"__esModule",{value:!0});Dl.TextDocuments=void 0;var Jo=ht(),AE=class{static{r(this,"TextDocuments")}constructor(t){this._configuration=t,this._syncedDocuments=new Map,this._onDidChangeContent=new Jo.Emitter,this._onDidOpen=new Jo.Emitter,this._onDidClose=new Jo.Emitter,this._onDidSave=new Jo.Emitter,this._onWillSave=new Jo.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(t){this._willSaveWaitUntil=t}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(t){return this._syncedDocuments.get(t)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(t){t.__textDocumentSync=Jo.TextDocumentSyncKind.Incremental;let n=[];return n.push(t.onDidOpenTextDocument(o=>{let i=o.textDocument,a=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,a);let s=Object.freeze({document:a});this._onDidOpen.fire(s),this._onDidChangeContent.fire(s)})),n.push(t.onDidChangeTextDocument(o=>{let i=o.textDocument,a=o.contentChanges;if(a.length===0)return;let{version:s}=i;if(s==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let c=this._syncedDocuments.get(i.uri);c!==void 0&&(c=this._configuration.update(c,a,s),this._syncedDocuments.set(i.uri,c),this._onDidChangeContent.fire(Object.freeze({document:c})))})),n.push(t.onDidCloseTextDocument(o=>{let i=this._syncedDocuments.get(o.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(o.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),n.push(t.onWillSaveTextDocument(o=>{let i=this._syncedDocuments.get(o.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:o.reason}))})),n.push(t.onWillSaveTextDocumentWaitUntil((o,i)=>{let a=this._syncedDocuments.get(o.textDocument.uri);return a!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:a,reason:o.reason}),i):[]})),n.push(t.onDidSaveTextDocument(o=>{let i=this._syncedDocuments.get(o.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),Jo.Disposable.create(()=>{n.forEach(o=>o.dispose())})}};Dl.TextDocuments=AE});var CE=K(Oi=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});Oi.NotebookDocuments=Oi.NotebookSyncFeature=void 0;var Ir=ht(),VR=vE(),YP=r(e=>class extends e{get synchronization(){return{onDidOpenNotebookDocument:r(t=>this.connection.onNotification(Ir.DidOpenNotebookDocumentNotification.type,n=>{t(n)}),"onDidOpenNotebookDocument"),onDidChangeNotebookDocument:r(t=>this.connection.onNotification(Ir.DidChangeNotebookDocumentNotification.type,n=>{t(n)}),"onDidChangeNotebookDocument"),onDidSaveNotebookDocument:r(t=>this.connection.onNotification(Ir.DidSaveNotebookDocumentNotification.type,n=>{t(n)}),"onDidSaveNotebookDocument"),onDidCloseNotebookDocument:r(t=>this.connection.onNotification(Ir.DidCloseNotebookDocumentNotification.type,n=>{t(n)}),"onDidCloseNotebookDocument")}}},"NotebookSyncFeature");Oi.NotebookSyncFeature=YP;var Bl=class e{static{r(this,"CellTextDocumentConnection")}onDidOpenTextDocument(t){return this.openHandler=t,Ir.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(t){this.openHandler&&this.openHandler(t)}onDidChangeTextDocument(t){return this.changeHandler=t,Ir.Disposable.create(()=>{this.changeHandler=t})}changeTextDocument(t){this.changeHandler&&this.changeHandler(t)}onDidCloseTextDocument(t){return this.closeHandler=t,Ir.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(t){this.closeHandler&&this.closeHandler(t)}onWillSaveTextDocument(){return e.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return e.NULL_DISPOSE}onDidSaveTextDocument(){return e.NULL_DISPOSE}};Bl.NULL_DISPOSE=Object.freeze({dispose:r(()=>{},"dispose")});var UE=class{static{r(this,"NotebookDocuments")}constructor(t){t instanceof VR.TextDocuments?this._cellTextDocuments=t:this._cellTextDocuments=new VR.TextDocuments(t),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new Ir.Emitter,this._onDidChange=new Ir.Emitter,this._onDidSave=new Ir.Emitter,this._onDidClose=new Ir.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(t){return this._cellTextDocuments.get(t.document)}getNotebookDocument(t){return this.notebookDocuments.get(t)}getNotebookCell(t){let n=this.notebookCellMap.get(t);return n&&n[0]}findNotebookDocumentForCell(t){let n=typeof t=="string"?t:t.document,o=this.notebookCellMap.get(n);return o&&o[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(t){let n=new Bl,o=[];return o.push(this.cellTextDocuments.listen(n)),o.push(t.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(let a of i.cellTextDocuments)n.openTextDocument({textDocument:a});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),o.push(t.notebooks.synchronization.onDidChangeNotebookDocument(i=>{let a=this.notebookDocuments.get(i.notebookDocument.uri);if(a===void 0)return;a.version=i.notebookDocument.version;let s=a.metadata,c=!1,u=i.change;u.metadata!==void 0&&(c=!0,a.metadata=u.metadata);let p=[],g=[],S=[],x=[];if(u.cells!==void 0){let B=u.cells;if(B.structure!==void 0){let b=B.structure.array;if(a.cells.splice(b.start,b.deleteCount,...b.cells!==void 0?b.cells:[]),B.structure.didOpen!==void 0)for(let E of B.structure.didOpen)n.openTextDocument({textDocument:E}),p.push(E.uri);if(B.structure.didClose)for(let E of B.structure.didClose)n.closeTextDocument({textDocument:E}),g.push(E.uri)}if(B.data!==void 0){let b=new Map(B.data.map(E=>[E.document,E]));for(let E=0;E<=a.cells.length;E++){let w=b.get(a.cells[E].document);if(w!==void 0){let V=a.cells.splice(E,1,w);if(S.push({old:V[0],new:w}),b.delete(w.document),b.size===0)break}}}if(B.textContent!==void 0)for(let b of B.textContent)n.changeTextDocument({textDocument:b.document,contentChanges:b.changes}),x.push(b.document.uri)}this.updateCellMap(a);let L={notebookDocument:a};c&&(L.metadata={old:s,new:a.metadata});let G=[];for(let B of p)G.push(this.getNotebookCell(B));let P=[];for(let B of g)P.push(this.getNotebookCell(B));let z=[];for(let B of x)z.push(this.getNotebookCell(B));(G.length>0||P.length>0||S.length>0||z.length>0)&&(L.cells={added:G,removed:P,changed:{data:S,textContent:z}}),(L.metadata!==void 0||L.cells!==void 0)&&this._onDidChange.fire(L)})),o.push(t.notebooks.synchronization.onDidSaveNotebookDocument(i=>{let a=this.notebookDocuments.get(i.notebookDocument.uri);a!==void 0&&this._onDidSave.fire(a)})),o.push(t.notebooks.synchronization.onDidCloseNotebookDocument(i=>{let a=this.notebookDocuments.get(i.notebookDocument.uri);if(a!==void 0){this._onDidClose.fire(a);for(let s of i.cellTextDocuments)n.closeTextDocument({textDocument:s});this.notebookDocuments.delete(i.notebookDocument.uri);for(let s of a.cells)this.notebookCellMap.delete(s.document)}})),Ir.Disposable.create(()=>{o.forEach(i=>i.dispose())})}updateCellMap(t){for(let n of t.cells)this.notebookCellMap.set(n.document,[n,t])}};Oi.NotebookDocuments=UE});var WR=K(ql=>{"use strict";Object.defineProperty(ql,"__esModule",{value:!0});ql.MonikerFeature=void 0;var KP=ht(),JP=r(e=>class extends e{get moniker(){return{on:r(t=>{let n=KP.MonikerRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"on")}}},"MonikerFeature");ql.MonikerFeature=JP});var FE=K(Re=>{"use strict";Object.defineProperty(Re,"__esModule",{value:!0});Re.createConnection=Re.combineFeatures=Re.combineNotebooksFeatures=Re.combineLanguagesFeatures=Re.combineWorkspaceFeatures=Re.combineWindowFeatures=Re.combineClientFeatures=Re.combineTracerFeatures=Re.combineTelemetryFeatures=Re.combineConsoleFeatures=Re._NotebooksImpl=Re._LanguagesImpl=Re.BulkUnregistration=Re.BulkRegistration=Re.ErrorMessageTracker=void 0;var H=ht(),Pr=Fc(),OE=EE(),oe=CR(),QP=LR(),XP=OR(),ZP=NR(),$P=RE(),eD=MR(),tD=wR(),rD=FR(),nD=IR(),oD=DR(),iD=qR(),aD=GR(),sD=jR(),cD=CE(),lD=WR();function LE(e){if(e!==null)return e}r(LE,"null2Undefined");var NE=class{static{r(this,"ErrorMessageTracker")}constructor(){this._messages=Object.create(null)}add(t){let n=this._messages[t];n||(n=0),n++,this._messages[t]=n}sendErrors(t){Object.keys(this._messages).forEach(n=>{t.window.showErrorMessage(n)})}};Re.ErrorMessageTracker=NE;var Gl=class{static{r(this,"RemoteConsoleImpl")}constructor(){}rawAttach(t){this._rawConnection=t}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(t){}initialize(t){}error(t){this.send(H.MessageType.Error,t)}warn(t){this.send(H.MessageType.Warning,t)}info(t){this.send(H.MessageType.Info,t)}log(t){this.send(H.MessageType.Log,t)}debug(t){this.send(H.MessageType.Debug,t)}send(t,n){this._rawConnection&&this._rawConnection.sendNotification(H.LogMessageNotification.type,{type:t,message:n}).catch(()=>{(0,H.RAL)().console.error("Sending log message failed")})}},ME=class{static{r(this,"_RemoteWindowImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}showErrorMessage(t,...n){let o={type:H.MessageType.Error,message:t,actions:n};return this.connection.sendRequest(H.ShowMessageRequest.type,o).then(LE)}showWarningMessage(t,...n){let o={type:H.MessageType.Warning,message:t,actions:n};return this.connection.sendRequest(H.ShowMessageRequest.type,o).then(LE)}showInformationMessage(t,...n){let o={type:H.MessageType.Info,message:t,actions:n};return this.connection.sendRequest(H.ShowMessageRequest.type,o).then(LE)}},zR=(0,eD.ShowDocumentFeature)((0,oe.ProgressFeature)(ME)),HR;(function(e){function t(){return new jl}r(t,"create"),e.create=t})(HR||(Re.BulkRegistration=HR={}));var jl=class{static{r(this,"BulkRegistrationImpl")}constructor(){this._registrations=[],this._registered=new Set}add(t,n){let o=Pr.string(t)?t:t.method;if(this._registered.has(o))throw new Error(`${o} is already added to this registration`);let i=OE.generateUuid();this._registrations.push({id:i,method:o,registerOptions:n||{}}),this._registered.add(o)}asRegistrationParams(){return{registrations:this._registrations}}},YR;(function(e){function t(){return new Cs(void 0,[])}r(t,"create"),e.create=t})(YR||(Re.BulkUnregistration=YR={}));var Cs=class{static{r(this,"BulkUnregistrationImpl")}constructor(t,n){this._connection=t,this._unregistrations=new Map,n.forEach(o=>{this._unregistrations.set(o.method,o)})}get isAttached(){return!!this._connection}attach(t){this._connection=t}add(t){this._unregistrations.set(t.method,t)}dispose(){let t=[];for(let o of this._unregistrations.values())t.push(o);let n={unregisterations:t};this._connection.sendRequest(H.UnregistrationRequest.type,n).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(t){let n=Pr.string(t)?t:t.method,o=this._unregistrations.get(n);if(!o)return!1;let i={unregisterations:[o]};return this._connection.sendRequest(H.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(n)},a=>{this._connection.console.info(`Un-registering request handler for ${o.id} failed.`)}),!0}},Vl=class{static{r(this,"RemoteClientImpl")}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}register(t,n,o){return t instanceof jl?this.registerMany(t):t instanceof Cs?this.registerSingle1(t,n,o):this.registerSingle2(t,n)}registerSingle1(t,n,o){let i=Pr.string(n)?n:n.method,a=OE.generateUuid(),s={registrations:[{id:a,method:i,registerOptions:o||{}}]};return t.isAttached||t.attach(this.connection),this.connection.sendRequest(H.RegistrationRequest.type,s).then(c=>(t.add({id:a,method:i}),t),c=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(c)))}registerSingle2(t,n){let o=Pr.string(t)?t:t.method,i=OE.generateUuid(),a={registrations:[{id:i,method:o,registerOptions:n||{}}]};return this.connection.sendRequest(H.RegistrationRequest.type,a).then(s=>H.Disposable.create(()=>{this.unregisterSingle(i,o).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),s=>(this.connection.console.info(`Registering request handler for ${o} failed.`),Promise.reject(s)))}unregisterSingle(t,n){let o={unregisterations:[{id:t,method:n}]};return this.connection.sendRequest(H.UnregistrationRequest.type,o).catch(()=>{this.connection.console.info(`Un-registering request handler for ${t} failed.`)})}registerMany(t){let n=t.asRegistrationParams();return this.connection.sendRequest(H.RegistrationRequest.type,n).then(()=>new Cs(this._connection,n.registrations.map(o=>({id:o.id,method:o.method}))),o=>(this.connection.console.info("Bulk registration failed."),Promise.reject(o)))}},wE=class{static{r(this,"_RemoteWorkspaceImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}applyEdit(t){function n(i){return i&&!!i.edit}r(n,"isApplyWorkspaceEditParams");let o=n(t)?t:{edit:t};return this.connection.sendRequest(H.ApplyWorkspaceEditRequest.type,o)}},KR=(0,tD.FileOperationsFeature)((0,XP.WorkspaceFoldersFeature)((0,QP.ConfigurationFeature)(wE))),Wl=class{static{r(this,"TracerImpl")}constructor(){this._trace=H.Trace.Off}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}set trace(t){this._trace=t}log(t,n){this._trace!==H.Trace.Off&&this.connection.sendNotification(H.LogTraceNotification.type,{message:t,verbose:this._trace===H.Trace.Verbose?n:void 0}).catch(()=>{})}},zl=class{static{r(this,"TelemetryImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}logEvent(t){this.connection.sendNotification(H.TelemetryEventNotification.type,t).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},Hl=class{static{r(this,"_LanguagesImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}attachWorkDoneProgress(t){return(0,oe.attachWorkDone)(this.connection,t)}attachPartialResultProgress(t,n){return(0,oe.attachPartialResult)(this.connection,n)}};Re._LanguagesImpl=Hl;var JR=(0,iD.FoldingRangeFeature)((0,lD.MonikerFeature)((0,sD.DiagnosticFeature)((0,aD.InlayHintFeature)((0,oD.InlineValueFeature)((0,nD.TypeHierarchyFeature)((0,rD.LinkedEditingRangeFeature)((0,$P.SemanticTokensFeature)((0,ZP.CallHierarchyFeature)(Hl))))))))),Yl=class{static{r(this,"_NotebooksImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}attachWorkDoneProgress(t){return(0,oe.attachWorkDone)(this.connection,t)}attachPartialResultProgress(t,n){return(0,oe.attachPartialResult)(this.connection,n)}};Re._NotebooksImpl=Yl;var QR=(0,cD.NotebookSyncFeature)(Yl);function XR(e,t){return function(n){return t(e(n))}}r(XR,"combineConsoleFeatures");Re.combineConsoleFeatures=XR;function ZR(e,t){return function(n){return t(e(n))}}r(ZR,"combineTelemetryFeatures");Re.combineTelemetryFeatures=ZR;function $R(e,t){return function(n){return t(e(n))}}r($R,"combineTracerFeatures");Re.combineTracerFeatures=$R;function ek(e,t){return function(n){return t(e(n))}}r(ek,"combineClientFeatures");Re.combineClientFeatures=ek;function tk(e,t){return function(n){return t(e(n))}}r(tk,"combineWindowFeatures");Re.combineWindowFeatures=tk;function rk(e,t){return function(n){return t(e(n))}}r(rk,"combineWorkspaceFeatures");Re.combineWorkspaceFeatures=rk;function nk(e,t){return function(n){return t(e(n))}}r(nk,"combineLanguagesFeatures");Re.combineLanguagesFeatures=nk;function ok(e,t){return function(n){return t(e(n))}}r(ok,"combineNotebooksFeatures");Re.combineNotebooksFeatures=ok;function uD(e,t){function n(i,a,s){return i&&a?s(i,a):i||a}return r(n,"combine"),{__brand:"features",console:n(e.console,t.console,XR),tracer:n(e.tracer,t.tracer,$R),telemetry:n(e.telemetry,t.telemetry,ZR),client:n(e.client,t.client,ek),window:n(e.window,t.window,tk),workspace:n(e.workspace,t.workspace,rk),languages:n(e.languages,t.languages,nk),notebooks:n(e.notebooks,t.notebooks,ok)}}r(uD,"combineFeatures");Re.combineFeatures=uD;function dD(e,t,n){let o=n&&n.console?new(n.console(Gl)):new Gl,i=e(o);o.rawAttach(i);let a=n&&n.tracer?new(n.tracer(Wl)):new Wl,s=n&&n.telemetry?new(n.telemetry(zl)):new zl,c=n&&n.client?new(n.client(Vl)):new Vl,u=n&&n.window?new(n.window(zR)):new zR,p=n&&n.workspace?new(n.workspace(KR)):new KR,g=n&&n.languages?new(n.languages(JR)):new JR,S=n&&n.notebooks?new(n.notebooks(QR)):new QR,x=[o,a,s,c,u,p,g,S];function L(b){return b instanceof Promise?b:Pr.thenable(b)?new Promise((E,w)=>{b.then(V=>E(V),V=>w(V))}):Promise.resolve(b)}r(L,"asPromise");let G,P,z,B={listen:r(()=>i.listen(),"listen"),sendRequest:r((b,...E)=>i.sendRequest(Pr.string(b)?b:b.method,...E),"sendRequest"),onRequest:r((b,E)=>i.onRequest(b,E),"onRequest"),sendNotification:r((b,E)=>{let w=Pr.string(b)?b:b.method;return i.sendNotification(w,E)},"sendNotification"),onNotification:r((b,E)=>i.onNotification(b,E),"onNotification"),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:r(b=>(P=b,{dispose:r(()=>{P=void 0},"dispose")}),"onInitialize"),onInitialized:r(b=>i.onNotification(H.InitializedNotification.type,b),"onInitialized"),onShutdown:r(b=>(G=b,{dispose:r(()=>{G=void 0},"dispose")}),"onShutdown"),onExit:r(b=>(z=b,{dispose:r(()=>{z=void 0},"dispose")}),"onExit"),get console(){return o},get telemetry(){return s},get tracer(){return a},get client(){return c},get window(){return u},get workspace(){return p},get languages(){return g},get notebooks(){return S},onDidChangeConfiguration:r(b=>i.onNotification(H.DidChangeConfigurationNotification.type,b),"onDidChangeConfiguration"),onDidChangeWatchedFiles:r(b=>i.onNotification(H.DidChangeWatchedFilesNotification.type,b),"onDidChangeWatchedFiles"),__textDocumentSync:void 0,onDidOpenTextDocument:r(b=>i.onNotification(H.DidOpenTextDocumentNotification.type,b),"onDidOpenTextDocument"),onDidChangeTextDocument:r(b=>i.onNotification(H.DidChangeTextDocumentNotification.type,b),"onDidChangeTextDocument"),onDidCloseTextDocument:r(b=>i.onNotification(H.DidCloseTextDocumentNotification.type,b),"onDidCloseTextDocument"),onWillSaveTextDocument:r(b=>i.onNotification(H.WillSaveTextDocumentNotification.type,b),"onWillSaveTextDocument"),onWillSaveTextDocumentWaitUntil:r(b=>i.onRequest(H.WillSaveTextDocumentWaitUntilRequest.type,b),"onWillSaveTextDocumentWaitUntil"),onDidSaveTextDocument:r(b=>i.onNotification(H.DidSaveTextDocumentNotification.type,b),"onDidSaveTextDocument"),sendDiagnostics:r(b=>i.sendNotification(H.PublishDiagnosticsNotification.type,b),"sendDiagnostics"),onHover:r(b=>i.onRequest(H.HoverRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),void 0)),"onHover"),onCompletion:r(b=>i.onRequest(H.CompletionRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onCompletion"),onCompletionResolve:r(b=>i.onRequest(H.CompletionResolveRequest.type,b),"onCompletionResolve"),onSignatureHelp:r(b=>i.onRequest(H.SignatureHelpRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),void 0)),"onSignatureHelp"),onDeclaration:r(b=>i.onRequest(H.DeclarationRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onDeclaration"),onDefinition:r(b=>i.onRequest(H.DefinitionRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onDefinition"),onTypeDefinition:r(b=>i.onRequest(H.TypeDefinitionRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onTypeDefinition"),onImplementation:r(b=>i.onRequest(H.ImplementationRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onImplementation"),onReferences:r(b=>i.onRequest(H.ReferencesRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onReferences"),onDocumentHighlight:r(b=>i.onRequest(H.DocumentHighlightRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onDocumentHighlight"),onDocumentSymbol:r(b=>i.onRequest(H.DocumentSymbolRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onDocumentSymbol"),onWorkspaceSymbol:r(b=>i.onRequest(H.WorkspaceSymbolRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onWorkspaceSymbol"),onWorkspaceSymbolResolve:r(b=>i.onRequest(H.WorkspaceSymbolResolveRequest.type,b),"onWorkspaceSymbolResolve"),onCodeAction:r(b=>i.onRequest(H.CodeActionRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onCodeAction"),onCodeActionResolve:r(b=>i.onRequest(H.CodeActionResolveRequest.type,(E,w)=>b(E,w)),"onCodeActionResolve"),onCodeLens:r(b=>i.onRequest(H.CodeLensRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onCodeLens"),onCodeLensResolve:r(b=>i.onRequest(H.CodeLensResolveRequest.type,(E,w)=>b(E,w)),"onCodeLensResolve"),onDocumentFormatting:r(b=>i.onRequest(H.DocumentFormattingRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),void 0)),"onDocumentFormatting"),onDocumentRangeFormatting:r(b=>i.onRequest(H.DocumentRangeFormattingRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),void 0)),"onDocumentRangeFormatting"),onDocumentOnTypeFormatting:r(b=>i.onRequest(H.DocumentOnTypeFormattingRequest.type,(E,w)=>b(E,w)),"onDocumentOnTypeFormatting"),onRenameRequest:r(b=>i.onRequest(H.RenameRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),void 0)),"onRenameRequest"),onPrepareRename:r(b=>i.onRequest(H.PrepareRenameRequest.type,(E,w)=>b(E,w)),"onPrepareRename"),onDocumentLinks:r(b=>i.onRequest(H.DocumentLinkRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onDocumentLinks"),onDocumentLinkResolve:r(b=>i.onRequest(H.DocumentLinkResolveRequest.type,(E,w)=>b(E,w)),"onDocumentLinkResolve"),onDocumentColor:r(b=>i.onRequest(H.DocumentColorRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onDocumentColor"),onColorPresentation:r(b=>i.onRequest(H.ColorPresentationRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onColorPresentation"),onFoldingRanges:r(b=>i.onRequest(H.FoldingRangeRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onFoldingRanges"),onSelectionRanges:r(b=>i.onRequest(H.SelectionRangeRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),(0,oe.attachPartialResult)(i,E))),"onSelectionRanges"),onExecuteCommand:r(b=>i.onRequest(H.ExecuteCommandRequest.type,(E,w)=>b(E,w,(0,oe.attachWorkDone)(i,E),void 0)),"onExecuteCommand"),dispose:r(()=>i.dispose(),"dispose")};for(let b of x)b.attach(B);return i.onRequest(H.InitializeRequest.type,b=>{t.initialize(b),Pr.string(b.trace)&&(a.trace=H.Trace.fromString(b.trace));for(let E of x)E.initialize(b.capabilities);if(P){let E=P(b,new H.CancellationTokenSource().token,(0,oe.attachWorkDone)(i,b),void 0);return L(E).then(w=>{if(w instanceof H.ResponseError)return w;let V=w;V||(V={capabilities:{}});let le=V.capabilities;le||(le={},V.capabilities=le),le.textDocumentSync===void 0||le.textDocumentSync===null?le.textDocumentSync=Pr.number(B.__textDocumentSync)?B.__textDocumentSync:H.TextDocumentSyncKind.None:!Pr.number(le.textDocumentSync)&&!Pr.number(le.textDocumentSync.change)&&(le.textDocumentSync.change=Pr.number(B.__textDocumentSync)?B.__textDocumentSync:H.TextDocumentSyncKind.None);for(let Me of x)Me.fillServerCapabilities(le);return V})}else{let E={capabilities:{textDocumentSync:H.TextDocumentSyncKind.None}};for(let w of x)w.fillServerCapabilities(E.capabilities);return E}}),i.onRequest(H.ShutdownRequest.type,()=>{if(t.shutdownReceived=!0,G)return G(new H.CancellationTokenSource().token)}),i.onNotification(H.ExitNotification.type,()=>{try{z&&z()}finally{t.shutdownReceived?t.exit(0):t.exit(1)}}),i.onNotification(H.SetTraceNotification.type,b=>{a.trace=H.Trace.fromString(b.value)}),B}r(dD,"createConnection");Re.createConnection=dD});var ik=K(Sr=>{"use strict";Object.defineProperty(Sr,"__esModule",{value:!0});Sr.resolveModulePath=Sr.FileSystem=Sr.resolveGlobalYarnPath=Sr.resolveGlobalNodePath=Sr.resolve=Sr.uriToFilePath=void 0;var fD=require("url"),Zr=require("path"),IE=require("fs"),qE=require("child_process");function pD(e){let t=fD.parse(e);if(t.protocol!=="file:"||!t.path)return;let n=t.path.split("/");for(var o=0,i=n.length;o<i;o++)n[o]=decodeURIComponent(n[o]);if(process.platform==="win32"&&n.length>1){let a=n[0],s=n[1];a.length===0&&s.length>1&&s[1]===":"&&n.shift()}return Zr.normalize(n.join("/"))}r(pD,"uriToFilePath");Sr.uriToFilePath=pD;function PE(){return process.platform==="win32"}r(PE,"isWindows");function Kl(e,t,n,o){let i="NODE_PATH",a=["var p = process;","p.on('message',function(m){","if(m.c==='e'){","p.exit(0);","}","else if(m.c==='rs'){","try{","var r=require.resolve(m.a);","p.send({c:'r',s:true,r:r});","}","catch(err){","p.send({c:'r',s:false});","}","}","});"].join("");return new Promise((s,c)=>{let u=process.env,p=Object.create(null);Object.keys(u).forEach(g=>p[g]=u[g]),t&&IE.existsSync(t)&&(p[i]?p[i]=t+Zr.delimiter+p[i]:p[i]=t,o&&o(`NODE_PATH value is: ${p[i]}`)),p.ELECTRON_RUN_AS_NODE="1";try{let g=(0,qE.fork)("",[],{cwd:n,env:p,execArgv:["-e",a]});if(g.pid===void 0){c(new Error(`Starting process to resolve node module  ${e} failed`));return}g.on("error",x=>{c(x)}),g.on("message",x=>{x.c==="r"&&(g.send({c:"e"}),x.s?s(x.r):c(new Error(`Failed to resolve module: ${e}`)))});let S={c:"rs",a:e};g.send(S)}catch(g){c(g)}})}r(Kl,"resolve");Sr.resolve=Kl;function DE(e){let t="npm",n=Object.create(null);Object.keys(process.env).forEach(a=>n[a]=process.env[a]),n.NO_UPDATE_NOTIFIER="true";let o={encoding:"utf8",env:n};PE()&&(t="npm.cmd",o.shell=!0);let i=r(()=>{},"handler");try{process.on("SIGPIPE",i);let a=(0,qE.spawnSync)(t,["config","get","prefix"],o).stdout;if(!a){e&&e("'npm config get prefix' didn't return a value.");return}let s=a.trim();return e&&e(`'npm config get prefix' value is: ${s}`),s.length>0?PE()?Zr.join(s,"node_modules"):Zr.join(s,"lib","node_modules"):void 0}catch{return}finally{process.removeListener("SIGPIPE",i)}}r(DE,"resolveGlobalNodePath");Sr.resolveGlobalNodePath=DE;function mD(e){let t="yarn",n={encoding:"utf8"};PE()&&(t="yarn.cmd",n.shell=!0);let o=r(()=>{},"handler");try{process.on("SIGPIPE",o);let i=(0,qE.spawnSync)(t,["global","dir","--json"],n),a=i.stdout;if(!a){e&&(e("'yarn global dir' didn't return a value."),i.stderr&&e(i.stderr));return}let s=a.trim().split(/\r?\n/);for(let c of s)try{let u=JSON.parse(c);if(u.type==="log")return Zr.join(u.data,"node_modules")}catch{}return}catch{return}finally{process.removeListener("SIGPIPE",o)}}r(mD,"resolveGlobalYarnPath");Sr.resolveGlobalYarnPath=mD;var BE;(function(e){let t;function n(){return t!==void 0||(process.platform==="win32"?t=!1:t=!IE.existsSync(__filename.toUpperCase())||!IE.existsSync(__filename.toLowerCase())),t}r(n,"isCaseSensitive"),e.isCaseSensitive=n;function o(i,a){return n()?Zr.normalize(a).indexOf(Zr.normalize(i))===0:Zr.normalize(a).toLowerCase().indexOf(Zr.normalize(i).toLowerCase())===0}r(o,"isParent"),e.isParent=o})(BE||(Sr.FileSystem=BE={}));function hD(e,t,n,o){return n?(Zr.isAbsolute(n)||(n=Zr.join(e,n)),Kl(t,n,n,o).then(i=>BE.isParent(n,i)?i:Promise.reject(new Error(`Failed to load ${t} from node path location.`))).then(void 0,i=>Kl(t,DE(o),e,o))):Kl(t,DE(o),e,o)}r(hD,"resolveModulePath");Sr.resolveModulePath=hD});var GE=K((RH,ak)=>{"use strict";ak.exports=ht()});var sk=K(Jl=>{"use strict";Object.defineProperty(Jl,"__esModule",{value:!0});Jl.InlineCompletionFeature=void 0;var gD=ht(),TD=r(e=>class extends e{get inlineCompletion(){return{on:r(t=>this.connection.onRequest(gD.InlineCompletionRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n))),"on")}}},"InlineCompletionFeature");Jl.InlineCompletionFeature=TD});var uk=K(Zt=>{"use strict";var ED=Zt&&Zt.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),lk=Zt&&Zt.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&ED(t,e,n)};Object.defineProperty(Zt,"__esModule",{value:!0});Zt.ProposedFeatures=Zt.NotebookDocuments=Zt.TextDocuments=Zt.SemanticTokensBuilder=void 0;var SD=RE();Object.defineProperty(Zt,"SemanticTokensBuilder",{enumerable:!0,get:r(function(){return SD.SemanticTokensBuilder},"get")});var yD=sk();lk(ht(),Zt);var _D=vE();Object.defineProperty(Zt,"TextDocuments",{enumerable:!0,get:r(function(){return _D.TextDocuments},"get")});var bD=CE();Object.defineProperty(Zt,"NotebookDocuments",{enumerable:!0,get:r(function(){return bD.NotebookDocuments},"get")});lk(FE(),Zt);var ck;(function(e){e.all={__brand:"features",languages:yD.InlineCompletionFeature}})(ck||(Zt.ProposedFeatures=ck={}))});var gk=K(Dr=>{"use strict";var RD=Dr&&Dr.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),mk=Dr&&Dr.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&RD(t,e,n)};Object.defineProperty(Dr,"__esModule",{value:!0});Dr.createConnection=Dr.Files=void 0;var dk=require("node:util"),jE=Fc(),kD=FE(),Ls=ik(),Qo=GE();mk(GE(),Dr);mk(uk(),Dr);var fk;(function(e){e.uriToFilePath=Ls.uriToFilePath,e.resolveGlobalNodePath=Ls.resolveGlobalNodePath,e.resolveGlobalYarnPath=Ls.resolveGlobalYarnPath,e.resolve=Ls.resolve,e.resolveModulePath=Ls.resolveModulePath})(fk||(Dr.Files=fk={}));var pk;function Ql(){if(pk!==void 0)try{pk.end()}catch{}}r(Ql,"endProtocolConnection");var Ni=!1,hk;function xD(){let e="--clientProcessId";function t(n){try{let o=parseInt(n);isNaN(o)||(hk=setInterval(()=>{try{process.kill(o,0)}catch{Ql(),process.exit(Ni?0:1)}},3e3))}catch{}}r(t,"runTimer");for(let n=2;n<process.argv.length;n++){let o=process.argv[n];if(o===e&&n+1<process.argv.length){t(process.argv[n+1]);return}else{let i=o.split("=");i[0]===e&&t(i[1])}}}r(xD,"setupExitTimer");xD();var AD={initialize:r(e=>{let t=e.processId;jE.number(t)&&hk===void 0&&setInterval(()=>{try{process.kill(t,0)}catch{process.exit(Ni?0:1)}},3e3)},"initialize"),get shutdownReceived(){return Ni},set shutdownReceived(e){Ni=e},exit:r(e=>{Ql(),process.exit(e)},"exit")};function vD(e,t,n,o){let i,a,s,c;return e!==void 0&&e.__brand==="features"&&(i=e,e=t,t=n,n=o),Qo.ConnectionStrategy.is(e)||Qo.ConnectionOptions.is(e)?c=e:(a=e,s=t,c=n),UD(a,s,c,i)}r(vD,"createConnection");Dr.createConnection=vD;function UD(e,t,n,o){let i=!1;if(!e&&!t&&process.argv.length>2){let u,p,g=process.argv.slice(2);for(let S=0;S<g.length;S++){let x=g[S];if(x==="--node-ipc"){e=new Qo.IPCMessageReader(process),t=new Qo.IPCMessageWriter(process);break}else if(x==="--stdio"){i=!0,e=process.stdin,t=process.stdout;break}else if(x==="--socket"){u=parseInt(g[S+1]);break}else if(x==="--pipe"){p=g[S+1];break}else{var a=x.split("=");if(a[0]==="--socket"){u=parseInt(a[1]);break}else if(a[0]==="--pipe"){p=a[1];break}}}if(u){let S=(0,Qo.createServerSocketTransport)(u);e=S[0],t=S[1]}else if(p){let S=(0,Qo.createServerPipeTransport)(p);e=S[0],t=S[1]}}var s="Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";if(!e)throw new Error("Connection input stream is not set. "+s);if(!t)throw new Error("Connection output stream is not set. "+s);if(jE.func(e.read)&&jE.func(e.on)){let u=e;u.on("end",()=>{Ql(),process.exit(Ni?0:1)}),u.on("close",()=>{Ql(),process.exit(Ni?0:1)})}let c=r(u=>{let p=(0,Qo.createProtocolConnection)(e,t,u,n);return i&&CD(u),p},"connectionFactory");return(0,kD.createConnection)(c,AD,o)}r(UD,"_createConnection");function CD(e){function t(o){return o.map(i=>typeof i=="string"?i:(0,dk.inspect)(i)).join(" ")}r(t,"serialize");let n=new Map;console.assert=r(function(i,...a){if(!i)if(a.length===0)e.error("Assertion failed");else{let[s,...c]=a;e.error(`Assertion failed: ${s} ${t(c)}`)}},"assert"),console.count=r(function(i="default"){let a=String(i),s=n.get(a)??0;s+=1,n.set(a,s),e.log(`${a}: ${a}`)},"count"),console.countReset=r(function(i){i===void 0?n.clear():n.delete(String(i))},"countReset"),console.debug=r(function(...i){e.log(t(i))},"debug"),console.dir=r(function(i,a){e.log((0,dk.inspect)(i,a))},"dir"),console.log=r(function(...i){e.log(t(i))},"log"),console.error=r(function(...i){e.error(t(i))},"error"),console.trace=r(function(...i){let a=new Error().stack.replace(/(.+\n){2}/,""),s="Trace";i.length!==0&&(s+=`: ${t(i)}`),e.log(`${s}
${a}`)},"trace"),console.warn=r(function(...i){e.warn(t(i))},"warn")}r(CD,"patchConsole")});var Ek=K((OH,Tk)=>{"use strict";Tk.exports=gk()});var o3={};fI(o3,{documents:()=>ds});module.exports=mI(o3);var qo=pI(Ek(),1);var Xl=class e{static{r(this,"FullTextDocument")}constructor(t,n,o,i){this._uri=t,this._languageId=n,this._version=o,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(t){if(t){let n=this.offsetAt(t.start),o=this.offsetAt(t.end);return this._content.substring(n,o)}return this._content}update(t,n){for(let o of t)if(e.isIncremental(o)){let i=_k(o.range),a=this.offsetAt(i.start),s=this.offsetAt(i.end);this._content=this._content.substring(0,a)+o.text+this._content.substring(s,this._content.length);let c=Math.max(i.start.line,0),u=Math.max(i.end.line,0),p=this._lineOffsets,g=Sk(o.text,!1,a);if(u-c===g.length)for(let x=0,L=g.length;x<L;x++)p[x+c+1]=g[x];else g.length<1e4?p.splice(c+1,u-c,...g):this._lineOffsets=p=p.slice(0,c+1).concat(g,p.slice(u+1));let S=o.text.length-(s-a);if(S!==0)for(let x=c+1+g.length,L=p.length;x<L;x++)p[x]=p[x]+S}else if(e.isFull(o))this._content=o.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=n}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=Sk(this._content,!0)),this._lineOffsets}positionAt(t){t=Math.max(Math.min(t,this._content.length),0);let n=this.getLineOffsets(),o=0,i=n.length;if(i===0)return{line:0,character:t};for(;o<i;){let s=Math.floor((o+i)/2);n[s]>t?i=s:o=s+1}let a=o-1;return t=this.ensureBeforeEOL(t,n[a]),{line:a,character:t-n[a]}}offsetAt(t){let n=this.getLineOffsets();if(t.line>=n.length)return this._content.length;if(t.line<0)return 0;let o=n[t.line];if(t.character<=0)return o;let i=t.line+1<n.length?n[t.line+1]:this._content.length,a=Math.min(o+t.character,i);return this.ensureBeforeEOL(a,o)}ensureBeforeEOL(t,n){for(;t>n&&yk(this._content.charCodeAt(t-1));)t--;return t}get lineCount(){return this.getLineOffsets().length}static isIncremental(t){let n=t;return n!=null&&typeof n.text=="string"&&n.range!==void 0&&(n.rangeLength===void 0||typeof n.rangeLength=="number")}static isFull(t){let n=t;return n!=null&&typeof n.text=="string"&&n.range===void 0&&n.rangeLength===void 0}},Zl;(function(e){function t(i,a,s,c){return new Xl(i,a,s,c)}r(t,"create"),e.create=t;function n(i,a,s){if(i instanceof Xl)return i.update(a,s),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}r(n,"update"),e.update=n;function o(i,a){let s=i.getText(),c=VE(a.map(LD),(g,S)=>{let x=g.range.start.line-S.range.start.line;return x===0?g.range.start.character-S.range.start.character:x}),u=0,p=[];for(let g of c){let S=i.offsetAt(g.range.start);if(S<u)throw new Error("Overlapping edit");S>u&&p.push(s.substring(u,S)),g.newText.length&&p.push(g.newText),u=i.offsetAt(g.range.end)}return p.push(s.substr(u)),p.join("")}r(o,"applyEdits"),e.applyEdits=o})(Zl||(Zl={}));function VE(e,t){if(e.length<=1)return e;let n=e.length/2|0,o=e.slice(0,n),i=e.slice(n);VE(o,t),VE(i,t);let a=0,s=0,c=0;for(;a<o.length&&s<i.length;)t(o[a],i[s])<=0?e[c++]=o[a++]:e[c++]=i[s++];for(;a<o.length;)e[c++]=o[a++];for(;s<i.length;)e[c++]=i[s++];return e}r(VE,"mergeSort");function Sk(e,t,n=0){let o=t?[n]:[];for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);yk(a)&&(a===13&&i+1<e.length&&e.charCodeAt(i+1)===10&&i++,o.push(n+i+1))}return o}r(Sk,"computeLineOffsets");function yk(e){return e===13||e===10}r(yk,"isEOL");function _k(e){let t=e.start,n=e.end;return t.line>n.line||t.line===n.line&&t.character>n.character?{start:n,end:t}:e}r(_k,"getWellformedRange");function LD(e){let t=_k(e.range);return t!==e.range?{newText:e.newText,range:t}:e}r(LD,"getWellformedEdit");function OD(e){let t=[],n=/code\s*=\s*"""\s*\n([\s\S]*?)\n\s*"""/g,o;for(;(o=n.exec(e))!==null;){let i=o[1],a=o.index+o[0].indexOf(o[1]),s=a+i.length;t.push({content:i,offset:a,end:s})}return t}r(OD,"extractEmbeddedJS");function $l(e,t){let n=OD(t);for(let o of n)if(e>=o.offset&&e<=o.end){let i=e-o.offset;return{region:o,jsOffset:i}}return null}r($l,"mapToVirtualJS");var ND={addon:"addon",agent:"agent",agent_trigger:"agent_trigger",api_group:"api_group",branch:"branch",function:"cfn",mcp_server:"mcp_server",mcp_server_trigger:"mcp_server_trigger",middleware:"middleware",query:"api",realtime_trigger:"realtime_trigger",table:"db",table_trigger:"table_trigger",task:"task",tool:"tool",workflow_test:"workflow_test",workspace:"workspace",workspace_trigger:"workspace_trigger"},MD=/^(?:\s|\/\/[^\n]*\n)*(\w+)/;function gn(e){let t=e.match(MD)?.[1];return ND[t]||"cfn"}r(gn,"getSchemeFromContent");var wD=typeof global=="object"&&global&&global.Object===Object&&global,eu=wD;var FD=typeof self=="object"&&self&&self.Object===Object&&self,ID=eu||FD||Function("return this")(),At=ID;var PD=At.Symbol,Bt=PD;var bk=Object.prototype,DD=bk.hasOwnProperty,BD=bk.toString,Os=Bt?Bt.toStringTag:void 0;function qD(e){var t=DD.call(e,Os),n=e[Os];try{e[Os]=void 0;var o=!0}catch{}var i=BD.call(e);return o&&(t?e[Os]=n:delete e[Os]),i}r(qD,"getRawTag");var Rk=qD;var GD=Object.prototype,jD=GD.toString;function VD(e){return jD.call(e)}r(VD,"objectToString");var kk=VD;var WD="[object Null]",zD="[object Undefined]",xk=Bt?Bt.toStringTag:void 0;function HD(e){return e==null?e===void 0?zD:WD:xk&&xk in Object(e)?Rk(e):kk(e)}r(HD,"baseGetTag");var zt=HD;function YD(e){return e!=null&&typeof e=="object"}r(YD,"isObjectLike");var et=YD;var KD="[object Symbol]";function JD(e){return typeof e=="symbol"||et(e)&&zt(e)==KD}r(JD,"isSymbol");var so=JD;function QD(e,t){for(var n=-1,o=e==null?0:e.length,i=Array(o);++n<o;)i[n]=t(e[n],n,e);return i}r(QD,"arrayMap");var Tn=QD;var XD=Array.isArray,Y=XD;var ZD=1/0,Ak=Bt?Bt.prototype:void 0,vk=Ak?Ak.toString:void 0;function Uk(e){if(typeof e=="string")return e;if(Y(e))return Tn(e,Uk)+"";if(so(e))return vk?vk.call(e):"";var t=e+"";return t=="0"&&1/e==-ZD?"-0":t}r(Uk,"baseToString");var Ck=Uk;var $D=/\s/;function e1(e){for(var t=e.length;t--&&$D.test(e.charAt(t)););return t}r(e1,"trimmedEndIndex");var Lk=e1;var t1=/^\s+/;function r1(e){return e&&e.slice(0,Lk(e)+1).replace(t1,"")}r(r1,"baseTrim");var Ok=r1;function n1(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}r(n1,"isObject");var tt=n1;var Nk=NaN,o1=/^[-+]0x[0-9a-f]+$/i,i1=/^0b[01]+$/i,a1=/^0o[0-7]+$/i,s1=parseInt;function c1(e){if(typeof e=="number")return e;if(so(e))return Nk;if(tt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=tt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ok(e);var n=i1.test(e);return n||a1.test(e)?s1(e.slice(2),n?2:8):o1.test(e)?Nk:+e}r(c1,"toNumber");var Mk=c1;var wk=1/0,l1=17976931348623157e292;function u1(e){if(!e)return e===0?e:0;if(e=Mk(e),e===wk||e===-wk){var t=e<0?-1:1;return t*l1}return e===e?e:0}r(u1,"toFinite");var Fk=u1;function d1(e){var t=Fk(e),n=t%1;return t===t?n?t-n:t:0}r(d1,"toInteger");var En=d1;function f1(e){return e}r(f1,"identity");var Br=f1;var p1="[object AsyncFunction]",m1="[object Function]",h1="[object GeneratorFunction]",g1="[object Proxy]";function T1(e){if(!tt(e))return!1;var t=zt(e);return t==m1||t==h1||t==p1||t==g1}r(T1,"isFunction");var cr=T1;var E1=At["__core-js_shared__"],tu=E1;var Ik=(function(){var e=/[^.]+$/.exec(tu&&tu.keys&&tu.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})();function S1(e){return!!Ik&&Ik in e}r(S1,"isMasked");var Pk=S1;var y1=Function.prototype,_1=y1.toString;function b1(e){if(e!=null){try{return _1.call(e)}catch{}try{return e+""}catch{}}return""}r(b1,"toSource");var In=b1;var R1=/[\\^$.*+?()[\]{}|]/g,k1=/^\[object .+?Constructor\]$/,x1=Function.prototype,A1=Object.prototype,v1=x1.toString,U1=A1.hasOwnProperty,C1=RegExp("^"+v1.call(U1).replace(R1,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function L1(e){if(!tt(e)||Pk(e))return!1;var t=cr(e)?C1:k1;return t.test(In(e))}r(L1,"baseIsNative");var Dk=L1;function O1(e,t){return e?.[t]}r(O1,"getValue");var Bk=O1;function N1(e,t){var n=Bk(e,t);return Dk(n)?n:void 0}r(N1,"getNative");var yr=N1;var M1=yr(At,"WeakMap"),ru=M1;var qk=Object.create,w1=(function(){function e(){}return r(e,"object"),function(t){if(!tt(t))return{};if(qk)return qk(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}})(),Gk=w1;function F1(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}r(F1,"apply");var jk=F1;function I1(){}r(I1,"noop");var rt=I1;function P1(e,t){var n=-1,o=e.length;for(t||(t=Array(o));++n<o;)t[n]=e[n];return t}r(P1,"copyArray");var Vk=P1;var D1=800,B1=16,q1=Date.now;function G1(e){var t=0,n=0;return function(){var o=q1(),i=B1-(o-n);if(n=o,i>0){if(++t>=D1)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}r(G1,"shortOut");var Wk=G1;function j1(e){return function(){return e}}r(j1,"constant");var zk=j1;var V1=(function(){try{var e=yr(Object,"defineProperty");return e({},"",{}),e}catch{}})(),Mi=V1;var W1=Mi?function(e,t){return Mi(e,"toString",{configurable:!0,enumerable:!1,value:zk(t),writable:!0})}:Br,Hk=W1;var z1=Wk(Hk),Yk=z1;function H1(e,t){for(var n=-1,o=e==null?0:e.length;++n<o&&t(e[n],n,e)!==!1;);return e}r(H1,"arrayEach");var nu=H1;function Y1(e,t,n,o){for(var i=e.length,a=n+(o?1:-1);o?a--:++a<i;)if(t(e[a],a,e))return a;return-1}r(Y1,"baseFindIndex");var ou=Y1;function K1(e){return e!==e}r(K1,"baseIsNaN");var Kk=K1;function J1(e,t,n){for(var o=n-1,i=e.length;++o<i;)if(e[o]===t)return o;return-1}r(J1,"strictIndexOf");var Jk=J1;function Q1(e,t,n){return t===t?Jk(e,t,n):ou(e,Kk,n)}r(Q1,"baseIndexOf");var wi=Q1;function X1(e,t){var n=e==null?0:e.length;return!!n&&wi(e,t,0)>-1}r(X1,"arrayIncludes");var iu=X1;var Z1=9007199254740991,$1=/^(?:0|[1-9]\d*)$/;function e0(e,t){var n=typeof e;return t=t??Z1,!!t&&(n=="number"||n!="symbol"&&$1.test(e))&&e>-1&&e%1==0&&e<t}r(e0,"isIndex");var co=e0;function t0(e,t,n){t=="__proto__"&&Mi?Mi(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}r(t0,"baseAssignValue");var Fi=t0;function r0(e,t){return e===t||e!==e&&t!==t}r(r0,"eq");var Sn=r0;var n0=Object.prototype,o0=n0.hasOwnProperty;function i0(e,t,n){var o=e[t];(!(o0.call(e,t)&&Sn(o,n))||n===void 0&&!(t in e))&&Fi(e,t,n)}r(i0,"assignValue");var lo=i0;function a0(e,t,n,o){var i=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var c=t[a],u=o?o(n[c],e[c],c,n,e):void 0;u===void 0&&(u=e[c]),i?Fi(n,c,u):lo(n,c,u)}return n}r(a0,"copyObject");var yn=a0;var Qk=Math.max;function s0(e,t,n){return t=Qk(t===void 0?e.length-1:t,0),function(){for(var o=arguments,i=-1,a=Qk(o.length-t,0),s=Array(a);++i<a;)s[i]=o[t+i];i=-1;for(var c=Array(t+1);++i<t;)c[i]=o[i];return c[t]=n(s),jk(e,this,c)}}r(s0,"overRest");var Xk=s0;function c0(e,t){return Yk(Xk(e,t,Br),e+"")}r(c0,"baseRest");var uo=c0;var l0=9007199254740991;function u0(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=l0}r(u0,"isLength");var Ii=u0;function d0(e){return e!=null&&Ii(e.length)&&!cr(e)}r(d0,"isArrayLike");var vt=d0;function f0(e,t,n){if(!tt(n))return!1;var o=typeof t;return(o=="number"?vt(n)&&co(t,n.length):o=="string"&&t in n)?Sn(n[t],e):!1}r(f0,"isIterateeCall");var fo=f0;function p0(e){return uo(function(t,n){var o=-1,i=n.length,a=i>1?n[i-1]:void 0,s=i>2?n[2]:void 0;for(a=e.length>3&&typeof a=="function"?(i--,a):void 0,s&&fo(n[0],n[1],s)&&(a=i<3?void 0:a,i=1),t=Object(t);++o<i;){var c=n[o];c&&e(t,c,o,a)}return t})}r(p0,"createAssigner");var Zk=p0;var m0=Object.prototype;function h0(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||m0;return e===n}r(h0,"isPrototype");var _n=h0;function g0(e,t){for(var n=-1,o=Array(e);++n<e;)o[n]=t(n);return o}r(g0,"baseTimes");var $k=g0;var T0="[object Arguments]";function E0(e){return et(e)&&zt(e)==T0}r(E0,"baseIsArguments");var WE=E0;var ex=Object.prototype,S0=ex.hasOwnProperty,y0=ex.propertyIsEnumerable,_0=WE((function(){return arguments})())?WE:function(e){return et(e)&&S0.call(e,"callee")&&!y0.call(e,"callee")},po=_0;function b0(){return!1}r(b0,"stubFalse");var tx=b0;var ox=typeof exports=="object"&&exports&&!exports.nodeType&&exports,rx=ox&&typeof module=="object"&&module&&!module.nodeType&&module,R0=rx&&rx.exports===ox,nx=R0?At.Buffer:void 0,k0=nx?nx.isBuffer:void 0,x0=k0||tx,Pn=x0;var A0="[object Arguments]",v0="[object Array]",U0="[object Boolean]",C0="[object Date]",L0="[object Error]",O0="[object Function]",N0="[object Map]",M0="[object Number]",w0="[object Object]",F0="[object RegExp]",I0="[object Set]",P0="[object String]",D0="[object WeakMap]",B0="[object ArrayBuffer]",q0="[object DataView]",G0="[object Float32Array]",j0="[object Float64Array]",V0="[object Int8Array]",W0="[object Int16Array]",z0="[object Int32Array]",H0="[object Uint8Array]",Y0="[object Uint8ClampedArray]",K0="[object Uint16Array]",J0="[object Uint32Array]",Ve={};Ve[G0]=Ve[j0]=Ve[V0]=Ve[W0]=Ve[z0]=Ve[H0]=Ve[Y0]=Ve[K0]=Ve[J0]=!0;Ve[A0]=Ve[v0]=Ve[B0]=Ve[U0]=Ve[q0]=Ve[C0]=Ve[L0]=Ve[O0]=Ve[N0]=Ve[M0]=Ve[w0]=Ve[F0]=Ve[I0]=Ve[P0]=Ve[D0]=!1;function Q0(e){return et(e)&&Ii(e.length)&&!!Ve[zt(e)]}r(Q0,"baseIsTypedArray");var ix=Q0;function X0(e){return function(t){return e(t)}}r(X0,"baseUnary");var bn=X0;var ax=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ns=ax&&typeof module=="object"&&module&&!module.nodeType&&module,Z0=Ns&&Ns.exports===ax,zE=Z0&&eu.process,$0=(function(){try{var e=Ns&&Ns.require&&Ns.require("util").types;return e||zE&&zE.binding&&zE.binding("util")}catch{}})(),qr=$0;var sx=qr&&qr.isTypedArray,eB=sx?bn(sx):ix,Pi=eB;var tB=Object.prototype,rB=tB.hasOwnProperty;function nB(e,t){var n=Y(e),o=!n&&po(e),i=!n&&!o&&Pn(e),a=!n&&!o&&!i&&Pi(e),s=n||o||i||a,c=s?$k(e.length,String):[],u=c.length;for(var p in e)(t||rB.call(e,p))&&!(s&&(p=="length"||i&&(p=="offset"||p=="parent")||a&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||co(p,u)))&&c.push(p);return c}r(nB,"arrayLikeKeys");var au=nB;function oB(e,t){return function(n){return e(t(n))}}r(oB,"overArg");var su=oB;var iB=su(Object.keys,Object),cx=iB;var aB=Object.prototype,sB=aB.hasOwnProperty;function cB(e){if(!_n(e))return cx(e);var t=[];for(var n in Object(e))sB.call(e,n)&&n!="constructor"&&t.push(n);return t}r(cB,"baseKeys");var cu=cB;function lB(e){return vt(e)?au(e):cu(e)}r(lB,"keys");var Ae=lB;var uB=Object.prototype,dB=uB.hasOwnProperty,fB=Zk(function(e,t){if(_n(t)||vt(t)){yn(t,Ae(t),e);return}for(var n in t)dB.call(t,n)&&lo(e,n,t[n])}),Ht=fB;function pB(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}r(pB,"nativeKeysIn");var lx=pB;var mB=Object.prototype,hB=mB.hasOwnProperty;function gB(e){if(!tt(e))return lx(e);var t=_n(e),n=[];for(var o in e)o=="constructor"&&(t||!hB.call(e,o))||n.push(o);return n}r(gB,"baseKeysIn");var ux=gB;function TB(e){return vt(e)?au(e,!0):ux(e)}r(TB,"keysIn");var mo=TB;var EB=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,SB=/^\w*$/;function yB(e,t){if(Y(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||so(e)?!0:SB.test(e)||!EB.test(e)||t!=null&&e in Object(t)}r(yB,"isKey");var Di=yB;var _B=yr(Object,"create"),Dn=_B;function bB(){this.__data__=Dn?Dn(null):{},this.size=0}r(bB,"hashClear");var dx=bB;function RB(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}r(RB,"hashDelete");var fx=RB;var kB="__lodash_hash_undefined__",xB=Object.prototype,AB=xB.hasOwnProperty;function vB(e){var t=this.__data__;if(Dn){var n=t[e];return n===kB?void 0:n}return AB.call(t,e)?t[e]:void 0}r(vB,"hashGet");var px=vB;var UB=Object.prototype,CB=UB.hasOwnProperty;function LB(e){var t=this.__data__;return Dn?t[e]!==void 0:CB.call(t,e)}r(LB,"hashHas");var mx=LB;var OB="__lodash_hash_undefined__";function NB(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Dn&&t===void 0?OB:t,this}r(NB,"hashSet");var hx=NB;function Bi(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}r(Bi,"Hash");Bi.prototype.clear=dx;Bi.prototype.delete=fx;Bi.prototype.get=px;Bi.prototype.has=mx;Bi.prototype.set=hx;var HE=Bi;function MB(){this.__data__=[],this.size=0}r(MB,"listCacheClear");var gx=MB;function wB(e,t){for(var n=e.length;n--;)if(Sn(e[n][0],t))return n;return-1}r(wB,"assocIndexOf");var ho=wB;var FB=Array.prototype,IB=FB.splice;function PB(e){var t=this.__data__,n=ho(t,e);if(n<0)return!1;var o=t.length-1;return n==o?t.pop():IB.call(t,n,1),--this.size,!0}r(PB,"listCacheDelete");var Tx=PB;function DB(e){var t=this.__data__,n=ho(t,e);return n<0?void 0:t[n][1]}r(DB,"listCacheGet");var Ex=DB;function BB(e){return ho(this.__data__,e)>-1}r(BB,"listCacheHas");var Sx=BB;function qB(e,t){var n=this.__data__,o=ho(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}r(qB,"listCacheSet");var yx=qB;function qi(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}r(qi,"ListCache");qi.prototype.clear=gx;qi.prototype.delete=Tx;qi.prototype.get=Ex;qi.prototype.has=Sx;qi.prototype.set=yx;var go=qi;var GB=yr(At,"Map"),To=GB;function jB(){this.size=0,this.__data__={hash:new HE,map:new(To||go),string:new HE}}r(jB,"mapCacheClear");var _x=jB;function VB(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}r(VB,"isKeyable");var bx=VB;function WB(e,t){var n=e.__data__;return bx(t)?n[typeof t=="string"?"string":"hash"]:n.map}r(WB,"getMapData");var Eo=WB;function zB(e){var t=Eo(this,e).delete(e);return this.size-=t?1:0,t}r(zB,"mapCacheDelete");var Rx=zB;function HB(e){return Eo(this,e).get(e)}r(HB,"mapCacheGet");var kx=HB;function YB(e){return Eo(this,e).has(e)}r(YB,"mapCacheHas");var xx=YB;function KB(e,t){var n=Eo(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}r(KB,"mapCacheSet");var Ax=KB;function Gi(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}r(Gi,"MapCache");Gi.prototype.clear=_x;Gi.prototype.delete=Rx;Gi.prototype.get=kx;Gi.prototype.has=xx;Gi.prototype.set=Ax;var Xo=Gi;var JB="Expected a function";function YE(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(JB);var n=r(function(){var o=arguments,i=t?t.apply(this,o):o[0],a=n.cache;if(a.has(i))return a.get(i);var s=e.apply(this,o);return n.cache=a.set(i,s)||a,s},"memoized");return n.cache=new(YE.Cache||Xo),n}r(YE,"memoize");YE.Cache=Xo;var vx=YE;var QB=500;function XB(e){var t=vx(e,function(o){return n.size===QB&&n.clear(),o}),n=t.cache;return t}r(XB,"memoizeCapped");var Ux=XB;var ZB=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$B=/\\(\\)?/g,eq=Ux(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(ZB,function(n,o,i,a){t.push(i?a.replace($B,"$1"):o||n)}),t}),Cx=eq;function tq(e){return e==null?"":Ck(e)}r(tq,"toString");var Lx=tq;function rq(e,t){return Y(e)?e:Di(e,t)?[e]:Cx(Lx(e))}r(rq,"castPath");var So=rq;var nq=1/0;function oq(e){if(typeof e=="string"||so(e))return e;var t=e+"";return t=="0"&&1/e==-nq?"-0":t}r(oq,"toKey");var Rn=oq;function iq(e,t){t=So(t,e);for(var n=0,o=t.length;e!=null&&n<o;)e=e[Rn(t[n++])];return n&&n==o?e:void 0}r(iq,"baseGet");var ji=iq;function aq(e,t,n){var o=e==null?void 0:ji(e,t);return o===void 0?n:o}r(aq,"get");var Zo=aq;function sq(e,t){for(var n=-1,o=t.length,i=e.length;++n<o;)e[i+n]=t[n];return e}r(sq,"arrayPush");var Vi=sq;var Ox=Bt?Bt.isConcatSpreadable:void 0;function cq(e){return Y(e)||po(e)||!!(Ox&&e&&e[Ox])}r(cq,"isFlattenable");var Nx=cq;function Mx(e,t,n,o,i){var a=-1,s=e.length;for(n||(n=Nx),i||(i=[]);++a<s;){var c=e[a];t>0&&n(c)?t>1?Mx(c,t-1,n,o,i):Vi(i,c):o||(i[i.length]=c)}return i}r(Mx,"baseFlatten");var Wi=Mx;function lq(e){var t=e==null?0:e.length;return t?Wi(e,1):[]}r(lq,"flatten");var Nt=lq;var uq=su(Object.getPrototypeOf,Object),zi=uq;var dq="[object Object]",fq=Function.prototype,pq=Object.prototype,wx=fq.toString,mq=pq.hasOwnProperty,hq=wx.call(Object);function gq(e){if(!et(e)||zt(e)!=dq)return!1;var t=zi(e);if(t===null)return!0;var n=mq.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&wx.call(n)==hq}r(gq,"isPlainObject");var lu=gq;function Tq(e,t,n){var o=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++o<i;)a[o]=e[o+t];return a}r(Tq,"baseSlice");var uu=Tq;function Eq(e,t,n,o){var i=-1,a=e==null?0:e.length;for(o&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}r(Eq,"arrayReduce");var Fx=Eq;function Sq(){this.__data__=new go,this.size=0}r(Sq,"stackClear");var Ix=Sq;function yq(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}r(yq,"stackDelete");var Px=yq;function _q(e){return this.__data__.get(e)}r(_q,"stackGet");var Dx=_q;function bq(e){return this.__data__.has(e)}r(bq,"stackHas");var Bx=bq;var Rq=200;function kq(e,t){var n=this.__data__;if(n instanceof go){var o=n.__data__;if(!To||o.length<Rq-1)return o.push([e,t]),this.size=++n.size,this;n=this.__data__=new Xo(o)}return n.set(e,t),this.size=n.size,this}r(kq,"stackSet");var qx=kq;function Hi(e){var t=this.__data__=new go(e);this.size=t.size}r(Hi,"Stack");Hi.prototype.clear=Ix;Hi.prototype.delete=Px;Hi.prototype.get=Dx;Hi.prototype.has=Bx;Hi.prototype.set=qx;var yo=Hi;function xq(e,t){return e&&yn(t,Ae(t),e)}r(xq,"baseAssign");var Gx=xq;function Aq(e,t){return e&&yn(t,mo(t),e)}r(Aq,"baseAssignIn");var jx=Aq;var Hx=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Vx=Hx&&typeof module=="object"&&module&&!module.nodeType&&module,vq=Vx&&Vx.exports===Hx,Wx=vq?At.Buffer:void 0,zx=Wx?Wx.allocUnsafe:void 0;function Uq(e,t){if(t)return e.slice();var n=e.length,o=zx?zx(n):new e.constructor(n);return e.copy(o),o}r(Uq,"cloneBuffer");var Yx=Uq;function Cq(e,t){for(var n=-1,o=e==null?0:e.length,i=0,a=[];++n<o;){var s=e[n];t(s,n,e)&&(a[i++]=s)}return a}r(Cq,"arrayFilter");var Yi=Cq;function Lq(){return[]}r(Lq,"stubArray");var du=Lq;var Oq=Object.prototype,Nq=Oq.propertyIsEnumerable,Kx=Object.getOwnPropertySymbols,Mq=Kx?function(e){return e==null?[]:(e=Object(e),Yi(Kx(e),function(t){return Nq.call(e,t)}))}:du,Ki=Mq;function wq(e,t){return yn(e,Ki(e),t)}r(wq,"copySymbols");var Jx=wq;var Fq=Object.getOwnPropertySymbols,Iq=Fq?function(e){for(var t=[];e;)Vi(t,Ki(e)),e=zi(e);return t}:du,fu=Iq;function Pq(e,t){return yn(e,fu(e),t)}r(Pq,"copySymbolsIn");var Qx=Pq;function Dq(e,t,n){var o=t(e);return Y(e)?o:Vi(o,n(e))}r(Dq,"baseGetAllKeys");var pu=Dq;function Bq(e){return pu(e,Ae,Ki)}r(Bq,"getAllKeys");var Ms=Bq;function qq(e){return pu(e,mo,fu)}r(qq,"getAllKeysIn");var mu=qq;var Gq=yr(At,"DataView"),hu=Gq;var jq=yr(At,"Promise"),gu=jq;var Vq=yr(At,"Set"),_o=Vq;var Xx="[object Map]",Wq="[object Object]",Zx="[object Promise]",$x="[object Set]",eA="[object WeakMap]",tA="[object DataView]",zq=In(hu),Hq=In(To),Yq=In(gu),Kq=In(_o),Jq=In(ru),$o=zt;(hu&&$o(new hu(new ArrayBuffer(1)))!=tA||To&&$o(new To)!=Xx||gu&&$o(gu.resolve())!=Zx||_o&&$o(new _o)!=$x||ru&&$o(new ru)!=eA)&&($o=r(function(e){var t=zt(e),n=t==Wq?e.constructor:void 0,o=n?In(n):"";if(o)switch(o){case zq:return tA;case Hq:return Xx;case Yq:return Zx;case Kq:return $x;case Jq:return eA}return t},"getTag"));var $r=$o;var Qq=Object.prototype,Xq=Qq.hasOwnProperty;function Zq(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&Xq.call(e,"index")&&(n.index=e.index,n.input=e.input),n}r(Zq,"initCloneArray");var rA=Zq;var $q=At.Uint8Array,Ji=$q;function eG(e){var t=new e.constructor(e.byteLength);return new Ji(t).set(new Ji(e)),t}r(eG,"cloneArrayBuffer");var Qi=eG;function tG(e,t){var n=t?Qi(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}r(tG,"cloneDataView");var nA=tG;var rG=/\w*$/;function nG(e){var t=new e.constructor(e.source,rG.exec(e));return t.lastIndex=e.lastIndex,t}r(nG,"cloneRegExp");var oA=nG;var iA=Bt?Bt.prototype:void 0,aA=iA?iA.valueOf:void 0;function oG(e){return aA?Object(aA.call(e)):{}}r(oG,"cloneSymbol");var sA=oG;function iG(e,t){var n=t?Qi(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}r(iG,"cloneTypedArray");var cA=iG;var aG="[object Boolean]",sG="[object Date]",cG="[object Map]",lG="[object Number]",uG="[object RegExp]",dG="[object Set]",fG="[object String]",pG="[object Symbol]",mG="[object ArrayBuffer]",hG="[object DataView]",gG="[object Float32Array]",TG="[object Float64Array]",EG="[object Int8Array]",SG="[object Int16Array]",yG="[object Int32Array]",_G="[object Uint8Array]",bG="[object Uint8ClampedArray]",RG="[object Uint16Array]",kG="[object Uint32Array]";function xG(e,t,n){var o=e.constructor;switch(t){case mG:return Qi(e);case aG:case sG:return new o(+e);case hG:return nA(e,n);case gG:case TG:case EG:case SG:case yG:case _G:case bG:case RG:case kG:return cA(e,n);case cG:return new o;case lG:case fG:return new o(e);case uG:return oA(e);case dG:return new o;case pG:return sA(e)}}r(xG,"initCloneByTag");var lA=xG;function AG(e){return typeof e.constructor=="function"&&!_n(e)?Gk(zi(e)):{}}r(AG,"initCloneObject");var uA=AG;var vG="[object Map]";function UG(e){return et(e)&&$r(e)==vG}r(UG,"baseIsMap");var dA=UG;var fA=qr&&qr.isMap,CG=fA?bn(fA):dA,pA=CG;var LG="[object Set]";function OG(e){return et(e)&&$r(e)==LG}r(OG,"baseIsSet");var mA=OG;var hA=qr&&qr.isSet,NG=hA?bn(hA):mA,gA=NG;var MG=1,wG=2,FG=4,TA="[object Arguments]",IG="[object Array]",PG="[object Boolean]",DG="[object Date]",BG="[object Error]",EA="[object Function]",qG="[object GeneratorFunction]",GG="[object Map]",jG="[object Number]",SA="[object Object]",VG="[object RegExp]",WG="[object Set]",zG="[object String]",HG="[object Symbol]",YG="[object WeakMap]",KG="[object ArrayBuffer]",JG="[object DataView]",QG="[object Float32Array]",XG="[object Float64Array]",ZG="[object Int8Array]",$G="[object Int16Array]",ej="[object Int32Array]",tj="[object Uint8Array]",rj="[object Uint8ClampedArray]",nj="[object Uint16Array]",oj="[object Uint32Array]",Ie={};Ie[TA]=Ie[IG]=Ie[KG]=Ie[JG]=Ie[PG]=Ie[DG]=Ie[QG]=Ie[XG]=Ie[ZG]=Ie[$G]=Ie[ej]=Ie[GG]=Ie[jG]=Ie[SA]=Ie[VG]=Ie[WG]=Ie[zG]=Ie[HG]=Ie[tj]=Ie[rj]=Ie[nj]=Ie[oj]=!0;Ie[BG]=Ie[EA]=Ie[YG]=!1;function Tu(e,t,n,o,i,a){var s,c=t&MG,u=t&wG,p=t&FG;if(n&&(s=i?n(e,o,i,a):n(e)),s!==void 0)return s;if(!tt(e))return e;var g=Y(e);if(g){if(s=rA(e),!c)return Vk(e,s)}else{var S=$r(e),x=S==EA||S==qG;if(Pn(e))return Yx(e,c);if(S==SA||S==TA||x&&!i){if(s=u||x?{}:uA(e),!c)return u?Qx(e,jx(s,e)):Jx(e,Gx(s,e))}else{if(!Ie[S])return i?e:{};s=lA(e,S,c)}}a||(a=new yo);var L=a.get(e);if(L)return L;a.set(e,s),gA(e)?e.forEach(function(z){s.add(Tu(z,t,n,z,e,a))}):pA(e)&&e.forEach(function(z,B){s.set(B,Tu(z,t,n,B,e,a))});var G=p?u?mu:Ms:u?mo:Ae,P=g?void 0:G(e);return nu(P||e,function(z,B){P&&(B=z,z=e[B]),lo(s,B,Tu(z,t,n,B,e,a))}),s}r(Tu,"baseClone");var yA=Tu;var ij=4;function aj(e){return yA(e,ij)}r(aj,"clone");var Pe=aj;function sj(e){for(var t=-1,n=e==null?0:e.length,o=0,i=[];++t<n;){var a=e[t];a&&(i[o++]=a)}return i}r(sj,"compact");var kn=sj;var cj="__lodash_hash_undefined__";function lj(e){return this.__data__.set(e,cj),this}r(lj,"setCacheAdd");var _A=lj;function uj(e){return this.__data__.has(e)}r(uj,"setCacheHas");var bA=uj;function Eu(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Xo;++t<n;)this.add(e[t])}r(Eu,"SetCache");Eu.prototype.add=Eu.prototype.push=_A;Eu.prototype.has=bA;var Xi=Eu;function dj(e,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(t(e[n],n,e))return!0;return!1}r(dj,"arraySome");var Su=dj;function fj(e,t){return e.has(t)}r(fj,"cacheHas");var Zi=fj;var pj=1,mj=2;function hj(e,t,n,o,i,a){var s=n&pj,c=e.length,u=t.length;if(c!=u&&!(s&&u>c))return!1;var p=a.get(e),g=a.get(t);if(p&&g)return p==t&&g==e;var S=-1,x=!0,L=n&mj?new Xi:void 0;for(a.set(e,t),a.set(t,e);++S<c;){var G=e[S],P=t[S];if(o)var z=s?o(P,G,S,t,e,a):o(G,P,S,e,t,a);if(z!==void 0){if(z)continue;x=!1;break}if(L){if(!Su(t,function(B,b){if(!Zi(L,b)&&(G===B||i(G,B,n,o,a)))return L.push(b)})){x=!1;break}}else if(!(G===P||i(G,P,n,o,a))){x=!1;break}}return a.delete(e),a.delete(t),x}r(hj,"equalArrays");var yu=hj;function gj(e){var t=-1,n=Array(e.size);return e.forEach(function(o,i){n[++t]=[i,o]}),n}r(gj,"mapToArray");var RA=gj;function Tj(e){var t=-1,n=Array(e.size);return e.forEach(function(o){n[++t]=o}),n}r(Tj,"setToArray");var $i=Tj;var Ej=1,Sj=2,yj="[object Boolean]",_j="[object Date]",bj="[object Error]",Rj="[object Map]",kj="[object Number]",xj="[object RegExp]",Aj="[object Set]",vj="[object String]",Uj="[object Symbol]",Cj="[object ArrayBuffer]",Lj="[object DataView]",kA=Bt?Bt.prototype:void 0,KE=kA?kA.valueOf:void 0;function Oj(e,t,n,o,i,a,s){switch(n){case Lj:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Cj:return!(e.byteLength!=t.byteLength||!a(new Ji(e),new Ji(t)));case yj:case _j:case kj:return Sn(+e,+t);case bj:return e.name==t.name&&e.message==t.message;case xj:case vj:return e==t+"";case Rj:var c=RA;case Aj:var u=o&Ej;if(c||(c=$i),e.size!=t.size&&!u)return!1;var p=s.get(e);if(p)return p==t;o|=Sj,s.set(e,t);var g=yu(c(e),c(t),o,i,a,s);return s.delete(e),g;case Uj:if(KE)return KE.call(e)==KE.call(t)}return!1}r(Oj,"equalByTag");var xA=Oj;var Nj=1,Mj=Object.prototype,wj=Mj.hasOwnProperty;function Fj(e,t,n,o,i,a){var s=n&Nj,c=Ms(e),u=c.length,p=Ms(t),g=p.length;if(u!=g&&!s)return!1;for(var S=u;S--;){var x=c[S];if(!(s?x in t:wj.call(t,x)))return!1}var L=a.get(e),G=a.get(t);if(L&&G)return L==t&&G==e;var P=!0;a.set(e,t),a.set(t,e);for(var z=s;++S<u;){x=c[S];var B=e[x],b=t[x];if(o)var E=s?o(b,B,x,t,e,a):o(B,b,x,e,t,a);if(!(E===void 0?B===b||i(B,b,n,o,a):E)){P=!1;break}z||(z=x=="constructor")}if(P&&!z){var w=e.constructor,V=t.constructor;w!=V&&"constructor"in e&&"constructor"in t&&!(typeof w=="function"&&w instanceof w&&typeof V=="function"&&V instanceof V)&&(P=!1)}return a.delete(e),a.delete(t),P}r(Fj,"equalObjects");var AA=Fj;var Ij=1,vA="[object Arguments]",UA="[object Array]",_u="[object Object]",Pj=Object.prototype,CA=Pj.hasOwnProperty;function Dj(e,t,n,o,i,a){var s=Y(e),c=Y(t),u=s?UA:$r(e),p=c?UA:$r(t);u=u==vA?_u:u,p=p==vA?_u:p;var g=u==_u,S=p==_u,x=u==p;if(x&&Pn(e)){if(!Pn(t))return!1;s=!0,g=!1}if(x&&!g)return a||(a=new yo),s||Pi(e)?yu(e,t,n,o,i,a):xA(e,t,u,n,o,i,a);if(!(n&Ij)){var L=g&&CA.call(e,"__wrapped__"),G=S&&CA.call(t,"__wrapped__");if(L||G){var P=L?e.value():e,z=G?t.value():t;return a||(a=new yo),i(P,z,n,o,a)}}return x?(a||(a=new yo),AA(e,t,n,o,i,a)):!1}r(Dj,"baseIsEqualDeep");var LA=Dj;function OA(e,t,n,o,i){return e===t?!0:e==null||t==null||!et(e)&&!et(t)?e!==e&&t!==t:LA(e,t,n,o,OA,i)}r(OA,"baseIsEqual");var bu=OA;var Bj=1,qj=2;function Gj(e,t,n,o){var i=n.length,a=i,s=!o;if(e==null)return!a;for(e=Object(e);i--;){var c=n[i];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++i<a;){c=n[i];var u=c[0],p=e[u],g=c[1];if(s&&c[2]){if(p===void 0&&!(u in e))return!1}else{var S=new yo;if(o)var x=o(p,g,u,e,t,S);if(!(x===void 0?bu(g,p,Bj|qj,o,S):x))return!1}}return!0}r(Gj,"baseIsMatch");var NA=Gj;function jj(e){return e===e&&!tt(e)}r(jj,"isStrictComparable");var Ru=jj;function Vj(e){for(var t=Ae(e),n=t.length;n--;){var o=t[n],i=e[o];t[n]=[o,i,Ru(i)]}return t}r(Vj,"getMatchData");var MA=Vj;function Wj(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}r(Wj,"matchesStrictComparable");var ku=Wj;function zj(e){var t=MA(e);return t.length==1&&t[0][2]?ku(t[0][0],t[0][1]):function(n){return n===e||NA(n,e,t)}}r(zj,"baseMatches");var wA=zj;function Hj(e,t){return e!=null&&t in Object(e)}r(Hj,"baseHasIn");var FA=Hj;function Yj(e,t,n){t=So(t,e);for(var o=-1,i=t.length,a=!1;++o<i;){var s=Rn(t[o]);if(!(a=e!=null&&n(e,s)))break;e=e[s]}return a||++o!=i?a:(i=e==null?0:e.length,!!i&&Ii(i)&&co(s,i)&&(Y(e)||po(e)))}r(Yj,"hasPath");var xu=Yj;function Kj(e,t){return e!=null&&xu(e,t,FA)}r(Kj,"hasIn");var IA=Kj;var Jj=1,Qj=2;function Xj(e,t){return Di(e)&&Ru(t)?ku(Rn(e),t):function(n){var o=Zo(n,e);return o===void 0&&o===t?IA(n,e):bu(t,o,Jj|Qj)}}r(Xj,"baseMatchesProperty");var PA=Xj;function Zj(e){return function(t){return t?.[e]}}r(Zj,"baseProperty");var DA=Zj;function $j(e){return function(t){return ji(t,e)}}r($j,"basePropertyDeep");var BA=$j;function e2(e){return Di(e)?DA(Rn(e)):BA(e)}r(e2,"property");var qA=e2;function t2(e){return typeof e=="function"?e:e==null?Br:typeof e=="object"?Y(e)?PA(e[0],e[1]):wA(e):qA(e)}r(t2,"baseIteratee");var Ut=t2;function r2(e,t,n,o){for(var i=-1,a=e==null?0:e.length;++i<a;){var s=e[i];t(o,s,n(s),e)}return o}r(r2,"arrayAggregator");var GA=r2;function n2(e){return function(t,n,o){for(var i=-1,a=Object(t),s=o(t),c=s.length;c--;){var u=s[e?c:++i];if(n(a[u],u,a)===!1)break}return t}}r(n2,"createBaseFor");var jA=n2;var o2=jA(),VA=o2;function i2(e,t){return e&&VA(e,t,Ae)}r(i2,"baseForOwn");var WA=i2;function a2(e,t){return function(n,o){if(n==null)return n;if(!vt(n))return e(n,o);for(var i=n.length,a=t?i:-1,s=Object(n);(t?a--:++a<i)&&o(s[a],a,s)!==!1;);return n}}r(a2,"createBaseEach");var zA=a2;var s2=zA(WA),_r=s2;function c2(e,t,n,o){return _r(e,function(i,a,s){t(o,i,n(i),s)}),o}r(c2,"baseAggregator");var HA=c2;function l2(e,t){return function(n,o){var i=Y(n)?GA:HA,a=t?t():{};return i(n,e,Ut(o,2),a)}}r(l2,"createAggregator");var Au=l2;var YA=Object.prototype,u2=YA.hasOwnProperty,d2=uo(function(e,t){e=Object(e);var n=-1,o=t.length,i=o>2?t[2]:void 0;for(i&&fo(t[0],t[1],i)&&(o=1);++n<o;)for(var a=t[n],s=mo(a),c=-1,u=s.length;++c<u;){var p=s[c],g=e[p];(g===void 0||Sn(g,YA[p])&&!u2.call(e,p))&&(e[p]=a[p])}return e}),ea=d2;function f2(e){return et(e)&&vt(e)}r(f2,"isArrayLikeObject");var ws=f2;function p2(e,t,n){for(var o=-1,i=e==null?0:e.length;++o<i;)if(n(t,e[o]))return!0;return!1}r(p2,"arrayIncludesWith");var vu=p2;var m2=200;function h2(e,t,n,o){var i=-1,a=iu,s=!0,c=e.length,u=[],p=t.length;if(!c)return u;n&&(t=Tn(t,bn(n))),o?(a=vu,s=!1):t.length>=m2&&(a=Zi,s=!1,t=new Xi(t));e:for(;++i<c;){var g=e[i],S=n==null?g:n(g);if(g=o||g!==0?g:0,s&&S===S){for(var x=p;x--;)if(t[x]===S)continue e;u.push(g)}else a(t,S,o)||u.push(g)}return u}r(h2,"baseDifference");var Uu=h2;var g2=uo(function(e,t){return ws(e)?Uu(e,Wi(t,1,ws,!0)):[]}),bo=g2;function T2(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}r(T2,"last");var xn=T2;function E2(e,t,n){var o=e==null?0:e.length;return o?(t=n||t===void 0?1:En(t),uu(e,t<0?0:t,o)):[]}r(E2,"drop");var gt=E2;function S2(e,t,n){var o=e==null?0:e.length;return o?(t=n||t===void 0?1:En(t),t=o-t,uu(e,0,t<0?0:t)):[]}r(S2,"dropRight");var Bn=S2;function y2(e){return typeof e=="function"?e:Br}r(y2,"castFunction");var KA=y2;function _2(e,t){var n=Y(e)?nu:_r;return n(e,KA(t))}r(_2,"forEach");var Q=_2;function b2(e,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(!t(e[n],n,e))return!1;return!0}r(b2,"arrayEvery");var JA=b2;function R2(e,t){var n=!0;return _r(e,function(o,i,a){return n=!!t(o,i,a),n}),n}r(R2,"baseEvery");var QA=R2;function k2(e,t,n){var o=Y(e)?JA:QA;return n&&fo(e,t,n)&&(t=void 0),o(e,Ut(t,3))}r(k2,"every");var qt=k2;function x2(e,t){var n=[];return _r(e,function(o,i,a){t(o,i,a)&&n.push(o)}),n}r(x2,"baseFilter");var Cu=x2;function A2(e,t){var n=Y(e)?Yi:Cu;return n(e,Ut(t,3))}r(A2,"filter");var $t=A2;function v2(e){return function(t,n,o){var i=Object(t);if(!vt(t)){var a=Ut(n,3);t=Ae(t),n=r(function(c){return a(i[c],c,i)},"predicate")}var s=e(t,n,o);return s>-1?i[a?t[s]:s]:void 0}}r(v2,"createFind");var XA=v2;var U2=Math.max;function C2(e,t,n){var o=e==null?0:e.length;if(!o)return-1;var i=n==null?0:En(n);return i<0&&(i=U2(o+i,0)),ou(e,Ut(t,3),i)}r(C2,"findIndex");var ZA=C2;var L2=XA(ZA),An=L2;function O2(e){return e&&e.length?e[0]:void 0}r(O2,"head");var Ct=O2;function N2(e,t){var n=-1,o=vt(e)?Array(e.length):[];return _r(e,function(i,a,s){o[++n]=t(i,a,s)}),o}r(N2,"baseMap");var $A=N2;function M2(e,t){var n=Y(e)?Tn:$A;return n(e,Ut(t,3))}r(M2,"map");var J=M2;function w2(e,t){return Wi(J(e,t),1)}r(w2,"flatMap");var lr=w2;var F2=Object.prototype,I2=F2.hasOwnProperty,P2=Au(function(e,t,n){I2.call(e,n)?e[n].push(t):Fi(e,n,[t])}),JE=P2;var D2=Object.prototype,B2=D2.hasOwnProperty;function q2(e,t){return e!=null&&B2.call(e,t)}r(q2,"baseHas");var ev=q2;function G2(e,t){return e!=null&&xu(e,t,ev)}r(G2,"has");var X=G2;var j2="[object String]";function V2(e){return typeof e=="string"||!Y(e)&&et(e)&&zt(e)==j2}r(V2,"isString");var Mt=V2;function W2(e,t){return Tn(t,function(n){return e[n]})}r(W2,"baseValues");var tv=W2;function z2(e){return e==null?[]:tv(e,Ae(e))}r(z2,"values");var Le=z2;var H2=Math.max;function Y2(e,t,n,o){e=vt(e)?e:Le(e),n=n&&!o?En(n):0;var i=e.length;return n<0&&(n=H2(i+n,0)),Mt(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&wi(e,t,n)>-1}r(Y2,"includes");var Je=Y2;var K2=Math.max;function J2(e,t,n){var o=e==null?0:e.length;if(!o)return-1;var i=n==null?0:En(n);return i<0&&(i=K2(o+i,0)),wi(e,t,i)}r(J2,"indexOf");var Lu=J2;var Q2="[object Map]",X2="[object Set]",Z2=Object.prototype,$2=Z2.hasOwnProperty;function eV(e){if(e==null)return!0;if(vt(e)&&(Y(e)||typeof e=="string"||typeof e.splice=="function"||Pn(e)||Pi(e)||po(e)))return!e.length;var t=$r(e);if(t==Q2||t==X2)return!e.size;if(_n(e))return!cu(e).length;for(var n in e)if($2.call(e,n))return!1;return!0}r(eV,"isEmpty");var de=eV;var tV="[object RegExp]";function rV(e){return et(e)&&zt(e)==tV}r(rV,"baseIsRegExp");var rv=rV;var nv=qr&&qr.isRegExp,nV=nv?bn(nv):rv,Gr=nV;function oV(e){return e===void 0}r(oV,"isUndefined");var er=oV;var iV="Expected a function";function aV(e){if(typeof e!="function")throw new TypeError(iV);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}r(aV,"negate");var ov=aV;function sV(e,t,n,o){if(!tt(e))return e;t=So(t,e);for(var i=-1,a=t.length,s=a-1,c=e;c!=null&&++i<a;){var u=Rn(t[i]),p=n;if(u==="__proto__"||u==="constructor"||u==="prototype")return e;if(i!=s){var g=c[u];p=o?o(g,u,c):void 0,p===void 0&&(p=tt(g)?g:co(t[i+1])?[]:{})}lo(c,u,p),c=c[u]}return e}r(sV,"baseSet");var iv=sV;function cV(e,t,n){for(var o=-1,i=t.length,a={};++o<i;){var s=t[o],c=ji(e,s);n(c,s)&&iv(a,So(s,e),c)}return a}r(cV,"basePickBy");var av=cV;function lV(e,t){if(e==null)return{};var n=Tn(mu(e),function(o){return[o]});return t=Ut(t),av(e,n,function(o,i){return t(o,i[0])})}r(lV,"pickBy");var br=lV;var uV=Au(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]}),QE=uV;function dV(e,t,n,o,i){return i(e,function(a,s,c){n=o?(o=!1,a):t(n,a,s,c)}),n}r(dV,"baseReduce");var sv=dV;function fV(e,t,n){var o=Y(e)?Fx:sv,i=arguments.length<3;return o(e,Ut(t,4),n,i,_r)}r(fV,"reduce");var Lt=fV;function pV(e,t){var n=Y(e)?Yi:Cu;return n(e,ov(Ut(t,3)))}r(pV,"reject");var Ro=pV;function mV(e,t){var n;return _r(e,function(o,i,a){return n=t(o,i,a),!n}),!!n}r(mV,"baseSome");var cv=mV;function hV(e,t,n){var o=Y(e)?Su:cv;return n&&fo(e,t,n)&&(t=void 0),o(e,Ut(t,3))}r(hV,"some");var en=hV;var gV=1/0,TV=_o&&1/$i(new _o([,-0]))[1]==gV?function(e){return new _o(e)}:rt,lv=TV;var EV=200;function SV(e,t,n){var o=-1,i=iu,a=e.length,s=!0,c=[],u=c;if(n)s=!1,i=vu;else if(a>=EV){var p=t?null:lv(e);if(p)return $i(p);s=!1,i=Zi,u=new Xi}else u=t?[]:c;e:for(;++o<a;){var g=e[o],S=t?t(g):g;if(g=n||g!==0?g:0,s&&S===S){for(var x=u.length;x--;)if(u[x]===S)continue e;t&&u.push(S),c.push(g)}else i(u,S,n)||(u!==c&&u.push(S),c.push(g))}return c}r(SV,"baseUniq");var uv=SV;function yV(e){return e&&e.length?uv(e):[]}r(yV,"uniq");var ko=yV;var _V=uo(function(e,t){return ws(e)?Uu(e,t):[]}),XE=_V;function ta(e){console&&console.error&&console.error(`Error: ${e}`)}r(ta,"PRINT_ERROR");function Fs(e){console&&console.warn&&console.warn(`Warning: ${e}`)}r(Fs,"PRINT_WARNING");function Is(e){let t=new Date().getTime(),n=e();return{time:new Date().getTime()-t,value:n}}r(Is,"timer");function Ps(e){function t(){}r(t,"FakeConstructor"),t.prototype=e;let n=new t;function o(){return typeof n.bar}return r(o,"fakeAccess"),o(),o(),e;(0,eval)(e)}r(Ps,"toFastProperties");function bV(e){return RV(e)?e.LABEL:e.name}r(bV,"tokenLabel");function RV(e){return Mt(e.LABEL)&&e.LABEL!==""}r(RV,"hasTokenLabel");var Ur=class{static{r(this,"AbstractProduction")}get definition(){return this._definition}set definition(t){this._definition=t}constructor(t){this._definition=t}accept(t){t.visit(this),Q(this.definition,n=>{n.accept(t)})}},De=class extends Ur{static{r(this,"NonTerminal")}constructor(t){super([]),this.idx=1,Ht(this,br(t,n=>n!==void 0))}set definition(t){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(t){t.visit(this)}},ur=class extends Ur{static{r(this,"Rule")}constructor(t){super(t.definition),this.orgText="",Ht(this,br(t,n=>n!==void 0))}},Be=class extends Ur{static{r(this,"Alternative")}constructor(t){super(t.definition),this.ignoreAmbiguities=!1,Ht(this,br(t,n=>n!==void 0))}},We=class extends Ur{static{r(this,"Option")}constructor(t){super(t.definition),this.idx=1,Ht(this,br(t,n=>n!==void 0))}},Tt=class extends Ur{static{r(this,"RepetitionMandatory")}constructor(t){super(t.definition),this.idx=1,Ht(this,br(t,n=>n!==void 0))}},Et=class extends Ur{static{r(this,"RepetitionMandatoryWithSeparator")}constructor(t){super(t.definition),this.idx=1,Ht(this,br(t,n=>n!==void 0))}},Ue=class extends Ur{static{r(this,"Repetition")}constructor(t){super(t.definition),this.idx=1,Ht(this,br(t,n=>n!==void 0))}},ut=class extends Ur{static{r(this,"RepetitionWithSeparator")}constructor(t){super(t.definition),this.idx=1,Ht(this,br(t,n=>n!==void 0))}},dt=class extends Ur{static{r(this,"Alternation")}get definition(){return this._definition}set definition(t){this._definition=t}constructor(t){super(t.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,Ht(this,br(t,n=>n!==void 0))}},Se=class{static{r(this,"Terminal")}constructor(t){this.idx=1,Ht(this,br(t,n=>n!==void 0))}accept(t){t.visit(this)}};function Ou(e){return J(e,ra)}r(Ou,"serializeGrammar");function ra(e){function t(n){return J(n,ra)}if(r(t,"convertDefinition"),e instanceof De){let n={type:"NonTerminal",name:e.nonTerminalName,idx:e.idx};return Mt(e.label)&&(n.label=e.label),n}else{if(e instanceof Be)return{type:"Alternative",definition:t(e.definition)};if(e instanceof We)return{type:"Option",idx:e.idx,definition:t(e.definition)};if(e instanceof Tt)return{type:"RepetitionMandatory",idx:e.idx,definition:t(e.definition)};if(e instanceof Et)return{type:"RepetitionMandatoryWithSeparator",idx:e.idx,separator:ra(new Se({terminalType:e.separator})),definition:t(e.definition)};if(e instanceof ut)return{type:"RepetitionWithSeparator",idx:e.idx,separator:ra(new Se({terminalType:e.separator})),definition:t(e.definition)};if(e instanceof Ue)return{type:"Repetition",idx:e.idx,definition:t(e.definition)};if(e instanceof dt)return{type:"Alternation",idx:e.idx,definition:t(e.definition)};if(e instanceof Se){let n={type:"Terminal",name:e.terminalType.name,label:bV(e.terminalType),idx:e.idx};Mt(e.label)&&(n.terminalLabel=e.label);let o=e.terminalType.PATTERN;return e.terminalType.PATTERN&&(n.pattern=Gr(o)?o.source:o),n}else{if(e instanceof ur)return{type:"Rule",name:e.name,orgText:e.orgText,definition:t(e.definition)};throw Error("non exhaustive match")}}}r(ra,"serializeProduction");var dr=class{static{r(this,"GAstVisitor")}visit(t){let n=t;switch(n.constructor){case De:return this.visitNonTerminal(n);case Be:return this.visitAlternative(n);case We:return this.visitOption(n);case Tt:return this.visitRepetitionMandatory(n);case Et:return this.visitRepetitionMandatoryWithSeparator(n);case ut:return this.visitRepetitionWithSeparator(n);case Ue:return this.visitRepetition(n);case dt:return this.visitAlternation(n);case Se:return this.visitTerminal(n);case ur:return this.visitRule(n);default:throw Error("non exhaustive match")}}visitNonTerminal(t){}visitAlternative(t){}visitOption(t){}visitRepetition(t){}visitRepetitionMandatory(t){}visitRepetitionMandatoryWithSeparator(t){}visitRepetitionWithSeparator(t){}visitAlternation(t){}visitTerminal(t){}visitRule(t){}};function ZE(e){return e instanceof Be||e instanceof We||e instanceof Ue||e instanceof Tt||e instanceof Et||e instanceof ut||e instanceof Se||e instanceof ur}r(ZE,"isSequenceProd");function ei(e,t=[]){return e instanceof We||e instanceof Ue||e instanceof ut?!0:e instanceof dt?en(e.definition,o=>ei(o,t)):e instanceof De&&Je(t,e)?!1:e instanceof Ur?(e instanceof De&&t.push(e),qt(e.definition,o=>ei(o,t))):!1}r(ei,"isOptionalProd");function $E(e){return e instanceof dt}r($E,"isBranchingProd");function Rr(e){if(e instanceof De)return"SUBRULE";if(e instanceof We)return"OPTION";if(e instanceof dt)return"OR";if(e instanceof Tt)return"AT_LEAST_ONE";if(e instanceof Et)return"AT_LEAST_ONE_SEP";if(e instanceof ut)return"MANY_SEP";if(e instanceof Ue)return"MANY";if(e instanceof Se)return"CONSUME";throw Error("non exhaustive match")}r(Rr,"getProductionDslName");var qn=class{static{r(this,"RestWalker")}walk(t,n=[]){Q(t.definition,(o,i)=>{let a=gt(t.definition,i+1);if(o instanceof De)this.walkProdRef(o,a,n);else if(o instanceof Se)this.walkTerminal(o,a,n);else if(o instanceof Be)this.walkFlat(o,a,n);else if(o instanceof We)this.walkOption(o,a,n);else if(o instanceof Tt)this.walkAtLeastOne(o,a,n);else if(o instanceof Et)this.walkAtLeastOneSep(o,a,n);else if(o instanceof ut)this.walkManySep(o,a,n);else if(o instanceof Ue)this.walkMany(o,a,n);else if(o instanceof dt)this.walkOr(o,a,n);else throw Error("non exhaustive match")})}walkTerminal(t,n,o){}walkProdRef(t,n,o){}walkFlat(t,n,o){let i=n.concat(o);this.walk(t,i)}walkOption(t,n,o){let i=n.concat(o);this.walk(t,i)}walkAtLeastOne(t,n,o){let i=[new We({definition:t.definition})].concat(n,o);this.walk(t,i)}walkAtLeastOneSep(t,n,o){let i=dv(t,n,o);this.walk(t,i)}walkMany(t,n,o){let i=[new We({definition:t.definition})].concat(n,o);this.walk(t,i)}walkManySep(t,n,o){let i=dv(t,n,o);this.walk(t,i)}walkOr(t,n,o){let i=n.concat(o);Q(t.definition,a=>{let s=new Be({definition:[a]});this.walk(s,i)})}};function dv(e,t,n){return[new We({definition:[new Se({terminalType:e.separator})].concat(e.definition)})].concat(t,n)}r(dv,"restForRepetitionWithSeparator");function ti(e){if(e instanceof De)return ti(e.referencedRule);if(e instanceof Se)return AV(e);if(ZE(e))return kV(e);if($E(e))return xV(e);throw Error("non exhaustive match")}r(ti,"first");function kV(e){let t=[],n=e.definition,o=0,i=n.length>o,a,s=!0;for(;i&&s;)a=n[o],s=ei(a),t=t.concat(ti(a)),o=o+1,i=n.length>o;return ko(t)}r(kV,"firstForSequence");function xV(e){let t=J(e.definition,n=>ti(n));return ko(Nt(t))}r(xV,"firstForBranching");function AV(e){return[e.terminalType]}r(AV,"firstForTerminal");var Nu="_~IN~_";var eS=class extends qn{static{r(this,"ResyncFollowsWalker")}constructor(t){super(),this.topProd=t,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(t,n,o){}walkProdRef(t,n,o){let i=vV(t.referencedRule,t.idx)+this.topProd.name,a=n.concat(o),s=new Be({definition:a}),c=ti(s);this.follows[i]=c}};function fv(e){let t={};return Q(e,n=>{let o=new eS(n).startWalking();Ht(t,o)}),t}r(fv,"computeAllProdsFollows");function vV(e,t){return e.name+t+Nu}r(vV,"buildBetweenProdsFollowPrefix");function re(e){return e.charCodeAt(0)}r(re,"cc");function Mu(e,t){Array.isArray(e)?e.forEach(function(n){t.push(n)}):t.push(e)}r(Mu,"insertToSet");function na(e,t){if(e[t]===!0)throw"duplicate flag "+t;let n=e[t];e[t]=!0}r(na,"addFlag");function ri(e){if(e===void 0)throw Error("Internal Error - Should never get here!");return!0}r(ri,"ASSERT_EXISTS");function Ds(){throw Error("Internal Error - Should never get here!")}r(Ds,"ASSERT_NEVER_REACH_HERE");function tS(e){return e.type==="Character"}r(tS,"isCharacter");var Bs=[];for(let e=re("0");e<=re("9");e++)Bs.push(e);var qs=[re("_")].concat(Bs);for(let e=re("a");e<=re("z");e++)qs.push(e);for(let e=re("A");e<=re("Z");e++)qs.push(e);var rS=[re(" "),re("\f"),re(`
`),re("\r"),re("	"),re("\v"),re("	"),re("\xA0"),re("\u1680"),re("\u2000"),re("\u2001"),re("\u2002"),re("\u2003"),re("\u2004"),re("\u2005"),re("\u2006"),re("\u2007"),re("\u2008"),re("\u2009"),re("\u200A"),re("\u2028"),re("\u2029"),re("\u202F"),re("\u205F"),re("\u3000"),re("\uFEFF")];var UV=/[0-9a-fA-F]/,wu=/[0-9]/,CV=/[1-9]/,Gs=class{static{r(this,"RegExpParser")}constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(t){this.idx=t.idx,this.input=t.input,this.groupIdx=t.groupIdx}pattern(t){this.idx=0,this.input=t,this.groupIdx=0,this.consumeChar("/");let n=this.disjunction();this.consumeChar("/");let o={type:"Flags",loc:{begin:this.idx,end:t.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":na(o,"global");break;case"i":na(o,"ignoreCase");break;case"m":na(o,"multiLine");break;case"u":na(o,"unicode");break;case"y":na(o,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:o,value:n,loc:this.loc(0)}}disjunction(){let t=[],n=this.idx;for(t.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),t.push(this.alternative());return{type:"Disjunction",value:t,loc:this.loc(n)}}alternative(){let t=[],n=this.idx;for(;this.isTerm();)t.push(this.term());return{type:"Alternative",value:t,loc:this.loc(n)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){let t=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(t)};case"$":return{type:"EndAnchor",loc:this.loc(t)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(t)};case"B":return{type:"NonWordBoundary",loc:this.loc(t)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let n;switch(this.popChar()){case"=":n="Lookahead";break;case"!":n="NegativeLookahead";break}ri(n);let o=this.disjunction();return this.consumeChar(")"),{type:n,value:o,loc:this.loc(t)}}return Ds()}quantifier(t=!1){let n,o=this.idx;switch(this.popChar()){case"*":n={atLeast:0,atMost:1/0};break;case"+":n={atLeast:1,atMost:1/0};break;case"?":n={atLeast:0,atMost:1};break;case"{":let i=this.integerIncludingZero();switch(this.popChar()){case"}":n={atLeast:i,atMost:i};break;case",":let a;this.isDigit()?(a=this.integerIncludingZero(),n={atLeast:i,atMost:a}):n={atLeast:i,atMost:1/0},this.consumeChar("}");break}if(t===!0&&n===void 0)return;ri(n);break}if(!(t===!0&&n===void 0)&&ri(n))return this.peekChar(0)==="?"?(this.consumeChar("?"),n.greedy=!1):n.greedy=!0,n.type="Quantifier",n.loc=this.loc(o),n}atom(){let t,n=this.idx;switch(this.peekChar()){case".":t=this.dotAll();break;case"\\":t=this.atomEscape();break;case"[":t=this.characterClass();break;case"(":t=this.group();break}return t===void 0&&this.isPatternCharacter()&&(t=this.patternCharacter()),ri(t)?(t.loc=this.loc(n),this.isQuantifier()&&(t.quantifier=this.quantifier()),t):Ds()}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[re(`
`),re("\r"),re("\u2028"),re("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let t,n=!1;switch(this.popChar()){case"d":t=Bs;break;case"D":t=Bs,n=!0;break;case"s":t=rS;break;case"S":t=rS,n=!0;break;case"w":t=qs;break;case"W":t=qs,n=!0;break}return ri(t)?{type:"Set",value:t,complement:n}:Ds()}controlEscapeAtom(){let t;switch(this.popChar()){case"f":t=re("\f");break;case"n":t=re(`
`);break;case"r":t=re("\r");break;case"t":t=re("	");break;case"v":t=re("\v");break}return ri(t)?{type:"Character",value:t}:Ds()}controlLetterEscapeAtom(){this.consumeChar("c");let t=this.popChar();if(/[a-zA-Z]/.test(t)===!1)throw Error("Invalid ");return{type:"Character",value:t.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:re("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){let t=this.popChar();return{type:"Character",value:re(t)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:let t=this.popChar();return{type:"Character",value:re(t)}}}characterClass(){let t=[],n=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),n=!0);this.isClassAtom();){let o=this.classAtom(),i=o.type==="Character";if(tS(o)&&this.isRangeDash()){this.consumeChar("-");let a=this.classAtom(),s=a.type==="Character";if(tS(a)){if(a.value<o.value)throw Error("Range out of order in character class");t.push({from:o.value,to:a.value})}else Mu(o.value,t),t.push(re("-")),Mu(a.value,t)}else Mu(o.value,t)}return this.consumeChar("]"),{type:"Set",complement:n,value:t}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:re("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let t=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),t=!1;break;default:this.groupIdx++;break}let n=this.disjunction();this.consumeChar(")");let o={type:"Group",capturing:t,value:n};return t&&(o.idx=this.groupIdx),o}positiveInteger(){let t=this.popChar();if(CV.test(t)===!1)throw Error("Expecting a positive integer");for(;wu.test(this.peekChar(0));)t+=this.popChar();return parseInt(t,10)}integerIncludingZero(){let t=this.popChar();if(wu.test(t)===!1)throw Error("Expecting an integer");for(;wu.test(this.peekChar(0));)t+=this.popChar();return parseInt(t,10)}patternCharacter(){let t=this.popChar();switch(t){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:re(t)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return wu.test(this.peekChar(0))}isClassAtom(t=0){switch(this.peekChar(t)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){let t=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(t)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(t){let n="";for(let i=0;i<t;i++){let a=this.popChar();if(UV.test(a)===!1)throw Error("Expecting a HexDecimal digits");n+=a}return{type:"Character",value:parseInt(n,16)}}peekChar(t=0){return this.input[this.idx+t]}popChar(){let t=this.peekChar(0);return this.consumeChar(void 0),t}consumeChar(t){if(t!==void 0&&this.input[this.idx]!==t)throw Error("Expected: '"+t+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(t){return{begin:t,end:this.idx}}};var xo=class{static{r(this,"BaseRegExpVisitor")}visitChildren(t){for(let n in t){let o=t[n];t.hasOwnProperty(n)&&(o.type!==void 0?this.visit(o):Array.isArray(o)&&o.forEach(i=>{this.visit(i)},this))}}visit(t){switch(t.type){case"Pattern":this.visitPattern(t);break;case"Flags":this.visitFlags(t);break;case"Disjunction":this.visitDisjunction(t);break;case"Alternative":this.visitAlternative(t);break;case"StartAnchor":this.visitStartAnchor(t);break;case"EndAnchor":this.visitEndAnchor(t);break;case"WordBoundary":this.visitWordBoundary(t);break;case"NonWordBoundary":this.visitNonWordBoundary(t);break;case"Lookahead":this.visitLookahead(t);break;case"NegativeLookahead":this.visitNegativeLookahead(t);break;case"Character":this.visitCharacter(t);break;case"Set":this.visitSet(t);break;case"Group":this.visitGroup(t);break;case"GroupBackReference":this.visitGroupBackReference(t);break;case"Quantifier":this.visitQuantifier(t);break}this.visitChildren(t)}visitPattern(t){}visitFlags(t){}visitDisjunction(t){}visitAlternative(t){}visitStartAnchor(t){}visitEndAnchor(t){}visitWordBoundary(t){}visitNonWordBoundary(t){}visitLookahead(t){}visitNegativeLookahead(t){}visitCharacter(t){}visitSet(t){}visitGroup(t){}visitGroupBackReference(t){}visitQuantifier(t){}};var Fu={},LV=new Gs;function oa(e){let t=e.toString();if(Fu.hasOwnProperty(t))return Fu[t];{let n=LV.pattern(t);return Fu[t]=n,n}}r(oa,"getRegExpAst");function pv(){Fu={}}r(pv,"clearRegExpParserCache");var hv="Complement Sets are not supported for first char optimization",js=`Unable to use "first char" lexer optimizations:
`;function gv(e,t=!1){try{let n=oa(e);return nS(n.value,{},n.flags.ignoreCase)}catch(n){if(n.message===hv)t&&Fs(`${js}	Unable to optimize: < ${e.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let o="";t&&(o=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),ta(`${js}
	Failed parsing: < ${e.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+o)}}return[]}r(gv,"getOptimizedStartCodesIndices");function nS(e,t,n){switch(e.type){case"Disjunction":for(let i=0;i<e.value.length;i++)nS(e.value[i],t,n);break;case"Alternative":let o=e.value;for(let i=0;i<o.length;i++){let a=o[i];switch(a.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}let s=a;switch(s.type){case"Character":Iu(s.value,t,n);break;case"Set":if(s.complement===!0)throw Error(hv);Q(s.value,u=>{if(typeof u=="number")Iu(u,t,n);else{let p=u;if(n===!0)for(let g=p.from;g<=p.to;g++)Iu(g,t,n);else{for(let g=p.from;g<=p.to&&g<ia;g++)Iu(g,t,n);if(p.to>=ia){let g=p.from>=ia?p.from:ia,S=p.to,x=vn(g),L=vn(S);for(let G=x;G<=L;G++)t[G]=G}}}});break;case"Group":nS(s.value,t,n);break;default:throw Error("Non Exhaustive Match")}let c=s.quantifier!==void 0&&s.quantifier.atLeast===0;if(s.type==="Group"&&oS(s)===!1||s.type!=="Group"&&c===!1)break}break;default:throw Error("non exhaustive match!")}return Le(t)}r(nS,"firstCharOptimizedIndices");function Iu(e,t,n){let o=vn(e);t[o]=o,n===!0&&OV(e,t)}r(Iu,"addOptimizedIdxToResult");function OV(e,t){let n=String.fromCharCode(e),o=n.toUpperCase();if(o!==n){let i=vn(o.charCodeAt(0));t[i]=i}else{let i=n.toLowerCase();if(i!==n){let a=vn(i.charCodeAt(0));t[a]=a}}}r(OV,"handleIgnoreCase");function mv(e,t){return An(e.value,n=>{if(typeof n=="number")return Je(t,n);{let o=n;return An(t,i=>o.from<=i&&i<=o.to)!==void 0}})}r(mv,"findCode");function oS(e){let t=e.quantifier;return t&&t.atLeast===0?!0:e.value?Y(e.value)?qt(e.value,oS):oS(e.value):!1}r(oS,"isWholeOptional");var iS=class extends xo{static{r(this,"CharCodeFinder")}constructor(t){super(),this.targetCharCodes=t,this.found=!1}visitChildren(t){if(this.found!==!0){switch(t.type){case"Lookahead":this.visitLookahead(t);return;case"NegativeLookahead":this.visitNegativeLookahead(t);return}super.visitChildren(t)}}visitCharacter(t){Je(this.targetCharCodes,t.value)&&(this.found=!0)}visitSet(t){t.complement?mv(t,this.targetCharCodes)===void 0&&(this.found=!0):mv(t,this.targetCharCodes)!==void 0&&(this.found=!0)}};function Pu(e,t){if(t instanceof RegExp){let n=oa(t),o=new iS(e);return o.visit(n),o.found}else return An(t,n=>Je(e,n.charCodeAt(0)))!==void 0}r(Pu,"canMatchCharCode");var ni="PATTERN",aa="defaultMode",Du="modes",sS=typeof new RegExp("(?:)").sticky=="boolean";function Sv(e,t){t=ea(t,{useSticky:sS,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:r((b,E)=>E(),"tracer")});let n=t.tracer;n("initCharCodeToOptimizedIndexMap",()=>{JV()});let o;n("Reject Lexer.NA",()=>{o=Ro(e,b=>b[ni]===nt.NA)});let i=!1,a;n("Transform Patterns",()=>{i=!1,a=J(o,b=>{let E=b[ni];if(Gr(E)){let w=E.source;return w.length===1&&w!=="^"&&w!=="$"&&w!=="."&&!E.ignoreCase?w:w.length===2&&w[0]==="\\"&&!Je(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],w[1])?w[1]:t.useSticky?Ev(E):Tv(E)}else{if(cr(E))return i=!0,{exec:E};if(typeof E=="object")return i=!0,E;if(typeof E=="string"){if(E.length===1)return E;{let w=E.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),V=new RegExp(w);return t.useSticky?Ev(V):Tv(V)}}else throw Error("non exhaustive match")}})});let s,c,u,p,g;n("misc mapping",()=>{s=J(o,b=>b.tokenTypeIdx),c=J(o,b=>{let E=b.GROUP;if(E!==nt.SKIPPED){if(Mt(E))return E;if(er(E))return!1;throw Error("non exhaustive match")}}),u=J(o,b=>{let E=b.LONGER_ALT;if(E)return Y(E)?J(E,V=>Lu(o,V)):[Lu(o,E)]}),p=J(o,b=>b.PUSH_MODE),g=J(o,b=>X(b,"POP_MODE"))});let S;n("Line Terminator Handling",()=>{let b=vv(t.lineTerminatorCharacters);S=J(o,E=>!1),t.positionTracking!=="onlyOffset"&&(S=J(o,E=>X(E,"LINE_BREAKS")?!!E.LINE_BREAKS:Av(E,b)===!1&&Pu(b,E.PATTERN)))});let x,L,G,P;n("Misc Mapping #2",()=>{x=J(o,kv),L=J(a,YV),G=Lt(o,(b,E)=>{let w=E.GROUP;return Mt(w)&&w!==nt.SKIPPED&&(b[w]=[]),b},{}),P=J(a,(b,E)=>({pattern:a[E],longerAlt:u[E],canLineTerminator:S[E],isCustom:x[E],short:L[E],group:c[E],push:p[E],pop:g[E],tokenTypeIdx:s[E],tokenType:o[E]}))});let z=!0,B=[];return t.safeMode||n("First Char Optimization",()=>{B=Lt(o,(b,E,w)=>{if(typeof E.PATTERN=="string"){let V=E.PATTERN.charCodeAt(0),le=vn(V);aS(b,le,P[w])}else if(Y(E.START_CHARS_HINT)){let V;Q(E.START_CHARS_HINT,le=>{let Me=typeof le=="string"?le.charCodeAt(0):le,at=vn(Me);V!==at&&(V=at,aS(b,at,P[w]))})}else if(Gr(E.PATTERN))if(E.PATTERN.unicode)z=!1,t.ensureOptimizations&&ta(`${js}	Unable to analyze < ${E.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{let V=gv(E.PATTERN,t.ensureOptimizations);de(V)&&(z=!1),Q(V,le=>{aS(b,le,P[w])})}else t.ensureOptimizations&&ta(`${js}	TokenType: <${E.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),z=!1;return b},[])}),{emptyGroups:G,patternIdxToConfig:P,charCodeToPatternIdxToConfig:B,hasCustom:i,canBeOptimized:z}}r(Sv,"analyzeTokenTypes");function yv(e,t){let n=[],o=MV(e);n=n.concat(o.errors);let i=wV(o.valid),a=i.valid;return n=n.concat(i.errors),n=n.concat(NV(a)),n=n.concat(jV(a)),n=n.concat(VV(a,t)),n=n.concat(WV(a)),n}r(yv,"validatePatterns");function NV(e){let t=[],n=$t(e,o=>Gr(o[ni]));return t=t.concat(IV(n)),t=t.concat(BV(n)),t=t.concat(qV(n)),t=t.concat(GV(n)),t=t.concat(PV(n)),t}r(NV,"validateRegExpPattern");function MV(e){let t=$t(e,i=>!X(i,ni)),n=J(t,i=>({message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:Qe.MISSING_PATTERN,tokenTypes:[i]})),o=bo(e,t);return{errors:n,valid:o}}r(MV,"findMissingPatterns");function wV(e){let t=$t(e,i=>{let a=i[ni];return!Gr(a)&&!cr(a)&&!X(a,"exec")&&!Mt(a)}),n=J(t,i=>({message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:Qe.INVALID_PATTERN,tokenTypes:[i]})),o=bo(e,t);return{errors:n,valid:o}}r(wV,"findInvalidPatterns");var FV=/[^\\][$]/;function IV(e){class t extends xo{static{r(this,"EndAnchorFinder")}constructor(){super(...arguments),this.found=!1}visitEndAnchor(a){this.found=!0}}let n=$t(e,i=>{let a=i.PATTERN;try{let s=oa(a),c=new t;return c.visit(s),c.found}catch{return FV.test(a.source)}});return J(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Qe.EOI_ANCHOR_FOUND,tokenTypes:[i]}))}r(IV,"findEndOfInputAnchor");function PV(e){let t=$t(e,o=>o.PATTERN.test(""));return J(t,o=>({message:"Token Type: ->"+o.name+"<- static 'PATTERN' must not match an empty string",type:Qe.EMPTY_MATCH_PATTERN,tokenTypes:[o]}))}r(PV,"findEmptyMatchRegExps");var DV=/[^\\[][\^]|^\^/;function BV(e){class t extends xo{static{r(this,"StartAnchorFinder")}constructor(){super(...arguments),this.found=!1}visitStartAnchor(a){this.found=!0}}let n=$t(e,i=>{let a=i.PATTERN;try{let s=oa(a),c=new t;return c.visit(s),c.found}catch{return DV.test(a.source)}});return J(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Qe.SOI_ANCHOR_FOUND,tokenTypes:[i]}))}r(BV,"findStartOfInputAnchor");function qV(e){let t=$t(e,o=>{let i=o[ni];return i instanceof RegExp&&(i.multiline||i.global)});return J(t,o=>({message:"Token Type: ->"+o.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:Qe.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[o]}))}r(qV,"findUnsupportedFlags");function GV(e){let t=[],n=J(e,a=>Lt(e,(s,c)=>(a.PATTERN.source===c.PATTERN.source&&!Je(t,c)&&c.PATTERN!==nt.NA&&(t.push(c),s.push(c)),s),[]));n=kn(n);let o=$t(n,a=>a.length>1);return J(o,a=>{let s=J(a,u=>u.name);return{message:`The same RegExp pattern ->${Ct(a).PATTERN}<-has been used in all of the following Token Types: ${s.join(", ")} <-`,type:Qe.DUPLICATE_PATTERNS_FOUND,tokenTypes:a}})}r(GV,"findDuplicatePatterns");function jV(e){let t=$t(e,o=>{if(!X(o,"GROUP"))return!1;let i=o.GROUP;return i!==nt.SKIPPED&&i!==nt.NA&&!Mt(i)});return J(t,o=>({message:"Token Type: ->"+o.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:Qe.INVALID_GROUP_TYPE_FOUND,tokenTypes:[o]}))}r(jV,"findInvalidGroupType");function VV(e,t){let n=$t(e,i=>i.PUSH_MODE!==void 0&&!Je(t,i.PUSH_MODE));return J(n,i=>({message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,type:Qe.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}))}r(VV,"findModesThatDoNotExist");function WV(e){let t=[],n=Lt(e,(o,i,a)=>{let s=i.PATTERN;return s===nt.NA||(Mt(s)?o.push({str:s,idx:a,tokenType:i}):Gr(s)&&HV(s)&&o.push({str:s.source,idx:a,tokenType:i})),o},[]);return Q(e,(o,i)=>{Q(n,({str:a,idx:s,tokenType:c})=>{if(i<s&&zV(a,o.PATTERN)){let u=`Token: ->${c.name}<- can never be matched.
Because it appears AFTER the Token Type ->${o.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;t.push({message:u,type:Qe.UNREACHABLE_PATTERN,tokenTypes:[o,c]})}})}),t}r(WV,"findUnreachablePatterns");function zV(e,t){if(Gr(t)){let n=t.exec(e);return n!==null&&n.index===0}else{if(cr(t))return t(e,0,[],{});if(X(t,"exec"))return t.exec(e,0,[],{});if(typeof t=="string")return t===e;throw Error("non exhaustive match")}}r(zV,"testTokenType");function HV(e){return An([".","\\","[","]","|","^","$","(",")","?","*","+","{"],n=>e.source.indexOf(n)!==-1)===void 0}r(HV,"noMetaChar");function Tv(e){let t=e.ignoreCase?"i":"";return new RegExp(`^(?:${e.source})`,t)}r(Tv,"addStartOfInput");function Ev(e){let t=e.ignoreCase?"iy":"y";return new RegExp(`${e.source}`,t)}r(Ev,"addStickyFlag");function _v(e,t,n){let o=[];return X(e,aa)||o.push({message:"A MultiMode Lexer cannot be initialized without a <"+aa+`> property in its definition
`,type:Qe.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),X(e,Du)||o.push({message:"A MultiMode Lexer cannot be initialized without a <"+Du+`> property in its definition
`,type:Qe.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),X(e,Du)&&X(e,aa)&&!X(e.modes,e.defaultMode)&&o.push({message:`A MultiMode Lexer cannot be initialized with a ${aa}: <${e.defaultMode}>which does not exist
`,type:Qe.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),X(e,Du)&&Q(e.modes,(i,a)=>{Q(i,(s,c)=>{if(er(s))o.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${a}> at index: <${c}>
`,type:Qe.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(X(s,"LONGER_ALT")){let u=Y(s.LONGER_ALT)?s.LONGER_ALT:[s.LONGER_ALT];Q(u,p=>{!er(p)&&!Je(i,p)&&o.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${p.name}> on token <${s.name}> outside of mode <${a}>
`,type:Qe.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),o}r(_v,"performRuntimeChecks");function bv(e,t,n){let o=[],i=!1,a=kn(Nt(Le(e.modes))),s=Ro(a,u=>u[ni]===nt.NA),c=vv(n);return t&&Q(s,u=>{let p=Av(u,c);if(p!==!1){let S={message:KV(u,p),type:p.issue,tokenType:u};o.push(S)}else X(u,"LINE_BREAKS")?u.LINE_BREAKS===!0&&(i=!0):Pu(c,u.PATTERN)&&(i=!0)}),t&&!i&&o.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:Qe.NO_LINE_BREAKS_FLAGS}),o}r(bv,"performWarningRuntimeChecks");function Rv(e){let t={},n=Ae(e);return Q(n,o=>{let i=e[o];if(Y(i))t[o]=[];else throw Error("non exhaustive match")}),t}r(Rv,"cloneEmptyGroups");function kv(e){let t=e.PATTERN;if(Gr(t))return!1;if(cr(t))return!0;if(X(t,"exec"))return!0;if(Mt(t))return!1;throw Error("non exhaustive match")}r(kv,"isCustomPattern");function YV(e){return Mt(e)&&e.length===1?e.charCodeAt(0):!1}r(YV,"isShortPattern");var xv={test:r(function(e){let t=e.length;for(let n=this.lastIndex;n<t;n++){let o=e.charCodeAt(n);if(o===10)return this.lastIndex=n+1,!0;if(o===13)return e.charCodeAt(n+1)===10?this.lastIndex=n+2:this.lastIndex=n+1,!0}return!1},"test"),lastIndex:0};function Av(e,t){if(X(e,"LINE_BREAKS"))return!1;if(Gr(e.PATTERN)){try{Pu(t,e.PATTERN)}catch(n){return{issue:Qe.IDENTIFY_TERMINATOR,errMsg:n.message}}return!1}else{if(Mt(e.PATTERN))return!1;if(kv(e))return{issue:Qe.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}r(Av,"checkLineBreaksIssues");function KV(e,t){if(t.issue===Qe.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${e.name}> Token Type
	 Root cause: ${t.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(t.issue===Qe.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${e.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}r(KV,"buildLineBreakIssueMessage");function vv(e){return J(e,n=>Mt(n)?n.charCodeAt(0):n)}r(vv,"getCharCodes");function aS(e,t,n){e[t]===void 0?e[t]=[n]:e[t].push(n)}r(aS,"addToMapOfArrays");var ia=256,Bu=[];function vn(e){return e<ia?e:Bu[e]}r(vn,"charCodeToOptimizedIndex");function JV(){if(de(Bu)){Bu=new Array(65536);for(let e=0;e<65536;e++)Bu[e]=e>255?255+~~(e/255):e}}r(JV,"initCharCodeToOptimizedIndexMap");function Gn(e,t){let n=e.tokenTypeIdx;return n===t.tokenTypeIdx?!0:t.isParent===!0&&t.categoryMatchesMap[n]===!0}r(Gn,"tokenStructuredMatcher");function sa(e,t){return e.tokenTypeIdx===t.tokenTypeIdx}r(sa,"tokenStructuredMatcherNoCategories");var Uv=1,Lv={};function jn(e){let t=QV(e);XV(t),$V(t),ZV(t),Q(t,n=>{n.isParent=n.categoryMatches.length>0})}r(jn,"augmentTokenTypes");function QV(e){let t=Pe(e),n=e,o=!0;for(;o;){n=kn(Nt(J(n,a=>a.CATEGORIES)));let i=bo(n,t);t=t.concat(i),de(i)?o=!1:n=i}return t}r(QV,"expandCategories");function XV(e){Q(e,t=>{cS(t)||(Lv[Uv]=t,t.tokenTypeIdx=Uv++),Cv(t)&&!Y(t.CATEGORIES)&&(t.CATEGORIES=[t.CATEGORIES]),Cv(t)||(t.CATEGORIES=[]),eW(t)||(t.categoryMatches=[]),tW(t)||(t.categoryMatchesMap={})})}r(XV,"assignTokenDefaultProps");function ZV(e){Q(e,t=>{t.categoryMatches=[],Q(t.categoryMatchesMap,(n,o)=>{t.categoryMatches.push(Lv[o].tokenTypeIdx)})})}r(ZV,"assignCategoriesTokensProp");function $V(e){Q(e,t=>{Ov([],t)})}r($V,"assignCategoriesMapProp");function Ov(e,t){Q(e,n=>{t.categoryMatchesMap[n.tokenTypeIdx]=!0}),Q(t.CATEGORIES,n=>{let o=e.concat(t);Je(o,n)||Ov(o,n)})}r(Ov,"singleAssignCategoriesToksMap");function cS(e){return X(e,"tokenTypeIdx")}r(cS,"hasShortKeyProperty");function Cv(e){return X(e,"CATEGORIES")}r(Cv,"hasCategoriesProperty");function eW(e){return X(e,"categoryMatches")}r(eW,"hasExtendingTokensTypesProperty");function tW(e){return X(e,"categoryMatchesMap")}r(tW,"hasExtendingTokensTypesMapProperty");function Nv(e){return X(e,"tokenTypeIdx")}r(Nv,"isTokenType");var lS={buildUnableToPopLexerModeMessage(e){return`Unable to pop Lexer Mode after encountering Token ->${e.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(e,t,n,o,i){return`unexpected character: ->${e.charAt(t)}<- at offset: ${t}, skipped ${n} characters.`}};var Qe;(function(e){e[e.MISSING_PATTERN=0]="MISSING_PATTERN",e[e.INVALID_PATTERN=1]="INVALID_PATTERN",e[e.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",e[e.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",e[e.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",e[e.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",e[e.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",e[e.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",e[e.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",e[e.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",e[e.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",e[e.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",e[e.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",e[e.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",e[e.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",e[e.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",e[e.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",e[e.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(Qe||(Qe={}));var Vs={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:lS,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(Vs);var nt=class{static{r(this,"Lexer")}constructor(t,n=Vs){if(this.lexerDefinition=t,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(i,a)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;let s=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${s}--> <${i}>`);let{time:c,value:u}=Is(a),p=c>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&p(`${s}<-- <${i}> time: ${c}ms`),this.traceInitIndent--,u}else return a()},typeof n=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=Ht({},Vs,n);let o=this.config.traceInitPerf;o===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof o=="number"&&(this.traceInitMaxIdent=o,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let i,a=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===Vs.lineTerminatorsPattern)this.config.lineTerminatorsPattern=xv;else if(this.config.lineTerminatorCharacters===Vs.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(n.safeMode&&n.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),Y(t)?i={modes:{defaultMode:Pe(t)},defaultMode:aa}:(a=!1,i=Pe(t))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(_v(i,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(bv(i,this.trackStartLines,this.config.lineTerminatorCharacters))})),i.modes=i.modes?i.modes:{},Q(i.modes,(c,u)=>{i.modes[u]=Ro(c,p=>er(p))});let s=Ae(i.modes);if(Q(i.modes,(c,u)=>{this.TRACE_INIT(`Mode: <${u}> processing`,()=>{if(this.modes.push(u),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(yv(c,s))}),de(this.lexerDefinitionErrors)){jn(c);let p;this.TRACE_INIT("analyzeTokenTypes",()=>{p=Sv(c,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:n.positionTracking,ensureOptimizations:n.ensureOptimizations,safeMode:n.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[u]=p.patternIdxToConfig,this.charCodeToPatternIdxToConfig[u]=p.charCodeToPatternIdxToConfig,this.emptyGroups=Ht({},this.emptyGroups,p.emptyGroups),this.hasCustom=p.hasCustom||this.hasCustom,this.canModeBeOptimized[u]=p.canBeOptimized}})}),this.defaultMode=i.defaultMode,!de(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){let u=J(this.lexerDefinitionErrors,p=>p.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+u)}Q(this.lexerDefinitionWarning,c=>{Fs(c.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(sS?(this.chopInput=Br,this.match=this.matchWithTest):(this.updateLastIndex=rt,this.match=this.matchWithExec),a&&(this.handleModes=rt),this.trackStartLines===!1&&(this.computeNewColumn=Br),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=rt),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{let c=Lt(this.canModeBeOptimized,(u,p,g)=>(p===!1&&u.push(g),u),[]);if(n.ensureOptimizations&&!de(c))throw Error(`Lexer Modes: < ${c.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{pv()}),this.TRACE_INIT("toFastProperties",()=>{Ps(this)})})}tokenize(t,n=this.defaultMode){if(!de(this.lexerDefinitionErrors)){let i=J(this.lexerDefinitionErrors,a=>a.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(t,n)}tokenizeInternal(t,n){let o,i,a,s,c,u,p,g,S,x,L,G,P,z,B,b,E=t,w=E.length,V=0,le=0,Me=this.hasCustom?0:Math.floor(t.length/10),at=new Array(Me),zr=[],pr=this.trackStartLines?1:void 0,Gt=this.trackStartLines?1:void 0,bt=Rv(this.emptyGroups),Hn=this.trackStartLines,sn=this.config.lineTerminatorsPattern,Cn=0,Or=[],cn=[],ln=[],un=[];Object.freeze(un);let sr;function Ln(){return Or}r(Ln,"getPossiblePatternsSlow");function dn(mt){let Vt=vn(mt),Hr=cn[Vt];return Hr===void 0?un:Hr}r(dn,"getPossiblePatternsOptimized");let si=r(mt=>{if(ln.length===1&&mt.tokenType.PUSH_MODE===void 0){let Vt=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(mt);zr.push({offset:mt.startOffset,line:mt.startLine,column:mt.startColumn,length:mt.image.length,message:Vt})}else{ln.pop();let Vt=xn(ln);Or=this.patternIdxToConfig[Vt],cn=this.charCodeToPatternIdxToConfig[Vt],Cn=Or.length;let Hr=this.canModeBeOptimized[Vt]&&this.config.safeMode===!1;cn&&Hr?sr=dn:sr=Ln}},"pop_mode");function Yn(mt){ln.push(mt),cn=this.charCodeToPatternIdxToConfig[mt],Or=this.patternIdxToConfig[mt],Cn=Or.length,Cn=Or.length;let Vt=this.canModeBeOptimized[mt]&&this.config.safeMode===!1;cn&&Vt?sr=dn:sr=Ln}r(Yn,"push_mode"),Yn.call(this,n);let jt,Go=this.config.recoveryEnabled;for(;V<w;){u=null;let mt=E.charCodeAt(V),Vt=sr(mt),Hr=Vt.length;for(o=0;o<Hr;o++){jt=Vt[o];let It=jt.pattern;p=null;let Kt=jt.short;if(Kt!==!1?mt===Kt&&(u=It):jt.isCustom===!0?(b=It.exec(E,V,at,bt),b!==null?(u=b[0],b.payload!==void 0&&(p=b.payload)):u=null):(this.updateLastIndex(It,V),u=this.match(It,t,V)),u!==null){if(c=jt.longerAlt,c!==void 0){let Rt=c.length;for(a=0;a<Rt;a++){let mr=Or[c[a]],Nr=mr.pattern;if(g=null,mr.isCustom===!0?(b=Nr.exec(E,V,at,bt),b!==null?(s=b[0],b.payload!==void 0&&(g=b.payload)):s=null):(this.updateLastIndex(Nr,V),s=this.match(Nr,t,V)),s&&s.length>u.length){u=s,p=g,jt=mr;break}}}break}}if(u!==null){if(S=u.length,x=jt.group,x!==void 0&&(L=jt.tokenTypeIdx,G=this.createTokenInstance(u,V,L,jt.tokenType,pr,Gt,S),this.handlePayload(G,p),x===!1?le=this.addToken(at,le,G):bt[x].push(G)),t=this.chopInput(t,S),V=V+S,Gt=this.computeNewColumn(Gt,S),Hn===!0&&jt.canLineTerminator===!0){let It=0,Kt,Rt;sn.lastIndex=0;do Kt=sn.test(u),Kt===!0&&(Rt=sn.lastIndex-1,It++);while(Kt===!0);It!==0&&(pr=pr+It,Gt=S-Rt,this.updateTokenEndLineColumnLocation(G,x,Rt,It,pr,Gt,S))}this.handleModes(jt,si,Yn,G)}else{let It=V,Kt=pr,Rt=Gt,mr=Go===!1;for(;mr===!1&&V<w;)for(t=this.chopInput(t,1),V++,i=0;i<Cn;i++){let Nr=Or[i],Yr=Nr.pattern,jo=Nr.short;if(jo!==!1?E.charCodeAt(V)===jo&&(mr=!0):Nr.isCustom===!0?mr=Yr.exec(E,V,at,bt)!==null:(this.updateLastIndex(Yr,V),mr=Yr.exec(t)!==null),mr===!0)break}if(P=V-It,Gt=this.computeNewColumn(Gt,P),B=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(E,It,P,Kt,Rt),zr.push({offset:It,line:Kt,column:Rt,length:P,message:B}),Go===!1)break}}return this.hasCustom||(at.length=le),{tokens:at,groups:bt,errors:zr}}handleModes(t,n,o,i){if(t.pop===!0){let a=t.push;n(i),a!==void 0&&o.call(this,a)}else t.push!==void 0&&o.call(this,t.push)}chopInput(t,n){return t.substring(n)}updateLastIndex(t,n){t.lastIndex=n}updateTokenEndLineColumnLocation(t,n,o,i,a,s,c){let u,p;n!==void 0&&(u=o===c-1,p=u?-1:0,i===1&&u===!0||(t.endLine=a+p,t.endColumn=s-1+-p))}computeNewColumn(t,n){return t+n}createOffsetOnlyToken(t,n,o,i){return{image:t,startOffset:n,tokenTypeIdx:o,tokenType:i}}createStartOnlyToken(t,n,o,i,a,s){return{image:t,startOffset:n,startLine:a,startColumn:s,tokenTypeIdx:o,tokenType:i}}createFullToken(t,n,o,i,a,s,c){return{image:t,startOffset:n,endOffset:n+c-1,startLine:a,endLine:a,startColumn:s,endColumn:s+c-1,tokenTypeIdx:o,tokenType:i}}addTokenUsingPush(t,n,o){return t.push(o),n}addTokenUsingMemberAccess(t,n,o){return t[n]=o,n++,n}handlePayloadNoCustom(t,n){}handlePayloadWithCustom(t,n){n!==null&&(t.payload=n)}matchWithTest(t,n,o){return t.test(n)===!0?n.substring(o,t.lastIndex):null}matchWithExec(t,n){let o=t.exec(n);return o!==null?o[0]:null}};nt.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";nt.NA=/NOT_APPLICABLE/;function oi(e){return uS(e)?e.LABEL:e.name}r(oi,"tokenLabel");function uS(e){return Mt(e.LABEL)&&e.LABEL!==""}r(uS,"hasTokenLabel");var rW="parent",Mv="categories",wv="label",Fv="group",Iv="push_mode",Pv="pop_mode",Dv="longer_alt",Bv="line_breaks",qv="start_chars_hint";function Vn(e){return nW(e)}r(Vn,"createToken");function nW(e){let t=e.pattern,n={};if(n.name=e.name,er(t)||(n.PATTERN=t),X(e,rW))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return X(e,Mv)&&(n.CATEGORIES=e[Mv]),jn([n]),X(e,wv)&&(n.LABEL=e[wv]),X(e,Fv)&&(n.GROUP=e[Fv]),X(e,Pv)&&(n.POP_MODE=e[Pv]),X(e,Iv)&&(n.PUSH_MODE=e[Iv]),X(e,Dv)&&(n.LONGER_ALT=e[Dv]),X(e,Bv)&&(n.LINE_BREAKS=e[Bv]),X(e,qv)&&(n.START_CHARS_HINT=e[qv]),n}r(nW,"createTokenInternal");var tn=Vn({name:"EOF",pattern:nt.NA});jn([tn]);function ii(e,t,n,o,i,a,s,c){return{image:t,startOffset:n,endOffset:o,startLine:i,endLine:a,startColumn:s,endColumn:c,tokenTypeIdx:e.tokenTypeIdx,tokenType:e}}r(ii,"createTokenInstance");function dS(e,t){return Gn(e,t)}r(dS,"tokenMatcher");var Wn={buildMismatchTokenMessage({expected:e,actual:t,previous:n,ruleName:o}){return`Expecting ${uS(e)?`--> ${oi(e)} <--`:`token of type --> ${e.name} <--`} but found --> '${t.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:e,ruleName:t}){return"Redundant input, expecting EOF but found: "+e.image},buildNoViableAltMessage({expectedPathsPerAlt:e,actual:t,previous:n,customUserDescription:o,ruleName:i}){let a="Expecting: ",c=`
but found: '`+Ct(t).image+"'";if(o)return a+o+c;{let u=Lt(e,(x,L)=>x.concat(L),[]),p=J(u,x=>`[${J(x,L=>oi(L)).join(", ")}]`),S=`one of these possible Token sequences:
${J(p,(x,L)=>`  ${L+1}. ${x}`).join(`
`)}`;return a+S+c}},buildEarlyExitMessage({expectedIterationPaths:e,actual:t,customUserDescription:n,ruleName:o}){let i="Expecting: ",s=`
but found: '`+Ct(t).image+"'";if(n)return i+n+s;{let u=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${J(e,p=>`[${J(p,g=>oi(g)).join(",")}]`).join(" ,")}>`;return i+u+s}}};Object.freeze(Wn);var Gv={buildRuleNotFoundError(e,t){return"Invalid grammar, reference to a rule which is not defined: ->"+t.nonTerminalName+`<-
inside top level rule: ->`+e.name+"<-"}},rn={buildDuplicateFoundError(e,t){function n(g){return g instanceof Se?g.terminalType.name:g instanceof De?g.nonTerminalName:""}r(n,"getExtraProductionArgument");let o=e.name,i=Ct(t),a=i.idx,s=Rr(i),c=n(i),u=a>0,p=`->${s}${u?a:""}<- ${c?`with argument: ->${c}<-`:""}
                  appears more than once (${t.length} times) in the top level rule: ->${o}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return p=p.replace(/[ \t]+/g," "),p=p.replace(/\s\s+/g,`
`),p},buildNamespaceConflictError(e){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${e.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(e){let t=J(e.prefixPath,i=>oi(i)).join(", "),n=e.alternation.idx===0?"":e.alternation.idx;return`Ambiguous alternatives: <${e.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${n}> inside <${e.topLevelRule.name}> Rule,
<${t}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(e){let t=J(e.prefixPath,i=>oi(i)).join(", "),n=e.alternation.idx===0?"":e.alternation.idx,o=`Ambiguous Alternatives Detected: <${e.ambiguityIndices.join(" ,")}> in <OR${n}> inside <${e.topLevelRule.name}> Rule,
<${t}> may appears as a prefix path in all these alternatives.
`;return o=o+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,o},buildEmptyRepetitionError(e){let t=Rr(e.repetition);return e.repetition.idx!==0&&(t+=e.repetition.idx),`The repetition <${t}> within Rule <${e.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(e){return"deprecated"},buildEmptyAlternationError(e){return`Ambiguous empty alternative: <${e.emptyChoiceIdx+1}> in <OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(e){return`An Alternation cannot have more than 256 alternatives:
<OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.
 has ${e.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(e){let t=e.topLevelRule.name,n=J(e.leftRecursionPath,a=>a.name),o=`${t} --> ${n.concat([t]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${t}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${o}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(e){return"deprecated"},buildDuplicateRuleNameError(e){let t;return e.topLevelRule instanceof ur?t=e.topLevelRule.name:t=e.topLevelRule,`Duplicate definition, rule: ->${t}<- is already defined in the grammar: ->${e.grammarName}<-`}};function jv(e,t){let n=new fS(e,t);return n.resolveRefs(),n.errors}r(jv,"resolveGrammar");var fS=class extends dr{static{r(this,"GastRefResolverVisitor")}constructor(t,n){super(),this.nameToTopRule=t,this.errMsgProvider=n,this.errors=[]}resolveRefs(){Q(Le(this.nameToTopRule),t=>{this.currTopLevel=t,t.accept(this)})}visitNonTerminal(t){let n=this.nameToTopRule[t.nonTerminalName];if(n)t.referencedRule=n;else{let o=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,t);this.errors.push({message:o,type:wt.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:t.nonTerminalName})}}};var pS=class extends qn{static{r(this,"AbstractNextPossibleTokensWalker")}constructor(t,n){super(),this.topProd=t,this.path=n,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=Pe(this.path.ruleStack).reverse(),this.occurrenceStack=Pe(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(t,n=[]){this.found||super.walk(t,n)}walkProdRef(t,n,o){if(t.referencedRule.name===this.nextProductionName&&t.idx===this.nextProductionOccurrence){let i=n.concat(o);this.updateExpectedNext(),this.walk(t.referencedRule,i)}}updateExpectedNext(){de(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}},qu=class extends pS{static{r(this,"NextAfterTokenWalker")}constructor(t,n){super(t,n),this.path=n,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(t,n,o){if(this.isAtEndOfPath&&t.terminalType.name===this.nextTerminalName&&t.idx===this.nextTerminalOccurrence&&!this.found){let i=n.concat(o),a=new Be({definition:i});this.possibleTokTypes=ti(a),this.found=!0}}},ca=class extends qn{static{r(this,"AbstractNextTerminalAfterProductionWalker")}constructor(t,n){super(),this.topRule=t,this.occurrence=n,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}},Gu=class extends ca{static{r(this,"NextTerminalAfterManyWalker")}walkMany(t,n,o){if(t.idx===this.occurrence){let i=Ct(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof Se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkMany(t,n,o)}},Ws=class extends ca{static{r(this,"NextTerminalAfterManySepWalker")}walkManySep(t,n,o){if(t.idx===this.occurrence){let i=Ct(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof Se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkManySep(t,n,o)}},ju=class extends ca{static{r(this,"NextTerminalAfterAtLeastOneWalker")}walkAtLeastOne(t,n,o){if(t.idx===this.occurrence){let i=Ct(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof Se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOne(t,n,o)}},zs=class extends ca{static{r(this,"NextTerminalAfterAtLeastOneSepWalker")}walkAtLeastOneSep(t,n,o){if(t.idx===this.occurrence){let i=Ct(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof Se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOneSep(t,n,o)}};function Vu(e,t,n=[]){n=Pe(n);let o=[],i=0;function a(c){return c.concat(gt(e,i+1))}r(a,"remainingPathWith");function s(c){let u=Vu(a(c),t,n);return o.concat(u)}for(r(s,"getAlternativesForProd");n.length<t&&i<e.length;){let c=e[i];if(c instanceof Be)return s(c.definition);if(c instanceof De)return s(c.definition);if(c instanceof We)o=s(c.definition);else if(c instanceof Tt){let u=c.definition.concat([new Ue({definition:c.definition})]);return s(u)}else if(c instanceof Et){let u=[new Be({definition:c.definition}),new Ue({definition:[new Se({terminalType:c.separator})].concat(c.definition)})];return s(u)}else if(c instanceof ut){let u=c.definition.concat([new Ue({definition:[new Se({terminalType:c.separator})].concat(c.definition)})]);o=s(u)}else if(c instanceof Ue){let u=c.definition.concat([new Ue({definition:c.definition})]);o=s(u)}else{if(c instanceof dt)return Q(c.definition,u=>{de(u.definition)===!1&&(o=s(u.definition))}),o;if(c instanceof Se)n.push(c.terminalType);else throw Error("non exhaustive match")}i++}return o.push({partialPath:n,suffixDef:gt(e,i)}),o}r(Vu,"possiblePathsFrom");function Wu(e,t,n,o){let i="EXIT_NONE_TERMINAL",a=[i],s="EXIT_ALTERNATIVE",c=!1,u=t.length,p=u-o-1,g=[],S=[];for(S.push({idx:-1,def:e,ruleStack:[],occurrenceStack:[]});!de(S);){let x=S.pop();if(x===s){c&&xn(S).idx<=p&&S.pop();continue}let L=x.def,G=x.idx,P=x.ruleStack,z=x.occurrenceStack;if(de(L))continue;let B=L[0];if(B===i){let b={idx:G,def:gt(L),ruleStack:Bn(P),occurrenceStack:Bn(z)};S.push(b)}else if(B instanceof Se)if(G<u-1){let b=G+1,E=t[b];if(n(E,B.terminalType)){let w={idx:b,def:gt(L),ruleStack:P,occurrenceStack:z};S.push(w)}}else if(G===u-1)g.push({nextTokenType:B.terminalType,nextTokenOccurrence:B.idx,ruleStack:P,occurrenceStack:z}),c=!0;else throw Error("non exhaustive match");else if(B instanceof De){let b=Pe(P);b.push(B.nonTerminalName);let E=Pe(z);E.push(B.idx);let w={idx:G,def:B.definition.concat(a,gt(L)),ruleStack:b,occurrenceStack:E};S.push(w)}else if(B instanceof We){let b={idx:G,def:gt(L),ruleStack:P,occurrenceStack:z};S.push(b),S.push(s);let E={idx:G,def:B.definition.concat(gt(L)),ruleStack:P,occurrenceStack:z};S.push(E)}else if(B instanceof Tt){let b=new Ue({definition:B.definition,idx:B.idx}),E=B.definition.concat([b],gt(L)),w={idx:G,def:E,ruleStack:P,occurrenceStack:z};S.push(w)}else if(B instanceof Et){let b=new Se({terminalType:B.separator}),E=new Ue({definition:[b].concat(B.definition),idx:B.idx}),w=B.definition.concat([E],gt(L)),V={idx:G,def:w,ruleStack:P,occurrenceStack:z};S.push(V)}else if(B instanceof ut){let b={idx:G,def:gt(L),ruleStack:P,occurrenceStack:z};S.push(b),S.push(s);let E=new Se({terminalType:B.separator}),w=new Ue({definition:[E].concat(B.definition),idx:B.idx}),V=B.definition.concat([w],gt(L)),le={idx:G,def:V,ruleStack:P,occurrenceStack:z};S.push(le)}else if(B instanceof Ue){let b={idx:G,def:gt(L),ruleStack:P,occurrenceStack:z};S.push(b),S.push(s);let E=new Ue({definition:B.definition,idx:B.idx}),w=B.definition.concat([E],gt(L)),V={idx:G,def:w,ruleStack:P,occurrenceStack:z};S.push(V)}else if(B instanceof dt)for(let b=B.definition.length-1;b>=0;b--){let E=B.definition[b],w={idx:G,def:E.definition.concat(gt(L)),ruleStack:P,occurrenceStack:z};S.push(w),S.push(s)}else if(B instanceof Be)S.push({idx:G,def:B.definition.concat(gt(L)),ruleStack:P,occurrenceStack:z});else if(B instanceof ur)S.push(oW(B,G,P,z));else throw Error("non exhaustive match")}return g}r(Wu,"nextPossibleTokensAfter");function oW(e,t,n,o){let i=Pe(n);i.push(e.name);let a=Pe(o);return a.push(1),{idx:t,def:e.definition,ruleStack:i,occurrenceStack:a}}r(oW,"expandTopLevelRule");var ot;(function(e){e[e.OPTION=0]="OPTION",e[e.REPETITION=1]="REPETITION",e[e.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",e[e.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",e[e.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",e[e.ALTERNATION=5]="ALTERNATION"})(ot||(ot={}));function Hu(e){if(e instanceof We||e==="Option")return ot.OPTION;if(e instanceof Ue||e==="Repetition")return ot.REPETITION;if(e instanceof Tt||e==="RepetitionMandatory")return ot.REPETITION_MANDATORY;if(e instanceof Et||e==="RepetitionMandatoryWithSeparator")return ot.REPETITION_MANDATORY_WITH_SEPARATOR;if(e instanceof ut||e==="RepetitionWithSeparator")return ot.REPETITION_WITH_SEPARATOR;if(e instanceof dt||e==="Alternation")return ot.ALTERNATION;throw Error("non exhaustive match")}r(Hu,"getProdType");function Wv(e,t,n,o,i,a){let s=Hs(e,t,n),c=Qv(s)?sa:Gn;return a(s,o,c,i)}r(Wv,"buildLookaheadFuncForOr");function zv(e,t,n,o,i,a){let s=Ys(e,t,i,n),c=Qv(s)?sa:Gn;return a(s[0],c,o)}r(zv,"buildLookaheadFuncForOptionalProd");function Hv(e,t,n,o){let i=e.length,a=qt(e,s=>qt(s,c=>c.length===1));if(t)return function(s){let c=J(s,u=>u.GATE);for(let u=0;u<i;u++){let p=e[u],g=p.length,S=c[u];if(!(S!==void 0&&S.call(this)===!1))e:for(let x=0;x<g;x++){let L=p[x],G=L.length;for(let P=0;P<G;P++){let z=this.LA(P+1);if(n(z,L[P])===!1)continue e}return u}}};if(a&&!o){let s=J(e,u=>Nt(u)),c=Lt(s,(u,p,g)=>(Q(p,S=>{X(u,S.tokenTypeIdx)||(u[S.tokenTypeIdx]=g),Q(S.categoryMatches,x=>{X(u,x)||(u[x]=g)})}),u),{});return function(){let u=this.LA(1);return c[u.tokenTypeIdx]}}else return function(){for(let s=0;s<i;s++){let c=e[s],u=c.length;e:for(let p=0;p<u;p++){let g=c[p],S=g.length;for(let x=0;x<S;x++){let L=this.LA(x+1);if(n(L,g[x])===!1)continue e}return s}}}}r(Hv,"buildAlternativesLookAheadFunc");function Yv(e,t,n){let o=qt(e,a=>a.length===1),i=e.length;if(o&&!n){let a=Nt(e);if(a.length===1&&de(a[0].categoryMatches)){let c=a[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===c}}else{let s=Lt(a,(c,u,p)=>(c[u.tokenTypeIdx]=!0,Q(u.categoryMatches,g=>{c[g]=!0}),c),[]);return function(){let c=this.LA(1);return s[c.tokenTypeIdx]===!0}}}else return function(){e:for(let a=0;a<i;a++){let s=e[a],c=s.length;for(let u=0;u<c;u++){let p=this.LA(u+1);if(t(p,s[u])===!1)continue e}return!0}return!1}}r(Yv,"buildSingleAlternativeLookaheadFunction");var hS=class extends qn{static{r(this,"RestDefinitionFinderWalker")}constructor(t,n,o){super(),this.topProd=t,this.targetOccurrence=n,this.targetProdType=o}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(t,n,o,i){return t.idx===this.targetOccurrence&&this.targetProdType===n?(this.restDef=o.concat(i),!0):!1}walkOption(t,n,o){this.checkIsTarget(t,ot.OPTION,n,o)||super.walkOption(t,n,o)}walkAtLeastOne(t,n,o){this.checkIsTarget(t,ot.REPETITION_MANDATORY,n,o)||super.walkOption(t,n,o)}walkAtLeastOneSep(t,n,o){this.checkIsTarget(t,ot.REPETITION_MANDATORY_WITH_SEPARATOR,n,o)||super.walkOption(t,n,o)}walkMany(t,n,o){this.checkIsTarget(t,ot.REPETITION,n,o)||super.walkOption(t,n,o)}walkManySep(t,n,o){this.checkIsTarget(t,ot.REPETITION_WITH_SEPARATOR,n,o)||super.walkOption(t,n,o)}},zu=class extends dr{static{r(this,"InsideDefinitionFinderVisitor")}constructor(t,n,o){super(),this.targetOccurrence=t,this.targetProdType=n,this.targetRef=o,this.result=[]}checkIsTarget(t,n){t.idx===this.targetOccurrence&&this.targetProdType===n&&(this.targetRef===void 0||t===this.targetRef)&&(this.result=t.definition)}visitOption(t){this.checkIsTarget(t,ot.OPTION)}visitRepetition(t){this.checkIsTarget(t,ot.REPETITION)}visitRepetitionMandatory(t){this.checkIsTarget(t,ot.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(t){this.checkIsTarget(t,ot.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(t){this.checkIsTarget(t,ot.REPETITION_WITH_SEPARATOR)}visitAlternation(t){this.checkIsTarget(t,ot.ALTERNATION)}};function Vv(e){let t=new Array(e);for(let n=0;n<e;n++)t[n]=[];return t}r(Vv,"initializeArrayOfArrays");function mS(e){let t=[""];for(let n=0;n<e.length;n++){let o=e[n],i=[];for(let a=0;a<t.length;a++){let s=t[a];i.push(s+"_"+o.tokenTypeIdx);for(let c=0;c<o.categoryMatches.length;c++){let u="_"+o.categoryMatches[c];i.push(s+u)}}t=i}return t}r(mS,"pathToHashKeys");function iW(e,t,n){for(let o=0;o<e.length;o++){if(o===n)continue;let i=e[o];for(let a=0;a<t.length;a++){let s=t[a];if(i[s]===!0)return!1}}return!0}r(iW,"isUniquePrefixHash");function Kv(e,t){let n=J(e,s=>Vu([s],1)),o=Vv(n.length),i=J(n,s=>{let c={};return Q(s,u=>{let p=mS(u.partialPath);Q(p,g=>{c[g]=!0})}),c}),a=n;for(let s=1;s<=t;s++){let c=a;a=Vv(c.length);for(let u=0;u<c.length;u++){let p=c[u];for(let g=0;g<p.length;g++){let S=p[g].partialPath,x=p[g].suffixDef,L=mS(S);if(iW(i,L,u)||de(x)||S.length===t){let P=o[u];if(Yu(P,S)===!1){P.push(S);for(let z=0;z<L.length;z++){let B=L[z];i[u][B]=!0}}}else{let P=Vu(x,s+1,S);a[u]=a[u].concat(P),Q(P,z=>{let B=mS(z.partialPath);Q(B,b=>{i[u][b]=!0})})}}}}return o}r(Kv,"lookAheadSequenceFromAlternatives");function Hs(e,t,n,o){let i=new zu(e,ot.ALTERNATION,o);return t.accept(i),Kv(i.result,n)}r(Hs,"getLookaheadPathsForOr");function Ys(e,t,n,o){let i=new zu(e,n);t.accept(i);let a=i.result,c=new hS(t,e,n).startWalking(),u=new Be({definition:a}),p=new Be({definition:c});return Kv([u,p],o)}r(Ys,"getLookaheadPathsForOptionalProd");function Yu(e,t){e:for(let n=0;n<e.length;n++){let o=e[n];if(o.length===t.length){for(let i=0;i<o.length;i++){let a=t[i],s=o[i];if((a===s||s.categoryMatchesMap[a.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}r(Yu,"containsPath");function Jv(e,t){return e.length<t.length&&qt(e,(n,o)=>{let i=t[o];return n===i||i.categoryMatchesMap[n.tokenTypeIdx]})}r(Jv,"isStrictPrefixOfPath");function Qv(e){return qt(e,t=>qt(t,n=>qt(n,o=>de(o.categoryMatches))))}r(Qv,"areTokenCategoriesNotUsed");function Xv(e){let t=e.lookaheadStrategy.validate({rules:e.rules,tokenTypes:e.tokenTypes,grammarName:e.grammarName});return J(t,n=>Object.assign({type:wt.CUSTOM_LOOKAHEAD_VALIDATION},n))}r(Xv,"validateLookahead");function Zv(e,t,n,o){let i=lr(e,u=>aW(u,n)),a=fW(e,t,n),s=lr(e,u=>lW(u,n)),c=lr(e,u=>cW(u,e,o,n));return i.concat(a,s,c)}r(Zv,"validateGrammar");function aW(e,t){let n=new gS;e.accept(n);let o=n.allProductions,i=JE(o,sW),a=br(i,c=>c.length>1);return J(Le(a),c=>{let u=Ct(c),p=t.buildDuplicateFoundError(e,c),g=Rr(u),S={message:p,type:wt.DUPLICATE_PRODUCTIONS,ruleName:e.name,dslName:g,occurrence:u.idx},x=$v(u);return x&&(S.parameter=x),S})}r(aW,"validateDuplicateProductions");function sW(e){return`${Rr(e)}_#_${e.idx}_#_${$v(e)}`}r(sW,"identifyProductionForDuplicates");function $v(e){return e instanceof Se?e.terminalType.name:e instanceof De?e.nonTerminalName:""}r($v,"getExtraProductionArgument");var gS=class extends dr{static{r(this,"OccurrenceValidationCollector")}constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(t){this.allProductions.push(t)}visitOption(t){this.allProductions.push(t)}visitRepetitionWithSeparator(t){this.allProductions.push(t)}visitRepetitionMandatory(t){this.allProductions.push(t)}visitRepetitionMandatoryWithSeparator(t){this.allProductions.push(t)}visitRepetition(t){this.allProductions.push(t)}visitAlternation(t){this.allProductions.push(t)}visitTerminal(t){this.allProductions.push(t)}};function cW(e,t,n,o){let i=[];if(Lt(t,(s,c)=>c.name===e.name?s+1:s,0)>1){let s=o.buildDuplicateRuleNameError({topLevelRule:e,grammarName:n});i.push({message:s,type:wt.DUPLICATE_RULE_NAME,ruleName:e.name})}return i}r(cW,"validateRuleDoesNotAlreadyExist");function eU(e,t,n){let o=[],i;return Je(t,e)||(i=`Invalid rule override, rule: ->${e}<- cannot be overridden in the grammar: ->${n}<-as it is not defined in any of the super grammars `,o.push({message:i,type:wt.INVALID_RULE_OVERRIDE,ruleName:e})),o}r(eU,"validateRuleIsOverridden");function ES(e,t,n,o=[]){let i=[],a=Ku(t.definition);if(de(a))return[];{let s=e.name;Je(a,e)&&i.push({message:n.buildLeftRecursionError({topLevelRule:e,leftRecursionPath:o}),type:wt.LEFT_RECURSION,ruleName:s});let u=bo(a,o.concat([e])),p=lr(u,g=>{let S=Pe(o);return S.push(g),ES(e,g,n,S)});return i.concat(p)}}r(ES,"validateNoLeftRecursion");function Ku(e){let t=[];if(de(e))return t;let n=Ct(e);if(n instanceof De)t.push(n.referencedRule);else if(n instanceof Be||n instanceof We||n instanceof Tt||n instanceof Et||n instanceof ut||n instanceof Ue)t=t.concat(Ku(n.definition));else if(n instanceof dt)t=Nt(J(n.definition,a=>Ku(a.definition)));else if(!(n instanceof Se))throw Error("non exhaustive match");let o=ei(n),i=e.length>1;if(o&&i){let a=gt(e);return t.concat(Ku(a))}else return t}r(Ku,"getFirstNoneTerminal");var Ks=class extends dr{static{r(this,"OrCollector")}constructor(){super(...arguments),this.alternations=[]}visitAlternation(t){this.alternations.push(t)}};function tU(e,t){let n=new Ks;e.accept(n);let o=n.alternations;return lr(o,a=>{let s=Bn(a.definition);return lr(s,(c,u)=>{let p=Wu([c],[],Gn,1);return de(p)?[{message:t.buildEmptyAlternationError({topLevelRule:e,alternation:a,emptyChoiceIdx:u}),type:wt.NONE_LAST_EMPTY_ALT,ruleName:e.name,occurrence:a.idx,alternative:u+1}]:[]})})}r(tU,"validateEmptyOrAlternative");function rU(e,t,n){let o=new Ks;e.accept(o);let i=o.alternations;return i=Ro(i,s=>s.ignoreAmbiguities===!0),lr(i,s=>{let c=s.idx,u=s.maxLookahead||t,p=Hs(c,e,u,s),g=uW(p,s,e,n),S=dW(p,s,e,n);return g.concat(S)})}r(rU,"validateAmbiguousAlternationAlternatives");var TS=class extends dr{static{r(this,"RepetitionCollector")}constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(t){this.allProductions.push(t)}visitRepetitionMandatory(t){this.allProductions.push(t)}visitRepetitionMandatoryWithSeparator(t){this.allProductions.push(t)}visitRepetition(t){this.allProductions.push(t)}};function lW(e,t){let n=new Ks;e.accept(n);let o=n.alternations;return lr(o,a=>a.definition.length>255?[{message:t.buildTooManyAlternativesError({topLevelRule:e,alternation:a}),type:wt.TOO_MANY_ALTS,ruleName:e.name,occurrence:a.idx}]:[])}r(lW,"validateTooManyAlts");function nU(e,t,n){let o=[];return Q(e,i=>{let a=new TS;i.accept(a);let s=a.allProductions;Q(s,c=>{let u=Hu(c),p=c.maxLookahead||t,g=c.idx,x=Ys(g,i,u,p)[0];if(de(Nt(x))){let L=n.buildEmptyRepetitionError({topLevelRule:i,repetition:c});o.push({message:L,type:wt.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),o}r(nU,"validateSomeNonEmptyLookaheadPath");function uW(e,t,n,o){let i=[],a=Lt(e,(c,u,p)=>(t.definition[p].ignoreAmbiguities===!0||Q(u,g=>{let S=[p];Q(e,(x,L)=>{p!==L&&Yu(x,g)&&t.definition[L].ignoreAmbiguities!==!0&&S.push(L)}),S.length>1&&!Yu(i,g)&&(i.push(g),c.push({alts:S,path:g}))}),c),[]);return J(a,c=>{let u=J(c.alts,g=>g+1);return{message:o.buildAlternationAmbiguityError({topLevelRule:n,alternation:t,ambiguityIndices:u,prefixPath:c.path}),type:wt.AMBIGUOUS_ALTS,ruleName:n.name,occurrence:t.idx,alternatives:c.alts}})}r(uW,"checkAlternativesAmbiguities");function dW(e,t,n,o){let i=Lt(e,(s,c,u)=>{let p=J(c,g=>({idx:u,path:g}));return s.concat(p)},[]);return kn(lr(i,s=>{if(t.definition[s.idx].ignoreAmbiguities===!0)return[];let u=s.idx,p=s.path,g=$t(i,x=>t.definition[x.idx].ignoreAmbiguities!==!0&&x.idx<u&&Jv(x.path,p));return J(g,x=>{let L=[x.idx+1,u+1],G=t.idx===0?"":t.idx;return{message:o.buildAlternationPrefixAmbiguityError({topLevelRule:n,alternation:t,ambiguityIndices:L,prefixPath:x.path}),type:wt.AMBIGUOUS_PREFIX_ALTS,ruleName:n.name,occurrence:G,alternatives:L}})}))}r(dW,"checkPrefixAlternativesAmbiguities");function fW(e,t,n){let o=[],i=J(t,a=>a.name);return Q(e,a=>{let s=a.name;if(Je(i,s)){let c=n.buildNamespaceConflictError(a);o.push({message:c,type:wt.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:s})}}),o}r(fW,"checkTerminalAndNoneTerminalsNameSpace");function oU(e){let t=ea(e,{errMsgProvider:Gv}),n={};return Q(e.rules,o=>{n[o.name]=o}),jv(n,t.errMsgProvider)}r(oU,"resolveGrammar");function iU(e){return e=ea(e,{errMsgProvider:rn}),Zv(e.rules,e.tokenTypes,e.errMsgProvider,e.grammarName)}r(iU,"validateGrammar");var aU="MismatchedTokenException",sU="NoViableAltException",cU="EarlyExitException",lU="NotAllInputParsedException",uU=[aU,sU,cU,lU];Object.freeze(uU);function Ao(e){return Je(uU,e.name)}r(Ao,"isRecognitionException");var la=class extends Error{static{r(this,"RecognitionException")}constructor(t,n){super(t),this.token=n,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},St=class extends la{static{r(this,"MismatchedTokenException")}constructor(t,n,o){super(t,n),this.previousToken=o,this.name=aU}},Js=class extends la{static{r(this,"NoViableAltException")}constructor(t,n,o){super(t,n),this.previousToken=o,this.name=sU}},Qs=class extends la{static{r(this,"NotAllInputParsedException")}constructor(t,n){super(t,n),this.name=lU}},Xs=class extends la{static{r(this,"EarlyExitException")}constructor(t,n,o){super(t,n),this.previousToken=o,this.name=cU}};var SS={},_S="InRuleRecoveryException",yS=class extends Error{static{r(this,"InRuleRecoveryException")}constructor(t){super(t),this.name=_S}},Ju=class{static{r(this,"Recoverable")}initRecoverable(t){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=X(t,"recoveryEnabled")?t.recoveryEnabled:fr.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=pW)}getTokenToInsert(t){let n=ii(t,"",NaN,NaN,NaN,NaN,NaN,NaN);return n.isInsertedInRecovery=!0,n}canTokenTypeBeInsertedInRecovery(t){return!0}canTokenTypeBeDeletedInRecovery(t){return!0}tryInRepetitionRecovery(t,n,o,i){let a=this.findReSyncTokenType(),s=this.exportLexerState(),c=[],u=!1,p=this.LA(1),g=this.LA(1),S=r(()=>{let x=this.LA(0),L=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:p,previous:x,ruleName:this.getCurrRuleFullName()}),G=new St(L,p,this.LA(0));G.resyncedTokens=Bn(c),this.SAVE_ERROR(G)},"generateErrorMessage");for(;!u;)if(this.tokenMatcher(g,i)){S();return}else if(o.call(this)){S(),t.apply(this,n);return}else this.tokenMatcher(g,a)?u=!0:(g=this.SKIP_TOKEN(),this.addToResyncTokens(g,c));this.importLexerState(s)}shouldInRepetitionRecoveryBeTried(t,n,o){return!(o===!1||this.tokenMatcher(this.LA(1),t)||this.isBackTracking()||this.canPerformInRuleRecovery(t,this.getFollowsForInRuleRecovery(t,n)))}getFollowsForInRuleRecovery(t,n){let o=this.getCurrentGrammarPath(t,n);return this.getNextPossibleTokenTypes(o)}tryInRuleRecovery(t,n){if(this.canRecoverWithSingleTokenInsertion(t,n))return this.getTokenToInsert(t);if(this.canRecoverWithSingleTokenDeletion(t)){let o=this.SKIP_TOKEN();return this.consumeToken(),o}throw new yS("sad sad panda")}canPerformInRuleRecovery(t,n){return this.canRecoverWithSingleTokenInsertion(t,n)||this.canRecoverWithSingleTokenDeletion(t)}canRecoverWithSingleTokenInsertion(t,n){if(!this.canTokenTypeBeInsertedInRecovery(t)||de(n))return!1;let o=this.LA(1);return An(n,a=>this.tokenMatcher(o,a))!==void 0}canRecoverWithSingleTokenDeletion(t){return this.canTokenTypeBeDeletedInRecovery(t)?this.tokenMatcher(this.LA(2),t):!1}isInCurrentRuleReSyncSet(t){let n=this.getCurrFollowKey(),o=this.getFollowSetFromFollowKey(n);return Je(o,t)}findReSyncTokenType(){let t=this.flattenFollowSet(),n=this.LA(1),o=2;for(;;){let i=An(t,a=>dS(n,a));if(i!==void 0)return i;n=this.LA(o),o++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return SS;let t=this.getLastExplicitRuleShortName(),n=this.getLastExplicitRuleOccurrenceIndex(),o=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(t),idxInCallingRule:n,inRule:this.shortRuleNameToFullName(o)}}buildFullFollowKeyStack(){let t=this.RULE_STACK,n=this.RULE_OCCURRENCE_STACK;return J(t,(o,i)=>i===0?SS:{ruleName:this.shortRuleNameToFullName(o),idxInCallingRule:n[i],inRule:this.shortRuleNameToFullName(t[i-1])})}flattenFollowSet(){let t=J(this.buildFullFollowKeyStack(),n=>this.getFollowSetFromFollowKey(n));return Nt(t)}getFollowSetFromFollowKey(t){if(t===SS)return[tn];let n=t.ruleName+t.idxInCallingRule+Nu+t.inRule;return this.resyncFollows[n]}addToResyncTokens(t,n){return this.tokenMatcher(t,tn)||n.push(t),n}reSyncTo(t){let n=[],o=this.LA(1);for(;this.tokenMatcher(o,t)===!1;)o=this.SKIP_TOKEN(),this.addToResyncTokens(o,n);return Bn(n)}attemptInRepetitionRecovery(t,n,o,i,a,s,c){}getCurrentGrammarPath(t,n){let o=this.getHumanReadableRuleStack(),i=Pe(this.RULE_OCCURRENCE_STACK);return{ruleStack:o,occurrenceStack:i,lastTok:t,lastTokOccurrence:n}}getHumanReadableRuleStack(){return J(this.RULE_STACK,t=>this.shortRuleNameToFullName(t))}};function pW(e,t,n,o,i,a,s){let c=this.getKeyForAutomaticLookahead(o,i),u=this.firstAfterRepMap[c];if(u===void 0){let x=this.getCurrRuleFullName(),L=this.getGAstProductions()[x];u=new a(L,i).startWalking(),this.firstAfterRepMap[c]=u}let p=u.token,g=u.occurrence,S=u.isEndOfRule;this.RULE_STACK.length===1&&S&&p===void 0&&(p=tn,g=1),!(p===void 0||g===void 0)&&this.shouldInRepetitionRecoveryBeTried(p,g,s)&&this.tryInRepetitionRecovery(e,t,n,p)}r(pW,"attemptInRepetitionRecovery");function Qu(e,t,n){return n|t|e}r(Qu,"getKeyForAutomaticLookahead");var Zs=class{static{r(this,"LLkLookaheadStrategy")}constructor(t){var n;this.maxLookahead=(n=t?.maxLookahead)!==null&&n!==void 0?n:fr.maxLookahead}validate(t){let n=this.validateNoLeftRecursion(t.rules);if(de(n)){let o=this.validateEmptyOrAlternatives(t.rules),i=this.validateAmbiguousAlternationAlternatives(t.rules,this.maxLookahead),a=this.validateSomeNonEmptyLookaheadPath(t.rules,this.maxLookahead);return[...n,...o,...i,...a]}return n}validateNoLeftRecursion(t){return lr(t,n=>ES(n,n,rn))}validateEmptyOrAlternatives(t){return lr(t,n=>tU(n,rn))}validateAmbiguousAlternationAlternatives(t,n){return lr(t,o=>rU(o,n,rn))}validateSomeNonEmptyLookaheadPath(t,n){return nU(t,n,rn)}buildLookaheadForAlternation(t){return Wv(t.prodOccurrence,t.rule,t.maxLookahead,t.hasPredicates,t.dynamicTokensEnabled,Hv)}buildLookaheadForOptional(t){return zv(t.prodOccurrence,t.rule,t.maxLookahead,t.dynamicTokensEnabled,Hu(t.prodType),Yv)}};var Zu=class{static{r(this,"LooksAhead")}initLooksAhead(t){this.dynamicTokensEnabled=X(t,"dynamicTokensEnabled")?t.dynamicTokensEnabled:fr.dynamicTokensEnabled,this.maxLookahead=X(t,"maxLookahead")?t.maxLookahead:fr.maxLookahead,this.lookaheadStrategy=X(t,"lookaheadStrategy")?t.lookaheadStrategy:new Zs({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(t){Q(t,n=>{this.TRACE_INIT(`${n.name} Rule Lookahead`,()=>{let{alternation:o,repetition:i,option:a,repetitionMandatory:s,repetitionMandatoryWithSeparator:c,repetitionWithSeparator:u}=mW(n);Q(o,p=>{let g=p.idx===0?"":p.idx;this.TRACE_INIT(`${Rr(p)}${g}`,()=>{let S=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:p.idx,rule:n,maxLookahead:p.maxLookahead||this.maxLookahead,hasPredicates:p.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),x=Qu(this.fullRuleNameToShort[n.name],256,p.idx);this.setLaFuncCache(x,S)})}),Q(i,p=>{this.computeLookaheadFunc(n,p.idx,768,"Repetition",p.maxLookahead,Rr(p))}),Q(a,p=>{this.computeLookaheadFunc(n,p.idx,512,"Option",p.maxLookahead,Rr(p))}),Q(s,p=>{this.computeLookaheadFunc(n,p.idx,1024,"RepetitionMandatory",p.maxLookahead,Rr(p))}),Q(c,p=>{this.computeLookaheadFunc(n,p.idx,1536,"RepetitionMandatoryWithSeparator",p.maxLookahead,Rr(p))}),Q(u,p=>{this.computeLookaheadFunc(n,p.idx,1280,"RepetitionWithSeparator",p.maxLookahead,Rr(p))})})})}computeLookaheadFunc(t,n,o,i,a,s){this.TRACE_INIT(`${s}${n===0?"":n}`,()=>{let c=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:n,rule:t,maxLookahead:a||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i}),u=Qu(this.fullRuleNameToShort[t.name],o,n);this.setLaFuncCache(u,c)})}getKeyForAutomaticLookahead(t,n){let o=this.getLastExplicitRuleShortName();return Qu(o,t,n)}getLaFuncFromCache(t){return this.lookAheadFuncsCache.get(t)}setLaFuncCache(t,n){this.lookAheadFuncsCache.set(t,n)}},bS=class extends dr{static{r(this,"DslMethodsCollectorVisitor")}constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(t){this.dslMethods.option.push(t)}visitRepetitionWithSeparator(t){this.dslMethods.repetitionWithSeparator.push(t)}visitRepetitionMandatory(t){this.dslMethods.repetitionMandatory.push(t)}visitRepetitionMandatoryWithSeparator(t){this.dslMethods.repetitionMandatoryWithSeparator.push(t)}visitRepetition(t){this.dslMethods.repetition.push(t)}visitAlternation(t){this.dslMethods.alternation.push(t)}},Xu=new bS;function mW(e){Xu.reset(),e.accept(Xu);let t=Xu.dslMethods;return Xu.reset(),t}r(mW,"collectMethods");function xS(e,t){isNaN(e.startOffset)===!0?(e.startOffset=t.startOffset,e.endOffset=t.endOffset):e.endOffset<t.endOffset&&(e.endOffset=t.endOffset)}r(xS,"setNodeLocationOnlyOffset");function AS(e,t){isNaN(e.startOffset)===!0?(e.startOffset=t.startOffset,e.startColumn=t.startColumn,e.startLine=t.startLine,e.endOffset=t.endOffset,e.endColumn=t.endColumn,e.endLine=t.endLine):e.endOffset<t.endOffset&&(e.endOffset=t.endOffset,e.endColumn=t.endColumn,e.endLine=t.endLine)}r(AS,"setNodeLocationFull");function dU(e,t,n){e.children[n]===void 0?e.children[n]=[t]:e.children[n].push(t)}r(dU,"addTerminalToCst");function fU(e,t,n){e.children[t]===void 0?e.children[t]=[n]:e.children[t].push(n)}r(fU,"addNoneTerminalToCst");var hW="name";function vS(e,t){Object.defineProperty(e,hW,{enumerable:!1,configurable:!0,writable:!1,value:t})}r(vS,"defineNameProp");function gW(e,t){let n=Ae(e),o=n.length;for(let i=0;i<o;i++){let a=n[i],s=e[a],c=s.length;for(let u=0;u<c;u++){let p=s[u];p.tokenTypeIdx===void 0&&this[p.name](p.children,t)}}}r(gW,"defaultVisit");function pU(e,t){let n=r(function(){},"derivedConstructor");vS(n,e+"BaseSemantics");let o={visit:r(function(i,a){if(Y(i)&&(i=i[0]),!er(i))return this[i.name](i.children,a)},"visit"),validateVisitor:r(function(){let i=TW(this,t);if(!de(i)){let a=J(i,s=>s.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${a.join(`

`).replace(/\n/g,`
	`)}`)}},"validateVisitor")};return n.prototype=o,n.prototype.constructor=n,n._RULE_NAMES=t,n}r(pU,"createBaseSemanticVisitorConstructor");function mU(e,t,n){let o=r(function(){},"derivedConstructor");vS(o,e+"BaseSemanticsWithDefaults");let i=Object.create(n.prototype);return Q(t,a=>{i[a]=gW}),o.prototype=i,o.prototype.constructor=o,o}r(mU,"createBaseVisitorConstructorWithDefaults");var US;(function(e){e[e.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",e[e.MISSING_METHOD=1]="MISSING_METHOD"})(US||(US={}));function TW(e,t){return EW(e,t)}r(TW,"validateVisitor");function EW(e,t){let n=$t(t,i=>cr(e[i])===!1),o=J(n,i=>({msg:`Missing visitor method: <${i}> on ${e.constructor.name} CST Visitor.`,type:US.MISSING_METHOD,methodName:i}));return kn(o)}r(EW,"validateMissingCstMethods");var rd=class{static{r(this,"TreeBuilder")}initTreeBuilder(t){if(this.CST_STACK=[],this.outputCst=t.outputCst,this.nodeLocationTracking=X(t,"nodeLocationTracking")?t.nodeLocationTracking:fr.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=rt,this.cstFinallyStateUpdate=rt,this.cstPostTerminal=rt,this.cstPostNonTerminal=rt,this.cstPostRule=rt;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=AS,this.setNodeLocationFromNode=AS,this.cstPostRule=rt,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=rt,this.setNodeLocationFromNode=rt,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=xS,this.setNodeLocationFromNode=xS,this.cstPostRule=rt,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=rt,this.setNodeLocationFromNode=rt,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=rt,this.setNodeLocationFromNode=rt,this.cstPostRule=rt,this.setInitialNodeLocation=rt;else throw Error(`Invalid <nodeLocationTracking> config option: "${t.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(t){t.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(t){t.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(t){t.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(t){let n=this.LA(1);t.location={startOffset:n.startOffset,startLine:n.startLine,startColumn:n.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(t){let n={name:t,children:Object.create(null)};this.setInitialNodeLocation(n),this.CST_STACK.push(n)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(t){let n=this.LA(0),o=t.location;o.startOffset<=n.startOffset?(o.endOffset=n.endOffset,o.endLine=n.endLine,o.endColumn=n.endColumn):(o.startOffset=NaN,o.startLine=NaN,o.startColumn=NaN)}cstPostRuleOnlyOffset(t){let n=this.LA(0),o=t.location;o.startOffset<=n.startOffset?o.endOffset=n.endOffset:o.startOffset=NaN}cstPostTerminal(t,n){let o=this.CST_STACK[this.CST_STACK.length-1];dU(o,n,t),this.setNodeLocationFromToken(o.location,n)}cstPostNonTerminal(t,n){let o=this.CST_STACK[this.CST_STACK.length-1];fU(o,n,t),this.setNodeLocationFromNode(o.location,t.location)}getBaseCstVisitorConstructor(){if(er(this.baseCstVisitorConstructor)){let t=pU(this.className,Ae(this.gastProductionsCache));return this.baseCstVisitorConstructor=t,t}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(er(this.baseCstVisitorWithDefaultsConstructor)){let t=mU(this.className,Ae(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=t,t}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){let t=this.RULE_STACK;return t[t.length-1]}getPreviousExplicitRuleShortName(){let t=this.RULE_STACK;return t[t.length-2]}getLastExplicitRuleOccurrenceIndex(){let t=this.RULE_OCCURRENCE_STACK;return t[t.length-1]}};var nd=class{static{r(this,"LexerAdapter")}initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(t){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=t,this.tokVectorLength=t.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):ua}LA(t){let n=this.currIdx+t;return n<0||this.tokVectorLength<=n?ua:this.tokVector[n]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(t){this.currIdx=t}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}};var od=class{static{r(this,"RecognizerApi")}ACTION(t){return t.call(this)}consume(t,n,o){return this.consumeInternal(n,t,o)}subrule(t,n,o){return this.subruleInternal(n,t,o)}option(t,n){return this.optionInternal(n,t)}or(t,n){return this.orInternal(n,t)}many(t,n){return this.manyInternal(t,n)}atLeastOne(t,n){return this.atLeastOneInternal(t,n)}CONSUME(t,n){return this.consumeInternal(t,0,n)}CONSUME1(t,n){return this.consumeInternal(t,1,n)}CONSUME2(t,n){return this.consumeInternal(t,2,n)}CONSUME3(t,n){return this.consumeInternal(t,3,n)}CONSUME4(t,n){return this.consumeInternal(t,4,n)}CONSUME5(t,n){return this.consumeInternal(t,5,n)}CONSUME6(t,n){return this.consumeInternal(t,6,n)}CONSUME7(t,n){return this.consumeInternal(t,7,n)}CONSUME8(t,n){return this.consumeInternal(t,8,n)}CONSUME9(t,n){return this.consumeInternal(t,9,n)}SUBRULE(t,n){return this.subruleInternal(t,0,n)}SUBRULE1(t,n){return this.subruleInternal(t,1,n)}SUBRULE2(t,n){return this.subruleInternal(t,2,n)}SUBRULE3(t,n){return this.subruleInternal(t,3,n)}SUBRULE4(t,n){return this.subruleInternal(t,4,n)}SUBRULE5(t,n){return this.subruleInternal(t,5,n)}SUBRULE6(t,n){return this.subruleInternal(t,6,n)}SUBRULE7(t,n){return this.subruleInternal(t,7,n)}SUBRULE8(t,n){return this.subruleInternal(t,8,n)}SUBRULE9(t,n){return this.subruleInternal(t,9,n)}OPTION(t){return this.optionInternal(t,0)}OPTION1(t){return this.optionInternal(t,1)}OPTION2(t){return this.optionInternal(t,2)}OPTION3(t){return this.optionInternal(t,3)}OPTION4(t){return this.optionInternal(t,4)}OPTION5(t){return this.optionInternal(t,5)}OPTION6(t){return this.optionInternal(t,6)}OPTION7(t){return this.optionInternal(t,7)}OPTION8(t){return this.optionInternal(t,8)}OPTION9(t){return this.optionInternal(t,9)}OR(t){return this.orInternal(t,0)}OR1(t){return this.orInternal(t,1)}OR2(t){return this.orInternal(t,2)}OR3(t){return this.orInternal(t,3)}OR4(t){return this.orInternal(t,4)}OR5(t){return this.orInternal(t,5)}OR6(t){return this.orInternal(t,6)}OR7(t){return this.orInternal(t,7)}OR8(t){return this.orInternal(t,8)}OR9(t){return this.orInternal(t,9)}MANY(t){this.manyInternal(0,t)}MANY1(t){this.manyInternal(1,t)}MANY2(t){this.manyInternal(2,t)}MANY3(t){this.manyInternal(3,t)}MANY4(t){this.manyInternal(4,t)}MANY5(t){this.manyInternal(5,t)}MANY6(t){this.manyInternal(6,t)}MANY7(t){this.manyInternal(7,t)}MANY8(t){this.manyInternal(8,t)}MANY9(t){this.manyInternal(9,t)}MANY_SEP(t){this.manySepFirstInternal(0,t)}MANY_SEP1(t){this.manySepFirstInternal(1,t)}MANY_SEP2(t){this.manySepFirstInternal(2,t)}MANY_SEP3(t){this.manySepFirstInternal(3,t)}MANY_SEP4(t){this.manySepFirstInternal(4,t)}MANY_SEP5(t){this.manySepFirstInternal(5,t)}MANY_SEP6(t){this.manySepFirstInternal(6,t)}MANY_SEP7(t){this.manySepFirstInternal(7,t)}MANY_SEP8(t){this.manySepFirstInternal(8,t)}MANY_SEP9(t){this.manySepFirstInternal(9,t)}AT_LEAST_ONE(t){this.atLeastOneInternal(0,t)}AT_LEAST_ONE1(t){return this.atLeastOneInternal(1,t)}AT_LEAST_ONE2(t){this.atLeastOneInternal(2,t)}AT_LEAST_ONE3(t){this.atLeastOneInternal(3,t)}AT_LEAST_ONE4(t){this.atLeastOneInternal(4,t)}AT_LEAST_ONE5(t){this.atLeastOneInternal(5,t)}AT_LEAST_ONE6(t){this.atLeastOneInternal(6,t)}AT_LEAST_ONE7(t){this.atLeastOneInternal(7,t)}AT_LEAST_ONE8(t){this.atLeastOneInternal(8,t)}AT_LEAST_ONE9(t){this.atLeastOneInternal(9,t)}AT_LEAST_ONE_SEP(t){this.atLeastOneSepFirstInternal(0,t)}AT_LEAST_ONE_SEP1(t){this.atLeastOneSepFirstInternal(1,t)}AT_LEAST_ONE_SEP2(t){this.atLeastOneSepFirstInternal(2,t)}AT_LEAST_ONE_SEP3(t){this.atLeastOneSepFirstInternal(3,t)}AT_LEAST_ONE_SEP4(t){this.atLeastOneSepFirstInternal(4,t)}AT_LEAST_ONE_SEP5(t){this.atLeastOneSepFirstInternal(5,t)}AT_LEAST_ONE_SEP6(t){this.atLeastOneSepFirstInternal(6,t)}AT_LEAST_ONE_SEP7(t){this.atLeastOneSepFirstInternal(7,t)}AT_LEAST_ONE_SEP8(t){this.atLeastOneSepFirstInternal(8,t)}AT_LEAST_ONE_SEP9(t){this.atLeastOneSepFirstInternal(9,t)}RULE(t,n,o=da){if(Je(this.definedRulesNames,t)){let s={message:rn.buildDuplicateRuleNameError({topLevelRule:t,grammarName:this.className}),type:wt.DUPLICATE_RULE_NAME,ruleName:t};this.definitionErrors.push(s)}this.definedRulesNames.push(t);let i=this.defineRule(t,n,o);return this[t]=i,i}OVERRIDE_RULE(t,n,o=da){let i=eU(t,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);let a=this.defineRule(t,n,o);return this[t]=a,a}BACKTRACK(t,n){return function(){this.isBackTrackingStack.push(1);let o=this.saveRecogState();try{return t.apply(this,n),!0}catch(i){if(Ao(i))return!1;throw i}finally{this.reloadRecogState(o),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return Ou(Le(this.gastProductionsCache))}};var id=class{static{r(this,"RecognizerEngine")}initRecognizerEngine(t,n){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=sa,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},X(n,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(Y(t)){if(de(t))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof t[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(Y(t))this.tokensMap=Lt(t,(a,s)=>(a[s.name]=s,a),{});else if(X(t,"modes")&&qt(Nt(Le(t.modes)),Nv)){let a=Nt(Le(t.modes)),s=ko(a);this.tokensMap=Lt(s,(c,u)=>(c[u.name]=u,c),{})}else if(tt(t))this.tokensMap=Pe(t);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=tn;let o=X(t,"modes")?Nt(Le(t.modes)):Le(t),i=qt(o,a=>de(a.categoryMatches));this.tokenMatcher=i?sa:Gn,jn(Le(this.tokensMap))}defineRule(t,n,o){if(this.selfAnalysisDone)throw Error(`Grammar rule <${t}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);let i=X(o,"resyncEnabled")?o.resyncEnabled:da.resyncEnabled,a=X(o,"recoveryValueFunc")?o.recoveryValueFunc:da.recoveryValueFunc,s=this.ruleShortNameIdx<<12;this.ruleShortNameIdx++,this.shortRuleNameToFull[s]=t,this.fullRuleNameToShort[t]=s;let c;return this.outputCst===!0?c=r(function(...g){try{this.ruleInvocationStateUpdate(s,t,this.subruleIdx),n.apply(this,g);let S=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(S),S}catch(S){return this.invokeRuleCatch(S,i,a)}finally{this.ruleFinallyStateUpdate()}},"invokeRuleWithTry"):c=r(function(...g){try{return this.ruleInvocationStateUpdate(s,t,this.subruleIdx),n.apply(this,g)}catch(S){return this.invokeRuleCatch(S,i,a)}finally{this.ruleFinallyStateUpdate()}},"invokeRuleWithTryCst"),Object.assign(c,{ruleName:t,originalGrammarAction:n})}invokeRuleCatch(t,n,o){let i=this.RULE_STACK.length===1,a=n&&!this.isBackTracking()&&this.recoveryEnabled;if(Ao(t)){let s=t;if(a){let c=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(c))if(s.resyncedTokens=this.reSyncTo(c),this.outputCst){let u=this.CST_STACK[this.CST_STACK.length-1];return u.recoveredNode=!0,u}else return o(t);else{if(this.outputCst){let u=this.CST_STACK[this.CST_STACK.length-1];u.recoveredNode=!0,s.partialCstResult=u}throw s}}else{if(i)return this.moveToTerminatedState(),o(t);throw s}}else throw t}optionInternal(t,n){let o=this.getKeyForAutomaticLookahead(512,n);return this.optionInternalLogic(t,n,o)}optionInternalLogic(t,n,o){let i=this.getLaFuncFromCache(o),a;if(typeof t!="function"){a=t.DEF;let s=t.GATE;if(s!==void 0){let c=i;i=r(()=>s.call(this)&&c.call(this),"lookAheadFunc")}}else a=t;if(i.call(this)===!0)return a.call(this)}atLeastOneInternal(t,n){let o=this.getKeyForAutomaticLookahead(1024,t);return this.atLeastOneInternalLogic(t,n,o)}atLeastOneInternalLogic(t,n,o){let i=this.getLaFuncFromCache(o),a;if(typeof n!="function"){a=n.DEF;let s=n.GATE;if(s!==void 0){let c=i;i=r(()=>s.call(this)&&c.call(this),"lookAheadFunc")}}else a=n;if(i.call(this)===!0){let s=this.doSingleRepetition(a);for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(a)}else throw this.raiseEarlyExitException(t,ot.REPETITION_MANDATORY,n.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[t,n],i,1024,t,ju)}atLeastOneSepFirstInternal(t,n){let o=this.getKeyForAutomaticLookahead(1536,t);this.atLeastOneSepFirstInternalLogic(t,n,o)}atLeastOneSepFirstInternalLogic(t,n,o){let i=n.DEF,a=n.SEP;if(this.getLaFuncFromCache(o).call(this)===!0){i.call(this);let c=r(()=>this.tokenMatcher(this.LA(1),a),"separatorLookAheadFunc");for(;this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[t,a,c,i,zs],c,1536,t,zs)}else throw this.raiseEarlyExitException(t,ot.REPETITION_MANDATORY_WITH_SEPARATOR,n.ERR_MSG)}manyInternal(t,n){let o=this.getKeyForAutomaticLookahead(768,t);return this.manyInternalLogic(t,n,o)}manyInternalLogic(t,n,o){let i=this.getLaFuncFromCache(o),a;if(typeof n!="function"){a=n.DEF;let c=n.GATE;if(c!==void 0){let u=i;i=r(()=>c.call(this)&&u.call(this),"lookaheadFunction")}}else a=n;let s=!0;for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(a);this.attemptInRepetitionRecovery(this.manyInternal,[t,n],i,768,t,Gu,s)}manySepFirstInternal(t,n){let o=this.getKeyForAutomaticLookahead(1280,t);this.manySepFirstInternalLogic(t,n,o)}manySepFirstInternalLogic(t,n,o){let i=n.DEF,a=n.SEP;if(this.getLaFuncFromCache(o).call(this)===!0){i.call(this);let c=r(()=>this.tokenMatcher(this.LA(1),a),"separatorLookAheadFunc");for(;this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[t,a,c,i,Ws],c,1280,t,Ws)}}repetitionSepSecondInternal(t,n,o,i,a){for(;o();)this.CONSUME(n),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[t,n,o,i,a],o,1536,t,a)}doSingleRepetition(t){let n=this.getLexerPosition();return t.call(this),this.getLexerPosition()>n}orInternal(t,n){let o=this.getKeyForAutomaticLookahead(256,n),i=Y(t)?t:t.DEF,s=this.getLaFuncFromCache(o).call(this,i);if(s!==void 0)return i[s].ALT.call(this);this.raiseNoAltException(n,t.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){let t=this.LA(1),n=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:t,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new Qs(n,t))}}subruleInternal(t,n,o){let i;try{let a=o!==void 0?o.ARGS:void 0;return this.subruleIdx=n,i=t.apply(this,a),this.cstPostNonTerminal(i,o!==void 0&&o.LABEL!==void 0?o.LABEL:t.ruleName),i}catch(a){throw this.subruleInternalError(a,o,t.ruleName)}}subruleInternalError(t,n,o){throw Ao(t)&&t.partialCstResult!==void 0&&(this.cstPostNonTerminal(t.partialCstResult,n!==void 0&&n.LABEL!==void 0?n.LABEL:o),delete t.partialCstResult),t}consumeInternal(t,n,o){let i;try{let a=this.LA(1);this.tokenMatcher(a,t)===!0?(this.consumeToken(),i=a):this.consumeInternalError(t,a,o)}catch(a){i=this.consumeInternalRecovery(t,n,a)}return this.cstPostTerminal(o!==void 0&&o.LABEL!==void 0?o.LABEL:t.name,i),i}consumeInternalError(t,n,o){let i,a=this.LA(0);throw o!==void 0&&o.ERR_MSG?i=o.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:t,actual:n,previous:a,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new St(i,n,a))}consumeInternalRecovery(t,n,o){if(this.recoveryEnabled&&o.name==="MismatchedTokenException"&&!this.isBackTracking()){let i=this.getFollowsForInRuleRecovery(t,n);try{return this.tryInRuleRecovery(t,i)}catch(a){throw a.name===_S?o:a}}else throw o}saveRecogState(){let t=this.errors,n=Pe(this.RULE_STACK);return{errors:t,lexerState:this.exportLexerState(),RULE_STACK:n,CST_STACK:this.CST_STACK}}reloadRecogState(t){this.errors=t.errors,this.importLexerState(t.lexerState),this.RULE_STACK=t.RULE_STACK}ruleInvocationStateUpdate(t,n,o){this.RULE_OCCURRENCE_STACK.push(o),this.RULE_STACK.push(t),this.cstInvocationStateUpdate(n)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){let t=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[t]}shortRuleNameToFullName(t){return this.shortRuleNameToFull[t]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),tn)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}};var ad=class{static{r(this,"ErrorHandler")}initErrorHandler(t){this._errors=[],this.errorMessageProvider=X(t,"errorMessageProvider")?t.errorMessageProvider:fr.errorMessageProvider}SAVE_ERROR(t){if(Ao(t))return t.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:Pe(this.RULE_OCCURRENCE_STACK)},this._errors.push(t),t;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return Pe(this._errors)}set errors(t){this._errors=t}raiseEarlyExitException(t,n,o){let i=this.getCurrRuleFullName(),a=this.getGAstProductions()[i],c=Ys(t,a,n,this.maxLookahead)[0],u=[];for(let g=1;g<=this.maxLookahead;g++)u.push(this.LA(g));let p=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:c,actual:u,previous:this.LA(0),customUserDescription:o,ruleName:i});throw this.SAVE_ERROR(new Xs(p,this.LA(1),this.LA(0)))}raiseNoAltException(t,n){let o=this.getCurrRuleFullName(),i=this.getGAstProductions()[o],a=Hs(t,i,this.maxLookahead),s=[];for(let p=1;p<=this.maxLookahead;p++)s.push(this.LA(p));let c=this.LA(0),u=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:a,actual:s,previous:c,customUserDescription:n,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new Js(u,this.LA(1),c))}};var sd=class{static{r(this,"ContentAssist")}initContentAssist(){}computeContentAssist(t,n){let o=this.gastProductionsCache[t];if(er(o))throw Error(`Rule ->${t}<- does not exist in this grammar.`);return Wu([o],n,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(t){let n=Ct(t.ruleStack),i=this.getGAstProductions()[n];return new qu(i,t).startWalking()}};var ud={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(ud);var hU=!0,gU=Math.pow(2,8)-1,EU=Vn({name:"RECORDING_PHASE_TOKEN",pattern:nt.NA});jn([EU]);var SU=ii(EU,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(SU);var yW={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},cd=class{static{r(this,"GastRecorder")}initGastRecorder(t){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let t=0;t<10;t++){let n=t>0?t:"";this[`CONSUME${n}`]=function(o,i){return this.consumeInternalRecord(o,t,i)},this[`SUBRULE${n}`]=function(o,i){return this.subruleInternalRecord(o,t,i)},this[`OPTION${n}`]=function(o){return this.optionInternalRecord(o,t)},this[`OR${n}`]=function(o){return this.orInternalRecord(o,t)},this[`MANY${n}`]=function(o){this.manyInternalRecord(t,o)},this[`MANY_SEP${n}`]=function(o){this.manySepFirstInternalRecord(t,o)},this[`AT_LEAST_ONE${n}`]=function(o){this.atLeastOneInternalRecord(t,o)},this[`AT_LEAST_ONE_SEP${n}`]=function(o){this.atLeastOneSepFirstInternalRecord(t,o)}}this.consume=function(t,n,o){return this.consumeInternalRecord(n,t,o)},this.subrule=function(t,n,o){return this.subruleInternalRecord(n,t,o)},this.option=function(t,n){return this.optionInternalRecord(n,t)},this.or=function(t,n){return this.orInternalRecord(n,t)},this.many=function(t,n){this.manyInternalRecord(t,n)},this.atLeastOne=function(t,n){this.atLeastOneInternalRecord(t,n)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{let t=this;for(let n=0;n<10;n++){let o=n>0?n:"";delete t[`CONSUME${o}`],delete t[`SUBRULE${o}`],delete t[`OPTION${o}`],delete t[`OR${o}`],delete t[`MANY${o}`],delete t[`MANY_SEP${o}`],delete t[`AT_LEAST_ONE${o}`],delete t[`AT_LEAST_ONE_SEP${o}`]}delete t.consume,delete t.subrule,delete t.option,delete t.or,delete t.many,delete t.atLeastOne,delete t.ACTION,delete t.BACKTRACK,delete t.LA})}ACTION_RECORD(t){}BACKTRACK_RECORD(t,n){return()=>!0}LA_RECORD(t){return ua}topLevelRuleRecord(t,n){try{let o=new ur({definition:[],name:t});return o.name=t,this.recordingProdStack.push(o),n.call(this),this.recordingProdStack.pop(),o}catch(o){if(o.KNOWN_RECORDER_ERROR!==!0)try{o.message=o.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw o}throw o}}optionInternalRecord(t,n){return ec.call(this,We,t,n)}atLeastOneInternalRecord(t,n){ec.call(this,Tt,n,t)}atLeastOneSepFirstInternalRecord(t,n){ec.call(this,Et,n,t,hU)}manyInternalRecord(t,n){ec.call(this,Ue,n,t)}manySepFirstInternalRecord(t,n){ec.call(this,ut,n,t,hU)}orInternalRecord(t,n){return _W.call(this,t,n)}subruleInternalRecord(t,n,o){if(ld(n),!t||X(t,"ruleName")===!1){let c=new Error(`<SUBRULE${TU(n)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(t)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw c.KNOWN_RECORDER_ERROR=!0,c}let i=xn(this.recordingProdStack),a=t.ruleName,s=new De({idx:n,nonTerminalName:a,label:o?.LABEL,referencedRule:void 0});return i.definition.push(s),this.outputCst?yW:ud}consumeInternalRecord(t,n,o){if(ld(n),!cS(t)){let s=new Error(`<CONSUME${TU(n)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(t)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw s.KNOWN_RECORDER_ERROR=!0,s}let i=xn(this.recordingProdStack),a=new Se({idx:n,terminalType:t,label:o?.LABEL});return i.definition.push(a),SU}};function ec(e,t,n,o=!1){ld(n);let i=xn(this.recordingProdStack),a=cr(t)?t:t.DEF,s=new e({definition:[],idx:n});return o&&(s.separator=t.SEP),X(t,"MAX_LOOKAHEAD")&&(s.maxLookahead=t.MAX_LOOKAHEAD),this.recordingProdStack.push(s),a.call(this),i.definition.push(s),this.recordingProdStack.pop(),ud}r(ec,"recordProd");function _W(e,t){ld(t);let n=xn(this.recordingProdStack),o=Y(e)===!1,i=o===!1?e:e.DEF,a=new dt({definition:[],idx:t,ignoreAmbiguities:o&&e.IGNORE_AMBIGUITIES===!0});X(e,"MAX_LOOKAHEAD")&&(a.maxLookahead=e.MAX_LOOKAHEAD);let s=en(i,c=>cr(c.GATE));return a.hasPredicates=s,n.definition.push(a),Q(i,c=>{let u=new Be({definition:[]});a.definition.push(u),X(c,"IGNORE_AMBIGUITIES")?u.ignoreAmbiguities=c.IGNORE_AMBIGUITIES:X(c,"GATE")&&(u.ignoreAmbiguities=!0),this.recordingProdStack.push(u),c.ALT.call(this),this.recordingProdStack.pop()}),ud}r(_W,"recordOrProd");function TU(e){return e===0?"":`${e}`}r(TU,"getIdxSuffix");function ld(e){if(e<0||e>gU){let t=new Error(`Invalid DSL Method idx value: <${e}>
	Idx value must be a none negative value smaller than ${gU+1}`);throw t.KNOWN_RECORDER_ERROR=!0,t}}r(ld,"assertMethodIdxIsValid");var dd=class{static{r(this,"PerformanceTracer")}initPerformanceTracer(t){if(X(t,"traceInitPerf")){let n=t.traceInitPerf,o=typeof n=="number";this.traceInitMaxIdent=o?n:1/0,this.traceInitPerf=o?n>0:n}else this.traceInitMaxIdent=0,this.traceInitPerf=fr.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(t,n){if(this.traceInitPerf===!0){this.traceInitIndent++;let o=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${o}--> <${t}>`);let{time:i,value:a}=Is(n),s=i>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s(`${o}<-- <${t}> time: ${i}ms`),this.traceInitIndent--,a}else return n()}};function yU(e,t){t.forEach(n=>{let o=n.prototype;Object.getOwnPropertyNames(o).forEach(i=>{if(i==="constructor")return;let a=Object.getOwnPropertyDescriptor(o,i);a&&(a.get||a.set)?Object.defineProperty(e.prototype,i,a):e.prototype[i]=n.prototype[i]})})}r(yU,"applyMixins");var ua=ii(tn,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(ua);var fr=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:Wn,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),da=Object.freeze({recoveryValueFunc:r(()=>{},"recoveryValueFunc"),resyncEnabled:!0}),wt;(function(e){e[e.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",e[e.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",e[e.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",e[e.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",e[e.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",e[e.LEFT_RECURSION=5]="LEFT_RECURSION",e[e.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",e[e.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",e[e.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",e[e.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",e[e.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",e[e.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",e[e.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",e[e.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(wt||(wt={}));var tc=class e{static{r(this,"Parser")}static performSelfAnalysis(t){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let t;this.selfAnalysisDone=!0;let n=this.className;this.TRACE_INIT("toFastProps",()=>{Ps(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),Q(this.definedRulesNames,i=>{let s=this[i].originalGrammarAction,c;this.TRACE_INIT(`${i} Rule`,()=>{c=this.topLevelRuleRecord(i,s)}),this.gastProductionsCache[i]=c})}finally{this.disableRecording()}});let o=[];if(this.TRACE_INIT("Grammar Resolving",()=>{o=oU({rules:Le(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(o)}),this.TRACE_INIT("Grammar Validations",()=>{if(de(o)&&this.skipValidations===!1){let i=iU({rules:Le(this.gastProductionsCache),tokenTypes:Le(this.tokensMap),errMsgProvider:rn,grammarName:n}),a=Xv({lookaheadStrategy:this.lookaheadStrategy,rules:Le(this.gastProductionsCache),tokenTypes:Le(this.tokensMap),grammarName:n});this.definitionErrors=this.definitionErrors.concat(i,a)}}),de(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{let i=fv(Le(this.gastProductionsCache));this.resyncFollows=i}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var i,a;(a=(i=this.lookaheadStrategy).initialize)===null||a===void 0||a.call(i,{rules:Le(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(Le(this.gastProductionsCache))})),!e.DEFER_DEFINITION_ERRORS_HANDLING&&!de(this.definitionErrors))throw t=J(this.definitionErrors,i=>i.message),new Error(`Parser Definition Errors detected:
 ${t.join(`
-------------------------------
`)}`)})}constructor(t,n){this.definitionErrors=[],this.selfAnalysisDone=!1;let o=this;if(o.initErrorHandler(n),o.initLexerAdapter(),o.initLooksAhead(n),o.initRecognizerEngine(t,n),o.initRecoverable(n),o.initTreeBuilder(n),o.initContentAssist(),o.initGastRecorder(n),o.initPerformanceTracer(n),X(n,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=X(n,"skipValidations")?n.skipValidations:fr.skipValidations}};tc.DEFER_DEFINITION_ERRORS_HANDLING=!1;yU(tc,[Ju,Zu,rd,nd,id,od,ad,sd,cd,dd]);var rc=class extends tc{static{r(this,"CstParser")}constructor(t,n=fr){let o=Pe(n);o.outputCst=!0,super(t,o)}};var LS=new Map;function A(e){let{pattern:t}=e,n=t.toString();if(LS.has(n))return LS.get(n);let o=Vn(e);return LS.set(n,o),o}r(A,"createUniqToken");function d(e,t){return A({name:`${e} token`,pattern:new RegExp(e),label:e,...t})}r(d,"createTokenByName");var $=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),fd=d("conditional",{longer_alt:$,categories:[$]}),fa=d("if",{longer_alt:$,categories:[$]}),pd=d("else",{longer_alt:$,categories:[$]}),md=d("elseif",{longer_alt:$,categories:[$]}),hd=d("for",{longer_alt:$,categories:[$]}),gd=d("foreach",{longer_alt:$,categories:[$]}),Td=d("remove",{longer_alt:$,categories:[$]}),Ed=d("await",{longer_alt:$,categories:[$]}),nn=d("each",{longer_alt:$,categories:[$]}),Sd=d("try_catch",{longer_alt:$,categories:[$]}),nc=d("try",{longer_alt:$,categories:[$]}),oc=d("catch",{longer_alt:$,categories:[$]}),yd=d("finally",{longer_alt:$,categories:[$]}),tr=d("as",{longer_alt:$,categories:[$]}),pa=d("return",{longer_alt:$,categories:[$]}),_d=d("switch",{longer_alt:$,categories:[$]}),bd=d("case",{longer_alt:$,categories:[$]}),Rd=d("default",{longer_alt:$,categories:[$]}),kd=d("while",{longer_alt:$,categories:[$]}),ma=d("group",{longer_alt:$,categories:[$]}),xd=d("throw",{longer_alt:$,categories:[$]}),ha=d("break",{longer_alt:$,categories:[$]}),Ad=d("continue",{longer_alt:$,categories:[$]}),ic=A({name:"GreaterThan",pattern:/>/,label:">"}),ac=A({name:"GreaterThanOrEqual",pattern:/>=/,label:">="}),sc=A({name:"SmallerThan",pattern:/</,label:"<"}),cc=A({name:"SmallerThanOrEq",pattern:/<=/,label:"<="}),vd=A({name:"Minus",pattern:/-/,label:"-"}),Ud=A({name:"Plus",pattern:/\+/,label:"+"}),Cd=A({name:"Multiply",pattern:/\*/,label:"*"}),Ld=A({name:"Divide",pattern:/\//,label:"/"}),lc=A({name:"IsEqual",label:"==",pattern:/==/}),Od=A({name:"IsStrictEqual",label:"===",pattern:/===/}),uc=A({name:"IsNotEqual",label:"!=",pattern:/!=/}),Nd=A({name:"IsStrictNotEqual",label:"!==",pattern:/!==/}),C=A({name:"EqualToken",label:"=",pattern:/=/}),O=A({name:"LCurly",pattern:/{/,label:"{"}),N=A({name:"RCurly",pattern:/}/,label:"}"}),yt=A({name:"LSquare",pattern:/\[/,label:"["}),_t=A({name:"RSquare",pattern:/]/,label:"]"}),ye=A({name:"LParent",pattern:/\(/,label:"("}),pe=A({name:"RParent",pattern:/\)/,label:")"}),Cr=A({name:"Question",pattern:/\?/,label:"?"}),Ne=A({name:"ColonToken",pattern:/:/,label:":"}),Ft=A({name:"PipeToken",pattern:/\|/,label:"|"}),ze=A({name:"CommaToken",pattern:/,/,label:","}),Md=A({name:"AndTestToken",pattern:/&&/,label:"&&"}),wd=A({name:"NullishCoalescingToken",pattern:/\?\?/,label:"??"}),OS=A({name:"OrTestToken",pattern:/\|\|/,label:"||"}),dc=A({name:"JsonBetweenToken",pattern:/between/,label:"between",longer_alt:$,categories:[$]}),fc=A({name:"JsonContainsToken",pattern:/@>/,label:"@>"}),pc=A({name:"JsonContainsStringToken",pattern:/contains/,label:"contains",longer_alt:$,categories:[$]}),NS=A({name:"JsonEqualToken",pattern:/=/,label:"="}),mc=A({name:"JsonILikeToken",pattern:/ilike/,label:"ilike",longer_alt:$,categories:[$]}),hc=A({name:"JsonIncludesToken",pattern:/includes/,label:"includes",longer_alt:$,categories:[$]}),gc=A({name:"JsonLikeToken",pattern:/like/,label:"like",longer_alt:$,categories:[$]}),Tc=A({name:"JsonNotBetweenToken",pattern:/not between/,label:"not between"}),Ec=A({name:"JsonNotContainsToken",pattern:/not contains/,label:"not contains"}),Sc=A({name:"JsonNotILikeToken",pattern:/not ilike/,label:"not ilike"}),yc=A({name:"JsonNotInToken",pattern:/not in/,label:"not in"}),_c=A({name:"JsonNotIncludesToken",pattern:/not includes/,label:"not includes"}),bc=A({name:"JsonNotLikeToken",pattern:/not like/,label:"not like"}),Rc=A({name:"JsonNotOverlapsToken",pattern:/not overlaps/,label:"not overlaps"}),kc=A({name:"JsonNotRegexToken",pattern:/!~/,label:"!~"}),xc=A({name:"JsonOverlapsToken",pattern:/overlaps/,label:"overlaps",longer_alt:$,categories:[$]}),Fd=A({name:"JsonRegexToken",pattern:/~/,label:"~"}),_U=A({name:"JsonSearchToken",pattern:/search/,label:"search",longer_alt:$,categories:[$]}),bU=[Tc,Ec,Sc,_c,yc,dc,fc,pc,mc,hc,gc,bc,Rc,kc,xc,Fd,_U,wd,Md,OS,fd,fa,md,pd,gd,hd,nn,Td,Ed,tr,pa,_d,bd,Rd,kd,ma,xd,ha,Ad,ac,ic,cc,sc,vd,Ud,Cd,Ld,Od,lc,Nd,uc,C,O,N,yt,_t,ye,pe,Cr,Ne,Ft,ze,Sd,nc,oc,yd,NS];function RU(e){switch(e){case fa.name:case pd.name:case md.name:case nn.name:case tr.name:case nc.name:case oc.name:case yd.name:return"keyword";case fd.name:case Ed.name:case pa.name:case ma.name:case xd.name:case ha.name:case Ad.name:case hd.name:case _d.name:case Td.name:case gd.name:case kd.name:case bd.name:case Rd.name:case Sd.name:return"function";case O.name:return"operator.openingCurly";case N.name:return"operator.closingCurly";case yt.name:return"operator.openingSquare";case _t.name:return"operator.closingSquare";case ye.name:return"operator.openingParenthesis";case pe.name:return"operator.closingParenthesis";case ic.name:case ac.name:case sc.name:case cc.name:case vd.name:case Ud.name:case Md.name:case Cd.name:case Ld.name:case C.name:case lc.name:case uc.name:case wd.name:case Tc.name:case Ec.name:case Sc.name:case _c.name:case yc.name:case dc.name:case fc.name:case pc.name:case mc.name:case hc.name:case gc.name:case bc.name:case Rc.name:case kc.name:case xc.name:case Fd.name:return"operator";case _U.name:return"variable";case Cr.name:case Ne.name:case Ft.name:case ze.name:return"punctuation";default:return null}}r(RU,"mapTokenToType");var MS=A({name:"DisabledStatementToken",pattern:/![a-zA-Z][\w.]*/}),kU=A({name:"IntCast",pattern:/!int/,label:"!int"}),xU=A({name:"BoolCast",pattern:/!bool/,label:"!bool"}),AU=A({name:"ArrayCast",pattern:/!array/,label:"!array"}),vU=A({name:"TextCast",pattern:/!text/,label:"!text"}),UU=A({name:"ExpressionCast",pattern:/!expr/,label:"!expr"}),CU=A({name:"DecimalCast",pattern:/!decimal/,label:"!decimal"}),LU=A({name:"ObjectCast",pattern:/!object/,label:"!object"}),OU=A({name:"TimestampCast",pattern:/!timestamp/,label:"!timestamp"}),jr=A({name:"ExclamationToken",pattern:/!/}),Id=[kU,AU,vU,UU,CU,LU,OU,xU,jr];function NU(e){switch(e){case kU.name:case AU.name:case vU.name:case UU.name:case CU.name:case LU.name:case OU.name:case xU.name:return"type";case MS.name:return"comment";case jr.name:return"operator";default:return null}}r(NU,"mapTokenToType");var MU=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Pd=d("addon",{longer_alt:MU,categories:[MU]}),wU=[Pd];function FU(e){switch(e){case Pd.name:return"keyword";default:return null}}r(FU,"mapTokenToType");var ga=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Dd=d("agent",{longer_alt:ga,categories:[ga]}),Bd=d("llm",{longer_alt:ga,categories:[ga]}),qd=d("tools",{longer_alt:ga,categories:[ga]}),IU=[Dd,Bd,qd];function PU(e){switch(e){case Dd.name:case Bd.name:case qd.name:return"keyword";default:return null}}r(PU,"mapTokenToType");var Ta=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Gd=d("actions",{longer_alt:Ta,categories:[Ta]}),jd=d("active",{longer_alt:Ta,categories:[Ta]}),Vd=d("agent_trigger",{longer_alt:Ta,categories:[Ta]}),DU=[Gd,jd,Vd];function BU(e){switch(e){case Gd.name:case Vd.name:return"keyword";case jd.name:return"variable";default:return null}}r(BU,"mapTokenToType");var rr=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Wd=d("ai",{longer_alt:rr,categories:[rr]}),zd=d("agent",{longer_alt:rr,categories:[rr]}),Ea=d("run",{longer_alt:rr,categories:[rr]}),Hd=d("external",{longer_alt:rr,categories:[rr]}),Yd=d("mcp",{longer_alt:rr,categories:[rr]}),Kd=d("tool",{longer_alt:rr,categories:[rr]}),Jd=d("list",{longer_alt:rr,categories:[rr]}),Qd=d("server_details",{longer_alt:rr,categories:[rr]}),qU=[Wd,zd,Ea,Hd,Yd,Kd,Jd,Qd];function GU(e){switch(e){case Wd.name:case zd.name:case Ea.name:case Hd.name:case Yd.name:case Kd.name:case Jd.name:case Qd.name:return"keyword";default:return null}}r(GU,"mapTokenToType");var kr=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Xd=d("api",{longer_alt:kr,categories:[kr]}),Zd=d("request",{longer_alt:kr,categories:[kr]}),$d=d("call",{longer_alt:kr,categories:[kr]}),ef=d("realtime_event",{longer_alt:kr,categories:[kr]}),tf=d("stream",{longer_alt:kr,categories:[kr]}),rf=d("lambda",{longer_alt:kr,categories:[kr]}),jU=d("microservice",{longer_alt:kr,categories:[kr]}),VU=[Xd,Zd,$d,ef,tf,rf,jU];function WU(e){switch(e){case Xd.name:case Zd.name:case rf.name:case ef.name:case tf.name:case jU.name:case $d.name:return"function";default:return null}}r(WU,"mapTokenToType");var Un=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Sa=d("active",{longer_alt:Un,categories:[Un]}),nf=d("api_group",{longer_alt:Un,categories:[Un]}),of=d("canonical",{longer_alt:Un,categories:[Un]}),af=d("cors",{longer_alt:Un,categories:[Un]}),sf=d("swagger",{longer_alt:Un,categories:[Un]}),zU=[Sa,nf,of,af,sf];function HU(e){switch(e){case nf.name:return"keyword";case Sa.name:case of.name:case af.name:case sf.name:return"variable";default:return null}}r(HU,"mapTokenToType");var Xe=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),cf=d("array",{longer_alt:Xe,categories:[Xe]}),lf=d("every",{longer_alt:Xe,categories:[Xe]}),uf=d("filter_count",{longer_alt:Xe,categories:[Xe]}),df=d("filter",{longer_alt:Xe,categories:[Xe]}),ff=d("find",{longer_alt:Xe,categories:[Xe]}),pf=d("find_index",{longer_alt:Xe,categories:[Xe]}),mf=d("has",{longer_alt:Xe,categories:[Xe]}),hf=d("merge",{longer_alt:Xe,categories:[Xe]}),gf=d("pop",{longer_alt:Xe,categories:[Xe]}),Tf=d("push",{longer_alt:Xe,categories:[Xe]}),Ef=d("shift",{longer_alt:Xe,categories:[Xe]}),Sf=d("unshift",{longer_alt:Xe,categories:[Xe]}),YU=[cf,lf,uf,df,pf,ff,mf,hf,gf,Tf,Ef,Sf];function KU(e){switch(e){case cf.name:case lf.name:case uf.name:case df.name:case ff.name:case pf.name:case mf.name:case hf.name:case gf.name:case Tf.name:case Ef.name:case Sf.name:return"function";default:return null}}r(KU,"mapTokenToType");var yf=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),_f=d("branch",{longer_alt:yf,categories:[yf]}),JU=d("color",{longer_alt:yf,categories:[yf]}),QU=[_f,JU];function XU(e){switch(e){case _f.name:return"keyword";case JU.name:return"variable";default:return null}}r(XU,"mapTokenToType");var me=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),bf=d("cloud",{longer_alt:me,categories:[me]}),Rf=d("algolia",{longer_alt:me,categories:[me]}),kf=d("google",{longer_alt:me,categories:[me]}),xf=d("aws",{longer_alt:me,categories:[me]}),Af=d("elasticsearch",{longer_alt:me,categories:[me]}),vf=d("azure",{longer_alt:me,categories:[me]}),Uf=d("storage",{longer_alt:me,categories:[me]}),Cf=d("read_file",{longer_alt:me,categories:[me]}),Lf=d("delete_file",{longer_alt:me,categories:[me]}),Of=d("get_file_info",{longer_alt:me,categories:[me]}),Nf=d("list_directory",{longer_alt:me,categories:[me]}),Mf=d("s3",{longer_alt:me,categories:[me]}),wf=d("sign_url",{longer_alt:me,categories:[me]}),Ff=d("upload_file",{longer_alt:me,categories:[me]}),If=d("opensearch",{longer_alt:me,categories:[me]}),Pf=d("document",{longer_alt:me,categories:[me]}),Df=d("query",{longer_alt:me,categories:[me]}),ya=d("request",{longer_alt:me,categories:[me]}),ZU=[bf,Rf,kf,xf,Af,vf,Uf,Cf,Lf,Of,Nf,Mf,wf,Ff,If,Pf,Df,ya];function $U(e){switch(e){case bf.name:case Rf.name:case kf.name:case xf.name:case Af.name:case vf.name:case Uf.name:case Mf.name:case If.name:case Cf.name:case Lf.name:case Of.name:case Nf.name:case wf.name:case Ff.name:case Pf.name:case Df.name:case ya.name:return"function";default:return null}}r($U,"mapTokenToType");var ee=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Bf=d("int",{longer_alt:ee,categories:[ee]}),qf=d("timestamp",{longer_alt:ee,categories:[ee]}),_a=d("text",{longer_alt:ee,categories:[ee]}),Gf=d("uuid",{longer_alt:ee,categories:[ee]}),jf=d("vector",{longer_alt:ee,categories:[ee]}),Vf=d("enum",{longer_alt:ee,categories:[ee]}),Wf=d("date",{longer_alt:ee,categories:[ee]}),zf=d("bool",{longer_alt:ee,categories:[ee]}),Hf=d("decimal",{longer_alt:ee,categories:[ee]}),Yf=d("email",{longer_alt:ee,categories:[ee]}),Kf=d("password",{longer_alt:ee,categories:[ee]}),Jf=d("json",{longer_alt:ee,categories:[ee]}),Qf=d("file",{longer_alt:ee,categories:[ee]}),Xf=d("object",{longer_alt:ee,categories:[ee]}),Zf=d("image",{longer_alt:ee,categories:[ee]}),$f=d("video",{longer_alt:ee,categories:[ee]}),ep=d("audio",{longer_alt:ee,categories:[ee]}),tp=d("attachment",{longer_alt:ee,categories:[ee]}),rp=d("geo_point",{longer_alt:ee,categories:[ee]}),np=d("geo_multipoint",{longer_alt:ee,categories:[ee]}),op=d("geo_linestring",{longer_alt:ee,categories:[ee]}),ip=d("geo_multilinestring",{longer_alt:ee,categories:[ee]}),ap=d("geo_polygon",{longer_alt:ee,categories:[ee]}),sp=d("geo_multipolygon",{longer_alt:ee,categories:[ee]}),cp=d("dblink",{longer_alt:ee,categories:[ee]}),lp=d("agent",{longer_alt:ee,categories:[ee]}),up=d("mcp_server",{longer_alt:ee,categories:[ee]}),dp=d("channel",{longer_alt:ee,categories:[ee]}),fp=d("canonical",{longer_alt:ee,categories:[ee]}),eC=[lp,fp,up,dp,cp,Bf,qf,_a,Gf,jf,Vf,Wf,zf,Hf,Yf,Kf,Jf,Qf,Xf,Zf,$f,ep,tp,rp,np,op,ip,ap,sp];function tC(e){switch(e){case lp.name:case fp.name:case up.name:case dp.name:case cp.name:case Bf.name:case qf.name:case _a.name:case Gf.name:case jf.name:case Vf.name:case Wf.name:case zf.name:case Hf.name:case Yf.name:case Kf.name:case Jf.name:case Qf.name:case Xf.name:case Zf.name:case $f.name:case ep.name:case tp.name:case rp.name:case np.name:case op.name:case ip.name:case ap.name:case sp.name:return"type";default:return null}}r(tC,"mapTokenToType");var on=A({name:"CommentToken",label:"// comment",pattern:{exec:r((e,t)=>{if(!e.slice(t).startsWith("//"))return null;if(t===0)return e.slice(t).match(/.*(?=\n|$)/);let n=t-1;for(;n>=0;){let o=e[n];if(o===`
`||o==="\r")return e.slice(t).match(/.*(?=\n|$)/);if(o!==" "&&o!=="	")return null;n--}return e.slice(t).match(/.*(?=\n|$)/)},"exec")},line_breaks:!1}),rC=[on];function nC(e){switch(e){case on.name:return"comment";default:return}}r(nC,"mapTokenToType");var ce=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),pp=d("db",{longer_alt:ce,categories:[ce]}),mp=d("query",{longer_alt:ce,categories:[ce]}),hp=d("get",{longer_alt:ce,categories:[ce]}),gp=d("add",{longer_alt:ce,categories:[ce]}),Tp=d("add_or_edit",{longer_alt:ce,categories:[ce]}),Ep=d("del",{longer_alt:ce,categories:[ce]}),Sp=d("edit",{longer_alt:ce,categories:[ce]}),oC=d("update",{longer_alt:ce,categories:[ce]}),yp=d("has",{longer_alt:ce,categories:[ce]}),_p=d("patch",{longer_alt:ce,categories:[ce]}),bp=d("schema",{longer_alt:ce,categories:[ce]}),Rp=d("transaction",{longer_alt:ce,categories:[ce]}),kp=d("truncate",{longer_alt:ce,categories:[ce]}),ba=d("direct_query",{longer_alt:ce,categories:[ce]}),xp=d("set_datasource",{longer_alt:ce,categories:[ce]}),iC=d("bulk",{longer_alt:ce,categories:[ce]}),Ap=d("external",{longer_alt:ce,categories:[ce]}),vp=d("mssql",{longer_alt:ce,categories:[ce]}),Up=d("mysql",{longer_alt:ce,categories:[ce]}),Cp=d("postgres",{longer_alt:ce,categories:[ce]}),Lp=d("oracle",{longer_alt:ce,categories:[ce]}),aC=[pp,mp,hp,Tp,gp,Ep,Sp,oC,yp,_p,bp,Rp,kp,ba,xp,iC,Ap,vp,Up,Cp,Lp];function sC(e){switch(e){case bp.name:return"keyword";case pp.name:case iC.name:case Ap.name:case vp.name:case Up.name:case Cp.name:case Lp.name:case mp.name:case hp.name:case gp.name:case Tp.name:case Ep.name:case Sp.name:case oC.name:case yp.name:case _p.name:case Rp.name:case kp.name:case ba.name:case xp.name:return"function";default:return null}}r(sC,"mapTokenToType");var Ra=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Op=d("debug",{longer_alt:Ra,categories:[Ra]}),Np=d("stop",{longer_alt:Ra,categories:[Ra]}),Mp=d("log",{longer_alt:Ra,categories:[Ra]}),cC=[Op,Np,Mp];function lC(e){switch(e){case Op.name:case Np.name:case Mp.name:return"function";default:return null}}r(lC,"mapTokenToType");var ue=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),ka=d("expect",{longer_alt:ue,categories:[ue]}),xa=d("to_be_true",{longer_alt:ue,categories:[ue]}),Aa=d("to_be_false",{longer_alt:ue,categories:[ue]}),va=d("to_be_in_the_past",{longer_alt:ue,categories:[ue]}),Ua=d("to_be_in_the_future",{longer_alt:ue,categories:[ue]}),Ca=d("to_be_defined",{longer_alt:ue,categories:[ue]}),La=d("to_not_be_defined",{longer_alt:ue,categories:[ue]}),Oa=d("to_be_null",{longer_alt:ue,categories:[ue]}),Na=d("to_not_be_null",{longer_alt:ue,categories:[ue]}),Ma=d("to_be_empty",{longer_alt:ue,categories:[ue]}),wa=d("to_start_with",{longer_alt:ue,categories:[ue]}),Fa=d("to_end_with",{longer_alt:ue,categories:[ue]}),Ia=d("to_be_greater_than",{longer_alt:ue,categories:[ue]}),Pa=d("to_be_less_than",{longer_alt:ue,categories:[ue]}),Da=d("to_match",{longer_alt:ue,categories:[ue]}),Ba=d("to_equal",{longer_alt:ue,categories:[ue]}),qa=d("to_not_equal",{longer_alt:ue,categories:[ue]}),Ga=d("to_contain",{longer_alt:ue,categories:[ue]}),ja=d("to_be_within",{longer_alt:ue,categories:[ue]}),Va=d("to_throw",{longer_alt:ue,categories:[ue]}),uC=[ka,xa,Aa,va,Ua,Ca,La,Oa,Na,Ma,wa,Fa,Ia,Pa,Da,Ba,qa,Ga,ja,Va];function dC(e){switch(e){case ka.name:case xa.name:case Aa.name:case va.name:case Ua.name:case Ca.name:case La.name:case Oa.name:case Na.name:case Ma.name:case wa.name:case Fa.name:case Ia.name:case Pa.name:case Da.name:case Ba.name:case qa.name:case Ga.name:case ja.name:case Va.name:return"function";default:return null}}r(dC,"mapTokenToType");var fC=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),wp=d("filters",{longer_alt:fC,categories:[fC]}),Fp=A({name:"DbLinkFilter",label:"@",pattern:/@/}),pC=[wp,Fp];function mC(e){switch(e){case wp.name:return"keyword";case Fp.name:return"function";default:return null}}r(mC,"mapTokenToType");var Wa=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),vo=d("function",{longer_alt:Wa,categories:[Wa]}),Ip=d("run",{longer_alt:Wa,categories:[Wa]}),Pp=d("call",{longer_alt:Wa,categories:[Wa]}),hC=[vo,Ip,Pp];function gC(e){switch(e){case vo.name:return"keyword";case Ip.name:case Pp.name:return"function";default:return null}}r(gC,"mapTokenToType");var Dp=A({name:"ExpressionLiteral",label:"`...`",pattern:/`([^`\\]|\\.)*`/}),M=A({name:"StringLiteral",label:'"..."',pattern:/"([^"\\]|\\.)*"/}),Uo=A({name:"SingleQuotedStringLiteral",pattern:/'([^'\\]|\\.)*'/,label:"''"}),Yt=A({name:"FloatLiteral",label:"floating point number",pattern:/-?\d+\.\d+/}),it=A({name:"IntegerLiteral",label:"integer",pattern:/-?\d+/,longer_alt:Yt}),Ale=A({name:"DoubleDollar",label:"$$",pattern:/\$\$/}),Bp=A({name:"TimestampLiteral",pattern:/\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\s([01]\d|2[0-3]):([0-5]\d):([0-5]\d)[+-]\d{4}/}),TC=[Bp,Dp,M,Uo,it,Yt];function EC(e){switch(e){case Dp.name:return"macro";case M.name:case Bp.name:return"doubleString";case Uo.name:return"singleString";case it.name:case Yt.name:return"number";default:return null}}r(EC,"mapTokenToType");var Ot=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),qp=d("math",{longer_alt:Ot,categories:[Ot]}),Gp=d("add",{longer_alt:Ot,categories:[Ot]}),jp=d("div",{longer_alt:Ot,categories:[Ot]}),Vp=d("mod",{longer_alt:Ot,categories:[Ot]}),Wp=d("mul",{longer_alt:Ot,categories:[Ot]}),zp=d("sub",{longer_alt:Ot,categories:[Ot]}),Hp=d("bitwise",{longer_alt:Ot,categories:[Ot]}),Yp=d("and",{longer_alt:Ot,categories:[Ot]}),Kp=d("or",{longer_alt:Ot,categories:[Ot]}),Jp=d("xor",{longer_alt:Ot,categories:[Ot]}),SC=[qp,Gp,jp,Vp,Wp,zp,Hp,Yp,Kp,Jp];function yC(e){switch(e){case qp.name:case Gp.name:case jp.name:case Vp.name:case Wp.name:case zp.name:case Hp.name:case Yp.name:case Kp.name:case Jp.name:return"function";default:return null}}r(yC,"mapTokenToType");var Qp=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Xp=d("instructions",{longer_alt:Qp,categories:[Qp]}),za=d("tool",{longer_alt:Qp,categories:[Qp]}),_C=[Xp,za];function bC(e){switch(e){case za.name:return"keyword";case Xp.name:return"variable";default:return null}}r(bC,"mapTokenToType");var ai=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Zp=d("active",{longer_alt:ai,categories:[ai]}),$p=d("instructions",{longer_alt:ai,categories:[ai]}),em=d("mcp_server",{longer_alt:ai,categories:[ai]}),tm=d("tools",{longer_alt:za,categories:[ai]}),RC=[Zp,$p,em,tm];function kC(e){switch(e){case Zp.name:case em.name:case tm.name:return"keyword";case $p.name:return"variable";default:return null}}r(kC,"mapTokenToType");var Ha=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),rm=d("actions",{longer_alt:Ha,categories:[Ha]}),nm=d("active",{longer_alt:Ha,categories:[Ha]}),om=d("mcp_server_trigger",{longer_alt:Ha,categories:[Ha]}),xC=[rm,nm,om];function AC(e){switch(e){case rm.name:case om.name:return"keyword";case nm.name:return"variable";default:return null}}r(AC,"mapTokenToType");var Ya=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),im=d("exception_policy",{longer_alt:Ya,categories:[Ya]}),am=d("middleware",{longer_alt:Ya,categories:[Ya]}),sm=d("response_strategy",{longer_alt:Ya,categories:[Ya]}),vC=[im,am,sm];function UC(e){switch(e){case am.name:return"keyword";case im.name:case sm.name:return"variable";default:return null}}r(UC,"mapTokenToType");var nr=Vn({name:'"""..."""',pattern:/("""\r?\n(?:[\s\S]*?\r?\n)?[ ]*""")|('''\r?\n(?:[\s\S]*?\r?\n)?[ ]*''')/}),cm=Vn({name:"MultiLineExpression",pattern:/```\r?\n(?:[\s\S]*?\r?\n)?[ ]*```/}),CC=[nr,cm];function LC(e){switch(e){case nr.name:return"tripleString";case cm.name:return"tripleMacro";default:return null}}r(LC,"mapTokenToType");var Co=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),lm=d("object",{longer_alt:Co,categories:[Co]}),um=d("entries",{longer_alt:Co,categories:[Co]}),dm=d("keys",{longer_alt:Co,categories:[Co]}),fm=d("values",{longer_alt:Co,categories:[Co]}),OC=[lm,um,dm,fm];function NC(e){switch(e){case lm.name:case um.name:case dm.name:case fm.name:return"function";default:return null}}r(NC,"mapTokenToType");var he=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),pm=d("query",{longer_alt:he,categories:[he]}),Ka=d("verb",{longer_alt:he,categories:[he]}),Ja=d("GET",{longer_alt:he,categories:[he]}),Qa=d("PATCH",{longer_alt:he,categories:[he]}),Xa=d("POST",{longer_alt:he,categories:[he]}),Za=d("PUT",{longer_alt:he,categories:[he]}),$a=d("DELETE",{categories:[he],longer_alt:he}),mm=d("where",{longer_alt:he,categories:[he]}),hm=d("additional_where",{longer_alt:he,categories:[he]}),gm=d("sort",{longer_alt:he,categories:[he]}),Tm=d("override_sort",{longer_alt:he,categories:[he]}),Em=d("join",{longer_alt:he,categories:[he]}),MC=d("dblink",{longer_alt:he,categories:[he]}),Sm=d("paging",{longer_alt:he,categories:[he]}),ym=d("distinct",{longer_alt:he,categories:[he]}),es=d("output",{longer_alt:he,categories:[he]}),_m=d("addon",{longer_alt:he,categories:[he]}),Ac=d("eval",{longer_alt:he,categories:[he]}),wC=[hm,mm,gm,Tm,Em,pm,Ka,Ja,Qa,Xa,Za,$a,MC,ym,Sm,es,_m,Ac];function FC(e){switch(e){case pm.name:case Ka.name:return"keyword";case Ja.name:case Qa.name:case Xa.name:case Za.name:case $a.name:return"enumMember";case mm.name:case Em.name:case MC.name:case ym.name:case Sm.name:case es.name:case _m.name:case Ac.name:case gm.name:case Tm.name:case hm.name:return"property";default:return null}}r(FC,"mapTokenToType");var ts=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),bm=d("actions",{longer_alt:ts,categories:[ts]}),Rm=d("active",{longer_alt:ts,categories:[ts]}),km=d("realtime_trigger",{longer_alt:ts,categories:[ts]}),IC=[bm,Rm,km];function PC(e){switch(e){case bm.name:case km.name:return"keyword";case Rm.name:return"variable";default:return null}}r(PC,"mapTokenToType");var ke=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),xm=d("redis",{longer_alt:ke,categories:[ke]}),Am=d("count",{longer_alt:ke,categories:[ke]}),vm=d("decr",{longer_alt:ke,categories:[ke]}),Um=d("del",{longer_alt:ke,categories:[ke]}),Cm=d("get",{longer_alt:ke,categories:[ke]}),Lm=d("has",{longer_alt:ke,categories:[ke]}),Om=d("incr",{longer_alt:ke,categories:[ke]}),Nm=d("keys",{longer_alt:ke,categories:[ke]}),Mm=d("pop",{longer_alt:ke,categories:[ke]}),wm=d("push",{longer_alt:ke,categories:[ke]}),Fm=d("range",{longer_alt:ke,categories:[ke]}),Im=d("ratelimit",{longer_alt:ke,categories:[ke]}),Pm=d("remove",{longer_alt:ke,categories:[ke]}),Dm=d("set",{longer_alt:ke,categories:[ke]}),Bm=d("shift",{longer_alt:ke,categories:[ke]}),qm=d("unshift",{longer_alt:ke,categories:[ke]}),DC=[xm,Am,vm,Um,Cm,Lm,Om,Nm,Mm,wm,Fm,Im,Pm,Dm,Bm,qm];function BC(e){switch(e){case xm.name:case Am.name:case vm.name:case Um.name:case Cm.name:case Lm.name:case Om.name:case Nm.name:case Mm.name:case wm.name:case Fm.name:case Im.name:case Pm.name:case Dm.name:case Bm.name:case qm.name:return"function";default:return null}}r(BC,"mapTokenToType");var ge=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Gm=d("security",{longer_alt:ge,categories:[ge]}),jm=d("check_password",{longer_alt:ge,categories:[ge]}),Vm=d("create_password",{longer_alt:ge,categories:[ge]}),Wm=d("create_uuid",{longer_alt:ge,categories:[ge]}),zm=d("create_auth_token",{longer_alt:ge,categories:[ge]}),Hm=d("create_curve_key",{longer_alt:ge,categories:[ge]}),Ym=d("create_rsa_key",{longer_alt:ge,categories:[ge]}),Km=d("create_secret_key",{longer_alt:ge,categories:[ge]}),Jm=d("decrypt",{llt:ge,categories:[ge]}),Qm=d("encrypt",{llt:ge,categories:[ge]}),qC=d("generate_pass",{longer_alt:ge,categories:[ge]}),GC=d("generate_uuid",{longer_alt:ge,categories:[ge]}),Xm=d("jwe_decode",{longer_alt:ge,categories:[ge]}),Zm=d("jwe_encode",{longer_alt:ge,categories:[ge]}),$m=d("jws_decode",{longer_alt:ge,categories:[ge]}),eh=d("jws_encode",{longer_alt:ge,categories:[ge]}),th=d("random_bytes",{longer_alt:ge,categories:[ge]}),rh=d("random_number",{longer_alt:ge,categories:[ge]}),jC=[jm,Vm,Wm,zm,Hm,Ym,Km,Jm,Qm,qC,GC,Xm,Zm,$m,eh,th,rh,Gm];function VC(e){switch(e){case Gm.name:case jm.name:case Vm.name:case Wm.name:case zm.name:case Hm.name:case Ym.name:case Km.name:case Jm.name:case Qm.name:case qC.name:case GC.name:case Xm.name:case Zm.name:case $m.name:case eh.name:case th.name:case rh.name:return"function";default:return null}}r(VC,"mapTokenToType");var or=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),nh=d("storage",{longer_alt:or,categories:[or]}),oh=d("create_image",{longer_alt:or,categories:[or]}),ih=d("create_attachment",{longer_alt:or,categories:[or]}),ah=d("read_file_resource",{longer_alt:or,categories:[or]}),sh=d("create_file_resource",{longer_alt:or,categories:[or]}),WC=d("read_file",{longer_alt:or,categories:[or]}),ch=d("delete_file",{longer_alt:or,categories:[or]}),lh=d("sign_private_url",{longer_alt:or,categories:[or]}),zC=[nh,oh,ih,ah,sh,WC,ch,lh];function HC(e){switch(e){case nh.name:case oh.name:case ih.name:case ah.name:case sh.name:case WC.name:case ch.name:case lh.name:return"function";default:return null}}r(HC,"mapTokenToType");var Lo=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),uh=d("stream",{longer_alt:Lo,categories:[Lo]}),dh=d("from_csv",{longer_alt:Lo,categories:[Lo]}),fh=d("from_jsonl",{longer_alt:Lo,categories:[Lo]}),ph=d("from_request",{longer_alt:Lo,categories:[Lo]}),YC=[uh,dh,fh,ph];function KC(e){switch(e){case uh.name:case dh.name:case fh.name:case ph.name:return"function";default:return null}}r(KC,"mapTokenToType");var JC=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Oo=d("table",{longer_alt:JC,categories:[JC]}),QC=[Oo];function XC(e){switch(e){case Oo.name:return"keyword";default:return null}}r(XC,"mapTokenToType");var No=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),mh=d("actions",{longer_alt:No,categories:[No]}),hh=d("active",{longer_alt:No,categories:[No]}),gh=d("datasources",{longer_alt:No,categories:[No]}),Th=d("table_trigger",{longer_alt:No,categories:[No]}),ZC=[mh,hh,gh,Th];function $C(e){switch(e){case mh.name:case Th.name:return"keyword";case hh.name:case gh.name:return"variable";default:return null}}r($C,"mapTokenToType");var ir=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Eh=d("call",{longer_alt:ir,categories:[ir]}),Sh=d("datasource",{longer_alt:ir,categories:[ir]}),eL=d("ends_on",{longer_alt:ir,categories:[ir]}),tL=d("events",{longer_alt:ir,categories:[ir]}),rL=d("freq",{longer_alt:ir,categories:[ir]}),yh=d("schedule",{longer_alt:ir,categories:[ir]}),nL=d("starts_on",{longer_alt:ir,categories:[ir]}),rs=d("task",{longer_alt:ir,categories:[ir]}),oL=[Eh,Sh,eL,tL,rL,yh,nL,rs];function iL(e){switch(e){case Sh.name:case yh.name:case rs.name:return"keyword";case eL.name:case tL.name:case rL.name:case nL.name:return"variable";case Eh.name:return"function";default:return null}}r(iL,"mapTokenToType");var Ze=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),aL=d("text",{longer_alt:Ze,categories:[Ze]}),_h=d("append",{longer_alt:Ze,categories:[Ze]}),bh=d("contains",{longer_alt:Ze,categories:[Ze]}),Rh=d("ends_with",{longer_alt:Ze,categories:[Ze]}),kh=d("icontains",{longer_alt:Ze,categories:[Ze]}),xh=d("iends_with",{longer_alt:Ze,categories:[Ze]}),Ah=d("istarts_with",{longer_alt:Ze,categories:[Ze]}),vh=d("ltrim",{longer_alt:Ze,categories:[Ze]}),Uh=d("prepend",{longer_alt:Ze,categories:[Ze]}),Ch=d("rtrim",{longer_alt:Ze,categories:[Ze]}),Lh=d("starts_with",{longer_alt:Ze,categories:[Ze]}),Oh=d("trim",{longer_alt:Ze,categories:[Ze]}),sL=[aL,_h,bh,Rh,kh,xh,Ah,vh,Uh,Ch,Lh,Oh];function cL(e){switch(e){case aL.name:return"namespace";case _h.name:case bh.name:case Rh.name:case kh.name:case xh.name:case Ah.name:case vh.name:case Uh.name:case Ch.name:case Lh.name:case Oh.name:return"method";default:return null}}r(cL,"mapTokenToType");var qe=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Nh=d("util",{longer_alt:qe,categories:[qe]}),Mh=d("send_email",{longer_alt:qe,categories:[qe]}),wh=d("geo_distance",{longer_alt:qe,categories:[qe]}),Fh=d("get_all_input",{longer_alt:qe,categories:[qe]}),Ih=d("template_engine",{longer_alt:qe,categories:[qe]}),Ph=d("get_env",{longer_alt:qe,categories:[qe]}),Dh=d("get_input",{longer_alt:qe,categories:[qe]}),Bh=d("get_vars",{longer_alt:qe,categories:[qe]}),qh=d("ip_lookup",{longer_alt:qe,categories:[qe]}),Gh=d("post_process",{longer_alt:qe,categories:[qe]}),jh=d("precondition",{longer_alt:qe,categories:[qe]}),Vh=d("set_header",{longer_alt:qe,categories:[qe]}),Wh=d("sleep",{longer_alt:qe,categories:[qe]}),lL=[Nh,Ih,wh,Mh,Fh,Ph,Dh,Bh,qh,Gh,jh,Vh,Wh];function uL(e){switch(e){case Nh.name:case wh.name:case Fh.name:case Ph.name:case Dh.name:case Bh.name:case qh.name:case Gh.name:case jh.name:case Vh.name:case Wh.name:case Ih.name:case Mh.name:return"function";default:return null}}r(uL,"mapTokenToType");var zh=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Hh=d("var",{longer_alt:zh,categories:[zh]}),Yh=d("update",{longer_alt:zh,categories:[zh]}),dL=[Hh,Yh];function fL(e){switch(e){case Hh.name:case Yh.name:return"function";default:return null}}r(fL,"mapTokenToType");var He=A({name:"ShortFormVariable",pattern:/(\$[a-zA-Z]\w*)|(\$\$)/,label:"$"}),Mo=A({name:"ResponseVariable",pattern:/\$response/,label:"$response",categories:[He],longer_alt:He}),wo=A({name:"LongFormVariable",pattern:/\$var/,label:"$var",longer_alt:He}),pL=A({name:"$this",pattern:/\$this/,longer_alt:He,categories:[He]}),Kh=A({name:"InputVariable",pattern:/\$input/,longer_alt:He}),Jh=A({name:"EnvVariable",pattern:/\$env/,label:"$env",longer_alt:He}),Qh=A({name:"AuthVariable",pattern:/\$auth/,label:"$auth",longer_alt:He}),Xh=A({name:"$remote_ip",pattern:/\$remote_ip/,longer_alt:He}),Zh=A({name:"$error",pattern:/\$error/,longer_alt:He}),$h=A({name:"$remote_port",pattern:/\$remote_port/,longer_alt:He}),eg=A({name:"$remote_user",pattern:/\$remote_user/,longer_alt:He}),tg=A({name:"$remote_passwd",pattern:/\$remote_passwd/,longer_alt:He}),rg=A({name:"$remote_host",pattern:/\$remote_host/,longer_alt:He}),ng=A({name:"$request_method",pattern:/\$request_method/,longer_alt:He}),mL=[Mo,pL,wo,Kh,Jh,Qh,Zh,Xh,$h,eg,tg,rg,ng,He];function hL(e){switch(e){case Kh.name:case Zh.name:case Jh.name:case Qh.name:case Xh.name:case $h.name:case eg.name:case tg.name:case rg.name:case ng.name:case Mo.name:case wo.name:return"enumMember";case pL.name:case He.name:return"variable";default:return null}}r(hL,"mapTokenToType");var og=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),ns=d("datasource",{longer_alt:og,categories:[og]}),ig=d("workflow_test",{longer_alt:og,categories:[og]}),gL=[ns,ig];function TL(e){switch(e){case ig.name:return"keyword";case ns.name:return"variable";default:return null}}r(TL,"mapTokenToType");var Fo=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),ag=d("acceptance",{longer_alt:Fo,categories:[Fo]}),sg=d("preferences",{longer_alt:Fo,categories:[Fo]}),cg=d("realtime",{longer_alt:Fo,categories:[Fo]}),lg=d("workspace",{longer_alt:Fo,categories:[Fo]}),EL=[ag,sg,cg,lg];function SL(e){switch(e){case ag.name:case sg.name:case cg.name:case lg.name:return"keyword";default:return null}}r(SL,"mapTokenToType");var os=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),ug=d("actions",{longer_alt:os,categories:[os]}),dg=d("active",{longer_alt:os,categories:[os]}),fg=d("workspace_trigger",{longer_alt:os,categories:[os]}),yL=[ug,dg,fg];function _L(e){switch(e){case ug.name:case fg.name:return"keyword";case dg.name:return"variable";default:return null}}r(_L,"mapTokenToType");var Vr=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),pg=d("zip",{longer_alt:Vr,categories:[Vr]}),mg=d("add_to_archive",{longer_alt:Vr,categories:[Vr]}),hg=d("create_archive",{longer_alt:Vr,categories:[Vr]}),gg=d("delete_from_archive",{longer_alt:Vr,categories:[Vr]}),Tg=d("extract",{longer_alt:Vr,categories:[Vr]}),Eg=d("view_contents",{longer_alt:Vr,categories:[Vr]}),bL=[pg,mg,hg,gg,Tg,Eg];function RL(e){switch(e){case pg.name:case mg.name:case hg.name:case gg.name:case Tg.name:case Eg.name:return"function"}}r(RL,"mapTokenToType");var y=A({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),q=A({name:"Dot",pattern:/\./,label:"."}),Sg=d("tags",{longer_alt:y,categories:[y]}),Io=d("now",{longer_alt:y}),Po=d("null",{longer_alt:y}),yg=A({name:"RegExpToken",label:"regexp",pattern:/\/(?:[^/\n\\]|\\.)+\//}),ar=A({name:"StaticPathToken",label:"static_path",pattern:/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)+/}),is=A({name:"DynamicPath",label:"dynamic_path",pattern:/(([a-zA-Z]\w*)|(\{[a-zA-Z]\w*\}))((\/[a-zA-Z]\w*)|(\/\{[a-zA-Z]\w*\}))+/}),kL=A({name:"WhiteSpace",pattern:/[ \t]+/,group:nt.SKIPPED,label:"whitespace"}),h=A({name:"NewlineToken",pattern:/(\r?\n)/}),_g=d("type",{longer_alt:y,categories:[y]}),xL=d("field",{longer_alt:y,categories:[y]}),ft=d("true",{longer_alt:y}),pt=d("false",{longer_alt:y}),as=d("input",{longer_alt:y,categories:[y]}),bg=d("stack",{longer_alt:y,categories:[y]}),Rg=d("test",{longer_alt:y,categories:[y]}),kg=d("response",{longer_alt:y,categories:[y]}),xg=d("view",{longer_alt:y,categories:[y]}),Ag=d("middleware",{longer_alt:y,categories:[y]}),AL=d("return_aggregate",{pattern:/return_aggregate/}),ss=d("auth",{longer_alt:y,categories:[y]}),vL=d("security",{longer_alt:y,categories:[y]}),vg=d("history",{longer_alt:y,categories:[y]}),Ug=d("cache",{longer_alt:y,categories:[y]}),UL=d("guid",{longer_alt:y,categories:[y]}),Cg=d("schema",{longer_alt:y,categories:[y]}),Lg=d("index",{longer_alt:y,categories:[y]}),Og=d("values",{longer_alt:y,categories:[y]}),Ng=d("value",{longer_alt:y,categories:[y]}),Mg=d("sensitive",{longer_alt:y,categories:[y]}),cs=d("description",{longer_alt:y,categories:[y]}),ls=d("disabled",{longer_alt:y,categories:[y]}),wg=d("mock",{longer_alt:y,categories:[y]}),Fg=d("docs",{longer_alt:y,categories:[y]}),Ig=A({name:"DbIdentifier",label:"db.identifier",pattern:/dbo=\d+/}),vc=A({name:"JsonInToken",pattern:/in/,label:"in",longer_alt:y,categories:[y]}),Uc=ko([kL,h,...CC,...rC,ar,is,yg,Lg,as,AL,...DU,...xC,...RC,...IC,...eC,...wC,...TC,...bU,...Id,Ig,Og,Ng,ft,pt,_g,xL,ss,UL,Mg,Sg,cs,Fg,ls,wg,Cg,bg,Rg,Ag,...vC,kg,Po,Io,vg,Ug,vL,...zC,...bL,...hC,...jC,...lL,...ZC,...yL,...oL,...gL,...pC,...zU,...VU,...mL,...YU,...QC,...ZU,...aC,...DC,...sL,...OC,...YC,...cC,...uC,...dL,...SC,...qU,...IU,..._C,...wU,...QU,...EL,xg,vc,q,y]),RW=[FU,GU,PU,BU,HU,WU,KU,XU,NU,$U,tC,nC,RU,sC,lC,dC,mC,gC,EC,yC,kC,AC,UC,LC,NC,FC,PC,BC,VC,HC,KC,XC,$C,iL,cL,bC,uL,fL,hL,TL,SL,_L,RL];function Pg(e){for(let t of RW){let n=t(e);if(n)return n}switch(e){case Ug.name:case vg.name:case Lg.name:case as.name:case Ag.name:case wg.name:case kg.name:case xg.name:case Cg.name:case vL.name:case bg.name:case Rg.name:return"keyword";case ss.name:case Ig.name:case AL.name:case cs.name:case ls.name:case Fg.name:case is.name:case xL.name:case UL.name:case Mg.name:case ar.name:case Sg.name:case _g.name:case Ng.name:case Og.name:return"variable";case y.name:return"property";case pt.name:case Io.name:case Po.name:case ft.name:return"enumMember";case q.name:return"punctuation";case yg.name:return"regexp";case vc.name:return"operator";case h.name:case kL.name:return null;default:return}}r(Pg,"mapTokenToType");var kW=new nt(Uc),xW=new nt([...XE(Uc,jr),MS]);function Do(e,t=!1){return t?xW.tokenize(e):kW.tokenize(e)}r(Do,"lexDocument");var Wr=class{static{r(this,"HoverMessageProvider")}constructor(){this.message="",this.range=null}isMatch(t,n,o){return!1}render(t,n,o){return this.message}};var us=class extends Wr{static{r(this,"FilterMessageProvider")}constructor(t){super(),this.parseFilters(t)}parseFilters(t){this.__filterDoc={};let n=[],o="";for(let i of t.split(`
`))if(i.startsWith("#")){if(o&&(this.__filterDoc[o]=n.join(`
`)),o=i.slice(1).trim(),o.startsWith("!")){let[a,s]=o.slice(1).split(":").map(c=>c.trim()).filter(c=>c);s&&(this.__filterDoc[a]=`\`${a}\` is deprecated, use \`${s}\` instead.`),o=""}n=[]}else n.push(i)}findFilter(t,n){let o=n[t];if(!(o.tokenType.name==="Identifier"||o.tokenType.LONGER_ALT&&o.tokenType.LONGER_ALT.name==="Identifier"||o.tokenType.CATEGORIES&&o.tokenType.CATEGORIES.some(s=>s.name==="Identifier")))return null;let a=o.image;return this.__filterDoc[a]?a:null}isMatch(t,n,o){return t===0||n[t-1].image!=="|"?!1:!!this.findFilter(t,n)}render(t,n){let o=this.findFilter(t,n);if(o)return this.__filterDoc[o]}};var wS=["keyword","namespace","variable","singleString","doubleString","tripleString","method","macro","tripleMacro","property","operator","operator.openingCurly","operator.closingCurly","operator.openingSquare","operator.closingSquare","operator.openingParenthesis","operator.closingParenthesis","function","comment","type","punctuation","regexp","enumMember","number","boolean","bracket"],AW=wS.reduce((e,t,n)=>(e[t]=n,e),{});function Cc(e){return AW[e]}r(Cc,"encodeTokenType");var Dg=["deg2rad","rad2deg","number_format","sin","asin","asinh","cos","acos","acosh","tan","atan","atanh","floor","ceil","round","first","last","count","range","reverse","unique","safe_array","flatten","filter_empty","sort","shuffle","diff","diff_assoc","intersect","intersect_assoc","merge","merge_recursive","index_by","push","pop","unshift","shift","remove","append","prepend","abs","sqrt","exp","log","log10","ln","pow","array_min","min","array_max","max","sum","avg","product","equals","not_equals","greater_than","greater_than_or_equal","less_than","less_than_or_equal","odd","even","in","add","subtract","multiply","modulus","divide","bitwise_and","bitwise_or","bitwise_xor","not","bitwise_not","is_null","is_empty","is_object","is_array","is_int","is_decimal","is_bool","is_text","addslashes","escape","list_encodings","detect_encoding","to_utf8","from_utf8","convert_encoding","to_lower","to_upper","trim","ltrim","rtrim","capitalize","substr","split","join","slice","strlen","strip_html","unaccent","index","iindex","starts_with","istarts_with","ends_with","iends_with","contains","icontains","set","set_conditional","set_ifnotempty","set_ifnotnull","first_notnull","first_notempty","unset","transform","get","has","fill","fill_keys","keys","values","entries","to_expr","to_text","to_int","to_decimal","to_bool","to_timestamp","to_ms","to_seconds","to_minutes","to_hours","to_days","create_object","create_object_from_entries","json_decode","json_encode","xml_decode","csv_parse","csv_decode","csv_encode","csv_create","url_decode","url_decode_rfc3986","url_encode","url_encode_rfc3986","url_addarg","url_delarg","url_hasarg","url_getarg","url_parse","querystring_parse","yaml_decode","yaml_encode","hex2bin","bin2hex","dechex","hexdec","decbin","bindec","decoct","octdec","base_convert","base64_decode","base64_encode","base64_decode_urlsafe","base64_encode_urlsafe","encrypt","decrypt","jws_encode","jws_decode","jwe_encode","jwe_decode","concat","sprintf","replace","secureid_encode","secureid_decode","md5","sha1","sha256","sha384","sha512","hmac_md5","hmac_sha1","hmac_sha256","hmac_sha384","hmac_sha512","create_uid","uuid","parse_timestamp","format_timestamp","transform_timestamp","add_secs_to_timestamp","add_ms_to_timestamp","regex_matches","regex_get_first_match","regex_get_all_matches","regex_quote","regex_replace","map","filter","filter_null","filter_empty_text","filter_empty_object","filter_empty_array","some","every","find","findIndex","reduce","pick","unpick"],FS={text:["trim","min","max","startsWith","prevent","lower","upper","alphaOk","digitOk","ok","pattern"],decimal:["min","max"],int:["min","max"],email:["trim","lower"],password:["min","max","minAlpha","minLowerAlpha","minUpperAlpha","minDigit","minSymbol"],blob:[],blob_img:[],blob_video:[],blob_audio:[],enum:[],file:[],json:[],obj:[],epochms:[]},CL=["covers","l1_distance_manhattan","l2_distance_euclidean","inner_product","negative_inner_product","cosine_distance","cosine_similarity","distance","within","between","length","floor","ceil","round","to_lower","to_upper","concat","substr","coalesce","unaccent","add","sub","mul","div","search_rank","timestamp_month","timestamp_year","timestamp_week","timestamp_hour","timestamp_minute","timestamp_day_of_month","timestamp_day_of_week","timestamp_day_of_year","timestamp_epoch_day","timestamp_epoch_hour","timestamp_epoch_minute","timestamp_epoch_sec","timestamp_add_seconds","timestamp_subtract_seconds","timestamp_add_minutes","timestamp_subtract_minutes","timestamp_add_hours","timestamp_subtract_hours","timestamp_add_days","timestamp_subtract_days","timestamp_add_months","timestamp_subtract_months","timestamp_add_years","timestamp_subtract_years"];function LL(e){return()=>{let t=!1,n=!1,o=!1,i=!1;e.sectionStack.push("addonDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let a=e.CONSUME(Pd);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),n||e.addMissingError(a,"{} is missing an input clause"),o||e.addMissingError(a,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(LL,"addonDeclaration");var _e=r(e=>e?e.tokenType===M?e.image.slice(1,-1):e.image:"","getVarName");function OL(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1;e.sectionStack.push("agentDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let p=e.CONSUME(Dd);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.MANY4(()=>e.CONSUME5(on)),e.MANY5(()=>e.CONSUME6(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.canonicalClause)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0;let g=e.CONSUME(Bd);e.CONSUME(C);let S={anthropic:["type","max_steps","model","temperature","headers"],"google-genai":["type","max_steps","model","temperature","headers","search_grounding","include_thoughts"],openai:["type","max_steps","model","temperature","reasoning_effort"],xano_free:["type","max_steps","temperature","search_grounding"]},x={anthropic:[...S.anthropic,"system_prompt","prompt","messages","api_key","reasoning","thinking_tokens","baseURL"],"google-genai":[...S["google-genai"],"system_prompt","prompt","messages","api_key","thinking_tokens","baseURL","safety_settings","dynamic_retrival","reasoning"],openai:[...S.openai,"system_prompt","prompt","messages","api_key","baseURL","headers","organization","project","compatibility"],"xano-free":[...S.xano_free,"system_prompt","prompt","messages","baseURL","headers","safety_settings","dynamic_retrival","thinking_tokens","include_thoughts"]},L={};e.SUBRULE(e.schemaParseObjectFn,{ARGS:[g,{type:["anthropic","google-genai","openai","xano-free"],max_steps:"[number]","prompt?":"[string]","messages?":"[string]","api_key?":"[string]","baseURL?":"[string]","compatibility?":["strict","compatible",""],"dynamic_retrival?":["enabled","disabled",""],"headers?":"[string]","include_thoughts?":"[boolean]","model?":"[string]","organization?":"[string]","project?":"[string]","reasoning_effort?":"[string]","reasoning?":"[boolean]","safety_settings?":"[string]","search_grounding?":"[boolean]","system_prompt?":"[string]","temperature?":"[number]","thinking_tokens?":"[number]"},L]}),e.ACTION(()=>{let G=_e(L.type?.value),P=S[G]||[];for(let w of P)Object.prototype.hasOwnProperty.call(L,w)||e.addMissingError(g,`llm of type "${G}" requires a "${w}" field`);let z=x[G]||[],B=[];for(let w in L){let V=_e(L[w].key);B.push(V),z.includes(V)||e.addIllegalAttributeError(L[w].key)}let b=B.includes("prompt"),E=B.includes("messages");b&&E?e.addIllegalAttributeError(L.messages.key,`llm of type "${G}" cannot have both "prompt" and "messages" fields`):!b&&!E&&e.addMissingError(g,`llm of type "${G}" requires either a "prompt" or "messages" field`)})},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.outputClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0;let g=e.CONSUME(qd);e.CONSUME2(C),e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[g,["name"],["active","auth"],{types:{active:"boolean",auth:"string",name:"string"}}]})},"ALT")}])}),t||e.addMissingError(p,"{} is missing canonical clause"),a||e.addMissingError(p,"{} is missing llm clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(OL,"agentDeclaration");function NL(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1,g=!1;e.sectionStack.push("agentTriggerDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let S=e.CONSUME(Vd);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let x=e.CONSUME(Gd);e.CONSUME(C),e.SUBRULE(e.objectAttrReq,{ARGS:[x,["connection"],[],{types:{connection:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(jd),e.CONSUME2(C),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.agentClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!g,"GATE"),ALT:r(()=>{g=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),o||e.addMissingError(S,"{} is missing agent clause"),c||e.addMissingError(S,"{} is missing an input clause"),p||e.addMissingError(S,"{} is missing a stack clause"),u||e.addMissingError(S,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(NL,"agentTriggerDeclaration");function ML(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1;e.sectionStack.push("apiGroupDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let p=e.CONSUME(nf);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(Sa),e.CONSUME1(C),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(of),e.CONSUME2(C),e.CONSUME2(M)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0;let g=e.CONSUME(af);e.CONSUME3(C),e.SUBRULE(e.objectAttrReq,{ARGS:[g,[],["mode","origins","methods","headers","credentials","max_age"],{types:{mode:"string",origins:r(S=>S.SUBRULE(S.arrayOfStringLiterals),"origins"),methods:r(S=>S.SUBRULE1(S.arrayOfStringLiterals),"methods"),headers:r(S=>S.SUBRULE2(S.arrayOfStringLiterals),"headers"),credentials:"boolean",max_age:"number"}}]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0;let g=e.CONSUME(sf);e.CONSUME4(C),e.SUBRULE2(e.objectAttrReq,{ARGS:[g,[],["active","token"],{active:"boolean",token:"string"}]})},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),n||e.addMissingError(p,"{} is missing a canonical field"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(ML,"apiGroupDeclaration");function wL(e){return()=>{e.sectionStack.push("columnDefaultValueAttribute"),e.CONSUME(C),e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(Yt),"ALT")},{ALT:r(()=>e.CONSUME(it),"ALT")},{ALT:r(()=>e.CONSUME(ft),"ALT")},{ALT:r(()=>e.CONSUME(pt),"ALT")},{ALT:r(()=>e.CONSUME(Io),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}]),e.sectionStack.pop()}}r(wL,"columnDefaultValueAttribute");function FL(e){return()=>{e.sectionStack.push("descriptionFieldAttribute"),e.CONSUME(cs),e.CONSUME(C),e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(nr),"ALT")}]),e.sectionStack.pop()}}r(FL,"descriptionFieldAttribute");function IL(e){return()=>{e.sectionStack.push("disabledFieldAttribute"),e.CONSUME(ls),e.CONSUME(C),e.OR([{ALT:r(()=>e.CONSUME(ft),"ALT")},{ALT:r(()=>e.CONSUME(pt),"ALT")}]),e.sectionStack.pop()}}r(IL,"disabledFieldAttribute");function PL(e){return()=>{e.sectionStack.push("docsFieldAttribute"),e.CONSUME(Fg),e.CONSUME(C),e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(nr),"ALT")}]),e.sectionStack.pop()}}r(PL,"docsFieldAttribute");function DL(e){return t=>{e.sectionStack.push("inputFilterFn"),e.OR([{ALT:r(()=>{e.OPTION(()=>e.CONSUME(jr));let n=e.CONSUME(y);e.MANY1(()=>{e.CONSUME1(Ne),e.OR2([{ALT:r(()=>e.CONSUME2(y),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")},{ALT:r(()=>e.CONSUME1(yg),"ALT")},{ALT:r(()=>e.CONSUME1(it),"ALT")},{ALT:r(()=>e.CONSUME1(Yt),"ALT")},{ALT:r(()=>e.CONSUME1(pt),"ALT")},{ALT:r(()=>e.CONSUME1(ft),"ALT")}])}),t&&FS[t.image]&&!FS[t.image].includes(n.image)&&e.addInvalidValueError(n,`Filter '${n.image}' cannot be applied to input of type '${t}'`)},"ALT")},{ALT:r(()=>{e.CONSUME(Fp),e.CONSUME2(Ne),e.CONSUME(Ig)},"ALT")}]),e.sectionStack.pop()}}r(DL,"inputFilterFn");var BL=r(e=>()=>{e.sectionStack.push("sensitiveFieldAttribute"),e.CONSUME(Mg),e.CONSUME(C),e.OR([{ALT:r(()=>e.CONSUME(ft),"ALT")},{ALT:r(()=>e.CONSUME(pt),"ALT")}]),e.sectionStack.pop()},"sensitiveFieldAttribute");function qL(e){return()=>{e.sectionStack.push("valueFieldAttribute"),e.CONSUME(Ng),e.CONSUME(C),e.SUBRULE(e.valueExpression,{ARGS:[{allowIdentifier:!1}]}),e.sectionStack.pop()}}r(qL,"valueFieldAttribute");function GL(e){return()=>{e.sectionStack.push("valuesFieldAttribute"),e.CONSUME(Og),e.CONSUME(C),e.SUBRULE(e.stringArray),e.sectionStack.pop()}}r(GL,"valuesFieldAttribute");var jL=r(e=>{e.columnDefaultValueAttribute=e.RULE("columnDefaultValueAttribute",wL(e)),e.descriptionFieldAttribute=e.RULE("descriptionFieldAttribute",FL(e)),e.disabledFieldAttribute=e.RULE("disabledFieldAttribute",IL(e)),e.docsFieldAttribute=e.RULE("docsFieldAttribute",PL(e)),e.inputFilterFn=e.RULE("inputFilterFn",DL(e)),e.sensitiveFieldAttribute=e.RULE("sensitiveFieldAttribute",BL(e)),e.valueFieldAttribute=e.RULE("valueFieldAttribute",qL(e)),e.valuesFieldAttribute=e.RULE("valuesFieldAttribute",GL(e))},"register");function VL(e){return()=>{e.sectionStack.push("branchDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let t=e.CONSUME(_f);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}]);let n={pre:[{name:"[string]"}],post:[{name:"[string]"}]};e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{color:"[string]","description?":"[string]",middleware:{function:n,query:n,task:n,tool:n},history:{function:[!1,10,100,1e3,1e4,"all"],query:[!1,10,100,1e3,1e4,"all"],task:[!1,10,100,1e3,1e4,"all"],tool:[!1,10,100,1e3,1e4,"all"],trigger:[!1,10,100,1e3,1e4,"all"],middleware:[!1,10,100,1e3,1e4,"all"]}}]}),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(VL,"branchDeclaration");var WL=r(e=>()=>{e.sectionStack.push("agentClause");let t=e.CONSUME(lp);e.CONSUME(C),e.CONSUME(M).image==='""'&&e.addMissingError(t,"agent cannot be empty"),e.sectionStack.pop()},"agentClause");var zL=r(e=>()=>{e.sectionStack.push("authClause"),e.CONSUME(ss),e.CONSUME(C),e.OR([{ALT:r(()=>e.CONSUME(ft),"ALT")},{ALT:r(()=>e.CONSUME(pt),"ALT")}]),e.sectionStack.pop()},"authClause");function HL(e){return()=>{e.sectionStack.push("cacheClause");let t=e.CONSUME(Ug);e.CONSUME(C),e.SUBRULE(e.objectAttrReq,{ARGS:[t,["ttl","input","auth","datasource","ip"],["headers","env"],{types:{ttl:"number",input:"boolean",auth:"boolean",datasource:"boolean",ip:"boolean"}}]}),e.sectionStack.pop()}}r(HL,"cacheClause");var YL=r(e=>()=>{e.sectionStack.push("canonicalClause");let t=e.CONSUME(fp);e.CONSUME(C),e.CONSUME(M).image==='""'&&e.addMissingError(t,"canonical cannot be empty"),e.sectionStack.pop()},"canonicalClause");var KL=r(e=>()=>{e.sectionStack.push("channelClause");let t=e.CONSUME(dp);e.CONSUME(C),e.CONSUME(M).image==='""'&&e.addMissingError(t,"channel cannot be empty"),e.sectionStack.pop()},"channelClause");var JL=r(e=>()=>{e.sectionStack.push("dbTableClause");let t=e.CONSUME(Oo);e.CONSUME(C),e.CONSUME(M).image==='""'&&e.addMissingError(t,"table cannot be empty"),e.sectionStack.pop()},"dbTableClause");function QL(e){return t=>{let n=t?.[0]||y,o=t?.[1]??!0;e.sectionStack.push(n.name+"Clause"),e.CONSUME(n),e.CONSUME(C);let i=e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(nr),"ALT")}]);o||i.image==='""'&&e.addMissingError(i,"value cannot be empty"),e.sectionStack.pop()}}r(QL,"flexibleStringClause");function XL(e){return()=>{e.sectionStack.push("historyClause");let t=e.CONSUME(vg);e.CONSUME(C),e.SUBRULE(e.schemaParseEnumFn,{ARGS:[t,[!1,"inherit",0,10,100,1e3,1e4,"all"]]}),e.sectionStack.pop()}}r(XL,"historyClause");function ZL(e){return()=>{e.sectionStack.push("indexClause");let t=e.CONSUME(Lg);e.CONSUME(C),e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[t,["type","field"],["name"],{types:{type:"string"}}]}),e.sectionStack.pop()}}r(ZL,"indexClause");function $L(e){return()=>{e.sectionStack.push("inputClause"),e.CONSUME(as),e.OPTION(()=>{e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.SUBRULE(e.optionalCommentBlockFn),e.OR([{ALT:r(()=>e.SUBRULE(e.objectColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.enumColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.columnDefinition,{ARGS:[{include_file:!0}]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbLinkColumnDefinition),"ALT")}])}),e.AT_LEAST_ONE2(()=>e.CONSUME2(h)),e.CONSUME(N)}),e.sectionStack.pop()}}r($L,"inputClause");var eO=r(e=>()=>{e.sectionStack.push("mcpServerClause");let t=e.CONSUME(up);e.CONSUME(C),e.CONSUME(M).image==='""'&&e.addMissingError(t,"mcp_server cannot be empty"),e.sectionStack.pop()},"mcpServerClause");function tO(e){return()=>{e.sectionStack.push("middlewareClause");let t=e.CONSUME(Ag);e.CONSUME(C),e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,{"pre?":[{name:"[string]","active?":"[boolean]","required?":"[boolean]"}],"post?":[{name:"[string]","active?":"[boolean]","required?":"[boolean]"}]}]}),e.sectionStack.pop()}}r(tO,"middlewareClause");var IS={allowExpectStatements:!1,allowCallStatements:!1};function rO(e){return(t={})=>{t={...IS,...t},e.sectionStack.push("nakedStackFn"),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.OPTION(()=>e.CONSUME(jr)),e.OR([{ALT:r(()=>e.CONSUME(on),"ALT")},{ALT:r(()=>e.SUBRULE(e.aiFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.varFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.mathFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.textFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.preconditionFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.objectFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiFn,{ARGS:[t]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.controlFn,{ARGS:[t]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.debugFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.streamFn),"ALT")},{GATE:r(()=>t.allowExpectStatements,"GATE"),ALT:r(()=>e.SUBRULE(e.workflowExpectFn),"ALT")}])}),e.AT_LEAST_ONE2(()=>e.CONSUME2(h)),e.CONSUME(N),e.sectionStack.pop()}}r(rO,"nakedStackFn");function nO(e){return()=>{e.sectionStack.push("outputClause"),e.CONSUME(es),e.OPTION(()=>{e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.objectColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.enumColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.columnDefinition,{ARGS:[{include_file:!1}]}),"ALT")}])}),e.AT_LEAST_ONE2(()=>e.CONSUME2(h)),e.CONSUME(N)}),e.sectionStack.pop()}}r(nO,"outputClause");function oO(e){return()=>{e.sectionStack.push("responseClause"),e.CONSUME(kg),e.CONSUME(C),e.SUBRULE(e.valueExpression),e.sectionStack.pop()}}r(oO,"responseClause");function iO(e){return()=>{e.sectionStack.push("scheduleClause");let t=e.CONSUME(yh);e.CONSUME(C),e.SUBRULE(e.schemaFn,{ARGS:[t,[{starts_on:"[timestamp]","ends_on?":"[timestamp]","freq?":"[number]"}]]}),e.sectionStack.pop()}}r(iO,"scheduleClause");var vW={include_file:!0,isTableSchema:!1};function aO(e){return(t={},n={})=>{t={...vW,...t},e.sectionStack.push("schemaClause");let o=e.CONSUME(Cg);if(e.OPTION(()=>{e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.OR([{ALT:r(()=>e.CONSUME(on),"ALT")},{ALT:r(()=>e.SUBRULE(e.objectColumnDefinition,{ARGS:[n]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.enumColumnDefinition,{ARGS:[n]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.columnDefinition,{ARGS:[{include_file:t.include_file,isTableSchema:t.isTableSchema},n]}),"ALT")}])}),e.MANY1(()=>e.CONSUME2(h)),e.CONSUME(N)}),t.isTableSchema){let i=n.id;i?["int","uuid"].includes(i.typeToken.image)||e.addInvalidValueError(i.typeToken,'The "id" column can only be of type "int" or "uuid"'):e.addMissingError(o,"{} must have an 'id' of type uuid or int column defined")}e.sectionStack.pop()}}r(aO,"schemaClause");function sO(e){return(t={})=>{t={...IS,...t},e.sectionStack.push("stackClause"),e.CONSUME(bg),e.OPTION(()=>e.SUBRULE(e.nakedStackFn,{ARGS:[t]})),e.sectionStack.pop()}}r(sO,"stackClause");function cO(e){return t=>{let n=!1,o=!1;t=t||[],e.sectionStack.push("testClause"),e.CONSUME(Rg);let i=e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME(ar),"ALT")}]);if(i&&i.image){let a=i.image.replaceAll('"',"");t.includes(a)&&e.addDuplicateNameError(i,"test"),t.push(i.image.replaceAll('"',""))}e.CONSUME(O),e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.MANY(()=>{e.OR1([{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(as),e.CONSUME(C),e.SUBRULE(e.objectWithAttributes)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.CONSUME(ns),e.CONSUME1(C),e.CONSUME1(M)},"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectFn),"ALT")}]),e.AT_LEAST_ONE1(()=>e.CONSUME1(h))}),e.CONSUME(N),e.sectionStack.pop()}}r(cO,"testClause");function lO(e){return()=>{e.sectionStack.push("viewClause");let t=e.CONSUME(xg);e.CONSUME(C),e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,{"[string]":{search:"[query]",sort:{"[string]":["asc","desc","rand"]},id:"[string]","alias?":"[string]"}}]}),e.sectionStack.pop()}}r(lO,"viewClause");var uO=r(e=>{e.agentClause=e.RULE("agentClause",WL(e)),e.authClause=e.RULE("authClause",zL(e)),e.cacheClause=e.RULE("cacheClause",HL(e)),e.canonicalClause=e.RULE("canonicalClause",YL(e)),e.channelClause=e.RULE("channelClause",KL(e)),e.dbTableClause=e.RULE("dbTableClause",JL(e)),e.flexibleStringClause=e.RULE("flexibleStringClause",QL(e)),e.historyClause=e.RULE("historyClause",XL(e)),e.indexClause=e.RULE("indexClause",ZL(e)),e.inputClause=e.RULE("inputClause",$L(e)),e.outputClause=e.RULE("outputClause",nO(e)),e.mcpServerClause=e.RULE("mcpServerClause",eO(e)),e.middlewareClause=e.RULE("middlewareClause",tO(e)),e.nakedStackFn=e.RULE("nakedStackFn",rO(e)),e.responseClause=e.RULE("responseClause",oO(e)),e.scheduleClause=e.RULE("scheduleClause",iO(e)),e.schemaClause=e.RULE("schemaClause",aO(e)),e.stackClause=e.RULE("stackClause",sO(e)),e.testClause=e.RULE("testClause",cO(e)),e.viewClause=e.RULE("viewClause",lO(e))},"register");function dO(e){return()=>{e.sectionStack.push("arraySlice");let t=null,n=null;if(e.OR([{ALT:r(()=>{e.CONSUME(yt),e.CONSUME(_t)},"ALT")},{ALT:r(()=>{e.CONSUME1(yt),t=e.CONSUME1(it),e.CONSUME1(Ne),e.OPTION(()=>n=e.CONSUME3(it)),e.CONSUME1(_t)},"ALT")},{ALT:r(()=>{e.CONSUME2(yt),e.CONSUME2(Ne),n=e.CONSUME2(it),e.CONSUME2(_t)},"ALT")}]),t&&t.image.startsWith("-")&&e.addInvalidValueError(t,"Array slice start index cannot be negative"),n&&n.image.startsWith("-")&&e.addInvalidValueError(n,"Array slice end index cannot be negative"),t&&n){let o=parseInt(t.image,10);parseInt(n.image,10)<o&&e.addInvalidValueError(n,"Array slice end index cannot be less than start index")}e.sectionStack.pop()}}r(dO,"arraySlice");var UW={include_file:!1,isTableSchema:!1};function fO(e){return(t={},n={})=>{t={...UW,...t};let o=!1,i=!1,a=!1;e.sectionStack.push("columnDefinition");let s=e.OR([{ALT:r(()=>e.CONSUME(Bf),"ALT")},{ALT:r(()=>e.CONSUME(qf),"ALT")},{ALT:r(()=>e.CONSUME(_a),"ALT")},{ALT:r(()=>e.CONSUME(Gf),"ALT")},{ALT:r(()=>e.CONSUME(jf),"ALT")},{ALT:r(()=>e.CONSUME(Wf),"ALT")},{ALT:r(()=>e.CONSUME(zf),"ALT")},{ALT:r(()=>e.CONSUME(Hf),"ALT")},{ALT:r(()=>e.CONSUME(Yf),"ALT")},{ALT:r(()=>e.CONSUME(Kf),"ALT")},{ALT:r(()=>e.CONSUME(Jf),"ALT")},{ALT:r(()=>e.CONSUME(Zf),"ALT")},{ALT:r(()=>e.CONSUME($f),"ALT")},{ALT:r(()=>e.CONSUME(ep),"ALT")},{ALT:r(()=>e.CONSUME(tp),"ALT")},{ALT:r(()=>e.CONSUME(rp),"ALT")},{ALT:r(()=>e.CONSUME(np),"ALT")},{ALT:r(()=>e.CONSUME(op),"ALT")},{ALT:r(()=>e.CONSUME(ip),"ALT")},{ALT:r(()=>e.CONSUME(ap),"ALT")},{ALT:r(()=>e.CONSUME(sp),"ALT")},{GATE:r(()=>!!t.include_file,"GATE"),ALT:r(()=>e.CONSUME(Qf),"ALT")}]);e.OPTION1(()=>{i=!0,e.SUBRULE(e.arraySlice)}),e.OPTION2(()=>{o=!0,e.CONSUME(Cr)});let c=e.CONSUME(y);e.OPTION6(()=>{a=!0,e.CONSUME1(Cr)}),e.OPTION3(()=>e.SUBRULE(e.columnDefaultValueAttribute)),e.OPTION4(()=>e.SUBRULE(e.filterDefinition,{ARGS:[s]})),e.OPTION5(()=>e.SUBRULE(e.columnMetadataDefinition)),n[_e(c)]={typeToken:s,nameToken:c},e.addInput(c.image,s.image,i,o,a),e.sectionStack.pop()}}r(fO,"columnDefinition");function pO(e){return()=>{e.sectionStack.push("dbLinkColumnDefinition");let t=e.CONSUME(cp);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{table:"[string]","override?":{"[string]":{hidden:"[boolean]"}}}]}),e.sectionStack.pop()}}r(pO,"dbLinkColumnDefinition");function mO(e){return(t={})=>{e.sectionStack.push("enumColumnDefinition");let n=e.CONSUME(Vf),o=!1,i=!1,a=!1;e.OPTION1(()=>{o=!0,e.SUBRULE(e.arraySlice)}),e.OPTION2(()=>{i=!0,e.CONSUME(Cr)});let s=e.CONSUME(y);t[_e(s)]={typeToken:n,nameToken:s},e.OPTION(()=>{a=!0,e.CONSUME1(Cr)}),e.OPTION3(()=>e.SUBRULE(e.columnDefaultValueAttribute)),e.SUBRULE(e.enumColumnMetadataDefinition,{ARGS:[n]}),e.addInput(s.image,"enum",o,i,a),e.sectionStack.pop()}}r(mO,"enumColumnDefinition");function hO(e){return(t=null)=>{e.sectionStack.push("filterDefinition"),e.CONSUME(wp),e.CONSUME(C),e.AT_LEAST_ONE_SEP({SEP:Ft,DEF:r(()=>e.SUBRULE(e.inputFilterFn,{ARGS:[t]}),"DEF")}),e.sectionStack.pop()}}r(hO,"filterDefinition");function gO(e){return(t={})=>{e.sectionStack.push("objectColumnDefinition");let n=e.CONSUME(Xf),o=!1,i=!1,a=!1;e.OPTION2(()=>{o=!0,e.SUBRULE(e.arraySlice)});let s=e.CONSUME(y);t[_e(s)]={typeToken:n,nameToken:s},e.OPTION(()=>{a=!0,e.CONSUME(Cr)}),e.SUBRULE(e.objectColumnMetadataDefinition),e.addInput(s.image,"enum",o,i,a),e.sectionStack.pop()}}r(gO,"objectColumnDefinition");var TO=r(e=>{e.arraySlice=e.RULE("arraySlice",dO(e)),e.columnDefinition=e.RULE("columnDefinition",fO(e)),e.dbLinkColumnDefinition=e.RULE("dbLinkColumnDefinition",pO(e)),e.enumColumnDefinition=e.RULE("enumColumnDefinition",mO(e)),e.filterDefinition=e.RULE("filterDefinition",hO(e)),e.objectColumnDefinition=e.RULE("objectColumnDefinition",gO(e))},"register");function EO(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1,g=[];e.sectionStack.push("functionDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let S=e.CONSUME(vo);e.OR([{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME(ar),"ALT")},{ALT:r(()=>e.CONSUME(M),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.cacheClause)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[g]})},"ALT")}])}),a||e.addMissingError(S,"{} is missing an input clause"),u||e.addMissingError(S,"{} is missing a stack clause"),c||e.addMissingError(S,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(EO,"functionDeclaration");function SO(e){return()=>{e.sectionStack.push("aiAgentRunFn");let t=e.CONSUME(Ea);e.OR({DEF:[{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME(M),"ALT")}],ERR_MSG:"Expected an agent name"}),e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{"args?":"[expression]","allow_tool_execution?":"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(SO,"aiAgentRunFn");function yO(e){return()=>{e.sectionStack.push("aiExternalMcpServerDetailsFn");let t=e.CONSUME(Qd);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{url:"[expression]",bearer_token:"[expression]",connection_type:"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(yO,"aiExternalMcpServerDetailsFn");function _O(e){return()=>{e.sectionStack.push("aiExternalMcpToolListFn");let t=e.CONSUME(Jd);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{url:"[expression]",bearer_token:"[expression]",connection_type:"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(_O,"aiExternalMcpToolListFn");function bO(e){return()=>{e.sectionStack.push("aiExternalMcpToolRunFn");let t=e.CONSUME(Ea);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{url:"[expression]",bearer_token:"[expression]",connection_type:"[expression]",tool:"[expression]",args:"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(bO,"aiExternalMcpToolRunFn");var RO=r(e=>{e.aiAgentRunFn=e.RULE("aiAgentRunFn",SO(e)),e.aiExternalMcpToolListFn=e.RULE("aiExternalMcpToolListFn",_O(e)),e.aiExternalMcpToolRunFn=e.RULE("aiExternalMcpToolRunFn",bO(e)),e.aiExternalMcpServerDetailsFn=e.RULE("aiExternalMcpServerDetailsFn",yO(e))},"register");function kO(e){return()=>{e.sectionStack.push("ai"),e.CONSUME(Wd),e.CONSUME(q),e.OR([{ALT:r(()=>{e.CONSUME(zd),e.CONSUME1(q),e.SUBRULE(e.aiAgentRunFn)},"ALT")},{ALT:r(()=>{e.CONSUME(Hd),e.CONSUME2(q),e.CONSUME(Yd),e.CONSUME3(q),e.OR1([{ALT:r(()=>e.SUBRULE(e.aiExternalMcpServerDetailsFn),"ALT")},{ALT:r(()=>{e.CONSUME(Kd),e.CONSUME4(q),e.OR2([{ALT:r(()=>e.SUBRULE(e.aiExternalMcpToolListFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.aiExternalMcpToolRunFn),"ALT")}])},"ALT")}])},"ALT")}]),e.sectionStack.pop()}}r(kO,"aiFn");function xO(e){return()=>{e.sectionStack.push("apiCallFn");let t=e.CONSUME($d);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME(is),"ALT")},{ALT:r(()=>e.CONSUME(ar),"ALT")}]),e.CONSUME(Ka),e.CONSUME(C),e.OR1([{ALT:r(()=>e.CONSUME($a),"ALT")},{ALT:r(()=>e.CONSUME(Ja),"ALT")},{ALT:r(()=>e.CONSUME(Qa),"ALT")},{ALT:r(()=>e.CONSUME(Xa),"ALT")},{ALT:r(()=>e.CONSUME(Za),"ALT")}]),e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{api_group:"[string]","description?":"[string]","disabled?":"[boolean]","headers?":"[expression]","input?":{"[string]":"[expression]"}}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(xO,"apiCallFn");function AO(e){let t=["code","timeout"],n=["description","disabled"];return()=>{e.sectionStack.push("apiLambdaFn");let o=e.CONSUME(rf);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(AO,"apiLambdaFn");function vO(e){let t=["channel","data","auth_table","auth_id"],n=["description","disabled"];return()=>{e.sectionStack.push("apiRealtimeEventFn");let o=e.CONSUME(ef);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(vO,"apiRealtimeEventFn");function UO(e){let t=["url","method"],n=["description","disabled","params","headers","timeout","ca_certificate","certificate","certificate_pass","private_key"];return()=>{e.sectionStack.push("apiRequestFn");let o=e.CONSUME(Zd);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(UO,"apiRequestFn");function CO(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("apiStreamFn");let o=e.CONSUME(tf);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(CO,"apiStreamFn");var LO=r(e=>{e.apiLambdaFn=e.RULE("apiLambdaFn",AO(e)),e.apiRealtimeEventFn=e.RULE("apiRealtimeEventFn",vO(e)),e.apiRequestFn=e.RULE("apiRequestFn",UO(e)),e.apiStreamFn=e.RULE("apiStreamFn",CO(e)),e.apiCallFn=e.RULE("apiCallFn",xO(e))},"register");function OO(e){return(t={})=>{e.sectionStack.push("api"),e.CONSUME(Xd),e.CONSUME(q),e.OR([{GATE:r(()=>t.allowCallStatements,"GATE"),ALT:r(()=>e.SUBRULE(e.apiCallFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiLambdaFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiRequestFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiRealtimeEventFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiStreamFn),"ALT")}]),e.sectionStack.pop()}}r(OO,"apiFn");function NO(e){return()=>{e.sectionStack.push("arrayEveryFn"),e.CONSUME(lf),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(NO,"arrayEveryFn");function MO(e){return()=>{e.sectionStack.push("arrayFilterCountFn"),e.CONSUME(uf),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(MO,"arrayFilterCountFn");function wO(e){return()=>{e.sectionStack.push("arrayFilterFn"),e.CONSUME(df),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(wO,"arrayFilterFn");function FO(e){return()=>{e.sectionStack.push("arrayFindFn"),e.CONSUME(ff),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(FO,"arrayFindFn");function IO(e){return()=>{e.sectionStack.push("arrayFindIndexFn"),e.CONSUME(pf),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(IO,"arrayFindIndexFn");function PO(e){return()=>{e.sectionStack.push("arrayHasFn"),e.CONSUME(mf),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(PO,"arrayHasFn");function DO(e){return()=>{e.sectionStack.push("arrayMergeFn"),e.CONSUME(hf),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayValueOnly),e.sectionStack.pop()}}r(DO,"arrayMergeFn");function BO(e){return()=>{e.sectionStack.push("arrayNoValueAs"),e.OPTION(()=>{e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),e.OPTION1(()=>e.CONSUME1(h)),e.CONSUME(N)}),e.CONSUME(tr),e.SUBRULE(e.variableOnly),e.sectionStack.pop()}}r(BO,"arrayNoValueAs");function qO(e){return()=>{e.sectionStack.push("arrayPopFn"),e.CONSUME(gf),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayNoValueAs),e.sectionStack.pop()}}r(qO,"arrayPopFn");function GO(e){return()=>{e.sectionStack.push("arrayPushFn"),e.CONSUME(Tf),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayValueOnly),e.sectionStack.pop()}}r(GO,"arrayPushFn");function jO(e){return()=>{e.sectionStack.push("arrayShiftFn"),e.CONSUME(Ef),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayNoValueAs),e.sectionStack.pop()}}r(jO,"arrayShiftFn");function VO(e){return()=>{e.sectionStack.push("arrayUnshiftFn"),e.CONSUME(Sf),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayValueOnly),e.sectionStack.pop()}}r(VO,"arrayUnshiftFn");function WO(e){return()=>{e.sectionStack.push("arrayValueAs");let t=!1;e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.OPTION1(()=>e.CONSUME1(h)),e.CONSUME(N),e.CONSUME(tr),e.SUBRULE(e.assignableVariableAs),e.sectionStack.pop()}}r(WO,"arrayValueAs");function zO(e){return()=>{e.sectionStack.push("arrayValueIfAs"),e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.CONSUME(fa),e.CONSUME1(ye),e.SUBRULE1(e.valueExpression),e.CONSUME1(pe),e.OPTION(()=>{e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),e.OPTION1(()=>e.CONSUME1(h)),e.CONSUME(N)}),e.CONSUME(tr),e.SUBRULE(e.assignableVariableAs),e.sectionStack.pop()}}r(zO,"arrayValueIfAs");function HO(e){return()=>{e.sectionStack.push("arrayValueOnly");let t=!1;e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.OPTION1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(HO,"arrayValueOnly");function YO(e){return t=>{e.sectionStack.push("valueAttrOnly");let n=!1,o=!1,i=!1;e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>{n=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),n||e.addMissingError(t,"{} is missing a stack clause"),e.OPTION1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(YO,"valueAttrOnly");var KO=r(e=>{e.arrayEveryFn=e.RULE("arrayEveryFn",NO(e)),e.arrayFilterCountFn=e.RULE("arrayFilterCountFn",MO(e)),e.arrayFilterFn=e.RULE("arrayFilterFn",wO(e)),e.arrayFindFn=e.RULE("arrayFindFn",FO(e)),e.arrayFindIndexFn=e.RULE("arrayFindIndexFn",IO(e)),e.arrayHasFn=e.RULE("arrayHasFn",PO(e)),e.arrayMergeFn=e.RULE("arrayMergeFn",DO(e)),e.arrayNoValueAs=e.RULE("arrayNoValueAs",BO(e)),e.arrayPopFn=e.RULE("arrayPopFn",qO(e)),e.arrayPushFn=e.RULE("arrayPushFn",GO(e)),e.arrayShiftFn=e.RULE("arrayShiftFn",jO(e)),e.arrayUnshiftFn=e.RULE("arrayUnshiftFn",VO(e)),e.arrayValueAs=e.RULE("arrayValueAs",WO(e)),e.arrayValueIfAs=e.RULE("arrayValueIfAs",zO(e)),e.arrayValueOnly=e.RULE("arrayValueOnly",HO(e)),e.valueAttrOnly=e.RULE("valueAttrOnly",YO(e))},"register");function JO(e){return()=>{e.sectionStack.push("array"),e.CONSUME(cf),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.arrayEveryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFilterCountFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFilterFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFindFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFindIndexFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayHasFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayShiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayPopFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayUnshiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayPushFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayMergeFn),"ALT")}]),e.sectionStack.pop()}}r(JO,"arrayFn");function QO(e){return()=>{e.sectionStack.push("cloudAlgoliaFn"),e.CONSUME(Rf),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudAlgoliaRequestFn),"ALT")}]),e.sectionStack.pop()}}r(QO,"cloudAlgoliaFn");function XO(e){return()=>{e.sectionStack.push("cloudAlgoliaRequestFn");let t=e.CONSUME(ya);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{"description?":"[string]","application_id?":"[expression]","api_key?":"[expression]",url:"[expression]","method?":["POST","GET"],payload:"[expression]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(XO,"cloudAlgoliaRequestFn");function ZO(e){return()=>{e.sectionStack.push("cloudAwsFn"),e.CONSUME(xf),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudAwsS3Fn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAwsOpenSearchFn),"ALT")}]),e.sectionStack.pop()}}r(ZO,"cloudAwsFn");function $O(e){return()=>{e.sectionStack.push("cloudAwsOpenSearchFn"),e.CONSUME(If),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudSearchDocumentFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchRequestFn),"ALT")}]),e.sectionStack.pop()}}r($O,"cloudAwsOpenSearchFn");function eN(e){return()=>{e.sectionStack.push("cloudAwsS3Fn"),e.CONSUME(Mf),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudListDirectoryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSignUrlFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudUploadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudDeleteFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudReadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudGetFileInfoFn),"ALT")}]),e.sectionStack.pop()}}r(eN,"cloudAwsS3Fn");function tN(e){return()=>{e.sectionStack.push("cloudAzureFn"),e.CONSUME(vf),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudStorageFn),"ALT")}]),e.sectionStack.pop()}}r(tN,"cloudAzureFn");function rN(e){return()=>{e.sectionStack.push("cloudDeleteFileFn"),e.CONSUME(Lf),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(rN,"cloudDeleteFileFn");function nN(e){return()=>{e.sectionStack.push("cloudElasticSearchFn"),e.CONSUME(Af),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudSearchDocumentFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchRequestFn),"ALT")}]),e.sectionStack.pop()}}r(nN,"cloudElasticSearchFn");function oN(e){return()=>{e.sectionStack.push("cloudGetFileInfoFn");let t=e.CONSUME(Of);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(oN,"cloudGetFileInfoFn");function iN(e){return()=>{e.sectionStack.push("cloudGoogleFn"),e.CONSUME(kf),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudStorageFn),"ALT")}]),e.sectionStack.pop()}}r(iN,"cloudGoogleFn");function aN(e){return()=>{e.sectionStack.push("cloudListDirectoryFn");let t=e.CONSUME(Nf);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(aN,"cloudListDirectoryFn");function sN(e){return()=>{e.sectionStack.push("cloudReadFileFn");let t=e.CONSUME(Cf);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(sN,"cloudReadFileFn");function cN(e){return()=>{e.sectionStack.push("cloudSearchDocumentFn");let t=e.CONSUME(Pf);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(cN,"cloudSearchDocumentFn");function lN(e){return()=>{e.sectionStack.push("cloudSearchQueryFn");let t=e.CONSUME(Df);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(lN,"cloudSearchQueryFn");function uN(e){return()=>{e.sectionStack.push("cloudSearchRequestFn");let t=e.CONSUME(ya);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(uN,"cloudSearchRequestFn");function dN(e){return()=>{e.sectionStack.push("cloudSignUrlFn");let t=e.CONSUME(wf);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(dN,"cloudSignUrlFn");function fN(e){return()=>{e.sectionStack.push("cloudStorageFn"),e.CONSUME(Uf),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudListDirectoryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSignUrlFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudUploadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudDeleteFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudReadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudGetFileInfoFn),"ALT")}]),e.sectionStack.pop()}}r(fN,"cloudStorageFn");function pN(e){return()=>{e.sectionStack.push("cloudUploadFileFn"),e.CONSUME(Ff),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(pN,"cloudUploadFileFn");var mN=r(e=>{e.cloudAlgoliaFn=e.RULE("cloudAlgoliaFn",QO(e)),e.cloudAlgoliaRequestFn=e.RULE("cloudAlgoliaRequestFn",XO(e)),e.cloudAwsFn=e.RULE("cloudAwsFn",ZO(e)),e.cloudAwsOpenSearchFn=e.RULE("cloudAwsOpenSearchFn",$O(e)),e.cloudAwsS3Fn=e.RULE("cloudAwsS3Fn",eN(e)),e.cloudAzureFn=e.RULE("cloudAzureFn",tN(e)),e.cloudDeleteFileFn=e.RULE("cloudDeleteFileFn",rN(e)),e.cloudElasticSearchFn=e.RULE("cloudElasticSearchFn",nN(e)),e.cloudGetFileInfoFn=e.RULE("cloudGetFileInfoFn",oN(e)),e.cloudGoogleFn=e.RULE("cloudGoogleFn",iN(e)),e.cloudListDirectoryFn=e.RULE("cloudListDirectoryFn",aN(e)),e.cloudReadFileFn=e.RULE("cloudReadFileFn",sN(e)),e.cloudSearchDocumentFn=e.RULE("cloudSearchDocumentFn",cN(e)),e.cloudSearchQueryFn=e.RULE("cloudSearchQueryFn",lN(e)),e.cloudSearchRequestFn=e.RULE("cloudSearchRequestFn",uN(e)),e.cloudSignUrlFn=e.RULE("cloudSignUrlFn",dN(e)),e.cloudStorageFn=e.RULE("cloudStorageFn",fN(e)),e.cloudUploadFileFn=e.RULE("cloudUploadFileFn",pN(e))},"register");function hN(e){return()=>{e.sectionStack.push("cloud"),e.CONSUME(bf),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudGoogleFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAwsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudElasticSearchFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAzureFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAlgoliaFn),"ALT")}]),e.sectionStack.pop()}}r(hN,"cloudFn");function gN(e){return(t={})=>{e.OR([{ALT:r(()=>e.CONSUME(ha),"ALT")},{ALT:r(()=>e.CONSUME(Ad),"ALT")},{ALT:r(()=>e.SUBRULE(e.awaitFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.conditionalFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.forEachFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.forFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.functionRunFn),"ALT")},{GATE:r(()=>t.allowFunctionCalls,"GATE"),ALT:r(()=>e.SUBRULE(e.functionCallFn),"ALT")},{GATE:r(()=>t.allowFunctionCalls,"GATE"),ALT:r(()=>e.SUBRULE(e.taskCallFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.groupFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.returnFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.switchFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.whileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.throwFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.tryCatchFn),"ALT")}]),e.sectionStack.pop()}}r(gN,"controlFn");function TN(e){let t=["ids","timeout"],n=["description","disabled"];return()=>{e.sectionStack.push("awaitFn");let o=e.CONSUME(Ed);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(TN,"awaitFn");function EN(e){return()=>{e.sectionStack.push("conditionalElifFn"),e.CONSUME(md),e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.OPTION(()=>e.SUBRULE(e.nakedStackFn)),e.sectionStack.pop()}}r(EN,"conditionalElifFn");function SN(e){return()=>{e.sectionStack.push("conditionalElseFn"),e.CONSUME(pd),e.SUBRULE(e.nakedStackFn),e.sectionStack.pop()}}r(SN,"conditionalElseFn");function yN(e){return()=>{let t=!1,n=!1,o=!1;e.sectionStack.push("conditionalFn");let i=e.CONSUME(fd);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.disabledFieldAttribute)},"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.conditionalIfFn),e.MANY1(()=>{e.MANY3(()=>e.CONSUME3(h)),e.SUBRULE(e.conditionalElifFn)}),e.OPTION(()=>{e.MANY4(()=>e.CONSUME4(h)),e.SUBRULE(e.conditionalElseFn)})},"ALT")}])}),t||e.addMissingError(i,"{} is missing the if statement"),e.MANY2(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(yN,"conditionalFn");function _N(e){return()=>{e.sectionStack.push("conditionalIfFn"),e.CONSUME(fa),e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.OPTION(()=>e.SUBRULE(e.nakedStackFn)),e.sectionStack.pop()}}r(_N,"conditionalIfFn");function bN(e){return()=>{let t=!1;e.sectionStack.push("forEachFn"),e.CONSUME(gd),e.OR([{ALT:r(()=>{e.CONSUME(q),e.CONSUME(Td)},"ALT")},{ALT:r(()=>{e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.OPTION(()=>{e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR1([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(nn),e.CONSUME(tr),e.SUBRULE(e.assignableVariableAs),e.OPTION1(()=>e.SUBRULE1(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME1(nn),e.CONSUME1(tr),e.SUBRULE(e.assignableVariableAs),e.OPTION2(()=>e.SUBRULE2(e.nakedStackFn))),e.MANY2(()=>e.CONSUME1(h)),e.CONSUME(N)})},"ALT")}]),e.sectionStack.pop()}}r(bN,"forEachFn");function RN(e){return()=>{let t=!1;e.sectionStack.push("forFn"),e.CONSUME(hd),e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.OPTION(()=>{e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(nn),e.CONSUME(tr),e.SUBRULE(e.assignableVariableAs),e.OPTION1(()=>e.SUBRULE1(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME1(nn),e.CONSUME1(tr),e.SUBRULE(e.assignableVariableAs),e.OPTION2(()=>e.SUBRULE2(e.nakedStackFn))),e.MANY2(()=>e.CONSUME1(h)),e.CONSUME(N)}),e.sectionStack.pop()}}r(RN,"forFn");function kN(e){let t=[],n=["input","description","disabled"];return()=>{e.sectionStack.push("functionCallFn"),e.CONSUME(vo),e.CONSUME(q);let o=e.CONSUME(Pp);e.OR([{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME(ar),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}]),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["input"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(kN,"functionCallFn");function xN(e){return()=>{e.sectionStack.push("functionRunFn"),e.CONSUME(vo),e.CONSUME(q);let t=e.CONSUME(Ip);e.OR([{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME(ar),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}]),e.OPTION(()=>{e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{"input?":{"[string]":"[expression]"},"description?":"[string]","disabled?":"[boolean]"}]})}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(xN,"functionRunFn");function AN(e){return()=>{let t=!1;e.sectionStack.push("groupFn"),e.CONSUME(ma),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.SUBRULE(e.stackClause)},"ALT")}])}),t||e.SUBRULE(e.stackClause),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(AN,"groupFn");function vN(e){return()=>{let t=[],n=["description","disabled","error_type","error","payload"];e.sectionStack.push("preconditionFn");let o=e.CONSUME(jh);e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(vN,"preconditionFn");function UN(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("return");let o=e.CONSUME(pa);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(UN,"returnFn");function CN(e){return()=>{e.sectionStack.push("switchCaseFn"),e.CONSUME(bd),e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.OPTION(()=>e.SUBRULE(e.nakedStackFn)),e.OPTION1(()=>e.CONSUME(ha)),e.sectionStack.pop()}}r(CN,"switchCaseFn");function LN(e){return()=>{e.sectionStack.push("switchDefaultFn"),e.CONSUME(Rd),e.SUBRULE(e.nakedStackFn),e.sectionStack.pop()}}r(LN,"switchDefaultFn");function ON(e){return()=>{e.sectionStack.push("switchFn"),e.CONSUME(_d),e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.OPTION(()=>{e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{e.MANY1(()=>{e.MANY3(()=>e.CONSUME3(h)),e.SUBRULE(e.switchCaseFn)})},"ALT")}])}),e.OPTION1(()=>{e.MANY4(()=>e.CONSUME4(h)),e.SUBRULE(e.switchDefaultFn)}),e.MANY2(()=>e.CONSUME1(h)),e.CONSUME(N)}),e.sectionStack.pop()}}r(ON,"switchFn");function NN(e){let t=[],n=["description","disabled"];return()=>{e.sectionStack.push("taskCallFn"),e.CONSUME(rs),e.CONSUME(q);let o=e.CONSUME(Eh);e.OR([{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME(ar),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}]),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(NN,"taskCallFn");function MN(e){let t=["value","name"],n=["description","disabled"];return()=>{e.sectionStack.push("throw");let o=e.CONSUME(xd);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(MN,"throwFn");function wN(e){return()=>{let t=!1,n=!1;e.sectionStack.push("tryCatchFn"),e.CONSUME(Sd),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(nc),e.OPTION(()=>e.SUBRULE(e.nakedStackFn))},"ALT")},{ALT:r(()=>{n=!0,e.CONSUME(oc),e.sectionStack.push("catchFn"),e.OPTION1(()=>e.SUBRULE1(e.nakedStackFn)),e.sectionStack.pop()},"ALT")},{ALT:r(()=>{e.CONSUME(yd),e.OPTION2(()=>e.SUBRULE2(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME(nc),e.SUBRULE(e.nakedStackFn)),n||(e.CONSUME(oc),e.SUBRULE(e.nakedStackFn)),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(wN,"tryCatchFn");function FN(e){return()=>{let t=!1;e.sectionStack.push("whileFn"),e.CONSUME(kd),e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.OPTION(()=>{e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(nn),e.OPTION1(()=>e.SUBRULE(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME(nn),e.SUBRULE(e.nakedStackFn)),e.MANY2(()=>e.CONSUME1(h)),e.CONSUME(N)}),e.sectionStack.pop()}}r(FN,"whileFn");var IN=r(e=>{e.awaitFn=e.RULE("awaitFn",TN(e)),e.conditionalElifFn=e.RULE("conditionalElifFn",EN(e)),e.conditionalElseFn=e.RULE("conditionalElseFn",SN(e)),e.conditionalFn=e.RULE("conditionalFn",yN(e)),e.conditionalIfFn=e.RULE("conditionalIfFn",_N(e)),e.forEachFn=e.RULE("forEachFn",bN(e)),e.forFn=e.RULE("forFn",RN(e)),e.functionRunFn=e.RULE("functionRunFn",xN(e)),e.functionCallFn=e.RULE("functionCallFn",kN(e)),e.taskCallFn=e.RULE("taskCallFn",NN(e)),e.groupFn=e.RULE("groupFn",AN(e)),e.preconditionFn=e.RULE("preconditionFn",vN(e)),e.returnFn=e.RULE("returnFn",UN(e)),e.switchCaseFn=e.RULE("switchCaseFn",CN(e)),e.switchDefaultFn=e.RULE("switchDefaultFn",LN(e)),e.switchFn=e.RULE("switchFn",ON(e)),e.throwFn=e.RULE("throwFn",MN(e)),e.tryCatchFn=e.RULE("tryCatchFn",wN(e)),e.whileFn=e.RULE("whileFn",FN(e))},"register");function PN(e){return()=>{let t=["data"],n=["description","disabled","addon"];e.sectionStack.push("dbAddFn");let o=e.CONSUME(gp);e.OR({DEF:[{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["data"],allowArray:["data","addon"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(PN,"dbAddFn");function DN(e){return()=>{let t=["field_value","field_name","data"],n=["description","disabled","addon"];e.sectionStack.push("dbAddOrEditFn");let o=e.CONSUME(Tp);e.OR({DEF:[{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["data"],allowArray:["data","addon"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(DN,"dbAddOrEditFn");function BN(e){return()=>{let t=["field_value","field_name"],n=["description","disabled"];e.sectionStack.push("dbDelFn");let o=e.CONSUME(Ep);e.OR({DEF:[{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(BN,"dbDelFn");function qN(e){return()=>{let t=["sql","response_type"],n=["description","disabled","arg"];e.sectionStack.push("dbDirectQueryFn");let o=e.CONSUME(ba);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowDuplicates:["arg"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(qN,"dbDirectQueryFn");function GN(e){return()=>{let t=["field_value","field_name","data"],n=["description","disabled","addon"];e.sectionStack.push("dbEditFn");let o=e.CONSUME(Sp);e.OR({DEF:[{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowArray:["addon"],types:{data:"object",description:"string",disabled:"boolean",field_name:"string"}}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(GN,"dbEditFn");function jN(e){return()=>{let t=["code","response_type","connection_string"],n=["description","disabled","arg"];e.sectionStack.push("dbExternalDirectQueryFn");let o=e.CONSUME(ba);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowDuplicates:["arg"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(jN,"dbExternalDirectQueryFn");function VN(e){return()=>{e.sectionStack.push("dbExternalFn"),e.CONSUME(Ap),e.CONSUME(q),e.OR([{ALT:r(()=>e.CONSUME(vp),"ALT")},{ALT:r(()=>e.CONSUME(Up),"ALT")},{ALT:r(()=>e.CONSUME(Lp),"ALT")},{ALT:r(()=>e.CONSUME(Cp),"ALT")}]),e.CONSUME1(q),e.SUBRULE(e.dbExternalDirectQueryFn),e.sectionStack.pop()}}r(VN,"dbExternalFn");function WN(e){return()=>{let t=["field_value","field_name"],n=["description","disabled","addon","output"];e.sectionStack.push("dbGetFn");let o=e.CONSUME(hp);e.OR({DEF:[{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowArray:["addon","output"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(WN,"dbGetFn");function zN(e){return()=>{let t=["field_value","field_name"],n=["description","disabled"];e.sectionStack.push("dbHasFn");let o=e.CONSUME(yp);e.OR({DEF:[{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(zN,"dbHasFn");function HN(e){return()=>{let t=["field_value","field_name","data"],n=["description","disabled","addon"];e.sectionStack.push("dbPatchFn");let o=e.CONSUME(_p);e.OR({DEF:[{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["data"],allowArray:["data","addon"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(HN,"dbPatchFn");function YN(e){return e.requireRules(LW,NW,wW,FW,CW,BW,OW,MW,PW,IW,DW),()=>{e.sectionStack.push("dbQueryFn");let t=e.CONSUME(mp);e.OR([{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}]);let n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1,g=!1,S=!1,x=!1,L=!1;e.OPTION(()=>{e.CONSUME(O),e.MANY(()=>e.CONSUME(h)),e.MANY1(()=>{e.OR1([{GATE:r(()=>!g,"GATE"),ALT:r(()=>{g=!0,e.SUBRULE(e.dbQueryFnEval)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.dbQueryFnReturn)},"ALT")},{GATE:r(()=>!L,"GATE"),ALT:r(()=>{L=!0,e.SUBRULE(e.mockAttribute)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.dbQueryFnAddOn)},"ALT")},{GATE:r(()=>!S,"GATE"),ALT:r(()=>{S=!0,e.SUBRULE(e.dbQueryFnSort)},"ALT")},{GATE:r(()=>!x,"GATE"),ALT:r(()=>{x=!0,e.SUBRULE(e.dbQueryFnOverrideSort)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.dbQueryFnOutput)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.dbQueryFnWhere)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.dbQueryFnAdditionalWhere)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.dbJoinFn)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.dbQueryFnDisabled)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.dbQueryFnDescription)},"ALT")}])}),e.MANY2(()=>e.CONSUME2(h)),e.CONSUME(N)}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(YN,"dbQueryFn");function CW(e){return()=>{e.CONSUME(mm),e.CONSUME(C),e.SUBRULE(e.valueExpression,{ARGS:[{allowQueryExpression:!0,allowOptionalIfNull:!0}]}),e.MANY(()=>e.CONSUME(h))}}r(CW,"dbQueryFnWhere");function LW(e){return()=>{let t=e.CONSUME(Em);e.CONSUME(C),e.SUBRULE(e.schemaFn,{ARGS:[t,{"[string]":{table:"[string]","type?":["inner","left","right"],"where?":"[query]"}}]}),e.MANY(()=>e.CONSUME(h))}}r(LW,"dbJoinFn");function OW(e){let t={"[string]":{name:"[string]",input:{"[string]":"[expression]"},"output?":["[string]"]}};return t["[string]"]["addon?"]=t,()=>{let n=e.CONSUME(_m);e.CONSUME(C),e.SUBRULE(e.schemaFn,{ARGS:[n,t]}),e.MANY2(()=>e.CONSUME2(h))}}r(OW,"dbQueryFnAddOn");function NW(e){return()=>{e.CONSUME(ls),e.CONSUME(C),e.OR([{ALT:r(()=>e.CONSUME(pt),"ALT")},{ALT:r(()=>e.CONSUME(ft),"ALT")}]),e.MANY(()=>e.CONSUME(h))}}r(NW,"dbQueryFnDisabled");function MW(e){return()=>{let t=e.CONSUME(Ac);e.CONSUME(C),e.SUBRULE(e.schemaFn,{ARGS:[t,{"[string]":"[query]"}]}),e.MANY(()=>e.CONSUME(h))}}r(MW,"dbQueryFnEval");function wW(e){return()=>{e.CONSUME(cs),e.CONSUME(C),e.CONSUME(M),e.MANY(()=>e.CONSUME(h))}}r(wW,"dbQueryFnDescription");function FW(e){return()=>{let t=e.CONSUME(es);e.CONSUME(C),e.SUBRULE(e.schemaFn,{ARGS:[t,["[string]"]]}),e.MANY(()=>e.CONSUME(h))}}r(FW,"dbQueryFnOutput");function IW(e){return()=>{let t=e.CONSUME(gm);e.CONSUME(C),e.SUBRULE(e.schemaFn,{ARGS:[t,{"[string]":["asc","desc","rand"]}]}),e.MANY(()=>e.CONSUME(h))}}r(IW,"dbQueryFnSort");function PW(e){return()=>{e.CONSUME(Tm),e.CONSUME(C),e.SUBRULE(e.valueExpression),e.MANY(()=>e.CONSUME(h))}}r(PW,"dbQueryFnOverrideSort");function DW(e){return()=>{e.CONSUME(hm),e.CONSUME(C),e.SUBRULE(e.valueExpression,{ARGS:[{allowQueryExpression:!0,allowOptionalIfNull:!0}]}),e.MANY(()=>e.CONSUME(h))}}r(DW,"dbQueryFnAdditionalWhere");function BW(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1;e.CONSUME(pa),e.CONSUME(C),e.CONSUME(O),e.MANY(()=>e.CONSUME(h));let s=!1,c=null;e.MANY1(()=>{s&&e.addMissingError(null,"Expected a separator between attributes"),e.OR({IGNORE_AMBIGUITIES:!0,DEF:[{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let u=e.CONSUME(_g);e.CONSUME(Ne),e.SUBRULE(e.schemaFn,{ARGS:[u,["list","stream","exists","count","single","aggregate"]]}),c=_e(e.LA(0))},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0;let u=e.CONSUME1(Sm);e.CONSUME1(Ne),e.SUBRULE1(e.schemaFn,{ARGS:[u,{"page?":"[expression]","per_page?":"[expression]","offset?":"[expression]","totals?":"[boolean]","metadata?":"[boolean]"}]})},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0;let u=e.CONSUME(ym);e.CONSUME2(Ne),e.SUBRULE2(e.schemaFn,{ARGS:[u,["yes","no"]]})},"ALT")},{GATE:r(()=>!i&&c&&c==="aggregate","GATE"),ALT:r(()=>{i=!0;let u=e.CONSUME(ma);e.CONSUME3(Ne),e.SUBRULE3(e.schemaFn,{ARGS:[u,{"[string]":"[query]"}]})},"ALT")},{GATE:r(()=>!a&&c&&c==="aggregate","GATE"),ALT:r(()=>{a=!0;let u=e.CONSUME(Ac);e.CONSUME4(Ne),e.SUBRULE4(e.schemaFn,{ARGS:[u,{"[string]":"[expression]"}]})},"ALT")}]}),s=!0,e.OPTION(()=>{s=!1,e.CONSUME1(ze)}),e.MANY9(()=>{s=!1,e.CONSUME1(h)})}),e.CONSUME(N),e.MANY2(()=>e.CONSUME3(h))}}r(BW,"dbQueryFnReturn");function KN(e){return()=>{let t=[],n=["description","disabled","path"];e.sectionStack.push("dbSchemaFn");let o=e.CONSUME(bp);e.OR([{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}]),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(KN,"dbSchemaFn");function JN(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("dbSetDatasourceFn");let o=e.CONSUME(xp);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(JN,"dbSetDatasourceFn");function QN(e){return()=>{let t=!1;e.sectionStack.push("dbTransactionFn"),e.CONSUME(Rp),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.SUBRULE(e.stackClause)},"ALT")}])}),t||e.SUBRULE(e.stackClause),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(QN,"dbTransactionFn");function XN(e){return()=>{let t=[],n=["description","disabled","reset"];e.sectionStack.push("dbTruncateFn");let o=e.CONSUME(kp);e.OR({DEF:[{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME1(M),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(XN,"dbTruncateFn");var ZN=r(e=>{e.dbAddFn=e.RULE("dbAddFn",PN(e)),e.dbDelFn=e.RULE("dbDelFn",BN(e)),e.dbDirectQueryFn=e.RULE("dbDirectQueryFn",qN(e)),e.dbEditFn=e.RULE("dbEditFn",GN(e)),e.dbExternalDirectQueryFn=e.RULE("dbExternalDirectQueryFn",jN(e)),e.dbExternalFn=e.RULE("dbExternalFn",VN(e)),e.dbGetFn=e.RULE("dbGetFn",WN(e)),e.dbHasFn=e.RULE("dbHasFn",zN(e)),e.dbPatchFn=e.RULE("dbPatchFn",HN(e)),e.dbQueryFn=e.RULE("dbQueryFn",YN(e)),e.dbSchemaFn=e.RULE("dbSchemaFn",KN(e)),e.dbSetDatasourceFn=e.RULE("dbSetDatasourceFn",JN(e)),e.dbTransactionFn=e.RULE("dbTransactionFn",QN(e)),e.dbTruncateFn=e.RULE("dbTruncateFn",XN(e)),e.dbAddOrEditFn=e.RULE("dbAddOrEditFn",DN(e))},"register");function $N(e){return()=>{e.sectionStack.push("db"),e.CONSUME(pp),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.dbExternalFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbGetFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbHasFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbEditFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbDelFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbAddFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbDirectQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbSetDatasourceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbSchemaFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbTruncateFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbTransactionFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbPatchFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbAddOrEditFn),"ALT")}]),e.sectionStack.pop()}}r($N,"dbFn");function eM(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("debugLog");let o=e.CONSUME(Mp);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(eM,"debugLogFn");function tM(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("debugStop");let o=e.CONSUME(Np);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(tM,"debugStopFn");var rM=r(e=>{e.debugLogFn=e.RULE("debugLogFn",eM(e)),e.debugStopFn=e.RULE("debugStopFn",tM(e))},"register");function nM(e){return()=>{e.sectionStack.push("debug"),e.CONSUME(Op),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.debugLogFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.debugStopFn),"ALT")}]),e.sectionStack.pop()}}r(nM,"debugFn");function oM(e){let t=["min","max"],n=[];return()=>{e.sectionStack.push("unitExpectToBeWithinFn");let o=e.CONSUME(ja);e.CONSUME(ye),e.CONSUME(Mo),e.MANY(()=>{e.CONSUME(q),e.CONSUME(y)}),e.CONSUME(pe),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(oM,"unitExpectToBeWithinFn");function iM(e){let t=[],n=["exception"];return()=>{e.sectionStack.push("unitExpectToThrowFn");let o=e.CONSUME(Va);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(iM,"unitExpectToThrowFn");function aM(e){let t=["value"],n=[];return()=>{e.sectionStack.push("unitExpectWithArgumentsFn");let o=e.OR([{ALT:r(()=>e.CONSUME(Ba),"ALT")},{ALT:r(()=>e.CONSUME(wa),"ALT")},{ALT:r(()=>e.CONSUME(Fa),"ALT")},{ALT:r(()=>e.CONSUME(Ia),"ALT")},{ALT:r(()=>e.CONSUME(Pa),"ALT")},{ALT:r(()=>e.CONSUME(Da),"ALT")},{ALT:r(()=>e.CONSUME(qa),"ALT")},{ALT:r(()=>e.CONSUME(Ga),"ALT")}]);e.CONSUME(ye),e.CONSUME(Mo),e.MANY(()=>{e.CONSUME(q),e.CONSUME(y)}),e.CONSUME(pe),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(aM,"unitExpectWithArgumentsFn");function sM(e){return()=>{e.sectionStack.push("unitExpectWithoutArgumentsFn"),e.OR([{ALT:r(()=>e.CONSUME(xa),"ALT")},{ALT:r(()=>e.CONSUME(Aa),"ALT")},{ALT:r(()=>e.CONSUME(va),"ALT")},{ALT:r(()=>e.CONSUME(Ua),"ALT")},{ALT:r(()=>e.CONSUME(Ca),"ALT")},{ALT:r(()=>e.CONSUME(La),"ALT")},{ALT:r(()=>e.CONSUME(Oa),"ALT")},{ALT:r(()=>e.CONSUME(Na),"ALT")},{ALT:r(()=>e.CONSUME(Ma),"ALT")}]),e.CONSUME(ye),e.CONSUME(Mo),e.MANY(()=>{e.CONSUME(q),e.CONSUME(y)}),e.CONSUME(pe),e.sectionStack.pop()}}r(sM,"unitExpectWithoutArgumentsFn");function cM(e){let t=["min","max"],n=["description","disabled"];return()=>{e.sectionStack.push("workflowExpectToBeWithinFn");let o=e.CONSUME(ja);e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(cM,"workflowExpectToBeWithinFn");function lM(e){let t=[],n=["value"];return()=>{e.sectionStack.push("workflowExpectToThrowFn");let o=e.CONSUME(Va);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(lM,"workflowExpectToThrowFn");function uM(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("workflowExpectWithArgumentsFn");let o=e.OR([{ALT:r(()=>e.CONSUME(Ba),"ALT")},{ALT:r(()=>e.CONSUME(wa),"ALT")},{ALT:r(()=>e.CONSUME(Fa),"ALT")},{ALT:r(()=>e.CONSUME(Ia),"ALT")},{ALT:r(()=>e.CONSUME(Pa),"ALT")},{ALT:r(()=>e.CONSUME(Da),"ALT")},{ALT:r(()=>e.CONSUME(qa),"ALT")},{ALT:r(()=>e.CONSUME(Ga),"ALT")}]);e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(uM,"workflowExpectWithArgumentsFn");function dM(e){return()=>{e.sectionStack.push("workflowExpectWithoutArgumentsFn");let t=e.OR([{ALT:r(()=>e.CONSUME(xa),"ALT")},{ALT:r(()=>e.CONSUME(Aa),"ALT")},{ALT:r(()=>e.CONSUME(va),"ALT")},{ALT:r(()=>e.CONSUME(Ua),"ALT")},{ALT:r(()=>e.CONSUME(Ca),"ALT")},{ALT:r(()=>e.CONSUME(La),"ALT")},{ALT:r(()=>e.CONSUME(Oa),"ALT")},{ALT:r(()=>e.CONSUME(Na),"ALT")},{ALT:r(()=>e.CONSUME(Ma),"ALT")}]);e.CONSUME(ye),e.SUBRULE(e.valueExpression),e.CONSUME(pe),e.SUBRULE(e.functionAttrReq,{ARGS:[t,[],["description","disabled"]]}),e.sectionStack.pop()}}r(dM,"workflowExpectWithoutArgumentsFn");var fM=r(e=>{e.unitExpectWithArgumentsFn=e.RULE("unitExpectWithArgumentsFn",aM(e)),e.unitExpectWithoutArgumentsFn=e.RULE("unitExpectWithoutArgumentsFn",sM(e)),e.unitExpectToThrowFn=e.RULE("unitExpectToThrowFn",iM(e)),e.unitExpectToBeWithinFn=e.RULE("unitExpectToBeWithinFn",oM(e)),e.workflowExpectWithArgumentsFn=e.RULE("workflowExpectWithArgumentsFn",uM(e)),e.workflowExpectWithoutArgumentsFn=e.RULE("workflowExpectWithoutArgumentsFn",dM(e)),e.workflowExpectToThrowFn=e.RULE("workflowExpectToThrowFn",lM(e)),e.workflowExpectToBeWithinFn=e.RULE("workflowExpectToBeWithinFn",cM(e))},"register");function pM(e){return()=>{let t=!1;e.sectionStack.push("allMathFn"),e.OR([{ALT:r(()=>e.CONSUME(Gp),"ALT")},{ALT:r(()=>e.CONSUME(jp),"ALT")},{ALT:r(()=>e.CONSUME(Vp),"ALT")},{ALT:r(()=>e.CONSUME(Wp),"ALT")},{ALT:r(()=>e.CONSUME(zp),"ALT")},{ALT:r(()=>{e.CONSUME(Hp),e.CONSUME(q),e.OR1([{ALT:r(()=>e.CONSUME(Yp),"ALT")},{ALT:r(()=>e.CONSUME(Kp),"ALT")},{ALT:r(()=>e.CONSUME(Jp),"ALT")}])},"ALT")}]),e.SUBRULE(e.assignableVariableProperty),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(pM,"allMathFn");var mM=r(e=>{e.allMathFn=e.RULE("allMathFn",pM(e))},"register");function hM(e){return()=>{e.sectionStack.push("math"),e.CONSUME(qp),e.CONSUME(q),e.SUBRULE(e.allMathFn),e.sectionStack.pop()}}r(hM,"mathFn");function gM(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("objectEntriesFn");let o=e.CONSUME(um);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(gM,"objectEntriesFn");function TM(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("objectKeysFn");let o=e.CONSUME(dm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(TM,"objectKeysFn");function EM(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("objectValuesFn");let o=e.CONSUME(fm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(EM,"objectValuesFn");var SM=r(e=>{e.objectEntriesFn=e.RULE("objectEntriesFn",gM(e)),e.objectKeysFn=e.RULE("objectKeysFn",TM(e)),e.objectValuesFn=e.RULE("objectValuesFn",EM(e))},"register");function yM(e){return()=>{e.sectionStack.push("object"),e.CONSUME(lm),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.objectEntriesFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.objectKeysFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.objectValuesFn),"ALT")}]),e.sectionStack.pop()}}r(yM,"objectFn");function _M(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisCountFn");let o=e.CONSUME(Am);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(_M,"redisCountFn");function bM(e){return()=>{let t=["key","by"],n=["description","disabled"];e.sectionStack.push("redisDecrFn");let o=e.CONSUME(vm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(bM,"redisDecrFn");function RM(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisDelFn");let o=e.CONSUME(Um);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(RM,"redisDelFn");function kM(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisGetFn");let o=e.CONSUME(Cm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(kM,"redisGetFn");function xM(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisHasFn");let o=e.CONSUME(Lm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(xM,"redisHasFn");function AM(e){return()=>{let t=["package_key","key","by"],n=["description","disabled"];e.sectionStack.push("redisIncrFn");let o=e.CONSUME(Om);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(AM,"redisIncrFn");function vM(e){return()=>{let t=["search"],n=["description","disabled"];e.sectionStack.push("redisKeysFn");let o=e.CONSUME(Nm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(vM,"redisKeysFn");function UM(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisPopFn");let o=e.CONSUME(Mm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(UM,"redisPopFn");function CM(e){return()=>{let t=["key","value","package_key"],n=["description","disabled"];e.sectionStack.push("redisPushFn");let o=e.CONSUME(wm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(CM,"redisPushFn");function LM(e){return()=>{let t=["key","start","stop"],n=["description","disabled"];e.sectionStack.push("redisRangeFn");let o=e.CONSUME(Fm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(LM,"redisRangeFn");function OM(e){return()=>{let t=["key","max","ttl","error"],n=["description","disabled"];e.sectionStack.push("redisRateLimitFn");let o=e.CONSUME(Im);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(OM,"redisRateLimitFn");function NM(e){return()=>{let t=["key","value","count"],n=["description","disabled"];e.sectionStack.push("redisRemoveFn");let o=e.CONSUME(Pm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(NM,"redisRemoveFn");function MM(e){return()=>{let t=["key","data","ttl"],n=["description","disabled"];e.sectionStack.push("redisSetFn");let o=e.CONSUME(Dm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(MM,"redisSetFn");function wM(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisShiftFn");let o=e.CONSUME(Bm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(wM,"redisShiftFn");function FM(e){return()=>{let t=["key","value"],n=["description","disabled"];e.sectionStack.push("redisUnshiftFn");let o=e.CONSUME(qm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(FM,"redisUnshiftFn");var IM=r(e=>{e.redisCountFn=e.RULE("redisCountFn",_M(e)),e.redisDecrFn=e.RULE("redisDecrFn",bM(e)),e.redisDelFn=e.RULE("redisDelFn",RM(e)),e.redisGetFn=e.RULE("redisGetFn",kM(e)),e.redisHasFn=e.RULE("redisHasFn",xM(e)),e.redisIncrFn=e.RULE("redisIncrFn",AM(e)),e.redisKeysFn=e.RULE("redisKeysFn",vM(e)),e.redisPopFn=e.RULE("redisPopFn",UM(e)),e.redisPushFn=e.RULE("redisPushFn",CM(e)),e.redisRangeFn=e.RULE("redisRangeFn",LM(e)),e.redisRateLimitFn=e.RULE("redisRateLimitFn",OM(e)),e.redisRemoveFn=e.RULE("redisRemoveFn",NM(e)),e.redisSetFn=e.RULE("redisSetFn",MM(e)),e.redisShiftFn=e.RULE("redisShiftFn",wM(e)),e.redisUnshiftFn=e.RULE("redisUnshiftFn",FM(e))},"register");function PM(e){return()=>{e.sectionStack.push("redis"),e.CONSUME(xm),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.redisDelFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisSetFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisGetFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisHasFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisIncrFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisDecrFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisKeysFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisPushFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisUnshiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisPopFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisShiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisRemoveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisCountFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisRangeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisRateLimitFn),"ALT")}]),e.sectionStack.pop()}}r(PM,"redisFn");function DM(e){return(t,n)=>{let o=!1;e.CONSUME(yt),e.MANY(()=>{e.MANY1(()=>{o=!1,e.CONSUME(h)}),o&&e.addInvalidValueError("Expected a comma, a new line or closing bracket"),e.SUBRULE(e.schemaFn,{ARGS:[t,Ct(n)]}),o=!0,e.MANY2(()=>{o=!1,e.CONSUME1(h)}),e.OPTION(()=>(o=!1,e.CONSUME1(ze)))}),e.CONSUME(_t)}}r(DM,"schemaParseArrayFn");function PS(e){return typeof e!="object"||!Array.isArray(e)?!1:e.length==1}r(PS,"schemaExpectArray");function an(e){return!e||typeof e!="string"?!1:e.endsWith("?")}r(an,"isOptionalAttribute");function Lr(e){return!e||typeof e!="string"?!1:(an(e)&&(e=e.slice(0,-1)),e.startsWith("[")&&e.endsWith("]"))}r(Lr,"isSchemaGenericType");function BM(e){return Lr(e)?an(e)?e.slice(1,-2):e.slice(1,-1):null}r(BM,"getSchemaGenericTypeName");function Bo(e,t){if(Lr(e)){let n=an(e)?e.slice(1,-2):e.slice(1,-1);return t.includes(n)}return!1}r(Bo,"schemaExpectOneOf");function qM(e){return(t,n,o={})=>{let i=null,a=e.OR([{ALT:r(()=>(i="string",e.CONSUME(M)),"ALT")},{ALT:r(()=>(i="string",e.CONSUME(nr)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(it)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(Yt)),"ALT")},{ALT:r(()=>(i="boolean",e.CONSUME(ft)),"ALT")},{ALT:r(()=>(i="boolean",e.CONSUME(pt)),"ALT")},{ALT:r(()=>(i="null",e.CONSUME(Po)),"ALT")},{IGNORE_AMBIGUITIES:!0,ALT:r(()=>(i="string",e.CONSUME(y)),"ALT")}]);o.value=a,e.ACTION(()=>{GM(i,a.image,n)||e.addExpectedValueError(t,n)})}}r(qM,"schemaParseConstantFn");function GM(e,t,n){let o=n!==null?n.toString():n;if(Y(n))return en(n,i=>GM(e,t,i));switch(e){case"string":return(t.startsWith('"')||t.startsWith("'"))&&(t=t.slice(1,-1)),t===o;case"number":case"boolean":return t===o;case"null":return o===null;default:throw new Error(`schemaParseConstantFn called with non-constant attribute: ${n}`)}}r(GM,"matchValueToSchema");function DS(e){return Lr(e)?!1:typeof e=="string"||typeof e=="number"||typeof e=="boolean"||e===null}r(DS,"schemaExpectConstant");function jM(e){return(t,n,o={})=>{let[i,a]=QE(n,Lr);e.ACTION(()=>{if(a.length>0&&i.length>0)throw new Error("schemaParseEnumFn does not support mixing constant and immutable types in the same enum, received: "+JSON.stringify(n))}),e.OR({IGNORE_AMBIGUITIES:!0,DEF:[{GATE:r(()=>a.length>0,"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseConstantFn,{ARGS:[t,a,o]}),"ALT")},{GATE:r(()=>i.length>0,"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseImmutableFn,{ARGS:[t,i,o]}),"ALT")}]})}}r(jM,"schemaParseEnumFn");function BS(e){return!!(Y(e)&&e.length>1)}r(BS,"schemaExpectEnum");function VM(e){return(t,n,o={})=>{let i=!1,a=null,s=Ae(n),c=[...s],u=[];if(e.ACTION(()=>{if(s.length>1&&en(s,p=>Lr(p)))throw new Error("schemaParseObjectFn supports only one generic type when multiple keys are defined")}),e.CONSUME(O),e.MANY(()=>{e.MANY1(()=>{i=!1,e.CONSUME(h)}),i&&e.addInvalidValueError(a,"Expected a comma, a new line or closing bracket");let p,g=e.OR([{ALT:r(()=>{p=e.CONSUME(y);let L=[p];return e.MANY3(()=>{L.push(e.CONSUME(q)),e.CONSUME1(y)}),L.map(P=>P.image).join(".")},"ALT")},{ALT:r(()=>e.CONSUME(M).image.slice(1,-1),"ALT")}]);u.includes(g)?e.addInvalidValueError(p,`Duplicate key '${g}' found`):(u.push(g),o[g]={key:p,value:null});let S=qS(g,s);S||e.addInvalidValueError(p,`The key '${g}' is not valid in this context`),c.splice(c.indexOf(S),1),e.CONSUME(Ne);let x=Zo(n,S,null);e.SUBRULE(e.schemaFn,{ARGS:[p,x,o[g]]}),i=!0,e.MANY2(()=>{i=!1,e.CONSUME1(h)}),e.OPTION(()=>{i=!1,e.CONSUME1(ze)})}),e.CONSUME(N),c.length){let p=c.filter(g=>!an(g));p.length>1?e.addInvalidValueError(a||t,`The following required keys are missing: ${p.join(", ")}`):p.length===1&&e.addInvalidValueError(a||t,`Missing required key '${p[0]}'`)}return{foo:"foo-bar"}}}r(VM,"schemaParseObjectFn");var qS=r((e,t)=>{for(let n of t)if(Lr(n))switch(BM(n)){case"string":if(typeof e=="string")return n;break;case"number":if(!isNaN(Number(e)))return n;break;case"boolean":if(e==="true"||e==="false")return n;break}else{if(an(n)&&e===n.slice(0,-1))return n;if(e===n)return n}return!1},"keyMatchRequirements");function GS(e){return lu(e)}r(GS,"schemaExpectObject");var qW=r(e=>Bo(e,["string","number","boolean","timestamp"])?Y(e)?`Expected one of the following types:  ${e.join(", ")}`:`Expected a ${e}`:DS(e)?Y(e)?`Expected one of the following constants: ${e.join(", ")}`:`Expected a ${e}`:PS(e)?`Expected an array of ${e[0]}`:GS(e)?"Expected an object {}":BS(e)?`Expected one of the following enum values: ${e.join(", ")}`:Bo(e,["mock"])?"Expected a mock":Bo(e,["expression"])?"Expected an expression":Bo(e,["query"])?"Expected a database query expression":`Invalid schema: received ${JSON.stringify(e)}`,"getErrorMessageForSchema");function WM(e){return(t,n,o={})=>{e.sectionStack.push("schema"),e.OR({IGNORE_AMBIGUITIES:!0,ERR_MSG:qW(n),DEF:[{GATE:r(()=>Bo(n,["string","number","boolean","timestamp"],o),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseImmutableFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>DS(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseConstantFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>PS(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseArrayFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>GS(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>BS(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseEnumFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>Bo(n,["expression","query"]),"GATE"),ALT:r(()=>{let i=Bo(n,["query"]);e.SUBRULE(e.valueExpression,{ARGS:[{allowQueryExpression:i}]})},"ALT")}]}),e.sectionStack.pop()}}r(WM,"schemaFn");function zM(e){return e.requireRules(GW),(t,n,o={})=>{let i=Ae(n).every(a=>an(a));e.OR([{GATE:r(()=>i,"GATE"),ALT:r(()=>{e.OPTION(()=>e.SUBRULE(e._schemaParseAttributeFn,{ARGS:[t,n,o]}))},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE1(e._schemaParseAttributeFn,{ARGS:[t,n,o]}),"ALT")}])}}r(zM,"schemaParseAttributeFn");function GW(e){return(t,n,o={})=>{let i=!1,a=null,s=Ae(n),c=[...s],u=[];if(e.ACTION(()=>{if(s.length>1&&en(s,p=>Lr(p)))throw new Error("schemaParseAttributeFn supports only one generic type when multiple keys are defined")}),e.CONSUME(O),e.MANY(()=>{e.MANY1(()=>{i=!1,e.CONSUME(h)}),i&&e.addInvalidValueError(a,"Expected a comma, a new line or closing bracket");let p,g=e.OR([{ALT:r(()=>(p=e.CONSUME1(y),p.image),"ALT")},{ALT:r(()=>e.CONSUME1(M).image.slice(1,-1),"ALT")}]);g!=="mock"&&u.includes(g)?e.addInvalidValueError(p,`Duplicate key '${g}' found`):(u.push(g),o[g]={key:p,value:null});let S=qS(g,s);S||e.addInvalidValueError(p,`The key '${g}' is not valid in this context`),c.splice(c.indexOf(S),1),e.CONSUME(C);let x=Zo(n,S,null);e.SUBRULE(e.schemaFn,{ARGS:[p,x,o[g]]}),i=!0,e.MANY2(()=>{i=!1,e.CONSUME1(h)}),e.OPTION(()=>{i=!1,e.CONSUME1(ze)})}),e.CONSUME(N),c.length){let p=c.filter(g=>!an(g));p.length>1?e.addInvalidValueError(a||t,`The following required attributes are missing: ${p.join(", ")}`):p.length===1&&e.addInvalidValueError(a||t,`Missing required attribute '${p[0]}'`)}}}r(GW,"_schemaParseAttributeFn");function YM(e){return(t,n,o={})=>{let i,a=e.OR({DEF:[{ALT:r(()=>(i="timestamp",e.CONSUME(Bp)),"ALT")},{ALT:r(()=>(i="string",e.CONSUME(M)),"ALT")},{ALT:r(()=>(i="string",e.CONSUME(Uo)),"ALT")},{ALT:r(()=>(i="string",e.CONSUME(nr)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(Yt)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(it)),"ALT")},{ALT:r(()=>{i="boolean",e.SUBRULE(e.booleanValue)},"ALT")}]});o.value=a,e.ACTION(()=>{let s=Y(n),c=s?n.map(HM):HM(n);if(s){if(!qt(c))throw new Error(`schemaParseImmutableFn called with invalid enum attribute: ${n}`);c.includes(i)||e.addExpectedValueTypeError(t,c.join(" or "))}else{if(!c)throw new Error(`schemaParseImmutableFn called with invalid attribute: ${n}`);i!==c&&e.addExpectedValueTypeError(t,c)}})}}r(YM,"schemaParseImmutableFn");function HM(e){let t=["string","number","boolean","timestamp"];if(Lr(e)){let n=an(e)?e.slice(1,-2):e.slice(1,-1);if(t.includes(n))return n}return null}r(HM,"getImmutableAttributeType");var KM=r(e=>{e.schemaFn=e.RULE("schemaFn",WM(e)),e.schemaParseImmutableFn=e.RULE("schemaParseImmutableFn",YM(e)),e.schemaParseEnumFn=e.RULE("schemaParseEnumFn",jM(e)),e.schemaParseConstantFn=e.RULE("schemaParseConstantFn",qM(e)),e.schemaParseArrayFn=e.RULE("schemaParseArrayFn",DM(e)),e.schemaParseObjectFn=e.RULE("schemaParseObjectFn",VM(e)),e.schemaParseAttributeFn=e.RULE("schemaParseAttributeFn",zM(e))},"register");function JM(e){return()=>{e.sectionStack.push("securityCheckPasswordFn");let t=e.CONSUME(jm);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(JM,"securityCheckPasswordFn");function QM(e){return()=>{e.sectionStack.push("securityCreateAuthTokenFn");let t=e.CONSUME(zm);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(QM,"securityCreateAuthTokenFn");function XM(e){let t=["curve","format"],n=["description","disabled"];return()=>{e.sectionStack.push("securityCreateCurveKeyFn");let o=e.CONSUME(Hm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(XM,"securityCreateCurveKeyFn");function ZM(e){let t=["character_count","require_lowercase","require_uppercase","require_digit","require_symbol","symbol_whitelist"],n=["description","disabled"];return()=>{e.sectionStack.push("securityCreatePasswordFn");let o=e.CONSUME(Vm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(ZM,"securityCreatePasswordFn");function $M(e){let t=["bits","format"],n=["description","disabled"];return()=>{e.sectionStack.push("securityCreateRsaKeyFn");let o=e.CONSUME(Ym);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r($M,"securityCreateRsaKeyFn");function ew(e){return()=>{e.sectionStack.push("securityCreateSecretKeyFn");let t=e.CONSUME(Km);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(ew,"securityCreateSecretKeyFn");function tw(e){return()=>{e.sectionStack.push("securityCreateUuidFn");let t=e.CONSUME(Wm);e.OPTION(()=>{e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N)}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(tw,"securityCreateUuidFn");function rw(e){return()=>{e.sectionStack.push("securityDecryptFn");let t=e.CONSUME(Jm);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(rw,"securityDecryptFn");function nw(e){return()=>{e.sectionStack.push("securityEncryptFn");let t=e.CONSUME(Qm);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(nw,"securityEncryptFn");function ow(e){return()=>{e.sectionStack.push("securityJweDecodeFn");let t=e.CONSUME(Xm);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(ow,"securityJweDecodeFn");function iw(e){return()=>{e.sectionStack.push("securityJweEncodeFn");let t=e.CONSUME(Zm);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(iw,"securityJweEncodeFn");function aw(e){return()=>{e.sectionStack.push("securityJwsDecodeFn");let t=e.CONSUME($m);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(aw,"securityJwsDecodeFn");function sw(e){return()=>{e.sectionStack.push("securityJwsEncodeFn");let t=e.CONSUME(eh);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(sw,"securityJwsEncodeFn");function cw(e){return()=>{e.sectionStack.push("securityRandomBytesFn");let t=e.CONSUME(th);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(cw,"securityRandomBytesFn");function lw(e){return()=>{e.sectionStack.push("securityRandomNumberFn");let t=e.CONSUME(rh);e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.CONSUME1(y),e.CONSUME(C),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(lw,"securityRandomNumberFn");var uw=r(e=>{e.securityCheckPasswordFn=e.RULE("securityCheckPasswordFn",JM(e)),e.securityCreateAuthTokenFn=e.RULE("securityCreateAuthTokenFn",QM(e)),e.securityCreateCurveKeyFn=e.RULE("securityCreateCurveKeyFn",XM(e)),e.securityCreatePasswordFn=e.RULE("securityCreatePasswordFn",ZM(e)),e.securityCreateRsaKeyFn=e.RULE("securityCreateRsaKeyFn",$M(e)),e.securityCreateSecretKeyFn=e.RULE("securityCreateSecretKeyFn",ew(e)),e.securityCreateUuidFn=e.RULE("securityCreateUuidFn",tw(e)),e.securityDecryptFn=e.RULE("securityDecryptFn",rw(e)),e.securityEncryptFn=e.RULE("securityEncryptFn",nw(e)),e.securityJweDecodeFn=e.RULE("securityJweDecodeFn",ow(e)),e.securityJweEncodeFn=e.RULE("securityJweEncodeFn",iw(e)),e.securityJwsDecodeFn=e.RULE("securityJwsDecodeFn",aw(e)),e.securityJwsEncodeFn=e.RULE("securityJwsEncodeFn",sw(e)),e.securityRandomBytesFn=e.RULE("securityRandomBytesFn",cw(e)),e.securityRandomNumberFn=e.RULE("securityRandomNumberFn",lw(e))},"register");function dw(e){return()=>{e.sectionStack.push("security"),e.CONSUME(Gm),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.securityCheckPasswordFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateAuthTokenFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateCurveKeyFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreatePasswordFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateRsaKeyFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateSecretKeyFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateUuidFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityDecryptFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityEncryptFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJweDecodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJweEncodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJwsDecodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJwsEncodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityRandomBytesFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityRandomNumberFn),"ALT")}]),e.sectionStack.pop()}}r(dw,"securityFn");function fw(e){return()=>{let t=["value","filename","access"],n=["description","disabled"];e.sectionStack.push("storageCreateAttachmentFn");let o=e.CONSUME(ih);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(fw,"storageCreateAttachmentFn");function pw(e){return()=>{let t=["filename","filedata"],n=["description","disabled"];e.sectionStack.push("storageCreateFileResourceFn");let o=e.CONSUME(sh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(pw,"storageCreateFileResourceFn");function mw(e){return()=>{let t=["value","filename","access"],n=["description","disabled"];e.sectionStack.push("storageCreateImageFn");let o=e.CONSUME(oh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(mw,"storageCreateImageFn");function hw(e){return()=>{let t=["pathname"],n=["description","disabled"];e.sectionStack.push("storageDeleteFileFn");let o=e.CONSUME(ch);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(hw,"storageDeleteFileFn");function gw(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("storageReadFileResourceFn");let o=e.CONSUME(ah);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(gw,"storageReadFileResourceFn");function Tw(e){return()=>{let t=["pathname","ttl"],n=["description","disabled"];e.sectionStack.push("storageSignPrivateUrlFn");let o=e.CONSUME(lh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Tw,"storageSignPrivateUrlFn");var Ew=r(e=>{e.storageCreateAttachmentFn=e.RULE("storageCreateAttachmentFn",fw(e)),e.storageCreateFileResourceFn=e.RULE("storageCreateFileResourceFn",pw(e)),e.storageCreateImageFn=e.RULE("storageCreateImageFn",mw(e)),e.storageDeleteFileFn=e.RULE("storageDeleteFileFn",hw(e)),e.storageReadFileResourceFn=e.RULE("storageReadFileResourceFn",gw(e)),e.storageSignPrivateUrlFn=e.RULE("storageSignPrivateUrlFn",Tw(e))},"register");function Sw(e){return()=>{e.sectionStack.push("storage"),e.CONSUME(nh),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.storageCreateAttachmentFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageCreateFileResourceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageCreateImageFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageDeleteFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageReadFileResourceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageSignPrivateUrlFn),"ALT")}]),e.sectionStack.pop()}}r(Sw,"storageFn");function yw(e){let t=["value","separator","enclosure","escape_char"],n=["description","disabled"];return()=>{e.sectionStack.push("streamFromCsv");let o=e.CONSUME(dh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(yw,"streamFromCsvFn");function _w(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("streamFromJsonl");let o=e.CONSUME(fh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(_w,"streamFromJsonlFn");function bw(e){let t=["url","method","params","headers","timeout","follow_location"],n=["description","disabled","verify_host","verify_peer","ca_certificate","certificate","certificate_pass","private_key","private_key_pass"];return()=>{e.sectionStack.push("streamFromRequest");let o=e.CONSUME(ph);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(bw,"streamFromRequestFn");var Rw=r(e=>{e.streamFromCsvFn=e.RULE("streamFromCsvFn",yw(e)),e.streamFromJsonlFn=e.RULE("streamFromJsonlFn",_w(e)),e.streamFromRequestFn=e.RULE("streamFromRequestFn",bw(e))},"register");function kw(e){return()=>{e.sectionStack.push("stream"),e.CONSUME(uh),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.streamFromCsvFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.streamFromJsonlFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.streamFromRequestFn),"ALT")}]),e.sectionStack.pop()}}r(kw,"streamFn");function xw(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("allTextWithoutReturnValueFn");let o=e.OR([{ALT:r(()=>e.CONSUME(_h),"ALT")},{ALT:r(()=>e.CONSUME(vh),"ALT")},{ALT:r(()=>e.CONSUME(Uh),"ALT")},{ALT:r(()=>e.CONSUME(Ch),"ALT")},{ALT:r(()=>e.CONSUME(Oh),"ALT")}]);e.SUBRULE(e.assignableVariableProperty),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(xw,"allTextWithoutReturnValueFn");function Aw(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("allTextWithReturnValueFn");let o=e.OR([{ALT:r(()=>e.CONSUME(bh),"ALT")},{ALT:r(()=>e.CONSUME(Rh),"ALT")},{ALT:r(()=>e.CONSUME(kh),"ALT")},{ALT:r(()=>e.CONSUME(xh),"ALT")},{ALT:r(()=>e.CONSUME(Ah),"ALT")},{ALT:r(()=>e.CONSUME(Lh),"ALT")}]);e.SUBRULE(e.assignableVariableProperty),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Aw,"allTextWithReturnValueFn");var vw=r(e=>{e.allTextWithoutReturnValueFn=e.RULE("allTextWithoutReturnValueFn",xw(e)),e.allTextWithReturnValueFn=e.RULE("allTextWithReturnValueFn",Aw(e))},"register");function Uw(e){return()=>{e.sectionStack.push("text"),e.CONSUME(_a),e.CONSUME(q);let t=e.LA(1).image,n=["contains","ends_with","icontains","iends_with","istarts_with","starts_with"],o=["append","ltrim","prepend","rtrim","trim"];n.includes(t)?e.SUBRULE(e.allTextWithReturnValueFn):o.includes(t)&&e.SUBRULE(e.allTextWithoutReturnValueFn),e.sectionStack.pop()}}r(Uw,"textFn");function Cw(e){return()=>{e.sectionStack.push("unitExpect"),e.CONSUME(ka),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.unitExpectWithArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectWithoutArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectToThrowFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectToBeWithinFn),"ALT")}]),e.sectionStack.pop()}}r(Cw,"unitExpectFn");function Lw(e){return()=>{let t=["latitude_1","longitude_1","latitude_2","longitude_2"],n=["description","disabled"];e.sectionStack.push("utilGeoDistanceFn");let o=e.CONSUME(wh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Lw,"utilGeoDistanceFn");function Ow(e){let t=[],n=["description","disabled"];return()=>{e.sectionStack.push("utilGetAllInputFn");let o=e.CONSUME(Fh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Ow,"utilGetAllInputFn");function Nw(e){return()=>{let t=[],n=["description","disabled"];e.sectionStack.push("utilGetEnvFn");let o=e.CONSUME(Ph);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Nw,"utilGetEnvFn");function Mw(e){return()=>{let t=["encoding"],n=["description","disabled"];e.sectionStack.push("utilGetInputFn");let o=e.CONSUME(Dh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Mw,"utilGetInputFn");function ww(e){return()=>{let t=[],n=["description","disabled"];e.sectionStack.push("utilGetVarsFn");let o=e.CONSUME(Bh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(ww,"utilGetVarsFn");function Fw(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("utilIpLookupFn");let o=e.CONSUME(qh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Fw,"utilIpLookupFn");function Iw(e){return()=>{let t=!1;e.sectionStack.push("utilPostProcessFn"),e.CONSUME(Gh),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.SUBRULE(e.stackClause)},"ALT")}])}),t||e.SUBRULE(e.stackClause),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(Iw,"utilPostProcessFn");function Pw(e){return()=>{e.sectionStack.push("utilSendEmailFn");let t=e.CONSUME(Mh),n={};e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{"description?":"[string]","disabled?":"[boolean]","service_provider?":["resend","xano"],"api_key?":"[expression]","subject?":"[expression]","message?":"[expression]","to?":"[expression]","bcc?":"[expression]","cc?":"[expression]","from?":"[expression]","reply_to?":"[expression]","scheduled_at?":"[expression]","mock?":{"[string]":"[expression]"}},n]}),e.SUBRULE(e.asVariable,{ARGS:[t]});let o={xano:["description","disabled","service_provider","subject","message","mock"],resend:["description","disabled","service_provider","api_key","subject","message","to","bcc","cc","from","reply_to","scheduled_at","mock"]},i={xano:["subject","message"],resend:["api_key","subject","message","from","to"]};e.ACTION(()=>{let a=_e(n.service_provider?.value),s=i[a]||[];for(let p of s)Object.prototype.hasOwnProperty.call(n,p)||e.addMissingError(t,`Missing required field '${p}' for service_provider '${a}'`);let c=o[a]||[],u=[];for(let p in n){let g=_e(n[p].key);u.push(g),c.includes(g)||e.addIllegalAttributeError(n[p].key)}}),e.sectionStack.pop()}}r(Pw,"utilSendEmailFn");function Dw(e){return()=>{let t=["value","duplicates"],n=["description","disabled"];e.sectionStack.push("utilSetHeaderFn");let o=e.CONSUME(Vh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(Dw,"utilSetHeaderFn");function Bw(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("utilSleepFn");let o=e.CONSUME(Wh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(Bw,"utilSleepFn");function qw(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("utilTemplateFn");let o=e.CONSUME(Ih);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(qw,"utilTemplateFn");var Gw=r(e=>{e.utilGeoDistanceFn=e.RULE("utilGeoDistanceFn",Lw(e)),e.utilGetAllInputFn=e.RULE("utilGetAllInputFn",Ow(e)),e.utilGetEnvFn=e.RULE("utilGetEnvFn",Nw(e)),e.utilGetInputFn=e.RULE("utilGetInputFn",Mw(e)),e.utilGetVarsFn=e.RULE("utilGetVarsFn",ww(e)),e.utilIpLookupFn=e.RULE("utilIpLookupFn",Fw(e)),e.utilPostProcessFn=e.RULE("utilPostProcessFn",Iw(e)),e.utilSetHeaderFn=e.RULE("utilSetHeaderFn",Dw(e)),e.utilSleepFn=e.RULE("utilSleepFn",Bw(e)),e.utilTemplateFn=e.RULE("utilTemplateFn",qw(e)),e.utilSendEmailFn=e.RULE("utilSendEmailFn",Pw(e))},"register");function jw(e){return()=>{e.sectionStack.push("util"),e.CONSUME(Nh),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.utilIpLookupFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetEnvFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilSleepFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetAllInputFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetInputFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetVarsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGeoDistanceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilPostProcessFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilSetHeaderFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilTemplateFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilSendEmailFn),"ALT")}]),e.sectionStack.pop()}}r(jw,"utilFn");function Vw(e){return()=>{e.sectionStack.push("var");let t=e.CONSUME(Hh);e.OR([{ALT:r(()=>{let n=e.CONSUME(He);n.image&&e.addVariable(n.image,"unknown")},"ALT")},{ALT:r(()=>{e.CONSUME(q),e.CONSUME(Yh),e.SUBRULE(e.assignableVariableProperty)},"ALT")}]),e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{value:"[expression]","description?":"[string]","disabled?":"[boolean]","mock?":{"[string]":"[expression]"}}]}),e.sectionStack.pop()}}r(Vw,"varFn");function Ww(e){return()=>{e.sectionStack.push("workflowExpect"),e.CONSUME(ka),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.workflowExpectWithArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.workflowExpectWithoutArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.workflowExpectToThrowFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.workflowExpectToBeWithinFn),"ALT")}]),e.sectionStack.pop()}}r(Ww,"workflowExpectFn");function zw(e){return()=>{let t=["file","zip"],n=["description","disabled","password","password_encryption","filename"];e.sectionStack.push("zipAddToArchiveFn");let o=e.CONSUME(mg);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(zw,"zipAddToArchiveFn");function Hw(e){return()=>{let t=["filename"],n=["description","disabled","password","password_encryption"];e.sectionStack.push("zipCreateArchiveFn");let o=e.CONSUME(hg);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Hw,"zipCreateArchiveFn");function Yw(e){return()=>{let t=["filename","zip"],n=["description","disabled","password"];e.sectionStack.push("zipDeleteFromArchiveFn");let o=e.CONSUME(gg);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(Yw,"zipDeleteFromArchiveFn");function Kw(e){return()=>{let t=["zip"],n=["description","disabled","password"];e.sectionStack.push("zipExtractFn");let o=e.CONSUME(Tg);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Kw,"zipExtractFn");function Jw(e){return()=>{let t=["zip"],n=["description","disabled","password"];e.sectionStack.push("zipViewContentsFn");let o=e.CONSUME(Eg);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Jw,"zipViewContentsFn");var Qw=r(e=>{e.zipAddToArchiveFn=e.RULE("zipAddToArchiveFn",zw(e)),e.zipCreateArchiveFn=e.RULE("zipCreateArchiveFn",Hw(e)),e.zipDeleteFromArchiveFn=e.RULE("zipDeleteFromArchiveFn",Yw(e)),e.zipExtractFn=e.RULE("zipExtractFn",Kw(e)),e.zipViewContentsFn=e.RULE("zipViewContentsFn",Jw(e))},"register");function Xw(e){return()=>{e.sectionStack.push("zip"),e.CONSUME(pg),e.CONSUME(q),e.OR([{ALT:r(()=>e.SUBRULE(e.zipCreateArchiveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipAddToArchiveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipDeleteFromArchiveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipExtractFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipViewContentsFn),"ALT")}]),e.sectionStack.pop()}}r(Xw,"zipFn");var Zw=r(e=>{e.aiFn=e.RULE("aiFn",kO(e)),e.apiFn=e.RULE("apiFn",OO(e)),e.arrayFn=e.RULE("arrayFn",JO(e)),e.cloudFn=e.RULE("cloudFn",hN(e)),e.controlFn=e.RULE("controlFn",gN(e)),e.dbFn=e.RULE("dbFn",$N(e)),e.debugFn=e.RULE("debugFn",nM(e)),e.mathFn=e.RULE("mathFn",hM(e)),e.objectFn=e.RULE("objectFn",yM(e)),e.redisFn=e.RULE("redisFn",PM(e)),e.securityFn=e.RULE("securityFn",dw(e)),e.storageFn=e.RULE("storageFn",Sw(e)),e.streamFn=e.RULE("streamFn",kw(e)),e.textFn=e.RULE("textFn",Uw(e)),e.utilFn=e.RULE("utilFn",jw(e)),e.varFn=e.RULE("varFn",Vw(e)),e.zipFn=e.RULE("zipFn",Xw(e)),e.unitExpectFn=e.RULE("unitExpectFn",Cw(e)),e.workflowExpectFn=e.RULE("workflowExpectFn",Ww(e)),RO(e),KM(e),LO(e),KO(e),mN(e),IN(e),ZN(e),rM(e),mM(e),SM(e),IM(e),uw(e),Ew(e),Rw(e),vw(e),Gw(e),Qw(e),fM(e)},"register");function $w(e){return(t,n,o,i={})=>{e.CONSUME(yt),e.OPTION(()=>{e.OR([{ALT:r(()=>{e.CONSUME(h),e.AT_LEAST_ONE(()=>{e.SUBRULE(e.objectAttrReq,{ARGS:[t,n,o,i]}),e.OPTION1(()=>e.CONSUME(ze)),e.AT_LEAST_ONE1(()=>e.CONSUME3(h))})},"ALT")},{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:ze,DEF:r(()=>{e.SUBRULE1(e.objectAttrReq,{ARGS:[t,n,o,i]})},"DEF")}),e.MANY(()=>e.CONSUME2(h))},"ALT")}])}),e.CONSUME(_t)}}r($w,"arrayOfObjectAttrReq");function eF(e){return()=>{e.CONSUME(yt),e.OPTION(()=>{e.OR([{ALT:r(()=>{e.CONSUME(h),e.AT_LEAST_ONE(()=>{e.CONSUME(M),e.OPTION1(()=>e.CONSUME(ze)),e.AT_LEAST_ONE1(()=>e.CONSUME3(h))})},"ALT")},{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:ze,DEF:r(()=>{e.CONSUME1(M)},"DEF")}),e.MANY(()=>e.CONSUME2(h))},"ALT")}])}),e.CONSUME(_t)}}r(eF,"arrayOfStringLiterals");function tF(e){return(t={})=>{e.CONSUME(yt),e.OPTION(()=>e.OR([{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:ze,DEF:r(()=>{e.SUBRULE(e.valueExpression,{ARGS:[{...t,allowObject:!0,allowArray:!0}]})},"DEF")})},"ALT")},{ALT:r(()=>{e.CONSUME(h),e.AT_LEAST_ONE(()=>{e.SUBRULE1(e.valueExpression,{ARGS:[{...t,allowObject:!0,allowArray:!0}]}),e.AT_LEAST_ONE1(()=>e.CONSUME1(h))})},"ALT")}])),e.CONSUME(_t)}}r(tF,"arrayWithValues");function rF(e){return()=>{e.OR([{ALT:r(()=>{e.CONSUME(He)},"ALT")},{ALT:r(()=>{e.CONSUME(wo),e.CONSUME(q),e.CONSUME(y)},"ALT")}])}}r(rF,"assignableVariableAs");function nF(e){return()=>{let t="";e.OR({DEF:[{ALT:r(()=>{t=e.CONSUME(He).image},"ALT")},{ALT:r(()=>{e.CONSUME(wo),e.CONSUME(q),t=`$${e.CONSUME(y).image}`},"ALT")}],ERR_MSG:"expecting variable (e.g. $variable or $var.variable)"}),e.SUBRULE(e.chainedIdentifier),e.MANY({GATE:r(()=>e.LA(1).tokenType===Ft||e.LA(1).tokenType===h&&e.LA(2).tokenType===Ft,"GATE"),DEF:r(()=>{e.SUBRULE(e.filterFn)},"DEF")}),t&&e.addVariable(t,"unknown")}}r(nF,"assignableVariableProperty");function oF(e){return()=>{e.OPTION(()=>{e.CONSUME(tr),e.SUBRULE(e.assignableVariableProperty)})}}r(oF,"asVariable");function iF(e){return()=>{e.OR([{ALT:r(()=>{e.CONSUME(ft)},"ALT")},{ALT:r(()=>{e.CONSUME(pt)},"ALT")}])}}r(iF,"booleanValue");function aF(e){return()=>{e.OR(Id.map(t=>({ALT:r(()=>e.CONSUME(t),"ALT")}))),e.CONSUME(M)}}r(aF,"castedValue");function sF(e){return()=>{e.OPTION(()=>{e.CONSUME(yt),e.OR({DEF:[{ALT:r(()=>e.SUBRULE(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeErrorVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")},{ALT:r(()=>e.CONSUME(it),"ALT")}],ERR_MSG:"Invalid array index"}),e.CONSUME(_t)}),e.MANY(()=>{e.CONSUME(q),e.CONSUME(y),e.OPTION1(()=>{e.CONSUME1(yt),e.OR1({DEF:[{ALT:r(()=>e.SUBRULE1(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE1(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE1(e.completeErrorVariable),"ALT")},{ALT:r(()=>e.SUBRULE1(e.shortFormVariable),"ALT")},{ALT:r(()=>e.CONSUME1(it),"ALT")}],ERR_MSG:"Invalid array index"}),e.CONSUME1(_t)})})}}r(sF,"chainedIdentifier");function cF(e){return()=>{e.CONSUME(Qh),e.CONSUME(q),e.CONSUME(y),e.SUBRULE(e.chainedIdentifier)}}r(cF,"completeAuthVariable");function lF(e){return()=>{e.CONSUME(Jh),e.CONSUME(q),e.OR([{ALT:r(()=>e.CONSUME(Xh),"ALT")},{ALT:r(()=>e.CONSUME($h),"ALT")},{ALT:r(()=>e.CONSUME(eg),"ALT")},{ALT:r(()=>e.CONSUME(tg),"ALT")},{ALT:r(()=>e.CONSUME(rg),"ALT")},{ALT:r(()=>e.CONSUME(ng),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}])}}r(lF,"completeEnvVariable");function uF(e){let t=new Set(["name","code","message","result"]);return()=>{let n=e.CONSUME(Zh);e.sectionStack.includes("catchFn")||e.addInvalidValueError(n,"Invalid use of $error variable outside of a catch block."),e.CONSUME(q);let o=e.CONSUME(y);t.has(o.image)||e.addInvalidValueError(o,`Invalid property '${o.image}' for $error variable. Allowed properties are: ${Array.from(t).join(", ")}.`),e.SUBRULE(e.chainedIdentifier)}}r(uF,"completeErrorVariable");function dF(e){return()=>{e.CONSUME(Kh),e.CONSUME(q),e.CONSUME(y),e.SUBRULE(e.chainedIdentifier)}}r(dF,"completeInputVariable");function fF(e){return(...t)=>{let n=t||[],o=e.CONSUME3(M),i=_e(o);n.includes(i)||e.addMissingError(o,`Invalid value "${i}". Must be one of: ${n.map(a=>`"${a}"`).join(", ")}`)}}r(fF,"enumValue");function pF(e){return(t={},n=null)=>{e.OR([{ALT:r(()=>{e.CONSUME(h),e.CONSUME(Ft)},"ALT")},{ALT:r(()=>e.CONSUME1(Ft),"ALT")}]);let o=t.allowQueryExpression===!0?CL:Dg;e.OPTION(()=>e.CONSUME(jr));let i=e.CONSUME(y);o.includes(i.image)||e.addInvalidValueError(i,`Unknown filter function '${i.image}'`),e.MANY1(()=>{e.CONSUME(Ne),e.SUBRULE(e.valueExpression,{ARGS:[t,n]})})}}r(pF,"filterFn");var jW={allowDuplicates:[],allowQueryExpression:!1,allowDisabledKeys:!1,types:{}};function mF(e){return(t,n,o,i={})=>{n=n||[],o=o||[];let a=!1,s=!1;i={...jW,...i};let c=[],u=[...n,...o];e.OR({IGNORE_AMBIGUITIES:!0,DEF:[{GATE:r(()=>n.length===0,"GATE"),ALT:r(()=>{e.OPTION(()=>{e.CONSUME(O),e.MANY(()=>{e.OR1([{GATE:r(()=>!a,"GATE"),ALT:r(()=>e.MANY1(()=>e.CONSUME1(h)),"ALT")},{GATE:r(()=>a,"GATE"),ALT:r(()=>e.AT_LEAST_ONE(()=>e.CONSUME2(h)),"ALT")}]),e.OR2([{ALT:r(()=>{let L=e.CONSUME(y);c.push(L),e.CONSUME(C);let G=_e(L),P=i.types[G];if(typeof P=="function")P.call(null,e,L);else if(Array.isArray(P)){let z=e.CONSUME3(M),B=_e(z);P.includes(B)||e.addMissingError(z,`Invalid value "${B}". Must be one of: ${P.map(b=>`"${b}"`).join(", ")}`)}else e.OR4({DEF:[{GATE:r(()=>P==="boolean","GATE"),ALT:r(()=>e.SUBRULE(e.booleanValue),"ALT")},{GATE:r(()=>P==="number","GATE"),ALT:r(()=>e.SUBRULE(e.numberValue),"ALT")},{GATE:r(()=>P==="string","GATE"),ALT:r(()=>e.CONSUME1(M),"ALT")},{GATE:r(()=>P==="object","GATE"),ALT:r(()=>e.SUBRULE1(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!P,"GATE"),ALT:r(()=>e.SUBRULE(e.valueExpression,{ARGS:[i]}),"ALT")}],ERR_MSG:P?`${P} for attribute ${L.image}`:void 0});a=!0},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.mockAttribute),a=!0},"ALT")}])}),e.MANY2(()=>e.CONSUME3(h)),e.CONSUME(N)})},"ALT")},{GATE:r(()=>n.length>0,"GATE"),ALT:r(()=>{e.CONSUME1(O),e.MANY4(()=>{e.OR3([{GATE:r(()=>!a,"GATE"),ALT:r(()=>e.MANY5(()=>e.CONSUME4(h)),"ALT")},{GATE:r(()=>a,"GATE"),ALT:r(()=>e.AT_LEAST_ONE1(()=>e.CONSUME5(h)),"ALT")}]),e.OR5([{ALT:r(()=>{let L=e.CONSUME1(y);c.push(L),e.CONSUME1(C);let G=_e(L),P=i.types[G];if(typeof P=="function")P.call(null,e,L);else if(Array.isArray(P)){let z=e.CONSUME3(M),B=_e(z);P.includes(B)||e.addMissingError(z,`Invalid value "${B}". Must be one of: ${P.map(b=>`"${b}"`).join(", ")}`)}else e.OR6({DEF:[{GATE:r(()=>P==="boolean","GATE"),ALT:r(()=>e.SUBRULE2(e.booleanValue),"ALT")},{GATE:r(()=>P==="number","GATE"),ALT:r(()=>e.SUBRULE2(e.numberValue),"ALT")},{GATE:r(()=>P==="string","GATE"),ALT:r(()=>e.CONSUME2(M),"ALT")},{GATE:r(()=>P==="object","GATE"),ALT:r(()=>e.SUBRULE2(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!P,"GATE"),ALT:r(()=>e.SUBRULE2(e.valueExpression,{ARGS:[i]}),"ALT")}],ERR_MSG:P?`${P} for attribute ${L.image}`:void 0});a=!0},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{e.SUBRULE2(e.mockAttribute),s=!0,a=!0},"ALT")}])}),e.MANY6(()=>e.CONSUME6(h)),e.CONSUME1(N)},"ALT")}]});let p=c.filter((L,G)=>!i.allowDuplicates.includes(L.image)&&c.findIndex(P=>P.image===L.image)!==G);for(let L of p)e.addDuplicateAttributeError(L);let g=c.filter(L=>!u.includes(L.image));for(let L of g)e.addIllegalAttributeError(L);let S=c.map(L=>L.image),x=n.filter(L=>!S.includes(L));x.length>0&&e.addMissingAttributeError(t,x),e.sectionStack.pop()}}r(mF,"functionAttrReq");function hF(e){return()=>{e.CONSUME(wo),e.CONSUME(q),e.CONSUME(y),e.SUBRULE(e.chainedIdentifier)}}r(hF,"longFormVariable");function gF(e){return()=>{e.sectionStack.push("minimalFnBody"),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(gF,"minimalFnBody");function TF(e){return()=>{let t=e.CONSUME(wg);e.CONSUME(C),e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,{"[string]":"[expression]"}]}),e.sectionStack.pop()}}r(TF,"mockAttribute");function EF(e){return()=>{e.OR([{ALT:r(()=>{e.CONSUME(it,{ERR_MSG:"Integer literal expected"})},"ALT")},{ALT:r(()=>{e.CONSUME(Yt,{ERR_MSG:"Float literal expected"})},"ALT")}],{ERR_MSG:"Number literal expected"})}}r(EF,"numberValue");var VW={allowDuplicates:[],allowQueryExpression:!1,recursive:[],recursiveArray:[],allowVariables:!0,types:{}};function SF(e){return(t,n,o,i={})=>{n=n||[],o=o||[],i={...VW,...i};let a=[],s=[...n,...o],c;e.CONSUME(O),e.OPTION(()=>{e.OR([{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:ze,DEF:r(()=>{e.OR1([{ALT:r(()=>c=e.CONSUME(y),"ALT")},{ALT:r(()=>c=e.CONSUME(M),"ALT")}]),a.push(c);let x=_e(c);if(e.CONSUME(Ne),i.recursive.includes(x))e.SUBRULE(e.objectAttrReq,{ARGS:[c,n,o,i]});else if(i.recursiveArray.includes(x))e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[c,n,o,i]});else{let L=i.types[x];if(typeof L=="function")L.call(null,e,c);else if(Array.isArray(L)){let G=e.CONSUME3(M),P=_e(G);L.includes(P)||e.addMissingError(G,`Invalid value "${P}". Must be one of: ${L.map(z=>`"${z}"`).join(", ")}`)}else e.OR4([{GATE:r(()=>L==="boolean","GATE"),ALT:r(()=>e.SUBRULE(e.booleanValue),"ALT")},{GATE:r(()=>L==="number","GATE"),ALT:r(()=>e.SUBRULE(e.numberValue),"ALT")},{GATE:r(()=>L==="string","GATE"),ALT:r(()=>e.CONSUME3(M),"ALT")},{GATE:r(()=>L==="object","GATE"),ALT:r(()=>e.SUBRULE1(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!L,"GATE"),ALT:r(()=>e.SUBRULE(e.valueExpression,{ARGS:[i]}),"ALT")}])}},"DEF")})},"ALT")},{ALT:r(()=>{e.CONSUME(h),e.AT_LEAST_ONE(()=>{e.OR2([{ALT:r(()=>c=e.CONSUME2(y),"ALT")},{ALT:r(()=>c=e.CONSUME2(M),"ALT")}]),a.push(c),e.CONSUME1(Ne);let x=_e(c);if(i.recursive.includes(x))e.SUBRULE(e.objectAttrReq,{ARGS:[c,n,o,i]});else if(i.recursiveArray.includes(x))e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[c,n,o,i]});else{let L=i.types[x];if(typeof L=="function")L.call(null,e,c);else if(Array.isArray(L)){let G=e.CONSUME3(M),P=_e(G);L.includes(P)||e.SAVE_ERROR(new St(`Invalid value "${P}". Must be one of: ${L.map(z=>`"${z}"`).join(", ")}`,G,G))}else e.OR3([{GATE:r(()=>L==="boolean","GATE"),ALT:r(()=>e.SUBRULE1(e.booleanValue),"ALT")},{GATE:r(()=>L==="number","GATE"),ALT:r(()=>e.SUBRULE1(e.numberValue),"ALT")},{GATE:r(()=>L==="string","GATE"),ALT:r(()=>e.OR5([{ALT:r(()=>e.CONSUME1(M),"ALT")},{ALT:r(()=>e.CONSUME(nr),"ALT")}]),"ALT")},{GATE:r(()=>L==="object","GATE"),ALT:r(()=>e.SUBRULE(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!L,"GATE"),ALT:r(()=>e.SUBRULE1(e.valueExpression,{ARGS:[i]}),"ALT")}])}e.OPTION1(()=>e.CONSUME(ze)),e.AT_LEAST_ONE1(()=>e.CONSUME1(h))})},"ALT")}])}),e.CONSUME(N);let u=a.filter((x,L)=>!i.allowDuplicates.includes(_e(x))&&a.findIndex(G=>_e(G)===_e(x))!==L);for(let x of u)e.addDuplicateAttributeError(x);let p=a.filter(x=>!s.includes(_e(x)));for(let x of p)e.addIllegalAttributeError(x);let g=a.map(_e),S=n.filter(x=>!g.includes(x));S.length>0&&e.addMissingAttributeError(t,S)}}r(SF,"objectAttrReq");function yF(e){return(t={})=>{let n=[],o=e.CONSUME(O);e.MANY(()=>e.CONSUME(h)),e.MANY_SEP({SEP:h,DEF:r(()=>{let i=!1,a=!1;e.MANY1(()=>{i&&!a&&e.addMissingError(o,"Expected a separator between attributes"),e.OPTION1({GATE:r(()=>t.allowDisabledKeys===!0,"GATE"),DEF:r(()=>e.CONSUME(jr),"DEF")});let s=e.OR1([{ALT:r(()=>e.CONSUME2(y),"ALT")},{ALT:r(()=>e.CONSUME2(M),"ALT")}]),c=_e(s);n.includes(c)?e.addDuplicateAttributeError(s):n.push(c),e.CONSUME(Ne),e.SUBRULE(e.valueExpression,{ARGS:[t]}),e.OPTION(()=>{e.CONSUME(ze),a=!0}),i=!0})},"DEF")}),e.MANY3(()=>e.CONSUME3(h)),e.CONSUME(N)}}r(yF,"objectWithAttributes");function _F(e){return()=>{e.sectionStack.push("optionalCommentBlockFn"),e.MANY(()=>{e.CONSUME(on),e.CONSUME(h)}),e.sectionStack.pop()}}r(_F,"optionalCommentBlockFn");function bF(e){return()=>{e.sectionStack.push("commentBlockFn"),e.AT_LEAST_ONE(()=>{e.CONSUME(on),e.CONSUME(h)}),e.sectionStack.pop()}}r(bF,"commentBlockFn");function RF(e){return()=>{e.AT_LEAST_ONE(()=>{e.CONSUME(Ft),e.CONSUME(y),e.MANY1(()=>{e.CONSUME(Ne),e.SUBRULE(e.valueExpression)})})}}r(RF,"pipedFilter");function kF(e){return()=>{e.sectionStack.push("requiredValueFnBody");let t=!1;e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(kF,"requiredValueFnBody");function xF(e){return()=>{e.CONSUME(He),e.SUBRULE(e.chainedIdentifier)}}r(xF,"shortFormVariable");var AF=r(e=>()=>{let t=!0,n=e.CONSUME(yt);e.MANY(()=>e.CONSUME(h)),e.MANY1(()=>{t||e.addMissingError(n,"Missing comma or newline between string values in the array"),n=e.CONSUME(M),t=!1,e.OPTION(()=>{e.CONSUME(ze),t=!0}),e.MANY2(()=>{e.CONSUME1(h),t=!0})}),e.CONSUME(_t)},"stringArray");function vF(e){return()=>{e.CONSUME(Sg),e.CONSUME(C),e.SUBRULE(e.stringArray)}}r(vF,"tagsAttribute");var WW={allowQueryExpression:!1,allowIdentifier:!0,allowOptionalIfNull:!1,allowVariables:!0,allowDisabledKeys:!1},zW=[ic,ac,sc,cc,Od,lc,Nd,uc,vc,Tc,Ec,Sc,_c,yc,dc,fc,pc,mc,hc,gc,bc,Rc,kc,xc];function UF(e){return(t={},n=null)=>{t={...WW,...t};let o=!1,i=!1,a=!1,s=n===null;n=n||{openParentheses:0},e.MANY(()=>{n.openParentheses+=1,a=!0,e.CONSUME(ye)});let c=t.allowVariables,u=t.allowIdentifier,p=e.OR({DEF:[{ALT:r(()=>(e.CONSUME(M),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Uo),!0),"ALT")},{ALT:r(()=>(e.CONSUME(it),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Yt),!0),"ALT")},{ALT:r(()=>(e.CONSUME(ft),!0),"ALT")},{ALT:r(()=>(e.CONSUME(pt),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Po),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Io),!0),"ALT")},{ALT:r(()=>(e.CONSUME(nr),!0),"ALT")},{ALT:r(()=>(e.CONSUME(cm),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Dp),!0),"ALT")},{GATE:r(()=>c,"GATE"),ALT:r(()=>(e.OR8([{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeAuthVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeEnvVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeErrorVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")}]),!0),"ALT")},{ALT:r(()=>(e.SUBRULE(e.castedValue),!0),"ALT")},{ALT:r(()=>(e.SUBRULE(e.objectWithAttributes,{ARGS:[t]}),!0),"ALT")},{ALT:r(()=>(e.SUBRULE(e.arrayWithValues,{ARGS:[t]}),!0),"ALT")},{ALT:r(()=>!1,"ALT")}]});e.OPTION4({GATE:r(()=>!p,"GATE"),DEF:r(()=>{u||e.addInvalidValueError(null,c?"cannot use identifiers in this context":"cannot use variables in this context"),e.CONSUME(y)},"DEF")}),e.OPTION1({GATE:r(()=>e.LA(1).tokenType===Ft||e.LA(1).tokenType===h&&e.LA(2).tokenType===Ft,"GATE"),DEF:r(()=>{o=!0,e.SUBRULE(e.filterFn,{ARGS:[t,n]})},"DEF")}),e.OPTION3({GATE:r(()=>n.openParentheses>0,"GATE"),DEF:r(()=>{i=a,n.openParentheses-=1,e.OPTION8(()=>e.CONSUME1(h)),e.CONSUME(pe),e.MANY1(()=>{e.CONSUME(q),e.CONSUME2(y)})},"DEF")});let g=!o||i;e.OPTION({GATE:r(()=>g,"GATE"),DEF:r(()=>{let S=e.OR7([{ALT:r(()=>e.CONSUME(ic),"ALT")},{ALT:r(()=>e.CONSUME(ac),"ALT")},{ALT:r(()=>e.CONSUME(sc),"ALT")},{ALT:r(()=>e.CONSUME(cc),"ALT")},{ALT:r(()=>e.CONSUME(Od),"ALT")},{ALT:r(()=>e.CONSUME(lc),"ALT")},{ALT:r(()=>e.CONSUME(Nd),"ALT")},{ALT:r(()=>e.CONSUME(uc),"ALT")},{ALT:r(()=>e.CONSUME(Ud),"ALT")},{ALT:r(()=>e.CONSUME(vd),"ALT")},{ALT:r(()=>e.CONSUME(Cd),"ALT")},{ALT:r(()=>e.CONSUME(Ld),"ALT")},{ALT:r(()=>e.CONSUME(wd),"ALT")},{ALT:r(()=>e.CONSUME(Md),"ALT")},{ALT:r(()=>e.CONSUME(OS),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(NS),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(vc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Tc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Ec),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Sc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(_c),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(yc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(dc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(fc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(pc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(mc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(hc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(gc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(bc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Rc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(kc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(xc),"ALT")},{ALT:r(()=>e.CONSUME(Fd),"ALT")}]);e.OPTION7({GATE:r(()=>t.allowOptionalIfNull&&zW.includes(S.tokenType),"GATE"),DEF:r(()=>e.CONSUME1(Cr),"DEF")}),e.SUBRULE1(e.valueExpression,{ARGS:[t,n]})},"DEF")}),e.OPTION2({GATE:r(()=>g&&!t.allowQueryExpression,"GATE"),DEF:r(()=>{e.CONSUME(Cr),e.SUBRULE2(e.valueExpression,{ARGS:[t,n]}),e.CONSUME2(Ne),e.SUBRULE3(e.valueExpression,{ARGS:[t,n]})},"DEF")}),e.MANY3({GATE:r(()=>n.openParentheses>0,"GATE"),DEF:r(()=>{n.openParentheses-=1,e.OPTION5(()=>e.CONSUME2(h)),e.CONSUME2(pe)},"DEF")}),e.MANY2({GATE:r(()=>e.LA(1).tokenType===Ft||e.LA(1).tokenType===h&&e.LA(2).tokenType===Ft,"GATE"),DEF:r(()=>{e.SUBRULE1(e.filterFn,{ARGS:[t,n]})},"DEF")}),s&&n.openParentheses>0&&e.addMissingError(null,"Unmatched opening parenthesis, missing closing parenthesis")}}r(UF,"valueExpression");function CF(e){return Object.hasOwn(e,"emptyArray")||(e.emptyArray=e.RULE("emptyArray",()=>{e.CONSUME(yt),e.CONSUME(_t)})),()=>{e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(Uo),"ALT")},{ALT:r(()=>e.CONSUME(Yt),"ALT")},{ALT:r(()=>e.CONSUME(it),"ALT")},{ALT:r(()=>e.CONSUME(ft),"ALT")},{ALT:r(()=>e.CONSUME(pt),"ALT")},{ALT:r(()=>e.CONSUME(Io),"ALT")},{ALT:r(()=>e.CONSUME(Po),"ALT")},{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeAuthVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeEnvVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.castedValue),"ALT")},{ALT:r(()=>e.SUBRULE(e.emptyArray),"ALT")}]),e.OPTION(()=>{e.SUBRULE(e.pipedFilter)})}}r(CF,"valueExpressionForResponse");function LF(e){return()=>{e.OR([{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")}]),e.OPTION(()=>e.SUBRULE(e.pipedFilter))}}r(LF,"variableOnly");var OF=r(e=>{e.mockAttribute=e.RULE("mockAttribute",TF(e)),e.arrayOfObjectAttrReq=e.RULE("arrayOfObjectAttrReq",$w(e)),e.arrayOfStringLiterals=e.RULE("arrayOfStringLiterals",eF(e)),e.arrayWithValues=e.RULE("arrayWithValues",tF(e)),e.assignableVariableAs=e.RULE("assignableVariableAs",rF(e)),e.assignableVariableProperty=e.RULE("assignableVariableProperty",nF(e)),e.booleanValue=e.RULE("booleanValue",iF(e)),e.castedValue=e.RULE("castedValue",aF(e)),e.chainedIdentifier=e.RULE("chainedIdentifier",sF(e)),e.enumValue=e.RULE("enumValue",fF(e)),e.functionAttrReq=e.RULE("functionAttrReq",mF(e)),e.filterFn=e.RULE("filterFn",pF(e)),e.longFormVariable=e.RULE("longFormVariable",hF(e)),e.minimalFnBody=e.RULE("minimalFnBody",gF(e)),e.numberValue=e.RULE("numberValue",EF(e)),e.objectAttrReq=e.RULE("objectAttrReq",SF(e)),e.objectWithAttributes=e.RULE("objectWithAttributes",yF(e)),e.pipedFilter=e.RULE("pipedFilter",RF(e)),e.requiredValueFnBody=e.RULE("requiredValueFnBody",kF(e)),e.shortFormVariable=e.RULE("shortFormVariable",xF(e)),e.stringArray=e.RULE("stringArray",AF(e)),e.tagsAttribute=e.RULE("tagsAttribute",vF(e)),e.valueExpression=e.RULE("valueExpression",UF(e)),e.valueExpressionForResponse=e.RULE("valueExpressionForResponse",CF(e)),e.variableOnly=e.RULE("variableOnly",LF(e)),e.completeAuthVariable=e.RULE("completeAuthVariable",cF(e)),e.completeInputVariable=e.RULE("completeInputVariable",dF(e)),e.completeErrorVariable=e.RULE("completeErrorVariable",uF(e)),e.completeEnvVariable=e.RULE("completeEnvVariable",lF(e)),e.asVariable=e.RULE("asVariable",oF(e)),e.optionalCommentBlockFn=e.RULE("optionalCommentBlockFn",_F(e)),e.commentBlockFn=e.RULE("commentBlockFn",bF(e))},"register");function NF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1;e.sectionStack.push("mcpServerDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let p=e.CONSUME(em);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(Zp),e.CONSUME(C),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.canonicalClause)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE1(e.flexibleStringClause,{ARGS:[$p]})},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0;let g=e.CONSUME(tm);e.CONSUME2(C),e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[g,["name"],["active","auth"],{types:{active:"boolean",auth:"string",name:"string"}}]})},"ALT")}])}),n||e.addMissingError(p,"{} is missing canonical clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(NF,"mcpServerDeclaration");function MF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1;e.sectionStack.push("mcpServerTriggerDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let g=e.CONSUME(om);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let S=e.CONSUME(rm);e.CONSUME(C),e.SUBRULE(e.objectAttrReq,{ARGS:[S,["connection"],[],{types:{connection:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(nm),e.CONSUME2(C),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.mcpServerClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),s||e.addMissingError(g,"{} is missing mcp_server clause"),a||e.addMissingError(g,"{} is missing an input clause"),u||e.addMissingError(g,"{} is missing a stack clause"),c||e.addMissingError(g,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(MF,"mcpServerTriggerDeclaration");function wF(e){return()=>{e.sectionStack.push("columnMetadataDefinition"),e.CONSUME(O),e.AT_LEAST_ONE(()=>{e.CONSUME(h),e.OR([{ALT:r(()=>e.SUBRULE(e.sensitiveFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>{e.CONSUME(Oo),e.CONSUME(C),e.CONSUME(M)},"ALT")}])}),e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(wF,"columnMetadataDefinition");function FF(e){return t=>{e.sectionStack.push("enumColumnMetadataDefinition"),e.CONSUME(O);let n=!1,o=!1,i=!1;e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.OR([{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.valuesFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>e.SUBRULE(e.sensitiveFieldAttribute),"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")}])}),n||e.addMissingError(t,"{} is missing the values attribute"),e.AT_LEAST_ONE2(()=>e.CONSUME2(h)),e.CONSUME(N),e.sectionStack.pop()}}r(FF,"enumColumnMetadataDefinition");function IF(e){return()=>{e.sectionStack.push("objectColumnMetadataDefinition"),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.sensitiveFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.schemaClause,{ARGS:[{include_file:!1}]}),"ALT")}])}),e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.CONSUME(N),e.sectionStack.pop()}}r(IF,"objectColumnMetadataDefinition");function PF(e){e.columnMetadataDefinition=e.RULE("columnMetadataDefinition",wF(e)),e.enumColumnMetadataDefinition=e.RULE("enumColumnMetadataDefinition",FF(e)),e.objectColumnMetadataDefinition=e.RULE("objectColumnMetadataDefinition",IF(e))}r(PF,"register");function DF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1,g=[];e.sectionStack.push("middlewareDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let S=e.CONSUME(am);e.OR([{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME(M),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.CONSUME(im),e.CONSUME(C),e.SUBRULE(e.enumValue,{ARGS:["silent","rethrow","critical"]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.CONSUME(sm),e.CONSUME2(C),e.SUBRULE2(e.enumValue,{ARGS:["merge","replace"]})},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[g]})},"ALT")}])}),a||e.addMissingError(S,"{} is missing an input clause"),u||e.addMissingError(S,"{} is missing a stack clause"),s||e.addMissingError(S,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(DF,"middlewareDeclaration");function BF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1,g=!1,S=[];e.sectionStack.push("queryDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let x=e.CONSUME(pm);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")},{ALT:r(()=>e.CONSUME(is),"ALT")},{ALT:r(()=>e.CONSUME(ar),"ALT")}]),e.CONSUME(Ka),e.CONSUME(C),e.OR1([{ALT:r(()=>e.CONSUME($a),"ALT")},{ALT:r(()=>e.CONSUME(Ja),"ALT")},{ALT:r(()=>e.CONSUME(Qa),"ALT")},{ALT:r(()=>e.CONSUME(Xa),"ALT")},{ALT:r(()=>e.CONSUME(Za),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(ss),e.CONSUME1(C),e.CONSUME1(M)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.cacheClause)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!g,"GATE"),ALT:r(()=>{g=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[S]})},"ALT")}])}),s||e.addMissingError(x,"{} is missing an input clause"),p||e.addMissingError(x,"{} is missing a stack clause"),u||e.addMissingError(x,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(BF,"queryDeclaration");function qF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1;e.sectionStack.push("realtimeTriggerDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let g=e.CONSUME(km);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let S=e.CONSUME(bm);e.CONSUME(C),e.SUBRULE(e.objectAttrReq,{ARGS:[S,[],["join","message"],{types:{join:"boolean",message:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(Rm),e.CONSUME2(C),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.channelClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),o||e.addMissingError(g,"{} is missing channel clause"),s||e.addMissingError(g,"{} is missing an input clause"),u||e.addMissingError(g,"{} is missing a stack clause"),c||e.addMissingError(g,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(qF,"realtimeTriggerDeclaration");function GF(e){return()=>{e.sectionStack.push("tableDeclaration"),e.SUBRULE(e.optionalCommentBlockFn),e.CONSUME(Oo),e.OR1([{ALT:r(()=>e.CONSUME(M,{ERR_MSG:"expected table name after table statement"}),"ALT")},{ALT:r(()=>e.CONSUME(y,{ERR_MSG:"expected table name after table statement"}),"ALT")}]);let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c={};e.CONSUME(O),e.sectionStack.push("tableBody"),e.MANY1(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>e.SUBRULE(e.tagsAttribute),"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>e.SUBRULE(e.authClause),"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>e.SUBRULE(e.viewClause),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>e.SUBRULE(e.schemaClause,{ARGS:[{isTableSchema:!0},c]}),"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>e.SUBRULE(e.indexClause),"ALT")}])}),e.AT_LEAST_ONE1(()=>e.CONSUME1(h)),e.sectionStack.pop(),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(GF,"tableDeclaration");function jF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1;e.sectionStack.push("tableTriggerDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let g=e.CONSUME(Th);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let S=e.CONSUME(mh);e.CONSUME(C),e.SUBRULE(e.objectAttrReq,{ARGS:[S,[],["delete","insert","truncate","update"],{types:{delete:"boolean",insert:"boolean",truncate:"boolean",update:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(hh),e.CONSUME2(C),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.CONSUME(gh),e.CONSUME3(C),e.SUBRULE(e.arrayOfStringLiterals)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.dbTableClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),i||e.addMissingError(g,"{} is missing table clause"),c||e.addMissingError(g,"{} is missing an input clause"),u||e.addMissingError(g,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(jF,"tableTriggerDeclaration");function VF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1,g=[];e.sectionStack.push("taskDeclaration"),e.SUBRULE(e.optionalCommentBlockFn),e.CONSUME(rs),e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(Sa),e.CONSUME(C),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(Sh),e.CONSUME2(C),e.CONSUME2(M)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.scheduleClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[g]})},"ALT")}])}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(VF,"taskDeclaration");function WF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,u=!1,p=!1;e.sectionStack.push("toolDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let g=e.CONSUME(za);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.flexibleStringClause,{ARGS:[Xp]})},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!u,"GATE"),ALT:r(()=>{u=!0,e.SUBRULE(e.stackClause,{ARGS:[{allowCallStatements:!0}]})},"ALT")},{GATE:r(()=>!p,"GATE"),ALT:r(()=>{p=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),i||e.addMissingError(g,"{} is missing an input clause"),u||e.addMissingError(g,"{} is missing a stack clause"),c||e.addMissingError(g,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(WF,"toolDeclaration");function zF(e){return()=>{let t=!1,n=!1,o=!1,i=!1;e.sectionStack.push("workflowTestDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let a=e.CONSUME(ig);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(ns),e.CONSUME(C),e.CONSUME2(M)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.stackClause,{ARGS:[{allowExpectStatements:!0,allowCallStatements:!0}]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),o||e.addMissingError(a,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(zF,"workflowTestDeclaration");function HF(e){return()=>{let t=!1,n=!1,o=!1,i=!1;e.sectionStack.push("workspaceDeclaration"),e.SUBRULE(e.optionalCommentBlockFn),e.CONSUME(lg),e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let a=e.CONSUME(ag);e.CONSUME(C),e.SUBRULE(e.objectAttrReq,{ARGS:[a,[],["ai_terms"],{types:{ai_terms:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0;let a=e.CONSUME(sg);e.CONSUME2(C),e.SUBRULE2(e.objectAttrReq,{ARGS:[a,[],["internal_docs","sql_columns","sql_names","track_performance"],{types:{internal_docs:"boolean",sql_columns:"boolean",sql_names:"boolean",track_performance:"boolean"}}]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0;let a=e.CONSUME(cg);e.CONSUME3(C),e.SUBRULE3(e.objectAttrReq,{ARGS:[a,[],["canonical"],{types:{canonical:"string"}}]})},"ALT")}])}),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(HF,"workspaceDeclaration");function YF(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1;e.sectionStack.push("workspaceTriggerDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let u=e.CONSUME(fg);e.OR([{ALT:r(()=>e.CONSUME(M),"ALT")},{ALT:r(()=>e.CONSUME(y),"ALT")}]),e.CONSUME(O),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(h)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let p=e.CONSUME(ug);e.CONSUME(C),e.SUBRULE(e.objectAttrReq,{ARGS:[p,[],["branch_live","branch_merge","branch_new"],{types:{branch_live:"boolean",branch_merge:"boolean",branch_new:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(dg),e.CONSUME2(C),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),a||e.addMissingError(u,"{} is missing an input clause"),s||e.addMissingError(u,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(h)),e.CONSUME(N),e.MANY2(()=>e.CONSUME2(h)),e.sectionStack.pop()}}r(YF,"workspaceTriggerDeclaration");var KF=r(e=>{OF(e),TO(e),jL(e),Zw(e),PF(e),uO(e),e.addonDeclaration=e.RULE("addonDeclaration",LL(e)),e.agentDeclaration=e.RULE("agentDeclaration",OL(e)),e.agentTriggerDeclaration=e.RULE("agentTriggerDeclaration",NL(e)),e.queryDeclaration=e.RULE("queryDeclaration",BF(e)),e.apiGroupDeclaration=e.RULE("apiGroupDeclaration",ML(e)),e.branchDeclaration=e.RULE("branchDeclaration",VL(e)),e.tableDeclaration=e.RULE("tableDeclaration",GF(e)),e.mcpServerDeclaration=e.RULE("mcpServerDeclaration",NF(e)),e.mcpServerTriggerDeclaration=e.RULE("mcpServerTriggerDeclaration",MF(e)),e.middlewareDeclaration=e.RULE("middlewareDeclaration",DF(e)),e.realtimeTriggerDeclaration=e.RULE("realtimeTriggerDeclaration",qF(e)),e.tableTriggerDeclaration=e.RULE("tableTriggerDeclaration",jF(e)),e.taskDeclaration=e.RULE("taskDeclaration",VF(e)),e.toolDeclaration=e.RULE("toolDeclaration",WF(e)),e.workflowTestDeclaration=e.RULE("workflowTestDeclaration",zF(e)),e.workspaceDeclaration=e.RULE("workspaceDeclaration",HF(e)),e.workspaceTriggerDeclaration=e.RULE("workspaceTriggerDeclaration",YF(e)),e.functionDeclaration=e.RULE("functionDeclaration",EO(e))},"register");var HW={buildMismatchTokenMessage:Wn.buildMismatchTokenMessage,buildEarlyExitMessage:Wn.buildEarlyExitMessage,buildNotAllInputParsedMessage:Wn.buildNotAllInputParsedMessage,buildNoViableAltMessage:Wn.buildNoViableAltMessage},Bg=class extends rc{static{r(this,"XanoBaseParser")}constructor(t){super(t,{errorMessageProvider:HW,recoveryEnabled:!1}),KF(this),this.sectionStack=[],this.reset()}functionAttrReq(){}ADD_ERROR(t,n){this.errors.push({message:t,token:n,line:n?n.startLine:-1,column:n?n.startColumn:-1,ruleName:"error"})}CONSUME_ANY(){if(this.inputIdx<this.input.length){let t=this.input[this.inputIdx];if(t&&typeof t.tokenTypeIdx<"u")return this.inputIdx++,t;this.errors.push({message:"Encountered an invalid token during recovery",token:t,line:t?t.startLine:-1,column:t?t.startColumn:-1,ruleName:"error"})}return null}addVariable(t,n,o=null){this.__symbolTable.var[t]={type:n,value:o}}addInput(t,n,o=!1,i=!1,a=!1){this.__symbolTable.input[t]={type:n,iterable:o,nullable:i,optional:a}}addMissingError(t,n){if(!t){this.SAVE_ERROR(new St(n.replaceAll("{}",""),t));return}this.SAVE_ERROR(new St(n.replaceAll("{}",t.image),t))}addMissingAttributeError(t,n){n=[].concat(n);let o=n.join(", "),i=n.length===1?`${t.image} is missing the ${o} attribute`:`${t.image} is missing the following attributes: ${o}`;this.SAVE_ERROR(new St(i,t))}addIllegalAttributeError(t,n){n||(n=`Attribute \`${t.image}\` is not allowed`),this.SAVE_ERROR(new St(n,t))}addExpectedValueTypeError(t,n){this.SAVE_ERROR(new St(`Expected value of \`${t.image}\` to be of type \`${n}\``,t))}addExpectedValueError(t,n){Y(n)&&n.length>1?this.SAVE_ERROR(new St(`Expected value of \`${t.image}\` to be one of ${n.map(o=>`\`${o}\``).join(", ")}`,t)):this.SAVE_ERROR(new St(`Expected value of \`${t.image}\` to be \`${n}\``,t))}addDuplicateAttributeError(t){this.SAVE_ERROR(new St(`Duplicate attribute \`${t.image}\``,t))}addDuplicateNameError(t,n){n?this.SAVE_ERROR(new St(`Duplicate ${n} name '${t.image}'`,t)):this.SAVE_ERROR(new St(`Duplicate name '${t.image}'`,t))}addInvalidValueError(t,n){this.SAVE_ERROR(new St(n,t))}requireRules(...t){for(let n of t){if(typeof n!="function")throw new Error(`requireRules only accepts functions, ${typeof n} given`);Object.hasOwn(this,n.name)||(this[n.name]=this.RULE(n.name,n(this)))}}reset(){super.reset(),this.sectionStack=[],this.__symbolTable={input:{},var:{},auth:{},env:{}}}};function qg(e,t){t||(t=gn(e));let n=Do(e);switch(se.input=n.tokens,t.toLowerCase()){case"addon":return se.addonDeclaration(),se;case"agent":return se.agentDeclaration(),se;case"agent_trigger":return se.agentTriggerDeclaration(),se;case"api":return se.queryDeclaration(),se;case"api_group":return se.apiGroupDeclaration(),se;case"branch":return se.branchDeclaration(),se;case"db":return se.tableDeclaration(),se;case"mcp_server":return se.mcpServerDeclaration(),se;case"mcp_server_trigger":return se.mcpServerTriggerDeclaration(),se;case"middleware":return se.middlewareDeclaration(),se;case"realtime_trigger":return se.realtimeTriggerDeclaration(),se;case"table_trigger":return se.tableTriggerDeclaration(),se;case"task":return se.taskDeclaration(),se;case"tool":return se.toolDeclaration(),se;case"workflow_test":return se.workflowTestDeclaration(),se;case"workspace":return se.workspaceDeclaration(),se;case"workspace_trigger":return se.workspaceTriggerDeclaration(),se;case"cfn":default:return se.functionDeclaration(),se}}r(qg,"xanoscriptParser");var jS=class extends Bg{static{r(this,"XanoScriptParser")}constructor(){super(Uc),this.performSelfAnalysis()}},se=new jS;var YW=`
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
`,KW=new us(YW);function JW(e){return!!e.nextTokenType.LABEL}r(JW,"suggestable");function QW(e){return e.length===0?!1:e[e.length-1].tokenType===Ft}r(QW,"isAfterPipeToken");function XW(){return Dg.map(e=>{let t=KW.__filterDoc[e];return{label:e,kind:Cc("function"),documentation:t?{kind:"markdown",value:t}:void 0}})}r(XW,"createFilterSuggestions");function JF(e,t){try{let o=Do(e).tokens;if(QW(o))return XW();let i;if(se.reset(),t==="db")i=se.computeContentAssist("tableDeclaration",o);else if(t==="api")i=se.computeContentAssist("queryDeclaration",o);else if(t==="function")i=se.computeContentAssist("functionDeclaration",o);else if(t==="task")i=se.computeContentAssist("taskDeclaration",o);else return[];return i.filter(JW).map(s=>{let c=Pg(s.nextTokenType.name);return{label:s.nextTokenType.LABEL,kind:Cc(c)}})}catch(n){return console.error(n),[]}}r(JF,"getContentAssistSuggestions");function QF(e,t){let n=t.get(e.textDocument.uri);if(!n)return console.error("onCompletion(): Document not found for URI:",e.textDocument.uri),null;let o=e.position,i=n.getText(),a=n.offsetAt(o);if($l(a,i))return null;let c=gn(i);return JF(i.slice(0,a),c)}r(QF,"onCompletion");function XF(e,t){let n=e.document;if(!n)return console.error("onDidChangeContent(): Document not found for URI:",e.textDocument.uri),null;let o=n.getText(),i=gn(o);try{let a=qg(o,i);a.errors.length>0&&t.sendDiagnostics({uri:n.uri,diagnostics:[]});for(let c of a.errors)console.error(`onDidChangeContent(): Error parsing document: ${c.name}`);let s=a.errors.map(c=>({severity:1,range:c.token?{start:n.positionAt(c.token.startOffset),end:n.positionAt(c.token.endOffset+1)}:{start:{line:0,character:0},end:{line:0,character:1}},message:c.message}));console.log(`onDidChangeContent(): sending diagnostic (${a.errors.length} errors) for scheme:`,i),t.sendDiagnostics({uri:n.uri,diagnostics:s})}catch(a){let s=[{severity:1,range:{start:{line:0,character:0},end:{line:0,character:1}},message:a.message||"Syntax error in XanoScript code"}];t.sendDiagnostics({uri:n.uri,diagnostics:s})}}r(XF,"onDidChangeContent");var ZF=`# deg2rad

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
`;var Gg=class extends Wr{static{r(this,"FunctionMessageProvider")}constructor(t){super(),this.parseFunctions(t),this.buildSearchTree()}buildSearchTree(){this.__searchTree={};for(let t in this.__functionDoc){let n=t.split("."),o=this.__searchTree;for(let i=n.length-1;i>=0;i--){let a=n[i];o[a]||(o[a]={}),o=o[a]}o.__value=t}}parseFunctions(t){this.__functionDoc={};let n=[],o="";for(let i of t.split(`
`))i.startsWith("#")?(o&&(this.__functionDoc[o]=n.join(`
`)),o=i.slice(2).trim(),n=[]):n.push(i);o&&n.length&&(this.__functionDoc[o]=n.join(`
`).trim())}findFunction(t,n,o=null){o||(o=this.__searchTree);let i=n[t],a=o[i.image];if(a){let s=n[t-1];if(s&&s.image===".")return this.findFunction(t-2,n,a);if(a.__value)return a.__value}return null}isMatch(t,n,o){let i=n[t+1];return i&&i.image==="."?!1:!!this.findFunction(t,n)}render(t,n){let o=this.findFunction(t,n);if(o)return this.__functionDoc[o]}};var $F=`# stack

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

# util.send_email

\`\`\`xs
util.send_email {
  service_provider = "resend"
  api_key = $env.RESEND_API_KEY
  from = $.env.EMAIL_SENDER
  to = "user@example.com"
  subject = "Hello " ~ $user.name
  message = """
    Hello {{ $user.name }},
    {{ $message }}
  """
} as $email_status
\`\`\`

Sends an email using the specified \`service_provider\` (e.g., \`"resend"\` or \`"xano"\`). The \`api_key\` authenticates the request, while \`from\`, \`to\`, \`subject\`, and \`message\` define the email details. The result of the email operation is stored in the variable defined by \`as\`, here \`$email_status\`.

Service provider can be one of: \`"xano"\`, \`"resend"\`. When using \`"xano"\`, you are limited to sending emails only to your account admin email address.

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

# $input

\`\`\`xs
$input.user_id
\`\`\`

The \`$input\` variable provides access to all input parameters sent to the script\u2019s context. It is an object containing key-value pairs representing the input data, which can be accessed and manipulated within the script.

# $env

The \`$env\` variable allows access to environment variables defined within your workspace. These variables can store sensitive information like API keys or configuration settings, which can be referenced securely within your script.

Xano also defines a series of default environment variables for you to use within your functions:

- \`$env.$remote_ip\`: resolves to the IP address of the individual accessing the API endpoint.
- \`$env.$http_headers\`: this is a text array of headers that are sent to the API endpoint.
- \`$env.$api_baseurl\`: contains the base URL of the active endpoint.
- \`$env.$request_uri\`: contains the URI that is being accessed from the API.
- \`$env.$request_method\`: this is the method (GET, POST, DELETE, etc) of the incoming API request.
- \`$env.$request_querystring\`: contains the query string of the URI that is being accessed from the API.
- \`$env.$request_auth_token\`: contains the authorization token of the API request.
- \`$env.$datasource\`: contains which datasource is being used.
- \`$env.$branch\`: contains which branch is being used.

# $error

The \`$error\` variable only exists within the \`catch\` of a \`try_catch\` block and provides details about the most recent error that occurred within a \`try\` block. It contains properties such as \`code\`, \`message\`, \`name\`, and \`result\`, which can be used for error handling and logging purposes.

\`\`\`xs
try_catch {
  try {
    function.run some_function {
      input = { param: "value" }
    }
  }
  catch {
    var.update $my_error {
      code = $error.code
      message = $error.message
      name = $error.name
      result = $error.result
    }
  }
}
\`\`\`

# $var

The \`$var\` variable provides access to all user-defined variables within the script. \`$var\` can also be accessed through their short form (e.g., \`$counter\`) so long that these do not conflict with reserved keywords (\`$input\`, \`$env\`, \`$error\`...).

You may use \`var.update\` to modify the value of a variable during script execution.

\`\`\`xs
var $counter {
  value = 1
}

var.update $counter {
  value = $var.counter + 1
}
\`\`\`
`;var jg=class extends Wr{static{r(this,"InputFilterMessageProvider")}constructor(t){super(),this.parseFilters(t)}parseFilters(t){this.__filterDoc={};let n=[],o="";for(let i of t.split(`
`))i.startsWith("#")?(o&&(this.__filterDoc[o]=n.join(`
`).trim()),o=i.slice(2).trim(),n=[]):n.push(i);o&&n.length&&(this.__filterDoc[o]=n.join(`
`).trim())}findFilter(t,n){let o=n[t];if(!(o.tokenType.name==="Identifier"||o.tokenType.LONGER_ALT&&o.tokenType.LONGER_ALT.name==="Identifier"||o.tokenType.CATEGORIES&&o.tokenType.CATEGORIES.some(s=>s.name==="Identifier")))return null;let a=o.image;return this.__filterDoc[a]?a:null}isMatch(t,n,o){if(t===0)return!1;let i=n[t-1],a=i.image==="=",s=i.image==="|";if(!a&&!s)return!1;if(a){for(let c=t-2;c>=0;c--){let u=n[c];if(u.image==="filters")return!!this.findFilter(t,n);if(u.image==="{"||u.image==="}"||u.image===`
`)break}return!1}if(s){for(let c=t-2;c>=0;c--){let u=n[c];if(u.image==="="&&c>0&&n[c-1].image==="filters")return!!this.findFilter(t,n);if(u.image==="{"||u.image==="}"||u.image===`
`)break}return!1}return!1}render(t,n){let o=this.findFilter(t,n);if(o)return this.__filterDoc[o]}};var eI=`# min

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
`;var Vg=class extends Wr{static{r(this,"InputVariableMessageProvider")}constructor(){super()}isMatch(t,n,o){let i=n[t];return t>2&&n[t-2].image==="$input"&&n[t-1].image==="."&&i.tokenType.name==="Identifier"}renderUndefined(t){return["**Error**: This input is not defined.","Add a definition for it in your `input` clause.","```xs","input {","  text? "+t,"}","```"].join(`
`)}render(t,n,o){let i=n[t].image,a=o.__symbolTable.input[i];if(a){let s=a.iterable?`[${a.type},...]`:`${a.type}`,c=[`input **${i}** of type \`${s}\` `];return a.nullable&&c.push(`- ${i} is _nullable_ (\`${a.type}?\`)`),a.optional&&c.push(`- ${i} is _optional_ (\`${i}?\`)`),c.join(`

`)}else return this.renderUndefined(i)}};function tI(e,t,n=[]){let o=t.get(e.textDocument.uri);if(!o)return console.error("onHover(): Document not found for URI:",e.textDocument.uri),null;let i=o.getText(),a=o.offsetAt(e.position),s=Do(i);if(s.errors.length>0)return null;let c=gn(i),u=qg(i,c),p=s.tokens,g=p.findIndex(x=>x.startOffset<=a&&x.endOffset>=a);if(g===-1)return null;let S=n.find(x=>x.isMatch(g,p,u));return S?{contents:{kind:"markdown",value:S.render(g,p,u)},range:{start:o.positionAt(p[g].startOffset),end:o.positionAt(p[g].endOffset+1)}}:null}r(tI,"onHoverDocument");var Wg=class extends Wr{static{r(this,"QueryFilterMessageProvider")}constructor(t){super(),this.parseFilters(t)}parseFilters(t){this.__filterDoc={};let n=[],o="";for(let i of t.split(`
`))i.startsWith("#")?(o&&(this.__filterDoc[o]=n.join(`
`).trim()),o=i.slice(2).trim(),n=[]):n.push(i);o&&n.length&&(this.__filterDoc[o]=n.join(`
`).trim())}findFilter(t,n){let o=n[t];if(!(o.tokenType.name==="Identifier"||o.tokenType.LONGER_ALT&&o.tokenType.LONGER_ALT.name==="Identifier"||o.tokenType.CATEGORIES&&o.tokenType.CATEGORIES.some(s=>s.name==="Identifier")))return null;let a=o.image;return this.__filterDoc[a]?a:null}isMatch(t,n,o){if(t===0||!(n[t-1].image==="|"))return!1;for(let s=t-2;s>=0;s--){let c=n[s];if(c.image==="where"&&s+1<n.length&&n[s+1].image==="=")return!!this.findFilter(t,n);if(c.image==="{"||c.image==="}"||c.image===`
`||c.image==="query")break}return!1}render(t,n){let o=this.findFilter(t,n);if(o)return this.__filterDoc[o]}};var rI=`# covers

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
`;var r3=[new Vg,new Gg($F),new jg(eI),new us(ZF),new Wg(rI)];function nI(e,t){let n=t.get(e.textDocument.uri);if(!n)return null;let o=n.getText(),i=n.offsetAt(e.position);return $l(i,o)?null:tI(e,t,r3)}r(nI,"onHover");function oI(e,t,n){return n3(t,n)}r(oI,"higlightText");function n3(e,t){let n=new t;return Do(e,!0).tokens.forEach(i=>{let a=Pg(i.tokenType.name);if(a){let s=i.startLine-1,c=i.startColumn-1;n.push(s,c,i.image.length,Cc(a),0)}else a===void 0&&console.log(`token type not mapped to a type: ${JSON.stringify(i.tokenType.name)}`)}),n.build()}r(n3,"higlightDefault");function iI(e,t,n){let o=t.get(e.textDocument.uri);if(!o)return console.error("onSemanticCheck(): Document not found for URI:",e.textDocument.uri),null;let i=o.getText(),a=gn(i);return oI(a,i,n)}r(iI,"onSemanticCheck");var zn=(0,qo.createConnection)(qo.ProposedFeatures.all),ds=new qo.TextDocuments(Zl);zn.onInitialize(()=>(zn.console.log("XanoScript Language Server initialized"),{capabilities:{completionProvider:{resolveProvider:!1,triggerCharacters:[".",":","$","|"]},textDocumentSync:1,semanticTokensProvider:{documentSelector:[{language:"xanoscript"}],legend:{tokenTypes:wS,tokenModifiers:[]},full:!0},hoverProvider:!0}}));zn.onHover(e=>nI(e,ds));zn.onCompletion(e=>QF(e,ds));zn.onRequest("textDocument/semanticTokens/full",e=>iI(e,ds,qo.SemanticTokensBuilder));ds.onDidChangeContent(e=>XF(e,zn));zn.onDidOpenTextDocument(e=>{console.log("Document opened:",e.textDocument.uri)});ds.listen(zn);zn.listen();0&&(module.exports={documents});
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
