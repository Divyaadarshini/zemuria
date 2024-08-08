Q6: Implement a function which retries an asynchronous request N number of times before failing.
The time gap between each request must be increasing for every subsequent request.
The function definition MUST be asynchronous.

Retry Mechanism:

Functions:

* fetchData(): A function that simulates an asynchronous operation which may succeed or fail randomly. It returns a promise that resolves with a success message or rejects with an error message.
* retries(func, tries, delay): A function that attempts to execute a asynchronous function multiple times. It retries the function upon failure, with increasing delays between attempts.
  func: The asynchronous function to be retried.
  tries: The maximum number of retry attempts.
  delay: The initial delay between retries in milliseconds, which doubles after each attempt.
* finalFunc(msg): The main function that utilizes the retries function to handle the fetchData operation. It logs the result or error message based on the outcome of the retries.
