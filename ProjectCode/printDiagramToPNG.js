// print the diagram by opening a new window holding SVG images of the diagram contents for each page
function printDiagramToPNG() {

    let canvas = document.getElementById("myDiagramDiv").children[0];
    console.log(canvas)

    // Konvertieren des Canvas-Inhalts in PNG
    const pngImage = canvas.toDataURL("image/png");

    // Verwenden Sie das PNG-Bild
    // z.B. Herunterladen als Datei oder Verwenden als Bildquelle
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = pngImage;
    link.click();

}