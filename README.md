# lyft-interview-test
## Code challenge for LYFT Apprenticeship

### Challenge
Please write a small web application in Python/Ruby/Node. The application only needs to do the following:

* Accept a `POST` request to the route `“/test”`, which accepts one argument `“string_to_cut”`

* Return a `JSON` object with the key `“return_string”` and a string containing every third letter from the original string.

#### Challenge solved and deployed on heroku via the endpoint: https://guarded-lowlands-18185.herokuapp.com/test

### Test

If you POST `{"string_to_cut": "iamyourlyftdriver"}` by doing 

`curl -X POST https://guarded-lowlands-18185.herokuapp.com/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'`

it will return:

`{"return_string": "muydv"}`

And generally, if you post any string with the appropriate key to the end point,

It will always return  a JSON object with the key `“return_string”` and a string containing every third letter from the original string.
