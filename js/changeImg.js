function changeImg(event){
    const imgId = event.target.id;
    let imgBg = document.getElementsByClassName("gallery-illust-container").item(imgId);
    let img = document.getElementById(imgId);
    imgBg.style.backgroundColor = "#0a53be";
    setTimeout(()=>imgBg.style.backgroundColor = "#06357a", 400);
    let height = 200;
    let interval = setInterval(()=>{height-=2; img.style.height = height+"px";}, 10);
    setTimeout(()=>{
        clearInterval(interval);
        interval = setInterval(()=>{height+=2; img.style.height = height+"px";}, 10);
        setTimeout(()=>{
            clearInterval(interval);
            img.style.height = "200px";
            img.src = "https://http.cat/" + (400 + Math.floor(Math.random() * 51));},200);
        }, 200);

}