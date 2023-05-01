let rr = "une lettre";

const cst = document.querySelector("h1");
cst.addEventListener('click', (e) => {
    console.log('YESSSSS');
    console.log(e);
})

const cst2 = document.querySelector("h1");
cst2.addEventListener('mousemove', (e) => {
    console.log("ca bouge les amis!")
    console.log(e);
})

h1.classList.remove(104);
