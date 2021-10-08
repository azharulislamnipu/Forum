(function ($, window, document,) {
    "use strict";
    const $win = $(window);
    const $doc = $(document);
    const $body = $('body');




    /*
    *
    * ==========================================
    *  Lazy Loader
    * ==========================================
    *
    */

    $(".lazy").lazyload({
        effect : "fadeIn"
    });


    /*
   *
   * ==========================================
   *  counter
   * ==========================================
   *
   */

    $doc.ready(function ($) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });

    /*
     *
     * ==========================================
     * count-wrap
     * ==========================================
     *
     */
    var countDownDate, x, now, distance, days, hours, minutes, seconds, i, count_date;
    var countDown = $(".count-wrap");
    if (countDown.length > 0) {
        countDown.each(function () {
            count_date = $(this).attr("data-order-date");
            countDownDate = new Date(count_date).getTime();
            count_down($(this), countDownDate);
        });
    }

    function count_down($trigger, $final_date) {
        x = setInterval(function () {
            now = new Date().getTime();
            distance = $final_date - now;
            days = Math.floor(distance / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);
            $trigger.html(' <li class="list-inline-item text-center">\n' +
                '                        <div class="count-wrap__count">\n' +
                '                            <span class="count-wrap__count-number">' + days + '</span>\n' +
                '                            <span class="count-wrap__count-title">Days</span>\n' +
                '                        </div>\n' +
                '                    </li>\n' +
                '                    <li class="list-inline-item text-center">\n' +
                '                        <span class="semicolon">:</span>\n' +
                '                    </li>\n' +
                '                    <li class="list-inline-item text-center">\n' +
                '                        <div class="count-wrap__count">\n' +
                '                        <span class="count-wrap__count-number">' + hours + '</span>\n' +
                '                        <span class="count-wrap__count-title">Hours</span>\n' +
                '                        </div>\n' +
                '                    </li>\n' +
                '                    <li class="list-inline-item text-center">\n' +
                '                        <span class="semicolon">:</span>\n' +
                '                    </li>\n' +
                '                    <li class="list-inline-item text-center">\n' +
                '                        <div class="count-wrap__count">\n' +
                '                        <span class="count-wrap__count-number">' + minutes + '</span>\n' +
                '                        <span class="count-wrap__count-title">Minutes</span>\n' +
                '                        </div>\n' +
                '                    </li>\n' +
                '                    <li class="list-inline-item text-center">\n' +
                '                        <span class="semicolon">:</span>\n' +
                '                    </li>\n' +
                '                    <li class="list-inline-item text-center">\n' +
                '                        <div class="count-wrap__count">\n' +
                '                        <span class="count-wrap__count-number">' + seconds + '</span>\n' +
                '                        <span class="count-wrap__count-title">Seconds</span>\n' +
                '                        </div>\n' +
                '                    </li>');

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                $(".count-wrap").html = '<li class="list-inline-item text-center">\n' +
                    '                                    <p class="font-weight-bold m-0 text-white">EXPIRED</p>\n' +
                    '                                </li>';
            }
        }, 1000);
    }


    /*
    *
    * ==========================================
    *  back to top
    * ==========================================
    *
    */

    $win.scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });


})(jQuery, window, document);