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
var args30202 = [];
var len__25923__auto___30208 = arguments.length;
var i__25924__auto___30209 = (0);
while(true){
if((i__25924__auto___30209 < len__25923__auto___30208)){
args30202.push((arguments[i__25924__auto___30209]));

var G__30210 = (i__25924__auto___30209 + (1));
i__25924__auto___30209 = G__30210;
continue;
} else {
}
break;
}

var G__30204 = args30202.length;
switch (G__30204) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30202.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30205 = (function (f,blockable,meta30206){
this.f = f;
this.blockable = blockable;
this.meta30206 = meta30206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30207,meta30206__$1){
var self__ = this;
var _30207__$1 = this;
return (new cljs.core.async.t_cljs$core$async30205(self__.f,self__.blockable,meta30206__$1));
});

cljs.core.async.t_cljs$core$async30205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30207){
var self__ = this;
var _30207__$1 = this;
return self__.meta30206;
});

cljs.core.async.t_cljs$core$async30205.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30205.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30206","meta30206",-1962671837,null)], null);
});

cljs.core.async.t_cljs$core$async30205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30205";

cljs.core.async.t_cljs$core$async30205.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30205");
});

cljs.core.async.__GT_t_cljs$core$async30205 = (function cljs$core$async$__GT_t_cljs$core$async30205(f__$1,blockable__$1,meta30206){
return (new cljs.core.async.t_cljs$core$async30205(f__$1,blockable__$1,meta30206));
});

}

return (new cljs.core.async.t_cljs$core$async30205(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args30214 = [];
var len__25923__auto___30217 = arguments.length;
var i__25924__auto___30218 = (0);
while(true){
if((i__25924__auto___30218 < len__25923__auto___30217)){
args30214.push((arguments[i__25924__auto___30218]));

var G__30219 = (i__25924__auto___30218 + (1));
i__25924__auto___30218 = G__30219;
continue;
} else {
}
break;
}

var G__30216 = args30214.length;
switch (G__30216) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30214.length)].join('')));

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
var args30221 = [];
var len__25923__auto___30224 = arguments.length;
var i__25924__auto___30225 = (0);
while(true){
if((i__25924__auto___30225 < len__25923__auto___30224)){
args30221.push((arguments[i__25924__auto___30225]));

var G__30226 = (i__25924__auto___30225 + (1));
i__25924__auto___30225 = G__30226;
continue;
} else {
}
break;
}

var G__30223 = args30221.length;
switch (G__30223) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30221.length)].join('')));

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
var args30228 = [];
var len__25923__auto___30231 = arguments.length;
var i__25924__auto___30232 = (0);
while(true){
if((i__25924__auto___30232 < len__25923__auto___30231)){
args30228.push((arguments[i__25924__auto___30232]));

var G__30233 = (i__25924__auto___30232 + (1));
i__25924__auto___30232 = G__30233;
continue;
} else {
}
break;
}

var G__30230 = args30228.length;
switch (G__30230) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30228.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30235 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30235);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30235,ret){
return (function (){
return fn1.call(null,val_30235);
});})(val_30235,ret))
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
var args30236 = [];
var len__25923__auto___30239 = arguments.length;
var i__25924__auto___30240 = (0);
while(true){
if((i__25924__auto___30240 < len__25923__auto___30239)){
args30236.push((arguments[i__25924__auto___30240]));

var G__30241 = (i__25924__auto___30240 + (1));
i__25924__auto___30240 = G__30241;
continue;
} else {
}
break;
}

var G__30238 = args30236.length;
switch (G__30238) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30236.length)].join('')));

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
var n__25763__auto___30243 = n;
var x_30244 = (0);
while(true){
if((x_30244 < n__25763__auto___30243)){
(a[x_30244] = (0));

var G__30245 = (x_30244 + (1));
x_30244 = G__30245;
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

var G__30246 = (i + (1));
i = G__30246;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30250 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30250 = (function (alt_flag,flag,meta30251){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30251 = meta30251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30252,meta30251__$1){
var self__ = this;
var _30252__$1 = this;
return (new cljs.core.async.t_cljs$core$async30250(self__.alt_flag,self__.flag,meta30251__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30250.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30252){
var self__ = this;
var _30252__$1 = this;
return self__.meta30251;
});})(flag))
;

cljs.core.async.t_cljs$core$async30250.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30250.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30250.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30250.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30250.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30251","meta30251",-616205867,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30250.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30250";

cljs.core.async.t_cljs$core$async30250.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30250");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30250 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30250(alt_flag__$1,flag__$1,meta30251){
return (new cljs.core.async.t_cljs$core$async30250(alt_flag__$1,flag__$1,meta30251));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30250(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30256 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30256 = (function (alt_handler,flag,cb,meta30257){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30257 = meta30257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30258,meta30257__$1){
var self__ = this;
var _30258__$1 = this;
return (new cljs.core.async.t_cljs$core$async30256(self__.alt_handler,self__.flag,self__.cb,meta30257__$1));
});

cljs.core.async.t_cljs$core$async30256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30258){
var self__ = this;
var _30258__$1 = this;
return self__.meta30257;
});

cljs.core.async.t_cljs$core$async30256.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30256.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30257","meta30257",283845667,null)], null);
});

cljs.core.async.t_cljs$core$async30256.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30256";

cljs.core.async.t_cljs$core$async30256.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30256");
});

cljs.core.async.__GT_t_cljs$core$async30256 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30256(alt_handler__$1,flag__$1,cb__$1,meta30257){
return (new cljs.core.async.t_cljs$core$async30256(alt_handler__$1,flag__$1,cb__$1,meta30257));
});

}

