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
var G__33098__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__33095 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__33096 = cljs.core.seq.call(null,vec__33095);
var first__33097 = cljs.core.first.call(null,seq__33096);
var seq__33096__$1 = cljs.core.next.call(null,seq__33096);
var tag = first__33097;
var body = seq__33096__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__33098 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33099__i = 0, G__33099__a = new Array(arguments.length -  0);
while (G__33099__i < G__33099__a.length) {G__33099__a[G__33099__i] = arguments[G__33099__i + 0]; ++G__33099__i;}
  args = new cljs.core.IndexedSeq(G__33099__a,0);
} 
return G__33098__delegate.call(this,args);};
G__33098.cljs$lang$maxFixedArity = 0;
G__33098.cljs$lang$applyTo = (function (arglist__33100){
var args = cljs.core.seq(arglist__33100);
return G__33098__delegate(args);
});
G__33098.cljs$core$IFn$_invoke$arity$variadic = G__33098__delegate;
return G__33098;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25628__auto__ = (function sablono$core$update_arglists_$_iter__33105(s__33106){
return (new cljs.core.LazySeq(null,(function (){
var s__33106__$1 = s__33106;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33106__$1);
if(temp__4657__auto__){
var s__33106__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33106__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__33106__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__33108 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__33107 = (0);
while(true){
if((i__33107 < size__25627__auto__)){
var args = cljs.core._nth.call(null,c__25626__auto__,i__33107);
cljs.core.chunk_append.call(null,b__33108,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__33109 = (i__33107 + (1));
i__33107 = G__33109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33108),sablono$core$update_arglists_$_iter__33105.call(null,cljs.core.chunk_rest.call(null,s__33106__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33108),null);
}
} else {
var args = cljs.core.first.call(null,s__33106__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__33105.call(null,cljs.core.rest.call(null,s__33106__$2)));
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
var len__25923__auto___33115 = arguments.length;
var i__25924__auto___33116 = (0);
while(true){
if((i__25924__auto___33116 < len__25923__auto___33115)){
args__25930__auto__.push((arguments[i__25924__auto___33116]));

var G__33117 = (i__25924__auto___33116 + (1));
i__25924__auto___33116 = G__33117;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25628__auto__ = (function sablono$core$iter__33111(s__33112){
return (new cljs.core.LazySeq(null,(function (){
var s__33112__$1 = s__33112;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33112__$1);
if(temp__4657__auto__){
var s__33112__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33112__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__33112__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__33114 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__33113 = (0);
while(true){
if((i__33113 < size__25627__auto__)){
var style = cljs.core._nth.call(null,c__25626__auto__,i__33113);
cljs.core.chunk_append.call(null,b__33114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__33118 = (i__33113 + (1));
i__33113 = G__33118;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33114),sablono$core$iter__33111.call(null,cljs.core.chunk_rest.call(null,s__33112__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33114),null);
}
} else {
var style = cljs.core.first.call(null,s__33112__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__33111.call(null,cljs.core.rest.call(null,s__33112__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq33110){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33110));
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
sablono.core.link_to33119 = (function sablono$core$link_to33119(var_args){
var args__25930__auto__ = [];
var len__25923__auto___33122 = arguments.length;
var i__25924__auto___33123 = (0);
while(true){
if((i__25924__auto___33123 < len__25923__auto___33122)){
args__25930__auto__.push((arguments[i__25924__auto___33123]));

var G__33124 = (i__25924__auto___33123 + (1));
i__25924__auto___33123 = G__33124;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to33119.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.link_to33119.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to33119.cljs$lang$maxFixedArity = (1);

sablono.core.link_to33119.cljs$lang$applyTo = (function (seq33120){
var G__33121 = cljs.core.first.call(null,seq33120);
var seq33120__$1 = cljs.core.next.call(null,seq33120);
return sablono.core.link_to33119.cljs$core$IFn$_invoke$arity$variadic(G__33121,seq33120__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to33119);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to33125 = (function sablono$core$mail_to33125(var_args){
var args__25930__auto__ = [];
var len__25923__auto___33132 = arguments.length;
var i__25924__auto___33133 = (0);
while(true){
if((i__25924__auto___33133 < len__25923__auto___33132)){
args__25930__auto__.push((arguments[i__25924__auto___33133]));

var G__33134 = (i__25924__auto___33133 + (1));
i__25924__auto___33133 = G__33134;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to33125.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.mail_to33125.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__33128){
var vec__33129 = p__33128;
var content = cljs.core.nth.call(null,vec__33129,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24848__auto__ = content;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to33125.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to33125.cljs$lang$applyTo = (function (seq33126){
var G__33127 = cljs.core.first.call(null,seq33126);
var seq33126__$1 = cljs.core.next.call(null,seq33126);
return sablono.core.mail_to33125.cljs$core$IFn$_invoke$arity$variadic(G__33127,seq33126__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to33125);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list33135 = (function sablono$core$unordered_list33135(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25628__auto__ = (function sablono$core$unordered_list33135_$_iter__33140(s__33141){
return (new cljs.core.LazySeq(null,(function (){
var s__33141__$1 = s__33141;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33141__$1);
if(temp__4657__auto__){
var s__33141__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33141__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__33141__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__33143 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__33142 = (0);
while(true){
if((i__33142 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__33142);
cljs.core.chunk_append.call(null,b__33143,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__33144 = (i__33142 + (1));
i__33142 = G__33144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33143),sablono$core$unordered_list33135_$_iter__33140.call(null,cljs.core.chunk_rest.call(null,s__33141__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33143),null);
}
} else {
var x = cljs.core.first.call(null,s__33141__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list33135_$_iter__33140.call(null,cljs.core.rest.call(null,s__33141__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list33135);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list33145 = (function sablono$core$ordered_list33145(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25628__auto__ = (function sablono$core$ordered_list33145_$_iter__33150(s__33151){
return (new cljs.core.LazySeq(null,(function (){
var s__33151__$1 = s__33151;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33151__$1);
if(temp__4657__auto__){
var s__33151__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33151__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__33151__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__33153 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__33152 = (0);
while(true){
if((i__33152 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__33152);
cljs.core.chunk_append.call(null,b__33153,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__33154 = (i__33152 + (1));
i__33152 = G__33154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33153),sablono$core$ordered_list33145_$_iter__33150.call(null,cljs.core.chunk_rest.call(null,s__33151__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33153),null);
}
} else {
var x = cljs.core.first.call(null,s__33151__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list33145_$_iter__33150.call(null,cljs.core.rest.call(null,s__33151__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list33145);
/**
 * Create an image element.
 */
sablono.core.image33155 = (function sablono$core$image33155(var_args){
var args33156 = [];
var len__25923__auto___33159 = arguments.length;
var i__25924__auto___33160 = (0);
while(true){
if((i__25924__auto___33160 < len__25923__auto___33159)){
args33156.push((arguments[i__25924__auto___33160]));

var G__33161 = (i__25924__auto___33160 + (1));
i__25924__auto___33160 = G__33161;
continue;
} else {
}
break;
}

var G__33158 = args33156.length;
switch (G__33158) {
case 1:
return sablono.core.image33155.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image33155.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33156.length)].join('')));

}
});

sablono.core.image33155.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image33155.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image33155.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image33155);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__33163_SHARP_,p2__33164_SHARP_){
return [cljs.core.str(p1__33163_SHARP_),cljs.core.str("["),cljs.core.str(p2__33164_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__33165_SHARP_,p2__33166_SHARP_){
return [cljs.core.str(p1__33165_SHARP_),cljs.core.str("-"),cljs.core.str(p2__33166_SHARP_)].join('');
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
sablono.core.color_field33167 = (function sablono$core$color_field33167(var_args){
var args33168 = [];
var len__25923__auto___33235 = arguments.length;
var i__25924__auto___33236 = (0);
while(true){
if((i__25924__auto___33236 < len__25923__auto___33235)){
args33168.push((arguments[i__25924__auto___33236]));

var G__33237 = (i__25924__auto___33236 + (1));
i__25924__auto___33236 = G__33237;
continue;
} else {
}
break;
}

var G__33170 = args33168.length;
switch (G__33170) {
case 1:
return sablono.core.color_field33167.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field33167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33168.length)].join('')));

}
});

sablono.core.color_field33167.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.color_field33167.call(null,name__26434__auto__,null);
});

sablono.core.color_field33167.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.color_field33167.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field33167);

/**
 * Creates a date input field.
 */
sablono.core.date_field33171 = (function sablono$core$date_field33171(var_args){
var args33172 = [];
var len__25923__auto___33239 = arguments.length;
var i__25924__auto___33240 = (0);
while(true){
if((i__25924__auto___33240 < len__25923__auto___33239)){
args33172.push((arguments[i__25924__auto___33240]));

var G__33241 = (i__25924__auto___33240 + (1));
i__25924__auto___33240 = G__33241;
continue;
} else {
}
break;
}

var G__33174 = args33172.length;
switch (G__33174) {
case 1:
return sablono.core.date_field33171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field33171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33172.length)].join('')));

}
});

sablono.core.date_field33171.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.date_field33171.call(null,name__26434__auto__,null);
});

sablono.core.date_field33171.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.date_field33171.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field33171);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field33175 = (function sablono$core$datetime_field33175(var_args){
var args33176 = [];
var len__25923__auto___33243 = arguments.length;
var i__25924__auto___33244 = (0);
while(true){
if((i__25924__auto___33244 < len__25923__auto___33243)){
args33176.push((arguments[i__25924__auto___33244]));

var G__33245 = (i__25924__auto___33244 + (1));
i__25924__auto___33244 = G__33245;
continue;
} else {
}
break;
}

var G__33178 = args33176.length;
switch (G__33178) {
case 1:
return sablono.core.datetime_field33175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field33175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33176.length)].join('')));

}
});

sablono.core.datetime_field33175.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.datetime_field33175.call(null,name__26434__auto__,null);
});

sablono.core.datetime_field33175.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.datetime_field33175.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field33175);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field33179 = (function sablono$core$datetime_local_field33179(var_args){
var args33180 = [];
var len__25923__auto___33247 = arguments.length;
var i__25924__auto___33248 = (0);
while(true){
if((i__25924__auto___33248 < len__25923__auto___33247)){
args33180.push((arguments[i__25924__auto___33248]));

var G__33249 = (i__25924__auto___33248 + (1));
i__25924__auto___33248 = G__33249;
continue;
} else {
}
break;
}

var G__33182 = args33180.length;
switch (G__33182) {
case 1:
return sablono.core.datetime_local_field33179.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field33179.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33180.length)].join('')));

}
});

sablono.core.datetime_local_field33179.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.datetime_local_field33179.call(null,name__26434__auto__,null);
});

sablono.core.datetime_local_field33179.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.datetime_local_field33179.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field33179);

/**
 * Creates a email input field.
 */
sablono.core.email_field33183 = (function sablono$core$email_field33183(var_args){
var args33184 = [];
var len__25923__auto___33251 = arguments.length;
var i__25924__auto___33252 = (0);
while(true){
if((i__25924__auto___33252 < len__25923__auto___33251)){
args33184.push((arguments[i__25924__auto___33252]));

var G__33253 = (i__25924__auto___33252 + (1));
i__25924__auto___33252 = G__33253;
continue;
} else {
}
break;
}

var G__33186 = args33184.length;
switch (G__33186) {
case 1:
return sablono.core.email_field33183.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field33183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33184.length)].join('')));

}
});

sablono.core.email_field33183.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.email_field33183.call(null,name__26434__auto__,null);
});

sablono.core.email_field33183.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.email_field33183.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field33183);

/**
 * Creates a file input field.
 */
sablono.core.file_field33187 = (function sablono$core$file_field33187(var_args){
var args33188 = [];
var len__25923__auto___33255 = arguments.length;
var i__25924__auto___33256 = (0);
while(true){
if((i__25924__auto___33256 < len__25923__auto___33255)){
args33188.push((arguments[i__25924__auto___33256]));

var G__33257 = (i__25924__auto___33256 + (1));
i__25924__auto___33256 = G__33257;
continue;
} else {
}
break;
}

var G__33190 = args33188.length;
switch (G__33190) {
case 1:
return sablono.core.file_field33187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field33187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33188.length)].join('')));

}
});

sablono.core.file_field33187.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.file_field33187.call(null,name__26434__auto__,null);
});

sablono.core.file_field33187.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.file_field33187.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field33187);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field33191 = (function sablono$core$hidden_field33191(var_args){
var args33192 = [];
var len__25923__auto___33259 = arguments.length;
var i__25924__auto___33260 = (0);
while(true){
if((i__25924__auto___33260 < len__25923__auto___33259)){
args33192.push((arguments[i__25924__auto___33260]));

var G__33261 = (i__25924__auto___33260 + (1));
i__25924__auto___33260 = G__33261;
continue;
} else {
}
break;
}

var G__33194 = args33192.length;
switch (G__33194) {
case 1:
return sablono.core.hidden_field33191.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field33191.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33192.length)].join('')));

}
});

sablono.core.hidden_field33191.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.hidden_field33191.call(null,name__26434__auto__,null);
});

sablono.core.hidden_field33191.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.hidden_field33191.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field33191);

