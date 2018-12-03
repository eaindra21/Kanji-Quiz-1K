//THE AREA WHERE THE KANJI GOES
const kanji = document.querySelector('.kanji');


const kanjiObject = {
    jin: "人",
    eki:"駅",
    shin:"新",
    den:"電",
    uchi:"家"
    sha:"車"
    ai:"愛"
}

const kanjiValues = Object.values(kanjiObject);
const kanjiKeys = Object.keys(kanjiObject);

let counter = 0;


let nowKanji = kanjiValues[counter];
let nowRomaji = kanjiKeys[counter];



check.addEventListener('click',function(){
  if(input.value == kanjiValues.length){
    displayCorrect();
    sayCorrect();
  }else{
    dispalyIncorrect();
  }
});
function sayCorrect(){
    if(counter <= 3){
        kanji.innerHTML = 'Correct!'
        setTimeout(function(){
            kanji.innerHTML = nowKanji;
        },1000);
    }else{
        kanji.innerHTML = "Good Luck with JLPT N1!"
    }
}
function displayCorrect(){
    if(counter <= kanjiValues.length){
    counter++
    nowKanji = kanjiValues[counter]
    nowRomaji = kanjiKeys[counter]
    kanji.innerHTML = nowKanji;
    input.value = '';
    }else{
        kanji.innerHTML = "Game Over!";
    }
    
}
function dispalyIncorrect(){
    kanji.innerHTML = "WRONG!"
    kanji.style.color = "red";
    input.value = '';
    setTimeout(function(){
        kanji.style.color = "black"
        kanji.innerHTML = nowKanji;
    },1000);
}