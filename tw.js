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
    com.innerHTML = "<div><h3> <span class='baselinedec'>高雄 </span> </h3></div>" +
    " <a href='https://www.facebook.com/fishkai.lin' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/kao.png);'></div><div><h4>時代力量：林于凱</h4><p>高雄市議員（三民區）</p></div></div></a>";
    });

chiayi.addEventListener("click", function(){
com.innerHTML =
"<div><h3> <span class='baselinedec'>嘉義</span></h3></div>" +
 "<a href='https://www.facebook.com/profile.php?id=100000093595146' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/cha.jpg);'></div><div><h4>賴芳徵</h4><p>嘉義水上鄉鄉長</p></div></div></a>" +
 "<a href='https://www.facebook.com/anghuaniau' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/cha2.jpg);'></div><div><h4>基進黨：翁渙瑤</h4><p>嘉義市東區市議員</p></div></div></a>";
});

changhua.addEventListener("click", function(){
    com.innerHTML = 
    "<div><h3> <span class='baselinedec'>彰化</span> </h3></div>" +
    "<a href='https://www.facebook.com/weitawu.npp' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/changhua.png);'></div><div><h4>時代力量：吳韋達</h4><p>彰化縣議員（彰化、花壇、芬園）</p></div></div></a>";
});

hsinchu.addEventListener("click", function(){
    com.innerHTML =
    "<div><h3> <span class='baselinedec'>新竹</span> </h3></div>" +
     "<a href='https://www.facebook.com/yt.lien.lawyer' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/hsin.png);'></div><div><h4>時代力量：連郁婷</h4><p>新竹縣議員（竹北）</p></div></div></a>" +
     "<a href='https://www.facebook.com/haola.npp' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/hsin2.png);'></div><div><h4>時代力量：彭致豪</h4><p>新竹縣第八選區（竹東鎮、五峰鄉）縣議員</p></div></div></a>";
    });

taichung.addEventListener("click", function(){
    com.innerHTML =
    "<div><h3> <span class='baselinedec'>台中</span> </h3></div>" +
     "<a href='https://www.facebook.com/placemakingFU' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/chung.jpg);'></div><div><h4>時代力量：傅智恒</h4><p>台中市第四選區（后里豐原）</p></div></div></a>" +
     "<a href='https://www.facebook.com/SiaoMeiHsu' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/chung2.png);'></div><div><h4>時代力量：徐小媚</h4><p>台中市議員（選區：東南）</p></div></div></a>" +
     "<a href='https://www.facebook.com/jaych3n9' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/chung3.png);'></div><div><h4>時代力量：鄭勁節</h4><p>台中市議員（選區：潭子、大雅、神岡）</p></div></div></a>" + 
     "<a href='https://www.facebook.com/taichungyun' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/chung4.png);'></div><div><h4>時代力量：吳佩芸</h4><p>台中市議員（選區：南屯）</p></div></div></a>" + 
     "<a href='https://www.facebook.com/MingYen.DaliWufeng' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/chung5.png);'></div><div><h4>時代力量：鄒明諺</h4><p>台中市議員（ 選區：大里、霧峰) </p></div></div></a>";});

newtaipei.addEventListener("click", function(){
        com.innerHTML = 
        "<div><h3> <span class='baselinedec'>新北</span> </h3></div>" +
        "<a href='https://www.facebook.com/ChunHungTungChinup' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/ntpc.jpg);'></div><div><h4>基進黨：董俊宏</h4><p>新北市第二選區（五股、泰山、林口) 市議員</p></div></div></a>";
    });

taipei.addEventListener("click", function(){
        com.innerHTML = 
        "<div><h3> <span class='baselinedec'>台北</span> </h3></div>" +
        "<a href='https://www.facebook.com/yingmenglin' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/tp.jpg);'></div><div><h4>時代力量：林穎孟</h4><p>台北市議員（大安、文山）</p></div></div></a>" +
        "<a href='https://www.facebook.com/freeTAIPEI' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/tp2.jpg);'></div><div><h4>時代力量：劉仕傑</h4><p>台北市議員（士林、北投）</p></div></div></a>";
    });

keelung.addEventListener("click", function(){
        com.innerHTML = 
        "<div><h3><span class='baselinedec'>基隆</span> </h3></div>" +
        "<a href='https://www.facebook.com/WeiChung.Keelung' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/kee.jpg);'></div><div><h4>時代力量：陳薇仲</h4><p>基隆市長</p></div></div></a>";
    });

yilan.addEventListener("click", function(){
        com.innerHTML = 
        "<div><h3> <span class='baselinedec'>宜蘭</span> </h3></div>" +
        "<a href='https://www.facebook.com/tanhantik.yilan' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/yi.jpg);'></div><div><h4>基進黨：陳漢澤</h4><p>宜蘭議員（選區：宜蘭市）</p></div></div></a>"+
        "<a href='https://www.facebook.com/ah0802150' target='_blank'><div class='twstyle'><div class='twpic' style='background-image:url(img/yi2.jpg);'></div><div><h4>基進黨：林意評</h4><p>宜蘭議員(選區: 羅東鎮）</p></div></div></a>";
    });