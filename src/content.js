export default function createContentDiv() {
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("contentDiv");

    const contentHeading = document.createElement("div");
    contentHeading.classList.add("contentHeading");

    const contentHeadingText = document.createElement("span");
    contentHeadingText.classList.add("contentHeadingText");
    contentHeadingText.textContent = "All tasks";

    const contentHeadingDate = document.createElement("span");
    contentHeadingDate.classList.add("contentHeadingDate");
    // contentHeadingDate.textContent = "All";

    contentHeading.append(contentHeadingText, contentHeadingDate);

    contentDiv.append(contentHeading);

    return contentDiv;
}

function defaultContentAllTasks() {}
