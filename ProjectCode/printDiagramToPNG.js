// print the diagram by opening a new window holding SVG images of the diagram contents for each page
function printDiagramToPNG() {

    var canvas = document.getElementById("myDiagramDiv").children[0];
    console.log(canvas)
    //var canvas = document.getElementsByName("CanvasSurfaceContext");

    //canvas.width = 200;
    //canvas.height = 200;

    // Konvertieren des Canvas-Inhalts in PNG
    const pngImage = canvas.toDataURL("image/png");

    // Verwenden Sie das PNG-Bild
    // z.B. Herunterladen als Datei oder Verwenden als Bildquelle
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = pngImage;
    link.click();

}


// var canvas = document.createElement("canvas");

// canvas.width = 200;
// canvas.height = 200;

// var url = canvas.toDataURL();

// var a = document.createElement('a');
// a.download = 'my.png';
// a.href = url;
// a.textContent = 'Download PNG';