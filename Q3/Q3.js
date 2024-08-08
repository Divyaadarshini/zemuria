// 3. Copy an OBJECT to another variable such that 
// there are two separate copies of the object in the memory (20 Minutes)

let obj1 = {
    name: "divyaa darshini",
    age: 22,
    address: {
        city: "coimbatore",
        area: 'cheran managar'
    }
};

let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.name = "DD"
console.log(obj1);
console.log(obj2);