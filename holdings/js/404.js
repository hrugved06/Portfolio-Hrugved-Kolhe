$(document).ready(function(){

   $('#menu').click(function(){
       $(this).toggleClass('fa-times');
       $('.navbar').toggleClass('nav-toggle');
   });

   $(window).on('scroll load',function(){
       $('#menu').removeClass('fa-times');
       $('.navbar').removeClass('nav-toggle');

       if(window.scrollY>60){
           document.querySelector('#scroll-top').classList.add('active');
       }else{
           document.querySelector('#scroll-top').classList.remove('active');
       }

       // scroll spy
       $('section').each(function(){
           let height = $(this).height();
           let offset = $(this).offset().top - 200;
           let top = $(window).scrollTop();
           let id = $(this).attr('id');

           if(top>offset && top<offset+height){
               $('.navbar ul li a').removeClass('active');
               $('.navbar').find(`[href="#${id}"]`).addClass('active');
           }
       });
   });

   // smooth scrolling
   $('a[href*="#"]').on('click',function(e){
       e.preventDefault();
       $('html, body').animate({
           scrollTop : $($(this).attr('href')).offset().top,
       },500, 'linear')
   })
});


// Start of Tawk.to Live Chat

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/61001d75d6e7610a49ad3be2/1fbk764uk';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

// End of Tawk.to Live Chat


// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    alert ("Inspect action disabled 😉");
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    alert ("Action not allowed");
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    alert ("Action not allowed");
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    alert ("Code Viewer disabled 😉");
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
    alert ("Page save Prohibited");
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) {
    alert ("Text selection Disabled");
    return false;
 }
}