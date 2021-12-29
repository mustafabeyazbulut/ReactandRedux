// setTimeout(() => {
//     console.log("Merhaba");
// }, 2000);

// setInterval(() => {
//     console.log("Merhaba Ben her saniye çalışacağım");
// }, 1000);

// const sayHi=(value)=>{
//     value();
// }
// sayHi(()=>{
// console.log("Hello");
// })

import fetch from 'node-fetch';
import axios from 'axios';
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(data=>data.json())
// .then((users) =>{
//     console.log("Users Yüklendi",users);
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then(data=>data.json()).then((posts)=> console.log("Posts yüklendi",posts));
// });

// async function getData(){
//     const users=await(await fetch("https://jsonplaceholder.typicode.com/users") ).json();
//     const poasts1=await(await fetch("https://jsonplaceholder.typicode.com/posts/1") ).json();
//     const poasts2=await(await fetch("https://jsonplaceholder.typicode.com/posts/2") ).json();

//     console.log("users",users);
//     console.log("posts1",poasts1);
//     console.log("posts2",poasts2);
// }

// async function getData(){
//     const {data:users}=await axios("https://jsonplaceholder.typicode.com/users") ;
//     const {data:poasts1}=await axios("https://jsonplaceholder.typicode.com/posts/1") ;
//     const {data:poasts2}=await axios("https://jsonplaceholder.typicode.com/posts/2") ;

//     console.log("users",users);
//     console.log("posts1",poasts1);
//     console.log("posts2",poasts2);
// }

// getData();

const getComments=(number)=>{
    return new Promise((resolve,reject)=>{
        if (number==1){
            resolve("Comments");
        }

        reject("Bir problem oluştu");
        
    });
};

getComments(2)
.then((data)=>console.log(data))
.catch((e)=>console.log(e));