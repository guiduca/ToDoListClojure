(ns todo-list.core
  (:require
   [todo-list.ui_tasks :as ui_tasks]
   [devcards.core :as dc :include-macros true :refer [defcard deftest]]
   [sablono.core :as sab :include-macros true :refer [html]]))

(enable-console-print!)

(defn dispatch!
  "Dispatch action to store"
  [store action & args]
  (apply swap! store action args)
  nil)

(defcard MyTodoList "Ez list"
  (fn [store]
    (ui_tasks/main_tasks store))
  {:tasks ["Task1", "Task2"] :list_name "ListA"}
  {:inspect-data true})

(defcard MyComplexToDoList "This is a list of more detailed tasks"
  (fn [store]
    (print store)
    {:tasks [{:title "ComplexTask1",
              :progress 0,
              :deadline nil,
              :validated false,
              :details "This is an empty task with many fields",}
             {:title "ComplexTask2",
              :progress 50,
              :deadline "12/03/2018",
              :validated false,
              :details "This is a more advanced complex task"}]}))

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (.render js/ReactDOM (sab/html [:div "This is not working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
