let input = document.getElementById('input');
let btn = document.getElementById('btn');
let listContainer = document.getElementById('listUl')
btn.addEventListener('click', ()=>{
  var list= document.createElement('li')
  list.innerHTML = input.value
  let img = document.createElement('img')
  img.src = "icons8-delete-30.png";
  img.id = "img1"
  list.appendChild(img)
  listContainer.appendChild(list)
  input.value= ''
  // img.addEventListener('click', ()=>{
  //   list.remove()
  // })
  
})
listContainer.addEventListener("click",(e)=>{
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveDate()
  }
  else if(e.target.tagName === "IMG"){
    e.target.parentElement.remove()
    saveDate()
  }
})
   function saveDate(){
     localStorage.setItem('data', listContainer.innerHTML);
   }
  function showTask(){
   listContainer.innerHTML = localStorage.getItem('data')
  }
  showTask();
 