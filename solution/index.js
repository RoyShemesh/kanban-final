//function that check the user's name
function checkName()
{
    //let name=localStorage.getItem("name");
    let name=localStorage.getItem("tasks");
    let tasks;
    bg=1;
    if(name===null)
    {
        tasks={
            "todo": [],
            "in-progress": [],
            "done": [],
        };
        //name=prompt("What is your name?");
        localStorage.setItem("tasks",JSON.stringify(tasks));
        //localStorage.setItem("name",name);
    }
    currentBg();
    //document.getElementById("page-title").innerText=name+"'s kanban";
    tasks=JSON.parse(localStorage.getItem("tasks"));
    for (let list in tasks) {
        tasks[list].forEach(text => {
            let task =createElement("li",[],["list-group-item","task"],{draggable:"true",ondragstart:"drag(event)"});
            task.innerText=text;
            document.getElementById(list).append(task);
            task.addEventListener('dblclick', changeTask);
            task.addEventListener('mouseover', moveTask);
            task.addEventListener('mouseout', moveTaskEnd);


        });
    }
}
//function that creates element
function createElement(tagName ,children = [], classes = [], attributes = {}) {
    const el = document.createElement(tagName);
    // Children
    for(const child of children) {
      el.append(child);
    }
    // Classes
    for(const cls of classes) {
      el.classList.add(cls);
    }
    // Attributes
    for (const attr in attributes) {
      el.setAttribute(attr, attributes[attr]);
    }
    return el;
  }
// create a new task and put it in his list 
function createTask(event)
{
    let task =createElement("li",[],["list-group-item","task"],{draggable:"true",ondragstart:"drag(event)"});
    task.addEventListener('dblclick', changeTask);
    task.addEventListener('mouseover', moveTask);
    task.addEventListener('mouseout', moveTaskEnd);

    let section=event.target.parentElement.id;
    let ul,text;
    switch(section)
    {
        case "1":
            text=document.getElementById("add-to-do-task").value;
            if(checkEmpty(text))
            {
                alert("Task must has info");
                break;
            }
            task.innerText=text;
            ul=document.getElementById("todo");
            ul.insertBefore(task,ul.firstChild); 
            document.getElementById("add-to-do-task").value="";
            list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
            list["todo"].unshift(text);
            localStorage.setItem("tasks",JSON.stringify(list));
            break;
        case "2":
            text=document.getElementById("add-in-progress-task").value;
            if(checkEmpty(text))
            {
                alert("Task must has info");
                break;
            }
            task.innerText=text;
            ul=document.getElementById("in-progress");
            ul.insertBefore(task,ul.firstChild); 
            document.getElementById("add-in-progress-task").value="";
            list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
            list["in-progress"].unshift(text);
            localStorage.setItem("tasks",JSON.stringify(list));
            break;
        case "3":
            text=document.getElementById("add-done-task").value;
            if(checkEmpty(text))
            {
                alert("Task must has info");
                break;
            }
            task.innerText=text;
            ul=document.getElementById("done");
            ul.insertBefore(task,ul.firstChild); 
            document.getElementById("add-done-task").value="";
            list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
            list["done"].unshift(text);
            localStorage.setItem("tasks",JSON.stringify(list));
            break;
    }
}
//function that check if task is empty
function checkEmpty(text)
{
    if (!text.replace(/\s/g, '').length) {
        return true;
    }
    return false;
}
//function that changing task
function changeTask(event)
{
    let task =this;
    listId=task.parentElement.id;
    deleteTaskByText(task.innerText,listId) 
    task.contentEditable=true;
    task.addEventListener('blur',(event)=>{
        task.contentEditable=false;
        list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
        list[listId].unshift(task.innerText);
        localStorage.setItem("tasks",JSON.stringify(list));
    })
}

