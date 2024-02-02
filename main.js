const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            console.log(entry);
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

function notDone(){
    alert('Not finished yet');
}

var header = document.getElementById('header');
var announcements = document.getElementById('announcements');

function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}
	
	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top - 170;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 1;
	
	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}
	
	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

function scrollHandler() {
	fadeOutOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);

const checkpoint = 300;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 0 + currentScroll / checkpoint;
  } else {
    opacity = 1;
  }
  document.getElementById("announcements").style.opacity = opacity;
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
