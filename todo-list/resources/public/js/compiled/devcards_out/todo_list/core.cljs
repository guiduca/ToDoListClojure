(ns todo-list.core
  (:require
   #_[om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true]
   [sablono.core :as sab :include-macros true :refer [html]])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defn dispatch!
  "Dispatch action to store"
  [store action & args]
  (apply swap! store action args)
  nil)

; (defcard MyTodoList "This is your current list"
;   (fn [store]
;     (print store))
;   {:tasks ["Task1", "Task2"] :list_name "ListA"}
;   {:inspect-data true})

(defn compare-complex-tasks [model target]
  (if (= model target) true false))

(def x 13)

(defn ui-complextask "This is a complex task" [store complex-task]
  (html [:li {:key (:task-id complex-task)}
         [:div {:class ui-ctask-body}
          [:h1 {:class ui-ctask-title} (:title complex-task)]
          [:span "Progress : " (:progress complex-task) "%"]
          [:span "validated :" (:validated complex-task)]
          [:div (:details complex-task)]]]))





(defcard MyComplexToDoList "This is a list of more detailed tasks"
  (fn [store]
    (print store)
    (html
     [:ul (map (partial ui-complextask store ) (:tasks @store))]))

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
