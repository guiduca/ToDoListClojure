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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34642_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34642_SHARP_));
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
var seq__34647 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34648 = null;
var count__34649 = (0);
var i__34650 = (0);
while(true){
if((i__34650 < count__34649)){
var n = cljs.core._nth.call(null,chunk__34648,i__34650);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34651 = seq__34647;
var G__34652 = chunk__34648;
var G__34653 = count__34649;
var G__34654 = (i__34650 + (1));
seq__34647 = G__34651;
chunk__34648 = G__34652;
count__34649 = G__34653;
i__34650 = G__34654;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34647);
if(temp__4657__auto__){
var seq__34647__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34647__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34647__$1);
var G__34655 = cljs.core.chunk_rest.call(null,seq__34647__$1);
var G__34656 = c__25659__auto__;
var G__34657 = cljs.core.count.call(null,c__25659__auto__);
var G__34658 = (0);
seq__34647 = G__34655;
chunk__34648 = G__34656;
count__34649 = G__34657;
i__34650 = G__34658;
continue;
} else {
var n = cljs.core.first.call(null,seq__34647__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34659 = cljs.core.next.call(null,seq__34647__$1);
var G__34660 = null;
var G__34661 = (0);
var G__34662 = (0);
seq__34647 = G__34659;
chunk__34648 = G__34660;
count__34649 = G__34661;
i__34650 = G__34662;
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

var seq__34713_34724 = cljs.core.seq.call(null,deps);
var chunk__34714_34725 = null;
var count__34715_34726 = (0);
var i__34716_34727 = (0);
while(true){
if((i__34716_34727 < count__34715_34726)){
var dep_34728 = cljs.core._nth.call(null,chunk__34714_34725,i__34716_34727);
topo_sort_helper_STAR_.call(null,dep_34728,(depth + (1)),state);

var G__34729 = seq__34713_34724;
var G__34730 = chunk__34714_34725;
var G__34731 = count__34715_34726;
var G__34732 = (i__34716_34727 + (1));
seq__34713_34724 = G__34729;
chunk__34714_34725 = G__34730;
count__34715_34726 = G__34731;
i__34716_34727 = G__34732;
continue;
} else {
var temp__4657__auto___34733 = cljs.core.seq.call(null,seq__34713_34724);
if(temp__4657__auto___34733){
var seq__34713_34734__$1 = temp__4657__auto___34733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34713_34734__$1)){
var c__25659__auto___34735 = cljs.core.chunk_first.call(null,seq__34713_34734__$1);
var G__34736 = cljs.core.chunk_rest.call(null,seq__34713_34734__$1);
var G__34737 = c__25659__auto___34735;
var G__34738 = cljs.core.count.call(null,c__25659__auto___34735);
var G__34739 = (0);
seq__34713_34724 = G__34736;
chunk__34714_34725 = G__34737;
count__34715_34726 = G__34738;
i__34716_34727 = G__34739;
continue;
} else {
var dep_34740 = cljs.core.first.call(null,seq__34713_34734__$1);
topo_sort_helper_STAR_.call(null,dep_34740,(depth + (1)),state);

var G__34741 = cljs.core.next.call(null,seq__34713_34734__$1);
var G__34742 = null;
var G__34743 = (0);
var G__34744 = (0);
seq__34713_34724 = G__34741;
chunk__34714_34725 = G__34742;
count__34715_34726 = G__34743;
i__34716_34727 = G__34744;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34717){
var vec__34721 = p__34717;
var seq__34722 = cljs.core.seq.call(null,vec__34721);
var first__34723 = cljs.core.first.call(null,seq__34722);
var seq__34722__$1 = cljs.core.next.call(null,seq__34722);
var x = first__34723;
var xs = seq__34722__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34721,seq__34722,first__34723,seq__34722__$1,x,xs,get_deps__$1){
return (function (p1__34663_SHARP_){
return clojure.set.difference.call(null,p1__34663_SHARP_,x);
});})(vec__34721,seq__34722,first__34723,seq__34722__$1,x,xs,get_deps__$1))
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
var seq__34757 = cljs.core.seq.call(null,provides);
var chunk__34758 = null;
var count__34759 = (0);
var i__34760 = (0);
while(true){
if((i__34760 < count__34759)){
var prov = cljs.core._nth.call(null,chunk__34758,i__34760);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34761_34769 = cljs.core.seq.call(null,requires);
var chunk__34762_34770 = null;
var count__34763_34771 = (0);
var i__34764_34772 = (0);
while(true){
if((i__34764_34772 < count__34763_34771)){
var req_34773 = cljs.core._nth.call(null,chunk__34762_34770,i__34764_34772);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34773,prov);

var G__34774 = seq__34761_34769;
var G__34775 = chunk__34762_34770;
var G__34776 = count__34763_34771;
var G__34777 = (i__34764_34772 + (1));
seq__34761_34769 = G__34774;
chunk__34762_34770 = G__34775;
count__34763_34771 = G__34776;
i__34764_34772 = G__34777;
continue;
} else {
var temp__4657__auto___34778 = cljs.core.seq.call(null,seq__34761_34769);
if(temp__4657__auto___34778){
var seq__34761_34779__$1 = temp__4657__auto___34778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34761_34779__$1)){
var c__25659__auto___34780 = cljs.core.chunk_first.call(null,seq__34761_34779__$1);
var G__34781 = cljs.core.chunk_rest.call(null,seq__34761_34779__$1);
var G__34782 = c__25659__auto___34780;
var G__34783 = cljs.core.count.call(null,c__25659__auto___34780);
var G__34784 = (0);
seq__34761_34769 = G__34781;
chunk__34762_34770 = G__34782;
count__34763_34771 = G__34783;
i__34764_34772 = G__34784;
continue;
} else {
var req_34785 = cljs.core.first.call(null,seq__34761_34779__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34785,prov);

var G__34786 = cljs.core.next.call(null,seq__34761_34779__$1);
var G__34787 = null;
var G__34788 = (0);
var G__34789 = (0);
seq__34761_34769 = G__34786;
chunk__34762_34770 = G__34787;
count__34763_34771 = G__34788;
i__34764_34772 = G__34789;
continue;
}
} else {
}
}
break;
}

