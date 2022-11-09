// Напишите функцию, которая находит самую длинную строку общего
// префикса среди массива строк.
function starting(array: string|any[]) 
{
    if (!Array.isArray(array) || array.length === 0) 
        return "";
    // общий префикс, длина первого слова, длина массива
    let s = "",
        count1 = array[0].length,
        count2 = array.length;
    for (let i = 0; i < count1; ++i) 
    {
        // флаг совпадения буквы в словах, i-ый элемент первого слова
        let equals = true,
            c = array[0][i];
        // сравнение i элементов слов массива
        for (let j = 1; j < count2; ++j) 
        {
            if (c != array[j][i]) 
            {
                equals = false;
                break;
            }
        }
        if (equals)
            s += c;
        else
            break;
    }
    return s;
}

let array = ["flower", "flow", "flight"];
console.log(starting(array));
 
array =  ["dog","racecar","car"];
console.log(starting(array));
