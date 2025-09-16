// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
  });
});

// Scroll animations
const faders=document.querySelectorAll('.fade-in');
const appearOptions={threshold:0.2};
const appearOnScroll=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader=>appearOnScroll.observe(fader));

// Dark/Light mode toggle
const toggleBtn=document.getElementById('theme-toggle');
toggleBtn.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  toggleBtn.textContent=document.body.classList.contains('dark')?'☀️':'🌙';
});
