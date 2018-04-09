// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__26736__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__26733 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__26734 = cljs.core.seq.call(null,vec__26733);
var first__26735 = cljs.core.first.call(null,seq__26734);
var seq__26734__$1 = cljs.core.next.call(null,seq__26734);
var tag = first__26735;
var body = seq__26734__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__26736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26737__i = 0, G__26737__a = new Array(arguments.length -  0);
while (G__26737__i < G__26737__a.length) {G__26737__a[G__26737__i] = arguments[G__26737__i + 0]; ++G__26737__i;}
  args = new cljs.core.IndexedSeq(G__26737__a,0);
} 
return G__26736__delegate.call(this,args);};
G__26736.cljs$lang$maxFixedArity = 0;
G__26736.cljs$lang$applyTo = (function (arglist__26738){
var args = cljs.core.seq(arglist__26738);
return G__26736__delegate(args);
});
G__26736.cljs$core$IFn$_invoke$arity$variadic = G__26736__delegate;
return G__26736;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25628__auto__ = (function sablono$core$update_arglists_$_iter__26743(s__26744){
return (new cljs.core.LazySeq(null,(function (){
var s__26744__$1 = s__26744;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26744__$1);
if(temp__4657__auto__){
var s__26744__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26744__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__26744__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__26746 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__26745 = (0);
while(true){
if((i__26745 < size__25627__auto__)){
var args = cljs.core._nth.call(null,c__25626__auto__,i__26745);
cljs.core.chunk_append.call(null,b__26746,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26747 = (i__26745 + (1));
i__26745 = G__26747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26746),sablono$core$update_arglists_$_iter__26743.call(null,cljs.core.chunk_rest.call(null,s__26744__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26746),null);
}
} else {
var args = cljs.core.first.call(null,s__26744__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__26743.call(null,cljs.core.rest.call(null,s__26744__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25930__auto__ = [];
var len__25923__auto___26753 = arguments.length;
var i__25924__auto___26754 = (0);
while(true){
if((i__25924__auto___26754 < len__25923__auto___26753)){
args__25930__auto__.push((arguments[i__25924__auto___26754]));

var G__26755 = (i__25924__auto___26754 + (1));
i__25924__auto___26754 = G__26755;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25628__auto__ = (function sablono$core$iter__26749(s__26750){
return (new cljs.core.LazySeq(null,(function (){
var s__26750__$1 = s__26750;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26750__$1);
if(temp__4657__auto__){
var s__26750__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26750__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__26750__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__26752 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__26751 = (0);
while(true){
if((i__26751 < size__25627__auto__)){
var style = cljs.core._nth.call(null,c__25626__auto__,i__26751);
cljs.core.chunk_append.call(null,b__26752,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26756 = (i__26751 + (1));
i__26751 = G__26756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26752),sablono$core$iter__26749.call(null,cljs.core.chunk_rest.call(null,s__26750__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26752),null);
}
} else {
var style = cljs.core.first.call(null,s__26750__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__26749.call(null,cljs.core.rest.call(null,s__26750__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq26748){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26748));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to26757 = (function sablono$core$link_to26757(var_args){
var args__25930__auto__ = [];
var len__25923__auto___26760 = arguments.length;
var i__25924__auto___26761 = (0);
while(true){
if((i__25924__auto___26761 < len__25923__auto___26760)){
args__25930__auto__.push((arguments[i__25924__auto___26761]));

var G__26762 = (i__25924__auto___26761 + (1));
i__25924__auto___26761 = G__26762;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to26757.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.link_to26757.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to26757.cljs$lang$maxFixedArity = (1);

sablono.core.link_to26757.cljs$lang$applyTo = (function (seq26758){
var G__26759 = cljs.core.first.call(null,seq26758);
var seq26758__$1 = cljs.core.next.call(null,seq26758);
return sablono.core.link_to26757.cljs$core$IFn$_invoke$arity$variadic(G__26759,seq26758__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26757);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to26763 = (function sablono$core$mail_to26763(var_args){
var args__25930__auto__ = [];
var len__25923__auto___26770 = arguments.length;
var i__25924__auto___26771 = (0);
while(true){
if((i__25924__auto___26771 < len__25923__auto___26770)){
args__25930__auto__.push((arguments[i__25924__auto___26771]));

var G__26772 = (i__25924__auto___26771 + (1));
i__25924__auto___26771 = G__26772;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to26763.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.mail_to26763.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__26766){
var vec__26767 = p__26766;
var content = cljs.core.nth.call(null,vec__26767,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24848__auto__ = content;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to26763.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to26763.cljs$lang$applyTo = (function (seq26764){
var G__26765 = cljs.core.first.call(null,seq26764);
var seq26764__$1 = cljs.core.next.call(null,seq26764);
return sablono.core.mail_to26763.cljs$core$IFn$_invoke$arity$variadic(G__26765,seq26764__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26763);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list26773 = (function sablono$core$unordered_list26773(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25628__auto__ = (function sablono$core$unordered_list26773_$_iter__26778(s__26779){
return (new cljs.core.LazySeq(null,(function (){
var s__26779__$1 = s__26779;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26779__$1);
if(temp__4657__auto__){
var s__26779__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26779__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__26779__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__26781 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__26780 = (0);
while(true){
if((i__26780 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__26780);
cljs.core.chunk_append.call(null,b__26781,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26782 = (i__26780 + (1));
i__26780 = G__26782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26781),sablono$core$unordered_list26773_$_iter__26778.call(null,cljs.core.chunk_rest.call(null,s__26779__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26781),null);
}
} else {
var x = cljs.core.first.call(null,s__26779__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list26773_$_iter__26778.call(null,cljs.core.rest.call(null,s__26779__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26773);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list26783 = (function sablono$core$ordered_list26783(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25628__auto__ = (function sablono$core$ordered_list26783_$_iter__26788(s__26789){
return (new cljs.core.LazySeq(null,(function (){
var s__26789__$1 = s__26789;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26789__$1);
if(temp__4657__auto__){
var s__26789__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26789__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__26789__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__26791 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__26790 = (0);
while(true){
if((i__26790 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__26790);
cljs.core.chunk_append.call(null,b__26791,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26792 = (i__26790 + (1));
i__26790 = G__26792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26791),sablono$core$ordered_list26783_$_iter__26788.call(null,cljs.core.chunk_rest.call(null,s__26789__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26791),null);
}
} else {
var x = cljs.core.first.call(null,s__26789__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list26783_$_iter__26788.call(null,cljs.core.rest.call(null,s__26789__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26783);
/**
 * Create an image element.
 */
sablono.core.image26793 = (function sablono$core$image26793(var_args){
var args26794 = [];
var len__25923__auto___26797 = arguments.length;
var i__25924__auto___26798 = (0);
while(true){
if((i__25924__auto___26798 < len__25923__auto___26797)){
args26794.push((arguments[i__25924__auto___26798]));

var G__26799 = (i__25924__auto___26798 + (1));
i__25924__auto___26798 = G__26799;
continue;
} else {
}
break;
}

var G__26796 = args26794.length;
switch (G__26796) {
case 1:
return sablono.core.image26793.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image26793.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26794.length)].join('')));

}
});

sablono.core.image26793.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image26793.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image26793.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26793);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__26801_SHARP_,p2__26802_SHARP_){
return [cljs.core.str(p1__26801_SHARP_),cljs.core.str("["),cljs.core.str(p2__26802_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__26803_SHARP_,p2__26804_SHARP_){
return [cljs.core.str(p1__26803_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26804_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field26805 = (function sablono$core$color_field26805(var_args){
var args26806 = [];
var len__25923__auto___26873 = arguments.length;
var i__25924__auto___26874 = (0);
while(true){
if((i__25924__auto___26874 < len__25923__auto___26873)){
args26806.push((arguments[i__25924__auto___26874]));

var G__26875 = (i__25924__auto___26874 + (1));
i__25924__auto___26874 = G__26875;
continue;
} else {
}
break;
}

var G__26808 = args26806.length;
switch (G__26808) {
case 1:
return sablono.core.color_field26805.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field26805.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26806.length)].join('')));

}
});

sablono.core.color_field26805.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.color_field26805.call(null,name__26720__auto__,null);
});

sablono.core.color_field26805.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.color_field26805.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26805);

/**
 * Creates a date input field.
 */
sablono.core.date_field26809 = (function sablono$core$date_field26809(var_args){
var args26810 = [];
var len__25923__auto___26877 = arguments.length;
var i__25924__auto___26878 = (0);
while(true){
if((i__25924__auto___26878 < len__25923__auto___26877)){
args26810.push((arguments[i__25924__auto___26878]));

var G__26879 = (i__25924__auto___26878 + (1));
i__25924__auto___26878 = G__26879;
continue;
} else {
}
break;
}

var G__26812 = args26810.length;
switch (G__26812) {
case 1:
return sablono.core.date_field26809.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26809.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26810.length)].join('')));

}
});

sablono.core.date_field26809.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.date_field26809.call(null,name__26720__auto__,null);
});

sablono.core.date_field26809.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.date_field26809.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26809);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26813 = (function sablono$core$datetime_field26813(var_args){
var args26814 = [];
var len__25923__auto___26881 = arguments.length;
var i__25924__auto___26882 = (0);
while(true){
if((i__25924__auto___26882 < len__25923__auto___26881)){
args26814.push((arguments[i__25924__auto___26882]));

var G__26883 = (i__25924__auto___26882 + (1));
i__25924__auto___26882 = G__26883;
continue;
} else {
}
break;
}

var G__26816 = args26814.length;
switch (G__26816) {
case 1:
return sablono.core.datetime_field26813.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26813.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26814.length)].join('')));

}
});

sablono.core.datetime_field26813.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.datetime_field26813.call(null,name__26720__auto__,null);
});

sablono.core.datetime_field26813.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.datetime_field26813.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26813);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26817 = (function sablono$core$datetime_local_field26817(var_args){
var args26818 = [];
var len__25923__auto___26885 = arguments.length;
var i__25924__auto___26886 = (0);
while(true){
if((i__25924__auto___26886 < len__25923__auto___26885)){
args26818.push((arguments[i__25924__auto___26886]));

var G__26887 = (i__25924__auto___26886 + (1));
i__25924__auto___26886 = G__26887;
continue;
} else {
}
break;
}

var G__26820 = args26818.length;
switch (G__26820) {
case 1:
return sablono.core.datetime_local_field26817.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26817.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26818.length)].join('')));

}
});

sablono.core.datetime_local_field26817.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.datetime_local_field26817.call(null,name__26720__auto__,null);
});

sablono.core.datetime_local_field26817.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.datetime_local_field26817.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26817);

/**
 * Creates a email input field.
 */
sablono.core.email_field26821 = (function sablono$core$email_field26821(var_args){
var args26822 = [];
var len__25923__auto___26889 = arguments.length;
var i__25924__auto___26890 = (0);
while(true){
if((i__25924__auto___26890 < len__25923__auto___26889)){
args26822.push((arguments[i__25924__auto___26890]));

var G__26891 = (i__25924__auto___26890 + (1));
i__25924__auto___26890 = G__26891;
continue;
} else {
}
break;
}

var G__26824 = args26822.length;
switch (G__26824) {
case 1:
return sablono.core.email_field26821.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26821.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26822.length)].join('')));

}
});

sablono.core.email_field26821.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.email_field26821.call(null,name__26720__auto__,null);
});

sablono.core.email_field26821.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.email_field26821.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26821);

/**
 * Creates a file input field.
 */
sablono.core.file_field26825 = (function sablono$core$file_field26825(var_args){
var args26826 = [];
var len__25923__auto___26893 = arguments.length;
var i__25924__auto___26894 = (0);
while(true){
if((i__25924__auto___26894 < len__25923__auto___26893)){
args26826.push((arguments[i__25924__auto___26894]));

var G__26895 = (i__25924__auto___26894 + (1));
i__25924__auto___26894 = G__26895;
continue;
} else {
}
break;
}

var G__26828 = args26826.length;
switch (G__26828) {
case 1:
return sablono.core.file_field26825.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26825.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26826.length)].join('')));

}
});

sablono.core.file_field26825.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.file_field26825.call(null,name__26720__auto__,null);
});

sablono.core.file_field26825.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.file_field26825.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26825);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26829 = (function sablono$core$hidden_field26829(var_args){
var args26830 = [];
var len__25923__auto___26897 = arguments.length;
var i__25924__auto___26898 = (0);
while(true){
if((i__25924__auto___26898 < len__25923__auto___26897)){
args26830.push((arguments[i__25924__auto___26898]));

var G__26899 = (i__25924__auto___26898 + (1));
i__25924__auto___26898 = G__26899;
continue;
} else {
}
break;
}

var G__26832 = args26830.length;
switch (G__26832) {
case 1:
return sablono.core.hidden_field26829.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26829.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26830.length)].join('')));

}
});

sablono.core.hidden_field26829.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.hidden_field26829.call(null,name__26720__auto__,null);
});

sablono.core.hidden_field26829.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.hidden_field26829.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26829);

/**
 * Creates a month input field.
 */
sablono.core.month_field26833 = (function sablono$core$month_field26833(var_args){
var args26834 = [];
var len__25923__auto___26901 = arguments.length;
var i__25924__auto___26902 = (0);
while(true){
if((i__25924__auto___26902 < len__25923__auto___26901)){
args26834.push((arguments[i__25924__auto___26902]));

var G__26903 = (i__25924__auto___26902 + (1));
i__25924__auto___26902 = G__26903;
continue;
} else {
}
break;
}

var G__26836 = args26834.length;
switch (G__26836) {
case 1:
return sablono.core.month_field26833.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26833.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26834.length)].join('')));

}
});

sablono.core.month_field26833.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.month_field26833.call(null,name__26720__auto__,null);
});

