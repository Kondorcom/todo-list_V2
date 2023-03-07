import { newProjectClass } from "./projectClass";
import { projectsArray } from "./projects";
import { displayCurrentProjectHeader } from "./tasks";
export default function selectedProject() {
    // console.log("proj id", this.id);
    let selectedProjectId = this.id - 1;
    const selectedProjectName = document.getElementsByClassName(
        "projLstNewProjectTxt"
    )[selectedProjectId];
    console.log("Selected project name:", selectedProjectName.innerText);
    console.log("this project id", selectedProjectId);
    // projectsArray[this.id - 1].sayHi();
    // console.log("array", projectsArray[this.id - 1]);
    // project1.sayHi();
    let currentSelectedProject = projectsArray[this.id - 1];
    // displayCurrentProjectHeader();
    displayCurrentProjectHeader(currentSelectedProject);
    // return currentSelectedProject;
}

function displaySelectedProject() {}
