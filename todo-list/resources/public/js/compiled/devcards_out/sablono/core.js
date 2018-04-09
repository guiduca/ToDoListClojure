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
var G__31481__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__31478 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__31479 = cljs.core.seq.call(null,vec__31478);
var first__31480 = cljs.core.first.call(null,seq__31479);
var seq__31479__$1 = cljs.core.next.call(null,seq__31479);
var tag = first__31480;
var body = seq__31479__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__31481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31482__i = 0, G__31482__a = new Array(arguments.length -  0);
while (G__31482__i < G__31482__a.length) {G__31482__a[G__31482__i] = arguments[G__31482__i + 0]; ++G__31482__i;}
  args = new cljs.core.IndexedSeq(G__31482__a,0);
} 
return G__31481__delegate.call(this,args);};
G__31481.cljs$lang$maxFixedArity = 0;
G__31481.cljs$lang$applyTo = (function (arglist__31483){
var args = cljs.core.seq(arglist__31483);
return G__31481__delegate(args);
});
G__31481.cljs$core$IFn$_invoke$arity$variadic = G__31481__delegate;
return G__31481;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25628__auto__ = (function sablono$core$update_arglists_$_iter__31488(s__31489){
return (new cljs.core.LazySeq(null,(function (){
var s__31489__$1 = s__31489;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31489__$1);
if(temp__4657__auto__){
var s__31489__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31489__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__31489__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__31491 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__31490 = (0);
while(true){
if((i__31490 < size__25627__auto__)){
var args = cljs.core._nth.call(null,c__25626__auto__,i__31490);
cljs.core.chunk_append.call(null,b__31491,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__31492 = (i__31490 + (1));
i__31490 = G__31492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31491),sablono$core$update_arglists_$_iter__31488.call(null,cljs.core.chunk_rest.call(null,s__31489__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31491),null);
}
} else {
var args = cljs.core.first.call(null,s__31489__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__31488.call(null,cljs.core.rest.call(null,s__31489__$2)));
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
var len__25923__auto___31498 = arguments.length;
var i__25924__auto___31499 = (0);
while(true){
if((i__25924__auto___31499 < len__25923__auto___31498)){
args__25930__auto__.push((arguments[i__25924__auto___31499]));

var G__31500 = (i__25924__auto___31499 + (1));
i__25924__auto___31499 = G__31500;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25628__auto__ = (function sablono$core$iter__31494(s__31495){
return (new cljs.core.LazySeq(null,(function (){
var s__31495__$1 = s__31495;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31495__$1);
if(temp__4657__auto__){
var s__31495__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31495__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__31495__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__31497 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__31496 = (0);
while(true){
if((i__31496 < size__25627__auto__)){
var style = cljs.core._nth.call(null,c__25626__auto__,i__31496);
cljs.core.chunk_append.call(null,b__31497,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__31501 = (i__31496 + (1));
i__31496 = G__31501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31497),sablono$core$iter__31494.call(null,cljs.core.chunk_rest.call(null,s__31495__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31497),null);
}
} else {
var style = cljs.core.first.call(null,s__31495__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__31494.call(null,cljs.core.rest.call(null,s__31495__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq31493){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31493));
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
sablono.core.link_to31502 = (function sablono$core$link_to31502(var_args){
var args__25930__auto__ = [];
var len__25923__auto___31505 = arguments.length;
var i__25924__auto___31506 = (0);
while(true){
if((i__25924__auto___31506 < len__25923__auto___31505)){
args__25930__auto__.push((arguments[i__25924__auto___31506]));

var G__31507 = (i__25924__auto___31506 + (1));
i__25924__auto___31506 = G__31507;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to31502.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.link_to31502.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to31502.cljs$lang$maxFixedArity = (1);

sablono.core.link_to31502.cljs$lang$applyTo = (function (seq31503){
var G__31504 = cljs.core.first.call(null,seq31503);
var seq31503__$1 = cljs.core.next.call(null,seq31503);
return sablono.core.link_to31502.cljs$core$IFn$_invoke$arity$variadic(G__31504,seq31503__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to31502);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to31508 = (function sablono$core$mail_to31508(var_args){
var args__25930__auto__ = [];
var len__25923__auto___31515 = arguments.length;
var i__25924__auto___31516 = (0);
while(true){
if((i__25924__auto___31516 < len__25923__auto___31515)){
args__25930__auto__.push((arguments[i__25924__auto___31516]));

var G__31517 = (i__25924__auto___31516 + (1));
i__25924__auto___31516 = G__31517;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to31508.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.mail_to31508.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__31511){
var vec__31512 = p__31511;
var content = cljs.core.nth.call(null,vec__31512,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24848__auto__ = content;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to31508.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to31508.cljs$lang$applyTo = (function (seq31509){
var G__31510 = cljs.core.first.call(null,seq31509);
var seq31509__$1 = cljs.core.next.call(null,seq31509);
return sablono.core.mail_to31508.cljs$core$IFn$_invoke$arity$variadic(G__31510,seq31509__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to31508);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list31518 = (function sablono$core$unordered_list31518(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25628__auto__ = (function sablono$core$unordered_list31518_$_iter__31523(s__31524){
return (new cljs.core.LazySeq(null,(function (){
var s__31524__$1 = s__31524;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31524__$1);
if(temp__4657__auto__){
var s__31524__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31524__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__31524__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__31526 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__31525 = (0);
while(true){
if((i__31525 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__31525);
cljs.core.chunk_append.call(null,b__31526,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31527 = (i__31525 + (1));
i__31525 = G__31527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31526),sablono$core$unordered_list31518_$_iter__31523.call(null,cljs.core.chunk_rest.call(null,s__31524__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31526),null);
}
} else {
var x = cljs.core.first.call(null,s__31524__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list31518_$_iter__31523.call(null,cljs.core.rest.call(null,s__31524__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list31518);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list31528 = (function sablono$core$ordered_list31528(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25628__auto__ = (function sablono$core$ordered_list31528_$_iter__31533(s__31534){
return (new cljs.core.LazySeq(null,(function (){
var s__31534__$1 = s__31534;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31534__$1);
if(temp__4657__auto__){
var s__31534__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31534__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__31534__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__31536 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__31535 = (0);
while(true){
if((i__31535 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__31535);
cljs.core.chunk_append.call(null,b__31536,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31537 = (i__31535 + (1));
i__31535 = G__31537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31536),sablono$core$ordered_list31528_$_iter__31533.call(null,cljs.core.chunk_rest.call(null,s__31534__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31536),null);
}
} else {
var x = cljs.core.first.call(null,s__31534__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list31528_$_iter__31533.call(null,cljs.core.rest.call(null,s__31534__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list31528);
/**
 * Create an image element.
 */
sablono.core.image31538 = (function sablono$core$image31538(var_args){
var args31539 = [];
var len__25923__auto___31542 = arguments.length;
var i__25924__auto___31543 = (0);
while(true){
if((i__25924__auto___31543 < len__25923__auto___31542)){
args31539.push((arguments[i__25924__auto___31543]));

var G__31544 = (i__25924__auto___31543 + (1));
i__25924__auto___31543 = G__31544;
continue;
} else {
}
break;
}

var G__31541 = args31539.length;
switch (G__31541) {
case 1:
return sablono.core.image31538.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image31538.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31539.length)].join('')));

}
});

sablono.core.image31538.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image31538.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image31538.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image31538);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__31546_SHARP_,p2__31547_SHARP_){
return [cljs.core.str(p1__31546_SHARP_),cljs.core.str("["),cljs.core.str(p2__31547_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__31548_SHARP_,p2__31549_SHARP_){
return [cljs.core.str(p1__31548_SHARP_),cljs.core.str("-"),cljs.core.str(p2__31549_SHARP_)].join('');
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
sablono.core.color_field31550 = (function sablono$core$color_field31550(var_args){
var args31551 = [];
var len__25923__auto___31618 = arguments.length;
var i__25924__auto___31619 = (0);
while(true){
if((i__25924__auto___31619 < len__25923__auto___31618)){
args31551.push((arguments[i__25924__auto___31619]));

var G__31620 = (i__25924__auto___31619 + (1));
i__25924__auto___31619 = G__31620;
continue;
} else {
}
break;
}

var G__31553 = args31551.length;
switch (G__31553) {
case 1:
return sablono.core.color_field31550.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field31550.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31551.length)].join('')));

}
});

sablono.core.color_field31550.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.color_field31550.call(null,name__31465__auto__,null);
});

sablono.core.color_field31550.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.color_field31550.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field31550);

/**
 * Creates a date input field.
 */
sablono.core.date_field31554 = (function sablono$core$date_field31554(var_args){
var args31555 = [];
var len__25923__auto___31622 = arguments.length;
var i__25924__auto___31623 = (0);
while(true){
if((i__25924__auto___31623 < len__25923__auto___31622)){
args31555.push((arguments[i__25924__auto___31623]));

var G__31624 = (i__25924__auto___31623 + (1));
i__25924__auto___31623 = G__31624;
continue;
} else {
}
break;
}

var G__31557 = args31555.length;
switch (G__31557) {
case 1:
return sablono.core.date_field31554.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field31554.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31555.length)].join('')));

}
});

sablono.core.date_field31554.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.date_field31554.call(null,name__31465__auto__,null);
});

sablono.core.date_field31554.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.date_field31554.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field31554);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field31558 = (function sablono$core$datetime_field31558(var_args){
var args31559 = [];
var len__25923__auto___31626 = arguments.length;
var i__25924__auto___31627 = (0);
while(true){
if((i__25924__auto___31627 < len__25923__auto___31626)){
args31559.push((arguments[i__25924__auto___31627]));

var G__31628 = (i__25924__auto___31627 + (1));
i__25924__auto___31627 = G__31628;
continue;
} else {
}
break;
}

var G__31561 = args31559.length;
switch (G__31561) {
case 1:
return sablono.core.datetime_field31558.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field31558.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31559.length)].join('')));

}
});

sablono.core.datetime_field31558.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.datetime_field31558.call(null,name__31465__auto__,null);
});

sablono.core.datetime_field31558.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.datetime_field31558.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field31558);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field31562 = (function sablono$core$datetime_local_field31562(var_args){
var args31563 = [];
var len__25923__auto___31630 = arguments.length;
var i__25924__auto___31631 = (0);
while(true){
if((i__25924__auto___31631 < len__25923__auto___31630)){
args31563.push((arguments[i__25924__auto___31631]));

var G__31632 = (i__25924__auto___31631 + (1));
i__25924__auto___31631 = G__31632;
continue;
} else {
}
break;
}

var G__31565 = args31563.length;
switch (G__31565) {
case 1:
return sablono.core.datetime_local_field31562.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field31562.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31563.length)].join('')));

}
});

sablono.core.datetime_local_field31562.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.datetime_local_field31562.call(null,name__31465__auto__,null);
});

sablono.core.datetime_local_field31562.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.datetime_local_field31562.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field31562);

/**
 * Creates a email input field.
 */
sablono.core.email_field31566 = (function sablono$core$email_field31566(var_args){
var args31567 = [];
var len__25923__auto___31634 = arguments.length;
var i__25924__auto___31635 = (0);
while(true){
if((i__25924__auto___31635 < len__25923__auto___31634)){
args31567.push((arguments[i__25924__auto___31635]));

var G__31636 = (i__25924__auto___31635 + (1));
i__25924__auto___31635 = G__31636;
continue;
} else {
}
break;
}

var G__31569 = args31567.length;
switch (G__31569) {
case 1:
return sablono.core.email_field31566.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field31566.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31567.length)].join('')));

}
});

sablono.core.email_field31566.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.email_field31566.call(null,name__31465__auto__,null);
});

sablono.core.email_field31566.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.email_field31566.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field31566);

/**
 * Creates a file input field.
 */
sablono.core.file_field31570 = (function sablono$core$file_field31570(var_args){
var args31571 = [];
var len__25923__auto___31638 = arguments.length;
var i__25924__auto___31639 = (0);
while(true){
if((i__25924__auto___31639 < len__25923__auto___31638)){
args31571.push((arguments[i__25924__auto___31639]));

var G__31640 = (i__25924__auto___31639 + (1));
i__25924__auto___31639 = G__31640;
continue;
} else {
}
break;
}

var G__31573 = args31571.length;
switch (G__31573) {
case 1:
return sablono.core.file_field31570.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field31570.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31571.length)].join('')));

}
});

sablono.core.file_field31570.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.file_field31570.call(null,name__31465__auto__,null);
});

sablono.core.file_field31570.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.file_field31570.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field31570);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field31574 = (function sablono$core$hidden_field31574(var_args){
var args31575 = [];
var len__25923__auto___31642 = arguments.length;
var i__25924__auto___31643 = (0);
while(true){
if((i__25924__auto___31643 < len__25923__auto___31642)){
args31575.push((arguments[i__25924__auto___31643]));

var G__31644 = (i__25924__auto___31643 + (1));
i__25924__auto___31643 = G__31644;
continue;
} else {
}
break;
}

var G__31577 = args31575.length;
switch (G__31577) {
case 1:
return sablono.core.hidden_field31574.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field31574.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31575.length)].join('')));

}
});

sablono.core.hidden_field31574.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.hidden_field31574.call(null,name__31465__auto__,null);
});

sablono.core.hidden_field31574.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.hidden_field31574.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field31574);

