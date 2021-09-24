const colors = [
    "green",
    "red",
    "rgba(133,122,200",
    "#f15025"
];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//Callback function
btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    
    
})
//Its important to multiply by the array's length to
//To keep the number index from 0-3
let getRandomNumber = () => Math.floor(Math.random() * colors.length);