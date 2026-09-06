function get(id){
    let element = document.getElementById(id)
    return element
};

//USERNAME CODE
const usernameInput = get("username")
let username = localStorage.getItem("username")
usernameInput.value = username

//MISC CODE
const body = get("body")
const aboutBtn = get("aboutBtn");
const aboutUi = get("aboutUi");
const closeAbout = get("closeAbout");
const settingsBtn = get("settingsBtn");
const settingsUi = get("settingsUi");
const darkmodeBtn = get("darkmode");
const closeSettings = get("closeSettings");

aboutBtn.onclick = function(){
    aboutUi.showModal()
};
closeAbout.onclick = function(){
    aboutUi.close()
};

settingsBtn.onclick = function(){
    settingsUi.showModal()
};
darkmodeBtn.onclick = function(){
    if(darkmodeBtn.checked){
        body.style.backgroundColor = "rgba(0, 0, 0, 0.90)"
        body.style.color = "white"
        notepad.style.backgroundColor = "rgba(0, 0, 0, 0.80)"
        notepad.style.color = "white"
    }
    else{
        body.style.backgroundColor = "white"
        body.style.color = "black"
        notepad.style.backgroundColor = "white"
        notepad.style.color = "black"
    }
}
closeSettings.onclick = function(){
    settingsUi.close()
};

//CHECKLIST CODE
function chickIfChecked(input, checkbox, task){
    console.log(checkbox.checked)
    if(checkbox.checked){
        input.style.textDecoration = "line-through"
        task.isChecked = true
    }
    else{
        input.style.textDecoration = "none"
        task.isChecked = false
    }
};
//saving a specific thing
function saveToObject(input, task){
    task.content = input.value
};
//IMPORTANT saves everything, even checklist things
function updateLocalStorage(){
    username = usernameInput.value
    localStorage.setItem("username", username)
    notepadContent = notepad.value
    localStorage.setItem("notepad", notepadContent)
    localStorage.setItem("counterName", counterName.value)
    localStorage.setItem("counterAmount", amount)
    localStorage.setItem("customBtnsList", customBtnsList)
    localStorage.setItem("customBtnsFunctions", customBtnsFunctionsList)

    saveToObject(task1Input, tasks.task1)
    saveToObject(task2Input, tasks.task2)
    saveToObject(task3Input, tasks.task3)
    saveToObject(task4Input, tasks.task4)
    saveToObject(task5Input, tasks.task5)
    saveToObject(task6Input, tasks.task6)
    saveToObject(task7Input, tasks.task7)
    saveToObject(task8Input, tasks.task8)
    saveToObject(task9Input, tasks.task9)
    saveToObject(task10Input, tasks.task10)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    console.log(tasks)
    console.log(username)
    console.log(notepadContent)
};
//loading things
function loadFromObject(input, checkbox, task){
    input.value = task.content
    if(task.isChecked){
        checkbox.checked = true
        input.style.textDecoration = "line-through"
    }
};
//load the checklist
function load(){
    loadFromObject(task1Input, task1Check, tasks.task1)
    loadFromObject(task2Input, task2Check, tasks.task2)
    loadFromObject(task3Input, task3Check, tasks.task3)
    loadFromObject(task4Input, task4Check, tasks.task4)
    loadFromObject(task5Input, task5Check, tasks.task5)
    loadFromObject(task6Input, task6Check, tasks.task6)
    loadFromObject(task7Input, task7Check, tasks.task7)
    loadFromObject(task8Input, task8Check, tasks.task8)
    loadFromObject(task9Input, task9Check, tasks.task9)
    loadFromObject(task10Input, task10Check, tasks.task10)
}

//UI variables
const saveBtn = get("save")

const task1Input = get("task1Input");
const task1Check = get("task1Check");
const task2Input = get("task2Input");
const task2Check = get("task2Check");
const task3Input = get("task3Input");
const task3Check = get("task3Check");
const task4Input = get("task4Input");
const task4Check = get("task4Check");
const task5Input = get("task5Input");
const task5Check = get("task5Check");
const task6Input = get("task6Input");
const task6Check = get("task6Check");
const task7Input = get("task7Input");
const task7Check = get("task7Check");
const task8Input = get("task8Input");
const task8Check = get("task8Check");
const task9Input = get("task9Input");
const task9Check = get("task9Check");
const task10Input = get("task10Input");
const task10Check = get("task10Check");