sablono.core.month_field26833.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.month_field26833.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26833);

/**
 * Creates a number input field.
 */
sablono.core.number_field26837 = (function sablono$core$number_field26837(var_args){
var args26838 = [];
var len__25923__auto___26905 = arguments.length;
var i__25924__auto___26906 = (0);
while(true){
if((i__25924__auto___26906 < len__25923__auto___26905)){
args26838.push((arguments[i__25924__auto___26906]));

var G__26907 = (i__25924__auto___26906 + (1));
i__25924__auto___26906 = G__26907;
continue;
} else {
}
break;
}

var G__26840 = args26838.length;
switch (G__26840) {
case 1:
return sablono.core.number_field26837.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26837.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26838.length)].join('')));

}
});

sablono.core.number_field26837.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.number_field26837.call(null,name__26720__auto__,null);
});

sablono.core.number_field26837.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.number_field26837.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26837);

/**
 * Creates a password input field.
 */
sablono.core.password_field26841 = (function sablono$core$password_field26841(var_args){
var args26842 = [];
var len__25923__auto___26909 = arguments.length;
var i__25924__auto___26910 = (0);
while(true){
if((i__25924__auto___26910 < len__25923__auto___26909)){
args26842.push((arguments[i__25924__auto___26910]));

var G__26911 = (i__25924__auto___26910 + (1));
i__25924__auto___26910 = G__26911;
continue;
} else {
}
break;
}

var G__26844 = args26842.length;
switch (G__26844) {
case 1:
return sablono.core.password_field26841.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26841.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26842.length)].join('')));

}
});

