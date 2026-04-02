document.addEventListener("DOMContentLoaded", () => {
    const cookiePopup = document.getElementById("cookie-popup");
    const acceptButton = document.getElementById("accept-cookies");
    const closeButton = document.getElementById("cookie-close");

    function hidePopup() {
        cookiePopup.classList.remove("show");

        setTimeout(() => {
            cookiePopup.style.display = "none";
        }, 500);
    }

    if (localStorage.getItem("cookiesAccepted") !== "true") {
        cookiePopup.style.display = "flex";
        setTimeout(() => cookiePopup.classList.add("show"), 50);
    }

    acceptButton.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        hidePopup();
    });

    closeButton.addEventListener("click", hidePopup);
});
