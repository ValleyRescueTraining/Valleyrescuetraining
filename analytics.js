(function () {
  "use strict";

  var productionHosts = ["valleyrescuetraining.com", "www.valleyrescuetraining.com"];

  if (!productionHosts.includes(window.location.hostname)) {
    return;
  }

  var measurementId = "G-ZZWVJX366H";

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  var tag = document.createElement("script");
  tag.async = true;
  tag.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(tag);

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[href]");
    if (!link) return;

    var href = link.getAttribute("href") || "";
    var url;

    try {
      url = new URL(link.href, window.location.href);
    } catch (error) {
      return;
    }

    var eventName;
    var parameters = {
      link_text: link.textContent.trim().replace(/\s+/g, " ").slice(0, 100),
      link_url: url.href,
      page_path: window.location.pathname
    };

    if (url.hostname === "cal.com") {
      eventName = "registration_click";
      parameters.course = link.querySelector("strong")?.textContent.trim() || "scheduled_class";
    } else if (url.pathname === "/request" || href === "#request-training" || url.hostname === "tally.so" && window.location.pathname === "/request/") {
      eventName = "training_request_click";
    } else if (url.protocol === "tel:") {
      eventName = "phone_click";
    } else if (url.protocol === "mailto:") {
      eventName = "email_click";
    } else if (url.hostname === "facebook.com" || url.hostname === "www.facebook.com") {
      eventName = "facebook_click";
    } else if (link.matches(".nav-links a, .hero-buttons a, .hero-inline-cta")) {
      eventName = "navigation_cta_click";
    }

    if (eventName) {
      window.gtag("event", eventName, parameters);
    }
  });
})();
