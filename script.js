var screen= document.querySelectorAll(".screen")
var startbtn=document.querySelector("button")
var allElem=document.querySelectorAll(".elemContainer")
var playground= document.querySelector("#playground")
var selected=""
var scoreVal=document.querySelector("#nav h5 span")
var score=0
var timeVal=document.querySelector("#nav h4 span")
var time=0
var timer
var resultBar=document.querySelector(".time-score")
var result=document.querySelector(".time-score h5")


startbtn.addEventListener("click",function(){
    screen[1].style.transform="translateY(-100%)"
})

allElem.forEach(function(val){
    val.addEventListener("click",function(){
        screen[2].style.transform="translateY(-200%)"

     selected = val.childNodes[3].getAttribute("src")
     
       timer= setInterval(function(){
        createImg()
       },1000)
      
})
})

function createImg(){
    var newImg= document.createElement("img")

    var obj= getRandom()
    newImg.style.left = obj.x+"%"
    newImg.style.top = obj.y+"%"
    newImg.style.rotate = obj.rot+"deg"
    
    newImg.setAttribute("src",selected)
     playground.appendChild(newImg) 

     catchImg()

     setTimeout(function(){
       playground.removeChild(newImg)
    },1500)   
 
}


 function getRandom(){
    var x= Math.floor(Math.random()*100)
    var y= Math.floor(Math.random()*100)
    var rot= Math.floor(Math.random()*360)

    return{x,y,rot}
 }

 function catchImg(){
    var images =document.querySelectorAll("#playground img")
   
    images.forEach(function(elem){
        elem.addEventListener("click",function(){
           score++
            scoreVal.innerHTML=score
        })
    })

    setTimeout(() => {
       time++
        timeVal.innerHTML=time
    }, 1000);


    setTimeout(() => {
       clearInterval(timer)
       resultBar.style.display="initial"
       result.innerHTML=`Game Over!\n Your Score : ${score}`

       

    }, 29000);

 }