/**
 * Creates a month input field.
 */
sablono.core.month_field31578 = (function sablono$core$month_field31578(var_args){
var args31579 = [];
var len__25923__auto___31646 = arguments.length;
var i__25924__auto___31647 = (0);
while(true){
if((i__25924__auto___31647 < len__25923__auto___31646)){
args31579.push((arguments[i__25924__auto___31647]));

var G__31648 = (i__25924__auto___31647 + (1));
i__25924__auto___31647 = G__31648;
continue;
} else {
}
break;
}

var G__31581 = args31579.length;
switch (G__31581) {
case 1:
return sablono.core.month_field31578.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field31578.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31579.length)].join('')));

}
});

sablono.core.month_field31578.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.month_field31578.call(null,name__31465__auto__,null);
});

sablono.core.month_field31578.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.month_field31578.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field31578);

/**
 * Creates a number input field.
 */
sablono.core.number_field31582 = (function sablono$core$number_field31582(var_args){
var args31583 = [];
var len__25923__auto___31650 = arguments.length;
var i__25924__auto___31651 = (0);
while(true){
if((i__25924__auto___31651 < len__25923__auto___31650)){
args31583.push((arguments[i__25924__auto___31651]));

var G__31652 = (i__25924__auto___31651 + (1));
i__25924__auto___31651 = G__31652;
continue;
} else {
}
break;
}

var G__31585 = args31583.length;
switch (G__31585) {
case 1:
return sablono.core.number_field31582.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field31582.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31583.length)].join('')));

}
});

