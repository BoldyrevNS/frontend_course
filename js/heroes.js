
let HeroSave = {
    name: 'Доктор Ливси',
    level: 5,
    params:{
        strength: 16,
        dexterity: 12,
        physique: 18,
        intelligence: 14,
        wisdom: 10,
        charisma: 20 
    },
    description: 'Очень весёлый и интересный человек. Характер общительный. Гигачад '
}

//let HeroCopy = HeroParam;



function checkParams(){
    let HeroParam = HeroSave;
    if (isValid(HeroParam)){
        showInDocument(HeroParam);
        HeroSave = HeroParam;
    }
    else{
        showInDocument(HeroSave)
    }
}

function isValid(HeroParam){
    let isValid = true;
    let name = document.querySelector('.MainList .TopPage .Name .NameField');
    if(name.value.length === 0){
        alert("Окей, если ты не хочешь называть своего персонажа, то я назову его косипошой");
        HeroParam.name = 'Косипоша';
    }
    else{
        HeroParam.name = name.value;
    }

    let level = Number(document.querySelector('.MainList .TopPage .Name #level').value);
    if (checkLevel(level))
        HeroParam.level = level;
    else 
        isValid = false;

    let charecteristic = document.querySelectorAll('.Parametrs .Param')
    for(let i = 0; i< charecteristic.length; i++){
        let num = Number(charecteristic[i].querySelector('textarea').value);
        if (num >= 1 && num <= 20)
            HeroParam.params[charecteristic[i].id] = num;
        else{
            isValid = false;
            alert("Характеристика установлена неверно. Допускаемые параметры: [1...20]");
            break;
        }
    }

    let description = document.querySelector('.CenterLayout div textarea');
    if (description.value === "")
    {
        isValid = false;
        alert("Можно хоть немного описание, позязя?");
    }
    else{
        HeroParam.description = description.value;
    }
    return isValid;

}

function showInDocument(Hero){
    document.querySelector('.MainList .TopPage .Name .NameField').value = Hero.name;
    document.querySelector('.MainList .TopPage .Name #level').value = Hero.level;
    document.querySelector('.Count').innerHTML = getLevelBonus(Hero.level); 
    for(let i = 0; i< charecteristic.length; i++){
        document.querySelectorAll('.Parametrs .Param')[i].querySelector('textarea').value = Hero.params[charecteristic[i].id];
        document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = getParamBonus(Hero.params[charecteristic[i].id])
    }
    document.querySelector('.CenterLayout div textarea').value = Hero.description;

        
}

function checkLevel(level){
    if (level >= 1 && level <= 20){
        return true;
    }
    else{
        if(isNaN(level))
            alert("И как ты представляешь себе такой уровень? Пиши цифрами"); 
        if(level < 1)
            alert("Я понимаю, что развитие назад это тоже развитие, но уровень не может быть меньше 1"); 
        if(level >20)
            alert("Быть Богом это круто, но к сожалению вы обычный сверхчеловек так что ваш максимальный уровень 20");
        return false;
    }
}

function getLevelBonus(num){
    return (Math.floor((num-1)/4) + 2).toString();
}

function getParamBonus(num){
    let bonusString = "";
    let buff = Math.floor(num/2) - 5;
    if (buff>0)
    {
        bonusString += "+";
    }
    bonusString += buff.toString();
    return bonusString;
}