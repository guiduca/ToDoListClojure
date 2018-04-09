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
var args38767 = [];
var len__25923__auto___38770 = arguments.length;
var i__25924__auto___38771 = (0);
while(true){
if((i__25924__auto___38771 < len__25923__auto___38770)){
args38767.push((arguments[i__25924__auto___38771]));

var G__38772 = (i__25924__auto___38771 + (1));
i__25924__auto___38771 = G__38772;
continue;
} else {
}
break;
}

var G__38769 = args38767.length;
switch (G__38769) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38767.length)].join('')));

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
var len__25923__auto___38775 = arguments.length;
var i__25924__auto___38776 = (0);
while(true){
if((i__25924__auto___38776 < len__25923__auto___38775)){
args__25930__auto__.push((arguments[i__25924__auto___38776]));

var G__38777 = (i__25924__auto___38776 + (1));
i__25924__auto___38776 = G__38777;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38774){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38774));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38779 = arguments.length;
var i__25924__auto___38780 = (0);
while(true){
if((i__25924__auto___38780 < len__25923__auto___38779)){
args__25930__auto__.push((arguments[i__25924__auto___38780]));

var G__38781 = (i__25924__auto___38780 + (1));
i__25924__auto___38780 = G__38781;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38778){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38778));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38782){
var map__38785 = p__38782;
var map__38785__$1 = ((((!((map__38785 == null)))?((((map__38785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38785):map__38785);
var message = cljs.core.get.call(null,map__38785__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38785__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33185__auto___38947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___38947,ch){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___38947,ch){
return (function (state_38916){
var state_val_38917 = (state_38916[(1)]);
if((state_val_38917 === (7))){
var inst_38912 = (state_38916[(2)]);
var state_38916__$1 = state_38916;
var statearr_38918_38948 = state_38916__$1;
(statearr_38918_38948[(2)] = inst_38912);

(statearr_38918_38948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38917 === (1))){
var state_38916__$1 = state_38916;
var statearr_38919_38949 = state_38916__$1;
(statearr_38919_38949[(2)] = null);

(statearr_38919_38949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38917 === (4))){
var inst_38869 = (state_38916[(7)]);
var inst_38869__$1 = (state_38916[(2)]);
var state_38916__$1 = (function (){var statearr_38920 = state_38916;
(statearr_38920[(7)] = inst_38869__$1);

return statearr_38920;
})();
if(cljs.core.truth_(inst_38869__$1)){
var statearr_38921_38950 = state_38916__$1;
(statearr_38921_38950[(1)] = (5));

} else {
var statearr_38922_38951 = state_38916__$1;
(statearr_38922_38951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38917 === (15))){
var inst_38876 = (state_38916[(8)]);
var inst_38891 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38876);
var inst_38892 = cljs.core.first.call(null,inst_38891);
var inst_38893 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38892);
var inst_38894 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38893)].join('');
var inst_38895 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38894);
var state_38916__$1 = state_38916;
var statearr_38923_38952 = state_38916__$1;
(statearr_38923_38952[(2)] = inst_38895);

(statearr_38923_38952[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38917 === (13))){
var inst_38900 = (state_38916[(2)]);
var state_38916__$1 = state_38916;
var statearr_38924_38953 = state_38916__$1;
(statearr_38924_38953[(2)] = inst_38900);

(statearr_38924_38953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38917 === (6))){
var state_38916__$1 = state_38916;
var statearr_38925_38954 = state_38916__$1;
(statearr_38925_38954[(2)] = null);

(statearr_38925_38954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38917 === (17))){
var inst_38898 = (state_38916[(2)]);
var state_38916__$1 = state_38916;
var statearr_38926_38955 = state_38916__$1;
(statearr_38926_38955[(2)] = inst_38898);

(statearr_38926_38955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38917 === (3))){
var inst_38914 = (state_38916[(2)]);
var state_38916__$1 = state_38916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38916__$1,inst_38914);
} else {
if((state_val_38917 === (12))){
var inst_38875 = (state_38916[(9)]);
var inst_38889 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38875,opts);
var state_38916__$1 = state_38916;
if(cljs.core.truth_(inst_38889)){
var statearr_38927_38956 = state_38916__$1;
(statearr_38927_38956[(1)] = (15));

} else {
var statearr_38928_38957 = state_38916__$1;
(statearr_38928_38957[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38917 === (2))){
var state_38916__$1 = state_38916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38916__$1,(4),ch);
} else {
if((state_val_38917 === (11))){
var inst_38876 = (state_38916[(8)]);
var inst_38881 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38882 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38876);
var inst_38883 = cljs.core.async.timeout.call(null,(1000));
var inst_38884 = [inst_38882,inst_38883];
var inst_38885 = (new cljs.core.PersistentVector(null,2,(5),inst_38881,inst_38884,null));
var state_38916__$1 = state_38916;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38916__$1,(14),inst_38885);
} else {
if((state_val_38917 === (9))){
var inst_38876 = (state_38916[(8)]);
var inst_38902 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38903 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38876);
var inst_38904 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38903);
var inst_38905 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38904)].join('');
var inst_38906 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38905);
var state_38916__$1 = (function (){var statearr_38929 = state_38916;
(statearr_38929[(10)] = inst_38902);

return statearr_38929;
})();
var statearr_38930_38958 = state_38916__$1;
(statearr_38930_38958[(2)] = inst_38906);

(statearr_38930_38958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38917 === (5))){
var inst_38869 = (state_38916[(7)]);
var inst_38871 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38872 = (new cljs.core.PersistentArrayMap(null,2,inst_38871,null));
var inst_38873 = (new cljs.core.PersistentHashSet(null,inst_38872,null));
var inst_38874 = figwheel.client.focus_msgs.call(null,inst_38873,inst_38869);
var inst_38875 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38874);
var inst_38876 = cljs.core.first.call(null,inst_38874);
var inst_38877 = figwheel.client.autoload_QMARK_.call(null);
var state_38916__$1 = (function (){var statearr_38931 = state_38916;
(statearr_38931[(9)] = inst_38875);

(statearr_38931[(8)] = inst_38876);

return statearr_38931;
})();
if(cljs.core.truth_(inst_38877)){
var statearr_38932_38959 = state_38916__$1;
(statearr_38932_38959[(1)] = (8));

} else {
var statearr_38933_38960 = state_38916__$1;
(statearr_38933_38960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38917 === (14))){
var inst_38887 = (state_38916[(2)]);
var state_38916__$1 = state_38916;
var statearr_38934_38961 = state_38916__$1;
(statearr_38934_38961[(2)] = inst_38887);

(statearr_38934_38961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38917 === (16))){
var state_38916__$1 = state_38916;
var statearr_38935_38962 = state_38916__$1;
(statearr_38935_38962[(2)] = null);

(statearr_38935_38962[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38917 === (10))){
var inst_38908 = (state_38916[(2)]);
var state_38916__$1 = (function (){var statearr_38936 = state_38916;
(statearr_38936[(11)] = inst_38908);

return statearr_38936;
})();
var statearr_38937_38963 = state_38916__$1;
(statearr_38937_38963[(2)] = null);

(statearr_38937_38963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38917 === (8))){
var inst_38875 = (state_38916[(9)]);
var inst_38879 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38875,opts);
var state_38916__$1 = state_38916;
if(cljs.core.truth_(inst_38879)){
var statearr_38938_38964 = state_38916__$1;
(statearr_38938_38964[(1)] = (11));

} else {
var statearr_38939_38965 = state_38916__$1;
(statearr_38939_38965[(1)] = (12));

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
});})(c__33185__auto___38947,ch))
;
return ((function (switch__33073__auto__,c__33185__auto___38947,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33074__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33074__auto____0 = (function (){
var statearr_38943 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38943[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33074__auto__);

(statearr_38943[(1)] = (1));

return statearr_38943;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33074__auto____1 = (function (state_38916){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_38916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e38944){if((e38944 instanceof Object)){
var ex__33077__auto__ = e38944;
var statearr_38945_38966 = state_38916;
(statearr_38945_38966[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38967 = state_38916;
state_38916 = G__38967;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33074__auto__ = function(state_38916){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33074__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33074__auto____1.call(this,state_38916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33074__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33074__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___38947,ch))
})();
var state__33187__auto__ = (function (){var statearr_38946 = f__33186__auto__.call(null);
(statearr_38946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___38947);

return statearr_38946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___38947,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38968_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38968_SHARP_));
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
var base_path_38971 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38971){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38970){if((e38970 instanceof Error)){
var e = e38970;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38971], null));
} else {
var e = e38970;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38971))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38972){
var map__38981 = p__38972;
var map__38981__$1 = ((((!((map__38981 == null)))?((((map__38981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38981):map__38981);
var opts = map__38981__$1;
var build_id = cljs.core.get.call(null,map__38981__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38981,map__38981__$1,opts,build_id){
return (function (p__38983){
var vec__38984 = p__38983;
var seq__38985 = cljs.core.seq.call(null,vec__38984);
var first__38986 = cljs.core.first.call(null,seq__38985);
var seq__38985__$1 = cljs.core.next.call(null,seq__38985);
var map__38987 = first__38986;
var map__38987__$1 = ((((!((map__38987 == null)))?((((map__38987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38987):map__38987);
var msg = map__38987__$1;
var msg_name = cljs.core.get.call(null,map__38987__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38985__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38984,seq__38985,first__38986,seq__38985__$1,map__38987,map__38987__$1,msg,msg_name,_,map__38981,map__38981__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38984,seq__38985,first__38986,seq__38985__$1,map__38987,map__38987__$1,msg,msg_name,_,map__38981,map__38981__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38981,map__38981__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38995){
var vec__38996 = p__38995;
var seq__38997 = cljs.core.seq.call(null,vec__38996);
var first__38998 = cljs.core.first.call(null,seq__38997);
var seq__38997__$1 = cljs.core.next.call(null,seq__38997);
var map__38999 = first__38998;
var map__38999__$1 = ((((!((map__38999 == null)))?((((map__38999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38999):map__38999);
var msg = map__38999__$1;
var msg_name = cljs.core.get.call(null,map__38999__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38997__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39001){
var map__39013 = p__39001;
var map__39013__$1 = ((((!((map__39013 == null)))?((((map__39013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39013):map__39013);
var on_compile_warning = cljs.core.get.call(null,map__39013__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39013__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39013,map__39013__$1,on_compile_warning,on_compile_fail){
return (function (p__39015){
var vec__39016 = p__39015;
var seq__39017 = cljs.core.seq.call(null,vec__39016);
var first__39018 = cljs.core.first.call(null,seq__39017);
var seq__39017__$1 = cljs.core.next.call(null,seq__39017);
var map__39019 = first__39018;
var map__39019__$1 = ((((!((map__39019 == null)))?((((map__39019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39019):map__39019);
var msg = map__39019__$1;
var msg_name = cljs.core.get.call(null,map__39019__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39017__$1;
var pred__39021 = cljs.core._EQ_;
var expr__39022 = msg_name;
if(cljs.core.truth_(pred__39021.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39022))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39021.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39022))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39013,map__39013__$1,on_compile_warning,on_compile_fail))
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
var c__33185__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto__,msg_hist,msg_names,msg){
return (function (state_39250){
var state_val_39251 = (state_39250[(1)]);
if((state_val_39251 === (7))){
var inst_39170 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
if(cljs.core.truth_(inst_39170)){
var statearr_39252_39302 = state_39250__$1;
(statearr_39252_39302[(1)] = (8));

} else {
var statearr_39253_39303 = state_39250__$1;
(statearr_39253_39303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (20))){
var inst_39244 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
var statearr_39254_39304 = state_39250__$1;
(statearr_39254_39304[(2)] = inst_39244);

(statearr_39254_39304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (27))){
var inst_39240 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
var statearr_39255_39305 = state_39250__$1;
(statearr_39255_39305[(2)] = inst_39240);

(statearr_39255_39305[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (1))){
var inst_39163 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39250__$1 = state_39250;
if(cljs.core.truth_(inst_39163)){
var statearr_39256_39306 = state_39250__$1;
(statearr_39256_39306[(1)] = (2));

} else {
var statearr_39257_39307 = state_39250__$1;
(statearr_39257_39307[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (24))){
var inst_39242 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
var statearr_39258_39308 = state_39250__$1;
(statearr_39258_39308[(2)] = inst_39242);

(statearr_39258_39308[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (4))){
var inst_39248 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39250__$1,inst_39248);
} else {
if((state_val_39251 === (15))){
var inst_39246 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
var statearr_39259_39309 = state_39250__$1;
(statearr_39259_39309[(2)] = inst_39246);

(statearr_39259_39309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (21))){
var inst_39199 = (state_39250[(2)]);
var inst_39200 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39201 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39200);
var state_39250__$1 = (function (){var statearr_39260 = state_39250;
(statearr_39260[(7)] = inst_39199);

return statearr_39260;
})();
var statearr_39261_39310 = state_39250__$1;
(statearr_39261_39310[(2)] = inst_39201);

(statearr_39261_39310[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (31))){
var inst_39229 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39250__$1 = state_39250;
if(cljs.core.truth_(inst_39229)){
var statearr_39262_39311 = state_39250__$1;
(statearr_39262_39311[(1)] = (34));

} else {
var statearr_39263_39312 = state_39250__$1;
(statearr_39263_39312[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (32))){
var inst_39238 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
var statearr_39264_39313 = state_39250__$1;
(statearr_39264_39313[(2)] = inst_39238);

(statearr_39264_39313[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (33))){
var inst_39225 = (state_39250[(2)]);
var inst_39226 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39227 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39226);
var state_39250__$1 = (function (){var statearr_39265 = state_39250;
(statearr_39265[(8)] = inst_39225);

return statearr_39265;
})();
var statearr_39266_39314 = state_39250__$1;
(statearr_39266_39314[(2)] = inst_39227);

(statearr_39266_39314[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (13))){
var inst_39184 = figwheel.client.heads_up.clear.call(null);
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39250__$1,(16),inst_39184);
} else {
if((state_val_39251 === (22))){
var inst_39205 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39206 = figwheel.client.heads_up.append_warning_message.call(null,inst_39205);
var state_39250__$1 = state_39250;
var statearr_39267_39315 = state_39250__$1;
(statearr_39267_39315[(2)] = inst_39206);

(statearr_39267_39315[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (36))){
var inst_39236 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
var statearr_39268_39316 = state_39250__$1;
(statearr_39268_39316[(2)] = inst_39236);

(statearr_39268_39316[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (29))){
var inst_39216 = (state_39250[(2)]);
var inst_39217 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39218 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39217);
var state_39250__$1 = (function (){var statearr_39269 = state_39250;
(statearr_39269[(9)] = inst_39216);

return statearr_39269;
})();
var statearr_39270_39317 = state_39250__$1;
(statearr_39270_39317[(2)] = inst_39218);

(statearr_39270_39317[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (6))){
var inst_39165 = (state_39250[(10)]);
var state_39250__$1 = state_39250;
var statearr_39271_39318 = state_39250__$1;
(statearr_39271_39318[(2)] = inst_39165);

(statearr_39271_39318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (28))){
var inst_39212 = (state_39250[(2)]);
var inst_39213 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39214 = figwheel.client.heads_up.display_warning.call(null,inst_39213);
var state_39250__$1 = (function (){var statearr_39272 = state_39250;
(statearr_39272[(11)] = inst_39212);

return statearr_39272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39250__$1,(29),inst_39214);
} else {
if((state_val_39251 === (25))){
var inst_39210 = figwheel.client.heads_up.clear.call(null);
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39250__$1,(28),inst_39210);
} else {
if((state_val_39251 === (34))){
var inst_39231 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39250__$1,(37),inst_39231);
} else {
if((state_val_39251 === (17))){
var inst_39190 = (state_39250[(2)]);
var inst_39191 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39192 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39191);
var state_39250__$1 = (function (){var statearr_39273 = state_39250;
(statearr_39273[(12)] = inst_39190);

return statearr_39273;
})();
var statearr_39274_39319 = state_39250__$1;
(statearr_39274_39319[(2)] = inst_39192);

(statearr_39274_39319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (3))){
var inst_39182 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39250__$1 = state_39250;
if(cljs.core.truth_(inst_39182)){
var statearr_39275_39320 = state_39250__$1;
(statearr_39275_39320[(1)] = (13));

} else {
var statearr_39276_39321 = state_39250__$1;
(statearr_39276_39321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (12))){
var inst_39178 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
var statearr_39277_39322 = state_39250__$1;
(statearr_39277_39322[(2)] = inst_39178);

(statearr_39277_39322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (2))){
var inst_39165 = (state_39250[(10)]);
var inst_39165__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39250__$1 = (function (){var statearr_39278 = state_39250;
(statearr_39278[(10)] = inst_39165__$1);

return statearr_39278;
})();
if(cljs.core.truth_(inst_39165__$1)){
var statearr_39279_39323 = state_39250__$1;
(statearr_39279_39323[(1)] = (5));

} else {
var statearr_39280_39324 = state_39250__$1;
(statearr_39280_39324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (23))){
var inst_39208 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39250__$1 = state_39250;
if(cljs.core.truth_(inst_39208)){
var statearr_39281_39325 = state_39250__$1;
(statearr_39281_39325[(1)] = (25));

} else {
var statearr_39282_39326 = state_39250__$1;
(statearr_39282_39326[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (35))){
var state_39250__$1 = state_39250;
var statearr_39283_39327 = state_39250__$1;
(statearr_39283_39327[(2)] = null);

(statearr_39283_39327[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (19))){
var inst_39203 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39250__$1 = state_39250;
if(cljs.core.truth_(inst_39203)){
var statearr_39284_39328 = state_39250__$1;
(statearr_39284_39328[(1)] = (22));

} else {
var statearr_39285_39329 = state_39250__$1;
(statearr_39285_39329[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (11))){
var inst_39174 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
var statearr_39286_39330 = state_39250__$1;
(statearr_39286_39330[(2)] = inst_39174);

(statearr_39286_39330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (9))){
var inst_39176 = figwheel.client.heads_up.clear.call(null);
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39250__$1,(12),inst_39176);
} else {
if((state_val_39251 === (5))){
var inst_39167 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39250__$1 = state_39250;
var statearr_39287_39331 = state_39250__$1;
(statearr_39287_39331[(2)] = inst_39167);

(statearr_39287_39331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (14))){
var inst_39194 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39250__$1 = state_39250;
if(cljs.core.truth_(inst_39194)){
var statearr_39288_39332 = state_39250__$1;
(statearr_39288_39332[(1)] = (18));

} else {
var statearr_39289_39333 = state_39250__$1;
(statearr_39289_39333[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (26))){
var inst_39220 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39250__$1 = state_39250;
if(cljs.core.truth_(inst_39220)){
var statearr_39290_39334 = state_39250__$1;
(statearr_39290_39334[(1)] = (30));

} else {
var statearr_39291_39335 = state_39250__$1;
(statearr_39291_39335[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (16))){
var inst_39186 = (state_39250[(2)]);
var inst_39187 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39188 = figwheel.client.heads_up.display_exception.call(null,inst_39187);
var state_39250__$1 = (function (){var statearr_39292 = state_39250;
(statearr_39292[(13)] = inst_39186);

return statearr_39292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39250__$1,(17),inst_39188);
} else {
if((state_val_39251 === (30))){
var inst_39222 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39223 = figwheel.client.heads_up.display_warning.call(null,inst_39222);
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39250__$1,(33),inst_39223);
} else {
if((state_val_39251 === (10))){
var inst_39180 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
var statearr_39293_39336 = state_39250__$1;
(statearr_39293_39336[(2)] = inst_39180);

(statearr_39293_39336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (18))){
var inst_39196 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39197 = figwheel.client.heads_up.display_exception.call(null,inst_39196);
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39250__$1,(21),inst_39197);
} else {
if((state_val_39251 === (37))){
var inst_39233 = (state_39250[(2)]);
var state_39250__$1 = state_39250;
var statearr_39294_39337 = state_39250__$1;
(statearr_39294_39337[(2)] = inst_39233);

(statearr_39294_39337[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39251 === (8))){
var inst_39172 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39250__$1 = state_39250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39250__$1,(11),inst_39172);
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
});})(c__33185__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33073__auto__,c__33185__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33074__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33074__auto____0 = (function (){
var statearr_39298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39298[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33074__auto__);

(statearr_39298[(1)] = (1));

return statearr_39298;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33074__auto____1 = (function (state_39250){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_39250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e39299){if((e39299 instanceof Object)){
var ex__33077__auto__ = e39299;
var statearr_39300_39338 = state_39250;
(statearr_39300_39338[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39339 = state_39250;
state_39250 = G__39339;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33074__auto__ = function(state_39250){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33074__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33074__auto____1.call(this,state_39250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33074__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33074__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto__,msg_hist,msg_names,msg))
})();
var state__33187__auto__ = (function (){var statearr_39301 = f__33186__auto__.call(null);
(statearr_39301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto__);

return statearr_39301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto__,msg_hist,msg_names,msg))
);

return c__33185__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33185__auto___39402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto___39402,ch){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto___39402,ch){
return (function (state_39385){
var state_val_39386 = (state_39385[(1)]);
if((state_val_39386 === (1))){
var state_39385__$1 = state_39385;
var statearr_39387_39403 = state_39385__$1;
(statearr_39387_39403[(2)] = null);

(statearr_39387_39403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39386 === (2))){
var state_39385__$1 = state_39385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39385__$1,(4),ch);
} else {
if((state_val_39386 === (3))){
var inst_39383 = (state_39385[(2)]);
var state_39385__$1 = state_39385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39385__$1,inst_39383);
} else {
if((state_val_39386 === (4))){
var inst_39373 = (state_39385[(7)]);
var inst_39373__$1 = (state_39385[(2)]);
var state_39385__$1 = (function (){var statearr_39388 = state_39385;
(statearr_39388[(7)] = inst_39373__$1);

return statearr_39388;
})();
if(cljs.core.truth_(inst_39373__$1)){
var statearr_39389_39404 = state_39385__$1;
(statearr_39389_39404[(1)] = (5));

} else {
var statearr_39390_39405 = state_39385__$1;
(statearr_39390_39405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39386 === (5))){
var inst_39373 = (state_39385[(7)]);
var inst_39375 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39373);
var state_39385__$1 = state_39385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39385__$1,(8),inst_39375);
} else {
if((state_val_39386 === (6))){
var state_39385__$1 = state_39385;
var statearr_39391_39406 = state_39385__$1;
(statearr_39391_39406[(2)] = null);

(statearr_39391_39406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39386 === (7))){
var inst_39381 = (state_39385[(2)]);
var state_39385__$1 = state_39385;
var statearr_39392_39407 = state_39385__$1;
(statearr_39392_39407[(2)] = inst_39381);

(statearr_39392_39407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39386 === (8))){
var inst_39377 = (state_39385[(2)]);
var state_39385__$1 = (function (){var statearr_39393 = state_39385;
(statearr_39393[(8)] = inst_39377);

return statearr_39393;
})();
var statearr_39394_39408 = state_39385__$1;
(statearr_39394_39408[(2)] = null);

(statearr_39394_39408[(1)] = (2));


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
});})(c__33185__auto___39402,ch))
;
return ((function (switch__33073__auto__,c__33185__auto___39402,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33074__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33074__auto____0 = (function (){
var statearr_39398 = [null,null,null,null,null,null,null,null,null];
(statearr_39398[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33074__auto__);

(statearr_39398[(1)] = (1));

return statearr_39398;
});
var figwheel$client$heads_up_plugin_$_state_machine__33074__auto____1 = (function (state_39385){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_39385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e39399){if((e39399 instanceof Object)){
var ex__33077__auto__ = e39399;
var statearr_39400_39409 = state_39385;
(statearr_39400_39409[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39410 = state_39385;
state_39385 = G__39410;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33074__auto__ = function(state_39385){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33074__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33074__auto____1.call(this,state_39385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33074__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33074__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto___39402,ch))
})();
var state__33187__auto__ = (function (){var statearr_39401 = f__33186__auto__.call(null);
(statearr_39401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto___39402);

return statearr_39401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto___39402,ch))
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
var c__33185__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto__){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto__){
return (function (state_39431){
var state_val_39432 = (state_39431[(1)]);
if((state_val_39432 === (1))){
var inst_39426 = cljs.core.async.timeout.call(null,(3000));
var state_39431__$1 = state_39431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39431__$1,(2),inst_39426);
} else {
if((state_val_39432 === (2))){
var inst_39428 = (state_39431[(2)]);
var inst_39429 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39431__$1 = (function (){var statearr_39433 = state_39431;
(statearr_39433[(7)] = inst_39428);

return statearr_39433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39431__$1,inst_39429);
} else {
return null;
}
}
});})(c__33185__auto__))
;
return ((function (switch__33073__auto__,c__33185__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33074__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33074__auto____0 = (function (){
var statearr_39437 = [null,null,null,null,null,null,null,null];
(statearr_39437[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33074__auto__);

(statearr_39437[(1)] = (1));

return statearr_39437;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33074__auto____1 = (function (state_39431){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_39431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e39438){if((e39438 instanceof Object)){
var ex__33077__auto__ = e39438;
var statearr_39439_39441 = state_39431;
(statearr_39439_39441[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39442 = state_39431;
state_39431 = G__39442;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33074__auto__ = function(state_39431){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33074__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33074__auto____1.call(this,state_39431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33074__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33074__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto__))
})();
var state__33187__auto__ = (function (){var statearr_39440 = f__33186__auto__.call(null);
(statearr_39440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto__);

return statearr_39440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto__))
);

return c__33185__auto__;
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
var c__33185__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33185__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33186__auto__ = (function (){var switch__33073__auto__ = ((function (c__33185__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39465){
var state_val_39466 = (state_39465[(1)]);
if((state_val_39466 === (1))){
var inst_39459 = cljs.core.async.timeout.call(null,(2000));
var state_39465__$1 = state_39465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39465__$1,(2),inst_39459);
} else {
if((state_val_39466 === (2))){
var inst_39461 = (state_39465[(2)]);
var inst_39462 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_39463 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39462);
var state_39465__$1 = (function (){var statearr_39467 = state_39465;
(statearr_39467[(7)] = inst_39461);

return statearr_39467;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39465__$1,inst_39463);
} else {
return null;
}
}
});})(c__33185__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33073__auto__,c__33185__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33074__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33074__auto____0 = (function (){
var statearr_39471 = [null,null,null,null,null,null,null,null];
(statearr_39471[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33074__auto__);

(statearr_39471[(1)] = (1));

return statearr_39471;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33074__auto____1 = (function (state_39465){
while(true){
var ret_value__33075__auto__ = (function (){try{while(true){
var result__33076__auto__ = switch__33073__auto__.call(null,state_39465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33076__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33076__auto__;
}
break;
}
}catch (e39472){if((e39472 instanceof Object)){
var ex__33077__auto__ = e39472;
var statearr_39473_39475 = state_39465;
(statearr_39473_39475[(5)] = ex__33077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39476 = state_39465;
state_39465 = G__39476;
continue;
} else {
return ret_value__33075__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33074__auto__ = function(state_39465){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33074__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33074__auto____1.call(this,state_39465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33074__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33074__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33074__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33074__auto__;
})()
;})(switch__33073__auto__,c__33185__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33187__auto__ = (function (){var statearr_39474 = f__33186__auto__.call(null);
(statearr_39474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33185__auto__);

return statearr_39474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33187__auto__);
});})(c__33185__auto__,figwheel_version,temp__4657__auto__))
);

return c__33185__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39477){
var map__39481 = p__39477;
var map__39481__$1 = ((((!((map__39481 == null)))?((((map__39481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39481):map__39481);
var file = cljs.core.get.call(null,map__39481__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39481__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39481__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39483 = "";
var G__39483__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__39483),cljs.core.str("file "),cljs.core.str(file)].join(''):G__39483);
var G__39483__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__39483__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__39483__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = line;
if(cljs.core.truth_(and__24836__auto__)){
return column;
} else {
return and__24836__auto__;
}
})())){
return [cljs.core.str(G__39483__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__39483__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39484){
var map__39491 = p__39484;
var map__39491__$1 = ((((!((map__39491 == null)))?((((map__39491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39491):map__39491);
var ed = map__39491__$1;
var formatted_exception = cljs.core.get.call(null,map__39491__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39491__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39491__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39493_39497 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39494_39498 = null;
var count__39495_39499 = (0);
var i__39496_39500 = (0);
while(true){
if((i__39496_39500 < count__39495_39499)){
var msg_39501 = cljs.core._nth.call(null,chunk__39494_39498,i__39496_39500);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39501);

var G__39502 = seq__39493_39497;
var G__39503 = chunk__39494_39498;
var G__39504 = count__39495_39499;
var G__39505 = (i__39496_39500 + (1));
seq__39493_39497 = G__39502;
chunk__39494_39498 = G__39503;
count__39495_39499 = G__39504;
i__39496_39500 = G__39505;
continue;
} else {
var temp__4657__auto___39506 = cljs.core.seq.call(null,seq__39493_39497);
if(temp__4657__auto___39506){
var seq__39493_39507__$1 = temp__4657__auto___39506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39493_39507__$1)){
var c__25659__auto___39508 = cljs.core.chunk_first.call(null,seq__39493_39507__$1);
var G__39509 = cljs.core.chunk_rest.call(null,seq__39493_39507__$1);
var G__39510 = c__25659__auto___39508;
var G__39511 = cljs.core.count.call(null,c__25659__auto___39508);
var G__39512 = (0);
seq__39493_39497 = G__39509;
chunk__39494_39498 = G__39510;
count__39495_39499 = G__39511;
i__39496_39500 = G__39512;
continue;
} else {
var msg_39513 = cljs.core.first.call(null,seq__39493_39507__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39513);

var G__39514 = cljs.core.next.call(null,seq__39493_39507__$1);
var G__39515 = null;
var G__39516 = (0);
var G__39517 = (0);
seq__39493_39497 = G__39514;
chunk__39494_39498 = G__39515;
count__39495_39499 = G__39516;
i__39496_39500 = G__39517;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39518){
var map__39521 = p__39518;
var map__39521__$1 = ((((!((map__39521 == null)))?((((map__39521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39521):map__39521);
var w = map__39521__$1;
var message = cljs.core.get.call(null,map__39521__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__39533 = cljs.core.seq.call(null,plugins);
var chunk__39534 = null;
var count__39535 = (0);
var i__39536 = (0);
while(true){
if((i__39536 < count__39535)){
var vec__39537 = cljs.core._nth.call(null,chunk__39534,i__39536);
var k = cljs.core.nth.call(null,vec__39537,(0),null);
var plugin = cljs.core.nth.call(null,vec__39537,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39543 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39533,chunk__39534,count__39535,i__39536,pl_39543,vec__39537,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39543.call(null,msg_hist);
});})(seq__39533,chunk__39534,count__39535,i__39536,pl_39543,vec__39537,k,plugin))
);
} else {
}

var G__39544 = seq__39533;
var G__39545 = chunk__39534;
var G__39546 = count__39535;
var G__39547 = (i__39536 + (1));
seq__39533 = G__39544;
chunk__39534 = G__39545;
count__39535 = G__39546;
i__39536 = G__39547;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39533);
if(temp__4657__auto__){
var seq__39533__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39533__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__39533__$1);
var G__39548 = cljs.core.chunk_rest.call(null,seq__39533__$1);
var G__39549 = c__25659__auto__;
var G__39550 = cljs.core.count.call(null,c__25659__auto__);
var G__39551 = (0);
seq__39533 = G__39548;
chunk__39534 = G__39549;
count__39535 = G__39550;
i__39536 = G__39551;
continue;
} else {
var vec__39540 = cljs.core.first.call(null,seq__39533__$1);
var k = cljs.core.nth.call(null,vec__39540,(0),null);
var plugin = cljs.core.nth.call(null,vec__39540,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39552 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39533,chunk__39534,count__39535,i__39536,pl_39552,vec__39540,k,plugin,seq__39533__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39552.call(null,msg_hist);
});})(seq__39533,chunk__39534,count__39535,i__39536,pl_39552,vec__39540,k,plugin,seq__39533__$1,temp__4657__auto__))
);
} else {
}

var G__39553 = cljs.core.next.call(null,seq__39533__$1);
var G__39554 = null;
var G__39555 = (0);
var G__39556 = (0);
seq__39533 = G__39553;
chunk__39534 = G__39554;
count__39535 = G__39555;
i__39536 = G__39556;
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
var args39557 = [];
var len__25923__auto___39564 = arguments.length;
var i__25924__auto___39565 = (0);
while(true){
if((i__25924__auto___39565 < len__25923__auto___39564)){
args39557.push((arguments[i__25924__auto___39565]));

var G__39566 = (i__25924__auto___39565 + (1));
i__25924__auto___39565 = G__39566;
continue;
} else {
}
break;
}

var G__39559 = args39557.length;
switch (G__39559) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39557.length)].join('')));

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

var seq__39560_39568 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39561_39569 = null;
var count__39562_39570 = (0);
var i__39563_39571 = (0);
while(true){
if((i__39563_39571 < count__39562_39570)){
var msg_39572 = cljs.core._nth.call(null,chunk__39561_39569,i__39563_39571);
figwheel.client.socket.handle_incoming_message.call(null,msg_39572);

var G__39573 = seq__39560_39568;
var G__39574 = chunk__39561_39569;
var G__39575 = count__39562_39570;
var G__39576 = (i__39563_39571 + (1));
seq__39560_39568 = G__39573;
chunk__39561_39569 = G__39574;
count__39562_39570 = G__39575;
i__39563_39571 = G__39576;
continue;
} else {
var temp__4657__auto___39577 = cljs.core.seq.call(null,seq__39560_39568);
if(temp__4657__auto___39577){
var seq__39560_39578__$1 = temp__4657__auto___39577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39560_39578__$1)){
var c__25659__auto___39579 = cljs.core.chunk_first.call(null,seq__39560_39578__$1);
var G__39580 = cljs.core.chunk_rest.call(null,seq__39560_39578__$1);
var G__39581 = c__25659__auto___39579;
var G__39582 = cljs.core.count.call(null,c__25659__auto___39579);
var G__39583 = (0);
seq__39560_39568 = G__39580;
chunk__39561_39569 = G__39581;
count__39562_39570 = G__39582;
i__39563_39571 = G__39583;
continue;
} else {
var msg_39584 = cljs.core.first.call(null,seq__39560_39578__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39584);

var G__39585 = cljs.core.next.call(null,seq__39560_39578__$1);
var G__39586 = null;
var G__39587 = (0);
var G__39588 = (0);
seq__39560_39568 = G__39585;
chunk__39561_39569 = G__39586;
count__39562_39570 = G__39587;
i__39563_39571 = G__39588;
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
var len__25923__auto___39593 = arguments.length;
var i__25924__auto___39594 = (0);
while(true){
if((i__25924__auto___39594 < len__25923__auto___39593)){
args__25930__auto__.push((arguments[i__25924__auto___39594]));

var G__39595 = (i__25924__auto___39594 + (1));
i__25924__auto___39594 = G__39595;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39590){
var map__39591 = p__39590;
var map__39591__$1 = ((((!((map__39591 == null)))?((((map__39591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39591):map__39591);
var opts = map__39591__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39589){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39589));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39597){if((e39597 instanceof Error)){
var e = e39597;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39597;

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
return (function (p__39601){
var map__39602 = p__39601;
var map__39602__$1 = ((((!((map__39602 == null)))?((((map__39602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39602):map__39602);
var msg_name = cljs.core.get.call(null,map__39602__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1523250229810