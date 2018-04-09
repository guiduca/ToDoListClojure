// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__25834__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_32185_32187 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_32186_32188 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_32185_32187,_STAR_print_fn_STAR_32186_32188,sb__25834__auto__){
return (function (x__25835__auto__){
return sb__25834__auto__.append(x__25835__auto__);
});})(_STAR_print_newline_STAR_32185_32187,_STAR_print_fn_STAR_32186_32188,sb__25834__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32186_32188;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32185_32187;
}
return [cljs.core.str(sb__25834__auto__)].join('');
}catch (e32183){if((e32183 instanceof Error)){
var e1 = e32183;
try{return obj.toString();
}catch (e32184){if((e32184 instanceof Error)){
var e2 = e32184;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e32184;

}
}} else {
throw e32183;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_32190 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_32190;
}});

//# sourceMappingURL=utils.js.map?rel=1523250222407