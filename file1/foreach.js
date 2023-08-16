const nums=[2,3,4,5,6]
//here for each do not return any kind of values
// const values=nums.forEach((item)=>{
//     console.log(item>2)
// })
// console.log(values)

//in order to return we use filter function

// const values=nums.filter((item)=>item>2)//note here we donot need explicit return 
// console.log(values)

// const values=nums.filter((item)=>{//when we use {} we need to explicitly mention the return
//     return  item>2
// })
// console.log(values);

//chaining 
const numbers=[1,2,3,4,5,6,7]
const values=numbers.map((item)=>item+2).map((item)=>item*2).filter((item)=>item>10)//here we can chain any amount
console.log(values)