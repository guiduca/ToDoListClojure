// Compiled by ClojureScript 1.9.229 {}
goog.provide('todo_list.core');
goog.require('cljs.core');
goog.require('todo_list.ui_tasks');
goog.require('devcards.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * Dispatch action to store
 */
todo_list.core.dispatch_BANG_ = (function todo_list$core$dispatch_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___28359 = arguments.length;
var i__25924__auto___28360 = (0);
while(true){
if((i__25924__auto___28360 < len__25923__auto___28359)){
args__25930__auto__.push((arguments[i__25924__auto___28360]));

var G__28361 = (i__25924__auto___28360 + (1));
i__25924__auto___28360 = G__28361;
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

todo_list.core.dispatch_BANG_.cljs$lang$applyTo = (function (seq28356){
var G__28357 = cljs.core.first.call(null,seq28356);
var seq28356__$1 = cljs.core.next.call(null,seq28356);
var G__28358 = cljs.core.first.call(null,seq28356__$1);
var seq28356__$2 = cljs.core.next.call(null,seq28356__$1);
return todo_list.core.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28357,G__28358,seq28356__$2);
});

devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todo_list.core","todo_list.core",613263702),new cljs.core.Keyword(null,"MyTodoList","MyTodoList",333377875)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"MyTodoList",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Ez list",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (store){
return todo_list.ui_tasks.main_tasks.call(null,store);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Task1","Task2"], null),new cljs.core.Keyword(null,"list_name","list_name",2059045587),"ListA"], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todo_list.core","todo_list.core",613263702),new cljs.core.Keyword(null,"MyComplexToDoList","MyComplexToDoList",53286614)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"MyComplexToDoList",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"This is a list of more detailed tasks",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (store){
cljs.core.print.call(null,store);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"ComplexTask1",new cljs.core.Keyword(null,"progress","progress",244323547),(0),new cljs.core.Keyword(null,"deadline","deadline",628964572),null,new cljs.core.Keyword(null,"validated","validated",1447295418),false,new cljs.core.Keyword(null,"details","details",1956795411),"This is an empty task with many fields"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"ComplexTask2",new cljs.core.Keyword(null,"progress","progress",244323547),(50),new cljs.core.Keyword(null,"deadline","deadline",628964572),"12/03/2018",new cljs.core.Keyword(null,"validated","validated",1447295418),false,new cljs.core.Keyword(null,"details","details",1956795411),"This is a more advanced complex task"], null)], null)], null);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
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

//# sourceMappingURL=core.js.map?rel=1523264221065