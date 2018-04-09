(ns todo-list.ui_tasks
  (:require
    [todo-list.utils :as utils]
    [sablono.core :include-macros true :refer [html]]))

(defn action-add-task
  "Task added"
  [state task]
  (if-not (or (= task "")
              (nil? task)
              (some #{task} (:task state)))
    (-> state
        (update :tasks conj task)
        (dissoc :input))
    (throw (ex-info "Invalid task" {:input task}))))

(defn action-change-input
  "Input changed"
  [state input]
  (assoc state :input input))

(defn remove-task-input
  "Task remove"
  [store task]
  (println "Task remove ask")
  (dissoc @store :task))

(defn ui_li
  "task component"
  [store task]
  (html [:li
          {:key task} task
          [:span
           {:class-name "remove_task"
            :on-click #(remove-task-input store task)}
           "x"]]))

(defn main_input
  "Application UI."
  [store]
  (html [:div
         [:div
          {:class-name "tasks_input"}
          [:input {
                   :name "task"
                   :value ""
                   :on-change #(utils/dispatch! store action-change-input
                                          (-> % .-target .-value))}]
          [:button
           {:on-click #(utils/dispatch! store action-add-task (:input @store))}
           "Submit"]]
         [:div {:class-name "tasks_display"}
          [:ul]
          (map (partial ui_li store) (:tasks @store))]]))
