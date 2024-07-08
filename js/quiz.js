document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn'); 
    const quizList = [
        { id: 0, answer: "ふれいしあ" ,img:"./assets/nazo1.jpg"},
        { id: 1, answer: "かろる",img:"./assets/nazo2.jpg" },
        { id: 2, answer: "ろざりー",img:"./assets/nazo3.jpg" },
        { id: 3, answer: "ぷりしら",img:"./assets/nazo4.jpg" },
        { id: 4, answer: "べる",img:"./assets/nazo5.jpg" },
        { id: 5, answer: "あいびー",img:"./assets/nazo6.jpg" },
    ];

    let currentIndex = 0;

    buttons.forEach((button,index) => {
        button.addEventListener('click', (e) => { 
            console.log('OK');
            console.log(index);

            currentIndex = index;

        const img = document.getElementById('quizImg');
        img.src = quizList[index]['img'];

        });
    });



const answerBtn = document.getElementById('answerBtn')

answerBtn.addEventListener('click',() => {
    const form = document.getElementById('answerinput')
        const feedBack = document.getElementById('correct')
        if(form.value === quizList[currentIndex]['answer']){
            feedBack.textContent = quizList[currentIndex]['answer'] + "正解です！"
        }else{
        feedBack.textContent = "不正解です！ひらがなで入力できてますか？"
        }
    });
});