sablono.core.password_field26841.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.password_field26841.call(null,name__26720__auto__,null);
});

sablono.core.password_field26841.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.password_field26841.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26841);

/**
 * Creates a range input field.
 */
sablono.core.range_field26845 = (function sablono$core$range_field26845(var_args){
var args26846 = [];
var len__25923__auto___26913 = arguments.length;
var i__25924__auto___26914 = (0);
while(true){
if((i__25924__auto___26914 < len__25923__auto___26913)){
args26846.push((arguments[i__25924__auto___26914]));

var G__26915 = (i__25924__auto___26914 + (1));
i__25924__auto___26914 = G__26915;
continue;
} else {
}
break;
}

var G__26848 = args26846.length;
switch (G__26848) {
case 1:
return sablono.core.range_field26845.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26845.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26846.length)].join('')));

}
});

sablono.core.range_field26845.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.range_field26845.call(null,name__26720__auto__,null);
});

sablono.core.range_field26845.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.range_field26845.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26845);

/**
 * Creates a search input field.
 */
sablono.core.search_field26849 = (function sablono$core$search_field26849(var_args){
var args26850 = [];
var len__25923__auto___26917 = arguments.length;
var i__25924__auto___26918 = (0);
while(true){
if((i__25924__auto___26918 < len__25923__auto___26917)){
args26850.push((arguments[i__25924__auto___26918]));

var G__26919 = (i__25924__auto___26918 + (1));
i__25924__auto___26918 = G__26919;
continue;
} else {
}
break;
}

var G__26852 = args26850.length;
switch (G__26852) {
case 1:
return sablono.core.search_field26849.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26849.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26850.length)].join('')));

}
});

