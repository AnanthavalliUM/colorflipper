const btn = document.getElementById("btn");
const input = document.getElementById("color");
const wrapp = document.getElementById("wrap");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


btn.addEventListener('click' , changeBg)

function changeBg(){
    let hexcolor = '#'
    for(let i = 1; i <= 6; i++){
        hexcolor = hexcolor + random()

    }
    wrapp.style.backgroundColor = hexcolor;
    input.innerHTML = hexcolor;
}
function random(){
    let randomindex = Math.floor(Math.random() * 16);
    return hex[randomindex];

}
