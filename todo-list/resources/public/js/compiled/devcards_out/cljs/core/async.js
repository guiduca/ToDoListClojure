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
var args29969 = [];
var len__25923__auto___29975 = arguments.length;
var i__25924__auto___29976 = (0);
while(true){
if((i__25924__auto___29976 < len__25923__auto___29975)){
args29969.push((arguments[i__25924__auto___29976]));

var G__29977 = (i__25924__auto___29976 + (1));
i__25924__auto___29976 = G__29977;
continue;
} else {
}
break;
}

var G__29971 = args29969.length;
switch (G__29971) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29969.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29972 = (function (f,blockable,meta29973){
this.f = f;
this.blockable = blockable;
this.meta29973 = meta29973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29974,meta29973__$1){
var self__ = this;
var _29974__$1 = this;
return (new cljs.core.async.t_cljs$core$async29972(self__.f,self__.blockable,meta29973__$1));
});

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29974){
var self__ = this;
var _29974__$1 = this;
return self__.meta29973;
});

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29973","meta29973",-900676906,null)], null);
});

cljs.core.async.t_cljs$core$async29972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29972";

cljs.core.async.t_cljs$core$async29972.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29972");
});

cljs.core.async.__GT_t_cljs$core$async29972 = (function cljs$core$async$__GT_t_cljs$core$async29972(f__$1,blockable__$1,meta29973){
return (new cljs.core.async.t_cljs$core$async29972(f__$1,blockable__$1,meta29973));
});

}

return (new cljs.core.async.t_cljs$core$async29972(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args29981 = [];
var len__25923__auto___29984 = arguments.length;
var i__25924__auto___29985 = (0);
while(true){
if((i__25924__auto___29985 < len__25923__auto___29984)){
args29981.push((arguments[i__25924__auto___29985]));

var G__29986 = (i__25924__auto___29985 + (1));
i__25924__auto___29985 = G__29986;
continue;
} else {
}
break;
}

var G__29983 = args29981.length;
switch (G__29983) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29981.length)].join('')));

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
var args29988 = [];
var len__25923__auto___29991 = arguments.length;
var i__25924__auto___29992 = (0);
while(true){
if((i__25924__auto___29992 < len__25923__auto___29991)){
args29988.push((arguments[i__25924__auto___29992]));

var G__29993 = (i__25924__auto___29992 + (1));
i__25924__auto___29992 = G__29993;
continue;
} else {
}
break;
}

var G__29990 = args29988.length;
switch (G__29990) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29988.length)].join('')));

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
var args29995 = [];
var len__25923__auto___29998 = arguments.length;
var i__25924__auto___29999 = (0);
while(true){
if((i__25924__auto___29999 < len__25923__auto___29998)){
args29995.push((arguments[i__25924__auto___29999]));

var G__30000 = (i__25924__auto___29999 + (1));
i__25924__auto___29999 = G__30000;
continue;
} else {
}
break;
}

var G__29997 = args29995.length;
switch (G__29997) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29995.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30002 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30002);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30002,ret){
return (function (){
return fn1.call(null,val_30002);
});})(val_30002,ret))
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
var args30003 = [];
var len__25923__auto___30006 = arguments.length;
var i__25924__auto___30007 = (0);
while(true){
if((i__25924__auto___30007 < len__25923__auto___30006)){
args30003.push((arguments[i__25924__auto___30007]));

var G__30008 = (i__25924__auto___30007 + (1));
i__25924__auto___30007 = G__30008;
continue;
} else {
}
break;
}

var G__30005 = args30003.length;
switch (G__30005) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30003.length)].join('')));

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
var n__25763__auto___30010 = n;
var x_30011 = (0);
while(true){
if((x_30011 < n__25763__auto___30010)){
(a[x_30011] = (0));

var G__30012 = (x_30011 + (1));
x_30011 = G__30012;
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

var G__30013 = (i + (1));
i = G__30013;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30017 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30017 = (function (alt_flag,flag,meta30018){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30018 = meta30018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30019,meta30018__$1){
var self__ = this;
var _30019__$1 = this;
return (new cljs.core.async.t_cljs$core$async30017(self__.alt_flag,self__.flag,meta30018__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30017.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30019){
var self__ = this;
var _30019__$1 = this;
return self__.meta30018;
});})(flag))
;

cljs.core.async.t_cljs$core$async30017.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30017.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30017.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30018","meta30018",738575934,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30017.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30017";

cljs.core.async.t_cljs$core$async30017.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30017");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30017 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30017(alt_flag__$1,flag__$1,meta30018){
return (new cljs.core.async.t_cljs$core$async30017(alt_flag__$1,flag__$1,meta30018));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30017(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30023 = (function (alt_handler,flag,cb,meta30024){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30024 = meta30024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30025,meta30024__$1){
var self__ = this;
var _30025__$1 = this;
return (new cljs.core.async.t_cljs$core$async30023(self__.alt_handler,self__.flag,self__.cb,meta30024__$1));
});

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30025){
var self__ = this;
var _30025__$1 = this;
return self__.meta30024;
});

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30024","meta30024",-144604471,null)], null);
});

cljs.core.async.t_cljs$core$async30023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30023";

cljs.core.async.t_cljs$core$async30023.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30023");
});

cljs.core.async.__GT_t_cljs$core$async30023 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30023(alt_handler__$1,flag__$1,cb__$1,meta30024){
return (new cljs.core.async.t_cljs$core$async30023(alt_handler__$1,flag__$1,cb__$1,meta30024));
});

}

