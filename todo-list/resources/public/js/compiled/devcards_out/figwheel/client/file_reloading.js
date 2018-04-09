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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34169_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34169_SHARP_));
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
var seq__34174 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34175 = null;
var count__34176 = (0);
var i__34177 = (0);
while(true){
if((i__34177 < count__34176)){
var n = cljs.core._nth.call(null,chunk__34175,i__34177);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34178 = seq__34174;
var G__34179 = chunk__34175;
var G__34180 = count__34176;
var G__34181 = (i__34177 + (1));
seq__34174 = G__34178;
chunk__34175 = G__34179;
count__34176 = G__34180;
i__34177 = G__34181;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34174);
if(temp__4657__auto__){
var seq__34174__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34174__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34174__$1);
var G__34182 = cljs.core.chunk_rest.call(null,seq__34174__$1);
var G__34183 = c__25659__auto__;
var G__34184 = cljs.core.count.call(null,c__25659__auto__);
var G__34185 = (0);
seq__34174 = G__34182;
chunk__34175 = G__34183;
count__34176 = G__34184;
i__34177 = G__34185;
continue;
} else {
var n = cljs.core.first.call(null,seq__34174__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34186 = cljs.core.next.call(null,seq__34174__$1);
var G__34187 = null;
var G__34188 = (0);
var G__34189 = (0);
seq__34174 = G__34186;
chunk__34175 = G__34187;
count__34176 = G__34188;
i__34177 = G__34189;
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

var seq__34240_34251 = cljs.core.seq.call(null,deps);
var chunk__34241_34252 = null;
var count__34242_34253 = (0);
var i__34243_34254 = (0);
while(true){
if((i__34243_34254 < count__34242_34253)){
var dep_34255 = cljs.core._nth.call(null,chunk__34241_34252,i__34243_34254);
topo_sort_helper_STAR_.call(null,dep_34255,(depth + (1)),state);

var G__34256 = seq__34240_34251;
var G__34257 = chunk__34241_34252;
var G__34258 = count__34242_34253;
var G__34259 = (i__34243_34254 + (1));
seq__34240_34251 = G__34256;
chunk__34241_34252 = G__34257;
count__34242_34253 = G__34258;
i__34243_34254 = G__34259;
continue;
} else {
var temp__4657__auto___34260 = cljs.core.seq.call(null,seq__34240_34251);
if(temp__4657__auto___34260){
var seq__34240_34261__$1 = temp__4657__auto___34260;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34240_34261__$1)){
var c__25659__auto___34262 = cljs.core.chunk_first.call(null,seq__34240_34261__$1);
var G__34263 = cljs.core.chunk_rest.call(null,seq__34240_34261__$1);
var G__34264 = c__25659__auto___34262;
var G__34265 = cljs.core.count.call(null,c__25659__auto___34262);
var G__34266 = (0);
seq__34240_34251 = G__34263;
chunk__34241_34252 = G__34264;
count__34242_34253 = G__34265;
i__34243_34254 = G__34266;
continue;
} else {
var dep_34267 = cljs.core.first.call(null,seq__34240_34261__$1);
topo_sort_helper_STAR_.call(null,dep_34267,(depth + (1)),state);

var G__34268 = cljs.core.next.call(null,seq__34240_34261__$1);
var G__34269 = null;
var G__34270 = (0);
var G__34271 = (0);
seq__34240_34251 = G__34268;
chunk__34241_34252 = G__34269;
count__34242_34253 = G__34270;
i__34243_34254 = G__34271;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34244){
var vec__34248 = p__34244;
var seq__34249 = cljs.core.seq.call(null,vec__34248);
var first__34250 = cljs.core.first.call(null,seq__34249);
var seq__34249__$1 = cljs.core.next.call(null,seq__34249);
var x = first__34250;
var xs = seq__34249__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34248,seq__34249,first__34250,seq__34249__$1,x,xs,get_deps__$1){
return (function (p1__34190_SHARP_){
return clojure.set.difference.call(null,p1__34190_SHARP_,x);
});})(vec__34248,seq__34249,first__34250,seq__34249__$1,x,xs,get_deps__$1))
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
var seq__34284 = cljs.core.seq.call(null,provides);
var chunk__34285 = null;
var count__34286 = (0);
var i__34287 = (0);
while(true){
if((i__34287 < count__34286)){
var prov = cljs.core._nth.call(null,chunk__34285,i__34287);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34288_34296 = cljs.core.seq.call(null,requires);
var chunk__34289_34297 = null;
var count__34290_34298 = (0);
var i__34291_34299 = (0);
while(true){
if((i__34291_34299 < count__34290_34298)){
var req_34300 = cljs.core._nth.call(null,chunk__34289_34297,i__34291_34299);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34300,prov);

var G__34301 = seq__34288_34296;
var G__34302 = chunk__34289_34297;
var G__34303 = count__34290_34298;
var G__34304 = (i__34291_34299 + (1));
seq__34288_34296 = G__34301;
chunk__34289_34297 = G__34302;
count__34290_34298 = G__34303;
i__34291_34299 = G__34304;
continue;
} else {
var temp__4657__auto___34305 = cljs.core.seq.call(null,seq__34288_34296);
if(temp__4657__auto___34305){
var seq__34288_34306__$1 = temp__4657__auto___34305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34288_34306__$1)){
var c__25659__auto___34307 = cljs.core.chunk_first.call(null,seq__34288_34306__$1);
var G__34308 = cljs.core.chunk_rest.call(null,seq__34288_34306__$1);
var G__34309 = c__25659__auto___34307;
var G__34310 = cljs.core.count.call(null,c__25659__auto___34307);
var G__34311 = (0);
seq__34288_34296 = G__34308;
chunk__34289_34297 = G__34309;
count__34290_34298 = G__34310;
i__34291_34299 = G__34311;
continue;
} else {
var req_34312 = cljs.core.first.call(null,seq__34288_34306__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34312,prov);

var G__34313 = cljs.core.next.call(null,seq__34288_34306__$1);
var G__34314 = null;
var G__34315 = (0);
var G__34316 = (0);
seq__34288_34296 = G__34313;
chunk__34289_34297 = G__34314;
count__34290_34298 = G__34315;
i__34291_34299 = G__34316;
continue;
}
} else {
}
}
break;
}

