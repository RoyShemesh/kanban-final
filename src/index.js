import "./styles.css";
checkName();
async function checkName() {
  let name = localStorage.getItem('tasks')
  bg = 1
  if (name === null) {
    buildTask()
  }
  currentBg()
  let tasks = JSON.parse(localStorage.getItem('tasks'))
  let tasksApi
  /* try{tasksApi=getApi().json;
    if(tasks!==tasksApi)
        tasks=tasksApi;
    }
    catch{} */
  restoreData(tasks)
}
//insert restored data into lists
function restoreData(tasks) {
  for (let list in tasks) {
    tasks[list].forEach((text) => {
      let task = createLiElement()
      task.innerText = text
      document.getElementById(list).append(task)
    })
  }
}
//build empty tasks
function buildTask() {
  let tasks = {
    todo: [],
    'in-progress': [],
    done: [],
  }
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

//API
async function getApi() {
  showSpinner()
  let alltask = document.getElementsByTagName('li')
  for (let i = alltask.length - 1; i > -1; i--) {
    alltask[i].parentElement.removeChild(alltask[i])
  }
  try {
    const respone = await fetch(
      'https://json-bins.herokuapp.com/bin/614b080c4021ac0e6c080cd2',
      {
        method: 'GET',
        headers: {
          ID: '614b080c4021ac0e6c080cd2',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
    const answerApi = await respone.json()
    hideSpinner()

    tasks = answerApi.tasks
    for (let list in tasks) {
      tasks[list].forEach((text) => {
        let task = createElement('li', [], ['list-group-item', 'task'], {
          draggable: 'true',
          ondragstart: 'drag(event)',
        })
        task.innerText = text
        document.getElementById(list).append(task)
        task.addEventListener('dblclick', changeTask)
        task.addEventListener('mouseover', moveTask)
        task.addEventListener('mouseout', moveTaskEnd)
      })
    }
    return answerApi.tasks
  } catch (er) {
    hideSpinner()
    tasks = JSON.parse(localStorage.getItem('tasks'))
    for (let list in tasks) {
      tasks[list].forEach((text) => {
        let task = createElement('li', [], ['list-group-item', 'task'], {
          draggable: 'true',
          ondragstart: 'drag(event)',
        })
        task.innerText = text
        document.getElementById(list).append(task)
        task.addEventListener('dblclick', changeTask)
        task.addEventListener('mouseover', moveTask)
        task.addEventListener('mouseout', moveTaskEnd)
      })
    }
  } finally {
    hideSpinner()
  }
}
async function saveApi() {
  let alltask = document.getElementsByTagName('li')
  let lists = {
    todo: [],
    'in-progress': [],
    done: [],
  }
  for (let i = alltask.length - 1; i > -1; i--) {
    let ul = alltask[i].parentElement.id
    lists[ul].unshift(alltask[i].innerText)
  }
  localStorage.setItem('tasks', JSON.stringify(lists))
  try {
    const respone = await fetch(
      'https://json-bins.herokuapp.com/bin/614b080c4021ac0e6c080cd2',
      {
        method: 'PUT',
        headers: {
          ID: '614b080c4021ac0e6c080cd2',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tasks: lists }),
      }
    )
  } catch (ex) {
    alert('list are empty')
    throw 'The lists are empty'
  } finally {
    alert('saved!')
  }
}
async function clearApi() {
  let lists = {
    todo: [],
    'in-progress': [],
    done: [],
  }
  try {
    const respone = await fetch(
      'https://json-bins.herokuapp.com/bin/614b080c4021ac0e6c080cd2',
      {
        method: 'PUT',
        headers: {
          ID: '614b080c4021ac0e6c080cd2',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tasks: lists }),
      }
    )
    localStorage.clear()
    tasks = {
      todo: [],
      'in-progress': [],
      done: [],
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
    let alltask = document.getElementsByTagName('li')
    for (let i = alltask.length - 1; i > -1; i--) {
      alltask[i].parentElement.removeChild(alltask[i])
    }
  } catch (ex) {
    alert('list are empty')
    throw 'error'
  }
}
//API

//ADD TASK

//function that creates element
function createElement(tagName, children = [], classes = [], attributes = {}) {
  const el = document.createElement(tagName)
  // Children
  for (const child of children) {
    el.append(child)
  }
  // Classes
  for (const cls of classes) {
    el.classList.add(cls)
  }
  // Attributes
  for (const attr in attributes) {
    el.setAttribute(attr, attributes[attr])
  }
  return el
}
// create a new task and put it in his 
createTask()
function createTask(event) {
  if(event==null)
  {
    throw("check")
  }
  let task = createLiElement()
  let section = event.target.parentElement.id,
    ul,
    text
  switch (section) {
    case '1':
      task.innerText = document.getElementById('add-to-do-task').value
      insertToSection('todo', task)
      break
    case '2':
      task.innerText = document.getElementById('add-in-progress-task').value
      insertToSection('in-progress', task)
      break
    case '3':
      task.innerText = document.getElementById('add-done-task').value
      insertToSection('done', task)
      break
  }
}
function insertToSection(list, task) {
  if (checkEmpty(task.innerText)) {
    throw 'Empty task'
  }
  addToUl(document.getElementById(list), task)
  unshiftTask(task.innerText, list)
}
//create li element
function createLiElement() {
  let task = createElement('li', [], ['list-group-item', 'task'], {
    draggable: 'true',
    ondragstart: 'drag(event)',
  })
  task.addEventListener('dblclick', changeTask)
  task.addEventListener('mouseover', moveTask)
  task.addEventListener('mouseout', moveTaskEnd)
  return task
}
//function that add the li to the correct list and clear the input
function addToUl(ul, li) {
  ul.insertBefore(li, ul.firstChild)
  let input = ul.parentElement.getElementsByTagName('input')
  input[0].value = ''
}
//function that check if task is empty
function checkEmpty(text) {
  if (!text.replace(/\s/g, '').length) {
    alert('Task must has info')
    return true
  }
  return false
}

//unshift task to storage;
function unshiftTask(text, listId) {
  list = JSON.parse(localStorage.getItem('tasks')) //push the task to local storage
  list[listId].unshift(text)
  localStorage.setItem('tasks', JSON.stringify(list))
}

//ADD TASK

//MISSIONS : CHANGE TASK

//function that changing task
function changeTask(event) {
  deleteTaskByText(this.innerText, this.parentElement.id)
  this.contentEditable = true
  this.addEventListener('blur', (event) => {
    this.contentEditable = false
    unshiftTask(this.innerText, this.parentElement.id)
  })
}

//MISSIONS : CHANGE TASK

//MISSSIONS:MOVE TASK

//function that delete task given by text
function deleteTaskByText(text, listName) {
  let check = true
  let tasksJson = JSON.parse(localStorage.getItem('tasks'))
  let list = tasksJson[listName]
  for (let i = 0; i < list.length; i++) {
    if (text == tasksJson[listName][i] && check) {
      tasksJson[listName].splice(i, 1)
      check = false
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasksJson))
}
//add and remove key press event
let moveTaskLi
function moveTask(event) {
  moveTaskLi = event.target
  document.addEventListener('keydown', moveTaskKeyPress)
}
function moveTaskEnd(event) {
  document.removeEventListener('keydown', moveTaskKeyPress, false)
}
//check if alt+number was pressed
function moveTaskKeyPress(event) {
  let list
  if (
    event.altKey &&
    (event.keyCode === 49 || event.keyCode === 50 || event.keyCode === 51)
  ) {
    deleteTaskByText(moveTaskLi.innerText, moveTaskLi.parentElement.id)
  }
  if (event.keyCode === 49 && event.altKey) {
    moveTaskFinal(moveTaskLi, 'todo')
  }
  if (event.keyCode === 50 && event.altKey) {
    moveTaskFinal(moveTaskLi, 'in-progress')
  }
  if (event.keyCode === 51 && event.altKey) {
    moveTaskFinal(moveTaskLi, 'done')
  }
}
function moveTaskFinal(moveTaskLi, listTemp) {
  document.getElementById(listTemp).prepend(moveTaskLi)
  list = JSON.parse(localStorage.getItem('tasks')) //push the task to local storage
  list[listTemp].unshift(moveTaskLi.innerText)
  localStorage.setItem('tasks', JSON.stringify(list))
}

//MISSSIONS:MOVE TASK

//MISSIONS:SEARCH

function checkEmptySearch(text) {
  if (!text.replace(/\s/g, '').length) {
    return true
  }
  return false
}

//function search input
let searchText
function enterSearch(event) {
  document.addEventListener('keyup', searchTask)
}
function exitSearch(event) {
  document.removeEventListener('keyup', searchTask, false)
}
function searchTask(event) {
  searchText = document.getElementById('search').value
  let list
  let allLi = document.getElementsByTagName('li')
  for (let i = 0; i < allLi.length; i++) {
    if (!allLi[i].innerText.includes(searchText)) {
      allLi[i].style.display = 'none'
    }
    if (allLi[i].innerText.includes(searchText)) {
      allLi[i].style.display = 'flex'
    }
    if (checkEmptySearch(searchText)) {
      allLi[i].style.display = 'flex'
    }
  }
}

//MISSIONS: SEARCH

//DRAG AND DROP

//drag and drop function
let whichlist
let dragTask
function allowDrop(ev) {
  ev.preventDefault()
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.innerText)
  whichlist = ev.target.parentElement
  dragTask = ev.target
}

function drop(ev) {
  ev.preventDefault()
  if (ev.target.tagName == 'UL') {
    let task = ev.dataTransfer.getData('text')
    deleteTaskByText(ev.dataTransfer.getData('text'), whichlist.id)
    ev.target.prepend(dragTask)
    list = JSON.parse(localStorage.getItem('tasks')) //push the task to local storage
    list[ev.target.id].unshift(dragTask.innerText)
    localStorage.setItem('tasks', JSON.stringify(list))
  }
}

//DRAG AND DROP
//BG

//change background image
let bg
function nextBg() {
  bg++
  if (bg > 3) {
    bg = 1
  }
  currentBg()
}
function previousBg() {
  bg--
  if (bg < 1) {
    bg = 3
  }
  currentBg()
}
function currentBg() {
  let body = document.getElementById('body')
  switch (bg) {
    case 1:
      body.style.backgroundImage = "url('./img/bg1.jfif')"
      body.classList.remove('bright')
      break
    case 2:
      body.classList.remove('bright')
      body.style.backgroundImage = "url('./img/bg2.jfif')"
      break
    case 3:
      body.classList.add('bright')
      body.style.backgroundImage = "url('./img/bg3.jfif')"
      break
  }
}

//BG
//SPINNER

//show and hide spinner
function showSpinner() {
  let loader = createElement('div')
  loader.id = 'loader'
  loader.classList.add('loader')
  document.getElementById('body').append(loader)
  document.getElementById('main').style.display = 'none'
}

function hideSpinner() {
  let loader = document.getElementById('loader')
  loader.remove()
  document.getElementById('main').style.display = 'flex'
}

//SPINNER
