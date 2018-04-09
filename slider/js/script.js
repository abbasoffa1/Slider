var sekil=document.querySelector(".sekil img");
var reqem=document.querySelector(".reqem button")
var btnPrev=document.querySelector(".btns .btn1:first-child")
var btnNext=document.querySelector(".btns .btn2:last-child")
btnPrev.addEventListener("click",GoPrev)
btnNext.addEventListener("click",GoNext)
var i=0;
var image=["image/im1.jpg","image/im2.jpg","image/im3.jpg"];

function GoPrev(){
 	sekil.setAttribute("src",image[i])
     i--
     if(i<0){
      i= image.length-1;
     }
}
function GoNext(){
	sekil.setAttribute("src",image[i])
     i++
     if(i>image.length-1){
        i=0;
       }
}
function ilk(){
    sekil.setAttribute("src",image[i])
}
function ikinci(){
    sekil.setAttribute("src",image[1])
}
function ucuncu(){
    sekil.setAttribute("src",image[2])
}
function deyisdir(){
	sekil.setAttribute("src",image[i])
	if(i < image.length - 1){
      i++; 
      
	} else { 
		i =0;           
    }
    
}
window.onload = function(){
    setInterval(function(){deyisdir();}, 4000);
}