sablono.core.search_field26849.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.search_field26849.call(null,name__26720__auto__,null);
});

sablono.core.search_field26849.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.search_field26849.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26849);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26853 = (function sablono$core$tel_field26853(var_args){
var args26854 = [];
var len__25923__auto___26921 = arguments.length;
var i__25924__auto___26922 = (0);
while(true){
if((i__25924__auto___26922 < len__25923__auto___26921)){
args26854.push((arguments[i__25924__auto___26922]));

var G__26923 = (i__25924__auto___26922 + (1));
i__25924__auto___26922 = G__26923;
continue;
} else {
}
break;
}

var G__26856 = args26854.length;
switch (G__26856) {
case 1:
return sablono.core.tel_field26853.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26853.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26854.length)].join('')));

}
});

sablono.core.tel_field26853.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.tel_field26853.call(null,name__26720__auto__,null);
});

sablono.core.tel_field26853.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.tel_field26853.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26853);

/**
 * Creates a text input field.
 */
sablono.core.text_field26857 = (function sablono$core$text_field26857(var_args){
var args26858 = [];
var len__25923__auto___26925 = arguments.length;
var i__25924__auto___26926 = (0);
while(true){
if((i__25924__auto___26926 < len__25923__auto___26925)){
args26858.push((arguments[i__25924__auto___26926]));

var G__26927 = (i__25924__auto___26926 + (1));
i__25924__auto___26926 = G__26927;
continue;
} else {
}
break;
}

var G__26860 = args26858.length;
switch (G__26860) {
case 1:
return sablono.core.text_field26857.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26857.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26858.length)].join('')));

}
});

