const breakpoint = window.matchMedia("(min-width:768px)");
let brendsSwiper;

const breakpointChecker = function () {
    if (breakpoint.matches === true && brendsSwiper !== undefined) {
        brendsSwiper.destroy(true, true);
        return;
    }
    if (breakpoint.matches === false) {
        return enableSwiper();
    }
};

const enableSwiper = function () {
    brendsSwiper = new Swiper(".brends__swiper", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();

let brendsWrapper = document.querySelector(".brends__swiper .swiper-wrapper");
let brendsButton = document.querySelector(".brends__more-button");
let moreButtonIcon = document.createElement("i");
moreButtonIcon.classList.add("more-button__icon", "icon", "icon--more");

brendsButton.addEventListener("click", () => {
    brendsWrapper.classList.toggle("swiper-wrapper--opened");
    brendsButton.classList.toggle("brends__more-button--active");
    if (brendsWrapper.classList.contains("swiper-wrapper--opened")) {
        brendsButton.replaceChildren(moreButtonIcon, "Скрыть");
    } else {
        brendsButton.replaceChildren(moreButtonIcon, "Показать все");
    }
});
