/*----------------chargement de la page-----------------------*/
const loade = document.querySelector(".load");
window.addEventListener("load",()=>{
   loade.classList.toggle("out-go")
})

/*----------------telechargement de l'image--------------------*/
const input = document.querySelector("#input");
const btn = document.querySelector(".btn");
const image = document.querySelector(".image");

btn.addEventListener("click", function (){
    input.click()
})

input.addEventListener("change", function (){
    const img = this.files[0]
    console.log(img)
    const reader = new FileReader()
    reader.onload = () =>{
        const all_img = image.querySelectorAll("img")
        all_img.forEach(element => element.remove());
        const result = reader.result
        const imgr = document.createElement("img");
        imgr.src = result
        image.appendChild(imgr)
    }
    reader.readAsDataURL(img)
})

/*------------------------partie filter-----------------------------*/
const img = document.querySelector(".image")
const blure = document.querySelector(".blur");
const brightness = document.querySelector(".brightness");
const contrast = document.querySelector(".contrast");
const grayscale = document.querySelector(".grayscale");
const hue_rotate= document.querySelector(".hue-rotate");
const invert = document.querySelector(".invert");
const opacity = document.querySelector(".opacity");
const saturate= document.querySelector(".saturate");
const sepia = document.querySelector(".sepia");

blure.addEventListener("input", function (){
    const valeur = this.value
    img.style.filter=`blur(${valeur}px)`
})
brightness.addEventListener("input", function (){
    const valeur = this.value
    img.style.filter=`brightness(${valeur})`
})
contrast.addEventListener("input", function (){
    const valeur = this.value
    img.style.filter=`blur(${valeur}px)`

    img.style.filter=`constrast(${valeur}%)`
})

grayscale.addEventListener("input", function (){
    const valeur = this.value
    img.style.filter=`grayscale(${valeur}%)`
})
hue_rotate.addEventListener("input", function (){
    const valeur = this.value
    img.style.filter=`hue-rotate(${valeur}deg)`
})
invert.addEventListener("input", function (){
    const valeur = this.value
    img.style.filter=`invert(${valeur}%)`
})
opacity.addEventListener("input", function (){
    const valeur = this.value
    img.style.filter=`opacity(${valeur}%)`
})
saturate.addEventListener("input", function (){
    const valeur = this.value
    img.style.filter=`saturate(${valeur}%)`
})
sepia.addEventListener("input", function (){
    const valeur = this.value
    img.style.filter=`sepia(${valeur}%)`
})

/*------------------bg-color--------------------------*/
const color = document.querySelector(".color");
color.addEventListener("input",(e)=>{
    const valeur = e.target.value
    console.log(valeur)
    img.style.border="4px solid white"
    document.body.style.backgroundColor= `${valeur}`
})
/*------------------text-color--------------------------*/
const text_color = document.querySelector(".txt_color");
console.log(text_color)
text_color.addEventListener("input",(e)=>{
    const valeur = e.target.value
    console.log(valeur)
    document.body.style.color=`${valeur}`
    document.body.style.textShadow=`0px 0px 5px ${valeur}`


})