/**
 * Creates a month input field.
 */
sablono.core.month_field33195 = (function sablono$core$month_field33195(var_args){
var args33196 = [];
var len__25923__auto___33263 = arguments.length;
var i__25924__auto___33264 = (0);
while(true){
if((i__25924__auto___33264 < len__25923__auto___33263)){
args33196.push((arguments[i__25924__auto___33264]));

var G__33265 = (i__25924__auto___33264 + (1));
i__25924__auto___33264 = G__33265;
continue;
} else {
}
break;
}

var G__33198 = args33196.length;
switch (G__33198) {
case 1:
return sablono.core.month_field33195.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field33195.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33196.length)].join('')));

}
});

sablono.core.month_field33195.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.month_field33195.call(null,name__26434__auto__,null);
});

sablono.core.month_field33195.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.month_field33195.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field33195);

/**
 * Creates a number input field.
 */
sablono.core.number_field33199 = (function sablono$core$number_field33199(var_args){
var args33200 = [];
var len__25923__auto___33267 = arguments.length;
var i__25924__auto___33268 = (0);
while(true){
if((i__25924__auto___33268 < len__25923__auto___33267)){
args33200.push((arguments[i__25924__auto___33268]));

var G__33269 = (i__25924__auto___33268 + (1));
i__25924__auto___33268 = G__33269;
continue;
} else {
}
break;
}

var G__33202 = args33200.length;
switch (G__33202) {
case 1:
return sablono.core.number_field33199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field33199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33200.length)].join('')));

}
});

