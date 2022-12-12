
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    total += 1
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    totalEl.textContent = total
    count = 0
}

function clearall() {
    saveEl.textContent = "- "
    countEl.textContent = 0
    totalEl.textContent = 0
    total = 0
    count = 0
}