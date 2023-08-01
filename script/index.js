const cursor = document.querySelector("#cursor")

let mouse = {
    x: -100,
    y: -100
}
let pos = {
    x: 0,
    y: 0
}
const speed = 0.1

const updateCoordinates = (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
}

window.addEventListener("mousemove", updateCoordinates)

const updatePosition = () => {
    pos.x += (mouse.x - pos.x) * speed
    pos.y += (mouse.y - pos.y) * speed
    cursor.style.transform =
        "translate3d(" + pos.x + "px ," + pos.y + "px, 0)"
}

const loop = () => {
    updatePosition()
    requestAnimationFrame(loop)
}

requestAnimationFrame(loop)

const cursorModifiers = document.querySelectorAll("[cursor-class]")

cursorModifiers.forEach((cursorModifier) => {
    cursorModifier.addEventListener("mouseenter", function () {
        let attribute = this.getAttribute("cursor-class")
        cursor.classList.add(attribute)
    })

    cursorModifier.addEventListener("mouseleave", function () {
        let attribute = this.getAttribute("cursor-class")
        cursor.classList.remove(attribute)
    })
})


//typing
var text = document.querySelector(".text")
        
const letters = ["안녕하세요! 프론트엔드 개발자를 꿈꾸는 신입 웹 퍼블리셔 전진입니다."]
const speeds = 100
var i = 0
var let = 0

const typing     = async() =>{
    letter = letters[i].split("")

    while(letter.length){
        text = document.querySelector(".text")
        await wait(speeds)
        text.innerHTML += letter.shift()
    }
    await wait(1200)

    remove()
}

// 딜레이
function wait(ms){
    return new Promise(res => setTimeout(res, ms))
}

//글자 지우기
const remove = async() =>{
    letter = letters[i].split("")
    while(letter.length){

        await wait(speeds/2)
        letter.pop()
        text.innerHTML = letter.join("")
    }

    // 다음순서 글자로 타이핑 함수 실행

    // i<2 ? "홍길동" : "김길동"
    //조건   참       거짓

    // i==letters.length ? i=0 : i++
    // i = i == letters.length -1 ? 0 : i+1
    i = !letters[i+1] ? 0 : i+1
    typing()
}
function next(){
    setTimeout(typing, 5000)
}

function zero(){
    clearTimeout(typing)
    i = 0
    letter = 0
    let = 0
    text.innerHTML = ""
}

//typing









