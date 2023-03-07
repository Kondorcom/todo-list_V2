import plusPic from "./pics/plusPic.svg";
import stripesPic from "./pics/threeHor.svg";
import dotsPic from "./pics/threeVer.svg";

import currentDateLog from "./dateFunctions";
import selectedProject from "./projectsList";
import { newProjectClass } from "./projectClass";

let newProjectBtnClicks = 0;
let numberOfProjectsAdded = 0;
export let projectsArray = [];
export default function createProject() {
    const navProjects = document.createElement("div");
    navProjects.classList.add("navProjects");

    const addProjectButton1 = addProjectButton();
    navProjects.appendChild(addProjectButton1);

    return navProjects;
}

function addProjectButton() {
    const addProjBtn = document.createElement("button");
    addProjBtn.classList.add("addProjBtn");

    const addProjContainer = document.createElement("div");
    addProjContainer.classList.add("navBtnContainer");

    const addProjBtnText = document.createElement("span");
    addProjBtnText.classList.add("navButtonText");
    addProjBtnText.textContent = "Add project";

    const addProjBtnPic = new Image();
    addProjBtnPic.classList.add("navBtnImgs");
    addProjBtnPic.src = plusPic;

    addProjContainer.append(addProjBtnPic, addProjBtnText);
    addProjBtn.appendChild(addProjContainer);

    // var addProjBtnClick = document.getElementsByClassName("addProjBtn")[0];
    //addProjBtn.addEventListener("click", addNewProject);
    addProjBtn.addEventListener("click", checkNumberNewProjectBtnClicks);

    return addProjBtn;
}

function checkNumberNewProjectBtnClicks() {
    console.log("Clicked button times", newProjectBtnClicks);
    if (newProjectBtnClicks === 0) {
        addNewProject();
    }
}

function addNewProject() {
    // var addProjBtn = document.getElementsByClassName("addProjBtn")[0];
    // addProjBtn.addEventListener("click", addNewProject);

    newProjectBtnClicks = newProjectBtnClicks + 1;
    //console.log("Clicked button timessss", newProjectBtnClicks);

    const getNavProjectsDiv = document.getElementsByClassName("navProjects")[0];
    const newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add("newProjectDiv");

    const newProjUpperDiv = document.createElement("div");
    newProjUpperDiv.classList.add("newProjUpperDiv");
    const newProjLowerDiv = document.createElement("div");
    newProjLowerDiv.classList.add("newProjLowerDiv");

    const newProjectImg = new Image();
    newProjectImg.classList.add("newProjImg");
    newProjectImg.src = stripesPic;

    const newProjTextBox = document.createElement("input");
    newProjTextBox.classList.add("newProjTextBox");
    newProjTextBox.setAttribute("type", "text");

    const newProjAddBtn = document.createElement("button");
    newProjAddBtn.classList.add("newProjAddBtn");
    newProjAddBtn.textContent = "Add";

    const newProjCancelBtn = document.createElement("button");
    newProjCancelBtn.classList.add("newProjCancelBtn");
    newProjCancelBtn.textContent = "Cancel";

    newProjUpperDiv.append(newProjectImg, newProjTextBox);

    newProjLowerDiv.append(newProjAddBtn, newProjCancelBtn);

    newProjectDiv.append(newProjUpperDiv, newProjLowerDiv);

    getNavProjectsDiv.appendChild(newProjectDiv);

    newProjCancelBtn.addEventListener("click", cancelNewProject);
    newProjAddBtn.addEventListener("click", addProject);

    return getNavProjectsDiv;
}
function cancelNewProject() {
    newProjectBtnClicks = 0;

    removeElements("newProjectDiv");
}
function removeElements(elementToRemove) {
    //remove element and children
    const elementsToRemove = document.getElementsByClassName(elementToRemove);
    while (elementsToRemove.length > 0) elementsToRemove[0].remove();
}

function addProject() {
    const inputProjectNameElement =
        document.getElementsByClassName("newProjTextBox")[0];
    if (isInputNotEmpty(inputProjectNameElement) === true) {
        projectList();
        console.log("brojDodanihProj", numberOfProjectsAdded);
        // const currentDate = currentDateLog();
        window["project" + numberOfProjectsAdded] = new newProjectClass(
            inputProjectNameElement.value
        );
        projectsArray.push(window["project" + numberOfProjectsAdded]);
        // console.log("length of array", projectsArray.length);
        console.log("numberOfProjectsAdded", numberOfProjectsAdded);
        newProjectBtnClicks = 0;
        removeElements("newProjectDiv");
    }
}

function projectList() {
    const getNavProjectsDiv = document.getElementsByClassName("navProjects")[0];
    const projectList = document.createElement("div");
    projectList.classList.add("projectList");
    const newProjListButton = projectListNewProjectBtn();
    projectList.appendChild(newProjListButton);
    getNavProjectsDiv.append(projectList);
    return getNavProjectsDiv;
}

function projectListNewProjectBtn() {
    const projectListButton = document.createElement("button");
    projectListButton.classList.add("projectListButton");
    numberOfProjectsAdded++;
    projectListButton.id = numberOfProjectsAdded;

    const projLstBtnLeftDiv = document.createElement("div");
    projLstBtnLeftDiv.classList.add("projLstBtnLeftDiv");
    const projLstBtnRightDiv = document.createElement("div");
    projLstBtnRightDiv.classList.add("projLstBtnRightDiv");
    const newProjectImgStripes = new Image();
    newProjectImgStripes.classList.add("newProjImgList");
    newProjectImgStripes.src = stripesPic;
    const newProjectImgDots = new Image();
    newProjectImgDots.classList.add("newProjImg");
    newProjectImgDots.src = dotsPic;
    const inputProjectNameElement =
        document.getElementsByClassName("newProjTextBox")[0];
    const projLstNewProjectTxt = document.createElement("span");
    projLstNewProjectTxt.classList.add("navButtonText");
    projLstNewProjectTxt.classList.add("projLstNewProjectTxt");
    projLstNewProjectTxt.textContent = inputProjectNameElement.value;
    projLstBtnLeftDiv.append(newProjectImgStripes, projLstNewProjectTxt);
    projLstBtnRightDiv.append(newProjectImgDots);
    projectListButton.append(projLstBtnLeftDiv, projLstBtnRightDiv);

    projectListButton.addEventListener("click", selectedProject); //add event listener to all project buttons

    return projectListButton;
}
function isInputNotEmpty(input) {
    if (input && input.value.length > 3) {
        return true;
    } else if (input.value.length > 0 && input.value.length < 4) {
        alert("Project name is too short");
        return false;
    } else {
        alert("Project name can't be empty");
        return false;
    }
}
