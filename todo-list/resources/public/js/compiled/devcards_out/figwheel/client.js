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
var args36943 = [];
var len__25923__auto___36946 = arguments.length;
var i__25924__auto___36947 = (0);
while(true){
if((i__25924__auto___36947 < len__25923__auto___36946)){
args36943.push((arguments[i__25924__auto___36947]));

var G__36948 = (i__25924__auto___36947 + (1));
i__25924__auto___36947 = G__36948;
continue;
} else {
}
break;
}

var G__36945 = args36943.length;
switch (G__36945) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36943.length)].join('')));

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
var len__25923__auto___36951 = arguments.length;
var i__25924__auto___36952 = (0);
while(true){
if((i__25924__auto___36952 < len__25923__auto___36951)){
args__25930__auto__.push((arguments[i__25924__auto___36952]));

var G__36953 = (i__25924__auto___36952 + (1));
i__25924__auto___36952 = G__36953;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36950){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36950));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___36955 = arguments.length;
var i__25924__auto___36956 = (0);
while(true){
if((i__25924__auto___36956 < len__25923__auto___36955)){
args__25930__auto__.push((arguments[i__25924__auto___36956]));

var G__36957 = (i__25924__auto___36956 + (1));
i__25924__auto___36956 = G__36957;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36954){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36954));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36958){
var map__36961 = p__36958;
var map__36961__$1 = ((((!((map__36961 == null)))?((((map__36961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36961):map__36961);
var message = cljs.core.get.call(null,map__36961__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36961__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__29924__auto___37123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___37123,ch){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___37123,ch){
return (function (state_37092){
var state_val_37093 = (state_37092[(1)]);
if((state_val_37093 === (7))){
var inst_37088 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37094_37124 = state_37092__$1;
(statearr_37094_37124[(2)] = inst_37088);

(statearr_37094_37124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (1))){
var state_37092__$1 = state_37092;
var statearr_37095_37125 = state_37092__$1;
(statearr_37095_37125[(2)] = null);

(statearr_37095_37125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (4))){
var inst_37045 = (state_37092[(7)]);
var inst_37045__$1 = (state_37092[(2)]);
var state_37092__$1 = (function (){var statearr_37096 = state_37092;
(statearr_37096[(7)] = inst_37045__$1);

return statearr_37096;
})();
if(cljs.core.truth_(inst_37045__$1)){
var statearr_37097_37126 = state_37092__$1;
(statearr_37097_37126[(1)] = (5));

} else {
var statearr_37098_37127 = state_37092__$1;
(statearr_37098_37127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (15))){
var inst_37052 = (state_37092[(8)]);
var inst_37067 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37052);
var inst_37068 = cljs.core.first.call(null,inst_37067);
var inst_37069 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37068);
var inst_37070 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37069)].join('');
var inst_37071 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37070);
var state_37092__$1 = state_37092;
var statearr_37099_37128 = state_37092__$1;
(statearr_37099_37128[(2)] = inst_37071);

(statearr_37099_37128[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (13))){
var inst_37076 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37100_37129 = state_37092__$1;
(statearr_37100_37129[(2)] = inst_37076);

(statearr_37100_37129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (6))){
var state_37092__$1 = state_37092;
var statearr_37101_37130 = state_37092__$1;
(statearr_37101_37130[(2)] = null);

(statearr_37101_37130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (17))){
var inst_37074 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37102_37131 = state_37092__$1;
(statearr_37102_37131[(2)] = inst_37074);

(statearr_37102_37131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (3))){
var inst_37090 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37092__$1,inst_37090);
} else {
if((state_val_37093 === (12))){
var inst_37051 = (state_37092[(9)]);
var inst_37065 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37051,opts);
var state_37092__$1 = state_37092;
if(cljs.core.truth_(inst_37065)){
var statearr_37103_37132 = state_37092__$1;
(statearr_37103_37132[(1)] = (15));

} else {
var statearr_37104_37133 = state_37092__$1;
(statearr_37104_37133[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (2))){
var state_37092__$1 = state_37092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37092__$1,(4),ch);
} else {
if((state_val_37093 === (11))){
var inst_37052 = (state_37092[(8)]);
var inst_37057 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37058 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37052);
var inst_37059 = cljs.core.async.timeout.call(null,(1000));
var inst_37060 = [inst_37058,inst_37059];
var inst_37061 = (new cljs.core.PersistentVector(null,2,(5),inst_37057,inst_37060,null));
var state_37092__$1 = state_37092;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37092__$1,(14),inst_37061);
} else {
if((state_val_37093 === (9))){
var inst_37052 = (state_37092[(8)]);
var inst_37078 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37079 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37052);
var inst_37080 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37079);
var inst_37081 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37080)].join('');
var inst_37082 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37081);
var state_37092__$1 = (function (){var statearr_37105 = state_37092;
(statearr_37105[(10)] = inst_37078);

return statearr_37105;
})();
var statearr_37106_37134 = state_37092__$1;
(statearr_37106_37134[(2)] = inst_37082);

(statearr_37106_37134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (5))){
var inst_37045 = (state_37092[(7)]);
var inst_37047 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37048 = (new cljs.core.PersistentArrayMap(null,2,inst_37047,null));
var inst_37049 = (new cljs.core.PersistentHashSet(null,inst_37048,null));
var inst_37050 = figwheel.client.focus_msgs.call(null,inst_37049,inst_37045);
var inst_37051 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37050);
var inst_37052 = cljs.core.first.call(null,inst_37050);
var inst_37053 = figwheel.client.autoload_QMARK_.call(null);
var state_37092__$1 = (function (){var statearr_37107 = state_37092;
(statearr_37107[(8)] = inst_37052);

(statearr_37107[(9)] = inst_37051);

return statearr_37107;
})();
if(cljs.core.truth_(inst_37053)){
var statearr_37108_37135 = state_37092__$1;
(statearr_37108_37135[(1)] = (8));

} else {
var statearr_37109_37136 = state_37092__$1;
(statearr_37109_37136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (14))){
var inst_37063 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37110_37137 = state_37092__$1;
(statearr_37110_37137[(2)] = inst_37063);

(statearr_37110_37137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (16))){
var state_37092__$1 = state_37092;
var statearr_37111_37138 = state_37092__$1;
(statearr_37111_37138[(2)] = null);

(statearr_37111_37138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (10))){
var inst_37084 = (state_37092[(2)]);
var state_37092__$1 = (function (){var statearr_37112 = state_37092;
(statearr_37112[(11)] = inst_37084);

return statearr_37112;
})();
var statearr_37113_37139 = state_37092__$1;
(statearr_37113_37139[(2)] = null);

(statearr_37113_37139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (8))){
var inst_37051 = (state_37092[(9)]);
var inst_37055 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37051,opts);
var state_37092__$1 = state_37092;
if(cljs.core.truth_(inst_37055)){
var statearr_37114_37140 = state_37092__$1;
(statearr_37114_37140[(1)] = (11));

} else {
var statearr_37115_37141 = state_37092__$1;
(statearr_37115_37141[(1)] = (12));

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
});})(c__29924__auto___37123,ch))
;
return ((function (switch__29859__auto__,c__29924__auto___37123,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29860__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29860__auto____0 = (function (){
var statearr_37119 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37119[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29860__auto__);

(statearr_37119[(1)] = (1));

return statearr_37119;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29860__auto____1 = (function (state_37092){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_37092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e37120){if((e37120 instanceof Object)){
var ex__29863__auto__ = e37120;
var statearr_37121_37142 = state_37092;
(statearr_37121_37142[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37143 = state_37092;
state_37092 = G__37143;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29860__auto__ = function(state_37092){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29860__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29860__auto____1.call(this,state_37092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29860__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29860__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___37123,ch))
})();
var state__29926__auto__ = (function (){var statearr_37122 = f__29925__auto__.call(null);
(statearr_37122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___37123);

return statearr_37122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___37123,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37144_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37144_SHARP_));
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
var base_path_37147 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37147){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37146){if((e37146 instanceof Error)){
var e = e37146;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37147], null));
} else {
var e = e37146;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37147))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37148){
var map__37157 = p__37148;
var map__37157__$1 = ((((!((map__37157 == null)))?((((map__37157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37157):map__37157);
var opts = map__37157__$1;
var build_id = cljs.core.get.call(null,map__37157__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37157,map__37157__$1,opts,build_id){
return (function (p__37159){
var vec__37160 = p__37159;
var seq__37161 = cljs.core.seq.call(null,vec__37160);
var first__37162 = cljs.core.first.call(null,seq__37161);
var seq__37161__$1 = cljs.core.next.call(null,seq__37161);
var map__37163 = first__37162;
var map__37163__$1 = ((((!((map__37163 == null)))?((((map__37163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37163):map__37163);
var msg = map__37163__$1;
var msg_name = cljs.core.get.call(null,map__37163__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37161__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37160,seq__37161,first__37162,seq__37161__$1,map__37163,map__37163__$1,msg,msg_name,_,map__37157,map__37157__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37160,seq__37161,first__37162,seq__37161__$1,map__37163,map__37163__$1,msg,msg_name,_,map__37157,map__37157__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37157,map__37157__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37171){
var vec__37172 = p__37171;
var seq__37173 = cljs.core.seq.call(null,vec__37172);
var first__37174 = cljs.core.first.call(null,seq__37173);
var seq__37173__$1 = cljs.core.next.call(null,seq__37173);
var map__37175 = first__37174;
var map__37175__$1 = ((((!((map__37175 == null)))?((((map__37175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37175):map__37175);
var msg = map__37175__$1;
var msg_name = cljs.core.get.call(null,map__37175__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37173__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37177){
var map__37189 = p__37177;
var map__37189__$1 = ((((!((map__37189 == null)))?((((map__37189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37189):map__37189);
var on_compile_warning = cljs.core.get.call(null,map__37189__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37189__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37189,map__37189__$1,on_compile_warning,on_compile_fail){
return (function (p__37191){
var vec__37192 = p__37191;
var seq__37193 = cljs.core.seq.call(null,vec__37192);
var first__37194 = cljs.core.first.call(null,seq__37193);
var seq__37193__$1 = cljs.core.next.call(null,seq__37193);
var map__37195 = first__37194;
var map__37195__$1 = ((((!((map__37195 == null)))?((((map__37195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37195):map__37195);
var msg = map__37195__$1;
var msg_name = cljs.core.get.call(null,map__37195__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37193__$1;
var pred__37197 = cljs.core._EQ_;
var expr__37198 = msg_name;
if(cljs.core.truth_(pred__37197.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37198))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37197.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37198))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37189,map__37189__$1,on_compile_warning,on_compile_fail))
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
var c__29924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto__,msg_hist,msg_names,msg){
return (function (state_37426){
var state_val_37427 = (state_37426[(1)]);
if((state_val_37427 === (7))){
var inst_37346 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
if(cljs.core.truth_(inst_37346)){
var statearr_37428_37478 = state_37426__$1;
(statearr_37428_37478[(1)] = (8));

} else {
var statearr_37429_37479 = state_37426__$1;
(statearr_37429_37479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (20))){
var inst_37420 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
var statearr_37430_37480 = state_37426__$1;
(statearr_37430_37480[(2)] = inst_37420);

(statearr_37430_37480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (27))){
var inst_37416 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
var statearr_37431_37481 = state_37426__$1;
(statearr_37431_37481[(2)] = inst_37416);

(statearr_37431_37481[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (1))){
var inst_37339 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37426__$1 = state_37426;
if(cljs.core.truth_(inst_37339)){
var statearr_37432_37482 = state_37426__$1;
(statearr_37432_37482[(1)] = (2));

} else {
var statearr_37433_37483 = state_37426__$1;
(statearr_37433_37483[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (24))){
var inst_37418 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
var statearr_37434_37484 = state_37426__$1;
(statearr_37434_37484[(2)] = inst_37418);

(statearr_37434_37484[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (4))){
var inst_37424 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37426__$1,inst_37424);
} else {
if((state_val_37427 === (15))){
var inst_37422 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
var statearr_37435_37485 = state_37426__$1;
(statearr_37435_37485[(2)] = inst_37422);

(statearr_37435_37485[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (21))){
var inst_37375 = (state_37426[(2)]);
var inst_37376 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37377 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37376);
var state_37426__$1 = (function (){var statearr_37436 = state_37426;
(statearr_37436[(7)] = inst_37375);

return statearr_37436;
})();
var statearr_37437_37486 = state_37426__$1;
(statearr_37437_37486[(2)] = inst_37377);

(statearr_37437_37486[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (31))){
var inst_37405 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37426__$1 = state_37426;
if(cljs.core.truth_(inst_37405)){
var statearr_37438_37487 = state_37426__$1;
(statearr_37438_37487[(1)] = (34));

} else {
var statearr_37439_37488 = state_37426__$1;
(statearr_37439_37488[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (32))){
var inst_37414 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
var statearr_37440_37489 = state_37426__$1;
(statearr_37440_37489[(2)] = inst_37414);

(statearr_37440_37489[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (33))){
var inst_37401 = (state_37426[(2)]);
var inst_37402 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37403 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37402);
var state_37426__$1 = (function (){var statearr_37441 = state_37426;
(statearr_37441[(8)] = inst_37401);

return statearr_37441;
})();
var statearr_37442_37490 = state_37426__$1;
(statearr_37442_37490[(2)] = inst_37403);

(statearr_37442_37490[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (13))){
var inst_37360 = figwheel.client.heads_up.clear.call(null);
var state_37426__$1 = state_37426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37426__$1,(16),inst_37360);
} else {
if((state_val_37427 === (22))){
var inst_37381 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37382 = figwheel.client.heads_up.append_warning_message.call(null,inst_37381);
var state_37426__$1 = state_37426;
var statearr_37443_37491 = state_37426__$1;
(statearr_37443_37491[(2)] = inst_37382);

(statearr_37443_37491[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (36))){
var inst_37412 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
var statearr_37444_37492 = state_37426__$1;
(statearr_37444_37492[(2)] = inst_37412);

(statearr_37444_37492[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (29))){
var inst_37392 = (state_37426[(2)]);
var inst_37393 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37394 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37393);
var state_37426__$1 = (function (){var statearr_37445 = state_37426;
(statearr_37445[(9)] = inst_37392);

return statearr_37445;
})();
var statearr_37446_37493 = state_37426__$1;
(statearr_37446_37493[(2)] = inst_37394);

(statearr_37446_37493[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (6))){
var inst_37341 = (state_37426[(10)]);
var state_37426__$1 = state_37426;
var statearr_37447_37494 = state_37426__$1;
(statearr_37447_37494[(2)] = inst_37341);

(statearr_37447_37494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (28))){
var inst_37388 = (state_37426[(2)]);
var inst_37389 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37390 = figwheel.client.heads_up.display_warning.call(null,inst_37389);
var state_37426__$1 = (function (){var statearr_37448 = state_37426;
(statearr_37448[(11)] = inst_37388);

return statearr_37448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37426__$1,(29),inst_37390);
} else {
if((state_val_37427 === (25))){
var inst_37386 = figwheel.client.heads_up.clear.call(null);
var state_37426__$1 = state_37426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37426__$1,(28),inst_37386);
} else {
if((state_val_37427 === (34))){
var inst_37407 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37426__$1 = state_37426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37426__$1,(37),inst_37407);
} else {
if((state_val_37427 === (17))){
var inst_37366 = (state_37426[(2)]);
var inst_37367 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37368 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37367);
var state_37426__$1 = (function (){var statearr_37449 = state_37426;
(statearr_37449[(12)] = inst_37366);

return statearr_37449;
})();
var statearr_37450_37495 = state_37426__$1;
(statearr_37450_37495[(2)] = inst_37368);

(statearr_37450_37495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (3))){
var inst_37358 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37426__$1 = state_37426;
if(cljs.core.truth_(inst_37358)){
var statearr_37451_37496 = state_37426__$1;
(statearr_37451_37496[(1)] = (13));

} else {
var statearr_37452_37497 = state_37426__$1;
(statearr_37452_37497[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (12))){
var inst_37354 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
var statearr_37453_37498 = state_37426__$1;
(statearr_37453_37498[(2)] = inst_37354);

(statearr_37453_37498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (2))){
var inst_37341 = (state_37426[(10)]);
var inst_37341__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37426__$1 = (function (){var statearr_37454 = state_37426;
(statearr_37454[(10)] = inst_37341__$1);

return statearr_37454;
})();
if(cljs.core.truth_(inst_37341__$1)){
var statearr_37455_37499 = state_37426__$1;
(statearr_37455_37499[(1)] = (5));

} else {
var statearr_37456_37500 = state_37426__$1;
(statearr_37456_37500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (23))){
var inst_37384 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37426__$1 = state_37426;
if(cljs.core.truth_(inst_37384)){
var statearr_37457_37501 = state_37426__$1;
(statearr_37457_37501[(1)] = (25));

} else {
var statearr_37458_37502 = state_37426__$1;
(statearr_37458_37502[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (35))){
var state_37426__$1 = state_37426;
var statearr_37459_37503 = state_37426__$1;
(statearr_37459_37503[(2)] = null);

(statearr_37459_37503[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (19))){
var inst_37379 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37426__$1 = state_37426;
if(cljs.core.truth_(inst_37379)){
var statearr_37460_37504 = state_37426__$1;
(statearr_37460_37504[(1)] = (22));

} else {
var statearr_37461_37505 = state_37426__$1;
(statearr_37461_37505[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (11))){
var inst_37350 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
var statearr_37462_37506 = state_37426__$1;
(statearr_37462_37506[(2)] = inst_37350);

(statearr_37462_37506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (9))){
var inst_37352 = figwheel.client.heads_up.clear.call(null);
var state_37426__$1 = state_37426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37426__$1,(12),inst_37352);
} else {
if((state_val_37427 === (5))){
var inst_37343 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37426__$1 = state_37426;
var statearr_37463_37507 = state_37426__$1;
(statearr_37463_37507[(2)] = inst_37343);

(statearr_37463_37507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (14))){
var inst_37370 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37426__$1 = state_37426;
if(cljs.core.truth_(inst_37370)){
var statearr_37464_37508 = state_37426__$1;
(statearr_37464_37508[(1)] = (18));

} else {
var statearr_37465_37509 = state_37426__$1;
(statearr_37465_37509[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (26))){
var inst_37396 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37426__$1 = state_37426;
if(cljs.core.truth_(inst_37396)){
var statearr_37466_37510 = state_37426__$1;
(statearr_37466_37510[(1)] = (30));

} else {
var statearr_37467_37511 = state_37426__$1;
(statearr_37467_37511[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (16))){
var inst_37362 = (state_37426[(2)]);
var inst_37363 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37364 = figwheel.client.heads_up.display_exception.call(null,inst_37363);
var state_37426__$1 = (function (){var statearr_37468 = state_37426;
(statearr_37468[(13)] = inst_37362);

return statearr_37468;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37426__$1,(17),inst_37364);
} else {
if((state_val_37427 === (30))){
var inst_37398 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37399 = figwheel.client.heads_up.display_warning.call(null,inst_37398);
var state_37426__$1 = state_37426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37426__$1,(33),inst_37399);
} else {
if((state_val_37427 === (10))){
var inst_37356 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
var statearr_37469_37512 = state_37426__$1;
(statearr_37469_37512[(2)] = inst_37356);

(statearr_37469_37512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (18))){
var inst_37372 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37373 = figwheel.client.heads_up.display_exception.call(null,inst_37372);
var state_37426__$1 = state_37426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37426__$1,(21),inst_37373);
} else {
if((state_val_37427 === (37))){
var inst_37409 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
var statearr_37470_37513 = state_37426__$1;
(statearr_37470_37513[(2)] = inst_37409);

(statearr_37470_37513[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (8))){
var inst_37348 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37426__$1 = state_37426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37426__$1,(11),inst_37348);
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
});})(c__29924__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29859__auto__,c__29924__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto____0 = (function (){
var statearr_37474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37474[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto__);

(statearr_37474[(1)] = (1));

return statearr_37474;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto____1 = (function (state_37426){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_37426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e37475){if((e37475 instanceof Object)){
var ex__29863__auto__ = e37475;
var statearr_37476_37514 = state_37426;
(statearr_37476_37514[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37515 = state_37426;
state_37426 = G__37515;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto__ = function(state_37426){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto____1.call(this,state_37426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto__,msg_hist,msg_names,msg))
})();
var state__29926__auto__ = (function (){var statearr_37477 = f__29925__auto__.call(null);
(statearr_37477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto__);

return statearr_37477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto__,msg_hist,msg_names,msg))
);

return c__29924__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29924__auto___37578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto___37578,ch){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto___37578,ch){
return (function (state_37561){
var state_val_37562 = (state_37561[(1)]);
if((state_val_37562 === (1))){
var state_37561__$1 = state_37561;
var statearr_37563_37579 = state_37561__$1;
(statearr_37563_37579[(2)] = null);

(statearr_37563_37579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (2))){
var state_37561__$1 = state_37561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37561__$1,(4),ch);
} else {
if((state_val_37562 === (3))){
var inst_37559 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37561__$1,inst_37559);
} else {
if((state_val_37562 === (4))){
var inst_37549 = (state_37561[(7)]);
var inst_37549__$1 = (state_37561[(2)]);
var state_37561__$1 = (function (){var statearr_37564 = state_37561;
(statearr_37564[(7)] = inst_37549__$1);

return statearr_37564;
})();
if(cljs.core.truth_(inst_37549__$1)){
var statearr_37565_37580 = state_37561__$1;
(statearr_37565_37580[(1)] = (5));

} else {
var statearr_37566_37581 = state_37561__$1;
(statearr_37566_37581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (5))){
var inst_37549 = (state_37561[(7)]);
var inst_37551 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37549);
var state_37561__$1 = state_37561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37561__$1,(8),inst_37551);
} else {
if((state_val_37562 === (6))){
var state_37561__$1 = state_37561;
var statearr_37567_37582 = state_37561__$1;
(statearr_37567_37582[(2)] = null);

(statearr_37567_37582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (7))){
var inst_37557 = (state_37561[(2)]);
var state_37561__$1 = state_37561;
var statearr_37568_37583 = state_37561__$1;
(statearr_37568_37583[(2)] = inst_37557);

(statearr_37568_37583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37562 === (8))){
var inst_37553 = (state_37561[(2)]);
var state_37561__$1 = (function (){var statearr_37569 = state_37561;
(statearr_37569[(8)] = inst_37553);

return statearr_37569;
})();
var statearr_37570_37584 = state_37561__$1;
(statearr_37570_37584[(2)] = null);

(statearr_37570_37584[(1)] = (2));


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
});})(c__29924__auto___37578,ch))
;
return ((function (switch__29859__auto__,c__29924__auto___37578,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29860__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29860__auto____0 = (function (){
var statearr_37574 = [null,null,null,null,null,null,null,null,null];
(statearr_37574[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29860__auto__);

(statearr_37574[(1)] = (1));

return statearr_37574;
});
var figwheel$client$heads_up_plugin_$_state_machine__29860__auto____1 = (function (state_37561){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_37561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e37575){if((e37575 instanceof Object)){
var ex__29863__auto__ = e37575;
var statearr_37576_37585 = state_37561;
(statearr_37576_37585[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37586 = state_37561;
state_37561 = G__37586;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29860__auto__ = function(state_37561){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29860__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29860__auto____1.call(this,state_37561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29860__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29860__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto___37578,ch))
})();
var state__29926__auto__ = (function (){var statearr_37577 = f__29925__auto__.call(null);
(statearr_37577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto___37578);

return statearr_37577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto___37578,ch))
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
var c__29924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto__){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto__){
return (function (state_37607){
var state_val_37608 = (state_37607[(1)]);
if((state_val_37608 === (1))){
var inst_37602 = cljs.core.async.timeout.call(null,(3000));
var state_37607__$1 = state_37607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37607__$1,(2),inst_37602);
} else {
if((state_val_37608 === (2))){
var inst_37604 = (state_37607[(2)]);
var inst_37605 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37607__$1 = (function (){var statearr_37609 = state_37607;
(statearr_37609[(7)] = inst_37604);

return statearr_37609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37607__$1,inst_37605);
} else {
return null;
}
}
});})(c__29924__auto__))
;
return ((function (switch__29859__auto__,c__29924__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29860__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29860__auto____0 = (function (){
var statearr_37613 = [null,null,null,null,null,null,null,null];
(statearr_37613[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29860__auto__);

(statearr_37613[(1)] = (1));

return statearr_37613;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29860__auto____1 = (function (state_37607){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_37607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e37614){if((e37614 instanceof Object)){
var ex__29863__auto__ = e37614;
var statearr_37615_37617 = state_37607;
(statearr_37615_37617[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37618 = state_37607;
state_37607 = G__37618;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29860__auto__ = function(state_37607){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29860__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29860__auto____1.call(this,state_37607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29860__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29860__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto__))
})();
var state__29926__auto__ = (function (){var statearr_37616 = f__29925__auto__.call(null);
(statearr_37616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto__);

return statearr_37616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto__))
);

return c__29924__auto__;
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
var c__29924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29924__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29925__auto__ = (function (){var switch__29859__auto__ = ((function (c__29924__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37641){
var state_val_37642 = (state_37641[(1)]);
if((state_val_37642 === (1))){
var inst_37635 = cljs.core.async.timeout.call(null,(2000));
var state_37641__$1 = state_37641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37641__$1,(2),inst_37635);
} else {
if((state_val_37642 === (2))){
var inst_37637 = (state_37641[(2)]);
var inst_37638 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37639 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37638);
var state_37641__$1 = (function (){var statearr_37643 = state_37641;
(statearr_37643[(7)] = inst_37637);

return statearr_37643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37641__$1,inst_37639);
} else {
return null;
}
}
});})(c__29924__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29859__auto__,c__29924__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29860__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29860__auto____0 = (function (){
var statearr_37647 = [null,null,null,null,null,null,null,null];
(statearr_37647[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29860__auto__);

(statearr_37647[(1)] = (1));

return statearr_37647;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29860__auto____1 = (function (state_37641){
while(true){
var ret_value__29861__auto__ = (function (){try{while(true){
var result__29862__auto__ = switch__29859__auto__.call(null,state_37641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29862__auto__;
}
break;
}
}catch (e37648){if((e37648 instanceof Object)){
var ex__29863__auto__ = e37648;
var statearr_37649_37651 = state_37641;
(statearr_37649_37651[(5)] = ex__29863__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29861__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37652 = state_37641;
state_37641 = G__37652;
continue;
} else {
return ret_value__29861__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29860__auto__ = function(state_37641){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29860__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29860__auto____1.call(this,state_37641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29860__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29860__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29860__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29860__auto__;
})()
;})(switch__29859__auto__,c__29924__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29926__auto__ = (function (){var statearr_37650 = f__29925__auto__.call(null);
(statearr_37650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29924__auto__);

return statearr_37650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29926__auto__);
});})(c__29924__auto__,figwheel_version,temp__4657__auto__))
);

return c__29924__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37653){
var map__37657 = p__37653;
var map__37657__$1 = ((((!((map__37657 == null)))?((((map__37657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37657):map__37657);
var file = cljs.core.get.call(null,map__37657__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37657__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37657__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37659 = "";
var G__37659__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37659),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37659);
var G__37659__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37659__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37659__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = line;
if(cljs.core.truth_(and__24836__auto__)){
return column;
} else {
return and__24836__auto__;
}
})())){
return [cljs.core.str(G__37659__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37659__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37660){
var map__37667 = p__37660;
var map__37667__$1 = ((((!((map__37667 == null)))?((((map__37667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37667):map__37667);
var ed = map__37667__$1;
var formatted_exception = cljs.core.get.call(null,map__37667__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37667__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37667__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37669_37673 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37670_37674 = null;
var count__37671_37675 = (0);
var i__37672_37676 = (0);
while(true){
if((i__37672_37676 < count__37671_37675)){
var msg_37677 = cljs.core._nth.call(null,chunk__37670_37674,i__37672_37676);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37677);

var G__37678 = seq__37669_37673;
var G__37679 = chunk__37670_37674;
var G__37680 = count__37671_37675;
var G__37681 = (i__37672_37676 + (1));
seq__37669_37673 = G__37678;
chunk__37670_37674 = G__37679;
count__37671_37675 = G__37680;
i__37672_37676 = G__37681;
continue;
} else {
var temp__4657__auto___37682 = cljs.core.seq.call(null,seq__37669_37673);
if(temp__4657__auto___37682){
var seq__37669_37683__$1 = temp__4657__auto___37682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37669_37683__$1)){
var c__25659__auto___37684 = cljs.core.chunk_first.call(null,seq__37669_37683__$1);
var G__37685 = cljs.core.chunk_rest.call(null,seq__37669_37683__$1);
var G__37686 = c__25659__auto___37684;
var G__37687 = cljs.core.count.call(null,c__25659__auto___37684);
var G__37688 = (0);
seq__37669_37673 = G__37685;
chunk__37670_37674 = G__37686;
count__37671_37675 = G__37687;
i__37672_37676 = G__37688;
continue;
} else {
var msg_37689 = cljs.core.first.call(null,seq__37669_37683__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37689);

var G__37690 = cljs.core.next.call(null,seq__37669_37683__$1);
var G__37691 = null;
var G__37692 = (0);
var G__37693 = (0);
seq__37669_37673 = G__37690;
chunk__37670_37674 = G__37691;
count__37671_37675 = G__37692;
i__37672_37676 = G__37693;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37694){
var map__37697 = p__37694;
var map__37697__$1 = ((((!((map__37697 == null)))?((((map__37697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37697):map__37697);
var w = map__37697__$1;
var message = cljs.core.get.call(null,map__37697__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__37709 = cljs.core.seq.call(null,plugins);
var chunk__37710 = null;
var count__37711 = (0);
var i__37712 = (0);
while(true){
if((i__37712 < count__37711)){
var vec__37713 = cljs.core._nth.call(null,chunk__37710,i__37712);
var k = cljs.core.nth.call(null,vec__37713,(0),null);
var plugin = cljs.core.nth.call(null,vec__37713,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37719 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37709,chunk__37710,count__37711,i__37712,pl_37719,vec__37713,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37719.call(null,msg_hist);
});})(seq__37709,chunk__37710,count__37711,i__37712,pl_37719,vec__37713,k,plugin))
);
} else {
}

var G__37720 = seq__37709;
var G__37721 = chunk__37710;
var G__37722 = count__37711;
var G__37723 = (i__37712 + (1));
seq__37709 = G__37720;
chunk__37710 = G__37721;
count__37711 = G__37722;
i__37712 = G__37723;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37709);
if(temp__4657__auto__){
var seq__37709__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37709__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__37709__$1);
var G__37724 = cljs.core.chunk_rest.call(null,seq__37709__$1);
var G__37725 = c__25659__auto__;
var G__37726 = cljs.core.count.call(null,c__25659__auto__);
var G__37727 = (0);
seq__37709 = G__37724;
chunk__37710 = G__37725;
count__37711 = G__37726;
i__37712 = G__37727;
continue;
} else {
var vec__37716 = cljs.core.first.call(null,seq__37709__$1);
var k = cljs.core.nth.call(null,vec__37716,(0),null);
var plugin = cljs.core.nth.call(null,vec__37716,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37728 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37709,chunk__37710,count__37711,i__37712,pl_37728,vec__37716,k,plugin,seq__37709__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37728.call(null,msg_hist);
});})(seq__37709,chunk__37710,count__37711,i__37712,pl_37728,vec__37716,k,plugin,seq__37709__$1,temp__4657__auto__))
);
} else {
}

var G__37729 = cljs.core.next.call(null,seq__37709__$1);
var G__37730 = null;
var G__37731 = (0);
var G__37732 = (0);
seq__37709 = G__37729;
chunk__37710 = G__37730;
count__37711 = G__37731;
i__37712 = G__37732;
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
var args37733 = [];
var len__25923__auto___37740 = arguments.length;
var i__25924__auto___37741 = (0);
while(true){
if((i__25924__auto___37741 < len__25923__auto___37740)){
args37733.push((arguments[i__25924__auto___37741]));

var G__37742 = (i__25924__auto___37741 + (1));
i__25924__auto___37741 = G__37742;
continue;
} else {
}
break;
}

var G__37735 = args37733.length;
switch (G__37735) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37733.length)].join('')));

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

var seq__37736_37744 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37737_37745 = null;
var count__37738_37746 = (0);
var i__37739_37747 = (0);
while(true){
if((i__37739_37747 < count__37738_37746)){
var msg_37748 = cljs.core._nth.call(null,chunk__37737_37745,i__37739_37747);
figwheel.client.socket.handle_incoming_message.call(null,msg_37748);

var G__37749 = seq__37736_37744;
var G__37750 = chunk__37737_37745;
var G__37751 = count__37738_37746;
var G__37752 = (i__37739_37747 + (1));
seq__37736_37744 = G__37749;
chunk__37737_37745 = G__37750;
count__37738_37746 = G__37751;
i__37739_37747 = G__37752;
continue;
} else {
var temp__4657__auto___37753 = cljs.core.seq.call(null,seq__37736_37744);
if(temp__4657__auto___37753){
var seq__37736_37754__$1 = temp__4657__auto___37753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37736_37754__$1)){
var c__25659__auto___37755 = cljs.core.chunk_first.call(null,seq__37736_37754__$1);
var G__37756 = cljs.core.chunk_rest.call(null,seq__37736_37754__$1);
var G__37757 = c__25659__auto___37755;
var G__37758 = cljs.core.count.call(null,c__25659__auto___37755);
var G__37759 = (0);
seq__37736_37744 = G__37756;
chunk__37737_37745 = G__37757;
count__37738_37746 = G__37758;
i__37739_37747 = G__37759;
continue;
} else {
var msg_37760 = cljs.core.first.call(null,seq__37736_37754__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37760);

var G__37761 = cljs.core.next.call(null,seq__37736_37754__$1);
var G__37762 = null;
var G__37763 = (0);
var G__37764 = (0);
seq__37736_37744 = G__37761;
chunk__37737_37745 = G__37762;
count__37738_37746 = G__37763;
i__37739_37747 = G__37764;
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
var len__25923__auto___37769 = arguments.length;
var i__25924__auto___37770 = (0);
while(true){
if((i__25924__auto___37770 < len__25923__auto___37769)){
args__25930__auto__.push((arguments[i__25924__auto___37770]));

var G__37771 = (i__25924__auto___37770 + (1));
i__25924__auto___37770 = G__37771;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37766){
var map__37767 = p__37766;
var map__37767__$1 = ((((!((map__37767 == null)))?((((map__37767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37767):map__37767);
var opts = map__37767__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37765){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37765));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37773){if((e37773 instanceof Error)){
var e = e37773;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37773;

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
return (function (p__37777){
var map__37778 = p__37777;
var map__37778__$1 = ((((!((map__37778 == null)))?((((map__37778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37778):map__37778);
var msg_name = cljs.core.get.call(null,map__37778__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1523262634981