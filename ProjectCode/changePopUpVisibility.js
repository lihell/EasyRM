function popupVisibility(popupID) {
    let element = document.getElementById(popupID);
    element.classList.toggle("isVisible");
    element.classList.toggle("isNotVisible");
    if (popupID === "nameFilePopup") {
        let newElement = document.getElementById("sqlPopup");
        newElement.classList.toggle("isVisible");
        newElement.classList.toggle("isNotVisible");
    } else {
        containerBackgroundVisibility();
        diagramVisibility();
    }
}

function containerBackgroundVisibility() {
    let element = document.getElementById("containerBackgroundForPopup");
    element.classList.toggle("isVisible");
    element.classList.toggle("isNotVisible")
}

function diagramVisibility() {
    let element = document.getElementById("diagramBody");
    element.classList.toggle("isVisible");
    element.classList.toggle("isNotVisible");
}
