// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24848__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24848__auto__){
return or__24848__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24848__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37428_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37428_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37433 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37434 = null;
var count__37435 = (0);
var i__37436 = (0);
while(true){
if((i__37436 < count__37435)){
var n = cljs.core._nth.call(null,chunk__37434,i__37436);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37437 = seq__37433;
var G__37438 = chunk__37434;
var G__37439 = count__37435;
var G__37440 = (i__37436 + (1));
seq__37433 = G__37437;
chunk__37434 = G__37438;
count__37435 = G__37439;
i__37436 = G__37440;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37433);
if(temp__4657__auto__){
var seq__37433__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37433__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__37433__$1);
var G__37441 = cljs.core.chunk_rest.call(null,seq__37433__$1);
var G__37442 = c__25659__auto__;
var G__37443 = cljs.core.count.call(null,c__25659__auto__);
var G__37444 = (0);
seq__37433 = G__37441;
chunk__37434 = G__37442;
count__37435 = G__37443;
i__37436 = G__37444;
continue;
} else {
var n = cljs.core.first.call(null,seq__37433__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37445 = cljs.core.next.call(null,seq__37433__$1);
var G__37446 = null;
var G__37447 = (0);
var G__37448 = (0);
seq__37433 = G__37445;
chunk__37434 = G__37446;
count__37435 = G__37447;
i__37436 = G__37448;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37499_37510 = cljs.core.seq.call(null,deps);
var chunk__37500_37511 = null;
var count__37501_37512 = (0);
var i__37502_37513 = (0);
while(true){
if((i__37502_37513 < count__37501_37512)){
var dep_37514 = cljs.core._nth.call(null,chunk__37500_37511,i__37502_37513);
topo_sort_helper_STAR_.call(null,dep_37514,(depth + (1)),state);

var G__37515 = seq__37499_37510;
var G__37516 = chunk__37500_37511;
var G__37517 = count__37501_37512;
var G__37518 = (i__37502_37513 + (1));
seq__37499_37510 = G__37515;
chunk__37500_37511 = G__37516;
count__37501_37512 = G__37517;
i__37502_37513 = G__37518;
continue;
} else {
var temp__4657__auto___37519 = cljs.core.seq.call(null,seq__37499_37510);
if(temp__4657__auto___37519){
var seq__37499_37520__$1 = temp__4657__auto___37519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37499_37520__$1)){
var c__25659__auto___37521 = cljs.core.chunk_first.call(null,seq__37499_37520__$1);
var G__37522 = cljs.core.chunk_rest.call(null,seq__37499_37520__$1);
var G__37523 = c__25659__auto___37521;
var G__37524 = cljs.core.count.call(null,c__25659__auto___37521);
var G__37525 = (0);
seq__37499_37510 = G__37522;
chunk__37500_37511 = G__37523;
count__37501_37512 = G__37524;
i__37502_37513 = G__37525;
continue;
} else {
var dep_37526 = cljs.core.first.call(null,seq__37499_37520__$1);
topo_sort_helper_STAR_.call(null,dep_37526,(depth + (1)),state);

var G__37527 = cljs.core.next.call(null,seq__37499_37520__$1);
var G__37528 = null;
var G__37529 = (0);
var G__37530 = (0);
seq__37499_37510 = G__37527;
chunk__37500_37511 = G__37528;
count__37501_37512 = G__37529;
i__37502_37513 = G__37530;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37503){
var vec__37507 = p__37503;
var seq__37508 = cljs.core.seq.call(null,vec__37507);
var first__37509 = cljs.core.first.call(null,seq__37508);
var seq__37508__$1 = cljs.core.next.call(null,seq__37508);
var x = first__37509;
var xs = seq__37508__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37507,seq__37508,first__37509,seq__37508__$1,x,xs,get_deps__$1){
return (function (p1__37449_SHARP_){
return clojure.set.difference.call(null,p1__37449_SHARP_,x);
});})(vec__37507,seq__37508,first__37509,seq__37508__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37543 = cljs.core.seq.call(null,provides);
var chunk__37544 = null;
var count__37545 = (0);
var i__37546 = (0);
while(true){
if((i__37546 < count__37545)){
var prov = cljs.core._nth.call(null,chunk__37544,i__37546);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37547_37555 = cljs.core.seq.call(null,requires);
var chunk__37548_37556 = null;
var count__37549_37557 = (0);
var i__37550_37558 = (0);
while(true){
if((i__37550_37558 < count__37549_37557)){
var req_37559 = cljs.core._nth.call(null,chunk__37548_37556,i__37550_37558);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37559,prov);

var G__37560 = seq__37547_37555;
var G__37561 = chunk__37548_37556;
var G__37562 = count__37549_37557;
var G__37563 = (i__37550_37558 + (1));
seq__37547_37555 = G__37560;
chunk__37548_37556 = G__37561;
count__37549_37557 = G__37562;
i__37550_37558 = G__37563;
continue;
} else {
var temp__4657__auto___37564 = cljs.core.seq.call(null,seq__37547_37555);
if(temp__4657__auto___37564){
var seq__37547_37565__$1 = temp__4657__auto___37564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37547_37565__$1)){
var c__25659__auto___37566 = cljs.core.chunk_first.call(null,seq__37547_37565__$1);
var G__37567 = cljs.core.chunk_rest.call(null,seq__37547_37565__$1);
var G__37568 = c__25659__auto___37566;
var G__37569 = cljs.core.count.call(null,c__25659__auto___37566);
var G__37570 = (0);
seq__37547_37555 = G__37567;
chunk__37548_37556 = G__37568;
count__37549_37557 = G__37569;
i__37550_37558 = G__37570;
continue;
} else {
var req_37571 = cljs.core.first.call(null,seq__37547_37565__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37571,prov);

var G__37572 = cljs.core.next.call(null,seq__37547_37565__$1);
var G__37573 = null;
var G__37574 = (0);
var G__37575 = (0);
seq__37547_37555 = G__37572;
chunk__37548_37556 = G__37573;
count__37549_37557 = G__37574;
i__37550_37558 = G__37575;
continue;
}
} else {
}
}
break;
}

var G__37576 = seq__37543;
var G__37577 = chunk__37544;
var G__37578 = count__37545;
var G__37579 = (i__37546 + (1));
seq__37543 = G__37576;
chunk__37544 = G__37577;
count__37545 = G__37578;
i__37546 = G__37579;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37543);
if(temp__4657__auto__){
var seq__37543__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37543__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__37543__$1);
var G__37580 = cljs.core.chunk_rest.call(null,seq__37543__$1);
var G__37581 = c__25659__auto__;
var G__37582 = cljs.core.count.call(null,c__25659__auto__);
var G__37583 = (0);
seq__37543 = G__37580;
chunk__37544 = G__37581;
count__37545 = G__37582;
i__37546 = G__37583;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37543__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37551_37584 = cljs.core.seq.call(null,requires);
var chunk__37552_37585 = null;
var count__37553_37586 = (0);
var i__37554_37587 = (0);
while(true){
if((i__37554_37587 < count__37553_37586)){
var req_37588 = cljs.core._nth.call(null,chunk__37552_37585,i__37554_37587);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37588,prov);

var G__37589 = seq__37551_37584;
var G__37590 = chunk__37552_37585;
var G__37591 = count__37553_37586;
var G__37592 = (i__37554_37587 + (1));
seq__37551_37584 = G__37589;
chunk__37552_37585 = G__37590;
count__37553_37586 = G__37591;
i__37554_37587 = G__37592;
continue;
} else {
var temp__4657__auto___37593__$1 = cljs.core.seq.call(null,seq__37551_37584);
if(temp__4657__auto___37593__$1){
var seq__37551_37594__$1 = temp__4657__auto___37593__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37551_37594__$1)){
var c__25659__auto___37595 = cljs.core.chunk_first.call(null,seq__37551_37594__$1);
var G__37596 = cljs.core.chunk_rest.call(null,seq__37551_37594__$1);
var G__37597 = c__25659__auto___37595;
var G__37598 = cljs.core.count.call(null,c__25659__auto___37595);
var G__37599 = (0);
seq__37551_37584 = G__37596;
chunk__37552_37585 = G__37597;
count__37553_37586 = G__37598;
i__37554_37587 = G__37599;
continue;
} else {
var req_37600 = cljs.core.first.call(null,seq__37551_37594__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37600,prov);

var G__37601 = cljs.core.next.call(null,seq__37551_37594__$1);
var G__37602 = null;
var G__37603 = (0);
var G__37604 = (0);
seq__37551_37584 = G__37601;
chunk__37552_37585 = G__37602;
count__37553_37586 = G__37603;
i__37554_37587 = G__37604;
continue;
}
} else {
}
}
break;
}

