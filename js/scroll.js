// Enable hidden nav bar
{
  const nav = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
     if (window.pageYOffset > 100) {
      nav.classList.add("navscroll--hidden", 'bg-dark','shadow');
    } else {
    setTimeout(function(){
      nav.classList.remove("navscroll--hidden", 'bg-dark','shadow');

    }, 000);
    }

    lastScrollY = window.scrollY;
  });
}
