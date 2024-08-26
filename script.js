const buttonBackgroundChange = document.querySelector("#button-Background-Change");
const buttonAlert = document.querySelector("#button-Alert");
const buttonTextChange = document.querySelector("#button-color-text");
const buttonColor = document.querySelector("#colorButton")

const body = document.body;

buttonBackgroundChange.addEventListener('click', colorChange);
buttonAlert.addEventListener('click', alertpopup);
buttonTextChange.addEventListener('click', colorTextChange);
buttonColor.addEventListener('click', bgcolorbuttonchange)

function colorChange(){
    body.style.backgroundColor = "cornflowerblue"
};

function alertpopup(){
alert("pluh")
}

function colorTextChange(){
    const buttons = document.getElementById('button-color-text');
    buttons.style.color = "hotpink"
}



function bgcolorbuttonchange(){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = randomColor;
}



const button = document.getElementById("closeButton");

button.addEventListener("click", function() {
    window.close();
});
 

document.getElementById('showPopupButton').addEventListener('click', function() { 
        document.getElementById('popupDiv').style.display = 'block';      
       });        
       document.getElementById('closePopup').addEventListener('click', function() {     
                document.getElementById('popupDiv').style.display = 'none'; });

document.getElementById('spinButton').addEventListener('click', function() {
    this.classList.toggle('spin');
});



