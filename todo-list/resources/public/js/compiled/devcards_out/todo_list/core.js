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
var len__25923__auto___28385 = arguments.length;
var i__25924__auto___28386 = (0);
while(true){
if((i__25924__auto___28386 < len__25923__auto___28385)){
args__25930__auto__.push((arguments[i__25924__auto___28386]));

var G__28387 = (i__25924__auto___28386 + (1));
i__25924__auto___28386 = G__28387;
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

todo_list.core.dispatch_BANG_.cljs$lang$applyTo = (function (seq28382){
var G__28383 = cljs.core.first.call(null,seq28382);
var seq28382__$1 = cljs.core.next.call(null,seq28382);
var G__28384 = cljs.core.first.call(null,seq28382__$1);
var seq28382__$2 = cljs.core.next.call(null,seq28382__$1);
return todo_list.core.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28383,G__28384,seq28382__$2);
});

devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todo_list.core","todo_list.core",613263702),new cljs.core.Keyword(null,"MyTodoList","MyTodoList",333377875)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"MyTodoList",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"This is your current list",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (store){
return cljs.core.print.call(null,store);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Task1","Task2"], null),new cljs.core.Keyword(null,"list_name","list_name",2059045587),"ListA"], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
todo_list.core.main = (function todo_list$core$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return ReactDOM.render(React.createElement("div",null,"This is not working"),node);
} else {
return null;
}
});
todo_list.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1523261732225