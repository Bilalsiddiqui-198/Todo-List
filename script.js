const button = document.querySelector("button");
const task = document.querySelector(".tasklist");
const input = document.querySelector("#Add_edit");

button.addEventListener("click", (e)=>{
    let div=document.createElement('div'); //new div create hoga
    div.classList.add("list"); //new div ko "list" class assign krne k lye
     div.innerHTML = `  //html elements add krne k lye div me
    <p>${input.value || "Add your tasks..."}</p>
    <div class="icons">
      <i class="fa-solid fa-pen-to-square edit_list"></i>
      <i class="fa-solid fa-trash-can delete"></i>
    </div>
  `;
    
    task.append(div);
    input.value = ''; //input field ko refresh krne k lye take old txt hat jae
});

task.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        e.target.closest(".list").remove();  //nearest parent jis ki class name list h osko target krega
    }
    if (e.target.classList.contains("edit_list")) {
      const parent = e.target.closest(".list");
      const p = parent.querySelector("p");
      input.value = p.textContent; //current text ko input me save krarhe take osi text ko edit krske
      input.focus(); //input feild ko active krne k lye
      parent.remove();// old task ko remove krega take new edited task oski jgh ajae
  }
});

