const api="https://raw.githubusercontent.com/sourcecodebd/Car-Services-API/main/services.json"

// let home_row=document.querySelector("#home-sec4 .row")
// console.log(home_row);
// fetch(`${api}`).then(res=>res.json()).then(json=>{
//     console.log(json);

//     json.map((item)=>{
//     if(item.price>=10000 && item.price<=15000){
//         home_row.innerHTML+=
//         `
//         <div class="box">
//         <div class="img-box">
//             <img src="${item.img}" alt="" class="img-fluid">
//         </div>
//         <div class="content">
//             <h4 class="title">${item.name}</h4>
//             <p class="price">${item.price}</p>
//         </div>
//         </div>
//         `
//     }
//     })
// })



let home_sec4=document.querySelector("#home-sec4 .row")
// let home_sec5=document.querySelector("#home-sec5 .box2")


fetch(`${api}`).then(res=>res.json()).then(json=>{
  console.log(json);
  let conter=0;


for (const i of json) {
conter++
if(conter==9){
  break
}
home_sec4.innerHTML+=`
<div class="kapsam">
<img src="${i.img}" alt="" class="img-fluid img">
<h4 class="title">${i.name}</h4>

</div>
`
}


})

let home5=document.querySelector(".home5-boxes")
console.log(home5);


let product=document.querySelector("#product-1 .like")
console.log(product);

product.addEventListener("click",()=>{
    product.classList.toggle("active")
})


// $("#product-1 .box2 ").click(function(){
//   $(".like").css({"color":"red"})
// })
// $("#product-1 .box2 ").remove(function(){
//   $(".like").css({"color":"red"})
// })