const btn2 = document.querySelector(".btn2")

function moveAway() {
    var newX = Math.random() * (700-window.innerWidth - btn2.clientWidth);
    var newY = Math.random() * (600-window.innerHeight - btn2.clientHeight);
    
    btn2.style.left = newX + "px";
    btn2.style.bottom = newY + "px"
    console.log(newX , newY)

    setTimeout(()=>{
        btn2.style.left = 50 + "%";
        // btn2.style.top = 10 + "%"
        btn2.style.bottom = 10 + "%"
    },2000)
}

btn2.addEventListener("mouseover",function(){
    moveAway()
})

const btn1 = document.querySelector(".btn1")
const bgimg = document.querySelector(".bgimg")


btn1.addEventListener("click",function(){
    bgimg.style.backgroundImage = "url(./swing-dance-swing-your-hips.gif)"
    // bgimg.style.backgroundImage = "url(./cute-adorable.gif)"
    bgimg.style.zIndex = 1
    
    setTimeout(function(){
        bgimg.style.backgroundImage = "url(./cat-cats.gif)"
    },5000)

    setTimeout(function(){
        bgimg.style.backgroundImage = "url(./cat-sticker-line-sticker.gif)"
    },10000)
    

    setTimeout(function(){
        bgimg.style.zIndex = -1
    },11500)

  })
 
