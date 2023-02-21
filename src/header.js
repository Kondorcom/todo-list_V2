export default function createHeaderDiv() {
    console.log("loading header 2");
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("headerDiv");

    const headerImgDiv = document.createElement("div");
    headerImgDiv.classList.add("headerImgDiv");

    const headerTextContent = document.createElement("div");
    headerTextContent.classList.add("headerTextContent");
    headerTextContent.textContent = "ToDo List";

    headerDiv.append(headerImgDiv, headerTextContent);
    return headerDiv;
}
