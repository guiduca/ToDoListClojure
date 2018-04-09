// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29715){
var map__29740 = p__29715;
var map__29740__$1 = ((((!((map__29740 == null)))?((((map__29740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29740):map__29740);
var m = map__29740__$1;
var n = cljs.core.get.call(null,map__29740__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29740__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29742_29764 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29743_29765 = null;
var count__29744_29766 = (0);
var i__29745_29767 = (0);
while(true){
if((i__29745_29767 < count__29744_29766)){
var f_29768 = cljs.core._nth.call(null,chunk__29743_29765,i__29745_29767);
cljs.core.println.call(null,"  ",f_29768);

var G__29769 = seq__29742_29764;
var G__29770 = chunk__29743_29765;
var G__29771 = count__29744_29766;
var G__29772 = (i__29745_29767 + (1));
seq__29742_29764 = G__29769;
chunk__29743_29765 = G__29770;
count__29744_29766 = G__29771;
i__29745_29767 = G__29772;
continue;
} else {
var temp__4657__auto___29773 = cljs.core.seq.call(null,seq__29742_29764);
if(temp__4657__auto___29773){
var seq__29742_29774__$1 = temp__4657__auto___29773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29742_29774__$1)){
var c__25659__auto___29775 = cljs.core.chunk_first.call(null,seq__29742_29774__$1);
var G__29776 = cljs.core.chunk_rest.call(null,seq__29742_29774__$1);
var G__29777 = c__25659__auto___29775;
var G__29778 = cljs.core.count.call(null,c__25659__auto___29775);
var G__29779 = (0);
seq__29742_29764 = G__29776;
chunk__29743_29765 = G__29777;
count__29744_29766 = G__29778;
i__29745_29767 = G__29779;
continue;
} else {
var f_29780 = cljs.core.first.call(null,seq__29742_29774__$1);
cljs.core.println.call(null,"  ",f_29780);

var G__29781 = cljs.core.next.call(null,seq__29742_29774__$1);
var G__29782 = null;
var G__29783 = (0);
var G__29784 = (0);
seq__29742_29764 = G__29781;
chunk__29743_29765 = G__29782;
count__29744_29766 = G__29783;
i__29745_29767 = G__29784;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29785 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24848__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29785);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29785)))?cljs.core.second.call(null,arglists_29785):arglists_29785));
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
var seq__29746_29786 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29747_29787 = null;
var count__29748_29788 = (0);
var i__29749_29789 = (0);
while(true){
if((i__29749_29789 < count__29748_29788)){
var vec__29750_29790 = cljs.core._nth.call(null,chunk__29747_29787,i__29749_29789);
var name_29791 = cljs.core.nth.call(null,vec__29750_29790,(0),null);
var map__29753_29792 = cljs.core.nth.call(null,vec__29750_29790,(1),null);
var map__29753_29793__$1 = ((((!((map__29753_29792 == null)))?((((map__29753_29792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29753_29792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29753_29792):map__29753_29792);
var doc_29794 = cljs.core.get.call(null,map__29753_29793__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29795 = cljs.core.get.call(null,map__29753_29793__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29791);

cljs.core.println.call(null," ",arglists_29795);

if(cljs.core.truth_(doc_29794)){
cljs.core.println.call(null," ",doc_29794);
} else {
}

var G__29796 = seq__29746_29786;
var G__29797 = chunk__29747_29787;
var G__29798 = count__29748_29788;
var G__29799 = (i__29749_29789 + (1));
seq__29746_29786 = G__29796;
chunk__29747_29787 = G__29797;
count__29748_29788 = G__29798;
i__29749_29789 = G__29799;
continue;
} else {
var temp__4657__auto___29800 = cljs.core.seq.call(null,seq__29746_29786);
if(temp__4657__auto___29800){
var seq__29746_29801__$1 = temp__4657__auto___29800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29746_29801__$1)){
var c__25659__auto___29802 = cljs.core.chunk_first.call(null,seq__29746_29801__$1);
var G__29803 = cljs.core.chunk_rest.call(null,seq__29746_29801__$1);
var G__29804 = c__25659__auto___29802;
var G__29805 = cljs.core.count.call(null,c__25659__auto___29802);
var G__29806 = (0);
seq__29746_29786 = G__29803;
chunk__29747_29787 = G__29804;
count__29748_29788 = G__29805;
i__29749_29789 = G__29806;
continue;
} else {
var vec__29755_29807 = cljs.core.first.call(null,seq__29746_29801__$1);
var name_29808 = cljs.core.nth.call(null,vec__29755_29807,(0),null);
var map__29758_29809 = cljs.core.nth.call(null,vec__29755_29807,(1),null);
var map__29758_29810__$1 = ((((!((map__29758_29809 == null)))?((((map__29758_29809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29758_29809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29758_29809):map__29758_29809);
var doc_29811 = cljs.core.get.call(null,map__29758_29810__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29812 = cljs.core.get.call(null,map__29758_29810__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29808);

cljs.core.println.call(null," ",arglists_29812);

if(cljs.core.truth_(doc_29811)){
cljs.core.println.call(null," ",doc_29811);
} else {
}

var G__29813 = cljs.core.next.call(null,seq__29746_29801__$1);
var G__29814 = null;
var G__29815 = (0);
var G__29816 = (0);
seq__29746_29786 = G__29813;
chunk__29747_29787 = G__29814;
count__29748_29788 = G__29815;
i__29749_29789 = G__29816;
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

var seq__29760 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29761 = null;
var count__29762 = (0);
var i__29763 = (0);
while(true){
if((i__29763 < count__29762)){
var role = cljs.core._nth.call(null,chunk__29761,i__29763);
var temp__4657__auto___29817__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29817__$1)){
var spec_29818 = temp__4657__auto___29817__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29818));
} else {
}

var G__29819 = seq__29760;
var G__29820 = chunk__29761;
var G__29821 = count__29762;
var G__29822 = (i__29763 + (1));
seq__29760 = G__29819;
chunk__29761 = G__29820;
count__29762 = G__29821;
i__29763 = G__29822;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__29760);
if(temp__4657__auto____$1){
var seq__29760__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29760__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__29760__$1);
var G__29823 = cljs.core.chunk_rest.call(null,seq__29760__$1);
var G__29824 = c__25659__auto__;
var G__29825 = cljs.core.count.call(null,c__25659__auto__);
var G__29826 = (0);
seq__29760 = G__29823;
chunk__29761 = G__29824;
count__29762 = G__29825;
i__29763 = G__29826;
continue;
} else {
var role = cljs.core.first.call(null,seq__29760__$1);
var temp__4657__auto___29827__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29827__$2)){
var spec_29828 = temp__4657__auto___29827__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29828));
} else {
}

var G__29829 = cljs.core.next.call(null,seq__29760__$1);
var G__29830 = null;
var G__29831 = (0);
var G__29832 = (0);
seq__29760 = G__29829;
chunk__29761 = G__29830;
count__29762 = G__29831;
i__29763 = G__29832;
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

//# sourceMappingURL=repl.js.map?rel=1523250171677