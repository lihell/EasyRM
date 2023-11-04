//Create Table Builder gibt Create Table Anweisung zurück
function createSqlStatementFromJson() {
    let tables = createJsonArrayFromModels()
    let sqlStatement = ""
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
    return sqlStatement
}