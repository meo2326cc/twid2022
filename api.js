axios.get('https://raw.githubusercontent.com/meo2326cc/data/master/.mockend.json')
.then(res => {
let va1 = res.data;
va1.data.forEach(getContent => {
let s = document.createElement('DIV')
let textNode = document.createTextNode(getContent.title);
s.appendChild(textNode);
s.id = getContent.id;
//s.setAttribute("id", getContent.id);
document.querySelector('.twidnews').appendChild(s).className = "c1"
//setAttribute("class", "c1 txt");
});


let newscom = document.querySelectorAll('.c1');
let outerboard = document.querySelector('.outerboard');
let boardinner = document.querySelector('.board');

for (let j=0;j<newscom.length;j++){
    newscom[j].addEventListener('click',function (){

        //  標題
        let boardtitle = document.createElement('H4');
        boardtitle.appendChild(document.createTextNode(va1.data[j].title));
        boardinner.appendChild(boardtitle);

        boardinner.appendChild(document.createElement('HR'));
        // 跑content分段
        for (k=0; k<va1.data[j].content.length; k++){
            let innertext = document.createElement('P');
            innertext.appendChild(document.createTextNode(va1.data[j].content[k]));
            boardinner.appendChild(innertext);
            let brk = document.createElement('BR');
            boardinner.appendChild(brk);
            outerboard.setAttribute("class","outerboard");

        
        };

        //va1.data[j].content;
    });
}

let resetboard = document.querySelector('.closebtn'); //關閉按鈕
resetboard.addEventListener('click' , function(){
    boardinner.innerHTML = '';
    outerboard.className = 'board hide';
});



})
.catch( err => {
console.log(err);
})





//addEventListener('click', function() {console.log('ok')});
