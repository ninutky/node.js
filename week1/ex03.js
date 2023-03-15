// property(key) : values
const cathy = {
    "name" : "cathy",
    "age" : 19,
    "skills" : ["자바스크립트", "파이썬", "코볼"]
};

// { name: 'cathy', age: 19, skills: ["자바스크립트", "파이썬", "코볼"] }
console.log(cathy)
// cathy
console.log(cathy.name);
console.log(cathy["name"]);

cathy.city = "Seoul";
// { name: 'cathy', age: 19, skills: ["자바스크립트", "파이썬", "코볼"], city: 'Seoul' }
console.log(cathy);

delete cathy.city;
// { name: 'cathy', age: 19, skills: ["자바스크립트", "파이썬", "코볼"] }
console.log(cathy);