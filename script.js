// Smooth scroll button

document.getElementById("begin").addEventListener("click", function(){

    document.querySelector(".story").scrollIntoView({
        behavior:"smooth"
    });

});





// Scroll reveal animations

const boxes = document.querySelectorAll(".story-box");


function reveal(){

    boxes.forEach(box=>{

        const position = box.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if(position < screenHeight - 100){

            box.classList.add("active");

        }

    });

}


window.addEventListener("scroll", reveal);

reveal();






// Envelope opening


const envelope = document.getElementById("envelope");


envelope.addEventListener("click",()=>{

    envelope.classList.toggle("open");

});







// Floating hearts


function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";


    heart.style.left =
    Math.random()*100+"vw";


    heart.style.animationDuration =
    (Math.random()*5+5)+"s";


    document.getElementById("hearts")
    .appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },10000);

}



setInterval(createHeart,700);







// Background music


const music=document.getElementById("music");


document.body.addEventListener(
"click",
()=>{

    music.play();

},
{
once:true
}
);






// Final typewriter


const message = 
`
One last thing... ❤️

No matter how many birthdays come and go...

You'll always be my favorite person...

My greatest blessing...

And the love of my life.

Thank you for saying "Yes."

Forever Yours,

Ghazanfar ❤️
`;



let index=0;


function typeWriter(){

const target=document.getElementById("typing");


if(!target) return;


if(index < message.length){

target.innerHTML += message.charAt(index);

index++;

setTimeout(typeWriter,60);

}

}



const finalSection =
document.querySelector(".final");


window.addEventListener("scroll",()=>{


const top =
finalSection.getBoundingClientRect().top;


if(top < window.innerHeight){

typeWriter();

}


});