var G__34317 = seq__34284;
var G__34318 = chunk__34285;
var G__34319 = count__34286;
var G__34320 = (i__34287 + (1));
seq__34284 = G__34317;
chunk__34285 = G__34318;
count__34286 = G__34319;
i__34287 = G__34320;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34284);
if(temp__4657__auto__){
var seq__34284__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34284__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34284__$1);
var G__34321 = cljs.core.chunk_rest.call(null,seq__34284__$1);
var G__34322 = c__25659__auto__;
var G__34323 = cljs.core.count.call(null,c__25659__auto__);
var G__34324 = (0);
seq__34284 = G__34321;
chunk__34285 = G__34322;
count__34286 = G__34323;
i__34287 = G__34324;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34284__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34292_34325 = cljs.core.seq.call(null,requires);
var chunk__34293_34326 = null;
var count__34294_34327 = (0);
var i__34295_34328 = (0);
while(true){
if((i__34295_34328 < count__34294_34327)){
var req_34329 = cljs.core._nth.call(null,chunk__34293_34326,i__34295_34328);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34329,prov);

var G__34330 = seq__34292_34325;
var G__34331 = chunk__34293_34326;
var G__34332 = count__34294_34327;
var G__34333 = (i__34295_34328 + (1));
seq__34292_34325 = G__34330;
chunk__34293_34326 = G__34331;
count__34294_34327 = G__34332;
i__34295_34328 = G__34333;
continue;
} else {
var temp__4657__auto___34334__$1 = cljs.core.seq.call(null,seq__34292_34325);
if(temp__4657__auto___34334__$1){
var seq__34292_34335__$1 = temp__4657__auto___34334__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34292_34335__$1)){
var c__25659__auto___34336 = cljs.core.chunk_first.call(null,seq__34292_34335__$1);
var G__34337 = cljs.core.chunk_rest.call(null,seq__34292_34335__$1);
var G__34338 = c__25659__auto___34336;
var G__34339 = cljs.core.count.call(null,c__25659__auto___34336);
var G__34340 = (0);
seq__34292_34325 = G__34337;
chunk__34293_34326 = G__34338;
count__34294_34327 = G__34339;
i__34295_34328 = G__34340;
continue;
} else {
var req_34341 = cljs.core.first.call(null,seq__34292_34335__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34341,prov);

var G__34342 = cljs.core.next.call(null,seq__34292_34335__$1);
var G__34343 = null;
var G__34344 = (0);
var G__34345 = (0);
seq__34292_34325 = G__34342;
chunk__34293_34326 = G__34343;
count__34294_34327 = G__34344;
i__34295_34328 = G__34345;
continue;
}
} else {
}
}
break;
}

