let item = Array.from(document.getElementsByClassName('item'));
let counter = Array.from(document.getElementsByClassName('counter'));
let plus = Array.from(document.getElementsByClassName('plus'));
let minus = Array.from(document.getElementsByClassName('minus'));
let totalPerProduct = Array.from(document.getElementsByClassName('total-per-product'));
let price = Array.from(document.getElementsByClassName('price'));
let like = Array.from(document.getElementsByClassName('like'));
let remove = document.getElementById('remove');
let total =document.getElementById('total');


function likecolor (element) {
    if (element.target.style.color=='black')
    element.target.style.color='red';
    else 
    element.target.style.color='black';
}

for (let i=0;i<item.length;i++){
    minus[i].addEventListener('click',function (){
        if (counter[i].innerHTML>0)
        counter[i].innerHTML--;
        calcul();

    })
    plus[i].addEventListener('click',function (){
        counter[i].innerHTML++;
        calcul();
        
    })
    remove.addEventListener('click',function (){
        counter[i].innerHTML=0;
        total.innerHTML=0;
        totalPerProduct[i].innerHTML=0;
    })
    like[i].addEventListener('click',likecolor);

}


function calcul () {
    let somme=0;
    for (let i=0;i<item.length;i++){
    totalPerProduct[i].innerHTML=Number(price[i].innerHTML)*Number(counter[i].innerHTML);
    somme+= totalPerProduct[i].innerHTML=Number(price[i].innerHTML)*Number(counter[i].innerHTML);
    }
    total.innerHTML=somme;
}