sablono.core.number_field31582.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.number_field31582.call(null,name__31465__auto__,null);
});

sablono.core.number_field31582.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.number_field31582.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field31582);

/**
 * Creates a password input field.
 */
sablono.core.password_field31586 = (function sablono$core$password_field31586(var_args){
var args31587 = [];
var len__25923__auto___31654 = arguments.length;
var i__25924__auto___31655 = (0);
while(true){
if((i__25924__auto___31655 < len__25923__auto___31654)){
args31587.push((arguments[i__25924__auto___31655]));

var G__31656 = (i__25924__auto___31655 + (1));
i__25924__auto___31655 = G__31656;
continue;
} else {
}
break;
}

var G__31589 = args31587.length;
switch (G__31589) {
case 1:
return sablono.core.password_field31586.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field31586.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31587.length)].join('')));

}
});

sablono.core.password_field31586.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.password_field31586.call(null,name__31465__auto__,null);
});

sablono.core.password_field31586.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.password_field31586.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field31586);

/**
 * Creates a range input field.
 */
sablono.core.range_field31590 = (function sablono$core$range_field31590(var_args){
var args31591 = [];
var len__25923__auto___31658 = arguments.length;
var i__25924__auto___31659 = (0);
while(true){
if((i__25924__auto___31659 < len__25923__auto___31658)){
args31591.push((arguments[i__25924__auto___31659]));

var G__31660 = (i__25924__auto___31659 + (1));
i__25924__auto___31659 = G__31660;
continue;
} else {
}
break;
}

var G__31593 = args31591.length;
switch (G__31593) {
case 1:
return sablono.core.range_field31590.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field31590.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31591.length)].join('')));

}
});

