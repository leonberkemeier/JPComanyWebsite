let navbar1 = document.getElementById("navbar1")
let navbar2 = document.getElementById("navbar2")

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar1.classList.remove("ScrollUp1")
    navbar1.classList.add("ScrollDown1")
    navbar2.classList.remove("ScrollUp2")
    navbar2.classList.add("ScrollDown2")
    console.log("up");
  } else {
    navbar1.classList.add("ScrollUp1")
    navbar1.classList.remove("ScrollDown1")
    navbar2.classList.add("ScrollUp2")
    navbar2.classList.remove("ScrollDown2")
    console.log("down")
  }
  prevScrollpos = currentScrollPos;
}



var typingEffect = new Typed (".multiText",{
    strings:["Software","Help","Support","Kingz"],
    loop: true,
    typeSpeed: 200,
    backSpeed: 300,
    backDelay: 1500,
});


const card = document.getElementById("card");

document.addEventListener("mousemove", (e) => {
    rotateElement(e,card);
});

function rotateElement(event, element){
    //where is teh mouse

    const x = event.clientX;
    const y = event.clientY;
    // console.log(x,y)


    //where the middle of card

    //keep in MIND THIS IS ONLY FROM THE MIDDLE OF TEH SCREEN NOT THE CARD

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight /2;
    // console.log(middleX)


    // offset from mouse to middle of card

    const offsetX = ((x - middleX)) ;
    const offsetY = ((y - middleY));
    // console.log(offsetX,offsetY)

    const ratioOSX = ((x - middleX) / middleX)*15;
    const ratioOSY = ((y - middleY) / middleY)*15;
    // console.log(ratioOSX, ratioOSY);

    //lets rotatae
    element.style.setProperty("--rotateY", ratioOSX + "deg");
    element.style.setProperty("--rotateX", -1 * ratioOSY + "deg");
}
// alert("hi")