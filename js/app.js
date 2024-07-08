

document.addEventListener('DOMContentLoaded', () => {
    
    
    const buttons = document.querySelectorAll('.btn'); 

    const hint0 = ["アイテム名覚えていますか？","アイテムの個数に注目","1文字目は「ふ」"];
    const hint1 = ["４色は何を表しているだろう？","Nはレアリティ","モニカ、シャーロット、シズ、ガルム"];
    const hint2 = ["右下の「ど」はなんだろう","最初は右に進む","最初に曲がる時の文字は「リ」","下の「○」に色がついている！これを頼りに順番に当てはめると・・"];
    const hint3 = ["キャラクターはとある法則で繋がってる","しりとり？","解答欄の下の矢印も気になる・・・"];
    const hint4 = ["この配置に見覚えある？","上位ギルド所属の方はお馴染み","上はグラベンスティン、右はウィスケルケー,,,"];
    const hint5 = ["#で囲まれた数字見覚えある？","「#数字#」はチャットに打ち込むととけねこスタンプの感情を表してくれる記号！","感情が4つ並んでいることに気づくと、とある4文字熟語が連想される","緑の丸は反対を向いている・・・"];

    const quizList = [
        
        {   id: 0, 
            answer: "ふれいしあ",
            src:"https://docs.google.com/forms/d/e/1FAIpQLSf2FVI6X03VW8DfxAAYUGgmcLyagyNWLFgeLamREgTG6EKngg/viewform?embedded=true",
            hint:hint0,
            img:"./assets/nazo1"
        },{ id: 1, 
            answer: "かろる",
            src:"https://docs.google.com/forms/d/e/1FAIpQLSetdY0-WXWiU935T7sa9570tHNfIKyZ98973v-R2pjxpDDduQ/viewform?embedded=true",
            hint:hint1,
            img:"./assets/nazo2"
        },{ id: 2, 
            answer: "ろざりー",
            src:"https://docs.google.com/forms/d/e/1FAIpQLSciB9li1luoz6ywYT1LySv9wmjY4vMp5L_VpcoiLJjH9WOksQ/viewform?embedded=true",
            hint:hint2,
            img:"./assets/nazo3"
        },{ id: 3, 
            answer: "ぷりしら",
            src:"https://docs.google.com/forms/d/e/1FAIpQLSdJ9HRjR06zX0203V6T59sv1sgKGIILlZcfraURPs6BZOMFew/viewform?embedded=true",
            hint:hint3,
            img:"./assets/nazo4"
        },{ id: 4, 
            answer: "べる",
            src:"https://docs.google.com/forms/d/e/1FAIpQLSdziy5_jqLEqeC9jrxsKZBS5yJuNgjGXM4Bdy-W0HpWKmQigA/viewform?embedded=true",
            hint:hint4,
            img:"./assets/nazo5"
        },{ id: 5, 
            answer: "あいびー",
            src:"https://docs.google.com/forms/d/e/1FAIpQLScsPmYyllk0dZfRaTYK4-aIjUlR82Uic-L2EWpTBZekcr_uWg/viewform?embedded=true",
            hint:hint5,
            img:"./assets/nazo6"
        },
    ];


    let currentIndex = 0;

    buttons.forEach((button,index) => {
        button.addEventListener('click', (e) => { 
            console.log('OK');
            console.log(index);

                    hintBox.innerHTML = ""
                    hintText.innerHTML = ""

    for(i = 1;i <= quizList[index].hint.length;++i){
        const hintBox = document.getElementById('hintBox');
        const hintBtn = document.createElement('button')
        hintBtn.innerHTML = "ヒント" + i;
        hintBox.appendChild(hintBtn);
    }
        const gForm = document.getElementById('gForm');
        gForm.src = quizList[index]['src'];

        const hintButtons = hintBox.querySelectorAll('button')
        hintButtons.forEach((buttonHint,no) => {
            buttonHint.addEventListener('click',(e) => {
                console.log("OK");
                console.log(no);
                const hintText = document.getElementById('hintText');
                hintText.textContent = quizList[index].hint[no];
            });
        });



        })});
    });