sablono.core.text_field26857.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.text_field26857.call(null,name__26720__auto__,null);
});

sablono.core.text_field26857.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.text_field26857.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26857);

/**
 * Creates a time input field.
 */
sablono.core.time_field26861 = (function sablono$core$time_field26861(var_args){
var args26862 = [];
var len__25923__auto___26929 = arguments.length;
var i__25924__auto___26930 = (0);
while(true){
if((i__25924__auto___26930 < len__25923__auto___26929)){
args26862.push((arguments[i__25924__auto___26930]));

var G__26931 = (i__25924__auto___26930 + (1));
i__25924__auto___26930 = G__26931;
continue;
} else {
}
break;
}

var G__26864 = args26862.length;
switch (G__26864) {
case 1:
return sablono.core.time_field26861.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26861.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26862.length)].join('')));

}
});

sablono.core.time_field26861.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.time_field26861.call(null,name__26720__auto__,null);
});

sablono.core.time_field26861.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.time_field26861.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26861);

/**
 * Creates a url input field.
 */
sablono.core.url_field26865 = (function sablono$core$url_field26865(var_args){
var args26866 = [];
var len__25923__auto___26933 = arguments.length;
var i__25924__auto___26934 = (0);
while(true){
if((i__25924__auto___26934 < len__25923__auto___26933)){
args26866.push((arguments[i__25924__auto___26934]));

var G__26935 = (i__25924__auto___26934 + (1));
i__25924__auto___26934 = G__26935;
continue;
} else {
}
break;
}

var G__26868 = args26866.length;
switch (G__26868) {
case 1:
return sablono.core.url_field26865.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26865.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26866.length)].join('')));

}
});

