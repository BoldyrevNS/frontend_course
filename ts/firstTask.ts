//document.addEventListener("DOMContentLoaded",showFirstTask)


type myType<T> = T extends []
  ? []
  : T extends [infer H, ...infer T]
  ? [...myType<H>, ...myType<T>]
  : [T];

 function showFirstTask(){
    type flatten = myType<[1, 2, [3, 4], [[[5]]]]>;
    let flat:flatten = [1,2,3,4,5];
    console.log(typeof flat);
 }


 showFirstTask();
