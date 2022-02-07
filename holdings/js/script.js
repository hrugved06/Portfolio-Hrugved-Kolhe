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

//=============================================== Forismatic API ===============================================================

function randomQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function( response ) {
          $("#random_quote").html("<p id='random_quote'>" +
            response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
          $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
            ' (' + response.quoteAuthor + ')');
        }
    });
  }
  document.getElementById("get-activity").addEventListener("click", function(){
    $(function() {
      randomQuote();
    });
  })
  
  $("button").click(function(){
    randomQuote();
  });
  
//==============================================================================================================================
  
//=============================================== Tab Window Options ===========================================================


document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Portfolio 🔆 Hrugved Kolhe";
        $("#favicon").attr("href","holdings/images/prof.png");
    }
    else {
        document.title = "Hrugved is calling you back!";
        $("#favicon").attr("href","holdings/images/sticker2.png");
    }
});

//==============================================================================================================================

// <!-- typed js effect starts -->
    var typed = new Typed(".typing-text", {
        strings: ["Open Source", "Data Science", "Research", "Machine Learning", "Quantum Computing"],
        loop: true,
        typeSpeed: 50,
		backSpeed: 25,
		backDelay: 500,
      });
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
      VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 10,
      });
// <!-- tilt js effect ends -->


// pre loader start
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader,1000);
}
window.onload = fadeOut;
// pre loader end

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
    alert ("Action not allowed by  the Owner");
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    alert ("Action not allowed by the Owner");
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



/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3',{delay: 200}); 
srtop.reveal('.home .content p',{delay: 200}); 
srtop.reveal('.home .content .btn',{delay: 200}); 

srtop.reveal('.home .image',{delay: 400}); 
srtop.reveal('.home .linkedin',{interval: 600}); 
srtop.reveal('.home .github',{interval: 800}); 
srtop.reveal('.home .twitter',{interval: 1000});
srtop.reveal('.home .telegram',{interval: 600}); 
srtop.reveal('.home .instagram',{interval: 600}); 
srtop.reveal('.home .dev',{interval: 600}); 



/* SCROLL ABOUT */
srtop.reveal('.about .content h3',{delay: 300});
srtop.reveal('.about .content .tag',{delay: 400}); 
srtop.reveal('.about .content p',{delay: 300}); 
srtop.reveal('.about .content .box-container',{delay: 300}); 
srtop.reveal('.about .content .resumebtn',{delay: 300}); 


/* SCROLL SKILLS */
srtop.reveal('.skills .container',{interval: 200}); 
srtop.reveal('.skills .container .bar',{delay: 400}); 

/* SCROLL EDUCATION */
srtop.reveal('.education .box',{interval: 200}); 

/* SCROLL PROJECTS */
srtop.reveal('.work .box',{interval: 200}); 

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline',{delay: 400});
srtop.reveal('.experience .timeline .container',{interval: 400}); 

/* SCROLL CONTACT */
srtop.reveal('.contact .container',{delay: 400});
srtop.reveal('.contact .container .form-group',{delay: 400});


// -----------------------------------------------  Contact Form JS  -------------------------------------------------------- //

(function() {
  function validEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  function validateHuman(honeypot) {
    if (honeypot) {
      console.log("Robot Detected!");
      return true;
    } else {
      console.log("Welcome Human!");
    }
  }
  function getFormData(form) {
    var elements = form.elements;

    var fields = Object.keys(elements).filter(function(k) {
          return (elements[k].name !== "honeypot");
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      formData[name] = element.value;
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "Sheet1"; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    console.log(formData);
    return formData;
  }

  function handleFormSubmit(event) {  
    event.preventDefault();           
    var form = event.target;
    var data = getFormData(form);         
    if( data.email && !validEmail(data.email) ) {   
      var invalidEmail = form.querySelector(".email-invalid");
      if (invalidEmail) {
        invalidEmail.style.display = "block";
        return false;
      }
    } else {
      disableAllButtons(form);
      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
          console.log(xhr.status, xhr.statusText);
          console.log(xhr.responseText);
          var formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
          }
          return;
      };
      var encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join('&');
      xhr.send(encoded);
    }
  }
  
  function loaded() {
    console.log("Contact form submission handler loaded successfully.");
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();