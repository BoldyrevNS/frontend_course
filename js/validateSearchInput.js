function  validateSearchInput(){
    let input = [...new Set(document.getElementsByClassName("search-bar").item(0).value.split(" "))];
    if(input.includes("#"))
        alert("Теги должны быть непустыми!");
}