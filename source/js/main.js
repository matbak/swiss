import $ from "jquery";

(function ($) {
    $('.js-popup').on('click', function (event) {
        event.preventDefault();

        showPopup (this);

    });
    $('.point').on('click', function (event) {
        event.preventDefault();

        showPopup (this);
    });

    function showPopup (el) {
        var targetPopupId = $(el).attr('href');
        var $popup = $(targetPopupId);
        var $blurWrapper = $('.blur');
        var $close = $popup.find('.popup__close');

        $popup.addClass('show');
        $blurWrapper.addClass('blur--on');

        $close.on('click', function (event) {
            event.preventDefault();
            $popup.removeClass('show');
            $blurWrapper.removeClass('blur--on');
        });
    }
})($);