sablono.core.number_field33199.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.number_field33199.call(null,name__26434__auto__,null);
});

sablono.core.number_field33199.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.number_field33199.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field33199);

/**
 * Creates a password input field.
 */
sablono.core.password_field33203 = (function sablono$core$password_field33203(var_args){
var args33204 = [];
var len__25923__auto___33271 = arguments.length;
var i__25924__auto___33272 = (0);
while(true){
if((i__25924__auto___33272 < len__25923__auto___33271)){
args33204.push((arguments[i__25924__auto___33272]));

var G__33273 = (i__25924__auto___33272 + (1));
i__25924__auto___33272 = G__33273;
continue;
} else {
}
break;
}

var G__33206 = args33204.length;
switch (G__33206) {
case 1:
return sablono.core.password_field33203.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field33203.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33204.length)].join('')));

}
});

sablono.core.password_field33203.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.password_field33203.call(null,name__26434__auto__,null);
});

sablono.core.password_field33203.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.password_field33203.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field33203);

/**
 * Creates a range input field.
 */
sablono.core.range_field33207 = (function sablono$core$range_field33207(var_args){
var args33208 = [];
var len__25923__auto___33275 = arguments.length;
var i__25924__auto___33276 = (0);
while(true){
if((i__25924__auto___33276 < len__25923__auto___33275)){
args33208.push((arguments[i__25924__auto___33276]));

var G__33277 = (i__25924__auto___33276 + (1));
i__25924__auto___33276 = G__33277;
continue;
} else {
}
break;
}

var G__33210 = args33208.length;
switch (G__33210) {
case 1:
return sablono.core.range_field33207.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field33207.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33208.length)].join('')));

}
});

