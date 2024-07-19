let count = 0
const linebreak = document.createElement("br");

//date
function getCurrentTime() {
  let dateNow = new Date();
  let hours = dateNow.getHours().toString();
  let minutes = dateNow.getMinutes().toString().padStart(2, '0');
  let seconds = dateNow.getSeconds().toString().padStart(2, '0');
  return hours + ":" + minutes + ":" + seconds
}

//+ - increment buttons
const addIncrementBtn = document.getElementById('add-increment-button');
const minusIncrementBtn = document.getElementById('minus-increment-button')

const saveBtn = document.getElementById('save-button')
//passenger counter
let counterDisplay = document.getElementById('passenger-count');
//saved entries
let saveCount = document.getElementById('save-counter')

//increment changer buttons
const incrementOne = document.getElementById('add-increment-one');
const incrementFive = document.getElementById('add-increment-five');
const incrementTen = document.getElementById('add-increment-ten');

// increment counter
addIncrementBtn.addEventListener('click',()=>{
  addChangeIncrement();
})
minusIncrementBtn.addEventListener('click',()=>{
  minusChangeIncrement();
})
function updateDisplay(){
  counterDisplay.innerHTML = count;
}
// save counter
saveBtn.addEventListener('click',()=>{
  saveCountDisplay();
})

function saveCountDisplay(){
  let currentTime = getCurrentTime();
  let countAndTimeSave = document.createElement('p');
  countAndTimeSave.append(`${count} | ${currentTime}`)
  saveCount.appendChild(countAndTimeSave)
  saveCount.appendChild(linebreak)
}
//add change increment
function addChangeIncrement(){
  if(incrementOne.checked){
    count++
    updateDisplay();
  } else if (incrementFive.checked){
    count = count + 5;
    updateDisplay();
  } else if (incrementTen.checked){
    count = count + 10;
    updateDisplay();
  }
}
//decrease change increment
function minusChangeIncrement(){
  if(incrementOne.checked){
    count--
    updateDisplay();
  } else if (incrementFive.checked){
    count = count - 5;
    updateDisplay();
  } else if (incrementTen.checked){
    count = count - 10;
    updateDisplay();
  }
}