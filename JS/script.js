//  toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x') ;
   navbar.classList.toggle('active') ; 
}


// sctall sections 
let sections = document.querySelectorAll('section') ; 
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
   sections.forEach(sec => {
      let top = window.scrollY; 
      let offset = sec.offsetTop - 100; 
      let height = sec.offsetHeight; 
      let id = sec.getAttribute('id');
      
      if (top >= offset && top < offset + height) {
         // active navbar links  
         navLinks.forEach(links => {
            links.classList.remove('active') ; 
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active') ; 
         });

         // activ sections for animation on scroll  
         sec.classList.add ('show-animate') ; 
      }
      // if want to use animation that repeats on scroll use this 
      else {
         sec.classList.remove('show-animate') ;
      }
   }); 

   // sticky header 
   let header = document.querySelector('header') ; 

   header.classList.toggle('sticky' , window.scrollY > 100 ) ; 

   // remove toggle icon and navbar when click navbar links (scrall)
   menuIcon.classList.remove('bx-x') ;
   navbar.classList.remove('active') ; 

   // animation footer on scroll  
   let footer =document.querySelector('footer') ; 
   
   footer.classList.toggle('show-animate' , this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight) ; 
   
}

//  the image anmaition 

var images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg']; // أضف صورك هنا
var imageHead = document.querySelector('.home');
var i = 0;

setInterval(function() {
   imageHead.style.backgroundImage = 'url(img/' + images[i] + ')';
  i = (i + 1) % images.length; // لتحديث القيمة i كل مرة
}, 5000); // لتحديث الخلفية كل 5 ثواني
//  end 

// order click 
// const orderButton = document.getElementById("orderButton");
// const inputs = document.querySelectorAll("input");

// orderButton.addEventListener("click", function() {
//   const inputValue = inputs[0].value;
//   for (let i = 1; i < inputs.length; i++) {
//     inputs[i].value = inputValue;
//   }
// });

