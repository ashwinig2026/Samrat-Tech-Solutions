(function () {
  "use strict";

  // Highlight active nav link
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-sts .nav-link").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === path) {
      link.classList.add("active");
    }
  });

  // Reveal on scroll
  var revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("visible");
    });
  }

  // Quote form → opens email client (mailto)
  var form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("quoteName").value.trim();
      var phone = document.getElementById("quotePhone").value.trim();
      var email = document.getElementById("quoteEmail").value.trim();
      var product = document.getElementById("quoteProduct").value.trim();
      var message = document.getElementById("quoteMessage").value.trim();

      var subject = encodeURIComponent("Quote request — Samrat Tech Solutions");
      var body = encodeURIComponent(
        "Name: " +
          name +
          "\nPhone: " +
          phone +
          "\nEmail: " +
          email +
          "\nProduct interest: " +
          product +
          "\n\nMessage:\n" +
          message
      );

      window.location.href =
        "mailto:a.gangadharappa@devon.nl?subject=" + subject + "&body=" + body;
    });
  }
})();
