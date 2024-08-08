// Implement a function which retries an asynchronous request N number of times before failing. 
// The time gap between each request must be increasing for every subsequent request. 
// The function definition MUST be asynchronous (30 minutes)


const fetchData = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.2) {
            resolve('Success');
        } else {
            reject(new Error('Random failure'));
        }
    });
};

const retries = async (func, tries, delay) => {
    for (let i = 0; i < tries; i++) {
        console.log(`Attempt ${i+1}`)
        try {
            return await func();
        } catch (err) {
            if (i === tries - 1) throw err; 
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2;
        }
    }
};

const finalFunc = () => {
    retries(fetchData, 5, 1000)
        .then(result => console.log("Result is here:", result))
        .catch(err => console.log("You Failed:", err.message));
};

// document.getElementById('btn').addEventListener('click', finalFunc);
finalFunc();