return (new cljs.core.async.t_cljs$core$async30023(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30026_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30026_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30027_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30027_SHARP_,port], null));
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
var G__30028 = (i + (1));
i = G__30028;
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
var len__25923__auto___30034 = arguments.length;
var i__25924__auto___30035 = (0);
while(true){
if((i__25924__auto___30035 < len__25923__auto___30034)){
args__25930__auto__.push((arguments[i__25924__auto___30035]));

var G__30036 = (i__25924__auto___30035 + (1));
i__25924__auto___30035 = G__30036;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30031){
var map__30032 = p__30031;
var map__30032__$1 = ((((!((map__30032 == null)))?((((map__30032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30032):map__30032);
var opts = map__30032__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30029){
var G__30030 = cljs.core.first.call(null,seq30029);
var seq30029__$1 = cljs.core.next.call(null,seq30029);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30030,seq30029__$1);
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
var args30037 = [];
var len__25923__auto___30087 = arguments.length;
var i__25924__auto___30088 = (0);
while(true){
if((i__25924__auto___30088 < len__25923__auto___30087)){
args30037.push((arguments[i__25924__auto___30088]));

var G__30089 = (i__25924__auto___30088 + (1));
i__25924__auto___30088 = G__30089;
continue;
} else {
}
break;
}

var G__30039 = args30037.length;
switch (G__30039) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30037.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29924__auto___30091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___30091){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___30091){
return (function (state_30063){
var state_val_30064 = (state_30063[(1)]);
if((state_val_30064 === (7))){
var inst_30059 = (state_30063[(2)]);
var state_30063__$1 = state_30063;
var statearr_30065_30092 = state_30063__$1;
(statearr_30065_30092[(2)] = inst_30059);

(statearr_30065_30092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (1))){
var state_30063__$1 = state_30063;
var statearr_30066_30093 = state_30063__$1;
(statearr_30066_30093[(2)] = null);

(statearr_30066_30093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (4))){
var inst_30042 = (state_30063[(7)]);
var inst_30042__$1 = (state_30063[(2)]);
var inst_30043 = (inst_30042__$1 == null);
var state_30063__$1 = (function (){var statearr_30067 = state_30063;
(statearr_30067[(7)] = inst_30042__$1);

return statearr_30067;
})();
if(cljs.core.truth_(inst_30043)){
var statearr_30068_30094 = state_30063__$1;
(statearr_30068_30094[(1)] = (5));

} else {
var statearr_30069_30095 = state_30063__$1;
(statearr_30069_30095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (13))){
var state_30063__$1 = state_30063;
var statearr_30070_30096 = state_30063__$1;
(statearr_30070_30096[(2)] = null);

(statearr_30070_30096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (6))){
var inst_30042 = (state_30063[(7)]);
var state_30063__$1 = state_30063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30063__$1,(11),to,inst_30042);
} else {
if((state_val_30064 === (3))){
var inst_30061 = (state_30063[(2)]);
var state_30063__$1 = state_30063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30063__$1,inst_30061);
} else {
if((state_val_30064 === (12))){
var state_30063__$1 = state_30063;
var statearr_30071_30097 = state_30063__$1;
(statearr_30071_30097[(2)] = null);

(statearr_30071_30097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (2))){
var state_30063__$1 = state_30063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30063__$1,(4),from);
} else {
if((state_val_30064 === (11))){
var inst_30052 = (state_30063[(2)]);
var state_30063__$1 = state_30063;
if(cljs.core.truth_(inst_30052)){
var statearr_30072_30098 = state_30063__$1;
(statearr_30072_30098[(1)] = (12));

} else {
var statearr_30073_30099 = state_30063__$1;
(statearr_30073_30099[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (9))){
var state_30063__$1 = state_30063;
var statearr_30074_30100 = state_30063__$1;
(statearr_30074_30100[(2)] = null);

(statearr_30074_30100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (5))){
var state_30063__$1 = state_30063;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30075_30101 = state_30063__$1;
(statearr_30075_30101[(1)] = (8));

} else {
var statearr_30076_30102 = state_30063__$1;
(statearr_30076_30102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (14))){
var inst_30057 = (state_30063[(2)]);
var state_30063__$1 = state_30063;
var statearr_30077_30103 = state_30063__$1;
(statearr_30077_30103[(2)] = inst_30057);

(statearr_30077_30103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (10))){
var inst_30049 = (state_30063[(2)]);
var state_30063__$1 = state_30063;
var statearr_30078_30104 = state_30063__$1;
(statearr_30078_30104[(2)] = inst_30049);

(statearr_30078_30104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30064 === (8))){
var inst_30046 = cljs.core.async.close_BANG_.call(null,to);
var state_30063__$1 = state_30063;
var statearr_30079_30105 = state_30063__$1;
(statearr_30079_30105[(2)] = inst_30046);

(statearr_30079_30105[(1)] = (10));


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
});})(c__29924__auto___30091))
;
return ((function (switch__29859__auto__,c__29924__auto___30091){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_30083 = [null,null,null,null,null,null,null,null];
(statearr_30083[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_30083[(1)] = (1));

return statearr_30083;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_30063){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30084){if((e30084 instanceof Object)){
var ex__29863__auto__ = e30084;
var statearr_30085_30106 = state_30063;
(statearr_30085_30106[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30107 = state_30063;
state_30063 = G__30107;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_30063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_30063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___30091))
})();
var state__29926__auto__ = (function (){var statearr_30086 = f__29925__auto__.call(null);
(statearr_30086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___30091);

return statearr_30086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___30091))
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
return (function (p__30295){
var vec__30296 = p__30295;
var v = cljs.core.nth.call(null,vec__30296,(0),null);
var p = cljs.core.nth.call(null,vec__30296,(1),null);
var job = vec__30296;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29924__auto___30482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___30482,res,vec__30296,v,p,job,jobs,results){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___30482,res,vec__30296,v,p,job,jobs,results){
return (function (state_30303){
var state_val_30304 = (state_30303[(1)]);
if((state_val_30304 === (1))){
var state_30303__$1 = state_30303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30303__$1,(2),res,v);
} else {
if((state_val_30304 === (2))){
var inst_30300 = (state_30303[(2)]);
var inst_30301 = cljs.core.async.close_BANG_.call(null,res);
var state_30303__$1 = (function (){var statearr_30305 = state_30303;
(statearr_30305[(7)] = inst_30300);

return statearr_30305;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30303__$1,inst_30301);
} else {
return null;
}
}
});})(c__29924__auto___30482,res,vec__30296,v,p,job,jobs,results))
;
return ((function (switch__29859__auto__,c__29924__auto___30482,res,vec__30296,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0 = (function (){
var statearr_30309 = [null,null,null,null,null,null,null,null];
(statearr_30309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__);

(statearr_30309[(1)] = (1));

return statearr_30309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1 = (function (state_30303){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30310){if((e30310 instanceof Object)){
var ex__29863__auto__ = e30310;
var statearr_30311_30483 = state_30303;
(statearr_30311_30483[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30484 = state_30303;
state_30303 = G__30484;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = function(state_30303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1.call(this,state_30303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___30482,res,vec__30296,v,p,job,jobs,results))
})();
var state__29926__auto__ = (function (){var statearr_30312 = f__29925__auto__.call(null);
(statearr_30312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___30482);

return statearr_30312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___30482,res,vec__30296,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30313){
var vec__30314 = p__30313;
var v = cljs.core.nth.call(null,vec__30314,(0),null);
var p = cljs.core.nth.call(null,vec__30314,(1),null);
var job = vec__30314;
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
var n__25763__auto___30485 = n;
var __30486 = (0);
while(true){
if((__30486 < n__25763__auto___30485)){
var G__30317_30487 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30317_30487) {
case "compute":
var c__29924__auto___30489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30486,c__29924__auto___30489,G__30317_30487,n__25763__auto___30485,jobs,results,process,async){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (__30486,c__29924__auto___30489,G__30317_30487,n__25763__auto___30485,jobs,results,process,async){
return (function (state_30330){
var state_val_30331 = (state_30330[(1)]);
if((state_val_30331 === (1))){
var state_30330__$1 = state_30330;
var statearr_30332_30490 = state_30330__$1;
(statearr_30332_30490[(2)] = null);

(statearr_30332_30490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (2))){
var state_30330__$1 = state_30330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30330__$1,(4),jobs);
} else {
if((state_val_30331 === (3))){
var inst_30328 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30330__$1,inst_30328);
} else {
if((state_val_30331 === (4))){
var inst_30320 = (state_30330[(2)]);
var inst_30321 = process.call(null,inst_30320);
var state_30330__$1 = state_30330;
if(cljs.core.truth_(inst_30321)){
var statearr_30333_30491 = state_30330__$1;
(statearr_30333_30491[(1)] = (5));

} else {
var statearr_30334_30492 = state_30330__$1;
(statearr_30334_30492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (5))){
var state_30330__$1 = state_30330;
var statearr_30335_30493 = state_30330__$1;
(statearr_30335_30493[(2)] = null);

(statearr_30335_30493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (6))){
var state_30330__$1 = state_30330;
var statearr_30336_30494 = state_30330__$1;
(statearr_30336_30494[(2)] = null);

(statearr_30336_30494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30331 === (7))){
var inst_30326 = (state_30330[(2)]);
var state_30330__$1 = state_30330;
var statearr_30337_30495 = state_30330__$1;
(statearr_30337_30495[(2)] = inst_30326);

(statearr_30337_30495[(1)] = (3));


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
});})(__30486,c__29924__auto___30489,G__30317_30487,n__25763__auto___30485,jobs,results,process,async))
;
return ((function (__30486,switch__29859__auto__,c__29924__auto___30489,G__30317_30487,n__25763__auto___30485,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0 = (function (){
var statearr_30341 = [null,null,null,null,null,null,null];
(statearr_30341[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__);

(statearr_30341[(1)] = (1));

return statearr_30341;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1 = (function (state_30330){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30342){if((e30342 instanceof Object)){
var ex__29863__auto__ = e30342;
var statearr_30343_30496 = state_30330;
(statearr_30343_30496[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30497 = state_30330;
state_30330 = G__30497;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = function(state_30330){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1.call(this,state_30330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__;
})()
;})(__30486,switch__29859__auto__,c__29924__auto___30489,G__30317_30487,n__25763__auto___30485,jobs,results,process,async))
})();
var state__29926__auto__ = (function (){var statearr_30344 = f__29925__auto__.call(null);
(statearr_30344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___30489);

return statearr_30344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(__30486,c__29924__auto___30489,G__30317_30487,n__25763__auto___30485,jobs,results,process,async))
);


break;
case "async":
var c__29924__auto___30498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30486,c__29924__auto___30498,G__30317_30487,n__25763__auto___30485,jobs,results,process,async){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (__30486,c__29924__auto___30498,G__30317_30487,n__25763__auto___30485,jobs,results,process,async){
return (function (state_30357){
var state_val_30358 = (state_30357[(1)]);
if((state_val_30358 === (1))){
var state_30357__$1 = state_30357;
var statearr_30359_30499 = state_30357__$1;
(statearr_30359_30499[(2)] = null);

(statearr_30359_30499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (2))){
var state_30357__$1 = state_30357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30357__$1,(4),jobs);
} else {
if((state_val_30358 === (3))){
var inst_30355 = (state_30357[(2)]);
var state_30357__$1 = state_30357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30357__$1,inst_30355);
} else {
if((state_val_30358 === (4))){
var inst_30347 = (state_30357[(2)]);
var inst_30348 = async.call(null,inst_30347);
var state_30357__$1 = state_30357;
if(cljs.core.truth_(inst_30348)){
var statearr_30360_30500 = state_30357__$1;
(statearr_30360_30500[(1)] = (5));

} else {
var statearr_30361_30501 = state_30357__$1;
(statearr_30361_30501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (5))){
var state_30357__$1 = state_30357;
var statearr_30362_30502 = state_30357__$1;
(statearr_30362_30502[(2)] = null);

(statearr_30362_30502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (6))){
var state_30357__$1 = state_30357;
var statearr_30363_30503 = state_30357__$1;
(statearr_30363_30503[(2)] = null);

(statearr_30363_30503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30358 === (7))){
var inst_30353 = (state_30357[(2)]);
var state_30357__$1 = state_30357;
var statearr_30364_30504 = state_30357__$1;
(statearr_30364_30504[(2)] = inst_30353);

(statearr_30364_30504[(1)] = (3));


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
});})(__30486,c__29924__auto___30498,G__30317_30487,n__25763__auto___30485,jobs,results,process,async))
;
return ((function (__30486,switch__29859__auto__,c__29924__auto___30498,G__30317_30487,n__25763__auto___30485,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0 = (function (){
var statearr_30368 = [null,null,null,null,null,null,null];
(statearr_30368[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__);

(statearr_30368[(1)] = (1));

return statearr_30368;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1 = (function (state_30357){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30369){if((e30369 instanceof Object)){
var ex__29863__auto__ = e30369;
var statearr_30370_30505 = state_30357;
(statearr_30370_30505[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30506 = state_30357;
state_30357 = G__30506;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = function(state_30357){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1.call(this,state_30357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__;
})()
;})(__30486,switch__29859__auto__,c__29924__auto___30498,G__30317_30487,n__25763__auto___30485,jobs,results,process,async))
})();
var state__29926__auto__ = (function (){var statearr_30371 = f__29925__auto__.call(null);
(statearr_30371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___30498);

return statearr_30371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(__30486,c__29924__auto___30498,G__30317_30487,n__25763__auto___30485,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30507 = (__30486 + (1));
__30486 = G__30507;
continue;
} else {
}
break;
}

var c__29924__auto___30508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___30508,jobs,results,process,async){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___30508,jobs,results,process,async){
return (function (state_30393){
var state_val_30394 = (state_30393[(1)]);
if((state_val_30394 === (1))){
var state_30393__$1 = state_30393;
var statearr_30395_30509 = state_30393__$1;
(statearr_30395_30509[(2)] = null);

(statearr_30395_30509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30394 === (2))){
var state_30393__$1 = state_30393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30393__$1,(4),from);
} else {
if((state_val_30394 === (3))){
var inst_30391 = (state_30393[(2)]);
var state_30393__$1 = state_30393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30393__$1,inst_30391);
} else {
if((state_val_30394 === (4))){
var inst_30374 = (state_30393[(7)]);
var inst_30374__$1 = (state_30393[(2)]);
var inst_30375 = (inst_30374__$1 == null);
var state_30393__$1 = (function (){var statearr_30396 = state_30393;
(statearr_30396[(7)] = inst_30374__$1);

return statearr_30396;
})();
if(cljs.core.truth_(inst_30375)){
var statearr_30397_30510 = state_30393__$1;
(statearr_30397_30510[(1)] = (5));

} else {
var statearr_30398_30511 = state_30393__$1;
(statearr_30398_30511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30394 === (5))){
var inst_30377 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30393__$1 = state_30393;
var statearr_30399_30512 = state_30393__$1;
(statearr_30399_30512[(2)] = inst_30377);

(statearr_30399_30512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30394 === (6))){
var inst_30374 = (state_30393[(7)]);
var inst_30379 = (state_30393[(8)]);
var inst_30379__$1 = cljs.core.async.chan.call(null,(1));
var inst_30380 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30381 = [inst_30374,inst_30379__$1];
var inst_30382 = (new cljs.core.PersistentVector(null,2,(5),inst_30380,inst_30381,null));
var state_30393__$1 = (function (){var statearr_30400 = state_30393;
(statearr_30400[(8)] = inst_30379__$1);

return statearr_30400;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30393__$1,(8),jobs,inst_30382);
} else {
if((state_val_30394 === (7))){
var inst_30389 = (state_30393[(2)]);
var state_30393__$1 = state_30393;
var statearr_30401_30513 = state_30393__$1;
(statearr_30401_30513[(2)] = inst_30389);

(statearr_30401_30513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30394 === (8))){
var inst_30379 = (state_30393[(8)]);
var inst_30384 = (state_30393[(2)]);
var state_30393__$1 = (function (){var statearr_30402 = state_30393;
(statearr_30402[(9)] = inst_30384);

return statearr_30402;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30393__$1,(9),results,inst_30379);
} else {
if((state_val_30394 === (9))){
var inst_30386 = (state_30393[(2)]);
var state_30393__$1 = (function (){var statearr_30403 = state_30393;
(statearr_30403[(10)] = inst_30386);

return statearr_30403;
})();
var statearr_30404_30514 = state_30393__$1;
(statearr_30404_30514[(2)] = null);

(statearr_30404_30514[(1)] = (2));


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
});})(c__29924__auto___30508,jobs,results,process,async))
;
return ((function (switch__29859__auto__,c__29924__auto___30508,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0 = (function (){
var statearr_30408 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__);

(statearr_30408[(1)] = (1));

return statearr_30408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1 = (function (state_30393){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30409){if((e30409 instanceof Object)){
var ex__29863__auto__ = e30409;
var statearr_30410_30515 = state_30393;
(statearr_30410_30515[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30516 = state_30393;
state_30393 = G__30516;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = function(state_30393){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1.call(this,state_30393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___30508,jobs,results,process,async))
})();
var state__29926__auto__ = (function (){var statearr_30411 = f__29925__auto__.call(null);
(statearr_30411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___30508);

return statearr_30411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___30508,jobs,results,process,async))
);


var c__29924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto__,jobs,results,process,async){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto__,jobs,results,process,async){
return (function (state_30449){
var state_val_30450 = (state_30449[(1)]);
if((state_val_30450 === (7))){
var inst_30445 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
var statearr_30451_30517 = state_30449__$1;
(statearr_30451_30517[(2)] = inst_30445);

(statearr_30451_30517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (20))){
var state_30449__$1 = state_30449;
var statearr_30452_30518 = state_30449__$1;
(statearr_30452_30518[(2)] = null);

(statearr_30452_30518[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (1))){
var state_30449__$1 = state_30449;
var statearr_30453_30519 = state_30449__$1;
(statearr_30453_30519[(2)] = null);

(statearr_30453_30519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (4))){
var inst_30414 = (state_30449[(7)]);
var inst_30414__$1 = (state_30449[(2)]);
var inst_30415 = (inst_30414__$1 == null);
var state_30449__$1 = (function (){var statearr_30454 = state_30449;
(statearr_30454[(7)] = inst_30414__$1);

return statearr_30454;
})();
if(cljs.core.truth_(inst_30415)){
var statearr_30455_30520 = state_30449__$1;
(statearr_30455_30520[(1)] = (5));

} else {
var statearr_30456_30521 = state_30449__$1;
(statearr_30456_30521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (15))){
var inst_30427 = (state_30449[(8)]);
var state_30449__$1 = state_30449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30449__$1,(18),to,inst_30427);
} else {
if((state_val_30450 === (21))){
var inst_30440 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
var statearr_30457_30522 = state_30449__$1;
(statearr_30457_30522[(2)] = inst_30440);

(statearr_30457_30522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (13))){
var inst_30442 = (state_30449[(2)]);
var state_30449__$1 = (function (){var statearr_30458 = state_30449;
(statearr_30458[(9)] = inst_30442);

return statearr_30458;
})();
var statearr_30459_30523 = state_30449__$1;
(statearr_30459_30523[(2)] = null);

(statearr_30459_30523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (6))){
var inst_30414 = (state_30449[(7)]);
var state_30449__$1 = state_30449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30449__$1,(11),inst_30414);
} else {
if((state_val_30450 === (17))){
var inst_30435 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
if(cljs.core.truth_(inst_30435)){
var statearr_30460_30524 = state_30449__$1;
(statearr_30460_30524[(1)] = (19));

} else {
var statearr_30461_30525 = state_30449__$1;
(statearr_30461_30525[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (3))){
var inst_30447 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30449__$1,inst_30447);
} else {
if((state_val_30450 === (12))){
var inst_30424 = (state_30449[(10)]);
var state_30449__$1 = state_30449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30449__$1,(14),inst_30424);
} else {
if((state_val_30450 === (2))){
var state_30449__$1 = state_30449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30449__$1,(4),results);
} else {
if((state_val_30450 === (19))){
var state_30449__$1 = state_30449;
var statearr_30462_30526 = state_30449__$1;
(statearr_30462_30526[(2)] = null);

(statearr_30462_30526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (11))){
var inst_30424 = (state_30449[(2)]);
var state_30449__$1 = (function (){var statearr_30463 = state_30449;
(statearr_30463[(10)] = inst_30424);

return statearr_30463;
})();
var statearr_30464_30527 = state_30449__$1;
(statearr_30464_30527[(2)] = null);

(statearr_30464_30527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (9))){
var state_30449__$1 = state_30449;
var statearr_30465_30528 = state_30449__$1;
(statearr_30465_30528[(2)] = null);

(statearr_30465_30528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (5))){
var state_30449__$1 = state_30449;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30466_30529 = state_30449__$1;
(statearr_30466_30529[(1)] = (8));

} else {
var statearr_30467_30530 = state_30449__$1;
(statearr_30467_30530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (14))){
var inst_30427 = (state_30449[(8)]);
var inst_30429 = (state_30449[(11)]);
var inst_30427__$1 = (state_30449[(2)]);
var inst_30428 = (inst_30427__$1 == null);
var inst_30429__$1 = cljs.core.not.call(null,inst_30428);
var state_30449__$1 = (function (){var statearr_30468 = state_30449;
(statearr_30468[(8)] = inst_30427__$1);

(statearr_30468[(11)] = inst_30429__$1);

return statearr_30468;
})();
if(inst_30429__$1){
var statearr_30469_30531 = state_30449__$1;
(statearr_30469_30531[(1)] = (15));

} else {
var statearr_30470_30532 = state_30449__$1;
(statearr_30470_30532[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (16))){
var inst_30429 = (state_30449[(11)]);
var state_30449__$1 = state_30449;
var statearr_30471_30533 = state_30449__$1;
(statearr_30471_30533[(2)] = inst_30429);

(statearr_30471_30533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (10))){
var inst_30421 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
var statearr_30472_30534 = state_30449__$1;
(statearr_30472_30534[(2)] = inst_30421);

(statearr_30472_30534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (18))){
var inst_30432 = (state_30449[(2)]);
var state_30449__$1 = state_30449;
var statearr_30473_30535 = state_30449__$1;
(statearr_30473_30535[(2)] = inst_30432);

(statearr_30473_30535[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30450 === (8))){
var inst_30418 = cljs.core.async.close_BANG_.call(null,to);
var state_30449__$1 = state_30449;
var statearr_30474_30536 = state_30449__$1;
(statearr_30474_30536[(2)] = inst_30418);

(statearr_30474_30536[(1)] = (10));


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
});})(c__29924__auto__,jobs,results,process,async))
;
return ((function (switch__29859__auto__,c__29924__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0 = (function (){
var statearr_30478 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30478[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__);

(statearr_30478[(1)] = (1));

return statearr_30478;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1 = (function (state_30449){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30479){if((e30479 instanceof Object)){
var ex__29863__auto__ = e30479;
var statearr_30480_30537 = state_30449;
(statearr_30480_30537[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30538 = state_30449;
state_30449 = G__30538;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__ = function(state_30449){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1.call(this,state_30449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29860__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto__,jobs,results,process,async))
})();
var state__29926__auto__ = (function (){var statearr_30481 = f__29925__auto__.call(null);
(statearr_30481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto__);

return statearr_30481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto__,jobs,results,process,async))
);

return c__29924__auto__;
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
var args30539 = [];
var len__25923__auto___30542 = arguments.length;
var i__25924__auto___30543 = (0);
while(true){
if((i__25924__auto___30543 < len__25923__auto___30542)){
args30539.push((arguments[i__25924__auto___30543]));

var G__30544 = (i__25924__auto___30543 + (1));
i__25924__auto___30543 = G__30544;
continue;
} else {
}
break;
}

var G__30541 = args30539.length;
switch (G__30541) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30539.length)].join('')));

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
var args30546 = [];
var len__25923__auto___30549 = arguments.length;
var i__25924__auto___30550 = (0);
while(true){
if((i__25924__auto___30550 < len__25923__auto___30549)){
args30546.push((arguments[i__25924__auto___30550]));

var G__30551 = (i__25924__auto___30550 + (1));
i__25924__auto___30550 = G__30551;
continue;
} else {
}
break;
}

var G__30548 = args30546.length;
switch (G__30548) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30546.length)].join('')));

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
var args30553 = [];
var len__25923__auto___30606 = arguments.length;
var i__25924__auto___30607 = (0);
while(true){
if((i__25924__auto___30607 < len__25923__auto___30606)){
args30553.push((arguments[i__25924__auto___30607]));

var G__30608 = (i__25924__auto___30607 + (1));
i__25924__auto___30607 = G__30608;
continue;
} else {
}
break;
}

var G__30555 = args30553.length;
switch (G__30555) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30553.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29924__auto___30610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___30610,tc,fc){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___30610,tc,fc){
return (function (state_30581){
var state_val_30582 = (state_30581[(1)]);
if((state_val_30582 === (7))){
var inst_30577 = (state_30581[(2)]);
var state_30581__$1 = state_30581;
var statearr_30583_30611 = state_30581__$1;
(statearr_30583_30611[(2)] = inst_30577);

(statearr_30583_30611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (1))){
var state_30581__$1 = state_30581;
var statearr_30584_30612 = state_30581__$1;
(statearr_30584_30612[(2)] = null);

(statearr_30584_30612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (4))){
var inst_30558 = (state_30581[(7)]);
var inst_30558__$1 = (state_30581[(2)]);
var inst_30559 = (inst_30558__$1 == null);
var state_30581__$1 = (function (){var statearr_30585 = state_30581;
(statearr_30585[(7)] = inst_30558__$1);

return statearr_30585;
})();
if(cljs.core.truth_(inst_30559)){
var statearr_30586_30613 = state_30581__$1;
(statearr_30586_30613[(1)] = (5));

} else {
var statearr_30587_30614 = state_30581__$1;
(statearr_30587_30614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (13))){
var state_30581__$1 = state_30581;
var statearr_30588_30615 = state_30581__$1;
(statearr_30588_30615[(2)] = null);

(statearr_30588_30615[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (6))){
var inst_30558 = (state_30581[(7)]);
var inst_30564 = p.call(null,inst_30558);
var state_30581__$1 = state_30581;
if(cljs.core.truth_(inst_30564)){
var statearr_30589_30616 = state_30581__$1;
(statearr_30589_30616[(1)] = (9));

} else {
var statearr_30590_30617 = state_30581__$1;
(statearr_30590_30617[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (3))){
var inst_30579 = (state_30581[(2)]);
var state_30581__$1 = state_30581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30581__$1,inst_30579);
} else {
if((state_val_30582 === (12))){
var state_30581__$1 = state_30581;
var statearr_30591_30618 = state_30581__$1;
(statearr_30591_30618[(2)] = null);

(statearr_30591_30618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (2))){
var state_30581__$1 = state_30581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30581__$1,(4),ch);
} else {
if((state_val_30582 === (11))){
var inst_30558 = (state_30581[(7)]);
var inst_30568 = (state_30581[(2)]);
var state_30581__$1 = state_30581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30581__$1,(8),inst_30568,inst_30558);
} else {
if((state_val_30582 === (9))){
var state_30581__$1 = state_30581;
var statearr_30592_30619 = state_30581__$1;
(statearr_30592_30619[(2)] = tc);

(statearr_30592_30619[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (5))){
var inst_30561 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30562 = cljs.core.async.close_BANG_.call(null,fc);
var state_30581__$1 = (function (){var statearr_30593 = state_30581;
(statearr_30593[(8)] = inst_30561);

return statearr_30593;
})();
var statearr_30594_30620 = state_30581__$1;
(statearr_30594_30620[(2)] = inst_30562);

(statearr_30594_30620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (14))){
var inst_30575 = (state_30581[(2)]);
var state_30581__$1 = state_30581;
var statearr_30595_30621 = state_30581__$1;
(statearr_30595_30621[(2)] = inst_30575);

(statearr_30595_30621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (10))){
var state_30581__$1 = state_30581;
var statearr_30596_30622 = state_30581__$1;
(statearr_30596_30622[(2)] = fc);

(statearr_30596_30622[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (8))){
var inst_30570 = (state_30581[(2)]);
var state_30581__$1 = state_30581;
if(cljs.core.truth_(inst_30570)){
var statearr_30597_30623 = state_30581__$1;
(statearr_30597_30623[(1)] = (12));

} else {
var statearr_30598_30624 = state_30581__$1;
(statearr_30598_30624[(1)] = (13));

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
});})(c__29924__auto___30610,tc,fc))
;
return ((function (switch__29859__auto__,c__29924__auto___30610,tc,fc){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_30602 = [null,null,null,null,null,null,null,null,null];
(statearr_30602[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_30602[(1)] = (1));

return statearr_30602;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_30581){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30603){if((e30603 instanceof Object)){
var ex__29863__auto__ = e30603;
var statearr_30604_30625 = state_30581;
(statearr_30604_30625[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30626 = state_30581;
state_30581 = G__30626;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_30581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_30581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___30610,tc,fc))
})();
var state__29926__auto__ = (function (){var statearr_30605 = f__29925__auto__.call(null);
(statearr_30605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___30610);

return statearr_30605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___30610,tc,fc))
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
var c__29924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto__){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto__){
return (function (state_30690){
var state_val_30691 = (state_30690[(1)]);
if((state_val_30691 === (7))){
var inst_30686 = (state_30690[(2)]);
var state_30690__$1 = state_30690;
var statearr_30692_30713 = state_30690__$1;
(statearr_30692_30713[(2)] = inst_30686);

(statearr_30692_30713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (1))){
var inst_30670 = init;
var state_30690__$1 = (function (){var statearr_30693 = state_30690;
(statearr_30693[(7)] = inst_30670);

return statearr_30693;
})();
var statearr_30694_30714 = state_30690__$1;
(statearr_30694_30714[(2)] = null);

(statearr_30694_30714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (4))){
var inst_30673 = (state_30690[(8)]);
var inst_30673__$1 = (state_30690[(2)]);
var inst_30674 = (inst_30673__$1 == null);
var state_30690__$1 = (function (){var statearr_30695 = state_30690;
(statearr_30695[(8)] = inst_30673__$1);

return statearr_30695;
})();
if(cljs.core.truth_(inst_30674)){
var statearr_30696_30715 = state_30690__$1;
(statearr_30696_30715[(1)] = (5));

} else {
var statearr_30697_30716 = state_30690__$1;
(statearr_30697_30716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (6))){
var inst_30677 = (state_30690[(9)]);
var inst_30670 = (state_30690[(7)]);
var inst_30673 = (state_30690[(8)]);
var inst_30677__$1 = f.call(null,inst_30670,inst_30673);
var inst_30678 = cljs.core.reduced_QMARK_.call(null,inst_30677__$1);
var state_30690__$1 = (function (){var statearr_30698 = state_30690;
(statearr_30698[(9)] = inst_30677__$1);

return statearr_30698;
})();
if(inst_30678){
var statearr_30699_30717 = state_30690__$1;
(statearr_30699_30717[(1)] = (8));

} else {
var statearr_30700_30718 = state_30690__$1;
(statearr_30700_30718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (3))){
var inst_30688 = (state_30690[(2)]);
var state_30690__$1 = state_30690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30690__$1,inst_30688);
} else {
if((state_val_30691 === (2))){
var state_30690__$1 = state_30690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30690__$1,(4),ch);
} else {
if((state_val_30691 === (9))){
var inst_30677 = (state_30690[(9)]);
var inst_30670 = inst_30677;
var state_30690__$1 = (function (){var statearr_30701 = state_30690;
(statearr_30701[(7)] = inst_30670);

return statearr_30701;
})();
var statearr_30702_30719 = state_30690__$1;
(statearr_30702_30719[(2)] = null);

(statearr_30702_30719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (5))){
var inst_30670 = (state_30690[(7)]);
var state_30690__$1 = state_30690;
var statearr_30703_30720 = state_30690__$1;
(statearr_30703_30720[(2)] = inst_30670);

(statearr_30703_30720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (10))){
var inst_30684 = (state_30690[(2)]);
var state_30690__$1 = state_30690;
var statearr_30704_30721 = state_30690__$1;
(statearr_30704_30721[(2)] = inst_30684);

(statearr_30704_30721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30691 === (8))){
var inst_30677 = (state_30690[(9)]);
var inst_30680 = cljs.core.deref.call(null,inst_30677);
var state_30690__$1 = state_30690;
var statearr_30705_30722 = state_30690__$1;
(statearr_30705_30722[(2)] = inst_30680);

(statearr_30705_30722[(1)] = (10));


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
});})(c__29924__auto__))
;
return ((function (switch__29859__auto__,c__29924__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29860__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29860__auto____0 = (function (){
var statearr_30709 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30709[(0)] = cljs$core$async$reduce_$_state_machine__29860__auto__);

(statearr_30709[(1)] = (1));

return statearr_30709;
});
var cljs$core$async$reduce_$_state_machine__29860__auto____1 = (function (state_30690){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30710){if((e30710 instanceof Object)){
var ex__29863__auto__ = e30710;
var statearr_30711_30723 = state_30690;
(statearr_30711_30723[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30724 = state_30690;
state_30690 = G__30724;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29860__auto__ = function(state_30690){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29860__auto____1.call(this,state_30690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29860__auto____0;
cljs$core$async$reduce_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29860__auto____1;
return cljs$core$async$reduce_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto__))
})();
var state__29926__auto__ = (function (){var statearr_30712 = f__29925__auto__.call(null);
(statearr_30712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto__);

return statearr_30712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto__))
);

return c__29924__auto__;
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
var args30725 = [];
var len__25923__auto___30777 = arguments.length;
var i__25924__auto___30778 = (0);
while(true){
if((i__25924__auto___30778 < len__25923__auto___30777)){
args30725.push((arguments[i__25924__auto___30778]));

var G__30779 = (i__25924__auto___30778 + (1));
i__25924__auto___30778 = G__30779;
continue;
} else {
}
break;
}

var G__30727 = args30725.length;
switch (G__30727) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30725.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto__){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto__){
return (function (state_30752){
var state_val_30753 = (state_30752[(1)]);
if((state_val_30753 === (7))){
var inst_30734 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
var statearr_30754_30782 = state_30752__$1;
(statearr_30754_30782[(2)] = inst_30734);

(statearr_30754_30782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (1))){
var inst_30728 = cljs.core.seq.call(null,coll);
var inst_30729 = inst_30728;
var state_30752__$1 = (function (){var statearr_30755 = state_30752;
(statearr_30755[(7)] = inst_30729);

return statearr_30755;
})();
var statearr_30756_30783 = state_30752__$1;
(statearr_30756_30783[(2)] = null);

(statearr_30756_30783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (4))){
var inst_30729 = (state_30752[(7)]);
var inst_30732 = cljs.core.first.call(null,inst_30729);
var state_30752__$1 = state_30752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30752__$1,(7),ch,inst_30732);
} else {
if((state_val_30753 === (13))){
var inst_30746 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
var statearr_30757_30784 = state_30752__$1;
(statearr_30757_30784[(2)] = inst_30746);

(statearr_30757_30784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (6))){
var inst_30737 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
if(cljs.core.truth_(inst_30737)){
var statearr_30758_30785 = state_30752__$1;
(statearr_30758_30785[(1)] = (8));

} else {
var statearr_30759_30786 = state_30752__$1;
(statearr_30759_30786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (3))){
var inst_30750 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30752__$1,inst_30750);
} else {
if((state_val_30753 === (12))){
var state_30752__$1 = state_30752;
var statearr_30760_30787 = state_30752__$1;
(statearr_30760_30787[(2)] = null);

(statearr_30760_30787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (2))){
var inst_30729 = (state_30752[(7)]);
var state_30752__$1 = state_30752;
if(cljs.core.truth_(inst_30729)){
var statearr_30761_30788 = state_30752__$1;
(statearr_30761_30788[(1)] = (4));

} else {
var statearr_30762_30789 = state_30752__$1;
(statearr_30762_30789[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (11))){
var inst_30743 = cljs.core.async.close_BANG_.call(null,ch);
var state_30752__$1 = state_30752;
var statearr_30763_30790 = state_30752__$1;
(statearr_30763_30790[(2)] = inst_30743);

(statearr_30763_30790[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (9))){
var state_30752__$1 = state_30752;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30764_30791 = state_30752__$1;
(statearr_30764_30791[(1)] = (11));

} else {
var statearr_30765_30792 = state_30752__$1;
(statearr_30765_30792[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (5))){
var inst_30729 = (state_30752[(7)]);
var state_30752__$1 = state_30752;
var statearr_30766_30793 = state_30752__$1;
(statearr_30766_30793[(2)] = inst_30729);

(statearr_30766_30793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (10))){
var inst_30748 = (state_30752[(2)]);
var state_30752__$1 = state_30752;
var statearr_30767_30794 = state_30752__$1;
(statearr_30767_30794[(2)] = inst_30748);

(statearr_30767_30794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30753 === (8))){
var inst_30729 = (state_30752[(7)]);
var inst_30739 = cljs.core.next.call(null,inst_30729);
var inst_30729__$1 = inst_30739;
var state_30752__$1 = (function (){var statearr_30768 = state_30752;
(statearr_30768[(7)] = inst_30729__$1);

return statearr_30768;
})();
var statearr_30769_30795 = state_30752__$1;
(statearr_30769_30795[(2)] = null);

(statearr_30769_30795[(1)] = (2));


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
});})(c__29924__auto__))
;
return ((function (switch__29859__auto__,c__29924__auto__){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_30773 = [null,null,null,null,null,null,null,null];
(statearr_30773[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_30773[(1)] = (1));

return statearr_30773;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_30752){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_30752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e30774){if((e30774 instanceof Object)){
var ex__29863__auto__ = e30774;
var statearr_30775_30796 = state_30752;
(statearr_30775_30796[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30797 = state_30752;
state_30752 = G__30797;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_30752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_30752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto__))
})();
var state__29926__auto__ = (function (){var statearr_30776 = f__29925__auto__.call(null);
(statearr_30776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto__);

return statearr_30776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto__))
);

return c__29924__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async31023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31023 = (function (mult,ch,cs,meta31024){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31024 = meta31024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31025,meta31024__$1){
var self__ = this;
var _31025__$1 = this;
return (new cljs.core.async.t_cljs$core$async31023(self__.mult,self__.ch,self__.cs,meta31024__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31025){
var self__ = this;
var _31025__$1 = this;
return self__.meta31024;
});})(cs))
;

cljs.core.async.t_cljs$core$async31023.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31023.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31023.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31023.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31023.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31023.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31023.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31024","meta31024",-1393089086,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31023";

cljs.core.async.t_cljs$core$async31023.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31023");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31023 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31023(mult__$1,ch__$1,cs__$1,meta31024){
return (new cljs.core.async.t_cljs$core$async31023(mult__$1,ch__$1,cs__$1,meta31024));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31023(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29924__auto___31248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___31248,cs,m,dchan,dctr,done){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___31248,cs,m,dchan,dctr,done){
return (function (state_31160){
var state_val_31161 = (state_31160[(1)]);
if((state_val_31161 === (7))){
var inst_31156 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
var statearr_31162_31249 = state_31160__$1;
(statearr_31162_31249[(2)] = inst_31156);

(statearr_31162_31249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (20))){
var inst_31059 = (state_31160[(7)]);
var inst_31071 = cljs.core.first.call(null,inst_31059);
var inst_31072 = cljs.core.nth.call(null,inst_31071,(0),null);
var inst_31073 = cljs.core.nth.call(null,inst_31071,(1),null);
var state_31160__$1 = (function (){var statearr_31163 = state_31160;
(statearr_31163[(8)] = inst_31072);

return statearr_31163;
})();
if(cljs.core.truth_(inst_31073)){
var statearr_31164_31250 = state_31160__$1;
(statearr_31164_31250[(1)] = (22));

} else {
var statearr_31165_31251 = state_31160__$1;
(statearr_31165_31251[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (27))){
var inst_31103 = (state_31160[(9)]);
var inst_31101 = (state_31160[(10)]);
var inst_31028 = (state_31160[(11)]);
var inst_31108 = (state_31160[(12)]);
var inst_31108__$1 = cljs.core._nth.call(null,inst_31101,inst_31103);
var inst_31109 = cljs.core.async.put_BANG_.call(null,inst_31108__$1,inst_31028,done);
var state_31160__$1 = (function (){var statearr_31166 = state_31160;
(statearr_31166[(12)] = inst_31108__$1);

return statearr_31166;
})();
if(cljs.core.truth_(inst_31109)){
var statearr_31167_31252 = state_31160__$1;
(statearr_31167_31252[(1)] = (30));

} else {
var statearr_31168_31253 = state_31160__$1;
(statearr_31168_31253[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (1))){
var state_31160__$1 = state_31160;
var statearr_31169_31254 = state_31160__$1;
(statearr_31169_31254[(2)] = null);

(statearr_31169_31254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (24))){
var inst_31059 = (state_31160[(7)]);
var inst_31078 = (state_31160[(2)]);
var inst_31079 = cljs.core.next.call(null,inst_31059);
var inst_31037 = inst_31079;
var inst_31038 = null;
var inst_31039 = (0);
var inst_31040 = (0);
var state_31160__$1 = (function (){var statearr_31170 = state_31160;
(statearr_31170[(13)] = inst_31078);

(statearr_31170[(14)] = inst_31038);

(statearr_31170[(15)] = inst_31039);

(statearr_31170[(16)] = inst_31040);

(statearr_31170[(17)] = inst_31037);

return statearr_31170;
})();
var statearr_31171_31255 = state_31160__$1;
(statearr_31171_31255[(2)] = null);

(statearr_31171_31255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (39))){
var state_31160__$1 = state_31160;
var statearr_31175_31256 = state_31160__$1;
(statearr_31175_31256[(2)] = null);

(statearr_31175_31256[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (4))){
var inst_31028 = (state_31160[(11)]);
var inst_31028__$1 = (state_31160[(2)]);
var inst_31029 = (inst_31028__$1 == null);
var state_31160__$1 = (function (){var statearr_31176 = state_31160;
(statearr_31176[(11)] = inst_31028__$1);

return statearr_31176;
})();
if(cljs.core.truth_(inst_31029)){
var statearr_31177_31257 = state_31160__$1;
(statearr_31177_31257[(1)] = (5));

} else {
var statearr_31178_31258 = state_31160__$1;
(statearr_31178_31258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (15))){
var inst_31038 = (state_31160[(14)]);
var inst_31039 = (state_31160[(15)]);
var inst_31040 = (state_31160[(16)]);
var inst_31037 = (state_31160[(17)]);
var inst_31055 = (state_31160[(2)]);
var inst_31056 = (inst_31040 + (1));
var tmp31172 = inst_31038;
var tmp31173 = inst_31039;
var tmp31174 = inst_31037;
var inst_31037__$1 = tmp31174;
var inst_31038__$1 = tmp31172;
var inst_31039__$1 = tmp31173;
var inst_31040__$1 = inst_31056;
var state_31160__$1 = (function (){var statearr_31179 = state_31160;
(statearr_31179[(14)] = inst_31038__$1);

(statearr_31179[(15)] = inst_31039__$1);

(statearr_31179[(16)] = inst_31040__$1);

(statearr_31179[(18)] = inst_31055);

(statearr_31179[(17)] = inst_31037__$1);

return statearr_31179;
})();
var statearr_31180_31259 = state_31160__$1;
(statearr_31180_31259[(2)] = null);

(statearr_31180_31259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (21))){
var inst_31082 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
var statearr_31184_31260 = state_31160__$1;
(statearr_31184_31260[(2)] = inst_31082);

(statearr_31184_31260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (31))){
var inst_31108 = (state_31160[(12)]);
var inst_31112 = done.call(null,null);
var inst_31113 = cljs.core.async.untap_STAR_.call(null,m,inst_31108);
var state_31160__$1 = (function (){var statearr_31185 = state_31160;
(statearr_31185[(19)] = inst_31112);

return statearr_31185;
})();
var statearr_31186_31261 = state_31160__$1;
(statearr_31186_31261[(2)] = inst_31113);

(statearr_31186_31261[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (32))){
var inst_31103 = (state_31160[(9)]);
var inst_31102 = (state_31160[(20)]);
var inst_31101 = (state_31160[(10)]);
var inst_31100 = (state_31160[(21)]);
var inst_31115 = (state_31160[(2)]);
var inst_31116 = (inst_31103 + (1));
var tmp31181 = inst_31102;
var tmp31182 = inst_31101;
var tmp31183 = inst_31100;
var inst_31100__$1 = tmp31183;
var inst_31101__$1 = tmp31182;
var inst_31102__$1 = tmp31181;
var inst_31103__$1 = inst_31116;
var state_31160__$1 = (function (){var statearr_31187 = state_31160;
(statearr_31187[(22)] = inst_31115);

(statearr_31187[(9)] = inst_31103__$1);

(statearr_31187[(20)] = inst_31102__$1);

(statearr_31187[(10)] = inst_31101__$1);

(statearr_31187[(21)] = inst_31100__$1);

return statearr_31187;
})();
var statearr_31188_31262 = state_31160__$1;
(statearr_31188_31262[(2)] = null);

(statearr_31188_31262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (40))){
var inst_31128 = (state_31160[(23)]);
var inst_31132 = done.call(null,null);
var inst_31133 = cljs.core.async.untap_STAR_.call(null,m,inst_31128);
var state_31160__$1 = (function (){var statearr_31189 = state_31160;
(statearr_31189[(24)] = inst_31132);

return statearr_31189;
})();
var statearr_31190_31263 = state_31160__$1;
(statearr_31190_31263[(2)] = inst_31133);

(statearr_31190_31263[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (33))){
var inst_31119 = (state_31160[(25)]);
var inst_31121 = cljs.core.chunked_seq_QMARK_.call(null,inst_31119);
var state_31160__$1 = state_31160;
if(inst_31121){
var statearr_31191_31264 = state_31160__$1;
(statearr_31191_31264[(1)] = (36));

} else {
var statearr_31192_31265 = state_31160__$1;
(statearr_31192_31265[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (13))){
var inst_31049 = (state_31160[(26)]);
var inst_31052 = cljs.core.async.close_BANG_.call(null,inst_31049);
var state_31160__$1 = state_31160;
var statearr_31193_31266 = state_31160__$1;
(statearr_31193_31266[(2)] = inst_31052);

(statearr_31193_31266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (22))){
var inst_31072 = (state_31160[(8)]);
var inst_31075 = cljs.core.async.close_BANG_.call(null,inst_31072);
var state_31160__$1 = state_31160;
var statearr_31194_31267 = state_31160__$1;
(statearr_31194_31267[(2)] = inst_31075);

(statearr_31194_31267[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (36))){
var inst_31119 = (state_31160[(25)]);
var inst_31123 = cljs.core.chunk_first.call(null,inst_31119);
var inst_31124 = cljs.core.chunk_rest.call(null,inst_31119);
var inst_31125 = cljs.core.count.call(null,inst_31123);
var inst_31100 = inst_31124;
var inst_31101 = inst_31123;
var inst_31102 = inst_31125;
var inst_31103 = (0);
var state_31160__$1 = (function (){var statearr_31195 = state_31160;
(statearr_31195[(9)] = inst_31103);

(statearr_31195[(20)] = inst_31102);

(statearr_31195[(10)] = inst_31101);

(statearr_31195[(21)] = inst_31100);

return statearr_31195;
})();
var statearr_31196_31268 = state_31160__$1;
(statearr_31196_31268[(2)] = null);

(statearr_31196_31268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (41))){
var inst_31119 = (state_31160[(25)]);
var inst_31135 = (state_31160[(2)]);
var inst_31136 = cljs.core.next.call(null,inst_31119);
var inst_31100 = inst_31136;
var inst_31101 = null;
var inst_31102 = (0);
var inst_31103 = (0);
var state_31160__$1 = (function (){var statearr_31197 = state_31160;
(statearr_31197[(9)] = inst_31103);

(statearr_31197[(20)] = inst_31102);

(statearr_31197[(27)] = inst_31135);

(statearr_31197[(10)] = inst_31101);

(statearr_31197[(21)] = inst_31100);

return statearr_31197;
})();
var statearr_31198_31269 = state_31160__$1;
(statearr_31198_31269[(2)] = null);

(statearr_31198_31269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (43))){
var state_31160__$1 = state_31160;
var statearr_31199_31270 = state_31160__$1;
(statearr_31199_31270[(2)] = null);

(statearr_31199_31270[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (29))){
var inst_31144 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
var statearr_31200_31271 = state_31160__$1;
(statearr_31200_31271[(2)] = inst_31144);

(statearr_31200_31271[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (44))){
var inst_31153 = (state_31160[(2)]);
var state_31160__$1 = (function (){var statearr_31201 = state_31160;
(statearr_31201[(28)] = inst_31153);

return statearr_31201;
})();
var statearr_31202_31272 = state_31160__$1;
(statearr_31202_31272[(2)] = null);

(statearr_31202_31272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (6))){
var inst_31092 = (state_31160[(29)]);
var inst_31091 = cljs.core.deref.call(null,cs);
var inst_31092__$1 = cljs.core.keys.call(null,inst_31091);
var inst_31093 = cljs.core.count.call(null,inst_31092__$1);
var inst_31094 = cljs.core.reset_BANG_.call(null,dctr,inst_31093);
var inst_31099 = cljs.core.seq.call(null,inst_31092__$1);
var inst_31100 = inst_31099;
var inst_31101 = null;
var inst_31102 = (0);
var inst_31103 = (0);
var state_31160__$1 = (function (){var statearr_31203 = state_31160;
(statearr_31203[(29)] = inst_31092__$1);

(statearr_31203[(9)] = inst_31103);

(statearr_31203[(20)] = inst_31102);

(statearr_31203[(10)] = inst_31101);

(statearr_31203[(30)] = inst_31094);

(statearr_31203[(21)] = inst_31100);

return statearr_31203;
})();
var statearr_31204_31273 = state_31160__$1;
(statearr_31204_31273[(2)] = null);

(statearr_31204_31273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (28))){
var inst_31119 = (state_31160[(25)]);
var inst_31100 = (state_31160[(21)]);
var inst_31119__$1 = cljs.core.seq.call(null,inst_31100);
var state_31160__$1 = (function (){var statearr_31205 = state_31160;
(statearr_31205[(25)] = inst_31119__$1);

return statearr_31205;
})();
if(inst_31119__$1){
var statearr_31206_31274 = state_31160__$1;
(statearr_31206_31274[(1)] = (33));

} else {
var statearr_31207_31275 = state_31160__$1;
(statearr_31207_31275[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (25))){
var inst_31103 = (state_31160[(9)]);
var inst_31102 = (state_31160[(20)]);
var inst_31105 = (inst_31103 < inst_31102);
var inst_31106 = inst_31105;
var state_31160__$1 = state_31160;
if(cljs.core.truth_(inst_31106)){
var statearr_31208_31276 = state_31160__$1;
(statearr_31208_31276[(1)] = (27));

} else {
var statearr_31209_31277 = state_31160__$1;
(statearr_31209_31277[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (34))){
var state_31160__$1 = state_31160;
var statearr_31210_31278 = state_31160__$1;
(statearr_31210_31278[(2)] = null);

(statearr_31210_31278[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (17))){
var state_31160__$1 = state_31160;
var statearr_31211_31279 = state_31160__$1;
(statearr_31211_31279[(2)] = null);

(statearr_31211_31279[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (3))){
var inst_31158 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31160__$1,inst_31158);
} else {
if((state_val_31161 === (12))){
var inst_31087 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
var statearr_31212_31280 = state_31160__$1;
(statearr_31212_31280[(2)] = inst_31087);

(statearr_31212_31280[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (2))){
var state_31160__$1 = state_31160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31160__$1,(4),ch);
} else {
if((state_val_31161 === (23))){
var state_31160__$1 = state_31160;
var statearr_31213_31281 = state_31160__$1;
(statearr_31213_31281[(2)] = null);

(statearr_31213_31281[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (35))){
var inst_31142 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
var statearr_31214_31282 = state_31160__$1;
(statearr_31214_31282[(2)] = inst_31142);

(statearr_31214_31282[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (19))){
var inst_31059 = (state_31160[(7)]);
var inst_31063 = cljs.core.chunk_first.call(null,inst_31059);
var inst_31064 = cljs.core.chunk_rest.call(null,inst_31059);
var inst_31065 = cljs.core.count.call(null,inst_31063);
var inst_31037 = inst_31064;
var inst_31038 = inst_31063;
var inst_31039 = inst_31065;
var inst_31040 = (0);
var state_31160__$1 = (function (){var statearr_31215 = state_31160;
(statearr_31215[(14)] = inst_31038);

(statearr_31215[(15)] = inst_31039);

(statearr_31215[(16)] = inst_31040);

(statearr_31215[(17)] = inst_31037);

return statearr_31215;
})();
var statearr_31216_31283 = state_31160__$1;
(statearr_31216_31283[(2)] = null);

(statearr_31216_31283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (11))){
var inst_31059 = (state_31160[(7)]);
var inst_31037 = (state_31160[(17)]);
var inst_31059__$1 = cljs.core.seq.call(null,inst_31037);
var state_31160__$1 = (function (){var statearr_31217 = state_31160;
(statearr_31217[(7)] = inst_31059__$1);

return statearr_31217;
})();
if(inst_31059__$1){
var statearr_31218_31284 = state_31160__$1;
(statearr_31218_31284[(1)] = (16));

} else {
var statearr_31219_31285 = state_31160__$1;
(statearr_31219_31285[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (9))){
var inst_31089 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
var statearr_31220_31286 = state_31160__$1;
(statearr_31220_31286[(2)] = inst_31089);

(statearr_31220_31286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (5))){
var inst_31035 = cljs.core.deref.call(null,cs);
var inst_31036 = cljs.core.seq.call(null,inst_31035);
var inst_31037 = inst_31036;
var inst_31038 = null;
var inst_31039 = (0);
var inst_31040 = (0);
var state_31160__$1 = (function (){var statearr_31221 = state_31160;
(statearr_31221[(14)] = inst_31038);

(statearr_31221[(15)] = inst_31039);

(statearr_31221[(16)] = inst_31040);

(statearr_31221[(17)] = inst_31037);

return statearr_31221;
})();
var statearr_31222_31287 = state_31160__$1;
(statearr_31222_31287[(2)] = null);

(statearr_31222_31287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (14))){
var state_31160__$1 = state_31160;
var statearr_31223_31288 = state_31160__$1;
(statearr_31223_31288[(2)] = null);

(statearr_31223_31288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (45))){
var inst_31150 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
var statearr_31224_31289 = state_31160__$1;
(statearr_31224_31289[(2)] = inst_31150);

(statearr_31224_31289[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (26))){
var inst_31092 = (state_31160[(29)]);
var inst_31146 = (state_31160[(2)]);
var inst_31147 = cljs.core.seq.call(null,inst_31092);
var state_31160__$1 = (function (){var statearr_31225 = state_31160;
(statearr_31225[(31)] = inst_31146);

return statearr_31225;
})();
if(inst_31147){
var statearr_31226_31290 = state_31160__$1;
(statearr_31226_31290[(1)] = (42));

} else {
var statearr_31227_31291 = state_31160__$1;
(statearr_31227_31291[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (16))){
var inst_31059 = (state_31160[(7)]);
var inst_31061 = cljs.core.chunked_seq_QMARK_.call(null,inst_31059);
var state_31160__$1 = state_31160;
if(inst_31061){
var statearr_31228_31292 = state_31160__$1;
(statearr_31228_31292[(1)] = (19));

} else {
var statearr_31229_31293 = state_31160__$1;
(statearr_31229_31293[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (38))){
var inst_31139 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
var statearr_31230_31294 = state_31160__$1;
(statearr_31230_31294[(2)] = inst_31139);

(statearr_31230_31294[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (30))){
var state_31160__$1 = state_31160;
var statearr_31231_31295 = state_31160__$1;
(statearr_31231_31295[(2)] = null);

(statearr_31231_31295[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (10))){
var inst_31038 = (state_31160[(14)]);
var inst_31040 = (state_31160[(16)]);
var inst_31048 = cljs.core._nth.call(null,inst_31038,inst_31040);
var inst_31049 = cljs.core.nth.call(null,inst_31048,(0),null);
var inst_31050 = cljs.core.nth.call(null,inst_31048,(1),null);
var state_31160__$1 = (function (){var statearr_31232 = state_31160;
(statearr_31232[(26)] = inst_31049);

return statearr_31232;
})();
if(cljs.core.truth_(inst_31050)){
var statearr_31233_31296 = state_31160__$1;
(statearr_31233_31296[(1)] = (13));

} else {
var statearr_31234_31297 = state_31160__$1;
(statearr_31234_31297[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (18))){
var inst_31085 = (state_31160[(2)]);
var state_31160__$1 = state_31160;
var statearr_31235_31298 = state_31160__$1;
(statearr_31235_31298[(2)] = inst_31085);

(statearr_31235_31298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (42))){
var state_31160__$1 = state_31160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31160__$1,(45),dchan);
} else {
if((state_val_31161 === (37))){
var inst_31128 = (state_31160[(23)]);
var inst_31119 = (state_31160[(25)]);
var inst_31028 = (state_31160[(11)]);
var inst_31128__$1 = cljs.core.first.call(null,inst_31119);
var inst_31129 = cljs.core.async.put_BANG_.call(null,inst_31128__$1,inst_31028,done);
var state_31160__$1 = (function (){var statearr_31236 = state_31160;
(statearr_31236[(23)] = inst_31128__$1);

return statearr_31236;
})();
if(cljs.core.truth_(inst_31129)){
var statearr_31237_31299 = state_31160__$1;
(statearr_31237_31299[(1)] = (39));

} else {
var statearr_31238_31300 = state_31160__$1;
(statearr_31238_31300[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31161 === (8))){
var inst_31039 = (state_31160[(15)]);
var inst_31040 = (state_31160[(16)]);
var inst_31042 = (inst_31040 < inst_31039);
var inst_31043 = inst_31042;
var state_31160__$1 = state_31160;
if(cljs.core.truth_(inst_31043)){
var statearr_31239_31301 = state_31160__$1;
(statearr_31239_31301[(1)] = (10));

} else {
var statearr_31240_31302 = state_31160__$1;
(statearr_31240_31302[(1)] = (11));

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
});})(c__29924__auto___31248,cs,m,dchan,dctr,done))
;
return ((function (switch__29859__auto__,c__29924__auto___31248,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29860__auto__ = null;
var cljs$core$async$mult_$_state_machine__29860__auto____0 = (function (){
var statearr_31244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31244[(0)] = cljs$core$async$mult_$_state_machine__29860__auto__);

(statearr_31244[(1)] = (1));

return statearr_31244;
});
var cljs$core$async$mult_$_state_machine__29860__auto____1 = (function (state_31160){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_31160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e31245){if((e31245 instanceof Object)){
var ex__29863__auto__ = e31245;
var statearr_31246_31303 = state_31160;
(statearr_31246_31303[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31304 = state_31160;
state_31160 = G__31304;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29860__auto__ = function(state_31160){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29860__auto____1.call(this,state_31160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29860__auto____0;
cljs$core$async$mult_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29860__auto____1;
return cljs$core$async$mult_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___31248,cs,m,dchan,dctr,done))
})();
var state__29926__auto__ = (function (){var statearr_31247 = f__29925__auto__.call(null);
(statearr_31247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___31248);

return statearr_31247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___31248,cs,m,dchan,dctr,done))
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
var args31305 = [];
var len__25923__auto___31308 = arguments.length;
var i__25924__auto___31309 = (0);
while(true){
if((i__25924__auto___31309 < len__25923__auto___31308)){
args31305.push((arguments[i__25924__auto___31309]));

var G__31310 = (i__25924__auto___31309 + (1));
i__25924__auto___31309 = G__31310;
continue;
} else {
}
break;
}

var G__31307 = args31305.length;
switch (G__31307) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31305.length)].join('')));

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
var len__25923__auto___31322 = arguments.length;
var i__25924__auto___31323 = (0);
while(true){
if((i__25924__auto___31323 < len__25923__auto___31322)){
args__25930__auto__.push((arguments[i__25924__auto___31323]));

var G__31324 = (i__25924__auto___31323 + (1));
i__25924__auto___31323 = G__31324;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((3) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31316){
var map__31317 = p__31316;
var map__31317__$1 = ((((!((map__31317 == null)))?((((map__31317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31317):map__31317);
var opts = map__31317__$1;
var statearr_31319_31325 = state;
(statearr_31319_31325[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31317,map__31317__$1,opts){
return (function (val){
var statearr_31320_31326 = state;
(statearr_31320_31326[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31317,map__31317__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31321_31327 = state;
(statearr_31321_31327[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31312){
var G__31313 = cljs.core.first.call(null,seq31312);
var seq31312__$1 = cljs.core.next.call(null,seq31312);
var G__31314 = cljs.core.first.call(null,seq31312__$1);
var seq31312__$2 = cljs.core.next.call(null,seq31312__$1);
var G__31315 = cljs.core.first.call(null,seq31312__$2);
var seq31312__$3 = cljs.core.next.call(null,seq31312__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31313,G__31314,G__31315,seq31312__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31493 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31494){
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
this.meta31494 = meta31494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31495,meta31494__$1){
var self__ = this;
var _31495__$1 = this;
return (new cljs.core.async.t_cljs$core$async31493(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31494__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31495){
var self__ = this;
var _31495__$1 = this;
return self__.meta31494;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31493.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31494","meta31494",-1137729307,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31493";

cljs.core.async.t_cljs$core$async31493.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31493");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31493 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31493(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31494){
return (new cljs.core.async.t_cljs$core$async31493(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31494));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31493(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29924__auto___31658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___31658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___31658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31595){
var state_val_31596 = (state_31595[(1)]);
if((state_val_31596 === (7))){
var inst_31511 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31597_31659 = state_31595__$1;
(statearr_31597_31659[(2)] = inst_31511);

(statearr_31597_31659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (20))){
var inst_31523 = (state_31595[(7)]);
var state_31595__$1 = state_31595;
var statearr_31598_31660 = state_31595__$1;
(statearr_31598_31660[(2)] = inst_31523);

(statearr_31598_31660[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (27))){
var state_31595__$1 = state_31595;
var statearr_31599_31661 = state_31595__$1;
(statearr_31599_31661[(2)] = null);

(statearr_31599_31661[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (1))){
var inst_31499 = (state_31595[(8)]);
var inst_31499__$1 = calc_state.call(null);
var inst_31501 = (inst_31499__$1 == null);
var inst_31502 = cljs.core.not.call(null,inst_31501);
var state_31595__$1 = (function (){var statearr_31600 = state_31595;
(statearr_31600[(8)] = inst_31499__$1);

return statearr_31600;
})();
if(inst_31502){
var statearr_31601_31662 = state_31595__$1;
(statearr_31601_31662[(1)] = (2));

} else {
var statearr_31602_31663 = state_31595__$1;
(statearr_31602_31663[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (24))){
var inst_31555 = (state_31595[(9)]);
var inst_31569 = (state_31595[(10)]);
var inst_31546 = (state_31595[(11)]);
var inst_31569__$1 = inst_31546.call(null,inst_31555);
var state_31595__$1 = (function (){var statearr_31603 = state_31595;
(statearr_31603[(10)] = inst_31569__$1);

return statearr_31603;
})();
if(cljs.core.truth_(inst_31569__$1)){
var statearr_31604_31664 = state_31595__$1;
(statearr_31604_31664[(1)] = (29));

} else {
var statearr_31605_31665 = state_31595__$1;
(statearr_31605_31665[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (4))){
var inst_31514 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31514)){
var statearr_31606_31666 = state_31595__$1;
(statearr_31606_31666[(1)] = (8));

} else {
var statearr_31607_31667 = state_31595__$1;
(statearr_31607_31667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (15))){
var inst_31540 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31540)){
var statearr_31608_31668 = state_31595__$1;
(statearr_31608_31668[(1)] = (19));

} else {
var statearr_31609_31669 = state_31595__$1;
(statearr_31609_31669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (21))){
var inst_31545 = (state_31595[(12)]);
var inst_31545__$1 = (state_31595[(2)]);
var inst_31546 = cljs.core.get.call(null,inst_31545__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31547 = cljs.core.get.call(null,inst_31545__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31548 = cljs.core.get.call(null,inst_31545__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31595__$1 = (function (){var statearr_31610 = state_31595;
(statearr_31610[(12)] = inst_31545__$1);

(statearr_31610[(11)] = inst_31546);

(statearr_31610[(13)] = inst_31547);

return statearr_31610;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31595__$1,(22),inst_31548);
} else {
if((state_val_31596 === (31))){
var inst_31577 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31577)){
var statearr_31611_31670 = state_31595__$1;
(statearr_31611_31670[(1)] = (32));

} else {
var statearr_31612_31671 = state_31595__$1;
(statearr_31612_31671[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (32))){
var inst_31554 = (state_31595[(14)]);
var state_31595__$1 = state_31595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31595__$1,(35),out,inst_31554);
} else {
if((state_val_31596 === (33))){
var inst_31545 = (state_31595[(12)]);
var inst_31523 = inst_31545;
var state_31595__$1 = (function (){var statearr_31613 = state_31595;
(statearr_31613[(7)] = inst_31523);

return statearr_31613;
})();
var statearr_31614_31672 = state_31595__$1;
(statearr_31614_31672[(2)] = null);

(statearr_31614_31672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (13))){
var inst_31523 = (state_31595[(7)]);
var inst_31530 = inst_31523.cljs$lang$protocol_mask$partition0$;
var inst_31531 = (inst_31530 & (64));
var inst_31532 = inst_31523.cljs$core$ISeq$;
var inst_31533 = (inst_31531) || (inst_31532);
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31533)){
var statearr_31615_31673 = state_31595__$1;
(statearr_31615_31673[(1)] = (16));

} else {
var statearr_31616_31674 = state_31595__$1;
(statearr_31616_31674[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (22))){
var inst_31554 = (state_31595[(14)]);
var inst_31555 = (state_31595[(9)]);
var inst_31553 = (state_31595[(2)]);
var inst_31554__$1 = cljs.core.nth.call(null,inst_31553,(0),null);
var inst_31555__$1 = cljs.core.nth.call(null,inst_31553,(1),null);
var inst_31556 = (inst_31554__$1 == null);
var inst_31557 = cljs.core._EQ_.call(null,inst_31555__$1,change);
var inst_31558 = (inst_31556) || (inst_31557);
var state_31595__$1 = (function (){var statearr_31617 = state_31595;
(statearr_31617[(14)] = inst_31554__$1);

(statearr_31617[(9)] = inst_31555__$1);

return statearr_31617;
})();
if(cljs.core.truth_(inst_31558)){
var statearr_31618_31675 = state_31595__$1;
(statearr_31618_31675[(1)] = (23));

} else {
var statearr_31619_31676 = state_31595__$1;
(statearr_31619_31676[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (36))){
var inst_31545 = (state_31595[(12)]);
var inst_31523 = inst_31545;
var state_31595__$1 = (function (){var statearr_31620 = state_31595;
(statearr_31620[(7)] = inst_31523);

return statearr_31620;
})();
var statearr_31621_31677 = state_31595__$1;
(statearr_31621_31677[(2)] = null);

(statearr_31621_31677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (29))){
var inst_31569 = (state_31595[(10)]);
var state_31595__$1 = state_31595;
var statearr_31622_31678 = state_31595__$1;
(statearr_31622_31678[(2)] = inst_31569);

(statearr_31622_31678[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (6))){
var state_31595__$1 = state_31595;
var statearr_31623_31679 = state_31595__$1;
(statearr_31623_31679[(2)] = false);

(statearr_31623_31679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (28))){
var inst_31565 = (state_31595[(2)]);
var inst_31566 = calc_state.call(null);
var inst_31523 = inst_31566;
var state_31595__$1 = (function (){var statearr_31624 = state_31595;
(statearr_31624[(7)] = inst_31523);

(statearr_31624[(15)] = inst_31565);

return statearr_31624;
})();
var statearr_31625_31680 = state_31595__$1;
(statearr_31625_31680[(2)] = null);

(statearr_31625_31680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (25))){
var inst_31591 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31626_31681 = state_31595__$1;
(statearr_31626_31681[(2)] = inst_31591);

(statearr_31626_31681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (34))){
var inst_31589 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31627_31682 = state_31595__$1;
(statearr_31627_31682[(2)] = inst_31589);

(statearr_31627_31682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (17))){
var state_31595__$1 = state_31595;
var statearr_31628_31683 = state_31595__$1;
(statearr_31628_31683[(2)] = false);

(statearr_31628_31683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (3))){
var state_31595__$1 = state_31595;
var statearr_31629_31684 = state_31595__$1;
(statearr_31629_31684[(2)] = false);

(statearr_31629_31684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (12))){
var inst_31593 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31595__$1,inst_31593);
} else {
if((state_val_31596 === (2))){
var inst_31499 = (state_31595[(8)]);
var inst_31504 = inst_31499.cljs$lang$protocol_mask$partition0$;
var inst_31505 = (inst_31504 & (64));
var inst_31506 = inst_31499.cljs$core$ISeq$;
var inst_31507 = (inst_31505) || (inst_31506);
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31507)){
var statearr_31630_31685 = state_31595__$1;
(statearr_31630_31685[(1)] = (5));

} else {
var statearr_31631_31686 = state_31595__$1;
(statearr_31631_31686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (23))){
var inst_31554 = (state_31595[(14)]);
var inst_31560 = (inst_31554 == null);
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31560)){
var statearr_31632_31687 = state_31595__$1;
(statearr_31632_31687[(1)] = (26));

} else {
var statearr_31633_31688 = state_31595__$1;
(statearr_31633_31688[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (35))){
var inst_31580 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
if(cljs.core.truth_(inst_31580)){
var statearr_31634_31689 = state_31595__$1;
(statearr_31634_31689[(1)] = (36));

} else {
var statearr_31635_31690 = state_31595__$1;
(statearr_31635_31690[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (19))){
var inst_31523 = (state_31595[(7)]);
var inst_31542 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31523);
var state_31595__$1 = state_31595;
var statearr_31636_31691 = state_31595__$1;
(statearr_31636_31691[(2)] = inst_31542);

(statearr_31636_31691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (11))){
var inst_31523 = (state_31595[(7)]);
var inst_31527 = (inst_31523 == null);
var inst_31528 = cljs.core.not.call(null,inst_31527);
var state_31595__$1 = state_31595;
if(inst_31528){
var statearr_31637_31692 = state_31595__$1;
(statearr_31637_31692[(1)] = (13));

} else {
var statearr_31638_31693 = state_31595__$1;
(statearr_31638_31693[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (9))){
var inst_31499 = (state_31595[(8)]);
var state_31595__$1 = state_31595;
var statearr_31639_31694 = state_31595__$1;
(statearr_31639_31694[(2)] = inst_31499);

(statearr_31639_31694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (5))){
var state_31595__$1 = state_31595;
var statearr_31640_31695 = state_31595__$1;
(statearr_31640_31695[(2)] = true);

(statearr_31640_31695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (14))){
var state_31595__$1 = state_31595;
var statearr_31641_31696 = state_31595__$1;
(statearr_31641_31696[(2)] = false);

(statearr_31641_31696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (26))){
var inst_31555 = (state_31595[(9)]);
var inst_31562 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31555);
var state_31595__$1 = state_31595;
var statearr_31642_31697 = state_31595__$1;
(statearr_31642_31697[(2)] = inst_31562);

(statearr_31642_31697[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (16))){
var state_31595__$1 = state_31595;
var statearr_31643_31698 = state_31595__$1;
(statearr_31643_31698[(2)] = true);

(statearr_31643_31698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (38))){
var inst_31585 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31644_31699 = state_31595__$1;
(statearr_31644_31699[(2)] = inst_31585);

(statearr_31644_31699[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (30))){
var inst_31555 = (state_31595[(9)]);
var inst_31546 = (state_31595[(11)]);
var inst_31547 = (state_31595[(13)]);
var inst_31572 = cljs.core.empty_QMARK_.call(null,inst_31546);
var inst_31573 = inst_31547.call(null,inst_31555);
var inst_31574 = cljs.core.not.call(null,inst_31573);
var inst_31575 = (inst_31572) && (inst_31574);
var state_31595__$1 = state_31595;
var statearr_31645_31700 = state_31595__$1;
(statearr_31645_31700[(2)] = inst_31575);

(statearr_31645_31700[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (10))){
var inst_31499 = (state_31595[(8)]);
var inst_31519 = (state_31595[(2)]);
var inst_31520 = cljs.core.get.call(null,inst_31519,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31521 = cljs.core.get.call(null,inst_31519,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31522 = cljs.core.get.call(null,inst_31519,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31523 = inst_31499;
var state_31595__$1 = (function (){var statearr_31646 = state_31595;
(statearr_31646[(7)] = inst_31523);

(statearr_31646[(16)] = inst_31520);

(statearr_31646[(17)] = inst_31521);

(statearr_31646[(18)] = inst_31522);

return statearr_31646;
})();
var statearr_31647_31701 = state_31595__$1;
(statearr_31647_31701[(2)] = null);

(statearr_31647_31701[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (18))){
var inst_31537 = (state_31595[(2)]);
var state_31595__$1 = state_31595;
var statearr_31648_31702 = state_31595__$1;
(statearr_31648_31702[(2)] = inst_31537);

(statearr_31648_31702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (37))){
var state_31595__$1 = state_31595;
var statearr_31649_31703 = state_31595__$1;
(statearr_31649_31703[(2)] = null);

(statearr_31649_31703[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31596 === (8))){
var inst_31499 = (state_31595[(8)]);
var inst_31516 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31499);
var state_31595__$1 = state_31595;
var statearr_31650_31704 = state_31595__$1;
(statearr_31650_31704[(2)] = inst_31516);

(statearr_31650_31704[(1)] = (10));


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
});})(c__29924__auto___31658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29859__auto__,c__29924__auto___31658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29860__auto__ = null;
var cljs$core$async$mix_$_state_machine__29860__auto____0 = (function (){
var statearr_31654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31654[(0)] = cljs$core$async$mix_$_state_machine__29860__auto__);

(statearr_31654[(1)] = (1));

return statearr_31654;
});
var cljs$core$async$mix_$_state_machine__29860__auto____1 = (function (state_31595){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_31595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e31655){if((e31655 instanceof Object)){
var ex__29863__auto__ = e31655;
var statearr_31656_31705 = state_31595;
(statearr_31656_31705[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31706 = state_31595;
state_31595 = G__31706;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29860__auto__ = function(state_31595){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29860__auto____1.call(this,state_31595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29860__auto____0;
cljs$core$async$mix_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29860__auto____1;
return cljs$core$async$mix_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___31658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29926__auto__ = (function (){var statearr_31657 = f__29925__auto__.call(null);
(statearr_31657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___31658);

return statearr_31657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___31658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args31707 = [];
var len__25923__auto___31710 = arguments.length;
var i__25924__auto___31711 = (0);
while(true){
if((i__25924__auto___31711 < len__25923__auto___31710)){
args31707.push((arguments[i__25924__auto___31711]));

var G__31712 = (i__25924__auto___31711 + (1));
i__25924__auto___31711 = G__31712;
continue;
} else {
}
break;
}

var G__31709 = args31707.length;
switch (G__31709) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31707.length)].join('')));

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
var args31715 = [];
var len__25923__auto___31840 = arguments.length;
var i__25924__auto___31841 = (0);
while(true){
if((i__25924__auto___31841 < len__25923__auto___31840)){
args31715.push((arguments[i__25924__auto___31841]));

var G__31842 = (i__25924__auto___31841 + (1));
i__25924__auto___31841 = G__31842;
continue;
} else {
}
break;
}

var G__31717 = args31715.length;
switch (G__31717) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31715.length)].join('')));

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
return (function (p1__31714_SHARP_){
if(cljs.core.truth_(p1__31714_SHARP_.call(null,topic))){
return p1__31714_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31714_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24848__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31718 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31718 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31719){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31719 = meta31719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31720,meta31719__$1){
var self__ = this;
var _31720__$1 = this;
return (new cljs.core.async.t_cljs$core$async31718(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31719__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31720){
var self__ = this;
var _31720__$1 = this;
return self__.meta31719;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31718.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31718.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31719","meta31719",1433970470,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31718";

cljs.core.async.t_cljs$core$async31718.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31718");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31718 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31718(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31719){
return (new cljs.core.async.t_cljs$core$async31718(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31719));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31718(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29924__auto___31844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___31844,mults,ensure_mult,p){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___31844,mults,ensure_mult,p){
return (function (state_31792){
var state_val_31793 = (state_31792[(1)]);
if((state_val_31793 === (7))){
var inst_31788 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_31794_31845 = state_31792__$1;
(statearr_31794_31845[(2)] = inst_31788);

(statearr_31794_31845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (20))){
var state_31792__$1 = state_31792;
var statearr_31795_31846 = state_31792__$1;
(statearr_31795_31846[(2)] = null);

(statearr_31795_31846[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (1))){
var state_31792__$1 = state_31792;
var statearr_31796_31847 = state_31792__$1;
(statearr_31796_31847[(2)] = null);

(statearr_31796_31847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (24))){
var inst_31771 = (state_31792[(7)]);
var inst_31780 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31771);
var state_31792__$1 = state_31792;
var statearr_31797_31848 = state_31792__$1;
(statearr_31797_31848[(2)] = inst_31780);

(statearr_31797_31848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (4))){
var inst_31723 = (state_31792[(8)]);
var inst_31723__$1 = (state_31792[(2)]);
var inst_31724 = (inst_31723__$1 == null);
var state_31792__$1 = (function (){var statearr_31798 = state_31792;
(statearr_31798[(8)] = inst_31723__$1);

return statearr_31798;
})();
if(cljs.core.truth_(inst_31724)){
var statearr_31799_31849 = state_31792__$1;
(statearr_31799_31849[(1)] = (5));

} else {
var statearr_31800_31850 = state_31792__$1;
(statearr_31800_31850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (15))){
var inst_31765 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_31801_31851 = state_31792__$1;
(statearr_31801_31851[(2)] = inst_31765);

(statearr_31801_31851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (21))){
var inst_31785 = (state_31792[(2)]);
var state_31792__$1 = (function (){var statearr_31802 = state_31792;
(statearr_31802[(9)] = inst_31785);

return statearr_31802;
})();
var statearr_31803_31852 = state_31792__$1;
(statearr_31803_31852[(2)] = null);

(statearr_31803_31852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (13))){
var inst_31747 = (state_31792[(10)]);
var inst_31749 = cljs.core.chunked_seq_QMARK_.call(null,inst_31747);
var state_31792__$1 = state_31792;
if(inst_31749){
var statearr_31804_31853 = state_31792__$1;
(statearr_31804_31853[(1)] = (16));

} else {
var statearr_31805_31854 = state_31792__$1;
(statearr_31805_31854[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (22))){
var inst_31777 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
if(cljs.core.truth_(inst_31777)){
var statearr_31806_31855 = state_31792__$1;
(statearr_31806_31855[(1)] = (23));

} else {
var statearr_31807_31856 = state_31792__$1;
(statearr_31807_31856[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (6))){
var inst_31773 = (state_31792[(11)]);
var inst_31723 = (state_31792[(8)]);
var inst_31771 = (state_31792[(7)]);
var inst_31771__$1 = topic_fn.call(null,inst_31723);
var inst_31772 = cljs.core.deref.call(null,mults);
var inst_31773__$1 = cljs.core.get.call(null,inst_31772,inst_31771__$1);
var state_31792__$1 = (function (){var statearr_31808 = state_31792;
(statearr_31808[(11)] = inst_31773__$1);

(statearr_31808[(7)] = inst_31771__$1);

return statearr_31808;
})();
if(cljs.core.truth_(inst_31773__$1)){
var statearr_31809_31857 = state_31792__$1;
(statearr_31809_31857[(1)] = (19));

} else {
var statearr_31810_31858 = state_31792__$1;
(statearr_31810_31858[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (25))){
var inst_31782 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_31811_31859 = state_31792__$1;
(statearr_31811_31859[(2)] = inst_31782);

(statearr_31811_31859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (17))){
var inst_31747 = (state_31792[(10)]);
var inst_31756 = cljs.core.first.call(null,inst_31747);
var inst_31757 = cljs.core.async.muxch_STAR_.call(null,inst_31756);
var inst_31758 = cljs.core.async.close_BANG_.call(null,inst_31757);
var inst_31759 = cljs.core.next.call(null,inst_31747);
var inst_31733 = inst_31759;
var inst_31734 = null;
var inst_31735 = (0);
var inst_31736 = (0);
var state_31792__$1 = (function (){var statearr_31812 = state_31792;
(statearr_31812[(12)] = inst_31735);

(statearr_31812[(13)] = inst_31733);

(statearr_31812[(14)] = inst_31734);

(statearr_31812[(15)] = inst_31758);

(statearr_31812[(16)] = inst_31736);

return statearr_31812;
})();
var statearr_31813_31860 = state_31792__$1;
(statearr_31813_31860[(2)] = null);

(statearr_31813_31860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (3))){
var inst_31790 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31792__$1,inst_31790);
} else {
if((state_val_31793 === (12))){
var inst_31767 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_31814_31861 = state_31792__$1;
(statearr_31814_31861[(2)] = inst_31767);

(statearr_31814_31861[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (2))){
var state_31792__$1 = state_31792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31792__$1,(4),ch);
} else {
if((state_val_31793 === (23))){
var state_31792__$1 = state_31792;
var statearr_31815_31862 = state_31792__$1;
(statearr_31815_31862[(2)] = null);

(statearr_31815_31862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (19))){
var inst_31773 = (state_31792[(11)]);
var inst_31723 = (state_31792[(8)]);
var inst_31775 = cljs.core.async.muxch_STAR_.call(null,inst_31773);
var state_31792__$1 = state_31792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31792__$1,(22),inst_31775,inst_31723);
} else {
if((state_val_31793 === (11))){
var inst_31733 = (state_31792[(13)]);
var inst_31747 = (state_31792[(10)]);
var inst_31747__$1 = cljs.core.seq.call(null,inst_31733);
var state_31792__$1 = (function (){var statearr_31816 = state_31792;
(statearr_31816[(10)] = inst_31747__$1);

return statearr_31816;
})();
if(inst_31747__$1){
var statearr_31817_31863 = state_31792__$1;
(statearr_31817_31863[(1)] = (13));

} else {
var statearr_31818_31864 = state_31792__$1;
(statearr_31818_31864[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (9))){
var inst_31769 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_31819_31865 = state_31792__$1;
(statearr_31819_31865[(2)] = inst_31769);

(statearr_31819_31865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (5))){
var inst_31730 = cljs.core.deref.call(null,mults);
var inst_31731 = cljs.core.vals.call(null,inst_31730);
var inst_31732 = cljs.core.seq.call(null,inst_31731);
var inst_31733 = inst_31732;
var inst_31734 = null;
var inst_31735 = (0);
var inst_31736 = (0);
var state_31792__$1 = (function (){var statearr_31820 = state_31792;
(statearr_31820[(12)] = inst_31735);

(statearr_31820[(13)] = inst_31733);

(statearr_31820[(14)] = inst_31734);

(statearr_31820[(16)] = inst_31736);

return statearr_31820;
})();
var statearr_31821_31866 = state_31792__$1;
(statearr_31821_31866[(2)] = null);

(statearr_31821_31866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (14))){
var state_31792__$1 = state_31792;
var statearr_31825_31867 = state_31792__$1;
(statearr_31825_31867[(2)] = null);

(statearr_31825_31867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (16))){
var inst_31747 = (state_31792[(10)]);
var inst_31751 = cljs.core.chunk_first.call(null,inst_31747);
var inst_31752 = cljs.core.chunk_rest.call(null,inst_31747);
var inst_31753 = cljs.core.count.call(null,inst_31751);
var inst_31733 = inst_31752;
var inst_31734 = inst_31751;
var inst_31735 = inst_31753;
var inst_31736 = (0);
var state_31792__$1 = (function (){var statearr_31826 = state_31792;
(statearr_31826[(12)] = inst_31735);

(statearr_31826[(13)] = inst_31733);

(statearr_31826[(14)] = inst_31734);

(statearr_31826[(16)] = inst_31736);

return statearr_31826;
})();
var statearr_31827_31868 = state_31792__$1;
(statearr_31827_31868[(2)] = null);

(statearr_31827_31868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (10))){
var inst_31735 = (state_31792[(12)]);
var inst_31733 = (state_31792[(13)]);
var inst_31734 = (state_31792[(14)]);
var inst_31736 = (state_31792[(16)]);
var inst_31741 = cljs.core._nth.call(null,inst_31734,inst_31736);
var inst_31742 = cljs.core.async.muxch_STAR_.call(null,inst_31741);
var inst_31743 = cljs.core.async.close_BANG_.call(null,inst_31742);
var inst_31744 = (inst_31736 + (1));
var tmp31822 = inst_31735;
var tmp31823 = inst_31733;
var tmp31824 = inst_31734;
var inst_31733__$1 = tmp31823;
var inst_31734__$1 = tmp31824;
var inst_31735__$1 = tmp31822;
var inst_31736__$1 = inst_31744;
var state_31792__$1 = (function (){var statearr_31828 = state_31792;
(statearr_31828[(12)] = inst_31735__$1);

(statearr_31828[(13)] = inst_31733__$1);

(statearr_31828[(14)] = inst_31734__$1);

(statearr_31828[(16)] = inst_31736__$1);

(statearr_31828[(17)] = inst_31743);

return statearr_31828;
})();
var statearr_31829_31869 = state_31792__$1;
(statearr_31829_31869[(2)] = null);

(statearr_31829_31869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (18))){
var inst_31762 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_31830_31870 = state_31792__$1;
(statearr_31830_31870[(2)] = inst_31762);

(statearr_31830_31870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (8))){
var inst_31735 = (state_31792[(12)]);
var inst_31736 = (state_31792[(16)]);
var inst_31738 = (inst_31736 < inst_31735);
var inst_31739 = inst_31738;
var state_31792__$1 = state_31792;
if(cljs.core.truth_(inst_31739)){
var statearr_31831_31871 = state_31792__$1;
(statearr_31831_31871[(1)] = (10));

} else {
var statearr_31832_31872 = state_31792__$1;
(statearr_31832_31872[(1)] = (11));

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
});})(c__29924__auto___31844,mults,ensure_mult,p))
;
return ((function (switch__29859__auto__,c__29924__auto___31844,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_31836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31836[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_31836[(1)] = (1));

return statearr_31836;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_31792){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_31792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e31837){if((e31837 instanceof Object)){
var ex__29863__auto__ = e31837;
var statearr_31838_31873 = state_31792;
(statearr_31838_31873[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31874 = state_31792;
state_31792 = G__31874;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_31792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_31792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___31844,mults,ensure_mult,p))
})();
var state__29926__auto__ = (function (){var statearr_31839 = f__29925__auto__.call(null);
(statearr_31839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___31844);

return statearr_31839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___31844,mults,ensure_mult,p))
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
var args31875 = [];
var len__25923__auto___31878 = arguments.length;
var i__25924__auto___31879 = (0);
while(true){
if((i__25924__auto___31879 < len__25923__auto___31878)){
args31875.push((arguments[i__25924__auto___31879]));

var G__31880 = (i__25924__auto___31879 + (1));
i__25924__auto___31879 = G__31880;
continue;
} else {
}
break;
}

var G__31877 = args31875.length;
switch (G__31877) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31875.length)].join('')));

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
var args31882 = [];
var len__25923__auto___31885 = arguments.length;
var i__25924__auto___31886 = (0);
while(true){
if((i__25924__auto___31886 < len__25923__auto___31885)){
args31882.push((arguments[i__25924__auto___31886]));

var G__31887 = (i__25924__auto___31886 + (1));
i__25924__auto___31886 = G__31887;
continue;
} else {
}
break;
}

var G__31884 = args31882.length;
switch (G__31884) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31882.length)].join('')));

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
var args31889 = [];
var len__25923__auto___31960 = arguments.length;
var i__25924__auto___31961 = (0);
while(true){
if((i__25924__auto___31961 < len__25923__auto___31960)){
args31889.push((arguments[i__25924__auto___31961]));

var G__31962 = (i__25924__auto___31961 + (1));
i__25924__auto___31961 = G__31962;
continue;
} else {
}
break;
}

var G__31891 = args31889.length;
switch (G__31891) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31889.length)].join('')));

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
var c__29924__auto___31964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___31964,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___31964,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31930){
var state_val_31931 = (state_31930[(1)]);
if((state_val_31931 === (7))){
var state_31930__$1 = state_31930;
var statearr_31932_31965 = state_31930__$1;
(statearr_31932_31965[(2)] = null);

(statearr_31932_31965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31931 === (1))){
var state_31930__$1 = state_31930;
var statearr_31933_31966 = state_31930__$1;
(statearr_31933_31966[(2)] = null);

(statearr_31933_31966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31931 === (4))){
var inst_31894 = (state_31930[(7)]);
var inst_31896 = (inst_31894 < cnt);
var state_31930__$1 = state_31930;
if(cljs.core.truth_(inst_31896)){
var statearr_31934_31967 = state_31930__$1;
(statearr_31934_31967[(1)] = (6));

} else {
var statearr_31935_31968 = state_31930__$1;
(statearr_31935_31968[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31931 === (15))){
var inst_31926 = (state_31930[(2)]);
var state_31930__$1 = state_31930;
var statearr_31936_31969 = state_31930__$1;
(statearr_31936_31969[(2)] = inst_31926);

(statearr_31936_31969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31931 === (13))){
var inst_31919 = cljs.core.async.close_BANG_.call(null,out);
var state_31930__$1 = state_31930;
var statearr_31937_31970 = state_31930__$1;
(statearr_31937_31970[(2)] = inst_31919);

(statearr_31937_31970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31931 === (6))){
var state_31930__$1 = state_31930;
var statearr_31938_31971 = state_31930__$1;
(statearr_31938_31971[(2)] = null);

(statearr_31938_31971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31931 === (3))){
var inst_31928 = (state_31930[(2)]);
var state_31930__$1 = state_31930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31930__$1,inst_31928);
} else {
if((state_val_31931 === (12))){
var inst_31916 = (state_31930[(8)]);
var inst_31916__$1 = (state_31930[(2)]);
var inst_31917 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31916__$1);
var state_31930__$1 = (function (){var statearr_31939 = state_31930;
(statearr_31939[(8)] = inst_31916__$1);

return statearr_31939;
})();
if(cljs.core.truth_(inst_31917)){
var statearr_31940_31972 = state_31930__$1;
(statearr_31940_31972[(1)] = (13));

} else {
var statearr_31941_31973 = state_31930__$1;
(statearr_31941_31973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31931 === (2))){
var inst_31893 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31894 = (0);
var state_31930__$1 = (function (){var statearr_31942 = state_31930;
(statearr_31942[(9)] = inst_31893);

(statearr_31942[(7)] = inst_31894);

return statearr_31942;
})();
var statearr_31943_31974 = state_31930__$1;
(statearr_31943_31974[(2)] = null);

(statearr_31943_31974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31931 === (11))){
var inst_31894 = (state_31930[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31930,(10),Object,null,(9));
var inst_31903 = chs__$1.call(null,inst_31894);
var inst_31904 = done.call(null,inst_31894);
var inst_31905 = cljs.core.async.take_BANG_.call(null,inst_31903,inst_31904);
var state_31930__$1 = state_31930;
var statearr_31944_31975 = state_31930__$1;
(statearr_31944_31975[(2)] = inst_31905);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31930__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31931 === (9))){
var inst_31894 = (state_31930[(7)]);
var inst_31907 = (state_31930[(2)]);
var inst_31908 = (inst_31894 + (1));
var inst_31894__$1 = inst_31908;
var state_31930__$1 = (function (){var statearr_31945 = state_31930;
(statearr_31945[(10)] = inst_31907);

(statearr_31945[(7)] = inst_31894__$1);

return statearr_31945;
})();
var statearr_31946_31976 = state_31930__$1;
(statearr_31946_31976[(2)] = null);

(statearr_31946_31976[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31931 === (5))){
var inst_31914 = (state_31930[(2)]);
var state_31930__$1 = (function (){var statearr_31947 = state_31930;
(statearr_31947[(11)] = inst_31914);

return statearr_31947;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31930__$1,(12),dchan);
} else {
if((state_val_31931 === (14))){
var inst_31916 = (state_31930[(8)]);
var inst_31921 = cljs.core.apply.call(null,f,inst_31916);
var state_31930__$1 = state_31930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31930__$1,(16),out,inst_31921);
} else {
if((state_val_31931 === (16))){
var inst_31923 = (state_31930[(2)]);
var state_31930__$1 = (function (){var statearr_31948 = state_31930;
(statearr_31948[(12)] = inst_31923);

return statearr_31948;
})();
var statearr_31949_31977 = state_31930__$1;
(statearr_31949_31977[(2)] = null);

(statearr_31949_31977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31931 === (10))){
var inst_31898 = (state_31930[(2)]);
var inst_31899 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31930__$1 = (function (){var statearr_31950 = state_31930;
(statearr_31950[(13)] = inst_31898);

return statearr_31950;
})();
var statearr_31951_31978 = state_31930__$1;
(statearr_31951_31978[(2)] = inst_31899);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31930__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31931 === (8))){
var inst_31912 = (state_31930[(2)]);
var state_31930__$1 = state_31930;
var statearr_31952_31979 = state_31930__$1;
(statearr_31952_31979[(2)] = inst_31912);

(statearr_31952_31979[(1)] = (5));


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
});})(c__29924__auto___31964,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29859__auto__,c__29924__auto___31964,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_31956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31956[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_31956[(1)] = (1));

return statearr_31956;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_31930){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_31930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e31957){if((e31957 instanceof Object)){
var ex__29863__auto__ = e31957;
var statearr_31958_31980 = state_31930;
(statearr_31958_31980[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31981 = state_31930;
state_31930 = G__31981;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_31930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_31930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___31964,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29926__auto__ = (function (){var statearr_31959 = f__29925__auto__.call(null);
(statearr_31959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___31964);

return statearr_31959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___31964,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31983 = [];
var len__25923__auto___32041 = arguments.length;
var i__25924__auto___32042 = (0);
while(true){
if((i__25924__auto___32042 < len__25923__auto___32041)){
args31983.push((arguments[i__25924__auto___32042]));

var G__32043 = (i__25924__auto___32042 + (1));
i__25924__auto___32042 = G__32043;
continue;
} else {
}
break;
}

var G__31985 = args31983.length;
switch (G__31985) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31983.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29924__auto___32045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___32045,out){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___32045,out){
return (function (state_32017){
var state_val_32018 = (state_32017[(1)]);
if((state_val_32018 === (7))){
var inst_31997 = (state_32017[(7)]);
var inst_31996 = (state_32017[(8)]);
var inst_31996__$1 = (state_32017[(2)]);
var inst_31997__$1 = cljs.core.nth.call(null,inst_31996__$1,(0),null);
var inst_31998 = cljs.core.nth.call(null,inst_31996__$1,(1),null);
var inst_31999 = (inst_31997__$1 == null);
var state_32017__$1 = (function (){var statearr_32019 = state_32017;
(statearr_32019[(7)] = inst_31997__$1);

(statearr_32019[(8)] = inst_31996__$1);

(statearr_32019[(9)] = inst_31998);

return statearr_32019;
})();
if(cljs.core.truth_(inst_31999)){
var statearr_32020_32046 = state_32017__$1;
(statearr_32020_32046[(1)] = (8));

} else {
var statearr_32021_32047 = state_32017__$1;
(statearr_32021_32047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (1))){
var inst_31986 = cljs.core.vec.call(null,chs);
var inst_31987 = inst_31986;
var state_32017__$1 = (function (){var statearr_32022 = state_32017;
(statearr_32022[(10)] = inst_31987);

return statearr_32022;
})();
var statearr_32023_32048 = state_32017__$1;
(statearr_32023_32048[(2)] = null);

(statearr_32023_32048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (4))){
var inst_31987 = (state_32017[(10)]);
var state_32017__$1 = state_32017;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32017__$1,(7),inst_31987);
} else {
if((state_val_32018 === (6))){
var inst_32013 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32024_32049 = state_32017__$1;
(statearr_32024_32049[(2)] = inst_32013);

(statearr_32024_32049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (3))){
var inst_32015 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32017__$1,inst_32015);
} else {
if((state_val_32018 === (2))){
var inst_31987 = (state_32017[(10)]);
var inst_31989 = cljs.core.count.call(null,inst_31987);
var inst_31990 = (inst_31989 > (0));
var state_32017__$1 = state_32017;
if(cljs.core.truth_(inst_31990)){
var statearr_32026_32050 = state_32017__$1;
(statearr_32026_32050[(1)] = (4));

} else {
var statearr_32027_32051 = state_32017__$1;
(statearr_32027_32051[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (11))){
var inst_31987 = (state_32017[(10)]);
var inst_32006 = (state_32017[(2)]);
var tmp32025 = inst_31987;
var inst_31987__$1 = tmp32025;
var state_32017__$1 = (function (){var statearr_32028 = state_32017;
(statearr_32028[(10)] = inst_31987__$1);

(statearr_32028[(11)] = inst_32006);

return statearr_32028;
})();
var statearr_32029_32052 = state_32017__$1;
(statearr_32029_32052[(2)] = null);

(statearr_32029_32052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (9))){
var inst_31997 = (state_32017[(7)]);
var state_32017__$1 = state_32017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32017__$1,(11),out,inst_31997);
} else {
if((state_val_32018 === (5))){
var inst_32011 = cljs.core.async.close_BANG_.call(null,out);
var state_32017__$1 = state_32017;
var statearr_32030_32053 = state_32017__$1;
(statearr_32030_32053[(2)] = inst_32011);

(statearr_32030_32053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (10))){
var inst_32009 = (state_32017[(2)]);
var state_32017__$1 = state_32017;
var statearr_32031_32054 = state_32017__$1;
(statearr_32031_32054[(2)] = inst_32009);

(statearr_32031_32054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (8))){
var inst_31997 = (state_32017[(7)]);
var inst_31996 = (state_32017[(8)]);
var inst_31987 = (state_32017[(10)]);
var inst_31998 = (state_32017[(9)]);
var inst_32001 = (function (){var cs = inst_31987;
var vec__31992 = inst_31996;
var v = inst_31997;
var c = inst_31998;
return ((function (cs,vec__31992,v,c,inst_31997,inst_31996,inst_31987,inst_31998,state_val_32018,c__29924__auto___32045,out){
return (function (p1__31982_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31982_SHARP_);
});
;})(cs,vec__31992,v,c,inst_31997,inst_31996,inst_31987,inst_31998,state_val_32018,c__29924__auto___32045,out))
})();
var inst_32002 = cljs.core.filterv.call(null,inst_32001,inst_31987);
var inst_31987__$1 = inst_32002;
var state_32017__$1 = (function (){var statearr_32032 = state_32017;
(statearr_32032[(10)] = inst_31987__$1);

return statearr_32032;
})();
var statearr_32033_32055 = state_32017__$1;
(statearr_32033_32055[(2)] = null);

(statearr_32033_32055[(1)] = (2));


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
});})(c__29924__auto___32045,out))
;
return ((function (switch__29859__auto__,c__29924__auto___32045,out){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_32037 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32037[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_32037[(1)] = (1));

return statearr_32037;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_32017){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_32017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e32038){if((e32038 instanceof Object)){
var ex__29863__auto__ = e32038;
var statearr_32039_32056 = state_32017;
(statearr_32039_32056[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32057 = state_32017;
state_32017 = G__32057;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_32017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_32017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___32045,out))
})();
var state__29926__auto__ = (function (){var statearr_32040 = f__29925__auto__.call(null);
(statearr_32040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___32045);

return statearr_32040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___32045,out))
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
var args32058 = [];
var len__25923__auto___32107 = arguments.length;
var i__25924__auto___32108 = (0);
while(true){
if((i__25924__auto___32108 < len__25923__auto___32107)){
args32058.push((arguments[i__25924__auto___32108]));

var G__32109 = (i__25924__auto___32108 + (1));
i__25924__auto___32108 = G__32109;
continue;
} else {
}
break;
}

var G__32060 = args32058.length;
switch (G__32060) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32058.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29924__auto___32111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___32111,out){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___32111,out){
return (function (state_32084){
var state_val_32085 = (state_32084[(1)]);
if((state_val_32085 === (7))){
var inst_32066 = (state_32084[(7)]);
var inst_32066__$1 = (state_32084[(2)]);
var inst_32067 = (inst_32066__$1 == null);
var inst_32068 = cljs.core.not.call(null,inst_32067);
var state_32084__$1 = (function (){var statearr_32086 = state_32084;
(statearr_32086[(7)] = inst_32066__$1);

return statearr_32086;
})();
if(inst_32068){
var statearr_32087_32112 = state_32084__$1;
(statearr_32087_32112[(1)] = (8));

} else {
var statearr_32088_32113 = state_32084__$1;
(statearr_32088_32113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32085 === (1))){
var inst_32061 = (0);
var state_32084__$1 = (function (){var statearr_32089 = state_32084;
(statearr_32089[(8)] = inst_32061);

return statearr_32089;
})();
var statearr_32090_32114 = state_32084__$1;
(statearr_32090_32114[(2)] = null);

(statearr_32090_32114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32085 === (4))){
var state_32084__$1 = state_32084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32084__$1,(7),ch);
} else {
if((state_val_32085 === (6))){
var inst_32079 = (state_32084[(2)]);
var state_32084__$1 = state_32084;
var statearr_32091_32115 = state_32084__$1;
(statearr_32091_32115[(2)] = inst_32079);

(statearr_32091_32115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32085 === (3))){
var inst_32081 = (state_32084[(2)]);
var inst_32082 = cljs.core.async.close_BANG_.call(null,out);
var state_32084__$1 = (function (){var statearr_32092 = state_32084;
(statearr_32092[(9)] = inst_32081);

return statearr_32092;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32084__$1,inst_32082);
} else {
if((state_val_32085 === (2))){
var inst_32061 = (state_32084[(8)]);
var inst_32063 = (inst_32061 < n);
var state_32084__$1 = state_32084;
if(cljs.core.truth_(inst_32063)){
var statearr_32093_32116 = state_32084__$1;
(statearr_32093_32116[(1)] = (4));

} else {
var statearr_32094_32117 = state_32084__$1;
(statearr_32094_32117[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32085 === (11))){
var inst_32061 = (state_32084[(8)]);
var inst_32071 = (state_32084[(2)]);
var inst_32072 = (inst_32061 + (1));
var inst_32061__$1 = inst_32072;
var state_32084__$1 = (function (){var statearr_32095 = state_32084;
(statearr_32095[(10)] = inst_32071);

(statearr_32095[(8)] = inst_32061__$1);

return statearr_32095;
})();
var statearr_32096_32118 = state_32084__$1;
(statearr_32096_32118[(2)] = null);

(statearr_32096_32118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32085 === (9))){
var state_32084__$1 = state_32084;
var statearr_32097_32119 = state_32084__$1;
(statearr_32097_32119[(2)] = null);

(statearr_32097_32119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32085 === (5))){
var state_32084__$1 = state_32084;
var statearr_32098_32120 = state_32084__$1;
(statearr_32098_32120[(2)] = null);

(statearr_32098_32120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32085 === (10))){
var inst_32076 = (state_32084[(2)]);
var state_32084__$1 = state_32084;
var statearr_32099_32121 = state_32084__$1;
(statearr_32099_32121[(2)] = inst_32076);

(statearr_32099_32121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32085 === (8))){
var inst_32066 = (state_32084[(7)]);
var state_32084__$1 = state_32084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32084__$1,(11),out,inst_32066);
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
});})(c__29924__auto___32111,out))
;
return ((function (switch__29859__auto__,c__29924__auto___32111,out){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_32103 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32103[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_32103[(1)] = (1));

return statearr_32103;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_32084){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_32084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e32104){if((e32104 instanceof Object)){
var ex__29863__auto__ = e32104;
var statearr_32105_32122 = state_32084;
(statearr_32105_32122[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32123 = state_32084;
state_32084 = G__32123;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_32084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_32084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___32111,out))
})();
var state__29926__auto__ = (function (){var statearr_32106 = f__29925__auto__.call(null);
(statearr_32106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___32111);

return statearr_32106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___32111,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32131 = (function (map_LT_,f,ch,meta32132){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32132 = meta32132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32133,meta32132__$1){
var self__ = this;
var _32133__$1 = this;
return (new cljs.core.async.t_cljs$core$async32131(self__.map_LT_,self__.f,self__.ch,meta32132__$1));
});

cljs.core.async.t_cljs$core$async32131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32133){
var self__ = this;
var _32133__$1 = this;
return self__.meta32132;
});

cljs.core.async.t_cljs$core$async32131.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32131.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32131.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32131.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32131.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32134 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32134 = (function (map_LT_,f,ch,meta32132,_,fn1,meta32135){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32132 = meta32132;
this._ = _;
this.fn1 = fn1;
this.meta32135 = meta32135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32136,meta32135__$1){
var self__ = this;
var _32136__$1 = this;
return (new cljs.core.async.t_cljs$core$async32134(self__.map_LT_,self__.f,self__.ch,self__.meta32132,self__._,self__.fn1,meta32135__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32134.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32136){
var self__ = this;
var _32136__$1 = this;
return self__.meta32135;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32134.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32134.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32124_SHARP_){
return f1.call(null,(((p1__32124_SHARP_ == null))?null:self__.f.call(null,p1__32124_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32134.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32132","meta32132",-641695216,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32131","cljs.core.async/t_cljs$core$async32131",-1972371466,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32135","meta32135",-1375525154,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32134.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32134";

cljs.core.async.t_cljs$core$async32134.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async32134");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32134 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32134(map_LT___$1,f__$1,ch__$1,meta32132__$1,___$2,fn1__$1,meta32135){
return (new cljs.core.async.t_cljs$core$async32134(map_LT___$1,f__$1,ch__$1,meta32132__$1,___$2,fn1__$1,meta32135));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32134(self__.map_LT_,self__.f,self__.ch,self__.meta32132,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async32131.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32131.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32132","meta32132",-641695216,null)], null);
});

cljs.core.async.t_cljs$core$async32131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32131";

cljs.core.async.t_cljs$core$async32131.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async32131");
});

cljs.core.async.__GT_t_cljs$core$async32131 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32131(map_LT___$1,f__$1,ch__$1,meta32132){
return (new cljs.core.async.t_cljs$core$async32131(map_LT___$1,f__$1,ch__$1,meta32132));
});

}

return (new cljs.core.async.t_cljs$core$async32131(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32140 = (function (map_GT_,f,ch,meta32141){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32141 = meta32141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32142,meta32141__$1){
var self__ = this;
var _32142__$1 = this;
return (new cljs.core.async.t_cljs$core$async32140(self__.map_GT_,self__.f,self__.ch,meta32141__$1));
});

cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32142){
var self__ = this;
var _32142__$1 = this;
return self__.meta32141;
});

cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32140.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32141","meta32141",1451339605,null)], null);
});

cljs.core.async.t_cljs$core$async32140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32140";

cljs.core.async.t_cljs$core$async32140.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async32140");
});

cljs.core.async.__GT_t_cljs$core$async32140 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32140(map_GT___$1,f__$1,ch__$1,meta32141){
return (new cljs.core.async.t_cljs$core$async32140(map_GT___$1,f__$1,ch__$1,meta32141));
});

}

return (new cljs.core.async.t_cljs$core$async32140(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32146 = (function (filter_GT_,p,ch,meta32147){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32147 = meta32147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32148,meta32147__$1){
var self__ = this;
var _32148__$1 = this;
return (new cljs.core.async.t_cljs$core$async32146(self__.filter_GT_,self__.p,self__.ch,meta32147__$1));
});

cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32148){
var self__ = this;
var _32148__$1 = this;
return self__.meta32147;
});

cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32147","meta32147",-1288045262,null)], null);
});

cljs.core.async.t_cljs$core$async32146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32146";

cljs.core.async.t_cljs$core$async32146.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async32146");
});

cljs.core.async.__GT_t_cljs$core$async32146 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32146(filter_GT___$1,p__$1,ch__$1,meta32147){
return (new cljs.core.async.t_cljs$core$async32146(filter_GT___$1,p__$1,ch__$1,meta32147));
});

}

return (new cljs.core.async.t_cljs$core$async32146(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args32149 = [];
var len__25923__auto___32193 = arguments.length;
var i__25924__auto___32194 = (0);
while(true){
if((i__25924__auto___32194 < len__25923__auto___32193)){
args32149.push((arguments[i__25924__auto___32194]));

var G__32195 = (i__25924__auto___32194 + (1));
i__25924__auto___32194 = G__32195;
continue;
} else {
}
break;
}

var G__32151 = args32149.length;
switch (G__32151) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32149.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29924__auto___32197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___32197,out){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___32197,out){
return (function (state_32172){
var state_val_32173 = (state_32172[(1)]);
if((state_val_32173 === (7))){
var inst_32168 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32174_32198 = state_32172__$1;
(statearr_32174_32198[(2)] = inst_32168);

(statearr_32174_32198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (1))){
var state_32172__$1 = state_32172;
var statearr_32175_32199 = state_32172__$1;
(statearr_32175_32199[(2)] = null);

(statearr_32175_32199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (4))){
var inst_32154 = (state_32172[(7)]);
var inst_32154__$1 = (state_32172[(2)]);
var inst_32155 = (inst_32154__$1 == null);
var state_32172__$1 = (function (){var statearr_32176 = state_32172;
(statearr_32176[(7)] = inst_32154__$1);

return statearr_32176;
})();
if(cljs.core.truth_(inst_32155)){
var statearr_32177_32200 = state_32172__$1;
(statearr_32177_32200[(1)] = (5));

} else {
var statearr_32178_32201 = state_32172__$1;
(statearr_32178_32201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (6))){
var inst_32154 = (state_32172[(7)]);
var inst_32159 = p.call(null,inst_32154);
var state_32172__$1 = state_32172;
if(cljs.core.truth_(inst_32159)){
var statearr_32179_32202 = state_32172__$1;
(statearr_32179_32202[(1)] = (8));

} else {
var statearr_32180_32203 = state_32172__$1;
(statearr_32180_32203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (3))){
var inst_32170 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32172__$1,inst_32170);
} else {
if((state_val_32173 === (2))){
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32172__$1,(4),ch);
} else {
if((state_val_32173 === (11))){
var inst_32162 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32181_32204 = state_32172__$1;
(statearr_32181_32204[(2)] = inst_32162);

(statearr_32181_32204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (9))){
var state_32172__$1 = state_32172;
var statearr_32182_32205 = state_32172__$1;
(statearr_32182_32205[(2)] = null);

(statearr_32182_32205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (5))){
var inst_32157 = cljs.core.async.close_BANG_.call(null,out);
var state_32172__$1 = state_32172;
var statearr_32183_32206 = state_32172__$1;
(statearr_32183_32206[(2)] = inst_32157);

(statearr_32183_32206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (10))){
var inst_32165 = (state_32172[(2)]);
var state_32172__$1 = (function (){var statearr_32184 = state_32172;
(statearr_32184[(8)] = inst_32165);

return statearr_32184;
})();
var statearr_32185_32207 = state_32172__$1;
(statearr_32185_32207[(2)] = null);

(statearr_32185_32207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (8))){
var inst_32154 = (state_32172[(7)]);
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32172__$1,(11),out,inst_32154);
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
});})(c__29924__auto___32197,out))
;
return ((function (switch__29859__auto__,c__29924__auto___32197,out){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_32189 = [null,null,null,null,null,null,null,null,null];
(statearr_32189[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_32189[(1)] = (1));

return statearr_32189;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_32172){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_32172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e32190){if((e32190 instanceof Object)){
var ex__29863__auto__ = e32190;
var statearr_32191_32208 = state_32172;
(statearr_32191_32208[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32209 = state_32172;
state_32172 = G__32209;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_32172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_32172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___32197,out))
})();
var state__29926__auto__ = (function (){var statearr_32192 = f__29925__auto__.call(null);
(statearr_32192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___32197);

return statearr_32192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___32197,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32210 = [];
var len__25923__auto___32213 = arguments.length;
var i__25924__auto___32214 = (0);
while(true){
if((i__25924__auto___32214 < len__25923__auto___32213)){
args32210.push((arguments[i__25924__auto___32214]));

var G__32215 = (i__25924__auto___32214 + (1));
i__25924__auto___32214 = G__32215;
continue;
} else {
}
break;
}

var G__32212 = args32210.length;
switch (G__32212) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32210.length)].join('')));

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
var c__29924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto__){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto__){
return (function (state_32382){
var state_val_32383 = (state_32382[(1)]);
if((state_val_32383 === (7))){
var inst_32378 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32384_32425 = state_32382__$1;
(statearr_32384_32425[(2)] = inst_32378);

(statearr_32384_32425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (20))){
var inst_32348 = (state_32382[(7)]);
var inst_32359 = (state_32382[(2)]);
var inst_32360 = cljs.core.next.call(null,inst_32348);
var inst_32334 = inst_32360;
var inst_32335 = null;
var inst_32336 = (0);
var inst_32337 = (0);
var state_32382__$1 = (function (){var statearr_32385 = state_32382;
(statearr_32385[(8)] = inst_32337);

(statearr_32385[(9)] = inst_32335);

(statearr_32385[(10)] = inst_32336);

(statearr_32385[(11)] = inst_32334);

(statearr_32385[(12)] = inst_32359);

return statearr_32385;
})();
var statearr_32386_32426 = state_32382__$1;
(statearr_32386_32426[(2)] = null);

(statearr_32386_32426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (1))){
var state_32382__$1 = state_32382;
var statearr_32387_32427 = state_32382__$1;
(statearr_32387_32427[(2)] = null);

(statearr_32387_32427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (4))){
var inst_32323 = (state_32382[(13)]);
var inst_32323__$1 = (state_32382[(2)]);
var inst_32324 = (inst_32323__$1 == null);
var state_32382__$1 = (function (){var statearr_32388 = state_32382;
(statearr_32388[(13)] = inst_32323__$1);

return statearr_32388;
})();
if(cljs.core.truth_(inst_32324)){
var statearr_32389_32428 = state_32382__$1;
(statearr_32389_32428[(1)] = (5));

} else {
var statearr_32390_32429 = state_32382__$1;
(statearr_32390_32429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (15))){
var state_32382__$1 = state_32382;
var statearr_32394_32430 = state_32382__$1;
(statearr_32394_32430[(2)] = null);

(statearr_32394_32430[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (21))){
var state_32382__$1 = state_32382;
var statearr_32395_32431 = state_32382__$1;
(statearr_32395_32431[(2)] = null);

(statearr_32395_32431[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (13))){
var inst_32337 = (state_32382[(8)]);
var inst_32335 = (state_32382[(9)]);
var inst_32336 = (state_32382[(10)]);
var inst_32334 = (state_32382[(11)]);
var inst_32344 = (state_32382[(2)]);
var inst_32345 = (inst_32337 + (1));
var tmp32391 = inst_32335;
var tmp32392 = inst_32336;
var tmp32393 = inst_32334;
var inst_32334__$1 = tmp32393;
var inst_32335__$1 = tmp32391;
var inst_32336__$1 = tmp32392;
var inst_32337__$1 = inst_32345;
var state_32382__$1 = (function (){var statearr_32396 = state_32382;
(statearr_32396[(8)] = inst_32337__$1);

(statearr_32396[(14)] = inst_32344);

(statearr_32396[(9)] = inst_32335__$1);

(statearr_32396[(10)] = inst_32336__$1);

(statearr_32396[(11)] = inst_32334__$1);

return statearr_32396;
})();
var statearr_32397_32432 = state_32382__$1;
(statearr_32397_32432[(2)] = null);

(statearr_32397_32432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (22))){
var state_32382__$1 = state_32382;
var statearr_32398_32433 = state_32382__$1;
(statearr_32398_32433[(2)] = null);

(statearr_32398_32433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (6))){
var inst_32323 = (state_32382[(13)]);
var inst_32332 = f.call(null,inst_32323);
var inst_32333 = cljs.core.seq.call(null,inst_32332);
var inst_32334 = inst_32333;
var inst_32335 = null;
var inst_32336 = (0);
var inst_32337 = (0);
var state_32382__$1 = (function (){var statearr_32399 = state_32382;
(statearr_32399[(8)] = inst_32337);

(statearr_32399[(9)] = inst_32335);

(statearr_32399[(10)] = inst_32336);

(statearr_32399[(11)] = inst_32334);

return statearr_32399;
})();
var statearr_32400_32434 = state_32382__$1;
(statearr_32400_32434[(2)] = null);

(statearr_32400_32434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (17))){
var inst_32348 = (state_32382[(7)]);
var inst_32352 = cljs.core.chunk_first.call(null,inst_32348);
var inst_32353 = cljs.core.chunk_rest.call(null,inst_32348);
var inst_32354 = cljs.core.count.call(null,inst_32352);
var inst_32334 = inst_32353;
var inst_32335 = inst_32352;
var inst_32336 = inst_32354;
var inst_32337 = (0);
var state_32382__$1 = (function (){var statearr_32401 = state_32382;
(statearr_32401[(8)] = inst_32337);

(statearr_32401[(9)] = inst_32335);

(statearr_32401[(10)] = inst_32336);

(statearr_32401[(11)] = inst_32334);

return statearr_32401;
})();
var statearr_32402_32435 = state_32382__$1;
(statearr_32402_32435[(2)] = null);

(statearr_32402_32435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (3))){
var inst_32380 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32382__$1,inst_32380);
} else {
if((state_val_32383 === (12))){
var inst_32368 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32403_32436 = state_32382__$1;
(statearr_32403_32436[(2)] = inst_32368);

(statearr_32403_32436[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (2))){
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32382__$1,(4),in$);
} else {
if((state_val_32383 === (23))){
var inst_32376 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32404_32437 = state_32382__$1;
(statearr_32404_32437[(2)] = inst_32376);

(statearr_32404_32437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (19))){
var inst_32363 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32405_32438 = state_32382__$1;
(statearr_32405_32438[(2)] = inst_32363);

(statearr_32405_32438[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (11))){
var inst_32334 = (state_32382[(11)]);
var inst_32348 = (state_32382[(7)]);
var inst_32348__$1 = cljs.core.seq.call(null,inst_32334);
var state_32382__$1 = (function (){var statearr_32406 = state_32382;
(statearr_32406[(7)] = inst_32348__$1);

return statearr_32406;
})();
if(inst_32348__$1){
var statearr_32407_32439 = state_32382__$1;
(statearr_32407_32439[(1)] = (14));

} else {
var statearr_32408_32440 = state_32382__$1;
(statearr_32408_32440[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (9))){
var inst_32370 = (state_32382[(2)]);
var inst_32371 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32382__$1 = (function (){var statearr_32409 = state_32382;
(statearr_32409[(15)] = inst_32370);

return statearr_32409;
})();
if(cljs.core.truth_(inst_32371)){
var statearr_32410_32441 = state_32382__$1;
(statearr_32410_32441[(1)] = (21));

} else {
var statearr_32411_32442 = state_32382__$1;
(statearr_32411_32442[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (5))){
var inst_32326 = cljs.core.async.close_BANG_.call(null,out);
var state_32382__$1 = state_32382;
var statearr_32412_32443 = state_32382__$1;
(statearr_32412_32443[(2)] = inst_32326);

(statearr_32412_32443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (14))){
var inst_32348 = (state_32382[(7)]);
var inst_32350 = cljs.core.chunked_seq_QMARK_.call(null,inst_32348);
var state_32382__$1 = state_32382;
if(inst_32350){
var statearr_32413_32444 = state_32382__$1;
(statearr_32413_32444[(1)] = (17));

} else {
var statearr_32414_32445 = state_32382__$1;
(statearr_32414_32445[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (16))){
var inst_32366 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32415_32446 = state_32382__$1;
(statearr_32415_32446[(2)] = inst_32366);

(statearr_32415_32446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (10))){
var inst_32337 = (state_32382[(8)]);
var inst_32335 = (state_32382[(9)]);
var inst_32342 = cljs.core._nth.call(null,inst_32335,inst_32337);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32382__$1,(13),out,inst_32342);
} else {
if((state_val_32383 === (18))){
var inst_32348 = (state_32382[(7)]);
var inst_32357 = cljs.core.first.call(null,inst_32348);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32382__$1,(20),out,inst_32357);
} else {
if((state_val_32383 === (8))){
var inst_32337 = (state_32382[(8)]);
var inst_32336 = (state_32382[(10)]);
var inst_32339 = (inst_32337 < inst_32336);
var inst_32340 = inst_32339;
var state_32382__$1 = state_32382;
if(cljs.core.truth_(inst_32340)){
var statearr_32416_32447 = state_32382__$1;
(statearr_32416_32447[(1)] = (10));

} else {
var statearr_32417_32448 = state_32382__$1;
(statearr_32417_32448[(1)] = (11));

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
});})(c__29924__auto__))
;
return ((function (switch__29859__auto__,c__29924__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29860__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29860__auto____0 = (function (){
var statearr_32421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32421[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29860__auto__);

(statearr_32421[(1)] = (1));

return statearr_32421;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29860__auto____1 = (function (state_32382){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_32382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e32422){if((e32422 instanceof Object)){
var ex__29863__auto__ = e32422;
var statearr_32423_32449 = state_32382;
(statearr_32423_32449[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32450 = state_32382;
state_32382 = G__32450;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29860__auto__ = function(state_32382){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29860__auto____1.call(this,state_32382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29860__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29860__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto__))
})();
var state__29926__auto__ = (function (){var statearr_32424 = f__29925__auto__.call(null);
(statearr_32424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto__);

return statearr_32424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto__))
);

return c__29924__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32451 = [];
var len__25923__auto___32454 = arguments.length;
var i__25924__auto___32455 = (0);
while(true){
if((i__25924__auto___32455 < len__25923__auto___32454)){
args32451.push((arguments[i__25924__auto___32455]));

var G__32456 = (i__25924__auto___32455 + (1));
i__25924__auto___32455 = G__32456;
continue;
} else {
}
break;
}

var G__32453 = args32451.length;
switch (G__32453) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32451.length)].join('')));

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
var args32458 = [];
var len__25923__auto___32461 = arguments.length;
var i__25924__auto___32462 = (0);
while(true){
if((i__25924__auto___32462 < len__25923__auto___32461)){
args32458.push((arguments[i__25924__auto___32462]));

var G__32463 = (i__25924__auto___32462 + (1));
i__25924__auto___32462 = G__32463;
continue;
} else {
}
break;
}

var G__32460 = args32458.length;
switch (G__32460) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32458.length)].join('')));

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
var args32465 = [];
var len__25923__auto___32516 = arguments.length;
var i__25924__auto___32517 = (0);
while(true){
if((i__25924__auto___32517 < len__25923__auto___32516)){
args32465.push((arguments[i__25924__auto___32517]));

var G__32518 = (i__25924__auto___32517 + (1));
i__25924__auto___32517 = G__32518;
continue;
} else {
}
break;
}

var G__32467 = args32465.length;
switch (G__32467) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32465.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29924__auto___32520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___32520,out){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___32520,out){
return (function (state_32491){
var state_val_32492 = (state_32491[(1)]);
if((state_val_32492 === (7))){
var inst_32486 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32493_32521 = state_32491__$1;
(statearr_32493_32521[(2)] = inst_32486);

(statearr_32493_32521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (1))){
var inst_32468 = null;
var state_32491__$1 = (function (){var statearr_32494 = state_32491;
(statearr_32494[(7)] = inst_32468);

return statearr_32494;
})();
var statearr_32495_32522 = state_32491__$1;
(statearr_32495_32522[(2)] = null);

(statearr_32495_32522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (4))){
var inst_32471 = (state_32491[(8)]);
var inst_32471__$1 = (state_32491[(2)]);
var inst_32472 = (inst_32471__$1 == null);
var inst_32473 = cljs.core.not.call(null,inst_32472);
var state_32491__$1 = (function (){var statearr_32496 = state_32491;
(statearr_32496[(8)] = inst_32471__$1);

return statearr_32496;
})();
if(inst_32473){
var statearr_32497_32523 = state_32491__$1;
(statearr_32497_32523[(1)] = (5));

} else {
var statearr_32498_32524 = state_32491__$1;
(statearr_32498_32524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (6))){
var state_32491__$1 = state_32491;
var statearr_32499_32525 = state_32491__$1;
(statearr_32499_32525[(2)] = null);

(statearr_32499_32525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (3))){
var inst_32488 = (state_32491[(2)]);
var inst_32489 = cljs.core.async.close_BANG_.call(null,out);
var state_32491__$1 = (function (){var statearr_32500 = state_32491;
(statearr_32500[(9)] = inst_32488);

return statearr_32500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32491__$1,inst_32489);
} else {
if((state_val_32492 === (2))){
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32491__$1,(4),ch);
} else {
if((state_val_32492 === (11))){
var inst_32471 = (state_32491[(8)]);
var inst_32480 = (state_32491[(2)]);
var inst_32468 = inst_32471;
var state_32491__$1 = (function (){var statearr_32501 = state_32491;
(statearr_32501[(7)] = inst_32468);

(statearr_32501[(10)] = inst_32480);

return statearr_32501;
})();
var statearr_32502_32526 = state_32491__$1;
(statearr_32502_32526[(2)] = null);

(statearr_32502_32526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (9))){
var inst_32471 = (state_32491[(8)]);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32491__$1,(11),out,inst_32471);
} else {
if((state_val_32492 === (5))){
var inst_32468 = (state_32491[(7)]);
var inst_32471 = (state_32491[(8)]);
var inst_32475 = cljs.core._EQ_.call(null,inst_32471,inst_32468);
var state_32491__$1 = state_32491;
if(inst_32475){
var statearr_32504_32527 = state_32491__$1;
(statearr_32504_32527[(1)] = (8));

} else {
var statearr_32505_32528 = state_32491__$1;
(statearr_32505_32528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (10))){
var inst_32483 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32506_32529 = state_32491__$1;
(statearr_32506_32529[(2)] = inst_32483);

(statearr_32506_32529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (8))){
var inst_32468 = (state_32491[(7)]);
var tmp32503 = inst_32468;
var inst_32468__$1 = tmp32503;
var state_32491__$1 = (function (){var statearr_32507 = state_32491;
(statearr_32507[(7)] = inst_32468__$1);

return statearr_32507;
})();
var statearr_32508_32530 = state_32491__$1;
(statearr_32508_32530[(2)] = null);

(statearr_32508_32530[(1)] = (2));


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
});})(c__29924__auto___32520,out))
;
return ((function (switch__29859__auto__,c__29924__auto___32520,out){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_32512 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32512[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_32512[(1)] = (1));

return statearr_32512;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_32491){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_32491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e32513){if((e32513 instanceof Object)){
var ex__29863__auto__ = e32513;
var statearr_32514_32531 = state_32491;
(statearr_32514_32531[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32532 = state_32491;
state_32491 = G__32532;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_32491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_32491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___32520,out))
})();
var state__29926__auto__ = (function (){var statearr_32515 = f__29925__auto__.call(null);
(statearr_32515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___32520);

return statearr_32515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___32520,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32533 = [];
var len__25923__auto___32603 = arguments.length;
var i__25924__auto___32604 = (0);
while(true){
if((i__25924__auto___32604 < len__25923__auto___32603)){
args32533.push((arguments[i__25924__auto___32604]));

var G__32605 = (i__25924__auto___32604 + (1));
i__25924__auto___32604 = G__32605;
continue;
} else {
}
break;
}

var G__32535 = args32533.length;
switch (G__32535) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32533.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29924__auto___32607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___32607,out){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___32607,out){
return (function (state_32573){
var state_val_32574 = (state_32573[(1)]);
if((state_val_32574 === (7))){
var inst_32569 = (state_32573[(2)]);
var state_32573__$1 = state_32573;
var statearr_32575_32608 = state_32573__$1;
(statearr_32575_32608[(2)] = inst_32569);

(statearr_32575_32608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (1))){
var inst_32536 = (new Array(n));
var inst_32537 = inst_32536;
var inst_32538 = (0);
var state_32573__$1 = (function (){var statearr_32576 = state_32573;
(statearr_32576[(7)] = inst_32537);

(statearr_32576[(8)] = inst_32538);

return statearr_32576;
})();
var statearr_32577_32609 = state_32573__$1;
(statearr_32577_32609[(2)] = null);

(statearr_32577_32609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (4))){
var inst_32541 = (state_32573[(9)]);
var inst_32541__$1 = (state_32573[(2)]);
var inst_32542 = (inst_32541__$1 == null);
var inst_32543 = cljs.core.not.call(null,inst_32542);
var state_32573__$1 = (function (){var statearr_32578 = state_32573;
(statearr_32578[(9)] = inst_32541__$1);

return statearr_32578;
})();
if(inst_32543){
var statearr_32579_32610 = state_32573__$1;
(statearr_32579_32610[(1)] = (5));

} else {
var statearr_32580_32611 = state_32573__$1;
(statearr_32580_32611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (15))){
var inst_32563 = (state_32573[(2)]);
var state_32573__$1 = state_32573;
var statearr_32581_32612 = state_32573__$1;
(statearr_32581_32612[(2)] = inst_32563);

(statearr_32581_32612[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (13))){
var state_32573__$1 = state_32573;
var statearr_32582_32613 = state_32573__$1;
(statearr_32582_32613[(2)] = null);

(statearr_32582_32613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (6))){
var inst_32538 = (state_32573[(8)]);
var inst_32559 = (inst_32538 > (0));
var state_32573__$1 = state_32573;
if(cljs.core.truth_(inst_32559)){
var statearr_32583_32614 = state_32573__$1;
(statearr_32583_32614[(1)] = (12));

} else {
var statearr_32584_32615 = state_32573__$1;
(statearr_32584_32615[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (3))){
var inst_32571 = (state_32573[(2)]);
var state_32573__$1 = state_32573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32573__$1,inst_32571);
} else {
if((state_val_32574 === (12))){
var inst_32537 = (state_32573[(7)]);
var inst_32561 = cljs.core.vec.call(null,inst_32537);
var state_32573__$1 = state_32573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32573__$1,(15),out,inst_32561);
} else {
if((state_val_32574 === (2))){
var state_32573__$1 = state_32573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32573__$1,(4),ch);
} else {
if((state_val_32574 === (11))){
var inst_32553 = (state_32573[(2)]);
var inst_32554 = (new Array(n));
var inst_32537 = inst_32554;
var inst_32538 = (0);
var state_32573__$1 = (function (){var statearr_32585 = state_32573;
(statearr_32585[(7)] = inst_32537);

(statearr_32585[(8)] = inst_32538);

(statearr_32585[(10)] = inst_32553);

return statearr_32585;
})();
var statearr_32586_32616 = state_32573__$1;
(statearr_32586_32616[(2)] = null);

(statearr_32586_32616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (9))){
var inst_32537 = (state_32573[(7)]);
var inst_32551 = cljs.core.vec.call(null,inst_32537);
var state_32573__$1 = state_32573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32573__$1,(11),out,inst_32551);
} else {
if((state_val_32574 === (5))){
var inst_32537 = (state_32573[(7)]);
var inst_32546 = (state_32573[(11)]);
var inst_32541 = (state_32573[(9)]);
var inst_32538 = (state_32573[(8)]);
var inst_32545 = (inst_32537[inst_32538] = inst_32541);
var inst_32546__$1 = (inst_32538 + (1));
var inst_32547 = (inst_32546__$1 < n);
var state_32573__$1 = (function (){var statearr_32587 = state_32573;
(statearr_32587[(12)] = inst_32545);

(statearr_32587[(11)] = inst_32546__$1);

return statearr_32587;
})();
if(cljs.core.truth_(inst_32547)){
var statearr_32588_32617 = state_32573__$1;
(statearr_32588_32617[(1)] = (8));

} else {
var statearr_32589_32618 = state_32573__$1;
(statearr_32589_32618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (14))){
var inst_32566 = (state_32573[(2)]);
var inst_32567 = cljs.core.async.close_BANG_.call(null,out);
var state_32573__$1 = (function (){var statearr_32591 = state_32573;
(statearr_32591[(13)] = inst_32566);

return statearr_32591;
})();
var statearr_32592_32619 = state_32573__$1;
(statearr_32592_32619[(2)] = inst_32567);

(statearr_32592_32619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (10))){
var inst_32557 = (state_32573[(2)]);
var state_32573__$1 = state_32573;
var statearr_32593_32620 = state_32573__$1;
(statearr_32593_32620[(2)] = inst_32557);

(statearr_32593_32620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32574 === (8))){
var inst_32537 = (state_32573[(7)]);
var inst_32546 = (state_32573[(11)]);
var tmp32590 = inst_32537;
var inst_32537__$1 = tmp32590;
var inst_32538 = inst_32546;
var state_32573__$1 = (function (){var statearr_32594 = state_32573;
(statearr_32594[(7)] = inst_32537__$1);

(statearr_32594[(8)] = inst_32538);

return statearr_32594;
})();
var statearr_32595_32621 = state_32573__$1;
(statearr_32595_32621[(2)] = null);

(statearr_32595_32621[(1)] = (2));


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
});})(c__29924__auto___32607,out))
;
return ((function (switch__29859__auto__,c__29924__auto___32607,out){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_32599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32599[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_32599[(1)] = (1));

return statearr_32599;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_32573){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_32573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e32600){if((e32600 instanceof Object)){
var ex__29863__auto__ = e32600;
var statearr_32601_32622 = state_32573;
(statearr_32601_32622[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32623 = state_32573;
state_32573 = G__32623;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_32573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_32573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___32607,out))
})();
var state__29926__auto__ = (function (){var statearr_32602 = f__29925__auto__.call(null);
(statearr_32602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___32607);

return statearr_32602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___32607,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32624 = [];
var len__25923__auto___32698 = arguments.length;
var i__25924__auto___32699 = (0);
while(true){
if((i__25924__auto___32699 < len__25923__auto___32698)){
args32624.push((arguments[i__25924__auto___32699]));

var G__32700 = (i__25924__auto___32699 + (1));
i__25924__auto___32699 = G__32700;
continue;
} else {
}
break;
}

var G__32626 = args32624.length;
switch (G__32626) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32624.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29924__auto___32702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___32702,out){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___32702,out){
return (function (state_32668){
var state_val_32669 = (state_32668[(1)]);
if((state_val_32669 === (7))){
var inst_32664 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
var statearr_32670_32703 = state_32668__$1;
(statearr_32670_32703[(2)] = inst_32664);

(statearr_32670_32703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (1))){
var inst_32627 = [];
var inst_32628 = inst_32627;
var inst_32629 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32668__$1 = (function (){var statearr_32671 = state_32668;
(statearr_32671[(7)] = inst_32629);

(statearr_32671[(8)] = inst_32628);

return statearr_32671;
})();
var statearr_32672_32704 = state_32668__$1;
(statearr_32672_32704[(2)] = null);

(statearr_32672_32704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (4))){
var inst_32632 = (state_32668[(9)]);
var inst_32632__$1 = (state_32668[(2)]);
var inst_32633 = (inst_32632__$1 == null);
var inst_32634 = cljs.core.not.call(null,inst_32633);
var state_32668__$1 = (function (){var statearr_32673 = state_32668;
(statearr_32673[(9)] = inst_32632__$1);

return statearr_32673;
})();
if(inst_32634){
var statearr_32674_32705 = state_32668__$1;
(statearr_32674_32705[(1)] = (5));

} else {
var statearr_32675_32706 = state_32668__$1;
(statearr_32675_32706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (15))){
var inst_32658 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
var statearr_32676_32707 = state_32668__$1;
(statearr_32676_32707[(2)] = inst_32658);

(statearr_32676_32707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (13))){
var state_32668__$1 = state_32668;
var statearr_32677_32708 = state_32668__$1;
(statearr_32677_32708[(2)] = null);

(statearr_32677_32708[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (6))){
var inst_32628 = (state_32668[(8)]);
var inst_32653 = inst_32628.length;
var inst_32654 = (inst_32653 > (0));
var state_32668__$1 = state_32668;
if(cljs.core.truth_(inst_32654)){
var statearr_32678_32709 = state_32668__$1;
(statearr_32678_32709[(1)] = (12));

} else {
var statearr_32679_32710 = state_32668__$1;
(statearr_32679_32710[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (3))){
var inst_32666 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32668__$1,inst_32666);
} else {
if((state_val_32669 === (12))){
var inst_32628 = (state_32668[(8)]);
var inst_32656 = cljs.core.vec.call(null,inst_32628);
var state_32668__$1 = state_32668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32668__$1,(15),out,inst_32656);
} else {
if((state_val_32669 === (2))){
var state_32668__$1 = state_32668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32668__$1,(4),ch);
} else {
if((state_val_32669 === (11))){
var inst_32632 = (state_32668[(9)]);
var inst_32636 = (state_32668[(10)]);
var inst_32646 = (state_32668[(2)]);
var inst_32647 = [];
var inst_32648 = inst_32647.push(inst_32632);
var inst_32628 = inst_32647;
var inst_32629 = inst_32636;
var state_32668__$1 = (function (){var statearr_32680 = state_32668;
(statearr_32680[(7)] = inst_32629);

(statearr_32680[(11)] = inst_32648);

(statearr_32680[(12)] = inst_32646);

(statearr_32680[(8)] = inst_32628);

return statearr_32680;
})();
var statearr_32681_32711 = state_32668__$1;
(statearr_32681_32711[(2)] = null);

(statearr_32681_32711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (9))){
var inst_32628 = (state_32668[(8)]);
var inst_32644 = cljs.core.vec.call(null,inst_32628);
var state_32668__$1 = state_32668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32668__$1,(11),out,inst_32644);
} else {
if((state_val_32669 === (5))){
var inst_32632 = (state_32668[(9)]);
var inst_32629 = (state_32668[(7)]);
var inst_32636 = (state_32668[(10)]);
var inst_32636__$1 = f.call(null,inst_32632);
var inst_32637 = cljs.core._EQ_.call(null,inst_32636__$1,inst_32629);
var inst_32638 = cljs.core.keyword_identical_QMARK_.call(null,inst_32629,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32639 = (inst_32637) || (inst_32638);
var state_32668__$1 = (function (){var statearr_32682 = state_32668;
(statearr_32682[(10)] = inst_32636__$1);

return statearr_32682;
})();
if(cljs.core.truth_(inst_32639)){
var statearr_32683_32712 = state_32668__$1;
(statearr_32683_32712[(1)] = (8));

} else {
var statearr_32684_32713 = state_32668__$1;
(statearr_32684_32713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (14))){
var inst_32661 = (state_32668[(2)]);
var inst_32662 = cljs.core.async.close_BANG_.call(null,out);
var state_32668__$1 = (function (){var statearr_32686 = state_32668;
(statearr_32686[(13)] = inst_32661);

return statearr_32686;
})();
var statearr_32687_32714 = state_32668__$1;
(statearr_32687_32714[(2)] = inst_32662);

(statearr_32687_32714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (10))){
var inst_32651 = (state_32668[(2)]);
var state_32668__$1 = state_32668;
var statearr_32688_32715 = state_32668__$1;
(statearr_32688_32715[(2)] = inst_32651);

(statearr_32688_32715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32669 === (8))){
var inst_32632 = (state_32668[(9)]);
var inst_32636 = (state_32668[(10)]);
var inst_32628 = (state_32668[(8)]);
var inst_32641 = inst_32628.push(inst_32632);
var tmp32685 = inst_32628;
var inst_32628__$1 = tmp32685;
var inst_32629 = inst_32636;
var state_32668__$1 = (function (){var statearr_32689 = state_32668;
(statearr_32689[(14)] = inst_32641);

(statearr_32689[(7)] = inst_32629);

(statearr_32689[(8)] = inst_32628__$1);

return statearr_32689;
})();
var statearr_32690_32716 = state_32668__$1;
(statearr_32690_32716[(2)] = null);

(statearr_32690_32716[(1)] = (2));


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
});})(c__29924__auto___32702,out))
;
return ((function (switch__29859__auto__,c__29924__auto___32702,out){
return (function() {
var cljs$core$async$state_machine__29860__auto__ = null;
var cljs$core$async$state_machine__29860__auto____0 = (function (){
var statearr_32694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32694[(0)] = cljs$core$async$state_machine__29860__auto__);

(statearr_32694[(1)] = (1));

return statearr_32694;
});
var cljs$core$async$state_machine__29860__auto____1 = (function (state_32668){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_32668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e32695){if((e32695 instanceof Object)){
var ex__29863__auto__ = e32695;
var statearr_32696_32717 = state_32668;
(statearr_32696_32717[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32718 = state_32668;
state_32668 = G__32718;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
cljs$core$async$state_machine__29860__auto__ = function(state_32668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29860__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29860__auto____1.call(this,state_32668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29860__auto____0;
cljs$core$async$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29860__auto____1;
return cljs$core$async$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___32702,out))
})();
var state__29926__auto__ = (function (){var statearr_32697 = f__29925__auto__.call(null);
(statearr_32697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___32702);

return statearr_32697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___32702,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1523262628057