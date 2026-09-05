// VARIABLES 
let StudentName=`kishore royal`;
let StudentAge=19;
let StudentBranch=`CSE`;
let StudentCollage=`Mother thresa instuten of engineering and technology`;
let StudentMarks=99.9;
console.log(StudentName);
console.log(StudentAge);
console.log(StudentBranch);
console.log(StudentCollage);
console.log(StudentMarks);
StudentMarks=100;
console.log(StudentMarks);
// arry methods 
let arr=[1,2,3,4,5,6,7,8,9,10];
let double=arr.map(value=>value*2);
console.log(double);
double.forEach((value,index)=>console.log(index+" "+value));
arr.forEach((nums)=>console.log(nums));

let result=[];
const names=["kishore","anil","damu","lokanath"];
names.forEach((name)=>result.push(name));
console.log(result);
// map
let results=names.map((name)=>name);
console.log(results);