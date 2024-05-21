$(document).ready(function () {
    //выбор языка
    $(".header__lang-selected .header__lang-item").on("click", function () {
        $(this)
            .closest(".header__lang")
            .find(".header__lang-items")
            .toggleClass("header__lang-items--show");
        $(this).toggleClass("header__lang-item--active");
    });

    $(".header__lang-items .header__lang-item").on("click", function () {
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

    $(".category-slider__items").each(function (i) {
        i++;
        var i = new Swiper(this, {
            spaceBetween: 20,
            slidesPerView: 3,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    pagination: {
                        el: $(this).parent().find(".swiper-pagination")[0],
                        clickable: true,
                    },
                },
                640: {
                    slidesPerView: 1.3,
                    pagination: {
                        el: $(this).parent().find(".swiper-pagination")[0],
                        clickable: true,
                    },
                },
                1000: {
                    slidesPerView: 2,
                },
                1366: {
                    slidesPerView: 2.5,
                },
                1920: {
                    slidesPerView: 3,
                },
            },
        });
    });

    $(".category-slider__items--category").each(function (i) {
        i++;
        var i = new Swiper(this, {
            spaceBetween: 20,
            slidesPerView: 2,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    pagination: {
                        el: $(this).parent().find(".swiper-pagination")[0],
                        clickable: true,
                    },
                },
                640: {
                    slidesPerView: 1.3,
                    pagination: {
                        el: $(this).parent().find(".swiper-pagination")[0],
                        clickable: true,
                    },
                },
                1000: {
                    slidesPerView: 2,
                },
                1366: {
                    slidesPerView: 2,
                },
                1920: {
                    slidesPerView: 2,
                },
            },
        });
    });

    let brandSlider = new Swiper(".brands__slider", {
        spaceBetween: 50,
        slidesPerView: 8,
        navigation: {
            nextEl: ".brands .slider-arrows__right",
            prevEl: ".brands .slider-arrows__left",
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 20,
                pagination: {
                    el: ".brands .swiper-pagination",
                    clickable: true,
                },
            },
            480: {
                slidesPerView: 3,
                pagination: {
                    el: ".brands .swiper-pagination",
                    clickable: true,
                },
            },
            640: {
                slidesPerView: 3,
                pagination: {
                    el: ".brands .swiper-pagination",
                    clickable: true,
                },
            },
            1000: {
                slidesPerView: 6,
            },

            1366: {
                slidesPerView: 6,
            },
            1920: {
                slidesPerView: 8,
            },
        },
    });

    let catalogSlider = new Swiper(".catalog__slider", {
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
            nextEl: ".catalog__slider .slider-arrows__right",
            prevEl: ".catalog__slider .slider-arrows__left",
        },
        pagination: {
            el: ".catalog__slider .swiper-pagination",
            clickable: true,
        },
    });

    $(".products-slider__inner").each(function (i) {
        i++;
        var i = new Swiper(this, {
            spaceBetween: 20,
            slidesPerView: 6,
            navigation: {
                nextEl: $(this).parent().find(".slider-arrows__right")[0],
                prevEl: $(this).parent().find(".slider-arrows__left")[0],
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,

                    pagination: {
                        el: $(this).parent().find(".swiper-pagination")[0],
                        clickable: true,
                    },
                },
                480: {
                    slidesPerView: 1.8,
                    pagination: {
                        el: $(this).parent().find(".swiper-pagination")[0],
                        clickable: true,
                    },
                },
                640: {
                    slidesPerView: 2.5,
                    pagination: {
                        el: $(this).parent().find(".swiper-pagination")[0],
                        clickable: true,
                    },
                },
                1000: {
                    slidesPerView: 4,
                },
                1366: {
                    slidesPerView: 5,
                },
                1920: {
                    slidesPerView: 6,
                },
            },
        });
    });

    $(".products-slider__inner-catalog").each(function (i) {
        i++;
        var i = new Swiper(this, {
            spaceBetween: 20,
            slidesPerView: 5,
            navigation: {
                nextEl: $(this).parent().find(".slider-arrows__right")[0],
                prevEl: $(this).parent().find(".slider-arrows__left")[0],
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.95,
                    spaceBetween: 10,
                    pagination: {
                        el: $(this).parent().find(".swiper-pagination")[0],
                        clickable: true,
                    },
                },
                640: {
                    slidesPerView: 2.5,
                    pagination: {
                        el: $(this).parent().find(".swiper-pagination")[0],
                        clickable: true,
                    },
                },
                1000: {
                    slidesPerView: 3,
                },
                1366: {
                    slidesPerView: 4,
                },
                1920: {
                    slidesPerView: 5,
                },
            },
        });
    });

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

    //поиск адаптив
    $(".hero__search-link").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".hero__bottom").addClass("hero__bottom--search");
    });

    $(".hero__search__close").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".hero__bottom").removeClass("hero__bottom--search");
    });

    //мобильный слайдер категорий

    let categoryMob = new Swiper(".main-categories__slider", {
        spaceBetween: 20,
        slidesPerView: 2.5,
        pagination: {
            el: ".main-categories .swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1.5,
            },
            480: {
                slidesPerView: 1.8,
            },
            640: {
                slidesPerView: 2.5,
            },
        },
    });

    //modal
    $("a[data-modal]").click(function (event) {
        $(this).modal();
        return false;
    });

    $(".modal-filter .category__aside-header").on("click", function () {
        let container = $(this).closest(".category__aside-group");
        container.find(".category__aside-inner").slideToggle();
        $(this).toggleClass("category__aside-header--active");
    });

    $(".modal-header__title--inner").on("click", function (e) {
        e.preventDefault();
        let container = $(this).closest(".modal-heaedr__group");
        container.find(".modal-header__inner").slideToggle();
        $(this).toggleClass("modal-header__title--inner-active");
    });
});