sablono.core.range_field33207.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.range_field33207.call(null,name__26434__auto__,null);
});

sablono.core.range_field33207.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.range_field33207.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field33207);

/**
 * Creates a search input field.
 */
sablono.core.search_field33211 = (function sablono$core$search_field33211(var_args){
var args33212 = [];
var len__25923__auto___33279 = arguments.length;
var i__25924__auto___33280 = (0);
while(true){
if((i__25924__auto___33280 < len__25923__auto___33279)){
args33212.push((arguments[i__25924__auto___33280]));

var G__33281 = (i__25924__auto___33280 + (1));
i__25924__auto___33280 = G__33281;
continue;
} else {
}
break;
}

var G__33214 = args33212.length;
switch (G__33214) {
case 1:
return sablono.core.search_field33211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field33211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33212.length)].join('')));

}
});

sablono.core.search_field33211.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.search_field33211.call(null,name__26434__auto__,null);
});

sablono.core.search_field33211.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.search_field33211.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field33211);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field33215 = (function sablono$core$tel_field33215(var_args){
var args33216 = [];
var len__25923__auto___33283 = arguments.length;
var i__25924__auto___33284 = (0);
while(true){
if((i__25924__auto___33284 < len__25923__auto___33283)){
args33216.push((arguments[i__25924__auto___33284]));

var G__33285 = (i__25924__auto___33284 + (1));
i__25924__auto___33284 = G__33285;
continue;
} else {
}
break;
}

var G__33218 = args33216.length;
switch (G__33218) {
case 1:
return sablono.core.tel_field33215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field33215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33216.length)].join('')));

}
});