sablono.core.range_field31590.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.range_field31590.call(null,name__31465__auto__,null);
});

sablono.core.range_field31590.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.range_field31590.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field31590);

/**
 * Creates a search input field.
 */
sablono.core.search_field31594 = (function sablono$core$search_field31594(var_args){
var args31595 = [];
var len__25923__auto___31662 = arguments.length;
var i__25924__auto___31663 = (0);
while(true){
if((i__25924__auto___31663 < len__25923__auto___31662)){
args31595.push((arguments[i__25924__auto___31663]));

var G__31664 = (i__25924__auto___31663 + (1));
i__25924__auto___31663 = G__31664;
continue;
} else {
}
break;
}

var G__31597 = args31595.length;
switch (G__31597) {
case 1:
return sablono.core.search_field31594.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field31594.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31595.length)].join('')));

}
});

sablono.core.search_field31594.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.search_field31594.call(null,name__31465__auto__,null);
});

sablono.core.search_field31594.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.search_field31594.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field31594);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field31598 = (function sablono$core$tel_field31598(var_args){
var args31599 = [];
var len__25923__auto___31666 = arguments.length;
var i__25924__auto___31667 = (0);
while(true){
if((i__25924__auto___31667 < len__25923__auto___31666)){
args31599.push((arguments[i__25924__auto___31667]));

var G__31668 = (i__25924__auto___31667 + (1));
i__25924__auto___31667 = G__31668;
continue;
} else {
}
break;
}

var G__31601 = args31599.length;
switch (G__31601) {
case 1:
return sablono.core.tel_field31598.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field31598.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31599.length)].join('')));

}
});

