<h1>TODO</h1>
<input type="text" id="inp">
<button id="add-btn">Add</button>
<ul id="ul"></ul>
<script>
  let addTodo=document.getElementById('add-btn')
  let ulList=document.getElementById('ul')
  
  addTodo.addEventListener('click',()=>{
  let input=document.getElementById('inp').value
    
  let list=document.createElement('li')
  ulList.append(list)
    
  let listInput=document.createElement('input')
  list.append(listInput)
  listInput.type='text'
  listInput.disabled=true
  listInput.value=input

  let editBtn=document.createElement('button')
  editBtn.textContent='Edit'
  list.append(editBtn)
  editBtn.addEventListener('click',()=>{
   listInput.disabled=!listInput.disabled;
   editBtn.textContent=listInput.disabled?'Edit':'done';

  })
  
  let deleteBtn=document.createElement('button')
  list.appendChild(deleteBtn)
  deleteBtn.textContent="Delete"
  deleteBtn.classList.add('dltBtn')
 })
  
    ulList.addEventListener('click',(e)=>{
      if(e.target.classList.contains('dltBtn')){
        let listItem=e.target.parentNode;
       listItem.remove()
      }
    })
</script>