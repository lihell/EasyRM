//Create Table Builder gibt Create Table Anweisung zurück
function createSqlStatementFromJson() {
    let tables = createJsonArrayFromModels()
    let sqlStatement = ""
    console.log(tables)
    tables.forEach(table => {
        sqlStatement += "CREATE TABLE"+ " " + table.name + "(\n"
        table.columns.forEach(column =>{
            sqlStatement += column.name + " " + column.dataType + ",\n"
        })
        const lastIndex = sqlStatement.lastIndexOf(',');

        const replacement = ' ';

        sqlStatement =
            sqlStatement.substring(0, lastIndex) +
            replacement +
            sqlStatement.substring(lastIndex + 1);
        sqlStatement += ");\n"
    })
    let tableHTML = ""
    tables.forEach(table => {
        tableHTML += "<b>" + table.name + "</b><table><tr>"
        table.columns.forEach(column =>{
            tableHTML += "<td style='border: 1px solid white;'>" + column.name + "</td>"
        })
        tableHTML += "</tr><tr>"
        table.columns.forEach(column =>{
            tableHTML += "<td style='border: 1px solid white;'>" + column.dataType + "</td>"
        })
        tableHTML += "</tr></table>"
    })

    //document.getElementById("SQLText").textContent = sqlStatement
    document.getElementById("SQLTables").innerHTML = tableHTML
    document.getElementById("SQLText").innerHTML = sqlStatement
    myPopup4SQL()
    //throwGenericAlert(sqlStatement)
    console.log(tableHTML)
    return sqlStatement
}