sablono.core.tel_field33215.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.tel_field33215.call(null,name__26434__auto__,null);
});

sablono.core.tel_field33215.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.tel_field33215.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field33215);

/**
 * Creates a text input field.
 */
sablono.core.text_field33219 = (function sablono$core$text_field33219(var_args){
var args33220 = [];
var len__25923__auto___33287 = arguments.length;
var i__25924__auto___33288 = (0);
while(true){
if((i__25924__auto___33288 < len__25923__auto___33287)){
args33220.push((arguments[i__25924__auto___33288]));

var G__33289 = (i__25924__auto___33288 + (1));
i__25924__auto___33288 = G__33289;
continue;
} else {
}
break;
}

var G__33222 = args33220.length;
switch (G__33222) {
case 1:
return sablono.core.text_field33219.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field33219.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33220.length)].join('')));

}
});

sablono.core.text_field33219.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.text_field33219.call(null,name__26434__auto__,null);
});

sablono.core.text_field33219.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.text_field33219.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field33219);

/**
 * Creates a time input field.
 */
sablono.core.time_field33223 = (function sablono$core$time_field33223(var_args){
var args33224 = [];
var len__25923__auto___33291 = arguments.length;
var i__25924__auto___33292 = (0);
while(true){
if((i__25924__auto___33292 < len__25923__auto___33291)){
args33224.push((arguments[i__25924__auto___33292]));

var G__33293 = (i__25924__auto___33292 + (1));
i__25924__auto___33292 = G__33293;
continue;
} else {
}
break;
}

var G__33226 = args33224.length;
switch (G__33226) {
case 1:
return sablono.core.time_field33223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field33223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33224.length)].join('')));

}
});

