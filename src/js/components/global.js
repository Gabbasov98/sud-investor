function customSelect() {
    $(".custom-select__target").click(function() {
        $(this).parents(".custom-select").toggleClass("custom-select--active")
    })

    $(".custom-select__top").click(function() {
        $(this).parents(".custom-select").toggleClass("custom-select--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.custom-select__dropdown-inner');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if (div.parents(".custom-select").hasClass("custom-select--active")) {
                div.parents(".custom-select").removeClass("custom-select--active")
            }
        }
    });

    function unselectOption(dropdown) {
        if ($(dropdown).hasClass("custom-select__dropdown-item--country")) {
            $(".custom-select__dropdown-item--country").removeClass("custom-select__dropdown-item--selected")
            $(dropdown).addClass("custom-select__dropdown-item--selected")
            $(dropdown).next().slideToggle()
        } else {
            $(dropdown).parents(".custom-select__dropdown").find(".custom-select__dropdown-item").removeClass("custom-select__dropdown-item--selected")
            $(dropdown).parents(".custom-select").removeClass("custom-select--active")
        }
    }

    $(".custom-select__dropdown-item").click(function() {
        unselectOption($(this))
        $(this).addClass("custom-select__dropdown-item--selected")
        $(this).parents(".custom-select").find("input").attr("value", $(this).text())
    })
}

$(document).ready(function() {

    customSelect()


    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__right").toggleClass("header__right--active")
        $(body).toggleClass("fixed-body")
    })


    $(".tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(this).parents(".tab-parent").find(".tab").removeClass("tab--active")
        $(this).parents(".tab-parent").find(`.tab[data-tab-path="${path}"]`).addClass("tab--active")
        $(this).parents(".tab-parent").find(".tab__content").removeClass("tab__content--active")
        $(this).parents(".tab-parent").find(`.tab__content[data-tab-path="${path}"]`).addClass("tab__content--active")
    })


})