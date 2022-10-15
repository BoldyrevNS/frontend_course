class Hero{
    constructor(){
        this.name = ''
        this.level = 1
        this.params = {
            strength: 1,
            dexterity: 1,
            physique: 1,
            intelligence: 1,
            wisdom: 1,
            charisma: 1 
        }
        this.description = ''
    }
}

let HeroSave=new Hero();
HeroSave.name ='Доктор Ливси';
HeroSave.level =5;
HeroSave.params = {
    strength: 16,
    dexterity: 12,
    physique: 18,
    intelligence: 14,
    wisdom: 10,
    charisma: 20 
};
HeroSave.description = 'Очень весёлый и интересный человек. Характер общительный. Гигачад';



function checkParams(){
    let flag = true;
    let HeroParam = new Hero();
    let name = document.querySelector('.MainList .TopPage .Name .NameField');
    if(name.value.length === 0){
        alert("Окей, если ты не хочешь называть своего персонажа, то я назову его косипошой");
        HeroParam.name = 'Косипоша';
    }
    else{
        HeroParam.name = name.value;
    }

    let level = Number(document.querySelector('.MainList .TopPage .Name #level').value);
    if(isNaN(level)){
        flag = false;
        alert("И как ты представляешь себе такой уровень? Пиши цифрами");
    }
    else{
        if(level < 1){
            flag = false;
            alert("Я понимаю, что развитие назад это тоже развитие, но уровень не может быть меньше 1");
        }
        else if(level >20){
            flag = false;
            alert("Быть Богом это круто, но к сожалению вы обычный сверхчеловек так что ваш максимальный уровень 20");
        }
        else{
            HeroParam.level = level;
        }
    }

    let charecteristic = document.querySelectorAll('.Parametrs .Param')
    for(let i = 0; i< charecteristic.length; i++){
        let num = Number(charecteristic[i].querySelector('textarea').value);
        if (num >= 1 && num <= 20){
            HeroParam.params[charecteristic[i].id] = num;
        }
        else{
            flag = false;
            alert("Характеристика установлена неверно. Допускаемые параметры: [1...20]");
            break;
        }
    }
    let description = document.querySelector('.CenterLayout div textarea');
    if (description.value === "")
    {
        flag = false;
        alert("Можно хоть немного описание, позязя?");
    }
    else{
        HeroParam.description = description.value;
    }

    if (flag){
        document.querySelector('.MainList .TopPage .Name .NameField').value = HeroParam.name;
        document.querySelector('.MainList .TopPage .Name #level').value = HeroParam.level;

        switch(HeroParam.level){
            case 1:
                document.querySelector('.Count').innerHTML = '2';
                break;
            case 2:
                document.querySelector('.Count').innerHTML = '2';
                break;
            case 3:
                document.querySelector('.Count').innerHTML = '2';
                break;
            case 4:
                document.querySelector('.Count').innerHTML = '2';
                break;
            case 5:
                document.querySelector('.Count').innerHTML = '3';
                break;
            case 6:
                document.querySelector('.Count').innerHTML = '3';
                break;
            case 7:
                document.querySelector('.Count').innerHTML = '3';
                break;
            case 8:
                document.querySelector('.Count').innerHTML = '3';
                break;
            case 9:
                document.querySelector('.Count').innerHTML = '3';
                break;
            case 10:
                document.querySelector('.Count').innerHTML = '4';
                break;
            case 11:
                document.querySelector('.Count').innerHTML = '4';
                break;
            case 12:
                document.querySelector('.Count').innerHTML = '4';
                break;
            case 13:
                document.querySelector('.Count').innerHTML = '5';
                break;
            case 14:
                document.querySelector('.Count').innerHTML = '5';
                break;
            case 15:
                document.querySelector('.Count').innerHTML = '5';
                break;
            case 16:
                document.querySelector('.Count').innerHTML = '5';
                break;
            case 17:
                document.querySelector('.Count').innerHTML = '6';
                break;
            case 18:
                document.querySelector('.Count').innerHTML = '6';
                break;
            case 19:
                document.querySelector('.Count').innerHTML = '6';
                break;
            case 20:
                document.querySelector('.Count').innerHTML = '6'; 
        }

        for(let i = 0; i< charecteristic.length; i++){
            document.querySelectorAll('.Parametrs .Param')[i].querySelector('textarea').value = HeroParam.params[charecteristic[i].id];
            switch(HeroParam.params[charecteristic[i].id]){
            case 1:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '-5';
                break;
            case 2:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '-4';
                break;
            case 3:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '-4';
                break;
            case 4:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '-3';
                break;
            case 5:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '-3';
                break;
            case 6:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '-2';
                break;
            case 7:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '-2';
                break;
            case 8:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '-1';
                break;
            case 9:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '-1';
                break;
            case 10:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '0';
                break;
            case 11:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '0';
                break;
            case 12:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '+1';
                break;
            case 13:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '+1';
                break;
            case 14:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '+2';
                break;
            case 15:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '+2';
                break;
            case 16:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '+3';
                break;
            case 17:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '+3';
                break;
            case 18:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '+4';
                break;
            case 19:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '+4';
                break;
            case 20:
                document.querySelectorAll('.Parametrs .Param')[i].querySelector('.Bonus p').textContent = '+5';
                break;    
            }
        }

        document.querySelector('.CenterLayout div textarea').value = HeroParam.description;
        HeroSave = HeroParam;
    }

    else{
        document.querySelector('.MainList .TopPage .Name .NameField').value = HeroSave.name;
        document.querySelector('.MainList .TopPage .Name #level').value = HeroSave.level;
        for(let i = 0; i< charecteristic.length; i++){
            document.querySelectorAll('.Parametrs .Param')[i].querySelector('textarea').value = HeroSave.params[charecteristic[i].id];
        }
        document.querySelector('.CenterLayout div textarea').value = HeroSave.description;

    }


}