sablono.core.time_field33223.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.time_field33223.call(null,name__26434__auto__,null);
});

sablono.core.time_field33223.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.time_field33223.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field33223);

/**
 * Creates a url input field.
 */
sablono.core.url_field33227 = (function sablono$core$url_field33227(var_args){
var args33228 = [];
var len__25923__auto___33295 = arguments.length;
var i__25924__auto___33296 = (0);
while(true){
if((i__25924__auto___33296 < len__25923__auto___33295)){
args33228.push((arguments[i__25924__auto___33296]));

var G__33297 = (i__25924__auto___33296 + (1));
i__25924__auto___33296 = G__33297;
continue;
} else {
}
break;
}

var G__33230 = args33228.length;
switch (G__33230) {
case 1:
return sablono.core.url_field33227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field33227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33228.length)].join('')));

}
});

sablono.core.url_field33227.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.url_field33227.call(null,name__26434__auto__,null);
});

sablono.core.url_field33227.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.url_field33227.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field33227);

/**
 * Creates a week input field.
 */
sablono.core.week_field33231 = (function sablono$core$week_field33231(var_args){
var args33232 = [];
var len__25923__auto___33299 = arguments.length;
var i__25924__auto___33300 = (0);
while(true){
if((i__25924__auto___33300 < len__25923__auto___33299)){
args33232.push((arguments[i__25924__auto___33300]));

var G__33301 = (i__25924__auto___33300 + (1));
i__25924__auto___33300 = G__33301;
continue;
} else {
}
break;
}

var G__33234 = args33232.length;
switch (G__33234) {
case 1:
return sablono.core.week_field33231.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field33231.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33232.length)].join('')));

}
});

sablono.core.week_field33231.cljs$core$IFn$_invoke$arity$1 = (function (name__26434__auto__){
return sablono.core.week_field33231.call(null,name__26434__auto__,null);
});

sablono.core.week_field33231.cljs$core$IFn$_invoke$arity$2 = (function (name__26434__auto__,value__26435__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__26434__auto__,value__26435__auto__);
});

sablono.core.week_field33231.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field33231);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box33303 = (function sablono$core$check_box33303(var_args){
var args33304 = [];
var len__25923__auto___33307 = arguments.length;
var i__25924__auto___33308 = (0);
while(true){
if((i__25924__auto___33308 < len__25923__auto___33307)){
args33304.push((arguments[i__25924__auto___33308]));

var G__33309 = (i__25924__auto___33308 + (1));
i__25924__auto___33308 = G__33309;
continue;
} else {
}
break;
}

var G__33306 = args33304.length;
switch (G__33306) {
case 1:
return sablono.core.check_box33303.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box33303.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box33303.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33304.length)].join('')));

}
});

sablono.core.check_box33303.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box33303.call(null,name,null);
});

sablono.core.check_box33303.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box33303.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box33303.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box33303.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box33303);
/**
 * Creates a radio button.
 */
sablono.core.radio_button33311 = (function sablono$core$radio_button33311(var_args){
var args33312 = [];
var len__25923__auto___33315 = arguments.length;
var i__25924__auto___33316 = (0);
while(true){
if((i__25924__auto___33316 < len__25923__auto___33315)){
args33312.push((arguments[i__25924__auto___33316]));

var G__33317 = (i__25924__auto___33316 + (1));
i__25924__auto___33316 = G__33317;
continue;
} else {
}
break;
}

var G__33314 = args33312.length;
switch (G__33314) {
case 1:
return sablono.core.radio_button33311.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button33311.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button33311.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33312.length)].join('')));

}
});

sablono.core.radio_button33311.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button33311.call(null,group,null);
});