sablono.core.tel_field31598.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.tel_field31598.call(null,name__31465__auto__,null);
});

sablono.core.tel_field31598.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.tel_field31598.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field31598);

/**
 * Creates a text input field.
 */
sablono.core.text_field31602 = (function sablono$core$text_field31602(var_args){
var args31603 = [];
var len__25923__auto___31670 = arguments.length;
var i__25924__auto___31671 = (0);
while(true){
if((i__25924__auto___31671 < len__25923__auto___31670)){
args31603.push((arguments[i__25924__auto___31671]));

var G__31672 = (i__25924__auto___31671 + (1));
i__25924__auto___31671 = G__31672;
continue;
} else {
}
break;
}

var G__31605 = args31603.length;
switch (G__31605) {
case 1:
return sablono.core.text_field31602.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field31602.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31603.length)].join('')));

}
});

sablono.core.text_field31602.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.text_field31602.call(null,name__31465__auto__,null);
});

sablono.core.text_field31602.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.text_field31602.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field31602);

/**
 * Creates a time input field.
 */
sablono.core.time_field31606 = (function sablono$core$time_field31606(var_args){
var args31607 = [];
var len__25923__auto___31674 = arguments.length;
var i__25924__auto___31675 = (0);
while(true){
if((i__25924__auto___31675 < len__25923__auto___31674)){
args31607.push((arguments[i__25924__auto___31675]));

var G__31676 = (i__25924__auto___31675 + (1));
i__25924__auto___31675 = G__31676;
continue;
} else {
}
break;
}

var G__31609 = args31607.length;
switch (G__31609) {
case 1:
return sablono.core.time_field31606.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field31606.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31607.length)].join('')));

}
});

