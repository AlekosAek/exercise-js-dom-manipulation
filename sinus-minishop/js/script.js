//**1.** Byt *namn* på första hoodien från *Ash* till *Potato*.//
const changeAsh = document.querySelector("main>.art-1>h3");
changeAsh.textContent = "Potato";


// 2. Byt namn på Home till Start.


const changeHome = document.querySelector("nav>a:nth-child(1)");
changeHome.textContent = "Start";

const changeFooterHome = document.querySelector("footer>section>article>a:nth-child(2)");
changeFooterHome.textContent = "Start";



//3. Byt namn på Contact till Mail Us.

const changeMail = document.querySelector("nav>a:nth-child(3)");
changeMail.textContent = "Email Us";

const changeFooterMail = document.querySelector("footer>section>article>a:nth-child(3)");
changeFooterMail.textContent = "Email Us";



//4. Byt ut informationen om Sinus Hoodie - Fire.

const bytHoodieInfo = document.querySelector(".art-2>p");
bytHoodieInfo.textContent = "Hello I have  for you all the information about Sinus Hoodie Fire";



//5. Byt bakgrundsfärg och text på en knapp.


const changeKnapp = document.querySelector(".art-2 > button");
changeKnapp.style.backgroundColor = "rgb(33,221,24)";
changeKnapp.style.color = 'rgb(255, 235, 81)';

// 6. Byt bakgrundsfärg på någon av produkterna.

const productColor = document.querySelector(".art-1>figure");
productColor.style.backgroundColor = "rgb(25,150,38)";


// 7. Byt ut adressen på sidan.


const changeAdress = document.querySelector('footer>section>article:nth-of-type(2) > p');
changeAdress.innerHTML = 'Sinus skateboards<br>Idholmsvägen 65<br>123 45, Skärholmen';




// 8. Byt färg på samtliga <p>.

document.querySelectorAll("p").forEach(pElem => {
    pElem.style.color = 'rgb(155, 198, 96)';

});



// 9. Ändra text på samtliga knappar till add to cart.

document.querySelectorAll("button").forEach(buttonElem => {
    buttonElem.style.color = ("yellow")
});



// 10.Lägg till classen active på menyalternativet home.
document.querySelector("header>nav>a").classList.add("active");


// 11. Ta bort classen logo på logotypen.
document.querySelector('img.logo').classList.remove('logo');


// 12. Lägg till ett nytt menyalternativ.




/* 13. Lägg till en ny produkt med följande info.
--------------------------------------------------------------------------
-- tagg    -    beskrivning                                             --
--------------------------------------------------------------------------
-- img     -                                          --
-- h2      -    Sinus Hoodie                                            --
-- h3      -    Forrest                                                 --
-- p       -	Lorem ipsum dolor sit amet                              --
--              consectetur adipisicing elit. Saepe, dolores.           --
--------------------------------------------------------------------------
*/



const productElem = document.createElement('article');
productElem.classList.add('art-4');

const productFig = document.createElement('figure');
const productImg = document.createElement('img');
productImg.src = 'img/hoodie-forrest.png';
productFig.appendChild(productImg);
const productHeading2 = document.createElement('h2');
productHeading2.textContent = 'Sinus Hoodie';

const productHeading3 = document.createElement('h3');
productHeading3.textContent = 'Forrest';

const productDesc = document.createElement('p');
productDesc.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.';

const productBuyButtton = document.createElement('button');
productBuyButtton.textContent = 'add to cart';

productElem.append(productFig, productHeading2, productHeading3, productDesc, productBuyButtton);
document.querySelector('main').appendChild(productElem);

document.querySelector('main').insertAdjacentHTML('beforeend',
    "<article class='art-4'>\
        <figure><img src='img/hoodie-forrest.png'></figure>\
        <h2>Sinus Hoodie</h2>\
        <h3>Forrest</h3>\
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>\
        <button>add to cart</button>\
    </article>"
);
// 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";


// 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".
