// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args37133 = [];
var len__25923__auto___37136 = arguments.length;
var i__25924__auto___37137 = (0);
while(true){
if((i__25924__auto___37137 < len__25923__auto___37136)){
args37133.push((arguments[i__25924__auto___37137]));

var G__37138 = (i__25924__auto___37137 + (1));
i__25924__auto___37137 = G__37138;
continue;
} else {
}
break;
}

var G__37135 = args37133.length;
switch (G__37135) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37133.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___37141 = arguments.length;
var i__25924__auto___37142 = (0);
while(true){
if((i__25924__auto___37142 < len__25923__auto___37141)){
args__25930__auto__.push((arguments[i__25924__auto___37142]));

var G__37143 = (i__25924__auto___37142 + (1));
i__25924__auto___37142 = G__37143;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37140){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37140));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___37145 = arguments.length;
var i__25924__auto___37146 = (0);
while(true){
if((i__25924__auto___37146 < len__25923__auto___37145)){
args__25930__auto__.push((arguments[i__25924__auto___37146]));

var G__37147 = (i__25924__auto___37146 + (1));
i__25924__auto___37146 = G__37147;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37144){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37144));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37148){
var map__37151 = p__37148;
var map__37151__$1 = ((((!((map__37151 == null)))?((((map__37151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37151):map__37151);
var message = cljs.core.get.call(null,map__37151__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37151__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24848__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24836__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24836__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24836__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27796__auto___37313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___37313,ch){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___37313,ch){
return (function (state_37282){
var state_val_37283 = (state_37282[(1)]);
if((state_val_37283 === (7))){
var inst_37278 = (state_37282[(2)]);
var state_37282__$1 = state_37282;
var statearr_37284_37314 = state_37282__$1;
(statearr_37284_37314[(2)] = inst_37278);

(statearr_37284_37314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (1))){
var state_37282__$1 = state_37282;
var statearr_37285_37315 = state_37282__$1;
(statearr_37285_37315[(2)] = null);

(statearr_37285_37315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (4))){
var inst_37235 = (state_37282[(7)]);
var inst_37235__$1 = (state_37282[(2)]);
var state_37282__$1 = (function (){var statearr_37286 = state_37282;
(statearr_37286[(7)] = inst_37235__$1);

return statearr_37286;
})();
if(cljs.core.truth_(inst_37235__$1)){
var statearr_37287_37316 = state_37282__$1;
(statearr_37287_37316[(1)] = (5));

} else {
var statearr_37288_37317 = state_37282__$1;
(statearr_37288_37317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (15))){
var inst_37242 = (state_37282[(8)]);
var inst_37257 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37242);
var inst_37258 = cljs.core.first.call(null,inst_37257);
var inst_37259 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37258);
var inst_37260 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37259)].join('');
var inst_37261 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37260);
var state_37282__$1 = state_37282;
var statearr_37289_37318 = state_37282__$1;
(statearr_37289_37318[(2)] = inst_37261);

(statearr_37289_37318[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (13))){
var inst_37266 = (state_37282[(2)]);
var state_37282__$1 = state_37282;
var statearr_37290_37319 = state_37282__$1;
(statearr_37290_37319[(2)] = inst_37266);

(statearr_37290_37319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (6))){
var state_37282__$1 = state_37282;
var statearr_37291_37320 = state_37282__$1;
(statearr_37291_37320[(2)] = null);

(statearr_37291_37320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (17))){
var inst_37264 = (state_37282[(2)]);
var state_37282__$1 = state_37282;
var statearr_37292_37321 = state_37282__$1;
(statearr_37292_37321[(2)] = inst_37264);

(statearr_37292_37321[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (3))){
var inst_37280 = (state_37282[(2)]);
var state_37282__$1 = state_37282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37282__$1,inst_37280);
} else {
if((state_val_37283 === (12))){
var inst_37241 = (state_37282[(9)]);
var inst_37255 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37241,opts);
var state_37282__$1 = state_37282;
if(cljs.core.truth_(inst_37255)){
var statearr_37293_37322 = state_37282__$1;
(statearr_37293_37322[(1)] = (15));

} else {
var statearr_37294_37323 = state_37282__$1;
(statearr_37294_37323[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (2))){
var state_37282__$1 = state_37282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37282__$1,(4),ch);
} else {
if((state_val_37283 === (11))){
var inst_37242 = (state_37282[(8)]);
var inst_37247 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37248 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37242);
var inst_37249 = cljs.core.async.timeout.call(null,(1000));
var inst_37250 = [inst_37248,inst_37249];
var inst_37251 = (new cljs.core.PersistentVector(null,2,(5),inst_37247,inst_37250,null));
var state_37282__$1 = state_37282;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37282__$1,(14),inst_37251);
} else {
if((state_val_37283 === (9))){
var inst_37242 = (state_37282[(8)]);
var inst_37268 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37269 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37242);
var inst_37270 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37269);
var inst_37271 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37270)].join('');
var inst_37272 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37271);
var state_37282__$1 = (function (){var statearr_37295 = state_37282;
(statearr_37295[(10)] = inst_37268);

return statearr_37295;
})();
var statearr_37296_37324 = state_37282__$1;
(statearr_37296_37324[(2)] = inst_37272);

(statearr_37296_37324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (5))){
var inst_37235 = (state_37282[(7)]);
var inst_37237 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37238 = (new cljs.core.PersistentArrayMap(null,2,inst_37237,null));
var inst_37239 = (new cljs.core.PersistentHashSet(null,inst_37238,null));
var inst_37240 = figwheel.client.focus_msgs.call(null,inst_37239,inst_37235);
var inst_37241 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37240);
var inst_37242 = cljs.core.first.call(null,inst_37240);
var inst_37243 = figwheel.client.autoload_QMARK_.call(null);
var state_37282__$1 = (function (){var statearr_37297 = state_37282;
(statearr_37297[(8)] = inst_37242);

(statearr_37297[(9)] = inst_37241);

return statearr_37297;
})();
if(cljs.core.truth_(inst_37243)){
var statearr_37298_37325 = state_37282__$1;
(statearr_37298_37325[(1)] = (8));

} else {
var statearr_37299_37326 = state_37282__$1;
(statearr_37299_37326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (14))){
var inst_37253 = (state_37282[(2)]);
var state_37282__$1 = state_37282;
var statearr_37300_37327 = state_37282__$1;
(statearr_37300_37327[(2)] = inst_37253);

(statearr_37300_37327[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (16))){
var state_37282__$1 = state_37282;
var statearr_37301_37328 = state_37282__$1;
(statearr_37301_37328[(2)] = null);

(statearr_37301_37328[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (10))){
var inst_37274 = (state_37282[(2)]);
var state_37282__$1 = (function (){var statearr_37302 = state_37282;
(statearr_37302[(11)] = inst_37274);

return statearr_37302;
})();
var statearr_37303_37329 = state_37282__$1;
(statearr_37303_37329[(2)] = null);

(statearr_37303_37329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37283 === (8))){
var inst_37241 = (state_37282[(9)]);
var inst_37245 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37241,opts);
var state_37282__$1 = state_37282;
if(cljs.core.truth_(inst_37245)){
var statearr_37304_37330 = state_37282__$1;
(statearr_37304_37330[(1)] = (11));

} else {
var statearr_37305_37331 = state_37282__$1;
(statearr_37305_37331[(1)] = (12));

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
});})(c__27796__auto___37313,ch))
;
return ((function (switch__27775__auto__,c__27796__auto___37313,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27776__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27776__auto____0 = (function (){
var statearr_37309 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37309[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27776__auto__);

(statearr_37309[(1)] = (1));

return statearr_37309;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27776__auto____1 = (function (state_37282){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_37282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e37310){if((e37310 instanceof Object)){
var ex__27779__auto__ = e37310;
var statearr_37311_37332 = state_37282;
(statearr_37311_37332[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37333 = state_37282;
state_37282 = G__37333;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27776__auto__ = function(state_37282){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27776__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27776__auto____1.call(this,state_37282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27776__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27776__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___37313,ch))
})();
var state__27798__auto__ = (function (){var statearr_37312 = f__27797__auto__.call(null);
(statearr_37312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___37313);

return statearr_37312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___37313,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37334_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37334_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37337 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37337){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37336){if((e37336 instanceof Error)){
var e = e37336;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37337], null));
} else {
var e = e37336;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37337))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37338){
var map__37347 = p__37338;
var map__37347__$1 = ((((!((map__37347 == null)))?((((map__37347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37347):map__37347);
var opts = map__37347__$1;
var build_id = cljs.core.get.call(null,map__37347__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37347,map__37347__$1,opts,build_id){
return (function (p__37349){
var vec__37350 = p__37349;
var seq__37351 = cljs.core.seq.call(null,vec__37350);
var first__37352 = cljs.core.first.call(null,seq__37351);
var seq__37351__$1 = cljs.core.next.call(null,seq__37351);
var map__37353 = first__37352;
var map__37353__$1 = ((((!((map__37353 == null)))?((((map__37353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37353):map__37353);
var msg = map__37353__$1;
var msg_name = cljs.core.get.call(null,map__37353__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37351__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37350,seq__37351,first__37352,seq__37351__$1,map__37353,map__37353__$1,msg,msg_name,_,map__37347,map__37347__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37350,seq__37351,first__37352,seq__37351__$1,map__37353,map__37353__$1,msg,msg_name,_,map__37347,map__37347__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37347,map__37347__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37361){
var vec__37362 = p__37361;
var seq__37363 = cljs.core.seq.call(null,vec__37362);
var first__37364 = cljs.core.first.call(null,seq__37363);
var seq__37363__$1 = cljs.core.next.call(null,seq__37363);
var map__37365 = first__37364;
var map__37365__$1 = ((((!((map__37365 == null)))?((((map__37365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37365):map__37365);
var msg = map__37365__$1;
var msg_name = cljs.core.get.call(null,map__37365__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37363__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37367){
var map__37379 = p__37367;
var map__37379__$1 = ((((!((map__37379 == null)))?((((map__37379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37379):map__37379);
var on_compile_warning = cljs.core.get.call(null,map__37379__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37379__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37379,map__37379__$1,on_compile_warning,on_compile_fail){
return (function (p__37381){
var vec__37382 = p__37381;
var seq__37383 = cljs.core.seq.call(null,vec__37382);
var first__37384 = cljs.core.first.call(null,seq__37383);
var seq__37383__$1 = cljs.core.next.call(null,seq__37383);
var map__37385 = first__37384;
var map__37385__$1 = ((((!((map__37385 == null)))?((((map__37385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37385):map__37385);
var msg = map__37385__$1;
var msg_name = cljs.core.get.call(null,map__37385__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37383__$1;
var pred__37387 = cljs.core._EQ_;
var expr__37388 = msg_name;
if(cljs.core.truth_(pred__37387.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37388))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37387.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37388))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37379,map__37379__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto__,msg_hist,msg_names,msg){
return (function (state_37616){
var state_val_37617 = (state_37616[(1)]);
if((state_val_37617 === (7))){
var inst_37536 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
if(cljs.core.truth_(inst_37536)){
var statearr_37618_37668 = state_37616__$1;
(statearr_37618_37668[(1)] = (8));

} else {
var statearr_37619_37669 = state_37616__$1;
(statearr_37619_37669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (20))){
var inst_37610 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
var statearr_37620_37670 = state_37616__$1;
(statearr_37620_37670[(2)] = inst_37610);

(statearr_37620_37670[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (27))){
var inst_37606 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
var statearr_37621_37671 = state_37616__$1;
(statearr_37621_37671[(2)] = inst_37606);

(statearr_37621_37671[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (1))){
var inst_37529 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37616__$1 = state_37616;
if(cljs.core.truth_(inst_37529)){
var statearr_37622_37672 = state_37616__$1;
(statearr_37622_37672[(1)] = (2));

} else {
var statearr_37623_37673 = state_37616__$1;
(statearr_37623_37673[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (24))){
var inst_37608 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
var statearr_37624_37674 = state_37616__$1;
(statearr_37624_37674[(2)] = inst_37608);

(statearr_37624_37674[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (4))){
var inst_37614 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37616__$1,inst_37614);
} else {
if((state_val_37617 === (15))){
var inst_37612 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
var statearr_37625_37675 = state_37616__$1;
(statearr_37625_37675[(2)] = inst_37612);

(statearr_37625_37675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (21))){
var inst_37565 = (state_37616[(2)]);
var inst_37566 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37567 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37566);
var state_37616__$1 = (function (){var statearr_37626 = state_37616;
(statearr_37626[(7)] = inst_37565);

return statearr_37626;
})();
var statearr_37627_37676 = state_37616__$1;
(statearr_37627_37676[(2)] = inst_37567);

(statearr_37627_37676[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (31))){
var inst_37595 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37616__$1 = state_37616;
if(cljs.core.truth_(inst_37595)){
var statearr_37628_37677 = state_37616__$1;
(statearr_37628_37677[(1)] = (34));

} else {
var statearr_37629_37678 = state_37616__$1;
(statearr_37629_37678[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (32))){
var inst_37604 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
var statearr_37630_37679 = state_37616__$1;
(statearr_37630_37679[(2)] = inst_37604);

(statearr_37630_37679[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (33))){
var inst_37591 = (state_37616[(2)]);
var inst_37592 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37593 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37592);
var state_37616__$1 = (function (){var statearr_37631 = state_37616;
(statearr_37631[(8)] = inst_37591);

return statearr_37631;
})();
var statearr_37632_37680 = state_37616__$1;
(statearr_37632_37680[(2)] = inst_37593);

(statearr_37632_37680[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (13))){
var inst_37550 = figwheel.client.heads_up.clear.call(null);
var state_37616__$1 = state_37616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37616__$1,(16),inst_37550);
} else {
if((state_val_37617 === (22))){
var inst_37571 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37572 = figwheel.client.heads_up.append_warning_message.call(null,inst_37571);
var state_37616__$1 = state_37616;
var statearr_37633_37681 = state_37616__$1;
(statearr_37633_37681[(2)] = inst_37572);

(statearr_37633_37681[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (36))){
var inst_37602 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
var statearr_37634_37682 = state_37616__$1;
(statearr_37634_37682[(2)] = inst_37602);

(statearr_37634_37682[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (29))){
var inst_37582 = (state_37616[(2)]);
var inst_37583 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37584 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37583);
var state_37616__$1 = (function (){var statearr_37635 = state_37616;
(statearr_37635[(9)] = inst_37582);

return statearr_37635;
})();
var statearr_37636_37683 = state_37616__$1;
(statearr_37636_37683[(2)] = inst_37584);

(statearr_37636_37683[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (6))){
var inst_37531 = (state_37616[(10)]);
var state_37616__$1 = state_37616;
var statearr_37637_37684 = state_37616__$1;
(statearr_37637_37684[(2)] = inst_37531);

(statearr_37637_37684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (28))){
var inst_37578 = (state_37616[(2)]);
var inst_37579 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37580 = figwheel.client.heads_up.display_warning.call(null,inst_37579);
var state_37616__$1 = (function (){var statearr_37638 = state_37616;
(statearr_37638[(11)] = inst_37578);

return statearr_37638;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37616__$1,(29),inst_37580);
} else {
if((state_val_37617 === (25))){
var inst_37576 = figwheel.client.heads_up.clear.call(null);
var state_37616__$1 = state_37616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37616__$1,(28),inst_37576);
} else {
if((state_val_37617 === (34))){
var inst_37597 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37616__$1 = state_37616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37616__$1,(37),inst_37597);
} else {
if((state_val_37617 === (17))){
var inst_37556 = (state_37616[(2)]);
var inst_37557 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37558 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37557);
var state_37616__$1 = (function (){var statearr_37639 = state_37616;
(statearr_37639[(12)] = inst_37556);

return statearr_37639;
})();
var statearr_37640_37685 = state_37616__$1;
(statearr_37640_37685[(2)] = inst_37558);

(statearr_37640_37685[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (3))){
var inst_37548 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37616__$1 = state_37616;
if(cljs.core.truth_(inst_37548)){
var statearr_37641_37686 = state_37616__$1;
(statearr_37641_37686[(1)] = (13));

} else {
var statearr_37642_37687 = state_37616__$1;
(statearr_37642_37687[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (12))){
var inst_37544 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
var statearr_37643_37688 = state_37616__$1;
(statearr_37643_37688[(2)] = inst_37544);

(statearr_37643_37688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (2))){
var inst_37531 = (state_37616[(10)]);
var inst_37531__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37616__$1 = (function (){var statearr_37644 = state_37616;
(statearr_37644[(10)] = inst_37531__$1);

return statearr_37644;
})();
if(cljs.core.truth_(inst_37531__$1)){
var statearr_37645_37689 = state_37616__$1;
(statearr_37645_37689[(1)] = (5));

} else {
var statearr_37646_37690 = state_37616__$1;
(statearr_37646_37690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (23))){
var inst_37574 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37616__$1 = state_37616;
if(cljs.core.truth_(inst_37574)){
var statearr_37647_37691 = state_37616__$1;
(statearr_37647_37691[(1)] = (25));

} else {
var statearr_37648_37692 = state_37616__$1;
(statearr_37648_37692[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (35))){
var state_37616__$1 = state_37616;
var statearr_37649_37693 = state_37616__$1;
(statearr_37649_37693[(2)] = null);

(statearr_37649_37693[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (19))){
var inst_37569 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37616__$1 = state_37616;
if(cljs.core.truth_(inst_37569)){
var statearr_37650_37694 = state_37616__$1;
(statearr_37650_37694[(1)] = (22));

} else {
var statearr_37651_37695 = state_37616__$1;
(statearr_37651_37695[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (11))){
var inst_37540 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
var statearr_37652_37696 = state_37616__$1;
(statearr_37652_37696[(2)] = inst_37540);

(statearr_37652_37696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (9))){
var inst_37542 = figwheel.client.heads_up.clear.call(null);
var state_37616__$1 = state_37616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37616__$1,(12),inst_37542);
} else {
if((state_val_37617 === (5))){
var inst_37533 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37616__$1 = state_37616;
var statearr_37653_37697 = state_37616__$1;
(statearr_37653_37697[(2)] = inst_37533);

(statearr_37653_37697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (14))){
var inst_37560 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37616__$1 = state_37616;
if(cljs.core.truth_(inst_37560)){
var statearr_37654_37698 = state_37616__$1;
(statearr_37654_37698[(1)] = (18));

} else {
var statearr_37655_37699 = state_37616__$1;
(statearr_37655_37699[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (26))){
var inst_37586 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37616__$1 = state_37616;
if(cljs.core.truth_(inst_37586)){
var statearr_37656_37700 = state_37616__$1;
(statearr_37656_37700[(1)] = (30));

} else {
var statearr_37657_37701 = state_37616__$1;
(statearr_37657_37701[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (16))){
var inst_37552 = (state_37616[(2)]);
var inst_37553 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37554 = figwheel.client.heads_up.display_exception.call(null,inst_37553);
var state_37616__$1 = (function (){var statearr_37658 = state_37616;
(statearr_37658[(13)] = inst_37552);

return statearr_37658;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37616__$1,(17),inst_37554);
} else {
if((state_val_37617 === (30))){
var inst_37588 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37589 = figwheel.client.heads_up.display_warning.call(null,inst_37588);
var state_37616__$1 = state_37616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37616__$1,(33),inst_37589);
} else {
if((state_val_37617 === (10))){
var inst_37546 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
var statearr_37659_37702 = state_37616__$1;
(statearr_37659_37702[(2)] = inst_37546);

(statearr_37659_37702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (18))){
var inst_37562 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37563 = figwheel.client.heads_up.display_exception.call(null,inst_37562);
var state_37616__$1 = state_37616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37616__$1,(21),inst_37563);
} else {
if((state_val_37617 === (37))){
var inst_37599 = (state_37616[(2)]);
var state_37616__$1 = state_37616;
var statearr_37660_37703 = state_37616__$1;
(statearr_37660_37703[(2)] = inst_37599);

(statearr_37660_37703[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37617 === (8))){
var inst_37538 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37616__$1 = state_37616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37616__$1,(11),inst_37538);
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
});})(c__27796__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27775__auto__,c__27796__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27776__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27776__auto____0 = (function (){
var statearr_37664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37664[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27776__auto__);

(statearr_37664[(1)] = (1));

return statearr_37664;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27776__auto____1 = (function (state_37616){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_37616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e37665){if((e37665 instanceof Object)){
var ex__27779__auto__ = e37665;
var statearr_37666_37704 = state_37616;
(statearr_37666_37704[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37705 = state_37616;
state_37616 = G__37705;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27776__auto__ = function(state_37616){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27776__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27776__auto____1.call(this,state_37616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27776__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27776__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto__,msg_hist,msg_names,msg))
})();
var state__27798__auto__ = (function (){var statearr_37667 = f__27797__auto__.call(null);
(statearr_37667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto__);

return statearr_37667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto__,msg_hist,msg_names,msg))
);

return c__27796__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27796__auto___37768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto___37768,ch){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto___37768,ch){
return (function (state_37751){
var state_val_37752 = (state_37751[(1)]);
if((state_val_37752 === (1))){
var state_37751__$1 = state_37751;
var statearr_37753_37769 = state_37751__$1;
(statearr_37753_37769[(2)] = null);

(statearr_37753_37769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (2))){
var state_37751__$1 = state_37751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37751__$1,(4),ch);
} else {
if((state_val_37752 === (3))){
var inst_37749 = (state_37751[(2)]);
var state_37751__$1 = state_37751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37751__$1,inst_37749);
} else {
if((state_val_37752 === (4))){
var inst_37739 = (state_37751[(7)]);
var inst_37739__$1 = (state_37751[(2)]);
var state_37751__$1 = (function (){var statearr_37754 = state_37751;
(statearr_37754[(7)] = inst_37739__$1);

return statearr_37754;
})();
if(cljs.core.truth_(inst_37739__$1)){
var statearr_37755_37770 = state_37751__$1;
(statearr_37755_37770[(1)] = (5));

} else {
var statearr_37756_37771 = state_37751__$1;
(statearr_37756_37771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (5))){
var inst_37739 = (state_37751[(7)]);
var inst_37741 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37739);
var state_37751__$1 = state_37751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37751__$1,(8),inst_37741);
} else {
if((state_val_37752 === (6))){
var state_37751__$1 = state_37751;
var statearr_37757_37772 = state_37751__$1;
(statearr_37757_37772[(2)] = null);

(statearr_37757_37772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (7))){
var inst_37747 = (state_37751[(2)]);
var state_37751__$1 = state_37751;
var statearr_37758_37773 = state_37751__$1;
(statearr_37758_37773[(2)] = inst_37747);

(statearr_37758_37773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37752 === (8))){
var inst_37743 = (state_37751[(2)]);
var state_37751__$1 = (function (){var statearr_37759 = state_37751;
(statearr_37759[(8)] = inst_37743);

return statearr_37759;
})();
var statearr_37760_37774 = state_37751__$1;
(statearr_37760_37774[(2)] = null);

(statearr_37760_37774[(1)] = (2));


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
});})(c__27796__auto___37768,ch))
;
return ((function (switch__27775__auto__,c__27796__auto___37768,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27776__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27776__auto____0 = (function (){
var statearr_37764 = [null,null,null,null,null,null,null,null,null];
(statearr_37764[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27776__auto__);

(statearr_37764[(1)] = (1));

return statearr_37764;
});
var figwheel$client$heads_up_plugin_$_state_machine__27776__auto____1 = (function (state_37751){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_37751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e37765){if((e37765 instanceof Object)){
var ex__27779__auto__ = e37765;
var statearr_37766_37775 = state_37751;
(statearr_37766_37775[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37776 = state_37751;
state_37751 = G__37776;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27776__auto__ = function(state_37751){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27776__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27776__auto____1.call(this,state_37751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27776__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27776__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto___37768,ch))
})();
var state__27798__auto__ = (function (){var statearr_37767 = f__27797__auto__.call(null);
(statearr_37767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto___37768);

return statearr_37767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto___37768,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto__){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto__){
return (function (state_37797){
var state_val_37798 = (state_37797[(1)]);
if((state_val_37798 === (1))){
var inst_37792 = cljs.core.async.timeout.call(null,(3000));
var state_37797__$1 = state_37797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37797__$1,(2),inst_37792);
} else {
if((state_val_37798 === (2))){
var inst_37794 = (state_37797[(2)]);
var inst_37795 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37797__$1 = (function (){var statearr_37799 = state_37797;
(statearr_37799[(7)] = inst_37794);

return statearr_37799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37797__$1,inst_37795);
} else {
return null;
}
}
});})(c__27796__auto__))
;
return ((function (switch__27775__auto__,c__27796__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27776__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27776__auto____0 = (function (){
var statearr_37803 = [null,null,null,null,null,null,null,null];
(statearr_37803[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27776__auto__);

(statearr_37803[(1)] = (1));

return statearr_37803;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27776__auto____1 = (function (state_37797){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_37797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e37804){if((e37804 instanceof Object)){
var ex__27779__auto__ = e37804;
var statearr_37805_37807 = state_37797;
(statearr_37805_37807[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37808 = state_37797;
state_37797 = G__37808;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27776__auto__ = function(state_37797){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27776__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27776__auto____1.call(this,state_37797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27776__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27776__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto__))
})();
var state__27798__auto__ = (function (){var statearr_37806 = f__27797__auto__.call(null);
(statearr_37806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto__);

return statearr_37806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto__))
);

return c__27796__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27796__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27797__auto__ = (function (){var switch__27775__auto__ = ((function (c__27796__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37831){
var state_val_37832 = (state_37831[(1)]);
if((state_val_37832 === (1))){
var inst_37825 = cljs.core.async.timeout.call(null,(2000));
var state_37831__$1 = state_37831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37831__$1,(2),inst_37825);
} else {
if((state_val_37832 === (2))){
var inst_37827 = (state_37831[(2)]);
var inst_37828 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37829 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37828);
var state_37831__$1 = (function (){var statearr_37833 = state_37831;
(statearr_37833[(7)] = inst_37827);

return statearr_37833;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37831__$1,inst_37829);
} else {
return null;
}
}
});})(c__27796__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27775__auto__,c__27796__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27776__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27776__auto____0 = (function (){
var statearr_37837 = [null,null,null,null,null,null,null,null];
(statearr_37837[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27776__auto__);

(statearr_37837[(1)] = (1));

return statearr_37837;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27776__auto____1 = (function (state_37831){
while(true){
var ret_value__27777__auto__ = (function (){try{while(true){
var result__27778__auto__ = switch__27775__auto__.call(null,state_37831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27778__auto__;
}
break;
}
}catch (e37838){if((e37838 instanceof Object)){
var ex__27779__auto__ = e37838;
var statearr_37839_37841 = state_37831;
(statearr_37839_37841[(5)] = ex__27779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37842 = state_37831;
state_37831 = G__37842;
continue;
} else {
return ret_value__27777__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27776__auto__ = function(state_37831){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27776__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27776__auto____1.call(this,state_37831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27776__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27776__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27776__auto__;
})()
;})(switch__27775__auto__,c__27796__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27798__auto__ = (function (){var statearr_37840 = f__27797__auto__.call(null);
(statearr_37840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27796__auto__);

return statearr_37840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27798__auto__);
});})(c__27796__auto__,figwheel_version,temp__4657__auto__))
);

return c__27796__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37843){
var map__37847 = p__37843;
var map__37847__$1 = ((((!((map__37847 == null)))?((((map__37847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37847):map__37847);
var file = cljs.core.get.call(null,map__37847__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37847__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37847__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37849 = "";
var G__37849__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37849),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37849);
var G__37849__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37849__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37849__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = line;
if(cljs.core.truth_(and__24836__auto__)){
return column;
} else {
return and__24836__auto__;
}
})())){
return [cljs.core.str(G__37849__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37849__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37850){
var map__37857 = p__37850;
var map__37857__$1 = ((((!((map__37857 == null)))?((((map__37857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37857):map__37857);
var ed = map__37857__$1;
var formatted_exception = cljs.core.get.call(null,map__37857__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37857__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37857__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37859_37863 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37860_37864 = null;
var count__37861_37865 = (0);
var i__37862_37866 = (0);
while(true){
if((i__37862_37866 < count__37861_37865)){
var msg_37867 = cljs.core._nth.call(null,chunk__37860_37864,i__37862_37866);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37867);

var G__37868 = seq__37859_37863;
var G__37869 = chunk__37860_37864;
var G__37870 = count__37861_37865;
var G__37871 = (i__37862_37866 + (1));
seq__37859_37863 = G__37868;
chunk__37860_37864 = G__37869;
count__37861_37865 = G__37870;
i__37862_37866 = G__37871;
continue;
} else {
var temp__4657__auto___37872 = cljs.core.seq.call(null,seq__37859_37863);
if(temp__4657__auto___37872){
var seq__37859_37873__$1 = temp__4657__auto___37872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37859_37873__$1)){
var c__25659__auto___37874 = cljs.core.chunk_first.call(null,seq__37859_37873__$1);
var G__37875 = cljs.core.chunk_rest.call(null,seq__37859_37873__$1);
var G__37876 = c__25659__auto___37874;
var G__37877 = cljs.core.count.call(null,c__25659__auto___37874);
var G__37878 = (0);
seq__37859_37863 = G__37875;
chunk__37860_37864 = G__37876;
count__37861_37865 = G__37877;
i__37862_37866 = G__37878;
continue;
} else {
var msg_37879 = cljs.core.first.call(null,seq__37859_37873__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37879);

var G__37880 = cljs.core.next.call(null,seq__37859_37873__$1);
var G__37881 = null;
var G__37882 = (0);
var G__37883 = (0);
seq__37859_37863 = G__37880;
chunk__37860_37864 = G__37881;
count__37861_37865 = G__37882;
i__37862_37866 = G__37883;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37884){
var map__37887 = p__37884;
var map__37887__$1 = ((((!((map__37887 == null)))?((((map__37887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37887):map__37887);
var w = map__37887__$1;
var message = cljs.core.get.call(null,map__37887__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24836__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24836__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37899 = cljs.core.seq.call(null,plugins);
var chunk__37900 = null;
var count__37901 = (0);
var i__37902 = (0);
while(true){
if((i__37902 < count__37901)){
var vec__37903 = cljs.core._nth.call(null,chunk__37900,i__37902);
var k = cljs.core.nth.call(null,vec__37903,(0),null);
var plugin = cljs.core.nth.call(null,vec__37903,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37909 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37899,chunk__37900,count__37901,i__37902,pl_37909,vec__37903,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37909.call(null,msg_hist);
});})(seq__37899,chunk__37900,count__37901,i__37902,pl_37909,vec__37903,k,plugin))
);
} else {
}

var G__37910 = seq__37899;
var G__37911 = chunk__37900;
var G__37912 = count__37901;
var G__37913 = (i__37902 + (1));
seq__37899 = G__37910;
chunk__37900 = G__37911;
count__37901 = G__37912;
i__37902 = G__37913;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37899);
if(temp__4657__auto__){
var seq__37899__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37899__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__37899__$1);
var G__37914 = cljs.core.chunk_rest.call(null,seq__37899__$1);
var G__37915 = c__25659__auto__;
var G__37916 = cljs.core.count.call(null,c__25659__auto__);
var G__37917 = (0);
seq__37899 = G__37914;
chunk__37900 = G__37915;
count__37901 = G__37916;
i__37902 = G__37917;
continue;
} else {
var vec__37906 = cljs.core.first.call(null,seq__37899__$1);
var k = cljs.core.nth.call(null,vec__37906,(0),null);
var plugin = cljs.core.nth.call(null,vec__37906,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37918 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37899,chunk__37900,count__37901,i__37902,pl_37918,vec__37906,k,plugin,seq__37899__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37918.call(null,msg_hist);
});})(seq__37899,chunk__37900,count__37901,i__37902,pl_37918,vec__37906,k,plugin,seq__37899__$1,temp__4657__auto__))
);
} else {
}

var G__37919 = cljs.core.next.call(null,seq__37899__$1);
var G__37920 = null;
var G__37921 = (0);
var G__37922 = (0);
seq__37899 = G__37919;
chunk__37900 = G__37920;
count__37901 = G__37921;
i__37902 = G__37922;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37923 = [];
var len__25923__auto___37930 = arguments.length;
var i__25924__auto___37931 = (0);
while(true){
if((i__25924__auto___37931 < len__25923__auto___37930)){
args37923.push((arguments[i__25924__auto___37931]));

var G__37932 = (i__25924__auto___37931 + (1));
i__25924__auto___37931 = G__37932;
continue;
} else {
}
break;
}

var G__37925 = args37923.length;
switch (G__37925) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37923.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37926_37934 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37927_37935 = null;
var count__37928_37936 = (0);
var i__37929_37937 = (0);
while(true){
if((i__37929_37937 < count__37928_37936)){
var msg_37938 = cljs.core._nth.call(null,chunk__37927_37935,i__37929_37937);
figwheel.client.socket.handle_incoming_message.call(null,msg_37938);

var G__37939 = seq__37926_37934;
var G__37940 = chunk__37927_37935;
var G__37941 = count__37928_37936;
var G__37942 = (i__37929_37937 + (1));
seq__37926_37934 = G__37939;
chunk__37927_37935 = G__37940;
count__37928_37936 = G__37941;
i__37929_37937 = G__37942;
continue;
} else {
var temp__4657__auto___37943 = cljs.core.seq.call(null,seq__37926_37934);
if(temp__4657__auto___37943){
var seq__37926_37944__$1 = temp__4657__auto___37943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37926_37944__$1)){
var c__25659__auto___37945 = cljs.core.chunk_first.call(null,seq__37926_37944__$1);
var G__37946 = cljs.core.chunk_rest.call(null,seq__37926_37944__$1);
var G__37947 = c__25659__auto___37945;
var G__37948 = cljs.core.count.call(null,c__25659__auto___37945);
var G__37949 = (0);
seq__37926_37934 = G__37946;
chunk__37927_37935 = G__37947;
count__37928_37936 = G__37948;
i__37929_37937 = G__37949;
continue;
} else {
var msg_37950 = cljs.core.first.call(null,seq__37926_37944__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37950);

var G__37951 = cljs.core.next.call(null,seq__37926_37944__$1);
var G__37952 = null;
var G__37953 = (0);
var G__37954 = (0);
seq__37926_37934 = G__37951;
chunk__37927_37935 = G__37952;
count__37928_37936 = G__37953;
i__37929_37937 = G__37954;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25930__auto__ = [];
var len__25923__auto___37959 = arguments.length;
var i__25924__auto___37960 = (0);
while(true){
if((i__25924__auto___37960 < len__25923__auto___37959)){
args__25930__auto__.push((arguments[i__25924__auto___37960]));

var G__37961 = (i__25924__auto___37960 + (1));
i__25924__auto___37960 = G__37961;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37956){
var map__37957 = p__37956;
var map__37957__$1 = ((((!((map__37957 == null)))?((((map__37957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37957):map__37957);
var opts = map__37957__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37955){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37955));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37963){if((e37963 instanceof Error)){
var e = e37963;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37963;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37967){
var map__37968 = p__37967;
var map__37968__$1 = ((((!((map__37968 == null)))?((((map__37968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37968):map__37968);
var msg_name = cljs.core.get.call(null,map__37968__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1523267572436