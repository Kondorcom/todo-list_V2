import _ from "lodash";
import "./style.css";
import frontPage from "./frontPageTD.js";
import printMe from "./print.js";

// function component() {
//     const element = document.createElement("div");
//     const btn = document.createElement("button");
//     // Lodash, now imported by this script
//     element.innerHTML = _.join(["Hello", "webpack"], " ");
//     // Add the image to our existing div.
//     btn.innerHTML = "Click me and check the console!";

//     btn.onclick = printMe;

//     element.appendChild(btn);
//     return element;
// }

// document.body.appendChild(component());

import createHeaderDiv from "./header.js";
import createNavDiv from "./nav.js";
import createFooterDiv from "./footer.js";
import createContentDiv from "./content.js";

function mainContentFunc() {
    console.log("loading main content");
    const mainContent = document.createElement("div");
    mainContent.classList.add("mainContent");
    const header = createHeaderDiv();
    const nav = createNavDiv();
    const content = createContentDiv();
    const footer = createFooterDiv();

    mainContent.append(header, nav, content, footer);
    return mainContent;
}
document.body.appendChild(mainContentFunc());
