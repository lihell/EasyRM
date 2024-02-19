function createLinkingData() {
    let nodesarray = []
    nodesarray = [...myDiagram.model.nodeDataArray];
    let links = []
    links =  JSON.parse(JSON.stringify(myDiagram.model.linkDataArray));
    let templinks = []
    // console.log("------------------");
    // console.log(links);
    // console.log("------------------");

    links.forEach(link => {
        console.log(link);
        if("visible" in link){
            // delete link.__gohashid
            console.log(link);
            console.log("------------------");
            templinks.push(link);
        }
    })
    // console.log("------------------");

    // console.log(links);
    // console.log("------------------");
    // console.log("DA");
    // console.log(templinks);
    // console.log("------------------");


    templinks.forEach(templink => {
        nodesarray.forEach(node => {
            // console.log("------------------");
            // console.log(node);
            // console.log(templink);
            // console.log("------------------");

            if(node.category === "Entity"){
                if(node.key === templink.from){
                    // console.log("FROM");
                    templink.from = node.text;
                }else if(node.key === templink.to){
                    // console.log("TO");
                    templink.to = node.text;
                }
            }
        })
    })

    links = []
    console.log("------------------");
    console.log(links);
    console.log(templinks);
    console.log("------------------");

    templinks.forEach(link => {
        if(Number.isInteger(link.from)){
            templinks.forEach(linking => {
                if(link.from === linking.from && link.to !== linking.to){
                    text = text1 = "1";
                    if(link.text !== undefined){
                        text = link.text;
                    }
                    if(linking.text !== undefined){
                        text1 = linking.text;
                    }
                    link["text"] = text;
                    link["text1"] = text1;
                    console.log(text, text1);
                    link.from = linking.to;
                    if(links.includes(link) === false){
                        links.push(link);
                    }
                }else if(link.from === linking.to && link.to !== linking.from){
                    text = text1 = "1";
                    if(link.text !== undefined){
                        text = link.text;
                    }
                    if(linking.text !== undefined){
                        text1 = linking.text;
                    }
                    link["text"] = text;
                    link["text1"] = text1;
                    console.log(text, text1);
                    link.from = linking.from;
                    if(links.includes(link) === false){
                        links.push(link);
                    }
                }
            })
        }else if(Number.isInteger(link.to)){
            templinks.forEach(linking => {
                if(link.to === linking.from && link.from !== linking.to){
                    text = text1 = "1";
                    if(link.text !== undefined){
                        text = link.text;
                    }
                    if(linking.text !== undefined){
                        text1 = linking.text;
                    }
                    link["text"] = text;
                    link["text1"] = text1;
                    console.log(text, text1);
                    link.to = linking.to;
                    if(links.includes(link) === false){
                        links.push(link);
                    }
                }else if(link.to === linking.to && link.from !== linking.from){
                    text = text1 = "1";
                    if(link.text !== undefined){
                        text = link.text;
                    }
                    if(linking.text !== undefined){
                        text1 = linking.text;
                    }
                    link["text"] = text;
                    link["text1"] = text1;
                    console.log(text, text1);
                    link.to = linking.from;
                    if(links.includes(link) === false){
                        links.push(link);
                    }
                }
            })
        }
    })

    return links;
}