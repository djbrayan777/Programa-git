const imagenes = document.querySelector(".img-galeria")
const imageneslight = document.querySelector(".agregar-imagen")
const contendorlight = document.querySelector(".imagen-light")
const hamburger1 = document.querySelector(".hamburger");


imagenes.forEach(imagen =>{
    imagen.addEventListener("click", ()=>{
        aparecerImagen(imagen.getAttribute("src"))
    })
})


contenedorlight.addEventListener("click", (e)=>{
    if(e.target !== imageneslight){
    contenedorlight.classList.toggle("show")
    imageneslight.classList.toggle("showImage")
    hamburger1.style.opacity = "1"
    }
})


const aparecerImagen = ()=>{
    imageneslight.src = imagen;
    contenedorlight.classList.toggle("show")
    imageneslight.classList.toggle("showImage")
    hamburger1.style.opacity = "0"
}
