$(document).ready(function () {

    // تأكد إن Owl Carousel اتحمّلت قبل ما تستخدمها، عشان لو حصل خطأ هنا
    // الكود اللي بعده (زي الكاونتر تحت) ميتوقفش عن الشغل
    if ($.fn.owlCarousel) {
        $(".owl-carousel").owlCarousel({
            loop: true,
            nav: true,
            navText: [
                '<i class="fa-solid fa-angle-left"></i>',
                '<i class="fa-solid fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    if (document.querySelector("[data-category]")) {
        handleCategory("category1");
    }
});

let handleCategory = (type, clickedBtn = null) => {
    let category1 = document.querySelectorAll("[data-category='category1']");
    let category2 = document.querySelectorAll("[data-category='category2']");
    let divs = document.querySelectorAll("[data-category]");

    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add("d-none");
        divs[i].classList.remove("d-block");
    }

    let selectedCategory = type == "category1" ? category1 : category2;

    for (let i = 0; i < selectedCategory.length; i++) {
        selectedCategory[i].classList.add("d-block");
        selectedCategory[i].classList.remove("d-none");
    }

    let resultsCount = document.querySelector(".results-count");
    if (resultsCount) {
        resultsCount.innerText = `Showing 1-${selectedCategory.length} of ${divs.length} results`;
    }

    let categoryBtns = document.querySelectorAll(".btn-cat");
    for (let i = 0; i < categoryBtns.length; i++) {
        categoryBtns[i].classList.remove("active");
    }

    if (clickedBtn) {
        clickedBtn.classList.add("active");
    }
};


$(function () {

    if ($.fn.owlCarousel) {
        $('#owl-1').owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            dots: false,
            responsive: {
                0: { items: 3 },
                576: { items: 4 },
                768: { items: 6 },
                992: { items: 8 }
            }
        });


        $('#owl-2').owlCarousel({
            loop: false,
            margin: 15,
            nav: true,
            dots: false,
            responsive: {
                0: { items: 2 },
                576: { items: 3 },
                768: { items: 4 },
                1200: { items: 5 }
            }
        });


        $('#owl-3').owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            dots: false,
            navText: ['<i class="fa-solid fa-angle-left"></i>',
                '<i class="fa-solid fa-angle-right"></i>'],
            responsive: {
                0: { items: 1 },
                576: { items: 2 },
                992: { items: 3 }
            }
        });
    }


    const $hours = $('#hours');
    const $min = $('#min');
    const $sec = $('#sec');

    function pad(n) {
        return String(n).padStart(2, '0');
    }

    function tick() {
        const now = new Date();
        let end = new Date();
        end.setHours(24, 0, 0, 0);

        let diff = Math.max(0, end - now);
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);

        $hours.text(pad(h));
        $min.text(pad(m));
        $sec.text(pad(s));
    }

    tick();
    setInterval(tick, 1000);


    const $upBtn = $('#up');

    function toggleUpBtn() {
        if ($upBtn.length === 0) return;
        if (window.scrollY > 400) {
            $upBtn.removeClass('none').addClass('scale');
        } else {
            $upBtn.removeClass('scale').addClass('none');
        }
    }

    toggleUpBtn();
    $(window).on('scroll', toggleUpBtn);

});

let contactForm = document.getElementById("customForm");

if (contactForm) {

    contactForm.onsubmit = function (e) {
        e.preventDefault();

        let username = document.getElementById("username");
        let userEmail = document.getElementById("useremail");

        let usernameMsg = document.getElementById("nameError");
        let emailMsg = document.getElementById("emailError");

        let valid = true;



        if (username.value.trim() === "") {
            usernameMsg.innerHTML = "Name is required";
            usernameMsg.style.display = "block";
            username.classList.add("is-invalid");
            valid = false;
        }
        else {
            usernameMsg.style.display = "none";
            username.classList.remove("is-invalid");
            username.classList.add("is-valid");
        }



        let emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (userEmail.value.trim() === "") {
            emailMsg.innerHTML = "Email is required";
            emailMsg.style.display = "block";
            userEmail.classList.add("is-invalid");
            valid = false;
        }
        else if (!emailPattern.test(userEmail.value)) {
            emailMsg.innerHTML = "Enter a valid email";
            emailMsg.style.display = "block";
            userEmail.classList.add("is-invalid");
            valid = false;
        }
        else {
            emailMsg.style.display = "none";
            userEmail.classList.remove("is-invalid");
            userEmail.classList.add("is-valid");
        }


        if (valid) {
            alert("Thanks for contacting us");
            contactForm.reset();

            username.classList.remove("is-valid");
            userEmail.classList.remove("is-valid");
        }
    };

}


let years = document.getElementById("years");
let showrooms = document.getElementById("showrooms");
let items = document.getElementById("items");
let customers = document.getElementById("customers");


function startCounter(element, end, suffix = "") {

    if (element) {

        let count = 0;

        let timer = setInterval(() => {

            count++;

            element.innerHTML = count + suffix;

            if (count >= end) {
                clearInterval(timer);
            }

        }, 10);

    }

}


startCounter(years, 25);
startCounter(showrooms, 200, "+");
startCounter(items, 100, "M+");
startCounter(customers, 99, "%");