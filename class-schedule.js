(function () {
  "use strict";

  var schedule = document.querySelector("#open-classes .booking-grid");
  if (!schedule) return;

  var now = Date.now();
  var classCards = Array.from(schedule.querySelectorAll("[data-class-end]"));

  classCards.forEach(function (card) {
    var endTime = Date.parse(card.dataset.classEnd);
    if (!Number.isNaN(endTime) && endTime < now) {
      card.remove();
    }
  });

  if (!schedule.querySelector("[data-class-end]")) {
    schedule.hidden = true;
    var emptyMessage = document.querySelector("[data-no-upcoming-classes]");
    if (emptyMessage) emptyMessage.hidden = false;
  }
})();
