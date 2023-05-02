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

var votreMsg = document.querySelector(".result")

myInput.addEventListener("input", (e) => {
    console.log("input")
    horizontal.innerHTML = e.target.value
    votreMsg.innerHTML = e.target.value    
})

const themeContainer = document.querySelectorAll(".class")
const dark = document.getElementById("dark")
const orange = document.getElementById("orange")
const salmon = document.getElementById("salmon")

console.log(themeContainer)

themeContainer.forEach((item) => {
    item.addEventListener("click", (e) => {
        console.log(e.target.id)
        document.body.classList.remove("darkTheme", "orangeTheme", "salmonTheme")

        switch(e.target.id){
            case "dark": 
            document.body.classList.add("darkTheme");
            break;
            case "orange": 
            document.body.classList.add("orangeTheme");
            break;
            case "salmon": 
            document.body.classList.add("salmonTheme");
            break;
            null;
        }
    })
})

const array1 = ['paris', 'alger', 22, true];
for (i=0; i < array1.length; i++){
    console.log(array1.length)
    console.log(array1[i])
    console.log(typeof(array1[i]))
}



