"use strict";var GI=Object.create;var Ka=Object.defineProperty;var jI=Object.getOwnPropertyDescriptor;var VI=Object.getOwnPropertyNames;var WI=Object.getPrototypeOf,zI=Object.prototype.hasOwnProperty;var r=(e,t)=>Ka(e,"name",{value:t,configurable:!0});var HI=(e,t)=>()=>(e&&(t=e(e=0)),t);var j=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),YI=(e,t)=>{for(var n in t)Ka(e,n,{get:t[n],enumerable:!0})},Ny=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of VI(t))!zI.call(e,i)&&i!==n&&Ka(e,i,{get:()=>t[i],enumerable:!(o=jI(t,i))||o.enumerable});return e};var KI=(e,t,n)=>(n=e!=null?GI(WI(e)):{},Ny(t||!e||!e.__esModule?Ka(n,"default",{value:e,enumerable:!0}):n,e)),Ig=e=>Ny(Ka({},"__esModule",{value:!0}),e);var Do=j(Lt=>{"use strict";Object.defineProperty(Lt,"__esModule",{value:!0});Lt.stringArray=Lt.array=Lt.func=Lt.error=Lt.number=Lt.string=Lt.boolean=void 0;function JI(e){return e===!0||e===!1}r(JI,"boolean");Lt.boolean=JI;function My(e){return typeof e=="string"||e instanceof String}r(My,"string");Lt.string=My;function QI(e){return typeof e=="number"||e instanceof Number}r(QI,"number");Lt.number=QI;function XI(e){return e instanceof Error}r(XI,"error");Lt.error=XI;function ZI(e){return typeof e=="function"}r(ZI,"func");Lt.func=ZI;function wy(e){return Array.isArray(e)}r(wy,"array");Lt.array=wy;function $I(e){return wy(e)&&e.every(t=>My(t))}r($I,"stringArray");Lt.stringArray=$I});var sT=j(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});K.Message=K.NotificationType9=K.NotificationType8=K.NotificationType7=K.NotificationType6=K.NotificationType5=K.NotificationType4=K.NotificationType3=K.NotificationType2=K.NotificationType1=K.NotificationType0=K.NotificationType=K.RequestType9=K.RequestType8=K.RequestType7=K.RequestType6=K.RequestType5=K.RequestType4=K.RequestType3=K.RequestType2=K.RequestType1=K.RequestType=K.RequestType0=K.AbstractMessageSignature=K.ParameterStructures=K.ResponseError=K.ErrorCodes=void 0;var To=Do(),Pg;(function(e){e.ParseError=-32700,e.InvalidRequest=-32600,e.MethodNotFound=-32601,e.InvalidParams=-32602,e.InternalError=-32603,e.jsonrpcReservedErrorRangeStart=-32099,e.serverErrorStart=-32099,e.MessageWriteError=-32099,e.MessageReadError=-32098,e.PendingResponseRejected=-32097,e.ConnectionInactive=-32096,e.ServerNotInitialized=-32002,e.UnknownErrorCode=-32001,e.jsonrpcReservedErrorRangeEnd=-32e3,e.serverErrorEnd=-32e3})(Pg||(K.ErrorCodes=Pg={}));var Dg=class e extends Error{static{r(this,"ResponseError")}constructor(t,n,o){super(n),this.code=To.number(t)?t:Pg.UnknownErrorCode,this.data=o,Object.setPrototypeOf(this,e.prototype)}toJson(){let t={code:this.code,message:this.message};return this.data!==void 0&&(t.data=this.data),t}};K.ResponseError=Dg;var Zt=class e{static{r(this,"ParameterStructures")}constructor(t){this.kind=t}static is(t){return t===e.auto||t===e.byName||t===e.byPosition}toString(){return this.kind}};K.ParameterStructures=Zt;Zt.auto=new Zt("auto");Zt.byPosition=new Zt("byPosition");Zt.byName=new Zt("byName");var ve=class{static{r(this,"AbstractMessageSignature")}constructor(t,n){this.method=t,this.numberOfParams=n}get parameterStructures(){return Zt.auto}};K.AbstractMessageSignature=ve;var Bg=class extends ve{static{r(this,"RequestType0")}constructor(t){super(t,0)}};K.RequestType0=Bg;var qg=class extends ve{static{r(this,"RequestType")}constructor(t,n=Zt.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};K.RequestType=qg;var Gg=class extends ve{static{r(this,"RequestType1")}constructor(t,n=Zt.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};K.RequestType1=Gg;var jg=class extends ve{static{r(this,"RequestType2")}constructor(t){super(t,2)}};K.RequestType2=jg;var Vg=class extends ve{static{r(this,"RequestType3")}constructor(t){super(t,3)}};K.RequestType3=Vg;var Wg=class extends ve{static{r(this,"RequestType4")}constructor(t){super(t,4)}};K.RequestType4=Wg;var zg=class extends ve{static{r(this,"RequestType5")}constructor(t){super(t,5)}};K.RequestType5=zg;var Hg=class extends ve{static{r(this,"RequestType6")}constructor(t){super(t,6)}};K.RequestType6=Hg;var Yg=class extends ve{static{r(this,"RequestType7")}constructor(t){super(t,7)}};K.RequestType7=Yg;var Kg=class extends ve{static{r(this,"RequestType8")}constructor(t){super(t,8)}};K.RequestType8=Kg;var Jg=class extends ve{static{r(this,"RequestType9")}constructor(t){super(t,9)}};K.RequestType9=Jg;var Qg=class extends ve{static{r(this,"NotificationType")}constructor(t,n=Zt.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};K.NotificationType=Qg;var Xg=class extends ve{static{r(this,"NotificationType0")}constructor(t){super(t,0)}};K.NotificationType0=Xg;var Zg=class extends ve{static{r(this,"NotificationType1")}constructor(t,n=Zt.auto){super(t,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}};K.NotificationType1=Zg;var $g=class extends ve{static{r(this,"NotificationType2")}constructor(t){super(t,2)}};K.NotificationType2=$g;var eT=class extends ve{static{r(this,"NotificationType3")}constructor(t){super(t,3)}};K.NotificationType3=eT;var tT=class extends ve{static{r(this,"NotificationType4")}constructor(t){super(t,4)}};K.NotificationType4=tT;var rT=class extends ve{static{r(this,"NotificationType5")}constructor(t){super(t,5)}};K.NotificationType5=rT;var nT=class extends ve{static{r(this,"NotificationType6")}constructor(t){super(t,6)}};K.NotificationType6=nT;var oT=class extends ve{static{r(this,"NotificationType7")}constructor(t){super(t,7)}};K.NotificationType7=oT;var iT=class extends ve{static{r(this,"NotificationType8")}constructor(t){super(t,8)}};K.NotificationType8=iT;var aT=class extends ve{static{r(this,"NotificationType9")}constructor(t){super(t,9)}};K.NotificationType9=aT;var Fy;(function(e){function t(i){let a=i;return a&&To.string(a.method)&&(To.string(a.id)||To.number(a.id))}r(t,"isRequest"),e.isRequest=t;function n(i){let a=i;return a&&To.string(a.method)&&i.id===void 0}r(n,"isNotification"),e.isNotification=n;function o(i){let a=i;return a&&(a.result!==void 0||!!a.error)&&(To.string(a.id)||To.number(a.id)||a.id===null)}r(o,"isResponse"),e.isResponse=o})(Fy||(K.Message=Fy={}))});var lT=j(bn=>{"use strict";var Iy;Object.defineProperty(bn,"__esModule",{value:!0});bn.LRUCache=bn.LinkedMap=bn.Touch=void 0;var Ot;(function(e){e.None=0,e.First=1,e.AsOld=e.First,e.Last=2,e.AsNew=e.Last})(Ot||(bn.Touch=Ot={}));var yc=class{static{r(this,"LinkedMap")}constructor(){this[Iy]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(t){return this._map.has(t)}get(t,n=Ot.None){let o=this._map.get(t);if(o)return n!==Ot.None&&this.touch(o,n),o.value}set(t,n,o=Ot.None){let i=this._map.get(t);if(i)i.value=n,o!==Ot.None&&this.touch(i,o);else{switch(i={key:t,value:n,next:void 0,previous:void 0},o){case Ot.None:this.addItemLast(i);break;case Ot.First:this.addItemFirst(i);break;case Ot.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(t,i),this._size++}return this}delete(t){return!!this.remove(t)}remove(t){let n=this._map.get(t);if(n)return this._map.delete(t),this.removeItem(n),this._size--,n.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let t=this._head;return this._map.delete(t.key),this.removeItem(t),this._size--,t.value}forEach(t,n){let o=this._state,i=this._head;for(;i;){if(n?t.bind(n)(i.value,i.key,this):t(i.value,i.key,this),this._state!==o)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){let t=this._state,n=this._head,o={[Symbol.iterator]:()=>o,next:r(()=>{if(this._state!==t)throw new Error("LinkedMap got modified during iteration.");if(n){let i={value:n.key,done:!1};return n=n.next,i}else return{value:void 0,done:!0}},"next")};return o}values(){let t=this._state,n=this._head,o={[Symbol.iterator]:()=>o,next:r(()=>{if(this._state!==t)throw new Error("LinkedMap got modified during iteration.");if(n){let i={value:n.value,done:!1};return n=n.next,i}else return{value:void 0,done:!0}},"next")};return o}entries(){let t=this._state,n=this._head,o={[Symbol.iterator]:()=>o,next:r(()=>{if(this._state!==t)throw new Error("LinkedMap got modified during iteration.");if(n){let i={value:[n.key,n.value],done:!1};return n=n.next,i}else return{value:void 0,done:!0}},"next")};return o}[(Iy=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(t){if(t>=this.size)return;if(t===0){this.clear();return}let n=this._head,o=this.size;for(;n&&o>t;)this._map.delete(n.key),n=n.next,o--;this._head=n,this._size=o,n&&(n.previous=void 0),this._state++}addItemFirst(t){if(!this._head&&!this._tail)this._tail=t;else if(this._head)t.next=this._head,this._head.previous=t;else throw new Error("Invalid list");this._head=t,this._state++}addItemLast(t){if(!this._head&&!this._tail)this._head=t;else if(this._tail)t.previous=this._tail,this._tail.next=t;else throw new Error("Invalid list");this._tail=t,this._state++}removeItem(t){if(t===this._head&&t===this._tail)this._head=void 0,this._tail=void 0;else if(t===this._head){if(!t.next)throw new Error("Invalid list");t.next.previous=void 0,this._head=t.next}else if(t===this._tail){if(!t.previous)throw new Error("Invalid list");t.previous.next=void 0,this._tail=t.previous}else{let n=t.next,o=t.previous;if(!n||!o)throw new Error("Invalid list");n.previous=o,o.next=n}t.next=void 0,t.previous=void 0,this._state++}touch(t,n){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(n!==Ot.First&&n!==Ot.Last)){if(n===Ot.First){if(t===this._head)return;let o=t.next,i=t.previous;t===this._tail?(i.next=void 0,this._tail=i):(o.previous=i,i.next=o),t.previous=void 0,t.next=this._head,this._head.previous=t,this._head=t,this._state++}else if(n===Ot.Last){if(t===this._tail)return;let o=t.next,i=t.previous;t===this._head?(o.previous=void 0,this._head=o):(o.previous=i,i.next=o),t.next=void 0,t.previous=this._tail,this._tail.next=t,this._tail=t,this._state++}}}toJSON(){let t=[];return this.forEach((n,o)=>{t.push([o,n])}),t}fromJSON(t){this.clear();for(let[n,o]of t)this.set(n,o)}};bn.LinkedMap=yc;var cT=class extends yc{static{r(this,"LRUCache")}constructor(t,n=1){super(),this._limit=t,this._ratio=Math.min(Math.max(0,n),1)}get limit(){return this._limit}set limit(t){this._limit=t,this.checkTrim()}get ratio(){return this._ratio}set ratio(t){this._ratio=Math.min(Math.max(0,t),1),this.checkTrim()}get(t,n=Ot.AsNew){return super.get(t,n)}peek(t){return super.get(t,Ot.None)}set(t,n){return super.set(t,n,Ot.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};bn.LRUCache=cT});var Dy=j(_c=>{"use strict";Object.defineProperty(_c,"__esModule",{value:!0});_c.Disposable=void 0;var Py;(function(e){function t(n){return{dispose:n}}r(t,"create"),e.create=t})(Py||(_c.Disposable=Py={}))});var Rn=j(pT=>{"use strict";Object.defineProperty(pT,"__esModule",{value:!0});var uT;function dT(){if(uT===void 0)throw new Error("No runtime abstraction layer installed");return uT}r(dT,"RAL");(function(e){function t(n){if(n===void 0)throw new Error("No runtime abstraction layer provided");uT=n}r(t,"install"),e.install=t})(dT||(dT={}));pT.default=dT});var qo=j(Bo=>{"use strict";Object.defineProperty(Bo,"__esModule",{value:!0});Bo.Emitter=Bo.Event=void 0;var eP=Rn(),By;(function(e){let t={dispose(){}};e.None=function(){return t}})(By||(Bo.Event=By={}));var fT=class{static{r(this,"CallbackList")}add(t,n=null,o){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(t),this._contexts.push(n),Array.isArray(o)&&o.push({dispose:r(()=>this.remove(t,n),"dispose")})}remove(t,n=null){if(!this._callbacks)return;let o=!1;for(let i=0,a=this._callbacks.length;i<a;i++)if(this._callbacks[i]===t)if(this._contexts[i]===n){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else o=!0;if(o)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...t){if(!this._callbacks)return[];let n=[],o=this._callbacks.slice(0),i=this._contexts.slice(0);for(let a=0,s=o.length;a<s;a++)try{n.push(o[a].apply(i[a],t))}catch(c){(0,eP.default)().console.error(c)}return n}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},xc=class e{static{r(this,"Emitter")}constructor(t){this._options=t}get event(){return this._event||(this._event=(t,n,o)=>{this._callbacks||(this._callbacks=new fT),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(t,n);let i={dispose:r(()=>{this._callbacks&&(this._callbacks.remove(t,n),i.dispose=e._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))},"dispose")};return Array.isArray(o)&&o.push(i),i}),this._event}fire(t){this._callbacks&&this._callbacks.invoke.call(this._callbacks,t)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};Bo.Emitter=xc;xc._noop=function(){}});var kc=j(Go=>{"use strict";Object.defineProperty(Go,"__esModule",{value:!0});Go.CancellationTokenSource=Go.CancellationToken=void 0;var tP=Rn(),rP=Do(),mT=qo(),bc;(function(e){e.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:mT.Event.None}),e.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:mT.Event.None});function t(n){let o=n;return o&&(o===e.None||o===e.Cancelled||rP.boolean(o.isCancellationRequested)&&!!o.onCancellationRequested)}r(t,"is"),e.is=t})(bc||(Go.CancellationToken=bc={}));var nP=Object.freeze(function(e,t){let n=(0,tP.default)().timer.setTimeout(e.bind(t),0);return{dispose(){n.dispose()}}}),Rc=class{static{r(this,"MutableToken")}constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?nP:(this._emitter||(this._emitter=new mT.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},hT=class{static{r(this,"CancellationTokenSource")}get token(){return this._token||(this._token=new Rc),this._token}cancel(){this._token?this._token.cancel():this._token=bc.Cancelled}dispose(){this._token?this._token instanceof Rc&&this._token.dispose():this._token=bc.None}};Go.CancellationTokenSource=hT});var qy=j(jo=>{"use strict";Object.defineProperty(jo,"__esModule",{value:!0});jo.SharedArrayReceiverStrategy=jo.SharedArraySenderStrategy=void 0;var oP=kc(),Ja;(function(e){e.Continue=0,e.Cancelled=1})(Ja||(Ja={}));var gT=class{static{r(this,"SharedArraySenderStrategy")}constructor(){this.buffers=new Map}enableCancellation(t){if(t.id===null)return;let n=new SharedArrayBuffer(4),o=new Int32Array(n,0,1);o[0]=Ja.Continue,this.buffers.set(t.id,n),t.$cancellationData=n}async sendCancellation(t,n){let o=this.buffers.get(n);if(o===void 0)return;let i=new Int32Array(o,0,1);Atomics.store(i,0,Ja.Cancelled)}cleanup(t){this.buffers.delete(t)}dispose(){this.buffers.clear()}};jo.SharedArraySenderStrategy=gT;var TT=class{static{r(this,"SharedArrayBufferCancellationToken")}constructor(t){this.data=new Int32Array(t,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===Ja.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},ET=class{static{r(this,"SharedArrayBufferCancellationTokenSource")}constructor(t){this.token=new TT(t)}cancel(){}dispose(){}},ST=class{static{r(this,"SharedArrayReceiverStrategy")}constructor(){this.kind="request"}createCancellationTokenSource(t){let n=t.$cancellationData;return n===void 0?new oP.CancellationTokenSource:new ET(n)}};jo.SharedArrayReceiverStrategy=ST});var _T=j(Ac=>{"use strict";Object.defineProperty(Ac,"__esModule",{value:!0});Ac.Semaphore=void 0;var iP=Rn(),yT=class{static{r(this,"Semaphore")}constructor(t=1){if(t<=0)throw new Error("Capacity must be greater than 0");this._capacity=t,this._active=0,this._waiting=[]}lock(t){return new Promise((n,o)=>{this._waiting.push({thunk:t,resolve:n,reject:o}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,iP.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let t=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let n=t.thunk();n instanceof Promise?n.then(o=>{this._active--,t.resolve(o),this.runNext()},o=>{this._active--,t.reject(o),this.runNext()}):(this._active--,t.resolve(n),this.runNext())}catch(n){this._active--,t.reject(n),this.runNext()}}};Ac.Semaphore=yT});var jy=j(kn=>{"use strict";Object.defineProperty(kn,"__esModule",{value:!0});kn.ReadableStreamMessageReader=kn.AbstractMessageReader=kn.MessageReader=void 0;var bT=Rn(),Vo=Do(),xT=qo(),aP=_T(),Gy;(function(e){function t(n){let o=n;return o&&Vo.func(o.listen)&&Vo.func(o.dispose)&&Vo.func(o.onError)&&Vo.func(o.onClose)&&Vo.func(o.onPartialMessage)}r(t,"is"),e.is=t})(Gy||(kn.MessageReader=Gy={}));var Uc=class{static{r(this,"AbstractMessageReader")}constructor(){this.errorEmitter=new xT.Emitter,this.closeEmitter=new xT.Emitter,this.partialMessageEmitter=new xT.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(t){this.errorEmitter.fire(this.asError(t))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(t){this.partialMessageEmitter.fire(t)}asError(t){return t instanceof Error?t:new Error(`Reader received error. Reason: ${Vo.string(t.message)?t.message:"unknown"}`)}};kn.AbstractMessageReader=Uc;var RT;(function(e){function t(n){let o,i,a,s=new Map,c,l=new Map;if(n===void 0||typeof n=="string")o=n??"utf-8";else{if(o=n.charset??"utf-8",n.contentDecoder!==void 0&&(a=n.contentDecoder,s.set(a.name,a)),n.contentDecoders!==void 0)for(let d of n.contentDecoders)s.set(d.name,d);if(n.contentTypeDecoder!==void 0&&(c=n.contentTypeDecoder,l.set(c.name,c)),n.contentTypeDecoders!==void 0)for(let d of n.contentTypeDecoders)l.set(d.name,d)}return c===void 0&&(c=(0,bT.default)().applicationJson.decoder,l.set(c.name,c)),{charset:o,contentDecoder:a,contentDecoders:s,contentTypeDecoder:c,contentTypeDecoders:l}}r(t,"fromOptions"),e.fromOptions=t})(RT||(RT={}));var kT=class extends Uc{static{r(this,"ReadableStreamMessageReader")}constructor(t,n){super(),this.readable=t,this.options=RT.fromOptions(n),this.buffer=(0,bT.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new aP.Semaphore(1)}set partialMessageTimeout(t){this._partialMessageTimeout=t}get partialMessageTimeout(){return this._partialMessageTimeout}listen(t){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=t;let n=this.readable.onData(o=>{this.onData(o)});return this.readable.onError(o=>this.fireError(o)),this.readable.onClose(()=>this.fireClose()),n}onData(t){try{for(this.buffer.append(t);;){if(this.nextMessageLength===-1){let o=this.buffer.tryReadHeaders(!0);if(!o)return;let i=o.get("content-length");if(!i){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(o))}`));return}let a=parseInt(i);if(isNaN(a)){this.fireError(new Error(`Content-Length value must be a number. Got ${i}`));return}this.nextMessageLength=a}let n=this.buffer.tryReadBody(this.nextMessageLength);if(n===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let o=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(n):n,i=await this.options.contentTypeDecoder.decode(o,this.options);this.callback(i)}).catch(o=>{this.fireError(o)})}}catch(n){this.fireError(n)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,bT.default)().timer.setTimeout((t,n)=>{this.partialMessageTimer=void 0,t===this.messageToken&&(this.firePartialMessage({messageToken:t,waitingTime:n}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};kn.ReadableStreamMessageReader=kT});var Yy=j(An=>{"use strict";Object.defineProperty(An,"__esModule",{value:!0});An.WriteableStreamMessageWriter=An.AbstractMessageWriter=An.MessageWriter=void 0;var Vy=Rn(),Qa=Do(),sP=_T(),Wy=qo(),cP="Content-Length: ",zy=`\r
`,Hy;(function(e){function t(n){let o=n;return o&&Qa.func(o.dispose)&&Qa.func(o.onClose)&&Qa.func(o.onError)&&Qa.func(o.write)}r(t,"is"),e.is=t})(Hy||(An.MessageWriter=Hy={}));var vc=class{static{r(this,"AbstractMessageWriter")}constructor(){this.errorEmitter=new Wy.Emitter,this.closeEmitter=new Wy.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(t,n,o){this.errorEmitter.fire([this.asError(t),n,o])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(t){return t instanceof Error?t:new Error(`Writer received error. Reason: ${Qa.string(t.message)?t.message:"unknown"}`)}};An.AbstractMessageWriter=vc;var AT;(function(e){function t(n){return n===void 0||typeof n=="string"?{charset:n??"utf-8",contentTypeEncoder:(0,Vy.default)().applicationJson.encoder}:{charset:n.charset??"utf-8",contentEncoder:n.contentEncoder,contentTypeEncoder:n.contentTypeEncoder??(0,Vy.default)().applicationJson.encoder}}r(t,"fromOptions"),e.fromOptions=t})(AT||(AT={}));var UT=class extends vc{static{r(this,"WriteableStreamMessageWriter")}constructor(t,n){super(),this.writable=t,this.options=AT.fromOptions(n),this.errorCount=0,this.writeSemaphore=new sP.Semaphore(1),this.writable.onError(o=>this.fireError(o)),this.writable.onClose(()=>this.fireClose())}async write(t){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(t,this.options).then(o=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(o):o).then(o=>{let i=[];return i.push(cP,o.byteLength.toString(),zy),i.push(zy),this.doWrite(t,i,o)},o=>{throw this.fireError(o),o}))}async doWrite(t,n,o){try{return await this.writable.write(n.join(""),"ascii"),this.writable.write(o)}catch(i){return this.handleError(i,t),Promise.reject(i)}}handleError(t,n){this.errorCount++,this.fireError(t,n,this.errorCount)}end(){this.writable.end()}};An.WriteableStreamMessageWriter=UT});var Ky=j(Cc=>{"use strict";Object.defineProperty(Cc,"__esModule",{value:!0});Cc.AbstractMessageBuffer=void 0;var lP=13,uP=10,dP=`\r
`,vT=class{static{r(this,"AbstractMessageBuffer")}constructor(t="utf-8"){this._encoding=t,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(t){let n=typeof t=="string"?this.fromString(t,this._encoding):t;this._chunks.push(n),this._totalLength+=n.byteLength}tryReadHeaders(t=!1){if(this._chunks.length===0)return;let n=0,o=0,i=0,a=0;e:for(;o<this._chunks.length;){let d=this._chunks[o];for(i=0;i<d.length;){switch(d[i]){case lP:switch(n){case 0:n=1;break;case 2:n=3;break;default:n=0}break;case uP:switch(n){case 1:n=2;break;case 3:n=4,i++;break e;default:n=0}break;default:n=0}i++}a+=d.byteLength,o++}if(n!==4)return;let s=this._read(a+i),c=new Map,l=this.toString(s,"ascii").split(dP);if(l.length<2)return c;for(let d=0;d<l.length-2;d++){let f=l[d],g=f.indexOf(":");if(g===-1)throw new Error(`Message header must separate key and value using ':'
${f}`);let _=f.substr(0,g),y=f.substr(g+1).trim();c.set(t?_.toLowerCase():_,y)}return c}tryReadBody(t){if(!(this._totalLength<t))return this._read(t)}get numberOfBytes(){return this._totalLength}_read(t){if(t===0)return this.emptyBuffer();if(t>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===t){let a=this._chunks[0];return this._chunks.shift(),this._totalLength-=t,this.asNative(a)}if(this._chunks[0].byteLength>t){let a=this._chunks[0],s=this.asNative(a,t);return this._chunks[0]=a.slice(t),this._totalLength-=t,s}let n=this.allocNative(t),o=0,i=0;for(;t>0;){let a=this._chunks[i];if(a.byteLength>t){let s=a.slice(0,t);n.set(s,o),o+=t,this._chunks[i]=a.slice(t),this._totalLength-=t,t-=t}else n.set(a,o),o+=a.byteLength,this._chunks.shift(),this._totalLength-=a.byteLength,t-=a.byteLength}return n}};Cc.AbstractMessageBuffer=vT});var $y=j(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});Z.createMessageConnection=Z.ConnectionOptions=Z.MessageStrategy=Z.CancellationStrategy=Z.CancellationSenderStrategy=Z.CancellationReceiverStrategy=Z.RequestCancellationReceiverStrategy=Z.IdCancellationReceiverStrategy=Z.ConnectionStrategy=Z.ConnectionError=Z.ConnectionErrors=Z.LogTraceNotification=Z.SetTraceNotification=Z.TraceFormat=Z.TraceValues=Z.Trace=Z.NullLogger=Z.ProgressType=Z.ProgressToken=void 0;var Jy=Rn(),Be=Do(),Q=sT(),Qy=lT(),Xa=qo(),CT=kc(),es;(function(e){e.type=new Q.NotificationType("$/cancelRequest")})(es||(es={}));var LT;(function(e){function t(n){return typeof n=="string"||typeof n=="number"}r(t,"is"),e.is=t})(LT||(Z.ProgressToken=LT={}));var Za;(function(e){e.type=new Q.NotificationType("$/progress")})(Za||(Za={}));var OT=class{static{r(this,"ProgressType")}constructor(){}};Z.ProgressType=OT;var NT;(function(e){function t(n){return Be.func(n)}r(t,"is"),e.is=t})(NT||(NT={}));Z.NullLogger=Object.freeze({error:r(()=>{},"error"),warn:r(()=>{},"warn"),info:r(()=>{},"info"),log:r(()=>{},"log")});var me;(function(e){e[e.Off=0]="Off",e[e.Messages=1]="Messages",e[e.Compact=2]="Compact",e[e.Verbose=3]="Verbose"})(me||(Z.Trace=me={}));var Xy;(function(e){e.Off="off",e.Messages="messages",e.Compact="compact",e.Verbose="verbose"})(Xy||(Z.TraceValues=Xy={}));(function(e){function t(o){if(!Be.string(o))return e.Off;switch(o=o.toLowerCase(),o){case"off":return e.Off;case"messages":return e.Messages;case"compact":return e.Compact;case"verbose":return e.Verbose;default:return e.Off}}r(t,"fromString"),e.fromString=t;function n(o){switch(o){case e.Off:return"off";case e.Messages:return"messages";case e.Compact:return"compact";case e.Verbose:return"verbose";default:return"off"}}r(n,"toString"),e.toString=n})(me||(Z.Trace=me={}));var cr;(function(e){e.Text="text",e.JSON="json"})(cr||(Z.TraceFormat=cr={}));(function(e){function t(n){return Be.string(n)?(n=n.toLowerCase(),n==="json"?e.JSON:e.Text):e.Text}r(t,"fromString"),e.fromString=t})(cr||(Z.TraceFormat=cr={}));var MT;(function(e){e.type=new Q.NotificationType("$/setTrace")})(MT||(Z.SetTraceNotification=MT={}));var Lc;(function(e){e.type=new Q.NotificationType("$/logTrace")})(Lc||(Z.LogTraceNotification=Lc={}));var $a;(function(e){e[e.Closed=1]="Closed",e[e.Disposed=2]="Disposed",e[e.AlreadyListening=3]="AlreadyListening"})($a||(Z.ConnectionErrors=$a={}));var Wo=class e extends Error{static{r(this,"ConnectionError")}constructor(t,n){super(n),this.code=t,Object.setPrototypeOf(this,e.prototype)}};Z.ConnectionError=Wo;var wT;(function(e){function t(n){let o=n;return o&&Be.func(o.cancelUndispatched)}r(t,"is"),e.is=t})(wT||(Z.ConnectionStrategy=wT={}));var Oc;(function(e){function t(n){let o=n;return o&&(o.kind===void 0||o.kind==="id")&&Be.func(o.createCancellationTokenSource)&&(o.dispose===void 0||Be.func(o.dispose))}r(t,"is"),e.is=t})(Oc||(Z.IdCancellationReceiverStrategy=Oc={}));var FT;(function(e){function t(n){let o=n;return o&&o.kind==="request"&&Be.func(o.createCancellationTokenSource)&&(o.dispose===void 0||Be.func(o.dispose))}r(t,"is"),e.is=t})(FT||(Z.RequestCancellationReceiverStrategy=FT={}));var Nc;(function(e){e.Message=Object.freeze({createCancellationTokenSource(n){return new CT.CancellationTokenSource}});function t(n){return Oc.is(n)||FT.is(n)}r(t,"is"),e.is=t})(Nc||(Z.CancellationReceiverStrategy=Nc={}));var Mc;(function(e){e.Message=Object.freeze({sendCancellation(n,o){return n.sendNotification(es.type,{id:o})},cleanup(n){}});function t(n){let o=n;return o&&Be.func(o.sendCancellation)&&Be.func(o.cleanup)}r(t,"is"),e.is=t})(Mc||(Z.CancellationSenderStrategy=Mc={}));var wc;(function(e){e.Message=Object.freeze({receiver:Nc.Message,sender:Mc.Message});function t(n){let o=n;return o&&Nc.is(o.receiver)&&Mc.is(o.sender)}r(t,"is"),e.is=t})(wc||(Z.CancellationStrategy=wc={}));var Fc;(function(e){function t(n){let o=n;return o&&Be.func(o.handleMessage)}r(t,"is"),e.is=t})(Fc||(Z.MessageStrategy=Fc={}));var Zy;(function(e){function t(n){let o=n;return o&&(wc.is(o.cancellationStrategy)||wT.is(o.connectionStrategy)||Fc.is(o.messageStrategy))}r(t,"is"),e.is=t})(Zy||(Z.ConnectionOptions=Zy={}));var Cr;(function(e){e[e.New=1]="New",e[e.Listening=2]="Listening",e[e.Closed=3]="Closed",e[e.Disposed=4]="Disposed"})(Cr||(Cr={}));function pP(e,t,n,o){let i=n!==void 0?n:Z.NullLogger,a=0,s=0,c=0,l="2.0",d,f=new Map,g,_=new Map,y=new Map,w,O=new Qy.LinkedMap,B=new Map,N=new Set,S=new Map,h=me.Off,v=cr.Text,P,le=Cr.New,sn=new Xa.Emitter,sr=new Xa.Emitter,wo=new Xa.Emitter,yn=new Xa.Emitter,Ar=new Xa.Emitter,Jt=o&&o.cancellationStrategy?o.cancellationStrategy:wc.Message;function gc(E){if(E===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+E.toString()}r(gc,"createRequestQueueKey");function ja(E){return E===null?"res-unknown-"+(++c).toString():"res-"+E.toString()}r(ja,"createResponseQueueKey");function Fo(){return"not-"+(++s).toString()}r(Fo,"createNotificationQueueKey");function Dr(E,L){Q.Message.isRequest(L)?E.set(gc(L.id),L):Q.Message.isResponse(L)?E.set(ja(L.id),L):E.set(Fo(),L)}r(Dr,"addMessageToQueue");function ho(E){}r(ho,"cancelUndispatched");function go(){return le===Cr.Listening}r(go,"isListening");function Va(){return le===Cr.Closed}r(Va,"isClosed");function fr(){return le===Cr.Disposed}r(fr,"isDisposed");function Wa(){(le===Cr.New||le===Cr.Listening)&&(le=Cr.Closed,sr.fire(void 0))}r(Wa,"closeHandler");function Tc(E){sn.fire([E,void 0,void 0])}r(Tc,"readErrorHandler");function Mg(E){sn.fire(E)}r(Mg,"writeErrorHandler"),e.onClose(Wa),e.onError(Tc),t.onClose(Wa),t.onError(Mg);function za(){w||O.size===0||(w=(0,Jy.default)().timer.setImmediate(()=>{w=void 0,Ec()}))}r(za,"triggerMessageQueue");function Qt(E){Q.Message.isRequest(E)?Xt(E):Q.Message.isNotification(E)?jt(E):Q.Message.isResponse(E)?_n(E):Ur(E)}r(Qt,"handleMessage");function Ec(){if(O.size===0)return;let E=O.shift();try{let L=o?.messageStrategy;Fc.is(L)?L.handleMessage(E,Qt):Qt(E)}finally{za()}}r(Ec,"processMessageQueue");let yt=r(E=>{try{if(Q.Message.isNotification(E)&&E.method===es.type.method){let L=E.params.id,I=gc(L),z=O.get(I);if(Q.Message.isRequest(z)){let Se=o?.connectionStrategy,He=Se&&Se.cancelUndispatched?Se.cancelUndispatched(z,ho):void 0;if(He&&(He.error!==void 0||He.result!==void 0)){O.delete(I),S.delete(L),He.id=z.id,xn(He,E.method,Date.now()),t.write(He).catch(()=>i.error("Sending response for canceled message failed."));return}}let Ue=S.get(L);if(Ue!==void 0){Ue.cancel(),wg(E);return}else N.add(L)}Dr(O,E)}finally{za()}},"callback");function Xt(E){if(fr())return;function L(ue,De,Te){let ht={jsonrpc:l,id:E.id};ue instanceof Q.ResponseError?ht.error=ue.toJson():ht.result=ue===void 0?null:ue,xn(ht,De,Te),t.write(ht).catch(()=>i.error("Sending response failed."))}r(L,"reply");function I(ue,De,Te){let ht={jsonrpc:l,id:E.id,error:ue.toJson()};xn(ht,De,Te),t.write(ht).catch(()=>i.error("Sending response failed."))}r(I,"replyError");function z(ue,De,Te){ue===void 0&&(ue=null);let ht={jsonrpc:l,id:E.id,result:ue};xn(ht,De,Te),t.write(ht).catch(()=>i.error("Sending response failed."))}r(z,"replySuccess"),Sc(E);let Ue=f.get(E.method),Se,He;Ue&&(Se=Ue.type,He=Ue.handler);let $e=Date.now();if(He||d){let ue=E.id??String(Date.now()),De=Oc.is(Jt.receiver)?Jt.receiver.createCancellationTokenSource(ue):Jt.receiver.createCancellationTokenSource(E);E.id!==null&&N.has(E.id)&&De.cancel(),E.id!==null&&S.set(ue,De);try{let Te;if(He)if(E.params===void 0){if(Se!==void 0&&Se.numberOfParams!==0){I(new Q.ResponseError(Q.ErrorCodes.InvalidParams,`Request ${E.method} defines ${Se.numberOfParams} params but received none.`),E.method,$e);return}Te=He(De.token)}else if(Array.isArray(E.params)){if(Se!==void 0&&Se.parameterStructures===Q.ParameterStructures.byName){I(new Q.ResponseError(Q.ErrorCodes.InvalidParams,`Request ${E.method} defines parameters by name but received parameters by position`),E.method,$e);return}Te=He(...E.params,De.token)}else{if(Se!==void 0&&Se.parameterStructures===Q.ParameterStructures.byPosition){I(new Q.ResponseError(Q.ErrorCodes.InvalidParams,`Request ${E.method} defines parameters by position but received parameters by name`),E.method,$e);return}Te=He(E.params,De.token)}else d&&(Te=d(E.method,E.params,De.token));let ht=Te;Te?ht.then?ht.then(Vt=>{S.delete(ue),L(Vt,E.method,$e)},Vt=>{S.delete(ue),Vt instanceof Q.ResponseError?I(Vt,E.method,$e):Vt&&Be.string(Vt.message)?I(new Q.ResponseError(Q.ErrorCodes.InternalError,`Request ${E.method} failed with message: ${Vt.message}`),E.method,$e):I(new Q.ResponseError(Q.ErrorCodes.InternalError,`Request ${E.method} failed unexpectedly without providing any details.`),E.method,$e)}):(S.delete(ue),L(Te,E.method,$e)):(S.delete(ue),z(Te,E.method,$e))}catch(Te){S.delete(ue),Te instanceof Q.ResponseError?L(Te,E.method,$e):Te&&Be.string(Te.message)?I(new Q.ResponseError(Q.ErrorCodes.InternalError,`Request ${E.method} failed with message: ${Te.message}`),E.method,$e):I(new Q.ResponseError(Q.ErrorCodes.InternalError,`Request ${E.method} failed unexpectedly without providing any details.`),E.method,$e)}}else I(new Q.ResponseError(Q.ErrorCodes.MethodNotFound,`Unhandled method ${E.method}`),E.method,$e)}r(Xt,"handleRequest");function _n(E){if(!fr())if(E.id===null)E.error?i.error(`Received response message without id: Error is: 
${JSON.stringify(E.error,void 0,4)}`):i.error("Received response message without id. No further error information provided.");else{let L=E.id,I=B.get(L);if(PI(E,I),I!==void 0){B.delete(L);try{if(E.error){let z=E.error;I.reject(new Q.ResponseError(z.code,z.message,z.data))}else if(E.result!==void 0)I.resolve(E.result);else throw new Error("Should never happen.")}catch(z){z.message?i.error(`Response handler '${I.method}' failed with message: ${z.message}`):i.error(`Response handler '${I.method}' failed unexpectedly.`)}}}}r(_n,"handleResponse");function jt(E){if(fr())return;let L,I;if(E.method===es.type.method){let z=E.params.id;N.delete(z),wg(E);return}else{let z=_.get(E.method);z&&(I=z.handler,L=z.type)}if(I||g)try{if(wg(E),I)if(E.params===void 0)L!==void 0&&L.numberOfParams!==0&&L.parameterStructures!==Q.ParameterStructures.byName&&i.error(`Notification ${E.method} defines ${L.numberOfParams} params but received none.`),I();else if(Array.isArray(E.params)){let z=E.params;E.method===Za.type.method&&z.length===2&&LT.is(z[0])?I({token:z[0],value:z[1]}):(L!==void 0&&(L.parameterStructures===Q.ParameterStructures.byName&&i.error(`Notification ${E.method} defines parameters by name but received parameters by position`),L.numberOfParams!==E.params.length&&i.error(`Notification ${E.method} defines ${L.numberOfParams} params but received ${z.length} arguments`)),I(...z))}else L!==void 0&&L.parameterStructures===Q.ParameterStructures.byPosition&&i.error(`Notification ${E.method} defines parameters by position but received parameters by name`),I(E.params);else g&&g(E.method,E.params)}catch(z){z.message?i.error(`Notification handler '${E.method}' failed with message: ${z.message}`):i.error(`Notification handler '${E.method}' failed unexpectedly.`)}else wo.fire(E)}r(jt,"handleNotification");function Ur(E){if(!E){i.error("Received empty message.");return}i.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(E,null,4)}`);let L=E;if(Be.string(L.id)||Be.number(L.id)){let I=L.id,z=B.get(I);z&&z.reject(new Error("The received response has neither a result nor an error property."))}}r(Ur,"handleInvalidMessage");function Rt(E){if(E!=null)switch(h){case me.Verbose:return JSON.stringify(E,null,4);case me.Compact:return JSON.stringify(E);default:return}}r(Rt,"stringifyTrace");function vr(E){if(!(h===me.Off||!P))if(v===cr.Text){let L;(h===me.Verbose||h===me.Compact)&&E.params&&(L=`Params: ${Rt(E.params)}

`),P.log(`Sending request '${E.method} - (${E.id})'.`,L)}else Io("send-request",E)}r(vr,"traceSendingRequest");function cn(E){if(!(h===me.Off||!P))if(v===cr.Text){let L;(h===me.Verbose||h===me.Compact)&&(E.params?L=`Params: ${Rt(E.params)}

`:L=`No parameters provided.

`),P.log(`Sending notification '${E.method}'.`,L)}else Io("send-notification",E)}r(cn,"traceSendingNotification");function xn(E,L,I){if(!(h===me.Off||!P))if(v===cr.Text){let z;(h===me.Verbose||h===me.Compact)&&(E.error&&E.error.data?z=`Error data: ${Rt(E.error.data)}

`:E.result?z=`Result: ${Rt(E.result)}

`:E.error===void 0&&(z=`No result returned.

`)),P.log(`Sending response '${L} - (${E.id})'. Processing request took ${Date.now()-I}ms`,z)}else Io("send-response",E)}r(xn,"traceSendingResponse");function Sc(E){if(!(h===me.Off||!P))if(v===cr.Text){let L;(h===me.Verbose||h===me.Compact)&&E.params&&(L=`Params: ${Rt(E.params)}

`),P.log(`Received request '${E.method} - (${E.id})'.`,L)}else Io("receive-request",E)}r(Sc,"traceReceivedRequest");function wg(E){if(!(h===me.Off||!P||E.method===Lc.type.method))if(v===cr.Text){let L;(h===me.Verbose||h===me.Compact)&&(E.params?L=`Params: ${Rt(E.params)}

`:L=`No parameters provided.

`),P.log(`Received notification '${E.method}'.`,L)}else Io("receive-notification",E)}r(wg,"traceReceivedNotification");function PI(E,L){if(!(h===me.Off||!P))if(v===cr.Text){let I;if((h===me.Verbose||h===me.Compact)&&(E.error&&E.error.data?I=`Error data: ${Rt(E.error.data)}

`:E.result?I=`Result: ${Rt(E.result)}

`:E.error===void 0&&(I=`No result returned.

`)),L){let z=E.error?` Request failed: ${E.error.message} (${E.error.code}).`:"";P.log(`Received response '${L.method} - (${E.id})' in ${Date.now()-L.timerStart}ms.${z}`,I)}else P.log(`Received response ${E.id} without active response promise.`,I)}else Io("receive-response",E)}r(PI,"traceReceivedResponse");function Io(E,L){if(!P||h===me.Off)return;let I={isLSPMessage:!0,type:E,message:L,timestamp:Date.now()};P.log(I)}r(Io,"logLSPMessage");function Ha(){if(Va())throw new Wo($a.Closed,"Connection is closed.");if(fr())throw new Wo($a.Disposed,"Connection is disposed.")}r(Ha,"throwIfClosedOrDisposed");function DI(){if(go())throw new Wo($a.AlreadyListening,"Connection is already listening")}r(DI,"throwIfListening");function BI(){if(!go())throw new Error("Call listen() first.")}r(BI,"throwIfNotListening");function Ya(E){return E===void 0?null:E}r(Ya,"undefinedToNull");function Cy(E){if(E!==null)return E}r(Cy,"nullToUndefined");function Ly(E){return E!=null&&!Array.isArray(E)&&typeof E=="object"}r(Ly,"isNamedParam");function Fg(E,L){switch(E){case Q.ParameterStructures.auto:return Ly(L)?Cy(L):[Ya(L)];case Q.ParameterStructures.byName:if(!Ly(L))throw new Error("Received parameters by name but param is not an object literal.");return Cy(L);case Q.ParameterStructures.byPosition:return[Ya(L)];default:throw new Error(`Unknown parameter structure ${E.toString()}`)}}r(Fg,"computeSingleParam");function Oy(E,L){let I,z=E.numberOfParams;switch(z){case 0:I=void 0;break;case 1:I=Fg(E.parameterStructures,L[0]);break;default:I=[];for(let Ue=0;Ue<L.length&&Ue<z;Ue++)I.push(Ya(L[Ue]));if(L.length<z)for(let Ue=L.length;Ue<z;Ue++)I.push(null);break}return I}r(Oy,"computeMessageParams");let Po={sendNotification:r((E,...L)=>{Ha();let I,z;if(Be.string(E)){I=E;let Se=L[0],He=0,$e=Q.ParameterStructures.auto;Q.ParameterStructures.is(Se)&&(He=1,$e=Se);let ue=L.length,De=ue-He;switch(De){case 0:z=void 0;break;case 1:z=Fg($e,L[He]);break;default:if($e===Q.ParameterStructures.byName)throw new Error(`Received ${De} parameters for 'by Name' notification parameter structure.`);z=L.slice(He,ue).map(Te=>Ya(Te));break}}else{let Se=L;I=E.method,z=Oy(E,Se)}let Ue={jsonrpc:l,method:I,params:z};return cn(Ue),t.write(Ue).catch(Se=>{throw i.error("Sending notification failed."),Se})},"sendNotification"),onNotification:r((E,L)=>{Ha();let I;return Be.func(E)?g=E:L&&(Be.string(E)?(I=E,_.set(E,{type:void 0,handler:L})):(I=E.method,_.set(E.method,{type:E,handler:L}))),{dispose:r(()=>{I!==void 0?_.delete(I):g=void 0},"dispose")}},"onNotification"),onProgress:r((E,L,I)=>{if(y.has(L))throw new Error(`Progress handler for token ${L} already registered`);return y.set(L,I),{dispose:r(()=>{y.delete(L)},"dispose")}},"onProgress"),sendProgress:r((E,L,I)=>Po.sendNotification(Za.type,{token:L,value:I}),"sendProgress"),onUnhandledProgress:yn.event,sendRequest:r((E,...L)=>{Ha(),BI();let I,z,Ue;if(Be.string(E)){I=E;let ue=L[0],De=L[L.length-1],Te=0,ht=Q.ParameterStructures.auto;Q.ParameterStructures.is(ue)&&(Te=1,ht=ue);let Vt=L.length;CT.CancellationToken.is(De)&&(Vt=Vt-1,Ue=De);let Br=Vt-Te;switch(Br){case 0:z=void 0;break;case 1:z=Fg(ht,L[Te]);break;default:if(ht===Q.ParameterStructures.byName)throw new Error(`Received ${Br} parameters for 'by Name' request parameter structure.`);z=L.slice(Te,Vt).map(qI=>Ya(qI));break}}else{let ue=L;I=E.method,z=Oy(E,ue);let De=E.numberOfParams;Ue=CT.CancellationToken.is(ue[De])?ue[De]:void 0}let Se=a++,He;Ue&&(He=Ue.onCancellationRequested(()=>{let ue=Jt.sender.sendCancellation(Po,Se);return ue===void 0?(i.log(`Received no promise from cancellation strategy when cancelling id ${Se}`),Promise.resolve()):ue.catch(()=>{i.log(`Sending cancellation messages for id ${Se} failed`)})}));let $e={jsonrpc:l,id:Se,method:I,params:z};return vr($e),typeof Jt.sender.enableCancellation=="function"&&Jt.sender.enableCancellation($e),new Promise(async(ue,De)=>{let Te=r(Br=>{ue(Br),Jt.sender.cleanup(Se),He?.dispose()},"resolveWithCleanup"),ht=r(Br=>{De(Br),Jt.sender.cleanup(Se),He?.dispose()},"rejectWithCleanup"),Vt={method:I,timerStart:Date.now(),resolve:Te,reject:ht};try{await t.write($e),B.set(Se,Vt)}catch(Br){throw i.error("Sending request failed."),Vt.reject(new Q.ResponseError(Q.ErrorCodes.MessageWriteError,Br.message?Br.message:"Unknown reason")),Br}})},"sendRequest"),onRequest:r((E,L)=>{Ha();let I=null;return NT.is(E)?(I=void 0,d=E):Be.string(E)?(I=null,L!==void 0&&(I=E,f.set(E,{handler:L,type:void 0}))):L!==void 0&&(I=E.method,f.set(E.method,{type:E,handler:L})),{dispose:r(()=>{I!==null&&(I!==void 0?f.delete(I):d=void 0)},"dispose")}},"onRequest"),hasPendingResponse:r(()=>B.size>0,"hasPendingResponse"),trace:r(async(E,L,I)=>{let z=!1,Ue=cr.Text;I!==void 0&&(Be.boolean(I)?z=I:(z=I.sendNotification||!1,Ue=I.traceFormat||cr.Text)),h=E,v=Ue,h===me.Off?P=void 0:P=L,z&&!Va()&&!fr()&&await Po.sendNotification(MT.type,{value:me.toString(E)})},"trace"),onError:sn.event,onClose:sr.event,onUnhandledNotification:wo.event,onDispose:Ar.event,end:r(()=>{t.end()},"end"),dispose:r(()=>{if(fr())return;le=Cr.Disposed,Ar.fire(void 0);let E=new Q.ResponseError(Q.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let L of B.values())L.reject(E);B=new Map,S=new Map,N=new Set,O=new Qy.LinkedMap,Be.func(t.dispose)&&t.dispose(),Be.func(e.dispose)&&e.dispose()},"dispose"),listen:r(()=>{Ha(),DI(),le=Cr.Listening,e.listen(yt)},"listen"),inspect:r(()=>{(0,Jy.default)().console.log("inspect")},"inspect")};return Po.onNotification(Lc.type,E=>{if(h===me.Off||!P)return;let L=h===me.Verbose||h===me.Compact;P.log(E.message,L?E.verbose:void 0)}),Po.onNotification(Za.type,E=>{let L=y.get(E.token);L?L(E.value):yn.fire(E)}),Po}r(pP,"createMessageConnection");Z.createMessageConnection=pP});var Ic=j(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.ProgressType=C.ProgressToken=C.createMessageConnection=C.NullLogger=C.ConnectionOptions=C.ConnectionStrategy=C.AbstractMessageBuffer=C.WriteableStreamMessageWriter=C.AbstractMessageWriter=C.MessageWriter=C.ReadableStreamMessageReader=C.AbstractMessageReader=C.MessageReader=C.SharedArrayReceiverStrategy=C.SharedArraySenderStrategy=C.CancellationToken=C.CancellationTokenSource=C.Emitter=C.Event=C.Disposable=C.LRUCache=C.Touch=C.LinkedMap=C.ParameterStructures=C.NotificationType9=C.NotificationType8=C.NotificationType7=C.NotificationType6=C.NotificationType5=C.NotificationType4=C.NotificationType3=C.NotificationType2=C.NotificationType1=C.NotificationType0=C.NotificationType=C.ErrorCodes=C.ResponseError=C.RequestType9=C.RequestType8=C.RequestType7=C.RequestType6=C.RequestType5=C.RequestType4=C.RequestType3=C.RequestType2=C.RequestType1=C.RequestType0=C.RequestType=C.Message=C.RAL=void 0;C.MessageStrategy=C.CancellationStrategy=C.CancellationSenderStrategy=C.CancellationReceiverStrategy=C.ConnectionError=C.ConnectionErrors=C.LogTraceNotification=C.SetTraceNotification=C.TraceFormat=C.TraceValues=C.Trace=void 0;var _e=sT();Object.defineProperty(C,"Message",{enumerable:!0,get:r(function(){return _e.Message},"get")});Object.defineProperty(C,"RequestType",{enumerable:!0,get:r(function(){return _e.RequestType},"get")});Object.defineProperty(C,"RequestType0",{enumerable:!0,get:r(function(){return _e.RequestType0},"get")});Object.defineProperty(C,"RequestType1",{enumerable:!0,get:r(function(){return _e.RequestType1},"get")});Object.defineProperty(C,"RequestType2",{enumerable:!0,get:r(function(){return _e.RequestType2},"get")});Object.defineProperty(C,"RequestType3",{enumerable:!0,get:r(function(){return _e.RequestType3},"get")});Object.defineProperty(C,"RequestType4",{enumerable:!0,get:r(function(){return _e.RequestType4},"get")});Object.defineProperty(C,"RequestType5",{enumerable:!0,get:r(function(){return _e.RequestType5},"get")});Object.defineProperty(C,"RequestType6",{enumerable:!0,get:r(function(){return _e.RequestType6},"get")});Object.defineProperty(C,"RequestType7",{enumerable:!0,get:r(function(){return _e.RequestType7},"get")});Object.defineProperty(C,"RequestType8",{enumerable:!0,get:r(function(){return _e.RequestType8},"get")});Object.defineProperty(C,"RequestType9",{enumerable:!0,get:r(function(){return _e.RequestType9},"get")});Object.defineProperty(C,"ResponseError",{enumerable:!0,get:r(function(){return _e.ResponseError},"get")});Object.defineProperty(C,"ErrorCodes",{enumerable:!0,get:r(function(){return _e.ErrorCodes},"get")});Object.defineProperty(C,"NotificationType",{enumerable:!0,get:r(function(){return _e.NotificationType},"get")});Object.defineProperty(C,"NotificationType0",{enumerable:!0,get:r(function(){return _e.NotificationType0},"get")});Object.defineProperty(C,"NotificationType1",{enumerable:!0,get:r(function(){return _e.NotificationType1},"get")});Object.defineProperty(C,"NotificationType2",{enumerable:!0,get:r(function(){return _e.NotificationType2},"get")});Object.defineProperty(C,"NotificationType3",{enumerable:!0,get:r(function(){return _e.NotificationType3},"get")});Object.defineProperty(C,"NotificationType4",{enumerable:!0,get:r(function(){return _e.NotificationType4},"get")});Object.defineProperty(C,"NotificationType5",{enumerable:!0,get:r(function(){return _e.NotificationType5},"get")});Object.defineProperty(C,"NotificationType6",{enumerable:!0,get:r(function(){return _e.NotificationType6},"get")});Object.defineProperty(C,"NotificationType7",{enumerable:!0,get:r(function(){return _e.NotificationType7},"get")});Object.defineProperty(C,"NotificationType8",{enumerable:!0,get:r(function(){return _e.NotificationType8},"get")});Object.defineProperty(C,"NotificationType9",{enumerable:!0,get:r(function(){return _e.NotificationType9},"get")});Object.defineProperty(C,"ParameterStructures",{enumerable:!0,get:r(function(){return _e.ParameterStructures},"get")});var IT=lT();Object.defineProperty(C,"LinkedMap",{enumerable:!0,get:r(function(){return IT.LinkedMap},"get")});Object.defineProperty(C,"LRUCache",{enumerable:!0,get:r(function(){return IT.LRUCache},"get")});Object.defineProperty(C,"Touch",{enumerable:!0,get:r(function(){return IT.Touch},"get")});var fP=Dy();Object.defineProperty(C,"Disposable",{enumerable:!0,get:r(function(){return fP.Disposable},"get")});var e_=qo();Object.defineProperty(C,"Event",{enumerable:!0,get:r(function(){return e_.Event},"get")});Object.defineProperty(C,"Emitter",{enumerable:!0,get:r(function(){return e_.Emitter},"get")});var t_=kc();Object.defineProperty(C,"CancellationTokenSource",{enumerable:!0,get:r(function(){return t_.CancellationTokenSource},"get")});Object.defineProperty(C,"CancellationToken",{enumerable:!0,get:r(function(){return t_.CancellationToken},"get")});var r_=qy();Object.defineProperty(C,"SharedArraySenderStrategy",{enumerable:!0,get:r(function(){return r_.SharedArraySenderStrategy},"get")});Object.defineProperty(C,"SharedArrayReceiverStrategy",{enumerable:!0,get:r(function(){return r_.SharedArrayReceiverStrategy},"get")});var PT=jy();Object.defineProperty(C,"MessageReader",{enumerable:!0,get:r(function(){return PT.MessageReader},"get")});Object.defineProperty(C,"AbstractMessageReader",{enumerable:!0,get:r(function(){return PT.AbstractMessageReader},"get")});Object.defineProperty(C,"ReadableStreamMessageReader",{enumerable:!0,get:r(function(){return PT.ReadableStreamMessageReader},"get")});var DT=Yy();Object.defineProperty(C,"MessageWriter",{enumerable:!0,get:r(function(){return DT.MessageWriter},"get")});Object.defineProperty(C,"AbstractMessageWriter",{enumerable:!0,get:r(function(){return DT.AbstractMessageWriter},"get")});Object.defineProperty(C,"WriteableStreamMessageWriter",{enumerable:!0,get:r(function(){return DT.WriteableStreamMessageWriter},"get")});var mP=Ky();Object.defineProperty(C,"AbstractMessageBuffer",{enumerable:!0,get:r(function(){return mP.AbstractMessageBuffer},"get")});var kt=$y();Object.defineProperty(C,"ConnectionStrategy",{enumerable:!0,get:r(function(){return kt.ConnectionStrategy},"get")});Object.defineProperty(C,"ConnectionOptions",{enumerable:!0,get:r(function(){return kt.ConnectionOptions},"get")});Object.defineProperty(C,"NullLogger",{enumerable:!0,get:r(function(){return kt.NullLogger},"get")});Object.defineProperty(C,"createMessageConnection",{enumerable:!0,get:r(function(){return kt.createMessageConnection},"get")});Object.defineProperty(C,"ProgressToken",{enumerable:!0,get:r(function(){return kt.ProgressToken},"get")});Object.defineProperty(C,"ProgressType",{enumerable:!0,get:r(function(){return kt.ProgressType},"get")});Object.defineProperty(C,"Trace",{enumerable:!0,get:r(function(){return kt.Trace},"get")});Object.defineProperty(C,"TraceValues",{enumerable:!0,get:r(function(){return kt.TraceValues},"get")});Object.defineProperty(C,"TraceFormat",{enumerable:!0,get:r(function(){return kt.TraceFormat},"get")});Object.defineProperty(C,"SetTraceNotification",{enumerable:!0,get:r(function(){return kt.SetTraceNotification},"get")});Object.defineProperty(C,"LogTraceNotification",{enumerable:!0,get:r(function(){return kt.LogTraceNotification},"get")});Object.defineProperty(C,"ConnectionErrors",{enumerable:!0,get:r(function(){return kt.ConnectionErrors},"get")});Object.defineProperty(C,"ConnectionError",{enumerable:!0,get:r(function(){return kt.ConnectionError},"get")});Object.defineProperty(C,"CancellationReceiverStrategy",{enumerable:!0,get:r(function(){return kt.CancellationReceiverStrategy},"get")});Object.defineProperty(C,"CancellationSenderStrategy",{enumerable:!0,get:r(function(){return kt.CancellationSenderStrategy},"get")});Object.defineProperty(C,"CancellationStrategy",{enumerable:!0,get:r(function(){return kt.CancellationStrategy},"get")});Object.defineProperty(C,"MessageStrategy",{enumerable:!0,get:r(function(){return kt.MessageStrategy},"get")});var hP=Rn();C.RAL=hP.default});var o_=j(jT=>{"use strict";Object.defineProperty(jT,"__esModule",{value:!0});var qr=Ic(),Pc=class e extends qr.AbstractMessageBuffer{static{r(this,"MessageBuffer")}constructor(t="utf-8"){super(t),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return e.emptyBuffer}fromString(t,n){return new TextEncoder().encode(t)}toString(t,n){return n==="ascii"?this.asciiDecoder.decode(t):new TextDecoder(n).decode(t)}asNative(t,n){return n===void 0?t:t.slice(0,n)}allocNative(t){return new Uint8Array(t)}};Pc.emptyBuffer=new Uint8Array(0);var BT=class{static{r(this,"ReadableStreamWrapper")}constructor(t){this.socket=t,this._onData=new qr.Emitter,this._messageListener=n=>{n.data.arrayBuffer().then(i=>{this._onData.fire(new Uint8Array(i))},()=>{(0,qr.RAL)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(t){return this.socket.addEventListener("close",t),qr.Disposable.create(()=>this.socket.removeEventListener("close",t))}onError(t){return this.socket.addEventListener("error",t),qr.Disposable.create(()=>this.socket.removeEventListener("error",t))}onEnd(t){return this.socket.addEventListener("end",t),qr.Disposable.create(()=>this.socket.removeEventListener("end",t))}onData(t){return this._onData.event(t)}},qT=class{static{r(this,"WritableStreamWrapper")}constructor(t){this.socket=t}onClose(t){return this.socket.addEventListener("close",t),qr.Disposable.create(()=>this.socket.removeEventListener("close",t))}onError(t){return this.socket.addEventListener("error",t),qr.Disposable.create(()=>this.socket.removeEventListener("error",t))}onEnd(t){return this.socket.addEventListener("end",t),qr.Disposable.create(()=>this.socket.removeEventListener("end",t))}write(t,n){if(typeof t=="string"){if(n!==void 0&&n!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${n}`);this.socket.send(t)}else this.socket.send(t);return Promise.resolve()}end(){this.socket.close()}},gP=new TextEncoder,n_=Object.freeze({messageBuffer:Object.freeze({create:r(e=>new Pc(e),"create")}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:r((e,t)=>{if(t.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${t.charset}`);return Promise.resolve(gP.encode(JSON.stringify(e,void 0,0)))},"encode")}),decoder:Object.freeze({name:"application/json",decode:r((e,t)=>{if(!(e instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(t.charset).decode(e)))},"decode")})}),stream:Object.freeze({asReadableStream:r(e=>new BT(e),"asReadableStream"),asWritableStream:r(e=>new qT(e),"asWritableStream")}),console,timer:Object.freeze({setTimeout(e,t,...n){let o=setTimeout(e,t,...n);return{dispose:r(()=>clearTimeout(o),"dispose")}},setImmediate(e,...t){let n=setTimeout(e,0,...t);return{dispose:r(()=>clearTimeout(n),"dispose")}},setInterval(e,t,...n){let o=setInterval(e,t,...n);return{dispose:r(()=>clearInterval(o),"dispose")}}})});function GT(){return n_}r(GT,"RIL");(function(e){function t(){qr.RAL.install(n_)}r(t,"install"),e.install=t})(GT||(GT={}));jT.default=GT});var Eo=j(lr=>{"use strict";var TP=lr&&lr.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),EP=lr&&lr.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&TP(t,e,n)};Object.defineProperty(lr,"__esModule",{value:!0});lr.createMessageConnection=lr.BrowserMessageWriter=lr.BrowserMessageReader=void 0;var SP=o_();SP.default.install();var zo=Ic();EP(Ic(),lr);var VT=class extends zo.AbstractMessageReader{static{r(this,"BrowserMessageReader")}constructor(t){super(),this._onData=new zo.Emitter,this._messageListener=n=>{this._onData.fire(n.data)},t.addEventListener("error",n=>this.fireError(n)),t.onmessage=this._messageListener}listen(t){return this._onData.event(t)}};lr.BrowserMessageReader=VT;var WT=class extends zo.AbstractMessageWriter{static{r(this,"BrowserMessageWriter")}constructor(t){super(),this.port=t,this.errorCount=0,t.addEventListener("error",n=>this.fireError(n))}write(t){try{return this.port.postMessage(t),Promise.resolve()}catch(n){return this.handleError(n,t),Promise.reject(n)}}handleError(t,n){this.errorCount++,this.fireError(t,n,this.errorCount)}end(){}};lr.BrowserMessageWriter=WT;function yP(e,t,n,o){return n===void 0&&(n=zo.NullLogger),zo.ConnectionStrategy.is(o)&&(o={connectionStrategy:o}),(0,zo.createMessageConnection)(e,t,n,o)}r(yP,"createMessageConnection");lr.createMessageConnection=yP});var zT=j((oz,i_)=>{"use strict";i_.exports=Eo()});var Hc={};YI(Hc,{AnnotatedTextEdit:()=>ln,ChangeAnnotation:()=>So,ChangeAnnotationIdentifier:()=>At,CodeAction:()=>AE,CodeActionContext:()=>kE,CodeActionKind:()=>RE,CodeActionTriggerKind:()=>ss,CodeDescription:()=>tE,CodeLens:()=>UE,Color:()=>Bc,ColorInformation:()=>JT,ColorPresentation:()=>QT,Command:()=>yo,CompletionItem:()=>pE,CompletionItemKind:()=>aE,CompletionItemLabelDetails:()=>dE,CompletionItemTag:()=>cE,CompletionList:()=>fE,CreateFile:()=>Yo,DeleteFile:()=>Jo,Diagnostic:()=>ns,DiagnosticRelatedInformation:()=>qc,DiagnosticSeverity:()=>$T,DiagnosticTag:()=>eE,DocumentHighlight:()=>EE,DocumentHighlightKind:()=>TE,DocumentLink:()=>CE,DocumentSymbol:()=>bE,DocumentUri:()=>HT,EOL:()=>_P,FoldingRange:()=>ZT,FoldingRangeKind:()=>XT,FormattingOptions:()=>vE,Hover:()=>mE,InlayHint:()=>DE,InlayHintKind:()=>Wc,InlayHintLabelPart:()=>zc,InlineCompletionContext:()=>WE,InlineCompletionItem:()=>qE,InlineCompletionList:()=>GE,InlineCompletionTriggerKind:()=>jE,InlineValueContext:()=>PE,InlineValueEvaluatableExpression:()=>IE,InlineValueText:()=>wE,InlineValueVariableLookup:()=>FE,InsertReplaceEdit:()=>lE,InsertTextFormat:()=>sE,InsertTextMode:()=>uE,Location:()=>rs,LocationLink:()=>KT,MarkedString:()=>as,MarkupContent:()=>Qo,MarkupKind:()=>Vc,OptionalVersionedTextDocumentIdentifier:()=>is,ParameterInformation:()=>hE,Position:()=>mr,Range:()=>Ye,RenameFile:()=>Ko,SelectedCompletionInfo:()=>VE,SelectionRange:()=>LE,SemanticTokenModifiers:()=>NE,SemanticTokenTypes:()=>OE,SemanticTokens:()=>ME,SignatureInformation:()=>gE,StringValue:()=>BE,SymbolInformation:()=>_E,SymbolKind:()=>SE,SymbolTag:()=>yE,TextDocument:()=>HE,TextDocumentEdit:()=>os,TextDocumentIdentifier:()=>nE,TextDocumentItem:()=>iE,TextEdit:()=>Gr,URI:()=>Dc,VersionedTextDocumentIdentifier:()=>oE,WorkspaceChange:()=>rE,WorkspaceEdit:()=>Gc,WorkspaceFolder:()=>zE,WorkspaceSymbol:()=>xE,integer:()=>YT,uinteger:()=>ts});var HT,Dc,YT,ts,mr,Ye,rs,KT,Bc,JT,QT,XT,ZT,qc,$T,eE,tE,ns,yo,Gr,So,At,ln,os,Yo,Ko,Jo,Gc,Ho,jc,rE,nE,oE,is,iE,Vc,Qo,aE,sE,cE,lE,uE,dE,pE,fE,as,mE,hE,gE,TE,EE,SE,yE,_E,xE,bE,RE,ss,kE,AE,UE,vE,CE,LE,OE,NE,ME,wE,FE,IE,PE,Wc,zc,DE,BE,qE,GE,jE,VE,WE,zE,_P,HE,YE,b,Yc=HI(()=>{"use strict";(function(e){function t(n){return typeof n=="string"}r(t,"is"),e.is=t})(HT||(HT={}));(function(e){function t(n){return typeof n=="string"}r(t,"is"),e.is=t})(Dc||(Dc={}));(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647;function t(n){return typeof n=="number"&&e.MIN_VALUE<=n&&n<=e.MAX_VALUE}r(t,"is"),e.is=t})(YT||(YT={}));(function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647;function t(n){return typeof n=="number"&&e.MIN_VALUE<=n&&n<=e.MAX_VALUE}r(t,"is"),e.is=t})(ts||(ts={}));(function(e){function t(o,i){return o===Number.MAX_VALUE&&(o=ts.MAX_VALUE),i===Number.MAX_VALUE&&(i=ts.MAX_VALUE),{line:o,character:i}}r(t,"create"),e.create=t;function n(o){let i=o;return b.objectLiteral(i)&&b.uinteger(i.line)&&b.uinteger(i.character)}r(n,"is"),e.is=n})(mr||(mr={}));(function(e){function t(o,i,a,s){if(b.uinteger(o)&&b.uinteger(i)&&b.uinteger(a)&&b.uinteger(s))return{start:mr.create(o,i),end:mr.create(a,s)};if(mr.is(o)&&mr.is(i))return{start:o,end:i};throw new Error(`Range#create called with invalid arguments[${o}, ${i}, ${a}, ${s}]`)}r(t,"create"),e.create=t;function n(o){let i=o;return b.objectLiteral(i)&&mr.is(i.start)&&mr.is(i.end)}r(n,"is"),e.is=n})(Ye||(Ye={}));(function(e){function t(o,i){return{uri:o,range:i}}r(t,"create"),e.create=t;function n(o){let i=o;return b.objectLiteral(i)&&Ye.is(i.range)&&(b.string(i.uri)||b.undefined(i.uri))}r(n,"is"),e.is=n})(rs||(rs={}));(function(e){function t(o,i,a,s){return{targetUri:o,targetRange:i,targetSelectionRange:a,originSelectionRange:s}}r(t,"create"),e.create=t;function n(o){let i=o;return b.objectLiteral(i)&&Ye.is(i.targetRange)&&b.string(i.targetUri)&&Ye.is(i.targetSelectionRange)&&(Ye.is(i.originSelectionRange)||b.undefined(i.originSelectionRange))}r(n,"is"),e.is=n})(KT||(KT={}));(function(e){function t(o,i,a,s){return{red:o,green:i,blue:a,alpha:s}}r(t,"create"),e.create=t;function n(o){let i=o;return b.objectLiteral(i)&&b.numberRange(i.red,0,1)&&b.numberRange(i.green,0,1)&&b.numberRange(i.blue,0,1)&&b.numberRange(i.alpha,0,1)}r(n,"is"),e.is=n})(Bc||(Bc={}));(function(e){function t(o,i){return{range:o,color:i}}r(t,"create"),e.create=t;function n(o){let i=o;return b.objectLiteral(i)&&Ye.is(i.range)&&Bc.is(i.color)}r(n,"is"),e.is=n})(JT||(JT={}));(function(e){function t(o,i,a){return{label:o,textEdit:i,additionalTextEdits:a}}r(t,"create"),e.create=t;function n(o){let i=o;return b.objectLiteral(i)&&b.string(i.label)&&(b.undefined(i.textEdit)||Gr.is(i))&&(b.undefined(i.additionalTextEdits)||b.typedArray(i.additionalTextEdits,Gr.is))}r(n,"is"),e.is=n})(QT||(QT={}));(function(e){e.Comment="comment",e.Imports="imports",e.Region="region"})(XT||(XT={}));(function(e){function t(o,i,a,s,c,l){let d={startLine:o,endLine:i};return b.defined(a)&&(d.startCharacter=a),b.defined(s)&&(d.endCharacter=s),b.defined(c)&&(d.kind=c),b.defined(l)&&(d.collapsedText=l),d}r(t,"create"),e.create=t;function n(o){let i=o;return b.objectLiteral(i)&&b.uinteger(i.startLine)&&b.uinteger(i.startLine)&&(b.undefined(i.startCharacter)||b.uinteger(i.startCharacter))&&(b.undefined(i.endCharacter)||b.uinteger(i.endCharacter))&&(b.undefined(i.kind)||b.string(i.kind))}r(n,"is"),e.is=n})(ZT||(ZT={}));(function(e){function t(o,i){return{location:o,message:i}}r(t,"create"),e.create=t;function n(o){let i=o;return b.defined(i)&&rs.is(i.location)&&b.string(i.message)}r(n,"is"),e.is=n})(qc||(qc={}));(function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4})($T||($T={}));(function(e){e.Unnecessary=1,e.Deprecated=2})(eE||(eE={}));(function(e){function t(n){let o=n;return b.objectLiteral(o)&&b.string(o.href)}r(t,"is"),e.is=t})(tE||(tE={}));(function(e){function t(o,i,a,s,c,l){let d={range:o,message:i};return b.defined(a)&&(d.severity=a),b.defined(s)&&(d.code=s),b.defined(c)&&(d.source=c),b.defined(l)&&(d.relatedInformation=l),d}r(t,"create"),e.create=t;function n(o){var i;let a=o;return b.defined(a)&&Ye.is(a.range)&&b.string(a.message)&&(b.number(a.severity)||b.undefined(a.severity))&&(b.integer(a.code)||b.string(a.code)||b.undefined(a.code))&&(b.undefined(a.codeDescription)||b.string((i=a.codeDescription)===null||i===void 0?void 0:i.href))&&(b.string(a.source)||b.undefined(a.source))&&(b.undefined(a.relatedInformation)||b.typedArray(a.relatedInformation,qc.is))}r(n,"is"),e.is=n})(ns||(ns={}));(function(e){function t(o,i,...a){let s={title:o,command:i};return b.defined(a)&&a.length>0&&(s.arguments=a),s}r(t,"create"),e.create=t;function n(o){let i=o;return b.defined(i)&&b.string(i.title)&&b.string(i.command)}r(n,"is"),e.is=n})(yo||(yo={}));(function(e){function t(a,s){return{range:a,newText:s}}r(t,"replace"),e.replace=t;function n(a,s){return{range:{start:a,end:a},newText:s}}r(n,"insert"),e.insert=n;function o(a){return{range:a,newText:""}}r(o,"del"),e.del=o;function i(a){let s=a;return b.objectLiteral(s)&&b.string(s.newText)&&Ye.is(s.range)}r(i,"is"),e.is=i})(Gr||(Gr={}));(function(e){function t(o,i,a){let s={label:o};return i!==void 0&&(s.needsConfirmation=i),a!==void 0&&(s.description=a),s}r(t,"create"),e.create=t;function n(o){let i=o;return b.objectLiteral(i)&&b.string(i.label)&&(b.boolean(i.needsConfirmation)||i.needsConfirmation===void 0)&&(b.string(i.description)||i.description===void 0)}r(n,"is"),e.is=n})(So||(So={}));(function(e){function t(n){let o=n;return b.string(o)}r(t,"is"),e.is=t})(At||(At={}));(function(e){function t(a,s,c){return{range:a,newText:s,annotationId:c}}r(t,"replace"),e.replace=t;function n(a,s,c){return{range:{start:a,end:a},newText:s,annotationId:c}}r(n,"insert"),e.insert=n;function o(a,s){return{range:a,newText:"",annotationId:s}}r(o,"del"),e.del=o;function i(a){let s=a;return Gr.is(s)&&(So.is(s.annotationId)||At.is(s.annotationId))}r(i,"is"),e.is=i})(ln||(ln={}));(function(e){function t(o,i){return{textDocument:o,edits:i}}r(t,"create"),e.create=t;function n(o){let i=o;return b.defined(i)&&is.is(i.textDocument)&&Array.isArray(i.edits)}r(n,"is"),e.is=n})(os||(os={}));(function(e){function t(o,i,a){let s={kind:"create",uri:o};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(s.options=i),a!==void 0&&(s.annotationId=a),s}r(t,"create"),e.create=t;function n(o){let i=o;return i&&i.kind==="create"&&b.string(i.uri)&&(i.options===void 0||(i.options.overwrite===void 0||b.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||b.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||At.is(i.annotationId))}r(n,"is"),e.is=n})(Yo||(Yo={}));(function(e){function t(o,i,a,s){let c={kind:"rename",oldUri:o,newUri:i};return a!==void 0&&(a.overwrite!==void 0||a.ignoreIfExists!==void 0)&&(c.options=a),s!==void 0&&(c.annotationId=s),c}r(t,"create"),e.create=t;function n(o){let i=o;return i&&i.kind==="rename"&&b.string(i.oldUri)&&b.string(i.newUri)&&(i.options===void 0||(i.options.overwrite===void 0||b.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||b.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||At.is(i.annotationId))}r(n,"is"),e.is=n})(Ko||(Ko={}));(function(e){function t(o,i,a){let s={kind:"delete",uri:o};return i!==void 0&&(i.recursive!==void 0||i.ignoreIfNotExists!==void 0)&&(s.options=i),a!==void 0&&(s.annotationId=a),s}r(t,"create"),e.create=t;function n(o){let i=o;return i&&i.kind==="delete"&&b.string(i.uri)&&(i.options===void 0||(i.options.recursive===void 0||b.boolean(i.options.recursive))&&(i.options.ignoreIfNotExists===void 0||b.boolean(i.options.ignoreIfNotExists)))&&(i.annotationId===void 0||At.is(i.annotationId))}r(n,"is"),e.is=n})(Jo||(Jo={}));(function(e){function t(n){let o=n;return o&&(o.changes!==void 0||o.documentChanges!==void 0)&&(o.documentChanges===void 0||o.documentChanges.every(i=>b.string(i.kind)?Yo.is(i)||Ko.is(i)||Jo.is(i):os.is(i)))}r(t,"is"),e.is=t})(Gc||(Gc={}));Ho=class{static{r(this,"TextEditChangeImpl")}constructor(t,n){this.edits=t,this.changeAnnotations=n}insert(t,n,o){let i,a;if(o===void 0?i=Gr.insert(t,n):At.is(o)?(a=o,i=ln.insert(t,n,o)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(o),i=ln.insert(t,n,a)),this.edits.push(i),a!==void 0)return a}replace(t,n,o){let i,a;if(o===void 0?i=Gr.replace(t,n):At.is(o)?(a=o,i=ln.replace(t,n,o)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(o),i=ln.replace(t,n,a)),this.edits.push(i),a!==void 0)return a}delete(t,n){let o,i;if(n===void 0?o=Gr.del(t):At.is(n)?(i=n,o=ln.del(t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),o=ln.del(t,i)),this.edits.push(o),i!==void 0)return i}add(t){this.edits.push(t)}all(){return this.edits}clear(){this.edits.splice(0,this.edits.length)}assertChangeAnnotations(t){if(t===void 0)throw new Error("Text edit change is not configured to manage change annotations.")}},jc=class{static{r(this,"ChangeAnnotations")}constructor(t){this._annotations=t===void 0?Object.create(null):t,this._counter=0,this._size=0}all(){return this._annotations}get size(){return this._size}manage(t,n){let o;if(At.is(t)?o=t:(o=this.nextId(),n=t),this._annotations[o]!==void 0)throw new Error(`Id ${o} is already in use.`);if(n===void 0)throw new Error(`No annotation provided for id ${o}`);return this._annotations[o]=n,this._size++,o}nextId(){return this._counter++,this._counter.toString()}},rE=class{static{r(this,"WorkspaceChange")}constructor(t){this._textEditChanges=Object.create(null),t!==void 0?(this._workspaceEdit=t,t.documentChanges?(this._changeAnnotations=new jc(t.changeAnnotations),t.changeAnnotations=this._changeAnnotations.all(),t.documentChanges.forEach(n=>{if(os.is(n)){let o=new Ho(n.edits,this._changeAnnotations);this._textEditChanges[n.textDocument.uri]=o}})):t.changes&&Object.keys(t.changes).forEach(n=>{let o=new Ho(t.changes[n]);this._textEditChanges[n]=o})):this._workspaceEdit={}}get edit(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit}getTextEditChange(t){if(is.is(t)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let n={uri:t.uri,version:t.version},o=this._textEditChanges[n.uri];if(!o){let i=[],a={textDocument:n,edits:i};this._workspaceEdit.documentChanges.push(a),o=new Ho(i,this._changeAnnotations),this._textEditChanges[n.uri]=o}return o}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");let n=this._textEditChanges[t];if(!n){let o=[];this._workspaceEdit.changes[t]=o,n=new Ho(o),this._textEditChanges[t]=n}return n}}initDocumentChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new jc,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())}initChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))}createFile(t,n,o){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;So.is(n)||At.is(n)?i=n:o=n;let a,s;if(i===void 0?a=Yo.create(t,o):(s=At.is(i)?i:this._changeAnnotations.manage(i),a=Yo.create(t,o,s)),this._workspaceEdit.documentChanges.push(a),s!==void 0)return s}renameFile(t,n,o,i){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let a;So.is(o)||At.is(o)?a=o:i=o;let s,c;if(a===void 0?s=Ko.create(t,n,i):(c=At.is(a)?a:this._changeAnnotations.manage(a),s=Ko.create(t,n,i,c)),this._workspaceEdit.documentChanges.push(s),c!==void 0)return c}deleteFile(t,n,o){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;So.is(n)||At.is(n)?i=n:o=n;let a,s;if(i===void 0?a=Jo.create(t,o):(s=At.is(i)?i:this._changeAnnotations.manage(i),a=Jo.create(t,o,s)),this._workspaceEdit.documentChanges.push(a),s!==void 0)return s}};(function(e){function t(o){return{uri:o}}r(t,"create"),e.create=t;function n(o){let i=o;return b.defined(i)&&b.string(i.uri)}r(n,"is"),e.is=n})(nE||(nE={}));(function(e){function t(o,i){return{uri:o,version:i}}r(t,"create"),e.create=t;function n(o){let i=o;return b.defined(i)&&b.string(i.uri)&&b.integer(i.version)}r(n,"is"),e.is=n})(oE||(oE={}));(function(e){function t(o,i){return{uri:o,version:i}}r(t,"create"),e.create=t;function n(o){let i=o;return b.defined(i)&&b.string(i.uri)&&(i.version===null||b.integer(i.version))}r(n,"is"),e.is=n})(is||(is={}));(function(e){function t(o,i,a,s){return{uri:o,languageId:i,version:a,text:s}}r(t,"create"),e.create=t;function n(o){let i=o;return b.defined(i)&&b.string(i.uri)&&b.string(i.languageId)&&b.integer(i.version)&&b.string(i.text)}r(n,"is"),e.is=n})(iE||(iE={}));(function(e){e.PlainText="plaintext",e.Markdown="markdown";function t(n){let o=n;return o===e.PlainText||o===e.Markdown}r(t,"is"),e.is=t})(Vc||(Vc={}));(function(e){function t(n){let o=n;return b.objectLiteral(n)&&Vc.is(o.kind)&&b.string(o.value)}r(t,"is"),e.is=t})(Qo||(Qo={}));(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(aE||(aE={}));(function(e){e.PlainText=1,e.Snippet=2})(sE||(sE={}));(function(e){e.Deprecated=1})(cE||(cE={}));(function(e){function t(o,i,a){return{newText:o,insert:i,replace:a}}r(t,"create"),e.create=t;function n(o){let i=o;return i&&b.string(i.newText)&&Ye.is(i.insert)&&Ye.is(i.replace)}r(n,"is"),e.is=n})(lE||(lE={}));(function(e){e.asIs=1,e.adjustIndentation=2})(uE||(uE={}));(function(e){function t(n){let o=n;return o&&(b.string(o.detail)||o.detail===void 0)&&(b.string(o.description)||o.description===void 0)}r(t,"is"),e.is=t})(dE||(dE={}));(function(e){function t(n){return{label:n}}r(t,"create"),e.create=t})(pE||(pE={}));(function(e){function t(n,o){return{items:n||[],isIncomplete:!!o}}r(t,"create"),e.create=t})(fE||(fE={}));(function(e){function t(o){return o.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}r(t,"fromPlainText"),e.fromPlainText=t;function n(o){let i=o;return b.string(i)||b.objectLiteral(i)&&b.string(i.language)&&b.string(i.value)}r(n,"is"),e.is=n})(as||(as={}));(function(e){function t(n){let o=n;return!!o&&b.objectLiteral(o)&&(Qo.is(o.contents)||as.is(o.contents)||b.typedArray(o.contents,as.is))&&(n.range===void 0||Ye.is(n.range))}r(t,"is"),e.is=t})(mE||(mE={}));(function(e){function t(n,o){return o?{label:n,documentation:o}:{label:n}}r(t,"create"),e.create=t})(hE||(hE={}));(function(e){function t(n,o,...i){let a={label:n};return b.defined(o)&&(a.documentation=o),b.defined(i)?a.parameters=i:a.parameters=[],a}r(t,"create"),e.create=t})(gE||(gE={}));(function(e){e.Text=1,e.Read=2,e.Write=3})(TE||(TE={}));(function(e){function t(n,o){let i={range:n};return b.number(o)&&(i.kind=o),i}r(t,"create"),e.create=t})(EE||(EE={}));(function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26})(SE||(SE={}));(function(e){e.Deprecated=1})(yE||(yE={}));(function(e){function t(n,o,i,a,s){let c={name:n,kind:o,location:{uri:a,range:i}};return s&&(c.containerName=s),c}r(t,"create"),e.create=t})(_E||(_E={}));(function(e){function t(n,o,i,a){return a!==void 0?{name:n,kind:o,location:{uri:i,range:a}}:{name:n,kind:o,location:{uri:i}}}r(t,"create"),e.create=t})(xE||(xE={}));(function(e){function t(o,i,a,s,c,l){let d={name:o,detail:i,kind:a,range:s,selectionRange:c};return l!==void 0&&(d.children=l),d}r(t,"create"),e.create=t;function n(o){let i=o;return i&&b.string(i.name)&&b.number(i.kind)&&Ye.is(i.range)&&Ye.is(i.selectionRange)&&(i.detail===void 0||b.string(i.detail))&&(i.deprecated===void 0||b.boolean(i.deprecated))&&(i.children===void 0||Array.isArray(i.children))&&(i.tags===void 0||Array.isArray(i.tags))}r(n,"is"),e.is=n})(bE||(bE={}));(function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"})(RE||(RE={}));(function(e){e.Invoked=1,e.Automatic=2})(ss||(ss={}));(function(e){function t(o,i,a){let s={diagnostics:o};return i!=null&&(s.only=i),a!=null&&(s.triggerKind=a),s}r(t,"create"),e.create=t;function n(o){let i=o;return b.defined(i)&&b.typedArray(i.diagnostics,ns.is)&&(i.only===void 0||b.typedArray(i.only,b.string))&&(i.triggerKind===void 0||i.triggerKind===ss.Invoked||i.triggerKind===ss.Automatic)}r(n,"is"),e.is=n})(kE||(kE={}));(function(e){function t(o,i,a){let s={title:o},c=!0;return typeof i=="string"?(c=!1,s.kind=i):yo.is(i)?s.command=i:s.edit=i,c&&a!==void 0&&(s.kind=a),s}r(t,"create"),e.create=t;function n(o){let i=o;return i&&b.string(i.title)&&(i.diagnostics===void 0||b.typedArray(i.diagnostics,ns.is))&&(i.kind===void 0||b.string(i.kind))&&(i.edit!==void 0||i.command!==void 0)&&(i.command===void 0||yo.is(i.command))&&(i.isPreferred===void 0||b.boolean(i.isPreferred))&&(i.edit===void 0||Gc.is(i.edit))}r(n,"is"),e.is=n})(AE||(AE={}));(function(e){function t(o,i){let a={range:o};return b.defined(i)&&(a.data=i),a}r(t,"create"),e.create=t;function n(o){let i=o;return b.defined(i)&&Ye.is(i.range)&&(b.undefined(i.command)||yo.is(i.command))}r(n,"is"),e.is=n})(UE||(UE={}));(function(e){function t(o,i){return{tabSize:o,insertSpaces:i}}r(t,"create"),e.create=t;function n(o){let i=o;return b.defined(i)&&b.uinteger(i.tabSize)&&b.boolean(i.insertSpaces)}r(n,"is"),e.is=n})(vE||(vE={}));(function(e){function t(o,i,a){return{range:o,target:i,data:a}}r(t,"create"),e.create=t;function n(o){let i=o;return b.defined(i)&&Ye.is(i.range)&&(b.undefined(i.target)||b.string(i.target))}r(n,"is"),e.is=n})(CE||(CE={}));(function(e){function t(o,i){return{range:o,parent:i}}r(t,"create"),e.create=t;function n(o){let i=o;return b.objectLiteral(i)&&Ye.is(i.range)&&(i.parent===void 0||e.is(i.parent))}r(n,"is"),e.is=n})(LE||(LE={}));(function(e){e.namespace="namespace",e.type="type",e.class="class",e.enum="enum",e.interface="interface",e.struct="struct",e.typeParameter="typeParameter",e.parameter="parameter",e.variable="variable",e.property="property",e.enumMember="enumMember",e.event="event",e.function="function",e.method="method",e.macro="macro",e.keyword="keyword",e.modifier="modifier",e.comment="comment",e.string="string",e.number="number",e.regexp="regexp",e.operator="operator",e.decorator="decorator"})(OE||(OE={}));(function(e){e.declaration="declaration",e.definition="definition",e.readonly="readonly",e.static="static",e.deprecated="deprecated",e.abstract="abstract",e.async="async",e.modification="modification",e.documentation="documentation",e.defaultLibrary="defaultLibrary"})(NE||(NE={}));(function(e){function t(n){let o=n;return b.objectLiteral(o)&&(o.resultId===void 0||typeof o.resultId=="string")&&Array.isArray(o.data)&&(o.data.length===0||typeof o.data[0]=="number")}r(t,"is"),e.is=t})(ME||(ME={}));(function(e){function t(o,i){return{range:o,text:i}}r(t,"create"),e.create=t;function n(o){let i=o;return i!=null&&Ye.is(i.range)&&b.string(i.text)}r(n,"is"),e.is=n})(wE||(wE={}));(function(e){function t(o,i,a){return{range:o,variableName:i,caseSensitiveLookup:a}}r(t,"create"),e.create=t;function n(o){let i=o;return i!=null&&Ye.is(i.range)&&b.boolean(i.caseSensitiveLookup)&&(b.string(i.variableName)||i.variableName===void 0)}r(n,"is"),e.is=n})(FE||(FE={}));(function(e){function t(o,i){return{range:o,expression:i}}r(t,"create"),e.create=t;function n(o){let i=o;return i!=null&&Ye.is(i.range)&&(b.string(i.expression)||i.expression===void 0)}r(n,"is"),e.is=n})(IE||(IE={}));(function(e){function t(o,i){return{frameId:o,stoppedLocation:i}}r(t,"create"),e.create=t;function n(o){let i=o;return b.defined(i)&&Ye.is(o.stoppedLocation)}r(n,"is"),e.is=n})(PE||(PE={}));(function(e){e.Type=1,e.Parameter=2;function t(n){return n===1||n===2}r(t,"is"),e.is=t})(Wc||(Wc={}));(function(e){function t(o){return{value:o}}r(t,"create"),e.create=t;function n(o){let i=o;return b.objectLiteral(i)&&(i.tooltip===void 0||b.string(i.tooltip)||Qo.is(i.tooltip))&&(i.location===void 0||rs.is(i.location))&&(i.command===void 0||yo.is(i.command))}r(n,"is"),e.is=n})(zc||(zc={}));(function(e){function t(o,i,a){let s={position:o,label:i};return a!==void 0&&(s.kind=a),s}r(t,"create"),e.create=t;function n(o){let i=o;return b.objectLiteral(i)&&mr.is(i.position)&&(b.string(i.label)||b.typedArray(i.label,zc.is))&&(i.kind===void 0||Wc.is(i.kind))&&i.textEdits===void 0||b.typedArray(i.textEdits,Gr.is)&&(i.tooltip===void 0||b.string(i.tooltip)||Qo.is(i.tooltip))&&(i.paddingLeft===void 0||b.boolean(i.paddingLeft))&&(i.paddingRight===void 0||b.boolean(i.paddingRight))}r(n,"is"),e.is=n})(DE||(DE={}));(function(e){function t(n){return{kind:"snippet",value:n}}r(t,"createSnippet"),e.createSnippet=t})(BE||(BE={}));(function(e){function t(n,o,i,a){return{insertText:n,filterText:o,range:i,command:a}}r(t,"create"),e.create=t})(qE||(qE={}));(function(e){function t(n){return{items:n}}r(t,"create"),e.create=t})(GE||(GE={}));(function(e){e.Invoked=0,e.Automatic=1})(jE||(jE={}));(function(e){function t(n,o){return{range:n,text:o}}r(t,"create"),e.create=t})(VE||(VE={}));(function(e){function t(n,o){return{triggerKind:n,selectedCompletionInfo:o}}r(t,"create"),e.create=t})(WE||(WE={}));(function(e){function t(n){let o=n;return b.objectLiteral(o)&&Dc.is(o.uri)&&b.string(o.name)}r(t,"is"),e.is=t})(zE||(zE={}));_P=[`
`,`\r
`,"\r"];(function(e){function t(a,s,c,l){return new YE(a,s,c,l)}r(t,"create"),e.create=t;function n(a){let s=a;return!!(b.defined(s)&&b.string(s.uri)&&(b.undefined(s.languageId)||b.string(s.languageId))&&b.uinteger(s.lineCount)&&b.func(s.getText)&&b.func(s.positionAt)&&b.func(s.offsetAt))}r(n,"is"),e.is=n;function o(a,s){let c=a.getText(),l=i(s,(f,g)=>{let _=f.range.start.line-g.range.start.line;return _===0?f.range.start.character-g.range.start.character:_}),d=c.length;for(let f=l.length-1;f>=0;f--){let g=l[f],_=a.offsetAt(g.range.start),y=a.offsetAt(g.range.end);if(y<=d)c=c.substring(0,_)+g.newText+c.substring(y,c.length);else throw new Error("Overlapping edit");d=_}return c}r(o,"applyEdits"),e.applyEdits=o;function i(a,s){if(a.length<=1)return a;let c=a.length/2|0,l=a.slice(0,c),d=a.slice(c);i(l,s),i(d,s);let f=0,g=0,_=0;for(;f<l.length&&g<d.length;)s(l[f],d[g])<=0?a[_++]=l[f++]:a[_++]=d[g++];for(;f<l.length;)a[_++]=l[f++];for(;g<d.length;)a[_++]=d[g++];return a}r(i,"mergeSort")})(HE||(HE={}));YE=class{static{r(this,"FullTextDocument")}constructor(t,n,o,i){this._uri=t,this._languageId=n,this._version=o,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(t){if(t){let n=this.offsetAt(t.start),o=this.offsetAt(t.end);return this._content.substring(n,o)}return this._content}update(t,n){this._content=t.text,this._version=n,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let t=[],n=this._content,o=!0;for(let i=0;i<n.length;i++){o&&(t.push(i),o=!1);let a=n.charAt(i);o=a==="\r"||a===`
`,a==="\r"&&i+1<n.length&&n.charAt(i+1)===`
`&&i++}o&&n.length>0&&t.push(n.length),this._lineOffsets=t}return this._lineOffsets}positionAt(t){t=Math.max(Math.min(t,this._content.length),0);let n=this.getLineOffsets(),o=0,i=n.length;if(i===0)return mr.create(0,t);for(;o<i;){let s=Math.floor((o+i)/2);n[s]>t?i=s:o=s+1}let a=o-1;return mr.create(a,t-n[a])}offsetAt(t){let n=this.getLineOffsets();if(t.line>=n.length)return this._content.length;if(t.line<0)return 0;let o=n[t.line],i=t.line+1<n.length?n[t.line+1]:this._content.length;return Math.max(Math.min(o+t.character,i),o)}get lineCount(){return this.getLineOffsets().length}};(function(e){let t=Object.prototype.toString;function n(y){return typeof y<"u"}r(n,"defined"),e.defined=n;function o(y){return typeof y>"u"}r(o,"undefined"),e.undefined=o;function i(y){return y===!0||y===!1}r(i,"boolean"),e.boolean=i;function a(y){return t.call(y)==="[object String]"}r(a,"string"),e.string=a;function s(y){return t.call(y)==="[object Number]"}r(s,"number"),e.number=s;function c(y,w,O){return t.call(y)==="[object Number]"&&w<=y&&y<=O}r(c,"numberRange"),e.numberRange=c;function l(y){return t.call(y)==="[object Number]"&&-2147483648<=y&&y<=2147483647}r(l,"integer"),e.integer=l;function d(y){return t.call(y)==="[object Number]"&&0<=y&&y<=2147483647}r(d,"uinteger"),e.uinteger=d;function f(y){return t.call(y)==="[object Function]"}r(f,"func"),e.func=f;function g(y){return y!==null&&typeof y=="object"}r(g,"objectLiteral"),e.objectLiteral=g;function _(y,w){return Array.isArray(y)&&y.every(w)}r(_,"typedArray"),e.typedArray=_})(b||(b={}))});var Me=j($t=>{"use strict";Object.defineProperty($t,"__esModule",{value:!0});$t.ProtocolNotificationType=$t.ProtocolNotificationType0=$t.ProtocolRequestType=$t.ProtocolRequestType0=$t.RegistrationType=$t.MessageDirection=void 0;var Xo=Eo(),a_;(function(e){e.clientToServer="clientToServer",e.serverToClient="serverToClient",e.both="both"})(a_||($t.MessageDirection=a_={}));var KE=class{static{r(this,"RegistrationType")}constructor(t){this.method=t}};$t.RegistrationType=KE;var JE=class extends Xo.RequestType0{static{r(this,"ProtocolRequestType0")}constructor(t){super(t)}};$t.ProtocolRequestType0=JE;var QE=class extends Xo.RequestType{static{r(this,"ProtocolRequestType")}constructor(t){super(t,Xo.ParameterStructures.byName)}};$t.ProtocolRequestType=QE;var XE=class extends Xo.NotificationType0{static{r(this,"ProtocolNotificationType0")}constructor(t){super(t)}};$t.ProtocolNotificationType0=XE;var ZE=class extends Xo.NotificationType{static{r(this,"ProtocolNotificationType")}constructor(t){super(t,Xo.ParameterStructures.byName)}};$t.ProtocolNotificationType=ZE});var Kc=j(st=>{"use strict";Object.defineProperty(st,"__esModule",{value:!0});st.objectLiteral=st.typedArray=st.stringArray=st.array=st.func=st.error=st.number=st.string=st.boolean=void 0;function xP(e){return e===!0||e===!1}r(xP,"boolean");st.boolean=xP;function s_(e){return typeof e=="string"||e instanceof String}r(s_,"string");st.string=s_;function bP(e){return typeof e=="number"||e instanceof Number}r(bP,"number");st.number=bP;function RP(e){return e instanceof Error}r(RP,"error");st.error=RP;function kP(e){return typeof e=="function"}r(kP,"func");st.func=kP;function c_(e){return Array.isArray(e)}r(c_,"array");st.array=c_;function AP(e){return c_(e)&&e.every(t=>s_(t))}r(AP,"stringArray");st.stringArray=AP;function UP(e,t){return Array.isArray(e)&&e.every(t)}r(UP,"typedArray");st.typedArray=UP;function vP(e){return e!==null&&typeof e=="object"}r(vP,"objectLiteral");st.objectLiteral=vP});var d_=j(Jc=>{"use strict";Object.defineProperty(Jc,"__esModule",{value:!0});Jc.ImplementationRequest=void 0;var l_=Me(),u_;(function(e){e.method="textDocument/implementation",e.messageDirection=l_.MessageDirection.clientToServer,e.type=new l_.ProtocolRequestType(e.method)})(u_||(Jc.ImplementationRequest=u_={}))});var m_=j(Qc=>{"use strict";Object.defineProperty(Qc,"__esModule",{value:!0});Qc.TypeDefinitionRequest=void 0;var p_=Me(),f_;(function(e){e.method="textDocument/typeDefinition",e.messageDirection=p_.MessageDirection.clientToServer,e.type=new p_.ProtocolRequestType(e.method)})(f_||(Qc.TypeDefinitionRequest=f_={}))});var T_=j(Zo=>{"use strict";Object.defineProperty(Zo,"__esModule",{value:!0});Zo.DidChangeWorkspaceFoldersNotification=Zo.WorkspaceFoldersRequest=void 0;var Xc=Me(),h_;(function(e){e.method="workspace/workspaceFolders",e.messageDirection=Xc.MessageDirection.serverToClient,e.type=new Xc.ProtocolRequestType0(e.method)})(h_||(Zo.WorkspaceFoldersRequest=h_={}));var g_;(function(e){e.method="workspace/didChangeWorkspaceFolders",e.messageDirection=Xc.MessageDirection.clientToServer,e.type=new Xc.ProtocolNotificationType(e.method)})(g_||(Zo.DidChangeWorkspaceFoldersNotification=g_={}))});var y_=j(Zc=>{"use strict";Object.defineProperty(Zc,"__esModule",{value:!0});Zc.ConfigurationRequest=void 0;var E_=Me(),S_;(function(e){e.method="workspace/configuration",e.messageDirection=E_.MessageDirection.serverToClient,e.type=new E_.ProtocolRequestType(e.method)})(S_||(Zc.ConfigurationRequest=S_={}))});var b_=j($o=>{"use strict";Object.defineProperty($o,"__esModule",{value:!0});$o.ColorPresentationRequest=$o.DocumentColorRequest=void 0;var $c=Me(),__;(function(e){e.method="textDocument/documentColor",e.messageDirection=$c.MessageDirection.clientToServer,e.type=new $c.ProtocolRequestType(e.method)})(__||($o.DocumentColorRequest=__={}));var x_;(function(e){e.method="textDocument/colorPresentation",e.messageDirection=$c.MessageDirection.clientToServer,e.type=new $c.ProtocolRequestType(e.method)})(x_||($o.ColorPresentationRequest=x_={}))});var A_=j(ei=>{"use strict";Object.defineProperty(ei,"__esModule",{value:!0});ei.FoldingRangeRefreshRequest=ei.FoldingRangeRequest=void 0;var el=Me(),R_;(function(e){e.method="textDocument/foldingRange",e.messageDirection=el.MessageDirection.clientToServer,e.type=new el.ProtocolRequestType(e.method)})(R_||(ei.FoldingRangeRequest=R_={}));var k_;(function(e){e.method="workspace/foldingRange/refresh",e.messageDirection=el.MessageDirection.serverToClient,e.type=new el.ProtocolRequestType0(e.method)})(k_||(ei.FoldingRangeRefreshRequest=k_={}))});var C_=j(tl=>{"use strict";Object.defineProperty(tl,"__esModule",{value:!0});tl.DeclarationRequest=void 0;var U_=Me(),v_;(function(e){e.method="textDocument/declaration",e.messageDirection=U_.MessageDirection.clientToServer,e.type=new U_.ProtocolRequestType(e.method)})(v_||(tl.DeclarationRequest=v_={}))});var N_=j(rl=>{"use strict";Object.defineProperty(rl,"__esModule",{value:!0});rl.SelectionRangeRequest=void 0;var L_=Me(),O_;(function(e){e.method="textDocument/selectionRange",e.messageDirection=L_.MessageDirection.clientToServer,e.type=new L_.ProtocolRequestType(e.method)})(O_||(rl.SelectionRangeRequest=O_={}))});var I_=j(Un=>{"use strict";Object.defineProperty(Un,"__esModule",{value:!0});Un.WorkDoneProgressCancelNotification=Un.WorkDoneProgressCreateRequest=Un.WorkDoneProgress=void 0;var CP=Eo(),nl=Me(),M_;(function(e){e.type=new CP.ProgressType;function t(n){return n===e.type}r(t,"is"),e.is=t})(M_||(Un.WorkDoneProgress=M_={}));var w_;(function(e){e.method="window/workDoneProgress/create",e.messageDirection=nl.MessageDirection.serverToClient,e.type=new nl.ProtocolRequestType(e.method)})(w_||(Un.WorkDoneProgressCreateRequest=w_={}));var F_;(function(e){e.method="window/workDoneProgress/cancel",e.messageDirection=nl.MessageDirection.clientToServer,e.type=new nl.ProtocolNotificationType(e.method)})(F_||(Un.WorkDoneProgressCancelNotification=F_={}))});var q_=j(vn=>{"use strict";Object.defineProperty(vn,"__esModule",{value:!0});vn.CallHierarchyOutgoingCallsRequest=vn.CallHierarchyIncomingCallsRequest=vn.CallHierarchyPrepareRequest=void 0;var ti=Me(),P_;(function(e){e.method="textDocument/prepareCallHierarchy",e.messageDirection=ti.MessageDirection.clientToServer,e.type=new ti.ProtocolRequestType(e.method)})(P_||(vn.CallHierarchyPrepareRequest=P_={}));var D_;(function(e){e.method="callHierarchy/incomingCalls",e.messageDirection=ti.MessageDirection.clientToServer,e.type=new ti.ProtocolRequestType(e.method)})(D_||(vn.CallHierarchyIncomingCallsRequest=D_={}));var B_;(function(e){e.method="callHierarchy/outgoingCalls",e.messageDirection=ti.MessageDirection.clientToServer,e.type=new ti.ProtocolRequestType(e.method)})(B_||(vn.CallHierarchyOutgoingCallsRequest=B_={}))});var H_=j(er=>{"use strict";Object.defineProperty(er,"__esModule",{value:!0});er.SemanticTokensRefreshRequest=er.SemanticTokensRangeRequest=er.SemanticTokensDeltaRequest=er.SemanticTokensRequest=er.SemanticTokensRegistrationType=er.TokenFormat=void 0;var un=Me(),G_;(function(e){e.Relative="relative"})(G_||(er.TokenFormat=G_={}));var cs;(function(e){e.method="textDocument/semanticTokens",e.type=new un.RegistrationType(e.method)})(cs||(er.SemanticTokensRegistrationType=cs={}));var j_;(function(e){e.method="textDocument/semanticTokens/full",e.messageDirection=un.MessageDirection.clientToServer,e.type=new un.ProtocolRequestType(e.method),e.registrationMethod=cs.method})(j_||(er.SemanticTokensRequest=j_={}));var V_;(function(e){e.method="textDocument/semanticTokens/full/delta",e.messageDirection=un.MessageDirection.clientToServer,e.type=new un.ProtocolRequestType(e.method),e.registrationMethod=cs.method})(V_||(er.SemanticTokensDeltaRequest=V_={}));var W_;(function(e){e.method="textDocument/semanticTokens/range",e.messageDirection=un.MessageDirection.clientToServer,e.type=new un.ProtocolRequestType(e.method),e.registrationMethod=cs.method})(W_||(er.SemanticTokensRangeRequest=W_={}));var z_;(function(e){e.method="workspace/semanticTokens/refresh",e.messageDirection=un.MessageDirection.serverToClient,e.type=new un.ProtocolRequestType0(e.method)})(z_||(er.SemanticTokensRefreshRequest=z_={}))});var J_=j(ol=>{"use strict";Object.defineProperty(ol,"__esModule",{value:!0});ol.ShowDocumentRequest=void 0;var Y_=Me(),K_;(function(e){e.method="window/showDocument",e.messageDirection=Y_.MessageDirection.serverToClient,e.type=new Y_.ProtocolRequestType(e.method)})(K_||(ol.ShowDocumentRequest=K_={}))});var Z_=j(il=>{"use strict";Object.defineProperty(il,"__esModule",{value:!0});il.LinkedEditingRangeRequest=void 0;var Q_=Me(),X_;(function(e){e.method="textDocument/linkedEditingRange",e.messageDirection=Q_.MessageDirection.clientToServer,e.type=new Q_.ProtocolRequestType(e.method)})(X_||(il.LinkedEditingRangeRequest=X_={}))});var ax=j(Nt=>{"use strict";Object.defineProperty(Nt,"__esModule",{value:!0});Nt.WillDeleteFilesRequest=Nt.DidDeleteFilesNotification=Nt.DidRenameFilesNotification=Nt.WillRenameFilesRequest=Nt.DidCreateFilesNotification=Nt.WillCreateFilesRequest=Nt.FileOperationPatternKind=void 0;var hr=Me(),$_;(function(e){e.file="file",e.folder="folder"})($_||(Nt.FileOperationPatternKind=$_={}));var ex;(function(e){e.method="workspace/willCreateFiles",e.messageDirection=hr.MessageDirection.clientToServer,e.type=new hr.ProtocolRequestType(e.method)})(ex||(Nt.WillCreateFilesRequest=ex={}));var tx;(function(e){e.method="workspace/didCreateFiles",e.messageDirection=hr.MessageDirection.clientToServer,e.type=new hr.ProtocolNotificationType(e.method)})(tx||(Nt.DidCreateFilesNotification=tx={}));var rx;(function(e){e.method="workspace/willRenameFiles",e.messageDirection=hr.MessageDirection.clientToServer,e.type=new hr.ProtocolRequestType(e.method)})(rx||(Nt.WillRenameFilesRequest=rx={}));var nx;(function(e){e.method="workspace/didRenameFiles",e.messageDirection=hr.MessageDirection.clientToServer,e.type=new hr.ProtocolNotificationType(e.method)})(nx||(Nt.DidRenameFilesNotification=nx={}));var ox;(function(e){e.method="workspace/didDeleteFiles",e.messageDirection=hr.MessageDirection.clientToServer,e.type=new hr.ProtocolNotificationType(e.method)})(ox||(Nt.DidDeleteFilesNotification=ox={}));var ix;(function(e){e.method="workspace/willDeleteFiles",e.messageDirection=hr.MessageDirection.clientToServer,e.type=new hr.ProtocolRequestType(e.method)})(ix||(Nt.WillDeleteFilesRequest=ix={}))});var dx=j(Cn=>{"use strict";Object.defineProperty(Cn,"__esModule",{value:!0});Cn.MonikerRequest=Cn.MonikerKind=Cn.UniquenessLevel=void 0;var sx=Me(),cx;(function(e){e.document="document",e.project="project",e.group="group",e.scheme="scheme",e.global="global"})(cx||(Cn.UniquenessLevel=cx={}));var lx;(function(e){e.$import="import",e.$export="export",e.local="local"})(lx||(Cn.MonikerKind=lx={}));var ux;(function(e){e.method="textDocument/moniker",e.messageDirection=sx.MessageDirection.clientToServer,e.type=new sx.ProtocolRequestType(e.method)})(ux||(Cn.MonikerRequest=ux={}))});var hx=j(Ln=>{"use strict";Object.defineProperty(Ln,"__esModule",{value:!0});Ln.TypeHierarchySubtypesRequest=Ln.TypeHierarchySupertypesRequest=Ln.TypeHierarchyPrepareRequest=void 0;var ri=Me(),px;(function(e){e.method="textDocument/prepareTypeHierarchy",e.messageDirection=ri.MessageDirection.clientToServer,e.type=new ri.ProtocolRequestType(e.method)})(px||(Ln.TypeHierarchyPrepareRequest=px={}));var fx;(function(e){e.method="typeHierarchy/supertypes",e.messageDirection=ri.MessageDirection.clientToServer,e.type=new ri.ProtocolRequestType(e.method)})(fx||(Ln.TypeHierarchySupertypesRequest=fx={}));var mx;(function(e){e.method="typeHierarchy/subtypes",e.messageDirection=ri.MessageDirection.clientToServer,e.type=new ri.ProtocolRequestType(e.method)})(mx||(Ln.TypeHierarchySubtypesRequest=mx={}))});var Ex=j(ni=>{"use strict";Object.defineProperty(ni,"__esModule",{value:!0});ni.InlineValueRefreshRequest=ni.InlineValueRequest=void 0;var al=Me(),gx;(function(e){e.method="textDocument/inlineValue",e.messageDirection=al.MessageDirection.clientToServer,e.type=new al.ProtocolRequestType(e.method)})(gx||(ni.InlineValueRequest=gx={}));var Tx;(function(e){e.method="workspace/inlineValue/refresh",e.messageDirection=al.MessageDirection.serverToClient,e.type=new al.ProtocolRequestType0(e.method)})(Tx||(ni.InlineValueRefreshRequest=Tx={}))});var xx=j(On=>{"use strict";Object.defineProperty(On,"__esModule",{value:!0});On.InlayHintRefreshRequest=On.InlayHintResolveRequest=On.InlayHintRequest=void 0;var oi=Me(),Sx;(function(e){e.method="textDocument/inlayHint",e.messageDirection=oi.MessageDirection.clientToServer,e.type=new oi.ProtocolRequestType(e.method)})(Sx||(On.InlayHintRequest=Sx={}));var yx;(function(e){e.method="inlayHint/resolve",e.messageDirection=oi.MessageDirection.clientToServer,e.type=new oi.ProtocolRequestType(e.method)})(yx||(On.InlayHintResolveRequest=yx={}));var _x;(function(e){e.method="workspace/inlayHint/refresh",e.messageDirection=oi.MessageDirection.serverToClient,e.type=new oi.ProtocolRequestType0(e.method)})(_x||(On.InlayHintRefreshRequest=_x={}))});var Cx=j(gr=>{"use strict";Object.defineProperty(gr,"__esModule",{value:!0});gr.DiagnosticRefreshRequest=gr.WorkspaceDiagnosticRequest=gr.DocumentDiagnosticRequest=gr.DocumentDiagnosticReportKind=gr.DiagnosticServerCancellationData=void 0;var vx=Eo(),LP=Kc(),ii=Me(),bx;(function(e){function t(n){let o=n;return o&&LP.boolean(o.retriggerRequest)}r(t,"is"),e.is=t})(bx||(gr.DiagnosticServerCancellationData=bx={}));var Rx;(function(e){e.Full="full",e.Unchanged="unchanged"})(Rx||(gr.DocumentDiagnosticReportKind=Rx={}));var kx;(function(e){e.method="textDocument/diagnostic",e.messageDirection=ii.MessageDirection.clientToServer,e.type=new ii.ProtocolRequestType(e.method),e.partialResult=new vx.ProgressType})(kx||(gr.DocumentDiagnosticRequest=kx={}));var Ax;(function(e){e.method="workspace/diagnostic",e.messageDirection=ii.MessageDirection.clientToServer,e.type=new ii.ProtocolRequestType(e.method),e.partialResult=new vx.ProgressType})(Ax||(gr.WorkspaceDiagnosticRequest=Ax={}));var Ux;(function(e){e.method="workspace/diagnostic/refresh",e.messageDirection=ii.MessageDirection.serverToClient,e.type=new ii.ProtocolRequestType0(e.method)})(Ux||(gr.DiagnosticRefreshRequest=Ux={}))});var Ix=j(Ke=>{"use strict";Object.defineProperty(Ke,"__esModule",{value:!0});Ke.DidCloseNotebookDocumentNotification=Ke.DidSaveNotebookDocumentNotification=Ke.DidChangeNotebookDocumentNotification=Ke.NotebookCellArrayChange=Ke.DidOpenNotebookDocumentNotification=Ke.NotebookDocumentSyncRegistrationType=Ke.NotebookDocument=Ke.NotebookCell=Ke.ExecutionSummary=Ke.NotebookCellKind=void 0;var ls=(Yc(),Ig(Hc)),Lr=Kc(),jr=Me(),$E;(function(e){e.Markup=1,e.Code=2;function t(n){return n===1||n===2}r(t,"is"),e.is=t})($E||(Ke.NotebookCellKind=$E={}));var eS;(function(e){function t(i,a){let s={executionOrder:i};return(a===!0||a===!1)&&(s.success=a),s}r(t,"create"),e.create=t;function n(i){let a=i;return Lr.objectLiteral(a)&&ls.uinteger.is(a.executionOrder)&&(a.success===void 0||Lr.boolean(a.success))}r(n,"is"),e.is=n;function o(i,a){return i===a?!0:i==null||a===null||a===void 0?!1:i.executionOrder===a.executionOrder&&i.success===a.success}r(o,"equals"),e.equals=o})(eS||(Ke.ExecutionSummary=eS={}));var sl;(function(e){function t(a,s){return{kind:a,document:s}}r(t,"create"),e.create=t;function n(a){let s=a;return Lr.objectLiteral(s)&&$E.is(s.kind)&&ls.DocumentUri.is(s.document)&&(s.metadata===void 0||Lr.objectLiteral(s.metadata))}r(n,"is"),e.is=n;function o(a,s){let c=new Set;return a.document!==s.document&&c.add("document"),a.kind!==s.kind&&c.add("kind"),a.executionSummary!==s.executionSummary&&c.add("executionSummary"),(a.metadata!==void 0||s.metadata!==void 0)&&!i(a.metadata,s.metadata)&&c.add("metadata"),(a.executionSummary!==void 0||s.executionSummary!==void 0)&&!eS.equals(a.executionSummary,s.executionSummary)&&c.add("executionSummary"),c}r(o,"diff"),e.diff=o;function i(a,s){if(a===s)return!0;if(a==null||s===null||s===void 0||typeof a!=typeof s||typeof a!="object")return!1;let c=Array.isArray(a),l=Array.isArray(s);if(c!==l)return!1;if(c&&l){if(a.length!==s.length)return!1;for(let d=0;d<a.length;d++)if(!i(a[d],s[d]))return!1}if(Lr.objectLiteral(a)&&Lr.objectLiteral(s)){let d=Object.keys(a),f=Object.keys(s);if(d.length!==f.length||(d.sort(),f.sort(),!i(d,f)))return!1;for(let g=0;g<d.length;g++){let _=d[g];if(!i(a[_],s[_]))return!1}}return!0}r(i,"equalsMetadata")})(sl||(Ke.NotebookCell=sl={}));var Lx;(function(e){function t(o,i,a,s){return{uri:o,notebookType:i,version:a,cells:s}}r(t,"create"),e.create=t;function n(o){let i=o;return Lr.objectLiteral(i)&&Lr.string(i.uri)&&ls.integer.is(i.version)&&Lr.typedArray(i.cells,sl.is)}r(n,"is"),e.is=n})(Lx||(Ke.NotebookDocument=Lx={}));var ai;(function(e){e.method="notebookDocument/sync",e.messageDirection=jr.MessageDirection.clientToServer,e.type=new jr.RegistrationType(e.method)})(ai||(Ke.NotebookDocumentSyncRegistrationType=ai={}));var Ox;(function(e){e.method="notebookDocument/didOpen",e.messageDirection=jr.MessageDirection.clientToServer,e.type=new jr.ProtocolNotificationType(e.method),e.registrationMethod=ai.method})(Ox||(Ke.DidOpenNotebookDocumentNotification=Ox={}));var Nx;(function(e){function t(o){let i=o;return Lr.objectLiteral(i)&&ls.uinteger.is(i.start)&&ls.uinteger.is(i.deleteCount)&&(i.cells===void 0||Lr.typedArray(i.cells,sl.is))}r(t,"is"),e.is=t;function n(o,i,a){let s={start:o,deleteCount:i};return a!==void 0&&(s.cells=a),s}r(n,"create"),e.create=n})(Nx||(Ke.NotebookCellArrayChange=Nx={}));var Mx;(function(e){e.method="notebookDocument/didChange",e.messageDirection=jr.MessageDirection.clientToServer,e.type=new jr.ProtocolNotificationType(e.method),e.registrationMethod=ai.method})(Mx||(Ke.DidChangeNotebookDocumentNotification=Mx={}));var wx;(function(e){e.method="notebookDocument/didSave",e.messageDirection=jr.MessageDirection.clientToServer,e.type=new jr.ProtocolNotificationType(e.method),e.registrationMethod=ai.method})(wx||(Ke.DidSaveNotebookDocumentNotification=wx={}));var Fx;(function(e){e.method="notebookDocument/didClose",e.messageDirection=jr.MessageDirection.clientToServer,e.type=new jr.ProtocolNotificationType(e.method),e.registrationMethod=ai.method})(Fx||(Ke.DidCloseNotebookDocumentNotification=Fx={}))});var Bx=j(cl=>{"use strict";Object.defineProperty(cl,"__esModule",{value:!0});cl.InlineCompletionRequest=void 0;var Px=Me(),Dx;(function(e){e.method="textDocument/inlineCompletion",e.messageDirection=Px.MessageDirection.clientToServer,e.type=new Px.ProtocolRequestType(e.method)})(Dx||(cl.InlineCompletionRequest=Dx={}))});var Zb=j(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});m.WorkspaceSymbolRequest=m.CodeActionResolveRequest=m.CodeActionRequest=m.DocumentSymbolRequest=m.DocumentHighlightRequest=m.ReferencesRequest=m.DefinitionRequest=m.SignatureHelpRequest=m.SignatureHelpTriggerKind=m.HoverRequest=m.CompletionResolveRequest=m.CompletionRequest=m.CompletionTriggerKind=m.PublishDiagnosticsNotification=m.WatchKind=m.RelativePattern=m.FileChangeType=m.DidChangeWatchedFilesNotification=m.WillSaveTextDocumentWaitUntilRequest=m.WillSaveTextDocumentNotification=m.TextDocumentSaveReason=m.DidSaveTextDocumentNotification=m.DidCloseTextDocumentNotification=m.DidChangeTextDocumentNotification=m.TextDocumentContentChangeEvent=m.DidOpenTextDocumentNotification=m.TextDocumentSyncKind=m.TelemetryEventNotification=m.LogMessageNotification=m.ShowMessageRequest=m.ShowMessageNotification=m.MessageType=m.DidChangeConfigurationNotification=m.ExitNotification=m.ShutdownRequest=m.InitializedNotification=m.InitializeErrorCodes=m.InitializeRequest=m.WorkDoneProgressOptions=m.TextDocumentRegistrationOptions=m.StaticRegistrationOptions=m.PositionEncodingKind=m.FailureHandlingKind=m.ResourceOperationKind=m.UnregistrationRequest=m.RegistrationRequest=m.DocumentSelector=m.NotebookCellTextDocumentFilter=m.NotebookDocumentFilter=m.TextDocumentFilter=void 0;m.MonikerRequest=m.MonikerKind=m.UniquenessLevel=m.WillDeleteFilesRequest=m.DidDeleteFilesNotification=m.WillRenameFilesRequest=m.DidRenameFilesNotification=m.WillCreateFilesRequest=m.DidCreateFilesNotification=m.FileOperationPatternKind=m.LinkedEditingRangeRequest=m.ShowDocumentRequest=m.SemanticTokensRegistrationType=m.SemanticTokensRefreshRequest=m.SemanticTokensRangeRequest=m.SemanticTokensDeltaRequest=m.SemanticTokensRequest=m.TokenFormat=m.CallHierarchyPrepareRequest=m.CallHierarchyOutgoingCallsRequest=m.CallHierarchyIncomingCallsRequest=m.WorkDoneProgressCancelNotification=m.WorkDoneProgressCreateRequest=m.WorkDoneProgress=m.SelectionRangeRequest=m.DeclarationRequest=m.FoldingRangeRefreshRequest=m.FoldingRangeRequest=m.ColorPresentationRequest=m.DocumentColorRequest=m.ConfigurationRequest=m.DidChangeWorkspaceFoldersNotification=m.WorkspaceFoldersRequest=m.TypeDefinitionRequest=m.ImplementationRequest=m.ApplyWorkspaceEditRequest=m.ExecuteCommandRequest=m.PrepareRenameRequest=m.RenameRequest=m.PrepareSupportDefaultBehavior=m.DocumentOnTypeFormattingRequest=m.DocumentRangesFormattingRequest=m.DocumentRangeFormattingRequest=m.DocumentFormattingRequest=m.DocumentLinkResolveRequest=m.DocumentLinkRequest=m.CodeLensRefreshRequest=m.CodeLensResolveRequest=m.CodeLensRequest=m.WorkspaceSymbolResolveRequest=void 0;m.InlineCompletionRequest=m.DidCloseNotebookDocumentNotification=m.DidSaveNotebookDocumentNotification=m.DidChangeNotebookDocumentNotification=m.NotebookCellArrayChange=m.DidOpenNotebookDocumentNotification=m.NotebookDocumentSyncRegistrationType=m.NotebookDocument=m.NotebookCell=m.ExecutionSummary=m.NotebookCellKind=m.DiagnosticRefreshRequest=m.WorkspaceDiagnosticRequest=m.DocumentDiagnosticRequest=m.DocumentDiagnosticReportKind=m.DiagnosticServerCancellationData=m.InlayHintRefreshRequest=m.InlayHintResolveRequest=m.InlayHintRequest=m.InlineValueRefreshRequest=m.InlineValueRequest=m.TypeHierarchySupertypesRequest=m.TypeHierarchySubtypesRequest=m.TypeHierarchyPrepareRequest=void 0;var F=Me(),qx=(Yc(),Ig(Hc)),_t=Kc(),OP=d_();Object.defineProperty(m,"ImplementationRequest",{enumerable:!0,get:r(function(){return OP.ImplementationRequest},"get")});var NP=m_();Object.defineProperty(m,"TypeDefinitionRequest",{enumerable:!0,get:r(function(){return NP.TypeDefinitionRequest},"get")});var Kb=T_();Object.defineProperty(m,"WorkspaceFoldersRequest",{enumerable:!0,get:r(function(){return Kb.WorkspaceFoldersRequest},"get")});Object.defineProperty(m,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:r(function(){return Kb.DidChangeWorkspaceFoldersNotification},"get")});var MP=y_();Object.defineProperty(m,"ConfigurationRequest",{enumerable:!0,get:r(function(){return MP.ConfigurationRequest},"get")});var Jb=b_();Object.defineProperty(m,"DocumentColorRequest",{enumerable:!0,get:r(function(){return Jb.DocumentColorRequest},"get")});Object.defineProperty(m,"ColorPresentationRequest",{enumerable:!0,get:r(function(){return Jb.ColorPresentationRequest},"get")});var Qb=A_();Object.defineProperty(m,"FoldingRangeRequest",{enumerable:!0,get:r(function(){return Qb.FoldingRangeRequest},"get")});Object.defineProperty(m,"FoldingRangeRefreshRequest",{enumerable:!0,get:r(function(){return Qb.FoldingRangeRefreshRequest},"get")});var wP=C_();Object.defineProperty(m,"DeclarationRequest",{enumerable:!0,get:r(function(){return wP.DeclarationRequest},"get")});var FP=N_();Object.defineProperty(m,"SelectionRangeRequest",{enumerable:!0,get:r(function(){return FP.SelectionRangeRequest},"get")});var iS=I_();Object.defineProperty(m,"WorkDoneProgress",{enumerable:!0,get:r(function(){return iS.WorkDoneProgress},"get")});Object.defineProperty(m,"WorkDoneProgressCreateRequest",{enumerable:!0,get:r(function(){return iS.WorkDoneProgressCreateRequest},"get")});Object.defineProperty(m,"WorkDoneProgressCancelNotification",{enumerable:!0,get:r(function(){return iS.WorkDoneProgressCancelNotification},"get")});var aS=q_();Object.defineProperty(m,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:r(function(){return aS.CallHierarchyIncomingCallsRequest},"get")});Object.defineProperty(m,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:r(function(){return aS.CallHierarchyOutgoingCallsRequest},"get")});Object.defineProperty(m,"CallHierarchyPrepareRequest",{enumerable:!0,get:r(function(){return aS.CallHierarchyPrepareRequest},"get")});var si=H_();Object.defineProperty(m,"TokenFormat",{enumerable:!0,get:r(function(){return si.TokenFormat},"get")});Object.defineProperty(m,"SemanticTokensRequest",{enumerable:!0,get:r(function(){return si.SemanticTokensRequest},"get")});Object.defineProperty(m,"SemanticTokensDeltaRequest",{enumerable:!0,get:r(function(){return si.SemanticTokensDeltaRequest},"get")});Object.defineProperty(m,"SemanticTokensRangeRequest",{enumerable:!0,get:r(function(){return si.SemanticTokensRangeRequest},"get")});Object.defineProperty(m,"SemanticTokensRefreshRequest",{enumerable:!0,get:r(function(){return si.SemanticTokensRefreshRequest},"get")});Object.defineProperty(m,"SemanticTokensRegistrationType",{enumerable:!0,get:r(function(){return si.SemanticTokensRegistrationType},"get")});var IP=J_();Object.defineProperty(m,"ShowDocumentRequest",{enumerable:!0,get:r(function(){return IP.ShowDocumentRequest},"get")});var PP=Z_();Object.defineProperty(m,"LinkedEditingRangeRequest",{enumerable:!0,get:r(function(){return PP.LinkedEditingRangeRequest},"get")});var _o=ax();Object.defineProperty(m,"FileOperationPatternKind",{enumerable:!0,get:r(function(){return _o.FileOperationPatternKind},"get")});Object.defineProperty(m,"DidCreateFilesNotification",{enumerable:!0,get:r(function(){return _o.DidCreateFilesNotification},"get")});Object.defineProperty(m,"WillCreateFilesRequest",{enumerable:!0,get:r(function(){return _o.WillCreateFilesRequest},"get")});Object.defineProperty(m,"DidRenameFilesNotification",{enumerable:!0,get:r(function(){return _o.DidRenameFilesNotification},"get")});Object.defineProperty(m,"WillRenameFilesRequest",{enumerable:!0,get:r(function(){return _o.WillRenameFilesRequest},"get")});Object.defineProperty(m,"DidDeleteFilesNotification",{enumerable:!0,get:r(function(){return _o.DidDeleteFilesNotification},"get")});Object.defineProperty(m,"WillDeleteFilesRequest",{enumerable:!0,get:r(function(){return _o.WillDeleteFilesRequest},"get")});var sS=dx();Object.defineProperty(m,"UniquenessLevel",{enumerable:!0,get:r(function(){return sS.UniquenessLevel},"get")});Object.defineProperty(m,"MonikerKind",{enumerable:!0,get:r(function(){return sS.MonikerKind},"get")});Object.defineProperty(m,"MonikerRequest",{enumerable:!0,get:r(function(){return sS.MonikerRequest},"get")});var cS=hx();Object.defineProperty(m,"TypeHierarchyPrepareRequest",{enumerable:!0,get:r(function(){return cS.TypeHierarchyPrepareRequest},"get")});Object.defineProperty(m,"TypeHierarchySubtypesRequest",{enumerable:!0,get:r(function(){return cS.TypeHierarchySubtypesRequest},"get")});Object.defineProperty(m,"TypeHierarchySupertypesRequest",{enumerable:!0,get:r(function(){return cS.TypeHierarchySupertypesRequest},"get")});var Xb=Ex();Object.defineProperty(m,"InlineValueRequest",{enumerable:!0,get:r(function(){return Xb.InlineValueRequest},"get")});Object.defineProperty(m,"InlineValueRefreshRequest",{enumerable:!0,get:r(function(){return Xb.InlineValueRefreshRequest},"get")});var lS=xx();Object.defineProperty(m,"InlayHintRequest",{enumerable:!0,get:r(function(){return lS.InlayHintRequest},"get")});Object.defineProperty(m,"InlayHintResolveRequest",{enumerable:!0,get:r(function(){return lS.InlayHintResolveRequest},"get")});Object.defineProperty(m,"InlayHintRefreshRequest",{enumerable:!0,get:r(function(){return lS.InlayHintRefreshRequest},"get")});var us=Cx();Object.defineProperty(m,"DiagnosticServerCancellationData",{enumerable:!0,get:r(function(){return us.DiagnosticServerCancellationData},"get")});Object.defineProperty(m,"DocumentDiagnosticReportKind",{enumerable:!0,get:r(function(){return us.DocumentDiagnosticReportKind},"get")});Object.defineProperty(m,"DocumentDiagnosticRequest",{enumerable:!0,get:r(function(){return us.DocumentDiagnosticRequest},"get")});Object.defineProperty(m,"WorkspaceDiagnosticRequest",{enumerable:!0,get:r(function(){return us.WorkspaceDiagnosticRequest},"get")});Object.defineProperty(m,"DiagnosticRefreshRequest",{enumerable:!0,get:r(function(){return us.DiagnosticRefreshRequest},"get")});var Vr=Ix();Object.defineProperty(m,"NotebookCellKind",{enumerable:!0,get:r(function(){return Vr.NotebookCellKind},"get")});Object.defineProperty(m,"ExecutionSummary",{enumerable:!0,get:r(function(){return Vr.ExecutionSummary},"get")});Object.defineProperty(m,"NotebookCell",{enumerable:!0,get:r(function(){return Vr.NotebookCell},"get")});Object.defineProperty(m,"NotebookDocument",{enumerable:!0,get:r(function(){return Vr.NotebookDocument},"get")});Object.defineProperty(m,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:r(function(){return Vr.NotebookDocumentSyncRegistrationType},"get")});Object.defineProperty(m,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:r(function(){return Vr.DidOpenNotebookDocumentNotification},"get")});Object.defineProperty(m,"NotebookCellArrayChange",{enumerable:!0,get:r(function(){return Vr.NotebookCellArrayChange},"get")});Object.defineProperty(m,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:r(function(){return Vr.DidChangeNotebookDocumentNotification},"get")});Object.defineProperty(m,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:r(function(){return Vr.DidSaveNotebookDocumentNotification},"get")});Object.defineProperty(m,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:r(function(){return Vr.DidCloseNotebookDocumentNotification},"get")});var DP=Bx();Object.defineProperty(m,"InlineCompletionRequest",{enumerable:!0,get:r(function(){return DP.InlineCompletionRequest},"get")});var tS;(function(e){function t(n){let o=n;return _t.string(o)||_t.string(o.language)||_t.string(o.scheme)||_t.string(o.pattern)}r(t,"is"),e.is=t})(tS||(m.TextDocumentFilter=tS={}));var rS;(function(e){function t(n){let o=n;return _t.objectLiteral(o)&&(_t.string(o.notebookType)||_t.string(o.scheme)||_t.string(o.pattern))}r(t,"is"),e.is=t})(rS||(m.NotebookDocumentFilter=rS={}));var nS;(function(e){function t(n){let o=n;return _t.objectLiteral(o)&&(_t.string(o.notebook)||rS.is(o.notebook))&&(o.language===void 0||_t.string(o.language))}r(t,"is"),e.is=t})(nS||(m.NotebookCellTextDocumentFilter=nS={}));var oS;(function(e){function t(n){if(!Array.isArray(n))return!1;for(let o of n)if(!_t.string(o)&&!tS.is(o)&&!nS.is(o))return!1;return!0}r(t,"is"),e.is=t})(oS||(m.DocumentSelector=oS={}));var Gx;(function(e){e.method="client/registerCapability",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolRequestType(e.method)})(Gx||(m.RegistrationRequest=Gx={}));var jx;(function(e){e.method="client/unregisterCapability",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolRequestType(e.method)})(jx||(m.UnregistrationRequest=jx={}));var Vx;(function(e){e.Create="create",e.Rename="rename",e.Delete="delete"})(Vx||(m.ResourceOperationKind=Vx={}));var Wx;(function(e){e.Abort="abort",e.Transactional="transactional",e.TextOnlyTransactional="textOnlyTransactional",e.Undo="undo"})(Wx||(m.FailureHandlingKind=Wx={}));var zx;(function(e){e.UTF8="utf-8",e.UTF16="utf-16",e.UTF32="utf-32"})(zx||(m.PositionEncodingKind=zx={}));var Hx;(function(e){function t(n){let o=n;return o&&_t.string(o.id)&&o.id.length>0}r(t,"hasId"),e.hasId=t})(Hx||(m.StaticRegistrationOptions=Hx={}));var Yx;(function(e){function t(n){let o=n;return o&&(o.documentSelector===null||oS.is(o.documentSelector))}r(t,"is"),e.is=t})(Yx||(m.TextDocumentRegistrationOptions=Yx={}));var Kx;(function(e){function t(o){let i=o;return _t.objectLiteral(i)&&(i.workDoneProgress===void 0||_t.boolean(i.workDoneProgress))}r(t,"is"),e.is=t;function n(o){let i=o;return i&&_t.boolean(i.workDoneProgress)}r(n,"hasWorkDoneProgress"),e.hasWorkDoneProgress=n})(Kx||(m.WorkDoneProgressOptions=Kx={}));var Jx;(function(e){e.method="initialize",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Jx||(m.InitializeRequest=Jx={}));var Qx;(function(e){e.unknownProtocolVersion=1})(Qx||(m.InitializeErrorCodes=Qx={}));var Xx;(function(e){e.method="initialized",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(Xx||(m.InitializedNotification=Xx={}));var Zx;(function(e){e.method="shutdown",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType0(e.method)})(Zx||(m.ShutdownRequest=Zx={}));var $x;(function(e){e.method="exit",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType0(e.method)})($x||(m.ExitNotification=$x={}));var eb;(function(e){e.method="workspace/didChangeConfiguration",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(eb||(m.DidChangeConfigurationNotification=eb={}));var tb;(function(e){e.Error=1,e.Warning=2,e.Info=3,e.Log=4,e.Debug=5})(tb||(m.MessageType=tb={}));var rb;(function(e){e.method="window/showMessage",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolNotificationType(e.method)})(rb||(m.ShowMessageNotification=rb={}));var nb;(function(e){e.method="window/showMessageRequest",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolRequestType(e.method)})(nb||(m.ShowMessageRequest=nb={}));var ob;(function(e){e.method="window/logMessage",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolNotificationType(e.method)})(ob||(m.LogMessageNotification=ob={}));var ib;(function(e){e.method="telemetry/event",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolNotificationType(e.method)})(ib||(m.TelemetryEventNotification=ib={}));var ab;(function(e){e.None=0,e.Full=1,e.Incremental=2})(ab||(m.TextDocumentSyncKind=ab={}));var sb;(function(e){e.method="textDocument/didOpen",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(sb||(m.DidOpenTextDocumentNotification=sb={}));var cb;(function(e){function t(o){let i=o;return i!=null&&typeof i.text=="string"&&i.range!==void 0&&(i.rangeLength===void 0||typeof i.rangeLength=="number")}r(t,"isIncremental"),e.isIncremental=t;function n(o){let i=o;return i!=null&&typeof i.text=="string"&&i.range===void 0&&i.rangeLength===void 0}r(n,"isFull"),e.isFull=n})(cb||(m.TextDocumentContentChangeEvent=cb={}));var lb;(function(e){e.method="textDocument/didChange",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(lb||(m.DidChangeTextDocumentNotification=lb={}));var ub;(function(e){e.method="textDocument/didClose",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(ub||(m.DidCloseTextDocumentNotification=ub={}));var db;(function(e){e.method="textDocument/didSave",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(db||(m.DidSaveTextDocumentNotification=db={}));var pb;(function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3})(pb||(m.TextDocumentSaveReason=pb={}));var fb;(function(e){e.method="textDocument/willSave",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(fb||(m.WillSaveTextDocumentNotification=fb={}));var mb;(function(e){e.method="textDocument/willSaveWaitUntil",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(mb||(m.WillSaveTextDocumentWaitUntilRequest=mb={}));var hb;(function(e){e.method="workspace/didChangeWatchedFiles",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolNotificationType(e.method)})(hb||(m.DidChangeWatchedFilesNotification=hb={}));var gb;(function(e){e.Created=1,e.Changed=2,e.Deleted=3})(gb||(m.FileChangeType=gb={}));var Tb;(function(e){function t(n){let o=n;return _t.objectLiteral(o)&&(qx.URI.is(o.baseUri)||qx.WorkspaceFolder.is(o.baseUri))&&_t.string(o.pattern)}r(t,"is"),e.is=t})(Tb||(m.RelativePattern=Tb={}));var Eb;(function(e){e.Create=1,e.Change=2,e.Delete=4})(Eb||(m.WatchKind=Eb={}));var Sb;(function(e){e.method="textDocument/publishDiagnostics",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolNotificationType(e.method)})(Sb||(m.PublishDiagnosticsNotification=Sb={}));var yb;(function(e){e.Invoked=1,e.TriggerCharacter=2,e.TriggerForIncompleteCompletions=3})(yb||(m.CompletionTriggerKind=yb={}));var _b;(function(e){e.method="textDocument/completion",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(_b||(m.CompletionRequest=_b={}));var xb;(function(e){e.method="completionItem/resolve",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(xb||(m.CompletionResolveRequest=xb={}));var bb;(function(e){e.method="textDocument/hover",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(bb||(m.HoverRequest=bb={}));var Rb;(function(e){e.Invoked=1,e.TriggerCharacter=2,e.ContentChange=3})(Rb||(m.SignatureHelpTriggerKind=Rb={}));var kb;(function(e){e.method="textDocument/signatureHelp",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(kb||(m.SignatureHelpRequest=kb={}));var Ab;(function(e){e.method="textDocument/definition",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Ab||(m.DefinitionRequest=Ab={}));var Ub;(function(e){e.method="textDocument/references",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Ub||(m.ReferencesRequest=Ub={}));var vb;(function(e){e.method="textDocument/documentHighlight",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(vb||(m.DocumentHighlightRequest=vb={}));var Cb;(function(e){e.method="textDocument/documentSymbol",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Cb||(m.DocumentSymbolRequest=Cb={}));var Lb;(function(e){e.method="textDocument/codeAction",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Lb||(m.CodeActionRequest=Lb={}));var Ob;(function(e){e.method="codeAction/resolve",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Ob||(m.CodeActionResolveRequest=Ob={}));var Nb;(function(e){e.method="workspace/symbol",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Nb||(m.WorkspaceSymbolRequest=Nb={}));var Mb;(function(e){e.method="workspaceSymbol/resolve",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Mb||(m.WorkspaceSymbolResolveRequest=Mb={}));var wb;(function(e){e.method="textDocument/codeLens",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(wb||(m.CodeLensRequest=wb={}));var Fb;(function(e){e.method="codeLens/resolve",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Fb||(m.CodeLensResolveRequest=Fb={}));var Ib;(function(e){e.method="workspace/codeLens/refresh",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolRequestType0(e.method)})(Ib||(m.CodeLensRefreshRequest=Ib={}));var Pb;(function(e){e.method="textDocument/documentLink",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Pb||(m.DocumentLinkRequest=Pb={}));var Db;(function(e){e.method="documentLink/resolve",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Db||(m.DocumentLinkResolveRequest=Db={}));var Bb;(function(e){e.method="textDocument/formatting",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Bb||(m.DocumentFormattingRequest=Bb={}));var qb;(function(e){e.method="textDocument/rangeFormatting",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(qb||(m.DocumentRangeFormattingRequest=qb={}));var Gb;(function(e){e.method="textDocument/rangesFormatting",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Gb||(m.DocumentRangesFormattingRequest=Gb={}));var jb;(function(e){e.method="textDocument/onTypeFormatting",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(jb||(m.DocumentOnTypeFormattingRequest=jb={}));var Vb;(function(e){e.Identifier=1})(Vb||(m.PrepareSupportDefaultBehavior=Vb={}));var Wb;(function(e){e.method="textDocument/rename",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Wb||(m.RenameRequest=Wb={}));var zb;(function(e){e.method="textDocument/prepareRename",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(zb||(m.PrepareRenameRequest=zb={}));var Hb;(function(e){e.method="workspace/executeCommand",e.messageDirection=F.MessageDirection.clientToServer,e.type=new F.ProtocolRequestType(e.method)})(Hb||(m.ExecuteCommandRequest=Hb={}));var Yb;(function(e){e.method="workspace/applyEdit",e.messageDirection=F.MessageDirection.serverToClient,e.type=new F.ProtocolRequestType("workspace/applyEdit")})(Yb||(m.ApplyWorkspaceEditRequest=Yb={}))});var eR=j(ll=>{"use strict";Object.defineProperty(ll,"__esModule",{value:!0});ll.createProtocolConnection=void 0;var $b=Eo();function BP(e,t,n,o){return $b.ConnectionStrategy.is(o)&&(o={connectionStrategy:o}),(0,$b.createMessageConnection)(e,t,n,o)}r(BP,"createProtocolConnection");ll.createProtocolConnection=BP});var rR=j(tr=>{"use strict";var qP=tr&&tr.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),ul=tr&&tr.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&qP(t,e,n)};Object.defineProperty(tr,"__esModule",{value:!0});tr.LSPErrorCodes=tr.createProtocolConnection=void 0;ul(Eo(),tr);ul((Yc(),Ig(Hc)),tr);ul(Me(),tr);ul(Zb(),tr);var GP=eR();Object.defineProperty(tr,"createProtocolConnection",{enumerable:!0,get:r(function(){return GP.createProtocolConnection},"get")});var tR;(function(e){e.lspReservedErrorRangeStart=-32899,e.RequestFailed=-32803,e.ServerCancelled=-32802,e.ContentModified=-32801,e.RequestCancelled=-32800,e.lspReservedErrorRangeEnd=-32800})(tR||(tr.LSPErrorCodes=tR={}))});var et=j(Wr=>{"use strict";var jP=Wr&&Wr.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),nR=Wr&&Wr.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&jP(t,e,n)};Object.defineProperty(Wr,"__esModule",{value:!0});Wr.createProtocolConnection=void 0;var VP=zT();nR(zT(),Wr);nR(rR(),Wr);function WP(e,t,n,o){return(0,VP.createMessageConnection)(e,t,n,o)}r(WP,"createProtocolConnection");Wr.createProtocolConnection=WP});var dS=j(Nn=>{"use strict";Object.defineProperty(Nn,"__esModule",{value:!0});Nn.SemanticTokensBuilder=Nn.SemanticTokensDiff=Nn.SemanticTokensFeature=void 0;var dl=et(),zP=r(e=>class extends e{get semanticTokens(){return{refresh:r(()=>this.connection.sendRequest(dl.SemanticTokensRefreshRequest.type),"refresh"),on:r(t=>{let n=dl.SemanticTokensRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"on"),onDelta:r(t=>{let n=dl.SemanticTokensDeltaRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onDelta"),onRange:r(t=>{let n=dl.SemanticTokensRangeRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onRange")}}},"SemanticTokensFeature");Nn.SemanticTokensFeature=zP;var pl=class{static{r(this,"SemanticTokensDiff")}constructor(t,n){this.originalSequence=t,this.modifiedSequence=n}computeDiff(){let t=this.originalSequence.length,n=this.modifiedSequence.length,o=0;for(;o<n&&o<t&&this.originalSequence[o]===this.modifiedSequence[o];)o++;if(o<n&&o<t){let i=t-1,a=n-1;for(;i>=o&&a>=o&&this.originalSequence[i]===this.modifiedSequence[a];)i--,a--;(i<o||a<o)&&(i++,a++);let s=i-o+1,c=this.modifiedSequence.slice(o,a+1);return c.length===1&&c[0]===this.originalSequence[i]?[{start:o,deleteCount:s-1}]:[{start:o,deleteCount:s,data:c}]}else return o<n?[{start:o,deleteCount:0,data:this.modifiedSequence.slice(o)}]:o<t?[{start:o,deleteCount:t-o}]:[]}};Nn.SemanticTokensDiff=pl;var uS=class{static{r(this,"SemanticTokensBuilder")}constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(t,n,o,i,a){let s=t,c=n;this._dataLen>0&&(s-=this._prevLine,s===0&&(c-=this._prevChar)),this._data[this._dataLen++]=s,this._data[this._dataLen++]=c,this._data[this._dataLen++]=o,this._data[this._dataLen++]=i,this._data[this._dataLen++]=a,this._prevLine=t,this._prevChar=n}get id(){return this._id.toString()}previousResult(t){this.id===t&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new pl(this._prevData,this._data).computeDiff()}:this.build()}};Nn.SemanticTokensBuilder=uS});var oR=j(fl=>{"use strict";Object.defineProperty(fl,"__esModule",{value:!0});fl.InlineCompletionFeature=void 0;var HP=et(),YP=r(e=>class extends e{get inlineCompletion(){return{on:r(t=>this.connection.onRequest(HP.InlineCompletionRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n))),"on")}}},"InlineCompletionFeature");fl.InlineCompletionFeature=YP});var fS=j(ml=>{"use strict";Object.defineProperty(ml,"__esModule",{value:!0});ml.TextDocuments=void 0;var xo=et(),pS=class{static{r(this,"TextDocuments")}constructor(t){this._configuration=t,this._syncedDocuments=new Map,this._onDidChangeContent=new xo.Emitter,this._onDidOpen=new xo.Emitter,this._onDidClose=new xo.Emitter,this._onDidSave=new xo.Emitter,this._onWillSave=new xo.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(t){this._willSaveWaitUntil=t}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(t){return this._syncedDocuments.get(t)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(t){t.__textDocumentSync=xo.TextDocumentSyncKind.Incremental;let n=[];return n.push(t.onDidOpenTextDocument(o=>{let i=o.textDocument,a=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,a);let s=Object.freeze({document:a});this._onDidOpen.fire(s),this._onDidChangeContent.fire(s)})),n.push(t.onDidChangeTextDocument(o=>{let i=o.textDocument,a=o.contentChanges;if(a.length===0)return;let{version:s}=i;if(s==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let c=this._syncedDocuments.get(i.uri);c!==void 0&&(c=this._configuration.update(c,a,s),this._syncedDocuments.set(i.uri,c),this._onDidChangeContent.fire(Object.freeze({document:c})))})),n.push(t.onDidCloseTextDocument(o=>{let i=this._syncedDocuments.get(o.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(o.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),n.push(t.onWillSaveTextDocument(o=>{let i=this._syncedDocuments.get(o.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:o.reason}))})),n.push(t.onWillSaveTextDocumentWaitUntil((o,i)=>{let a=this._syncedDocuments.get(o.textDocument.uri);return a!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:a,reason:o.reason}),i):[]})),n.push(t.onDidSaveTextDocument(o=>{let i=this._syncedDocuments.get(o.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),xo.Disposable.create(()=>{n.forEach(o=>o.dispose())})}};ml.TextDocuments=pS});var hS=j(ci=>{"use strict";Object.defineProperty(ci,"__esModule",{value:!0});ci.NotebookDocuments=ci.NotebookSyncFeature=void 0;var Tr=et(),iR=fS(),KP=r(e=>class extends e{get synchronization(){return{onDidOpenNotebookDocument:r(t=>this.connection.onNotification(Tr.DidOpenNotebookDocumentNotification.type,n=>{t(n)}),"onDidOpenNotebookDocument"),onDidChangeNotebookDocument:r(t=>this.connection.onNotification(Tr.DidChangeNotebookDocumentNotification.type,n=>{t(n)}),"onDidChangeNotebookDocument"),onDidSaveNotebookDocument:r(t=>this.connection.onNotification(Tr.DidSaveNotebookDocumentNotification.type,n=>{t(n)}),"onDidSaveNotebookDocument"),onDidCloseNotebookDocument:r(t=>this.connection.onNotification(Tr.DidCloseNotebookDocumentNotification.type,n=>{t(n)}),"onDidCloseNotebookDocument")}}},"NotebookSyncFeature");ci.NotebookSyncFeature=KP;var hl=class e{static{r(this,"CellTextDocumentConnection")}onDidOpenTextDocument(t){return this.openHandler=t,Tr.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(t){this.openHandler&&this.openHandler(t)}onDidChangeTextDocument(t){return this.changeHandler=t,Tr.Disposable.create(()=>{this.changeHandler=t})}changeTextDocument(t){this.changeHandler&&this.changeHandler(t)}onDidCloseTextDocument(t){return this.closeHandler=t,Tr.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(t){this.closeHandler&&this.closeHandler(t)}onWillSaveTextDocument(){return e.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return e.NULL_DISPOSE}onDidSaveTextDocument(){return e.NULL_DISPOSE}};hl.NULL_DISPOSE=Object.freeze({dispose:r(()=>{},"dispose")});var mS=class{static{r(this,"NotebookDocuments")}constructor(t){t instanceof iR.TextDocuments?this._cellTextDocuments=t:this._cellTextDocuments=new iR.TextDocuments(t),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new Tr.Emitter,this._onDidChange=new Tr.Emitter,this._onDidSave=new Tr.Emitter,this._onDidClose=new Tr.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(t){return this._cellTextDocuments.get(t.document)}getNotebookDocument(t){return this.notebookDocuments.get(t)}getNotebookCell(t){let n=this.notebookCellMap.get(t);return n&&n[0]}findNotebookDocumentForCell(t){let n=typeof t=="string"?t:t.document,o=this.notebookCellMap.get(n);return o&&o[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(t){let n=new hl,o=[];return o.push(this.cellTextDocuments.listen(n)),o.push(t.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(let a of i.cellTextDocuments)n.openTextDocument({textDocument:a});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),o.push(t.notebooks.synchronization.onDidChangeNotebookDocument(i=>{let a=this.notebookDocuments.get(i.notebookDocument.uri);if(a===void 0)return;a.version=i.notebookDocument.version;let s=a.metadata,c=!1,l=i.change;l.metadata!==void 0&&(c=!0,a.metadata=l.metadata);let d=[],f=[],g=[],_=[];if(l.cells!==void 0){let N=l.cells;if(N.structure!==void 0){let S=N.structure.array;if(a.cells.splice(S.start,S.deleteCount,...S.cells!==void 0?S.cells:[]),N.structure.didOpen!==void 0)for(let h of N.structure.didOpen)n.openTextDocument({textDocument:h}),d.push(h.uri);if(N.structure.didClose)for(let h of N.structure.didClose)n.closeTextDocument({textDocument:h}),f.push(h.uri)}if(N.data!==void 0){let S=new Map(N.data.map(h=>[h.document,h]));for(let h=0;h<=a.cells.length;h++){let v=S.get(a.cells[h].document);if(v!==void 0){let P=a.cells.splice(h,1,v);if(g.push({old:P[0],new:v}),S.delete(v.document),S.size===0)break}}}if(N.textContent!==void 0)for(let S of N.textContent)n.changeTextDocument({textDocument:S.document,contentChanges:S.changes}),_.push(S.document.uri)}this.updateCellMap(a);let y={notebookDocument:a};c&&(y.metadata={old:s,new:a.metadata});let w=[];for(let N of d)w.push(this.getNotebookCell(N));let O=[];for(let N of f)O.push(this.getNotebookCell(N));let B=[];for(let N of _)B.push(this.getNotebookCell(N));(w.length>0||O.length>0||g.length>0||B.length>0)&&(y.cells={added:w,removed:O,changed:{data:g,textContent:B}}),(y.metadata!==void 0||y.cells!==void 0)&&this._onDidChange.fire(y)})),o.push(t.notebooks.synchronization.onDidSaveNotebookDocument(i=>{let a=this.notebookDocuments.get(i.notebookDocument.uri);a!==void 0&&this._onDidSave.fire(a)})),o.push(t.notebooks.synchronization.onDidCloseNotebookDocument(i=>{let a=this.notebookDocuments.get(i.notebookDocument.uri);if(a!==void 0){this._onDidClose.fire(a);for(let s of i.cellTextDocuments)n.closeTextDocument({textDocument:s});this.notebookDocuments.delete(i.notebookDocument.uri);for(let s of a.cells)this.notebookCellMap.delete(s.document)}})),Tr.Disposable.create(()=>{o.forEach(i=>i.dispose())})}updateCellMap(t){for(let n of t.cells)this.notebookCellMap.set(n.document,[n,t])}};ci.NotebookDocuments=mS});var gS=j(ct=>{"use strict";Object.defineProperty(ct,"__esModule",{value:!0});ct.thenable=ct.typedArray=ct.stringArray=ct.array=ct.func=ct.error=ct.number=ct.string=ct.boolean=void 0;function JP(e){return e===!0||e===!1}r(JP,"boolean");ct.boolean=JP;function aR(e){return typeof e=="string"||e instanceof String}r(aR,"string");ct.string=aR;function QP(e){return typeof e=="number"||e instanceof Number}r(QP,"number");ct.number=QP;function XP(e){return e instanceof Error}r(XP,"error");ct.error=XP;function sR(e){return typeof e=="function"}r(sR,"func");ct.func=sR;function cR(e){return Array.isArray(e)}r(cR,"array");ct.array=cR;function ZP(e){return cR(e)&&e.every(t=>aR(t))}r(ZP,"stringArray");ct.stringArray=ZP;function $P(e,t){return Array.isArray(e)&&e.every(t)}r($P,"typedArray");ct.typedArray=$P;function eD(e){return e&&sR(e.then)}r(eD,"thenable");ct.thenable=eD});var TS=j(Er=>{"use strict";Object.defineProperty(Er,"__esModule",{value:!0});Er.generateUuid=Er.parse=Er.isUUID=Er.v4=Er.empty=void 0;var ds=class{static{r(this,"ValueUUID")}constructor(t){this._value=t}asHex(){return this._value}equals(t){return this.asHex()===t.asHex()}},ps=class e extends ds{static{r(this,"V4UUID")}static _oneOf(t){return t[Math.floor(t.length*Math.random())]}static _randomHex(){return e._oneOf(e._chars)}constructor(){super([e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),"-",e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),"-","4",e._randomHex(),e._randomHex(),e._randomHex(),"-",e._oneOf(e._timeHighBits),e._randomHex(),e._randomHex(),e._randomHex(),"-",e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex(),e._randomHex()].join(""))}};ps._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];ps._timeHighBits=["8","9","a","b"];Er.empty=new ds("00000000-0000-0000-0000-000000000000");function lR(){return new ps}r(lR,"v4");Er.v4=lR;var tD=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function uR(e){return tD.test(e)}r(uR,"isUUID");Er.isUUID=uR;function rD(e){if(!uR(e))throw new Error("invalid uuid");return new ds(e)}r(rD,"parse");Er.parse=rD;function nD(){return lR().asHex()}r(nD,"generateUuid");Er.generateUuid=nD});var dR=j(wn=>{"use strict";Object.defineProperty(wn,"__esModule",{value:!0});wn.attachPartialResult=wn.ProgressFeature=wn.attachWorkDone=void 0;var Mn=et(),oD=TS(),bo=class e{static{r(this,"WorkDoneProgressReporterImpl")}constructor(t,n){this._connection=t,this._token=n,e.Instances.set(this._token,this)}begin(t,n,o,i){let a={kind:"begin",title:t,percentage:n,message:o,cancellable:i};this._connection.sendProgress(Mn.WorkDoneProgress.type,this._token,a)}report(t,n){let o={kind:"report"};typeof t=="number"?(o.percentage=t,n!==void 0&&(o.message=n)):o.message=t,this._connection.sendProgress(Mn.WorkDoneProgress.type,this._token,o)}done(){e.Instances.delete(this._token),this._connection.sendProgress(Mn.WorkDoneProgress.type,this._token,{kind:"end"})}};bo.Instances=new Map;var gl=class extends bo{static{r(this,"WorkDoneProgressServerReporterImpl")}constructor(t,n){super(t,n),this._source=new Mn.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},fs=class{static{r(this,"NullProgressReporter")}constructor(){}begin(){}report(){}done(){}},Tl=class extends fs{static{r(this,"NullProgressServerReporter")}constructor(){super(),this._source=new Mn.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function iD(e,t){if(t===void 0||t.workDoneToken===void 0)return new fs;let n=t.workDoneToken;return delete t.workDoneToken,new bo(e,n)}r(iD,"attachWorkDone");wn.attachWorkDone=iD;var aD=r(e=>class extends e{constructor(){super(),this._progressSupported=!1}initialize(t){super.initialize(t),t?.window?.workDoneProgress===!0&&(this._progressSupported=!0,this.connection.onNotification(Mn.WorkDoneProgressCancelNotification.type,n=>{let o=bo.Instances.get(n.token);(o instanceof gl||o instanceof Tl)&&o.cancel()}))}attachWorkDoneProgress(t){return t===void 0?new fs:new bo(this.connection,t)}createWorkDoneProgress(){if(this._progressSupported){let t=(0,oD.generateUuid)();return this.connection.sendRequest(Mn.WorkDoneProgressCreateRequest.type,{token:t}).then(()=>new gl(this.connection,t))}else return Promise.resolve(new Tl)}},"ProgressFeature");wn.ProgressFeature=aD;var ES;(function(e){e.type=new Mn.ProgressType})(ES||(ES={}));var SS=class{static{r(this,"ResultProgressReporterImpl")}constructor(t,n){this._connection=t,this._token=n}report(t){this._connection.sendProgress(ES.type,this._token,t)}};function sD(e,t){if(t===void 0||t.partialResultToken===void 0)return;let n=t.partialResultToken;return delete t.partialResultToken,new SS(e,n)}r(sD,"attachPartialResult");wn.attachPartialResult=sD});var pR=j(El=>{"use strict";Object.defineProperty(El,"__esModule",{value:!0});El.ConfigurationFeature=void 0;var cD=et(),lD=gS(),uD=r(e=>class extends e{getConfiguration(t){return t?lD.string(t)?this._getConfiguration({section:t}):this._getConfiguration(t):this._getConfiguration({})}_getConfiguration(t){let n={items:Array.isArray(t)?t:[t]};return this.connection.sendRequest(cD.ConfigurationRequest.type,n).then(o=>Array.isArray(o)?Array.isArray(t)?o:o[0]:Array.isArray(t)?[]:null)}},"ConfigurationFeature");El.ConfigurationFeature=uD});var fR=j(yl=>{"use strict";Object.defineProperty(yl,"__esModule",{value:!0});yl.WorkspaceFoldersFeature=void 0;var Sl=et(),dD=r(e=>class extends e{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(t){super.initialize(t);let n=t.workspace;n&&n.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new Sl.Emitter,this.connection.onNotification(Sl.DidChangeWorkspaceFoldersNotification.type,o=>{this._onDidChangeWorkspaceFolders.fire(o.event)}))}fillServerCapabilities(t){super.fillServerCapabilities(t);let n=t.workspace?.workspaceFolders?.changeNotifications;this._notificationIsAutoRegistered=n===!0||typeof n=="string"}getWorkspaceFolders(){return this.connection.sendRequest(Sl.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(Sl.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}},"WorkspaceFoldersFeature");yl.WorkspaceFoldersFeature=dD});var mR=j(_l=>{"use strict";Object.defineProperty(_l,"__esModule",{value:!0});_l.CallHierarchyFeature=void 0;var yS=et(),pD=r(e=>class extends e{get callHierarchy(){return{onPrepare:r(t=>this.connection.onRequest(yS.CallHierarchyPrepareRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),void 0)),"onPrepare"),onIncomingCalls:r(t=>{let n=yS.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onIncomingCalls"),onOutgoingCalls:r(t=>{let n=yS.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onOutgoingCalls")}}},"CallHierarchyFeature");_l.CallHierarchyFeature=pD});var hR=j(xl=>{"use strict";Object.defineProperty(xl,"__esModule",{value:!0});xl.ShowDocumentFeature=void 0;var fD=et(),mD=r(e=>class extends e{showDocument(t){return this.connection.sendRequest(fD.ShowDocumentRequest.type,t)}},"ShowDocumentFeature");xl.ShowDocumentFeature=mD});var gR=j(bl=>{"use strict";Object.defineProperty(bl,"__esModule",{value:!0});bl.FileOperationsFeature=void 0;var li=et(),hD=r(e=>class extends e{onDidCreateFiles(t){return this.connection.onNotification(li.DidCreateFilesNotification.type,n=>{t(n)})}onDidRenameFiles(t){return this.connection.onNotification(li.DidRenameFilesNotification.type,n=>{t(n)})}onDidDeleteFiles(t){return this.connection.onNotification(li.DidDeleteFilesNotification.type,n=>{t(n)})}onWillCreateFiles(t){return this.connection.onRequest(li.WillCreateFilesRequest.type,(n,o)=>t(n,o))}onWillRenameFiles(t){return this.connection.onRequest(li.WillRenameFilesRequest.type,(n,o)=>t(n,o))}onWillDeleteFiles(t){return this.connection.onRequest(li.WillDeleteFilesRequest.type,(n,o)=>t(n,o))}},"FileOperationsFeature");bl.FileOperationsFeature=hD});var TR=j(Rl=>{"use strict";Object.defineProperty(Rl,"__esModule",{value:!0});Rl.LinkedEditingRangeFeature=void 0;var gD=et(),TD=r(e=>class extends e{onLinkedEditingRange(t){return this.connection.onRequest(gD.LinkedEditingRangeRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),void 0))}},"LinkedEditingRangeFeature");Rl.LinkedEditingRangeFeature=TD});var ER=j(kl=>{"use strict";Object.defineProperty(kl,"__esModule",{value:!0});kl.TypeHierarchyFeature=void 0;var _S=et(),ED=r(e=>class extends e{get typeHierarchy(){return{onPrepare:r(t=>this.connection.onRequest(_S.TypeHierarchyPrepareRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),void 0)),"onPrepare"),onSupertypes:r(t=>{let n=_S.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onSupertypes"),onSubtypes:r(t=>{let n=_S.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"onSubtypes")}}},"TypeHierarchyFeature");kl.TypeHierarchyFeature=ED});var yR=j(Al=>{"use strict";Object.defineProperty(Al,"__esModule",{value:!0});Al.InlineValueFeature=void 0;var SR=et(),SD=r(e=>class extends e{get inlineValue(){return{refresh:r(()=>this.connection.sendRequest(SR.InlineValueRefreshRequest.type),"refresh"),on:r(t=>this.connection.onRequest(SR.InlineValueRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n))),"on")}}},"InlineValueFeature");Al.InlineValueFeature=SD});var xR=j(Ul=>{"use strict";Object.defineProperty(Ul,"__esModule",{value:!0});Ul.FoldingRangeFeature=void 0;var _R=et(),yD=r(e=>class extends e{get foldingRange(){return{refresh:r(()=>this.connection.sendRequest(_R.FoldingRangeRefreshRequest.type),"refresh"),on:r(t=>{let n=_R.FoldingRangeRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"on")}}},"FoldingRangeFeature");Ul.FoldingRangeFeature=yD});var bR=j(vl=>{"use strict";Object.defineProperty(vl,"__esModule",{value:!0});vl.InlayHintFeature=void 0;var xS=et(),_D=r(e=>class extends e{get inlayHint(){return{refresh:r(()=>this.connection.sendRequest(xS.InlayHintRefreshRequest.type),"refresh"),on:r(t=>this.connection.onRequest(xS.InlayHintRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n))),"on"),resolve:r(t=>this.connection.onRequest(xS.InlayHintResolveRequest.type,(n,o)=>t(n,o)),"resolve")}}},"InlayHintFeature");vl.InlayHintFeature=_D});var RR=j(Cl=>{"use strict";Object.defineProperty(Cl,"__esModule",{value:!0});Cl.DiagnosticFeature=void 0;var ms=et(),xD=r(e=>class extends e{get diagnostics(){return{refresh:r(()=>this.connection.sendRequest(ms.DiagnosticRefreshRequest.type),"refresh"),on:r(t=>this.connection.onRequest(ms.DocumentDiagnosticRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(ms.DocumentDiagnosticRequest.partialResult,n))),"on"),onWorkspace:r(t=>this.connection.onRequest(ms.WorkspaceDiagnosticRequest.type,(n,o)=>t(n,o,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(ms.WorkspaceDiagnosticRequest.partialResult,n))),"onWorkspace")}}},"DiagnosticFeature");Cl.DiagnosticFeature=xD});var kR=j(Ll=>{"use strict";Object.defineProperty(Ll,"__esModule",{value:!0});Ll.MonikerFeature=void 0;var bD=et(),RD=r(e=>class extends e{get moniker(){return{on:r(t=>{let n=bD.MonikerRequest.type;return this.connection.onRequest(n,(o,i)=>t(o,i,this.attachWorkDoneProgress(o),this.attachPartialResultProgress(n,o)))},"on")}}},"MonikerFeature");Ll.MonikerFeature=RD});var qR=j(pe=>{"use strict";Object.defineProperty(pe,"__esModule",{value:!0});pe.createConnection=pe.combineFeatures=pe.combineNotebooksFeatures=pe.combineLanguagesFeatures=pe.combineWorkspaceFeatures=pe.combineWindowFeatures=pe.combineClientFeatures=pe.combineTracerFeatures=pe.combineTelemetryFeatures=pe.combineConsoleFeatures=pe._NotebooksImpl=pe._LanguagesImpl=pe.BulkUnregistration=pe.BulkRegistration=pe.ErrorMessageTracker=void 0;var D=et(),Sr=gS(),RS=TS(),X=dR(),kD=pR(),AD=fR(),UD=mR(),vD=dS(),CD=hR(),LD=gR(),OD=TR(),ND=ER(),MD=yR(),wD=xR(),FD=bR(),ID=RR(),PD=hS(),DD=kR();function bS(e){if(e!==null)return e}r(bS,"null2Undefined");var kS=class{static{r(this,"ErrorMessageTracker")}constructor(){this._messages=Object.create(null)}add(t){let n=this._messages[t];n||(n=0),n++,this._messages[t]=n}sendErrors(t){Object.keys(this._messages).forEach(n=>{t.window.showErrorMessage(n)})}};pe.ErrorMessageTracker=kS;var Ol=class{static{r(this,"RemoteConsoleImpl")}constructor(){}rawAttach(t){this._rawConnection=t}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(t){}initialize(t){}error(t){this.send(D.MessageType.Error,t)}warn(t){this.send(D.MessageType.Warning,t)}info(t){this.send(D.MessageType.Info,t)}log(t){this.send(D.MessageType.Log,t)}debug(t){this.send(D.MessageType.Debug,t)}send(t,n){this._rawConnection&&this._rawConnection.sendNotification(D.LogMessageNotification.type,{type:t,message:n}).catch(()=>{(0,D.RAL)().console.error("Sending log message failed")})}},AS=class{static{r(this,"_RemoteWindowImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}showErrorMessage(t,...n){let o={type:D.MessageType.Error,message:t,actions:n};return this.connection.sendRequest(D.ShowMessageRequest.type,o).then(bS)}showWarningMessage(t,...n){let o={type:D.MessageType.Warning,message:t,actions:n};return this.connection.sendRequest(D.ShowMessageRequest.type,o).then(bS)}showInformationMessage(t,...n){let o={type:D.MessageType.Info,message:t,actions:n};return this.connection.sendRequest(D.ShowMessageRequest.type,o).then(bS)}},AR=(0,CD.ShowDocumentFeature)((0,X.ProgressFeature)(AS)),UR;(function(e){function t(){return new Nl}r(t,"create"),e.create=t})(UR||(pe.BulkRegistration=UR={}));var Nl=class{static{r(this,"BulkRegistrationImpl")}constructor(){this._registrations=[],this._registered=new Set}add(t,n){let o=Sr.string(t)?t:t.method;if(this._registered.has(o))throw new Error(`${o} is already added to this registration`);let i=RS.generateUuid();this._registrations.push({id:i,method:o,registerOptions:n||{}}),this._registered.add(o)}asRegistrationParams(){return{registrations:this._registrations}}},vR;(function(e){function t(){return new hs(void 0,[])}r(t,"create"),e.create=t})(vR||(pe.BulkUnregistration=vR={}));var hs=class{static{r(this,"BulkUnregistrationImpl")}constructor(t,n){this._connection=t,this._unregistrations=new Map,n.forEach(o=>{this._unregistrations.set(o.method,o)})}get isAttached(){return!!this._connection}attach(t){this._connection=t}add(t){this._unregistrations.set(t.method,t)}dispose(){let t=[];for(let o of this._unregistrations.values())t.push(o);let n={unregisterations:t};this._connection.sendRequest(D.UnregistrationRequest.type,n).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(t){let n=Sr.string(t)?t:t.method,o=this._unregistrations.get(n);if(!o)return!1;let i={unregisterations:[o]};return this._connection.sendRequest(D.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(n)},a=>{this._connection.console.info(`Un-registering request handler for ${o.id} failed.`)}),!0}},Ml=class{static{r(this,"RemoteClientImpl")}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}register(t,n,o){return t instanceof Nl?this.registerMany(t):t instanceof hs?this.registerSingle1(t,n,o):this.registerSingle2(t,n)}registerSingle1(t,n,o){let i=Sr.string(n)?n:n.method,a=RS.generateUuid(),s={registrations:[{id:a,method:i,registerOptions:o||{}}]};return t.isAttached||t.attach(this.connection),this.connection.sendRequest(D.RegistrationRequest.type,s).then(c=>(t.add({id:a,method:i}),t),c=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(c)))}registerSingle2(t,n){let o=Sr.string(t)?t:t.method,i=RS.generateUuid(),a={registrations:[{id:i,method:o,registerOptions:n||{}}]};return this.connection.sendRequest(D.RegistrationRequest.type,a).then(s=>D.Disposable.create(()=>{this.unregisterSingle(i,o).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),s=>(this.connection.console.info(`Registering request handler for ${o} failed.`),Promise.reject(s)))}unregisterSingle(t,n){let o={unregisterations:[{id:t,method:n}]};return this.connection.sendRequest(D.UnregistrationRequest.type,o).catch(()=>{this.connection.console.info(`Un-registering request handler for ${t} failed.`)})}registerMany(t){let n=t.asRegistrationParams();return this.connection.sendRequest(D.RegistrationRequest.type,n).then(()=>new hs(this._connection,n.registrations.map(o=>({id:o.id,method:o.method}))),o=>(this.connection.console.info("Bulk registration failed."),Promise.reject(o)))}},US=class{static{r(this,"_RemoteWorkspaceImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}applyEdit(t){function n(i){return i&&!!i.edit}r(n,"isApplyWorkspaceEditParams");let o=n(t)?t:{edit:t};return this.connection.sendRequest(D.ApplyWorkspaceEditRequest.type,o)}},CR=(0,LD.FileOperationsFeature)((0,AD.WorkspaceFoldersFeature)((0,kD.ConfigurationFeature)(US))),wl=class{static{r(this,"TracerImpl")}constructor(){this._trace=D.Trace.Off}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}set trace(t){this._trace=t}log(t,n){this._trace!==D.Trace.Off&&this.connection.sendNotification(D.LogTraceNotification.type,{message:t,verbose:this._trace===D.Trace.Verbose?n:void 0}).catch(()=>{})}},Fl=class{static{r(this,"TelemetryImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}logEvent(t){this.connection.sendNotification(D.TelemetryEventNotification.type,t).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},Il=class{static{r(this,"_LanguagesImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}attachWorkDoneProgress(t){return(0,X.attachWorkDone)(this.connection,t)}attachPartialResultProgress(t,n){return(0,X.attachPartialResult)(this.connection,n)}};pe._LanguagesImpl=Il;var LR=(0,wD.FoldingRangeFeature)((0,DD.MonikerFeature)((0,ID.DiagnosticFeature)((0,FD.InlayHintFeature)((0,MD.InlineValueFeature)((0,ND.TypeHierarchyFeature)((0,OD.LinkedEditingRangeFeature)((0,vD.SemanticTokensFeature)((0,UD.CallHierarchyFeature)(Il))))))))),Pl=class{static{r(this,"_NotebooksImpl")}constructor(){}attach(t){this._connection=t}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(t){}fillServerCapabilities(t){}attachWorkDoneProgress(t){return(0,X.attachWorkDone)(this.connection,t)}attachPartialResultProgress(t,n){return(0,X.attachPartialResult)(this.connection,n)}};pe._NotebooksImpl=Pl;var OR=(0,PD.NotebookSyncFeature)(Pl);function NR(e,t){return function(n){return t(e(n))}}r(NR,"combineConsoleFeatures");pe.combineConsoleFeatures=NR;function MR(e,t){return function(n){return t(e(n))}}r(MR,"combineTelemetryFeatures");pe.combineTelemetryFeatures=MR;function wR(e,t){return function(n){return t(e(n))}}r(wR,"combineTracerFeatures");pe.combineTracerFeatures=wR;function FR(e,t){return function(n){return t(e(n))}}r(FR,"combineClientFeatures");pe.combineClientFeatures=FR;function IR(e,t){return function(n){return t(e(n))}}r(IR,"combineWindowFeatures");pe.combineWindowFeatures=IR;function PR(e,t){return function(n){return t(e(n))}}r(PR,"combineWorkspaceFeatures");pe.combineWorkspaceFeatures=PR;function DR(e,t){return function(n){return t(e(n))}}r(DR,"combineLanguagesFeatures");pe.combineLanguagesFeatures=DR;function BR(e,t){return function(n){return t(e(n))}}r(BR,"combineNotebooksFeatures");pe.combineNotebooksFeatures=BR;function BD(e,t){function n(i,a,s){return i&&a?s(i,a):i||a}return r(n,"combine"),{__brand:"features",console:n(e.console,t.console,NR),tracer:n(e.tracer,t.tracer,wR),telemetry:n(e.telemetry,t.telemetry,MR),client:n(e.client,t.client,FR),window:n(e.window,t.window,IR),workspace:n(e.workspace,t.workspace,PR),languages:n(e.languages,t.languages,DR),notebooks:n(e.notebooks,t.notebooks,BR)}}r(BD,"combineFeatures");pe.combineFeatures=BD;function qD(e,t,n){let o=n&&n.console?new(n.console(Ol)):new Ol,i=e(o);o.rawAttach(i);let a=n&&n.tracer?new(n.tracer(wl)):new wl,s=n&&n.telemetry?new(n.telemetry(Fl)):new Fl,c=n&&n.client?new(n.client(Ml)):new Ml,l=n&&n.window?new(n.window(AR)):new AR,d=n&&n.workspace?new(n.workspace(CR)):new CR,f=n&&n.languages?new(n.languages(LR)):new LR,g=n&&n.notebooks?new(n.notebooks(OR)):new OR,_=[o,a,s,c,l,d,f,g];function y(S){return S instanceof Promise?S:Sr.thenable(S)?new Promise((h,v)=>{S.then(P=>h(P),P=>v(P))}):Promise.resolve(S)}r(y,"asPromise");let w,O,B,N={listen:r(()=>i.listen(),"listen"),sendRequest:r((S,...h)=>i.sendRequest(Sr.string(S)?S:S.method,...h),"sendRequest"),onRequest:r((S,h)=>i.onRequest(S,h),"onRequest"),sendNotification:r((S,h)=>{let v=Sr.string(S)?S:S.method;return i.sendNotification(v,h)},"sendNotification"),onNotification:r((S,h)=>i.onNotification(S,h),"onNotification"),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:r(S=>(O=S,{dispose:r(()=>{O=void 0},"dispose")}),"onInitialize"),onInitialized:r(S=>i.onNotification(D.InitializedNotification.type,S),"onInitialized"),onShutdown:r(S=>(w=S,{dispose:r(()=>{w=void 0},"dispose")}),"onShutdown"),onExit:r(S=>(B=S,{dispose:r(()=>{B=void 0},"dispose")}),"onExit"),get console(){return o},get telemetry(){return s},get tracer(){return a},get client(){return c},get window(){return l},get workspace(){return d},get languages(){return f},get notebooks(){return g},onDidChangeConfiguration:r(S=>i.onNotification(D.DidChangeConfigurationNotification.type,S),"onDidChangeConfiguration"),onDidChangeWatchedFiles:r(S=>i.onNotification(D.DidChangeWatchedFilesNotification.type,S),"onDidChangeWatchedFiles"),__textDocumentSync:void 0,onDidOpenTextDocument:r(S=>i.onNotification(D.DidOpenTextDocumentNotification.type,S),"onDidOpenTextDocument"),onDidChangeTextDocument:r(S=>i.onNotification(D.DidChangeTextDocumentNotification.type,S),"onDidChangeTextDocument"),onDidCloseTextDocument:r(S=>i.onNotification(D.DidCloseTextDocumentNotification.type,S),"onDidCloseTextDocument"),onWillSaveTextDocument:r(S=>i.onNotification(D.WillSaveTextDocumentNotification.type,S),"onWillSaveTextDocument"),onWillSaveTextDocumentWaitUntil:r(S=>i.onRequest(D.WillSaveTextDocumentWaitUntilRequest.type,S),"onWillSaveTextDocumentWaitUntil"),onDidSaveTextDocument:r(S=>i.onNotification(D.DidSaveTextDocumentNotification.type,S),"onDidSaveTextDocument"),sendDiagnostics:r(S=>i.sendNotification(D.PublishDiagnosticsNotification.type,S),"sendDiagnostics"),onHover:r(S=>i.onRequest(D.HoverRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),void 0)),"onHover"),onCompletion:r(S=>i.onRequest(D.CompletionRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onCompletion"),onCompletionResolve:r(S=>i.onRequest(D.CompletionResolveRequest.type,S),"onCompletionResolve"),onSignatureHelp:r(S=>i.onRequest(D.SignatureHelpRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),void 0)),"onSignatureHelp"),onDeclaration:r(S=>i.onRequest(D.DeclarationRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onDeclaration"),onDefinition:r(S=>i.onRequest(D.DefinitionRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onDefinition"),onTypeDefinition:r(S=>i.onRequest(D.TypeDefinitionRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onTypeDefinition"),onImplementation:r(S=>i.onRequest(D.ImplementationRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onImplementation"),onReferences:r(S=>i.onRequest(D.ReferencesRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onReferences"),onDocumentHighlight:r(S=>i.onRequest(D.DocumentHighlightRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onDocumentHighlight"),onDocumentSymbol:r(S=>i.onRequest(D.DocumentSymbolRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onDocumentSymbol"),onWorkspaceSymbol:r(S=>i.onRequest(D.WorkspaceSymbolRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onWorkspaceSymbol"),onWorkspaceSymbolResolve:r(S=>i.onRequest(D.WorkspaceSymbolResolveRequest.type,S),"onWorkspaceSymbolResolve"),onCodeAction:r(S=>i.onRequest(D.CodeActionRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onCodeAction"),onCodeActionResolve:r(S=>i.onRequest(D.CodeActionResolveRequest.type,(h,v)=>S(h,v)),"onCodeActionResolve"),onCodeLens:r(S=>i.onRequest(D.CodeLensRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onCodeLens"),onCodeLensResolve:r(S=>i.onRequest(D.CodeLensResolveRequest.type,(h,v)=>S(h,v)),"onCodeLensResolve"),onDocumentFormatting:r(S=>i.onRequest(D.DocumentFormattingRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),void 0)),"onDocumentFormatting"),onDocumentRangeFormatting:r(S=>i.onRequest(D.DocumentRangeFormattingRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),void 0)),"onDocumentRangeFormatting"),onDocumentOnTypeFormatting:r(S=>i.onRequest(D.DocumentOnTypeFormattingRequest.type,(h,v)=>S(h,v)),"onDocumentOnTypeFormatting"),onRenameRequest:r(S=>i.onRequest(D.RenameRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),void 0)),"onRenameRequest"),onPrepareRename:r(S=>i.onRequest(D.PrepareRenameRequest.type,(h,v)=>S(h,v)),"onPrepareRename"),onDocumentLinks:r(S=>i.onRequest(D.DocumentLinkRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onDocumentLinks"),onDocumentLinkResolve:r(S=>i.onRequest(D.DocumentLinkResolveRequest.type,(h,v)=>S(h,v)),"onDocumentLinkResolve"),onDocumentColor:r(S=>i.onRequest(D.DocumentColorRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onDocumentColor"),onColorPresentation:r(S=>i.onRequest(D.ColorPresentationRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onColorPresentation"),onFoldingRanges:r(S=>i.onRequest(D.FoldingRangeRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onFoldingRanges"),onSelectionRanges:r(S=>i.onRequest(D.SelectionRangeRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),(0,X.attachPartialResult)(i,h))),"onSelectionRanges"),onExecuteCommand:r(S=>i.onRequest(D.ExecuteCommandRequest.type,(h,v)=>S(h,v,(0,X.attachWorkDone)(i,h),void 0)),"onExecuteCommand"),dispose:r(()=>i.dispose(),"dispose")};for(let S of _)S.attach(N);return i.onRequest(D.InitializeRequest.type,S=>{t.initialize(S),Sr.string(S.trace)&&(a.trace=D.Trace.fromString(S.trace));for(let h of _)h.initialize(S.capabilities);if(O){let h=O(S,new D.CancellationTokenSource().token,(0,X.attachWorkDone)(i,S),void 0);return y(h).then(v=>{if(v instanceof D.ResponseError)return v;let P=v;P||(P={capabilities:{}});let le=P.capabilities;le||(le={},P.capabilities=le),le.textDocumentSync===void 0||le.textDocumentSync===null?le.textDocumentSync=Sr.number(N.__textDocumentSync)?N.__textDocumentSync:D.TextDocumentSyncKind.None:!Sr.number(le.textDocumentSync)&&!Sr.number(le.textDocumentSync.change)&&(le.textDocumentSync.change=Sr.number(N.__textDocumentSync)?N.__textDocumentSync:D.TextDocumentSyncKind.None);for(let sn of _)sn.fillServerCapabilities(le);return P})}else{let h={capabilities:{textDocumentSync:D.TextDocumentSyncKind.None}};for(let v of _)v.fillServerCapabilities(h.capabilities);return h}}),i.onRequest(D.ShutdownRequest.type,()=>{if(t.shutdownReceived=!0,w)return w(new D.CancellationTokenSource().token)}),i.onNotification(D.ExitNotification.type,()=>{try{B&&B()}finally{t.shutdownReceived?t.exit(0):t.exit(1)}}),i.onNotification(D.SetTraceNotification.type,S=>{a.trace=D.Trace.fromString(S.value)}),N}r(qD,"createConnection");pe.createConnection=qD});var vS=j(Mt=>{"use strict";var GD=Mt&&Mt.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),jR=Mt&&Mt.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&GD(t,e,n)};Object.defineProperty(Mt,"__esModule",{value:!0});Mt.ProposedFeatures=Mt.NotebookDocuments=Mt.TextDocuments=Mt.SemanticTokensBuilder=void 0;var jD=dS();Object.defineProperty(Mt,"SemanticTokensBuilder",{enumerable:!0,get:r(function(){return jD.SemanticTokensBuilder},"get")});var VD=oR();jR(et(),Mt);var WD=fS();Object.defineProperty(Mt,"TextDocuments",{enumerable:!0,get:r(function(){return WD.TextDocuments},"get")});var zD=hS();Object.defineProperty(Mt,"NotebookDocuments",{enumerable:!0,get:r(function(){return zD.NotebookDocuments},"get")});jR(qR(),Mt);var GR;(function(e){e.all={__brand:"features",languages:VD.InlineCompletionFeature}})(GR||(Mt.ProposedFeatures=GR={}))});var WR=j((HH,VR)=>{"use strict";VR.exports=et()});var YR=j(zr=>{"use strict";var HD=zr&&zr.__createBinding||(Object.create?(function(e,t,n,o){o===void 0&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:r(function(){return t[n]},"get")}),Object.defineProperty(e,o,i)}):(function(e,t,n,o){o===void 0&&(o=n),e[o]=t[n]})),HR=zr&&zr.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&HD(t,e,n)};Object.defineProperty(zr,"__esModule",{value:!0});zr.createConnection=void 0;var Dl=vS();HR(WR(),zr);HR(vS(),zr);var zR=!1,YD={initialize:r(e=>{},"initialize"),get shutdownReceived(){return zR},set shutdownReceived(e){zR=e},exit:r(e=>{},"exit")};function KD(e,t,n,o){let i,a,s,c;e!==void 0&&e.__brand==="features"&&(i=e,e=t,t=n,n=o),Dl.ConnectionStrategy.is(e)||Dl.ConnectionOptions.is(e)?c=e:(a=e,s=t,c=n);let l=r(d=>(0,Dl.createProtocolConnection)(a,s,d,c),"connectionFactory");return(0,Dl.createConnection)(l,YD,i)}r(KD,"createConnection");zr.createConnection=KD});var JR=j((JH,KR)=>{"use strict";KR.exports=YR()});var an=KI(JR(),1);var Bl=class e{static{r(this,"FullTextDocument")}constructor(t,n,o,i){this._uri=t,this._languageId=n,this._version=o,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(t){if(t){let n=this.offsetAt(t.start),o=this.offsetAt(t.end);return this._content.substring(n,o)}return this._content}update(t,n){for(let o of t)if(e.isIncremental(o)){let i=ZR(o.range),a=this.offsetAt(i.start),s=this.offsetAt(i.end);this._content=this._content.substring(0,a)+o.text+this._content.substring(s,this._content.length);let c=Math.max(i.start.line,0),l=Math.max(i.end.line,0),d=this._lineOffsets,f=QR(o.text,!1,a);if(l-c===f.length)for(let _=0,y=f.length;_<y;_++)d[_+c+1]=f[_];else f.length<1e4?d.splice(c+1,l-c,...f):this._lineOffsets=d=d.slice(0,c+1).concat(f,d.slice(l+1));let g=o.text.length-(s-a);if(g!==0)for(let _=c+1+f.length,y=d.length;_<y;_++)d[_]=d[_]+g}else if(e.isFull(o))this._content=o.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=n}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=QR(this._content,!0)),this._lineOffsets}positionAt(t){t=Math.max(Math.min(t,this._content.length),0);let n=this.getLineOffsets(),o=0,i=n.length;if(i===0)return{line:0,character:t};for(;o<i;){let s=Math.floor((o+i)/2);n[s]>t?i=s:o=s+1}let a=o-1;return t=this.ensureBeforeEOL(t,n[a]),{line:a,character:t-n[a]}}offsetAt(t){let n=this.getLineOffsets();if(t.line>=n.length)return this._content.length;if(t.line<0)return 0;let o=n[t.line];if(t.character<=0)return o;let i=t.line+1<n.length?n[t.line+1]:this._content.length,a=Math.min(o+t.character,i);return this.ensureBeforeEOL(a,o)}ensureBeforeEOL(t,n){for(;t>n&&XR(this._content.charCodeAt(t-1));)t--;return t}get lineCount(){return this.getLineOffsets().length}static isIncremental(t){let n=t;return n!=null&&typeof n.text=="string"&&n.range!==void 0&&(n.rangeLength===void 0||typeof n.rangeLength=="number")}static isFull(t){let n=t;return n!=null&&typeof n.text=="string"&&n.range===void 0&&n.rangeLength===void 0}},ql;(function(e){function t(i,a,s,c){return new Bl(i,a,s,c)}r(t,"create"),e.create=t;function n(i,a,s){if(i instanceof Bl)return i.update(a,s),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}r(n,"update"),e.update=n;function o(i,a){let s=i.getText(),c=CS(a.map(JD),(f,g)=>{let _=f.range.start.line-g.range.start.line;return _===0?f.range.start.character-g.range.start.character:_}),l=0,d=[];for(let f of c){let g=i.offsetAt(f.range.start);if(g<l)throw new Error("Overlapping edit");g>l&&d.push(s.substring(l,g)),f.newText.length&&d.push(f.newText),l=i.offsetAt(f.range.end)}return d.push(s.substr(l)),d.join("")}r(o,"applyEdits"),e.applyEdits=o})(ql||(ql={}));function CS(e,t){if(e.length<=1)return e;let n=e.length/2|0,o=e.slice(0,n),i=e.slice(n);CS(o,t),CS(i,t);let a=0,s=0,c=0;for(;a<o.length&&s<i.length;)t(o[a],i[s])<=0?e[c++]=o[a++]:e[c++]=i[s++];for(;a<o.length;)e[c++]=o[a++];for(;s<i.length;)e[c++]=i[s++];return e}r(CS,"mergeSort");function QR(e,t,n=0){let o=t?[n]:[];for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);XR(a)&&(a===13&&i+1<e.length&&e.charCodeAt(i+1)===10&&i++,o.push(n+i+1))}return o}r(QR,"computeLineOffsets");function XR(e){return e===13||e===10}r(XR,"isEOL");function ZR(e){let t=e.start,n=e.end;return t.line>n.line||t.line===n.line&&t.character>n.character?{start:n,end:t}:e}r(ZR,"getWellformedRange");function JD(e){let t=ZR(e.range);return t!==e.range?{newText:e.newText,range:t}:e}r(JD,"getWellformedEdit");function QD(e){let t=[],n=/code\s*=\s*"""\s*\n([\s\S]*?)\n\s*"""/g,o;for(;(o=n.exec(e))!==null;){let i=o[1],a=o.index+o[0].indexOf(o[1]),s=a+i.length;t.push({content:i,offset:a,end:s})}return t}r(QD,"extractEmbeddedJS");function Gl(e,t){let n=QD(t);for(let o of n)if(e>=o.offset&&e<=o.end){let i=e-o.offset;return{region:o,jsOffset:i}}return null}r(Gl,"mapToVirtualJS");var XD={addon:"addon",agent:"agent",agent_trigger:"agent_trigger",api_group:"api_group",branch:"branch",function:"cfn",mcp_server:"mcp_server",mcp_server_trigger:"mcp_server_trigger",middleware:"middleware",query:"api",realtime_trigger:"realtime_trigger",table:"db",table_trigger:"table_trigger",task:"task",tool:"tool",workflow_test:"workflow_test",workspace:"workspace",workspace_trigger:"workspace_trigger"},ZD=/^(?:\s|\/\/[^\n]*\n)*(\w+)/;function Hr(e){let t=e.match(ZD)?.[1];return XD[t]||"cfn"}r(Hr,"getSchemeFromContent");var $D=typeof global=="object"&&global&&global.Object===Object&&global,jl=$D;var e1=typeof self=="object"&&self&&self.Object===Object&&self,t1=jl||e1||Function("return this")(),lt=t1;var r1=lt.Symbol,xt=r1;var $R=Object.prototype,n1=$R.hasOwnProperty,o1=$R.toString,gs=xt?xt.toStringTag:void 0;function i1(e){var t=n1.call(e,gs),n=e[gs];try{e[gs]=void 0;var o=!0}catch{}var i=o1.call(e);return o&&(t?e[gs]=n:delete e[gs]),i}r(i1,"getRawTag");var ek=i1;var a1=Object.prototype,s1=a1.toString;function c1(e){return s1.call(e)}r(c1,"objectToString");var tk=c1;var l1="[object Null]",u1="[object Undefined]",rk=xt?xt.toStringTag:void 0;function d1(e){return e==null?e===void 0?u1:l1:rk&&rk in Object(e)?ek(e):tk(e)}r(d1,"baseGetTag");var Ut=d1;function p1(e){return e!=null&&typeof e=="object"}r(p1,"isObjectLike");var qe=p1;var f1="[object Symbol]";function m1(e){return typeof e=="symbol"||qe(e)&&Ut(e)==f1}r(m1,"isSymbol");var Fn=m1;function h1(e,t){for(var n=-1,o=e==null?0:e.length,i=Array(o);++n<o;)i[n]=t(e[n],n,e);return i}r(h1,"arrayMap");var Yr=h1;var g1=Array.isArray,q=g1;var T1=1/0,nk=xt?xt.prototype:void 0,ok=nk?nk.toString:void 0;function ik(e){if(typeof e=="string")return e;if(q(e))return Yr(e,ik)+"";if(Fn(e))return ok?ok.call(e):"";var t=e+"";return t=="0"&&1/e==-T1?"-0":t}r(ik,"baseToString");var ak=ik;var E1=/\s/;function S1(e){for(var t=e.length;t--&&E1.test(e.charAt(t)););return t}r(S1,"trimmedEndIndex");var sk=S1;var y1=/^\s+/;function _1(e){return e&&e.slice(0,sk(e)+1).replace(y1,"")}r(_1,"baseTrim");var ck=_1;function x1(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}r(x1,"isObject");var Ge=x1;var lk=NaN,b1=/^[-+]0x[0-9a-f]+$/i,R1=/^0b[01]+$/i,k1=/^0o[0-7]+$/i,A1=parseInt;function U1(e){if(typeof e=="number")return e;if(Fn(e))return lk;if(Ge(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ge(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ck(e);var n=R1.test(e);return n||k1.test(e)?A1(e.slice(2),n?2:8):b1.test(e)?lk:+e}r(U1,"toNumber");var uk=U1;var dk=1/0,v1=17976931348623157e292;function C1(e){if(!e)return e===0?e:0;if(e=uk(e),e===dk||e===-dk){var t=e<0?-1:1;return t*v1}return e===e?e:0}r(C1,"toFinite");var pk=C1;function L1(e){var t=pk(e),n=t%1;return t===t?n?t-n:t:0}r(L1,"toInteger");var Kr=L1;function O1(e){return e}r(O1,"identity");var yr=O1;var N1="[object AsyncFunction]",M1="[object Function]",w1="[object GeneratorFunction]",F1="[object Proxy]";function I1(e){if(!Ge(e))return!1;var t=Ut(e);return t==M1||t==w1||t==N1||t==F1}r(I1,"isFunction");var Wt=I1;var P1=lt["__core-js_shared__"],Vl=P1;var fk=(function(){var e=/[^.]+$/.exec(Vl&&Vl.keys&&Vl.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})();function D1(e){return!!fk&&fk in e}r(D1,"isMasked");var mk=D1;var B1=Function.prototype,q1=B1.toString;function G1(e){if(e!=null){try{return q1.call(e)}catch{}try{return e+""}catch{}}return""}r(G1,"toSource");var dn=G1;var j1=/[\\^$.*+?()[\]{}|]/g,V1=/^\[object .+?Constructor\]$/,W1=Function.prototype,z1=Object.prototype,H1=W1.toString,Y1=z1.hasOwnProperty,K1=RegExp("^"+H1.call(Y1).replace(j1,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function J1(e){if(!Ge(e)||mk(e))return!1;var t=Wt(e)?K1:V1;return t.test(dn(e))}r(J1,"baseIsNative");var hk=J1;function Q1(e,t){return e?.[t]}r(Q1,"getValue");var gk=Q1;function X1(e,t){var n=gk(e,t);return hk(n)?n:void 0}r(X1,"getNative");var rr=X1;var Z1=rr(lt,"WeakMap"),Wl=Z1;var Tk=Object.create,$1=(function(){function e(){}return r(e,"object"),function(t){if(!Ge(t))return{};if(Tk)return Tk(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}})(),Ek=$1;function e0(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}r(e0,"apply");var Sk=e0;function t0(){}r(t0,"noop");var je=t0;function r0(e,t){var n=-1,o=e.length;for(t||(t=Array(o));++n<o;)t[n]=e[n];return t}r(r0,"copyArray");var yk=r0;var n0=800,o0=16,i0=Date.now;function a0(e){var t=0,n=0;return function(){var o=i0(),i=o0-(o-n);if(n=o,i>0){if(++t>=n0)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}r(a0,"shortOut");var _k=a0;function s0(e){return function(){return e}}r(s0,"constant");var xk=s0;var c0=(function(){try{var e=rr(Object,"defineProperty");return e({},"",{}),e}catch{}})(),ui=c0;var l0=ui?function(e,t){return ui(e,"toString",{configurable:!0,enumerable:!1,value:xk(t),writable:!0})}:yr,bk=l0;var u0=_k(bk),Rk=u0;function d0(e,t){for(var n=-1,o=e==null?0:e.length;++n<o&&t(e[n],n,e)!==!1;);return e}r(d0,"arrayEach");var zl=d0;function p0(e,t,n,o){for(var i=e.length,a=n+(o?1:-1);o?a--:++a<i;)if(t(e[a],a,e))return a;return-1}r(p0,"baseFindIndex");var Hl=p0;function f0(e){return e!==e}r(f0,"baseIsNaN");var kk=f0;function m0(e,t,n){for(var o=n-1,i=e.length;++o<i;)if(e[o]===t)return o;return-1}r(m0,"strictIndexOf");var Ak=m0;function h0(e,t,n){return t===t?Ak(e,t,n):Hl(e,kk,n)}r(h0,"baseIndexOf");var di=h0;function g0(e,t){var n=e==null?0:e.length;return!!n&&di(e,t,0)>-1}r(g0,"arrayIncludes");var Yl=g0;var T0=9007199254740991,E0=/^(?:0|[1-9]\d*)$/;function S0(e,t){var n=typeof e;return t=t??T0,!!t&&(n=="number"||n!="symbol"&&E0.test(e))&&e>-1&&e%1==0&&e<t}r(S0,"isIndex");var In=S0;function y0(e,t,n){t=="__proto__"&&ui?ui(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}r(y0,"baseAssignValue");var pi=y0;function _0(e,t){return e===t||e!==e&&t!==t}r(_0,"eq");var Jr=_0;var x0=Object.prototype,b0=x0.hasOwnProperty;function R0(e,t,n){var o=e[t];(!(b0.call(e,t)&&Jr(o,n))||n===void 0&&!(t in e))&&pi(e,t,n)}r(R0,"assignValue");var Pn=R0;function k0(e,t,n,o){var i=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var c=t[a],l=o?o(n[c],e[c],c,n,e):void 0;l===void 0&&(l=e[c]),i?pi(n,c,l):Pn(n,c,l)}return n}r(k0,"copyObject");var Qr=k0;var Uk=Math.max;function A0(e,t,n){return t=Uk(t===void 0?e.length-1:t,0),function(){for(var o=arguments,i=-1,a=Uk(o.length-t,0),s=Array(a);++i<a;)s[i]=o[t+i];i=-1;for(var c=Array(t+1);++i<t;)c[i]=o[i];return c[t]=n(s),Sk(e,this,c)}}r(A0,"overRest");var vk=A0;function U0(e,t){return Rk(vk(e,t,yr),e+"")}r(U0,"baseRest");var Dn=U0;var v0=9007199254740991;function C0(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=v0}r(C0,"isLength");var fi=C0;function L0(e){return e!=null&&fi(e.length)&&!Wt(e)}r(L0,"isArrayLike");var ut=L0;function O0(e,t,n){if(!Ge(n))return!1;var o=typeof t;return(o=="number"?ut(n)&&In(t,n.length):o=="string"&&t in n)?Jr(n[t],e):!1}r(O0,"isIterateeCall");var Bn=O0;function N0(e){return Dn(function(t,n){var o=-1,i=n.length,a=i>1?n[i-1]:void 0,s=i>2?n[2]:void 0;for(a=e.length>3&&typeof a=="function"?(i--,a):void 0,s&&Bn(n[0],n[1],s)&&(a=i<3?void 0:a,i=1),t=Object(t);++o<i;){var c=n[o];c&&e(t,c,o,a)}return t})}r(N0,"createAssigner");var Ck=N0;var M0=Object.prototype;function w0(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||M0;return e===n}r(w0,"isPrototype");var Xr=w0;function F0(e,t){for(var n=-1,o=Array(e);++n<e;)o[n]=t(n);return o}r(F0,"baseTimes");var Lk=F0;var I0="[object Arguments]";function P0(e){return qe(e)&&Ut(e)==I0}r(P0,"baseIsArguments");var LS=P0;var Ok=Object.prototype,D0=Ok.hasOwnProperty,B0=Ok.propertyIsEnumerable,q0=LS((function(){return arguments})())?LS:function(e){return qe(e)&&D0.call(e,"callee")&&!B0.call(e,"callee")},qn=q0;function G0(){return!1}r(G0,"stubFalse");var Nk=G0;var Fk=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Mk=Fk&&typeof module=="object"&&module&&!module.nodeType&&module,j0=Mk&&Mk.exports===Fk,wk=j0?lt.Buffer:void 0,V0=wk?wk.isBuffer:void 0,W0=V0||Nk,pn=W0;var z0="[object Arguments]",H0="[object Array]",Y0="[object Boolean]",K0="[object Date]",J0="[object Error]",Q0="[object Function]",X0="[object Map]",Z0="[object Number]",$0="[object Object]",eB="[object RegExp]",tB="[object Set]",rB="[object String]",nB="[object WeakMap]",oB="[object ArrayBuffer]",iB="[object DataView]",aB="[object Float32Array]",sB="[object Float64Array]",cB="[object Int8Array]",lB="[object Int16Array]",uB="[object Int32Array]",dB="[object Uint8Array]",pB="[object Uint8ClampedArray]",fB="[object Uint16Array]",mB="[object Uint32Array]",Ce={};Ce[aB]=Ce[sB]=Ce[cB]=Ce[lB]=Ce[uB]=Ce[dB]=Ce[pB]=Ce[fB]=Ce[mB]=!0;Ce[z0]=Ce[H0]=Ce[oB]=Ce[Y0]=Ce[iB]=Ce[K0]=Ce[J0]=Ce[Q0]=Ce[X0]=Ce[Z0]=Ce[$0]=Ce[eB]=Ce[tB]=Ce[rB]=Ce[nB]=!1;function hB(e){return qe(e)&&fi(e.length)&&!!Ce[Ut(e)]}r(hB,"baseIsTypedArray");var Ik=hB;function gB(e){return function(t){return e(t)}}r(gB,"baseUnary");var Zr=gB;var Pk=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ts=Pk&&typeof module=="object"&&module&&!module.nodeType&&module,TB=Ts&&Ts.exports===Pk,OS=TB&&jl.process,EB=(function(){try{var e=Ts&&Ts.require&&Ts.require("util").types;return e||OS&&OS.binding&&OS.binding("util")}catch{}})(),_r=EB;var Dk=_r&&_r.isTypedArray,SB=Dk?Zr(Dk):Ik,mi=SB;var yB=Object.prototype,_B=yB.hasOwnProperty;function xB(e,t){var n=q(e),o=!n&&qn(e),i=!n&&!o&&pn(e),a=!n&&!o&&!i&&mi(e),s=n||o||i||a,c=s?Lk(e.length,String):[],l=c.length;for(var d in e)(t||_B.call(e,d))&&!(s&&(d=="length"||i&&(d=="offset"||d=="parent")||a&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||In(d,l)))&&c.push(d);return c}r(xB,"arrayLikeKeys");var Kl=xB;function bB(e,t){return function(n){return e(t(n))}}r(bB,"overArg");var Jl=bB;var RB=Jl(Object.keys,Object),Bk=RB;var kB=Object.prototype,AB=kB.hasOwnProperty;function UB(e){if(!Xr(e))return Bk(e);var t=[];for(var n in Object(e))AB.call(e,n)&&n!="constructor"&&t.push(n);return t}r(UB,"baseKeys");var Ql=UB;function vB(e){return ut(e)?Kl(e):Ql(e)}r(vB,"keys");var he=vB;var CB=Object.prototype,LB=CB.hasOwnProperty,OB=Ck(function(e,t){if(Xr(t)||ut(t)){Qr(t,he(t),e);return}for(var n in t)LB.call(t,n)&&Pn(e,n,t[n])}),vt=OB;function NB(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}r(NB,"nativeKeysIn");var qk=NB;var MB=Object.prototype,wB=MB.hasOwnProperty;function FB(e){if(!Ge(e))return qk(e);var t=Xr(e),n=[];for(var o in e)o=="constructor"&&(t||!wB.call(e,o))||n.push(o);return n}r(FB,"baseKeysIn");var Gk=FB;function IB(e){return ut(e)?Kl(e,!0):Gk(e)}r(IB,"keysIn");var Gn=IB;var PB=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,DB=/^\w*$/;function BB(e,t){if(q(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Fn(e)?!0:DB.test(e)||!PB.test(e)||t!=null&&e in Object(t)}r(BB,"isKey");var hi=BB;var qB=rr(Object,"create"),fn=qB;function GB(){this.__data__=fn?fn(null):{},this.size=0}r(GB,"hashClear");var jk=GB;function jB(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}r(jB,"hashDelete");var Vk=jB;var VB="__lodash_hash_undefined__",WB=Object.prototype,zB=WB.hasOwnProperty;function HB(e){var t=this.__data__;if(fn){var n=t[e];return n===VB?void 0:n}return zB.call(t,e)?t[e]:void 0}r(HB,"hashGet");var Wk=HB;var YB=Object.prototype,KB=YB.hasOwnProperty;function JB(e){var t=this.__data__;return fn?t[e]!==void 0:KB.call(t,e)}r(JB,"hashHas");var zk=JB;var QB="__lodash_hash_undefined__";function XB(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=fn&&t===void 0?QB:t,this}r(XB,"hashSet");var Hk=XB;function gi(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}r(gi,"Hash");gi.prototype.clear=jk;gi.prototype.delete=Vk;gi.prototype.get=Wk;gi.prototype.has=zk;gi.prototype.set=Hk;var NS=gi;function ZB(){this.__data__=[],this.size=0}r(ZB,"listCacheClear");var Yk=ZB;function $B(e,t){for(var n=e.length;n--;)if(Jr(e[n][0],t))return n;return-1}r($B,"assocIndexOf");var jn=$B;var eq=Array.prototype,tq=eq.splice;function rq(e){var t=this.__data__,n=jn(t,e);if(n<0)return!1;var o=t.length-1;return n==o?t.pop():tq.call(t,n,1),--this.size,!0}r(rq,"listCacheDelete");var Kk=rq;function nq(e){var t=this.__data__,n=jn(t,e);return n<0?void 0:t[n][1]}r(nq,"listCacheGet");var Jk=nq;function oq(e){return jn(this.__data__,e)>-1}r(oq,"listCacheHas");var Qk=oq;function iq(e,t){var n=this.__data__,o=jn(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}r(iq,"listCacheSet");var Xk=iq;function Ti(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}r(Ti,"ListCache");Ti.prototype.clear=Yk;Ti.prototype.delete=Kk;Ti.prototype.get=Jk;Ti.prototype.has=Qk;Ti.prototype.set=Xk;var Vn=Ti;var aq=rr(lt,"Map"),Wn=aq;function sq(){this.size=0,this.__data__={hash:new NS,map:new(Wn||Vn),string:new NS}}r(sq,"mapCacheClear");var Zk=sq;function cq(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}r(cq,"isKeyable");var $k=cq;function lq(e,t){var n=e.__data__;return $k(t)?n[typeof t=="string"?"string":"hash"]:n.map}r(lq,"getMapData");var zn=lq;function uq(e){var t=zn(this,e).delete(e);return this.size-=t?1:0,t}r(uq,"mapCacheDelete");var eA=uq;function dq(e){return zn(this,e).get(e)}r(dq,"mapCacheGet");var tA=dq;function pq(e){return zn(this,e).has(e)}r(pq,"mapCacheHas");var rA=pq;function fq(e,t){var n=zn(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}r(fq,"mapCacheSet");var nA=fq;function Ei(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}r(Ei,"MapCache");Ei.prototype.clear=Zk;Ei.prototype.delete=eA;Ei.prototype.get=tA;Ei.prototype.has=rA;Ei.prototype.set=nA;var Ro=Ei;var mq="Expected a function";function MS(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(mq);var n=r(function(){var o=arguments,i=t?t.apply(this,o):o[0],a=n.cache;if(a.has(i))return a.get(i);var s=e.apply(this,o);return n.cache=a.set(i,s)||a,s},"memoized");return n.cache=new(MS.Cache||Ro),n}r(MS,"memoize");MS.Cache=Ro;var oA=MS;var hq=500;function gq(e){var t=oA(e,function(o){return n.size===hq&&n.clear(),o}),n=t.cache;return t}r(gq,"memoizeCapped");var iA=gq;var Tq=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Eq=/\\(\\)?/g,Sq=iA(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Tq,function(n,o,i,a){t.push(i?a.replace(Eq,"$1"):o||n)}),t}),aA=Sq;function yq(e){return e==null?"":ak(e)}r(yq,"toString");var sA=yq;function _q(e,t){return q(e)?e:hi(e,t)?[e]:aA(sA(e))}r(_q,"castPath");var Hn=_q;var xq=1/0;function bq(e){if(typeof e=="string"||Fn(e))return e;var t=e+"";return t=="0"&&1/e==-xq?"-0":t}r(bq,"toKey");var $r=bq;function Rq(e,t){t=Hn(t,e);for(var n=0,o=t.length;e!=null&&n<o;)e=e[$r(t[n++])];return n&&n==o?e:void 0}r(Rq,"baseGet");var Si=Rq;function kq(e,t,n){var o=e==null?void 0:Si(e,t);return o===void 0?n:o}r(kq,"get");var ko=kq;function Aq(e,t){for(var n=-1,o=t.length,i=e.length;++n<o;)e[i+n]=t[n];return e}r(Aq,"arrayPush");var yi=Aq;var cA=xt?xt.isConcatSpreadable:void 0;function Uq(e){return q(e)||qn(e)||!!(cA&&e&&e[cA])}r(Uq,"isFlattenable");var lA=Uq;function uA(e,t,n,o,i){var a=-1,s=e.length;for(n||(n=lA),i||(i=[]);++a<s;){var c=e[a];t>0&&n(c)?t>1?uA(c,t-1,n,o,i):yi(i,c):o||(i[i.length]=c)}return i}r(uA,"baseFlatten");var _i=uA;function vq(e){var t=e==null?0:e.length;return t?_i(e,1):[]}r(vq,"flatten");var gt=vq;var Cq=Jl(Object.getPrototypeOf,Object),xi=Cq;var Lq="[object Object]",Oq=Function.prototype,Nq=Object.prototype,dA=Oq.toString,Mq=Nq.hasOwnProperty,wq=dA.call(Object);function Fq(e){if(!qe(e)||Ut(e)!=Lq)return!1;var t=xi(e);if(t===null)return!0;var n=Mq.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&dA.call(n)==wq}r(Fq,"isPlainObject");var Xl=Fq;function Iq(e,t,n){var o=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++o<i;)a[o]=e[o+t];return a}r(Iq,"baseSlice");var Zl=Iq;function Pq(e,t,n,o){var i=-1,a=e==null?0:e.length;for(o&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}r(Pq,"arrayReduce");var pA=Pq;function Dq(){this.__data__=new Vn,this.size=0}r(Dq,"stackClear");var fA=Dq;function Bq(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}r(Bq,"stackDelete");var mA=Bq;function qq(e){return this.__data__.get(e)}r(qq,"stackGet");var hA=qq;function Gq(e){return this.__data__.has(e)}r(Gq,"stackHas");var gA=Gq;var jq=200;function Vq(e,t){var n=this.__data__;if(n instanceof Vn){var o=n.__data__;if(!Wn||o.length<jq-1)return o.push([e,t]),this.size=++n.size,this;n=this.__data__=new Ro(o)}return n.set(e,t),this.size=n.size,this}r(Vq,"stackSet");var TA=Vq;function bi(e){var t=this.__data__=new Vn(e);this.size=t.size}r(bi,"Stack");bi.prototype.clear=fA;bi.prototype.delete=mA;bi.prototype.get=hA;bi.prototype.has=gA;bi.prototype.set=TA;var Yn=bi;function Wq(e,t){return e&&Qr(t,he(t),e)}r(Wq,"baseAssign");var EA=Wq;function zq(e,t){return e&&Qr(t,Gn(t),e)}r(zq,"baseAssignIn");var SA=zq;var bA=typeof exports=="object"&&exports&&!exports.nodeType&&exports,yA=bA&&typeof module=="object"&&module&&!module.nodeType&&module,Hq=yA&&yA.exports===bA,_A=Hq?lt.Buffer:void 0,xA=_A?_A.allocUnsafe:void 0;function Yq(e,t){if(t)return e.slice();var n=e.length,o=xA?xA(n):new e.constructor(n);return e.copy(o),o}r(Yq,"cloneBuffer");var RA=Yq;function Kq(e,t){for(var n=-1,o=e==null?0:e.length,i=0,a=[];++n<o;){var s=e[n];t(s,n,e)&&(a[i++]=s)}return a}r(Kq,"arrayFilter");var Ri=Kq;function Jq(){return[]}r(Jq,"stubArray");var $l=Jq;var Qq=Object.prototype,Xq=Qq.propertyIsEnumerable,kA=Object.getOwnPropertySymbols,Zq=kA?function(e){return e==null?[]:(e=Object(e),Ri(kA(e),function(t){return Xq.call(e,t)}))}:$l,ki=Zq;function $q(e,t){return Qr(e,ki(e),t)}r($q,"copySymbols");var AA=$q;var eG=Object.getOwnPropertySymbols,tG=eG?function(e){for(var t=[];e;)yi(t,ki(e)),e=xi(e);return t}:$l,eu=tG;function rG(e,t){return Qr(e,eu(e),t)}r(rG,"copySymbolsIn");var UA=rG;function nG(e,t,n){var o=t(e);return q(e)?o:yi(o,n(e))}r(nG,"baseGetAllKeys");var tu=nG;function oG(e){return tu(e,he,ki)}r(oG,"getAllKeys");var Es=oG;function iG(e){return tu(e,Gn,eu)}r(iG,"getAllKeysIn");var ru=iG;var aG=rr(lt,"DataView"),nu=aG;var sG=rr(lt,"Promise"),ou=sG;var cG=rr(lt,"Set"),Kn=cG;var vA="[object Map]",lG="[object Object]",CA="[object Promise]",LA="[object Set]",OA="[object WeakMap]",NA="[object DataView]",uG=dn(nu),dG=dn(Wn),pG=dn(ou),fG=dn(Kn),mG=dn(Wl),Ao=Ut;(nu&&Ao(new nu(new ArrayBuffer(1)))!=NA||Wn&&Ao(new Wn)!=vA||ou&&Ao(ou.resolve())!=CA||Kn&&Ao(new Kn)!=LA||Wl&&Ao(new Wl)!=OA)&&(Ao=r(function(e){var t=Ut(e),n=t==lG?e.constructor:void 0,o=n?dn(n):"";if(o)switch(o){case uG:return NA;case dG:return vA;case pG:return CA;case fG:return LA;case mG:return OA}return t},"getTag"));var Or=Ao;var hG=Object.prototype,gG=hG.hasOwnProperty;function TG(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&gG.call(e,"index")&&(n.index=e.index,n.input=e.input),n}r(TG,"initCloneArray");var MA=TG;var EG=lt.Uint8Array,Ai=EG;function SG(e){var t=new e.constructor(e.byteLength);return new Ai(t).set(new Ai(e)),t}r(SG,"cloneArrayBuffer");var Ui=SG;function yG(e,t){var n=t?Ui(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}r(yG,"cloneDataView");var wA=yG;var _G=/\w*$/;function xG(e){var t=new e.constructor(e.source,_G.exec(e));return t.lastIndex=e.lastIndex,t}r(xG,"cloneRegExp");var FA=xG;var IA=xt?xt.prototype:void 0,PA=IA?IA.valueOf:void 0;function bG(e){return PA?Object(PA.call(e)):{}}r(bG,"cloneSymbol");var DA=bG;function RG(e,t){var n=t?Ui(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}r(RG,"cloneTypedArray");var BA=RG;var kG="[object Boolean]",AG="[object Date]",UG="[object Map]",vG="[object Number]",CG="[object RegExp]",LG="[object Set]",OG="[object String]",NG="[object Symbol]",MG="[object ArrayBuffer]",wG="[object DataView]",FG="[object Float32Array]",IG="[object Float64Array]",PG="[object Int8Array]",DG="[object Int16Array]",BG="[object Int32Array]",qG="[object Uint8Array]",GG="[object Uint8ClampedArray]",jG="[object Uint16Array]",VG="[object Uint32Array]";function WG(e,t,n){var o=e.constructor;switch(t){case MG:return Ui(e);case kG:case AG:return new o(+e);case wG:return wA(e,n);case FG:case IG:case PG:case DG:case BG:case qG:case GG:case jG:case VG:return BA(e,n);case UG:return new o;case vG:case OG:return new o(e);case CG:return FA(e);case LG:return new o;case NG:return DA(e)}}r(WG,"initCloneByTag");var qA=WG;function zG(e){return typeof e.constructor=="function"&&!Xr(e)?Ek(xi(e)):{}}r(zG,"initCloneObject");var GA=zG;var HG="[object Map]";function YG(e){return qe(e)&&Or(e)==HG}r(YG,"baseIsMap");var jA=YG;var VA=_r&&_r.isMap,KG=VA?Zr(VA):jA,WA=KG;var JG="[object Set]";function QG(e){return qe(e)&&Or(e)==JG}r(QG,"baseIsSet");var zA=QG;var HA=_r&&_r.isSet,XG=HA?Zr(HA):zA,YA=XG;var ZG=1,$G=2,ej=4,KA="[object Arguments]",tj="[object Array]",rj="[object Boolean]",nj="[object Date]",oj="[object Error]",JA="[object Function]",ij="[object GeneratorFunction]",aj="[object Map]",sj="[object Number]",QA="[object Object]",cj="[object RegExp]",lj="[object Set]",uj="[object String]",dj="[object Symbol]",pj="[object WeakMap]",fj="[object ArrayBuffer]",mj="[object DataView]",hj="[object Float32Array]",gj="[object Float64Array]",Tj="[object Int8Array]",Ej="[object Int16Array]",Sj="[object Int32Array]",yj="[object Uint8Array]",_j="[object Uint8ClampedArray]",xj="[object Uint16Array]",bj="[object Uint32Array]",xe={};xe[KA]=xe[tj]=xe[fj]=xe[mj]=xe[rj]=xe[nj]=xe[hj]=xe[gj]=xe[Tj]=xe[Ej]=xe[Sj]=xe[aj]=xe[sj]=xe[QA]=xe[cj]=xe[lj]=xe[uj]=xe[dj]=xe[yj]=xe[_j]=xe[xj]=xe[bj]=!0;xe[oj]=xe[JA]=xe[pj]=!1;function iu(e,t,n,o,i,a){var s,c=t&ZG,l=t&$G,d=t&ej;if(n&&(s=i?n(e,o,i,a):n(e)),s!==void 0)return s;if(!Ge(e))return e;var f=q(e);if(f){if(s=MA(e),!c)return yk(e,s)}else{var g=Or(e),_=g==JA||g==ij;if(pn(e))return RA(e,c);if(g==QA||g==KA||_&&!i){if(s=l||_?{}:GA(e),!c)return l?UA(e,SA(s,e)):AA(e,EA(s,e))}else{if(!xe[g])return i?e:{};s=qA(e,g,c)}}a||(a=new Yn);var y=a.get(e);if(y)return y;a.set(e,s),YA(e)?e.forEach(function(B){s.add(iu(B,t,n,B,e,a))}):WA(e)&&e.forEach(function(B,N){s.set(N,iu(B,t,n,N,e,a))});var w=d?l?ru:Es:l?Gn:he,O=f?void 0:w(e);return zl(O||e,function(B,N){O&&(N=B,B=e[N]),Pn(s,N,iu(B,t,n,N,e,a))}),s}r(iu,"baseClone");var XA=iu;var Rj=4;function kj(e){return XA(e,Rj)}r(kj,"clone");var be=kj;function Aj(e){for(var t=-1,n=e==null?0:e.length,o=0,i=[];++t<n;){var a=e[t];a&&(i[o++]=a)}return i}r(Aj,"compact");var en=Aj;var Uj="__lodash_hash_undefined__";function vj(e){return this.__data__.set(e,Uj),this}r(vj,"setCacheAdd");var ZA=vj;function Cj(e){return this.__data__.has(e)}r(Cj,"setCacheHas");var $A=Cj;function au(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Ro;++t<n;)this.add(e[t])}r(au,"SetCache");au.prototype.add=au.prototype.push=ZA;au.prototype.has=$A;var vi=au;function Lj(e,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(t(e[n],n,e))return!0;return!1}r(Lj,"arraySome");var su=Lj;function Oj(e,t){return e.has(t)}r(Oj,"cacheHas");var Ci=Oj;var Nj=1,Mj=2;function wj(e,t,n,o,i,a){var s=n&Nj,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;var d=a.get(e),f=a.get(t);if(d&&f)return d==t&&f==e;var g=-1,_=!0,y=n&Mj?new vi:void 0;for(a.set(e,t),a.set(t,e);++g<c;){var w=e[g],O=t[g];if(o)var B=s?o(O,w,g,t,e,a):o(w,O,g,e,t,a);if(B!==void 0){if(B)continue;_=!1;break}if(y){if(!su(t,function(N,S){if(!Ci(y,S)&&(w===N||i(w,N,n,o,a)))return y.push(S)})){_=!1;break}}else if(!(w===O||i(w,O,n,o,a))){_=!1;break}}return a.delete(e),a.delete(t),_}r(wj,"equalArrays");var cu=wj;function Fj(e){var t=-1,n=Array(e.size);return e.forEach(function(o,i){n[++t]=[i,o]}),n}r(Fj,"mapToArray");var eU=Fj;function Ij(e){var t=-1,n=Array(e.size);return e.forEach(function(o){n[++t]=o}),n}r(Ij,"setToArray");var Li=Ij;var Pj=1,Dj=2,Bj="[object Boolean]",qj="[object Date]",Gj="[object Error]",jj="[object Map]",Vj="[object Number]",Wj="[object RegExp]",zj="[object Set]",Hj="[object String]",Yj="[object Symbol]",Kj="[object ArrayBuffer]",Jj="[object DataView]",tU=xt?xt.prototype:void 0,wS=tU?tU.valueOf:void 0;function Qj(e,t,n,o,i,a,s){switch(n){case Jj:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Kj:return!(e.byteLength!=t.byteLength||!a(new Ai(e),new Ai(t)));case Bj:case qj:case Vj:return Jr(+e,+t);case Gj:return e.name==t.name&&e.message==t.message;case Wj:case Hj:return e==t+"";case jj:var c=eU;case zj:var l=o&Pj;if(c||(c=Li),e.size!=t.size&&!l)return!1;var d=s.get(e);if(d)return d==t;o|=Dj,s.set(e,t);var f=cu(c(e),c(t),o,i,a,s);return s.delete(e),f;case Yj:if(wS)return wS.call(e)==wS.call(t)}return!1}r(Qj,"equalByTag");var rU=Qj;var Xj=1,Zj=Object.prototype,$j=Zj.hasOwnProperty;function e2(e,t,n,o,i,a){var s=n&Xj,c=Es(e),l=c.length,d=Es(t),f=d.length;if(l!=f&&!s)return!1;for(var g=l;g--;){var _=c[g];if(!(s?_ in t:$j.call(t,_)))return!1}var y=a.get(e),w=a.get(t);if(y&&w)return y==t&&w==e;var O=!0;a.set(e,t),a.set(t,e);for(var B=s;++g<l;){_=c[g];var N=e[_],S=t[_];if(o)var h=s?o(S,N,_,t,e,a):o(N,S,_,e,t,a);if(!(h===void 0?N===S||i(N,S,n,o,a):h)){O=!1;break}B||(B=_=="constructor")}if(O&&!B){var v=e.constructor,P=t.constructor;v!=P&&"constructor"in e&&"constructor"in t&&!(typeof v=="function"&&v instanceof v&&typeof P=="function"&&P instanceof P)&&(O=!1)}return a.delete(e),a.delete(t),O}r(e2,"equalObjects");var nU=e2;var t2=1,oU="[object Arguments]",iU="[object Array]",lu="[object Object]",r2=Object.prototype,aU=r2.hasOwnProperty;function n2(e,t,n,o,i,a){var s=q(e),c=q(t),l=s?iU:Or(e),d=c?iU:Or(t);l=l==oU?lu:l,d=d==oU?lu:d;var f=l==lu,g=d==lu,_=l==d;if(_&&pn(e)){if(!pn(t))return!1;s=!0,f=!1}if(_&&!f)return a||(a=new Yn),s||mi(e)?cu(e,t,n,o,i,a):rU(e,t,l,n,o,i,a);if(!(n&t2)){var y=f&&aU.call(e,"__wrapped__"),w=g&&aU.call(t,"__wrapped__");if(y||w){var O=y?e.value():e,B=w?t.value():t;return a||(a=new Yn),i(O,B,n,o,a)}}return _?(a||(a=new Yn),nU(e,t,n,o,i,a)):!1}r(n2,"baseIsEqualDeep");var sU=n2;function cU(e,t,n,o,i){return e===t?!0:e==null||t==null||!qe(e)&&!qe(t)?e!==e&&t!==t:sU(e,t,n,o,cU,i)}r(cU,"baseIsEqual");var uu=cU;var o2=1,i2=2;function a2(e,t,n,o){var i=n.length,a=i,s=!o;if(e==null)return!a;for(e=Object(e);i--;){var c=n[i];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++i<a;){c=n[i];var l=c[0],d=e[l],f=c[1];if(s&&c[2]){if(d===void 0&&!(l in e))return!1}else{var g=new Yn;if(o)var _=o(d,f,l,e,t,g);if(!(_===void 0?uu(f,d,o2|i2,o,g):_))return!1}}return!0}r(a2,"baseIsMatch");var lU=a2;function s2(e){return e===e&&!Ge(e)}r(s2,"isStrictComparable");var du=s2;function c2(e){for(var t=he(e),n=t.length;n--;){var o=t[n],i=e[o];t[n]=[o,i,du(i)]}return t}r(c2,"getMatchData");var uU=c2;function l2(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}r(l2,"matchesStrictComparable");var pu=l2;function u2(e){var t=uU(e);return t.length==1&&t[0][2]?pu(t[0][0],t[0][1]):function(n){return n===e||lU(n,e,t)}}r(u2,"baseMatches");var dU=u2;function d2(e,t){return e!=null&&t in Object(e)}r(d2,"baseHasIn");var pU=d2;function p2(e,t,n){t=Hn(t,e);for(var o=-1,i=t.length,a=!1;++o<i;){var s=$r(t[o]);if(!(a=e!=null&&n(e,s)))break;e=e[s]}return a||++o!=i?a:(i=e==null?0:e.length,!!i&&fi(i)&&In(s,i)&&(q(e)||qn(e)))}r(p2,"hasPath");var fu=p2;function f2(e,t){return e!=null&&fu(e,t,pU)}r(f2,"hasIn");var fU=f2;var m2=1,h2=2;function g2(e,t){return hi(e)&&du(t)?pu($r(e),t):function(n){var o=ko(n,e);return o===void 0&&o===t?fU(n,e):uu(t,o,m2|h2)}}r(g2,"baseMatchesProperty");var mU=g2;function T2(e){return function(t){return t?.[e]}}r(T2,"baseProperty");var hU=T2;function E2(e){return function(t){return Si(t,e)}}r(E2,"basePropertyDeep");var gU=E2;function S2(e){return hi(e)?hU($r(e)):gU(e)}r(S2,"property");var TU=S2;function y2(e){return typeof e=="function"?e:e==null?yr:typeof e=="object"?q(e)?mU(e[0],e[1]):dU(e):TU(e)}r(y2,"baseIteratee");var dt=y2;function _2(e,t,n,o){for(var i=-1,a=e==null?0:e.length;++i<a;){var s=e[i];t(o,s,n(s),e)}return o}r(_2,"arrayAggregator");var EU=_2;function x2(e){return function(t,n,o){for(var i=-1,a=Object(t),s=o(t),c=s.length;c--;){var l=s[e?c:++i];if(n(a[l],l,a)===!1)break}return t}}r(x2,"createBaseFor");var SU=x2;var b2=SU(),yU=b2;function R2(e,t){return e&&yU(e,t,he)}r(R2,"baseForOwn");var _U=R2;function k2(e,t){return function(n,o){if(n==null)return n;if(!ut(n))return e(n,o);for(var i=n.length,a=t?i:-1,s=Object(n);(t?a--:++a<i)&&o(s[a],a,s)!==!1;);return n}}r(k2,"createBaseEach");var xU=k2;var A2=xU(_U),nr=A2;function U2(e,t,n,o){return nr(e,function(i,a,s){t(o,i,n(i),s)}),o}r(U2,"baseAggregator");var bU=U2;function v2(e,t){return function(n,o){var i=q(n)?EU:bU,a=t?t():{};return i(n,e,dt(o,2),a)}}r(v2,"createAggregator");var mu=v2;var RU=Object.prototype,C2=RU.hasOwnProperty,L2=Dn(function(e,t){e=Object(e);var n=-1,o=t.length,i=o>2?t[2]:void 0;for(i&&Bn(t[0],t[1],i)&&(o=1);++n<o;)for(var a=t[n],s=Gn(a),c=-1,l=s.length;++c<l;){var d=s[c],f=e[d];(f===void 0||Jr(f,RU[d])&&!C2.call(e,d))&&(e[d]=a[d])}return e}),Oi=L2;function O2(e){return qe(e)&&ut(e)}r(O2,"isArrayLikeObject");var Ss=O2;function N2(e,t,n){for(var o=-1,i=e==null?0:e.length;++o<i;)if(n(t,e[o]))return!0;return!1}r(N2,"arrayIncludesWith");var hu=N2;var M2=200;function w2(e,t,n,o){var i=-1,a=Yl,s=!0,c=e.length,l=[],d=t.length;if(!c)return l;n&&(t=Yr(t,Zr(n))),o?(a=hu,s=!1):t.length>=M2&&(a=Ci,s=!1,t=new vi(t));e:for(;++i<c;){var f=e[i],g=n==null?f:n(f);if(f=o||f!==0?f:0,s&&g===g){for(var _=d;_--;)if(t[_]===g)continue e;l.push(f)}else a(t,g,o)||l.push(f)}return l}r(w2,"baseDifference");var gu=w2;var F2=Dn(function(e,t){return Ss(e)?gu(e,_i(t,1,Ss,!0)):[]}),Jn=F2;function I2(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}r(I2,"last");var tn=I2;function P2(e,t,n){var o=e==null?0:e.length;return o?(t=n||t===void 0?1:Kr(t),Zl(e,t<0?0:t,o)):[]}r(P2,"drop");var tt=P2;function D2(e,t,n){var o=e==null?0:e.length;return o?(t=n||t===void 0?1:Kr(t),t=o-t,Zl(e,0,t<0?0:t)):[]}r(D2,"dropRight");var mn=D2;function B2(e){return typeof e=="function"?e:yr}r(B2,"castFunction");var kU=B2;function q2(e,t){var n=q(e)?zl:nr;return n(e,kU(t))}r(q2,"forEach");var V=q2;function G2(e,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(!t(e[n],n,e))return!1;return!0}r(G2,"arrayEvery");var AU=G2;function j2(e,t){var n=!0;return nr(e,function(o,i,a){return n=!!t(o,i,a),n}),n}r(j2,"baseEvery");var UU=j2;function V2(e,t,n){var o=q(e)?AU:UU;return n&&Bn(e,t,n)&&(t=void 0),o(e,dt(t,3))}r(V2,"every");var bt=V2;function W2(e,t){var n=[];return nr(e,function(o,i,a){t(o,i,a)&&n.push(o)}),n}r(W2,"baseFilter");var Tu=W2;function z2(e,t){var n=q(e)?Ri:Tu;return n(e,dt(t,3))}r(z2,"filter");var wt=z2;function H2(e){return function(t,n,o){var i=Object(t);if(!ut(t)){var a=dt(n,3);t=he(t),n=r(function(c){return a(i[c],c,i)},"predicate")}var s=e(t,n,o);return s>-1?i[a?t[s]:s]:void 0}}r(H2,"createFind");var vU=H2;var Y2=Math.max;function K2(e,t,n){var o=e==null?0:e.length;if(!o)return-1;var i=n==null?0:Kr(n);return i<0&&(i=Y2(o+i,0)),Hl(e,dt(t,3),i)}r(K2,"findIndex");var CU=K2;var J2=vU(CU),rn=J2;function Q2(e){return e&&e.length?e[0]:void 0}r(Q2,"head");var pt=Q2;function X2(e,t){var n=-1,o=ut(e)?Array(e.length):[];return nr(e,function(i,a,s){o[++n]=t(i,a,s)}),o}r(X2,"baseMap");var LU=X2;function Z2(e,t){var n=q(e)?Yr:LU;return n(e,dt(t,3))}r(Z2,"map");var G=Z2;function $2(e,t){return _i(G(e,t),1)}r($2,"flatMap");var zt=$2;var eV=Object.prototype,tV=eV.hasOwnProperty,rV=mu(function(e,t,n){tV.call(e,n)?e[n].push(t):pi(e,n,[t])}),FS=rV;var nV=Object.prototype,oV=nV.hasOwnProperty;function iV(e,t){return e!=null&&oV.call(e,t)}r(iV,"baseHas");var OU=iV;function aV(e,t){return e!=null&&fu(e,t,OU)}r(aV,"has");var W=aV;var sV="[object String]";function cV(e){return typeof e=="string"||!q(e)&&qe(e)&&Ut(e)==sV}r(cV,"isString");var Tt=cV;function lV(e,t){return Yr(t,function(n){return e[n]})}r(lV,"baseValues");var NU=lV;function uV(e){return e==null?[]:NU(e,he(e))}r(uV,"values");var Ee=uV;var dV=Math.max;function pV(e,t,n,o){e=ut(e)?e:Ee(e),n=n&&!o?Kr(n):0;var i=e.length;return n<0&&(n=dV(i+n,0)),Tt(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&di(e,t,n)>-1}r(pV,"includes");var we=pV;var fV=Math.max;function mV(e,t,n){var o=e==null?0:e.length;if(!o)return-1;var i=n==null?0:Kr(n);return i<0&&(i=fV(o+i,0)),di(e,t,i)}r(mV,"indexOf");var Eu=mV;var hV="[object Map]",gV="[object Set]",TV=Object.prototype,EV=TV.hasOwnProperty;function SV(e){if(e==null)return!0;if(ut(e)&&(q(e)||typeof e=="string"||typeof e.splice=="function"||pn(e)||mi(e)||qn(e)))return!e.length;var t=Or(e);if(t==hV||t==gV)return!e.size;if(Xr(e))return!Ql(e).length;for(var n in e)if(EV.call(e,n))return!1;return!0}r(SV,"isEmpty");var re=SV;var yV="[object RegExp]";function _V(e){return qe(e)&&Ut(e)==yV}r(_V,"baseIsRegExp");var MU=_V;var wU=_r&&_r.isRegExp,xV=wU?Zr(wU):MU,xr=xV;function bV(e){return e===void 0}r(bV,"isUndefined");var Ft=bV;var RV="Expected a function";function kV(e){if(typeof e!="function")throw new TypeError(RV);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}r(kV,"negate");var FU=kV;function AV(e,t,n,o){if(!Ge(e))return e;t=Hn(t,e);for(var i=-1,a=t.length,s=a-1,c=e;c!=null&&++i<a;){var l=$r(t[i]),d=n;if(l==="__proto__"||l==="constructor"||l==="prototype")return e;if(i!=s){var f=c[l];d=o?o(f,l,c):void 0,d===void 0&&(d=Ge(f)?f:In(t[i+1])?[]:{})}Pn(c,l,d),c=c[l]}return e}r(AV,"baseSet");var IU=AV;function UV(e,t,n){for(var o=-1,i=t.length,a={};++o<i;){var s=t[o],c=Si(e,s);n(c,s)&&IU(a,Hn(s,e),c)}return a}r(UV,"basePickBy");var PU=UV;function vV(e,t){if(e==null)return{};var n=Yr(ru(e),function(o){return[o]});return t=dt(t),PU(e,n,function(o,i){return t(o,i[0])})}r(vV,"pickBy");var or=vV;var CV=mu(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]}),IS=CV;function LV(e,t,n,o,i){return i(e,function(a,s,c){n=o?(o=!1,a):t(n,a,s,c)}),n}r(LV,"baseReduce");var DU=LV;function OV(e,t,n){var o=q(e)?pA:DU,i=arguments.length<3;return o(e,dt(t,4),n,i,nr)}r(OV,"reduce");var ft=OV;function NV(e,t){var n=q(e)?Ri:Tu;return n(e,FU(dt(t,3)))}r(NV,"reject");var Qn=NV;function MV(e,t){var n;return nr(e,function(o,i,a){return n=t(o,i,a),!n}),!!n}r(MV,"baseSome");var BU=MV;function wV(e,t,n){var o=q(e)?su:BU;return n&&Bn(e,t,n)&&(t=void 0),o(e,dt(t,3))}r(wV,"some");var Nr=wV;var FV=1/0,IV=Kn&&1/Li(new Kn([,-0]))[1]==FV?function(e){return new Kn(e)}:je,qU=IV;var PV=200;function DV(e,t,n){var o=-1,i=Yl,a=e.length,s=!0,c=[],l=c;if(n)s=!1,i=hu;else if(a>=PV){var d=t?null:qU(e);if(d)return Li(d);s=!1,i=Ci,l=new vi}else l=t?[]:c;e:for(;++o<a;){var f=e[o],g=t?t(f):f;if(f=n||f!==0?f:0,s&&g===g){for(var _=l.length;_--;)if(l[_]===g)continue e;t&&l.push(g),c.push(f)}else i(l,g,n)||(l!==c&&l.push(g),c.push(f))}return c}r(DV,"baseUniq");var GU=DV;function BV(e){return e&&e.length?GU(e):[]}r(BV,"uniq");var Xn=BV;var qV=Dn(function(e,t){return Ss(e)?gu(e,t):[]}),PS=qV;function Ni(e){console&&console.error&&console.error(`Error: ${e}`)}r(Ni,"PRINT_ERROR");function ys(e){console&&console.warn&&console.warn(`Warning: ${e}`)}r(ys,"PRINT_WARNING");function _s(e){let t=new Date().getTime(),n=e();return{time:new Date().getTime()-t,value:n}}r(_s,"timer");function xs(e){function t(){}r(t,"FakeConstructor"),t.prototype=e;let n=new t;function o(){return typeof n.bar}return r(o,"fakeAccess"),o(),o(),e;(0,eval)(e)}r(xs,"toFastProperties");function GV(e){return jV(e)?e.LABEL:e.name}r(GV,"tokenLabel");function jV(e){return Tt(e.LABEL)&&e.LABEL!==""}r(jV,"hasTokenLabel");var ur=class{static{r(this,"AbstractProduction")}get definition(){return this._definition}set definition(t){this._definition=t}constructor(t){this._definition=t}accept(t){t.visit(this),V(this.definition,n=>{n.accept(t)})}},Re=class extends ur{static{r(this,"NonTerminal")}constructor(t){super([]),this.idx=1,vt(this,or(t,n=>n!==void 0))}set definition(t){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(t){t.visit(this)}},Ht=class extends ur{static{r(this,"Rule")}constructor(t){super(t.definition),this.orgText="",vt(this,or(t,n=>n!==void 0))}},ke=class extends ur{static{r(this,"Alternative")}constructor(t){super(t.definition),this.ignoreAmbiguities=!1,vt(this,or(t,n=>n!==void 0))}},Le=class extends ur{static{r(this,"Option")}constructor(t){super(t.definition),this.idx=1,vt(this,or(t,n=>n!==void 0))}},rt=class extends ur{static{r(this,"RepetitionMandatory")}constructor(t){super(t.definition),this.idx=1,vt(this,or(t,n=>n!==void 0))}},nt=class extends ur{static{r(this,"RepetitionMandatoryWithSeparator")}constructor(t){super(t.definition),this.idx=1,vt(this,or(t,n=>n!==void 0))}},ge=class extends ur{static{r(this,"Repetition")}constructor(t){super(t.definition),this.idx=1,vt(this,or(t,n=>n!==void 0))}},Je=class extends ur{static{r(this,"RepetitionWithSeparator")}constructor(t){super(t.definition),this.idx=1,vt(this,or(t,n=>n!==void 0))}},Qe=class extends ur{static{r(this,"Alternation")}get definition(){return this._definition}set definition(t){this._definition=t}constructor(t){super(t.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,vt(this,or(t,n=>n!==void 0))}},se=class{static{r(this,"Terminal")}constructor(t){this.idx=1,vt(this,or(t,n=>n!==void 0))}accept(t){t.visit(this)}};function Su(e){return G(e,Mi)}r(Su,"serializeGrammar");function Mi(e){function t(n){return G(n,Mi)}if(r(t,"convertDefinition"),e instanceof Re){let n={type:"NonTerminal",name:e.nonTerminalName,idx:e.idx};return Tt(e.label)&&(n.label=e.label),n}else{if(e instanceof ke)return{type:"Alternative",definition:t(e.definition)};if(e instanceof Le)return{type:"Option",idx:e.idx,definition:t(e.definition)};if(e instanceof rt)return{type:"RepetitionMandatory",idx:e.idx,definition:t(e.definition)};if(e instanceof nt)return{type:"RepetitionMandatoryWithSeparator",idx:e.idx,separator:Mi(new se({terminalType:e.separator})),definition:t(e.definition)};if(e instanceof Je)return{type:"RepetitionWithSeparator",idx:e.idx,separator:Mi(new se({terminalType:e.separator})),definition:t(e.definition)};if(e instanceof ge)return{type:"Repetition",idx:e.idx,definition:t(e.definition)};if(e instanceof Qe)return{type:"Alternation",idx:e.idx,definition:t(e.definition)};if(e instanceof se){let n={type:"Terminal",name:e.terminalType.name,label:GV(e.terminalType),idx:e.idx};Tt(e.label)&&(n.terminalLabel=e.label);let o=e.terminalType.PATTERN;return e.terminalType.PATTERN&&(n.pattern=xr(o)?o.source:o),n}else{if(e instanceof Ht)return{type:"Rule",name:e.name,orgText:e.orgText,definition:t(e.definition)};throw Error("non exhaustive match")}}}r(Mi,"serializeProduction");var Yt=class{static{r(this,"GAstVisitor")}visit(t){let n=t;switch(n.constructor){case Re:return this.visitNonTerminal(n);case ke:return this.visitAlternative(n);case Le:return this.visitOption(n);case rt:return this.visitRepetitionMandatory(n);case nt:return this.visitRepetitionMandatoryWithSeparator(n);case Je:return this.visitRepetitionWithSeparator(n);case ge:return this.visitRepetition(n);case Qe:return this.visitAlternation(n);case se:return this.visitTerminal(n);case Ht:return this.visitRule(n);default:throw Error("non exhaustive match")}}visitNonTerminal(t){}visitAlternative(t){}visitOption(t){}visitRepetition(t){}visitRepetitionMandatory(t){}visitRepetitionMandatoryWithSeparator(t){}visitRepetitionWithSeparator(t){}visitAlternation(t){}visitTerminal(t){}visitRule(t){}};function DS(e){return e instanceof ke||e instanceof Le||e instanceof ge||e instanceof rt||e instanceof nt||e instanceof Je||e instanceof se||e instanceof Ht}r(DS,"isSequenceProd");function Uo(e,t=[]){return e instanceof Le||e instanceof ge||e instanceof Je?!0:e instanceof Qe?Nr(e.definition,o=>Uo(o,t)):e instanceof Re&&we(t,e)?!1:e instanceof ur?(e instanceof Re&&t.push(e),bt(e.definition,o=>Uo(o,t))):!1}r(Uo,"isOptionalProd");function BS(e){return e instanceof Qe}r(BS,"isBranchingProd");function ir(e){if(e instanceof Re)return"SUBRULE";if(e instanceof Le)return"OPTION";if(e instanceof Qe)return"OR";if(e instanceof rt)return"AT_LEAST_ONE";if(e instanceof nt)return"AT_LEAST_ONE_SEP";if(e instanceof Je)return"MANY_SEP";if(e instanceof ge)return"MANY";if(e instanceof se)return"CONSUME";throw Error("non exhaustive match")}r(ir,"getProductionDslName");var hn=class{static{r(this,"RestWalker")}walk(t,n=[]){V(t.definition,(o,i)=>{let a=tt(t.definition,i+1);if(o instanceof Re)this.walkProdRef(o,a,n);else if(o instanceof se)this.walkTerminal(o,a,n);else if(o instanceof ke)this.walkFlat(o,a,n);else if(o instanceof Le)this.walkOption(o,a,n);else if(o instanceof rt)this.walkAtLeastOne(o,a,n);else if(o instanceof nt)this.walkAtLeastOneSep(o,a,n);else if(o instanceof Je)this.walkManySep(o,a,n);else if(o instanceof ge)this.walkMany(o,a,n);else if(o instanceof Qe)this.walkOr(o,a,n);else throw Error("non exhaustive match")})}walkTerminal(t,n,o){}walkProdRef(t,n,o){}walkFlat(t,n,o){let i=n.concat(o);this.walk(t,i)}walkOption(t,n,o){let i=n.concat(o);this.walk(t,i)}walkAtLeastOne(t,n,o){let i=[new Le({definition:t.definition})].concat(n,o);this.walk(t,i)}walkAtLeastOneSep(t,n,o){let i=jU(t,n,o);this.walk(t,i)}walkMany(t,n,o){let i=[new Le({definition:t.definition})].concat(n,o);this.walk(t,i)}walkManySep(t,n,o){let i=jU(t,n,o);this.walk(t,i)}walkOr(t,n,o){let i=n.concat(o);V(t.definition,a=>{let s=new ke({definition:[a]});this.walk(s,i)})}};function jU(e,t,n){return[new Le({definition:[new se({terminalType:e.separator})].concat(e.definition)})].concat(t,n)}r(jU,"restForRepetitionWithSeparator");function vo(e){if(e instanceof Re)return vo(e.referencedRule);if(e instanceof se)return zV(e);if(DS(e))return VV(e);if(BS(e))return WV(e);throw Error("non exhaustive match")}r(vo,"first");function VV(e){let t=[],n=e.definition,o=0,i=n.length>o,a,s=!0;for(;i&&s;)a=n[o],s=Uo(a),t=t.concat(vo(a)),o=o+1,i=n.length>o;return Xn(t)}r(VV,"firstForSequence");function WV(e){let t=G(e.definition,n=>vo(n));return Xn(gt(t))}r(WV,"firstForBranching");function zV(e){return[e.terminalType]}r(zV,"firstForTerminal");var yu="_~IN~_";var qS=class extends hn{static{r(this,"ResyncFollowsWalker")}constructor(t){super(),this.topProd=t,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(t,n,o){}walkProdRef(t,n,o){let i=HV(t.referencedRule,t.idx)+this.topProd.name,a=n.concat(o),s=new ke({definition:a}),c=vo(s);this.follows[i]=c}};function VU(e){let t={};return V(e,n=>{let o=new qS(n).startWalking();vt(t,o)}),t}r(VU,"computeAllProdsFollows");function HV(e,t){return e.name+t+yu}r(HV,"buildBetweenProdsFollowPrefix");function J(e){return e.charCodeAt(0)}r(J,"cc");function _u(e,t){Array.isArray(e)?e.forEach(function(n){t.push(n)}):t.push(e)}r(_u,"insertToSet");function wi(e,t){if(e[t]===!0)throw"duplicate flag "+t;let n=e[t];e[t]=!0}r(wi,"addFlag");function Co(e){if(e===void 0)throw Error("Internal Error - Should never get here!");return!0}r(Co,"ASSERT_EXISTS");function bs(){throw Error("Internal Error - Should never get here!")}r(bs,"ASSERT_NEVER_REACH_HERE");function GS(e){return e.type==="Character"}r(GS,"isCharacter");var Rs=[];for(let e=J("0");e<=J("9");e++)Rs.push(e);var ks=[J("_")].concat(Rs);for(let e=J("a");e<=J("z");e++)ks.push(e);for(let e=J("A");e<=J("Z");e++)ks.push(e);var jS=[J(" "),J("\f"),J(`
`),J("\r"),J("	"),J("\v"),J("	"),J("\xA0"),J("\u1680"),J("\u2000"),J("\u2001"),J("\u2002"),J("\u2003"),J("\u2004"),J("\u2005"),J("\u2006"),J("\u2007"),J("\u2008"),J("\u2009"),J("\u200A"),J("\u2028"),J("\u2029"),J("\u202F"),J("\u205F"),J("\u3000"),J("\uFEFF")];var YV=/[0-9a-fA-F]/,xu=/[0-9]/,KV=/[1-9]/,As=class{static{r(this,"RegExpParser")}constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(t){this.idx=t.idx,this.input=t.input,this.groupIdx=t.groupIdx}pattern(t){this.idx=0,this.input=t,this.groupIdx=0,this.consumeChar("/");let n=this.disjunction();this.consumeChar("/");let o={type:"Flags",loc:{begin:this.idx,end:t.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":wi(o,"global");break;case"i":wi(o,"ignoreCase");break;case"m":wi(o,"multiLine");break;case"u":wi(o,"unicode");break;case"y":wi(o,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:o,value:n,loc:this.loc(0)}}disjunction(){let t=[],n=this.idx;for(t.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),t.push(this.alternative());return{type:"Disjunction",value:t,loc:this.loc(n)}}alternative(){let t=[],n=this.idx;for(;this.isTerm();)t.push(this.term());return{type:"Alternative",value:t,loc:this.loc(n)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){let t=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(t)};case"$":return{type:"EndAnchor",loc:this.loc(t)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(t)};case"B":return{type:"NonWordBoundary",loc:this.loc(t)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let n;switch(this.popChar()){case"=":n="Lookahead";break;case"!":n="NegativeLookahead";break}Co(n);let o=this.disjunction();return this.consumeChar(")"),{type:n,value:o,loc:this.loc(t)}}return bs()}quantifier(t=!1){let n,o=this.idx;switch(this.popChar()){case"*":n={atLeast:0,atMost:1/0};break;case"+":n={atLeast:1,atMost:1/0};break;case"?":n={atLeast:0,atMost:1};break;case"{":let i=this.integerIncludingZero();switch(this.popChar()){case"}":n={atLeast:i,atMost:i};break;case",":let a;this.isDigit()?(a=this.integerIncludingZero(),n={atLeast:i,atMost:a}):n={atLeast:i,atMost:1/0},this.consumeChar("}");break}if(t===!0&&n===void 0)return;Co(n);break}if(!(t===!0&&n===void 0)&&Co(n))return this.peekChar(0)==="?"?(this.consumeChar("?"),n.greedy=!1):n.greedy=!0,n.type="Quantifier",n.loc=this.loc(o),n}atom(){let t,n=this.idx;switch(this.peekChar()){case".":t=this.dotAll();break;case"\\":t=this.atomEscape();break;case"[":t=this.characterClass();break;case"(":t=this.group();break}return t===void 0&&this.isPatternCharacter()&&(t=this.patternCharacter()),Co(t)?(t.loc=this.loc(n),this.isQuantifier()&&(t.quantifier=this.quantifier()),t):bs()}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[J(`
`),J("\r"),J("\u2028"),J("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let t,n=!1;switch(this.popChar()){case"d":t=Rs;break;case"D":t=Rs,n=!0;break;case"s":t=jS;break;case"S":t=jS,n=!0;break;case"w":t=ks;break;case"W":t=ks,n=!0;break}return Co(t)?{type:"Set",value:t,complement:n}:bs()}controlEscapeAtom(){let t;switch(this.popChar()){case"f":t=J("\f");break;case"n":t=J(`
`);break;case"r":t=J("\r");break;case"t":t=J("	");break;case"v":t=J("\v");break}return Co(t)?{type:"Character",value:t}:bs()}controlLetterEscapeAtom(){this.consumeChar("c");let t=this.popChar();if(/[a-zA-Z]/.test(t)===!1)throw Error("Invalid ");return{type:"Character",value:t.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:J("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){let t=this.popChar();return{type:"Character",value:J(t)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:let t=this.popChar();return{type:"Character",value:J(t)}}}characterClass(){let t=[],n=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),n=!0);this.isClassAtom();){let o=this.classAtom(),i=o.type==="Character";if(GS(o)&&this.isRangeDash()){this.consumeChar("-");let a=this.classAtom(),s=a.type==="Character";if(GS(a)){if(a.value<o.value)throw Error("Range out of order in character class");t.push({from:o.value,to:a.value})}else _u(o.value,t),t.push(J("-")),_u(a.value,t)}else _u(o.value,t)}return this.consumeChar("]"),{type:"Set",complement:n,value:t}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:J("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let t=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),t=!1;break;default:this.groupIdx++;break}let n=this.disjunction();this.consumeChar(")");let o={type:"Group",capturing:t,value:n};return t&&(o.idx=this.groupIdx),o}positiveInteger(){let t=this.popChar();if(KV.test(t)===!1)throw Error("Expecting a positive integer");for(;xu.test(this.peekChar(0));)t+=this.popChar();return parseInt(t,10)}integerIncludingZero(){let t=this.popChar();if(xu.test(t)===!1)throw Error("Expecting an integer");for(;xu.test(this.peekChar(0));)t+=this.popChar();return parseInt(t,10)}patternCharacter(){let t=this.popChar();switch(t){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:J(t)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return xu.test(this.peekChar(0))}isClassAtom(t=0){switch(this.peekChar(t)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){let t=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(t)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(t){let n="";for(let i=0;i<t;i++){let a=this.popChar();if(YV.test(a)===!1)throw Error("Expecting a HexDecimal digits");n+=a}return{type:"Character",value:parseInt(n,16)}}peekChar(t=0){return this.input[this.idx+t]}popChar(){let t=this.peekChar(0);return this.consumeChar(void 0),t}consumeChar(t){if(t!==void 0&&this.input[this.idx]!==t)throw Error("Expected: '"+t+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(t){return{begin:t,end:this.idx}}};var Zn=class{static{r(this,"BaseRegExpVisitor")}visitChildren(t){for(let n in t){let o=t[n];t.hasOwnProperty(n)&&(o.type!==void 0?this.visit(o):Array.isArray(o)&&o.forEach(i=>{this.visit(i)},this))}}visit(t){switch(t.type){case"Pattern":this.visitPattern(t);break;case"Flags":this.visitFlags(t);break;case"Disjunction":this.visitDisjunction(t);break;case"Alternative":this.visitAlternative(t);break;case"StartAnchor":this.visitStartAnchor(t);break;case"EndAnchor":this.visitEndAnchor(t);break;case"WordBoundary":this.visitWordBoundary(t);break;case"NonWordBoundary":this.visitNonWordBoundary(t);break;case"Lookahead":this.visitLookahead(t);break;case"NegativeLookahead":this.visitNegativeLookahead(t);break;case"Character":this.visitCharacter(t);break;case"Set":this.visitSet(t);break;case"Group":this.visitGroup(t);break;case"GroupBackReference":this.visitGroupBackReference(t);break;case"Quantifier":this.visitQuantifier(t);break}this.visitChildren(t)}visitPattern(t){}visitFlags(t){}visitDisjunction(t){}visitAlternative(t){}visitStartAnchor(t){}visitEndAnchor(t){}visitWordBoundary(t){}visitNonWordBoundary(t){}visitLookahead(t){}visitNegativeLookahead(t){}visitCharacter(t){}visitSet(t){}visitGroup(t){}visitGroupBackReference(t){}visitQuantifier(t){}};var bu={},JV=new As;function Fi(e){let t=e.toString();if(bu.hasOwnProperty(t))return bu[t];{let n=JV.pattern(t);return bu[t]=n,n}}r(Fi,"getRegExpAst");function WU(){bu={}}r(WU,"clearRegExpParserCache");var HU="Complement Sets are not supported for first char optimization",Us=`Unable to use "first char" lexer optimizations:
`;function YU(e,t=!1){try{let n=Fi(e);return VS(n.value,{},n.flags.ignoreCase)}catch(n){if(n.message===HU)t&&ys(`${Us}	Unable to optimize: < ${e.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let o="";t&&(o=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),Ni(`${Us}
	Failed parsing: < ${e.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+o)}}return[]}r(YU,"getOptimizedStartCodesIndices");function VS(e,t,n){switch(e.type){case"Disjunction":for(let i=0;i<e.value.length;i++)VS(e.value[i],t,n);break;case"Alternative":let o=e.value;for(let i=0;i<o.length;i++){let a=o[i];switch(a.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}let s=a;switch(s.type){case"Character":Ru(s.value,t,n);break;case"Set":if(s.complement===!0)throw Error(HU);V(s.value,l=>{if(typeof l=="number")Ru(l,t,n);else{let d=l;if(n===!0)for(let f=d.from;f<=d.to;f++)Ru(f,t,n);else{for(let f=d.from;f<=d.to&&f<Ii;f++)Ru(f,t,n);if(d.to>=Ii){let f=d.from>=Ii?d.from:Ii,g=d.to,_=nn(f),y=nn(g);for(let w=_;w<=y;w++)t[w]=w}}}});break;case"Group":VS(s.value,t,n);break;default:throw Error("Non Exhaustive Match")}let c=s.quantifier!==void 0&&s.quantifier.atLeast===0;if(s.type==="Group"&&WS(s)===!1||s.type!=="Group"&&c===!1)break}break;default:throw Error("non exhaustive match!")}return Ee(t)}r(VS,"firstCharOptimizedIndices");function Ru(e,t,n){let o=nn(e);t[o]=o,n===!0&&QV(e,t)}r(Ru,"addOptimizedIdxToResult");function QV(e,t){let n=String.fromCharCode(e),o=n.toUpperCase();if(o!==n){let i=nn(o.charCodeAt(0));t[i]=i}else{let i=n.toLowerCase();if(i!==n){let a=nn(i.charCodeAt(0));t[a]=a}}}r(QV,"handleIgnoreCase");function zU(e,t){return rn(e.value,n=>{if(typeof n=="number")return we(t,n);{let o=n;return rn(t,i=>o.from<=i&&i<=o.to)!==void 0}})}r(zU,"findCode");function WS(e){let t=e.quantifier;return t&&t.atLeast===0?!0:e.value?q(e.value)?bt(e.value,WS):WS(e.value):!1}r(WS,"isWholeOptional");var zS=class extends Zn{static{r(this,"CharCodeFinder")}constructor(t){super(),this.targetCharCodes=t,this.found=!1}visitChildren(t){if(this.found!==!0){switch(t.type){case"Lookahead":this.visitLookahead(t);return;case"NegativeLookahead":this.visitNegativeLookahead(t);return}super.visitChildren(t)}}visitCharacter(t){we(this.targetCharCodes,t.value)&&(this.found=!0)}visitSet(t){t.complement?zU(t,this.targetCharCodes)===void 0&&(this.found=!0):zU(t,this.targetCharCodes)!==void 0&&(this.found=!0)}};function ku(e,t){if(t instanceof RegExp){let n=Fi(t),o=new zS(e);return o.visit(n),o.found}else return rn(t,n=>we(e,n.charCodeAt(0)))!==void 0}r(ku,"canMatchCharCode");var Lo="PATTERN",Pi="defaultMode",Au="modes",YS=typeof new RegExp("(?:)").sticky=="boolean";function QU(e,t){t=Oi(t,{useSticky:YS,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:r((S,h)=>h(),"tracer")});let n=t.tracer;n("initCharCodeToOptimizedIndexMap",()=>{mW()});let o;n("Reject Lexer.NA",()=>{o=Qn(e,S=>S[Lo]===Ve.NA)});let i=!1,a;n("Transform Patterns",()=>{i=!1,a=G(o,S=>{let h=S[Lo];if(xr(h)){let v=h.source;return v.length===1&&v!=="^"&&v!=="$"&&v!=="."&&!h.ignoreCase?v:v.length===2&&v[0]==="\\"&&!we(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],v[1])?v[1]:t.useSticky?JU(h):KU(h)}else{if(Wt(h))return i=!0,{exec:h};if(typeof h=="object")return i=!0,h;if(typeof h=="string"){if(h.length===1)return h;{let v=h.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),P=new RegExp(v);return t.useSticky?JU(P):KU(P)}}else throw Error("non exhaustive match")}})});let s,c,l,d,f;n("misc mapping",()=>{s=G(o,S=>S.tokenTypeIdx),c=G(o,S=>{let h=S.GROUP;if(h!==Ve.SKIPPED){if(Tt(h))return h;if(Ft(h))return!1;throw Error("non exhaustive match")}}),l=G(o,S=>{let h=S.LONGER_ALT;if(h)return q(h)?G(h,P=>Eu(o,P)):[Eu(o,h)]}),d=G(o,S=>S.PUSH_MODE),f=G(o,S=>W(S,"POP_MODE"))});let g;n("Line Terminator Handling",()=>{let S=ov(t.lineTerminatorCharacters);g=G(o,h=>!1),t.positionTracking!=="onlyOffset"&&(g=G(o,h=>W(h,"LINE_BREAKS")?!!h.LINE_BREAKS:nv(h,S)===!1&&ku(S,h.PATTERN)))});let _,y,w,O;n("Misc Mapping #2",()=>{_=G(o,tv),y=G(a,pW),w=ft(o,(S,h)=>{let v=h.GROUP;return Tt(v)&&v!==Ve.SKIPPED&&(S[v]=[]),S},{}),O=G(a,(S,h)=>({pattern:a[h],longerAlt:l[h],canLineTerminator:g[h],isCustom:_[h],short:y[h],group:c[h],push:d[h],pop:f[h],tokenTypeIdx:s[h],tokenType:o[h]}))});let B=!0,N=[];return t.safeMode||n("First Char Optimization",()=>{N=ft(o,(S,h,v)=>{if(typeof h.PATTERN=="string"){let P=h.PATTERN.charCodeAt(0),le=nn(P);HS(S,le,O[v])}else if(q(h.START_CHARS_HINT)){let P;V(h.START_CHARS_HINT,le=>{let sn=typeof le=="string"?le.charCodeAt(0):le,sr=nn(sn);P!==sr&&(P=sr,HS(S,sr,O[v]))})}else if(xr(h.PATTERN))if(h.PATTERN.unicode)B=!1,t.ensureOptimizations&&Ni(`${Us}	Unable to analyze < ${h.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{let P=YU(h.PATTERN,t.ensureOptimizations);re(P)&&(B=!1),V(P,le=>{HS(S,le,O[v])})}else t.ensureOptimizations&&Ni(`${Us}	TokenType: <${h.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),B=!1;return S},[])}),{emptyGroups:w,patternIdxToConfig:O,charCodeToPatternIdxToConfig:N,hasCustom:i,canBeOptimized:B}}r(QU,"analyzeTokenTypes");function XU(e,t){let n=[],o=ZV(e);n=n.concat(o.errors);let i=$V(o.valid),a=i.valid;return n=n.concat(i.errors),n=n.concat(XV(a)),n=n.concat(sW(a)),n=n.concat(cW(a,t)),n=n.concat(lW(a)),n}r(XU,"validatePatterns");function XV(e){let t=[],n=wt(e,o=>xr(o[Lo]));return t=t.concat(tW(n)),t=t.concat(oW(n)),t=t.concat(iW(n)),t=t.concat(aW(n)),t=t.concat(rW(n)),t}r(XV,"validateRegExpPattern");function ZV(e){let t=wt(e,i=>!W(i,Lo)),n=G(t,i=>({message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:Fe.MISSING_PATTERN,tokenTypes:[i]})),o=Jn(e,t);return{errors:n,valid:o}}r(ZV,"findMissingPatterns");function $V(e){let t=wt(e,i=>{let a=i[Lo];return!xr(a)&&!Wt(a)&&!W(a,"exec")&&!Tt(a)}),n=G(t,i=>({message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:Fe.INVALID_PATTERN,tokenTypes:[i]})),o=Jn(e,t);return{errors:n,valid:o}}r($V,"findInvalidPatterns");var eW=/[^\\][$]/;function tW(e){class t extends Zn{static{r(this,"EndAnchorFinder")}constructor(){super(...arguments),this.found=!1}visitEndAnchor(a){this.found=!0}}let n=wt(e,i=>{let a=i.PATTERN;try{let s=Fi(a),c=new t;return c.visit(s),c.found}catch{return eW.test(a.source)}});return G(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Fe.EOI_ANCHOR_FOUND,tokenTypes:[i]}))}r(tW,"findEndOfInputAnchor");function rW(e){let t=wt(e,o=>o.PATTERN.test(""));return G(t,o=>({message:"Token Type: ->"+o.name+"<- static 'PATTERN' must not match an empty string",type:Fe.EMPTY_MATCH_PATTERN,tokenTypes:[o]}))}r(rW,"findEmptyMatchRegExps");var nW=/[^\\[][\^]|^\^/;function oW(e){class t extends Zn{static{r(this,"StartAnchorFinder")}constructor(){super(...arguments),this.found=!1}visitStartAnchor(a){this.found=!0}}let n=wt(e,i=>{let a=i.PATTERN;try{let s=Fi(a),c=new t;return c.visit(s),c.found}catch{return nW.test(a.source)}});return G(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Fe.SOI_ANCHOR_FOUND,tokenTypes:[i]}))}r(oW,"findStartOfInputAnchor");function iW(e){let t=wt(e,o=>{let i=o[Lo];return i instanceof RegExp&&(i.multiline||i.global)});return G(t,o=>({message:"Token Type: ->"+o.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:Fe.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[o]}))}r(iW,"findUnsupportedFlags");function aW(e){let t=[],n=G(e,a=>ft(e,(s,c)=>(a.PATTERN.source===c.PATTERN.source&&!we(t,c)&&c.PATTERN!==Ve.NA&&(t.push(c),s.push(c)),s),[]));n=en(n);let o=wt(n,a=>a.length>1);return G(o,a=>{let s=G(a,l=>l.name);return{message:`The same RegExp pattern ->${pt(a).PATTERN}<-has been used in all of the following Token Types: ${s.join(", ")} <-`,type:Fe.DUPLICATE_PATTERNS_FOUND,tokenTypes:a}})}r(aW,"findDuplicatePatterns");function sW(e){let t=wt(e,o=>{if(!W(o,"GROUP"))return!1;let i=o.GROUP;return i!==Ve.SKIPPED&&i!==Ve.NA&&!Tt(i)});return G(t,o=>({message:"Token Type: ->"+o.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:Fe.INVALID_GROUP_TYPE_FOUND,tokenTypes:[o]}))}r(sW,"findInvalidGroupType");function cW(e,t){let n=wt(e,i=>i.PUSH_MODE!==void 0&&!we(t,i.PUSH_MODE));return G(n,i=>({message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,type:Fe.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}))}r(cW,"findModesThatDoNotExist");function lW(e){let t=[],n=ft(e,(o,i,a)=>{let s=i.PATTERN;return s===Ve.NA||(Tt(s)?o.push({str:s,idx:a,tokenType:i}):xr(s)&&dW(s)&&o.push({str:s.source,idx:a,tokenType:i})),o},[]);return V(e,(o,i)=>{V(n,({str:a,idx:s,tokenType:c})=>{if(i<s&&uW(a,o.PATTERN)){let l=`Token: ->${c.name}<- can never be matched.
Because it appears AFTER the Token Type ->${o.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;t.push({message:l,type:Fe.UNREACHABLE_PATTERN,tokenTypes:[o,c]})}})}),t}r(lW,"findUnreachablePatterns");function uW(e,t){if(xr(t)){let n=t.exec(e);return n!==null&&n.index===0}else{if(Wt(t))return t(e,0,[],{});if(W(t,"exec"))return t.exec(e,0,[],{});if(typeof t=="string")return t===e;throw Error("non exhaustive match")}}r(uW,"testTokenType");function dW(e){return rn([".","\\","[","]","|","^","$","(",")","?","*","+","{"],n=>e.source.indexOf(n)!==-1)===void 0}r(dW,"noMetaChar");function KU(e){let t=e.ignoreCase?"i":"";return new RegExp(`^(?:${e.source})`,t)}r(KU,"addStartOfInput");function JU(e){let t=e.ignoreCase?"iy":"y";return new RegExp(`${e.source}`,t)}r(JU,"addStickyFlag");function ZU(e,t,n){let o=[];return W(e,Pi)||o.push({message:"A MultiMode Lexer cannot be initialized without a <"+Pi+`> property in its definition
`,type:Fe.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),W(e,Au)||o.push({message:"A MultiMode Lexer cannot be initialized without a <"+Au+`> property in its definition
`,type:Fe.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),W(e,Au)&&W(e,Pi)&&!W(e.modes,e.defaultMode)&&o.push({message:`A MultiMode Lexer cannot be initialized with a ${Pi}: <${e.defaultMode}>which does not exist
`,type:Fe.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),W(e,Au)&&V(e.modes,(i,a)=>{V(i,(s,c)=>{if(Ft(s))o.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${a}> at index: <${c}>
`,type:Fe.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(W(s,"LONGER_ALT")){let l=q(s.LONGER_ALT)?s.LONGER_ALT:[s.LONGER_ALT];V(l,d=>{!Ft(d)&&!we(i,d)&&o.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${d.name}> on token <${s.name}> outside of mode <${a}>
`,type:Fe.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),o}r(ZU,"performRuntimeChecks");function $U(e,t,n){let o=[],i=!1,a=en(gt(Ee(e.modes))),s=Qn(a,l=>l[Lo]===Ve.NA),c=ov(n);return t&&V(s,l=>{let d=nv(l,c);if(d!==!1){let g={message:fW(l,d),type:d.issue,tokenType:l};o.push(g)}else W(l,"LINE_BREAKS")?l.LINE_BREAKS===!0&&(i=!0):ku(c,l.PATTERN)&&(i=!0)}),t&&!i&&o.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:Fe.NO_LINE_BREAKS_FLAGS}),o}r($U,"performWarningRuntimeChecks");function ev(e){let t={},n=he(e);return V(n,o=>{let i=e[o];if(q(i))t[o]=[];else throw Error("non exhaustive match")}),t}r(ev,"cloneEmptyGroups");function tv(e){let t=e.PATTERN;if(xr(t))return!1;if(Wt(t))return!0;if(W(t,"exec"))return!0;if(Tt(t))return!1;throw Error("non exhaustive match")}r(tv,"isCustomPattern");function pW(e){return Tt(e)&&e.length===1?e.charCodeAt(0):!1}r(pW,"isShortPattern");var rv={test:r(function(e){let t=e.length;for(let n=this.lastIndex;n<t;n++){let o=e.charCodeAt(n);if(o===10)return this.lastIndex=n+1,!0;if(o===13)return e.charCodeAt(n+1)===10?this.lastIndex=n+2:this.lastIndex=n+1,!0}return!1},"test"),lastIndex:0};function nv(e,t){if(W(e,"LINE_BREAKS"))return!1;if(xr(e.PATTERN)){try{ku(t,e.PATTERN)}catch(n){return{issue:Fe.IDENTIFY_TERMINATOR,errMsg:n.message}}return!1}else{if(Tt(e.PATTERN))return!1;if(tv(e))return{issue:Fe.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}r(nv,"checkLineBreaksIssues");function fW(e,t){if(t.issue===Fe.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${e.name}> Token Type
	 Root cause: ${t.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(t.issue===Fe.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${e.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}r(fW,"buildLineBreakIssueMessage");function ov(e){return G(e,n=>Tt(n)?n.charCodeAt(0):n)}r(ov,"getCharCodes");function HS(e,t,n){e[t]===void 0?e[t]=[n]:e[t].push(n)}r(HS,"addToMapOfArrays");var Ii=256,Uu=[];function nn(e){return e<Ii?e:Uu[e]}r(nn,"charCodeToOptimizedIndex");function mW(){if(re(Uu)){Uu=new Array(65536);for(let e=0;e<65536;e++)Uu[e]=e>255?255+~~(e/255):e}}r(mW,"initCharCodeToOptimizedIndexMap");function gn(e,t){let n=e.tokenTypeIdx;return n===t.tokenTypeIdx?!0:t.isParent===!0&&t.categoryMatchesMap[n]===!0}r(gn,"tokenStructuredMatcher");function Di(e,t){return e.tokenTypeIdx===t.tokenTypeIdx}r(Di,"tokenStructuredMatcherNoCategories");var iv=1,sv={};function Tn(e){let t=hW(e);gW(t),EW(t),TW(t),V(t,n=>{n.isParent=n.categoryMatches.length>0})}r(Tn,"augmentTokenTypes");function hW(e){let t=be(e),n=e,o=!0;for(;o;){n=en(gt(G(n,a=>a.CATEGORIES)));let i=Jn(n,t);t=t.concat(i),re(i)?o=!1:n=i}return t}r(hW,"expandCategories");function gW(e){V(e,t=>{KS(t)||(sv[iv]=t,t.tokenTypeIdx=iv++),av(t)&&!q(t.CATEGORIES)&&(t.CATEGORIES=[t.CATEGORIES]),av(t)||(t.CATEGORIES=[]),SW(t)||(t.categoryMatches=[]),yW(t)||(t.categoryMatchesMap={})})}r(gW,"assignTokenDefaultProps");function TW(e){V(e,t=>{t.categoryMatches=[],V(t.categoryMatchesMap,(n,o)=>{t.categoryMatches.push(sv[o].tokenTypeIdx)})})}r(TW,"assignCategoriesTokensProp");function EW(e){V(e,t=>{cv([],t)})}r(EW,"assignCategoriesMapProp");function cv(e,t){V(e,n=>{t.categoryMatchesMap[n.tokenTypeIdx]=!0}),V(t.CATEGORIES,n=>{let o=e.concat(t);we(o,n)||cv(o,n)})}r(cv,"singleAssignCategoriesToksMap");function KS(e){return W(e,"tokenTypeIdx")}r(KS,"hasShortKeyProperty");function av(e){return W(e,"CATEGORIES")}r(av,"hasCategoriesProperty");function SW(e){return W(e,"categoryMatches")}r(SW,"hasExtendingTokensTypesProperty");function yW(e){return W(e,"categoryMatchesMap")}r(yW,"hasExtendingTokensTypesMapProperty");function lv(e){return W(e,"tokenTypeIdx")}r(lv,"isTokenType");var JS={buildUnableToPopLexerModeMessage(e){return`Unable to pop Lexer Mode after encountering Token ->${e.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(e,t,n,o,i){return`unexpected character: ->${e.charAt(t)}<- at offset: ${t}, skipped ${n} characters.`}};var Fe;(function(e){e[e.MISSING_PATTERN=0]="MISSING_PATTERN",e[e.INVALID_PATTERN=1]="INVALID_PATTERN",e[e.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",e[e.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",e[e.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",e[e.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",e[e.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",e[e.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",e[e.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",e[e.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",e[e.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",e[e.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",e[e.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",e[e.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",e[e.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",e[e.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",e[e.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",e[e.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(Fe||(Fe={}));var vs={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:JS,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(vs);var Ve=class{static{r(this,"Lexer")}constructor(t,n=vs){if(this.lexerDefinition=t,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(i,a)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;let s=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${s}--> <${i}>`);let{time:c,value:l}=_s(a),d=c>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&d(`${s}<-- <${i}> time: ${c}ms`),this.traceInitIndent--,l}else return a()},typeof n=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=vt({},vs,n);let o=this.config.traceInitPerf;o===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof o=="number"&&(this.traceInitMaxIdent=o,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let i,a=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===vs.lineTerminatorsPattern)this.config.lineTerminatorsPattern=rv;else if(this.config.lineTerminatorCharacters===vs.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(n.safeMode&&n.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),q(t)?i={modes:{defaultMode:be(t)},defaultMode:Pi}:(a=!1,i=be(t))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(ZU(i,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat($U(i,this.trackStartLines,this.config.lineTerminatorCharacters))})),i.modes=i.modes?i.modes:{},V(i.modes,(c,l)=>{i.modes[l]=Qn(c,d=>Ft(d))});let s=he(i.modes);if(V(i.modes,(c,l)=>{this.TRACE_INIT(`Mode: <${l}> processing`,()=>{if(this.modes.push(l),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(XU(c,s))}),re(this.lexerDefinitionErrors)){Tn(c);let d;this.TRACE_INIT("analyzeTokenTypes",()=>{d=QU(c,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:n.positionTracking,ensureOptimizations:n.ensureOptimizations,safeMode:n.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[l]=d.patternIdxToConfig,this.charCodeToPatternIdxToConfig[l]=d.charCodeToPatternIdxToConfig,this.emptyGroups=vt({},this.emptyGroups,d.emptyGroups),this.hasCustom=d.hasCustom||this.hasCustom,this.canModeBeOptimized[l]=d.canBeOptimized}})}),this.defaultMode=i.defaultMode,!re(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){let l=G(this.lexerDefinitionErrors,d=>d.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+l)}V(this.lexerDefinitionWarning,c=>{ys(c.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(YS?(this.chopInput=yr,this.match=this.matchWithTest):(this.updateLastIndex=je,this.match=this.matchWithExec),a&&(this.handleModes=je),this.trackStartLines===!1&&(this.computeNewColumn=yr),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=je),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{let c=ft(this.canModeBeOptimized,(l,d,f)=>(d===!1&&l.push(f),l),[]);if(n.ensureOptimizations&&!re(c))throw Error(`Lexer Modes: < ${c.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{WU()}),this.TRACE_INIT("toFastProperties",()=>{xs(this)})})}tokenize(t,n=this.defaultMode){if(!re(this.lexerDefinitionErrors)){let i=G(this.lexerDefinitionErrors,a=>a.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(t,n)}tokenizeInternal(t,n){let o,i,a,s,c,l,d,f,g,_,y,w,O,B,N,S,h=t,v=h.length,P=0,le=0,sn=this.hasCustom?0:Math.floor(t.length/10),sr=new Array(sn),wo=[],yn=this.trackStartLines?1:void 0,Ar=this.trackStartLines?1:void 0,Jt=ev(this.emptyGroups),gc=this.trackStartLines,ja=this.config.lineTerminatorsPattern,Fo=0,Dr=[],ho=[],go=[],Va=[];Object.freeze(Va);let fr;function Wa(){return Dr}r(Wa,"getPossiblePatternsSlow");function Tc(yt){let Xt=nn(yt),_n=ho[Xt];return _n===void 0?Va:_n}r(Tc,"getPossiblePatternsOptimized");let Mg=r(yt=>{if(go.length===1&&yt.tokenType.PUSH_MODE===void 0){let Xt=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(yt);wo.push({offset:yt.startOffset,line:yt.startLine,column:yt.startColumn,length:yt.image.length,message:Xt})}else{go.pop();let Xt=tn(go);Dr=this.patternIdxToConfig[Xt],ho=this.charCodeToPatternIdxToConfig[Xt],Fo=Dr.length;let _n=this.canModeBeOptimized[Xt]&&this.config.safeMode===!1;ho&&_n?fr=Tc:fr=Wa}},"pop_mode");function za(yt){go.push(yt),ho=this.charCodeToPatternIdxToConfig[yt],Dr=this.patternIdxToConfig[yt],Fo=Dr.length,Fo=Dr.length;let Xt=this.canModeBeOptimized[yt]&&this.config.safeMode===!1;ho&&Xt?fr=Tc:fr=Wa}r(za,"push_mode"),za.call(this,n);let Qt,Ec=this.config.recoveryEnabled;for(;P<v;){l=null;let yt=h.charCodeAt(P),Xt=fr(yt),_n=Xt.length;for(o=0;o<_n;o++){Qt=Xt[o];let jt=Qt.pattern;d=null;let Ur=Qt.short;if(Ur!==!1?yt===Ur&&(l=jt):Qt.isCustom===!0?(S=jt.exec(h,P,sr,Jt),S!==null?(l=S[0],S.payload!==void 0&&(d=S.payload)):l=null):(this.updateLastIndex(jt,P),l=this.match(jt,t,P)),l!==null){if(c=Qt.longerAlt,c!==void 0){let Rt=c.length;for(a=0;a<Rt;a++){let vr=Dr[c[a]],cn=vr.pattern;if(f=null,vr.isCustom===!0?(S=cn.exec(h,P,sr,Jt),S!==null?(s=S[0],S.payload!==void 0&&(f=S.payload)):s=null):(this.updateLastIndex(cn,P),s=this.match(cn,t,P)),s&&s.length>l.length){l=s,d=f,Qt=vr;break}}}break}}if(l!==null){if(g=l.length,_=Qt.group,_!==void 0&&(y=Qt.tokenTypeIdx,w=this.createTokenInstance(l,P,y,Qt.tokenType,yn,Ar,g),this.handlePayload(w,d),_===!1?le=this.addToken(sr,le,w):Jt[_].push(w)),t=this.chopInput(t,g),P=P+g,Ar=this.computeNewColumn(Ar,g),gc===!0&&Qt.canLineTerminator===!0){let jt=0,Ur,Rt;ja.lastIndex=0;do Ur=ja.test(l),Ur===!0&&(Rt=ja.lastIndex-1,jt++);while(Ur===!0);jt!==0&&(yn=yn+jt,Ar=g-Rt,this.updateTokenEndLineColumnLocation(w,_,Rt,jt,yn,Ar,g))}this.handleModes(Qt,Mg,za,w)}else{let jt=P,Ur=yn,Rt=Ar,vr=Ec===!1;for(;vr===!1&&P<v;)for(t=this.chopInput(t,1),P++,i=0;i<Fo;i++){let cn=Dr[i],xn=cn.pattern,Sc=cn.short;if(Sc!==!1?h.charCodeAt(P)===Sc&&(vr=!0):cn.isCustom===!0?vr=xn.exec(h,P,sr,Jt)!==null:(this.updateLastIndex(xn,P),vr=xn.exec(t)!==null),vr===!0)break}if(O=P-jt,Ar=this.computeNewColumn(Ar,O),N=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(h,jt,O,Ur,Rt),wo.push({offset:jt,line:Ur,column:Rt,length:O,message:N}),Ec===!1)break}}return this.hasCustom||(sr.length=le),{tokens:sr,groups:Jt,errors:wo}}handleModes(t,n,o,i){if(t.pop===!0){let a=t.push;n(i),a!==void 0&&o.call(this,a)}else t.push!==void 0&&o.call(this,t.push)}chopInput(t,n){return t.substring(n)}updateLastIndex(t,n){t.lastIndex=n}updateTokenEndLineColumnLocation(t,n,o,i,a,s,c){let l,d;n!==void 0&&(l=o===c-1,d=l?-1:0,i===1&&l===!0||(t.endLine=a+d,t.endColumn=s-1+-d))}computeNewColumn(t,n){return t+n}createOffsetOnlyToken(t,n,o,i){return{image:t,startOffset:n,tokenTypeIdx:o,tokenType:i}}createStartOnlyToken(t,n,o,i,a,s){return{image:t,startOffset:n,startLine:a,startColumn:s,tokenTypeIdx:o,tokenType:i}}createFullToken(t,n,o,i,a,s,c){return{image:t,startOffset:n,endOffset:n+c-1,startLine:a,endLine:a,startColumn:s,endColumn:s+c-1,tokenTypeIdx:o,tokenType:i}}addTokenUsingPush(t,n,o){return t.push(o),n}addTokenUsingMemberAccess(t,n,o){return t[n]=o,n++,n}handlePayloadNoCustom(t,n){}handlePayloadWithCustom(t,n){n!==null&&(t.payload=n)}matchWithTest(t,n,o){return t.test(n)===!0?n.substring(o,t.lastIndex):null}matchWithExec(t,n){let o=t.exec(n);return o!==null?o[0]:null}};Ve.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";Ve.NA=/NOT_APPLICABLE/;function Oo(e){return QS(e)?e.LABEL:e.name}r(Oo,"tokenLabel");function QS(e){return Tt(e.LABEL)&&e.LABEL!==""}r(QS,"hasTokenLabel");var _W="parent",uv="categories",dv="label",pv="group",fv="push_mode",mv="pop_mode",hv="longer_alt",gv="line_breaks",Tv="start_chars_hint";function En(e){return xW(e)}r(En,"createToken");function xW(e){let t=e.pattern,n={};if(n.name=e.name,Ft(t)||(n.PATTERN=t),W(e,_W))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return W(e,uv)&&(n.CATEGORIES=e[uv]),Tn([n]),W(e,dv)&&(n.LABEL=e[dv]),W(e,pv)&&(n.GROUP=e[pv]),W(e,mv)&&(n.POP_MODE=e[mv]),W(e,fv)&&(n.PUSH_MODE=e[fv]),W(e,hv)&&(n.LONGER_ALT=e[hv]),W(e,gv)&&(n.LINE_BREAKS=e[gv]),W(e,Tv)&&(n.START_CHARS_HINT=e[Tv]),n}r(xW,"createTokenInternal");var Mr=En({name:"EOF",pattern:Ve.NA});Tn([Mr]);function No(e,t,n,o,i,a,s,c){return{image:t,startOffset:n,endOffset:o,startLine:i,endLine:a,startColumn:s,endColumn:c,tokenTypeIdx:e.tokenTypeIdx,tokenType:e}}r(No,"createTokenInstance");function XS(e,t){return gn(e,t)}r(XS,"tokenMatcher");var Sn={buildMismatchTokenMessage({expected:e,actual:t,previous:n,ruleName:o}){return`Expecting ${QS(e)?`--> ${Oo(e)} <--`:`token of type --> ${e.name} <--`} but found --> '${t.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:e,ruleName:t}){return"Redundant input, expecting EOF but found: "+e.image},buildNoViableAltMessage({expectedPathsPerAlt:e,actual:t,previous:n,customUserDescription:o,ruleName:i}){let a="Expecting: ",c=`
but found: '`+pt(t).image+"'";if(o)return a+o+c;{let l=ft(e,(_,y)=>_.concat(y),[]),d=G(l,_=>`[${G(_,y=>Oo(y)).join(", ")}]`),g=`one of these possible Token sequences:
${G(d,(_,y)=>`  ${y+1}. ${_}`).join(`
`)}`;return a+g+c}},buildEarlyExitMessage({expectedIterationPaths:e,actual:t,customUserDescription:n,ruleName:o}){let i="Expecting: ",s=`
but found: '`+pt(t).image+"'";if(n)return i+n+s;{let l=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${G(e,d=>`[${G(d,f=>Oo(f)).join(",")}]`).join(" ,")}>`;return i+l+s}}};Object.freeze(Sn);var Ev={buildRuleNotFoundError(e,t){return"Invalid grammar, reference to a rule which is not defined: ->"+t.nonTerminalName+`<-
inside top level rule: ->`+e.name+"<-"}},wr={buildDuplicateFoundError(e,t){function n(f){return f instanceof se?f.terminalType.name:f instanceof Re?f.nonTerminalName:""}r(n,"getExtraProductionArgument");let o=e.name,i=pt(t),a=i.idx,s=ir(i),c=n(i),l=a>0,d=`->${s}${l?a:""}<- ${c?`with argument: ->${c}<-`:""}
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
For Further details.`,o},buildEmptyRepetitionError(e){let t=ir(e.repetition);return e.repetition.idx!==0&&(t+=e.repetition.idx),`The repetition <${t}> within Rule <${e.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(e){return"deprecated"},buildEmptyAlternationError(e){return`Ambiguous empty alternative: <${e.emptyChoiceIdx+1}> in <OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(e){return`An Alternation cannot have more than 256 alternatives:
<OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.
 has ${e.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(e){let t=e.topLevelRule.name,n=G(e.leftRecursionPath,a=>a.name),o=`${t} --> ${n.concat([t]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${t}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${o}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(e){return"deprecated"},buildDuplicateRuleNameError(e){let t;return e.topLevelRule instanceof Ht?t=e.topLevelRule.name:t=e.topLevelRule,`Duplicate definition, rule: ->${t}<- is already defined in the grammar: ->${e.grammarName}<-`}};function Sv(e,t){let n=new ZS(e,t);return n.resolveRefs(),n.errors}r(Sv,"resolveGrammar");var ZS=class extends Yt{static{r(this,"GastRefResolverVisitor")}constructor(t,n){super(),this.nameToTopRule=t,this.errMsgProvider=n,this.errors=[]}resolveRefs(){V(Ee(this.nameToTopRule),t=>{this.currTopLevel=t,t.accept(this)})}visitNonTerminal(t){let n=this.nameToTopRule[t.nonTerminalName];if(n)t.referencedRule=n;else{let o=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,t);this.errors.push({message:o,type:Et.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:t.nonTerminalName})}}};var $S=class extends hn{static{r(this,"AbstractNextPossibleTokensWalker")}constructor(t,n){super(),this.topProd=t,this.path=n,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=be(this.path.ruleStack).reverse(),this.occurrenceStack=be(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(t,n=[]){this.found||super.walk(t,n)}walkProdRef(t,n,o){if(t.referencedRule.name===this.nextProductionName&&t.idx===this.nextProductionOccurrence){let i=n.concat(o);this.updateExpectedNext(),this.walk(t.referencedRule,i)}}updateExpectedNext(){re(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}},vu=class extends $S{static{r(this,"NextAfterTokenWalker")}constructor(t,n){super(t,n),this.path=n,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(t,n,o){if(this.isAtEndOfPath&&t.terminalType.name===this.nextTerminalName&&t.idx===this.nextTerminalOccurrence&&!this.found){let i=n.concat(o),a=new ke({definition:i});this.possibleTokTypes=vo(a),this.found=!0}}},Bi=class extends hn{static{r(this,"AbstractNextTerminalAfterProductionWalker")}constructor(t,n){super(),this.topRule=t,this.occurrence=n,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}},Cu=class extends Bi{static{r(this,"NextTerminalAfterManyWalker")}walkMany(t,n,o){if(t.idx===this.occurrence){let i=pt(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkMany(t,n,o)}},Cs=class extends Bi{static{r(this,"NextTerminalAfterManySepWalker")}walkManySep(t,n,o){if(t.idx===this.occurrence){let i=pt(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkManySep(t,n,o)}},Lu=class extends Bi{static{r(this,"NextTerminalAfterAtLeastOneWalker")}walkAtLeastOne(t,n,o){if(t.idx===this.occurrence){let i=pt(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOne(t,n,o)}},Ls=class extends Bi{static{r(this,"NextTerminalAfterAtLeastOneSepWalker")}walkAtLeastOneSep(t,n,o){if(t.idx===this.occurrence){let i=pt(n.concat(o));this.result.isEndOfRule=i===void 0,i instanceof se&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOneSep(t,n,o)}};function Ou(e,t,n=[]){n=be(n);let o=[],i=0;function a(c){return c.concat(tt(e,i+1))}r(a,"remainingPathWith");function s(c){let l=Ou(a(c),t,n);return o.concat(l)}for(r(s,"getAlternativesForProd");n.length<t&&i<e.length;){let c=e[i];if(c instanceof ke)return s(c.definition);if(c instanceof Re)return s(c.definition);if(c instanceof Le)o=s(c.definition);else if(c instanceof rt){let l=c.definition.concat([new ge({definition:c.definition})]);return s(l)}else if(c instanceof nt){let l=[new ke({definition:c.definition}),new ge({definition:[new se({terminalType:c.separator})].concat(c.definition)})];return s(l)}else if(c instanceof Je){let l=c.definition.concat([new ge({definition:[new se({terminalType:c.separator})].concat(c.definition)})]);o=s(l)}else if(c instanceof ge){let l=c.definition.concat([new ge({definition:c.definition})]);o=s(l)}else{if(c instanceof Qe)return V(c.definition,l=>{re(l.definition)===!1&&(o=s(l.definition))}),o;if(c instanceof se)n.push(c.terminalType);else throw Error("non exhaustive match")}i++}return o.push({partialPath:n,suffixDef:tt(e,i)}),o}r(Ou,"possiblePathsFrom");function Nu(e,t,n,o){let i="EXIT_NONE_TERMINAL",a=[i],s="EXIT_ALTERNATIVE",c=!1,l=t.length,d=l-o-1,f=[],g=[];for(g.push({idx:-1,def:e,ruleStack:[],occurrenceStack:[]});!re(g);){let _=g.pop();if(_===s){c&&tn(g).idx<=d&&g.pop();continue}let y=_.def,w=_.idx,O=_.ruleStack,B=_.occurrenceStack;if(re(y))continue;let N=y[0];if(N===i){let S={idx:w,def:tt(y),ruleStack:mn(O),occurrenceStack:mn(B)};g.push(S)}else if(N instanceof se)if(w<l-1){let S=w+1,h=t[S];if(n(h,N.terminalType)){let v={idx:S,def:tt(y),ruleStack:O,occurrenceStack:B};g.push(v)}}else if(w===l-1)f.push({nextTokenType:N.terminalType,nextTokenOccurrence:N.idx,ruleStack:O,occurrenceStack:B}),c=!0;else throw Error("non exhaustive match");else if(N instanceof Re){let S=be(O);S.push(N.nonTerminalName);let h=be(B);h.push(N.idx);let v={idx:w,def:N.definition.concat(a,tt(y)),ruleStack:S,occurrenceStack:h};g.push(v)}else if(N instanceof Le){let S={idx:w,def:tt(y),ruleStack:O,occurrenceStack:B};g.push(S),g.push(s);let h={idx:w,def:N.definition.concat(tt(y)),ruleStack:O,occurrenceStack:B};g.push(h)}else if(N instanceof rt){let S=new ge({definition:N.definition,idx:N.idx}),h=N.definition.concat([S],tt(y)),v={idx:w,def:h,ruleStack:O,occurrenceStack:B};g.push(v)}else if(N instanceof nt){let S=new se({terminalType:N.separator}),h=new ge({definition:[S].concat(N.definition),idx:N.idx}),v=N.definition.concat([h],tt(y)),P={idx:w,def:v,ruleStack:O,occurrenceStack:B};g.push(P)}else if(N instanceof Je){let S={idx:w,def:tt(y),ruleStack:O,occurrenceStack:B};g.push(S),g.push(s);let h=new se({terminalType:N.separator}),v=new ge({definition:[h].concat(N.definition),idx:N.idx}),P=N.definition.concat([v],tt(y)),le={idx:w,def:P,ruleStack:O,occurrenceStack:B};g.push(le)}else if(N instanceof ge){let S={idx:w,def:tt(y),ruleStack:O,occurrenceStack:B};g.push(S),g.push(s);let h=new ge({definition:N.definition,idx:N.idx}),v=N.definition.concat([h],tt(y)),P={idx:w,def:v,ruleStack:O,occurrenceStack:B};g.push(P)}else if(N instanceof Qe)for(let S=N.definition.length-1;S>=0;S--){let h=N.definition[S],v={idx:w,def:h.definition.concat(tt(y)),ruleStack:O,occurrenceStack:B};g.push(v),g.push(s)}else if(N instanceof ke)g.push({idx:w,def:N.definition.concat(tt(y)),ruleStack:O,occurrenceStack:B});else if(N instanceof Ht)g.push(bW(N,w,O,B));else throw Error("non exhaustive match")}return f}r(Nu,"nextPossibleTokensAfter");function bW(e,t,n,o){let i=be(n);i.push(e.name);let a=be(o);return a.push(1),{idx:t,def:e.definition,ruleStack:i,occurrenceStack:a}}r(bW,"expandTopLevelRule");var We;(function(e){e[e.OPTION=0]="OPTION",e[e.REPETITION=1]="REPETITION",e[e.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",e[e.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",e[e.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",e[e.ALTERNATION=5]="ALTERNATION"})(We||(We={}));function wu(e){if(e instanceof Le||e==="Option")return We.OPTION;if(e instanceof ge||e==="Repetition")return We.REPETITION;if(e instanceof rt||e==="RepetitionMandatory")return We.REPETITION_MANDATORY;if(e instanceof nt||e==="RepetitionMandatoryWithSeparator")return We.REPETITION_MANDATORY_WITH_SEPARATOR;if(e instanceof Je||e==="RepetitionWithSeparator")return We.REPETITION_WITH_SEPARATOR;if(e instanceof Qe||e==="Alternation")return We.ALTERNATION;throw Error("non exhaustive match")}r(wu,"getProdType");function _v(e,t,n,o,i,a){let s=Os(e,t,n),c=Uv(s)?Di:gn;return a(s,o,c,i)}r(_v,"buildLookaheadFuncForOr");function xv(e,t,n,o,i,a){let s=Ns(e,t,i,n),c=Uv(s)?Di:gn;return a(s[0],c,o)}r(xv,"buildLookaheadFuncForOptionalProd");function bv(e,t,n,o){let i=e.length,a=bt(e,s=>bt(s,c=>c.length===1));if(t)return function(s){let c=G(s,l=>l.GATE);for(let l=0;l<i;l++){let d=e[l],f=d.length,g=c[l];if(!(g!==void 0&&g.call(this)===!1))e:for(let _=0;_<f;_++){let y=d[_],w=y.length;for(let O=0;O<w;O++){let B=this.LA(O+1);if(n(B,y[O])===!1)continue e}return l}}};if(a&&!o){let s=G(e,l=>gt(l)),c=ft(s,(l,d,f)=>(V(d,g=>{W(l,g.tokenTypeIdx)||(l[g.tokenTypeIdx]=f),V(g.categoryMatches,_=>{W(l,_)||(l[_]=f)})}),l),{});return function(){let l=this.LA(1);return c[l.tokenTypeIdx]}}else return function(){for(let s=0;s<i;s++){let c=e[s],l=c.length;e:for(let d=0;d<l;d++){let f=c[d],g=f.length;for(let _=0;_<g;_++){let y=this.LA(_+1);if(n(y,f[_])===!1)continue e}return s}}}}r(bv,"buildAlternativesLookAheadFunc");function Rv(e,t,n){let o=bt(e,a=>a.length===1),i=e.length;if(o&&!n){let a=gt(e);if(a.length===1&&re(a[0].categoryMatches)){let c=a[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===c}}else{let s=ft(a,(c,l,d)=>(c[l.tokenTypeIdx]=!0,V(l.categoryMatches,f=>{c[f]=!0}),c),[]);return function(){let c=this.LA(1);return s[c.tokenTypeIdx]===!0}}}else return function(){e:for(let a=0;a<i;a++){let s=e[a],c=s.length;for(let l=0;l<c;l++){let d=this.LA(l+1);if(t(d,s[l])===!1)continue e}return!0}return!1}}r(Rv,"buildSingleAlternativeLookaheadFunction");var ty=class extends hn{static{r(this,"RestDefinitionFinderWalker")}constructor(t,n,o){super(),this.topProd=t,this.targetOccurrence=n,this.targetProdType=o}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(t,n,o,i){return t.idx===this.targetOccurrence&&this.targetProdType===n?(this.restDef=o.concat(i),!0):!1}walkOption(t,n,o){this.checkIsTarget(t,We.OPTION,n,o)||super.walkOption(t,n,o)}walkAtLeastOne(t,n,o){this.checkIsTarget(t,We.REPETITION_MANDATORY,n,o)||super.walkOption(t,n,o)}walkAtLeastOneSep(t,n,o){this.checkIsTarget(t,We.REPETITION_MANDATORY_WITH_SEPARATOR,n,o)||super.walkOption(t,n,o)}walkMany(t,n,o){this.checkIsTarget(t,We.REPETITION,n,o)||super.walkOption(t,n,o)}walkManySep(t,n,o){this.checkIsTarget(t,We.REPETITION_WITH_SEPARATOR,n,o)||super.walkOption(t,n,o)}},Mu=class extends Yt{static{r(this,"InsideDefinitionFinderVisitor")}constructor(t,n,o){super(),this.targetOccurrence=t,this.targetProdType=n,this.targetRef=o,this.result=[]}checkIsTarget(t,n){t.idx===this.targetOccurrence&&this.targetProdType===n&&(this.targetRef===void 0||t===this.targetRef)&&(this.result=t.definition)}visitOption(t){this.checkIsTarget(t,We.OPTION)}visitRepetition(t){this.checkIsTarget(t,We.REPETITION)}visitRepetitionMandatory(t){this.checkIsTarget(t,We.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(t){this.checkIsTarget(t,We.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(t){this.checkIsTarget(t,We.REPETITION_WITH_SEPARATOR)}visitAlternation(t){this.checkIsTarget(t,We.ALTERNATION)}};function yv(e){let t=new Array(e);for(let n=0;n<e;n++)t[n]=[];return t}r(yv,"initializeArrayOfArrays");function ey(e){let t=[""];for(let n=0;n<e.length;n++){let o=e[n],i=[];for(let a=0;a<t.length;a++){let s=t[a];i.push(s+"_"+o.tokenTypeIdx);for(let c=0;c<o.categoryMatches.length;c++){let l="_"+o.categoryMatches[c];i.push(s+l)}}t=i}return t}r(ey,"pathToHashKeys");function RW(e,t,n){for(let o=0;o<e.length;o++){if(o===n)continue;let i=e[o];for(let a=0;a<t.length;a++){let s=t[a];if(i[s]===!0)return!1}}return!0}r(RW,"isUniquePrefixHash");function kv(e,t){let n=G(e,s=>Ou([s],1)),o=yv(n.length),i=G(n,s=>{let c={};return V(s,l=>{let d=ey(l.partialPath);V(d,f=>{c[f]=!0})}),c}),a=n;for(let s=1;s<=t;s++){let c=a;a=yv(c.length);for(let l=0;l<c.length;l++){let d=c[l];for(let f=0;f<d.length;f++){let g=d[f].partialPath,_=d[f].suffixDef,y=ey(g);if(RW(i,y,l)||re(_)||g.length===t){let O=o[l];if(Fu(O,g)===!1){O.push(g);for(let B=0;B<y.length;B++){let N=y[B];i[l][N]=!0}}}else{let O=Ou(_,s+1,g);a[l]=a[l].concat(O),V(O,B=>{let N=ey(B.partialPath);V(N,S=>{i[l][S]=!0})})}}}}return o}r(kv,"lookAheadSequenceFromAlternatives");function Os(e,t,n,o){let i=new Mu(e,We.ALTERNATION,o);return t.accept(i),kv(i.result,n)}r(Os,"getLookaheadPathsForOr");function Ns(e,t,n,o){let i=new Mu(e,n);t.accept(i);let a=i.result,c=new ty(t,e,n).startWalking(),l=new ke({definition:a}),d=new ke({definition:c});return kv([l,d],o)}r(Ns,"getLookaheadPathsForOptionalProd");function Fu(e,t){e:for(let n=0;n<e.length;n++){let o=e[n];if(o.length===t.length){for(let i=0;i<o.length;i++){let a=t[i],s=o[i];if((a===s||s.categoryMatchesMap[a.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}r(Fu,"containsPath");function Av(e,t){return e.length<t.length&&bt(e,(n,o)=>{let i=t[o];return n===i||i.categoryMatchesMap[n.tokenTypeIdx]})}r(Av,"isStrictPrefixOfPath");function Uv(e){return bt(e,t=>bt(t,n=>bt(n,o=>re(o.categoryMatches))))}r(Uv,"areTokenCategoriesNotUsed");function vv(e){let t=e.lookaheadStrategy.validate({rules:e.rules,tokenTypes:e.tokenTypes,grammarName:e.grammarName});return G(t,n=>Object.assign({type:Et.CUSTOM_LOOKAHEAD_VALIDATION},n))}r(vv,"validateLookahead");function Cv(e,t,n,o){let i=zt(e,l=>kW(l,n)),a=OW(e,t,n),s=zt(e,l=>vW(l,n)),c=zt(e,l=>UW(l,e,o,n));return i.concat(a,s,c)}r(Cv,"validateGrammar");function kW(e,t){let n=new ry;e.accept(n);let o=n.allProductions,i=FS(o,AW),a=or(i,c=>c.length>1);return G(Ee(a),c=>{let l=pt(c),d=t.buildDuplicateFoundError(e,c),f=ir(l),g={message:d,type:Et.DUPLICATE_PRODUCTIONS,ruleName:e.name,dslName:f,occurrence:l.idx},_=Lv(l);return _&&(g.parameter=_),g})}r(kW,"validateDuplicateProductions");function AW(e){return`${ir(e)}_#_${e.idx}_#_${Lv(e)}`}r(AW,"identifyProductionForDuplicates");function Lv(e){return e instanceof se?e.terminalType.name:e instanceof Re?e.nonTerminalName:""}r(Lv,"getExtraProductionArgument");var ry=class extends Yt{static{r(this,"OccurrenceValidationCollector")}constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(t){this.allProductions.push(t)}visitOption(t){this.allProductions.push(t)}visitRepetitionWithSeparator(t){this.allProductions.push(t)}visitRepetitionMandatory(t){this.allProductions.push(t)}visitRepetitionMandatoryWithSeparator(t){this.allProductions.push(t)}visitRepetition(t){this.allProductions.push(t)}visitAlternation(t){this.allProductions.push(t)}visitTerminal(t){this.allProductions.push(t)}};function UW(e,t,n,o){let i=[];if(ft(t,(s,c)=>c.name===e.name?s+1:s,0)>1){let s=o.buildDuplicateRuleNameError({topLevelRule:e,grammarName:n});i.push({message:s,type:Et.DUPLICATE_RULE_NAME,ruleName:e.name})}return i}r(UW,"validateRuleDoesNotAlreadyExist");function Ov(e,t,n){let o=[],i;return we(t,e)||(i=`Invalid rule override, rule: ->${e}<- cannot be overridden in the grammar: ->${n}<-as it is not defined in any of the super grammars `,o.push({message:i,type:Et.INVALID_RULE_OVERRIDE,ruleName:e})),o}r(Ov,"validateRuleIsOverridden");function oy(e,t,n,o=[]){let i=[],a=Iu(t.definition);if(re(a))return[];{let s=e.name;we(a,e)&&i.push({message:n.buildLeftRecursionError({topLevelRule:e,leftRecursionPath:o}),type:Et.LEFT_RECURSION,ruleName:s});let l=Jn(a,o.concat([e])),d=zt(l,f=>{let g=be(o);return g.push(f),oy(e,f,n,g)});return i.concat(d)}}r(oy,"validateNoLeftRecursion");function Iu(e){let t=[];if(re(e))return t;let n=pt(e);if(n instanceof Re)t.push(n.referencedRule);else if(n instanceof ke||n instanceof Le||n instanceof rt||n instanceof nt||n instanceof Je||n instanceof ge)t=t.concat(Iu(n.definition));else if(n instanceof Qe)t=gt(G(n.definition,a=>Iu(a.definition)));else if(!(n instanceof se))throw Error("non exhaustive match");let o=Uo(n),i=e.length>1;if(o&&i){let a=tt(e);return t.concat(Iu(a))}else return t}r(Iu,"getFirstNoneTerminal");var Ms=class extends Yt{static{r(this,"OrCollector")}constructor(){super(...arguments),this.alternations=[]}visitAlternation(t){this.alternations.push(t)}};function Nv(e,t){let n=new Ms;e.accept(n);let o=n.alternations;return zt(o,a=>{let s=mn(a.definition);return zt(s,(c,l)=>{let d=Nu([c],[],gn,1);return re(d)?[{message:t.buildEmptyAlternationError({topLevelRule:e,alternation:a,emptyChoiceIdx:l}),type:Et.NONE_LAST_EMPTY_ALT,ruleName:e.name,occurrence:a.idx,alternative:l+1}]:[]})})}r(Nv,"validateEmptyOrAlternative");function Mv(e,t,n){let o=new Ms;e.accept(o);let i=o.alternations;return i=Qn(i,s=>s.ignoreAmbiguities===!0),zt(i,s=>{let c=s.idx,l=s.maxLookahead||t,d=Os(c,e,l,s),f=CW(d,s,e,n),g=LW(d,s,e,n);return f.concat(g)})}r(Mv,"validateAmbiguousAlternationAlternatives");var ny=class extends Yt{static{r(this,"RepetitionCollector")}constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(t){this.allProductions.push(t)}visitRepetitionMandatory(t){this.allProductions.push(t)}visitRepetitionMandatoryWithSeparator(t){this.allProductions.push(t)}visitRepetition(t){this.allProductions.push(t)}};function vW(e,t){let n=new Ms;e.accept(n);let o=n.alternations;return zt(o,a=>a.definition.length>255?[{message:t.buildTooManyAlternativesError({topLevelRule:e,alternation:a}),type:Et.TOO_MANY_ALTS,ruleName:e.name,occurrence:a.idx}]:[])}r(vW,"validateTooManyAlts");function wv(e,t,n){let o=[];return V(e,i=>{let a=new ny;i.accept(a);let s=a.allProductions;V(s,c=>{let l=wu(c),d=c.maxLookahead||t,f=c.idx,_=Ns(f,i,l,d)[0];if(re(gt(_))){let y=n.buildEmptyRepetitionError({topLevelRule:i,repetition:c});o.push({message:y,type:Et.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),o}r(wv,"validateSomeNonEmptyLookaheadPath");function CW(e,t,n,o){let i=[],a=ft(e,(c,l,d)=>(t.definition[d].ignoreAmbiguities===!0||V(l,f=>{let g=[d];V(e,(_,y)=>{d!==y&&Fu(_,f)&&t.definition[y].ignoreAmbiguities!==!0&&g.push(y)}),g.length>1&&!Fu(i,f)&&(i.push(f),c.push({alts:g,path:f}))}),c),[]);return G(a,c=>{let l=G(c.alts,f=>f+1);return{message:o.buildAlternationAmbiguityError({topLevelRule:n,alternation:t,ambiguityIndices:l,prefixPath:c.path}),type:Et.AMBIGUOUS_ALTS,ruleName:n.name,occurrence:t.idx,alternatives:c.alts}})}r(CW,"checkAlternativesAmbiguities");function LW(e,t,n,o){let i=ft(e,(s,c,l)=>{let d=G(c,f=>({idx:l,path:f}));return s.concat(d)},[]);return en(zt(i,s=>{if(t.definition[s.idx].ignoreAmbiguities===!0)return[];let l=s.idx,d=s.path,f=wt(i,_=>t.definition[_.idx].ignoreAmbiguities!==!0&&_.idx<l&&Av(_.path,d));return G(f,_=>{let y=[_.idx+1,l+1],w=t.idx===0?"":t.idx;return{message:o.buildAlternationPrefixAmbiguityError({topLevelRule:n,alternation:t,ambiguityIndices:y,prefixPath:_.path}),type:Et.AMBIGUOUS_PREFIX_ALTS,ruleName:n.name,occurrence:w,alternatives:y}})}))}r(LW,"checkPrefixAlternativesAmbiguities");function OW(e,t,n){let o=[],i=G(t,a=>a.name);return V(e,a=>{let s=a.name;if(we(i,s)){let c=n.buildNamespaceConflictError(a);o.push({message:c,type:Et.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:s})}}),o}r(OW,"checkTerminalAndNoneTerminalsNameSpace");function Fv(e){let t=Oi(e,{errMsgProvider:Ev}),n={};return V(e.rules,o=>{n[o.name]=o}),Sv(n,t.errMsgProvider)}r(Fv,"resolveGrammar");function Iv(e){return e=Oi(e,{errMsgProvider:wr}),Cv(e.rules,e.tokenTypes,e.errMsgProvider,e.grammarName)}r(Iv,"validateGrammar");var Pv="MismatchedTokenException",Dv="NoViableAltException",Bv="EarlyExitException",qv="NotAllInputParsedException",Gv=[Pv,Dv,Bv,qv];Object.freeze(Gv);function $n(e){return we(Gv,e.name)}r($n,"isRecognitionException");var qi=class extends Error{static{r(this,"RecognitionException")}constructor(t,n){super(t),this.token=n,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},ot=class extends qi{static{r(this,"MismatchedTokenException")}constructor(t,n,o){super(t,n),this.previousToken=o,this.name=Pv}},ws=class extends qi{static{r(this,"NoViableAltException")}constructor(t,n,o){super(t,n),this.previousToken=o,this.name=Dv}},Fs=class extends qi{static{r(this,"NotAllInputParsedException")}constructor(t,n){super(t,n),this.name=qv}},Is=class extends qi{static{r(this,"EarlyExitException")}constructor(t,n,o){super(t,n),this.previousToken=o,this.name=Bv}};var iy={},sy="InRuleRecoveryException",ay=class extends Error{static{r(this,"InRuleRecoveryException")}constructor(t){super(t),this.name=sy}},Pu=class{static{r(this,"Recoverable")}initRecoverable(t){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=W(t,"recoveryEnabled")?t.recoveryEnabled:Kt.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=NW)}getTokenToInsert(t){let n=No(t,"",NaN,NaN,NaN,NaN,NaN,NaN);return n.isInsertedInRecovery=!0,n}canTokenTypeBeInsertedInRecovery(t){return!0}canTokenTypeBeDeletedInRecovery(t){return!0}tryInRepetitionRecovery(t,n,o,i){let a=this.findReSyncTokenType(),s=this.exportLexerState(),c=[],l=!1,d=this.LA(1),f=this.LA(1),g=r(()=>{let _=this.LA(0),y=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:d,previous:_,ruleName:this.getCurrRuleFullName()}),w=new ot(y,d,this.LA(0));w.resyncedTokens=mn(c),this.SAVE_ERROR(w)},"generateErrorMessage");for(;!l;)if(this.tokenMatcher(f,i)){g();return}else if(o.call(this)){g(),t.apply(this,n);return}else this.tokenMatcher(f,a)?l=!0:(f=this.SKIP_TOKEN(),this.addToResyncTokens(f,c));this.importLexerState(s)}shouldInRepetitionRecoveryBeTried(t,n,o){return!(o===!1||this.tokenMatcher(this.LA(1),t)||this.isBackTracking()||this.canPerformInRuleRecovery(t,this.getFollowsForInRuleRecovery(t,n)))}getFollowsForInRuleRecovery(t,n){let o=this.getCurrentGrammarPath(t,n);return this.getNextPossibleTokenTypes(o)}tryInRuleRecovery(t,n){if(this.canRecoverWithSingleTokenInsertion(t,n))return this.getTokenToInsert(t);if(this.canRecoverWithSingleTokenDeletion(t)){let o=this.SKIP_TOKEN();return this.consumeToken(),o}throw new ay("sad sad panda")}canPerformInRuleRecovery(t,n){return this.canRecoverWithSingleTokenInsertion(t,n)||this.canRecoverWithSingleTokenDeletion(t)}canRecoverWithSingleTokenInsertion(t,n){if(!this.canTokenTypeBeInsertedInRecovery(t)||re(n))return!1;let o=this.LA(1);return rn(n,a=>this.tokenMatcher(o,a))!==void 0}canRecoverWithSingleTokenDeletion(t){return this.canTokenTypeBeDeletedInRecovery(t)?this.tokenMatcher(this.LA(2),t):!1}isInCurrentRuleReSyncSet(t){let n=this.getCurrFollowKey(),o=this.getFollowSetFromFollowKey(n);return we(o,t)}findReSyncTokenType(){let t=this.flattenFollowSet(),n=this.LA(1),o=2;for(;;){let i=rn(t,a=>XS(n,a));if(i!==void 0)return i;n=this.LA(o),o++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return iy;let t=this.getLastExplicitRuleShortName(),n=this.getLastExplicitRuleOccurrenceIndex(),o=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(t),idxInCallingRule:n,inRule:this.shortRuleNameToFullName(o)}}buildFullFollowKeyStack(){let t=this.RULE_STACK,n=this.RULE_OCCURRENCE_STACK;return G(t,(o,i)=>i===0?iy:{ruleName:this.shortRuleNameToFullName(o),idxInCallingRule:n[i],inRule:this.shortRuleNameToFullName(t[i-1])})}flattenFollowSet(){let t=G(this.buildFullFollowKeyStack(),n=>this.getFollowSetFromFollowKey(n));return gt(t)}getFollowSetFromFollowKey(t){if(t===iy)return[Mr];let n=t.ruleName+t.idxInCallingRule+yu+t.inRule;return this.resyncFollows[n]}addToResyncTokens(t,n){return this.tokenMatcher(t,Mr)||n.push(t),n}reSyncTo(t){let n=[],o=this.LA(1);for(;this.tokenMatcher(o,t)===!1;)o=this.SKIP_TOKEN(),this.addToResyncTokens(o,n);return mn(n)}attemptInRepetitionRecovery(t,n,o,i,a,s,c){}getCurrentGrammarPath(t,n){let o=this.getHumanReadableRuleStack(),i=be(this.RULE_OCCURRENCE_STACK);return{ruleStack:o,occurrenceStack:i,lastTok:t,lastTokOccurrence:n}}getHumanReadableRuleStack(){return G(this.RULE_STACK,t=>this.shortRuleNameToFullName(t))}};function NW(e,t,n,o,i,a,s){let c=this.getKeyForAutomaticLookahead(o,i),l=this.firstAfterRepMap[c];if(l===void 0){let _=this.getCurrRuleFullName(),y=this.getGAstProductions()[_];l=new a(y,i).startWalking(),this.firstAfterRepMap[c]=l}let d=l.token,f=l.occurrence,g=l.isEndOfRule;this.RULE_STACK.length===1&&g&&d===void 0&&(d=Mr,f=1),!(d===void 0||f===void 0)&&this.shouldInRepetitionRecoveryBeTried(d,f,s)&&this.tryInRepetitionRecovery(e,t,n,d)}r(NW,"attemptInRepetitionRecovery");function Du(e,t,n){return n|t|e}r(Du,"getKeyForAutomaticLookahead");var Ps=class{static{r(this,"LLkLookaheadStrategy")}constructor(t){var n;this.maxLookahead=(n=t?.maxLookahead)!==null&&n!==void 0?n:Kt.maxLookahead}validate(t){let n=this.validateNoLeftRecursion(t.rules);if(re(n)){let o=this.validateEmptyOrAlternatives(t.rules),i=this.validateAmbiguousAlternationAlternatives(t.rules,this.maxLookahead),a=this.validateSomeNonEmptyLookaheadPath(t.rules,this.maxLookahead);return[...n,...o,...i,...a]}return n}validateNoLeftRecursion(t){return zt(t,n=>oy(n,n,wr))}validateEmptyOrAlternatives(t){return zt(t,n=>Nv(n,wr))}validateAmbiguousAlternationAlternatives(t,n){return zt(t,o=>Mv(o,n,wr))}validateSomeNonEmptyLookaheadPath(t,n){return wv(t,n,wr)}buildLookaheadForAlternation(t){return _v(t.prodOccurrence,t.rule,t.maxLookahead,t.hasPredicates,t.dynamicTokensEnabled,bv)}buildLookaheadForOptional(t){return xv(t.prodOccurrence,t.rule,t.maxLookahead,t.dynamicTokensEnabled,wu(t.prodType),Rv)}};var qu=class{static{r(this,"LooksAhead")}initLooksAhead(t){this.dynamicTokensEnabled=W(t,"dynamicTokensEnabled")?t.dynamicTokensEnabled:Kt.dynamicTokensEnabled,this.maxLookahead=W(t,"maxLookahead")?t.maxLookahead:Kt.maxLookahead,this.lookaheadStrategy=W(t,"lookaheadStrategy")?t.lookaheadStrategy:new Ps({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(t){V(t,n=>{this.TRACE_INIT(`${n.name} Rule Lookahead`,()=>{let{alternation:o,repetition:i,option:a,repetitionMandatory:s,repetitionMandatoryWithSeparator:c,repetitionWithSeparator:l}=MW(n);V(o,d=>{let f=d.idx===0?"":d.idx;this.TRACE_INIT(`${ir(d)}${f}`,()=>{let g=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:d.idx,rule:n,maxLookahead:d.maxLookahead||this.maxLookahead,hasPredicates:d.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),_=Du(this.fullRuleNameToShort[n.name],256,d.idx);this.setLaFuncCache(_,g)})}),V(i,d=>{this.computeLookaheadFunc(n,d.idx,768,"Repetition",d.maxLookahead,ir(d))}),V(a,d=>{this.computeLookaheadFunc(n,d.idx,512,"Option",d.maxLookahead,ir(d))}),V(s,d=>{this.computeLookaheadFunc(n,d.idx,1024,"RepetitionMandatory",d.maxLookahead,ir(d))}),V(c,d=>{this.computeLookaheadFunc(n,d.idx,1536,"RepetitionMandatoryWithSeparator",d.maxLookahead,ir(d))}),V(l,d=>{this.computeLookaheadFunc(n,d.idx,1280,"RepetitionWithSeparator",d.maxLookahead,ir(d))})})})}computeLookaheadFunc(t,n,o,i,a,s){this.TRACE_INIT(`${s}${n===0?"":n}`,()=>{let c=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:n,rule:t,maxLookahead:a||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i}),l=Du(this.fullRuleNameToShort[t.name],o,n);this.setLaFuncCache(l,c)})}getKeyForAutomaticLookahead(t,n){let o=this.getLastExplicitRuleShortName();return Du(o,t,n)}getLaFuncFromCache(t){return this.lookAheadFuncsCache.get(t)}setLaFuncCache(t,n){this.lookAheadFuncsCache.set(t,n)}},cy=class extends Yt{static{r(this,"DslMethodsCollectorVisitor")}constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(t){this.dslMethods.option.push(t)}visitRepetitionWithSeparator(t){this.dslMethods.repetitionWithSeparator.push(t)}visitRepetitionMandatory(t){this.dslMethods.repetitionMandatory.push(t)}visitRepetitionMandatoryWithSeparator(t){this.dslMethods.repetitionMandatoryWithSeparator.push(t)}visitRepetition(t){this.dslMethods.repetition.push(t)}visitAlternation(t){this.dslMethods.alternation.push(t)}},Bu=new cy;function MW(e){Bu.reset(),e.accept(Bu);let t=Bu.dslMethods;return Bu.reset(),t}r(MW,"collectMethods");function dy(e,t){isNaN(e.startOffset)===!0?(e.startOffset=t.startOffset,e.endOffset=t.endOffset):e.endOffset<t.endOffset&&(e.endOffset=t.endOffset)}r(dy,"setNodeLocationOnlyOffset");function py(e,t){isNaN(e.startOffset)===!0?(e.startOffset=t.startOffset,e.startColumn=t.startColumn,e.startLine=t.startLine,e.endOffset=t.endOffset,e.endColumn=t.endColumn,e.endLine=t.endLine):e.endOffset<t.endOffset&&(e.endOffset=t.endOffset,e.endColumn=t.endColumn,e.endLine=t.endLine)}r(py,"setNodeLocationFull");function jv(e,t,n){e.children[n]===void 0?e.children[n]=[t]:e.children[n].push(t)}r(jv,"addTerminalToCst");function Vv(e,t,n){e.children[t]===void 0?e.children[t]=[n]:e.children[t].push(n)}r(Vv,"addNoneTerminalToCst");var wW="name";function fy(e,t){Object.defineProperty(e,wW,{enumerable:!1,configurable:!0,writable:!1,value:t})}r(fy,"defineNameProp");function FW(e,t){let n=he(e),o=n.length;for(let i=0;i<o;i++){let a=n[i],s=e[a],c=s.length;for(let l=0;l<c;l++){let d=s[l];d.tokenTypeIdx===void 0&&this[d.name](d.children,t)}}}r(FW,"defaultVisit");function Wv(e,t){let n=r(function(){},"derivedConstructor");fy(n,e+"BaseSemantics");let o={visit:r(function(i,a){if(q(i)&&(i=i[0]),!Ft(i))return this[i.name](i.children,a)},"visit"),validateVisitor:r(function(){let i=IW(this,t);if(!re(i)){let a=G(i,s=>s.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${a.join(`

`).replace(/\n/g,`
	`)}`)}},"validateVisitor")};return n.prototype=o,n.prototype.constructor=n,n._RULE_NAMES=t,n}r(Wv,"createBaseSemanticVisitorConstructor");function zv(e,t,n){let o=r(function(){},"derivedConstructor");fy(o,e+"BaseSemanticsWithDefaults");let i=Object.create(n.prototype);return V(t,a=>{i[a]=FW}),o.prototype=i,o.prototype.constructor=o,o}r(zv,"createBaseVisitorConstructorWithDefaults");var my;(function(e){e[e.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",e[e.MISSING_METHOD=1]="MISSING_METHOD"})(my||(my={}));function IW(e,t){return PW(e,t)}r(IW,"validateVisitor");function PW(e,t){let n=wt(t,i=>Wt(e[i])===!1),o=G(n,i=>({msg:`Missing visitor method: <${i}> on ${e.constructor.name} CST Visitor.`,type:my.MISSING_METHOD,methodName:i}));return en(o)}r(PW,"validateMissingCstMethods");var Wu=class{static{r(this,"TreeBuilder")}initTreeBuilder(t){if(this.CST_STACK=[],this.outputCst=t.outputCst,this.nodeLocationTracking=W(t,"nodeLocationTracking")?t.nodeLocationTracking:Kt.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=je,this.cstFinallyStateUpdate=je,this.cstPostTerminal=je,this.cstPostNonTerminal=je,this.cstPostRule=je;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=py,this.setNodeLocationFromNode=py,this.cstPostRule=je,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=je,this.setNodeLocationFromNode=je,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=dy,this.setNodeLocationFromNode=dy,this.cstPostRule=je,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=je,this.setNodeLocationFromNode=je,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=je,this.setNodeLocationFromNode=je,this.cstPostRule=je,this.setInitialNodeLocation=je;else throw Error(`Invalid <nodeLocationTracking> config option: "${t.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(t){t.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(t){t.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(t){t.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(t){let n=this.LA(1);t.location={startOffset:n.startOffset,startLine:n.startLine,startColumn:n.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(t){let n={name:t,children:Object.create(null)};this.setInitialNodeLocation(n),this.CST_STACK.push(n)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(t){let n=this.LA(0),o=t.location;o.startOffset<=n.startOffset?(o.endOffset=n.endOffset,o.endLine=n.endLine,o.endColumn=n.endColumn):(o.startOffset=NaN,o.startLine=NaN,o.startColumn=NaN)}cstPostRuleOnlyOffset(t){let n=this.LA(0),o=t.location;o.startOffset<=n.startOffset?o.endOffset=n.endOffset:o.startOffset=NaN}cstPostTerminal(t,n){let o=this.CST_STACK[this.CST_STACK.length-1];jv(o,n,t),this.setNodeLocationFromToken(o.location,n)}cstPostNonTerminal(t,n){let o=this.CST_STACK[this.CST_STACK.length-1];Vv(o,n,t),this.setNodeLocationFromNode(o.location,t.location)}getBaseCstVisitorConstructor(){if(Ft(this.baseCstVisitorConstructor)){let t=Wv(this.className,he(this.gastProductionsCache));return this.baseCstVisitorConstructor=t,t}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(Ft(this.baseCstVisitorWithDefaultsConstructor)){let t=zv(this.className,he(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=t,t}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){let t=this.RULE_STACK;return t[t.length-1]}getPreviousExplicitRuleShortName(){let t=this.RULE_STACK;return t[t.length-2]}getLastExplicitRuleOccurrenceIndex(){let t=this.RULE_OCCURRENCE_STACK;return t[t.length-1]}};var zu=class{static{r(this,"LexerAdapter")}initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(t){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=t,this.tokVectorLength=t.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):Gi}LA(t){let n=this.currIdx+t;return n<0||this.tokVectorLength<=n?Gi:this.tokVector[n]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(t){this.currIdx=t}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}};var Hu=class{static{r(this,"RecognizerApi")}ACTION(t){return t.call(this)}consume(t,n,o){return this.consumeInternal(n,t,o)}subrule(t,n,o){return this.subruleInternal(n,t,o)}option(t,n){return this.optionInternal(n,t)}or(t,n){return this.orInternal(n,t)}many(t,n){return this.manyInternal(t,n)}atLeastOne(t,n){return this.atLeastOneInternal(t,n)}CONSUME(t,n){return this.consumeInternal(t,0,n)}CONSUME1(t,n){return this.consumeInternal(t,1,n)}CONSUME2(t,n){return this.consumeInternal(t,2,n)}CONSUME3(t,n){return this.consumeInternal(t,3,n)}CONSUME4(t,n){return this.consumeInternal(t,4,n)}CONSUME5(t,n){return this.consumeInternal(t,5,n)}CONSUME6(t,n){return this.consumeInternal(t,6,n)}CONSUME7(t,n){return this.consumeInternal(t,7,n)}CONSUME8(t,n){return this.consumeInternal(t,8,n)}CONSUME9(t,n){return this.consumeInternal(t,9,n)}SUBRULE(t,n){return this.subruleInternal(t,0,n)}SUBRULE1(t,n){return this.subruleInternal(t,1,n)}SUBRULE2(t,n){return this.subruleInternal(t,2,n)}SUBRULE3(t,n){return this.subruleInternal(t,3,n)}SUBRULE4(t,n){return this.subruleInternal(t,4,n)}SUBRULE5(t,n){return this.subruleInternal(t,5,n)}SUBRULE6(t,n){return this.subruleInternal(t,6,n)}SUBRULE7(t,n){return this.subruleInternal(t,7,n)}SUBRULE8(t,n){return this.subruleInternal(t,8,n)}SUBRULE9(t,n){return this.subruleInternal(t,9,n)}OPTION(t){return this.optionInternal(t,0)}OPTION1(t){return this.optionInternal(t,1)}OPTION2(t){return this.optionInternal(t,2)}OPTION3(t){return this.optionInternal(t,3)}OPTION4(t){return this.optionInternal(t,4)}OPTION5(t){return this.optionInternal(t,5)}OPTION6(t){return this.optionInternal(t,6)}OPTION7(t){return this.optionInternal(t,7)}OPTION8(t){return this.optionInternal(t,8)}OPTION9(t){return this.optionInternal(t,9)}OR(t){return this.orInternal(t,0)}OR1(t){return this.orInternal(t,1)}OR2(t){return this.orInternal(t,2)}OR3(t){return this.orInternal(t,3)}OR4(t){return this.orInternal(t,4)}OR5(t){return this.orInternal(t,5)}OR6(t){return this.orInternal(t,6)}OR7(t){return this.orInternal(t,7)}OR8(t){return this.orInternal(t,8)}OR9(t){return this.orInternal(t,9)}MANY(t){this.manyInternal(0,t)}MANY1(t){this.manyInternal(1,t)}MANY2(t){this.manyInternal(2,t)}MANY3(t){this.manyInternal(3,t)}MANY4(t){this.manyInternal(4,t)}MANY5(t){this.manyInternal(5,t)}MANY6(t){this.manyInternal(6,t)}MANY7(t){this.manyInternal(7,t)}MANY8(t){this.manyInternal(8,t)}MANY9(t){this.manyInternal(9,t)}MANY_SEP(t){this.manySepFirstInternal(0,t)}MANY_SEP1(t){this.manySepFirstInternal(1,t)}MANY_SEP2(t){this.manySepFirstInternal(2,t)}MANY_SEP3(t){this.manySepFirstInternal(3,t)}MANY_SEP4(t){this.manySepFirstInternal(4,t)}MANY_SEP5(t){this.manySepFirstInternal(5,t)}MANY_SEP6(t){this.manySepFirstInternal(6,t)}MANY_SEP7(t){this.manySepFirstInternal(7,t)}MANY_SEP8(t){this.manySepFirstInternal(8,t)}MANY_SEP9(t){this.manySepFirstInternal(9,t)}AT_LEAST_ONE(t){this.atLeastOneInternal(0,t)}AT_LEAST_ONE1(t){return this.atLeastOneInternal(1,t)}AT_LEAST_ONE2(t){this.atLeastOneInternal(2,t)}AT_LEAST_ONE3(t){this.atLeastOneInternal(3,t)}AT_LEAST_ONE4(t){this.atLeastOneInternal(4,t)}AT_LEAST_ONE5(t){this.atLeastOneInternal(5,t)}AT_LEAST_ONE6(t){this.atLeastOneInternal(6,t)}AT_LEAST_ONE7(t){this.atLeastOneInternal(7,t)}AT_LEAST_ONE8(t){this.atLeastOneInternal(8,t)}AT_LEAST_ONE9(t){this.atLeastOneInternal(9,t)}AT_LEAST_ONE_SEP(t){this.atLeastOneSepFirstInternal(0,t)}AT_LEAST_ONE_SEP1(t){this.atLeastOneSepFirstInternal(1,t)}AT_LEAST_ONE_SEP2(t){this.atLeastOneSepFirstInternal(2,t)}AT_LEAST_ONE_SEP3(t){this.atLeastOneSepFirstInternal(3,t)}AT_LEAST_ONE_SEP4(t){this.atLeastOneSepFirstInternal(4,t)}AT_LEAST_ONE_SEP5(t){this.atLeastOneSepFirstInternal(5,t)}AT_LEAST_ONE_SEP6(t){this.atLeastOneSepFirstInternal(6,t)}AT_LEAST_ONE_SEP7(t){this.atLeastOneSepFirstInternal(7,t)}AT_LEAST_ONE_SEP8(t){this.atLeastOneSepFirstInternal(8,t)}AT_LEAST_ONE_SEP9(t){this.atLeastOneSepFirstInternal(9,t)}RULE(t,n,o=ji){if(we(this.definedRulesNames,t)){let s={message:wr.buildDuplicateRuleNameError({topLevelRule:t,grammarName:this.className}),type:Et.DUPLICATE_RULE_NAME,ruleName:t};this.definitionErrors.push(s)}this.definedRulesNames.push(t);let i=this.defineRule(t,n,o);return this[t]=i,i}OVERRIDE_RULE(t,n,o=ji){let i=Ov(t,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);let a=this.defineRule(t,n,o);return this[t]=a,a}BACKTRACK(t,n){return function(){this.isBackTrackingStack.push(1);let o=this.saveRecogState();try{return t.apply(this,n),!0}catch(i){if($n(i))return!1;throw i}finally{this.reloadRecogState(o),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return Su(Ee(this.gastProductionsCache))}};var Yu=class{static{r(this,"RecognizerEngine")}initRecognizerEngine(t,n){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=Di,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},W(n,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(q(t)){if(re(t))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof t[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(q(t))this.tokensMap=ft(t,(a,s)=>(a[s.name]=s,a),{});else if(W(t,"modes")&&bt(gt(Ee(t.modes)),lv)){let a=gt(Ee(t.modes)),s=Xn(a);this.tokensMap=ft(s,(c,l)=>(c[l.name]=l,c),{})}else if(Ge(t))this.tokensMap=be(t);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=Mr;let o=W(t,"modes")?gt(Ee(t.modes)):Ee(t),i=bt(o,a=>re(a.categoryMatches));this.tokenMatcher=i?Di:gn,Tn(Ee(this.tokensMap))}defineRule(t,n,o){if(this.selfAnalysisDone)throw Error(`Grammar rule <${t}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);let i=W(o,"resyncEnabled")?o.resyncEnabled:ji.resyncEnabled,a=W(o,"recoveryValueFunc")?o.recoveryValueFunc:ji.recoveryValueFunc,s=this.ruleShortNameIdx<<12;this.ruleShortNameIdx++,this.shortRuleNameToFull[s]=t,this.fullRuleNameToShort[t]=s;let c;return this.outputCst===!0?c=r(function(...f){try{this.ruleInvocationStateUpdate(s,t,this.subruleIdx),n.apply(this,f);let g=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(g),g}catch(g){return this.invokeRuleCatch(g,i,a)}finally{this.ruleFinallyStateUpdate()}},"invokeRuleWithTry"):c=r(function(...f){try{return this.ruleInvocationStateUpdate(s,t,this.subruleIdx),n.apply(this,f)}catch(g){return this.invokeRuleCatch(g,i,a)}finally{this.ruleFinallyStateUpdate()}},"invokeRuleWithTryCst"),Object.assign(c,{ruleName:t,originalGrammarAction:n})}invokeRuleCatch(t,n,o){let i=this.RULE_STACK.length===1,a=n&&!this.isBackTracking()&&this.recoveryEnabled;if($n(t)){let s=t;if(a){let c=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(c))if(s.resyncedTokens=this.reSyncTo(c),this.outputCst){let l=this.CST_STACK[this.CST_STACK.length-1];return l.recoveredNode=!0,l}else return o(t);else{if(this.outputCst){let l=this.CST_STACK[this.CST_STACK.length-1];l.recoveredNode=!0,s.partialCstResult=l}throw s}}else{if(i)return this.moveToTerminatedState(),o(t);throw s}}else throw t}optionInternal(t,n){let o=this.getKeyForAutomaticLookahead(512,n);return this.optionInternalLogic(t,n,o)}optionInternalLogic(t,n,o){let i=this.getLaFuncFromCache(o),a;if(typeof t!="function"){a=t.DEF;let s=t.GATE;if(s!==void 0){let c=i;i=r(()=>s.call(this)&&c.call(this),"lookAheadFunc")}}else a=t;if(i.call(this)===!0)return a.call(this)}atLeastOneInternal(t,n){let o=this.getKeyForAutomaticLookahead(1024,t);return this.atLeastOneInternalLogic(t,n,o)}atLeastOneInternalLogic(t,n,o){let i=this.getLaFuncFromCache(o),a;if(typeof n!="function"){a=n.DEF;let s=n.GATE;if(s!==void 0){let c=i;i=r(()=>s.call(this)&&c.call(this),"lookAheadFunc")}}else a=n;if(i.call(this)===!0){let s=this.doSingleRepetition(a);for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(a)}else throw this.raiseEarlyExitException(t,We.REPETITION_MANDATORY,n.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[t,n],i,1024,t,Lu)}atLeastOneSepFirstInternal(t,n){let o=this.getKeyForAutomaticLookahead(1536,t);this.atLeastOneSepFirstInternalLogic(t,n,o)}atLeastOneSepFirstInternalLogic(t,n,o){let i=n.DEF,a=n.SEP;if(this.getLaFuncFromCache(o).call(this)===!0){i.call(this);let c=r(()=>this.tokenMatcher(this.LA(1),a),"separatorLookAheadFunc");for(;this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[t,a,c,i,Ls],c,1536,t,Ls)}else throw this.raiseEarlyExitException(t,We.REPETITION_MANDATORY_WITH_SEPARATOR,n.ERR_MSG)}manyInternal(t,n){let o=this.getKeyForAutomaticLookahead(768,t);return this.manyInternalLogic(t,n,o)}manyInternalLogic(t,n,o){let i=this.getLaFuncFromCache(o),a;if(typeof n!="function"){a=n.DEF;let c=n.GATE;if(c!==void 0){let l=i;i=r(()=>c.call(this)&&l.call(this),"lookaheadFunction")}}else a=n;let s=!0;for(;i.call(this)===!0&&s===!0;)s=this.doSingleRepetition(a);this.attemptInRepetitionRecovery(this.manyInternal,[t,n],i,768,t,Cu,s)}manySepFirstInternal(t,n){let o=this.getKeyForAutomaticLookahead(1280,t);this.manySepFirstInternalLogic(t,n,o)}manySepFirstInternalLogic(t,n,o){let i=n.DEF,a=n.SEP;if(this.getLaFuncFromCache(o).call(this)===!0){i.call(this);let c=r(()=>this.tokenMatcher(this.LA(1),a),"separatorLookAheadFunc");for(;this.tokenMatcher(this.LA(1),a)===!0;)this.CONSUME(a),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[t,a,c,i,Cs],c,1280,t,Cs)}}repetitionSepSecondInternal(t,n,o,i,a){for(;o();)this.CONSUME(n),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[t,n,o,i,a],o,1536,t,a)}doSingleRepetition(t){let n=this.getLexerPosition();return t.call(this),this.getLexerPosition()>n}orInternal(t,n){let o=this.getKeyForAutomaticLookahead(256,n),i=q(t)?t:t.DEF,s=this.getLaFuncFromCache(o).call(this,i);if(s!==void 0)return i[s].ALT.call(this);this.raiseNoAltException(n,t.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){let t=this.LA(1),n=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:t,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new Fs(n,t))}}subruleInternal(t,n,o){let i;try{let a=o!==void 0?o.ARGS:void 0;return this.subruleIdx=n,i=t.apply(this,a),this.cstPostNonTerminal(i,o!==void 0&&o.LABEL!==void 0?o.LABEL:t.ruleName),i}catch(a){throw this.subruleInternalError(a,o,t.ruleName)}}subruleInternalError(t,n,o){throw $n(t)&&t.partialCstResult!==void 0&&(this.cstPostNonTerminal(t.partialCstResult,n!==void 0&&n.LABEL!==void 0?n.LABEL:o),delete t.partialCstResult),t}consumeInternal(t,n,o){let i;try{let a=this.LA(1);this.tokenMatcher(a,t)===!0?(this.consumeToken(),i=a):this.consumeInternalError(t,a,o)}catch(a){i=this.consumeInternalRecovery(t,n,a)}return this.cstPostTerminal(o!==void 0&&o.LABEL!==void 0?o.LABEL:t.name,i),i}consumeInternalError(t,n,o){let i,a=this.LA(0);throw o!==void 0&&o.ERR_MSG?i=o.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:t,actual:n,previous:a,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new ot(i,n,a))}consumeInternalRecovery(t,n,o){if(this.recoveryEnabled&&o.name==="MismatchedTokenException"&&!this.isBackTracking()){let i=this.getFollowsForInRuleRecovery(t,n);try{return this.tryInRuleRecovery(t,i)}catch(a){throw a.name===sy?o:a}}else throw o}saveRecogState(){let t=this.errors,n=be(this.RULE_STACK);return{errors:t,lexerState:this.exportLexerState(),RULE_STACK:n,CST_STACK:this.CST_STACK}}reloadRecogState(t){this.errors=t.errors,this.importLexerState(t.lexerState),this.RULE_STACK=t.RULE_STACK}ruleInvocationStateUpdate(t,n,o){this.RULE_OCCURRENCE_STACK.push(o),this.RULE_STACK.push(t),this.cstInvocationStateUpdate(n)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){let t=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[t]}shortRuleNameToFullName(t){return this.shortRuleNameToFull[t]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),Mr)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}};var Ku=class{static{r(this,"ErrorHandler")}initErrorHandler(t){this._errors=[],this.errorMessageProvider=W(t,"errorMessageProvider")?t.errorMessageProvider:Kt.errorMessageProvider}SAVE_ERROR(t){if($n(t))return t.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:be(this.RULE_OCCURRENCE_STACK)},this._errors.push(t),t;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return be(this._errors)}set errors(t){this._errors=t}raiseEarlyExitException(t,n,o){let i=this.getCurrRuleFullName(),a=this.getGAstProductions()[i],c=Ns(t,a,n,this.maxLookahead)[0],l=[];for(let f=1;f<=this.maxLookahead;f++)l.push(this.LA(f));let d=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:c,actual:l,previous:this.LA(0),customUserDescription:o,ruleName:i});throw this.SAVE_ERROR(new Is(d,this.LA(1),this.LA(0)))}raiseNoAltException(t,n){let o=this.getCurrRuleFullName(),i=this.getGAstProductions()[o],a=Os(t,i,this.maxLookahead),s=[];for(let d=1;d<=this.maxLookahead;d++)s.push(this.LA(d));let c=this.LA(0),l=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:a,actual:s,previous:c,customUserDescription:n,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new ws(l,this.LA(1),c))}};var Ju=class{static{r(this,"ContentAssist")}initContentAssist(){}computeContentAssist(t,n){let o=this.gastProductionsCache[t];if(Ft(o))throw Error(`Rule ->${t}<- does not exist in this grammar.`);return Nu([o],n,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(t){let n=pt(t.ruleStack),i=this.getGAstProductions()[n];return new vu(i,t).startWalking()}};var Zu={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(Zu);var Hv=!0,Yv=Math.pow(2,8)-1,Jv=En({name:"RECORDING_PHASE_TOKEN",pattern:Ve.NA});Tn([Jv]);var Qv=No(Jv,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(Qv);var BW={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},Qu=class{static{r(this,"GastRecorder")}initGastRecorder(t){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let t=0;t<10;t++){let n=t>0?t:"";this[`CONSUME${n}`]=function(o,i){return this.consumeInternalRecord(o,t,i)},this[`SUBRULE${n}`]=function(o,i){return this.subruleInternalRecord(o,t,i)},this[`OPTION${n}`]=function(o){return this.optionInternalRecord(o,t)},this[`OR${n}`]=function(o){return this.orInternalRecord(o,t)},this[`MANY${n}`]=function(o){this.manyInternalRecord(t,o)},this[`MANY_SEP${n}`]=function(o){this.manySepFirstInternalRecord(t,o)},this[`AT_LEAST_ONE${n}`]=function(o){this.atLeastOneInternalRecord(t,o)},this[`AT_LEAST_ONE_SEP${n}`]=function(o){this.atLeastOneSepFirstInternalRecord(t,o)}}this.consume=function(t,n,o){return this.consumeInternalRecord(n,t,o)},this.subrule=function(t,n,o){return this.subruleInternalRecord(n,t,o)},this.option=function(t,n){return this.optionInternalRecord(n,t)},this.or=function(t,n){return this.orInternalRecord(n,t)},this.many=function(t,n){this.manyInternalRecord(t,n)},this.atLeastOne=function(t,n){this.atLeastOneInternalRecord(t,n)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{let t=this;for(let n=0;n<10;n++){let o=n>0?n:"";delete t[`CONSUME${o}`],delete t[`SUBRULE${o}`],delete t[`OPTION${o}`],delete t[`OR${o}`],delete t[`MANY${o}`],delete t[`MANY_SEP${o}`],delete t[`AT_LEAST_ONE${o}`],delete t[`AT_LEAST_ONE_SEP${o}`]}delete t.consume,delete t.subrule,delete t.option,delete t.or,delete t.many,delete t.atLeastOne,delete t.ACTION,delete t.BACKTRACK,delete t.LA})}ACTION_RECORD(t){}BACKTRACK_RECORD(t,n){return()=>!0}LA_RECORD(t){return Gi}topLevelRuleRecord(t,n){try{let o=new Ht({definition:[],name:t});return o.name=t,this.recordingProdStack.push(o),n.call(this),this.recordingProdStack.pop(),o}catch(o){if(o.KNOWN_RECORDER_ERROR!==!0)try{o.message=o.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw o}throw o}}optionInternalRecord(t,n){return Bs.call(this,Le,t,n)}atLeastOneInternalRecord(t,n){Bs.call(this,rt,n,t)}atLeastOneSepFirstInternalRecord(t,n){Bs.call(this,nt,n,t,Hv)}manyInternalRecord(t,n){Bs.call(this,ge,n,t)}manySepFirstInternalRecord(t,n){Bs.call(this,Je,n,t,Hv)}orInternalRecord(t,n){return qW.call(this,t,n)}subruleInternalRecord(t,n,o){if(Xu(n),!t||W(t,"ruleName")===!1){let c=new Error(`<SUBRULE${Kv(n)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(t)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw c.KNOWN_RECORDER_ERROR=!0,c}let i=tn(this.recordingProdStack),a=t.ruleName,s=new Re({idx:n,nonTerminalName:a,label:o?.LABEL,referencedRule:void 0});return i.definition.push(s),this.outputCst?BW:Zu}consumeInternalRecord(t,n,o){if(Xu(n),!KS(t)){let s=new Error(`<CONSUME${Kv(n)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(t)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw s.KNOWN_RECORDER_ERROR=!0,s}let i=tn(this.recordingProdStack),a=new se({idx:n,terminalType:t,label:o?.LABEL});return i.definition.push(a),Qv}};function Bs(e,t,n,o=!1){Xu(n);let i=tn(this.recordingProdStack),a=Wt(t)?t:t.DEF,s=new e({definition:[],idx:n});return o&&(s.separator=t.SEP),W(t,"MAX_LOOKAHEAD")&&(s.maxLookahead=t.MAX_LOOKAHEAD),this.recordingProdStack.push(s),a.call(this),i.definition.push(s),this.recordingProdStack.pop(),Zu}r(Bs,"recordProd");function qW(e,t){Xu(t);let n=tn(this.recordingProdStack),o=q(e)===!1,i=o===!1?e:e.DEF,a=new Qe({definition:[],idx:t,ignoreAmbiguities:o&&e.IGNORE_AMBIGUITIES===!0});W(e,"MAX_LOOKAHEAD")&&(a.maxLookahead=e.MAX_LOOKAHEAD);let s=Nr(i,c=>Wt(c.GATE));return a.hasPredicates=s,n.definition.push(a),V(i,c=>{let l=new ke({definition:[]});a.definition.push(l),W(c,"IGNORE_AMBIGUITIES")?l.ignoreAmbiguities=c.IGNORE_AMBIGUITIES:W(c,"GATE")&&(l.ignoreAmbiguities=!0),this.recordingProdStack.push(l),c.ALT.call(this),this.recordingProdStack.pop()}),Zu}r(qW,"recordOrProd");function Kv(e){return e===0?"":`${e}`}r(Kv,"getIdxSuffix");function Xu(e){if(e<0||e>Yv){let t=new Error(`Invalid DSL Method idx value: <${e}>
	Idx value must be a none negative value smaller than ${Yv+1}`);throw t.KNOWN_RECORDER_ERROR=!0,t}}r(Xu,"assertMethodIdxIsValid");var $u=class{static{r(this,"PerformanceTracer")}initPerformanceTracer(t){if(W(t,"traceInitPerf")){let n=t.traceInitPerf,o=typeof n=="number";this.traceInitMaxIdent=o?n:1/0,this.traceInitPerf=o?n>0:n}else this.traceInitMaxIdent=0,this.traceInitPerf=Kt.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(t,n){if(this.traceInitPerf===!0){this.traceInitIndent++;let o=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${o}--> <${t}>`);let{time:i,value:a}=_s(n),s=i>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s(`${o}<-- <${t}> time: ${i}ms`),this.traceInitIndent--,a}else return n()}};function Xv(e,t){t.forEach(n=>{let o=n.prototype;Object.getOwnPropertyNames(o).forEach(i=>{if(i==="constructor")return;let a=Object.getOwnPropertyDescriptor(o,i);a&&(a.get||a.set)?Object.defineProperty(e.prototype,i,a):e.prototype[i]=n.prototype[i]})})}r(Xv,"applyMixins");var Gi=No(Mr,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Gi);var Kt=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:Sn,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),ji=Object.freeze({recoveryValueFunc:r(()=>{},"recoveryValueFunc"),resyncEnabled:!0}),Et;(function(e){e[e.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",e[e.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",e[e.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",e[e.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",e[e.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",e[e.LEFT_RECURSION=5]="LEFT_RECURSION",e[e.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",e[e.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",e[e.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",e[e.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",e[e.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",e[e.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",e[e.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",e[e.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(Et||(Et={}));var qs=class e{static{r(this,"Parser")}static performSelfAnalysis(t){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let t;this.selfAnalysisDone=!0;let n=this.className;this.TRACE_INIT("toFastProps",()=>{xs(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),V(this.definedRulesNames,i=>{let s=this[i].originalGrammarAction,c;this.TRACE_INIT(`${i} Rule`,()=>{c=this.topLevelRuleRecord(i,s)}),this.gastProductionsCache[i]=c})}finally{this.disableRecording()}});let o=[];if(this.TRACE_INIT("Grammar Resolving",()=>{o=Fv({rules:Ee(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(o)}),this.TRACE_INIT("Grammar Validations",()=>{if(re(o)&&this.skipValidations===!1){let i=Iv({rules:Ee(this.gastProductionsCache),tokenTypes:Ee(this.tokensMap),errMsgProvider:wr,grammarName:n}),a=vv({lookaheadStrategy:this.lookaheadStrategy,rules:Ee(this.gastProductionsCache),tokenTypes:Ee(this.tokensMap),grammarName:n});this.definitionErrors=this.definitionErrors.concat(i,a)}}),re(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{let i=VU(Ee(this.gastProductionsCache));this.resyncFollows=i}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var i,a;(a=(i=this.lookaheadStrategy).initialize)===null||a===void 0||a.call(i,{rules:Ee(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(Ee(this.gastProductionsCache))})),!e.DEFER_DEFINITION_ERRORS_HANDLING&&!re(this.definitionErrors))throw t=G(this.definitionErrors,i=>i.message),new Error(`Parser Definition Errors detected:
 ${t.join(`
-------------------------------
`)}`)})}constructor(t,n){this.definitionErrors=[],this.selfAnalysisDone=!1;let o=this;if(o.initErrorHandler(n),o.initLexerAdapter(),o.initLooksAhead(n),o.initRecognizerEngine(t,n),o.initRecoverable(n),o.initTreeBuilder(n),o.initContentAssist(),o.initGastRecorder(n),o.initPerformanceTracer(n),W(n,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=W(n,"skipValidations")?n.skipValidations:Kt.skipValidations}};qs.DEFER_DEFINITION_ERRORS_HANDLING=!1;Xv(qs,[Pu,qu,Wu,zu,Yu,Hu,Ku,Ju,Qu,$u]);var Gs=class extends qs{static{r(this,"CstParser")}constructor(t,n=Kt){let o=be(n);o.outputCst=!0,super(t,o)}};var gy=new Map;function x(e){let{pattern:t}=e,n=t.toString();if(gy.has(n))return gy.get(n);let o=En(e);return gy.set(n,o),o}r(x,"createUniqToken");function u(e,t){return x({name:`${e} token`,pattern:new RegExp(e),label:e,...t})}r(u,"createTokenByName");var H=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),ed=u("conditional",{longer_alt:H,categories:[H]}),Vi=u("if",{longer_alt:H,categories:[H]}),td=u("else",{longer_alt:H,categories:[H]}),rd=u("elseif",{longer_alt:H,categories:[H]}),nd=u("for",{longer_alt:H,categories:[H]}),od=u("foreach",{longer_alt:H,categories:[H]}),id=u("remove",{longer_alt:H,categories:[H]}),ad=u("await",{longer_alt:H,categories:[H]}),Fr=u("each",{longer_alt:H,categories:[H]}),sd=u("try_catch",{longer_alt:H,categories:[H]}),js=u("try",{longer_alt:H,categories:[H]}),Vs=u("catch",{longer_alt:H,categories:[H]}),cd=u("finally",{longer_alt:H,categories:[H]}),It=u("as",{longer_alt:H,categories:[H]}),Wi=u("return",{longer_alt:H,categories:[H]}),ld=u("switch",{longer_alt:H,categories:[H]}),ud=u("case",{longer_alt:H,categories:[H]}),dd=u("default",{longer_alt:H,categories:[H]}),pd=u("while",{longer_alt:H,categories:[H]}),zi=u("group",{longer_alt:H,categories:[H]}),fd=u("throw",{longer_alt:H,categories:[H]}),Hi=u("break",{longer_alt:H,categories:[H]}),md=u("continue",{longer_alt:H,categories:[H]}),Ws=x({name:"GreaterThan",pattern:/>/,label:">"}),zs=x({name:"GreaterThanOrEqual",pattern:/>=/,label:">="}),Hs=x({name:"SmallerThan",pattern:/</,label:"<"}),Ys=x({name:"SmallerThanOrEq",pattern:/<=/,label:"<="}),hd=x({name:"Minus",pattern:/-/,label:"-"}),gd=x({name:"Plus",pattern:/\+/,label:"+"}),Td=x({name:"Multiply",pattern:/\*/,label:"*"}),Ed=x({name:"Divide",pattern:/\//,label:"/"}),Ks=x({name:"IsEqual",label:"==",pattern:/==/}),Sd=x({name:"IsStrictEqual",label:"===",pattern:/===/}),Js=x({name:"IsNotEqual",label:"!=",pattern:/!=/}),yd=x({name:"IsStrictNotEqual",label:"!==",pattern:/!==/}),R=x({name:"EqualToken",label:"=",pattern:/=/}),k=x({name:"LCurly",pattern:/{/,label:"{"}),A=x({name:"RCurly",pattern:/}/,label:"}"}),it=x({name:"LSquare",pattern:/\[/,label:"["}),at=x({name:"RSquare",pattern:/]/,label:"]"}),ce=x({name:"LParent",pattern:/\(/,label:"("}),ne=x({name:"RParent",pattern:/\)/,label:")"}),dr=x({name:"Question",pattern:/\?/,label:"?"}),ye=x({name:"ColonToken",pattern:/:/,label:":"}),St=x({name:"PipeToken",pattern:/\|/,label:"|"}),Oe=x({name:"CommaToken",pattern:/,/,label:","}),_d=x({name:"AndTestToken",pattern:/&&/,label:"&&"}),xd=x({name:"NullishCoalescingToken",pattern:/\?\?/,label:"??"}),Ty=x({name:"OrTestToken",pattern:/\|\|/,label:"||"}),Qs=x({name:"JsonBetweenToken",pattern:/between/,label:"between",longer_alt:H,categories:[H]}),Xs=x({name:"JsonContainsToken",pattern:/@>/,label:"@>"}),Zs=x({name:"JsonContainsStringToken",pattern:/contains/,label:"contains",longer_alt:H,categories:[H]}),Ey=x({name:"JsonEqualToken",pattern:/=/,label:"="}),$s=x({name:"JsonILikeToken",pattern:/ilike/,label:"ilike",longer_alt:H,categories:[H]}),ec=x({name:"JsonIncludesToken",pattern:/includes/,label:"includes",longer_alt:H,categories:[H]}),tc=x({name:"JsonLikeToken",pattern:/like/,label:"like",longer_alt:H,categories:[H]}),rc=x({name:"JsonNotBetweenToken",pattern:/not between/,label:"not between"}),nc=x({name:"JsonNotContainsToken",pattern:/not contains/,label:"not contains"}),oc=x({name:"JsonNotILikeToken",pattern:/not ilike/,label:"not ilike"}),ic=x({name:"JsonNotInToken",pattern:/not in/,label:"not in"}),ac=x({name:"JsonNotIncludesToken",pattern:/not includes/,label:"not includes"}),sc=x({name:"JsonNotLikeToken",pattern:/not like/,label:"not like"}),cc=x({name:"JsonNotOverlapsToken",pattern:/not overlaps/,label:"not overlaps"}),lc=x({name:"JsonNotRegexToken",pattern:/!~/,label:"!~"}),uc=x({name:"JsonOverlapsToken",pattern:/overlaps/,label:"overlaps",longer_alt:H,categories:[H]}),bd=x({name:"JsonRegexToken",pattern:/~/,label:"~"}),Zv=x({name:"JsonSearchToken",pattern:/search/,label:"search",longer_alt:H,categories:[H]}),$v=[rc,nc,oc,ac,ic,Qs,Xs,Zs,$s,ec,tc,sc,cc,lc,uc,bd,Zv,xd,_d,Ty,ed,Vi,rd,td,od,nd,Fr,id,ad,It,Wi,ld,ud,dd,pd,zi,fd,Hi,md,zs,Ws,Ys,Hs,hd,gd,Td,Ed,Sd,Ks,yd,Js,R,k,A,it,at,ce,ne,dr,ye,St,Oe,sd,js,Vs,cd,Ey];function eC(e){switch(e){case Vi.name:case td.name:case rd.name:case Fr.name:case It.name:case js.name:case Vs.name:case cd.name:return"keyword";case ed.name:case ad.name:case Wi.name:case zi.name:case fd.name:case Hi.name:case md.name:case nd.name:case ld.name:case id.name:case od.name:case pd.name:case ud.name:case dd.name:case sd.name:return"function";case k.name:return"operator.openingCurly";case A.name:return"operator.closingCurly";case it.name:return"operator.openingSquare";case at.name:return"operator.closingSquare";case ce.name:return"operator.openingParenthesis";case ne.name:return"operator.closingParenthesis";case Ws.name:case zs.name:case Hs.name:case Ys.name:case hd.name:case gd.name:case _d.name:case Td.name:case Ed.name:case R.name:case Ks.name:case Js.name:case xd.name:case rc.name:case nc.name:case oc.name:case ac.name:case ic.name:case Qs.name:case Xs.name:case Zs.name:case $s.name:case ec.name:case tc.name:case sc.name:case cc.name:case lc.name:case uc.name:case bd.name:return"operator";case Zv.name:return"variable";case dr.name:case ye.name:case St.name:case Oe.name:return"punctuation";default:return null}}r(eC,"mapTokenToType");var Sy=x({name:"DisabledStatementToken",pattern:/![a-zA-Z][\w.]*/}),tC=x({name:"IntCast",pattern:/!int/,label:"!int"}),rC=x({name:"BoolCast",pattern:/!bool/,label:"!bool"}),nC=x({name:"ArrayCast",pattern:/!array/,label:"!array"}),oC=x({name:"TextCast",pattern:/!text/,label:"!text"}),iC=x({name:"ExpressionCast",pattern:/!expr/,label:"!expr"}),aC=x({name:"DecimalCast",pattern:/!decimal/,label:"!decimal"}),sC=x({name:"ObjectCast",pattern:/!object/,label:"!object"}),cC=x({name:"TimestampCast",pattern:/!timestamp/,label:"!timestamp"}),br=x({name:"ExclamationToken",pattern:/!/}),Rd=[tC,nC,oC,iC,aC,sC,cC,rC,br];function lC(e){switch(e){case tC.name:case nC.name:case oC.name:case iC.name:case aC.name:case sC.name:case cC.name:case rC.name:return"type";case Sy.name:return"comment";case br.name:return"operator";default:return null}}r(lC,"mapTokenToType");var uC=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),kd=u("addon",{longer_alt:uC,categories:[uC]}),dC=[kd];function pC(e){switch(e){case kd.name:return"keyword";default:return null}}r(pC,"mapTokenToType");var Yi=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Ad=u("agent",{longer_alt:Yi,categories:[Yi]}),Ud=u("llm",{longer_alt:Yi,categories:[Yi]}),vd=u("tools",{longer_alt:Yi,categories:[Yi]}),fC=[Ad,Ud,vd];function mC(e){switch(e){case Ad.name:case Ud.name:case vd.name:return"keyword";default:return null}}r(mC,"mapTokenToType");var Ki=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Cd=u("actions",{longer_alt:Ki,categories:[Ki]}),Ld=u("active",{longer_alt:Ki,categories:[Ki]}),Od=u("agent_trigger",{longer_alt:Ki,categories:[Ki]}),hC=[Cd,Ld,Od];function gC(e){switch(e){case Cd.name:case Od.name:return"keyword";case Ld.name:return"variable";default:return null}}r(gC,"mapTokenToType");var Pt=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Nd=u("ai",{longer_alt:Pt,categories:[Pt]}),Md=u("agent",{longer_alt:Pt,categories:[Pt]}),Ji=u("run",{longer_alt:Pt,categories:[Pt]}),wd=u("external",{longer_alt:Pt,categories:[Pt]}),Fd=u("mcp",{longer_alt:Pt,categories:[Pt]}),Id=u("tool",{longer_alt:Pt,categories:[Pt]}),Pd=u("list",{longer_alt:Pt,categories:[Pt]}),Dd=u("server_details",{longer_alt:Pt,categories:[Pt]}),TC=[Nd,Md,Ji,wd,Fd,Id,Pd,Dd];function EC(e){switch(e){case Nd.name:case Md.name:case Ji.name:case wd.name:case Fd.name:case Id.name:case Pd.name:case Dd.name:return"keyword";default:return null}}r(EC,"mapTokenToType");var ar=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Bd=u("api",{longer_alt:ar,categories:[ar]}),qd=u("request",{longer_alt:ar,categories:[ar]}),Gd=u("call",{longer_alt:ar,categories:[ar]}),jd=u("realtime_event",{longer_alt:ar,categories:[ar]}),Vd=u("stream",{longer_alt:ar,categories:[ar]}),Wd=u("lambda",{longer_alt:ar,categories:[ar]}),SC=u("microservice",{longer_alt:ar,categories:[ar]}),yC=[Bd,qd,Gd,jd,Vd,Wd,SC];function _C(e){switch(e){case Bd.name:case qd.name:case Wd.name:case jd.name:case Vd.name:case SC.name:case Gd.name:return"function";default:return null}}r(_C,"mapTokenToType");var on=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Qi=u("active",{longer_alt:on,categories:[on]}),zd=u("api_group",{longer_alt:on,categories:[on]}),Hd=u("canonical",{longer_alt:on,categories:[on]}),Yd=u("cors",{longer_alt:on,categories:[on]}),Kd=u("swagger",{longer_alt:on,categories:[on]}),xC=[Qi,zd,Hd,Yd,Kd];function bC(e){switch(e){case zd.name:return"keyword";case Qi.name:case Hd.name:case Yd.name:case Kd.name:return"variable";default:return null}}r(bC,"mapTokenToType");var Ie=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Jd=u("array",{longer_alt:Ie,categories:[Ie]}),Qd=u("every",{longer_alt:Ie,categories:[Ie]}),Xd=u("filter_count",{longer_alt:Ie,categories:[Ie]}),Zd=u("filter",{longer_alt:Ie,categories:[Ie]}),$d=u("find",{longer_alt:Ie,categories:[Ie]}),ep=u("find_index",{longer_alt:Ie,categories:[Ie]}),tp=u("has",{longer_alt:Ie,categories:[Ie]}),rp=u("merge",{longer_alt:Ie,categories:[Ie]}),np=u("pop",{longer_alt:Ie,categories:[Ie]}),op=u("push",{longer_alt:Ie,categories:[Ie]}),ip=u("shift",{longer_alt:Ie,categories:[Ie]}),ap=u("unshift",{longer_alt:Ie,categories:[Ie]}),RC=[Jd,Qd,Xd,Zd,ep,$d,tp,rp,np,op,ip,ap];function kC(e){switch(e){case Jd.name:case Qd.name:case Xd.name:case Zd.name:case $d.name:case ep.name:case tp.name:case rp.name:case np.name:case op.name:case ip.name:case ap.name:return"function";default:return null}}r(kC,"mapTokenToType");var sp=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),cp=u("branch",{longer_alt:sp,categories:[sp]}),AC=u("color",{longer_alt:sp,categories:[sp]}),UC=[cp,AC];function vC(e){switch(e){case cp.name:return"keyword";case AC.name:return"variable";default:return null}}r(vC,"mapTokenToType");var oe=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),lp=u("cloud",{longer_alt:oe,categories:[oe]}),up=u("algolia",{longer_alt:oe,categories:[oe]}),dp=u("google",{longer_alt:oe,categories:[oe]}),pp=u("aws",{longer_alt:oe,categories:[oe]}),fp=u("elasticsearch",{longer_alt:oe,categories:[oe]}),mp=u("azure",{longer_alt:oe,categories:[oe]}),hp=u("storage",{longer_alt:oe,categories:[oe]}),gp=u("read_file",{longer_alt:oe,categories:[oe]}),Tp=u("delete_file",{longer_alt:oe,categories:[oe]}),Ep=u("get_file_info",{longer_alt:oe,categories:[oe]}),Sp=u("list_directory",{longer_alt:oe,categories:[oe]}),yp=u("s3",{longer_alt:oe,categories:[oe]}),_p=u("sign_url",{longer_alt:oe,categories:[oe]}),xp=u("upload_file",{longer_alt:oe,categories:[oe]}),bp=u("opensearch",{longer_alt:oe,categories:[oe]}),Rp=u("document",{longer_alt:oe,categories:[oe]}),kp=u("query",{longer_alt:oe,categories:[oe]}),Xi=u("request",{longer_alt:oe,categories:[oe]}),CC=[lp,up,dp,pp,fp,mp,hp,gp,Tp,Ep,Sp,yp,_p,xp,bp,Rp,kp,Xi];function LC(e){switch(e){case lp.name:case up.name:case dp.name:case pp.name:case fp.name:case mp.name:case hp.name:case yp.name:case bp.name:case gp.name:case Tp.name:case Ep.name:case Sp.name:case _p.name:case xp.name:case Rp.name:case kp.name:case Xi.name:return"function";default:return null}}r(LC,"mapTokenToType");var Y=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Ap=u("int",{longer_alt:Y,categories:[Y]}),Up=u("timestamp",{longer_alt:Y,categories:[Y]}),Zi=u("text",{longer_alt:Y,categories:[Y]}),vp=u("uuid",{longer_alt:Y,categories:[Y]}),Cp=u("vector",{longer_alt:Y,categories:[Y]}),Lp=u("enum",{longer_alt:Y,categories:[Y]}),Op=u("date",{longer_alt:Y,categories:[Y]}),Np=u("bool",{longer_alt:Y,categories:[Y]}),Mp=u("decimal",{longer_alt:Y,categories:[Y]}),wp=u("email",{longer_alt:Y,categories:[Y]}),Fp=u("password",{longer_alt:Y,categories:[Y]}),Ip=u("json",{longer_alt:Y,categories:[Y]}),Pp=u("file",{longer_alt:Y,categories:[Y]}),Dp=u("object",{longer_alt:Y,categories:[Y]}),Bp=u("image",{longer_alt:Y,categories:[Y]}),qp=u("video",{longer_alt:Y,categories:[Y]}),Gp=u("audio",{longer_alt:Y,categories:[Y]}),jp=u("attachment",{longer_alt:Y,categories:[Y]}),Vp=u("geo_point",{longer_alt:Y,categories:[Y]}),Wp=u("geo_multipoint",{longer_alt:Y,categories:[Y]}),zp=u("geo_linestring",{longer_alt:Y,categories:[Y]}),Hp=u("geo_multilinestring",{longer_alt:Y,categories:[Y]}),Yp=u("geo_polygon",{longer_alt:Y,categories:[Y]}),Kp=u("geo_multipolygon",{longer_alt:Y,categories:[Y]}),Jp=u("dblink",{longer_alt:Y,categories:[Y]}),Qp=u("agent",{longer_alt:Y,categories:[Y]}),Xp=u("mcp_server",{longer_alt:Y,categories:[Y]}),Zp=u("channel",{longer_alt:Y,categories:[Y]}),$p=u("canonical",{longer_alt:Y,categories:[Y]}),OC=[Qp,$p,Xp,Zp,Jp,Ap,Up,Zi,vp,Cp,Lp,Op,Np,Mp,wp,Fp,Ip,Pp,Dp,Bp,qp,Gp,jp,Vp,Wp,zp,Hp,Yp,Kp];function NC(e){switch(e){case Qp.name:case $p.name:case Xp.name:case Zp.name:case Jp.name:case Ap.name:case Up.name:case Zi.name:case vp.name:case Cp.name:case Lp.name:case Op.name:case Np.name:case Mp.name:case wp.name:case Fp.name:case Ip.name:case Pp.name:case Dp.name:case Bp.name:case qp.name:case Gp.name:case jp.name:case Vp.name:case Wp.name:case zp.name:case Hp.name:case Yp.name:case Kp.name:return"type";default:return null}}r(NC,"mapTokenToType");var Ir=x({name:"CommentToken",label:"// comment",pattern:{exec:r((e,t)=>{if(!e.slice(t).startsWith("//"))return null;if(t===0)return e.slice(t).match(/.*(?=\n|$)/);let n=t-1;for(;n>=0;){let o=e[n];if(o===`
`||o==="\r")return e.slice(t).match(/.*(?=\n|$)/);if(o!==" "&&o!=="	")return null;n--}return e.slice(t).match(/.*(?=\n|$)/)},"exec")},line_breaks:!1}),MC=[Ir];function wC(e){switch(e){case Ir.name:return"comment";default:return}}r(wC,"mapTokenToType");var ee=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),ef=u("db",{longer_alt:ee,categories:[ee]}),tf=u("query",{longer_alt:ee,categories:[ee]}),rf=u("get",{longer_alt:ee,categories:[ee]}),nf=u("add",{longer_alt:ee,categories:[ee]}),of=u("add_or_edit",{longer_alt:ee,categories:[ee]}),af=u("del",{longer_alt:ee,categories:[ee]}),sf=u("edit",{longer_alt:ee,categories:[ee]}),FC=u("update",{longer_alt:ee,categories:[ee]}),cf=u("has",{longer_alt:ee,categories:[ee]}),lf=u("patch",{longer_alt:ee,categories:[ee]}),uf=u("schema",{longer_alt:ee,categories:[ee]}),df=u("transaction",{longer_alt:ee,categories:[ee]}),pf=u("truncate",{longer_alt:ee,categories:[ee]}),$i=u("direct_query",{longer_alt:ee,categories:[ee]}),ff=u("set_datasource",{longer_alt:ee,categories:[ee]}),IC=u("bulk",{longer_alt:ee,categories:[ee]}),mf=u("external",{longer_alt:ee,categories:[ee]}),hf=u("mssql",{longer_alt:ee,categories:[ee]}),gf=u("mysql",{longer_alt:ee,categories:[ee]}),Tf=u("postgres",{longer_alt:ee,categories:[ee]}),Ef=u("oracle",{longer_alt:ee,categories:[ee]}),PC=[ef,tf,rf,of,nf,af,sf,FC,cf,lf,uf,df,pf,$i,ff,IC,mf,hf,gf,Tf,Ef];function DC(e){switch(e){case uf.name:return"keyword";case ef.name:case IC.name:case mf.name:case hf.name:case gf.name:case Tf.name:case Ef.name:case tf.name:case rf.name:case nf.name:case of.name:case af.name:case sf.name:case FC.name:case cf.name:case lf.name:case df.name:case pf.name:case $i.name:case ff.name:return"function";default:return null}}r(DC,"mapTokenToType");var ea=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Sf=u("debug",{longer_alt:ea,categories:[ea]}),yf=u("stop",{longer_alt:ea,categories:[ea]}),_f=u("log",{longer_alt:ea,categories:[ea]}),BC=[Sf,yf,_f];function qC(e){switch(e){case Sf.name:case yf.name:case _f.name:return"function";default:return null}}r(qC,"mapTokenToType");var te=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),ta=u("expect",{longer_alt:te,categories:[te]}),ra=u("to_be_true",{longer_alt:te,categories:[te]}),na=u("to_be_false",{longer_alt:te,categories:[te]}),oa=u("to_be_in_the_past",{longer_alt:te,categories:[te]}),ia=u("to_be_in_the_future",{longer_alt:te,categories:[te]}),aa=u("to_be_defined",{longer_alt:te,categories:[te]}),sa=u("to_not_be_defined",{longer_alt:te,categories:[te]}),ca=u("to_be_null",{longer_alt:te,categories:[te]}),la=u("to_not_be_null",{longer_alt:te,categories:[te]}),ua=u("to_be_empty",{longer_alt:te,categories:[te]}),da=u("to_start_with",{longer_alt:te,categories:[te]}),pa=u("to_end_with",{longer_alt:te,categories:[te]}),fa=u("to_be_greater_than",{longer_alt:te,categories:[te]}),ma=u("to_be_less_than",{longer_alt:te,categories:[te]}),ha=u("to_match",{longer_alt:te,categories:[te]}),ga=u("to_equal",{longer_alt:te,categories:[te]}),Ta=u("to_not_equal",{longer_alt:te,categories:[te]}),Ea=u("to_contain",{longer_alt:te,categories:[te]}),Sa=u("to_be_within",{longer_alt:te,categories:[te]}),ya=u("to_throw",{longer_alt:te,categories:[te]}),GC=[ta,ra,na,oa,ia,aa,sa,ca,la,ua,da,pa,fa,ma,ha,ga,Ta,Ea,Sa,ya];function jC(e){switch(e){case ta.name:case ra.name:case na.name:case oa.name:case ia.name:case aa.name:case sa.name:case ca.name:case la.name:case ua.name:case da.name:case pa.name:case fa.name:case ma.name:case ha.name:case ga.name:case Ta.name:case Ea.name:case Sa.name:case ya.name:return"function";default:return null}}r(jC,"mapTokenToType");var VC=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),xf=u("filters",{longer_alt:VC,categories:[VC]}),bf=x({name:"DbLinkFilter",label:"@",pattern:/@/}),WC=[xf,bf];function zC(e){switch(e){case xf.name:return"keyword";case bf.name:return"function";default:return null}}r(zC,"mapTokenToType");var _a=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),eo=u("function",{longer_alt:_a,categories:[_a]}),Rf=u("run",{longer_alt:_a,categories:[_a]}),kf=u("call",{longer_alt:_a,categories:[_a]}),HC=[eo,Rf,kf];function YC(e){switch(e){case eo.name:return"keyword";case Rf.name:case kf.name:return"function";default:return null}}r(YC,"mapTokenToType");var Af=x({name:"ExpressionLiteral",label:"`...`",pattern:/`([^`\\]|\\.)*`/}),U=x({name:"StringLiteral",label:'"..."',pattern:/"([^"\\]|\\.)*"/}),to=x({name:"SingleQuotedStringLiteral",pattern:/'([^'\\]|\\.)*'/,label:"''"}),Ct=x({name:"FloatLiteral",label:"floating point number",pattern:/-?\d+\.\d+/}),ze=x({name:"IntegerLiteral",label:"integer",pattern:/-?\d+/,longer_alt:Ct}),Wle=x({name:"DoubleDollar",label:"$$",pattern:/\$\$/}),Uf=x({name:"TimestampLiteral",pattern:/\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\s([01]\d|2[0-3]):([0-5]\d):([0-5]\d)[+-]\d{4}/}),KC=[Uf,Af,U,to,ze,Ct];function JC(e){switch(e){case Af.name:return"macro";case U.name:case Uf.name:return"doubleString";case to.name:return"singleString";case ze.name:case Ct.name:return"number";default:return null}}r(JC,"mapTokenToType");var mt=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),vf=u("math",{longer_alt:mt,categories:[mt]}),Cf=u("add",{longer_alt:mt,categories:[mt]}),Lf=u("div",{longer_alt:mt,categories:[mt]}),Of=u("mod",{longer_alt:mt,categories:[mt]}),Nf=u("mul",{longer_alt:mt,categories:[mt]}),Mf=u("sub",{longer_alt:mt,categories:[mt]}),wf=u("bitwise",{longer_alt:mt,categories:[mt]}),Ff=u("and",{longer_alt:mt,categories:[mt]}),If=u("or",{longer_alt:mt,categories:[mt]}),Pf=u("xor",{longer_alt:mt,categories:[mt]}),QC=[vf,Cf,Lf,Of,Nf,Mf,wf,Ff,If,Pf];function XC(e){switch(e){case vf.name:case Cf.name:case Lf.name:case Of.name:case Nf.name:case Mf.name:case wf.name:case Ff.name:case If.name:case Pf.name:return"function";default:return null}}r(XC,"mapTokenToType");var Df=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Bf=u("instructions",{longer_alt:Df,categories:[Df]}),xa=u("tool",{longer_alt:Df,categories:[Df]}),ZC=[Bf,xa];function $C(e){switch(e){case xa.name:return"keyword";case Bf.name:return"variable";default:return null}}r($C,"mapTokenToType");var Mo=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),qf=u("active",{longer_alt:Mo,categories:[Mo]}),Gf=u("instructions",{longer_alt:Mo,categories:[Mo]}),jf=u("mcp_server",{longer_alt:Mo,categories:[Mo]}),Vf=u("tools",{longer_alt:xa,categories:[Mo]}),eL=[qf,Gf,jf,Vf];function tL(e){switch(e){case qf.name:case jf.name:case Vf.name:return"keyword";case Gf.name:return"variable";default:return null}}r(tL,"mapTokenToType");var ba=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Wf=u("actions",{longer_alt:ba,categories:[ba]}),zf=u("active",{longer_alt:ba,categories:[ba]}),Hf=u("mcp_server_trigger",{longer_alt:ba,categories:[ba]}),rL=[Wf,zf,Hf];function nL(e){switch(e){case Wf.name:case Hf.name:return"keyword";case zf.name:return"variable";default:return null}}r(nL,"mapTokenToType");var Ra=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Yf=u("exception_policy",{longer_alt:Ra,categories:[Ra]}),Kf=u("middleware",{longer_alt:Ra,categories:[Ra]}),Jf=u("response_strategy",{longer_alt:Ra,categories:[Ra]}),oL=[Yf,Kf,Jf];function iL(e){switch(e){case Kf.name:return"keyword";case Yf.name:case Jf.name:return"variable";default:return null}}r(iL,"mapTokenToType");var Dt=En({name:'"""..."""',pattern:/("""\r?\n(?:[\s\S]*?\r?\n)?[ ]*""")|('''\r?\n(?:[\s\S]*?\r?\n)?[ ]*''')/}),Qf=En({name:"MultiLineExpression",pattern:/```\r?\n(?:[\s\S]*?\r?\n)?[ ]*```/}),aL=[Dt,Qf];function sL(e){switch(e){case Dt.name:return"tripleString";case Qf.name:return"tripleMacro";default:return null}}r(sL,"mapTokenToType");var ro=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Xf=u("object",{longer_alt:ro,categories:[ro]}),Zf=u("entries",{longer_alt:ro,categories:[ro]}),$f=u("keys",{longer_alt:ro,categories:[ro]}),em=u("values",{longer_alt:ro,categories:[ro]}),cL=[Xf,Zf,$f,em];function lL(e){switch(e){case Xf.name:case Zf.name:case $f.name:case em.name:return"function";default:return null}}r(lL,"mapTokenToType");var ie=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),tm=u("query",{longer_alt:ie,categories:[ie]}),ka=u("verb",{longer_alt:ie,categories:[ie]}),Aa=u("GET",{longer_alt:ie,categories:[ie]}),Ua=u("PATCH",{longer_alt:ie,categories:[ie]}),va=u("POST",{longer_alt:ie,categories:[ie]}),Ca=u("PUT",{longer_alt:ie,categories:[ie]}),La=u("DELETE",{categories:[ie],longer_alt:ie}),rm=u("where",{longer_alt:ie,categories:[ie]}),nm=u("additional_where",{longer_alt:ie,categories:[ie]}),om=u("sort",{longer_alt:ie,categories:[ie]}),im=u("override_sort",{longer_alt:ie,categories:[ie]}),am=u("join",{longer_alt:ie,categories:[ie]}),uL=u("dblink",{longer_alt:ie,categories:[ie]}),sm=u("paging",{longer_alt:ie,categories:[ie]}),cm=u("distinct",{longer_alt:ie,categories:[ie]}),Oa=u("output",{longer_alt:ie,categories:[ie]}),lm=u("addon",{longer_alt:ie,categories:[ie]}),dc=u("eval",{longer_alt:ie,categories:[ie]}),dL=[nm,rm,om,im,am,tm,ka,Aa,Ua,va,Ca,La,uL,cm,sm,Oa,lm,dc];function pL(e){switch(e){case tm.name:case ka.name:return"keyword";case Aa.name:case Ua.name:case va.name:case Ca.name:case La.name:return"enumMember";case rm.name:case am.name:case uL.name:case cm.name:case sm.name:case Oa.name:case lm.name:case dc.name:case om.name:case im.name:case nm.name:return"property";default:return null}}r(pL,"mapTokenToType");var Na=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),um=u("actions",{longer_alt:Na,categories:[Na]}),dm=u("active",{longer_alt:Na,categories:[Na]}),pm=u("realtime_trigger",{longer_alt:Na,categories:[Na]}),fL=[um,dm,pm];function mL(e){switch(e){case um.name:case pm.name:return"keyword";case dm.name:return"variable";default:return null}}r(mL,"mapTokenToType");var fe=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),fm=u("redis",{longer_alt:fe,categories:[fe]}),mm=u("count",{longer_alt:fe,categories:[fe]}),hm=u("decr",{longer_alt:fe,categories:[fe]}),gm=u("del",{longer_alt:fe,categories:[fe]}),Tm=u("get",{longer_alt:fe,categories:[fe]}),Em=u("has",{longer_alt:fe,categories:[fe]}),Sm=u("incr",{longer_alt:fe,categories:[fe]}),ym=u("keys",{longer_alt:fe,categories:[fe]}),_m=u("pop",{longer_alt:fe,categories:[fe]}),xm=u("push",{longer_alt:fe,categories:[fe]}),bm=u("range",{longer_alt:fe,categories:[fe]}),Rm=u("ratelimit",{longer_alt:fe,categories:[fe]}),km=u("remove",{longer_alt:fe,categories:[fe]}),Am=u("set",{longer_alt:fe,categories:[fe]}),Um=u("shift",{longer_alt:fe,categories:[fe]}),vm=u("unshift",{longer_alt:fe,categories:[fe]}),hL=[fm,mm,hm,gm,Tm,Em,Sm,ym,_m,xm,bm,Rm,km,Am,Um,vm];function gL(e){switch(e){case fm.name:case mm.name:case hm.name:case gm.name:case Tm.name:case Em.name:case Sm.name:case ym.name:case _m.name:case xm.name:case bm.name:case Rm.name:case km.name:case Am.name:case Um.name:case vm.name:return"function";default:return null}}r(gL,"mapTokenToType");var ae=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Cm=u("security",{longer_alt:ae,categories:[ae]}),Lm=u("check_password",{longer_alt:ae,categories:[ae]}),Om=u("create_password",{longer_alt:ae,categories:[ae]}),Nm=u("create_uuid",{longer_alt:ae,categories:[ae]}),Mm=u("create_auth_token",{longer_alt:ae,categories:[ae]}),wm=u("create_curve_key",{longer_alt:ae,categories:[ae]}),Fm=u("create_rsa_key",{longer_alt:ae,categories:[ae]}),Im=u("create_secret_key",{longer_alt:ae,categories:[ae]}),Pm=u("decrypt",{llt:ae,categories:[ae]}),Dm=u("encrypt",{llt:ae,categories:[ae]}),TL=u("generate_pass",{longer_alt:ae,categories:[ae]}),EL=u("generate_uuid",{longer_alt:ae,categories:[ae]}),Bm=u("jwe_decode",{longer_alt:ae,categories:[ae]}),qm=u("jwe_encode",{longer_alt:ae,categories:[ae]}),Gm=u("jws_decode",{longer_alt:ae,categories:[ae]}),jm=u("jws_encode",{longer_alt:ae,categories:[ae]}),Vm=u("random_bytes",{longer_alt:ae,categories:[ae]}),Wm=u("random_number",{longer_alt:ae,categories:[ae]}),SL=[Lm,Om,Nm,Mm,wm,Fm,Im,Pm,Dm,TL,EL,Bm,qm,Gm,jm,Vm,Wm,Cm];function yL(e){switch(e){case Cm.name:case Lm.name:case Om.name:case Nm.name:case Mm.name:case wm.name:case Fm.name:case Im.name:case Pm.name:case Dm.name:case TL.name:case EL.name:case Bm.name:case qm.name:case Gm.name:case jm.name:case Vm.name:case Wm.name:return"function";default:return null}}r(yL,"mapTokenToType");var Bt=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),zm=u("storage",{longer_alt:Bt,categories:[Bt]}),Hm=u("create_image",{longer_alt:Bt,categories:[Bt]}),Ym=u("create_attachment",{longer_alt:Bt,categories:[Bt]}),Km=u("read_file_resource",{longer_alt:Bt,categories:[Bt]}),Jm=u("create_file_resource",{longer_alt:Bt,categories:[Bt]}),_L=u("read_file",{longer_alt:Bt,categories:[Bt]}),Qm=u("delete_file",{longer_alt:Bt,categories:[Bt]}),Xm=u("sign_private_url",{longer_alt:Bt,categories:[Bt]}),xL=[zm,Hm,Ym,Km,Jm,_L,Qm,Xm];function bL(e){switch(e){case zm.name:case Hm.name:case Ym.name:case Km.name:case Jm.name:case _L.name:case Qm.name:case Xm.name:return"function";default:return null}}r(bL,"mapTokenToType");var no=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Zm=u("stream",{longer_alt:no,categories:[no]}),$m=u("from_csv",{longer_alt:no,categories:[no]}),eh=u("from_jsonl",{longer_alt:no,categories:[no]}),th=u("from_request",{longer_alt:no,categories:[no]}),RL=[Zm,$m,eh,th];function kL(e){switch(e){case Zm.name:case $m.name:case eh.name:case th.name:return"function";default:return null}}r(kL,"mapTokenToType");var AL=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),oo=u("table",{longer_alt:AL,categories:[AL]}),UL=[oo];function vL(e){switch(e){case oo.name:return"keyword";default:return null}}r(vL,"mapTokenToType");var io=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),rh=u("actions",{longer_alt:io,categories:[io]}),nh=u("active",{longer_alt:io,categories:[io]}),oh=u("datasources",{longer_alt:io,categories:[io]}),ih=u("table_trigger",{longer_alt:io,categories:[io]}),CL=[rh,nh,oh,ih];function LL(e){switch(e){case rh.name:case ih.name:return"keyword";case nh.name:case oh.name:return"variable";default:return null}}r(LL,"mapTokenToType");var qt=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),ah=u("call",{longer_alt:qt,categories:[qt]}),sh=u("datasource",{longer_alt:qt,categories:[qt]}),OL=u("ends_on",{longer_alt:qt,categories:[qt]}),NL=u("events",{longer_alt:qt,categories:[qt]}),ML=u("freq",{longer_alt:qt,categories:[qt]}),ch=u("schedule",{longer_alt:qt,categories:[qt]}),wL=u("starts_on",{longer_alt:qt,categories:[qt]}),Ma=u("task",{longer_alt:qt,categories:[qt]}),FL=[ah,sh,OL,NL,ML,ch,wL,Ma];function IL(e){switch(e){case sh.name:case ch.name:case Ma.name:return"keyword";case OL.name:case NL.name:case ML.name:case wL.name:return"variable";case ah.name:return"function";default:return null}}r(IL,"mapTokenToType");var Pe=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),PL=u("text",{longer_alt:Pe,categories:[Pe]}),lh=u("append",{longer_alt:Pe,categories:[Pe]}),uh=u("contains",{longer_alt:Pe,categories:[Pe]}),dh=u("ends_with",{longer_alt:Pe,categories:[Pe]}),ph=u("icontains",{longer_alt:Pe,categories:[Pe]}),fh=u("iends_with",{longer_alt:Pe,categories:[Pe]}),mh=u("istarts_with",{longer_alt:Pe,categories:[Pe]}),hh=u("ltrim",{longer_alt:Pe,categories:[Pe]}),gh=u("prepend",{longer_alt:Pe,categories:[Pe]}),Th=u("rtrim",{longer_alt:Pe,categories:[Pe]}),Eh=u("starts_with",{longer_alt:Pe,categories:[Pe]}),Sh=u("trim",{longer_alt:Pe,categories:[Pe]}),DL=[PL,lh,uh,dh,ph,fh,mh,hh,gh,Th,Eh,Sh];function BL(e){switch(e){case PL.name:return"namespace";case lh.name:case uh.name:case dh.name:case ph.name:case fh.name:case mh.name:case hh.name:case gh.name:case Th.name:case Eh.name:case Sh.name:return"method";default:return null}}r(BL,"mapTokenToType");var Ae=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),yh=u("util",{longer_alt:Ae,categories:[Ae]}),_h=u("send_email",{longer_alt:Ae,categories:[Ae]}),xh=u("geo_distance",{longer_alt:Ae,categories:[Ae]}),bh=u("get_all_input",{longer_alt:Ae,categories:[Ae]}),Rh=u("template_engine",{longer_alt:Ae,categories:[Ae]}),kh=u("get_env",{longer_alt:Ae,categories:[Ae]}),Ah=u("get_input",{longer_alt:Ae,categories:[Ae]}),Uh=u("get_vars",{longer_alt:Ae,categories:[Ae]}),vh=u("ip_lookup",{longer_alt:Ae,categories:[Ae]}),Ch=u("post_process",{longer_alt:Ae,categories:[Ae]}),Lh=u("precondition",{longer_alt:Ae,categories:[Ae]}),Oh=u("set_header",{longer_alt:Ae,categories:[Ae]}),Nh=u("sleep",{longer_alt:Ae,categories:[Ae]}),qL=[yh,Rh,xh,_h,bh,kh,Ah,Uh,vh,Ch,Lh,Oh,Nh];function GL(e){switch(e){case yh.name:case xh.name:case bh.name:case kh.name:case Ah.name:case Uh.name:case vh.name:case Ch.name:case Lh.name:case Oh.name:case Nh.name:case Rh.name:case _h.name:return"function";default:return null}}r(GL,"mapTokenToType");var Mh=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),wh=u("var",{longer_alt:Mh,categories:[Mh]}),Fh=u("update",{longer_alt:Mh,categories:[Mh]}),jL=[wh,Fh];function VL(e){switch(e){case wh.name:case Fh.name:return"function";default:return null}}r(VL,"mapTokenToType");var Ne=x({name:"ShortFormVariable",pattern:/(\$[a-zA-Z]\w*)|(\$\$)/,label:"$"}),ao=x({name:"ResponseVariable",pattern:/\$response/,label:"$response",categories:[Ne],longer_alt:Ne}),so=x({name:"LongFormVariable",pattern:/\$var/,label:"$var",longer_alt:Ne}),WL=x({name:"$this",pattern:/\$this/,longer_alt:Ne,categories:[Ne]}),Ih=x({name:"InputVariable",pattern:/\$input/,longer_alt:Ne}),Ph=x({name:"EnvVariable",pattern:/\$env/,label:"$env",longer_alt:Ne}),Dh=x({name:"AuthVariable",pattern:/\$auth/,label:"$auth",longer_alt:Ne}),Bh=x({name:"$remote_ip",pattern:/\$remote_ip/,longer_alt:Ne}),qh=x({name:"$error",pattern:/\$error/,longer_alt:Ne}),Gh=x({name:"$remote_port",pattern:/\$remote_port/,longer_alt:Ne}),jh=x({name:"$remote_user",pattern:/\$remote_user/,longer_alt:Ne}),Vh=x({name:"$remote_passwd",pattern:/\$remote_passwd/,longer_alt:Ne}),Wh=x({name:"$remote_host",pattern:/\$remote_host/,longer_alt:Ne}),zh=x({name:"$request_method",pattern:/\$request_method/,longer_alt:Ne}),zL=[ao,WL,so,Ih,Ph,Dh,qh,Bh,Gh,jh,Vh,Wh,zh,Ne];function HL(e){switch(e){case Ih.name:case qh.name:case Ph.name:case Dh.name:case Bh.name:case Gh.name:case jh.name:case Vh.name:case Wh.name:case zh.name:case ao.name:case so.name:return"enumMember";case WL.name:case Ne.name:return"variable";default:return null}}r(HL,"mapTokenToType");var Hh=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),wa=u("datasource",{longer_alt:Hh,categories:[Hh]}),Yh=u("workflow_test",{longer_alt:Hh,categories:[Hh]}),YL=[wa,Yh];function KL(e){switch(e){case Yh.name:return"keyword";case wa.name:return"variable";default:return null}}r(KL,"mapTokenToType");var co=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Kh=u("acceptance",{longer_alt:co,categories:[co]}),Jh=u("preferences",{longer_alt:co,categories:[co]}),Qh=u("realtime",{longer_alt:co,categories:[co]}),Xh=u("workspace",{longer_alt:co,categories:[co]}),JL=[Kh,Jh,Qh,Xh];function QL(e){switch(e){case Kh.name:case Jh.name:case Qh.name:case Xh.name:return"keyword";default:return null}}r(QL,"mapTokenToType");var Fa=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),Zh=u("actions",{longer_alt:Fa,categories:[Fa]}),$h=u("active",{longer_alt:Fa,categories:[Fa]}),eg=u("workspace_trigger",{longer_alt:Fa,categories:[Fa]}),XL=[Zh,$h,eg];function ZL(e){switch(e){case Zh.name:case eg.name:return"keyword";case $h.name:return"variable";default:return null}}r(ZL,"mapTokenToType");var Rr=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),tg=u("zip",{longer_alt:Rr,categories:[Rr]}),rg=u("add_to_archive",{longer_alt:Rr,categories:[Rr]}),ng=u("create_archive",{longer_alt:Rr,categories:[Rr]}),og=u("delete_from_archive",{longer_alt:Rr,categories:[Rr]}),ig=u("extract",{longer_alt:Rr,categories:[Rr]}),ag=u("view_contents",{longer_alt:Rr,categories:[Rr]}),$L=[tg,rg,ng,og,ig,ag];function eO(e){switch(e){case tg.name:case rg.name:case ng.name:case og.name:case ig.name:case ag.name:return"function"}}r(eO,"mapTokenToType");var T=x({name:"Identifier",pattern:/[a-zA-Z_]\w*/}),M=x({name:"Dot",pattern:/\./,label:"."}),sg=u("tags",{longer_alt:T,categories:[T]}),lo=u("now",{longer_alt:T}),uo=u("null",{longer_alt:T}),cg=x({name:"RegExpToken",label:"regexp",pattern:/\/(?:[^/\n\\]|\\.)+\//}),Gt=x({name:"StaticPathToken",label:"static_path",pattern:/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)+/}),Ia=x({name:"DynamicPath",label:"dynamic_path",pattern:/(([a-zA-Z]\w*)|(\{[a-zA-Z]\w*\}))((\/[a-zA-Z]\w*)|(\/\{[a-zA-Z]\w*\}))+/}),tO=x({name:"WhiteSpace",pattern:/[ \t]+/,group:Ve.SKIPPED,label:"whitespace"}),p=x({name:"NewlineToken",pattern:/(\r?\n)/}),lg=u("type",{longer_alt:T,categories:[T]}),rO=u("field",{longer_alt:T,categories:[T]}),Xe=u("true",{longer_alt:T}),Ze=u("false",{longer_alt:T}),Pa=u("input",{longer_alt:T,categories:[T]}),ug=u("stack",{longer_alt:T,categories:[T]}),dg=u("test",{longer_alt:T,categories:[T]}),pg=u("response",{longer_alt:T,categories:[T]}),fg=u("view",{longer_alt:T,categories:[T]}),mg=u("middleware",{longer_alt:T,categories:[T]}),nO=u("return_aggregate",{pattern:/return_aggregate/}),Da=u("auth",{longer_alt:T,categories:[T]}),oO=u("security",{longer_alt:T,categories:[T]}),hg=u("history",{longer_alt:T,categories:[T]}),gg=u("cache",{longer_alt:T,categories:[T]}),iO=u("guid",{longer_alt:T,categories:[T]}),Tg=u("schema",{longer_alt:T,categories:[T]}),Eg=u("index",{longer_alt:T,categories:[T]}),Sg=u("values",{longer_alt:T,categories:[T]}),yg=u("value",{longer_alt:T,categories:[T]}),_g=u("sensitive",{longer_alt:T,categories:[T]}),Ba=u("description",{longer_alt:T,categories:[T]}),qa=u("disabled",{longer_alt:T,categories:[T]}),xg=u("mock",{longer_alt:T,categories:[T]}),bg=u("docs",{longer_alt:T,categories:[T]}),Rg=x({name:"DbIdentifier",label:"db.identifier",pattern:/dbo=\d+/}),pc=x({name:"JsonInToken",pattern:/in/,label:"in",longer_alt:T,categories:[T]}),fc=Xn([tO,p,...aL,...MC,Gt,Ia,cg,Eg,Pa,nO,...hC,...rL,...eL,...fL,...OC,...dL,...KC,...$v,...Rd,Rg,Sg,yg,Xe,Ze,lg,rO,Da,iO,_g,sg,Ba,bg,qa,xg,Tg,ug,dg,mg,...oL,pg,uo,lo,hg,gg,oO,...xL,...$L,...HC,...SL,...qL,...CL,...XL,...FL,...YL,...WC,...xC,...yC,...zL,...RC,...UL,...CC,...PC,...hL,...DL,...cL,...RL,...BC,...GC,...jL,...QC,...TC,...fC,...ZC,...dC,...UC,...JL,fg,pc,M,T]),jW=[pC,EC,mC,gC,bC,_C,kC,vC,lC,LC,NC,wC,eC,DC,qC,jC,zC,YC,JC,XC,tL,nL,iL,sL,lL,pL,mL,gL,yL,bL,kL,vL,LL,IL,BL,$C,GL,VL,HL,KL,QL,ZL,eO];function kg(e){for(let t of jW){let n=t(e);if(n)return n}switch(e){case gg.name:case hg.name:case Eg.name:case Pa.name:case mg.name:case xg.name:case pg.name:case fg.name:case Tg.name:case oO.name:case ug.name:case dg.name:return"keyword";case Da.name:case Rg.name:case nO.name:case Ba.name:case qa.name:case bg.name:case Ia.name:case rO.name:case iO.name:case _g.name:case Gt.name:case sg.name:case lg.name:case yg.name:case Sg.name:return"variable";case T.name:return"property";case Ze.name:case lo.name:case uo.name:case Xe.name:return"enumMember";case M.name:return"punctuation";case cg.name:return"regexp";case pc.name:return"operator";case p.name:case tO.name:return null;default:return}}r(kg,"mapTokenToType");var VW=new Ve(fc),WW=new Ve([...PS(fc,br),Sy]);function po(e,t=!1){return t?WW.tokenize(e):VW.tokenize(e)}r(po,"lexDocument");var kr=class{static{r(this,"HoverMessageProvider")}constructor(){this.message="",this.range=null}isMatch(t,n,o){return!1}render(t,n,o){return this.message}};var Ga=class extends kr{static{r(this,"FilterMessageProvider")}constructor(t){super(),this.parseFilters(t)}parseFilters(t){this.__filterDoc={};let n=[],o="";for(let i of t.split(`
`))if(i.startsWith("#")){if(o&&(this.__filterDoc[o]=n.join(`
`)),o=i.slice(1).trim(),o.startsWith("!")){let[a,s]=o.slice(1).split(":").map(c=>c.trim()).filter(c=>c);s&&(this.__filterDoc[a]=`\`${a}\` is deprecated, use \`${s}\` instead.`),o=""}n=[]}else n.push(i)}findFilter(t,n){let o=n[t];if(!(o.tokenType.name==="Identifier"||o.tokenType.LONGER_ALT&&o.tokenType.LONGER_ALT.name==="Identifier"||o.tokenType.CATEGORIES&&o.tokenType.CATEGORIES.some(s=>s.name==="Identifier")))return null;let a=o.image;return this.__filterDoc[a]?a:null}isMatch(t,n,o){return t===0||n[t-1].image!=="|"?!1:!!this.findFilter(t,n)}render(t,n){let o=this.findFilter(t,n);if(o)return this.__filterDoc[o]}};var yy=["keyword","namespace","variable","singleString","doubleString","tripleString","method","macro","tripleMacro","property","operator","operator.openingCurly","operator.closingCurly","operator.openingSquare","operator.closingSquare","operator.openingParenthesis","operator.closingParenthesis","function","comment","type","punctuation","regexp","enumMember","number","boolean","bracket"],zW=yy.reduce((e,t,n)=>(e[t]=n,e),{});function mc(e){return zW[e]}r(mc,"encodeTokenType");var Ag=["deg2rad","rad2deg","number_format","sin","asin","asinh","cos","acos","acosh","tan","atan","atanh","floor","ceil","round","first","last","count","range","reverse","unique","safe_array","flatten","filter_empty","sort","shuffle","diff","diff_assoc","intersect","intersect_assoc","merge","merge_recursive","index_by","push","pop","unshift","shift","remove","append","prepend","abs","sqrt","exp","log","log10","ln","pow","array_min","min","array_max","max","sum","avg","product","equals","not_equals","greater_than","greater_than_or_equal","less_than","less_than_or_equal","odd","even","in","add","subtract","multiply","modulus","divide","bitwise_and","bitwise_or","bitwise_xor","not","bitwise_not","is_null","is_empty","is_object","is_array","is_int","is_decimal","is_bool","is_text","addslashes","escape","list_encodings","detect_encoding","to_utf8","from_utf8","convert_encoding","to_lower","to_upper","trim","ltrim","rtrim","capitalize","substr","split","join","slice","strlen","strip_html","unaccent","index","iindex","starts_with","istarts_with","ends_with","iends_with","contains","icontains","set","set_conditional","set_ifnotempty","set_ifnotnull","first_notnull","first_notempty","unset","transform","get","has","fill","fill_keys","keys","values","entries","to_expr","to_text","to_int","to_decimal","to_bool","to_timestamp","to_ms","to_seconds","to_minutes","to_hours","to_days","create_object","create_object_from_entries","json_decode","json_encode","xml_decode","csv_parse","csv_decode","csv_encode","csv_create","url_decode","url_decode_rfc3986","url_encode","url_encode_rfc3986","url_addarg","url_delarg","url_hasarg","url_getarg","url_parse","querystring_parse","yaml_decode","yaml_encode","hex2bin","bin2hex","dechex","hexdec","decbin","bindec","decoct","octdec","base_convert","base64_decode","base64_encode","base64_decode_urlsafe","base64_encode_urlsafe","encrypt","decrypt","jws_encode","jws_decode","jwe_encode","jwe_decode","concat","sprintf","replace","secureid_encode","secureid_decode","md5","sha1","sha256","sha384","sha512","hmac_md5","hmac_sha1","hmac_sha256","hmac_sha384","hmac_sha512","create_uid","uuid","parse_timestamp","format_timestamp","transform_timestamp","add_secs_to_timestamp","add_ms_to_timestamp","regex_matches","regex_get_first_match","regex_get_all_matches","regex_quote","regex_replace","map","filter","filter_null","filter_empty_text","filter_empty_object","filter_empty_array","some","every","find","findIndex","reduce","pick","unpick"],_y={text:["trim","min","max","startsWith","prevent","lower","upper","alphaOk","digitOk","ok","pattern"],decimal:["min","max"],int:["min","max"],email:["trim","lower"],password:["min","max","minAlpha","minLowerAlpha","minUpperAlpha","minDigit","minSymbol"],blob:[],blob_img:[],blob_video:[],blob_audio:[],enum:[],file:[],json:[],obj:[],epochms:[]},aO=["covers","l1_distance_manhattan","l2_distance_euclidean","inner_product","negative_inner_product","cosine_distance","cosine_similarity","distance","within","between","length","floor","ceil","round","to_lower","to_upper","concat","substr","coalesce","unaccent","add","sub","mul","div","search_rank","timestamp_month","timestamp_year","timestamp_week","timestamp_hour","timestamp_minute","timestamp_day_of_month","timestamp_day_of_week","timestamp_day_of_year","timestamp_epoch_day","timestamp_epoch_hour","timestamp_epoch_minute","timestamp_epoch_sec","timestamp_add_seconds","timestamp_subtract_seconds","timestamp_add_minutes","timestamp_subtract_minutes","timestamp_add_hours","timestamp_subtract_hours","timestamp_add_days","timestamp_subtract_days","timestamp_add_months","timestamp_subtract_months","timestamp_add_years","timestamp_subtract_years"];function sO(e){return()=>{let t=!1,n=!1,o=!1,i=!1;e.sectionStack.push("addonDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let a=e.CONSUME(kd);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),n||e.addMissingError(a,"{} is missing an input clause"),o||e.addMissingError(a,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(sO,"addonDeclaration");var de=r(e=>e?e.tokenType===U?e.image.slice(1,-1):e.image:"","getVarName");function cO(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1;e.sectionStack.push("agentDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let d=e.CONSUME(Ad);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.MANY4(()=>e.CONSUME5(Ir)),e.MANY5(()=>e.CONSUME6(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.canonicalClause)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0;let f=e.CONSUME(Ud);e.CONSUME(R);let g={anthropic:["type","max_steps","model","temperature","headers"],"google-genai":["type","max_steps","model","temperature","headers","search_grounding","include_thoughts"],openai:["type","max_steps","model","temperature","reasoning_effort"],xano_free:["type","max_steps","temperature","search_grounding"]},_={anthropic:[...g.anthropic,"system_prompt","prompt","messages","api_key","reasoning","thinking_tokens","baseURL"],"google-genai":[...g["google-genai"],"system_prompt","prompt","messages","api_key","thinking_tokens","baseURL","safety_settings","dynamic_retrival","reasoning"],openai:[...g.openai,"system_prompt","prompt","messages","api_key","baseURL","headers","organization","project","compatibility"],"xano-free":[...g.xano_free,"system_prompt","prompt","messages","baseURL","headers","safety_settings","dynamic_retrival","thinking_tokens","include_thoughts"]},y={};e.SUBRULE(e.schemaParseObjectFn,{ARGS:[f,{type:["anthropic","google-genai","openai","xano-free"],max_steps:"[number]","prompt?":"[string]","messages?":"[string]","api_key?":"[string]","baseURL?":"[string]","compatibility?":["strict","compatible",""],"dynamic_retrival?":["enabled","disabled",""],"headers?":"[string]","include_thoughts?":"[boolean]","model?":"[string]","organization?":"[string]","project?":"[string]","reasoning_effort?":"[string]","reasoning?":"[boolean]","safety_settings?":"[string]","search_grounding?":"[boolean]","system_prompt?":"[string]","temperature?":"[number]","thinking_tokens?":"[number]"},y]}),e.ACTION(()=>{let w=de(y.type?.value),O=g[w]||[];for(let v of O)Object.prototype.hasOwnProperty.call(y,v)||e.addMissingError(f,`llm of type "${w}" requires a "${v}" field`);let B=_[w]||[],N=[];for(let v in y){let P=de(y[v].key);N.push(P),B.includes(P)||e.addIllegalAttributeError(y[v].key)}let S=N.includes("prompt"),h=N.includes("messages");S&&h?e.addIllegalAttributeError(y.messages.key,`llm of type "${w}" cannot have both "prompt" and "messages" fields`):!S&&!h&&e.addMissingError(f,`llm of type "${w}" requires either a "prompt" or "messages" field`)})},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.outputClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0;let f=e.CONSUME(vd);e.CONSUME2(R),e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[f,["name"],["active","auth"],{types:{active:"boolean",auth:"string",name:"string"}}]})},"ALT")}])}),t||e.addMissingError(d,"{} is missing canonical clause"),a||e.addMissingError(d,"{} is missing llm clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(cO,"agentDeclaration");function lO(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1,f=!1;e.sectionStack.push("agentTriggerDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let g=e.CONSUME(Od);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let _=e.CONSUME(Cd);e.CONSUME(R),e.SUBRULE(e.objectAttrReq,{ARGS:[_,["connection"],[],{types:{connection:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(Ld),e.CONSUME2(R),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.agentClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!f,"GATE"),ALT:r(()=>{f=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),o||e.addMissingError(g,"{} is missing agent clause"),c||e.addMissingError(g,"{} is missing an input clause"),d||e.addMissingError(g,"{} is missing a stack clause"),l||e.addMissingError(g,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(lO,"agentTriggerDeclaration");function uO(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1;e.sectionStack.push("apiGroupDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let d=e.CONSUME(zd);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(Qi),e.CONSUME1(R),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(Hd),e.CONSUME2(R),e.CONSUME2(U)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0;let f=e.CONSUME(Yd);e.CONSUME3(R),e.SUBRULE(e.objectAttrReq,{ARGS:[f,[],["mode","origins","methods","headers","credentials","max_age"],{types:{mode:"string",origins:r(g=>g.SUBRULE(g.arrayOfStringLiterals),"origins"),methods:r(g=>g.SUBRULE1(g.arrayOfStringLiterals),"methods"),headers:r(g=>g.SUBRULE2(g.arrayOfStringLiterals),"headers"),credentials:"boolean",max_age:"number"}}]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0;let f=e.CONSUME(Kd);e.CONSUME4(R),e.SUBRULE2(e.objectAttrReq,{ARGS:[f,[],["active","token"],{active:"boolean",token:"string"}]})},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),n||e.addMissingError(d,"{} is missing a canonical field"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(uO,"apiGroupDeclaration");function dO(e){return()=>{e.sectionStack.push("columnDefaultValueAttribute"),e.CONSUME(R),e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(Ct),"ALT")},{ALT:r(()=>e.CONSUME(ze),"ALT")},{ALT:r(()=>e.CONSUME(Xe),"ALT")},{ALT:r(()=>e.CONSUME(Ze),"ALT")},{ALT:r(()=>e.CONSUME(lo),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}]),e.sectionStack.pop()}}r(dO,"columnDefaultValueAttribute");function pO(e){return()=>{e.sectionStack.push("descriptionFieldAttribute"),e.CONSUME(Ba),e.CONSUME(R),e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(Dt),"ALT")}]),e.sectionStack.pop()}}r(pO,"descriptionFieldAttribute");function fO(e){return()=>{e.sectionStack.push("disabledFieldAttribute"),e.CONSUME(qa),e.CONSUME(R),e.OR([{ALT:r(()=>e.CONSUME(Xe),"ALT")},{ALT:r(()=>e.CONSUME(Ze),"ALT")}]),e.sectionStack.pop()}}r(fO,"disabledFieldAttribute");function mO(e){return()=>{e.sectionStack.push("docsFieldAttribute"),e.CONSUME(bg),e.CONSUME(R),e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(Dt),"ALT")}]),e.sectionStack.pop()}}r(mO,"docsFieldAttribute");function hO(e){return t=>{e.sectionStack.push("inputFilterFn"),e.OR([{ALT:r(()=>{e.OPTION(()=>e.CONSUME(br));let n=e.CONSUME(T);e.MANY1(()=>{e.CONSUME1(ye),e.OR2([{ALT:r(()=>e.CONSUME2(T),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")},{ALT:r(()=>e.CONSUME1(cg),"ALT")},{ALT:r(()=>e.CONSUME1(ze),"ALT")},{ALT:r(()=>e.CONSUME1(Ct),"ALT")},{ALT:r(()=>e.CONSUME1(Ze),"ALT")},{ALT:r(()=>e.CONSUME1(Xe),"ALT")}])}),t&&_y[t.image]&&!_y[t.image].includes(n.image)&&e.addInvalidValueError(n,`Filter '${n.image}' cannot be applied to input of type '${t}'`)},"ALT")},{ALT:r(()=>{e.CONSUME(bf),e.CONSUME2(ye),e.CONSUME(Rg)},"ALT")}]),e.sectionStack.pop()}}r(hO,"inputFilterFn");var gO=r(e=>()=>{e.sectionStack.push("sensitiveFieldAttribute"),e.CONSUME(_g),e.CONSUME(R),e.OR([{ALT:r(()=>e.CONSUME(Xe),"ALT")},{ALT:r(()=>e.CONSUME(Ze),"ALT")}]),e.sectionStack.pop()},"sensitiveFieldAttribute");function TO(e){return()=>{e.sectionStack.push("valueFieldAttribute"),e.CONSUME(yg),e.CONSUME(R),e.SUBRULE(e.valueExpression,{ARGS:[{allowIdentifier:!1}]}),e.sectionStack.pop()}}r(TO,"valueFieldAttribute");function EO(e){return()=>{e.sectionStack.push("valuesFieldAttribute"),e.CONSUME(Sg),e.CONSUME(R),e.SUBRULE(e.stringArray),e.sectionStack.pop()}}r(EO,"valuesFieldAttribute");var SO=r(e=>{e.columnDefaultValueAttribute=e.RULE("columnDefaultValueAttribute",dO(e)),e.descriptionFieldAttribute=e.RULE("descriptionFieldAttribute",pO(e)),e.disabledFieldAttribute=e.RULE("disabledFieldAttribute",fO(e)),e.docsFieldAttribute=e.RULE("docsFieldAttribute",mO(e)),e.inputFilterFn=e.RULE("inputFilterFn",hO(e)),e.sensitiveFieldAttribute=e.RULE("sensitiveFieldAttribute",gO(e)),e.valueFieldAttribute=e.RULE("valueFieldAttribute",TO(e)),e.valuesFieldAttribute=e.RULE("valuesFieldAttribute",EO(e))},"register");function yO(e){return()=>{e.sectionStack.push("branchDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let t=e.CONSUME(cp);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}]);let n={pre:[{name:"[string]"}],post:[{name:"[string]"}]};e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{color:"[string]","description?":"[string]",middleware:{function:n,query:n,task:n,tool:n},history:{function:[!1,10,100,1e3,1e4,"all"],query:[!1,10,100,1e3,1e4,"all"],task:[!1,10,100,1e3,1e4,"all"],tool:[!1,10,100,1e3,1e4,"all"],trigger:[!1,10,100,1e3,1e4,"all"],middleware:[!1,10,100,1e3,1e4,"all"]}}]}),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(yO,"branchDeclaration");var _O=r(e=>()=>{e.sectionStack.push("agentClause");let t=e.CONSUME(Qp);e.CONSUME(R),e.CONSUME(U).image==='""'&&e.addMissingError(t,"agent cannot be empty"),e.sectionStack.pop()},"agentClause");var xO=r(e=>()=>{e.sectionStack.push("authClause"),e.CONSUME(Da),e.CONSUME(R),e.OR([{ALT:r(()=>e.CONSUME(Xe),"ALT")},{ALT:r(()=>e.CONSUME(Ze),"ALT")}]),e.sectionStack.pop()},"authClause");function bO(e){return()=>{e.sectionStack.push("cacheClause");let t=e.CONSUME(gg);e.CONSUME(R),e.SUBRULE(e.objectAttrReq,{ARGS:[t,["ttl","input","auth","datasource","ip"],["headers","env"],{types:{ttl:"number",input:"boolean",auth:"boolean",datasource:"boolean",ip:"boolean"}}]}),e.sectionStack.pop()}}r(bO,"cacheClause");var RO=r(e=>()=>{e.sectionStack.push("canonicalClause");let t=e.CONSUME($p);e.CONSUME(R),e.CONSUME(U).image==='""'&&e.addMissingError(t,"canonical cannot be empty"),e.sectionStack.pop()},"canonicalClause");var kO=r(e=>()=>{e.sectionStack.push("channelClause");let t=e.CONSUME(Zp);e.CONSUME(R),e.CONSUME(U).image==='""'&&e.addMissingError(t,"channel cannot be empty"),e.sectionStack.pop()},"channelClause");var AO=r(e=>()=>{e.sectionStack.push("dbTableClause");let t=e.CONSUME(oo);e.CONSUME(R),e.CONSUME(U).image==='""'&&e.addMissingError(t,"table cannot be empty"),e.sectionStack.pop()},"dbTableClause");function UO(e){return t=>{let n=t?.[0]||T,o=t?.[1]??!0;e.sectionStack.push(n.name+"Clause"),e.CONSUME(n),e.CONSUME(R);let i=e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(Dt),"ALT")}]);o||i.image==='""'&&e.addMissingError(i,"value cannot be empty"),e.sectionStack.pop()}}r(UO,"flexibleStringClause");function vO(e){return()=>{e.sectionStack.push("historyClause");let t=e.CONSUME(hg);e.CONSUME(R),e.SUBRULE(e.schemaParseEnumFn,{ARGS:[t,[!1,"inherit",0,10,100,1e3,1e4,"all"]]}),e.sectionStack.pop()}}r(vO,"historyClause");function CO(e){return()=>{e.sectionStack.push("indexClause");let t=e.CONSUME(Eg);e.CONSUME(R),e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[t,["type","field"],["name"],{types:{type:"string"}}]}),e.sectionStack.pop()}}r(CO,"indexClause");function LO(e){return()=>{e.sectionStack.push("inputClause"),e.CONSUME(Pa),e.OPTION(()=>{e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.SUBRULE(e.optionalCommentBlockFn),e.OR([{ALT:r(()=>e.SUBRULE(e.objectColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.enumColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.columnDefinition,{ARGS:[{include_file:!0}]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbLinkColumnDefinition),"ALT")}])}),e.AT_LEAST_ONE2(()=>e.CONSUME2(p)),e.CONSUME(A)}),e.sectionStack.pop()}}r(LO,"inputClause");var OO=r(e=>()=>{e.sectionStack.push("mcpServerClause");let t=e.CONSUME(Xp);e.CONSUME(R),e.CONSUME(U).image==='""'&&e.addMissingError(t,"mcp_server cannot be empty"),e.sectionStack.pop()},"mcpServerClause");function NO(e){return()=>{e.sectionStack.push("middlewareClause");let t=e.CONSUME(mg);e.CONSUME(R),e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,{"pre?":[{name:"[string]","active?":"[boolean]","required?":"[boolean]"}],"post?":[{name:"[string]","active?":"[boolean]","required?":"[boolean]"}]}]}),e.sectionStack.pop()}}r(NO,"middlewareClause");var xy={allowExpectStatements:!1,allowCallStatements:!1};function MO(e){return(t={})=>{t={...xy,...t},e.sectionStack.push("nakedStackFn"),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.OPTION(()=>e.CONSUME(br)),e.OR([{ALT:r(()=>e.CONSUME(Ir),"ALT")},{ALT:r(()=>e.SUBRULE(e.aiFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.varFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.mathFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.textFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.preconditionFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.objectFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiFn,{ARGS:[t]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.controlFn,{ARGS:[t]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.debugFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.streamFn),"ALT")},{GATE:r(()=>t.allowExpectStatements,"GATE"),ALT:r(()=>e.SUBRULE(e.workflowExpectFn),"ALT")}])}),e.AT_LEAST_ONE2(()=>e.CONSUME2(p)),e.CONSUME(A),e.sectionStack.pop()}}r(MO,"nakedStackFn");function wO(e){return()=>{e.sectionStack.push("outputClause"),e.CONSUME(Oa),e.OPTION(()=>{e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.objectColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.enumColumnDefinition),"ALT")},{ALT:r(()=>e.SUBRULE(e.columnDefinition,{ARGS:[{include_file:!1}]}),"ALT")}])}),e.AT_LEAST_ONE2(()=>e.CONSUME2(p)),e.CONSUME(A)}),e.sectionStack.pop()}}r(wO,"outputClause");function FO(e){return()=>{e.sectionStack.push("responseClause"),e.CONSUME(pg),e.CONSUME(R),e.SUBRULE(e.valueExpression),e.sectionStack.pop()}}r(FO,"responseClause");function IO(e){return()=>{e.sectionStack.push("scheduleClause");let t=e.CONSUME(ch);e.CONSUME(R),e.SUBRULE(e.schemaFn,{ARGS:[t,[{starts_on:"[timestamp]","ends_on?":"[timestamp]","freq?":"[number]"}]]}),e.sectionStack.pop()}}r(IO,"scheduleClause");var HW={include_file:!0,isTableSchema:!1};function PO(e){return(t={},n={})=>{t={...HW,...t},e.sectionStack.push("schemaClause");let o=e.CONSUME(Tg);if(e.OPTION(()=>{e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.OR([{ALT:r(()=>e.CONSUME(Ir),"ALT")},{ALT:r(()=>e.SUBRULE(e.objectColumnDefinition,{ARGS:[n]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.enumColumnDefinition,{ARGS:[n]}),"ALT")},{ALT:r(()=>e.SUBRULE(e.columnDefinition,{ARGS:[{include_file:t.include_file,isTableSchema:t.isTableSchema},n]}),"ALT")}])}),e.MANY1(()=>e.CONSUME2(p)),e.CONSUME(A)}),t.isTableSchema){let i=n.id;i?["int","uuid"].includes(i.typeToken.image)||e.addInvalidValueError(i.typeToken,'The "id" column can only be of type "int" or "uuid"'):e.addMissingError(o,"{} must have an 'id' of type uuid or int column defined")}e.sectionStack.pop()}}r(PO,"schemaClause");function DO(e){return(t={})=>{t={...xy,...t},e.sectionStack.push("stackClause"),e.CONSUME(ug),e.OPTION(()=>e.SUBRULE(e.nakedStackFn,{ARGS:[t]})),e.sectionStack.pop()}}r(DO,"stackClause");function BO(e){return t=>{let n=!1,o=!1;t=t||[],e.sectionStack.push("testClause"),e.CONSUME(dg);let i=e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME(Gt),"ALT")}]);if(i&&i.image){let a=i.image.replaceAll('"',"");t.includes(a)&&e.addDuplicateNameError(i,"test"),t.push(i.image.replaceAll('"',""))}e.CONSUME(k),e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.MANY(()=>{e.OR1([{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(Pa),e.CONSUME(R),e.SUBRULE(e.objectWithAttributes)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.CONSUME(wa),e.CONSUME1(R),e.CONSUME1(U)},"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectFn),"ALT")}]),e.AT_LEAST_ONE1(()=>e.CONSUME1(p))}),e.CONSUME(A),e.sectionStack.pop()}}r(BO,"testClause");function qO(e){return()=>{e.sectionStack.push("viewClause");let t=e.CONSUME(fg);e.CONSUME(R),e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,{"[string]":{search:"[query]",sort:{"[string]":["asc","desc","rand"]},id:"[string]","alias?":"[string]"}}]}),e.sectionStack.pop()}}r(qO,"viewClause");var GO=r(e=>{e.agentClause=e.RULE("agentClause",_O(e)),e.authClause=e.RULE("authClause",xO(e)),e.cacheClause=e.RULE("cacheClause",bO(e)),e.canonicalClause=e.RULE("canonicalClause",RO(e)),e.channelClause=e.RULE("channelClause",kO(e)),e.dbTableClause=e.RULE("dbTableClause",AO(e)),e.flexibleStringClause=e.RULE("flexibleStringClause",UO(e)),e.historyClause=e.RULE("historyClause",vO(e)),e.indexClause=e.RULE("indexClause",CO(e)),e.inputClause=e.RULE("inputClause",LO(e)),e.outputClause=e.RULE("outputClause",wO(e)),e.mcpServerClause=e.RULE("mcpServerClause",OO(e)),e.middlewareClause=e.RULE("middlewareClause",NO(e)),e.nakedStackFn=e.RULE("nakedStackFn",MO(e)),e.responseClause=e.RULE("responseClause",FO(e)),e.scheduleClause=e.RULE("scheduleClause",IO(e)),e.schemaClause=e.RULE("schemaClause",PO(e)),e.stackClause=e.RULE("stackClause",DO(e)),e.testClause=e.RULE("testClause",BO(e)),e.viewClause=e.RULE("viewClause",qO(e))},"register");function jO(e){return()=>{e.sectionStack.push("arraySlice");let t=null,n=null;if(e.OR([{ALT:r(()=>{e.CONSUME(it),e.CONSUME(at)},"ALT")},{ALT:r(()=>{e.CONSUME1(it),t=e.CONSUME1(ze),e.CONSUME1(ye),e.OPTION(()=>n=e.CONSUME3(ze)),e.CONSUME1(at)},"ALT")},{ALT:r(()=>{e.CONSUME2(it),e.CONSUME2(ye),n=e.CONSUME2(ze),e.CONSUME2(at)},"ALT")}]),t&&t.image.startsWith("-")&&e.addInvalidValueError(t,"Array slice start index cannot be negative"),n&&n.image.startsWith("-")&&e.addInvalidValueError(n,"Array slice end index cannot be negative"),t&&n){let o=parseInt(t.image,10);parseInt(n.image,10)<o&&e.addInvalidValueError(n,"Array slice end index cannot be less than start index")}e.sectionStack.pop()}}r(jO,"arraySlice");var YW={include_file:!1,isTableSchema:!1};function VO(e){return(t={},n={})=>{t={...YW,...t};let o=!1,i=!1,a=!1;e.sectionStack.push("columnDefinition");let s=e.OR([{ALT:r(()=>e.CONSUME(Ap),"ALT")},{ALT:r(()=>e.CONSUME(Up),"ALT")},{ALT:r(()=>e.CONSUME(Zi),"ALT")},{ALT:r(()=>e.CONSUME(vp),"ALT")},{ALT:r(()=>e.CONSUME(Cp),"ALT")},{ALT:r(()=>e.CONSUME(Op),"ALT")},{ALT:r(()=>e.CONSUME(Np),"ALT")},{ALT:r(()=>e.CONSUME(Mp),"ALT")},{ALT:r(()=>e.CONSUME(wp),"ALT")},{ALT:r(()=>e.CONSUME(Fp),"ALT")},{ALT:r(()=>e.CONSUME(Ip),"ALT")},{ALT:r(()=>e.CONSUME(Bp),"ALT")},{ALT:r(()=>e.CONSUME(qp),"ALT")},{ALT:r(()=>e.CONSUME(Gp),"ALT")},{ALT:r(()=>e.CONSUME(jp),"ALT")},{ALT:r(()=>e.CONSUME(Vp),"ALT")},{ALT:r(()=>e.CONSUME(Wp),"ALT")},{ALT:r(()=>e.CONSUME(zp),"ALT")},{ALT:r(()=>e.CONSUME(Hp),"ALT")},{ALT:r(()=>e.CONSUME(Yp),"ALT")},{ALT:r(()=>e.CONSUME(Kp),"ALT")},{GATE:r(()=>!!t.include_file,"GATE"),ALT:r(()=>e.CONSUME(Pp),"ALT")}]);e.OPTION1(()=>{i=!0,e.SUBRULE(e.arraySlice)}),e.OPTION2(()=>{o=!0,e.CONSUME(dr)});let c=e.CONSUME(T);e.OPTION6(()=>{a=!0,e.CONSUME1(dr)}),e.OPTION3(()=>e.SUBRULE(e.columnDefaultValueAttribute)),e.OPTION4(()=>e.SUBRULE(e.filterDefinition,{ARGS:[s]})),e.OPTION5(()=>e.SUBRULE(e.columnMetadataDefinition)),n[de(c)]={typeToken:s,nameToken:c},e.addInput(c.image,s.image,i,o,a),e.sectionStack.pop()}}r(VO,"columnDefinition");function WO(e){return()=>{e.sectionStack.push("dbLinkColumnDefinition");let t=e.CONSUME(Jp);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{table:"[string]","override?":{"[string]":{hidden:"[boolean]"}}}]}),e.sectionStack.pop()}}r(WO,"dbLinkColumnDefinition");function zO(e){return(t={})=>{e.sectionStack.push("enumColumnDefinition");let n=e.CONSUME(Lp),o=!1,i=!1,a=!1;e.OPTION1(()=>{o=!0,e.SUBRULE(e.arraySlice)}),e.OPTION2(()=>{i=!0,e.CONSUME(dr)});let s=e.CONSUME(T);t[de(s)]={typeToken:n,nameToken:s},e.OPTION(()=>{a=!0,e.CONSUME1(dr)}),e.OPTION3(()=>e.SUBRULE(e.columnDefaultValueAttribute)),e.SUBRULE(e.enumColumnMetadataDefinition,{ARGS:[n]}),e.addInput(s.image,"enum",o,i,a),e.sectionStack.pop()}}r(zO,"enumColumnDefinition");function HO(e){return(t=null)=>{e.sectionStack.push("filterDefinition"),e.CONSUME(xf),e.CONSUME(R),e.AT_LEAST_ONE_SEP({SEP:St,DEF:r(()=>e.SUBRULE(e.inputFilterFn,{ARGS:[t]}),"DEF")}),e.sectionStack.pop()}}r(HO,"filterDefinition");function YO(e){return(t={})=>{e.sectionStack.push("objectColumnDefinition");let n=e.CONSUME(Dp),o=!1,i=!1,a=!1;e.OPTION2(()=>{o=!0,e.SUBRULE(e.arraySlice)});let s=e.CONSUME(T);t[de(s)]={typeToken:n,nameToken:s},e.OPTION(()=>{a=!0,e.CONSUME(dr)}),e.SUBRULE(e.objectColumnMetadataDefinition),e.addInput(s.image,"enum",o,i,a),e.sectionStack.pop()}}r(YO,"objectColumnDefinition");var KO=r(e=>{e.arraySlice=e.RULE("arraySlice",jO(e)),e.columnDefinition=e.RULE("columnDefinition",VO(e)),e.dbLinkColumnDefinition=e.RULE("dbLinkColumnDefinition",WO(e)),e.enumColumnDefinition=e.RULE("enumColumnDefinition",zO(e)),e.filterDefinition=e.RULE("filterDefinition",HO(e)),e.objectColumnDefinition=e.RULE("objectColumnDefinition",YO(e))},"register");function JO(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1,f=[];e.sectionStack.push("functionDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let g=e.CONSUME(eo);e.OR([{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME(Gt),"ALT")},{ALT:r(()=>e.CONSUME(U),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.cacheClause)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[f]})},"ALT")}])}),a||e.addMissingError(g,"{} is missing an input clause"),l||e.addMissingError(g,"{} is missing a stack clause"),c||e.addMissingError(g,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(JO,"functionDeclaration");function QO(e){return()=>{e.sectionStack.push("aiAgentRunFn");let t=e.CONSUME(Ji);e.OR({DEF:[{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME(U),"ALT")}],ERR_MSG:"Expected an agent name"}),e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{"args?":"[expression]","allow_tool_execution?":"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(QO,"aiAgentRunFn");function XO(e){return()=>{e.sectionStack.push("aiExternalMcpServerDetailsFn");let t=e.CONSUME(Dd);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{url:"[expression]",bearer_token:"[expression]",connection_type:"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(XO,"aiExternalMcpServerDetailsFn");function ZO(e){return()=>{e.sectionStack.push("aiExternalMcpToolListFn");let t=e.CONSUME(Pd);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{url:"[expression]",bearer_token:"[expression]",connection_type:"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(ZO,"aiExternalMcpToolListFn");function $O(e){return()=>{e.sectionStack.push("aiExternalMcpToolRunFn");let t=e.CONSUME(Ji);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{url:"[expression]",bearer_token:"[expression]",connection_type:"[expression]",tool:"[expression]",args:"[expression]","description?":"[string]","disabled?":"[boolean]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r($O,"aiExternalMcpToolRunFn");var eN=r(e=>{e.aiAgentRunFn=e.RULE("aiAgentRunFn",QO(e)),e.aiExternalMcpToolListFn=e.RULE("aiExternalMcpToolListFn",ZO(e)),e.aiExternalMcpToolRunFn=e.RULE("aiExternalMcpToolRunFn",$O(e)),e.aiExternalMcpServerDetailsFn=e.RULE("aiExternalMcpServerDetailsFn",XO(e))},"register");function tN(e){return()=>{e.sectionStack.push("ai"),e.CONSUME(Nd),e.CONSUME(M),e.OR([{ALT:r(()=>{e.CONSUME(Md),e.CONSUME1(M),e.SUBRULE(e.aiAgentRunFn)},"ALT")},{ALT:r(()=>{e.CONSUME(wd),e.CONSUME2(M),e.CONSUME(Fd),e.CONSUME3(M),e.OR1([{ALT:r(()=>e.SUBRULE(e.aiExternalMcpServerDetailsFn),"ALT")},{ALT:r(()=>{e.CONSUME(Id),e.CONSUME4(M),e.OR2([{ALT:r(()=>e.SUBRULE(e.aiExternalMcpToolListFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.aiExternalMcpToolRunFn),"ALT")}])},"ALT")}])},"ALT")}]),e.sectionStack.pop()}}r(tN,"aiFn");function rN(e){return()=>{e.sectionStack.push("apiCallFn");let t=e.CONSUME(Gd);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME(Ia),"ALT")},{ALT:r(()=>e.CONSUME(Gt),"ALT")}]),e.CONSUME(ka),e.CONSUME(R),e.OR1([{ALT:r(()=>e.CONSUME(La),"ALT")},{ALT:r(()=>e.CONSUME(Aa),"ALT")},{ALT:r(()=>e.CONSUME(Ua),"ALT")},{ALT:r(()=>e.CONSUME(va),"ALT")},{ALT:r(()=>e.CONSUME(Ca),"ALT")}]),e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{api_group:"[string]","description?":"[string]","disabled?":"[boolean]","headers?":"[expression]","input?":{"[string]":"[expression]"}}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(rN,"apiCallFn");function nN(e){let t=["code","timeout"],n=["description","disabled"];return()=>{e.sectionStack.push("apiLambdaFn");let o=e.CONSUME(Wd);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(nN,"apiLambdaFn");function oN(e){let t=["channel","data","auth_table","auth_id"],n=["description","disabled"];return()=>{e.sectionStack.push("apiRealtimeEventFn");let o=e.CONSUME(jd);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(oN,"apiRealtimeEventFn");function iN(e){let t=["url","method"],n=["description","disabled","params","headers","timeout","ca_certificate","certificate","certificate_pass","private_key"];return()=>{e.sectionStack.push("apiRequestFn");let o=e.CONSUME(qd);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(iN,"apiRequestFn");function aN(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("apiStreamFn");let o=e.CONSUME(Vd);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(aN,"apiStreamFn");var sN=r(e=>{e.apiLambdaFn=e.RULE("apiLambdaFn",nN(e)),e.apiRealtimeEventFn=e.RULE("apiRealtimeEventFn",oN(e)),e.apiRequestFn=e.RULE("apiRequestFn",iN(e)),e.apiStreamFn=e.RULE("apiStreamFn",aN(e)),e.apiCallFn=e.RULE("apiCallFn",rN(e))},"register");function cN(e){return(t={})=>{e.sectionStack.push("api"),e.CONSUME(Bd),e.CONSUME(M),e.OR([{GATE:r(()=>t.allowCallStatements,"GATE"),ALT:r(()=>e.SUBRULE(e.apiCallFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiLambdaFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiRequestFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiRealtimeEventFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.apiStreamFn),"ALT")}]),e.sectionStack.pop()}}r(cN,"apiFn");function lN(e){return()=>{e.sectionStack.push("arrayEveryFn"),e.CONSUME(Qd),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(lN,"arrayEveryFn");function uN(e){return()=>{e.sectionStack.push("arrayFilterCountFn"),e.CONSUME(Xd),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(uN,"arrayFilterCountFn");function dN(e){return()=>{e.sectionStack.push("arrayFilterFn"),e.CONSUME(Zd),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(dN,"arrayFilterFn");function pN(e){return()=>{e.sectionStack.push("arrayFindFn"),e.CONSUME($d),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(pN,"arrayFindFn");function fN(e){return()=>{e.sectionStack.push("arrayFindIndexFn"),e.CONSUME(ep),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(fN,"arrayFindIndexFn");function mN(e){return()=>{e.sectionStack.push("arrayHasFn"),e.CONSUME(tp),e.SUBRULE(e.arrayValueIfAs),e.sectionStack.pop()}}r(mN,"arrayHasFn");function hN(e){return()=>{e.sectionStack.push("arrayMergeFn"),e.CONSUME(rp),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayValueOnly),e.sectionStack.pop()}}r(hN,"arrayMergeFn");function gN(e){return()=>{e.sectionStack.push("arrayNoValueAs"),e.OPTION(()=>{e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),e.OPTION1(()=>e.CONSUME1(p)),e.CONSUME(A)}),e.CONSUME(It),e.SUBRULE(e.variableOnly),e.sectionStack.pop()}}r(gN,"arrayNoValueAs");function TN(e){return()=>{e.sectionStack.push("arrayPopFn"),e.CONSUME(np),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayNoValueAs),e.sectionStack.pop()}}r(TN,"arrayPopFn");function EN(e){return()=>{e.sectionStack.push("arrayPushFn"),e.CONSUME(op),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayValueOnly),e.sectionStack.pop()}}r(EN,"arrayPushFn");function SN(e){return()=>{e.sectionStack.push("arrayShiftFn"),e.CONSUME(ip),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayNoValueAs),e.sectionStack.pop()}}r(SN,"arrayShiftFn");function yN(e){return()=>{e.sectionStack.push("arrayUnshiftFn"),e.CONSUME(ap),e.SUBRULE(e.variableOnly),e.SUBRULE(e.arrayValueOnly),e.sectionStack.pop()}}r(yN,"arrayUnshiftFn");function _N(e){return()=>{e.sectionStack.push("arrayValueAs");let t=!1;e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.OPTION1(()=>e.CONSUME1(p)),e.CONSUME(A),e.CONSUME(It),e.SUBRULE(e.assignableVariableAs),e.sectionStack.pop()}}r(_N,"arrayValueAs");function xN(e){return()=>{e.sectionStack.push("arrayValueIfAs"),e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.CONSUME(Vi),e.CONSUME1(ce),e.SUBRULE1(e.valueExpression),e.CONSUME1(ne),e.OPTION(()=>{e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),e.OPTION1(()=>e.CONSUME1(p)),e.CONSUME(A)}),e.CONSUME(It),e.SUBRULE(e.assignableVariableAs),e.sectionStack.pop()}}r(xN,"arrayValueIfAs");function bN(e){return()=>{e.sectionStack.push("arrayValueOnly");let t=!1;e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.OPTION1(()=>e.CONSUME1(p)),e.CONSUME(A),e.sectionStack.pop()}}r(bN,"arrayValueOnly");function RN(e){return t=>{e.sectionStack.push("valueAttrOnly");let n=!1,o=!1,i=!1;e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>{n=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),n||e.addMissingError(t,"{} is missing a stack clause"),e.OPTION1(()=>e.CONSUME1(p)),e.CONSUME(A),e.sectionStack.pop()}}r(RN,"valueAttrOnly");var kN=r(e=>{e.arrayEveryFn=e.RULE("arrayEveryFn",lN(e)),e.arrayFilterCountFn=e.RULE("arrayFilterCountFn",uN(e)),e.arrayFilterFn=e.RULE("arrayFilterFn",dN(e)),e.arrayFindFn=e.RULE("arrayFindFn",pN(e)),e.arrayFindIndexFn=e.RULE("arrayFindIndexFn",fN(e)),e.arrayHasFn=e.RULE("arrayHasFn",mN(e)),e.arrayMergeFn=e.RULE("arrayMergeFn",hN(e)),e.arrayNoValueAs=e.RULE("arrayNoValueAs",gN(e)),e.arrayPopFn=e.RULE("arrayPopFn",TN(e)),e.arrayPushFn=e.RULE("arrayPushFn",EN(e)),e.arrayShiftFn=e.RULE("arrayShiftFn",SN(e)),e.arrayUnshiftFn=e.RULE("arrayUnshiftFn",yN(e)),e.arrayValueAs=e.RULE("arrayValueAs",_N(e)),e.arrayValueIfAs=e.RULE("arrayValueIfAs",xN(e)),e.arrayValueOnly=e.RULE("arrayValueOnly",bN(e)),e.valueAttrOnly=e.RULE("valueAttrOnly",RN(e))},"register");function AN(e){return()=>{e.sectionStack.push("array"),e.CONSUME(Jd),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.arrayEveryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFilterCountFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFilterFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFindFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayFindIndexFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayHasFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayShiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayPopFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayUnshiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayPushFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.arrayMergeFn),"ALT")}]),e.sectionStack.pop()}}r(AN,"arrayFn");function UN(e){return()=>{e.sectionStack.push("cloudAlgoliaFn"),e.CONSUME(up),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudAlgoliaRequestFn),"ALT")}]),e.sectionStack.pop()}}r(UN,"cloudAlgoliaFn");function vN(e){return()=>{e.sectionStack.push("cloudAlgoliaRequestFn");let t=e.CONSUME(Xi);e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{"description?":"[string]","application_id?":"[expression]","api_key?":"[expression]",url:"[expression]","method?":["POST","GET"],payload:"[expression]"}]}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(vN,"cloudAlgoliaRequestFn");function CN(e){return()=>{e.sectionStack.push("cloudAwsFn"),e.CONSUME(pp),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudAwsS3Fn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAwsOpenSearchFn),"ALT")}]),e.sectionStack.pop()}}r(CN,"cloudAwsFn");function LN(e){return()=>{e.sectionStack.push("cloudAwsOpenSearchFn"),e.CONSUME(bp),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudSearchDocumentFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchRequestFn),"ALT")}]),e.sectionStack.pop()}}r(LN,"cloudAwsOpenSearchFn");function ON(e){return()=>{e.sectionStack.push("cloudAwsS3Fn"),e.CONSUME(yp),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudListDirectoryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSignUrlFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudUploadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudDeleteFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudReadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudGetFileInfoFn),"ALT")}]),e.sectionStack.pop()}}r(ON,"cloudAwsS3Fn");function NN(e){return()=>{e.sectionStack.push("cloudAzureFn"),e.CONSUME(mp),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudStorageFn),"ALT")}]),e.sectionStack.pop()}}r(NN,"cloudAzureFn");function MN(e){return()=>{e.sectionStack.push("cloudDeleteFileFn"),e.CONSUME(Tp),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.sectionStack.pop()}}r(MN,"cloudDeleteFileFn");function wN(e){return()=>{e.sectionStack.push("cloudElasticSearchFn"),e.CONSUME(fp),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudSearchDocumentFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSearchRequestFn),"ALT")}]),e.sectionStack.pop()}}r(wN,"cloudElasticSearchFn");function FN(e){return()=>{e.sectionStack.push("cloudGetFileInfoFn");let t=e.CONSUME(Ep);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(FN,"cloudGetFileInfoFn");function IN(e){return()=>{e.sectionStack.push("cloudGoogleFn"),e.CONSUME(dp),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudStorageFn),"ALT")}]),e.sectionStack.pop()}}r(IN,"cloudGoogleFn");function PN(e){return()=>{e.sectionStack.push("cloudListDirectoryFn");let t=e.CONSUME(Sp);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(PN,"cloudListDirectoryFn");function DN(e){return()=>{e.sectionStack.push("cloudReadFileFn");let t=e.CONSUME(gp);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(DN,"cloudReadFileFn");function BN(e){return()=>{e.sectionStack.push("cloudSearchDocumentFn");let t=e.CONSUME(Rp);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(BN,"cloudSearchDocumentFn");function qN(e){return()=>{e.sectionStack.push("cloudSearchQueryFn");let t=e.CONSUME(kp);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(qN,"cloudSearchQueryFn");function GN(e){return()=>{e.sectionStack.push("cloudSearchRequestFn");let t=e.CONSUME(Xi);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(GN,"cloudSearchRequestFn");function jN(e){return()=>{e.sectionStack.push("cloudSignUrlFn");let t=e.CONSUME(_p);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(jN,"cloudSignUrlFn");function VN(e){return()=>{e.sectionStack.push("cloudStorageFn"),e.CONSUME(hp),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudListDirectoryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudSignUrlFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudUploadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudDeleteFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudReadFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudGetFileInfoFn),"ALT")}]),e.sectionStack.pop()}}r(VN,"cloudStorageFn");function WN(e){return()=>{e.sectionStack.push("cloudUploadFileFn"),e.CONSUME(xp),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.sectionStack.pop()}}r(WN,"cloudUploadFileFn");var zN=r(e=>{e.cloudAlgoliaFn=e.RULE("cloudAlgoliaFn",UN(e)),e.cloudAlgoliaRequestFn=e.RULE("cloudAlgoliaRequestFn",vN(e)),e.cloudAwsFn=e.RULE("cloudAwsFn",CN(e)),e.cloudAwsOpenSearchFn=e.RULE("cloudAwsOpenSearchFn",LN(e)),e.cloudAwsS3Fn=e.RULE("cloudAwsS3Fn",ON(e)),e.cloudAzureFn=e.RULE("cloudAzureFn",NN(e)),e.cloudDeleteFileFn=e.RULE("cloudDeleteFileFn",MN(e)),e.cloudElasticSearchFn=e.RULE("cloudElasticSearchFn",wN(e)),e.cloudGetFileInfoFn=e.RULE("cloudGetFileInfoFn",FN(e)),e.cloudGoogleFn=e.RULE("cloudGoogleFn",IN(e)),e.cloudListDirectoryFn=e.RULE("cloudListDirectoryFn",PN(e)),e.cloudReadFileFn=e.RULE("cloudReadFileFn",DN(e)),e.cloudSearchDocumentFn=e.RULE("cloudSearchDocumentFn",BN(e)),e.cloudSearchQueryFn=e.RULE("cloudSearchQueryFn",qN(e)),e.cloudSearchRequestFn=e.RULE("cloudSearchRequestFn",GN(e)),e.cloudSignUrlFn=e.RULE("cloudSignUrlFn",jN(e)),e.cloudStorageFn=e.RULE("cloudStorageFn",VN(e)),e.cloudUploadFileFn=e.RULE("cloudUploadFileFn",WN(e))},"register");function HN(e){return()=>{e.sectionStack.push("cloud"),e.CONSUME(lp),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.cloudGoogleFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAwsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudElasticSearchFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAzureFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.cloudAlgoliaFn),"ALT")}]),e.sectionStack.pop()}}r(HN,"cloudFn");function YN(e){return(t={})=>{e.OR([{ALT:r(()=>e.CONSUME(Hi),"ALT")},{ALT:r(()=>e.CONSUME(md),"ALT")},{ALT:r(()=>e.SUBRULE(e.awaitFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.conditionalFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.forEachFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.forFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.functionRunFn),"ALT")},{GATE:r(()=>t.allowFunctionCalls,"GATE"),ALT:r(()=>e.SUBRULE(e.functionCallFn),"ALT")},{GATE:r(()=>t.allowFunctionCalls,"GATE"),ALT:r(()=>e.SUBRULE(e.taskCallFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.groupFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.returnFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.switchFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.whileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.throwFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.tryCatchFn),"ALT")}]),e.sectionStack.pop()}}r(YN,"controlFn");function KN(e){let t=["ids","timeout"],n=["description","disabled"];return()=>{e.sectionStack.push("awaitFn");let o=e.CONSUME(ad);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(KN,"awaitFn");function JN(e){return()=>{e.sectionStack.push("conditionalElifFn"),e.CONSUME(rd),e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.OPTION(()=>e.SUBRULE(e.nakedStackFn)),e.sectionStack.pop()}}r(JN,"conditionalElifFn");function QN(e){return()=>{e.sectionStack.push("conditionalElseFn"),e.CONSUME(td),e.SUBRULE(e.nakedStackFn),e.sectionStack.pop()}}r(QN,"conditionalElseFn");function XN(e){return()=>{let t=!1,n=!1,o=!1;e.sectionStack.push("conditionalFn");let i=e.CONSUME(ed);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.disabledFieldAttribute)},"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.conditionalIfFn),e.MANY1(()=>{e.MANY3(()=>e.CONSUME3(p)),e.SUBRULE(e.conditionalElifFn)}),e.OPTION(()=>{e.MANY4(()=>e.CONSUME4(p)),e.SUBRULE(e.conditionalElseFn)})},"ALT")}])}),t||e.addMissingError(i,"{} is missing the if statement"),e.MANY2(()=>e.CONSUME1(p)),e.CONSUME(A),e.sectionStack.pop()}}r(XN,"conditionalFn");function ZN(e){return()=>{e.sectionStack.push("conditionalIfFn"),e.CONSUME(Vi),e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.OPTION(()=>e.SUBRULE(e.nakedStackFn)),e.sectionStack.pop()}}r(ZN,"conditionalIfFn");function $N(e){return()=>{let t=!1;e.sectionStack.push("forEachFn"),e.CONSUME(od),e.OR([{ALT:r(()=>{e.CONSUME(M),e.CONSUME(id)},"ALT")},{ALT:r(()=>{e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.OPTION(()=>{e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR1([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(Fr),e.CONSUME(It),e.SUBRULE(e.assignableVariableAs),e.OPTION1(()=>e.SUBRULE1(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME1(Fr),e.CONSUME1(It),e.SUBRULE(e.assignableVariableAs),e.OPTION2(()=>e.SUBRULE2(e.nakedStackFn))),e.MANY2(()=>e.CONSUME1(p)),e.CONSUME(A)})},"ALT")}]),e.sectionStack.pop()}}r($N,"forEachFn");function eM(e){return()=>{let t=!1;e.sectionStack.push("forFn"),e.CONSUME(nd),e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.OPTION(()=>{e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(Fr),e.CONSUME(It),e.SUBRULE(e.assignableVariableAs),e.OPTION1(()=>e.SUBRULE1(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME1(Fr),e.CONSUME1(It),e.SUBRULE(e.assignableVariableAs),e.OPTION2(()=>e.SUBRULE2(e.nakedStackFn))),e.MANY2(()=>e.CONSUME1(p)),e.CONSUME(A)}),e.sectionStack.pop()}}r(eM,"forFn");function tM(e){let t=[],n=["input","description","disabled"];return()=>{e.sectionStack.push("functionCallFn"),e.CONSUME(eo),e.CONSUME(M);let o=e.CONSUME(kf);e.OR([{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME(Gt),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}]),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["input"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(tM,"functionCallFn");function rM(e){return()=>{e.sectionStack.push("functionRunFn"),e.CONSUME(eo),e.CONSUME(M);let t=e.CONSUME(Rf);e.OR([{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME(Gt),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}]),e.OPTION(()=>{e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{"input?":{"[string]":"[expression]"},"description?":"[string]","disabled?":"[boolean]"}]})}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(rM,"functionRunFn");function nM(e){return()=>{let t=!1;e.sectionStack.push("groupFn"),e.CONSUME(zi),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.SUBRULE(e.stackClause)},"ALT")}])}),t||e.SUBRULE(e.stackClause),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.sectionStack.pop()}}r(nM,"groupFn");function oM(e){return()=>{let t=[],n=["description","disabled","error_type","error","payload"];e.sectionStack.push("preconditionFn");let o=e.CONSUME(Lh);e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(oM,"preconditionFn");function iM(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("return");let o=e.CONSUME(Wi);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(iM,"returnFn");function aM(e){return()=>{e.sectionStack.push("switchCaseFn"),e.CONSUME(ud),e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.OPTION(()=>e.SUBRULE(e.nakedStackFn)),e.OPTION1(()=>e.CONSUME(Hi)),e.sectionStack.pop()}}r(aM,"switchCaseFn");function sM(e){return()=>{e.sectionStack.push("switchDefaultFn"),e.CONSUME(dd),e.SUBRULE(e.nakedStackFn),e.sectionStack.pop()}}r(sM,"switchDefaultFn");function cM(e){return()=>{e.sectionStack.push("switchFn"),e.CONSUME(ld),e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.OPTION(()=>{e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{e.MANY1(()=>{e.MANY3(()=>e.CONSUME3(p)),e.SUBRULE(e.switchCaseFn)})},"ALT")}])}),e.OPTION1(()=>{e.MANY4(()=>e.CONSUME4(p)),e.SUBRULE(e.switchDefaultFn)}),e.MANY2(()=>e.CONSUME1(p)),e.CONSUME(A)}),e.sectionStack.pop()}}r(cM,"switchFn");function lM(e){let t=[],n=["description","disabled"];return()=>{e.sectionStack.push("taskCallFn"),e.CONSUME(Ma),e.CONSUME(M);let o=e.CONSUME(ah);e.OR([{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME(Gt),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}]),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(lM,"taskCallFn");function uM(e){let t=["value","name"],n=["description","disabled"];return()=>{e.sectionStack.push("throw");let o=e.CONSUME(fd);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(uM,"throwFn");function dM(e){return()=>{let t=!1,n=!1;e.sectionStack.push("tryCatchFn"),e.CONSUME(sd),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(js),e.OPTION(()=>e.SUBRULE(e.nakedStackFn))},"ALT")},{ALT:r(()=>{n=!0,e.CONSUME(Vs),e.sectionStack.push("catchFn"),e.OPTION1(()=>e.SUBRULE1(e.nakedStackFn)),e.sectionStack.pop()},"ALT")},{ALT:r(()=>{e.CONSUME(cd),e.OPTION2(()=>e.SUBRULE2(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME(js),e.SUBRULE(e.nakedStackFn)),n||(e.CONSUME(Vs),e.SUBRULE(e.nakedStackFn)),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.sectionStack.pop()}}r(dM,"tryCatchFn");function pM(e){return()=>{let t=!1;e.sectionStack.push("whileFn"),e.CONSUME(pd),e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.OPTION(()=>{e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.CONSUME(Fr),e.OPTION1(()=>e.SUBRULE(e.nakedStackFn))},"ALT")}])}),t||(e.CONSUME(Fr),e.SUBRULE(e.nakedStackFn)),e.MANY2(()=>e.CONSUME1(p)),e.CONSUME(A)}),e.sectionStack.pop()}}r(pM,"whileFn");var fM=r(e=>{e.awaitFn=e.RULE("awaitFn",KN(e)),e.conditionalElifFn=e.RULE("conditionalElifFn",JN(e)),e.conditionalElseFn=e.RULE("conditionalElseFn",QN(e)),e.conditionalFn=e.RULE("conditionalFn",XN(e)),e.conditionalIfFn=e.RULE("conditionalIfFn",ZN(e)),e.forEachFn=e.RULE("forEachFn",$N(e)),e.forFn=e.RULE("forFn",eM(e)),e.functionRunFn=e.RULE("functionRunFn",rM(e)),e.functionCallFn=e.RULE("functionCallFn",tM(e)),e.taskCallFn=e.RULE("taskCallFn",lM(e)),e.groupFn=e.RULE("groupFn",nM(e)),e.preconditionFn=e.RULE("preconditionFn",oM(e)),e.returnFn=e.RULE("returnFn",iM(e)),e.switchCaseFn=e.RULE("switchCaseFn",aM(e)),e.switchDefaultFn=e.RULE("switchDefaultFn",sM(e)),e.switchFn=e.RULE("switchFn",cM(e)),e.throwFn=e.RULE("throwFn",uM(e)),e.tryCatchFn=e.RULE("tryCatchFn",dM(e)),e.whileFn=e.RULE("whileFn",pM(e))},"register");function mM(e){return()=>{let t=["data"],n=["description","disabled","addon"];e.sectionStack.push("dbAddFn");let o=e.CONSUME(nf);e.OR({DEF:[{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["data"],allowArray:["data","addon"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(mM,"dbAddFn");function hM(e){return()=>{let t=["field_value","field_name","data"],n=["description","disabled","addon"];e.sectionStack.push("dbAddOrEditFn");let o=e.CONSUME(of);e.OR({DEF:[{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["data"],allowArray:["data","addon"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(hM,"dbAddOrEditFn");function gM(e){return()=>{let t=["field_value","field_name"],n=["description","disabled"];e.sectionStack.push("dbDelFn");let o=e.CONSUME(af);e.OR({DEF:[{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(gM,"dbDelFn");function TM(e){return()=>{let t=["sql","response_type"],n=["description","disabled","arg"];e.sectionStack.push("dbDirectQueryFn");let o=e.CONSUME($i);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowDuplicates:["arg"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(TM,"dbDirectQueryFn");function EM(e){return()=>{let t=["field_value","field_name","data"],n=["description","disabled","addon"];e.sectionStack.push("dbEditFn");let o=e.CONSUME(sf);e.OR({DEF:[{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowArray:["addon"],types:{data:"object",description:"string",disabled:"boolean",field_name:"string"}}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(EM,"dbEditFn");function SM(e){return()=>{let t=["code","response_type","connection_string"],n=["description","disabled","arg"];e.sectionStack.push("dbExternalDirectQueryFn");let o=e.CONSUME($i);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowDuplicates:["arg"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(SM,"dbExternalDirectQueryFn");function yM(e){return()=>{e.sectionStack.push("dbExternalFn"),e.CONSUME(mf),e.CONSUME(M),e.OR([{ALT:r(()=>e.CONSUME(hf),"ALT")},{ALT:r(()=>e.CONSUME(gf),"ALT")},{ALT:r(()=>e.CONSUME(Ef),"ALT")},{ALT:r(()=>e.CONSUME(Tf),"ALT")}]),e.CONSUME1(M),e.SUBRULE(e.dbExternalDirectQueryFn),e.sectionStack.pop()}}r(yM,"dbExternalFn");function _M(e){return()=>{let t=["field_value","field_name"],n=["description","disabled","addon","output"];e.sectionStack.push("dbGetFn");let o=e.CONSUME(rf);e.OR({DEF:[{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowArray:["addon","output"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(_M,"dbGetFn");function xM(e){return()=>{let t=["field_value","field_name"],n=["description","disabled"];e.sectionStack.push("dbHasFn");let o=e.CONSUME(cf);e.OR({DEF:[{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(xM,"dbHasFn");function bM(e){return()=>{let t=["field_value","field_name","data"],n=["description","disabled","addon"];e.sectionStack.push("dbPatchFn");let o=e.CONSUME(lf);e.OR({DEF:[{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n,{allowObject:["data"],allowArray:["data","addon"]}]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(bM,"dbPatchFn");function RM(e){return e.requireRules(JW,XW,$W,e3,KW,o3,QW,ZW,r3,t3,n3),()=>{e.sectionStack.push("dbQueryFn");let t=e.CONSUME(tf);e.OR([{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}]);let n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1,f=!1,g=!1,_=!1,y=!1;e.OPTION(()=>{e.CONSUME(k),e.MANY(()=>e.CONSUME(p)),e.MANY1(()=>{e.OR1([{GATE:r(()=>!f,"GATE"),ALT:r(()=>{f=!0,e.SUBRULE(e.dbQueryFnEval)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.dbQueryFnReturn)},"ALT")},{GATE:r(()=>!y,"GATE"),ALT:r(()=>{y=!0,e.SUBRULE(e.mockAttribute)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.dbQueryFnAddOn)},"ALT")},{GATE:r(()=>!g,"GATE"),ALT:r(()=>{g=!0,e.SUBRULE(e.dbQueryFnSort)},"ALT")},{GATE:r(()=>!_,"GATE"),ALT:r(()=>{_=!0,e.SUBRULE(e.dbQueryFnOverrideSort)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.dbQueryFnOutput)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.dbQueryFnWhere)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.dbQueryFnAdditionalWhere)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.dbJoinFn)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.dbQueryFnDisabled)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.dbQueryFnDescription)},"ALT")}])}),e.MANY2(()=>e.CONSUME2(p)),e.CONSUME(A)}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(RM,"dbQueryFn");function KW(e){return()=>{e.CONSUME(rm),e.CONSUME(R),e.SUBRULE(e.valueExpression,{ARGS:[{allowQueryExpression:!0,allowOptionalIfNull:!0}]}),e.MANY(()=>e.CONSUME(p))}}r(KW,"dbQueryFnWhere");function JW(e){return()=>{let t=e.CONSUME(am);e.CONSUME(R),e.SUBRULE(e.schemaFn,{ARGS:[t,{"[string]":{table:"[string]","type?":["inner","left","right"],"where?":"[query]"}}]}),e.MANY(()=>e.CONSUME(p))}}r(JW,"dbJoinFn");function QW(e){let t={"[string]":{name:"[string]",input:{"[string]":"[expression]"},"output?":["[string]"]}};return t["[string]"]["addon?"]=t,()=>{let n=e.CONSUME(lm);e.CONSUME(R),e.SUBRULE(e.schemaFn,{ARGS:[n,t]}),e.MANY2(()=>e.CONSUME2(p))}}r(QW,"dbQueryFnAddOn");function XW(e){return()=>{e.CONSUME(qa),e.CONSUME(R),e.OR([{ALT:r(()=>e.CONSUME(Ze),"ALT")},{ALT:r(()=>e.CONSUME(Xe),"ALT")}]),e.MANY(()=>e.CONSUME(p))}}r(XW,"dbQueryFnDisabled");function ZW(e){return()=>{let t=e.CONSUME(dc);e.CONSUME(R),e.SUBRULE(e.schemaFn,{ARGS:[t,{"[string]":"[query]"}]}),e.MANY(()=>e.CONSUME(p))}}r(ZW,"dbQueryFnEval");function $W(e){return()=>{e.CONSUME(Ba),e.CONSUME(R),e.CONSUME(U),e.MANY(()=>e.CONSUME(p))}}r($W,"dbQueryFnDescription");function e3(e){return()=>{let t=e.CONSUME(Oa);e.CONSUME(R),e.SUBRULE(e.schemaFn,{ARGS:[t,["[string]"]]}),e.MANY(()=>e.CONSUME(p))}}r(e3,"dbQueryFnOutput");function t3(e){return()=>{let t=e.CONSUME(om);e.CONSUME(R),e.SUBRULE(e.schemaFn,{ARGS:[t,{"[string]":["asc","desc","rand"]}]}),e.MANY(()=>e.CONSUME(p))}}r(t3,"dbQueryFnSort");function r3(e){return()=>{e.CONSUME(im),e.CONSUME(R),e.SUBRULE(e.valueExpression),e.MANY(()=>e.CONSUME(p))}}r(r3,"dbQueryFnOverrideSort");function n3(e){return()=>{e.CONSUME(nm),e.CONSUME(R),e.SUBRULE(e.valueExpression,{ARGS:[{allowQueryExpression:!0,allowOptionalIfNull:!0}]}),e.MANY(()=>e.CONSUME(p))}}r(n3,"dbQueryFnAdditionalWhere");function o3(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1;e.CONSUME(Wi),e.CONSUME(R),e.CONSUME(k),e.MANY(()=>e.CONSUME(p));let s=!1,c=null;e.MANY1(()=>{s&&e.addMissingError(null,"Expected a separator between attributes"),e.OR({IGNORE_AMBIGUITIES:!0,DEF:[{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let l=e.CONSUME(lg);e.CONSUME(ye),e.SUBRULE(e.schemaFn,{ARGS:[l,["list","stream","exists","count","single","aggregate"]]}),c=de(e.LA(0))},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0;let l=e.CONSUME1(sm);e.CONSUME1(ye),e.SUBRULE1(e.schemaFn,{ARGS:[l,{"page?":"[expression]","per_page?":"[expression]","offset?":"[expression]","totals?":"[boolean]","metadata?":"[boolean]"}]})},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0;let l=e.CONSUME(cm);e.CONSUME2(ye),e.SUBRULE2(e.schemaFn,{ARGS:[l,["yes","no"]]})},"ALT")},{GATE:r(()=>!i&&c&&c==="aggregate","GATE"),ALT:r(()=>{i=!0;let l=e.CONSUME(zi);e.CONSUME3(ye),e.SUBRULE3(e.schemaFn,{ARGS:[l,{"[string]":"[query]"}]})},"ALT")},{GATE:r(()=>!a&&c&&c==="aggregate","GATE"),ALT:r(()=>{a=!0;let l=e.CONSUME(dc);e.CONSUME4(ye),e.SUBRULE4(e.schemaFn,{ARGS:[l,{"[string]":"[expression]"}]})},"ALT")}]}),s=!0,e.OPTION(()=>{s=!1,e.CONSUME1(Oe)}),e.MANY9(()=>{s=!1,e.CONSUME1(p)})}),e.CONSUME(A),e.MANY2(()=>e.CONSUME3(p))}}r(o3,"dbQueryFnReturn");function kM(e){return()=>{let t=[],n=["description","disabled","path"];e.sectionStack.push("dbSchemaFn");let o=e.CONSUME(uf);e.OR([{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}]),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(kM,"dbSchemaFn");function AM(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("dbSetDatasourceFn");let o=e.CONSUME(ff);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(AM,"dbSetDatasourceFn");function UM(e){return()=>{let t=!1;e.sectionStack.push("dbTransactionFn"),e.CONSUME(df),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.SUBRULE(e.stackClause)},"ALT")}])}),t||e.SUBRULE(e.stackClause),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.sectionStack.pop()}}r(UM,"dbTransactionFn");function vM(e){return()=>{let t=[],n=["description","disabled","reset"];e.sectionStack.push("dbTruncateFn");let o=e.CONSUME(pf);e.OR({DEF:[{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME1(U),"ALT")}],ERR_MSG:"Expected a table name"}),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(vM,"dbTruncateFn");var CM=r(e=>{e.dbAddFn=e.RULE("dbAddFn",mM(e)),e.dbDelFn=e.RULE("dbDelFn",gM(e)),e.dbDirectQueryFn=e.RULE("dbDirectQueryFn",TM(e)),e.dbEditFn=e.RULE("dbEditFn",EM(e)),e.dbExternalDirectQueryFn=e.RULE("dbExternalDirectQueryFn",SM(e)),e.dbExternalFn=e.RULE("dbExternalFn",yM(e)),e.dbGetFn=e.RULE("dbGetFn",_M(e)),e.dbHasFn=e.RULE("dbHasFn",xM(e)),e.dbPatchFn=e.RULE("dbPatchFn",bM(e)),e.dbQueryFn=e.RULE("dbQueryFn",RM(e)),e.dbSchemaFn=e.RULE("dbSchemaFn",kM(e)),e.dbSetDatasourceFn=e.RULE("dbSetDatasourceFn",AM(e)),e.dbTransactionFn=e.RULE("dbTransactionFn",UM(e)),e.dbTruncateFn=e.RULE("dbTruncateFn",vM(e)),e.dbAddOrEditFn=e.RULE("dbAddOrEditFn",hM(e))},"register");function LM(e){return()=>{e.sectionStack.push("db"),e.CONSUME(ef),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.dbExternalFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbGetFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbHasFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbEditFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbDelFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbAddFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbDirectQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbSetDatasourceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbQueryFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbSchemaFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbTruncateFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbTransactionFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbPatchFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.dbAddOrEditFn),"ALT")}]),e.sectionStack.pop()}}r(LM,"dbFn");function OM(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("debugLog");let o=e.CONSUME(_f);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(OM,"debugLogFn");function NM(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("debugStop");let o=e.CONSUME(yf);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(NM,"debugStopFn");var MM=r(e=>{e.debugLogFn=e.RULE("debugLogFn",OM(e)),e.debugStopFn=e.RULE("debugStopFn",NM(e))},"register");function wM(e){return()=>{e.sectionStack.push("debug"),e.CONSUME(Sf),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.debugLogFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.debugStopFn),"ALT")}]),e.sectionStack.pop()}}r(wM,"debugFn");function FM(e){let t=["min","max"],n=[];return()=>{e.sectionStack.push("unitExpectToBeWithinFn");let o=e.CONSUME(Sa);e.CONSUME(ce),e.CONSUME(ao),e.MANY(()=>{e.CONSUME(M),e.CONSUME(T)}),e.CONSUME(ne),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(FM,"unitExpectToBeWithinFn");function IM(e){let t=[],n=["exception"];return()=>{e.sectionStack.push("unitExpectToThrowFn");let o=e.CONSUME(ya);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(IM,"unitExpectToThrowFn");function PM(e){let t=["value"],n=[];return()=>{e.sectionStack.push("unitExpectWithArgumentsFn");let o=e.OR([{ALT:r(()=>e.CONSUME(ga),"ALT")},{ALT:r(()=>e.CONSUME(da),"ALT")},{ALT:r(()=>e.CONSUME(pa),"ALT")},{ALT:r(()=>e.CONSUME(fa),"ALT")},{ALT:r(()=>e.CONSUME(ma),"ALT")},{ALT:r(()=>e.CONSUME(ha),"ALT")},{ALT:r(()=>e.CONSUME(Ta),"ALT")},{ALT:r(()=>e.CONSUME(Ea),"ALT")}]);e.CONSUME(ce),e.CONSUME(ao),e.MANY(()=>{e.CONSUME(M),e.CONSUME(T)}),e.CONSUME(ne),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(PM,"unitExpectWithArgumentsFn");function DM(e){return()=>{e.sectionStack.push("unitExpectWithoutArgumentsFn"),e.OR([{ALT:r(()=>e.CONSUME(ra),"ALT")},{ALT:r(()=>e.CONSUME(na),"ALT")},{ALT:r(()=>e.CONSUME(oa),"ALT")},{ALT:r(()=>e.CONSUME(ia),"ALT")},{ALT:r(()=>e.CONSUME(aa),"ALT")},{ALT:r(()=>e.CONSUME(sa),"ALT")},{ALT:r(()=>e.CONSUME(ca),"ALT")},{ALT:r(()=>e.CONSUME(la),"ALT")},{ALT:r(()=>e.CONSUME(ua),"ALT")}]),e.CONSUME(ce),e.CONSUME(ao),e.MANY(()=>{e.CONSUME(M),e.CONSUME(T)}),e.CONSUME(ne),e.sectionStack.pop()}}r(DM,"unitExpectWithoutArgumentsFn");function BM(e){let t=["min","max"],n=["description","disabled"];return()=>{e.sectionStack.push("workflowExpectToBeWithinFn");let o=e.CONSUME(Sa);e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(BM,"workflowExpectToBeWithinFn");function qM(e){let t=[],n=["value"];return()=>{e.sectionStack.push("workflowExpectToThrowFn");let o=e.CONSUME(ya);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(qM,"workflowExpectToThrowFn");function GM(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("workflowExpectWithArgumentsFn");let o=e.OR([{ALT:r(()=>e.CONSUME(ga),"ALT")},{ALT:r(()=>e.CONSUME(da),"ALT")},{ALT:r(()=>e.CONSUME(pa),"ALT")},{ALT:r(()=>e.CONSUME(fa),"ALT")},{ALT:r(()=>e.CONSUME(ma),"ALT")},{ALT:r(()=>e.CONSUME(ha),"ALT")},{ALT:r(()=>e.CONSUME(Ta),"ALT")},{ALT:r(()=>e.CONSUME(Ea),"ALT")}]);e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(GM,"workflowExpectWithArgumentsFn");function jM(e){return()=>{e.sectionStack.push("workflowExpectWithoutArgumentsFn");let t=e.OR([{ALT:r(()=>e.CONSUME(ra),"ALT")},{ALT:r(()=>e.CONSUME(na),"ALT")},{ALT:r(()=>e.CONSUME(oa),"ALT")},{ALT:r(()=>e.CONSUME(ia),"ALT")},{ALT:r(()=>e.CONSUME(aa),"ALT")},{ALT:r(()=>e.CONSUME(sa),"ALT")},{ALT:r(()=>e.CONSUME(ca),"ALT")},{ALT:r(()=>e.CONSUME(la),"ALT")},{ALT:r(()=>e.CONSUME(ua),"ALT")}]);e.CONSUME(ce),e.SUBRULE(e.valueExpression),e.CONSUME(ne),e.SUBRULE(e.functionAttrReq,{ARGS:[t,[],["description","disabled"]]}),e.sectionStack.pop()}}r(jM,"workflowExpectWithoutArgumentsFn");var VM=r(e=>{e.unitExpectWithArgumentsFn=e.RULE("unitExpectWithArgumentsFn",PM(e)),e.unitExpectWithoutArgumentsFn=e.RULE("unitExpectWithoutArgumentsFn",DM(e)),e.unitExpectToThrowFn=e.RULE("unitExpectToThrowFn",IM(e)),e.unitExpectToBeWithinFn=e.RULE("unitExpectToBeWithinFn",FM(e)),e.workflowExpectWithArgumentsFn=e.RULE("workflowExpectWithArgumentsFn",GM(e)),e.workflowExpectWithoutArgumentsFn=e.RULE("workflowExpectWithoutArgumentsFn",jM(e)),e.workflowExpectToThrowFn=e.RULE("workflowExpectToThrowFn",qM(e)),e.workflowExpectToBeWithinFn=e.RULE("workflowExpectToBeWithinFn",BM(e))},"register");function WM(e){return()=>{let t=!1;e.sectionStack.push("allMathFn"),e.OR([{ALT:r(()=>e.CONSUME(Cf),"ALT")},{ALT:r(()=>e.CONSUME(Lf),"ALT")},{ALT:r(()=>e.CONSUME(Of),"ALT")},{ALT:r(()=>e.CONSUME(Nf),"ALT")},{ALT:r(()=>e.CONSUME(Mf),"ALT")},{ALT:r(()=>{e.CONSUME(wf),e.CONSUME(M),e.OR1([{ALT:r(()=>e.CONSUME(Ff),"ALT")},{ALT:r(()=>e.CONSUME(If),"ALT")},{ALT:r(()=>e.CONSUME(Pf),"ALT")}])},"ALT")}]),e.SUBRULE(e.assignableVariableProperty),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.sectionStack.pop()}}r(WM,"allMathFn");var zM=r(e=>{e.allMathFn=e.RULE("allMathFn",WM(e))},"register");function HM(e){return()=>{e.sectionStack.push("math"),e.CONSUME(vf),e.CONSUME(M),e.SUBRULE(e.allMathFn),e.sectionStack.pop()}}r(HM,"mathFn");function YM(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("objectEntriesFn");let o=e.CONSUME(Zf);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(YM,"objectEntriesFn");function KM(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("objectKeysFn");let o=e.CONSUME($f);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(KM,"objectKeysFn");function JM(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("objectValuesFn");let o=e.CONSUME(em);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(JM,"objectValuesFn");var QM=r(e=>{e.objectEntriesFn=e.RULE("objectEntriesFn",YM(e)),e.objectKeysFn=e.RULE("objectKeysFn",KM(e)),e.objectValuesFn=e.RULE("objectValuesFn",JM(e))},"register");function XM(e){return()=>{e.sectionStack.push("object"),e.CONSUME(Xf),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.objectEntriesFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.objectKeysFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.objectValuesFn),"ALT")}]),e.sectionStack.pop()}}r(XM,"objectFn");function ZM(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisCountFn");let o=e.CONSUME(mm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(ZM,"redisCountFn");function $M(e){return()=>{let t=["key","by"],n=["description","disabled"];e.sectionStack.push("redisDecrFn");let o=e.CONSUME(hm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r($M,"redisDecrFn");function ew(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisDelFn");let o=e.CONSUME(gm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(ew,"redisDelFn");function tw(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisGetFn");let o=e.CONSUME(Tm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(tw,"redisGetFn");function rw(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisHasFn");let o=e.CONSUME(Em);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(rw,"redisHasFn");function nw(e){return()=>{let t=["package_key","key","by"],n=["description","disabled"];e.sectionStack.push("redisIncrFn");let o=e.CONSUME(Sm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(nw,"redisIncrFn");function ow(e){return()=>{let t=["search"],n=["description","disabled"];e.sectionStack.push("redisKeysFn");let o=e.CONSUME(ym);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(ow,"redisKeysFn");function iw(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisPopFn");let o=e.CONSUME(_m);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(iw,"redisPopFn");function aw(e){return()=>{let t=["key","value","package_key"],n=["description","disabled"];e.sectionStack.push("redisPushFn");let o=e.CONSUME(xm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(aw,"redisPushFn");function sw(e){return()=>{let t=["key","start","stop"],n=["description","disabled"];e.sectionStack.push("redisRangeFn");let o=e.CONSUME(bm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(sw,"redisRangeFn");function cw(e){return()=>{let t=["key","max","ttl","error"],n=["description","disabled"];e.sectionStack.push("redisRateLimitFn");let o=e.CONSUME(Rm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(cw,"redisRateLimitFn");function lw(e){return()=>{let t=["key","value","count"],n=["description","disabled"];e.sectionStack.push("redisRemoveFn");let o=e.CONSUME(km);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(lw,"redisRemoveFn");function uw(e){return()=>{let t=["key","data","ttl"],n=["description","disabled"];e.sectionStack.push("redisSetFn");let o=e.CONSUME(Am);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(uw,"redisSetFn");function dw(e){return()=>{let t=["key"],n=["description","disabled"];e.sectionStack.push("redisShiftFn");let o=e.CONSUME(Um);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(dw,"redisShiftFn");function pw(e){return()=>{let t=["key","value"],n=["description","disabled"];e.sectionStack.push("redisUnshiftFn");let o=e.CONSUME(vm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(pw,"redisUnshiftFn");var fw=r(e=>{e.redisCountFn=e.RULE("redisCountFn",ZM(e)),e.redisDecrFn=e.RULE("redisDecrFn",$M(e)),e.redisDelFn=e.RULE("redisDelFn",ew(e)),e.redisGetFn=e.RULE("redisGetFn",tw(e)),e.redisHasFn=e.RULE("redisHasFn",rw(e)),e.redisIncrFn=e.RULE("redisIncrFn",nw(e)),e.redisKeysFn=e.RULE("redisKeysFn",ow(e)),e.redisPopFn=e.RULE("redisPopFn",iw(e)),e.redisPushFn=e.RULE("redisPushFn",aw(e)),e.redisRangeFn=e.RULE("redisRangeFn",sw(e)),e.redisRateLimitFn=e.RULE("redisRateLimitFn",cw(e)),e.redisRemoveFn=e.RULE("redisRemoveFn",lw(e)),e.redisSetFn=e.RULE("redisSetFn",uw(e)),e.redisShiftFn=e.RULE("redisShiftFn",dw(e)),e.redisUnshiftFn=e.RULE("redisUnshiftFn",pw(e))},"register");function mw(e){return()=>{e.sectionStack.push("redis"),e.CONSUME(fm),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.redisDelFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisSetFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisGetFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisHasFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisIncrFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisDecrFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisKeysFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisPushFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisUnshiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisPopFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisShiftFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisRemoveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisCountFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisRangeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.redisRateLimitFn),"ALT")}]),e.sectionStack.pop()}}r(mw,"redisFn");function hw(e){return(t,n)=>{let o=!1;e.CONSUME(it),e.MANY(()=>{e.MANY1(()=>{o=!1,e.CONSUME(p)}),o&&e.addInvalidValueError("Expected a comma, a new line or closing bracket"),e.SUBRULE(e.schemaFn,{ARGS:[t,pt(n)]}),o=!0,e.MANY2(()=>{o=!1,e.CONSUME1(p)}),e.OPTION(()=>(o=!1,e.CONSUME1(Oe)))}),e.CONSUME(at)}}r(hw,"schemaParseArrayFn");function by(e){return typeof e!="object"||!Array.isArray(e)?!1:e.length==1}r(by,"schemaExpectArray");function Pr(e){return!e||typeof e!="string"?!1:e.endsWith("?")}r(Pr,"isOptionalAttribute");function pr(e){return!e||typeof e!="string"?!1:(Pr(e)&&(e=e.slice(0,-1)),e.startsWith("[")&&e.endsWith("]"))}r(pr,"isSchemaGenericType");function gw(e){return pr(e)?Pr(e)?e.slice(1,-2):e.slice(1,-1):null}r(gw,"getSchemaGenericTypeName");function fo(e,t){if(pr(e)){let n=Pr(e)?e.slice(1,-2):e.slice(1,-1);return t.includes(n)}return!1}r(fo,"schemaExpectOneOf");function Tw(e){return(t,n,o={})=>{let i=null,a=e.OR([{ALT:r(()=>(i="string",e.CONSUME(U)),"ALT")},{ALT:r(()=>(i="string",e.CONSUME(Dt)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(ze)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(Ct)),"ALT")},{ALT:r(()=>(i="boolean",e.CONSUME(Xe)),"ALT")},{ALT:r(()=>(i="boolean",e.CONSUME(Ze)),"ALT")},{ALT:r(()=>(i="null",e.CONSUME(uo)),"ALT")},{IGNORE_AMBIGUITIES:!0,ALT:r(()=>(i="string",e.CONSUME(T)),"ALT")}]);o.value=a,e.ACTION(()=>{Ew(i,a.image,n)||e.addExpectedValueError(t,n)})}}r(Tw,"schemaParseConstantFn");function Ew(e,t,n){let o=n!==null?n.toString():n;if(q(n))return Nr(n,i=>Ew(e,t,i));switch(e){case"string":return(t.startsWith('"')||t.startsWith("'"))&&(t=t.slice(1,-1)),t===o;case"number":case"boolean":return t===o;case"null":return o===null;default:throw new Error(`schemaParseConstantFn called with non-constant attribute: ${n}`)}}r(Ew,"matchValueToSchema");function Ry(e){return pr(e)?!1:typeof e=="string"||typeof e=="number"||typeof e=="boolean"||e===null}r(Ry,"schemaExpectConstant");function Sw(e){return(t,n,o={})=>{let[i,a]=IS(n,pr);e.ACTION(()=>{if(a.length>0&&i.length>0)throw new Error("schemaParseEnumFn does not support mixing constant and immutable types in the same enum, received: "+JSON.stringify(n))}),e.OR({IGNORE_AMBIGUITIES:!0,DEF:[{GATE:r(()=>a.length>0,"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseConstantFn,{ARGS:[t,a,o]}),"ALT")},{GATE:r(()=>i.length>0,"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseImmutableFn,{ARGS:[t,i,o]}),"ALT")}]})}}r(Sw,"schemaParseEnumFn");function ky(e){return!!(q(e)&&e.length>1)}r(ky,"schemaExpectEnum");function yw(e){return(t,n,o={})=>{let i=!1,a=null,s=he(n),c=[...s],l=[];if(e.ACTION(()=>{if(s.length>1&&Nr(s,d=>pr(d)))throw new Error("schemaParseObjectFn supports only one generic type when multiple keys are defined")}),e.CONSUME(k),e.MANY(()=>{e.MANY1(()=>{i=!1,e.CONSUME(p)}),i&&e.addInvalidValueError(a,"Expected a comma, a new line or closing bracket");let d,f=e.OR([{ALT:r(()=>{d=e.CONSUME(T);let y=[d];return e.MANY3(()=>{y.push(e.CONSUME(M)),e.CONSUME1(T)}),y.map(O=>O.image).join(".")},"ALT")},{ALT:r(()=>e.CONSUME(U).image.slice(1,-1),"ALT")}]);l.includes(f)?e.addInvalidValueError(d,`Duplicate key '${f}' found`):(l.push(f),o[f]={key:d,value:null});let g=Ay(f,s);g||e.addInvalidValueError(d,`The key '${f}' is not valid in this context`),c.splice(c.indexOf(g),1),e.CONSUME(ye);let _=ko(n,g,null);e.SUBRULE(e.schemaFn,{ARGS:[d,_,o[f]]}),i=!0,e.MANY2(()=>{i=!1,e.CONSUME1(p)}),e.OPTION(()=>{i=!1,e.CONSUME1(Oe)})}),e.CONSUME(A),c.length){let d=c.filter(f=>!Pr(f));d.length>1?e.addInvalidValueError(a||t,`The following required keys are missing: ${d.join(", ")}`):d.length===1&&e.addInvalidValueError(a||t,`Missing required key '${d[0]}'`)}return{foo:"foo-bar"}}}r(yw,"schemaParseObjectFn");var Ay=r((e,t)=>{for(let n of t)if(pr(n))switch(gw(n)){case"string":if(typeof e=="string")return n;break;case"number":if(!isNaN(Number(e)))return n;break;case"boolean":if(e==="true"||e==="false")return n;break}else{if(Pr(n)&&e===n.slice(0,-1))return n;if(e===n)return n}return!1},"keyMatchRequirements");function Uy(e){return Xl(e)}r(Uy,"schemaExpectObject");var i3=r(e=>fo(e,["string","number","boolean","timestamp"])?q(e)?`Expected one of the following types:  ${e.join(", ")}`:`Expected a ${e}`:Ry(e)?q(e)?`Expected one of the following constants: ${e.join(", ")}`:`Expected a ${e}`:by(e)?`Expected an array of ${e[0]}`:Uy(e)?"Expected an object {}":ky(e)?`Expected one of the following enum values: ${e.join(", ")}`:fo(e,["mock"])?"Expected a mock":fo(e,["expression"])?"Expected an expression":fo(e,["query"])?"Expected a database query expression":`Invalid schema: received ${JSON.stringify(e)}`,"getErrorMessageForSchema");function _w(e){return(t,n,o={})=>{e.sectionStack.push("schema"),e.OR({IGNORE_AMBIGUITIES:!0,ERR_MSG:i3(n),DEF:[{GATE:r(()=>fo(n,["string","number","boolean","timestamp"],o),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseImmutableFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>Ry(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseConstantFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>by(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseArrayFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>Uy(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>ky(n),"GATE"),ALT:r(()=>e.SUBRULE(e.schemaParseEnumFn,{ARGS:[t,n,o]}),"ALT")},{GATE:r(()=>fo(n,["expression","query"]),"GATE"),ALT:r(()=>{let i=fo(n,["query"]);e.SUBRULE(e.valueExpression,{ARGS:[{allowQueryExpression:i}]})},"ALT")}]}),e.sectionStack.pop()}}r(_w,"schemaFn");function xw(e){return e.requireRules(a3),(t,n,o={})=>{let i=he(n).every(a=>Pr(a));e.OR([{GATE:r(()=>i,"GATE"),ALT:r(()=>{e.OPTION(()=>e.SUBRULE(e._schemaParseAttributeFn,{ARGS:[t,n,o]}))},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE1(e._schemaParseAttributeFn,{ARGS:[t,n,o]}),"ALT")}])}}r(xw,"schemaParseAttributeFn");function a3(e){return(t,n,o={})=>{let i=!1,a=null,s=he(n),c=[...s],l=[];if(e.ACTION(()=>{if(s.length>1&&Nr(s,d=>pr(d)))throw new Error("schemaParseAttributeFn supports only one generic type when multiple keys are defined")}),e.CONSUME(k),e.MANY(()=>{e.MANY1(()=>{i=!1,e.CONSUME(p)}),i&&e.addInvalidValueError(a,"Expected a comma, a new line or closing bracket");let d,f=e.OR([{ALT:r(()=>(d=e.CONSUME1(T),d.image),"ALT")},{ALT:r(()=>e.CONSUME1(U).image.slice(1,-1),"ALT")}]);f!=="mock"&&l.includes(f)?e.addInvalidValueError(d,`Duplicate key '${f}' found`):(l.push(f),o[f]={key:d,value:null});let g=Ay(f,s);g||e.addInvalidValueError(d,`The key '${f}' is not valid in this context`),c.splice(c.indexOf(g),1),e.CONSUME(R);let _=ko(n,g,null);e.SUBRULE(e.schemaFn,{ARGS:[d,_,o[f]]}),i=!0,e.MANY2(()=>{i=!1,e.CONSUME1(p)}),e.OPTION(()=>{i=!1,e.CONSUME1(Oe)})}),e.CONSUME(A),c.length){let d=c.filter(f=>!Pr(f));d.length>1?e.addInvalidValueError(a||t,`The following required attributes are missing: ${d.join(", ")}`):d.length===1&&e.addInvalidValueError(a||t,`Missing required attribute '${d[0]}'`)}}}r(a3,"_schemaParseAttributeFn");function Rw(e){return(t,n,o={})=>{let i,a=e.OR({DEF:[{ALT:r(()=>(i="timestamp",e.CONSUME(Uf)),"ALT")},{ALT:r(()=>(i="string",e.CONSUME(U)),"ALT")},{ALT:r(()=>(i="string",e.CONSUME(to)),"ALT")},{ALT:r(()=>(i="string",e.CONSUME(Dt)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(Ct)),"ALT")},{ALT:r(()=>(i="number",e.CONSUME(ze)),"ALT")},{ALT:r(()=>{i="boolean",e.SUBRULE(e.booleanValue)},"ALT")}]});o.value=a,e.ACTION(()=>{let s=q(n),c=s?n.map(bw):bw(n);if(s){if(!bt(c))throw new Error(`schemaParseImmutableFn called with invalid enum attribute: ${n}`);c.includes(i)||e.addExpectedValueTypeError(t,c.join(" or "))}else{if(!c)throw new Error(`schemaParseImmutableFn called with invalid attribute: ${n}`);i!==c&&e.addExpectedValueTypeError(t,c)}})}}r(Rw,"schemaParseImmutableFn");function bw(e){let t=["string","number","boolean","timestamp"];if(pr(e)){let n=Pr(e)?e.slice(1,-2):e.slice(1,-1);if(t.includes(n))return n}return null}r(bw,"getImmutableAttributeType");var kw=r(e=>{e.schemaFn=e.RULE("schemaFn",_w(e)),e.schemaParseImmutableFn=e.RULE("schemaParseImmutableFn",Rw(e)),e.schemaParseEnumFn=e.RULE("schemaParseEnumFn",Sw(e)),e.schemaParseConstantFn=e.RULE("schemaParseConstantFn",Tw(e)),e.schemaParseArrayFn=e.RULE("schemaParseArrayFn",hw(e)),e.schemaParseObjectFn=e.RULE("schemaParseObjectFn",yw(e)),e.schemaParseAttributeFn=e.RULE("schemaParseAttributeFn",xw(e))},"register");function Aw(e){return()=>{e.sectionStack.push("securityCheckPasswordFn");let t=e.CONSUME(Lm);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Aw,"securityCheckPasswordFn");function Uw(e){return()=>{e.sectionStack.push("securityCreateAuthTokenFn");let t=e.CONSUME(Mm);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Uw,"securityCreateAuthTokenFn");function vw(e){let t=["curve","format"],n=["description","disabled"];return()=>{e.sectionStack.push("securityCreateCurveKeyFn");let o=e.CONSUME(wm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(vw,"securityCreateCurveKeyFn");function Cw(e){let t=["character_count","require_lowercase","require_uppercase","require_digit","require_symbol","symbol_whitelist"],n=["description","disabled"];return()=>{e.sectionStack.push("securityCreatePasswordFn");let o=e.CONSUME(Om);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Cw,"securityCreatePasswordFn");function Lw(e){let t=["bits","format"],n=["description","disabled"];return()=>{e.sectionStack.push("securityCreateRsaKeyFn");let o=e.CONSUME(Fm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Lw,"securityCreateRsaKeyFn");function Ow(e){return()=>{e.sectionStack.push("securityCreateSecretKeyFn");let t=e.CONSUME(Im);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Ow,"securityCreateSecretKeyFn");function Nw(e){return()=>{e.sectionStack.push("securityCreateUuidFn");let t=e.CONSUME(Nm);e.OPTION(()=>{e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A)}),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Nw,"securityCreateUuidFn");function Mw(e){return()=>{e.sectionStack.push("securityDecryptFn");let t=e.CONSUME(Pm);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Mw,"securityDecryptFn");function ww(e){return()=>{e.sectionStack.push("securityEncryptFn");let t=e.CONSUME(Dm);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(ww,"securityEncryptFn");function Fw(e){return()=>{e.sectionStack.push("securityJweDecodeFn");let t=e.CONSUME(Bm);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Fw,"securityJweDecodeFn");function Iw(e){return()=>{e.sectionStack.push("securityJweEncodeFn");let t=e.CONSUME(qm);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Iw,"securityJweEncodeFn");function Pw(e){return()=>{e.sectionStack.push("securityJwsDecodeFn");let t=e.CONSUME(Gm);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Pw,"securityJwsDecodeFn");function Dw(e){return()=>{e.sectionStack.push("securityJwsEncodeFn");let t=e.CONSUME(jm);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Dw,"securityJwsEncodeFn");function Bw(e){return()=>{e.sectionStack.push("securityRandomBytesFn");let t=e.CONSUME(Vm);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(Bw,"securityRandomBytesFn");function qw(e){return()=>{e.sectionStack.push("securityRandomNumberFn");let t=e.CONSUME(Wm);e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.CONSUME1(T),e.CONSUME(R),e.SUBRULE(e.valueExpression)}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.SUBRULE(e.asVariable,{ARGS:[t]}),e.sectionStack.pop()}}r(qw,"securityRandomNumberFn");var Gw=r(e=>{e.securityCheckPasswordFn=e.RULE("securityCheckPasswordFn",Aw(e)),e.securityCreateAuthTokenFn=e.RULE("securityCreateAuthTokenFn",Uw(e)),e.securityCreateCurveKeyFn=e.RULE("securityCreateCurveKeyFn",vw(e)),e.securityCreatePasswordFn=e.RULE("securityCreatePasswordFn",Cw(e)),e.securityCreateRsaKeyFn=e.RULE("securityCreateRsaKeyFn",Lw(e)),e.securityCreateSecretKeyFn=e.RULE("securityCreateSecretKeyFn",Ow(e)),e.securityCreateUuidFn=e.RULE("securityCreateUuidFn",Nw(e)),e.securityDecryptFn=e.RULE("securityDecryptFn",Mw(e)),e.securityEncryptFn=e.RULE("securityEncryptFn",ww(e)),e.securityJweDecodeFn=e.RULE("securityJweDecodeFn",Fw(e)),e.securityJweEncodeFn=e.RULE("securityJweEncodeFn",Iw(e)),e.securityJwsDecodeFn=e.RULE("securityJwsDecodeFn",Pw(e)),e.securityJwsEncodeFn=e.RULE("securityJwsEncodeFn",Dw(e)),e.securityRandomBytesFn=e.RULE("securityRandomBytesFn",Bw(e)),e.securityRandomNumberFn=e.RULE("securityRandomNumberFn",qw(e))},"register");function jw(e){return()=>{e.sectionStack.push("security"),e.CONSUME(Cm),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.securityCheckPasswordFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateAuthTokenFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateCurveKeyFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreatePasswordFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateRsaKeyFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateSecretKeyFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityCreateUuidFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityDecryptFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityEncryptFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJweDecodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJweEncodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJwsDecodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityJwsEncodeFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityRandomBytesFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.securityRandomNumberFn),"ALT")}]),e.sectionStack.pop()}}r(jw,"securityFn");function Vw(e){return()=>{let t=["value","filename","access"],n=["description","disabled"];e.sectionStack.push("storageCreateAttachmentFn");let o=e.CONSUME(Ym);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Vw,"storageCreateAttachmentFn");function Ww(e){return()=>{let t=["filename","filedata"],n=["description","disabled"];e.sectionStack.push("storageCreateFileResourceFn");let o=e.CONSUME(Jm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Ww,"storageCreateFileResourceFn");function zw(e){return()=>{let t=["value","filename","access"],n=["description","disabled"];e.sectionStack.push("storageCreateImageFn");let o=e.CONSUME(Hm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(zw,"storageCreateImageFn");function Hw(e){return()=>{let t=["pathname"],n=["description","disabled"];e.sectionStack.push("storageDeleteFileFn");let o=e.CONSUME(Qm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(Hw,"storageDeleteFileFn");function Yw(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("storageReadFileResourceFn");let o=e.CONSUME(Km);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Yw,"storageReadFileResourceFn");function Kw(e){return()=>{let t=["pathname","ttl"],n=["description","disabled"];e.sectionStack.push("storageSignPrivateUrlFn");let o=e.CONSUME(Xm);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Kw,"storageSignPrivateUrlFn");var Jw=r(e=>{e.storageCreateAttachmentFn=e.RULE("storageCreateAttachmentFn",Vw(e)),e.storageCreateFileResourceFn=e.RULE("storageCreateFileResourceFn",Ww(e)),e.storageCreateImageFn=e.RULE("storageCreateImageFn",zw(e)),e.storageDeleteFileFn=e.RULE("storageDeleteFileFn",Hw(e)),e.storageReadFileResourceFn=e.RULE("storageReadFileResourceFn",Yw(e)),e.storageSignPrivateUrlFn=e.RULE("storageSignPrivateUrlFn",Kw(e))},"register");function Qw(e){return()=>{e.sectionStack.push("storage"),e.CONSUME(zm),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.storageCreateAttachmentFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageCreateFileResourceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageCreateImageFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageDeleteFileFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageReadFileResourceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.storageSignPrivateUrlFn),"ALT")}]),e.sectionStack.pop()}}r(Qw,"storageFn");function Xw(e){let t=["value","separator","enclosure","escape_char"],n=["description","disabled"];return()=>{e.sectionStack.push("streamFromCsv");let o=e.CONSUME($m);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Xw,"streamFromCsvFn");function Zw(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("streamFromJsonl");let o=e.CONSUME(eh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(Zw,"streamFromJsonlFn");function $w(e){let t=["url","method","params","headers","timeout","follow_location"],n=["description","disabled","verify_host","verify_peer","ca_certificate","certificate","certificate_pass","private_key","private_key_pass"];return()=>{e.sectionStack.push("streamFromRequest");let o=e.CONSUME(th);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r($w,"streamFromRequestFn");var eF=r(e=>{e.streamFromCsvFn=e.RULE("streamFromCsvFn",Xw(e)),e.streamFromJsonlFn=e.RULE("streamFromJsonlFn",Zw(e)),e.streamFromRequestFn=e.RULE("streamFromRequestFn",$w(e))},"register");function tF(e){return()=>{e.sectionStack.push("stream"),e.CONSUME(Zm),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.streamFromCsvFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.streamFromJsonlFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.streamFromRequestFn),"ALT")}]),e.sectionStack.pop()}}r(tF,"streamFn");function rF(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("allTextWithoutReturnValueFn");let o=e.OR([{ALT:r(()=>e.CONSUME(lh),"ALT")},{ALT:r(()=>e.CONSUME(hh),"ALT")},{ALT:r(()=>e.CONSUME(gh),"ALT")},{ALT:r(()=>e.CONSUME(Th),"ALT")},{ALT:r(()=>e.CONSUME(Sh),"ALT")}]);e.SUBRULE(e.assignableVariableProperty),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(rF,"allTextWithoutReturnValueFn");function nF(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("allTextWithReturnValueFn");let o=e.OR([{ALT:r(()=>e.CONSUME(uh),"ALT")},{ALT:r(()=>e.CONSUME(dh),"ALT")},{ALT:r(()=>e.CONSUME(ph),"ALT")},{ALT:r(()=>e.CONSUME(fh),"ALT")},{ALT:r(()=>e.CONSUME(mh),"ALT")},{ALT:r(()=>e.CONSUME(Eh),"ALT")}]);e.SUBRULE(e.assignableVariableProperty),e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(nF,"allTextWithReturnValueFn");var oF=r(e=>{e.allTextWithoutReturnValueFn=e.RULE("allTextWithoutReturnValueFn",rF(e)),e.allTextWithReturnValueFn=e.RULE("allTextWithReturnValueFn",nF(e))},"register");function iF(e){return()=>{e.sectionStack.push("text"),e.CONSUME(Zi),e.CONSUME(M);let t=e.LA(1).image,n=["contains","ends_with","icontains","iends_with","istarts_with","starts_with"],o=["append","ltrim","prepend","rtrim","trim"];n.includes(t)?e.SUBRULE(e.allTextWithReturnValueFn):o.includes(t)&&e.SUBRULE(e.allTextWithoutReturnValueFn),e.sectionStack.pop()}}r(iF,"textFn");function aF(e){return()=>{e.sectionStack.push("unitExpect"),e.CONSUME(ta),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.unitExpectWithArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectWithoutArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectToThrowFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.unitExpectToBeWithinFn),"ALT")}]),e.sectionStack.pop()}}r(aF,"unitExpectFn");function sF(e){return()=>{let t=["latitude_1","longitude_1","latitude_2","longitude_2"],n=["description","disabled"];e.sectionStack.push("utilGeoDistanceFn");let o=e.CONSUME(xh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(sF,"utilGeoDistanceFn");function cF(e){let t=[],n=["description","disabled"];return()=>{e.sectionStack.push("utilGetAllInputFn");let o=e.CONSUME(bh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(cF,"utilGetAllInputFn");function lF(e){return()=>{let t=[],n=["description","disabled"];e.sectionStack.push("utilGetEnvFn");let o=e.CONSUME(kh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(lF,"utilGetEnvFn");function uF(e){return()=>{let t=["encoding"],n=["description","disabled"];e.sectionStack.push("utilGetInputFn");let o=e.CONSUME(Ah);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(uF,"utilGetInputFn");function dF(e){return()=>{let t=[],n=["description","disabled"];e.sectionStack.push("utilGetVarsFn");let o=e.CONSUME(Uh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(dF,"utilGetVarsFn");function pF(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("utilIpLookupFn");let o=e.CONSUME(vh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(pF,"utilIpLookupFn");function fF(e){return()=>{let t=!1;e.sectionStack.push("utilPostProcessFn"),e.CONSUME(Ch),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")},{ALT:r(()=>{t=!0,e.SUBRULE(e.stackClause)},"ALT")}])}),t||e.SUBRULE(e.stackClause),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.sectionStack.pop()}}r(fF,"utilPostProcessFn");function mF(e){return()=>{e.sectionStack.push("utilSendEmailFn");let t=e.CONSUME(_h),n={};e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{"description?":"[string]","disabled?":"[boolean]","service_provider?":["resend","xano"],"api_key?":"[expression]","subject?":"[expression]","message?":"[expression]","to?":"[expression]","bcc?":"[expression]","cc?":"[expression]","from?":"[expression]","reply_to?":"[expression]","scheduled_at?":"[expression]","mock?":{"[string]":"[expression]"}},n]}),e.SUBRULE(e.asVariable,{ARGS:[t]});let o={xano:["description","disabled","service_provider","subject","message","mock"],resend:["description","disabled","service_provider","api_key","subject","message","to","bcc","cc","from","reply_to","scheduled_at","mock"]},i={xano:["subject","message"],resend:["api_key","subject","message","from","to"]};e.ACTION(()=>{let a=de(n.service_provider?.value),s=i[a]||[];for(let d of s)Object.prototype.hasOwnProperty.call(n,d)||e.addMissingError(t,`Missing required field '${d}' for service_provider '${a}'`);let c=o[a]||[],l=[];for(let d in n){let f=de(n[d].key);l.push(f),c.includes(f)||e.addIllegalAttributeError(n[d].key)}}),e.sectionStack.pop()}}r(mF,"utilSendEmailFn");function hF(e){return()=>{let t=["value","duplicates"],n=["description","disabled"];e.sectionStack.push("utilSetHeaderFn");let o=e.CONSUME(Oh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(hF,"utilSetHeaderFn");function gF(e){return()=>{let t=["value"],n=["description","disabled"];e.sectionStack.push("utilSleepFn");let o=e.CONSUME(Nh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(gF,"utilSleepFn");function TF(e){let t=["value"],n=["description","disabled"];return()=>{e.sectionStack.push("utilTemplateFn");let o=e.CONSUME(Rh);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(TF,"utilTemplateFn");var EF=r(e=>{e.utilGeoDistanceFn=e.RULE("utilGeoDistanceFn",sF(e)),e.utilGetAllInputFn=e.RULE("utilGetAllInputFn",cF(e)),e.utilGetEnvFn=e.RULE("utilGetEnvFn",lF(e)),e.utilGetInputFn=e.RULE("utilGetInputFn",uF(e)),e.utilGetVarsFn=e.RULE("utilGetVarsFn",dF(e)),e.utilIpLookupFn=e.RULE("utilIpLookupFn",pF(e)),e.utilPostProcessFn=e.RULE("utilPostProcessFn",fF(e)),e.utilSetHeaderFn=e.RULE("utilSetHeaderFn",hF(e)),e.utilSleepFn=e.RULE("utilSleepFn",gF(e)),e.utilTemplateFn=e.RULE("utilTemplateFn",TF(e)),e.utilSendEmailFn=e.RULE("utilSendEmailFn",mF(e))},"register");function SF(e){return()=>{e.sectionStack.push("util"),e.CONSUME(yh),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.utilIpLookupFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetEnvFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilSleepFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetAllInputFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetInputFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGetVarsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilGeoDistanceFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilPostProcessFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilSetHeaderFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilTemplateFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.utilSendEmailFn),"ALT")}]),e.sectionStack.pop()}}r(SF,"utilFn");function yF(e){return()=>{e.sectionStack.push("var");let t=e.CONSUME(wh);e.OR([{ALT:r(()=>{let n=e.CONSUME(Ne);n.image&&e.addVariable(n.image,"unknown")},"ALT")},{ALT:r(()=>{e.CONSUME(M),e.CONSUME(Fh),e.SUBRULE(e.assignableVariableProperty)},"ALT")}]),e.SUBRULE(e.schemaParseAttributeFn,{ARGS:[t,{value:"[expression]","description?":"[string]","disabled?":"[boolean]","mock?":{"[string]":"[expression]"}}]}),e.sectionStack.pop()}}r(yF,"varFn");function _F(e){return()=>{e.sectionStack.push("workflowExpect"),e.CONSUME(ta),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.workflowExpectWithArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.workflowExpectWithoutArgumentsFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.workflowExpectToThrowFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.workflowExpectToBeWithinFn),"ALT")}]),e.sectionStack.pop()}}r(_F,"workflowExpectFn");function xF(e){return()=>{let t=["file","zip"],n=["description","disabled","password","password_encryption","filename"];e.sectionStack.push("zipAddToArchiveFn");let o=e.CONSUME(rg);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(xF,"zipAddToArchiveFn");function bF(e){return()=>{let t=["filename"],n=["description","disabled","password","password_encryption"];e.sectionStack.push("zipCreateArchiveFn");let o=e.CONSUME(ng);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(bF,"zipCreateArchiveFn");function RF(e){return()=>{let t=["filename","zip"],n=["description","disabled","password"];e.sectionStack.push("zipDeleteFromArchiveFn");let o=e.CONSUME(og);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.sectionStack.pop()}}r(RF,"zipDeleteFromArchiveFn");function kF(e){return()=>{let t=["zip"],n=["description","disabled","password"];e.sectionStack.push("zipExtractFn");let o=e.CONSUME(ig);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(kF,"zipExtractFn");function AF(e){return()=>{let t=["zip"],n=["description","disabled","password"];e.sectionStack.push("zipViewContentsFn");let o=e.CONSUME(ag);e.SUBRULE(e.functionAttrReq,{ARGS:[o,t,n]}),e.SUBRULE(e.asVariable,{ARGS:[o]}),e.sectionStack.pop()}}r(AF,"zipViewContentsFn");var UF=r(e=>{e.zipAddToArchiveFn=e.RULE("zipAddToArchiveFn",xF(e)),e.zipCreateArchiveFn=e.RULE("zipCreateArchiveFn",bF(e)),e.zipDeleteFromArchiveFn=e.RULE("zipDeleteFromArchiveFn",RF(e)),e.zipExtractFn=e.RULE("zipExtractFn",kF(e)),e.zipViewContentsFn=e.RULE("zipViewContentsFn",AF(e))},"register");function vF(e){return()=>{e.sectionStack.push("zip"),e.CONSUME(tg),e.CONSUME(M),e.OR([{ALT:r(()=>e.SUBRULE(e.zipCreateArchiveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipAddToArchiveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipDeleteFromArchiveFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipExtractFn),"ALT")},{ALT:r(()=>e.SUBRULE(e.zipViewContentsFn),"ALT")}]),e.sectionStack.pop()}}r(vF,"zipFn");var CF=r(e=>{e.aiFn=e.RULE("aiFn",tN(e)),e.apiFn=e.RULE("apiFn",cN(e)),e.arrayFn=e.RULE("arrayFn",AN(e)),e.cloudFn=e.RULE("cloudFn",HN(e)),e.controlFn=e.RULE("controlFn",YN(e)),e.dbFn=e.RULE("dbFn",LM(e)),e.debugFn=e.RULE("debugFn",wM(e)),e.mathFn=e.RULE("mathFn",HM(e)),e.objectFn=e.RULE("objectFn",XM(e)),e.redisFn=e.RULE("redisFn",mw(e)),e.securityFn=e.RULE("securityFn",jw(e)),e.storageFn=e.RULE("storageFn",Qw(e)),e.streamFn=e.RULE("streamFn",tF(e)),e.textFn=e.RULE("textFn",iF(e)),e.utilFn=e.RULE("utilFn",SF(e)),e.varFn=e.RULE("varFn",yF(e)),e.zipFn=e.RULE("zipFn",vF(e)),e.unitExpectFn=e.RULE("unitExpectFn",aF(e)),e.workflowExpectFn=e.RULE("workflowExpectFn",_F(e)),eN(e),kw(e),sN(e),kN(e),zN(e),fM(e),CM(e),MM(e),zM(e),QM(e),fw(e),Gw(e),Jw(e),eF(e),oF(e),EF(e),UF(e),VM(e)},"register");function LF(e){return(t,n,o,i={})=>{e.CONSUME(it),e.OPTION(()=>{e.OR([{ALT:r(()=>{e.CONSUME(p),e.AT_LEAST_ONE(()=>{e.SUBRULE(e.objectAttrReq,{ARGS:[t,n,o,i]}),e.OPTION1(()=>e.CONSUME(Oe)),e.AT_LEAST_ONE1(()=>e.CONSUME3(p))})},"ALT")},{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:Oe,DEF:r(()=>{e.SUBRULE1(e.objectAttrReq,{ARGS:[t,n,o,i]})},"DEF")}),e.MANY(()=>e.CONSUME2(p))},"ALT")}])}),e.CONSUME(at)}}r(LF,"arrayOfObjectAttrReq");function OF(e){return()=>{e.CONSUME(it),e.OPTION(()=>{e.OR([{ALT:r(()=>{e.CONSUME(p),e.AT_LEAST_ONE(()=>{e.CONSUME(U),e.OPTION1(()=>e.CONSUME(Oe)),e.AT_LEAST_ONE1(()=>e.CONSUME3(p))})},"ALT")},{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:Oe,DEF:r(()=>{e.CONSUME1(U)},"DEF")}),e.MANY(()=>e.CONSUME2(p))},"ALT")}])}),e.CONSUME(at)}}r(OF,"arrayOfStringLiterals");function NF(e){return(t={})=>{e.CONSUME(it),e.OPTION(()=>e.OR([{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:Oe,DEF:r(()=>{e.SUBRULE(e.valueExpression,{ARGS:[{...t,allowObject:!0,allowArray:!0}]})},"DEF")})},"ALT")},{ALT:r(()=>{e.CONSUME(p),e.AT_LEAST_ONE(()=>{e.SUBRULE1(e.valueExpression,{ARGS:[{...t,allowObject:!0,allowArray:!0}]}),e.AT_LEAST_ONE1(()=>e.CONSUME1(p))})},"ALT")}])),e.CONSUME(at)}}r(NF,"arrayWithValues");function MF(e){return()=>{e.OR([{ALT:r(()=>{e.CONSUME(Ne)},"ALT")},{ALT:r(()=>{e.CONSUME(so),e.CONSUME(M),e.CONSUME(T)},"ALT")}])}}r(MF,"assignableVariableAs");function wF(e){return()=>{let t="";e.OR({DEF:[{ALT:r(()=>{t=e.CONSUME(Ne).image},"ALT")},{ALT:r(()=>{e.CONSUME(so),e.CONSUME(M),t=`$${e.CONSUME(T).image}`},"ALT")}],ERR_MSG:"expecting variable (e.g. $variable or $var.variable)"}),e.SUBRULE(e.chainedIdentifier),e.MANY({GATE:r(()=>e.LA(1).tokenType===St||e.LA(1).tokenType===p&&e.LA(2).tokenType===St,"GATE"),DEF:r(()=>{e.SUBRULE(e.filterFn)},"DEF")}),t&&e.addVariable(t,"unknown")}}r(wF,"assignableVariableProperty");function FF(e){return()=>{e.OPTION(()=>{e.CONSUME(It),e.SUBRULE(e.assignableVariableProperty)})}}r(FF,"asVariable");function IF(e){return()=>{e.OR([{ALT:r(()=>{e.CONSUME(Xe)},"ALT")},{ALT:r(()=>{e.CONSUME(Ze)},"ALT")}])}}r(IF,"booleanValue");function PF(e){return()=>{e.OR(Rd.map(t=>({ALT:r(()=>e.CONSUME(t),"ALT")}))),e.CONSUME(U)}}r(PF,"castedValue");function DF(e){return()=>{e.OPTION(()=>{e.CONSUME(it),e.OR({DEF:[{ALT:r(()=>e.SUBRULE(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeErrorVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")},{ALT:r(()=>e.CONSUME(ze),"ALT")}],ERR_MSG:"Invalid array index"}),e.CONSUME(at)}),e.MANY(()=>{e.CONSUME(M),e.CONSUME(T),e.OPTION1(()=>{e.CONSUME1(it),e.OR1({DEF:[{ALT:r(()=>e.SUBRULE1(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE1(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE1(e.completeErrorVariable),"ALT")},{ALT:r(()=>e.SUBRULE1(e.shortFormVariable),"ALT")},{ALT:r(()=>e.CONSUME1(ze),"ALT")}],ERR_MSG:"Invalid array index"}),e.CONSUME1(at)})})}}r(DF,"chainedIdentifier");function BF(e){return()=>{e.CONSUME(Dh),e.CONSUME(M),e.CONSUME(T),e.SUBRULE(e.chainedIdentifier)}}r(BF,"completeAuthVariable");function qF(e){return()=>{e.CONSUME(Ph),e.CONSUME(M),e.OR([{ALT:r(()=>e.CONSUME(Bh),"ALT")},{ALT:r(()=>e.CONSUME(Gh),"ALT")},{ALT:r(()=>e.CONSUME(jh),"ALT")},{ALT:r(()=>e.CONSUME(Vh),"ALT")},{ALT:r(()=>e.CONSUME(Wh),"ALT")},{ALT:r(()=>e.CONSUME(zh),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}])}}r(qF,"completeEnvVariable");function GF(e){let t=new Set(["name","code","message","result"]);return()=>{let n=e.CONSUME(qh);e.sectionStack.includes("catchFn")||e.addInvalidValueError(n,"Invalid use of $error variable outside of a catch block."),e.CONSUME(M);let o=e.CONSUME(T);t.has(o.image)||e.addInvalidValueError(o,`Invalid property '${o.image}' for $error variable. Allowed properties are: ${Array.from(t).join(", ")}.`),e.SUBRULE(e.chainedIdentifier)}}r(GF,"completeErrorVariable");function jF(e){return()=>{e.CONSUME(Ih),e.CONSUME(M),e.CONSUME(T),e.SUBRULE(e.chainedIdentifier)}}r(jF,"completeInputVariable");function VF(e){return(...t)=>{let n=t||[],o=e.CONSUME3(U),i=de(o);n.includes(i)||e.addMissingError(o,`Invalid value "${i}". Must be one of: ${n.map(a=>`"${a}"`).join(", ")}`)}}r(VF,"enumValue");function WF(e){return(t={},n=null)=>{e.OR([{ALT:r(()=>{e.CONSUME(p),e.CONSUME(St)},"ALT")},{ALT:r(()=>e.CONSUME1(St),"ALT")}]);let o=t.allowQueryExpression===!0?aO:Ag;e.OPTION(()=>e.CONSUME(br));let i=e.CONSUME(T);o.includes(i.image)||e.addInvalidValueError(i,`Unknown filter function '${i.image}'`),e.MANY1(()=>{e.CONSUME(ye),e.SUBRULE(e.valueExpression,{ARGS:[t,n]})})}}r(WF,"filterFn");var s3={allowDuplicates:[],allowQueryExpression:!1,allowDisabledKeys:!1,types:{}};function zF(e){return(t,n,o,i={})=>{n=n||[],o=o||[];let a=!1,s=!1;i={...s3,...i};let c=[],l=[...n,...o];e.OR({IGNORE_AMBIGUITIES:!0,DEF:[{GATE:r(()=>n.length===0,"GATE"),ALT:r(()=>{e.OPTION(()=>{e.CONSUME(k),e.MANY(()=>{e.OR1([{GATE:r(()=>!a,"GATE"),ALT:r(()=>e.MANY1(()=>e.CONSUME1(p)),"ALT")},{GATE:r(()=>a,"GATE"),ALT:r(()=>e.AT_LEAST_ONE(()=>e.CONSUME2(p)),"ALT")}]),e.OR2([{ALT:r(()=>{let y=e.CONSUME(T);c.push(y),e.CONSUME(R);let w=de(y),O=i.types[w];if(typeof O=="function")O.call(null,e,y);else if(Array.isArray(O)){let B=e.CONSUME3(U),N=de(B);O.includes(N)||e.addMissingError(B,`Invalid value "${N}". Must be one of: ${O.map(S=>`"${S}"`).join(", ")}`)}else e.OR4({DEF:[{GATE:r(()=>O==="boolean","GATE"),ALT:r(()=>e.SUBRULE(e.booleanValue),"ALT")},{GATE:r(()=>O==="number","GATE"),ALT:r(()=>e.SUBRULE(e.numberValue),"ALT")},{GATE:r(()=>O==="string","GATE"),ALT:r(()=>e.CONSUME1(U),"ALT")},{GATE:r(()=>O==="object","GATE"),ALT:r(()=>e.SUBRULE1(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!O,"GATE"),ALT:r(()=>e.SUBRULE(e.valueExpression,{ARGS:[i]}),"ALT")}],ERR_MSG:O?`${O} for attribute ${y.image}`:void 0});a=!0},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.mockAttribute),a=!0},"ALT")}])}),e.MANY2(()=>e.CONSUME3(p)),e.CONSUME(A)})},"ALT")},{GATE:r(()=>n.length>0,"GATE"),ALT:r(()=>{e.CONSUME1(k),e.MANY4(()=>{e.OR3([{GATE:r(()=>!a,"GATE"),ALT:r(()=>e.MANY5(()=>e.CONSUME4(p)),"ALT")},{GATE:r(()=>a,"GATE"),ALT:r(()=>e.AT_LEAST_ONE1(()=>e.CONSUME5(p)),"ALT")}]),e.OR5([{ALT:r(()=>{let y=e.CONSUME1(T);c.push(y),e.CONSUME1(R);let w=de(y),O=i.types[w];if(typeof O=="function")O.call(null,e,y);else if(Array.isArray(O)){let B=e.CONSUME3(U),N=de(B);O.includes(N)||e.addMissingError(B,`Invalid value "${N}". Must be one of: ${O.map(S=>`"${S}"`).join(", ")}`)}else e.OR6({DEF:[{GATE:r(()=>O==="boolean","GATE"),ALT:r(()=>e.SUBRULE2(e.booleanValue),"ALT")},{GATE:r(()=>O==="number","GATE"),ALT:r(()=>e.SUBRULE2(e.numberValue),"ALT")},{GATE:r(()=>O==="string","GATE"),ALT:r(()=>e.CONSUME2(U),"ALT")},{GATE:r(()=>O==="object","GATE"),ALT:r(()=>e.SUBRULE2(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!O,"GATE"),ALT:r(()=>e.SUBRULE2(e.valueExpression,{ARGS:[i]}),"ALT")}],ERR_MSG:O?`${O} for attribute ${y.image}`:void 0});a=!0},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{e.SUBRULE2(e.mockAttribute),s=!0,a=!0},"ALT")}])}),e.MANY6(()=>e.CONSUME6(p)),e.CONSUME1(A)},"ALT")}]});let d=c.filter((y,w)=>!i.allowDuplicates.includes(y.image)&&c.findIndex(O=>O.image===y.image)!==w);for(let y of d)e.addDuplicateAttributeError(y);let f=c.filter(y=>!l.includes(y.image));for(let y of f)e.addIllegalAttributeError(y);let g=c.map(y=>y.image),_=n.filter(y=>!g.includes(y));_.length>0&&e.addMissingAttributeError(t,_),e.sectionStack.pop()}}r(zF,"functionAttrReq");function HF(e){return()=>{e.CONSUME(so),e.CONSUME(M),e.CONSUME(T),e.SUBRULE(e.chainedIdentifier)}}r(HF,"longFormVariable");function YF(e){return()=>{e.sectionStack.push("minimalFnBody"),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.sectionStack.pop()}}r(YF,"minimalFnBody");function KF(e){return()=>{let t=e.CONSUME(xg);e.CONSUME(R),e.SUBRULE(e.schemaParseObjectFn,{ARGS:[t,{"[string]":"[expression]"}]}),e.sectionStack.pop()}}r(KF,"mockAttribute");function JF(e){return()=>{e.OR([{ALT:r(()=>{e.CONSUME(ze,{ERR_MSG:"Integer literal expected"})},"ALT")},{ALT:r(()=>{e.CONSUME(Ct,{ERR_MSG:"Float literal expected"})},"ALT")}],{ERR_MSG:"Number literal expected"})}}r(JF,"numberValue");var c3={allowDuplicates:[],allowQueryExpression:!1,recursive:[],recursiveArray:[],allowVariables:!0,types:{}};function QF(e){return(t,n,o,i={})=>{n=n||[],o=o||[],i={...c3,...i};let a=[],s=[...n,...o],c;e.CONSUME(k),e.OPTION(()=>{e.OR([{ALT:r(()=>{e.AT_LEAST_ONE_SEP({SEP:Oe,DEF:r(()=>{e.OR1([{ALT:r(()=>c=e.CONSUME(T),"ALT")},{ALT:r(()=>c=e.CONSUME(U),"ALT")}]),a.push(c);let _=de(c);if(e.CONSUME(ye),i.recursive.includes(_))e.SUBRULE(e.objectAttrReq,{ARGS:[c,n,o,i]});else if(i.recursiveArray.includes(_))e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[c,n,o,i]});else{let y=i.types[_];if(typeof y=="function")y.call(null,e,c);else if(Array.isArray(y)){let w=e.CONSUME3(U),O=de(w);y.includes(O)||e.addMissingError(w,`Invalid value "${O}". Must be one of: ${y.map(B=>`"${B}"`).join(", ")}`)}else e.OR4([{GATE:r(()=>y==="boolean","GATE"),ALT:r(()=>e.SUBRULE(e.booleanValue),"ALT")},{GATE:r(()=>y==="number","GATE"),ALT:r(()=>e.SUBRULE(e.numberValue),"ALT")},{GATE:r(()=>y==="string","GATE"),ALT:r(()=>e.CONSUME3(U),"ALT")},{GATE:r(()=>y==="object","GATE"),ALT:r(()=>e.SUBRULE1(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!y,"GATE"),ALT:r(()=>e.SUBRULE(e.valueExpression,{ARGS:[i]}),"ALT")}])}},"DEF")})},"ALT")},{ALT:r(()=>{e.CONSUME(p),e.AT_LEAST_ONE(()=>{e.OR2([{ALT:r(()=>c=e.CONSUME2(T),"ALT")},{ALT:r(()=>c=e.CONSUME2(U),"ALT")}]),a.push(c),e.CONSUME1(ye);let _=de(c);if(i.recursive.includes(_))e.SUBRULE(e.objectAttrReq,{ARGS:[c,n,o,i]});else if(i.recursiveArray.includes(_))e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[c,n,o,i]});else{let y=i.types[_];if(typeof y=="function")y.call(null,e,c);else if(Array.isArray(y)){let w=e.CONSUME3(U),O=de(w);y.includes(O)||e.SAVE_ERROR(new ot(`Invalid value "${O}". Must be one of: ${y.map(B=>`"${B}"`).join(", ")}`,w,w))}else e.OR3([{GATE:r(()=>y==="boolean","GATE"),ALT:r(()=>e.SUBRULE1(e.booleanValue),"ALT")},{GATE:r(()=>y==="number","GATE"),ALT:r(()=>e.SUBRULE1(e.numberValue),"ALT")},{GATE:r(()=>y==="string","GATE"),ALT:r(()=>e.OR5([{ALT:r(()=>e.CONSUME1(U),"ALT")},{ALT:r(()=>e.CONSUME(Dt),"ALT")}]),"ALT")},{GATE:r(()=>y==="object","GATE"),ALT:r(()=>e.SUBRULE(e.objectWithAttributes,{ARGS:[i]}),"ALT")},{GATE:r(()=>!y,"GATE"),ALT:r(()=>e.SUBRULE1(e.valueExpression,{ARGS:[i]}),"ALT")}])}e.OPTION1(()=>e.CONSUME(Oe)),e.AT_LEAST_ONE1(()=>e.CONSUME1(p))})},"ALT")}])}),e.CONSUME(A);let l=a.filter((_,y)=>!i.allowDuplicates.includes(de(_))&&a.findIndex(w=>de(w)===de(_))!==y);for(let _ of l)e.addDuplicateAttributeError(_);let d=a.filter(_=>!s.includes(de(_)));for(let _ of d)e.addIllegalAttributeError(_);let f=a.map(de),g=n.filter(_=>!f.includes(_));g.length>0&&e.addMissingAttributeError(t,g)}}r(QF,"objectAttrReq");function XF(e){return(t={})=>{let n=[],o=e.CONSUME(k);e.MANY(()=>e.CONSUME(p)),e.MANY_SEP({SEP:p,DEF:r(()=>{let i=!1,a=!1;e.MANY1(()=>{i&&!a&&e.addMissingError(o,"Expected a separator between attributes"),e.OPTION1({GATE:r(()=>t.allowDisabledKeys===!0,"GATE"),DEF:r(()=>e.CONSUME(br),"DEF")});let s=e.OR1([{ALT:r(()=>e.CONSUME2(T),"ALT")},{ALT:r(()=>e.CONSUME2(U),"ALT")}]),c=de(s);n.includes(c)?e.addDuplicateAttributeError(s):n.push(c),e.CONSUME(ye),e.SUBRULE(e.valueExpression,{ARGS:[t]}),e.OPTION(()=>{e.CONSUME(Oe),a=!0}),i=!0})},"DEF")}),e.MANY3(()=>e.CONSUME3(p)),e.CONSUME(A)}}r(XF,"objectWithAttributes");function ZF(e){return()=>{e.sectionStack.push("optionalCommentBlockFn"),e.MANY(()=>{e.CONSUME(Ir),e.CONSUME(p)}),e.sectionStack.pop()}}r(ZF,"optionalCommentBlockFn");function $F(e){return()=>{e.sectionStack.push("commentBlockFn"),e.AT_LEAST_ONE(()=>{e.CONSUME(Ir),e.CONSUME(p)}),e.sectionStack.pop()}}r($F,"commentBlockFn");function eI(e){return()=>{e.AT_LEAST_ONE(()=>{e.CONSUME(St),e.CONSUME(T),e.MANY1(()=>{e.CONSUME(ye),e.SUBRULE(e.valueExpression)})})}}r(eI,"pipedFilter");function tI(e){return()=>{e.sectionStack.push("requiredValueFnBody");let t=!1;e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>{t=!0,e.SUBRULE(e.valueFieldAttribute)},"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.disabledFieldAttribute),"ALT")}])}),t||e.SUBRULE(e.valueFieldAttribute),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.sectionStack.pop()}}r(tI,"requiredValueFnBody");function rI(e){return()=>{e.CONSUME(Ne),e.SUBRULE(e.chainedIdentifier)}}r(rI,"shortFormVariable");var nI=r(e=>()=>{let t=!0,n=e.CONSUME(it);e.MANY(()=>e.CONSUME(p)),e.MANY1(()=>{t||e.addMissingError(n,"Missing comma or newline between string values in the array"),n=e.CONSUME(U),t=!1,e.OPTION(()=>{e.CONSUME(Oe),t=!0}),e.MANY2(()=>{e.CONSUME1(p),t=!0})}),e.CONSUME(at)},"stringArray");function oI(e){return()=>{e.CONSUME(sg),e.CONSUME(R),e.SUBRULE(e.stringArray)}}r(oI,"tagsAttribute");var l3={allowQueryExpression:!1,allowIdentifier:!0,allowOptionalIfNull:!1,allowVariables:!0,allowDisabledKeys:!1},u3=[Ws,zs,Hs,Ys,Sd,Ks,yd,Js,pc,rc,nc,oc,ac,ic,Qs,Xs,Zs,$s,ec,tc,sc,cc,lc,uc];function iI(e){return(t={},n=null)=>{t={...l3,...t};let o=!1,i=!1,a=!1,s=n===null;n=n||{openParentheses:0},e.MANY(()=>{n.openParentheses+=1,a=!0,e.CONSUME(ce)});let c=t.allowVariables,l=t.allowIdentifier,d=e.OR({DEF:[{ALT:r(()=>(e.CONSUME(U),!0),"ALT")},{ALT:r(()=>(e.CONSUME(to),!0),"ALT")},{ALT:r(()=>(e.CONSUME(ze),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Ct),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Xe),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Ze),!0),"ALT")},{ALT:r(()=>(e.CONSUME(uo),!0),"ALT")},{ALT:r(()=>(e.CONSUME(lo),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Dt),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Qf),!0),"ALT")},{ALT:r(()=>(e.CONSUME(Af),!0),"ALT")},{GATE:r(()=>c,"GATE"),ALT:r(()=>(e.OR8([{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeAuthVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeEnvVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeErrorVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")}]),!0),"ALT")},{ALT:r(()=>(e.SUBRULE(e.castedValue),!0),"ALT")},{ALT:r(()=>(e.SUBRULE(e.objectWithAttributes,{ARGS:[t]}),!0),"ALT")},{ALT:r(()=>(e.SUBRULE(e.arrayWithValues,{ARGS:[t]}),!0),"ALT")},{ALT:r(()=>!1,"ALT")}]});e.OPTION4({GATE:r(()=>!d,"GATE"),DEF:r(()=>{l||e.addInvalidValueError(null,c?"cannot use identifiers in this context":"cannot use variables in this context"),e.CONSUME(T)},"DEF")}),e.OPTION1({GATE:r(()=>e.LA(1).tokenType===St||e.LA(1).tokenType===p&&e.LA(2).tokenType===St,"GATE"),DEF:r(()=>{o=!0,e.SUBRULE(e.filterFn,{ARGS:[t,n]})},"DEF")}),e.OPTION3({GATE:r(()=>n.openParentheses>0,"GATE"),DEF:r(()=>{i=a,n.openParentheses-=1,e.OPTION8(()=>e.CONSUME1(p)),e.CONSUME(ne),e.MANY1(()=>{e.CONSUME(M),e.CONSUME2(T)})},"DEF")});let f=!o||i;e.OPTION({GATE:r(()=>f,"GATE"),DEF:r(()=>{let g=e.OR7([{ALT:r(()=>e.CONSUME(Ws),"ALT")},{ALT:r(()=>e.CONSUME(zs),"ALT")},{ALT:r(()=>e.CONSUME(Hs),"ALT")},{ALT:r(()=>e.CONSUME(Ys),"ALT")},{ALT:r(()=>e.CONSUME(Sd),"ALT")},{ALT:r(()=>e.CONSUME(Ks),"ALT")},{ALT:r(()=>e.CONSUME(yd),"ALT")},{ALT:r(()=>e.CONSUME(Js),"ALT")},{ALT:r(()=>e.CONSUME(gd),"ALT")},{ALT:r(()=>e.CONSUME(hd),"ALT")},{ALT:r(()=>e.CONSUME(Td),"ALT")},{ALT:r(()=>e.CONSUME(Ed),"ALT")},{ALT:r(()=>e.CONSUME(xd),"ALT")},{ALT:r(()=>e.CONSUME(_d),"ALT")},{ALT:r(()=>e.CONSUME(Ty),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Ey),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(pc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(rc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(nc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(oc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(ac),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(ic),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Qs),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Xs),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(Zs),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME($s),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(ec),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(tc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(sc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(cc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(lc),"ALT")},{GATE:r(()=>t.allowQueryExpression,"GATE"),ALT:r(()=>e.CONSUME(uc),"ALT")},{ALT:r(()=>e.CONSUME(bd),"ALT")}]);e.OPTION7({GATE:r(()=>t.allowOptionalIfNull&&u3.includes(g.tokenType),"GATE"),DEF:r(()=>e.CONSUME1(dr),"DEF")}),e.SUBRULE1(e.valueExpression,{ARGS:[t,n]})},"DEF")}),e.OPTION2({GATE:r(()=>f&&!t.allowQueryExpression,"GATE"),DEF:r(()=>{e.CONSUME(dr),e.SUBRULE2(e.valueExpression,{ARGS:[t,n]}),e.CONSUME2(ye),e.SUBRULE3(e.valueExpression,{ARGS:[t,n]})},"DEF")}),e.MANY3({GATE:r(()=>n.openParentheses>0,"GATE"),DEF:r(()=>{n.openParentheses-=1,e.OPTION5(()=>e.CONSUME2(p)),e.CONSUME2(ne)},"DEF")}),e.MANY2({GATE:r(()=>e.LA(1).tokenType===St||e.LA(1).tokenType===p&&e.LA(2).tokenType===St,"GATE"),DEF:r(()=>{e.SUBRULE1(e.filterFn,{ARGS:[t,n]})},"DEF")}),s&&n.openParentheses>0&&e.addMissingError(null,"Unmatched opening parenthesis, missing closing parenthesis")}}r(iI,"valueExpression");function aI(e){return Object.hasOwn(e,"emptyArray")||(e.emptyArray=e.RULE("emptyArray",()=>{e.CONSUME(it),e.CONSUME(at)})),()=>{e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(to),"ALT")},{ALT:r(()=>e.CONSUME(Ct),"ALT")},{ALT:r(()=>e.CONSUME(ze),"ALT")},{ALT:r(()=>e.CONSUME(Xe),"ALT")},{ALT:r(()=>e.CONSUME(Ze),"ALT")},{ALT:r(()=>e.CONSUME(lo),"ALT")},{ALT:r(()=>e.CONSUME(uo),"ALT")},{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeAuthVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeEnvVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.completeInputVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.castedValue),"ALT")},{ALT:r(()=>e.SUBRULE(e.emptyArray),"ALT")}]),e.OPTION(()=>{e.SUBRULE(e.pipedFilter)})}}r(aI,"valueExpressionForResponse");function sI(e){return()=>{e.OR([{ALT:r(()=>e.SUBRULE(e.longFormVariable),"ALT")},{ALT:r(()=>e.SUBRULE(e.shortFormVariable),"ALT")}]),e.OPTION(()=>e.SUBRULE(e.pipedFilter))}}r(sI,"variableOnly");var cI=r(e=>{e.mockAttribute=e.RULE("mockAttribute",KF(e)),e.arrayOfObjectAttrReq=e.RULE("arrayOfObjectAttrReq",LF(e)),e.arrayOfStringLiterals=e.RULE("arrayOfStringLiterals",OF(e)),e.arrayWithValues=e.RULE("arrayWithValues",NF(e)),e.assignableVariableAs=e.RULE("assignableVariableAs",MF(e)),e.assignableVariableProperty=e.RULE("assignableVariableProperty",wF(e)),e.booleanValue=e.RULE("booleanValue",IF(e)),e.castedValue=e.RULE("castedValue",PF(e)),e.chainedIdentifier=e.RULE("chainedIdentifier",DF(e)),e.enumValue=e.RULE("enumValue",VF(e)),e.functionAttrReq=e.RULE("functionAttrReq",zF(e)),e.filterFn=e.RULE("filterFn",WF(e)),e.longFormVariable=e.RULE("longFormVariable",HF(e)),e.minimalFnBody=e.RULE("minimalFnBody",YF(e)),e.numberValue=e.RULE("numberValue",JF(e)),e.objectAttrReq=e.RULE("objectAttrReq",QF(e)),e.objectWithAttributes=e.RULE("objectWithAttributes",XF(e)),e.pipedFilter=e.RULE("pipedFilter",eI(e)),e.requiredValueFnBody=e.RULE("requiredValueFnBody",tI(e)),e.shortFormVariable=e.RULE("shortFormVariable",rI(e)),e.stringArray=e.RULE("stringArray",nI(e)),e.tagsAttribute=e.RULE("tagsAttribute",oI(e)),e.valueExpression=e.RULE("valueExpression",iI(e)),e.valueExpressionForResponse=e.RULE("valueExpressionForResponse",aI(e)),e.variableOnly=e.RULE("variableOnly",sI(e)),e.completeAuthVariable=e.RULE("completeAuthVariable",BF(e)),e.completeInputVariable=e.RULE("completeInputVariable",jF(e)),e.completeErrorVariable=e.RULE("completeErrorVariable",GF(e)),e.completeEnvVariable=e.RULE("completeEnvVariable",qF(e)),e.asVariable=e.RULE("asVariable",FF(e)),e.optionalCommentBlockFn=e.RULE("optionalCommentBlockFn",ZF(e)),e.commentBlockFn=e.RULE("commentBlockFn",$F(e))},"register");function lI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1;e.sectionStack.push("mcpServerDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let d=e.CONSUME(jf);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(qf),e.CONSUME(R),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.canonicalClause)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE1(e.flexibleStringClause,{ARGS:[Gf]})},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0;let f=e.CONSUME(Vf);e.CONSUME2(R),e.SUBRULE(e.arrayOfObjectAttrReq,{ARGS:[f,["name"],["active","auth"],{types:{active:"boolean",auth:"string",name:"string"}}]})},"ALT")}])}),n||e.addMissingError(d,"{} is missing canonical clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(lI,"mcpServerDeclaration");function uI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1;e.sectionStack.push("mcpServerTriggerDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let f=e.CONSUME(Hf);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let g=e.CONSUME(Wf);e.CONSUME(R),e.SUBRULE(e.objectAttrReq,{ARGS:[g,["connection"],[],{types:{connection:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(zf),e.CONSUME2(R),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.mcpServerClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),s||e.addMissingError(f,"{} is missing mcp_server clause"),a||e.addMissingError(f,"{} is missing an input clause"),l||e.addMissingError(f,"{} is missing a stack clause"),c||e.addMissingError(f,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(uI,"mcpServerTriggerDeclaration");function dI(e){return()=>{e.sectionStack.push("columnMetadataDefinition"),e.CONSUME(k),e.AT_LEAST_ONE(()=>{e.CONSUME(p),e.OR([{ALT:r(()=>e.SUBRULE(e.sensitiveFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>{e.CONSUME(oo),e.CONSUME(R),e.CONSUME(U)},"ALT")}])}),e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.CONSUME(A),e.sectionStack.pop()}}r(dI,"columnMetadataDefinition");function pI(e){return t=>{e.sectionStack.push("enumColumnMetadataDefinition"),e.CONSUME(k);let n=!1,o=!1,i=!1;e.MANY(()=>{e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.OR([{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.valuesFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>e.SUBRULE(e.sensitiveFieldAttribute),"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")}])}),n||e.addMissingError(t,"{} is missing the values attribute"),e.AT_LEAST_ONE2(()=>e.CONSUME2(p)),e.CONSUME(A),e.sectionStack.pop()}}r(pI,"enumColumnMetadataDefinition");function fI(e){return()=>{e.sectionStack.push("objectColumnMetadataDefinition"),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.sensitiveFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{ALT:r(()=>e.SUBRULE(e.schemaClause,{ARGS:[{include_file:!1}]}),"ALT")}])}),e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.CONSUME(A),e.sectionStack.pop()}}r(fI,"objectColumnMetadataDefinition");function mI(e){e.columnMetadataDefinition=e.RULE("columnMetadataDefinition",dI(e)),e.enumColumnMetadataDefinition=e.RULE("enumColumnMetadataDefinition",pI(e)),e.objectColumnMetadataDefinition=e.RULE("objectColumnMetadataDefinition",fI(e))}r(mI,"register");function hI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1,f=[];e.sectionStack.push("middlewareDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let g=e.CONSUME(Kf);e.OR([{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME(U),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.CONSUME(Yf),e.CONSUME(R),e.SUBRULE(e.enumValue,{ARGS:["silent","rethrow","critical"]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.CONSUME(Jf),e.CONSUME2(R),e.SUBRULE2(e.enumValue,{ARGS:["merge","replace"]})},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[f]})},"ALT")}])}),a||e.addMissingError(g,"{} is missing an input clause"),l||e.addMissingError(g,"{} is missing a stack clause"),s||e.addMissingError(g,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(hI,"middlewareDeclaration");function gI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1,f=!1,g=[];e.sectionStack.push("queryDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let _=e.CONSUME(tm);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")},{ALT:r(()=>e.CONSUME(Ia),"ALT")},{ALT:r(()=>e.CONSUME(Gt),"ALT")}]),e.CONSUME(ka),e.CONSUME(R),e.OR1([{ALT:r(()=>e.CONSUME(La),"ALT")},{ALT:r(()=>e.CONSUME(Aa),"ALT")},{ALT:r(()=>e.CONSUME(Ua),"ALT")},{ALT:r(()=>e.CONSUME(va),"ALT")},{ALT:r(()=>e.CONSUME(Ca),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(Da),e.CONSUME1(R),e.CONSUME1(U)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.cacheClause)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!f,"GATE"),ALT:r(()=>{f=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[g]})},"ALT")}])}),s||e.addMissingError(_,"{} is missing an input clause"),d||e.addMissingError(_,"{} is missing a stack clause"),l||e.addMissingError(_,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(gI,"queryDeclaration");function TI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1;e.sectionStack.push("realtimeTriggerDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let f=e.CONSUME(pm);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let g=e.CONSUME(um);e.CONSUME(R),e.SUBRULE(e.objectAttrReq,{ARGS:[g,[],["join","message"],{types:{join:"boolean",message:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(dm),e.CONSUME2(R),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.channelClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),o||e.addMissingError(f,"{} is missing channel clause"),s||e.addMissingError(f,"{} is missing an input clause"),l||e.addMissingError(f,"{} is missing a stack clause"),c||e.addMissingError(f,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(TI,"realtimeTriggerDeclaration");function EI(e){return()=>{e.sectionStack.push("tableDeclaration"),e.SUBRULE(e.optionalCommentBlockFn),e.CONSUME(oo),e.OR1([{ALT:r(()=>e.CONSUME(U,{ERR_MSG:"expected table name after table statement"}),"ALT")},{ALT:r(()=>e.CONSUME(T,{ERR_MSG:"expected table name after table statement"}),"ALT")}]);let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c={};e.CONSUME(k),e.sectionStack.push("tableBody"),e.MANY1(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>e.SUBRULE(e.descriptionFieldAttribute),"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>e.SUBRULE(e.tagsAttribute),"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>e.SUBRULE(e.authClause),"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>e.SUBRULE(e.viewClause),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>e.SUBRULE(e.schemaClause,{ARGS:[{isTableSchema:!0},c]}),"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>e.SUBRULE(e.indexClause),"ALT")}])}),e.AT_LEAST_ONE1(()=>e.CONSUME1(p)),e.sectionStack.pop(),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(EI,"tableDeclaration");function SI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1;e.sectionStack.push("tableTriggerDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let f=e.CONSUME(ih);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let g=e.CONSUME(rh);e.CONSUME(R),e.SUBRULE(e.objectAttrReq,{ARGS:[g,[],["delete","insert","truncate","update"],{types:{delete:"boolean",insert:"boolean",truncate:"boolean",update:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(nh),e.CONSUME2(R),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.CONSUME(oh),e.CONSUME3(R),e.SUBRULE(e.arrayOfStringLiterals)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.dbTableClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),i||e.addMissingError(f,"{} is missing table clause"),c||e.addMissingError(f,"{} is missing an input clause"),l||e.addMissingError(f,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(SI,"tableTriggerDeclaration");function yI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1,f=[];e.sectionStack.push("taskDeclaration"),e.SUBRULE(e.optionalCommentBlockFn),e.CONSUME(Ma),e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(Qi),e.CONSUME(R),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME(sh),e.CONSUME2(R),e.CONSUME2(U)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.scheduleClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.tagsAttribute)},"ALT")},{ALT:r(()=>{e.SUBRULE(e.testClause,{ARGS:[f]})},"ALT")}])}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(yI,"taskDeclaration");function _I(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1,l=!1,d=!1;e.sectionStack.push("toolDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let f=e.CONSUME(xa);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.docsFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.flexibleStringClause,{ARGS:[Bf]})},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.middlewareClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.responseClause)},"ALT")},{GATE:r(()=>!l,"GATE"),ALT:r(()=>{l=!0,e.SUBRULE(e.stackClause,{ARGS:[{allowCallStatements:!0}]})},"ALT")},{GATE:r(()=>!d,"GATE"),ALT:r(()=>{d=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),i||e.addMissingError(f,"{} is missing an input clause"),l||e.addMissingError(f,"{} is missing a stack clause"),c||e.addMissingError(f,"{} is missing a response clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(_I,"toolDeclaration");function xI(e){return()=>{let t=!1,n=!1,o=!1,i=!1;e.sectionStack.push("workflowTestDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let a=e.CONSUME(Yh);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0,e.CONSUME(wa),e.CONSUME(R),e.CONSUME2(U)},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.stackClause,{ARGS:[{allowExpectStatements:!0,allowCallStatements:!0}]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),o||e.addMissingError(a,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(xI,"workflowTestDeclaration");function bI(e){return()=>{let t=!1,n=!1,o=!1,i=!1;e.sectionStack.push("workspaceDeclaration"),e.SUBRULE(e.optionalCommentBlockFn),e.CONSUME(Xh),e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let a=e.CONSUME(Kh);e.CONSUME(R),e.SUBRULE(e.objectAttrReq,{ARGS:[a,[],["ai_terms"],{types:{ai_terms:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0;let a=e.CONSUME(Jh);e.CONSUME2(R),e.SUBRULE2(e.objectAttrReq,{ARGS:[a,[],["internal_docs","sql_columns","sql_names","track_performance"],{types:{internal_docs:"boolean",sql_columns:"boolean",sql_names:"boolean",track_performance:"boolean"}}]})},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0;let a=e.CONSUME(Qh);e.CONSUME3(R),e.SUBRULE3(e.objectAttrReq,{ARGS:[a,[],["canonical"],{types:{canonical:"string"}}]})},"ALT")}])}),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(bI,"workspaceDeclaration");function RI(e){return()=>{let t=!1,n=!1,o=!1,i=!1,a=!1,s=!1,c=!1;e.sectionStack.push("workspaceTriggerDeclaration"),e.SUBRULE(e.optionalCommentBlockFn);let l=e.CONSUME(eg);e.OR([{ALT:r(()=>e.CONSUME(U),"ALT")},{ALT:r(()=>e.CONSUME(T),"ALT")}]),e.CONSUME(k),e.MANY(()=>{e.AT_LEAST_ONE(()=>e.CONSUME(p)),e.OR2([{ALT:r(()=>e.SUBRULE(e.commentBlockFn),"ALT")},{GATE:r(()=>!t,"GATE"),ALT:r(()=>{t=!0;let d=e.CONSUME(Zh);e.CONSUME(R),e.SUBRULE(e.objectAttrReq,{ARGS:[d,[],["branch_live","branch_merge","branch_new"],{types:{branch_live:"boolean",branch_merge:"boolean",branch_new:"boolean"}}]})},"ALT")},{GATE:r(()=>!n,"GATE"),ALT:r(()=>{n=!0,e.CONSUME($h),e.CONSUME2(R),e.SUBRULE(e.booleanValue)},"ALT")},{GATE:r(()=>!o,"GATE"),ALT:r(()=>{o=!0,e.SUBRULE(e.descriptionFieldAttribute)},"ALT")},{GATE:r(()=>!i,"GATE"),ALT:r(()=>{i=!0,e.SUBRULE(e.historyClause)},"ALT")},{GATE:r(()=>!a,"GATE"),ALT:r(()=>{a=!0,e.SUBRULE(e.inputClause)},"ALT")},{GATE:r(()=>!s,"GATE"),ALT:r(()=>{s=!0,e.SUBRULE(e.stackClause)},"ALT")},{GATE:r(()=>!c,"GATE"),ALT:r(()=>{c=!0,e.SUBRULE(e.tagsAttribute)},"ALT")}])}),a||e.addMissingError(l,"{} is missing an input clause"),s||e.addMissingError(l,"{} is missing a stack clause"),e.MANY1(()=>e.CONSUME1(p)),e.CONSUME(A),e.MANY2(()=>e.CONSUME2(p)),e.sectionStack.pop()}}r(RI,"workspaceTriggerDeclaration");var kI=r(e=>{cI(e),KO(e),SO(e),CF(e),mI(e),GO(e),e.addonDeclaration=e.RULE("addonDeclaration",sO(e)),e.agentDeclaration=e.RULE("agentDeclaration",cO(e)),e.agentTriggerDeclaration=e.RULE("agentTriggerDeclaration",lO(e)),e.queryDeclaration=e.RULE("queryDeclaration",gI(e)),e.apiGroupDeclaration=e.RULE("apiGroupDeclaration",uO(e)),e.branchDeclaration=e.RULE("branchDeclaration",yO(e)),e.tableDeclaration=e.RULE("tableDeclaration",EI(e)),e.mcpServerDeclaration=e.RULE("mcpServerDeclaration",lI(e)),e.mcpServerTriggerDeclaration=e.RULE("mcpServerTriggerDeclaration",uI(e)),e.middlewareDeclaration=e.RULE("middlewareDeclaration",hI(e)),e.realtimeTriggerDeclaration=e.RULE("realtimeTriggerDeclaration",TI(e)),e.tableTriggerDeclaration=e.RULE("tableTriggerDeclaration",SI(e)),e.taskDeclaration=e.RULE("taskDeclaration",yI(e)),e.toolDeclaration=e.RULE("toolDeclaration",_I(e)),e.workflowTestDeclaration=e.RULE("workflowTestDeclaration",xI(e)),e.workspaceDeclaration=e.RULE("workspaceDeclaration",bI(e)),e.workspaceTriggerDeclaration=e.RULE("workspaceTriggerDeclaration",RI(e)),e.functionDeclaration=e.RULE("functionDeclaration",JO(e))},"register");var d3={buildMismatchTokenMessage:Sn.buildMismatchTokenMessage,buildEarlyExitMessage:Sn.buildEarlyExitMessage,buildNotAllInputParsedMessage:Sn.buildNotAllInputParsedMessage,buildNoViableAltMessage:Sn.buildNoViableAltMessage},Ug=class extends Gs{static{r(this,"XanoBaseParser")}constructor(t){super(t,{errorMessageProvider:d3,recoveryEnabled:!1}),kI(this),this.sectionStack=[],this.reset()}functionAttrReq(){}ADD_ERROR(t,n){this.errors.push({message:t,token:n,line:n?n.startLine:-1,column:n?n.startColumn:-1,ruleName:"error"})}CONSUME_ANY(){if(this.inputIdx<this.input.length){let t=this.input[this.inputIdx];if(t&&typeof t.tokenTypeIdx<"u")return this.inputIdx++,t;this.errors.push({message:"Encountered an invalid token during recovery",token:t,line:t?t.startLine:-1,column:t?t.startColumn:-1,ruleName:"error"})}return null}addVariable(t,n,o=null){this.__symbolTable.var[t]={type:n,value:o}}addInput(t,n,o=!1,i=!1,a=!1){this.__symbolTable.input[t]={type:n,iterable:o,nullable:i,optional:a}}addMissingError(t,n){if(!t){this.SAVE_ERROR(new ot(n.replaceAll("{}",""),t));return}this.SAVE_ERROR(new ot(n.replaceAll("{}",t.image),t))}addMissingAttributeError(t,n){n=[].concat(n);let o=n.join(", "),i=n.length===1?`${t.image} is missing the ${o} attribute`:`${t.image} is missing the following attributes: ${o}`;this.SAVE_ERROR(new ot(i,t))}addIllegalAttributeError(t,n){n||(n=`Attribute \`${t.image}\` is not allowed`),this.SAVE_ERROR(new ot(n,t))}addExpectedValueTypeError(t,n){this.SAVE_ERROR(new ot(`Expected value of \`${t.image}\` to be of type \`${n}\``,t))}addExpectedValueError(t,n){q(n)&&n.length>1?this.SAVE_ERROR(new ot(`Expected value of \`${t.image}\` to be one of ${n.map(o=>`\`${o}\``).join(", ")}`,t)):this.SAVE_ERROR(new ot(`Expected value of \`${t.image}\` to be \`${n}\``,t))}addDuplicateAttributeError(t){this.SAVE_ERROR(new ot(`Duplicate attribute \`${t.image}\``,t))}addDuplicateNameError(t,n){n?this.SAVE_ERROR(new ot(`Duplicate ${n} name '${t.image}'`,t)):this.SAVE_ERROR(new ot(`Duplicate name '${t.image}'`,t))}addInvalidValueError(t,n){this.SAVE_ERROR(new ot(n,t))}requireRules(...t){for(let n of t){if(typeof n!="function")throw new Error(`requireRules only accepts functions, ${typeof n} given`);Object.hasOwn(this,n.name)||(this[n.name]=this.RULE(n.name,n(this)))}}reset(){super.reset(),this.sectionStack=[],this.__symbolTable={input:{},var:{},auth:{},env:{}}}};function vg(e,t){t||(t=Hr(e));let n=po(e);switch($.input=n.tokens,t.toLowerCase()){case"addon":return $.addonDeclaration(),$;case"agent":return $.agentDeclaration(),$;case"agent_trigger":return $.agentTriggerDeclaration(),$;case"api":return $.queryDeclaration(),$;case"api_group":return $.apiGroupDeclaration(),$;case"branch":return $.branchDeclaration(),$;case"db":return $.tableDeclaration(),$;case"mcp_server":return $.mcpServerDeclaration(),$;case"mcp_server_trigger":return $.mcpServerTriggerDeclaration(),$;case"middleware":return $.middlewareDeclaration(),$;case"realtime_trigger":return $.realtimeTriggerDeclaration(),$;case"table_trigger":return $.tableTriggerDeclaration(),$;case"task":return $.taskDeclaration(),$;case"tool":return $.toolDeclaration(),$;case"workflow_test":return $.workflowTestDeclaration(),$;case"workspace":return $.workspaceDeclaration(),$;case"workspace_trigger":return $.workspaceTriggerDeclaration(),$;case"cfn":default:return $.functionDeclaration(),$}}r(vg,"xanoscriptParser");var vy=class extends Ug{static{r(this,"XanoScriptParser")}constructor(){super(fc),this.performSelfAnalysis()}},$=new vy;var p3=`
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
`,f3=new Ga(p3);function m3(e){return!!e.nextTokenType.LABEL}r(m3,"suggestable");function h3(e){return e.length===0?!1:e[e.length-1].tokenType===St}r(h3,"isAfterPipeToken");function g3(){return Ag.map(e=>{let t=f3.__filterDoc[e];return{label:e,kind:mc("function"),documentation:t?{kind:"markdown",value:t}:void 0}})}r(g3,"createFilterSuggestions");function AI(e,t){try{let o=po(e).tokens;if(h3(o))return g3();let i;if($.reset(),t==="db")i=$.computeContentAssist("tableDeclaration",o);else if(t==="api")i=$.computeContentAssist("queryDeclaration",o);else if(t==="function")i=$.computeContentAssist("functionDeclaration",o);else if(t==="task")i=$.computeContentAssist("taskDeclaration",o);else return[];return i.filter(m3).map(s=>{let c=kg(s.nextTokenType.name);return{label:s.nextTokenType.LABEL,kind:mc(c)}})}catch(n){return console.error(n),[]}}r(AI,"getContentAssistSuggestions");function UI(e,t){let n=t.get(e.textDocument.uri);if(!n)return console.error("onCompletion(): Document not found for URI:",e.textDocument.uri),null;let o=e.position,i=n.getText(),a=n.offsetAt(o);if(Gl(a,i))return null;let c=Hr(i);return AI(i.slice(0,a),c)}r(UI,"onCompletion");function vI(e,t){let n=e.document;if(!n)return console.error("onDidChangeContent(): Document not found for URI:",e.textDocument.uri),null;let o=n.getText(),i=Hr(o);try{let a=vg(o,i);a.errors.length>0&&t.sendDiagnostics({uri:n.uri,diagnostics:[]});for(let c of a.errors)console.error(`onDidChangeContent(): Error parsing document: ${c.name}`);let s=a.errors.map(c=>({severity:1,range:c.token?{start:n.positionAt(c.token.startOffset),end:n.positionAt(c.token.endOffset+1)}:{start:{line:0,character:0},end:{line:0,character:1}},message:c.message}));console.log(`onDidChangeContent(): sending diagnostic (${a.errors.length} errors) for scheme:`,i),t.sendDiagnostics({uri:n.uri,diagnostics:s})}catch(a){let s=[{severity:1,range:{start:{line:0,character:0},end:{line:0,character:1}},message:a.message||"Syntax error in XanoScript code"}];t.sendDiagnostics({uri:n.uri,diagnostics:s})}}r(vI,"onDidChangeContent");var CI=`# deg2rad

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
`;var Cg=class extends kr{static{r(this,"FunctionMessageProvider")}constructor(t){super(),this.parseFunctions(t),this.buildSearchTree()}buildSearchTree(){this.__searchTree={};for(let t in this.__functionDoc){let n=t.split("."),o=this.__searchTree;for(let i=n.length-1;i>=0;i--){let a=n[i];o[a]||(o[a]={}),o=o[a]}o.__value=t}}parseFunctions(t){this.__functionDoc={};let n=[],o="";for(let i of t.split(`
`))i.startsWith("#")?(o&&(this.__functionDoc[o]=n.join(`
`)),o=i.slice(2).trim(),n=[]):n.push(i);o&&n.length&&(this.__functionDoc[o]=n.join(`
`).trim())}findFunction(t,n,o=null){o||(o=this.__searchTree);let i=n[t],a=o[i.image];if(a){let s=n[t-1];if(s&&s.image===".")return this.findFunction(t-2,n,a);if(a.__value)return a.__value}return null}isMatch(t,n,o){let i=n[t+1];return i&&i.image==="."?!1:!!this.findFunction(t,n)}render(t,n){let o=this.findFunction(t,n);if(o)return this.__functionDoc[o]}};var LI=`# stack

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
`;var Lg=class extends kr{static{r(this,"InputFilterMessageProvider")}constructor(t){super(),this.parseFilters(t)}parseFilters(t){this.__filterDoc={};let n=[],o="";for(let i of t.split(`
`))i.startsWith("#")?(o&&(this.__filterDoc[o]=n.join(`
`).trim()),o=i.slice(2).trim(),n=[]):n.push(i);o&&n.length&&(this.__filterDoc[o]=n.join(`
`).trim())}findFilter(t,n){let o=n[t];if(!(o.tokenType.name==="Identifier"||o.tokenType.LONGER_ALT&&o.tokenType.LONGER_ALT.name==="Identifier"||o.tokenType.CATEGORIES&&o.tokenType.CATEGORIES.some(s=>s.name==="Identifier")))return null;let a=o.image;return this.__filterDoc[a]?a:null}isMatch(t,n,o){if(t===0)return!1;let i=n[t-1],a=i.image==="=",s=i.image==="|";if(!a&&!s)return!1;if(a){for(let c=t-2;c>=0;c--){let l=n[c];if(l.image==="filters")return!!this.findFilter(t,n);if(l.image==="{"||l.image==="}"||l.image===`
`)break}return!1}if(s){for(let c=t-2;c>=0;c--){let l=n[c];if(l.image==="="&&c>0&&n[c-1].image==="filters")return!!this.findFilter(t,n);if(l.image==="{"||l.image==="}"||l.image===`
`)break}return!1}return!1}render(t,n){let o=this.findFilter(t,n);if(o)return this.__filterDoc[o]}};var OI=`# min

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
`;var Og=class extends kr{static{r(this,"InputVariableMessageProvider")}constructor(){super()}isMatch(t,n,o){let i=n[t];return t>2&&n[t-2].image==="$input"&&n[t-1].image==="."&&i.tokenType.name==="Identifier"}renderUndefined(t){return["**Error**: This input is not defined.","Add a definition for it in your `input` clause.","```xs","input {","  text? "+t,"}","```"].join(`
`)}render(t,n,o){let i=n[t].image,a=o.__symbolTable.input[i];if(a){let s=a.iterable?`[${a.type},...]`:`${a.type}`,c=[`input **${i}** of type \`${s}\` `];return a.nullable&&c.push(`- ${i} is _nullable_ (\`${a.type}?\`)`),a.optional&&c.push(`- ${i} is _optional_ (\`${i}?\`)`),c.join(`

`)}else return this.renderUndefined(i)}};function NI(e,t,n=[]){let o=t.get(e.textDocument.uri);if(!o)return console.error("onHover(): Document not found for URI:",e.textDocument.uri),null;let i=o.getText(),a=o.offsetAt(e.position),s=po(i);if(s.errors.length>0)return null;let c=Hr(i),l=vg(i,c),d=s.tokens,f=d.findIndex(_=>_.startOffset<=a&&_.endOffset>=a);if(f===-1)return null;let g=n.find(_=>_.isMatch(f,d,l));return g?{contents:{kind:"markdown",value:g.render(f,d,l)},range:{start:o.positionAt(d[f].startOffset),end:o.positionAt(d[f].endOffset+1)}}:null}r(NI,"onHoverDocument");var Ng=class extends kr{static{r(this,"QueryFilterMessageProvider")}constructor(t){super(),this.parseFilters(t)}parseFilters(t){this.__filterDoc={};let n=[],o="";for(let i of t.split(`
`))i.startsWith("#")?(o&&(this.__filterDoc[o]=n.join(`
`).trim()),o=i.slice(2).trim(),n=[]):n.push(i);o&&n.length&&(this.__filterDoc[o]=n.join(`
`).trim())}findFilter(t,n){let o=n[t];if(!(o.tokenType.name==="Identifier"||o.tokenType.LONGER_ALT&&o.tokenType.LONGER_ALT.name==="Identifier"||o.tokenType.CATEGORIES&&o.tokenType.CATEGORIES.some(s=>s.name==="Identifier")))return null;let a=o.image;return this.__filterDoc[a]?a:null}isMatch(t,n,o){if(t===0||!(n[t-1].image==="|"))return!1;for(let s=t-2;s>=0;s--){let c=n[s];if(c.image==="where"&&s+1<n.length&&n[s+1].image==="=")return!!this.findFilter(t,n);if(c.image==="{"||c.image==="}"||c.image===`
`||c.image==="query")break}return!1}render(t,n){let o=this.findFilter(t,n);if(o)return this.__filterDoc[o]}};var MI=`# covers

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
`;var _3=[new Og,new Cg(LI),new Lg(OI),new Ga(CI),new Ng(MI)];function wI(e,t){let n=t.get(e.textDocument.uri);if(!n)return null;let o=n.getText(),i=n.offsetAt(e.position);return Gl(i,o)?null:NI(e,t,_3)}r(wI,"onHover");function FI(e,t,n){return x3(t,n)}r(FI,"higlightText");function x3(e,t){let n=new t;return po(e,!0).tokens.forEach(i=>{let a=kg(i.tokenType.name);if(a){let s=i.startLine-1,c=i.startColumn-1;n.push(s,c,i.image.length,mc(a),0)}else a===void 0&&console.log(`token type not mapped to a type: ${JSON.stringify(i.tokenType.name)}`)}),n.build()}r(x3,"higlightDefault");function II(e,t,n){let o=t.get(e.textDocument.uri);if(!o)return console.error("onSemanticCheck(): Document not found for URI:",e.textDocument.uri),null;let i=o.getText(),a=Hr(i);return FI(a,i,n)}r(II,"onSemanticCheck");var b3=new an.BrowserMessageReader(self),R3=new an.BrowserMessageWriter(self),mo=(0,an.createConnection)(b3,R3),hc=new an.TextDocuments(ql);mo.onInitialize(()=>({capabilities:{completionProvider:{resolveProvider:!1,triggerCharacters:[".",":","$","|"]},textDocumentSync:1,semanticTokensProvider:{legend:{tokenTypes:yy,tokenModifiers:[]},full:!0},hoverProvider:!0}}));mo.onHover(e=>wI(e,hc));mo.onCompletion(e=>UI(e,hc));mo.onRequest("textDocument/semanticTokens/full",e=>II(e,hc,an.SemanticTokensBuilder));hc.onDidChangeContent(e=>vI(e,mo));mo.onInitialized(()=>console.log("lang server init"));hc.listen(mo);mo.listen();
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
