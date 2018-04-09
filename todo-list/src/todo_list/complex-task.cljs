(ns todo-list.complex-task
  (:require
    [sablono.core :include-macros true :refer [html]]))

(defn ui-complextask "This is a complex task" [store complex-task]
  (html [:li {:key (:task-id complex-task)}
         [:div {:class ui-ctask-body}]
         [:h1 {:class ui-ctask-title} (:title complex-task)]
         [:span "Progress : " (:progress complex-task) "%"]
         [:span "validated :" (:validated complex-task)]
         [:div (:details complex-task)]]))