var G__34790 = seq__34757;
var G__34791 = chunk__34758;
var G__34792 = count__34759;
var G__34793 = (i__34760 + (1));
seq__34757 = G__34790;
chunk__34758 = G__34791;
count__34759 = G__34792;
i__34760 = G__34793;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34757);
if(temp__4657__auto__){
var seq__34757__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34757__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34757__$1);
var G__34794 = cljs.core.chunk_rest.call(null,seq__34757__$1);
var G__34795 = c__25659__auto__;
var G__34796 = cljs.core.count.call(null,c__25659__auto__);
var G__34797 = (0);
seq__34757 = G__34794;
chunk__34758 = G__34795;
count__34759 = G__34796;
i__34760 = G__34797;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34757__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34765_34798 = cljs.core.seq.call(null,requires);
var chunk__34766_34799 = null;
var count__34767_34800 = (0);
var i__34768_34801 = (0);
while(true){
if((i__34768_34801 < count__34767_34800)){
var req_34802 = cljs.core._nth.call(null,chunk__34766_34799,i__34768_34801);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34802,prov);

var G__34803 = seq__34765_34798;
var G__34804 = chunk__34766_34799;
var G__34805 = count__34767_34800;
var G__34806 = (i__34768_34801 + (1));
seq__34765_34798 = G__34803;
chunk__34766_34799 = G__34804;
count__34767_34800 = G__34805;
i__34768_34801 = G__34806;
continue;
} else {
var temp__4657__auto___34807__$1 = cljs.core.seq.call(null,seq__34765_34798);
if(temp__4657__auto___34807__$1){
var seq__34765_34808__$1 = temp__4657__auto___34807__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34765_34808__$1)){
var c__25659__auto___34809 = cljs.core.chunk_first.call(null,seq__34765_34808__$1);
var G__34810 = cljs.core.chunk_rest.call(null,seq__34765_34808__$1);
var G__34811 = c__25659__auto___34809;
var G__34812 = cljs.core.count.call(null,c__25659__auto___34809);
var G__34813 = (0);
seq__34765_34798 = G__34810;
chunk__34766_34799 = G__34811;
count__34767_34800 = G__34812;
i__34768_34801 = G__34813;
continue;
} else {
var req_34814 = cljs.core.first.call(null,seq__34765_34808__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34814,prov);

var G__34815 = cljs.core.next.call(null,seq__34765_34808__$1);
var G__34816 = null;
var G__34817 = (0);
var G__34818 = (0);
seq__34765_34798 = G__34815;
chunk__34766_34799 = G__34816;
count__34767_34800 = G__34817;
i__34768_34801 = G__34818;
continue;
}
} else {
}
}
break;
}

