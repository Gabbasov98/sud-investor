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


    $(".projects__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".projects__tab").removeClass("projects__tab--active")
        $(`.projects__tab[data-tab-path="${path}"]`).addClass("projects__tab--active")
        $(".projects__tab-content").removeClass("projects__tab-content--active")
        $(`.projects__tab-content[data-tab-path="${path}"]`).addClass("projects__tab-content--active")
    })

    $('.custom-select__dropdown-item[data-view]').click(function() {
        let view = $(this).attr("data-view")
        if (view == 1) {
            $(".projects__view").removeClass("projects__view--table")
        } else {
            $(".projects__view").addClass("projects__view--table")
        }
    });
    // 

})