sablono.core.radio_button33311.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button33311.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button33311.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button33311.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button33311);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options33319 = (function sablono$core$select_options33319(coll){
var iter__25628__auto__ = (function sablono$core$select_options33319_$_iter__33336(s__33337){
return (new cljs.core.LazySeq(null,(function (){
var s__33337__$1 = s__33337;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33337__$1);
if(temp__4657__auto__){
var s__33337__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33337__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__33337__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__33339 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__33338 = (0);
while(true){
if((i__33338 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__33338);
cljs.core.chunk_append.call(null,b__33339,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33346 = x;
var text = cljs.core.nth.call(null,vec__33346,(0),null);
var val = cljs.core.nth.call(null,vec__33346,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__33346,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options33319.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__33352 = (i__33338 + (1));
i__33338 = G__33352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33339),sablono$core$select_options33319_$_iter__33336.call(null,cljs.core.chunk_rest.call(null,s__33337__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33339),null);
}
} else {
var x = cljs.core.first.call(null,s__33337__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33349 = x;
var text = cljs.core.nth.call(null,vec__33349,(0),null);
var val = cljs.core.nth.call(null,vec__33349,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__33349,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options33319.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options33319_$_iter__33336.call(null,cljs.core.rest.call(null,s__33337__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options33319);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down33353 = (function sablono$core$drop_down33353(var_args){
var args33354 = [];
var len__25923__auto___33357 = arguments.length;
var i__25924__auto___33358 = (0);
while(true){
if((i__25924__auto___33358 < len__25923__auto___33357)){
args33354.push((arguments[i__25924__auto___33358]));

var G__33359 = (i__25924__auto___33358 + (1));
i__25924__auto___33358 = G__33359;
continue;
} else {
}
break;
}

var G__33356 = args33354.length;
switch (G__33356) {
case 2:
return sablono.core.drop_down33353.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down33353.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33354.length)].join('')));

}
});

sablono.core.drop_down33353.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down33353.call(null,name,options,null);
});

sablono.core.drop_down33353.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down33353.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down33353);
/**
 * Creates a text area element.
 */
sablono.core.text_area33361 = (function sablono$core$text_area33361(var_args){
var args33362 = [];
var len__25923__auto___33365 = arguments.length;
var i__25924__auto___33366 = (0);
while(true){
if((i__25924__auto___33366 < len__25923__auto___33365)){
args33362.push((arguments[i__25924__auto___33366]));

var G__33367 = (i__25924__auto___33366 + (1));
i__25924__auto___33366 = G__33367;
continue;
} else {
}
break;
}

var G__33364 = args33362.length;
switch (G__33364) {
case 1:
return sablono.core.text_area33361.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area33361.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33362.length)].join('')));

}
});

sablono.core.text_area33361.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area33361.call(null,name,null);
});

sablono.core.text_area33361.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area33361.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area33361);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label33369 = (function sablono$core$label33369(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label33369);
/**
 * Creates a submit button.
 */
sablono.core.submit_button33370 = (function sablono$core$submit_button33370(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button33370);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button33371 = (function sablono$core$reset_button33371(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button33371);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to33372 = (function sablono$core$form_to33372(var_args){
var args__25930__auto__ = [];
var len__25923__auto___33379 = arguments.length;
var i__25924__auto___33380 = (0);
while(true){
if((i__25924__auto___33380 < len__25923__auto___33379)){
args__25930__auto__.push((arguments[i__25924__auto___33380]));

var G__33381 = (i__25924__auto___33380 + (1));
i__25924__auto___33380 = G__33381;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to33372.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.form_to33372.cljs$core$IFn$_invoke$arity$variadic = (function (p__33375,body){
var vec__33376 = p__33375;
var method = cljs.core.nth.call(null,vec__33376,(0),null);
var action = cljs.core.nth.call(null,vec__33376,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to33372.cljs$lang$maxFixedArity = (1);

sablono.core.form_to33372.cljs$lang$applyTo = (function (seq33373){
var G__33374 = cljs.core.first.call(null,seq33373);
var seq33373__$1 = cljs.core.next.call(null,seq33373);
return sablono.core.form_to33372.cljs$core$IFn$_invoke$arity$variadic(G__33374,seq33373__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to33372);

//# sourceMappingURL=core.js.map?rel=1523267564921