var G__37605 = cljs.core.next.call(null,seq__37543__$1);
var G__37606 = null;
var G__37607 = (0);
var G__37608 = (0);
seq__37543 = G__37605;
chunk__37544 = G__37606;
count__37545 = G__37607;
i__37546 = G__37608;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37613_37617 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37614_37618 = null;
var count__37615_37619 = (0);
var i__37616_37620 = (0);
while(true){
if((i__37616_37620 < count__37615_37619)){
var ns_37621 = cljs.core._nth.call(null,chunk__37614_37618,i__37616_37620);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37621);

var G__37622 = seq__37613_37617;
var G__37623 = chunk__37614_37618;
var G__37624 = count__37615_37619;
var G__37625 = (i__37616_37620 + (1));
seq__37613_37617 = G__37622;
chunk__37614_37618 = G__37623;
count__37615_37619 = G__37624;
i__37616_37620 = G__37625;
continue;
} else {
var temp__4657__auto___37626 = cljs.core.seq.call(null,seq__37613_37617);
if(temp__4657__auto___37626){
var seq__37613_37627__$1 = temp__4657__auto___37626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37613_37627__$1)){
var c__25659__auto___37628 = cljs.core.chunk_first.call(null,seq__37613_37627__$1);
var G__37629 = cljs.core.chunk_rest.call(null,seq__37613_37627__$1);
var G__37630 = c__25659__auto___37628;
var G__37631 = cljs.core.count.call(null,c__25659__auto___37628);
var G__37632 = (0);
seq__37613_37617 = G__37629;
chunk__37614_37618 = G__37630;
count__37615_37619 = G__37631;
i__37616_37620 = G__37632;
continue;
} else {
var ns_37633 = cljs.core.first.call(null,seq__37613_37627__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37633);

var G__37634 = cljs.core.next.call(null,seq__37613_37627__$1);
var G__37635 = null;
var G__37636 = (0);
var G__37637 = (0);
seq__37613_37617 = G__37634;
chunk__37614_37618 = G__37635;
count__37615_37619 = G__37636;
i__37616_37620 = G__37637;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24848__auto__ = goog.require__;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37638__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37639__i = 0, G__37639__a = new Array(arguments.length -  0);
while (G__37639__i < G__37639__a.length) {G__37639__a[G__37639__i] = arguments[G__37639__i + 0]; ++G__37639__i;}
  args = new cljs.core.IndexedSeq(G__37639__a,0);
} 
return G__37638__delegate.call(this,args);};
G__37638.cljs$lang$maxFixedArity = 0;
G__37638.cljs$lang$applyTo = (function (arglist__37640){
var args = cljs.core.seq(arglist__37640);
return G__37638__delegate(args);
});
G__37638.cljs$core$IFn$_invoke$arity$variadic = G__37638__delegate;
return G__37638;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37641 = cljs.core._EQ_;
var expr__37642 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37641.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37642))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37641,expr__37642){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37641,expr__37642))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37641,expr__37642){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37644){if((e37644 instanceof Error)){
var e = e37644;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37644;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37641,expr__37642))
} else {
if(cljs.core.truth_(pred__37641.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37642))){
return ((function (pred__37641,expr__37642){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__37641,expr__37642){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__37641,expr__37642))
);

return deferred.addErrback(((function (deferred,pred__37641,expr__37642){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__37641,expr__37642))
);
});
;})(pred__37641,expr__37642))
} else {
if(cljs.core.truth_(pred__37641.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37642))){
return ((function (pred__37641,expr__37642){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37645){if((e37645 instanceof Error)){
var e = e37645;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37645;

}
}})());
});
;})(pred__37641,expr__37642))
} else {
return ((function (pred__37641,expr__37642){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37641,expr__37642))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37646,callback){
var map__37649 = p__37646;
var map__37649__$1 = ((((!((map__37649 == null)))?((((map__37649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37649):map__37649);
var file_msg = map__37649__$1;
var request_url = cljs.core.get.call(null,map__37649__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37649,map__37649__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37649,map__37649__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33185__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto__){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto__){
return (function (state_37673){
var state_val_37674 = (state_37673[(1)]);
if((state_val_37674 === (7))){
var inst_37669 = (state_37673[(2)]);
var state_37673__$1 = state_37673;
var statearr_37675_37695 = state_37673__$1;
(statearr_37675_37695[(2)] = inst_37669);

(statearr_37675_37695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37674 === (1))){
var state_37673__$1 = state_37673;
var statearr_37676_37696 = state_37673__$1;
(statearr_37676_37696[(2)] = null);

(statearr_37676_37696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37674 === (4))){
var inst_37653 = (state_37673[(7)]);
var inst_37653__$1 = (state_37673[(2)]);
var state_37673__$1 = (function (){var statearr_37677 = state_37673;
(statearr_37677[(7)] = inst_37653__$1);

return statearr_37677;
})();
if(cljs.core.truth_(inst_37653__$1)){
var statearr_37678_37697 = state_37673__$1;
(statearr_37678_37697[(1)] = (5));

} else {
var statearr_37679_37698 = state_37673__$1;
(statearr_37679_37698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37674 === (6))){
var state_37673__$1 = state_37673;
var statearr_37680_37699 = state_37673__$1;
(statearr_37680_37699[(2)] = null);

(statearr_37680_37699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37674 === (3))){
var inst_37671 = (state_37673[(2)]);
var state_37673__$1 = state_37673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37673__$1,inst_37671);
} else {
if((state_val_37674 === (2))){
var state_37673__$1 = state_37673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37673__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37674 === (11))){
var inst_37665 = (state_37673[(2)]);
var state_37673__$1 = (function (){var statearr_37681 = state_37673;
(statearr_37681[(8)] = inst_37665);

return statearr_37681;
})();
var statearr_37682_37700 = state_37673__$1;
(statearr_37682_37700[(2)] = null);

(statearr_37682_37700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37674 === (9))){
var inst_37659 = (state_37673[(9)]);
var inst_37657 = (state_37673[(10)]);
var inst_37661 = inst_37659.call(null,inst_37657);
var state_37673__$1 = state_37673;
var statearr_37683_37701 = state_37673__$1;
(statearr_37683_37701[(2)] = inst_37661);

(statearr_37683_37701[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37674 === (5))){
var inst_37653 = (state_37673[(7)]);
var inst_37655 = figwheel.client.file_reloading.blocking_load.call(null,inst_37653);
var state_37673__$1 = state_37673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37673__$1,(8),inst_37655);
} else {
if((state_val_37674 === (10))){
var inst_37657 = (state_37673[(10)]);
var inst_37663 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37657);
var state_37673__$1 = state_37673;
var statearr_37684_37702 = state_37673__$1;
(statearr_37684_37702[(2)] = inst_37663);

(statearr_37684_37702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37674 === (8))){
var inst_37659 = (state_37673[(9)]);
var inst_37653 = (state_37673[(7)]);
var inst_37657 = (state_37673[(2)]);
var inst_37658 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37659__$1 = cljs.core.get.call(null,inst_37658,inst_37653);
var state_37673__$1 = (function (){var statearr_37685 = state_37673;
(statearr_37685[(9)] = inst_37659__$1);

(statearr_37685[(10)] = inst_37657);

return statearr_37685;
})();
if(cljs.core.truth_(inst_37659__$1)){
var statearr_37686_37703 = state_37673__$1;
(statearr_37686_37703[(1)] = (9));

} else {
var statearr_37687_37704 = state_37673__$1;
(statearr_37687_37704[(1)] = (10));

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
});})(c__33185__auto__))
;
return ((function (switch__33073__auto__,c__33185__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33074__auto__ = null;
var figwheel$client$file_reloading$state_machine__33074__auto____0 = (function (){
var statearr_37691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37691[(0)] = figwheel$client$file_reloading$state_machine__33074__auto__);

(statearr_37691[(1)] = (1));

return statearr_37691;
});
var figwheel$client$file_reloading$state_machine__33074__auto____1 = (function (state_37673){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_37673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e37692){if((e37692 instanceof Object)){
var ex__33077__auto__ = e37692;
var statearr_37693_37705 = state_37673;
(statearr_37693_37705[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37706 = state_37673;
state_37673 = G__37706;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33074__auto__ = function(state_37673){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33074__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33074__auto____1.call(this,state_37673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33074__auto____0;
figwheel$client$file_reloading$state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33074__auto____1;
return figwheel$client$file_reloading$state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto__))
})();
var state__33187__auto__ = (function (){var statearr_37694 = f__33186__auto__.call(null);
(statearr_37694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto__);

return statearr_37694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto__))
);

return c__33185__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37707,callback){
var map__37710 = p__37707;
var map__37710__$1 = ((((!((map__37710 == null)))?((((map__37710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37710):map__37710);
var file_msg = map__37710__$1;
var namespace = cljs.core.get.call(null,map__37710__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37710,map__37710__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37710,map__37710__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37712){
var map__37715 = p__37712;
var map__37715__$1 = ((((!((map__37715 == null)))?((((map__37715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37715):map__37715);
var file_msg = map__37715__$1;
var namespace = cljs.core.get.call(null,map__37715__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37717){
var map__37720 = p__37717;
var map__37720__$1 = ((((!((map__37720 == null)))?((((map__37720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37720):map__37720);
var file_msg = map__37720__$1;
var namespace = cljs.core.get.call(null,map__37720__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24836__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__24836__auto__){
var or__24848__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
var or__24848__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24848__auto____$1)){
return or__24848__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24836__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37722,callback){
var map__37725 = p__37722;
var map__37725__$1 = ((((!((map__37725 == null)))?((((map__37725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37725):map__37725);
var file_msg = map__37725__$1;
var request_url = cljs.core.get.call(null,map__37725__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37725__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33185__auto___37829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___37829,out){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___37829,out){
return (function (state_37811){
var state_val_37812 = (state_37811[(1)]);
if((state_val_37812 === (1))){
var inst_37785 = cljs.core.seq.call(null,files);
var inst_37786 = cljs.core.first.call(null,inst_37785);
var inst_37787 = cljs.core.next.call(null,inst_37785);
var inst_37788 = files;
var state_37811__$1 = (function (){var statearr_37813 = state_37811;
(statearr_37813[(7)] = inst_37786);

(statearr_37813[(8)] = inst_37788);

(statearr_37813[(9)] = inst_37787);

return statearr_37813;
})();
var statearr_37814_37830 = state_37811__$1;
(statearr_37814_37830[(2)] = null);

(statearr_37814_37830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (2))){
var inst_37788 = (state_37811[(8)]);
var inst_37794 = (state_37811[(10)]);
var inst_37793 = cljs.core.seq.call(null,inst_37788);
var inst_37794__$1 = cljs.core.first.call(null,inst_37793);
var inst_37795 = cljs.core.next.call(null,inst_37793);
var inst_37796 = (inst_37794__$1 == null);
var inst_37797 = cljs.core.not.call(null,inst_37796);
var state_37811__$1 = (function (){var statearr_37815 = state_37811;
(statearr_37815[(11)] = inst_37795);

(statearr_37815[(10)] = inst_37794__$1);

return statearr_37815;
})();
if(inst_37797){
var statearr_37816_37831 = state_37811__$1;
(statearr_37816_37831[(1)] = (4));

} else {
var statearr_37817_37832 = state_37811__$1;
(statearr_37817_37832[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (3))){
var inst_37809 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37811__$1,inst_37809);
} else {
if((state_val_37812 === (4))){
var inst_37794 = (state_37811[(10)]);
var inst_37799 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37794);
var state_37811__$1 = state_37811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37811__$1,(7),inst_37799);
} else {
if((state_val_37812 === (5))){
var inst_37805 = cljs.core.async.close_BANG_.call(null,out);
var state_37811__$1 = state_37811;
var statearr_37818_37833 = state_37811__$1;
(statearr_37818_37833[(2)] = inst_37805);

(statearr_37818_37833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (6))){
var inst_37807 = (state_37811[(2)]);
var state_37811__$1 = state_37811;
var statearr_37819_37834 = state_37811__$1;
(statearr_37819_37834[(2)] = inst_37807);

(statearr_37819_37834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37812 === (7))){
var inst_37795 = (state_37811[(11)]);
var inst_37801 = (state_37811[(2)]);
var inst_37802 = cljs.core.async.put_BANG_.call(null,out,inst_37801);
var inst_37788 = inst_37795;
var state_37811__$1 = (function (){var statearr_37820 = state_37811;
(statearr_37820[(12)] = inst_37802);

(statearr_37820[(8)] = inst_37788);

return statearr_37820;
})();
var statearr_37821_37835 = state_37811__$1;
(statearr_37821_37835[(2)] = null);

(statearr_37821_37835[(1)] = (2));


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
});})(c__33185__auto___37829,out))
;
return ((function (switch__33073__auto__,c__33185__auto___37829,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33074__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33074__auto____0 = (function (){
var statearr_37825 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37825[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33074__auto__);

(statearr_37825[(1)] = (1));

return statearr_37825;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33074__auto____1 = (function (state_37811){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_37811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e37826){if((e37826 instanceof Object)){
var ex__33077__auto__ = e37826;
var statearr_37827_37836 = state_37811;
(statearr_37827_37836[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37837 = state_37811;
state_37811 = G__37837;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33074__auto__ = function(state_37811){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33074__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33074__auto____1.call(this,state_37811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33074__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33074__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___37829,out))
})();
var state__33187__auto__ = (function (){var statearr_37828 = f__33186__auto__.call(null);
(statearr_37828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___37829);

return statearr_37828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___37829,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37838,opts){
var map__37842 = p__37838;
var map__37842__$1 = ((((!((map__37842 == null)))?((((map__37842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37842):map__37842);
var eval_body__$1 = cljs.core.get.call(null,map__37842__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37842__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24836__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24836__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24836__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37844){var e = e37844;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37845_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37845_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37854){
var vec__37855 = p__37854;
var k = cljs.core.nth.call(null,vec__37855,(0),null);
var v = cljs.core.nth.call(null,vec__37855,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37858){
var vec__37859 = p__37858;
var k = cljs.core.nth.call(null,vec__37859,(0),null);
var v = cljs.core.nth.call(null,vec__37859,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37865,p__37866){
var map__38113 = p__37865;
var map__38113__$1 = ((((!((map__38113 == null)))?((((map__38113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38113):map__38113);
var opts = map__38113__$1;
var before_jsload = cljs.core.get.call(null,map__38113__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38113__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38113__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38114 = p__37866;
var map__38114__$1 = ((((!((map__38114 == null)))?((((map__38114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38114):map__38114);
var msg = map__38114__$1;
var files = cljs.core.get.call(null,map__38114__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38114__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38114__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33185__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38267){
var state_val_38268 = (state_38267[(1)]);
if((state_val_38268 === (7))){
var inst_38128 = (state_38267[(7)]);
var inst_38130 = (state_38267[(8)]);
var inst_38131 = (state_38267[(9)]);
var inst_38129 = (state_38267[(10)]);
var inst_38136 = cljs.core._nth.call(null,inst_38129,inst_38131);
var inst_38137 = figwheel.client.file_reloading.eval_body.call(null,inst_38136,opts);
var inst_38138 = (inst_38131 + (1));
var tmp38269 = inst_38128;
var tmp38270 = inst_38130;
var tmp38271 = inst_38129;
var inst_38128__$1 = tmp38269;
var inst_38129__$1 = tmp38271;
var inst_38130__$1 = tmp38270;
var inst_38131__$1 = inst_38138;
var state_38267__$1 = (function (){var statearr_38272 = state_38267;
(statearr_38272[(7)] = inst_38128__$1);

(statearr_38272[(8)] = inst_38130__$1);

(statearr_38272[(9)] = inst_38131__$1);

(statearr_38272[(10)] = inst_38129__$1);

(statearr_38272[(11)] = inst_38137);

return statearr_38272;
})();
var statearr_38273_38359 = state_38267__$1;
(statearr_38273_38359[(2)] = null);

(statearr_38273_38359[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (20))){
var inst_38171 = (state_38267[(12)]);
var inst_38179 = figwheel.client.file_reloading.sort_files.call(null,inst_38171);
var state_38267__$1 = state_38267;
var statearr_38274_38360 = state_38267__$1;
(statearr_38274_38360[(2)] = inst_38179);

(statearr_38274_38360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (27))){
var state_38267__$1 = state_38267;
var statearr_38275_38361 = state_38267__$1;
(statearr_38275_38361[(2)] = null);

(statearr_38275_38361[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (1))){
var inst_38120 = (state_38267[(13)]);
var inst_38117 = before_jsload.call(null,files);
var inst_38118 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38119 = (function (){return ((function (inst_38120,inst_38117,inst_38118,state_val_38268,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37862_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37862_SHARP_);
});
;})(inst_38120,inst_38117,inst_38118,state_val_38268,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38120__$1 = cljs.core.filter.call(null,inst_38119,files);
var inst_38121 = cljs.core.not_empty.call(null,inst_38120__$1);
var state_38267__$1 = (function (){var statearr_38276 = state_38267;
(statearr_38276[(14)] = inst_38117);

(statearr_38276[(13)] = inst_38120__$1);

(statearr_38276[(15)] = inst_38118);

return statearr_38276;
})();
if(cljs.core.truth_(inst_38121)){
var statearr_38277_38362 = state_38267__$1;
(statearr_38277_38362[(1)] = (2));

} else {
var statearr_38278_38363 = state_38267__$1;
(statearr_38278_38363[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (24))){
var state_38267__$1 = state_38267;
var statearr_38279_38364 = state_38267__$1;
(statearr_38279_38364[(2)] = null);

(statearr_38279_38364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (39))){
var inst_38221 = (state_38267[(16)]);
var state_38267__$1 = state_38267;
var statearr_38280_38365 = state_38267__$1;
(statearr_38280_38365[(2)] = inst_38221);

(statearr_38280_38365[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (46))){
var inst_38262 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38281_38366 = state_38267__$1;
(statearr_38281_38366[(2)] = inst_38262);

(statearr_38281_38366[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (4))){
var inst_38165 = (state_38267[(2)]);
var inst_38166 = cljs.core.List.EMPTY;
var inst_38167 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38166);
var inst_38168 = (function (){return ((function (inst_38165,inst_38166,inst_38167,state_val_38268,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37863_SHARP_){
var and__24836__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37863_SHARP_);
if(cljs.core.truth_(and__24836__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37863_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37863_SHARP_)));
} else {
return and__24836__auto__;
}
});
;})(inst_38165,inst_38166,inst_38167,state_val_38268,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38169 = cljs.core.filter.call(null,inst_38168,files);
var inst_38170 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38171 = cljs.core.concat.call(null,inst_38169,inst_38170);
var state_38267__$1 = (function (){var statearr_38282 = state_38267;
(statearr_38282[(17)] = inst_38167);

(statearr_38282[(12)] = inst_38171);

(statearr_38282[(18)] = inst_38165);

return statearr_38282;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38283_38367 = state_38267__$1;
(statearr_38283_38367[(1)] = (16));

} else {
var statearr_38284_38368 = state_38267__$1;
(statearr_38284_38368[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (15))){
var inst_38155 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38285_38369 = state_38267__$1;
(statearr_38285_38369[(2)] = inst_38155);

(statearr_38285_38369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (21))){
var inst_38181 = (state_38267[(19)]);
var inst_38181__$1 = (state_38267[(2)]);
var inst_38182 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38181__$1);
var state_38267__$1 = (function (){var statearr_38286 = state_38267;
(statearr_38286[(19)] = inst_38181__$1);

return statearr_38286;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38267__$1,(22),inst_38182);
} else {
if((state_val_38268 === (31))){
var inst_38265 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38267__$1,inst_38265);
} else {
if((state_val_38268 === (32))){
var inst_38221 = (state_38267[(16)]);
var inst_38226 = inst_38221.cljs$lang$protocol_mask$partition0$;
var inst_38227 = (inst_38226 & (64));
var inst_38228 = inst_38221.cljs$core$ISeq$;
var inst_38229 = (inst_38227) || (inst_38228);
var state_38267__$1 = state_38267;
if(cljs.core.truth_(inst_38229)){
var statearr_38287_38370 = state_38267__$1;
(statearr_38287_38370[(1)] = (35));

} else {
var statearr_38288_38371 = state_38267__$1;
(statearr_38288_38371[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (40))){
var inst_38242 = (state_38267[(20)]);
var inst_38241 = (state_38267[(2)]);
var inst_38242__$1 = cljs.core.get.call(null,inst_38241,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38243 = cljs.core.get.call(null,inst_38241,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38244 = cljs.core.not_empty.call(null,inst_38242__$1);
var state_38267__$1 = (function (){var statearr_38289 = state_38267;
(statearr_38289[(20)] = inst_38242__$1);

(statearr_38289[(21)] = inst_38243);

return statearr_38289;
})();
if(cljs.core.truth_(inst_38244)){
var statearr_38290_38372 = state_38267__$1;
(statearr_38290_38372[(1)] = (41));

} else {
var statearr_38291_38373 = state_38267__$1;
(statearr_38291_38373[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (33))){
var state_38267__$1 = state_38267;
var statearr_38292_38374 = state_38267__$1;
(statearr_38292_38374[(2)] = false);

(statearr_38292_38374[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (13))){
var inst_38141 = (state_38267[(22)]);
var inst_38145 = cljs.core.chunk_first.call(null,inst_38141);
var inst_38146 = cljs.core.chunk_rest.call(null,inst_38141);
var inst_38147 = cljs.core.count.call(null,inst_38145);
var inst_38128 = inst_38146;
var inst_38129 = inst_38145;
var inst_38130 = inst_38147;
var inst_38131 = (0);
var state_38267__$1 = (function (){var statearr_38293 = state_38267;
(statearr_38293[(7)] = inst_38128);

(statearr_38293[(8)] = inst_38130);

(statearr_38293[(9)] = inst_38131);

(statearr_38293[(10)] = inst_38129);

return statearr_38293;
})();
var statearr_38294_38375 = state_38267__$1;
(statearr_38294_38375[(2)] = null);

(statearr_38294_38375[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (22))){
var inst_38181 = (state_38267[(19)]);
var inst_38185 = (state_38267[(23)]);
var inst_38189 = (state_38267[(24)]);
var inst_38184 = (state_38267[(25)]);
var inst_38184__$1 = (state_38267[(2)]);
var inst_38185__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38184__$1);
var inst_38186 = (function (){var all_files = inst_38181;
var res_SINGLEQUOTE_ = inst_38184__$1;
var res = inst_38185__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38181,inst_38185,inst_38189,inst_38184,inst_38184__$1,inst_38185__$1,state_val_38268,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37864_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37864_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38181,inst_38185,inst_38189,inst_38184,inst_38184__$1,inst_38185__$1,state_val_38268,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38187 = cljs.core.filter.call(null,inst_38186,inst_38184__$1);
var inst_38188 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38189__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38188);
var inst_38190 = cljs.core.not_empty.call(null,inst_38189__$1);
var state_38267__$1 = (function (){var statearr_38295 = state_38267;
(statearr_38295[(23)] = inst_38185__$1);

(statearr_38295[(26)] = inst_38187);

(statearr_38295[(24)] = inst_38189__$1);

(statearr_38295[(25)] = inst_38184__$1);

return statearr_38295;
})();
if(cljs.core.truth_(inst_38190)){
var statearr_38296_38376 = state_38267__$1;
(statearr_38296_38376[(1)] = (23));

} else {
var statearr_38297_38377 = state_38267__$1;
(statearr_38297_38377[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (36))){
var state_38267__$1 = state_38267;
var statearr_38298_38378 = state_38267__$1;
(statearr_38298_38378[(2)] = false);

(statearr_38298_38378[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (41))){
var inst_38242 = (state_38267[(20)]);
var inst_38246 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38247 = cljs.core.map.call(null,inst_38246,inst_38242);
var inst_38248 = cljs.core.pr_str.call(null,inst_38247);
var inst_38249 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_38248)].join('');
var inst_38250 = figwheel.client.utils.log.call(null,inst_38249);
var state_38267__$1 = state_38267;
var statearr_38299_38379 = state_38267__$1;
(statearr_38299_38379[(2)] = inst_38250);

(statearr_38299_38379[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (43))){
var inst_38243 = (state_38267[(21)]);
var inst_38253 = (state_38267[(2)]);
var inst_38254 = cljs.core.not_empty.call(null,inst_38243);
var state_38267__$1 = (function (){var statearr_38300 = state_38267;
(statearr_38300[(27)] = inst_38253);

return statearr_38300;
})();
if(cljs.core.truth_(inst_38254)){
var statearr_38301_38380 = state_38267__$1;
(statearr_38301_38380[(1)] = (44));

} else {
var statearr_38302_38381 = state_38267__$1;
(statearr_38302_38381[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (29))){
var inst_38181 = (state_38267[(19)]);
var inst_38185 = (state_38267[(23)]);
var inst_38187 = (state_38267[(26)]);
var inst_38221 = (state_38267[(16)]);
var inst_38189 = (state_38267[(24)]);
var inst_38184 = (state_38267[(25)]);
var inst_38217 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38220 = (function (){var all_files = inst_38181;
var res_SINGLEQUOTE_ = inst_38184;
var res = inst_38185;
var files_not_loaded = inst_38187;
var dependencies_that_loaded = inst_38189;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38181,inst_38185,inst_38187,inst_38221,inst_38189,inst_38184,inst_38217,state_val_38268,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38219){
var map__38303 = p__38219;
var map__38303__$1 = ((((!((map__38303 == null)))?((((map__38303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38303):map__38303);
var namespace = cljs.core.get.call(null,map__38303__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38181,inst_38185,inst_38187,inst_38221,inst_38189,inst_38184,inst_38217,state_val_38268,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38221__$1 = cljs.core.group_by.call(null,inst_38220,inst_38187);
var inst_38223 = (inst_38221__$1 == null);
var inst_38224 = cljs.core.not.call(null,inst_38223);
var state_38267__$1 = (function (){var statearr_38305 = state_38267;
(statearr_38305[(16)] = inst_38221__$1);

(statearr_38305[(28)] = inst_38217);

return statearr_38305;
})();
if(inst_38224){
var statearr_38306_38382 = state_38267__$1;
(statearr_38306_38382[(1)] = (32));

} else {
var statearr_38307_38383 = state_38267__$1;
(statearr_38307_38383[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (44))){
var inst_38243 = (state_38267[(21)]);
var inst_38256 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38243);
var inst_38257 = cljs.core.pr_str.call(null,inst_38256);
var inst_38258 = [cljs.core.str("not required: "),cljs.core.str(inst_38257)].join('');
var inst_38259 = figwheel.client.utils.log.call(null,inst_38258);
var state_38267__$1 = state_38267;
var statearr_38308_38384 = state_38267__$1;
(statearr_38308_38384[(2)] = inst_38259);

(statearr_38308_38384[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (6))){
var inst_38162 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38309_38385 = state_38267__$1;
(statearr_38309_38385[(2)] = inst_38162);

(statearr_38309_38385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (28))){
var inst_38187 = (state_38267[(26)]);
var inst_38214 = (state_38267[(2)]);
var inst_38215 = cljs.core.not_empty.call(null,inst_38187);
var state_38267__$1 = (function (){var statearr_38310 = state_38267;
(statearr_38310[(29)] = inst_38214);

return statearr_38310;
})();
if(cljs.core.truth_(inst_38215)){
var statearr_38311_38386 = state_38267__$1;
(statearr_38311_38386[(1)] = (29));

} else {
var statearr_38312_38387 = state_38267__$1;
(statearr_38312_38387[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (25))){
var inst_38185 = (state_38267[(23)]);
var inst_38201 = (state_38267[(2)]);
var inst_38202 = cljs.core.not_empty.call(null,inst_38185);
var state_38267__$1 = (function (){var statearr_38313 = state_38267;
(statearr_38313[(30)] = inst_38201);

return statearr_38313;
})();
if(cljs.core.truth_(inst_38202)){
var statearr_38314_38388 = state_38267__$1;
(statearr_38314_38388[(1)] = (26));

} else {
var statearr_38315_38389 = state_38267__$1;
(statearr_38315_38389[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (34))){
var inst_38236 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
if(cljs.core.truth_(inst_38236)){
var statearr_38316_38390 = state_38267__$1;
(statearr_38316_38390[(1)] = (38));

} else {
var statearr_38317_38391 = state_38267__$1;
(statearr_38317_38391[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (17))){
var state_38267__$1 = state_38267;
var statearr_38318_38392 = state_38267__$1;
(statearr_38318_38392[(2)] = recompile_dependents);

(statearr_38318_38392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (3))){
var state_38267__$1 = state_38267;
var statearr_38319_38393 = state_38267__$1;
(statearr_38319_38393[(2)] = null);

(statearr_38319_38393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (12))){
var inst_38158 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38320_38394 = state_38267__$1;
(statearr_38320_38394[(2)] = inst_38158);

(statearr_38320_38394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (2))){
var inst_38120 = (state_38267[(13)]);
var inst_38127 = cljs.core.seq.call(null,inst_38120);
var inst_38128 = inst_38127;
var inst_38129 = null;
var inst_38130 = (0);
var inst_38131 = (0);
var state_38267__$1 = (function (){var statearr_38321 = state_38267;
(statearr_38321[(7)] = inst_38128);

(statearr_38321[(8)] = inst_38130);

(statearr_38321[(9)] = inst_38131);

(statearr_38321[(10)] = inst_38129);

return statearr_38321;
})();
var statearr_38322_38395 = state_38267__$1;
(statearr_38322_38395[(2)] = null);

(statearr_38322_38395[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (23))){
var inst_38181 = (state_38267[(19)]);
var inst_38185 = (state_38267[(23)]);
var inst_38187 = (state_38267[(26)]);
var inst_38189 = (state_38267[(24)]);
var inst_38184 = (state_38267[(25)]);
var inst_38192 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38194 = (function (){var all_files = inst_38181;
var res_SINGLEQUOTE_ = inst_38184;
var res = inst_38185;
var files_not_loaded = inst_38187;
var dependencies_that_loaded = inst_38189;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38181,inst_38185,inst_38187,inst_38189,inst_38184,inst_38192,state_val_38268,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38193){
var map__38323 = p__38193;
var map__38323__$1 = ((((!((map__38323 == null)))?((((map__38323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38323):map__38323);
var request_url = cljs.core.get.call(null,map__38323__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38181,inst_38185,inst_38187,inst_38189,inst_38184,inst_38192,state_val_38268,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38195 = cljs.core.reverse.call(null,inst_38189);
var inst_38196 = cljs.core.map.call(null,inst_38194,inst_38195);
var inst_38197 = cljs.core.pr_str.call(null,inst_38196);
var inst_38198 = figwheel.client.utils.log.call(null,inst_38197);
var state_38267__$1 = (function (){var statearr_38325 = state_38267;
(statearr_38325[(31)] = inst_38192);

return statearr_38325;
})();
var statearr_38326_38396 = state_38267__$1;
(statearr_38326_38396[(2)] = inst_38198);

(statearr_38326_38396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (35))){
var state_38267__$1 = state_38267;
var statearr_38327_38397 = state_38267__$1;
(statearr_38327_38397[(2)] = true);

(statearr_38327_38397[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (19))){
var inst_38171 = (state_38267[(12)]);
var inst_38177 = figwheel.client.file_reloading.expand_files.call(null,inst_38171);
var state_38267__$1 = state_38267;
var statearr_38328_38398 = state_38267__$1;
(statearr_38328_38398[(2)] = inst_38177);

(statearr_38328_38398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (11))){
var state_38267__$1 = state_38267;
var statearr_38329_38399 = state_38267__$1;
(statearr_38329_38399[(2)] = null);

(statearr_38329_38399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (9))){
var inst_38160 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38330_38400 = state_38267__$1;
(statearr_38330_38400[(2)] = inst_38160);

(statearr_38330_38400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (5))){
var inst_38130 = (state_38267[(8)]);
var inst_38131 = (state_38267[(9)]);
var inst_38133 = (inst_38131 < inst_38130);
var inst_38134 = inst_38133;
var state_38267__$1 = state_38267;
if(cljs.core.truth_(inst_38134)){
var statearr_38331_38401 = state_38267__$1;
(statearr_38331_38401[(1)] = (7));

} else {
var statearr_38332_38402 = state_38267__$1;
(statearr_38332_38402[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (14))){
var inst_38141 = (state_38267[(22)]);
var inst_38150 = cljs.core.first.call(null,inst_38141);
var inst_38151 = figwheel.client.file_reloading.eval_body.call(null,inst_38150,opts);
var inst_38152 = cljs.core.next.call(null,inst_38141);
var inst_38128 = inst_38152;
var inst_38129 = null;
var inst_38130 = (0);
var inst_38131 = (0);
var state_38267__$1 = (function (){var statearr_38333 = state_38267;
(statearr_38333[(7)] = inst_38128);

(statearr_38333[(8)] = inst_38130);

(statearr_38333[(9)] = inst_38131);

(statearr_38333[(10)] = inst_38129);

(statearr_38333[(32)] = inst_38151);

return statearr_38333;
})();
var statearr_38334_38403 = state_38267__$1;
(statearr_38334_38403[(2)] = null);

(statearr_38334_38403[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (45))){
var state_38267__$1 = state_38267;
var statearr_38335_38404 = state_38267__$1;
(statearr_38335_38404[(2)] = null);

(statearr_38335_38404[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (26))){
var inst_38181 = (state_38267[(19)]);
var inst_38185 = (state_38267[(23)]);
var inst_38187 = (state_38267[(26)]);
var inst_38189 = (state_38267[(24)]);
var inst_38184 = (state_38267[(25)]);
var inst_38204 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38206 = (function (){var all_files = inst_38181;
var res_SINGLEQUOTE_ = inst_38184;
var res = inst_38185;
var files_not_loaded = inst_38187;
var dependencies_that_loaded = inst_38189;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38181,inst_38185,inst_38187,inst_38189,inst_38184,inst_38204,state_val_38268,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38205){
var map__38336 = p__38205;
var map__38336__$1 = ((((!((map__38336 == null)))?((((map__38336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38336):map__38336);
var namespace = cljs.core.get.call(null,map__38336__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38336__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38181,inst_38185,inst_38187,inst_38189,inst_38184,inst_38204,state_val_38268,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38207 = cljs.core.map.call(null,inst_38206,inst_38185);
var inst_38208 = cljs.core.pr_str.call(null,inst_38207);
var inst_38209 = figwheel.client.utils.log.call(null,inst_38208);
var inst_38210 = (function (){var all_files = inst_38181;
var res_SINGLEQUOTE_ = inst_38184;
var res = inst_38185;
var files_not_loaded = inst_38187;
var dependencies_that_loaded = inst_38189;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38181,inst_38185,inst_38187,inst_38189,inst_38184,inst_38204,inst_38206,inst_38207,inst_38208,inst_38209,state_val_38268,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38181,inst_38185,inst_38187,inst_38189,inst_38184,inst_38204,inst_38206,inst_38207,inst_38208,inst_38209,state_val_38268,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38211 = setTimeout(inst_38210,(10));
var state_38267__$1 = (function (){var statearr_38338 = state_38267;
(statearr_38338[(33)] = inst_38209);

(statearr_38338[(34)] = inst_38204);

return statearr_38338;
})();
var statearr_38339_38405 = state_38267__$1;
(statearr_38339_38405[(2)] = inst_38211);

(statearr_38339_38405[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (16))){
var state_38267__$1 = state_38267;
var statearr_38340_38406 = state_38267__$1;
(statearr_38340_38406[(2)] = reload_dependents);

(statearr_38340_38406[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (38))){
var inst_38221 = (state_38267[(16)]);
var inst_38238 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38221);
var state_38267__$1 = state_38267;
var statearr_38341_38407 = state_38267__$1;
(statearr_38341_38407[(2)] = inst_38238);

(statearr_38341_38407[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (30))){
var state_38267__$1 = state_38267;
var statearr_38342_38408 = state_38267__$1;
(statearr_38342_38408[(2)] = null);

(statearr_38342_38408[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (10))){
var inst_38141 = (state_38267[(22)]);
var inst_38143 = cljs.core.chunked_seq_QMARK_.call(null,inst_38141);
var state_38267__$1 = state_38267;
if(inst_38143){
var statearr_38343_38409 = state_38267__$1;
(statearr_38343_38409[(1)] = (13));

} else {
var statearr_38344_38410 = state_38267__$1;
(statearr_38344_38410[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (18))){
var inst_38175 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
if(cljs.core.truth_(inst_38175)){
var statearr_38345_38411 = state_38267__$1;
(statearr_38345_38411[(1)] = (19));

} else {
var statearr_38346_38412 = state_38267__$1;
(statearr_38346_38412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (42))){
var state_38267__$1 = state_38267;
var statearr_38347_38413 = state_38267__$1;
(statearr_38347_38413[(2)] = null);

(statearr_38347_38413[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (37))){
var inst_38233 = (state_38267[(2)]);
var state_38267__$1 = state_38267;
var statearr_38348_38414 = state_38267__$1;
(statearr_38348_38414[(2)] = inst_38233);

(statearr_38348_38414[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38268 === (8))){
var inst_38128 = (state_38267[(7)]);
var inst_38141 = (state_38267[(22)]);
var inst_38141__$1 = cljs.core.seq.call(null,inst_38128);
var state_38267__$1 = (function (){var statearr_38349 = state_38267;
(statearr_38349[(22)] = inst_38141__$1);

return statearr_38349;
})();
if(inst_38141__$1){
var statearr_38350_38415 = state_38267__$1;
(statearr_38350_38415[(1)] = (10));

} else {
var statearr_38351_38416 = state_38267__$1;
(statearr_38351_38416[(1)] = (11));

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
}
});})(c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33073__auto__,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33074__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33074__auto____0 = (function (){
var statearr_38355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38355[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33074__auto__);

(statearr_38355[(1)] = (1));

return statearr_38355;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33074__auto____1 = (function (state_38267){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_38267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e38356){if((e38356 instanceof Object)){
var ex__33077__auto__ = e38356;
var statearr_38357_38417 = state_38267;
(statearr_38357_38417[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38418 = state_38267;
state_38267 = G__38418;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33074__auto__ = function(state_38267){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33074__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33074__auto____1.call(this,state_38267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33074__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33074__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33187__auto__ = (function (){var statearr_38358 = f__33186__auto__.call(null);
(statearr_38358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto__);

return statearr_38358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto__,map__38113,map__38113__$1,opts,before_jsload,on_jsload,reload_dependents,map__38114,map__38114__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33185__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38421,link){
var map__38424 = p__38421;
var map__38424__$1 = ((((!((map__38424 == null)))?((((map__38424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38424):map__38424);
var file = cljs.core.get.call(null,map__38424__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__38424,map__38424__$1,file){
return (function (p1__38419_SHARP_,p2__38420_SHARP_){
if(cljs.core._EQ_.call(null,p1__38419_SHARP_,p2__38420_SHARP_)){
return p1__38419_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__38424,map__38424__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38430){
var map__38431 = p__38430;
var map__38431__$1 = ((((!((map__38431 == null)))?((((map__38431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38431):map__38431);
var match_length = cljs.core.get.call(null,map__38431__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38431__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38426_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38426_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38433_SHARP_,p2__38434_SHARP_){
return cljs.core.assoc.call(null,p1__38433_SHARP_,cljs.core.get.call(null,p2__38434_SHARP_,key),p2__38434_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38435 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38435);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38435);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38436,p__38437){
var map__38442 = p__38436;
var map__38442__$1 = ((((!((map__38442 == null)))?((((map__38442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38442):map__38442);
var on_cssload = cljs.core.get.call(null,map__38442__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38443 = p__38437;
var map__38443__$1 = ((((!((map__38443 == null)))?((((map__38443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38443):map__38443);
var files_msg = map__38443__$1;
var files = cljs.core.get.call(null,map__38443__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1523250228624