function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
  const backToTopButton = document.getElementById("backToTop");

  backToTopButton.onclick = function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
  };
});