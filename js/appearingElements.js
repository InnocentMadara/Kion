const appearingElements = Array.from(document.querySelectorAll(".appearing-element"));

const options = {
  rootMargin: "-10%",
};

const observer = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add("appearing-element--appeared");
    observer.unobserve(entry.target);
  })
}, options)

for(let elem of appearingElements){
  observer.observe(elem);
}