var G__34346 = cljs.core.next.call(null,seq__34284__$1);
var G__34347 = null;
var G__34348 = (0);
var G__34349 = (0);
seq__34284 = G__34346;
chunk__34285 = G__34347;
count__34286 = G__34348;
i__34287 = G__34349;
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
var seq__34354_34358 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34355_34359 = null;
var count__34356_34360 = (0);
var i__34357_34361 = (0);
while(true){
if((i__34357_34361 < count__34356_34360)){
var ns_34362 = cljs.core._nth.call(null,chunk__34355_34359,i__34357_34361);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34362);

var G__34363 = seq__34354_34358;
var G__34364 = chunk__34355_34359;
var G__34365 = count__34356_34360;
var G__34366 = (i__34357_34361 + (1));
seq__34354_34358 = G__34363;
chunk__34355_34359 = G__34364;
count__34356_34360 = G__34365;
i__34357_34361 = G__34366;
continue;
} else {
var temp__4657__auto___34367 = cljs.core.seq.call(null,seq__34354_34358);
if(temp__4657__auto___34367){
var seq__34354_34368__$1 = temp__4657__auto___34367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34354_34368__$1)){
var c__25659__auto___34369 = cljs.core.chunk_first.call(null,seq__34354_34368__$1);
var G__34370 = cljs.core.chunk_rest.call(null,seq__34354_34368__$1);
var G__34371 = c__25659__auto___34369;
var G__34372 = cljs.core.count.call(null,c__25659__auto___34369);
var G__34373 = (0);
seq__34354_34358 = G__34370;
chunk__34355_34359 = G__34371;
count__34356_34360 = G__34372;
i__34357_34361 = G__34373;
continue;
} else {
var ns_34374 = cljs.core.first.call(null,seq__34354_34368__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34374);

var G__34375 = cljs.core.next.call(null,seq__34354_34368__$1);
var G__34376 = null;
var G__34377 = (0);
var G__34378 = (0);
seq__34354_34358 = G__34375;
chunk__34355_34359 = G__34376;
count__34356_34360 = G__34377;
i__34357_34361 = G__34378;
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
var G__34379__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34380__i = 0, G__34380__a = new Array(arguments.length -  0);
while (G__34380__i < G__34380__a.length) {G__34380__a[G__34380__i] = arguments[G__34380__i + 0]; ++G__34380__i;}
  args = new cljs.core.IndexedSeq(G__34380__a,0);
} 
return G__34379__delegate.call(this,args);};
G__34379.cljs$lang$maxFixedArity = 0;
G__34379.cljs$lang$applyTo = (function (arglist__34381){
var args = cljs.core.seq(arglist__34381);
return G__34379__delegate(args);
});
G__34379.cljs$core$IFn$_invoke$arity$variadic = G__34379__delegate;
return G__34379;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34382 = cljs.core._EQ_;
var expr__34383 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34382.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34383))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34382,expr__34383){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34382,expr__34383))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34382,expr__34383){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34385){if((e34385 instanceof Error)){
var e = e34385;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34385;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34382,expr__34383))
} else {
if(cljs.core.truth_(pred__34382.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34383))){
return ((function (pred__34382,expr__34383){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34382,expr__34383){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34382,expr__34383))
);

return deferred.addErrback(((function (deferred,pred__34382,expr__34383){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34382,expr__34383))
);
});
;})(pred__34382,expr__34383))
} else {
if(cljs.core.truth_(pred__34382.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34383))){
return ((function (pred__34382,expr__34383){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34386){if((e34386 instanceof Error)){
var e = e34386;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34386;

}
}})());
});
;})(pred__34382,expr__34383))
} else {
return ((function (pred__34382,expr__34383){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34382,expr__34383))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34387,callback){
var map__34390 = p__34387;
var map__34390__$1 = ((((!((map__34390 == null)))?((((map__34390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34390):map__34390);
var file_msg = map__34390__$1;
var request_url = cljs.core.get.call(null,map__34390__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34390,map__34390__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34390,map__34390__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto__){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto__){
return (function (state_34414){
var state_val_34415 = (state_34414[(1)]);
if((state_val_34415 === (7))){
var inst_34410 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
var statearr_34416_34436 = state_34414__$1;
(statearr_34416_34436[(2)] = inst_34410);

(statearr_34416_34436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (1))){
var state_34414__$1 = state_34414;
var statearr_34417_34437 = state_34414__$1;
(statearr_34417_34437[(2)] = null);

(statearr_34417_34437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (4))){
var inst_34394 = (state_34414[(7)]);
var inst_34394__$1 = (state_34414[(2)]);
var state_34414__$1 = (function (){var statearr_34418 = state_34414;
(statearr_34418[(7)] = inst_34394__$1);

return statearr_34418;
})();
if(cljs.core.truth_(inst_34394__$1)){
var statearr_34419_34438 = state_34414__$1;
(statearr_34419_34438[(1)] = (5));

} else {
var statearr_34420_34439 = state_34414__$1;
(statearr_34420_34439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (6))){
var state_34414__$1 = state_34414;
var statearr_34421_34440 = state_34414__$1;
(statearr_34421_34440[(2)] = null);

(statearr_34421_34440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (3))){
var inst_34412 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34414__$1,inst_34412);
} else {
if((state_val_34415 === (2))){
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34414__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34415 === (11))){
var inst_34406 = (state_34414[(2)]);
var state_34414__$1 = (function (){var statearr_34422 = state_34414;
(statearr_34422[(8)] = inst_34406);

return statearr_34422;
})();
var statearr_34423_34441 = state_34414__$1;
(statearr_34423_34441[(2)] = null);

(statearr_34423_34441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (9))){
var inst_34400 = (state_34414[(9)]);
var inst_34398 = (state_34414[(10)]);
var inst_34402 = inst_34400.call(null,inst_34398);
var state_34414__$1 = state_34414;
var statearr_34424_34442 = state_34414__$1;
(statearr_34424_34442[(2)] = inst_34402);

(statearr_34424_34442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (5))){
var inst_34394 = (state_34414[(7)]);
var inst_34396 = figwheel.client.file_reloading.blocking_load.call(null,inst_34394);
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34414__$1,(8),inst_34396);
} else {
if((state_val_34415 === (10))){
var inst_34398 = (state_34414[(10)]);
var inst_34404 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34398);
var state_34414__$1 = state_34414;
var statearr_34425_34443 = state_34414__$1;
(statearr_34425_34443[(2)] = inst_34404);

(statearr_34425_34443[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (8))){
var inst_34400 = (state_34414[(9)]);
var inst_34394 = (state_34414[(7)]);
var inst_34398 = (state_34414[(2)]);
var inst_34399 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34400__$1 = cljs.core.get.call(null,inst_34399,inst_34394);
var state_34414__$1 = (function (){var statearr_34426 = state_34414;
(statearr_34426[(9)] = inst_34400__$1);

(statearr_34426[(10)] = inst_34398);

return statearr_34426;
})();
if(cljs.core.truth_(inst_34400__$1)){
var statearr_34427_34444 = state_34414__$1;
(statearr_34427_34444[(1)] = (9));

} else {
var statearr_34428_34445 = state_34414__$1;
(statearr_34428_34445[(1)] = (10));

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
});})(c__29924__auto__))
;
return ((function (switch__29859__auto__,c__29924__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29860__auto__ = null;
var figwheel$client$file_reloading$state_machine__29860__auto____0 = (function (){
var statearr_34432 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34432[(0)] = figwheel$client$file_reloading$state_machine__29860__auto__);

(statearr_34432[(1)] = (1));

return statearr_34432;
});
var figwheel$client$file_reloading$state_machine__29860__auto____1 = (function (state_34414){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_34414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e34433){if((e34433 instanceof Object)){
var ex__29863__auto__ = e34433;
var statearr_34434_34446 = state_34414;
(statearr_34434_34446[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34447 = state_34414;
state_34414 = G__34447;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29860__auto__ = function(state_34414){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29860__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29860__auto____1.call(this,state_34414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29860__auto____0;
figwheel$client$file_reloading$state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29860__auto____1;
return figwheel$client$file_reloading$state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto__))
})();
var state__29926__auto__ = (function (){var statearr_34435 = f__29925__auto__.call(null);
(statearr_34435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto__);

return statearr_34435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto__))
);

return c__29924__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34448,callback){
var map__34451 = p__34448;
var map__34451__$1 = ((((!((map__34451 == null)))?((((map__34451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34451):map__34451);
var file_msg = map__34451__$1;
var namespace = cljs.core.get.call(null,map__34451__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34451,map__34451__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34451,map__34451__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34453){
var map__34456 = p__34453;
var map__34456__$1 = ((((!((map__34456 == null)))?((((map__34456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34456):map__34456);
var file_msg = map__34456__$1;
var namespace = cljs.core.get.call(null,map__34456__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34458){
var map__34461 = p__34458;
var map__34461__$1 = ((((!((map__34461 == null)))?((((map__34461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34461):map__34461);
var file_msg = map__34461__$1;
var namespace = cljs.core.get.call(null,map__34461__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34463,callback){
var map__34466 = p__34463;
var map__34466__$1 = ((((!((map__34466 == null)))?((((map__34466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34466):map__34466);
var file_msg = map__34466__$1;
var request_url = cljs.core.get.call(null,map__34466__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34466__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29924__auto___34570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___34570,out){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___34570,out){
return (function (state_34552){
var state_val_34553 = (state_34552[(1)]);
if((state_val_34553 === (1))){
var inst_34526 = cljs.core.seq.call(null,files);
var inst_34527 = cljs.core.first.call(null,inst_34526);
var inst_34528 = cljs.core.next.call(null,inst_34526);
var inst_34529 = files;
var state_34552__$1 = (function (){var statearr_34554 = state_34552;
(statearr_34554[(7)] = inst_34529);

(statearr_34554[(8)] = inst_34527);

(statearr_34554[(9)] = inst_34528);

return statearr_34554;
})();
var statearr_34555_34571 = state_34552__$1;
(statearr_34555_34571[(2)] = null);

(statearr_34555_34571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (2))){
var inst_34529 = (state_34552[(7)]);
var inst_34535 = (state_34552[(10)]);
var inst_34534 = cljs.core.seq.call(null,inst_34529);
var inst_34535__$1 = cljs.core.first.call(null,inst_34534);
var inst_34536 = cljs.core.next.call(null,inst_34534);
var inst_34537 = (inst_34535__$1 == null);
var inst_34538 = cljs.core.not.call(null,inst_34537);
var state_34552__$1 = (function (){var statearr_34556 = state_34552;
(statearr_34556[(10)] = inst_34535__$1);

(statearr_34556[(11)] = inst_34536);

return statearr_34556;
})();
if(inst_34538){
var statearr_34557_34572 = state_34552__$1;
(statearr_34557_34572[(1)] = (4));

} else {
var statearr_34558_34573 = state_34552__$1;
(statearr_34558_34573[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (3))){
var inst_34550 = (state_34552[(2)]);
var state_34552__$1 = state_34552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34552__$1,inst_34550);
} else {
if((state_val_34553 === (4))){
var inst_34535 = (state_34552[(10)]);
var inst_34540 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34535);
var state_34552__$1 = state_34552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34552__$1,(7),inst_34540);
} else {
if((state_val_34553 === (5))){
var inst_34546 = cljs.core.async.close_BANG_.call(null,out);
var state_34552__$1 = state_34552;
var statearr_34559_34574 = state_34552__$1;
(statearr_34559_34574[(2)] = inst_34546);

(statearr_34559_34574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (6))){
var inst_34548 = (state_34552[(2)]);
var state_34552__$1 = state_34552;
var statearr_34560_34575 = state_34552__$1;
(statearr_34560_34575[(2)] = inst_34548);

(statearr_34560_34575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (7))){
var inst_34536 = (state_34552[(11)]);
var inst_34542 = (state_34552[(2)]);
var inst_34543 = cljs.core.async.put_BANG_.call(null,out,inst_34542);
var inst_34529 = inst_34536;
var state_34552__$1 = (function (){var statearr_34561 = state_34552;
(statearr_34561[(7)] = inst_34529);

(statearr_34561[(12)] = inst_34543);

return statearr_34561;
})();
var statearr_34562_34576 = state_34552__$1;
(statearr_34562_34576[(2)] = null);

(statearr_34562_34576[(1)] = (2));


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
});})(c__29924__auto___34570,out))
;
return ((function (switch__29859__auto__,c__29924__auto___34570,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto____0 = (function (){
var statearr_34566 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34566[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto__);

(statearr_34566[(1)] = (1));

return statearr_34566;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto____1 = (function (state_34552){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_34552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e34567){if((e34567 instanceof Object)){
var ex__29863__auto__ = e34567;
var statearr_34568_34577 = state_34552;
(statearr_34568_34577[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34578 = state_34552;
state_34552 = G__34578;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto__ = function(state_34552){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto____1.call(this,state_34552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___34570,out))
})();
var state__29926__auto__ = (function (){var statearr_34569 = f__29925__auto__.call(null);
(statearr_34569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___34570);

return statearr_34569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___34570,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34579,opts){
var map__34583 = p__34579;
var map__34583__$1 = ((((!((map__34583 == null)))?((((map__34583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34583):map__34583);
var eval_body__$1 = cljs.core.get.call(null,map__34583__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34583__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34585){var e = e34585;
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
return (function (p1__34586_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34586_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34595){
var vec__34596 = p__34595;
var k = cljs.core.nth.call(null,vec__34596,(0),null);
var v = cljs.core.nth.call(null,vec__34596,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34599){
var vec__34600 = p__34599;
var k = cljs.core.nth.call(null,vec__34600,(0),null);
var v = cljs.core.nth.call(null,vec__34600,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34606,p__34607){
var map__34854 = p__34606;
var map__34854__$1 = ((((!((map__34854 == null)))?((((map__34854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34854):map__34854);
var opts = map__34854__$1;
var before_jsload = cljs.core.get.call(null,map__34854__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34854__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34854__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34855 = p__34607;
var map__34855__$1 = ((((!((map__34855 == null)))?((((map__34855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34855):map__34855);
var msg = map__34855__$1;
var files = cljs.core.get.call(null,map__34855__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34855__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34855__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35008){
var state_val_35009 = (state_35008[(1)]);
if((state_val_35009 === (7))){
var inst_34869 = (state_35008[(7)]);
var inst_34870 = (state_35008[(8)]);
var inst_34871 = (state_35008[(9)]);
var inst_34872 = (state_35008[(10)]);
var inst_34877 = cljs.core._nth.call(null,inst_34870,inst_34872);
var inst_34878 = figwheel.client.file_reloading.eval_body.call(null,inst_34877,opts);
var inst_34879 = (inst_34872 + (1));
var tmp35010 = inst_34869;
var tmp35011 = inst_34870;
var tmp35012 = inst_34871;
var inst_34869__$1 = tmp35010;
var inst_34870__$1 = tmp35011;
var inst_34871__$1 = tmp35012;
var inst_34872__$1 = inst_34879;
var state_35008__$1 = (function (){var statearr_35013 = state_35008;
(statearr_35013[(7)] = inst_34869__$1);

(statearr_35013[(8)] = inst_34870__$1);

(statearr_35013[(9)] = inst_34871__$1);

(statearr_35013[(10)] = inst_34872__$1);

(statearr_35013[(11)] = inst_34878);

return statearr_35013;
})();
var statearr_35014_35100 = state_35008__$1;
(statearr_35014_35100[(2)] = null);

(statearr_35014_35100[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (20))){
var inst_34912 = (state_35008[(12)]);
var inst_34920 = figwheel.client.file_reloading.sort_files.call(null,inst_34912);
var state_35008__$1 = state_35008;
var statearr_35015_35101 = state_35008__$1;
(statearr_35015_35101[(2)] = inst_34920);

(statearr_35015_35101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (27))){
var state_35008__$1 = state_35008;
var statearr_35016_35102 = state_35008__$1;
(statearr_35016_35102[(2)] = null);

(statearr_35016_35102[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (1))){
var inst_34861 = (state_35008[(13)]);
var inst_34858 = before_jsload.call(null,files);
var inst_34859 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34860 = (function (){return ((function (inst_34861,inst_34858,inst_34859,state_val_35009,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34603_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34603_SHARP_);
});
;})(inst_34861,inst_34858,inst_34859,state_val_35009,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34861__$1 = cljs.core.filter.call(null,inst_34860,files);
var inst_34862 = cljs.core.not_empty.call(null,inst_34861__$1);
var state_35008__$1 = (function (){var statearr_35017 = state_35008;
(statearr_35017[(14)] = inst_34858);

(statearr_35017[(15)] = inst_34859);

(statearr_35017[(13)] = inst_34861__$1);

return statearr_35017;
})();
if(cljs.core.truth_(inst_34862)){
var statearr_35018_35103 = state_35008__$1;
(statearr_35018_35103[(1)] = (2));

} else {
var statearr_35019_35104 = state_35008__$1;
(statearr_35019_35104[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (24))){
var state_35008__$1 = state_35008;
var statearr_35020_35105 = state_35008__$1;
(statearr_35020_35105[(2)] = null);

(statearr_35020_35105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (39))){
var inst_34962 = (state_35008[(16)]);
var state_35008__$1 = state_35008;
var statearr_35021_35106 = state_35008__$1;
(statearr_35021_35106[(2)] = inst_34962);

(statearr_35021_35106[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (46))){
var inst_35003 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
var statearr_35022_35107 = state_35008__$1;
(statearr_35022_35107[(2)] = inst_35003);

(statearr_35022_35107[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (4))){
var inst_34906 = (state_35008[(2)]);
var inst_34907 = cljs.core.List.EMPTY;
var inst_34908 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34907);
var inst_34909 = (function (){return ((function (inst_34906,inst_34907,inst_34908,state_val_35009,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34604_SHARP_){
var and__24836__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34604_SHARP_);
if(cljs.core.truth_(and__24836__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34604_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34604_SHARP_)));
} else {
return and__24836__auto__;
}
});
;})(inst_34906,inst_34907,inst_34908,state_val_35009,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34910 = cljs.core.filter.call(null,inst_34909,files);
var inst_34911 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34912 = cljs.core.concat.call(null,inst_34910,inst_34911);
var state_35008__$1 = (function (){var statearr_35023 = state_35008;
(statearr_35023[(17)] = inst_34906);

(statearr_35023[(12)] = inst_34912);

(statearr_35023[(18)] = inst_34908);

return statearr_35023;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35024_35108 = state_35008__$1;
(statearr_35024_35108[(1)] = (16));

} else {
var statearr_35025_35109 = state_35008__$1;
(statearr_35025_35109[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (15))){
var inst_34896 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
var statearr_35026_35110 = state_35008__$1;
(statearr_35026_35110[(2)] = inst_34896);

(statearr_35026_35110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (21))){
var inst_34922 = (state_35008[(19)]);
var inst_34922__$1 = (state_35008[(2)]);
var inst_34923 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34922__$1);
var state_35008__$1 = (function (){var statearr_35027 = state_35008;
(statearr_35027[(19)] = inst_34922__$1);

return statearr_35027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35008__$1,(22),inst_34923);
} else {
if((state_val_35009 === (31))){
var inst_35006 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35008__$1,inst_35006);
} else {
if((state_val_35009 === (32))){
var inst_34962 = (state_35008[(16)]);
var inst_34967 = inst_34962.cljs$lang$protocol_mask$partition0$;
var inst_34968 = (inst_34967 & (64));
var inst_34969 = inst_34962.cljs$core$ISeq$;
var inst_34970 = (inst_34968) || (inst_34969);
var state_35008__$1 = state_35008;
if(cljs.core.truth_(inst_34970)){
var statearr_35028_35111 = state_35008__$1;
(statearr_35028_35111[(1)] = (35));

} else {
var statearr_35029_35112 = state_35008__$1;
(statearr_35029_35112[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (40))){
var inst_34983 = (state_35008[(20)]);
var inst_34982 = (state_35008[(2)]);
var inst_34983__$1 = cljs.core.get.call(null,inst_34982,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34984 = cljs.core.get.call(null,inst_34982,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34985 = cljs.core.not_empty.call(null,inst_34983__$1);
var state_35008__$1 = (function (){var statearr_35030 = state_35008;
(statearr_35030[(20)] = inst_34983__$1);

(statearr_35030[(21)] = inst_34984);

return statearr_35030;
})();
if(cljs.core.truth_(inst_34985)){
var statearr_35031_35113 = state_35008__$1;
(statearr_35031_35113[(1)] = (41));

} else {
var statearr_35032_35114 = state_35008__$1;
(statearr_35032_35114[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (33))){
var state_35008__$1 = state_35008;
var statearr_35033_35115 = state_35008__$1;
(statearr_35033_35115[(2)] = false);

(statearr_35033_35115[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (13))){
var inst_34882 = (state_35008[(22)]);
var inst_34886 = cljs.core.chunk_first.call(null,inst_34882);
var inst_34887 = cljs.core.chunk_rest.call(null,inst_34882);
var inst_34888 = cljs.core.count.call(null,inst_34886);
var inst_34869 = inst_34887;
var inst_34870 = inst_34886;
var inst_34871 = inst_34888;
var inst_34872 = (0);
var state_35008__$1 = (function (){var statearr_35034 = state_35008;
(statearr_35034[(7)] = inst_34869);

(statearr_35034[(8)] = inst_34870);

(statearr_35034[(9)] = inst_34871);

(statearr_35034[(10)] = inst_34872);

return statearr_35034;
})();
var statearr_35035_35116 = state_35008__$1;
(statearr_35035_35116[(2)] = null);

(statearr_35035_35116[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (22))){
var inst_34925 = (state_35008[(23)]);
var inst_34926 = (state_35008[(24)]);
var inst_34930 = (state_35008[(25)]);
var inst_34922 = (state_35008[(19)]);
var inst_34925__$1 = (state_35008[(2)]);
var inst_34926__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34925__$1);
var inst_34927 = (function (){var all_files = inst_34922;
var res_SINGLEQUOTE_ = inst_34925__$1;
var res = inst_34926__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34925,inst_34926,inst_34930,inst_34922,inst_34925__$1,inst_34926__$1,state_val_35009,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34605_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34605_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34925,inst_34926,inst_34930,inst_34922,inst_34925__$1,inst_34926__$1,state_val_35009,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34928 = cljs.core.filter.call(null,inst_34927,inst_34925__$1);
var inst_34929 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34930__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34929);
var inst_34931 = cljs.core.not_empty.call(null,inst_34930__$1);
var state_35008__$1 = (function (){var statearr_35036 = state_35008;
(statearr_35036[(23)] = inst_34925__$1);

(statearr_35036[(24)] = inst_34926__$1);

(statearr_35036[(25)] = inst_34930__$1);

(statearr_35036[(26)] = inst_34928);

return statearr_35036;
})();
if(cljs.core.truth_(inst_34931)){
var statearr_35037_35117 = state_35008__$1;
(statearr_35037_35117[(1)] = (23));

} else {
var statearr_35038_35118 = state_35008__$1;
(statearr_35038_35118[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (36))){
var state_35008__$1 = state_35008;
var statearr_35039_35119 = state_35008__$1;
(statearr_35039_35119[(2)] = false);

(statearr_35039_35119[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (41))){
var inst_34983 = (state_35008[(20)]);
var inst_34987 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34988 = cljs.core.map.call(null,inst_34987,inst_34983);
var inst_34989 = cljs.core.pr_str.call(null,inst_34988);
var inst_34990 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34989)].join('');
var inst_34991 = figwheel.client.utils.log.call(null,inst_34990);
var state_35008__$1 = state_35008;
var statearr_35040_35120 = state_35008__$1;
(statearr_35040_35120[(2)] = inst_34991);

(statearr_35040_35120[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (43))){
var inst_34984 = (state_35008[(21)]);
var inst_34994 = (state_35008[(2)]);
var inst_34995 = cljs.core.not_empty.call(null,inst_34984);
var state_35008__$1 = (function (){var statearr_35041 = state_35008;
(statearr_35041[(27)] = inst_34994);

return statearr_35041;
})();
if(cljs.core.truth_(inst_34995)){
var statearr_35042_35121 = state_35008__$1;
(statearr_35042_35121[(1)] = (44));

} else {
var statearr_35043_35122 = state_35008__$1;
(statearr_35043_35122[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (29))){
var inst_34962 = (state_35008[(16)]);
var inst_34925 = (state_35008[(23)]);
var inst_34926 = (state_35008[(24)]);
var inst_34930 = (state_35008[(25)]);
var inst_34928 = (state_35008[(26)]);
var inst_34922 = (state_35008[(19)]);
var inst_34958 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34961 = (function (){var all_files = inst_34922;
var res_SINGLEQUOTE_ = inst_34925;
var res = inst_34926;
var files_not_loaded = inst_34928;
var dependencies_that_loaded = inst_34930;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34962,inst_34925,inst_34926,inst_34930,inst_34928,inst_34922,inst_34958,state_val_35009,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34960){
var map__35044 = p__34960;
var map__35044__$1 = ((((!((map__35044 == null)))?((((map__35044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35044):map__35044);
var namespace = cljs.core.get.call(null,map__35044__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34962,inst_34925,inst_34926,inst_34930,inst_34928,inst_34922,inst_34958,state_val_35009,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34962__$1 = cljs.core.group_by.call(null,inst_34961,inst_34928);
var inst_34964 = (inst_34962__$1 == null);
var inst_34965 = cljs.core.not.call(null,inst_34964);
var state_35008__$1 = (function (){var statearr_35046 = state_35008;
(statearr_35046[(16)] = inst_34962__$1);

(statearr_35046[(28)] = inst_34958);

return statearr_35046;
})();
if(inst_34965){
var statearr_35047_35123 = state_35008__$1;
(statearr_35047_35123[(1)] = (32));

} else {
var statearr_35048_35124 = state_35008__$1;
(statearr_35048_35124[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (44))){
var inst_34984 = (state_35008[(21)]);
var inst_34997 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34984);
var inst_34998 = cljs.core.pr_str.call(null,inst_34997);
var inst_34999 = [cljs.core.str("not required: "),cljs.core.str(inst_34998)].join('');
var inst_35000 = figwheel.client.utils.log.call(null,inst_34999);
var state_35008__$1 = state_35008;
var statearr_35049_35125 = state_35008__$1;
(statearr_35049_35125[(2)] = inst_35000);

(statearr_35049_35125[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (6))){
var inst_34903 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
var statearr_35050_35126 = state_35008__$1;
(statearr_35050_35126[(2)] = inst_34903);

(statearr_35050_35126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (28))){
var inst_34928 = (state_35008[(26)]);
var inst_34955 = (state_35008[(2)]);
var inst_34956 = cljs.core.not_empty.call(null,inst_34928);
var state_35008__$1 = (function (){var statearr_35051 = state_35008;
(statearr_35051[(29)] = inst_34955);

return statearr_35051;
})();
if(cljs.core.truth_(inst_34956)){
var statearr_35052_35127 = state_35008__$1;
(statearr_35052_35127[(1)] = (29));

} else {
var statearr_35053_35128 = state_35008__$1;
(statearr_35053_35128[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (25))){
var inst_34926 = (state_35008[(24)]);
var inst_34942 = (state_35008[(2)]);
var inst_34943 = cljs.core.not_empty.call(null,inst_34926);
var state_35008__$1 = (function (){var statearr_35054 = state_35008;
(statearr_35054[(30)] = inst_34942);

return statearr_35054;
})();
if(cljs.core.truth_(inst_34943)){
var statearr_35055_35129 = state_35008__$1;
(statearr_35055_35129[(1)] = (26));

} else {
var statearr_35056_35130 = state_35008__$1;
(statearr_35056_35130[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (34))){
var inst_34977 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
if(cljs.core.truth_(inst_34977)){
var statearr_35057_35131 = state_35008__$1;
(statearr_35057_35131[(1)] = (38));

} else {
var statearr_35058_35132 = state_35008__$1;
(statearr_35058_35132[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (17))){
var state_35008__$1 = state_35008;
var statearr_35059_35133 = state_35008__$1;
(statearr_35059_35133[(2)] = recompile_dependents);

(statearr_35059_35133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (3))){
var state_35008__$1 = state_35008;
var statearr_35060_35134 = state_35008__$1;
(statearr_35060_35134[(2)] = null);

(statearr_35060_35134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (12))){
var inst_34899 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
var statearr_35061_35135 = state_35008__$1;
(statearr_35061_35135[(2)] = inst_34899);

(statearr_35061_35135[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (2))){
var inst_34861 = (state_35008[(13)]);
var inst_34868 = cljs.core.seq.call(null,inst_34861);
var inst_34869 = inst_34868;
var inst_34870 = null;
var inst_34871 = (0);
var inst_34872 = (0);
var state_35008__$1 = (function (){var statearr_35062 = state_35008;
(statearr_35062[(7)] = inst_34869);

(statearr_35062[(8)] = inst_34870);

(statearr_35062[(9)] = inst_34871);

(statearr_35062[(10)] = inst_34872);

return statearr_35062;
})();
var statearr_35063_35136 = state_35008__$1;
(statearr_35063_35136[(2)] = null);

(statearr_35063_35136[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (23))){
var inst_34925 = (state_35008[(23)]);
var inst_34926 = (state_35008[(24)]);
var inst_34930 = (state_35008[(25)]);
var inst_34928 = (state_35008[(26)]);
var inst_34922 = (state_35008[(19)]);
var inst_34933 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34935 = (function (){var all_files = inst_34922;
var res_SINGLEQUOTE_ = inst_34925;
var res = inst_34926;
var files_not_loaded = inst_34928;
var dependencies_that_loaded = inst_34930;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34925,inst_34926,inst_34930,inst_34928,inst_34922,inst_34933,state_val_35009,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34934){
var map__35064 = p__34934;
var map__35064__$1 = ((((!((map__35064 == null)))?((((map__35064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35064):map__35064);
var request_url = cljs.core.get.call(null,map__35064__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34925,inst_34926,inst_34930,inst_34928,inst_34922,inst_34933,state_val_35009,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34936 = cljs.core.reverse.call(null,inst_34930);
var inst_34937 = cljs.core.map.call(null,inst_34935,inst_34936);
var inst_34938 = cljs.core.pr_str.call(null,inst_34937);
var inst_34939 = figwheel.client.utils.log.call(null,inst_34938);
var state_35008__$1 = (function (){var statearr_35066 = state_35008;
(statearr_35066[(31)] = inst_34933);

return statearr_35066;
})();
var statearr_35067_35137 = state_35008__$1;
(statearr_35067_35137[(2)] = inst_34939);

(statearr_35067_35137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (35))){
var state_35008__$1 = state_35008;
var statearr_35068_35138 = state_35008__$1;
(statearr_35068_35138[(2)] = true);

(statearr_35068_35138[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (19))){
var inst_34912 = (state_35008[(12)]);
var inst_34918 = figwheel.client.file_reloading.expand_files.call(null,inst_34912);
var state_35008__$1 = state_35008;
var statearr_35069_35139 = state_35008__$1;
(statearr_35069_35139[(2)] = inst_34918);

(statearr_35069_35139[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (11))){
var state_35008__$1 = state_35008;
var statearr_35070_35140 = state_35008__$1;
(statearr_35070_35140[(2)] = null);

(statearr_35070_35140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (9))){
var inst_34901 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
var statearr_35071_35141 = state_35008__$1;
(statearr_35071_35141[(2)] = inst_34901);

(statearr_35071_35141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (5))){
var inst_34871 = (state_35008[(9)]);
var inst_34872 = (state_35008[(10)]);
var inst_34874 = (inst_34872 < inst_34871);
var inst_34875 = inst_34874;
var state_35008__$1 = state_35008;
if(cljs.core.truth_(inst_34875)){
var statearr_35072_35142 = state_35008__$1;
(statearr_35072_35142[(1)] = (7));

} else {
var statearr_35073_35143 = state_35008__$1;
(statearr_35073_35143[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (14))){
var inst_34882 = (state_35008[(22)]);
var inst_34891 = cljs.core.first.call(null,inst_34882);
var inst_34892 = figwheel.client.file_reloading.eval_body.call(null,inst_34891,opts);
var inst_34893 = cljs.core.next.call(null,inst_34882);
var inst_34869 = inst_34893;
var inst_34870 = null;
var inst_34871 = (0);
var inst_34872 = (0);
var state_35008__$1 = (function (){var statearr_35074 = state_35008;
(statearr_35074[(7)] = inst_34869);

(statearr_35074[(8)] = inst_34870);

(statearr_35074[(32)] = inst_34892);

(statearr_35074[(9)] = inst_34871);

(statearr_35074[(10)] = inst_34872);

return statearr_35074;
})();
var statearr_35075_35144 = state_35008__$1;
(statearr_35075_35144[(2)] = null);

(statearr_35075_35144[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (45))){
var state_35008__$1 = state_35008;
var statearr_35076_35145 = state_35008__$1;
(statearr_35076_35145[(2)] = null);

(statearr_35076_35145[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (26))){
var inst_34925 = (state_35008[(23)]);
var inst_34926 = (state_35008[(24)]);
var inst_34930 = (state_35008[(25)]);
var inst_34928 = (state_35008[(26)]);
var inst_34922 = (state_35008[(19)]);
var inst_34945 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34947 = (function (){var all_files = inst_34922;
var res_SINGLEQUOTE_ = inst_34925;
var res = inst_34926;
var files_not_loaded = inst_34928;
var dependencies_that_loaded = inst_34930;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34925,inst_34926,inst_34930,inst_34928,inst_34922,inst_34945,state_val_35009,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34946){
var map__35077 = p__34946;
var map__35077__$1 = ((((!((map__35077 == null)))?((((map__35077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35077):map__35077);
var namespace = cljs.core.get.call(null,map__35077__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35077__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34925,inst_34926,inst_34930,inst_34928,inst_34922,inst_34945,state_val_35009,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34948 = cljs.core.map.call(null,inst_34947,inst_34926);
var inst_34949 = cljs.core.pr_str.call(null,inst_34948);
var inst_34950 = figwheel.client.utils.log.call(null,inst_34949);
var inst_34951 = (function (){var all_files = inst_34922;
var res_SINGLEQUOTE_ = inst_34925;
var res = inst_34926;
var files_not_loaded = inst_34928;
var dependencies_that_loaded = inst_34930;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34925,inst_34926,inst_34930,inst_34928,inst_34922,inst_34945,inst_34947,inst_34948,inst_34949,inst_34950,state_val_35009,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34925,inst_34926,inst_34930,inst_34928,inst_34922,inst_34945,inst_34947,inst_34948,inst_34949,inst_34950,state_val_35009,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34952 = setTimeout(inst_34951,(10));
var state_35008__$1 = (function (){var statearr_35079 = state_35008;
(statearr_35079[(33)] = inst_34950);

(statearr_35079[(34)] = inst_34945);

return statearr_35079;
})();
var statearr_35080_35146 = state_35008__$1;
(statearr_35080_35146[(2)] = inst_34952);

(statearr_35080_35146[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (16))){
var state_35008__$1 = state_35008;
var statearr_35081_35147 = state_35008__$1;
(statearr_35081_35147[(2)] = reload_dependents);

(statearr_35081_35147[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (38))){
var inst_34962 = (state_35008[(16)]);
var inst_34979 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34962);
var state_35008__$1 = state_35008;
var statearr_35082_35148 = state_35008__$1;
(statearr_35082_35148[(2)] = inst_34979);

(statearr_35082_35148[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (30))){
var state_35008__$1 = state_35008;
var statearr_35083_35149 = state_35008__$1;
(statearr_35083_35149[(2)] = null);

(statearr_35083_35149[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (10))){
var inst_34882 = (state_35008[(22)]);
var inst_34884 = cljs.core.chunked_seq_QMARK_.call(null,inst_34882);
var state_35008__$1 = state_35008;
if(inst_34884){
var statearr_35084_35150 = state_35008__$1;
(statearr_35084_35150[(1)] = (13));

} else {
var statearr_35085_35151 = state_35008__$1;
(statearr_35085_35151[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (18))){
var inst_34916 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
if(cljs.core.truth_(inst_34916)){
var statearr_35086_35152 = state_35008__$1;
(statearr_35086_35152[(1)] = (19));

} else {
var statearr_35087_35153 = state_35008__$1;
(statearr_35087_35153[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (42))){
var state_35008__$1 = state_35008;
var statearr_35088_35154 = state_35008__$1;
(statearr_35088_35154[(2)] = null);

(statearr_35088_35154[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (37))){
var inst_34974 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
var statearr_35089_35155 = state_35008__$1;
(statearr_35089_35155[(2)] = inst_34974);

(statearr_35089_35155[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (8))){
var inst_34869 = (state_35008[(7)]);
var inst_34882 = (state_35008[(22)]);
var inst_34882__$1 = cljs.core.seq.call(null,inst_34869);
var state_35008__$1 = (function (){var statearr_35090 = state_35008;
(statearr_35090[(22)] = inst_34882__$1);

return statearr_35090;
})();
if(inst_34882__$1){
var statearr_35091_35156 = state_35008__$1;
(statearr_35091_35156[(1)] = (10));

} else {
var statearr_35092_35157 = state_35008__$1;
(statearr_35092_35157[(1)] = (11));

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
});})(c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29859__auto__,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto____0 = (function (){
var statearr_35096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35096[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto__);

(statearr_35096[(1)] = (1));

return statearr_35096;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto____1 = (function (state_35008){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_35008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e35097){if((e35097 instanceof Object)){
var ex__29863__auto__ = e35097;
var statearr_35098_35158 = state_35008;
(statearr_35098_35158[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35159 = state_35008;
state_35008 = G__35159;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto__ = function(state_35008){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto____1.call(this,state_35008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29926__auto__ = (function (){var statearr_35099 = f__29925__auto__.call(null);
(statearr_35099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto__);

return statearr_35099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto__,map__34854,map__34854__$1,opts,before_jsload,on_jsload,reload_dependents,map__34855,map__34855__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29924__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35162,link){
var map__35165 = p__35162;
var map__35165__$1 = ((((!((map__35165 == null)))?((((map__35165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35165):map__35165);
var file = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35165,map__35165__$1,file){
return (function (p1__35160_SHARP_,p2__35161_SHARP_){
if(cljs.core._EQ_.call(null,p1__35160_SHARP_,p2__35161_SHARP_)){
return p1__35160_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35165,map__35165__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35171){
var map__35172 = p__35171;
var map__35172__$1 = ((((!((map__35172 == null)))?((((map__35172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35172):map__35172);
var match_length = cljs.core.get.call(null,map__35172__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35172__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35167_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35167_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35174_SHARP_,p2__35175_SHARP_){
return cljs.core.assoc.call(null,p1__35174_SHARP_,cljs.core.get.call(null,p2__35175_SHARP_,key),p2__35175_SHARP_);
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
var loaded_f_datas_35176 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35176);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35176);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35177,p__35178){
var map__35183 = p__35177;
var map__35183__$1 = ((((!((map__35183 == null)))?((((map__35183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35183):map__35183);
var on_cssload = cljs.core.get.call(null,map__35183__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35184 = p__35178;
var map__35184__$1 = ((((!((map__35184 == null)))?((((map__35184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35184):map__35184);
var files_msg = map__35184__$1;
var files = cljs.core.get.call(null,map__35184__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1523262631037