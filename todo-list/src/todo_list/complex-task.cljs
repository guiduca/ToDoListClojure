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

(defn action-trigger-edit-ctask [state ctask]
  (assoc state :editing ctask))

(defn update-key "Update a key 'k' over a map 'm' with a map of values 'vs'" [k m vs]
  (assoc-in m k (merge (k m) vs)))

(defn action-edit-title [state complex-task new_text]
  (assoc-in state [:tasks (.indexOf (get state :tasks) complex-task) :title] new_text))

(defn action-edit-field-in-task

  "Update the 'ctask' field 'k' with the value 'v'" [state ctask k value]
  (print "this is it")
  (assoc-in state [:tasks (.indexOf (get state :tasks) ctask) k] value))
  ; (print (update-in (into {} (filter #(= % complex-task) (:tasks @state))) [:title] #((fn [value] value) new_text)))
  ; (print)
  ; (print "----->" (into {} (filter #(= % complex-task) (:tasks @state)))))
    ; (postwalk (fn [x] (if (= smap x) nmap x)) form)) [:task-id 2] [:title "froufrou"] (:tasks state)

  ; (print (filter (fn [value](= value complex-task)) (:tasks state))))
  ; (print (fn [value] (= complex-task value))))
   ; (update-in state :tasks (fn [single_task] ((print "oooo" single_task)(map #(assoc complex-task :title new_text)))))))
(defn get-task-value [store ctask key]
  (get-in @store [:tasks (.indexOf (get @store :tasks) ctask) key]))

(defn my_element [store ctask k css_class]
  (def value (get-task-value store ctask k))
  (html
   [:div {:class (if (= "" css_class) "elem_root_div" css_class)}
    ;; If an element is clicked on he transform itself in a form
    (if (= (get @store :editing) ctask)
      [:form {:on-submit #(utils/dispatch! store action-edit-field-in-task ctask k value)}

       [:input {:class css_class
                :value value
                :on-change #(def value (-> % .-target .-value))
                :input_type (let [n css_class]
                              (cond (= n "ctask_deadline") "date"
                                    (= n "ctask_progress_first") "number"
                                    (= n "ctask_progress_middle") "number"
                                    (= n "ctask_progress_last") "number"))}]]
                                    
      [:div
        {
         :on-click #(utils/dispatch! store action-trigger-edit-ctask ctask)}
        (get-task-value store ctask k)])]))


(defn ui-complextask "This is a complex task" [store complex-task]
  (html
    [:li {:key (get complex-task :task-id)
          :class "task_grid_support"}
     (my_element store complex-task :title "ctask_title")
     (my_element store complex-task :task-id "ctask_id")
     (my_element store complex-task :details "ctask_details")
     (my_element store complex-task :validated "ctask_validated")
     (my_element store complex-task :deadline "ctask_deadline")
     (my_element store complex-task :progress (let [n (get complex-task :progress)]
                                                  (cond (<= n 33) "ctask_progress_first"
                                                        (<= n 66) "ctask_progress_middle"
                                                        (> n 66) "ctask_progress_last")))]))


    ; (html [:li {:key (:task-id complex-task)}
    ;        [:div {:class-name "ctask_main"}
    ;         [:div {:class-name "ctask_tile"}
    ;            ; [:input {:default-value (:title complex-task)}])
    ;
    ;          [:div {:class "ctask_title"}
    ;           ; (print (:keyname htmlclass))
    ;           (if (get @store :editing)
    ;             [:form {:on-submit #(print "submit " (:title complex-task))}
    ;              [:input {:default-value (:title complex-task)
    ;                       :on-change #(utils/dispatch! store action-edit-field-in-task complex-task :title (-> % .-target .-value))}]]
    ;
    ;             [:span (:title complex-task)])
    ;           [:div {:class "task_progress_bar_container"}
    ;            [:div {:class (let [n (:progress complex-task)]
    ;                            (cond  (<= n 33) "task_progress_bar_content_short"
    ;                              (<= n 66) "task_progress_bar_content_medium"
    ;                              (> n 66) "task_progress_bar_content_end"))
    ;                   :style {:width (+(str (:progress complex-task) "%"))}}]
    ;            [:p "Progress : " (:progress complex-task) "%"]]
    ;           [:div {:class "ctask_title_buttondiv"}
    ;            [:button {:on-click #(utils/dispatch! store action-trigger-edit-ctask)} "Edit"]
    ;            [:button {:on-click #(utils/dispatch! store action-remove-ctask complex-task)} "X"]]]]
    ;         [:div {:class "ctask_details"}
    ;          [:span "validated :" (:validated complex-task)]
    ;          [:div (:details complex-task)]]]])))
