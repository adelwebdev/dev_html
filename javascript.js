// console.log("Affiche le nom de la personne")

const mm = 23;

// const myButton = document.querySelector("#img-js");
const myImg = document.getElementById("img-js")
const myButton = document.querySelector(".btn2")
const myInput = document.getElementById("btn")

// console.log(myButton, "l'element est pointé");
// console.log(myButton, "button pointé")
// console.log(myInput, "Votre input est pointé")

myImg.addEventListener("click", (e) => {
    console.log("l'image est clické"); 
    console.log(e)
})

myButton.addEventListener("click", (e) => {
    console.log("vous appuyez sur le button!");
    console.log(e)
    myImg.classList.toggle("hide")
    myButton.innerHTML = "c'est appuyé"
    // alert("Changement dans la fenètre")
})

const mouseM = document.querySelector(".mouseMove")
const horizontal = document.querySelector(".horizontal")
const vertical = document.querySelector(".vertical")



mouseM.addEventListener("mousemove", (e) => {
    console.log("souris bouge!")
    console.log(e);
    horizontal.innerHTML = e.x
    vertical.innerHTML = e.y
    mouseM.style.left = (e.x / window.innerWidth) * 100 + "%";

    if (e.x > 500) {
        document.body.style.filter = "blur(3px)"
    } else {
        document.body.style.filter = "none"
    }
})

myInput.addEventListener("input", (e) => {
    console.log("input")
    horizontal.innerHTML = e.target.value
})

