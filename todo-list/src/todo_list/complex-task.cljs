(ns todo-list.complex-task
  (:require
    [sablono.core :include-macros true :refer [html]]))

(def yolo (concat 20 "px"))

(defn ui-complextask "This is a complex task" [store complex-task]
  (html [:li {:key (:task-id complex-task)}
         [:div {:class-name "ctask_tile"}
          [:h1 {:class "ctask_title"} (:title complex-task)]
          [:div {:class "task_progress_bar_container"}
           [:div {:class "task_progress_bar_content" :style {:height "20px"
                                                             :width (+(str (:progress complex-task) "%"))}}]]
          [:span "Progress : " (:progress complex-task) "%"]
          [:span "validated :" (:validated complex-task)]
          [:div (:details complex-task)]]]))
