	var link = document.querySelector(".button-popup");
	var popup = document.querySelector(".pop-up");
	var close = popup.querySelector(".button-popup");
	var like = popup.querySelector("[class=pop-up-open]");
	var butt = popup.querySelector("[name=figara]");

	if (butt==like) {
	close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("pop-up-open");
  });
	}
	else {
	link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("pop-up-open");
	});
	}