$(function(){
    $(".more").click(function(){
        $("#menu").delay(1500).addClass("on",500)
        $(".white").animate({"left":"-500%"},1000)
        $(".name").fadeOut("slow")
        $(".more").fadeOut("slow")
        $(".p").slideUp(1500)
        $(".wrap").delay(1500).addClass("drop",500,"easeOutElastic")
        $(".flip").delay(2500).addClass("on",1000,"easeOutElastic")
        $(".sc1_img").delay(3500).addClass("on",1000)
        $(".bar").delay(2500).addClass("on",500)
        $(".profile").delay(2500).addClass("on",500)
        $(".contact").delay(2500).addClass("on",500)
        $(".history").delay(2500).addClass("on",500)
        $(".sk").delay(3000).addClass("on",100)
        $(".skill").delay(4000).addClass("on",1300)
        $(".waves").delay(3000).addClass("on",500)

    })

    $(".design").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: true,
        pauseOnHover: false,
        draggable: false

        
    })
    $('.design').on('afterChange',function(event,slick,currentSlide, nextSlide){
        switch(currentSlide){
            case 0:
                $(".bc1").delay(300).addClass("on",500)
                $(".bc1-1").delay(300).addClass("on",500)
                $(".bc2").delay(300).addClass("on",500)
                $(".bc2-1").delay(300).addClass("on",500)

                $("#sub2 .left").removeClass("on")
                $("#sub2 .right").removeClass("on")

                $(".figma, .figma1, .figma2, .figma3").removeClass("on")

                $(".to, .to1").removeClass("on",500)
                break;
            case 1:
                $(".bc1").removeClass("on")
                $(".bc1-1").removeClass("on")
                $(".bc2").removeClass("on")
                $(".bc2-1").removeClass("on")

                $("#sub2 .left").delay(500).addClass("on",1000)
                $("#sub2 .right").delay(500).addClass("on",1000)
                
                $(".figma, .figma1, .figma2, .figma3").removeClass("on")

                $(".to, .to1").removeClass("on",500)
                break;
            case 2:
                $(".bc1").removeClass("on")
                $(".bc1-1").removeClass("on")
                $(".bc2").removeClass("on")
                $(".bc2-1").removeClass("on")

                $("#sub2 .left").delay(1000).removeClass("on",1000)
                $("#sub2 .right").removeClass("on")

                $(".figma").delay(300).addClass("on",500)
                $(".figma1").delay(400).addClass("on",500)
                $(".figma2").delay(500).addClass("on",500)
                $(".figma3").delay(600).addClass("on",500)

                $(".to, .to1").removeClass("on",500)
                break;
            case 3:
                $(".bc1").removeClass("on")
                $(".bc1-1").removeClass("on")
                $(".bc2").removeClass("on")
                $(".bc2-1").removeClass("on")

                $("#sub2 .left").delay(1000).removeClass("on",1000)
                $("#sub2 .right").removeClass("on")

                $(".figma, .figma1, .figma2, .figma3").removeClass("on")

                $(".to, .to1").delay(500).addClass("on",500)

        }
    })


    $(".wrap").fullpage({
        menu: ".main",
        anchors: ["one","two","three","four"],
        scrollOverflow: true,
        onLeave :function(anchorLink, index, direction){
            var x = index.index
            console.log(x)
            console.log(direction)
            if(x == 0){     //main li 기준으로 위는 다른 section event 아래는 자기 section event
                $(".sc2_img").removeClass("on",1000)
                $(".sc3_img").removeClass("on",1000)
                $(".sc4_img").removeClass("on",1000)
                
                $(".bc1").removeClass("on")
                $(".bc1-1").removeClass("on")
                $(".bc2").removeClass("on")
                $(".bc2-1").removeClass("on")

                $(".main li").removeClass("on")
                $(".main li").eq(x).addClass("on",500)

                $(".sc1_img").addClass("on",1000)
                $(".flip").addClass("on",100)
                $(".bar").addClass("on",500)
                $(".profile").addClass("on",500)
                $(".contact").addClass("on",500)
                $(".history").addClass("on",500)
                $(".sk").addClass("on",500)
                $(".skill").addClass("on",1000)
                $(".logo").animate({"color":"#fff"},500)
                setTimeout(typing, 800)

            }else if(x == 1){
                $(".sc1_img").removeClass("on",1000)
                $(".sc3_img").removeClass("on",1000)
                $(".sc4_img").removeClass("on",1000)

                $(".flip").removeClass("on",500)
                $(".bar").removeClass("on",500)
                $(".profile").removeClass("on",500)
                $(".contact").removeClass("on",500)
                $(".history").removeClass("on",500)
                $(".sk").removeClass("on",500)
                $(".skill").removeClass("on",500)
                zero()

                $(".main li").removeClass("on")
                $(".main li").eq(x).addClass("on",500)

                $(".sc2_img").addClass("on",1000)
                $(".logo").animate({"color":"#000"},500)
                $(".bc1").delay(300).addClass("on",500)
                $(".bc1-1").delay(300).addClass("on",500)
                $(".bc2").delay(300).addClass("on",500)
                $(".bc2-1").delay(300).addClass("on",500)
                $(".logo").animate({"color":"#000"},500)





            }else if(x == 2){
                $(".sc1_img").removeClass("on",1000)
                $(".sc2_img").removeClass("on",1000)
                $(".sc4_img").removeClass("on",1000)
                $(".flip").removeClass("on",500)
                $(".bar").removeClass("on",500)
                $(".profile").removeClass("on",500)
                $(".contact").removeClass("on",500)
                $(".history").removeClass("on",500)
                $(".sk").removeClass("on",500)
                $(".skill").removeClass("on",500)
                $(".bc1").removeClass("on")
                $(".bc1-1").removeClass("on")
                $(".bc2").removeClass("on")
                $(".bc2-1").removeClass("on")
                zero()

                $(".main li").removeClass("on")
                $(".main li").eq(x).addClass("on",500)

                $(".sc3_img").addClass("on",1000)
                $(".logo").animate({"color":"#000"},500)



            }else if(x == 3){
                $(".sc1_img").removeClass("on",1000)
                $(".sc2_img").removeClass("on",1000)
                $(".sc3_img").removeClass("on",1000)
                $(".flip").removeClass("on",500)
                $(".bar").removeClass("on",500)
                $(".profile").removeClass("on",500)
                $(".contact").removeClass("on",500)
                $(".history").removeClass("on",500)
                $(".sk").removeClass("on",500)
                $(".skill").removeClass("on",500)
                $(".bc1").removeClass("on")
                $(".bc1-1").removeClass("on")
                $(".bc2").removeClass("on")
                $(".bc2-1").removeClass("on")
                zero()

                $(".main li").removeClass("on")
                $(".main li").eq(x).addClass("on",500)

                $(".sc4_img").addClass("on",1000)
                $(".logo").animate({"color":"#fff"},500)



            }
        }
    })
})