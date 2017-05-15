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

    console.log( "ready!" );
});
