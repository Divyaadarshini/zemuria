Q: Implement A/B testing with the help of next.js middleware

AB Test Middleware:

* Check for Cookie: The middleware checks if the user has an ab-test-group cookie. If the cookie is not present, the user is randomly assigned to group 'A' or 'B'. The URL is then rewritten to include the assigned group.
  If the cookie is present, the URL is rewritten to include the group specified in the cookie.
* URL Rewriting: The URL pathname is updated to include the group prefix, ensuring users are routed to the appropriate version of the page.