//function that delete task given by text
function deleteTaskByText(text,listName)
{
    let check=true;
    let tasksJson=JSON.parse(localStorage.getItem("tasks"));
    let list=tasksJson[listName];
    for (let i = 0; i < list.length; i++) {
        if(text==tasksJson[listName][i]&&check)
        {
            tasksJson[listName].splice(i,1);
            check=false;
        }
    }
    localStorage.setItem("tasks",JSON.stringify(tasksJson));
}



//add and remove key press event
let moveTaskLi;
function moveTask(event)
{
    moveTaskLi=event.target
    document.addEventListener("keydown", moveTaskKeyPress);
}
function moveTaskEnd(event)
{
    document.removeEventListener("keydown", moveTaskKeyPress, false);
}
//check if alt+number was pressed
function moveTaskKeyPress(event)
{
    let list;
    if(event.altKey&&(event.keyCode===49||event.keyCode===50||event.keyCode===51))
    {
        deleteTaskByText(moveTaskLi.innerText,moveTaskLi.parentElement.id)
    }
    if(event.keyCode===49&&event.altKey)
    {
        document.getElementById("todo").prepend(moveTaskLi);
        list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
        list["todo"].unshift(moveTaskLi.innerText);
        localStorage.setItem("tasks",JSON.stringify(list));
    }
    if(event.keyCode===50&&event.altKey)
    {
        document.getElementById("in-progress").prepend(moveTaskLi)
        list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
        list["in-progress"].unshift(moveTaskLi.innerText);
        localStorage.setItem("tasks",JSON.stringify(list));
    }
    if(event.keyCode===51&&event.altKey)
    {        
        document.getElementById("done").prepend(moveTaskLi)
        list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
        list["done"].unshift(moveTaskLi.innerText);
        localStorage.setItem("tasks",JSON.stringify(list));
    }
}

//function search input 
let searchText;
function enterSearch(event)
{
    document.addEventListener("keyup", searchTask);
    
}
function exitSearch(event)
{
    document.removeEventListener("keyup", searchTask, false);
}
function searchTask(event)
{ 
    searchText=document.getElementById("search").value;
    console.log(searchText)
    let list;
    let allLi=document.getElementsByTagName("li");
    for (let i = 0; i < allLi.length; i++ ){
        if(!allLi[i].innerText.includes(searchText))
        {
            allLi[i].style.display="none";
        } 
        if(allLi[i].innerText.includes(searchText))
        {
            allLi[i].style.display="flex";
        } 
        if(checkEmpty(searchText)){
            allLi[i].style.display="flex";
        }
    }
}

//drag and drop function
let whichlist;
let dragTask;
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.innerText);
    whichlist=ev.target.parentElement;
    dragTask=ev.target;
  }
  
  function drop(ev) {
    ev.preventDefault();
    if(ev.target.tagName=="UL")
    {   
        let task = ev.dataTransfer.getData("text");
        deleteTaskByText(ev.dataTransfer.getData("text"),whichlist.id)
        ev.target.prepend(dragTask);
        list=JSON.parse(localStorage.getItem("tasks"));//push the task to local storage
        list[ev.target.id].unshift(dragTask.innerText);
        localStorage.setItem("tasks",JSON.stringify(list)); 
    }
  }

  let bg;
  function nextBg()
{
    bg++;
    if(bg>3)
{        bg=1;
}    currentBg();

}
function previousBg()
{
    bg--;
    if(bg<1)
{        bg=3;
}    currentBg();
}
function currentBg()
{
    console.log("here")
    let body=document.getElementById("body");
    switch (bg) {
        case 1:
            console.log("img1")
            body.style.backgroundImage="url('./img/bg1.jfif')";
            body.classList.remove("bright");
            break;
        case 2:
            console.log("img2")
            body.classList.remove("bright");
            body.style.backgroundImage="url('./img/bg2.jfif')";
            break;
        case 3:
            console.log("img3")
            body.classList.add("bright");
            body.style.backgroundImage="url('./img/bg3.jfif')";
            break;
    }
}