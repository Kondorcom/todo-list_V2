import plusPic from "./pics/plusPic.svg";
import stripesPic from "./pics/threeHor.svg";
import dotsPic from "./pics/threeVer.svg";
import { newProjectClass } from "./projectClass";
import currentDateLog from "./dateFunctions";
import selectedProject from "./projectsList";
let newProjectBtnClicks = 0;
let numberOfProjectsAdded = 0;

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
    console.log("check number of clicks");
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
        const currentDate = currentDateLog();
        let noviProjekt = new newProjectClass(
            inputProjectNameElement.value,
            currentDate
        );
        // numberOfProjectsAdded++;
        console.log("numberOfProjectsAdded", numberOfProjectsAdded);
        newProjectBtnClicks = 0;
        projectList();
        removeElements("newProjectDiv");

        const btns = document.querySelectorAll(".projectListButton");

        const buttonPressed = (e) => {
            console.log("target id ", e.target.id); // Get ID of Clicked Element

            // console.log(e.target.projLstBtnLeftDiv.projLstNewProjectTxt.value);
            selectedProject(e.target.id - 1);

            // const selectedProjectName = document.getElementsByClassName(
            //     "projLstNewProjectTxt"
            // )[e.target.id - 1];
            // console.log(selectedProjectName.innerText);
        };
        for (let btn of btns) {
            btn.addEventListener("click", buttonPressed);
        }
        // for (let btn of btns) {
        //     btn.addEventListener("click", buttonPressed);
        // }

        // let btns = document.querySelectorAll(".projectListButton");
        // for (let i = 0; i < numberOfProjectsAdded; i++) {
        //     btns[i].addEventListener("click", function () {
        //         alert("hi");
        //     });
        // }

        // let buttons1 = document.querySelectorAll(".projectListButton");
        // buttons1.forEach((btn) => {
        //     // btn.addEventListener("click", (event) => {
        //     //     alert(event.target);
        //     // });
        //     // button[i].addEventListener("click", (e) => {
        //     //     alert(button.indexOf(e.target));
        //     // });
        //     btn.addEventListener("click", (e) => {
        //         alert(btn.indexOf(e.target));
        //     });
        // });

        // btns[1].addEventListener("click", function () {
        //     alert("hi");
        // });

        // btns.forEach((btn) => {
        //     console.log(btn.value);
        //     btn.addEventListener("click", console.log("namerrrr"));
        // });
        // selectedProject();

        // const getSelectedProject =
        //     document.getElementsByClassName("projectListButton")[
        //         numberOfProjectsAdded - 1
        //     ];
        // console.log(getSelectedProject.value);
        // getSelectedProject.addEventListener("click", console.log("stisnuo si"));
        // getSelectedProject.addEventListener("click", selectedProject());
        //noviProjekt.sayHi();

        //noviProjekt.sayDate();
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
