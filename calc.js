let flag = 0;

const imgContainer =  document.querySelector(".img-container");

const buttonGl = document.querySelector("#change-btn");

const mainBg =  document.querySelector("#main-body");

const screen =  document.querySelector("#screen");




// button.addEventListener(“click”, function () 

buttonGl.addEventListener("click", function() {
    if(flag === 0) {
    imgContainer.style.backgroundImage = "url('4.jpg')";
    flag = 1;     
    mainBg.style.backgroundColor = "#0D1117";
    mainBg.style.backgroundImage ="none";
    imgContainer.style.boxShadow = "-0px 0px 7px 0px  #87bff4";
    screen.style.background= "white";
    mainBg.style.backgroundImage = "url('background1.svg')"


  } else {
    imgContainer.style.backgroundImage = "url('2.jpg')";
    imgContainer.style.boxShadow = "-6px 5px 8px 1px  #242424";
    screen.style.background= "rgba(255, 255, 255, 0.773)";
    mainBg.style.backgroundColor = "#87bff4";
    mainBg.style.backgroundImage = "url('background.svg')"


        flag = 0;
  }
})

// });




function buttonclick(val)
{
document.getElementById("screen").value+=val;

}

function clearDisplay()
{
    document.getElementById("screen").value="";
}

function equalClick()
{
 var text=document.getElementById('screen').value
 var result=eval(text)
 var text=document.getElementById('screen').value=result
 
}



