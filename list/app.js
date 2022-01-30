let nameHTML = document.getElementById("name-list")
let addBtn = document.getElementById("add-btn")
let clearBtn = document.getElementById("clear-btn")



const updateCountDom = () => {
    nameHTML.innerHTML = "Panuvit Chantara"
}


addBtn.addEventListener("click", () => {
    updateCountDom();
})

clearBtn.addEventListener("click", () => {
    nameHTML.innerHTML = "-"
})