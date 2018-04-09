(ns todo-list.task
  (:require
   #_[om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true]
   [sablono.core :as sab :include-macros true :refer [html]])

  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))


(defn ui-task
  "This is a task"
  [state task]
  (html [:div "YOLO"]))
