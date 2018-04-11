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

(defn update-key "Update a key 'k' over a map 'm' with a map of values 'vs'" [k m vs]
  (assoc-in m k (merge (k m) vs)))

(defn action-edit-title [state complex-task new_text]
  (assoc-in state [:tasks (.indexOf (get state :tasks) complex-task) :title] new_text))

  ; (print (update-in (into {} (filter #(= % complex-task) (:tasks @state))) [:title] #((fn [value] value) new_text)))
  ; (print)
  ; (print "----->" (into {} (filter #(= % complex-task) (:tasks @state)))))
    ; (postwalk (fn [x] (if (= smap x) nmap x)) form)) [:task-id 2] [:title "froufrou"] (:tasks state)

  ; (print (filter (fn [value](= value complex-task)) (:tasks state))))
  ; (print (fn [value] (= complex-task value))))
   ; (update-in state :tasks (fn [single_task] ((print "oooo" single_task)(map #(assoc complex-task :title new_text)))))))

(defn ui-complextask "This is a complex task" [store complex-task]
  (let [htmlclass {:keyname :span}]
    (html [:li {:key (:task-id complex-task)}
           [:div {:class-name "ctask_main"}
            [:div {:class-name "ctask_tile"}
               ; [:input {:default-value (:title complex-task)}])

             [:div {:class "ctask_title"}
              ; (print (:keyname htmlclass))
              (if (get @store :editing)
                [:form {:on-submit #(print "submit " (:title complex-task))}
                 [:input {:default-value (:title complex-task)
                          :on-change #(utils/dispatch! store action-edit-title complex-task (-> % .-target .-value))}]]
                          ; :on-change #(utils/dispatch! store action-edit-title complex-task (-> % .-target .-value))}]]
                          ; :on-change #(utils/dispatch! store action-edit-title complex-task (-> % .-target ._value))}]]
                          ; :on-change #(action-edit-title complex-task (-> % .-target .-value))}]]

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
