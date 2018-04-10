(ns server-clojure.core
  (:require [org.httpkit.server :refer [run-server]]
            [clojure.data.json :as json]
            [compojure.core :refer :all]
            [compojure.route :as route]))

(def tasks
  (atom [{:title "ComplexTask1"
          :progress 0
          :deadline nil
          :validated false
          :details "This is an empty task with many fields"
          :task-id 0}
         {:title "ComplexTask2"
          :progress 50
          :deadline "12/03/2018"
          :validated false
          :details "This is a more advanced complex task"
          :task-id 1}]))

(defn hello
  []
  (let [response {:status 200
                  :headers {"Content-Type" "text/html"}
                  :body "hello"}]

      response))

(defn add-task
  [req]
  (println req)
  ;(swap! tasks conj (json/read-str param))
  (let [response {:status 200
                  :headers {"Content-Type" "text/html"}
                  :body "request success"}]

      response))

(defn get-all-tasks
  []
  (let [response {:status 200
                  :headers {"Content-Type" "application/json"}
                  :body (json/write-str @tasks)}]
      response))


(defroutes app
      (GET "/" [] "<h1>Welcome</h1>")
      (GET "/hello" [] (hello))
      (GET "/get-all-tasks" [] (get-all-tasks))
      (POST "/add-task" req (add-task req))
      (route/not-found "<h1>Page not found</h1>"))

(defn -main [& args]
  (run-server app {:port 8080})
  (println "server started on port 8080"))
