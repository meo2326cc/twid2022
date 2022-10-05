let kaohsiung = document.querySelector('#kaohsiung');
//let tainan = document.querySelector('#tainan');
let chiayi = document.querySelector('#chiayi');
let changhua = document.querySelector('#changhua');
let taichung = document.querySelector('#taichung');
let hsinchu = document.querySelector('#hsinchu');
let newtaipei = document.querySelector('#newtaipei');
let keelung = document.querySelector('#keelung');
let taipei = document.querySelector('#taipei');
let yilan = document.querySelector('#yilan');

let com = document.querySelector('#com');

//

kaohsiung.addEventListener("click", function(){
    com.innerHTML = "<div><h3> &nbsp;高雄</h3></div>" +
    " <div class='twstyle'><div class='twpic' style='background-image:url(img/kao.png);'></div><div><h4>時代力量：林于凱</h4><p>高雄市議員（三民區）</p></div></div>";
    });

chiayi.addEventListener("click", function(){
com.innerHTML =
"<div><h3> &nbsp;嘉義</h3></div>" +
 "<div class='twstyle'><div class='twpic' style='background-image:url(img/cha.jpeg);'></div><div><h4>賴芳徵</h4><p>嘉義水上鄉鄉長</p></div></div>" +
 "<div class='twstyle'><div class='twpic' style='background-image:url(img/cha2.png);'></div><div><h4>基進黨：翁渙瑤</h4><p>嘉義市東區市議員</p></div></div>";
});

changhua.addEventListener("click", function(){
    com.innerHTML = 
    "<div><h3> &nbsp;彰化</h3></div>" +
    "<div class='twstyle'><div class='twpic' style='background-image:url(img/changhua.png);'></div><div><h4>時代力量：吳韋達</h4><p>彰化縣議員（彰化、花壇、芬園）</p></div></div>";
});

hsinchu.addEventListener("click", function(){
    com.innerHTML =
    "<div><h3> &nbsp;新竹</h3></div>" +
     "<div class='twstyle'><div class='twpic' style='background-image:url(img/hsin.png);'></div><div><h4>時代力量：連郁婷</h4><p>新竹縣議員（竹北）</p></div></div>" +
     "<div class='twstyle'><div class='twpic' style='background-image:url(img/hsin2.png);'></div><div><h4>時代力量：彭致豪</h4><p>新竹縣第八選區（竹東鎮、五峰鄉）縣議員</p></div></div>";
    });

taichung.addEventListener("click", function(){
    com.innerHTML =
    "<div><h3> &nbsp;台中</h3></div>" +
     "<div class='twstyle'><div class='twpic' style='background-image:url(img/chung.png);'></div><div><h4>時代力量：傅智恒</h4><p>台中市第四選區（后里豐原）</p></div></div>" +
     "<div class='twstyle'><div class='twpic' style='background-image:url(img/chung2.png);'></div><div><h4>時代力量：徐小媚</h4><p>台中市議員（選區：東南）</p></div></div>" +
     "<div class='twstyle'><div class='twpic' style='background-image:url(img/chung3.png);'></div><div><h4>時代力量：鄭勁節</h4><p>台中市議員（選區：潭子、大雅、神岡）</p></div></div>" + 
     "<div class='twstyle'><div class='twpic' style='background-image:url(img/chung4.png);'></div><div><h4>時代力量：吳佩芸</h4><p>台中市議員（選區：南屯）</p></div></div>" + 
     "<div class='twstyle'><div class='twpic' style='background-image:url(img/chung5.png);'></div><div><h4>時代力量：鄒明諺</h4><p>台中市議員（ 選區：大里、霧峰) </p></div></div>";});

newtaipei.addEventListener("click", function(){
        com.innerHTML = 
        "<div><h3> &nbsp;新北</h3></div>" +
        "<div class='twstyle'><div class='twpic' style='background-image:url(img/ntpc.png);'></div><div><h4>基進黨：董俊宏</h4><p>新北市第二選區（五股、泰山、林口) 市議員</p></div></div>";
    });

taipei.addEventListener("click", function(){
        com.innerHTML = 
        "<div><h3> &nbsp;台北</h3></div>" +
        "<div class='twstyle'><div class='twpic' style='background-image:url(img/tp.png);'></div><div><h4>時代力量：林穎孟</h4><p>台北市議員（大安、文山）</p></div></div>" +
        "<div class='twstyle'><div class='twpic' style='background-image:url(img/tp2.png);'></div><div><h4>時代力量：劉仕傑</h4><p>台北市議員（士林、北投）</p></div></div>";
    });

keelung.addEventListener("click", function(){
        com.innerHTML = 
        "<div><h3> &nbsp;基隆</h3></div>" +
        "<div class='twstyle'><div class='twpic' style='background-image:url(img/kee.png);'></div><div><h4>時代力量：陳薇仲</h4><p>基隆市長</p></div></div>";
    });

yilan.addEventListener("click", function(){
        com.innerHTML = 
        "<div><h3> &nbsp;宜蘭</h3></div>" +
        "<div class='twstyle'><div class='twpic' style='background-image:url(img/yi.png);'></div><div><h4>基進黨：陳漢澤</h4><p>宜蘭議員（選區：宜蘭市）</p></div></div>"+
        "<div class='twstyle'><div class='twpic' style='background-image:url(img/yi2.png);'></div><div><h4>基進黨：林意評</h4><p>宜蘭議員(選區: 羅東鎮）</p></div></div>";
    });