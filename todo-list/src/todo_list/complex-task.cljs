(ns todo-list.complex-task
  (:require
    [todo-list.utils :as utils]
    [sablono.core :include-macros true :refer [html]]))

(def yolo (concat 20 "px"))

(defn somefunction [state yolo]
  (print "_________HERE__________")
  ;;print (value of key ":details"
  ;; ( in the first element (0) in the value of keys "tasks" inside "state")
  (print (:details (get (:tasks state) 0))))

(defn action-remove-ctask [state complex-task]
  "Removing a task by comparison of the whole lists that defines them"
  (update-in state [:tasks] #(remove (fn [value] (= complex-task value)) %)))

(defn action-trigger-edit-ctask [state]
  (assoc state :editing true))

(defn ui-complextask "This is a complex task" [store complex-task]
  (let [htmlclass {:keyname :span}]
    (html [:li {:key (:task-id complex-task)}
           [:div {:class-name "ctask_main"}
            [:div {:class-name "ctask_tile"}
               ; [:input {:default-value (:title complex-task)}])

             [:div {:class "ctask_title"}
              ; (print (:keyname htmlclass))
              (if (get @store :editing)
                [:input {:value "example"}]
                [:span (:title complex-task)])
              [:div {:class "task_progress_bar_container"}
               [:div {:class (let [n (:progress complex-task)]
                               (cond  (<= n 33) "task_progress_bar_content_short"
                                 (<= n 66) "task_progress_bar_content_medium"
                                 (> n 66) "task_progress_bar_content_end"))
                      :style {:width (+(str (:progress complex-task) "%"))}}]
               [:p "Progress : " (:progress complex-task) "%"]]
              [:div {:class "ctask_title_buttondiv"}
               [:button {:on-click #(utils/dispatch! store action-trigger-edit-ctask)} "Edit"]
               [:button {:on-click #(utils/dispatch! store action-remove-ctask complex-task)} "X"]]]]
            [:div {:class "ctask_details"}
             [:span "validated :" (:validated complex-task)]
             [:div (:details complex-task)]]]])))
