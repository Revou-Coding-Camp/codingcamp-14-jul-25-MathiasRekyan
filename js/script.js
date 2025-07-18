document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const popupSubmit = document.getElementById("popupSubmit");
  
    popupSubmit.addEventListener("click", function () {
      let nameInput = document.getElementById("popupName").value.trim();
      if (!nameInput) {
        nameInput = "Pengunjung";
      }
  
     
      document.getElementById("dynamicName").textContent = nameInput;
  
      const dynamicName2 = document.getElementById("dynamicName2");
      if (dynamicName2) {
        dynamicName2.textContent = nameInput;
      }
  
      popup.style.display = "none";
    });
  
    
    const form = document.getElementById("messageForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const inputName = document.getElementById("inputName").value;
      const inputDOB = document.getElementById("inputDOB").value;
      const inputGender = document.querySelector('input[name="gender"]:checked').value;
      const inputMessage = document.getElementById("inputMessage").value;
      const currentTime = new Date().toLocaleString();
  
      document.getElementById("currentTime").textContent = currentTime;
      document.getElementById("outputName").textContent = inputName;
      document.getElementById("outputDOB").textContent = inputDOB;
      document.getElementById("outputGender").textContent = inputGender;
      document.getElementById("outputMessage").textContent = inputMessage;
    });
  
    
    document.getElementById("hamburger").addEventListener("click", function () {
      const nav = document.getElementById("navLinks");
      nav.classList.toggle("show");
    });
  
   
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
    const previousSlide = slides[currentSlide];
    const nextSlide = slides[index];

    
    slides.forEach(slide => {
      slide.classList.remove("fade-out");
    });

    
    previousSlide.classList.remove("active");
    previousSlide.classList.add("fade-out");

    
    nextSlide.classList.add("active");

    currentSlide = index;
    }   

    setInterval(() => {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }, 5000);

  });
  
  
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    let current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
  document.getElementById("btnProfile").addEventListener("click", function () {
    document.getElementById("profile").scrollIntoView({ behavior: "smooth" });
  });
  
  document.getElementById("btnPortfolio").addEventListener("click", function () {
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("btnContact").addEventListener("click", function () {
    document.getElementById("message").scrollIntoView({ behavior: "smooth" });
  });
  
  
const faders = document.querySelectorAll('.fade-in-section');

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15
  }
);

faders.forEach(section => {
  appearOnScroll.observe(section);
});
