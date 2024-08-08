// Send multiple requests to a single endpoint 
// with different payload at the same time and 
// return a single promise. 
// (The promise should not fail if one of the request returns an error) (30 minutes)


const endpoint = "https://httpbin.org/anything";

const payloads = [
    { data: 'hi' },
    { data: 'hello' },
    { data: 'hola' },
];

const sendReq = (payload) => {
    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .catch(err => ({ error: err.message }));
}

const multiReqs = (payloads) => {
    const requests = payloads.map(payload => sendReq(payload));
    return Promise.all(requests); 
}

const handleClick = () => {
    multiReqs(payloads)
        .then(results => {
            console.log(results); 
            console.log('All reqs completed');
        })
        .catch(err => {
            console.error('An error occurred:', err);
        });
}

document.getElementById('btn').addEventListener('click', handleClick);
