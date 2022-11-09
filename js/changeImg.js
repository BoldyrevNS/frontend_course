function changeImg(event){
    const imgId = event.target.id;
    let imgBg = document.getElementsByClassName("gallery-illust-container").item(imgId);
    let img = document.getElementById(imgId);
    imgBg.style.backgroundColor = "#0a53be";
    setTimeout(function (){imgBg.style.backgroundColor = "#06357a";}, 200);
    img.style.height = "190px";
    setTimeout(function (){img.style.height = "200px";}, 200);
}