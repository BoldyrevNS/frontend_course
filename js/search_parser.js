function parseSearchField(){
    var fieldValue = document.getElementsByClassName("search-bar").item(0).value;
    var parsed = [];
    if(fieldValue.length!=0) {
        var wordsCount = 1;
        for (var i = 0; i < fieldValue.length; i++) {
            if (fieldValue[i] == ' ')
                wordsCount++;
        }
        for (var i = 0; i < wordsCount; i++) {
            parsed.push(fieldValue.split(" ")[i]);
        }
    }
    //console.log(new Set(parsed));
    return new Set(parsed);
}