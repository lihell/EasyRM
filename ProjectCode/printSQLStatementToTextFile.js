
function printSQLStatementToTextFile() {

    let sqlStatementForDownload = createSqlStatementFromJson();
    console.log(sqlStatementForDownload);
    createAndDownloadTextFile(sqlStatementForDownload, document.getElementById('fileName').value);

}

function createAndDownloadTextFile(content, fileName) {
    var blob = new Blob([content], {
        type: 'text/plain'
    })
    let link = document.createElement("a");
    let url = URL.createObjectURL(blob);

    link.href = url;
    link.download = fileName + '.txt';
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}