var screen= document.querySelectorAll(".screen")
var startbtn=document.querySelector("button")
var allElem=document.querySelectorAll(".elemContainer")
var playground= document.querySelector("#playground")
var selected=""
var scoreVal=document.querySelector("#nav h5 span")
var score=0
var timeVal=document.querySelector("#nav h4 span")
var min=0;
var sec=0;
var time;
var resultBar=document.querySelector("#playground h3")
var creating; 


startbtn.addEventListener("click",function(){
    screen[1].style.transform="translateY(-100%)"
})

allElem.forEach(function(val){
    val.addEventListener("click",function(){
        screen[2].style.transform="translateY(-200%)"

     selected = val.childNodes[3].getAttribute("src")
     
      creating= setInterval(function(){
        createImg()
       },1000)
       timeIncrease()
      
})
})

function createImg(){
    var newImg= document.createElement("img")
    const{x,y,rot}= getRandom()
    newImg.setAttribute("src",selected)
    newImg.style.left = x+"px"
    newImg.style.top = y+"px"
    newImg.style.rotate = rot+"deg"

    newImg.addEventListener("click",function(){
        catchImg()
        newImg.style.cursor="grabbing"
    })
    
     playground.appendChild(newImg) 

     setTimeout(function(){
       playground.removeChild(newImg)
    },1500)   
 
}


 function getRandom(){
    var x= Math.random()*(window.innerWidth - 200)+100
    var y= Math.random()*(window.innerHeight - 200)+100
    var rot= Math.floor(Math.random()*360)

    return{x,y,rot}
 }

 
 function catchImg(){
    increaseScore()  
    addImages()      
    }


    function addImages(){
        setTimeout(createImg,1000)
        setTimeout(createImg,1000)
    }


    function increaseScore(){
        score++
        scoreVal.innerHTML=score
    }


   function timeIncrease(){
   time= setInterval(function(){
        sec++
        if(sec==60){
            sec=0;
            min++
        }
        timeVal.innerHTML=`${min} : ${sec}`
        if(min==1 && sec==0){
            clearInterval(time)
            clearInterval(creating)
            gameOver()
        }
    },1000)
   }


   function gameOver(){
    resultBar.style.display="block"
    resultBar.innerHTML=`Game Over ! <br> Your Score : ${score}`
   }
