var link=document.querySelector(".button-popup"),popup=document.querySelector(".pop-up"),timeIn=popup.querySelector("[name=comein]"),timeOut=popup.querySelector("[name=comeout]"),storage=localStorage.getItem("timeIn"),storage=localStorage.getItem("timeOut");popup.classList.add("pop-up-js-init"),link.addEventListener("click",function(e){e.preventDefault(),storage?(timeIn.value=storage,setTimeout(function(){timeOut.focus()},700)):setTimeout(function(){timeIn.focus()},700),popup.classList.contains("pop-up-js-init")?(popup.classList.remove("pop-up-js-init"),popup.classList.add("pop-up-visible"),popup.classList.remove("modal-error"),timeIn.focus()):(popup.classList.toggle("pop-up-visible"),popup.classList.toggle("pop-up-hide"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(console.log("111"),popup.classList.contains("pop-up-visible")&&(popup.classList.add("pop-up-hide"),popup.classList.remove("pop-up-visible"),popup.classList.remove("modal-error")))}),popup.addEventListener("submit",function(e){timeIn.value&&timeOut.value?(localStorage.setItem("timeIn",timeIn.value),localStorage.setItem("timeOut",timeOut.value)):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))});