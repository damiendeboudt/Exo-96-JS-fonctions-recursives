
let a = 2

function recurs() {
    console.log(a)
    let div = document.createElement("div")
    div.innerHTML += "a vaux --->" + a
    document.body.appendChild(div)
    if (a < 12) {
        a+=2;
        recurs()
    }
}

recurs()