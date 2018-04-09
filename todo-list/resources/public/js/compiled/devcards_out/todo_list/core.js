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
var len__25923__auto___28974 = arguments.length;
var i__25924__auto___28975 = (0);
while(true){
if((i__25924__auto___28975 < len__25923__auto___28974)){
args__25930__auto__.push((arguments[i__25924__auto___28975]));

var G__28976 = (i__25924__auto___28975 + (1));
i__25924__auto___28975 = G__28976;
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

todo_list.core.dispatch_BANG_.cljs$lang$applyTo = (function (seq28971){
var G__28972 = cljs.core.first.call(null,seq28971);
var seq28971__$1 = cljs.core.next.call(null,seq28971);
var G__28973 = cljs.core.first.call(null,seq28971__$1);
var seq28971__$2 = cljs.core.next.call(null,seq28971__$1);
return todo_list.core.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28972,G__28973,seq28971__$2);
});

todo_list.core.compare_complex_tasks = (function todo_list$core$compare_complex_tasks(model,target){
if(cljs.core._EQ_.call(null,model,target)){
return true;
} else {
return false;
}
});
todo_list.core.x = (13);
/**
 * This is a complex task
 */
todo_list.core.ui_complextask = (function todo_list$core$ui_complextask(store,complex_task){
return React.createElement("li",({"key": new cljs.core.Keyword(null,"task-id","task-id",-1045480126).cljs$core$IFn$_invoke$arity$1(complex_task)}),React.createElement("div",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.ui_ctask_body], null))}),React.createElement("h1",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo_list.core.ui_ctask_title], null))}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(complex_task))),React.createElement("span",null,"Progress : ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(complex_task)),"%"),React.createElement("span",null,"validated :",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"validated","validated",1447295418).cljs$core$IFn$_invoke$arity$1(complex_task))),(function (){var attrs28978 = new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(complex_task);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28978))?sablono.interpreter.attributes.call(null,attrs28978):null),((cljs.core.map_QMARK_.call(null,attrs28978))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28978)], null)));
})()));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todo_list.core","todo_list.core",613263702),new cljs.core.Keyword(null,"MyComplexToDoList","MyComplexToDoList",53286614)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"MyComplexToDoList",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"This is a list of more detailed tasks",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (store){
cljs.core.print.call(null,store);

var attrs28979 = cljs.core.map.call(null,cljs.core.partial.call(null,todo_list.core.ui_complextask,store),new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)));
return cljs.core.apply.call(null,React.createElement,"ul",((cljs.core.map_QMARK_.call(null,attrs28979))?sablono.interpreter.attributes.call(null,attrs28979):null),((cljs.core.map_QMARK_.call(null,attrs28979))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28979)], null)));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"ComplexTask1",new cljs.core.Keyword(null,"progress","progress",244323547),(0),new cljs.core.Keyword(null,"deadline","deadline",628964572),null,new cljs.core.Keyword(null,"validated","validated",1447295418),false,new cljs.core.Keyword(null,"details","details",1956795411),"This is an empty task with many fields",new cljs.core.Keyword(null,"task-id","task-id",-1045480126),(0)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"ComplexTask2",new cljs.core.Keyword(null,"progress","progress",244323547),(50),new cljs.core.Keyword(null,"deadline","deadline",628964572),"12/03/2018",new cljs.core.Keyword(null,"validated","validated",1447295418),false,new cljs.core.Keyword(null,"details","details",1956795411),"This is a more advanced complex task",new cljs.core.Keyword(null,"task-id","task-id",-1045480126),(1)], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
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

//# sourceMappingURL=core.js.map?rel=1523264143071