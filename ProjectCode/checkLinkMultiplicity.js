//Multiplizitäten prüfen
function checkLinkMultiplicity(text) {
    try{
        text = text.replaceAll(' ', '')
        text = text.toUpperCase()
        console.log(text)
        console.log("text ^^^^")
        if (parseInt(text) >= 1 || text === "M" || text === "N") {
            //Wenn Zahl für parseInt zu groß, dann evt Fehler werfen?!
            return true
        }
    }catch{

    }
    return
}
