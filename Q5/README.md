Q5: Implement an infinite scroll where if the user hits the near bottom of the page
it should send an api request and populate new data.
(Feel free to add any content as per your choice)

Infinite Scrolling:

* The fetchData function simulates an asynchronous operation to fetch new content. It returns a promise that resolves with an array of HTML strings after a delay.
* The loadContent function is responsible for fetching new content and appending it to the container element. It uses await to handle the promise returned by fetchData.
* An IntersectionObserver instance monitors the visibility of the #scroll-content element. When this element intersects with the viewport, the loadContent function is called to load additional content.
* The loadContent function is called initially to load the first batch of content.