return (new cljs.core.async.t_cljs$core$async30256(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30259_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30259_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30260_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30260_SHARP_,port], null));
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
var G__30261 = (i + (1));
i = G__30261;
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
var len__25923__auto___30267 = arguments.length;
var i__25924__auto___30268 = (0);
while(true){
if((i__25924__auto___30268 < len__25923__auto___30267)){
args__25930__auto__.push((arguments[i__25924__auto___30268]));

var G__30269 = (i__25924__auto___30268 + (1));
i__25924__auto___30268 = G__30269;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30264){
var map__30265 = p__30264;
var map__30265__$1 = ((((!((map__30265 == null)))?((((map__30265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30265):map__30265);
var opts = map__30265__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30262){
var G__30263 = cljs.core.first.call(null,seq30262);
var seq30262__$1 = cljs.core.next.call(null,seq30262);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30263,seq30262__$1);
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
var args30270 = [];
var len__25923__auto___30320 = arguments.length;
var i__25924__auto___30321 = (0);
while(true){
if((i__25924__auto___30321 < len__25923__auto___30320)){
args30270.push((arguments[i__25924__auto___30321]));

var G__30322 = (i__25924__auto___30321 + (1));
i__25924__auto___30321 = G__30322;
continue;
} else {
}
break;
}

var G__30272 = args30270.length;
switch (G__30272) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30270.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27796__auto___30324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___30324){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___30324){
return (function (state_30296){
var state_val_30297 = (state_30296[(1)]);
if((state_val_30297 === (7))){
var inst_30292 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30298_30325 = state_30296__$1;
(statearr_30298_30325[(2)] = inst_30292);

(statearr_30298_30325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (1))){
var state_30296__$1 = state_30296;
var statearr_30299_30326 = state_30296__$1;
(statearr_30299_30326[(2)] = null);

(statearr_30299_30326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (4))){
var inst_30275 = (state_30296[(7)]);
var inst_30275__$1 = (state_30296[(2)]);
var inst_30276 = (inst_30275__$1 == null);
var state_30296__$1 = (function (){var statearr_30300 = state_30296;
(statearr_30300[(7)] = inst_30275__$1);

return statearr_30300;
})();
if(cljs.core.truth_(inst_30276)){
var statearr_30301_30327 = state_30296__$1;
(statearr_30301_30327[(1)] = (5));

} else {
var statearr_30302_30328 = state_30296__$1;
(statearr_30302_30328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (13))){
var state_30296__$1 = state_30296;
var statearr_30303_30329 = state_30296__$1;
(statearr_30303_30329[(2)] = null);

(statearr_30303_30329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (6))){
var inst_30275 = (state_30296[(7)]);
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30296__$1,(11),to,inst_30275);
} else {
if((state_val_30297 === (3))){
var inst_30294 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30296__$1,inst_30294);
} else {
if((state_val_30297 === (12))){
var state_30296__$1 = state_30296;
var statearr_30304_30330 = state_30296__$1;
(statearr_30304_30330[(2)] = null);

(statearr_30304_30330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (2))){
var state_30296__$1 = state_30296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30296__$1,(4),from);
} else {
if((state_val_30297 === (11))){
var inst_30285 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
if(cljs.core.truth_(inst_30285)){
var statearr_30305_30331 = state_30296__$1;
(statearr_30305_30331[(1)] = (12));

} else {
var statearr_30306_30332 = state_30296__$1;
(statearr_30306_30332[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (9))){
var state_30296__$1 = state_30296;
var statearr_30307_30333 = state_30296__$1;
(statearr_30307_30333[(2)] = null);

(statearr_30307_30333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (5))){
var state_30296__$1 = state_30296;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30308_30334 = state_30296__$1;
(statearr_30308_30334[(1)] = (8));

} else {
var statearr_30309_30335 = state_30296__$1;
(statearr_30309_30335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (14))){
var inst_30290 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30310_30336 = state_30296__$1;
(statearr_30310_30336[(2)] = inst_30290);

(statearr_30310_30336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (10))){
var inst_30282 = (state_30296[(2)]);
var state_30296__$1 = state_30296;
var statearr_30311_30337 = state_30296__$1;
(statearr_30311_30337[(2)] = inst_30282);

(statearr_30311_30337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30297 === (8))){
var inst_30279 = cljs.core.async.close_BANG_.call(null,to);
var state_30296__$1 = state_30296;
var statearr_30312_30338 = state_30296__$1;
(statearr_30312_30338[(2)] = inst_30279);

(statearr_30312_30338[(1)] = (10));


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
});})(c__27796__auto___30324))
;
return ((function (switch__27775__auto__,c__27796__auto___30324){
return (function() {
var cljs$core$async$state_machine__27776__auto__ = null;
var cljs$core$async$state_machine__27776__auto____0 = (function (){
var statearr_30316 = [null,null,null,null,null,null,null,null];
(statearr_30316[(0)] = cljs$core$async$state_machine__27776__auto__);

(statearr_30316[(1)] = (1));

return statearr_30316;
});
var cljs$core$async$state_machine__27776__auto____1 = (function (state_30296){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_30296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e30317){if((e30317 instanceof Object)){
var ex__27779__auto__ = e30317;
var statearr_30318_30339 = state_30296;
(statearr_30318_30339[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30340 = state_30296;
state_30296 = G__30340;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$state_machine__27776__auto__ = function(state_30296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27776__auto____1.call(this,state_30296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27776__auto____0;
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27776__auto____1;
return cljs$core$async$state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___30324))
})();
var state__27798__auto__ = (function (){var statearr_30319 = f__27797__auto__.call(null);
(statearr_30319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___30324);

return statearr_30319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___30324))
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
return (function (p__30528){
var vec__30529 = p__30528;
var v = cljs.core.nth.call(null,vec__30529,(0),null);
var p = cljs.core.nth.call(null,vec__30529,(1),null);
var job = vec__30529;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27796__auto___30715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___30715,res,vec__30529,v,p,job,jobs,results){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___30715,res,vec__30529,v,p,job,jobs,results){
return (function (state_30536){
var state_val_30537 = (state_30536[(1)]);
if((state_val_30537 === (1))){
var state_30536__$1 = state_30536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30536__$1,(2),res,v);
} else {
if((state_val_30537 === (2))){
var inst_30533 = (state_30536[(2)]);
var inst_30534 = cljs.core.async.close_BANG_.call(null,res);
var state_30536__$1 = (function (){var statearr_30538 = state_30536;
(statearr_30538[(7)] = inst_30533);

return statearr_30538;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30536__$1,inst_30534);
} else {
return null;
}
}
});})(c__27796__auto___30715,res,vec__30529,v,p,job,jobs,results))
;
return ((function (switch__27775__auto__,c__27796__auto___30715,res,vec__30529,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____0 = (function (){
var statearr_30542 = [null,null,null,null,null,null,null,null];
(statearr_30542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__);

(statearr_30542[(1)] = (1));

return statearr_30542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____1 = (function (state_30536){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_30536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e30543){if((e30543 instanceof Object)){
var ex__27779__auto__ = e30543;
var statearr_30544_30716 = state_30536;
(statearr_30544_30716[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30717 = state_30536;
state_30536 = G__30717;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__ = function(state_30536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____1.call(this,state_30536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___30715,res,vec__30529,v,p,job,jobs,results))
})();
var state__27798__auto__ = (function (){var statearr_30545 = f__27797__auto__.call(null);
(statearr_30545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___30715);

return statearr_30545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___30715,res,vec__30529,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30546){
var vec__30547 = p__30546;
var v = cljs.core.nth.call(null,vec__30547,(0),null);
var p = cljs.core.nth.call(null,vec__30547,(1),null);
var job = vec__30547;
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
var n__25763__auto___30718 = n;
var __30719 = (0);
while(true){
if((__30719 < n__25763__auto___30718)){
var G__30550_30720 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30550_30720) {
case "compute":
var c__27796__auto___30722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30719,c__27796__auto___30722,G__30550_30720,n__25763__auto___30718,jobs,results,process,async){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (__30719,c__27796__auto___30722,G__30550_30720,n__25763__auto___30718,jobs,results,process,async){
return (function (state_30563){
var state_val_30564 = (state_30563[(1)]);
if((state_val_30564 === (1))){
var state_30563__$1 = state_30563;
var statearr_30565_30723 = state_30563__$1;
(statearr_30565_30723[(2)] = null);

(statearr_30565_30723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (2))){
var state_30563__$1 = state_30563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30563__$1,(4),jobs);
} else {
if((state_val_30564 === (3))){
var inst_30561 = (state_30563[(2)]);
var state_30563__$1 = state_30563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30563__$1,inst_30561);
} else {
if((state_val_30564 === (4))){
var inst_30553 = (state_30563[(2)]);
var inst_30554 = process.call(null,inst_30553);
var state_30563__$1 = state_30563;
if(cljs.core.truth_(inst_30554)){
var statearr_30566_30724 = state_30563__$1;
(statearr_30566_30724[(1)] = (5));

} else {
var statearr_30567_30725 = state_30563__$1;
(statearr_30567_30725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (5))){
var state_30563__$1 = state_30563;
var statearr_30568_30726 = state_30563__$1;
(statearr_30568_30726[(2)] = null);

(statearr_30568_30726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (6))){
var state_30563__$1 = state_30563;
var statearr_30569_30727 = state_30563__$1;
(statearr_30569_30727[(2)] = null);

(statearr_30569_30727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (7))){
var inst_30559 = (state_30563[(2)]);
var state_30563__$1 = state_30563;
var statearr_30570_30728 = state_30563__$1;
(statearr_30570_30728[(2)] = inst_30559);

(statearr_30570_30728[(1)] = (3));


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
});})(__30719,c__27796__auto___30722,G__30550_30720,n__25763__auto___30718,jobs,results,process,async))
;
return ((function (__30719,switch__27775__auto__,c__27796__auto___30722,G__30550_30720,n__25763__auto___30718,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____0 = (function (){
var statearr_30574 = [null,null,null,null,null,null,null];
(statearr_30574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__);

(statearr_30574[(1)] = (1));

return statearr_30574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____1 = (function (state_30563){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_30563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e30575){if((e30575 instanceof Object)){
var ex__27779__auto__ = e30575;
var statearr_30576_30729 = state_30563;
(statearr_30576_30729[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30730 = state_30563;
state_30563 = G__30730;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__ = function(state_30563){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____1.call(this,state_30563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__;
})()
;})(__30719,switch__27775__auto__,c__27796__auto___30722,G__30550_30720,n__25763__auto___30718,jobs,results,process,async))
})();
var state__27798__auto__ = (function (){var statearr_30577 = f__27797__auto__.call(null);
(statearr_30577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___30722);

return statearr_30577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(__30719,c__27796__auto___30722,G__30550_30720,n__25763__auto___30718,jobs,results,process,async))
);


break;
case "async":
var c__27796__auto___30731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30719,c__27796__auto___30731,G__30550_30720,n__25763__auto___30718,jobs,results,process,async){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (__30719,c__27796__auto___30731,G__30550_30720,n__25763__auto___30718,jobs,results,process,async){
return (function (state_30590){
var state_val_30591 = (state_30590[(1)]);
if((state_val_30591 === (1))){
var state_30590__$1 = state_30590;
var statearr_30592_30732 = state_30590__$1;
(statearr_30592_30732[(2)] = null);

(statearr_30592_30732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (2))){
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30590__$1,(4),jobs);
} else {
if((state_val_30591 === (3))){
var inst_30588 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30590__$1,inst_30588);
} else {
if((state_val_30591 === (4))){
var inst_30580 = (state_30590[(2)]);
var inst_30581 = async.call(null,inst_30580);
var state_30590__$1 = state_30590;
if(cljs.core.truth_(inst_30581)){
var statearr_30593_30733 = state_30590__$1;
(statearr_30593_30733[(1)] = (5));

} else {
var statearr_30594_30734 = state_30590__$1;
(statearr_30594_30734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (5))){
var state_30590__$1 = state_30590;
var statearr_30595_30735 = state_30590__$1;
(statearr_30595_30735[(2)] = null);

(statearr_30595_30735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (6))){
var state_30590__$1 = state_30590;
var statearr_30596_30736 = state_30590__$1;
(statearr_30596_30736[(2)] = null);

(statearr_30596_30736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (7))){
var inst_30586 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30597_30737 = state_30590__$1;
(statearr_30597_30737[(2)] = inst_30586);

(statearr_30597_30737[(1)] = (3));


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
});})(__30719,c__27796__auto___30731,G__30550_30720,n__25763__auto___30718,jobs,results,process,async))
;
return ((function (__30719,switch__27775__auto__,c__27796__auto___30731,G__30550_30720,n__25763__auto___30718,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____0 = (function (){
var statearr_30601 = [null,null,null,null,null,null,null];
(statearr_30601[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__);

(statearr_30601[(1)] = (1));

return statearr_30601;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____1 = (function (state_30590){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_30590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e30602){if((e30602 instanceof Object)){
var ex__27779__auto__ = e30602;
var statearr_30603_30738 = state_30590;
(statearr_30603_30738[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30739 = state_30590;
state_30590 = G__30739;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__ = function(state_30590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____1.call(this,state_30590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__;
})()
;})(__30719,switch__27775__auto__,c__27796__auto___30731,G__30550_30720,n__25763__auto___30718,jobs,results,process,async))
})();
var state__27798__auto__ = (function (){var statearr_30604 = f__27797__auto__.call(null);
(statearr_30604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___30731);

return statearr_30604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(__30719,c__27796__auto___30731,G__30550_30720,n__25763__auto___30718,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30740 = (__30719 + (1));
__30719 = G__30740;
continue;
} else {
}
break;
}

var c__27796__auto___30741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___30741,jobs,results,process,async){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___30741,jobs,results,process,async){
return (function (state_30626){
var state_val_30627 = (state_30626[(1)]);
if((state_val_30627 === (1))){
var state_30626__$1 = state_30626;
var statearr_30628_30742 = state_30626__$1;
(statearr_30628_30742[(2)] = null);

(statearr_30628_30742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (2))){
var state_30626__$1 = state_30626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30626__$1,(4),from);
} else {
if((state_val_30627 === (3))){
var inst_30624 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30626__$1,inst_30624);
} else {
if((state_val_30627 === (4))){
var inst_30607 = (state_30626[(7)]);
var inst_30607__$1 = (state_30626[(2)]);
var inst_30608 = (inst_30607__$1 == null);
var state_30626__$1 = (function (){var statearr_30629 = state_30626;
(statearr_30629[(7)] = inst_30607__$1);

return statearr_30629;
})();
if(cljs.core.truth_(inst_30608)){
var statearr_30630_30743 = state_30626__$1;
(statearr_30630_30743[(1)] = (5));

} else {
var statearr_30631_30744 = state_30626__$1;
(statearr_30631_30744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (5))){
var inst_30610 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30626__$1 = state_30626;
var statearr_30632_30745 = state_30626__$1;
(statearr_30632_30745[(2)] = inst_30610);

(statearr_30632_30745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (6))){
var inst_30612 = (state_30626[(8)]);
var inst_30607 = (state_30626[(7)]);
var inst_30612__$1 = cljs.core.async.chan.call(null,(1));
var inst_30613 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30614 = [inst_30607,inst_30612__$1];
var inst_30615 = (new cljs.core.PersistentVector(null,2,(5),inst_30613,inst_30614,null));
var state_30626__$1 = (function (){var statearr_30633 = state_30626;
(statearr_30633[(8)] = inst_30612__$1);

return statearr_30633;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30626__$1,(8),jobs,inst_30615);
} else {
if((state_val_30627 === (7))){
var inst_30622 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
var statearr_30634_30746 = state_30626__$1;
(statearr_30634_30746[(2)] = inst_30622);

(statearr_30634_30746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (8))){
var inst_30612 = (state_30626[(8)]);
var inst_30617 = (state_30626[(2)]);
var state_30626__$1 = (function (){var statearr_30635 = state_30626;
(statearr_30635[(9)] = inst_30617);

return statearr_30635;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30626__$1,(9),results,inst_30612);
} else {
if((state_val_30627 === (9))){
var inst_30619 = (state_30626[(2)]);
var state_30626__$1 = (function (){var statearr_30636 = state_30626;
(statearr_30636[(10)] = inst_30619);

return statearr_30636;
})();
var statearr_30637_30747 = state_30626__$1;
(statearr_30637_30747[(2)] = null);

(statearr_30637_30747[(1)] = (2));


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
});})(c__27796__auto___30741,jobs,results,process,async))
;
return ((function (switch__27775__auto__,c__27796__auto___30741,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____0 = (function (){
var statearr_30641 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__);

(statearr_30641[(1)] = (1));

return statearr_30641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____1 = (function (state_30626){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_30626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e30642){if((e30642 instanceof Object)){
var ex__27779__auto__ = e30642;
var statearr_30643_30748 = state_30626;
(statearr_30643_30748[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30749 = state_30626;
state_30626 = G__30749;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__ = function(state_30626){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____1.call(this,state_30626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___30741,jobs,results,process,async))
})();
var state__27798__auto__ = (function (){var statearr_30644 = f__27797__auto__.call(null);
(statearr_30644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___30741);

return statearr_30644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___30741,jobs,results,process,async))
);


var c__27796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto__,jobs,results,process,async){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto__,jobs,results,process,async){
return (function (state_30682){
var state_val_30683 = (state_30682[(1)]);
if((state_val_30683 === (7))){
var inst_30678 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
var statearr_30684_30750 = state_30682__$1;
(statearr_30684_30750[(2)] = inst_30678);

(statearr_30684_30750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (20))){
var state_30682__$1 = state_30682;
var statearr_30685_30751 = state_30682__$1;
(statearr_30685_30751[(2)] = null);

(statearr_30685_30751[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (1))){
var state_30682__$1 = state_30682;
var statearr_30686_30752 = state_30682__$1;
(statearr_30686_30752[(2)] = null);

(statearr_30686_30752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (4))){
var inst_30647 = (state_30682[(7)]);
var inst_30647__$1 = (state_30682[(2)]);
var inst_30648 = (inst_30647__$1 == null);
var state_30682__$1 = (function (){var statearr_30687 = state_30682;
(statearr_30687[(7)] = inst_30647__$1);

return statearr_30687;
})();
if(cljs.core.truth_(inst_30648)){
var statearr_30688_30753 = state_30682__$1;
(statearr_30688_30753[(1)] = (5));

} else {
var statearr_30689_30754 = state_30682__$1;
(statearr_30689_30754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (15))){
var inst_30660 = (state_30682[(8)]);
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30682__$1,(18),to,inst_30660);
} else {
if((state_val_30683 === (21))){
var inst_30673 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
var statearr_30690_30755 = state_30682__$1;
(statearr_30690_30755[(2)] = inst_30673);

(statearr_30690_30755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (13))){
var inst_30675 = (state_30682[(2)]);
var state_30682__$1 = (function (){var statearr_30691 = state_30682;
(statearr_30691[(9)] = inst_30675);

return statearr_30691;
})();
var statearr_30692_30756 = state_30682__$1;
(statearr_30692_30756[(2)] = null);

(statearr_30692_30756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (6))){
var inst_30647 = (state_30682[(7)]);
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30682__$1,(11),inst_30647);
} else {
if((state_val_30683 === (17))){
var inst_30668 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
if(cljs.core.truth_(inst_30668)){
var statearr_30693_30757 = state_30682__$1;
(statearr_30693_30757[(1)] = (19));

} else {
var statearr_30694_30758 = state_30682__$1;
(statearr_30694_30758[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (3))){
var inst_30680 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30682__$1,inst_30680);
} else {
if((state_val_30683 === (12))){
var inst_30657 = (state_30682[(10)]);
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30682__$1,(14),inst_30657);
} else {
if((state_val_30683 === (2))){
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30682__$1,(4),results);
} else {
if((state_val_30683 === (19))){
var state_30682__$1 = state_30682;
var statearr_30695_30759 = state_30682__$1;
(statearr_30695_30759[(2)] = null);

(statearr_30695_30759[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (11))){
var inst_30657 = (state_30682[(2)]);
var state_30682__$1 = (function (){var statearr_30696 = state_30682;
(statearr_30696[(10)] = inst_30657);

return statearr_30696;
})();
var statearr_30697_30760 = state_30682__$1;
(statearr_30697_30760[(2)] = null);

(statearr_30697_30760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (9))){
var state_30682__$1 = state_30682;
var statearr_30698_30761 = state_30682__$1;
(statearr_30698_30761[(2)] = null);

(statearr_30698_30761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (5))){
var state_30682__$1 = state_30682;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30699_30762 = state_30682__$1;
(statearr_30699_30762[(1)] = (8));

} else {
var statearr_30700_30763 = state_30682__$1;
(statearr_30700_30763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (14))){
var inst_30662 = (state_30682[(11)]);
var inst_30660 = (state_30682[(8)]);
var inst_30660__$1 = (state_30682[(2)]);
var inst_30661 = (inst_30660__$1 == null);
var inst_30662__$1 = cljs.core.not.call(null,inst_30661);
var state_30682__$1 = (function (){var statearr_30701 = state_30682;
(statearr_30701[(11)] = inst_30662__$1);

(statearr_30701[(8)] = inst_30660__$1);

return statearr_30701;
})();
if(inst_30662__$1){
var statearr_30702_30764 = state_30682__$1;
(statearr_30702_30764[(1)] = (15));

} else {
var statearr_30703_30765 = state_30682__$1;
(statearr_30703_30765[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (16))){
var inst_30662 = (state_30682[(11)]);
var state_30682__$1 = state_30682;
var statearr_30704_30766 = state_30682__$1;
(statearr_30704_30766[(2)] = inst_30662);

(statearr_30704_30766[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (10))){
var inst_30654 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
var statearr_30705_30767 = state_30682__$1;
(statearr_30705_30767[(2)] = inst_30654);

(statearr_30705_30767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (18))){
var inst_30665 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
var statearr_30706_30768 = state_30682__$1;
(statearr_30706_30768[(2)] = inst_30665);

(statearr_30706_30768[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (8))){
var inst_30651 = cljs.core.async.close_BANG_.call(null,to);
var state_30682__$1 = state_30682;
var statearr_30707_30769 = state_30682__$1;
(statearr_30707_30769[(2)] = inst_30651);

(statearr_30707_30769[(1)] = (10));


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
});})(c__27796__auto__,jobs,results,process,async))
;
return ((function (switch__27775__auto__,c__27796__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____0 = (function (){
var statearr_30711 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__);

(statearr_30711[(1)] = (1));

return statearr_30711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____1 = (function (state_30682){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_30682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e30712){if((e30712 instanceof Object)){
var ex__27779__auto__ = e30712;
var statearr_30713_30770 = state_30682;
(statearr_30713_30770[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30771 = state_30682;
state_30682 = G__30771;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__ = function(state_30682){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____1.call(this,state_30682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto__,jobs,results,process,async))
})();
var state__27798__auto__ = (function (){var statearr_30714 = f__27797__auto__.call(null);
(statearr_30714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto__);

return statearr_30714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto__,jobs,results,process,async))
);

return c__27796__auto__;
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
var args30772 = [];
var len__25923__auto___30775 = arguments.length;
var i__25924__auto___30776 = (0);
while(true){
if((i__25924__auto___30776 < len__25923__auto___30775)){
args30772.push((arguments[i__25924__auto___30776]));

var G__30777 = (i__25924__auto___30776 + (1));
i__25924__auto___30776 = G__30777;
continue;
} else {
}
break;
}

var G__30774 = args30772.length;
switch (G__30774) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30772.length)].join('')));

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
var args30779 = [];
var len__25923__auto___30782 = arguments.length;
var i__25924__auto___30783 = (0);
while(true){
if((i__25924__auto___30783 < len__25923__auto___30782)){
args30779.push((arguments[i__25924__auto___30783]));

var G__30784 = (i__25924__auto___30783 + (1));
i__25924__auto___30783 = G__30784;
continue;
} else {
}
break;
}

var G__30781 = args30779.length;
switch (G__30781) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30779.length)].join('')));

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
var args30786 = [];
var len__25923__auto___30839 = arguments.length;
var i__25924__auto___30840 = (0);
while(true){
if((i__25924__auto___30840 < len__25923__auto___30839)){
args30786.push((arguments[i__25924__auto___30840]));

var G__30841 = (i__25924__auto___30840 + (1));
i__25924__auto___30840 = G__30841;
continue;
} else {
}
break;
}

var G__30788 = args30786.length;
switch (G__30788) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30786.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27796__auto___30843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___30843,tc,fc){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___30843,tc,fc){
return (function (state_30814){
var state_val_30815 = (state_30814[(1)]);
if((state_val_30815 === (7))){
var inst_30810 = (state_30814[(2)]);
var state_30814__$1 = state_30814;
var statearr_30816_30844 = state_30814__$1;
(statearr_30816_30844[(2)] = inst_30810);

(statearr_30816_30844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (1))){
var state_30814__$1 = state_30814;
var statearr_30817_30845 = state_30814__$1;
(statearr_30817_30845[(2)] = null);

(statearr_30817_30845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (4))){
var inst_30791 = (state_30814[(7)]);
var inst_30791__$1 = (state_30814[(2)]);
var inst_30792 = (inst_30791__$1 == null);
var state_30814__$1 = (function (){var statearr_30818 = state_30814;
(statearr_30818[(7)] = inst_30791__$1);

return statearr_30818;
})();
if(cljs.core.truth_(inst_30792)){
var statearr_30819_30846 = state_30814__$1;
(statearr_30819_30846[(1)] = (5));

} else {
var statearr_30820_30847 = state_30814__$1;
(statearr_30820_30847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (13))){
var state_30814__$1 = state_30814;
var statearr_30821_30848 = state_30814__$1;
(statearr_30821_30848[(2)] = null);

(statearr_30821_30848[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (6))){
var inst_30791 = (state_30814[(7)]);
var inst_30797 = p.call(null,inst_30791);
var state_30814__$1 = state_30814;
if(cljs.core.truth_(inst_30797)){
var statearr_30822_30849 = state_30814__$1;
(statearr_30822_30849[(1)] = (9));

} else {
var statearr_30823_30850 = state_30814__$1;
(statearr_30823_30850[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (3))){
var inst_30812 = (state_30814[(2)]);
var state_30814__$1 = state_30814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30814__$1,inst_30812);
} else {
if((state_val_30815 === (12))){
var state_30814__$1 = state_30814;
var statearr_30824_30851 = state_30814__$1;
(statearr_30824_30851[(2)] = null);

(statearr_30824_30851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (2))){
var state_30814__$1 = state_30814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30814__$1,(4),ch);
} else {
if((state_val_30815 === (11))){
var inst_30791 = (state_30814[(7)]);
var inst_30801 = (state_30814[(2)]);
var state_30814__$1 = state_30814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30814__$1,(8),inst_30801,inst_30791);
} else {
if((state_val_30815 === (9))){
var state_30814__$1 = state_30814;
var statearr_30825_30852 = state_30814__$1;
(statearr_30825_30852[(2)] = tc);

(statearr_30825_30852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (5))){
var inst_30794 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30795 = cljs.core.async.close_BANG_.call(null,fc);
var state_30814__$1 = (function (){var statearr_30826 = state_30814;
(statearr_30826[(8)] = inst_30794);

return statearr_30826;
})();
var statearr_30827_30853 = state_30814__$1;
(statearr_30827_30853[(2)] = inst_30795);

(statearr_30827_30853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (14))){
var inst_30808 = (state_30814[(2)]);
var state_30814__$1 = state_30814;
var statearr_30828_30854 = state_30814__$1;
(statearr_30828_30854[(2)] = inst_30808);

(statearr_30828_30854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (10))){
var state_30814__$1 = state_30814;
var statearr_30829_30855 = state_30814__$1;
(statearr_30829_30855[(2)] = fc);

(statearr_30829_30855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30815 === (8))){
var inst_30803 = (state_30814[(2)]);
var state_30814__$1 = state_30814;
if(cljs.core.truth_(inst_30803)){
var statearr_30830_30856 = state_30814__$1;
(statearr_30830_30856[(1)] = (12));

} else {
var statearr_30831_30857 = state_30814__$1;
(statearr_30831_30857[(1)] = (13));

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
});})(c__27796__auto___30843,tc,fc))
;
return ((function (switch__27775__auto__,c__27796__auto___30843,tc,fc){
return (function() {
var cljs$core$async$state_machine__27776__auto__ = null;
var cljs$core$async$state_machine__27776__auto____0 = (function (){
var statearr_30835 = [null,null,null,null,null,null,null,null,null];
(statearr_30835[(0)] = cljs$core$async$state_machine__27776__auto__);

(statearr_30835[(1)] = (1));

return statearr_30835;
});
var cljs$core$async$state_machine__27776__auto____1 = (function (state_30814){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_30814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e30836){if((e30836 instanceof Object)){
var ex__27779__auto__ = e30836;
var statearr_30837_30858 = state_30814;
(statearr_30837_30858[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30859 = state_30814;
state_30814 = G__30859;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$state_machine__27776__auto__ = function(state_30814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27776__auto____1.call(this,state_30814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27776__auto____0;
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27776__auto____1;
return cljs$core$async$state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___30843,tc,fc))
})();
var state__27798__auto__ = (function (){var statearr_30838 = f__27797__auto__.call(null);
(statearr_30838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___30843);

return statearr_30838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___30843,tc,fc))
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
var c__27796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto__){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto__){
return (function (state_30923){
var state_val_30924 = (state_30923[(1)]);
if((state_val_30924 === (7))){
var inst_30919 = (state_30923[(2)]);
var state_30923__$1 = state_30923;
var statearr_30925_30946 = state_30923__$1;
(statearr_30925_30946[(2)] = inst_30919);

(statearr_30925_30946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30924 === (1))){
var inst_30903 = init;
var state_30923__$1 = (function (){var statearr_30926 = state_30923;
(statearr_30926[(7)] = inst_30903);

return statearr_30926;
})();
var statearr_30927_30947 = state_30923__$1;
(statearr_30927_30947[(2)] = null);

(statearr_30927_30947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30924 === (4))){
var inst_30906 = (state_30923[(8)]);
var inst_30906__$1 = (state_30923[(2)]);
var inst_30907 = (inst_30906__$1 == null);
var state_30923__$1 = (function (){var statearr_30928 = state_30923;
(statearr_30928[(8)] = inst_30906__$1);

return statearr_30928;
})();
if(cljs.core.truth_(inst_30907)){
var statearr_30929_30948 = state_30923__$1;
(statearr_30929_30948[(1)] = (5));

} else {
var statearr_30930_30949 = state_30923__$1;
(statearr_30930_30949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30924 === (6))){
var inst_30910 = (state_30923[(9)]);
var inst_30903 = (state_30923[(7)]);
var inst_30906 = (state_30923[(8)]);
var inst_30910__$1 = f.call(null,inst_30903,inst_30906);
var inst_30911 = cljs.core.reduced_QMARK_.call(null,inst_30910__$1);
var state_30923__$1 = (function (){var statearr_30931 = state_30923;
(statearr_30931[(9)] = inst_30910__$1);

return statearr_30931;
})();
if(inst_30911){
var statearr_30932_30950 = state_30923__$1;
(statearr_30932_30950[(1)] = (8));

} else {
var statearr_30933_30951 = state_30923__$1;
(statearr_30933_30951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30924 === (3))){
var inst_30921 = (state_30923[(2)]);
var state_30923__$1 = state_30923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30923__$1,inst_30921);
} else {
if((state_val_30924 === (2))){
var state_30923__$1 = state_30923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30923__$1,(4),ch);
} else {
if((state_val_30924 === (9))){
var inst_30910 = (state_30923[(9)]);
var inst_30903 = inst_30910;
var state_30923__$1 = (function (){var statearr_30934 = state_30923;
(statearr_30934[(7)] = inst_30903);

return statearr_30934;
})();
var statearr_30935_30952 = state_30923__$1;
(statearr_30935_30952[(2)] = null);

(statearr_30935_30952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30924 === (5))){
var inst_30903 = (state_30923[(7)]);
var state_30923__$1 = state_30923;
var statearr_30936_30953 = state_30923__$1;
(statearr_30936_30953[(2)] = inst_30903);

(statearr_30936_30953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30924 === (10))){
var inst_30917 = (state_30923[(2)]);
var state_30923__$1 = state_30923;
var statearr_30937_30954 = state_30923__$1;
(statearr_30937_30954[(2)] = inst_30917);

(statearr_30937_30954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30924 === (8))){
var inst_30910 = (state_30923[(9)]);
var inst_30913 = cljs.core.deref.call(null,inst_30910);
var state_30923__$1 = state_30923;
var statearr_30938_30955 = state_30923__$1;
(statearr_30938_30955[(2)] = inst_30913);

(statearr_30938_30955[(1)] = (10));


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
});})(c__27796__auto__))
;
return ((function (switch__27775__auto__,c__27796__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27776__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27776__auto____0 = (function (){
var statearr_30942 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30942[(0)] = cljs$core$async$reduce_$_state_machine__27776__auto__);

(statearr_30942[(1)] = (1));

return statearr_30942;
});
var cljs$core$async$reduce_$_state_machine__27776__auto____1 = (function (state_30923){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_30923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e30943){if((e30943 instanceof Object)){
var ex__27779__auto__ = e30943;
var statearr_30944_30956 = state_30923;
(statearr_30944_30956[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30957 = state_30923;
state_30923 = G__30957;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27776__auto__ = function(state_30923){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27776__auto____1.call(this,state_30923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27776__auto____0;
cljs$core$async$reduce_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27776__auto____1;
return cljs$core$async$reduce_$_state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto__))
})();
var state__27798__auto__ = (function (){var statearr_30945 = f__27797__auto__.call(null);
(statearr_30945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto__);

return statearr_30945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto__))
);

return c__27796__auto__;
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
var args30958 = [];
var len__25923__auto___31010 = arguments.length;
var i__25924__auto___31011 = (0);
while(true){
if((i__25924__auto___31011 < len__25923__auto___31010)){
args30958.push((arguments[i__25924__auto___31011]));

var G__31012 = (i__25924__auto___31011 + (1));
i__25924__auto___31011 = G__31012;
continue;
} else {
}
break;
}

var G__30960 = args30958.length;
switch (G__30960) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30958.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto__){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto__){
return (function (state_30985){
var state_val_30986 = (state_30985[(1)]);
if((state_val_30986 === (7))){
var inst_30967 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_30987_31014 = state_30985__$1;
(statearr_30987_31014[(2)] = inst_30967);

(statearr_30987_31014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (1))){
var inst_30961 = cljs.core.seq.call(null,coll);
var inst_30962 = inst_30961;
var state_30985__$1 = (function (){var statearr_30988 = state_30985;
(statearr_30988[(7)] = inst_30962);

return statearr_30988;
})();
var statearr_30989_31015 = state_30985__$1;
(statearr_30989_31015[(2)] = null);

(statearr_30989_31015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (4))){
var inst_30962 = (state_30985[(7)]);
var inst_30965 = cljs.core.first.call(null,inst_30962);
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30985__$1,(7),ch,inst_30965);
} else {
if((state_val_30986 === (13))){
var inst_30979 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_30990_31016 = state_30985__$1;
(statearr_30990_31016[(2)] = inst_30979);

(statearr_30990_31016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (6))){
var inst_30970 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
if(cljs.core.truth_(inst_30970)){
var statearr_30991_31017 = state_30985__$1;
(statearr_30991_31017[(1)] = (8));

} else {
var statearr_30992_31018 = state_30985__$1;
(statearr_30992_31018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (3))){
var inst_30983 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30985__$1,inst_30983);
} else {
if((state_val_30986 === (12))){
var state_30985__$1 = state_30985;
var statearr_30993_31019 = state_30985__$1;
(statearr_30993_31019[(2)] = null);

(statearr_30993_31019[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (2))){
var inst_30962 = (state_30985[(7)]);
var state_30985__$1 = state_30985;
if(cljs.core.truth_(inst_30962)){
var statearr_30994_31020 = state_30985__$1;
(statearr_30994_31020[(1)] = (4));

} else {
var statearr_30995_31021 = state_30985__$1;
(statearr_30995_31021[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (11))){
var inst_30976 = cljs.core.async.close_BANG_.call(null,ch);
var state_30985__$1 = state_30985;
var statearr_30996_31022 = state_30985__$1;
(statearr_30996_31022[(2)] = inst_30976);

(statearr_30996_31022[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (9))){
var state_30985__$1 = state_30985;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30997_31023 = state_30985__$1;
(statearr_30997_31023[(1)] = (11));

} else {
var statearr_30998_31024 = state_30985__$1;
(statearr_30998_31024[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (5))){
var inst_30962 = (state_30985[(7)]);
var state_30985__$1 = state_30985;
var statearr_30999_31025 = state_30985__$1;
(statearr_30999_31025[(2)] = inst_30962);

(statearr_30999_31025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (10))){
var inst_30981 = (state_30985[(2)]);
var state_30985__$1 = state_30985;
var statearr_31000_31026 = state_30985__$1;
(statearr_31000_31026[(2)] = inst_30981);

(statearr_31000_31026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30986 === (8))){
var inst_30962 = (state_30985[(7)]);
var inst_30972 = cljs.core.next.call(null,inst_30962);
var inst_30962__$1 = inst_30972;
var state_30985__$1 = (function (){var statearr_31001 = state_30985;
(statearr_31001[(7)] = inst_30962__$1);

return statearr_31001;
})();
var statearr_31002_31027 = state_30985__$1;
(statearr_31002_31027[(2)] = null);

(statearr_31002_31027[(1)] = (2));


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
});})(c__27796__auto__))
;
return ((function (switch__27775__auto__,c__27796__auto__){
return (function() {
var cljs$core$async$state_machine__27776__auto__ = null;
var cljs$core$async$state_machine__27776__auto____0 = (function (){
var statearr_31006 = [null,null,null,null,null,null,null,null];
(statearr_31006[(0)] = cljs$core$async$state_machine__27776__auto__);

(statearr_31006[(1)] = (1));

return statearr_31006;
});
var cljs$core$async$state_machine__27776__auto____1 = (function (state_30985){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_30985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e31007){if((e31007 instanceof Object)){
var ex__27779__auto__ = e31007;
var statearr_31008_31028 = state_30985;
(statearr_31008_31028[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31029 = state_30985;
state_30985 = G__31029;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$state_machine__27776__auto__ = function(state_30985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27776__auto____1.call(this,state_30985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27776__auto____0;
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27776__auto____1;
return cljs$core$async$state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto__))
})();
var state__27798__auto__ = (function (){var statearr_31009 = f__27797__auto__.call(null);
(statearr_31009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto__);

return statearr_31009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto__))
);

return c__27796__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async31255 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31255 = (function (mult,ch,cs,meta31256){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31256 = meta31256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31257,meta31256__$1){
var self__ = this;
var _31257__$1 = this;
return (new cljs.core.async.t_cljs$core$async31255(self__.mult,self__.ch,self__.cs,meta31256__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31257){
var self__ = this;
var _31257__$1 = this;
return self__.meta31256;
});})(cs))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31255.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31256","meta31256",-38736745,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31255";

cljs.core.async.t_cljs$core$async31255.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31255");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31255 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31255(mult__$1,ch__$1,cs__$1,meta31256){
return (new cljs.core.async.t_cljs$core$async31255(mult__$1,ch__$1,cs__$1,meta31256));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31255(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27796__auto___31480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___31480,cs,m,dchan,dctr,done){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___31480,cs,m,dchan,dctr,done){
return (function (state_31392){
var state_val_31393 = (state_31392[(1)]);
if((state_val_31393 === (7))){
var inst_31388 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31394_31481 = state_31392__$1;
(statearr_31394_31481[(2)] = inst_31388);

(statearr_31394_31481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (20))){
var inst_31291 = (state_31392[(7)]);
var inst_31303 = cljs.core.first.call(null,inst_31291);
var inst_31304 = cljs.core.nth.call(null,inst_31303,(0),null);
var inst_31305 = cljs.core.nth.call(null,inst_31303,(1),null);
var state_31392__$1 = (function (){var statearr_31395 = state_31392;
(statearr_31395[(8)] = inst_31304);

return statearr_31395;
})();
if(cljs.core.truth_(inst_31305)){
var statearr_31396_31482 = state_31392__$1;
(statearr_31396_31482[(1)] = (22));

} else {
var statearr_31397_31483 = state_31392__$1;
(statearr_31397_31483[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (27))){
var inst_31340 = (state_31392[(9)]);
var inst_31335 = (state_31392[(10)]);
var inst_31260 = (state_31392[(11)]);
var inst_31333 = (state_31392[(12)]);
var inst_31340__$1 = cljs.core._nth.call(null,inst_31333,inst_31335);
var inst_31341 = cljs.core.async.put_BANG_.call(null,inst_31340__$1,inst_31260,done);
var state_31392__$1 = (function (){var statearr_31398 = state_31392;
(statearr_31398[(9)] = inst_31340__$1);

return statearr_31398;
})();
if(cljs.core.truth_(inst_31341)){
var statearr_31399_31484 = state_31392__$1;
(statearr_31399_31484[(1)] = (30));

} else {
var statearr_31400_31485 = state_31392__$1;
(statearr_31400_31485[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (1))){
var state_31392__$1 = state_31392;
var statearr_31401_31486 = state_31392__$1;
(statearr_31401_31486[(2)] = null);

(statearr_31401_31486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (24))){
var inst_31291 = (state_31392[(7)]);
var inst_31310 = (state_31392[(2)]);
var inst_31311 = cljs.core.next.call(null,inst_31291);
var inst_31269 = inst_31311;
var inst_31270 = null;
var inst_31271 = (0);
var inst_31272 = (0);
var state_31392__$1 = (function (){var statearr_31402 = state_31392;
(statearr_31402[(13)] = inst_31269);

(statearr_31402[(14)] = inst_31310);

(statearr_31402[(15)] = inst_31271);

(statearr_31402[(16)] = inst_31270);

(statearr_31402[(17)] = inst_31272);

return statearr_31402;
})();
var statearr_31403_31487 = state_31392__$1;
(statearr_31403_31487[(2)] = null);

(statearr_31403_31487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (39))){
var state_31392__$1 = state_31392;
var statearr_31407_31488 = state_31392__$1;
(statearr_31407_31488[(2)] = null);

(statearr_31407_31488[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (4))){
var inst_31260 = (state_31392[(11)]);
var inst_31260__$1 = (state_31392[(2)]);
var inst_31261 = (inst_31260__$1 == null);
var state_31392__$1 = (function (){var statearr_31408 = state_31392;
(statearr_31408[(11)] = inst_31260__$1);

return statearr_31408;
})();
if(cljs.core.truth_(inst_31261)){
var statearr_31409_31489 = state_31392__$1;
(statearr_31409_31489[(1)] = (5));

} else {
var statearr_31410_31490 = state_31392__$1;
(statearr_31410_31490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (15))){
var inst_31269 = (state_31392[(13)]);
var inst_31271 = (state_31392[(15)]);
var inst_31270 = (state_31392[(16)]);
var inst_31272 = (state_31392[(17)]);
var inst_31287 = (state_31392[(2)]);
var inst_31288 = (inst_31272 + (1));
var tmp31404 = inst_31269;
var tmp31405 = inst_31271;
var tmp31406 = inst_31270;
var inst_31269__$1 = tmp31404;
var inst_31270__$1 = tmp31406;
var inst_31271__$1 = tmp31405;
var inst_31272__$1 = inst_31288;
var state_31392__$1 = (function (){var statearr_31411 = state_31392;
(statearr_31411[(13)] = inst_31269__$1);

(statearr_31411[(15)] = inst_31271__$1);

(statearr_31411[(16)] = inst_31270__$1);

(statearr_31411[(17)] = inst_31272__$1);

(statearr_31411[(18)] = inst_31287);

return statearr_31411;
})();
var statearr_31412_31491 = state_31392__$1;
(statearr_31412_31491[(2)] = null);

(statearr_31412_31491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (21))){
var inst_31314 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31416_31492 = state_31392__$1;
(statearr_31416_31492[(2)] = inst_31314);

(statearr_31416_31492[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (31))){
var inst_31340 = (state_31392[(9)]);
var inst_31344 = done.call(null,null);
var inst_31345 = cljs.core.async.untap_STAR_.call(null,m,inst_31340);
var state_31392__$1 = (function (){var statearr_31417 = state_31392;
(statearr_31417[(19)] = inst_31344);

return statearr_31417;
})();
var statearr_31418_31493 = state_31392__$1;
(statearr_31418_31493[(2)] = inst_31345);

(statearr_31418_31493[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (32))){
var inst_31334 = (state_31392[(20)]);
var inst_31332 = (state_31392[(21)]);
var inst_31335 = (state_31392[(10)]);
var inst_31333 = (state_31392[(12)]);
var inst_31347 = (state_31392[(2)]);
var inst_31348 = (inst_31335 + (1));
var tmp31413 = inst_31334;
var tmp31414 = inst_31332;
var tmp31415 = inst_31333;
var inst_31332__$1 = tmp31414;
var inst_31333__$1 = tmp31415;
var inst_31334__$1 = tmp31413;
var inst_31335__$1 = inst_31348;
var state_31392__$1 = (function (){var statearr_31419 = state_31392;
(statearr_31419[(20)] = inst_31334__$1);

(statearr_31419[(22)] = inst_31347);

(statearr_31419[(21)] = inst_31332__$1);

(statearr_31419[(10)] = inst_31335__$1);

(statearr_31419[(12)] = inst_31333__$1);

return statearr_31419;
})();
var statearr_31420_31494 = state_31392__$1;
(statearr_31420_31494[(2)] = null);

(statearr_31420_31494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (40))){
var inst_31360 = (state_31392[(23)]);
var inst_31364 = done.call(null,null);
var inst_31365 = cljs.core.async.untap_STAR_.call(null,m,inst_31360);
var state_31392__$1 = (function (){var statearr_31421 = state_31392;
(statearr_31421[(24)] = inst_31364);

return statearr_31421;
})();
var statearr_31422_31495 = state_31392__$1;
(statearr_31422_31495[(2)] = inst_31365);

(statearr_31422_31495[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (33))){
var inst_31351 = (state_31392[(25)]);
var inst_31353 = cljs.core.chunked_seq_QMARK_.call(null,inst_31351);
var state_31392__$1 = state_31392;
if(inst_31353){
var statearr_31423_31496 = state_31392__$1;
(statearr_31423_31496[(1)] = (36));

} else {
var statearr_31424_31497 = state_31392__$1;
(statearr_31424_31497[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (13))){
var inst_31281 = (state_31392[(26)]);
var inst_31284 = cljs.core.async.close_BANG_.call(null,inst_31281);
var state_31392__$1 = state_31392;
var statearr_31425_31498 = state_31392__$1;
(statearr_31425_31498[(2)] = inst_31284);

(statearr_31425_31498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (22))){
var inst_31304 = (state_31392[(8)]);
var inst_31307 = cljs.core.async.close_BANG_.call(null,inst_31304);
var state_31392__$1 = state_31392;
var statearr_31426_31499 = state_31392__$1;
(statearr_31426_31499[(2)] = inst_31307);

(statearr_31426_31499[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (36))){
var inst_31351 = (state_31392[(25)]);
var inst_31355 = cljs.core.chunk_first.call(null,inst_31351);
var inst_31356 = cljs.core.chunk_rest.call(null,inst_31351);
var inst_31357 = cljs.core.count.call(null,inst_31355);
var inst_31332 = inst_31356;
var inst_31333 = inst_31355;
var inst_31334 = inst_31357;
var inst_31335 = (0);
var state_31392__$1 = (function (){var statearr_31427 = state_31392;
(statearr_31427[(20)] = inst_31334);

(statearr_31427[(21)] = inst_31332);

(statearr_31427[(10)] = inst_31335);

(statearr_31427[(12)] = inst_31333);

return statearr_31427;
})();
var statearr_31428_31500 = state_31392__$1;
(statearr_31428_31500[(2)] = null);

(statearr_31428_31500[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (41))){
var inst_31351 = (state_31392[(25)]);
var inst_31367 = (state_31392[(2)]);
var inst_31368 = cljs.core.next.call(null,inst_31351);
var inst_31332 = inst_31368;
var inst_31333 = null;
var inst_31334 = (0);
var inst_31335 = (0);
var state_31392__$1 = (function (){var statearr_31429 = state_31392;
(statearr_31429[(20)] = inst_31334);

(statearr_31429[(27)] = inst_31367);

(statearr_31429[(21)] = inst_31332);

(statearr_31429[(10)] = inst_31335);

(statearr_31429[(12)] = inst_31333);

return statearr_31429;
})();
var statearr_31430_31501 = state_31392__$1;
(statearr_31430_31501[(2)] = null);

(statearr_31430_31501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (43))){
var state_31392__$1 = state_31392;
var statearr_31431_31502 = state_31392__$1;
(statearr_31431_31502[(2)] = null);

(statearr_31431_31502[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (29))){
var inst_31376 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31432_31503 = state_31392__$1;
(statearr_31432_31503[(2)] = inst_31376);

(statearr_31432_31503[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (44))){
var inst_31385 = (state_31392[(2)]);
var state_31392__$1 = (function (){var statearr_31433 = state_31392;
(statearr_31433[(28)] = inst_31385);

return statearr_31433;
})();
var statearr_31434_31504 = state_31392__$1;
(statearr_31434_31504[(2)] = null);

(statearr_31434_31504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (6))){
var inst_31324 = (state_31392[(29)]);
var inst_31323 = cljs.core.deref.call(null,cs);
var inst_31324__$1 = cljs.core.keys.call(null,inst_31323);
var inst_31325 = cljs.core.count.call(null,inst_31324__$1);
var inst_31326 = cljs.core.reset_BANG_.call(null,dctr,inst_31325);
var inst_31331 = cljs.core.seq.call(null,inst_31324__$1);
var inst_31332 = inst_31331;
var inst_31333 = null;
var inst_31334 = (0);
var inst_31335 = (0);
var state_31392__$1 = (function (){var statearr_31435 = state_31392;
(statearr_31435[(20)] = inst_31334);

(statearr_31435[(30)] = inst_31326);

(statearr_31435[(29)] = inst_31324__$1);

(statearr_31435[(21)] = inst_31332);

(statearr_31435[(10)] = inst_31335);

(statearr_31435[(12)] = inst_31333);

return statearr_31435;
})();
var statearr_31436_31505 = state_31392__$1;
(statearr_31436_31505[(2)] = null);

(statearr_31436_31505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (28))){
var inst_31332 = (state_31392[(21)]);
var inst_31351 = (state_31392[(25)]);
var inst_31351__$1 = cljs.core.seq.call(null,inst_31332);
var state_31392__$1 = (function (){var statearr_31437 = state_31392;
(statearr_31437[(25)] = inst_31351__$1);

return statearr_31437;
})();
if(inst_31351__$1){
var statearr_31438_31506 = state_31392__$1;
(statearr_31438_31506[(1)] = (33));

} else {
var statearr_31439_31507 = state_31392__$1;
(statearr_31439_31507[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (25))){
var inst_31334 = (state_31392[(20)]);
var inst_31335 = (state_31392[(10)]);
var inst_31337 = (inst_31335 < inst_31334);
var inst_31338 = inst_31337;
var state_31392__$1 = state_31392;
if(cljs.core.truth_(inst_31338)){
var statearr_31440_31508 = state_31392__$1;
(statearr_31440_31508[(1)] = (27));

} else {
var statearr_31441_31509 = state_31392__$1;
(statearr_31441_31509[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (34))){
var state_31392__$1 = state_31392;
var statearr_31442_31510 = state_31392__$1;
(statearr_31442_31510[(2)] = null);

(statearr_31442_31510[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (17))){
var state_31392__$1 = state_31392;
var statearr_31443_31511 = state_31392__$1;
(statearr_31443_31511[(2)] = null);

(statearr_31443_31511[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (3))){
var inst_31390 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31392__$1,inst_31390);
} else {
if((state_val_31393 === (12))){
var inst_31319 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31444_31512 = state_31392__$1;
(statearr_31444_31512[(2)] = inst_31319);

(statearr_31444_31512[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (2))){
var state_31392__$1 = state_31392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31392__$1,(4),ch);
} else {
if((state_val_31393 === (23))){
var state_31392__$1 = state_31392;
var statearr_31445_31513 = state_31392__$1;
(statearr_31445_31513[(2)] = null);

(statearr_31445_31513[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (35))){
var inst_31374 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31446_31514 = state_31392__$1;
(statearr_31446_31514[(2)] = inst_31374);

(statearr_31446_31514[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (19))){
var inst_31291 = (state_31392[(7)]);
var inst_31295 = cljs.core.chunk_first.call(null,inst_31291);
var inst_31296 = cljs.core.chunk_rest.call(null,inst_31291);
var inst_31297 = cljs.core.count.call(null,inst_31295);
var inst_31269 = inst_31296;
var inst_31270 = inst_31295;
var inst_31271 = inst_31297;
var inst_31272 = (0);
var state_31392__$1 = (function (){var statearr_31447 = state_31392;
(statearr_31447[(13)] = inst_31269);

(statearr_31447[(15)] = inst_31271);

(statearr_31447[(16)] = inst_31270);

(statearr_31447[(17)] = inst_31272);

return statearr_31447;
})();
var statearr_31448_31515 = state_31392__$1;
(statearr_31448_31515[(2)] = null);

(statearr_31448_31515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (11))){
var inst_31269 = (state_31392[(13)]);
var inst_31291 = (state_31392[(7)]);
var inst_31291__$1 = cljs.core.seq.call(null,inst_31269);
var state_31392__$1 = (function (){var statearr_31449 = state_31392;
(statearr_31449[(7)] = inst_31291__$1);

return statearr_31449;
})();
if(inst_31291__$1){
var statearr_31450_31516 = state_31392__$1;
(statearr_31450_31516[(1)] = (16));

} else {
var statearr_31451_31517 = state_31392__$1;
(statearr_31451_31517[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (9))){
var inst_31321 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31452_31518 = state_31392__$1;
(statearr_31452_31518[(2)] = inst_31321);

(statearr_31452_31518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (5))){
var inst_31267 = cljs.core.deref.call(null,cs);
var inst_31268 = cljs.core.seq.call(null,inst_31267);
var inst_31269 = inst_31268;
var inst_31270 = null;
var inst_31271 = (0);
var inst_31272 = (0);
var state_31392__$1 = (function (){var statearr_31453 = state_31392;
(statearr_31453[(13)] = inst_31269);

(statearr_31453[(15)] = inst_31271);

(statearr_31453[(16)] = inst_31270);

(statearr_31453[(17)] = inst_31272);

return statearr_31453;
})();
var statearr_31454_31519 = state_31392__$1;
(statearr_31454_31519[(2)] = null);

(statearr_31454_31519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (14))){
var state_31392__$1 = state_31392;
var statearr_31455_31520 = state_31392__$1;
(statearr_31455_31520[(2)] = null);

(statearr_31455_31520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (45))){
var inst_31382 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31456_31521 = state_31392__$1;
(statearr_31456_31521[(2)] = inst_31382);

(statearr_31456_31521[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (26))){
var inst_31324 = (state_31392[(29)]);
var inst_31378 = (state_31392[(2)]);
var inst_31379 = cljs.core.seq.call(null,inst_31324);
var state_31392__$1 = (function (){var statearr_31457 = state_31392;
(statearr_31457[(31)] = inst_31378);

return statearr_31457;
})();
if(inst_31379){
var statearr_31458_31522 = state_31392__$1;
(statearr_31458_31522[(1)] = (42));

} else {
var statearr_31459_31523 = state_31392__$1;
(statearr_31459_31523[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (16))){
var inst_31291 = (state_31392[(7)]);
var inst_31293 = cljs.core.chunked_seq_QMARK_.call(null,inst_31291);
var state_31392__$1 = state_31392;
if(inst_31293){
var statearr_31460_31524 = state_31392__$1;
(statearr_31460_31524[(1)] = (19));

} else {
var statearr_31461_31525 = state_31392__$1;
(statearr_31461_31525[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (38))){
var inst_31371 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31462_31526 = state_31392__$1;
(statearr_31462_31526[(2)] = inst_31371);

(statearr_31462_31526[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (30))){
var state_31392__$1 = state_31392;
var statearr_31463_31527 = state_31392__$1;
(statearr_31463_31527[(2)] = null);

(statearr_31463_31527[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (10))){
var inst_31270 = (state_31392[(16)]);
var inst_31272 = (state_31392[(17)]);
var inst_31280 = cljs.core._nth.call(null,inst_31270,inst_31272);
var inst_31281 = cljs.core.nth.call(null,inst_31280,(0),null);
var inst_31282 = cljs.core.nth.call(null,inst_31280,(1),null);
var state_31392__$1 = (function (){var statearr_31464 = state_31392;
(statearr_31464[(26)] = inst_31281);

return statearr_31464;
})();
if(cljs.core.truth_(inst_31282)){
var statearr_31465_31528 = state_31392__$1;
(statearr_31465_31528[(1)] = (13));

} else {
var statearr_31466_31529 = state_31392__$1;
(statearr_31466_31529[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (18))){
var inst_31317 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31467_31530 = state_31392__$1;
(statearr_31467_31530[(2)] = inst_31317);

(statearr_31467_31530[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (42))){
var state_31392__$1 = state_31392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31392__$1,(45),dchan);
} else {
if((state_val_31393 === (37))){
var inst_31360 = (state_31392[(23)]);
var inst_31260 = (state_31392[(11)]);
var inst_31351 = (state_31392[(25)]);
var inst_31360__$1 = cljs.core.first.call(null,inst_31351);
var inst_31361 = cljs.core.async.put_BANG_.call(null,inst_31360__$1,inst_31260,done);
var state_31392__$1 = (function (){var statearr_31468 = state_31392;
(statearr_31468[(23)] = inst_31360__$1);

return statearr_31468;
})();
if(cljs.core.truth_(inst_31361)){
var statearr_31469_31531 = state_31392__$1;
(statearr_31469_31531[(1)] = (39));

} else {
var statearr_31470_31532 = state_31392__$1;
(statearr_31470_31532[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (8))){
var inst_31271 = (state_31392[(15)]);
var inst_31272 = (state_31392[(17)]);
var inst_31274 = (inst_31272 < inst_31271);
var inst_31275 = inst_31274;
var state_31392__$1 = state_31392;
if(cljs.core.truth_(inst_31275)){
var statearr_31471_31533 = state_31392__$1;
(statearr_31471_31533[(1)] = (10));

} else {
var statearr_31472_31534 = state_31392__$1;
(statearr_31472_31534[(1)] = (11));

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
});})(c__27796__auto___31480,cs,m,dchan,dctr,done))
;
return ((function (switch__27775__auto__,c__27796__auto___31480,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27776__auto__ = null;
var cljs$core$async$mult_$_state_machine__27776__auto____0 = (function (){
var statearr_31476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31476[(0)] = cljs$core$async$mult_$_state_machine__27776__auto__);

(statearr_31476[(1)] = (1));

return statearr_31476;
});
var cljs$core$async$mult_$_state_machine__27776__auto____1 = (function (state_31392){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_31392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e31477){if((e31477 instanceof Object)){
var ex__27779__auto__ = e31477;
var statearr_31478_31535 = state_31392;
(statearr_31478_31535[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31536 = state_31392;
state_31392 = G__31536;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27776__auto__ = function(state_31392){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27776__auto____1.call(this,state_31392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27776__auto____0;
cljs$core$async$mult_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27776__auto____1;
return cljs$core$async$mult_$_state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___31480,cs,m,dchan,dctr,done))
})();
var state__27798__auto__ = (function (){var statearr_31479 = f__27797__auto__.call(null);
(statearr_31479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___31480);

return statearr_31479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___31480,cs,m,dchan,dctr,done))
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
var args31537 = [];
var len__25923__auto___31540 = arguments.length;
var i__25924__auto___31541 = (0);
while(true){
if((i__25924__auto___31541 < len__25923__auto___31540)){
args31537.push((arguments[i__25924__auto___31541]));

var G__31542 = (i__25924__auto___31541 + (1));
i__25924__auto___31541 = G__31542;
continue;
} else {
}
break;
}

var G__31539 = args31537.length;
switch (G__31539) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31537.length)].join('')));

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
var len__25923__auto___31554 = arguments.length;
var i__25924__auto___31555 = (0);
while(true){
if((i__25924__auto___31555 < len__25923__auto___31554)){
args__25930__auto__.push((arguments[i__25924__auto___31555]));

var G__31556 = (i__25924__auto___31555 + (1));
i__25924__auto___31555 = G__31556;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((3) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31548){
var map__31549 = p__31548;
var map__31549__$1 = ((((!((map__31549 == null)))?((((map__31549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31549):map__31549);
var opts = map__31549__$1;
var statearr_31551_31557 = state;
(statearr_31551_31557[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31549,map__31549__$1,opts){
return (function (val){
var statearr_31552_31558 = state;
(statearr_31552_31558[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31549,map__31549__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31553_31559 = state;
(statearr_31553_31559[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31544){
var G__31545 = cljs.core.first.call(null,seq31544);
var seq31544__$1 = cljs.core.next.call(null,seq31544);
var G__31546 = cljs.core.first.call(null,seq31544__$1);
var seq31544__$2 = cljs.core.next.call(null,seq31544__$1);
var G__31547 = cljs.core.first.call(null,seq31544__$2);
var seq31544__$3 = cljs.core.next.call(null,seq31544__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31545,G__31546,G__31547,seq31544__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31725 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31725 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31726){
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
this.meta31726 = meta31726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31727,meta31726__$1){
var self__ = this;
var _31727__$1 = this;
return (new cljs.core.async.t_cljs$core$async31725(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31726__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31727){
var self__ = this;
var _31727__$1 = this;
return self__.meta31726;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31725.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31725.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31726","meta31726",1889167695,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31725.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31725";

cljs.core.async.t_cljs$core$async31725.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31725");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31725 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31725(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31726){
return (new cljs.core.async.t_cljs$core$async31725(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31726));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31725(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27796__auto___31890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___31890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___31890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31827){
var state_val_31828 = (state_31827[(1)]);
if((state_val_31828 === (7))){
var inst_31743 = (state_31827[(2)]);
var state_31827__$1 = state_31827;
var statearr_31829_31891 = state_31827__$1;
(statearr_31829_31891[(2)] = inst_31743);

(statearr_31829_31891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (20))){
var inst_31755 = (state_31827[(7)]);
var state_31827__$1 = state_31827;
var statearr_31830_31892 = state_31827__$1;
(statearr_31830_31892[(2)] = inst_31755);

(statearr_31830_31892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (27))){
var state_31827__$1 = state_31827;
var statearr_31831_31893 = state_31827__$1;
(statearr_31831_31893[(2)] = null);

(statearr_31831_31893[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (1))){
var inst_31731 = (state_31827[(8)]);
var inst_31731__$1 = calc_state.call(null);
var inst_31733 = (inst_31731__$1 == null);
var inst_31734 = cljs.core.not.call(null,inst_31733);
var state_31827__$1 = (function (){var statearr_31832 = state_31827;
(statearr_31832[(8)] = inst_31731__$1);

return statearr_31832;
})();
if(inst_31734){
var statearr_31833_31894 = state_31827__$1;
(statearr_31833_31894[(1)] = (2));

} else {
var statearr_31834_31895 = state_31827__$1;
(statearr_31834_31895[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (24))){
var inst_31801 = (state_31827[(9)]);
var inst_31778 = (state_31827[(10)]);
var inst_31787 = (state_31827[(11)]);
var inst_31801__$1 = inst_31778.call(null,inst_31787);
var state_31827__$1 = (function (){var statearr_31835 = state_31827;
(statearr_31835[(9)] = inst_31801__$1);

return statearr_31835;
})();
if(cljs.core.truth_(inst_31801__$1)){
var statearr_31836_31896 = state_31827__$1;
(statearr_31836_31896[(1)] = (29));

} else {
var statearr_31837_31897 = state_31827__$1;
(statearr_31837_31897[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (4))){
var inst_31746 = (state_31827[(2)]);
var state_31827__$1 = state_31827;
if(cljs.core.truth_(inst_31746)){
var statearr_31838_31898 = state_31827__$1;
(statearr_31838_31898[(1)] = (8));

} else {
var statearr_31839_31899 = state_31827__$1;
(statearr_31839_31899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (15))){
var inst_31772 = (state_31827[(2)]);
var state_31827__$1 = state_31827;
if(cljs.core.truth_(inst_31772)){
var statearr_31840_31900 = state_31827__$1;
(statearr_31840_31900[(1)] = (19));

} else {
var statearr_31841_31901 = state_31827__$1;
(statearr_31841_31901[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (21))){
var inst_31777 = (state_31827[(12)]);
var inst_31777__$1 = (state_31827[(2)]);
var inst_31778 = cljs.core.get.call(null,inst_31777__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31779 = cljs.core.get.call(null,inst_31777__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31780 = cljs.core.get.call(null,inst_31777__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31827__$1 = (function (){var statearr_31842 = state_31827;
(statearr_31842[(13)] = inst_31779);

(statearr_31842[(10)] = inst_31778);

(statearr_31842[(12)] = inst_31777__$1);

return statearr_31842;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31827__$1,(22),inst_31780);
} else {
if((state_val_31828 === (31))){
var inst_31809 = (state_31827[(2)]);
var state_31827__$1 = state_31827;
if(cljs.core.truth_(inst_31809)){
var statearr_31843_31902 = state_31827__$1;
(statearr_31843_31902[(1)] = (32));

} else {
var statearr_31844_31903 = state_31827__$1;
(statearr_31844_31903[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (32))){
var inst_31786 = (state_31827[(14)]);
var state_31827__$1 = state_31827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31827__$1,(35),out,inst_31786);
} else {
if((state_val_31828 === (33))){
var inst_31777 = (state_31827[(12)]);
var inst_31755 = inst_31777;
var state_31827__$1 = (function (){var statearr_31845 = state_31827;
(statearr_31845[(7)] = inst_31755);

return statearr_31845;
})();
var statearr_31846_31904 = state_31827__$1;
(statearr_31846_31904[(2)] = null);

(statearr_31846_31904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (13))){
var inst_31755 = (state_31827[(7)]);
var inst_31762 = inst_31755.cljs$lang$protocol_mask$partition0$;
var inst_31763 = (inst_31762 & (64));
var inst_31764 = inst_31755.cljs$core$ISeq$;
var inst_31765 = (inst_31763) || (inst_31764);
var state_31827__$1 = state_31827;
if(cljs.core.truth_(inst_31765)){
var statearr_31847_31905 = state_31827__$1;
(statearr_31847_31905[(1)] = (16));

} else {
var statearr_31848_31906 = state_31827__$1;
(statearr_31848_31906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (22))){
var inst_31786 = (state_31827[(14)]);
var inst_31787 = (state_31827[(11)]);
var inst_31785 = (state_31827[(2)]);
var inst_31786__$1 = cljs.core.nth.call(null,inst_31785,(0),null);
var inst_31787__$1 = cljs.core.nth.call(null,inst_31785,(1),null);
var inst_31788 = (inst_31786__$1 == null);
var inst_31789 = cljs.core._EQ_.call(null,inst_31787__$1,change);
var inst_31790 = (inst_31788) || (inst_31789);
var state_31827__$1 = (function (){var statearr_31849 = state_31827;
(statearr_31849[(14)] = inst_31786__$1);

(statearr_31849[(11)] = inst_31787__$1);

return statearr_31849;
})();
if(cljs.core.truth_(inst_31790)){
var statearr_31850_31907 = state_31827__$1;
(statearr_31850_31907[(1)] = (23));

} else {
var statearr_31851_31908 = state_31827__$1;
(statearr_31851_31908[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (36))){
var inst_31777 = (state_31827[(12)]);
var inst_31755 = inst_31777;
var state_31827__$1 = (function (){var statearr_31852 = state_31827;
(statearr_31852[(7)] = inst_31755);

return statearr_31852;
})();
var statearr_31853_31909 = state_31827__$1;
(statearr_31853_31909[(2)] = null);

(statearr_31853_31909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (29))){
var inst_31801 = (state_31827[(9)]);
var state_31827__$1 = state_31827;
var statearr_31854_31910 = state_31827__$1;
(statearr_31854_31910[(2)] = inst_31801);

(statearr_31854_31910[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (6))){
var state_31827__$1 = state_31827;
var statearr_31855_31911 = state_31827__$1;
(statearr_31855_31911[(2)] = false);

(statearr_31855_31911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (28))){
var inst_31797 = (state_31827[(2)]);
var inst_31798 = calc_state.call(null);
var inst_31755 = inst_31798;
var state_31827__$1 = (function (){var statearr_31856 = state_31827;
(statearr_31856[(15)] = inst_31797);

(statearr_31856[(7)] = inst_31755);

return statearr_31856;
})();
var statearr_31857_31912 = state_31827__$1;
(statearr_31857_31912[(2)] = null);

(statearr_31857_31912[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (25))){
var inst_31823 = (state_31827[(2)]);
var state_31827__$1 = state_31827;
var statearr_31858_31913 = state_31827__$1;
(statearr_31858_31913[(2)] = inst_31823);

(statearr_31858_31913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (34))){
var inst_31821 = (state_31827[(2)]);
var state_31827__$1 = state_31827;
var statearr_31859_31914 = state_31827__$1;
(statearr_31859_31914[(2)] = inst_31821);

(statearr_31859_31914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (17))){
var state_31827__$1 = state_31827;
var statearr_31860_31915 = state_31827__$1;
(statearr_31860_31915[(2)] = false);

(statearr_31860_31915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (3))){
var state_31827__$1 = state_31827;
var statearr_31861_31916 = state_31827__$1;
(statearr_31861_31916[(2)] = false);

(statearr_31861_31916[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (12))){
var inst_31825 = (state_31827[(2)]);
var state_31827__$1 = state_31827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31827__$1,inst_31825);
} else {
if((state_val_31828 === (2))){
var inst_31731 = (state_31827[(8)]);
var inst_31736 = inst_31731.cljs$lang$protocol_mask$partition0$;
var inst_31737 = (inst_31736 & (64));
var inst_31738 = inst_31731.cljs$core$ISeq$;
var inst_31739 = (inst_31737) || (inst_31738);
var state_31827__$1 = state_31827;
if(cljs.core.truth_(inst_31739)){
var statearr_31862_31917 = state_31827__$1;
(statearr_31862_31917[(1)] = (5));

} else {
var statearr_31863_31918 = state_31827__$1;
(statearr_31863_31918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (23))){
var inst_31786 = (state_31827[(14)]);
var inst_31792 = (inst_31786 == null);
var state_31827__$1 = state_31827;
if(cljs.core.truth_(inst_31792)){
var statearr_31864_31919 = state_31827__$1;
(statearr_31864_31919[(1)] = (26));

} else {
var statearr_31865_31920 = state_31827__$1;
(statearr_31865_31920[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (35))){
var inst_31812 = (state_31827[(2)]);
var state_31827__$1 = state_31827;
if(cljs.core.truth_(inst_31812)){
var statearr_31866_31921 = state_31827__$1;
(statearr_31866_31921[(1)] = (36));

} else {
var statearr_31867_31922 = state_31827__$1;
(statearr_31867_31922[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (19))){
var inst_31755 = (state_31827[(7)]);
var inst_31774 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31755);
var state_31827__$1 = state_31827;
var statearr_31868_31923 = state_31827__$1;
(statearr_31868_31923[(2)] = inst_31774);

(statearr_31868_31923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (11))){
var inst_31755 = (state_31827[(7)]);
var inst_31759 = (inst_31755 == null);
var inst_31760 = cljs.core.not.call(null,inst_31759);
var state_31827__$1 = state_31827;
if(inst_31760){
var statearr_31869_31924 = state_31827__$1;
(statearr_31869_31924[(1)] = (13));

} else {
var statearr_31870_31925 = state_31827__$1;
(statearr_31870_31925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (9))){
var inst_31731 = (state_31827[(8)]);
var state_31827__$1 = state_31827;
var statearr_31871_31926 = state_31827__$1;
(statearr_31871_31926[(2)] = inst_31731);

(statearr_31871_31926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (5))){
var state_31827__$1 = state_31827;
var statearr_31872_31927 = state_31827__$1;
(statearr_31872_31927[(2)] = true);

(statearr_31872_31927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (14))){
var state_31827__$1 = state_31827;
var statearr_31873_31928 = state_31827__$1;
(statearr_31873_31928[(2)] = false);

(statearr_31873_31928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (26))){
var inst_31787 = (state_31827[(11)]);
var inst_31794 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31787);
var state_31827__$1 = state_31827;
var statearr_31874_31929 = state_31827__$1;
(statearr_31874_31929[(2)] = inst_31794);

(statearr_31874_31929[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (16))){
var state_31827__$1 = state_31827;
var statearr_31875_31930 = state_31827__$1;
(statearr_31875_31930[(2)] = true);

(statearr_31875_31930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (38))){
var inst_31817 = (state_31827[(2)]);
var state_31827__$1 = state_31827;
var statearr_31876_31931 = state_31827__$1;
(statearr_31876_31931[(2)] = inst_31817);

(statearr_31876_31931[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (30))){
var inst_31779 = (state_31827[(13)]);
var inst_31778 = (state_31827[(10)]);
var inst_31787 = (state_31827[(11)]);
var inst_31804 = cljs.core.empty_QMARK_.call(null,inst_31778);
var inst_31805 = inst_31779.call(null,inst_31787);
var inst_31806 = cljs.core.not.call(null,inst_31805);
var inst_31807 = (inst_31804) && (inst_31806);
var state_31827__$1 = state_31827;
var statearr_31877_31932 = state_31827__$1;
(statearr_31877_31932[(2)] = inst_31807);

(statearr_31877_31932[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (10))){
var inst_31731 = (state_31827[(8)]);
var inst_31751 = (state_31827[(2)]);
var inst_31752 = cljs.core.get.call(null,inst_31751,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31753 = cljs.core.get.call(null,inst_31751,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31754 = cljs.core.get.call(null,inst_31751,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31755 = inst_31731;
var state_31827__$1 = (function (){var statearr_31878 = state_31827;
(statearr_31878[(16)] = inst_31752);

(statearr_31878[(7)] = inst_31755);

(statearr_31878[(17)] = inst_31754);

(statearr_31878[(18)] = inst_31753);

return statearr_31878;
})();
var statearr_31879_31933 = state_31827__$1;
(statearr_31879_31933[(2)] = null);

(statearr_31879_31933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (18))){
var inst_31769 = (state_31827[(2)]);
var state_31827__$1 = state_31827;
var statearr_31880_31934 = state_31827__$1;
(statearr_31880_31934[(2)] = inst_31769);

(statearr_31880_31934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (37))){
var state_31827__$1 = state_31827;
var statearr_31881_31935 = state_31827__$1;
(statearr_31881_31935[(2)] = null);

(statearr_31881_31935[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31828 === (8))){
var inst_31731 = (state_31827[(8)]);
var inst_31748 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31731);
var state_31827__$1 = state_31827;
var statearr_31882_31936 = state_31827__$1;
(statearr_31882_31936[(2)] = inst_31748);

(statearr_31882_31936[(1)] = (10));


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
});})(c__27796__auto___31890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27775__auto__,c__27796__auto___31890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27776__auto__ = null;
var cljs$core$async$mix_$_state_machine__27776__auto____0 = (function (){
var statearr_31886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31886[(0)] = cljs$core$async$mix_$_state_machine__27776__auto__);

(statearr_31886[(1)] = (1));

return statearr_31886;
});
var cljs$core$async$mix_$_state_machine__27776__auto____1 = (function (state_31827){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_31827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e31887){if((e31887 instanceof Object)){
var ex__27779__auto__ = e31887;
var statearr_31888_31937 = state_31827;
(statearr_31888_31937[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31938 = state_31827;
state_31827 = G__31938;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27776__auto__ = function(state_31827){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27776__auto____1.call(this,state_31827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27776__auto____0;
cljs$core$async$mix_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27776__auto____1;
return cljs$core$async$mix_$_state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___31890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27798__auto__ = (function (){var statearr_31889 = f__27797__auto__.call(null);
(statearr_31889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___31890);

return statearr_31889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___31890,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args31939 = [];
var len__25923__auto___31942 = arguments.length;
var i__25924__auto___31943 = (0);
while(true){
if((i__25924__auto___31943 < len__25923__auto___31942)){
args31939.push((arguments[i__25924__auto___31943]));

var G__31944 = (i__25924__auto___31943 + (1));
i__25924__auto___31943 = G__31944;
continue;
} else {
}
break;
}

var G__31941 = args31939.length;
switch (G__31941) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31939.length)].join('')));

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
var args31947 = [];
var len__25923__auto___32072 = arguments.length;
var i__25924__auto___32073 = (0);
while(true){
if((i__25924__auto___32073 < len__25923__auto___32072)){
args31947.push((arguments[i__25924__auto___32073]));

var G__32074 = (i__25924__auto___32073 + (1));
i__25924__auto___32073 = G__32074;
continue;
} else {
}
break;
}

var G__31949 = args31947.length;
switch (G__31949) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31947.length)].join('')));

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
return (function (p1__31946_SHARP_){
if(cljs.core.truth_(p1__31946_SHARP_.call(null,topic))){
return p1__31946_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31946_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24848__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31950 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31951){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31951 = meta31951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31952,meta31951__$1){
var self__ = this;
var _31952__$1 = this;
return (new cljs.core.async.t_cljs$core$async31950(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31951__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31952){
var self__ = this;
var _31952__$1 = this;
return self__.meta31951;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31950.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31950.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31950.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31950.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31950.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31951","meta31951",1124595970,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31950.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31950";

cljs.core.async.t_cljs$core$async31950.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31950");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31950 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31950(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31951){
return (new cljs.core.async.t_cljs$core$async31950(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31951));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31950(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27796__auto___32076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___32076,mults,ensure_mult,p){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___32076,mults,ensure_mult,p){
return (function (state_32024){
var state_val_32025 = (state_32024[(1)]);
if((state_val_32025 === (7))){
var inst_32020 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32026_32077 = state_32024__$1;
(statearr_32026_32077[(2)] = inst_32020);

(statearr_32026_32077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (20))){
var state_32024__$1 = state_32024;
var statearr_32027_32078 = state_32024__$1;
(statearr_32027_32078[(2)] = null);

(statearr_32027_32078[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (1))){
var state_32024__$1 = state_32024;
var statearr_32028_32079 = state_32024__$1;
(statearr_32028_32079[(2)] = null);

(statearr_32028_32079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (24))){
var inst_32003 = (state_32024[(7)]);
var inst_32012 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32003);
var state_32024__$1 = state_32024;
var statearr_32029_32080 = state_32024__$1;
(statearr_32029_32080[(2)] = inst_32012);

(statearr_32029_32080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (4))){
var inst_31955 = (state_32024[(8)]);
var inst_31955__$1 = (state_32024[(2)]);
var inst_31956 = (inst_31955__$1 == null);
var state_32024__$1 = (function (){var statearr_32030 = state_32024;
(statearr_32030[(8)] = inst_31955__$1);

return statearr_32030;
})();
if(cljs.core.truth_(inst_31956)){
var statearr_32031_32081 = state_32024__$1;
(statearr_32031_32081[(1)] = (5));

} else {
var statearr_32032_32082 = state_32024__$1;
(statearr_32032_32082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (15))){
var inst_31997 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32033_32083 = state_32024__$1;
(statearr_32033_32083[(2)] = inst_31997);

(statearr_32033_32083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (21))){
var inst_32017 = (state_32024[(2)]);
var state_32024__$1 = (function (){var statearr_32034 = state_32024;
(statearr_32034[(9)] = inst_32017);

return statearr_32034;
})();
var statearr_32035_32084 = state_32024__$1;
(statearr_32035_32084[(2)] = null);

(statearr_32035_32084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (13))){
var inst_31979 = (state_32024[(10)]);
var inst_31981 = cljs.core.chunked_seq_QMARK_.call(null,inst_31979);
var state_32024__$1 = state_32024;
if(inst_31981){
var statearr_32036_32085 = state_32024__$1;
(statearr_32036_32085[(1)] = (16));

} else {
var statearr_32037_32086 = state_32024__$1;
(statearr_32037_32086[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (22))){
var inst_32009 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
if(cljs.core.truth_(inst_32009)){
var statearr_32038_32087 = state_32024__$1;
(statearr_32038_32087[(1)] = (23));

} else {
var statearr_32039_32088 = state_32024__$1;
(statearr_32039_32088[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (6))){
var inst_32003 = (state_32024[(7)]);
var inst_31955 = (state_32024[(8)]);
var inst_32005 = (state_32024[(11)]);
var inst_32003__$1 = topic_fn.call(null,inst_31955);
var inst_32004 = cljs.core.deref.call(null,mults);
var inst_32005__$1 = cljs.core.get.call(null,inst_32004,inst_32003__$1);
var state_32024__$1 = (function (){var statearr_32040 = state_32024;
(statearr_32040[(7)] = inst_32003__$1);

(statearr_32040[(11)] = inst_32005__$1);

return statearr_32040;
})();
if(cljs.core.truth_(inst_32005__$1)){
var statearr_32041_32089 = state_32024__$1;
(statearr_32041_32089[(1)] = (19));

} else {
var statearr_32042_32090 = state_32024__$1;
(statearr_32042_32090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (25))){
var inst_32014 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32043_32091 = state_32024__$1;
(statearr_32043_32091[(2)] = inst_32014);

(statearr_32043_32091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (17))){
var inst_31979 = (state_32024[(10)]);
var inst_31988 = cljs.core.first.call(null,inst_31979);
var inst_31989 = cljs.core.async.muxch_STAR_.call(null,inst_31988);
var inst_31990 = cljs.core.async.close_BANG_.call(null,inst_31989);
var inst_31991 = cljs.core.next.call(null,inst_31979);
var inst_31965 = inst_31991;
var inst_31966 = null;
var inst_31967 = (0);
var inst_31968 = (0);
var state_32024__$1 = (function (){var statearr_32044 = state_32024;
(statearr_32044[(12)] = inst_31967);

(statearr_32044[(13)] = inst_31966);

(statearr_32044[(14)] = inst_31965);

(statearr_32044[(15)] = inst_31968);

(statearr_32044[(16)] = inst_31990);

return statearr_32044;
})();
var statearr_32045_32092 = state_32024__$1;
(statearr_32045_32092[(2)] = null);

(statearr_32045_32092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (3))){
var inst_32022 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32024__$1,inst_32022);
} else {
if((state_val_32025 === (12))){
var inst_31999 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32046_32093 = state_32024__$1;
(statearr_32046_32093[(2)] = inst_31999);

(statearr_32046_32093[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (2))){
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32024__$1,(4),ch);
} else {
if((state_val_32025 === (23))){
var state_32024__$1 = state_32024;
var statearr_32047_32094 = state_32024__$1;
(statearr_32047_32094[(2)] = null);

(statearr_32047_32094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (19))){
var inst_31955 = (state_32024[(8)]);
var inst_32005 = (state_32024[(11)]);
var inst_32007 = cljs.core.async.muxch_STAR_.call(null,inst_32005);
var state_32024__$1 = state_32024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32024__$1,(22),inst_32007,inst_31955);
} else {
if((state_val_32025 === (11))){
var inst_31979 = (state_32024[(10)]);
var inst_31965 = (state_32024[(14)]);
var inst_31979__$1 = cljs.core.seq.call(null,inst_31965);
var state_32024__$1 = (function (){var statearr_32048 = state_32024;
(statearr_32048[(10)] = inst_31979__$1);

return statearr_32048;
})();
if(inst_31979__$1){
var statearr_32049_32095 = state_32024__$1;
(statearr_32049_32095[(1)] = (13));

} else {
var statearr_32050_32096 = state_32024__$1;
(statearr_32050_32096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (9))){
var inst_32001 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32051_32097 = state_32024__$1;
(statearr_32051_32097[(2)] = inst_32001);

(statearr_32051_32097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (5))){
var inst_31962 = cljs.core.deref.call(null,mults);
var inst_31963 = cljs.core.vals.call(null,inst_31962);
var inst_31964 = cljs.core.seq.call(null,inst_31963);
var inst_31965 = inst_31964;
var inst_31966 = null;
var inst_31967 = (0);
var inst_31968 = (0);
var state_32024__$1 = (function (){var statearr_32052 = state_32024;
(statearr_32052[(12)] = inst_31967);

(statearr_32052[(13)] = inst_31966);

(statearr_32052[(14)] = inst_31965);

(statearr_32052[(15)] = inst_31968);

return statearr_32052;
})();
var statearr_32053_32098 = state_32024__$1;
(statearr_32053_32098[(2)] = null);

(statearr_32053_32098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (14))){
var state_32024__$1 = state_32024;
var statearr_32057_32099 = state_32024__$1;
(statearr_32057_32099[(2)] = null);

(statearr_32057_32099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (16))){
var inst_31979 = (state_32024[(10)]);
var inst_31983 = cljs.core.chunk_first.call(null,inst_31979);
var inst_31984 = cljs.core.chunk_rest.call(null,inst_31979);
var inst_31985 = cljs.core.count.call(null,inst_31983);
var inst_31965 = inst_31984;
var inst_31966 = inst_31983;
var inst_31967 = inst_31985;
var inst_31968 = (0);
var state_32024__$1 = (function (){var statearr_32058 = state_32024;
(statearr_32058[(12)] = inst_31967);

(statearr_32058[(13)] = inst_31966);

(statearr_32058[(14)] = inst_31965);

(statearr_32058[(15)] = inst_31968);

return statearr_32058;
})();
var statearr_32059_32100 = state_32024__$1;
(statearr_32059_32100[(2)] = null);

(statearr_32059_32100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (10))){
var inst_31967 = (state_32024[(12)]);
var inst_31966 = (state_32024[(13)]);
var inst_31965 = (state_32024[(14)]);
var inst_31968 = (state_32024[(15)]);
var inst_31973 = cljs.core._nth.call(null,inst_31966,inst_31968);
var inst_31974 = cljs.core.async.muxch_STAR_.call(null,inst_31973);
var inst_31975 = cljs.core.async.close_BANG_.call(null,inst_31974);
var inst_31976 = (inst_31968 + (1));
var tmp32054 = inst_31967;
var tmp32055 = inst_31966;
var tmp32056 = inst_31965;
var inst_31965__$1 = tmp32056;
var inst_31966__$1 = tmp32055;
var inst_31967__$1 = tmp32054;
var inst_31968__$1 = inst_31976;
var state_32024__$1 = (function (){var statearr_32060 = state_32024;
(statearr_32060[(17)] = inst_31975);

(statearr_32060[(12)] = inst_31967__$1);

(statearr_32060[(13)] = inst_31966__$1);

(statearr_32060[(14)] = inst_31965__$1);

(statearr_32060[(15)] = inst_31968__$1);

return statearr_32060;
})();
var statearr_32061_32101 = state_32024__$1;
(statearr_32061_32101[(2)] = null);

(statearr_32061_32101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (18))){
var inst_31994 = (state_32024[(2)]);
var state_32024__$1 = state_32024;
var statearr_32062_32102 = state_32024__$1;
(statearr_32062_32102[(2)] = inst_31994);

(statearr_32062_32102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32025 === (8))){
var inst_31967 = (state_32024[(12)]);
var inst_31968 = (state_32024[(15)]);
var inst_31970 = (inst_31968 < inst_31967);
var inst_31971 = inst_31970;
var state_32024__$1 = state_32024;
if(cljs.core.truth_(inst_31971)){
var statearr_32063_32103 = state_32024__$1;
(statearr_32063_32103[(1)] = (10));

} else {
var statearr_32064_32104 = state_32024__$1;
(statearr_32064_32104[(1)] = (11));

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
});})(c__27796__auto___32076,mults,ensure_mult,p))
;
return ((function (switch__27775__auto__,c__27796__auto___32076,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27776__auto__ = null;
var cljs$core$async$state_machine__27776__auto____0 = (function (){
var statearr_32068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32068[(0)] = cljs$core$async$state_machine__27776__auto__);

(statearr_32068[(1)] = (1));

return statearr_32068;
});
var cljs$core$async$state_machine__27776__auto____1 = (function (state_32024){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_32024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e32069){if((e32069 instanceof Object)){
var ex__27779__auto__ = e32069;
var statearr_32070_32105 = state_32024;
(statearr_32070_32105[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32106 = state_32024;
state_32024 = G__32106;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$state_machine__27776__auto__ = function(state_32024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27776__auto____1.call(this,state_32024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27776__auto____0;
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27776__auto____1;
return cljs$core$async$state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___32076,mults,ensure_mult,p))
})();
var state__27798__auto__ = (function (){var statearr_32071 = f__27797__auto__.call(null);
(statearr_32071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___32076);

return statearr_32071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___32076,mults,ensure_mult,p))
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
var args32107 = [];
var len__25923__auto___32110 = arguments.length;
var i__25924__auto___32111 = (0);
while(true){
if((i__25924__auto___32111 < len__25923__auto___32110)){
args32107.push((arguments[i__25924__auto___32111]));

var G__32112 = (i__25924__auto___32111 + (1));
i__25924__auto___32111 = G__32112;
continue;
} else {
}
break;
}

var G__32109 = args32107.length;
switch (G__32109) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32107.length)].join('')));

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
var args32114 = [];
var len__25923__auto___32117 = arguments.length;
var i__25924__auto___32118 = (0);
while(true){
if((i__25924__auto___32118 < len__25923__auto___32117)){
args32114.push((arguments[i__25924__auto___32118]));

var G__32119 = (i__25924__auto___32118 + (1));
i__25924__auto___32118 = G__32119;
continue;
} else {
}
break;
}

var G__32116 = args32114.length;
switch (G__32116) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32114.length)].join('')));

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
var args32121 = [];
var len__25923__auto___32192 = arguments.length;
var i__25924__auto___32193 = (0);
while(true){
if((i__25924__auto___32193 < len__25923__auto___32192)){
args32121.push((arguments[i__25924__auto___32193]));

var G__32194 = (i__25924__auto___32193 + (1));
i__25924__auto___32193 = G__32194;
continue;
} else {
}
break;
}

var G__32123 = args32121.length;
switch (G__32123) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32121.length)].join('')));

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
var c__27796__auto___32196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___32196,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___32196,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32162){
var state_val_32163 = (state_32162[(1)]);
if((state_val_32163 === (7))){
var state_32162__$1 = state_32162;
var statearr_32164_32197 = state_32162__$1;
(statearr_32164_32197[(2)] = null);

(statearr_32164_32197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (1))){
var state_32162__$1 = state_32162;
var statearr_32165_32198 = state_32162__$1;
(statearr_32165_32198[(2)] = null);

(statearr_32165_32198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (4))){
var inst_32126 = (state_32162[(7)]);
var inst_32128 = (inst_32126 < cnt);
var state_32162__$1 = state_32162;
if(cljs.core.truth_(inst_32128)){
var statearr_32166_32199 = state_32162__$1;
(statearr_32166_32199[(1)] = (6));

} else {
var statearr_32167_32200 = state_32162__$1;
(statearr_32167_32200[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (15))){
var inst_32158 = (state_32162[(2)]);
var state_32162__$1 = state_32162;
var statearr_32168_32201 = state_32162__$1;
(statearr_32168_32201[(2)] = inst_32158);

(statearr_32168_32201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (13))){
var inst_32151 = cljs.core.async.close_BANG_.call(null,out);
var state_32162__$1 = state_32162;
var statearr_32169_32202 = state_32162__$1;
(statearr_32169_32202[(2)] = inst_32151);

(statearr_32169_32202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (6))){
var state_32162__$1 = state_32162;
var statearr_32170_32203 = state_32162__$1;
(statearr_32170_32203[(2)] = null);

(statearr_32170_32203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (3))){
var inst_32160 = (state_32162[(2)]);
var state_32162__$1 = state_32162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32162__$1,inst_32160);
} else {
if((state_val_32163 === (12))){
var inst_32148 = (state_32162[(8)]);
var inst_32148__$1 = (state_32162[(2)]);
var inst_32149 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32148__$1);
var state_32162__$1 = (function (){var statearr_32171 = state_32162;
(statearr_32171[(8)] = inst_32148__$1);

return statearr_32171;
})();
if(cljs.core.truth_(inst_32149)){
var statearr_32172_32204 = state_32162__$1;
(statearr_32172_32204[(1)] = (13));

} else {
var statearr_32173_32205 = state_32162__$1;
(statearr_32173_32205[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (2))){
var inst_32125 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32126 = (0);
var state_32162__$1 = (function (){var statearr_32174 = state_32162;
(statearr_32174[(7)] = inst_32126);

(statearr_32174[(9)] = inst_32125);

return statearr_32174;
})();
var statearr_32175_32206 = state_32162__$1;
(statearr_32175_32206[(2)] = null);

(statearr_32175_32206[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (11))){
var inst_32126 = (state_32162[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32162,(10),Object,null,(9));
var inst_32135 = chs__$1.call(null,inst_32126);
var inst_32136 = done.call(null,inst_32126);
var inst_32137 = cljs.core.async.take_BANG_.call(null,inst_32135,inst_32136);
var state_32162__$1 = state_32162;
var statearr_32176_32207 = state_32162__$1;
(statearr_32176_32207[(2)] = inst_32137);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32162__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (9))){
var inst_32126 = (state_32162[(7)]);
var inst_32139 = (state_32162[(2)]);
var inst_32140 = (inst_32126 + (1));
var inst_32126__$1 = inst_32140;
var state_32162__$1 = (function (){var statearr_32177 = state_32162;
(statearr_32177[(7)] = inst_32126__$1);

(statearr_32177[(10)] = inst_32139);

return statearr_32177;
})();
var statearr_32178_32208 = state_32162__$1;
(statearr_32178_32208[(2)] = null);

(statearr_32178_32208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (5))){
var inst_32146 = (state_32162[(2)]);
var state_32162__$1 = (function (){var statearr_32179 = state_32162;
(statearr_32179[(11)] = inst_32146);

return statearr_32179;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32162__$1,(12),dchan);
} else {
if((state_val_32163 === (14))){
var inst_32148 = (state_32162[(8)]);
var inst_32153 = cljs.core.apply.call(null,f,inst_32148);
var state_32162__$1 = state_32162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32162__$1,(16),out,inst_32153);
} else {
if((state_val_32163 === (16))){
var inst_32155 = (state_32162[(2)]);
var state_32162__$1 = (function (){var statearr_32180 = state_32162;
(statearr_32180[(12)] = inst_32155);

return statearr_32180;
})();
var statearr_32181_32209 = state_32162__$1;
(statearr_32181_32209[(2)] = null);

(statearr_32181_32209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (10))){
var inst_32130 = (state_32162[(2)]);
var inst_32131 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32162__$1 = (function (){var statearr_32182 = state_32162;
(statearr_32182[(13)] = inst_32130);

return statearr_32182;
})();
var statearr_32183_32210 = state_32162__$1;
(statearr_32183_32210[(2)] = inst_32131);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32162__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (8))){
var inst_32144 = (state_32162[(2)]);
var state_32162__$1 = state_32162;
var statearr_32184_32211 = state_32162__$1;
(statearr_32184_32211[(2)] = inst_32144);

(statearr_32184_32211[(1)] = (5));


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
});})(c__27796__auto___32196,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27775__auto__,c__27796__auto___32196,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27776__auto__ = null;
var cljs$core$async$state_machine__27776__auto____0 = (function (){
var statearr_32188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32188[(0)] = cljs$core$async$state_machine__27776__auto__);

(statearr_32188[(1)] = (1));

return statearr_32188;
});
var cljs$core$async$state_machine__27776__auto____1 = (function (state_32162){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_32162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e32189){if((e32189 instanceof Object)){
var ex__27779__auto__ = e32189;
var statearr_32190_32212 = state_32162;
(statearr_32190_32212[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32213 = state_32162;
state_32162 = G__32213;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$state_machine__27776__auto__ = function(state_32162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27776__auto____1.call(this,state_32162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27776__auto____0;
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27776__auto____1;
return cljs$core$async$state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___32196,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27798__auto__ = (function (){var statearr_32191 = f__27797__auto__.call(null);
(statearr_32191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___32196);

return statearr_32191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___32196,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32215 = [];
var len__25923__auto___32273 = arguments.length;
var i__25924__auto___32274 = (0);
while(true){
if((i__25924__auto___32274 < len__25923__auto___32273)){
args32215.push((arguments[i__25924__auto___32274]));

var G__32275 = (i__25924__auto___32274 + (1));
i__25924__auto___32274 = G__32275;
continue;
} else {
}
break;
}

var G__32217 = args32215.length;
switch (G__32217) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32215.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27796__auto___32277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___32277,out){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___32277,out){
return (function (state_32249){
var state_val_32250 = (state_32249[(1)]);
if((state_val_32250 === (7))){
var inst_32229 = (state_32249[(7)]);
var inst_32228 = (state_32249[(8)]);
var inst_32228__$1 = (state_32249[(2)]);
var inst_32229__$1 = cljs.core.nth.call(null,inst_32228__$1,(0),null);
var inst_32230 = cljs.core.nth.call(null,inst_32228__$1,(1),null);
var inst_32231 = (inst_32229__$1 == null);
var state_32249__$1 = (function (){var statearr_32251 = state_32249;
(statearr_32251[(7)] = inst_32229__$1);

(statearr_32251[(8)] = inst_32228__$1);

(statearr_32251[(9)] = inst_32230);

return statearr_32251;
})();
if(cljs.core.truth_(inst_32231)){
var statearr_32252_32278 = state_32249__$1;
(statearr_32252_32278[(1)] = (8));

} else {
var statearr_32253_32279 = state_32249__$1;
(statearr_32253_32279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32250 === (1))){
var inst_32218 = cljs.core.vec.call(null,chs);
var inst_32219 = inst_32218;
var state_32249__$1 = (function (){var statearr_32254 = state_32249;
(statearr_32254[(10)] = inst_32219);

return statearr_32254;
})();
var statearr_32255_32280 = state_32249__$1;
(statearr_32255_32280[(2)] = null);

(statearr_32255_32280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32250 === (4))){
var inst_32219 = (state_32249[(10)]);
var state_32249__$1 = state_32249;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32249__$1,(7),inst_32219);
} else {
if((state_val_32250 === (6))){
var inst_32245 = (state_32249[(2)]);
var state_32249__$1 = state_32249;
var statearr_32256_32281 = state_32249__$1;
(statearr_32256_32281[(2)] = inst_32245);

(statearr_32256_32281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32250 === (3))){
var inst_32247 = (state_32249[(2)]);
var state_32249__$1 = state_32249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32249__$1,inst_32247);
} else {
if((state_val_32250 === (2))){
var inst_32219 = (state_32249[(10)]);
var inst_32221 = cljs.core.count.call(null,inst_32219);
var inst_32222 = (inst_32221 > (0));
var state_32249__$1 = state_32249;
if(cljs.core.truth_(inst_32222)){
var statearr_32258_32282 = state_32249__$1;
(statearr_32258_32282[(1)] = (4));

} else {
var statearr_32259_32283 = state_32249__$1;
(statearr_32259_32283[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32250 === (11))){
var inst_32219 = (state_32249[(10)]);
var inst_32238 = (state_32249[(2)]);
var tmp32257 = inst_32219;
var inst_32219__$1 = tmp32257;
var state_32249__$1 = (function (){var statearr_32260 = state_32249;
(statearr_32260[(11)] = inst_32238);

(statearr_32260[(10)] = inst_32219__$1);

return statearr_32260;
})();
var statearr_32261_32284 = state_32249__$1;
(statearr_32261_32284[(2)] = null);

(statearr_32261_32284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32250 === (9))){
var inst_32229 = (state_32249[(7)]);
var state_32249__$1 = state_32249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32249__$1,(11),out,inst_32229);
} else {
if((state_val_32250 === (5))){
var inst_32243 = cljs.core.async.close_BANG_.call(null,out);
var state_32249__$1 = state_32249;
var statearr_32262_32285 = state_32249__$1;
(statearr_32262_32285[(2)] = inst_32243);

(statearr_32262_32285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32250 === (10))){
var inst_32241 = (state_32249[(2)]);
var state_32249__$1 = state_32249;
var statearr_32263_32286 = state_32249__$1;
(statearr_32263_32286[(2)] = inst_32241);

(statearr_32263_32286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32250 === (8))){
var inst_32229 = (state_32249[(7)]);
var inst_32228 = (state_32249[(8)]);
var inst_32230 = (state_32249[(9)]);
var inst_32219 = (state_32249[(10)]);
var inst_32233 = (function (){var cs = inst_32219;
var vec__32224 = inst_32228;
var v = inst_32229;
var c = inst_32230;
return ((function (cs,vec__32224,v,c,inst_32229,inst_32228,inst_32230,inst_32219,state_val_32250,c__27796__auto___32277,out){
return (function (p1__32214_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32214_SHARP_);
});
;})(cs,vec__32224,v,c,inst_32229,inst_32228,inst_32230,inst_32219,state_val_32250,c__27796__auto___32277,out))
})();
var inst_32234 = cljs.core.filterv.call(null,inst_32233,inst_32219);
var inst_32219__$1 = inst_32234;
var state_32249__$1 = (function (){var statearr_32264 = state_32249;
(statearr_32264[(10)] = inst_32219__$1);

return statearr_32264;
})();
var statearr_32265_32287 = state_32249__$1;
(statearr_32265_32287[(2)] = null);

(statearr_32265_32287[(1)] = (2));


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
});})(c__27796__auto___32277,out))
;
return ((function (switch__27775__auto__,c__27796__auto___32277,out){
return (function() {
var cljs$core$async$state_machine__27776__auto__ = null;
var cljs$core$async$state_machine__27776__auto____0 = (function (){
var statearr_32269 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32269[(0)] = cljs$core$async$state_machine__27776__auto__);

(statearr_32269[(1)] = (1));

return statearr_32269;
});
var cljs$core$async$state_machine__27776__auto____1 = (function (state_32249){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_32249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e32270){if((e32270 instanceof Object)){
var ex__27779__auto__ = e32270;
var statearr_32271_32288 = state_32249;
(statearr_32271_32288[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32289 = state_32249;
state_32249 = G__32289;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$state_machine__27776__auto__ = function(state_32249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27776__auto____1.call(this,state_32249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27776__auto____0;
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27776__auto____1;
return cljs$core$async$state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___32277,out))
})();
var state__27798__auto__ = (function (){var statearr_32272 = f__27797__auto__.call(null);
(statearr_32272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___32277);

return statearr_32272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___32277,out))
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
var args32290 = [];
var len__25923__auto___32339 = arguments.length;
var i__25924__auto___32340 = (0);
while(true){
if((i__25924__auto___32340 < len__25923__auto___32339)){
args32290.push((arguments[i__25924__auto___32340]));

var G__32341 = (i__25924__auto___32340 + (1));
i__25924__auto___32340 = G__32341;
continue;
} else {
}
break;
}

var G__32292 = args32290.length;
switch (G__32292) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32290.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27796__auto___32343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___32343,out){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___32343,out){
return (function (state_32316){
var state_val_32317 = (state_32316[(1)]);
if((state_val_32317 === (7))){
var inst_32298 = (state_32316[(7)]);
var inst_32298__$1 = (state_32316[(2)]);
var inst_32299 = (inst_32298__$1 == null);
var inst_32300 = cljs.core.not.call(null,inst_32299);
var state_32316__$1 = (function (){var statearr_32318 = state_32316;
(statearr_32318[(7)] = inst_32298__$1);

return statearr_32318;
})();
if(inst_32300){
var statearr_32319_32344 = state_32316__$1;
(statearr_32319_32344[(1)] = (8));

} else {
var statearr_32320_32345 = state_32316__$1;
(statearr_32320_32345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (1))){
var inst_32293 = (0);
var state_32316__$1 = (function (){var statearr_32321 = state_32316;
(statearr_32321[(8)] = inst_32293);

return statearr_32321;
})();
var statearr_32322_32346 = state_32316__$1;
(statearr_32322_32346[(2)] = null);

(statearr_32322_32346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (4))){
var state_32316__$1 = state_32316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32316__$1,(7),ch);
} else {
if((state_val_32317 === (6))){
var inst_32311 = (state_32316[(2)]);
var state_32316__$1 = state_32316;
var statearr_32323_32347 = state_32316__$1;
(statearr_32323_32347[(2)] = inst_32311);

(statearr_32323_32347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (3))){
var inst_32313 = (state_32316[(2)]);
var inst_32314 = cljs.core.async.close_BANG_.call(null,out);
var state_32316__$1 = (function (){var statearr_32324 = state_32316;
(statearr_32324[(9)] = inst_32313);

return statearr_32324;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32316__$1,inst_32314);
} else {
if((state_val_32317 === (2))){
var inst_32293 = (state_32316[(8)]);
var inst_32295 = (inst_32293 < n);
var state_32316__$1 = state_32316;
if(cljs.core.truth_(inst_32295)){
var statearr_32325_32348 = state_32316__$1;
(statearr_32325_32348[(1)] = (4));

} else {
var statearr_32326_32349 = state_32316__$1;
(statearr_32326_32349[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (11))){
var inst_32293 = (state_32316[(8)]);
var inst_32303 = (state_32316[(2)]);
var inst_32304 = (inst_32293 + (1));
var inst_32293__$1 = inst_32304;
var state_32316__$1 = (function (){var statearr_32327 = state_32316;
(statearr_32327[(10)] = inst_32303);

(statearr_32327[(8)] = inst_32293__$1);

return statearr_32327;
})();
var statearr_32328_32350 = state_32316__$1;
(statearr_32328_32350[(2)] = null);

(statearr_32328_32350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (9))){
var state_32316__$1 = state_32316;
var statearr_32329_32351 = state_32316__$1;
(statearr_32329_32351[(2)] = null);

(statearr_32329_32351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (5))){
var state_32316__$1 = state_32316;
var statearr_32330_32352 = state_32316__$1;
(statearr_32330_32352[(2)] = null);

(statearr_32330_32352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (10))){
var inst_32308 = (state_32316[(2)]);
var state_32316__$1 = state_32316;
var statearr_32331_32353 = state_32316__$1;
(statearr_32331_32353[(2)] = inst_32308);

(statearr_32331_32353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32317 === (8))){
var inst_32298 = (state_32316[(7)]);
var state_32316__$1 = state_32316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32316__$1,(11),out,inst_32298);
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
});})(c__27796__auto___32343,out))
;
return ((function (switch__27775__auto__,c__27796__auto___32343,out){
return (function() {
var cljs$core$async$state_machine__27776__auto__ = null;
var cljs$core$async$state_machine__27776__auto____0 = (function (){
var statearr_32335 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32335[(0)] = cljs$core$async$state_machine__27776__auto__);

(statearr_32335[(1)] = (1));

return statearr_32335;
});
var cljs$core$async$state_machine__27776__auto____1 = (function (state_32316){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_32316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e32336){if((e32336 instanceof Object)){
var ex__27779__auto__ = e32336;
var statearr_32337_32354 = state_32316;
(statearr_32337_32354[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32355 = state_32316;
state_32316 = G__32355;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$state_machine__27776__auto__ = function(state_32316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27776__auto____1.call(this,state_32316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27776__auto____0;
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27776__auto____1;
return cljs$core$async$state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___32343,out))
})();
var state__27798__auto__ = (function (){var statearr_32338 = f__27797__auto__.call(null);
(statearr_32338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___32343);

return statearr_32338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___32343,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32363 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32363 = (function (map_LT_,f,ch,meta32364){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32364 = meta32364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32365,meta32364__$1){
var self__ = this;
var _32365__$1 = this;
return (new cljs.core.async.t_cljs$core$async32363(self__.map_LT_,self__.f,self__.ch,meta32364__$1));
});

cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32365){
var self__ = this;
var _32365__$1 = this;
return self__.meta32364;
});

cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32366 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32366 = (function (map_LT_,f,ch,meta32364,_,fn1,meta32367){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32364 = meta32364;
this._ = _;
this.fn1 = fn1;
this.meta32367 = meta32367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32368,meta32367__$1){
var self__ = this;
var _32368__$1 = this;
return (new cljs.core.async.t_cljs$core$async32366(self__.map_LT_,self__.f,self__.ch,self__.meta32364,self__._,self__.fn1,meta32367__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32368){
var self__ = this;
var _32368__$1 = this;
return self__.meta32367;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32356_SHARP_){
return f1.call(null,(((p1__32356_SHARP_ == null))?null:self__.f.call(null,p1__32356_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32366.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32364","meta32364",174061861,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32363","cljs.core.async/t_cljs$core$async32363",1055457234,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32367","meta32367",-1067923416,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32366";

cljs.core.async.t_cljs$core$async32366.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async32366");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32366 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32366(map_LT___$1,f__$1,ch__$1,meta32364__$1,___$2,fn1__$1,meta32367){
return (new cljs.core.async.t_cljs$core$async32366(map_LT___$1,f__$1,ch__$1,meta32364__$1,___$2,fn1__$1,meta32367));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32366(self__.map_LT_,self__.f,self__.ch,self__.meta32364,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32364","meta32364",174061861,null)], null);
});

cljs.core.async.t_cljs$core$async32363.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32363";

cljs.core.async.t_cljs$core$async32363.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async32363");
});

cljs.core.async.__GT_t_cljs$core$async32363 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32363(map_LT___$1,f__$1,ch__$1,meta32364){
return (new cljs.core.async.t_cljs$core$async32363(map_LT___$1,f__$1,ch__$1,meta32364));
});

}

return (new cljs.core.async.t_cljs$core$async32363(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32372 = (function (map_GT_,f,ch,meta32373){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32373 = meta32373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32374,meta32373__$1){
var self__ = this;
var _32374__$1 = this;
return (new cljs.core.async.t_cljs$core$async32372(self__.map_GT_,self__.f,self__.ch,meta32373__$1));
});

cljs.core.async.t_cljs$core$async32372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32374){
var self__ = this;
var _32374__$1 = this;
return self__.meta32373;
});

cljs.core.async.t_cljs$core$async32372.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32372.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32372.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32372.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32372.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32372.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32373","meta32373",1517777016,null)], null);
});

cljs.core.async.t_cljs$core$async32372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32372";

cljs.core.async.t_cljs$core$async32372.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async32372");
});

cljs.core.async.__GT_t_cljs$core$async32372 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32372(map_GT___$1,f__$1,ch__$1,meta32373){
return (new cljs.core.async.t_cljs$core$async32372(map_GT___$1,f__$1,ch__$1,meta32373));
});

}

return (new cljs.core.async.t_cljs$core$async32372(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32378 = (function (filter_GT_,p,ch,meta32379){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32379 = meta32379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32380,meta32379__$1){
var self__ = this;
var _32380__$1 = this;
return (new cljs.core.async.t_cljs$core$async32378(self__.filter_GT_,self__.p,self__.ch,meta32379__$1));
});

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32380){
var self__ = this;
var _32380__$1 = this;
return self__.meta32379;
});

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32379","meta32379",-1327121573,null)], null);
});

cljs.core.async.t_cljs$core$async32378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32378";

cljs.core.async.t_cljs$core$async32378.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async32378");
});

cljs.core.async.__GT_t_cljs$core$async32378 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32378(filter_GT___$1,p__$1,ch__$1,meta32379){
return (new cljs.core.async.t_cljs$core$async32378(filter_GT___$1,p__$1,ch__$1,meta32379));
});

}

return (new cljs.core.async.t_cljs$core$async32378(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args32381 = [];
var len__25923__auto___32425 = arguments.length;
var i__25924__auto___32426 = (0);
while(true){
if((i__25924__auto___32426 < len__25923__auto___32425)){
args32381.push((arguments[i__25924__auto___32426]));

var G__32427 = (i__25924__auto___32426 + (1));
i__25924__auto___32426 = G__32427;
continue;
} else {
}
break;
}

var G__32383 = args32381.length;
switch (G__32383) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32381.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27796__auto___32429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___32429,out){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___32429,out){
return (function (state_32404){
var state_val_32405 = (state_32404[(1)]);
if((state_val_32405 === (7))){
var inst_32400 = (state_32404[(2)]);
var state_32404__$1 = state_32404;
var statearr_32406_32430 = state_32404__$1;
(statearr_32406_32430[(2)] = inst_32400);

(statearr_32406_32430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (1))){
var state_32404__$1 = state_32404;
var statearr_32407_32431 = state_32404__$1;
(statearr_32407_32431[(2)] = null);

(statearr_32407_32431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (4))){
var inst_32386 = (state_32404[(7)]);
var inst_32386__$1 = (state_32404[(2)]);
var inst_32387 = (inst_32386__$1 == null);
var state_32404__$1 = (function (){var statearr_32408 = state_32404;
(statearr_32408[(7)] = inst_32386__$1);

return statearr_32408;
})();
if(cljs.core.truth_(inst_32387)){
var statearr_32409_32432 = state_32404__$1;
(statearr_32409_32432[(1)] = (5));

} else {
var statearr_32410_32433 = state_32404__$1;
(statearr_32410_32433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (6))){
var inst_32386 = (state_32404[(7)]);
var inst_32391 = p.call(null,inst_32386);
var state_32404__$1 = state_32404;
if(cljs.core.truth_(inst_32391)){
var statearr_32411_32434 = state_32404__$1;
(statearr_32411_32434[(1)] = (8));

} else {
var statearr_32412_32435 = state_32404__$1;
(statearr_32412_32435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (3))){
var inst_32402 = (state_32404[(2)]);
var state_32404__$1 = state_32404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32404__$1,inst_32402);
} else {
if((state_val_32405 === (2))){
var state_32404__$1 = state_32404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32404__$1,(4),ch);
} else {
if((state_val_32405 === (11))){
var inst_32394 = (state_32404[(2)]);
var state_32404__$1 = state_32404;
var statearr_32413_32436 = state_32404__$1;
(statearr_32413_32436[(2)] = inst_32394);

(statearr_32413_32436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (9))){
var state_32404__$1 = state_32404;
var statearr_32414_32437 = state_32404__$1;
(statearr_32414_32437[(2)] = null);

(statearr_32414_32437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (5))){
var inst_32389 = cljs.core.async.close_BANG_.call(null,out);
var state_32404__$1 = state_32404;
var statearr_32415_32438 = state_32404__$1;
(statearr_32415_32438[(2)] = inst_32389);

(statearr_32415_32438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (10))){
var inst_32397 = (state_32404[(2)]);
var state_32404__$1 = (function (){var statearr_32416 = state_32404;
(statearr_32416[(8)] = inst_32397);

return statearr_32416;
})();
var statearr_32417_32439 = state_32404__$1;
(statearr_32417_32439[(2)] = null);

(statearr_32417_32439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (8))){
var inst_32386 = (state_32404[(7)]);
var state_32404__$1 = state_32404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32404__$1,(11),out,inst_32386);
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
});})(c__27796__auto___32429,out))
;
return ((function (switch__27775__auto__,c__27796__auto___32429,out){
return (function() {
var cljs$core$async$state_machine__27776__auto__ = null;
var cljs$core$async$state_machine__27776__auto____0 = (function (){
var statearr_32421 = [null,null,null,null,null,null,null,null,null];
(statearr_32421[(0)] = cljs$core$async$state_machine__27776__auto__);

(statearr_32421[(1)] = (1));

return statearr_32421;
});
var cljs$core$async$state_machine__27776__auto____1 = (function (state_32404){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_32404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e32422){if((e32422 instanceof Object)){
var ex__27779__auto__ = e32422;
var statearr_32423_32440 = state_32404;
(statearr_32423_32440[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32441 = state_32404;
state_32404 = G__32441;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$state_machine__27776__auto__ = function(state_32404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27776__auto____1.call(this,state_32404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27776__auto____0;
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27776__auto____1;
return cljs$core$async$state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___32429,out))
})();
var state__27798__auto__ = (function (){var statearr_32424 = f__27797__auto__.call(null);
(statearr_32424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___32429);

return statearr_32424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___32429,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32442 = [];
var len__25923__auto___32445 = arguments.length;
var i__25924__auto___32446 = (0);
while(true){
if((i__25924__auto___32446 < len__25923__auto___32445)){
args32442.push((arguments[i__25924__auto___32446]));

var G__32447 = (i__25924__auto___32446 + (1));
i__25924__auto___32446 = G__32447;
continue;
} else {
}
break;
}

var G__32444 = args32442.length;
switch (G__32444) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32442.length)].join('')));

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
var c__27796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto__){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto__){
return (function (state_32614){
var state_val_32615 = (state_32614[(1)]);
if((state_val_32615 === (7))){
var inst_32610 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32616_32657 = state_32614__$1;
(statearr_32616_32657[(2)] = inst_32610);

(statearr_32616_32657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (20))){
var inst_32580 = (state_32614[(7)]);
var inst_32591 = (state_32614[(2)]);
var inst_32592 = cljs.core.next.call(null,inst_32580);
var inst_32566 = inst_32592;
var inst_32567 = null;
var inst_32568 = (0);
var inst_32569 = (0);
var state_32614__$1 = (function (){var statearr_32617 = state_32614;
(statearr_32617[(8)] = inst_32569);

(statearr_32617[(9)] = inst_32568);

(statearr_32617[(10)] = inst_32566);

(statearr_32617[(11)] = inst_32591);

(statearr_32617[(12)] = inst_32567);

return statearr_32617;
})();
var statearr_32618_32658 = state_32614__$1;
(statearr_32618_32658[(2)] = null);

(statearr_32618_32658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (1))){
var state_32614__$1 = state_32614;
var statearr_32619_32659 = state_32614__$1;
(statearr_32619_32659[(2)] = null);

(statearr_32619_32659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (4))){
var inst_32555 = (state_32614[(13)]);
var inst_32555__$1 = (state_32614[(2)]);
var inst_32556 = (inst_32555__$1 == null);
var state_32614__$1 = (function (){var statearr_32620 = state_32614;
(statearr_32620[(13)] = inst_32555__$1);

return statearr_32620;
})();
if(cljs.core.truth_(inst_32556)){
var statearr_32621_32660 = state_32614__$1;
(statearr_32621_32660[(1)] = (5));

} else {
var statearr_32622_32661 = state_32614__$1;
(statearr_32622_32661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (15))){
var state_32614__$1 = state_32614;
var statearr_32626_32662 = state_32614__$1;
(statearr_32626_32662[(2)] = null);

(statearr_32626_32662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (21))){
var state_32614__$1 = state_32614;
var statearr_32627_32663 = state_32614__$1;
(statearr_32627_32663[(2)] = null);

(statearr_32627_32663[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (13))){
var inst_32569 = (state_32614[(8)]);
var inst_32568 = (state_32614[(9)]);
var inst_32566 = (state_32614[(10)]);
var inst_32567 = (state_32614[(12)]);
var inst_32576 = (state_32614[(2)]);
var inst_32577 = (inst_32569 + (1));
var tmp32623 = inst_32568;
var tmp32624 = inst_32566;
var tmp32625 = inst_32567;
var inst_32566__$1 = tmp32624;
var inst_32567__$1 = tmp32625;
var inst_32568__$1 = tmp32623;
var inst_32569__$1 = inst_32577;
var state_32614__$1 = (function (){var statearr_32628 = state_32614;
(statearr_32628[(8)] = inst_32569__$1);

(statearr_32628[(9)] = inst_32568__$1);

(statearr_32628[(10)] = inst_32566__$1);

(statearr_32628[(14)] = inst_32576);

(statearr_32628[(12)] = inst_32567__$1);

return statearr_32628;
})();
var statearr_32629_32664 = state_32614__$1;
(statearr_32629_32664[(2)] = null);

(statearr_32629_32664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (22))){
var state_32614__$1 = state_32614;
var statearr_32630_32665 = state_32614__$1;
(statearr_32630_32665[(2)] = null);

(statearr_32630_32665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (6))){
var inst_32555 = (state_32614[(13)]);
var inst_32564 = f.call(null,inst_32555);
var inst_32565 = cljs.core.seq.call(null,inst_32564);
var inst_32566 = inst_32565;
var inst_32567 = null;
var inst_32568 = (0);
var inst_32569 = (0);
var state_32614__$1 = (function (){var statearr_32631 = state_32614;
(statearr_32631[(8)] = inst_32569);

(statearr_32631[(9)] = inst_32568);

(statearr_32631[(10)] = inst_32566);

(statearr_32631[(12)] = inst_32567);

return statearr_32631;
})();
var statearr_32632_32666 = state_32614__$1;
(statearr_32632_32666[(2)] = null);

(statearr_32632_32666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (17))){
var inst_32580 = (state_32614[(7)]);
var inst_32584 = cljs.core.chunk_first.call(null,inst_32580);
var inst_32585 = cljs.core.chunk_rest.call(null,inst_32580);
var inst_32586 = cljs.core.count.call(null,inst_32584);
var inst_32566 = inst_32585;
var inst_32567 = inst_32584;
var inst_32568 = inst_32586;
var inst_32569 = (0);
var state_32614__$1 = (function (){var statearr_32633 = state_32614;
(statearr_32633[(8)] = inst_32569);

(statearr_32633[(9)] = inst_32568);

(statearr_32633[(10)] = inst_32566);

(statearr_32633[(12)] = inst_32567);

return statearr_32633;
})();
var statearr_32634_32667 = state_32614__$1;
(statearr_32634_32667[(2)] = null);

(statearr_32634_32667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (3))){
var inst_32612 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32614__$1,inst_32612);
} else {
if((state_val_32615 === (12))){
var inst_32600 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32635_32668 = state_32614__$1;
(statearr_32635_32668[(2)] = inst_32600);

(statearr_32635_32668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (2))){
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32614__$1,(4),in$);
} else {
if((state_val_32615 === (23))){
var inst_32608 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32636_32669 = state_32614__$1;
(statearr_32636_32669[(2)] = inst_32608);

(statearr_32636_32669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (19))){
var inst_32595 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32637_32670 = state_32614__$1;
(statearr_32637_32670[(2)] = inst_32595);

(statearr_32637_32670[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (11))){
var inst_32580 = (state_32614[(7)]);
var inst_32566 = (state_32614[(10)]);
var inst_32580__$1 = cljs.core.seq.call(null,inst_32566);
var state_32614__$1 = (function (){var statearr_32638 = state_32614;
(statearr_32638[(7)] = inst_32580__$1);

return statearr_32638;
})();
if(inst_32580__$1){
var statearr_32639_32671 = state_32614__$1;
(statearr_32639_32671[(1)] = (14));

} else {
var statearr_32640_32672 = state_32614__$1;
(statearr_32640_32672[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (9))){
var inst_32602 = (state_32614[(2)]);
var inst_32603 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32614__$1 = (function (){var statearr_32641 = state_32614;
(statearr_32641[(15)] = inst_32602);

return statearr_32641;
})();
if(cljs.core.truth_(inst_32603)){
var statearr_32642_32673 = state_32614__$1;
(statearr_32642_32673[(1)] = (21));

} else {
var statearr_32643_32674 = state_32614__$1;
(statearr_32643_32674[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (5))){
var inst_32558 = cljs.core.async.close_BANG_.call(null,out);
var state_32614__$1 = state_32614;
var statearr_32644_32675 = state_32614__$1;
(statearr_32644_32675[(2)] = inst_32558);

(statearr_32644_32675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (14))){
var inst_32580 = (state_32614[(7)]);
var inst_32582 = cljs.core.chunked_seq_QMARK_.call(null,inst_32580);
var state_32614__$1 = state_32614;
if(inst_32582){
var statearr_32645_32676 = state_32614__$1;
(statearr_32645_32676[(1)] = (17));

} else {
var statearr_32646_32677 = state_32614__$1;
(statearr_32646_32677[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (16))){
var inst_32598 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32647_32678 = state_32614__$1;
(statearr_32647_32678[(2)] = inst_32598);

(statearr_32647_32678[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (10))){
var inst_32569 = (state_32614[(8)]);
var inst_32567 = (state_32614[(12)]);
var inst_32574 = cljs.core._nth.call(null,inst_32567,inst_32569);
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32614__$1,(13),out,inst_32574);
} else {
if((state_val_32615 === (18))){
var inst_32580 = (state_32614[(7)]);
var inst_32589 = cljs.core.first.call(null,inst_32580);
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32614__$1,(20),out,inst_32589);
} else {
if((state_val_32615 === (8))){
var inst_32569 = (state_32614[(8)]);
var inst_32568 = (state_32614[(9)]);
var inst_32571 = (inst_32569 < inst_32568);
var inst_32572 = inst_32571;
var state_32614__$1 = state_32614;
if(cljs.core.truth_(inst_32572)){
var statearr_32648_32679 = state_32614__$1;
(statearr_32648_32679[(1)] = (10));

} else {
var statearr_32649_32680 = state_32614__$1;
(statearr_32649_32680[(1)] = (11));

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
});})(c__27796__auto__))
;
return ((function (switch__27775__auto__,c__27796__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27776__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27776__auto____0 = (function (){
var statearr_32653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32653[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27776__auto__);

(statearr_32653[(1)] = (1));

return statearr_32653;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27776__auto____1 = (function (state_32614){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_32614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e32654){if((e32654 instanceof Object)){
var ex__27779__auto__ = e32654;
var statearr_32655_32681 = state_32614;
(statearr_32655_32681[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32682 = state_32614;
state_32614 = G__32682;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27776__auto__ = function(state_32614){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27776__auto____1.call(this,state_32614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27776__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27776__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto__))
})();
var state__27798__auto__ = (function (){var statearr_32656 = f__27797__auto__.call(null);
(statearr_32656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto__);

return statearr_32656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto__))
);

return c__27796__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32683 = [];
var len__25923__auto___32686 = arguments.length;
var i__25924__auto___32687 = (0);
while(true){
if((i__25924__auto___32687 < len__25923__auto___32686)){
args32683.push((arguments[i__25924__auto___32687]));

var G__32688 = (i__25924__auto___32687 + (1));
i__25924__auto___32687 = G__32688;
continue;
} else {
}
break;
}

var G__32685 = args32683.length;
switch (G__32685) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32683.length)].join('')));

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
var args32690 = [];
var len__25923__auto___32693 = arguments.length;
var i__25924__auto___32694 = (0);
while(true){
if((i__25924__auto___32694 < len__25923__auto___32693)){
args32690.push((arguments[i__25924__auto___32694]));

var G__32695 = (i__25924__auto___32694 + (1));
i__25924__auto___32694 = G__32695;
continue;
} else {
}
break;
}

var G__32692 = args32690.length;
switch (G__32692) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32690.length)].join('')));

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
var args32697 = [];
var len__25923__auto___32748 = arguments.length;
var i__25924__auto___32749 = (0);
while(true){
if((i__25924__auto___32749 < len__25923__auto___32748)){
args32697.push((arguments[i__25924__auto___32749]));

var G__32750 = (i__25924__auto___32749 + (1));
i__25924__auto___32749 = G__32750;
continue;
} else {
}
break;
}

var G__32699 = args32697.length;
switch (G__32699) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32697.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27796__auto___32752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___32752,out){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___32752,out){
return (function (state_32723){
var state_val_32724 = (state_32723[(1)]);
if((state_val_32724 === (7))){
var inst_32718 = (state_32723[(2)]);
var state_32723__$1 = state_32723;
var statearr_32725_32753 = state_32723__$1;
(statearr_32725_32753[(2)] = inst_32718);

(statearr_32725_32753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (1))){
var inst_32700 = null;
var state_32723__$1 = (function (){var statearr_32726 = state_32723;
(statearr_32726[(7)] = inst_32700);

return statearr_32726;
})();
var statearr_32727_32754 = state_32723__$1;
(statearr_32727_32754[(2)] = null);

(statearr_32727_32754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (4))){
var inst_32703 = (state_32723[(8)]);
var inst_32703__$1 = (state_32723[(2)]);
var inst_32704 = (inst_32703__$1 == null);
var inst_32705 = cljs.core.not.call(null,inst_32704);
var state_32723__$1 = (function (){var statearr_32728 = state_32723;
(statearr_32728[(8)] = inst_32703__$1);

return statearr_32728;
})();
if(inst_32705){
var statearr_32729_32755 = state_32723__$1;
(statearr_32729_32755[(1)] = (5));

} else {
var statearr_32730_32756 = state_32723__$1;
(statearr_32730_32756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (6))){
var state_32723__$1 = state_32723;
var statearr_32731_32757 = state_32723__$1;
(statearr_32731_32757[(2)] = null);

(statearr_32731_32757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (3))){
var inst_32720 = (state_32723[(2)]);
var inst_32721 = cljs.core.async.close_BANG_.call(null,out);
var state_32723__$1 = (function (){var statearr_32732 = state_32723;
(statearr_32732[(9)] = inst_32720);

return statearr_32732;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32723__$1,inst_32721);
} else {
if((state_val_32724 === (2))){
var state_32723__$1 = state_32723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32723__$1,(4),ch);
} else {
if((state_val_32724 === (11))){
var inst_32703 = (state_32723[(8)]);
var inst_32712 = (state_32723[(2)]);
var inst_32700 = inst_32703;
var state_32723__$1 = (function (){var statearr_32733 = state_32723;
(statearr_32733[(7)] = inst_32700);

(statearr_32733[(10)] = inst_32712);

return statearr_32733;
})();
var statearr_32734_32758 = state_32723__$1;
(statearr_32734_32758[(2)] = null);

(statearr_32734_32758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (9))){
var inst_32703 = (state_32723[(8)]);
var state_32723__$1 = state_32723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32723__$1,(11),out,inst_32703);
} else {
if((state_val_32724 === (5))){
var inst_32700 = (state_32723[(7)]);
var inst_32703 = (state_32723[(8)]);
var inst_32707 = cljs.core._EQ_.call(null,inst_32703,inst_32700);
var state_32723__$1 = state_32723;
if(inst_32707){
var statearr_32736_32759 = state_32723__$1;
(statearr_32736_32759[(1)] = (8));

} else {
var statearr_32737_32760 = state_32723__$1;
(statearr_32737_32760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (10))){
var inst_32715 = (state_32723[(2)]);
var state_32723__$1 = state_32723;
var statearr_32738_32761 = state_32723__$1;
(statearr_32738_32761[(2)] = inst_32715);

(statearr_32738_32761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32724 === (8))){
var inst_32700 = (state_32723[(7)]);
var tmp32735 = inst_32700;
var inst_32700__$1 = tmp32735;
var state_32723__$1 = (function (){var statearr_32739 = state_32723;
(statearr_32739[(7)] = inst_32700__$1);

return statearr_32739;
})();
var statearr_32740_32762 = state_32723__$1;
(statearr_32740_32762[(2)] = null);

(statearr_32740_32762[(1)] = (2));


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
});})(c__27796__auto___32752,out))
;
return ((function (switch__27775__auto__,c__27796__auto___32752,out){
return (function() {
var cljs$core$async$state_machine__27776__auto__ = null;
var cljs$core$async$state_machine__27776__auto____0 = (function (){
var statearr_32744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32744[(0)] = cljs$core$async$state_machine__27776__auto__);

(statearr_32744[(1)] = (1));

return statearr_32744;
});
var cljs$core$async$state_machine__27776__auto____1 = (function (state_32723){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_32723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e32745){if((e32745 instanceof Object)){
var ex__27779__auto__ = e32745;
var statearr_32746_32763 = state_32723;
(statearr_32746_32763[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32764 = state_32723;
state_32723 = G__32764;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$state_machine__27776__auto__ = function(state_32723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27776__auto____1.call(this,state_32723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27776__auto____0;
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27776__auto____1;
return cljs$core$async$state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___32752,out))
})();
var state__27798__auto__ = (function (){var statearr_32747 = f__27797__auto__.call(null);
(statearr_32747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___32752);

return statearr_32747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___32752,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32765 = [];
var len__25923__auto___32835 = arguments.length;
var i__25924__auto___32836 = (0);
while(true){
if((i__25924__auto___32836 < len__25923__auto___32835)){
args32765.push((arguments[i__25924__auto___32836]));

var G__32837 = (i__25924__auto___32836 + (1));
i__25924__auto___32836 = G__32837;
continue;
} else {
}
break;
}

var G__32767 = args32765.length;
switch (G__32767) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32765.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27796__auto___32839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___32839,out){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___32839,out){
return (function (state_32805){
var state_val_32806 = (state_32805[(1)]);
if((state_val_32806 === (7))){
var inst_32801 = (state_32805[(2)]);
var state_32805__$1 = state_32805;
var statearr_32807_32840 = state_32805__$1;
(statearr_32807_32840[(2)] = inst_32801);

(statearr_32807_32840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (1))){
var inst_32768 = (new Array(n));
var inst_32769 = inst_32768;
var inst_32770 = (0);
var state_32805__$1 = (function (){var statearr_32808 = state_32805;
(statearr_32808[(7)] = inst_32769);

(statearr_32808[(8)] = inst_32770);

return statearr_32808;
})();
var statearr_32809_32841 = state_32805__$1;
(statearr_32809_32841[(2)] = null);

(statearr_32809_32841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (4))){
var inst_32773 = (state_32805[(9)]);
var inst_32773__$1 = (state_32805[(2)]);
var inst_32774 = (inst_32773__$1 == null);
var inst_32775 = cljs.core.not.call(null,inst_32774);
var state_32805__$1 = (function (){var statearr_32810 = state_32805;
(statearr_32810[(9)] = inst_32773__$1);

return statearr_32810;
})();
if(inst_32775){
var statearr_32811_32842 = state_32805__$1;
(statearr_32811_32842[(1)] = (5));

} else {
var statearr_32812_32843 = state_32805__$1;
(statearr_32812_32843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (15))){
var inst_32795 = (state_32805[(2)]);
var state_32805__$1 = state_32805;
var statearr_32813_32844 = state_32805__$1;
(statearr_32813_32844[(2)] = inst_32795);

(statearr_32813_32844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (13))){
var state_32805__$1 = state_32805;
var statearr_32814_32845 = state_32805__$1;
(statearr_32814_32845[(2)] = null);

(statearr_32814_32845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (6))){
var inst_32770 = (state_32805[(8)]);
var inst_32791 = (inst_32770 > (0));
var state_32805__$1 = state_32805;
if(cljs.core.truth_(inst_32791)){
var statearr_32815_32846 = state_32805__$1;
(statearr_32815_32846[(1)] = (12));

} else {
var statearr_32816_32847 = state_32805__$1;
(statearr_32816_32847[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (3))){
var inst_32803 = (state_32805[(2)]);
var state_32805__$1 = state_32805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32805__$1,inst_32803);
} else {
if((state_val_32806 === (12))){
var inst_32769 = (state_32805[(7)]);
var inst_32793 = cljs.core.vec.call(null,inst_32769);
var state_32805__$1 = state_32805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32805__$1,(15),out,inst_32793);
} else {
if((state_val_32806 === (2))){
var state_32805__$1 = state_32805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32805__$1,(4),ch);
} else {
if((state_val_32806 === (11))){
var inst_32785 = (state_32805[(2)]);
var inst_32786 = (new Array(n));
var inst_32769 = inst_32786;
var inst_32770 = (0);
var state_32805__$1 = (function (){var statearr_32817 = state_32805;
(statearr_32817[(10)] = inst_32785);

(statearr_32817[(7)] = inst_32769);

(statearr_32817[(8)] = inst_32770);

return statearr_32817;
})();
var statearr_32818_32848 = state_32805__$1;
(statearr_32818_32848[(2)] = null);

(statearr_32818_32848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (9))){
var inst_32769 = (state_32805[(7)]);
var inst_32783 = cljs.core.vec.call(null,inst_32769);
var state_32805__$1 = state_32805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32805__$1,(11),out,inst_32783);
} else {
if((state_val_32806 === (5))){
var inst_32778 = (state_32805[(11)]);
var inst_32769 = (state_32805[(7)]);
var inst_32770 = (state_32805[(8)]);
var inst_32773 = (state_32805[(9)]);
var inst_32777 = (inst_32769[inst_32770] = inst_32773);
var inst_32778__$1 = (inst_32770 + (1));
var inst_32779 = (inst_32778__$1 < n);
var state_32805__$1 = (function (){var statearr_32819 = state_32805;
(statearr_32819[(12)] = inst_32777);

(statearr_32819[(11)] = inst_32778__$1);

return statearr_32819;
})();
if(cljs.core.truth_(inst_32779)){
var statearr_32820_32849 = state_32805__$1;
(statearr_32820_32849[(1)] = (8));

} else {
var statearr_32821_32850 = state_32805__$1;
(statearr_32821_32850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (14))){
var inst_32798 = (state_32805[(2)]);
var inst_32799 = cljs.core.async.close_BANG_.call(null,out);
var state_32805__$1 = (function (){var statearr_32823 = state_32805;
(statearr_32823[(13)] = inst_32798);

return statearr_32823;
})();
var statearr_32824_32851 = state_32805__$1;
(statearr_32824_32851[(2)] = inst_32799);

(statearr_32824_32851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (10))){
var inst_32789 = (state_32805[(2)]);
var state_32805__$1 = state_32805;
var statearr_32825_32852 = state_32805__$1;
(statearr_32825_32852[(2)] = inst_32789);

(statearr_32825_32852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32806 === (8))){
var inst_32778 = (state_32805[(11)]);
var inst_32769 = (state_32805[(7)]);
var tmp32822 = inst_32769;
var inst_32769__$1 = tmp32822;
var inst_32770 = inst_32778;
var state_32805__$1 = (function (){var statearr_32826 = state_32805;
(statearr_32826[(7)] = inst_32769__$1);

(statearr_32826[(8)] = inst_32770);

return statearr_32826;
})();
var statearr_32827_32853 = state_32805__$1;
(statearr_32827_32853[(2)] = null);

(statearr_32827_32853[(1)] = (2));


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
});})(c__27796__auto___32839,out))
;
return ((function (switch__27775__auto__,c__27796__auto___32839,out){
return (function() {
var cljs$core$async$state_machine__27776__auto__ = null;
var cljs$core$async$state_machine__27776__auto____0 = (function (){
var statearr_32831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32831[(0)] = cljs$core$async$state_machine__27776__auto__);

(statearr_32831[(1)] = (1));

return statearr_32831;
});
var cljs$core$async$state_machine__27776__auto____1 = (function (state_32805){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_32805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e32832){if((e32832 instanceof Object)){
var ex__27779__auto__ = e32832;
var statearr_32833_32854 = state_32805;
(statearr_32833_32854[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32855 = state_32805;
state_32805 = G__32855;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$state_machine__27776__auto__ = function(state_32805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27776__auto____1.call(this,state_32805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27776__auto____0;
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27776__auto____1;
return cljs$core$async$state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___32839,out))
})();
var state__27798__auto__ = (function (){var statearr_32834 = f__27797__auto__.call(null);
(statearr_32834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___32839);

return statearr_32834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___32839,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32856 = [];
var len__25923__auto___32930 = arguments.length;
var i__25924__auto___32931 = (0);
while(true){
if((i__25924__auto___32931 < len__25923__auto___32930)){
args32856.push((arguments[i__25924__auto___32931]));

var G__32932 = (i__25924__auto___32931 + (1));
i__25924__auto___32931 = G__32932;
continue;
} else {
}
break;
}

var G__32858 = args32856.length;
switch (G__32858) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32856.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27796__auto___32934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___32934,out){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___32934,out){
return (function (state_32900){
var state_val_32901 = (state_32900[(1)]);
if((state_val_32901 === (7))){
var inst_32896 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
var statearr_32902_32935 = state_32900__$1;
(statearr_32902_32935[(2)] = inst_32896);

(statearr_32902_32935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (1))){
var inst_32859 = [];
var inst_32860 = inst_32859;
var inst_32861 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32900__$1 = (function (){var statearr_32903 = state_32900;
(statearr_32903[(7)] = inst_32861);

(statearr_32903[(8)] = inst_32860);

return statearr_32903;
})();
var statearr_32904_32936 = state_32900__$1;
(statearr_32904_32936[(2)] = null);

(statearr_32904_32936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (4))){
var inst_32864 = (state_32900[(9)]);
var inst_32864__$1 = (state_32900[(2)]);
var inst_32865 = (inst_32864__$1 == null);
var inst_32866 = cljs.core.not.call(null,inst_32865);
var state_32900__$1 = (function (){var statearr_32905 = state_32900;
(statearr_32905[(9)] = inst_32864__$1);

return statearr_32905;
})();
if(inst_32866){
var statearr_32906_32937 = state_32900__$1;
(statearr_32906_32937[(1)] = (5));

} else {
var statearr_32907_32938 = state_32900__$1;
(statearr_32907_32938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (15))){
var inst_32890 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
var statearr_32908_32939 = state_32900__$1;
(statearr_32908_32939[(2)] = inst_32890);

(statearr_32908_32939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (13))){
var state_32900__$1 = state_32900;
var statearr_32909_32940 = state_32900__$1;
(statearr_32909_32940[(2)] = null);

(statearr_32909_32940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (6))){
var inst_32860 = (state_32900[(8)]);
var inst_32885 = inst_32860.length;
var inst_32886 = (inst_32885 > (0));
var state_32900__$1 = state_32900;
if(cljs.core.truth_(inst_32886)){
var statearr_32910_32941 = state_32900__$1;
(statearr_32910_32941[(1)] = (12));

} else {
var statearr_32911_32942 = state_32900__$1;
(statearr_32911_32942[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (3))){
var inst_32898 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32900__$1,inst_32898);
} else {
if((state_val_32901 === (12))){
var inst_32860 = (state_32900[(8)]);
var inst_32888 = cljs.core.vec.call(null,inst_32860);
var state_32900__$1 = state_32900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32900__$1,(15),out,inst_32888);
} else {
if((state_val_32901 === (2))){
var state_32900__$1 = state_32900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32900__$1,(4),ch);
} else {
if((state_val_32901 === (11))){
var inst_32864 = (state_32900[(9)]);
var inst_32868 = (state_32900[(10)]);
var inst_32878 = (state_32900[(2)]);
var inst_32879 = [];
var inst_32880 = inst_32879.push(inst_32864);
var inst_32860 = inst_32879;
var inst_32861 = inst_32868;
var state_32900__$1 = (function (){var statearr_32912 = state_32900;
(statearr_32912[(11)] = inst_32878);

(statearr_32912[(7)] = inst_32861);

(statearr_32912[(8)] = inst_32860);

(statearr_32912[(12)] = inst_32880);

return statearr_32912;
})();
var statearr_32913_32943 = state_32900__$1;
(statearr_32913_32943[(2)] = null);

(statearr_32913_32943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (9))){
var inst_32860 = (state_32900[(8)]);
var inst_32876 = cljs.core.vec.call(null,inst_32860);
var state_32900__$1 = state_32900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32900__$1,(11),out,inst_32876);
} else {
if((state_val_32901 === (5))){
var inst_32864 = (state_32900[(9)]);
var inst_32868 = (state_32900[(10)]);
var inst_32861 = (state_32900[(7)]);
var inst_32868__$1 = f.call(null,inst_32864);
var inst_32869 = cljs.core._EQ_.call(null,inst_32868__$1,inst_32861);
var inst_32870 = cljs.core.keyword_identical_QMARK_.call(null,inst_32861,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32871 = (inst_32869) || (inst_32870);
var state_32900__$1 = (function (){var statearr_32914 = state_32900;
(statearr_32914[(10)] = inst_32868__$1);

return statearr_32914;
})();
if(cljs.core.truth_(inst_32871)){
var statearr_32915_32944 = state_32900__$1;
(statearr_32915_32944[(1)] = (8));

} else {
var statearr_32916_32945 = state_32900__$1;
(statearr_32916_32945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (14))){
var inst_32893 = (state_32900[(2)]);
var inst_32894 = cljs.core.async.close_BANG_.call(null,out);
var state_32900__$1 = (function (){var statearr_32918 = state_32900;
(statearr_32918[(13)] = inst_32893);

return statearr_32918;
})();
var statearr_32919_32946 = state_32900__$1;
(statearr_32919_32946[(2)] = inst_32894);

(statearr_32919_32946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (10))){
var inst_32883 = (state_32900[(2)]);
var state_32900__$1 = state_32900;
var statearr_32920_32947 = state_32900__$1;
(statearr_32920_32947[(2)] = inst_32883);

(statearr_32920_32947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32901 === (8))){
var inst_32864 = (state_32900[(9)]);
var inst_32868 = (state_32900[(10)]);
var inst_32860 = (state_32900[(8)]);
var inst_32873 = inst_32860.push(inst_32864);
var tmp32917 = inst_32860;
var inst_32860__$1 = tmp32917;
var inst_32861 = inst_32868;
var state_32900__$1 = (function (){var statearr_32921 = state_32900;
(statearr_32921[(7)] = inst_32861);

(statearr_32921[(8)] = inst_32860__$1);

(statearr_32921[(14)] = inst_32873);

return statearr_32921;
})();
var statearr_32922_32948 = state_32900__$1;
(statearr_32922_32948[(2)] = null);

(statearr_32922_32948[(1)] = (2));


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
});})(c__27796__auto___32934,out))
;
return ((function (switch__27775__auto__,c__27796__auto___32934,out){
return (function() {
var cljs$core$async$state_machine__27776__auto__ = null;
var cljs$core$async$state_machine__27776__auto____0 = (function (){
var statearr_32926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32926[(0)] = cljs$core$async$state_machine__27776__auto__);

(statearr_32926[(1)] = (1));

return statearr_32926;
});
var cljs$core$async$state_machine__27776__auto____1 = (function (state_32900){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_32900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e32927){if((e32927 instanceof Object)){
var ex__27779__auto__ = e32927;
var statearr_32928_32949 = state_32900;
(statearr_32928_32949[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32950 = state_32900;
state_32900 = G__32950;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
cljs$core$async$state_machine__27776__auto__ = function(state_32900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27776__auto____1.call(this,state_32900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27776__auto____0;
cljs$core$async$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27776__auto____1;
return cljs$core$async$state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___32934,out))
})();
var state__27798__auto__ = (function (){var statearr_32929 = f__27797__auto__.call(null);
(statearr_32929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___32934);

return statearr_32929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___32934,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1523267563530