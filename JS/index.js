let count = 0;
let countEl = document.querySelector("#countEl")
let previous = document.querySelector(".previous")


function incrementBtn (){
    count++
    countEl.innerHTML =`${count}`
}


function saveBtn(){
    previous.style.display = "block";
    let countScore = " " + count + " - "
    previous.textContent += countScore
    countEl.textContent = 0
}

