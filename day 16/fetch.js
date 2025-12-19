console.log("Today we are going to learn fetch method");

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("hello")
    reject("reject")
    // resolve("success")
}, 2000)
})
console.log(promise);
promise.then((res) => {
 console.log(res)
}).catch((res)=>{
    console.log(res)
})
// let getdata=  ()=> {

// let response= fetch("api");
// }

// let getdata= async ()=> {
//     let res=await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data= await res.json()
//     let u1=document.createElement('ul');
//     u1.style.cssText = "max-width:1024px;margin:auto; display:flex; flex-wrap:wrap; list-style:none; padding:0;";
//     data.forEach((obj) => {
//         let li=document.createElement('li');
//         li.innerText=obj.title;
//         li.style.cssText = "width: 200px; height :200px; box-shadow: 2px 2px 10px grey; display :flex; justify-content:center; align-items:center"
//         u1.append(li)
//     })
//     document.body.append(u1)
// }
// //     // data.forEach((obj) => {
// //     //     console.log(obj.title)
// //     })
// // }
// getdata()


// let createData = async () =>{
//     let res=await fetch("https://jsonplaceholder.typicode.com/posts"),{
//         method:"POST"
//         body:JSON.stringify({
//             name: 'xyz',
//             age: 30
//         }),
//         Headers:{
//             "content-type":"application/json"
//         }
//     }
//     let data= await res.json()
//     console.log(data)
//     console.log("Sucessfully data saved")
// }

// createData()
let updateData = async () =>{
    let res=await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method:"PUT",
        body:JSON.stringify({
            title:"this is updated title"
        }),
  headers:{
    "content-type":"application/json"
  }
    });

    let data= await res.json()
    console.log(data)
    console.log("Sucessfully data updated");
}
updateData()

let deleteData = async () =>{
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method:"DELETE"
    });         
    let data = await res.json();
    console.log(data);
    console.log("Successfully  deleted");
}
deleteData()
