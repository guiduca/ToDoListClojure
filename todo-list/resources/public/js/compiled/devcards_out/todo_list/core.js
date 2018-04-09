// Compiled by ClojureScript 1.9.229 {}
goog.provide('todo_list.core');
goog.require('cljs.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * Dispatch action to store
 */
todo_list.core.dispatch_BANG_ = (function todo_list$core$dispatch_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32119 = arguments.length;
var i__25924__auto___32120 = (0);
while(true){
if((i__25924__auto___32120 < len__25923__auto___32119)){
args__25930__auto__.push((arguments[i__25924__auto___32120]));

var G__32121 = (i__25924__auto___32120 + (1));
i__25924__auto___32120 = G__32121;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((2) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((2)),(0),null)):null);
return todo_list.core.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25931__auto__);
});

todo_list.core.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (store,action,args){
cljs.core.apply.call(null,cljs.core.swap_BANG_,store,action,args);

return null;
});

todo_list.core.dispatch_BANG_.cljs$lang$maxFixedArity = (2);

todo_list.core.dispatch_BANG_.cljs$lang$applyTo = (function (seq32116){
var G__32117 = cljs.core.first.call(null,seq32116);
var seq32116__$1 = cljs.core.next.call(null,seq32116);
var G__32118 = cljs.core.first.call(null,seq32116__$1);
var seq32116__$2 = cljs.core.next.call(null,seq32116__$1);
return todo_list.core.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32117,G__32118,seq32116__$2);
});

todo_list.core.main = (function todo_list$core$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return ReactDOM.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
todo_list.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1523250221909