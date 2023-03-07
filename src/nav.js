import inboxPic from "./pics/inboxPic.svg";
import todayPic from "./pics/todayPic.svg";
import weekPic from "./pics/weekPic.svg";
import createProject from "./projects";
export default function createNavDiv() {
    //console.log("loading nav div");
    const navDiv = document.createElement("div");
    navDiv.classList.add("navDiv");

    const navDivTimetable = createNavDivTimetable();
    // const navDivTimetable = document.createElement("div");
    // navDivTimetable.classList.add("navDivTimetable");

    const navHeading = document.createElement("h3");
    navHeading.classList.add("navHeading");
    navHeading.textContent = "Projects";

    const navProjects = createProject();
    //const navProjects = document.createElement("div");
    //navProjects.classList.add("navProjects");

    navDiv.append(navDivTimetable, navHeading, navProjects);
    return navDiv;
}

export function createButton(buttonName, buttonText, buttonImg) {
    const newButton = document.createElement("button");
    newButton.classList.add(buttonName);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("navBtnContainer");

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

function createNavDivTimetable() {
    const navDivTimetable = document.createElement("div");
    navDivTimetable.classList.add("navDivTimetable");

    const inboxButton = createButton("inboxButton", "All tasks", inboxPic);
    const todayButton = createButton("todayButton", "Today", todayPic);
    const weekButton = createButton("weekButton", "This week", weekPic);

    navDivTimetable.append(inboxButton, todayButton, weekButton);

    return navDivTimetable;
}
