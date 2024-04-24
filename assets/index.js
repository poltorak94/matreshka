$(document).ready(function () {
    //выбор языка
    $(".header__lang-selected .header__lang-item").on("click", function () {
        $(this)
            .closest(".header__lang")
            .find(".header__lang-items")
            .toggleClass("header__lang-items--show");
        $(this).toggleClass("header__lang-item--active");
    });

    $(".header__lang-items .header__lang-item").on("click", function (e) {
        e.preventDefault();
        $(".header__lang-items").removeClass("header__lang-items--show");
        $(".header__lang-selected .header__lang-item").removeClass(
            "header__lang-item--active"
        );
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".header__lang").length) {
            $(".header__lang-items").removeClass("header__lang-items--show");
            $(".header__lang-selected .header__lang-item").removeClass(
                "header__lang-item--active"
            );
        }
    });

    //слайдеры
    let mainBannerSwiper = new Swiper(".main-banner__slider", {
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".main-banner .slider-arrows__right",
            prevEl: ".main-banner .slider-arrows__left",
        },
    });

    let categorySlider1 = new Swiper(
        ".category-slider--1 .category-slider__items",
        {
            spaceBetween: 20,
            slidesPerView: 3,
        }
    );
    let categorySlider2 = new Swiper(
        ".category-slider--2 .category-slider__items",
        {
            spaceBetween: 20,
            slidesPerView: 3,
        }
    );

    let brandSlider = new Swiper(".brands__slider", {
        spaceBetween: 90,
        slidesPerView: 8,
    });

    let hitSlider = new Swiper(".products-slider--1 .products-slider__inner", {
        spaceBetween: 20,
        slidesPerView: 6,
        navigation: {
            nextEl: ".products-slider--1 .slider-arrows__right",
            prevEl: ".products-slider--1 .slider-arrows__left",
        },
    });

    let stockSlider = new Swiper(
        ".products-slider--2 .products-slider__inner",
        {
            spaceBetween: 20,
            slidesPerView: 6,
            navigation: {
                nextEl: ".products-slider--2 .slider-arrows__right",
                prevEl: ".products-slider--2 .slider-arrows__left",
            },
        }
    );

    let priceSlider = new Swiper(
        ".products-slider--3 .products-slider__inner",
        {
            spaceBetween: 20,
            slidesPerView: 6,
            navigation: {
                nextEl: ".products-slider--3 .slider-arrows__right",
                prevEl: ".products-slider--3 .slider-arrows__left",
            },
        }
    );

    //счетчик товаров
    let productCount;
    $(".product-card__count--plus").on("click", function (e) {
        e.preventDefault();
        let inputrField = $(this)
            .closest(".product-card__counts")
            .find(".product-card__input");

        let step = parseInt(inputrField.attr("data-step"));
        productCount = parseInt(inputrField.val());
        productCount += step;
        inputrField.val(productCount);
    });

    $(".product-card__count--minus").on("click", function (e) {
        e.preventDefault();
        let inputrField = $(this)
            .closest(".product-card__counts")
            .find(".product-card__input");

        let step = parseInt(inputrField.attr("data-step"));
        let minVal = parseInt(inputrField.attr("data-min"));
        productCount = parseInt(inputrField.val());
        productCount -= step;
        if (productCount < minVal) {
            productCount = minVal;
        }
        inputrField.val(productCount);
    });

    //добавление в корзину уведомление на товаре
    $(".product-card__add").on("click", function (e) {
        e.preventDefault();
        let container = $(this).closest(".product-card__controls");
        let input = container.find(".product-card__input");
        let val = container.find(".product-card__input").val();
        container.find(".product-card__added-info span").text(val);
        container.addClass("product-card__controls--added");

        setTimeout(function () {
            container.removeClass("product-card__controls--added");
            input.val(parseInt(input.attr("data-min")));
        }, 2500);
    });
});
