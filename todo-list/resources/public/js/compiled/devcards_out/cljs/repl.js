// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36504){
var map__36529 = p__36504;
var map__36529__$1 = ((((!((map__36529 == null)))?((((map__36529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36529):map__36529);
var m = map__36529__$1;
var n = cljs.core.get.call(null,map__36529__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36529__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36531_36553 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36532_36554 = null;
var count__36533_36555 = (0);
var i__36534_36556 = (0);
while(true){
if((i__36534_36556 < count__36533_36555)){
var f_36557 = cljs.core._nth.call(null,chunk__36532_36554,i__36534_36556);
cljs.core.println.call(null,"  ",f_36557);

var G__36558 = seq__36531_36553;
var G__36559 = chunk__36532_36554;
var G__36560 = count__36533_36555;
var G__36561 = (i__36534_36556 + (1));
seq__36531_36553 = G__36558;
chunk__36532_36554 = G__36559;
count__36533_36555 = G__36560;
i__36534_36556 = G__36561;
continue;
} else {
var temp__4657__auto___36562 = cljs.core.seq.call(null,seq__36531_36553);
if(temp__4657__auto___36562){
var seq__36531_36563__$1 = temp__4657__auto___36562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36531_36563__$1)){
var c__25659__auto___36564 = cljs.core.chunk_first.call(null,seq__36531_36563__$1);
var G__36565 = cljs.core.chunk_rest.call(null,seq__36531_36563__$1);
var G__36566 = c__25659__auto___36564;
var G__36567 = cljs.core.count.call(null,c__25659__auto___36564);
var G__36568 = (0);
seq__36531_36553 = G__36565;
chunk__36532_36554 = G__36566;
count__36533_36555 = G__36567;
i__36534_36556 = G__36568;
continue;
} else {
var f_36569 = cljs.core.first.call(null,seq__36531_36563__$1);
cljs.core.println.call(null,"  ",f_36569);

var G__36570 = cljs.core.next.call(null,seq__36531_36563__$1);
var G__36571 = null;
var G__36572 = (0);
var G__36573 = (0);
seq__36531_36553 = G__36570;
chunk__36532_36554 = G__36571;
count__36533_36555 = G__36572;
i__36534_36556 = G__36573;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36574 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24848__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36574);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36574)))?cljs.core.second.call(null,arglists_36574):arglists_36574));
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
var seq__36535_36575 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36536_36576 = null;
var count__36537_36577 = (0);
var i__36538_36578 = (0);
while(true){
if((i__36538_36578 < count__36537_36577)){
var vec__36539_36579 = cljs.core._nth.call(null,chunk__36536_36576,i__36538_36578);
var name_36580 = cljs.core.nth.call(null,vec__36539_36579,(0),null);
var map__36542_36581 = cljs.core.nth.call(null,vec__36539_36579,(1),null);
var map__36542_36582__$1 = ((((!((map__36542_36581 == null)))?((((map__36542_36581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36542_36581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36542_36581):map__36542_36581);
var doc_36583 = cljs.core.get.call(null,map__36542_36582__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36584 = cljs.core.get.call(null,map__36542_36582__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36580);

cljs.core.println.call(null," ",arglists_36584);

if(cljs.core.truth_(doc_36583)){
cljs.core.println.call(null," ",doc_36583);
} else {
}

var G__36585 = seq__36535_36575;
var G__36586 = chunk__36536_36576;
var G__36587 = count__36537_36577;
var G__36588 = (i__36538_36578 + (1));
seq__36535_36575 = G__36585;
chunk__36536_36576 = G__36586;
count__36537_36577 = G__36587;
i__36538_36578 = G__36588;
continue;
} else {
var temp__4657__auto___36589 = cljs.core.seq.call(null,seq__36535_36575);
if(temp__4657__auto___36589){
var seq__36535_36590__$1 = temp__4657__auto___36589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36535_36590__$1)){
var c__25659__auto___36591 = cljs.core.chunk_first.call(null,seq__36535_36590__$1);
var G__36592 = cljs.core.chunk_rest.call(null,seq__36535_36590__$1);
var G__36593 = c__25659__auto___36591;
var G__36594 = cljs.core.count.call(null,c__25659__auto___36591);
var G__36595 = (0);
seq__36535_36575 = G__36592;
chunk__36536_36576 = G__36593;
count__36537_36577 = G__36594;
i__36538_36578 = G__36595;
continue;
} else {
var vec__36544_36596 = cljs.core.first.call(null,seq__36535_36590__$1);
var name_36597 = cljs.core.nth.call(null,vec__36544_36596,(0),null);
var map__36547_36598 = cljs.core.nth.call(null,vec__36544_36596,(1),null);
var map__36547_36599__$1 = ((((!((map__36547_36598 == null)))?((((map__36547_36598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36547_36598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36547_36598):map__36547_36598);
var doc_36600 = cljs.core.get.call(null,map__36547_36599__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36601 = cljs.core.get.call(null,map__36547_36599__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36597);

cljs.core.println.call(null," ",arglists_36601);

if(cljs.core.truth_(doc_36600)){
cljs.core.println.call(null," ",doc_36600);
} else {
}

var G__36602 = cljs.core.next.call(null,seq__36535_36590__$1);
var G__36603 = null;
var G__36604 = (0);
var G__36605 = (0);
seq__36535_36575 = G__36602;
chunk__36536_36576 = G__36603;
count__36537_36577 = G__36604;
i__36538_36578 = G__36605;
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

var seq__36549 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36550 = null;
var count__36551 = (0);
var i__36552 = (0);
while(true){
if((i__36552 < count__36551)){
var role = cljs.core._nth.call(null,chunk__36550,i__36552);
var temp__4657__auto___36606__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36606__$1)){
var spec_36607 = temp__4657__auto___36606__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36607));
} else {
}

var G__36608 = seq__36549;
var G__36609 = chunk__36550;
var G__36610 = count__36551;
var G__36611 = (i__36552 + (1));
seq__36549 = G__36608;
chunk__36550 = G__36609;
count__36551 = G__36610;
i__36552 = G__36611;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36549);
if(temp__4657__auto____$1){
var seq__36549__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36549__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__36549__$1);
var G__36612 = cljs.core.chunk_rest.call(null,seq__36549__$1);
var G__36613 = c__25659__auto__;
var G__36614 = cljs.core.count.call(null,c__25659__auto__);
var G__36615 = (0);
seq__36549 = G__36612;
chunk__36550 = G__36613;
count__36551 = G__36614;
i__36552 = G__36615;
continue;
} else {
var role = cljs.core.first.call(null,seq__36549__$1);
var temp__4657__auto___36616__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36616__$2)){
var spec_36617 = temp__4657__auto___36616__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36617));
} else {
}

var G__36618 = cljs.core.next.call(null,seq__36549__$1);
var G__36619 = null;
var G__36620 = (0);
var G__36621 = (0);
seq__36549 = G__36618;
chunk__36550 = G__36619;
count__36551 = G__36620;
i__36552 = G__36621;
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

//# sourceMappingURL=repl.js.map?rel=1523262633771