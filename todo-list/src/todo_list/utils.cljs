(ns todo-list.utils)

(defn dispatch!
  "Dispatch action to store"
  [store action & args]
  (apply swap! store action args)
  nil)