saveBtn.onclick = function(){
    updateLocalStorage()
    window.alert("Data saved!")
}
//checkbox events
task1Check.addEventListener("change", ()=>{
    chickIfChecked(task1Input, task1Check, tasks.task1)
});
task2Check.addEventListener("change", ()=>{
    chickIfChecked(task2Input, task2Check, tasks.task2)
});
task3Check.addEventListener("change", ()=>{
    chickIfChecked(task3Input, task3Check, tasks.task3)
});
task4Check.addEventListener("change", ()=>{
    chickIfChecked(task4Input, task4Check, tasks.task4)
});
task5Check.addEventListener("change", ()=>{
    chickIfChecked(task5Input, task5Check, tasks.task5)
});
task6Check.addEventListener("change", ()=>{
    chickIfChecked(task6Input, task6Check, tasks.task6)
});
task7Check.addEventListener("change", ()=>{
    chickIfChecked(task7Input, task7Check, tasks.task7)
});
task8Check.addEventListener("change", ()=>{
    chickIfChecked(task8Input, task8Check, tasks.task8)
});
task9Check.addEventListener("change", ()=>{
    chickIfChecked(task9Input, task9Check, tasks.task9)
});
task10Check.addEventListener("change", ()=>{
    chickIfChecked(task10Input, task10Check, tasks.task10)
});
//init
console.log(JSON.parse(localStorage.getItem("tasks")))
let tasks = JSON.parse(localStorage.getItem("tasks"))
if(tasks === null){
    console.log("creating storage")
    tasks = {
        task1:{
            content: "",
            isChecked: false
        },
        task2:{
            content: "",
            isChecked: false
        },
        task3:{
            content: "",
            isChecked: false
        },
        task4:{
            content: "",
            isChecked: false
        },
        task5:{
            content: "",
            isChecked: false
        },
        task6:{
            content: "",
            isChecked: false
        },
        task7:{
            content: "",
            isChecked: false
        },
        task8:{
            content: "",
            isChecked: false
        },
        task9:{
            content: "",
            isChecked: false
        },
        task10:{
            content: "",
            isChecked: false
        },
    };
};
load();

//NOTEPAD CODE
const notepad = get("notepad")
let notepadContent = localStorage.getItem("notepad")
console.log(notepadContent)
if(notepadContent === "null"){
    notepad.value = ""
}
notepad.value = notepadContent

//LINKS CODE
const wikipediaBtn = get("wikipedia");
const youtubeBtn = get("youtube");
const githubBtn = get("github");
const tosdrBtn = get("tosdr");
const aternosBtn = get("aternos");
wikipediaBtn.onclick = function(){
    window.open("https://www.wikipedia.org/", "_blank")
};
youtubeBtn.onclick = function(){
    window.open("https://www.youtube.com/", "_blank")
};
githubBtn.onclick = function(){
    window.open("https://github.com/", "_blank")
};
tosdrBtn.onclick = function(){
    window.open("https://tosdr.org/", "_blank")
};
aternosBtn.onclick = function(){
    window.open("https://aternos.org/", "_blank")
}

//BUTTON CREATOR CODE
let customBtnsList = ""
let customBtnsFunctionsList = ""

//UI elements
const customBtns = get("customBtns");
const newBtnBtn = get("newBtn");
const deleteBtns = get("deleteBtns");
const newBtnUi = get("newBtnUi");
const btnNameInput = get("btnName");
const btnLinkInput = get("btnLink");
const btnCancelBtn = get("cancelNewBtn");
const btnConfirmBtn = get("confirmNewBtn");

if(localStorage.getItem("customBtnsList") != null){
    customBtnsList = localStorage.getItem("customBtnsList")
    customBtns.innerHTML = customBtnsList
}
if(localStorage.getItem("customBtnsFunctions") != null){
    customBtnsFunctionsList = localStorage.getItem("customBtnsFunctions")
    eval(customBtnsFunctionsList)
}

newBtnBtn.onclick = function(){
    newBtnUi.showModal()
    console.log("openUi")
};
btnCancelBtn.onclick = function(){
    newBtnUi.close()
    btnNameInput.value = ""
    btnLinkInput.value = ""
};
btnConfirmBtn.onclick = function(){
    if(btnNameInput.value != "" && btnLinkInput != ""){
        console.log(btnNameInput.value)
        console.log(btnLinkInput.value)
        customBtnsList += `<button id="${btnNameInput.value}" class="custom">${btnNameInput.value}</button>`
        console.log(customBtns)
        customBtns.innerHTML = customBtnsList
        customBtnsFunctionsList += `get("${btnNameInput.value}").onclick = function(){window.open("${btnLinkInput.value}", "_blank")};`
        console.log(customBtnsFunctionsList)
        eval(customBtnsFunctionsList)
        newBtnUi.close()
        btnNameInput.value = ""
        btnLinkInput.value = ""
    }
    else{
        window.alert("please fill in all fields")
    }
}
deleteBtns.onclick = function(){
    customBtnsList = ""
    customBtnsFunctionsList = ""
    eval(customBtnsFunctionsList)
    customBtns.innerHTML = null
}

//COUNTER CODE
const counterName = get("counterName");
if(localStorage.getItem("counterName") != null){
    counterName.value = localStorage.getItem("counterName")
}
let amount = localStorage.getItem("counterAmount")
if(amount == null){
    amount = 0
}
const counter = get("counter");
counter.textContent = amount
const addBtn = get("+");
const subtractBtn = get("-");
addBtn.onclick = function(){
    amount ++
    counter.textContent = amount
};
subtractBtn.onclick = function(){
    amount --
    counter.textContent = amount
};