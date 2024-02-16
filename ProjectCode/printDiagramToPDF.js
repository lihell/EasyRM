function printDiagramToPDF() {
// Fügen Sie die PNG-Datei dem PDF-Dokument hinzu
    let image = new Image();

// Wenn das Bild geladen wurde, erstellen Sie ein PDF-Dokument und fügen Sie das Bild hinzu
    image.onload = function() {
        // PDF-Seitengröße
        let pageWidth = 210;
        let pageHeight = 297;

        // Skalieren Sie das Bild, um es auf eine PDF-Seite zu passen
        let scale = Math.min(pageWidth / image.width, pageHeight / image.height);
        let scaledWidth = image.width * scale;
        let scaledHeight = image.height * scale;

        // Erstellen Sie ein neues PDF-Dokument
        let pdf = new jsPDF("portrait", "mm", "a4");

        // Fügen Sie das skalierte Bild hinzu
        pdf.addImage(image, "PNG", (pageWidth - scaledWidth) / 2, (pageHeight - scaledHeight) / 2, scaledWidth, scaledHeight);

        // Speichern Sie das PDF-Dokument
        pdf.save("output.pdf");
    };
// Setzen Sie die Quelle des Bilds
    image.src = document.getElementById("myDiagramDiv").children[0].toDataURL("image/png")

}