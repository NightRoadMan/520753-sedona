	var link = document.querySelector(".button-popup");
	var popup = document.querySelector(".pop-up");
	var form = popup.querySelector("form");

	var timeIn = popup.querySelector("[name=comein]");
	var timeOut = popup.querySelector("[name=comeout]");

	var storage = localStorage.getItem("timeIn");
	


	link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("pop-up-close");
	});



	form.addEventListener("submit", function (evt) {
	if (!timeIn.value || !timeOut.value) {
	evt.preventDefault();
	console.log("Нужно ввести логин и пароль");
	} else {
	localStorage.setItem("comein", timeIn.value);
	}
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			if (!form.classList.contains("pop-up-close") == false) {
				form.classList.contains("pop-up-close");
			}
	}

	});
