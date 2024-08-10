// Implement an infinite scroll 
// where if the user hits the near bottom of the page 
// it should send an api request and populate new data. 
// (Feel free to add any content as per your choice) (25 minutes)


const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newContent = Array.from({ length: 15 }, (_, index) => `<div style="padding: 20px;">Hola</div>`);
            resolve(newContent);
        }, 1000);
    });
};

const loadContent = async () => {
    const container = document.getElementById('container');
    const newContent = await fetchData(); 

    newContent.forEach(element => {
        const item = document.createElement('div');
        item.innerHTML = element;
        container.appendChild(item);
    });
};

const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        loadContent();
    }
}, {
    rootMargin: '0px',
});

const content = document.getElementById('container');
observer.observe(document.querySelector('#scroll-content'));

loadContent(); // Initial content load