sablono.core.url_field26865.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.url_field26865.call(null,name__26720__auto__,null);
});

sablono.core.url_field26865.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.url_field26865.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26865);

/**
 * Creates a week input field.
 */
sablono.core.week_field26869 = (function sablono$core$week_field26869(var_args){
var args26870 = [];
var len__25923__auto___26937 = arguments.length;
var i__25924__auto___26938 = (0);
while(true){
if((i__25924__auto___26938 < len__25923__auto___26937)){
args26870.push((arguments[i__25924__auto___26938]));

var G__26939 = (i__25924__auto___26938 + (1));
i__25924__auto___26938 = G__26939;
continue;
} else {
}
break;
}

var G__26872 = args26870.length;
switch (G__26872) {
case 1:
return sablono.core.week_field26869.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26869.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26870.length)].join('')));

}
});

sablono.core.week_field26869.cljs$core$IFn$_invoke$arity$1 = (function (name__26720__auto__){
return sablono.core.week_field26869.call(null,name__26720__auto__,null);
});

sablono.core.week_field26869.cljs$core$IFn$_invoke$arity$2 = (function (name__26720__auto__,value__26721__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__26720__auto__,value__26721__auto__);
});

sablono.core.week_field26869.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26869);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26941 = (function sablono$core$check_box26941(var_args){
var args26942 = [];
var len__25923__auto___26945 = arguments.length;
var i__25924__auto___26946 = (0);
while(true){
if((i__25924__auto___26946 < len__25923__auto___26945)){
args26942.push((arguments[i__25924__auto___26946]));

var G__26947 = (i__25924__auto___26946 + (1));
i__25924__auto___26946 = G__26947;
continue;
} else {
}
break;
}

var G__26944 = args26942.length;
switch (G__26944) {
case 1:
return sablono.core.check_box26941.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26941.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26941.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26942.length)].join('')));

}
});

sablono.core.check_box26941.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box26941.call(null,name,null);
});

sablono.core.check_box26941.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box26941.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box26941.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26941.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26941);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26949 = (function sablono$core$radio_button26949(var_args){
var args26950 = [];
var len__25923__auto___26953 = arguments.length;
var i__25924__auto___26954 = (0);
while(true){
if((i__25924__auto___26954 < len__25923__auto___26953)){
args26950.push((arguments[i__25924__auto___26954]));

var G__26955 = (i__25924__auto___26954 + (1));
i__25924__auto___26954 = G__26955;
continue;
} else {
}
break;
}

var G__26952 = args26950.length;
switch (G__26952) {
case 1:
return sablono.core.radio_button26949.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26949.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26949.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26950.length)].join('')));

}
});

sablono.core.radio_button26949.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button26949.call(null,group,null);
});

