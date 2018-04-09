// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args33230 = [];
var len__25923__auto___33236 = arguments.length;
var i__25924__auto___33237 = (0);
while(true){
if((i__25924__auto___33237 < len__25923__auto___33236)){
args33230.push((arguments[i__25924__auto___33237]));

var G__33238 = (i__25924__auto___33237 + (1));
i__25924__auto___33237 = G__33238;
continue;
} else {
}
break;
}

var G__33232 = args33230.length;
switch (G__33232) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33230.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33233 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33233 = (function (f,blockable,meta33234){
this.f = f;
this.blockable = blockable;
this.meta33234 = meta33234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33235,meta33234__$1){
var self__ = this;
var _33235__$1 = this;
return (new cljs.core.async.t_cljs$core$async33233(self__.f,self__.blockable,meta33234__$1));
});

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33235){
var self__ = this;
var _33235__$1 = this;
return self__.meta33234;
});

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33233.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33234","meta33234",-357975748,null)], null);
});

cljs.core.async.t_cljs$core$async33233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33233";

cljs.core.async.t_cljs$core$async33233.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async33233");
});

cljs.core.async.__GT_t_cljs$core$async33233 = (function cljs$core$async$__GT_t_cljs$core$async33233(f__$1,blockable__$1,meta33234){
return (new cljs.core.async.t_cljs$core$async33233(f__$1,blockable__$1,meta33234));
});

}

return (new cljs.core.async.t_cljs$core$async33233(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args33242 = [];
var len__25923__auto___33245 = arguments.length;
var i__25924__auto___33246 = (0);
while(true){
if((i__25924__auto___33246 < len__25923__auto___33245)){
args33242.push((arguments[i__25924__auto___33246]));

var G__33247 = (i__25924__auto___33246 + (1));
i__25924__auto___33246 = G__33247;
continue;
} else {
}
break;
}

var G__33244 = args33242.length;
switch (G__33244) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33242.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args33249 = [];
var len__25923__auto___33252 = arguments.length;
var i__25924__auto___33253 = (0);
while(true){
if((i__25924__auto___33253 < len__25923__auto___33252)){
args33249.push((arguments[i__25924__auto___33253]));

var G__33254 = (i__25924__auto___33253 + (1));
i__25924__auto___33253 = G__33254;
continue;
} else {
}
break;
}

var G__33251 = args33249.length;
switch (G__33251) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33249.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args33256 = [];
var len__25923__auto___33259 = arguments.length;
var i__25924__auto___33260 = (0);
while(true){
if((i__25924__auto___33260 < len__25923__auto___33259)){
args33256.push((arguments[i__25924__auto___33260]));

var G__33261 = (i__25924__auto___33260 + (1));
i__25924__auto___33260 = G__33261;
continue;
} else {
}
break;
}

var G__33258 = args33256.length;
switch (G__33258) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33256.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33263 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33263);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33263,ret){
return (function (){
return fn1.call(null,val_33263);
});})(val_33263,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args33264 = [];
var len__25923__auto___33267 = arguments.length;
var i__25924__auto___33268 = (0);
while(true){
if((i__25924__auto___33268 < len__25923__auto___33267)){
args33264.push((arguments[i__25924__auto___33268]));

var G__33269 = (i__25924__auto___33268 + (1));
i__25924__auto___33268 = G__33269;
continue;
} else {
}
break;
}

var G__33266 = args33264.length;
switch (G__33266) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33264.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25763__auto___33271 = n;
var x_33272 = (0);
while(true){
if((x_33272 < n__25763__auto___33271)){
(a[x_33272] = (0));

var G__33273 = (x_33272 + (1));
x_33272 = G__33273;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33274 = (i + (1));
i = G__33274;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33278 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33278 = (function (alt_flag,flag,meta33279){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta33279 = meta33279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33280,meta33279__$1){
var self__ = this;
var _33280__$1 = this;
return (new cljs.core.async.t_cljs$core$async33278(self__.alt_flag,self__.flag,meta33279__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33280){
var self__ = this;
var _33280__$1 = this;
return self__.meta33279;
});})(flag))
;

cljs.core.async.t_cljs$core$async33278.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33278.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33278.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33278.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33278.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33279","meta33279",-554732160,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33278";

cljs.core.async.t_cljs$core$async33278.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async33278");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33278 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33278(alt_flag__$1,flag__$1,meta33279){
return (new cljs.core.async.t_cljs$core$async33278(alt_flag__$1,flag__$1,meta33279));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33278(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33284 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33284 = (function (alt_handler,flag,cb,meta33285){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta33285 = meta33285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33286,meta33285__$1){
var self__ = this;
var _33286__$1 = this;
return (new cljs.core.async.t_cljs$core$async33284(self__.alt_handler,self__.flag,self__.cb,meta33285__$1));
});

cljs.core.async.t_cljs$core$async33284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33286){
var self__ = this;
var _33286__$1 = this;
return self__.meta33285;
});

cljs.core.async.t_cljs$core$async33284.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33284.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33284.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33284.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33285","meta33285",-1040744685,null)], null);
});

cljs.core.async.t_cljs$core$async33284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33284";

cljs.core.async.t_cljs$core$async33284.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async33284");
});

cljs.core.async.__GT_t_cljs$core$async33284 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33284(alt_handler__$1,flag__$1,cb__$1,meta33285){
return (new cljs.core.async.t_cljs$core$async33284(alt_handler__$1,flag__$1,cb__$1,meta33285));
});

}

