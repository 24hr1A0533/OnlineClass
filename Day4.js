const arr=[2,3,4,5,6,7,6,];
console.log(arr);

const arr1=new Array(1,2,3,4,454,5 ,"kis" , true , null , undefined ,Symbol() ,123n);
console.log(arr1);

const arr2=new Array(10);
console.log(arr2.length);
console.log(arr2);
console.log(Array.isArray(arr2));
const arr4=[ function inttt(){
    console.log("kishore well done")
}]
console.log(arr4[0]());

const arr5=[1,2];
arr5[11]=12;
console.log(arr5);

