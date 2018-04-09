(ns todo-list.ui_tasks
  (:require
    [sablono.core :include-macros true :refer [html]]))


(defn main_tasks
  "Application UI."
  [store]
  (html [:div {:class "tasks_input"}
         [:input]
         [:button
          "Submit"]]))
