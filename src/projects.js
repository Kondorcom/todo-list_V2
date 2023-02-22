import plusPic from "./pics/plusPic.svg";
import stripesPic from "./pics/threeStripes.svg";
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
    addProjBtnText.textContent = "Add Project";

    const addProjBtnPic = new Image();
    addProjBtnPic.classList.add("navBtnImgs");
    addProjBtnPic.src = plusPic;

    addProjContainer.append(addProjBtnPic, addProjBtnText);
    addProjBtn.appendChild(addProjContainer);

    // var addProjBtnClick = document.getElementsByClassName("addProjBtn")[0];
    addProjBtn.addEventListener("click", addNewProject);

    return addProjBtn;
}

function addNewProject() {
    // var addProjBtn = document.getElementsByClassName("addProjBtn")[0];
    // addProjBtn.addEventListener("click", addNewProject);
    console.log("Clicked button");
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
    newProjAddBtn.classList.add("newProjBtns");
    newProjAddBtn.textContent = "Add";

    const newProjCancelBtn = document.createElement("button");
    newProjCancelBtn.classList.add("newProjBtns");
    newProjCancelBtn.textContent = "Cancel";

    newProjUpperDiv.append(newProjectImg, newProjTextBox);

    newProjLowerDiv.append(newProjAddBtn, newProjCancelBtn);

    newProjectDiv.append(newProjUpperDiv, newProjLowerDiv);

    getNavProjectsDiv.appendChild(newProjectDiv);

    return getNavProjectsDiv;
}
