export default function createNavDiv() {
    console.log("loading nav div");
    const navDiv = document.createElement("div");
    navDiv.classList.add("navDiv");

    const navDivTimetable = document.createElement("div");
    navDivTimetable.classList.add("navDivTimetable");

    const navHeading = document.createElement("h3");
    navHeading.classList.add("navHeading");

    const navProjects = document.createElement("div");
    navProjects.classList.add("navProjects");

    navDiv.append(navDivTimetable, navHeading, navProjects);
    return navDiv;
}
