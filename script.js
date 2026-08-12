/* =====================================
   MOBILE MENU
===================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


/* Close mobile menu after clicking link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


/* =====================================
   BIKE FILTER
===================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const bikeCards =
    document.querySelectorAll(".bike-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category =
            button.getAttribute("data-category");

        bikeCards.forEach(card => {

            const cardCategory =
                card.getAttribute("data-category");

            if (
                category === "all" ||
                cardCategory === category
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =====================================
   SEARCH
===================================== */

const searchInput =
    document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    const searchText =
        searchInput.value.toLowerCase().trim();

    bikeCards.forEach(card => {

        const bikeName =
            card.getAttribute("data-name").toLowerCase();

        const bikeText =
            card.textContent.toLowerCase();

        if (
            bikeName.includes(searchText) ||
            bikeText.includes(searchText)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


/* =====================================
   ENQUIRE BUTTON
===================================== */

const enquireButtons =
    document.querySelectorAll(".enquire-btn");

const bikeSelect =
    document.getElementById("bike");

enquireButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedBike =
            button.getAttribute("data-bike");

        bikeSelect.value = selectedBike;

        document
            .getElementById("contact")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =====================================
   CONTACT FORM
===================================== */

const contactForm =
    document.getElementById("contactForm");

const successPopup =
    document.getElementById("successPopup");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const bike =
        document.getElementById("bike").value;

    if (!name || !phone) {

        alert("Please enter your name and phone number.");

        return;

    }

    /*
       At this stage the form is only a front-end form.
       It does not send data to a server.
    */

    console.log("New enquiry:", {
        name: name,
        phone: phone,
        motorcycle: bike
    });

    successPopup.classList.add("show");

    contactForm.reset();

});


/* =====================================
   CLOSE POPUP
===================================== */

const closePopup =
    document.getElementById("closePopup");

closePopup.addEventListener("click", () => {

    successPopup.classList.remove("show");

});


/* Close popup when clicking outside */

successPopup.addEventListener("click", (event) => {

    if (event.target === successPopup) {

        successPopup.classList.remove("show");

    }

});
