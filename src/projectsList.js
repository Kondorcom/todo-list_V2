export default function selectedProject(value) {
    console.log("namesss");
    const selectedProjectName = document.getElementsByClassName(
        "projLstNewProjectTxt"
    )[value];

    console.log(selectedProjectName.innerText);
    // let btns = document.querySelectorAll(".projectListButton");

    // btns.forEach((btn) => {
    //     btn.addEventListener("click", console.log("name"));
    // });
}
