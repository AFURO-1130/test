const quiz = [
    {
        question: "had better Vの意味は？",
        answers:[
            "Vをよりよくする",
            "Vをしたい",
            "Vした方がよい",
            "Vするはずだ"
        ],
        correct:"Vした方がよい"
    },
    {
        question: "on purposeは？",
        answers:[
            "強制的に",
            "故意に",
            "〜次第に",
            "〜の目的で"
        ],
        correct:"故意に"
    },
    {
        question: "Σ☜これは何でしょう？？？",
        answers:[
            "ゼット",
            "エム",
            "シグマ",
            "イプシロン"
        ],
        correct:"シグマ"
    },
];
   
const quizlength =quiz.length;
let quizIndex = 0;
let score =0;


const $button =document.getElementsByTagName("button");
const buttonlength = $button.length;

//クイズの問題文　選択肢の定義
const setupquiz = () => {
document.getElementById("js-question").textContent = quiz[quizIndex].question;
let buttonIndex = 0;
let buttonlength = $button.length;
while(buttonIndex < buttonlength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;

}}
setupquiz();

//正誤判定を行う
const clickhandler = (event) =>{
    if(quiz[quizIndex].correct === event.target.textContent){
        window.alert("正解！");
        score++;
    }else{
        window.alert("不正解！");
    }
    quizIndex++;
 
　 if(quizIndex < quizlength){
//まだ問題があるとこちら
　setupquiz();
    }else{
//もう問題がないとこちら
window.alert("終了!あなたの正解数は" + score + "/" + quizlength + "です");
    }

};

let handlerIndex = 0;
while(handlerIndex < buttonlength){
    $button[handlerIndex].addEventListener("click", (event) => {
        clickhandler(event);
    });
    handlerIndex++;
}


