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

function pfpScroll(){
  const elem = document.getElementById("pfpTwo");
  const rect = elem.getBoundingClientRect();
  if(window.screen.width > 500){
    if(rect.bottom < -50){
      
      document.getElementById('pfp').style.transitionDuration = "100ms";
      document.getElementById('pfp').style.transform = "translateY(+1%)";
      
      
    }
    else{
      document.getElementById('pfp').style.transform = "translateY(-120%)";
    }
  }
}

function notDone(){
    alert('Not finished yet');
}

var header = document.getElementById('header');
var announcements = document.getElementById('announcements');

function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}
	if(window.screen.width < 500||window.screen.height < 700){
    return;
  }
  console.log(window.screen.width);
  console.log(window.screen.height);
	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top - 170;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 1;
	if(window.screen.width > 500&&window.screen.height > 400){
    if (scrollTop > distanceToTop) {
      opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    }
    
    if (opacity >= 0) {
      element.style.opacity = opacity;
    }
  }
}

function scrollHandler() {
	fadeOutOnScroll(header);
  
  
}

window.addEventListener('scroll', scrollHandler);

var pfp = document.getElementById('pfp');
const checkpoint = 300;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if(window.screen.width > 500||window.screen.height > 400){
    if (currentScroll <= checkpoint) {
      opacity = 0 + currentScroll / checkpoint;
    } else {
      opacity = 1;
    }
    document.getElementById("announcements").style.opacity = opacity;
  }
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener('scroll', pfpScroll);
pfpScroll();