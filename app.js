const smileBtn = document.querySelector(".smile");
const blankBtn = document.querySelector(".blank");
const tiredBtn = document.querySelector(".tired");
const chat1 = document.querySelector(".chat1");
const chat2 = document.querySelector(".chat2");
const chat3 = document.querySelector(".chat3");
const chat4 = document.querySelector(".chat4");

const chatBtn = document.querySelector(".show-btn");

const moreBtn = document.querySelectorAll(".taskMore-btn")[0]

const tasks = document.querySelectorAll(".task input")

const taskInfoContainer = document.querySelector(".taskInfo-container")
const subTasksContainer = document.querySelector(".subtasks-container")
const generateSubTasksBtn = document.querySelector("span.colored-text")

function showChatBot(){
    if (
        chat1.style.display == "block" ||
        chat2.style.display == "block" ||
        chat3.style.display == "block" ||
        chat4.style.display == "block"
      ) {
        chat1.style.display = "none";
        chat2.style.display = "none";
        chat3.style.display = "none";
        chat4.style.display = "none";
      } else {
        chat1.style.display = "block";
      }
}

chatBtn.addEventListener("click", showChatBot);

smileBtn.addEventListener("click", () => {
  chat1.style.display = "none";
  chat2.style.display = "block";
});

blankBtn.addEventListener("click", () => {
  chat1.style.display = "none";
  chat3.style.display = "block";
});
tiredBtn.addEventListener("click", () => {
  chat1.style.display = "none";
  chat4.style.display = "block";
});

moreBtn.addEventListener("click",()=>{
    taskInfoContainer.style.transform = "translateY(0)"
})

generateSubTasksBtn.addEventListener("click",()=>{
    subTasksContainer.style.transform = "translateY(0)"
})

let tasksChecked = 0

tasks.forEach(task=>{
    task.addEventListener("click",()=>{
        if(!task.checked && tasksChecked > 0){
            tasksChecked -= 1
        } else{
            tasksChecked ++
        }
        console.log(tasksChecked);
        if(tasksChecked == 3){
            showChatBot()
        }
    })
})

