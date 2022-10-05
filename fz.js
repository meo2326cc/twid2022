let i = 1;
const check = document.querySelector('input');

check.addEventListener('click',function (e){

i+=1;

if (i%2 == 0){
 document.querySelector('.sitecontainer').style.fontSize = "22px" ;
}
else{
  document.querySelector('.sitecontainer').style.fontSize = "16px" ;
}

});