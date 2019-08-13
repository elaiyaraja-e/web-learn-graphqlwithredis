

### STEPS
##### 1) Install Node Js
##### 2) Install nodemon (dev dependency)
##### 3) Install Babel-Cli babel-preset-env babel-preset-stage-3
##### 4) Add start scripts ("start": "nodemon --exec babel-node server.js")
##### 5) Install Apollo Server and graphql (apollo-server graphql)
##### 6) Install Redis (redis-cli)

### TESTS
TEST 1
````
Input 
------
{
  get (key:"")
}

output
-------
{
  "data": {
    "get": null
  }
}
````

TEST 2
````
Input 
------
mutation {
  set(key:"greet", value:"good")
}

output
-------
{
  "data": {
    "set": true
  }
}
````
TEST 3
``````
Input
------
{
  get (key:"greet")
}
Output
------
{
  "data": {
    "get": "good"
  }
}
