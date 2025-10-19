"use strict";var FI=Object.create;var Ka=Object.defineProperty;var II=Object.getOwnPropertyDescriptor;var PI=Object.getOwnPropertyNames;var DI=Object.getPrototypeOf,qI=Object.prototype.hasOwnProperty;var r=(e,t)=>Ka(e,"name",{value:t,configurable:!0});var BI=(e,t)=>()=>(e&&(t=e(e=0)),t);var j=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),GI=(e,t)=>{for(var n in t)Ka(e,n,{get:t[n],enumerable:!0})},Fy=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of PI(t))!qI.call(e,i)&&i!==n&&Ka(e,i,{get:()=>t[i],enumerable:!(o=II(t,i))||o.enumerable});return e};var jI=(e,t,n)=>(n=e!=null?FI(DI(e)):{},Fy(t||!e||!e.__esModule?Ka(n,"default",{value:e,enumerable:!0}):n,e)),qg=e=>Fy(Ka({},"__esModule",{value:!0}),e);var Po=j(Ot=>{"use strict";Object.defineProperty(Ot,"__esModule",{value:!0});Ot.stringArray=Ot.array=Ot.func=Ot.error=Ot.number=Ot.string=Ot.boolean=void 0;function VI(e){return e===!0||e===!1}r(VI,"boolean");Ot.boolean=VI;function Iy(e){return typeof e=="string"||e instanceof String}r(Iy,"string");Ot.string=Iy;function WI(e){return typeof e=="number"||e instanceof Number}r(WI,"number");Ot.number=WI;function zI(e){return e instanceof Error}r(zI,"error");Ot.error=zI;function HI(e){return typeof e=="function"}r(HI,"func");Ot.func=HI;function Py(e){return Array.isArray(e)}r(Py,"array");Ot.array=Py;function YI(e){return Py(e)&&e.every(t=>Iy(t))}r(YI,"stringArray");Ot.stringArray=YI});var uT=j(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});K.Message=K.NotificationType9=K.NotificationType8=K.NotificationType7=K.NotificationType6=K.NotificationType5=K.NotificationType4=K.NotificationType3=K.NotificationType2=K.NotificationType1=K.NotificationType0=K.NotificationType=K.RequestType9=K.RequestType8=K.RequestType7=K.RequestType6=K.RequestType5=K.RequestType4=K.RequestType3=K.RequestType2=K.RequestType1=K.RequestType=K.RequestType0=K.AbstractMessageSignature=K.ParameterStructures=K.ResponseError=K.ErrorCodes=void 0;var go=Po(),Bg;(function(e){e.ParseError=-32700,e.InvalidRequest=-32600,e.MethodNotFound=-32601,e.InvalidParams=-32602,e.InternalError=-32603,e.jsonrpcReservedErrorRangeStart=-32099,e.serverErrorStart=-32099,e.MessageWriteError=-32099,e.MessageReadError=-32098,e.PendingResponseRejected=-32097,e.ConnectionInactive=-32096,e.ServerNotInitialized=-32002,e.UnknownErrorCode=-32001,e.jsonrpcReservedErrorRangeEnd=-32e3,e.serverErrorEnd=-32e3})(Bg||(K.ErrorCodes=Bg={}));var Gg=class e extends Error{static{r(this,"ResponseError")}constructor(t,n,o){super(n),this.code=go.number(t)?t:Bg.UnknownErrorCode,this.data=o,Object.setPrototypeOf(this,e.prototype)}toJson(){let t={code:this.code,message:this.message};return this.data!==void 0&&(t.data=this.data),t}};K.ResponseError=Gg;var Xt=class e{static{r(this,"ParameterStructures")}constructor(t){this.kind=t}static is(t){return t===e.auto||t===e.byName||t===e.byPosition}toString(){return this.kind}};K.ParameterStructures=Xt;Xt.auto=new Xt("auto");Xt.byPosition=new Xt("byPosition");Xt.byName=new Xt("byName");var Ce=class{static{r(this,"AbstractMessageSignature")}constructor(t,n){this.method=t,this.numberOfParams=n}get parameterStructures(){return Xt.auto}};K.AbstractMessageSignature=Ce;var jg=class extends Ce{static{r(this,"RequestType0")}constructor(t){super(t,0)}};K.RequestType0=jg;var Vg=class extends Ce{static{r(this,"RequestType")}constructor(t,n=Xt.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};K.RequestType=Vg;var Wg=class extends Ce{static{r(this,"RequestType1")}constructor(t,n=Xt.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};K.RequestType1=Wg;var zg=class extends Ce{static{r(this,"RequestType2")}constructor(t){super(t,2)}};K.RequestType2=zg;var Hg=class extends Ce{static{r(this,"RequestType3")}constructor(t){super(t,3)}};K.RequestType3=Hg;var Yg=class extends Ce{static{r(this,"RequestType4")}constructor(t){super(t,4)}};K.RequestType4=Yg;var Kg=class extends Ce{static{r(this,"RequestType5")}constructor(t){super(t,5)}};K.RequestType5=Kg;var Jg=class extends Ce{static{r(this,"RequestType6")}constructor(t){super(t,6)}};K.RequestType6=Jg;var Qg=class extends Ce{static{r(this,"RequestType7")}constructor(t){super(t,7)}};K.RequestType7=Qg;var Xg=class extends Ce{static{r(this,"RequestType8")}constructor(t){super(t,8)}};K.RequestType8=Xg;var Zg=class extends Ce{static{r(this,"RequestType9")}constructor(t){super(t,9)}};K.RequestType9=Zg;var $g=class extends Ce{static{r(this,"NotificationType")}constructor(t,n=Xt.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};K.NotificationType=$g;var eT=class extends Ce{static{r(this,"NotificationType0")}constructor(t){super(t,0)}};K.NotificationType0=eT;var tT=class extends Ce{static{r(this,"NotificationType1")}constructor(t,n=Xt.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};K.NotificationType1=tT;var rT=class extends Ce{static{r(this,"NotificationType2")}constructor(t){super(t,2)}};K.NotificationType2=rT;var nT=class extends Ce{static{r(this,"NotificationType3")}constructor(t){super(t,3)}};K.NotificationType3=nT;var oT=class extends Ce{static{r(this,"NotificationType4")}constructor(t){super(t,4)}};K.NotificationType4=oT;var iT=class extends Ce{static{r(this,"NotificationType5")}constructor(t){super(t,5)}};K.NotificationType5=iT;var aT=class extends Ce{static{r(this,"NotificationType6")}constructor(t){super(t,6)}};K.NotificationType6=aT;var sT=class extends Ce{static{r(this,"NotificationType7")}constructor(t){super(t,7)}};K.NotificationType7=sT;var cT=class extends Ce{static{r(this,"NotificationType8")}constructor(t){super(t,8)}};K.NotificationType8=cT;var lT=class extends Ce{static{r(this,"NotificationType9")}constructor(t){super(t,9)}};K.NotificationType9=lT;var Dy;(function(e){function t(i){let a=i;return a&&go.string(a.method)&&(go.string(a.id)||go.number(a.id))}r(t,"isRequest"),e.isRequest=t;function n(i){let a=i;return a&&go.string(a.method)&&i.id===void 0}r(n,"isNotification"),e.isNotification=n;function o(i){let a=i;return a&&(a.result!==void 0||!!a.error)&&(go.string(a.id)||go.number(a.id)||a.id===null)}r(o,"isResponse"),e.isResponse=o})(Dy||(K.Message=Dy={}))});var pT=j(xn=>{"use strict";var qy;Object.defineProperty(xn,"__esModule",{value:!0});xn.LRUCache=xn.LinkedMap=xn.Touch=void 0;var Lt;(function(e){e.None=0,e.First=1,e.AsOld=e.First,e.Last=2,e.AsNew=e.Last})(Lt||(xn.Touch=Lt={}));var _c=class{static{r(this,"LinkedMap")}constructor(){this[qy]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(t){return this._map.has(t)}get(t,n=Lt.None){let o=this._map.get(t);if(o)return n!==Lt.None&&this.touch(o,n),o.value}set(t,n,o=Lt.None){let i=this._map.get(t);if(i)i.value=n,o!==Lt.None&&this.touch(i,o);else{switch(i={key:t,value:n,next:void 0,previous:void 0},o){case Lt.None:this.addItemLast(i);break;case Lt.First:this.addItemFirst(i);break;case Lt.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(t,i),this._size++}return this}delete(t){return!!this.remove(t)}remove(t){let n=this._map.get(t);if(n)return this._map.delete(t),this.removeItem(n),this._size--,n.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let t=this._head;return this._map.delete(t.key),this.removeItem(t),this._size--,t.value}forEach(t,n){let o=this._state,i=this._head;for(;i;){if(n?t.bind(n)(i.value,i.key,this):t(i.value,i.key,this),this._state!==o)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let t=this._state,n=this._head,o={[Symbol.iterator]:()=>o,next:r(()=>{if(this._state!==t)throw new Error("LinkedMap got modified during iteration.");if(n){let i={value:n.key,done:!1};return n=n.next,i}else return{value:void 0,done:!0}},"next")};return o}values(){let t=this._state,n=this._head,o={[Symbol.iterator]:()=>o,next:r(()=>{if(this._state!==t)throw new Error("LinkedMap got modified during iteration.");if(n){let i={value:n.value,done:!1};return n=n.next,i}else return{value:void 0,done:!0}},"next")};return o}entries(){let t=this._state,n=this._head,o={[Symbol.iterator]:()=>o,next:r(()=>{if(this._state!==t)throw new Error("LinkedMap got modified during iteration.");if(n){let i={value:[n.key,n.value],done:!1};return n=n.next,i}else return{value:void 0,done:!0}},"next")};return o}[(qy=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(t){if(t>=this.size)return;if(t===0){this.clear();return}let n=this._head,o=this.size;for(;n&&o>t;)this._map.delete(n.key),n=n.next,o--;this._head=n,this._size=o,n&&(n.previous=void 0),this._state++}addItemFirst(t){if(!this._head&&!this._tail)this._tail=t;else if(this._head)t.next=this._head,this._head.previous=t;else throw new Error("Invalid list");this._head=t,this._state++}addItemLast(t){if(!this._head&&!this._tail)this._head=t;else if(this._tail)t.previous=this._tail,this._tail.next=t;else throw new Error("Invalid list");this._tail=t,this._state++}removeItem(t){if(t===this._head&&t===this._tail)this._head=void 0,this._tail=void 0;else if(t===this._head){if(!t.next)throw new Error("Invalid list");t.next.previous=void 0,this._head=t.next}else if(t===this._tail){if(!t.previous)throw new Error("Invalid list");t.previous.next=void 0,this._tail=t.previous}else{let n=t.next,o=t.previous;if(!n||!o)throw new Error("Invalid list");n.previous=o,o.next=n}t.next=void 0,t.previous=void 0,this._state++}touch(t,n){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(n!==Lt.First&&n!==Lt.Last)){if(n===Lt.First){if(t===this._head)return;let o=t.next,i=t.previous;t===this._tail?(i.next=void 0,this._tail=i):(o.previous=i,i.next=o),t.previous=void 0,t.next=this._head,this._head.previous=t,this._head=t,this._state++}else if(n===Lt.Last){if(t===this._tail)return;let o=t.next,i=t.previous;t===this._head?(o.previous=void 0,this._head=o):(o.previous=i,i.next=o),t.next=void 0,t.previous=this._tail,this._tail.next=t,this._tail=t,this._state++}}}toJSON(){let t=[];return this.forEach((n,o)=>{t.push([o,n])}),t}fromJSON(t){this.clear();for(let[n,o]of t)this.set(n,o)}};xn.LinkedMap=_c;var dT=class extends _c{static{r(this,"LRUCache")}constructor(t,n=1){super(),this._limit=t,this._ratio=Math.min(Math.max(0,n),1)}get limit(){return this._limit}set limit(t){this._limit=t,this.checkTrim()}get ratio(){return this._ratio}set ratio(t){this._ratio=Math.min(Math.max(0,t),1),this.checkTrim()}get(t,n=Lt.AsNew){return super.get(t,n)}peek(t){return super.get(t,Lt.None)}set(t,n){return super.set(t,n,Lt.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};xn.LRUCache=dT});var Gy=j(xc=>{"use strict";Object.defineProperty(xc,"__esModule",{value:!0});xc.Disposable=void 0;var By;(function(e){function t(n){return{dispose:n}}r(t,"create"),e.create=t})(By||(xc.Disposable=By={}))});var bn=j(hT=>{"use strict";Object.defineProperty(hT,"__esModule",{value:!0});var fT;function mT(){if(fT===void 0)throw new Error("No runtime abstraction layer installed");return fT}r(mT,"RAL");(function(e){function t(n){if(n===void 0)throw new Error("No runtime abstraction layer provided");fT=n}r(t,"install"),e.install=t})(mT||(mT={}));hT.default=mT});var qo=j(Do=>{"use strict";Object.defineProperty(Do,"__esModule",{value:!0});Do.Emitter=Do.Event=void 0;var KI=bn(),jy;(function(e){let t={dispose(){}};e.None=function(){return t}})(jy||(Do.Event=jy={}));var gT=class{static{r(this,"CallbackList")}add(t,n=null,o){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(t),this._contexts.push(n),Array.isArray(o)&&o.push({dispose:r(()=>this.remove(t,n),"dispose")})}remove(t,n=null){if(!this._callbacks)return;let o=!1;for(let i=0,a=this._callbacks.length;i<a;i++)if(this._callbacks[i]===t)if(this._contexts[i]===n){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else o=!0;if(o)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...t){if(!this._callbacks)return[];let n=[],o=this._callbacks.slice(0),i=this._contexts.slice(0);for(let a=0,s=o.length;a<s;a++)try{n.push(o[a].apply(i[a],t))}catch(c){(0,KI.default)().console.error(c)}return n}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},bc=class e{static{r(this,"Emitter")}constructor(t){this._options=t}get event(){return this._event||(this._event=(t,n,o)=>{this._callbacks||(this._callbacks=new gT),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(t,n);let i={dispose:r(()=>{this._callbacks&&(this._callbacks.remove(t,n),i.dispose=e._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))},"dispose")};return Array.isArray(o)&&o.push(i),i}),this._event}fire(t){this._callbacks&&this._callbacks.invoke.call(this._callbacks,t)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};Do.Emitter=bc;bc._noop=function(){}});var kc=j(Bo=>{"use strict";Object.defineProperty(Bo,"__esModule",{value:!0});Bo.CancellationTokenSource=Bo.CancellationToken=void 0;var JI=bn(),QI=Po(),TT=qo(),Rc;(function(e){e.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:TT.Event.None}),e.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:TT.Event.None});function t(n){let o=n;return o&&(o===e.None||o===e.Cancelled||QI.boolean(o.isCancellationRequested)&&!!o.onCancellationRequested)}r(t,"is"),e.is=t})(Rc||(Bo.CancellationToken=Rc={}));var XI=Object.freeze(function(e,t){let n=(0,JI.default)().timer.setTimeout(e.bind(t),0);return{dispose(){n.dispose()}}}),Ac=class{static{r(this,"MutableToken")}constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?XI:(this._emitter||(this._emitter=new TT.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},ET=class{static{r(this,"CancellationTokenSource")}get token(){return this._token||(this._token=new Ac),this._token}cancel(){this._token?this._token.cancel():this._token=Rc.Cancelled}dispose(){this._token?this._token instanceof Ac&&this._token.dispose():this._token=Rc.None}};Bo.CancellationTokenSource=ET});var Vy=j(Go=>{"use strict";Object.defineProperty(Go,"__esModule",{value:!0});Go.SharedArrayReceiverStrategy=Go.SharedArraySenderStrategy=void 0;var ZI=kc(),Ja;(function(e){e.Continue=0,e.Cancelled=1})(Ja||(Ja={}));var ST=class{static{r(this,"SharedArraySenderStrategy")}constructor(){this.buffers=new Map}enableCancellation(t){if(t.id===null)return;let n=new SharedArrayBuffer(4),o=new Int32Array(n,0,1);o[0]=Ja.Continue,this.buffers.set(t.id,n),t.$cancellationData=n}async sendCancellation(t,n){let o=this.buffers.get(n);if(o===void 0)return;let i=new Int32Array(o,0,1);Atomics.store(i,0,Ja.Cancelled)}cleanup(t){this.buffers.delete(t)}dispose(){this.buffers.clear()}};Go.SharedArraySenderStrategy=ST;var yT=class{static{r(this,"SharedArrayBufferCancellationToken")}constructor(t){this.data=new Int32Array(t,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===Ja.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},_T=class{static{r(this,"SharedArrayBufferCancellationTokenSource")}constructor(t){this.token=new yT(t)}cancel(){}dispose(){}},xT=class{static{r(this,"SharedArrayReceiverStrategy")}constructor(){this.kind="request"}createCancellationTokenSource(t){let n=t.$cancellationData;return n===void 0?new ZI.CancellationTokenSource:new _T(n)}};Go.SharedArrayReceiverStrategy=xT});var RT=j(Uc=>{"use strict";Object.defineProperty(Uc,"__esModule",{value:!0});Uc.Semaphore=void 0;var $I=bn(),bT=class{static{r(this,"Semaphore")}constructor(t=1){if(t<=0)throw new Error("Capacity must be greater than 0");this._capacity=t,this._active=0,this._waiting=[]}lock(t){return new Promise((n,o)=>{this._waiting.push({thunk:t,resolve:n,reject:o}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,$I.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let t=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let n=t.thunk();n instanceof Promise?n.then(o=>{this._active--,t.resolve(o),this.runNext()},o=>{this._active--,t.reject(o),this.runNext()}):(this._active--,t.resolve(n),this.runNext())}catch(n){this._active--,t.reject(n),this.runNext()}}};Uc.Semaphore=bT});var zy=j(Rn=>{"use strict";Object.defineProperty(Rn,"__esModule",{value:!0});Rn.ReadableStreamMessageReader=Rn.AbstractMessageReader=Rn.MessageReader=void 0;var kT=bn(),jo=Po(),AT=qo(),eP=RT(),Wy;(function(e){function t(n){let o=n;return o&&jo.func(o.listen)&&jo.func(o.dispose)&&jo.func(o.onError)&&jo.func(o.onClose)&&jo.func(o.onPartialMessage)}r(t,"is"),e.is=t})(Wy||(Rn.MessageReader=Wy={}));var Cc=class{static{r(this,"AbstractMessageReader")}constructor(){this.errorEmitter=new AT.Emitter,this.closeEmitter=new AT.Emitter,this.partialMessageEmitter=new AT.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(t){this.errorEmitter.fire(this.asError(t))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(t){this.partialMessageEmitter.fire(t)}asError(t){return t instanceof Error?t:new Error(`Reader received error. Reason: ${jo.string(t.message)?t.message:"unknown"}`)}};Rn.AbstractMessageReader=Cc;var UT;(function(e){function t(n){let o,i,a,s=new Map,c,l=new Map;if(n===void 0||typeof n=="string")o=n??"utf-8";else{if(o=n.charset??"utf-8",n.contentDecoder!==void 0&&(a=n.contentDecoder,s.set(a.name,a)),n.contentDecoders!==void 0)for(let d of n.contentDecoders)s.set(d.name,d);if(n.contentTypeDecoder!==void 0&&(c=n.contentTypeDecoder,l.set(c.name,c)),n.contentTypeDecoders!==void 0)for(let d of n.contentTypeDecoders)l.set(d.name,d)}return c===void 0&&(c=(0,kT.default)().applicationJson.decoder,l.set(c.name,c)),{charset:o,contentDecoder:a,contentDecoders:s,contentTypeDecoder:c,contentTypeDecoders:l}}r(t,"fromOptions"),e.fromOptions=t})(UT||(UT={}));var CT=class extends Cc{static{r(this,"ReadableStreamMessageReader")}constructor(t,n){super(),this.readable=t,this.options=UT.fromOptions(n),this.buffer=(0,kT.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new eP.Semaphore(1)}set partialMessageTimeout(t){this._partialMessageTimeout=t}get partialMessageTimeout(){return this._partialMessageTimeout}listen(t){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=t;let n=this.readable.onData(o=>{this.onData(o)});return this.readable.onError(o=>this.fireError(o)),this.readable.onClose(()=>this.fireClose()),n}onData(t){try{for(this.buffer.append(t);;){if(this.nextMessageLength===-1){let o=this.buffer.tryReadHeaders(!0);if(!o)return;let i=o.get("content-length");if(!i){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(o))}`));return}let a=parseInt(i);if(isNaN(a)){this.fireError(new Error(`Content-Length value must be a number. Got ${i}`));return}this.nextMessageLength=a}let n=this.buffer.tryReadBody(this.nextMessageLength);if(n===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let o=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(n):n,i=await this.options.contentTypeDecoder.decode(o,this.options);this.callback(i)}).catch(o=>{this.fireError(o)})}}catch(n){this.fireError(n)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,kT.default)().timer.setTimeout((t,n)=>{this.partialMessageTimer=void 0,t===this.messageToken&&(this.firePartialMessage({messageToken:t,waitingTime:n}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};Rn.ReadableStreamMessageReader=CT});var Qy=j(An=>{"use strict";Object.defineProperty(An,"__esModule",{value:!0});An.WriteableStreamMessageWriter=An.AbstractMessageWriter=An.MessageWriter=void 0;var Hy=bn(),Qa=Po(),tP=RT(),Yy=qo(),rP="Content-Length: ",Ky=`\r
`,Jy;(function(e){function t(n){let o=n;return o&&Qa.func(o.dispose)&&Qa.func(o.onClose)&&Qa.func(o.onError)&&Qa.func(o.write)}r(t,"is"),e.is=t})(Jy||(An.MessageWriter=Jy={}));var vc=class{static{r(this,"AbstractMessageWriter")}constructor(){this.errorEmitter=new Yy.Emitter,this.closeEmitter=new Yy.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(t,n,o){this.errorEmitter.fire([this.asError(t),n,o])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(t){return t instanceof Error?t:new Error(`Writer received error. Reason: ${Qa.string(t.message)?t.message:"unknown"}`)}};An.AbstractMessageWriter=vc;var vT;(function(e){function t(n){return n===void 0||typeof n=="string"?{charset:n??"utf-8",contentTypeEncoder:(0,Hy.default)().applicationJson.encoder}:{charset:n.charset??"utf-8",contentEncoder:n.contentEncoder,contentTypeEncoder:n.contentTypeEncoder??(0,Hy.default)().applicationJson.encoder}}r(t,"fromOptions"),e.fromOptions=t})(vT||(vT={}));var OT=class extends vc{static{r(this,"WriteableStreamMessageWriter")}constructor(t,n){super(),this.writable=t,this.options=vT.fromOptions(n),this.errorCount=0,this.writeSemaphore=new tP.Semaphore(1),this.writable.onError(o=>this.fireError(o)),this.writable.onClose(()=>this.fireClose())}async write(t){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(t,this.options).then(o=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(o):o).then(o=>{let i=[];return i.push(rP,o.byteLength.toString(),Ky),i.push(Ky),this.doWrite(t,i,o)},o=>{throw this.fireError(o),o}))}async doWrite(t,n,o){try{return await this.writable.write(n.join(""),"ascii"),this.writable.write(o)}catch(i){return this.handleError(i,t),Promise.reject(i)}}handleError(t,n){this.errorCount++,this.fireError(t,n,this.errorCount)}end(){this.writable.end()}};An.WriteableStreamMessageWriter=OT});var Xy=j(Oc=>{"use strict";Object.defineProperty(Oc,"__esModule",{value:!0});Oc.AbstractMessageBuffer=void 0;var nP=13,oP=10,iP=`\r
`,LT=class{static{r(this,"AbstractMessageBuffer")}constructor(t="utf-8"){this._encoding=t,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(t){let n=typeof t=="string"?this.fromString(t,this._encoding):t;this._chunks.push(n),this._totalLength+=n.byteLength}tryReadHeaders(t=!1){if(this._chunks.length===0)return;let n=0,o=0,i=0,a=0;e:for(;o<this._chunks.length;){let d=this._chunks[o];for(i=0;i<d.length;){switch(d[i]){case nP:switch(n){case 0:n=1;break;case 2:n=3;break;default:n=0}break;case oP:switch(n){case 1:n=2;break;case 3:n=4,i++;break e;default:n=0}break;default:n=0}i++}a+=d.byteLength,o++}if(n!==4)return;let s=this._read(a+i),c=new Map,l=this.toString(s,"ascii").split(iP);if(l.length<2)return c;for(let d=0;d<l.length-2;d++){let f=l[d],g=f.indexOf(":");if(g===-1)throw new Error(`Message header must separate key and value using ':'
${f}`);let _=f.substr(0,g),y=f.substr(g+1).trim();c.set(t?_.toLowerCase():_,y)}return c}tryReadBody(t){if(!(this._totalLength<t))return this._read(t)}get numberOfBytes(){return this._totalLength}_read(t){if(t===0)return this.emptyBuffer();if(t>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===t){let a=this._chunks[0];return this._chunks.shift(),this._totalLength-=t,this.asNative(a)}if(this._chunks[0].byteLength>t){let a=this._chunks[0],s=this.asNative(a,t);return this._chunks[0]=a.slice(t),this._totalLength-=t,s}let n=this.allocNative(t),o=0,i=0;for(;t>0;){let a=this._chunks[i];if(a.byteLength>t){let s=a.slice(0,t);n.set(s,o),o+=t,this._chunks[i]=a.slice(t),this._totalLength-=t,t-=t}else n.set(a,o),o+=a.byteLength,this._chunks.shift(),this._totalLength-=a.byteLength,t-=a.byteLength}return n}};Oc.AbstractMessageBuffer=LT});var r_=j(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});Z.createMessageConnection=Z.ConnectionOptions=Z.MessageStrategy=Z.CancellationStrategy=Z.CancellationSenderStrategy=Z.CancellationReceiverStrategy=Z.RequestCancellationReceiverStrategy=Z.IdCancellationReceiverStrategy=Z.ConnectionStrategy=Z.ConnectionError=Z.ConnectionErrors=Z.LogTraceNotification=Z.SetTraceNotification=Z.TraceFormat=Z.TraceValues=Z.Trace=Z.NullLogger=Z.ProgressType=Z.ProgressToken=void 0;var Zy=bn(),qe=Po(),Q=uT(),$y=pT(),Xa=qo(),NT=kc(),es;(function(e){e.type=new Q.NotificationType("$/cancelRequest")})(es||(es={}));var MT;(function(e){function t(n){return typeof n=="string"||typeof n=="number"}r(t,"is"),e.is=t})(MT||(Z.ProgressToken=MT={}));var Za;(function(e){e.type=new Q.NotificationType("$/progress")})(Za||(Za={}));var wT=class{static{r(this,"ProgressType")}constructor(){}};Z.ProgressType=wT;var FT;(function(e){function t(n){return qe.func(n)}r(t,"is"),e.is=t})(FT||(FT={}));Z.NullLogger=Object.freeze({error:r(()=>{},"error"),warn:r(()=>{},"warn"),info:r(()=>{},"info"),log:r(()=>{},"log")});var me;(function(e){e[e.Off=0]="Off",e[e.Messages=1]="Messages",e[e.Compact=2]="Compact",e[e.Verbose=3]="Verbose"})(me||(Z.Trace=me={}));var e_;(function(e){e.Off="off",e.Messages="messages",e.Compact="compact",e.Verbose="verbose"})(e_||(Z.TraceValues=e_={}));(function(e){function t(o){if(!qe.string(o))return e.Off;switch(o=o.toLowerCase(),o){case"off":return e.Off;case"messages":return e.Messages;case"compact":return e.Compact;case"verbose":return e.Verbose;default:return e.Off}}r(t,"fromString"),e.fromString=t;function n(o){switch(o){case e.Off:return"off";case e.Messages:return"messages";case e.Compact:return"compact";case e.Verbose:return"verbose";default:return"off"}}r(n,"toString"),e.toString=n})(me||(Z.Trace=me={}));var cr;(function(e){e.Text="text",e.JSON="json"})(cr||(Z.TraceFormat=cr={}));(function(e){function t(n){return qe.string(n)?(n=n.toLowerCase(),n==="json"?e.JSON:e.Text):e.Text}r(t,"fromString"),e.fromString=t})(cr||(Z.TraceFormat=cr={}));var IT;(function(e){e.type=new Q.NotificationType("$/setTrace")})(IT||(Z.SetTraceNotification=IT={}));var Lc;(function(e){e.type=new Q.NotificationType("$/logTrace")})(Lc||(Z.LogTraceNotification=Lc={}));var $a;(function(e){e[e.Closed=1]="Closed",e[e.Disposed=2]="Disposed",e[e.AlreadyListening=3]="AlreadyListening"})($a||(Z.ConnectionErrors=$a={}));var Vo=class e extends Error{static{r(this,"ConnectionError")}constructor(t,n){super(n),this.code=t,Object.setPrototypeOf(this,e.prototype)}};Z.ConnectionError=Vo;var PT;(function(e){function t(n){let o=n;return o&&qe.func(o.cancelUndispatched)}r(t,"is"),e.is=t})(PT||(Z.ConnectionStrategy=PT={}));var Nc;(function(e){function t(n){let o=n;return o&&(o.kind===void 0||o.kind==="id")&&qe.func(o.createCancellationTokenSource)&&(o.dispose===void 0||qe.func(o.dispose))}r(t,"is"),e.is=t})(Nc||(Z.IdCancellationReceiverStrategy=Nc={}));var DT;(function(e){function t(n){let o=n;return o&&o.kind==="request"&&qe.func(o.createCancellationTokenSource)&&(o.dispose===void 0||qe.func(o.dispose))}r(t,"is"),e.is=t})(DT||(Z.RequestCancellationReceiverStrategy=DT={}));var Mc;(function(e){e.Message=Object.freeze({createCancellationTokenSource(n){return new NT.CancellationTokenSource}});function t(n){return Nc.is(n)||DT.is(n)}r(t,"is"),e.is=t})(Mc||(Z.CancellationReceiverStrategy=Mc={}));var wc;(function(e){e.Message=Object.freeze({sendCancellation(n,o){return n.sendNotification(es.type,{id:o})},cleanup(n){}});function t(n){let o=n;return o&&qe.func(o.sendCancellation)&&qe.func(o.cleanup)}r(t,"is"),e.is=t})(wc||(Z.CancellationSenderStrategy=wc={}));var Fc;(function(e){e.Message=Object.freeze({receiver:Mc.Message,sender:wc.Message});function t(n){let o=n;return o&&Mc.is(o.receiver)&&wc.is(o.sender)}r(t,"is"),e.is=t})(Fc||(Z.CancellationStrategy=Fc={}));var Ic;(function(e){function t(n){let o=n;return o&&qe.func(o.handleMessage)}r(t,"is"),e.is=t})(Ic||(Z.MessageStrategy=Ic={}));var t_;(function(e){function t(n){let o=n;return o&&(Fc.is(o.cancellationStrategy)||PT.is(o.connectionStrategy)||Ic.is(o.messageStrategy))}r(t,"is"),e.is=t})(t_||(Z.ConnectionOptions=t_={}));var vr;(function(e){e[e.New=1]="New",e[e.Listening=2]="Listening",e[e.Closed=3]="Closed",e[e.Disposed=4]="Disposed"})(vr||(vr={}));function aP(e,t,n,o){let i=n!==void 0?n:Z.NullLogger,a=0,s=0,c=0,l="2.0",d,f=new Map,g,_=new Map,y=new Map,M,L=new $y.LinkedMap,q=new Map,N=new Set,S=new Map,h=me.Off,C=cr.Text,P,le=vr.New,an=new Xa.Emitter,sr=new Xa.Emitter,Mo=new Xa.Emitter,Sn=new Xa.Emitter,kr=new Xa.Emitter,Kt=o&&o.cancellationStrategy?o.cancellationStrategy:Fc.Message;function Tc(T){if(T===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+T.toString()}r(Tc,"createRequestQueueKey");function ja(T){return T===null?"res-unknown-"+(++c).toString():"res-"+T.toString()}r(ja,"createResponseQueueKey");function wo(){return"not-"+(++s).toString()}r(wo,"createNotificationQueueKey");function Pr(T,O){Q.Message.isRequest(O)?T.set(Tc(O.id),O):Q.Message.isResponse(O)?T.set(ja(O.id),O):T.set(wo(),O)}r(Pr,"addMessageToQueue");function mo(T){}r(mo,"cancelUndispatched");function ho(){return le===vr.Listening}r(ho,"isListening");function Va(){return le===vr.Closed}r(Va,"isClosed");function fr(){return le===vr.Disposed}r(fr,"isDisposed");function Wa(){(le===vr.New||le===vr.Listening)&&(le=vr.Closed,sr.fire(void 0))}r(Wa,"closeHandler");function Ec(T){an.fire([T,void 0,void 0])}r(Ec,"readErrorHandler");function Ig(T){an.fire(T)}r(Ig,"writeErrorHandler"),e.onClose(Wa),e.onError(Ec),t.onClose(Wa),t.onError(Ig);function za(){M||L.size===0||(M=(0,Zy.default)().timer.setImmediate(()=>{M=void 0,Sc()}))}r(za,"triggerMessageQueue");function Jt(T){Q.Message.isRequest(T)?Qt(T):Q.Message.isNotification(T)?Gt(T):Q.Message.isResponse(T)?yn(T):Ur(T)}r(Jt,"handleMessage");function Sc(){if(L.size===0)return;let T=L.shift();try{let O=o?.messageStrategy;Ic.is(O)?O.handleMessage(T,Jt):Jt(T)}finally{za()}}r(Sc,"processMessageQueue");let St=r(T=>{try{if(Q.Message.isNotification(T)&&T.method===es.type.method){let O=T.params.id,I=Tc(O),z=L.get(I);if(Q.Message.isRequest(z)){let ye=o?.connectionStrategy,Ye=ye&&ye.cancelUndispatched?ye.cancelUndispatched(z,mo):void 0;if(Ye&&(Ye.error!==void 0||Ye.result!==void 0)){L.delete(I),S.delete(O),Ye.id=z.id,_n(Ye,T.method,Date.now()),t.write(Ye).catch(()=>i.error("Sending response for canceled message failed."));return}}let Ue=S.get(O);if(Ue!==void 0){Ue.cancel(),Pg(T);return}else N.add(O)}Pr(L,T)}finally{za()}},"callback");function Qt(T){if(fr())return;function O(ue,De,Ee){let mt={jsonrpc:l,id:T.id};ue instanceof Q.ResponseError?mt.error=ue.toJson():mt.result=ue===void 0?null:ue,_n(mt,De,Ee),t.write(mt).catch(()=>i.error("Sending response failed."))}r(O,"reply");function I(ue,De,Ee){let mt={jsonrpc:l,id:T.id,error:ue.toJson()};_n(mt,De,Ee),t.write(mt).catch(()=>i.error("Sending response failed."))}r(I,"replyError");function z(ue,De,Ee){ue===void 0&&(ue=null);let mt={jsonrpc:l,id:T.id,result:ue};_n(mt,De,Ee),t.write(mt).catch(()=>i.error("Sending response failed."))}r(z,"replySuccess"),yc(T);let Ue=f.get(T.method),ye,Ye;Ue&&(ye=Ue.type,Ye=Ue.handler);let et=Date.now();if(Ye||d){let ue=T.id??String(Date.now()),De=Nc.is(Kt.receiver)?Kt.receiver.createCancellationTokenSource(ue):Kt.receiver.createCancellationTokenSource(T);T.id!==null&&N.has(T.id)&&De.cancel(),T.id!==null&&S.set(ue,De);try{let Ee;if(Ye)if(T.params===void 0){if(ye!==void 0&&ye.numberOfParams!==0){I(new Q.ResponseError(Q.ErrorCodes.InvalidParams,`Request ${T.method} defines ${ye.numberOfParams} params but received none.`),T.method,et);return}Ee=Ye(De.token)}else if(Array.isArray(T.params)){if(ye!==void 0&&ye.parameterStructures===Q.ParameterStructures.byName){I(new Q.ResponseError(Q.ErrorCodes.InvalidParams,`Request ${T.method} defines parameters by name but received parameters by position`),T.method,et);return}Ee=Ye(...T.params,De.token)}else{if(ye!==void 0&&ye.parameterStructures===Q.ParameterStructures.byPosition){I(new Q.ResponseError(Q.ErrorCodes.InvalidParams,`Request ${T.method} defines parameters by position but received parameters by name`),T.method,et);return}Ee=Ye(T.params,De.token)}else d&&(Ee=d(T.method,T.params,De.token));let mt=Ee;Ee?mt.then?mt.then(jt=>{S.delete(ue),O(jt,T.method,et)},jt=>{S.delete(ue),jt instanceof Q.ResponseError?I(jt,T.method,et):jt&&qe.string(jt.message)?I(new Q.ResponseError(Q.ErrorCodes.InternalError,`Request ${T.method} failed with message: ${jt.message}`),T.method,et):I(new Q.ResponseError(Q.ErrorCodes.InternalError,`Request ${T.method} failed unexpectedly without providing any details.`),T.method,et)}):(S.delete(ue),O(Ee,T.method,et)):(S.delete(ue),z(Ee,T.method,et))}catch(Ee){S.delete(ue),Ee instanceof Q.ResponseError?O(Ee,T.method,et):Ee&&qe.string(Ee.message)?I(new Q.ResponseError(Q.ErrorCodes.InternalError,`Request ${T.method} failed with message: ${Ee.message}`),T.method,et):I(new Q.ResponseError(Q.ErrorCodes.InternalError,`Request ${T.method} failed unexpectedly without providing any details.`),T.method,et)}}else I(new Q.ResponseError(Q.ErrorCodes.MethodNotFound,`Unhandled method ${T.method}`),T.method,et)}r(Qt,"handleRequest");function yn(T){if(!fr())if(T.id===null)T.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(T.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let O=T.id,I=q.get(O);if(LI(T,I),I!==void 0){q.delete(O);try{if(T.error){let z=T.error;I.reject(new Q.ResponseError(z.code,z.message,z.data))}else if(T.result!==void 0)I.resolve(T.result);else throw new Error("Should never happen.")}catch(z){z.message?i.error(`Response handler '${I.method}' failed with message: ${z.message}`):i.error(`Response handler '${I.method}' failed unexpectedly.`)}}}}r(yn,"handleResponse");function Gt(T){if(fr())return;let O,I;if(T.method===es.type.method){let z=T.params.id;N.delete(z),Pg(T);return}else{let z=_.get(T.method);z&&(I=z.handler,O=z.type)}if(I||g)try{if(Pg(T),I)if(T.params===void 0)O!==void 0&&O.numberOfParams!==0&&O.parameterStructures!==Q.ParameterStructures.byName&&i.error(`Notification ${T.method} defines ${O.numberOfParams} params but received none.`),I();else if(Array.isArray(T.params)){let z=T.params;T.method===Za.type.method&&z.length===2&&MT.is(z[0])?I({token:z[0],value:z[1]}):(O!==void 0&&(O.parameterStructures===Q.ParameterStructures.byName&&i.error(`Notification ${T.method} defines parameters by name but received parameters by position`),O.numberOfParams!==T.params.length&&i.error(`Notification ${T.method} defines ${O.numberOfParams} params but received ${z.length} arguments`)),I(...z))}else O!==void 0&&O.parameterStructures===Q.ParameterStructures.byPosition&&i.error(`Notification ${T.method} defines parameters by position but received parameters by name`),I(T.params);else g&&g(T.method,T.params)}catch(z){z.message?i.error(`Notification handler '${T.method}' failed with message: ${z.message}`):i.error(`Notification handler '${T.method}' failed unexpectedly.`)}else Mo.fire(T)}r(Gt,"handleNotification");function Ur(T){if(!T){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(T,null,4)}`);let O=T;if(qe.string(O.id)||qe.number(O.id)){let I=O.id,z=q.get(I);z&&z.reject(new Error("The received response has neither a result nor an error property."))}}r(Ur,"handleInvalidMessage");function Rt(T){if(T!=null)switch(h){case me.Verbose:return JSON.stringify(T,null,4);case me.Compact:return JSON.stringify(T);default:return}}r(Rt,"stringifyTrace");function Cr(T){if(!(h===me.Off||!P))if(C===cr.Text){let O;(h===me.Verbose||h===me.Compact)&&T.params&&(O=`Params: ${Rt(T.params)}

`),P.log(`Sending request '${T.method} - (${T.id})'.`,O)}else Fo("send-request",T)}r(Cr,"traceSendingRequest");function sn(T){if(!(h===me.Off||!P))if(C===cr.Text){let O;(h===me.Verbose||h===me.Compact)&&(T.params?O=`Params: ${Rt(T.params)}

`:O=`No parameters provided.

`),P.log(`Sending notification '${T.method}'.`,O)}else Fo("send-notification",T)}r(sn,"traceSendingNotification");function _n(T,O,I){if(!(h===me.Off||!P))if(C===cr.Text){let z;(h===me.Verbose||h===me.Compact)&&(T.error&&T.error.data?z=`Error data: ${Rt(T.error.data)}

`:T.result?z=`Result: ${Rt(T.result)}

`:T.error===void 0&&(z=`No result returned.

`)),P.log(`Sending response '${O} - (${T.id})'. Processing request took ${Date.now()-I}ms`,z)}else Fo("send-response",T)}r(_n,"traceSendingResponse");function yc(T){if(!(h===me.Off||!P))if(C===cr.Text){let O;(h===me.Verbose||h===me.Compact)&&T.params&&(O=`Params: ${Rt(T.params)}

`),P.log(`Received request '${T.method} - (${T.id})'.`,O)}else Fo("receive-request",T)}r(yc,"traceReceivedRequest");function Pg(T){if(!(h===me.Off||!P||T.method===Lc.type.method))if(C===cr.Text){let O;(h===me.Verbose||h===me.Compact)&&(T.params?O=`Params: ${Rt(T.params)}

`:O=`No parameters provided.

`),P.log(`Received notification '${T.method}'.`,O)}else Fo("receive-notification",T)}r(Pg,"traceReceivedNotification");function LI(T,O){if(!(h===me.Off||!P))if(C===cr.Text){let I;if((h===me.Verbose||h===me.Compact)&&(T.error&&T.error.data?I=`Error data: ${Rt(T.error.data)}

`:T.result?I=`Result: ${Rt(T.result)}

`:T.error===void 0&&(I=`No result returned.

`)),O){let z=T.error?` Request failed: ${T.error.message} (${T.error.code}).`:"";P.log(`Received response '${O.method} - (${T.id})' in ${Date.now()-O.timerStart}ms.${z}`,I)}else P.log(`Received response ${T.id} without active response promise.`,I)}else Fo("receive-response",T)}r(LI,"traceReceivedResponse");function Fo(T,O){if(!P||h===me.Off)return;let I={isLSPMessage:!0,type:T,message:O,timestamp:Date.now()};P.log(I)}r(Fo,"logLSPMessage");function Ha(){if(Va())throw new Vo($a.Closed,"Connection is closed.");if(fr())throw new Vo($a.Disposed,"Connection is disposed.")}r(Ha,"throwIfClosedOrDisposed");function NI(){if(ho())throw new Vo($a.AlreadyListening,"Connection is already listening")}r(NI,"throwIfListening");function MI(){if(!ho())throw new Error("Call listen() first.")}r(MI,"throwIfNotListening");function Ya(T){return T===void 0?null:T}r(Ya,"undefinedToNull");function Ny(T){if(T!==null)return T}r(Ny,"nullToUndefined");function My(T){return T!=null&&!Array.isArray(T)&&typeof T=="object"}r(My,"isNamedParam");function Dg(T,O){switch(T){case Q.ParameterStructures.auto:return My(O)?Ny(O):[Ya(O)];case Q.ParameterStructures.byName:if(!My(O))throw new Error("Received parameters by name but param is not an object literal.");return Ny(O);case Q.ParameterStructures.byPosition:return[Ya(O)];default:throw new Error(`Unknown parameter structure ${T.toString()}`)}}r(Dg,"computeSingleParam");function wy(T,O){let I,z=T.numberOfParams;switch(z){case 0:I=void 0;break;case 1:I=Dg(T.parameterStructures,O[0]);break;default:I=[];for(let Ue=0;Ue<O.length&&Ue<z;Ue++)I.push(Ya(O[Ue]));if(O.length<z)for(let Ue=O.length;Ue<z;Ue++)I.push(null);break}return I}r(wy,"computeMessageParams");let Io={sendNotification:r((T,...O)=>{Ha();let I,z;if(qe.string(T)){I=T;let ye=O[0],Ye=0,et=Q.ParameterStructures.auto;Q.ParameterStructures.is(ye)&&(Ye=1,et=ye);let ue=O.length,De=ue-Ye;switch(De){case 0:z=void 0;break;case 1:z=Dg(et,O[Ye]);break;default:if(et===Q.ParameterStructures.byName)throw new Error(`Received ${De} parameters for 'by Name' notification parameter structure.`);z=O.slice(Ye,ue).map(Ee=>Ya(Ee));break}}else{let ye=O;I=T.method,z=wy(T,ye)}let Ue={jsonrpc:l,method:I,params:z};return sn(Ue),t.write(Ue).catch(ye=>{throw i.error("Sending notification failed."),ye})},"sendNotification"),onNotification:r((T,O)=>{Ha();let I;return qe.func(T)?g=T:O&&(qe.string(T)?(I=T,_.set(T,{type:void 0,handler:O})):(I=T.method,_.set(T.method,{type:T,handler:O}))),{dispose:r(()=>{I!==void 0?_.delete(I):g=void 0},"dispose")}},"onNotification"),onProgress:r((T,O,I)=>{if(y.has(O))throw new Error(`Progress handler for token ${O} already registered`);return y.set(O,I),{dispose:r(()=>{y.delete(O)},"dispose")}},"onProgress"),sendProgress:r((T,O,I)=>Io.sendNotification(Za.type,{token:O,value:I}),"sendProgress"),onUnhandledProgress:Sn.event,sendRequest:r((T,...O)=>{Ha(),MI();let I,z,Ue;if(qe.string(T)){I=T;let ue=O[0],De=O[O.length-1],Ee=0,mt=Q.ParameterStructures.auto;Q.ParameterStructures.is(ue)&&(Ee=1,mt=ue);let jt=O.length;NT.CancellationToken.is(De)&&(jt=jt-1,Ue=De);let Dr=jt-Ee;switch(Dr){case 0:z=void 0;break;case 1:z=Dg(mt,O[Ee]);break;default:if(mt===Q.ParameterStructures.byName)throw new Error(`Received ${Dr} parameters for 'by Name' request parameter structure.`);z=O.slice(Ee,jt).map(wI=>Ya(wI));break}}else{let ue=O;I=T.method,z=wy(T,ue);let De=T.numberOfParams;Ue=NT.CancellationToken.is(ue[De])?ue[De]:void 0}let ye=a++,Ye;Ue&&(Ye=Ue.onCancellationRequested(()=>{let ue=Kt.sender.sendCancellation(Io,ye);return ue===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${ye}`),Promise.resolve()):ue.catch(()=>{i.log(`Sending cancellation messages for id ${ye} failed`)})}));let et={jsonrpc:l,id:ye,method:I,params:z};return Cr(et),typeof Kt.sender.enableCancellation=="function"&&Kt.sender.enableCancellation(et),new Promise(async(ue,De)=>{let Ee=r(Dr=>{ue(Dr),Kt.sender.cleanup(ye),Ye?.dispose()},"resolveWithCleanup"),mt=r(Dr=>{De(Dr),Kt.sender.cleanup(ye),Ye?.dispose()},"rejectWithCleanup"),jt={method:I,timerStart:Date.now(),resolve:Ee,reject:mt};try{await t.write(et),q.set(ye,jt)}catch(Dr){throw i.error("Sending request failed."),jt.reject(new Q.ResponseError(Q.ErrorCodes.MessageWriteError,Dr.message?Dr.message:"Unknown reason")),Dr}})},"sendRequest"),onRequest:r((T,O)=>{Ha();let I=null;return FT.is(T)?(I=void 0,d=T):qe.string(T)?(I=null,O!==void 0&&(I=T,f.set(T,{handler:O,type:void 0}))):O!==void 0&&(I=T.method,f.set(T.method,{type:T,handler:O})),{dispose:r(()=>{I!==null&&(I!==void 0?f.delete(I):d=void 0)},"dispose")}},"onRequest"),hasPendingResponse:r(()=>q.size>0,"hasPendingResponse"),trace:r(async(T,O,I)=>{let z=!1,Ue=cr.Text;I!==void 0&&(qe.boolean(I)?z=I:(z=I.sendNotification||!1,Ue=I.traceFormat||cr.Text)),h=T,C=Ue,h===me.Off?P=void 0:P=O,z&&!Va()&&!fr()&&await Io.sendNotification(IT.type,{value:me.toString(T)})},"trace"),onError:an.event,onClose:sr.event,onUnhandledNotification:Mo.event,onDispose:kr.event,end:r(()=>{t.end()},"end"),dispose:r(()=>{if(fr())return;le=vr.Disposed,kr.fire(void 0);let T=new Q.ResponseError(Q.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let O of q.values())O.reject(T);q=new Map,S=new Map,N=new Set,L=new $y.LinkedMap,qe.func(t.dispose)&&t.dispose(),qe.func(e.dispose)&&e.dispose()},"dispose"),listen:r(()=>{Ha(),NI(),le=vr.Listening,e.listen(St)},"listen"),inspect:r(()=>{(0,Zy.default)().console.log("inspect")},"inspect")};return Io.onNotification(Lc.type,T=>{if(h===me.Off||!P)return;let O=h===me.Verbose||h===me.Compact;P.log(T.message,O?T.verbose:void 0)}),Io.onNotification(Za.type,T=>{let O=y.get(T.token);O?O(T.value):Sn.fire(T)}),Io}r(aP,"createMessageConnection");Z.createMessageConnection=aP});var Pc=j(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});v.ProgressType=v.ProgressToken=v.createMessageConnection=v.NullLogger=v.ConnectionOptions=v.ConnectionStrategy=v.AbstractMessageBuffer=v.WriteableStreamMessageWriter=v.AbstractMessageWriter=v.MessageWriter=v.ReadableStreamMessageReader=v.AbstractMessageReader=v.MessageReader=v.SharedArrayReceiverStrategy=v.SharedArraySenderStrategy=v.CancellationToken=v.CancellationTokenSource=v.Emitter=v.Event=v.Disposable=v.LRUCache=v.Touch=v.LinkedMap=v.ParameterStructures=v.NotificationType9=v.NotificationType8=v.NotificationType7=v.NotificationType6=v.NotificationType5=v.NotificationType4=v.NotificationType3=v.NotificationType2=v.NotificationType1=v.NotificationType0=v.NotificationType=v.ErrorCodes=v.ResponseError=v.RequestType9=v.RequestType8=v.RequestType7=v.RequestType6=v.RequestType5=v.RequestType4=v.RequestType3=v.RequestType2=v.RequestType1=v.RequestType0=v.RequestType=v.Message=v.RAL=void 0;v.MessageStrategy=v.CancellationStrategy=v.CancellationSenderStrategy=v.CancellationReceiverStrategy=v.ConnectionError=v.ConnectionErrors=v.LogTraceNotification=v.SetTraceNotification=v.TraceFormat=v.TraceValues=v.Trace=void 0;var xe=uT();Object.defineProperty(v,"Message",{enumerable:!0,get:r(function(){return xe.Message},"get")});Object.defineProperty(v,"RequestType",{enumerable:!0,get:r(function(){return xe.RequestType},"get")});Object.defineProperty(v,"RequestType0",{enumerable:!0,get:r(function(){return xe.RequestType0},"get")});Object.defineProperty(v,"RequestType1",{enumerable:!0,get:r(function(){return xe.RequestType1},"get")});Object.defineProperty(v,"RequestType2",{enumerable:!0,get:r(function(){return xe.RequestType2},"get")});Object.defineProperty(v,"RequestType3",{enumerable:!0,get:r(function(){return xe.RequestType3},"get")});Object.defineProperty(v,"RequestType4",{enumerable:!0,get:r(function(){return xe.RequestType4},"get")});Object.defineProperty(v,"RequestType5",{enumerable:!0,get:r(function(){return xe.RequestType5},"get")});Object.defineProperty(v,"RequestType6",{enumerable:!0,get:r(function(){return xe.RequestType6},"get")});Object.defineProperty(v,"RequestType7",{enumerable:!0,get:r(function(){return xe.RequestType7},"get")});Object.defineProperty(v,"RequestType8",{enumerable:!0,get:r(function(){return xe.RequestType8},"get")});Object.defineProperty(v,"RequestType9",{enumerable:!0,get:r(function(){return xe.RequestType9},"get")});Object.defineProperty(v,"ResponseError",{enumerable:!0,get:r(function(){return xe.ResponseError},"get")});Object.defineProperty(v,"ErrorCodes",{enumerable:!0,get:r(function(){return xe.ErrorCodes},"get")});Object.defineProperty(v,"NotificationType",{enumerable:!0,get:r(function(){return xe.NotificationType},"get")});Object.defineProperty(v,"NotificationType0",{enumerable:!0,get:r(function(){return xe.NotificationType0},"get")});Object.defineProperty(v,"NotificationType1",{enumerable:!0,get:r(function(){return xe.NotificationType1},"get")});Object.defineProperty(v,"NotificationType2",{enumerable:!0,get:r(function(){return xe.NotificationType2},"get")});Object.defineProperty(v,"NotificationType3",{enumerable:!0,get:r(function(){return xe.NotificationType3},"get")});Object.defineProperty(v,"NotificationType4",{enumerable:!0,get:r(function(){return xe.NotificationType4},"get")});Object.defineProperty(v,"NotificationType5",{enumerable:!0,get:r(function(){return xe.NotificationType5},"get")});Object.defineProperty(v,"NotificationType6",{enumerable:!0,get:r(function(){return xe.NotificationType6},"get")});Object.defineProperty(v,"NotificationType7",{enumerable:!0,get:r(function(){return xe.NotificationType7},"get")});Object.defineProperty(v,"NotificationType8",{enumerable:!0,get:r(function(){return xe.NotificationType8},"get")});Object.defineProperty(v,"NotificationType9",{enumerable:!0,get:r(function(){return xe.NotificationType9},"get")});Object.defineProperty(v,"ParameterStructures",{enumerable:!0,get:r(function(){return xe.ParameterStructures},"get")});var qT=pT();Object.defineProperty(v,"LinkedMap",{enumerable:!0,get:r(function(){return qT.LinkedMap},"get")});Object.defineProperty(v,"LRUCache",{enumerable:!0,get:r(function(){return qT.LRUCache},"get")});Object.defineProperty(v,"Touch",{enumerable:!0,get:r(function(){return qT.Touch},"get")});var sP=Gy();Object.defineProperty(v,"Disposable",{enumerable:!0,get:r(function(){return sP.Disposable},"get")});var n_=qo();Object.defineProperty(v,"Event",{enumerable:!0,get:r(function(){return n_.Event},"get")});Object.defineProperty(v,"Emitter",{enumerable:!0,get:r(function(){return n_.Emitter},"get")});var o_=kc();Object.defineProperty(v,"CancellationTokenSource",{enumerable:!0,get:r(function(){return o_.CancellationTokenSource},"get")});Object.defineProperty(v,"CancellationToken",{enumerable:!0,get:r(function(){return o_.CancellationToken},"get")});var i_=Vy();Object.defineProperty(v,"SharedArraySenderStrategy",{enumerable:!0,get:r(function(){return i_.SharedArraySenderStrategy},"get")});Object.defineProperty(v,"SharedArrayReceiverStrategy",{enumerable:!0,get:r(function(){return i_.SharedArrayReceiverStrategy},"get")});var BT=zy();Object.defineProperty(v,"MessageReader",{enumerable:!0,get:r(function(){return BT.MessageReader},"get")});Object.defineProperty(v,"AbstractMessageReader",{enumerable:!0,get:r(function(){return BT.AbstractMessageReader},"get")});Object.defineProperty(v,"ReadableStreamMessageReader",{enumerable:!0,get:r(function(){return BT.ReadableStreamMessageReader},"get")});var GT=Qy();Object.defineProperty(v,"MessageWriter",{enumerable:!0,get:r(function(){return GT.MessageWriter},"get")});Object.defineProperty(v,"AbstractMessageWriter",{enumerable:!0,get:r(function(){return GT.AbstractMessageWriter},"get")});Object.defineProperty(v,"WriteableStreamMessageWriter",{enumerable:!0,get:r(function(){return GT.WriteableStreamMessageWriter},"get")});var cP=Xy();Object.defineProperty(v,"AbstractMessageBuffer",{enumerable:!0,get:r(function(){return cP.AbstractMessageBuffer},"get")});var At=r_();Object.defineProperty(v,"ConnectionStrategy",{enumerable:!0,get:r(function(){return At.ConnectionStrategy},"get")});Object.defineProperty(v,"ConnectionOptions",{enumerable:!0,get:r(function(){return At.ConnectionOptions},"get")});Object.defineProperty(v,"NullLogger",{enumerable:!0,get:r(function(){return At.NullLogger},"get")});Object.defineProperty(v,"createMessageConnection",{enumerable:!0,get:r(function(){return At.createMessageConnection},"get")});Object.defineProperty(v,"ProgressToken",{enumerable:!0,get:r(function(){return At.ProgressToken},"get")});Object.defineProperty(v,"ProgressType",{enumerable:!0,get:r(function(){return At.ProgressType},"get")});Object.defineProperty(v,"Trace",{enumerable:!0,get:r(function(){return At.Trace},"get")});Object.defineProperty(v,"TraceValues",{enumerable:!0,get:r(function(){return At.TraceValues},"get")});Object.defineProperty(v,"TraceFormat",{enumerable:!0,get:r(function(){return At.TraceFormat},"get")});Object.defineProperty(v,"SetTraceNotification",{enumerable:!0,get:r(function(){return At.SetTraceNotification},"get")});Object.defineProperty(v,"LogTraceNotification",{enumerable:!0,get:r(function(){return At.LogTraceNotification},"get")});Object.defineProperty(v,"ConnectionErrors",{enumerable:!0,get:r(function(){return At.ConnectionErrors},"get")});Object.defineProperty(v,"ConnectionError",{enumerable:!0,get:r(function(){return At.ConnectionError},"get")});Object.defineProperty(v,"CancellationReceiverStrategy",{enumerable:!0,get:r(function(){return At.CancellationReceiverStrategy},"get")});Object.defineProperty(v,"CancellationSenderStrategy",{enumerable:!0,get:r(function(){return At.CancellationSenderStrategy},"get")});Object.defineProperty(v,"CancellationStrategy",{enumerable:!0,get:r(function(){return At.CancellationStrategy},"get")});Object.defineProperty(v,"MessageStrategy",{enumerable:!0,get:r(function(){return At.MessageStrategy},"get")});var lP=bn();v.RAL=lP.default});var s_=j(zT=>{"use strict";Object.defineProperty(zT,"__esModule",{value:!0});var qr=Pc(),Dc=class e extends qr.AbstractMessageBuffer{static{r(this,"MessageBuffer")}constructor(t="utf-8"){super(t),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return e.emptyBuffer}fromString(t,n){return new TextEncoder().encode(t)}toString(t,n){return n==="ascii"?this.asciiDecoder.decode(t):new TextDecoder(n).decode(t)}asNative(t,n){return n===void 0?t:t.slice(0,n)}allocNative(t){return new Uint8Array(t)}};Dc.emptyBuffer=new Uint8Array(0);var jT=class{static{r(this,"ReadableStreamWrapper")}constructor(t){this.socket=t,this._onData=new qr.Emitter,this._messageListener=n=>{n.data.arrayBuffer().then(i=>{this._onData.fire(new Uint8Array(i))},()=>{(0,qr.RAL)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(t){return this.socket.addEventListener("close",t),qr.Disposable.create(()=>this.socket.removeEventListener("close",t))}onError(t){return this.socket.addEventListener("error",t),qr.Disposable.create(()=>this.socket.removeEventListener("error",t))}onEnd(t){return this.socket.addEventListener("end",t),qr.Disposable.create(()=>this.socket.removeEventListener("end",t))}onData(t){return this._onData.event(t)}},VT=class{static{r(this,"WritableStreamWrapper")}constructor(t){this.socket=t}onClose(t){return this.socket.addEventListener("close",t),qr.Disposable.create(()=>this.socket.removeEventListener("close",t))}onError(t){return this.socket.addEventListener("error",t),qr.Disposable.create(()=>this.socket.removeEventListener("error",t))}onEnd(t){return this.socket.addEventListener("end",t),qr.Disposable.create(()=>this.socket.removeEventListener("end",t))}write(t,n){if(typeof t=="string"){if(n!==void 0&&n!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${n}`);this.socket.send(t)}else this.socket.send(t);return Promise.resolve()}end(){this.socket.close()}},uP=new TextEncoder,a_=Object.freeze({messageBuffer:Object.freeze({create:r(e=>new Dc(e),"create")}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:r((e,t)=>{if(t.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${t.charset}`);return Promise.resolve(uP.encode(JSON.stringify(e,void 0,0)))},"encode")}),decoder:Object.freeze({name:"application/json",decode:r((e,t)=>{if(!(e instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(t.charset).decode(e)))},"decode")})}),stream:Object.freeze({asReadableStream:r(e=>new jT(e),"asReadableStream"),asWritableStream:r(e=>new VT(e),"asWritableStream")}),console,timer:Object.freeze({setTimeout(e,t,...n){let o=setTimeout(e,t,...n);return{dispose:r(()=>clearTimeout(o),"dispose")}},setImmediate(e,...t){let n=setTimeout(e,0,...t);return{dispose:r(()=>clearTimeout(n),"dispose")}},setInterval(e,t,...n){let o=setInterval(e,t,...n);return{dispose:r(()=>clearInterval(o),"dispose")}}})});function WT(){return a_}r(WT,"RIL");(function(e){function t(){qr.RAL.install(a_)}r(t,"install"),e.install=t})(WT||(WT={}));zT.default=WT});var To=j(lr=>{"use strict";var dP=lr&&lr.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),pP=lr&&lr.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&dP(t,e,n)};Object.defineProperty(lr,"__esModule",{value:!0});lr.createMessageConnection=lr.BrowserMessageWriter=lr.BrowserMessageReader=void 0;var fP=s_();fP.default.install();var Wo=Pc();pP(Pc(),lr);var HT=class extends Wo.AbstractMessageReader{static{r(this,"BrowserMessageReader")}constructor(t){super(),this._onData=new Wo.Emitter,this._messageListener=n=>{this._onData.fire(n.data)},t.addEventListener("error",n=>this.fireError(n)),t.onmessage=this._messageListener}listen(t){return this._onData.event(t)}};lr.BrowserMessageReader=HT;var YT=class extends Wo.AbstractMessageWriter{static{r(this,"BrowserMessageWriter")}constructor(t){super(),this.port=t,this.errorCount=0,t.addEventListener("error",n=>this.fireError(n))}write(t){try{return this.port.postMessage(t),Promise.resolve()}catch(n){return this.handleError(n,t),Promise.reject(n)}}handleError(t,n){this.errorCount++,this.fireError(t,n,this.errorCount)}end(){}};lr.BrowserMessageWriter=YT;function mP(e,t,n,o){return n===void 0&&(n=Wo.NullLogger),Wo.ConnectionStrategy.is(o)&&(o={connectionStrategy:o}),(0,Wo.createMessageConnection)(e,t,n,o)}r(mP,"createMessageConnection");lr.createMessageConnection=mP});var KT=j((Z3,c_)=>{"use strict";c_.exports=To()});var Yc={};GI(Yc,{AnnotatedTextEdit:()=>cn,ChangeAnnotation:()=>Eo,ChangeAnnotationIdentifier:()=>kt,CodeAction:()=>vE,CodeActionContext:()=>CE,CodeActionKind:()=>UE,CodeActionTriggerKind:()=>ss,CodeDescription:()=>oE,CodeLens:()=>OE,Color:()=>Bc,ColorInformation:()=>ZT,ColorPresentation:()=>$T,Command:()=>So,CompletionItem:()=>hE,CompletionItemKind:()=>lE,CompletionItemLabelDetails:()=>mE,CompletionItemTag:()=>dE,CompletionList:()=>gE,CreateFile:()=>Ho,DeleteFile:()=>Ko,Diagnostic:()=>ns,DiagnosticRelatedInformation:()=>Gc,DiagnosticSeverity:()=>rE,DiagnosticTag:()=>nE,DocumentHighlight:()=>_E,DocumentHighlightKind:()=>yE,DocumentLink:()=>NE,DocumentSymbol:()=>kE,DocumentUri:()=>JT,EOL:()=>hP,FoldingRange:()=>tE,FoldingRangeKind:()=>eE,FormattingOptions:()=>LE,Hover:()=>TE,InlayHint:()=>GE,InlayHintKind:()=>zc,InlayHintLabelPart:()=>Hc,InlineCompletionContext:()=>YE,InlineCompletionItem:()=>VE,InlineCompletionList:()=>WE,InlineCompletionTriggerKind:()=>zE,InlineValueContext:()=>BE,InlineValueEvaluatableExpression:()=>qE,InlineValueText:()=>PE,InlineValueVariableLookup:()=>DE,InsertReplaceEdit:()=>pE,InsertTextFormat:()=>uE,InsertTextMode:()=>fE,Location:()=>rs,LocationLink:()=>XT,MarkedString:()=>as,MarkupContent:()=>Jo,MarkupKind:()=>Wc,OptionalVersionedTextDocumentIdentifier:()=>is,ParameterInformation:()=>EE,Position:()=>mr,Range:()=>Ke,RenameFile:()=>Yo,SelectedCompletionInfo:()=>HE,SelectionRange:()=>ME,SemanticTokenModifiers:()=>FE,SemanticTokenTypes:()=>wE,SemanticTokens:()=>IE,SignatureInformation:()=>SE,StringValue:()=>jE,SymbolInformation:()=>RE,SymbolKind:()=>xE,SymbolTag:()=>bE,TextDocument:()=>JE,TextDocumentEdit:()=>os,TextDocumentIdentifier:()=>aE,TextDocumentItem:()=>cE,TextEdit:()=>Br,URI:()=>qc,VersionedTextDocumentIdentifier:()=>sE,WorkspaceChange:()=>iE,WorkspaceEdit:()=>jc,WorkspaceFolder:()=>KE,WorkspaceSymbol:()=>AE,integer:()=>QT,uinteger:()=>ts});var JT,qc,QT,ts,mr,Ke,rs,XT,Bc,ZT,$T,eE,tE,Gc,rE,nE,oE,ns,So,Br,Eo,kt,cn,os,Ho,Yo,Ko,jc,zo,Vc,iE,aE,sE,is,cE,Wc,Jo,lE,uE,dE,pE,fE,mE,hE,gE,as,TE,EE,SE,yE,_E,xE,bE,RE,AE,kE,UE,ss,CE,vE,OE,LE,NE,ME,wE,FE,IE,PE,DE,qE,BE,zc,Hc,GE,jE,VE,WE,zE,HE,YE,KE,hP,JE,QE,R,Kc=BI(()=>{"use strict";(function(e){function t(n){return typeof n=="string"}r(t,"is"),e.is=t})(JT||(JT={}));(function(e){function t(n){return typeof n=="string"}r(t,"is"),e.is=t})(qc||(qc={}));(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647;function t(n){return typeof n=="number"&&e.MIN_VALUE<=n&&n<=e.MAX_VALUE}r(t,"is"),e.is=t})(QT||(QT={}));(function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647;function t(n){return typeof n=="number"&&e.MIN_VALUE<=n&&n<=e.MAX_VALUE}r(t,"is"),e.is=t})(ts||(ts={}));(function(e){function t(o,i){return o===Number.MAX_VALUE&&(o=ts.MAX_VALUE),i===Number.MAX_VALUE&&(i=ts.MAX_VALUE),{line:o,character:i}}r(t,"create"),e.create=t;function n(o){let i=o;return R.objectLiteral(i)&&R.uinteger(i.line)&&R.uinteger(i.character)}r(n,"is"),e.is=n})(mr||(mr={}));(function(e){function t(o,i,a,s){if(R.uinteger(o)&&R.uinteger(i)&&R.uinteger(a)&&R.uinteger(s))return{start:mr.create(o,i),end:mr.create(a,s)};if(mr.is(o)&&mr.is(i))return{start:o,end:i};throw new Error(`Range#create called with invalid arguments[${o}, ${i}, ${a}, ${s}]`)}r(t,"create"),e.create=t;function n(o){let i=o;return R.objectLiteral(i)&&mr.is(i.start)&&mr.is(i.end)}r(n,"is"),e.is=n})(Ke||(Ke={}));(function(e){function t(o,i){return{uri:o,range:i}}r(t,"create"),e.create=t;function n(o){let i=o;return R.objectLiteral(i)&&Ke.is(i.range)&&(R.string(i.uri)||R.undefined(i.uri))}r(n,"is"),e.is=n})(rs||(rs={}));(function(e){function t(o,i,a,s){return{targetUri:o,targetRange:i,targetSelectionRange:a,originSelectionRange:s}}r(t,"create"),e.create=t;function n(o){let i=o;return R.objectLiteral(i)&&Ke.is(i.targetRange)&&R.string(i.targetUri)&&Ke.is(i.targetSelectionRange)&&(Ke.is(i.originSelectionRange)||R.undefined(i.originSelectionRange))}r(n,"is"),e.is=n})(XT||(XT={}));(function(e){function t(o,i,a,s){return{red:o,green:i,blue:a,alpha:s}}r(t,"create"),e.create=t;function n(o){let i=o;return R.objectLiteral(i)&&R.numberRange(i.red,0,1)&&R.numberRange(i.green,0,1)&&R.numberRange(i.blue,0,1)&&R.numberRange(i.alpha,0,1)}r(n,"is"),e.is=n})(Bc||(Bc={}));(function(e){function t(o,i){return{range:o,color:i}}r(t,"create"),e.create=t;function n(o){let i=o;return R.objectLiteral(i)&&Ke.is(i.range)&&Bc.is(i.color)}r(n,"is"),e.is=n})(ZT||(ZT={}));(function(e){function t(o,i,a){return{label:o,textEdit:i,additionalTextEdits:a}}r(t,"create"),e.create=t;function n(o){let i=o;return R.objectLiteral(i)&&R.string(i.label)&&(R.undefined(i.textEdit)||Br.is(i))&&(R.undefined(i.additionalTextEdits)||R.typedArray(i.additionalTextEdits,Br.is))}r(n,"is"),e.is=n})($T||($T={}));(function(e){e.Comment="comment",e.Imports="imports",e.Region="region"})(eE||(eE={}));(function(e){function t(o,i,a,s,c,l){let d={startLine:o,endLine:i};return R.defined(a)&&(d.startCharacter=a),R.defined(s)&&(d.endCharacter=s),R.defined(c)&&(d.kind=c),R.defined(l)&&(d.collapsedText=l),d}r(t,"create"),e.create=t;function n(o){let i=o;return R.objectLiteral(i)&&R.uinteger(i.startLine)&&R.uinteger(i.startLine)&&(R.undefined(i.startCharacter)||R.uinteger(i.startCharacter))&&(R.undefined(i.endCharacter)||R.uinteger(i.endCharacter))&&(R.undefined(i.kind)||R.string(i.kind))}r(n,"is"),e.is=n})(tE||(tE={}));(function(e){function t(o,i){return{location:o,message:i}}r(t,"create"),e.create=t;function n(o){let i=o;return R.defined(i)&&rs.is(i.location)&&R.string(i.message)}r(n,"is"),e.is=n})(Gc||(Gc={}));(function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4})(rE||(rE={}));(function(e){e.Unnecessary=1,e.Deprecated=2})(nE||(nE={}));(function(e){function t(n){let o=n;return R.objectLiteral(o)&&R.string(o.href)}r(t,"is"),e.is=t})(oE||(oE={}));(function(e){function t(o,i,a,s,c,l){let d={range:o,message:i};return R.defined(a)&&(d.severity=a),R.defined(s)&&(d.code=s),R.defined(c)&&(d.source=c),R.defined(l)&&(d.relatedInformation=l),d}r(t,"create"),e.create=t;function n(o){var i;let a=o;return R.defined(a)&&Ke.is(a.range)&&R.string(a.message)&&(R.number(a.severity)||R.undefined(a.severity))&&(R.integer(a.code)||R.string(a.code)||R.undefined(a.code))&&(R.undefined(a.codeDescription)||R.string((i=a.codeDescription)===null||i===void 0?void 0:i.href))&&(R.string(a.source)||R.undefined(a.source))&&(R.undefined(a.relatedInformation)||R.typedArray(a.relatedInformation,Gc.is))}r(n,"is"),e.is=n})(ns||(ns={}));(function(e){function t(o,i,...a){let s={title:o,command:i};return R.defined(a)&&a.length>0&&(s.arguments=a),s}r(t,"create"),e.create=t;function n(o){let i=o;return R.defined(i)&&R.string(i.title)&&R.string(i.command)}r(n,"is"),e.is=n})(So||(So={}));(function(e){function t(a,s){return{range:a,newText:s}}r(t,"replace"),e.replace=t;function n(a,s){return{range:{start:a,end:a},newText:s}}r(n,"insert"),e.insert=n;function o(a){return{range:a,newText:""}}r(o,"del"),e.del=o;function i(a){let s=a;return R.objectLiteral(s)&&R.string(s.newText)&&Ke.is(s.range)}r(i,"is"),e.is=i})(Br||(Br={}));(function(e){function t(o,i,a){let s={label:o};return i!==void 0&&(s.needsConfirmation=i),a!==void 0&&(s.description=a),s}r(t,"create"),e.create=t;function n(o){let i=o;return R.objectLiteral(i)&&R.string(i.label)&&(R.boolean(i.needsConfirmation)||i.needsConfirmation===void 0)&&(R.string(i.description)||i.description===void 0)}r(n,"is"),e.is=n})(Eo||(Eo={}));(function(e){function t(n){let o=n;return R.string(o)}r(t,"is"),e.is=t})(kt||(kt={}));(function(e){function t(a,s,c){return{range:a,newText:s,annotationId:c}}r(t,"replace"),e.replace=t;function n(a,s,c){return{range:{start:a,end:a},newText:s,annotationId:c}}r(n,"insert"),e.insert=n;function o(a,s){return{range:a,newText:"",annotationId:s}}r(o,"del"),e.del=o;function i(a){let s=a;return Br.is(s)&&(Eo.is(s.annotationId)||kt.is(s.annotationId))}r(i,"is"),e.is=i})(cn||(cn={}));(function(e){function t(o,i){return{textDocument:o,edits:i}}r(t,"create"),e.create=t;function n(o){let i=o;return R.defined(i)&&is.is(i.textDocument)&&Array.isArray(i.edits)}r(n,"is"),e.is=n})(os||(os={}));(function(e){function t(o,i,a){let s={kind:"create",uri:o};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(s.options=i),a!==void 0&&(s.annotationId=a),s}r(t,"create"),e.create=t;function n(o){let i=o;return i&&i.kind==="create"&&R.string(i.uri)&&(i.options===void 0||(i.options.overwrite===void 0||R.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||R.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||kt.is(i.annotationId))}r(n,"is"),e.is=n})(Ho||(Ho={}));(function(e){function t(o,i,a,s){let c={kind:"rename",oldUri:o,newUri:i};return a!==void 0&&(a.overwrite!==void 0||a.ignoreIfExists!==void 0)&&(c.options=a),s!==void 0&&(c.annotationId=s),c}r(t,"create"),e.create=t;function n(o){let i=o;return i&&i.kind==="rename"&&R.string(i.oldUri)&&R.string(i.newUri)&&(i.options===void 0||(i.options.overwrite===void 0||R.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||R.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||kt.is(i.annotationId))}r(n,"is"),e.is=n})(Yo||(Yo={}));(function(e){function t(o,i,a){let s={kind:"delete",uri:o};return i!==void 0&&(i.recursive!==void 0||i.ignoreIfNotExists!==void 0)&&(s.options=i),a!==void 0&&(s.annotationId=a),s}r(t,"create"),e.create=t;function n(o){let i=o;return i&&i.kind==="delete"&&R.string(i.uri)&&(i.options===void 0||(i.options.recursive===void 0||R.boolean(i.options.recursive))&&(i.options.ignoreIfNotExists===void 0||R.boolean(i.options.ignoreIfNotExists)))&&(i.annotationId===void 0||kt.is(i.annotationId))}r(n,"is"),e.is=n})(Ko||(Ko={}));(function(e){function t(n){let o=n;return o&&(o.changes!==void 0||o.documentChanges!==void 0)&&(o.documentChanges===void 0||o.documentChanges.every(i=>R.string(i.kind)?Ho.is(i)||Yo.is(i)||Ko.is(i):os.is(i)))}r(t,"is"),e.is=t})(jc||(jc={}));zo=class{static{r(this,"TextEditChangeImpl")}constructor(t,n){this.edits=t,this.changeAnnotations=n}insert(t,n,o){let i,a;if(o===void 0?i=Br.insert(t,n):kt.is(o)?(a=o,i=cn.insert(t,n,o)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(o),i=cn.insert(t,n,a)),this.edits.push(i),a!==void 0)return a}replace(t,n,o){let i,a;if(o===void 0?i=Br.replace(t,n):kt.is(o)?(a=o,i=cn.replace(t,n,o)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(o),i=cn.replace(t,n,a)),this.edits.push(i),a!==void 0)return a}delete(t,n){let o,i;if(n===void 0?o=Br.del(t):kt.is(n)?(i=n,o=cn.del(t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),o=cn.del(t,i)),this.edits.push(o),i!==void 0)return i}add(t){this.edits.push(t)}all(){return this.edits}clear(){this.edits.splice(0,this.edits.length)}assertChangeAnnotations(t){if(t===void 0)throw new Error("Text edit change is not configured to manage change annotations.")}},Vc=class{static{r(this,"ChangeAnnotations")}constructor(t){this._annotations=t===void 0?Object.create(null):t,this._counter=0,this._size=0}all(){return this._annotations}get size(){return this._size}manage(t,n){let o;if(kt.is(t)?o=t:(o=this.nextId(),n=t),this._annotations[o]!==void 0)throw new Error(`Id ${o} is already in use.`);if(n===void 0)throw new Error(`No annotation provided for id ${o}`);return this._annotations[o]=n,this._size++,o}nextId(){return this._counter++,this._counter.toString()}},iE=class{static{r(this,"WorkspaceChange")}constructor(t){this._textEditChanges=Object.create(null),t!==void 0?(this._workspaceEdit=t,t.documentChanges?(this._changeAnnotations=new Vc(t.changeAnnotations),t.changeAnnotations=this._changeAnnotations.all(),t.documentChanges.forEach(n=>{if(os.is(n)){let o=new zo(n.edits,this._changeAnnotations);this._textEditChanges[n.textDocument.uri]=o}})):t.changes&&Object.keys(t.changes).forEach(n=>{let o=new zo(t.changes[n]);this._textEditChanges[n]=o})):this._workspaceEdit={}}get edit(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit}getTextEditChange(t){if(is.is(t)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let n={uri:t.uri,version:t.version},o=this._textEditChanges[n.uri];if(!o){let i=[],a={textDocument:n,edits:i};this._workspaceEdit.documentChanges.push(a),o=new zo(i,this._changeAnnotations),this._textEditChanges[n.uri]=o}return o}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");let n=this._textEditChanges[t];if(!n){let o=[];this._workspaceEdit.changes[t]=o,n=new zo(o),this._textEditChanges[t]=n}return n}}initDocumentChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new Vc,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())}initChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))}createFile(t,n,o){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;Eo.is(n)||kt.is(n)?i=n:o=n;let a,s;if(i===void 0?a=Ho.create(t,o):(s=kt.is(i)?i:this._changeAnnotations.manage(i),a=Ho.create(t,o,s)),this._workspaceEdit.documentChanges.push(a),s!==void 0)return s}renameFile(t,n,o,i){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let a;Eo.is(o)||kt.is(o)?a=o:i=o;let s,c;if(a===void 0?s=Yo.create(t,n,i):(c=kt.is(a)?a:this._changeAnnotations.manage(a),s=Yo.create(t,n,i,c)),this._workspaceEdit.documentChanges.push(s),c!==void 0)return c}deleteFile(t,n,o){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;Eo.is(n)||kt.is(n)?i=n:o=n;let a,s;if(i===void 0?a=Ko.create(t,o):(s=kt.is(i)?i:this._changeAnnotations.manage(i),a=Ko.create(t,o,s)),this._workspaceEdit.documentChanges.push(a),s!==void 0)return s}};(function(e){function t(o){return{uri:o}}r(t,"create"),e.create=t;function n(o){let i=o;return R.defined(i)&&R.string(i.uri)}r(n,"is"),e.is=n})(aE||(aE={}));(function(e){function t(o,i){return{uri:o,version:i}}r(t,"create"),e.create=t;function n(o){let i=o;return R.defined(i)&&R.string(i.uri)&&R.integer(i.version)}r(n,"is"),e.is=n})(sE||(sE={}));(function(e){function t(o,i){return{uri:o,version:i}}r(t,"create"),e.create=t;function n(o){let i=o;return R.defined(i)&&R.string(i.uri)&&(i.version===null||R.integer(i.version))}r(n,"is"),e.is=n})(is||(is={}));(function(e){function t(o,i,a,s){return{uri:o,languageId:i,version:a,text:s}}r(t,"create"),e.create=t;function n(o){let i=o;return R.defined(i)&&R.string(i.uri)&&R.string(i.languageId)&&R.integer(i.version)&&R.string(i.text)}r(n,"is"),e.is=n})(cE||(cE={}));(function(e){e.PlainText="plaintext",e.Markdown="markdown";function t(n){let o=n;return o===e.PlainText||o===e.Markdown}r(t,"is"),e.is=t})(Wc||(Wc={}));(function(e){function t(n){let o=n;return R.objectLiteral(n)&&Wc.is(o.kind)&&R.string(o.value)}r(t,"is"),e.is=t})(Jo||(Jo={}));(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(lE||(lE={}));(function(e){e.PlainText=1,e.Snippet=2})(uE||(uE={}));(function(e){e.Deprecated=1})(dE||(dE={}));(function(e){function t(o,i,a){return{newText:o,insert:i,replace:a}}r(t,"create"),e.create=t;function n(o){let i=o;return i&&R.string(i.newText)&&Ke.is(i.insert)&&Ke.is(i.replace)}r(n,"is"),e.is=n})(pE||(pE={}));(function(e){e.asIs=1,e.adjustIndentation=2})(fE||(fE={}));(function(e){function t(n){let o=n;return o&&(R.string(o.detail)||o.detail===void 0)&&(R.string(o.description)||o.description===void 0)}r(t,"is"),e.is=t})(mE||(mE={}));(function(e){function t(n){return{label:n}}r(t,"create"),e.create=t})(hE||(hE={}));(function(e){function t(n,o){return{items:n||[],isIncomplete:!!o}}r(t,"create"),e.create=t})(gE||(gE={}));(function(e){function t(o){return o.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}r(t,"fromPlainText"),e.fromPlainText=t;function n(o){let i=o;return R.string(i)||R.objectLiteral(i)&&R.string(i.language)&&R.string(i.value)}r(n,"is"),e.is=n})(as||(as={}));(function(e){function t(n){let o=n;return!!o&&R.objectLiteral(o)&&(Jo.is(o.contents)||as.is(o.contents)||R.typedArray(o.contents,as.is))&&(n.range===void 0||Ke.is(n.range))}r(t,"is"),e.is=t})(TE||(TE={}));(function(e){function t(n,o){return o?{label:n,documentation:o}:{label:n}}r(t,"create"),e.create=t})(EE||(EE={}));(function(e){function t(n,o,...i){let a={label:n};return R.defined(o)&&(a.documentation=o),R.defined(i)?a.parameters=i:a.parameters=[],a}r(t,"create"),e.create=t})(SE||(SE={}));(function(e){e.Text=1,e.Read=2,e.Write=3})(yE||(yE={}));(function(e){function t(n,o){let i={range:n};return R.number(o)&&(i.kind=o),i}r(t,"create"),e.create=t})(_E||(_E={}));(function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26})(xE||(xE={}));(function(e){e.Deprecated=1})(bE||(bE={}));(function(e){function t(n,o,i,a,s){let c={name:n,kind:o,location:{uri:a,range:i}};return s&&(c.containerName=s),c}r(t,"create"),e.create=t})(RE||(RE={}));(function(e){function t(n,o,i,a){return a!==void 0?{name:n,kind:o,location:{uri:i,range:a}}:{name:n,kind:o,location:{uri:i}}}r(t,"create"),e.create=t})(AE||(AE={}));(function(e){function t(o,i,a,s,c,l){let d={name:o,detail:i,kind:a,range:s,selectionRange:c};return l!==void 0&&(d.children=l),d}r(t,"create"),e.create=t;function n(o){let i=o;return i&&R.string(i.name)&&R.number(i.kind)&&Ke.is(i.range)&&Ke.is(i.selectionRange)&&(i.detail===void 0||R.string(i.detail))&&(i.deprecated===void 0||R.boolean(i.deprecated))&&(i.children===void 0||Array.isArray(i.children))&&(i.tags===void 0||Array.isArray(i.tags))}r(n,"is"),e.is=n})(kE||(kE={}));(function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"})(UE||(UE={}));(function(e){e.Invoked=1,e.Automatic=2})(ss||(ss={}));(function(e){function t(o,i,a){let s={diagnostics:o};return i!=null&&(s.only=i),a!=null&&(s.triggerKind=a),s}r(t,"create"),e.create=t;function n(o){let i=o;return R.defined(i)&&R.typedArray(i.diagnostics,ns.is)&&(i.only===void 0||R.typedArray(i.only,R.string))&&(i.triggerKind===void 0||i.triggerKind===ss.Invoked||i.triggerKind===ss.Automatic)}r(n,"is"),e.is=n})(CE||(CE={}));(function(e){function t(o,i,a){let s={title:o},c=!0;return typeof i=="string"?(c=!1,s.kind=i):So.is(i)?s.command=i:s.edit=i,c&&a!==void 0&&(s.kind=a),s}r(t,"create"),e.create=t;function n(o){let i=o;return i&&R.string(i.title)&&(i.diagnostics===void 0||R.typedArray(i.diagnostics,ns.is))&&(i.kind===void 0||R.string(i.kind))&&(i.edit!==void 0||i.command!==void 0)&&(i.command===void 0||So.is(i.command))&&(i.isPreferred===void 0||R.boolean(i.isPreferred))&&(i.edit===void 0||jc.is(i.edit))}r(n,"is"),e.is=n})(vE||(vE={}));(function(e){function t(o,i){let a={range:o};return R.defined(i)&&(a.data=i),a}r(t,"create"),e.create=t;function n(o){let i=o;return R.defined(i)&&Ke.is(i.range)&&(R.undefined(i.command)||So.is(i.command))}r(n,"is"),e.is=n})(OE||(OE={}));(function(e){function t(o,i){return{tabSize:o,insertSpaces:i}}r(t,"create"),e.create=t;function n(o){let i=o;return R.defined(i)&&R.uinteger(i.tabSize)&&R.boolean(i.insertSpaces)}r(n,"is"),e.is=n})(LE||(LE={}));(function(e){function t(o,i,a){return{range:o,target:i,data:a}}r(t,"create"),e.create=t;function n(o){let i=o;return R.defined(i)&&Ke.is(i.range)&&(R.undefined(i.target)||R.string(i.target))}r(n,"is"),e.is=n})(NE||(NE={}));(function(e){function t(o,i){return{range:o,parent:i}}r(t,"create"),e.create=t;function n(o){let i=o;return R.objectLiteral(i)&&Ke.is(i.range)&&(i.parent===void 0||e.is(i.parent))}r(n,"is"),e.is=n})(ME||(ME={}));(function(e){e.namespace="namespace",e.type="type",e.class="class",e.enum="enum",e.interface="interface",e.struct="struct",e.typeParameter="typeParameter",e.parameter="parameter",e.variable="variable",e.property="property",e.enumMember="enumMember",e.event="event",e.function="function",e.method="method",e.macro="macro",e.keyword="keyword",e.modifier="modifier",e.comment="comment",e.string="string",e.number="number",e.regexp="regexp",e.operator="operator",e.decorator="decorator"})(wE||(wE={}));(function(e){e.declaration="declaration",e.definition="definition",e.readonly="readonly",e.static="static",e.deprecated="deprecated",e.abstract="abstract",e.async="async",e.modification="modification",e.documentation="documentation",e.defaultLibrary="defaultLibrary"})(FE||(FE={}));(function(e){function t(n){let o=n;return R.objectLiteral(o)&&(o.resultId===void 0||typeof o.resultId=="string")&&Array.isArray(o.data)&&(o.data.length===0||typeof o.data[0]=="number")}r(t,"is"),e.is=t})(IE||(IE={}));(function(e){function t(o,i){return{range:o,text:i}}r(t,"create"),e.create=t;function n(o){let i=o;return i!=null&&Ke.is(i.range)&&R.string(i.text)}r(n,"is"),e.is=n})(PE||(PE={}));(function(e){function t(o,i,a){return{range:o,variableName:i,caseSensitiveLookup:a}}r(t,"create"),e.create=t;function n(o){let i=o;return i!=null&&Ke.is(i.range)&&R.boolean(i.caseSensitiveLookup)&&(R.string(i.variableName)||i.variableName===void 0)}r(n,"is"),e.is=n})(DE||(DE={}));(function(e){function t(o,i){return{range:o,expression:i}}r(t,"create"),e.create=t;function n(o){let i=o;return i!=null&&Ke.is(i.range)&&(R.string(i.expression)||i.expression===void 0)}r(n,"is"),e.is=n})(qE||(qE={}));(function(e){function t(o,i){return{frameId:o,stoppedLocation:i}}r(t,"create"),e.create=t;function n(o){let i=o;return R.defined(i)&&Ke.is(o.stoppedLocation)}r(n,"is"),e.is=n})(BE||(BE={}));(function(e){e.Type=1,e.Parameter=2;function t(n){return n===1||n===2}r(t,"is"),e.is=t})(zc||(zc={}));(function(e){function t(o){return{value:o}}r(t,"create"),e.create=t;function n(o){let i=o;return R.objectLiteral(i)&&(i.tooltip===void 0||R.string(i.tooltip)||Jo.is(i.tooltip))&&(i.location===void 0||rs.is(i.location))&&(i.command===void 0||So.is(i.command))}r(n,"is"),e.is=n})(Hc||(Hc={}));(function(e){function t(o,i,a){let s={position:o,label:i};return a!==void 0&&(s.kind=a),s}r(t,"create"),e.create=t;function n(o){let i=o;return R.objectLiteral(i)&&mr.is(i.position)&&(R.string(i.label)||R.typedArray(i.label,Hc.is))&&(i.kind===void 0||zc.is(i.kind))&&i.textEdits===void 0||R.typedArray(i.textEdits,Br.is)&&(i.tooltip===void 0||R.string(i.tooltip)||Jo.is(i.tooltip))&&(i.paddingLeft===void 0||R.boolean(i.paddingLeft))&&(i.paddingRight===void 0||R.boolean(i.paddingRight))}r(n,"is"),e.is=n})(GE||(GE={}));(function(e){function t(n){return{kind:"snippet",value:n}}r(t,"createSnippet"),e.createSnippet=t})(jE||(jE={}));(function(e){function t(n,o,i,a){return{insertText:n,filterText:o,range:i,command:a}}r(t,"create"),e.create=t})(VE||(VE={}));(function(e){function t(n){return{items:n}}r(t,"create"),e.create=t})(WE||(WE={}));(function(e){e.Invoked=0,e.Automatic=1})(zE||(zE={}));(function(e){function t(n,o){return{range:n,text:o}}r(t,"create"),e.create=t})(HE||(HE={}));(function(e){function t(n,o){return{triggerKind:n,selectedCompletionInfo:o}}r(t,"create"),e.create=t})(YE||(YE={}));(function(e){function t(n){let o=n;return R.objectLiteral(o)&&qc.is(o.uri)&&R.string(o.name)}r(t,"is"),e.is=t})(KE||(KE={}));hP=[`
`,`\r
`,"\r"];(function(e){function t(a,s,c,l){return new QE(a,s,c,l)}r(t,"create"),e.create=t;function n(a){let s=a;return!!(R.defined(s)&&R.string(s.uri)&&(R.undefined(s.languageId)||R.string(s.languageId))&&R.uinteger(s.lineCount)&&R.func(s.getText)&&R.func(s.positionAt)&&R.func(s.offsetAt))}r(n,"is"),e.is=n;function o(a,s){let c=a.getText(),l=i(s,(f,g)=>{let _=f.range.start.line-g.range.start.line;return _===0?f.range.start.character-g.range.start.character:_}),d=c.length;for(let f=l.length-1;f>=0;f--){let g=l[f],_=a.offsetAt(g.range.start),y=a.offsetAt(g.range.end);if(y<=d)c=c.substring(0,_)+g.newText+c.substring(y,c.length);else throw new Error("Overlapping edit");d=_}return c}r(o,"applyEdits"),e.applyEdits=o;function i(a,s){if(a.length<=1)return a;let c=a.length/2|0,l=a.slice(0,c),d=a.slice(c);i(l,s),i(d,s);let f=0,g=0,_=0;for(;f<l.length&&g<d.length;)s(l[f],d[g])<=0?a[_++]=l[f++]:a[_++]=d[g++];for(;f<l.length;)a[_++]=l[f++];for(;g<d.length;)a[_++]=d[g++];return a}r(i,"mergeSort")})(JE||(JE={}));QE=class{static{r(this,"FullTextDocument")}constructor(t,n,o,i){this._uri=t,this._languageId=n,this._version=o,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(t){if(t){let n=this.offsetAt(t.start),o=this.offsetAt(t.end);return this._content.substring(n,o)}return this._content}update(t,n){this._content=t.text,this._version=n,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let t=[],n=this._content,o=!0;for(let i=0;i<n.length;i++){o&&(t.push(i),o=!1);let a=n.charAt(i);o=a==="\r"||a===`
`,a==="\r"&&i+1<n.length&&n.charAt(i+1)===`
`&&i++}o&&n.length>0&&t.push(n.length),this._lineOffsets=t}return this._lineOffsets}positionAt(t){t=Math.max(Math.min(t,this._content.length),0);let n=this.getLineOffsets(),o=0,i=n.length;if(i===0)return mr.create(0,t);for(;o<i;){let s=Math.floor((o+i)/2);n[s]>t?i=s:o=s+1}let a=o-1;return mr.create(a,t-n[a])}offsetAt(t){let n=this.getLineOffsets();if(t.line>=n.length)return this._content.length;if(t.line<0)return 0;let o=n[t.line],i=t.line+1<n.length?n[t.line+1]:this._content.length;return Math.max(Math.min(o+t.character,i),o)}get lineCount(){return this.getLineOffsets().length}};(function(e){let t=Object.prototype.toString;function n(y){return typeof y<"u"}r(n,"defined"),e.defined=n;function o(y){return typeof y>"u"}r(o,"undefined"),e.undefined=o;function i(y){return y===!0||y===!1}r(i,"boolean"),e.boolean=i;function a(y){return t.call(y)==="[object String]"}r(a,"string"),e.string=a;function s(y){return t.call(y)==="[object Number]"}r(s,"number"),e.number=s;function c(y,M,L){return t.call(y)==="[object Number]"&&M<=y&&y<=L}r(c,"numberRange"),e.numberRange=c;function l(y){return t.call(y)==="[object Number]"&&-2147483648<=y&&y<=2147483647}r(l,"integer"),e.integer=l;function d(y){return t.call(y)==="[object Number]"&&0<=y&&y<=2147483647}r(d,"uinteger"),e.uinteger=d;function f(y){return t.call(y)==="[object Function]"}r(f,"func"),e.func=f;function g(y){return y!==null&&typeof y=="object"}r(g,"objectLiteral"),e.objectLiteral=g;function _(y,M){return Array.isArray(y)&&y.every(M)}r(_,"typedArray"),e.typedArray=_})(R||(R={}))});var Ne=j(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});Zt.ProtocolNotificationType=Zt.ProtocolNotificationType0=Zt.ProtocolRequestType=Zt.ProtocolRequestType0=Zt.RegistrationType=Zt.MessageDirection=void 0;var Qo=To(),l_;(function(e){e.clientToServer="clientToServer",e.serverToClient="serverToClient",e.both="both"})(l_||(Zt.MessageDirection=l_={}));var XE=class{static{r(this,"RegistrationType")}constructor(t){this.method=t}};Zt.RegistrationType=XE;var ZE=class extends Qo.RequestType0{static{r(this,"ProtocolRequestType0")}constructor(t){super(t)}};Zt.ProtocolRequestType0=ZE;var $E=class extends Qo.RequestType{static{r(this,"ProtocolRequestType")}constructor(t){super(t,Qo.ParameterStructures.byName)}};Zt.ProtocolRequestType=$E;var eS=class extends Qo.NotificationType0{static{r(this,"ProtocolNotificationType0")}constructor(t){super(t)}};Zt.ProtocolNotificationType0=eS;var tS=class extends Qo.NotificationType{static{r(this,"ProtocolNotificationType")}constructor(t){super(t,Qo.ParameterStructures.byName)}};Zt.ProtocolNotificationType=tS});var Jc=j(at=>{"use strict";Object.defineProperty(at,"__esModule",{value:!0});at.objectLiteral=at.typedArray=at.stringArray=at.array=at.func=at.error=at.number=at.string=at.boolean=void 0;function gP(e){return e===!0||e===!1}r(gP,"boolean");at.boolean=gP;function u_(e){return typeof e=="string"||e instanceof String}r(u_,"string");at.string=u_;function TP(e){return typeof e=="number"||e instanceof Number}r(TP,"number");at.number=TP;function EP(e){return e instanceof Error}r(EP,"error");at.error=EP;function SP(e){return typeof e=="function"}r(SP,"func");at.func=SP;function d_(e){return Array.isArray(e)}r(d_,"array");at.array=d_;function yP(e){return d_(e)&&e.every(t=>u_(t))}r(yP,"stringArray");at.stringArray=yP;function _P(e,t){return Array.isArray(e)&&e.every(t)}r(_P,"typedArray");at.typedArray=_P;function xP(e){return e!==null&&typeof e=="object"}r(xP,"objectLiteral");at.objectLiteral=xP});var m_=j(Qc=>{"use strict";Object.defineProperty(Qc,"__esModule",{value:!0});Qc.ImplementationRequest=void 0;var p_=Ne(),f_;(function(e){e.method="textDocument/implementation",e.messageDirection=p_.MessageDirection.clientToServer,e.type=new p_.ProtocolRequestType(e.method)})(f_||(Qc.ImplementationRequest=f_={}))});var T_=j(Xc=>{"use strict";Object.defineProperty(Xc,"__esModule",{value:!0});Xc.TypeDefinitionRequest=void 0;var h_=Ne(),g_;(function(e){e.method="textDocument/typeDefinition",e.messageDirection=h_.MessageDirection.clientToServer,e.type=new h_.ProtocolRequestType(e.method)})(g_||(Xc.TypeDefinitionRequest=g_={}))});var y_=j(Xo=>{"use strict";Object.defineProperty(Xo,"__esModule",{value:!0});Xo.DidChangeWorkspaceFoldersNotification=Xo.WorkspaceFoldersRequest=void 0;var Zc=Ne(),E_;(function(e){e.method="workspace/workspaceFolders",e.messageDirection=Zc.MessageDirection.serverToClient,e.type=new Zc.ProtocolRequestType0(e.method)})(E_||(Xo.WorkspaceFoldersRequest=E_={}));var S_;(function(e){e.method="workspace/didChangeWorkspaceFolders",e.messageDirection=Zc.MessageDirection.clientToServer,e.type=new Zc.ProtocolNotificationType(e.method)})(S_||(Xo.DidChangeWorkspaceFoldersNotification=S_={}))});var b_=j($c=>{"use strict";Object.defineProperty($c,"__esModule",{value:!0});$c.ConfigurationRequest=void 0;var __=Ne(),x_;(function(e){e.method="workspace/configuration",e.messageDirection=__.MessageDirection.serverToClient,e.type=new __.ProtocolRequestType(e.method)})(x_||($c.ConfigurationRequest=x_={}))});var k_=j(Zo=>{"use strict";Object.defineProperty(Zo,"__esModule",{value:!0});Zo.ColorPresentationRequest=Zo.DocumentColorRequest=void 0;var el=Ne(),R_;(function(e){e.method="textDocument/documentColor",e.messageDirection=el.MessageDirection.clientToServer,e.type=new el.ProtocolRequestType(e.method)})(R_||(Zo.DocumentColorRequest=R_={}));var A_;(function(e){e.method="textDocument/colorPresentation",e.messageDirection=el.MessageDirection.clientToServer,e.type=new el.ProtocolRequestType(e.method)})(A_||(Zo.ColorPresentationRequest=A_={}))});var v_=j($o=>{"use strict";Object.defineProperty($o,"__esModule",{value:!0});$o.FoldingRangeRefreshRequest=$o.FoldingRangeRequest=void 0;var tl=Ne(),U_;(function(e){e.method="textDocument/foldingRange",e.messageDirection=tl.MessageDirection.clientToServer,e.type=new tl.ProtocolRequestType(e.method)})(U_||($o.FoldingRangeRequest=U_={}));var C_;(function(e){e.method="workspace/foldingRange/refresh",e.messageDirection=tl.MessageDirection.serverToClient,e.type=new tl.ProtocolRequestType0(e.method)})(C_||($o.FoldingRangeRefreshRequest=C_={}))});var N_=j(rl=>{"use strict";Object.defineProperty(rl,"__esModule",{value:!0});rl.DeclarationRequest=void 0;var O_=Ne(),L_;(function(e){e.method="textDocument/declaration",e.messageDirection=O_.MessageDirection.clientToServer,e.type=new O_.ProtocolRequestType(e.method)})(L_||(rl.DeclarationRequest=L_={}))});var F_=j(nl=>{"use strict";Object.defineProperty(nl,"__esModule",{value:!0});nl.SelectionRangeRequest=void 0;var M_=Ne(),w_;(function(e){e.method="textDocument/selectionRange",e.messageDirection=M_.MessageDirection.clientToServer,e.type=new M_.ProtocolRequestType(e.method)})(w_||(nl.SelectionRangeRequest=w_={}))});var q_=j(kn=>{"use strict";Object.defineProperty(kn,"__esModule",{value:!0});kn.WorkDoneProgressCancelNotification=kn.WorkDoneProgressCreateRequest=kn.WorkDoneProgress=void 0;var bP=To(),ol=Ne(),I_;(function(e){e.type=new bP.ProgressType;function t(n){return n===e.type}r(t,"is"),e.is=t})(I_||(kn.WorkDoneProgress=I_={}));var P_;(function(e){e.method="window/workDoneProgress/create",e.messageDirection=ol.MessageDirection.serverToClient,e.type=new ol.ProtocolRequestType(e.method)})(P_||(kn.WorkDoneProgressCreateRequest=P_={}));var D_;(function(e){e.method="window/workDoneProgress/cancel",e.messageDirection=ol.MessageDirection.clientToServer,e.type=new ol.ProtocolNotificationType(e.method)})(D_||(kn.WorkDoneProgressCancelNotification=D_={}))});var V_=j(Un=>{"use strict";Object.defineProperty(Un,"__esModule",{value:!0});Un.CallHierarchyOutgoingCallsRequest=Un.CallHierarchyIncomingCallsRequest=Un.CallHierarchyPrepareRequest=void 0;var ei=Ne(),B_;(function(e){e.method="textDocument/prepareCallHierarchy",e.messageDirection=ei.MessageDirection.clientToServer,e.type=new ei.ProtocolRequestType(e.method)})(B_||(Un.CallHierarchyPrepareRequest=B_={}));var G_;(function(e){e.method="callHierarchy/incomingCalls",e.messageDirection=ei.MessageDirection.clientToServer,e.type=new ei.ProtocolRequestType(e.method)})(G_||(Un.CallHierarchyIncomingCallsRequest=G_={}));var j_;(function(e){e.method="callHierarchy/outgoingCalls",e.messageDirection=ei.MessageDirection.clientToServer,e.type=new ei.ProtocolRequestType(e.method)})(j_||(Un.CallHierarchyOutgoingCallsRequest=j_={}))});var J_=j($t=>{"use strict";Object.defineProperty($t,"__esModule",{value:!0});$t.SemanticTokensRefreshRequest=$t.SemanticTokensRangeRequest=$t.SemanticTokensDeltaRequest=$t.SemanticTokensRequest=$t.SemanticTokensRegistrationType=$t.TokenFormat=void 0;var ln=Ne(),W_;(function(e){e.Relative="relative"})(W_||($t.TokenFormat=W_={}));var cs;(function(e){e.method="textDocument/semanticTokens",e.type=new ln.RegistrationType(e.method)})(cs||($t.SemanticTokensRegistrationType=cs={}));var z_;(function(e){e.method="textDocument/semanticTokens/full",e.messageDirection=ln.MessageDirection.clientToServer,e.type=new ln.ProtocolRequestType(e.method),e.registrationMethod=cs.method})(z_||($t.SemanticTokensRequest=z_={}));var H_;(function(e){e.method="textDocument/semanticTokens/full/delta",e.messageDirection=ln.MessageDirection.clientToServer,e.type=new ln.ProtocolRequestType(e.method),e.registrationMethod=cs.method})(H_||($t.SemanticTokensDeltaRequest=H_={}));var Y_;(function(e){e.method="textDocument/semanticTokens/range",e.messageDirection=ln.MessageDirection.clientToServer,e.type=new ln.ProtocolRequestType(e.method),e.registrationMethod=cs.method})(Y_||($t.SemanticTokensRangeRequest=Y_={}));var K_;(function(e){e.method="workspace/semanticTokens/refresh",e.messageDirection=ln.MessageDirection.serverToClient,e.type=new ln.ProtocolRequestType0(e.method)})(K_||($t.SemanticTokensRefreshRequest=K_={}))});var Z_=j(il=>{"use strict";Object.defineProperty(il,"__esModule",{value:!0});il.ShowDocumentRequest=void 0;var Q_=Ne(),X_;(function(e){e.method="window/showDocument",e.messageDirection=Q_.MessageDirection.serverToClient,e.type=new Q_.ProtocolRequestType(e.method)})(X_||(il.ShowDocumentRequest=X_={}))});var tx=j(al=>{"use strict";Object.defineProperty(al,"__esModule",{value:!0});al.LinkedEditingRangeRequest=void 0;var $_=Ne(),ex;(function(e){e.method="textDocument/linkedEditingRange",e.messageDirection=$_.MessageDirection.clientToServer,e.type=new $_.ProtocolRequestType(e.method)})(ex||(al.LinkedEditingRangeRequest=ex={}))});var lx=j(Nt=>{"use strict";Object.defineProperty(Nt,"__esModule",{value:!0});Nt.WillDeleteFilesRequest=Nt.DidDeleteFilesNotification=Nt.DidRenameFilesNotification=Nt.WillRenameFilesRequest=Nt.DidCreateFilesNotification=Nt.WillCreateFilesRequest=Nt.FileOperationPatternKind=void 0;var hr=Ne(),rx;(function(e){e.file="file",e.folder="folder"})(rx||(Nt.FileOperationPatternKind=rx={}));var nx;(function(e){e.method="workspace/willCreateFiles",e.messageDirection=hr.MessageDirection.clientToServer,e.type=new hr.ProtocolRequestType(e.method)})(nx||(Nt.WillCreateFilesRequest=nx={}));var ox;(function(e){e.method="workspace/didCreateFiles",e.messageDirection=hr.MessageDirection.clientToServer,e.type=new hr.ProtocolNotificationType(e.method)})(ox||(Nt.DidCreateFilesNotification=ox={}));var ix;(function(e){e.method="workspace/willRenameFiles",e.messageDirection=hr.MessageDirection.clientToServer,e.type=new hr.ProtocolRequestType(e.method)})(ix||(Nt.WillRenameFilesRequest=ix={}));var ax;(function(e){e.method="workspace/didRenameFiles",e.messageDirection=hr.MessageDirection.clientToServer,e.type=new hr.ProtocolNotificationType(e.method)})(ax||(Nt.DidRenameFilesNotification=ax={}));var sx;(function(e){e.method="workspace/didDeleteFiles",e.messageDirection=hr.MessageDirection.clientToServer,e.type=new hr.ProtocolNotificationType(e.method)})(sx||(Nt.DidDeleteFilesNotification=sx={}));var cx;(function(e){e.method="workspace/willDeleteFiles",e.messageDirection=hr.MessageDirection.clientToServer,e.type=new hr.ProtocolRequestType(e.method)})(cx||(Nt.WillDeleteFilesRequest=cx={}))});var mx=j(Cn=>{"use strict";Object.defineProperty(Cn,"__esModule",{value:!0});Cn.MonikerRequest=Cn.MonikerKind=Cn.UniquenessLevel=void 0;var ux=Ne(),dx;(function(e){e.document="document",e.project="project",e.group="group",e.scheme="scheme",e.global="global"})(dx||(Cn.UniquenessLevel=dx={}));var px;(function(e){e.$import="import",e.$export="export",e.local="local"})(px||(Cn.MonikerKind=px={}));var fx;(function(e){e.method="textDocument/moniker",e.messageDirection=ux.MessageDirection.clientToServer,e.type=new ux.ProtocolRequestType(e.method)})(fx||(Cn.MonikerRequest=fx={}))});var Ex=j(vn=>{"use strict";Object.defineProperty(vn,"__esModule",{value:!0});vn.TypeHierarchySubtypesRequest=vn.TypeHierarchySupertypesRequest=vn.TypeHierarchyPrepareRequest=void 0;var ti=Ne(),hx;(function(e){e.method="textDocument/prepareTypeHierarchy",e.messageDirection=ti.MessageDirection.clientToServer,e.type=new ti.ProtocolRequestType(e.method)})(hx||(vn.TypeHierarchyPrepareRequest=hx={}));var gx;(function(e){e.method="typeHierarchy/supertypes",e.messageDirection=ti.MessageDirection.clientToServer,e.type=new ti.ProtocolRequestType(e.method)})(gx||(vn.TypeHierarchySupertypesRequest=gx={}));var Tx;(function(e){e.method="typeHierarchy/subtypes",e.messageDirection=ti.MessageDirection.clientToServer,e.type=new ti.ProtocolRequestType(e.method)})(Tx||(vn.TypeHierarchySubtypesRequest=Tx={}))});var _x=j(ri=>{"use strict";Object.defineProperty(ri,"__esModule",{value:!0});ri.InlineValueRefreshRequest=ri.InlineValueRequest=void 0;var sl=Ne(),Sx;(function(e){e.method="textDocument/inlineValue",e.messageDirection=sl.MessageDirection.clientToServer,e.type=new sl.ProtocolRequestType(e.method)})(Sx||(ri.InlineValueRequest=Sx={}));var yx;(function(e){e.method="workspace/inlineValue/refresh",e.messageDirection=sl.MessageDirection.serverToClient,e.type=new sl.ProtocolRequestType0(e.method)})(yx||(ri.InlineValueRefreshRequest=yx={}))});var Ax=j(On=>{"use strict";Object.defineProperty(On,"__esModule",{value:!0});On.InlayHintRefreshRequest=On.InlayHintResolveRequest=On.InlayHintRequest=void 0;var ni=Ne(),xx;(function(e){e.method="textDocument/inlayHint",e.messageDirection=ni.MessageDirection.clientToServer,e.type=new ni.ProtocolRequestType(e.method)})(xx||(On.InlayHintRequest=xx={}));var bx;(function(e){e.method="inlayHint/resolve",e.messageDirection=ni.MessageDirection.clientToServer,e.type=new ni.ProtocolRequestType(e.method)})(bx||(On.InlayHintResolveRequest=bx={}));var Rx;(function(e){e.method="workspace/inlayHint/refresh",e.messageDirection=ni.MessageDirection.serverToClient,e.type=new ni.ProtocolRequestType0(e.method)})(Rx||(On.InlayHintRefreshRequest=Rx={}))});var Nx=j(gr=>{"use strict";Object.defineProperty(gr,"__esModule",{value:!0});gr.DiagnosticRefreshRequest=gr.WorkspaceDiagnosticRequest=gr.DocumentDiagnosticRequest=gr.DocumentDiagnosticReportKind=gr.DiagnosticServerCancellationData=void 0;var Lx=To(),RP=Jc(),oi=Ne(),kx;(function(e){function t(n){let o=n;return o&&RP.boolean(o.retriggerRequest)}r(t,"is"),e.is=t})(kx||(gr.DiagnosticServerCancellationData=kx={}));var Ux;(function(e){e.Full="full",e.Unchanged="unchanged"})(Ux||(gr.DocumentDiagnosticReportKind=Ux={}));var Cx;(function(e){e.method="textDocument/diagnostic",e.messageDirection=oi.MessageDirection.clientToServer,e.type=new oi.ProtocolRequestType(e.method),e.partialResult=new Lx.ProgressType})(Cx||(gr.DocumentDiagnosticRequest=Cx={}));var vx;(function(e){e.method="workspace/diagnostic",e.messageDirection=oi.MessageDirection.clientToServer,e.type=new oi.ProtocolRequestType(e.method),e.partialResult=new Lx.ProgressType})(vx||(gr.WorkspaceDiagnosticRequest=vx={}));var Ox;(function(e){e.method="workspace/diagnostic/refresh",e.messageDirection=oi.MessageDirection.serverToClient,e.type=new oi.ProtocolRequestType0(e.method)})(Ox||(gr.DiagnosticRefreshRequest=Ox={}))});var qx=j(Je=>{"use strict";Object.defineProperty(Je,"__esModule",{value:!0});Je.DidCloseNotebookDocumentNotification=Je.DidSaveNotebookDocumentNotification=Je.DidChangeNotebookDocumentNotification=Je.NotebookCellArrayChange=Je.DidOpenNotebookDocumentNotification=Je.NotebookDocumentSyncRegistrationType=Je.NotebookDocument=Je.NotebookCell=Je.ExecutionSummary=Je.NotebookCellKind=void 0;var ls=(Kc(),qg(Yc)),Or=Jc(),Gr=Ne(),rS;(function(e){e.Markup=1,e.Code=2;function t(n){return n===1||n===2}r(t,"is"),e.is=t})(rS||(Je.NotebookCellKind=rS={}));var nS;(function(e){function t(i,a){let s={executionOrder:i};return(a===!0||a===!1)&&(s.success=a),s}r(t,"create"),e.create=t;function n(i){let a=i;return Or.objectLiteral(a)&&ls.uinteger.is(a.executionOrder)&&(a.success===void 0||Or.boolean(a.success))}r(n,"is"),e.is=n;function o(i,a){return i===a?!0:i==null||a===null||a===void 0?!1:i.executionOrder===a.executionOrder&&i.success===a.success}r(o,"equals"),e.equals=o})(nS||(Je.ExecutionSummary=nS={}));var cl;(function(e){function t(a,s){return{kind:a,document:s}}r(t,"create"),e.create=t;function n(a){let s=a;return Or.objectLiteral(s)&&rS.is(s.kind)&&ls.DocumentUri.is(s.document)&&(s.metadata===void 0||Or.objectLiteral(s.metadata))}r(n,"is"),e.is=n;function o(a,s){let c=new Set;return a.document!==s.document&&c.add("document"),a.kind!==s.kind&&c.add("kind"),a.executionSummary!==s.executionSummary&&c.add("executionSummary"),(a.metadata!==void 0||s.metadata!==void 0)&&!i(a.metadata,s.metadata)&&c.add("metadata"),(a.executionSummary!==void 0||s.executionSummary!==void 0)&&!nS.equals(a.executionSummary,s.executionSummary)&&c.add("executionSummary"),c}r(o,"diff"),e.diff=o;function i(a,s){if(a===s)return!0;if(a==null||s===null||s===void 0||typeof a!=typeof s||typeof a!="object")return!1;let c=Array.isArray(a),l=Array.isArray(s);if(c!==l)return!1;if(c&&l){if(a.length!==s.length)return!1;for(let d=0;d<a.length;d++)if(!i(a[d],s[d]))return!1}if(Or.objectLiteral(a)&&Or.objectLiteral(s)){let d=Object.keys(a),f=Object.keys(s);if(d.length!==f.length||(d.sort(),f.sort(),!i(d,f)))return!1;for(let g=0;g<d.length;g++){let _=d[g];if(!i(a[_],s[_]))return!1}}return!0}r(i,"equalsMetadata")})(cl||(Je.NotebookCell=cl={}));var Mx;(function(e){function t(o,i,a,s){return{uri:o,notebookType:i,version:a,cells:s}}r(t,"create"),e.create=t;function n(o){let i=o;return Or.objectLiteral(i)&&Or.string(i.uri)&&ls.integer.is(i.version)&&Or.typedArray(i.cells,cl.is)}r(n,"is"),e.is=n})(Mx||(Je.NotebookDocument=Mx={}));var ii;(function(e){e.method="notebookDocument/sync",e.messageDirection=Gr.MessageDirection.clientToServer,e.type=new Gr.RegistrationType(e.method)})(ii||(Je.NotebookDocumentSyncRegistrationType=ii={}));var wx;(function(e){e.method="notebookDocument/didOpen",e.messageDirection=Gr.MessageDirection.clientToServer,e.type=new Gr.ProtocolNotificationType(e.method),e.registrationMethod=ii.method})(wx||(Je.DidOpenNotebookDocumentNotification=wx={}));var Fx;(function(e){function t(o){let i=o;return Or.objectLiteral(i)&&ls.uinteger.is(i.start)&&ls.uinteger.is(i.deleteCount)&&(i.cells===void 0||Or.typedArray(i.cells,cl.is))}r(t,"is"),e.is=t;function n(o,i,a){let s={start:o,deleteCount:i};return a!==void 0&&(s.cells=a),s}r(n,"create"),e.create=n})(Fx||(Je.NotebookCellArrayChange=Fx={}));var Ix;(function(e){e.method="notebookDocument/didChange",e.messageDirection=Gr.MessageDirection.clientToServer,e.type=new Gr.ProtocolNotificationType(e.method),e.registrationMethod=ii.method})(Ix||(Je.DidChangeNotebookDocumentNotification=Ix={}));var Px;(function(e){e.method="notebookDocument/didSave",e.messageDirection=Gr.MessageDirection.clientToServer,e.type=new Gr.ProtocolNotificationType(e.method),e.registrationMethod=ii.method})(Px||(Je.DidSaveNotebookDocumentNotification=Px={}));var Dx;(function(e){e.method="notebookDocument/didClose",e.messageDirection=Gr.MessageDirection.clientToServer,e.type=new Gr.ProtocolNotificationType(e.method),e.registrationMethod=ii.method})(Dx||(Je.DidCloseNotebookDocumentNotification=Dx={}))});var jx=j(ll=>{"use strict";Object.defineProperty(ll,"__esModule",{value:!0});ll.InlineCompletionRequest=void 0;var Bx=Ne(),Gx;(function(e){e.method="textDocument/inlineCompletion",e.messageDirection=Bx.MessageDirection.clientToServer,e.type=new Bx.ProtocolRequestType(e.method)})(Gx||(ll.InlineCompletionRequest=Gx={}))});var tR=j(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});m.WorkspaceSymbolRequest=m.CodeActionResolveRequest=m.CodeActionRequest=m.DocumentSymbolRequest=m.DocumentHighlightRequest=m.ReferencesRequest=m.DefinitionRequest=m.SignatureHelpRequest=m.SignatureHelpTriggerKind=m.HoverRequest=m.CompletionResolveRequest=m.CompletionRequest=m.CompletionTriggerKind=m.PublishDiagnosticsNotification=m.WatchKind=m.RelativePattern=m.FileChangeType=m.DidChangeWatchedFilesNotification=m.WillSaveTextDocumentWaitUntilRequest=m.WillSaveTextDocumentNotification=m.TextDocumentSaveReason=m.DidSaveTextDocumentNotification=m.DidCloseTextDocumentNotification=m.DidChangeTextDocumentNotification=m.TextDocumentContentChangeEvent=m.DidOpenTextDocumentNotification=m.TextDocumentSyncKind=m.TelemetryEventNotification=m.LogMessageNotification=m.ShowMessageRequest=m.ShowMessageNotification=m.MessageType=m.DidChangeConfigurationNotification=m.ExitNotification=m.ShutdownRequest=m.InitializedNotification=m.InitializeErrorCodes=m.InitializeRequest=m.WorkDoneProgressOptions=m.TextDocumentRegistrationOptions=m.StaticRegistrationOptions=m.PositionEncodingKind=m.FailureHandlingKind=m.ResourceOperationKind=m.UnregistrationRequest=m.RegistrationRequest=m.DocumentSelector=m.NotebookCellTextDocumentFilter=m.NotebookDocumentFilter=m.TextDocumentFilter=void 0;m.MonikerRequest=m.MonikerKind=m.UniquenessLevel=m.WillDeleteFilesRequest=m.DidDeleteFilesNotification=m.WillRenameFilesRequest=m.DidRenameFilesNotification=m.WillCreateFilesRequest=m.DidCreateFilesNotification=m.FileOperationPatternKind=m.LinkedEditingRangeRequest=m.ShowDocumentRequest=m.SemanticTokensRegistrationType=m.SemanticTokensRefreshRequest=m.SemanticTokensRangeRequest=m.SemanticTokensDeltaRequest=m.SemanticTokensRequest=m.TokenFormat=m.CallHierarchyPrepareRequest=m.CallHierarchyOutgoingCallsRequest=m.CallHierarchyIncomingCallsRequest=m.WorkDoneProgressCancelNotification=m.WorkDoneProgressCreateRequest=m.WorkDoneProgress=m.SelectionRangeRequest=m.DeclarationRequest=m.FoldingRangeRefreshRequest=m.FoldingRangeRequest=m.ColorPresentationRequest=m.DocumentColorRequest=m.ConfigurationRequest=m.DidChangeWorkspaceFoldersNotification=m.WorkspaceFoldersRequest=m.TypeDefinitionRequest=m.ImplementationRequest=m.ApplyWorkspaceEditRequest=m.ExecuteCommandRequest=m.PrepareRenameRequest=m.RenameRequest=m.PrepareSupportDefaultBehavior=m.DocumentOnTypeFormattingRequest=m.DocumentRangesFormattingRequest=m.DocumentRangeFormattingRequest=m.DocumentFormattingRequest=m.DocumentLinkResolveRequest=m.DocumentLinkRequest=m.CodeLensRefreshRequest=m.CodeLensResolveRequest=m.CodeLensRequest=m.WorkspaceSymbolResolveRequest=void 0;m.InlineCompletionRequest=m.DidCloseNotebookDocumentNotification=m.DidSaveNotebookDocumentNotification=m.DidChangeNotebookDocumentNotification=m.NotebookCellArrayChange=m.DidOpenNotebookDocumentNotification=m.NotebookDocumentSyncRegistrationType=m.NotebookDocument=m.NotebookCell=m.ExecutionSummary=m.NotebookCellKind=m.DiagnosticRefreshRequest=m.WorkspaceDiagnosticRequest=m.DocumentDiagnosticRequest=m.DocumentDiagnosticReportKind=m.DiagnosticServerCancellationData=m.InlayHintRefreshRequest=m.InlayHintResolveRequest=m.InlayHintRequest=m.InlineValueRefreshRequest=m.InlineValueRequest=m.TypeHierarchySupertypesRequest=m.TypeHierarchySubtypesRequest=m.TypeHierarchyPrepareRequest=void 0;var F=Ne(),Vx=(Kc(),qg(Yc)),yt=Jc(),AP=m_();Object.defineProperty(m,"ImplementationRequest",{enumerable:!0,get:r(function(){return AP.ImplementationRequest},"get")});var kP=T_();Object.defineProperty(m,"TypeDefinitionRequest",{enumerable:!0,get:r(function(){return kP.TypeDefinitionRequest},"get")});var Xb=y_();Object.defineProperty(m,"WorkspaceFoldersRequest",{enumerable:!0,get:r(function(){return Xb.WorkspaceFoldersRequest},"get")});Object.defineProperty(m,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:r(function(){return Xb.DidChangeWorkspaceFoldersNotification},"get")});var UP=b_();Object.defineProperty(m,"ConfigurationRequest",{enumerable:!0,get:r(function(){return UP.ConfigurationRequest},"get")});var Zb=k_();Object.defineProperty(m,"DocumentColorRequest",{enumerable:!0,get:r(function(){return Zb.DocumentColorRequest},"get")});Object.defineProperty(m,"ColorPresentationRequest",{enumerable:!0,get:r(function(){return Zb.ColorPresentationRequest},"get")});var $b=v_();Object.defineProperty(m,"FoldingRangeRequest",{enumerable:!0,get:r(function(){return $b.FoldingRangeRequest},"get")});Object.defineProperty(m,"FoldingRangeRefreshRequest",{enumerable:!0,get:r(function(){return $b.FoldingRangeRefreshRequest},"get")});var CP=N_();Object.defineProperty(m,"DeclarationRequest",{enumerable:!0,get:r(function(){return CP.DeclarationRequest},"get")});var vP=F_();Object.defineProperty(m,"SelectionRangeRequest",{enumerable:!0,get:r(function(){return vP.SelectionRangeRequest},"get")});var cS=q_();Object.defineProperty(m,"WorkDoneProgress",{enumerable:!0,get:r(function(){return cS.WorkDoneProgress},"get")});Object.defineProperty(m,"WorkDoneProgressCreateRequest",{enumerable:!0,get:r(function(){return cS.WorkDoneProgressCreateRequest},"get")});Object.defineProperty(m,"WorkDoneProgressCancelNotification",{enumerable:!0,get:r(function(){return cS.WorkDoneProgressCancelNotification},"get")});var lS=V_();Object.defineProperty(m,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:r(function(){return lS.CallHierarchyIncomingCallsRequest},"get")});Object.defineProperty(m,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:r(function(){return lS.CallHierarchyOutgoingCallsRequest},"get")});Object.defineProperty(m,"CallHierarchyPrepareRequest",{enumerable:!0,get:r(function(){return lS.CallHierarchyPrepareRequest},"get")});var ai=J_();Object.defineProperty(m,"TokenFormat",{enumerable:!0,get:r(function(){return ai.TokenFormat},"get")});Object.defineProperty(m,"SemanticTokensRequest",{enumerable:!0,get:r(function(){return ai.SemanticTokensRequest},"get")});Object.defineProperty(m,"SemanticTokensDeltaRequest",{enumerable:!0,get:r(function(){return ai.SemanticTokensDeltaRequest},"get")});Object.defineProperty(m,"SemanticTokensRangeRequest",{enumerable:!0,get:r(function(){return ai.SemanticTokensRangeRequest},"get")});Object.defineProperty(m,"SemanticTokensRefreshRequest",{enumerable:!0,get:r(function(){return ai.SemanticTokensRefreshRequest},"get")});Object.defineProperty(m,"SemanticTokensRegistrationType",{enumerable:!0,get:r(function(){return ai.SemanticTokensRegistrationType},"get")});var OP=Z_();Object.defineProperty(m,"ShowDocumentRequest",{enumerable:!0,get:r(function(){return OP.ShowDocumentRequest},"get")});var LP=tx();Object.defineProperty(m,"LinkedEditingRangeRequest",{enumerable:!0,get:r(function(){return LP.LinkedEditingRangeRequest},"get")});var yo=lx();Object.defineProperty(m,"FileOperationPatternKind",{enumerable:!0,get:r(function(){return yo.FileOperationPatternKind},"get")});Object.defineProperty(m,"DidCreateFilesNotification",{enumerable:!0,get:r(function(){return yo.DidCreateFilesNotification},"get")});Object.defineProperty(m,"WillCreateFilesRequest",{enumerable:!0,get:r(function(){return yo.WillCreateFilesRequest},"get")});Object.defineProperty(m,"DidRenameFilesNotification",{enumerable:!0,get:r(function(){return yo.DidRenameFilesNotification},"get")});Object.defineProperty(m,"WillRenameFilesRequest",{enumerable:!0,get:r(function(){return yo.WillRenameFilesRequest},"get")});Object.defineProperty(m,"DidDeleteFilesNotification",{enumerable:!0,get:r(function(){return yo.DidDeleteFilesNotification},"get")});Object.defineProperty(m,"WillDeleteFilesRequest",{enumerable:!0,get:r(function(){return yo.WillDeleteFilesRequest},"get")});var uS=mx();Object.defineProperty(m,"UniquenessLevel",{enumerable:!0,get:r(function(){return uS.UniquenessLevel},"get")});Object.defineProperty(m,"MonikerKind",{enumerable:!0,get:r(function(){return uS.MonikerKind},"get")});Object.defineProperty(m,"MonikerRequest",{enumerable:!0,get:r(function(){return uS.MonikerRequest},"get")});var dS=Ex();Object.defineProperty(m,"TypeHierarchyPrepareRequest",{enumerable:!0,get:r(function(){return dS.TypeHierarchyPrepareRequest},"get")});Object.defineProperty(m,"TypeHierarchySubtypesRequest",{enumerable:!0,get:r(function(){return dS.TypeHierarchySubtypesRequest},"get")});Object.defineProperty(m,"TypeHierarchySupertypesRequest",{enumerable:!0,get:r(function(){return dS.TypeHierarchySupertypesRequest},"get")});var eR=_x();Object.defineProperty(m,"InlineValueRequest",{enumerable:!0,get:r(function(){return eR.InlineValueRequest},"get")});Object.defineProperty(m,"InlineValueRefreshRequest",{enumerable:!0,get:r(function(){return eR.InlineValueRefreshRequest},"get")});var pS=Ax();Object.defineProperty(m,"InlayHintRequest",{enumerable:!0,get:r(function(){return pS.InlayHintRequest},"get")});Object.defineProperty(m,"InlayHintResolveRequest",{enumerable:!0,get:r(function(){return pS.InlayHintResolveRequest},"get")});Object.defineProperty(m,"InlayHintRefreshRequest",{enumerable:!0,get:r(function(){return pS.InlayHintRefreshRequest},"get")});var us=Nx();Object.defineProperty(m,"DiagnosticServerCancellationData",{enumerable:!0,get:r(function(){return us.DiagnosticServerCancellationData},"get")});Object.defineProperty(m,"DocumentDiagnosticReportKind",{enumerable:!0,get:r(function(){return us.DocumentDiagnosticReportKind},"get")});Object.defineProperty(m,"DocumentDiagnosticRequest",{enumerable:!0,get:r(function(){return us.DocumentDiagnosticRequest},"get")});Object.defineProperty(m,"WorkspaceDiagnosticRequest",{enumerable:!0,get:r(function(){return us.WorkspaceDiagnosticRequest},"get")});Object.defineProperty(m,"DiagnosticRefreshRequest",{enumerable:!0,get:r(function(){return us.DiagnosticRefreshRequest},"get")});var jr=qx();Object.defineProperty(m,"NotebookCellKind",{enumerable:!0,get:r(function(){return jr.NotebookCellKind},"get")});Object.defineProperty(m,"ExecutionSummary",{enumerable:!0,get:r(function(){return jr.ExecutionSummary},"get")});Object.defineProperty(m,"NotebookCell",{enumerable:!0,get:r(function(){return jr.NotebookCell},"get")});Object.defineProperty(m,"NotebookDocument",{enumerable:!0,get:r(function(){return jr.NotebookDocument},"get")});Object.defineProperty(m,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:r(function(){return jr.NotebookDocumentSyncRegistrationType},"get")});Object.defineProperty(m,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:r(function(){return jr.DidOpenNotebookDocumentNotification},"get")});Object.defineProperty(m,"NotebookCellArrayChange",{enumerable:!0,get:r(function(){return jr.NotebookCellArrayChange},"get")});Object.defineProperty(m,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:r(function(){return jr.DidChangeNotebookDocumentNotification},"get")});Object.defineProperty(m,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:r(function(){return jr.DidSaveNotebookDocumentNotification},"get")});Object.defineProperty(m,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:r(function(){return jr.DidCloseNotebookDocumentNotification},"get")});var NP=jx();Object.defineProperty(m,"InlineCompletionRequest",{enumerable:!0,get:r(function(){return NP.InlineCompletionRequest},"get")});var oS;(function(e){function t(n){let o=n;return yt.string(o)||yt.string(o.language)||yt.string(o.scheme)||yt.string(o.pattern)}r(t,"is"),e.is=t})(oS||(m.TextDocumentFilter=oS={}));var iS;(function(e){function t(n){let o=n;return yt.objectLiteral(o)&&(yt.string(o.notebookType)||yt.string(o.scheme)||yt.string(o.pattern))}r(t,"is"),e.is=t})(iS||(m.NotebookDocumentFilter=iS={}));var aS;(function(e){function t(n){let o=n;return yt.objectLiteral(o)&&(yt.string(o.notebook)||iS.is(o.notebook))&&(o.language===void 0||yt.string(o.language))}r(t,"is"),e.is=t})(aS||(m.NotebookCellTextDocumentFilter=aS={}));var sS;(function(e){function t(n){if(!Array.isArray(n))return!1;for(let o of n)if(!yt.string(o)&&!oS.is(o)&&!aS.is(o))return!1;return!0}r(t,"is"),e.is=t})(sS||(m.DocumentSelector=sS={}));var Wx;(function(e){e.method="client/registerCapability",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolRequestType(e.method)})(Wx||(m.RegistrationRequest=Wx={}));var zx;(function(e){e.method="client/unregisterCapability",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolRequestType(e.method)})(zx||(m.UnregistrationRequest=zx={}));var Hx;(function(e){e.Create="create",e.Rename="rename",e.Delete="delete"})(Hx||(m.ResourceOperationKind=Hx={}));var Yx;(function(e){e.Abort="abort",e.Transactional="transactional",e.TextOnlyTransactional="textOnlyTransactional",e.Undo="undo"})(Yx||(m.FailureHandlingKind=Yx={}));var Kx;(function(e){e.UTF8="utf-8",e.UTF16="utf-16",e.UTF32="utf-32"})(Kx||(m.PositionEncodingKind=Kx={}));var Jx;(function(e){function t(n){let o=n;return o&&yt.string(o.id)&&o.id.length>0}r(t,"hasId"),e.hasId=t})(Jx||(m.StaticRegistrationOptions=Jx={}));var Qx;(function(e){function t(n){let o=n;return o&&(o.documentSelector===null||sS.is(o.documentSelector))}r(t,"is"),e.is=t})(Qx||(m.TextDocumentRegistrationOptions=Qx={}));var Xx;(function(e){function t(o){let i=o;return yt.objectLiteral(i)&&(i.workDoneProgress===void 0||yt.boolean(i.workDoneProgress))}r(t,"is"),e.is=t;function n(o){let i=o;return i&&yt.boolean(i.workDoneProgress)}r(n,"hasWorkDoneProgress"),e.hasWorkDoneProgress=n})(Xx||(m.WorkDoneProgressOptions=Xx={}));var Zx;(function(e){e.method="initialize",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Zx||(m.InitializeRequest=Zx={}));var $x;(function(e){e.unknownProtocolVersion=1})($x||(m.InitializeErrorCodes=$x={}));var eb;(function(e){e.method="initialized",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(eb||(m.InitializedNotification=eb={}));var tb;(function(e){e.method="shutdown",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType0(e.method)})(tb||(m.ShutdownRequest=tb={}));var rb;(function(e){e.method="exit",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType0(e.method)})(rb||(m.ExitNotification=rb={}));var nb;(function(e){e.method="workspace/didChangeConfiguration",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(nb||(m.DidChangeConfigurationNotification=nb={}));var ob;(function(e){e.Error=1,e.Warning=2,e.Info=3,e.Log=4,e.Debug=5})(ob||(m.MessageType=ob={}));var ib;(function(e){e.method="window/showMessage",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolNotificationType(e.method)})(ib||(m.ShowMessageNotification=ib={}));var ab;(function(e){e.method="window/showMessageRequest",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolRequestType(e.method)})(ab||(m.ShowMessageRequest=ab={}));var sb;(function(e){e.method="window/logMessage",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolNotificationType(e.method)})(sb||(m.LogMessageNotification=sb={}));var cb;(function(e){e.method="telemetry/event",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolNotificationType(e.method)})(cb||(m.TelemetryEventNotification=cb={}));var lb;(function(e){e.None=0,e.Full=1,e.Incremental=2})(lb||(m.TextDocumentSyncKind=lb={}));var ub;(function(e){e.method="textDocument/didOpen",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(ub||(m.DidOpenTextDocumentNotification=ub={}));var db;(function(e){function t(o){let i=o;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}r(t,"isIncremental"),e.isIncremental=t;function n(o){let i=o;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}r(n,"isFull"),e.isFull=n})(db||(m.TextDocumentContentChangeEvent=db={}));var pb;(function(e){e.method="textDocument/didChange",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(pb||(m.DidChangeTextDocumentNotification=pb={}));var fb;(function(e){e.method="textDocument/didClose",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(fb||(m.DidCloseTextDocumentNotification=fb={}));var mb;(function(e){e.method="textDocument/didSave",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(mb||(m.DidSaveTextDocumentNotification=mb={}));var hb;(function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3})(hb||(m.TextDocumentSaveReason=hb={}));var gb;(function(e){e.method="textDocument/willSave",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(gb||(m.WillSaveTextDocumentNotification=gb={}));var Tb;(function(e){e.method="textDocument/willSaveWaitUntil",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Tb||(m.WillSaveTextDocumentWaitUntilRequest=Tb={}));var Eb;(function(e){e.method="workspace/didChangeWatchedFiles",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(Eb||(m.DidChangeWatchedFilesNotification=Eb={}));var Sb;(function(e){e.Created=1,e.Changed=2,e.Deleted=3})(Sb||(m.FileChangeType=Sb={}));var yb;(function(e){function t(n){let o=n;return yt.objectLiteral(o)&&(Vx.URI.is(o.baseUri)||Vx.WorkspaceFolder.is(o.baseUri))&&yt.string(o.pattern)}r(t,"is"),e.is=t})(yb||(m.RelativePattern=yb={}));var _b;(function(e){e.Create=1,e.Change=2,e.Delete=4})(_b||(m.WatchKind=_b={}));var xb;(function(e){e.method="textDocument/publishDiagnostics",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolNotificationType(e.method)})(xb||(m.PublishDiagnosticsNotification=xb={}));var bb;(function(e){e.Invoked=1,e.TriggerCharacter=2,e.TriggerForIncompleteCompletions=3})(bb||(m.CompletionTriggerKind=bb={}));var Rb;(function(e){e.method="textDocument/completion",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Rb||(m.CompletionRequest=Rb={}));var Ab;(function(e){e.method="completionItem/resolve",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Ab||(m.CompletionResolveRequest=Ab={}));var kb;(function(e){e.method="textDocument/hover",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(kb||(m.HoverRequest=kb={}));var Ub;(function(e){e.Invoked=1,e.TriggerCharacter=2,e.ContentChange=3})(Ub||(m.SignatureHelpTriggerKind=Ub={}));var Cb;(function(e){e.method="textDocument/signatureHelp",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Cb||(m.SignatureHelpRequest=Cb={}));var vb;(function(e){e.method="textDocument/definition",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(vb||(m.DefinitionRequest=vb={}));var Ob;(function(e){e.method="textDocument/references",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Ob||(m.ReferencesRequest=Ob={}));var Lb;(function(e){e.method="textDocument/documentHighlight",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Lb||(m.DocumentHighlightRequest=Lb={}));var Nb;(function(e){e.method="textDocument/documentSymbol",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Nb||(m.DocumentSymbolRequest=Nb={}));var Mb;(function(e){e.method="textDocument/codeAction",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Mb||(m.CodeActionRequest=Mb={}));var wb;(function(e){e.method="codeAction/resolve",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(wb||(m.CodeActionResolveRequest=wb={}));var Fb;(function(e){e.method="workspace/symbol",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Fb||(m.WorkspaceSymbolRequest=Fb={}));var Ib;(function(e){e.method="workspaceSymbol/resolve",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Ib||(m.WorkspaceSymbolResolveRequest=Ib={}));var Pb;(function(e){e.method="textDocument/codeLens",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Pb||(m.CodeLensRequest=Pb={}));var Db;(function(e){e.method="codeLens/resolve",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Db||(m.CodeLensResolveRequest=Db={}));var qb;(function(e){e.method="workspace/codeLens/refresh",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolRequestType0(e.method)})(qb||(m.CodeLensRefreshRequest=qb={}));var Bb;(function(e){e.method="textDocument/documentLink",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Bb||(m.DocumentLinkRequest=Bb={}));var Gb;(function(e){e.method="documentLink/resolve",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Gb||(m.DocumentLinkResolveRequest=Gb={}));var jb;(function(e){e.method="textDocument/formatting",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(jb||(m.DocumentFormattingRequest=jb={}));var Vb;(function(e){e.method="textDocument/rangeFormatting",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Vb||(m.DocumentRangeFormattingRequest=Vb={}));var Wb;(function(e){e.method="textDocument/rangesFormatting",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Wb||(m.DocumentRangesFormattingRequest=Wb={}));var zb;(function(e){e.method="textDocument/onTypeFormatting",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(zb||(m.DocumentOnTypeFormattingRequest=zb={}));var Hb;(function(e){e.Identifier=1})(Hb||(m.PrepareSupportDefaultBehavior=Hb={}));var Yb;(function(e){e.method="textDocument/rename",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Yb||(m.RenameRequest=Yb={}));var Kb;(function(e){e.method="textDocument/prepareRename",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Kb||(m.PrepareRenameRequest=Kb={}));var Jb;(function(e){e.method="workspace/executeCommand",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Jb||(m.ExecuteCommandRequest=Jb={}));var Qb;(function(e){e.method="workspace/applyEdit",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolRequestType("workspace/applyEdit")})(Qb||(m.ApplyWorkspaceEditRequest=Qb={}))});var nR=j(ul=>{"use strict";Object.defineProperty(ul,"__esModule",{value:!0});ul.createProtocolConnection=void 0;var rR=To();function MP(e,t,n,o){return rR.ConnectionStrategy.is(o)&&(o={connectionStrategy:o}),(0,rR.createMessageConnection)(e,t,n,o)}r(MP,"createProtocolConnection");ul.createProtocolConnection=MP});var iR=j(er=>{"use strict";var wP=er&&er.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),dl=er&&er.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&wP(t,e,n)};Object.defineProperty(er,"__esModule",{value:!0});er.LSPErrorCodes=er.createProtocolConnection=void 0;dl(To(),er);dl((Kc(),qg(Yc)),er);dl(Ne(),er);dl(tR(),er);var FP=nR();Object.defineProperty(er,"createProtocolConnection",{enumerable:!0,get:r(function(){return FP.createProtocolConnection},"get")});var oR;(function(e){e.lspReservedErrorRangeStart=-32899,e.RequestFailed=-32803,e.ServerCancelled=-32802,e.ContentModified=-32801,e.RequestCancelled=-32800,e.lspReservedErrorRangeEnd=-32800})(oR||(er.LSPErrorCodes=oR={}))});var tt=j(Vr=>{"use strict";var IP=Vr&&Vr.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),aR=Vr&&Vr.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&IP(t,e,n)};Object.defineProperty(Vr,"__esModule",{value:!0});Vr.createProtocolConnection=void 0;var PP=KT();aR(KT(),Vr);aR(iR(),Vr);function DP(e,t,n,o){return(0,PP.createMessageConnection)(e,t,n,o)}r(DP,"createProtocolConnection");Vr.createProtocolConnection=DP});var mS=j(Ln=>{"use strict";Object.defineProperty(Ln,"__esModule",{value:!0});Ln.SemanticTokensBuilder=Ln.SemanticTokensDiff=Ln.SemanticTokensFeature=void 0;var pl=tt(),qP=r(e=>class extends e{get semanticTokens(){return{refresh:r(()=>this.connection.sendRequest(pl.SemanticTokensRefreshRequest.type),"refresh"),on:r(t=>{let n=pl.SemanticTokensRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"on"),onDelta:r(t=>{let n=pl.SemanticTokensDeltaRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onDelta"),onRange:r(t=>{let n=pl.SemanticTokensRangeRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onRange")}}},"SemanticTokensFeature");Ln.SemanticTokensFeature=qP;var fl=class{static{r(this,"SemanticTokensDiff")}constructor(t,n){this.originalSequence=t,this.modifiedSequence=n}computeDiff(){let t=this.originalSequence.length,n=this.modifiedSequence.length,o=0;for(;o<n&&o<t&&this.originalSequence[o]===this.modifiedSequence[o];)o++;if(o<n&&o<t){let i=t-1,a=n-1;for(;i>=o&&a>=o&&this.originalSequence[i]===this.modifiedSequence[a];)i--,a--;(i<o||a<o)&&(i++,a++);let s=i-o+1,c=this.modifiedSequence.slice(o,a+1);return c.length===1&&c[0]===this.originalSequence[i]?[{start:o,deleteCount:s-1}]:[{start:o,deleteCount:s,data:c}]}else return o<n?[{start:o,deleteCount:0,data:this.modifiedSequence.slice(o)}]:o<t?[{start:o,deleteCount:t-o}]:[]}};Ln.SemanticTokensDiff=fl;var fS=class{static{r(this,"SemanticTokensBuilder")}constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(t,n,o,i,a){let s=t,c=n;this._dataLen>0&&(s-=this._prevLine,s===0&&(c-=this._prevChar)),this._data[this._dataLen++]=s,this._data[this._dataLen++]=c,this._data[this._dataLen++]=o,this._data[this._dataLen++]=i,this._data[this._dataLen++]=a,this._prevLine=t,this._prevChar=n}get id(){return this._id.toString()}previousResult(t){this.id===t&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new fl(this._prevData,this._data).computeDiff()}:this.build()}};Ln.SemanticTokensBuilder=fS});var sR=j(ml=>{"use strict";Object.defineProperty(ml,"__esModule",{value:!0});ml.InlineCompletionFeature=void 0;var BP=tt(),GP=r(e=>class extends e{get inlineCompletion(){return{on:r(t=>this.connection.onRequest(BP.InlineCompletionRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n))),"on")}}},"InlineCompletionFeature");ml.InlineCompletionFeature=GP});var gS=j(hl=>{"use strict";Object.defineProperty(hl,"__esModule",{value:!0});hl.TextDocuments=void 0;var _o=tt(),hS=class{static{r(this,"TextDocuments")}constructor(t){this._configuration=t,this._syncedDocuments=new Map,this._onDidChangeContent=new _o.Emitter,this._onDidOpen=new _o.Emitter,this._onDidClose=new _o.Emitter,this._onDidSave=new _o.Emitter,this._onWillSave=new _o.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(t){this._willSaveWaitUntil=t}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(t){return this._syncedDocuments.get(t)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(t){t.__textDocumentSync=_o.TextDocumentSyncKind.Incremental;let n=[];return n.push(t.onDidOpenTextDocument(o=>{let i=o.textDocument,a=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,a);let s=Object.freeze({document:a});this._onDidOpen.fire(s),this._onDidChangeContent.fire(s)})),n.push(t.onDidChangeTextDocument(o=>{let i=o.textDocument,a=o.contentChanges;if(a.length===0)return;let{version:s}=i;if(s==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let c=this._syncedDocuments.get(i.uri);c!==void 0&&(c=this._configuration.update(c,a,s),this._syncedDocuments.set(i.uri,c),this._onDidChangeContent.fire(Object.freeze({document:c})))})),n.push(t.onDidCloseTextDocument(o=>{let i=this._syncedDocuments.get(o.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(o.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),n.push(t.onWillSaveTextDocument(o=>{let i=this._syncedDocuments.get(o.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:o.reason}))})),n.push(t.onWillSaveTextDocumentWaitUntil((o,i)=>{let a=this._syncedDocuments.get(o.textDocument.uri);return a!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:a,reason:o.reason}),i):[]})),n.push(t.onDidSaveTextDocument(o=>{let i=this._syncedDocuments.get(o.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),_o.Disposable.create(()=>{n.forEach(o=>o.dispose())})}};hl.TextDocuments=hS});var ES=j(si=>{"use strict";Object.defineProperty(si,"__esModule",{value:!0});si.NotebookDocuments=si.NotebookSyncFeature=void 0;var Tr=tt(),cR=gS(),jP=r(e=>class extends e{get synchronization(){return{onDidOpenNotebookDocument:r(t=>this.connection.onNotification(Tr.DidOpenNotebookDocumentNotification.type,n=>{t(n)}),"onDidOpenNotebookDocument"),onDidChangeNotebookDocument:r(t=>this.connection.onNotification(Tr.DidChangeNotebookDocumentNotification.type,n=>{t(n)}),"onDidChangeNotebookDocument"),onDidSaveNotebookDocument:r(t=>this.connection.onNotification(Tr.DidSaveNotebookDocumentNotification.type,n=>{t(n)}),"onDidSaveNotebookDocument"),onDidCloseNotebookDocument:r(t=>this.connection.onNotification(Tr.DidCloseNotebookDocumentNotification.type,n=>{t(n)}),"onDidCloseNotebookDocument")}}},"NotebookSyncFeature");si.NotebookSyncFeature=jP;var gl=class e{static{r(this,"CellTextDocumentConnection")}onDidOpenTextDocument(t){return this.openHandler=t,Tr.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(t){this.openHandler&&this.openHandler(t)}onDidChangeTextDocument(t){return this.changeHandler=t,Tr.Disposable.create(()=>{this.changeHandler=t})}changeTextDocument(t){this.changeHandler&&this.changeHandler(t)}onDidCloseTextDocument(t){return this.closeHandler=t,Tr.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(t){this.closeHandler&&this.closeHandler(t)}onWillSaveTextDocument(){return e.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return e.NULL_DISPOSE}onDidSaveTextDocument(){return e.NULL_DISPOSE}};gl.NULL_DISPOSE=Object.freeze({dispose:r(()=>{},"dispose")});var TS=class{static{r(this,"NotebookDocuments")}constructor(t){t instanceof cR.TextDocuments?this._cellTextDocuments=t:this._cellTextDocuments=new cR.TextDocuments(t),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new Tr.Emitter,this._onDidChange=new Tr.Emitter,this._onDidSave=new Tr.Emitter,this._onDidClose=new Tr.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(t){return this._cellTextDocuments.get(t.document)}getNotebookDocument(t){return this.notebookDocuments.get(t)}getNotebookCell(t){let n=this.notebookCellMap.get(t);return n&&n[0]}findNotebookDocumentForCell(t){let n=typeof t=="string"?t:t.document,o=this.notebookCellMap.get(n);return o&&o[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(t){let n=new gl,o=[];return o.push(this.cellTextDocuments.listen(n)),o.push(t.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(let a of i.cellTextDocuments)n.openTextDocument({textDocument:a});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),o.push(t.notebooks.synchronization.onDidChangeNotebookDocument(i=>{let a=this.notebookDocuments.get(i.notebookDocument.uri);if(a===void 0)return;a.version=i.notebookDocument.version;let s=a.metadata,c=!1,l=i.change;l.metadata!==void 0&&(c=!0,a.metadata=l.metadata);let d=[],f=[],g=[],_=[];if(l.cells!==void 0){let N=l.cells;if(N.structure!==void 0){let S=N.structure.array;if(a.cells.splice(S.start,S.deleteCount,...S.cells!==void 0?S.cells:[]),N.structure.didOpen!==void 0)for(let h of N.structure.didOpen)n.openTextDocument({textDocument:h}),d.push(h.uri);if(N.structure.didClose)for(let h of N.structure.didClose)n.closeTextDocument({textDocument:h}),f.push(h.uri)}if(N.data!==void 0){let S=new Map(N.data.map(h=>[h.document,h]));for(let h=0;h<=a.cells.length;h++){let C=S.get(a.cells[h].document);if(C!==void 0){let P=a.cells.splice(h,1,C);if(g.push({old:P[0],new:C}),S.delete(C.document),S.size===0)break}}}if(N.textContent!==void 0)for(let S of N.textContent)n.changeTextDocument({textDocument:S.document,contentChanges:S.changes}),_.push(S.document.uri)}this.updateCellMap(a);let y={notebookDocument:a};c&&(y.metadata={old:s,new:a.metadata});let M=[];for(let N of d)M.push(this.getNotebookCell(N));let L=[];for(let N of f)L.push(this.getNotebookCell(N));let q=[];for(let N of _)q.push(this.getNotebookCell(N));(M.length>0||L.length>0||g.length>0||q.length>0)&&(y.cells={added:M,removed:L,changed:{data:g,textContent:q}}),(y.metadata!==void 0||y.cells!==void 0)&&this._onDidChange.fire(y)})),o.push(t.notebooks.synchronization.onDidSaveNotebookDocument(i=>{let a=this.notebookDocuments.get(i.notebookDocument.uri);a!==void 0&&this._onDidSave.fire(a)})),o.push(t.notebooks.synchronization.onDidCloseNotebookDocument(i=>{let a=this.notebookDocuments.get(i.notebookDocument.uri);if(a!==void 0){this._onDidClose.fire(a);for(let s of i.cellTextDocuments)n.closeTextDocument({textDocument:s});this.notebookDocuments.delete(i.notebookDocument.uri);for(let s of a.cells)this.notebookCellMap.delete(s.document)}})),Tr.Disposable.create(()=>{o.forEach(i=>i.dispose())})}updateCellMap(t){for(let n of t.cells)this.notebookCellMap.set(n.document,[n,t])}};si.NotebookDocuments=TS});var SS=j(st=>{"use strict";Object.defineProperty(st,"__esModule",{value:!0});st.thenable=st.typedArray=st.stringArray=st.array=st.func=st.error=st.number=st.string=st.boolean=void 0;function VP(e){return e===!0||e===!1}r(VP,"boolean");st.boolean=VP;function lR(e){return typeof e=="string"||e instanceof String}r(lR,"string");st.string=lR;function WP(e){return typeof e=="number"||e instanceof Number}r(WP,"number");st.number=WP;function zP(e){return e instanceof Error}r(zP,"error");st.error=zP;function uR(e){return typeof e=="function"}r(uR,"func");st.func=uR;function dR(e){return Array.isArray(e)}r(dR,"array");st.array=dR;function HP(e){return dR(e)&&e.every(t=>lR(t))}r(HP,"stringArray");st.stringArray=HP;function YP(e,t){return Array.isArray(e)&&e.every(t)}r(YP,"typedArray");st.typedArray=YP;function KP(e){return e&&uR(e.then)}r(KP,"thenable");st.thenable=KP});var yS=j(Er=>{"use strict";Object.defineProperty(Er,"__esModule",{value:!0});Er.generateUuid=Er.parse=Er.isUUID=Er.v4=Er.empty=void 0;var ds=class{static{r(this,"ValueUUID")}constructor(t){this._value=t}asHex(){return this._value}equals(t){return this.asHex()===t.asHex()}},ps=class e extends ds{static{r(this,"V4UUID")}static _oneOf(t){return t[Math.floor(t.length*Math.random())]}static _randomHex(){return e._oneOf(e._chars)}constructor(){super([e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),"-",e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),"-","4",e._randomHex(),e._randomHex(),e._randomHex(),"-",e._oneOf(e._timeHighBits),e._randomHex(),e._randomHex(),e._randomHex(),"-",e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex()].join(""))}};ps._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];ps._timeHighBits=["8","9","a","b"];Er.empty=new ds("00000000-0000-0000-0000-000000000000");function pR(){return new ps}r(pR,"v4");Er.v4=pR;var JP=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function fR(e){return JP.test(e)}r(fR,"isUUID");Er.isUUID=fR;function QP(e){if(!fR(e))throw new Error("invalid uuid");return new ds(e)}r(QP,"parse");Er.parse=QP;function XP(){return pR().asHex()}r(XP,"generateUuid");Er.generateUuid=XP});var mR=j(Mn=>{"use strict";Object.defineProperty(Mn,"__esModule",{value:!0});Mn.attachPartialResult=Mn.ProgressFeature=Mn.attachWorkDone=void 0;var Nn=tt(),ZP=yS(),xo=class e{static{r(this,"WorkDoneProgressReporterImpl")}constructor(t,n){this._connection=t,this._token=n,e.Instances.set(this._token,this)}begin(t,n,o,i){let a={kind:"begin",title:t,percentage:n,message:o,cancellable:i};this._connection.sendProgress(Nn.WorkDoneProgress.type,this._token,a)}report(t,n){let o={kind:"report"};typeof t=="number"?(o.percentage=t,n!==void 0&&(o.message=n)):o.message=t,this._connection.sendProgress(Nn.WorkDoneProgress.type,this._token,o)}done(){e.Instances.delete(this._token),this._connection.sendProgress(Nn.WorkDoneProgress.type,this._token,{kind:"end"})}};xo.Instances=new Map;var Tl=class extends xo{static{r(this,"WorkDoneProgressServerReporterImpl")}constructor(t,n){super(t,n),this._source=new Nn.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},fs=class{static{r(this,"NullProgressReporter")}constructor(){}begin(){}report(){}done(){}},El=class extends fs{static{r(this,"NullProgressServerReporter")}constructor(){super(),this._source=new Nn.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function $P(e,t){if(t===void 0||t.workDoneToken===void 0)return new fs;let n=t.workDoneToken;return delete t.workDoneToken,new xo(e,n)}r($P,"attachWorkDone");Mn.attachWorkDone=$P;var eD=r(e=>class extends e{constructor(){super(),this._progressSupported=!1}initialize(t){super.initialize(t),t?.window?.workDoneProgress===!0&&(this._progressSupported=!0,this.connection.onNotification(Nn.WorkDoneProgressCancelNotification.type,n=>{let o=xo.Instances.get(n.token);(o instanceof Tl||o instanceof El)&&o.cancel()}))}attachWorkDoneProgress(t){return t===void 0?new fs:new xo(this.connection,t)}createWorkDoneProgress(){if(this._progressSupported){let t=(0,ZP.generateUuid)();return this.connection.sendRequest(Nn.WorkDoneProgressCreateRequest.type,{token:t}).then(()=>new Tl(this.connection,t))}else return Promise.resolve(new El)}},"ProgressFeature");Mn.ProgressFeature=eD;var _S;(function(e){e.type=new Nn.ProgressType})(_S||(_S={}));var xS=class{static{r(this,"ResultProgressReporterImpl")}constructor(t,n){this._connection=t,this._token=n}report(t){this._connection.sendProgress(_S.type,this._token,t)}};function tD(e,t){if(t===void 0||t.partialResultToken===void 0)return;let n=t.partialResultToken;return delete t.partialResultToken,new xS(e,n)}r(tD,"attachPartialResult");Mn.attachPartialResult=tD});var hR=j(Sl=>{"use strict";Object.defineProperty(Sl,"__esModule",{value:!0});Sl.ConfigurationFeature=void 0;var rD=tt(),nD=SS(),oD=r(e=>class extends e{getConfiguration(t){return t?nD.string(t)?this._getConfiguration({section:t}):this._getConfiguration(t):this._getConfiguration({})}_getConfiguration(t){let n={items:Array.isArray(t)?t:[t]};return this.connection.sendRequest(rD.ConfigurationRequest.type,n).then(o=>Array.isArray(o)?Array.isArray(t)?o:o[0]:Array.isArray(t)?[]:null)}},"ConfigurationFeature");Sl.ConfigurationFeature=oD});var gR=j(_l=>{"use strict";Object.defineProperty(_l,"__esModule",{value:!0});_l.WorkspaceFoldersFeature=void 0;var yl=tt(),iD=r(e=>class extends e{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(t){super.initialize(t);let n=t.workspace;n&&n.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new yl.Emitter,this.connection.onNotification(yl.DidChangeWorkspaceFoldersNotification.type,o=>{this._onDidChangeWorkspaceFolders.fire(o.event)}))}fillServerCapabilities(t){super.fillServerCapabilities(t);let n=t.workspace?.workspaceFolders?.changeNotifications;this._notificationIsAutoRegistered=n===!0||typeof n=="string"}getWorkspaceFolders(){return this.connection.sendRequest(yl.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(yl.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}},"WorkspaceFoldersFeature");_l.WorkspaceFoldersFeature=iD});var TR=j(xl=>{"use strict";Object.defineProperty(xl,"__esModule",{value:!0});xl.CallHierarchyFeature=void 0;var bS=tt(),aD=r(e=>class extends e{get callHierarchy(){return{onPrepare:r(t=>this.connection.onRequest(bS.CallHierarchyPrepareRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),void 0)),"onPrepare"),onIncomingCalls:r(t=>{let n=bS.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onIncomingCalls"),onOutgoingCalls:r(t=>{let n=bS.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onOutgoingCalls")}}},"CallHierarchyFeature");xl.CallHierarchyFeature=aD});var ER=j(bl=>{"use strict";Object.defineProperty(bl,"__esModule",{value:!0});bl.ShowDocumentFeature=void 0;var sD=tt(),cD=r(e=>class extends e{showDocument(t){return this.connection.sendRequest(sD.ShowDocumentRequest.type,t)}},"ShowDocumentFeature");bl.ShowDocumentFeature=cD});var SR=j(Rl=>{"use strict";Object.defineProperty(Rl,"__esModule",{value:!0});Rl.FileOperationsFeature=void 0;var ci=tt(),lD=r(e=>class extends e{onDidCreateFiles(t){return this.connection.onNotification(ci.DidCreateFilesNotification.type,n=>{t(n)})}onDidRenameFiles(t){return this.connection.onNotification(ci.DidRenameFilesNotification.type,n=>{t(n)})}onDidDeleteFiles(t){return this.connection.onNotification(ci.DidDeleteFilesNotification.type,n=>{t(n)})}onWillCreateFiles(t){return this.connection.onRequest(ci.WillCreateFilesRequest.type,(n,o)=>t(n,o))}onWillRenameFiles(t){return this.connection.onRequest(ci.WillRenameFilesRequest.type,(n,o)=>t(n,o))}onWillDeleteFiles(t){return this.connection.onRequest(ci.WillDeleteFilesRequest.type,(n,o)=>t(n,o))}},"FileOperationsFeature");Rl.FileOperationsFeature=lD});var yR=j(Al=>{"use strict";Object.defineProperty(Al,"__esModule",{value:!0});Al.LinkedEditingRangeFeature=void 0;var uD=tt(),dD=r(e=>class extends e{onLinkedEditingRange(t){return this.connection.onRequest(uD.LinkedEditingRangeRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),void 0))}},"LinkedEditingRangeFeature");Al.LinkedEditingRangeFeature=dD});var _R=j(kl=>{"use strict";Object.defineProperty(kl,"__esModule",{value:!0});kl.TypeHierarchyFeature=void 0;var RS=tt(),pD=r(e=>class extends e{get typeHierarchy(){return{onPrepare:r(t=>this.connection.onRequest(RS.TypeHierarchyPrepareRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),void 0)),"onPrepare"),onSupertypes:r(t=>{let n=RS.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onSupertypes"),onSubtypes:r(t=>{let n=RS.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onSubtypes")}}},"TypeHierarchyFeature");kl.TypeHierarchyFeature=pD});var bR=j(Ul=>{"use strict";Object.defineProperty(Ul,"__esModule",{value:!0});Ul.InlineValueFeature=void 0;var xR=tt(),fD=r(e=>class extends e{get inlineValue(){return{refresh:r(()=>this.connection.sendRequest(xR.InlineValueRefreshRequest.type),"refresh"),on:r(t=>this.connection.onRequest(xR.InlineValueRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n))),"on")}}},"InlineValueFeature");Ul.InlineValueFeature=fD});var AR=j(Cl=>{"use strict";Object.defineProperty(Cl,"__esModule",{value:!0});Cl.FoldingRangeFeature=void 0;var RR=tt(),mD=r(e=>class extends e{get foldingRange(){return{refresh:r(()=>this.connection.sendRequest(RR.FoldingRangeRefreshRequest.type),"refresh"),on:r(t=>{let n=RR.FoldingRangeRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"on")}}},"FoldingRangeFeature");Cl.FoldingRangeFeature=mD});var kR=j(vl=>{"use strict";Object.defineProperty(vl,"__esModule",{value:!0});vl.InlayHintFeature=void 0;var AS=tt(),hD=r(e=>class extends e{get inlayHint(){return{refresh:r(()=>this.connection.sendRequest(AS.InlayHintRefreshRequest.type),"refresh"),on:r(t=>this.connection.onRequest(AS.InlayHintRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n))),"on"),resolve:r(t=>this.connection.onRequest(AS.InlayHintResolveRequest.type,(n,o)=>t(n,o)),"resolve")}}},"InlayHintFeature");vl.InlayHintFeature=hD});var UR=j(Ol=>{"use strict";Object.defineProperty(Ol,"__esModule",{value:!0});Ol.DiagnosticFeature=void 0;var ms=tt(),gD=r(e=>class extends e{get diagnostics(){return{refresh:r(()=>this.connection.sendRequest(ms.DiagnosticRefreshRequest.type),"refresh"),on:r(t=>this.connection.onRequest(ms.DocumentDiagnosticRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(ms.DocumentDiagnosticRequest.partialResult,n))),"on"),onWorkspace:r(t=>this.connection.onRequest(ms.WorkspaceDiagnosticRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(ms.WorkspaceDiagnosticRequest.partialResult,n))),"onWorkspace")}}},"DiagnosticFeature");Ol.DiagnosticFeature=gD});var CR=j(Ll=>{"use strict";Object.defineProperty(Ll,"__esModule",{value:!0});Ll.MonikerFeature=void 0;var TD=tt(),ED=r(e=>class extends e{get moniker(){return{on:r(t=>{let n=TD.MonikerRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"on")}}},"MonikerFeature");Ll.MonikerFeature=ED});var VR=j(de=>{"use strict";Object.defineProperty(de,"__esModule",{value:!0});de.createConnection=de.combineFeatures=de.combineNotebooksFeatures=de.combineLanguagesFeatures=de.combineWorkspaceFeatures=de.combineWindowFeatures=de.combineClientFeatures=de.combineTracerFeatures=de.combineTelemetryFeatures=de.combineConsoleFeatures=de._NotebooksImpl=de._LanguagesImpl=de.BulkUnregistration=de.BulkRegistration=de.ErrorMessageTracker=void 0;var D=tt(),Sr=SS(),US=yS(),X=mR(),SD=hR(),yD=gR(),_D=TR(),xD=mS(),bD=ER(),RD=SR(),AD=yR(),kD=_R(),UD=bR(),CD=AR(),vD=kR(),OD=UR(),LD=ES(),ND=CR();function kS(e){if(e!==null)return e}r(kS,"null2Undefined");var CS=class{static{r(this,"ErrorMessageTracker")}constructor(){this._messages=Object.create(null)}add(t){let n=this._messages[t];n||(n=0),n++,this._messages[t]=n}sendErrors(t){Object.keys(this._messages).forEach(n=>{t.window.showErrorMessage(n)})}};de.ErrorMessageTracker=CS;var Nl=class{static{r(this,"RemoteConsoleImpl")}constructor(){}rawAttach(t){this._rawConnection=t}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(t){}initialize(t){}error(t){this.send(D.MessageType.Error,t)}warn(t){this.send(D.MessageType.Warning,t)}info(t){this.send(D.MessageType.Info,t)}log(t){this.send(D.MessageType.Log,t)}debug(t){this.send(D.MessageType.Debug,t)}send(t,n){this._rawConnection&&this._rawConnection.sendNotification(D.LogMessageNotification.type,{type:t,message:n}).catch(()=>{(0,D.RAL)().console.error("Sending log message failed")})}},vS=class{static{r(this,"_RemoteWindowImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}showErrorMessage(t,...n){let o={type:D.MessageType.Error,message:t,actions:n};return this.connection.sendRequest(D.ShowMessageRequest.type,o).then(kS)}showWarningMessage(t,...n){let o={type:D.MessageType.Warning,message:t,actions:n};return this.connection.sendRequest(D.ShowMessageRequest.type,o).then(kS)}showInformationMessage(t,...n){let o={type:D.MessageType.Info,message:t,actions:n};return this.connection.sendRequest(D.ShowMessageRequest.type,o).then(kS)}},vR=(0,bD.ShowDocumentFeature)((0,X.ProgressFeature)(vS)),OR;(function(e){function t(){return new Ml}r(t,"create"),e.create=t})(OR||(de.BulkRegistration=OR={}));var Ml=class{static{r(this,"BulkRegistrationImpl")}constructor(){this._registrations=[],this._registered=new Set}add(t,n){let o=Sr.string(t)?t:t.method;if(this._registered.has(o))throw new Error(`${o} is already added to this registration`);let i=US.generateUuid();this._registrations.push({id:i,method:o,registerOptions:n||{}}),this._registered.add(o)}asRegistrationParams(){return{registrations:this._registrations}}},LR;(function(e){function t(){return new hs(void 0,[])}r(t,"create"),e.create=t})(LR||(de.BulkUnregistration=LR={}));var hs=class{static{r(this,"BulkUnregistrationImpl")}constructor(t,n){this._connection=t,this._unregistrations=new Map,n.forEach(o=>{this._unregistrations.set(o.method,o)})}get isAttached(){return!!this._connection}attach(t){this._connection=t}add(t){this._unregistrations.set(t.method,t)}dispose(){let t=[];for(let o of this._unregistrations.values())t.push(o);let n={unregisterations:t};this._connection.sendRequest(D.UnregistrationRequest.type,n).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(t){let n=Sr.string(t)?t:t.method,o=this._unregistrations.get(n);if(!o)return!1;let i={unregisterations:[o]};return this._connection.sendRequest(D.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(n)},a=>{this._connection.console.info(`Un-registering request handler for ${o.id} failed.`)}),!0}},wl=class{static{r(this,"RemoteClientImpl")}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}register(t,n,o){return t instanceof Ml?this.registerMany(t):t instanceof hs?this.registerSingle1(t,n,o):this.registerSingle2(t,n)}registerSingle1(t,n,o){let i=Sr.string(n)?n:n.method,a=US.generateUuid(),s={registrations:[{id:a,method:i,registerOptions:o||{}}]};return t.isAttached||t.attach(this.connection),this.connection.sendRequest(D.RegistrationRequest.type,s).then(c=>(t.add({id:a,method:i}),t),c=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(c)))}registerSingle2(t,n){let o=Sr.string(t)?t:t.method,i=US.generateUuid(),a={registrations:[{id:i,method:o,registerOptions:n||{}}]};return this.connection.sendRequest(D.RegistrationRequest.type,a).then(s=>D.Disposable.create(()=>{this.unregisterSingle(i,o).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),s=>(this.connection.console.info(`Registering request handler for ${o} failed.`),Promise.reject(s)))}unregisterSingle(t,n){let o={unregisterations:[{id:t,method:n}]};return this.connection.sendRequest(D.UnregistrationRequest.type,o).catch(()=>{this.connection.console.info(`Un-registering request handler for ${t} failed.`)})}registerMany(t){let n=t.asRegistrationParams();return this.connection.sendRequest(D.RegistrationRequest.type,n).then(()=>new hs(this._connection,n.registrations.map(o=>({id:o.id,method:o.method}))),o=>(this.connection.console.info("Bulk registration failed."),Promise.reject(o)))}},OS=class{static{r(this,"_RemoteWorkspaceImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}applyEdit(t){function n(i){return i&&!!i.edit}r(n,"isApplyWorkspaceEditParams");let o=n(t)?t:{edit:t};return this.connection.sendRequest(D.ApplyWorkspaceEditRequest.type,o)}},NR=(0,RD.FileOperationsFeature)((0,yD.WorkspaceFoldersFeature)((0,SD.ConfigurationFeature)(OS))),Fl=class{static{r(this,"TracerImpl")}constructor(){this._trace=D.Trace.Off}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}set trace(t){this._trace=t}log(t,n){this._trace!==D.Trace.Off&&this.connection.sendNotification(D.LogTraceNotification.type,{message:t,verbose:this._trace===D.Trace.Verbose?n:void 0}).catch(()=>{})}},Il=class{static{r(this,"TelemetryImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}logEvent(t){this.connection.sendNotification(D.TelemetryEventNotification.type,t).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},Pl=class{static{r(this,"_LanguagesImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}attachWorkDoneProgress(t){return(0,X.attachWorkDone)(this.connection,t)}attachPartialResultProgress(t,n){return(0,X.attachPartialResult)(this.connection,n)}};de._LanguagesImpl=Pl;var MR=(0,CD.FoldingRangeFeature)((0,ND.MonikerFeature)((0,OD.DiagnosticFeature)((0,vD.InlayHintFeature)((0,UD.InlineValueFeature)((0,kD.TypeHierarchyFeature)((0,AD.LinkedEditingRangeFeature)((0,xD.SemanticTokensFeature)((0,_D.CallHierarchyFeature)(Pl))))))))),Dl=class{static{r(this,"_NotebooksImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}attachWorkDoneProgress(t){return(0,X.attachWorkDone)(this.connection,t)}attachPartialResultProgress(t,n){return(0,X.attachPartialResult)(this.connection,n)}};de._NotebooksImpl=Dl;var wR=(0,LD.NotebookSyncFeature)(Dl);function FR(e,t){return function(n){return t(e(n))}}r(FR,"combineConsoleFeatures");de.combineConsoleFeatures=FR;function IR(e,t){return function(n){return t(e(n))}}r(IR,"combineTelemetryFeatures");de.combineTelemetryFeatures=IR;function PR(e,t){return function(n){return t(e(n))}}r(PR,"combineTracerFeatures");de.combineTracerFeatures=PR;function DR(e,t){return function(n){return t(e(n))}}r(DR,"combineClientFeatures");de.combineClientFeatures=DR;function qR(e,t){return function(n){return t(e(n))}}r(qR,"combineWindowFeatures");de.combineWindowFeatures=qR;function BR(e,t){return function(n){return t(e(n))}}r(BR,"combineWorkspaceFeatures");de.combineWorkspaceFeatures=BR;function GR(e,t){return function(n){return t(e(n))}}r(GR,"combineLanguagesFeatures");de.combineLanguagesFeatures=GR;function jR(e,t){return function(n){return t(e(n))}}r(jR,"combineNotebooksFeatures");de.combineNotebooksFeatures=jR;function MD(e,t){function n(i,a,s){return i&&a?s(i,a):i||a}return r(n,"combine"),{__brand:"features",console:n(e.console,t.console,FR),tracer:n(e.tracer,t.tracer,PR),telemetry:n(e.telemetry,t.telemetry,IR),client:n(e.client,t.client,DR),window:n(e.window,t.window,qR),workspace:n(e.workspace,t.workspace,BR),languages:n(e.languages,t.languages,GR),notebooks:n(e.notebooks,t.notebooks,jR)}}r(MD,"combineFeatures");de.combineFeatures=MD;function wD(e,t,n){let o=n&&n.console?new(n.console(Nl)):new Nl,i=e(o);o.rawAttach(i);let a=n&&n.tracer?new(n.tracer(Fl)):new Fl,s=n&&n.telemetry?new(n.telemetry(Il)):new Il,c=n&&n.client?new(n.client(wl)):new wl,l=n&&n.window?new(n.window(vR)):new vR,d=n&&n.workspace?new(n.workspace(NR)):new NR,f=n&&n.languages?new(n.languages(MR)):new MR,g=n&&n.notebooks?new(n.notebooks(wR)):new wR,_=[o,a,s,c,l,d,f,g];function y(S){return S instanceof Promise?S:Sr.thenable(S)?new Promise((h,C)=>{S.then(P=>h(P),P=>C(P))}):Promise.resolve(S)}r(y,"asPromise");let M,L,q,N={listen:r(()=>i.listen(),"listen"),sendRequest:r((S,...h)=>i.sendRequest(Sr.string(S)?S:S.method,...h),"sendRequest"),onRequest:r((S,h)=>i.onRequest(S,h),"onRequest"),sendNotification:r((S,h)=>{let C=Sr.string(S)?S:S.method;return i.sendNotification(C,h)},"sendNotification"),onNotification:r((S,h)=>i.onNotification(S,h),"onNotification"),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:r(S=>(L=S,{dispose:r(()=>{L=void 0},"dispose")}),"onInitialize"),onInitialized:r(S=>i.onNotification(D.InitializedNotification.type,S),"onInitialized"),onShutdown:r(S=>(M=S,{dispose:r(()=>{M=void 0},"dispose")}),"onShutdown"),onExit:r(S=>(q=S,{dispose:r(()=>{q=void 0},"dispose")}),"onExit"),get console(){return o},get telemetry(){return s},get tracer(){return a},get client(){return c},get window(){return l},get workspace(){return d},get languages(){return f},get notebooks(){return g},onDidChangeConfiguration:r(S=>i.onNotification(D.DidChangeConfigurationNotification.type,S),"onDidChangeConfiguration"),onDidChangeWatchedFiles:r(S=>i.onNotification(D.DidChangeWatchedFilesNotification.type,S),"onDidChangeWatchedFiles"),__textDocumentSync:void 0,onDidOpenTextDocument:r(S=>i.onNotification(D.DidOpenTextDocumentNotification.type,S),"onDidOpenTextDocument"),onDidChangeTextDocument:r(S=>i.onNotification(D.DidChangeTextDocumentNotification.type,S),"onDidChangeTextDocument"),onDidCloseTextDocument:r(S=>i.onNotification(D.DidCloseTextDocumentNotification.type,S),"onDidCloseTextDocument"),onWillSaveTextDocument:r(S=>i.onNotification(D.WillSaveTextDocumentNotification.type,S),"onWillSaveTextDocument"),onWillSaveTextDocumentWaitUntil:r(S=>i.onRequest(D.WillSaveTextDocumentWaitUntilRequest.type,S),"onWillSaveTextDocumentWaitUntil"),onDidSaveTextDocument:r(S=>i.onNotification(D.DidSaveTextDocumentNotification.type,S),"onDidSaveTextDocument"),sendDiagnostics:r(S=>i.sendNotification(D.PublishDiagnosticsNotification.type,S),"sendDiagnostics"),onHover:r(S=>i.onRequest(D.HoverRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),void 0)),"onHover"),onCompletion:r(S=>i.onRequest(D.CompletionRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onCompletion"),onCompletionResolve:r(S=>i.onRequest(D.CompletionResolveRequest.type,S),"onCompletionResolve"),onSignatureHelp:r(S=>i.onRequest(D.SignatureHelpRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),void 0)),"onSignatureHelp"),onDeclaration:r(S=>i.onRequest(D.DeclarationRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onDeclaration"),onDefinition:r(S=>i.onRequest(D.DefinitionRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onDefinition"),onTypeDefinition:r(S=>i.onRequest(D.TypeDefinitionRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onTypeDefinition"),onImplementation:r(S=>i.onRequest(D.ImplementationRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onImplementation"),onReferences:r(S=>i.onRequest(D.ReferencesRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onReferences"),onDocumentHighlight:r(S=>i.onRequest(D.DocumentHighlightRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onDocumentHighlight"),onDocumentSymbol:r(S=>i.onRequest(D.DocumentSymbolRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onDocumentSymbol"),onWorkspaceSymbol:r(S=>i.onRequest(D.WorkspaceSymbolRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onWorkspaceSymbol"),onWorkspaceSymbolResolve:r(S=>i.onRequest(D.WorkspaceSymbolResolveRequest.type,S),"onWorkspaceSymbolResolve"),onCodeAction:r(S=>i.onRequest(D.CodeActionRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onCodeAction"),onCodeActionResolve:r(S=>i.onRequest(D.CodeActionResolveRequest.type,(h,C)=>S(h,C)),"onCodeActionResolve"),onCodeLens:r(S=>i.onRequest(D.CodeLensRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onCodeLens"),onCodeLensResolve:r(S=>i.onRequest(D.CodeLensResolveRequest.type,(h,C)=>S(h,C)),"onCodeLensResolve"),onDocumentFormatting:r(S=>i.onRequest(D.DocumentFormattingRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),void 0)),"onDocumentFormatting"),onDocumentRangeFormatting:r(S=>i.onRequest(D.DocumentRangeFormattingRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),void 0)),"onDocumentRangeFormatting"),onDocumentOnTypeFormatting:r(S=>i.onRequest(D.DocumentOnTypeFormattingRequest.type,(h,C)=>S(h,C)),"onDocumentOnTypeFormatting"),onRenameRequest:r(S=>i.onRequest(D.RenameRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),void 0)),"onRenameRequest"),onPrepareRename:r(S=>i.onRequest(D.PrepareRenameRequest.type,(h,C)=>S(h,C)),"onPrepareRename"),onDocumentLinks:r(S=>i.onRequest(D.DocumentLinkRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onDocumentLinks"),onDocumentLinkResolve:r(S=>i.onRequest(D.DocumentLinkResolveRequest.type,(h,C)=>S(h,C)),"onDocumentLinkResolve"),onDocumentColor:r(S=>i.onRequest(D.DocumentColorRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onDocumentColor"),onColorPresentation:r(S=>i.onRequest(D.ColorPresentationRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onColorPresentation"),onFoldingRanges:r(S=>i.onRequest(D.FoldingRangeRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onFoldingRanges"),onSelectionRanges:r(S=>i.onRequest(D.SelectionRangeRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onSelectionRanges"),onExecuteCommand:r(S=>i.onRequest(D.ExecuteCommandRequest.type,(h,C)=>S(h,C,(0,X.attachWorkDone)(i,h),void 0)),"onExecuteCommand"),dispose:r(()=>i.dispose(),"dispose")};for(let S of _)S.attach(N);return i.onRequest(D.InitializeRequest.type,S=>{t.initialize(S),Sr.string(S.trace)&&(a.trace=D.Trace.fromString(S.trace));for(let h of _)h.initialize(S.capabilities);if(L){let h=L(S,new D.CancellationTokenSource().token,(0,X.attachWorkDone)(i,S),void 0);return y(h).then(C=>{if(C instanceof D.ResponseError)return C;let P=C;P||(P={capabilities:{}});let le=P.capabilities;le||(le={},P.capabilities=le),le.textDocumentSync===void 0||le.textDocumentSync===null?le.textDocumentSync=Sr.number(N.__textDocumentSync)?N.__textDocumentSync:D.TextDocumentSyncKind.None:!Sr.number(le.textDocumentSync)&&!Sr.number(le.textDocumentSync.change)&&(le.textDocumentSync.change=Sr.number(N.__textDocumentSync)?N.__textDocumentSync:D.TextDocumentSyncKind.None);for(let an of _)an.fillServerCapabilities(le);return P})}else{let h={capabilities:{textDocumentSync:D.TextDocumentSyncKind.None}};for(let C of _)C.fillServerCapabilities(h.capabilities);return h}}),i.onRequest(D.ShutdownRequest.type,()=>{if(t.shutdownReceived=!0,M)return M(new D.CancellationTokenSource().token)}),i.onNotification(D.ExitNotification.type,()=>{try{q&&q()}finally{t.shutdownReceived?t.exit(0):t.exit(1)}}),i.onNotification(D.SetTraceNotification.type,S=>{a.trace=D.Trace.fromString(S.value)}),N}r(wD,"createConnection");de.createConnection=wD});var LS=j(Mt=>{"use strict";var FD=Mt&&Mt.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),zR=Mt&&Mt.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&FD(t,e,n)};Object.defineProperty(Mt,"__esModule",{value:!0});Mt.ProposedFeatures=Mt.NotebookDocuments=Mt.TextDocuments=Mt.SemanticTokensBuilder=void 0;var ID=mS();Object.defineProperty(Mt,"SemanticTokensBuilder",{enumerable:!0,get:r(function(){return ID.SemanticTokensBuilder},"get")});var PD=sR();zR(tt(),Mt);var DD=gS();Object.defineProperty(Mt,"TextDocuments",{enumerable:!0,get:r(function(){return DD.TextDocuments},"get")});var qD=ES();Object.defineProperty(Mt,"NotebookDocuments",{enumerable:!0,get:r(function(){return qD.NotebookDocuments},"get")});zR(VR(),Mt);var WR;(function(e){e.all={__brand:"features",languages:PD.InlineCompletionFeature}})(WR||(Mt.ProposedFeatures=WR={}))});var YR=j((BH,HR)=>{"use strict";HR.exports=tt()});var QR=j(Wr=>{"use strict";var BD=Wr&&Wr.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),JR=Wr&&Wr.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&BD(t,e,n)};Object.defineProperty(Wr,"__esModule",{value:!0});Wr.createConnection=void 0;var ql=LS();JR(YR(),Wr);JR(LS(),Wr);var KR=!1,GD={initialize:r(e=>{},"initialize"),get shutdownReceived(){return KR},set shutdownReceived(e){KR=e},exit:r(e=>{},"exit")};function jD(e,t,n,o){let i,a,s,c;e!==void 0&&e.__brand==="features"&&(i=e,e=t,t=n,n=o),ql.ConnectionStrategy.is(e)||ql.ConnectionOptions.is(e)?c=e:(a=e,s=t,c=n);let l=r(d=>(0,ql.createProtocolConnection)(a,s,d,c),"connectionFactory");return(0,ql.createConnection)(l,GD,i)}r(jD,"createConnection");Wr.createConnection=jD});var ZR=j((VH,XR)=>{"use strict";XR.exports=QR()});var on=jI(ZR(),1);var Bl=class e{static{r(this,"FullTextDocument")}constructor(t,n,o,i){this._uri=t,this._languageId=n,this._version=o,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(t){if(t){let n=this.offsetAt(t.start),o=this.offsetAt(t.end);return this._content.substring(n,o)}return this._content}update(t,n){for(let o of t)if(e.isIncremental(o)){let i=tA(o.range),a=this.offsetAt(i.start),s=this.offsetAt(i.end);this._content=this._content.substring(0,a)+o.text+this._content.substring(s,this._content.length);let c=Math.max(i.start.line,0),l=Math.max(i.end.line,0),d=this._lineOffsets,f=$R(o.text,!1,a);if(l-c===f.length)for(let _=0,y=f.length;_<y;_++)d[_+c+1]=f[_];else f.length<1e4?d.splice(c+1,l-c,...f):this._lineOffsets=d=d.slice(0,c+1).concat(f,d.slice(l+1));let g=o.text.length-(s-a);if(g!==0)for(let _=c+1+f.length,y=d.length;_<y;_++)d[_]=d[_]+g}else if(e.isFull(o))this._content=o.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=n}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=$R(this._content,!0)),this._lineOffsets}positionAt(t){t=Math.max(Math.min(t,this._content.length),0);let n=this.getLineOffsets(),o=0,i=n.length;if(i===0)return{line:0,character:t};for(;o<i;){let s=Math.floor((o+i)/2);n[s]>t?i=s:o=s+1}let a=o-1;return t=this.ensureBeforeEOL(t,n[a]),{line:a,character:t-n[a]}}offsetAt(t){let n=this.getLineOffsets();if(t.line>=n.length)return this._content.length;if(t.line<0)return 0;let o=n[t.line];if(t.character<=0)return o;let i=t.line+1<n.length?n[t.line+1]:this._content.length,a=Math.min(o+t.character,i);return this.ensureBeforeEOL(a,o)}ensureBeforeEOL(t,n){for(;t>n&&eA(this._content.charCodeAt(t-1));)t--;return t}get lineCount(){return this.getLineOffsets().length}static isIncremental(t){let n=t;return n!=null&&typeof n.text=="string"&&n.range!==void 0&&(n.rangeLength===void 0||typeof n.rangeLength=="number")}static isFull(t){let n=t;return n!=null&&typeof n.text=="string"&&n.range===void 0&&n.rangeLength===void 0}},Gl;(function(e){function t(i,a,s,c){return new Bl(i,a,s,c)}r(t,"create"),e.create=t;function n(i,a,s){if(i instanceof Bl)return i.update(a,s),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}r(n,"update"),e.update=n;function o(i,a){let s=i.getText(),c=NS(a.map(VD),(f,g)=>{let _=f.range.start.line-g.range.start.line;return _===0?f.range.start.character-g.range.start.character:_}),l=0,d=[];for(let f of c){let g=i.offsetAt(f.range.start);if(g<l)throw new Error("Overlapping edit");g>l&&d.push(s.substring(l,g)),f.newText.length&&d.push(f.newText),l=i.offsetAt(f.range.end)}return d.push(s.substr(l)),d.join("")}r(o,"applyEdits"),e.applyEdits=o})(Gl||(Gl={}));function NS(e,t){if(e.length<=1)return e;let n=e.length/2|0,o=e.slice(0,n),i=e.slice(n);NS(o,t),NS(i,t);let a=0,s=0,c=0;for(;a<o.length&&s<i.length;)t(o[a],i[s])<=0?e[c++]=o[a++]:e[c++]=i[s++];for(;a<o.length;)e[c++]=o[a++];for(;s<i.length;)e[c++]=i[s++];return e}r(NS,"mergeSort");function $R(e,t,n=0){let o=t?[n]:[];for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);eA(a)&&(a===13&&i+1<e.length&&e.charCodeAt(i+1)===10&&i++,o.push(n+i+1))}return o}r($R,"computeLineOffsets");function eA(e){return e===13||e===10}r(eA,"isEOL");function tA(e){let t=e.start,n=e.end;return t.line>n.line||t.line===n.line&&t.character>n.character?{start:n,end:t}:e}r(tA,"getWellformedRange");function VD(e){let t=tA(e.range);return t!==e.range?{newText:e.newText,range:t}:e}r(VD,"getWellformedEdit");function WD(e){let t=[],n=/code\s*=\s*"""\s*\n([\s\S]*?)\n\s*"""/g,o;for(;(o=n.exec(e))!==null;){let i=o[1],a=o.index+o[0].indexOf(o[1]),s=a+i.length;t.push({content:i,offset:a,end:s})}return t}r(WD,"extractEmbeddedJS");function jl(e,t){let n=WD(t);for(let o of n)if(e>=o.offset&&e<=o.end){let i=e-o.offset;return{region:o,jsOffset:i}}return null}r(jl,"mapToVirtualJS");var zD={addon:"addon",agent:"agent",agent_trigger:"agent_trigger",api_group:"api_group",branch:"branch",function:"cfn",mcp_server:"mcp_server",mcp_server_trigger:"mcp_server_trigger",middleware:"middleware",query:"api",realtime_trigger:"realtime_trigger",table:"db",table_trigger:"table_trigger",task:"task",tool:"tool",workflow_test:"workflow_test",workspace:"workspace",workspace_trigger:"workspace_trigger"},HD=/^\s*(\w+)/;function zr(e){let t=e.match(HD)?.[1];return zD[t]||"cfn"}r(zr,"getSchemeFromContent");var YD=typeof global=="object"&&global&&global.Object===Object&&global,Vl=YD;var KD=typeof self=="object"&&self&&self.Object===Object&&self,JD=Vl||KD||Function("return this")(),ct=JD;var QD=ct.Symbol,_t=QD;var rA=Object.prototype,XD=rA.hasOwnProperty,ZD=rA.toString,gs=_t?_t.toStringTag:void 0;function $D(e){var t=XD.call(e,gs),n=e[gs];try{e[gs]=void 0;var o=!0}catch{}var i=ZD.call(e);return o&&(t?e[gs]=n:delete e[gs]),i}r($D,"getRawTag");var nA=$D;var e1=Object.prototype,t1=e1.toString;function r1(e){return t1.call(e)}r(r1,"objectToString");var oA=r1;var n1="[object Null]",o1="[object Undefined]",iA=_t?_t.toStringTag:void 0;function i1(e){return e==null?e===void 0?o1:n1:iA&&iA in Object(e)?nA(e):oA(e)}r(i1,"baseGetTag");var Ut=i1;function a1(e){return e!=null&&typeof e=="object"}r(a1,"isObjectLike");var Be=a1;var s1="[object Symbol]";function c1(e){return typeof e=="symbol"||Be(e)&&Ut(e)==s1}r(c1,"isSymbol");var wn=c1;function l1(e,t){for(var n=-1,o=e==null?0:e.length,i=Array(o);++n<o;)i[n]=t(e[n],n,e);return i}r(l1,"arrayMap");var Hr=l1;var u1=Array.isArray,B=u1;var d1=1/0,aA=_t?_t.prototype:void 0,sA=aA?aA.toString:void 0;function cA(e){if(typeof e=="string")return e;if(B(e))return Hr(e,cA)+"";if(wn(e))return sA?sA.call(e):"";var t=e+"";return t=="0"&&1/e==-d1?"-0":t}r(cA,"baseToString");var lA=cA;var p1=/\s/;function f1(e){for(var t=e.length;t--&&p1.test(e.charAt(t)););return t}r(f1,"trimmedEndIndex");var uA=f1;var m1=/^\s+/;function h1(e){return e&&e.slice(0,uA(e)+1).replace(m1,"")}r(h1,"baseTrim");var dA=h1;function g1(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}r(g1,"isObject");var Ge=g1;var pA=NaN,T1=/^[-+]0x[0-9a-f]+$/i,E1=/^0b[01]+$/i,S1=/^0o[0-7]+$/i,y1=parseInt;function _1(e){if(typeof e=="number")return e;if(wn(e))return pA;if(Ge(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ge(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=dA(e);var n=E1.test(e);return n||S1.test(e)?y1(e.slice(2),n?2:8):T1.test(e)?pA:+e}r(_1,"toNumber");var fA=_1;var mA=1/0,x1=17976931348623157e292;function b1(e){if(!e)return e===0?e:0;if(e=fA(e),e===mA||e===-mA){var t=e<0?-1:1;return t*x1}return e===e?e:0}r(b1,"toFinite");var hA=b1;function R1(e){var t=hA(e),n=t%1;return t===t?n?t-n:t:0}r(R1,"toInteger");var Yr=R1;function A1(e){return e}r(A1,"identity");var yr=A1;var k1="[object AsyncFunction]",U1="[object Function]",C1="[object GeneratorFunction]",v1="[object Proxy]";function O1(e){if(!Ge(e))return!1;var t=Ut(e);return t==U1||t==C1||t==k1||t==v1}r(O1,"isFunction");var Vt=O1;var L1=ct["__core-js_shared__"],Wl=L1;var gA=(function(){var e=/[^.]+$/.exec(Wl&&Wl.keys&&Wl.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})();function N1(e){return!!gA&&gA in e}r(N1,"isMasked");var TA=N1;var M1=Function.prototype,w1=M1.toString;function F1(e){if(e!=null){try{return w1.call(e)}catch{}try{return e+""}catch{}}return""}r(F1,"toSource");var un=F1;var I1=/[\\^$.*+?()[\]{}|]/g,P1=/^\[object .+?Constructor\]$/,D1=Function.prototype,q1=Object.prototype,B1=D1.toString,G1=q1.hasOwnProperty,j1=RegExp("^"+B1.call(G1).replace(I1,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function V1(e){if(!Ge(e)||TA(e))return!1;var t=Vt(e)?j1:P1;return t.test(un(e))}r(V1,"baseIsNative");var EA=V1;function W1(e,t){return e?.[t]}r(W1,"getValue");var SA=W1;function z1(e,t){var n=SA(e,t);return EA(n)?n:void 0}r(z1,"getNative");var tr=z1;var H1=tr(ct,"WeakMap"),zl=H1;var yA=Object.create,Y1=(function(){function e(){}return r(e,"object"),function(t){if(!Ge(t))return{};if(yA)return yA(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}})(),_A=Y1;function K1(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}r(K1,"apply");var xA=K1;function J1(){}r(J1,"noop");var je=J1;function Q1(e,t){var n=-1,o=e.length;for(t||(t=Array(o));++n<o;)t[n]=e[n];return t}r(Q1,"copyArray");var bA=Q1;var X1=800,Z1=16,$1=Date.now;function e0(e){var t=0,n=0;return function(){var o=$1(),i=Z1-(o-n);if(n=o,i>0){if(++t>=X1)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}r(e0,"shortOut");var RA=e0;function t0(e){return function(){return e}}r(t0,"constant");var AA=t0;var r0=(function(){try{var e=tr(Object,"defineProperty");return e({},"",{}),e}catch{}})(),li=r0;var n0=li?function(e,t){return li(e,"toString",{configurable:!0,enumerable:!1,value:AA(t),writable:!0})}:yr,kA=n0;var o0=RA(kA),UA=o0;function i0(e,t){for(var n=-1,o=e==null?0:e.length;++n<o&&t(e[n],n,e)!==!1;);return e}r(i0,"arrayEach");var Hl=i0;function a0(e,t,n,o){for(var i=e.length,a=n+(o?1:-1);o?a--:++a<i;)if(t(e[a],a,e))return a;return-1}r(a0,"baseFindIndex");var Yl=a0;function s0(e){return e!==e}r(s0,"baseIsNaN");var CA=s0;function c0(e,t,n){for(var o=n-1,i=e.length;++o<i;)if(e[o]===t)return o;return-1}r(c0,"strictIndexOf");var vA=c0;function l0(e,t,n){return t===t?vA(e,t,n):Yl(e,CA,n)}r(l0,"baseIndexOf");var ui=l0;function u0(e,t){var n=e==null?0:e.length;return!!n&&ui(e,t,0)>-1}r(u0,"arrayIncludes");var Kl=u0;var d0=9007199254740991,p0=/^(?:0|[1-9]\d*)$/;function f0(e,t){var n=typeof e;return t=t??d0,!!t&&(n=="number"||n!="symbol"&&p0.test(e))&&e>-1&&e%1==0&&e<t}r(f0,"isIndex");var Fn=f0;function m0(e,t,n){t=="__proto__"&&li?li(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}r(m0,"baseAssignValue");var di=m0;function h0(e,t){return e===t||e!==e&&t!==t}r(h0,"eq");var Kr=h0;var g0=Object.prototype,T0=g0.hasOwnProperty;function E0(e,t,n){var o=e[t];(!(T0.call(e,t)&&Kr(o,n))||n===void 0&&!(t in e))&&di(e,t,n)}r(E0,"assignValue");var In=E0;function S0(e,t,n,o){var i=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var c=t[a],l=o?o(n[c],e[c],c,n,e):void 0;l===void 0&&(l=e[c]),i?di(n,c,l):In(n,c,l)}return n}r(S0,"copyObject");var Jr=S0;var OA=Math.max;function y0(e,t,n){return t=OA(t===void 0?e.length-1:t,0),function(){for(var o=arguments,i=-1,a=OA(o.length-t,0),s=Array(a);++i<a;)s[i]=o[t+i];i=-1;for(var c=Array(t+1);++i<t;)c[i]=o[i];return c[t]=n(s),xA(e,this,c)}}r(y0,"overRest");var LA=y0;function _0(e,t){return UA(LA(e,t,yr),e+"")}r(_0,"baseRest");var Pn=_0;var x0=9007199254740991;function b0(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=x0}r(b0,"isLength");var pi=b0;function R0(e){return e!=null&&pi(e.length)&&!Vt(e)}r(R0,"isArrayLike");var lt=R0;function A0(e,t,n){if(!Ge(n))return!1;var o=typeof t;return(o=="number"?lt(n)&&Fn(t,n.length):o=="string"&&t in n)?Kr(n[t],e):!1}r(A0,"isIterateeCall");var Dn=A0;function k0(e){return Pn(function(t,n){var o=-1,i=n.length,a=i>1?n[i-1]:void 0,s=i>2?n[2]:void 0;for(a=e.length>3&&typeof a=="function"?(i--,a):void 0,s&&Dn(n[0],n[1],s)&&(a=i<3?void 0:a,i=1),t=Object(t);++o<i;){var c=n[o];c&&e(t,c,o,a)}return t})}r(k0,"createAssigner");var NA=k0;var U0=Object.prototype;function C0(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||U0;return e===n}r(C0,"isPrototype");var Qr=C0;function v0(e,t){for(var n=-1,o=Array(e);++n<e;)o[n]=t(n);return o}r(v0,"baseTimes");var MA=v0;var O0="[object Arguments]";function L0(e){return Be(e)&&Ut(e)==O0}r(L0,"baseIsArguments");var MS=L0;var wA=Object.prototype,N0=wA.hasOwnProperty,M0=wA.propertyIsEnumerable,w0=MS((function(){return arguments})())?MS:function(e){return Be(e)&&N0.call(e,"callee")&&!M0.call(e,"callee")},qn=w0;function F0(){return!1}r(F0,"stubFalse");var FA=F0;var DA=typeof exports=="object"&&exports&&!exports.nodeType&&exports,IA=DA&&typeof module=="object"&&module&&!module.nodeType&&module,I0=IA&&IA.exports===DA,PA=I0?ct.Buffer:void 0,P0=PA?PA.isBuffer:void 0,D0=P0||FA,dn=D0;var q0="[object Arguments]",B0="[object Array]",G0="[object Boolean]",j0="[object Date]",V0="[object Error]",W0="[object Function]",z0="[object Map]",H0="[object Number]",Y0="[object Object]",K0="[object RegExp]",J0="[object Set]",Q0="[object String]",X0="[object WeakMap]",Z0="[object ArrayBuffer]",$0="[object DataView]",eq="[object Float32Array]",tq="[object Float64Array]",rq="[object Int8Array]",nq="[object Int16Array]",oq="[object Int32Array]",iq="[object Uint8Array]",aq="[object Uint8ClampedArray]",sq="[object Uint16Array]",cq="[object Uint32Array]",ve={};ve[eq]=ve[tq]=ve[rq]=ve[nq]=ve[oq]=ve[iq]=ve[aq]=ve[sq]=ve[cq]=!0;ve[q0]=ve[B0]=ve[Z0]=ve[G0]=ve[$0]=ve[j0]=ve[V0]=ve[W0]=ve[z0]=ve[H0]=ve[Y0]=ve[K0]=ve[J0]=ve[Q0]=ve[X0]=!1;function lq(e){return Be(e)&&pi(e.length)&&!!ve[Ut(e)]}r(lq,"baseIsTypedArray");var qA=lq;function uq(e){return function(t){return e(t)}}r(uq,"baseUnary");var Xr=uq;var BA=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ts=BA&&typeof module=="object"&&module&&!module.nodeType&&module,dq=Ts&&Ts.exports===BA,wS=dq&&Vl.process,pq=(function(){try{var e=Ts&&Ts.require&&Ts.require("util").types;return e||wS&&wS.binding&&wS.binding("util")}catch{}})(),_r=pq;var GA=_r&&_r.isTypedArray,fq=GA?Xr(GA):qA,fi=fq;var mq=Object.prototype,hq=mq.hasOwnProperty;function gq(e,t){var n=B(e),o=!n&&qn(e),i=!n&&!o&&dn(e),a=!n&&!o&&!i&&fi(e),s=n||o||i||a,c=s?MA(e.length,String):[],l=c.length;for(var d in e)(t||hq.call(e,d))&&!(s&&(d=="length"||i&&(d=="offset"||d=="parent")||a&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||Fn(d,l)))&&c.push(d);return c}r(gq,"arrayLikeKeys");var Jl=gq;function Tq(e,t){return function(n){return e(t(n))}}r(Tq,"overArg");var Ql=Tq;var Eq=Ql(Object.keys,Object),jA=Eq;var Sq=Object.prototype,yq=Sq.hasOwnProperty;function _q(e){if(!Qr(e))return jA(e);var t=[];for(var n in Object(e))yq.call(e,n)&&n!="constructor"&&t.push(n);return t}r(_q,"baseKeys");var Xl=_q;function xq(e){return lt(e)?Jl(e):Xl(e)}r(xq,"keys");var he=xq;var bq=Object.prototype,Rq=bq.hasOwnProperty,Aq=NA(function(e,t){if(Qr(t)||lt(t)){Jr(t,he(t),e);return}for(var n in t)Rq.call(t,n)&&In(e,n,t[n])}),Ct=Aq;function kq(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}r(kq,"nativeKeysIn");var VA=kq;var Uq=Object.prototype,Cq=Uq.hasOwnProperty;function vq(e){if(!Ge(e))return VA(e);var t=Qr(e),n=[];for(var o in e)o=="constructor"&&(t||!Cq.call(e,o))||n.push(o);return n}r(vq,"baseKeysIn");var WA=vq;function Oq(e){return lt(e)?Jl(e,!0):WA(e)}r(Oq,"keysIn");var Bn=Oq;var Lq=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nq=/^\w*$/;function Mq(e,t){if(B(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||wn(e)?!0:Nq.test(e)||!Lq.test(e)||t!=null&&e in Object(t)}r(Mq,"isKey");var mi=Mq;var wq=tr(Object,"create"),pn=wq;function Fq(){this.__data__=pn?pn(null):{},this.size=0}r(Fq,"hashClear");var zA=Fq;function Iq(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}r(Iq,"hashDelete");var HA=Iq;var Pq="__lodash_hash_undefined__",Dq=Object.prototype,qq=Dq.hasOwnProperty;function Bq(e){var t=this.__data__;if(pn){var n=t[e];return n===Pq?void 0:n}return qq.call(t,e)?t[e]:void 0}r(Bq,"hashGet");var YA=Bq;var Gq=Object.prototype,jq=Gq.hasOwnProperty;function Vq(e){var t=this.__data__;return pn?t[e]!==void 0:jq.call(t,e)}r(Vq,"hashHas");var KA=Vq;var Wq="__lodash_hash_undefined__";function zq(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=pn&&t===void 0?Wq:t,this}r(zq,"hashSet");var JA=zq;function hi(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}r(hi,"Hash");hi.prototype.clear=zA;hi.prototype.delete=HA;hi.prototype.get=YA;hi.prototype.has=KA;hi.prototype.set=JA;var FS=hi;function Hq(){this.__data__=[],this.size=0}r(Hq,"listCacheClear");var QA=Hq;function Yq(e,t){for(var n=e.length;n--;)if(Kr(e[n][0],t))return n;return-1}r(Yq,"assocIndexOf");var Gn=Yq;var Kq=Array.prototype,Jq=Kq.splice;function Qq(e){var t=this.__data__,n=Gn(t,e);if(n<0)return!1;var o=t.length-1;return n==o?t.pop():Jq.call(t,n,1),--this.size,!0}r(Qq,"listCacheDelete");var XA=Qq;function Xq(e){var t=this.__data__,n=Gn(t,e);return n<0?void 0:t[n][1]}r(Xq,"listCacheGet");var ZA=Xq;function Zq(e){return Gn(this.__data__,e)>-1}r(Zq,"listCacheHas");var $A=Zq;function $q(e,t){var n=this.__data__,o=Gn(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}r($q,"listCacheSet");var ek=$q;function gi(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}r(gi,"ListCache");gi.prototype.clear=QA;gi.prototype.delete=XA;gi.prototype.get=ZA;gi.prototype.has=$A;gi.prototype.set=ek;var jn=gi;var eB=tr(ct,"Map"),Vn=eB;function tB(){this.size=0,this.__data__={hash:new FS,map:new(Vn||jn),string:new FS}}r(tB,"mapCacheClear");var tk=tB;function rB(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}r(rB,"isKeyable");var rk=rB;function nB(e,t){var n=e.__data__;return rk(t)?n[typeof t=="string"?"string":"hash"]:n.map}r(nB,"getMapData");var Wn=nB;function oB(e){var t=Wn(this,e).delete(e);return this.size-=t?1:0,t}r(oB,"mapCacheDelete");var nk=oB;function iB(e){return Wn(this,e).get(e)}r(iB,"mapCacheGet");var ok=iB;function aB(e){return Wn(this,e).has(e)}r(aB,"mapCacheHas");var ik=aB;function sB(e,t){var n=Wn(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}r(sB,"mapCacheSet");var ak=sB;function Ti(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}r(Ti,"MapCache");Ti.prototype.clear=tk;Ti.prototype.delete=nk;Ti.prototype.get=ok;Ti.prototype.has=ik;Ti.prototype.set=ak;var bo=Ti;var cB="Expected a function";function IS(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(cB);var n=r(function(){var o=arguments,i=t?t.apply(this,o):o[0],a=n.cache;if(a.has(i))return a.get(i);var s=e.apply(this,o);return n.cache=a.set(i,s)||a,s},"memoized");return n.cache=new(IS.Cache||bo),n}r(IS,"memoize");IS.Cache=bo;var sk=IS;var lB=500;function uB(e){var t=sk(e,function(o){return n.size===lB&&n.clear(),o}),n=t.cache;return t}r(uB,"memoizeCapped");var ck=uB;var dB=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,pB=/\\(\\)?/g,fB=ck(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(dB,function(n,o,i,a){t.push(i?a.replace(pB,"$1"):o||n)}),t}),lk=fB;function mB(e){return e==null?"":lA(e)}r(mB,"toString");var uk=mB;function hB(e,t){return B(e)?e:mi(e,t)?[e]:lk(uk(e))}r(hB,"castPath");var zn=hB;var gB=1/0;function TB(e){if(typeof e=="string"||wn(e))return e;var t=e+"";return t=="0"&&1/e==-gB?"-0":t}r(TB,"toKey");var Zr=TB;function EB(e,t){t=zn(t,e);for(var n=0,o=t.length;e!=null&&n<o;)e=e[Zr(t[n++])];return n&&n==o?e:void 0}r(EB,"baseGet");var Ei=EB;function SB(e,t,n){var o=e==null?void 0:Ei(e,t);return o===void 0?n:o}r(SB,"get");var Ro=SB;function yB(e,t){for(var n=-1,o=t.length,i=e.length;++n<o;)e[i+n]=t[n];return e}r(yB,"arrayPush");var Si=yB;var dk=_t?_t.isConcatSpreadable:void 0;function _B(e){return B(e)||qn(e)||!!(dk&&e&&e[dk])}r(_B,"isFlattenable");var pk=_B;function fk(e,t,n,o,i){var a=-1,s=e.length;for(n||(n=pk),i||(i=[]);++a<s;){var c=e[a];t>0&&n(c)?t>1?fk(c,t-1,n,o,i):Si(i,c):o||(i[i.length]=c)}return i}r(fk,"baseFlatten");var yi=fk;function xB(e){var t=e==null?0:e.length;return t?yi(e,1):[]}r(xB,"flatten");var ht=xB;var bB=Ql(Object.getPrototypeOf,Object),_i=bB;var RB="[object Object]",AB=Function.prototype,kB=Object.prototype,mk=AB.toString,UB=kB.hasOwnProperty,CB=mk.call(Object);function vB(e){if(!Be(e)||Ut(e)!=RB)return!1;var t=_i(e);if(t===null)return!0;var n=UB.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&mk.call(n)==CB}r(vB,"isPlainObject");var Zl=vB;function OB(e,t,n){var o=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++o<i;)a[o]=e[o+t];return a}r(OB,"baseSlice");var $l=OB;function LB(e,t,n,o){var i=-1,a=e==null?0:e.length;for(o&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}r(LB,"arrayReduce");var hk=LB;function NB(){this.__data__=new jn,this.size=0}r(NB,"stackClear");var gk=NB;function MB(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}r(MB,"stackDelete");var Tk=MB;function wB(e){return this.__data__.get(e)}r(wB,"stackGet");var Ek=wB;function FB(e){return this.__data__.has(e)}r(FB,"stackHas");var Sk=FB;var IB=200;function PB(e,t){var n=this.__data__;if(n instanceof jn){var o=n.__data__;if(!Vn||o.length<IB-1)return o.push([e,t]),this.size=++n.size,this;n=this.__data__=new bo(o)}return n.set(e,t),this.size=n.size,this}r(PB,"stackSet");var yk=PB;function xi(e){var t=this.__data__=new jn(e);this.size=t.size}r(xi,"Stack");xi.prototype.clear=gk;xi.prototype.delete=Tk;xi.prototype.get=Ek;xi.prototype.has=Sk;xi.prototype.set=yk;var Hn=xi;function DB(e,t){return e&&Jr(t,he(t),e)}r(DB,"baseAssign");var _k=DB;function qB(e,t){return e&&Jr(t,Bn(t),e)}r(qB,"baseAssignIn");var xk=qB;var kk=typeof exports=="object"&&exports&&!exports.nodeType&&exports,bk=kk&&typeof module=="object"&&module&&!module.nodeType&&module,BB=bk&&bk.exports===kk,Rk=BB?ct.Buffer:void 0,Ak=Rk?Rk.allocUnsafe:void 0;function GB(e,t){if(t)return e.slice();var n=e.length,o=Ak?Ak(n):new e.constructor(n);return e.copy(o),o}r(GB,"cloneBuffer");var Uk=GB;function jB(e,t){for(var n=-1,o=e==null?0:e.length,i=0,a=[];++n<o;){var s=e[n];t(s,n,e)&&(a[i++]=s)}return a}r(jB,"arrayFilter");var bi=jB;function VB(){return[]}r(VB,"stubArray");var eu=VB;var WB=Object.prototype,zB=WB.propertyIsEnumerable,Ck=Object.getOwnPropertySymbols,HB=Ck?function(e){return e==null?[]:(e=Object(e),bi(Ck(e),function(t){return zB.call(e,t)}))}:eu,Ri=HB;function YB(e,t){return Jr(e,Ri(e),t)}r(YB,"copySymbols");var vk=YB;var KB=Object.getOwnPropertySymbols,JB=KB?function(e){for(var t=[];e;)Si(t,Ri(e)),e=_i(e);return t}:eu,tu=JB;function QB(e,t){return Jr(e,tu(e),t)}r(QB,"copySymbolsIn");var Ok=QB;function XB(e,t,n){var o=t(e);return B(e)?o:Si(o,n(e))}r(XB,"baseGetAllKeys");var ru=XB;function ZB(e){return ru(e,he,Ri)}r(ZB,"getAllKeys");var Es=ZB;function $B(e){return ru(e,Bn,tu)}r($B,"getAllKeysIn");var nu=$B;var eG=tr(ct,"DataView"),ou=eG;var tG=tr(ct,"Promise"),iu=tG;var rG=tr(ct,"Set"),Yn=rG;var Lk="[object Map]",nG="[object Object]",Nk="[object Promise]",Mk="[object Set]",wk="[object WeakMap]",Fk="[object DataView]",oG=un(ou),iG=un(Vn),aG=un(iu),sG=un(Yn),cG=un(zl),Ao=Ut;(ou&&Ao(new ou(new ArrayBuffer(1)))!=Fk||Vn&&Ao(new Vn)!=Lk||iu&&Ao(iu.resolve())!=Nk||Yn&&Ao(new Yn)!=Mk||zl&&Ao(new zl)!=wk)&&(Ao=r(function(e){var t=Ut(e),n=t==nG?e.constructor:void 0,o=n?un(n):"";if(o)switch(o){case oG:return Fk;case iG:return Lk;case aG:return Nk;case sG:return Mk;case cG:return wk}return t},"getTag"));var Lr=Ao;var lG=Object.prototype,uG=lG.hasOwnProperty;function dG(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&uG.call(e,"index")&&(n.index=e.index,n.input=e.input),n}r(dG,"initCloneArray");var Ik=dG;var pG=ct.Uint8Array,Ai=pG;function fG(e){var t=new e.constructor(e.byteLength);return new Ai(t).set(new Ai(e)),t}r(fG,"cloneArrayBuffer");var ki=fG;function mG(e,t){var n=t?ki(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}r(mG,"cloneDataView");var Pk=mG;var hG=/\w*$/;function gG(e){var t=new e.constructor(e.source,hG.exec(e));return t.lastIndex=e.lastIndex,t}r(gG,"cloneRegExp");var Dk=gG;var qk=_t?_t.prototype:void 0,Bk=qk?qk.valueOf:void 0;function TG(e){return Bk?Object(Bk.call(e)):{}}r(TG,"cloneSymbol");var Gk=TG;function EG(e,t){var n=t?ki(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}r(EG,"cloneTypedArray");var jk=EG;var SG="[object Boolean]",yG="[object Date]",_G="[object Map]",xG="[object Number]",bG="[object RegExp]",RG="[object Set]",AG="[object String]",kG="[object Symbol]",UG="[object ArrayBuffer]",CG="[object DataView]",vG="[object Float32Array]",OG="[object Float64Array]",LG="[object Int8Array]",NG="[object Int16Array]",MG="[object Int32Array]",wG="[object Uint8Array]",FG="[object Uint8ClampedArray]",IG="[object Uint16Array]",PG="[object Uint32Array]";function DG(e,t,n){var o=e.constructor;switch(t){case UG:return ki(e);case SG:case yG:return new o(+e);case CG:return Pk(e,n);case vG:case OG:case LG:case NG:case MG:case wG:case FG:case IG:case PG:return jk(e,n);case _G:return new o;case xG:case AG:return new o(e);case bG:return Dk(e);case RG:return new o;case kG:return Gk(e)}}r(DG,"initCloneByTag");var Vk=DG;function qG(e){return typeof e.constructor=="function"&&!Qr(e)?_A(_i(e)):{}}r(qG,"initCloneObject");var Wk=qG;var BG="[object Map]";function GG(e){return Be(e)&&Lr(e)==BG}r(GG,"baseIsMap");var zk=GG;var Hk=_r&&_r.isMap,jG=Hk?Xr(Hk):zk,Yk=jG;var VG="[object Set]";function WG(e){return Be(e)&&Lr(e)==VG}r(WG,"baseIsSet");var Kk=WG;var Jk=_r&&_r.isSet,zG=Jk?Xr(Jk):Kk,Qk=zG;var HG=1,YG=2,KG=4,Xk="[object Arguments]",JG="[object Array]",QG="[object Boolean]",XG="[object Date]",ZG="[object Error]",Zk="[object Function]",$G="[object GeneratorFunction]",e2="[object Map]",t2="[object Number]",$k="[object Object]",r2="[object RegExp]",n2="[object Set]",o2="[object String]",i2="[object Symbol]",a2="[object WeakMap]",s2="[object ArrayBuffer]",c2="[object DataView]",l2="[object Float32Array]",u2="[object Float64Array]",d2="[object Int8Array]",p2="[object Int16Array]",f2="[object Int32Array]",m2="[object Uint8Array]",h2="[object Uint8ClampedArray]",g2="[object Uint16Array]",T2="[object Uint32Array]",be={};be[Xk]=be[JG]=be[s2]=be[c2]=be[QG]=be[XG]=be[l2]=be[u2]=be[d2]=be[p2]=be[f2]=be[e2]=be[t2]=be[$k]=be[r2]=be[n2]=be[o2]=be[i2]=be[m2]=be[h2]=be[g2]=be[T2]=!0;be[ZG]=be[Zk]=be[a2]=!1;function au(e,t,n,o,i,a){var s,c=t&HG,l=t&YG,d=t&KG;if(n&&(s=i?n(e,o,i,a):n(e)),s!==void 0)return s;if(!Ge(e))return e;var f=B(e);if(f){if(s=Ik(e),!c)return bA(e,s)}else{var g=Lr(e),_=g==Zk||g==$G;if(dn(e))return Uk(e,c);if(g==$k||g==Xk||_&&!i){if(s=l||_?{}:Wk(e),!c)return l?Ok(e,xk(s,e)):vk(e,_k(s,e))}else{if(!be[g])return i?e:{};s=Vk(e,g,c)}}a||(a=new Hn);var y=a.get(e);if(y)return y;a.set(e,s),Qk(e)?e.forEach(function(q){s.add(au(q,t,n,q,e,a))}):Yk(e)&&e.forEach(function(q,N){s.set(N,au(q,t,n,N,e,a))});var M=d?l?nu:Es:l?Bn:he,L=f?void 0:M(e);return Hl(L||e,function(q,N){L&&(N=q,q=e[N]),In(s,N,au(q,t,n,N,e,a))}),s}r(au,"baseClone");var eU=au;var E2=4;function S2(e){return eU(e,E2)}r(S2,"clone");var Re=S2;function y2(e){for(var t=-1,n=e==null?0:e.length,o=0,i=[];++t<n;){var a=e[t];a&&(i[o++]=a)}return i}r(y2,"compact");var $r=y2;var _2="__lodash_hash_undefined__";function x2(e){return this.__data__.set(e,_2),this}r(x2,"setCacheAdd");var tU=x2;function b2(e){return this.__data__.has(e)}r(b2,"setCacheHas");var rU=b2;function su(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new bo;++t<n;)this.add(e[t])}r(su,"SetCache");su.prototype.add=su.prototype.push=tU;su.prototype.has=rU;var Ui=su;function R2(e,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(t(e[n],n,e))return!0;return!1}r(R2,"arraySome");var cu=R2;function A2(e,t){return e.has(t)}r(A2,"cacheHas");var Ci=A2;var k2=1,U2=2;function C2(e,t,n,o,i,a){var s=n&k2,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;var d=a.get(e),f=a.get(t);if(d&&f)return d==t&&f==e;var g=-1,_=!0,y=n&U2?new Ui:void 0;for(a.set(e,t),a.set(t,e);++g<c;){var M=e[g],L=t[g];if(o)var q=s?o(L,M,g,t,e,a):o(M,L,g,e,t,a);if(q!==void 0){if(q)continue;_=!1;break}if(y){if(!cu(t,function(N,S){if(!Ci(y,S)&&(M===N||i(M,N,n,o,a)))return y.push(S)})){_=!1;break}}else if(!(M===L||i(M,L,n,o,a))){_=!1;break}}return a.delete(e),a.delete(t),_}r(C2,"equalArrays");var lu=C2;function v2(e){var t=-1,n=Array(e.size);return e.forEach(function(o,i){n[++t]=[i,o]}),n}r(v2,"mapToArray");var nU=v2;function O2(e){var t=-1,n=Array(e.size);return e.forEach(function(o){n[++t]=o}),n}r(O2,"setToArray");var vi=O2;var L2=1,N2=2,M2="[object Boolean]",w2="[object Date]",F2="[object Error]",I2="[object Map]",P2="[object Number]",D2="[object RegExp]",q2="[object Set]",B2="[object String]",G2="[object Symbol]",j2="[object ArrayBuffer]",V2="[object DataView]",oU=_t?_t.prototype:void 0,PS=oU?oU.valueOf:void 0;function W2(e,t,n,o,i,a,s){switch(n){case V2:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case j2:return!(e.byteLength!=t.byteLength||!a(new Ai(e),new Ai(t)));case M2:case w2:case P2:return Kr(+e,+t);case F2:return e.name==t.name&&e.message==t.message;case D2:case B2:return e==t+"";case I2:var c=nU;case q2:var l=o&L2;if(c||(c=vi),e.size!=t.size&&!l)return!1;var d=s.get(e);if(d)return d==t;o|=N2,s.set(e,t);var f=lu(c(e),c(t),o,i,a,s);return s.delete(e),f;case G2:if(PS)return PS.call(e)==PS.call(t)}return!1}r(W2,"equalByTag");var iU=W2;var z2=1,H2=Object.prototype,Y2=H2.hasOwnProperty;function K2(e,t,n,o,i,a){var s=n&z2,c=Es(e),l=c.length,d=Es(t),f=d.length;if(l!=f&&!s)return!1;for(var g=l;g--;){var _=c[g];if(!(s?_ in t:Y2.call(t,_)))return!1}var y=a.get(e),M=a.get(t);if(y&&M)return y==t&&M==e;var L=!0;a.set(e,t),a.set(t,e);for(var q=s;++g<l;){_=c[g];var N=e[_],S=t[_];if(o)var h=s?o(S,N,_,t,e,a):o(N,S,_,e,t,a);if(!(h===void 0?N===S||i(N,S,n,o,a):h)){L=!1;break}q||(q=_=="constructor")}if(L&&!q){var C=e.constructor,P=t.constructor;C!=P&&"constructor"in e&&"constructor"in t&&!(typeof C=="function"&&C instanceof C&&typeof P=="function"&&P instanceof P)&&(L=!1)}return a.delete(e),a.delete(t),L}r(K2,"equalObjects");var aU=K2;var J2=1,sU="[object Arguments]",cU="[object Array]",uu="[object Object]",Q2=Object.prototype,lU=Q2.hasOwnProperty;function X2(e,t,n,o,i,a){var s=B(e),c=B(t),l=s?cU:Lr(e),d=c?cU:Lr(t);l=l==sU?uu:l,d=d==sU?uu:d;var f=l==uu,g=d==uu,_=l==d;if(_&&dn(e)){if(!dn(t))return!1;s=!0,f=!1}if(_&&!f)return a||(a=new Hn),s||fi(e)?lu(e,t,n,o,i,a):iU(e,t,l,n,o,i,a);if(!(n&J2)){var y=f&&lU.call(e,"__wrapped__"),M=g&&lU.call(t,"__wrapped__");if(y||M){var L=y?e.value():e,q=M?t.value():t;return a||(a=new Hn),i(L,q,n,o,a)}}return _?(a||(a=new Hn),aU(e,t,n,o,i,a)):!1}r(X2,"baseIsEqualDeep");var uU=X2;function dU(e,t,n,o,i){return e===t?!0:e==null||t==null||!Be(e)&&!Be(t)?e!==e&&t!==t:uU(e,t,n,o,dU,i)}r(dU,"baseIsEqual");var du=dU;var Z2=1,$2=2;function ej(e,t,n,o){var i=n.length,a=i,s=!o;if(e==null)return!a;for(e=Object(e);i--;){var c=n[i];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++i<a;){c=n[i];var l=c[0],d=e[l],f=c[1];if(s&&c[2]){if(d===void 0&&!(l in e))return!1}else{var g=new Hn;if(o)var _=o(d,f,l,e,t,g);if(!(_===void 0?du(f,d,Z2|$2,o,g):_))return!1}}return!0}r(ej,"baseIsMatch");var pU=ej;function tj(e){return e===e&&!Ge(e)}r(tj,"isStrictComparable");var pu=tj;function rj(e){for(var t=he(e),n=t.length;n--;){var o=t[n],i=e[o];t[n]=[o,i,pu(i)]}return t}r(rj,"getMatchData");var fU=rj;function nj(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}r(nj,"matchesStrictComparable");var fu=nj;function oj(e){var t=fU(e);return t.length==1&&t[0][2]?fu(t[0][0],t[0][1]):function(n){return n===e||pU(n,e,t)}}r(oj,"baseMatches");var mU=oj;function ij(e,t){return e!=null&&t in Object(e)}r(ij,"baseHasIn");var hU=ij;function aj(e,t,n){t=zn(t,e);for(var o=-1,i=t.length,a=!1;++o<i;){var s=Zr(t[o]);if(!(a=e!=null&&n(e,s)))break;e=e[s]}return a||++o!=i?a:(i=e==null?0:e.length,!!i&&pi(i)&&Fn(s,i)&&(B(e)||qn(e)))}r(aj,"hasPath");var mu=aj;function sj(e,t){return e!=null&&mu(e,t,hU)}r(sj,"hasIn");var gU=sj;var cj=1,lj=2;function uj(e,t){return mi(e)&&pu(t)?fu(Zr(e),t):function(n){var o=Ro(n,e);return o===void 0&&o===t?gU(n,e):du(t,o,cj|lj)}}r(uj,"baseMatchesProperty");var TU=uj;function dj(e){return function(t){return t?.[e]}}r(dj,"baseProperty");var EU=dj;function pj(e){return function(t){return Ei(t,e)}}r(pj,"basePropertyDeep");var SU=pj;function fj(e){return mi(e)?EU(Zr(e)):SU(e)}r(fj,"property");var yU=fj;function mj(e){return typeof e=="function"?e:e==null?yr:typeof e=="object"?B(e)?TU(e[0],e[1]):mU(e):yU(e)}r(mj,"baseIteratee");var ut=mj;function hj(e,t,n,o){for(var i=-1,a=e==null?0:e.length;++i<a;){var s=e[i];t(o,s,n(s),e)}return o}r(hj,"arrayAggregator");var _U=hj;function gj(e){return function(t,n,o){for(var i=-1,a=Object(t),s=o(t),c=s.length;c--;){var l=s[e?c:++i];if(n(a[l],l,a)===!1)break}return t}}r(gj,"createBaseFor");var xU=gj;var Tj=xU(),bU=Tj;function Ej(e,t){return e&&bU(e,t,he)}r(Ej,"baseForOwn");var RU=Ej;function Sj(e,t){return function(n,o){if(n==null)return n;if(!lt(n))return e(n,o);for(var i=n.length,a=t?i:-1,s=Object(n);(t?a--:++a<i)&&o(s[a],a,s)!==!1;);return n}}r(Sj,"createBaseEach");var AU=Sj;var yj=AU(RU),rr=yj;function _j(e,t,n,o){return rr(e,function(i,a,s){t(o,i,n(i),s)}),o}r(_j,"baseAggregator");var kU=_j;function xj(e,t){return function(n,o){var i=B(n)?_U:kU,a=t?t():{};return i(n,e,ut(o,2),a)}}r(xj,"createAggregator");var hu=xj;var UU=Object.prototype,bj=UU.hasOwnProperty,Rj=Pn(function(e,t){e=Object(e);var n=-1,o=t.length,i=o>2?t[2]:void 0;for(i&&Dn(t[0],t[1],i)&&(o=1);++n<o;)for(var a=t[n],s=Bn(a),c=-1,l=s.length;++c<l;){var d=s[c],f=e[d];(f===void 0||Kr(f,UU[d])&&!bj.call(e,d))&&(e[d]=a[d])}return e}),Oi=Rj;function Aj(e){return Be(e)&&lt(e)}r(Aj,"isArrayLikeObject");var Ss=Aj;function kj(e,t,n){for(var o=-1,i=e==null?0:e.length;++o<i;)if(n(t,e[o]))return!0;return!1}r(kj,"arrayIncludesWith");var gu=kj;var Uj=200;function Cj(e,t,n,o){var i=-1,a=Kl,s=!0,c=e.length,l=[],d=t.length;if(!c)return l;n&&(t=Hr(t,Xr(n))),o?(a=gu,s=!1):t.length>=Uj&&(a=Ci,s=!1,t=new Ui(t));e:for(;++i<c;){var f=e[i],g=n==null?f:n(f);if(f=o||f!==0?f:0,s&&g===g){for(var _=d;_--;)if(t[_]===g)continue e;l.push(f)}else a(t,g,o)||l.push(f)}return l}r(Cj,"baseDifference");var Tu=Cj;var vj=Pn(function(e,t){return Ss(e)?Tu(e,yi(t,1,Ss,!0)):[]}),Kn=vj;function Oj(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}r(Oj,"last");var en=Oj;function Lj(e,t,n){var o=e==null?0:e.length;return o?(t=n||t===void 0?1:Yr(t),$l(e,t<0?0:t,o)):[]}r(Lj,"drop");var rt=Lj;function Nj(e,t,n){var o=e==null?0:e.length;return o?(t=n||t===void 0?1:Yr(t),t=o-t,$l(e,0,t<0?0:t)):[]}r(Nj,"dropRight");var fn=Nj;function Mj(e){return typeof e=="function"?e:yr}r(Mj,"castFunction");var CU=Mj;function wj(e,t){var n=B(e)?Hl:rr;return n(e,CU(t))}r(wj,"forEach");var V=wj;function Fj(e,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(!t(e[n],n,e))return!1;return!0}r(Fj,"arrayEvery");var vU=Fj;function Ij(e,t){var n=!0;return rr(e,function(o,i,a){return n=!!t(o,i,a),n}),n}r(Ij,"baseEvery");var OU=Ij;function Pj(e,t,n){var o=B(e)?vU:OU;return n&&Dn(e,t,n)&&(t=void 0),o(e,ut(t,3))}r(Pj,"every");var xt=Pj;function Dj(e,t){var n=[];return rr(e,function(o,i,a){t(o,i,a)&&n.push(o)}),n}r(Dj,"baseFilter");var Eu=Dj;function qj(e,t){var n=B(e)?bi:Eu;return n(e,ut(t,3))}r(qj,"filter");var wt=qj;function Bj(e){return function(t,n,o){var i=Object(t);if(!lt(t)){var a=ut(n,3);t=he(t),n=r(function(c){return a(i[c],c,i)},"predicate")}var s=e(t,n,o);return s>-1?i[a?t[s]:s]:void 0}}r(Bj,"createFind");var LU=Bj;var Gj=Math.max;function jj(e,t,n){var o=e==null?0:e.length;if(!o)return-1;var i=n==null?0:Yr(n);return i<0&&(i=Gj(o+i,0)),Yl(e,ut(t,3),i)}r(jj,"findIndex");var NU=jj;var Vj=LU(NU),tn=Vj;function Wj(e){return e&&e.length?e[0]:void 0}r(Wj,"head");var dt=Wj;function zj(e,t){var n=-1,o=lt(e)?Array(e.length):[];return rr(e,function(i,a,s){o[++n]=t(i,a,s)}),o}r(zj,"baseMap");var MU=zj;function Hj(e,t){var n=B(e)?Hr:MU;return n(e,ut(t,3))}r(Hj,"map");var G=Hj;function Yj(e,t){return yi(G(e,t),1)}r(Yj,"flatMap");var Wt=Yj;var Kj=Object.prototype,Jj=Kj.hasOwnProperty,Qj=hu(function(e,t,n){Jj.call(e,n)?e[n].push(t):di(e,n,[t])}),DS=Qj;var Xj=Object.prototype,Zj=Xj.hasOwnProperty;function $j(e,t){return e!=null&&Zj.call(e,t)}r($j,"baseHas");var wU=$j;function eV(e,t){return e!=null&&mu(e,t,wU)}r(eV,"has");var W=eV;var tV="[object String]";function rV(e){return typeof e=="string"||!B(e)&&Be(e)&&Ut(e)==tV}r(rV,"isString");var gt=rV;function nV(e,t){return Hr(t,function(n){return e[n]})}r(nV,"baseValues");var FU=nV;function oV(e){return e==null?[]:FU(e,he(e))}r(oV,"values");var Se=oV;var iV=Math.max;function aV(e,t,n,o){e=lt(e)?e:Se(e),n=n&&!o?Yr(n):0;var i=e.length;return n<0&&(n=iV(i+n,0)),gt(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&ui(e,t,n)>-1}r(aV,"includes");var Me=aV;var sV=Math.max;function cV(e,t,n){var o=e==null?0:e.length;if(!o)return-1;var i=n==null?0:Yr(n);return i<0&&(i=sV(o+i,0)),ui(e,t,i)}r(cV,"indexOf");var Su=cV;var lV="[object Map]",uV="[object Set]",dV=Object.prototype,pV=dV.hasOwnProperty;function fV(e){if(e==null)return!0;if(lt(e)&&(B(e)||typeof e=="string"||typeof e.splice=="function"||dn(e)||fi(e)||qn(e)))return!e.length;var t=Lr(e);if(t==lV||t==uV)return!e.size;if(Qr(e))return!Xl(e).length;for(var n in e)if(pV.call(e,n))return!1;return!0}r(fV,"isEmpty");var re=fV;var mV="[object RegExp]";function hV(e){return Be(e)&&Ut(e)==mV}r(hV,"baseIsRegExp");var IU=hV;var PU=_r&&_r.isRegExp,gV=PU?Xr(PU):IU,xr=gV;function TV(e){return e===void 0}r(TV,"isUndefined");var Ft=TV;var EV="Expected a function";function SV(e){if(typeof e!="function")throw new TypeError(EV);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}r(SV,"negate");var DU=SV;function yV(e,t,n,o){if(!Ge(e))return e;t=zn(t,e);for(var i=-1,a=t.length,s=a-1,c=e;c!=null&&++i<a;){var l=Zr(t[i]),d=n;if(l==="__proto__"||l==="constructor"||l==="prototype")return e;if(i!=s){var f=c[l];d=o?o(f,l,c):void 0,d===void 0&&(d=Ge(f)?f:Fn(t[i+1])?[]:{})}In(c,l,d),c=c[l]}return e}r(yV,"baseSet");var qU=yV;function _V(e,t,n){for(var o=-1,i=t.length,a={};++o<i;){var s=t[o],c=Ei(e,s);n(c,s)&&qU(a,zn(s,e),c)}return a}r(_V,"basePickBy");var BU=_V;function xV(e,t){if(e==null)return{};var n=Hr(nu(e),function(o){return[o]});return t=ut(t),BU(e,n,function(o,i){return t(o,i[0])})}r(xV,"pickBy");var nr=xV;var bV=hu(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]}),qS=bV;function RV(e,t,n,o,i){return i(e,function(a,s,c){n=o?(o=!1,a):t(n,a,s,c)}),n}r(RV,"baseReduce");var GU=RV;function AV(e,t,n){var o=B(e)?hk:GU,i=arguments.length<3;return o(e,ut(t,4),n,i,rr)}r(AV,"reduce");var pt=AV;function kV(e,t){var n=B(e)?bi:Eu;return n(e,DU(ut(t,3)))}r(kV,"reject");var Jn=kV;function UV(e,t){var n;return rr(e,function(o,i,a){return n=t(o,i,a),!n}),!!n}r(UV,"baseSome");var jU=UV;function CV(e,t,n){var o=B(e)?cu:jU;return n&&Dn(e,t,n)&&(t=void 0),o(e,ut(t,3))}r(CV,"some");var Nr=CV;var vV=1/0,OV=Yn&&1/vi(new Yn([,-0]))[1]==vV?function(e){return new Yn(e)}:je,VU=OV;var LV=200;function NV(e,t,n){var o=-1,i=Kl,a=e.length,s=!0,c=[],l=c;if(n)s=!1,i=gu;else if(a>=LV){var d=t?null:VU(e);if(d)return vi(d);s=!1,i=Ci,l=new Ui}else l=t?[]:c;e:for(;++o<a;){var f=e[o],g=t?t(f):f;if(f=n||f!==0?f:0,s&&g===g){for(var _=l.length;_--;)if(l[_]===g)continue e;t&&l.push(g),c.push(f)}else i(l,g,n)||(l!==c&&l.push(g),c.push(f))}return c}r(NV,"baseUniq");var WU=NV;function MV(e){return e&&e.length?WU(e):[]}r(MV,"uniq");var Qn=MV;var wV=Pn(function(e,t){return Ss(e)?Tu(e,t):[]}),BS=wV;function Li(e){console&&console.error&&console.error(`Error: ${e}`)}r(Li,"PRINT_ERROR");function ys(e){console&&console.warn&&console.warn(`Warning: ${e}`)}r(ys,"PRINT_WARNING");function _s(e){let t=new Date().getTime(),n=e();return{time:new Date().getTime()-t,value:n}}r(_s,"timer");function xs(e){function t(){}r(t,"FakeConstructor"),t.prototype=e;let n=new t;function o(){return typeof n.bar}return r(o,"fakeAccess"),o(),o(),e;(0,eval)(e)}r(xs,"toFastProperties");function FV(e){return IV(e)?e.LABEL:e.name}r(FV,"tokenLabel");function IV(e){return gt(e.LABEL)&&e.LABEL!==""}r(IV,"hasTokenLabel");var ur=class{static{r(this,"AbstractProduction")}get definition(){return this._definition}set definition(t){this._definition=t}constructor(t){this._definition=t}accept(t){t.visit(this),V(this.definition,n=>{n.accept(t)})}},Ae=class extends ur{static{r(this,"NonTerminal")}constructor(t){super([]),this.idx=1,Ct(this,nr(t,n=>n!==void 0))}set definition(t){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(t){t.visit(this)}},zt=class extends ur{static{r(this,"Rule")}constructor(t){super(t.definition),this.orgText="",Ct(this,nr(t,n=>n!==void 0))}},ke=class extends ur{static{r(this,"Alternative")}constructor(t){super(t.definition),this.ignoreAmbiguities=!1,Ct(this,nr(t,n=>n!==void 0))}},Oe=class extends ur{static{r(this,"Option")}constructor(t){super(t.definition),this.idx=1,Ct(this,nr(t,n=>n!==void 0))}},nt=class extends ur{static{r(this,"RepetitionMandatory")}constructor(t){super(t.definition),this.idx=1,Ct(this,nr(t,n=>n!==void 0))}},ot=class extends ur{static{r(this,"RepetitionMandatoryWithSeparator")}constructor(t){super(t.definition),this.idx=1,Ct(this,nr(t,n=>n!==void 0))}},ge=class extends ur{static{r(this,"Repetition")}constructor(t){super(t.definition),this.idx=1,Ct(this,nr(t,n=>n!==void 0))}},Qe=class extends ur{static{r(this,"RepetitionWithSeparator")}constructor(t){super(t.definition),this.idx=1,Ct(this,nr(t,n=>n!==void 0))}},Xe=class extends ur{static{r(this,"Alternation")}get definition(){return this._definition}set definition(t){this._definition=t}constructor(t){super(t.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,Ct(this,nr(t,n=>n!==void 0))}},se=class{static{r(this,"Terminal")}constructor(t){this.idx=1,Ct(this,nr(t,n=>n!==void 0))}accept(t){t.visit(this)}};function yu(e){return G(e,Ni)}r(yu,"serializeGrammar");function Ni(e){function t(n){return G(n,Ni)}if(r(t,"convertDefinition"),e instanceof Ae){let n={type:"NonTerminal",name:e.nonTerminalName,idx:e.idx};return gt(e.label)&&(n.label=e.label),n}else{if(e instanceof ke)return{type:"Alternative",definition:t(e.definition)};if(e instanceof Oe)return{type:"Option",idx:e.idx,definition:t(e.definition)};if(e instanceof nt)return{type:"RepetitionMandatory",idx:e.idx,definition:t(e.definition)};if(e instanceof ot)return{type:"RepetitionMandatoryWithSeparator",idx:e.idx,separator:Ni(new se({terminalType:e.separator})),definition:t(e.definition)};if(e instanceof Qe)return{type:"RepetitionWithSeparator",idx:e.idx,separator:Ni(new se({terminalType:e.separator})),definition:t(e.definition)};if(e instanceof ge)return{type:"Repetition",idx:e.idx,definition:t(e.definition)};if(e instanceof Xe)return{type:"Alternation",idx:e.idx,definition:t(e.definition)};if(e instanceof se){let n={type:"Terminal",name:e.terminalType.name,label:FV(e.terminalType),idx:e.idx};gt(e.label)&&(n.terminalLabel=e.label);let o=e.terminalType.PATTERN;return e.terminalType.PATTERN&&(n.pattern=xr(o)?o.source:o),n}else{if(e instanceof zt)return{type:"Rule",name:e.name,orgText:e.orgText,definition:t(e.definition)};throw Error("non exhaustive match")}}}r(Ni,"serializeProduction");var Ht=class{static{r(this,"GAstVisitor")}visit(t){let n=t;switch(n.constructor){case Ae:return this.visitNonTerminal(n);case ke:return this.visitAlternative(n);case Oe:return this.visitOption(n);case nt:return this.visitRepetitionMandatory(n);case ot:return this.visitRepetitionMandatoryWithSeparator(n);case Qe:return this.visitRepetitionWithSeparator(n);case ge:return this.visitRepetition(n);case Xe:return this.visitAlternation(n);case se:return this.visitTerminal(n);case zt:return this.visitRule(n);default:throw Error("non exhaustive match")}}visitNonTerminal(t){}visitAlternative(t){}visitOption(t){}visitRepetition(t){}visitRepetitionMandatory(t){}visitRepetitionMandatoryWithSeparator(t){}visitRepetitionWithSeparator(t){}visitAlternation(t){}visitTerminal(t){}visitRule(t){}};function GS(e){return e instanceof ke||e instanceof Oe||e instanceof ge||e instanceof nt||e instanceof ot||e instanceof Qe||e instanceof se||e instanceof zt}r(GS,"isSequenceProd");function ko(e,t=[]){return e instanceof Oe||e instanceof ge||e instanceof Qe?!0:e instanceof Xe?Nr(e.definition,o=>ko(o,t)):e instanceof Ae&&Me(t,e)?!1:e instanceof ur?(e instanceof Ae&&t.push(e),xt(e.definition,o=>ko(o,t))):!1}r(ko,"isOptionalProd");function jS(e){return e instanceof Xe}r(jS,"isBranchingProd");function or(e){if(e instanceof Ae)return"SUBRULE";if(e instanceof Oe)return"OPTION";if(e instanceof Xe)return"OR";if(e instanceof nt)return"AT_LEAST_ONE";if(e instanceof ot)return"AT_LEAST_ONE_SEP";if(e instanceof Qe)return"MANY_SEP";if(e instanceof ge)return"MANY";if(e instanceof se)return"CONSUME";throw Error("non exhaustive match")}r(or,"getProductionDslName");var mn=class{static{r(this,"RestWalker")}walk(t,n=[]){V(t.definition,(o,i)=>{let a=rt(t.definition,i+1);if(o instanceof Ae)this.walkProdRef(o,a,n);else if(o instanceof se)this.walkTerminal(o,a,n);else if(o instanceof ke)this.walkFlat(o,a,n);else if(o instanceof Oe)this.walkOption(o,a,n);else if(o instanceof nt)this.walkAtLeastOne(o,a,n);else if(o instanceof ot)this.walkAtLeastOneSep(o,a,n);else if(o instanceof Qe)this.walkManySep(o,a,n);else if(o instanceof ge)this.walkMany(o,a,n);else if(o instanceof Xe)this.walkOr(o,a,n);else throw Error("non exhaustive match")})}walkTerminal(t,n,o){}walkProdRef(t,n,o){}walkFlat(t,n,o){let i=n.concat(o);this.walk(t,i)}walkOption(t,n,o){let i=n.concat(o);this.walk(t,i)}walkAtLeastOne(t,n,o){let i=[new Oe({definition:t.definition})].concat(n,o);this.walk(t,i)}walkAtLeastOneSep(t,n,o){let i=zU(t,n,o);this.walk(t,i)}walkMany(t,n,o){let i=[new Oe({definition:t.definition})].concat(n,o);this.walk(t,i)}walkManySep(t,n,o){let i=zU(t,n,o);this.walk(t,i)}walkOr(t,n,o){let i=n.concat(o);V(t.definition,a=>{let s=new ke({definition:[a]});this.walk(s,i)})}};function zU(e,t,n){return[new Oe({definition:[new se({terminalType:e.separator})].concat(e.definition)})].concat(t,n)}r(zU,"restForRepetitionWithSeparator");function Uo(e){if(e instanceof Ae)return Uo(e.referencedRule);if(e instanceof se)return qV(e);if(GS(e))return PV(e);if(jS(e))return DV(e);throw Error("non exhaustive match")}r(Uo,"first");function PV(e){let t=[],n=e.definition,o=0,i=n.length>o,a,s=!0;for(;i&&s;)a=n[o],s=ko(a),t=t.concat(Uo(a)),o=o+1,i=n.length>o;return Qn(t)}r(PV,"firstForSequence");function DV(e){let t=G(e.definition,n=>Uo(n));return Qn(ht(t))}r(DV,"firstForBranching");function qV(e){return[e.terminalType]}r(qV,"firstForTerminal");var _u="_~IN~_";var VS=class extends mn{static{r(this,"ResyncFollowsWalker")}constructor(t){super(),this.topProd=t,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(t,n,o){}walkProdRef(t,n,o){let i=BV(t.referencedRule,t.idx)+this.topProd.name,a=n.concat(o),s=new ke({definition:a}),c=Uo(s);this.follows[i]=c}};function HU(e){let t={};return V(e,n=>{let o=new VS(n).startWalking();Ct(t,o)}),t}r(HU,"computeAllProdsFollows");function BV(e,t){return e.name+t+_u}r(BV,"buildBetweenProdsFollowPrefix");function J(e){return e.charCodeAt(0)}r(J,"cc");function xu(e,t){Array.isArray(e)?e.forEach(function(n){t.push(n)}):t.push(e)}r(xu,"insertToSet");function Mi(e,t){if(e[t]===!0)throw"duplicate flag "+t;let n=e[t];e[t]=!0}r(Mi,"addFlag");function Co(e){if(e===void 0)throw Error("Internal Error - Should never get here!");return!0}r(Co,"ASSERT_EXISTS");function bs(){throw Error("Internal Error - Should never get here!")}r(bs,"ASSERT_NEVER_REACH_HERE");function WS(e){return e.type==="Character"}r(WS,"isCharacter");var Rs=[];for(let e=J("0");e<=J("9");e++)Rs.push(e);var As=[J("_")].concat(Rs);for(let e=J("a");e<=J("z");e++)As.push(e);for(let e=J("A");e<=J("Z");e++)As.push(e);var zS=[J(" "),J("\f"),J(`
`),J("\r"),J("	"),J("\v"),J("	"),J("\xA0"),J("\u1680"),J("\u2000"),J("\u2001"),J("\u2002"),J("\u2003"),J("\u2004"),J("\u2005"),J("\u2006"),J("\u2007"),J("\u2008"),J("\u2009"),J("\u200A"),J("\u2028"),J("\u2029"),J("\u202F"),J("\u205F"),J("\u3000"),J("\uFEFF")];var GV=/[0-9a-fA-F]/,bu=/[0-9]/,jV=/[1-9]/,ks=class{static{r(this,"RegExpParser")}constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(t){this.idx=t.idx,this.input=t.input,this.groupIdx=t.groupIdx}pattern(t){this.idx=0,this.input=t,this.groupIdx=0,this.consumeChar("/");let n=this.disjunction();this.consumeChar("/");let o={type:"Flags",loc:{begin:this.idx,end:t.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":Mi(o,"global");break;case"i":Mi(o,"ignoreCase");break;case"m":Mi(o,"multiLine");break;case"u":Mi(o,"unicode");break;case"y":Mi(o,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:o,value:n,loc:this.loc(0)}}disjunction(){let t=[],n=this.idx;for(t.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),t.push(this.alternative());return{type:"Disjunction",value:t,loc:this.loc(n)}}alternative(){let t=[],n=this.idx;for(;this.isTerm();)t.push(this.term());return{type:"Alternative",value:t,loc:this.loc(n)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){let t=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(t)};case"$":return{type:"EndAnchor",loc:this.loc(t)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(t)};case"B":return{type:"NonWordBoundary",loc:this.loc(t)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let n;switch(this.popChar()){case"=":n="Lookahead";break;case"!":n="NegativeLookahead";break}Co(n);let o=this.disjunction();return this.consumeChar(")"),{type:n,value:o,loc:this.loc(t)}}return bs()}quantifier(t=!1){let n,o=this.idx;switch(this.popChar()){case"*":n={atLeast:0,atMost:1/0};break;case"+":n={atLeast:1,atMost:1/0};break;case"?":n={atLeast:0,atMost:1};break;case"{":let i=this.integerIncludingZero();switch(this.popChar()){case"}":n={atLeast:i,atMost:i};break;case",":let a;this.isDigit()?(a=this.integerIncludingZero(),n={atLeast:i,atMost:a}):n={atLeast:i,atMost:1/0},this.consumeChar("}");break}if(t===!0&&n===void 0)return;Co(n);break}if(!(t===!0&&n===void 0)&&Co(n))return this.peekChar(0)==="?"?(this.consumeChar("?"),n.greedy=!1):n.greedy=!0,n.type="Quantifier",n.loc=this.loc(o),n}atom(){let t,n=this.idx;switch(this.peekChar()){case".":t=this.dotAll();break;case"\\":t=this.atomEscape();break;case"[":t=this.characterClass();break;case"(":t=this.group();break}return t===void 0&&this.isPatternCharacter()&&(t=this.patternCharacter()),Co(t)?(t.loc=this.loc(n),this.isQuantifier()&&(t.quantifier=this.quantifier()),t):bs()}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[J(`
`),J("\r"),J("\u2028"),J("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let t,n=!1;switch(this.popChar()){case"d":t=Rs;break;case"D":t=Rs,n=!0;break;case"s":t=zS;break;case"S":t=zS,n=!0;break;case"w":t=As;break;case"W":t=As,n=!0;break}return Co(t)?{type:"Set",value:t,complement:n}:bs()}controlEscapeAtom(){let t;switch(this.popChar()){case"f":t=J("\f");break;case"n":t=J(`
`);break;case"r":t=J("\r");break;case"t":t=J("	");break;case"v":t=J("\v");break}return Co(t)?{type:"Character",value:t}:bs()}controlLetterEscapeAtom(){this.consumeChar("c");let t=this.popChar();if(/[a-zA-Z]/.test(t)===!1)throw Error("Invalid ");return{type:"Character",value:t.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:J("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){let t=this.popChar();return{type:"Character",value:J(t)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:let t=this.popChar();return{type:"Character",value:J(t)}}}characterClass(){let t=[],n=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),n=!0);this.isClassAtom();){let o=this.classAtom(),i=o.type==="Character";if(WS(o)&&this.isRangeDash()){this.consumeChar("-");let a=this.classAtom(),s=a.type==="Character";if(WS(a)){if(a.value<o.value)throw Error("Range out of order in character class");t.push({from:o.value,to:a.value})}else xu(o.value,t),t.push(J("-")),xu(a.value,t)}else xu(o.value,t)}return this.consumeChar("]"),{type:"Set",complement:n,value:t}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:J("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let t=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),t=!1;break;default:this.groupIdx++;break}let n=this.disjunction();this.consumeChar(")");let o={type:"Group",capturing:t,value:n};return t&&(o.idx=this.groupIdx),o}positiveInteger(){let t=this.popChar();if(jV.test(t)===!1)throw Error("Expecting a positive integer");for(;bu.test(this.peekChar(0));)t+=this.popChar();return parseInt(t,10)}integerIncludingZero(){let t=this.popChar();if(bu.test(t)===!1)throw Error("Expecting an integer");for(;bu.test(this.peekChar(0));)t+=this.popChar();return parseInt(t,10)}patternCharacter(){let t=this.popChar();switch(t){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:J(t)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return bu.test(this.peekChar(0))}isClassAtom(t=0){switch(this.peekChar(t)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){let t=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(t)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(t){let n="";for(let i=0;i<t;i++){let a=this.popChar();if(GV.test(a)===!1)throw Error("Expecting a HexDecimal digits");n+=a}return{type:"Character",value:parseInt(n,16)}}peekChar(t=0){return this.input[this.idx+t]}popChar(){let t=this.peekChar(0);return this.consumeChar(void 0),t}consumeChar(t){if(t!==void 0&&this.input[this.idx]!==t)throw Error("Expected: '"+t+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(t){return{begin:t,end:this.idx}}};var Xn=class{static{r(this,"BaseRegExpVisitor")}visitChildren(t){for(let n in t){let o=t[n];t.hasOwnProperty(n)&&(o.type!==void 0?this.visit(o):Array.isArray(o)&&o.forEach(i=>{this.visit(i)},this))}}visit(t){switch(t.type){case"Pattern":this.visitPattern(t);break;case"Flags":this.visitFlags(t);break;case"Disjunction":this.visitDisjunction(t);break;case"Alternative":this.visitAlternative(t);break;case"StartAnchor":this.visitStartAnchor(t);break;case"EndAnchor":this.visitEndAnchor(t);break;case"WordBoundary":this.visitWordBoundary(t);break;case"NonWordBoundary":this.visitNonWordBoundary(t);break;case"Lookahead":this.visitLookahead(t);break;case"NegativeLookahead":this.visitNegativeLookahead(t);break;case"Character":this.visitCharacter(t);break;case"Set":this.visitSet(t);break;case"Group":this.visitGroup(t);break;case"GroupBackReference":this.visitGroupBackReference(t);break;case"Quantifier":this.visitQuantifier(t);break}this.visitChildren(t)}visitPattern(t){}visitFlags(t){}visitDisjunction(t){}visitAlternative(t){}visitStartAnchor(t){}visitEndAnchor(t){}visitWordBoundary(t){}visitNonWordBoundary(t){}visitLookahead(t){}visitNegativeLookahead(t){}visitCharacter(t){}visitSet(t){}visitGroup(t){}visitGroupBackReference(t){}visitQuantifier(t){}};var Ru={},VV=new ks;function wi(e){let t=e.toString();if(Ru.hasOwnProperty(t))return Ru[t];{let n=VV.pattern(t);return Ru[t]=n,n}}r(wi,"getRegExpAst");function YU(){Ru={}}r(YU,"clearRegExpParserCache");var JU="Complement Sets are not supported for first char optimization",Us=`Unable to use "first char" lexer optimizations:
`;function QU(e,t=!1){try{let n=wi(e);return HS(n.value,{},n.flags.ignoreCase)}catch(n){if(n.message===JU)t&&ys(`${Us}	Unable to optimize: < ${e.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let o="";t&&(o=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),Li(`${Us}
	Failed parsing: < ${e.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+o)}}return[]}r(QU,"getOptimizedStartCodesIndices");function HS(e,t,n){switch(e.type){case"Disjunction":for(let i=0;i<e.value.length;i++)HS(e.value[i],t,n);break;case"Alternative":let o=e.value;for(let i=0;i<o.length;i++){let a=o[i];switch(a.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}let s=a;switch(s.type){case"Character":Au(s.value,t,n);break;case"Set":if(s.complement===!0)throw Error(JU);V(s.value,l=>{if(typeof l=="number")Au(l,t,n);else{let d=l;if(n===!0)for(let f=d.from;f<=d.to;f++)Au(f,t,n);else{for(let f=d.from;f<=d.to&&f<Fi;f++)Au(f,t,n);if(d.to>=Fi){let f=d.from>=Fi?d.from:Fi,g=d.to,_=rn(f),y=rn(g);for(let M=_;M<=y;M++)t[M]=M}}}});break;case"Group":HS(s.value,t,n);break;default:throw Error("Non Exhaustive Match")}let c=s.quantifier!==void 0&&s.quantifier.atLeast===0;if(s.type==="Group"&&YS(s)===!1||s.type!=="Group"&&c===!1)break}break;default:throw Error("non exhaustive match!")}return Se(t)}r(HS,"firstCharOptimizedIndices");function Au(e,t,n){let o=rn(e);t[o]=o,n===!0&&WV(e,t)}r(Au,"addOptimizedIdxToResult");function WV(e,t){let n=String.fromCharCode(e),o=n.toUpperCase();if(o!==n){let i=rn(o.charCodeAt(0));t[i]=i}else{let i=n.toLowerCase();if(i!==n){let a=rn(i.charCodeAt(0));t[a]=a}}}r(WV,"handleIgnoreCase");function KU(e,t){return tn(e.value,n=>{if(typeof n=="number")return Me(t,n);{let o=n;return tn(t,i=>o.from<=i&&i<=o.to)!==void 0}})}r(KU,"findCode");function YS(e){let t=e.quantifier;return t&&t.atLeast===0?!0:e.value?B(e.value)?xt(e.value,YS):YS(e.value):!1}r(YS,"isWholeOptional");var KS=class extends Xn{static{r(this,"CharCodeFinder")}constructor(t){super(),this.targetCharCodes=t,this.found=!1}visitChildren(t){if(this.found!==!0){switch(t.type){case"Lookahead":this.visitLookahead(t);return;case"NegativeLookahead":this.visitNegativeLookahead(t);return}super.visitChildren(t)}}visitCharacter(t){Me(this.targetCharCodes,t.value)&&(this.found=!0)}visitSet(t){t.complement?KU(t,this.targetCharCodes)===void 0&&(this.found=!0):KU(t,this.targetCharCodes)!==void 0&&(this.found=!0)}};function ku(e,t){if(t instanceof RegExp){let n=wi(t),o=new KS(e);return o.visit(n),o.found}else return tn(t,n=>Me(e,n.charCodeAt(0)))!==void 0}r(ku,"canMatchCharCode");var vo="PATTERN",Ii="defaultMode",Uu="modes",QS=typeof new RegExp("(?:)").sticky=="boolean";function $U(e,t){t=Oi(t,{useSticky:QS,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:r((S,h)=>h(),"tracer")});let n=t.tracer;n("initCharCodeToOptimizedIndexMap",()=>{cW()});let o;n("Reject Lexer.NA",()=>{o=Jn(e,S=>S[vo]===Ve.NA)});let i=!1,a;n("Transform Patterns",()=>{i=!1,a=G(o,S=>{let h=S[vo];if(xr(h)){let C=h.source;return C.length===1&&C!=="^"&&C!=="$"&&C!=="."&&!h.ignoreCase?C:C.length===2&&C[0]==="\\"&&!Me(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],C[1])?C[1]:t.useSticky?ZU(h):XU(h)}else{if(Vt(h))return i=!0,{exec:h};if(typeof h=="object")return i=!0,h;if(typeof h=="string"){if(h.length===1)return h;{let C=h.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),P=new RegExp(C);return t.useSticky?ZU(P):XU(P)}}else throw Error("non exhaustive match")}})});let s,c,l,d,f;n("misc mapping",()=>{s=G(o,S=>S.tokenTypeIdx),c=G(o,S=>{let h=S.GROUP;if(h!==Ve.SKIPPED){if(gt(h))return h;if(Ft(h))return!1;throw Error("non exhaustive match")}}),l=G(o,S=>{let h=S.LONGER_ALT;if(h)return B(h)?G(h,P=>Su(o,P)):[Su(o,h)]}),d=G(o,S=>S.PUSH_MODE),f=G(o,S=>W(S,"POP_MODE"))});let g;n("Line Terminator Handling",()=>{let S=sC(t.lineTerminatorCharacters);g=G(o,h=>!1),t.positionTracking!=="onlyOffset"&&(g=G(o,h=>W(h,"LINE_BREAKS")?!!h.LINE_BREAKS:aC(h,S)===!1&&ku(S,h.PATTERN)))});let _,y,M,L;n("Misc Mapping #2",()=>{_=G(o,oC),y=G(a,aW),M=pt(o,(S,h)=>{let C=h.GROUP;return gt(C)&&C!==Ve.SKIPPED&&(S[C]=[]),S},{}),L=G(a,(S,h)=>({pattern:a[h],longerAlt:l[h],canLineTerminator:g[h],isCustom:_[h],short:y[h],group:c[h],push:d[h],pop:f[h],tokenTypeIdx:s[h],tokenType:o[h]}))});let q=!0,N=[];return t.safeMode||n("First Char Optimization",()=>{N=pt(o,(S,h,C)=>{if(typeof h.PATTERN=="string"){let P=h.PATTERN.charCodeAt(0),le=rn(P);JS(S,le,L[C])}else if(B(h.START_CHARS_HINT)){let P;V(h.START_CHARS_HINT,le=>{let an=typeof le=="string"?le.charCodeAt(0):le,sr=rn(an);P!==sr&&(P=sr,JS(S,sr,L[C]))})}else if(xr(h.PATTERN))if(h.PATTERN.unicode)q=!1,t.ensureOptimizations&&Li(`${Us}	Unable to analyze < ${h.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{let P=QU(h.PATTERN,t.ensureOptimizations);re(P)&&(q=!1),V(P,le=>{JS(S,le,L[C])})}else t.ensureOptimizations&&Li(`${Us}	TokenType: <${h.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),q=!1;return S},[])}),{emptyGroups:M,patternIdxToConfig:L,charCodeToPatternIdxToConfig:N,hasCustom:i,canBeOptimized:q}}r($U,"analyzeTokenTypes");function eC(e,t){let n=[],o=HV(e);n=n.concat(o.errors);let i=YV(o.valid),a=i.valid;return n=n.concat(i.errors),n=n.concat(zV(a)),n=n.concat(tW(a)),n=n.concat(rW(a,t)),n=n.concat(nW(a)),n}r(eC,"validatePatterns");function zV(e){let t=[],n=wt(e,o=>xr(o[vo]));return t=t.concat(JV(n)),t=t.concat(ZV(n)),t=t.concat($V(n)),t=t.concat(eW(n)),t=t.concat(QV(n)),t}r(zV,"validateRegExpPattern");function HV(e){let t=wt(e,i=>!W(i,vo)),n=G(t,i=>({message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:we.MISSING_PATTERN,tokenTypes:[i]})),o=Kn(e,t);return{errors:n,valid:o}}r(HV,"findMissingPatterns");function YV(e){let t=wt(e,i=>{let a=i[vo];return!xr(a)&&!Vt(a)&&!W(a,"exec")&&!gt(a)}),n=G(t,i=>({message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:we.INVALID_PATTERN,tokenTypes:[i]})),o=Kn(e,t);return{errors:n,valid:o}}r(YV,"findInvalidPatterns");var KV=/[^\\][$]/;function JV(e){class t extends Xn{static{r(this,"EndAnchorFinder")}constructor(){super(...arguments),this.found=!1}visitEndAnchor(a){this.found=!0}}let n=wt(e,i=>{let a=i.PATTERN;try{let s=wi(a),c=new t;return c.visit(s),c.found}catch{return KV.test(a.source)}});return G(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:we.EOI_ANCHOR_FOUND,tokenTypes:[i]}))}r(JV,"findEndOfInputAnchor");function QV(e){let t=wt(e,o=>o.PATTERN.test(""));return G(t,o=>({message:"Token Type: ->"+o.name+"<- static 'PATTERN' must not match an empty string",type:we.EMPTY_MATCH_PATTERN,tokenTypes:[o]}))}r(QV,"findEmptyMatchRegExps");var XV=/[^\\[][\^]|^\^/;function ZV(e){class t extends Xn{static{r(this,"StartAnchorFinder")}constructor(){super(...arguments),this.found=!1}visitStartAnchor(a){this.found=!0}}let n=wt(e,i=>{let a=i.PATTERN;try{let s=wi(a),c=new t;return c.visit(s),c.found}catch{return XV.test(a.source)}});return G(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:we.SOI_ANCHOR_FOUND,tokenTypes:[i]}))}r(ZV,"findStartOfInputAnchor");function $V(e){let t=wt(e,o=>{let i=o[vo];return i instanceof RegExp&&(i.multiline||i.global)});return G(t,o=>({message:"Token Type: ->"+o.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:we.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[o]}))}r($V,"findUnsupportedFlags");function eW(e){let t=[],n=G(e,a=>pt(e,(s,c)=>(a.PATTERN.source===c.PATTERN.source&&!Me(t,c)&&c.PATTERN!==Ve.NA&&(t.push(c),s.push(c)),s),[]));n=$r(n);let o=wt(n,a=>a.length>1);return G(o,a=>{let s=G(a,l=>l.name);return{message:`The same RegExp pattern ->${dt(a).PATTERN}<-has been used in all of the following Token Types: ${s.join(", ")} <-`,type:we.DUPLICATE_PATTERNS_FOUND,tokenTypes:a}})}r(eW,"findDuplicatePatterns");function tW(e){let t=wt(e,o=>{if(!W(o,"GROUP"))return!1;let i=o.GROUP;return i!==Ve.SKIPPED&&i!==Ve.NA&&!gt(i)});return G(t,o=>({message:"Token Type: ->"+o.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:we.INVALID_GROUP_TYPE_FOUND,tokenTypes:[o]}))}r(tW,"findInvalidGroupType");function rW(e,t){let n=wt(e,i=>i.PUSH_MODE!==void 0&&!Me(t,i.PUSH_MODE));return G(n,i=>({message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,type:we.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}))}r(rW,"findModesThatDoNotExist");function nW(e){let t=[],n=pt(e,(o,i,a)=>{let s=i.PATTERN;return s===Ve.NA||(gt(s)?o.push({str:s,idx:a,tokenType:i}):xr(s)&&iW(s)&&o.push({str:s.source,idx:a,tokenType:i})),o},[]);return V(e,(o,i)=>{V(n,({str:a,idx:s,tokenType:c})=>{if(i<s&&oW(a,o.PATTERN)){let l=`Token: ->${c.name}<- can never be matched.
Because it appears AFTER the Token Type ->${o.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;t.push({message:l,type:we.UNREACHABLE_PATTERN,tokenTypes:[o,c]})}})}),t}r(nW,"findUnreachablePatterns");function oW(e,t){if(xr(t)){let n=t.exec(e);return n!==null&&n.index===0}else{if(Vt(t))return t(e,0,[],{});if(W(t,"exec"))return t.exec(e,0,[],{});if(typeof t=="string")return t===e;throw Error("non exhaustive match")}}r(oW,"testTokenType");function iW(e){return tn([".","\\","[","]","|","^","$","(",")","?","*","+","{"],n=>e.source.indexOf(n)!==-1)===void 0}r(iW,"noMetaChar");function XU(e){let t=e.ignoreCase?"i":"";return new RegExp(`^(?:${e.source})`,t)}r(XU,"addStartOfInput");function ZU(e){let t=e.ignoreCase?"iy":"y";return new RegExp(`${e.source}`,t)}r(ZU,"addStickyFlag");function tC(e,t,n){let o=[];return W(e,Ii)||o.push({message:"A MultiMode Lexer cannot be initialized without a <"+Ii+`> property in its definition
`,type:we.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),W(e,Uu)||o.push({message:"A MultiMode Lexer cannot be initialized without a <"+Uu+`> property in its definition
`,type:we.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),W(e,Uu)&&W(e,Ii)&&!W(e.modes,e.defaultMode)&&o.push({message:`A MultiMode Lexer cannot be initialized with a ${Ii}: <${e.defaultMode}>which does not exist
`,type:we.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),W(e,Uu)&&V(e.modes,(i,a)=>{V(i,(s,c)=>{if(Ft(s))o.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${a}> at index: <${c}>
`,type:we.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(W(s,"LONGER_ALT")){let l=B(s.LONGER_ALT)?s.LONGER_ALT:[s.LONGER_ALT];V(l,d=>{!Ft(d)&&!Me(i,d)&&o.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${d.name}> on token <${s.name}> outside of mode <${a}>
`,type:we.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),o}r(tC,"performRuntimeChecks");function rC(e,t,n){let o=[],i=!1,a=$r(ht(Se(e.modes))),s=Jn(a,l=>l[vo]===Ve.NA),c=sC(n);return t&&V(s,l=>{let d=aC(l,c);if(d!==!1){let g={message:sW(l,d),type:d.issue,tokenType:l};o.push(g)}else W(l,"LINE_BREAKS")?l.LINE_BREAKS===!0&&(i=!0):ku(c,l.PATTERN)&&(i=!0)}),t&&!i&&o.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:we.NO_LINE_BREAKS_FLAGS}),o}r(rC,"performWarningRuntimeChecks");function nC(e){let t={},n=he(e);return V(n,o=>{let i=e[o];if(B(i))t[o]=[];else throw Error("non exhaustive match")}),t}r(nC,"cloneEmptyGroups");function oC(e){let t=e.PATTERN;if(xr(t))return!1;if(Vt(t))return!0;if(W(t,"exec"))return!0;if(gt(t))return!1;throw Error("non exhaustive match")}r(oC,"isCustomPattern");function aW(e){return gt(e)&&e.length===1?e.charCodeAt(0):!1}r(aW,"isShortPattern");var iC={test:r(function(e){let t=e.length;for(let n=this.lastIndex;n<t;n++){let o=e.charCodeAt(n);if(o===10)return this.lastIndex=n+1,!0;if(o===13)return e.charCodeAt(n+1)===10?this.lastIndex=n+2:this.lastIndex=n+1,!0}return!1},"test"),lastIndex:0};function aC(e,t){if(W(e,"LINE_BREAKS"))return!1;if(xr(e.PATTERN)){try{ku(t,e.PATTERN)}catch(n){return{issue:we.IDENTIFY_TERMINATOR,errMsg:n.message}}return!1}else{if(gt(e.PATTERN))return!1;if(oC(e))return{issue:we.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}r(aC,"checkLineBreaksIssues");function sW(e,t){if(t.issue===we.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${e.name}> Token Type
	 Root cause: ${t.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(t.issue===we.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${e.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}r(sW,"buildLineBreakIssueMessage");function sC(e){return G(e,n=>gt(n)?n.charCodeAt(0):n)}r(sC,"getCharCodes");function JS(e,t,n){e[t]===void 0?e[t]=[n]:e[t].push(n)}r(JS,"addToMapOfArrays");var Fi=256,Cu=[];function rn(e){return e<Fi?e:Cu[e]}r(rn,"charCodeToOptimizedIndex");function cW(){if(re(Cu)){Cu=new Array(65536);for(let e=0;e<65536;e++)Cu[e]=e>255?255+~~(e/255):e}}r(cW,"initCharCodeToOptimizedIndexMap");function hn(e,t){let n=e.tokenTypeIdx;return n===t.tokenTypeIdx?!0:t.isParent===!0&&t.categoryMatchesMap[n]===!0}r(hn,"tokenStructuredMatcher");function Pi(e,t){return e.tokenTypeIdx===t.tokenTypeIdx}r(Pi,"tokenStructuredMatcherNoCategories");var cC=1,uC={};function gn(e){let t=lW(e);uW(t),pW(t),dW(t),V(t,n=>{n.isParent=n.categoryMatches.length>0})}r(gn,"augmentTokenTypes");function lW(e){let t=Re(e),n=e,o=!0;for(;o;){n=$r(ht(G(n,a=>a.CATEGORIES)));let i=Kn(n,t);t=t.concat(i),re(i)?o=!1:n=i}return t}r(lW,"expandCategories");function uW(e){V(e,t=>{XS(t)||(uC[cC]=t,t.tokenTypeIdx=cC++),lC(t)&&!B(t.CATEGORIES)&&(t.CATEGORIES=[t.CATEGORIES]),lC(t)||(t.CATEGORIES=[]),fW(t)||(t.categoryMatches=[]),mW(t)||(t.categoryMatchesMap={})})}r(uW,"assignTokenDefaultProps");function dW(e){V(e,t=>{t.categoryMatches=[],V(t.categoryMatchesMap,(n,o)=>{t.categoryMatches.push(uC[o].tokenTypeIdx)})})}r(dW,"assignCategoriesTokensProp");function pW(e){V(e,t=>{dC([],t)})}r(pW,"assignCategoriesMapProp");function dC(e,t){V(e,n=>{t.categoryMatchesMap[n.tokenTypeIdx]=!0}),V(t.CATEGORIES,n=>{let o=e.concat(t);Me(o,n)||dC(o,n)})}r(dC,"singleAssignCategoriesToksMap");function XS(e){return W(e,"tokenTypeIdx")}r(XS,"hasShortKeyProperty");function lC(e){return W(e,"CATEGORIES")}r(lC,"hasCategoriesProperty");function fW(e){return W(e,"categoryMatches")}r(fW,"hasExtendingTokensTypesProperty");function mW(e){return W(e,"categoryMatchesMap")}r(mW,"hasExtendingTokensTypesMapProperty");function pC(e){return W(e,"tokenTypeIdx")}r(pC,"isTokenType");var ZS={buildUnableToPopLexerModeMessage(e){return`Unable to pop Lexer Mode after encountering Token ->${e.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(e,t,n,o,i){return`unexpected character: ->${e.charAt(t)}<- at offset: ${t}, skipped ${n} characters.`}};var we;(function(e){e[e.MISSING_PATTERN=0]="MISSING_PATTERN",e[e.INVALID_PATTERN=1]="INVALID_PATTERN",e[e.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",e[e.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",e[e.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",e[e.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",e[e.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",e[e.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",e[e.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",e[e.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",e[e.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",e[e.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",e[e.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",e[e.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",e[e.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",e[e.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",e[e.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",e[e.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(we||(we={}));var Cs={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:ZS,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(Cs);var Ve=class{static{r(this,"Lexer")}constructor(t,n=Cs){if(this.lexerDefinition=t,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(i,a)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;let s=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${s}--> <${i}>`);let{time:c,value:l}=_s(a),d=c>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&d(`${s}<-- <${i}> time: ${c}ms`),this.traceInitIndent--,l}else return a()},typeof n=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=Ct({},Cs,n);let o=this.config.traceInitPerf;o===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof o=="number"&&(this.traceInitMaxIdent=o,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let i,a=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===Cs.lineTerminatorsPattern)this.config.lineTerminatorsPattern=iC;else if(this.config.lineTerminatorCharacters===Cs.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(n.safeMode&&n.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),B(t)?i={modes:{defaultMode:Re(t)},defaultMode:Ii}:(a=!1,i=Re(t))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(tC(i,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(rC(i,this.trackStartLines,this.config.lineTerminatorCharacters))})),i.modes=i.modes?i.modes:{},V(i.modes,(c,l)=>{i.modes[l]=Jn(c,d=>Ft(d))});let s=he(i.modes);if(V(i.modes,(c,l)=>{this.TRACE_INIT(`Mode: <${l}> processing`,()=>{if(this.modes.push(l),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(eC(c,s))}),re(this.lexerDefinitionErrors)){gn(c);let d;this.TRACE_INIT("analyzeTokenTypes",()=>{d=$U(c,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:n.positionTracking,ensureOptimizations:n.ensureOptimizations,safeMode:n.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[l]=d.patternIdxToConfig,this.charCodeToPatternIdxToConfig[l]=d.charCodeToPatternIdxToConfig,this.emptyGroups=Ct({},this.emptyGroups,d.emptyGroups),this.hasCustom=d.hasCustom||this.hasCustom,this.canModeBeOptimized[l]=d.canBeOptimized}})}),this.defaultMode=i.defaultMode,!re(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){let l=G(this.lexerDefinitionErrors,d=>d.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+l)}V(this.lexerDefinitionWarning,c=>{ys(c.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(QS?(this.chopInput=yr,this.match=this.matchWithTest):(this.updateLastIndex=je,this.match=this.matchWithExec),a&&(this.handleModes=je),this.trackStartLines===!1&&(this.computeNewColumn=yr),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=je),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{let c=pt(this.canModeBeOptimized,(l,d,f)=>(d===!1&&l.push(f),l),[]);if(n.ensureOptimizations&&!re(c))throw Error(`Lexer Modes: < ${c.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{YU()}),this.TRACE_INIT("toFastProperties",()=>{xs(this)})})}tokenize(t,n=this.defaultMode){if(!re(this.lexerDefinitionErrors)){let i=G(this.lexerDefinitionErrors,a=>a.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(t,n)}tokenizeInternal(t,n){let o,i,a,s,c,l,d,f,g,_,y,M,L,q,N,S,h=t,C=h.length,P=0,le=0,an=this.hasCustom?0:Math.floor(t.length/10),sr=new Array(an),Mo=[],Sn=this.trackStartLines?1:void 0,kr=this.trackStartLines?1:void 0,Kt=nC(this.emptyGroups),Tc=this.trackStartLines,ja=this.config.lineTerminatorsPattern,wo=0,Pr=[],mo=[],ho=[],Va=[];Object.freeze(Va);let fr;function Wa(){return Pr}r(Wa,"getPossiblePatternsSlow");function Ec(St){let Qt=rn(St),yn=mo[Qt];return yn===void 0?Va:yn}r(Ec,"getPossiblePatternsOptimized");let Ig=r(St=>{if(ho.length===1&&St.tokenType.PUSH_MODE===void 0){let Qt=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(St);Mo.push({offset:St.startOffset,line:St.startLine,column:St.startColumn,length:St.image.length,message:Qt})}else{ho.pop();let Qt=en(ho);Pr=this.patternIdxToConfig[Qt],mo=this.charCodeToPatternIdxToConfig[Qt],wo=Pr.length;let yn=this.canModeBeOptimized[Qt]&&this.config.safeMode===!1;mo&&yn?fr=Ec:fr=Wa}},"pop_mode");function za(St){ho.push(St),mo=this.charCodeToPatternIdxToConfig[St],Pr=this.patternIdxToConfig[St],wo=Pr.length,wo=Pr.length;let Qt=this.canModeBeOptimized[St]&&this.config.safeMode===!1;mo&&Qt?fr=Ec:fr=Wa}r(za,"push_mode"),za.call(this,n);let Jt,Sc=this.config.recoveryEnabled;for(;P<C;){l=null;let St=h.charCodeAt(P),Qt=fr(St),yn=Qt.length;for(o=0;o<yn;o++){Jt=Qt[o];let Gt=Jt.pattern;d=null;let Ur=Jt.short;if(Ur!==!1?St===Ur&&(l=Gt):Jt.isCustom===!0?(S=Gt.exec(h,P,sr,Kt),S!==null?(l=S[0],S.payload!==void 0&&(d=S.payload)):l=null):(this.updateLastIndex(Gt,P),l=this.match(Gt,t,P)),l!==null){if(c=Jt.longerAlt,c!==void 0){let Rt=c.length;for(a=0;a<Rt;a++){let Cr=Pr[c[a]],sn=Cr.pattern;if(f=null,Cr.isCustom===!0?(S=sn.exec(h,P,sr,Kt),S!==null?(s=S[0],S.payload!==void 0&&(f=S.payload)):s=null):(this.updateLastIndex(sn,P),s=this.match(sn,t,P)),s&&s.length>l.length){l=s,d=f,Jt=Cr;break}}}break}}if(l!==null){if(g=l.length,_=Jt.group,_!==void 0&&(y=Jt.tokenTypeIdx,M=this.createTokenInstance(l,P,y,Jt.tokenType,Sn,kr,g),this.handlePayload(M,d),_===!1?le=this.addToken(sr,le,M):Kt[_].push(M)),t=this.chopInput(t,g),P=P+g,kr=this.computeNewColumn(kr,g),Tc===!0&&Jt.canLineTerminator===!0){let Gt=0,Ur,Rt;ja.lastIndex=0;do Ur=ja.test(l),Ur===!0&&(Rt=ja.lastIndex-1,Gt++);while(Ur===!0);Gt!==0&&(Sn=Sn+Gt,kr=g-Rt,this.updateTokenEndLineColumnLocation(M,_,Rt,Gt,Sn,kr,g))}this.handleModes(Jt,Ig,za,M)}else{let Gt=P,Ur=Sn,Rt=kr,Cr=Sc===!1;for(;Cr===!1&&P<C;)for(t=this.chopInput(t,1),P++,i=0;i<wo;i++){let sn=Pr[i],_n=sn.pattern,yc=sn.short;if(yc!==!1?h.charCodeAt(P)===yc&&(Cr=!0):sn.isCustom===!0?Cr=_n.exec(h,P,sr,Kt)!==null:(this.updateLastIndex(_n,P),Cr=_n.exec(t)!==null),Cr===!0)break}if(L=P-Gt,kr=this.computeNewColumn(kr,L),N=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(h,Gt,L,Ur,Rt),Mo.push({offset:Gt,line:Ur,column:Rt,length:L,message:N}),Sc===!1)break}}return this.hasCustom||(sr.length=le),{tokens:sr,groups:Kt,errors:Mo}}handleModes(t,n,o,i){if(t.pop===!0){let a=t.push;n(i),a!==void 0&&o.call(this,a)}else t.push!==void 0&&o.call(this,t.push)}chopInput(t,n){return t.substring(n)}updateLastIndex(t,n){t.lastIndex=n}updateTokenEndLineColumnLocation(t,n,o,i,a,s,c){let l,d;n!==void 0&&(l=o===c-1,d=l?-1:0,i===1&&l===!0||(t.endLine=a+d,t.endColumn=s-1+-d))}computeNewColumn(t,n){return t+n}createOffsetOnlyToken(t,n,o,i){return{image:t,startOffset:n,tokenTypeIdx:o,tokenType:i}}createStartOnlyToken(t,n,o,i,a,s){return{image:t,startOffset:n,startLine:a,startColumn:s,tokenTypeIdx:o,tokenType:i}}createFullToken(t,n,o,i,a,s,c){return{image:t,startOffset:n,endOffset:n+c-1,startLine:a,endLine:a,startColumn:s,endColumn:s+c-1,tokenTypeIdx:o,tokenType:i}}addTokenUsingPush(t,n,o){return t.push(o),n}addTokenUsingMemberAccess(t,n,o){return t[n]=o,n++,n}handlePayloadNoCustom(t,n){}handlePayloadWithCustom(t,n){n!==null&&(t.payload=n)}matchWithTest(t,n,o){return t.test(n)===!0?n.substring(o,t.lastIndex):null}matchWithExec(t,n){let o=t.exec(n);return o!==null?o[0]:null}};Ve.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";Ve.NA=/NOT_APPLICABLE/;function Oo(e){return $S(e)?e.LABEL:e.name}r(Oo,"tokenLabel");function $S(e){return gt(e.LABEL)&&e.LABEL!==""}r($S,"hasTokenLabel");var hW="parent",fC="categories",mC="label",hC="group",gC="push_mode",TC="pop_mode",EC="longer_alt",SC="line_breaks",yC="start_chars_hint";function Tn(e){return gW(e)}r(Tn,"createToken");function gW(e){let t=e.pattern,n={};if(n.name=e.name,Ft(t)||(n.PATTERN=t),W(e,hW))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return W(e,fC)&&(n.CATEGORIES=e[fC]),gn([n]),W(e,mC)&&(n.LABEL=e[mC]),W(e,hC)&&(n.GROUP=e[hC]),W(e,TC)&&(n.POP_MODE=e[TC]),W(e,gC)&&(n.PUSH_MODE=e[gC]),W(e,EC)&&(n.LONGER_ALT=e[EC]),W(e,SC)&&(n.LINE_BREAKS=e[SC]),W(e,yC)&&(n.START_CHARS_HINT=e[yC]),n}r(gW,"createTokenInternal");var Mr=Tn({name:"EOF",pattern:Ve.NA});gn([Mr]);function Lo(e,t,n,o,i,a,s,c){return{image:t,startOffset:n,endOffset:o,startLine:i,endLine:a,startColumn:s,endColumn:c,tokenTypeIdx:e.tokenTypeIdx,tokenType:e}}r(Lo,"createTokenInstance");function ey(e,t){return hn(e,t)}r(ey,"tokenMatcher");var En={buildMismatchTokenMessage({expected:e,actual:t,previous:n,ruleName:o}){return`Expecting ${$S(e)?`--> ${Oo(e)} <--`:`token of type --> ${e.name} <--`} but found --> '${t.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:e,ruleName:t}){return"Redundant input, expecting EOF but found: "+e.image},buildNoViableAltMessage({expectedPathsPerAlt:e,actual:t,previous:n,customUserDescription:o,ruleName:i}){let a="Expecting: ",c=`
but found: '`+dt(t).image+"'";if(o)return a+o+c;{let l=pt(e,(_,y)=>_.concat(y),[]),d=G(l,_=>`[${G(_,y=>Oo(y)).join(", ")}]`),g=`one of these possible Token sequences:
${G(d,(_,y)=>`  ${y+1}. ${_}`).join(`
`)}`;return a+g+c}},buildEarlyExitMessage({expectedIterationPaths:e,actual:t,customUserDescription:n,ruleName:o}){let i="Expecting: ",s=`
but found: '`+dt(t).image+"'";if(n)return i+n+s;{let l=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${G(e,d=>`[${G(d,f=>Oo(f)).join(",")}]`).join(" ,")}>`;return i+l+s}}};Object.freeze(En);var _C={buildRuleNotFoundError(e,t){return"Invalid grammar, reference to a rule which is not defined: ->"+t.nonTerminalName+`<-
inside top level rule: ->`+e.name+"<-"}},wr={buildDuplicateFoundError(e,t){function n(f){return f instanceof se?f.terminalType.name:f instanceof Ae?f.nonTerminalName:""}r(n,"getExtraProductionArgument");let o=e.name,i=dt(t),a=i.idx,s=or(i),c=n(i),l=a>0,d=`->${s}${l?a:""}<- ${c?`with argument: ->${c}<-`:""}
                  appears more than once (${t.length} times) in the top level rule: ->${o}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return d=d.replace(/[ \t]+/g," "),d=d.replace(/\s\s+/g,`
`),d},buildNamespaceConflictError(e){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${e.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(e){let t=G(e.prefixPath,i=>Oo(i)).join(", "),n=e.alternation.idx===0?"":e.alternation.idx;return`Ambiguous alternatives: <${e.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${n}> inside <${e.topLevelRule.name}> Rule,
<${t}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(e){let t=G(e.prefixPath,i=>Oo(i)).join(", "),n=e.alternation.idx===0?"":e.alternation.idx,o=`Ambiguous Alternatives Detected: <${e.ambiguityIndices.join(" ,")}> in <OR${n}> inside <${e.topLevelRule.name}> Rule,
<${t}> may appears as a prefix path in all these alternatives.
`;return o=o+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,o},buildEmptyRepetitionError(e){let t=or(e.repetition);return e.repetition.idx!==0&&(t+=e.repetition.idx),`The repetition <${t}> within Rule <${e.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(e){return"deprecated"},buildEmptyAlternationError(e){return`Ambiguous empty alternative: <${e.emptyChoiceIdx+1}> in <OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(e){return`An Alternation cannot have more than 256 alternatives:
<OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.
 has ${e.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(e){let t=e.topLevelRule.name,n=G(e.leftRecursionPath,a=>a.name),o=`${t} --> ${n.concat([t]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${t}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${o}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(e){return"deprecated"},buildDuplicateRuleNameError(e){let t;return e.topLevelRule instanceof zt?t=e.topLevelRule.name:t=e.topLevelRule,`Duplicate definition, rule: ->${t}<- is already defined in the grammar: ->${e.grammarName}<-`}};function xC(e,t){let n=new ty(e,t);return n.resolveRefs(),n.errors}r(xC,"resolveGrammar");var ty=class extends Ht{static{r(this,"GastRefResolverVisitor")}constructor(t,n){super(),this.nameToTopRule=t,this.errMsgProvider=n,this.errors=[]}resolveRefs(){V(Se(this.nameToTopRule),t=>{this.currTopLevel=t,t.accept(this)})}visitNonTerminal(t){let n=this.nameToTopRule[t.nonTerminalName];if(n)t.referencedRule=n;else{let o=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,t);this.errors.push({message:o,type:Tt.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:t.nonTerminalName})}}};var ry=class extends mn{static{r(this,"AbstractNextPossibleTokensWalker")}constructor(t,n){super(),this.topProd=t,this.path=n,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=Re(this.path.ruleStack).reverse(),this.occurrenceStack=Re(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(t,n=[]){this.found||super.walk(t,n)}walkProdRef(t,n,o){if(t.referencedRule.name===this.nextProductionName&&t.idx===this.nextProductionOccurrence){let i=n.concat(o);this.updateExpectedNext(),this.walk(t.referencedRule,i)}}updateExpectedNext(){re(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}},vu=class extends ry{static{r(this,"NextAfterTokenWalker")}constructor(t,n){super(t,n),this.path=n,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(t,n,o){if(this.isAtEndOfPath&&t.terminalType.name===this.nextTerminalName&&t.idx===this.nextTerminalOccurrence&&!this.found){let i=n.concat(o),a=new ke({definition:i});this.possibleTokTypes=Uo(a),this.found=!0}}},Di=class extends mn{static{r(this,"AbstractNextTerminalAfterProductionWalker")}constructor(t,n){super(),this.topRule=t,this.occurrence=n,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}},Ou=class extends Di{static{r(this,"NextTerminalAfterManyWalker")}walkMany(t,n,o){if(t.idx===this.occurrence){let i=dt(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkMany(t,n,o)}},vs=class extends Di{static{r(this,"NextTerminalAfterManySepWalker")}walkManySep(t,n,o){if(t.idx===this.occurrence){let i=dt(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkManySep(t,n,o)}},Lu=class extends Di{static{r(this,"NextTerminalAfterAtLeastOneWalker")}walkAtLeastOne(t,n,o){if(t.idx===this.occurrence){let i=dt(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOne(t,n,o)}},Os=class extends Di{static{r(this,"NextTerminalAfterAtLeastOneSepWalker")}walkAtLeastOneSep(t,n,o){if(t.idx===this.occurrence){let i=dt(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOneSep(t,n,o)}};function Nu(e,t,n=[]){n=Re(n);let o=[],i=0;function a(c){return c.concat(rt(e,i+1))}r(a,"remainingPathWith");function s(c){let l=Nu(a(c),t,n);return o.concat(l)}for(r(s,"getAlternativesForProd");n.length<t&&i<e.length;){let c=e[i];if(c instanceof ke)return s(c.definition);if(c instanceof Ae)return s(c.definition);if(c instanceof Oe)o=s(c.definition);else if(c instanceof nt){let l=c.definition.concat([new ge({definition:c.definition})]);return s(l)}else if(c instanceof ot){let l=[new ke({definition:c.definition}),new ge({definition:[new se({terminalType:c.separator})].concat(c.definition)})];return s(l)}else if(c instanceof Qe){let l=c.definition.concat([new ge({definition:[new se({terminalType:c.separator})].concat(c.definition)})]);o=s(l)}else if(c instanceof ge){let l=c.definition.concat([new ge({definition:c.definition})]);o=s(l)}else{if(c instanceof Xe)return V(c.definition,l=>{re(l.definition)===!1&&(o=s(l.definition))}),o;if(c instanceof se)n.push(c.terminalType);else throw Error("non exhaustive match")}i++}return o.push({partialPath:n,suffixDef:rt(e,i)}),o}r(Nu,"possiblePathsFrom");function Mu(e,t,n,o){let i="EXIT_NONE_TERMINAL",a=[i],s="EXIT_ALTERNATIVE",c=!1,l=t.length,d=l-o-1,f=[],g=[];for(g.push({idx:-1,def:e,ruleStack:[],occurrenceStack:[]});!re(g);){let _=g.pop();if(_===s){c&&en(g).idx<=d&&g.pop();continue}let y=_.def,M=_.idx,L=_.ruleStack,q=_.occurrenceStack;if(re(y))continue;let N=y[0];if(N===i){let S={idx:M,def:rt(y),ruleStack:fn(L),occurrenceStack:fn(q)};g.push(S)}else if(N instanceof se)if(M<l-1){let S=M+1,h=t[S];if(n(h,N.terminalType)){let C={idx:S,def:rt(y),ruleStack:L,occurrenceStack:q};g.push(C)}}else if(M===l-1)f.push({nextTokenType:N.terminalType,nextTokenOccurrence:N.idx,ruleStack:L,occurrenceStack:q}),c=!0;else throw Error("non exhaustive match");else if(N instanceof Ae){let S=Re(L);S.push(N.nonTerminalName);let h=Re(q);h.push(N.idx);let C={idx:M,def:N.definition.concat(a,rt(y)),ruleStack:S,occurrenceStack:h};g.push(C)}else if(N instanceof Oe){let S={idx:M,def:rt(y),ruleStack:L,occurrenceStack:q};g.push(S),g.push(s);let h={idx:M,def:N.definition.concat(rt(y)),ruleStack:L,occurrenceStack:q};g.push(h)}else if(N instanceof nt){let S=new ge({definition:N.definition,idx:N.idx}),h=N.definition.concat([S],rt(y)),C={idx:M,def:h,ruleStack:L,occurrenceStack:q};g.push(C)}else if(N instanceof ot){let S=new se({terminalType:N.separator}),h=new ge({definition:[S].concat(N.definition),idx:N.idx}),C=N.definition.concat([h],rt(y)),P={idx:M,def:C,ruleStack:L,occurrenceStack:q};g.push(P)}else if(N instanceof Qe){let S={idx:M,def:rt(y),ruleStack:L,occurrenceStack:q};g.push(S),g.push(s);let h=new se({terminalType:N.separator}),C=new ge({definition:[h].concat(N.definition),idx:N.idx}),P=N.definition.concat([C],rt(y)),le={idx:M,def:P,ruleStack:L,occurrenceStack:q};g.push(le)}else if(N instanceof ge){let S={idx:M,def:rt(y),ruleStack:L,occurrenceStack:q};g.push(S),g.push(s);let h=new ge({definition:N.definition,idx:N.idx}),C=N.definition.concat([h],rt(y)),P={idx:M,def:C,ruleStack:L,occurrenceStack:q};g.push(P)}else if(N instanceof Xe)for(let S=N.definition.length-1;S>=0;S--){let h=N.definition[S],C={idx:M,def:h.definition.concat(rt(y)),ruleStack:L,occurrenceStack:q};g.push(C),g.push(s)}else if(N instanceof ke)g.push({idx:M,def:N.definition.concat(rt(y)),ruleStack:L,occurrenceStack:q});else if(N instanceof zt)g.push(TW(N,M,L,q));else throw Error("non exhaustive match")}return f}r(Mu,"nextPossibleTokensAfter");function TW(e,t,n,o){let i=Re(n);i.push(e.name);let a=Re(o);return a.push(1),{idx:t,def:e.definition,ruleStack:i,occurrenceStack:a}}r(TW,"expandTopLevelRule");var We;(function(e){e[e.OPTION=0]="OPTION",e[e.REPETITION=1]="REPETITION",e[e.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",e[e.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",e[e.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",e[e.ALTERNATION=5]="ALTERNATION"})(We||(We={}));function Fu(e){if(e instanceof Oe||e==="Option")return We.OPTION;if(e instanceof ge||e==="Repetition")return We.REPETITION;if(e instanceof nt||e==="RepetitionMandatory")return We.REPETITION_MANDATORY;if(e instanceof ot||e==="RepetitionMandatoryWithSeparator")return We.REPETITION_MANDATORY_WITH_SEPARATOR;if(e instanceof Qe||e==="RepetitionWithSeparator")return We.REPETITION_WITH_SEPARATOR;if(e instanceof Xe||e==="Alternation")return We.ALTERNATION;throw Error("non exhaustive match")}r(Fu,"getProdType");function RC(e,t,n,o,i,a){let s=Ls(e,t,n),c=OC(s)?Pi:hn;return a(s,o,c,i)}r(RC,"buildLookaheadFuncForOr");function AC(e,t,n,o,i,a){let s=Ns(e,t,i,n),c=OC(s)?Pi:hn;return a(s[0],c,o)}r(AC,"buildLookaheadFuncForOptionalProd");function kC(e,t,n,o){let i=e.length,a=xt(e,s=>xt(s,c=>c.length===1));if(t)return function(s){let c=G(s,l=>l.GATE);for(let l=0;l<i;l++){let d=e[l],f=d.length,g=c[l];if(!(g!==void 0&&g.call(this)===!1))e:for(let _=0;_<f;_++){let y=d[_],M=y.length;for(let L=0;L<M;L++){let q=this.LA(L+1);if(n(q,y[L])===!1)continue e}return l}}};if(a&&!o){let s=G(e,l=>ht(l)),c=pt(s,(l,d,f)=>(V(d,g=>{W(l,g.tokenTypeIdx)||(l[g.tokenTypeIdx]=f),V(g.categoryMatches,_=>{W(l,_)||(l[_]=f)})}),l),{});return function(){let l=this.LA(1);return c[l.tokenTypeIdx]}}else return function(){for(let s=0;s<i;s++){let c=e[s],l=c.length;e:for(let d=0;d<l;d++){let f=c[d],g=f.length;for(let _=0;_<g;_++){let y=this.LA(_+1);if(n(y,f[_])===!1)continue e}return s}}}}r(kC,"buildAlternativesLookAheadFunc");function UC(e,t,n){let o=xt(e,a=>a.length===1),i=e.length;if(o&&!n){let a=ht(e);if(a.length===1&&re(a[0].categoryMatches)){let c=a[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===c}}else{let s=pt(a,(c,l,d)=>(c[l.tokenTypeIdx]=!0,V(l.categoryMatches,f=>{c[f]=!0}),c),[]);return function(){let c=this.LA(1);return s[c.tokenTypeIdx]===!0}}}else return function(){e:for(let a=0;a<i;a++){let s=e[a],c=s.length;for(let l=0;l<c;l++){let d=this.LA(l+1);if(t(d,s[l])===!1)continue e}return!0}return!1}}r(UC,"buildSingleAlternativeLookaheadFunction");var oy=class extends mn{static{r(this,"RestDefinitionFinderWalker")}constructor(t,n,o){super(),this.topProd=t,this.targetOccurrence=n,this.targetProdType=o}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(t,n,o,i){return t.idx===this.targetOccurrence&&this.targetProdType===n?(this.restDef=o.concat(i),!0):!1}walkOption(t,n,o){this.checkIsTarget(t,We.OPTION,n,o)||super.walkOption(t,n,o)}walkAtLeastOne(t,n,o){this.checkIsTarget(t,We.REPETITION_MANDATORY,n,o)||super.walkOption(t,n,o)}walkAtLeastOneSep(t,n,o){this.checkIsTarget(t,We.REPETITION_MANDATORY_WITH_SEPARATOR,n,o)||super.walkOption(t,n,o)}walkMany(t,n,o){this.checkIsTarget(t,We.REPETITION,n,o)||super.walkOption(t,n,o)}walkManySep(t,n,o){this.checkIsTarget(t,We.REPETITION_WITH_SEPARATOR,n,o)||super.walkOption(t,n,o)}},wu=class extends Ht{static{r(this,"InsideDefinitionFinderVisitor")}constructor(t,n,o){super(),this.targetOccurrence=t,this.targetProdType=n,this.targetRef=o,this.result=[]}checkIsTarget(t,n){t.idx===this.targetOccurrence&&this.targetProdType===n&&(this.targetRef===void 0||t===this.targetRef)&&(this.result=t.definition)}visitOption(t){this.checkIsTarget(t,We.OPTION)}visitRepetition(t){this.checkIsTarget(t,We.REPETITION)}visitRepetitionMandatory(t){this.checkIsTarget(t,We.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(t){this.checkIsTarget(t,We.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(t){this.checkIsTarget(t,We.REPETITION_WITH_SEPARATOR)}visitAlternation(t){this.checkIsTarget(t,We.ALTERNATION)}};function bC(e){let t=new Array(e);for(let n=0;n<e;n++)t[n]=[];return t}r(bC,"initializeArrayOfArrays");function ny(e){let t=[""];for(let n=0;n<e.length;n++){let o=e[n],i=[];for(let a=0;a<t.length;a++){let s=t[a];i.push(s+"_"+o.tokenTypeIdx);for(let c=0;c<o.categoryMatches.length;c++){let l="_"+o.categoryMatches[c];i.push(s+l)}}t=i}return t}r(ny,"pathToHashKeys");function EW(e,t,n){for(let o=0;o<e.length;o++){if(o===n)continue;let i=e[o];for(let a=0;a<t.length;a++){let s=t[a];if(i[s]===!0)return!1}}return!0}r(EW,"isUniquePrefixHash");function CC(e,t){let n=G(e,s=>Nu([s],1)),o=bC(n.length),i=G(n,s=>{let c={};return V(s,l=>{let d=ny(l.partialPath);V(d,f=>{c[f]=!0})}),c}),a=n;for(let s=1;s<=t;s++){let c=a;a=bC(c.length);for(let l=0;l<c.length;l++){let d=c[l];for(let f=0;f<d.length;f++){let g=d[f].partialPath,_=d[f].suffixDef,y=ny(g);if(EW(i,y,l)||re(_)||g.length===t){let L=o[l];if(Iu(L,g)===!1){L.push(g);for(let q=0;q<y.length;q++){let N=y[q];i[l][N]=!0}}}else{let L=Nu(_,s+1,g);a[l]=a[l].concat(L),V(L,q=>{let N=ny(q.partialPath);V(N,S=>{i[l][S]=!0})})}}}}return o}r(CC,"lookAheadSequenceFromAlternatives");function Ls(e,t,n,o){let i=new wu(e,We.ALTERNATION,o);return t.accept(i),CC(i.result,n)}r(Ls,"getLookaheadPathsForOr");function Ns(e,t,n,o){let i=new wu(e,n);t.accept(i);let a=i.result,c=new oy(t,e,n).startWalking(),l=new ke({definition:a}),d=new ke({definition:c});return CC([l,d],o)}r(Ns,"getLookaheadPathsForOptionalProd");function Iu(e,t){e:for(let n=0;n<e.length;n++){let o=e[n];if(o.length===t.length){for(let i=0;i<o.length;i++){let a=t[i],s=o[i];if((a===s||s.categoryMatchesMap[a.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}r(Iu,"containsPath");function vC(e,t){return e.length<t.length&&xt(e,(n,o)=>{let i=t[o];return n===i||i.categoryMatchesMap[n.tokenTypeIdx]})}r(vC,"isStrictPrefixOfPath");function OC(e){return xt(e,t=>xt(t,n=>xt(n,o=>re(o.categoryMatches))))}r(OC,"areTokenCategoriesNotUsed");function LC(e){let t=e.lookaheadStrategy.validate({rules:e.rules,tokenTypes:e.tokenTypes,grammarName:e.grammarName});return G(t,n=>Object.assign({type:Tt.CUSTOM_LOOKAHEAD_VALIDATION},n))}r(LC,"validateLookahead");function NC(e,t,n,o){let i=Wt(e,l=>SW(l,n)),a=AW(e,t,n),s=Wt(e,l=>xW(l,n)),c=Wt(e,l=>_W(l,e,o,n));return i.concat(a,s,c)}r(NC,"validateGrammar");function SW(e,t){let n=new iy;e.accept(n);let o=n.allProductions,i=DS(o,yW),a=nr(i,c=>c.length>1);return G(Se(a),c=>{let l=dt(c),d=t.buildDuplicateFoundError(e,c),f=or(l),g={message:d,type:Tt.DUPLICATE_PRODUCTIONS,ruleName:e.name,dslName:f,occurrence:l.idx},_=MC(l);return _&&(g.parameter=_),g})}r(SW,"validateDuplicateProductions");function yW(e){return`${or(e)}_#_${e.idx}_#_${MC(e)}`}r(yW,"identifyProductionForDuplicates");function MC(e){return e instanceof se?e.terminalType.name:e instanceof Ae?e.nonTerminalName:""}r(MC,"getExtraProductionArgument");var iy=class extends Ht{static{r(this,"OccurrenceValidationCollector")}constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(t){this.allProductions.push(t)}visitOption(t){this.allProductions.push(t)}visitRepetitionWithSeparator(t){this.allProductions.push(t)}visitRepetitionMandatory(t){this.allProductions.push(t)}visitRepetitionMandatoryWithSeparator(t){this.allProductions.push(t)}visitRepetition(t){this.allProductions.push(t)}visitAlternation(t){this.allProductions.push(t)}visitTerminal(t){this.allProductions.push(t)}};function _W(e,t,n,o){let i=[];if(pt(t,(s,c)=>c.name===e.name?s+1:s,0)>1){let s=o.buildDuplicateRuleNameError({topLevelRule:e,grammarName:n});i.push({message:s,type:Tt.DUPLICATE_RULE_NAME,ruleName:e.name})}return i}r(_W,"validateRuleDoesNotAlreadyExist");function wC(e,t,n){let o=[],i;return Me(t,e)||(i=`Invalid rule override, rule: ->${e}<- cannot be overridden in the grammar: ->${n}<-as it is not defined in any of the super grammars `,o.push({message:i,type:Tt.INVALID_RULE_OVERRIDE,ruleName:e})),o}r(wC,"validateRuleIsOverridden");function sy(e,t,n,o=[]){let i=[],a=Pu(t.definition);if(re(a))return[];{let s=e.name;Me(a,e)&&i.push({message:n.buildLeftRecursionError({topLevelRule:e,leftRecursionPath:o}),type:Tt.LEFT_RECURSION,ruleName:s});let l=Kn(a,o.concat([e])),d=Wt(l,f=>{let g=Re(o);return g.push(f),sy(e,f,n,g)});return i.concat(d)}}r(sy,"validateNoLeftRecursion");function Pu(e){let t=[];if(re(e))return t;let n=dt(e);if(n instanceof Ae)t.push(n.referencedRule);else if(n instanceof ke||n instanceof Oe||n instanceof nt||n instanceof ot||n instanceof Qe||n instanceof ge)t=t.concat(Pu(n.definition));else if(n instanceof Xe)t=ht(G(n.definition,a=>Pu(a.definition)));else if(!(n instanceof se))throw Error("non exhaustive match");let o=ko(n),i=e.length>1;if(o&&i){let a=rt(e);return t.concat(Pu(a))}else return t}r(Pu,"getFirstNoneTerminal");var Ms=class extends Ht{static{r(this,"OrCollector")}constructor(){super(...arguments),this.alternations=[]}visitAlternation(t){this.alternations.push(t)}};function FC(e,t){let n=new Ms;e.accept(n);let o=n.alternations;return Wt(o,a=>{let s=fn(a.definition);return Wt(s,(c,l)=>{let d=Mu([c],[],hn,1);return re(d)?[{message:t.buildEmptyAlternationError({topLevelRule:e,alternation:a,emptyChoiceIdx:l}),type:Tt.NONE_LAST_EMPTY_ALT,ruleName:e.name,occurrence:a.idx,alternative:l+1}]:[]})})}r(FC,"validateEmptyOrAlternative");function IC(e,t,n){let o=new Ms;e.accept(o);let i=o.alternations;return i=Jn(i,s=>s.ignoreAmbiguities===!0),Wt(i,s=>{let c=s.idx,l=s.maxLookahead||t,d=Ls(c,e,l,s),f=bW(d,s,e,n),g=RW(d,s,e,n);return f.concat(g)})}r(IC,"validateAmbiguousAlternationAlternatives");var ay=class extends Ht{static{r(this,"RepetitionCollector")}constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(t){this.allProductions.push(t)}visitRepetitionMandatory(t){this.allProductions.push(t)}visitRepetitionMandatoryWithSeparator(t){this.allProductions.push(t)}visitRepetition(t){this.allProductions.push(t)}};function xW(e,t){let n=new Ms;e.accept(n);let o=n.alternations;return Wt(o,a=>a.definition.length>255?[{message:t.buildTooManyAlternativesError({topLevelRule:e,alternation:a}),type:Tt.TOO_MANY_ALTS,ruleName:e.name,occurrence:a.idx}]:[])}r(xW,"validateTooManyAlts");function PC(e,t,n){let o=[];return V(e,i=>{let a=new ay;i.accept(a);let s=a.allProductions;V(s,c=>{let l=Fu(c),d=c.maxLookahead||t,f=c.idx,_=Ns(f,i,l,d)[0];if(re(ht(_))){let y=n.buildEmptyRepetitionError({topLevelRule:i,repetition:c});o.push({message:y,type:Tt.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),o}r(PC,"validateSomeNonEmptyLookaheadPath");function bW(e,t,n,o){let i=[],a=pt(e,(c,l,d)=>(t.definition[d].ignoreAmbiguities===!0||V(l,f=>{let g=[d];V(e,(_,y)=>{d!==y&&Iu(_,f)&&t.definition[y].ignoreAmbiguities!==!0&&g.push(y)}),g.length>1&&!Iu(i,f)&&(i.push(f),c.push({alts:g,path:f}))}),c),[]);return G(a,c=>{let l=G(c.alts,f=>f+1);return{message:o.buildAlternationAmbiguityError({topLevelRule:n,alternation:t,ambiguityIndices:l,prefixPath:c.path}),type:Tt.AMBIGUOUS_ALTS,ruleName:n.name,occurrence:t.idx,alternatives:c.alts}})}r(bW,"checkAlternativesAmbiguities");function RW(e,t,n,o){let i=pt(e,(s,c,l)=>{let d=G(c,f=>({idx:l,path:f}));return s.concat(d)},[]);return $r(Wt(i,s=>{if(t.definition[s.idx].ignoreAmbiguities===!0)return[];let l=s.idx,d=s.path,f=wt(i,_=>t.definition[_.idx].ignoreAmbiguities!==!0&&_.idx<l&&vC(_.path,d));return G(f,_=>{let y=[_.idx+1,l+1],M=t.idx===0?"":t.idx;return{message:o.buildAlternationPrefixAmbiguityError({topLevelRule:n,alternation:t,ambiguityIndices:y,prefixPath:_.path}),type:Tt.AMBIGUOUS_PREFIX_ALTS,ruleName:n.name,occurrence:M,alternatives:y}})}))}r(RW,"checkPrefixAlternativesAmbiguities");function AW(e,t,n){let o=[],i=G(t,a=>a.name);return V(e,a=>{let s=a.name;if(Me(i,s)){let c=n.buildNamespaceConflictError(a);o.push({message:c,type:Tt.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:s})}}),o}r(AW,"checkTerminalAndNoneTerminalsNameSpace");function DC(e){let t=Oi(e,{errMsgProvider:_C}),n={};return V(e.rules,o=>{n[o.name]=o}),xC(n,t.errMsgProvider)}r(DC,"resolveGrammar");function qC(e){return e=Oi(e,{errMsgProvider:wr}),NC(e.rules,e.tokenTypes,e.errMsgProvider,e.grammarName)}r(qC,"validateGrammar");var BC="MismatchedTokenException",GC="NoViableAltException",jC="EarlyExitException",VC="NotAllInputParsedException",WC=[BC,GC,jC,VC];Object.freeze(WC);function Zn(e){return Me(WC,e.name)}r(Zn,"isRecognitionException");var qi=class extends Error{static{r(this,"RecognitionException")}constructor(t,n){super(t),this.token=n,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},it=class extends qi{static{r(this,"MismatchedTokenException")}constructor(t,n,o){super(t,n),this.previousToken=o,this.name=BC}},ws=class extends qi{static{r(this,"NoViableAltException")}constructor(t,n,o){super(t,n),this.previousToken=o,this.name=GC}},Fs=class extends qi{static{r(this,"NotAllInputParsedException")}constructor(t,n){super(t,n),this.name=VC}},Is=class extends qi{static{r(this,"EarlyExitException")}constructor(t,n,o){super(t,n),this.previousToken=o,this.name=jC}};var cy={},uy="InRuleRecoveryException",ly=class extends Error{static{r(this,"InRuleRecoveryException")}constructor(t){super(t),this.name=uy}},Du=class{static{r(this,"Recoverable")}initRecoverable(t){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=W(t,"recoveryEnabled")?t.recoveryEnabled:Yt.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=kW)}getTokenToInsert(t){let n=Lo(t,"",NaN,NaN,NaN,NaN,NaN,NaN);return n.isInsertedInRecovery=!0,n}canTokenTypeBeInsertedInRecovery(t){return!0}canTokenTypeBeDeletedInRecovery(t){return!0}tryInRepetitionRecovery(t,n,o,i){let a=this.findReSyncTokenType(),s=this.exportLexerState(),c=[],l=!1,d=this.LA(1),f=this.LA(1),g=r(()=>{let _=this.LA(0),y=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:d,previous:_,ruleName:this.getCurrRuleFullName()}),M=new it(y,d,this.LA(0));M.resyncedTokens=fn(c),this.SAVE_ERROR(M)},"generateErrorMessage");for(;!l;)if(this.tokenMatcher(f,i)){g();return}else if(o.call(this)){g(),t.apply(this,n);return}else this.tokenMatcher(f,a)?l=!0:(f=this.SKIP_TOKEN(),this.addToResyncTokens(f,c));this.importLexerState(s)}shouldInRepetitionRecoveryBeTried(t,n,o){return!(o===!1||this.tokenMatcher(this.LA(1),t)||this.isBackTracking()||this.canPerformInRuleRecovery(t,this.getFollowsForInRuleRecovery(t,n)))}getFollowsForInRuleRecovery(t,n){let o=this.getCurrentGrammarPath(t,n);return this.getNextPossibleTokenTypes(o)}tryInRuleRecovery(t,n){if(this.canRecoverWithSingleTokenInsertion(t,n))return this.getTokenToInsert(t);if(this.canRecoverWithSingleTokenDeletion(t)){let o=this.SKIP_TOKEN();return this.consumeToken(),o}throw new ly("sad sad panda")}canPerformInRuleRecovery(t,n){return this.canRecoverWithSingleTokenInsertion(t,n)||this.canRecoverWithSingleTokenDeletion(t)}canRecoverWithSingleTokenInsertion(t,n){if(!this.canTokenTypeBeInsertedInRecovery(t)||re(n))return!1;let o=this.LA(1);return tn(n,a=>this.tokenMatcher(o,a))!==void 0}canRecoverWithSingleTokenDeletion(t){return this.canTokenTypeBeDeletedInRecovery(t)?this.tokenMatcher(this.LA(2),t):!1}isInCurrentRuleReSyncSet(t){let n=this.getCurrFollowKey(),o=this.getFollowSetFromFollowKey(n);return Me(o,t)}findReSyncTokenType(){let t=this.flattenFollowSet(),n=this.LA(1),o=2;for(;;){let i=tn(t,a=>ey(n,a));if(i!==void 0)return i;n=this.LA(o),o++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return cy;let t=this.getLastExplicitRuleShortName(),n=this.getLastExplicitRuleOccurrenceIndex(),o=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(t),idxInCallingRule:n,inRule:this.shortRuleNameToFullName(o)}}buildFullFollowKeyStack(){let t=this.RULE_STACK,n=this.RULE_OCCURRENCE_STACK;return G(t,(o,i)=>i===0?cy:{ruleName:this.shortRuleNameToFullName(o),idxInCallingRule:n[i],inRule:this.shortRuleNameToFullName(t[i-1])})}flattenFollowSet(){let t=G(this.buildFullFollowKeyStack(),n=>this.getFollowSetFromFollowKey(n));return ht(t)}getFollowSetFromFollowKey(t){if(t===cy)return[Mr];let n=t.ruleName+t.idxInCallingRule+_u+t.inRule;return this.resyncFollows[n]}addToResyncTokens(t,n){return this.tokenMatcher(t,Mr)||n.push(t),n}reSyncTo(t){let n=[],o=this.LA(1);for(;this.tokenMatcher(o,t)===!1;)o=this.SKIP_TOKEN(),this.addToResyncTokens(o,n);return fn(n)}attemptInRepetitionRecovery(t,n,o,i,a,s,c){}getCurrentGrammarPath(t,n){let o=this.getHumanReadableRuleStack(),i=Re(this.RULE_OCCURRENCE_STACK);return{ruleStack:o,occurrenceStack:i,lastTok:t,lastTokOccurrence:n}}getHumanReadableRuleStack(){return G(this.RULE_STACK,t=>this.shortRuleNameToFullName(t))}};function kW(e,t,n,o,i,a,s){let c=this.getKeyForAutomaticLookahead(o,i),l=this.firstAfterRepMap[c];if(l===void 0){let _=this.getCurrRuleFullName(),y=this.getGAstProductions()[_];l=new a(y,i).startWalking(),this.firstAfterRepMap[c]=l}let d=l.token,f=l.occurrence,g=l.isEndOfRule;this.RULE_STACK.length===1&&g&&d===void 0&&(d=Mr,f=1),!(d===void 0||f===void 0)&&this.shouldInRepetitionRecoveryBeTried(d,f,s)&&this.tryInRepetitionRecovery(e,t,n,d)}r(kW,"attemptInRepetitionRecovery");function qu(e,t,n){return n|t|e}r(qu,"getKeyForAutomaticLookahead");var Ps=class{static{r(this,"LLkLookaheadStrategy")}constructor(t){var n;this.maxLookahead=(n=t?.maxLookahead)!==null&&n!==void 0?n:Yt.maxLookahead}validate(t){let n=this.validateNoLeftRecursion(t.rules);if(re(n)){let o=this.validateEmptyOrAlternatives(t.rules),i=this.validateAmbiguousAlternationAlternatives(t.rules,this.maxLookahead),a=this.validateSomeNonEmptyLookaheadPath(t.rules,this.maxLookahead);return[...n,...o,...i,...a]}return n}validateNoLeftRecursion(t){return Wt(t,n=>sy(n,n,wr))}validateEmptyOrAlternatives(t){return Wt(t,n=>FC(n,wr))}validateAmbiguousAlternationAlternatives(t,n){return Wt(t,o=>IC(o,n,wr))}validateSomeNonEmptyLookaheadPath(t,n){return PC(t,n,wr)}buildLookaheadForAlternation(t){return RC(t.prodOccurrence,t.rule,t.maxLookahead,t.hasPredicates,t.dynamicTokensEnabled,kC)}buildLookaheadForOptional(t){return AC(t.prodOccurrence,t.rule,t.maxLookahead,t.dynamicTokensEnabled,Fu(t.prodType),UC)}};var Gu=class{static{r(this,"LooksAhead")}initLooksAhead(t){this.dynamicTokensEnabled=W(t,"dynamicTokensEnabled")?t.dynamicTokensEnabled:Yt.dynamicTokensEnabled,this.maxLookahead=W(t,"maxLookahead")?t.maxLookahead:Yt.maxLookahead,this.lookaheadStrategy=W(t,"lookaheadStrategy")?t.lookaheadStrategy:new Ps({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(t){V(t,n=>{this.TRACE_INIT(`${n.name} Rule Lookahead`,()=>{let{alternation:o,repetition:i,option:a,repetitionMandatory:s,repetitionMandatoryWithSeparator:c,repetitionWithSeparator:l}=UW(n);V(o,d=>{let f=d.idx===0?"":d.idx;this.TRACE_INIT(`${or(d)}${f}`,()=>{let g=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:d.idx,rule:n,maxLookahead:d.maxLookahead||this.maxLookahead,hasPredicates:d.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),_=qu(this.fullRuleNameToShort[n.name],256,d.idx);this.setLaFuncCache(_,g)})}),V(i,d=>{this.computeLookaheadFunc(n,d.idx,768,"Repetition",d.maxLookahead,or(d))}),V(a,d=>{this.computeLookaheadFunc(n,d.idx,512,"Option",d.maxLookahead,or(d))}),V(s,d=>{this.computeLookaheadFunc(n,d.idx,1024,"RepetitionMandatory",d.maxLookahead,or(d))}),V(c,d=>{this.computeLookaheadFunc(n,d.idx,1536,"RepetitionMandatoryWithSeparator",d.maxLookahead,or(d))}),V(l,d=>{this.computeLookaheadFunc(n,d.idx,1280,"RepetitionWithSeparator",d.maxLookahead,or(d))})})})}computeLookaheadFunc(t,n,o,i,a,s){this.TRACE_INIT(`${s}${n===0?"":n}`,()=>{let c=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:n,rule:t,maxLookahead:a||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i}),l=qu(this.fullRuleNameToShort[t.name],o,n);this.setLaFuncCache(l,c)})}getKeyForAutomaticLookahead(t,n){let o=this.getLastExplicitRuleShortName();return qu(o,t,n)}getLaFuncFromCache(t){return this.lookAheadFuncsCache.get(t)}setLaFuncCache(t,n){this.lookAheadFuncsCache.set(t,n)}},dy=class extends Ht{static{r(this,"DslMethodsCollectorVisitor")}constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(t){this.dslMethods.option.push(t)}visitRepetitionWithSeparator(t){this.dslMethods.repetitionWithSeparator.push(t)}visitRepetitionMandatory(t){this.dslMethods.repetitionMandatory.push(t)}visitRepetitionMandatoryWithSeparator(t){this.dslMethods.repetitionMandatoryWithSeparator.push(t)}visitRepetition(t){this.dslMethods.repetition.push(t)}visitAlternation(t){this.dslMethods.alternation.push(t)}},Bu=new dy;function UW(e){Bu.reset(),e.accept(Bu);let t=Bu.dslMethods;return Bu.reset(),t}r(UW,"collectMethods");function my(e,t){isNaN(e.startOffset)===!0?(e.startOffset=t.startOffset,e.endOffset=t.endOffset):e.endOffset<t.endOffset&&(e.endOffset=t.endOffset)}r(my,"setNodeLocationOnlyOffset");function hy(e,t){isNaN(e.startOffset)===!0?(e.startOffset=t.startOffset,e.startColumn=t.startColumn,e.startLine=t.startLine,e.endOffset=t.endOffset,e.endColumn=t.endColumn,e.endLine=t.endLine):e.endOffset<t.endOffset&&(e.endOffset=t.endOffset,e.endColumn=t.endColumn,e.endLine=t.endLine)}r(hy,"setNodeLocationFull");function zC(e,t,n){e.children[n]===void 0?e.children[n]=[t]:e.children[n].push(t)}r(zC,"addTerminalToCst");function HC(e,t,n){e.children[t]===void 0?e.children[t]=[n]:e.children[t].push(n)}r(HC,"addNoneTerminalToCst");var CW="name";function gy(e,t){Object.defineProperty(e,CW,{enumerable:!1,configurable:!0,writable:!1,value:t})}r(gy,"defineNameProp");function vW(e,t){let n=he(e),o=n.length;for(let i=0;i<o;i++){let a=n[i],s=e[a],c=s.length;for(let l=0;l<c;l++){let d=s[l];d.tokenTypeIdx===void 0&&this[d.name](d.children,t)}}}r(vW,"defaultVisit");function YC(e,t){let n=r(function(){},"derivedConstructor");gy(n,e+"BaseSemantics");let o={visit:r(function(i,a){if(B(i)&&(i=i[0]),!Ft(i))return this[i.name](i.children,a)},"visit"),validateVisitor:r(function(){let i=OW(this,t);if(!re(i)){let a=G(i,s=>s.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${a.join(`

`).replace(/\n/g,`
	`)}`)}},"validateVisitor")};return n.prototype=o,n.prototype.constructor=n,n._RULE_NAMES=t,n}r(YC,"createBaseSemanticVisitorConstructor");function KC(e,t,n){let o=r(function(){},"derivedConstructor");gy(o,e+"BaseSemanticsWithDefaults");let i=Object.create(n.prototype);return V(t,a=>{i[a]=vW}),o.prototype=i,o.prototype.constructor=o,o}r(KC,"createBaseVisitorConstructorWithDefaults");var Ty;(function(e){e[e.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",e[e.MISSING_METHOD=1]="MISSING_METHOD"})(Ty||(Ty={}));function OW(e,t){return LW(e,t)}r(OW,"validateVisitor");function LW(e,t){let n=wt(t,i=>Vt(e[i])===!1),o=G(n,i=>({msg:`Missing visitor method: <${i}> on ${e.constructor.name} CST Visitor.`,type:Ty.MISSING_METHOD,methodName:i}));return $r(o)}r(LW,"validateMissingCstMethods");var zu=class{static{r(this,"TreeBuilder")}initTreeBuilder(t){if(this.CST_STACK=[],this.outputCst=t.outputCst,this.nodeLocationTracking=W(t,"nodeLocationTracking")?t.nodeLocationTracking:Yt.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=je,this.cstFinallyStateUpdate=je,this.cstPostTerminal=je,this.cstPostNonTerminal=je,this.cstPostRule=je;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=hy,this.setNodeLocationFromNode=hy,this.cstPostRule=je,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=je,this.setNodeLocationFromNode=je,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=my,this.setNodeLocationFromNode=my,this.cstPostRule=je,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=je,this.setNodeLocationFromNode=je,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=je,this.setNodeLocationFromNode=je,this.cstPostRule=je,this.setInitialNodeLocation=je;else throw Error(`Invalid <nodeLocationTracking> config option: "${t.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(t){t.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(t){t.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(t){t.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(t){let n=this.LA(1);t.location={startOffset:n.startOffset,startLine:n.startLine,startColumn:n.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(t){let n={name:t,children:Object.create(null)};this.setInitialNodeLocation(n),this.CST_STACK.push(n)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(t){let n=this.LA(0),o=t.location;o.startOffset<=n.startOffset?(o.endOffset=n.endOffset,o.endLine=n.endLine,o.endColumn=n.endColumn):(o.startOffset=NaN,o.startLine=NaN,o.startColumn=NaN)}cstPostRuleOnlyOffset(t){let n=this.LA(0),o=t.location;o.startOffset<=n.startOffset?o.endOffset=n.endOffset:o.startOffset=NaN}cstPostTerminal(t,n){let o=this.CST_STACK[this.CST_STACK.length-1];zC(o,n,t),this.setNodeLocationFromToken(o.location,n)}cstPostNonTerminal(t,n){let o=this.CST_STACK[this.CST_STACK.length-1];HC(o,n,t),this.setNodeLocationFromNode(o.location,t.location)}getBaseCstVisitorConstructor(){if(Ft(this.baseCstVisitorConstructor)){let t=YC(this.className,he(this.gastProductionsCache));return this.baseCstVisitorConstructor=t,t}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(Ft(this.baseCstVisitorWithDefaultsConstructor)){let t=KC(this.className,he(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=t,t}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){let t=this.RULE_STACK;return t[t.length-1]}getPreviousExplicitRuleShortName(){let t=this.RULE_STACK;return t[t.length-2]}getLastExplicitRuleOccurrenceIndex(){let t=this.RULE_OCCURRENCE_STACK;return t[t.length-1]}};var Hu=class{static{r(this,"LexerAdapter")}initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(t){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=t,this.tokVectorLength=t.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):Bi}LA(t){let n=this.currIdx+t;return n<0||this.tokVectorLength<=n?Bi:this.tokVector[n]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(t){this.currIdx=t}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}};var Yu=class{static{r(this,"RecognizerApi")}ACTION(t){return t.call(this)}consume(t,n,o){return this.consumeInternal(n,t,o)}subrule(t,n,o){return this.subruleInternal(n,t,o)}option(t,n){return this.optionInternal(n,t)}or(t,n){return this.orInternal(n,t)}many(t,n){return this.manyInternal(t,n)}atLeastOne(t,n){return this.atLeastOneInternal(t,n)}CONSUME(t,n){return this.consumeInternal(t,0,n)}CONSUME1(t,n){return this.consumeInternal(t,1,n)}CONSUME2(t,n){return this.consumeInternal(t,2,n)}CONSUME3(t,n){return this.consumeInternal(t,3,n)}CONSUME4(t,n){return this.consumeInternal(t,4,n)}CONSUME5(t,n){return this.consumeInternal(t,5,n)}CONSUME6(t,n){return this.consumeInternal(t,6,n)}CONSUME7(t,n){return this.consumeInternal(t,7,n)}CONSUME8(t,n){return this.consumeInternal(t,8,n)}CONSUME9(t,n){return this.consumeInternal(t,9,n)}SUBRULE(t,n){return this.subruleInternal(t,0,n)}SUBRULE1(t,n){return this.subruleInternal(t,1,n)}SUBRULE2(t,n){return this.subruleInternal(t,2,n)}SUBRULE3(t,n){return this.subruleInternal(t,3,n)}SUBRULE4(t,n){return this.subruleInternal(t,4,n)}SUBRULE5(t,n){return this.subruleInternal(t,5,n)}SUBRULE6(t,n){return this.subruleInternal(t,6,n)}SUBRULE7(t,n){return this.subruleInternal(t,7,n)}SUBRULE8(t,n){return this.subruleInternal(t,8,n)}SUBRULE9(t,n){return this.subruleInternal(t,9,n)}OPTION(t){return this.optionInternal(t,0)}OPTION1(t){return this.optionInternal(t,1)}OPTION2(t){return this.optionInternal(t,2)}OPTION3(t){return this.optionInternal(t,3)}OPTION4(t){return this.optionInternal(t,4)}OPTION5(t){return this.optionInternal(t,5)}OPTION6(t){return this.optionInternal(t,6)}OPTION7(t){return this.optionInternal(t,7)}OPTION8(t){return this.optionInternal(t,8)}OPTION9(t){return this.optionInternal(t,9)}OR(t){return this.orInternal(t,0)}OR1(t){return this.orInternal(t,1)}OR2(t){return this.orInternal(t,2)}OR3(t){return this.orInternal(t,3)}OR4(t){return this.orInternal(t,4)}OR5(t){return this.orInternal(t,5)}OR6(t){return this.orInternal(t,6)}OR7(t){return this.orInternal(t,7)}OR8(t){return this.orInternal(t,8)}OR9(t){return this.orInternal(t,9)}MANY(t){this.manyInternal(0,t)}MANY1(t){this.manyInternal(1,t)}MANY2(t){this.manyInternal(2,t)}MANY3(t){this.manyInternal(3,t)}MANY4(t){this.manyInternal(4,t)}MANY5(t){this.manyInternal(5,t)}MANY6(t){this.manyInternal(6,t)}MANY7(t){this.manyInternal(7,t)}MANY8(t){this.manyInternal(8,t)}MANY9(t){this.manyInternal(9,t)}MANY_SEP(t){this.manySepFirstInternal(0,t)}MANY_SEP1(t){this.manySepFirstInternal(1,t)}MANY_SEP2(t){this.manySepFirstInternal(2,t)}MANY_SEP3(t){this.manySepFirstInternal(3,t)}MANY_SEP4(t){this.manySepFirstInternal(4,t)}MANY_SEP5(t){this.manySepFirstInternal(5,t)}MANY_SEP6(t){this.manySepFirstInternal(6,t)}MANY_SEP7(t){this.manySepFirstInternal(7,t)}MANY_SEP8(t){this.manySepFirstInternal(8,t)}MANY_SEP9(t){this.manySepFirstInternal(9,t)}AT_LEAST_ONE(t){this.atLeastOneInternal(0,t)}AT_LEAST_ONE1(t){return this.atLeastOneInternal(1,t)}AT_LEAST_ONE2(t){this.atLeastOneInternal(2,t)}AT_LEAST_ONE3(t){this.atLeastOneInternal(3,t)}AT_LEAST_ONE4(t){this.atLeastOneInternal(4,t)}AT_LEAST_ONE5(t){this.atLeastOneInternal(5,t)}AT_LEAST_ONE6(t){this.atLeastOneInternal(6,t)}AT_LEAST_ONE7(t){this.atLeastOneInternal(7,t)}AT_LEAST_ONE8(t){this.atLeastOneInternal(8,t)}AT_LEAST_ONE9(t){this.atLeastOneInternal(9,t)}AT_LEAST_ONE_SEP(t){this.atLeastOneSepFirstInternal(0,t)}AT_LEAST_ONE_SEP1(t){this.atLeastOneSepFirstInternal(1,t)}AT_LEAST_ONE_SEP2(t){this.atLeastOneSepFirstInternal(2,t)}AT_LEAST_ONE_SEP3(t){this.atLeastOneSepFirstInternal(3,t)}AT_LEAST_ONE_SEP4(t){this.atLeastOneSepFirstInternal(4,t)}AT_LEAST_ONE_SEP5(t){this.atLeastOneSepFirstInternal(5,t)}AT_LEAST_ONE_SEP6(t){this.atLeastOneSepFirstInternal(6,t)}AT_LEAST_ONE_SEP7(t){this.atLeastOneSepFirstInternal(7,t)}AT_LEAST_ONE_SEP8(t){this.atLeastOneSepFirstInternal(8,t)}AT_LEAST_ONE_SEP9(t){this.atLeastOneSepFirstInternal(9,t)}RULE(t,n,o=Gi){if(Me(this.definedRulesNames,t)){let s={message:wr.buildDuplicateRuleNameError({topLevelRule:t,grammarName:this.className}),type:Tt.DUPLICATE_RULE_NAME,ruleName:t};this.definitionErrors.push(s)}this.definedRulesNames.push(t);let i=this.defineRule(t,n,o);return this[t]=i,i}OVERRIDE_RULE(t,n,o=Gi){let i=wC(t,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);let a=this.defineRule(t,n,o);return this[t]=a,a}BACKTRACK(t,n){return function(){this.isBackTrackingStack.push(1);let o=this.saveRecogState();try{return t.apply(this,n),!0}catch(i){if(Zn(i))return!1;throw i}finally{this.reloadRecogState(o),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return yu(Se(this.gastProductionsCache))}};var Ku=class{static{r(this,"RecognizerEngine")}initRecognizerEngine(t,n){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=Pi,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},W(n,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(B(t)){if(re(t))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof t[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(B(t))this.tokensMap=pt(t,(a,s)=>(a[s.name]=s,a),{});else if(W(t,"modes")&&xt(ht(Se(t.modes)),pC)){let a=ht(Se(t.modes)),s=Qn(a);this.tokensMap=pt(s,(c,l)=>(c[l.name]=l,c),{})}else if(Ge(t))this.tokensMap=Re(t);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=Mr;let o=W(t,"modes")?ht(Se(t.modes)):Se(t),i=xt(o,a=>re(a.categoryMatches));this.tokenMatcher=i?Pi:hn,gn(Se(this.tokensMap))}defineRule(t,n,o){if(this.selfAnalysisDone)throw Error(`Grammar rule <${t}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);let i=W(o,"resyncEnabled")?o.resyncEnabled:Gi.resyncEnabled,a=W(o,"recoveryValueFunc")?o.recoveryValueFunc:Gi.recoveryValueFunc,s=this.ruleShortNameIdx<<12;this.ruleShortNameIdx++,this.shortRuleNameToFull[s]=t,this.fullRuleNameToShort[t]=s;let c;return this.outputCst===!0?c=r(function(...f){try{this.ruleInvocationStateUpdate(s,t,this.subruleIdx),n.apply(this,f);let g=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(g),g}catch(g){return this.invokeRuleCatch(g,i,a)}finally{this.ruleFinallyStateUpdate()}},"invokeRuleWithTry"):c=r(function(...f){try{return this.ruleInvocationStateUpdate(s,t,this.subruleIdx),n.apply(this,f)}catch(g){return this.invokeRuleCatch(g,i,a)}finally{this.ruleFinallyStateUpdate()}},"invokeRuleWithTryCst"),Object.assign(c,{ruleName:t,originalGrammarAction:n})}invokeRuleCatch(t,n,o){let i=this.RULE_STACK.length===1,a=n&&!this.isBackTracking()&&this.recoveryEnabled;if(Zn(t)){let s=t;if(a){let c=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(c))if(s.resyncedTokens=this.reSyncTo(c),this.outputCst){let l=this.CST_STACK[this.CST_STACK.length-1];return l.recoveredNode=!0,l}else return o(t);else{if(this.outputCst){let l=this.CST_STACK[this.CST_STACK.length-1];l.recoveredNode=!0,s.partialCstResult=l}throw s}}else{if(i)return this.moveToTerminatedState(),o(t);throw s}}else throw t}optionInternal(t,n){let o=this.getKeyForAutomaticLookahead(512,n);return this.optionInternalLogic(t,n,o)}optionInternalLogic(t,n,o){let i=this.getLaFuncFromCache(o),a;if(typeof t!="function"){a=t.DEF;let s=t.GATE;if(s!==void 0){let c=i;i=r(()=>s.call(this)&&c.call(this),"lookAheadFunc")}}else a=t;if(i.call(this)===!0)return a.call(this)}atLeastOneInternal(t,n){let o=this.getKeyForAutomaticLookahead(1024,t);return this.atLeastOneInternalLogic(t,n,o)}atLeastOneInternalLogic(t,n,o){let i=this.getLaFuncFromCache(o),a;if(typeof n!="function"){a=n.DEF;let s=n.GATE;if(s!==void 0){let c=i;i=r(()=>s.call(this)&&c.call(this),"lookAheadFunc")}}else a=n;if(i.call(this)===!0){let s=this.doSingleRepetition(a);for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(a)}else throw this.raiseEarlyExitException(t,We.REPETITION_MANDATORY,n.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[t,n],i,1024,t,Lu)}atLeastOneSepFirstInternal(t,n){let o=this.getKeyForAutomaticLookahead(1536,t);this.atLeastOneSepFirstInternalLogic(t,n,o)}atLeastOneSepFirstInternalLogic(t,n,o){let i=n.DEF,a=n.SEP;if(this.getLaFuncFromCache(o).call(this)===!0){i.call(this);let c=r(()=>this.tokenMatcher(this.LA(1),a),"separatorLookAheadFunc");for(;this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[t,a,c,i,Os],c,1536,t,Os)}else throw this.raiseEarlyExitException(t,We.REPETITION_MANDATORY_WITH_SEPARATOR,n.ERR_MSG)}manyInternal(t,n){let o=this.getKeyForAutomaticLookahead(768,t);return this.manyInternalLogic(t,n,o)}manyInternalLogic(t,n,o){let i=this.getLaFuncFromCache(o),a;if(typeof n!="function"){a=n.DEF;let c=n.GATE;if(c!==void 0){let l=i;i=r(()=>c.call(this)&&l.call(this),"lookaheadFunction")}}else a=n;let s=!0;for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(a);this.attemptInRepetitionRecovery(this.manyInternal,[t,n],i,768,t,Ou,s)}manySepFirstInternal(t,n){let o=this.getKeyForAutomaticLookahead(1280,t);this.manySepFirstInternalLogic(t,n,o)}manySepFirstInternalLogic(t,n,o){let i=n.DEF,a=n.SEP;if(this.getLaFuncFromCache(o).call(this)===!0){i.call(this);let c=r(()=>this.tokenMatcher(this.LA(1),a),"separatorLookAheadFunc");for(;this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[t,a,c,i,vs],c,1280,t,vs)}}repetitionSepSecondInternal(t,n,o,i,a){for(;o();)this.CONSUME(n),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[t,n,o,i,a],o,1536,t,a)}doSingleRepetition(t){let n=this.getLexerPosition();return t.call(this),this.getLexerPosition()>n}orInternal(t,n){let o=this.getKeyForAutomaticLookahead(256,n),i=B(t)?t:t.DEF,s=this.getLaFuncFromCache(o).call(this,i);if(s!==void 0)return i[s].ALT.call(this);this.raiseNoAltException(n,t.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){let t=this.LA(1),n=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:t,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new Fs(n,t))}}subruleInternal(t,n,o){let i;try{let a=o!==void 0?o.ARGS:void 0;return this.subruleIdx=n,i=t.apply(this,a),this.cstPostNonTerminal(i,o!==void 0&&o.LABEL!==void 0?o.LABEL:t.ruleName),i}catch(a){throw this.subruleInternalError(a,o,t.ruleName)}}subruleInternalError(t,n,o){throw Zn(t)&&t.partialCstResult!==void 0&&(this.cstPostNonTerminal(t.partialCstResult,n!==void 0&&n.LABEL!==void 0?n.LABEL:o),delete t.partialCstResult),t}consumeInternal(t,n,o){let i;try{let a=this.LA(1);this.tokenMatcher(a,t)===!0?(this.consumeToken(),i=a):this.consumeInternalError(t,a,o)}catch(a){i=this.consumeInternalRecovery(t,n,a)}return this.cstPostTerminal(o!==void 0&&o.LABEL!==void 0?o.LABEL:t.name,i),i}consumeInternalError(t,n,o){let i,a=this.LA(0);throw o!==void 0&&o.ERR_MSG?i=o.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:t,actual:n,previous:a,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new it(i,n,a))}consumeInternalRecovery(t,n,o){if(this.recoveryEnabled&&o.name==="MismatchedTokenException"&&!this.isBackTracking()){let i=this.getFollowsForInRuleRecovery(t,n);try{return this.tryInRuleRecovery(t,i)}catch(a){throw a.name===uy?o:a}}else throw o}saveRecogState(){let t=this.errors,n=Re(this.RULE_STACK);return{errors:t,lexerState:this.exportLexerState(),RULE_STACK:n,CST_STACK:this.CST_STACK}}reloadRecogState(t){this.errors=t.errors,this.importLexerState(t.lexerState),this.RULE_STACK=t.RULE_STACK}ruleInvocationStateUpdate(t,n,o){this.RULE_OCCURRENCE_STACK.push(o),this.RULE_STACK.push(t),this.cstInvocationStateUpdate(n)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){let t=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[t]}shortRuleNameToFullName(t){return this.shortRuleNameToFull[t]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),Mr)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}};var Ju=class{static{r(this,"ErrorHandler")}initErrorHandler(t){this._errors=[],this.errorMessageProvider=W(t,"errorMessageProvider")?t.errorMessageProvider:Yt.errorMessageProvider}SAVE_ERROR(t){if(Zn(t))return t.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:Re(this.RULE_OCCURRENCE_STACK)},this._errors.push(t),t;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return Re(this._errors)}set errors(t){this._errors=t}raiseEarlyExitException(t,n,o){let i=this.getCurrRuleFullName(),a=this.getGAstProductions()[i],c=Ns(t,a,n,this.maxLookahead)[0],l=[];for(let f=1;f<=this.maxLookahead;f++)l.push(this.LA(f));let d=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:c,actual:l,previous:this.LA(0),customUserDescription:o,ruleName:i});throw this.SAVE_ERROR(new Is(d,this.LA(1),this.LA(0)))}raiseNoAltException(t,n){let o=this.getCurrRuleFullName(),i=this.getGAstProductions()[o],a=Ls(t,i,this.maxLookahead),s=[];for(let d=1;d<=this.maxLookahead;d++)s.push(this.LA(d));let c=this.LA(0),l=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:a,actual:s,previous:c,customUserDescription:n,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new ws(l,this.LA(1),c))}};var Qu=class{static{r(this,"ContentAssist")}initContentAssist(){}computeContentAssist(t,n){let o=this.gastProductionsCache[t];if(Ft(o))throw Error(`Rule ->${t}<- does not exist in this grammar.`);return Mu([o],n,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(t){let n=dt(t.ruleStack),i=this.getGAstProductions()[n];return new vu(i,t).startWalking()}};var $u={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze($u);var JC=!0,QC=Math.pow(2,8)-1,ZC=Tn({name:"RECORDING_PHASE_TOKEN",pattern:Ve.NA});gn([ZC]);var $C=Lo(ZC,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze($C);var MW={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},Xu=class{static{r(this,"GastRecorder")}initGastRecorder(t){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let t=0;t<10;t++){let n=t>0?t:"";this[`CONSUME${n}`]=function(o,i){return this.consumeInternalRecord(o,t,i)},this[`SUBRULE${n}`]=function(o,i){return this.subruleInternalRecord(o,t,i)},this[`OPTION${n}`]=function(o){return this.optionInternalRecord(o,t)},this[`OR${n}`]=function(o){return this.orInternalRecord(o,t)},this[`MANY${n}`]=function(o){this.manyInternalRecord(t,o)},this[`MANY_SEP${n}`]=function(o){this.manySepFirstInternalRecord(t,o)},this[`AT_LEAST_ONE${n}`]=function(o){this.atLeastOneInternalRecord(t,o)},this[`AT_LEAST_ONE_SEP${n}`]=function(o){this.atLeastOneSepFirstInternalRecord(t,o)}}this.consume=function(t,n,o){return this.consumeInternalRecord(n,t,o)},this.subrule=function(t,n,o){return this.subruleInternalRecord(n,t,o)},this.option=function(t,n){return this.optionInternalRecord(n,t)},this.or=function(t,n){return this.orInternalRecord(n,t)},this.many=function(t,n){this.manyInternalRecord(t,n)},this.atLeastOne=function(t,n){this.atLeastOneInternalRecord(t,n)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{let t=this;for(let n=0;n<10;n++){let o=n>0?n:"";delete t[`CONSUME${o}`],delete t[`SUBRULE${o}`],delete t[`OPTION${o}`],delete t[`OR${o}`],delete t[`MANY${o}`],delete t[`MANY_SEP${o}`],delete t[`AT_LEAST_ONE${o}`],delete t[`AT_LEAST_ONE_SEP${o}`]}delete t.consume,delete t.subrule,delete t.option,delete t.or,delete t.many,delete t.atLeastOne,delete t.ACTION,delete t.BACKTRACK,delete t.LA})}ACTION_RECORD(t){}BACKTRACK_RECORD(t,n){return()=>!0}LA_RECORD(t){return Bi}topLevelRuleRecord(t,n){try{let o=new zt({definition:[],name:t});return o.name=t,this.recordingProdStack.push(o),n.call(this),this.recordingProdStack.pop(),o}catch(o){if(o.KNOWN_RECORDER_ERROR!==!0)try{o.message=o.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw o}throw o}}optionInternalRecord(t,n){return qs.call(this,Oe,t,n)}atLeastOneInternalRecord(t,n){qs.call(this,nt,n,t)}atLeastOneSepFirstInternalRecord(t,n){qs.call(this,ot,n,t,JC)}manyInternalRecord(t,n){qs.call(this,ge,n,t)}manySepFirstInternalRecord(t,n){qs.call(this,Qe,n,t,JC)}orInternalRecord(t,n){return wW.call(this,t,n)}subruleInternalRecord(t,n,o){if(Zu(n),!t||W(t,"ruleName")===!1){let c=new Error(`<SUBRULE${XC(n)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(t)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw c.KNOWN_RECORDER_ERROR=!0,c}let i=en(this.recordingProdStack),a=t.ruleName,s=new Ae({idx:n,nonTerminalName:a,label:o?.LABEL,referencedRule:void 0});return i.definition.push(s),this.outputCst?MW:$u}consumeInternalRecord(t,n,o){if(Zu(n),!XS(t)){let s=new Error(`<CONSUME${XC(n)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(t)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw s.KNOWN_RECORDER_ERROR=!0,s}let i=en(this.recordingProdStack),a=new se({idx:n,terminalType:t,label:o?.LABEL});return i.definition.push(a),$C}};function qs(e,t,n,o=!1){Zu(n);let i=en(this.recordingProdStack),a=Vt(t)?t:t.DEF,s=new e({definition:[],idx:n});return o&&(s.separator=t.SEP),W(t,"MAX_LOOKAHEAD")&&(s.maxLookahead=t.MAX_LOOKAHEAD),this.recordingProdStack.push(s),a.call(this),i.definition.push(s),this.recordingProdStack.pop(),$u}r(qs,"recordProd");function wW(e,t){Zu(t);let n=en(this.recordingProdStack),o=B(e)===!1,i=o===!1?e:e.DEF,a=new Xe({definition:[],idx:t,ignoreAmbiguities:o&&e.IGNORE_AMBIGUITIES===!0});W(e,"MAX_LOOKAHEAD")&&(a.maxLookahead=e.MAX_LOOKAHEAD);let s=Nr(i,c=>Vt(c.GATE));return a.hasPredicates=s,n.definition.push(a),V(i,c=>{let l=new ke({definition:[]});a.definition.push(l),W(c,"IGNORE_AMBIGUITIES")?l.ignoreAmbiguities=c.IGNORE_AMBIGUITIES:W(c,"GATE")&&(l.ignoreAmbiguities=!0),this.recordingProdStack.push(l),c.ALT.call(this),this.recordingProdStack.pop()}),$u}r(wW,"recordOrProd");function XC(e){return e===0?"":`${e}`}r(XC,"getIdxSuffix");function Zu(e){if(e<0||e>QC){let t=new Error(`Invalid DSL Method idx value: <${e}>
	Idx value must be a none negative value smaller than ${QC+1}`);throw t.KNOWN_RECORDER_ERROR=!0,t}}r(Zu,"assertMethodIdxIsValid");var ed=class{static{r(this,"PerformanceTracer")}initPerformanceTracer(t){if(W(t,"traceInitPerf")){let n=t.traceInitPerf,o=typeof n=="number";this.traceInitMaxIdent=o?n:1/0,this.traceInitPerf=o?n>0:n}else this.traceInitMaxIdent=0,this.traceInitPerf=Yt.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(t,n){if(this.traceInitPerf===!0){this.traceInitIndent++;let o=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${o}--> <${t}>`);let{time:i,value:a}=_s(n),s=i>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s(`${o}<-- <${t}> time: ${i}ms`),this.traceInitIndent--,a}else return n()}};function ev(e,t){t.forEach(n=>{let o=n.prototype;Object.getOwnPropertyNames(o).forEach(i=>{if(i==="constructor")return;let a=Object.getOwnPropertyDescriptor(o,i);a&&(a.get||a.set)?Object.defineProperty(e.prototype,i,a):e.prototype[i]=n.prototype[i]})})}r(ev,"applyMixins");var Bi=Lo(Mr,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Bi);var Yt=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:En,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),Gi=Object.freeze({recoveryValueFunc:r(()=>{},"recoveryValueFunc"),resyncEnabled:!0}),Tt;(function(e){e[e.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",e[e.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",e[e.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",e[e.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",e[e.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",e[e.LEFT_RECURSION=5]="LEFT_RECURSION",e[e.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",e[e.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",e[e.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",e[e.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",e[e.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",e[e.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",e[e.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",e[e.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(Tt||(Tt={}));var Bs=class e{static{r(this,"Parser")}static performSelfAnalysis(t){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let t;this.selfAnalysisDone=!0;let n=this.className;this.TRACE_INIT("toFastProps",()=>{xs(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),V(this.definedRulesNames,i=>{let s=this[i].originalGrammarAction,c;this.TRACE_INIT(`${i} Rule`,()=>{c=this.topLevelRuleRecord(i,s)}),this.gastProductionsCache[i]=c})}finally{this.disableRecording()}});let o=[];if(this.TRACE_INIT("Grammar Resolving",()=>{o=DC({rules:Se(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(o)}),this.TRACE_INIT("Grammar Validations",()=>{if(re(o)&&this.skipValidations===!1){let i=qC({rules:Se(this.gastProductionsCache),tokenTypes:Se(this.tokensMap),errMsgProvider:wr,grammarName:n}),a=LC({lookaheadStrategy:this.lookaheadStrategy,rules:Se(this.gastProductionsCache),tokenTypes:Se(this.tokensMap),grammarName:n});this.definitionErrors=this.definitionErrors.concat(i,a)}}),re(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{let i=HU(Se(this.gastProductionsCache));this.resyncFollows=i}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var i,a;(a=(i=this.lookaheadStrategy).initialize)===null||a===void 0||a.call(i,{rules:Se(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(Se(this.gastProductionsCache))})),!e.DEFER_DEFINITION_ERRORS_HANDLING&&!re(this.definitionErrors))throw t=G(this.definitionErrors,i=>i.message),new Error(`Parser Definition Errors detected:
 ${t.join(`
-------------------------------
`)}`)})}constructor(t,n){this.definitionErrors=[],this.selfAnalysisDone=!1;let o=this;if(o.initErrorHandler(n),o.initLexerAdapter(),o.initLooksAhead(n),o.initRecognizerEngine(t,n),o.initRecoverable(n),o.initTreeBuilder(n),o.initContentAssist(),o.initGastRecorder(n),o.initPerformanceTracer(n),W(n,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=W(n,"skipValidations")?n.skipValidations:Yt.skipValidations}};Bs.DEFER_DEFINITION_ERRORS_HANDLING=!1;ev(Bs,[Du,Gu,zu,Hu,Ku,Yu,Ju,Qu,Xu,ed]);var Gs=class extends Bs{static{r(this,"CstParser")}constructor(t,n=Yt){let o=Re(n);o.outputCst=!0,super(t,o)}};var Sy=new Map;function x(e){let{pattern:t}=e,n=t.toString();if(Sy.has(n))return Sy.get(n);let o=Tn(e);return Sy.set(n,o),o}r(x,"createUniqToken");function u(e,t){return x({name:`${e} token`,pattern:new RegExp(e),label:e,...t})}r(u,"createTokenByName");var H=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),td=u("conditional",{longer_alt:H,categories:[H]}),ji=u("if",{longer_alt:H,categories:[H]}),rd=u("else",{longer_alt:H,categories:[H]}),nd=u("elseif",{longer_alt:H,categories:[H]}),od=u("for",{longer_alt:H,categories:[H]}),id=u("foreach",{longer_alt:H,categories:[H]}),ad=u("remove",{longer_alt:H,categories:[H]}),sd=u("await",{longer_alt:H,categories:[H]}),Fr=u("each",{longer_alt:H,categories:[H]}),cd=u("try_catch",{longer_alt:H,categories:[H]}),js=u("try",{longer_alt:H,categories:[H]}),Vs=u("catch",{longer_alt:H,categories:[H]}),ld=u("finally",{longer_alt:H,categories:[H]}),It=u("as",{longer_alt:H,categories:[H]}),Vi=u("return",{longer_alt:H,categories:[H]}),ud=u("switch",{longer_alt:H,categories:[H]}),dd=u("case",{longer_alt:H,categories:[H]}),pd=u("default",{longer_alt:H,categories:[H]}),fd=u("while",{longer_alt:H,categories:[H]}),Wi=u("group",{longer_alt:H,categories:[H]}),md=u("throw",{longer_alt:H,categories:[H]}),zi=u("break",{longer_alt:H,categories:[H]}),hd=u("continue",{longer_alt:H,categories:[H]}),Ws=x({name:"GreaterThan",pattern:/>/,label:">"}),zs=x({name:"GreaterThanOrEqual",pattern:/>=/,label:">="}),Hs=x({name:"SmallerThan",pattern:/</,label:"<"}),Ys=x({name:"SmallerThanOrEq",pattern:/<=/,label:"<="}),gd=x({name:"Minus",pattern:/-/,label:"-"}),Td=x({name:"Plus",pattern:/\+/,label:"+"}),Ed=x({name:"Multiply",pattern:/\*/,label:"*"}),Sd=x({name:"Divide",pattern:/\//,label:"/"}),Ks=x({name:"IsEqual",label:"==",pattern:/==/}),yd=x({name:"IsStrictEqual",label:"===",pattern:/===/}),Js=x({name:"IsNotEqual",label:"!=",pattern:/!=/}),_d=x({name:"IsStrictNotEqual",label:"!==",pattern:/!==/}),b=x({name:"EqualToken",label:"=",pattern:/=/}),A=x({name:"LCurly",pattern:/{/,label:"{"}),k=x({name:"RCurly",pattern:/}/,label:"}"}),ze=x({name:"LSquare",pattern:/\[/,label:"["}),He=x({name:"RSquare",pattern:/]/,label:"]"}),ce=x({name:"LParent",pattern:/\(/,label:"("}),ne=x({name:"RParent",pattern:/\)/,label:")"}),dr=x({name:"Question",pattern:/\?/,label:"?"}),pe=x({name:"ColonToken",pattern:/:/,label:":"}),Et=x({name:"PipeToken",pattern:/\|/,label:"|"}),_e=x({name:"CommaToken",pattern:/,/,label:","}),xd=x({name:"AndTestToken",pattern:/&&/,label:"&&"}),bd=x({name:"NullishCoalescingToken",pattern:/\?\?/,label:"??"}),yy=x({name:"OrTestToken",pattern:/\|\|/,label:"||"}),Qs=x({name:"JsonBetweenToken",pattern:/between/,label:"between",longer_alt:H,categories:[H]}),Xs=x({name:"JsonContainsToken",pattern:/@>/,label:"@>"}),Zs=x({name:"JsonContainsStringToken",pattern:/contains/,label:"contains",longer_alt:H,categories:[H]}),_y=x({name:"JsonEqualToken",pattern:/=/,label:"="}),$s=x({name:"JsonILikeToken",pattern:/ilike/,label:"ilike",longer_alt:H,categories:[H]}),ec=x({name:"JsonIncludesToken",pattern:/includes/,label:"includes",longer_alt:H,categories:[H]}),tc=x({name:"JsonLikeToken",pattern:/like/,label:"like",longer_alt:H,categories:[H]}),rc=x({name:"JsonNotBetweenToken",pattern:/not between/,label:"not between"}),nc=x({name:"JsonNotContainsToken",pattern:/not contains/,label:"not contains"}),oc=x({name:"JsonNotILikeToken",pattern:/not ilike/,label:"not ilike"}),ic=x({name:"JsonNotInToken",pattern:/not in/,label:"not in"}),ac=x({name:"JsonNotIncludesToken",pattern:/not includes/,label:"not includes"}),sc=x({name:"JsonNotLikeToken",pattern:/not like/,label:"not like"}),cc=x({name:"JsonNotOverlapsToken",pattern:/not overlaps/,label:"not overlaps"}),lc=x({name:"JsonNotRegexToken",pattern:/!~/,label:"!~"}),uc=x({name:"JsonOverlapsToken",pattern:/overlaps/,label:"overlaps",longer_alt:H,categories:[H]}),Rd=x({name:"JsonRegexToken",pattern:/~/,label:"~"}),tv=x({name:"JsonSearchToken",pattern:/search/,label:"search",longer_alt:H,categories:[H]}),rv=[rc,nc,oc,ac,ic,Qs,Xs,Zs,$s,ec,tc,sc,cc,lc,uc,Rd,tv,bd,xd,yy,td,ji,nd,rd,id,od,Fr,ad,sd,It,Vi,ud,dd,pd,fd,Wi,md,zi,hd,zs,Ws,Ys,Hs,gd,Td,Ed,Sd,yd,Ks,_d,Js,b,A,k,ze,He,ce,ne,dr,pe,Et,_e,cd,js,Vs,ld,_y];function nv(e){switch(e){case ji.name:case rd.name:case nd.name:case Fr.name:case It.name:case js.name:case Vs.name:case ld.name:return"keyword";case td.name:case sd.name:case Vi.name:case Wi.name:case md.name:case zi.name:case hd.name:case od.name:case ud.name:case ad.name:case id.name:case fd.name:case dd.name:case pd.name:case cd.name:return"function";case A.name:return"operator.openingCurly";case k.name:return"operator.closingCurly";case ze.name:return"operator.openingSquare";case He.name:return"operator.closingSquare";case ce.name:return"operator.openingParenthesis";case ne.name:return"operator.closingParenthesis";case Ws.name:case zs.name:case Hs.name:case Ys.name:case gd.name:case Td.name:case xd.name:case Ed.name:case Sd.name:case b.name:case Ks.name:case Js.name:case bd.name:case rc.name:case nc.name:case oc.name:case ac.name:case ic.name:case Qs.name:case Xs.name:case Zs.name:case $s.name:case ec.name:case tc.name:case sc.name:case cc.name:case lc.name:case uc.name:case Rd.name:return"operator";case tv.name:return"variable";case dr.name:case pe.name:case Et.name:case _e.name:return"punctuation";default:return null}}r(nv,"mapTokenToType");var xy=x({name:"DisabledStatementToken",pattern:/![a-zA-Z][\w.]*/}),ov=x({name:"IntCast",pattern:/!int/,label:"!int"}),iv=x({name:"BoolCast",pattern:/!bool/,label:"!bool"}),av=x({name:"ArrayCast",pattern:/!array/,label:"!array"}),sv=x({name:"TextCast",pattern:/!text/,label:"!text"}),cv=x({name:"ExpressionCast",pattern:/!expr/,label:"!expr"}),lv=x({name:"DecimalCast",pattern:/!decimal/,label:"!decimal"}),uv=x({name:"ObjectCast",pattern:/!object/,label:"!object"}),dv=x({name:"TimestampCast",pattern:/!timestamp/,label:"!timestamp"}),br=x({name:"ExclamationToken",pattern:/!/}),Ad=[ov,av,sv,cv,lv,uv,dv,iv,br];function pv(e){switch(e){case ov.name:case av.name:case sv.name:case cv.name:case lv.name:case uv.name:case dv.name:case iv.name:return"type";case xy.name:return"comment";case br.name:return"operator";default:return null}}r(pv,"mapTokenToType");var fv=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),kd=u("addon",{longer_alt:fv,categories:[fv]}),mv=[kd];function hv(e){switch(e){case kd.name:return"keyword";default:return null}}r(hv,"mapTokenToType");var Hi=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Ud=u("agent",{longer_alt:Hi,categories:[Hi]}),Cd=u("llm",{longer_alt:Hi,categories:[Hi]}),vd=u("tools",{longer_alt:Hi,categories:[Hi]}),gv=[Ud,Cd,vd];function Tv(e){switch(e){case Ud.name:case Cd.name:case vd.name:return"keyword";default:return null}}r(Tv,"mapTokenToType");var Yi=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Od=u("actions",{longer_alt:Yi,categories:[Yi]}),Ld=u("active",{longer_alt:Yi,categories:[Yi]}),Nd=u("agent_trigger",{longer_alt:Yi,categories:[Yi]}),Ev=[Od,Ld,Nd];function Sv(e){switch(e){case Od.name:case Nd.name:return"keyword";case Ld.name:return"variable";default:return null}}r(Sv,"mapTokenToType");var Pt=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Md=u("ai",{longer_alt:Pt,categories:[Pt]}),wd=u("agent",{longer_alt:Pt,categories:[Pt]}),Ki=u("run",{longer_alt:Pt,categories:[Pt]}),Fd=u("external",{longer_alt:Pt,categories:[Pt]}),Id=u("mcp",{longer_alt:Pt,categories:[Pt]}),Pd=u("tool",{longer_alt:Pt,categories:[Pt]}),Dd=u("list",{longer_alt:Pt,categories:[Pt]}),qd=u("server_details",{longer_alt:Pt,categories:[Pt]}),yv=[Md,wd,Ki,Fd,Id,Pd,Dd,qd];function _v(e){switch(e){case Md.name:case wd.name:case Ki.name:case Fd.name:case Id.name:case Pd.name:case Dd.name:case qd.name:return"keyword";default:return null}}r(_v,"mapTokenToType");var ir=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Bd=u("api",{longer_alt:ir,categories:[ir]}),Gd=u("request",{longer_alt:ir,categories:[ir]}),jd=u("call",{longer_alt:ir,categories:[ir]}),Vd=u("realtime_event",{longer_alt:ir,categories:[ir]}),Wd=u("stream",{longer_alt:ir,categories:[ir]}),zd=u("lambda",{longer_alt:ir,categories:[ir]}),xv=u("microservice",{longer_alt:ir,categories:[ir]}),bv=[Bd,Gd,jd,Vd,Wd,zd,xv];function Rv(e){switch(e){case Bd.name:case Gd.name:case zd.name:case Vd.name:case Wd.name:case xv.name:case jd.name:return"function";default:return null}}r(Rv,"mapTokenToType");var nn=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Ji=u("active",{longer_alt:nn,categories:[nn]}),Hd=u("api_group",{longer_alt:nn,categories:[nn]}),Yd=u("canonical",{longer_alt:nn,categories:[nn]}),Kd=u("cors",{longer_alt:nn,categories:[nn]}),Jd=u("swagger",{longer_alt:nn,categories:[nn]}),Av=[Ji,Hd,Yd,Kd,Jd];function kv(e){switch(e){case Hd.name:return"keyword";case Ji.name:case Yd.name:case Kd.name:case Jd.name:return"variable";default:return null}}r(kv,"mapTokenToType");var Fe=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Qd=u("array",{longer_alt:Fe,categories:[Fe]}),Xd=u("every",{longer_alt:Fe,categories:[Fe]}),Zd=u("filter_count",{longer_alt:Fe,categories:[Fe]}),$d=u("filter",{longer_alt:Fe,categories:[Fe]}),ep=u("find",{longer_alt:Fe,categories:[Fe]}),tp=u("find_index",{longer_alt:Fe,categories:[Fe]}),rp=u("has",{longer_alt:Fe,categories:[Fe]}),np=u("merge",{longer_alt:Fe,categories:[Fe]}),op=u("pop",{longer_alt:Fe,categories:[Fe]}),ip=u("push",{longer_alt:Fe,categories:[Fe]}),ap=u("shift",{longer_alt:Fe,categories:[Fe]}),sp=u("unshift",{longer_alt:Fe,categories:[Fe]}),Uv=[Qd,Xd,Zd,$d,tp,ep,rp,np,op,ip,ap,sp];function Cv(e){switch(e){case Qd.name:case Xd.name:case Zd.name:case $d.name:case ep.name:case tp.name:case rp.name:case np.name:case op.name:case ip.name:case ap.name:case sp.name:return"function";default:return null}}r(Cv,"mapTokenToType");var cp=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),lp=u("branch",{longer_alt:cp,categories:[cp]}),up=u("color",{longer_alt:cp,categories:[cp]}),vv=[lp,up];function Ov(e){switch(e){case lp.name:return"keyword";case up.name:return"variable";default:return null}}r(Ov,"mapTokenToType");var oe=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),dp=u("cloud",{longer_alt:oe,categories:[oe]}),pp=u("algolia",{longer_alt:oe,categories:[oe]}),fp=u("google",{longer_alt:oe,categories:[oe]}),mp=u("aws",{longer_alt:oe,categories:[oe]}),hp=u("elasticsearch",{longer_alt:oe,categories:[oe]}),gp=u("azure",{longer_alt:oe,categories:[oe]}),Tp=u("storage",{longer_alt:oe,categories:[oe]}),Ep=u("read_file",{longer_alt:oe,categories:[oe]}),Sp=u("delete_file",{longer_alt:oe,categories:[oe]}),yp=u("get_file_info",{longer_alt:oe,categories:[oe]}),_p=u("list_directory",{longer_alt:oe,categories:[oe]}),xp=u("s3",{longer_alt:oe,categories:[oe]}),bp=u("sign_url",{longer_alt:oe,categories:[oe]}),Rp=u("upload_file",{longer_alt:oe,categories:[oe]}),Ap=u("opensearch",{longer_alt:oe,categories:[oe]}),kp=u("document",{longer_alt:oe,categories:[oe]}),Up=u("query",{longer_alt:oe,categories:[oe]}),Qi=u("request",{longer_alt:oe,categories:[oe]}),Lv=[dp,pp,fp,mp,hp,gp,Tp,Ep,Sp,yp,_p,xp,bp,Rp,Ap,kp,Up,Qi];function Nv(e){switch(e){case dp.name:case pp.name:case fp.name:case mp.name:case hp.name:case gp.name:case Tp.name:case xp.name:case Ap.name:case Ep.name:case Sp.name:case yp.name:case _p.name:case bp.name:case Rp.name:case kp.name:case Up.name:case Qi.name:return"function";default:return null}}r(Nv,"mapTokenToType");var Y=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Cp=u("int",{longer_alt:Y,categories:[Y]}),vp=u("timestamp",{longer_alt:Y,categories:[Y]}),Xi=u("text",{longer_alt:Y,categories:[Y]}),Op=u("uuid",{longer_alt:Y,categories:[Y]}),Lp=u("vector",{longer_alt:Y,categories:[Y]}),Np=u("enum",{longer_alt:Y,categories:[Y]}),Mp=u("date",{longer_alt:Y,categories:[Y]}),wp=u("bool",{longer_alt:Y,categories:[Y]}),Fp=u("decimal",{longer_alt:Y,categories:[Y]}),Ip=u("email",{longer_alt:Y,categories:[Y]}),Pp=u("password",{longer_alt:Y,categories:[Y]}),Dp=u("json",{longer_alt:Y,categories:[Y]}),qp=u("file",{longer_alt:Y,categories:[Y]}),Bp=u("object",{longer_alt:Y,categories:[Y]}),Gp=u("image",{longer_alt:Y,categories:[Y]}),jp=u("video",{longer_alt:Y,categories:[Y]}),Vp=u("audio",{longer_alt:Y,categories:[Y]}),Wp=u("attachment",{longer_alt:Y,categories:[Y]}),zp=u("geo_point",{longer_alt:Y,categories:[Y]}),Hp=u("geo_multipoint",{longer_alt:Y,categories:[Y]}),Yp=u("geo_linestring",{longer_alt:Y,categories:[Y]}),Kp=u("geo_multilinestring",{longer_alt:Y,categories:[Y]}),Jp=u("geo_polygon",{longer_alt:Y,categories:[Y]}),Qp=u("geo_multipolygon",{longer_alt:Y,categories:[Y]}),Xp=u("dblink",{longer_alt:Y,categories:[Y]}),Zp=u("agent",{longer_alt:Y,categories:[Y]}),$p=u("mcp_server",{longer_alt:Y,categories:[Y]}),ef=u("channel",{longer_alt:Y,categories:[Y]}),tf=u("canonical",{longer_alt:Y,categories:[Y]}),Mv=[Zp,tf,$p,ef,Xp,Cp,vp,Xi,Op,Lp,Np,Mp,wp,Fp,Ip,Pp,Dp,qp,Bp,Gp,jp,Vp,Wp,zp,Hp,Yp,Kp,Jp,Qp];function wv(e){switch(e){case Zp.name:case tf.name:case $p.name:case ef.name:case Xp.name:case Cp.name:case vp.name:case Xi.name:case Op.name:case Lp.name:case Np.name:case Mp.name:case wp.name:case Fp.name:case Ip.name:case Pp.name:case Dp.name:case qp.name:case Bp.name:case Gp.name:case jp.name:case Vp.name:case Wp.name:case zp.name:case Hp.name:case Yp.name:case Kp.name:case Jp.name:case Qp.name:return"type";default:return null}}r(wv,"mapTokenToType");var rf=x({name:"CommentToken",label:"// comment",pattern:/\/\/[^\r\n]*/}),Fv=[rf];function Iv(e){switch(e){case rf.name:return"comment";default:return}}r(Iv,"mapTokenToType");var ee=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),nf=u("db",{longer_alt:ee,categories:[ee]}),of=u("query",{longer_alt:ee,categories:[ee]}),af=u("get",{longer_alt:ee,categories:[ee]}),sf=u("add",{longer_alt:ee,categories:[ee]}),cf=u("add_or_edit",{longer_alt:ee,categories:[ee]}),lf=u("del",{longer_alt:ee,categories:[ee]}),uf=u("edit",{longer_alt:ee,categories:[ee]}),Pv=u("update",{longer_alt:ee,categories:[ee]}),df=u("has",{longer_alt:ee,categories:[ee]}),pf=u("patch",{longer_alt:ee,categories:[ee]}),ff=u("schema",{longer_alt:ee,categories:[ee]}),mf=u("transaction",{longer_alt:ee,categories:[ee]}),hf=u("truncate",{longer_alt:ee,categories:[ee]}),Zi=u("direct_query",{longer_alt:ee,categories:[ee]}),gf=u("set_datasource",{longer_alt:ee,categories:[ee]}),Dv=u("bulk",{longer_alt:ee,categories:[ee]}),Tf=u("external",{longer_alt:ee,categories:[ee]}),Ef=u("mssql",{longer_alt:ee,categories:[ee]}),Sf=u("mysql",{longer_alt:ee,categories:[ee]}),yf=u("postgres",{longer_alt:ee,categories:[ee]}),_f=u("oracle",{longer_alt:ee,categories:[ee]}),qv=[nf,of,af,cf,sf,lf,uf,Pv,df,pf,ff,mf,hf,Zi,gf,Dv,Tf,Ef,Sf,yf,_f];function Bv(e){switch(e){case ff.name:return"keyword";case nf.name:case Dv.name:case Tf.name:case Ef.name:case Sf.name:case yf.name:case _f.name:case of.name:case af.name:case sf.name:case cf.name:case lf.name:case uf.name:case Pv.name:case df.name:case pf.name:case mf.name:case hf.name:case Zi.name:case gf.name:return"function";default:return null}}r(Bv,"mapTokenToType");var $i=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),xf=u("debug",{longer_alt:$i,categories:[$i]}),bf=u("stop",{longer_alt:$i,categories:[$i]}),Rf=u("log",{longer_alt:$i,categories:[$i]}),Gv=[xf,bf,Rf];function jv(e){switch(e){case xf.name:case bf.name:case Rf.name:return"function";default:return null}}r(jv,"mapTokenToType");var te=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),ea=u("expect",{longer_alt:te,categories:[te]}),ta=u("to_be_true",{longer_alt:te,categories:[te]}),ra=u("to_be_false",{longer_alt:te,categories:[te]}),na=u("to_be_in_the_past",{longer_alt:te,categories:[te]}),oa=u("to_be_in_the_future",{longer_alt:te,categories:[te]}),ia=u("to_be_defined",{longer_alt:te,categories:[te]}),aa=u("to_not_be_defined",{longer_alt:te,categories:[te]}),sa=u("to_be_null",{longer_alt:te,categories:[te]}),ca=u("to_not_be_null",{longer_alt:te,categories:[te]}),la=u("to_be_empty",{longer_alt:te,categories:[te]}),ua=u("to_start_with",{longer_alt:te,categories:[te]}),da=u("to_end_with",{longer_alt:te,categories:[te]}),pa=u("to_be_greater_than",{longer_alt:te,categories:[te]}),fa=u("to_be_less_than",{longer_alt:te,categories:[te]}),ma=u("to_match",{longer_alt:te,categories:[te]}),ha=u("to_equal",{longer_alt:te,categories:[te]}),ga=u("to_not_equal",{longer_alt:te,categories:[te]}),Ta=u("to_contain",{longer_alt:te,categories:[te]}),Ea=u("to_be_within",{longer_alt:te,categories:[te]}),Sa=u("to_throw",{longer_alt:te,categories:[te]}),Vv=[ea,ta,ra,na,oa,ia,aa,sa,ca,la,ua,da,pa,fa,ma,ha,ga,Ta,Ea,Sa];function Wv(e){switch(e){case ea.name:case ta.name:case ra.name:case na.name:case oa.name:case ia.name:case aa.name:case sa.name:case ca.name:case la.name:case ua.name:case da.name:case pa.name:case fa.name:case ma.name:case ha.name:case ga.name:case Ta.name:case Ea.name:case Sa.name:return"function";default:return null}}r(Wv,"mapTokenToType");var zv=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Af=u("filters",{longer_alt:zv,categories:[zv]}),kf=x({name:"DbLinkFilter",label:"@",pattern:/@/}),Hv=[Af,kf];function Yv(e){switch(e){case Af.name:return"keyword";case kf.name:return"function";default:return null}}r(Yv,"mapTokenToType");var ya=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),$n=u("function",{longer_alt:ya,categories:[ya]}),Uf=u("run",{longer_alt:ya,categories:[ya]}),Cf=u("call",{longer_alt:ya,categories:[ya]}),Kv=[$n,Uf,Cf];function Jv(e){switch(e){case $n.name:return"keyword";case Uf.name:case Cf.name:return"function";default:return null}}r(Jv,"mapTokenToType");var vf=x({name:"ExpressionLiteral",label:"`...`",pattern:/`([^`\\]|\\.)*`/}),U=x({name:"StringLiteral",label:'"..."',pattern:/"([^"\\]|\\.)*"/}),eo=x({name:"SingleQuotedStringLiteral",pattern:/'([^'\\]|\\.)*'/,label:"''"}),vt=x({name:"FloatLiteral",label:"floating point number",pattern:/-?\d+\.\d+/}),Le=x({name:"IntegerLiteral",label:"integer",pattern:/-?\d+/,longer_alt:vt}),Dle=x({name:"DoubleDollar",label:"$$",pattern:/\$\$/}),_a=x({name:"TimestampLiteral",pattern:/\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\s([01]\d|2[0-3]):([0-5]\d):([0-5]\d)[+-]\d{4}/}),Qv=[_a,vf,U,eo,Le,vt];function Xv(e){switch(e){case vf.name:return"macro";case U.name:case _a.name:return"doubleString";case eo.name:return"singleString";case Le.name:case vt.name:return"number";default:return null}}r(Xv,"mapTokenToType");var ft=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Of=u("math",{longer_alt:ft,categories:[ft]}),Lf=u("add",{longer_alt:ft,categories:[ft]}),Nf=u("div",{longer_alt:ft,categories:[ft]}),Mf=u("mod",{longer_alt:ft,categories:[ft]}),wf=u("mul",{longer_alt:ft,categories:[ft]}),Ff=u("sub",{longer_alt:ft,categories:[ft]}),If=u("bitwise",{longer_alt:ft,categories:[ft]}),Pf=u("and",{longer_alt:ft,categories:[ft]}),Df=u("or",{longer_alt:ft,categories:[ft]}),qf=u("xor",{longer_alt:ft,categories:[ft]}),Zv=[Of,Lf,Nf,Mf,wf,Ff,If,Pf,Df,qf];function $v(e){switch(e){case Of.name:case Lf.name:case Nf.name:case Mf.name:case wf.name:case Ff.name:case If.name:case Pf.name:case Df.name:case qf.name:return"function";default:return null}}r($v,"mapTokenToType");var Bf=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Gf=u("instructions",{longer_alt:Bf,categories:[Bf]}),xa=u("tool",{longer_alt:Bf,categories:[Bf]}),eO=[Gf,xa];function tO(e){switch(e){case xa.name:return"keyword";case Gf.name:return"variable";default:return null}}r(tO,"mapTokenToType");var No=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),jf=u("active",{longer_alt:No,categories:[No]}),Vf=u("instructions",{longer_alt:No,categories:[No]}),Wf=u("mcp_server",{longer_alt:No,categories:[No]}),zf=u("tools",{longer_alt:xa,categories:[No]}),rO=[jf,Vf,Wf,zf];function nO(e){switch(e){case jf.name:case Wf.name:case zf.name:return"keyword";case Vf.name:return"variable";default:return null}}r(nO,"mapTokenToType");var ba=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Hf=u("actions",{longer_alt:ba,categories:[ba]}),Yf=u("active",{longer_alt:ba,categories:[ba]}),Kf=u("mcp_server_trigger",{longer_alt:ba,categories:[ba]}),oO=[Hf,Yf,Kf];function iO(e){switch(e){case Hf.name:case Kf.name:return"keyword";case Yf.name:return"variable";default:return null}}r(iO,"mapTokenToType");var Ra=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Jf=u("exception_policy",{longer_alt:Ra,categories:[Ra]}),Qf=u("middleware",{longer_alt:Ra,categories:[Ra]}),Xf=u("response_strategy",{longer_alt:Ra,categories:[Ra]}),aO=[Jf,Qf,Xf];function sO(e){switch(e){case Qf.name:return"keyword";case Jf.name:case Xf.name:return"variable";default:return null}}r(sO,"mapTokenToType");var Dt=Tn({name:'"""..."""',pattern:/("""\r?\n(?:[\s\S]*?\r?\n)?[ ]*""")|('''\r?\n(?:[\s\S]*?\r?\n)?[ ]*''')/}),Zf=Tn({name:"MultiLineExpression",pattern:/```\r?\n(?:[\s\S]*?\r?\n)?[ ]*```/}),cO=[Dt,Zf];function lO(e){switch(e){case Dt.name:return"tripleString";case Zf.name:return"tripleMacro";default:return null}}r(lO,"mapTokenToType");var to=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),$f=u("object",{longer_alt:to,categories:[to]}),em=u("entries",{longer_alt:to,categories:[to]}),tm=u("keys",{longer_alt:to,categories:[to]}),rm=u("values",{longer_alt:to,categories:[to]}),uO=[$f,em,tm,rm];function dO(e){switch(e){case $f.name:case em.name:case tm.name:case rm.name:return"function";default:return null}}r(dO,"mapTokenToType");var ie=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),nm=u("query",{longer_alt:ie,categories:[ie]}),Aa=u("verb",{longer_alt:ie,categories:[ie]}),ka=u("GET",{longer_alt:ie,categories:[ie]}),Ua=u("PATCH",{longer_alt:ie,categories:[ie]}),Ca=u("POST",{longer_alt:ie,categories:[ie]}),va=u("PUT",{longer_alt:ie,categories:[ie]}),Oa=u("DELETE",{categories:[ie],longer_alt:ie}),om=u("where",{longer_alt:ie,categories:[ie]}),im=u("additional_where",{longer_alt:ie,categories:[ie]}),am=u("sort",{longer_alt:ie,categories:[ie]}),sm=u("override_sort",{longer_alt:ie,categories:[ie]}),cm=u("join",{longer_alt:ie,categories:[ie]}),pO=u("dblink",{longer_alt:ie,categories:[ie]}),lm=u("paging",{longer_alt:ie,categories:[ie]}),um=u("distinct",{longer_alt:ie,categories:[ie]}),La=u("output",{longer_alt:ie,categories:[ie]}),dm=u("addon",{longer_alt:ie,categories:[ie]}),dc=u("eval",{longer_alt:ie,categories:[ie]}),fO=[im,om,am,sm,cm,nm,Aa,ka,Ua,Ca,va,Oa,pO,um,lm,La,dm,dc];function mO(e){switch(e){case nm.name:case Aa.name:return"keyword";case ka.name:case Ua.name:case Ca.name:case va.name:case Oa.name:return"enumMember";case om.name:case cm.name:case pO.name:case um.name:case lm.name:case La.name:case dm.name:case dc.name:case am.name:case sm.name:case im.name:return"property";default:return null}}r(mO,"mapTokenToType");var Na=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),pm=u("actions",{longer_alt:Na,categories:[Na]}),fm=u("active",{longer_alt:Na,categories:[Na]}),mm=u("realtime_trigger",{longer_alt:Na,categories:[Na]}),hO=[pm,fm,mm];function gO(e){switch(e){case pm.name:case mm.name:return"keyword";case fm.name:return"variable";default:return null}}r(gO,"mapTokenToType");var fe=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),hm=u("redis",{longer_alt:fe,categories:[fe]}),gm=u("count",{longer_alt:fe,categories:[fe]}),Tm=u("decr",{longer_alt:fe,categories:[fe]}),Em=u("del",{longer_alt:fe,categories:[fe]}),Sm=u("get",{longer_alt:fe,categories:[fe]}),ym=u("has",{longer_alt:fe,categories:[fe]}),_m=u("incr",{longer_alt:fe,categories:[fe]}),xm=u("keys",{longer_alt:fe,categories:[fe]}),bm=u("pop",{longer_alt:fe,categories:[fe]}),Rm=u("push",{longer_alt:fe,categories:[fe]}),Am=u("range",{longer_alt:fe,categories:[fe]}),km=u("ratelimit",{longer_alt:fe,categories:[fe]}),Um=u("remove",{longer_alt:fe,categories:[fe]}),Cm=u("set",{longer_alt:fe,categories:[fe]}),vm=u("shift",{longer_alt:fe,categories:[fe]}),Om=u("unshift",{longer_alt:fe,categories:[fe]}),TO=[hm,gm,Tm,Em,Sm,ym,_m,xm,bm,Rm,Am,km,Um,Cm,vm,Om];function EO(e){switch(e){case hm.name:case gm.name:case Tm.name:case Em.name:case Sm.name:case ym.name:case _m.name:case xm.name:case bm.name:case Rm.name:case Am.name:case km.name:case Um.name:case Cm.name:case vm.name:case Om.name:return"function";default:return null}}r(EO,"mapTokenToType");var ae=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Lm=u("security",{longer_alt:ae,categories:[ae]}),Nm=u("check_password",{longer_alt:ae,categories:[ae]}),Mm=u("create_password",{longer_alt:ae,categories:[ae]}),wm=u("create_uuid",{longer_alt:ae,categories:[ae]}),Fm=u("create_auth_token",{longer_alt:ae,categories:[ae]}),Im=u("create_curve_key",{longer_alt:ae,categories:[ae]}),Pm=u("create_rsa_key",{longer_alt:ae,categories:[ae]}),Dm=u("create_secret_key",{longer_alt:ae,categories:[ae]}),qm=u("decrypt",{llt:ae,categories:[ae]}),Bm=u("encrypt",{llt:ae,categories:[ae]}),SO=u("generate_pass",{longer_alt:ae,categories:[ae]}),yO=u("generate_uuid",{longer_alt:ae,categories:[ae]}),Gm=u("jwe_decode",{longer_alt:ae,categories:[ae]}),jm=u("jwe_encode",{longer_alt:ae,categories:[ae]}),Vm=u("jws_decode",{longer_alt:ae,categories:[ae]}),Wm=u("jws_encode",{longer_alt:ae,categories:[ae]}),zm=u("random_bytes",{longer_alt:ae,categories:[ae]}),Hm=u("random_number",{longer_alt:ae,categories:[ae]}),_O=[Nm,Mm,wm,Fm,Im,Pm,Dm,qm,Bm,SO,yO,Gm,jm,Vm,Wm,zm,Hm,Lm];function xO(e){switch(e){case Lm.name:case Nm.name:case Mm.name:case wm.name:case Fm.name:case Im.name:case Pm.name:case Dm.name:case qm.name:case Bm.name:case SO.name:case yO.name:case Gm.name:case jm.name:case Vm.name:case Wm.name:case zm.name:case Hm.name:return"function";default:return null}}r(xO,"mapTokenToType");var qt=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Ym=u("storage",{longer_alt:qt,categories:[qt]}),Km=u("create_image",{longer_alt:qt,categories:[qt]}),Jm=u("create_attachment",{longer_alt:qt,categories:[qt]}),Qm=u("read_file_resource",{longer_alt:qt,categories:[qt]}),Xm=u("create_file_resource",{longer_alt:qt,categories:[qt]}),bO=u("read_file",{longer_alt:qt,categories:[qt]}),Zm=u("delete_file",{longer_alt:qt,categories:[qt]}),$m=u("sign_private_url",{longer_alt:qt,categories:[qt]}),RO=[Ym,Km,Jm,Qm,Xm,bO,Zm,$m];function AO(e){switch(e){case Ym.name:case Km.name:case Jm.name:case Qm.name:case Xm.name:case bO.name:case Zm.name:case $m.name:return"function";default:return null}}r(AO,"mapTokenToType");var ro=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),eh=u("stream",{longer_alt:ro,categories:[ro]}),th=u("from_csv",{longer_alt:ro,categories:[ro]}),rh=u("from_jsonl",{longer_alt:ro,categories:[ro]}),nh=u("from_request",{longer_alt:ro,categories:[ro]}),kO=[eh,th,rh,nh];function UO(e){switch(e){case eh.name:case th.name:case rh.name:case nh.name:return"function";default:return null}}r(UO,"mapTokenToType");var CO=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),no=u("table",{longer_alt:CO,categories:[CO]}),vO=[no];function OO(e){switch(e){case no.name:return"keyword";default:return null}}r(OO,"mapTokenToType");var oo=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),oh=u("actions",{longer_alt:oo,categories:[oo]}),ih=u("active",{longer_alt:oo,categories:[oo]}),ah=u("datasources",{longer_alt:oo,categories:[oo]}),sh=u("table_trigger",{longer_alt:oo,categories:[oo]}),LO=[oh,ih,ah,sh];function NO(e){switch(e){case oh.name:case sh.name:return"keyword";case ih.name:case ah.name:return"variable";default:return null}}r(NO,"mapTokenToType");var Bt=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),ch=u("call",{longer_alt:Bt,categories:[Bt]}),lh=u("datasource",{longer_alt:Bt,categories:[Bt]}),uh=u("ends_on",{longer_alt:Bt,categories:[Bt]}),dh=u("events",{longer_alt:Bt,categories:[Bt]}),ph=u("freq",{longer_alt:Bt,categories:[Bt]}),fh=u("schedule",{longer_alt:Bt,categories:[Bt]}),pc=u("starts_on",{longer_alt:Bt,categories:[Bt]}),Ma=u("task",{longer_alt:Bt,categories:[Bt]}),MO=[ch,lh,uh,dh,ph,fh,pc,Ma];function wO(e){switch(e){case lh.name:case fh.name:case Ma.name:return"keyword";case uh.name:case dh.name:case ph.name:case pc.name:return"variable";case ch.name:return"function";default:return null}}r(wO,"mapTokenToType");var Ie=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),FO=u("text",{longer_alt:Ie,categories:[Ie]}),mh=u("append",{longer_alt:Ie,categories:[Ie]}),hh=u("contains",{longer_alt:Ie,categories:[Ie]}),gh=u("ends_with",{longer_alt:Ie,categories:[Ie]}),Th=u("icontains",{longer_alt:Ie,categories:[Ie]}),Eh=u("iends_with",{longer_alt:Ie,categories:[Ie]}),Sh=u("istarts_with",{longer_alt:Ie,categories:[Ie]}),yh=u("ltrim",{longer_alt:Ie,categories:[Ie]}),_h=u("prepend",{longer_alt:Ie,categories:[Ie]}),xh=u("rtrim",{longer_alt:Ie,categories:[Ie]}),bh=u("starts_with",{longer_alt:Ie,categories:[Ie]}),Rh=u("trim",{longer_alt:Ie,categories:[Ie]}),IO=[FO,mh,hh,gh,Th,Eh,Sh,yh,_h,xh,bh,Rh];function PO(e){switch(e){case FO.name:return"namespace";case mh.name:case hh.name:case gh.name:case Th.name:case Eh.name:case Sh.name:case yh.name:case _h.name:case xh.name:case bh.name:case Rh.name:return"method";default:return null}}r(PO,"mapTokenToType");var Pe=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Ah=u("util",{longer_alt:Pe,categories:[Pe]}),kh=u("geo_distance",{longer_alt:Pe,categories:[Pe]}),Uh=u("get_all_input",{longer_alt:Pe,categories:[Pe]}),Ch=u("template_engine",{longer_alt:Pe,categories:[Pe]}),vh=u("get_env",{longer_alt:Pe,categories:[Pe]}),Oh=u("get_input",{longer_alt:Pe,categories:[Pe]}),Lh=u("get_vars",{longer_alt:Pe,categories:[Pe]}),Nh=u("ip_lookup",{longer_alt:Pe,categories:[Pe]}),Mh=u("post_process",{longer_alt:Pe,categories:[Pe]}),wh=u("precondition",{longer_alt:Pe,categories:[Pe]}),Fh=u("set_header",{longer_alt:Pe,categories:[Pe]}),Ih=u("sleep",{longer_alt:Pe,categories:[Pe]}),DO=[Ah,Ch,kh,Uh,vh,Oh,Lh,Nh,Mh,wh,Fh,Ih];function qO(e){switch(e){case Ah.name:case kh.name:case Uh.name:case vh.name:case Oh.name:case Lh.name:case Nh.name:case Mh.name:case wh.name:case Fh.name:case Ih.name:case Ch.name:return"function";default:return null}}r(qO,"mapTokenToType");var Ph=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Dh=u("var",{longer_alt:Ph,categories:[Ph]}),qh=u("update",{longer_alt:Ph,categories:[Ph]}),BO=[Dh,qh];function GO(e){switch(e){case Dh.name:case qh.name:return"function";default:return null}}r(GO,"mapTokenToType");var bt=x({name:"ShortFormVariable",pattern:/(\$[a-zA-Z]\w*)|(\$\$)/,label:"$"}),io=x({name:"ResponseVariable",pattern:/\$response/,label:"$response",categories:[bt],longer_alt:bt}),ao=x({name:"LongFormVariable",pattern:/\$var/,label:"$var",longer_alt:bt}),jO=x({name:"$this",pattern:/\$this/,longer_alt:bt,categories:[bt]}),Bh=x({name:"InputVariable",pattern:/\$input/,longer_alt:bt}),Gh=x({name:"EnvVariable",pattern:/\$env/,label:"$env",longer_alt:bt}),jh=x({name:"AuthVariable",pattern:/\$auth/,label:"$auth",longer_alt:bt}),Vh=x({name:"$remote_ip",pattern:/\$remote_ip/}),Wh=x({name:"$remote_port",pattern:/\$remote_port/}),zh=x({name:"$remote_user",pattern:/\$remote_user/}),Hh=x({name:"$remote_passwd",pattern:/\$remote_passwd/}),Yh=x({name:"$remote_host",pattern:/\$remote_host/}),Kh=x({name:"$request_method",pattern:/\$request_method/}),VO=[io,jO,ao,Bh,Gh,jh,Vh,Wh,zh,Hh,Yh,Kh,bt];function WO(e){switch(e){case Bh.name:case Gh.name:case jh.name:case Vh.name:case Wh.name:case zh.name:case Hh.name:case Yh.name:case Kh.name:case io.name:case ao.name:return"enumMember";case jO.name:case bt.name:return"variable";default:return null}}r(WO,"mapTokenToType");var Jh=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),wa=u("datasource",{longer_alt:Jh,categories:[Jh]}),Qh=u("workflow_test",{longer_alt:Jh,categories:[Jh]}),zO=[wa,Qh];function HO(e){switch(e){case Qh.name:return"keyword";case wa.name:return"variable";default:return null}}r(HO,"mapTokenToType");var so=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Xh=u("acceptance",{longer_alt:so,categories:[so]}),Zh=u("preferences",{longer_alt:so,categories:[so]}),$h=u("realtime",{longer_alt:so,categories:[so]}),eg=u("workspace",{longer_alt:so,categories:[so]}),YO=[Xh,Zh,$h,eg];function KO(e){switch(e){case Xh.name:case Zh.name:case $h.name:case eg.name:return"keyword";default:return null}}r(KO,"mapTokenToType");var Fa=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),tg=u("actions",{longer_alt:Fa,categories:[Fa]}),rg=u("active",{longer_alt:Fa,categories:[Fa]}),ng=u("workspace_trigger",{longer_alt:Fa,categories:[Fa]}),JO=[tg,rg,ng];function QO(e){switch(e){case tg.name:case ng.name:return"keyword";case rg.name:return"variable";default:return null}}r(QO,"mapTokenToType");var Rr=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),og=u("zip",{longer_alt:Rr,categories:[Rr]}),ig=u("add_to_archive",{longer_alt:Rr,categories:[Rr]}),ag=u("create_archive",{longer_alt:Rr,categories:[Rr]}),sg=u("delete_from_archive",{longer_alt:Rr,categories:[Rr]}),cg=u("extract",{longer_alt:Rr,categories:[Rr]}),lg=u("view_contents",{longer_alt:Rr,categories:[Rr]}),XO=[og,ig,ag,sg,cg,lg];function ZO(e){switch(e){case og.name:case ig.name:case ag.name:case sg.name:case cg.name:case lg.name:return"function"}}r(ZO,"mapTokenToType");var E=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),w=x({name:"Dot",pattern:/\./,label:"."}),ug=u("tags",{longer_alt:E,categories:[E]}),co=u("now",{longer_alt:E}),lo=u("null",{longer_alt:E}),dg=x({name:"RegExpToken",label:"regexp",pattern:/\/(?:[^/\n\\]|\\.)+\//}),ar=x({name:"StaticPathToken",label:"static_path",pattern:/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)+/}),Ia=x({name:"DynamicPath",label:"dynamic_path",pattern:/(([a-zA-Z]\w*)|(\{[a-zA-Z]\w*\}))((\/[a-zA-Z]\w*)|(\/\{[a-zA-Z]\w*\}))+/}),$O=x({name:"WhiteSpace",pattern:/[ \t]+/,group:Ve.SKIPPED,label:"whitespace"}),p=x({name:"NewlineToken",pattern:/(\r?\n)/}),pg=u("type",{longer_alt:E,categories:[E]}),eL=u("field",{longer_alt:E,categories:[E]}),Ze=u("true",{longer_alt:E}),$e=u("false",{longer_alt:E}),Pa=u("input",{longer_alt:E,categories:[E]}),fg=u("stack",{longer_alt:E,categories:[E]}),mg=u("test",{longer_alt:E,categories:[E]}),hg=u("response",{longer_alt:E,categories:[E]}),gg=u("view",{longer_alt:E,categories:[E]}),Tg=u("middleware",{longer_alt:E,categories:[E]}),tL=u("return_aggregate",{pattern:/return_aggregate/}),Da=u("auth",{longer_alt:E,categories:[E]}),rL=u("security",{longer_alt:E,categories:[E]}),Eg=u("history",{longer_alt:E,categories:[E]}),Sg=u("cache",{longer_alt:E,categories:[E]}),nL=u("guid",{longer_alt:E,categories:[E]}),yg=u("schema",{longer_alt:E,categories:[E]}),_g=u("index",{longer_alt:E,categories:[E]}),xg=u("values",{longer_alt:E,categories:[E]}),bg=u("value",{longer_alt:E,categories:[E]}),Rg=u("sensitive",{longer_alt:E,categories:[E]}),qa=u("description",{longer_alt:E,categories:[E]}),Ba=u("disabled",{longer_alt:E,categories:[E]}),Ag=u("mock",{longer_alt:E,categories:[E]}),kg=u("docs",{longer_alt:E,categories:[E]}),Ug=x({name:"DbIdentifier",label:"db.identifier",pattern:/dbo=\d+/}),fc=x({name:"JsonInToken",pattern:/in/,label:"in",longer_alt:E,categories:[E]}),mc=Qn([$O,p,...Fv,...cO,ar,Ia,dg,_g,Pa,tL,...Ev,...oO,...rO,...hO,...Mv,...fO,...Qv,...rv,...Ad,Ug,xg,bg,Ze,$e,pg,eL,Da,nL,Rg,ug,qa,kg,Ba,Ag,yg,fg,mg,Tg,...aO,hg,lo,co,Eg,Sg,rL,...RO,...XO,...Kv,..._O,...DO,...LO,...JO,...MO,...zO,...Hv,...Av,...bv,...VO,...Uv,...vO,...Lv,...qv,...TO,...IO,...uO,...kO,...Gv,...Vv,...BO,...Zv,...yv,...gv,...eO,...mv,...vv,...YO,gg,fc,w,E]),IW=[hv,_v,Tv,Sv,kv,Rv,Cv,Ov,pv,Nv,wv,Iv,nv,Bv,jv,Wv,Yv,Jv,Xv,$v,nO,iO,sO,lO,dO,mO,gO,EO,xO,AO,UO,OO,NO,wO,PO,tO,qO,GO,WO,HO,KO,QO,ZO];function Cg(e){for(let t of IW){let n=t(e);if(n)return n}switch(e){case Sg.name:case Eg.name:case _g.name:case Pa.name:case Tg.name:case Ag.name:case hg.name:case gg.name:case yg.name:case rL.name:case fg.name:case mg.name:return"keyword";case Da.name:case Ug.name:case tL.name:case qa.name:case Ba.name:case kg.name:case Ia.name:case eL.name:case nL.name:case Rg.name:case ar.name:case ug.name:case pg.name:case bg.name:case xg.name:return"variable";case E.name:return"property";case $e.name:case co.name:case lo.name:case Ze.name:return"enumMember";case w.name:return"punctuation";case dg.name:return"regexp";case fc.name:return"operator";case p.name:case $O.name:return null;default:return}}r(Cg,"mapTokenToType");var PW=new Ve(mc),DW=new Ve([...BS(mc,br),xy]);function uo(e,t=!1){return t?DW.tokenize(e):PW.tokenize(e)}r(uo,"lexDocument");var Ar=class{static{r(this,"HoverMessageProvider")}constructor(){this.message="",this.range=null}isMatch(t,n,o){return!1}render(t,n,o){return this.message}};var Ga=class extends Ar{static{r(this,"FilterMessageProvider")}constructor(t){super(),this.parseFilters(t)}parseFilters(t){this.__filterDoc={};let n=[],o="";for(let i of t.split(`
`))if(i.startsWith("#")){if(o&&(this.__filterDoc[o]=n.join(`
`)),o=i.slice(1).trim(),o.startsWith("!")){let[a,s]=o.slice(1).split(":").map(c=>c.trim()).filter(c=>c);s&&(this.__filterDoc[a]=`\`${a}\` is deprecated, use \`${s}\` instead.`),o=""}n=[]}else n.push(i)}findFilter(t,n){let o=n[t];if(!(o.tokenType.name==="Identifier"||o.tokenType.LONGER_ALT&&o.tokenType.LONGER_ALT.name==="Identifier"||o.tokenType.CATEGORIES&&o.tokenType.CATEGORIES.some(s=>s.name==="Identifier")))return null;let a=o.image;return this.__filterDoc[a]?a:null}isMatch(t,n,o){return t===0||n[t-1].image!=="|"?!1:!!this.findFilter(t,n)}render(t,n){let o=this.findFilter(t,n);if(o)return this.__filterDoc[o]}};var by=["keyword","namespace","variable","singleString","doubleString","tripleString","method","macro","tripleMacro","property","operator","operator.openingCurly","operator.closingCurly","operator.openingSquare","operator.closingSquare","operator.openingParenthesis","operator.closingParenthesis","function","comment","type","punctuation","regexp","enumMember","number","boolean","bracket"],qW=by.reduce((e,t,n)=>(e[t]=n,e),{});function hc(e){return qW[e]}r(hc,"encodeTokenType");var vg=["deg2rad","rad2deg","number_format","sin","asin","asinh","cos","acos","acosh","tan","atan","atanh","floor","ceil","round","first","last","count","range","reverse","unique","safe_array","flatten","filter_empty","sort","shuffle","diff","diff_assoc","intersect","intersect_assoc","merge","merge_recursive","index_by","push","pop","unshift","shift","remove","append","prepend","abs","sqrt","exp","log","log10","ln","pow","array_min","min","array_max","max","sum","avg","product","equals","not_equals","greater_than","greater_than_or_equal","less_than","less_than_or_equal","odd","even","in","add","subtract","multiply","modulus","divide","bitwise_and","bitwise_or","bitwise_xor","not","bitwise_not","is_null","is_empty","is_object","is_array","is_int","is_decimal","is_bool","is_text","addslashes","escape","list_encodings","detect_encoding","to_utf8","from_utf8","convert_encoding","to_lower","to_upper","trim","ltrim","rtrim","capitalize","substr","split","join","slice","strlen","strip_html","unaccent","index","iindex","starts_with","istarts_with","ends_with","iends_with","contains","icontains","set","set_conditional","set_ifnotempty","set_ifnotnull","first_notnull","first_notempty","unset","transform","get","has","fill","fill_keys","keys","values","entries","to_expr","to_text","to_int","to_decimal","to_bool","to_timestamp","to_ms","to_seconds","to_minutes","to_hours","to_days","create_object","create_object_from_entries","json_decode","json_encode","xml_decode","csv_parse","csv_decode","csv_encode","csv_create","url_decode","url_decode_rfc3986","url_encode","url_encode_rfc3986","url_addarg","url_delarg","url_hasarg","url_getarg","url_parse","querystring_parse","yaml_decode","yaml_encode","hex2bin","bin2hex","dechex","hexdec","decbin","bindec","decoct","octdec","base_convert","base64_decode","base64_encode","base64_decode_urlsafe","base64_encode_urlsafe","encrypt","decrypt","jws_encode","jws_decode","jwe_encode","jwe_decode","concat","sprintf","replace","secureid_encode","secureid_decode","md5","sha1","sha256","sha384","sha512","hmac_md5","hmac_sha1","hmac_sha256","hmac_sha384","hmac_sha512","create_uid","uuid","parse_timestamp","format_timestamp","transform_timestamp","add_secs_to_timestamp","add_ms_to_timestamp","regex_matches","regex_get_first_match","regex_get_all_matches","regex_quote","regex_replace","map","filter","filter_null","filter_empty_text","filter_empty_object","filter_empty_array","some","every","find","findIndex","reduce","pick","unpick"],Ry={text:["trim","min","max","startsWith","prevent","lower","upper","alphaOk","digitOk","ok","pattern"],decimal:["min","max"],int:["min","max"],email:["trim","lower"],password:["min","max","minAlpha","minLowerAlpha","minUpperAlpha","minDigit","minSymbol"],blob:[],blob_img:[],blob_video:[],blob_audio:[],enum:[],file:[],json:[],obj:[],epochms:[]},oL=["covers","l1_distance_manhattan","l2_distance_euclidean","inner_product","negative_inner_product","cosine_distance","cosine_similarity","distance","within","between","length","floor","ceil","round","to_lower","to_upper","concat","substr","coalesce","unaccent","add","sub","mul","div","search_rank","timestamp_month","timestamp_year","timestamp_week","timestamp_hour","timestamp_minute","timestamp_day_of_month","timestamp_day_of_week","timestamp_day_of_year","timestamp_epoch_day","timestamp_epoch_hour","timestamp_epoch_minute","timestamp_epoch_sec","timestamp_add_seconds","timestamp_subtract_seconds","timestamp_add_minutes","timestamp_subtract_minutes","timestamp_add_hours","timestamp_subtract_hours","timestamp_add_days","timestamp_subtract_days","timestamp_add_months","timestamp_subtract_months","timestamp_add_years","timestamp_subtract_years"];function iL(e){return()=>{let t=!1,n=!1,o=!1,i=!1;e.sectionStack.push("addonDeclaration");let a=e.CONSUME(kd);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),n||e.addMissingError(a,"{} is missing an input clause"),o||e.addMissingError(a,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(iL,"addonDeclaration");var Te=r(e=>e?e.tokenType===U?e.image.slice(1,-1):e.image:"","getVarName");function aL(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1;e.sectionStack.push("agentDeclaration");let d=e.CONSUME(Ud);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.canonicalClause)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0;let f=e.CONSUME(Cd);e.CONSUME(b);let g={anthropic:["type","max_steps","model","temperature","headers"],"google-genai":["type","max_steps","model","temperature","headers","search_grounding","include_thoughts"],openai:["type","max_steps","model","temperature","reasoning_effort"],xano_free:["type","max_steps","temperature","search_grounding"]},_={anthropic:[...g.anthropic,"system_prompt","prompt","messages","api_key","reasoning","thinking_tokens","baseURL"],"google-genai":[...g["google-genai"],"system_prompt","prompt","messages","api_key","thinking_tokens","baseURL","safety_settings","dynamic_retrival","reasoning"],openai:[...g.openai,"system_prompt","prompt","messages","api_key","baseURL","headers","organization","project","compatibility"],"xano-free":[...g.xano_free,"system_prompt","prompt","messages","baseURL","headers","safety_settings","dynamic_retrival","thinking_tokens","include_thoughts"]},y={};e.SUBRULE(e.schemaParseObjectFn,{ARGS:[f,{type:["anthropic","google-genai","openai","xano-free"],max_steps:"[number]","prompt?":"[string]","messages?":"[string]","api_key?":"[string]","baseURL?":"[string]","compatibility?":["strict","compatible",""],"dynamic_retrival?":["enabled","disabled",""],"headers?":"[string]","include_thoughts?":"[boolean]","model?":"[string]","organization?":"[string]","project?":"[string]","reasoning_effort?":"[string]","reasoning?":"[boolean]","safety_settings?":"[string]","search_grounding?":"[boolean]","system_prompt?":"[string]","temperature?":"[number]","thinking_tokens?":"[number]"},y]}),e.ACTION(()=>{let M=Te(y.type?.value),L=g[M]||[];for(let C of L)Object.prototype.hasOwnProperty.call(y,C)||e.addMissingError(f,`llm of type "${M}" requires a "${C}" field`);let q=_[M]||[],N=[];for(let C in y){let P=Te(y[C].key);N.push(P),q.includes(P)||e.addIllegalAttributeError(y[C].key)}let S=N.includes("prompt"),h=N.includes("messages");S&&h?e.addIllegalAttributeError(y.messages.key,`llm of type "${M}" cannot have both "prompt" and "messages" fields`):!S&&!h&&e.addMissingError(f,`llm of type "${M}" requires either a "prompt" or "messages" field`)})},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.outputClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0;let f=e.CONSUME(vd);e.CONSUME2(b),e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[f,["name"],["active","auth"],{types:{active:"boolean",auth:"string",name:"string"}}]})},"ALT")}])}),t||e.addMissingError(d,"{} is missing canonical clause"),a||e.addMissingError(d,"{} is missing llm clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(aL,"agentDeclaration");function sL(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1,f=!1;e.sectionStack.push("agentTriggerDeclaration");let g=e.CONSUME(Nd);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let _=e.CONSUME(Od);e.CONSUME(b),e.SUBRULE(e.objectAttrReq,{ARGS:[_,["connection"],[],{types:{connection:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(Ld),e.CONSUME2(b),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.agentClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!f,"GATE"),ALT:r(()=>{f=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),o||e.addMissingError(g,"{} is missing agent clause"),c||e.addMissingError(g,"{} is missing an input clause"),d||e.addMissingError(g,"{} is missing a stack clause"),l||e.addMissingError(g,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(sL,"agentTriggerDeclaration");function cL(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1;e.sectionStack.push("apiGroupDeclaration");let d=e.CONSUME(Hd);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(Ji),e.CONSUME1(b),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(Yd),e.CONSUME2(b),e.CONSUME2(U)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0;let f=e.CONSUME(Kd);e.CONSUME3(b),e.SUBRULE(e.objectAttrReq,{ARGS:[f,[],["mode","origins","methods","headers","credentials","max_age"],{types:{mode:"string",origins:r(g=>g.SUBRULE(g.arrayOfStringLiterals),"origins"),methods:r(g=>g.SUBRULE1(g.arrayOfStringLiterals),"methods"),headers:r(g=>g.SUBRULE2(g.arrayOfStringLiterals),"headers"),credentials:"boolean",max_age:"number"}}]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0;let f=e.CONSUME(Jd);e.CONSUME4(b),e.SUBRULE2(e.objectAttrReq,{ARGS:[f,[],["active","token"],{active:"boolean",token:"string"}]})},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),n||e.addMissingError(d,"{} is missing a canonical field"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(cL,"apiGroupDeclaration");function lL(e){return()=>{e.sectionStack.push("columnDefaultValueAttribute"),e.CONSUME(b),e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(vt),"ALT")},{ALT:r(()=>e.CONSUME(Le),"ALT")},{ALT:r(()=>e.CONSUME(Ze),"ALT")},{ALT:r(()=>e.CONSUME($e),"ALT")},{ALT:r(()=>e.CONSUME(co),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]),e.sectionStack.pop()}}r(lL,"columnDefaultValueAttribute");function uL(e){return()=>{e.sectionStack.push("descriptionFieldAttribute"),e.CONSUME(qa),e.CONSUME(b),e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(Dt),"ALT")}]),e.sectionStack.pop()}}r(uL,"descriptionFieldAttribute");function dL(e){return()=>{e.sectionStack.push("disabledFieldAttribute"),e.CONSUME(Ba),e.CONSUME(b),e.OR([{ALT:r(()=>e.CONSUME(Ze),"ALT")},{ALT:r(()=>e.CONSUME($e),"ALT")}]),e.sectionStack.pop()}}r(dL,"disabledFieldAttribute");function pL(e){return()=>{e.sectionStack.push("docsFieldAttribute"),e.CONSUME(kg),e.CONSUME(b),e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(Dt),"ALT")}]),e.sectionStack.pop()}}r(pL,"docsFieldAttribute");function fL(e){return t=>{e.sectionStack.push("inputFilterFn"),e.OR([{ALT:r(()=>{e.OPTION(()=>e.CONSUME(br));let n=e.CONSUME(E);e.MANY1(()=>{e.CONSUME1(pe),e.OR2([{ALT:r(()=>e.CONSUME2(E),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")},{ALT:r(()=>e.CONSUME1(dg),"ALT")},{ALT:r(()=>e.CONSUME1(Le),"ALT")},{ALT:r(()=>e.CONSUME1(vt),"ALT")},{ALT:r(()=>e.CONSUME1($e),"ALT")},{ALT:r(()=>e.CONSUME1(Ze),"ALT")}])}),t&&Ry[t.image]&&!Ry[t.image].includes(n.image)&&e.addInvalidValueError(n,`Filter '${n.image}' cannot be applied to input of type '${t}'`)},"ALT")},{ALT:r(()=>{e.CONSUME(kf),e.CONSUME2(pe),e.CONSUME(Ug)},"ALT")}]),e.sectionStack.pop()}}r(fL,"inputFilterFn");var mL=r(e=>()=>{e.sectionStack.push("sensitiveFieldAttribute"),e.CONSUME(Rg),e.CONSUME(b),e.OR([{ALT:r(()=>e.CONSUME(Ze),"ALT")},{ALT:r(()=>e.CONSUME($e),"ALT")}]),e.sectionStack.pop()},"sensitiveFieldAttribute");function hL(e){return()=>{e.sectionStack.push("valueFieldAttribute"),e.CONSUME(bg),e.CONSUME(b),e.SUBRULE(e.valueExpression,{ARGS:[{allowIdentifier:!1}]}),e.sectionStack.pop()}}r(hL,"valueFieldAttribute");function gL(e){return()=>{e.sectionStack.push("valuesFieldAttribute"),e.CONSUME(xg),e.CONSUME(b),e.SUBRULE(e.stringArray),e.sectionStack.pop()}}r(gL,"valuesFieldAttribute");var TL=r(e=>{e.columnDefaultValueAttribute=e.RULE("columnDefaultValueAttribute",lL(e)),e.descriptionFieldAttribute=e.RULE("descriptionFieldAttribute",uL(e)),e.disabledFieldAttribute=e.RULE("disabledFieldAttribute",dL(e)),e.docsFieldAttribute=e.RULE("docsFieldAttribute",pL(e)),e.inputFilterFn=e.RULE("inputFilterFn",fL(e)),e.sensitiveFieldAttribute=e.RULE("sensitiveFieldAttribute",mL(e)),e.valueFieldAttribute=e.RULE("valueFieldAttribute",hL(e)),e.valuesFieldAttribute=e.RULE("valuesFieldAttribute",gL(e))},"register");function EL(e){return()=>{let t=!1,n=!1,o=!1;e.sectionStack.push("branchDeclaration"),e.CONSUME(lp),e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(up),e.CONSUME(b),e.CONSUME2(U)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.middlewareClause)},"ALT")}])}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(EL,"branchDeclaration");var SL=r(e=>()=>{e.sectionStack.push("agentClause");let t=e.CONSUME(Zp);e.CONSUME(b),e.CONSUME(U).image==='""'&&e.addMissingError(t,"agent cannot be empty"),e.sectionStack.pop()},"agentClause");var yL=r(e=>()=>{e.sectionStack.push("authClause"),e.CONSUME(Da),e.CONSUME(b),e.OR([{ALT:r(()=>e.CONSUME(Ze),"ALT")},{ALT:r(()=>e.CONSUME($e),"ALT")}]),e.sectionStack.pop()},"authClause");function _L(e){return()=>{e.sectionStack.push("cacheClause");let t=e.CONSUME(Sg);e.CONSUME(b),e.SUBRULE(e.objectAttrReq,{ARGS:[t,["ttl","input","auth","datasource","ip"],["headers","env"],{types:{ttl:"number",input:"boolean",auth:"boolean",datasource:"boolean",ip:"boolean"}}]}),e.sectionStack.pop()}}r(_L,"cacheClause");var xL=r(e=>()=>{e.sectionStack.push("canonicalClause");let t=e.CONSUME(tf);e.CONSUME(b),e.CONSUME(U).image==='""'&&e.addMissingError(t,"canonical cannot be empty"),e.sectionStack.pop()},"canonicalClause");var bL=r(e=>()=>{e.sectionStack.push("channelClause");let t=e.CONSUME(ef);e.CONSUME(b),e.CONSUME(U).image==='""'&&e.addMissingError(t,"channel cannot be empty"),e.sectionStack.pop()},"channelClause");var RL=r(e=>()=>{e.sectionStack.push("dbTableClause");let t=e.CONSUME(no);e.CONSUME(b),e.CONSUME(U).image==='""'&&e.addMissingError(t,"table cannot be empty"),e.sectionStack.pop()},"dbTableClause");function AL(e){return t=>{let n=t?.[0]||E,o=t?.[1]??!0;e.sectionStack.push(n.name+"Clause"),e.CONSUME(n),e.CONSUME(b);let i=e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(Dt),"ALT")}]);o||i.image==='""'&&e.addMissingError(i,"value cannot be empty"),e.sectionStack.pop()}}r(AL,"flexibleStringClause");function kL(e){return()=>{e.sectionStack.push("historyClause");let t=e.CONSUME(Eg);e.CONSUME(b),e.SUBRULE(e.schemaParseEnumFn,{ARGS:[t,[!1,"inherit",0,100,1e3,1e4,"all"]]}),e.sectionStack.pop()}}r(kL,"historyClause");function UL(e){return()=>{e.sectionStack.push("indexClause");let t=e.CONSUME(_g);e.CONSUME(b),e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[t,["type","field"],["name"],{types:{type:"string"}}]}),e.sectionStack.pop()}}r(UL,"indexClause");function CL(e){return()=>{e.sectionStack.push("inputClause"),e.CONSUME(Pa),e.OPTION(()=>{e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.objectColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.enumColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.columnDefinition,{ARGS:[{include_file:!0}]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbLinkColumnDefinition),"ALT")}])}),e.AT_LEAST_ONE2(()=>e.CONSUME2(p)),e.CONSUME(k)}),e.sectionStack.pop()}}r(CL,"inputClause");var vL=r(e=>()=>{e.sectionStack.push("mcpServerClause");let t=e.CONSUME($p);e.CONSUME(b),e.CONSUME(U).image==='""'&&e.addMissingError(t,"mcp_server cannot be empty"),e.sectionStack.pop()},"mcpServerClause");function OL(e){return()=>{e.sectionStack.push("middlewareClause");let t=e.CONSUME(Tg);e.CONSUME(b),e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,{"pre?":[{name:"[string]","active?":"[boolean]","required?":"[boolean]"}],"post?":[{name:"[string]","active?":"[boolean]","required?":"[boolean]"}]}]}),e.sectionStack.pop()}}r(OL,"middlewareClause");var Ay={allowExpectStatements:!1,allowCallStatements:!1};function LL(e){return(t={})=>{t={...Ay,...t},e.sectionStack.push("nakedStackFn"),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.OPTION(()=>e.CONSUME(br)),e.OR([{ALT:r(()=>e.CONSUME(rf),"ALT")},{ALT:r(()=>e.SUBRULE(e.aiFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.varFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.mathFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.textFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.preconditionFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.objectFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiFn,{ARGS:[t]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.controlFn,{ARGS:[t]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.debugFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.streamFn),"ALT")},{GATE:r(()=>t.allowExpectStatements,"GATE"),ALT:r(()=>e.SUBRULE(e.workflowExpectFn),"ALT")}])}),e.AT_LEAST_ONE2(()=>e.CONSUME2(p)),e.CONSUME(k),e.sectionStack.pop()}}r(LL,"nakedStackFn");function NL(e){return()=>{e.sectionStack.push("outputClause"),e.CONSUME(La),e.OPTION(()=>{e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.objectColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.enumColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.columnDefinition,{ARGS:[{include_file:!1}]}),"ALT")}])}),e.AT_LEAST_ONE2(()=>e.CONSUME2(p)),e.CONSUME(k)}),e.sectionStack.pop()}}r(NL,"outputClause");function ML(e){return()=>{e.sectionStack.push("responseClause"),e.CONSUME(hg),e.CONSUME(b),e.SUBRULE(e.valueExpression),e.sectionStack.pop()}}r(ML,"responseClause");function wL(e){return e.scheduleEventsValues=e.RULE("scheduleEventsValues",()=>{let t=!1,n=!0;e.CONSUME(A),e.AT_LEAST_ONE(()=>{e.MANY(()=>{n=!0,e.CONSUME(p)}),n||e.addMissingError(null,"Expected ',' or new line between attributes"),e.OR([{ALT:r(()=>{t=!0,e.CONSUME(pc),e.CONSUME(pe),e.CONSUME(_a)},"ALT")},{ALT:r(()=>{e.CONSUME(uh),e.CONSUME2(pe),e.CONSUME2(_a)},"ALT")},{ALT:r(()=>{e.CONSUME(ph),e.CONSUME3(pe),e.CONSUME(Le)},"ALT")}]),n=!1,e.OPTION1(()=>{e.CONSUME1(_e),n=!0})}),t||(e.CONSUME1(pc),e.CONSUME4(pe),e.CONSUME3(_a)),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k)}),()=>{e.sectionStack.push("scheduleClause"),e.CONSUME(fh),e.OPTION(()=>{e.CONSUME(A),e.MANY(()=>e.CONSUME(p)),e.CONSUME(dh),e.CONSUME(b),e.CONSUME(ze),e.MANY1(()=>{e.MANY2(()=>e.CONSUME1(p)),e.SUBRULE(e.scheduleEventsValues)}),e.MANY3(()=>e.CONSUME2(p)),e.CONSUME(He),e.MANY4(()=>e.CONSUME3(p)),e.CONSUME(k)}),e.sectionStack.pop()}}r(wL,"scheduleClause");var BW={include_file:!0,isTableSchema:!1};function FL(e){return(t={},n={})=>{t={...BW,...t},e.sectionStack.push("schemaClause");let o=e.CONSUME(yg);if(e.OPTION(()=>{e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.objectColumnDefinition,{ARGS:[n]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.enumColumnDefinition,{ARGS:[n]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.columnDefinition,{ARGS:[{include_file:t.include_file,isTableSchema:t.isTableSchema},n]}),"ALT")}])}),e.MANY1(()=>e.CONSUME2(p)),e.CONSUME(k)}),t.isTableSchema){let i=n.id;i?["int","uuid"].includes(i.typeToken.image)||e.addInvalidValueError(i.typeToken,'The "id" column can only be of type "int" or "uuid"'):e.addMissingError(o,"{} must have an 'id' of type uuid or int column defined")}e.sectionStack.pop()}}r(FL,"schemaClause");function IL(e){return(t={})=>{t={...Ay,...t},e.sectionStack.push("stackClause"),e.CONSUME(fg),e.OPTION(()=>e.SUBRULE(e.nakedStackFn,{ARGS:[t]})),e.sectionStack.pop()}}r(IL,"stackClause");function PL(e){return t=>{let n=!1,o=!1;t=t||[],e.sectionStack.push("testClause"),e.CONSUME(mg);let i=e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]);if(i&&i.image){let a=i.image.replaceAll('"',"");t.includes(a)&&e.addDuplicateNameError(i,"test"),t.push(i.image.replaceAll('"',""))}e.CONSUME(A),e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.MANY(()=>{e.OR1([{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(Pa),e.CONSUME(b),e.SUBRULE(e.objectWithAttributes)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.CONSUME(wa),e.CONSUME1(b),e.CONSUME1(U)},"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectFn),"ALT")}]),e.AT_LEAST_ONE1(()=>e.CONSUME1(p))}),e.CONSUME(k),e.sectionStack.pop()}}r(PL,"testClause");function DL(e){return()=>{e.sectionStack.push("viewClause");let t=e.CONSUME(gg);e.CONSUME(b),e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,{"[string]":{search:"[query]",sort:{"[string]":["asc","desc","rand"]},id:"[string]","alias?":"[string]"}}]}),e.sectionStack.pop()}}r(DL,"viewClause");var qL=r(e=>{e.agentClause=e.RULE("agentClause",SL(e)),e.authClause=e.RULE("authClause",yL(e)),e.cacheClause=e.RULE("cacheClause",_L(e)),e.canonicalClause=e.RULE("canonicalClause",xL(e)),e.channelClause=e.RULE("channelClause",bL(e)),e.dbTableClause=e.RULE("dbTableClause",RL(e)),e.flexibleStringClause=e.RULE("flexibleStringClause",AL(e)),e.historyClause=e.RULE("historyClause",kL(e)),e.indexClause=e.RULE("indexClause",UL(e)),e.inputClause=e.RULE("inputClause",CL(e)),e.outputClause=e.RULE("outputClause",NL(e)),e.mcpServerClause=e.RULE("mcpServerClause",vL(e)),e.middlewareClause=e.RULE("middlewareClause",OL(e)),e.nakedStackFn=e.RULE("nakedStackFn",LL(e)),e.responseClause=e.RULE("responseClause",ML(e)),e.scheduleClause=e.RULE("scheduleClause",wL(e)),e.schemaClause=e.RULE("schemaClause",FL(e)),e.stackClause=e.RULE("stackClause",IL(e)),e.testClause=e.RULE("testClause",PL(e)),e.viewClause=e.RULE("viewClause",DL(e))},"register");function BL(e){return()=>{e.sectionStack.push("arraySlice");let t=null,n=null;if(e.OR([{ALT:r(()=>{e.CONSUME(ze),e.CONSUME(He)},"ALT")},{ALT:r(()=>{e.CONSUME1(ze),t=e.CONSUME1(Le),e.CONSUME1(pe),e.OPTION(()=>n=e.CONSUME3(Le)),e.CONSUME1(He)},"ALT")},{ALT:r(()=>{e.CONSUME2(ze),e.CONSUME2(pe),n=e.CONSUME2(Le),e.CONSUME2(He)},"ALT")}]),t&&t.image.startsWith("-")&&e.addInvalidValueError(t,"Array slice start index cannot be negative"),n&&n.image.startsWith("-")&&e.addInvalidValueError(n,"Array slice end index cannot be negative"),t&&n){let o=parseInt(t.image,10);parseInt(n.image,10)<o&&e.addInvalidValueError(n,"Array slice end index cannot be less than start index")}e.sectionStack.pop()}}r(BL,"arraySlice");var GW={include_file:!1,isTableSchema:!1};function GL(e){return(t={},n={})=>{t={...GW,...t};let o=!1,i=!1,a=!1;e.sectionStack.push("columnDefinition");let s=e.OR([{ALT:r(()=>e.CONSUME(Cp),"ALT")},{ALT:r(()=>e.CONSUME(vp),"ALT")},{ALT:r(()=>e.CONSUME(Xi),"ALT")},{ALT:r(()=>e.CONSUME(Op),"ALT")},{ALT:r(()=>e.CONSUME(Lp),"ALT")},{ALT:r(()=>e.CONSUME(Mp),"ALT")},{ALT:r(()=>e.CONSUME(wp),"ALT")},{ALT:r(()=>e.CONSUME(Fp),"ALT")},{ALT:r(()=>e.CONSUME(Ip),"ALT")},{ALT:r(()=>e.CONSUME(Pp),"ALT")},{ALT:r(()=>e.CONSUME(Dp),"ALT")},{ALT:r(()=>e.CONSUME(Gp),"ALT")},{ALT:r(()=>e.CONSUME(jp),"ALT")},{ALT:r(()=>e.CONSUME(Vp),"ALT")},{ALT:r(()=>e.CONSUME(Wp),"ALT")},{ALT:r(()=>e.CONSUME(zp),"ALT")},{ALT:r(()=>e.CONSUME(Hp),"ALT")},{ALT:r(()=>e.CONSUME(Yp),"ALT")},{ALT:r(()=>e.CONSUME(Kp),"ALT")},{ALT:r(()=>e.CONSUME(Jp),"ALT")},{ALT:r(()=>e.CONSUME(Qp),"ALT")},{GATE:r(()=>!!t.include_file,"GATE"),ALT:r(()=>e.CONSUME(qp),"ALT")}]);e.OPTION1(()=>{i=!0,e.SUBRULE(e.arraySlice)}),e.OPTION2(()=>{o=!0,e.CONSUME(dr)});let c=e.CONSUME(E);e.OPTION6(()=>{a=!0,e.CONSUME1(dr)}),e.OPTION3(()=>e.SUBRULE(e.columnDefaultValueAttribute)),e.OPTION4(()=>e.SUBRULE(e.filterDefinition,{ARGS:[s]})),e.OPTION5(()=>e.SUBRULE(e.columnMetadataDefinition)),n[Te(c)]={typeToken:s,nameToken:c},e.addInput(c.image,s.image,i,o,a),e.sectionStack.pop()}}r(GL,"columnDefinition");function jL(e){return()=>{e.sectionStack.push("dbLinkColumnDefinition");let t=e.CONSUME(Xp);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{table:"[string]","override?":{"[string]":{hidden:"[boolean]"}}}]}),e.sectionStack.pop()}}r(jL,"dbLinkColumnDefinition");function VL(e){return(t={})=>{e.sectionStack.push("enumColumnDefinition");let n=e.CONSUME(Np),o=!1,i=!1,a=!1;e.OPTION1(()=>{o=!0,e.SUBRULE(e.arraySlice)}),e.OPTION2(()=>{i=!0,e.CONSUME(dr)});let s=e.CONSUME(E);t[Te(s)]={typeToken:n,nameToken:s},e.OPTION(()=>{a=!0,e.CONSUME1(dr)}),e.OPTION3(()=>e.SUBRULE(e.columnDefaultValueAttribute)),e.SUBRULE(e.enumColumnMetadataDefinition,{ARGS:[n]}),e.addInput(s.image,"enum",o,i,a),e.sectionStack.pop()}}r(VL,"enumColumnDefinition");function WL(e){return(t=null)=>{e.sectionStack.push("filterDefinition"),e.CONSUME(Af),e.CONSUME(b),e.AT_LEAST_ONE_SEP({SEP:Et,DEF:r(()=>e.SUBRULE(e.inputFilterFn,{ARGS:[t]}),"DEF")}),e.sectionStack.pop()}}r(WL,"filterDefinition");function zL(e){return(t={})=>{e.sectionStack.push("objectColumnDefinition");let n=e.CONSUME(Bp),o=!1,i=!1,a=!1;e.OPTION2(()=>{o=!0,e.SUBRULE(e.arraySlice)});let s=e.CONSUME(E);t[Te(s)]={typeToken:n,nameToken:s},e.OPTION(()=>{a=!0,e.CONSUME(dr)}),e.SUBRULE(e.objectColumnMetadataDefinition),e.addInput(s.image,"enum",o,i,a),e.sectionStack.pop()}}r(zL,"objectColumnDefinition");var HL=r(e=>{e.arraySlice=e.RULE("arraySlice",BL(e)),e.columnDefinition=e.RULE("columnDefinition",GL(e)),e.dbLinkColumnDefinition=e.RULE("dbLinkColumnDefinition",jL(e)),e.enumColumnDefinition=e.RULE("enumColumnDefinition",VL(e)),e.filterDefinition=e.RULE("filterDefinition",WL(e)),e.objectColumnDefinition=e.RULE("objectColumnDefinition",zL(e))},"register");function YL(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1,f=[];e.sectionStack.push("functionDeclaration");let g=e.CONSUME($n);e.OR([{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME(ar),"ALT")},{ALT:r(()=>e.CONSUME(U),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.cacheClause)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[f]})},"ALT")}])}),a||e.addMissingError(g,"{} is missing an input clause"),l||e.addMissingError(g,"{} is missing a stack clause"),c||e.addMissingError(g,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(YL,"functionDeclaration");function KL(e){return()=>{e.sectionStack.push("aiAgentRunFn");let t=e.CONSUME(Ki);e.OR({DEF:[{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME(U),"ALT")}],ERR_MSG:"Expected an agent name"}),e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{"args?":"[expression]","allow_tool_execution?":"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(KL,"aiAgentRunFn");function JL(e){return()=>{e.sectionStack.push("aiExternalMcpServerDetailsFn");let t=e.CONSUME(qd);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{url:"[expression]",bearer_token:"[expression]",connection_type:"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(JL,"aiExternalMcpServerDetailsFn");function QL(e){return()=>{e.sectionStack.push("aiExternalMcpToolListFn");let t=e.CONSUME(Dd);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{url:"[expression]",bearer_token:"[expression]",connection_type:"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(QL,"aiExternalMcpToolListFn");function XL(e){return()=>{e.sectionStack.push("aiExternalMcpToolRunFn");let t=e.CONSUME(Ki);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{url:"[expression]",bearer_token:"[expression]",connection_type:"[expression]",tool:"[expression]",args:"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(XL,"aiExternalMcpToolRunFn");var ZL=r(e=>{e.aiAgentRunFn=e.RULE("aiAgentRunFn",KL(e)),e.aiExternalMcpToolListFn=e.RULE("aiExternalMcpToolListFn",QL(e)),e.aiExternalMcpToolRunFn=e.RULE("aiExternalMcpToolRunFn",XL(e)),e.aiExternalMcpServerDetailsFn=e.RULE("aiExternalMcpServerDetailsFn",JL(e))},"register");function $L(e){return()=>{e.sectionStack.push("ai"),e.CONSUME(Md),e.CONSUME(w),e.OR([{ALT:r(()=>{e.CONSUME(wd),e.CONSUME1(w),e.SUBRULE(e.aiAgentRunFn)},"ALT")},{ALT:r(()=>{e.CONSUME(Fd),e.CONSUME2(w),e.CONSUME(Id),e.CONSUME3(w),e.OR1([{ALT:r(()=>e.SUBRULE(e.aiExternalMcpServerDetailsFn),"ALT")},{ALT:r(()=>{e.CONSUME(Pd),e.CONSUME4(w),e.OR2([{ALT:r(()=>e.SUBRULE(e.aiExternalMcpToolListFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.aiExternalMcpToolRunFn),"ALT")}])},"ALT")}])},"ALT")}]),e.sectionStack.pop()}}r($L,"aiFn");function eN(e){return()=>{e.sectionStack.push("apiCallFn");let t=e.CONSUME(jd);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME(Ia),"ALT")},{ALT:r(()=>e.CONSUME(ar),"ALT")}]),e.CONSUME(Aa),e.CONSUME(b),e.OR1([{ALT:r(()=>e.CONSUME(Oa),"ALT")},{ALT:r(()=>e.CONSUME(ka),"ALT")},{ALT:r(()=>e.CONSUME(Ua),"ALT")},{ALT:r(()=>e.CONSUME(Ca),"ALT")},{ALT:r(()=>e.CONSUME(va),"ALT")}]),e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{api_group:"[string]","description?":"[string]","disabled?":"[boolean]","headers?":"[expression]","input?":{"[string]":"[expression]"}}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(eN,"apiCallFn");function tN(e){let t=["code","timeout"],n=["description","disabled"];return()=>{e.sectionStack.push("apiLambdaFn");let o=e.CONSUME(zd);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(tN,"apiLambdaFn");function rN(e){let t=["channel","data","auth_table","auth_id"],n=["description","disabled"];return()=>{e.sectionStack.push("apiRealtimeEventFn");let o=e.CONSUME(Vd);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(rN,"apiRealtimeEventFn");function nN(e){let t=["url","method"],n=["description","disabled","params","headers","timeout","ca_certificate","certificate","certificate_pass","private_key"];return()=>{e.sectionStack.push("apiRequestFn");let o=e.CONSUME(Gd);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(nN,"apiRequestFn");function oN(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("apiStreamFn");let o=e.CONSUME(Wd);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(oN,"apiStreamFn");var iN=r(e=>{e.apiLambdaFn=e.RULE("apiLambdaFn",tN(e)),e.apiRealtimeEventFn=e.RULE("apiRealtimeEventFn",rN(e)),e.apiRequestFn=e.RULE("apiRequestFn",nN(e)),e.apiStreamFn=e.RULE("apiStreamFn",oN(e)),e.apiCallFn=e.RULE("apiCallFn",eN(e))},"register");function aN(e){return(t={})=>{e.sectionStack.push("api"),e.CONSUME(Bd),e.CONSUME(w),e.OR([{GATE:r(()=>t.allowCallStatements,"GATE"),ALT:r(()=>e.SUBRULE(e.apiCallFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiLambdaFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiRequestFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiRealtimeEventFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiStreamFn),"ALT")}]),e.sectionStack.pop()}}r(aN,"apiFn");function sN(e){return()=>{e.sectionStack.push("arrayEveryFn"),e.CONSUME(Xd),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(sN,"arrayEveryFn");function cN(e){return()=>{e.sectionStack.push("arrayFilterCountFn"),e.CONSUME(Zd),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(cN,"arrayFilterCountFn");function lN(e){return()=>{e.sectionStack.push("arrayFilterFn"),e.CONSUME($d),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(lN,"arrayFilterFn");function uN(e){return()=>{e.sectionStack.push("arrayFindFn"),e.CONSUME(ep),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(uN,"arrayFindFn");function dN(e){return()=>{e.sectionStack.push("arrayFindIndexFn"),e.CONSUME(tp),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(dN,"arrayFindIndexFn");function pN(e){return()=>{e.sectionStack.push("arrayHasFn"),e.CONSUME(rp),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(pN,"arrayHasFn");function fN(e){return()=>{e.sectionStack.push("arrayMergeFn"),e.CONSUME(np),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayValueOnly),e.sectionStack.pop()}}r(fN,"arrayMergeFn");function mN(e){return()=>{e.sectionStack.push("arrayNoValueAs"),e.OPTION(()=>{e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),e.OPTION1(()=>e.CONSUME1(p)),e.CONSUME(k)}),e.CONSUME(It),e.SUBRULE(e.variableOnly),e.sectionStack.pop()}}r(mN,"arrayNoValueAs");function hN(e){return()=>{e.sectionStack.push("arrayPopFn"),e.CONSUME(op),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayNoValueAs),e.sectionStack.pop()}}r(hN,"arrayPopFn");function gN(e){return()=>{e.sectionStack.push("arrayPushFn"),e.CONSUME(ip),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayValueOnly),e.sectionStack.pop()}}r(gN,"arrayPushFn");function TN(e){return()=>{e.sectionStack.push("arrayShiftFn"),e.CONSUME(ap),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayNoValueAs),e.sectionStack.pop()}}r(TN,"arrayShiftFn");function EN(e){return()=>{e.sectionStack.push("arrayUnshiftFn"),e.CONSUME(sp),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayValueOnly),e.sectionStack.pop()}}r(EN,"arrayUnshiftFn");function SN(e){return()=>{e.sectionStack.push("arrayValueAs");let t=!1;e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.OPTION1(()=>e.CONSUME1(p)),e.CONSUME(k),e.CONSUME(It),e.SUBRULE(e.assignableVariableAs),e.sectionStack.pop()}}r(SN,"arrayValueAs");function yN(e){return()=>{e.sectionStack.push("arrayValueIfAs"),e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.CONSUME(ji),e.CONSUME1(ce),e.SUBRULE1(e.valueExpression),e.CONSUME1(ne),e.OPTION(()=>{e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),e.OPTION1(()=>e.CONSUME1(p)),e.CONSUME(k)}),e.CONSUME(It),e.SUBRULE(e.assignableVariableAs),e.sectionStack.pop()}}r(yN,"arrayValueIfAs");function _N(e){return()=>{e.sectionStack.push("arrayValueOnly");let t=!1;e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.OPTION1(()=>e.CONSUME1(p)),e.CONSUME(k),e.sectionStack.pop()}}r(_N,"arrayValueOnly");function xN(e){return t=>{e.sectionStack.push("valueAttrOnly");let n=!1,o=!1,i=!1;e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>{n=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),n||e.addMissingError(t,"{} is missing a stack clause"),e.OPTION1(()=>e.CONSUME1(p)),e.CONSUME(k),e.sectionStack.pop()}}r(xN,"valueAttrOnly");var bN=r(e=>{e.arrayEveryFn=e.RULE("arrayEveryFn",sN(e)),e.arrayFilterCountFn=e.RULE("arrayFilterCountFn",cN(e)),e.arrayFilterFn=e.RULE("arrayFilterFn",lN(e)),e.arrayFindFn=e.RULE("arrayFindFn",uN(e)),e.arrayFindIndexFn=e.RULE("arrayFindIndexFn",dN(e)),e.arrayHasFn=e.RULE("arrayHasFn",pN(e)),e.arrayMergeFn=e.RULE("arrayMergeFn",fN(e)),e.arrayNoValueAs=e.RULE("arrayNoValueAs",mN(e)),e.arrayPopFn=e.RULE("arrayPopFn",hN(e)),e.arrayPushFn=e.RULE("arrayPushFn",gN(e)),e.arrayShiftFn=e.RULE("arrayShiftFn",TN(e)),e.arrayUnshiftFn=e.RULE("arrayUnshiftFn",EN(e)),e.arrayValueAs=e.RULE("arrayValueAs",SN(e)),e.arrayValueIfAs=e.RULE("arrayValueIfAs",yN(e)),e.arrayValueOnly=e.RULE("arrayValueOnly",_N(e)),e.valueAttrOnly=e.RULE("valueAttrOnly",xN(e))},"register");function RN(e){return()=>{e.sectionStack.push("array"),e.CONSUME(Qd),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.arrayEveryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFilterCountFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFilterFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFindFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFindIndexFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayHasFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayShiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayPopFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayUnshiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayPushFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayMergeFn),"ALT")}]),e.sectionStack.pop()}}r(RN,"arrayFn");function AN(e){return()=>{e.sectionStack.push("cloudAlgoliaFn"),e.CONSUME(pp),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudAlgoliaRequestFn),"ALT")}]),e.sectionStack.pop()}}r(AN,"cloudAlgoliaFn");function kN(e){return()=>{e.sectionStack.push("cloudAlgoliaRequestFn");let t=e.CONSUME(Qi);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{"description?":"[string]","application_id?":"[expression]","api_key?":"[expression]",url:"[expression]","method?":["POST","GET"],payload:"[expression]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(kN,"cloudAlgoliaRequestFn");function UN(e){return()=>{e.sectionStack.push("cloudAwsFn"),e.CONSUME(mp),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudAwsS3Fn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAwsOpenSearchFn),"ALT")}]),e.sectionStack.pop()}}r(UN,"cloudAwsFn");function CN(e){return()=>{e.sectionStack.push("cloudAwsOpenSearchFn"),e.CONSUME(Ap),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudSearchDocumentFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchRequestFn),"ALT")}]),e.sectionStack.pop()}}r(CN,"cloudAwsOpenSearchFn");function vN(e){return()=>{e.sectionStack.push("cloudAwsS3Fn"),e.CONSUME(xp),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudListDirectoryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSignUrlFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudUploadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudDeleteFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudReadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudGetFileInfoFn),"ALT")}]),e.sectionStack.pop()}}r(vN,"cloudAwsS3Fn");function ON(e){return()=>{e.sectionStack.push("cloudAzureFn"),e.CONSUME(gp),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudStorageFn),"ALT")}]),e.sectionStack.pop()}}r(ON,"cloudAzureFn");function LN(e){return()=>{e.sectionStack.push("cloudDeleteFileFn"),e.CONSUME(Sp),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.sectionStack.pop()}}r(LN,"cloudDeleteFileFn");function NN(e){return()=>{e.sectionStack.push("cloudElasticSearchFn"),e.CONSUME(hp),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudSearchDocumentFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchRequestFn),"ALT")}]),e.sectionStack.pop()}}r(NN,"cloudElasticSearchFn");function MN(e){return()=>{e.sectionStack.push("cloudGetFileInfoFn");let t=e.CONSUME(yp);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(MN,"cloudGetFileInfoFn");function wN(e){return()=>{e.sectionStack.push("cloudGoogleFn"),e.CONSUME(fp),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudStorageFn),"ALT")}]),e.sectionStack.pop()}}r(wN,"cloudGoogleFn");function FN(e){return()=>{e.sectionStack.push("cloudListDirectoryFn");let t=e.CONSUME(_p);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(FN,"cloudListDirectoryFn");function IN(e){return()=>{e.sectionStack.push("cloudReadFileFn");let t=e.CONSUME(Ep);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(IN,"cloudReadFileFn");function PN(e){return()=>{e.sectionStack.push("cloudSearchDocumentFn");let t=e.CONSUME(kp);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(PN,"cloudSearchDocumentFn");function DN(e){return()=>{e.sectionStack.push("cloudSearchQueryFn");let t=e.CONSUME(Up);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(DN,"cloudSearchQueryFn");function qN(e){return()=>{e.sectionStack.push("cloudSearchRequestFn");let t=e.CONSUME(Qi);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(qN,"cloudSearchRequestFn");function BN(e){return()=>{e.sectionStack.push("cloudSignUrlFn");let t=e.CONSUME(bp);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(BN,"cloudSignUrlFn");function GN(e){return()=>{e.sectionStack.push("cloudStorageFn"),e.CONSUME(Tp),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudListDirectoryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSignUrlFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudUploadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudDeleteFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudReadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudGetFileInfoFn),"ALT")}]),e.sectionStack.pop()}}r(GN,"cloudStorageFn");function jN(e){return()=>{e.sectionStack.push("cloudUploadFileFn"),e.CONSUME(Rp),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.sectionStack.pop()}}r(jN,"cloudUploadFileFn");var VN=r(e=>{e.cloudAlgoliaFn=e.RULE("cloudAlgoliaFn",AN(e)),e.cloudAlgoliaRequestFn=e.RULE("cloudAlgoliaRequestFn",kN(e)),e.cloudAwsFn=e.RULE("cloudAwsFn",UN(e)),e.cloudAwsOpenSearchFn=e.RULE("cloudAwsOpenSearchFn",CN(e)),e.cloudAwsS3Fn=e.RULE("cloudAwsS3Fn",vN(e)),e.cloudAzureFn=e.RULE("cloudAzureFn",ON(e)),e.cloudDeleteFileFn=e.RULE("cloudDeleteFileFn",LN(e)),e.cloudElasticSearchFn=e.RULE("cloudElasticSearchFn",NN(e)),e.cloudGetFileInfoFn=e.RULE("cloudGetFileInfoFn",MN(e)),e.cloudGoogleFn=e.RULE("cloudGoogleFn",wN(e)),e.cloudListDirectoryFn=e.RULE("cloudListDirectoryFn",FN(e)),e.cloudReadFileFn=e.RULE("cloudReadFileFn",IN(e)),e.cloudSearchDocumentFn=e.RULE("cloudSearchDocumentFn",PN(e)),e.cloudSearchQueryFn=e.RULE("cloudSearchQueryFn",DN(e)),e.cloudSearchRequestFn=e.RULE("cloudSearchRequestFn",qN(e)),e.cloudSignUrlFn=e.RULE("cloudSignUrlFn",BN(e)),e.cloudStorageFn=e.RULE("cloudStorageFn",GN(e)),e.cloudUploadFileFn=e.RULE("cloudUploadFileFn",jN(e))},"register");function WN(e){return()=>{e.sectionStack.push("cloud"),e.CONSUME(dp),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudGoogleFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAwsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudElasticSearchFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAzureFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAlgoliaFn),"ALT")}]),e.sectionStack.pop()}}r(WN,"cloudFn");function zN(e){return(t={})=>{e.OR([{ALT:r(()=>e.CONSUME(zi),"ALT")},{ALT:r(()=>e.CONSUME(hd),"ALT")},{ALT:r(()=>e.SUBRULE(e.awaitFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.conditionalFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.forEachFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.forFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.functionRunFn),"ALT")},{GATE:r(()=>t.allowFunctionCalls,"GATE"),ALT:r(()=>e.SUBRULE(e.functionCallFn),"ALT")},{GATE:r(()=>t.allowFunctionCalls,"GATE"),ALT:r(()=>e.SUBRULE(e.taskCallFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.groupFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.returnFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.switchFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.whileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.throwFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.tryCatchFn),"ALT")}]),e.sectionStack.pop()}}r(zN,"controlFn");function HN(e){let t=["ids","timeout"],n=["description","disabled"];return()=>{e.sectionStack.push("awaitFn");let o=e.CONSUME(sd);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(HN,"awaitFn");function YN(e){return()=>{e.sectionStack.push("conditionalElifFn"),e.CONSUME(nd),e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.OPTION(()=>e.SUBRULE(e.nakedStackFn)),e.sectionStack.pop()}}r(YN,"conditionalElifFn");function KN(e){return()=>{e.sectionStack.push("conditionalElseFn"),e.CONSUME(rd),e.SUBRULE(e.nakedStackFn),e.sectionStack.pop()}}r(KN,"conditionalElseFn");function JN(e){return()=>{let t=!1,n=!1,o=!1;e.sectionStack.push("conditionalFn");let i=e.CONSUME(td);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.disabledFieldAttribute)},"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.conditionalIfFn),e.MANY1(()=>{e.MANY3(()=>e.CONSUME3(p)),e.SUBRULE(e.conditionalElifFn)}),e.OPTION(()=>{e.MANY4(()=>e.CONSUME4(p)),e.SUBRULE(e.conditionalElseFn)})},"ALT")}])}),t||e.addMissingError(i,"{} is missing the if statement"),e.MANY2(()=>e.CONSUME1(p)),e.CONSUME(k),e.sectionStack.pop()}}r(JN,"conditionalFn");function QN(e){return()=>{e.sectionStack.push("conditionalIfFn"),e.CONSUME(ji),e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.OPTION(()=>e.SUBRULE(e.nakedStackFn)),e.sectionStack.pop()}}r(QN,"conditionalIfFn");function XN(e){return()=>{let t=!1;e.sectionStack.push("forEachFn"),e.CONSUME(id),e.OR([{ALT:r(()=>{e.CONSUME(w),e.CONSUME(ad)},"ALT")},{ALT:r(()=>{e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.OPTION(()=>{e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR1([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(Fr),e.CONSUME(It),e.SUBRULE(e.assignableVariableAs),e.OPTION1(()=>e.SUBRULE1(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME1(Fr),e.CONSUME1(It),e.SUBRULE(e.assignableVariableAs),e.OPTION2(()=>e.SUBRULE2(e.nakedStackFn))),e.MANY2(()=>e.CONSUME1(p)),e.CONSUME(k)})},"ALT")}]),e.sectionStack.pop()}}r(XN,"forEachFn");function ZN(e){return()=>{let t=!1;e.sectionStack.push("forFn"),e.CONSUME(od),e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.OPTION(()=>{e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(Fr),e.CONSUME(It),e.SUBRULE(e.assignableVariableAs),e.OPTION1(()=>e.SUBRULE1(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME1(Fr),e.CONSUME1(It),e.SUBRULE(e.assignableVariableAs),e.OPTION2(()=>e.SUBRULE2(e.nakedStackFn))),e.MANY2(()=>e.CONSUME1(p)),e.CONSUME(k)}),e.sectionStack.pop()}}r(ZN,"forFn");function $N(e){let t=[],n=["input","description","disabled"];return()=>{e.sectionStack.push("functionCallFn"),e.CONSUME($n),e.CONSUME(w);let o=e.CONSUME(Cf);e.OR([{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME(ar),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}]),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["input"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r($N,"functionCallFn");function eM(e){return()=>{e.sectionStack.push("functionRunFn"),e.CONSUME($n),e.CONSUME(w);let t=e.CONSUME(Uf);e.OR([{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME(ar),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}]),e.OPTION(()=>{e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{"input?":{"[string]":"[expression]"},"description?":"[string]","disabled?":"[boolean]"}]})}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(eM,"functionRunFn");function tM(e){return()=>{let t=!1;e.sectionStack.push("groupFn"),e.CONSUME(Wi),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.SUBRULE(e.stackClause)},"ALT")}])}),t||e.SUBRULE(e.stackClause),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.sectionStack.pop()}}r(tM,"groupFn");function rM(e){return()=>{let t=[],n=["description","disabled","error_type","error","payload"];e.sectionStack.push("preconditionFn");let o=e.CONSUME(wh);e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(rM,"preconditionFn");function nM(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("return");let o=e.CONSUME(Vi);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(nM,"returnFn");function oM(e){return()=>{e.sectionStack.push("switchCaseFn"),e.CONSUME(dd),e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.OPTION(()=>e.SUBRULE(e.nakedStackFn)),e.OPTION1(()=>e.CONSUME(zi)),e.sectionStack.pop()}}r(oM,"switchCaseFn");function iM(e){return()=>{e.sectionStack.push("switchDefaultFn"),e.CONSUME(pd),e.SUBRULE(e.nakedStackFn),e.sectionStack.pop()}}r(iM,"switchDefaultFn");function aM(e){return()=>{e.sectionStack.push("switchFn"),e.CONSUME(ud),e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.OPTION(()=>{e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{e.MANY1(()=>{e.MANY3(()=>e.CONSUME3(p)),e.SUBRULE(e.switchCaseFn)})},"ALT")}])}),e.OPTION1(()=>{e.MANY4(()=>e.CONSUME4(p)),e.SUBRULE(e.switchDefaultFn)}),e.MANY2(()=>e.CONSUME1(p)),e.CONSUME(k)}),e.sectionStack.pop()}}r(aM,"switchFn");function sM(e){let t=[],n=["description","disabled"];return()=>{e.sectionStack.push("taskCallFn"),e.CONSUME(Ma),e.CONSUME(w);let o=e.CONSUME(ch);e.OR([{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME(ar),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}]),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(sM,"taskCallFn");function cM(e){let t=["value","name"],n=["description","disabled"];return()=>{e.sectionStack.push("throw");let o=e.CONSUME(md);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(cM,"throwFn");function lM(e){return()=>{let t=!1,n=!1;e.sectionStack.push("tryCatchFn"),e.CONSUME(cd),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(js),e.OPTION(()=>e.SUBRULE(e.nakedStackFn))},"ALT")},{ALT:r(()=>{n=!0,e.CONSUME(Vs),e.OPTION1(()=>e.SUBRULE1(e.nakedStackFn))},"ALT")},{ALT:r(()=>{e.CONSUME(ld),e.OPTION2(()=>e.SUBRULE2(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME(js),e.SUBRULE(e.nakedStackFn)),n||(e.CONSUME(Vs),e.SUBRULE(e.nakedStackFn)),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.sectionStack.pop()}}r(lM,"tryCatchFn");function uM(e){return()=>{let t=!1;e.sectionStack.push("whileFn"),e.CONSUME(fd),e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.OPTION(()=>{e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(Fr),e.OPTION1(()=>e.SUBRULE(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME(Fr),e.SUBRULE(e.nakedStackFn)),e.MANY2(()=>e.CONSUME1(p)),e.CONSUME(k)}),e.sectionStack.pop()}}r(uM,"whileFn");var dM=r(e=>{e.awaitFn=e.RULE("awaitFn",HN(e)),e.conditionalElifFn=e.RULE("conditionalElifFn",YN(e)),e.conditionalElseFn=e.RULE("conditionalElseFn",KN(e)),e.conditionalFn=e.RULE("conditionalFn",JN(e)),e.conditionalIfFn=e.RULE("conditionalIfFn",QN(e)),e.forEachFn=e.RULE("forEachFn",XN(e)),e.forFn=e.RULE("forFn",ZN(e)),e.functionRunFn=e.RULE("functionRunFn",eM(e)),e.functionCallFn=e.RULE("functionCallFn",$N(e)),e.taskCallFn=e.RULE("taskCallFn",sM(e)),e.groupFn=e.RULE("groupFn",tM(e)),e.preconditionFn=e.RULE("preconditionFn",rM(e)),e.returnFn=e.RULE("returnFn",nM(e)),e.switchCaseFn=e.RULE("switchCaseFn",oM(e)),e.switchDefaultFn=e.RULE("switchDefaultFn",iM(e)),e.switchFn=e.RULE("switchFn",aM(e)),e.throwFn=e.RULE("throwFn",cM(e)),e.tryCatchFn=e.RULE("tryCatchFn",lM(e)),e.whileFn=e.RULE("whileFn",uM(e))},"register");function pM(e){return()=>{let t=["data"],n=["description","disabled","addon"];e.sectionStack.push("dbAddFn");let o=e.CONSUME(sf);e.OR({DEF:[{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["data"],allowArray:["data","addon"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(pM,"dbAddFn");function fM(e){return()=>{let t=["field_value","field_name","data"],n=["description","disabled","addon"];e.sectionStack.push("dbAddOrEditFn");let o=e.CONSUME(cf);e.OR({DEF:[{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["data"],allowArray:["data","addon"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(fM,"dbAddOrEditFn");function mM(e){return()=>{let t=["field_value","field_name"],n=["description","disabled"];e.sectionStack.push("dbDelFn");let o=e.CONSUME(lf);e.OR({DEF:[{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(mM,"dbDelFn");function hM(e){return()=>{let t=["sql","response_type"],n=["description","disabled","arg"];e.sectionStack.push("dbDirectQueryFn");let o=e.CONSUME(Zi);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowDuplicates:["arg"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(hM,"dbDirectQueryFn");function gM(e){return()=>{let t=["field_value","field_name","data"],n=["description","disabled","addon"];e.sectionStack.push("dbEditFn");let o=e.CONSUME(uf);e.OR({DEF:[{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowArray:["addon"],types:{data:"object",description:"string",disabled:"boolean",field_name:"string"}}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(gM,"dbEditFn");function TM(e){return()=>{let t=["code","response_type","connection_string"],n=["description","disabled","arg"];e.sectionStack.push("dbExternalDirectQueryFn");let o=e.CONSUME(Zi);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowDuplicates:["arg"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(TM,"dbExternalDirectQueryFn");function EM(e){return()=>{e.sectionStack.push("dbExternalFn"),e.CONSUME(Tf),e.CONSUME(w),e.OR([{ALT:r(()=>e.CONSUME(Ef),"ALT")},{ALT:r(()=>e.CONSUME(Sf),"ALT")},{ALT:r(()=>e.CONSUME(_f),"ALT")},{ALT:r(()=>e.CONSUME(yf),"ALT")}]),e.CONSUME1(w),e.SUBRULE(e.dbExternalDirectQueryFn),e.sectionStack.pop()}}r(EM,"dbExternalFn");function SM(e){return()=>{let t=["field_value","field_name"],n=["description","disabled","addon","output"];e.sectionStack.push("dbGetFn");let o=e.CONSUME(af);e.OR({DEF:[{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowArray:["addon","output"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(SM,"dbGetFn");function yM(e){return()=>{let t=["field_value","field_name"],n=["description","disabled"];e.sectionStack.push("dbHasFn");let o=e.CONSUME(df);e.OR({DEF:[{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(yM,"dbHasFn");function _M(e){return()=>{let t=["field_value","field_name","data"],n=["description","disabled","addon"];e.sectionStack.push("dbPatchFn");let o=e.CONSUME(pf);e.OR({DEF:[{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["data"],allowArray:["data","addon"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(_M,"dbPatchFn");function xM(e){return e.requireRules(VW,zW,YW,KW,jW,ZW,WW,HW,QW,JW,XW),()=>{e.sectionStack.push("dbQueryFn");let t=e.CONSUME(of);e.OR([{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}]);let n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1,f=!1,g=!1,_=!1,y=!1;e.OPTION(()=>{e.CONSUME(A),e.MANY(()=>e.CONSUME(p)),e.MANY1(()=>{e.OR1([{GATE:r(()=>!f,"GATE"),ALT:r(()=>{f=!0,e.SUBRULE(e.dbQueryFnEval)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.dbQueryFnReturn)},"ALT")},{GATE:r(()=>!y,"GATE"),ALT:r(()=>{y=!0,e.SUBRULE(e.mockAttribute)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.dbQueryFnAddOn)},"ALT")},{GATE:r(()=>!g,"GATE"),ALT:r(()=>{g=!0,e.SUBRULE(e.dbQueryFnSort)},"ALT")},{GATE:r(()=>!_,"GATE"),ALT:r(()=>{_=!0,e.SUBRULE(e.dbQueryFnOverrideSort)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.dbQueryFnOutput)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.dbQueryFnWhere)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.dbQueryFnAdditionalWhere)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.dbJoinFn)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.dbQueryFnDisabled)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.dbQueryFnDescription)},"ALT")}])}),e.MANY2(()=>e.CONSUME2(p)),e.CONSUME(k)}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(xM,"dbQueryFn");function jW(e){return()=>{e.CONSUME(om),e.CONSUME(b),e.SUBRULE(e.valueExpression,{ARGS:[{allowQueryExpression:!0,allowOptionalIfNull:!0}]}),e.MANY(()=>e.CONSUME(p))}}r(jW,"dbQueryFnWhere");function VW(e){return()=>{let t=e.CONSUME(cm);e.CONSUME(b),e.SUBRULE(e.schemaFn,{ARGS:[t,{"[string]":{table:"[string]","type?":["inner","left","right"],"where?":"[query]"}}]}),e.MANY(()=>e.CONSUME(p))}}r(VW,"dbJoinFn");function WW(e){let t={"[string]":{name:"[string]",input:{"[string]":"[expression]"},"output?":["[string]"]}};return t["[string]"]["addon?"]=t,()=>{let n=e.CONSUME(dm);e.CONSUME(b),e.SUBRULE(e.schemaFn,{ARGS:[n,t]}),e.MANY2(()=>e.CONSUME2(p))}}r(WW,"dbQueryFnAddOn");function zW(e){return()=>{e.CONSUME(Ba),e.CONSUME(b),e.OR([{ALT:r(()=>e.CONSUME($e),"ALT")},{ALT:r(()=>e.CONSUME(Ze),"ALT")}]),e.MANY(()=>e.CONSUME(p))}}r(zW,"dbQueryFnDisabled");function HW(e){return()=>{let t=e.CONSUME(dc);e.CONSUME(b),e.SUBRULE(e.schemaFn,{ARGS:[t,{"[string]":"[query]"}]}),e.MANY(()=>e.CONSUME(p))}}r(HW,"dbQueryFnEval");function YW(e){return()=>{e.CONSUME(qa),e.CONSUME(b),e.CONSUME(U),e.MANY(()=>e.CONSUME(p))}}r(YW,"dbQueryFnDescription");function KW(e){return()=>{let t=e.CONSUME(La);e.CONSUME(b),e.SUBRULE(e.schemaFn,{ARGS:[t,["[string]"]]}),e.MANY(()=>e.CONSUME(p))}}r(KW,"dbQueryFnOutput");function JW(e){return()=>{let t=e.CONSUME(am);e.CONSUME(b),e.SUBRULE(e.schemaFn,{ARGS:[t,{"[string]":["asc","desc","rand"]}]}),e.MANY(()=>e.CONSUME(p))}}r(JW,"dbQueryFnSort");function QW(e){return()=>{e.CONSUME(sm),e.CONSUME(b),e.SUBRULE(e.valueExpression),e.MANY(()=>e.CONSUME(p))}}r(QW,"dbQueryFnOverrideSort");function XW(e){return()=>{e.CONSUME(im),e.CONSUME(b),e.SUBRULE(e.valueExpression,{ARGS:[{allowQueryExpression:!0,allowOptionalIfNull:!0}]}),e.MANY(()=>e.CONSUME(p))}}r(XW,"dbQueryFnAdditionalWhere");function ZW(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1;e.CONSUME(Vi),e.CONSUME(b),e.CONSUME(A),e.MANY(()=>e.CONSUME(p));let s=!1,c=null;e.MANY1(()=>{s&&e.addMissingError(null,"Expected a separator between attributes"),e.OR({IGNORE_AMBIGUITIES:!0,DEF:[{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let l=e.CONSUME(pg);e.CONSUME(pe),e.SUBRULE(e.schemaFn,{ARGS:[l,["list","stream","exists","count","single","aggregate"]]}),c=Te(e.LA(0))},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0;let l=e.CONSUME1(lm);e.CONSUME1(pe),e.SUBRULE1(e.schemaFn,{ARGS:[l,{"page?":"[expression]","per_page?":"[expression]","offset?":"[expression]","totals?":"[boolean]","metadata?":"[boolean]"}]})},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0;let l=e.CONSUME(um);e.CONSUME2(pe),e.SUBRULE2(e.schemaFn,{ARGS:[l,["yes","no"]]})},"ALT")},{GATE:r(()=>!i&&c&&c==="aggregate","GATE"),ALT:r(()=>{i=!0;let l=e.CONSUME(Wi);e.CONSUME3(pe),e.SUBRULE3(e.schemaFn,{ARGS:[l,{"[string]":"[query]"}]})},"ALT")},{GATE:r(()=>!a&&c&&c==="aggregate","GATE"),ALT:r(()=>{a=!0;let l=e.CONSUME(dc);e.CONSUME4(pe),e.SUBRULE4(e.schemaFn,{ARGS:[l,{"[string]":"[expression]"}]})},"ALT")}]}),s=!0,e.OPTION(()=>{s=!1,e.CONSUME1(_e)}),e.MANY9(()=>{s=!1,e.CONSUME1(p)})}),e.CONSUME(k),e.MANY2(()=>e.CONSUME3(p))}}r(ZW,"dbQueryFnReturn");function bM(e){return()=>{let t=[],n=["description","disabled","path"];e.sectionStack.push("dbSchemaFn");let o=e.CONSUME(ff);e.OR([{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}]),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(bM,"dbSchemaFn");function RM(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("dbSetDatasourceFn");let o=e.CONSUME(gf);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(RM,"dbSetDatasourceFn");function AM(e){return()=>{let t=!1;e.sectionStack.push("dbTransactionFn"),e.CONSUME(mf),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.SUBRULE(e.stackClause)},"ALT")}])}),t||e.SUBRULE(e.stackClause),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.sectionStack.pop()}}r(AM,"dbTransactionFn");function kM(e){return()=>{let t=[],n=["description","disabled","reset"];e.sectionStack.push("dbTruncateFn");let o=e.CONSUME(hf);e.OR({DEF:[{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(kM,"dbTruncateFn");var UM=r(e=>{e.dbAddFn=e.RULE("dbAddFn",pM(e)),e.dbDelFn=e.RULE("dbDelFn",mM(e)),e.dbDirectQueryFn=e.RULE("dbDirectQueryFn",hM(e)),e.dbEditFn=e.RULE("dbEditFn",gM(e)),e.dbExternalDirectQueryFn=e.RULE("dbExternalDirectQueryFn",TM(e)),e.dbExternalFn=e.RULE("dbExternalFn",EM(e)),e.dbGetFn=e.RULE("dbGetFn",SM(e)),e.dbHasFn=e.RULE("dbHasFn",yM(e)),e.dbPatchFn=e.RULE("dbPatchFn",_M(e)),e.dbQueryFn=e.RULE("dbQueryFn",xM(e)),e.dbSchemaFn=e.RULE("dbSchemaFn",bM(e)),e.dbSetDatasourceFn=e.RULE("dbSetDatasourceFn",RM(e)),e.dbTransactionFn=e.RULE("dbTransactionFn",AM(e)),e.dbTruncateFn=e.RULE("dbTruncateFn",kM(e)),e.dbAddOrEditFn=e.RULE("dbAddOrEditFn",fM(e))},"register");function CM(e){return()=>{e.sectionStack.push("db"),e.CONSUME(nf),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.dbExternalFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbGetFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbHasFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbEditFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbDelFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbAddFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbDirectQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbSetDatasourceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbSchemaFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbTruncateFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbTransactionFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbPatchFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbAddOrEditFn),"ALT")}]),e.sectionStack.pop()}}r(CM,"dbFn");function vM(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("debugLog");let o=e.CONSUME(Rf);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(vM,"debugLogFn");function OM(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("debugStop");let o=e.CONSUME(bf);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(OM,"debugStopFn");var LM=r(e=>{e.debugLogFn=e.RULE("debugLogFn",vM(e)),e.debugStopFn=e.RULE("debugStopFn",OM(e))},"register");function NM(e){return()=>{e.sectionStack.push("debug"),e.CONSUME(xf),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.debugLogFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.debugStopFn),"ALT")}]),e.sectionStack.pop()}}r(NM,"debugFn");function MM(e){let t=["min","max"],n=[];return()=>{e.sectionStack.push("unitExpectToBeWithinFn");let o=e.CONSUME(Ea);e.CONSUME(ce),e.CONSUME(io),e.MANY(()=>{e.CONSUME(w),e.CONSUME(E)}),e.CONSUME(ne),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(MM,"unitExpectToBeWithinFn");function wM(e){let t=[],n=["exception"];return()=>{e.sectionStack.push("unitExpectToThrowFn");let o=e.CONSUME(Sa);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(wM,"unitExpectToThrowFn");function FM(e){let t=["value"],n=[];return()=>{e.sectionStack.push("unitExpectWithArgumentsFn");let o=e.OR([{ALT:r(()=>e.CONSUME(ha),"ALT")},{ALT:r(()=>e.CONSUME(ua),"ALT")},{ALT:r(()=>e.CONSUME(da),"ALT")},{ALT:r(()=>e.CONSUME(pa),"ALT")},{ALT:r(()=>e.CONSUME(fa),"ALT")},{ALT:r(()=>e.CONSUME(ma),"ALT")},{ALT:r(()=>e.CONSUME(ga),"ALT")},{ALT:r(()=>e.CONSUME(Ta),"ALT")}]);e.CONSUME(ce),e.CONSUME(io),e.MANY(()=>{e.CONSUME(w),e.CONSUME(E)}),e.CONSUME(ne),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(FM,"unitExpectWithArgumentsFn");function IM(e){return()=>{e.sectionStack.push("unitExpectWithoutArgumentsFn"),e.OR([{ALT:r(()=>e.CONSUME(ta),"ALT")},{ALT:r(()=>e.CONSUME(ra),"ALT")},{ALT:r(()=>e.CONSUME(na),"ALT")},{ALT:r(()=>e.CONSUME(oa),"ALT")},{ALT:r(()=>e.CONSUME(ia),"ALT")},{ALT:r(()=>e.CONSUME(aa),"ALT")},{ALT:r(()=>e.CONSUME(sa),"ALT")},{ALT:r(()=>e.CONSUME(ca),"ALT")},{ALT:r(()=>e.CONSUME(la),"ALT")}]),e.CONSUME(ce),e.CONSUME(io),e.MANY(()=>{e.CONSUME(w),e.CONSUME(E)}),e.CONSUME(ne),e.sectionStack.pop()}}r(IM,"unitExpectWithoutArgumentsFn");function PM(e){let t=["min","max"],n=["description","disabled"];return()=>{e.sectionStack.push("workflowExpectToBeWithinFn");let o=e.CONSUME(Ea);e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(PM,"workflowExpectToBeWithinFn");function DM(e){let t=[],n=["value"];return()=>{e.sectionStack.push("workflowExpectToThrowFn");let o=e.CONSUME(Sa);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(DM,"workflowExpectToThrowFn");function qM(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("workflowExpectWithArgumentsFn");let o=e.OR([{ALT:r(()=>e.CONSUME(ha),"ALT")},{ALT:r(()=>e.CONSUME(ua),"ALT")},{ALT:r(()=>e.CONSUME(da),"ALT")},{ALT:r(()=>e.CONSUME(pa),"ALT")},{ALT:r(()=>e.CONSUME(fa),"ALT")},{ALT:r(()=>e.CONSUME(ma),"ALT")},{ALT:r(()=>e.CONSUME(ga),"ALT")},{ALT:r(()=>e.CONSUME(Ta),"ALT")}]);e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(qM,"workflowExpectWithArgumentsFn");function BM(e){return()=>{e.sectionStack.push("workflowExpectWithoutArgumentsFn");let t=e.OR([{ALT:r(()=>e.CONSUME(ta),"ALT")},{ALT:r(()=>e.CONSUME(ra),"ALT")},{ALT:r(()=>e.CONSUME(na),"ALT")},{ALT:r(()=>e.CONSUME(oa),"ALT")},{ALT:r(()=>e.CONSUME(ia),"ALT")},{ALT:r(()=>e.CONSUME(aa),"ALT")},{ALT:r(()=>e.CONSUME(sa),"ALT")},{ALT:r(()=>e.CONSUME(ca),"ALT")},{ALT:r(()=>e.CONSUME(la),"ALT")}]);e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.SUBRULE(e.functionAttrReq,{ARGS:[t,[],["description","disabled"]]}),e.sectionStack.pop()}}r(BM,"workflowExpectWithoutArgumentsFn");var GM=r(e=>{e.unitExpectWithArgumentsFn=e.RULE("unitExpectWithArgumentsFn",FM(e)),e.unitExpectWithoutArgumentsFn=e.RULE("unitExpectWithoutArgumentsFn",IM(e)),e.unitExpectToThrowFn=e.RULE("unitExpectToThrowFn",wM(e)),e.unitExpectToBeWithinFn=e.RULE("unitExpectToBeWithinFn",MM(e)),e.workflowExpectWithArgumentsFn=e.RULE("workflowExpectWithArgumentsFn",qM(e)),e.workflowExpectWithoutArgumentsFn=e.RULE("workflowExpectWithoutArgumentsFn",BM(e)),e.workflowExpectToThrowFn=e.RULE("workflowExpectToThrowFn",DM(e)),e.workflowExpectToBeWithinFn=e.RULE("workflowExpectToBeWithinFn",PM(e))},"register");function jM(e){return()=>{let t=!1;e.sectionStack.push("allMathFn"),e.OR([{ALT:r(()=>e.CONSUME(Lf),"ALT")},{ALT:r(()=>e.CONSUME(Nf),"ALT")},{ALT:r(()=>e.CONSUME(Mf),"ALT")},{ALT:r(()=>e.CONSUME(wf),"ALT")},{ALT:r(()=>e.CONSUME(Ff),"ALT")},{ALT:r(()=>{e.CONSUME(If),e.CONSUME(w),e.OR1([{ALT:r(()=>e.CONSUME(Pf),"ALT")},{ALT:r(()=>e.CONSUME(Df),"ALT")},{ALT:r(()=>e.CONSUME(qf),"ALT")}])},"ALT")}]),e.SUBRULE(e.assignableVariableProperty),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.sectionStack.pop()}}r(jM,"allMathFn");var VM=r(e=>{e.allMathFn=e.RULE("allMathFn",jM(e))},"register");function WM(e){return()=>{e.sectionStack.push("math"),e.CONSUME(Of),e.CONSUME(w),e.SUBRULE(e.allMathFn),e.sectionStack.pop()}}r(WM,"mathFn");function zM(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("objectEntriesFn");let o=e.CONSUME(em);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(zM,"objectEntriesFn");function HM(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("objectKeysFn");let o=e.CONSUME(tm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(HM,"objectKeysFn");function YM(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("objectValuesFn");let o=e.CONSUME(rm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(YM,"objectValuesFn");var KM=r(e=>{e.objectEntriesFn=e.RULE("objectEntriesFn",zM(e)),e.objectKeysFn=e.RULE("objectKeysFn",HM(e)),e.objectValuesFn=e.RULE("objectValuesFn",YM(e))},"register");function JM(e){return()=>{e.sectionStack.push("object"),e.CONSUME($f),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.objectEntriesFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.objectKeysFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.objectValuesFn),"ALT")}]),e.sectionStack.pop()}}r(JM,"objectFn");function QM(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisCountFn");let o=e.CONSUME(gm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(QM,"redisCountFn");function XM(e){return()=>{let t=["key","by"],n=["description","disabled"];e.sectionStack.push("redisDecrFn");let o=e.CONSUME(Tm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(XM,"redisDecrFn");function ZM(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisDelFn");let o=e.CONSUME(Em);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(ZM,"redisDelFn");function $M(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisGetFn");let o=e.CONSUME(Sm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r($M,"redisGetFn");function ew(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisHasFn");let o=e.CONSUME(ym);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(ew,"redisHasFn");function tw(e){return()=>{let t=["package_key","key","by"],n=["description","disabled"];e.sectionStack.push("redisIncrFn");let o=e.CONSUME(_m);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(tw,"redisIncrFn");function rw(e){return()=>{let t=["search"],n=["description","disabled"];e.sectionStack.push("redisKeysFn");let o=e.CONSUME(xm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(rw,"redisKeysFn");function nw(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisPopFn");let o=e.CONSUME(bm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(nw,"redisPopFn");function ow(e){return()=>{let t=["key","value","package_key"],n=["description","disabled"];e.sectionStack.push("redisPushFn");let o=e.CONSUME(Rm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(ow,"redisPushFn");function iw(e){return()=>{let t=["key","start","stop"],n=["description","disabled"];e.sectionStack.push("redisRangeFn");let o=e.CONSUME(Am);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(iw,"redisRangeFn");function aw(e){return()=>{let t=["key","max","ttl","error"],n=["description","disabled"];e.sectionStack.push("redisRateLimitFn");let o=e.CONSUME(km);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(aw,"redisRateLimitFn");function sw(e){return()=>{let t=["key","value","count"],n=["description","disabled"];e.sectionStack.push("redisRemoveFn");let o=e.CONSUME(Um);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(sw,"redisRemoveFn");function cw(e){return()=>{let t=["key","data","ttl"],n=["description","disabled"];e.sectionStack.push("redisSetFn");let o=e.CONSUME(Cm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(cw,"redisSetFn");function lw(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisShiftFn");let o=e.CONSUME(vm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(lw,"redisShiftFn");function uw(e){return()=>{let t=["key","value"],n=["description","disabled"];e.sectionStack.push("redisUnshiftFn");let o=e.CONSUME(Om);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(uw,"redisUnshiftFn");var dw=r(e=>{e.redisCountFn=e.RULE("redisCountFn",QM(e)),e.redisDecrFn=e.RULE("redisDecrFn",XM(e)),e.redisDelFn=e.RULE("redisDelFn",ZM(e)),e.redisGetFn=e.RULE("redisGetFn",$M(e)),e.redisHasFn=e.RULE("redisHasFn",ew(e)),e.redisIncrFn=e.RULE("redisIncrFn",tw(e)),e.redisKeysFn=e.RULE("redisKeysFn",rw(e)),e.redisPopFn=e.RULE("redisPopFn",nw(e)),e.redisPushFn=e.RULE("redisPushFn",ow(e)),e.redisRangeFn=e.RULE("redisRangeFn",iw(e)),e.redisRateLimitFn=e.RULE("redisRateLimitFn",aw(e)),e.redisRemoveFn=e.RULE("redisRemoveFn",sw(e)),e.redisSetFn=e.RULE("redisSetFn",cw(e)),e.redisShiftFn=e.RULE("redisShiftFn",lw(e)),e.redisUnshiftFn=e.RULE("redisUnshiftFn",uw(e))},"register");function pw(e){return()=>{e.sectionStack.push("redis"),e.CONSUME(hm),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.redisDelFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisSetFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisGetFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisHasFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisIncrFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisDecrFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisKeysFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisPushFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisUnshiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisPopFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisShiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisRemoveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisCountFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisRangeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisRateLimitFn),"ALT")}]),e.sectionStack.pop()}}r(pw,"redisFn");function fw(e){return(t,n)=>{let o=!1;e.CONSUME(ze),e.MANY(()=>{e.MANY1(()=>{o=!1,e.CONSUME(p)}),o&&e.addInvalidValueError("Expected a comma, a new line or closing bracket"),e.SUBRULE(e.schemaFn,{ARGS:[t,dt(n)]}),o=!0,e.MANY2(()=>{o=!1,e.CONSUME1(p)}),e.OPTION(()=>(o=!1,e.CONSUME1(_e)))}),e.CONSUME(He)}}r(fw,"schemaParseArrayFn");function ky(e){return typeof e!="object"||!Array.isArray(e)?!1:e.length==1}r(ky,"schemaExpectArray");function Ir(e){return!e||typeof e!="string"?!1:e.endsWith("?")}r(Ir,"isOptionalAttribute");function pr(e){return!e||typeof e!="string"?!1:(Ir(e)&&(e=e.slice(0,-1)),e.startsWith("[")&&e.endsWith("]"))}r(pr,"isSchemaGenericType");function mw(e){return pr(e)?Ir(e)?e.slice(1,-2):e.slice(1,-1):null}r(mw,"getSchemaGenericTypeName");function po(e,t){if(pr(e)){let n=Ir(e)?e.slice(1,-2):e.slice(1,-1);return t.includes(n)}return!1}r(po,"schemaExpectOneOf");function hw(e){return(t,n,o={})=>{let i=null,a=e.OR([{ALT:r(()=>(i="string",e.CONSUME(U)),"ALT")},{ALT:r(()=>(i="string",e.CONSUME(Dt)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(Le)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(vt)),"ALT")},{ALT:r(()=>(i="boolean",e.CONSUME(Ze)),"ALT")},{ALT:r(()=>(i="boolean",e.CONSUME($e)),"ALT")},{ALT:r(()=>(i="null",e.CONSUME(lo)),"ALT")},{IGNORE_AMBIGUITIES:!0,ALT:r(()=>(i="string",e.CONSUME(E)),"ALT")}]);o.value=a,e.ACTION(()=>{gw(i,a.image,n)||e.addExpectedValueError(t,n)})}}r(hw,"schemaParseConstantFn");function gw(e,t,n){let o=n!==null?n.toString():n;if(B(n))return Nr(n,i=>gw(e,t,i));switch(e){case"string":return(t.startsWith('"')||t.startsWith("'"))&&(t=t.slice(1,-1)),t===o;case"number":case"boolean":return t===o;case"null":return o===null;default:throw new Error(`schemaParseConstantFn called with non-constant attribute: ${n}`)}}r(gw,"matchValueToSchema");function Uy(e){return pr(e)?!1:typeof e=="string"||typeof e=="number"||typeof e=="boolean"||e===null}r(Uy,"schemaExpectConstant");function Tw(e){return(t,n,o={})=>{let[i,a]=qS(n,pr);e.ACTION(()=>{if(a.length>0&&i.length>0)throw new Error("schemaParseEnumFn does not support mixing constant and immutable types in the same enum, received: "+JSON.stringify(n))}),e.OR({IGNORE_AMBIGUITIES:!0,DEF:[{GATE:r(()=>a.length>0,"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseConstantFn,{ARGS:[t,a,o]}),"ALT")},{GATE:r(()=>i.length>0,"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseImmutableFn,{ARGS:[t,i,o]}),"ALT")}]})}}r(Tw,"schemaParseEnumFn");function Cy(e){return!!(B(e)&&e.length>1)}r(Cy,"schemaExpectEnum");function Ew(e){return(t,n,o={})=>{let i=!1,a=null,s=he(n),c=[...s],l=[];if(e.ACTION(()=>{if(s.length>1&&Nr(s,d=>pr(d)))throw new Error("schemaParseObjectFn supports only one generic type when multiple keys are defined")}),e.CONSUME(A),e.MANY(()=>{e.MANY1(()=>{i=!1,e.CONSUME(p)}),i&&e.addInvalidValueError(a,"Expected a comma, a new line or closing bracket");let d,f=e.OR([{ALT:r(()=>{d=e.CONSUME(E);let y=[d];return e.MANY3(()=>{y.push(e.CONSUME(w)),e.CONSUME1(E)}),y.map(L=>L.image).join(".")},"ALT")},{ALT:r(()=>e.CONSUME(U).image.slice(1,-1),"ALT")}]);l.includes(f)?e.addInvalidValueError(d,`Duplicate key '${f}' found`):(l.push(f),o[f]={key:d,value:null});let g=vy(f,s);g||e.addInvalidValueError(d,`The key '${f}' is not valid in this context`),c.splice(c.indexOf(g),1),e.CONSUME(pe);let _=Ro(n,g,null);e.SUBRULE(e.schemaFn,{ARGS:[d,_,o[f]]}),i=!0,e.MANY2(()=>{i=!1,e.CONSUME1(p)}),e.OPTION(()=>{i=!1,e.CONSUME1(_e)})}),e.CONSUME(k),c.length){let d=c.filter(f=>!Ir(f));d.length&&e.addInvalidValueError(a||t,`The following required key(s) are missing: ${d.join(", ")}`)}return{foo:"foo-bar"}}}r(Ew,"schemaParseObjectFn");var vy=r((e,t)=>{for(let n of t)if(pr(n))switch(mw(n)){case"string":if(typeof e=="string")return n;break;case"number":if(!isNaN(Number(e)))return n;break;case"boolean":if(e==="true"||e==="false")return n;break}else{if(Ir(n)&&e===n.slice(0,-1))return n;if(e===n)return n}return!1},"keyMatchRequirements");function Oy(e){return Zl(e)}r(Oy,"schemaExpectObject");var $W=r(e=>po(e,["string","number","boolean"])?B(e)?`Expected one of the following types:  ${e.join(", ")}`:`Expected a ${e}`:Uy(e)?B(e)?`Expected one of the following constants: ${e.join(", ")}`:`Expected a ${e}`:ky(e)?`Expected an array of ${e[0]}`:Oy(e)?"Expected an object {}":Cy(e)?`Expected one of the following enum values: ${e.join(", ")}`:po(e,["mock"])?"Expected a mock":po(e,["expression"])?"Expected an expression":po(e,["query"])?"Expected a database query expression":`Invalid schema: received ${JSON.stringify(e)}`,"getErrorMessageForSchema");function Sw(e){return(t,n,o={})=>{e.sectionStack.push("schema"),e.OR({IGNORE_AMBIGUITIES:!0,ERR_MSG:$W(n),DEF:[{GATE:r(()=>po(n,["string","number","boolean"],o),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseImmutableFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>Uy(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseConstantFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>ky(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseArrayFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>Oy(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>Cy(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseEnumFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>po(n,["expression","query"]),"GATE"),ALT:r(()=>{let i=po(n,["query"]);e.SUBRULE(e.valueExpression,{ARGS:[{allowQueryExpression:i}]})},"ALT")}]}),e.sectionStack.pop()}}r(Sw,"schemaFn");function yw(e){return e.requireRules(e3),(t,n,o={})=>{let i=he(n).every(a=>Ir(a));e.OR([{GATE:r(()=>i,"GATE"),ALT:r(()=>{e.OPTION(()=>e.SUBRULE(e._schemaParseAttributeFn,{ARGS:[t,n,o]}))},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE1(e._schemaParseAttributeFn,{ARGS:[t,n,o]}),"ALT")}])}}r(yw,"schemaParseAttributeFn");function e3(e){return(t,n,o={})=>{let i=!1,a=null,s=he(n),c=[...s],l=[];if(e.ACTION(()=>{if(s.length>1&&Nr(s,d=>pr(d)))throw new Error("schemaParseAttributeFn supports only one generic type when multiple keys are defined")}),e.CONSUME(A),e.MANY(()=>{e.MANY1(()=>{i=!1,e.CONSUME(p)}),i&&e.addInvalidValueError(a,"Expected a comma, a new line or closing bracket");let d,f=e.OR([{ALT:r(()=>(d=e.CONSUME1(E),d.image),"ALT")},{ALT:r(()=>e.CONSUME1(U).image.slice(1,-1),"ALT")}]);f!=="mock"&&l.includes(f)?e.addInvalidValueError(d,`Duplicate key '${f}' found`):(l.push(f),o[f]={key:d,value:null});let g=vy(f,s);g||e.addInvalidValueError(d,`The key '${f}' is not valid in this context`),c.splice(c.indexOf(g),1),e.CONSUME(b);let _=Ro(n,g,null);e.SUBRULE(e.schemaFn,{ARGS:[d,_,o[f]]}),i=!0,e.MANY2(()=>{i=!1,e.CONSUME1(p)}),e.OPTION(()=>{i=!1,e.CONSUME1(_e)})}),e.CONSUME(k),c.length){let d=c.filter(f=>!Ir(f));d.length&&e.addInvalidValueError(a||t,`The following required attribute(s) are missing: ${d.join(", ")}`)}}}r(e3,"_schemaParseAttributeFn");function xw(e){return(t,n,o={})=>{let i,a=e.OR({DEF:[{ALT:r(()=>(i="string",e.CONSUME(U)),"ALT")},{ALT:r(()=>(i="string",e.CONSUME(eo)),"ALT")},{ALT:r(()=>(i="string",e.CONSUME(Dt)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(vt)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(Le)),"ALT")},{ALT:r(()=>{i="boolean",e.SUBRULE(e.booleanValue)},"ALT")}]});o.value=a,e.ACTION(()=>{let s=B(n),c=s?n.map(_w):_w(n);if(s){if(!xt(c))throw new Error(`schemaParseImmutableFn called with invalid enum attribute: ${n}`);c.includes(i)||e.addExpectedValueTypeError(t,c.join(" or "))}else{if(!c)throw new Error(`schemaParseImmutableFn called with invalid attribute: ${n}`);i!==c&&e.addExpectedValueTypeError(t,c)}})}}r(xw,"schemaParseImmutableFn");function _w(e){let t=["string","number","boolean"];if(pr(e)){let n=Ir(e)?e.slice(1,-2):e.slice(1,-1);if(t.includes(n))return n}return null}r(_w,"getImmutableAttributeType");var bw=r(e=>{e.schemaFn=e.RULE("schemaFn",Sw(e)),e.schemaParseImmutableFn=e.RULE("schemaParseImmutableFn",xw(e)),e.schemaParseEnumFn=e.RULE("schemaParseEnumFn",Tw(e)),e.schemaParseConstantFn=e.RULE("schemaParseConstantFn",hw(e)),e.schemaParseArrayFn=e.RULE("schemaParseArrayFn",fw(e)),e.schemaParseObjectFn=e.RULE("schemaParseObjectFn",Ew(e)),e.schemaParseAttributeFn=e.RULE("schemaParseAttributeFn",yw(e))},"register");function Rw(e){return()=>{e.sectionStack.push("securityCheckPasswordFn");let t=e.CONSUME(Nm);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Rw,"securityCheckPasswordFn");function Aw(e){return()=>{e.sectionStack.push("securityCreateAuthTokenFn");let t=e.CONSUME(Fm);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Aw,"securityCreateAuthTokenFn");function kw(e){let t=["curve","format"],n=["description","disabled"];return()=>{e.sectionStack.push("securityCreateCurveKeyFn");let o=e.CONSUME(Im);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(kw,"securityCreateCurveKeyFn");function Uw(e){let t=["character_count","require_lowercase","require_uppercase","require_digit","require_symbol","symbol_whitelist"],n=["description","disabled"];return()=>{e.sectionStack.push("securityCreatePasswordFn");let o=e.CONSUME(Mm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Uw,"securityCreatePasswordFn");function Cw(e){let t=["bits","format"],n=["description","disabled"];return()=>{e.sectionStack.push("securityCreateRsaKeyFn");let o=e.CONSUME(Pm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Cw,"securityCreateRsaKeyFn");function vw(e){return()=>{e.sectionStack.push("securityCreateSecretKeyFn");let t=e.CONSUME(Dm);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(vw,"securityCreateSecretKeyFn");function Ow(e){return()=>{e.sectionStack.push("securityCreateUuidFn");let t=e.CONSUME(wm);e.OPTION(()=>{e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k)}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Ow,"securityCreateUuidFn");function Lw(e){return()=>{e.sectionStack.push("securityDecryptFn");let t=e.CONSUME(qm);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Lw,"securityDecryptFn");function Nw(e){return()=>{e.sectionStack.push("securityEncryptFn");let t=e.CONSUME(Bm);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Nw,"securityEncryptFn");function Mw(e){return()=>{e.sectionStack.push("securityJweDecodeFn");let t=e.CONSUME(Gm);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Mw,"securityJweDecodeFn");function ww(e){return()=>{e.sectionStack.push("securityJweEncodeFn");let t=e.CONSUME(jm);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(ww,"securityJweEncodeFn");function Fw(e){return()=>{e.sectionStack.push("securityJwsDecodeFn");let t=e.CONSUME(Vm);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Fw,"securityJwsDecodeFn");function Iw(e){return()=>{e.sectionStack.push("securityJwsEncodeFn");let t=e.CONSUME(Wm);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Iw,"securityJwsEncodeFn");function Pw(e){return()=>{e.sectionStack.push("securityRandomBytesFn");let t=e.CONSUME(zm);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Pw,"securityRandomBytesFn");function Dw(e){return()=>{e.sectionStack.push("securityRandomNumberFn");let t=e.CONSUME(Hm);e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(E),e.CONSUME(b),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Dw,"securityRandomNumberFn");var qw=r(e=>{e.securityCheckPasswordFn=e.RULE("securityCheckPasswordFn",Rw(e)),e.securityCreateAuthTokenFn=e.RULE("securityCreateAuthTokenFn",Aw(e)),e.securityCreateCurveKeyFn=e.RULE("securityCreateCurveKeyFn",kw(e)),e.securityCreatePasswordFn=e.RULE("securityCreatePasswordFn",Uw(e)),e.securityCreateRsaKeyFn=e.RULE("securityCreateRsaKeyFn",Cw(e)),e.securityCreateSecretKeyFn=e.RULE("securityCreateSecretKeyFn",vw(e)),e.securityCreateUuidFn=e.RULE("securityCreateUuidFn",Ow(e)),e.securityDecryptFn=e.RULE("securityDecryptFn",Lw(e)),e.securityEncryptFn=e.RULE("securityEncryptFn",Nw(e)),e.securityJweDecodeFn=e.RULE("securityJweDecodeFn",Mw(e)),e.securityJweEncodeFn=e.RULE("securityJweEncodeFn",ww(e)),e.securityJwsDecodeFn=e.RULE("securityJwsDecodeFn",Fw(e)),e.securityJwsEncodeFn=e.RULE("securityJwsEncodeFn",Iw(e)),e.securityRandomBytesFn=e.RULE("securityRandomBytesFn",Pw(e)),e.securityRandomNumberFn=e.RULE("securityRandomNumberFn",Dw(e))},"register");function Bw(e){return()=>{e.sectionStack.push("security"),e.CONSUME(Lm),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.securityCheckPasswordFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateAuthTokenFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateCurveKeyFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreatePasswordFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateRsaKeyFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateSecretKeyFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateUuidFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityDecryptFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityEncryptFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJweDecodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJweEncodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJwsDecodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJwsEncodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityRandomBytesFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityRandomNumberFn),"ALT")}]),e.sectionStack.pop()}}r(Bw,"securityFn");function Gw(e){return()=>{let t=["value","filename","access"],n=["description","disabled"];e.sectionStack.push("storageCreateAttachmentFn");let o=e.CONSUME(Jm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Gw,"storageCreateAttachmentFn");function jw(e){return()=>{let t=["filename","filedata"],n=["description","disabled"];e.sectionStack.push("storageCreateFileResourceFn");let o=e.CONSUME(Xm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(jw,"storageCreateFileResourceFn");function Vw(e){return()=>{let t=["value","filename","access"],n=["description","disabled"];e.sectionStack.push("storageCreateImageFn");let o=e.CONSUME(Km);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Vw,"storageCreateImageFn");function Ww(e){return()=>{let t=["pathname"],n=["description","disabled"];e.sectionStack.push("storageDeleteFileFn");let o=e.CONSUME(Zm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(Ww,"storageDeleteFileFn");function zw(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("storageReadFileResourceFn");let o=e.CONSUME(Qm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(zw,"storageReadFileResourceFn");function Hw(e){return()=>{let t=["pathname","ttl"],n=["description","disabled"];e.sectionStack.push("storageSignPrivateUrlFn");let o=e.CONSUME($m);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Hw,"storageSignPrivateUrlFn");var Yw=r(e=>{e.storageCreateAttachmentFn=e.RULE("storageCreateAttachmentFn",Gw(e)),e.storageCreateFileResourceFn=e.RULE("storageCreateFileResourceFn",jw(e)),e.storageCreateImageFn=e.RULE("storageCreateImageFn",Vw(e)),e.storageDeleteFileFn=e.RULE("storageDeleteFileFn",Ww(e)),e.storageReadFileResourceFn=e.RULE("storageReadFileResourceFn",zw(e)),e.storageSignPrivateUrlFn=e.RULE("storageSignPrivateUrlFn",Hw(e))},"register");function Kw(e){return()=>{e.sectionStack.push("storage"),e.CONSUME(Ym),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.storageCreateAttachmentFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageCreateFileResourceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageCreateImageFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageDeleteFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageReadFileResourceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageSignPrivateUrlFn),"ALT")}]),e.sectionStack.pop()}}r(Kw,"storageFn");function Jw(e){let t=["value","separator","enclosure","escape_char"],n=["description","disabled"];return()=>{e.sectionStack.push("streamFromCsv");let o=e.CONSUME(th);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Jw,"streamFromCsvFn");function Qw(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("streamFromJsonl");let o=e.CONSUME(rh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Qw,"streamFromJsonlFn");function Xw(e){let t=["url","method","params","headers","timeout","follow_location"],n=["description","disabled","verify_host","verify_peer","ca_certificate","certificate","certificate_pass","private_key","private_key_pass"];return()=>{e.sectionStack.push("streamFromRequest");let o=e.CONSUME(nh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Xw,"streamFromRequestFn");var Zw=r(e=>{e.streamFromCsvFn=e.RULE("streamFromCsvFn",Jw(e)),e.streamFromJsonlFn=e.RULE("streamFromJsonlFn",Qw(e)),e.streamFromRequestFn=e.RULE("streamFromRequestFn",Xw(e))},"register");function $w(e){return()=>{e.sectionStack.push("stream"),e.CONSUME(eh),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.streamFromCsvFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.streamFromJsonlFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.streamFromRequestFn),"ALT")}]),e.sectionStack.pop()}}r($w,"streamFn");function eF(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("allTextWithoutReturnValueFn");let o=e.OR([{ALT:r(()=>e.CONSUME(mh),"ALT")},{ALT:r(()=>e.CONSUME(yh),"ALT")},{ALT:r(()=>e.CONSUME(_h),"ALT")},{ALT:r(()=>e.CONSUME(xh),"ALT")},{ALT:r(()=>e.CONSUME(Rh),"ALT")}]);e.SUBRULE(e.assignableVariableProperty),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(eF,"allTextWithoutReturnValueFn");function tF(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("allTextWithReturnValueFn");let o=e.OR([{ALT:r(()=>e.CONSUME(hh),"ALT")},{ALT:r(()=>e.CONSUME(gh),"ALT")},{ALT:r(()=>e.CONSUME(Th),"ALT")},{ALT:r(()=>e.CONSUME(Eh),"ALT")},{ALT:r(()=>e.CONSUME(Sh),"ALT")},{ALT:r(()=>e.CONSUME(bh),"ALT")}]);e.SUBRULE(e.assignableVariableProperty),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(tF,"allTextWithReturnValueFn");var rF=r(e=>{e.allTextWithoutReturnValueFn=e.RULE("allTextWithoutReturnValueFn",eF(e)),e.allTextWithReturnValueFn=e.RULE("allTextWithReturnValueFn",tF(e))},"register");function nF(e){return()=>{e.sectionStack.push("text"),e.CONSUME(Xi),e.CONSUME(w);let t=e.LA(1).image,n=["contains","ends_with","icontains","iends_with","istarts_with","starts_with"],o=["append","ltrim","prepend","rtrim","trim"];n.includes(t)?e.SUBRULE(e.allTextWithReturnValueFn):o.includes(t)&&e.SUBRULE(e.allTextWithoutReturnValueFn),e.sectionStack.pop()}}r(nF,"textFn");function oF(e){return()=>{e.sectionStack.push("unitExpect"),e.CONSUME(ea),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.unitExpectWithArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectWithoutArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectToThrowFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectToBeWithinFn),"ALT")}]),e.sectionStack.pop()}}r(oF,"unitExpectFn");function iF(e){return()=>{let t=["latitude_1","longitude_1","latitude_2","longitude_2"],n=["description","disabled"];e.sectionStack.push("utilGeoDistanceFn");let o=e.CONSUME(kh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(iF,"utilGeoDistanceFn");function aF(e){let t=[],n=["description","disabled"];return()=>{e.sectionStack.push("utilGetAllInputFn");let o=e.CONSUME(Uh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(aF,"utilGetAllInputFn");function sF(e){return()=>{let t=[],n=["description","disabled"];e.sectionStack.push("utilGetEnvFn");let o=e.CONSUME(vh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(sF,"utilGetEnvFn");function cF(e){return()=>{let t=["encoding"],n=["description","disabled"];e.sectionStack.push("utilGetInputFn");let o=e.CONSUME(Oh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(cF,"utilGetInputFn");function lF(e){return()=>{let t=[],n=["description","disabled"];e.sectionStack.push("utilGetVarsFn");let o=e.CONSUME(Lh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(lF,"utilGetVarsFn");function uF(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("utilIpLookupFn");let o=e.CONSUME(Nh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(uF,"utilIpLookupFn");function dF(e){return()=>{let t=!1;e.sectionStack.push("utilPostProcessFn"),e.CONSUME(Mh),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.SUBRULE(e.stackClause)},"ALT")}])}),t||e.SUBRULE(e.stackClause),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.sectionStack.pop()}}r(dF,"utilPostProcessFn");function pF(e){return()=>{let t=["value","duplicates"],n=["description","disabled"];e.sectionStack.push("utilSetHeaderFn");let o=e.CONSUME(Fh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(pF,"utilSetHeaderFn");function fF(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("utilSleepFn");let o=e.CONSUME(Ih);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(fF,"utilSleepFn");function mF(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("utilTemplateFn");let o=e.CONSUME(Ch);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(mF,"utilTemplateFn");var hF=r(e=>{e.utilGeoDistanceFn=e.RULE("utilGeoDistanceFn",iF(e)),e.utilGetAllInputFn=e.RULE("utilGetAllInputFn",aF(e)),e.utilGetEnvFn=e.RULE("utilGetEnvFn",sF(e)),e.utilGetInputFn=e.RULE("utilGetInputFn",cF(e)),e.utilGetVarsFn=e.RULE("utilGetVarsFn",lF(e)),e.utilIpLookupFn=e.RULE("utilIpLookupFn",uF(e)),e.utilPostProcessFn=e.RULE("utilPostProcessFn",dF(e)),e.utilSetHeaderFn=e.RULE("utilSetHeaderFn",pF(e)),e.utilSleepFn=e.RULE("utilSleepFn",fF(e)),e.utilTemplateFn=e.RULE("utilTemplateFn",mF(e))},"register");function gF(e){return()=>{e.sectionStack.push("util"),e.CONSUME(Ah),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.utilIpLookupFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetEnvFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilSleepFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetAllInputFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetInputFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetVarsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGeoDistanceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilPostProcessFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilSetHeaderFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilTemplateFn),"ALT")}]),e.sectionStack.pop()}}r(gF,"utilFn");function TF(e){return()=>{e.sectionStack.push("var");let t=e.CONSUME(Dh);e.OR([{ALT:r(()=>{let n=e.CONSUME(bt);n.image&&e.addVariable(n.image,"unknown")},"ALT")},{ALT:r(()=>{e.CONSUME(w),e.CONSUME(qh),e.SUBRULE(e.assignableVariableProperty)},"ALT")}]),e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{value:"[expression]","description?":"[string]","disabled?":"[boolean]","mock?":{"[string]":"[expression]"}}]}),e.sectionStack.pop()}}r(TF,"varFn");function EF(e){return()=>{e.sectionStack.push("workflowExpect"),e.CONSUME(ea),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.workflowExpectWithArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.workflowExpectWithoutArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.workflowExpectToThrowFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.workflowExpectToBeWithinFn),"ALT")}]),e.sectionStack.pop()}}r(EF,"workflowExpectFn");function SF(e){return()=>{let t=["file","zip"],n=["description","disabled","password","password_encryption","filename"];e.sectionStack.push("zipAddToArchiveFn");let o=e.CONSUME(ig);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(SF,"zipAddToArchiveFn");function yF(e){return()=>{let t=["filename"],n=["description","disabled","password","password_encryption"];e.sectionStack.push("zipCreateArchiveFn");let o=e.CONSUME(ag);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(yF,"zipCreateArchiveFn");function _F(e){return()=>{let t=["filename","zip"],n=["description","disabled","password"];e.sectionStack.push("zipDeleteFromArchiveFn");let o=e.CONSUME(sg);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(_F,"zipDeleteFromArchiveFn");function xF(e){return()=>{let t=["zip"],n=["description","disabled","password"];e.sectionStack.push("zipExtractFn");let o=e.CONSUME(cg);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(xF,"zipExtractFn");function bF(e){return()=>{let t=["zip"],n=["description","disabled","password"];e.sectionStack.push("zipViewContentsFn");let o=e.CONSUME(lg);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(bF,"zipViewContentsFn");var RF=r(e=>{e.zipAddToArchiveFn=e.RULE("zipAddToArchiveFn",SF(e)),e.zipCreateArchiveFn=e.RULE("zipCreateArchiveFn",yF(e)),e.zipDeleteFromArchiveFn=e.RULE("zipDeleteFromArchiveFn",_F(e)),e.zipExtractFn=e.RULE("zipExtractFn",xF(e)),e.zipViewContentsFn=e.RULE("zipViewContentsFn",bF(e))},"register");function AF(e){return()=>{e.sectionStack.push("zip"),e.CONSUME(og),e.CONSUME(w),e.OR([{ALT:r(()=>e.SUBRULE(e.zipCreateArchiveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipAddToArchiveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipDeleteFromArchiveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipExtractFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipViewContentsFn),"ALT")}]),e.sectionStack.pop()}}r(AF,"zipFn");var kF=r(e=>{e.aiFn=e.RULE("aiFn",$L(e)),e.apiFn=e.RULE("apiFn",aN(e)),e.arrayFn=e.RULE("arrayFn",RN(e)),e.cloudFn=e.RULE("cloudFn",WN(e)),e.controlFn=e.RULE("controlFn",zN(e)),e.dbFn=e.RULE("dbFn",CM(e)),e.debugFn=e.RULE("debugFn",NM(e)),e.mathFn=e.RULE("mathFn",WM(e)),e.objectFn=e.RULE("objectFn",JM(e)),e.redisFn=e.RULE("redisFn",pw(e)),e.securityFn=e.RULE("securityFn",Bw(e)),e.storageFn=e.RULE("storageFn",Kw(e)),e.streamFn=e.RULE("streamFn",$w(e)),e.textFn=e.RULE("textFn",nF(e)),e.utilFn=e.RULE("utilFn",gF(e)),e.varFn=e.RULE("varFn",TF(e)),e.zipFn=e.RULE("zipFn",AF(e)),e.unitExpectFn=e.RULE("unitExpectFn",oF(e)),e.workflowExpectFn=e.RULE("workflowExpectFn",EF(e)),ZL(e),bw(e),iN(e),bN(e),VN(e),dM(e),UM(e),LM(e),VM(e),KM(e),dw(e),qw(e),Yw(e),Zw(e),rF(e),hF(e),RF(e),GM(e)},"register");function UF(e){return(t,n,o,i={})=>{e.CONSUME(ze),e.OPTION(()=>{e.OR([{ALT:r(()=>{e.CONSUME(p),e.AT_LEAST_ONE(()=>{e.SUBRULE(e.objectAttrReq,{ARGS:[t,n,o,i]}),e.OPTION1(()=>e.CONSUME(_e)),e.AT_LEAST_ONE1(()=>e.CONSUME3(p))})},"ALT")},{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:_e,DEF:r(()=>{e.SUBRULE1(e.objectAttrReq,{ARGS:[t,n,o,i]})},"DEF")}),e.MANY(()=>e.CONSUME2(p))},"ALT")}])}),e.CONSUME(He)}}r(UF,"arrayOfObjectAttrReq");function CF(e){return()=>{e.CONSUME(ze),e.OPTION(()=>{e.OR([{ALT:r(()=>{e.CONSUME(p),e.AT_LEAST_ONE(()=>{e.CONSUME(U),e.OPTION1(()=>e.CONSUME(_e)),e.AT_LEAST_ONE1(()=>e.CONSUME3(p))})},"ALT")},{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:_e,DEF:r(()=>{e.CONSUME1(U)},"DEF")}),e.MANY(()=>e.CONSUME2(p))},"ALT")}])}),e.CONSUME(He)}}r(CF,"arrayOfStringLiterals");function vF(e){return(t={})=>{e.CONSUME(ze),e.OPTION(()=>e.OR([{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:_e,DEF:r(()=>{e.SUBRULE(e.valueExpression,{ARGS:[{...t,allowObject:!0,allowArray:!0}]})},"DEF")})},"ALT")},{ALT:r(()=>{e.CONSUME(p),e.AT_LEAST_ONE(()=>{e.SUBRULE1(e.valueExpression,{ARGS:[{...t,allowObject:!0,allowArray:!0}]}),e.AT_LEAST_ONE1(()=>e.CONSUME1(p))})},"ALT")}])),e.CONSUME(He)}}r(vF,"arrayWithValues");function OF(e){return()=>{e.OR([{ALT:r(()=>{e.CONSUME(bt)},"ALT")},{ALT:r(()=>{e.CONSUME(ao),e.CONSUME(w),e.CONSUME(E)},"ALT")}])}}r(OF,"assignableVariableAs");function LF(e){return()=>{let t="";e.OR({DEF:[{ALT:r(()=>{t=e.CONSUME(bt).image},"ALT")},{ALT:r(()=>{e.CONSUME(ao),e.CONSUME(w),t=`$${e.CONSUME(E).image}`},"ALT")}],ERR_MSG:"expecting variable (e.g. $variable or $var.variable)"}),e.SUBRULE(e.chainedIdentifier),e.MANY({GATE:r(()=>e.LA(1).tokenType===Et||e.LA(1).tokenType===p&&e.LA(2).tokenType===Et,"GATE"),DEF:r(()=>{e.SUBRULE(e.filterFn)},"DEF")}),t&&e.addVariable(t,"unknown")}}r(LF,"assignableVariableProperty");function NF(e){return()=>{e.OPTION(()=>{e.CONSUME(It),e.SUBRULE(e.assignableVariableProperty)})}}r(NF,"asVariable");function MF(e){return()=>{e.OR([{ALT:r(()=>{e.CONSUME(Ze)},"ALT")},{ALT:r(()=>{e.CONSUME($e)},"ALT")}])}}r(MF,"booleanValue");function wF(e){return()=>{e.OR(Ad.map(t=>({ALT:r(()=>e.CONSUME(t),"ALT")}))),e.CONSUME(U)}}r(wF,"castedValue");function FF(e){return()=>{e.OPTION(()=>{e.CONSUME(ze),e.OR({DEF:[{ALT:r(()=>e.SUBRULE(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")},{ALT:r(()=>e.CONSUME(Le),"ALT")}],ERR_MSG:"Invalid array index"}),e.CONSUME(He)}),e.MANY(()=>{e.CONSUME(w),e.CONSUME(E),e.OPTION1(()=>{e.CONSUME1(ze),e.OR1({DEF:[{ALT:r(()=>e.SUBRULE1(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE1(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE1(e.shortFormVariable),"ALT")},{ALT:r(()=>e.CONSUME1(Le),"ALT")}],ERR_MSG:"Invalid array index"}),e.CONSUME1(He)})})}}r(FF,"chainedIdentifier");function IF(e){return()=>{e.CONSUME(jh),e.SUBRULE(e.chainedIdentifier)}}r(IF,"completeAuthVariable");function PF(e){return()=>{e.CONSUME(Gh),e.CONSUME(w),e.OR([{ALT:r(()=>e.CONSUME(Vh),"ALT")},{ALT:r(()=>e.CONSUME(Wh),"ALT")},{ALT:r(()=>e.CONSUME(zh),"ALT")},{ALT:r(()=>e.CONSUME(Hh),"ALT")},{ALT:r(()=>e.CONSUME(Yh),"ALT")},{ALT:r(()=>e.CONSUME(Kh),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}])}}r(PF,"completeEnvVariable");function DF(e){return()=>{e.CONSUME(Bh),e.SUBRULE(e.chainedIdentifier)}}r(DF,"completeInputVariable");function qF(e){return(...t)=>{let n=t||[],o=e.CONSUME3(U),i=Te(o);n.includes(i)||e.addMissingError(o,`Invalid value "${i}". Must be one of: ${n.map(a=>`"${a}"`).join(", ")}`)}}r(qF,"enumValue");function BF(e){return(t={},n=null)=>{e.OR([{ALT:r(()=>{e.CONSUME(p),e.CONSUME(Et)},"ALT")},{ALT:r(()=>e.CONSUME1(Et),"ALT")}]);let o=t.allowQueryExpression===!0?oL:vg;e.OPTION(()=>e.CONSUME(br));let i=e.CONSUME(E);o.includes(i.image)||e.addInvalidValueError(i,`Unknown filter function '${i.image}'`),e.MANY1(()=>{e.CONSUME(pe),e.SUBRULE(e.valueExpression,{ARGS:[t,n]})})}}r(BF,"filterFn");var t3={allowDuplicates:[],allowQueryExpression:!1,allowDisabledKeys:!1,types:{}};function GF(e){return(t,n,o,i={})=>{n=n||[],o=o||[];let a=!1,s=!1;i={...t3,...i};let c=[],l=[...n,...o];e.OR({IGNORE_AMBIGUITIES:!0,DEF:[{GATE:r(()=>n.length===0,"GATE"),ALT:r(()=>{e.OPTION(()=>{e.CONSUME(A),e.MANY(()=>{e.OR1([{GATE:r(()=>!a,"GATE"),ALT:r(()=>e.MANY1(()=>e.CONSUME1(p)),"ALT")},{GATE:r(()=>a,"GATE"),ALT:r(()=>e.AT_LEAST_ONE(()=>e.CONSUME2(p)),"ALT")}]),e.OR2([{ALT:r(()=>{let y=e.CONSUME(E);c.push(y),e.CONSUME(b);let M=Te(y),L=i.types[M];if(typeof L=="function")L.call(null,e,y);else if(Array.isArray(L)){let q=e.CONSUME3(U),N=Te(q);L.includes(N)||e.addMissingError(q,`Invalid value "${N}". Must be one of: ${L.map(S=>`"${S}"`).join(", ")}`)}else e.OR4({DEF:[{GATE:r(()=>L==="boolean","GATE"),ALT:r(()=>e.SUBRULE(e.booleanValue),"ALT")},{GATE:r(()=>L==="number","GATE"),ALT:r(()=>e.SUBRULE(e.numberValue),"ALT")},{GATE:r(()=>L==="string","GATE"),ALT:r(()=>e.CONSUME1(U),"ALT")},{GATE:r(()=>L==="object","GATE"),ALT:r(()=>e.SUBRULE1(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!L,"GATE"),ALT:r(()=>e.SUBRULE(e.valueExpression,{ARGS:[i]}),"ALT")}],ERR_MSG:L?`${L} for attribute ${y.image}`:void 0});a=!0},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.mockAttribute),a=!0},"ALT")}])}),e.MANY2(()=>e.CONSUME3(p)),e.CONSUME(k)})},"ALT")},{GATE:r(()=>n.length>0,"GATE"),ALT:r(()=>{e.CONSUME1(A),e.MANY4(()=>{e.OR3([{GATE:r(()=>!a,"GATE"),ALT:r(()=>e.MANY5(()=>e.CONSUME4(p)),"ALT")},{GATE:r(()=>a,"GATE"),ALT:r(()=>e.AT_LEAST_ONE1(()=>e.CONSUME5(p)),"ALT")}]),e.OR5([{ALT:r(()=>{let y=e.CONSUME1(E);c.push(y),e.CONSUME1(b);let M=Te(y),L=i.types[M];if(typeof L=="function")L.call(null,e,y);else if(Array.isArray(L)){let q=e.CONSUME3(U),N=Te(q);L.includes(N)||e.addMissingError(q,`Invalid value "${N}". Must be one of: ${L.map(S=>`"${S}"`).join(", ")}`)}else e.OR6({DEF:[{GATE:r(()=>L==="boolean","GATE"),ALT:r(()=>e.SUBRULE2(e.booleanValue),"ALT")},{GATE:r(()=>L==="number","GATE"),ALT:r(()=>e.SUBRULE2(e.numberValue),"ALT")},{GATE:r(()=>L==="string","GATE"),ALT:r(()=>e.CONSUME2(U),"ALT")},{GATE:r(()=>L==="object","GATE"),ALT:r(()=>e.SUBRULE2(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!L,"GATE"),ALT:r(()=>e.SUBRULE2(e.valueExpression,{ARGS:[i]}),"ALT")}],ERR_MSG:L?`${L} for attribute ${y.image}`:void 0});a=!0},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{e.SUBRULE2(e.mockAttribute),s=!0,a=!0},"ALT")}])}),e.MANY6(()=>e.CONSUME6(p)),e.CONSUME1(k)},"ALT")}]});let d=c.filter((y,M)=>!i.allowDuplicates.includes(y.image)&&c.findIndex(L=>L.image===y.image)!==M);for(let y of d)e.addDuplicateAttributeError(y);let f=c.filter(y=>!l.includes(y.image));for(let y of f)e.addIllegalAttributeError(y);let g=c.map(y=>y.image),_=n.filter(y=>!g.includes(y));_.length>0&&e.addMissingAttributeError(t,_),e.sectionStack.pop()}}r(GF,"functionAttrReq");function jF(e){return()=>{e.CONSUME(ao),e.SUBRULE(e.chainedIdentifier)}}r(jF,"longFormVariable");function VF(e){return()=>{e.sectionStack.push("minimalFnBody"),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.sectionStack.pop()}}r(VF,"minimalFnBody");function WF(e){return()=>{let t=e.CONSUME(Ag);e.CONSUME(b),e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,{"[string]":"[expression]"}]}),e.sectionStack.pop()}}r(WF,"mockAttribute");function zF(e){return()=>{e.OR([{ALT:r(()=>{e.CONSUME(Le,{ERR_MSG:"Integer literal expected"})},"ALT")},{ALT:r(()=>{e.CONSUME(vt,{ERR_MSG:"Float literal expected"})},"ALT")}],{ERR_MSG:"Number literal expected"})}}r(zF,"numberValue");var r3={allowDuplicates:[],allowQueryExpression:!1,recursive:[],recursiveArray:[],allowVariables:!0,types:{}};function HF(e){return(t,n,o,i={})=>{n=n||[],o=o||[],i={...r3,...i};let a=[],s=[...n,...o],c;e.CONSUME(A),e.OPTION(()=>{e.OR([{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:_e,DEF:r(()=>{e.OR1([{ALT:r(()=>c=e.CONSUME(E),"ALT")},{ALT:r(()=>c=e.CONSUME(U),"ALT")}]),a.push(c);let _=Te(c);if(e.CONSUME(pe),i.recursive.includes(_))e.SUBRULE(e.objectAttrReq,{ARGS:[c,n,o,i]});else if(i.recursiveArray.includes(_))e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[c,n,o,i]});else{let y=i.types[_];if(typeof y=="function")y.call(null,e,c);else if(Array.isArray(y)){let M=e.CONSUME3(U),L=Te(M);y.includes(L)||e.addMissingError(M,`Invalid value "${L}". Must be one of: ${y.map(q=>`"${q}"`).join(", ")}`)}else e.OR4([{GATE:r(()=>y==="boolean","GATE"),ALT:r(()=>e.SUBRULE(e.booleanValue),"ALT")},{GATE:r(()=>y==="number","GATE"),ALT:r(()=>e.SUBRULE(e.numberValue),"ALT")},{GATE:r(()=>y==="string","GATE"),ALT:r(()=>e.CONSUME3(U),"ALT")},{GATE:r(()=>y==="object","GATE"),ALT:r(()=>e.SUBRULE1(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!y,"GATE"),ALT:r(()=>e.SUBRULE(e.valueExpression,{ARGS:[i]}),"ALT")}])}},"DEF")})},"ALT")},{ALT:r(()=>{e.CONSUME(p),e.AT_LEAST_ONE(()=>{e.OR2([{ALT:r(()=>c=e.CONSUME2(E),"ALT")},{ALT:r(()=>c=e.CONSUME2(U),"ALT")}]),a.push(c),e.CONSUME1(pe);let _=Te(c);if(i.recursive.includes(_))e.SUBRULE(e.objectAttrReq,{ARGS:[c,n,o,i]});else if(i.recursiveArray.includes(_))e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[c,n,o,i]});else{let y=i.types[_];if(typeof y=="function")y.call(null,e,c);else if(Array.isArray(y)){let M=e.CONSUME3(U),L=Te(M);y.includes(L)||e.SAVE_ERROR(new it(`Invalid value "${L}". Must be one of: ${y.map(q=>`"${q}"`).join(", ")}`,M,M))}else e.OR3([{GATE:r(()=>y==="boolean","GATE"),ALT:r(()=>e.SUBRULE1(e.booleanValue),"ALT")},{GATE:r(()=>y==="number","GATE"),ALT:r(()=>e.SUBRULE1(e.numberValue),"ALT")},{GATE:r(()=>y==="string","GATE"),ALT:r(()=>e.OR5([{ALT:r(()=>e.CONSUME1(U),"ALT")},{ALT:r(()=>e.CONSUME(Dt),"ALT")}]),"ALT")},{GATE:r(()=>y==="object","GATE"),ALT:r(()=>e.SUBRULE(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!y,"GATE"),ALT:r(()=>e.SUBRULE1(e.valueExpression,{ARGS:[i]}),"ALT")}])}e.OPTION1(()=>e.CONSUME(_e)),e.AT_LEAST_ONE1(()=>e.CONSUME1(p))})},"ALT")}])}),e.CONSUME(k);let l=a.filter((_,y)=>!i.allowDuplicates.includes(Te(_))&&a.findIndex(M=>Te(M)===Te(_))!==y);for(let _ of l)e.addDuplicateAttributeError(_);let d=a.filter(_=>!s.includes(Te(_)));for(let _ of d)e.addIllegalAttributeError(_);let f=a.map(Te),g=n.filter(_=>!f.includes(_));g.length>0&&e.addMissingAttributeError(t,g)}}r(HF,"objectAttrReq");function YF(e){return(t={})=>{let n=[],o=e.CONSUME(A);e.MANY(()=>e.CONSUME(p)),e.MANY_SEP({SEP:p,DEF:r(()=>{let i=!1,a=!1;e.MANY1(()=>{i&&!a&&e.addMissingError(o,"Expected a separator between attributes"),e.OPTION1({GATE:r(()=>t.allowDisabledKeys===!0,"GATE"),DEF:r(()=>e.CONSUME(br),"DEF")});let s=e.OR1([{ALT:r(()=>e.CONSUME2(E),"ALT")},{ALT:r(()=>e.CONSUME2(U),"ALT")}]),c=Te(s);n.includes(c)?e.addDuplicateAttributeError(s):n.push(c),e.CONSUME(pe),e.SUBRULE(e.valueExpression,{ARGS:[t]}),e.OPTION(()=>{e.CONSUME(_e),a=!0}),i=!0})},"DEF")}),e.MANY3(()=>e.CONSUME3(p)),e.CONSUME(k)}}r(YF,"objectWithAttributes");function KF(e){return()=>{e.AT_LEAST_ONE(()=>{e.CONSUME(Et),e.CONSUME(E),e.MANY1(()=>{e.CONSUME(pe),e.SUBRULE(e.valueExpression)})})}}r(KF,"pipedFilter");function JF(e){return()=>{e.sectionStack.push("requiredValueFnBody");let t=!1;e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.sectionStack.pop()}}r(JF,"requiredValueFnBody");function QF(e){return()=>{e.CONSUME(bt),e.SUBRULE(e.chainedIdentifier)}}r(QF,"shortFormVariable");var XF=r(e=>()=>{let t=!0,n=e.CONSUME(ze);e.MANY(()=>e.CONSUME(p)),e.MANY1(()=>{t||e.addMissingError(n,"Missing comma or newline between string values in the array"),n=e.CONSUME(U),t=!1,e.OPTION(()=>{e.CONSUME(_e),t=!0}),e.MANY2(()=>{e.CONSUME1(p),t=!0})}),e.CONSUME(He)},"stringArray");function ZF(e){return()=>{e.CONSUME(ug),e.CONSUME(b),e.SUBRULE(e.stringArray)}}r(ZF,"tagsAttribute");var n3={allowQueryExpression:!1,allowIdentifier:!0,allowOptionalIfNull:!1,allowVariables:!0,allowDisabledKeys:!1},o3=[Ws,zs,Hs,Ys,yd,Ks,_d,Js,fc,rc,nc,oc,ac,ic,Qs,Xs,Zs,$s,ec,tc,sc,cc,lc,uc];function $F(e){return(t={},n=null)=>{t={...n3,...t};let o=!1,i=!1,a=!1,s=n===null;n=n||{openParentheses:0},e.MANY(()=>{n.openParentheses+=1,a=!0,e.CONSUME(ce)});let c=t.allowVariables,l=t.allowIdentifier,d=e.OR({DEF:[{ALT:r(()=>(e.CONSUME(U),!0),"ALT")},{ALT:r(()=>(e.CONSUME(eo),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Le),!0),"ALT")},{ALT:r(()=>(e.CONSUME(vt),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Ze),!0),"ALT")},{ALT:r(()=>(e.CONSUME($e),!0),"ALT")},{ALT:r(()=>(e.CONSUME(lo),!0),"ALT")},{ALT:r(()=>(e.CONSUME(co),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Dt),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Zf),!0),"ALT")},{ALT:r(()=>(e.CONSUME(vf),!0),"ALT")},{GATE:r(()=>c,"GATE"),ALT:r(()=>(e.OR8([{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeAuthVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeEnvVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")}]),!0),"ALT")},{ALT:r(()=>(e.SUBRULE(e.castedValue),!0),"ALT")},{ALT:r(()=>(e.SUBRULE(e.objectWithAttributes,{ARGS:[t]}),!0),"ALT")},{ALT:r(()=>(e.SUBRULE(e.arrayWithValues,{ARGS:[t]}),!0),"ALT")},{ALT:r(()=>!1,"ALT")}]});e.OPTION4({GATE:r(()=>!d,"GATE"),DEF:r(()=>{l||e.addInvalidValueError(null,c?"cannot use identifiers in this context":"cannot use variables in this context"),e.CONSUME(E)},"DEF")}),e.OPTION1({GATE:r(()=>e.LA(1).tokenType===Et||e.LA(1).tokenType===p&&e.LA(2).tokenType===Et,"GATE"),DEF:r(()=>{o=!0,e.SUBRULE(e.filterFn,{ARGS:[t,n]})},"DEF")}),e.OPTION3({GATE:r(()=>n.openParentheses>0,"GATE"),DEF:r(()=>{i=a,n.openParentheses-=1,e.OPTION8(()=>e.CONSUME1(p)),e.CONSUME(ne),e.MANY1(()=>{e.CONSUME(w),e.CONSUME2(E)})},"DEF")});let f=!o||i;e.OPTION({GATE:r(()=>f,"GATE"),DEF:r(()=>{let g=e.OR7([{ALT:r(()=>e.CONSUME(Ws),"ALT")},{ALT:r(()=>e.CONSUME(zs),"ALT")},{ALT:r(()=>e.CONSUME(Hs),"ALT")},{ALT:r(()=>e.CONSUME(Ys),"ALT")},{ALT:r(()=>e.CONSUME(yd),"ALT")},{ALT:r(()=>e.CONSUME(Ks),"ALT")},{ALT:r(()=>e.CONSUME(_d),"ALT")},{ALT:r(()=>e.CONSUME(Js),"ALT")},{ALT:r(()=>e.CONSUME(Td),"ALT")},{ALT:r(()=>e.CONSUME(gd),"ALT")},{ALT:r(()=>e.CONSUME(Ed),"ALT")},{ALT:r(()=>e.CONSUME(Sd),"ALT")},{ALT:r(()=>e.CONSUME(bd),"ALT")},{ALT:r(()=>e.CONSUME(xd),"ALT")},{ALT:r(()=>e.CONSUME(yy),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(_y),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(fc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(rc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(nc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(oc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(ac),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(ic),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Qs),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Xs),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Zs),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME($s),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(ec),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(tc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(sc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(cc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(lc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(uc),"ALT")},{ALT:r(()=>e.CONSUME(Rd),"ALT")}]);e.OPTION7({GATE:r(()=>t.allowOptionalIfNull&&o3.includes(g.tokenType),"GATE"),DEF:r(()=>e.CONSUME1(dr),"DEF")}),e.SUBRULE1(e.valueExpression,{ARGS:[t,n]})},"DEF")}),e.OPTION2({GATE:r(()=>f&&!t.allowQueryExpression,"GATE"),DEF:r(()=>{e.CONSUME(dr),e.SUBRULE2(e.valueExpression,{ARGS:[t,n]}),e.CONSUME2(pe),e.SUBRULE3(e.valueExpression,{ARGS:[t,n]})},"DEF")}),e.MANY3({GATE:r(()=>n.openParentheses>0,"GATE"),DEF:r(()=>{n.openParentheses-=1,e.OPTION5(()=>e.CONSUME2(p)),e.CONSUME2(ne)},"DEF")}),e.MANY2({GATE:r(()=>e.LA(1).tokenType===Et||e.LA(1).tokenType===p&&e.LA(2).tokenType===Et,"GATE"),DEF:r(()=>{e.SUBRULE1(e.filterFn,{ARGS:[t,n]})},"DEF")}),s&&n.openParentheses>0&&e.addMissingError(null,"Unmatched opening parenthesis, missing closing parenthesis")}}r($F,"valueExpression");function eI(e){return Object.hasOwn(e,"emptyArray")||(e.emptyArray=e.RULE("emptyArray",()=>{e.CONSUME(ze),e.CONSUME(He)})),()=>{e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(eo),"ALT")},{ALT:r(()=>e.CONSUME(vt),"ALT")},{ALT:r(()=>e.CONSUME(Le),"ALT")},{ALT:r(()=>e.CONSUME(Ze),"ALT")},{ALT:r(()=>e.CONSUME($e),"ALT")},{ALT:r(()=>e.CONSUME(co),"ALT")},{ALT:r(()=>e.CONSUME(lo),"ALT")},{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeAuthVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeEnvVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.castedValue),"ALT")},{ALT:r(()=>e.SUBRULE(e.emptyArray),"ALT")}]),e.OPTION(()=>{e.SUBRULE(e.pipedFilter)})}}r(eI,"valueExpressionForResponse");function tI(e){return()=>{e.OR([{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")}]),e.OPTION(()=>e.SUBRULE(e.pipedFilter))}}r(tI,"variableOnly");var rI=r(e=>{e.mockAttribute=e.RULE("mockAttribute",WF(e)),e.arrayOfObjectAttrReq=e.RULE("arrayOfObjectAttrReq",UF(e)),e.arrayOfStringLiterals=e.RULE("arrayOfStringLiterals",CF(e)),e.arrayWithValues=e.RULE("arrayWithValues",vF(e)),e.assignableVariableAs=e.RULE("assignableVariableAs",OF(e)),e.assignableVariableProperty=e.RULE("assignableVariableProperty",LF(e)),e.booleanValue=e.RULE("booleanValue",MF(e)),e.castedValue=e.RULE("castedValue",wF(e)),e.chainedIdentifier=e.RULE("chainedIdentifier",FF(e)),e.enumValue=e.RULE("enumValue",qF(e)),e.functionAttrReq=e.RULE("functionAttrReq",GF(e)),e.filterFn=e.RULE("filterFn",BF(e)),e.longFormVariable=e.RULE("longFormVariable",jF(e)),e.minimalFnBody=e.RULE("minimalFnBody",VF(e)),e.numberValue=e.RULE("numberValue",zF(e)),e.objectAttrReq=e.RULE("objectAttrReq",HF(e)),e.objectWithAttributes=e.RULE("objectWithAttributes",YF(e)),e.pipedFilter=e.RULE("pipedFilter",KF(e)),e.requiredValueFnBody=e.RULE("requiredValueFnBody",JF(e)),e.shortFormVariable=e.RULE("shortFormVariable",QF(e)),e.stringArray=e.RULE("stringArray",XF(e)),e.tagsAttribute=e.RULE("tagsAttribute",ZF(e)),e.valueExpression=e.RULE("valueExpression",$F(e)),e.valueExpressionForResponse=e.RULE("valueExpressionForResponse",eI(e)),e.variableOnly=e.RULE("variableOnly",tI(e)),e.completeAuthVariable=e.RULE("completeAuthVariable",IF(e)),e.completeInputVariable=e.RULE("completeInputVariable",DF(e)),e.completeEnvVariable=e.RULE("completeEnvVariable",PF(e)),e.asVariable=e.RULE("asVariable",NF(e))},"register");function nI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1;e.sectionStack.push("mcpServerDeclaration");let d=e.CONSUME(Wf);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(jf),e.CONSUME(b),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.canonicalClause)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE1(e.flexibleStringClause,{ARGS:[Vf]})},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0;let f=e.CONSUME(zf);e.CONSUME2(b),e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[f,["name"],["active","auth"],{types:{active:"boolean",auth:"string",name:"string"}}]})},"ALT")}])}),n||e.addMissingError(d,"{} is missing canonical clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(nI,"mcpServerDeclaration");function oI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1;e.sectionStack.push("mcpServerTriggerDeclaration");let f=e.CONSUME(Kf);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let g=e.CONSUME(Hf);e.CONSUME(b),e.SUBRULE(e.objectAttrReq,{ARGS:[g,["connection"],[],{types:{connection:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(Yf),e.CONSUME2(b),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.mcpServerClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),s||e.addMissingError(f,"{} is missing mcp_server clause"),a||e.addMissingError(f,"{} is missing an input clause"),l||e.addMissingError(f,"{} is missing a stack clause"),c||e.addMissingError(f,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(oI,"mcpServerTriggerDeclaration");function iI(e){return()=>{e.sectionStack.push("columnMetadataDefinition"),e.CONSUME(A),e.AT_LEAST_ONE(()=>{e.CONSUME(p),e.OR([{ALT:r(()=>e.SUBRULE(e.sensitiveFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>{e.CONSUME(no),e.CONSUME(b),e.CONSUME(U)},"ALT")}])}),e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.CONSUME(k),e.sectionStack.pop()}}r(iI,"columnMetadataDefinition");function aI(e){return t=>{e.sectionStack.push("enumColumnMetadataDefinition"),e.CONSUME(A);let n=!1,o=!1,i=!1;e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.OR([{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.valuesFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>e.SUBRULE(e.sensitiveFieldAttribute),"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")}])}),n||e.addMissingError(t,"{} is missing the values attribute"),e.AT_LEAST_ONE2(()=>e.CONSUME2(p)),e.CONSUME(k),e.sectionStack.pop()}}r(aI,"enumColumnMetadataDefinition");function sI(e){return()=>{e.sectionStack.push("objectColumnMetadataDefinition"),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.sensitiveFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.schemaClause,{ARGS:[{include_file:!1}]}),"ALT")}])}),e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.CONSUME(k),e.sectionStack.pop()}}r(sI,"objectColumnMetadataDefinition");function cI(e){e.columnMetadataDefinition=e.RULE("columnMetadataDefinition",iI(e)),e.enumColumnMetadataDefinition=e.RULE("enumColumnMetadataDefinition",aI(e)),e.objectColumnMetadataDefinition=e.RULE("objectColumnMetadataDefinition",sI(e))}r(cI,"register");function lI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1,f=[];e.sectionStack.push("middlewareDeclaration");let g=e.CONSUME(Qf);e.OR([{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME(U),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.CONSUME(Jf),e.CONSUME(b),e.SUBRULE(e.enumValue,{ARGS:["silent","rethrow","critical"]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.CONSUME(Xf),e.CONSUME2(b),e.SUBRULE2(e.enumValue,{ARGS:["merge","replace"]})},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[f]})},"ALT")}])}),a||e.addMissingError(g,"{} is missing an input clause"),l||e.addMissingError(g,"{} is missing a stack clause"),s||e.addMissingError(g,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(lI,"middlewareDeclaration");function uI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1,f=!1,g=[];e.sectionStack.push("queryDeclaration");let _=e.CONSUME(nm);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")},{ALT:r(()=>e.CONSUME(Ia),"ALT")},{ALT:r(()=>e.CONSUME(ar),"ALT")}]),e.CONSUME(Aa),e.CONSUME(b),e.OR1([{ALT:r(()=>e.CONSUME(Oa),"ALT")},{ALT:r(()=>e.CONSUME(ka),"ALT")},{ALT:r(()=>e.CONSUME(Ua),"ALT")},{ALT:r(()=>e.CONSUME(Ca),"ALT")},{ALT:r(()=>e.CONSUME(va),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(Da),e.CONSUME1(b),e.CONSUME1(U)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.cacheClause)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!f,"GATE"),ALT:r(()=>{f=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[g]})},"ALT")}])}),s||e.addMissingError(_,"{} is missing an input clause"),d||e.addMissingError(_,"{} is missing a stack clause"),l||e.addMissingError(_,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(uI,"queryDeclaration");function dI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1;e.sectionStack.push("realtimeTriggerDeclaration");let f=e.CONSUME(mm);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let g=e.CONSUME(pm);e.CONSUME(b),e.SUBRULE(e.objectAttrReq,{ARGS:[g,[],["join","message"],{types:{join:"boolean",message:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(fm),e.CONSUME2(b),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.channelClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),o||e.addMissingError(f,"{} is missing channel clause"),s||e.addMissingError(f,"{} is missing an input clause"),l||e.addMissingError(f,"{} is missing a stack clause"),c||e.addMissingError(f,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(dI,"realtimeTriggerDeclaration");function pI(e){return()=>{e.sectionStack.push("tableDeclaration"),e.CONSUME(no),e.OR1([{ALT:r(()=>e.CONSUME(U,{ERR_MSG:"expected table name after table statement"}),"ALT")},{ALT:r(()=>e.CONSUME(E,{ERR_MSG:"expected table name after table statement"}),"ALT")}]);let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c={};e.CONSUME(A),e.sectionStack.push("tableBody"),e.MANY1(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>e.SUBRULE(e.tagsAttribute),"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>e.SUBRULE(e.authClause),"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>e.SUBRULE(e.viewClause),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>e.SUBRULE(e.schemaClause,{ARGS:[{isTableSchema:!0},c]}),"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>e.SUBRULE(e.indexClause),"ALT")}])}),e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.sectionStack.pop(),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(pI,"tableDeclaration");function fI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1;e.sectionStack.push("tableTriggerDeclaration");let f=e.CONSUME(sh);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let g=e.CONSUME(oh);e.CONSUME(b),e.SUBRULE(e.objectAttrReq,{ARGS:[g,[],["delete","insert","truncate","update"],{types:{delete:"boolean",insert:"boolean",truncate:"boolean",update:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(ih),e.CONSUME2(b),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.CONSUME(ah),e.CONSUME3(b),e.SUBRULE(e.arrayOfStringLiterals)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.dbTableClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),i||e.addMissingError(f,"{} is missing table clause"),c||e.addMissingError(f,"{} is missing an input clause"),l||e.addMissingError(f,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(fI,"tableTriggerDeclaration");function mI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1,f=[];e.sectionStack.push("taskDeclaration"),e.CONSUME(Ma),e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(Ji),e.CONSUME(b),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(lh),e.CONSUME2(b),e.CONSUME2(U)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.scheduleClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[f]})},"ALT")}])}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(mI,"taskDeclaration");function hI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1;e.sectionStack.push("toolDeclaration");let f=e.CONSUME(xa);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.flexibleStringClause,{ARGS:[Gf]})},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.stackClause,{ARGS:[{allowCallStatements:!0}]})},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),i||e.addMissingError(f,"{} is missing an input clause"),l||e.addMissingError(f,"{} is missing a stack clause"),c||e.addMissingError(f,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(hI,"toolDeclaration");function gI(e){return()=>{let t=!1,n=!1,o=!1,i=!1;e.sectionStack.push("workflowTestDeclaration");let a=e.CONSUME(Qh);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(wa),e.CONSUME(b),e.CONSUME2(U)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.stackClause,{ARGS:[{allowExpectStatements:!0,allowCallStatements:!0}]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),o||e.addMissingError(a,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(gI,"workflowTestDeclaration");function TI(e){return()=>{let t=!1,n=!1,o=!1,i=!1;e.sectionStack.push("workspaceDeclaration"),e.CONSUME(eg),e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let a=e.CONSUME(Xh);e.CONSUME(b),e.SUBRULE(e.objectAttrReq,{ARGS:[a,[],["ai_terms"],{types:{ai_terms:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0;let a=e.CONSUME(Zh);e.CONSUME2(b),e.SUBRULE2(e.objectAttrReq,{ARGS:[a,[],["internal_docs","sql_columns","sql_names","track_performance"],{types:{internal_docs:"boolean",sql_columns:"boolean",sql_names:"boolean",track_performance:"boolean"}}]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0;let a=e.CONSUME($h);e.CONSUME3(b),e.SUBRULE3(e.objectAttrReq,{ARGS:[a,[],["canonical"],{types:{canonical:"string"}}]})},"ALT")}])}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(TI,"workspaceDeclaration");function EI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1;e.sectionStack.push("workspaceTriggerDeclaration");let l=e.CONSUME(ng);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(E),"ALT")}]),e.CONSUME(A),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let d=e.CONSUME(tg);e.CONSUME(b),e.SUBRULE(e.objectAttrReq,{ARGS:[d,[],["branch_live","branch_merge","branch_new"],{types:{branch_live:"boolean",branch_merge:"boolean",branch_new:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(rg),e.CONSUME2(b),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),a||e.addMissingError(l,"{} is missing an input clause"),s||e.addMissingError(l,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(k),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(EI,"workspaceTriggerDeclaration");var SI=r(e=>{rI(e),HL(e),TL(e),kF(e),cI(e),qL(e),e.addonDeclaration=e.RULE("addonDeclaration",iL(e)),e.agentDeclaration=e.RULE("agentDeclaration",aL(e)),e.agentTriggerDeclaration=e.RULE("agentTriggerDeclaration",sL(e)),e.queryDeclaration=e.RULE("queryDeclaration",uI(e)),e.apiGroupDeclaration=e.RULE("apiGroupDeclaration",cL(e)),e.branchDeclaration=e.RULE("branchDeclaration",EL(e)),e.tableDeclaration=e.RULE("tableDeclaration",pI(e)),e.mcpServerDeclaration=e.RULE("mcpServerDeclaration",nI(e)),e.mcpServerTriggerDeclaration=e.RULE("mcpServerTriggerDeclaration",oI(e)),e.middlewareDeclaration=e.RULE("middlewareDeclaration",lI(e)),e.realtimeTriggerDeclaration=e.RULE("realtimeTriggerDeclaration",dI(e)),e.tableTriggerDeclaration=e.RULE("tableTriggerDeclaration",fI(e)),e.taskDeclaration=e.RULE("taskDeclaration",mI(e)),e.toolDeclaration=e.RULE("toolDeclaration",hI(e)),e.workflowTestDeclaration=e.RULE("workflowTestDeclaration",gI(e)),e.workspaceDeclaration=e.RULE("workspaceDeclaration",TI(e)),e.workspaceTriggerDeclaration=e.RULE("workspaceTriggerDeclaration",EI(e)),e.functionDeclaration=e.RULE("functionDeclaration",YL(e))},"register");var i3={buildMismatchTokenMessage:En.buildMismatchTokenMessage,buildEarlyExitMessage:En.buildEarlyExitMessage,buildNotAllInputParsedMessage:En.buildNotAllInputParsedMessage,buildNoViableAltMessage:En.buildNoViableAltMessage},Og=class extends Gs{static{r(this,"XanoBaseParser")}constructor(t){super(t,{errorMessageProvider:i3,recoveryEnabled:!1}),SI(this),this.sectionStack=[],this.reset()}functionAttrReq(){}ADD_ERROR(t,n){this.errors.push({message:t,token:n,line:n?n.startLine:-1,column:n?n.startColumn:-1,ruleName:"error"})}CONSUME_ANY(){if(this.inputIdx<this.input.length){let t=this.input[this.inputIdx];if(t&&typeof t.tokenTypeIdx<"u")return this.inputIdx++,t;this.errors.push({message:"Encountered an invalid token during recovery",token:t,line:t?t.startLine:-1,column:t?t.startColumn:-1,ruleName:"error"})}return null}addVariable(t,n,o=null){this.__symbolTable.var[t]={type:n,value:o}}addInput(t,n,o=!1,i=!1,a=!1){this.__symbolTable.input[t]={type:n,iterable:o,nullable:i,optional:a}}addMissingError(t,n){if(!t){this.SAVE_ERROR(new it(n.replaceAll("{}",""),t));return}this.SAVE_ERROR(new it(n.replaceAll("{}",t.image),t))}addMissingAttributeError(t,n){n=[].concat(n);let o=n.join(", "),i=n.length===1?`${t.image} is missing the ${o} attribute`:`${t.image} is missing the following attributes: ${o}`;this.SAVE_ERROR(new it(i,t))}addIllegalAttributeError(t,n){n||(n=`Attribute \`${t.image}\` is not allowed`),this.SAVE_ERROR(new it(n,t))}addExpectedValueTypeError(t,n){this.SAVE_ERROR(new it(`Expected value of \`${t.image}\` to be of type \`${n}\``,t))}addExpectedValueError(t,n){B(n)&&n.length>1?this.SAVE_ERROR(new it(`Expected value of \`${t.image}\` to be one of ${n.map(o=>`\`${o}\``).join(", ")}`,t)):this.SAVE_ERROR(new it(`Expected value of \`${t.image}\` to be \`${n}\``,t))}addDuplicateAttributeError(t){this.SAVE_ERROR(new it(`Duplicate attribute \`${t.image}\``,t))}addDuplicateNameError(t,n){n?this.SAVE_ERROR(new it(`Duplicate ${n} name '${t.image}'`,t)):this.SAVE_ERROR(new it(`Duplicate name '${t.image}'`,t))}addInvalidValueError(t,n){this.SAVE_ERROR(new it(n,t))}requireRules(...t){for(let n of t){if(typeof n!="function")throw new Error(`requireRules only accepts functions, ${typeof n} given`);Object.hasOwn(this,n.name)||(this[n.name]=this.RULE(n.name,n(this)))}}reset(){super.reset(),this.sectionStack=[],this.__symbolTable={input:{},var:{},auth:{},env:{}}}};function Lg(e,t){t||(t=zr(e));let n=uo(e);switch($.input=n.tokens,t.toLowerCase()){case"addon":return $.addonDeclaration(),$;case"agent":return $.agentDeclaration(),$;case"agent_trigger":return $.agentTriggerDeclaration(),$;case"api":return $.queryDeclaration(),$;case"api_group":return $.apiGroupDeclaration(),$;case"branch":return $.branchDeclaration(),$;case"db":return $.tableDeclaration(),$;case"mcp_server":return $.mcpServerDeclaration(),$;case"mcp_server_trigger":return $.mcpServerTriggerDeclaration(),$;case"middleware":return $.middlewareDeclaration(),$;case"realtime_trigger":return $.realtimeTriggerDeclaration(),$;case"table_trigger":return $.tableTriggerDeclaration(),$;case"task":return $.taskDeclaration(),$;case"tool":return $.toolDeclaration(),$;case"workflow_test":return $.workflowTestDeclaration(),$;case"workspace":return $.workspaceDeclaration(),$;case"workspace_trigger":return $.workspaceTriggerDeclaration(),$;case"cfn":default:return $.functionDeclaration(),$}}r(Lg,"xanoscriptParser");var Ly=class extends Og{static{r(this,"XanoScriptParser")}constructor(){super(mc),this.performSelfAnalysis()}},$=new Ly;var a3=`
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
`,s3=new Ga(a3);function c3(e){return!!e.nextTokenType.LABEL}r(c3,"suggestable");function l3(e){return e.length===0?!1:e[e.length-1].tokenType===Et}r(l3,"isAfterPipeToken");function u3(){return vg.map(e=>{let t=s3.__filterDoc[e];return{label:e,kind:hc("function"),documentation:t?{kind:"markdown",value:t}:void 0}})}r(u3,"createFilterSuggestions");function yI(e,t){try{let o=uo(e).tokens;if(l3(o))return u3();let i;if($.reset(),t==="db")i=$.computeContentAssist("tableDeclaration",o);else if(t==="api")i=$.computeContentAssist("queryDeclaration",o);else if(t==="function")i=$.computeContentAssist("functionDeclaration",o);else if(t==="task")i=$.computeContentAssist("taskDeclaration",o);else return[];return i.filter(c3).map(s=>{let c=Cg(s.nextTokenType.name);return{label:s.nextTokenType.LABEL,kind:hc(c)}})}catch(n){return console.error(n),[]}}r(yI,"getContentAssistSuggestions");function _I(e,t){let n=t.get(e.textDocument.uri);if(!n)return console.error("onCompletion(): Document not found for URI:",e.textDocument.uri),null;let o=e.position,i=n.getText(),a=n.offsetAt(o);if(jl(a,i))return null;let c=zr(i);return yI(i.slice(0,a),c)}r(_I,"onCompletion");function xI(e,t){let n=e.document;if(!n)return console.error("onDidChangeContent(): Document not found for URI:",e.textDocument.uri),null;let o=n.getText(),i=zr(o);try{let a=Lg(o,i);a.errors.length>0&&t.sendDiagnostics({uri:n.uri,diagnostics:[]});for(let c of a.errors)console.error(`onDidChangeContent(): Error parsing document: ${c.name}`);let s=a.errors.map(c=>({severity:1,range:c.token?{start:n.positionAt(c.token.startOffset),end:n.positionAt(c.token.endOffset+1)}:{start:{line:0,character:0},end:{line:0,character:1}},message:c.message}));console.log(`onDidChangeContent(): sending diagnostic (${a.errors.length} errors) for scheme:`,i),t.sendDiagnostics({uri:n.uri,diagnostics:s})}catch(a){let s=[{severity:1,range:{start:{line:0,character:0},end:{line:0,character:1}},message:a.message||"Syntax error in XanoScript code"}];t.sendDiagnostics({uri:n.uri,diagnostics:s})}}r(xI,"onDidChangeContent");var bI=`# deg2rad

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
`;var Ng=class extends Ar{static{r(this,"FunctionMessageProvider")}constructor(t){super(),this.parseFunctions(t),this.buildSearchTree()}buildSearchTree(){this.__searchTree={};for(let t in this.__functionDoc){let n=t.split("."),o=this.__searchTree;for(let i=n.length-1;i>=0;i--){let a=n[i];o[a]||(o[a]={}),o=o[a]}o.__value=t}}parseFunctions(t){this.__functionDoc={};let n=[],o="";for(let i of t.split(`
`))i.startsWith("#")?(o&&(this.__functionDoc[o]=n.join(`
`)),o=i.slice(2).trim(),n=[]):n.push(i);o&&n.length&&(this.__functionDoc[o]=n.join(`
`).trim())}findFunction(t,n,o=null){o||(o=this.__searchTree);let i=n[t],a=o[i.image];if(a){let s=n[t-1];if(s&&s.image===".")return this.findFunction(t-2,n,a);if(a.__value)return a.__value}return null}isMatch(t,n,o){let i=n[t+1];return i&&i.image==="."?!1:!!this.findFunction(t,n)}render(t,n){let o=this.findFunction(t,n);if(o)return this.__functionDoc[o]}};var RI=`# stack

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
`;var Mg=class extends Ar{static{r(this,"InputFilterMessageProvider")}constructor(t){super(),this.parseFilters(t)}parseFilters(t){this.__filterDoc={};let n=[],o="";for(let i of t.split(`
`))i.startsWith("#")?(o&&(this.__filterDoc[o]=n.join(`
`).trim()),o=i.slice(2).trim(),n=[]):n.push(i);o&&n.length&&(this.__filterDoc[o]=n.join(`
`).trim())}findFilter(t,n){let o=n[t];if(!(o.tokenType.name==="Identifier"||o.tokenType.LONGER_ALT&&o.tokenType.LONGER_ALT.name==="Identifier"||o.tokenType.CATEGORIES&&o.tokenType.CATEGORIES.some(s=>s.name==="Identifier")))return null;let a=o.image;return this.__filterDoc[a]?a:null}isMatch(t,n,o){if(t===0)return!1;let i=n[t-1],a=i.image==="=",s=i.image==="|";if(!a&&!s)return!1;if(a){for(let c=t-2;c>=0;c--){let l=n[c];if(l.image==="filters")return!!this.findFilter(t,n);if(l.image==="{"||l.image==="}"||l.image===`
`)break}return!1}if(s){for(let c=t-2;c>=0;c--){let l=n[c];if(l.image==="="&&c>0&&n[c-1].image==="filters")return!!this.findFilter(t,n);if(l.image==="{"||l.image==="}"||l.image===`
`)break}return!1}return!1}render(t,n){let o=this.findFilter(t,n);if(o)return this.__filterDoc[o]}};var AI=`# min

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
`;var wg=class extends Ar{static{r(this,"InputVariableMessageProvider")}constructor(){super()}isMatch(t,n,o){let i=n[t];return t>2&&n[t-2].image==="$input"&&n[t-1].image==="."&&i.tokenType.name==="Identifier"}renderUndefined(t){return["**Error**: This input is not defined.","Add a definition for it in your `input` clause.","```xs","input {","  text? "+t,"}","```"].join(`
`)}render(t,n,o){let i=n[t].image,a=o.__symbolTable.input[i];if(a){let s=a.iterable?`[${a.type},...]`:`${a.type}`,c=[`input **${i}** of type \`${s}\` `];return a.nullable&&c.push(`- ${i} is _nullable_ (\`${a.type}?\`)`),a.optional&&c.push(`- ${i} is _optional_ (\`${i}?\`)`),c.join(`

`)}else return this.renderUndefined(i)}};function kI(e,t,n=[]){let o=t.get(e.textDocument.uri);if(!o)return console.error("onHover(): Document not found for URI:",e.textDocument.uri),null;let i=o.getText(),a=o.offsetAt(e.position),s=uo(i);if(s.errors.length>0)return null;let c=zr(i),l=Lg(i,c),d=s.tokens,f=d.findIndex(_=>_.startOffset<=a&&_.endOffset>=a);if(f===-1)return null;let g=n.find(_=>_.isMatch(f,d,l));return g?{contents:{kind:"markdown",value:g.render(f,d,l)},range:{start:o.positionAt(d[f].startOffset),end:o.positionAt(d[f].endOffset+1)}}:null}r(kI,"onHoverDocument");var Fg=class extends Ar{static{r(this,"QueryFilterMessageProvider")}constructor(t){super(),this.parseFilters(t)}parseFilters(t){this.__filterDoc={};let n=[],o="";for(let i of t.split(`
`))i.startsWith("#")?(o&&(this.__filterDoc[o]=n.join(`
`).trim()),o=i.slice(2).trim(),n=[]):n.push(i);o&&n.length&&(this.__filterDoc[o]=n.join(`
`).trim())}findFilter(t,n){let o=n[t];if(!(o.tokenType.name==="Identifier"||o.tokenType.LONGER_ALT&&o.tokenType.LONGER_ALT.name==="Identifier"||o.tokenType.CATEGORIES&&o.tokenType.CATEGORIES.some(s=>s.name==="Identifier")))return null;let a=o.image;return this.__filterDoc[a]?a:null}isMatch(t,n,o){if(t===0||!(n[t-1].image==="|"))return!1;for(let s=t-2;s>=0;s--){let c=n[s];if(c.image==="where"&&s+1<n.length&&n[s+1].image==="=")return!!this.findFilter(t,n);if(c.image==="{"||c.image==="}"||c.image===`
`||c.image==="query")break}return!1}render(t,n){let o=this.findFilter(t,n);if(o)return this.__filterDoc[o]}};var UI=`# covers

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
`;var h3=[new wg,new Ng(RI),new Mg(AI),new Ga(bI),new Fg(UI)];function CI(e,t){let n=t.get(e.textDocument.uri);if(!n)return null;let o=n.getText(),i=n.offsetAt(e.position);return jl(i,o)?null:kI(e,t,h3)}r(CI,"onHover");function vI(e,t,n){return g3(t,n)}r(vI,"higlightText");function g3(e,t){let n=new t;return uo(e,!0).tokens.forEach(i=>{let a=Cg(i.tokenType.name);if(a){let s=i.startLine-1,c=i.startColumn-1;n.push(s,c,i.image.length,hc(a),0)}else a===void 0&&console.log(`token type not mapped to a type: ${JSON.stringify(i.tokenType.name)}`)}),n.build()}r(g3,"higlightDefault");function OI(e,t,n){let o=t.get(e.textDocument.uri);if(!o)return console.error("onSemanticCheck(): Document not found for URI:",e.textDocument.uri),null;let i=o.getText(),a=zr(i);return vI(a,i,n)}r(OI,"onSemanticCheck");var T3=new on.BrowserMessageReader(self),E3=new on.BrowserMessageWriter(self),fo=(0,on.createConnection)(T3,E3),gc=new on.TextDocuments(Gl);fo.onInitialize(()=>({capabilities:{completionProvider:{resolveProvider:!1,triggerCharacters:[".",":","$","|"]},textDocumentSync:1,semanticTokensProvider:{legend:{tokenTypes:by,tokenModifiers:[]},full:!0},hoverProvider:!0}}));fo.onHover(e=>CI(e,gc));fo.onCompletion(e=>_I(e,gc));fo.onRequest("textDocument/semanticTokens/full",e=>OI(e,gc,on.SemanticTokensBuilder));gc.onDidChangeContent(e=>xI(e,fo));fo.onInitialized(()=>console.log("lang server init"));gc.listen(fo);fo.listen();
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