return (new cljs.core.async.t_cljs$core$async33284(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33287_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33287_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33288_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33288_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24848__auto__ = wport;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33289 = (i + (1));
i = G__33289;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24848__auto__ = ret;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24836__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24836__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24836__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___33295 = arguments.length;
var i__25924__auto___33296 = (0);
while(true){
if((i__25924__auto___33296 < len__25923__auto___33295)){
args__25930__auto__.push((arguments[i__25924__auto___33296]));

var G__33297 = (i__25924__auto___33296 + (1));
i__25924__auto___33296 = G__33297;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33292){
var map__33293 = p__33292;
var map__33293__$1 = ((((!((map__33293 == null)))?((((map__33293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33293):map__33293);
var opts = map__33293__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33290){
var G__33291 = cljs.core.first.call(null,seq33290);
var seq33290__$1 = cljs.core.next.call(null,seq33290);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33291,seq33290__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args33298 = [];
var len__25923__auto___33348 = arguments.length;
var i__25924__auto___33349 = (0);
while(true){
if((i__25924__auto___33349 < len__25923__auto___33348)){
args33298.push((arguments[i__25924__auto___33349]));

var G__33350 = (i__25924__auto___33349 + (1));
i__25924__auto___33349 = G__33350;
continue;
} else {
}
break;
}

var G__33300 = args33298.length;
switch (G__33300) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33298.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33185__auto___33352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___33352){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___33352){
return (function (state_33324){
var state_val_33325 = (state_33324[(1)]);
if((state_val_33325 === (7))){
var inst_33320 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
var statearr_33326_33353 = state_33324__$1;
(statearr_33326_33353[(2)] = inst_33320);

(statearr_33326_33353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (1))){
var state_33324__$1 = state_33324;
var statearr_33327_33354 = state_33324__$1;
(statearr_33327_33354[(2)] = null);

(statearr_33327_33354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (4))){
var inst_33303 = (state_33324[(7)]);
var inst_33303__$1 = (state_33324[(2)]);
var inst_33304 = (inst_33303__$1 == null);
var state_33324__$1 = (function (){var statearr_33328 = state_33324;
(statearr_33328[(7)] = inst_33303__$1);

return statearr_33328;
})();
if(cljs.core.truth_(inst_33304)){
var statearr_33329_33355 = state_33324__$1;
(statearr_33329_33355[(1)] = (5));

} else {
var statearr_33330_33356 = state_33324__$1;
(statearr_33330_33356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (13))){
var state_33324__$1 = state_33324;
var statearr_33331_33357 = state_33324__$1;
(statearr_33331_33357[(2)] = null);

(statearr_33331_33357[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (6))){
var inst_33303 = (state_33324[(7)]);
var state_33324__$1 = state_33324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33324__$1,(11),to,inst_33303);
} else {
if((state_val_33325 === (3))){
var inst_33322 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33324__$1,inst_33322);
} else {
if((state_val_33325 === (12))){
var state_33324__$1 = state_33324;
var statearr_33332_33358 = state_33324__$1;
(statearr_33332_33358[(2)] = null);

(statearr_33332_33358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (2))){
var state_33324__$1 = state_33324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33324__$1,(4),from);
} else {
if((state_val_33325 === (11))){
var inst_33313 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
if(cljs.core.truth_(inst_33313)){
var statearr_33333_33359 = state_33324__$1;
(statearr_33333_33359[(1)] = (12));

} else {
var statearr_33334_33360 = state_33324__$1;
(statearr_33334_33360[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (9))){
var state_33324__$1 = state_33324;
var statearr_33335_33361 = state_33324__$1;
(statearr_33335_33361[(2)] = null);

(statearr_33335_33361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (5))){
var state_33324__$1 = state_33324;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33336_33362 = state_33324__$1;
(statearr_33336_33362[(1)] = (8));

} else {
var statearr_33337_33363 = state_33324__$1;
(statearr_33337_33363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (14))){
var inst_33318 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
var statearr_33338_33364 = state_33324__$1;
(statearr_33338_33364[(2)] = inst_33318);

(statearr_33338_33364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (10))){
var inst_33310 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
var statearr_33339_33365 = state_33324__$1;
(statearr_33339_33365[(2)] = inst_33310);

(statearr_33339_33365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (8))){
var inst_33307 = cljs.core.async.close_BANG_.call(null,to);
var state_33324__$1 = state_33324;
var statearr_33340_33366 = state_33324__$1;
(statearr_33340_33366[(2)] = inst_33307);

(statearr_33340_33366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto___33352))
;
return ((function (switch__33073__auto__,c__33185__auto___33352){
return (function() {
var cljs$core$async$state_machine__33074__auto__ = null;
var cljs$core$async$state_machine__33074__auto____0 = (function (){
var statearr_33344 = [null,null,null,null,null,null,null,null];
(statearr_33344[(0)] = cljs$core$async$state_machine__33074__auto__);

(statearr_33344[(1)] = (1));

return statearr_33344;
});
var cljs$core$async$state_machine__33074__auto____1 = (function (state_33324){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_33324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e33345){if((e33345 instanceof Object)){
var ex__33077__auto__ = e33345;
var statearr_33346_33367 = state_33324;
(statearr_33346_33367[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33368 = state_33324;
state_33324 = G__33368;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$state_machine__33074__auto__ = function(state_33324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33074__auto____1.call(this,state_33324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33074__auto____0;
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33074__auto____1;
return cljs$core$async$state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___33352))
})();
var state__33187__auto__ = (function (){var statearr_33347 = f__33186__auto__.call(null);
(statearr_33347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___33352);

return statearr_33347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___33352))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33556){
var vec__33557 = p__33556;
var v = cljs.core.nth.call(null,vec__33557,(0),null);
var p = cljs.core.nth.call(null,vec__33557,(1),null);
var job = vec__33557;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33185__auto___33743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___33743,res,vec__33557,v,p,job,jobs,results){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___33743,res,vec__33557,v,p,job,jobs,results){
return (function (state_33564){
var state_val_33565 = (state_33564[(1)]);
if((state_val_33565 === (1))){
var state_33564__$1 = state_33564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33564__$1,(2),res,v);
} else {
if((state_val_33565 === (2))){
var inst_33561 = (state_33564[(2)]);
var inst_33562 = cljs.core.async.close_BANG_.call(null,res);
var state_33564__$1 = (function (){var statearr_33566 = state_33564;
(statearr_33566[(7)] = inst_33561);

return statearr_33566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33564__$1,inst_33562);
} else {
return null;
}
}
});})(c__33185__auto___33743,res,vec__33557,v,p,job,jobs,results))
;
return ((function (switch__33073__auto__,c__33185__auto___33743,res,vec__33557,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____0 = (function (){
var statearr_33570 = [null,null,null,null,null,null,null,null];
(statearr_33570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__);

(statearr_33570[(1)] = (1));

return statearr_33570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____1 = (function (state_33564){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_33564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e33571){if((e33571 instanceof Object)){
var ex__33077__auto__ = e33571;
var statearr_33572_33744 = state_33564;
(statearr_33572_33744[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33745 = state_33564;
state_33564 = G__33745;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__ = function(state_33564){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____1.call(this,state_33564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___33743,res,vec__33557,v,p,job,jobs,results))
})();
var state__33187__auto__ = (function (){var statearr_33573 = f__33186__auto__.call(null);
(statearr_33573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___33743);

return statearr_33573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___33743,res,vec__33557,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33574){
var vec__33575 = p__33574;
var v = cljs.core.nth.call(null,vec__33575,(0),null);
var p = cljs.core.nth.call(null,vec__33575,(1),null);
var job = vec__33575;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25763__auto___33746 = n;
var __33747 = (0);
while(true){
if((__33747 < n__25763__auto___33746)){
var G__33578_33748 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33578_33748) {
case "compute":
var c__33185__auto___33750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33747,c__33185__auto___33750,G__33578_33748,n__25763__auto___33746,jobs,results,process,async){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (__33747,c__33185__auto___33750,G__33578_33748,n__25763__auto___33746,jobs,results,process,async){
return (function (state_33591){
var state_val_33592 = (state_33591[(1)]);
if((state_val_33592 === (1))){
var state_33591__$1 = state_33591;
var statearr_33593_33751 = state_33591__$1;
(statearr_33593_33751[(2)] = null);

(statearr_33593_33751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (2))){
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33591__$1,(4),jobs);
} else {
if((state_val_33592 === (3))){
var inst_33589 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33591__$1,inst_33589);
} else {
if((state_val_33592 === (4))){
var inst_33581 = (state_33591[(2)]);
var inst_33582 = process.call(null,inst_33581);
var state_33591__$1 = state_33591;
if(cljs.core.truth_(inst_33582)){
var statearr_33594_33752 = state_33591__$1;
(statearr_33594_33752[(1)] = (5));

} else {
var statearr_33595_33753 = state_33591__$1;
(statearr_33595_33753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (5))){
var state_33591__$1 = state_33591;
var statearr_33596_33754 = state_33591__$1;
(statearr_33596_33754[(2)] = null);

(statearr_33596_33754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (6))){
var state_33591__$1 = state_33591;
var statearr_33597_33755 = state_33591__$1;
(statearr_33597_33755[(2)] = null);

(statearr_33597_33755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (7))){
var inst_33587 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
var statearr_33598_33756 = state_33591__$1;
(statearr_33598_33756[(2)] = inst_33587);

(statearr_33598_33756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33747,c__33185__auto___33750,G__33578_33748,n__25763__auto___33746,jobs,results,process,async))
;
return ((function (__33747,switch__33073__auto__,c__33185__auto___33750,G__33578_33748,n__25763__auto___33746,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____0 = (function (){
var statearr_33602 = [null,null,null,null,null,null,null];
(statearr_33602[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__);

(statearr_33602[(1)] = (1));

return statearr_33602;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____1 = (function (state_33591){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_33591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e33603){if((e33603 instanceof Object)){
var ex__33077__auto__ = e33603;
var statearr_33604_33757 = state_33591;
(statearr_33604_33757[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33758 = state_33591;
state_33591 = G__33758;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__ = function(state_33591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____1.call(this,state_33591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__;
})()
;})(__33747,switch__33073__auto__,c__33185__auto___33750,G__33578_33748,n__25763__auto___33746,jobs,results,process,async))
})();
var state__33187__auto__ = (function (){var statearr_33605 = f__33186__auto__.call(null);
(statearr_33605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___33750);

return statearr_33605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(__33747,c__33185__auto___33750,G__33578_33748,n__25763__auto___33746,jobs,results,process,async))
);


break;
case "async":
var c__33185__auto___33759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33747,c__33185__auto___33759,G__33578_33748,n__25763__auto___33746,jobs,results,process,async){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (__33747,c__33185__auto___33759,G__33578_33748,n__25763__auto___33746,jobs,results,process,async){
return (function (state_33618){
var state_val_33619 = (state_33618[(1)]);
if((state_val_33619 === (1))){
var state_33618__$1 = state_33618;
var statearr_33620_33760 = state_33618__$1;
(statearr_33620_33760[(2)] = null);

(statearr_33620_33760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (2))){
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33618__$1,(4),jobs);
} else {
if((state_val_33619 === (3))){
var inst_33616 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33618__$1,inst_33616);
} else {
if((state_val_33619 === (4))){
var inst_33608 = (state_33618[(2)]);
var inst_33609 = async.call(null,inst_33608);
var state_33618__$1 = state_33618;
if(cljs.core.truth_(inst_33609)){
var statearr_33621_33761 = state_33618__$1;
(statearr_33621_33761[(1)] = (5));

} else {
var statearr_33622_33762 = state_33618__$1;
(statearr_33622_33762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (5))){
var state_33618__$1 = state_33618;
var statearr_33623_33763 = state_33618__$1;
(statearr_33623_33763[(2)] = null);

(statearr_33623_33763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (6))){
var state_33618__$1 = state_33618;
var statearr_33624_33764 = state_33618__$1;
(statearr_33624_33764[(2)] = null);

(statearr_33624_33764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (7))){
var inst_33614 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
var statearr_33625_33765 = state_33618__$1;
(statearr_33625_33765[(2)] = inst_33614);

(statearr_33625_33765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33747,c__33185__auto___33759,G__33578_33748,n__25763__auto___33746,jobs,results,process,async))
;
return ((function (__33747,switch__33073__auto__,c__33185__auto___33759,G__33578_33748,n__25763__auto___33746,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____0 = (function (){
var statearr_33629 = [null,null,null,null,null,null,null];
(statearr_33629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__);

(statearr_33629[(1)] = (1));

return statearr_33629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____1 = (function (state_33618){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_33618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e33630){if((e33630 instanceof Object)){
var ex__33077__auto__ = e33630;
var statearr_33631_33766 = state_33618;
(statearr_33631_33766[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33767 = state_33618;
state_33618 = G__33767;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__ = function(state_33618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____1.call(this,state_33618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__;
})()
;})(__33747,switch__33073__auto__,c__33185__auto___33759,G__33578_33748,n__25763__auto___33746,jobs,results,process,async))
})();
var state__33187__auto__ = (function (){var statearr_33632 = f__33186__auto__.call(null);
(statearr_33632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___33759);

return statearr_33632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(__33747,c__33185__auto___33759,G__33578_33748,n__25763__auto___33746,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__33768 = (__33747 + (1));
__33747 = G__33768;
continue;
} else {
}
break;
}

var c__33185__auto___33769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___33769,jobs,results,process,async){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___33769,jobs,results,process,async){
return (function (state_33654){
var state_val_33655 = (state_33654[(1)]);
if((state_val_33655 === (1))){
var state_33654__$1 = state_33654;
var statearr_33656_33770 = state_33654__$1;
(statearr_33656_33770[(2)] = null);

(statearr_33656_33770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (2))){
var state_33654__$1 = state_33654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33654__$1,(4),from);
} else {
if((state_val_33655 === (3))){
var inst_33652 = (state_33654[(2)]);
var state_33654__$1 = state_33654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33654__$1,inst_33652);
} else {
if((state_val_33655 === (4))){
var inst_33635 = (state_33654[(7)]);
var inst_33635__$1 = (state_33654[(2)]);
var inst_33636 = (inst_33635__$1 == null);
var state_33654__$1 = (function (){var statearr_33657 = state_33654;
(statearr_33657[(7)] = inst_33635__$1);

return statearr_33657;
})();
if(cljs.core.truth_(inst_33636)){
var statearr_33658_33771 = state_33654__$1;
(statearr_33658_33771[(1)] = (5));

} else {
var statearr_33659_33772 = state_33654__$1;
(statearr_33659_33772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (5))){
var inst_33638 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33654__$1 = state_33654;
var statearr_33660_33773 = state_33654__$1;
(statearr_33660_33773[(2)] = inst_33638);

(statearr_33660_33773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (6))){
var inst_33635 = (state_33654[(7)]);
var inst_33640 = (state_33654[(8)]);
var inst_33640__$1 = cljs.core.async.chan.call(null,(1));
var inst_33641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33642 = [inst_33635,inst_33640__$1];
var inst_33643 = (new cljs.core.PersistentVector(null,2,(5),inst_33641,inst_33642,null));
var state_33654__$1 = (function (){var statearr_33661 = state_33654;
(statearr_33661[(8)] = inst_33640__$1);

return statearr_33661;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33654__$1,(8),jobs,inst_33643);
} else {
if((state_val_33655 === (7))){
var inst_33650 = (state_33654[(2)]);
var state_33654__$1 = state_33654;
var statearr_33662_33774 = state_33654__$1;
(statearr_33662_33774[(2)] = inst_33650);

(statearr_33662_33774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33655 === (8))){
var inst_33640 = (state_33654[(8)]);
var inst_33645 = (state_33654[(2)]);
var state_33654__$1 = (function (){var statearr_33663 = state_33654;
(statearr_33663[(9)] = inst_33645);

return statearr_33663;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33654__$1,(9),results,inst_33640);
} else {
if((state_val_33655 === (9))){
var inst_33647 = (state_33654[(2)]);
var state_33654__$1 = (function (){var statearr_33664 = state_33654;
(statearr_33664[(10)] = inst_33647);

return statearr_33664;
})();
var statearr_33665_33775 = state_33654__$1;
(statearr_33665_33775[(2)] = null);

(statearr_33665_33775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__33185__auto___33769,jobs,results,process,async))
;
return ((function (switch__33073__auto__,c__33185__auto___33769,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____0 = (function (){
var statearr_33669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__);

(statearr_33669[(1)] = (1));

return statearr_33669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____1 = (function (state_33654){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_33654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e33670){if((e33670 instanceof Object)){
var ex__33077__auto__ = e33670;
var statearr_33671_33776 = state_33654;
(statearr_33671_33776[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33777 = state_33654;
state_33654 = G__33777;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__ = function(state_33654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____1.call(this,state_33654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___33769,jobs,results,process,async))
})();
var state__33187__auto__ = (function (){var statearr_33672 = f__33186__auto__.call(null);
(statearr_33672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___33769);

return statearr_33672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___33769,jobs,results,process,async))
);


var c__33185__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto__,jobs,results,process,async){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto__,jobs,results,process,async){
return (function (state_33710){
var state_val_33711 = (state_33710[(1)]);
if((state_val_33711 === (7))){
var inst_33706 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
var statearr_33712_33778 = state_33710__$1;
(statearr_33712_33778[(2)] = inst_33706);

(statearr_33712_33778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (20))){
var state_33710__$1 = state_33710;
var statearr_33713_33779 = state_33710__$1;
(statearr_33713_33779[(2)] = null);

(statearr_33713_33779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (1))){
var state_33710__$1 = state_33710;
var statearr_33714_33780 = state_33710__$1;
(statearr_33714_33780[(2)] = null);

(statearr_33714_33780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (4))){
var inst_33675 = (state_33710[(7)]);
var inst_33675__$1 = (state_33710[(2)]);
var inst_33676 = (inst_33675__$1 == null);
var state_33710__$1 = (function (){var statearr_33715 = state_33710;
(statearr_33715[(7)] = inst_33675__$1);

return statearr_33715;
})();
if(cljs.core.truth_(inst_33676)){
var statearr_33716_33781 = state_33710__$1;
(statearr_33716_33781[(1)] = (5));

} else {
var statearr_33717_33782 = state_33710__$1;
(statearr_33717_33782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (15))){
var inst_33688 = (state_33710[(8)]);
var state_33710__$1 = state_33710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33710__$1,(18),to,inst_33688);
} else {
if((state_val_33711 === (21))){
var inst_33701 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
var statearr_33718_33783 = state_33710__$1;
(statearr_33718_33783[(2)] = inst_33701);

(statearr_33718_33783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (13))){
var inst_33703 = (state_33710[(2)]);
var state_33710__$1 = (function (){var statearr_33719 = state_33710;
(statearr_33719[(9)] = inst_33703);

return statearr_33719;
})();
var statearr_33720_33784 = state_33710__$1;
(statearr_33720_33784[(2)] = null);

(statearr_33720_33784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (6))){
var inst_33675 = (state_33710[(7)]);
var state_33710__$1 = state_33710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33710__$1,(11),inst_33675);
} else {
if((state_val_33711 === (17))){
var inst_33696 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
if(cljs.core.truth_(inst_33696)){
var statearr_33721_33785 = state_33710__$1;
(statearr_33721_33785[(1)] = (19));

} else {
var statearr_33722_33786 = state_33710__$1;
(statearr_33722_33786[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (3))){
var inst_33708 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33710__$1,inst_33708);
} else {
if((state_val_33711 === (12))){
var inst_33685 = (state_33710[(10)]);
var state_33710__$1 = state_33710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33710__$1,(14),inst_33685);
} else {
if((state_val_33711 === (2))){
var state_33710__$1 = state_33710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33710__$1,(4),results);
} else {
if((state_val_33711 === (19))){
var state_33710__$1 = state_33710;
var statearr_33723_33787 = state_33710__$1;
(statearr_33723_33787[(2)] = null);

(statearr_33723_33787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (11))){
var inst_33685 = (state_33710[(2)]);
var state_33710__$1 = (function (){var statearr_33724 = state_33710;
(statearr_33724[(10)] = inst_33685);

return statearr_33724;
})();
var statearr_33725_33788 = state_33710__$1;
(statearr_33725_33788[(2)] = null);

(statearr_33725_33788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (9))){
var state_33710__$1 = state_33710;
var statearr_33726_33789 = state_33710__$1;
(statearr_33726_33789[(2)] = null);

(statearr_33726_33789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (5))){
var state_33710__$1 = state_33710;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33727_33790 = state_33710__$1;
(statearr_33727_33790[(1)] = (8));

} else {
var statearr_33728_33791 = state_33710__$1;
(statearr_33728_33791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (14))){
var inst_33688 = (state_33710[(8)]);
var inst_33690 = (state_33710[(11)]);
var inst_33688__$1 = (state_33710[(2)]);
var inst_33689 = (inst_33688__$1 == null);
var inst_33690__$1 = cljs.core.not.call(null,inst_33689);
var state_33710__$1 = (function (){var statearr_33729 = state_33710;
(statearr_33729[(8)] = inst_33688__$1);

(statearr_33729[(11)] = inst_33690__$1);

return statearr_33729;
})();
if(inst_33690__$1){
var statearr_33730_33792 = state_33710__$1;
(statearr_33730_33792[(1)] = (15));

} else {
var statearr_33731_33793 = state_33710__$1;
(statearr_33731_33793[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (16))){
var inst_33690 = (state_33710[(11)]);
var state_33710__$1 = state_33710;
var statearr_33732_33794 = state_33710__$1;
(statearr_33732_33794[(2)] = inst_33690);

(statearr_33732_33794[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (10))){
var inst_33682 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
var statearr_33733_33795 = state_33710__$1;
(statearr_33733_33795[(2)] = inst_33682);

(statearr_33733_33795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (18))){
var inst_33693 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
var statearr_33734_33796 = state_33710__$1;
(statearr_33734_33796[(2)] = inst_33693);

(statearr_33734_33796[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (8))){
var inst_33679 = cljs.core.async.close_BANG_.call(null,to);
var state_33710__$1 = state_33710;
var statearr_33735_33797 = state_33710__$1;
(statearr_33735_33797[(2)] = inst_33679);

(statearr_33735_33797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto__,jobs,results,process,async))
;
return ((function (switch__33073__auto__,c__33185__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____0 = (function (){
var statearr_33739 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33739[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__);

(statearr_33739[(1)] = (1));

return statearr_33739;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____1 = (function (state_33710){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_33710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e33740){if((e33740 instanceof Object)){
var ex__33077__auto__ = e33740;
var statearr_33741_33798 = state_33710;
(statearr_33741_33798[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33799 = state_33710;
state_33710 = G__33799;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__ = function(state_33710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____1.call(this,state_33710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33074__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto__,jobs,results,process,async))
})();
var state__33187__auto__ = (function (){var statearr_33742 = f__33186__auto__.call(null);
(statearr_33742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto__);

return statearr_33742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto__,jobs,results,process,async))
);

return c__33185__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args33800 = [];
var len__25923__auto___33803 = arguments.length;
var i__25924__auto___33804 = (0);
while(true){
if((i__25924__auto___33804 < len__25923__auto___33803)){
args33800.push((arguments[i__25924__auto___33804]));

var G__33805 = (i__25924__auto___33804 + (1));
i__25924__auto___33804 = G__33805;
continue;
} else {
}
break;
}

var G__33802 = args33800.length;
switch (G__33802) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33800.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args33807 = [];
var len__25923__auto___33810 = arguments.length;
var i__25924__auto___33811 = (0);
while(true){
if((i__25924__auto___33811 < len__25923__auto___33810)){
args33807.push((arguments[i__25924__auto___33811]));

var G__33812 = (i__25924__auto___33811 + (1));
i__25924__auto___33811 = G__33812;
continue;
} else {
}
break;
}

var G__33809 = args33807.length;
switch (G__33809) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33807.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args33814 = [];
var len__25923__auto___33867 = arguments.length;
var i__25924__auto___33868 = (0);
while(true){
if((i__25924__auto___33868 < len__25923__auto___33867)){
args33814.push((arguments[i__25924__auto___33868]));

var G__33869 = (i__25924__auto___33868 + (1));
i__25924__auto___33868 = G__33869;
continue;
} else {
}
break;
}

var G__33816 = args33814.length;
switch (G__33816) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33814.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33185__auto___33871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___33871,tc,fc){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___33871,tc,fc){
return (function (state_33842){
var state_val_33843 = (state_33842[(1)]);
if((state_val_33843 === (7))){
var inst_33838 = (state_33842[(2)]);
var state_33842__$1 = state_33842;
var statearr_33844_33872 = state_33842__$1;
(statearr_33844_33872[(2)] = inst_33838);

(statearr_33844_33872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (1))){
var state_33842__$1 = state_33842;
var statearr_33845_33873 = state_33842__$1;
(statearr_33845_33873[(2)] = null);

(statearr_33845_33873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (4))){
var inst_33819 = (state_33842[(7)]);
var inst_33819__$1 = (state_33842[(2)]);
var inst_33820 = (inst_33819__$1 == null);
var state_33842__$1 = (function (){var statearr_33846 = state_33842;
(statearr_33846[(7)] = inst_33819__$1);

return statearr_33846;
})();
if(cljs.core.truth_(inst_33820)){
var statearr_33847_33874 = state_33842__$1;
(statearr_33847_33874[(1)] = (5));

} else {
var statearr_33848_33875 = state_33842__$1;
(statearr_33848_33875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (13))){
var state_33842__$1 = state_33842;
var statearr_33849_33876 = state_33842__$1;
(statearr_33849_33876[(2)] = null);

(statearr_33849_33876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (6))){
var inst_33819 = (state_33842[(7)]);
var inst_33825 = p.call(null,inst_33819);
var state_33842__$1 = state_33842;
if(cljs.core.truth_(inst_33825)){
var statearr_33850_33877 = state_33842__$1;
(statearr_33850_33877[(1)] = (9));

} else {
var statearr_33851_33878 = state_33842__$1;
(statearr_33851_33878[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (3))){
var inst_33840 = (state_33842[(2)]);
var state_33842__$1 = state_33842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33842__$1,inst_33840);
} else {
if((state_val_33843 === (12))){
var state_33842__$1 = state_33842;
var statearr_33852_33879 = state_33842__$1;
(statearr_33852_33879[(2)] = null);

(statearr_33852_33879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (2))){
var state_33842__$1 = state_33842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33842__$1,(4),ch);
} else {
if((state_val_33843 === (11))){
var inst_33819 = (state_33842[(7)]);
var inst_33829 = (state_33842[(2)]);
var state_33842__$1 = state_33842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33842__$1,(8),inst_33829,inst_33819);
} else {
if((state_val_33843 === (9))){
var state_33842__$1 = state_33842;
var statearr_33853_33880 = state_33842__$1;
(statearr_33853_33880[(2)] = tc);

(statearr_33853_33880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (5))){
var inst_33822 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33823 = cljs.core.async.close_BANG_.call(null,fc);
var state_33842__$1 = (function (){var statearr_33854 = state_33842;
(statearr_33854[(8)] = inst_33822);

return statearr_33854;
})();
var statearr_33855_33881 = state_33842__$1;
(statearr_33855_33881[(2)] = inst_33823);

(statearr_33855_33881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (14))){
var inst_33836 = (state_33842[(2)]);
var state_33842__$1 = state_33842;
var statearr_33856_33882 = state_33842__$1;
(statearr_33856_33882[(2)] = inst_33836);

(statearr_33856_33882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (10))){
var state_33842__$1 = state_33842;
var statearr_33857_33883 = state_33842__$1;
(statearr_33857_33883[(2)] = fc);

(statearr_33857_33883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33843 === (8))){
var inst_33831 = (state_33842[(2)]);
var state_33842__$1 = state_33842;
if(cljs.core.truth_(inst_33831)){
var statearr_33858_33884 = state_33842__$1;
(statearr_33858_33884[(1)] = (12));

} else {
var statearr_33859_33885 = state_33842__$1;
(statearr_33859_33885[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto___33871,tc,fc))
;
return ((function (switch__33073__auto__,c__33185__auto___33871,tc,fc){
return (function() {
var cljs$core$async$state_machine__33074__auto__ = null;
var cljs$core$async$state_machine__33074__auto____0 = (function (){
var statearr_33863 = [null,null,null,null,null,null,null,null,null];
(statearr_33863[(0)] = cljs$core$async$state_machine__33074__auto__);

(statearr_33863[(1)] = (1));

return statearr_33863;
});
var cljs$core$async$state_machine__33074__auto____1 = (function (state_33842){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_33842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e33864){if((e33864 instanceof Object)){
var ex__33077__auto__ = e33864;
var statearr_33865_33886 = state_33842;
(statearr_33865_33886[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33887 = state_33842;
state_33842 = G__33887;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$state_machine__33074__auto__ = function(state_33842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33074__auto____1.call(this,state_33842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33074__auto____0;
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33074__auto____1;
return cljs$core$async$state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___33871,tc,fc))
})();
var state__33187__auto__ = (function (){var statearr_33866 = f__33186__auto__.call(null);
(statearr_33866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___33871);

return statearr_33866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___33871,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33185__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto__){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto__){
return (function (state_33951){
var state_val_33952 = (state_33951[(1)]);
if((state_val_33952 === (7))){
var inst_33947 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
var statearr_33953_33974 = state_33951__$1;
(statearr_33953_33974[(2)] = inst_33947);

(statearr_33953_33974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (1))){
var inst_33931 = init;
var state_33951__$1 = (function (){var statearr_33954 = state_33951;
(statearr_33954[(7)] = inst_33931);

return statearr_33954;
})();
var statearr_33955_33975 = state_33951__$1;
(statearr_33955_33975[(2)] = null);

(statearr_33955_33975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (4))){
var inst_33934 = (state_33951[(8)]);
var inst_33934__$1 = (state_33951[(2)]);
var inst_33935 = (inst_33934__$1 == null);
var state_33951__$1 = (function (){var statearr_33956 = state_33951;
(statearr_33956[(8)] = inst_33934__$1);

return statearr_33956;
})();
if(cljs.core.truth_(inst_33935)){
var statearr_33957_33976 = state_33951__$1;
(statearr_33957_33976[(1)] = (5));

} else {
var statearr_33958_33977 = state_33951__$1;
(statearr_33958_33977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (6))){
var inst_33931 = (state_33951[(7)]);
var inst_33938 = (state_33951[(9)]);
var inst_33934 = (state_33951[(8)]);
var inst_33938__$1 = f.call(null,inst_33931,inst_33934);
var inst_33939 = cljs.core.reduced_QMARK_.call(null,inst_33938__$1);
var state_33951__$1 = (function (){var statearr_33959 = state_33951;
(statearr_33959[(9)] = inst_33938__$1);

return statearr_33959;
})();
if(inst_33939){
var statearr_33960_33978 = state_33951__$1;
(statearr_33960_33978[(1)] = (8));

} else {
var statearr_33961_33979 = state_33951__$1;
(statearr_33961_33979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (3))){
var inst_33949 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33951__$1,inst_33949);
} else {
if((state_val_33952 === (2))){
var state_33951__$1 = state_33951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33951__$1,(4),ch);
} else {
if((state_val_33952 === (9))){
var inst_33938 = (state_33951[(9)]);
var inst_33931 = inst_33938;
var state_33951__$1 = (function (){var statearr_33962 = state_33951;
(statearr_33962[(7)] = inst_33931);

return statearr_33962;
})();
var statearr_33963_33980 = state_33951__$1;
(statearr_33963_33980[(2)] = null);

(statearr_33963_33980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (5))){
var inst_33931 = (state_33951[(7)]);
var state_33951__$1 = state_33951;
var statearr_33964_33981 = state_33951__$1;
(statearr_33964_33981[(2)] = inst_33931);

(statearr_33964_33981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (10))){
var inst_33945 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
var statearr_33965_33982 = state_33951__$1;
(statearr_33965_33982[(2)] = inst_33945);

(statearr_33965_33982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (8))){
var inst_33938 = (state_33951[(9)]);
var inst_33941 = cljs.core.deref.call(null,inst_33938);
var state_33951__$1 = state_33951;
var statearr_33966_33983 = state_33951__$1;
(statearr_33966_33983[(2)] = inst_33941);

(statearr_33966_33983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto__))
;
return ((function (switch__33073__auto__,c__33185__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33074__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33074__auto____0 = (function (){
var statearr_33970 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33970[(0)] = cljs$core$async$reduce_$_state_machine__33074__auto__);

(statearr_33970[(1)] = (1));

return statearr_33970;
});
var cljs$core$async$reduce_$_state_machine__33074__auto____1 = (function (state_33951){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_33951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e33971){if((e33971 instanceof Object)){
var ex__33077__auto__ = e33971;
var statearr_33972_33984 = state_33951;
(statearr_33972_33984[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33985 = state_33951;
state_33951 = G__33985;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33074__auto__ = function(state_33951){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33074__auto____1.call(this,state_33951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33074__auto____0;
cljs$core$async$reduce_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33074__auto____1;
return cljs$core$async$reduce_$_state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto__))
})();
var state__33187__auto__ = (function (){var statearr_33973 = f__33186__auto__.call(null);
(statearr_33973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto__);

return statearr_33973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto__))
);

return c__33185__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args33986 = [];
var len__25923__auto___34038 = arguments.length;
var i__25924__auto___34039 = (0);
while(true){
if((i__25924__auto___34039 < len__25923__auto___34038)){
args33986.push((arguments[i__25924__auto___34039]));

var G__34040 = (i__25924__auto___34039 + (1));
i__25924__auto___34039 = G__34040;
continue;
} else {
}
break;
}

var G__33988 = args33986.length;
switch (G__33988) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33986.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33185__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto__){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto__){
return (function (state_34013){
var state_val_34014 = (state_34013[(1)]);
if((state_val_34014 === (7))){
var inst_33995 = (state_34013[(2)]);
var state_34013__$1 = state_34013;
var statearr_34015_34042 = state_34013__$1;
(statearr_34015_34042[(2)] = inst_33995);

(statearr_34015_34042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (1))){
var inst_33989 = cljs.core.seq.call(null,coll);
var inst_33990 = inst_33989;
var state_34013__$1 = (function (){var statearr_34016 = state_34013;
(statearr_34016[(7)] = inst_33990);

return statearr_34016;
})();
var statearr_34017_34043 = state_34013__$1;
(statearr_34017_34043[(2)] = null);

(statearr_34017_34043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (4))){
var inst_33990 = (state_34013[(7)]);
var inst_33993 = cljs.core.first.call(null,inst_33990);
var state_34013__$1 = state_34013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34013__$1,(7),ch,inst_33993);
} else {
if((state_val_34014 === (13))){
var inst_34007 = (state_34013[(2)]);
var state_34013__$1 = state_34013;
var statearr_34018_34044 = state_34013__$1;
(statearr_34018_34044[(2)] = inst_34007);

(statearr_34018_34044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (6))){
var inst_33998 = (state_34013[(2)]);
var state_34013__$1 = state_34013;
if(cljs.core.truth_(inst_33998)){
var statearr_34019_34045 = state_34013__$1;
(statearr_34019_34045[(1)] = (8));

} else {
var statearr_34020_34046 = state_34013__$1;
(statearr_34020_34046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (3))){
var inst_34011 = (state_34013[(2)]);
var state_34013__$1 = state_34013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34013__$1,inst_34011);
} else {
if((state_val_34014 === (12))){
var state_34013__$1 = state_34013;
var statearr_34021_34047 = state_34013__$1;
(statearr_34021_34047[(2)] = null);

(statearr_34021_34047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (2))){
var inst_33990 = (state_34013[(7)]);
var state_34013__$1 = state_34013;
if(cljs.core.truth_(inst_33990)){
var statearr_34022_34048 = state_34013__$1;
(statearr_34022_34048[(1)] = (4));

} else {
var statearr_34023_34049 = state_34013__$1;
(statearr_34023_34049[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (11))){
var inst_34004 = cljs.core.async.close_BANG_.call(null,ch);
var state_34013__$1 = state_34013;
var statearr_34024_34050 = state_34013__$1;
(statearr_34024_34050[(2)] = inst_34004);

(statearr_34024_34050[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (9))){
var state_34013__$1 = state_34013;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34025_34051 = state_34013__$1;
(statearr_34025_34051[(1)] = (11));

} else {
var statearr_34026_34052 = state_34013__$1;
(statearr_34026_34052[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (5))){
var inst_33990 = (state_34013[(7)]);
var state_34013__$1 = state_34013;
var statearr_34027_34053 = state_34013__$1;
(statearr_34027_34053[(2)] = inst_33990);

(statearr_34027_34053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (10))){
var inst_34009 = (state_34013[(2)]);
var state_34013__$1 = state_34013;
var statearr_34028_34054 = state_34013__$1;
(statearr_34028_34054[(2)] = inst_34009);

(statearr_34028_34054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34014 === (8))){
var inst_33990 = (state_34013[(7)]);
var inst_34000 = cljs.core.next.call(null,inst_33990);
var inst_33990__$1 = inst_34000;
var state_34013__$1 = (function (){var statearr_34029 = state_34013;
(statearr_34029[(7)] = inst_33990__$1);

return statearr_34029;
})();
var statearr_34030_34055 = state_34013__$1;
(statearr_34030_34055[(2)] = null);

(statearr_34030_34055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto__))
;
return ((function (switch__33073__auto__,c__33185__auto__){
return (function() {
var cljs$core$async$state_machine__33074__auto__ = null;
var cljs$core$async$state_machine__33074__auto____0 = (function (){
var statearr_34034 = [null,null,null,null,null,null,null,null];
(statearr_34034[(0)] = cljs$core$async$state_machine__33074__auto__);

(statearr_34034[(1)] = (1));

return statearr_34034;
});
var cljs$core$async$state_machine__33074__auto____1 = (function (state_34013){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_34013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e34035){if((e34035 instanceof Object)){
var ex__33077__auto__ = e34035;
var statearr_34036_34056 = state_34013;
(statearr_34036_34056[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34057 = state_34013;
state_34013 = G__34057;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$state_machine__33074__auto__ = function(state_34013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33074__auto____1.call(this,state_34013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33074__auto____0;
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33074__auto____1;
return cljs$core$async$state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto__))
})();
var state__33187__auto__ = (function (){var statearr_34037 = f__33186__auto__.call(null);
(statearr_34037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto__);

return statearr_34037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto__))
);

return c__33185__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25511__auto__ = (((_ == null))?null:_);
var m__25512__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,_);
} else {
var m__25512__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25512__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m);
} else {
var m__25512__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34283 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34283 = (function (mult,ch,cs,meta34284){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta34284 = meta34284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34285,meta34284__$1){
var self__ = this;
var _34285__$1 = this;
return (new cljs.core.async.t_cljs$core$async34283(self__.mult,self__.ch,self__.cs,meta34284__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34285){
var self__ = this;
var _34285__$1 = this;
return self__.meta34284;
});})(cs))
;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34283.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34283.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34284","meta34284",-2033898664,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34283";

cljs.core.async.t_cljs$core$async34283.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async34283");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34283 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34283(mult__$1,ch__$1,cs__$1,meta34284){
return (new cljs.core.async.t_cljs$core$async34283(mult__$1,ch__$1,cs__$1,meta34284));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34283(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33185__auto___34508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___34508,cs,m,dchan,dctr,done){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___34508,cs,m,dchan,dctr,done){
return (function (state_34420){
var state_val_34421 = (state_34420[(1)]);
if((state_val_34421 === (7))){
var inst_34416 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34422_34509 = state_34420__$1;
(statearr_34422_34509[(2)] = inst_34416);

(statearr_34422_34509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (20))){
var inst_34319 = (state_34420[(7)]);
var inst_34331 = cljs.core.first.call(null,inst_34319);
var inst_34332 = cljs.core.nth.call(null,inst_34331,(0),null);
var inst_34333 = cljs.core.nth.call(null,inst_34331,(1),null);
var state_34420__$1 = (function (){var statearr_34423 = state_34420;
(statearr_34423[(8)] = inst_34332);

return statearr_34423;
})();
if(cljs.core.truth_(inst_34333)){
var statearr_34424_34510 = state_34420__$1;
(statearr_34424_34510[(1)] = (22));

} else {
var statearr_34425_34511 = state_34420__$1;
(statearr_34425_34511[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (27))){
var inst_34361 = (state_34420[(9)]);
var inst_34368 = (state_34420[(10)]);
var inst_34288 = (state_34420[(11)]);
var inst_34363 = (state_34420[(12)]);
var inst_34368__$1 = cljs.core._nth.call(null,inst_34361,inst_34363);
var inst_34369 = cljs.core.async.put_BANG_.call(null,inst_34368__$1,inst_34288,done);
var state_34420__$1 = (function (){var statearr_34426 = state_34420;
(statearr_34426[(10)] = inst_34368__$1);

return statearr_34426;
})();
if(cljs.core.truth_(inst_34369)){
var statearr_34427_34512 = state_34420__$1;
(statearr_34427_34512[(1)] = (30));

} else {
var statearr_34428_34513 = state_34420__$1;
(statearr_34428_34513[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (1))){
var state_34420__$1 = state_34420;
var statearr_34429_34514 = state_34420__$1;
(statearr_34429_34514[(2)] = null);

(statearr_34429_34514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (24))){
var inst_34319 = (state_34420[(7)]);
var inst_34338 = (state_34420[(2)]);
var inst_34339 = cljs.core.next.call(null,inst_34319);
var inst_34297 = inst_34339;
var inst_34298 = null;
var inst_34299 = (0);
var inst_34300 = (0);
var state_34420__$1 = (function (){var statearr_34430 = state_34420;
(statearr_34430[(13)] = inst_34297);

(statearr_34430[(14)] = inst_34338);

(statearr_34430[(15)] = inst_34298);

(statearr_34430[(16)] = inst_34299);

(statearr_34430[(17)] = inst_34300);

return statearr_34430;
})();
var statearr_34431_34515 = state_34420__$1;
(statearr_34431_34515[(2)] = null);

(statearr_34431_34515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (39))){
var state_34420__$1 = state_34420;
var statearr_34435_34516 = state_34420__$1;
(statearr_34435_34516[(2)] = null);

(statearr_34435_34516[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (4))){
var inst_34288 = (state_34420[(11)]);
var inst_34288__$1 = (state_34420[(2)]);
var inst_34289 = (inst_34288__$1 == null);
var state_34420__$1 = (function (){var statearr_34436 = state_34420;
(statearr_34436[(11)] = inst_34288__$1);

return statearr_34436;
})();
if(cljs.core.truth_(inst_34289)){
var statearr_34437_34517 = state_34420__$1;
(statearr_34437_34517[(1)] = (5));

} else {
var statearr_34438_34518 = state_34420__$1;
(statearr_34438_34518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (15))){
var inst_34297 = (state_34420[(13)]);
var inst_34298 = (state_34420[(15)]);
var inst_34299 = (state_34420[(16)]);
var inst_34300 = (state_34420[(17)]);
var inst_34315 = (state_34420[(2)]);
var inst_34316 = (inst_34300 + (1));
var tmp34432 = inst_34297;
var tmp34433 = inst_34298;
var tmp34434 = inst_34299;
var inst_34297__$1 = tmp34432;
var inst_34298__$1 = tmp34433;
var inst_34299__$1 = tmp34434;
var inst_34300__$1 = inst_34316;
var state_34420__$1 = (function (){var statearr_34439 = state_34420;
(statearr_34439[(18)] = inst_34315);

(statearr_34439[(13)] = inst_34297__$1);

(statearr_34439[(15)] = inst_34298__$1);

(statearr_34439[(16)] = inst_34299__$1);

(statearr_34439[(17)] = inst_34300__$1);

return statearr_34439;
})();
var statearr_34440_34519 = state_34420__$1;
(statearr_34440_34519[(2)] = null);

(statearr_34440_34519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (21))){
var inst_34342 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34444_34520 = state_34420__$1;
(statearr_34444_34520[(2)] = inst_34342);

(statearr_34444_34520[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (31))){
var inst_34368 = (state_34420[(10)]);
var inst_34372 = done.call(null,null);
var inst_34373 = cljs.core.async.untap_STAR_.call(null,m,inst_34368);
var state_34420__$1 = (function (){var statearr_34445 = state_34420;
(statearr_34445[(19)] = inst_34372);

return statearr_34445;
})();
var statearr_34446_34521 = state_34420__$1;
(statearr_34446_34521[(2)] = inst_34373);

(statearr_34446_34521[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (32))){
var inst_34362 = (state_34420[(20)]);
var inst_34360 = (state_34420[(21)]);
var inst_34361 = (state_34420[(9)]);
var inst_34363 = (state_34420[(12)]);
var inst_34375 = (state_34420[(2)]);
var inst_34376 = (inst_34363 + (1));
var tmp34441 = inst_34362;
var tmp34442 = inst_34360;
var tmp34443 = inst_34361;
var inst_34360__$1 = tmp34442;
var inst_34361__$1 = tmp34443;
var inst_34362__$1 = tmp34441;
var inst_34363__$1 = inst_34376;
var state_34420__$1 = (function (){var statearr_34447 = state_34420;
(statearr_34447[(20)] = inst_34362__$1);

(statearr_34447[(21)] = inst_34360__$1);

(statearr_34447[(9)] = inst_34361__$1);

(statearr_34447[(22)] = inst_34375);

(statearr_34447[(12)] = inst_34363__$1);

return statearr_34447;
})();
var statearr_34448_34522 = state_34420__$1;
(statearr_34448_34522[(2)] = null);

(statearr_34448_34522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (40))){
var inst_34388 = (state_34420[(23)]);
var inst_34392 = done.call(null,null);
var inst_34393 = cljs.core.async.untap_STAR_.call(null,m,inst_34388);
var state_34420__$1 = (function (){var statearr_34449 = state_34420;
(statearr_34449[(24)] = inst_34392);

return statearr_34449;
})();
var statearr_34450_34523 = state_34420__$1;
(statearr_34450_34523[(2)] = inst_34393);

(statearr_34450_34523[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (33))){
var inst_34379 = (state_34420[(25)]);
var inst_34381 = cljs.core.chunked_seq_QMARK_.call(null,inst_34379);
var state_34420__$1 = state_34420;
if(inst_34381){
var statearr_34451_34524 = state_34420__$1;
(statearr_34451_34524[(1)] = (36));

} else {
var statearr_34452_34525 = state_34420__$1;
(statearr_34452_34525[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (13))){
var inst_34309 = (state_34420[(26)]);
var inst_34312 = cljs.core.async.close_BANG_.call(null,inst_34309);
var state_34420__$1 = state_34420;
var statearr_34453_34526 = state_34420__$1;
(statearr_34453_34526[(2)] = inst_34312);

(statearr_34453_34526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (22))){
var inst_34332 = (state_34420[(8)]);
var inst_34335 = cljs.core.async.close_BANG_.call(null,inst_34332);
var state_34420__$1 = state_34420;
var statearr_34454_34527 = state_34420__$1;
(statearr_34454_34527[(2)] = inst_34335);

(statearr_34454_34527[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (36))){
var inst_34379 = (state_34420[(25)]);
var inst_34383 = cljs.core.chunk_first.call(null,inst_34379);
var inst_34384 = cljs.core.chunk_rest.call(null,inst_34379);
var inst_34385 = cljs.core.count.call(null,inst_34383);
var inst_34360 = inst_34384;
var inst_34361 = inst_34383;
var inst_34362 = inst_34385;
var inst_34363 = (0);
var state_34420__$1 = (function (){var statearr_34455 = state_34420;
(statearr_34455[(20)] = inst_34362);

(statearr_34455[(21)] = inst_34360);

(statearr_34455[(9)] = inst_34361);

(statearr_34455[(12)] = inst_34363);

return statearr_34455;
})();
var statearr_34456_34528 = state_34420__$1;
(statearr_34456_34528[(2)] = null);

(statearr_34456_34528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (41))){
var inst_34379 = (state_34420[(25)]);
var inst_34395 = (state_34420[(2)]);
var inst_34396 = cljs.core.next.call(null,inst_34379);
var inst_34360 = inst_34396;
var inst_34361 = null;
var inst_34362 = (0);
var inst_34363 = (0);
var state_34420__$1 = (function (){var statearr_34457 = state_34420;
(statearr_34457[(20)] = inst_34362);

(statearr_34457[(21)] = inst_34360);

(statearr_34457[(27)] = inst_34395);

(statearr_34457[(9)] = inst_34361);

(statearr_34457[(12)] = inst_34363);

return statearr_34457;
})();
var statearr_34458_34529 = state_34420__$1;
(statearr_34458_34529[(2)] = null);

(statearr_34458_34529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (43))){
var state_34420__$1 = state_34420;
var statearr_34459_34530 = state_34420__$1;
(statearr_34459_34530[(2)] = null);

(statearr_34459_34530[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (29))){
var inst_34404 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34460_34531 = state_34420__$1;
(statearr_34460_34531[(2)] = inst_34404);

(statearr_34460_34531[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (44))){
var inst_34413 = (state_34420[(2)]);
var state_34420__$1 = (function (){var statearr_34461 = state_34420;
(statearr_34461[(28)] = inst_34413);

return statearr_34461;
})();
var statearr_34462_34532 = state_34420__$1;
(statearr_34462_34532[(2)] = null);

(statearr_34462_34532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (6))){
var inst_34352 = (state_34420[(29)]);
var inst_34351 = cljs.core.deref.call(null,cs);
var inst_34352__$1 = cljs.core.keys.call(null,inst_34351);
var inst_34353 = cljs.core.count.call(null,inst_34352__$1);
var inst_34354 = cljs.core.reset_BANG_.call(null,dctr,inst_34353);
var inst_34359 = cljs.core.seq.call(null,inst_34352__$1);
var inst_34360 = inst_34359;
var inst_34361 = null;
var inst_34362 = (0);
var inst_34363 = (0);
var state_34420__$1 = (function (){var statearr_34463 = state_34420;
(statearr_34463[(20)] = inst_34362);

(statearr_34463[(21)] = inst_34360);

(statearr_34463[(30)] = inst_34354);

(statearr_34463[(9)] = inst_34361);

(statearr_34463[(29)] = inst_34352__$1);

(statearr_34463[(12)] = inst_34363);

return statearr_34463;
})();
var statearr_34464_34533 = state_34420__$1;
(statearr_34464_34533[(2)] = null);

(statearr_34464_34533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (28))){
var inst_34360 = (state_34420[(21)]);
var inst_34379 = (state_34420[(25)]);
var inst_34379__$1 = cljs.core.seq.call(null,inst_34360);
var state_34420__$1 = (function (){var statearr_34465 = state_34420;
(statearr_34465[(25)] = inst_34379__$1);

return statearr_34465;
})();
if(inst_34379__$1){
var statearr_34466_34534 = state_34420__$1;
(statearr_34466_34534[(1)] = (33));

} else {
var statearr_34467_34535 = state_34420__$1;
(statearr_34467_34535[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (25))){
var inst_34362 = (state_34420[(20)]);
var inst_34363 = (state_34420[(12)]);
var inst_34365 = (inst_34363 < inst_34362);
var inst_34366 = inst_34365;
var state_34420__$1 = state_34420;
if(cljs.core.truth_(inst_34366)){
var statearr_34468_34536 = state_34420__$1;
(statearr_34468_34536[(1)] = (27));

} else {
var statearr_34469_34537 = state_34420__$1;
(statearr_34469_34537[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (34))){
var state_34420__$1 = state_34420;
var statearr_34470_34538 = state_34420__$1;
(statearr_34470_34538[(2)] = null);

(statearr_34470_34538[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (17))){
var state_34420__$1 = state_34420;
var statearr_34471_34539 = state_34420__$1;
(statearr_34471_34539[(2)] = null);

(statearr_34471_34539[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (3))){
var inst_34418 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34420__$1,inst_34418);
} else {
if((state_val_34421 === (12))){
var inst_34347 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34472_34540 = state_34420__$1;
(statearr_34472_34540[(2)] = inst_34347);

(statearr_34472_34540[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (2))){
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34420__$1,(4),ch);
} else {
if((state_val_34421 === (23))){
var state_34420__$1 = state_34420;
var statearr_34473_34541 = state_34420__$1;
(statearr_34473_34541[(2)] = null);

(statearr_34473_34541[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (35))){
var inst_34402 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34474_34542 = state_34420__$1;
(statearr_34474_34542[(2)] = inst_34402);

(statearr_34474_34542[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (19))){
var inst_34319 = (state_34420[(7)]);
var inst_34323 = cljs.core.chunk_first.call(null,inst_34319);
var inst_34324 = cljs.core.chunk_rest.call(null,inst_34319);
var inst_34325 = cljs.core.count.call(null,inst_34323);
var inst_34297 = inst_34324;
var inst_34298 = inst_34323;
var inst_34299 = inst_34325;
var inst_34300 = (0);
var state_34420__$1 = (function (){var statearr_34475 = state_34420;
(statearr_34475[(13)] = inst_34297);

(statearr_34475[(15)] = inst_34298);

(statearr_34475[(16)] = inst_34299);

(statearr_34475[(17)] = inst_34300);

return statearr_34475;
})();
var statearr_34476_34543 = state_34420__$1;
(statearr_34476_34543[(2)] = null);

(statearr_34476_34543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (11))){
var inst_34297 = (state_34420[(13)]);
var inst_34319 = (state_34420[(7)]);
var inst_34319__$1 = cljs.core.seq.call(null,inst_34297);
var state_34420__$1 = (function (){var statearr_34477 = state_34420;
(statearr_34477[(7)] = inst_34319__$1);

return statearr_34477;
})();
if(inst_34319__$1){
var statearr_34478_34544 = state_34420__$1;
(statearr_34478_34544[(1)] = (16));

} else {
var statearr_34479_34545 = state_34420__$1;
(statearr_34479_34545[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (9))){
var inst_34349 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34480_34546 = state_34420__$1;
(statearr_34480_34546[(2)] = inst_34349);

(statearr_34480_34546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (5))){
var inst_34295 = cljs.core.deref.call(null,cs);
var inst_34296 = cljs.core.seq.call(null,inst_34295);
var inst_34297 = inst_34296;
var inst_34298 = null;
var inst_34299 = (0);
var inst_34300 = (0);
var state_34420__$1 = (function (){var statearr_34481 = state_34420;
(statearr_34481[(13)] = inst_34297);

(statearr_34481[(15)] = inst_34298);

(statearr_34481[(16)] = inst_34299);

(statearr_34481[(17)] = inst_34300);

return statearr_34481;
})();
var statearr_34482_34547 = state_34420__$1;
(statearr_34482_34547[(2)] = null);

(statearr_34482_34547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (14))){
var state_34420__$1 = state_34420;
var statearr_34483_34548 = state_34420__$1;
(statearr_34483_34548[(2)] = null);

(statearr_34483_34548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (45))){
var inst_34410 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34484_34549 = state_34420__$1;
(statearr_34484_34549[(2)] = inst_34410);

(statearr_34484_34549[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (26))){
var inst_34352 = (state_34420[(29)]);
var inst_34406 = (state_34420[(2)]);
var inst_34407 = cljs.core.seq.call(null,inst_34352);
var state_34420__$1 = (function (){var statearr_34485 = state_34420;
(statearr_34485[(31)] = inst_34406);

return statearr_34485;
})();
if(inst_34407){
var statearr_34486_34550 = state_34420__$1;
(statearr_34486_34550[(1)] = (42));

} else {
var statearr_34487_34551 = state_34420__$1;
(statearr_34487_34551[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (16))){
var inst_34319 = (state_34420[(7)]);
var inst_34321 = cljs.core.chunked_seq_QMARK_.call(null,inst_34319);
var state_34420__$1 = state_34420;
if(inst_34321){
var statearr_34488_34552 = state_34420__$1;
(statearr_34488_34552[(1)] = (19));

} else {
var statearr_34489_34553 = state_34420__$1;
(statearr_34489_34553[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (38))){
var inst_34399 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34490_34554 = state_34420__$1;
(statearr_34490_34554[(2)] = inst_34399);

(statearr_34490_34554[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (30))){
var state_34420__$1 = state_34420;
var statearr_34491_34555 = state_34420__$1;
(statearr_34491_34555[(2)] = null);

(statearr_34491_34555[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (10))){
var inst_34298 = (state_34420[(15)]);
var inst_34300 = (state_34420[(17)]);
var inst_34308 = cljs.core._nth.call(null,inst_34298,inst_34300);
var inst_34309 = cljs.core.nth.call(null,inst_34308,(0),null);
var inst_34310 = cljs.core.nth.call(null,inst_34308,(1),null);
var state_34420__$1 = (function (){var statearr_34492 = state_34420;
(statearr_34492[(26)] = inst_34309);

return statearr_34492;
})();
if(cljs.core.truth_(inst_34310)){
var statearr_34493_34556 = state_34420__$1;
(statearr_34493_34556[(1)] = (13));

} else {
var statearr_34494_34557 = state_34420__$1;
(statearr_34494_34557[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (18))){
var inst_34345 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34495_34558 = state_34420__$1;
(statearr_34495_34558[(2)] = inst_34345);

(statearr_34495_34558[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (42))){
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34420__$1,(45),dchan);
} else {
if((state_val_34421 === (37))){
var inst_34388 = (state_34420[(23)]);
var inst_34379 = (state_34420[(25)]);
var inst_34288 = (state_34420[(11)]);
var inst_34388__$1 = cljs.core.first.call(null,inst_34379);
var inst_34389 = cljs.core.async.put_BANG_.call(null,inst_34388__$1,inst_34288,done);
var state_34420__$1 = (function (){var statearr_34496 = state_34420;
(statearr_34496[(23)] = inst_34388__$1);

return statearr_34496;
})();
if(cljs.core.truth_(inst_34389)){
var statearr_34497_34559 = state_34420__$1;
(statearr_34497_34559[(1)] = (39));

} else {
var statearr_34498_34560 = state_34420__$1;
(statearr_34498_34560[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (8))){
var inst_34299 = (state_34420[(16)]);
var inst_34300 = (state_34420[(17)]);
var inst_34302 = (inst_34300 < inst_34299);
var inst_34303 = inst_34302;
var state_34420__$1 = state_34420;
if(cljs.core.truth_(inst_34303)){
var statearr_34499_34561 = state_34420__$1;
(statearr_34499_34561[(1)] = (10));

} else {
var statearr_34500_34562 = state_34420__$1;
(statearr_34500_34562[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto___34508,cs,m,dchan,dctr,done))
;
return ((function (switch__33073__auto__,c__33185__auto___34508,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33074__auto__ = null;
var cljs$core$async$mult_$_state_machine__33074__auto____0 = (function (){
var statearr_34504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34504[(0)] = cljs$core$async$mult_$_state_machine__33074__auto__);

(statearr_34504[(1)] = (1));

return statearr_34504;
});
var cljs$core$async$mult_$_state_machine__33074__auto____1 = (function (state_34420){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_34420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e34505){if((e34505 instanceof Object)){
var ex__33077__auto__ = e34505;
var statearr_34506_34563 = state_34420;
(statearr_34506_34563[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34564 = state_34420;
state_34420 = G__34564;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33074__auto__ = function(state_34420){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33074__auto____1.call(this,state_34420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33074__auto____0;
cljs$core$async$mult_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33074__auto____1;
return cljs$core$async$mult_$_state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___34508,cs,m,dchan,dctr,done))
})();
var state__33187__auto__ = (function (){var statearr_34507 = f__33186__auto__.call(null);
(statearr_34507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___34508);

return statearr_34507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___34508,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args34565 = [];
var len__25923__auto___34568 = arguments.length;
var i__25924__auto___34569 = (0);
while(true){
if((i__25924__auto___34569 < len__25923__auto___34568)){
args34565.push((arguments[i__25924__auto___34569]));

var G__34570 = (i__25924__auto___34569 + (1));
i__25924__auto___34569 = G__34570;
continue;
} else {
}
break;
}

var G__34567 = args34565.length;
switch (G__34567) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34565.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m);
} else {
var m__25512__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,state_map);
} else {
var m__25512__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,mode);
} else {
var m__25512__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___34582 = arguments.length;
var i__25924__auto___34583 = (0);
while(true){
if((i__25924__auto___34583 < len__25923__auto___34582)){
args__25930__auto__.push((arguments[i__25924__auto___34583]));

var G__34584 = (i__25924__auto___34583 + (1));
i__25924__auto___34583 = G__34584;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((3) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34576){
var map__34577 = p__34576;
var map__34577__$1 = ((((!((map__34577 == null)))?((((map__34577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34577):map__34577);
var opts = map__34577__$1;
var statearr_34579_34585 = state;
(statearr_34579_34585[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__34577,map__34577__$1,opts){
return (function (val){
var statearr_34580_34586 = state;
(statearr_34580_34586[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34577,map__34577__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_34581_34587 = state;
(statearr_34581_34587[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34572){
var G__34573 = cljs.core.first.call(null,seq34572);
var seq34572__$1 = cljs.core.next.call(null,seq34572);
var G__34574 = cljs.core.first.call(null,seq34572__$1);
var seq34572__$2 = cljs.core.next.call(null,seq34572__$1);
var G__34575 = cljs.core.first.call(null,seq34572__$2);
var seq34572__$3 = cljs.core.next.call(null,seq34572__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34573,G__34574,G__34575,seq34572__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34753 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34754){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34754 = meta34754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34755,meta34754__$1){
var self__ = this;
var _34755__$1 = this;
return (new cljs.core.async.t_cljs$core$async34753(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34754__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34755){
var self__ = this;
var _34755__$1 = this;
return self__.meta34754;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34753.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34753.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34754","meta34754",-221136215,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34753";

cljs.core.async.t_cljs$core$async34753.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async34753");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34753 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34753(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34754){
return (new cljs.core.async.t_cljs$core$async34753(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34754));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34753(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33185__auto___34918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___34918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___34918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34855){
var state_val_34856 = (state_34855[(1)]);
if((state_val_34856 === (7))){
var inst_34771 = (state_34855[(2)]);
var state_34855__$1 = state_34855;
var statearr_34857_34919 = state_34855__$1;
(statearr_34857_34919[(2)] = inst_34771);

(statearr_34857_34919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (20))){
var inst_34783 = (state_34855[(7)]);
var state_34855__$1 = state_34855;
var statearr_34858_34920 = state_34855__$1;
(statearr_34858_34920[(2)] = inst_34783);

(statearr_34858_34920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (27))){
var state_34855__$1 = state_34855;
var statearr_34859_34921 = state_34855__$1;
(statearr_34859_34921[(2)] = null);

(statearr_34859_34921[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (1))){
var inst_34759 = (state_34855[(8)]);
var inst_34759__$1 = calc_state.call(null);
var inst_34761 = (inst_34759__$1 == null);
var inst_34762 = cljs.core.not.call(null,inst_34761);
var state_34855__$1 = (function (){var statearr_34860 = state_34855;
(statearr_34860[(8)] = inst_34759__$1);

return statearr_34860;
})();
if(inst_34762){
var statearr_34861_34922 = state_34855__$1;
(statearr_34861_34922[(1)] = (2));

} else {
var statearr_34862_34923 = state_34855__$1;
(statearr_34862_34923[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (24))){
var inst_34829 = (state_34855[(9)]);
var inst_34806 = (state_34855[(10)]);
var inst_34815 = (state_34855[(11)]);
var inst_34829__$1 = inst_34806.call(null,inst_34815);
var state_34855__$1 = (function (){var statearr_34863 = state_34855;
(statearr_34863[(9)] = inst_34829__$1);

return statearr_34863;
})();
if(cljs.core.truth_(inst_34829__$1)){
var statearr_34864_34924 = state_34855__$1;
(statearr_34864_34924[(1)] = (29));

} else {
var statearr_34865_34925 = state_34855__$1;
(statearr_34865_34925[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (4))){
var inst_34774 = (state_34855[(2)]);
var state_34855__$1 = state_34855;
if(cljs.core.truth_(inst_34774)){
var statearr_34866_34926 = state_34855__$1;
(statearr_34866_34926[(1)] = (8));

} else {
var statearr_34867_34927 = state_34855__$1;
(statearr_34867_34927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (15))){
var inst_34800 = (state_34855[(2)]);
var state_34855__$1 = state_34855;
if(cljs.core.truth_(inst_34800)){
var statearr_34868_34928 = state_34855__$1;
(statearr_34868_34928[(1)] = (19));

} else {
var statearr_34869_34929 = state_34855__$1;
(statearr_34869_34929[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (21))){
var inst_34805 = (state_34855[(12)]);
var inst_34805__$1 = (state_34855[(2)]);
var inst_34806 = cljs.core.get.call(null,inst_34805__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34807 = cljs.core.get.call(null,inst_34805__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34808 = cljs.core.get.call(null,inst_34805__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34855__$1 = (function (){var statearr_34870 = state_34855;
(statearr_34870[(13)] = inst_34807);

(statearr_34870[(12)] = inst_34805__$1);

(statearr_34870[(10)] = inst_34806);

return statearr_34870;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34855__$1,(22),inst_34808);
} else {
if((state_val_34856 === (31))){
var inst_34837 = (state_34855[(2)]);
var state_34855__$1 = state_34855;
if(cljs.core.truth_(inst_34837)){
var statearr_34871_34930 = state_34855__$1;
(statearr_34871_34930[(1)] = (32));

} else {
var statearr_34872_34931 = state_34855__$1;
(statearr_34872_34931[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (32))){
var inst_34814 = (state_34855[(14)]);
var state_34855__$1 = state_34855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34855__$1,(35),out,inst_34814);
} else {
if((state_val_34856 === (33))){
var inst_34805 = (state_34855[(12)]);
var inst_34783 = inst_34805;
var state_34855__$1 = (function (){var statearr_34873 = state_34855;
(statearr_34873[(7)] = inst_34783);

return statearr_34873;
})();
var statearr_34874_34932 = state_34855__$1;
(statearr_34874_34932[(2)] = null);

(statearr_34874_34932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (13))){
var inst_34783 = (state_34855[(7)]);
var inst_34790 = inst_34783.cljs$lang$protocol_mask$partition0$;
var inst_34791 = (inst_34790 & (64));
var inst_34792 = inst_34783.cljs$core$ISeq$;
var inst_34793 = (inst_34791) || (inst_34792);
var state_34855__$1 = state_34855;
if(cljs.core.truth_(inst_34793)){
var statearr_34875_34933 = state_34855__$1;
(statearr_34875_34933[(1)] = (16));

} else {
var statearr_34876_34934 = state_34855__$1;
(statearr_34876_34934[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (22))){
var inst_34814 = (state_34855[(14)]);
var inst_34815 = (state_34855[(11)]);
var inst_34813 = (state_34855[(2)]);
var inst_34814__$1 = cljs.core.nth.call(null,inst_34813,(0),null);
var inst_34815__$1 = cljs.core.nth.call(null,inst_34813,(1),null);
var inst_34816 = (inst_34814__$1 == null);
var inst_34817 = cljs.core._EQ_.call(null,inst_34815__$1,change);
var inst_34818 = (inst_34816) || (inst_34817);
var state_34855__$1 = (function (){var statearr_34877 = state_34855;
(statearr_34877[(14)] = inst_34814__$1);

(statearr_34877[(11)] = inst_34815__$1);

return statearr_34877;
})();
if(cljs.core.truth_(inst_34818)){
var statearr_34878_34935 = state_34855__$1;
(statearr_34878_34935[(1)] = (23));

} else {
var statearr_34879_34936 = state_34855__$1;
(statearr_34879_34936[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (36))){
var inst_34805 = (state_34855[(12)]);
var inst_34783 = inst_34805;
var state_34855__$1 = (function (){var statearr_34880 = state_34855;
(statearr_34880[(7)] = inst_34783);

return statearr_34880;
})();
var statearr_34881_34937 = state_34855__$1;
(statearr_34881_34937[(2)] = null);

(statearr_34881_34937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (29))){
var inst_34829 = (state_34855[(9)]);
var state_34855__$1 = state_34855;
var statearr_34882_34938 = state_34855__$1;
(statearr_34882_34938[(2)] = inst_34829);

(statearr_34882_34938[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (6))){
var state_34855__$1 = state_34855;
var statearr_34883_34939 = state_34855__$1;
(statearr_34883_34939[(2)] = false);

(statearr_34883_34939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (28))){
var inst_34825 = (state_34855[(2)]);
var inst_34826 = calc_state.call(null);
var inst_34783 = inst_34826;
var state_34855__$1 = (function (){var statearr_34884 = state_34855;
(statearr_34884[(15)] = inst_34825);

(statearr_34884[(7)] = inst_34783);

return statearr_34884;
})();
var statearr_34885_34940 = state_34855__$1;
(statearr_34885_34940[(2)] = null);

(statearr_34885_34940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (25))){
var inst_34851 = (state_34855[(2)]);
var state_34855__$1 = state_34855;
var statearr_34886_34941 = state_34855__$1;
(statearr_34886_34941[(2)] = inst_34851);

(statearr_34886_34941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (34))){
var inst_34849 = (state_34855[(2)]);
var state_34855__$1 = state_34855;
var statearr_34887_34942 = state_34855__$1;
(statearr_34887_34942[(2)] = inst_34849);

(statearr_34887_34942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (17))){
var state_34855__$1 = state_34855;
var statearr_34888_34943 = state_34855__$1;
(statearr_34888_34943[(2)] = false);

(statearr_34888_34943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (3))){
var state_34855__$1 = state_34855;
var statearr_34889_34944 = state_34855__$1;
(statearr_34889_34944[(2)] = false);

(statearr_34889_34944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (12))){
var inst_34853 = (state_34855[(2)]);
var state_34855__$1 = state_34855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34855__$1,inst_34853);
} else {
if((state_val_34856 === (2))){
var inst_34759 = (state_34855[(8)]);
var inst_34764 = inst_34759.cljs$lang$protocol_mask$partition0$;
var inst_34765 = (inst_34764 & (64));
var inst_34766 = inst_34759.cljs$core$ISeq$;
var inst_34767 = (inst_34765) || (inst_34766);
var state_34855__$1 = state_34855;
if(cljs.core.truth_(inst_34767)){
var statearr_34890_34945 = state_34855__$1;
(statearr_34890_34945[(1)] = (5));

} else {
var statearr_34891_34946 = state_34855__$1;
(statearr_34891_34946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (23))){
var inst_34814 = (state_34855[(14)]);
var inst_34820 = (inst_34814 == null);
var state_34855__$1 = state_34855;
if(cljs.core.truth_(inst_34820)){
var statearr_34892_34947 = state_34855__$1;
(statearr_34892_34947[(1)] = (26));

} else {
var statearr_34893_34948 = state_34855__$1;
(statearr_34893_34948[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (35))){
var inst_34840 = (state_34855[(2)]);
var state_34855__$1 = state_34855;
if(cljs.core.truth_(inst_34840)){
var statearr_34894_34949 = state_34855__$1;
(statearr_34894_34949[(1)] = (36));

} else {
var statearr_34895_34950 = state_34855__$1;
(statearr_34895_34950[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (19))){
var inst_34783 = (state_34855[(7)]);
var inst_34802 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34783);
var state_34855__$1 = state_34855;
var statearr_34896_34951 = state_34855__$1;
(statearr_34896_34951[(2)] = inst_34802);

(statearr_34896_34951[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (11))){
var inst_34783 = (state_34855[(7)]);
var inst_34787 = (inst_34783 == null);
var inst_34788 = cljs.core.not.call(null,inst_34787);
var state_34855__$1 = state_34855;
if(inst_34788){
var statearr_34897_34952 = state_34855__$1;
(statearr_34897_34952[(1)] = (13));

} else {
var statearr_34898_34953 = state_34855__$1;
(statearr_34898_34953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (9))){
var inst_34759 = (state_34855[(8)]);
var state_34855__$1 = state_34855;
var statearr_34899_34954 = state_34855__$1;
(statearr_34899_34954[(2)] = inst_34759);

(statearr_34899_34954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (5))){
var state_34855__$1 = state_34855;
var statearr_34900_34955 = state_34855__$1;
(statearr_34900_34955[(2)] = true);

(statearr_34900_34955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (14))){
var state_34855__$1 = state_34855;
var statearr_34901_34956 = state_34855__$1;
(statearr_34901_34956[(2)] = false);

(statearr_34901_34956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (26))){
var inst_34815 = (state_34855[(11)]);
var inst_34822 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34815);
var state_34855__$1 = state_34855;
var statearr_34902_34957 = state_34855__$1;
(statearr_34902_34957[(2)] = inst_34822);

(statearr_34902_34957[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (16))){
var state_34855__$1 = state_34855;
var statearr_34903_34958 = state_34855__$1;
(statearr_34903_34958[(2)] = true);

(statearr_34903_34958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (38))){
var inst_34845 = (state_34855[(2)]);
var state_34855__$1 = state_34855;
var statearr_34904_34959 = state_34855__$1;
(statearr_34904_34959[(2)] = inst_34845);

(statearr_34904_34959[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (30))){
var inst_34807 = (state_34855[(13)]);
var inst_34806 = (state_34855[(10)]);
var inst_34815 = (state_34855[(11)]);
var inst_34832 = cljs.core.empty_QMARK_.call(null,inst_34806);
var inst_34833 = inst_34807.call(null,inst_34815);
var inst_34834 = cljs.core.not.call(null,inst_34833);
var inst_34835 = (inst_34832) && (inst_34834);
var state_34855__$1 = state_34855;
var statearr_34905_34960 = state_34855__$1;
(statearr_34905_34960[(2)] = inst_34835);

(statearr_34905_34960[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (10))){
var inst_34759 = (state_34855[(8)]);
var inst_34779 = (state_34855[(2)]);
var inst_34780 = cljs.core.get.call(null,inst_34779,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34781 = cljs.core.get.call(null,inst_34779,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34782 = cljs.core.get.call(null,inst_34779,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34783 = inst_34759;
var state_34855__$1 = (function (){var statearr_34906 = state_34855;
(statearr_34906[(16)] = inst_34780);

(statearr_34906[(17)] = inst_34782);

(statearr_34906[(18)] = inst_34781);

(statearr_34906[(7)] = inst_34783);

return statearr_34906;
})();
var statearr_34907_34961 = state_34855__$1;
(statearr_34907_34961[(2)] = null);

(statearr_34907_34961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (18))){
var inst_34797 = (state_34855[(2)]);
var state_34855__$1 = state_34855;
var statearr_34908_34962 = state_34855__$1;
(statearr_34908_34962[(2)] = inst_34797);

(statearr_34908_34962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (37))){
var state_34855__$1 = state_34855;
var statearr_34909_34963 = state_34855__$1;
(statearr_34909_34963[(2)] = null);

(statearr_34909_34963[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34856 === (8))){
var inst_34759 = (state_34855[(8)]);
var inst_34776 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34759);
var state_34855__$1 = state_34855;
var statearr_34910_34964 = state_34855__$1;
(statearr_34910_34964[(2)] = inst_34776);

(statearr_34910_34964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto___34918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33073__auto__,c__33185__auto___34918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33074__auto__ = null;
var cljs$core$async$mix_$_state_machine__33074__auto____0 = (function (){
var statearr_34914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34914[(0)] = cljs$core$async$mix_$_state_machine__33074__auto__);

(statearr_34914[(1)] = (1));

return statearr_34914;
});
var cljs$core$async$mix_$_state_machine__33074__auto____1 = (function (state_34855){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_34855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e34915){if((e34915 instanceof Object)){
var ex__33077__auto__ = e34915;
var statearr_34916_34965 = state_34855;
(statearr_34916_34965[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34966 = state_34855;
state_34855 = G__34966;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33074__auto__ = function(state_34855){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33074__auto____1.call(this,state_34855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33074__auto____0;
cljs$core$async$mix_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33074__auto____1;
return cljs$core$async$mix_$_state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___34918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33187__auto__ = (function (){var statearr_34917 = f__33186__auto__.call(null);
(statearr_34917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___34918);

return statearr_34917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___34918,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25512__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args34967 = [];
var len__25923__auto___34970 = arguments.length;
var i__25924__auto___34971 = (0);
while(true){
if((i__25924__auto___34971 < len__25923__auto___34970)){
args34967.push((arguments[i__25924__auto___34971]));

var G__34972 = (i__25924__auto___34971 + (1));
i__25924__auto___34971 = G__34972;
continue;
} else {
}
break;
}

var G__34969 = args34967.length;
switch (G__34969) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34967.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args34975 = [];
var len__25923__auto___35100 = arguments.length;
var i__25924__auto___35101 = (0);
while(true){
if((i__25924__auto___35101 < len__25923__auto___35100)){
args34975.push((arguments[i__25924__auto___35101]));

var G__35102 = (i__25924__auto___35101 + (1));
i__25924__auto___35101 = G__35102;
continue;
} else {
}
break;
}

var G__34977 = args34975.length;
switch (G__34977) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34975.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24848__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24848__auto__,mults){
return (function (p1__34974_SHARP_){
if(cljs.core.truth_(p1__34974_SHARP_.call(null,topic))){
return p1__34974_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34974_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24848__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34978 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34978 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34979){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34979 = meta34979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34980,meta34979__$1){
var self__ = this;
var _34980__$1 = this;
return (new cljs.core.async.t_cljs$core$async34978(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34979__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34980){
var self__ = this;
var _34980__$1 = this;
return self__.meta34979;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34978.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34979","meta34979",109464284,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34978";

cljs.core.async.t_cljs$core$async34978.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async34978");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34978 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34979){
return (new cljs.core.async.t_cljs$core$async34978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34979));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34978(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33185__auto___35104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___35104,mults,ensure_mult,p){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___35104,mults,ensure_mult,p){
return (function (state_35052){
var state_val_35053 = (state_35052[(1)]);
if((state_val_35053 === (7))){
var inst_35048 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
var statearr_35054_35105 = state_35052__$1;
(statearr_35054_35105[(2)] = inst_35048);

(statearr_35054_35105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (20))){
var state_35052__$1 = state_35052;
var statearr_35055_35106 = state_35052__$1;
(statearr_35055_35106[(2)] = null);

(statearr_35055_35106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (1))){
var state_35052__$1 = state_35052;
var statearr_35056_35107 = state_35052__$1;
(statearr_35056_35107[(2)] = null);

(statearr_35056_35107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (24))){
var inst_35031 = (state_35052[(7)]);
var inst_35040 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35031);
var state_35052__$1 = state_35052;
var statearr_35057_35108 = state_35052__$1;
(statearr_35057_35108[(2)] = inst_35040);

(statearr_35057_35108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (4))){
var inst_34983 = (state_35052[(8)]);
var inst_34983__$1 = (state_35052[(2)]);
var inst_34984 = (inst_34983__$1 == null);
var state_35052__$1 = (function (){var statearr_35058 = state_35052;
(statearr_35058[(8)] = inst_34983__$1);

return statearr_35058;
})();
if(cljs.core.truth_(inst_34984)){
var statearr_35059_35109 = state_35052__$1;
(statearr_35059_35109[(1)] = (5));

} else {
var statearr_35060_35110 = state_35052__$1;
(statearr_35060_35110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (15))){
var inst_35025 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
var statearr_35061_35111 = state_35052__$1;
(statearr_35061_35111[(2)] = inst_35025);

(statearr_35061_35111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (21))){
var inst_35045 = (state_35052[(2)]);
var state_35052__$1 = (function (){var statearr_35062 = state_35052;
(statearr_35062[(9)] = inst_35045);

return statearr_35062;
})();
var statearr_35063_35112 = state_35052__$1;
(statearr_35063_35112[(2)] = null);

(statearr_35063_35112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (13))){
var inst_35007 = (state_35052[(10)]);
var inst_35009 = cljs.core.chunked_seq_QMARK_.call(null,inst_35007);
var state_35052__$1 = state_35052;
if(inst_35009){
var statearr_35064_35113 = state_35052__$1;
(statearr_35064_35113[(1)] = (16));

} else {
var statearr_35065_35114 = state_35052__$1;
(statearr_35065_35114[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (22))){
var inst_35037 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
if(cljs.core.truth_(inst_35037)){
var statearr_35066_35115 = state_35052__$1;
(statearr_35066_35115[(1)] = (23));

} else {
var statearr_35067_35116 = state_35052__$1;
(statearr_35067_35116[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (6))){
var inst_34983 = (state_35052[(8)]);
var inst_35033 = (state_35052[(11)]);
var inst_35031 = (state_35052[(7)]);
var inst_35031__$1 = topic_fn.call(null,inst_34983);
var inst_35032 = cljs.core.deref.call(null,mults);
var inst_35033__$1 = cljs.core.get.call(null,inst_35032,inst_35031__$1);
var state_35052__$1 = (function (){var statearr_35068 = state_35052;
(statearr_35068[(11)] = inst_35033__$1);

(statearr_35068[(7)] = inst_35031__$1);

return statearr_35068;
})();
if(cljs.core.truth_(inst_35033__$1)){
var statearr_35069_35117 = state_35052__$1;
(statearr_35069_35117[(1)] = (19));

} else {
var statearr_35070_35118 = state_35052__$1;
(statearr_35070_35118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (25))){
var inst_35042 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
var statearr_35071_35119 = state_35052__$1;
(statearr_35071_35119[(2)] = inst_35042);

(statearr_35071_35119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (17))){
var inst_35007 = (state_35052[(10)]);
var inst_35016 = cljs.core.first.call(null,inst_35007);
var inst_35017 = cljs.core.async.muxch_STAR_.call(null,inst_35016);
var inst_35018 = cljs.core.async.close_BANG_.call(null,inst_35017);
var inst_35019 = cljs.core.next.call(null,inst_35007);
var inst_34993 = inst_35019;
var inst_34994 = null;
var inst_34995 = (0);
var inst_34996 = (0);
var state_35052__$1 = (function (){var statearr_35072 = state_35052;
(statearr_35072[(12)] = inst_35018);

(statearr_35072[(13)] = inst_34995);

(statearr_35072[(14)] = inst_34993);

(statearr_35072[(15)] = inst_34996);

(statearr_35072[(16)] = inst_34994);

return statearr_35072;
})();
var statearr_35073_35120 = state_35052__$1;
(statearr_35073_35120[(2)] = null);

(statearr_35073_35120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (3))){
var inst_35050 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35052__$1,inst_35050);
} else {
if((state_val_35053 === (12))){
var inst_35027 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
var statearr_35074_35121 = state_35052__$1;
(statearr_35074_35121[(2)] = inst_35027);

(statearr_35074_35121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (2))){
var state_35052__$1 = state_35052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35052__$1,(4),ch);
} else {
if((state_val_35053 === (23))){
var state_35052__$1 = state_35052;
var statearr_35075_35122 = state_35052__$1;
(statearr_35075_35122[(2)] = null);

(statearr_35075_35122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (19))){
var inst_34983 = (state_35052[(8)]);
var inst_35033 = (state_35052[(11)]);
var inst_35035 = cljs.core.async.muxch_STAR_.call(null,inst_35033);
var state_35052__$1 = state_35052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35052__$1,(22),inst_35035,inst_34983);
} else {
if((state_val_35053 === (11))){
var inst_34993 = (state_35052[(14)]);
var inst_35007 = (state_35052[(10)]);
var inst_35007__$1 = cljs.core.seq.call(null,inst_34993);
var state_35052__$1 = (function (){var statearr_35076 = state_35052;
(statearr_35076[(10)] = inst_35007__$1);

return statearr_35076;
})();
if(inst_35007__$1){
var statearr_35077_35123 = state_35052__$1;
(statearr_35077_35123[(1)] = (13));

} else {
var statearr_35078_35124 = state_35052__$1;
(statearr_35078_35124[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (9))){
var inst_35029 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
var statearr_35079_35125 = state_35052__$1;
(statearr_35079_35125[(2)] = inst_35029);

(statearr_35079_35125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (5))){
var inst_34990 = cljs.core.deref.call(null,mults);
var inst_34991 = cljs.core.vals.call(null,inst_34990);
var inst_34992 = cljs.core.seq.call(null,inst_34991);
var inst_34993 = inst_34992;
var inst_34994 = null;
var inst_34995 = (0);
var inst_34996 = (0);
var state_35052__$1 = (function (){var statearr_35080 = state_35052;
(statearr_35080[(13)] = inst_34995);

(statearr_35080[(14)] = inst_34993);

(statearr_35080[(15)] = inst_34996);

(statearr_35080[(16)] = inst_34994);

return statearr_35080;
})();
var statearr_35081_35126 = state_35052__$1;
(statearr_35081_35126[(2)] = null);

(statearr_35081_35126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (14))){
var state_35052__$1 = state_35052;
var statearr_35085_35127 = state_35052__$1;
(statearr_35085_35127[(2)] = null);

(statearr_35085_35127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (16))){
var inst_35007 = (state_35052[(10)]);
var inst_35011 = cljs.core.chunk_first.call(null,inst_35007);
var inst_35012 = cljs.core.chunk_rest.call(null,inst_35007);
var inst_35013 = cljs.core.count.call(null,inst_35011);
var inst_34993 = inst_35012;
var inst_34994 = inst_35011;
var inst_34995 = inst_35013;
var inst_34996 = (0);
var state_35052__$1 = (function (){var statearr_35086 = state_35052;
(statearr_35086[(13)] = inst_34995);

(statearr_35086[(14)] = inst_34993);

(statearr_35086[(15)] = inst_34996);

(statearr_35086[(16)] = inst_34994);

return statearr_35086;
})();
var statearr_35087_35128 = state_35052__$1;
(statearr_35087_35128[(2)] = null);

(statearr_35087_35128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (10))){
var inst_34995 = (state_35052[(13)]);
var inst_34993 = (state_35052[(14)]);
var inst_34996 = (state_35052[(15)]);
var inst_34994 = (state_35052[(16)]);
var inst_35001 = cljs.core._nth.call(null,inst_34994,inst_34996);
var inst_35002 = cljs.core.async.muxch_STAR_.call(null,inst_35001);
var inst_35003 = cljs.core.async.close_BANG_.call(null,inst_35002);
var inst_35004 = (inst_34996 + (1));
var tmp35082 = inst_34995;
var tmp35083 = inst_34993;
var tmp35084 = inst_34994;
var inst_34993__$1 = tmp35083;
var inst_34994__$1 = tmp35084;
var inst_34995__$1 = tmp35082;
var inst_34996__$1 = inst_35004;
var state_35052__$1 = (function (){var statearr_35088 = state_35052;
(statearr_35088[(17)] = inst_35003);

(statearr_35088[(13)] = inst_34995__$1);

(statearr_35088[(14)] = inst_34993__$1);

(statearr_35088[(15)] = inst_34996__$1);

(statearr_35088[(16)] = inst_34994__$1);

return statearr_35088;
})();
var statearr_35089_35129 = state_35052__$1;
(statearr_35089_35129[(2)] = null);

(statearr_35089_35129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (18))){
var inst_35022 = (state_35052[(2)]);
var state_35052__$1 = state_35052;
var statearr_35090_35130 = state_35052__$1;
(statearr_35090_35130[(2)] = inst_35022);

(statearr_35090_35130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35053 === (8))){
var inst_34995 = (state_35052[(13)]);
var inst_34996 = (state_35052[(15)]);
var inst_34998 = (inst_34996 < inst_34995);
var inst_34999 = inst_34998;
var state_35052__$1 = state_35052;
if(cljs.core.truth_(inst_34999)){
var statearr_35091_35131 = state_35052__$1;
(statearr_35091_35131[(1)] = (10));

} else {
var statearr_35092_35132 = state_35052__$1;
(statearr_35092_35132[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto___35104,mults,ensure_mult,p))
;
return ((function (switch__33073__auto__,c__33185__auto___35104,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33074__auto__ = null;
var cljs$core$async$state_machine__33074__auto____0 = (function (){
var statearr_35096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35096[(0)] = cljs$core$async$state_machine__33074__auto__);

(statearr_35096[(1)] = (1));

return statearr_35096;
});
var cljs$core$async$state_machine__33074__auto____1 = (function (state_35052){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_35052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e35097){if((e35097 instanceof Object)){
var ex__33077__auto__ = e35097;
var statearr_35098_35133 = state_35052;
(statearr_35098_35133[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35134 = state_35052;
state_35052 = G__35134;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$state_machine__33074__auto__ = function(state_35052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33074__auto____1.call(this,state_35052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33074__auto____0;
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33074__auto____1;
return cljs$core$async$state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___35104,mults,ensure_mult,p))
})();
var state__33187__auto__ = (function (){var statearr_35099 = f__33186__auto__.call(null);
(statearr_35099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___35104);

return statearr_35099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___35104,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args35135 = [];
var len__25923__auto___35138 = arguments.length;
var i__25924__auto___35139 = (0);
while(true){
if((i__25924__auto___35139 < len__25923__auto___35138)){
args35135.push((arguments[i__25924__auto___35139]));

var G__35140 = (i__25924__auto___35139 + (1));
i__25924__auto___35139 = G__35140;
continue;
} else {
}
break;
}

var G__35137 = args35135.length;
switch (G__35137) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35135.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args35142 = [];
var len__25923__auto___35145 = arguments.length;
var i__25924__auto___35146 = (0);
while(true){
if((i__25924__auto___35146 < len__25923__auto___35145)){
args35142.push((arguments[i__25924__auto___35146]));

var G__35147 = (i__25924__auto___35146 + (1));
i__25924__auto___35146 = G__35147;
continue;
} else {
}
break;
}

var G__35144 = args35142.length;
switch (G__35144) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35142.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args35149 = [];
var len__25923__auto___35220 = arguments.length;
var i__25924__auto___35221 = (0);
while(true){
if((i__25924__auto___35221 < len__25923__auto___35220)){
args35149.push((arguments[i__25924__auto___35221]));

var G__35222 = (i__25924__auto___35221 + (1));
i__25924__auto___35221 = G__35222;
continue;
} else {
}
break;
}

var G__35151 = args35149.length;
switch (G__35151) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35149.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33185__auto___35224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___35224,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___35224,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35190){
var state_val_35191 = (state_35190[(1)]);
if((state_val_35191 === (7))){
var state_35190__$1 = state_35190;
var statearr_35192_35225 = state_35190__$1;
(statearr_35192_35225[(2)] = null);

(statearr_35192_35225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (1))){
var state_35190__$1 = state_35190;
var statearr_35193_35226 = state_35190__$1;
(statearr_35193_35226[(2)] = null);

(statearr_35193_35226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (4))){
var inst_35154 = (state_35190[(7)]);
var inst_35156 = (inst_35154 < cnt);
var state_35190__$1 = state_35190;
if(cljs.core.truth_(inst_35156)){
var statearr_35194_35227 = state_35190__$1;
(statearr_35194_35227[(1)] = (6));

} else {
var statearr_35195_35228 = state_35190__$1;
(statearr_35195_35228[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (15))){
var inst_35186 = (state_35190[(2)]);
var state_35190__$1 = state_35190;
var statearr_35196_35229 = state_35190__$1;
(statearr_35196_35229[(2)] = inst_35186);

(statearr_35196_35229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (13))){
var inst_35179 = cljs.core.async.close_BANG_.call(null,out);
var state_35190__$1 = state_35190;
var statearr_35197_35230 = state_35190__$1;
(statearr_35197_35230[(2)] = inst_35179);

(statearr_35197_35230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (6))){
var state_35190__$1 = state_35190;
var statearr_35198_35231 = state_35190__$1;
(statearr_35198_35231[(2)] = null);

(statearr_35198_35231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (3))){
var inst_35188 = (state_35190[(2)]);
var state_35190__$1 = state_35190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35190__$1,inst_35188);
} else {
if((state_val_35191 === (12))){
var inst_35176 = (state_35190[(8)]);
var inst_35176__$1 = (state_35190[(2)]);
var inst_35177 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35176__$1);
var state_35190__$1 = (function (){var statearr_35199 = state_35190;
(statearr_35199[(8)] = inst_35176__$1);

return statearr_35199;
})();
if(cljs.core.truth_(inst_35177)){
var statearr_35200_35232 = state_35190__$1;
(statearr_35200_35232[(1)] = (13));

} else {
var statearr_35201_35233 = state_35190__$1;
(statearr_35201_35233[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (2))){
var inst_35153 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35154 = (0);
var state_35190__$1 = (function (){var statearr_35202 = state_35190;
(statearr_35202[(9)] = inst_35153);

(statearr_35202[(7)] = inst_35154);

return statearr_35202;
})();
var statearr_35203_35234 = state_35190__$1;
(statearr_35203_35234[(2)] = null);

(statearr_35203_35234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (11))){
var inst_35154 = (state_35190[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35190,(10),Object,null,(9));
var inst_35163 = chs__$1.call(null,inst_35154);
var inst_35164 = done.call(null,inst_35154);
var inst_35165 = cljs.core.async.take_BANG_.call(null,inst_35163,inst_35164);
var state_35190__$1 = state_35190;
var statearr_35204_35235 = state_35190__$1;
(statearr_35204_35235[(2)] = inst_35165);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35190__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (9))){
var inst_35154 = (state_35190[(7)]);
var inst_35167 = (state_35190[(2)]);
var inst_35168 = (inst_35154 + (1));
var inst_35154__$1 = inst_35168;
var state_35190__$1 = (function (){var statearr_35205 = state_35190;
(statearr_35205[(10)] = inst_35167);

(statearr_35205[(7)] = inst_35154__$1);

return statearr_35205;
})();
var statearr_35206_35236 = state_35190__$1;
(statearr_35206_35236[(2)] = null);

(statearr_35206_35236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (5))){
var inst_35174 = (state_35190[(2)]);
var state_35190__$1 = (function (){var statearr_35207 = state_35190;
(statearr_35207[(11)] = inst_35174);

return statearr_35207;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35190__$1,(12),dchan);
} else {
if((state_val_35191 === (14))){
var inst_35176 = (state_35190[(8)]);
var inst_35181 = cljs.core.apply.call(null,f,inst_35176);
var state_35190__$1 = state_35190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35190__$1,(16),out,inst_35181);
} else {
if((state_val_35191 === (16))){
var inst_35183 = (state_35190[(2)]);
var state_35190__$1 = (function (){var statearr_35208 = state_35190;
(statearr_35208[(12)] = inst_35183);

return statearr_35208;
})();
var statearr_35209_35237 = state_35190__$1;
(statearr_35209_35237[(2)] = null);

(statearr_35209_35237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (10))){
var inst_35158 = (state_35190[(2)]);
var inst_35159 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35190__$1 = (function (){var statearr_35210 = state_35190;
(statearr_35210[(13)] = inst_35158);

return statearr_35210;
})();
var statearr_35211_35238 = state_35190__$1;
(statearr_35211_35238[(2)] = inst_35159);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35190__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35191 === (8))){
var inst_35172 = (state_35190[(2)]);
var state_35190__$1 = state_35190;
var statearr_35212_35239 = state_35190__$1;
(statearr_35212_35239[(2)] = inst_35172);

(statearr_35212_35239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto___35224,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33073__auto__,c__33185__auto___35224,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33074__auto__ = null;
var cljs$core$async$state_machine__33074__auto____0 = (function (){
var statearr_35216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35216[(0)] = cljs$core$async$state_machine__33074__auto__);

(statearr_35216[(1)] = (1));

return statearr_35216;
});
var cljs$core$async$state_machine__33074__auto____1 = (function (state_35190){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_35190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e35217){if((e35217 instanceof Object)){
var ex__33077__auto__ = e35217;
var statearr_35218_35240 = state_35190;
(statearr_35218_35240[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35241 = state_35190;
state_35190 = G__35241;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$state_machine__33074__auto__ = function(state_35190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33074__auto____1.call(this,state_35190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33074__auto____0;
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33074__auto____1;
return cljs$core$async$state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___35224,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33187__auto__ = (function (){var statearr_35219 = f__33186__auto__.call(null);
(statearr_35219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___35224);

return statearr_35219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___35224,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args35243 = [];
var len__25923__auto___35301 = arguments.length;
var i__25924__auto___35302 = (0);
while(true){
if((i__25924__auto___35302 < len__25923__auto___35301)){
args35243.push((arguments[i__25924__auto___35302]));

var G__35303 = (i__25924__auto___35302 + (1));
i__25924__auto___35302 = G__35303;
continue;
} else {
}
break;
}

var G__35245 = args35243.length;
switch (G__35245) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35243.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33185__auto___35305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___35305,out){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___35305,out){
return (function (state_35277){
var state_val_35278 = (state_35277[(1)]);
if((state_val_35278 === (7))){
var inst_35257 = (state_35277[(7)]);
var inst_35256 = (state_35277[(8)]);
var inst_35256__$1 = (state_35277[(2)]);
var inst_35257__$1 = cljs.core.nth.call(null,inst_35256__$1,(0),null);
var inst_35258 = cljs.core.nth.call(null,inst_35256__$1,(1),null);
var inst_35259 = (inst_35257__$1 == null);
var state_35277__$1 = (function (){var statearr_35279 = state_35277;
(statearr_35279[(7)] = inst_35257__$1);

(statearr_35279[(8)] = inst_35256__$1);

(statearr_35279[(9)] = inst_35258);

return statearr_35279;
})();
if(cljs.core.truth_(inst_35259)){
var statearr_35280_35306 = state_35277__$1;
(statearr_35280_35306[(1)] = (8));

} else {
var statearr_35281_35307 = state_35277__$1;
(statearr_35281_35307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (1))){
var inst_35246 = cljs.core.vec.call(null,chs);
var inst_35247 = inst_35246;
var state_35277__$1 = (function (){var statearr_35282 = state_35277;
(statearr_35282[(10)] = inst_35247);

return statearr_35282;
})();
var statearr_35283_35308 = state_35277__$1;
(statearr_35283_35308[(2)] = null);

(statearr_35283_35308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (4))){
var inst_35247 = (state_35277[(10)]);
var state_35277__$1 = state_35277;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35277__$1,(7),inst_35247);
} else {
if((state_val_35278 === (6))){
var inst_35273 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
var statearr_35284_35309 = state_35277__$1;
(statearr_35284_35309[(2)] = inst_35273);

(statearr_35284_35309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (3))){
var inst_35275 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35277__$1,inst_35275);
} else {
if((state_val_35278 === (2))){
var inst_35247 = (state_35277[(10)]);
var inst_35249 = cljs.core.count.call(null,inst_35247);
var inst_35250 = (inst_35249 > (0));
var state_35277__$1 = state_35277;
if(cljs.core.truth_(inst_35250)){
var statearr_35286_35310 = state_35277__$1;
(statearr_35286_35310[(1)] = (4));

} else {
var statearr_35287_35311 = state_35277__$1;
(statearr_35287_35311[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (11))){
var inst_35247 = (state_35277[(10)]);
var inst_35266 = (state_35277[(2)]);
var tmp35285 = inst_35247;
var inst_35247__$1 = tmp35285;
var state_35277__$1 = (function (){var statearr_35288 = state_35277;
(statearr_35288[(10)] = inst_35247__$1);

(statearr_35288[(11)] = inst_35266);

return statearr_35288;
})();
var statearr_35289_35312 = state_35277__$1;
(statearr_35289_35312[(2)] = null);

(statearr_35289_35312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (9))){
var inst_35257 = (state_35277[(7)]);
var state_35277__$1 = state_35277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35277__$1,(11),out,inst_35257);
} else {
if((state_val_35278 === (5))){
var inst_35271 = cljs.core.async.close_BANG_.call(null,out);
var state_35277__$1 = state_35277;
var statearr_35290_35313 = state_35277__$1;
(statearr_35290_35313[(2)] = inst_35271);

(statearr_35290_35313[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (10))){
var inst_35269 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
var statearr_35291_35314 = state_35277__$1;
(statearr_35291_35314[(2)] = inst_35269);

(statearr_35291_35314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (8))){
var inst_35257 = (state_35277[(7)]);
var inst_35247 = (state_35277[(10)]);
var inst_35256 = (state_35277[(8)]);
var inst_35258 = (state_35277[(9)]);
var inst_35261 = (function (){var cs = inst_35247;
var vec__35252 = inst_35256;
var v = inst_35257;
var c = inst_35258;
return ((function (cs,vec__35252,v,c,inst_35257,inst_35247,inst_35256,inst_35258,state_val_35278,c__33185__auto___35305,out){
return (function (p1__35242_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35242_SHARP_);
});
;})(cs,vec__35252,v,c,inst_35257,inst_35247,inst_35256,inst_35258,state_val_35278,c__33185__auto___35305,out))
})();
var inst_35262 = cljs.core.filterv.call(null,inst_35261,inst_35247);
var inst_35247__$1 = inst_35262;
var state_35277__$1 = (function (){var statearr_35292 = state_35277;
(statearr_35292[(10)] = inst_35247__$1);

return statearr_35292;
})();
var statearr_35293_35315 = state_35277__$1;
(statearr_35293_35315[(2)] = null);

(statearr_35293_35315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto___35305,out))
;
return ((function (switch__33073__auto__,c__33185__auto___35305,out){
return (function() {
var cljs$core$async$state_machine__33074__auto__ = null;
var cljs$core$async$state_machine__33074__auto____0 = (function (){
var statearr_35297 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35297[(0)] = cljs$core$async$state_machine__33074__auto__);

(statearr_35297[(1)] = (1));

return statearr_35297;
});
var cljs$core$async$state_machine__33074__auto____1 = (function (state_35277){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_35277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e35298){if((e35298 instanceof Object)){
var ex__33077__auto__ = e35298;
var statearr_35299_35316 = state_35277;
(statearr_35299_35316[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35317 = state_35277;
state_35277 = G__35317;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$state_machine__33074__auto__ = function(state_35277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33074__auto____1.call(this,state_35277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33074__auto____0;
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33074__auto____1;
return cljs$core$async$state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___35305,out))
})();
var state__33187__auto__ = (function (){var statearr_35300 = f__33186__auto__.call(null);
(statearr_35300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___35305);

return statearr_35300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___35305,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args35318 = [];
var len__25923__auto___35367 = arguments.length;
var i__25924__auto___35368 = (0);
while(true){
if((i__25924__auto___35368 < len__25923__auto___35367)){
args35318.push((arguments[i__25924__auto___35368]));

var G__35369 = (i__25924__auto___35368 + (1));
i__25924__auto___35368 = G__35369;
continue;
} else {
}
break;
}

var G__35320 = args35318.length;
switch (G__35320) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35318.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33185__auto___35371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___35371,out){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___35371,out){
return (function (state_35344){
var state_val_35345 = (state_35344[(1)]);
if((state_val_35345 === (7))){
var inst_35326 = (state_35344[(7)]);
var inst_35326__$1 = (state_35344[(2)]);
var inst_35327 = (inst_35326__$1 == null);
var inst_35328 = cljs.core.not.call(null,inst_35327);
var state_35344__$1 = (function (){var statearr_35346 = state_35344;
(statearr_35346[(7)] = inst_35326__$1);

return statearr_35346;
})();
if(inst_35328){
var statearr_35347_35372 = state_35344__$1;
(statearr_35347_35372[(1)] = (8));

} else {
var statearr_35348_35373 = state_35344__$1;
(statearr_35348_35373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (1))){
var inst_35321 = (0);
var state_35344__$1 = (function (){var statearr_35349 = state_35344;
(statearr_35349[(8)] = inst_35321);

return statearr_35349;
})();
var statearr_35350_35374 = state_35344__$1;
(statearr_35350_35374[(2)] = null);

(statearr_35350_35374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (4))){
var state_35344__$1 = state_35344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35344__$1,(7),ch);
} else {
if((state_val_35345 === (6))){
var inst_35339 = (state_35344[(2)]);
var state_35344__$1 = state_35344;
var statearr_35351_35375 = state_35344__$1;
(statearr_35351_35375[(2)] = inst_35339);

(statearr_35351_35375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (3))){
var inst_35341 = (state_35344[(2)]);
var inst_35342 = cljs.core.async.close_BANG_.call(null,out);
var state_35344__$1 = (function (){var statearr_35352 = state_35344;
(statearr_35352[(9)] = inst_35341);

return statearr_35352;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35344__$1,inst_35342);
} else {
if((state_val_35345 === (2))){
var inst_35321 = (state_35344[(8)]);
var inst_35323 = (inst_35321 < n);
var state_35344__$1 = state_35344;
if(cljs.core.truth_(inst_35323)){
var statearr_35353_35376 = state_35344__$1;
(statearr_35353_35376[(1)] = (4));

} else {
var statearr_35354_35377 = state_35344__$1;
(statearr_35354_35377[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (11))){
var inst_35321 = (state_35344[(8)]);
var inst_35331 = (state_35344[(2)]);
var inst_35332 = (inst_35321 + (1));
var inst_35321__$1 = inst_35332;
var state_35344__$1 = (function (){var statearr_35355 = state_35344;
(statearr_35355[(8)] = inst_35321__$1);

(statearr_35355[(10)] = inst_35331);

return statearr_35355;
})();
var statearr_35356_35378 = state_35344__$1;
(statearr_35356_35378[(2)] = null);

(statearr_35356_35378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (9))){
var state_35344__$1 = state_35344;
var statearr_35357_35379 = state_35344__$1;
(statearr_35357_35379[(2)] = null);

(statearr_35357_35379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (5))){
var state_35344__$1 = state_35344;
var statearr_35358_35380 = state_35344__$1;
(statearr_35358_35380[(2)] = null);

(statearr_35358_35380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (10))){
var inst_35336 = (state_35344[(2)]);
var state_35344__$1 = state_35344;
var statearr_35359_35381 = state_35344__$1;
(statearr_35359_35381[(2)] = inst_35336);

(statearr_35359_35381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35345 === (8))){
var inst_35326 = (state_35344[(7)]);
var state_35344__$1 = state_35344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35344__$1,(11),out,inst_35326);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto___35371,out))
;
return ((function (switch__33073__auto__,c__33185__auto___35371,out){
return (function() {
var cljs$core$async$state_machine__33074__auto__ = null;
var cljs$core$async$state_machine__33074__auto____0 = (function (){
var statearr_35363 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35363[(0)] = cljs$core$async$state_machine__33074__auto__);

(statearr_35363[(1)] = (1));

return statearr_35363;
});
var cljs$core$async$state_machine__33074__auto____1 = (function (state_35344){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_35344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e35364){if((e35364 instanceof Object)){
var ex__33077__auto__ = e35364;
var statearr_35365_35382 = state_35344;
(statearr_35365_35382[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35383 = state_35344;
state_35344 = G__35383;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$state_machine__33074__auto__ = function(state_35344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33074__auto____1.call(this,state_35344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33074__auto____0;
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33074__auto____1;
return cljs$core$async$state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___35371,out))
})();
var state__33187__auto__ = (function (){var statearr_35366 = f__33186__auto__.call(null);
(statearr_35366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___35371);

return statearr_35366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___35371,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35391 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35391 = (function (map_LT_,f,ch,meta35392){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35392 = meta35392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35393,meta35392__$1){
var self__ = this;
var _35393__$1 = this;
return (new cljs.core.async.t_cljs$core$async35391(self__.map_LT_,self__.f,self__.ch,meta35392__$1));
});

cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35393){
var self__ = this;
var _35393__$1 = this;
return self__.meta35392;
});

cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35394 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35394 = (function (map_LT_,f,ch,meta35392,_,fn1,meta35395){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35392 = meta35392;
this._ = _;
this.fn1 = fn1;
this.meta35395 = meta35395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35396,meta35395__$1){
var self__ = this;
var _35396__$1 = this;
return (new cljs.core.async.t_cljs$core$async35394(self__.map_LT_,self__.f,self__.ch,self__.meta35392,self__._,self__.fn1,meta35395__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35394.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35396){
var self__ = this;
var _35396__$1 = this;
return self__.meta35395;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35394.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35394.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35394.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35394.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35384_SHARP_){
return f1.call(null,(((p1__35384_SHARP_ == null))?null:self__.f.call(null,p1__35384_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35394.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35392","meta35392",-7469884,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35391","cljs.core.async/t_cljs$core$async35391",989495992,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35395","meta35395",-270882638,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35394.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35394";

cljs.core.async.t_cljs$core$async35394.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async35394");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35394 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35394(map_LT___$1,f__$1,ch__$1,meta35392__$1,___$2,fn1__$1,meta35395){
return (new cljs.core.async.t_cljs$core$async35394(map_LT___$1,f__$1,ch__$1,meta35392__$1,___$2,fn1__$1,meta35395));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35394(self__.map_LT_,self__.f,self__.ch,self__.meta35392,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24836__auto__ = ret;
if(cljs.core.truth_(and__24836__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24836__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35391.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35392","meta35392",-7469884,null)], null);
});

cljs.core.async.t_cljs$core$async35391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35391";

cljs.core.async.t_cljs$core$async35391.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async35391");
});

cljs.core.async.__GT_t_cljs$core$async35391 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35391(map_LT___$1,f__$1,ch__$1,meta35392){
return (new cljs.core.async.t_cljs$core$async35391(map_LT___$1,f__$1,ch__$1,meta35392));
});

}

return (new cljs.core.async.t_cljs$core$async35391(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35400 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35400 = (function (map_GT_,f,ch,meta35401){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta35401 = meta35401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35402,meta35401__$1){
var self__ = this;
var _35402__$1 = this;
return (new cljs.core.async.t_cljs$core$async35400(self__.map_GT_,self__.f,self__.ch,meta35401__$1));
});

cljs.core.async.t_cljs$core$async35400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35402){
var self__ = this;
var _35402__$1 = this;
return self__.meta35401;
});

cljs.core.async.t_cljs$core$async35400.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35400.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35400.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35400.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35400.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35400.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35401","meta35401",-755060521,null)], null);
});

cljs.core.async.t_cljs$core$async35400.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35400";

cljs.core.async.t_cljs$core$async35400.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async35400");
});

cljs.core.async.__GT_t_cljs$core$async35400 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35400(map_GT___$1,f__$1,ch__$1,meta35401){
return (new cljs.core.async.t_cljs$core$async35400(map_GT___$1,f__$1,ch__$1,meta35401));
});

}

return (new cljs.core.async.t_cljs$core$async35400(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35406 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35406 = (function (filter_GT_,p,ch,meta35407){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta35407 = meta35407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35408,meta35407__$1){
var self__ = this;
var _35408__$1 = this;
return (new cljs.core.async.t_cljs$core$async35406(self__.filter_GT_,self__.p,self__.ch,meta35407__$1));
});

cljs.core.async.t_cljs$core$async35406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35408){
var self__ = this;
var _35408__$1 = this;
return self__.meta35407;
});

cljs.core.async.t_cljs$core$async35406.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35406.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35406.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35406.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35406.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35406.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35406.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35407","meta35407",2103456320,null)], null);
});

cljs.core.async.t_cljs$core$async35406.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35406";

cljs.core.async.t_cljs$core$async35406.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async35406");
});

cljs.core.async.__GT_t_cljs$core$async35406 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35406(filter_GT___$1,p__$1,ch__$1,meta35407){
return (new cljs.core.async.t_cljs$core$async35406(filter_GT___$1,p__$1,ch__$1,meta35407));
});

}

return (new cljs.core.async.t_cljs$core$async35406(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args35409 = [];
var len__25923__auto___35453 = arguments.length;
var i__25924__auto___35454 = (0);
while(true){
if((i__25924__auto___35454 < len__25923__auto___35453)){
args35409.push((arguments[i__25924__auto___35454]));

var G__35455 = (i__25924__auto___35454 + (1));
i__25924__auto___35454 = G__35455;
continue;
} else {
}
break;
}

var G__35411 = args35409.length;
switch (G__35411) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35409.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33185__auto___35457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___35457,out){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___35457,out){
return (function (state_35432){
var state_val_35433 = (state_35432[(1)]);
if((state_val_35433 === (7))){
var inst_35428 = (state_35432[(2)]);
var state_35432__$1 = state_35432;
var statearr_35434_35458 = state_35432__$1;
(statearr_35434_35458[(2)] = inst_35428);

(statearr_35434_35458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35433 === (1))){
var state_35432__$1 = state_35432;
var statearr_35435_35459 = state_35432__$1;
(statearr_35435_35459[(2)] = null);

(statearr_35435_35459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35433 === (4))){
var inst_35414 = (state_35432[(7)]);
var inst_35414__$1 = (state_35432[(2)]);
var inst_35415 = (inst_35414__$1 == null);
var state_35432__$1 = (function (){var statearr_35436 = state_35432;
(statearr_35436[(7)] = inst_35414__$1);

return statearr_35436;
})();
if(cljs.core.truth_(inst_35415)){
var statearr_35437_35460 = state_35432__$1;
(statearr_35437_35460[(1)] = (5));

} else {
var statearr_35438_35461 = state_35432__$1;
(statearr_35438_35461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35433 === (6))){
var inst_35414 = (state_35432[(7)]);
var inst_35419 = p.call(null,inst_35414);
var state_35432__$1 = state_35432;
if(cljs.core.truth_(inst_35419)){
var statearr_35439_35462 = state_35432__$1;
(statearr_35439_35462[(1)] = (8));

} else {
var statearr_35440_35463 = state_35432__$1;
(statearr_35440_35463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35433 === (3))){
var inst_35430 = (state_35432[(2)]);
var state_35432__$1 = state_35432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35432__$1,inst_35430);
} else {
if((state_val_35433 === (2))){
var state_35432__$1 = state_35432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35432__$1,(4),ch);
} else {
if((state_val_35433 === (11))){
var inst_35422 = (state_35432[(2)]);
var state_35432__$1 = state_35432;
var statearr_35441_35464 = state_35432__$1;
(statearr_35441_35464[(2)] = inst_35422);

(statearr_35441_35464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35433 === (9))){
var state_35432__$1 = state_35432;
var statearr_35442_35465 = state_35432__$1;
(statearr_35442_35465[(2)] = null);

(statearr_35442_35465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35433 === (5))){
var inst_35417 = cljs.core.async.close_BANG_.call(null,out);
var state_35432__$1 = state_35432;
var statearr_35443_35466 = state_35432__$1;
(statearr_35443_35466[(2)] = inst_35417);

(statearr_35443_35466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35433 === (10))){
var inst_35425 = (state_35432[(2)]);
var state_35432__$1 = (function (){var statearr_35444 = state_35432;
(statearr_35444[(8)] = inst_35425);

return statearr_35444;
})();
var statearr_35445_35467 = state_35432__$1;
(statearr_35445_35467[(2)] = null);

(statearr_35445_35467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35433 === (8))){
var inst_35414 = (state_35432[(7)]);
var state_35432__$1 = state_35432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35432__$1,(11),out,inst_35414);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto___35457,out))
;
return ((function (switch__33073__auto__,c__33185__auto___35457,out){
return (function() {
var cljs$core$async$state_machine__33074__auto__ = null;
var cljs$core$async$state_machine__33074__auto____0 = (function (){
var statearr_35449 = [null,null,null,null,null,null,null,null,null];
(statearr_35449[(0)] = cljs$core$async$state_machine__33074__auto__);

(statearr_35449[(1)] = (1));

return statearr_35449;
});
var cljs$core$async$state_machine__33074__auto____1 = (function (state_35432){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_35432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e35450){if((e35450 instanceof Object)){
var ex__33077__auto__ = e35450;
var statearr_35451_35468 = state_35432;
(statearr_35451_35468[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35469 = state_35432;
state_35432 = G__35469;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$state_machine__33074__auto__ = function(state_35432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33074__auto____1.call(this,state_35432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33074__auto____0;
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33074__auto____1;
return cljs$core$async$state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___35457,out))
})();
var state__33187__auto__ = (function (){var statearr_35452 = f__33186__auto__.call(null);
(statearr_35452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___35457);

return statearr_35452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___35457,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args35470 = [];
var len__25923__auto___35473 = arguments.length;
var i__25924__auto___35474 = (0);
while(true){
if((i__25924__auto___35474 < len__25923__auto___35473)){
args35470.push((arguments[i__25924__auto___35474]));

var G__35475 = (i__25924__auto___35474 + (1));
i__25924__auto___35474 = G__35475;
continue;
} else {
}
break;
}

var G__35472 = args35470.length;
switch (G__35472) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35470.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33185__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto__){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto__){
return (function (state_35642){
var state_val_35643 = (state_35642[(1)]);
if((state_val_35643 === (7))){
var inst_35638 = (state_35642[(2)]);
var state_35642__$1 = state_35642;
var statearr_35644_35685 = state_35642__$1;
(statearr_35644_35685[(2)] = inst_35638);

(statearr_35644_35685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (20))){
var inst_35608 = (state_35642[(7)]);
var inst_35619 = (state_35642[(2)]);
var inst_35620 = cljs.core.next.call(null,inst_35608);
var inst_35594 = inst_35620;
var inst_35595 = null;
var inst_35596 = (0);
var inst_35597 = (0);
var state_35642__$1 = (function (){var statearr_35645 = state_35642;
(statearr_35645[(8)] = inst_35596);

(statearr_35645[(9)] = inst_35597);

(statearr_35645[(10)] = inst_35595);

(statearr_35645[(11)] = inst_35594);

(statearr_35645[(12)] = inst_35619);

return statearr_35645;
})();
var statearr_35646_35686 = state_35642__$1;
(statearr_35646_35686[(2)] = null);

(statearr_35646_35686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (1))){
var state_35642__$1 = state_35642;
var statearr_35647_35687 = state_35642__$1;
(statearr_35647_35687[(2)] = null);

(statearr_35647_35687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (4))){
var inst_35583 = (state_35642[(13)]);
var inst_35583__$1 = (state_35642[(2)]);
var inst_35584 = (inst_35583__$1 == null);
var state_35642__$1 = (function (){var statearr_35648 = state_35642;
(statearr_35648[(13)] = inst_35583__$1);

return statearr_35648;
})();
if(cljs.core.truth_(inst_35584)){
var statearr_35649_35688 = state_35642__$1;
(statearr_35649_35688[(1)] = (5));

} else {
var statearr_35650_35689 = state_35642__$1;
(statearr_35650_35689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (15))){
var state_35642__$1 = state_35642;
var statearr_35654_35690 = state_35642__$1;
(statearr_35654_35690[(2)] = null);

(statearr_35654_35690[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (21))){
var state_35642__$1 = state_35642;
var statearr_35655_35691 = state_35642__$1;
(statearr_35655_35691[(2)] = null);

(statearr_35655_35691[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (13))){
var inst_35596 = (state_35642[(8)]);
var inst_35597 = (state_35642[(9)]);
var inst_35595 = (state_35642[(10)]);
var inst_35594 = (state_35642[(11)]);
var inst_35604 = (state_35642[(2)]);
var inst_35605 = (inst_35597 + (1));
var tmp35651 = inst_35596;
var tmp35652 = inst_35595;
var tmp35653 = inst_35594;
var inst_35594__$1 = tmp35653;
var inst_35595__$1 = tmp35652;
var inst_35596__$1 = tmp35651;
var inst_35597__$1 = inst_35605;
var state_35642__$1 = (function (){var statearr_35656 = state_35642;
(statearr_35656[(8)] = inst_35596__$1);

(statearr_35656[(9)] = inst_35597__$1);

(statearr_35656[(10)] = inst_35595__$1);

(statearr_35656[(11)] = inst_35594__$1);

(statearr_35656[(14)] = inst_35604);

return statearr_35656;
})();
var statearr_35657_35692 = state_35642__$1;
(statearr_35657_35692[(2)] = null);

(statearr_35657_35692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (22))){
var state_35642__$1 = state_35642;
var statearr_35658_35693 = state_35642__$1;
(statearr_35658_35693[(2)] = null);

(statearr_35658_35693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (6))){
var inst_35583 = (state_35642[(13)]);
var inst_35592 = f.call(null,inst_35583);
var inst_35593 = cljs.core.seq.call(null,inst_35592);
var inst_35594 = inst_35593;
var inst_35595 = null;
var inst_35596 = (0);
var inst_35597 = (0);
var state_35642__$1 = (function (){var statearr_35659 = state_35642;
(statearr_35659[(8)] = inst_35596);

(statearr_35659[(9)] = inst_35597);

(statearr_35659[(10)] = inst_35595);

(statearr_35659[(11)] = inst_35594);

return statearr_35659;
})();
var statearr_35660_35694 = state_35642__$1;
(statearr_35660_35694[(2)] = null);

(statearr_35660_35694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (17))){
var inst_35608 = (state_35642[(7)]);
var inst_35612 = cljs.core.chunk_first.call(null,inst_35608);
var inst_35613 = cljs.core.chunk_rest.call(null,inst_35608);
var inst_35614 = cljs.core.count.call(null,inst_35612);
var inst_35594 = inst_35613;
var inst_35595 = inst_35612;
var inst_35596 = inst_35614;
var inst_35597 = (0);
var state_35642__$1 = (function (){var statearr_35661 = state_35642;
(statearr_35661[(8)] = inst_35596);

(statearr_35661[(9)] = inst_35597);

(statearr_35661[(10)] = inst_35595);

(statearr_35661[(11)] = inst_35594);

return statearr_35661;
})();
var statearr_35662_35695 = state_35642__$1;
(statearr_35662_35695[(2)] = null);

(statearr_35662_35695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (3))){
var inst_35640 = (state_35642[(2)]);
var state_35642__$1 = state_35642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35642__$1,inst_35640);
} else {
if((state_val_35643 === (12))){
var inst_35628 = (state_35642[(2)]);
var state_35642__$1 = state_35642;
var statearr_35663_35696 = state_35642__$1;
(statearr_35663_35696[(2)] = inst_35628);

(statearr_35663_35696[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (2))){
var state_35642__$1 = state_35642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35642__$1,(4),in$);
} else {
if((state_val_35643 === (23))){
var inst_35636 = (state_35642[(2)]);
var state_35642__$1 = state_35642;
var statearr_35664_35697 = state_35642__$1;
(statearr_35664_35697[(2)] = inst_35636);

(statearr_35664_35697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (19))){
var inst_35623 = (state_35642[(2)]);
var state_35642__$1 = state_35642;
var statearr_35665_35698 = state_35642__$1;
(statearr_35665_35698[(2)] = inst_35623);

(statearr_35665_35698[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (11))){
var inst_35608 = (state_35642[(7)]);
var inst_35594 = (state_35642[(11)]);
var inst_35608__$1 = cljs.core.seq.call(null,inst_35594);
var state_35642__$1 = (function (){var statearr_35666 = state_35642;
(statearr_35666[(7)] = inst_35608__$1);

return statearr_35666;
})();
if(inst_35608__$1){
var statearr_35667_35699 = state_35642__$1;
(statearr_35667_35699[(1)] = (14));

} else {
var statearr_35668_35700 = state_35642__$1;
(statearr_35668_35700[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (9))){
var inst_35630 = (state_35642[(2)]);
var inst_35631 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35642__$1 = (function (){var statearr_35669 = state_35642;
(statearr_35669[(15)] = inst_35630);

return statearr_35669;
})();
if(cljs.core.truth_(inst_35631)){
var statearr_35670_35701 = state_35642__$1;
(statearr_35670_35701[(1)] = (21));

} else {
var statearr_35671_35702 = state_35642__$1;
(statearr_35671_35702[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (5))){
var inst_35586 = cljs.core.async.close_BANG_.call(null,out);
var state_35642__$1 = state_35642;
var statearr_35672_35703 = state_35642__$1;
(statearr_35672_35703[(2)] = inst_35586);

(statearr_35672_35703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (14))){
var inst_35608 = (state_35642[(7)]);
var inst_35610 = cljs.core.chunked_seq_QMARK_.call(null,inst_35608);
var state_35642__$1 = state_35642;
if(inst_35610){
var statearr_35673_35704 = state_35642__$1;
(statearr_35673_35704[(1)] = (17));

} else {
var statearr_35674_35705 = state_35642__$1;
(statearr_35674_35705[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (16))){
var inst_35626 = (state_35642[(2)]);
var state_35642__$1 = state_35642;
var statearr_35675_35706 = state_35642__$1;
(statearr_35675_35706[(2)] = inst_35626);

(statearr_35675_35706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35643 === (10))){
var inst_35597 = (state_35642[(9)]);
var inst_35595 = (state_35642[(10)]);
var inst_35602 = cljs.core._nth.call(null,inst_35595,inst_35597);
var state_35642__$1 = state_35642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35642__$1,(13),out,inst_35602);
} else {
if((state_val_35643 === (18))){
var inst_35608 = (state_35642[(7)]);
var inst_35617 = cljs.core.first.call(null,inst_35608);
var state_35642__$1 = state_35642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35642__$1,(20),out,inst_35617);
} else {
if((state_val_35643 === (8))){
var inst_35596 = (state_35642[(8)]);
var inst_35597 = (state_35642[(9)]);
var inst_35599 = (inst_35597 < inst_35596);
var inst_35600 = inst_35599;
var state_35642__$1 = state_35642;
if(cljs.core.truth_(inst_35600)){
var statearr_35676_35707 = state_35642__$1;
(statearr_35676_35707[(1)] = (10));

} else {
var statearr_35677_35708 = state_35642__$1;
(statearr_35677_35708[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto__))
;
return ((function (switch__33073__auto__,c__33185__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33074__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33074__auto____0 = (function (){
var statearr_35681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35681[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33074__auto__);

(statearr_35681[(1)] = (1));

return statearr_35681;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33074__auto____1 = (function (state_35642){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_35642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e35682){if((e35682 instanceof Object)){
var ex__33077__auto__ = e35682;
var statearr_35683_35709 = state_35642;
(statearr_35683_35709[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35710 = state_35642;
state_35642 = G__35710;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33074__auto__ = function(state_35642){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33074__auto____1.call(this,state_35642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33074__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33074__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto__))
})();
var state__33187__auto__ = (function (){var statearr_35684 = f__33186__auto__.call(null);
(statearr_35684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto__);

return statearr_35684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto__))
);

return c__33185__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args35711 = [];
var len__25923__auto___35714 = arguments.length;
var i__25924__auto___35715 = (0);
while(true){
if((i__25924__auto___35715 < len__25923__auto___35714)){
args35711.push((arguments[i__25924__auto___35715]));

var G__35716 = (i__25924__auto___35715 + (1));
i__25924__auto___35715 = G__35716;
continue;
} else {
}
break;
}

var G__35713 = args35711.length;
switch (G__35713) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35711.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args35718 = [];
var len__25923__auto___35721 = arguments.length;
var i__25924__auto___35722 = (0);
while(true){
if((i__25924__auto___35722 < len__25923__auto___35721)){
args35718.push((arguments[i__25924__auto___35722]));

var G__35723 = (i__25924__auto___35722 + (1));
i__25924__auto___35722 = G__35723;
continue;
} else {
}
break;
}

var G__35720 = args35718.length;
switch (G__35720) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35718.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args35725 = [];
var len__25923__auto___35776 = arguments.length;
var i__25924__auto___35777 = (0);
while(true){
if((i__25924__auto___35777 < len__25923__auto___35776)){
args35725.push((arguments[i__25924__auto___35777]));

var G__35778 = (i__25924__auto___35777 + (1));
i__25924__auto___35777 = G__35778;
continue;
} else {
}
break;
}

var G__35727 = args35725.length;
switch (G__35727) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35725.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33185__auto___35780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___35780,out){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___35780,out){
return (function (state_35751){
var state_val_35752 = (state_35751[(1)]);
if((state_val_35752 === (7))){
var inst_35746 = (state_35751[(2)]);
var state_35751__$1 = state_35751;
var statearr_35753_35781 = state_35751__$1;
(statearr_35753_35781[(2)] = inst_35746);

(statearr_35753_35781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (1))){
var inst_35728 = null;
var state_35751__$1 = (function (){var statearr_35754 = state_35751;
(statearr_35754[(7)] = inst_35728);

return statearr_35754;
})();
var statearr_35755_35782 = state_35751__$1;
(statearr_35755_35782[(2)] = null);

(statearr_35755_35782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (4))){
var inst_35731 = (state_35751[(8)]);
var inst_35731__$1 = (state_35751[(2)]);
var inst_35732 = (inst_35731__$1 == null);
var inst_35733 = cljs.core.not.call(null,inst_35732);
var state_35751__$1 = (function (){var statearr_35756 = state_35751;
(statearr_35756[(8)] = inst_35731__$1);

return statearr_35756;
})();
if(inst_35733){
var statearr_35757_35783 = state_35751__$1;
(statearr_35757_35783[(1)] = (5));

} else {
var statearr_35758_35784 = state_35751__$1;
(statearr_35758_35784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (6))){
var state_35751__$1 = state_35751;
var statearr_35759_35785 = state_35751__$1;
(statearr_35759_35785[(2)] = null);

(statearr_35759_35785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (3))){
var inst_35748 = (state_35751[(2)]);
var inst_35749 = cljs.core.async.close_BANG_.call(null,out);
var state_35751__$1 = (function (){var statearr_35760 = state_35751;
(statearr_35760[(9)] = inst_35748);

return statearr_35760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35751__$1,inst_35749);
} else {
if((state_val_35752 === (2))){
var state_35751__$1 = state_35751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35751__$1,(4),ch);
} else {
if((state_val_35752 === (11))){
var inst_35731 = (state_35751[(8)]);
var inst_35740 = (state_35751[(2)]);
var inst_35728 = inst_35731;
var state_35751__$1 = (function (){var statearr_35761 = state_35751;
(statearr_35761[(7)] = inst_35728);

(statearr_35761[(10)] = inst_35740);

return statearr_35761;
})();
var statearr_35762_35786 = state_35751__$1;
(statearr_35762_35786[(2)] = null);

(statearr_35762_35786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (9))){
var inst_35731 = (state_35751[(8)]);
var state_35751__$1 = state_35751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35751__$1,(11),out,inst_35731);
} else {
if((state_val_35752 === (5))){
var inst_35728 = (state_35751[(7)]);
var inst_35731 = (state_35751[(8)]);
var inst_35735 = cljs.core._EQ_.call(null,inst_35731,inst_35728);
var state_35751__$1 = state_35751;
if(inst_35735){
var statearr_35764_35787 = state_35751__$1;
(statearr_35764_35787[(1)] = (8));

} else {
var statearr_35765_35788 = state_35751__$1;
(statearr_35765_35788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (10))){
var inst_35743 = (state_35751[(2)]);
var state_35751__$1 = state_35751;
var statearr_35766_35789 = state_35751__$1;
(statearr_35766_35789[(2)] = inst_35743);

(statearr_35766_35789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35752 === (8))){
var inst_35728 = (state_35751[(7)]);
var tmp35763 = inst_35728;
var inst_35728__$1 = tmp35763;
var state_35751__$1 = (function (){var statearr_35767 = state_35751;
(statearr_35767[(7)] = inst_35728__$1);

return statearr_35767;
})();
var statearr_35768_35790 = state_35751__$1;
(statearr_35768_35790[(2)] = null);

(statearr_35768_35790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto___35780,out))
;
return ((function (switch__33073__auto__,c__33185__auto___35780,out){
return (function() {
var cljs$core$async$state_machine__33074__auto__ = null;
var cljs$core$async$state_machine__33074__auto____0 = (function (){
var statearr_35772 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35772[(0)] = cljs$core$async$state_machine__33074__auto__);

(statearr_35772[(1)] = (1));

return statearr_35772;
});
var cljs$core$async$state_machine__33074__auto____1 = (function (state_35751){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_35751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e35773){if((e35773 instanceof Object)){
var ex__33077__auto__ = e35773;
var statearr_35774_35791 = state_35751;
(statearr_35774_35791[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35792 = state_35751;
state_35751 = G__35792;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$state_machine__33074__auto__ = function(state_35751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33074__auto____1.call(this,state_35751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33074__auto____0;
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33074__auto____1;
return cljs$core$async$state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___35780,out))
})();
var state__33187__auto__ = (function (){var statearr_35775 = f__33186__auto__.call(null);
(statearr_35775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___35780);

return statearr_35775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___35780,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args35793 = [];
var len__25923__auto___35863 = arguments.length;
var i__25924__auto___35864 = (0);
while(true){
if((i__25924__auto___35864 < len__25923__auto___35863)){
args35793.push((arguments[i__25924__auto___35864]));

var G__35865 = (i__25924__auto___35864 + (1));
i__25924__auto___35864 = G__35865;
continue;
} else {
}
break;
}

var G__35795 = args35793.length;
switch (G__35795) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35793.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33185__auto___35867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___35867,out){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___35867,out){
return (function (state_35833){
var state_val_35834 = (state_35833[(1)]);
if((state_val_35834 === (7))){
var inst_35829 = (state_35833[(2)]);
var state_35833__$1 = state_35833;
var statearr_35835_35868 = state_35833__$1;
(statearr_35835_35868[(2)] = inst_35829);

(statearr_35835_35868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (1))){
var inst_35796 = (new Array(n));
var inst_35797 = inst_35796;
var inst_35798 = (0);
var state_35833__$1 = (function (){var statearr_35836 = state_35833;
(statearr_35836[(7)] = inst_35797);

(statearr_35836[(8)] = inst_35798);

return statearr_35836;
})();
var statearr_35837_35869 = state_35833__$1;
(statearr_35837_35869[(2)] = null);

(statearr_35837_35869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (4))){
var inst_35801 = (state_35833[(9)]);
var inst_35801__$1 = (state_35833[(2)]);
var inst_35802 = (inst_35801__$1 == null);
var inst_35803 = cljs.core.not.call(null,inst_35802);
var state_35833__$1 = (function (){var statearr_35838 = state_35833;
(statearr_35838[(9)] = inst_35801__$1);

return statearr_35838;
})();
if(inst_35803){
var statearr_35839_35870 = state_35833__$1;
(statearr_35839_35870[(1)] = (5));

} else {
var statearr_35840_35871 = state_35833__$1;
(statearr_35840_35871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (15))){
var inst_35823 = (state_35833[(2)]);
var state_35833__$1 = state_35833;
var statearr_35841_35872 = state_35833__$1;
(statearr_35841_35872[(2)] = inst_35823);

(statearr_35841_35872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (13))){
var state_35833__$1 = state_35833;
var statearr_35842_35873 = state_35833__$1;
(statearr_35842_35873[(2)] = null);

(statearr_35842_35873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (6))){
var inst_35798 = (state_35833[(8)]);
var inst_35819 = (inst_35798 > (0));
var state_35833__$1 = state_35833;
if(cljs.core.truth_(inst_35819)){
var statearr_35843_35874 = state_35833__$1;
(statearr_35843_35874[(1)] = (12));

} else {
var statearr_35844_35875 = state_35833__$1;
(statearr_35844_35875[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (3))){
var inst_35831 = (state_35833[(2)]);
var state_35833__$1 = state_35833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35833__$1,inst_35831);
} else {
if((state_val_35834 === (12))){
var inst_35797 = (state_35833[(7)]);
var inst_35821 = cljs.core.vec.call(null,inst_35797);
var state_35833__$1 = state_35833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35833__$1,(15),out,inst_35821);
} else {
if((state_val_35834 === (2))){
var state_35833__$1 = state_35833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35833__$1,(4),ch);
} else {
if((state_val_35834 === (11))){
var inst_35813 = (state_35833[(2)]);
var inst_35814 = (new Array(n));
var inst_35797 = inst_35814;
var inst_35798 = (0);
var state_35833__$1 = (function (){var statearr_35845 = state_35833;
(statearr_35845[(7)] = inst_35797);

(statearr_35845[(10)] = inst_35813);

(statearr_35845[(8)] = inst_35798);

return statearr_35845;
})();
var statearr_35846_35876 = state_35833__$1;
(statearr_35846_35876[(2)] = null);

(statearr_35846_35876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (9))){
var inst_35797 = (state_35833[(7)]);
var inst_35811 = cljs.core.vec.call(null,inst_35797);
var state_35833__$1 = state_35833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35833__$1,(11),out,inst_35811);
} else {
if((state_val_35834 === (5))){
var inst_35797 = (state_35833[(7)]);
var inst_35801 = (state_35833[(9)]);
var inst_35798 = (state_35833[(8)]);
var inst_35806 = (state_35833[(11)]);
var inst_35805 = (inst_35797[inst_35798] = inst_35801);
var inst_35806__$1 = (inst_35798 + (1));
var inst_35807 = (inst_35806__$1 < n);
var state_35833__$1 = (function (){var statearr_35847 = state_35833;
(statearr_35847[(12)] = inst_35805);

(statearr_35847[(11)] = inst_35806__$1);

return statearr_35847;
})();
if(cljs.core.truth_(inst_35807)){
var statearr_35848_35877 = state_35833__$1;
(statearr_35848_35877[(1)] = (8));

} else {
var statearr_35849_35878 = state_35833__$1;
(statearr_35849_35878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (14))){
var inst_35826 = (state_35833[(2)]);
var inst_35827 = cljs.core.async.close_BANG_.call(null,out);
var state_35833__$1 = (function (){var statearr_35851 = state_35833;
(statearr_35851[(13)] = inst_35826);

return statearr_35851;
})();
var statearr_35852_35879 = state_35833__$1;
(statearr_35852_35879[(2)] = inst_35827);

(statearr_35852_35879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (10))){
var inst_35817 = (state_35833[(2)]);
var state_35833__$1 = state_35833;
var statearr_35853_35880 = state_35833__$1;
(statearr_35853_35880[(2)] = inst_35817);

(statearr_35853_35880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35834 === (8))){
var inst_35797 = (state_35833[(7)]);
var inst_35806 = (state_35833[(11)]);
var tmp35850 = inst_35797;
var inst_35797__$1 = tmp35850;
var inst_35798 = inst_35806;
var state_35833__$1 = (function (){var statearr_35854 = state_35833;
(statearr_35854[(7)] = inst_35797__$1);

(statearr_35854[(8)] = inst_35798);

return statearr_35854;
})();
var statearr_35855_35881 = state_35833__$1;
(statearr_35855_35881[(2)] = null);

(statearr_35855_35881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto___35867,out))
;
return ((function (switch__33073__auto__,c__33185__auto___35867,out){
return (function() {
var cljs$core$async$state_machine__33074__auto__ = null;
var cljs$core$async$state_machine__33074__auto____0 = (function (){
var statearr_35859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35859[(0)] = cljs$core$async$state_machine__33074__auto__);

(statearr_35859[(1)] = (1));

return statearr_35859;
});
var cljs$core$async$state_machine__33074__auto____1 = (function (state_35833){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_35833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e35860){if((e35860 instanceof Object)){
var ex__33077__auto__ = e35860;
var statearr_35861_35882 = state_35833;
(statearr_35861_35882[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35883 = state_35833;
state_35833 = G__35883;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$state_machine__33074__auto__ = function(state_35833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33074__auto____1.call(this,state_35833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33074__auto____0;
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33074__auto____1;
return cljs$core$async$state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___35867,out))
})();
var state__33187__auto__ = (function (){var statearr_35862 = f__33186__auto__.call(null);
(statearr_35862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___35867);

return statearr_35862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___35867,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args35884 = [];
var len__25923__auto___35958 = arguments.length;
var i__25924__auto___35959 = (0);
while(true){
if((i__25924__auto___35959 < len__25923__auto___35958)){
args35884.push((arguments[i__25924__auto___35959]));

var G__35960 = (i__25924__auto___35959 + (1));
i__25924__auto___35959 = G__35960;
continue;
} else {
}
break;
}

var G__35886 = args35884.length;
switch (G__35886) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35884.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33185__auto___35962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___35962,out){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___35962,out){
return (function (state_35928){
var state_val_35929 = (state_35928[(1)]);
if((state_val_35929 === (7))){
var inst_35924 = (state_35928[(2)]);
var state_35928__$1 = state_35928;
var statearr_35930_35963 = state_35928__$1;
(statearr_35930_35963[(2)] = inst_35924);

(statearr_35930_35963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (1))){
var inst_35887 = [];
var inst_35888 = inst_35887;
var inst_35889 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35928__$1 = (function (){var statearr_35931 = state_35928;
(statearr_35931[(7)] = inst_35888);

(statearr_35931[(8)] = inst_35889);

return statearr_35931;
})();
var statearr_35932_35964 = state_35928__$1;
(statearr_35932_35964[(2)] = null);

(statearr_35932_35964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (4))){
var inst_35892 = (state_35928[(9)]);
var inst_35892__$1 = (state_35928[(2)]);
var inst_35893 = (inst_35892__$1 == null);
var inst_35894 = cljs.core.not.call(null,inst_35893);
var state_35928__$1 = (function (){var statearr_35933 = state_35928;
(statearr_35933[(9)] = inst_35892__$1);

return statearr_35933;
})();
if(inst_35894){
var statearr_35934_35965 = state_35928__$1;
(statearr_35934_35965[(1)] = (5));

} else {
var statearr_35935_35966 = state_35928__$1;
(statearr_35935_35966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (15))){
var inst_35918 = (state_35928[(2)]);
var state_35928__$1 = state_35928;
var statearr_35936_35967 = state_35928__$1;
(statearr_35936_35967[(2)] = inst_35918);

(statearr_35936_35967[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (13))){
var state_35928__$1 = state_35928;
var statearr_35937_35968 = state_35928__$1;
(statearr_35937_35968[(2)] = null);

(statearr_35937_35968[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (6))){
var inst_35888 = (state_35928[(7)]);
var inst_35913 = inst_35888.length;
var inst_35914 = (inst_35913 > (0));
var state_35928__$1 = state_35928;
if(cljs.core.truth_(inst_35914)){
var statearr_35938_35969 = state_35928__$1;
(statearr_35938_35969[(1)] = (12));

} else {
var statearr_35939_35970 = state_35928__$1;
(statearr_35939_35970[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (3))){
var inst_35926 = (state_35928[(2)]);
var state_35928__$1 = state_35928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35928__$1,inst_35926);
} else {
if((state_val_35929 === (12))){
var inst_35888 = (state_35928[(7)]);
var inst_35916 = cljs.core.vec.call(null,inst_35888);
var state_35928__$1 = state_35928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35928__$1,(15),out,inst_35916);
} else {
if((state_val_35929 === (2))){
var state_35928__$1 = state_35928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35928__$1,(4),ch);
} else {
if((state_val_35929 === (11))){
var inst_35892 = (state_35928[(9)]);
var inst_35896 = (state_35928[(10)]);
var inst_35906 = (state_35928[(2)]);
var inst_35907 = [];
var inst_35908 = inst_35907.push(inst_35892);
var inst_35888 = inst_35907;
var inst_35889 = inst_35896;
var state_35928__$1 = (function (){var statearr_35940 = state_35928;
(statearr_35940[(7)] = inst_35888);

(statearr_35940[(8)] = inst_35889);

(statearr_35940[(11)] = inst_35908);

(statearr_35940[(12)] = inst_35906);

return statearr_35940;
})();
var statearr_35941_35971 = state_35928__$1;
(statearr_35941_35971[(2)] = null);

(statearr_35941_35971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (9))){
var inst_35888 = (state_35928[(7)]);
var inst_35904 = cljs.core.vec.call(null,inst_35888);
var state_35928__$1 = state_35928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35928__$1,(11),out,inst_35904);
} else {
if((state_val_35929 === (5))){
var inst_35892 = (state_35928[(9)]);
var inst_35889 = (state_35928[(8)]);
var inst_35896 = (state_35928[(10)]);
var inst_35896__$1 = f.call(null,inst_35892);
var inst_35897 = cljs.core._EQ_.call(null,inst_35896__$1,inst_35889);
var inst_35898 = cljs.core.keyword_identical_QMARK_.call(null,inst_35889,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35899 = (inst_35897) || (inst_35898);
var state_35928__$1 = (function (){var statearr_35942 = state_35928;
(statearr_35942[(10)] = inst_35896__$1);

return statearr_35942;
})();
if(cljs.core.truth_(inst_35899)){
var statearr_35943_35972 = state_35928__$1;
(statearr_35943_35972[(1)] = (8));

} else {
var statearr_35944_35973 = state_35928__$1;
(statearr_35944_35973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (14))){
var inst_35921 = (state_35928[(2)]);
var inst_35922 = cljs.core.async.close_BANG_.call(null,out);
var state_35928__$1 = (function (){var statearr_35946 = state_35928;
(statearr_35946[(13)] = inst_35921);

return statearr_35946;
})();
var statearr_35947_35974 = state_35928__$1;
(statearr_35947_35974[(2)] = inst_35922);

(statearr_35947_35974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (10))){
var inst_35911 = (state_35928[(2)]);
var state_35928__$1 = state_35928;
var statearr_35948_35975 = state_35928__$1;
(statearr_35948_35975[(2)] = inst_35911);

(statearr_35948_35975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35929 === (8))){
var inst_35888 = (state_35928[(7)]);
var inst_35892 = (state_35928[(9)]);
var inst_35896 = (state_35928[(10)]);
var inst_35901 = inst_35888.push(inst_35892);
var tmp35945 = inst_35888;
var inst_35888__$1 = tmp35945;
var inst_35889 = inst_35896;
var state_35928__$1 = (function (){var statearr_35949 = state_35928;
(statearr_35949[(7)] = inst_35888__$1);

(statearr_35949[(14)] = inst_35901);

(statearr_35949[(8)] = inst_35889);

return statearr_35949;
})();
var statearr_35950_35976 = state_35928__$1;
(statearr_35950_35976[(2)] = null);

(statearr_35950_35976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33185__auto___35962,out))
;
return ((function (switch__33073__auto__,c__33185__auto___35962,out){
return (function() {
var cljs$core$async$state_machine__33074__auto__ = null;
var cljs$core$async$state_machine__33074__auto____0 = (function (){
var statearr_35954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35954[(0)] = cljs$core$async$state_machine__33074__auto__);

(statearr_35954[(1)] = (1));

return statearr_35954;
});
var cljs$core$async$state_machine__33074__auto____1 = (function (state_35928){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_35928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e35955){if((e35955 instanceof Object)){
var ex__33077__auto__ = e35955;
var statearr_35956_35977 = state_35928;
(statearr_35956_35977[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35978 = state_35928;
state_35928 = G__35978;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
cljs$core$async$state_machine__33074__auto__ = function(state_35928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33074__auto____1.call(this,state_35928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33074__auto____0;
cljs$core$async$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33074__auto____1;
return cljs$core$async$state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___35962,out))
})();
var state__33187__auto__ = (function (){var statearr_35957 = f__33186__auto__.call(null);
(statearr_35957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___35962);

return statearr_35957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___35962,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1523250225043