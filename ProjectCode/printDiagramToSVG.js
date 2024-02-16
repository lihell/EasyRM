// print the diagram by opening a new window holding SVG images of the diagram contents for each page
function printDiagramToSVG() {
    let svg = myDiagram.makeSvg({ scale: 1, background: "white" });
    createAndDownloadFile(new XMLSerializer().serializeToString(svg), 'EasyRM.svg', 'image/svg+xml')

}