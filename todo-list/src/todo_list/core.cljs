(ns todo-list.core
  (:require
   [todo-list.ui_tasks :as ui_tasks]
   [todo-list.utils :as utils]
   [todo-list.complex-task :as complex-task]
   [devcards.core :as dc :include-macros true :refer [defcard deftest]]
   [sablono.core :as sab :include-macros true :refer [html]]))

(enable-console-print!)

(defcard MySimpleTodoList
  (fn [store]
    (ui_tasks/main_input store))
     ; [:ul (map (partial ui_tasks/main_tasks store ) (:tasks @store))]))
  {:tasks ["yolo"], :input "input"}
  {:inspect-data true})

(defcard MyComplexToDoList "This is a listmore detailed tasks"
  (fn [store]
    (print store)
    (html
     [:ul (map (partial complex-task/ui-complextask store ) (:tasks @store))]))

  {:tasks [{:title "ComplexTask1",
            :progress 0,
            :deadline nil,
            :validated false,
            :details "This is an empty task with many fields",
            :task-id 0}
           {:title "ComplexTask2",
            :progress 50,
            :deadline "12/03/2018",
            :validated false,
            :details "This is a more advanced complex task",
            :task-id 1}]})

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (.render js/ReactDOM (sab/html [:div "This is not working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
