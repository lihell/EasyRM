
function openSQLPopupWithSQLStatement() {
    let tables = createJsonArrayFromModels()
    let sqlStatement = createSqlStatementFromJson();
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
}