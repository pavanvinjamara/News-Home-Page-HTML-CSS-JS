const crossBtn = document.getElementById('crossham')
const hamBtn= document.getElementById('imageham')
const hidden=document.querySelector(".navbar")

hamBtn.addEventListener("click", () => {
    hidden.classList.remove("Hidden1")
})

crossBtn.addEventListener("click", () => {
    hidden.classList.add("Hidden1")
    
})