var arr=[1,2,3,4,5,6,7,8,9];
arr.length=1;
console.log(arr);
var arr = [1, {name: "John"},function(){console.log("Hello")}, true, null, undefined];
//for..of-->element by element but not index;
for(let value of arr){
    if(typeof value=="function"){
value();

    }
else{
    console.log(value);
}
}

//for..in loop ;
for(let index in arr){//for(let i= 0; i < arr.length; i++)
    console.log(arr[index]);
}