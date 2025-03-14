document.addEventListener("DOMContentLoaded", function () {
  const toggleThemeIcon = document.getElementById("toggleThemeIcon");
  const darkModeEnabled = localStorage.getItem("dark-mode") === "true";

  if (darkModeEnabled) {
      document.body.classList.add("dark-mode");
      toggleThemeIcon.classList.remove("fa-toggle-off");
      toggleThemeIcon.classList.add("fa-toggle-on");
  }

  toggleThemeIcon.addEventListener("click", () => {
      const isDarkMode = document.body.classList.toggle("dark-mode");
      localStorage.setItem("dark-mode", isDarkMode);
      toggleThemeIcon.classList.toggle("fa-toggle-off", !isDarkMode);
      toggleThemeIcon.classList.toggle("fa-toggle-on", isDarkMode);
  });
});

function toggleMobileMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");

  menu.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => menu.classList.remove("active"))
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar .progress");
  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const backToTopButton = document.getElementById("backToTop");

  backToTopButton.onclick = function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
  };
});

ScrollReveal().reveal('.skills, .timeline, .contact', { 
  duration: 1200, 
  origin: 'bottom', 
  distance: '50px',
  delay: 200 
});

function showChatResponse(question) {
  const chatArea = document.querySelector(".scroll-area ul");
  const typingIndicator = document.createElement("li");
  typingIndicator.innerHTML = `<span class="avatar bot">AI</span><div>...</div>`;
  chatArea.appendChild(typingIndicator);

  setTimeout(() => {
      typingIndicator.remove();
      const response = document.createElement("li");
      response.innerHTML = `<span class="avatar bot">AI</span><div>${getResponse(question)}</div>`;
      chatArea.appendChild(response);
      chatArea.scrollTop = chatArea.scrollHeight; 
  }, 1000); 
}

function getResponse(question) {
  const responses = {
      "What languages you know?": " JAVA, C, HTML, CSS, JavaScript and Typescript",
      "What frameworks you use?": "Next.js, React.js, Express and Node js",
      "What is your rating in online coding platforms?": "Leetcode - 1384 || Codeforces - 792 (newbie)",
      "What are your hobbies?": "Gym and Football",
      "Where can I contact you?": "You can reach me at rishavkamal@gmail.com"
  };
  return responses[question] || "I'm here to answer your questions!";
}


