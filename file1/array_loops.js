const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num)  
}
const name='diwakar'
//maps
const map=new Map()
map.set("in","india")
map.set("us","usa")
map.set("fr","france")
// console.log(map)

for (const [key] of name) {
    // console.log(key)
}
for (const [key,value] of map) {
    // console.log(value)
}
for (const key in arr) {
    // console.log(arr[key])
   
}
//forin does not work in maps

const obj={
    name:"dk",
    id:"53",
    sub:"computer"
}
//obj in not iterable
// for (const ob of obj) {
//     // console.log(ob)
    
// }//wrong
// for (const ob in obj)
// {
//     // console.log(ob)
// }//wrong

//for each
//in foreach we are using function without name
arr.forEach(function(item){
    // console.log(item)
})
map.forEach(function(key){
    // console.log()
})

//way of handling many object in arrays *IMPORTANT
const arrobj=[
    {
        name:"dk",
        id:"53",
        sub:"computer"
    },
    {
        name:"dp",
        id:"52",
        sub:"computer"
    },
    {
        name:"dr",
        id:"51",
        sub:"computer"
    }
]
arrobj.forEach((item)=>{
    // console.log(item.name)

})
//we can even call function defined explicitly
arr.forEach(demo)
function demo(item,index,arr) {
    console.table([item,index])
    console.log(arr)
}