sablono.core.radio_button26949.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button26949.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button26949.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26949.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26949);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26957 = (function sablono$core$select_options26957(coll){
var iter__25628__auto__ = (function sablono$core$select_options26957_$_iter__26974(s__26975){
return (new cljs.core.LazySeq(null,(function (){
var s__26975__$1 = s__26975;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26975__$1);
if(temp__4657__auto__){
var s__26975__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26975__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__26975__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__26977 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__26976 = (0);
while(true){
if((i__26976 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__26976);
cljs.core.chunk_append.call(null,b__26977,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26984 = x;
var text = cljs.core.nth.call(null,vec__26984,(0),null);
var val = cljs.core.nth.call(null,vec__26984,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26984,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26957.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26990 = (i__26976 + (1));
i__26976 = G__26990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26977),sablono$core$select_options26957_$_iter__26974.call(null,cljs.core.chunk_rest.call(null,s__26975__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26977),null);
}
} else {
var x = cljs.core.first.call(null,s__26975__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26987 = x;
var text = cljs.core.nth.call(null,vec__26987,(0),null);
var val = cljs.core.nth.call(null,vec__26987,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26987,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26957.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26957_$_iter__26974.call(null,cljs.core.rest.call(null,s__26975__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26957);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26991 = (function sablono$core$drop_down26991(var_args){
var args26992 = [];
var len__25923__auto___26995 = arguments.length;
var i__25924__auto___26996 = (0);
while(true){
if((i__25924__auto___26996 < len__25923__auto___26995)){
args26992.push((arguments[i__25924__auto___26996]));

var G__26997 = (i__25924__auto___26996 + (1));
i__25924__auto___26996 = G__26997;
continue;
} else {
}
break;
}

var G__26994 = args26992.length;
switch (G__26994) {
case 2:
return sablono.core.drop_down26991.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26991.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26992.length)].join('')));

}
});

sablono.core.drop_down26991.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26991.call(null,name,options,null);
});

sablono.core.drop_down26991.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down26991.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26991);
/**
 * Creates a text area element.
 */
sablono.core.text_area26999 = (function sablono$core$text_area26999(var_args){
var args27000 = [];
var len__25923__auto___27003 = arguments.length;
var i__25924__auto___27004 = (0);
while(true){
if((i__25924__auto___27004 < len__25923__auto___27003)){
args27000.push((arguments[i__25924__auto___27004]));

var G__27005 = (i__25924__auto___27004 + (1));
i__25924__auto___27004 = G__27005;
continue;
} else {
}
break;
}

var G__27002 = args27000.length;
switch (G__27002) {
case 1:
return sablono.core.text_area26999.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26999.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27000.length)].join('')));

}
});

sablono.core.text_area26999.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area26999.call(null,name,null);
});

sablono.core.text_area26999.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area26999.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26999);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label27007 = (function sablono$core$label27007(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label27007);
/**
 * Creates a submit button.
 */
sablono.core.submit_button27008 = (function sablono$core$submit_button27008(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button27008);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button27009 = (function sablono$core$reset_button27009(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button27009);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to27010 = (function sablono$core$form_to27010(var_args){
var args__25930__auto__ = [];
var len__25923__auto___27017 = arguments.length;
var i__25924__auto___27018 = (0);
while(true){
if((i__25924__auto___27018 < len__25923__auto___27017)){
args__25930__auto__.push((arguments[i__25924__auto___27018]));

var G__27019 = (i__25924__auto___27018 + (1));
i__25924__auto___27018 = G__27019;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to27010.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.form_to27010.cljs$core$IFn$_invoke$arity$variadic = (function (p__27013,body){
var vec__27014 = p__27013;
var method = cljs.core.nth.call(null,vec__27014,(0),null);
var action = cljs.core.nth.call(null,vec__27014,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to27010.cljs$lang$maxFixedArity = (1);

sablono.core.form_to27010.cljs$lang$applyTo = (function (seq27011){
var G__27012 = cljs.core.first.call(null,seq27011);
var seq27011__$1 = cljs.core.next.call(null,seq27011);
return sablono.core.form_to27010.cljs$core$IFn$_invoke$arity$variadic(G__27012,seq27011__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to27010);

//# sourceMappingURL=core.js.map?rel=1523262621215