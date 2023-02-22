import headerImgImport from "./pics/checkPic.svg";

export default function createHeaderDiv() {
    console.log("loading header 2");
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("headerDiv");

    const headerImgDiv = document.createElement("div");
    headerImgDiv.classList.add("headerImgDiv");

    const headerTextContent = document.createElement("div");
    headerTextContent.classList.add("headerTextContent");
    headerTextContent.textContent = "ToDo List";

    const headerImg = new Image();

    headerImg.src = headerImgImport;
    headerImg.classList.add("headerImg");
    headerImgDiv.appendChild(headerImg);

    headerDiv.append(headerImgDiv, headerTextContent);
    return headerDiv;
}
