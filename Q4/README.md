Q4: Send multiple requests to a single endpoint 
with different payload at the same time and 
return a single promise. 
(The promise should not fail if one of the request returns an error)


Multiple POST Requests:

The code sends a series of POST requests to the endpoint https://httpbin.org/anything with different payloads. Each payload is sent with a data field containing a string message. The results of all requests are handled collectively using Promise.all.