console.log('code JS chargé');

/* (function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fadeInLeft');
        element.classList.remove('hidden');
      } else {
        element.classList.remove('fadeInLeft');
        element.classList.add('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})(); */




//--------------- ScrollReveal ---------------------
//--------------------------------------------------
const sr = ScrollReveal();

sr.reveal('.logo', {
	origin: 'top',
	distance: '200px',
	duration: 3000,
});

sr.reveal('#marseilleRue', {
	origin: 'right',
	distance: '150px',
	duration: 2000,
});

sr.reveal('h2', {
	origin: 'bottom',
	distance: '200px',
	duration: 1500,
});

sr.reveal('.social-overlay', {
	origin: 'bottom',
	distance: '250px',
	duration: 1500,
});

sr.reveal('.scroll-overlay', {
	origin: 'top',
	distance: '200px',
	duration: 1500,
	delay: 800
});

sr.reveal('.figure-img', {
	duration: 3000,
	origin: 'left',
});

sr.reveal('.figure-img1',{
	duration: 3000,
	origin: 'right',
});

sr.reveal('.figure-img2',{
	duration: 3000,
	origin: 'left',
});

sr.reveal('.figure-img3',{
	duration: 3000,
	origin: 'right',
});

sr.reveal('p',{
	duration: 3000,
	origin: 'right',
});

sr.reveal('.icon',{
	duration: 3000,
	origin: 'left',
});
//------------------------ BOUTTON SCROLL TELEPHONE -----------------------
//-------------------------------------------------------

// Quand l'utilisateur scroll down de 20px , montrer le boutton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
//------------------------ BOUTTON SCROLL LANGUES -----------------------
//-------------------------------------------------------
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
