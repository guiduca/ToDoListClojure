(ns server-clojure.core
  (:require [org.httpkit.server :refer [run-server]]
            [clojure.data.json :as json]
            [ring.middleware.json :refer [wrap-json-body]]
            [compojure.core :refer :all]
            [cheshire.core :refer :all]
            [compojure.handler :as handler]
            [compojure.route :as route]))

(def tasks
  (atom [{ :title "ComplexTask1"
           :progress 0
           :deadline nil
           :validated false
           :details "This is an empty task with many fields"
           :task-id 8}
         { :title "ComplexTask2"
           :progress 50
           :deadline "12/03/2018"
           :validated false
           :details "This is a more advanced complex task"
           :task-id 1}]))

(defn add-task
  [req]
  (let [body (get req :body)
        newTask (into {} (for [[k v] body]
                          [(keyword k) v]))
        response {:status 200
                      :headers {"Content-Type" "text/html"}
                      :body "request success"}]
       (swap! tasks conj newTask)
      response))

(defn get-all-tasks
  []
  (let [response {:status 200
                  :headers {"Content-Type" "application/json"}
                  :body (json/write-str @tasks)}]
      response))

(defn parse-int [s]
  (Integer. (re-find #"\d+" s)))

(defn get-task-byid
  [req]
  (doall (map-indexed (fn [idx itm]
                       (if (= (:task-id itm) (parse-int (get-in req [:headers "taskid"])))
                        (def taskReturned itm)))
                      @tasks))
  (let [response {:status 200
                  :headers {"Content-Type" "application/json"}
                  :body (json/write-str taskReturned)}]
   response))

(defn edit-task
  [req]
  (let [body (get req :body)
        taskToModify (into {} (for [[k v] body]
                               [(keyword k) v]))
        response {:status 200
                  :headers {"Content-Type" "text/html"}
                  :body "request success"}]
      (swap! tasks #(map (fn [idx itm]
                           (if (= (:task-id itm) (parse-int (get-in req [:headers "taskid"])))
                              taskToModify itm)
                           %)))
      (println @tasks)
      response))

(defroutes app
      (GET "/" [] "<h1>Welcome</h1>")
      (GET "/get-all-tasks" [] (get-all-tasks))
      (GET "/get-task-byid" [] get-task-byid)
      (POST "/add-task" [] add-task)
      (POST "/edit-task" [] edit-task)
      ;;(UPDATE "/edit-task" [] edit-task)
      (route/not-found "<h1>Page not found</h1>"))

(def main (wrap-json-body app))

(defn -main [& args]
  (wrap-json-body (handler/site app))
  ;(run-server app {:port 8080})
  #_(println "server started on port 8080"))
