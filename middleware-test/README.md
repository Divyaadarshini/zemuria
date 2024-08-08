Q: Implement A/B testing with the help of next.js middleware

AB Test Middleware:

* Check for Cookie: The middleware checks if the user has an ab-test-group cookie. If the cookie is not present, the user is randomly assigned to group 'A' or 'B'. The URL is then rewritten to include the assigned group.
  If the cookie is present, the URL is rewritten to include the group specified in the cookie.
* URL Rewriting: The URL pathname is updated to include the group prefix, ensuring users are routed to the appropriate version of the page.

Files Modified:
  * middleware.js: Contains the implementation of the A/B testing logic.
  * pages/A/test-page.js: Defines the content for Group A's version of the test page.
  * pages/B/test-page.js: Defines the content for Group B's version of the test page.

To run the project:
  1. Use "npm run dev"
  2. Visit "http://localhost:3000/test-page" to see the code in action.
  3. Reload the page to see different content based on the assigned group (A or B).
  
