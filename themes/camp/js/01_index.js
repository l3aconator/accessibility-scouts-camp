$( document ).ready(function() {

    // MAKE THE DROPDOWN NAVIGATION WORK FOO
    $('.nav--item').hover(function() {
        var navItem = $(this).attr('data-dropdown'),
            parentAndNavItem = $('.nav--item' + '.nav--item__' + navItem),
            dropdown = $('.nav--dropdown' + '.nav--dropdown__' + navItem);

        dropdown.toggleClass('open');

        dropdown.hover(function() {
            parentAndNavItem.addClass('active');
            dropdown.addClass('open');
        });

        dropdown.mouseleave(function() {
            parentAndNavItem.removeClass('active');
            dropdown.removeClass('open');
        });
    });

    $('.checkbox').click(function() {
        var checkboxChild = $(this).children('input[type=checkbox]');

        if (checkboxChild.is( ":checked" )) {
            checkboxChild.prop('checked', false);
        } else {
           checkboxChild.prop('checked', true);
        }
    });

    // ---- Toggle night mode ----

    $('.js-checkbox--night-mode').click(function() {
        var checkboxChild = $(this).children('input[type=checkbox]');

        $('body').toggleClass('night-mode');

        if (localStorage.getItem('night-mode') == 'true') {
            localStorage.setItem('night-mode', 'false');
        } else {
            localStorage.setItem('night-mode', 'true');
        }
    });

    if (localStorage.getItem('night-mode') == 'true') {
        $('body').addClass('night-mode');
        $('.js-checkbox--night-mode input[type=checkbox]').prop('checked', true);
    }
});
