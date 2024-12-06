const rastgeleSayi= Math.ceil(Math.random()*99)
const again = document.querySelector(".again");
const guess = document.querySelector(".guess");
const check = document.querySelector(".check");
const message = document.querySelector(".msg");
const number = document.querySelector(".number");
const life = document.querySelector(".life");
console.log("rastgeleSayi:", rastgeleSayi);


let hak=7;
let topScore=0;

check.addEventListener("click",()=>{
    const tahmin =guess.value;

    if(!tahmin){
        message.textContent = "Lütfen bir tahmin giriniz";
    }
    else if(tahmin<0 || tahmin>100){
        message.textContent="1-100 arasında bir değer giriniz";
    }
    else if(tahmin ==rastgeleSayi){
        message.textContent= "🌻Tebrikler Bildiniz...🌻";
        document.querySelector(".number").textContent = rastgeleSayi;
        number.style.backgroundColor="green";
        guess.style.backgroundColor="green";
        message.style.color="green"
        life.style.color="green"
        document.querySelector(".score").style.color="green"
        check.disabled=true;
    

        if (hak>topScore){
        topScore=hak;
        document.querySelector(".topScore").textContent=topScore
        }
    }
    else{
        if(hak>1){
            hak--;
            life.textContent=hak;

            tahmin > rastgeleSayi
        ? (message.textContent = "Azalt")
        : (message.textContent = "Arttır");
        }
        else{
            number.style.backgroundColor="red";
        guess.style.backgroundColor="red";
        message.style.color="red"
        life.style.color="red"
        document.querySelector(".score").style.color="red"
            message.textContent="Oyunu Kaybetiniz"
            check.disabled=true
            life.textContent=0
        }
    }
})

again.addEventListener("click",()=>{
    const rastgeleSayi = Math.ceil(Math.random() * 99);
    message.textContent="Oyun yeni oyuncu için hazırlanıyor."
    document.querySelector(".number").textContent="?";
    check.disabled=false;
    life.textContent=10
    hak=7
    guess.value=""

})