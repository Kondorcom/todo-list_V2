// import createButton from "./nav";
import plusPic from "./pics/plusPic.svg";
let addTaskButtonPressed = 0;
export function displayCurrentProjectHeader(inputProject) {
    const getHeaderText =
        document.getElementsByClassName("contentHeadingText")[0];
    // console.log("inputProject", inputProject);
    getHeaderText.textContent = inputProject.projectName;
    if (addTaskButtonPressed === 0) {
        addTaskButton();
    }
    addTaskButtonPressed++;
}
function addTaskButton() {
    // console.log("Add task button");
    const contentDiv = document.getElementsByClassName("contentDiv")[0];
    const newTaskButton = createButton("newTaskButton", "Add task", plusPic);
    const newDivTask = document.createElement("div");
    newDivTask.classList.add("newDivTask");
    newTaskButton.addEventListener("click", addTaskForm);
    newDivTask.append(newTaskButton);
    contentDiv.appendChild(newDivTask);
    return contentDiv;
    // const newTaskButton = document.createElement("button");
    // newTaskButton.classList.add("newTaskButton");
}
function createButton(buttonName, buttonText, buttonImg) {
    const newButton = document.createElement("button");
    newButton.classList.add(buttonName);
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("taskBtnContainer");
    const newButtonText = document.createElement("span");
    newButtonText.classList.add("navButtonText");
    newButtonText.textContent = buttonText;
    const myBtnPic = new Image();
    myBtnPic.classList.add("navBtnImgs");
    myBtnPic.src = buttonImg;
    btnContainer.append(myBtnPic, newButtonText);
    newButton.appendChild(btnContainer);
    return newButton;
}

function addTaskForm() {
    console.log("add task form");
    const newDivTask = document.getElementsByClassName("newDivTask")[0];
    const taskForm = document.createElement("form");
    taskForm.classList.add("taskForm");
    taskForm.id = "taskForm";
    const formInputFields = document.createElement("div");
    formInputFields.classList.add("formInputFields");
    const taskName = document.createElement("label");
    taskName.id = "taskName";
    taskName.textContent = "Task name:";
    const taskNameInput = document.createElement("input");
    taskNameInput.classList.add("taskNameInput");
    taskNameInput.setAttribute("type", "text");
    taskNameInput.setAttribute("placeholder", "What to do?");

    const taskDetails = document.createElement("label");
    taskDetails.id = "taskDetails";
    taskDetails.textContent = "Details(optional):";
    const taskDetailsInput = document.createElement("input");
    taskDetailsInput.classList.add("taskDetailsInput");
    taskDetailsInput.setAttribute("type", "text");
    taskDetailsInput.setAttribute("placeholder", "I am going to procrastinate");

    const taskEndDateLabel = document.createElement("label");
    taskEndDateLabel.id = "taskEndDateLabel";
    taskEndDateLabel.textContent = "Date:";
    const taskEndDate = document.createElement("input");
    taskEndDate.classList.add("taskEndDate");
    taskEndDate.setAttribute("type", "date");
    taskEndDate.setAttribute("placeholder", "mm/dd/yyyy");

    const taskFormButtons = document.createElement("div");
    taskFormButtons.classList.add("taskFormButtons");
    const taskSubmitButton = document.createElement("button");
    taskSubmitButton.classList.add("navButtonText");
    taskSubmitButton.classList.add("taskSubmitButton");
    taskSubmitButton.setAttribute("type", "submit");
    taskSubmitButton.textContent = "Add";
    const taskCancelButton = document.createElement("button");
    taskCancelButton.classList.add("navButtonText");
    taskCancelButton.classList.add("taskCancelButton");
    taskCancelButton.textContent = "Cancel";
    taskFormButtons.append(taskSubmitButton, taskCancelButton);
    formInputFields.append(
        taskName,
        taskNameInput,
        taskDetails,
        taskDetailsInput,
        taskEndDateLabel,
        taskEndDate,
        taskFormButtons
    );

    taskForm.appendChild(formInputFields);
    newDivTask.appendChild(taskForm);
    return newDivTask;
}
