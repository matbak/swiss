import $ from "jquery";

(function ($) {
    $('.js-popup').on('click', function (event) {
        event.preventDefault();
        var targetPopupId = $(this).attr('href');
        var $popup = $(targetPopupId);
        var $blurWrapper = $('.blur');
        var $close = $popup.find('.popup__close');

        $popup.addClass('show');
        $blurWrapper.addClass('blur--on')

        $close.on('click', function (event) {
            event.preventDefault();
            $popup.removeClass('show');
            $blurWrapper.removeClass('blur--on');
        });
    });
})($);