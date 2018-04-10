(ns server-clojure.core
  (:require [org.httpkit.server :refer [run-server]]
            [compojure.core :refer :all]
            [compojure.route :as route]))

(defn hello
  []
  (let [response {:status 200
                  :headers {"Content-Type" "text/html"}
                  :body "hello"}]

      response))

(defroutes app
      (GET "/" [] "<h1>Welcome</h1>")
      (GET "/hello" [] (hello))
      (route/not-found "<h1>Page not found</h1>"))

(defn -main [& args]
  (run-server app {:port 8080})
  (println "server started on port 8080"))