sablono.core.time_field31606.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.time_field31606.call(null,name__31465__auto__,null);
});

sablono.core.time_field31606.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.time_field31606.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field31606);

/**
 * Creates a url input field.
 */
sablono.core.url_field31610 = (function sablono$core$url_field31610(var_args){
var args31611 = [];
var len__25923__auto___31678 = arguments.length;
var i__25924__auto___31679 = (0);
while(true){
if((i__25924__auto___31679 < len__25923__auto___31678)){
args31611.push((arguments[i__25924__auto___31679]));

var G__31680 = (i__25924__auto___31679 + (1));
i__25924__auto___31679 = G__31680;
continue;
} else {
}
break;
}

var G__31613 = args31611.length;
switch (G__31613) {
case 1:
return sablono.core.url_field31610.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field31610.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31611.length)].join('')));

}
});

sablono.core.url_field31610.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.url_field31610.call(null,name__31465__auto__,null);
});

sablono.core.url_field31610.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.url_field31610.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field31610);

/**
 * Creates a week input field.
 */
sablono.core.week_field31614 = (function sablono$core$week_field31614(var_args){
var args31615 = [];
var len__25923__auto___31682 = arguments.length;
var i__25924__auto___31683 = (0);
while(true){
if((i__25924__auto___31683 < len__25923__auto___31682)){
args31615.push((arguments[i__25924__auto___31683]));

var G__31684 = (i__25924__auto___31683 + (1));
i__25924__auto___31683 = G__31684;
continue;
} else {
}
break;
}

var G__31617 = args31615.length;
switch (G__31617) {
case 1:
return sablono.core.week_field31614.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field31614.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31615.length)].join('')));

}
});

sablono.core.week_field31614.cljs$core$IFn$_invoke$arity$1 = (function (name__31465__auto__){
return sablono.core.week_field31614.call(null,name__31465__auto__,null);
});

sablono.core.week_field31614.cljs$core$IFn$_invoke$arity$2 = (function (name__31465__auto__,value__31466__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__31465__auto__,value__31466__auto__);
});

sablono.core.week_field31614.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field31614);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box31686 = (function sablono$core$check_box31686(var_args){
var args31687 = [];
var len__25923__auto___31690 = arguments.length;
var i__25924__auto___31691 = (0);
while(true){
if((i__25924__auto___31691 < len__25923__auto___31690)){
args31687.push((arguments[i__25924__auto___31691]));

var G__31692 = (i__25924__auto___31691 + (1));
i__25924__auto___31691 = G__31692;
continue;
} else {
}
break;
}

var G__31689 = args31687.length;
switch (G__31689) {
case 1:
return sablono.core.check_box31686.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box31686.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box31686.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31687.length)].join('')));

}
});

sablono.core.check_box31686.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box31686.call(null,name,null);
});

sablono.core.check_box31686.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box31686.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box31686.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box31686.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box31686);
/**
 * Creates a radio button.
 */
sablono.core.radio_button31694 = (function sablono$core$radio_button31694(var_args){
var args31695 = [];
var len__25923__auto___31698 = arguments.length;
var i__25924__auto___31699 = (0);
while(true){
if((i__25924__auto___31699 < len__25923__auto___31698)){
args31695.push((arguments[i__25924__auto___31699]));

var G__31700 = (i__25924__auto___31699 + (1));
i__25924__auto___31699 = G__31700;
continue;
} else {
}
break;
}

var G__31697 = args31695.length;
switch (G__31697) {
case 1:
return sablono.core.radio_button31694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button31694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button31694.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31695.length)].join('')));

}
});

sablono.core.radio_button31694.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button31694.call(null,group,null);
});

