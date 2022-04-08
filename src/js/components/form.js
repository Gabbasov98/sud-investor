$(document).ready(function() {

    $("input[type='tel']").mask("+7 (999) 999-9999");




})

$(".validate-form").submit(function(e) {

    e.preventDefault()
    let isRequiiredFilled

    $(".required").each(function(index, el) {
        var value = $(el).val();
        if (!value) {
            $(el).parents(".form-group").addClass("form-group--error")
            isRequiiredFilled = false
        } else {
            $(el).parents(".form-group").removeClass("form-group--error")
            isRequiiredFilled = true
        }
    });
    if (!isRequiiredFilled) {
        return
    }
})