var G__34819 = cljs.core.next.call(null,seq__34757__$1);
var G__34820 = null;
var G__34821 = (0);
var G__34822 = (0);
seq__34757 = G__34819;
chunk__34758 = G__34820;
count__34759 = G__34821;
i__34760 = G__34822;
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
var seq__34827_34831 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34828_34832 = null;
var count__34829_34833 = (0);
var i__34830_34834 = (0);
while(true){
if((i__34830_34834 < count__34829_34833)){
var ns_34835 = cljs.core._nth.call(null,chunk__34828_34832,i__34830_34834);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34835);

var G__34836 = seq__34827_34831;
var G__34837 = chunk__34828_34832;
var G__34838 = count__34829_34833;
var G__34839 = (i__34830_34834 + (1));
seq__34827_34831 = G__34836;
chunk__34828_34832 = G__34837;
count__34829_34833 = G__34838;
i__34830_34834 = G__34839;
continue;
} else {
var temp__4657__auto___34840 = cljs.core.seq.call(null,seq__34827_34831);
if(temp__4657__auto___34840){
var seq__34827_34841__$1 = temp__4657__auto___34840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34827_34841__$1)){
var c__25659__auto___34842 = cljs.core.chunk_first.call(null,seq__34827_34841__$1);
var G__34843 = cljs.core.chunk_rest.call(null,seq__34827_34841__$1);
var G__34844 = c__25659__auto___34842;
var G__34845 = cljs.core.count.call(null,c__25659__auto___34842);
var G__34846 = (0);
seq__34827_34831 = G__34843;
chunk__34828_34832 = G__34844;
count__34829_34833 = G__34845;
i__34830_34834 = G__34846;
continue;
} else {
var ns_34847 = cljs.core.first.call(null,seq__34827_34841__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34847);

var G__34848 = cljs.core.next.call(null,seq__34827_34841__$1);
var G__34849 = null;
var G__34850 = (0);
var G__34851 = (0);
seq__34827_34831 = G__34848;
chunk__34828_34832 = G__34849;
count__34829_34833 = G__34850;
i__34830_34834 = G__34851;
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
var G__34852__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34853__i = 0, G__34853__a = new Array(arguments.length -  0);
while (G__34853__i < G__34853__a.length) {G__34853__a[G__34853__i] = arguments[G__34853__i + 0]; ++G__34853__i;}
  args = new cljs.core.IndexedSeq(G__34853__a,0);
} 
return G__34852__delegate.call(this,args);};
G__34852.cljs$lang$maxFixedArity = 0;
G__34852.cljs$lang$applyTo = (function (arglist__34854){
var args = cljs.core.seq(arglist__34854);
return G__34852__delegate(args);
});
G__34852.cljs$core$IFn$_invoke$arity$variadic = G__34852__delegate;
return G__34852;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34855 = cljs.core._EQ_;
var expr__34856 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34855.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34856))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34855,expr__34856){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34855,expr__34856))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34855,expr__34856){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34858){if((e34858 instanceof Error)){
var e = e34858;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34858;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34855,expr__34856))
} else {
if(cljs.core.truth_(pred__34855.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34856))){
return ((function (pred__34855,expr__34856){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34855,expr__34856){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34855,expr__34856))
);

return deferred.addErrback(((function (deferred,pred__34855,expr__34856){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34855,expr__34856))
);
});
;})(pred__34855,expr__34856))
} else {
if(cljs.core.truth_(pred__34855.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34856))){
return ((function (pred__34855,expr__34856){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34859){if((e34859 instanceof Error)){
var e = e34859;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34859;

}
}})());
});
;})(pred__34855,expr__34856))
} else {
return ((function (pred__34855,expr__34856){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34855,expr__34856))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34860,callback){
var map__34863 = p__34860;
var map__34863__$1 = ((((!((map__34863 == null)))?((((map__34863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34863):map__34863);
var file_msg = map__34863__$1;
var request_url = cljs.core.get.call(null,map__34863__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34863,map__34863__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34863,map__34863__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto__){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto__){
return (function (state_34887){
var state_val_34888 = (state_34887[(1)]);
if((state_val_34888 === (7))){
var inst_34883 = (state_34887[(2)]);
var state_34887__$1 = state_34887;
var statearr_34889_34909 = state_34887__$1;
(statearr_34889_34909[(2)] = inst_34883);

(statearr_34889_34909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (1))){
var state_34887__$1 = state_34887;
var statearr_34890_34910 = state_34887__$1;
(statearr_34890_34910[(2)] = null);

(statearr_34890_34910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (4))){
var inst_34867 = (state_34887[(7)]);
var inst_34867__$1 = (state_34887[(2)]);
var state_34887__$1 = (function (){var statearr_34891 = state_34887;
(statearr_34891[(7)] = inst_34867__$1);

return statearr_34891;
})();
if(cljs.core.truth_(inst_34867__$1)){
var statearr_34892_34911 = state_34887__$1;
(statearr_34892_34911[(1)] = (5));

} else {
var statearr_34893_34912 = state_34887__$1;
(statearr_34893_34912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (6))){
var state_34887__$1 = state_34887;
var statearr_34894_34913 = state_34887__$1;
(statearr_34894_34913[(2)] = null);

(statearr_34894_34913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (3))){
var inst_34885 = (state_34887[(2)]);
var state_34887__$1 = state_34887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34887__$1,inst_34885);
} else {
if((state_val_34888 === (2))){
var state_34887__$1 = state_34887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34887__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34888 === (11))){
var inst_34879 = (state_34887[(2)]);
var state_34887__$1 = (function (){var statearr_34895 = state_34887;
(statearr_34895[(8)] = inst_34879);

return statearr_34895;
})();
var statearr_34896_34914 = state_34887__$1;
(statearr_34896_34914[(2)] = null);

(statearr_34896_34914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (9))){
var inst_34873 = (state_34887[(9)]);
var inst_34871 = (state_34887[(10)]);
var inst_34875 = inst_34873.call(null,inst_34871);
var state_34887__$1 = state_34887;
var statearr_34897_34915 = state_34887__$1;
(statearr_34897_34915[(2)] = inst_34875);

(statearr_34897_34915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (5))){
var inst_34867 = (state_34887[(7)]);
var inst_34869 = figwheel.client.file_reloading.blocking_load.call(null,inst_34867);
var state_34887__$1 = state_34887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34887__$1,(8),inst_34869);
} else {
if((state_val_34888 === (10))){
var inst_34871 = (state_34887[(10)]);
var inst_34877 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34871);
var state_34887__$1 = state_34887;
var statearr_34898_34916 = state_34887__$1;
(statearr_34898_34916[(2)] = inst_34877);

(statearr_34898_34916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (8))){
var inst_34873 = (state_34887[(9)]);
var inst_34867 = (state_34887[(7)]);
var inst_34871 = (state_34887[(2)]);
var inst_34872 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34873__$1 = cljs.core.get.call(null,inst_34872,inst_34867);
var state_34887__$1 = (function (){var statearr_34899 = state_34887;
(statearr_34899[(9)] = inst_34873__$1);

(statearr_34899[(10)] = inst_34871);

return statearr_34899;
})();
if(cljs.core.truth_(inst_34873__$1)){
var statearr_34900_34917 = state_34887__$1;
(statearr_34900_34917[(1)] = (9));

} else {
var statearr_34901_34918 = state_34887__$1;
(statearr_34901_34918[(1)] = (10));

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
});})(c__27796__auto__))
;
return ((function (switch__27775__auto__,c__27796__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27776__auto__ = null;
var figwheel$client$file_reloading$state_machine__27776__auto____0 = (function (){
var statearr_34905 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34905[(0)] = figwheel$client$file_reloading$state_machine__27776__auto__);

(statearr_34905[(1)] = (1));

return statearr_34905;
});
var figwheel$client$file_reloading$state_machine__27776__auto____1 = (function (state_34887){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_34887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e34906){if((e34906 instanceof Object)){
var ex__27779__auto__ = e34906;
var statearr_34907_34919 = state_34887;
(statearr_34907_34919[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34920 = state_34887;
state_34887 = G__34920;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27776__auto__ = function(state_34887){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27776__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27776__auto____1.call(this,state_34887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27776__auto____0;
figwheel$client$file_reloading$state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27776__auto____1;
return figwheel$client$file_reloading$state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto__))
})();
var state__27798__auto__ = (function (){var statearr_34908 = f__27797__auto__.call(null);
(statearr_34908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto__);

return statearr_34908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto__))
);

return c__27796__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34921,callback){
var map__34924 = p__34921;
var map__34924__$1 = ((((!((map__34924 == null)))?((((map__34924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34924):map__34924);
var file_msg = map__34924__$1;
var namespace = cljs.core.get.call(null,map__34924__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34924,map__34924__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34924,map__34924__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34926){
var map__34929 = p__34926;
var map__34929__$1 = ((((!((map__34929 == null)))?((((map__34929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34929):map__34929);
var file_msg = map__34929__$1;
var namespace = cljs.core.get.call(null,map__34929__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34931){
var map__34934 = p__34931;
var map__34934__$1 = ((((!((map__34934 == null)))?((((map__34934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34934):map__34934);
var file_msg = map__34934__$1;
var namespace = cljs.core.get.call(null,map__34934__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34936,callback){
var map__34939 = p__34936;
var map__34939__$1 = ((((!((map__34939 == null)))?((((map__34939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34939):map__34939);
var file_msg = map__34939__$1;
var request_url = cljs.core.get.call(null,map__34939__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34939__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27796__auto___35043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___35043,out){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___35043,out){
return (function (state_35025){
var state_val_35026 = (state_35025[(1)]);
if((state_val_35026 === (1))){
var inst_34999 = cljs.core.seq.call(null,files);
var inst_35000 = cljs.core.first.call(null,inst_34999);
var inst_35001 = cljs.core.next.call(null,inst_34999);
var inst_35002 = files;
var state_35025__$1 = (function (){var statearr_35027 = state_35025;
(statearr_35027[(7)] = inst_35002);

(statearr_35027[(8)] = inst_35000);

(statearr_35027[(9)] = inst_35001);

return statearr_35027;
})();
var statearr_35028_35044 = state_35025__$1;
(statearr_35028_35044[(2)] = null);

(statearr_35028_35044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35026 === (2))){
var inst_35008 = (state_35025[(10)]);
var inst_35002 = (state_35025[(7)]);
var inst_35007 = cljs.core.seq.call(null,inst_35002);
var inst_35008__$1 = cljs.core.first.call(null,inst_35007);
var inst_35009 = cljs.core.next.call(null,inst_35007);
var inst_35010 = (inst_35008__$1 == null);
var inst_35011 = cljs.core.not.call(null,inst_35010);
var state_35025__$1 = (function (){var statearr_35029 = state_35025;
(statearr_35029[(10)] = inst_35008__$1);

(statearr_35029[(11)] = inst_35009);

return statearr_35029;
})();
if(inst_35011){
var statearr_35030_35045 = state_35025__$1;
(statearr_35030_35045[(1)] = (4));

} else {
var statearr_35031_35046 = state_35025__$1;
(statearr_35031_35046[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35026 === (3))){
var inst_35023 = (state_35025[(2)]);
var state_35025__$1 = state_35025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35025__$1,inst_35023);
} else {
if((state_val_35026 === (4))){
var inst_35008 = (state_35025[(10)]);
var inst_35013 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35008);
var state_35025__$1 = state_35025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35025__$1,(7),inst_35013);
} else {
if((state_val_35026 === (5))){
var inst_35019 = cljs.core.async.close_BANG_.call(null,out);
var state_35025__$1 = state_35025;
var statearr_35032_35047 = state_35025__$1;
(statearr_35032_35047[(2)] = inst_35019);

(statearr_35032_35047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35026 === (6))){
var inst_35021 = (state_35025[(2)]);
var state_35025__$1 = state_35025;
var statearr_35033_35048 = state_35025__$1;
(statearr_35033_35048[(2)] = inst_35021);

(statearr_35033_35048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35026 === (7))){
var inst_35009 = (state_35025[(11)]);
var inst_35015 = (state_35025[(2)]);
var inst_35016 = cljs.core.async.put_BANG_.call(null,out,inst_35015);
var inst_35002 = inst_35009;
var state_35025__$1 = (function (){var statearr_35034 = state_35025;
(statearr_35034[(7)] = inst_35002);

(statearr_35034[(12)] = inst_35016);

return statearr_35034;
})();
var statearr_35035_35049 = state_35025__$1;
(statearr_35035_35049[(2)] = null);

(statearr_35035_35049[(1)] = (2));


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
});})(c__27796__auto___35043,out))
;
return ((function (switch__27775__auto__,c__27796__auto___35043,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27776__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27776__auto____0 = (function (){
var statearr_35039 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35039[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27776__auto__);

(statearr_35039[(1)] = (1));

return statearr_35039;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27776__auto____1 = (function (state_35025){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_35025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e35040){if((e35040 instanceof Object)){
var ex__27779__auto__ = e35040;
var statearr_35041_35050 = state_35025;
(statearr_35041_35050[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35051 = state_35025;
state_35025 = G__35051;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27776__auto__ = function(state_35025){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27776__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27776__auto____1.call(this,state_35025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27776__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27776__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___35043,out))
})();
var state__27798__auto__ = (function (){var statearr_35042 = f__27797__auto__.call(null);
(statearr_35042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___35043);

return statearr_35042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___35043,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35052,opts){
var map__35056 = p__35052;
var map__35056__$1 = ((((!((map__35056 == null)))?((((map__35056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35056):map__35056);
var eval_body__$1 = cljs.core.get.call(null,map__35056__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35056__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35058){var e = e35058;
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
return (function (p1__35059_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35059_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35068){
var vec__35069 = p__35068;
var k = cljs.core.nth.call(null,vec__35069,(0),null);
var v = cljs.core.nth.call(null,vec__35069,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35072){
var vec__35073 = p__35072;
var k = cljs.core.nth.call(null,vec__35073,(0),null);
var v = cljs.core.nth.call(null,vec__35073,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35079,p__35080){
var map__35327 = p__35079;
var map__35327__$1 = ((((!((map__35327 == null)))?((((map__35327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35327):map__35327);
var opts = map__35327__$1;
var before_jsload = cljs.core.get.call(null,map__35327__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35327__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35327__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35328 = p__35080;
var map__35328__$1 = ((((!((map__35328 == null)))?((((map__35328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35328):map__35328);
var msg = map__35328__$1;
var files = cljs.core.get.call(null,map__35328__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35328__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35328__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35481){
var state_val_35482 = (state_35481[(1)]);
if((state_val_35482 === (7))){
var inst_35343 = (state_35481[(7)]);
var inst_35344 = (state_35481[(8)]);
var inst_35342 = (state_35481[(9)]);
var inst_35345 = (state_35481[(10)]);
var inst_35350 = cljs.core._nth.call(null,inst_35343,inst_35345);
var inst_35351 = figwheel.client.file_reloading.eval_body.call(null,inst_35350,opts);
var inst_35352 = (inst_35345 + (1));
var tmp35483 = inst_35343;
var tmp35484 = inst_35344;
var tmp35485 = inst_35342;
var inst_35342__$1 = tmp35485;
var inst_35343__$1 = tmp35483;
var inst_35344__$1 = tmp35484;
var inst_35345__$1 = inst_35352;
var state_35481__$1 = (function (){var statearr_35486 = state_35481;
(statearr_35486[(7)] = inst_35343__$1);

(statearr_35486[(8)] = inst_35344__$1);

(statearr_35486[(9)] = inst_35342__$1);

(statearr_35486[(10)] = inst_35345__$1);

(statearr_35486[(11)] = inst_35351);

return statearr_35486;
})();
var statearr_35487_35573 = state_35481__$1;
(statearr_35487_35573[(2)] = null);

(statearr_35487_35573[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (20))){
var inst_35385 = (state_35481[(12)]);
var inst_35393 = figwheel.client.file_reloading.sort_files.call(null,inst_35385);
var state_35481__$1 = state_35481;
var statearr_35488_35574 = state_35481__$1;
(statearr_35488_35574[(2)] = inst_35393);

(statearr_35488_35574[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (27))){
var state_35481__$1 = state_35481;
var statearr_35489_35575 = state_35481__$1;
(statearr_35489_35575[(2)] = null);

(statearr_35489_35575[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (1))){
var inst_35334 = (state_35481[(13)]);
var inst_35331 = before_jsload.call(null,files);
var inst_35332 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35333 = (function (){return ((function (inst_35334,inst_35331,inst_35332,state_val_35482,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35076_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35076_SHARP_);
});
;})(inst_35334,inst_35331,inst_35332,state_val_35482,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35334__$1 = cljs.core.filter.call(null,inst_35333,files);
var inst_35335 = cljs.core.not_empty.call(null,inst_35334__$1);
var state_35481__$1 = (function (){var statearr_35490 = state_35481;
(statearr_35490[(13)] = inst_35334__$1);

(statearr_35490[(14)] = inst_35332);

(statearr_35490[(15)] = inst_35331);

return statearr_35490;
})();
if(cljs.core.truth_(inst_35335)){
var statearr_35491_35576 = state_35481__$1;
(statearr_35491_35576[(1)] = (2));

} else {
var statearr_35492_35577 = state_35481__$1;
(statearr_35492_35577[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (24))){
var state_35481__$1 = state_35481;
var statearr_35493_35578 = state_35481__$1;
(statearr_35493_35578[(2)] = null);

(statearr_35493_35578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (39))){
var inst_35435 = (state_35481[(16)]);
var state_35481__$1 = state_35481;
var statearr_35494_35579 = state_35481__$1;
(statearr_35494_35579[(2)] = inst_35435);

(statearr_35494_35579[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (46))){
var inst_35476 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
var statearr_35495_35580 = state_35481__$1;
(statearr_35495_35580[(2)] = inst_35476);

(statearr_35495_35580[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (4))){
var inst_35379 = (state_35481[(2)]);
var inst_35380 = cljs.core.List.EMPTY;
var inst_35381 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35380);
var inst_35382 = (function (){return ((function (inst_35379,inst_35380,inst_35381,state_val_35482,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35077_SHARP_){
var and__24836__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35077_SHARP_);
if(cljs.core.truth_(and__24836__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35077_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35077_SHARP_)));
} else {
return and__24836__auto__;
}
});
;})(inst_35379,inst_35380,inst_35381,state_val_35482,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35383 = cljs.core.filter.call(null,inst_35382,files);
var inst_35384 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35385 = cljs.core.concat.call(null,inst_35383,inst_35384);
var state_35481__$1 = (function (){var statearr_35496 = state_35481;
(statearr_35496[(12)] = inst_35385);

(statearr_35496[(17)] = inst_35379);

(statearr_35496[(18)] = inst_35381);

return statearr_35496;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35497_35581 = state_35481__$1;
(statearr_35497_35581[(1)] = (16));

} else {
var statearr_35498_35582 = state_35481__$1;
(statearr_35498_35582[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (15))){
var inst_35369 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
var statearr_35499_35583 = state_35481__$1;
(statearr_35499_35583[(2)] = inst_35369);

(statearr_35499_35583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (21))){
var inst_35395 = (state_35481[(19)]);
var inst_35395__$1 = (state_35481[(2)]);
var inst_35396 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35395__$1);
var state_35481__$1 = (function (){var statearr_35500 = state_35481;
(statearr_35500[(19)] = inst_35395__$1);

return statearr_35500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35481__$1,(22),inst_35396);
} else {
if((state_val_35482 === (31))){
var inst_35479 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35481__$1,inst_35479);
} else {
if((state_val_35482 === (32))){
var inst_35435 = (state_35481[(16)]);
var inst_35440 = inst_35435.cljs$lang$protocol_mask$partition0$;
var inst_35441 = (inst_35440 & (64));
var inst_35442 = inst_35435.cljs$core$ISeq$;
var inst_35443 = (inst_35441) || (inst_35442);
var state_35481__$1 = state_35481;
if(cljs.core.truth_(inst_35443)){
var statearr_35501_35584 = state_35481__$1;
(statearr_35501_35584[(1)] = (35));

} else {
var statearr_35502_35585 = state_35481__$1;
(statearr_35502_35585[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (40))){
var inst_35456 = (state_35481[(20)]);
var inst_35455 = (state_35481[(2)]);
var inst_35456__$1 = cljs.core.get.call(null,inst_35455,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35457 = cljs.core.get.call(null,inst_35455,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35458 = cljs.core.not_empty.call(null,inst_35456__$1);
var state_35481__$1 = (function (){var statearr_35503 = state_35481;
(statearr_35503[(20)] = inst_35456__$1);

(statearr_35503[(21)] = inst_35457);

return statearr_35503;
})();
if(cljs.core.truth_(inst_35458)){
var statearr_35504_35586 = state_35481__$1;
(statearr_35504_35586[(1)] = (41));

} else {
var statearr_35505_35587 = state_35481__$1;
(statearr_35505_35587[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (33))){
var state_35481__$1 = state_35481;
var statearr_35506_35588 = state_35481__$1;
(statearr_35506_35588[(2)] = false);

(statearr_35506_35588[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (13))){
var inst_35355 = (state_35481[(22)]);
var inst_35359 = cljs.core.chunk_first.call(null,inst_35355);
var inst_35360 = cljs.core.chunk_rest.call(null,inst_35355);
var inst_35361 = cljs.core.count.call(null,inst_35359);
var inst_35342 = inst_35360;
var inst_35343 = inst_35359;
var inst_35344 = inst_35361;
var inst_35345 = (0);
var state_35481__$1 = (function (){var statearr_35507 = state_35481;
(statearr_35507[(7)] = inst_35343);

(statearr_35507[(8)] = inst_35344);

(statearr_35507[(9)] = inst_35342);

(statearr_35507[(10)] = inst_35345);

return statearr_35507;
})();
var statearr_35508_35589 = state_35481__$1;
(statearr_35508_35589[(2)] = null);

(statearr_35508_35589[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (22))){
var inst_35403 = (state_35481[(23)]);
var inst_35395 = (state_35481[(19)]);
var inst_35399 = (state_35481[(24)]);
var inst_35398 = (state_35481[(25)]);
var inst_35398__$1 = (state_35481[(2)]);
var inst_35399__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35398__$1);
var inst_35400 = (function (){var all_files = inst_35395;
var res_SINGLEQUOTE_ = inst_35398__$1;
var res = inst_35399__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35403,inst_35395,inst_35399,inst_35398,inst_35398__$1,inst_35399__$1,state_val_35482,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35078_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35078_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35403,inst_35395,inst_35399,inst_35398,inst_35398__$1,inst_35399__$1,state_val_35482,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35401 = cljs.core.filter.call(null,inst_35400,inst_35398__$1);
var inst_35402 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35403__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35402);
var inst_35404 = cljs.core.not_empty.call(null,inst_35403__$1);
var state_35481__$1 = (function (){var statearr_35509 = state_35481;
(statearr_35509[(23)] = inst_35403__$1);

(statearr_35509[(26)] = inst_35401);

(statearr_35509[(24)] = inst_35399__$1);

(statearr_35509[(25)] = inst_35398__$1);

return statearr_35509;
})();
if(cljs.core.truth_(inst_35404)){
var statearr_35510_35590 = state_35481__$1;
(statearr_35510_35590[(1)] = (23));

} else {
var statearr_35511_35591 = state_35481__$1;
(statearr_35511_35591[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (36))){
var state_35481__$1 = state_35481;
var statearr_35512_35592 = state_35481__$1;
(statearr_35512_35592[(2)] = false);

(statearr_35512_35592[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (41))){
var inst_35456 = (state_35481[(20)]);
var inst_35460 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35461 = cljs.core.map.call(null,inst_35460,inst_35456);
var inst_35462 = cljs.core.pr_str.call(null,inst_35461);
var inst_35463 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35462)].join('');
var inst_35464 = figwheel.client.utils.log.call(null,inst_35463);
var state_35481__$1 = state_35481;
var statearr_35513_35593 = state_35481__$1;
(statearr_35513_35593[(2)] = inst_35464);

(statearr_35513_35593[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (43))){
var inst_35457 = (state_35481[(21)]);
var inst_35467 = (state_35481[(2)]);
var inst_35468 = cljs.core.not_empty.call(null,inst_35457);
var state_35481__$1 = (function (){var statearr_35514 = state_35481;
(statearr_35514[(27)] = inst_35467);

return statearr_35514;
})();
if(cljs.core.truth_(inst_35468)){
var statearr_35515_35594 = state_35481__$1;
(statearr_35515_35594[(1)] = (44));

} else {
var statearr_35516_35595 = state_35481__$1;
(statearr_35516_35595[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (29))){
var inst_35403 = (state_35481[(23)]);
var inst_35395 = (state_35481[(19)]);
var inst_35401 = (state_35481[(26)]);
var inst_35399 = (state_35481[(24)]);
var inst_35398 = (state_35481[(25)]);
var inst_35435 = (state_35481[(16)]);
var inst_35431 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35434 = (function (){var all_files = inst_35395;
var res_SINGLEQUOTE_ = inst_35398;
var res = inst_35399;
var files_not_loaded = inst_35401;
var dependencies_that_loaded = inst_35403;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35395,inst_35401,inst_35399,inst_35398,inst_35435,inst_35431,state_val_35482,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35433){
var map__35517 = p__35433;
var map__35517__$1 = ((((!((map__35517 == null)))?((((map__35517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35517):map__35517);
var namespace = cljs.core.get.call(null,map__35517__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35395,inst_35401,inst_35399,inst_35398,inst_35435,inst_35431,state_val_35482,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35435__$1 = cljs.core.group_by.call(null,inst_35434,inst_35401);
var inst_35437 = (inst_35435__$1 == null);
var inst_35438 = cljs.core.not.call(null,inst_35437);
var state_35481__$1 = (function (){var statearr_35519 = state_35481;
(statearr_35519[(28)] = inst_35431);

(statearr_35519[(16)] = inst_35435__$1);

return statearr_35519;
})();
if(inst_35438){
var statearr_35520_35596 = state_35481__$1;
(statearr_35520_35596[(1)] = (32));

} else {
var statearr_35521_35597 = state_35481__$1;
(statearr_35521_35597[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (44))){
var inst_35457 = (state_35481[(21)]);
var inst_35470 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35457);
var inst_35471 = cljs.core.pr_str.call(null,inst_35470);
var inst_35472 = [cljs.core.str("not required: "),cljs.core.str(inst_35471)].join('');
var inst_35473 = figwheel.client.utils.log.call(null,inst_35472);
var state_35481__$1 = state_35481;
var statearr_35522_35598 = state_35481__$1;
(statearr_35522_35598[(2)] = inst_35473);

(statearr_35522_35598[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (6))){
var inst_35376 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
var statearr_35523_35599 = state_35481__$1;
(statearr_35523_35599[(2)] = inst_35376);

(statearr_35523_35599[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (28))){
var inst_35401 = (state_35481[(26)]);
var inst_35428 = (state_35481[(2)]);
var inst_35429 = cljs.core.not_empty.call(null,inst_35401);
var state_35481__$1 = (function (){var statearr_35524 = state_35481;
(statearr_35524[(29)] = inst_35428);

return statearr_35524;
})();
if(cljs.core.truth_(inst_35429)){
var statearr_35525_35600 = state_35481__$1;
(statearr_35525_35600[(1)] = (29));

} else {
var statearr_35526_35601 = state_35481__$1;
(statearr_35526_35601[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (25))){
var inst_35399 = (state_35481[(24)]);
var inst_35415 = (state_35481[(2)]);
var inst_35416 = cljs.core.not_empty.call(null,inst_35399);
var state_35481__$1 = (function (){var statearr_35527 = state_35481;
(statearr_35527[(30)] = inst_35415);

return statearr_35527;
})();
if(cljs.core.truth_(inst_35416)){
var statearr_35528_35602 = state_35481__$1;
(statearr_35528_35602[(1)] = (26));

} else {
var statearr_35529_35603 = state_35481__$1;
(statearr_35529_35603[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (34))){
var inst_35450 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
if(cljs.core.truth_(inst_35450)){
var statearr_35530_35604 = state_35481__$1;
(statearr_35530_35604[(1)] = (38));

} else {
var statearr_35531_35605 = state_35481__$1;
(statearr_35531_35605[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (17))){
var state_35481__$1 = state_35481;
var statearr_35532_35606 = state_35481__$1;
(statearr_35532_35606[(2)] = recompile_dependents);

(statearr_35532_35606[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (3))){
var state_35481__$1 = state_35481;
var statearr_35533_35607 = state_35481__$1;
(statearr_35533_35607[(2)] = null);

(statearr_35533_35607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (12))){
var inst_35372 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
var statearr_35534_35608 = state_35481__$1;
(statearr_35534_35608[(2)] = inst_35372);

(statearr_35534_35608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (2))){
var inst_35334 = (state_35481[(13)]);
var inst_35341 = cljs.core.seq.call(null,inst_35334);
var inst_35342 = inst_35341;
var inst_35343 = null;
var inst_35344 = (0);
var inst_35345 = (0);
var state_35481__$1 = (function (){var statearr_35535 = state_35481;
(statearr_35535[(7)] = inst_35343);

(statearr_35535[(8)] = inst_35344);

(statearr_35535[(9)] = inst_35342);

(statearr_35535[(10)] = inst_35345);

return statearr_35535;
})();
var statearr_35536_35609 = state_35481__$1;
(statearr_35536_35609[(2)] = null);

(statearr_35536_35609[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (23))){
var inst_35403 = (state_35481[(23)]);
var inst_35395 = (state_35481[(19)]);
var inst_35401 = (state_35481[(26)]);
var inst_35399 = (state_35481[(24)]);
var inst_35398 = (state_35481[(25)]);
var inst_35406 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35408 = (function (){var all_files = inst_35395;
var res_SINGLEQUOTE_ = inst_35398;
var res = inst_35399;
var files_not_loaded = inst_35401;
var dependencies_that_loaded = inst_35403;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35395,inst_35401,inst_35399,inst_35398,inst_35406,state_val_35482,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35407){
var map__35537 = p__35407;
var map__35537__$1 = ((((!((map__35537 == null)))?((((map__35537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35537):map__35537);
var request_url = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35395,inst_35401,inst_35399,inst_35398,inst_35406,state_val_35482,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35409 = cljs.core.reverse.call(null,inst_35403);
var inst_35410 = cljs.core.map.call(null,inst_35408,inst_35409);
var inst_35411 = cljs.core.pr_str.call(null,inst_35410);
var inst_35412 = figwheel.client.utils.log.call(null,inst_35411);
var state_35481__$1 = (function (){var statearr_35539 = state_35481;
(statearr_35539[(31)] = inst_35406);

return statearr_35539;
})();
var statearr_35540_35610 = state_35481__$1;
(statearr_35540_35610[(2)] = inst_35412);

(statearr_35540_35610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (35))){
var state_35481__$1 = state_35481;
var statearr_35541_35611 = state_35481__$1;
(statearr_35541_35611[(2)] = true);

(statearr_35541_35611[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (19))){
var inst_35385 = (state_35481[(12)]);
var inst_35391 = figwheel.client.file_reloading.expand_files.call(null,inst_35385);
var state_35481__$1 = state_35481;
var statearr_35542_35612 = state_35481__$1;
(statearr_35542_35612[(2)] = inst_35391);

(statearr_35542_35612[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (11))){
var state_35481__$1 = state_35481;
var statearr_35543_35613 = state_35481__$1;
(statearr_35543_35613[(2)] = null);

(statearr_35543_35613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (9))){
var inst_35374 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
var statearr_35544_35614 = state_35481__$1;
(statearr_35544_35614[(2)] = inst_35374);

(statearr_35544_35614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (5))){
var inst_35344 = (state_35481[(8)]);
var inst_35345 = (state_35481[(10)]);
var inst_35347 = (inst_35345 < inst_35344);
var inst_35348 = inst_35347;
var state_35481__$1 = state_35481;
if(cljs.core.truth_(inst_35348)){
var statearr_35545_35615 = state_35481__$1;
(statearr_35545_35615[(1)] = (7));

} else {
var statearr_35546_35616 = state_35481__$1;
(statearr_35546_35616[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (14))){
var inst_35355 = (state_35481[(22)]);
var inst_35364 = cljs.core.first.call(null,inst_35355);
var inst_35365 = figwheel.client.file_reloading.eval_body.call(null,inst_35364,opts);
var inst_35366 = cljs.core.next.call(null,inst_35355);
var inst_35342 = inst_35366;
var inst_35343 = null;
var inst_35344 = (0);
var inst_35345 = (0);
var state_35481__$1 = (function (){var statearr_35547 = state_35481;
(statearr_35547[(7)] = inst_35343);

(statearr_35547[(8)] = inst_35344);

(statearr_35547[(9)] = inst_35342);

(statearr_35547[(32)] = inst_35365);

(statearr_35547[(10)] = inst_35345);

return statearr_35547;
})();
var statearr_35548_35617 = state_35481__$1;
(statearr_35548_35617[(2)] = null);

(statearr_35548_35617[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (45))){
var state_35481__$1 = state_35481;
var statearr_35549_35618 = state_35481__$1;
(statearr_35549_35618[(2)] = null);

(statearr_35549_35618[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (26))){
var inst_35403 = (state_35481[(23)]);
var inst_35395 = (state_35481[(19)]);
var inst_35401 = (state_35481[(26)]);
var inst_35399 = (state_35481[(24)]);
var inst_35398 = (state_35481[(25)]);
var inst_35418 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35420 = (function (){var all_files = inst_35395;
var res_SINGLEQUOTE_ = inst_35398;
var res = inst_35399;
var files_not_loaded = inst_35401;
var dependencies_that_loaded = inst_35403;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35395,inst_35401,inst_35399,inst_35398,inst_35418,state_val_35482,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35419){
var map__35550 = p__35419;
var map__35550__$1 = ((((!((map__35550 == null)))?((((map__35550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35550):map__35550);
var namespace = cljs.core.get.call(null,map__35550__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35550__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35395,inst_35401,inst_35399,inst_35398,inst_35418,state_val_35482,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35421 = cljs.core.map.call(null,inst_35420,inst_35399);
var inst_35422 = cljs.core.pr_str.call(null,inst_35421);
var inst_35423 = figwheel.client.utils.log.call(null,inst_35422);
var inst_35424 = (function (){var all_files = inst_35395;
var res_SINGLEQUOTE_ = inst_35398;
var res = inst_35399;
var files_not_loaded = inst_35401;
var dependencies_that_loaded = inst_35403;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35395,inst_35401,inst_35399,inst_35398,inst_35418,inst_35420,inst_35421,inst_35422,inst_35423,state_val_35482,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35403,inst_35395,inst_35401,inst_35399,inst_35398,inst_35418,inst_35420,inst_35421,inst_35422,inst_35423,state_val_35482,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35425 = setTimeout(inst_35424,(10));
var state_35481__$1 = (function (){var statearr_35552 = state_35481;
(statearr_35552[(33)] = inst_35423);

(statearr_35552[(34)] = inst_35418);

return statearr_35552;
})();
var statearr_35553_35619 = state_35481__$1;
(statearr_35553_35619[(2)] = inst_35425);

(statearr_35553_35619[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (16))){
var state_35481__$1 = state_35481;
var statearr_35554_35620 = state_35481__$1;
(statearr_35554_35620[(2)] = reload_dependents);

(statearr_35554_35620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (38))){
var inst_35435 = (state_35481[(16)]);
var inst_35452 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35435);
var state_35481__$1 = state_35481;
var statearr_35555_35621 = state_35481__$1;
(statearr_35555_35621[(2)] = inst_35452);

(statearr_35555_35621[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (30))){
var state_35481__$1 = state_35481;
var statearr_35556_35622 = state_35481__$1;
(statearr_35556_35622[(2)] = null);

(statearr_35556_35622[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (10))){
var inst_35355 = (state_35481[(22)]);
var inst_35357 = cljs.core.chunked_seq_QMARK_.call(null,inst_35355);
var state_35481__$1 = state_35481;
if(inst_35357){
var statearr_35557_35623 = state_35481__$1;
(statearr_35557_35623[(1)] = (13));

} else {
var statearr_35558_35624 = state_35481__$1;
(statearr_35558_35624[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (18))){
var inst_35389 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
if(cljs.core.truth_(inst_35389)){
var statearr_35559_35625 = state_35481__$1;
(statearr_35559_35625[(1)] = (19));

} else {
var statearr_35560_35626 = state_35481__$1;
(statearr_35560_35626[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (42))){
var state_35481__$1 = state_35481;
var statearr_35561_35627 = state_35481__$1;
(statearr_35561_35627[(2)] = null);

(statearr_35561_35627[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (37))){
var inst_35447 = (state_35481[(2)]);
var state_35481__$1 = state_35481;
var statearr_35562_35628 = state_35481__$1;
(statearr_35562_35628[(2)] = inst_35447);

(statearr_35562_35628[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35482 === (8))){
var inst_35342 = (state_35481[(9)]);
var inst_35355 = (state_35481[(22)]);
var inst_35355__$1 = cljs.core.seq.call(null,inst_35342);
var state_35481__$1 = (function (){var statearr_35563 = state_35481;
(statearr_35563[(22)] = inst_35355__$1);

return statearr_35563;
})();
if(inst_35355__$1){
var statearr_35564_35629 = state_35481__$1;
(statearr_35564_35629[(1)] = (10));

} else {
var statearr_35565_35630 = state_35481__$1;
(statearr_35565_35630[(1)] = (11));

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
});})(c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27775__auto__,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27776__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27776__auto____0 = (function (){
var statearr_35569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35569[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27776__auto__);

(statearr_35569[(1)] = (1));

return statearr_35569;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27776__auto____1 = (function (state_35481){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_35481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e35570){if((e35570 instanceof Object)){
var ex__27779__auto__ = e35570;
var statearr_35571_35631 = state_35481;
(statearr_35571_35631[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35632 = state_35481;
state_35481 = G__35632;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27776__auto__ = function(state_35481){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27776__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27776__auto____1.call(this,state_35481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27776__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27776__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27798__auto__ = (function (){var statearr_35572 = f__27797__auto__.call(null);
(statearr_35572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto__);

return statearr_35572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto__,map__35327,map__35327__$1,opts,before_jsload,on_jsload,reload_dependents,map__35328,map__35328__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27796__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35635,link){
var map__35638 = p__35635;
var map__35638__$1 = ((((!((map__35638 == null)))?((((map__35638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35638):map__35638);
var file = cljs.core.get.call(null,map__35638__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35638,map__35638__$1,file){
return (function (p1__35633_SHARP_,p2__35634_SHARP_){
if(cljs.core._EQ_.call(null,p1__35633_SHARP_,p2__35634_SHARP_)){
return p1__35633_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35638,map__35638__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35644){
var map__35645 = p__35644;
var map__35645__$1 = ((((!((map__35645 == null)))?((((map__35645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35645):map__35645);
var match_length = cljs.core.get.call(null,map__35645__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35645__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35640_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35640_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35647_SHARP_,p2__35648_SHARP_){
return cljs.core.assoc.call(null,p1__35647_SHARP_,cljs.core.get.call(null,p2__35648_SHARP_,key),p2__35648_SHARP_);
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
var loaded_f_datas_35649 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35649);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35649);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35650,p__35651){
var map__35656 = p__35650;
var map__35656__$1 = ((((!((map__35656 == null)))?((((map__35656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35656):map__35656);
var on_cssload = cljs.core.get.call(null,map__35656__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35657 = p__35651;
var map__35657__$1 = ((((!((map__35657 == null)))?((((map__35657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35657):map__35657);
var files_msg = map__35657__$1;
var files = cljs.core.get.call(null,map__35657__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1523267568419