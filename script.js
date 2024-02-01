var screen= document.querySelectorAll(".screen")
var startbtn=document.querySelector("button")
var allElem=document.querySelectorAll(".elemContainer")
var playground= document.querySelector("#playground")
var selected=""

startbtn.addEventListener("click",function(){
    screen[1].style.transform="translateY(-100%)"
})

allElem.forEach(function(val){
    val.addEventListener("click",function(){
        screen[2].style.transform="translateY(-200%)"

        var selected = val.childNodes[3].getAttribute("src")
        setTimeout(function(){
            createImg(selected)
        },2000)
      
})
})

function createImg(selected){
    var newImg= document.createElement("img")

    var obj= getRandom()
    newImg.style.left = obj.x+"%"
    newImg.style.top = obj.y+"%"
    newImg.style.rotate = obj.rot+"deg"
    
    newImg.setAttribute("src",selected)

     playground.appendChild(newImg)    
 
}


 function getRandom(){
   var x= Math.floor(Math.random()*100)
   var y= Math.floor(Math.random()*100)
   var rot= Math.floor(Math.random()*360)

    return{x,y,rot}
 }
