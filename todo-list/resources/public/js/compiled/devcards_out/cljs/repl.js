// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36694){
var map__36719 = p__36694;
var map__36719__$1 = ((((!((map__36719 == null)))?((((map__36719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36719):map__36719);
var m = map__36719__$1;
var n = cljs.core.get.call(null,map__36719__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36719__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36721_36743 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36722_36744 = null;
var count__36723_36745 = (0);
var i__36724_36746 = (0);
while(true){
if((i__36724_36746 < count__36723_36745)){
var f_36747 = cljs.core._nth.call(null,chunk__36722_36744,i__36724_36746);
cljs.core.println.call(null,"  ",f_36747);

var G__36748 = seq__36721_36743;
var G__36749 = chunk__36722_36744;
var G__36750 = count__36723_36745;
var G__36751 = (i__36724_36746 + (1));
seq__36721_36743 = G__36748;
chunk__36722_36744 = G__36749;
count__36723_36745 = G__36750;
i__36724_36746 = G__36751;
continue;
} else {
var temp__4657__auto___36752 = cljs.core.seq.call(null,seq__36721_36743);
if(temp__4657__auto___36752){
var seq__36721_36753__$1 = temp__4657__auto___36752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36721_36753__$1)){
var c__25659__auto___36754 = cljs.core.chunk_first.call(null,seq__36721_36753__$1);
var G__36755 = cljs.core.chunk_rest.call(null,seq__36721_36753__$1);
var G__36756 = c__25659__auto___36754;
var G__36757 = cljs.core.count.call(null,c__25659__auto___36754);
var G__36758 = (0);
seq__36721_36743 = G__36755;
chunk__36722_36744 = G__36756;
count__36723_36745 = G__36757;
i__36724_36746 = G__36758;
continue;
} else {
var f_36759 = cljs.core.first.call(null,seq__36721_36753__$1);
cljs.core.println.call(null,"  ",f_36759);

var G__36760 = cljs.core.next.call(null,seq__36721_36753__$1);
var G__36761 = null;
var G__36762 = (0);
var G__36763 = (0);
seq__36721_36743 = G__36760;
chunk__36722_36744 = G__36761;
count__36723_36745 = G__36762;
i__36724_36746 = G__36763;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36764 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24848__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36764);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36764)))?cljs.core.second.call(null,arglists_36764):arglists_36764));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36725_36765 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36726_36766 = null;
var count__36727_36767 = (0);
var i__36728_36768 = (0);
while(true){
if((i__36728_36768 < count__36727_36767)){
var vec__36729_36769 = cljs.core._nth.call(null,chunk__36726_36766,i__36728_36768);
var name_36770 = cljs.core.nth.call(null,vec__36729_36769,(0),null);
var map__36732_36771 = cljs.core.nth.call(null,vec__36729_36769,(1),null);
var map__36732_36772__$1 = ((((!((map__36732_36771 == null)))?((((map__36732_36771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36732_36771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36732_36771):map__36732_36771);
var doc_36773 = cljs.core.get.call(null,map__36732_36772__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36774 = cljs.core.get.call(null,map__36732_36772__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36770);

cljs.core.println.call(null," ",arglists_36774);

if(cljs.core.truth_(doc_36773)){
cljs.core.println.call(null," ",doc_36773);
} else {
}

var G__36775 = seq__36725_36765;
var G__36776 = chunk__36726_36766;
var G__36777 = count__36727_36767;
var G__36778 = (i__36728_36768 + (1));
seq__36725_36765 = G__36775;
chunk__36726_36766 = G__36776;
count__36727_36767 = G__36777;
i__36728_36768 = G__36778;
continue;
} else {
var temp__4657__auto___36779 = cljs.core.seq.call(null,seq__36725_36765);
if(temp__4657__auto___36779){
var seq__36725_36780__$1 = temp__4657__auto___36779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36725_36780__$1)){
var c__25659__auto___36781 = cljs.core.chunk_first.call(null,seq__36725_36780__$1);
var G__36782 = cljs.core.chunk_rest.call(null,seq__36725_36780__$1);
var G__36783 = c__25659__auto___36781;
var G__36784 = cljs.core.count.call(null,c__25659__auto___36781);
var G__36785 = (0);
seq__36725_36765 = G__36782;
chunk__36726_36766 = G__36783;
count__36727_36767 = G__36784;
i__36728_36768 = G__36785;
continue;
} else {
var vec__36734_36786 = cljs.core.first.call(null,seq__36725_36780__$1);
var name_36787 = cljs.core.nth.call(null,vec__36734_36786,(0),null);
var map__36737_36788 = cljs.core.nth.call(null,vec__36734_36786,(1),null);
var map__36737_36789__$1 = ((((!((map__36737_36788 == null)))?((((map__36737_36788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36737_36788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36737_36788):map__36737_36788);
var doc_36790 = cljs.core.get.call(null,map__36737_36789__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36791 = cljs.core.get.call(null,map__36737_36789__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36787);

cljs.core.println.call(null," ",arglists_36791);

if(cljs.core.truth_(doc_36790)){
cljs.core.println.call(null," ",doc_36790);
} else {
}

var G__36792 = cljs.core.next.call(null,seq__36725_36780__$1);
var G__36793 = null;
var G__36794 = (0);
var G__36795 = (0);
seq__36725_36765 = G__36792;
chunk__36726_36766 = G__36793;
count__36727_36767 = G__36794;
i__36728_36768 = G__36795;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36739 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36740 = null;
var count__36741 = (0);
var i__36742 = (0);
while(true){
if((i__36742 < count__36741)){
var role = cljs.core._nth.call(null,chunk__36740,i__36742);
var temp__4657__auto___36796__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36796__$1)){
var spec_36797 = temp__4657__auto___36796__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36797));
} else {
}

var G__36798 = seq__36739;
var G__36799 = chunk__36740;
var G__36800 = count__36741;
var G__36801 = (i__36742 + (1));
seq__36739 = G__36798;
chunk__36740 = G__36799;
count__36741 = G__36800;
i__36742 = G__36801;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36739);
if(temp__4657__auto____$1){
var seq__36739__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36739__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__36739__$1);
var G__36802 = cljs.core.chunk_rest.call(null,seq__36739__$1);
var G__36803 = c__25659__auto__;
var G__36804 = cljs.core.count.call(null,c__25659__auto__);
var G__36805 = (0);
seq__36739 = G__36802;
chunk__36740 = G__36803;
count__36741 = G__36804;
i__36742 = G__36805;
continue;
} else {
var role = cljs.core.first.call(null,seq__36739__$1);
var temp__4657__auto___36806__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36806__$2)){
var spec_36807 = temp__4657__auto___36806__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36807));
} else {
}

var G__36808 = cljs.core.next.call(null,seq__36739__$1);
var G__36809 = null;
var G__36810 = (0);
var G__36811 = (0);
seq__36739 = G__36808;
chunk__36740 = G__36809;
count__36741 = G__36810;
i__36742 = G__36811;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1523267571179