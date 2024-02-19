
function printSQLStatementToTextFile() {

    let sqlStatementForDownload = createSqlStatementFromJson();
    console.log(sqlStatementForDownload);
    createAndDownloadTextFile(sqlStatementForDownload, document.getElementById('fileName').value);

}

function createAndDownloadTextFile(content, fileName) {
    let blob = new Blob([content], {
        type: 'application/sql'
    })
    let link = document.createElement("a");
    let url = URL.createObjectURL(blob);

    link.href = url;
    link.download = fileName + '.sql';
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}