(ns todo-list.ui_tasks
  (:require
    [todo-list.utils :as utils]
    [ajax.core :refer [GET POST]]
    [sablono.core :include-macros true :refer [html]]))

(def app-state
  (atom {:all-tasks {}}))

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

(defn debug [x]
  (print x)
  x)

(defn action-change-input
  "Input changed"
  [state input]
  (assoc state :input input))

(defn remove-task-input
  "Task remove"
  [state task]
  (update state :tasks (fn [old] (vec (filter #(not (#{task} %)) old)))))


(defn ui_li
  "task component"
  [store task]
  (html [:li
          {:key task} task
          [:span
           {:class-name "remove_task"
            :on-click #(utils/dispatch! store remove-task-input task)}
           "x"]]))

(defn handler [response store]
 ;(print "begin = " (get @store :tasks) " end")
 ;(mapv #(print (get % "name")) response)
 (mapv (fn [line](#(utils/dispatch! store action-add-task (get line "name")))) response))


(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn get_some_tasks [store]
 (GET "https://jsonplaceholder.typicode.com/users" {:handler #(handler % store)}))

(defn main_input
  "Application UI."
  [store]

  (html [:div
         [:button {:on-click #(get_some_tasks store)} "Get Tasks"]
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
