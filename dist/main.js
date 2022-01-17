/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\ncheckName();\n\nfunction checkName() {\n  return _checkName.apply(this, arguments);\n} //insert restored data into lists\n\n\nfunction _checkName() {\n  _checkName = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var name, tasks, tasksApi;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            name = localStorage.getItem('tasks');\n            bg = 1;\n\n            if (name === null) {\n              buildTask();\n            }\n\n            currentBg();\n            tasks = JSON.parse(localStorage.getItem('tasks'));\n\n            /* try{tasksApi=getApi().json;\r\n              if(tasks!==tasksApi)\r\n                  tasks=tasksApi;\r\n              }\r\n              catch{} */\n            restoreData(tasks);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _checkName.apply(this, arguments);\n}\n\nfunction restoreData(tasks) {\n  var _loop = function _loop(_list) {\n    tasks[_list].forEach(function (text) {\n      var task = createLiElement();\n      task.innerText = text;\n      document.getElementById(_list).append(task);\n    });\n  };\n\n  for (var _list in tasks) {\n    _loop(_list);\n  }\n} //build empty tasks\n\n\nfunction buildTask() {\n  var tasks = {\n    todo: [],\n    'in-progress': [],\n    done: []\n  };\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n} //API\n\n\nfunction getApi() {\n  return _getApi.apply(this, arguments);\n}\n\nfunction _getApi() {\n  _getApi = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var alltask, i, respone, answerApi, _loop2, _list2, _loop3, _list3;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            showSpinner();\n            alltask = document.getElementsByTagName('li');\n\n            for (i = alltask.length - 1; i > -1; i--) {\n              alltask[i].parentElement.removeChild(alltask[i]);\n            }\n\n            _context2.prev = 3;\n            _context2.next = 6;\n            return fetch('https://json-bins.herokuapp.com/bin/614b080c4021ac0e6c080cd2', {\n              method: 'GET',\n              headers: {\n                ID: '614b080c4021ac0e6c080cd2',\n                Accept: 'application/json',\n                'Content-Type': 'application/json'\n              }\n            });\n\n          case 6:\n            respone = _context2.sent;\n            _context2.next = 9;\n            return respone.json();\n\n          case 9:\n            answerApi = _context2.sent;\n            hideSpinner();\n            tasks = answerApi.tasks;\n\n            _loop2 = function _loop2(_list2) {\n              tasks[_list2].forEach(function (text) {\n                var task = createElement('li', [], ['list-group-item', 'task'], {\n                  draggable: 'true',\n                  ondragstart: 'drag(event)'\n                });\n                task.innerText = text;\n                document.getElementById(_list2).append(task);\n                task.addEventListener('dblclick', changeTask);\n                task.addEventListener('mouseover', moveTask);\n                task.addEventListener('mouseout', moveTaskEnd);\n              });\n            };\n\n            for (_list2 in tasks) {\n              _loop2(_list2);\n            }\n\n            return _context2.abrupt(\"return\", answerApi.tasks);\n\n          case 17:\n            _context2.prev = 17;\n            _context2.t0 = _context2[\"catch\"](3);\n            hideSpinner();\n            tasks = JSON.parse(localStorage.getItem('tasks'));\n\n            _loop3 = function _loop3(_list3) {\n              tasks[_list3].forEach(function (text) {\n                var task = createElement('li', [], ['list-group-item', 'task'], {\n                  draggable: 'true',\n                  ondragstart: 'drag(event)'\n                });\n                task.innerText = text;\n                document.getElementById(_list3).append(task);\n                task.addEventListener('dblclick', changeTask);\n                task.addEventListener('mouseover', moveTask);\n                task.addEventListener('mouseout', moveTaskEnd);\n              });\n            };\n\n            for (_list3 in tasks) {\n              _loop3(_list3);\n            }\n\n          case 23:\n            _context2.prev = 23;\n            hideSpinner();\n            return _context2.finish(23);\n\n          case 26:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[3, 17, 23, 26]]);\n  }));\n  return _getApi.apply(this, arguments);\n}\n\nfunction saveApi() {\n  return _saveApi.apply(this, arguments);\n}\n\nfunction _saveApi() {\n  _saveApi = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n    var alltask, lists, i, ul, respone;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            alltask = document.getElementsByTagName('li');\n            lists = {\n              todo: [],\n              'in-progress': [],\n              done: []\n            };\n\n            for (i = alltask.length - 1; i > -1; i--) {\n              ul = alltask[i].parentElement.id;\n              lists[ul].unshift(alltask[i].innerText);\n            }\n\n            localStorage.setItem('tasks', JSON.stringify(lists));\n            _context3.prev = 4;\n            _context3.next = 7;\n            return fetch('https://json-bins.herokuapp.com/bin/614b080c4021ac0e6c080cd2', {\n              method: 'PUT',\n              headers: {\n                ID: '614b080c4021ac0e6c080cd2',\n                Accept: 'application/json',\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify({\n                tasks: lists\n              })\n            });\n\n          case 7:\n            respone = _context3.sent;\n            _context3.next = 14;\n            break;\n\n          case 10:\n            _context3.prev = 10;\n            _context3.t0 = _context3[\"catch\"](4);\n            alert('list are empty');\n            throw 'The lists are empty';\n\n          case 14:\n            _context3.prev = 14;\n            alert('saved!');\n            return _context3.finish(14);\n\n          case 17:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[4, 10, 14, 17]]);\n  }));\n  return _saveApi.apply(this, arguments);\n}\n\nfunction clearApi() {\n  return _clearApi.apply(this, arguments);\n} //API\n//ADD TASK\n//function that creates element\n\n\nfunction _clearApi() {\n  _clearApi = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n    var lists, respone, alltask, i;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            lists = {\n              todo: [],\n              'in-progress': [],\n              done: []\n            };\n            _context4.prev = 1;\n            _context4.next = 4;\n            return fetch('https://json-bins.herokuapp.com/bin/614b080c4021ac0e6c080cd2', {\n              method: 'PUT',\n              headers: {\n                ID: '614b080c4021ac0e6c080cd2',\n                Accept: 'application/json',\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify({\n                tasks: lists\n              })\n            });\n\n          case 4:\n            respone = _context4.sent;\n            localStorage.clear();\n            tasks = {\n              todo: [],\n              'in-progress': [],\n              done: []\n            };\n            localStorage.setItem('tasks', JSON.stringify(tasks));\n            alltask = document.getElementsByTagName('li');\n\n            for (i = alltask.length - 1; i > -1; i--) {\n              alltask[i].parentElement.removeChild(alltask[i]);\n            }\n\n            _context4.next = 16;\n            break;\n\n          case 12:\n            _context4.prev = 12;\n            _context4.t0 = _context4[\"catch\"](1);\n            alert('list are empty');\n            throw 'error';\n\n          case 16:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4, null, [[1, 12]]);\n  }));\n  return _clearApi.apply(this, arguments);\n}\n\nfunction createElement(tagName) {\n  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  var attributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n  var el = document.createElement(tagName); // Children\n\n  var _iterator = _createForOfIteratorHelper(children),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var child = _step.value;\n      el.append(child);\n    } // Classes\n\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var _iterator2 = _createForOfIteratorHelper(classes),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var cls = _step2.value;\n      el.classList.add(cls);\n    } // Attributes\n\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n\n  for (var attr in attributes) {\n    el.setAttribute(attr, attributes[attr]);\n  }\n\n  return el;\n} // create a new task and put it in his \n\n\ncreateTask();\n\nfunction createTask(event) {\n  if (event == null) {\n    throw \"check\";\n  }\n\n  var task = createLiElement();\n  var section = event.target.parentElement.id,\n      ul,\n      text;\n\n  switch (section) {\n    case '1':\n      task.innerText = document.getElementById('add-to-do-task').value;\n      insertToSection('todo', task);\n      break;\n\n    case '2':\n      task.innerText = document.getElementById('add-in-progress-task').value;\n      insertToSection('in-progress', task);\n      break;\n\n    case '3':\n      task.innerText = document.getElementById('add-done-task').value;\n      insertToSection('done', task);\n      break;\n  }\n}\n\nfunction insertToSection(list, task) {\n  if (checkEmpty(task.innerText)) {\n    throw 'Empty task';\n  }\n\n  addToUl(document.getElementById(list), task);\n  unshiftTask(task.innerText, list);\n} //create li element\n\n\nfunction createLiElement() {\n  var task = createElement('li', [], ['list-group-item', 'task'], {\n    draggable: 'true',\n    ondragstart: 'drag(event)'\n  });\n  task.addEventListener('dblclick', changeTask);\n  task.addEventListener('mouseover', moveTask);\n  task.addEventListener('mouseout', moveTaskEnd);\n  return task;\n} //function that add the li to the correct list and clear the input\n\n\nfunction addToUl(ul, li) {\n  ul.insertBefore(li, ul.firstChild);\n  var input = ul.parentElement.getElementsByTagName('input');\n  input[0].value = '';\n} //function that check if task is empty\n\n\nfunction checkEmpty(text) {\n  if (!text.replace(/\\s/g, '').length) {\n    alert('Task must has info');\n    return true;\n  }\n\n  return false;\n} //unshift task to storage;\n\n\nfunction unshiftTask(text, listId) {\n  list = JSON.parse(localStorage.getItem('tasks')); //push the task to local storage\n\n  list[listId].unshift(text);\n  localStorage.setItem('tasks', JSON.stringify(list));\n} //ADD TASK\n//MISSIONS : CHANGE TASK\n//function that changing task\n\n\nfunction changeTask(event) {\n  var _this = this;\n\n  deleteTaskByText(this.innerText, this.parentElement.id);\n  this.contentEditable = true;\n  this.addEventListener('blur', function (event) {\n    _this.contentEditable = false;\n    unshiftTask(_this.innerText, _this.parentElement.id);\n  });\n} //MISSIONS : CHANGE TASK\n//MISSSIONS:MOVE TASK\n//function that delete task given by text\n\n\nfunction deleteTaskByText(text, listName) {\n  var check = true;\n  var tasksJson = JSON.parse(localStorage.getItem('tasks'));\n  var list = tasksJson[listName];\n\n  for (var i = 0; i < list.length; i++) {\n    if (text == tasksJson[listName][i] && check) {\n      tasksJson[listName].splice(i, 1);\n      check = false;\n    }\n  }\n\n  localStorage.setItem('tasks', JSON.stringify(tasksJson));\n} //add and remove key press event\n\n\nvar moveTaskLi;\n\nfunction moveTask(event) {\n  moveTaskLi = event.target;\n  document.addEventListener('keydown', moveTaskKeyPress);\n}\n\nfunction moveTaskEnd(event) {\n  document.removeEventListener('keydown', moveTaskKeyPress, false);\n} //check if alt+number was pressed\n\n\nfunction moveTaskKeyPress(event) {\n  var list;\n\n  if (event.altKey && (event.keyCode === 49 || event.keyCode === 50 || event.keyCode === 51)) {\n    deleteTaskByText(moveTaskLi.innerText, moveTaskLi.parentElement.id);\n  }\n\n  if (event.keyCode === 49 && event.altKey) {\n    moveTaskFinal(moveTaskLi, 'todo');\n  }\n\n  if (event.keyCode === 50 && event.altKey) {\n    moveTaskFinal(moveTaskLi, 'in-progress');\n  }\n\n  if (event.keyCode === 51 && event.altKey) {\n    moveTaskFinal(moveTaskLi, 'done');\n  }\n}\n\nfunction moveTaskFinal(moveTaskLi, listTemp) {\n  document.getElementById(listTemp).prepend(moveTaskLi);\n  list = JSON.parse(localStorage.getItem('tasks')); //push the task to local storage\n\n  list[listTemp].unshift(moveTaskLi.innerText);\n  localStorage.setItem('tasks', JSON.stringify(list));\n} //MISSSIONS:MOVE TASK\n//MISSIONS:SEARCH\n\n\nfunction checkEmptySearch(text) {\n  if (!text.replace(/\\s/g, '').length) {\n    return true;\n  }\n\n  return false;\n} //function search input\n\n\nvar searchText;\n\nfunction enterSearch(event) {\n  document.addEventListener('keyup', searchTask);\n}\n\nfunction exitSearch(event) {\n  document.removeEventListener('keyup', searchTask, false);\n}\n\nfunction searchTask(event) {\n  searchText = document.getElementById('search').value;\n  var list;\n  var allLi = document.getElementsByTagName('li');\n\n  for (var i = 0; i < allLi.length; i++) {\n    if (!allLi[i].innerText.includes(searchText)) {\n      allLi[i].style.display = 'none';\n    }\n\n    if (allLi[i].innerText.includes(searchText)) {\n      allLi[i].style.display = 'flex';\n    }\n\n    if (checkEmptySearch(searchText)) {\n      allLi[i].style.display = 'flex';\n    }\n  }\n} //MISSIONS: SEARCH\n//DRAG AND DROP\n//drag and drop function\n\n\nvar whichlist;\nvar dragTask;\n\nfunction allowDrop(ev) {\n  ev.preventDefault();\n}\n\nfunction drag(ev) {\n  ev.dataTransfer.setData('text', ev.target.innerText);\n  whichlist = ev.target.parentElement;\n  dragTask = ev.target;\n}\n\nfunction drop(ev) {\n  ev.preventDefault();\n\n  if (ev.target.tagName == 'UL') {\n    var task = ev.dataTransfer.getData('text');\n    deleteTaskByText(ev.dataTransfer.getData('text'), whichlist.id);\n    ev.target.prepend(dragTask);\n    list = JSON.parse(localStorage.getItem('tasks')); //push the task to local storage\n\n    list[ev.target.id].unshift(dragTask.innerText);\n    localStorage.setItem('tasks', JSON.stringify(list));\n  }\n} //DRAG AND DROP\n//BG\n//change background image\n\n\nvar bg;\n\nfunction nextBg() {\n  bg++;\n\n  if (bg > 3) {\n    bg = 1;\n  }\n\n  currentBg();\n}\n\nfunction previousBg() {\n  bg--;\n\n  if (bg < 1) {\n    bg = 3;\n  }\n\n  currentBg();\n}\n\nfunction currentBg() {\n  var body = document.getElementById('body');\n\n  switch (bg) {\n    case 1:\n      body.style.backgroundImage = \"url('./img/bg1.jfif')\";\n      body.classList.remove('bright');\n      break;\n\n    case 2:\n      body.classList.remove('bright');\n      body.style.backgroundImage = \"url('./img/bg2.jfif')\";\n      break;\n\n    case 3:\n      body.classList.add('bright');\n      body.style.backgroundImage = \"url('./img/bg3.jfif')\";\n      break;\n  }\n} //BG\n//SPINNER\n//show and hide spinner\n\n\nfunction showSpinner() {\n  var loader = createElement('div');\n  loader.id = 'loader';\n  loader.classList.add('loader');\n  document.getElementById('body').append(loader);\n  document.getElementById('main').style.display = 'none';\n}\n\nfunction hideSpinner() {\n  var loader = document.getElementById('loader');\n  loader.remove();\n  document.getElementById('main').style.display = 'flex';\n} //SPINNER\n\n//# sourceURL=webpack://final/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bg1.jfif */ \"./src/img/bg1.jfif\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".carousel-item {\\r\\n    height: 100vh;\\r\\n    min-height: 350px;\\r\\n    background: no-repeat center center scroll;\\r\\n    -webkit-background-size: cover;\\r\\n    -moz-background-size: cover;\\r\\n    -o-background-size: cover;\\r\\n    background-size: cover;\\r\\n  }\\r\\n.submit{\\r\\n    margin-left: 30px;\\r\\n}\\r\\nbody{\\r\\n  background-image:url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \")  ;\\r\\n}\\r\\n.api{\\r\\n  height:fit-content ;\\r\\n  \\r\\n}\\r\\nheader{\\r\\n  display: flex;\\r\\n}\\r\\nul{\\r\\n  border-style: solid;\\r\\n  border-color: #0a58ca;\\r\\n  padding-top: 10px;\\r\\n  padding-bottom: 10px;\\r\\n}\\r\\n.search{\\r\\n    margin-left: 30%;\\r\\n    width: 100%;\\r\\n}\\r\\n.btn-primary {\\r\\n    margin-bottom: 1%;\\r\\n}\\r\\n.box{\\r\\n      border-style:solid;\\r\\n      width: 25%;\\r\\n      height: auto;\\r\\n      margin-left: 60px;\\r\\n      margin-right: 60px;\\r\\n      }\\r\\n.list-group-item{\\r\\n    width:95%;\\r\\n    padding-left: 5px;\\r\\n}\\r\\n.twelve h1 {\\r\\n    font: size 45px;; \\r\\n    font-weight:700;  \\r\\n    letter-spacing:1px; \\r\\n    text-transform:uppercase; \\r\\n    width:160px; \\r\\n    text-align:center; \\r\\n    margin:auto; \\r\\n    white-space:nowrap; \\r\\n    padding-bottom:13px;\\r\\n  }\\r\\n  .twelve h1:before {\\r\\n      background-color: #c50000;\\r\\n      content: '';\\r\\n      display: block;\\r\\n      height: 3px;\\r\\n      width: 75px;\\r\\n      margin-bottom: 5px;\\r\\n  }\\r\\n  .twelve h1:after {\\r\\n      background-color: #c50000;\\r\\n      content: '';\\r\\n      display: block;\\r\\n          height: 3px;\\r\\n      width: 75px;\\r\\n      margin-bottom: 0.25em;\\r\\n  }\\r\\n  *,\\r\\n*:before,\\r\\n*:after {\\r\\n  -moz-box-sizing: border-box;\\r\\n  -webkit-box-sizing: border-box;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n.twelve{\\r\\n  \\r\\nmargin: auto;\\r\\n}\\r\\n\\r\\n.spinenrDiv{\\r\\ndisplay: none;}\\r\\n\\r\\n#loader {\\r\\n  \\r\\n  position: absolute;\\r\\n  left: 50%;\\r\\n  z-index: 1;\\r\\n  width: 120px;\\r\\n  height: 120px;\\r\\n  margin: 0 0 0 -76px;\\r\\n  border: 16px solid #f3f3f3;\\r\\n  border-radius: 50%;\\r\\n  border-top: 16px solid #3498db;\\r\\n  -webkit-animation: spin 2s linear infinite;\\r\\n  animation: spin 2s linear infinite;\\r\\n}\\r\\n@-webkit-keyframes spin {\\r\\n  0% { -webkit-transform: rotate(0deg); }\\r\\n  100% { -webkit-transform: rotate(360deg); }\\r\\n}\\r\\n\\r\\n@keyframes spin {\\r\\n  0% { transform: rotate(0deg); }\\r\\n  100% { transform: rotate(360deg); }\\r\\n}\\r\\n\\r\\n/* Add animation to \\\"page content\\\" */\\r\\n.animate-bottom {\\r\\n  position: relative;\\r\\n  -webkit-animation-name: animatebottom;\\r\\n  -webkit-animation-duration: 1s;\\r\\n  animation-name: animatebottom;\\r\\n  animation-duration: 1s\\r\\n}\\r\\n\\r\\n@-webkit-keyframes animatebottom {\\r\\n  from { bottom:-100px; opacity:0 } \\r\\n  to { bottom:0px; opacity:1 }\\r\\n}\\r\\n\\r\\n@keyframes animatebottom { \\r\\n  from{ bottom:-100px; opacity:0 } \\r\\n  to{ bottom:0; opacity:1 }\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n.form__label {\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  font-size: 1.2rem;\\r\\n  margin-left: 2rem;\\r\\n  margin-top: 0.7rem;\\r\\n  display: block;\\r\\n  transition: all 0.3s;\\r\\n  transform: translateY(0rem);\\r\\n}\\r\\n.bright{\\r\\n  color: wheat;\\r\\n}\\r\\n.form__input {\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  color: #333;\\r\\n  font-size: 1.2rem;\\r\\n\\tmargin: 0 auto;\\r\\n  padding: 1.5rem 2rem;\\r\\n  border-radius: 0.2rem;\\r\\n  background-color: rgb(255, 255, 255);\\r\\n  border: none;\\r\\n  width: 80%;\\r\\n  border-bottom: 0.3rem solid transparent;\\r\\n  transition: all 0.3s;\\r\\n}\\r\\n\\r\\n.form__input:placeholder-shown + .form__label {\\r\\n  opacity: 0;\\r\\n  visibility: hidden;\\r\\n  -webkit-transform: translateY(-4rem);\\r\\n  transform: translateY(-4rem);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://final/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://final/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://final/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://final/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://final/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://final/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/img/bg1.jfif":
/*!**************************!*\
  !*** ./src/img/bg1.jfif ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a71b81e4692fd384f022.jfif\";\n\n//# sourceURL=webpack://final/./src/img/bg1.jfif?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;