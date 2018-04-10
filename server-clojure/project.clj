(defproject server-clojure "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [http-kit "2.2.0"]
                 [org.clojure/data.json "0.2.6"]
                 [compojure "1.6.0"]
                 [ring/ring-json "0.4.0"]]
  :plugins [[lein-ring "0.12.4"]]
  :ring {:handler server-clojure.core/main}
  :main server-clojure.core)
