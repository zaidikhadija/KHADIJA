//bouton plus
let add = document.getElementsByClassName('plus-btn');
let remove = document.getElementsByClassName('minus-btn');
let int = document.getElementsByClassName('quantity');

for(let i=0;i<add.length;i++){
  add[i].addEventListener("click",function(){
    console.log("ss")
    add[i].nextElementSibling.textContent ++
    totalprice()
  })
  
}
//bouton decrementation
for(let i=0;i<add.length;i++){
  remove[i].addEventListener("click",function(){
  console.log("ss")
  if(remove[i].previousElementSibling.innerHTML>0){
   remove[i].previousElementSibling.innerHTML--
   totalprice()
  }
   })
  }
// bouton delete
  let del = document.getElementsByClassName('delete-btn');
console.log(del)
for(let i=0;i<del.length;i++){
    del[i].addEventListener("click",function(){
        del[i].parentElement.parentElement.remove();
//total price ()
})
}
//bouton like
let likebtn = document.querySelectorAll('.fa-heart');
// let heart = document.querySelectorAll('.like');
for(let i =0; i<likebtn.length;i++){
  likebtn[i].addEventListener('click',function(){

    if(likebtn[i].style.color === 'black'){
      likebtn[i].style.color = 'red';}
      else{
        likebtn[i].style.color ='black';
  }
    }
  )
}
//calcul de la somme 
function totalprice(){
  let qte = document.getElementsByClassName('num');
  console.log(qte)

let price = document.getElementsByClassName('unit-price');
let sum = 0;
for(let i =0;i<price.length;i++)
{
  console.log(qte[i].innerHTML)
  sum += price[i].innerHTML*qte[i].innerHTML;}
  console.log(sum)
  document.getElementById('mySpan').innerText = sum;}

