// document.getElementById("count-el").innerText = 5;

// camelCase variable Style
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
// console.log(countEl)


let count = 0;

function increment(){
    
    count += 1;
    countEl.innerText = count;
}
function save(){
    if (count !=0){
        let countStr = count + " - "
        saveEl.textContent += countStr;
        count = 0;
        countEl.textContent = count;
    }
}