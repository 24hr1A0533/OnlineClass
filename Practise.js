
const p=new Promise((resolve,reject)=>{
 
    resolve("kishore");


})


p.then((value)=>{
console.log(value);
return "java";
}).then((value)=>{
    console.log(value);
    return "cse";
}).then((value)=>{console.log(value)})