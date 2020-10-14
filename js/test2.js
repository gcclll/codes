import Promise from "./promise.js";

const p = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(100), 1000);
});

p.then((val) => console.log(val, "then 1"));
p.then((val) => console.log(val, "then 2"));
p.then((val) => console.log(val, "then 3"));
