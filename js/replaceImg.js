function replaceImg(event){
    const imgId = event.target.id;
    let requestURL = "https://http.cat/" + Math.floor(Math.random()*600);
        //document.getElementsByClassName("gallery-illust-img").item(imgId).setAttribute("src",requestURL);



    let request = new XMLHttpRequest();
    request.open('GET', requestURL, true);
    request.responseType = 'blob';
    request.send();
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.onload  = function(){
        let newImg = this.response;
        document.getElementById(imgId).src = URL.createObjectURL(this.response);
        //document.getElementsByClassName("gallery-illust-img").item(imgId).setAttribute("src", newImg.src);
    }
}