const hex = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];


// # six values and letters + numbers
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

document.addEventListener('keydown', logKey);
document.addEventListener('keyup', eraseLogKeyInput);


btn.addEventListener("click", function(){
    let hexColor = '#';
    for(let i = 0 ; i < 6 ; i++)
    {
        hexColor  += hex[getRandomNumber()]
    }

    color.textContent =  hexColor;
    document.body.style.backgroundColor = hexColor;

})

let  getRandomNumber = () => Math.floor(Math.random() * hex.length);

function logKey(e) {

    let hexColor = '#';

    if(keyPressed.textContent += ` ${e.code}`)
    {
        for(let i = 0 ; i < 6 ; i++)
        {
            hexColor  += hex[getRandomNumber()]
            console.log('enter');
        }
    
    }

    color.textContent =  hexColor;
    document.body.style.backgroundColor = hexColor;

  }

  function eraseLogKeyInput(e) {
    keyPressed.textContent = "Press Enter to Change Background";
  }