sablono.core.radio_button31694.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button31694.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button31694.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button31694.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button31694);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options31702 = (function sablono$core$select_options31702(coll){
var iter__25628__auto__ = (function sablono$core$select_options31702_$_iter__31719(s__31720){
return (new cljs.core.LazySeq(null,(function (){
var s__31720__$1 = s__31720;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31720__$1);
if(temp__4657__auto__){
var s__31720__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31720__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__31720__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__31722 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__31721 = (0);
while(true){
if((i__31721 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__31721);
cljs.core.chunk_append.call(null,b__31722,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31729 = x;
var text = cljs.core.nth.call(null,vec__31729,(0),null);
var val = cljs.core.nth.call(null,vec__31729,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31729,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options31702.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__31735 = (i__31721 + (1));
i__31721 = G__31735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31722),sablono$core$select_options31702_$_iter__31719.call(null,cljs.core.chunk_rest.call(null,s__31720__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31722),null);
}
} else {
var x = cljs.core.first.call(null,s__31720__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31732 = x;
var text = cljs.core.nth.call(null,vec__31732,(0),null);
var val = cljs.core.nth.call(null,vec__31732,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31732,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options31702.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options31702_$_iter__31719.call(null,cljs.core.rest.call(null,s__31720__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options31702);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down31736 = (function sablono$core$drop_down31736(var_args){
var args31737 = [];
var len__25923__auto___31740 = arguments.length;
var i__25924__auto___31741 = (0);
while(true){
if((i__25924__auto___31741 < len__25923__auto___31740)){
args31737.push((arguments[i__25924__auto___31741]));

var G__31742 = (i__25924__auto___31741 + (1));
i__25924__auto___31741 = G__31742;
continue;
} else {
}
break;
}

var G__31739 = args31737.length;
switch (G__31739) {
case 2:
return sablono.core.drop_down31736.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down31736.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31737.length)].join('')));

}
});

sablono.core.drop_down31736.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down31736.call(null,name,options,null);
});

sablono.core.drop_down31736.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down31736.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down31736);
/**
 * Creates a text area element.
 */
sablono.core.text_area31744 = (function sablono$core$text_area31744(var_args){
var args31745 = [];
var len__25923__auto___31748 = arguments.length;
var i__25924__auto___31749 = (0);
while(true){
if((i__25924__auto___31749 < len__25923__auto___31748)){
args31745.push((arguments[i__25924__auto___31749]));

var G__31750 = (i__25924__auto___31749 + (1));
i__25924__auto___31749 = G__31750;
continue;
} else {
}
break;
}

var G__31747 = args31745.length;
switch (G__31747) {
case 1:
return sablono.core.text_area31744.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area31744.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31745.length)].join('')));

}
});

sablono.core.text_area31744.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area31744.call(null,name,null);
});

sablono.core.text_area31744.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area31744.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area31744);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label31752 = (function sablono$core$label31752(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label31752);
/**
 * Creates a submit button.
 */
sablono.core.submit_button31753 = (function sablono$core$submit_button31753(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button31753);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button31754 = (function sablono$core$reset_button31754(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button31754);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to31755 = (function sablono$core$form_to31755(var_args){
var args__25930__auto__ = [];
var len__25923__auto___31762 = arguments.length;
var i__25924__auto___31763 = (0);
while(true){
if((i__25924__auto___31763 < len__25923__auto___31762)){
args__25930__auto__.push((arguments[i__25924__auto___31763]));

var G__31764 = (i__25924__auto___31763 + (1));
i__25924__auto___31763 = G__31764;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to31755.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.form_to31755.cljs$core$IFn$_invoke$arity$variadic = (function (p__31758,body){
var vec__31759 = p__31758;
var method = cljs.core.nth.call(null,vec__31759,(0),null);
var action = cljs.core.nth.call(null,vec__31759,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to31755.cljs$lang$maxFixedArity = (1);

sablono.core.form_to31755.cljs$lang$applyTo = (function (seq31756){
var G__31757 = cljs.core.first.call(null,seq31756);
var seq31756__$1 = cljs.core.next.call(null,seq31756);
return sablono.core.form_to31755.cljs$core$IFn$_invoke$arity$variadic(G__31757,seq31756__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to31755);

//# sourceMappingURL=core.js.map?rel=1523250221564