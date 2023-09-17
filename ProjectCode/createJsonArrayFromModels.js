//Wandelt JSON des Diagramms in nutzbare Tabellen um Ohne Beachtung der Relations
function createJsonArrayFromModels() {
    let nodes = []
    nodes = [...myDiagram.model.nodeDataArray];
    let links = []
    links =  [...myDiagram.model.linkDataArray];
    console.log(myDiagram.model.nodeDataArray)
    let tables = []
    let myRelation = {
        linkOne: "",
        linkOneMult: "",
        linkOneConnKey: "",
        linkTwo: "",
        linkTwoMult: "",
        linkTwoConnKey: "",
    }

    nodes.forEach(node => {
        myRelation = {
            linkOne: "",
            linkOneMult: "",
            linkOneConnKey: "",
            linkTwo: "",
            linkTwoMult: "",
            linkTwoConnKey: "",
        }

        //Prüfung on Relation zu Entity wird

        if (node.category === "Relation") {
 
            let myLinks = []
            links.forEach(link => {
                if (link.from === node.key || link.to === node.key) {
                    myLinks.push({...link})
                }
            })
            myLinks.forEach(link => {
                if (link.to === node.key) {
                    if (nodes.find(node => (node.key === link.from && node.category === "Entity"))) {
                        if (myRelation.linkOne === "") {
                            myRelation.linkOne = node.key
                            myRelation.linkOneConnKey = link.from
                            myRelation.linkOneMult = link.text
                        } else {
                            myRelation.linkTwo = node.key
                            myRelation.linkTwoConnKey = link.from
                            myRelation.linkTwoMult = link.text
                        }
                    }
                }
                if (link.from === node.key) {
                    if (nodes.find(node => (node.key === link.to && node.category === "Entity"))) {
                        if (myRelation.linkOne === "") {
                            myRelation.linkOne = node.key
                            myRelation.linkOneConnKey = link.to
                            myRelation.linkOneMult = link.text
                        } else {
                            myRelation.linkTwo = node.key
                            myRelation.linkTwoConnKey = link.to
                            myRelation.linkTwoMult = link.text
                        }
                    }
                }

            })
            node.category = "NewEntityTemp"
            if (checkLinkMultiplicity(myRelation.linkOneMult) && checkLinkMultiplicity(myRelation.linkTwoMult)) {
                //Relation wird zu Entity mit dem Bonus, dass Sie später die IDs der Verbundenen Entities bekommt
                //console.log("NewEntity")
                node.category = "NewEntity"
            }

        }

        if (node.category === "Entity" || node.category === "NewEntity" || node.category === "NewEntityTemp") {
            let table = {
                name: node.text,
                key: node.key,
                columns: []
            }
            let columnToAdd = {
                name: "",
                dataType: ""
            }
            links.forEach(link => {
                let myLink = 0
                if (link.from === node.key) myLink = link.to
                if (link.to === node.key) myLink = link.from

                if (myLink != 0) {
                    tempNode = nodes.find(node => (node.key === myLink && node.category === "Attribute"))
                    if (tempNode !== undefined) {
                        columnToAdd.name = tempNode.text
                        columnToAdd.dataType = "varchar(255)"
                        table.columns.push({...columnToAdd})
                        //console.log(columnToAdd)
                    }
                    //nodes = nodes.filter(node => node.key != myLink)
                    //links = links.filter(link => !((link.from === myLink && link.to === node.key) || (link.to === myLink && link.from === node.key)))
                }
            })


            if (node.category === "Entity") {
                columnToAdd.name = table.name + "_ID"
                columnToAdd.dataType = "Integer"
                table.columns.push({...columnToAdd})
            } else {
                let connKeys = [
                    myRelation.linkOneConnKey,
                    myRelation.linkTwoConnKey
                ]
                console.log(connKeys)
                let myConnKeys = [...connKeys]
                myConnKeys.forEach(key => {
                    columnToAdd.name = nodes.find(node => (node.key === key)).text + "_ID"
                    columnToAdd.dataType = "Integer"
                    table.columns.push({...columnToAdd})
                })
            }

            if (node.category === "NewEntityTemp" && table.columns.length <= 2){
                //.log(table)
                //console.log("table")
            }else{
                tables.push({...table})
            }
            if (node.category === "NewEntityTemp" || node.category === "NewEntity" ){
                node.category = "Relation"
            }

        }
        //console.log(tables)
    })
    //console.log(myDiagram.model.nodeDataArray)
    //console.log(myDiagram.model.linkDataArray)


    // Hier in der IF die validateDiagram für Entity und Relation einbinden
    if ((validateDiagram("Attribute", tables) === "Valid") && (validateDiagram("Entity", tables) === "Valid") && (validateDiagram("Relation", nodes) === "Valid")) {
        //tables.forEach(table => console.log(createSqlStatementFromJson(table)))
        console.log("VALID")

        return tables
    }
    //return tables
}