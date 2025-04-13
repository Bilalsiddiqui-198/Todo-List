const button = document.querySelector("button");
const items = document.querySelectorAll(".tasklist .list");
const task = document.querySelector(".tasklist");

button.addEventListener("click", (e)=>{
    let div=document.createElement('div');
    div.classList.add("list");
    div.innerHTML = `
    <p>Add your tasks...</p>
    <div class="icons">
      <i class="fa-solid fa-pen-to-square edit_list"></i>
      <i class="fa-solid fa-trash-can delete"></i>
    </div>
  `;
    
    task.append(div);
});

task.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        e.target.closest(".list").remove();
    }
});
