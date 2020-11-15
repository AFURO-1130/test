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
        question: "９９＋１は？",
        answers:[
            "１００",
            "２００",
            "３００",
            "４００"
        ],
        correct:"１００"
    },
    {
        question: "１＋６は？",
        answers:[
            "2",
            "3",
            "4",
            "７"
        ],
        correct:"７"
    },
];
   
const quizlength =quiz.length;
let quizIndex = 0;


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
    }else{
        window.alert("不正解！");
    }
    quizIndex++;
 
　 if(quizIndex < quizlength){
//まだ問題があるとこちら
　setupquiz();
    }else{
//もう問題がないとこちら
window.alert("終了");
    }

};

let handlerIndex = 0;
while(handlerIndex < buttonlength){
    $button[handlerIndex].addEventListener("click", (event) => {
        clickhandler(event);
    });
    handlerIndex++;
}


