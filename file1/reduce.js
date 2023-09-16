//it is very important function used to accumulate values in array
// const arr=[1,2,3,4,5,6]

// const cartvalue=arr.reduce((acc,item)=>acc+item,0)
// //here 0 indicates the initial value
// console.log(cartvalue)

//similarly for object 
const obj=[
    {
        name:"jv course",
        price:999
    },
    {
        name:"py course",
        price:5999
    },
    {
        name:"ml course",
        price:2999
    }

]
const totalprice=obj.reduce((acc,item)=>{
    return item.price+acc
},0)
console.log(totalprice);